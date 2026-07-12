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

// lakebed-source:client/presets.ts
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
var ISettings = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ u3("path", { d: "M12 3.5v2.2M12 18.3v2.2M4.9 6.5l1.6 1.6M17.5 15.9l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.5l1.6-1.6M17.5 8.1l1.6-1.6" })
  ] })
);
var SETTINGS_KEY = "vaudio-2-settings";
var DEFAULT_SETTINGS = { recordMicAudio: false };
function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return {
      recordMicAudio: Boolean(parsed.recordMicAudio)
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}
function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
  }
}
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
function SettingsToggle(props) {
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": props.checked,
      disabled: props.disabled,
      onClick: () => props.onChange(!props.checked),
      class: "flex w-full items-start gap-3 border border-[var(--line)] bg-[var(--panel)] px-3 py-3 text-left transition-colors hover:border-[var(--line-hot)] disabled:opacity-40",
      children: [
        /* @__PURE__ */ u3("span", { class: "min-w-0 flex-1", children: [
          /* @__PURE__ */ u3("span", { class: "block font-mono text-[11px] text-[var(--paper)]", children: props.label }),
          /* @__PURE__ */ u3("span", { class: "mt-1 block font-mono text-[9.5px] leading-relaxed text-[var(--mute)]", children: props.hint })
        ] }),
        /* @__PURE__ */ u3(
          "span",
          {
            class: `mt-0.5 flex h-[18px] w-[34px] flex-shrink-0 items-center border px-0.5 transition-colors ${props.checked ? "border-[var(--acid)] bg-[var(--acid)]/20" : "border-[var(--line)] bg-[var(--void)]"}`,
            "aria-hidden": "true",
            children: /* @__PURE__ */ u3(
              "span",
              {
                class: `h-[12px] w-[12px] transition-transform ${props.checked ? "translate-x-[14px] bg-[var(--acid)]" : "translate-x-0 bg-[var(--mute)]"}`
              }
            )
          }
        )
      ]
    }
  );
}
function SettingsModal(props) {
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4",
      onClick: props.onClose,
      children: /* @__PURE__ */ u3(
        "div",
        {
          class: "pop w-full max-w-[420px] border border-[var(--line)] bg-[var(--panel-2)] shadow-2xl",
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ u3("header", { class: "flex items-center gap-2 border-b border-[var(--line)] px-4 py-3", children: [
              /* @__PURE__ */ u3("span", { class: "text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--acid)]", children: "Settings" }),
              /* @__PURE__ */ u3("span", { class: "flex-1" }),
              /* @__PURE__ */ u3(
                "button",
                {
                  type: "button",
                  class: "border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]",
                  onClick: props.onClose,
                  children: "esc"
                }
              )
            ] }),
            /* @__PURE__ */ u3("div", { class: "space-y-3 p-4", children: [
              /* @__PURE__ */ u3("p", { class: "font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: "Recording" }),
              /* @__PURE__ */ u3(
                SettingsToggle,
                {
                  label: "Mic audio in recording",
                  hint: "Mux the live microphone into recorded video. Uses the same mic that drives audio-react \u2014 turn the mic on first, or recording will request it.",
                  checked: props.settings.recordMicAudio,
                  disabled: props.recording,
                  onChange: (checked) => props.onChange({ recordMicAudio: checked })
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
  const [recordingWithMic, setRecordingWithMic] = d2(false);
  const [exportRes, setExportRes] = d2("1080");
  const [fullscreen, setFullscreen] = d2(false);
  const [presetsOpen, setPresetsOpen] = d2(false);
  const [scenesOpen, setScenesOpen] = d2(false);
  const [helpOpen, setHelpOpen] = d2(false);
  const [settingsOpen, setSettingsOpen] = d2(false);
  const [settings, setSettings] = d2(() => loadSettings());
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
  const settingsOpenRef = A2(false);
  const settingsRef = A2(settings);
  const recordingMicRef = A2(false);
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
  settingsOpenRef.current = settingsOpen;
  settingsRef.current = settings;
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
      if (settingsOpenRef.current) {
        if (event.key === "Escape") {
          event.preventDefault();
          setSettingsOpen(false);
        }
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
  function updateSettings(patch) {
    setSettings((previous) => {
      const next = { ...previous, ...patch };
      saveSettings(next);
      return next;
    });
  }
  async function ensureMic(options) {
    if (micStreamRef.current) {
      setMicActive(true);
      return true;
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
      if (options?.toastOnSuccess !== false)
        showToast("Mic live \u2014 audio drives the shader");
      return true;
    } catch {
      if (options?.toastOnError !== false)
        showToast("Microphone was blocked");
      return false;
    }
  }
  async function toggleMic() {
    if (micActive) {
      if (recording && recordingMicRef.current) {
        showToast("Can't stop mic while recording with audio");
        return;
      }
      for (const track of micStreamRef.current?.getTracks() ?? [])
        track.stop();
      micStreamRef.current = null;
      analyserRef.current = null;
      audioLevelRef.current = 0;
      setMicActive(false);
      return;
    }
    await ensureMic();
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
  function pickRecorderMime(includeAudio) {
    const withAudio = [
      "video/webm;codecs=vp9,opus",
      "video/webm;codecs=vp8,opus",
      "video/webm",
      "video/mp4"
    ];
    const videoOnly = [
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/webm",
      "video/mp4"
    ];
    return (includeAudio ? withAudio : videoOnly).find(
      (type) => MediaRecorder.isTypeSupported(type)
    );
  }
  async function toggleRecording() {
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
    let includeMic = settingsRef.current.recordMicAudio;
    if (includeMic) {
      const ok = await ensureMic({
        toastOnSuccess: false,
        toastOnError: true
      });
      if (!ok) includeMic = false;
    }
    engine.render(buildFrame());
    const stream = canvas.captureStream(60);
    if (includeMic) {
      for (const track of micStreamRef.current?.getAudioTracks() ?? []) {
        stream.addTrack(track);
      }
    }
    const mimeType = pickRecorderMime(includeMic);
    try {
      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 18e6,
        ...includeMic ? { audioBitsPerSecond: 256e3 } : {}
      });
      chunksRef.current = [];
      recordingMicRef.current = includeMic;
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
        recordingMicRef.current = false;
        exportLockRef.current = null;
        restoreLiveCanvasSize();
        downloadBlob(blob, exportFilename(extension));
        recorderRef.current = null;
        setRecordingWithMic(false);
        setRecording(false);
      };
      recorder.start(250);
      recorderRef.current = recorder;
      setRecordingWithMic(includeMic);
      setRecording(true);
      showToast(
        includeMic ? `Recording ${size.width}\xD7${size.height} \xB7 mic` : `Recording ${size.width}\xD7${size.height}`
      );
    } catch {
      recordingMicRef.current = false;
      setRecordingWithMic(false);
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
          title: recording ? "Stop recording" : settings.recordMicAudio ? "Record canvas + mic" : "Record the canvas to video",
          danger: recording,
          onClick: () => void toggleRecording(),
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
          title: "Settings",
          active: settingsOpen,
          onClick: () => {
            setHelpOpen(false);
            setSettingsOpen((previous) => !previous);
          },
          children: /* @__PURE__ */ u3(ISettings, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Instrument manual (?)",
          active: helpOpen,
          onClick: () => {
            setSettingsOpen(false);
            setHelpOpen((previous) => !previous);
          },
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
              "Rec",
              recordingWithMic ? " \xB7 mic" : ""
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
    settingsOpen && /* @__PURE__ */ u3(
      SettingsModal,
      {
        settings,
        recording,
        onChange: updateSettings,
        onClose: () => setSettingsOpen(false)
      }
    ),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvcHJlc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZW5naW5lLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9tZWRpYS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIFNjZW5lIGRvY3VtZW50IHR5cGVzIHNoYXJlZCBieSBjbGllbnQgYW5kIHNlcnZlciwgcGx1cyBzYW5pdGl6ZXJzIGFuZCB0aGVcbi8vIEpTT04gY29kZWMuIEEgc2NlbmUgaXMgc21hbGwgKHBhcmFtcyBvbmx5KSBcdTIwMTQgbWVkaWEgYmxvYnMgbGl2ZSBjbGllbnQtc2lkZS5cblxuZXhwb3J0IGNvbnN0IFNDRU5FX0RBVEFfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgVEhVTUJfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgTUFYX0xBWUVSUyA9IDEyO1xuXG5leHBvcnQgY29uc3QgTUVESUFfS0lORFMgPSBbXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIiwgXCJkYXRhXCJdIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgTWVkaWFLaW5kID0gKHR5cGVvZiBNRURJQV9LSU5EUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLFxuICBcImFkZFwiLFxuICBcInNjcmVlblwiLFxuICBcIm11bHRpcGx5XCIsXG4gIFwib3ZlcmxheVwiLFxuICBcImRpZmZlcmVuY2VcIixcbiAgXCJsaWdodGVuXCIsXG4gIFwiZGFya2VuXCIsXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IFRJTEVfTU9ERVMgPSBbXCJjcm9wXCIsIFwicmVwZWF0XCIsIFwibWlycm9yXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQkdfTU9ERVMgPSBbXCJ2b2lkXCIsIFwiZ3JhZGllbnRcIiwgXCJwbGFzbWFcIiwgXCJ0dW5uZWxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQT0lOVEVSX01PREVTID0gW1widm9ydGV4XCIsIFwiZ3Jhdml0eVwiLCBcInByaXNtXCIsIFwibWVsdFwiXSBhcyBjb25zdDtcblxuLyoqIFBlci1sYXllciBlZmZlY3QgKyB0cmFuc2Zvcm0gc3RhY2suIEFsbCAwLi4xIHVubGVzcyBub3RlZC4gKi9cbmV4cG9ydCB0eXBlIExheWVyRnggPSB7XG4gIC8vIFRyYW5zZm9ybSAoc2NlbmUgdW5pdHM6IHgveSBhcmUgY2VudGVyIG9mZnNldHMsIC0yLi4yOyBzY2FsZSAwLjA1Li42KVxuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogQmxlbmRNb2RlO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICAvKiogMCBjcm9wLCAxIHJlcGVhdCwgMiBtaXJyb3ItcmVwZWF0IFx1MjAxNCByZXBlYXQgbWFrZXMgYSBzaW5nbGUgaW1hZ2UgaW5maW5pdGUgKi9cbiAgdGlsZTogbnVtYmVyO1xuICAvLyBEaXN0b3J0XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgLyoqIC0xIHBpbmNoIC4uIDEgYnVsZ2UgKi9cbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGh1ZTogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICB0aW50Q29sb3I6IHN0cmluZztcbiAgLy8gTW90aW9uIChhbmltYXRlZCBieSB0aGUgZW5naW5lIGNsb2NrKVxuICAvKiogLTEuLjEgcmV2b2x1dGlvbnMtaXNoICovXG4gIHNwaW46IG51bWJlcjtcbiAgZHJpZnQ6IG51bWJlcjtcbiAgcHVsc2U6IG51bWJlcjtcbiAgc2hpbW1lcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVMYXllciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgLyoqIEluZGV4ZWREQiBtZWRpYSBrZXkgb24gdGhlIGNsaWVudCB0aGF0IGNyZWF0ZWQgaXQuICovXG4gIGltYWdlSWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogSG93IHRoZSBJbmRleGVkREIgYmxvYiBzaG91bGQgYmUgZGVjb2RlZCAvIHBsYXllZC4gRGVmYXVsdHMgdG8gaW1hZ2UuICovXG4gIG1lZGlhS2luZDogTWVkaWFLaW5kO1xuICBmeDogTGF5ZXJGeDtcbn07XG5cbi8qKiBHbG9iYWwgcG9zdC1wcm9jZXNzaW5nIHBhcmFtcy4gQWxsIDAuLjEgdW5sZXNzIG5vdGVkLiAqL1xuZXhwb3J0IHR5cGUgR2xvYmFsRnggPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IHN0cmluZztcbiAgYmdCOiBzdHJpbmc7XG4gIC8vIEZlZWRiYWNrXG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICAvKiogLTEuLjEgKi9cbiAgZmJab29tOiBudW1iZXI7XG4gIC8qKiAtMS4uMSAqL1xuICBmYlJvdGF0ZTogbnVtYmVyO1xuICBmYkh1ZTogbnVtYmVyO1xuICAvLyBTcGFjZVxuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGNocm9tYTogbnVtYmVyO1xuICBodWVPcmJpdDogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIHNvbGFyaXplOiBudW1iZXI7XG4gIC8vIFNpZ25hbFxuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIC8vIE1vdGlvblxuICAvKiogMC4uMiAqL1xuICBzcGVlZDogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIC8vIEN1cnNvclxuICBwb2ludGVyRm9yY2U6IG51bWJlcjtcbiAgcG9pbnRlclNpemU6IG51bWJlcjtcbiAgcG9pbnRlck1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxheWVyczogU2NlbmVMYXllcltdO1xuICBnbG9iYWw6IEdsb2JhbEZ4O1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfRlg6IExheWVyRnggPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICByb3RhdGlvbjogMCxcbiAgb3BhY2l0eTogMSxcbiAgYmxlbmQ6IFwibm9ybWFsXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIHRpbGU6IDAsXG4gIHdhcnA6IDAsXG4gIHN3aXJsOiAwLFxuICByaXBwbGU6IDAsXG4gIGthbGVpZG86IDAsXG4gIHBpeGVsYXRlOiAwLFxuICBidWxnZTogMCxcbiAgbWlycm9yOiAwLFxuICBodWU6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBicmlnaHRuZXNzOiAxLFxuICBpbnZlcnQ6IDAsXG4gIHBvc3Rlcml6ZTogMCxcbiAgY2hyb21hOiAwLFxuICBlZGdlczogMCxcbiAgdGludEFtb3VudDogMCxcbiAgdGludENvbG9yOiBcIiNhODc4ODBcIixcbiAgc3BpbjogMCxcbiAgZHJpZnQ6IDAsXG4gIHB1bHNlOiAwLFxuICBzaGltbWVyOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX0ZYOiBHbG9iYWxGeCA9IHtcbiAgYmdNb2RlOiAwLFxuICBiZ0E6IFwiIzA2MDYwOFwiLFxuICBiZ0I6IFwiIzFhMTIxNlwiLFxuICBmZWVkYmFjazogMCxcbiAgdHJhaWxzOiAwLjYsXG4gIGZiWm9vbTogMCxcbiAgZmJSb3RhdGU6IDAsXG4gIGZiSHVlOiAwLFxuICB3YXJwOiAwLFxuICBzd2lybDogMCxcbiAgcmlwcGxlOiAwLFxuICB6b29tOiAwLFxuICBrYWxlaWRvOiAwLFxuICBtaXJyb3I6IDAsXG4gIGNocm9tYTogMCxcbiAgaHVlT3JiaXQ6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBzb2xhcml6ZTogMCxcbiAgZ3JhaW46IDAsXG4gIHNjYW5saW5lczogMCxcbiAgdmlnbmV0dGU6IDAuMjIsXG4gIHN0cm9iZTogMCxcbiAgc3BlZWQ6IDEsXG4gIGF1ZGlvUmVhY3Q6IDAsXG4gIHBvaW50ZXJGb3JjZTogMC42LFxuICBwb2ludGVyU2l6ZTogMC4zNSxcbiAgcG9pbnRlck1vZGU6IDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBudW0odmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjbGFtcChmaW5pdGUodmFsdWUsIGZhbGxiYWNrKSwgbWluLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVMYXllckZ4KGlucHV0OiBQYXJ0aWFsPExheWVyRng+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0xBWUVSX0ZYO1xuICByZXR1cm4ge1xuICAgIHg6IG51bSh0LngsIGQueCwgLTMsIDMpLFxuICAgIHk6IG51bSh0LnksIGQueSwgLTMsIDMpLFxuICAgIHNjYWxlOiBudW0odC5zY2FsZSwgZC5zY2FsZSwgMC4wNSwgNiksXG4gICAgcm90YXRpb246IG51bSh0LnJvdGF0aW9uLCBkLnJvdGF0aW9uLCAtMzYwMCwgMzYwMCksXG4gICAgb3BhY2l0eTogbnVtKHQub3BhY2l0eSwgZC5vcGFjaXR5LCAwLCAxKSxcbiAgICBibGVuZDogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZCBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmQgYXMgQmxlbmRNb2RlKSA6IFwibm9ybWFsXCIsXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIHRpbGU6IG51bSh0LnRpbGUsIGQudGlsZSwgMCwgMiksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAga2FsZWlkbzogbnVtKHQua2FsZWlkbywgZC5rYWxlaWRvLCAwLCAxKSxcbiAgICBwaXhlbGF0ZTogbnVtKHQucGl4ZWxhdGUsIGQucGl4ZWxhdGUsIDAsIDEpLFxuICAgIGJ1bGdlOiBudW0odC5idWxnZSwgZC5idWxnZSwgLTEsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgaHVlOiBudW0odC5odWUsIGQuaHVlLCAwLCAxKSxcbiAgICBzYXR1cmF0aW9uOiBudW0odC5zYXR1cmF0aW9uLCBkLnNhdHVyYXRpb24sIDAsIDIpLFxuICAgIGNvbnRyYXN0OiBudW0odC5jb250cmFzdCwgZC5jb250cmFzdCwgMCwgMiksXG4gICAgYnJpZ2h0bmVzczogbnVtKHQuYnJpZ2h0bmVzcywgZC5icmlnaHRuZXNzLCAwLCAyKSxcbiAgICBpbnZlcnQ6IG51bSh0LmludmVydCwgZC5pbnZlcnQsIDAsIDEpLFxuICAgIHBvc3Rlcml6ZTogbnVtKHQucG9zdGVyaXplLCBkLnBvc3Rlcml6ZSwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBlZGdlczogbnVtKHQuZWRnZXMsIGQuZWRnZXMsIDAsIDEpLFxuICAgIHRpbnRBbW91bnQ6IG51bSh0LnRpbnRBbW91bnQsIGQudGludEFtb3VudCwgMCwgMSksXG4gICAgdGludENvbG9yOiBjb2xvcih0LnRpbnRDb2xvciwgZC50aW50Q29sb3IpLFxuICAgIHNwaW46IG51bSh0LnNwaW4sIGQuc3BpbiwgLTEsIDEpLFxuICAgIGRyaWZ0OiBudW0odC5kcmlmdCwgZC5kcmlmdCwgMCwgMSksXG4gICAgcHVsc2U6IG51bSh0LnB1bHNlLCBkLnB1bHNlLCAwLCAxKSxcbiAgICBzaGltbWVyOiBudW0odC5zaGltbWVyLCBkLnNoaW1tZXIsIDAsIDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVHbG9iYWxGeChpbnB1dDogUGFydGlhbDxHbG9iYWxGeD4gfCBudWxsIHwgdW5kZWZpbmVkKTogR2xvYmFsRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0dMT0JBTF9GWDtcbiAgcmV0dXJuIHtcbiAgICBiZ01vZGU6IG51bSh0LmJnTW9kZSwgZC5iZ01vZGUsIDAsIEJHX01PREVTLmxlbmd0aCAtIDEpLFxuICAgIGJnQTogY29sb3IodC5iZ0EsIGQuYmdBKSxcbiAgICBiZ0I6IGNvbG9yKHQuYmdCLCBkLmJnQiksXG4gICAgZmVlZGJhY2s6IG51bSh0LmZlZWRiYWNrLCBkLmZlZWRiYWNrLCAwLCAxKSxcbiAgICB0cmFpbHM6IG51bSh0LnRyYWlscywgZC50cmFpbHMsIDAsIDEpLFxuICAgIGZiWm9vbTogbnVtKHQuZmJab29tLCBkLmZiWm9vbSwgLTEsIDEpLFxuICAgIGZiUm90YXRlOiBudW0odC5mYlJvdGF0ZSwgZC5mYlJvdGF0ZSwgLTEsIDEpLFxuICAgIGZiSHVlOiBudW0odC5mYkh1ZSwgZC5mYkh1ZSwgMCwgMSksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAgem9vbTogbnVtKHQuem9vbSwgZC56b29tLCAwLCAxKSxcbiAgICBrYWxlaWRvOiBudW0odC5rYWxlaWRvLCBkLmthbGVpZG8sIDAsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBodWVPcmJpdDogbnVtKHQuaHVlT3JiaXQsIGQuaHVlT3JiaXQsIDAsIDEpLFxuICAgIHNhdHVyYXRpb246IG51bSh0LnNhdHVyYXRpb24sIGQuc2F0dXJhdGlvbiwgMCwgMiksXG4gICAgY29udHJhc3Q6IG51bSh0LmNvbnRyYXN0LCBkLmNvbnRyYXN0LCAwLCAyKSxcbiAgICBzb2xhcml6ZTogbnVtKHQuc29sYXJpemUsIGQuc29sYXJpemUsIDAsIDEpLFxuICAgIGdyYWluOiBudW0odC5ncmFpbiwgZC5ncmFpbiwgMCwgMSksXG4gICAgc2NhbmxpbmVzOiBudW0odC5zY2FubGluZXMsIGQuc2NhbmxpbmVzLCAwLCAxKSxcbiAgICB2aWduZXR0ZTogbnVtKHQudmlnbmV0dGUsIGQudmlnbmV0dGUsIDAsIDEpLFxuICAgIHN0cm9iZTogbnVtKHQuc3Ryb2JlLCBkLnN0cm9iZSwgMCwgMSksXG4gICAgc3BlZWQ6IG51bSh0LnNwZWVkLCBkLnNwZWVkLCAwLCAyKSxcbiAgICBhdWRpb1JlYWN0OiBudW0odC5hdWRpb1JlYWN0LCBkLmF1ZGlvUmVhY3QsIDAsIDEpLFxuICAgIHBvaW50ZXJGb3JjZTogbnVtKHQucG9pbnRlckZvcmNlLCBkLnBvaW50ZXJGb3JjZSwgMCwgMSksXG4gICAgcG9pbnRlclNpemU6IG51bSh0LnBvaW50ZXJTaXplLCBkLnBvaW50ZXJTaXplLCAwLjAyLCAxKSxcbiAgICBwb2ludGVyTW9kZTogbnVtKHQucG9pbnRlck1vZGUsIGQucG9pbnRlck1vZGUsIDAsIFBPSU5URVJfTU9ERVMubGVuZ3RoIC0gMSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU2NlbmUoaW5wdXQ6IHVua25vd24pOiBTY2VuZSB7XG4gIGNvbnN0IHJhdyA9IChpbnB1dCA/PyB7fSkgYXMgUGFydGlhbDxTY2VuZT47XG4gIGNvbnN0IGxheWVyc1JhdyA9IEFycmF5LmlzQXJyYXkocmF3LmxheWVycykgPyByYXcubGF5ZXJzLnNsaWNlKDAsIE1BWF9MQVlFUlMpIDogW107XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiByYXcubmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJhdy5uYW1lIDogXCJcIiwgXCJVbnRpdGxlZFwiKSxcbiAgICBsYXllcnM6IGxheWVyc1Jhd1xuICAgICAgLmZpbHRlcigobCk6IGwgaXMgU2NlbmVMYXllciA9PiAhIWwgJiYgdHlwZW9mIGwgPT09IFwib2JqZWN0XCIpXG4gICAgICAubWFwKChsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHR5cGVvZiBsLmlkID09PSBcInN0cmluZ1wiICYmIGwuaWQgPyBsLmlkLnNsaWNlKDAsIDQwKSA6IGBsYXllci0ke2luZGV4fWAsXG4gICAgICAgIGltYWdlSWQ6IHR5cGVvZiBsLmltYWdlSWQgPT09IFwic3RyaW5nXCIgPyBsLmltYWdlSWQuc2xpY2UoMCwgNjApIDogXCJcIixcbiAgICAgICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiBsLm5hbWUgPT09IFwic3RyaW5nXCIgPyBsLm5hbWUgOiBcIlwiLCBcIkxheWVyXCIpLFxuICAgICAgICBtZWRpYUtpbmQ6IE1FRElBX0tJTkRTLmluY2x1ZGVzKGwubWVkaWFLaW5kIGFzIE1lZGlhS2luZClcbiAgICAgICAgICA/IChsLm1lZGlhS2luZCBhcyBNZWRpYUtpbmQpXG4gICAgICAgICAgOiBcImltYWdlXCIsXG4gICAgICAgIGZ4OiBzYW5pdGl6ZUxheWVyRngobC5meCksXG4gICAgICB9KSksXG4gICAgZ2xvYmFsOiBzYW5pdGl6ZUdsb2JhbEZ4KHJhdy5nbG9iYWwpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU2NlbmUoc2NlbmU6IFNjZW5lKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjZW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNjZW5lKHJhdzogc3RyaW5nKTogU2NlbmUge1xuICB0cnkge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKEpTT04ucGFyc2UocmF3KSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKG51bGwpO1xuICB9XG59XG4iLCAiLy8gTmFtZWQgZ2xvYmFsLUZYIGxvb2tzLCBwbHVzIHJhbmRvbWl6ZSAvIG11dGF0ZSBoZWxwZXJzIGZvciBib3RoIHRoZSB3b3JsZFxuLy8gcGlwZWxpbmUgYW5kIHBlci1sYXllciBlZmZlY3Qgc3RhY2tzLlxuXG5pbXBvcnQge1xuICBCTEVORF9NT0RFUyxcbiAgREVGQVVMVF9HTE9CQUxfRlgsXG4gIERFRkFVTFRfTEFZRVJfRlgsXG4gIGNsYW1wLFxuICB0eXBlIEJsZW5kTW9kZSxcbiAgdHlwZSBHbG9iYWxGeCxcbiAgdHlwZSBMYXllckZ4LFxufSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIGxvb2sob3ZlcnJpZGVzOiBQYXJ0aWFsPEdsb2JhbEZ4Pik6IEdsb2JhbEZ4IHtcbiAgcmV0dXJuIHsgLi4uREVGQVVMVF9HTE9CQUxfRlgsIC4uLm92ZXJyaWRlcyB9O1xufVxuXG5leHBvcnQgY29uc3QgV09STERfUFJFU0VUUzogeyBuYW1lOiBzdHJpbmc7IGNvZGU6IHN0cmluZzsgZ2xvYmFsOiBHbG9iYWxGeCB9W10gPSBbXG4gIHsgbmFtZTogXCJDbGVhbiBzaWduYWxcIiwgY29kZTogXCIwMFwiLCBnbG9iYWw6IGxvb2soe30pIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxpcXVpZCBjaHJvbWVcIixcbiAgICBjb2RlOiBcIjAxXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuNSwgc3dpcmw6IDAuMzQsIGNocm9tYTogMC4zLCBodWVPcmJpdDogMC4yNCwgc2F0dXJhdGlvbjogMS4yLFxuICAgICAgY29udHJhc3Q6IDEuMTIsIGZlZWRiYWNrOiAwLjQyLCB0cmFpbHM6IDAuNzIsIGZiWm9vbTogMC4xMiwgZ3JhaW46IDAuMSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRWNobyB0dW5uZWxcIixcbiAgICBjb2RlOiBcIjAyXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHpvb206IDAuNCwgZmVlZGJhY2s6IDAuODIsIHRyYWlsczogMC45LCBmYlpvb206IDAuMzQsIGZiUm90YXRlOiAwLjE0LFxuICAgICAgZmJIdWU6IDAuMTIsIGNocm9tYTogMC4yOCwgdmlnbmV0dGU6IDAuNCwgaHVlT3JiaXQ6IDAuMTYsIGNvbnRyYXN0OiAxLjA4LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYWxlaWRvIGNhdGhlZHJhbFwiLFxuICAgIGNvZGU6IFwiMDNcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAga2FsZWlkbzogMC43MiwgbWlycm9yOiAwLjMsIGNocm9tYTogMC4zNCwgaHVlT3JiaXQ6IDAuNCwgc2F0dXJhdGlvbjogMS41LFxuICAgICAgY29udHJhc3Q6IDEuMSwgZmVlZGJhY2s6IDAuMjYsIHRyYWlsczogMC42LCByaXBwbGU6IDAuMTgsIHZpZ25ldHRlOiAwLjMsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZIUyBzZWFuY2VcIixcbiAgICBjb2RlOiBcIjA0XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHNjYW5saW5lczogMC42NiwgZ3JhaW46IDAuNSwgY2hyb21hOiAwLjYyLCBmZWVkYmFjazogMC40MixcbiAgICAgIHRyYWlsczogMC42OCwgc2F0dXJhdGlvbjogMC44OCwgY29udHJhc3Q6IDEuMjIsIHZpZ25ldHRlOiAwLjQ4LCBzdHJvYmU6IDAuMDgsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFjaWQgYmF0aFwiLFxuICAgIGNvZGU6IFwiMDVcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgd2FycDogMC42OCwgcmlwcGxlOiAwLjQsIGh1ZU9yYml0OiAwLjcsIHNhdHVyYXRpb246IDEuODUsIHNvbGFyaXplOiAwLjUsXG4gICAgICBjb250cmFzdDogMS4xNSwgZmVlZGJhY2s6IDAuNSwgdHJhaWxzOiAwLjc4LCBmYkh1ZTogMC4zLCBzcGVlZDogMS4yLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHaG9zdCB0cmFpbHNcIixcbiAgICBjb2RlOiBcIjA2XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGZlZWRiYWNrOiAwLjkyLCB0cmFpbHM6IDAuOTcsIGZiWm9vbTogMC4wNiwgZmJSb3RhdGU6IC0wLjA1LCBzYXR1cmF0aW9uOiAwLjYsXG4gICAgICBjb250cmFzdDogMS4xNCwgZ3JhaW46IDAuMiwgdmlnbmV0dGU6IDAuNSwgc3BlZWQ6IDAuNSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmVvbiBhdXRvcHN5XCIsXG4gICAgY29kZTogXCIwN1wiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBjaHJvbWE6IDAuOCwgc29sYXJpemU6IDAuMjgsIGNvbnRyYXN0OiAxLjM1LCBzYXR1cmF0aW9uOiAxLjYsXG4gICAgICBrYWxlaWRvOiAwLjE4LCBodWVPcmJpdDogMC4zMiwgZmVlZGJhY2s6IDAuMywgdHJhaWxzOiAwLjYyLCBzY2FubGluZXM6IDAuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJpc20gc3Rvcm1cIixcbiAgICBjb2RlOiBcIjA4XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuMzQsIHJpcHBsZTogMC4yOCwgY2hyb21hOiAwLjkyLCBmZWVkYmFjazogMC41NiwgdHJhaWxzOiAwLjgsXG4gICAgICBmYlpvb206IC0wLjE0LCBncmFpbjogMC4yNCwgc3BlZWQ6IDEuNSwgc3Ryb2JlOiAwLjE2LCBjb250cmFzdDogMS4yLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTb2xhciBmbGFyZVwiLFxuICAgIGNvZGU6IFwiMDlcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgem9vbTogMC4yNiwgc3dpcmw6IDAuNSwgcmlwcGxlOiAwLjM0LCBodWVPcmJpdDogMC41LCBzYXR1cmF0aW9uOiAxLjcsXG4gICAgICBzb2xhcml6ZTogMC43MiwgZmVlZGJhY2s6IDAuNDQsIHRyYWlsczogMC43LCBmYkh1ZTogMC4yLCB2aWduZXR0ZTogMC4zNixcbiAgICAgIHN0cm9iZTogMC4xLCBzcGVlZDogMC45LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZWVwIHZvaWRcIixcbiAgICBjb2RlOiBcIjEwXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGJnTW9kZTogMiwgbWlycm9yOiAwLjUsIHdhcnA6IDAuMjQsIGNocm9tYTogMC4yLCBzYXR1cmF0aW9uOiAwLjg1LFxuICAgICAgY29udHJhc3Q6IDEuMjUsIGZlZWRiYWNrOiAwLjY4LCB0cmFpbHM6IDAuODgsIGZiWm9vbTogMC4yLCB2aWduZXR0ZTogMC42LFxuICAgICAgaHVlT3JiaXQ6IDAuMSwgc3BlZWQ6IDAuNixcbiAgICB9KSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIHJhbmQobWluID0gMCwgbWF4ID0gMSk6IG51bWJlciB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIGNoYW5jZShwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCBwO1xufVxuXG50eXBlIEVmZmVjdFBpY2sgPSB7IGtleTogc3RyaW5nOyB3ZWlnaHQ6IG51bWJlcjsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIHBpY2tEaXN0aW5jdChpdGVtczogRWZmZWN0UGlja1tdLCBjb3VudDogbnVtYmVyKTogRWZmZWN0UGlja1tdIHtcbiAgY29uc3QgcG9vbCA9IGl0ZW1zLnNsaWNlKCk7XG4gIGNvbnN0IHBpY2tzOiBFZmZlY3RQaWNrW10gPSBbXTtcbiAgd2hpbGUgKHBpY2tzLmxlbmd0aCA8IGNvdW50ICYmIHBvb2wubGVuZ3RoKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcG9vbCkgdG90YWwgKz0gaXRlbS53ZWlnaHQ7XG4gICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKDsgaW5kZXggPCBwb29sLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcm9sbCAtPSBwb29sW2luZGV4XS53ZWlnaHQ7XG4gICAgICBpZiAocm9sbCA8PSAwKSBicmVhaztcbiAgICB9XG4gICAgcGlja3MucHVzaChwb29sLnNwbGljZShNYXRoLm1pbihpbmRleCwgcG9vbC5sZW5ndGggLSAxKSwgMSlbMF0pO1xuICB9XG4gIHJldHVybiBwaWNrcztcbn1cblxuLy8gS2FsZWlkby9yaXBwbGUgYXJlIHdlaWdodGVkIGxvdzogc3ltbWV0cmljIG1hbmRhbGFzIGFsbCBsb29rIGFsaWtlLCBzbyBhXG4vLyBjaGFvcyByb2xsIHNob3VsZCB1c3VhbGx5IGJlIGJ1aWx0IG9uIHdhcnAgLyBzd2lybCAvIHpvb20gLyBtaXJyb3IgaW5zdGVhZC5cbmNvbnN0IFdPUkxEX1NQQUNFX1BPT0w6IEVmZmVjdFBpY2tbXSA9IFtcbiAgeyBrZXk6IFwid2FycFwiLCB3ZWlnaHQ6IDMuMCwgbWluOiAwLjMsIG1heDogMC45IH0sXG4gIHsga2V5OiBcInN3aXJsXCIsIHdlaWdodDogMi40LCBtaW46IDAuMjUsIG1heDogMC44IH0sXG4gIHsga2V5OiBcInpvb21cIiwgd2VpZ2h0OiAyLjAsIG1pbjogMC4yLCBtYXg6IDAuNiB9LFxuICB7IGtleTogXCJtaXJyb3JcIiwgd2VpZ2h0OiAxLjYsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuICB7IGtleTogXCJyaXBwbGVcIiwgd2VpZ2h0OiAwLjksIG1pbjogMC4xMiwgbWF4OiAwLjQgfSxcbiAgeyBrZXk6IFwia2FsZWlkb1wiLCB3ZWlnaHQ6IDAuNiwgbWluOiAwLjIsIG1heDogMC43IH0sXG5dO1xuXG4vKipcbiAqIFN0cnVjdHVyZWQgY2hhb3M6IG9uZSBzdHJvbmcgc3BhY2UgZWZmZWN0IChwbHVzIHNvbWV0aW1lcyBhIHNvZnQgc2Vjb25kKSxcbiAqIGFuIG9wdGlvbmFsIGZlZWRiYWNrIHJlY2lwZSwgYSBjb2xvciBtb3ZlIGFuZCBsaWdodCB0ZXh0dXJlIFx1MjAxNCBldmVyeXRoaW5nXG4gKiBlbHNlIHN0YXlzIHplcm8gc28gZWFjaCByb2xsIGhhcyBhIGRpc3RpbmN0IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUdsb2JhbEZ4KGJhc2U6IEdsb2JhbEZ4KTogR2xvYmFsRngge1xuICBjb25zdCBuZXh0OiBHbG9iYWxGeCA9IHtcbiAgICAuLi5ERUZBVUxUX0dMT0JBTF9GWCxcbiAgICBiZ0E6IGJhc2UuYmdBLFxuICAgIGJnQjogYmFzZS5iZ0IsXG4gICAgYXVkaW9SZWFjdDogYmFzZS5hdWRpb1JlYWN0LFxuICAgIHBvaW50ZXJGb3JjZTogYmFzZS5wb2ludGVyRm9yY2UsXG4gICAgcG9pbnRlclNpemU6IGJhc2UucG9pbnRlclNpemUsXG4gICAgcG9pbnRlck1vZGU6IE1hdGguZmxvb3IocmFuZCgwLCA0KSksXG4gICAgYmdNb2RlOiBNYXRoLmZsb29yKHJhbmQoMCwgNCkpLFxuICB9O1xuXG4gIGNvbnN0IHNwYWNlUGlja3MgPSBwaWNrRGlzdGluY3QoV09STERfU1BBQ0VfUE9PTCwgY2hhbmNlKDAuNSkgPyAyIDogMSk7XG4gIHNwYWNlUGlja3MuZm9yRWFjaCgocGljaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdHJlbmd0aCA9IHJhbmQocGljay5taW4sIHBpY2subWF4KSAqIChpbmRleCA9PT0gMCA/IDEgOiAwLjUpO1xuICAgIChuZXh0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbcGljay5rZXldID0gc3RyZW5ndGg7XG4gIH0pO1xuXG4gIGlmIChjaGFuY2UoMC41NSkpIHtcbiAgICBuZXh0LmZlZWRiYWNrID0gcmFuZCgwLjMsIDAuODUpO1xuICAgIG5leHQudHJhaWxzID0gcmFuZCgwLjUsIDAuOTUpO1xuICAgIGlmIChjaGFuY2UoMC42KSkgbmV4dC5mYlpvb20gPSByYW5kKC0wLjM1LCAwLjM1KTtcbiAgICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZmJSb3RhdGUgPSByYW5kKC0wLjI1LCAwLjI1KTtcbiAgICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZmJIdWUgPSByYW5kKDAuMDUsIDAuNCk7XG4gIH1cblxuICBpZiAoY2hhbmNlKDAuNSkpIG5leHQuaHVlT3JiaXQgPSByYW5kKDAuMSwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjUpKSBuZXh0LmNocm9tYSA9IHJhbmQoMC4xLCAwLjcpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnNvbGFyaXplID0gcmFuZCgwLjIsIDAuNyk7XG4gIG5leHQuc2F0dXJhdGlvbiA9IHJhbmQoMC44NSwgMS42KTtcbiAgbmV4dC5jb250cmFzdCA9IHJhbmQoMC45NSwgMS4zKTtcblxuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LmdyYWluID0gcmFuZCgwLjA1LCAwLjQpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnNjYW5saW5lcyA9IHJhbmQoMC4xLCAwLjUpO1xuICBpZiAoY2hhbmNlKDAuMTIpKSBuZXh0LnN0cm9iZSA9IHJhbmQoMC4wNSwgMC4zKTtcbiAgbmV4dC52aWduZXR0ZSA9IHJhbmQoMC4xLCAwLjUpO1xuICBuZXh0LnNwZWVkID0gcmFuZCgwLjQ1LCAxLjUpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZUdsb2JhbEZ4KGN1cnJlbnQ6IEdsb2JhbEZ4KTogR2xvYmFsRngge1xuICBjb25zdCBuZXh0ID0geyAuLi5jdXJyZW50IH07XG4gIGNvbnN0IGtleXM6IChrZXlvZiBHbG9iYWxGeClbXSA9IFtcbiAgICBcImZlZWRiYWNrXCIsIFwidHJhaWxzXCIsIFwiZmJab29tXCIsIFwiZmJSb3RhdGVcIiwgXCJmYkh1ZVwiLCBcIndhcnBcIiwgXCJzd2lybFwiLFxuICAgIFwicmlwcGxlXCIsIFwiem9vbVwiLCBcImthbGVpZG9cIiwgXCJtaXJyb3JcIiwgXCJjaHJvbWFcIiwgXCJodWVPcmJpdFwiLCBcInNhdHVyYXRpb25cIixcbiAgICBcImNvbnRyYXN0XCIsIFwic29sYXJpemVcIiwgXCJncmFpblwiLCBcInNjYW5saW5lc1wiLCBcInZpZ25ldHRlXCIsXG4gICAgXCJzdHJvYmVcIiwgXCJzcGVlZFwiLFxuICBdO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXh0W2tleV0gYXMgbnVtYmVyO1xuICAgIGNvbnN0IG1heCA9IGtleSA9PT0gXCJzYXR1cmF0aW9uXCIgfHwga2V5ID09PSBcImNvbnRyYXN0XCIgfHwga2V5ID09PSBcInNwZWVkXCIgPyAyIDogMTtcbiAgICBjb25zdCBtaW4gPSBrZXkgPT09IFwiZmJab29tXCIgfHwga2V5ID09PSBcImZiUm90YXRlXCIgPyAtMSA6IDA7XG4gICAgKG5leHRba2V5XSBhcyBudW1iZXIpID0gY2xhbXAodmFsdWUgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjI0LCBtaW4sIG1heCk7XG4gIH1cbiAgbmV4dC5mZWVkYmFjayA9IE1hdGgubWluKG5leHQuZmVlZGJhY2ssIDAuOSk7XG4gIHJldHVybiBuZXh0O1xufVxuXG5jb25zdCBDSEFPU19CTEVORFM6IEJsZW5kTW9kZVtdID0gW1wibm9ybWFsXCIsIFwiYWRkXCIsIFwic2NyZWVuXCIsIFwib3ZlcmxheVwiLCBcImRpZmZlcmVuY2VcIiwgXCJsaWdodGVuXCJdO1xuXG5jb25zdCBMQVlFUl9ESVNUT1JUX1BPT0w6IEVmZmVjdFBpY2tbXSA9IFtcbiAgeyBrZXk6IFwid2FycFwiLCB3ZWlnaHQ6IDMuMCwgbWluOiAwLjIsIG1heDogMC44IH0sXG4gIHsga2V5OiBcInN3aXJsXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwiYnVsZ2VcIiwgd2VpZ2h0OiAyLjAsIG1pbjogMC4zLCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJwaXhlbGF0ZVwiLCB3ZWlnaHQ6IDEuMywgbWluOiAwLjE1LCBtYXg6IDAuNiB9LFxuICB7IGtleTogXCJtaXJyb3JcIiwgd2VpZ2h0OiAxLjIsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuICB7IGtleTogXCJyaXBwbGVcIiwgd2VpZ2h0OiAwLjksIG1pbjogMC4xLCBtYXg6IDAuNDUgfSxcbiAgeyBrZXk6IFwia2FsZWlkb1wiLCB3ZWlnaHQ6IDAuNSwgbWluOiAwLjI1LCBtYXg6IDAuNzUgfSxcbl07XG5cbi8qKlxuICogUmFuZG9taXplIGEgbGF5ZXIncyBlZmZlY3Qgc3RhY2sgd2hpbGUga2VlcGluZyBpdHMgcGxhY2VtZW50ICsgdmlzaWJpbGl0eS5cbiAqIFNhbWUgc3RydWN0dXJlIGFzIHRoZSB3b3JsZCByb2xsOiAxLTIgZGlzdG9ydGlvbnMsIGEgY29sb3IgbW92ZSwgYSBiaXQgb2ZcbiAqIG1vdGlvbiBcdTIwMTQgbm90IGV2ZXJ5IGtub2IgYXQgb25jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUxheWVyRngoY3VycmVudDogTGF5ZXJGeCk6IExheWVyRngge1xuICBjb25zdCBuZXh0OiBMYXllckZ4ID0ge1xuICAgIC4uLnJlc2V0TGF5ZXJGeEVmZmVjdHMoY3VycmVudCksXG4gICAgYmxlbmQ6IGNoYW5jZSgwLjQpID8gQ0hBT1NfQkxFTkRTW01hdGguZmxvb3IocmFuZCgwLCBDSEFPU19CTEVORFMubGVuZ3RoKSldIDogY3VycmVudC5ibGVuZCxcbiAgfTtcblxuICBjb25zdCBkaXN0b3J0UGlja3MgPSBwaWNrRGlzdGluY3QoTEFZRVJfRElTVE9SVF9QT09MLCBjaGFuY2UoMC40NSkgPyAyIDogMSk7XG4gIGRpc3RvcnRQaWNrcy5mb3JFYWNoKChwaWNrLCBpbmRleCkgPT4ge1xuICAgIGxldCBzdHJlbmd0aCA9IHJhbmQocGljay5taW4sIHBpY2subWF4KSAqIChpbmRleCA9PT0gMCA/IDEgOiAwLjU1KTtcbiAgICBpZiAocGljay5rZXkgPT09IFwiYnVsZ2VcIiAmJiBjaGFuY2UoMC41KSkgc3RyZW5ndGggPSAtc3RyZW5ndGg7XG4gICAgKG5leHQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KVtwaWNrLmtleV0gPSBzdHJlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKGNoYW5jZSgwLjYpKSBuZXh0Lmh1ZSA9IE1hdGgucmFuZG9tKCk7XG4gIG5leHQuc2F0dXJhdGlvbiA9IHJhbmQoMC43NSwgMS42NSk7XG4gIG5leHQuY29udHJhc3QgPSByYW5kKDAuOSwgMS4zNSk7XG4gIG5leHQuYnJpZ2h0bmVzcyA9IHJhbmQoMC45LCAxLjIpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnBvc3Rlcml6ZSA9IHJhbmQoMC4yLCAwLjcpO1xuICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuY2hyb21hID0gcmFuZCgwLjEsIDAuNik7XG4gIGlmIChjaGFuY2UoMC4xOCkpIG5leHQuZWRnZXMgPSByYW5kKDAuMiwgMC44KTtcbiAgaWYgKGNoYW5jZSgwLjA4KSkgbmV4dC5pbnZlcnQgPSByYW5kKDAuNSwgMSk7XG4gIGlmIChjaGFuY2UoMC4xNSkpIG5leHQudGludEFtb3VudCA9IHJhbmQoMC4yLCAwLjYpO1xuXG4gIGlmIChjaGFuY2UoMC4zNSkpIG5leHQuc3BpbiA9IHJhbmQoMC4wNSwgMC40KSAqIChjaGFuY2UoMC41KSA/IC0xIDogMSk7XG4gIGlmIChjaGFuY2UoMC40KSkgbmV4dC5kcmlmdCA9IHJhbmQoMC4xLCAwLjUpO1xuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LnB1bHNlID0gcmFuZCgwLjEsIDAuNik7XG4gIGlmIChjaGFuY2UoMC40NSkpIG5leHQuc2hpbW1lciA9IHJhbmQoMC4yLCAwLjgpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TGF5ZXJGeEVmZmVjdHMoY3VycmVudDogTGF5ZXJGeCk6IExheWVyRngge1xuICByZXR1cm4ge1xuICAgIC4uLkRFRkFVTFRfTEFZRVJfRlgsXG4gICAgeDogY3VycmVudC54LFxuICAgIHk6IGN1cnJlbnQueSxcbiAgICBzY2FsZTogY3VycmVudC5zY2FsZSxcbiAgICByb3RhdGlvbjogY3VycmVudC5yb3RhdGlvbixcbiAgICBvcGFjaXR5OiBjdXJyZW50Lm9wYWNpdHksXG4gICAgYmxlbmQ6IGN1cnJlbnQuYmxlbmQsXG4gICAgdmlzaWJsZTogY3VycmVudC52aXNpYmxlLFxuICAgIHRpbGU6IGN1cnJlbnQudGlsZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsZW5kSW5kZXgoYmxlbmQ6IEJsZW5kTW9kZSk6IG51bWJlciB7XG4gIGNvbnN0IGluZGV4ID0gQkxFTkRfTU9ERVMuaW5kZXhPZihibGVuZCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyAwIDogaW5kZXg7XG59XG4iLCAiLy8gV2ViR0wgY29tcG9zaXRvci4gUGlwZWxpbmUgcGVyIGZyYW1lOlxuLy8gICBiYWNrZ3JvdW5kIHNoYWRlciAtPiBzY2VuZSBGQk9cbi8vICAgZm9yIGVhY2ggbGF5ZXI6IFx1MDBGQ2Jlci1zaGFkZXIgKGRpc3RvcnQgKyBjb2xvciArIGJsZW5kIG92ZXIgZGVzdCkgLT4gcGluZy1wb25nIHNjZW5lIEZCT1xuLy8gICBwb3N0IHNoYWRlciAoc3BhY2Ugd2FycCwgZmVlZGJhY2sgZWNobywgZ3JhZGUpIC0+IHBpbmctcG9uZyBwb3N0IEZCT1xuLy8gICBjb3B5IHBvc3QgRkJPIC0+IHNjcmVlblxuLy8gVGhlIHBvc3QgcGluZy1wb25nIGRvdWJsZXMgYXMgdGhlIGZlZWRiYWNrIGJ1ZmZlciwgd2hpY2ggaXMgd2hhdCBtYWtlc1xuLy8gdHJhaWxzIC8gZWNoby10dW5uZWwgZWZmZWN0cyBwb3NzaWJsZS5cblxuZXhwb3J0IHR5cGUgUG9pbnRlclN0YXRlID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICBkb3duOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclJlbmRlclN0YXRlID0ge1xuICBpZDogc3RyaW5nO1xuICBpbWFnZUlkOiBzdHJpbmc7XG4gIHBvczogW251bWJlciwgbnVtYmVyXTtcbiAgZXh0OiBbbnVtYmVyLCBudW1iZXJdO1xuICByb3Q6IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogbnVtYmVyO1xuICB0aWxlOiBudW1iZXI7XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIGh1ZTogbnVtYmVyO1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludDogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICB0aW50QW1vdW50OiBudW1iZXI7XG4gIHNoaW1tZXI6IG51bWJlcjtcbiAgc2VlZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgR2xvYmFsUmVuZGVyU3RhdGUgPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgYmdCOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICBmYlpvb206IG51bWJlcjtcbiAgZmJSb3RhdGU6IG51bWJlcjtcbiAgZmJIdWU6IG51bWJlcjtcbiAgd2FycDogbnVtYmVyO1xuICBzd2lybDogbnVtYmVyO1xuICByaXBwbGU6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgaHVlT3JiaXQ6IG51bWJlcjtcbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICBjb250cmFzdDogbnVtYmVyO1xuICBzb2xhcml6ZTogbnVtYmVyO1xuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIGF1ZGlvUmVhY3Q6IG51bWJlcjtcbiAgcG9pbnRlckZvcmNlOiBudW1iZXI7XG4gIHBvaW50ZXJTaXplOiBudW1iZXI7XG4gIHBvaW50ZXJNb2RlOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGcmFtZVN0YXRlID0ge1xuICB0aW1lOiBudW1iZXI7XG4gIGF1ZGlvOiBudW1iZXI7XG4gIHBvaW50ZXI6IFBvaW50ZXJTdGF0ZTtcbiAgbGF5ZXJzOiBMYXllclJlbmRlclN0YXRlW107XG4gIGdsb2JhbDogR2xvYmFsUmVuZGVyU3RhdGU7XG59O1xuXG5leHBvcnQgdHlwZSBFbmdpbmVIYW5kbGUgPSB7XG4gIHJlc2l6ZShjc3NXaWR0aDogbnVtYmVyLCBjc3NIZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG4gIHNldFBpeGVsUmF0aW9DYXAoY2FwOiBudW1iZXIpOiB2b2lkO1xuICBzZXRJbWFnZShpbWFnZUlkOiBzdHJpbmcsIHNvdXJjZTogVGV4SW1hZ2VTb3VyY2UpOiB2b2lkO1xuICByZW1vdmVJbWFnZShpbWFnZUlkOiBzdHJpbmcpOiB2b2lkO1xuICBoYXNJbWFnZShpbWFnZUlkOiBzdHJpbmcpOiBib29sZWFuO1xuICByZW5kZXIoc3RhdGU6IEZyYW1lU3RhdGUpOiB2b2lkO1xuICBjbGVhckZlZWRiYWNrKCk6IHZvaWQ7XG4gIGRlc3Ryb3koKTogdm9pZDtcbn07XG5cbmNvbnN0IFZFUlQgPSBgXG5hdHRyaWJ1dGUgdmVjMiBhX3BvcztcbnZhcnlpbmcgdmVjMiB2X3V2O1xudm9pZCBtYWluKCkge1xuICB2X3V2ID0gYV9wb3MgKiAwLjUgKyAwLjU7XG4gIGdsX1Bvc2l0aW9uID0gdmVjNChhX3BvcywgMC4wLCAxLjApO1xufVxuYDtcblxuY29uc3QgR0xTTF9DT01NT04gPSBgXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5tYXQyIHJvdDIoZmxvYXQgYSkgeyBmbG9hdCBjID0gY29zKGEpOyBmbG9hdCBzID0gc2luKGEpOyByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7IH1cbmZsb2F0IGhhc2gyMSh2ZWMyIHApIHsgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTsgfVxuZmxvYXQgdm5vaXNlKHZlYzIgcCkge1xuICB2ZWMyIGkgPSBmbG9vcihwKTtcbiAgdmVjMiBmID0gZnJhY3QocCk7XG4gIHZlYzIgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICBmbG9hdCBhID0gaGFzaDIxKGkpO1xuICBmbG9hdCBiID0gaGFzaDIxKGkgKyB2ZWMyKDEuMCwgMC4wKSk7XG4gIGZsb2F0IGMgPSBoYXNoMjEoaSArIHZlYzIoMC4wLCAxLjApKTtcbiAgZmxvYXQgZCA9IGhhc2gyMShpICsgdmVjMigxLjAsIDEuMCkpO1xuICByZXR1cm4gbWl4KG1peChhLCBiLCB1LngpLCBtaXgoYywgZCwgdS54KSwgdS55KTtcbn1cbmZsb2F0IGZibSh2ZWMyIHApIHtcbiAgZmxvYXQgdiA9IDAuMDtcbiAgZmxvYXQgYW1wID0gMC41O1xuICBmb3IgKGludCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHYgKz0gYW1wICogdm5vaXNlKHApO1xuICAgIHAgPSBwICogMi4wMyArIHZlYzIoMTcuMywgOS4xKTtcbiAgICBhbXAgKj0gMC41O1xuICB9XG4gIHJldHVybiB2O1xufVxudmVjMyBodWVSb3RhdGUodmVjMyBjb2xvciwgZmxvYXQgYW5nbGUpIHtcbiAgY29uc3QgdmVjMyBrID0gdmVjMygwLjU3NzM1KTtcbiAgZmxvYXQgYyA9IGNvcyhhbmdsZSk7XG4gIGZsb2F0IHMgPSBzaW4oYW5nbGUpO1xuICByZXR1cm4gY29sb3IgKiBjICsgY3Jvc3MoaywgY29sb3IpICogcyArIGsgKiBkb3QoaywgY29sb3IpICogKDEuMCAtIGMpO1xufVxuZmxvYXQgbHVtYSh2ZWMzIGMpIHsgcmV0dXJuIGRvdChjLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTsgfVxuYDtcblxuY29uc3QgQ09QWV9GUkFHID0gYFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4O1xudm9pZCBtYWluKCkgeyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleHR1cmUyRCh1X3RleCwgdl91dikucmdiLCAxLjApOyB9XG5gO1xuXG5jb25zdCBCR19GUkFHID0gYFxuJHtHTFNMX0NPTU1PTn1cbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfbW9kZTtcbnVuaWZvcm0gdmVjMyB1X2NvbG9yX2E7XG51bmlmb3JtIHZlYzMgdV9jb2xvcl9iO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvO1xuXG52b2lkIG1haW4oKSB7XG4gIHZlYzIgYXNwZWN0ID0gdmVjMih1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCksIDEuMCk7XG4gIHZlYzIgbiA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgdmVjMyBjb2wgPSB1X2NvbG9yX2E7XG4gIGlmICh1X21vZGUgPiAyLjUpIHtcbiAgICAvLyBUdW5uZWwgcmluZ3NcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pICsgMC4xMjtcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCk7XG4gICAgZmxvYXQgd2F2ZSA9IHNpbigyLjQgLyByIC0gdV90aW1lICogMS42ICsgYSAqIDMuMCArIHNpbih1X3RpbWUgKiAwLjQpICogMi4wKTtcbiAgICBjb2wgPSBtaXgodV9jb2xvcl9hLCB1X2NvbG9yX2IsIDAuNSArIDAuNSAqIHdhdmUpO1xuICAgIGNvbCAqPSBzbW9vdGhzdGVwKDAuMCwgMC4yNSwgcikgKiAoMC44NSArIHVfYXVkaW8gKiAwLjUpO1xuICB9IGVsc2UgaWYgKHVfbW9kZSA+IDEuNSkge1xuICAgIC8vIFBsYXNtYVxuICAgIGZsb2F0IHQgPSB1X3RpbWUgKiAwLjI1O1xuICAgIGZsb2F0IGYgPSBmYm0obiAqIDIuMiArIHZlYzIodCwgLXQgKiAwLjcpKTtcbiAgICBmbG9hdCBnID0gZmJtKG4gKiAzLjQgLSB2ZWMyKHQgKiAwLjYsIHQpICsgZiAqIDIuMCk7XG4gICAgY29sID0gbWl4KHVfY29sb3JfYSwgdV9jb2xvcl9iLCBjbGFtcChnICogMS42IC0gMC4yICsgdV9hdWRpbyAqIDAuMywgMC4wLCAxLjApKTtcbiAgICBjb2wgPSBodWVSb3RhdGUoY29sLCBmICogMS4yICsgdCAqIDAuMyk7XG4gIH0gZWxzZSBpZiAodV9tb2RlID4gMC41KSB7XG4gICAgLy8gRHJpZnRpbmcgZ3JhZGllbnRcbiAgICB2ZWMyIGRpciA9IHZlYzIoY29zKHVfdGltZSAqIDAuMTEpLCBzaW4odV90aW1lICogMC4xMSkpO1xuICAgIGZsb2F0IGcgPSBjbGFtcChkb3QobiwgZGlyKSAqIDAuOSArIDAuNSwgMC4wLCAxLjApO1xuICAgIGNvbCA9IG1peCh1X2NvbG9yX2EsIHVfY29sb3JfYiwgZyk7XG4gIH1cbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2wsIDEuMCk7XG59XG5gO1xuXG5jb25zdCBMQVlFUl9GUkFHID0gYFxuJHtHTFNMX0NPTU1PTn1cbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSBzYW1wbGVyMkQgdV9kZXN0O1xudW5pZm9ybSBzYW1wbGVyMkQgdV9pbWc7XG51bmlmb3JtIHZlYzIgdV9yZXM7XG51bmlmb3JtIHZlYzIgdV9pbWdfdGV4ZWw7XG51bmlmb3JtIHZlYzIgdV9wb3M7XG51bmlmb3JtIHZlYzIgdV9leHQ7XG51bmlmb3JtIGZsb2F0IHVfcm90O1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG51bmlmb3JtIGZsb2F0IHVfb3BhY2l0eTtcbnVuaWZvcm0gZmxvYXQgdV9ibGVuZDtcbnVuaWZvcm0gZmxvYXQgdV90aWxlO1xudW5pZm9ybSBmbG9hdCB1X3dhcnA7XG51bmlmb3JtIGZsb2F0IHVfc3dpcmw7XG51bmlmb3JtIGZsb2F0IHVfcmlwcGxlO1xudW5pZm9ybSBmbG9hdCB1X2thbGVpZG87XG51bmlmb3JtIGZsb2F0IHVfcGl4ZWxhdGU7XG51bmlmb3JtIGZsb2F0IHVfYnVsZ2U7XG51bmlmb3JtIGZsb2F0IHVfbWlycm9yO1xudW5pZm9ybSBmbG9hdCB1X2h1ZTtcbnVuaWZvcm0gZmxvYXQgdV9zYXQ7XG51bmlmb3JtIGZsb2F0IHVfY29uO1xudW5pZm9ybSBmbG9hdCB1X2JyaTtcbnVuaWZvcm0gZmxvYXQgdV9pbnZlcnQ7XG51bmlmb3JtIGZsb2F0IHVfcG9zdGVyO1xudW5pZm9ybSBmbG9hdCB1X2Nocm9tYTtcbnVuaWZvcm0gZmxvYXQgdV9lZGdlcztcbnVuaWZvcm0gdmVjMyB1X3RpbnQ7XG51bmlmb3JtIGZsb2F0IHVfdGludF9hbXQ7XG51bmlmb3JtIGZsb2F0IHVfc2hpbW1lcjtcbnVuaWZvcm0gZmxvYXQgdV9zZWVkO1xuXG52ZWMyIHRpbGVVdih2ZWMyIHV2KSB7XG4gIGlmICh1X3RpbGUgPiAxLjUpIHJldHVybiBhYnMoZnJhY3QodXYgKiAwLjUpICogMi4wIC0gMS4wKTtcbiAgaWYgKHVfdGlsZSA+IDAuNSkgcmV0dXJuIGZyYWN0KHV2KTtcbiAgcmV0dXJuIHV2O1xufVxuXG5mbG9hdCB0aWxlTWFzayh2ZWMyIHV2KSB7XG4gIGlmICh1X3RpbGUgPiAwLjUpIHJldHVybiAxLjA7XG4gIHZlYzIgaW5zaWRlID0gc3RlcCh2ZWMyKDAuMCksIHV2KSAqIHN0ZXAodXYsIHZlYzIoMS4wKSk7XG4gIHJldHVybiBpbnNpZGUueCAqIGluc2lkZS55O1xufVxuXG52ZWM0IHRhcCh2ZWMyIHV2KSB7XG4gIHZlYzQgcyA9IHRleHR1cmUyRCh1X2ltZywgY2xhbXAodGlsZVV2KHV2KSwgMC4wLCAxLjApKTtcbiAgcy5hICo9IHRpbGVNYXNrKHV2KTtcbiAgcmV0dXJuIHM7XG59XG5cbnZlYzMgYmxlbmRQaXgodmVjMyBkLCB2ZWMzIHMpIHtcbiAgZmxvYXQgbSA9IHVfYmxlbmQ7XG4gIGlmIChtIDwgMC41KSByZXR1cm4gcztcbiAgaWYgKG0gPCAxLjUpIHJldHVybiBkICsgcztcbiAgaWYgKG0gPCAyLjUpIHJldHVybiAxLjAgLSAoMS4wIC0gZCkgKiAoMS4wIC0gcyk7XG4gIGlmIChtIDwgMy41KSByZXR1cm4gZCAqIHM7XG4gIGlmIChtIDwgNC41KSB7XG4gICAgdmVjMyBsbyA9IDIuMCAqIGQgKiBzO1xuICAgIHZlYzMgaGkgPSAxLjAgLSAyLjAgKiAoMS4wIC0gZCkgKiAoMS4wIC0gcyk7XG4gICAgcmV0dXJuIG1peChsbywgaGksIHN0ZXAoMC41LCBkKSk7XG4gIH1cbiAgaWYgKG0gPCA1LjUpIHJldHVybiBhYnMoZCAtIHMpO1xuICBpZiAobSA8IDYuNSkgcmV0dXJuIG1heChkLCBzKTtcbiAgcmV0dXJuIG1pbihkLCBzKTtcbn1cblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIHAgPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIHZlYzIgcSA9IHJvdDIoLXVfcm90KSAqIChwIC0gdV9wb3MpO1xuICB2ZWMyIGMgPSBxIC8gbWF4KHVfZXh0LCB2ZWMyKDFlLTUpKSAqIDAuNTtcblxuICAvLyBEaXN0b3J0IGluIGFzcGVjdC1ub3JtYWxpemVkIGxheWVyIHNwYWNlIHNvIGNpcmN1bGFyIGVmZmVjdHMgc3RheSBjaXJjdWxhci5cbiAgdmVjMiBsYSA9IHZlYzIobWF4KHVfZXh0LngsIDFlLTUpIC8gbWF4KHVfZXh0LnksIDFlLTUpLCAxLjApO1xuICB2ZWMyIG4gPSBjICogbGE7XG4gIGZsb2F0IHQgPSB1X3RpbWUgKyB1X3NlZWQgKiAzNy4wO1xuICBmbG9hdCBzaGltID0gMS4wICsgdV9zaGltbWVyICogMC42ICogc2luKHQgKiAwLjkpO1xuXG4gIG4gKj0gMS4wICsgdV9idWxnZSAqIGRvdChuLCBuKSAqIDMuMjtcblxuICBpZiAodV9zd2lybCA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKTtcbiAgICBuID0gcm90Mih1X3N3aXJsICogNi4wICogc2hpbSAqIGV4cCgtciAqIDIuNCkpICogbjtcbiAgfVxuICBpZiAodV9rYWxlaWRvID4gMC4wMDMpIHtcbiAgICBmbG9hdCBzZWcgPSBmbG9vcigyLjAgKyB1X2thbGVpZG8gKiAxNC4wKTtcbiAgICBmbG9hdCBzbGljZSA9IDYuMjgzMTg1MyAvIHNlZztcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCkgKyB0ICogdV9zaGltbWVyICogMC4xNTtcbiAgICBhID0gYWJzKG1vZChhLCBzbGljZSkgLSBzbGljZSAqIDAuNSk7XG4gICAgbiA9IGxlbmd0aChuKSAqIHZlYzIoY29zKGEpLCBzaW4oYSkpO1xuICB9XG4gIGlmICh1X3JpcHBsZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDFlLTQ7XG4gICAgbiArPSAobiAvIHIpICogc2luKHIgKiAzNC4wIC0gdCAqIDMuMikgKiB1X3JpcHBsZSAqIDAuMDcgKiBzaGltO1xuICB9XG4gIGlmICh1X3dhcnAgPiAwLjAwMykge1xuICAgIHZlYzIgdyA9IHZlYzIoXG4gICAgICBmYm0obiAqIDMuMCArIHZlYzIodCAqIDAuMjIgKiAoMC4zICsgdV9zaGltbWVyKSwgdV9zZWVkKSksXG4gICAgICBmYm0obiAqIDMuMCArIHZlYzIodV9zZWVkICsgNy4zLCAtdCAqIDAuMTkgKiAoMC4zICsgdV9zaGltbWVyKSkpXG4gICAgKTtcbiAgICBuICs9ICh3IC0gMC41KSAqIHVfd2FycCAqIDAuNTU7XG4gIH1cbiAgbi54ID0gbWl4KG4ueCwgYWJzKG4ueCksIGNsYW1wKHVfbWlycm9yICogMi4wLCAwLjAsIDEuMCkpO1xuICBuLnkgPSBtaXgobi55LCBhYnMobi55KSwgY2xhbXAodV9taXJyb3IgKiAyLjAgLSAxLjAsIDAuMCwgMS4wKSk7XG5cbiAgYyA9IG4gLyBsYTtcbiAgdmVjMiB1diA9IGMgKyAwLjU7XG5cbiAgaWYgKHVfcGl4ZWxhdGUgPiAwLjAwMykge1xuICAgIGZsb2F0IGNlbGxzID0gZmxvb3IobWl4KDIyMC4wLCA2LjAsIHBvdyh1X3BpeGVsYXRlLCAwLjU1KSkpO1xuICAgIHV2ID0gKGZsb29yKHV2ICogY2VsbHMpICsgMC41KSAvIGNlbGxzO1xuICB9XG5cbiAgdmVjMiBjZCA9IGMgKiB1X2Nocm9tYSAqIDAuMTtcbiAgdmVjNCBzYW1wbGVNaWQgPSB0YXAodXYpO1xuICB2ZWMzIGNvbCA9IHZlYzModGFwKHV2ICsgY2QpLnIsIHNhbXBsZU1pZC5nLCB0YXAodXYgLSBjZCkuYik7XG4gIGZsb2F0IGFscGhhID0gc2FtcGxlTWlkLmE7XG5cbiAgaWYgKHVfZWRnZXMgPiAwLjAwMykge1xuICAgIHZlYzIgZSA9IG1heCh1X2ltZ190ZXhlbCAqIDEuNSwgdmVjMigwLjAwMTUpKTtcbiAgICBmbG9hdCBneCA9IGx1bWEodGFwKHV2ICsgdmVjMihlLngsIDAuMCkpLnJnYikgLSBsdW1hKHRhcCh1diAtIHZlYzIoZS54LCAwLjApKS5yZ2IpO1xuICAgIGZsb2F0IGd5ID0gbHVtYSh0YXAodXYgKyB2ZWMyKDAuMCwgZS55KSkucmdiKSAtIGx1bWEodGFwKHV2IC0gdmVjMigwLjAsIGUueSkpLnJnYik7XG4gICAgZmxvYXQgZyA9IGNsYW1wKGxlbmd0aCh2ZWMyKGd4LCBneSkpICogNC4wLCAwLjAsIDEuMCk7XG4gICAgdmVjMyBuZW9uID0gZyAqIChjb2wgKiAxLjYgKyBodWVSb3RhdGUodmVjMygwLjksIDAuMiwgMS4wKSwgdCAqIDAuNSkgKiAwLjcpO1xuICAgIGNvbCA9IG1peChjb2wsIG5lb24sIHVfZWRnZXMpO1xuICB9XG5cbiAgLy8gR3JhZGVcbiAgY29sID0gKGNvbCAtIDAuNSkgKiB1X2NvbiArIDAuNTtcbiAgY29sICo9IHVfYnJpO1xuICBjb2wgPSBtaXgodmVjMyhsdW1hKGNvbCkpLCBjb2wsIHVfc2F0KTtcbiAgY29sID0gaHVlUm90YXRlKGNvbCwgdV9odWUgKiA2LjI4MzE4NTMgKyB1X3NoaW1tZXIgKiAwLjQgKiBzaW4odCAqIDAuNikpO1xuICBpZiAodV9wb3N0ZXIgPiAwLjAwMykge1xuICAgIGZsb2F0IGxldmVscyA9IG1peCgxNC4wLCAyLjAsIHVfcG9zdGVyKTtcbiAgICBjb2wgPSBtaXgoY29sLCBmbG9vcihjb2wgKiBsZXZlbHMgKyAwLjUpIC8gbGV2ZWxzLCBjbGFtcCh1X3Bvc3RlciAqIDQuMCwgMC4wLCAxLjApKTtcbiAgfVxuICBjb2wgPSBtaXgoY29sLCAxLjAgLSBjb2wsIHVfaW52ZXJ0KTtcbiAgY29sID0gbWl4KGNvbCwgdmVjMyhsdW1hKGNvbCkpICogdV90aW50ICogMi4xLCB1X3RpbnRfYW10KTtcbiAgY29sID0gY2xhbXAoY29sLCAwLjAsIDEuNSk7XG5cbiAgdmVjMyBkZXN0ID0gdGV4dHVyZTJEKHVfZGVzdCwgdl91dikucmdiO1xuICB2ZWMzIGJsZW5kZWQgPSBjbGFtcChibGVuZFBpeChkZXN0LCBjb2wpLCAwLjAsIDEuMCk7XG4gIGZsb2F0IGEgPSBjbGFtcChhbHBoYSAqIHVfb3BhY2l0eSAqICgxLjAgKyB1X2F1ZGlvICogMC4wKSwgMC4wLCAxLjApO1xuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KG1peChkZXN0LCBibGVuZGVkLCBhKSwgMS4wKTtcbn1cbmA7XG5cbmNvbnN0IFBPU1RfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfc2NlbmU7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3ByZXY7XG51bmlmb3JtIHZlYzIgdV9yZXM7XG51bmlmb3JtIGZsb2F0IHVfdGltZTtcbnVuaWZvcm0gZmxvYXQgdV9hdWRpbztcbnVuaWZvcm0gdmVjMiB1X3BvaW50ZXI7XG51bmlmb3JtIHZlYzIgdV9wb2ludGVyX3ZlbDtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX2Rvd247XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9hY3RpdmU7XG51bmlmb3JtIGZsb2F0IHVfZmVlZGJhY2s7XG51bmlmb3JtIGZsb2F0IHVfdHJhaWxzO1xudW5pZm9ybSBmbG9hdCB1X2ZiX3pvb207XG51bmlmb3JtIGZsb2F0IHVfZmJfcm90YXRlO1xudW5pZm9ybSBmbG9hdCB1X2ZiX2h1ZTtcbnVuaWZvcm0gZmxvYXQgdV93YXJwO1xudW5pZm9ybSBmbG9hdCB1X3N3aXJsO1xudW5pZm9ybSBmbG9hdCB1X3JpcHBsZTtcbnVuaWZvcm0gZmxvYXQgdV96b29tO1xudW5pZm9ybSBmbG9hdCB1X2thbGVpZG87XG51bmlmb3JtIGZsb2F0IHVfbWlycm9yO1xudW5pZm9ybSBmbG9hdCB1X2Nocm9tYTtcbnVuaWZvcm0gZmxvYXQgdV9odWVfb3JiaXQ7XG51bmlmb3JtIGZsb2F0IHVfc2F0O1xudW5pZm9ybSBmbG9hdCB1X2NvbjtcbnVuaWZvcm0gZmxvYXQgdV9zb2xhcml6ZTtcbnVuaWZvcm0gZmxvYXQgdV9ncmFpbjtcbnVuaWZvcm0gZmxvYXQgdV9zY2FubGluZXM7XG51bmlmb3JtIGZsb2F0IHVfdmlnbmV0dGU7XG51bmlmb3JtIGZsb2F0IHVfc3Ryb2JlO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfZm9yY2U7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9zaXplO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfbW9kZTtcblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIG4gPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIGZsb2F0IHQgPSB1X3RpbWU7XG4gIGZsb2F0IGNocm9tYUFtdCA9IHVfY2hyb21hO1xuXG4gIC8vIEN1cnNvciBmaWVsZFxuICBpZiAodV9wb2ludGVyX2FjdGl2ZSA+IDAuNSAmJiB1X3BvaW50ZXJfZm9yY2UgPiAwLjAwMykge1xuICAgIHZlYzIgcG4gPSAodV9wb2ludGVyIC0gMC41KSAqIGFzcGVjdDtcbiAgICB2ZWMyIGQgPSBuIC0gcG47XG4gICAgZmxvYXQgc3ogPSBtYXgodV9wb2ludGVyX3NpemUgKiAwLjgsIDAuMDQpO1xuICAgIGZsb2F0IGluZmwgPSBleHAoLWRvdChkLCBkKSAvIChzeiAqIHN6KSkgKiB1X3BvaW50ZXJfZm9yY2UgKiAoMC41NSArIDAuNDUgKiB1X3BvaW50ZXJfZG93bik7XG4gICAgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMC41KSB7XG4gICAgICBuID0gcG4gKyByb3QyKGluZmwgKiAyLjYpICogZDtcbiAgICB9IGVsc2UgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMS41KSB7XG4gICAgICBuIC09IGQgKiBpbmZsICogMC41NTtcbiAgICB9IGVsc2UgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMi41KSB7XG4gICAgICBjaHJvbWFBbXQgKz0gaW5mbCAqIDEuNDtcbiAgICAgIG4gKz0gZCAqIGluZmwgKiAwLjM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4ueSArPSBpbmZsICogMC4zICogKDAuNTUgKyAwLjQ1ICogc2luKHQgKiAyLjAgKyBuLnggKiAxMi4wKSk7XG4gICAgfVxuICAgIG4gKz0gdV9wb2ludGVyX3ZlbCAqIGluZmwgKiAxLjY7XG4gIH1cblxuICAvLyBTcGFjZVxuICBuICo9IDEuMCAtIHVfem9vbSAqICgwLjMgKyAwLjEgKiBzaW4odCAqIDAuNykpIC0gdV9hdWRpbyAqIHVfem9vbSAqIDAuMTU7XG4gIGlmICh1X3N3aXJsID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pO1xuICAgIG4gPSByb3QyKHVfc3dpcmwgKiAoMy40ICsgdV9hdWRpbyAqIDEuNSkgKiBleHAoLXIgKiAxLjcpICogc2luKHQgKiAwLjIzICsgMS45KSkgKiBuO1xuICB9XG4gIGlmICh1X2thbGVpZG8gPiAwLjAwMykge1xuICAgIGZsb2F0IHNlZyA9IGZsb29yKDIuMCArIHVfa2FsZWlkbyAqIDE1LjApO1xuICAgIGZsb2F0IHNsaWNlID0gNi4yODMxODUzIC8gc2VnO1xuICAgIGZsb2F0IGEgPSBhdGFuKG4ueSwgbi54KSArIHQgKiAwLjA1O1xuICAgIGEgPSBhYnMobW9kKGEsIHNsaWNlKSAtIHNsaWNlICogMC41KTtcbiAgICBuID0gbGVuZ3RoKG4pICogdmVjMihjb3MoYSksIHNpbihhKSk7XG4gIH1cbiAgaWYgKHVfcmlwcGxlID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pICsgMWUtNDtcbiAgICBuICs9IChuIC8gcikgKiBzaW4ociAqIDI2LjAgLSB0ICogMi42KSAqIHVfcmlwcGxlICogMC4wNTtcbiAgfVxuICBpZiAodV93YXJwID4gMC4wMDMpIHtcbiAgICB2ZWMyIHcgPSB2ZWMyKGZibShuICogMi40ICsgdCAqIDAuMTYpLCBmYm0obiAqIDIuNCAtIHQgKiAwLjEzICsgNS4yKSk7XG4gICAgbiArPSAodyAtIDAuNSkgKiB1X3dhcnAgKiAoMC4zNCArIHVfYXVkaW8gKiAwLjIpO1xuICB9XG4gIG4ueCA9IG1peChuLngsIGFicyhuLngpLCBjbGFtcCh1X21pcnJvciAqIDIuMCwgMC4wLCAxLjApKTtcbiAgbi55ID0gbWl4KG4ueSwgYWJzKG4ueSksIGNsYW1wKHVfbWlycm9yICogMi4wIC0gMS4wLCAwLjAsIDEuMCkpO1xuXG4gIHZlYzIgdXYgPSBuIC8gYXNwZWN0ICsgMC41O1xuXG4gIHZlYzIgY2QgPSAodXYgLSAwLjUpICogY2hyb21hQW10ICogMC4wNTtcbiAgdmVjMyBjb2wgPSB2ZWMzKFxuICAgIHRleHR1cmUyRCh1X3NjZW5lLCB1diArIGNkKS5yLFxuICAgIHRleHR1cmUyRCh1X3NjZW5lLCB1dikuZyxcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYgLSBjZCkuYlxuICApO1xuXG4gIC8vIEZlZWRiYWNrIGVjaG9cbiAgaWYgKHVfZmVlZGJhY2sgPiAwLjAwMykge1xuICAgIHZlYzIgZnAgPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gICAgZnAgPSByb3QyKHVfZmJfcm90YXRlICogMC4wNTUpICogZnA7XG4gICAgZnAgKj0gMS4wIC0gdV9mYl96b29tICogMC4wNDU7XG4gICAgdmVjMyBwcmV2ID0gdGV4dHVyZTJEKHVfcHJldiwgZnAgLyBhc3BlY3QgKyAwLjUpLnJnYjtcbiAgICBwcmV2ID0gaHVlUm90YXRlKHByZXYsIHVfZmJfaHVlICogMC41KTtcbiAgICB2ZWMzIGVjaG8gPSBwcmV2ICogbWl4KDAuNTUsIDAuOTg1LCB1X3RyYWlscyk7XG4gICAgY29sID0gbWl4KGNvbCwgbWF4KGNvbCwgZWNobyksIHVfZmVlZGJhY2spO1xuICB9XG5cbiAgLy8gR3JhZGVcbiAgY29sID0gaHVlUm90YXRlKGNvbCwgdV9odWVfb3JiaXQgKiB0ICogMC45KTtcbiAgY29sID0gKGNvbCAtIDAuNSkgKiB1X2NvbiArIDAuNTtcbiAgY29sID0gbWl4KHZlYzMobHVtYShjb2wpKSwgY29sLCB1X3NhdCk7XG4gIGlmICh1X3NvbGFyaXplID4gMC4wMDMpIHtcbiAgICB2ZWMzIHNvbCA9IG1peChjb2wsIDEuMCAtIGNvbCwgc21vb3Roc3RlcCgwLjUgLSAwLjI1LCAwLjUgKyAwLjI1LCBjb2wpKTtcbiAgICBjb2wgPSBtaXgoY29sLCBzb2wsIHVfc29sYXJpemUpO1xuICB9XG4gIGNvbCAqPSAxLjAgKyB1X3N0cm9iZSAqICgwLjQ1ICogc2luKHQgKiAxMS4wKSArIHVfYXVkaW8gKiAwLjgpO1xuXG4gIC8vIFRleHR1cmVcbiAgaWYgKHVfc2NhbmxpbmVzID4gMC4wMDMpIHtcbiAgICBjb2wgKj0gMS4wIC0gdV9zY2FubGluZXMgKiAwLjMyICogKDAuNSArIDAuNSAqIHNpbih2X3V2LnkgKiB1X3Jlcy55ICogMi40KSk7XG4gIH1cbiAgaWYgKHVfZ3JhaW4gPiAwLjAwMykge1xuICAgIGNvbCArPSAoaGFzaDIxKHZfdXYgKiB1X3JlcyArIGZyYWN0KHQpICogNjEuNykgLSAwLjUpICogdV9ncmFpbiAqIDAuMztcbiAgfVxuICB2ZWMyIHZwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICBjb2wgKj0gMS4wIC0gdV92aWduZXR0ZSAqIHNtb290aHN0ZXAoMC4zNSwgMS4xNSwgbGVuZ3RoKHZwKSAqIDEuMzUpO1xuXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoY2xhbXAoY29sLCAwLjAsIDEuMCksIDEuMCk7XG59XG5gO1xuXG50eXBlIFRhcmdldCA9IHtcbiAgZnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XG4gIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG50eXBlIFByb2dyYW0gPSB7XG4gIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcbiAgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbD47XG59O1xuXG5mdW5jdGlvbiBjb21waWxlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpOiBXZWJHTFNoYWRlciB7XG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgaWYgKCFzaGFkZXIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgc2hhZGVyXCIpO1xuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgY29uc3QgaW5mbyA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSA/PyBcInVua25vd25cIjtcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNoYWRlciBjb21waWxlIGZhaWxlZDogJHtpbmZvfWApO1xuICB9XG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9ncmFtKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGZyYWc6IHN0cmluZyk6IFByb2dyYW0ge1xuICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICBpZiAoIXByb2dyYW0pIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgcHJvZ3JhbVwiKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGNvbXBpbGUoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIFZFUlQpKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGNvbXBpbGUoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZykpO1xuICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgXCJhX3Bvc1wiKTtcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2dyYW0gbGluayBmYWlsZWQ6ICR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgPz8gXCJ1bmtub3duXCJ9YCk7XG4gIH1cbiAgY29uc3QgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbD4gPSB7fTtcbiAgY29uc3QgY291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUykgYXMgbnVtYmVyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb25zdCBpbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKTtcbiAgICBpZiAoaW5mbykgdW5pZm9ybXNbaW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBpbmZvLm5hbWUpO1xuICB9XG4gIHJldHVybiB7IHByb2dyYW0sIHVuaWZvcm1zIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IG1hdGNoID0gL14jKFswLTlhLWZdezZ9KSQvaS5leGVjKGhleCk7XG4gIGlmICghbWF0Y2gpIHJldHVybiBbMCwgMCwgMF07XG4gIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KTtcbiAgcmV0dXJuIFsoKHZhbHVlID4+IDE2KSAmIDI1NSkgLyAyNTUsICgodmFsdWUgPj4gOCkgJiAyNTUpIC8gMjU1LCAodmFsdWUgJiAyNTUpIC8gMjU1XTtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZVNvdXJjZVNpemUoc291cmNlOiBUZXhJbWFnZVNvdXJjZSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gIGlmICh0eXBlb2YgSFRNTFZpZGVvRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2UudmlkZW9XaWR0aCB8fCBzb3VyY2Uud2lkdGggfHwgMSksXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS52aWRlb0hlaWdodCB8fCBzb3VyY2UuaGVpZ2h0IHx8IDEpLFxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IE1hdGgubWF4KDEsIHNvdXJjZS5uYXR1cmFsV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UubmF0dXJhbEhlaWdodCB8fCBzb3VyY2UuaGVpZ2h0IHx8IDEpLFxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2Uud2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS5oZWlnaHQpIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2Uud2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS5oZWlnaHQpIH07XG4gIH1cbiAgY29uc3QgYW55U291cmNlID0gc291cmNlIGFzIHsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9O1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBNYXRoLm1heCgxLCBhbnlTb3VyY2Uud2lkdGggPz8gMSksXG4gICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBhbnlTb3VyY2UuaGVpZ2h0ID8/IDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5naW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBFbmdpbmVIYW5kbGUge1xuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIiwge1xuICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgYWxwaGE6IGZhbHNlLFxuICAgIGRlcHRoOiBmYWxzZSxcbiAgICBzdGVuY2lsOiBmYWxzZSxcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlLFxuICAgIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG4gIH0pIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGw7XG4gIGlmICghZ2wpIHRocm93IG5ldyBFcnJvcihcIldlYkdMIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyXCIpO1xuXG4gIGNvbnN0IHF1YWQgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHF1YWQpO1xuICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbLTEsIC0xLCAzLCAtMSwgLTEsIDNdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gIGNvbnN0IHByb2dyYW1zID0ge1xuICAgIGJnOiBtYWtlUHJvZ3JhbShnbCwgQkdfRlJBRyksXG4gICAgbGF5ZXI6IG1ha2VQcm9ncmFtKGdsLCBMQVlFUl9GUkFHKSxcbiAgICBwb3N0OiBtYWtlUHJvZ3JhbShnbCwgUE9TVF9GUkFHKSxcbiAgICBjb3B5OiBtYWtlUHJvZ3JhbShnbCwgQ09QWV9GUkFHKSxcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlVGV4dHVyZSgpOiBXZWJHTFRleHR1cmUge1xuICAgIGNvbnN0IHRleHR1cmUgPSBnbCEuY3JlYXRlVGV4dHVyZSgpO1xuICAgIGlmICghdGV4dHVyZSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0ZXh0dXJlXCIpO1xuICAgIGdsIS5iaW5kVGV4dHVyZShnbCEuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX01JTl9GSUxURVIsIGdsIS5MSU5FQVIpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9NQUdfRklMVEVSLCBnbCEuTElORUFSKTtcbiAgICBnbCEudGV4UGFyYW1ldGVyaShnbCEuVEVYVFVSRV8yRCwgZ2whLlRFWFRVUkVfV1JBUF9TLCBnbCEuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX1dSQVBfVCwgZ2whLkNMQU1QX1RPX0VER0UpO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVRhcmdldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFRhcmdldCB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG1ha2VUZXh0dXJlKCk7XG4gICAgZ2whLnRleEltYWdlMkQoZ2whLlRFWFRVUkVfMkQsIDAsIGdsIS5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCBnbCEuUkdCQSwgZ2whLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gZ2whLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgaWYgKCFmcmFtZWJ1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBmcmFtZWJ1ZmZlclwiKTtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgZnJhbWVidWZmZXIpO1xuICAgIGdsIS5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbCEuRlJBTUVCVUZGRVIsIGdsIS5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUsIDApO1xuICAgIGdsIS5iaW5kRnJhbWVidWZmZXIoZ2whLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICByZXR1cm4geyBmcmFtZWJ1ZmZlciwgdGV4dHVyZSwgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplVGFyZ2V0KHRhcmdldDogVGFyZ2V0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGlmICh0YXJnZXQud2lkdGggPT09IHdpZHRoICYmIHRhcmdldC5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIGdsIS5iaW5kVGV4dHVyZShnbCEuVEVYVFVSRV8yRCwgdGFyZ2V0LnRleHR1cmUpO1xuICAgIGdsIS50ZXhJbWFnZTJEKGdsIS5URVhUVVJFXzJELCAwLCBnbCEuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2whLlJHQkEsIGdsIS5VTlNJR05FRF9CWVRFLCBudWxsKTtcbiAgICB0YXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICB0YXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHdpZHRoID0gTWF0aC5tYXgoMiwgY2FudmFzLndpZHRoIHx8IDIpO1xuICBsZXQgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgY2FudmFzLmhlaWdodCB8fCAyKTtcbiAgbGV0IHBpeGVsUmF0aW9DYXAgPSAxLjU7XG4gIGxldCBjc3NXaWR0aCA9IHdpZHRoO1xuICBsZXQgY3NzSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gIGNvbnN0IHRhcmdldHMgPSB7XG4gICAgc2NlbmVBOiBtYWtlVGFyZ2V0KHdpZHRoLCBoZWlnaHQpLFxuICAgIHNjZW5lQjogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBwb3N0QTogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBwb3N0QjogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgfTtcbiAgbGV0IHBvc3RGbGlwID0gZmFsc2U7XG4gIGxldCBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG5cbiAgLy8gUGxhY2Vob2xkZXIgdGV4dHVyZSBmb3IgbGF5ZXJzIHdob3NlIGltYWdlIGlzIG1pc3NpbmcgKGUuZy4gYSBzY2VuZSBsb2FkZWRcbiAgLy8gb24gYW5vdGhlciBkZXZpY2UpOiBhbiBhbmltYXRlZC1sb29raW5nIG1hZ2VudGEvZGVlcC1ibHVlIGdyaWQuXG4gIGNvbnN0IG1pc3NpbmdUZXh0dXJlID0gbWFrZVRleHR1cmUoKTtcbiAge1xuICAgIGNvbnN0IHNpemUgPSA2NDtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUgKiA0KTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9ICh5ICogc2l6ZSArIHgpICogNDtcbiAgICAgICAgY29uc3QgZ3JpZCA9ICh4ICUgMTYgPCAxIHx8IHkgJSAxNiA8IDEpID8gMSA6IDA7XG4gICAgICAgIGRhdGFbaV0gPSBncmlkID8gMjU1IDogMzAgKyAoKHggKiAzKSAlIDYwKTtcbiAgICAgICAgZGF0YVtpICsgMV0gPSBncmlkID8gNDAgOiA4O1xuICAgICAgICBkYXRhW2kgKyAyXSA9IGdyaWQgPyAxNzAgOiA0NiArICgoeSAqIDMpICUgNzApO1xuICAgICAgICBkYXRhW2kgKyAzXSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbWlzc2luZ1RleHR1cmUpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgc2l6ZSwgc2l6ZSwgMCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgZGF0YSk7XG4gIH1cblxuICBjb25zdCBpbWFnZXMgPSBuZXcgTWFwPHN0cmluZywgeyB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0+KCk7XG5cbiAgZnVuY3Rpb24gZHJhd1F1YWQoKSB7XG4gICAgZ2whLmRyYXdBcnJheXMoZ2whLlRSSUFOR0xFUywgMCwgMyk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldDogVGFyZ2V0IHwgbnVsbCkge1xuICAgIGdsIS5iaW5kRnJhbWVidWZmZXIoZ2whLkZSQU1FQlVGRkVSLCB0YXJnZXQgPyB0YXJnZXQuZnJhbWVidWZmZXIgOiBudWxsKTtcbiAgICBnbCEudmlld3BvcnQoMCwgMCwgdGFyZ2V0ID8gdGFyZ2V0LndpZHRoIDogd2lkdGgsIHRhcmdldCA/IHRhcmdldC5oZWlnaHQgOiBoZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdTEocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jID0gcC51bmlmb3Jtc1tuYW1lXTtcbiAgICBpZiAobG9jKSBnbCEudW5pZm9ybTFmKGxvYywgdmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHUyKHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChsb2MpIGdsIS51bmlmb3JtMmYobG9jLCB4LCB5KTtcbiAgfVxuICBmdW5jdGlvbiB1MyhwOiBQcm9ncmFtLCBuYW1lOiBzdHJpbmcsIHY6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKGxvYykgZ2whLnVuaWZvcm0zZihsb2MsIHZbMF0sIHZbMV0sIHZbMl0pO1xuICB9XG4gIGZ1bmN0aW9uIHVUZXgocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIHVuaXQ6IG51bWJlcikge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKCFsb2MpIHJldHVybjtcbiAgICBnbCEuYWN0aXZlVGV4dHVyZShnbCEuVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsIS51bmlmb3JtMWkobG9jLCB1bml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcihzdGF0ZTogRnJhbWVTdGF0ZSkge1xuICAgIGlmIChnbCEuaXNDb250ZXh0TG9zdCgpKSByZXR1cm47XG4gICAgY29uc3QgZyA9IHN0YXRlLmdsb2JhbDtcblxuICAgIC8vIEJhY2tncm91bmRcbiAgICBjb25zdCBiZyA9IHByb2dyYW1zLmJnO1xuICAgIGdsIS51c2VQcm9ncmFtKGJnLnByb2dyYW0pO1xuICAgIGJpbmRUYXJnZXRPdXRwdXQodGFyZ2V0cy5zY2VuZUEpO1xuICAgIHUyKGJnLCBcInVfcmVzXCIsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHUxKGJnLCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICB1MShiZywgXCJ1X21vZGVcIiwgZy5iZ01vZGUpO1xuICAgIHUzKGJnLCBcInVfY29sb3JfYVwiLCBnLmJnQSk7XG4gICAgdTMoYmcsIFwidV9jb2xvcl9iXCIsIGcuYmdCKTtcbiAgICB1MShiZywgXCJ1X2F1ZGlvXCIsIHN0YXRlLmF1ZGlvICogZy5hdWRpb1JlYWN0KTtcbiAgICBkcmF3UXVhZCgpO1xuXG4gICAgLy8gTGF5ZXJzOiBwaW5nLXBvbmcgY29tcG9zaXRlXG4gICAgbGV0IHNvdXJjZSA9IHRhcmdldHMuc2NlbmVBO1xuICAgIGxldCBkZXN0ID0gdGFyZ2V0cy5zY2VuZUI7XG4gICAgY29uc3QgbGF5ZXJQcm9ncmFtID0gcHJvZ3JhbXMubGF5ZXI7XG4gICAgZ2whLnVzZVByb2dyYW0obGF5ZXJQcm9ncmFtLnByb2dyYW0pO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2Ygc3RhdGUubGF5ZXJzKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGltYWdlcy5nZXQobGF5ZXIuaW1hZ2VJZCk7XG4gICAgICBiaW5kVGFyZ2V0T3V0cHV0KGRlc3QpO1xuICAgICAgdVRleChsYXllclByb2dyYW0sIFwidV9kZXN0XCIsIHNvdXJjZS50ZXh0dXJlLCAwKTtcbiAgICAgIHVUZXgobGF5ZXJQcm9ncmFtLCBcInVfaW1nXCIsIGltYWdlID8gaW1hZ2UudGV4dHVyZSA6IG1pc3NpbmdUZXh0dXJlLCAxKTtcbiAgICAgIHUyKGxheWVyUHJvZ3JhbSwgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHUyKFxuICAgICAgICBsYXllclByb2dyYW0sXG4gICAgICAgIFwidV9pbWdfdGV4ZWxcIixcbiAgICAgICAgaW1hZ2UgPyAxIC8gaW1hZ2Uud2lkdGggOiAxIC8gNjQsXG4gICAgICAgIGltYWdlID8gMSAvIGltYWdlLmhlaWdodCA6IDEgLyA2NFxuICAgICAgKTtcbiAgICAgIHUyKGxheWVyUHJvZ3JhbSwgXCJ1X3Bvc1wiLCBsYXllci5wb3NbMF0sIGxheWVyLnBvc1sxXSk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9leHRcIiwgbGF5ZXIuZXh0WzBdLCBsYXllci5leHRbMV0pO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcm90XCIsIGxheWVyLnJvdCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV90aW1lXCIsIHN0YXRlLnRpbWUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYXVkaW9cIiwgc3RhdGUuYXVkaW8gKiBnLmF1ZGlvUmVhY3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfb3BhY2l0eVwiLCBsYXllci5vcGFjaXR5KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2JsZW5kXCIsIGxheWVyLmJsZW5kKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3RpbGVcIiwgbGF5ZXIudGlsZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV93YXJwXCIsIGxheWVyLndhcnApO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc3dpcmxcIiwgbGF5ZXIuc3dpcmwpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcmlwcGxlXCIsIGxheWVyLnJpcHBsZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9rYWxlaWRvXCIsIGxheWVyLmthbGVpZG8pO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcGl4ZWxhdGVcIiwgbGF5ZXIucGl4ZWxhdGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYnVsZ2VcIiwgbGF5ZXIuYnVsZ2UpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfbWlycm9yXCIsIGxheWVyLm1pcnJvcik7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9odWVcIiwgbGF5ZXIuaHVlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3NhdFwiLCBsYXllci5zYXR1cmF0aW9uKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2NvblwiLCBsYXllci5jb250cmFzdCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9icmlcIiwgbGF5ZXIuYnJpZ2h0bmVzcyk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9pbnZlcnRcIiwgbGF5ZXIuaW52ZXJ0KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3Bvc3RlclwiLCBsYXllci5wb3N0ZXJpemUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfY2hyb21hXCIsIGxheWVyLmNocm9tYSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9lZGdlc1wiLCBsYXllci5lZGdlcyk7XG4gICAgICB1MyhsYXllclByb2dyYW0sIFwidV90aW50XCIsIGxheWVyLnRpbnQpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfdGludF9hbXRcIiwgbGF5ZXIudGludEFtb3VudCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9zaGltbWVyXCIsIGxheWVyLnNoaW1tZXIpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc2VlZFwiLCBsYXllci5zZWVkKTtcbiAgICAgIGRyYXdRdWFkKCk7XG4gICAgICBjb25zdCBzd2FwID0gc291cmNlO1xuICAgICAgc291cmNlID0gZGVzdDtcbiAgICAgIGRlc3QgPSBzd2FwO1xuICAgIH1cblxuICAgIC8vIFBvc3QgKyBmZWVkYmFja1xuICAgIGlmIChuZWVkRmVlZGJhY2tDbGVhcikge1xuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgW3RhcmdldHMucG9zdEEsIHRhcmdldHMucG9zdEJdKSB7XG4gICAgICAgIGJpbmRUYXJnZXRPdXRwdXQodGFyZ2V0KTtcbiAgICAgICAgZ2whLmNsZWFyQ29sb3IoMCwgMCwgMCwgMSk7XG4gICAgICAgIGdsIS5jbGVhcihnbCEuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgICB9XG4gICAgICBuZWVkRmVlZGJhY2tDbGVhciA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBwcmV2ID0gcG9zdEZsaXAgPyB0YXJnZXRzLnBvc3RBIDogdGFyZ2V0cy5wb3N0QjtcbiAgICBjb25zdCBvdXQgPSBwb3N0RmxpcCA/IHRhcmdldHMucG9zdEIgOiB0YXJnZXRzLnBvc3RBO1xuICAgIHBvc3RGbGlwID0gIXBvc3RGbGlwO1xuXG4gICAgY29uc3QgcG9zdCA9IHByb2dyYW1zLnBvc3Q7XG4gICAgZ2whLnVzZVByb2dyYW0ocG9zdC5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KG91dCk7XG4gICAgdVRleChwb3N0LCBcInVfc2NlbmVcIiwgc291cmNlLnRleHR1cmUsIDApO1xuICAgIHVUZXgocG9zdCwgXCJ1X3ByZXZcIiwgcHJldi50ZXh0dXJlLCAxKTtcbiAgICB1Mihwb3N0LCBcInVfcmVzXCIsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHUxKHBvc3QsIFwidV90aW1lXCIsIHN0YXRlLnRpbWUpO1xuICAgIHUxKHBvc3QsIFwidV9hdWRpb1wiLCBzdGF0ZS5hdWRpbyAqIGcuYXVkaW9SZWFjdCk7XG4gICAgdTIocG9zdCwgXCJ1X3BvaW50ZXJcIiwgc3RhdGUucG9pbnRlci54LCBzdGF0ZS5wb2ludGVyLnkpO1xuICAgIHUyKHBvc3QsIFwidV9wb2ludGVyX3ZlbFwiLCBzdGF0ZS5wb2ludGVyLnZlbG9jaXR5WCwgc3RhdGUucG9pbnRlci52ZWxvY2l0eVkpO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX2Rvd25cIiwgc3RhdGUucG9pbnRlci5kb3duID8gMSA6IDApO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX2FjdGl2ZVwiLCBzdGF0ZS5wb2ludGVyLmFjdGl2ZSA/IDEgOiAwKTtcbiAgICB1MShwb3N0LCBcInVfZmVlZGJhY2tcIiwgZy5mZWVkYmFjayk7XG4gICAgdTEocG9zdCwgXCJ1X3RyYWlsc1wiLCBnLnRyYWlscyk7XG4gICAgdTEocG9zdCwgXCJ1X2ZiX3pvb21cIiwgZy5mYlpvb20pO1xuICAgIHUxKHBvc3QsIFwidV9mYl9yb3RhdGVcIiwgZy5mYlJvdGF0ZSk7XG4gICAgdTEocG9zdCwgXCJ1X2ZiX2h1ZVwiLCBnLmZiSHVlKTtcbiAgICB1MShwb3N0LCBcInVfd2FycFwiLCBnLndhcnApO1xuICAgIHUxKHBvc3QsIFwidV9zd2lybFwiLCBnLnN3aXJsKTtcbiAgICB1MShwb3N0LCBcInVfcmlwcGxlXCIsIGcucmlwcGxlKTtcbiAgICB1MShwb3N0LCBcInVfem9vbVwiLCBnLnpvb20pO1xuICAgIHUxKHBvc3QsIFwidV9rYWxlaWRvXCIsIGcua2FsZWlkbyk7XG4gICAgdTEocG9zdCwgXCJ1X21pcnJvclwiLCBnLm1pcnJvcik7XG4gICAgdTEocG9zdCwgXCJ1X2Nocm9tYVwiLCBnLmNocm9tYSk7XG4gICAgdTEocG9zdCwgXCJ1X2h1ZV9vcmJpdFwiLCBnLmh1ZU9yYml0KTtcbiAgICB1MShwb3N0LCBcInVfc2F0XCIsIGcuc2F0dXJhdGlvbik7XG4gICAgdTEocG9zdCwgXCJ1X2NvblwiLCBnLmNvbnRyYXN0KTtcbiAgICB1MShwb3N0LCBcInVfc29sYXJpemVcIiwgZy5zb2xhcml6ZSk7XG4gICAgdTEocG9zdCwgXCJ1X2dyYWluXCIsIGcuZ3JhaW4pO1xuICAgIHUxKHBvc3QsIFwidV9zY2FubGluZXNcIiwgZy5zY2FubGluZXMpO1xuICAgIHUxKHBvc3QsIFwidV92aWduZXR0ZVwiLCBnLnZpZ25ldHRlKTtcbiAgICB1MShwb3N0LCBcInVfc3Ryb2JlXCIsIGcuc3Ryb2JlKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9mb3JjZVwiLCBnLnBvaW50ZXJGb3JjZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfc2l6ZVwiLCBnLnBvaW50ZXJTaXplKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9tb2RlXCIsIGcucG9pbnRlck1vZGUpO1xuICAgIGRyYXdRdWFkKCk7XG5cbiAgICAvLyBQcmVzZW50XG4gICAgY29uc3QgY29weSA9IHByb2dyYW1zLmNvcHk7XG4gICAgZ2whLnVzZVByb2dyYW0oY29weS5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KG51bGwpO1xuICAgIHVUZXgoY29weSwgXCJ1X3RleFwiLCBvdXQudGV4dHVyZSwgMCk7XG4gICAgZHJhd1F1YWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5U2l6ZSgpIHtcbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIHBpeGVsUmF0aW9DYXApO1xuICAgIGNvbnN0IG5leHRXaWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoY3NzV2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IG5leHRIZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGNzc0hlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKG5leHRXaWR0aCA9PT0gd2lkdGggJiYgbmV4dEhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgd2lkdGggPSBuZXh0V2lkdGg7XG4gICAgaGVpZ2h0ID0gbmV4dEhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIE9iamVjdC52YWx1ZXModGFyZ2V0cykpIHJlc2l6ZVRhcmdldCh0YXJnZXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIG5lZWRGZWVkYmFja0NsZWFyID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzaXplKG5leHRDc3NXaWR0aCwgbmV4dENzc0hlaWdodCkge1xuICAgICAgY3NzV2lkdGggPSBNYXRoLm1heCgxLCBuZXh0Q3NzV2lkdGgpO1xuICAgICAgY3NzSGVpZ2h0ID0gTWF0aC5tYXgoMSwgbmV4dENzc0hlaWdodCk7XG4gICAgICBhcHBseVNpemUoKTtcbiAgICB9LFxuICAgIHNldFBpeGVsUmF0aW9DYXAoY2FwKSB7XG4gICAgICBwaXhlbFJhdGlvQ2FwID0gTWF0aC5tYXgoMC41LCBjYXApO1xuICAgICAgYXBwbHlTaXplKCk7XG4gICAgfSxcbiAgICBzZXRJbWFnZShpbWFnZUlkLCBzb3VyY2VJbWFnZSkge1xuICAgICAgbGV0IGVudHJ5ID0gaW1hZ2VzLmdldChpbWFnZUlkKTtcbiAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSB7IHRleHR1cmU6IG1ha2VUZXh0dXJlKCksIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgICAgICAgaW1hZ2VzLnNldChpbWFnZUlkLCBlbnRyeSk7XG4gICAgICB9XG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBlbnRyeS50ZXh0dXJlKTtcbiAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBzb3VyY2VJbWFnZSk7XG4gICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCBmYWxzZSk7XG4gICAgICBjb25zdCBzaXplID0gdGV4dHVyZVNvdXJjZVNpemUoc291cmNlSW1hZ2UpO1xuICAgICAgZW50cnkud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgZW50cnkuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgfSxcbiAgICByZW1vdmVJbWFnZShpbWFnZUlkKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IGltYWdlcy5nZXQoaW1hZ2VJZCk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKGVudHJ5LnRleHR1cmUpO1xuICAgICAgaW1hZ2VzLmRlbGV0ZShpbWFnZUlkKTtcbiAgICB9LFxuICAgIGhhc0ltYWdlKGltYWdlSWQpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuaGFzKGltYWdlSWQpO1xuICAgIH0sXG4gICAgcmVuZGVyLFxuICAgIGNsZWFyRmVlZGJhY2soKSB7XG4gICAgICBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBpbWFnZXMudmFsdWVzKCkpIGdsLmRlbGV0ZVRleHR1cmUoZW50cnkudGV4dHVyZSk7XG4gICAgICBpbWFnZXMuY2xlYXIoKTtcbiAgICAgIGdsLmRlbGV0ZVRleHR1cmUobWlzc2luZ1RleHR1cmUpO1xuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKSkge1xuICAgICAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0YXJnZXQuZnJhbWVidWZmZXIpO1xuICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRhcmdldC50ZXh0dXJlKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgeyBwcm9ncmFtIH0gb2YgT2JqZWN0LnZhbHVlcyhwcm9ncmFtcykpIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICBpZiAocXVhZCkgZ2wuZGVsZXRlQnVmZmVyKHF1YWQpO1xuICAgIH0sXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBNZWRpYUtpbmQgfSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmNvbnN0IEFVRElPX0VYVCA9IC9cXC4obXAzfHdhdnxvZ2d8bTRhfGFhY3xmbGFjfG9wdXN8d21hKSQvaTtcbmNvbnN0IElNQUdFX0VYVCA9IC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwfGJtcHxzdmd8YXZpZnxpY28pJC9pO1xuY29uc3QgVklERU9fRVhUID0gL1xcLihtcDR8d2VibXxtb3Z8bTR2fGF2aXxta3Z8b2d2KSQvaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5RmlsZShmaWxlOiBGaWxlKTogTWVkaWFLaW5kIHtcbiAgY29uc3QgdHlwZSA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwidmlkZW8vXCIpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiYXVkaW8vXCIpKSByZXR1cm4gXCJhdWRpb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4gXCJpbWFnZVwiO1xuICBpZiAoQVVESU9fRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwiYXVkaW9cIjtcbiAgaWYgKElNQUdFX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcImltYWdlXCI7XG4gIGlmIChWSURFT19FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICByZXR1cm4gXCJkYXRhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUJsb2IoYmxvYjogQmxvYiwgbmFtZSA9IFwiXCIpOiBNZWRpYUtpbmQge1xuICByZXR1cm4gY2xhc3NpZnlGaWxlKG5ldyBGaWxlKFtibG9iXSwgbmFtZSB8fCBcImZpbGVcIiwgeyB0eXBlOiBibG9iLnR5cGUgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFLaW5kTGFiZWwoa2luZDogTWVkaWFLaW5kKTogc3RyaW5nIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBcInZpZGVvXCI6XG4gICAgICByZXR1cm4gXCJWaWRlb1wiO1xuICAgIGNhc2UgXCJhdWRpb1wiOlxuICAgICAgcmV0dXJuIFwiQXVkaW9cIjtcbiAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgIHJldHVybiBcIkltYWdlXCI7XG4gICAgY2FzZSBcImRhdGFcIjpcbiAgICAgIHJldHVybiBcIkRhdGFcIjtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBfZXhoYXVzdGl2ZTogbmV2ZXIgPSBraW5kO1xuICAgICAgcmV0dXJuIF9leGhhdXN0aXZlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdExheWVyTmFtZShraW5kOiBNZWRpYUtpbmQsIGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzdGVtID0gZmlsZU5hbWUucmVwbGFjZSgvXFwuW2EtejAtOV0rJC9pLCBcIlwiKS50cmltKCk7XG4gIHJldHVybiBzdGVtIHx8IG1lZGlhS2luZExhYmVsKGtpbmQpO1xufVxuXG4vKiogRmlyc3QgMU1CIG9mIGFuIGFyYml0cmFyeSBmaWxlLCBwYWludGVkIGFzIGEgMjU2XHUwMEQ3MjU2IGJ5dGUgdGV4dHVyZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludERhdGFCeXRlcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBieXRlczogVWludDhBcnJheSkge1xuICBjb25zdCB3aWR0aCA9IDI1NjtcbiAgY29uc3QgaGVpZ2h0ID0gMjU2O1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjb25zdCBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IHRvdGFsID0gd2lkdGggKiBoZWlnaHQ7XG4gIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IGxlbiA/IChieXRlc1tpICUgbGVuXSA/PyAwKSA6IChpICogMzcpICYgMjU1O1xuICAgIGNvbnN0IGIgPSBsZW4gPyAoYnl0ZXNbKGkgKiAzKSAlIGxlbl0gPz8gMCkgOiAoaSAqIDkxKSAmIDI1NTtcbiAgICBjb25zdCBjID0gbGVuID8gKGJ5dGVzWyhpICogNyArIDEzKSAlIGxlbl0gPz8gMCkgOiAoaSAqIDEzKSAmIDI1NTtcbiAgICBjb25zdCBvID0gaSAqIDQ7XG4gICAgaW1hZ2UuZGF0YVtvXSA9IGE7XG4gICAgaW1hZ2UuZGF0YVtvICsgMV0gPSBiO1xuICAgIGltYWdlLmRhdGFbbyArIDJdID0gKGEgXiBjKSAmIDI1NTtcbiAgICBpbWFnZS5kYXRhW28gKyAzXSA9IDI1NTtcbiAgfVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKTtcblxuICBjb25zdCB3YXNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB3YXNoLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjMyLDIzMCwyMjQsMC4xKVwiKTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMC41LCBcInJnYmEoMTY4LDEyMCwxMjgsMC4xMilcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgxMzgsMTM0LDE0NCwwLjEpXCIpO1xuICBjdHguZmlsbFN0eWxlID0gd2FzaDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICBpZiAoY2FudmFzLndpZHRoICE9PSA2NDAgfHwgY2FudmFzLmhlaWdodCAhPT0gMzYwKSB7XG4gICAgY2FudmFzLndpZHRoID0gNjQwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAzNjA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsRnJvbVNwZWN0cnVtKHNwZWN0cnVtOiBVaW50OEFycmF5KTogbnVtYmVyIHtcbiAgY29uc3QgYmlucyA9IE1hdGgubWluKDQ4LCBzcGVjdHJ1bS5sZW5ndGgpO1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkgKz0gMSlcbiAgICB0b3RhbCArPSBzcGVjdHJ1bVtpXSAqICgxLjM1IC0gKGkgLyBiaW5zKSAqIDAuNTUpO1xuICByZXR1cm4gTWF0aC5taW4oMSwgdG90YWwgLyBiaW5zIC8gMTkwKTtcbn1cblxuLyoqIFJlYWN0aXZlIGZpZWxkIHVzZWQgYXMgdGhlIGxheWVyIHRleHR1cmUgZm9yIGF1ZGlvIGZpbGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhaW50QXVkaW9WaXN1YWwoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzKTtcbiAgY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgsIDgsIDEwLCAkezAuMSArICgxIC0gbGV2ZWwpICogMC4wOH0pYDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGNvbnN0IGJpbnMgPSBNYXRoLm1pbig5Niwgc3BlY3RydW0ubGVuZ3RoKTtcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGJpbnM7XG4gIGNvbnN0IG1pZCA9IGhlaWdodCAqIDAuNTU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluczsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2FtcGxlID0gc3BlY3RydW1baV0gLyAyNTU7XG4gICAgY29uc3QgYm9vc3QgPSBzYW1wbGUgKiAoMC41NSArIGxldmVsICogMC45KTtcbiAgICBjb25zdCBoID0gYm9vc3QgKiBoZWlnaHQgKiAwLjcyO1xuICAgIGNvbnN0IGh1ZSA9IDIwICsgKGkgLyBiaW5zKSAqIDQwICsgdGltZSAqIDEyICsgbGV2ZWwgKiAzMDtcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2h1ZSAlIDM2MH0gJHsyOCArIHNhbXBsZSAqIDM1fSUgJHszMiArIHNhbXBsZSAqIDM4fSUpYDtcbiAgICBjdHguZmlsbFJlY3QoaSAqIGJhcldpZHRoLCBtaWQgLSBoICogMC41NSwgTWF0aC5tYXgoMSwgYmFyV2lkdGggKiAwLjgyKSwgaCk7XG4gIH1cblxuICBjb25zdCBjeCA9IHdpZHRoICogMC41O1xuICBjb25zdCBjeSA9IGhlaWdodCAqIDAuNDg7XG4gIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpICogKDAuMDggKyBsZXZlbCAqIDAuMTgpO1xuICBjb25zdCBnbG93ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCByYWRpdXMgKiAyLjIpO1xuICBnbG93LmFkZENvbG9yU3RvcCgwLCBgaHNsYSgxMiA0NSUgNjIlIC8gJHswLjE4ICsgbGV2ZWwgKiAwLjM1fSlgKTtcbiAgZ2xvdy5hZGRDb2xvclN0b3AoMSwgXCJoc2xhKDAgMCUgMCUgLyAwKVwiKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGdsb3c7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyhjeCwgY3ksIHJhZGl1cyAqIDIuMiwgMCwgTWF0aC5QSSAqIDIpO1xuICBjdHguZmlsbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FudmFzVGh1bWIoXG4gIHNvdXJjZTogQ2FudmFzSW1hZ2VTb3VyY2UsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBtYXhEaW0gPSA5Nixcbik6IHN0cmluZyB7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgbWF4RGltIC8gTWF0aC5tYXgod2lkdGgsIGhlaWdodCwgMSkpO1xuICBjb25zdCB0aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIHRodW1iLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKSk7XG4gIHRodW1iLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpKTtcbiAgY29uc3QgY3R4ID0gdGh1bWIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuIFwiXCI7XG4gIGN0eC5kcmF3SW1hZ2Uoc291cmNlLCAwLCAwLCB0aHVtYi53aWR0aCwgdGh1bWIuaGVpZ2h0KTtcbiAgcmV0dXJuIHRodW1iLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC43KTtcbn1cbiIsICIvLyBDbGllbnQtc2lkZSBwZXJzaXN0ZW5jZTogbWVkaWEgYmxvYnMgbGl2ZSBpbiBJbmRleGVkREIgKHNjZW5lcyBzYXZlZCB0byB0aGVcbi8vIHNlcnZlciBhcmUgcGFyYW1zLW9ubHkgSlNPTiksIGFuZCB0aGUgd29ya2luZyBzY2VuZSBhdXRvc2F2ZXMgdG8gbG9jYWxTdG9yYWdlLlxuXG5pbXBvcnQgeyBkZWNvZGVTY2VuZSwgZW5jb2RlU2NlbmUsIHR5cGUgU2NlbmUgfSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmNvbnN0IERCX05BTUUgPSBcInZhdWRpby0yLWltYWdlc1wiO1xuY29uc3QgU1RPUkUgPSBcImltYWdlc1wiO1xuY29uc3QgQVVUT1NBVkVfS0VZID0gXCJ2YXVkaW8tMjphdXRvc2F2ZVwiO1xuY29uc3QgTUFYX1RFWFRVUkVfRElNID0gMjA0ODtcbmNvbnN0IFRIVU1CX0RJTSA9IDk2O1xuXG5sZXQgZGJQcm9taXNlOiBQcm9taXNlPElEQkRhdGFiYXNlPiB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiBvcGVuRGIoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICBpZiAoIWRiUHJvbWlzZSkge1xuICAgIGRiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihEQl9OQU1FLCAxKTtcbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QucmVzdWx0Lm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoU1RPUkUpKSB7XG4gICAgICAgICAgcmVxdWVzdC5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiBvcGVuIGZhaWxlZFwiKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEltYWdlQmxvYihpZDogc3RyaW5nLCBibG9iOiBCbG9iKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWR3cml0ZVwiKTtcbiAgICB0eC5vYmplY3RTdG9yZShTVE9SRSkucHV0KGJsb2IsIGlkKTtcbiAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IEVycm9yKFwiSW5kZXhlZERCIHdyaXRlIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VCbG9iKGlkOiBzdHJpbmcpOiBQcm9taXNlPEJsb2IgfCBudWxsPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFNUT1JFKS5nZXQoaWQpO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCBpbnN0YW5jZW9mIEJsb2IgPyByZXF1ZXN0LnJlc3VsdCA6IG51bGwpO1xuICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiByZWFkIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW1hZ2VCbG9iKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZGIgPSBhd2FpdCBvcGVuRGIoKTtcbiAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuICAgIHR4Lm9iamVjdFN0b3JlKFNUT1JFKS5kZWxldGUoaWQpO1xuICAgIHR4Lm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgZGVsZXRlIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgdHlwZSBEZWNvZGVkSW1hZ2UgPSB7XG4gIC8qKiBEb3duc2NhbGVkIHRvIEdQVS1mcmllbmRseSBzaXplOyB1cGxvYWQgdGhpcyBhcyB0aGUgdGV4dHVyZS4gKi9cbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgLyoqIFRpbnkgZGF0YSBVUkwgZm9yIHRoZSBsYXllcnMgcGFuZWwuICovXG4gIHRodW1iOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUltYWdlQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxEZWNvZGVkSW1hZ2U+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCBNQVhfVEVYVFVSRV9ESU0gLyBNYXRoLm1heChpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLm5hdHVyYWxXaWR0aCAqIHNjYWxlKSk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2UubmF0dXJhbEhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCIyRCBjYW52YXMgdW5hdmFpbGFibGVcIik7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCB0aHVtYlNjYWxlID0gTWF0aC5taW4oMSwgVEhVTUJfRElNIC8gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkpO1xuICAgICAgICBjb25zdCB0aHVtYkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRodW1iQ2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAqIHRodW1iU2NhbGUpKTtcbiAgICAgICAgdGh1bWJDYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiB0aHVtYlNjYWxlKSk7XG4gICAgICAgIGNvbnN0IHRodW1iQ29udGV4dCA9IHRodW1iQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKHRodW1iQ29udGV4dCkgdGh1bWJDb250ZXh0LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIHRodW1iQ2FudmFzLndpZHRoLCB0aHVtYkNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICB0aHVtYjogdGh1bWJDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjcpLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChjYXVzZSkge1xuICAgICAgICByZWplY3QoY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlIDogbmV3IEVycm9yKFwiSW1hZ2UgZGVjb2RlIGZhaWxlZFwiKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBkZWNvZGUgdGhhdCBpbWFnZVwiKSk7XG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cHJlZml4fS0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDgpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXV0b3NhdmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUT1NBVkVfS0VZLCBlbmNvZGVTY2VuZShzY2VuZSkpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBRdW90YSAvIHByaXZhdGUgbW9kZSBcdTIwMTQgbG9zaW5nIGF1dG9zYXZlIGlzIGFjY2VwdGFibGUuXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBdXRvc2F2ZSgpOiBTY2VuZSB8IG51bGwge1xuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVE9TQVZFX0tFWSk7XG4gICAgaWYgKCFyYXcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBkZWNvZGVTY2VuZShyYXcpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwgImNvbnN0IEVOQ09ERURfRU5USVRJRVMgPSAvW1wiJjxdLztcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBzdHIgKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVFbnRpdGllcyhzdHIpIHtcblx0Ly8gU2tpcCBhbGwgd29yayBmb3Igc3RyaW5ncyB3aXRoIG5vIGVudGl0aWVzIG5lZWRpbmcgZW5jb2Rpbmc6XG5cdGlmIChzdHIubGVuZ3RoID09PSAwIHx8IEVOQ09ERURfRU5USVRJRVMudGVzdChzdHIpID09PSBmYWxzZSkgcmV0dXJuIHN0cjtcblxuXHRsZXQgbGFzdCA9IDAsXG5cdFx0aSA9IDAsXG5cdFx0b3V0ID0gJycsXG5cdFx0Y2ggPSAnJztcblxuXHQvLyBTZWVrIGZvcndhcmQgaW4gc3RyIHVudGlsIHRoZSBuZXh0IGVudGl0eSBjaGFyOlxuXHRmb3IgKDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcblx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdGNoID0gJyZxdW90Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0Y2ggPSAnJmFtcDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNjA6XG5cdFx0XHRcdGNoID0gJyZsdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBBcHBlbmQgc2tpcHBlZC9idWZmZXJlZCBjaGFyYWN0ZXJzIGFuZCB0aGUgZW5jb2RlZCBlbnRpdHk6XG5cdFx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdFx0b3V0ICs9IGNoO1xuXHRcdC8vIFN0YXJ0IHRoZSBuZXh0IHNlZWsvYnVmZmVyIGFmdGVyIHRoZSBlbnRpdHkncyBvZmZzZXQ6XG5cdFx0bGFzdCA9IGkgKyAxO1xuXHR9XG5cdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRyZXR1cm4gb3V0O1xufVxuIiwgIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBlbmNvZGVFbnRpdGllcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vLi4vc3JjL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogVGhpcyBmaWxlIGV4cG9ydHMgdmFyaW91cyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IEJhYmVsJ3MgXCJhdXRvbWF0aWNcIiBKU1ggcnVudGltZSBBUEk6XG4gKiAtIGpzeCh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hzKHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBfX3NvdXJjZSwgX19zZWxmKVxuICpcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiBjcmVhdGVWTm9kZSBoZXJlIGlzIG9wdGltaXplZCBmb3IgcGVyZm9ybWFuY2UuXG4gKiBCZW5jaG1hcmtzOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzVmNmI1NGEwYjQ2MzIxMDBhN2RjZDJiM1xuICovXG5cbi8qKlxuICogSlNYLkVsZW1lbnQgZmFjdG9yeSB1c2VkIGJ5IEJhYmVsJ3Mge3J1bnRpbWU6XCJhdXRvbWF0aWNcIn0gSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtWTm9kZVsndHlwZSddfSB0eXBlXG4gKiBAcGFyYW0ge1ZOb2RlWydwcm9wcyddfSBwcm9wc1xuICogQHBhcmFtIHtWTm9kZVsna2V5J119IFtrZXldXG4gKiBAcGFyYW0ge3Vua25vd259IFtpc1N0YXRpY0NoaWxkcmVuXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zb3VyY2VdXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NlbGZdXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIF9fc291cmNlLCBfX3NlbGYpIHtcblx0aWYgKCFwcm9wcykgcHJvcHMgPSB7fTtcblx0Ly8gV2UnbGwgd2FudCB0byBwcmVzZXJ2ZSBgcmVmYCBpbiBwcm9wcyB0byBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvclxuXHQvLyBmb3J3YXJkUmVmIGNvbXBvbmVudHMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoYXQgc2hvdWxkIGhhcHBlbiB2aWFcblx0Ly8gYSBzZXBhcmF0ZSBQUi5cblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzLFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGlmICgncmVmJyBpbiBub3JtYWxpemVkUHJvcHMpIHtcblx0XHRub3JtYWxpemVkUHJvcHMgPSB7fTtcblx0XHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRcdGlmIChpID09ICdyZWYnKSB7XG5cdFx0XHRcdHJlZiA9IHByb3BzW2ldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEB0eXBlIHtWTm9kZSAmIHsgX19zb3VyY2U6IGFueTsgX19zZWxmOiBhbnkgfX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wczogbm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0X2NvbXBvbmVudDogbnVsbCxcblx0XHRjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuXHRcdF9vcmlnaW5hbDogLS12bm9kZUlkLFxuXHRcdF9pbmRleDogLTEsXG5cdFx0X2ZsYWdzOiAwLFxuXHRcdF9fc291cmNlLFxuXHRcdF9fc2VsZlxuXHR9O1xuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wcy5cblx0Ly8gTm90ZTogYHR5cGVgIGlzIG9mdGVuIGEgU3RyaW5nLCBhbmQgY2FuIGJlIGB1bmRlZmluZWRgIGluIGRldmVsb3BtZW50LlxuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgKHJlZiA9IHR5cGUuZGVmYXVsdFByb3BzKSkge1xuXHRcdGZvciAoaSBpbiByZWYpXG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcmVmW2ldO1xuXHRcdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGVtcGxhdGUgdm5vZGUuIFRoaXMgZnVuY3Rpb24gaXMgbm90IGV4cGVjdGVkIHRvIGJlXG4gKiB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nW119IHRlbXBsYXRlc1xuICogQHBhcmFtICB7QXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn0gZXhwcnNcbiAqIEByZXR1cm5zIHtWTm9kZX1cbiAqL1xuZnVuY3Rpb24ganN4VGVtcGxhdGUodGVtcGxhdGVzLCAuLi5leHBycykge1xuXHRjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKEZyYWdtZW50LCB7IHRwbDogdGVtcGxhdGVzLCBleHBycyB9KTtcblx0Ly8gQnlwYXNzIHJlbmRlciB0byBzdHJpbmcgdG9wIGxldmVsIEZyYWdtZW50IG9wdGltaXphdGlvblxuXHR2bm9kZS5rZXkgPSB2bm9kZS5fdm5vZGU7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuY29uc3QgSlNfVE9fQ1NTID0ge307XG5jb25zdCBDU1NfUkVHRVggPSAvW0EtWl0vZztcblxuLyoqXG4gKiBVbndyYXAgcG90ZW50aWFsIHNpZ25hbHMuXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gdmFsdWUudmFsdWVPZigpXG5cdFx0OiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gSFRNTCBhdHRyaWJ1dGUgdG8gYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgbm90XG4gKiBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlXG4gKiBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgYXR0cmlidXRlIG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24ganN4QXR0cihuYW1lLCB2YWx1ZSkge1xuXHRpZiAob3B0aW9ucy5hdHRyKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gb3B0aW9ucy5hdHRyKG5hbWUsIHZhbHVlKTtcblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWx1ZSA9IG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSk7XG5cblx0aWYgKG5hbWUgPT09ICdyZWYnIHx8IG5hbWUgPT09ICdrZXknKSByZXR1cm4gJyc7XG5cdGlmIChuYW1lID09PSAnc3R5bGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB2YWx1ZSkge1xuXHRcdFx0bGV0IHZhbCA9IHZhbHVlW3Byb3BdO1xuXHRcdFx0aWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJycpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9XG5cdFx0XHRcdFx0cHJvcFswXSA9PSAnLSdcblx0XHRcdFx0XHRcdD8gcHJvcFxuXHRcdFx0XHRcdFx0OiBKU19UT19DU1NbcHJvcF0gfHxcblx0XHRcdFx0XHRcdFx0KEpTX1RPX0NTU1twcm9wXSA9IHByb3AucmVwbGFjZShDU1NfUkVHRVgsICctJCYnKS50b0xvd2VyQ2FzZSgpKTtcblxuXHRcdFx0XHRsZXQgc3VmZml4ID0gJzsnO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0XHQvLyBFeGNsdWRlIGN1c3RvbS1hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0IW5hbWUuc3RhcnRzV2l0aCgnLS0nKSAmJlxuXHRcdFx0XHRcdCFJU19OT05fRElNRU5TSU9OQUwudGVzdChuYW1lKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdWZmaXggPSAncHg7Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgPSBzdHIgKyBuYW1lICsgJzonICsgdmFsICsgc3VmZml4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoc3RyKSArICdcIic7XG5cdH1cblxuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHZhbHVlID09PSBmYWxzZSB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSByZXR1cm4gbmFtZTtcblxuXHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSkgKyAnXCInO1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIGR5bmFtaWMgY2hpbGQgcGFzc2VkIHRvIGBqc3hUZW1wbGF0ZWAuIFRoaXMgZnVuY3Rpb25cbiAqIGlzIG5vdCBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYVxuICogcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbCB8IFZOb2RlIHwgQXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn1cbiAqL1xuZnVuY3Rpb24ganN4RXNjYXBlKHZhbHVlKSB7XG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcblx0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIENoZWNrIGZvciBWTm9kZVxuXHRcdGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdmFsdWU7XG5cblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFsdWVbaV0gPSBqc3hFc2NhcGUodmFsdWVbaV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlVk5vZGUgYXMganN4LFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hzLFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hERVYsXG5cdEZyYWdtZW50LFxuXHQvLyBwcmVjb21waWxlZCBKU1ggdHJhbnNmb3JtXG5cdGpzeFRlbXBsYXRlLFxuXHRqc3hBdHRyLFxuXHRqc3hFc2NhcGVcbn07XG4iLCAiaW1wb3J0IHsgdXNlQXV0aCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHtcbiAgICBCR19NT0RFUyxcbiAgICBCTEVORF9NT0RFUyxcbiAgICBERUZBVUxUX0dMT0JBTF9GWCxcbiAgICBERUZBVUxUX0xBWUVSX0ZYLFxuICAgIE1BWF9MQVlFUlMsXG4gICAgUE9JTlRFUl9NT0RFUyxcbiAgICBUSUxFX01PREVTLFxuICAgIGNsYW1wLFxuICAgIGNsZWFuTmFtZSxcbiAgICBkZWNvZGVTY2VuZSxcbiAgICBlbmNvZGVTY2VuZSxcbiAgICB0eXBlIEJsZW5kTW9kZSxcbiAgICB0eXBlIEdsb2JhbEZ4LFxuICAgIHR5cGUgTGF5ZXJGeCxcbiAgICB0eXBlIE1lZGlhS2luZCxcbiAgICB0eXBlIFNjZW5lLFxuICAgIHR5cGUgU2NlbmVMYXllcixcbiAgICB0eXBlIFNjZW5lTWV0YSxcbn0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBXT1JMRF9QUkVTRVRTLFxuICAgIGJsZW5kSW5kZXgsXG4gICAgbXV0YXRlR2xvYmFsRngsXG4gICAgcmFuZG9tR2xvYmFsRngsXG4gICAgcmFuZG9tTGF5ZXJGeCxcbiAgICByZXNldExheWVyRnhFZmZlY3RzLFxufSBmcm9tIFwiLi9wcmVzZXRzXCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUVuZ2luZSxcbiAgICBoZXhUb1JnYixcbiAgICB0eXBlIEVuZ2luZUhhbmRsZSxcbiAgICB0eXBlIEZyYW1lU3RhdGUsXG4gICAgdHlwZSBMYXllclJlbmRlclN0YXRlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxufSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7XG4gICAgY2FudmFzVGh1bWIsXG4gICAgY2xhc3NpZnlCbG9iLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBkZWZhdWx0TGF5ZXJOYW1lLFxuICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzLFxuICAgIGxldmVsRnJvbVNwZWN0cnVtLFxuICAgIG1lZGlhS2luZExhYmVsLFxuICAgIHBhaW50QXVkaW9WaXN1YWwsXG4gICAgcGFpbnREYXRhQnl0ZXMsXG59IGZyb20gXCIuL21lZGlhXCI7XG5pbXBvcnQge1xuICAgIGRlY29kZUltYWdlQmxvYixcbiAgICBnZXRJbWFnZUJsb2IsXG4gICAgbG9hZEF1dG9zYXZlLFxuICAgIG5ld0lkLFxuICAgIHB1dEltYWdlQmxvYixcbiAgICBzYXZlQXV0b3NhdmUsXG59IGZyb20gXCIuL3N0b3JlXCI7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rTW9ubzp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcblxuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0tdm9pZDogIzA4MDgwYTtcbiAgLS1wYW5lbDogIzEwMTAxNDtcbiAgLS1wYW5lbC0yOiAjMTUxNTFhO1xuICAtLWxpbmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIC0tbGluZS1ob3Q6IHJnYmEoMjMyLCAyMzAsIDIyNCwgMC4zNSk7XG4gIC0tYWNpZDogI2U4ZTZlMDtcbiAgLS12aW9sZXQ6ICM4YTg2OTA7XG4gIC0taG90OiAjYTg3ODgwO1xuICAtLXBhcGVyOiAjZThlNmUwO1xuICAtLW11dGU6ICM4NTg1OGY7XG4gIC0tdHJhY2s6ICMzMDMwMzg7XG59XG5cbmh0bWwsIGJvZHksICNhcHAgeyBtYXJnaW46IDA7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7IG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7IH1cbmJvZHkgeyBmb250OiAxM3B4LzEuNDUgXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlOyBjb2xvcjogdmFyKC0tcGFwZXIpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2lkKTsgY29sb3I6IHZhcigtLXZvaWQpOyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjayk7IGJvcmRlci1yYWRpdXM6IDA7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4ua25vYi1yYW5nZSB7XG4gIC0tZmlsbDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNpZCkgMCB2YXIoLS1maWxsKSwgdmFyKC0tdHJhY2spIHZhcigtLWZpbGwpIDEwMCUpO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbn1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHZhcigtLXRyYWNrKTsgfVxuLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IH1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG59XG5cbkBrZXlmcmFtZXMgcmVjLWJsaW5rIHsgMCUsIDQ4JSB7IG9wYWNpdHk6IDE7IH0gNTIlLCAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfSB9XG4ucmVjLWRvdCB7IGFuaW1hdGlvbjogcmVjLWJsaW5rIDEuMXMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBmYWRlLXVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cbi5wb3AgeyBhbmltYXRpb246IGZhZGUtdXAgMTQwbXMgY3ViaWMtYmV6aWVyKC4yLC44LC4yLDEpIGJvdGg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXSB7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjBweDsgY3Vyc29yOiBwb2ludGVyOyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIgeyBwYWRkaW5nOiAxcHg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2ggeyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IH1cbnNlbGVjdC5meC1yZXMge1xuICBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1tdXRlKTsgcGFkZGluZzogMCA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRNIE1vbm9cIiwgdWktbW9ub3NwYWNlLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBvdXRsaW5lOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWxlY3QuZngtcmVzOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1saW5lLWhvdCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbnNlbGVjdC5meC1yZXM6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuMzU7IGN1cnNvcjogZGVmYXVsdDsgfVxuc2VsZWN0LmZ4LXJlcyBvcHRpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbmA7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBleHBvcnQgcmVzb2x1dGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEVYUE9SVF9SRVNPTFVUSU9OUyA9IFtcbiAgICB7IGlkOiBcInNjcmVlblwiLCBsYWJlbDogXCJTY3JlZW5cIiwgaGVpZ2h0OiAwIH0sXG4gICAgeyBpZDogXCI3MjBcIiwgbGFiZWw6IFwiNzIwcFwiLCBoZWlnaHQ6IDcyMCB9LFxuICAgIHsgaWQ6IFwiMTA4MFwiLCBsYWJlbDogXCIxMDgwcFwiLCBoZWlnaHQ6IDEwODAgfSxcbiAgICB7IGlkOiBcIjE0NDBcIiwgbGFiZWw6IFwiMTQ0MHBcIiwgaGVpZ2h0OiAxNDQwIH0sXG4gICAgeyBpZDogXCIyMTYwXCIsIGxhYmVsOiBcIjRLXCIsIGhlaWdodDogMjE2MCB9LFxuXSBhcyBjb25zdDtcblxudHlwZSBFeHBvcnRSZXNvbHV0aW9uSWQgPSAodHlwZW9mIEVYUE9SVF9SRVNPTFVUSU9OUylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBNQVhfRVhQT1JUX0VER0UgPSA4MTkyO1xuXG5mdW5jdGlvbiByZXNvbHZlRXhwb3J0U2l6ZShcbiAgICByZXNvbHV0aW9uSWQ6IEV4cG9ydFJlc29sdXRpb25JZCxcbiAgICBzdGFnZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxuICAgIC8qKiBGb3IgXCJzY3JlZW5cIiBQTkcgZXhwb3J0cyBcdTIwMTQgbXVsdGlwbHkgdGhlIGxpdmUgc3RhZ2UgYnkgdGhpcy4gKi9cbiAgICBzY3JlZW5TY2FsZSA9IDEsXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHN0YWdlLndpZHRoIC8gTWF0aC5tYXgoMSwgc3RhZ2UuaGVpZ2h0KSk7XG4gICAgbGV0IGhlaWdodDogbnVtYmVyO1xuICAgIGxldCB3aWR0aDogbnVtYmVyO1xuICAgIGlmIChyZXNvbHV0aW9uSWQgPT09IFwic2NyZWVuXCIpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzdGFnZS5oZWlnaHQgKiBzY3JlZW5TY2FsZSkpO1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoc3RhZ2Uud2lkdGggKiBzY3JlZW5TY2FsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXNldCA9IEVYUE9SVF9SRVNPTFVUSU9OUy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJlc29sdXRpb25JZCxcbiAgICAgICAgKTtcbiAgICAgICAgaGVpZ2h0ID0gcHJlc2V0Py5oZWlnaHQgfHwgMTA4MDtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIGFzcGVjdCkpO1xuICAgIH1cbiAgICBjb25zdCBsb25nZXN0ID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGxvbmdlc3QgPiBNQVhfRVhQT1JUX0VER0UpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNQVhfRVhQT1JUX0VER0UgLyBsb25nZXN0O1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gICAgfVxuICAgIC8vIEtlZXAgZXZlbiBkaW1lbnNpb25zIFx1MjAxNCBmcmllbmRsaWVyIGZvciB2aWRlbyBlbmNvZGVycy5cbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGggLSAod2lkdGggJSAyKSwgaGVpZ2h0OiBoZWlnaHQgLSAoaGVpZ2h0ICUgMikgfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzPzogc3RyaW5nIH07XG5jb25zdCBzdmcgPSAocHJvcHM6IEljb25Qcm9wcywgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuKSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICBjbGFzcz17cHJvcHMuY2xhc3MgPz8gXCJ3LVsxNXB4XSBoLVsxNXB4XVwifVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjhcIlxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuKTtcbmNvbnN0IElQbHVzID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJNMTIgNXYxNE01IDEyaDE0XCIgLz4pO1xuY29uc3QgSURpY2UgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjIuNVwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCIwLjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjlcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVdhbmQgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPHBhdGggZD1cIk01IDE5IDE3IDdtMi0yLTEuNSAxLjVNMTcgN2wxLjUgMS41TTkgNS41IDkuOCA3LjMgMTEuNiA4IDkuOCA4LjcgOSAxMC41IDguMiA4LjcgNi40IDggOC4yIDcuM1ptOSA3IC42IDEuNCAxLjQuNi0xLjQuNi0uNiAxLjQtLjYtMS40LTEuNC0uNiAxLjQtLjZaXCIgLz4sXG4gICAgKTtcbmNvbnN0IElTYXZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiAzdjEybTAgMCA0LTRtLTQgNC00LTRNNCAxN3YzaDE2di0zXCIgLz4pO1xuY29uc3QgSUZvbGRlciA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTMgNi41QTEuNSAxLjUgMCAwIDEgNC41IDVoNGwyIDIuNWg5QTEuNSAxLjUgMCAwIDEgMjEgOXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTVBMS41IDEuNSAwIDAgMSAzIDE4WlwiIC8+LFxuICAgICk7XG5jb25zdCBJTWljID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiOVwiIHk9XCIzXCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTFcIiByeD1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgMTEuNWE2LjUgNi41IDAgMCAwIDEzIDBNMTIgMTh2M1wiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSURvd25sb2FkID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiA0djExbTAgMCA0LjUtNC41TTEyIDE1IDcuNSAxMC41TTQgMTloMTZcIiAvPik7XG5jb25zdCBJRXhwYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00IDlWNGg1TTIwIDlWNGgtNU00IDE1djVoNW0xMS01djVoLTVcIiAvPik7XG5jb25zdCBJRXllID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIuNSAxMlM2IDUuNSAxMiA1LjUgMjEuNSAxMiAyMS41IDEyIDE4IDE4LjUgMTIgMTguNSAyLjUgMTIgMi41IDEyWlwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSUV5ZU9mZiA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk00IDRsMTYgMTZNOS45IDUuOUE5LjUgOS41IDAgMCAxIDEyIDUuNWM2IDAgOS41IDYuNSA5LjUgNi41YTE3IDE3IDAgMCAxLTMuMyA0TTYgNy41QTE2IDE2IDAgMCAwIDIuNSAxMlM2IDE4LjUgMTIgMTguNWE5IDkgMCAwIDAgMy0uNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVRyYXNoID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00LjUgNi41aDE1bS0xMS0yaDdtLTkuNSAyIDEgMTNoMTBsMS0xM00xMCAxMHY2bTQtNnY2XCIgLz4pO1xuY29uc3QgSUNvcHkgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjEuNVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDVWNS41TTE2IDVhMS41IDEuNSAwIDAgMC0xLjUtMS41aC05QTEuNSAxLjUgMCAwIDAgNCA1djlBMS41IDEuNSAwIDAgMCA1LjUgMTUuNUg2XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5jb25zdCBJVXAgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIm02IDE0IDYtNiA2IDZcIiAvPik7XG5jb25zdCBJRG93biA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwibTYgMTAgNiA2IDYtNlwiIC8+KTtcbmNvbnN0IElQYXVzZSA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwiTTkgNXYxNE0xNSA1djE0XCIgLz4pO1xuY29uc3QgSVBsYXkgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk03IDV2MTRsMTItN1pcIiAvPik7XG5jb25zdCBJUGFuZWwgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjQuNVwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHJ4PVwiMS41XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSA0LjV2MTVcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElNb3ZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgM3YxOE0zIDEyaDE4TTEyIDMgOS41IDUuNU0xMiAzbDIuNSAyLjVNMTIgMjFsLTIuNS0yLjVNMTIgMjFsMi41LTIuNU0zIDEybDIuNS0yLjVNMyAxMmwyLjUgMi41TTIxIDEybC0yLjUtMi41TTIxIDEybC0yLjUgMi41XCIgLz4sXG4gICAgKTtcbmNvbnN0IElTcGFyayA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTEyIDNsMS44IDUuMkwxOSAxMGwtNS4yIDEuOEwxMiAxN2wtMS44LTUuMkw1IDEwbDUuMi0xLjhabTcgMTEgLjggMi4yTDIyIDE3bC0yLjIuOEwxOSAyMGwtLjgtMi4yTDE2IDE3bDIuMi0uOFpcIiAvPixcbiAgICApO1xuY29uc3QgSVNldHRpbmdzID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAzLjV2Mi4yTTEyIDE4LjN2Mi4yTTQuOSA2LjVsMS42IDEuNk0xNy41IDE1LjlsMS42IDEuNk0zLjUgMTJoMi4yTTE4LjMgMTJoMi4yTTQuOSAxNy41bDEuNi0xLjZNMTcuNSA4LjFsMS42LTEuNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXR0aW5ncyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG50eXBlIEFwcFNldHRpbmdzID0ge1xuICAgIHJlY29yZE1pY0F1ZGlvOiBib29sZWFuO1xufTtcblxuY29uc3QgU0VUVElOR1NfS0VZID0gXCJ2YXVkaW8tMi1zZXR0aW5nc1wiO1xuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogQXBwU2V0dGluZ3MgPSB7IHJlY29yZE1pY0F1ZGlvOiBmYWxzZSB9O1xuXG5mdW5jdGlvbiBsb2FkU2V0dGluZ3MoKTogQXBwU2V0dGluZ3Mge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFVFRJTkdTX0tFWSk7XG4gICAgICAgIGlmICghcmF3KSByZXR1cm4geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPEFwcFNldHRpbmdzPjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZE1pY0F1ZGlvOiBCb29sZWFuKHBhcnNlZC5yZWNvcmRNaWNBdWRpbyksXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7IC4uLkRFRkFVTFRfU0VUVElOR1MgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVTZXR0aW5ncyhzZXR0aW5nczogQXBwU2V0dGluZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRVRUSU5HU19LRVksIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGlnbm9yZSBxdW90YSAvIHByaXZhdGUgbW9kZSAqL1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gbGF5ZXJTZWVkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkLmxlbmd0aDsgaSsrKVxuICAgICAgICBoYXNoID0gKGhhc2ggKiAzMSArIGlkLmNoYXJDb2RlQXQoaSkpID4+PiAwO1xuICAgIHJldHVybiAoaGFzaCAlIDEwMDApIC8gMTAwMDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGVnKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHZhbHVlKX1cdTAwQjBgO1xufVxuZnVuY3Rpb24gZm9ybWF0WCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dmFsdWUudG9GaXhlZCgyKX1cdTAwRDdgO1xufVxuZnVuY3Rpb24gcGFkMyh2YWx1ZTogbnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQoKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDApKS5wYWRTdGFydChcbiAgICAgICAgMyxcbiAgICAgICAgXCIwXCIsXG4gICAgKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXkgbW9kZSBtYXBzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKiBUcmFuc2llbnQgcGVyLWhpdCBib29zdHMgbGF5ZXJlZCBvbnRvIHRoZSB3b3JsZCBGWDsgZGVjYXlzIGV2ZXJ5IGZyYW1lLiAqL1xudHlwZSBLaWNrU3RhdGUgPSB7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIHN0cm9iZTogbnVtYmVyO1xuICAgIGNocm9tYTogbnVtYmVyO1xuICAgIHJpcHBsZTogbnVtYmVyO1xuICAgIHN3aXJsOiBudW1iZXI7XG59O1xuXG5jb25zdCBQTEFZX0ZYX0tFWVM6IHtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgY2FwOiBzdHJpbmc7XG4gICAgcGFyYW06IGtleW9mIEdsb2JhbEZ4O1xuICAgIGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG4gICAgeyBjb2RlOiBcIktleVFcIiwgY2FwOiBcIlFcIiwgcGFyYW06IFwid2FycFwiLCBsYWJlbDogXCJ3YXJwXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5V1wiLCBjYXA6IFwiV1wiLCBwYXJhbTogXCJzd2lybFwiLCBsYWJlbDogXCJzd2lybFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUVcIiwgY2FwOiBcIkVcIiwgcGFyYW06IFwicmlwcGxlXCIsIGxhYmVsOiBcInJpcHBsZVwiIH0sXG4gICAgeyBjb2RlOiBcIktleVJcIiwgY2FwOiBcIlJcIiwgcGFyYW06IFwiem9vbVwiLCBsYWJlbDogXCJ0dW5uZWxcIiB9LFxuICAgIHsgY29kZTogXCJLZXlUXCIsIGNhcDogXCJUXCIsIHBhcmFtOiBcImthbGVpZG9cIiwgbGFiZWw6IFwia2FsZWlkb1wiIH0sXG4gICAgeyBjb2RlOiBcIktleVlcIiwgY2FwOiBcIllcIiwgcGFyYW06IFwibWlycm9yXCIsIGxhYmVsOiBcIm1pcnJvclwiIH0sXG4gICAgeyBjb2RlOiBcIktleVVcIiwgY2FwOiBcIlVcIiwgcGFyYW06IFwiY2hyb21hXCIsIGxhYmVsOiBcInByaXNtXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5SVwiLCBjYXA6IFwiSVwiLCBwYXJhbTogXCJmZWVkYmFja1wiLCBsYWJlbDogXCJlY2hvXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5T1wiLCBjYXA6IFwiT1wiLCBwYXJhbTogXCJ0cmFpbHNcIiwgbGFiZWw6IFwidHJhaWxzXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5UFwiLCBjYXA6IFwiUFwiLCBwYXJhbTogXCJzdHJvYmVcIiwgbGFiZWw6IFwic3Ryb2JlXCIgfSxcbl07XG5cbmNvbnN0IFBMQVlfUElBTk86IHsgY29kZTogc3RyaW5nOyBjYXA6IHN0cmluZyB9W10gPSBbXG4gICAgeyBjb2RlOiBcIktleUFcIiwgY2FwOiBcIkFcIiB9LFxuICAgIHsgY29kZTogXCJLZXlTXCIsIGNhcDogXCJTXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5RFwiLCBjYXA6IFwiRFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUZcIiwgY2FwOiBcIkZcIiB9LFxuICAgIHsgY29kZTogXCJLZXlHXCIsIGNhcDogXCJHXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5SFwiLCBjYXA6IFwiSFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUpcIiwgY2FwOiBcIkpcIiB9LFxuICAgIHsgY29kZTogXCJLZXlLXCIsIGNhcDogXCJLXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5TFwiLCBjYXA6IFwiTFwiIH0sXG4gICAgeyBjb2RlOiBcIlNlbWljb2xvblwiLCBjYXA6IFwiO1wiIH0sXG4gICAgeyBjb2RlOiBcIlF1b3RlXCIsIGNhcDogXCInXCIgfSxcbl07XG5cbmNvbnN0IFBMQVlfTEFZRVJfS0VZUzogeyBjb2RlOiBzdHJpbmc7IGNhcDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGNvZGU6IFwiS2V5WlwiLCBjYXA6IFwiWlwiIH0sXG4gICAgeyBjb2RlOiBcIktleVhcIiwgY2FwOiBcIlhcIiB9LFxuICAgIHsgY29kZTogXCJLZXlDXCIsIGNhcDogXCJDXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5VlwiLCBjYXA6IFwiVlwiIH0sXG4gICAgeyBjb2RlOiBcIktleUJcIiwgY2FwOiBcIkJcIiB9LFxuICAgIHsgY29kZTogXCJLZXlOXCIsIGNhcDogXCJOXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5TVwiLCBjYXA6IFwiTVwiIH0sXG4gICAgeyBjb2RlOiBcIkNvbW1hXCIsIGNhcDogXCIsXCIgfSxcbiAgICB7IGNvZGU6IFwiUGVyaW9kXCIsIGNhcDogXCIuXCIgfSxcbiAgICB7IGNvZGU6IFwiU2xhc2hcIiwgY2FwOiBcIi9cIiB9LFxuXTtcblxuLyoqIEJhY2txdW90ZSArIGRpZ2l0IHJvdywgaW5kZXgtYWxpZ25lZCB3aXRoIFdPUkxEX1BSRVNFVFMuICovXG5jb25zdCBQTEFZX1BSRVNFVF9DT0RFUyA9IFtcbiAgICBcIkJhY2txdW90ZVwiLFxuICAgIFwiRGlnaXQxXCIsXG4gICAgXCJEaWdpdDJcIixcbiAgICBcIkRpZ2l0M1wiLFxuICAgIFwiRGlnaXQ0XCIsXG4gICAgXCJEaWdpdDVcIixcbiAgICBcIkRpZ2l0NlwiLFxuICAgIFwiRGlnaXQ3XCIsXG4gICAgXCJEaWdpdDhcIixcbiAgICBcIkRpZ2l0OVwiLFxuICAgIFwiRGlnaXQwXCIsXG5dO1xuXG5mdW5jdGlvbiBoc2xUb0hleChodWVEZWc6IG51bWJlciwgc2F0dXJhdGlvbjogbnVtYmVyLCBsaWdodG5lc3M6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgYSA9IHNhdHVyYXRpb24gKiBNYXRoLm1pbihsaWdodG5lc3MsIDEgLSBsaWdodG5lc3MpO1xuICAgIGNvbnN0IGNoYW5uZWwgPSAobjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGsgPSAobiArIGh1ZURlZyAvIDMwKSAlIDEyO1xuICAgICAgICBjb25zdCBjID0gbGlnaHRuZXNzIC0gYSAqIE1hdGgubWF4KC0xLCBNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpKTtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYyAqIDI1NSlcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gYCMke2NoYW5uZWwoMCl9JHtjaGFubmVsKDgpfSR7Y2hhbm5lbCg0KX1gO1xufVxuXG50eXBlIEltYWdlSW5mbyA9IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHRodW1iOiBzdHJpbmc7XG4gICAgbWlzc2luZzogYm9vbGVhbjtcbiAgICBraW5kOiBNZWRpYUtpbmQ7XG59O1xuXG50eXBlIE1lZGlhUnVudGltZSA9IHtcbiAgICBraW5kOiBNZWRpYUtpbmQ7XG4gICAgb2JqZWN0VXJsPzogc3RyaW5nO1xuICAgIHZpZGVvPzogSFRNTFZpZGVvRWxlbWVudDtcbiAgICBhdWRpbz86IEhUTUxBdWRpb0VsZW1lbnQ7XG4gICAgY2FudmFzPzogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgYW5hbHlzZXI/OiBBbmFseXNlck5vZGU7XG4gICAgc291cmNlTm9kZT86IE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZTtcbiAgICBzcGVjdHJ1bT86IFVpbnQ4QXJyYXk7XG59O1xuXG5mdW5jdGlvbiBlbXB0eVNjZW5lKCk6IFNjZW5lIHtcbiAgICByZXR1cm4geyBuYW1lOiBcIlVudGl0bGVkXCIsIGxheWVyczogW10sIGdsb2JhbDogeyAuLi5ERUZBVUxUX0dMT0JBTF9GWCB9IH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzbWFsbCBjb250cm9scyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZ1bmN0aW9uIFNsaWRlcihwcm9wczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIGRlZj86IG51bWJlcjtcbiAgICBmb3JtYXQ/OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCBtaW4gPSBwcm9wcy5taW4gPz8gMDtcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXggPz8gMTtcbiAgICBjb25zdCBwY3QgPSBjbGFtcCgoKHByb3BzLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCwgMCwgMTAwKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcHgtMyBweS1bNXB4XSBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICBvbkRibENsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmRlZiAhPT0gdW5kZWZpbmVkICYmIHByb3BzLm9uQ2hhbmdlKHByb3BzLmRlZilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpdGxlPVwiRG91YmxlLWNsaWNrIHRvIHJlc2V0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTAuNSBmbGV4IGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFidWxhci1udW1zIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5mb3JtYXQocHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhZDMocHJvcHMudmFsdWUsIG1pbiwgbWF4KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJrbm9iLXJhbmdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcIi0tZmlsbFwiOiBgJHtwY3R9JWAgfX1cbiAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICBzdGVwPXswLjAwMX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZWN0aW9uKHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY2NlbnQ/OiBib29sZWFuO1xuICAgIGFjdGlvbnM/OiBDb21wb25lbnRDaGlsZHJlbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBwYi0yXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBoLTggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YHRleHQtWzlweF0gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dICR7cHJvcHMuYWNjZW50ID8gXCJ0ZXh0LVt2YXIoLS1hY2lkKV1cIiA6IFwidGV4dC1bdmFyKC0tbXV0ZSldXCJ9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoLXB4IGZsZXgtMSBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYWN0aW9uc31cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gU2VnUm93KHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvcHRpb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS1bNXB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BoLTYgZmxleC0xIGJvcmRlciBib3JkZXItci0wIGJvcmRlci1bdmFyKC0tbGluZSldIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbGFzdDpib3JkZXItciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQocHJvcHMudmFsdWUpID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctW3ZhcigtLWFjaWQpXSB0ZXh0LVt2YXIoLS12b2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFRvcEJ1dHRvbihwcm9wczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBkYW5nZXI/OiBib29sZWFuO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcbiAgICBsYWJlbD86IHN0cmluZztcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICBjbGFzcz17YGZsZXggaC1bMjZweF0gaXRlbXMtY2VudGVyIGdhcC0xLjUgYm9yZGVyIHB4LTIgdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6b3BhY2l0eS0zMCAke1xuICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLVt2YXIoLS1hY2lkKV0gYmctW3ZhcigtLWFjaWQpXS8xNSB0ZXh0LVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICA6IHByb3BzLmRhbmdlclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItWyNjNDViNmFdIGJnLVsjYzQ1YjZhXS8xMCB0ZXh0LVsjYjg2YTc0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAge3Byb3BzLmxhYmVsID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuIGxnOmlubGluZVwiPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscCBtb2RhbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbnR5cGUgSGVscEtleUdyb3VwID0gXCJwcmVzZXRcIiB8IFwiZnhcIiB8IFwibm90ZVwiIHwgXCJsYXllclwiIHwgXCJzeXNcIiB8IFwibm9uZVwiO1xuXG50eXBlIEhlbHBLZXlEZWYgPSB7XG4gICAgY2FwOiBzdHJpbmc7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgdT86IG51bWJlcjtcbiAgICBncm91cDogSGVscEtleUdyb3VwO1xuICAgIGh1ZT86IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIEhlbHBLZXlDYXAocHJvcHM6IEhlbHBLZXlEZWYgJiB7IGtleT86IHN0cmluZyB8IG51bWJlciB9KSB7XG4gICAgbGV0IGJvcmRlciA9IFwidmFyKC0tbGluZSlcIjtcbiAgICBsZXQgY2FwQ29sb3IgPSBcInZhcigtLXBhcGVyKVwiO1xuICAgIGxldCBsYWJlbENvbG9yID0gXCJ2YXIoLS1tdXRlKVwiO1xuICAgIGxldCBiYWNrZ3JvdW5kID0gXCJ2YXIoLS1wYW5lbClcIjtcbiAgICBpZiAocHJvcHMuZ3JvdXAgPT09IFwicHJlc2V0XCIpIHtcbiAgICAgICAgYm9yZGVyID0gXCJyZ2JhKDIzMiwyMzAsMjI0LDAuNClcIjtcbiAgICAgICAgbGFiZWxDb2xvciA9IFwidmFyKC0tYWNpZClcIjtcbiAgICAgICAgYmFja2dyb3VuZCA9IFwicmdiYSgyMzIsMjMwLDIyNCwwLjA1KVwiO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuZ3JvdXAgPT09IFwiZnhcIikge1xuICAgICAgICBib3JkZXIgPSBcInJnYmEoMTY4LDEyMCwxMjgsMC41NSlcIjtcbiAgICAgICAgbGFiZWxDb2xvciA9IFwiI2NmOWFhNlwiO1xuICAgICAgICBiYWNrZ3JvdW5kID0gXCJyZ2JhKDE2OCwxMjAsMTI4LDAuMDkpXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJub3RlXCIpIHtcbiAgICAgICAgY29uc3QgaHVlID0gcHJvcHMuaHVlID8/IDA7XG4gICAgICAgIGJvcmRlciA9IGBoc2xhKCR7aHVlfSwgNzAlLCA2MCUsIDAuNzUpYDtcbiAgICAgICAgbGFiZWxDb2xvciA9IGBoc2woJHtodWV9LCA3NSUsIDY4JSlgO1xuICAgICAgICBjYXBDb2xvciA9IGBoc2woJHtodWV9LCA2MCUsIDg0JSlgO1xuICAgICAgICBiYWNrZ3JvdW5kID0gYGhzbGEoJHtodWV9LCA3MCUsIDUwJSwgMC4xMylgO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuZ3JvdXAgPT09IFwibGF5ZXJcIikge1xuICAgICAgICBib3JkZXIgPSBcInJnYmEoMTI1LDE2NSwxMzEsMC41NSlcIjtcbiAgICAgICAgbGFiZWxDb2xvciA9IFwiIzljYzRhMlwiO1xuICAgICAgICBiYWNrZ3JvdW5kID0gXCJyZ2JhKDEyNSwxNjUsMTMxLDAuMDkpXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgY2FwQ29sb3IgPSBcInZhcigtLXRyYWNrKVwiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZsZXggaC1bNDZweF0gZmxleC1zaHJpbmstMCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEgYm9yZGVyIHB4LTAuNSB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsocHJvcHMudSA/PyAxKSAqIDQ2fXB4YCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzExcHhdIGxlYWRpbmctbm9uZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGNhcENvbG9yIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNhcH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtwcm9wcy5sYWJlbCA/IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtWzYuNXB4XSB1cHBlcmNhc2UgbGVhZGluZy1ub25lIHRyYWNraW5nLVswLjA4ZW1dXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGxhYmVsQ29sb3IgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gSGVscExpc3QocHJvcHM6IHsgdGl0bGU6IHN0cmluZzsgaXRlbXM6IFtzdHJpbmcsIHN0cmluZ11bXSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTIgdGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTZlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoW3Rlcm0sIGJvZHldKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0ZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bOS41cHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtW3ZhcigtLXBhcGVyKV1cIj57dGVybX08L3NwYW4+IFx1MjAxNCB7Ym9keX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEhlbHBNb2RhbChwcm9wczogeyBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pIHtcbiAgICBjb25zdCBub3RlSHVlID0gKGluZGV4OiBudW1iZXIpID0+XG4gICAgICAgIE1hdGgucm91bmQoKGluZGV4IC8gUExBWV9QSUFOTy5sZW5ndGgpICogMzYwKTtcbiAgICBjb25zdCByb3dzOiB7IG9mZnNldDogbnVtYmVyOyBrZXlzOiBIZWxwS2V5RGVmW10gfVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiYFwiLCBsYWJlbDogXCIwMFwiLCBncm91cDogXCJwcmVzZXRcIiB9LFxuICAgICAgICAgICAgICAgIC4uLldPUkxEX1BSRVNFVFMuc2xpY2UoMSkubWFwKChwcmVzZXQsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBjYXA6IFN0cmluZygoaW5kZXggKyAxKSAlIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHByZXNldC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogXCJwcmVzZXRcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiLVwiLCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCI9XCIsIGdyb3VwOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIlx1MjMyQlwiLCB1OiAxLjYsIGxhYmVsOiBcIndhc2hcIiwgZ3JvdXA6IFwic3lzXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRTVcIiwgdTogMS40LCBsYWJlbDogXCJoaWRlIHVpXCIsIGdyb3VwOiBcInN5c1wiIH0sXG4gICAgICAgICAgICAgICAgLi4uUExBWV9GWF9LRVlTLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBjYXA6IGtleS5jYXAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBrZXkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcImZ4XCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIltcIiwgbGFiZWw6IFwic2xvd2VyXCIsIGdyb3VwOiBcImZ4XCIgfSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJdXCIsIGxhYmVsOiBcImZhc3RlclwiLCBncm91cDogXCJmeFwiIH0sXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXFxcXFwiLCB1OiAxLjIsIGxhYmVsOiBcInNvbGFyXCIsIGdyb3VwOiBcImZ4XCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMTYsXG4gICAgICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMUVBXCIsIHU6IDEuNywgZ3JvdXA6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgLi4uUExBWV9QSUFOTy5tYXAoKGtleSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDoga2V5LmNhcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXHUyNjZBXCIsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcIm5vdGVcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgICAgaHVlOiBub3RlSHVlKGluZGV4KSxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyM0NFXCIsIHU6IDIuMCwgZ3JvdXA6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvZmZzZXQ6IDMwLFxuICAgICAgICAgICAga2V5czogW1xuICAgICAgICAgICAgICAgIHsgY2FwOiBcIlx1MjFFN1wiLCB1OiAyLjIsIGxhYmVsOiBcImludmVydFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgICAgIC4uLlBMQVlfTEFZRVJfS0VZUy5tYXAoKGtleSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDoga2V5LmNhcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBseXIgJHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwibGF5ZXJcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMUU3IC9cIiwgdTogMS41LCBsYWJlbDogXCJtYW51YWxcIiwgZ3JvdXA6IFwic3lzXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMTcwLFxuICAgICAgICAgICAga2V5czogW3sgY2FwOiBcInNwYWNlXCIsIHU6IDcsIGxhYmVsOiBcImZyZWV6ZSB0aW1lXCIsIGdyb3VwOiBcInN5c1wiIH1dLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotWzcwXSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1ibGFjay83NSBwLTRcIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wIG1heC1oLVs4OHZoXSB3LWZ1bGwgbWF4LXctWzg0MHB4XSBvdmVyZmxvdy15LWF1dG8gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bMTFweF0gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE4ZW1dIHRleHQtW3ZhcigtLWFjaWQpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheSBtb2RlIFx1MDBCNyBpbnN0cnVtZW50IG1hbnVhbFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bdmFyKC0tbXV0ZSldIHNtOmlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlcnkgbW92ZSBpcyBwZXJtYW5lbnQgXHUyMDE0IGFuZCB1bmRvYWJsZVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtbC0yIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0yIHB5LTAuNSBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93LXgtYXV0byBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWluLXctWzc0MHB4XSBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3MubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggZ2FwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBgJHtyb3cub2Zmc2V0fXB4YCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5rZXlzLm1hcCgoa2V5LCBrZXlJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBLZXlDYXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcD17a2V5LmNhcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17a2V5LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHU9e2tleS51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwPXtrZXkuZ3JvdXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHVlPXtrZXkuaHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ2FwLTUgYm9yZGVyLXQgYm9yZGVyLVt2YXIoLS1saW5lKV0gcC00IHNtOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxwTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNb3VzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFtcCB0aGUgY3Vyc29yIGZpZWxkICh2b3J0ZXggLyBncmF2aXR5IC8gcHJpc20gLyBtZWx0KSBpbnRvIHRoZSB3b3JsZCBmb3IgZ29vZCBcdTIwMTQgdGhlIGZhcnRoZXIgZnJvbSBjZW50ZXIsIHRoZSBoYXJkZXIgdGhlIGhpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcCBhIGxheWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlIHN0YW1wIGxhbmRzIG9uIHRoYXQgbGF5ZXIgaW5zdGVhZCBvZiB0aGUgd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInNoaWZ0LXRhcFwiLCBcImNhcnZlIFx1MjAxNCBzdWJ0cmFjdHMgaW5zdGVhZCBvZiBhZGRzXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImRvdWJsZS10YXBcIiwgXCJzdGVwIHRoZSBrYWxlaWRvc2NvcGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRyYWcgKyByZWxlYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhyb3cgdGhlIGVjaG86IGZlZWRiYWNrIHRyYWlscyBpbmhlcml0IHRoZSBkaXJlY3Rpb24gb2YgeW91ciB0aHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWNsaWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic29vdGhlIFx1MjAxNCBjYWxtcyB0aGUgd29ybGQgKG9yIGp1c3QgdGhlIGxheWVyIHVuZGVyIHRoZSBjdXJzb3IpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ3aGVlbFwiLCBcImh1ZSBvcmJpdCBcdTAwQjcgc2hpZnQrd2hlZWwgPSBzYXR1cmF0aW9uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIktleWJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wibnVtYmVyIHJvd1wiLCBcIndvcmxkIHByZXNldHMgMDBcdTIwMTMxMFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXdlcnR5IHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1bXAgYW4gZWZmZWN0IHVwIFx1MDBCNyBzaGlmdCBkcmFpbnMgaXQgXHUwMEI3IGhvbGQgdG8gcmFtcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvbWUgcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlIGh1ZSBwaWFubyBcdTIwMTQgZWFjaCBrZXkgcmV0dW5lcyBldmVyeSBsYXllciB0byBhIGNvbG9yIG5vdGUgXHUwMEI3IHNoaWZ0IHBhaW50cyB0aGUgYmFja2dyb3VuZCBpbnN0ZWFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tIHJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmlrZSBsYXllcnMgMVx1MjAxMzEwOiByZS1yb2xscyB0aGF0IGxheWVyJ3MgRlggXHUwMEI3IHNoaWZ0IHJlc2V0cyBpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiWyBdXCIsIFwidGltZSBzbG93ZXIgLyBmYXN0ZXIgXHUwMEI3IFxcXFwgc29sYXJpemVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiYXJyb3dzXCIsIFwiXHUyMTkwIFx1MjE5MiBodWUgb3JiaXQgXHUwMEI3IFx1MjE5MSBcdTIxOTMgc2F0dXJhdGlvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJiYWNrc3BhY2VcIiwgXCJ3YXNoIHRoZSB3b3JsZCBiYWNrIHRvIGNsZWFuIHNpZ25hbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxwTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHbG9iYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJlc2NcIiwgXCJiYWNrIHRvIGFycmFuZ2UgbW9kZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJzcGFjZVwiLCBcImZyZWV6ZSB0aW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRhYlwiLCBcImhpZGUgdGhlIGludGVyZmFjZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcdTIzMThaIC8gXHUyMUU3XHUyMzE4WlwiLCBcInVuZG8gLyByZWRvIGFueSBtb3ZlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob29zZSB2b3J0ZXggLyBncmF2aXR5IC8gcHJpc20gLyBtZWx0IHVuZGVyIEN1cnNvciBzZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNldHRpbmdzVG9nZ2xlKHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBoaW50OiBzdHJpbmc7XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e3Byb3BzLmNoZWNrZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNoYW5nZSghcHJvcHMuY2hlY2tlZCl9XG4gICAgICAgICAgICBjbGFzcz1cImZsZXggdy1mdWxsIGl0ZW1zLXN0YXJ0IGdhcC0zIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXSBweC0zIHB5LTMgdGV4dC1sZWZ0IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBkaXNhYmxlZDpvcGFjaXR5LTQwXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW4tdy0wIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tb25vIHRleHQtWzExcHhdIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10LTEgYmxvY2sgZm9udC1tb25vIHRleHQtWzkuNXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5oaW50fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BtdC0wLjUgZmxleCBoLVsxOHB4XSB3LVszNHB4XSBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBib3JkZXIgcHgtMC41IHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItW3ZhcigtLWFjaWQpXSBiZy1bdmFyKC0tYWNpZCldLzIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tdm9pZCldXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgaC1bMTJweF0gdy1bMTJweF0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidHJhbnNsYXRlLXgtWzE0cHhdIGJnLVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc2xhdGUteC0wIGJnLVt2YXIoLS1tdXRlKV1cIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZXR0aW5nc01vZGFsKHByb3BzOiB7XG4gICAgc2V0dGluZ3M6IEFwcFNldHRpbmdzO1xuICAgIHJlY29yZGluZzogYm9vbGVhbjtcbiAgICBvbkNoYW5nZTogKHBhdGNoOiBQYXJ0aWFsPEFwcFNldHRpbmdzPikgPT4gdm9pZDtcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LVs3MF0gZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmxhY2svNzUgcC00XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvcCB3LWZ1bGwgbWF4LXctWzQyMHB4XSBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVsxMXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMThlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0yIHB5LTAuNSBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc2NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlLXktMyBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWNvcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWljIGF1ZGlvIGluIHJlY29yZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiTXV4IHRoZSBsaXZlIG1pY3JvcGhvbmUgaW50byByZWNvcmRlZCB2aWRlby4gVXNlcyB0aGUgc2FtZSBtaWMgdGhhdCBkcml2ZXMgYXVkaW8tcmVhY3QgXHUyMDE0IHR1cm4gdGhlIG1pYyBvbiBmaXJzdCwgb3IgcmVjb3JkaW5nIHdpbGwgcmVxdWVzdCBpdC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuc2V0dGluZ3MucmVjb3JkTWljQXVkaW99XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMucmVjb3JkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGVja2VkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKHsgcmVjb3JkTWljQXVkaW86IGNoZWNrZWQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gICAgY29uc3Qgc2NlbmVzUXVlcnkgPSB1c2VRdWVyeTx7IHJlYWR5OiBib29sZWFuOyBpdGVtczogU2NlbmVNZXRhW10gfT4oXG4gICAgICAgIFwic2NlbmVzXCIsXG4gICAgKTtcbiAgICBjb25zdCBzYXZlU2NlbmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uPFxuICAgICAgICBbc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXSxcbiAgICAgICAgeyBpZDogc3RyaW5nIH1cbiAgICA+KFwic2F2ZVNjZW5lXCIpO1xuICAgIGNvbnN0IGRlbGV0ZVNjZW5lTXV0YXRpb24gPSB1c2VNdXRhdGlvbjxbc3RyaW5nXSwgdm9pZD4oXCJkZWxldGVTY2VuZVwiKTtcbiAgICBjb25zdCBnZXRTY2VuZU11dGF0aW9uID0gdXNlTXV0YXRpb248XG4gICAgICAgIFtzdHJpbmddLFxuICAgICAgICB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZGF0YTogc3RyaW5nIH1cbiAgICA+KFwiZ2V0U2NlbmVcIik7XG5cbiAgICBjb25zdCBbc2NlbmUsIHNldFNjZW5lXSA9IHVzZVN0YXRlPFNjZW5lPihlbXB0eVNjZW5lKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbaW1hZ2VJbmZvLCBzZXRJbWFnZUluZm9dID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgSW1hZ2VJbmZvPj4oe30pO1xuICAgIGNvbnN0IFtzdGFnZU1vZGUsIHNldFN0YWdlTW9kZV0gPSB1c2VTdGF0ZTxcImFycmFuZ2VcIiB8IFwicGxheVwiPihcImFycmFuZ2VcIik7XG4gICAgY29uc3QgW3VpSGlkZGVuLCBzZXRVaUhpZGRlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Zyb3plbiwgc2V0RnJvemVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbWljQWN0aXZlLCBzZXRNaWNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtyZWNvcmRpbmcsIHNldFJlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY29yZGluZ1dpdGhNaWMsIHNldFJlY29yZGluZ1dpdGhNaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtleHBvcnRSZXMsIHNldEV4cG9ydFJlc10gPSB1c2VTdGF0ZTxFeHBvcnRSZXNvbHV0aW9uSWQ+KFwiMTA4MFwiKTtcbiAgICBjb25zdCBbZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ByZXNldHNPcGVuLCBzZXRQcmVzZXRzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NjZW5lc09wZW4sIHNldFNjZW5lc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtoZWxwT3Blbiwgc2V0SGVscE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZXR0aW5nc09wZW4sIHNldFNldHRpbmdzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZTxBcHBTZXR0aW5ncz4oKCkgPT4gbG9hZFNldHRpbmdzKCkpO1xuICAgIGNvbnN0IFtzZXJ2ZXJTY2VuZUlkLCBzZXRTZXJ2ZXJTY2VuZUlkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3RvYXN0LCBzZXRUb2FzdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZW5naW5lRXJyb3IsIHNldEVuZ2luZUVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3Qgc3RhZ2VSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBlbmdpbmVSZWYgPSB1c2VSZWY8RW5naW5lSGFuZGxlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc2NlbmVSZWYgPSB1c2VSZWYoc2NlbmUpO1xuICAgIGNvbnN0IGltYWdlSW5mb1JlZiA9IHVzZVJlZihpbWFnZUluZm8pO1xuICAgIGNvbnN0IHN0YWdlTW9kZVJlZiA9IHVzZVJlZihzdGFnZU1vZGUpO1xuICAgIGNvbnN0IGZyb3plblJlZiA9IHVzZVJlZihmcm96ZW4pO1xuICAgIGNvbnN0IHRpbWVSZWYgPSB1c2VSZWYoTWF0aC5yYW5kb20oKSAqIDkwKTtcbiAgICBjb25zdCBhdWRpb0xldmVsUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IGFuYWx5c2VyUmVmID0gdXNlUmVmPEFuYWx5c2VyTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dFJlZiA9IHVzZVJlZjxBdWRpb0NvbnRleHQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBtaWNTdHJlYW1SZWYgPSB1c2VSZWY8TWVkaWFTdHJlYW0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzcGVjdHJ1bVJlZiA9IHVzZVJlZihuZXcgVWludDhBcnJheSgxMjgpKTtcbiAgICBjb25zdCByZWNvcmRlclJlZiA9IHVzZVJlZjxNZWRpYVJlY29yZGVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgY2h1bmtzUmVmID0gdXNlUmVmPEJsb2JbXT4oW10pO1xuICAgIGNvbnN0IHRvYXN0VGltZXJSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgbGFzdFBvaW50ZXJSZWYgPSB1c2VSZWYoeyB4OiAwLjUsIHk6IDAuNSwgYXQ6IDAgfSk7XG4gICAgY29uc3QgcG9pbnRlclJlZiA9IHVzZVJlZjxQb2ludGVyU3RhdGU+KHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLjUsXG4gICAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgICAgdmVsb2NpdHlZOiAwLFxuICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBkcmFnUmVmID0gdXNlUmVmPHtcbiAgICAgICAgbGF5ZXJJZDogc3RyaW5nO1xuICAgICAgICBzdGFydFg6IG51bWJlcjtcbiAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgIGZ4WDogbnVtYmVyO1xuICAgICAgICBmeFk6IG51bWJlcjtcbiAgICB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc3RhZ2VTaXplUmVmID0gdXNlUmVmKHsgd2lkdGg6IDEsIGhlaWdodDogMSB9KTtcbiAgICBjb25zdCBxdWFsaXR5UmVmID0gdXNlUmVmKDEuNSk7XG4gICAgY29uc3QgZXhwb3J0UmVzUmVmID0gdXNlUmVmKGV4cG9ydFJlcyk7XG4gICAgY29uc3QgZXhwb3J0TG9ja1JlZiA9IHVzZVJlZjx7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsPihcbiAgICAgICAgbnVsbCxcbiAgICApO1xuICAgIGNvbnN0IGRyYWdSYWZSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgZHJhZ1BvaW50UmVmID0gdXNlUmVmKHsgeDogMCwgeTogMCB9KTtcbiAgICBjb25zdCBtZWRpYVJ1bnRpbWVzUmVmID0gdXNlUmVmKG5ldyBNYXA8c3RyaW5nLCBNZWRpYVJ1bnRpbWU+KCkpO1xuICAgIGNvbnN0IGhlbHBPcGVuUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBzZXR0aW5nc09wZW5SZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHNldHRpbmdzUmVmID0gdXNlUmVmKHNldHRpbmdzKTtcbiAgICBjb25zdCByZWNvcmRpbmdNaWNSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGtpY2tSZWYgPSB1c2VSZWY8S2lja1N0YXRlPih7XG4gICAgICAgIHpvb206IDAsXG4gICAgICAgIHN0cm9iZTogMCxcbiAgICAgICAgY2hyb21hOiAwLFxuICAgICAgICByaXBwbGU6IDAsXG4gICAgICAgIHN3aXJsOiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGhpc3RvcnlSZWYgPSB1c2VSZWY8eyBzdGFjazogc3RyaW5nW107IGluZGV4OiBudW1iZXIgfT4oe1xuICAgICAgICBzdGFjazogW10sXG4gICAgICAgIGluZGV4OiAtMSxcbiAgICB9KTtcbiAgICBjb25zdCBoaXN0b3J5U2tpcFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgcGxheUdlc3R1cmVSZWYgPSB1c2VSZWY8e1xuICAgICAgICBzdGFydFU6IG51bWJlcjtcbiAgICAgICAgc3RhcnRWOiBudW1iZXI7XG4gICAgICAgIGxhc3RVOiBudW1iZXI7XG4gICAgICAgIGxhc3RWOiBudW1iZXI7XG4gICAgICAgIHBhdGg6IG51bWJlcjtcbiAgICAgICAgYXQ6IG51bWJlcjtcbiAgICAgICAgc2hpZnQ6IGJvb2xlYW47XG4gICAgfSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGxhc3RUYXBBdFJlZiA9IHVzZVJlZigwKTtcblxuICAgIHNjZW5lUmVmLmN1cnJlbnQgPSBzY2VuZTtcbiAgICBpbWFnZUluZm9SZWYuY3VycmVudCA9IGltYWdlSW5mbztcbiAgICBzdGFnZU1vZGVSZWYuY3VycmVudCA9IHN0YWdlTW9kZTtcbiAgICBmcm96ZW5SZWYuY3VycmVudCA9IGZyb3plbjtcbiAgICBleHBvcnRSZXNSZWYuY3VycmVudCA9IGV4cG9ydFJlcztcbiAgICBoZWxwT3BlblJlZi5jdXJyZW50ID0gaGVscE9wZW47XG4gICAgc2V0dGluZ3NPcGVuUmVmLmN1cnJlbnQgPSBzZXR0aW5nc09wZW47XG4gICAgc2V0dGluZ3NSZWYuY3VycmVudCA9IHNldHRpbmdzO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPVxuICAgICAgICBzY2VuZS5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3RlZElkKSA/PyBudWxsO1xuICAgIGNvbnN0IHNjZW5lTGlzdCA9IHNjZW5lc1F1ZXJ5Py5pdGVtcyA/PyBbXTtcblxuICAgIGZ1bmN0aW9uIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0VG9hc3QobWVzc2FnZSk7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG9hc3RUaW1lclJlZi5jdXJyZW50KTtcbiAgICAgICAgdG9hc3RUaW1lclJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VG9hc3QoXCJcIiksIDI2MDApO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY2VuZSB1cGRhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVHbG9iYWwocGF0Y2g6IFBhcnRpYWw8R2xvYmFsRng+KSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgZ2xvYmFsOiB7IC4uLnByZXZpb3VzLmdsb2JhbCwgLi4ucGF0Y2ggfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxMYXllckZ4Pikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmxheWVyLCBmeDogeyAuLi5sYXllci5meCwgLi4ucGF0Y2ggfSB9XG4gICAgICAgICAgICAgICAgICAgIDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBmeDogTGF5ZXJGeCkge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWQgPyB7IC4uLmxheWVyLCBmeCB9IDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUxheWVyKGxheWVySWQ6IHN0cmluZywgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldmlvdXMubGF5ZXJzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBpbmRleCArIGRlbHRhO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBuZXh0IDwgMCB8fCBuZXh0ID49IHByZXZpb3VzLmxheWVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBbbGF5ZXJdID0gbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKG5leHQsIDAsIGxheWVyKTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHVwbGljYXRlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzLmxheWVycy5sZW5ndGggPj0gTUFYX0xBWUVSUykgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2aW91cy5sYXllcnMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gcHJldmlvdXMubGF5ZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvcHk6IFNjZW5lTGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgaW1hZ2VJZDogc291cmNlLmltYWdlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogYCR7c291cmNlLm5hbWV9IGNvcHlgLFxuICAgICAgICAgICAgICAgIG1lZGlhS2luZDogc291cmNlLm1lZGlhS2luZCxcbiAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zb3VyY2UuZngsXG4gICAgICAgICAgICAgICAgICAgIHg6IHNvdXJjZS5meC54ICsgMC4wNixcbiAgICAgICAgICAgICAgICAgICAgeTogc291cmNlLmZ4LnkgLSAwLjA2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgY29weSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNvcHkuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldmlvdXMsIGxheWVycyB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkID0gcHJldmlvdXMubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBwcmV2aW91cy5sYXllcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgIT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHJlbW92ZWQgJiZcbiAgICAgICAgICAgICAgICAhbGF5ZXJzLnNvbWUoKGxheWVyKSA9PiBsYXllci5pbWFnZUlkID09PSByZW1vdmVkLmltYWdlSWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgSW5kZXhlZERCIGJsb2IgaXMga2VwdCBzbyB1bmRvIGNhbiBicmluZyB0aGUgbGF5ZXIgYmFjay5cbiAgICAgICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKHJlbW92ZWQuaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LnJlbW92ZUltYWdlKHJlbW92ZWQuaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5leHRbcmVtb3ZlZC5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2aW91cywgbGF5ZXJzIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZWxlY3RlZElkKChjdXJyZW50KSA9PiAoY3VycmVudCA9PT0gbGF5ZXJJZCA/IG51bGwgOiBjdXJyZW50KSk7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1bmRvIC8gcmVkbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBhcHBseUhpc3RvcnlTbmFwc2hvdChzbmFwc2hvdDogc3RyaW5nKSB7XG4gICAgICAgIGhpc3RvcnlTa2lwUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IGRlY29kZVNjZW5lKHNuYXBzaG90KTtcbiAgICAgICAgc2V0U2NlbmUocmVzdG9yZWQpO1xuICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gcmVzdG9yZWQ7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoKGN1cnJlbnQpID0+XG4gICAgICAgICAgICByZXN0b3JlZC5sYXllcnMuc29tZSgobGF5ZXIpID0+IGxheWVyLmlkID09PSBjdXJyZW50KVxuICAgICAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgKTtcbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgdm9pZCBoeWRyYXRlU2NlbmVJbWFnZXMocmVzdG9yZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuZG9TY2VuZSgpIHtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGVuY29kZVNjZW5lKHNjZW5lUmVmLmN1cnJlbnQpO1xuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA+PSAwICYmIGhpc3Rvcnkuc3RhY2tbaGlzdG9yeS5pbmRleF0gIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEEgY2hhbmdlIGlzIHN0aWxsIGluc2lkZSB0aGUgZGVib3VuY2Ugd2luZG93IFx1MjAxNCBjb21taXQgaXQgZmlyc3RcbiAgICAgICAgICAgIC8vIHNvIHJlZG8gY2FuIGJyaW5nIGl0IGJhY2suXG4gICAgICAgICAgICBoaXN0b3J5LnN0YWNrID0gaGlzdG9yeS5zdGFjay5zbGljZSgwLCBoaXN0b3J5LmluZGV4ICsgMSk7XG4gICAgICAgICAgICBoaXN0b3J5LnN0YWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICBoaXN0b3J5LmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpc3RvcnkuaW5kZXggPD0gMCkge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiTm90aGluZyB0byB1bmRvXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpc3RvcnkuaW5kZXgtLTtcbiAgICAgICAgYXBwbHlIaXN0b3J5U25hcHNob3QoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSk7XG4gICAgICAgIHNob3dUb2FzdChcIlVuZG9cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkb1NjZW5lKCkge1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA+PSBoaXN0b3J5LnN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIk5vdGhpbmcgdG8gcmVkb1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXN0b3J5LmluZGV4Kys7XG4gICAgICAgIGFwcGx5SGlzdG9yeVNuYXBzaG90KGhpc3Rvcnkuc3RhY2tbaGlzdG9yeS5pbmRleF0pO1xuICAgICAgICBzaG93VG9hc3QoXCJSZWRvXCIpO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWRpYSBpbXBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBydW50aW1lID0gbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmdldChpbWFnZUlkKTtcbiAgICAgICAgaWYgKCFydW50aW1lKSByZXR1cm47XG4gICAgICAgIHJ1bnRpbWUudmlkZW8/LnBhdXNlKCk7XG4gICAgICAgIHJ1bnRpbWUuYXVkaW8/LnBhdXNlKCk7XG4gICAgICAgIGlmIChydW50aW1lLnZpZGVvKSB7XG4gICAgICAgICAgICBydW50aW1lLnZpZGVvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUudmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW50aW1lLmF1ZGlvKSB7XG4gICAgICAgICAgICBydW50aW1lLmF1ZGlvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUuYXVkaW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLnNvdXJjZU5vZGU/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRpc2Nvbm5lY3RlZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyPy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBkaXNjb25uZWN0ZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVudGltZS5vYmplY3RVcmwpIFVSTC5yZXZva2VPYmplY3RVUkwocnVudGltZS5vYmplY3RVcmwpO1xuICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuZGVsZXRlKGltYWdlSWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VBbGxNZWRpYVJ1bnRpbWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGltYWdlSWQgb2YgWy4uLm1lZGlhUnVudGltZXNSZWYuY3VycmVudC5rZXlzKCldKSB7XG4gICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlTWVkaWFBdWRpb0NvbnRleHQoKTogUHJvbWlzZTxBdWRpb0NvbnRleHQ+IHtcbiAgICAgICAgaWYgKCFhdWRpb0NvbnRleHRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LnN0YXRlID09PSBcInN1c3BlbmRlZFwiKSB7XG4gICAgICAgICAgICBhd2FpdCBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGVNZWRpYShcbiAgICAgICAgaW1hZ2VJZDogc3RyaW5nLFxuICAgICAgICBibG9iOiBCbG9iLFxuICAgICAgICBraW5kOiBNZWRpYUtpbmQsXG4gICAgICAgIF9maWxlTmFtZTogc3RyaW5nLFxuICAgICk6IFByb21pc2U8SW1hZ2VJbmZvPiB7XG4gICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZCk7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuXG4gICAgICAgIGlmIChraW5kID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBkZWNvZGVJbWFnZUJsb2IoYmxvYik7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGRlY29kZWQuY2FudmFzKTtcbiAgICAgICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwgeyBraW5kIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogZGVjb2RlZC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRlY29kZWQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRodW1iOiBkZWNvZGVkLnRodW1iLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtpbmQgPT09IFwiZGF0YVwiKSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgYmxvYi5zbGljZSgwLCAxMDI0ICogMTAyNCkuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIHBhaW50RGF0YUJ5dGVzKGNhbnZhcywgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGNhbnZhcyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCwgY2FudmFzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aHVtYjogY2FudmFzVGh1bWIoY2FudmFzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtpbmQgPT09IFwidmlkZW9cIikge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICAgICAgdmlkZW8ucGxheXNJbmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gXCJhdXRvXCI7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJwbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZShcIndlYmtpdC1wbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IG9iamVjdFVybDtcblxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ291bGQgbm90IGRlY29kZSB0aGF0IHZpZGVvXCIpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgdmlkZW8udmlkZW9XaWR0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIHZpZGVvKTtcbiAgICAgICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwgeyBraW5kLCBvYmplY3RVcmwsIHZpZGVvIH0pO1xuICAgICAgICAgICAgdm9pZCB2aWRlby5wbGF5KCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKHZpZGVvLCB3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF1ZGlvXG4gICAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICBhdWRpby5sb29wID0gdHJ1ZTtcbiAgICAgICAgYXVkaW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuICAgICAgICBhdWRpby5zcmMgPSBvYmplY3RVcmw7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzKTtcbiAgICAgICAgcGFpbnRBdWRpb1Zpc3VhbChjYW52YXMsIG5ldyBVaW50OEFycmF5KDEyOCksIDAuMjUsIDApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBhd2FpdCBlbnN1cmVNZWRpYUF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgICAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC43MjtcbiAgICAgICAgc291cmNlTm9kZS5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGNhbnZhcyk7XG4gICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG9iamVjdFVybCxcbiAgICAgICAgICAgIGF1ZGlvLFxuICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgYW5hbHlzZXIsXG4gICAgICAgICAgICBzb3VyY2VOb2RlLFxuICAgICAgICAgICAgc3BlY3RydW06IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZvaWQgYXVkaW8ucGxheSgpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICB0aHVtYjogY2FudmFzVGh1bWIoY2FudmFzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLFxuICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGltcG9ydEZpbGVzKGZpbGVzOiBJdGVyYWJsZTxGaWxlPikge1xuICAgICAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShmaWxlcyk7XG4gICAgICAgIGlmICghbGlzdC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgbGV0IGFkZGVkID0gMDtcbiAgICAgICAgbGV0IGltcG9ydGVkQXVkaW8gPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChzY2VuZVJlZi5jdXJyZW50LmxheWVycy5sZW5ndGggKyBhZGRlZCA+PSBNQVhfTEFZRVJTKSB7XG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KGBMYXllciBsaW1pdCBpcyAke01BWF9MQVlFUlN9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2xhc3NpZnlGaWxlKGZpbGUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUlkID0gbmV3SWQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgYXdhaXQgcHV0SW1hZ2VCbG9iKGltYWdlSWQsIGZpbGUpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGFjdGl2YXRlTWVkaWEoaW1hZ2VJZCwgZmlsZSwga2luZCwgZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoeyAuLi5wcmV2aW91cywgW2ltYWdlSWRdOiBpbmZvIH0pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllcjogU2NlbmVMYXllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShkZWZhdWx0TGF5ZXJOYW1lKGtpbmQsIGZpbGUubmFtZSksIG1lZGlhS2luZExhYmVsKGtpbmQpKSxcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFLaW5kOiBraW5kLFxuICAgICAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uREVGQVVMVF9MQVlFUl9GWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGFkZGVkICogMC4wNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGFkZGVkICogLTAuMDcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICBsYXllcnM6IFsuLi5wcmV2aW91cy5sYXllcnMsIGxheWVyXSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiYXVkaW9cIikgaW1wb3J0ZWRBdWRpbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWRkZWQrKztcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdChgQ291bGQgbm90IGltcG9ydCAke21lZGlhS2luZExhYmVsKGtpbmQpLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcG9ydGVkQXVkaW8gJiYgc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMjUpIHtcbiAgICAgICAgICAgIHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IDAuNTUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoeWRyYXRlU2NlbmVJbWFnZXModGFyZ2V0OiBTY2VuZSkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHJldHVybjtcbiAgICAgICAgY29uc3Qga2luZEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgTWVkaWFLaW5kPigpO1xuICAgICAgICBjb25zdCBuYW1lQnlJZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGFyZ2V0LmxheWVycykge1xuICAgICAgICAgICAgaWYgKCFsYXllci5pbWFnZUlkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgha2luZEJ5SWQuaGFzKGxheWVyLmltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAga2luZEJ5SWQuc2V0KGxheWVyLmltYWdlSWQsIGxheWVyLm1lZGlhS2luZCA/PyBcImltYWdlXCIpO1xuICAgICAgICAgICAgICAgIG5hbWVCeUlkLnNldChsYXllci5pbWFnZUlkLCBsYXllci5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2VJZCBvZiBbLi4ubWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmtleXMoKV0pIHtcbiAgICAgICAgICAgIGlmICgha2luZEJ5SWQuaGFzKGltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUucmVtb3ZlSW1hZ2UoaW1hZ2VJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtpbWFnZUlkLCBraW5kXSBvZiBraW5kQnlJZCkge1xuICAgICAgICAgICAgaWYgKG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5oYXMoaW1hZ2VJZCkgJiYgZW5naW5lLmhhc0ltYWdlKGltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBnZXRJbWFnZUJsb2IoaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9iKSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkOiBNZWRpYUtpbmQgPVxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcImltYWdlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJ2aWRlb1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiYXVkaW9cIiB8fFxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcImRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBraW5kXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzaWZ5QmxvYihibG9iLCBuYW1lQnlJZC5nZXQoaW1hZ2VJZCkgPz8gXCJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGFjdGl2YXRlTWVkaWEoXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIGJsb2IsXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lQnlJZC5nZXQoaW1hZ2VJZCkgPz8gXCJtZWRpYVwiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChwcmV2aW91cykgPT4gKHsgLi4ucHJldmlvdXMsIFtpbWFnZUlkXTogaW5mbyB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlSWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0xpdmVNZWRpYVRleHR1cmVzKGVuZ2luZTogRW5naW5lSGFuZGxlLCB0aW1lOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWVkaWFMZXZlbCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2ltYWdlSWQsIHJ1bnRpbWVdIG9mIG1lZGlhUnVudGltZXNSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKHJ1bnRpbWUua2luZCA9PT0gXCJ2aWRlb1wiICYmIHJ1bnRpbWUudmlkZW8pIHtcbiAgICAgICAgICAgICAgICBpZiAocnVudGltZS52aWRlby5yZWFkeVN0YXRlID49IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9DVVJSRU5UX0RBVEEpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldEltYWdlKGltYWdlSWQsIHJ1bnRpbWUudmlkZW8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW50aW1lLmtpbmQgPT09IFwiYXVkaW9cIiAmJiBydW50aW1lLmF1ZGlvICYmIHJ1bnRpbWUuY2FudmFzICYmIHJ1bnRpbWUuYW5hbHlzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjdHJ1bSA9XG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWUuc3BlY3RydW0gJiZcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bS5sZW5ndGggPT09IHJ1bnRpbWUuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcnVudGltZS5zcGVjdHJ1bVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgVWludDhBcnJheShydW50aW1lLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICAgICAgICBydW50aW1lLnNwZWN0cnVtID0gc3BlY3RydW07XG4gICAgICAgICAgICAgICAgcnVudGltZS5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShzcGVjdHJ1bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBsZXZlbEZyb21TcGVjdHJ1bShzcGVjdHJ1bSk7XG4gICAgICAgICAgICAgICAgbWVkaWFMZXZlbCA9IE1hdGgubWF4KG1lZGlhTGV2ZWwsIGxldmVsKTtcbiAgICAgICAgICAgICAgICBwYWludEF1ZGlvVmlzdWFsKHJ1bnRpbWUuY2FudmFzLCBzcGVjdHJ1bSwgbGV2ZWwsIHRpbWUpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRJbWFnZShpbWFnZUlkLCBydW50aW1lLmNhbnZhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lZGlhTGV2ZWw7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlbmdpbmUgbG9vcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIGJ1aWxkRnJhbWUoKTogRnJhbWVTdGF0ZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzY2VuZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBpbmZvID0gaW1hZ2VJbmZvUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aW1lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9MZXZlbFJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuXG4gICAgICAgIGNvbnN0IGxheWVyczogTGF5ZXJSZW5kZXJTdGF0ZVtdID0gY3VycmVudC5sYXllcnNcbiAgICAgICAgICAgIC5maWx0ZXIoKGxheWVyKSA9PiBsYXllci5meC52aXNpYmxlKVxuICAgICAgICAgICAgLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmeCA9IGxheWVyLmZ4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlZWQgPSBsYXllclNlZWQobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBpbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgICAgICAgICAgbWV0YSAmJiBtZXRhLndpZHRoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1bHNlID1cbiAgICAgICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgICAgIGZ4LnB1bHNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLjE2ICogTWF0aC5zaW4odGltZSAqIDIuMiArIHNlZWQgKiAyMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvICogY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCAqIDAuNSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBmeC5zY2FsZSAqIHB1bHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaWZ0WCA9XG4gICAgICAgICAgICAgICAgICAgIE1hdGguc2luKHRpbWUgKiAwLjU3ICsgc2VlZCAqIDkuMikgKiBmeC5kcmlmdCAqIDAuMztcbiAgICAgICAgICAgICAgICBjb25zdCBkcmlmdFkgPVxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNvcyh0aW1lICogMC40MyArIHNlZWQgKiA1LjcpICogZnguZHJpZnQgKiAwLjM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUlkOiBsYXllci5pbWFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwb3M6IFtmeC54ICsgZHJpZnRYLCBmeC55ICsgZHJpZnRZXSxcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgxZS00LCAoZml0SGVpZ2h0ICogaW1hZ2VBc3BlY3QgKiBzY2FsZSkgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDFlLTQsIChmaXRIZWlnaHQgKiBzY2FsZSkgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcm90OiAoZngucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCArIGZ4LnNwaW4gKiB0aW1lICogMS41LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBmeC5vcGFjaXR5LFxuICAgICAgICAgICAgICAgICAgICBibGVuZDogYmxlbmRJbmRleChmeC5ibGVuZCksXG4gICAgICAgICAgICAgICAgICAgIHRpbGU6IE1hdGgucm91bmQoZngudGlsZSksXG4gICAgICAgICAgICAgICAgICAgIHdhcnA6IGZ4LndhcnAsXG4gICAgICAgICAgICAgICAgICAgIHN3aXJsOiBmeC5zd2lybCxcbiAgICAgICAgICAgICAgICAgICAgcmlwcGxlOiBmeC5yaXBwbGUsXG4gICAgICAgICAgICAgICAgICAgIGthbGVpZG86IGZ4LmthbGVpZG8sXG4gICAgICAgICAgICAgICAgICAgIHBpeGVsYXRlOiBmeC5waXhlbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGZ4LmJ1bGdlLFxuICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IGZ4Lm1pcnJvcixcbiAgICAgICAgICAgICAgICAgICAgaHVlOiBmeC5odWUsXG4gICAgICAgICAgICAgICAgICAgIHNhdHVyYXRpb246IGZ4LnNhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OiBmeC5jb250cmFzdCxcbiAgICAgICAgICAgICAgICAgICAgYnJpZ2h0bmVzczogZnguYnJpZ2h0bmVzcyxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0OiBmeC5pbnZlcnQsXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcml6ZTogZngucG9zdGVyaXplLFxuICAgICAgICAgICAgICAgICAgICBjaHJvbWE6IGZ4LmNocm9tYSxcbiAgICAgICAgICAgICAgICAgICAgZWRnZXM6IGZ4LmVkZ2VzLFxuICAgICAgICAgICAgICAgICAgICB0aW50OiBoZXhUb1JnYihmeC50aW50Q29sb3IpLFxuICAgICAgICAgICAgICAgICAgICB0aW50QW1vdW50OiBmeC50aW50QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBzaGltbWVyOiBmeC5zaGltbWVyLFxuICAgICAgICAgICAgICAgICAgICBzZWVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBnID0gY3VycmVudC5nbG9iYWw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgYXVkaW8sXG4gICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICBiZ01vZGU6IGcuYmdNb2RlLFxuICAgICAgICAgICAgICAgIGJnQTogaGV4VG9SZ2IoZy5iZ0EpLFxuICAgICAgICAgICAgICAgIGJnQjogaGV4VG9SZ2IoZy5iZ0IpLFxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiBnLmZlZWRiYWNrLFxuICAgICAgICAgICAgICAgIHRyYWlsczogZy50cmFpbHMsXG4gICAgICAgICAgICAgICAgZmJab29tOiBnLmZiWm9vbSxcbiAgICAgICAgICAgICAgICBmYlJvdGF0ZTogZy5mYlJvdGF0ZSxcbiAgICAgICAgICAgICAgICBmYkh1ZTogZy5mYkh1ZSxcbiAgICAgICAgICAgICAgICB3YXJwOiBnLndhcnAsXG4gICAgICAgICAgICAgICAgc3dpcmw6IGNsYW1wKGcuc3dpcmwgKyBraWNrLnN3aXJsLCAwLCAxKSxcbiAgICAgICAgICAgICAgICByaXBwbGU6IGNsYW1wKGcucmlwcGxlICsga2ljay5yaXBwbGUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIHpvb206IGNsYW1wKGcuem9vbSArIGtpY2suem9vbSwgMCwgMSksXG4gICAgICAgICAgICAgICAga2FsZWlkbzogZy5rYWxlaWRvLFxuICAgICAgICAgICAgICAgIG1pcnJvcjogZy5taXJyb3IsXG4gICAgICAgICAgICAgICAgY2hyb21hOiBjbGFtcChnLmNocm9tYSArIGtpY2suY2hyb21hLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBodWVPcmJpdDogZy5odWVPcmJpdCxcbiAgICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBnLnNhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY29udHJhc3Q6IGcuY29udHJhc3QsXG4gICAgICAgICAgICAgICAgc29sYXJpemU6IGcuc29sYXJpemUsXG4gICAgICAgICAgICAgICAgZ3JhaW46IGcuZ3JhaW4sXG4gICAgICAgICAgICAgICAgc2NhbmxpbmVzOiBnLnNjYW5saW5lcyxcbiAgICAgICAgICAgICAgICB2aWduZXR0ZTogZy52aWduZXR0ZSxcbiAgICAgICAgICAgICAgICBzdHJvYmU6IGNsYW1wKGcuc3Ryb2JlICsga2ljay5zdHJvYmUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGF1ZGlvUmVhY3Q6IGcuYXVkaW9SZWFjdCxcbiAgICAgICAgICAgICAgICBwb2ludGVyRm9yY2U6IGcucG9pbnRlckZvcmNlLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJTaXplOiBnLnBvaW50ZXJTaXplLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJNb2RlOiBnLnBvaW50ZXJNb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhc3RhZ2UpIHJldHVybjtcblxuICAgICAgICBsZXQgZW5naW5lOiBFbmdpbmVIYW5kbGU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbmdpbmUgPSBjcmVhdGVFbmdpbmUoY2FudmFzKTtcbiAgICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgICAgIHNldEVuZ2luZUVycm9yKFxuICAgICAgICAgICAgICAgIGNhdXNlIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgPyBjYXVzZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIDogXCJXZWJHTCBmYWlsZWQgdG8gc3RhcnRcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQgPSBlbmdpbmU7XG5cbiAgICAgICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQgPSB7IHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0IH07XG4gICAgICAgICAgICBjb25zdCBsb2NrID0gZXhwb3J0TG9ja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUucmVzaXplKGxvY2sud2lkdGgsIGxvY2suaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcCgxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc2l6ZShyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihyZXNpemUpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHN0YWdlKTtcblxuICAgICAgICBsZXQgcmFmID0gMDtcbiAgICAgICAgbGV0IGxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgbGV0IHNsb3dTdHJlYWsgPSAwO1xuICAgICAgICBsZXQgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgIGNvbnN0IHRpY2sgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGR0ID0gTWF0aC5taW4oMC4xLCAobm93IC0gbGFzdCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxhc3QgPSBub3c7XG5cbiAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gYW5hbHlzZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGFuYWx5c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwZWN0cnVtUmVmLmN1cnJlbnQubGVuZ3RoICE9PSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzcGVjdHJ1bVJlZi5jdXJyZW50ID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoc3BlY3RydW1SZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmlucyA9IHNwZWN0cnVtUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGJhc3MgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IGJpbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgMTApIGJhc3MgKz0gYmluc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICgoYmFzcyAvIDEwKSAqIDIgKyB0b3RhbCAvIGJpbnMubGVuZ3RoKSAvIDMgLyAxNDgsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmcm96ZW5SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRpbWVSZWYuY3VycmVudCArPSBkdCAqIHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsLnNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtZWRpYUxldmVsID0gc3luY0xpdmVNZWRpYVRleHR1cmVzKGVuZ2luZSwgdGltZVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHRhcmdldCA9IE1hdGgubWF4KHRhcmdldCwgbWVkaWFMZXZlbCk7XG4gICAgICAgICAgICBhdWRpb0xldmVsUmVmLmN1cnJlbnQgKz0gKHRhcmdldCAtIGF1ZGlvTGV2ZWxSZWYuY3VycmVudCkgKiAwLjI4O1xuXG4gICAgICAgICAgICAvLyBQZXJjdXNzaXZlIHBsYXktbW9kZSBraWNrcyBmYWRlIG91dCBvbiB0aGVpciBvd24uXG4gICAgICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qga2lja0RlY2F5ID0gTWF0aC5leHAoLWR0ICogNC41KTtcbiAgICAgICAgICAgIGtpY2suem9vbSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnN0cm9iZSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLmNocm9tYSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnJpcHBsZSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnN3aXJsICo9IGtpY2tEZWNheTtcblxuICAgICAgICAgICAgLy8gQWRhcHRpdmUgcXVhbGl0eTogZHJvcCBpbnRlcm5hbCByZXNvbHV0aW9uIHdoZW4gZnJhbWVzIHJ1biBzbG93LFxuICAgICAgICAgICAgLy8gY3JlZXAgYmFjayB1cCB3aGVuIHRoZXJlIGlzIGhlYWRyb29tLiBTa2lwIHdoaWxlIGV4cG9ydC1sb2NrZWQuXG4gICAgICAgICAgICBpZiAoIWV4cG9ydExvY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChkdCA+IDAuMDI0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkdCA8IDAuMDE0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2xvd1N0cmVhayA+IDMwICYmIHF1YWxpdHlSZWYuY3VycmVudCA+IDAuOSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCAtIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmYXN0U3RyZWFrID4gNjAwICYmIHF1YWxpdHlSZWYuY3VycmVudCA8IDEuNSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIDEuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCArIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH07XG4gICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBsYXN0IHdvcmtpbmcgc2NlbmUuXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9hZEF1dG9zYXZlKCk7XG4gICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgc2V0U2NlbmUoc2F2ZWQpO1xuICAgICAgICAgICAgc2NlbmVSZWYuY3VycmVudCA9IHNhdmVkO1xuICAgICAgICAgICAgdm9pZCBoeWRyYXRlU2NlbmVJbWFnZXMoc2F2ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBkaXNwb3NlQWxsTWVkaWFSdW50aW1lcygpO1xuICAgICAgICAgICAgZW5naW5lLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEF1dG9zYXZlIChkZWJvdW5jZWQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzYXZlQXV0b3NhdmUoc2NlbmUpLCAzNTApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW3NjZW5lXSk7XG5cbiAgICAvLyBVbmRvIGhpc3RvcnkgKGRlYm91bmNlZCBcdTIwMTQgY29hbGVzY2VzIHNsaWRlciBkcmFncyBhbmQga2V5IHJpZmZzIGludG8gb25lIGVudHJ5KVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoaXN0b3J5U2tpcFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBoaXN0b3J5U2tpcFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBlbmNvZGVTY2VuZShzY2VuZSk7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSA9PT0gc25hcHNob3QpIHJldHVybjtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sgPSBoaXN0b3J5LnN0YWNrLnNsaWNlKDAsIGhpc3RvcnkuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sucHVzaChzbmFwc2hvdCk7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5zdGFjay5sZW5ndGggPiA4MCkgaGlzdG9yeS5zdGFjay5zaGlmdCgpO1xuICAgICAgICAgICAgaGlzdG9yeS5pbmRleCA9IGhpc3Rvcnkuc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH0sIFtzY2VuZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWljU3RyZWFtUmVmLmN1cnJlbnQ/LmdldFRyYWNrcygpID8/IFtdKVxuICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICAgIGlmIChyZWNvcmRlclJlZi5jdXJyZW50Py5zdGF0ZSA9PT0gXCJyZWNvcmRpbmdcIilcbiAgICAgICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgIHZvaWQgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQ/LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+XG4gICAgICAgICAgICBzZXRGdWxsc2NyZWVuKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09PSBzdGFnZVJlZi5jdXJyZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgc3luYyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwidmF1ZGlvLTJcIjtcbiAgICAgICAgY29uc3QgZmF2aWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XG4gIDxyZWN0IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCIjMDgwODBhXCIvPlxuICA8cGF0aCBkPVwiTTUgOC41IDIzLjUgNS41IDI2LjUgMjMuNSA4IDI2LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNmU2YzY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPlxuICA8cGF0aCBkPVwiTTQgNy41IDI0LjUgNC41IDI3LjUgMjQuNSA3IDI3LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMS43XCIvPlxuICA8cGF0aCBkPVwiTTEwIDIyLjUgMjEuNSA5LjVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMi40XCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuMiAyMi41IDIyLjcgOS41XCIgc3Ryb2tlPVwiI2E4Nzg4MFwiIHN0cm9rZS13aWR0aD1cIjEuMVwiIHN0cm9rZS1saW5lY2FwPVwic3F1YXJlXCIgb3BhY2l0eT1cIi44NVwiLz5cbiAgPHJlY3QgeD1cIjIwLjVcIiB5PVwiMjAuNVwiIHdpZHRoPVwiMy4yXCIgaGVpZ2h0PVwiMy4yXCIgZmlsbD1cIiNlOGU2ZTBcIi8+XG4gIDxyZWN0IHg9XCI2LjVcIiB5PVwiNi41XCIgd2lkdGg9XCIyLjJcIiBoZWlnaHQ9XCIyLjJcIiBmaWxsPVwiIzZlNmM2OFwiLz5cbjwvc3ZnPmA7XG4gICAgICAgIGNvbnN0IGxpbmsgPVxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gICAgICAgICAgICApIGFzIEhUTUxMaW5rRWxlbWVudCB8IG51bGwpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rLnJlbCA9IFwiaWNvblwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcbiAgICAgICAgbGluay5ocmVmID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChmYXZpY29uKX1gO1xuICAgICAgICBpZiAoIWxpbmsucGFyZW50Tm9kZSkgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRhcmdldCAmJlxuICAgICAgICAgICAgICAgICh0YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvcnRjdXQgPT09IFwielwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmVkb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdW5kb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVkb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0VWlIaWRkZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5nc09wZW5SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3NPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhlbHBPcGVuUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVscE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0SGVscE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldEZyb3plbigocHJldmlvdXMpID0+ICFwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUGxheUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwidlwiKSBzZXRTdGFnZU1vZGUoXCJhcnJhbmdlXCIpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJwXCIpIHNldFN0YWdlTW9kZShcInBsYXlcIik7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGV2ZW50LmtleSA9PT0gXCJEZWxldGVcIiB8fCBldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIpICYmXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVMYXllcihzZWxlY3RlZElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZElkICYmIGV2ZW50LmtleS5zdGFydHNXaXRoKFwiQXJyb3dcIikpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBldmVudC5zaGlmdEtleSA/IDAuMDUgOiAwLjAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc2NlbmVSZWYuY3VycmVudC5sYXllcnMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKGwpID0+IGwuaWQgPT09IHNlbGVjdGVkSWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPVxuICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLXN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC1zdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogY2xhbXAobGF5ZXIuZngueCArIGR4LCAtMywgMyksXG4gICAgICAgICAgICAgICAgICAgIHk6IGNsYW1wKGxheWVyLmZ4LnkgKyBkeSwgLTMsIDMpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH0sIFtzZWxlY3RlZElkXSk7XG5cbiAgICAvLyBQYXN0ZSBmaWxlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uUGFzdGUgPSAoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZXZlbnQuY2xpcGJvYXJkRGF0YT8uaXRlbXMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5raW5kICE9PSBcImZpbGVcIikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUpIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2b2lkIGltcG9ydEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBhc3RlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgb25QYXN0ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxheSBwZXJmb3JtYW5jZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBhZGRLaWNrKHBhdGNoOiBQYXJ0aWFsPEtpY2tTdGF0ZT4pIHtcbiAgICAgICAgY29uc3Qga2ljayA9IGtpY2tSZWYuY3VycmVudDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGF0Y2gpIGFzIChrZXlvZiBLaWNrU3RhdGUpW10pIHtcbiAgICAgICAgICAgIGtpY2tba2V5XSA9IE1hdGgubWluKDAuOSwga2lja1trZXldICsgKHBhdGNoW2tleV0gPz8gMCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RlcEdsb2JhbChwYXJhbToga2V5b2YgR2xvYmFsRngsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByZXZpb3VzLmdsb2JhbFtwYXJhbV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICBjb25zdCBtYXggPVxuICAgICAgICAgICAgICAgIHBhcmFtID09PSBcInNhdHVyYXRpb25cIiB8fFxuICAgICAgICAgICAgICAgIHBhcmFtID09PSBcImNvbnRyYXN0XCIgfHxcbiAgICAgICAgICAgICAgICBwYXJhbSA9PT0gXCJzcGVlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSBwYXJhbSA9PT0gXCJmYlpvb21cIiB8fCBwYXJhbSA9PT0gXCJmYlJvdGF0ZVwiID8gLTEgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBbcGFyYW1dOiBjbGFtcCh2YWx1ZSArIGRlbHRhLCBtaW4sIG1heCksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlOb3RlKGluZGV4OiBudW1iZXIsIHBhaW50QmFja2dyb3VuZDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBjb3VudCA9IFBMQVlfUElBTk8ubGVuZ3RoO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNvdW50ID4gMSA/IGluZGV4IC8gKGNvdW50IC0gMSkgOiAwO1xuICAgICAgICBjb25zdCBodWVEZWcgPSBNYXRoLnJvdW5kKChpbmRleCAvIGNvdW50KSAqIDM2MCk7XG4gICAgICAgIGlmIChwYWludEJhY2tncm91bmQgfHwgc2NlbmVSZWYuY3VycmVudC5sYXllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgYmdBOiBoc2xUb0hleChodWVEZWcsIDAuNSwgMC4wOSksXG4gICAgICAgICAgICAgICAgICAgIGJnQjogaHNsVG9IZXgoKGh1ZURlZyArIDQ1KSAlIDM2MCwgMC41NSwgMC4zKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaHVlID0gaW5kZXggLyBjb3VudDtcbiAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5sYXllcixcbiAgICAgICAgICAgICAgICAgICAgZng6IHsgLi4ubGF5ZXIuZngsIGh1ZSB9LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb3cgbm90ZXMgdGh1bXAsIGhpZ2ggbm90ZXMgc3BhcmtsZS5cbiAgICAgICAgYWRkS2ljayh7XG4gICAgICAgICAgICB6b29tOiAwLjE1ICogKDEgLSBwb3NpdGlvbiksXG4gICAgICAgICAgICByaXBwbGU6IDAuMDgsXG4gICAgICAgICAgICBjaHJvbWE6IDAuMDUgKyAwLjEzICogcG9zaXRpb24sXG4gICAgICAgICAgICBzdHJvYmU6IDAuMSAqIHBvc2l0aW9uLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpa2VMYXllcihpbmRleDogbnVtYmVyLCByZXNldDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzW2luZGV4XTtcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICByZXBsYWNlTGF5ZXJGeChcbiAgICAgICAgICAgIGxheWVyLmlkLFxuICAgICAgICAgICAgcmVzZXQgPyByZXNldExheWVyRnhFZmZlY3RzKGxheWVyLmZ4KSA6IHJhbmRvbUxheWVyRngobGF5ZXIuZngpLFxuICAgICAgICApO1xuICAgICAgICBzZXRTZWxlY3RlZElkKGxheWVyLmlkKTtcbiAgICAgICAgYWRkS2ljayh7IHJpcHBsZTogMC4xNCwgc3Ryb2JlOiAwLjA2IH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhc2hXb3JsZCgpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAuLi5ERUZBVUxUX0dMT0JBTF9GWCxcbiAgICAgICAgICAgICAgICBiZ01vZGU6IHByZXZpb3VzLmdsb2JhbC5iZ01vZGUsXG4gICAgICAgICAgICAgICAgYmdBOiBwcmV2aW91cy5nbG9iYWwuYmdBLFxuICAgICAgICAgICAgICAgIGJnQjogcHJldmlvdXMuZ2xvYmFsLmJnQixcbiAgICAgICAgICAgICAgICBhdWRpb1JlYWN0OiBwcmV2aW91cy5nbG9iYWwuYXVkaW9SZWFjdCxcbiAgICAgICAgICAgICAgICBwb2ludGVyRm9yY2U6IHByZXZpb3VzLmdsb2JhbC5wb2ludGVyRm9yY2UsXG4gICAgICAgICAgICAgICAgcG9pbnRlclNpemU6IHByZXZpb3VzLmdsb2JhbC5wb2ludGVyU2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludGVyTW9kZTogcHJldmlvdXMuZ2xvYmFsLnBvaW50ZXJNb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXlLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmNvZGU7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHNldFN0YWdlTW9kZShcImFycmFuZ2VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVzZXRJbmRleCA9IFBMQVlfUFJFU0VUX0NPREVTLmluZGV4T2YoY29kZSk7XG4gICAgICAgIGlmIChwcmVzZXRJbmRleCA+PSAwICYmIHByZXNldEluZGV4IDwgV09STERfUFJFU0VUUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwcmVzZXQgPSBXT1JMRF9QUkVTRVRTW3ByZXNldEluZGV4XTtcbiAgICAgICAgICAgIHVwZGF0ZUdsb2JhbChwcmVzZXQuZ2xvYmFsKTtcbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICBhZGRLaWNrKHsgc3Ryb2JlOiAwLjIyLCB6b29tOiAwLjA4IH0pO1xuICAgICAgICAgICAgc2hvd1RvYXN0KGAke3ByZXNldC5jb2RlfSBcdTAwQjcgJHtwcmVzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZ4S2V5ID0gUExBWV9GWF9LRVlTLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSk7XG4gICAgICAgIGlmIChmeEtleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN0ZXBHbG9iYWwoZnhLZXkucGFyYW0sIGV2ZW50LnNoaWZ0S2V5ID8gLTAuMDggOiAwLjA4KTtcbiAgICAgICAgICAgIGFkZEtpY2soeyBjaHJvbWE6IDAuMDQsIHN0cm9iZTogMC4wNSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBcIkJyYWNrZXRMZWZ0XCIgfHwgY29kZSA9PT0gXCJCcmFja2V0UmlnaHRcIikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN0ZXBHbG9iYWwoXCJzcGVlZFwiLCBjb2RlID09PSBcIkJyYWNrZXRSaWdodFwiID8gMC4xIDogLTAuMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPT09IFwiQmFja3NsYXNoXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKFwic29sYXJpemVcIiwgZXZlbnQuc2hpZnRLZXkgPyAtMC4xNSA6IDAuMTUpO1xuICAgICAgICAgICAgYWRkS2ljayh7IHN0cm9iZTogMC4xIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZUluZGV4ID0gUExBWV9QSUFOTy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSk7XG4gICAgICAgIGlmIChub3RlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBsYXlOb3RlKG5vdGVJbmRleCwgZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXJJbmRleCA9IFBMQVlfTEFZRVJfS0VZUy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlLFxuICAgICAgICApO1xuICAgICAgICBpZiAobGF5ZXJJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICAgICAgc3RyaWtlTGF5ZXIobGF5ZXJJbmRleCwgZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG4gICAgICAgICAgICB3YXNoV29ybGQoKTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIldhc2hlZCB0aGUgd29ybGQgY2xlYW5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5LnN0YXJ0c1dpdGgoXCJBcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSBzdGVwR2xvYmFsKFwic2F0dXJhdGlvblwiLCAwLjA4KTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHN0ZXBHbG9iYWwoXCJzYXR1cmF0aW9uXCIsIC0wLjA4KTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBzdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgMC4wNik7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSBzdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgLTAuMDYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhbXBUYXAodTogbnVtYmVyLCB2OiBudW1iZXIsIHN1YnRyYWN0OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGdsb2JhbCA9IHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsO1xuICAgICAgICBjb25zdCBtb2RlID0gTWF0aC5yb3VuZChnbG9iYWwucG9pbnRlck1vZGUpO1xuICAgICAgICBjb25zdCByZWFjaCA9IE1hdGgubWluKDEsIE1hdGguaHlwb3QodSAtIDAuNSwgdiAtIDAuNSkgLyAwLjYyKTtcbiAgICAgICAgY29uc3Qgc3RyZW5ndGggPSAoMC4wNSArIDAuMTMgKiByZWFjaCkgKiAoc3VidHJhY3QgPyAtMSA6IDEpO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0YWdlU2l6ZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBhc3BlY3QgPSBNYXRoLm1heCgwLjA1LCB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCkpO1xuICAgICAgICBjb25zdCBoaXQgPSBoaXRMYXllcigodSAtIDAuNSkgKiBhc3BlY3QsIDAuNSAtIHYpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIEdyYXZpdHkgcGluY2hlcyB0aGUgbGF5ZXIgaW53YXJkLlxuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoaGl0LmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1bGdlOiBjbGFtcChoaXQuZnguYnVsZ2UgLSBzdHJlbmd0aCAqIDEuNCwgLTEsIDEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPT09IDAgPyBcInN3aXJsXCIgOiBtb2RlID09PSAyID8gXCJjaHJvbWFcIiA6IFwid2FycFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSAoaGl0LmZ4IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGhpdC5pZCwge1xuICAgICAgICAgICAgICAgICAgICBbcGFyYW1dOiBjbGFtcChjdXJyZW50ICsgc3RyZW5ndGggKiAxLjIsIDAsIDEpLFxuICAgICAgICAgICAgICAgIH0gYXMgUGFydGlhbDxMYXllckZ4Pik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbSA9XG4gICAgICAgICAgICAgICAgbW9kZSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwic3dpcmxcIlxuICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiem9vbVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hyb21hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3YXJwXCI7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKHBhcmFtLCBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkS2ljayhcbiAgICAgICAgICAgIG1vZGUgPT09IDBcbiAgICAgICAgICAgICAgICA/IHsgc3dpcmw6IDAuMTIgfVxuICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMVxuICAgICAgICAgICAgICAgICAgPyB7IHpvb206IDAuMTIgfVxuICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAyXG4gICAgICAgICAgICAgICAgICAgID8geyBjaHJvbWE6IDAuMTQgfVxuICAgICAgICAgICAgICAgICAgICA6IHsgcmlwcGxlOiAwLjEyIH0sXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RlcEthbGVpZG8oKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzY2VuZVJlZi5jdXJyZW50Lmdsb2JhbC5rYWxlaWRvO1xuICAgICAgICBjb25zdCBuZXh0ID1cbiAgICAgICAgICAgIGN1cnJlbnQgPCAwLjEgPyAwLjMgOiBjdXJyZW50IDwgMC40NSA/IDAuNiA6IGN1cnJlbnQgPCAwLjc1ID8gMC44NSA6IDA7XG4gICAgICAgIHVwZGF0ZUdsb2JhbCh7IGthbGVpZG86IG5leHQgfSk7XG4gICAgICAgIGFkZEtpY2soeyBzd2lybDogMC4xNiwgc3Ryb2JlOiAwLjA4IH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNvb3RoZVBsYXkoc2NlbmVYOiBudW1iZXIsIHNjZW5lWTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGhpdExheWVyKHNjZW5lWCwgc2NlbmVZKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmlkID09PSBoaXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVyLmZ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnA6IGxheWVyLmZ4LndhcnAgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXJsOiBsYXllci5meC5zd2lybCAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlwcGxlOiBsYXllci5meC5yaXBwbGUgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGthbGVpZG86IGxheWVyLmZ4LmthbGVpZG8gKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsYXRlOiBsYXllci5meC5waXhlbGF0ZSAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGxheWVyLmZ4LmJ1bGdlICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IGxheWVyLmZ4Lm1pcnJvciAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21hOiBsYXllci5meC5jaHJvbWEgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsYXllcixcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IHByZXZpb3VzLmdsb2JhbDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmcsXG4gICAgICAgICAgICAgICAgICAgIHdhcnA6IGcud2FycCAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHN3aXJsOiBnLnN3aXJsICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgcmlwcGxlOiBnLnJpcHBsZSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IGcuem9vbSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIGthbGVpZG86IGcua2FsZWlkbyAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIG1pcnJvcjogZy5taXJyb3IgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBjaHJvbWE6IGcuY2hyb21hICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2s6IGcuZmVlZGJhY2sgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBzb2xhcml6ZTogZy5zb2xhcml6ZSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9iZTogZy5zdHJvYmUgKiAwLjcyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvd0VjaG8oXG4gICAgICAgIGdlc3R1cmU6IHsgc3RhcnRVOiBudW1iZXI7IHN0YXJ0VjogbnVtYmVyOyBwYXRoOiBudW1iZXIgfSxcbiAgICAgICAgdTogbnVtYmVyLFxuICAgICAgICB2OiBudW1iZXIsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gdSAtIGdlc3R1cmUuc3RhcnRVO1xuICAgICAgICBjb25zdCBsaWZ0ID0gZ2VzdHVyZS5zdGFydFYgLSB2O1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBwcmV2aW91cy5nbG9iYWw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5nLFxuICAgICAgICAgICAgICAgICAgICBmYlJvdGF0ZTogY2xhbXAoZy5mYlJvdGF0ZSArIGR4ICogMC43LCAtMSwgMSksXG4gICAgICAgICAgICAgICAgICAgIGZiWm9vbTogY2xhbXAoZy5mYlpvb20gKyBsaWZ0ICogMC43LCAtMSwgMSksXG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrOiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KGcuZmVlZGJhY2ssIDAuMykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKDAuMiwgZ2VzdHVyZS5wYXRoICogMC4yNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC45NSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdHJhaWxzOiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KGcudHJhaWxzLCAwLjU1KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oMC4xNSwgZ2VzdHVyZS5wYXRoICogMC4xMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC45NixcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZEtpY2soeyB6b29tOiAwLjEsIGNocm9tYTogMC4wOCB9KTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdGFnZSBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIHN0YWdlUG9pbnQoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHtcbiAgICAgICAgc2NlbmVYOiBudW1iZXI7XG4gICAgICAgIHNjZW5lWTogbnVtYmVyO1xuICAgICAgICB1OiBudW1iZXI7XG4gICAgICAgIHY6IG51bWJlcjtcbiAgICB9IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gc3RhZ2VcbiAgICAgICAgICAgID8gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIDogeyBsZWZ0OiAwLCB0b3A6IDAsIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgICAgICAgY29uc3QgdSA9IGNsYW1wKChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDAsIDEpO1xuICAgICAgICBjb25zdCB2ID0gY2xhbXAoKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodCwgMCwgMSk7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IHJlY3Qud2lkdGggLyBNYXRoLm1heCgxLCByZWN0LmhlaWdodCk7XG4gICAgICAgIHJldHVybiB7IHNjZW5lWDogKHUgLSAwLjUpICogYXNwZWN0LCBzY2VuZVk6IDAuNSAtIHYsIHUsIHYgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXRMYXllcihzY2VuZVg6IG51bWJlciwgc2NlbmVZOiBudW1iZXIpOiBTY2VuZUxheWVyIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzY2VuZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBpbmZvID0gaW1hZ2VJbmZvUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50LmxheWVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBjdXJyZW50LmxheWVyc1tpXTtcbiAgICAgICAgICAgIGlmICghbGF5ZXIuZngudmlzaWJsZSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBtZXRhID0gaW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgICAgICBtZXRhICYmIG1ldGEud2lkdGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gbWV0YS53aWR0aCAvIE1hdGgubWF4KDEsIG1ldGEuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICBjb25zdCBmaXRIZWlnaHQgPSBNYXRoLm1pbigxLCBhc3BlY3QgLyBpbWFnZUFzcGVjdCk7XG4gICAgICAgICAgICBjb25zdCBleHRYID0gKGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogbGF5ZXIuZnguc2NhbGUpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGV4dFkgPSAoZml0SGVpZ2h0ICogbGF5ZXIuZnguc2NhbGUpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKC1sYXllci5meC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwO1xuICAgICAgICAgICAgY29uc3QgZHggPSBzY2VuZVggLSBsYXllci5meC54O1xuICAgICAgICAgICAgY29uc3QgZHkgPSBzY2VuZVkgLSBsYXllci5meC55O1xuICAgICAgICAgICAgY29uc3QgcXggPSBNYXRoLmNvcyhhbmdsZSkgKiBkeCAtIE1hdGguc2luKGFuZ2xlKSAqIGR5O1xuICAgICAgICAgICAgY29uc3QgcXkgPSBNYXRoLnNpbihhbmdsZSkgKiBkeCArIE1hdGguY29zKGFuZ2xlKSAqIGR5O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHF4KSA8PSBleHRYICYmIE1hdGguYWJzKHF5KSA8PSBleHRZKSByZXR1cm4gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQ6IFBvaW50ZXJFdmVudCwgZG93bjogYm9vbGVhbikge1xuICAgICAgICBjb25zdCB7IHUsIHYgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICBjb25zdCB4ID0gdTtcbiAgICAgICAgY29uc3QgeSA9IDEgLSB2O1xuICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IE1hdGgubWF4KDgsIG5vdyAtIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQuYXQpO1xuICAgICAgICBwb2ludGVyUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHZlbG9jaXR5WDogKHggLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LngpICogKDE2IC8gZWxhcHNlZCksXG4gICAgICAgICAgICB2ZWxvY2l0eVk6ICh5IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC55KSAqICgxNiAvIGVsYXBzZWQpLFxuICAgICAgICAgICAgZG93bixcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgbGFzdFBvaW50ZXJSZWYuY3VycmVudCA9IHsgeCwgeSwgYXQ6IG5vdyB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyRG93bihldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zZXRQb2ludGVyQ2FwdHVyZShldmVudC5wb2ludGVySWQpO1xuICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzY2VuZVgsIHNjZW5lWSB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgICAgICAgICAgc29vdGhlUGxheShzY2VuZVgsIHNjZW5lWSk7XG4gICAgICAgICAgICAgICAgYWRkS2ljayh7IHJpcHBsZTogMC4wOCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVQbGF5UG9pbnRlcihldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IHUsIHYgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgcGxheUdlc3R1cmVSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBzdGFydFU6IHUsXG4gICAgICAgICAgICAgICAgc3RhcnRWOiB2LFxuICAgICAgICAgICAgICAgIGxhc3RVOiB1LFxuICAgICAgICAgICAgICAgIGxhc3RWOiB2LFxuICAgICAgICAgICAgICAgIHBhdGg6IDAsXG4gICAgICAgICAgICAgICAgYXQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICAgICAgICAgIHNoaWZ0OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzY2VuZVgsIHNjZW5lWSB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgIGNvbnN0IGhpdCA9IGhpdExheWVyKHNjZW5lWCwgc2NlbmVZKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChoaXQuaWQpO1xuICAgICAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIGxheWVySWQ6IGhpdC5pZCxcbiAgICAgICAgICAgICAgICBzdGFydFg6IHNjZW5lWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHNjZW5lWSxcbiAgICAgICAgICAgICAgICBmeFg6IGhpdC5meC54LFxuICAgICAgICAgICAgICAgIGZ4WTogaGl0LmZ4LnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcbiAgICAgICAgICAgIGRyYWdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlck1vdmUoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICB1cGRhdGVQbGF5UG9pbnRlcihldmVudCwgcG9pbnRlclJlZi5jdXJyZW50LmRvd24pO1xuICAgICAgICAgICAgY29uc3QgZ2VzdHVyZSA9IHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoZ2VzdHVyZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5wYXRoICs9IE1hdGguaHlwb3QodSAtIGdlc3R1cmUubGFzdFUsIHYgLSBnZXN0dXJlLmxhc3RWKTtcbiAgICAgICAgICAgICAgICBnZXN0dXJlLmxhc3RVID0gdTtcbiAgICAgICAgICAgICAgICBnZXN0dXJlLmxhc3RWID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRyYWdSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IHNjZW5lWCwgc2NlbmVZIH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgZHJhZ1BvaW50UmVmLmN1cnJlbnQgPSB7IHg6IHNjZW5lWCwgeTogc2NlbmVZIH07XG4gICAgICAgIC8vIENvYWxlc2NlIHBvaW50ZXIgZXZlbnRzIHRvIG9uZSBzdGF0ZSB1cGRhdGUgcGVyIGZyYW1lLlxuICAgICAgICBpZiAoZHJhZ1JhZlJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGRyYWdSYWZSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnUmFmUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgY29uc3QgZHJhZyA9IGRyYWdSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghZHJhZykgcmV0dXJuO1xuICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChkcmFnLmxheWVySWQsIHtcbiAgICAgICAgICAgICAgICB4OiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgZHJhZy5meFggKyBkcmFnUG9pbnRSZWYuY3VycmVudC54IC0gZHJhZy5zdGFydFgsXG4gICAgICAgICAgICAgICAgICAgIC0zLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgeTogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgIGRyYWcuZnhZICsgZHJhZ1BvaW50UmVmLmN1cnJlbnQueSAtIGRyYWcuc3RhcnRZLFxuICAgICAgICAgICAgICAgICAgICAtMyxcbiAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyVXAoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICB1cGRhdGVQbGF5UG9pbnRlcihldmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgZ2VzdHVyZSA9IHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBwbGF5R2VzdHVyZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghZ2VzdHVyZSB8fCBldmVudC5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChub3cgLSBnZXN0dXJlLmF0IDwgMzAwICYmIGdlc3R1cmUucGF0aCA8IDAuMDIpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gbGFzdFRhcEF0UmVmLmN1cnJlbnQgPCAzNjApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRhcEF0UmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdGVwS2FsZWlkbygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUYXBBdFJlZi5jdXJyZW50ID0gbm93O1xuICAgICAgICAgICAgICAgICAgICBzdGFtcFRhcCh1LCB2LCBnZXN0dXJlLnNoaWZ0IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdlc3R1cmUucGF0aCA+IDAuMDMpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0VjaG8oZ2VzdHVyZSwgdSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlckxlYXZlKCkge1xuICAgICAgICBwb2ludGVyUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAuLi5wb2ludGVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGRyYWdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFzdGFnZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBvbldoZWVsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LmRlbHRhWSB8fCBldmVudC5kZWx0YVg7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSBzdGVwR2xvYmFsKFwic2F0dXJhdGlvblwiLCAtZGVsdGEgKiAwLjAwMTIpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc3RlcEdsb2JhbChcImh1ZU9yYml0XCIsIC1kZWx0YSAqIDAuMDAwNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ICE9PSBcImFycmFuZ2VcIikgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICAgICAgICBpZiAoIWxheWVySWQpIHJldHVybjtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGxheWVySWQpO1xuICAgICAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChsYXllcklkLCB7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBsYXllci5meC5yb3RhdGlvbiArIChldmVudC5kZWx0YVkgPiAwID8gMyA6IC0zKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChsYXllcklkLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmZ4LnNjYWxlICogTWF0aC5leHAoLWV2ZW50LmRlbHRhWSAqIDAuMDAxNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzdGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gICAgfSwgW3NlbGVjdGVkSWRdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhdWRpbyAvIHJlY29yZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2V0dGluZ3MocGF0Y2g6IFBhcnRpYWw8QXBwU2V0dGluZ3M+KSB7XG4gICAgICAgIHNldFNldHRpbmdzKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4ucHJldmlvdXMsIC4uLnBhdGNoIH07XG4gICAgICAgICAgICBzYXZlU2V0dGluZ3MobmV4dCk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlTWljKG9wdGlvbnM/OiB7XG4gICAgICAgIHRvYXN0T25TdWNjZXNzPzogYm9vbGVhbjtcbiAgICAgICAgdG9hc3RPbkVycm9yPzogYm9vbGVhbjtcbiAgICB9KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmIChtaWNTdHJlYW1SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2aWRlbzogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1pY1N0cmVhbVJlZi5jdXJyZW50ID0gc3RyZWFtO1xuICAgICAgICAgICAgaWYgKCFhdWRpb0NvbnRleHRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICBhdWRpb0NvbnRleHRSZWYuY3VycmVudCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIGF3YWl0IGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LnJlc3VtZSgpO1xuICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICAgICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICAgICAgICAgIGFuYWx5c2VyLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuNjg7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHRSZWYuY3VycmVudFxuICAgICAgICAgICAgICAgIC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pXG4gICAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICAgICAgYW5hbHlzZXJSZWYuY3VycmVudCA9IGFuYWx5c2VyO1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgaWYgKHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsLmF1ZGlvUmVhY3QgPCAwLjMpXG4gICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHsgYXVkaW9SZWFjdDogMC43IH0pO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnM/LnRvYXN0T25TdWNjZXNzICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoXCJNaWMgbGl2ZSBcdTIwMTQgYXVkaW8gZHJpdmVzIHRoZSBzaGFkZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucz8udG9hc3RPbkVycm9yICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoXCJNaWNyb3Bob25lIHdhcyBibG9ja2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlTWljKCkge1xuICAgICAgICBpZiAobWljQWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkaW5nICYmIHJlY29yZGluZ01pY1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KFwiQ2FuJ3Qgc3RvcCBtaWMgd2hpbGUgcmVjb3JkaW5nIHdpdGggYXVkaW9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBtaWNTdHJlYW1SZWYuY3VycmVudD8uZ2V0VHJhY2tzKCkgPz8gW10pXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgYW5hbHlzZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBhdWRpb0xldmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBlbnN1cmVNaWMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lIHx8ICFzdGFnZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCByZWN0ID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHN0YWdlU2l6ZVJlZi5jdXJyZW50ID0geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9O1xuICAgICAgICBlbmdpbmUucmVzaXplKHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUV4cG9ydENhbnZhc1NpemUoXG4gICAgICAgIHJlc29sdXRpb25JZDogRXhwb3J0UmVzb2x1dGlvbklkLFxuICAgICAgICBzY3JlZW5TY2FsZSA9IDEsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVuZ2luZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHNpemUgPSByZXNvbHZlRXhwb3J0U2l6ZShcbiAgICAgICAgICAgIHJlc29sdXRpb25JZCxcbiAgICAgICAgICAgIHN0YWdlU2l6ZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgc2NyZWVuU2NhbGUsXG4gICAgICAgICk7XG4gICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IHNpemU7XG4gICAgICAgIGVuZ2luZS5yZXNpemUoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcCgxKTtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlja1JlY29yZGVyTWltZShpbmNsdWRlQXVkaW86IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCB3aXRoQXVkaW8gPSBbXG4gICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOSxvcHVzXCIsXG4gICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOCxvcHVzXCIsXG4gICAgICAgICAgICBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgICAgIFwidmlkZW8vbXA0XCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHZpZGVvT25seSA9IFtcbiAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA5XCIsXG4gICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOFwiLFxuICAgICAgICAgICAgXCJ2aWRlby93ZWJtXCIsXG4gICAgICAgICAgICBcInZpZGVvL21wNFwiLFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKGluY2x1ZGVBdWRpbyA/IHdpdGhBdWRpbyA6IHZpZGVvT25seSkuZmluZCgodHlwZSkgPT5cbiAgICAgICAgICAgIE1lZGlhUmVjb3JkZXIuaXNUeXBlU3VwcG9ydGVkKHR5cGUpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVJlY29yZGluZygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhZW5naW5lKSByZXR1cm47XG4gICAgICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaXplID0gYXBwbHlFeHBvcnRDYW52YXNTaXplKFxuICAgICAgICAgICAgZXhwb3J0UmVzUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXNpemUpIHJldHVybjtcblxuICAgICAgICBsZXQgaW5jbHVkZU1pYyA9IHNldHRpbmdzUmVmLmN1cnJlbnQucmVjb3JkTWljQXVkaW87XG4gICAgICAgIGlmIChpbmNsdWRlTWljKSB7XG4gICAgICAgICAgICBjb25zdCBvayA9IGF3YWl0IGVuc3VyZU1pYyh7XG4gICAgICAgICAgICAgICAgdG9hc3RPblN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvYXN0T25FcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFvaykgaW5jbHVkZU1pYyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25lIGZyYW1lIGF0IHRoZSBsb2NrZWQgc2l6ZSBiZWZvcmUgY2FwdHVyZVN0cmVhbSByZWFkcyBkaW1lbnNpb25zLlxuICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNhbnZhcy5jYXB0dXJlU3RyZWFtKDYwKTtcbiAgICAgICAgaWYgKGluY2x1ZGVNaWMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWljU3RyZWFtUmVmLmN1cnJlbnQ/LmdldEF1ZGlvVHJhY2tzKCkgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBzdHJlYW0uYWRkVHJhY2sodHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pbWVUeXBlID0gcGlja1JlY29yZGVyTWltZShpbmNsdWRlTWljKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIoc3RyZWFtLCB7XG4gICAgICAgICAgICAgICAgbWltZVR5cGUsXG4gICAgICAgICAgICAgICAgdmlkZW9CaXRzUGVyU2Vjb25kOiAxOF8wMDBfMDAwLFxuICAgICAgICAgICAgICAgIC4uLihpbmNsdWRlTWljID8geyBhdWRpb0JpdHNQZXJTZWNvbmQ6IDI1Nl8wMDAgfSA6IHt9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2h1bmtzUmVmLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgIHJlY29yZGluZ01pY1JlZi5jdXJyZW50ID0gaW5jbHVkZU1pYztcbiAgICAgICAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpemUpIGNodW5rc1JlZi5jdXJyZW50LnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IChyZWNvcmRlci5taW1lVHlwZSB8fCBcInZpZGVvL3dlYm1cIikuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIFwibXA0XCIsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA/IFwibXA0XCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIndlYm1cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoY2h1bmtzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkZXIubWltZVR5cGUgfHwgXCJ2aWRlby93ZWJtXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2h1bmtzUmVmLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgICByZWNvcmRpbmdNaWNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzdG9yZUxpdmVDYW52YXNTaXplKCk7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9iKGJsb2IsIGV4cG9ydEZpbGVuYW1lKGV4dGVuc2lvbikpO1xuICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFJlY29yZGluZ1dpdGhNaWMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFJlY29yZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoMjUwKTtcbiAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQgPSByZWNvcmRlcjtcbiAgICAgICAgICAgIHNldFJlY29yZGluZ1dpdGhNaWMoaW5jbHVkZU1pYyk7XG4gICAgICAgICAgICBzZXRSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXG4gICAgICAgICAgICAgICAgaW5jbHVkZU1pY1xuICAgICAgICAgICAgICAgICAgICA/IGBSZWNvcmRpbmcgJHtzaXplLndpZHRofVx1MDBENyR7c2l6ZS5oZWlnaHR9IFx1MDBCNyBtaWNgXG4gICAgICAgICAgICAgICAgICAgIDogYFJlY29yZGluZyAke3NpemUud2lkdGh9XHUwMEQ3JHtzaXplLmhlaWdodH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZWNvcmRpbmdNaWNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0UmVjb3JkaW5nV2l0aE1pYyhmYWxzZSk7XG4gICAgICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzdG9yZUxpdmVDYW52YXNTaXplKCk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJSZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBoZXJlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG93bmxvYWRCbG9iKGJsb2I6IEJsb2IsIGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgICAgICBhbmNob3IuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpLCA0MDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBvcnRGaWxlbmFtZShleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPVxuICAgICAgICAgICAgY2xlYW5OYW1lKHNjZW5lUmVmLmN1cnJlbnQubmFtZSwgXCJ2YXVkaW8tMlwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLV0rL2csIFwiLVwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8tKy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXi18LSQvZywgXCJcIikgfHwgXCJ2YXVkaW8tMlwiO1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBwYWQgPSAobjogbnVtYmVyKSA9PiBTdHJpbmcobikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICBjb25zdCBzdGFtcCA9IFtcbiAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICBwYWQobm93LmdldERhdGUoKSksXG4gICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgIHBhZChub3cuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICBwYWQobm93LmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICBwYWQobm93LmdldFNlY29uZHMoKSksXG4gICAgICAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgcmV0dXJuIGAke3Byb2plY3R9LSR7c3RhbXB9LiR7ZXh0ZW5zaW9ufWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0UG5nKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lIHx8ICFjYW52YXMpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShleHBvcnRSZXNSZWYuY3VycmVudCwgMyk7XG4gICAgICAgIGlmICghc2l6ZSkgcmV0dXJuO1xuICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgIGlmIChibG9iKSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9iKGJsb2IsIGV4cG9ydEZpbGVuYW1lKFwicG5nXCIpKTtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoYEV4cG9ydGVkICR7c2l6ZS53aWR0aH1cdTAwRDcke3NpemUuaGVpZ2h0fWApO1xuICAgICAgICAgICAgfSBlbHNlIHNob3dUb2FzdChcIkV4cG9ydCBmYWlsZWRcIik7XG4gICAgICAgIH0sIFwiaW1hZ2UvcG5nXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhcHR1cmVUaHVtYigpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIWNhbnZhcy53aWR0aCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBUaGUgZHJhd2luZyBidWZmZXIgaXMgbm90IHByZXNlcnZlZCBcdTIwMTQgcmVkcmF3IHNvIHRoZSBncmFiIGlzbid0IGJsYW5rLlxuICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LnJlbmRlcihidWlsZEZyYW1lKCkpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSAyMjAgLyBNYXRoLm1heChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgdGh1bWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgdGh1bWJDYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy53aWR0aCAqIHNjYWxlKSk7XG4gICAgICAgICAgICB0aHVtYkNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy5oZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRodW1iQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRodW1iQ2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGh1bWJDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjYyKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA8IDU4XzAwMCA/IGRhdGEgOiBcIlwiO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlcnZlciBzY2VuZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlVG9TZXJ2ZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzYXZlU2NlbmVNdXRhdGlvbihcbiAgICAgICAgICAgICAgICBzZXJ2ZXJTY2VuZUlkLFxuICAgICAgICAgICAgICAgIHNjZW5lLm5hbWUsXG4gICAgICAgICAgICAgICAgZW5jb2RlU2NlbmUoc2NlbmUpLFxuICAgICAgICAgICAgICAgIGNhcHR1cmVUaHVtYigpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIlNjZW5lIHNhdmVkXCIpO1xuICAgICAgICB9IGNhdGNoIChjYXVzZSkge1xuICAgICAgICAgICAgc2hvd1RvYXN0KGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZS5tZXNzYWdlIDogXCJTYXZlIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRGcm9tU2VydmVyKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFNjZW5lTXV0YXRpb24oaWQpO1xuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZGVjb2RlU2NlbmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgbG9hZGVkLm5hbWUgPSBjbGVhbk5hbWUocmVzdWx0Lm5hbWUsIGxvYWRlZC5uYW1lKTtcbiAgICAgICAgICAgIHNldFNjZW5lKGxvYWRlZCk7XG4gICAgICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gbG9hZGVkO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcbiAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQoaWQpO1xuICAgICAgICAgICAgc2V0U2NlbmVzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgYXdhaXQgaHlkcmF0ZVNjZW5lSW1hZ2VzKGxvYWRlZCk7XG4gICAgICAgICAgICBjb25zdCBtaXNzaW5nID0gbG9hZGVkLmxheWVycy5zb21lKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gIWVuZ2luZVJlZi5jdXJyZW50Py5oYXNJbWFnZShsYXllci5pbWFnZUlkKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobWlzc2luZylcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoXG4gICAgICAgICAgICAgICAgICAgIFwiU29tZSBtZWRpYSBmaWxlcyBhcmUgbm90IG9uIHRoaXMgZGV2aWNlIFx1MjAxNCBzaG93aW5nIHBsYWNlaG9sZGVyc1wiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiQ291bGQgbm90IGxvYWQgdGhhdCBzY2VuZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFzdGFnZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSBhd2FpdCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgZWxzZSBhd2FpdCBzdGFnZS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIkZ1bGxzY3JlZW4gaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlbGVjdGlvbiBib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uQm94ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWQgfHwgc3RhZ2VNb2RlICE9PSBcImFycmFuZ2VcIikgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF07XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDIpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBhc3BlY3QgPSB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpIDogMTtcbiAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICBjb25zdCBib3hXaWR0aCA9IGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogc2VsZWN0ZWQuZnguc2NhbGUgKiBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJveEhlaWdodCA9IGZpdEhlaWdodCAqIHNlbGVjdGVkLmZ4LnNjYWxlICogaGVpZ2h0O1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gKDAuNSArIHNlbGVjdGVkLmZ4LnggLyBhc3BlY3QpICogd2lkdGg7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSAoMC41IC0gc2VsZWN0ZWQuZngueSkgKiBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3hXaWR0aCxcbiAgICAgICAgICAgIGJveEhlaWdodCxcbiAgICAgICAgICAgIGNlbnRlclgsXG4gICAgICAgICAgICBjZW50ZXJZLFxuICAgICAgICAgICAgcm90YXRpb246IHNlbGVjdGVkLmZ4LnJvdGF0aW9uLFxuICAgICAgICB9O1xuICAgIH0sIFtzZWxlY3RlZCwgaW1hZ2VJbmZvLCBzdGFnZU1vZGUsIHNjZW5lXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0IHdvcmxkUGFuZWwgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIldvcmxkIHByZXNldHNcIiBhY2NlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEgcHgtMyBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHtXT1JMRF9QUkVTRVRTLm1hcCgocHJlc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcmVzZXQuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbChwcmVzZXQuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gcHgtMS41IHB5LTEgdGV4dC1sZWZ0IGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWFjaWQpXS82MCBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtW3ZhcigtLWFjaWQpXS83MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0LmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57cHJlc2V0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJCYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPFNlZ1Jvd1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtCR19NT0RFU31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5iZ01vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+IHVwZGF0ZUdsb2JhbCh7IGJnTW9kZTogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0xIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYmdBfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYmdCfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGbHVpZCB3YXJwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC53YXJwfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHdhcnA6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zd2lybH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzd2lybDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlwcGxlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucmlwcGxlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHJpcHBsZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVubmVsIHpvb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnpvb219XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgem9vbTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS2FsZWlkb3Njb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5rYWxlaWRvfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGthbGVpZG86IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pcnJvciBmb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5taXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgbWlycm9yOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJGZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZmVlZGJhY2t9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmVlZGJhY2s6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRyYWlsIGxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwudHJhaWxzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuNn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgdHJhaWxzOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIHpvb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiWm9vbX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmJab29tOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIHNwaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiUm90YXRlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBmYlJvdGF0ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWNobyBodWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiSHVlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGZiSHVlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJXb3JsZCBjb2xvclwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmlzbSBzcGxpdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuY2hyb21hfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGNocm9tYTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSHVlIG9yYml0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5odWVPcmJpdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBodWVPcmJpdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2F0dXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc2F0dXJhdGlvbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmNvbnRyYXN0fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBjb250cmFzdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU29sYXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNvbGFyaXplfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHNvbGFyaXplOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTaWduYWxcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JhaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmdyYWlufVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGdyYWluOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTY2FubGluZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNjYW5saW5lc31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzY2FubGluZXM6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZ25ldHRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC52aWduZXR0ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswLjIyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyB2aWduZXR0ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2JlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zdHJvYmV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc3Ryb2JlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJNb3Rpb24gJiBhdWRpb1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaW1lIHNwZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc3BlZWQ6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF1ZGlvIHJlYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5hdWRpb1JlYWN0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkN1cnNvciAocGxheSBtb2RlKVwiPlxuICAgICAgICAgICAgICAgIDxTZWdSb3dcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1BPSU5URVJfTU9ERVN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucG9pbnRlck1vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+IHVwZGF0ZUdsb2JhbCh7IHBvaW50ZXJNb2RlOiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb3JjZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucG9pbnRlckZvcmNlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuNn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgcG9pbnRlckZvcmNlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWVsZCBzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5wb2ludGVyU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuMzV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHBvaW50ZXJTaXplOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xuXG4gICAgY29uc3QgbGF5ZXJQYW5lbCA9IHNlbGVjdGVkID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICAgICAgICB0aXRsZT17YExheWVyIFx1MDBCNyAke3NlbGVjdGVkLm5hbWV9YH1cbiAgICAgICAgICAgICAgICBhY2NlbnRcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNodWZmbGUgbGF5ZXIgRlhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUxheWVyRngoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUxheWVyRngoc2VsZWN0ZWQuZngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRGljZSBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgbGF5ZXIgRlhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTGF5ZXJGeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRMYXllckZ4RWZmZWN0cyhzZWxlY3RlZC5meCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktMSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZWRpYUtpbmRMYWJlbChzZWxlY3RlZC5tZWRpYUtpbmQpfVxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLm1pc3NpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgXHUwMEI3ICR7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLndpZHRofVx1MDBENyR7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLmhlaWdodH1gfVxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdPy5taXNzaW5nID8gXCIgXHUwMEI3IG1pc3Npbmcgb24gZGV2aWNlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmxlbmRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC02IHctZnVsbCBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBweC0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tcGFwZXIpXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmJsZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUgYXMgQmxlbmRNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtCTEVORF9NT0RFUy5tYXAoKG1vZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bW9kZX0gdmFsdWU9e21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5vcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IG9wYWNpdHk6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZWdSb3dcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYW52YXMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1RJTEVfTU9ERVN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC50aWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyB0aWxlOiBpbmRleCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4wNX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXs2fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc2NhbGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSb3RhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5yb3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMTgwfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezE4MH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdERlZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcm90YXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJEaXN0b3J0XCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZsdWlkIHdhcnBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngud2FycH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyB3YXJwOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3dpcmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc3dpcmx9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc3dpcmw6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSaXBwbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnJpcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyByaXBwbGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJLYWxlaWRvc2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngua2FsZWlkb31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBrYWxlaWRvOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGl4ZWxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucGl4ZWxhdGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcGl4ZWxhdGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZW5zXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmJ1bGdlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBidWxnZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pcnJvciBmb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4Lm1pcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBtaXJyb3I6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJMYXllciBjb2xvclwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIdWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguaHVlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGh1ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc2F0dXJhdGlvbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmNvbnRyYXN0fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBjb250cmFzdDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyaWdodG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguYnJpZ2h0bmVzc31cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgYnJpZ2h0bmVzczogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkludmVydFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5pbnZlcnR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgaW52ZXJ0OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zdGVyaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnBvc3Rlcml6ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBwb3N0ZXJpemU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmlzbSBzcGxpdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5jaHJvbWF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgY2hyb21hOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmVvbiBlZGdlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5lZGdlc31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBlZGdlczogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTMgcHktWzVweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnRpbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnRDb2xvcjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnRpbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnRBbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJMYXllciBtb3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zcGlufVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzcGluOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHJpZnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguZHJpZnR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgZHJpZnQ6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQdWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5wdWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBwdWxzZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaW1tZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2hpbW1lcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzaGltbWVyOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICApO1xuXG4gICAgaWYgKGVuZ2luZUVycm9yKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBoLXNjcmVlbiBwbGFjZS1pdGVtcy1jZW50ZXIgYmctW3ZhcigtLXZvaWQpXSBwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTIgZm9udC1tb25vIHRleHQtc20gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbmdpbmVFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTIgbmVlZHMgV2ViR0wgdG8gcnVuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLXZvaWQpXSB0ZXh0LVt2YXIoLS1wYXBlcildIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQtMCBvcGFjaXR5LTQwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE0JSAtMTAlLCByZ2JhKDIzMiwyMzAsMjI0LC4wOCksIHRyYW5zcGFyZW50IDMyJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTIlIDIwJSwgcmdiYSgxNjgsMTIwLDEyOCwuMDYpLCB0cmFuc3BhcmVudCAyOCUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiBUb3AgYmFyICovfVxuICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBoLTExIGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIGdhcC0xLjUgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gcHgtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEgdGV4dC1bMS4xNXJlbV0gZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy1bLTAuMDhlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZicgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1bMjZweF0gdy0zNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHB4LTEuNSB0ZXh0LVsxMnB4XSBmb250LW1lZGl1bSB0ZXh0LVt2YXIoLS1wYXBlcildIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUpXSBmb2N1czpib3JkZXItW3ZhcigtLWFjaWQpXS82MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2xlYW5OYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVudGl0bGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcnJhbmdlIGxheWVycyAoVilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzdGFnZU1vZGUgPT09IFwiYXJyYW5nZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhZ2VNb2RlKFwiYXJyYW5nZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJTW92ZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGF5IHRoZSBjYW52YXMgd2l0aCB5b3VyIGN1cnNvciAoUClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzdGFnZU1vZGUgPT09IFwicGxheVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhZ2VNb2RlKFwicGxheVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJU3BhcmsgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSYW5kb21pemUgZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiByYW5kb21HbG9iYWxGeChwcmV2aW91cy5nbG9iYWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeDogcmFuZG9tTGF5ZXJGeChsYXllci5meCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoYW9zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElEaWNlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51ZGdlIHRoZSB3b3JsZCBzb21ld2hlcmUgbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKG11dGF0ZUdsb2JhbEZ4KHNjZW5lLmdsb2JhbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk11dGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJV2FuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb3plblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVzdW1lIHRpbWUgKFNwYWNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJGcmVlemUgdGltZSAoU3BhY2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZnJvemVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RnJvemVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zyb3plbiA/IDxJUGxheSAvPiA6IDxJUGF1c2UgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2F2ZSBzY2VuZSB0byB5b3VyIGxpYnJhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBzYXZlVG9TZXJ2ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJU2F2ZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHNhdmVkIHNjZW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzY2VuZXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lc09wZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NlbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUZvbGRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmVzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2NlbmVzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AgYWJzb2x1dGUgcmlnaHQtMCB0b3AtOCB6LTQwIG1heC1oLVs2MHZoXSB3LTY0IG92ZXJmbG93LXktYXV0byBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBwLTEuNSBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmVMaXN0Lmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwLTMgZm9udC1tb25vIHRleHQtWzEwcHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBzYXZlZCBzY2VuZXMgeWV0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aC5pc0d1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIChHdWVzdCBzZXNzaW9ucyBzYXZlIGxvY2FsbHkgcGVyIGRlcGxveS4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lTGlzdC5tYXAoKG1ldGEpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWV0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTEuNSBob3ZlcjpiZy1bdmFyKC0tbGluZSldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IG1pbi13LTAgZmxleC0xIGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGxvYWRGcm9tU2VydmVyKG1ldGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JpZCBoLTkgdy0xNCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWV0YS50aHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXVkaW8tMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdHJ1bmNhdGUgdGV4dC1bMTEuNXB4XSB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tb25vIHRleHQtWzguNXB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS51cGRhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHNjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIG9wYWNpdHktMCBob3Zlcjp0ZXh0LVsjYjg2YTc0XSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBkZWxldGVTY2VuZU11dGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuY2F0Y2goKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWxldGUgZmFpbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEuaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlclNjZW5lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SVRyYXNoIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTEgaC00IHctcHggYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlN0b3AgbWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJBdWRpby1yZWFjdCBmcm9tIHlvdXIgbWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e21pY0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgdG9nZ2xlTWljKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJTWljIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTdG9wIHJlY29yZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2V0dGluZ3MucmVjb3JkTWljQXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVjb3JkIGNhbnZhcyArIG1pY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlJlY29yZCB0aGUgY2FudmFzIHRvIHZpZGVvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcj17cmVjb3JkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVSZWNvcmRpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlYy1kb3QgaW5saW5lLWJsb2NrIGgtMi41IHctMi41IHJvdW5kZWQtZnVsbCBiZy1bI2M0NWI2YV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayBoLTIuNSB3LTIuNSByb3VuZGVkLWZ1bGwgYm9yZGVyLVsxLjVweF0gYm9yZGVyLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZngtcmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhwb3J0IC8gcmVjb3JkaW5nIHJlc29sdXRpb24gKGtlZXBzIHN0YWdlIGFzcGVjdClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cG9ydFJlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUgYXMgRXhwb3J0UmVzb2x1dGlvbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRVhQT1JUX1JFU09MVVRJT05TLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0UmVzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7RVhQT1JUX1JFU09MVVRJT05TLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YEV4cG9ydCBQTkcgYXQgJHtFWFBPUlRfUkVTT0xVVElPTlMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXhwb3J0UmVzKT8ubGFiZWwgPz8gXCJzZWxlY3RlZFwifSByZXNvbHV0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V4cG9ydFBuZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NldHRpbmdzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWxwT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3NPcGVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJU2V0dGluZ3MgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW5zdHJ1bWVudCBtYW51YWwgKD8pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aGVscE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3NPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWxwT3BlbigocHJldmlvdXMpID0+ICFwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyaWQgaC1bMTVweF0gdy1bMTVweF0gcGxhY2UtaXRlbXMtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBmb250LWJvbGQgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZnVsbHNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgdG9nZ2xlRnVsbHNjcmVlbigpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SUV4cGFuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIaWRlIGludGVyZmFjZSAoVGFiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRVaUhpZGRlbih0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElQYW5lbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGZsZXggbWluLWgtMCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICB7LyogTGF5ZXJzIHBhbmVsICovfVxuICAgICAgICAgICAgICAgIHshdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IHctWzIxMnB4XSBmbGV4LXNocmluay0wIGZsZXgtY29sIGJvcmRlci1yIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBoLTggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aH0ve01BWF9MQVlFUlN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltcG9ydCBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWluLWgtMCBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJteC0zIG15LTMgYmxvY2sgdy1bY2FsYygxMDAlLTI0cHgpXSBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0zIHB5LTYgdGV4dC1jZW50ZXIgZm9udC1tb25vIHRleHQtWzEwcHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ym9yZGVyLVt2YXIoLS1hY2lkKV0vNTAgaG92ZXI6dGV4dC1bdmFyKC0tbXV0ZSldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCwgcGFzdGUsIG9yIGNsaWNrIHRvIGltcG9ydCBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IGltYWdlSW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBsYXllci5pZCA9PT0gc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyb3VwIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB4LTIgcHktMS41ICR7aXNTZWxlY3RlZCA/IFwiYmctW3ZhcigtLWFjaWQpXS8xMFwiIDogXCJob3ZlcjpiZy1bdmFyKC0tbGluZSldXCJ9ICR7bGF5ZXIuZngudmlzaWJsZSA/IFwiXCIgOiBcIm9wYWNpdHktNDVcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChsYXllci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuZngudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJTaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1zaHJpbmstMCB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVyLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbGF5ZXIuZngudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5meC52aXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRXllIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUV5ZU9mZiBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BncmlkIGgtOCB3LTggZmxleC1zaHJpbmstMCBwbGFjZS1pdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciAke2lzU2VsZWN0ZWQgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldLzYwXCIgOiBcImJvcmRlci1bdmFyKC0tbGluZSldXCJ9IGJnLWJsYWNrYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGE/LnRodW1iID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZXRhLnRodW1ifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs4cHhdIHRleHQtWyNiODZhNzRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhPy5taXNzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXHUyMDI2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTAgZmxleC0xIHRydW5jYXRlIHRleHQtWzExcHhdIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgIT09IFwiaW1hZ2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtc2hyaW5rLTAgZm9udC1tb25vIHRleHQtWzhweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgPT09IFwidmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsYXllci5tZWRpYUtpbmQgPT09IFwiYXVkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkYXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTAuNSBncm91cC1ob3ZlcjpmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSYWlzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGF5ZXIobGF5ZXIuaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElVcCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG93ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxheWVyKGxheWVyLmlkLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SURvd24gY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVMYXllcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElDb3B5IGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJVHJhc2ggY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJib3JkZXItdCBib3JkZXItW3ZhcigtLWxpbmUpXSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs4LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWIGFycmFuZ2UgXHUwMEI3IFAgcGxheSBcdTAwQjcgU3BhY2UgZnJlZXplIFx1MDBCNyBUYWIgaGlkZSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTAwQjcgXHUyMzE4WiB1bmRvIFx1MDBCNyA/IG1hbnVhbCBcdTAwQjcgZHJhZyAvIHdoZWVsIC8gXHUyMUU3d2hlZWwgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZSwgc2NhbGUsIHJvdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7LyogU3RhZ2UgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e3N0YWdlUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YHJlbGF0aXZlIG1pbi13LTAgZmxleC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayAke3N0YWdlTW9kZSA9PT0gXCJwbGF5XCIgPyBcImN1cnNvci1jcm9zc2hhaXJcIiA6IFwiY3Vyc29yLWRlZmF1bHRcIn1gfVxuICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtvblN0YWdlUG9pbnRlckRvd259XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uU3RhZ2VQb2ludGVyTW92ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e29uU3RhZ2VQb2ludGVyVXB9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckxlYXZlPXtvblN0YWdlUG9pbnRlckxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJhZ092ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiBzZXREcmFnT3ZlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJhZ092ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcj8uZmlsZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgaW1wb3J0RmlsZXMoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IGNsYXNzPVwiYmxvY2sgaC1mdWxsIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3Rpb25Cb3ggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2lkKV0vNzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke3NlbGVjdGlvbkJveC5jZW50ZXJYIC0gc2VsZWN0aW9uQm94LmJveFdpZHRoIC8gMn1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYCR7c2VsZWN0aW9uQm94LmNlbnRlclkgLSBzZWxlY3Rpb25Cb3guYm94SGVpZ2h0IC8gMn1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzZWxlY3Rpb25Cb3guYm94V2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3NlbGVjdGlvbkJveC5ib3hIZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtzZWxlY3Rpb25Cb3gucm90YXRpb259ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMCAxcHggcmdiYSgwLDAsMCwuNilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3NjZW5lLmxheWVycy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLVt2YXIoLS1saW5lLWhvdCldIGJnLWJsYWNrLzQwIHB4LTYgcHktNCB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC1bMTFweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wIGltYWdlcywgdmlkZW8sIGF1ZGlvLCBvciBhbnkgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7ZHJhZ092ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCB6LTIwIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGJnLWJsYWNrLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWFjaWQpXSBweC04IHB5LTUgZm9udC1tb25vIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbGVhc2UgdG8gYWRkIGxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c3RhZ2VNb2RlID09PSBcInBsYXlcIiAmJiAhdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgYm90dG9tLTMgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctYmxhY2svNjAgcHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheSBtb2RlIFx1MjAxNCB0YXAsIGRyYWcgJiBwbGF5IHRoZSBrZXlzIFx1MDBCNyBmaWVsZDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQT0lOVEVSX01PREVTW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY2VuZS5nbG9iYWwucG9pbnRlck1vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MDBCNyA/IG1hbnVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlciBib3JkZXItWyNjNDViNmFdLzUwIGJnLWJsYWNrLzYwIHB4LTIuNSBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlYy1kb3QgaW5saW5lLWJsb2NrIGgtMiB3LTIgcm91bmRlZC1mdWxsIGJnLVsjYzQ1YjZhXVwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmRpbmdXaXRoTWljID8gXCIgXHUwMEI3IG1pY1wiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7dWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgYm90dG9tLTMgcmlnaHQtMyBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctYmxhY2svNjAgcHgtMi41IHB5LTEuNSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRVaUhpZGRlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBVSSAoVGFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQ29udHJvbHMgcGFuZWwgKi99XG4gICAgICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInctWzI2NHB4XSBmbGV4LXNocmluay0wIG92ZXJmbG93LXktYXV0byBib3JkZXItbCBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyUGFuZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29ybGRQYW5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTMgZm9udC1tb25vIHRleHQtWzguNXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG91YmxlLWNsaWNrIGFueSBzbGlkZXIgdG8gcmVzZXQgaXQuIEZlZWRiYWNrICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dW5uZWwgem9vbSArIGEga2FsZWlkb3Njb3BlIGlzIGEgZ29vZCB3YXkgdG8gbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuIGFmdGVybm9vbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2hlbHBPcGVuICYmIDxIZWxwTW9kYWwgb25DbG9zZT17KCkgPT4gc2V0SGVscE9wZW4oZmFsc2UpfSAvPn1cbiAgICAgICAgICAgIHtzZXR0aW5nc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxTZXR0aW5nc01vZGFsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nPXtyZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2V0dGluZ3NPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge3RvYXN0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wIHBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgYm90dG9tLTUgbGVmdC0xLzIgei01MCAtdHJhbnNsYXRlLXgtMS8yIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHB4LTQgcHktMiBmb250LW1vbm8gdGV4dC1bMTAuNXB4XSB0ZXh0LVt2YXIoLS1wYXBlcildIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3RvYXN0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVmPXtmaWxlUmVmfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCIqLypcIlxuICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcz8ubGVuZ3RoKSB2b2lkIGltcG9ydEZpbGVzKGlucHV0LmZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwKICAi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SDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssWUFBWTtBQUFBLE1BQ3JFLFVBQVU7QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxJQUN0RSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQU0sT0FBTztBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQ3JELFFBQVE7QUFBQSxNQUFNLFlBQVk7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFNLFFBQVE7QUFBQSxJQUMxRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSztBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQUssVUFBVTtBQUFBLE1BQUssWUFBWTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQ3BFLFVBQVU7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLE9BQU87QUFBQSxNQUFLLE9BQU87QUFBQSxJQUNsRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsS0FBSztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU8sWUFBWTtBQUFBLE1BQ3pFLFVBQVU7QUFBQSxNQUFNLE9BQU87QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFLLE9BQU87QUFBQSxJ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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUpiLElBQU0sWUFBWTtBQUFBLEVBQ2hCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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USxLQUFLLEtBQUssT0FBTyxRQUFRLE9BQU8sT0FBTztBQUFBLEVBQ3ZELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDekQsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxRQUFRLE9BQU8sU0FBUztBQUFBLEVBQ3pELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFdBQVcsT0FBTyxVQUFVO0FBQUEsRUFDN0QsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sUUFBUTtBQUFBLEVBQzFELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFlBQVksT0FBTyxPQUFPO0FBQUEsRUFDM0QsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sU0FBUztBQUMvRDtBQUVBLElBQU0sYUFBOEM7QUFBQSxFQUNoRCxFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1B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dCIsICJyZXJlbmRlclF1ZXVlIiwgInByZXZEZWJvdW5jZSIsICJkZWZlciIsICJkZXB0aFNvcnQiLCAiX2lkIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiaSIsICJFTVBUWV9PQkoiLCAiRU1QVFlfQVJSIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJpc0FycmF5IiwgIkFycmF5IiwgImFzc2lnbiIsICJvYmoiLCAicHJvcHMiLCAicmVtb3ZlTm9kZSIsICJub2RlIiwgInBhcmVudE5vZGUiLCAicmVtb3ZlQ2hpbGQiLCAiY3JlYXRlRWxlbWVudCIsICJ0eXBlIiwgImNoaWxkcmVuIiwgImtleSIsICJyZWYiLCAibm9ybWFsaXplZFByb3BzIiwgImFyZ3VtZW50cyIsICJsZW5ndGgiLCAiY2FsbCIsICJkZWZhdWx0UHJvcHMiLCAiY3JlYXRlVk5vZGUiLCAib3JpZ2luYWwiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJfX2kiLCAiX191IiwgIkZyYWdtZW50IiwgInByb3BzIiwgImNoaWxkcmVuIiwgIkJhc2VDb21wb25lbnQiLCAiY29udGV4dCIsICJ0aGlzIiwgImdldERvbVNpYmxpbmciLCAidm5vZGUiLCAiY2hpbGRJbmRleCIsICJfXyIsICJfX2kiLCAic2libGluZyIsICJfX2siLCAibGVuZ3RoIiwgIl9fZSIsICJ0eXBlIiwgInJlbmRlckNvbXBvbmVudCIsICJjb21wb25lbnQiLCAiX19QIiwgIl9fZCIsICJvbGRWTm9kZSIsICJfX3YiLCAib2xkRG9tIiwgImNvbW1pdFF1ZXVlIiwgInJlZlF1ZXVlIiwgIm5ld1ZOb2RlIiwgImFzc2lnbiIsICJvcHRpb25zIiwgImRpZmYiLCAiX19uIiwgIm5hbWVzcGFjZVVSSSIsICJfX3UiLCAiY29tbWl0Um9vdCIsICJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsICJfX2MiLCAiYmFzZSIsICJzb21lIiwgImNoaWxkIiwgImVucXVldWVSZW5kZXIiLCAiYyIsICJyZXJlbmRlclF1ZXVlIiwgInB1c2giLCAicHJvY2VzcyIsICJfX3IiLCAicHJldkRlYm91bmNlIiwgImRlYm91bmNlUmVuZGVyaW5nIiwgImRlZmVyIiwgImwiLCAic29ydCIsICJkZXB0aFNvcnQiLCAic2hpZnQiLCAiZGlmZkNoaWxkcmVuIiwgInBhcmVudERvbSIsICJyZW5kZXJSZXN1bHQiLCAibmV3UGFyZW50Vk5vZGUiLCAib2xkUGFyZW50Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJuYW1lc3BhY2UiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiaXNIeWRyYXRpbmciLCAiaSIsICJjaGlsZFZOb2RlIiwgIm5ld0RvbSIsICJmaXJzdENoaWxkRG9tIiwgInJlc3VsdCIsICJzaG91bGRQbGFjZSIsICJvbGRDaGlsZHJlbiIsICJFTVBUWV9BUlIiLCAibmV3Q2hpbGRyZW5MZW5ndGgiLCAiY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSIsICJFTVBUWV9PQkoiLCAicmVmIiwgImFwcGx5UmVmIiwgImluc2VydCIsICJuZXh0U2libGluZyIsICJza2V3ZWRJbmRleCIsICJtYXRjaGluZ0luZGV4IiwgIm9sZENoaWxkcmVuTGVuZ3RoIiwgInJlbWFpbmluZ09sZENoaWxkcmVuIiwgInNrZXciLCAiQXJyYXkiLCAiY29uc3RydWN0b3IiLCAiU3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgImlzQXJyYXkiLCAiX19iIiwgImtleSIsICJmaW5kTWF0Y2hpbmdJbmRleCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInBhcmVudE5vZGUiLCAiaW5zZXJ0QmVmb3JlIiwgIm5vZGVUeXBlIiwgImZpbmRNYXRjaGluZ0luZGV4IiwgImNoaWxkVk5vZGUiLCAib2xkQ2hpbGRyZW4iLCAic2tld2VkSW5kZXgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAieCIsICJ5IiwgImNoaWxkSW5kZXgiLCAia2V5IiwgInR5cGUiLCAib2xkVk5vZGUiLCAibWF0Y2hlZCIsICJfX3UiLCAibGVuZ3RoIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgIm5hbWVzcGFjZSIsICJ1c2VDYXB0dXJlIiwgImxvd2VyQ2FzZU5hbWUiLCAibyIsICJjc3NUZXh0IiwgInJlcGxhY2UiLCAiQ0FQVFVSRV9SRUdFWCIsICJ0b0xvd2VyQ2FzZSIsICJzbGljZSIsICJsIiwgIkVWRU5UX0FUVEFDSEVEIiwgImV2ZW50Q2xvY2siLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFByb3h5Q2FwdHVyZSIsICJldmVudFByb3h5IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgImNyZWF0ZUV2ZW50UHJveHkiLCAidGhpcyIsICJldmVudEhhbmRsZXIiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJvcHRpb25zIiwgImV2ZW50IiwgImRpZmYiLCAicGFyZW50RG9tIiwgIm5ld1ZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiY29tbWl0UXVldWUiLCAib2xkRG9tIiwgImlzSHlkcmF0aW5nIiwgInJlZlF1ZXVlIiwgInRtcCIsICJvbGRDb21taXRRdWV1ZUxlbmd0aCIsICJjIiwgImlzTmV3IiwgIm9sZFByb3BzIiwgIm9sZFN0YXRlIiwgInNuYXBzaG90IiwgImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsICJuZXdQcm9wcyIsICJpc0NsYXNzQ29tcG9uZW50IiwgInByb3ZpZGVyIiwgImNvbXBvbmVudENvbnRleHQiLCAicmVuZGVySG9vayIsICJjb3VudCIsICJyZW5kZXJSZXN1bHQiLCAiaSIsICJuZXdUeXBlIiwgImNvbnN0cnVjdG9yIiwgIl9fZSIsICJfX2IiLCAib3V0ZXIiLCAicHJvcHMiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJjb250ZXh0VHlwZSIsICJfX2MiLCAiX18iLCAiX19FIiwgIkJhc2VDb21wb25lbnQiLCAiZG9SZW5kZXIiLCAic3ViIiwgInN0YXRlIiwgIl9fbiIsICJfX2QiLCAiX19oIiwgIl9zYiIsICJfX3MiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwgImFzc2lnbiIsICJfX3YiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgInB1c2giLCAiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX19rIiwgInNvbWUiLCAidm5vZGUiLCAiRU1QVFlfQVJSIiwgImFwcGx5IiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiY29tcG9uZW50RGlkVXBkYXRlIiwgImNvbnRleHQiLCAiX19QIiwgIl9fciIsICJnZXRDaGlsZENvbnRleHQiLCAiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCAiRnJhZ21lbnQiLCAiY2xvbmVOb2RlIiwgImNoaWxkcmVuIiwgImRpZmZDaGlsZHJlbiIsICJpc0FycmF5IiwgImJhc2UiLCAidGhlbiIsICJNT0RFX0hZRFJBVEUiLCAibm9kZVR5cGUiLCAibmV4dFNpYmxpbmciLCAiaW5kZXhPZiIsICJyZW1vdmVOb2RlIiwgIm1hcmtBc0ZvcmNlIiwgImRpZmZFbGVtZW50Tm9kZXMiLCAiZGlmZmVkIiwgImNvbW1pdFJvb3QiLCAicm9vdCIsICJhcHBseVJlZiIsICJjYiIsICJjYWxsIiwgIm5vZGUiLCAibWFwIiwgIm5ld0h0bWwiLCAib2xkSHRtbCIsICJuZXdDaGlsZHJlbiIsICJpbnB1dFZhbHVlIiwgImNoZWNrZWQiLCAiRU1QVFlfT0JKIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiaXMiLCAiX19tIiwgImRhdGEiLCAiZGVmYXVsdFZhbHVlIiwgImNoaWxkTm9kZXMiLCAiYXR0cmlidXRlcyIsICJfX2h0bWwiLCAiaW5uZXJIVE1MIiwgImNvbnRlbnQiLCAiZ2V0RG9tU2libGluZyIsICJ1bmRlZmluZWQiLCAicmVmIiwgImhhc1JlZlVubW91bnQiLCAiY3VycmVudCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInNraXBSZW1vdmUiLCAiciIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJyZXBsYWNlTm9kZSIsICJkb2N1bWVudEVsZW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJuYW1lc3BhY2VVUkkiLCAiZmlyc3RDaGlsZCIsICJjcmVhdGVDb250ZXh0IiwgImRlZmF1bHRWYWx1ZSIsICJDb250ZXh0IiwgInByb3BzIiwgInN1YnMiLCAiY3R4IiwgInRoaXMiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgIlNldCIsICJfX2MiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9wcm9wcyIsICJ2YWx1ZSIsICJmb3JFYWNoIiwgImMiLCAiX19lIiwgImVucXVldWVSZW5kZXIiLCAic3ViIiwgImFkZCIsICJvbGQiLCAiZGVsZXRlIiwgImNhbGwiLCAiY2hpbGRyZW4iLCAiaSIsICJfXyIsICJQcm92aWRlciIsICJfX2wiLCAiQ29uc3VtZXIiLCAiY29udGV4dFZhbHVlIiwgImNvbnRleHRUeXBlIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJfX2QiLCAiY29tcG9uZW50RGlkQ2F0Y2giLCAiX19FIiwgImUiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJCYXNlQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiY3VycmVudEluZGV4IiwgImN1cnJlbnRDb21wb25lbnQiLCAicHJldmlvdXNDb21wb25lbnQiLCAicHJldlJhZiIsICJjdXJyZW50SG9vayIsICJhZnRlclBhaW50RWZmZWN0cyIsICJvcHRpb25zIiwgIl9vcHRpb25zIiwgIm9sZEJlZm9yZURpZmYiLCAiX19iIiwgIm9sZEJlZm9yZVJlbmRlciIsICJfX3IiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAiX19jIiwgIm9sZEJlZm9yZVVubW91bnQiLCAidW5tb3VudCIsICJvbGRSb290IiwgIl9fIiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgIl9faCIsICJob29rcyIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAidXNlU3RhdGUiLCAiaW5pdGlhbFN0YXRlIiwgInVzZVJlZHVjZXIiLCAiaW52b2tlT3JSZXR1cm4iLCAicmVkdWNlciIsICJpbml0IiwgImhvb2tTdGF0ZSIsICJfcmVkdWNlciIsICJhY3Rpb24iLCAiY3VycmVudFZhbHVlIiwgIl9fTiIsICJuZXh0VmFsdWUiLCAic2V0U3RhdGUiLCAiX19mIiwgInVwZGF0ZUhvb2tTdGF0ZSIsICJwIiwgInMiLCAiYyIsICJ1cGRhdGVkSG9vayIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJwcmV2U2N1IiwgInJlc3VsdCIsICJjYWxsIiwgInRoaXMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgInByZXZDV1UiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAidG1wIiwgInVzZUVmZmVjdCIsICJjYWxsYmFjayIsICJhcmdzIiwgInN0YXRlIiwgIl9fcyIsICJhcmdzQ2hhbmdlZCIsICJfcGVuZGluZ0FyZ3MiLCAidXNlUmVmIiwgImluaXRpYWxWYWx1ZSIsICJjdXJyZW50SG9vayIsICJ1c2VNZW1vIiwgImN1cnJlbnQiLCAidXNlTWVtbyIsICJmYWN0b3J5IiwgImFyZ3MiLCAic3RhdGUiLCAiZ2V0SG9va1N0YXRlIiwgImN1cnJlbnRJbmRleCIsICJhcmdzQ2hhbmdlZCIsICJfX0giLCAiX18iLCAiX19oIiwgImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCAiY29tcG9uZW50IiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgInNoaWZ0IiwgImhvb2tzIiwgIl9fSCIsICJfX1AiLCAiX19oIiwgInNvbWUiLCAiaW52b2tlQ2xlYW51cCIsICJpbnZva2VFZmZlY3QiLCAiZSIsICJvcHRpb25zIiwgIl9fZSIsICJfX3YiLCAiX19iIiwgInZub2RlIiwgImN1cnJlbnRDb21wb25lbnQiLCAib2xkQmVmb3JlRGlmZiIsICJfXyIsICJwYXJlbnREb20iLCAiX19rIiwgIl9fbSIsICJvbGRSb290IiwgIl9fciIsICJvbGRCZWZvcmVSZW5kZXIiLCAiY3VycmVudEluZGV4IiwgIl9fYyIsICJwcmV2aW91c0NvbXBvbmVudCIsICJob29rSXRlbSIsICJfX04iLCAiX3BlbmRpbmdBcmdzIiwgImRpZmZlZCIsICJvbGRBZnRlckRpZmYiLCAiYyIsICJsZW5ndGgiLCAicHVzaCIsICJwcmV2UmFmIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJhZnRlck5leHRGcmFtZSIsICJjb21taXRRdWV1ZSIsICJmaWx0ZXIiLCAiY2IiLCAib2xkQ29tbWl0IiwgInVubW91bnQiLCAib2xkQmVmb3JlVW5tb3VudCIsICJoYXNFcnJvcmVkIiwgInMiLCAiSEFTX1JBRiIsICJjYWxsYmFjayIsICJyYWYiLCAiZG9uZSIsICJjbGVhclRpbWVvdXQiLCAidGltZW91dCIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJzZXRUaW1lb3V0IiwgImhvb2siLCAiY29tcCIsICJjbGVhbnVwIiwgImFyZ3NDaGFuZ2VkIiwgIm9sZEFyZ3MiLCAibmV3QXJncyIsICJhcmciLCAiaW5kZXgiLCAiaW52b2tlT3JSZXR1cm4iLCAiZiIsICJkIiwgImgiLCAiZCIsICJoIiwgInQiLCAiZCIsICJsIiwgInAiLCAiaSIsICJ3aWR0aCIsICJoZWlnaHQiLCAieSIsICJ4IiwgInAiLCAidTIiLCAidTMiLCAidiIsICJnIiwgImkiLCAiYSIsICJiIiwgImMiLCAibyIsICJoIiwgInJlcXVlc3QiLCAidm5vZGVJZCIsICJjcmVhdGVWTm9kZSIsICJ0eXBlIiwgInByb3BzIiwgImtleSIsICJpc1N0YXRpY0NoaWxkcmVuIiwgIl9fc291cmNlIiwgIl9fc2VsZiIsICJyZWYiLCAiaSIsICJub3JtYWxpemVkUHJvcHMiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJ2bm9kZUlkIiwgIl9faSIsICJfX3UiLCAiZGVmYXVsdFByb3BzIiwgIm9wdGlvbnMiLCAidSIsICJwIiwgImkiLCAiYSIsICJuIiwgImsiLCAiYyIsICJhdXRoIiwgImQiLCAiQSIsICJsYXllciIsICJjYW52YXMiLCAib2JqZWN0VXJsIiwgImciLCAiaCIsICJsIiwgInYiLCAieCIsICJ5IiwgInNjZW5lWCIsICJzY2VuZVkiLCAiVCJdCn0K
