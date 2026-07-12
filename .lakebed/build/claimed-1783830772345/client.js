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

  // Cursor field \u2014 only while pressed (hover tracks position but does not warp)
  if (u_pointer_down > 0.5 && u_pointer_force > 0.003) {
    vec2 pn = (u_pointer - 0.5) * aspect;
    vec2 d = n - pn;
    float sz = max(u_pointer_size * 0.8, 0.04);
    float infl = exp(-dot(d, d) / (sz * sz)) * u_pointer_force;
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
    /* @__PURE__ */ u3("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvcHJlc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZW5naW5lLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9tZWRpYS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIFNjZW5lIGRvY3VtZW50IHR5cGVzIHNoYXJlZCBieSBjbGllbnQgYW5kIHNlcnZlciwgcGx1cyBzYW5pdGl6ZXJzIGFuZCB0aGVcbi8vIEpTT04gY29kZWMuIEEgc2NlbmUgaXMgc21hbGwgKHBhcmFtcyBvbmx5KSBcdTIwMTQgbWVkaWEgYmxvYnMgbGl2ZSBjbGllbnQtc2lkZS5cblxuZXhwb3J0IGNvbnN0IFNDRU5FX0RBVEFfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgVEhVTUJfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgTUFYX0xBWUVSUyA9IDEyO1xuXG5leHBvcnQgY29uc3QgTUVESUFfS0lORFMgPSBbXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIiwgXCJkYXRhXCJdIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgTWVkaWFLaW5kID0gKHR5cGVvZiBNRURJQV9LSU5EUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLFxuICBcImFkZFwiLFxuICBcInNjcmVlblwiLFxuICBcIm11bHRpcGx5XCIsXG4gIFwib3ZlcmxheVwiLFxuICBcImRpZmZlcmVuY2VcIixcbiAgXCJsaWdodGVuXCIsXG4gIFwiZGFya2VuXCIsXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IFRJTEVfTU9ERVMgPSBbXCJjcm9wXCIsIFwicmVwZWF0XCIsIFwibWlycm9yXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQkdfTU9ERVMgPSBbXCJ2b2lkXCIsIFwiZ3JhZGllbnRcIiwgXCJwbGFzbWFcIiwgXCJ0dW5uZWxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQT0lOVEVSX01PREVTID0gW1widm9ydGV4XCIsIFwiZ3Jhdml0eVwiLCBcInByaXNtXCIsIFwibWVsdFwiXSBhcyBjb25zdDtcblxuLyoqIFBlci1sYXllciBlZmZlY3QgKyB0cmFuc2Zvcm0gc3RhY2suIEFsbCAwLi4xIHVubGVzcyBub3RlZC4gKi9cbmV4cG9ydCB0eXBlIExheWVyRnggPSB7XG4gIC8vIFRyYW5zZm9ybSAoc2NlbmUgdW5pdHM6IHgveSBhcmUgY2VudGVyIG9mZnNldHMsIC0yLi4yOyBzY2FsZSAwLjA1Li42KVxuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogQmxlbmRNb2RlO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICAvKiogMCBjcm9wLCAxIHJlcGVhdCwgMiBtaXJyb3ItcmVwZWF0IFx1MjAxNCByZXBlYXQgbWFrZXMgYSBzaW5nbGUgaW1hZ2UgaW5maW5pdGUgKi9cbiAgdGlsZTogbnVtYmVyO1xuICAvLyBEaXN0b3J0XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgLyoqIC0xIHBpbmNoIC4uIDEgYnVsZ2UgKi9cbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGh1ZTogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICB0aW50Q29sb3I6IHN0cmluZztcbiAgLy8gTW90aW9uIChhbmltYXRlZCBieSB0aGUgZW5naW5lIGNsb2NrKVxuICAvKiogLTEuLjEgcmV2b2x1dGlvbnMtaXNoICovXG4gIHNwaW46IG51bWJlcjtcbiAgZHJpZnQ6IG51bWJlcjtcbiAgcHVsc2U6IG51bWJlcjtcbiAgc2hpbW1lcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVMYXllciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgLyoqIEluZGV4ZWREQiBtZWRpYSBrZXkgb24gdGhlIGNsaWVudCB0aGF0IGNyZWF0ZWQgaXQuICovXG4gIGltYWdlSWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogSG93IHRoZSBJbmRleGVkREIgYmxvYiBzaG91bGQgYmUgZGVjb2RlZCAvIHBsYXllZC4gRGVmYXVsdHMgdG8gaW1hZ2UuICovXG4gIG1lZGlhS2luZDogTWVkaWFLaW5kO1xuICBmeDogTGF5ZXJGeDtcbn07XG5cbi8qKiBHbG9iYWwgcG9zdC1wcm9jZXNzaW5nIHBhcmFtcy4gQWxsIDAuLjEgdW5sZXNzIG5vdGVkLiAqL1xuZXhwb3J0IHR5cGUgR2xvYmFsRnggPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IHN0cmluZztcbiAgYmdCOiBzdHJpbmc7XG4gIC8vIEZlZWRiYWNrXG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICAvKiogLTEuLjEgKi9cbiAgZmJab29tOiBudW1iZXI7XG4gIC8qKiAtMS4uMSAqL1xuICBmYlJvdGF0ZTogbnVtYmVyO1xuICBmYkh1ZTogbnVtYmVyO1xuICAvLyBTcGFjZVxuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGNocm9tYTogbnVtYmVyO1xuICBodWVPcmJpdDogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIHNvbGFyaXplOiBudW1iZXI7XG4gIC8vIFNpZ25hbFxuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIC8vIE1vdGlvblxuICAvKiogMC4uMiAqL1xuICBzcGVlZDogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIC8vIEN1cnNvclxuICBwb2ludGVyRm9yY2U6IG51bWJlcjtcbiAgcG9pbnRlclNpemU6IG51bWJlcjtcbiAgcG9pbnRlck1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxheWVyczogU2NlbmVMYXllcltdO1xuICBnbG9iYWw6IEdsb2JhbEZ4O1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfRlg6IExheWVyRnggPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICByb3RhdGlvbjogMCxcbiAgb3BhY2l0eTogMSxcbiAgYmxlbmQ6IFwibm9ybWFsXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIHRpbGU6IDAsXG4gIHdhcnA6IDAsXG4gIHN3aXJsOiAwLFxuICByaXBwbGU6IDAsXG4gIGthbGVpZG86IDAsXG4gIHBpeGVsYXRlOiAwLFxuICBidWxnZTogMCxcbiAgbWlycm9yOiAwLFxuICBodWU6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBicmlnaHRuZXNzOiAxLFxuICBpbnZlcnQ6IDAsXG4gIHBvc3Rlcml6ZTogMCxcbiAgY2hyb21hOiAwLFxuICBlZGdlczogMCxcbiAgdGludEFtb3VudDogMCxcbiAgdGludENvbG9yOiBcIiNhODc4ODBcIixcbiAgc3BpbjogMCxcbiAgZHJpZnQ6IDAsXG4gIHB1bHNlOiAwLFxuICBzaGltbWVyOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX0ZYOiBHbG9iYWxGeCA9IHtcbiAgYmdNb2RlOiAwLFxuICBiZ0E6IFwiIzA2MDYwOFwiLFxuICBiZ0I6IFwiIzFhMTIxNlwiLFxuICBmZWVkYmFjazogMCxcbiAgdHJhaWxzOiAwLjYsXG4gIGZiWm9vbTogMCxcbiAgZmJSb3RhdGU6IDAsXG4gIGZiSHVlOiAwLFxuICB3YXJwOiAwLFxuICBzd2lybDogMCxcbiAgcmlwcGxlOiAwLFxuICB6b29tOiAwLFxuICBrYWxlaWRvOiAwLFxuICBtaXJyb3I6IDAsXG4gIGNocm9tYTogMCxcbiAgaHVlT3JiaXQ6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBzb2xhcml6ZTogMCxcbiAgZ3JhaW46IDAsXG4gIHNjYW5saW5lczogMCxcbiAgdmlnbmV0dGU6IDAuMjIsXG4gIHN0cm9iZTogMCxcbiAgc3BlZWQ6IDEsXG4gIGF1ZGlvUmVhY3Q6IDAsXG4gIHBvaW50ZXJGb3JjZTogMC42LFxuICBwb2ludGVyU2l6ZTogMC4zNSxcbiAgcG9pbnRlck1vZGU6IDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBudW0odmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjbGFtcChmaW5pdGUodmFsdWUsIGZhbGxiYWNrKSwgbWluLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVMYXllckZ4KGlucHV0OiBQYXJ0aWFsPExheWVyRng+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0xBWUVSX0ZYO1xuICByZXR1cm4ge1xuICAgIHg6IG51bSh0LngsIGQueCwgLTMsIDMpLFxuICAgIHk6IG51bSh0LnksIGQueSwgLTMsIDMpLFxuICAgIHNjYWxlOiBudW0odC5zY2FsZSwgZC5zY2FsZSwgMC4wNSwgNiksXG4gICAgcm90YXRpb246IG51bSh0LnJvdGF0aW9uLCBkLnJvdGF0aW9uLCAtMzYwMCwgMzYwMCksXG4gICAgb3BhY2l0eTogbnVtKHQub3BhY2l0eSwgZC5vcGFjaXR5LCAwLCAxKSxcbiAgICBibGVuZDogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZCBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmQgYXMgQmxlbmRNb2RlKSA6IFwibm9ybWFsXCIsXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIHRpbGU6IG51bSh0LnRpbGUsIGQudGlsZSwgMCwgMiksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAga2FsZWlkbzogbnVtKHQua2FsZWlkbywgZC5rYWxlaWRvLCAwLCAxKSxcbiAgICBwaXhlbGF0ZTogbnVtKHQucGl4ZWxhdGUsIGQucGl4ZWxhdGUsIDAsIDEpLFxuICAgIGJ1bGdlOiBudW0odC5idWxnZSwgZC5idWxnZSwgLTEsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgaHVlOiBudW0odC5odWUsIGQuaHVlLCAwLCAxKSxcbiAgICBzYXR1cmF0aW9uOiBudW0odC5zYXR1cmF0aW9uLCBkLnNhdHVyYXRpb24sIDAsIDIpLFxuICAgIGNvbnRyYXN0OiBudW0odC5jb250cmFzdCwgZC5jb250cmFzdCwgMCwgMiksXG4gICAgYnJpZ2h0bmVzczogbnVtKHQuYnJpZ2h0bmVzcywgZC5icmlnaHRuZXNzLCAwLCAyKSxcbiAgICBpbnZlcnQ6IG51bSh0LmludmVydCwgZC5pbnZlcnQsIDAsIDEpLFxuICAgIHBvc3Rlcml6ZTogbnVtKHQucG9zdGVyaXplLCBkLnBvc3Rlcml6ZSwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBlZGdlczogbnVtKHQuZWRnZXMsIGQuZWRnZXMsIDAsIDEpLFxuICAgIHRpbnRBbW91bnQ6IG51bSh0LnRpbnRBbW91bnQsIGQudGludEFtb3VudCwgMCwgMSksXG4gICAgdGludENvbG9yOiBjb2xvcih0LnRpbnRDb2xvciwgZC50aW50Q29sb3IpLFxuICAgIHNwaW46IG51bSh0LnNwaW4sIGQuc3BpbiwgLTEsIDEpLFxuICAgIGRyaWZ0OiBudW0odC5kcmlmdCwgZC5kcmlmdCwgMCwgMSksXG4gICAgcHVsc2U6IG51bSh0LnB1bHNlLCBkLnB1bHNlLCAwLCAxKSxcbiAgICBzaGltbWVyOiBudW0odC5zaGltbWVyLCBkLnNoaW1tZXIsIDAsIDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVHbG9iYWxGeChpbnB1dDogUGFydGlhbDxHbG9iYWxGeD4gfCBudWxsIHwgdW5kZWZpbmVkKTogR2xvYmFsRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0dMT0JBTF9GWDtcbiAgcmV0dXJuIHtcbiAgICBiZ01vZGU6IG51bSh0LmJnTW9kZSwgZC5iZ01vZGUsIDAsIEJHX01PREVTLmxlbmd0aCAtIDEpLFxuICAgIGJnQTogY29sb3IodC5iZ0EsIGQuYmdBKSxcbiAgICBiZ0I6IGNvbG9yKHQuYmdCLCBkLmJnQiksXG4gICAgZmVlZGJhY2s6IG51bSh0LmZlZWRiYWNrLCBkLmZlZWRiYWNrLCAwLCAxKSxcbiAgICB0cmFpbHM6IG51bSh0LnRyYWlscywgZC50cmFpbHMsIDAsIDEpLFxuICAgIGZiWm9vbTogbnVtKHQuZmJab29tLCBkLmZiWm9vbSwgLTEsIDEpLFxuICAgIGZiUm90YXRlOiBudW0odC5mYlJvdGF0ZSwgZC5mYlJvdGF0ZSwgLTEsIDEpLFxuICAgIGZiSHVlOiBudW0odC5mYkh1ZSwgZC5mYkh1ZSwgMCwgMSksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAgem9vbTogbnVtKHQuem9vbSwgZC56b29tLCAwLCAxKSxcbiAgICBrYWxlaWRvOiBudW0odC5rYWxlaWRvLCBkLmthbGVpZG8sIDAsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBodWVPcmJpdDogbnVtKHQuaHVlT3JiaXQsIGQuaHVlT3JiaXQsIDAsIDEpLFxuICAgIHNhdHVyYXRpb246IG51bSh0LnNhdHVyYXRpb24sIGQuc2F0dXJhdGlvbiwgMCwgMiksXG4gICAgY29udHJhc3Q6IG51bSh0LmNvbnRyYXN0LCBkLmNvbnRyYXN0LCAwLCAyKSxcbiAgICBzb2xhcml6ZTogbnVtKHQuc29sYXJpemUsIGQuc29sYXJpemUsIDAsIDEpLFxuICAgIGdyYWluOiBudW0odC5ncmFpbiwgZC5ncmFpbiwgMCwgMSksXG4gICAgc2NhbmxpbmVzOiBudW0odC5zY2FubGluZXMsIGQuc2NhbmxpbmVzLCAwLCAxKSxcbiAgICB2aWduZXR0ZTogbnVtKHQudmlnbmV0dGUsIGQudmlnbmV0dGUsIDAsIDEpLFxuICAgIHN0cm9iZTogbnVtKHQuc3Ryb2JlLCBkLnN0cm9iZSwgMCwgMSksXG4gICAgc3BlZWQ6IG51bSh0LnNwZWVkLCBkLnNwZWVkLCAwLCAyKSxcbiAgICBhdWRpb1JlYWN0OiBudW0odC5hdWRpb1JlYWN0LCBkLmF1ZGlvUmVhY3QsIDAsIDEpLFxuICAgIHBvaW50ZXJGb3JjZTogbnVtKHQucG9pbnRlckZvcmNlLCBkLnBvaW50ZXJGb3JjZSwgMCwgMSksXG4gICAgcG9pbnRlclNpemU6IG51bSh0LnBvaW50ZXJTaXplLCBkLnBvaW50ZXJTaXplLCAwLjAyLCAxKSxcbiAgICBwb2ludGVyTW9kZTogbnVtKHQucG9pbnRlck1vZGUsIGQucG9pbnRlck1vZGUsIDAsIFBPSU5URVJfTU9ERVMubGVuZ3RoIC0gMSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU2NlbmUoaW5wdXQ6IHVua25vd24pOiBTY2VuZSB7XG4gIGNvbnN0IHJhdyA9IChpbnB1dCA/PyB7fSkgYXMgUGFydGlhbDxTY2VuZT47XG4gIGNvbnN0IGxheWVyc1JhdyA9IEFycmF5LmlzQXJyYXkocmF3LmxheWVycykgPyByYXcubGF5ZXJzLnNsaWNlKDAsIE1BWF9MQVlFUlMpIDogW107XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiByYXcubmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJhdy5uYW1lIDogXCJcIiwgXCJVbnRpdGxlZFwiKSxcbiAgICBsYXllcnM6IGxheWVyc1Jhd1xuICAgICAgLmZpbHRlcigobCk6IGwgaXMgU2NlbmVMYXllciA9PiAhIWwgJiYgdHlwZW9mIGwgPT09IFwib2JqZWN0XCIpXG4gICAgICAubWFwKChsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHR5cGVvZiBsLmlkID09PSBcInN0cmluZ1wiICYmIGwuaWQgPyBsLmlkLnNsaWNlKDAsIDQwKSA6IGBsYXllci0ke2luZGV4fWAsXG4gICAgICAgIGltYWdlSWQ6IHR5cGVvZiBsLmltYWdlSWQgPT09IFwic3RyaW5nXCIgPyBsLmltYWdlSWQuc2xpY2UoMCwgNjApIDogXCJcIixcbiAgICAgICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiBsLm5hbWUgPT09IFwic3RyaW5nXCIgPyBsLm5hbWUgOiBcIlwiLCBcIkxheWVyXCIpLFxuICAgICAgICBtZWRpYUtpbmQ6IE1FRElBX0tJTkRTLmluY2x1ZGVzKGwubWVkaWFLaW5kIGFzIE1lZGlhS2luZClcbiAgICAgICAgICA/IChsLm1lZGlhS2luZCBhcyBNZWRpYUtpbmQpXG4gICAgICAgICAgOiBcImltYWdlXCIsXG4gICAgICAgIGZ4OiBzYW5pdGl6ZUxheWVyRngobC5meCksXG4gICAgICB9KSksXG4gICAgZ2xvYmFsOiBzYW5pdGl6ZUdsb2JhbEZ4KHJhdy5nbG9iYWwpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU2NlbmUoc2NlbmU6IFNjZW5lKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjZW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNjZW5lKHJhdzogc3RyaW5nKTogU2NlbmUge1xuICB0cnkge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKEpTT04ucGFyc2UocmF3KSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKG51bGwpO1xuICB9XG59XG4iLCAiLy8gTmFtZWQgZ2xvYmFsLUZYIGxvb2tzLCBwbHVzIHJhbmRvbWl6ZSAvIG11dGF0ZSBoZWxwZXJzIGZvciBib3RoIHRoZSB3b3JsZFxuLy8gcGlwZWxpbmUgYW5kIHBlci1sYXllciBlZmZlY3Qgc3RhY2tzLlxuXG5pbXBvcnQge1xuICBCTEVORF9NT0RFUyxcbiAgREVGQVVMVF9HTE9CQUxfRlgsXG4gIERFRkFVTFRfTEFZRVJfRlgsXG4gIGNsYW1wLFxuICB0eXBlIEJsZW5kTW9kZSxcbiAgdHlwZSBHbG9iYWxGeCxcbiAgdHlwZSBMYXllckZ4LFxufSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIGxvb2sob3ZlcnJpZGVzOiBQYXJ0aWFsPEdsb2JhbEZ4Pik6IEdsb2JhbEZ4IHtcbiAgcmV0dXJuIHsgLi4uREVGQVVMVF9HTE9CQUxfRlgsIC4uLm92ZXJyaWRlcyB9O1xufVxuXG5leHBvcnQgY29uc3QgV09STERfUFJFU0VUUzogeyBuYW1lOiBzdHJpbmc7IGNvZGU6IHN0cmluZzsgZ2xvYmFsOiBHbG9iYWxGeCB9W10gPSBbXG4gIHsgbmFtZTogXCJDbGVhbiBzaWduYWxcIiwgY29kZTogXCIwMFwiLCBnbG9iYWw6IGxvb2soe30pIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxpcXVpZCBjaHJvbWVcIixcbiAgICBjb2RlOiBcIjAxXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuNSwgc3dpcmw6IDAuMzQsIGNocm9tYTogMC4zLCBodWVPcmJpdDogMC4yNCwgc2F0dXJhdGlvbjogMS4yLFxuICAgICAgY29udHJhc3Q6IDEuMTIsIGZlZWRiYWNrOiAwLjQyLCB0cmFpbHM6IDAuNzIsIGZiWm9vbTogMC4xMiwgZ3JhaW46IDAuMSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRWNobyB0dW5uZWxcIixcbiAgICBjb2RlOiBcIjAyXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHpvb206IDAuNCwgZmVlZGJhY2s6IDAuODIsIHRyYWlsczogMC45LCBmYlpvb206IDAuMzQsIGZiUm90YXRlOiAwLjE0LFxuICAgICAgZmJIdWU6IDAuMTIsIGNocm9tYTogMC4yOCwgdmlnbmV0dGU6IDAuNCwgaHVlT3JiaXQ6IDAuMTYsIGNvbnRyYXN0OiAxLjA4LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYWxlaWRvIGNhdGhlZHJhbFwiLFxuICAgIGNvZGU6IFwiMDNcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAga2FsZWlkbzogMC43MiwgbWlycm9yOiAwLjMsIGNocm9tYTogMC4zNCwgaHVlT3JiaXQ6IDAuNCwgc2F0dXJhdGlvbjogMS41LFxuICAgICAgY29udHJhc3Q6IDEuMSwgZmVlZGJhY2s6IDAuMjYsIHRyYWlsczogMC42LCByaXBwbGU6IDAuMTgsIHZpZ25ldHRlOiAwLjMsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZIUyBzZWFuY2VcIixcbiAgICBjb2RlOiBcIjA0XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHNjYW5saW5lczogMC42NiwgZ3JhaW46IDAuNSwgY2hyb21hOiAwLjYyLCBmZWVkYmFjazogMC40MixcbiAgICAgIHRyYWlsczogMC42OCwgc2F0dXJhdGlvbjogMC44OCwgY29udHJhc3Q6IDEuMjIsIHZpZ25ldHRlOiAwLjQ4LCBzdHJvYmU6IDAuMDgsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFjaWQgYmF0aFwiLFxuICAgIGNvZGU6IFwiMDVcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgd2FycDogMC42OCwgcmlwcGxlOiAwLjQsIGh1ZU9yYml0OiAwLjcsIHNhdHVyYXRpb246IDEuODUsIHNvbGFyaXplOiAwLjUsXG4gICAgICBjb250cmFzdDogMS4xNSwgZmVlZGJhY2s6IDAuNSwgdHJhaWxzOiAwLjc4LCBmYkh1ZTogMC4zLCBzcGVlZDogMS4yLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHaG9zdCB0cmFpbHNcIixcbiAgICBjb2RlOiBcIjA2XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGZlZWRiYWNrOiAwLjkyLCB0cmFpbHM6IDAuOTcsIGZiWm9vbTogMC4wNiwgZmJSb3RhdGU6IC0wLjA1LCBzYXR1cmF0aW9uOiAwLjYsXG4gICAgICBjb250cmFzdDogMS4xNCwgZ3JhaW46IDAuMiwgdmlnbmV0dGU6IDAuNSwgc3BlZWQ6IDAuNSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmVvbiBhdXRvcHN5XCIsXG4gICAgY29kZTogXCIwN1wiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBjaHJvbWE6IDAuOCwgc29sYXJpemU6IDAuMjgsIGNvbnRyYXN0OiAxLjM1LCBzYXR1cmF0aW9uOiAxLjYsXG4gICAgICBrYWxlaWRvOiAwLjE4LCBodWVPcmJpdDogMC4zMiwgZmVlZGJhY2s6IDAuMywgdHJhaWxzOiAwLjYyLCBzY2FubGluZXM6IDAuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJpc20gc3Rvcm1cIixcbiAgICBjb2RlOiBcIjA4XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuMzQsIHJpcHBsZTogMC4yOCwgY2hyb21hOiAwLjkyLCBmZWVkYmFjazogMC41NiwgdHJhaWxzOiAwLjgsXG4gICAgICBmYlpvb206IC0wLjE0LCBncmFpbjogMC4yNCwgc3BlZWQ6IDEuNSwgc3Ryb2JlOiAwLjE2LCBjb250cmFzdDogMS4yLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTb2xhciBmbGFyZVwiLFxuICAgIGNvZGU6IFwiMDlcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgem9vbTogMC4yNiwgc3dpcmw6IDAuNSwgcmlwcGxlOiAwLjM0LCBodWVPcmJpdDogMC41LCBzYXR1cmF0aW9uOiAxLjcsXG4gICAgICBzb2xhcml6ZTogMC43MiwgZmVlZGJhY2s6IDAuNDQsIHRyYWlsczogMC43LCBmYkh1ZTogMC4yLCB2aWduZXR0ZTogMC4zNixcbiAgICAgIHN0cm9iZTogMC4xLCBzcGVlZDogMC45LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZWVwIHZvaWRcIixcbiAgICBjb2RlOiBcIjEwXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGJnTW9kZTogMiwgbWlycm9yOiAwLjUsIHdhcnA6IDAuMjQsIGNocm9tYTogMC4yLCBzYXR1cmF0aW9uOiAwLjg1LFxuICAgICAgY29udHJhc3Q6IDEuMjUsIGZlZWRiYWNrOiAwLjY4LCB0cmFpbHM6IDAuODgsIGZiWm9vbTogMC4yLCB2aWduZXR0ZTogMC42LFxuICAgICAgaHVlT3JiaXQ6IDAuMSwgc3BlZWQ6IDAuNixcbiAgICB9KSxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIHJhbmQobWluID0gMCwgbWF4ID0gMSk6IG51bWJlciB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIGNoYW5jZShwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCBwO1xufVxuXG50eXBlIEVmZmVjdFBpY2sgPSB7IGtleTogc3RyaW5nOyB3ZWlnaHQ6IG51bWJlcjsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIHBpY2tEaXN0aW5jdChpdGVtczogRWZmZWN0UGlja1tdLCBjb3VudDogbnVtYmVyKTogRWZmZWN0UGlja1tdIHtcbiAgY29uc3QgcG9vbCA9IGl0ZW1zLnNsaWNlKCk7XG4gIGNvbnN0IHBpY2tzOiBFZmZlY3RQaWNrW10gPSBbXTtcbiAgd2hpbGUgKHBpY2tzLmxlbmd0aCA8IGNvdW50ICYmIHBvb2wubGVuZ3RoKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcG9vbCkgdG90YWwgKz0gaXRlbS53ZWlnaHQ7XG4gICAgbGV0IHJvbGwgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKDsgaW5kZXggPCBwb29sLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcm9sbCAtPSBwb29sW2luZGV4XS53ZWlnaHQ7XG4gICAgICBpZiAocm9sbCA8PSAwKSBicmVhaztcbiAgICB9XG4gICAgcGlja3MucHVzaChwb29sLnNwbGljZShNYXRoLm1pbihpbmRleCwgcG9vbC5sZW5ndGggLSAxKSwgMSlbMF0pO1xuICB9XG4gIHJldHVybiBwaWNrcztcbn1cblxuLy8gS2FsZWlkby9yaXBwbGUgYXJlIHdlaWdodGVkIGxvdzogc3ltbWV0cmljIG1hbmRhbGFzIGFsbCBsb29rIGFsaWtlLCBzbyBhXG4vLyBjaGFvcyByb2xsIHNob3VsZCB1c3VhbGx5IGJlIGJ1aWx0IG9uIHdhcnAgLyBzd2lybCAvIHpvb20gLyBtaXJyb3IgaW5zdGVhZC5cbmNvbnN0IFdPUkxEX1NQQUNFX1BPT0w6IEVmZmVjdFBpY2tbXSA9IFtcbiAgeyBrZXk6IFwid2FycFwiLCB3ZWlnaHQ6IDMuMCwgbWluOiAwLjMsIG1heDogMC45IH0sXG4gIHsga2V5OiBcInN3aXJsXCIsIHdlaWdodDogMi40LCBtaW46IDAuMjUsIG1heDogMC44IH0sXG4gIHsga2V5OiBcInpvb21cIiwgd2VpZ2h0OiAyLjAsIG1pbjogMC4yLCBtYXg6IDAuNiB9LFxuICB7IGtleTogXCJtaXJyb3JcIiwgd2VpZ2h0OiAxLjYsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuICB7IGtleTogXCJyaXBwbGVcIiwgd2VpZ2h0OiAwLjksIG1pbjogMC4xMiwgbWF4OiAwLjQgfSxcbiAgeyBrZXk6IFwia2FsZWlkb1wiLCB3ZWlnaHQ6IDAuNiwgbWluOiAwLjIsIG1heDogMC43IH0sXG5dO1xuXG4vKipcbiAqIFN0cnVjdHVyZWQgY2hhb3M6IG9uZSBzdHJvbmcgc3BhY2UgZWZmZWN0IChwbHVzIHNvbWV0aW1lcyBhIHNvZnQgc2Vjb25kKSxcbiAqIGFuIG9wdGlvbmFsIGZlZWRiYWNrIHJlY2lwZSwgYSBjb2xvciBtb3ZlIGFuZCBsaWdodCB0ZXh0dXJlIFx1MjAxNCBldmVyeXRoaW5nXG4gKiBlbHNlIHN0YXlzIHplcm8gc28gZWFjaCByb2xsIGhhcyBhIGRpc3RpbmN0IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUdsb2JhbEZ4KGJhc2U6IEdsb2JhbEZ4KTogR2xvYmFsRngge1xuICBjb25zdCBuZXh0OiBHbG9iYWxGeCA9IHtcbiAgICAuLi5ERUZBVUxUX0dMT0JBTF9GWCxcbiAgICBiZ0E6IGJhc2UuYmdBLFxuICAgIGJnQjogYmFzZS5iZ0IsXG4gICAgYXVkaW9SZWFjdDogYmFzZS5hdWRpb1JlYWN0LFxuICAgIHBvaW50ZXJGb3JjZTogYmFzZS5wb2ludGVyRm9yY2UsXG4gICAgcG9pbnRlclNpemU6IGJhc2UucG9pbnRlclNpemUsXG4gICAgcG9pbnRlck1vZGU6IE1hdGguZmxvb3IocmFuZCgwLCA0KSksXG4gICAgYmdNb2RlOiBNYXRoLmZsb29yKHJhbmQoMCwgNCkpLFxuICB9O1xuXG4gIGNvbnN0IHNwYWNlUGlja3MgPSBwaWNrRGlzdGluY3QoV09STERfU1BBQ0VfUE9PTCwgY2hhbmNlKDAuNSkgPyAyIDogMSk7XG4gIHNwYWNlUGlja3MuZm9yRWFjaCgocGljaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdHJlbmd0aCA9IHJhbmQocGljay5taW4sIHBpY2subWF4KSAqIChpbmRleCA9PT0gMCA/IDEgOiAwLjUpO1xuICAgIChuZXh0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbcGljay5rZXldID0gc3RyZW5ndGg7XG4gIH0pO1xuXG4gIGlmIChjaGFuY2UoMC41NSkpIHtcbiAgICBuZXh0LmZlZWRiYWNrID0gcmFuZCgwLjMsIDAuODUpO1xuICAgIG5leHQudHJhaWxzID0gcmFuZCgwLjUsIDAuOTUpO1xuICAgIGlmIChjaGFuY2UoMC42KSkgbmV4dC5mYlpvb20gPSByYW5kKC0wLjM1LCAwLjM1KTtcbiAgICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZmJSb3RhdGUgPSByYW5kKC0wLjI1LCAwLjI1KTtcbiAgICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZmJIdWUgPSByYW5kKDAuMDUsIDAuNCk7XG4gIH1cblxuICBpZiAoY2hhbmNlKDAuNSkpIG5leHQuaHVlT3JiaXQgPSByYW5kKDAuMSwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjUpKSBuZXh0LmNocm9tYSA9IHJhbmQoMC4xLCAwLjcpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnNvbGFyaXplID0gcmFuZCgwLjIsIDAuNyk7XG4gIG5leHQuc2F0dXJhdGlvbiA9IHJhbmQoMC44NSwgMS42KTtcbiAgbmV4dC5jb250cmFzdCA9IHJhbmQoMC45NSwgMS4zKTtcblxuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LmdyYWluID0gcmFuZCgwLjA1LCAwLjQpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnNjYW5saW5lcyA9IHJhbmQoMC4xLCAwLjUpO1xuICBpZiAoY2hhbmNlKDAuMTIpKSBuZXh0LnN0cm9iZSA9IHJhbmQoMC4wNSwgMC4zKTtcbiAgbmV4dC52aWduZXR0ZSA9IHJhbmQoMC4xLCAwLjUpO1xuICBuZXh0LnNwZWVkID0gcmFuZCgwLjQ1LCAxLjUpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZUdsb2JhbEZ4KGN1cnJlbnQ6IEdsb2JhbEZ4KTogR2xvYmFsRngge1xuICBjb25zdCBuZXh0ID0geyAuLi5jdXJyZW50IH07XG4gIGNvbnN0IGtleXM6IChrZXlvZiBHbG9iYWxGeClbXSA9IFtcbiAgICBcImZlZWRiYWNrXCIsIFwidHJhaWxzXCIsIFwiZmJab29tXCIsIFwiZmJSb3RhdGVcIiwgXCJmYkh1ZVwiLCBcIndhcnBcIiwgXCJzd2lybFwiLFxuICAgIFwicmlwcGxlXCIsIFwiem9vbVwiLCBcImthbGVpZG9cIiwgXCJtaXJyb3JcIiwgXCJjaHJvbWFcIiwgXCJodWVPcmJpdFwiLCBcInNhdHVyYXRpb25cIixcbiAgICBcImNvbnRyYXN0XCIsIFwic29sYXJpemVcIiwgXCJncmFpblwiLCBcInNjYW5saW5lc1wiLCBcInZpZ25ldHRlXCIsXG4gICAgXCJzdHJvYmVcIiwgXCJzcGVlZFwiLFxuICBdO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXh0W2tleV0gYXMgbnVtYmVyO1xuICAgIGNvbnN0IG1heCA9IGtleSA9PT0gXCJzYXR1cmF0aW9uXCIgfHwga2V5ID09PSBcImNvbnRyYXN0XCIgfHwga2V5ID09PSBcInNwZWVkXCIgPyAyIDogMTtcbiAgICBjb25zdCBtaW4gPSBrZXkgPT09IFwiZmJab29tXCIgfHwga2V5ID09PSBcImZiUm90YXRlXCIgPyAtMSA6IDA7XG4gICAgKG5leHRba2V5XSBhcyBudW1iZXIpID0gY2xhbXAodmFsdWUgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjI0LCBtaW4sIG1heCk7XG4gIH1cbiAgbmV4dC5mZWVkYmFjayA9IE1hdGgubWluKG5leHQuZmVlZGJhY2ssIDAuOSk7XG4gIHJldHVybiBuZXh0O1xufVxuXG5jb25zdCBDSEFPU19CTEVORFM6IEJsZW5kTW9kZVtdID0gW1wibm9ybWFsXCIsIFwiYWRkXCIsIFwic2NyZWVuXCIsIFwib3ZlcmxheVwiLCBcImRpZmZlcmVuY2VcIiwgXCJsaWdodGVuXCJdO1xuXG5jb25zdCBMQVlFUl9ESVNUT1JUX1BPT0w6IEVmZmVjdFBpY2tbXSA9IFtcbiAgeyBrZXk6IFwid2FycFwiLCB3ZWlnaHQ6IDMuMCwgbWluOiAwLjIsIG1heDogMC44IH0sXG4gIHsga2V5OiBcInN3aXJsXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwiYnVsZ2VcIiwgd2VpZ2h0OiAyLjAsIG1pbjogMC4zLCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJwaXhlbGF0ZVwiLCB3ZWlnaHQ6IDEuMywgbWluOiAwLjE1LCBtYXg6IDAuNiB9LFxuICB7IGtleTogXCJtaXJyb3JcIiwgd2VpZ2h0OiAxLjIsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuICB7IGtleTogXCJyaXBwbGVcIiwgd2VpZ2h0OiAwLjksIG1pbjogMC4xLCBtYXg6IDAuNDUgfSxcbiAgeyBrZXk6IFwia2FsZWlkb1wiLCB3ZWlnaHQ6IDAuNSwgbWluOiAwLjI1LCBtYXg6IDAuNzUgfSxcbl07XG5cbi8qKlxuICogUmFuZG9taXplIGEgbGF5ZXIncyBlZmZlY3Qgc3RhY2sgd2hpbGUga2VlcGluZyBpdHMgcGxhY2VtZW50ICsgdmlzaWJpbGl0eS5cbiAqIFNhbWUgc3RydWN0dXJlIGFzIHRoZSB3b3JsZCByb2xsOiAxLTIgZGlzdG9ydGlvbnMsIGEgY29sb3IgbW92ZSwgYSBiaXQgb2ZcbiAqIG1vdGlvbiBcdTIwMTQgbm90IGV2ZXJ5IGtub2IgYXQgb25jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUxheWVyRngoY3VycmVudDogTGF5ZXJGeCk6IExheWVyRngge1xuICBjb25zdCBuZXh0OiBMYXllckZ4ID0ge1xuICAgIC4uLnJlc2V0TGF5ZXJGeEVmZmVjdHMoY3VycmVudCksXG4gICAgYmxlbmQ6IGNoYW5jZSgwLjQpID8gQ0hBT1NfQkxFTkRTW01hdGguZmxvb3IocmFuZCgwLCBDSEFPU19CTEVORFMubGVuZ3RoKSldIDogY3VycmVudC5ibGVuZCxcbiAgfTtcblxuICBjb25zdCBkaXN0b3J0UGlja3MgPSBwaWNrRGlzdGluY3QoTEFZRVJfRElTVE9SVF9QT09MLCBjaGFuY2UoMC40NSkgPyAyIDogMSk7XG4gIGRpc3RvcnRQaWNrcy5mb3JFYWNoKChwaWNrLCBpbmRleCkgPT4ge1xuICAgIGxldCBzdHJlbmd0aCA9IHJhbmQocGljay5taW4sIHBpY2subWF4KSAqIChpbmRleCA9PT0gMCA/IDEgOiAwLjU1KTtcbiAgICBpZiAocGljay5rZXkgPT09IFwiYnVsZ2VcIiAmJiBjaGFuY2UoMC41KSkgc3RyZW5ndGggPSAtc3RyZW5ndGg7XG4gICAgKG5leHQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KVtwaWNrLmtleV0gPSBzdHJlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKGNoYW5jZSgwLjYpKSBuZXh0Lmh1ZSA9IE1hdGgucmFuZG9tKCk7XG4gIG5leHQuc2F0dXJhdGlvbiA9IHJhbmQoMC43NSwgMS42NSk7XG4gIG5leHQuY29udHJhc3QgPSByYW5kKDAuOSwgMS4zNSk7XG4gIG5leHQuYnJpZ2h0bmVzcyA9IHJhbmQoMC45LCAxLjIpO1xuICBpZiAoY2hhbmNlKDAuMjIpKSBuZXh0LnBvc3Rlcml6ZSA9IHJhbmQoMC4yLCAwLjcpO1xuICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuY2hyb21hID0gcmFuZCgwLjEsIDAuNik7XG4gIGlmIChjaGFuY2UoMC4xOCkpIG5leHQuZWRnZXMgPSByYW5kKDAuMiwgMC44KTtcbiAgaWYgKGNoYW5jZSgwLjA4KSkgbmV4dC5pbnZlcnQgPSByYW5kKDAuNSwgMSk7XG4gIGlmIChjaGFuY2UoMC4xNSkpIG5leHQudGludEFtb3VudCA9IHJhbmQoMC4yLCAwLjYpO1xuXG4gIGlmIChjaGFuY2UoMC4zNSkpIG5leHQuc3BpbiA9IHJhbmQoMC4wNSwgMC40KSAqIChjaGFuY2UoMC41KSA/IC0xIDogMSk7XG4gIGlmIChjaGFuY2UoMC40KSkgbmV4dC5kcmlmdCA9IHJhbmQoMC4xLCAwLjUpO1xuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LnB1bHNlID0gcmFuZCgwLjEsIDAuNik7XG4gIGlmIChjaGFuY2UoMC40NSkpIG5leHQuc2hpbW1lciA9IHJhbmQoMC4yLCAwLjgpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TGF5ZXJGeEVmZmVjdHMoY3VycmVudDogTGF5ZXJGeCk6IExheWVyRngge1xuICByZXR1cm4ge1xuICAgIC4uLkRFRkFVTFRfTEFZRVJfRlgsXG4gICAgeDogY3VycmVudC54LFxuICAgIHk6IGN1cnJlbnQueSxcbiAgICBzY2FsZTogY3VycmVudC5zY2FsZSxcbiAgICByb3RhdGlvbjogY3VycmVudC5yb3RhdGlvbixcbiAgICBvcGFjaXR5OiBjdXJyZW50Lm9wYWNpdHksXG4gICAgYmxlbmQ6IGN1cnJlbnQuYmxlbmQsXG4gICAgdmlzaWJsZTogY3VycmVudC52aXNpYmxlLFxuICAgIHRpbGU6IGN1cnJlbnQudGlsZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsZW5kSW5kZXgoYmxlbmQ6IEJsZW5kTW9kZSk6IG51bWJlciB7XG4gIGNvbnN0IGluZGV4ID0gQkxFTkRfTU9ERVMuaW5kZXhPZihibGVuZCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyAwIDogaW5kZXg7XG59XG4iLCAiLy8gV2ViR0wgY29tcG9zaXRvci4gUGlwZWxpbmUgcGVyIGZyYW1lOlxuLy8gICBiYWNrZ3JvdW5kIHNoYWRlciAtPiBzY2VuZSBGQk9cbi8vICAgZm9yIGVhY2ggbGF5ZXI6IFx1MDBGQ2Jlci1zaGFkZXIgKGRpc3RvcnQgKyBjb2xvciArIGJsZW5kIG92ZXIgZGVzdCkgLT4gcGluZy1wb25nIHNjZW5lIEZCT1xuLy8gICBwb3N0IHNoYWRlciAoc3BhY2Ugd2FycCwgZmVlZGJhY2sgZWNobywgZ3JhZGUpIC0+IHBpbmctcG9uZyBwb3N0IEZCT1xuLy8gICBjb3B5IHBvc3QgRkJPIC0+IHNjcmVlblxuLy8gVGhlIHBvc3QgcGluZy1wb25nIGRvdWJsZXMgYXMgdGhlIGZlZWRiYWNrIGJ1ZmZlciwgd2hpY2ggaXMgd2hhdCBtYWtlc1xuLy8gdHJhaWxzIC8gZWNoby10dW5uZWwgZWZmZWN0cyBwb3NzaWJsZS5cblxuZXhwb3J0IHR5cGUgUG9pbnRlclN0YXRlID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHZlbG9jaXR5WTogbnVtYmVyO1xuICBkb3duOiBib29sZWFuO1xuICBhY3RpdmU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclJlbmRlclN0YXRlID0ge1xuICBpZDogc3RyaW5nO1xuICBpbWFnZUlkOiBzdHJpbmc7XG4gIHBvczogW251bWJlciwgbnVtYmVyXTtcbiAgZXh0OiBbbnVtYmVyLCBudW1iZXJdO1xuICByb3Q6IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogbnVtYmVyO1xuICB0aWxlOiBudW1iZXI7XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIGh1ZTogbnVtYmVyO1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludDogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICB0aW50QW1vdW50OiBudW1iZXI7XG4gIHNoaW1tZXI6IG51bWJlcjtcbiAgc2VlZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgR2xvYmFsUmVuZGVyU3RhdGUgPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgYmdCOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICBmYlpvb206IG51bWJlcjtcbiAgZmJSb3RhdGU6IG51bWJlcjtcbiAgZmJIdWU6IG51bWJlcjtcbiAgd2FycDogbnVtYmVyO1xuICBzd2lybDogbnVtYmVyO1xuICByaXBwbGU6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgaHVlT3JiaXQ6IG51bWJlcjtcbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICBjb250cmFzdDogbnVtYmVyO1xuICBzb2xhcml6ZTogbnVtYmVyO1xuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIGF1ZGlvUmVhY3Q6IG51bWJlcjtcbiAgcG9pbnRlckZvcmNlOiBudW1iZXI7XG4gIHBvaW50ZXJTaXplOiBudW1iZXI7XG4gIHBvaW50ZXJNb2RlOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGcmFtZVN0YXRlID0ge1xuICB0aW1lOiBudW1iZXI7XG4gIGF1ZGlvOiBudW1iZXI7XG4gIHBvaW50ZXI6IFBvaW50ZXJTdGF0ZTtcbiAgbGF5ZXJzOiBMYXllclJlbmRlclN0YXRlW107XG4gIGdsb2JhbDogR2xvYmFsUmVuZGVyU3RhdGU7XG59O1xuXG5leHBvcnQgdHlwZSBFbmdpbmVIYW5kbGUgPSB7XG4gIHJlc2l6ZShjc3NXaWR0aDogbnVtYmVyLCBjc3NIZWlnaHQ6IG51bWJlcik6IHZvaWQ7XG4gIHNldFBpeGVsUmF0aW9DYXAoY2FwOiBudW1iZXIpOiB2b2lkO1xuICBzZXRJbWFnZShpbWFnZUlkOiBzdHJpbmcsIHNvdXJjZTogVGV4SW1hZ2VTb3VyY2UpOiB2b2lkO1xuICByZW1vdmVJbWFnZShpbWFnZUlkOiBzdHJpbmcpOiB2b2lkO1xuICBoYXNJbWFnZShpbWFnZUlkOiBzdHJpbmcpOiBib29sZWFuO1xuICByZW5kZXIoc3RhdGU6IEZyYW1lU3RhdGUpOiB2b2lkO1xuICBjbGVhckZlZWRiYWNrKCk6IHZvaWQ7XG4gIGRlc3Ryb3koKTogdm9pZDtcbn07XG5cbmNvbnN0IFZFUlQgPSBgXG5hdHRyaWJ1dGUgdmVjMiBhX3BvcztcbnZhcnlpbmcgdmVjMiB2X3V2O1xudm9pZCBtYWluKCkge1xuICB2X3V2ID0gYV9wb3MgKiAwLjUgKyAwLjU7XG4gIGdsX1Bvc2l0aW9uID0gdmVjNChhX3BvcywgMC4wLCAxLjApO1xufVxuYDtcblxuY29uc3QgR0xTTF9DT01NT04gPSBgXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5tYXQyIHJvdDIoZmxvYXQgYSkgeyBmbG9hdCBjID0gY29zKGEpOyBmbG9hdCBzID0gc2luKGEpOyByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7IH1cbmZsb2F0IGhhc2gyMSh2ZWMyIHApIHsgcmV0dXJuIGZyYWN0KHNpbihkb3QocCwgdmVjMigxMjcuMSwgMzExLjcpKSkgKiA0Mzc1OC41NDUzMTIzKTsgfVxuZmxvYXQgdm5vaXNlKHZlYzIgcCkge1xuICB2ZWMyIGkgPSBmbG9vcihwKTtcbiAgdmVjMiBmID0gZnJhY3QocCk7XG4gIHZlYzIgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICBmbG9hdCBhID0gaGFzaDIxKGkpO1xuICBmbG9hdCBiID0gaGFzaDIxKGkgKyB2ZWMyKDEuMCwgMC4wKSk7XG4gIGZsb2F0IGMgPSBoYXNoMjEoaSArIHZlYzIoMC4wLCAxLjApKTtcbiAgZmxvYXQgZCA9IGhhc2gyMShpICsgdmVjMigxLjAsIDEuMCkpO1xuICByZXR1cm4gbWl4KG1peChhLCBiLCB1LngpLCBtaXgoYywgZCwgdS54KSwgdS55KTtcbn1cbmZsb2F0IGZibSh2ZWMyIHApIHtcbiAgZmxvYXQgdiA9IDAuMDtcbiAgZmxvYXQgYW1wID0gMC41O1xuICBmb3IgKGludCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHYgKz0gYW1wICogdm5vaXNlKHApO1xuICAgIHAgPSBwICogMi4wMyArIHZlYzIoMTcuMywgOS4xKTtcbiAgICBhbXAgKj0gMC41O1xuICB9XG4gIHJldHVybiB2O1xufVxudmVjMyBodWVSb3RhdGUodmVjMyBjb2xvciwgZmxvYXQgYW5nbGUpIHtcbiAgY29uc3QgdmVjMyBrID0gdmVjMygwLjU3NzM1KTtcbiAgZmxvYXQgYyA9IGNvcyhhbmdsZSk7XG4gIGZsb2F0IHMgPSBzaW4oYW5nbGUpO1xuICByZXR1cm4gY29sb3IgKiBjICsgY3Jvc3MoaywgY29sb3IpICogcyArIGsgKiBkb3QoaywgY29sb3IpICogKDEuMCAtIGMpO1xufVxuZmxvYXQgbHVtYSh2ZWMzIGMpIHsgcmV0dXJuIGRvdChjLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTsgfVxuYDtcblxuY29uc3QgQ09QWV9GUkFHID0gYFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4O1xudm9pZCBtYWluKCkgeyBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleHR1cmUyRCh1X3RleCwgdl91dikucmdiLCAxLjApOyB9XG5gO1xuXG5jb25zdCBCR19GUkFHID0gYFxuJHtHTFNMX0NPTU1PTn1cbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfbW9kZTtcbnVuaWZvcm0gdmVjMyB1X2NvbG9yX2E7XG51bmlmb3JtIHZlYzMgdV9jb2xvcl9iO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvO1xuXG52b2lkIG1haW4oKSB7XG4gIHZlYzIgYXNwZWN0ID0gdmVjMih1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCksIDEuMCk7XG4gIHZlYzIgbiA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgdmVjMyBjb2wgPSB1X2NvbG9yX2E7XG4gIGlmICh1X21vZGUgPiAyLjUpIHtcbiAgICAvLyBUdW5uZWwgcmluZ3NcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pICsgMC4xMjtcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCk7XG4gICAgZmxvYXQgd2F2ZSA9IHNpbigyLjQgLyByIC0gdV90aW1lICogMS42ICsgYSAqIDMuMCArIHNpbih1X3RpbWUgKiAwLjQpICogMi4wKTtcbiAgICBjb2wgPSBtaXgodV9jb2xvcl9hLCB1X2NvbG9yX2IsIDAuNSArIDAuNSAqIHdhdmUpO1xuICAgIGNvbCAqPSBzbW9vdGhzdGVwKDAuMCwgMC4yNSwgcikgKiAoMC44NSArIHVfYXVkaW8gKiAwLjUpO1xuICB9IGVsc2UgaWYgKHVfbW9kZSA+IDEuNSkge1xuICAgIC8vIFBsYXNtYVxuICAgIGZsb2F0IHQgPSB1X3RpbWUgKiAwLjI1O1xuICAgIGZsb2F0IGYgPSBmYm0obiAqIDIuMiArIHZlYzIodCwgLXQgKiAwLjcpKTtcbiAgICBmbG9hdCBnID0gZmJtKG4gKiAzLjQgLSB2ZWMyKHQgKiAwLjYsIHQpICsgZiAqIDIuMCk7XG4gICAgY29sID0gbWl4KHVfY29sb3JfYSwgdV9jb2xvcl9iLCBjbGFtcChnICogMS42IC0gMC4yICsgdV9hdWRpbyAqIDAuMywgMC4wLCAxLjApKTtcbiAgICBjb2wgPSBodWVSb3RhdGUoY29sLCBmICogMS4yICsgdCAqIDAuMyk7XG4gIH0gZWxzZSBpZiAodV9tb2RlID4gMC41KSB7XG4gICAgLy8gRHJpZnRpbmcgZ3JhZGllbnRcbiAgICB2ZWMyIGRpciA9IHZlYzIoY29zKHVfdGltZSAqIDAuMTEpLCBzaW4odV90aW1lICogMC4xMSkpO1xuICAgIGZsb2F0IGcgPSBjbGFtcChkb3QobiwgZGlyKSAqIDAuOSArIDAuNSwgMC4wLCAxLjApO1xuICAgIGNvbCA9IG1peCh1X2NvbG9yX2EsIHVfY29sb3JfYiwgZyk7XG4gIH1cbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2wsIDEuMCk7XG59XG5gO1xuXG5jb25zdCBMQVlFUl9GUkFHID0gYFxuJHtHTFNMX0NPTU1PTn1cbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSBzYW1wbGVyMkQgdV9kZXN0O1xudW5pZm9ybSBzYW1wbGVyMkQgdV9pbWc7XG51bmlmb3JtIHZlYzIgdV9yZXM7XG51bmlmb3JtIHZlYzIgdV9pbWdfdGV4ZWw7XG51bmlmb3JtIHZlYzIgdV9wb3M7XG51bmlmb3JtIHZlYzIgdV9leHQ7XG51bmlmb3JtIGZsb2F0IHVfcm90O1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG51bmlmb3JtIGZsb2F0IHVfb3BhY2l0eTtcbnVuaWZvcm0gZmxvYXQgdV9ibGVuZDtcbnVuaWZvcm0gZmxvYXQgdV90aWxlO1xudW5pZm9ybSBmbG9hdCB1X3dhcnA7XG51bmlmb3JtIGZsb2F0IHVfc3dpcmw7XG51bmlmb3JtIGZsb2F0IHVfcmlwcGxlO1xudW5pZm9ybSBmbG9hdCB1X2thbGVpZG87XG51bmlmb3JtIGZsb2F0IHVfcGl4ZWxhdGU7XG51bmlmb3JtIGZsb2F0IHVfYnVsZ2U7XG51bmlmb3JtIGZsb2F0IHVfbWlycm9yO1xudW5pZm9ybSBmbG9hdCB1X2h1ZTtcbnVuaWZvcm0gZmxvYXQgdV9zYXQ7XG51bmlmb3JtIGZsb2F0IHVfY29uO1xudW5pZm9ybSBmbG9hdCB1X2JyaTtcbnVuaWZvcm0gZmxvYXQgdV9pbnZlcnQ7XG51bmlmb3JtIGZsb2F0IHVfcG9zdGVyO1xudW5pZm9ybSBmbG9hdCB1X2Nocm9tYTtcbnVuaWZvcm0gZmxvYXQgdV9lZGdlcztcbnVuaWZvcm0gdmVjMyB1X3RpbnQ7XG51bmlmb3JtIGZsb2F0IHVfdGludF9hbXQ7XG51bmlmb3JtIGZsb2F0IHVfc2hpbW1lcjtcbnVuaWZvcm0gZmxvYXQgdV9zZWVkO1xuXG52ZWMyIHRpbGVVdih2ZWMyIHV2KSB7XG4gIGlmICh1X3RpbGUgPiAxLjUpIHJldHVybiBhYnMoZnJhY3QodXYgKiAwLjUpICogMi4wIC0gMS4wKTtcbiAgaWYgKHVfdGlsZSA+IDAuNSkgcmV0dXJuIGZyYWN0KHV2KTtcbiAgcmV0dXJuIHV2O1xufVxuXG5mbG9hdCB0aWxlTWFzayh2ZWMyIHV2KSB7XG4gIGlmICh1X3RpbGUgPiAwLjUpIHJldHVybiAxLjA7XG4gIHZlYzIgaW5zaWRlID0gc3RlcCh2ZWMyKDAuMCksIHV2KSAqIHN0ZXAodXYsIHZlYzIoMS4wKSk7XG4gIHJldHVybiBpbnNpZGUueCAqIGluc2lkZS55O1xufVxuXG52ZWM0IHRhcCh2ZWMyIHV2KSB7XG4gIHZlYzQgcyA9IHRleHR1cmUyRCh1X2ltZywgY2xhbXAodGlsZVV2KHV2KSwgMC4wLCAxLjApKTtcbiAgcy5hICo9IHRpbGVNYXNrKHV2KTtcbiAgcmV0dXJuIHM7XG59XG5cbnZlYzMgYmxlbmRQaXgodmVjMyBkLCB2ZWMzIHMpIHtcbiAgZmxvYXQgbSA9IHVfYmxlbmQ7XG4gIGlmIChtIDwgMC41KSByZXR1cm4gcztcbiAgaWYgKG0gPCAxLjUpIHJldHVybiBkICsgcztcbiAgaWYgKG0gPCAyLjUpIHJldHVybiAxLjAgLSAoMS4wIC0gZCkgKiAoMS4wIC0gcyk7XG4gIGlmIChtIDwgMy41KSByZXR1cm4gZCAqIHM7XG4gIGlmIChtIDwgNC41KSB7XG4gICAgdmVjMyBsbyA9IDIuMCAqIGQgKiBzO1xuICAgIHZlYzMgaGkgPSAxLjAgLSAyLjAgKiAoMS4wIC0gZCkgKiAoMS4wIC0gcyk7XG4gICAgcmV0dXJuIG1peChsbywgaGksIHN0ZXAoMC41LCBkKSk7XG4gIH1cbiAgaWYgKG0gPCA1LjUpIHJldHVybiBhYnMoZCAtIHMpO1xuICBpZiAobSA8IDYuNSkgcmV0dXJuIG1heChkLCBzKTtcbiAgcmV0dXJuIG1pbihkLCBzKTtcbn1cblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIHAgPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIHZlYzIgcSA9IHJvdDIoLXVfcm90KSAqIChwIC0gdV9wb3MpO1xuICB2ZWMyIGMgPSBxIC8gbWF4KHVfZXh0LCB2ZWMyKDFlLTUpKSAqIDAuNTtcblxuICAvLyBEaXN0b3J0IGluIGFzcGVjdC1ub3JtYWxpemVkIGxheWVyIHNwYWNlIHNvIGNpcmN1bGFyIGVmZmVjdHMgc3RheSBjaXJjdWxhci5cbiAgdmVjMiBsYSA9IHZlYzIobWF4KHVfZXh0LngsIDFlLTUpIC8gbWF4KHVfZXh0LnksIDFlLTUpLCAxLjApO1xuICB2ZWMyIG4gPSBjICogbGE7XG4gIGZsb2F0IHQgPSB1X3RpbWUgKyB1X3NlZWQgKiAzNy4wO1xuICBmbG9hdCBzaGltID0gMS4wICsgdV9zaGltbWVyICogMC42ICogc2luKHQgKiAwLjkpO1xuXG4gIG4gKj0gMS4wICsgdV9idWxnZSAqIGRvdChuLCBuKSAqIDMuMjtcblxuICBpZiAodV9zd2lybCA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKTtcbiAgICBuID0gcm90Mih1X3N3aXJsICogNi4wICogc2hpbSAqIGV4cCgtciAqIDIuNCkpICogbjtcbiAgfVxuICBpZiAodV9rYWxlaWRvID4gMC4wMDMpIHtcbiAgICBmbG9hdCBzZWcgPSBmbG9vcigyLjAgKyB1X2thbGVpZG8gKiAxNC4wKTtcbiAgICBmbG9hdCBzbGljZSA9IDYuMjgzMTg1MyAvIHNlZztcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCkgKyB0ICogdV9zaGltbWVyICogMC4xNTtcbiAgICBhID0gYWJzKG1vZChhLCBzbGljZSkgLSBzbGljZSAqIDAuNSk7XG4gICAgbiA9IGxlbmd0aChuKSAqIHZlYzIoY29zKGEpLCBzaW4oYSkpO1xuICB9XG4gIGlmICh1X3JpcHBsZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDFlLTQ7XG4gICAgbiArPSAobiAvIHIpICogc2luKHIgKiAzNC4wIC0gdCAqIDMuMikgKiB1X3JpcHBsZSAqIDAuMDcgKiBzaGltO1xuICB9XG4gIGlmICh1X3dhcnAgPiAwLjAwMykge1xuICAgIHZlYzIgdyA9IHZlYzIoXG4gICAgICBmYm0obiAqIDMuMCArIHZlYzIodCAqIDAuMjIgKiAoMC4zICsgdV9zaGltbWVyKSwgdV9zZWVkKSksXG4gICAgICBmYm0obiAqIDMuMCArIHZlYzIodV9zZWVkICsgNy4zLCAtdCAqIDAuMTkgKiAoMC4zICsgdV9zaGltbWVyKSkpXG4gICAgKTtcbiAgICBuICs9ICh3IC0gMC41KSAqIHVfd2FycCAqIDAuNTU7XG4gIH1cbiAgbi54ID0gbWl4KG4ueCwgYWJzKG4ueCksIGNsYW1wKHVfbWlycm9yICogMi4wLCAwLjAsIDEuMCkpO1xuICBuLnkgPSBtaXgobi55LCBhYnMobi55KSwgY2xhbXAodV9taXJyb3IgKiAyLjAgLSAxLjAsIDAuMCwgMS4wKSk7XG5cbiAgYyA9IG4gLyBsYTtcbiAgdmVjMiB1diA9IGMgKyAwLjU7XG5cbiAgaWYgKHVfcGl4ZWxhdGUgPiAwLjAwMykge1xuICAgIGZsb2F0IGNlbGxzID0gZmxvb3IobWl4KDIyMC4wLCA2LjAsIHBvdyh1X3BpeGVsYXRlLCAwLjU1KSkpO1xuICAgIHV2ID0gKGZsb29yKHV2ICogY2VsbHMpICsgMC41KSAvIGNlbGxzO1xuICB9XG5cbiAgdmVjMiBjZCA9IGMgKiB1X2Nocm9tYSAqIDAuMTtcbiAgdmVjNCBzYW1wbGVNaWQgPSB0YXAodXYpO1xuICB2ZWMzIGNvbCA9IHZlYzModGFwKHV2ICsgY2QpLnIsIHNhbXBsZU1pZC5nLCB0YXAodXYgLSBjZCkuYik7XG4gIGZsb2F0IGFscGhhID0gc2FtcGxlTWlkLmE7XG5cbiAgaWYgKHVfZWRnZXMgPiAwLjAwMykge1xuICAgIHZlYzIgZSA9IG1heCh1X2ltZ190ZXhlbCAqIDEuNSwgdmVjMigwLjAwMTUpKTtcbiAgICBmbG9hdCBneCA9IGx1bWEodGFwKHV2ICsgdmVjMihlLngsIDAuMCkpLnJnYikgLSBsdW1hKHRhcCh1diAtIHZlYzIoZS54LCAwLjApKS5yZ2IpO1xuICAgIGZsb2F0IGd5ID0gbHVtYSh0YXAodXYgKyB2ZWMyKDAuMCwgZS55KSkucmdiKSAtIGx1bWEodGFwKHV2IC0gdmVjMigwLjAsIGUueSkpLnJnYik7XG4gICAgZmxvYXQgZyA9IGNsYW1wKGxlbmd0aCh2ZWMyKGd4LCBneSkpICogNC4wLCAwLjAsIDEuMCk7XG4gICAgdmVjMyBuZW9uID0gZyAqIChjb2wgKiAxLjYgKyBodWVSb3RhdGUodmVjMygwLjksIDAuMiwgMS4wKSwgdCAqIDAuNSkgKiAwLjcpO1xuICAgIGNvbCA9IG1peChjb2wsIG5lb24sIHVfZWRnZXMpO1xuICB9XG5cbiAgLy8gR3JhZGVcbiAgY29sID0gKGNvbCAtIDAuNSkgKiB1X2NvbiArIDAuNTtcbiAgY29sICo9IHVfYnJpO1xuICBjb2wgPSBtaXgodmVjMyhsdW1hKGNvbCkpLCBjb2wsIHVfc2F0KTtcbiAgY29sID0gaHVlUm90YXRlKGNvbCwgdV9odWUgKiA2LjI4MzE4NTMgKyB1X3NoaW1tZXIgKiAwLjQgKiBzaW4odCAqIDAuNikpO1xuICBpZiAodV9wb3N0ZXIgPiAwLjAwMykge1xuICAgIGZsb2F0IGxldmVscyA9IG1peCgxNC4wLCAyLjAsIHVfcG9zdGVyKTtcbiAgICBjb2wgPSBtaXgoY29sLCBmbG9vcihjb2wgKiBsZXZlbHMgKyAwLjUpIC8gbGV2ZWxzLCBjbGFtcCh1X3Bvc3RlciAqIDQuMCwgMC4wLCAxLjApKTtcbiAgfVxuICBjb2wgPSBtaXgoY29sLCAxLjAgLSBjb2wsIHVfaW52ZXJ0KTtcbiAgY29sID0gbWl4KGNvbCwgdmVjMyhsdW1hKGNvbCkpICogdV90aW50ICogMi4xLCB1X3RpbnRfYW10KTtcbiAgY29sID0gY2xhbXAoY29sLCAwLjAsIDEuNSk7XG5cbiAgdmVjMyBkZXN0ID0gdGV4dHVyZTJEKHVfZGVzdCwgdl91dikucmdiO1xuICB2ZWMzIGJsZW5kZWQgPSBjbGFtcChibGVuZFBpeChkZXN0LCBjb2wpLCAwLjAsIDEuMCk7XG4gIGZsb2F0IGEgPSBjbGFtcChhbHBoYSAqIHVfb3BhY2l0eSAqICgxLjAgKyB1X2F1ZGlvICogMC4wKSwgMC4wLCAxLjApO1xuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KG1peChkZXN0LCBibGVuZGVkLCBhKSwgMS4wKTtcbn1cbmA7XG5cbmNvbnN0IFBPU1RfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfc2NlbmU7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3ByZXY7XG51bmlmb3JtIHZlYzIgdV9yZXM7XG51bmlmb3JtIGZsb2F0IHVfdGltZTtcbnVuaWZvcm0gZmxvYXQgdV9hdWRpbztcbnVuaWZvcm0gdmVjMiB1X3BvaW50ZXI7XG51bmlmb3JtIHZlYzIgdV9wb2ludGVyX3ZlbDtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX2Rvd247XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9hY3RpdmU7XG51bmlmb3JtIGZsb2F0IHVfZmVlZGJhY2s7XG51bmlmb3JtIGZsb2F0IHVfdHJhaWxzO1xudW5pZm9ybSBmbG9hdCB1X2ZiX3pvb207XG51bmlmb3JtIGZsb2F0IHVfZmJfcm90YXRlO1xudW5pZm9ybSBmbG9hdCB1X2ZiX2h1ZTtcbnVuaWZvcm0gZmxvYXQgdV93YXJwO1xudW5pZm9ybSBmbG9hdCB1X3N3aXJsO1xudW5pZm9ybSBmbG9hdCB1X3JpcHBsZTtcbnVuaWZvcm0gZmxvYXQgdV96b29tO1xudW5pZm9ybSBmbG9hdCB1X2thbGVpZG87XG51bmlmb3JtIGZsb2F0IHVfbWlycm9yO1xudW5pZm9ybSBmbG9hdCB1X2Nocm9tYTtcbnVuaWZvcm0gZmxvYXQgdV9odWVfb3JiaXQ7XG51bmlmb3JtIGZsb2F0IHVfc2F0O1xudW5pZm9ybSBmbG9hdCB1X2NvbjtcbnVuaWZvcm0gZmxvYXQgdV9zb2xhcml6ZTtcbnVuaWZvcm0gZmxvYXQgdV9ncmFpbjtcbnVuaWZvcm0gZmxvYXQgdV9zY2FubGluZXM7XG51bmlmb3JtIGZsb2F0IHVfdmlnbmV0dGU7XG51bmlmb3JtIGZsb2F0IHVfc3Ryb2JlO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfZm9yY2U7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9zaXplO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfbW9kZTtcblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIG4gPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIGZsb2F0IHQgPSB1X3RpbWU7XG4gIGZsb2F0IGNocm9tYUFtdCA9IHVfY2hyb21hO1xuXG4gIC8vIEN1cnNvciBmaWVsZCBcdTIwMTQgb25seSB3aGlsZSBwcmVzc2VkIChob3ZlciB0cmFja3MgcG9zaXRpb24gYnV0IGRvZXMgbm90IHdhcnApXG4gIGlmICh1X3BvaW50ZXJfZG93biA+IDAuNSAmJiB1X3BvaW50ZXJfZm9yY2UgPiAwLjAwMykge1xuICAgIHZlYzIgcG4gPSAodV9wb2ludGVyIC0gMC41KSAqIGFzcGVjdDtcbiAgICB2ZWMyIGQgPSBuIC0gcG47XG4gICAgZmxvYXQgc3ogPSBtYXgodV9wb2ludGVyX3NpemUgKiAwLjgsIDAuMDQpO1xuICAgIGZsb2F0IGluZmwgPSBleHAoLWRvdChkLCBkKSAvIChzeiAqIHN6KSkgKiB1X3BvaW50ZXJfZm9yY2U7XG4gICAgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMC41KSB7XG4gICAgICBuID0gcG4gKyByb3QyKGluZmwgKiAyLjYpICogZDtcbiAgICB9IGVsc2UgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMS41KSB7XG4gICAgICBuIC09IGQgKiBpbmZsICogMC41NTtcbiAgICB9IGVsc2UgaWYgKHVfcG9pbnRlcl9tb2RlIDwgMi41KSB7XG4gICAgICBjaHJvbWFBbXQgKz0gaW5mbCAqIDEuNDtcbiAgICAgIG4gKz0gZCAqIGluZmwgKiAwLjM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG4ueSArPSBpbmZsICogMC4zICogKDAuNTUgKyAwLjQ1ICogc2luKHQgKiAyLjAgKyBuLnggKiAxMi4wKSk7XG4gICAgfVxuICAgIG4gKz0gdV9wb2ludGVyX3ZlbCAqIGluZmwgKiAxLjY7XG4gIH1cblxuICAvLyBTcGFjZVxuICBuICo9IDEuMCAtIHVfem9vbSAqICgwLjMgKyAwLjEgKiBzaW4odCAqIDAuNykpIC0gdV9hdWRpbyAqIHVfem9vbSAqIDAuMTU7XG4gIGlmICh1X3N3aXJsID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pO1xuICAgIG4gPSByb3QyKHVfc3dpcmwgKiAoMy40ICsgdV9hdWRpbyAqIDEuNSkgKiBleHAoLXIgKiAxLjcpICogc2luKHQgKiAwLjIzICsgMS45KSkgKiBuO1xuICB9XG4gIGlmICh1X2thbGVpZG8gPiAwLjAwMykge1xuICAgIGZsb2F0IHNlZyA9IGZsb29yKDIuMCArIHVfa2FsZWlkbyAqIDE1LjApO1xuICAgIGZsb2F0IHNsaWNlID0gNi4yODMxODUzIC8gc2VnO1xuICAgIGZsb2F0IGEgPSBhdGFuKG4ueSwgbi54KSArIHQgKiAwLjA1O1xuICAgIGEgPSBhYnMobW9kKGEsIHNsaWNlKSAtIHNsaWNlICogMC41KTtcbiAgICBuID0gbGVuZ3RoKG4pICogdmVjMihjb3MoYSksIHNpbihhKSk7XG4gIH1cbiAgaWYgKHVfcmlwcGxlID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pICsgMWUtNDtcbiAgICBuICs9IChuIC8gcikgKiBzaW4ociAqIDI2LjAgLSB0ICogMi42KSAqIHVfcmlwcGxlICogMC4wNTtcbiAgfVxuICBpZiAodV93YXJwID4gMC4wMDMpIHtcbiAgICB2ZWMyIHcgPSB2ZWMyKGZibShuICogMi40ICsgdCAqIDAuMTYpLCBmYm0obiAqIDIuNCAtIHQgKiAwLjEzICsgNS4yKSk7XG4gICAgbiArPSAodyAtIDAuNSkgKiB1X3dhcnAgKiAoMC4zNCArIHVfYXVkaW8gKiAwLjIpO1xuICB9XG4gIG4ueCA9IG1peChuLngsIGFicyhuLngpLCBjbGFtcCh1X21pcnJvciAqIDIuMCwgMC4wLCAxLjApKTtcbiAgbi55ID0gbWl4KG4ueSwgYWJzKG4ueSksIGNsYW1wKHVfbWlycm9yICogMi4wIC0gMS4wLCAwLjAsIDEuMCkpO1xuXG4gIHZlYzIgdXYgPSBuIC8gYXNwZWN0ICsgMC41O1xuXG4gIHZlYzIgY2QgPSAodXYgLSAwLjUpICogY2hyb21hQW10ICogMC4wNTtcbiAgdmVjMyBjb2wgPSB2ZWMzKFxuICAgIHRleHR1cmUyRCh1X3NjZW5lLCB1diArIGNkKS5yLFxuICAgIHRleHR1cmUyRCh1X3NjZW5lLCB1dikuZyxcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYgLSBjZCkuYlxuICApO1xuXG4gIC8vIEZlZWRiYWNrIGVjaG9cbiAgaWYgKHVfZmVlZGJhY2sgPiAwLjAwMykge1xuICAgIHZlYzIgZnAgPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gICAgZnAgPSByb3QyKHVfZmJfcm90YXRlICogMC4wNTUpICogZnA7XG4gICAgZnAgKj0gMS4wIC0gdV9mYl96b29tICogMC4wNDU7XG4gICAgdmVjMyBwcmV2ID0gdGV4dHVyZTJEKHVfcHJldiwgZnAgLyBhc3BlY3QgKyAwLjUpLnJnYjtcbiAgICBwcmV2ID0gaHVlUm90YXRlKHByZXYsIHVfZmJfaHVlICogMC41KTtcbiAgICB2ZWMzIGVjaG8gPSBwcmV2ICogbWl4KDAuNTUsIDAuOTg1LCB1X3RyYWlscyk7XG4gICAgY29sID0gbWl4KGNvbCwgbWF4KGNvbCwgZWNobyksIHVfZmVlZGJhY2spO1xuICB9XG5cbiAgLy8gR3JhZGVcbiAgY29sID0gaHVlUm90YXRlKGNvbCwgdV9odWVfb3JiaXQgKiB0ICogMC45KTtcbiAgY29sID0gKGNvbCAtIDAuNSkgKiB1X2NvbiArIDAuNTtcbiAgY29sID0gbWl4KHZlYzMobHVtYShjb2wpKSwgY29sLCB1X3NhdCk7XG4gIGlmICh1X3NvbGFyaXplID4gMC4wMDMpIHtcbiAgICB2ZWMzIHNvbCA9IG1peChjb2wsIDEuMCAtIGNvbCwgc21vb3Roc3RlcCgwLjUgLSAwLjI1LCAwLjUgKyAwLjI1LCBjb2wpKTtcbiAgICBjb2wgPSBtaXgoY29sLCBzb2wsIHVfc29sYXJpemUpO1xuICB9XG4gIGNvbCAqPSAxLjAgKyB1X3N0cm9iZSAqICgwLjQ1ICogc2luKHQgKiAxMS4wKSArIHVfYXVkaW8gKiAwLjgpO1xuXG4gIC8vIFRleHR1cmVcbiAgaWYgKHVfc2NhbmxpbmVzID4gMC4wMDMpIHtcbiAgICBjb2wgKj0gMS4wIC0gdV9zY2FubGluZXMgKiAwLjMyICogKDAuNSArIDAuNSAqIHNpbih2X3V2LnkgKiB1X3Jlcy55ICogMi40KSk7XG4gIH1cbiAgaWYgKHVfZ3JhaW4gPiAwLjAwMykge1xuICAgIGNvbCArPSAoaGFzaDIxKHZfdXYgKiB1X3JlcyArIGZyYWN0KHQpICogNjEuNykgLSAwLjUpICogdV9ncmFpbiAqIDAuMztcbiAgfVxuICB2ZWMyIHZwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICBjb2wgKj0gMS4wIC0gdV92aWduZXR0ZSAqIHNtb290aHN0ZXAoMC4zNSwgMS4xNSwgbGVuZ3RoKHZwKSAqIDEuMzUpO1xuXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoY2xhbXAoY29sLCAwLjAsIDEuMCksIDEuMCk7XG59XG5gO1xuXG50eXBlIFRhcmdldCA9IHtcbiAgZnJhbWVidWZmZXI6IFdlYkdMRnJhbWVidWZmZXI7XG4gIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG50eXBlIFByb2dyYW0gPSB7XG4gIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcbiAgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbD47XG59O1xuXG5mdW5jdGlvbiBjb21waWxlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpOiBXZWJHTFNoYWRlciB7XG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgaWYgKCFzaGFkZXIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgc2hhZGVyXCIpO1xuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xuICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgY29uc3QgaW5mbyA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSA/PyBcInVua25vd25cIjtcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNoYWRlciBjb21waWxlIGZhaWxlZDogJHtpbmZvfWApO1xuICB9XG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9ncmFtKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIGZyYWc6IHN0cmluZyk6IFByb2dyYW0ge1xuICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICBpZiAoIXByb2dyYW0pIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgcHJvZ3JhbVwiKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGNvbXBpbGUoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIFZFUlQpKTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGNvbXBpbGUoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZykpO1xuICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgMCwgXCJhX3Bvc1wiKTtcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2dyYW0gbGluayBmYWlsZWQ6ICR7Z2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgPz8gXCJ1bmtub3duXCJ9YCk7XG4gIH1cbiAgY29uc3QgdW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbD4gPSB7fTtcbiAgY29uc3QgY291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUykgYXMgbnVtYmVyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb25zdCBpbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKTtcbiAgICBpZiAoaW5mbykgdW5pZm9ybXNbaW5mby5uYW1lXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBpbmZvLm5hbWUpO1xuICB9XG4gIHJldHVybiB7IHByb2dyYW0sIHVuaWZvcm1zIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IG1hdGNoID0gL14jKFswLTlhLWZdezZ9KSQvaS5leGVjKGhleCk7XG4gIGlmICghbWF0Y2gpIHJldHVybiBbMCwgMCwgMF07XG4gIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDE2KTtcbiAgcmV0dXJuIFsoKHZhbHVlID4+IDE2KSAmIDI1NSkgLyAyNTUsICgodmFsdWUgPj4gOCkgJiAyNTUpIC8gMjU1LCAodmFsdWUgJiAyNTUpIC8gMjU1XTtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZVNvdXJjZVNpemUoc291cmNlOiBUZXhJbWFnZVNvdXJjZSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gIGlmICh0eXBlb2YgSFRNTFZpZGVvRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2UudmlkZW9XaWR0aCB8fCBzb3VyY2Uud2lkdGggfHwgMSksXG4gICAgICBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS52aWRlb0hlaWdodCB8fCBzb3VyY2UuaGVpZ2h0IHx8IDEpLFxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IE1hdGgubWF4KDEsIHNvdXJjZS5uYXR1cmFsV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UubmF0dXJhbEhlaWdodCB8fCBzb3VyY2UuaGVpZ2h0IHx8IDEpLFxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2Uud2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS5oZWlnaHQpIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCkge1xuICAgIHJldHVybiB7IHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2Uud2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KDEsIHNvdXJjZS5oZWlnaHQpIH07XG4gIH1cbiAgY29uc3QgYW55U291cmNlID0gc291cmNlIGFzIHsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9O1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBNYXRoLm1heCgxLCBhbnlTb3VyY2Uud2lkdGggPz8gMSksXG4gICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBhbnlTb3VyY2UuaGVpZ2h0ID8/IDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5naW5lKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBFbmdpbmVIYW5kbGUge1xuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIiwge1xuICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgYWxwaGE6IGZhbHNlLFxuICAgIGRlcHRoOiBmYWxzZSxcbiAgICBzdGVuY2lsOiBmYWxzZSxcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlLFxuICAgIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsXG4gIH0pIGFzIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB8IG51bGw7XG4gIGlmICghZ2wpIHRocm93IG5ldyBFcnJvcihcIldlYkdMIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyXCIpO1xuXG4gIGNvbnN0IHF1YWQgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHF1YWQpO1xuICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbLTEsIC0xLCAzLCAtMSwgLTEsIDNdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigwLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gIGNvbnN0IHByb2dyYW1zID0ge1xuICAgIGJnOiBtYWtlUHJvZ3JhbShnbCwgQkdfRlJBRyksXG4gICAgbGF5ZXI6IG1ha2VQcm9ncmFtKGdsLCBMQVlFUl9GUkFHKSxcbiAgICBwb3N0OiBtYWtlUHJvZ3JhbShnbCwgUE9TVF9GUkFHKSxcbiAgICBjb3B5OiBtYWtlUHJvZ3JhbShnbCwgQ09QWV9GUkFHKSxcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlVGV4dHVyZSgpOiBXZWJHTFRleHR1cmUge1xuICAgIGNvbnN0IHRleHR1cmUgPSBnbCEuY3JlYXRlVGV4dHVyZSgpO1xuICAgIGlmICghdGV4dHVyZSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSB0ZXh0dXJlXCIpO1xuICAgIGdsIS5iaW5kVGV4dHVyZShnbCEuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX01JTl9GSUxURVIsIGdsIS5MSU5FQVIpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9NQUdfRklMVEVSLCBnbCEuTElORUFSKTtcbiAgICBnbCEudGV4UGFyYW1ldGVyaShnbCEuVEVYVFVSRV8yRCwgZ2whLlRFWFRVUkVfV1JBUF9TLCBnbCEuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX1dSQVBfVCwgZ2whLkNMQU1QX1RPX0VER0UpO1xuICAgIHJldHVybiB0ZXh0dXJlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVRhcmdldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFRhcmdldCB7XG4gICAgY29uc3QgdGV4dHVyZSA9IG1ha2VUZXh0dXJlKCk7XG4gICAgZ2whLnRleEltYWdlMkQoZ2whLlRFWFRVUkVfMkQsIDAsIGdsIS5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCBnbCEuUkdCQSwgZ2whLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gZ2whLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XG4gICAgaWYgKCFmcmFtZWJ1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBmcmFtZWJ1ZmZlclwiKTtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgZnJhbWVidWZmZXIpO1xuICAgIGdsIS5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbCEuRlJBTUVCVUZGRVIsIGdsIS5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUsIDApO1xuICAgIGdsIS5iaW5kRnJhbWVidWZmZXIoZ2whLkZSQU1FQlVGRkVSLCBudWxsKTtcbiAgICByZXR1cm4geyBmcmFtZWJ1ZmZlciwgdGV4dHVyZSwgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplVGFyZ2V0KHRhcmdldDogVGFyZ2V0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGlmICh0YXJnZXQud2lkdGggPT09IHdpZHRoICYmIHRhcmdldC5oZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIGdsIS5iaW5kVGV4dHVyZShnbCEuVEVYVFVSRV8yRCwgdGFyZ2V0LnRleHR1cmUpO1xuICAgIGdsIS50ZXhJbWFnZTJEKGdsIS5URVhUVVJFXzJELCAwLCBnbCEuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2whLlJHQkEsIGdsIS5VTlNJR05FRF9CWVRFLCBudWxsKTtcbiAgICB0YXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICB0YXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHdpZHRoID0gTWF0aC5tYXgoMiwgY2FudmFzLndpZHRoIHx8IDIpO1xuICBsZXQgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgY2FudmFzLmhlaWdodCB8fCAyKTtcbiAgbGV0IHBpeGVsUmF0aW9DYXAgPSAxLjU7XG4gIGxldCBjc3NXaWR0aCA9IHdpZHRoO1xuICBsZXQgY3NzSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gIGNvbnN0IHRhcmdldHMgPSB7XG4gICAgc2NlbmVBOiBtYWtlVGFyZ2V0KHdpZHRoLCBoZWlnaHQpLFxuICAgIHNjZW5lQjogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBwb3N0QTogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBwb3N0QjogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgfTtcbiAgbGV0IHBvc3RGbGlwID0gZmFsc2U7XG4gIGxldCBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG5cbiAgLy8gUGxhY2Vob2xkZXIgdGV4dHVyZSBmb3IgbGF5ZXJzIHdob3NlIGltYWdlIGlzIG1pc3NpbmcgKGUuZy4gYSBzY2VuZSBsb2FkZWRcbiAgLy8gb24gYW5vdGhlciBkZXZpY2UpOiBhbiBhbmltYXRlZC1sb29raW5nIG1hZ2VudGEvZGVlcC1ibHVlIGdyaWQuXG4gIGNvbnN0IG1pc3NpbmdUZXh0dXJlID0gbWFrZVRleHR1cmUoKTtcbiAge1xuICAgIGNvbnN0IHNpemUgPSA2NDtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUgKiA0KTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplOyB4KyspIHtcbiAgICAgICAgY29uc3QgaSA9ICh5ICogc2l6ZSArIHgpICogNDtcbiAgICAgICAgY29uc3QgZ3JpZCA9ICh4ICUgMTYgPCAxIHx8IHkgJSAxNiA8IDEpID8gMSA6IDA7XG4gICAgICAgIGRhdGFbaV0gPSBncmlkID8gMjU1IDogMzAgKyAoKHggKiAzKSAlIDYwKTtcbiAgICAgICAgZGF0YVtpICsgMV0gPSBncmlkID8gNDAgOiA4O1xuICAgICAgICBkYXRhW2kgKyAyXSA9IGdyaWQgPyAxNzAgOiA0NiArICgoeSAqIDMpICUgNzApO1xuICAgICAgICBkYXRhW2kgKyAzXSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbWlzc2luZ1RleHR1cmUpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgc2l6ZSwgc2l6ZSwgMCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgZGF0YSk7XG4gIH1cblxuICBjb25zdCBpbWFnZXMgPSBuZXcgTWFwPHN0cmluZywgeyB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0+KCk7XG5cbiAgZnVuY3Rpb24gZHJhd1F1YWQoKSB7XG4gICAgZ2whLmRyYXdBcnJheXMoZ2whLlRSSUFOR0xFUywgMCwgMyk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldDogVGFyZ2V0IHwgbnVsbCkge1xuICAgIGdsIS5iaW5kRnJhbWVidWZmZXIoZ2whLkZSQU1FQlVGRkVSLCB0YXJnZXQgPyB0YXJnZXQuZnJhbWVidWZmZXIgOiBudWxsKTtcbiAgICBnbCEudmlld3BvcnQoMCwgMCwgdGFyZ2V0ID8gdGFyZ2V0LndpZHRoIDogd2lkdGgsIHRhcmdldCA/IHRhcmdldC5oZWlnaHQgOiBoZWlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdTEocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jID0gcC51bmlmb3Jtc1tuYW1lXTtcbiAgICBpZiAobG9jKSBnbCEudW5pZm9ybTFmKGxvYywgdmFsdWUpO1xuICB9XG4gIGZ1bmN0aW9uIHUyKHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChsb2MpIGdsIS51bmlmb3JtMmYobG9jLCB4LCB5KTtcbiAgfVxuICBmdW5jdGlvbiB1MyhwOiBQcm9ncmFtLCBuYW1lOiBzdHJpbmcsIHY6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSkge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKGxvYykgZ2whLnVuaWZvcm0zZihsb2MsIHZbMF0sIHZbMV0sIHZbMl0pO1xuICB9XG4gIGZ1bmN0aW9uIHVUZXgocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIHVuaXQ6IG51bWJlcikge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKCFsb2MpIHJldHVybjtcbiAgICBnbCEuYWN0aXZlVGV4dHVyZShnbCEuVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsIS51bmlmb3JtMWkobG9jLCB1bml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcihzdGF0ZTogRnJhbWVTdGF0ZSkge1xuICAgIGlmIChnbCEuaXNDb250ZXh0TG9zdCgpKSByZXR1cm47XG4gICAgY29uc3QgZyA9IHN0YXRlLmdsb2JhbDtcblxuICAgIC8vIEJhY2tncm91bmRcbiAgICBjb25zdCBiZyA9IHByb2dyYW1zLmJnO1xuICAgIGdsIS51c2VQcm9ncmFtKGJnLnByb2dyYW0pO1xuICAgIGJpbmRUYXJnZXRPdXRwdXQodGFyZ2V0cy5zY2VuZUEpO1xuICAgIHUyKGJnLCBcInVfcmVzXCIsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHUxKGJnLCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICB1MShiZywgXCJ1X21vZGVcIiwgZy5iZ01vZGUpO1xuICAgIHUzKGJnLCBcInVfY29sb3JfYVwiLCBnLmJnQSk7XG4gICAgdTMoYmcsIFwidV9jb2xvcl9iXCIsIGcuYmdCKTtcbiAgICB1MShiZywgXCJ1X2F1ZGlvXCIsIHN0YXRlLmF1ZGlvICogZy5hdWRpb1JlYWN0KTtcbiAgICBkcmF3UXVhZCgpO1xuXG4gICAgLy8gTGF5ZXJzOiBwaW5nLXBvbmcgY29tcG9zaXRlXG4gICAgbGV0IHNvdXJjZSA9IHRhcmdldHMuc2NlbmVBO1xuICAgIGxldCBkZXN0ID0gdGFyZ2V0cy5zY2VuZUI7XG4gICAgY29uc3QgbGF5ZXJQcm9ncmFtID0gcHJvZ3JhbXMubGF5ZXI7XG4gICAgZ2whLnVzZVByb2dyYW0obGF5ZXJQcm9ncmFtLnByb2dyYW0pO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2Ygc3RhdGUubGF5ZXJzKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGltYWdlcy5nZXQobGF5ZXIuaW1hZ2VJZCk7XG4gICAgICBiaW5kVGFyZ2V0T3V0cHV0KGRlc3QpO1xuICAgICAgdVRleChsYXllclByb2dyYW0sIFwidV9kZXN0XCIsIHNvdXJjZS50ZXh0dXJlLCAwKTtcbiAgICAgIHVUZXgobGF5ZXJQcm9ncmFtLCBcInVfaW1nXCIsIGltYWdlID8gaW1hZ2UudGV4dHVyZSA6IG1pc3NpbmdUZXh0dXJlLCAxKTtcbiAgICAgIHUyKGxheWVyUHJvZ3JhbSwgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHUyKFxuICAgICAgICBsYXllclByb2dyYW0sXG4gICAgICAgIFwidV9pbWdfdGV4ZWxcIixcbiAgICAgICAgaW1hZ2UgPyAxIC8gaW1hZ2Uud2lkdGggOiAxIC8gNjQsXG4gICAgICAgIGltYWdlID8gMSAvIGltYWdlLmhlaWdodCA6IDEgLyA2NFxuICAgICAgKTtcbiAgICAgIHUyKGxheWVyUHJvZ3JhbSwgXCJ1X3Bvc1wiLCBsYXllci5wb3NbMF0sIGxheWVyLnBvc1sxXSk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9leHRcIiwgbGF5ZXIuZXh0WzBdLCBsYXllci5leHRbMV0pO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcm90XCIsIGxheWVyLnJvdCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV90aW1lXCIsIHN0YXRlLnRpbWUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYXVkaW9cIiwgc3RhdGUuYXVkaW8gKiBnLmF1ZGlvUmVhY3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfb3BhY2l0eVwiLCBsYXllci5vcGFjaXR5KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2JsZW5kXCIsIGxheWVyLmJsZW5kKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3RpbGVcIiwgbGF5ZXIudGlsZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV93YXJwXCIsIGxheWVyLndhcnApO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc3dpcmxcIiwgbGF5ZXIuc3dpcmwpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcmlwcGxlXCIsIGxheWVyLnJpcHBsZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9rYWxlaWRvXCIsIGxheWVyLmthbGVpZG8pO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfcGl4ZWxhdGVcIiwgbGF5ZXIucGl4ZWxhdGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYnVsZ2VcIiwgbGF5ZXIuYnVsZ2UpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfbWlycm9yXCIsIGxheWVyLm1pcnJvcik7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9odWVcIiwgbGF5ZXIuaHVlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3NhdFwiLCBsYXllci5zYXR1cmF0aW9uKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2NvblwiLCBsYXllci5jb250cmFzdCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9icmlcIiwgbGF5ZXIuYnJpZ2h0bmVzcyk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9pbnZlcnRcIiwgbGF5ZXIuaW52ZXJ0KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3Bvc3RlclwiLCBsYXllci5wb3N0ZXJpemUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfY2hyb21hXCIsIGxheWVyLmNocm9tYSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9lZGdlc1wiLCBsYXllci5lZGdlcyk7XG4gICAgICB1MyhsYXllclByb2dyYW0sIFwidV90aW50XCIsIGxheWVyLnRpbnQpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfdGludF9hbXRcIiwgbGF5ZXIudGludEFtb3VudCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9zaGltbWVyXCIsIGxheWVyLnNoaW1tZXIpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc2VlZFwiLCBsYXllci5zZWVkKTtcbiAgICAgIGRyYXdRdWFkKCk7XG4gICAgICBjb25zdCBzd2FwID0gc291cmNlO1xuICAgICAgc291cmNlID0gZGVzdDtcbiAgICAgIGRlc3QgPSBzd2FwO1xuICAgIH1cblxuICAgIC8vIFBvc3QgKyBmZWVkYmFja1xuICAgIGlmIChuZWVkRmVlZGJhY2tDbGVhcikge1xuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgW3RhcmdldHMucG9zdEEsIHRhcmdldHMucG9zdEJdKSB7XG4gICAgICAgIGJpbmRUYXJnZXRPdXRwdXQodGFyZ2V0KTtcbiAgICAgICAgZ2whLmNsZWFyQ29sb3IoMCwgMCwgMCwgMSk7XG4gICAgICAgIGdsIS5jbGVhcihnbCEuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgICB9XG4gICAgICBuZWVkRmVlZGJhY2tDbGVhciA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBwcmV2ID0gcG9zdEZsaXAgPyB0YXJnZXRzLnBvc3RBIDogdGFyZ2V0cy5wb3N0QjtcbiAgICBjb25zdCBvdXQgPSBwb3N0RmxpcCA/IHRhcmdldHMucG9zdEIgOiB0YXJnZXRzLnBvc3RBO1xuICAgIHBvc3RGbGlwID0gIXBvc3RGbGlwO1xuXG4gICAgY29uc3QgcG9zdCA9IHByb2dyYW1zLnBvc3Q7XG4gICAgZ2whLnVzZVByb2dyYW0ocG9zdC5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KG91dCk7XG4gICAgdVRleChwb3N0LCBcInVfc2NlbmVcIiwgc291cmNlLnRleHR1cmUsIDApO1xuICAgIHVUZXgocG9zdCwgXCJ1X3ByZXZcIiwgcHJldi50ZXh0dXJlLCAxKTtcbiAgICB1Mihwb3N0LCBcInVfcmVzXCIsIHdpZHRoLCBoZWlnaHQpO1xuICAgIHUxKHBvc3QsIFwidV90aW1lXCIsIHN0YXRlLnRpbWUpO1xuICAgIHUxKHBvc3QsIFwidV9hdWRpb1wiLCBzdGF0ZS5hdWRpbyAqIGcuYXVkaW9SZWFjdCk7XG4gICAgdTIocG9zdCwgXCJ1X3BvaW50ZXJcIiwgc3RhdGUucG9pbnRlci54LCBzdGF0ZS5wb2ludGVyLnkpO1xuICAgIHUyKHBvc3QsIFwidV9wb2ludGVyX3ZlbFwiLCBzdGF0ZS5wb2ludGVyLnZlbG9jaXR5WCwgc3RhdGUucG9pbnRlci52ZWxvY2l0eVkpO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX2Rvd25cIiwgc3RhdGUucG9pbnRlci5kb3duID8gMSA6IDApO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX2FjdGl2ZVwiLCBzdGF0ZS5wb2ludGVyLmFjdGl2ZSA/IDEgOiAwKTtcbiAgICB1MShwb3N0LCBcInVfZmVlZGJhY2tcIiwgZy5mZWVkYmFjayk7XG4gICAgdTEocG9zdCwgXCJ1X3RyYWlsc1wiLCBnLnRyYWlscyk7XG4gICAgdTEocG9zdCwgXCJ1X2ZiX3pvb21cIiwgZy5mYlpvb20pO1xuICAgIHUxKHBvc3QsIFwidV9mYl9yb3RhdGVcIiwgZy5mYlJvdGF0ZSk7XG4gICAgdTEocG9zdCwgXCJ1X2ZiX2h1ZVwiLCBnLmZiSHVlKTtcbiAgICB1MShwb3N0LCBcInVfd2FycFwiLCBnLndhcnApO1xuICAgIHUxKHBvc3QsIFwidV9zd2lybFwiLCBnLnN3aXJsKTtcbiAgICB1MShwb3N0LCBcInVfcmlwcGxlXCIsIGcucmlwcGxlKTtcbiAgICB1MShwb3N0LCBcInVfem9vbVwiLCBnLnpvb20pO1xuICAgIHUxKHBvc3QsIFwidV9rYWxlaWRvXCIsIGcua2FsZWlkbyk7XG4gICAgdTEocG9zdCwgXCJ1X21pcnJvclwiLCBnLm1pcnJvcik7XG4gICAgdTEocG9zdCwgXCJ1X2Nocm9tYVwiLCBnLmNocm9tYSk7XG4gICAgdTEocG9zdCwgXCJ1X2h1ZV9vcmJpdFwiLCBnLmh1ZU9yYml0KTtcbiAgICB1MShwb3N0LCBcInVfc2F0XCIsIGcuc2F0dXJhdGlvbik7XG4gICAgdTEocG9zdCwgXCJ1X2NvblwiLCBnLmNvbnRyYXN0KTtcbiAgICB1MShwb3N0LCBcInVfc29sYXJpemVcIiwgZy5zb2xhcml6ZSk7XG4gICAgdTEocG9zdCwgXCJ1X2dyYWluXCIsIGcuZ3JhaW4pO1xuICAgIHUxKHBvc3QsIFwidV9zY2FubGluZXNcIiwgZy5zY2FubGluZXMpO1xuICAgIHUxKHBvc3QsIFwidV92aWduZXR0ZVwiLCBnLnZpZ25ldHRlKTtcbiAgICB1MShwb3N0LCBcInVfc3Ryb2JlXCIsIGcuc3Ryb2JlKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9mb3JjZVwiLCBnLnBvaW50ZXJGb3JjZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfc2l6ZVwiLCBnLnBvaW50ZXJTaXplKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9tb2RlXCIsIGcucG9pbnRlck1vZGUpO1xuICAgIGRyYXdRdWFkKCk7XG5cbiAgICAvLyBQcmVzZW50XG4gICAgY29uc3QgY29weSA9IHByb2dyYW1zLmNvcHk7XG4gICAgZ2whLnVzZVByb2dyYW0oY29weS5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KG51bGwpO1xuICAgIHVUZXgoY29weSwgXCJ1X3RleFwiLCBvdXQudGV4dHVyZSwgMCk7XG4gICAgZHJhd1F1YWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5U2l6ZSgpIHtcbiAgICBjb25zdCByYXRpbyA9IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIHBpeGVsUmF0aW9DYXApO1xuICAgIGNvbnN0IG5leHRXaWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoY3NzV2lkdGggKiByYXRpbykpO1xuICAgIGNvbnN0IG5leHRIZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGNzc0hlaWdodCAqIHJhdGlvKSk7XG4gICAgaWYgKG5leHRXaWR0aCA9PT0gd2lkdGggJiYgbmV4dEhlaWdodCA9PT0gaGVpZ2h0KSByZXR1cm47XG4gICAgd2lkdGggPSBuZXh0V2lkdGg7XG4gICAgaGVpZ2h0ID0gbmV4dEhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIE9iamVjdC52YWx1ZXModGFyZ2V0cykpIHJlc2l6ZVRhcmdldCh0YXJnZXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgIG5lZWRGZWVkYmFja0NsZWFyID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzaXplKG5leHRDc3NXaWR0aCwgbmV4dENzc0hlaWdodCkge1xuICAgICAgY3NzV2lkdGggPSBNYXRoLm1heCgxLCBuZXh0Q3NzV2lkdGgpO1xuICAgICAgY3NzSGVpZ2h0ID0gTWF0aC5tYXgoMSwgbmV4dENzc0hlaWdodCk7XG4gICAgICBhcHBseVNpemUoKTtcbiAgICB9LFxuICAgIHNldFBpeGVsUmF0aW9DYXAoY2FwKSB7XG4gICAgICBwaXhlbFJhdGlvQ2FwID0gTWF0aC5tYXgoMC41LCBjYXApO1xuICAgICAgYXBwbHlTaXplKCk7XG4gICAgfSxcbiAgICBzZXRJbWFnZShpbWFnZUlkLCBzb3VyY2VJbWFnZSkge1xuICAgICAgbGV0IGVudHJ5ID0gaW1hZ2VzLmdldChpbWFnZUlkKTtcbiAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgZW50cnkgPSB7IHRleHR1cmU6IG1ha2VUZXh0dXJlKCksIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgICAgICAgaW1hZ2VzLnNldChpbWFnZUlkLCBlbnRyeSk7XG4gICAgICB9XG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBlbnRyeS50ZXh0dXJlKTtcbiAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBzb3VyY2VJbWFnZSk7XG4gICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCBmYWxzZSk7XG4gICAgICBjb25zdCBzaXplID0gdGV4dHVyZVNvdXJjZVNpemUoc291cmNlSW1hZ2UpO1xuICAgICAgZW50cnkud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgZW50cnkuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgfSxcbiAgICByZW1vdmVJbWFnZShpbWFnZUlkKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IGltYWdlcy5nZXQoaW1hZ2VJZCk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKGVudHJ5LnRleHR1cmUpO1xuICAgICAgaW1hZ2VzLmRlbGV0ZShpbWFnZUlkKTtcbiAgICB9LFxuICAgIGhhc0ltYWdlKGltYWdlSWQpIHtcbiAgICAgIHJldHVybiBpbWFnZXMuaGFzKGltYWdlSWQpO1xuICAgIH0sXG4gICAgcmVuZGVyLFxuICAgIGNsZWFyRmVlZGJhY2soKSB7XG4gICAgICBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBpbWFnZXMudmFsdWVzKCkpIGdsLmRlbGV0ZVRleHR1cmUoZW50cnkudGV4dHVyZSk7XG4gICAgICBpbWFnZXMuY2xlYXIoKTtcbiAgICAgIGdsLmRlbGV0ZVRleHR1cmUobWlzc2luZ1RleHR1cmUpO1xuICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKSkge1xuICAgICAgICBnbC5kZWxldGVGcmFtZWJ1ZmZlcih0YXJnZXQuZnJhbWVidWZmZXIpO1xuICAgICAgICBnbC5kZWxldGVUZXh0dXJlKHRhcmdldC50ZXh0dXJlKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgeyBwcm9ncmFtIH0gb2YgT2JqZWN0LnZhbHVlcyhwcm9ncmFtcykpIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgICBpZiAocXVhZCkgZ2wuZGVsZXRlQnVmZmVyKHF1YWQpO1xuICAgIH0sXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBNZWRpYUtpbmQgfSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmNvbnN0IEFVRElPX0VYVCA9IC9cXC4obXAzfHdhdnxvZ2d8bTRhfGFhY3xmbGFjfG9wdXN8d21hKSQvaTtcbmNvbnN0IElNQUdFX0VYVCA9IC9cXC4ocG5nfGpwZT9nfGdpZnx3ZWJwfGJtcHxzdmd8YXZpZnxpY28pJC9pO1xuY29uc3QgVklERU9fRVhUID0gL1xcLihtcDR8d2VibXxtb3Z8bTR2fGF2aXxta3Z8b2d2KSQvaTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5RmlsZShmaWxlOiBGaWxlKTogTWVkaWFLaW5kIHtcbiAgY29uc3QgdHlwZSA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwidmlkZW8vXCIpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiYXVkaW8vXCIpKSByZXR1cm4gXCJhdWRpb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4gXCJpbWFnZVwiO1xuICBpZiAoQVVESU9fRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwiYXVkaW9cIjtcbiAgaWYgKElNQUdFX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcImltYWdlXCI7XG4gIGlmIChWSURFT19FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICByZXR1cm4gXCJkYXRhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUJsb2IoYmxvYjogQmxvYiwgbmFtZSA9IFwiXCIpOiBNZWRpYUtpbmQge1xuICByZXR1cm4gY2xhc3NpZnlGaWxlKG5ldyBGaWxlKFtibG9iXSwgbmFtZSB8fCBcImZpbGVcIiwgeyB0eXBlOiBibG9iLnR5cGUgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFLaW5kTGFiZWwoa2luZDogTWVkaWFLaW5kKTogc3RyaW5nIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBcInZpZGVvXCI6XG4gICAgICByZXR1cm4gXCJWaWRlb1wiO1xuICAgIGNhc2UgXCJhdWRpb1wiOlxuICAgICAgcmV0dXJuIFwiQXVkaW9cIjtcbiAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgIHJldHVybiBcIkltYWdlXCI7XG4gICAgY2FzZSBcImRhdGFcIjpcbiAgICAgIHJldHVybiBcIkRhdGFcIjtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBfZXhoYXVzdGl2ZTogbmV2ZXIgPSBraW5kO1xuICAgICAgcmV0dXJuIF9leGhhdXN0aXZlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdExheWVyTmFtZShraW5kOiBNZWRpYUtpbmQsIGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzdGVtID0gZmlsZU5hbWUucmVwbGFjZSgvXFwuW2EtejAtOV0rJC9pLCBcIlwiKS50cmltKCk7XG4gIHJldHVybiBzdGVtIHx8IG1lZGlhS2luZExhYmVsKGtpbmQpO1xufVxuXG4vKiogRmlyc3QgMU1CIG9mIGFuIGFyYml0cmFyeSBmaWxlLCBwYWludGVkIGFzIGEgMjU2XHUwMEQ3MjU2IGJ5dGUgdGV4dHVyZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludERhdGFCeXRlcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBieXRlczogVWludDhBcnJheSkge1xuICBjb25zdCB3aWR0aCA9IDI1NjtcbiAgY29uc3QgaGVpZ2h0ID0gMjU2O1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjb25zdCBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IHRvdGFsID0gd2lkdGggKiBoZWlnaHQ7XG4gIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IGxlbiA/IChieXRlc1tpICUgbGVuXSA/PyAwKSA6IChpICogMzcpICYgMjU1O1xuICAgIGNvbnN0IGIgPSBsZW4gPyAoYnl0ZXNbKGkgKiAzKSAlIGxlbl0gPz8gMCkgOiAoaSAqIDkxKSAmIDI1NTtcbiAgICBjb25zdCBjID0gbGVuID8gKGJ5dGVzWyhpICogNyArIDEzKSAlIGxlbl0gPz8gMCkgOiAoaSAqIDEzKSAmIDI1NTtcbiAgICBjb25zdCBvID0gaSAqIDQ7XG4gICAgaW1hZ2UuZGF0YVtvXSA9IGE7XG4gICAgaW1hZ2UuZGF0YVtvICsgMV0gPSBiO1xuICAgIGltYWdlLmRhdGFbbyArIDJdID0gKGEgXiBjKSAmIDI1NTtcbiAgICBpbWFnZS5kYXRhW28gKyAzXSA9IDI1NTtcbiAgfVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKTtcblxuICBjb25zdCB3YXNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB3YXNoLmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjMyLDIzMCwyMjQsMC4xKVwiKTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMC41LCBcInJnYmEoMTY4LDEyMCwxMjgsMC4xMilcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgxMzgsMTM0LDE0NCwwLjEpXCIpO1xuICBjdHguZmlsbFN0eWxlID0gd2FzaDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICBpZiAoY2FudmFzLndpZHRoICE9PSA2NDAgfHwgY2FudmFzLmhlaWdodCAhPT0gMzYwKSB7XG4gICAgY2FudmFzLndpZHRoID0gNjQwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAzNjA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsRnJvbVNwZWN0cnVtKHNwZWN0cnVtOiBVaW50OEFycmF5KTogbnVtYmVyIHtcbiAgY29uc3QgYmlucyA9IE1hdGgubWluKDQ4LCBzcGVjdHJ1bS5sZW5ndGgpO1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkgKz0gMSlcbiAgICB0b3RhbCArPSBzcGVjdHJ1bVtpXSAqICgxLjM1IC0gKGkgLyBiaW5zKSAqIDAuNTUpO1xuICByZXR1cm4gTWF0aC5taW4oMSwgdG90YWwgLyBiaW5zIC8gMTkwKTtcbn1cblxuLyoqIFJlYWN0aXZlIGZpZWxkIHVzZWQgYXMgdGhlIGxheWVyIHRleHR1cmUgZm9yIGF1ZGlvIGZpbGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhaW50QXVkaW9WaXN1YWwoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzKTtcbiAgY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgsIDgsIDEwLCAkezAuMSArICgxIC0gbGV2ZWwpICogMC4wOH0pYDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIGNvbnN0IGJpbnMgPSBNYXRoLm1pbig5Niwgc3BlY3RydW0ubGVuZ3RoKTtcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGJpbnM7XG4gIGNvbnN0IG1pZCA9IGhlaWdodCAqIDAuNTU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluczsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2FtcGxlID0gc3BlY3RydW1baV0gLyAyNTU7XG4gICAgY29uc3QgYm9vc3QgPSBzYW1wbGUgKiAoMC41NSArIGxldmVsICogMC45KTtcbiAgICBjb25zdCBoID0gYm9vc3QgKiBoZWlnaHQgKiAwLjcyO1xuICAgIGNvbnN0IGh1ZSA9IDIwICsgKGkgLyBiaW5zKSAqIDQwICsgdGltZSAqIDEyICsgbGV2ZWwgKiAzMDtcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2h1ZSAlIDM2MH0gJHsyOCArIHNhbXBsZSAqIDM1fSUgJHszMiArIHNhbXBsZSAqIDM4fSUpYDtcbiAgICBjdHguZmlsbFJlY3QoaSAqIGJhcldpZHRoLCBtaWQgLSBoICogMC41NSwgTWF0aC5tYXgoMSwgYmFyV2lkdGggKiAwLjgyKSwgaCk7XG4gIH1cblxuICBjb25zdCBjeCA9IHdpZHRoICogMC41O1xuICBjb25zdCBjeSA9IGhlaWdodCAqIDAuNDg7XG4gIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpICogKDAuMDggKyBsZXZlbCAqIDAuMTgpO1xuICBjb25zdCBnbG93ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCByYWRpdXMgKiAyLjIpO1xuICBnbG93LmFkZENvbG9yU3RvcCgwLCBgaHNsYSgxMiA0NSUgNjIlIC8gJHswLjE4ICsgbGV2ZWwgKiAwLjM1fSlgKTtcbiAgZ2xvdy5hZGRDb2xvclN0b3AoMSwgXCJoc2xhKDAgMCUgMCUgLyAwKVwiKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGdsb3c7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyhjeCwgY3ksIHJhZGl1cyAqIDIuMiwgMCwgTWF0aC5QSSAqIDIpO1xuICBjdHguZmlsbCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FudmFzVGh1bWIoXG4gIHNvdXJjZTogQ2FudmFzSW1hZ2VTb3VyY2UsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBtYXhEaW0gPSA5Nixcbik6IHN0cmluZyB7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgbWF4RGltIC8gTWF0aC5tYXgod2lkdGgsIGhlaWdodCwgMSkpO1xuICBjb25zdCB0aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIHRodW1iLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKSk7XG4gIHRodW1iLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpKTtcbiAgY29uc3QgY3R4ID0gdGh1bWIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuIFwiXCI7XG4gIGN0eC5kcmF3SW1hZ2Uoc291cmNlLCAwLCAwLCB0aHVtYi53aWR0aCwgdGh1bWIuaGVpZ2h0KTtcbiAgcmV0dXJuIHRodW1iLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC43KTtcbn1cbiIsICIvLyBDbGllbnQtc2lkZSBwZXJzaXN0ZW5jZTogbWVkaWEgYmxvYnMgbGl2ZSBpbiBJbmRleGVkREIgKHNjZW5lcyBzYXZlZCB0byB0aGVcbi8vIHNlcnZlciBhcmUgcGFyYW1zLW9ubHkgSlNPTiksIGFuZCB0aGUgd29ya2luZyBzY2VuZSBhdXRvc2F2ZXMgdG8gbG9jYWxTdG9yYWdlLlxuXG5pbXBvcnQgeyBkZWNvZGVTY2VuZSwgZW5jb2RlU2NlbmUsIHR5cGUgU2NlbmUgfSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmNvbnN0IERCX05BTUUgPSBcInZhdWRpby0yLWltYWdlc1wiO1xuY29uc3QgU1RPUkUgPSBcImltYWdlc1wiO1xuY29uc3QgQVVUT1NBVkVfS0VZID0gXCJ2YXVkaW8tMjphdXRvc2F2ZVwiO1xuY29uc3QgTUFYX1RFWFRVUkVfRElNID0gMjA0ODtcbmNvbnN0IFRIVU1CX0RJTSA9IDk2O1xuXG5sZXQgZGJQcm9taXNlOiBQcm9taXNlPElEQkRhdGFiYXNlPiB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiBvcGVuRGIoKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICBpZiAoIWRiUHJvbWlzZSkge1xuICAgIGRiUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihEQl9OQU1FLCAxKTtcbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QucmVzdWx0Lm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoU1RPUkUpKSB7XG4gICAgICAgICAgcmVxdWVzdC5yZXN1bHQuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiBvcGVuIGZhaWxlZFwiKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dEltYWdlQmxvYihpZDogc3RyaW5nLCBibG9iOiBCbG9iKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWR3cml0ZVwiKTtcbiAgICB0eC5vYmplY3RTdG9yZShTVE9SRSkucHV0KGJsb2IsIGlkKTtcbiAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IEVycm9yKFwiSW5kZXhlZERCIHdyaXRlIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2VCbG9iKGlkOiBzdHJpbmcpOiBQcm9taXNlPEJsb2IgfCBudWxsPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFNUT1JFKS5nZXQoaWQpO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCBpbnN0YW5jZW9mIEJsb2IgPyByZXF1ZXN0LnJlc3VsdCA6IG51bGwpO1xuICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiByZWFkIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW1hZ2VCbG9iKGlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZGIgPSBhd2FpdCBvcGVuRGIoKTtcbiAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkUsIFwicmVhZHdyaXRlXCIpO1xuICAgIHR4Lm9iamVjdFN0b3JlKFNUT1JFKS5kZWxldGUoaWQpO1xuICAgIHR4Lm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgZGVsZXRlIGZhaWxlZFwiKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgdHlwZSBEZWNvZGVkSW1hZ2UgPSB7XG4gIC8qKiBEb3duc2NhbGVkIHRvIEdQVS1mcmllbmRseSBzaXplOyB1cGxvYWQgdGhpcyBhcyB0aGUgdGV4dHVyZS4gKi9cbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgLyoqIFRpbnkgZGF0YSBVUkwgZm9yIHRoZSBsYXllcnMgcGFuZWwuICovXG4gIHRodW1iOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUltYWdlQmxvYihibG9iOiBCbG9iKTogUHJvbWlzZTxEZWNvZGVkSW1hZ2U+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCBNQVhfVEVYVFVSRV9ESU0gLyBNYXRoLm1heChpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLm5hdHVyYWxXaWR0aCAqIHNjYWxlKSk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2UubmF0dXJhbEhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCIyRCBjYW52YXMgdW5hdmFpbGFibGVcIik7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCB0aHVtYlNjYWxlID0gTWF0aC5taW4oMSwgVEhVTUJfRElNIC8gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkpO1xuICAgICAgICBjb25zdCB0aHVtYkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRodW1iQ2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAqIHRodW1iU2NhbGUpKTtcbiAgICAgICAgdGh1bWJDYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiB0aHVtYlNjYWxlKSk7XG4gICAgICAgIGNvbnN0IHRodW1iQ29udGV4dCA9IHRodW1iQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgaWYgKHRodW1iQ29udGV4dCkgdGh1bWJDb250ZXh0LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIHRodW1iQ2FudmFzLndpZHRoLCB0aHVtYkNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICB0aHVtYjogdGh1bWJDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjcpLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChjYXVzZSkge1xuICAgICAgICByZWplY3QoY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlIDogbmV3IEVycm9yKFwiSW1hZ2UgZGVjb2RlIGZhaWxlZFwiKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBkZWNvZGUgdGhhdCBpbWFnZVwiKSk7XG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3SWQocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cHJlZml4fS0ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDgpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQXV0b3NhdmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQVVUT1NBVkVfS0VZLCBlbmNvZGVTY2VuZShzY2VuZSkpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBRdW90YSAvIHByaXZhdGUgbW9kZSBcdTIwMTQgbG9zaW5nIGF1dG9zYXZlIGlzIGFjY2VwdGFibGUuXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBdXRvc2F2ZSgpOiBTY2VuZSB8IG51bGwge1xuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFVVE9TQVZFX0tFWSk7XG4gICAgaWYgKCFyYXcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBkZWNvZGVTY2VuZShyYXcpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwgImNvbnN0IEVOQ09ERURfRU5USVRJRVMgPSAvW1wiJjxdLztcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBzdHIgKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVFbnRpdGllcyhzdHIpIHtcblx0Ly8gU2tpcCBhbGwgd29yayBmb3Igc3RyaW5ncyB3aXRoIG5vIGVudGl0aWVzIG5lZWRpbmcgZW5jb2Rpbmc6XG5cdGlmIChzdHIubGVuZ3RoID09PSAwIHx8IEVOQ09ERURfRU5USVRJRVMudGVzdChzdHIpID09PSBmYWxzZSkgcmV0dXJuIHN0cjtcblxuXHRsZXQgbGFzdCA9IDAsXG5cdFx0aSA9IDAsXG5cdFx0b3V0ID0gJycsXG5cdFx0Y2ggPSAnJztcblxuXHQvLyBTZWVrIGZvcndhcmQgaW4gc3RyIHVudGlsIHRoZSBuZXh0IGVudGl0eSBjaGFyOlxuXHRmb3IgKDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcblx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdGNoID0gJyZxdW90Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0Y2ggPSAnJmFtcDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNjA6XG5cdFx0XHRcdGNoID0gJyZsdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBBcHBlbmQgc2tpcHBlZC9idWZmZXJlZCBjaGFyYWN0ZXJzIGFuZCB0aGUgZW5jb2RlZCBlbnRpdHk6XG5cdFx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdFx0b3V0ICs9IGNoO1xuXHRcdC8vIFN0YXJ0IHRoZSBuZXh0IHNlZWsvYnVmZmVyIGFmdGVyIHRoZSBlbnRpdHkncyBvZmZzZXQ6XG5cdFx0bGFzdCA9IGkgKyAxO1xuXHR9XG5cdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRyZXR1cm4gb3V0O1xufVxuIiwgIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBlbmNvZGVFbnRpdGllcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vLi4vc3JjL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogVGhpcyBmaWxlIGV4cG9ydHMgdmFyaW91cyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IEJhYmVsJ3MgXCJhdXRvbWF0aWNcIiBKU1ggcnVudGltZSBBUEk6XG4gKiAtIGpzeCh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hzKHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBfX3NvdXJjZSwgX19zZWxmKVxuICpcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiBjcmVhdGVWTm9kZSBoZXJlIGlzIG9wdGltaXplZCBmb3IgcGVyZm9ybWFuY2UuXG4gKiBCZW5jaG1hcmtzOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzVmNmI1NGEwYjQ2MzIxMDBhN2RjZDJiM1xuICovXG5cbi8qKlxuICogSlNYLkVsZW1lbnQgZmFjdG9yeSB1c2VkIGJ5IEJhYmVsJ3Mge3J1bnRpbWU6XCJhdXRvbWF0aWNcIn0gSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtWTm9kZVsndHlwZSddfSB0eXBlXG4gKiBAcGFyYW0ge1ZOb2RlWydwcm9wcyddfSBwcm9wc1xuICogQHBhcmFtIHtWTm9kZVsna2V5J119IFtrZXldXG4gKiBAcGFyYW0ge3Vua25vd259IFtpc1N0YXRpY0NoaWxkcmVuXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zb3VyY2VdXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NlbGZdXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIF9fc291cmNlLCBfX3NlbGYpIHtcblx0aWYgKCFwcm9wcykgcHJvcHMgPSB7fTtcblx0Ly8gV2UnbGwgd2FudCB0byBwcmVzZXJ2ZSBgcmVmYCBpbiBwcm9wcyB0byBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvclxuXHQvLyBmb3J3YXJkUmVmIGNvbXBvbmVudHMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoYXQgc2hvdWxkIGhhcHBlbiB2aWFcblx0Ly8gYSBzZXBhcmF0ZSBQUi5cblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzLFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGlmICgncmVmJyBpbiBub3JtYWxpemVkUHJvcHMpIHtcblx0XHRub3JtYWxpemVkUHJvcHMgPSB7fTtcblx0XHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRcdGlmIChpID09ICdyZWYnKSB7XG5cdFx0XHRcdHJlZiA9IHByb3BzW2ldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEB0eXBlIHtWTm9kZSAmIHsgX19zb3VyY2U6IGFueTsgX19zZWxmOiBhbnkgfX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wczogbm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0X2NvbXBvbmVudDogbnVsbCxcblx0XHRjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuXHRcdF9vcmlnaW5hbDogLS12bm9kZUlkLFxuXHRcdF9pbmRleDogLTEsXG5cdFx0X2ZsYWdzOiAwLFxuXHRcdF9fc291cmNlLFxuXHRcdF9fc2VsZlxuXHR9O1xuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wcy5cblx0Ly8gTm90ZTogYHR5cGVgIGlzIG9mdGVuIGEgU3RyaW5nLCBhbmQgY2FuIGJlIGB1bmRlZmluZWRgIGluIGRldmVsb3BtZW50LlxuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgKHJlZiA9IHR5cGUuZGVmYXVsdFByb3BzKSkge1xuXHRcdGZvciAoaSBpbiByZWYpXG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcmVmW2ldO1xuXHRcdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGVtcGxhdGUgdm5vZGUuIFRoaXMgZnVuY3Rpb24gaXMgbm90IGV4cGVjdGVkIHRvIGJlXG4gKiB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nW119IHRlbXBsYXRlc1xuICogQHBhcmFtICB7QXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn0gZXhwcnNcbiAqIEByZXR1cm5zIHtWTm9kZX1cbiAqL1xuZnVuY3Rpb24ganN4VGVtcGxhdGUodGVtcGxhdGVzLCAuLi5leHBycykge1xuXHRjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKEZyYWdtZW50LCB7IHRwbDogdGVtcGxhdGVzLCBleHBycyB9KTtcblx0Ly8gQnlwYXNzIHJlbmRlciB0byBzdHJpbmcgdG9wIGxldmVsIEZyYWdtZW50IG9wdGltaXphdGlvblxuXHR2bm9kZS5rZXkgPSB2bm9kZS5fdm5vZGU7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuY29uc3QgSlNfVE9fQ1NTID0ge307XG5jb25zdCBDU1NfUkVHRVggPSAvW0EtWl0vZztcblxuLyoqXG4gKiBVbndyYXAgcG90ZW50aWFsIHNpZ25hbHMuXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gdmFsdWUudmFsdWVPZigpXG5cdFx0OiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gSFRNTCBhdHRyaWJ1dGUgdG8gYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgbm90XG4gKiBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlXG4gKiBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgYXR0cmlidXRlIG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24ganN4QXR0cihuYW1lLCB2YWx1ZSkge1xuXHRpZiAob3B0aW9ucy5hdHRyKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gb3B0aW9ucy5hdHRyKG5hbWUsIHZhbHVlKTtcblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWx1ZSA9IG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSk7XG5cblx0aWYgKG5hbWUgPT09ICdyZWYnIHx8IG5hbWUgPT09ICdrZXknKSByZXR1cm4gJyc7XG5cdGlmIChuYW1lID09PSAnc3R5bGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB2YWx1ZSkge1xuXHRcdFx0bGV0IHZhbCA9IHZhbHVlW3Byb3BdO1xuXHRcdFx0aWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJycpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9XG5cdFx0XHRcdFx0cHJvcFswXSA9PSAnLSdcblx0XHRcdFx0XHRcdD8gcHJvcFxuXHRcdFx0XHRcdFx0OiBKU19UT19DU1NbcHJvcF0gfHxcblx0XHRcdFx0XHRcdFx0KEpTX1RPX0NTU1twcm9wXSA9IHByb3AucmVwbGFjZShDU1NfUkVHRVgsICctJCYnKS50b0xvd2VyQ2FzZSgpKTtcblxuXHRcdFx0XHRsZXQgc3VmZml4ID0gJzsnO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0XHQvLyBFeGNsdWRlIGN1c3RvbS1hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0IW5hbWUuc3RhcnRzV2l0aCgnLS0nKSAmJlxuXHRcdFx0XHRcdCFJU19OT05fRElNRU5TSU9OQUwudGVzdChuYW1lKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdWZmaXggPSAncHg7Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgPSBzdHIgKyBuYW1lICsgJzonICsgdmFsICsgc3VmZml4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoc3RyKSArICdcIic7XG5cdH1cblxuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHZhbHVlID09PSBmYWxzZSB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSByZXR1cm4gbmFtZTtcblxuXHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSkgKyAnXCInO1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIGR5bmFtaWMgY2hpbGQgcGFzc2VkIHRvIGBqc3hUZW1wbGF0ZWAuIFRoaXMgZnVuY3Rpb25cbiAqIGlzIG5vdCBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYVxuICogcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbCB8IFZOb2RlIHwgQXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn1cbiAqL1xuZnVuY3Rpb24ganN4RXNjYXBlKHZhbHVlKSB7XG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcblx0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIENoZWNrIGZvciBWTm9kZVxuXHRcdGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdmFsdWU7XG5cblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFsdWVbaV0gPSBqc3hFc2NhcGUodmFsdWVbaV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlVk5vZGUgYXMganN4LFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hzLFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hERVYsXG5cdEZyYWdtZW50LFxuXHQvLyBwcmVjb21waWxlZCBKU1ggdHJhbnNmb3JtXG5cdGpzeFRlbXBsYXRlLFxuXHRqc3hBdHRyLFxuXHRqc3hFc2NhcGVcbn07XG4iLCAiaW1wb3J0IHsgdXNlQXV0aCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHtcbiAgICBCR19NT0RFUyxcbiAgICBCTEVORF9NT0RFUyxcbiAgICBERUZBVUxUX0dMT0JBTF9GWCxcbiAgICBERUZBVUxUX0xBWUVSX0ZYLFxuICAgIE1BWF9MQVlFUlMsXG4gICAgUE9JTlRFUl9NT0RFUyxcbiAgICBUSUxFX01PREVTLFxuICAgIGNsYW1wLFxuICAgIGNsZWFuTmFtZSxcbiAgICBkZWNvZGVTY2VuZSxcbiAgICBlbmNvZGVTY2VuZSxcbiAgICB0eXBlIEJsZW5kTW9kZSxcbiAgICB0eXBlIEdsb2JhbEZ4LFxuICAgIHR5cGUgTGF5ZXJGeCxcbiAgICB0eXBlIE1lZGlhS2luZCxcbiAgICB0eXBlIFNjZW5lLFxuICAgIHR5cGUgU2NlbmVMYXllcixcbiAgICB0eXBlIFNjZW5lTWV0YSxcbn0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBXT1JMRF9QUkVTRVRTLFxuICAgIGJsZW5kSW5kZXgsXG4gICAgbXV0YXRlR2xvYmFsRngsXG4gICAgcmFuZG9tR2xvYmFsRngsXG4gICAgcmFuZG9tTGF5ZXJGeCxcbiAgICByZXNldExheWVyRnhFZmZlY3RzLFxufSBmcm9tIFwiLi9wcmVzZXRzXCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUVuZ2luZSxcbiAgICBoZXhUb1JnYixcbiAgICB0eXBlIEVuZ2luZUhhbmRsZSxcbiAgICB0eXBlIEZyYW1lU3RhdGUsXG4gICAgdHlwZSBMYXllclJlbmRlclN0YXRlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxufSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7XG4gICAgY2FudmFzVGh1bWIsXG4gICAgY2xhc3NpZnlCbG9iLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBkZWZhdWx0TGF5ZXJOYW1lLFxuICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzLFxuICAgIGxldmVsRnJvbVNwZWN0cnVtLFxuICAgIG1lZGlhS2luZExhYmVsLFxuICAgIHBhaW50QXVkaW9WaXN1YWwsXG4gICAgcGFpbnREYXRhQnl0ZXMsXG59IGZyb20gXCIuL21lZGlhXCI7XG5pbXBvcnQge1xuICAgIGRlY29kZUltYWdlQmxvYixcbiAgICBnZXRJbWFnZUJsb2IsXG4gICAgbG9hZEF1dG9zYXZlLFxuICAgIG5ld0lkLFxuICAgIHB1dEltYWdlQmxvYixcbiAgICBzYXZlQXV0b3NhdmUsXG59IGZyb20gXCIuL3N0b3JlXCI7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rTW9ubzp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcblxuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0tdm9pZDogIzA4MDgwYTtcbiAgLS1wYW5lbDogIzEwMTAxNDtcbiAgLS1wYW5lbC0yOiAjMTUxNTFhO1xuICAtLWxpbmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIC0tbGluZS1ob3Q6IHJnYmEoMjMyLCAyMzAsIDIyNCwgMC4zNSk7XG4gIC0tYWNpZDogI2U4ZTZlMDtcbiAgLS12aW9sZXQ6ICM4YTg2OTA7XG4gIC0taG90OiAjYTg3ODgwO1xuICAtLXBhcGVyOiAjZThlNmUwO1xuICAtLW11dGU6ICM4NTg1OGY7XG4gIC0tdHJhY2s6ICMzMDMwMzg7XG59XG5cbmh0bWwsIGJvZHksICNhcHAgeyBtYXJnaW46IDA7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7IG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7IH1cbmJvZHkgeyBmb250OiAxM3B4LzEuNDUgXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlOyBjb2xvcjogdmFyKC0tcGFwZXIpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2lkKTsgY29sb3I6IHZhcigtLXZvaWQpOyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjayk7IGJvcmRlci1yYWRpdXM6IDA7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4ua25vYi1yYW5nZSB7XG4gIC0tZmlsbDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNpZCkgMCB2YXIoLS1maWxsKSwgdmFyKC0tdHJhY2spIHZhcigtLWZpbGwpIDEwMCUpO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbn1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHZhcigtLXRyYWNrKTsgfVxuLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IH1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG59XG5cbkBrZXlmcmFtZXMgcmVjLWJsaW5rIHsgMCUsIDQ4JSB7IG9wYWNpdHk6IDE7IH0gNTIlLCAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfSB9XG4ucmVjLWRvdCB7IGFuaW1hdGlvbjogcmVjLWJsaW5rIDEuMXMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBmYWRlLXVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cbi5wb3AgeyBhbmltYXRpb246IGZhZGUtdXAgMTQwbXMgY3ViaWMtYmV6aWVyKC4yLC44LC4yLDEpIGJvdGg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXSB7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjBweDsgY3Vyc29yOiBwb2ludGVyOyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIgeyBwYWRkaW5nOiAxcHg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2ggeyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IH1cbnNlbGVjdC5meC1yZXMge1xuICBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1tdXRlKTsgcGFkZGluZzogMCA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRNIE1vbm9cIiwgdWktbW9ub3NwYWNlLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBvdXRsaW5lOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWxlY3QuZngtcmVzOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1saW5lLWhvdCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbnNlbGVjdC5meC1yZXM6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuMzU7IGN1cnNvcjogZGVmYXVsdDsgfVxuc2VsZWN0LmZ4LXJlcyBvcHRpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbmA7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBleHBvcnQgcmVzb2x1dGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEVYUE9SVF9SRVNPTFVUSU9OUyA9IFtcbiAgICB7IGlkOiBcInNjcmVlblwiLCBsYWJlbDogXCJTY3JlZW5cIiwgaGVpZ2h0OiAwIH0sXG4gICAgeyBpZDogXCI3MjBcIiwgbGFiZWw6IFwiNzIwcFwiLCBoZWlnaHQ6IDcyMCB9LFxuICAgIHsgaWQ6IFwiMTA4MFwiLCBsYWJlbDogXCIxMDgwcFwiLCBoZWlnaHQ6IDEwODAgfSxcbiAgICB7IGlkOiBcIjE0NDBcIiwgbGFiZWw6IFwiMTQ0MHBcIiwgaGVpZ2h0OiAxNDQwIH0sXG4gICAgeyBpZDogXCIyMTYwXCIsIGxhYmVsOiBcIjRLXCIsIGhlaWdodDogMjE2MCB9LFxuXSBhcyBjb25zdDtcblxudHlwZSBFeHBvcnRSZXNvbHV0aW9uSWQgPSAodHlwZW9mIEVYUE9SVF9SRVNPTFVUSU9OUylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBNQVhfRVhQT1JUX0VER0UgPSA4MTkyO1xuXG5mdW5jdGlvbiByZXNvbHZlRXhwb3J0U2l6ZShcbiAgICByZXNvbHV0aW9uSWQ6IEV4cG9ydFJlc29sdXRpb25JZCxcbiAgICBzdGFnZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxuICAgIC8qKiBGb3IgXCJzY3JlZW5cIiBQTkcgZXhwb3J0cyBcdTIwMTQgbXVsdGlwbHkgdGhlIGxpdmUgc3RhZ2UgYnkgdGhpcy4gKi9cbiAgICBzY3JlZW5TY2FsZSA9IDEsXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHN0YWdlLndpZHRoIC8gTWF0aC5tYXgoMSwgc3RhZ2UuaGVpZ2h0KSk7XG4gICAgbGV0IGhlaWdodDogbnVtYmVyO1xuICAgIGxldCB3aWR0aDogbnVtYmVyO1xuICAgIGlmIChyZXNvbHV0aW9uSWQgPT09IFwic2NyZWVuXCIpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzdGFnZS5oZWlnaHQgKiBzY3JlZW5TY2FsZSkpO1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoc3RhZ2Uud2lkdGggKiBzY3JlZW5TY2FsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXNldCA9IEVYUE9SVF9SRVNPTFVUSU9OUy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJlc29sdXRpb25JZCxcbiAgICAgICAgKTtcbiAgICAgICAgaGVpZ2h0ID0gcHJlc2V0Py5oZWlnaHQgfHwgMTA4MDtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIGFzcGVjdCkpO1xuICAgIH1cbiAgICBjb25zdCBsb25nZXN0ID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGxvbmdlc3QgPiBNQVhfRVhQT1JUX0VER0UpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNQVhfRVhQT1JUX0VER0UgLyBsb25nZXN0O1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gICAgfVxuICAgIC8vIEtlZXAgZXZlbiBkaW1lbnNpb25zIFx1MjAxNCBmcmllbmRsaWVyIGZvciB2aWRlbyBlbmNvZGVycy5cbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGggLSAod2lkdGggJSAyKSwgaGVpZ2h0OiBoZWlnaHQgLSAoaGVpZ2h0ICUgMikgfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzPzogc3RyaW5nIH07XG5jb25zdCBzdmcgPSAocHJvcHM6IEljb25Qcm9wcywgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuKSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICBjbGFzcz17cHJvcHMuY2xhc3MgPz8gXCJ3LVsxNXB4XSBoLVsxNXB4XVwifVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjhcIlxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuKTtcbmNvbnN0IElQbHVzID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJNMTIgNXYxNE01IDEyaDE0XCIgLz4pO1xuY29uc3QgSURpY2UgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjIuNVwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCIwLjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjlcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVdhbmQgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPHBhdGggZD1cIk01IDE5IDE3IDdtMi0yLTEuNSAxLjVNMTcgN2wxLjUgMS41TTkgNS41IDkuOCA3LjMgMTEuNiA4IDkuOCA4LjcgOSAxMC41IDguMiA4LjcgNi40IDggOC4yIDcuM1ptOSA3IC42IDEuNCAxLjQuNi0xLjQuNi0uNiAxLjQtLjYtMS40LTEuNC0uNiAxLjQtLjZaXCIgLz4sXG4gICAgKTtcbmNvbnN0IElTYXZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiAzdjEybTAgMCA0LTRtLTQgNC00LTRNNCAxN3YzaDE2di0zXCIgLz4pO1xuY29uc3QgSUZvbGRlciA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTMgNi41QTEuNSAxLjUgMCAwIDEgNC41IDVoNGwyIDIuNWg5QTEuNSAxLjUgMCAwIDEgMjEgOXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTVBMS41IDEuNSAwIDAgMSAzIDE4WlwiIC8+LFxuICAgICk7XG5jb25zdCBJTWljID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiOVwiIHk9XCIzXCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTFcIiByeD1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgMTEuNWE2LjUgNi41IDAgMCAwIDEzIDBNMTIgMTh2M1wiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSURvd25sb2FkID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiA0djExbTAgMCA0LjUtNC41TTEyIDE1IDcuNSAxMC41TTQgMTloMTZcIiAvPik7XG5jb25zdCBJRXhwYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00IDlWNGg1TTIwIDlWNGgtNU00IDE1djVoNW0xMS01djVoLTVcIiAvPik7XG5jb25zdCBJRXllID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIuNSAxMlM2IDUuNSAxMiA1LjUgMjEuNSAxMiAyMS41IDEyIDE4IDE4LjUgMTIgMTguNSAyLjUgMTIgMi41IDEyWlwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSUV5ZU9mZiA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk00IDRsMTYgMTZNOS45IDUuOUE5LjUgOS41IDAgMCAxIDEyIDUuNWM2IDAgOS41IDYuNSA5LjUgNi41YTE3IDE3IDAgMCAxLTMuMyA0TTYgNy41QTE2IDE2IDAgMCAwIDIuNSAxMlM2IDE4LjUgMTIgMTguNWE5IDkgMCAwIDAgMy0uNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVRyYXNoID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00LjUgNi41aDE1bS0xMS0yaDdtLTkuNSAyIDEgMTNoMTBsMS0xM00xMCAxMHY2bTQtNnY2XCIgLz4pO1xuY29uc3QgSUNvcHkgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjEuNVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDVWNS41TTE2IDVhMS41IDEuNSAwIDAgMC0xLjUtMS41aC05QTEuNSAxLjUgMCAwIDAgNCA1djlBMS41IDEuNSAwIDAgMCA1LjUgMTUuNUg2XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5jb25zdCBJVXAgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIm02IDE0IDYtNiA2IDZcIiAvPik7XG5jb25zdCBJRG93biA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwibTYgMTAgNiA2IDYtNlwiIC8+KTtcbmNvbnN0IElQYXVzZSA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwiTTkgNXYxNE0xNSA1djE0XCIgLz4pO1xuY29uc3QgSVBsYXkgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk03IDV2MTRsMTItN1pcIiAvPik7XG5jb25zdCBJUGFuZWwgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjQuNVwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHJ4PVwiMS41XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSA0LjV2MTVcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElNb3ZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgM3YxOE0zIDEyaDE4TTEyIDMgOS41IDUuNU0xMiAzbDIuNSAyLjVNMTIgMjFsLTIuNS0yLjVNMTIgMjFsMi41LTIuNU0zIDEybDIuNS0yLjVNMyAxMmwyLjUgMi41TTIxIDEybC0yLjUtMi41TTIxIDEybC0yLjUgMi41XCIgLz4sXG4gICAgKTtcbmNvbnN0IElTcGFyayA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTEyIDNsMS44IDUuMkwxOSAxMGwtNS4yIDEuOEwxMiAxN2wtMS44LTUuMkw1IDEwbDUuMi0xLjhabTcgMTEgLjggMi4yTDIyIDE3bC0yLjIuOEwxOSAyMGwtLjgtMi4yTDE2IDE3bDIuMi0uOFpcIiAvPixcbiAgICApO1xuY29uc3QgSVNldHRpbmdzID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOS40IDE1YTEuNjUgMS42NSAwIDAgMCAuMzMgMS44MmwuMDYuMDZhMiAyIDAgMCAxLTIuODMgMi44M2wtLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAtMS44Mi0uMzMgMS42NSAxLjY1IDAgMCAwLTEgMS41MVYyMWEyIDIgMCAwIDEtNCAwdi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzLTIuODNsLjA2LS4wNkExLjY1IDEuNjUgMCAwIDAgNC42OCAxNWExLjY1IDEuNjUgMCAwIDAtMS41MS0xSDNhMiAyIDAgMCAxIDAtNGguMDlBMS42NSAxLjY1IDAgMCAwIDQuNiA5YTEuNjUgMS42NSAwIDAgMC0uMzMtMS44MmwtLjA2LS4wNmEyIDIgMCAwIDEgMi44My0yLjgzbC4wNi4wNkExLjY1IDEuNjUgMCAwIDAgOSA0LjY4YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgNCAwdi4wOWExLjY1IDEuNjUgMCAwIDAgMSAxLjUxIDEuNjUgMS42NSAwIDAgMCAxLjgyLS4zM2wuMDYtLjA2YTIgMiAwIDAgMSAyLjgzIDIuODNsLS4wNi4wNkExLjY1IDEuNjUgMCAwIDAgMTkuNCA5YTEuNjUgMS42NSAwIDAgMCAxLjUxIDFIMjFhMiAyIDAgMCAxIDAgNGgtLjA5YTEuNjUgMS42NSAwIDAgMC0xLjUxIDF6XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHRpbmdzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbnR5cGUgQXBwU2V0dGluZ3MgPSB7XG4gICAgcmVjb3JkTWljQXVkaW86IGJvb2xlYW47XG59O1xuXG5jb25zdCBTRVRUSU5HU19LRVkgPSBcInZhdWRpby0yLXNldHRpbmdzXCI7XG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBBcHBTZXR0aW5ncyA9IHsgcmVjb3JkTWljQXVkaW86IGZhbHNlIH07XG5cbmZ1bmN0aW9uIGxvYWRTZXR0aW5ncygpOiBBcHBTZXR0aW5ncyB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VUVElOR1NfS0VZKTtcbiAgICAgICAgaWYgKCFyYXcpIHJldHVybiB7IC4uLkRFRkFVTFRfU0VUVElOR1MgfTtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIFBhcnRpYWw8QXBwU2V0dGluZ3M+O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkTWljQXVkaW86IEJvb2xlYW4ocGFyc2VkLnJlY29yZE1pY0F1ZGlvKSxcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZVNldHRpbmdzKHNldHRpbmdzOiBBcHBTZXR0aW5ncykge1xuICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFVFRJTkdTX0tFWSwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlIHF1b3RhIC8gcHJpdmF0ZSBtb2RlICovXG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBsYXllclNlZWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWQubGVuZ3RoOyBpKyspXG4gICAgICAgIGhhc2ggPSAoaGFzaCAqIDMxICsgaWQuY2hhckNvZGVBdChpKSkgPj4+IDA7XG4gICAgcmV0dXJuIChoYXNoICUgMTAwMCkgLyAxMDAwO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREZWcodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodmFsdWUpfVx1MDBCMGA7XG59XG5mdW5jdGlvbiBmb3JtYXRYKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt2YWx1ZS50b0ZpeGVkKDIpfVx1MDBEN2A7XG59XG5mdW5jdGlvbiBwYWQzKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCgoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCkpLnBhZFN0YXJ0KFxuICAgICAgICAzLFxuICAgICAgICBcIjBcIixcbiAgICApO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxheSBtb2RlIG1hcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqIFRyYW5zaWVudCBwZXItaGl0IGJvb3N0cyBsYXllcmVkIG9udG8gdGhlIHdvcmxkIEZYOyBkZWNheXMgZXZlcnkgZnJhbWUuICovXG50eXBlIEtpY2tTdGF0ZSA9IHtcbiAgICB6b29tOiBudW1iZXI7XG4gICAgc3Ryb2JlOiBudW1iZXI7XG4gICAgY2hyb21hOiBudW1iZXI7XG4gICAgcmlwcGxlOiBudW1iZXI7XG4gICAgc3dpcmw6IG51bWJlcjtcbn07XG5cbmNvbnN0IFBMQVlfRlhfS0VZUzoge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBjYXA6IHN0cmluZztcbiAgICBwYXJhbToga2V5b2YgR2xvYmFsRng7XG4gICAgbGFiZWw6IHN0cmluZztcbn1bXSA9IFtcbiAgICB7IGNvZGU6IFwiS2V5UVwiLCBjYXA6IFwiUVwiLCBwYXJhbTogXCJ3YXJwXCIsIGxhYmVsOiBcIndhcnBcIiB9LFxuICAgIHsgY29kZTogXCJLZXlXXCIsIGNhcDogXCJXXCIsIHBhcmFtOiBcInN3aXJsXCIsIGxhYmVsOiBcInN3aXJsXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5RVwiLCBjYXA6IFwiRVwiLCBwYXJhbTogXCJyaXBwbGVcIiwgbGFiZWw6IFwicmlwcGxlXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5UlwiLCBjYXA6IFwiUlwiLCBwYXJhbTogXCJ6b29tXCIsIGxhYmVsOiBcInR1bm5lbFwiIH0sXG4gICAgeyBjb2RlOiBcIktleVRcIiwgY2FwOiBcIlRcIiwgcGFyYW06IFwia2FsZWlkb1wiLCBsYWJlbDogXCJrYWxlaWRvXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5WVwiLCBjYXA6IFwiWVwiLCBwYXJhbTogXCJtaXJyb3JcIiwgbGFiZWw6IFwibWlycm9yXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5VVwiLCBjYXA6IFwiVVwiLCBwYXJhbTogXCJjaHJvbWFcIiwgbGFiZWw6IFwicHJpc21cIiB9LFxuICAgIHsgY29kZTogXCJLZXlJXCIsIGNhcDogXCJJXCIsIHBhcmFtOiBcImZlZWRiYWNrXCIsIGxhYmVsOiBcImVjaG9cIiB9LFxuICAgIHsgY29kZTogXCJLZXlPXCIsIGNhcDogXCJPXCIsIHBhcmFtOiBcInRyYWlsc1wiLCBsYWJlbDogXCJ0cmFpbHNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlQXCIsIGNhcDogXCJQXCIsIHBhcmFtOiBcInN0cm9iZVwiLCBsYWJlbDogXCJzdHJvYmVcIiB9LFxuXTtcblxuY29uc3QgUExBWV9QSUFOTzogeyBjb2RlOiBzdHJpbmc7IGNhcDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGNvZGU6IFwiS2V5QVwiLCBjYXA6IFwiQVwiIH0sXG4gICAgeyBjb2RlOiBcIktleVNcIiwgY2FwOiBcIlNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlEXCIsIGNhcDogXCJEXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5RlwiLCBjYXA6IFwiRlwiIH0sXG4gICAgeyBjb2RlOiBcIktleUdcIiwgY2FwOiBcIkdcIiB9LFxuICAgIHsgY29kZTogXCJLZXlIXCIsIGNhcDogXCJIXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5SlwiLCBjYXA6IFwiSlwiIH0sXG4gICAgeyBjb2RlOiBcIktleUtcIiwgY2FwOiBcIktcIiB9LFxuICAgIHsgY29kZTogXCJLZXlMXCIsIGNhcDogXCJMXCIgfSxcbiAgICB7IGNvZGU6IFwiU2VtaWNvbG9uXCIsIGNhcDogXCI7XCIgfSxcbiAgICB7IGNvZGU6IFwiUXVvdGVcIiwgY2FwOiBcIidcIiB9LFxuXTtcblxuY29uc3QgUExBWV9MQVlFUl9LRVlTOiB7IGNvZGU6IHN0cmluZzsgY2FwOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgY29kZTogXCJLZXlaXCIsIGNhcDogXCJaXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5WFwiLCBjYXA6IFwiWFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUNcIiwgY2FwOiBcIkNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlWXCIsIGNhcDogXCJWXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5QlwiLCBjYXA6IFwiQlwiIH0sXG4gICAgeyBjb2RlOiBcIktleU5cIiwgY2FwOiBcIk5cIiB9LFxuICAgIHsgY29kZTogXCJLZXlNXCIsIGNhcDogXCJNXCIgfSxcbiAgICB7IGNvZGU6IFwiQ29tbWFcIiwgY2FwOiBcIixcIiB9LFxuICAgIHsgY29kZTogXCJQZXJpb2RcIiwgY2FwOiBcIi5cIiB9LFxuICAgIHsgY29kZTogXCJTbGFzaFwiLCBjYXA6IFwiL1wiIH0sXG5dO1xuXG4vKiogQmFja3F1b3RlICsgZGlnaXQgcm93LCBpbmRleC1hbGlnbmVkIHdpdGggV09STERfUFJFU0VUUy4gKi9cbmNvbnN0IFBMQVlfUFJFU0VUX0NPREVTID0gW1xuICAgIFwiQmFja3F1b3RlXCIsXG4gICAgXCJEaWdpdDFcIixcbiAgICBcIkRpZ2l0MlwiLFxuICAgIFwiRGlnaXQzXCIsXG4gICAgXCJEaWdpdDRcIixcbiAgICBcIkRpZ2l0NVwiLFxuICAgIFwiRGlnaXQ2XCIsXG4gICAgXCJEaWdpdDdcIixcbiAgICBcIkRpZ2l0OFwiLFxuICAgIFwiRGlnaXQ5XCIsXG4gICAgXCJEaWdpdDBcIixcbl07XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZURlZzogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBhID0gc2F0dXJhdGlvbiAqIE1hdGgubWluKGxpZ2h0bmVzcywgMSAtIGxpZ2h0bmVzcyk7XG4gICAgY29uc3QgY2hhbm5lbCA9IChuOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgayA9IChuICsgaHVlRGVnIC8gMzApICUgMTI7XG4gICAgICAgIGNvbnN0IGMgPSBsaWdodG5lc3MgLSBhICogTWF0aC5tYXgoLTEsIE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSkpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChjICogMjU1KVxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBgIyR7Y2hhbm5lbCgwKX0ke2NoYW5uZWwoOCl9JHtjaGFubmVsKDQpfWA7XG59XG5cbnR5cGUgSW1hZ2VJbmZvID0ge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBtaXNzaW5nOiBib29sZWFuO1xuICAgIGtpbmQ6IE1lZGlhS2luZDtcbn07XG5cbnR5cGUgTWVkaWFSdW50aW1lID0ge1xuICAgIGtpbmQ6IE1lZGlhS2luZDtcbiAgICBvYmplY3RVcmw/OiBzdHJpbmc7XG4gICAgdmlkZW8/OiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIGF1ZGlvPzogSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBhbmFseXNlcj86IEFuYWx5c2VyTm9kZTtcbiAgICBzb3VyY2VOb2RlPzogTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xuICAgIHNwZWN0cnVtPzogVWludDhBcnJheTtcbn07XG5cbmZ1bmN0aW9uIGVtcHR5U2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiB7IG5hbWU6IFwiVW50aXRsZWRcIiwgbGF5ZXJzOiBbXSwgZ2xvYmFsOiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYIH0gfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNtYWxsIGNvbnRyb2xzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gU2xpZGVyKHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgZGVmPzogbnVtYmVyO1xuICAgIGZvcm1hdD86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xufSkge1xuICAgIGNvbnN0IG1pbiA9IHByb3BzLm1pbiA/PyAwO1xuICAgIGNvbnN0IG1heCA9IHByb3BzLm1heCA/PyAxO1xuICAgIGNvbnN0IHBjdCA9IGNsYW1wKCgocHJvcHMudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwLCAwLCAxMDApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayBweC0zIHB5LVs1cHhdIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuZGVmICE9PSB1bmRlZmluZWQgJiYgcHJvcHMub25DaGFuZ2UocHJvcHMuZGVmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9XCJEb3VibGUtY2xpY2sgdG8gcmVzZXRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMC41IGZsZXggaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJ1bGFyLW51bXMgdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLmZvcm1hdChwcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFkMyhwcm9wcy52YWx1ZSwgbWluLCBtYXgpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImtub2ItcmFuZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1maWxsXCI6IGAke3BjdH0lYCB9fVxuICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDAxfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNlY3Rpb24ocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGFjY2VudD86IGJvb2xlYW47XG4gICAgYWN0aW9ucz86IENvbXBvbmVudENoaWxkcmVuO1xuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHBiLTJcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGgtOCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgdGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gJHtwcm9wcy5hY2NlbnQgPyBcInRleHQtW3ZhcigtLWFjaWQpXVwiIDogXCJ0ZXh0LVt2YXIoLS1tdXRlKV1cIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImgtcHggZmxleC0xIGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hY3Rpb25zfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZWdSb3cocHJvcHM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgb25DaGFuZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNoYW5nZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGgtNiBmbGV4LTEgYm9yZGVyIGJvcmRlci1yLTAgYm9yZGVyLVt2YXIoLS1saW5lKV0gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBsYXN0OmJvcmRlci1yICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChwcm9wcy52YWx1ZSkgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1bdmFyKC0tYWNpZCldIHRleHQtW3ZhcigtLXZvaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1bdmFyKC0tcGFuZWwpXSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gVG9wQnV0dG9uKHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGRhbmdlcj86IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xuICAgIGxhYmVsPzogc3RyaW5nO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgIGNsYXNzPXtgZmxleCBoLVsyNnB4XSBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXIgcHgtMiB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpvcGFjaXR5LTMwICR7XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItW3ZhcigtLWFjaWQpXSBiZy1bdmFyKC0tYWNpZCldLzE1IHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcHMuZGFuZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bI2M0NWI2YV0gYmctWyNjNDViNmFdLzEwIHRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gbGc6aW5saW5lXCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwIG1vZGFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudHlwZSBIZWxwS2V5R3JvdXAgPSBcInByZXNldFwiIHwgXCJmeFwiIHwgXCJub3RlXCIgfCBcImxheWVyXCIgfCBcInN5c1wiIHwgXCJub25lXCI7XG5cbnR5cGUgSGVscEtleURlZiA9IHtcbiAgICBjYXA6IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB1PzogbnVtYmVyO1xuICAgIGdyb3VwOiBIZWxwS2V5R3JvdXA7XG4gICAgaHVlPzogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gSGVscEtleUNhcChwcm9wczogSGVscEtleURlZiAmIHsga2V5Pzogc3RyaW5nIHwgbnVtYmVyIH0pIHtcbiAgICBsZXQgYm9yZGVyID0gXCJ2YXIoLS1saW5lKVwiO1xuICAgIGxldCBjYXBDb2xvciA9IFwidmFyKC0tcGFwZXIpXCI7XG4gICAgbGV0IGxhYmVsQ29sb3IgPSBcInZhcigtLW11dGUpXCI7XG4gICAgbGV0IGJhY2tncm91bmQgPSBcInZhcigtLXBhbmVsKVwiO1xuICAgIGlmIChwcm9wcy5ncm91cCA9PT0gXCJwcmVzZXRcIikge1xuICAgICAgICBib3JkZXIgPSBcInJnYmEoMjMyLDIzMCwyMjQsMC40KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCJ2YXIoLS1hY2lkKVwiO1xuICAgICAgICBiYWNrZ3JvdW5kID0gXCJyZ2JhKDIzMiwyMzAsMjI0LDAuMDUpXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJmeFwiKSB7XG4gICAgICAgIGJvcmRlciA9IFwicmdiYSgxNjgsMTIwLDEyOCwwLjU1KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCIjY2Y5YWE2XCI7XG4gICAgICAgIGJhY2tncm91bmQgPSBcInJnYmEoMTY4LDEyMCwxMjgsMC4wOSlcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcIm5vdGVcIikge1xuICAgICAgICBjb25zdCBodWUgPSBwcm9wcy5odWUgPz8gMDtcbiAgICAgICAgYm9yZGVyID0gYGhzbGEoJHtodWV9LCA3MCUsIDYwJSwgMC43NSlgO1xuICAgICAgICBsYWJlbENvbG9yID0gYGhzbCgke2h1ZX0sIDc1JSwgNjglKWA7XG4gICAgICAgIGNhcENvbG9yID0gYGhzbCgke2h1ZX0sIDYwJSwgODQlKWA7XG4gICAgICAgIGJhY2tncm91bmQgPSBgaHNsYSgke2h1ZX0sIDcwJSwgNTAlLCAwLjEzKWA7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJsYXllclwiKSB7XG4gICAgICAgIGJvcmRlciA9IFwicmdiYSgxMjUsMTY1LDEzMSwwLjU1KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCIjOWNjNGEyXCI7XG4gICAgICAgIGJhY2tncm91bmQgPSBcInJnYmEoMTI1LDE2NSwxMzEsMC4wOSlcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcIm5vbmVcIikge1xuICAgICAgICBjYXBDb2xvciA9IFwidmFyKC0tdHJhY2spXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBoLVs0NnB4XSBmbGV4LXNocmluay0wIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBib3JkZXIgcHgtMC41IHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwcm9wcy51ID8/IDEpICogNDZ9cHhgLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bMTFweF0gbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY2FwQ29sb3IgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2FwfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge3Byb3BzLmxhYmVsID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bNi41cHhdIHVwcGVyY2FzZSBsZWFkaW5nLW5vbmUgdHJhY2tpbmctWzAuMDhlbV1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogbGFiZWxDb2xvciB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBIZWxwTGlzdChwcm9wczogeyB0aXRsZTogc3RyaW5nOyBpdGVtczogW3N0cmluZywgc3RyaW5nXVtdIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItMiB0ZXh0LVs5cHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNmVtXSB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbXMubWFwKChbdGVybSwgYm9keV0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bdmFyKC0tcGFwZXIpXVwiPnt0ZXJtfTwvc3Bhbj4gXHUyMDE0IHtib2R5fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gSGVscE1vZGFsKHByb3BzOiB7IG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuICAgIGNvbnN0IG5vdGVIdWUgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgTWF0aC5yb3VuZCgoaW5kZXggLyBQTEFZX1BJQU5PLmxlbmd0aCkgKiAzNjApO1xuICAgIGNvbnN0IHJvd3M6IHsgb2Zmc2V0OiBudW1iZXI7IGtleXM6IEhlbHBLZXlEZWZbXSB9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJgXCIsIGxhYmVsOiBcIjAwXCIsIGdyb3VwOiBcInByZXNldFwiIH0sXG4gICAgICAgICAgICAgICAgLi4uV09STERfUFJFU0VUUy5zbGljZSgxKS5tYXAoKHByZXNldCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDogU3RyaW5nKChpbmRleCArIDEpICUgMTApLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2V0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcInByZXNldFwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCItXCIsIGdyb3VwOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIj1cIiwgZ3JvdXA6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMzJCXCIsIHU6IDEuNiwgbGFiZWw6IFwid2FzaFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAga2V5czogW1xuICAgICAgICAgICAgICAgIHsgY2FwOiBcIlx1MjFFNVwiLCB1OiAxLjQsIGxhYmVsOiBcImhpZGUgdWlcIiwgZ3JvdXA6IFwic3lzXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX0ZYX0tFWVMubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDoga2V5LmNhcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwiZnhcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiW1wiLCBsYWJlbDogXCJzbG93ZXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIl1cIiwgbGFiZWw6IFwiZmFzdGVyXCIsIGdyb3VwOiBcImZ4XCIgfSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcXFxcXCIsIHU6IDEuMiwgbGFiZWw6IFwic29sYXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNixcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRUFcIiwgdTogMS43LCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX1BJQU5PLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcdTI2NkFcIixcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwibm90ZVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICBodWU6IG5vdGVIdWUoaW5kZXgpLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIzQ0VcIiwgdTogMi4wLCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMzAsXG4gICAgICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMUU3XCIsIHU6IDIuMiwgbGFiZWw6IFwiaW52ZXJ0XCIsIGdyb3VwOiBcInN5c1wiIH0sXG4gICAgICAgICAgICAgICAgLi4uUExBWV9MQVlFUl9LRVlTLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGx5ciAke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogXCJsYXllclwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRTcgL1wiLCB1OiAxLjUsIGxhYmVsOiBcIm1hbnVhbFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNzAsXG4gICAgICAgICAgICBrZXlzOiBbeyBjYXA6IFwic3BhY2VcIiwgdTogNywgbGFiZWw6IFwiZnJlZXplIHRpbWVcIiwgZ3JvdXA6IFwic3lzXCIgfV0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei1bNzBdIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGJnLWJsYWNrLzc1IHAtNFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AgbWF4LWgtWzg4dmhdIHctZnVsbCBtYXgtdy1bODQwcHhdIG92ZXJmbG93LXktYXV0byBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVsxMXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMThlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5IG1vZGUgXHUwMEI3IGluc3RydW1lbnQgbWFudWFsXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVt2YXIoLS1tdXRlKV0gc206aW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVyeSBtb3ZlIGlzIHBlcm1hbmVudCBcdTIwMTQgYW5kIHVuZG9hYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTIgcHktMC41IGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteC1hdXRvIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtaW4tdy1bNzQwcHhdIGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBnYXAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke3Jvdy5vZmZzZXR9cHhgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmtleXMubWFwKChrZXksIGtleUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscEtleUNhcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwPXtrZXkuY2FwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtrZXkubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdT17a2V5LnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e2tleS5ncm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodWU9e2tleS5odWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBnYXAtNSBib3JkZXItdCBib3JkZXItW3ZhcigtLWxpbmUpXSBwLTQgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YW1wIHRoZSBjdXJzb3IgZmllbGQgKHZvcnRleCAvIGdyYXZpdHkgLyBwcmlzbSAvIG1lbHQpIGludG8gdGhlIHdvcmxkIGZvciBnb29kIFx1MjAxNCB0aGUgZmFydGhlciBmcm9tIGNlbnRlciwgdGhlIGhhcmRlciB0aGUgaGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFwIGEgbGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGUgc3RhbXAgbGFuZHMgb24gdGhhdCBsYXllciBpbnN0ZWFkIG9mIHRoZSB3b3JsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wic2hpZnQtdGFwXCIsIFwiY2FydmUgXHUyMDE0IHN1YnRyYWN0cyBpbnN0ZWFkIG9mIGFkZHNcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiZG91YmxlLXRhcFwiLCBcInN0ZXAgdGhlIGthbGVpZG9zY29wZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJhZyArIHJlbGVhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHJvdyB0aGUgZWNobzogZmVlZGJhY2sgdHJhaWxzIGluaGVyaXQgdGhlIGRpcmVjdGlvbiBvZiB5b3VyIHRocm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzb290aGUgXHUyMDE0IGNhbG1zIHRoZSB3b3JsZCAob3IganVzdCB0aGUgbGF5ZXIgdW5kZXIgdGhlIGN1cnNvcilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIndoZWVsXCIsIFwiaHVlIG9yYml0IFx1MDBCNyBzaGlmdCt3aGVlbCA9IHNhdHVyYXRpb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVscExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiS2V5Ym9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJudW1iZXIgcm93XCIsIFwid29ybGQgcHJlc2V0cyAwMFx1MjAxMzEwXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxd2VydHkgcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVtcCBhbiBlZmZlY3QgdXAgXHUwMEI3IHNoaWZ0IGRyYWlucyBpdCBcdTAwQjcgaG9sZCB0byByYW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZSByb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGUgaHVlIHBpYW5vIFx1MjAxNCBlYWNoIGtleSByZXR1bmVzIGV2ZXJ5IGxheWVyIHRvIGEgY29sb3Igbm90ZSBcdTAwQjcgc2hpZnQgcGFpbnRzIHRoZSBiYWNrZ3JvdW5kIGluc3RlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaWtlIGxheWVycyAxXHUyMDEzMTA6IHJlLXJvbGxzIHRoYXQgbGF5ZXIncyBGWCBcdTAwQjcgc2hpZnQgcmVzZXRzIGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJbIF1cIiwgXCJ0aW1lIHNsb3dlciAvIGZhc3RlciBcdTAwQjcgXFxcXCBzb2xhcml6ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJhcnJvd3NcIiwgXCJcdTIxOTAgXHUyMTkyIGh1ZSBvcmJpdCBcdTAwQjcgXHUyMTkxIFx1MjE5MyBzYXR1cmF0aW9uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImJhY2tzcGFjZVwiLCBcIndhc2ggdGhlIHdvcmxkIGJhY2sgdG8gY2xlYW4gc2lnbmFsXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdsb2JhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImVzY1wiLCBcImJhY2sgdG8gYXJyYW5nZSBtb2RlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInNwYWNlXCIsIFwiZnJlZXplIHRpbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGFiXCIsIFwiaGlkZSB0aGUgaW50ZXJmYWNlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlx1MjMxOFogLyBcdTIxRTdcdTIzMThaXCIsIFwidW5kbyAvIHJlZG8gYW55IG1vdmVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hvb3NlIHZvcnRleCAvIGdyYXZpdHkgLyBwcmlzbSAvIG1lbHQgdW5kZXIgQ3Vyc29yIHNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gU2V0dGluZ3NUb2dnbGUocHJvcHM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhpbnQ6IHN0cmluZztcbiAgICBjaGVja2VkOiBib29sZWFuO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICByb2xlPVwic3dpdGNoXCJcbiAgICAgICAgICAgIGFyaWEtY2hlY2tlZD17cHJvcHMuY2hlY2tlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2hhbmdlKCFwcm9wcy5jaGVja2VkKX1cbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCB3LWZ1bGwgaXRlbXMtc3RhcnQgZ2FwLTMgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHB4LTMgcHktMyB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLVt2YXIoLS1saW5lLWhvdCldIGRpc2FibGVkOm9wYWNpdHktNDBcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTAgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXQtMSBibG9jayBmb250LW1vbm8gdGV4dC1bOS41cHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhpbnR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz17YG10LTAuNSBmbGV4IGgtWzE4cHhdIHctWzM0cHhdIGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIGJvcmRlciBweC0wLjUgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldIGJnLVt2YXIoLS1hY2lkKV0vMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS12b2lkKV1cIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BoLVsxMnB4XSB3LVsxMnB4XSB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2xhdGUteC1bMTRweF0gYmctW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zbGF0ZS14LTAgYmctW3ZhcigtLW11dGUpXVwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNldHRpbmdzTW9kYWwocHJvcHM6IHtcbiAgICBzZXR0aW5nczogQXBwU2V0dGluZ3M7XG4gICAgcmVjb3JkaW5nOiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAocGF0Y2g6IFBhcnRpYWw8QXBwU2V0dGluZ3M+KSA9PiB2b2lkO1xuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotWzcwXSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1ibGFjay83NSBwLTRcIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9wIHctZnVsbCBtYXgtdy1bNDIwcHhdIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHNoYWRvdy0yeGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xOGVtXSB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTIgcHktMC41IGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlY29yZGluZ1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc1RvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaWMgYXVkaW8gaW4gcmVjb3JkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJNdXggdGhlIGxpdmUgbWljcm9waG9uZSBpbnRvIHJlY29yZGVkIHZpZGVvLiBVc2VzIHRoZSBzYW1lIG1pYyB0aGF0IGRyaXZlcyBhdWRpby1yZWFjdCBcdTIwMTQgdHVybiB0aGUgbWljIG9uIGZpcnN0LCBvciByZWNvcmRpbmcgd2lsbCByZXF1ZXN0IGl0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5zZXR0aW5ncy5yZWNvcmRNaWNBdWRpb31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5yZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGNoZWNrZWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoeyByZWNvcmRNaWNBdWRpbzogY2hlY2tlZCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCBzY2VuZXNRdWVyeSA9IHVzZVF1ZXJ5PHsgcmVhZHk6IGJvb2xlYW47IGl0ZW1zOiBTY2VuZU1ldGFbXSB9PihcbiAgICAgICAgXCJzY2VuZXNcIixcbiAgICApO1xuICAgIGNvbnN0IHNhdmVTY2VuZU11dGF0aW9uID0gdXNlTXV0YXRpb248XG4gICAgICAgIFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddLFxuICAgICAgICB7IGlkOiBzdHJpbmcgfVxuICAgID4oXCJzYXZlU2NlbmVcIik7XG4gICAgY29uc3QgZGVsZXRlU2NlbmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uPFtzdHJpbmddLCB2b2lkPihcImRlbGV0ZVNjZW5lXCIpO1xuICAgIGNvbnN0IGdldFNjZW5lTXV0YXRpb24gPSB1c2VNdXRhdGlvbjxcbiAgICAgICAgW3N0cmluZ10sXG4gICAgICAgIHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVxuICAgID4oXCJnZXRTY2VuZVwiKTtcblxuICAgIGNvbnN0IFtzY2VuZSwgc2V0U2NlbmVdID0gdXNlU3RhdGU8U2NlbmU+KGVtcHR5U2NlbmUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtpbWFnZUluZm8sIHNldEltYWdlSW5mb10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBJbWFnZUluZm8+Pih7fSk7XG4gICAgY29uc3QgW3N0YWdlTW9kZSwgc2V0U3RhZ2VNb2RlXSA9IHVzZVN0YXRlPFwiYXJyYW5nZVwiIHwgXCJwbGF5XCI+KFwiYXJyYW5nZVwiKTtcbiAgICBjb25zdCBbdWlIaWRkZW4sIHNldFVpSGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZnJvemVuLCBzZXRGcm96ZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFttaWNBY3RpdmUsIHNldE1pY0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcmVjb3JkaW5nV2l0aE1pYywgc2V0UmVjb3JkaW5nV2l0aE1pY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2V4cG9ydFJlcywgc2V0RXhwb3J0UmVzXSA9IHVzZVN0YXRlPEV4cG9ydFJlc29sdXRpb25JZD4oXCIxMDgwXCIpO1xuICAgIGNvbnN0IFtmdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcHJlc2V0c09wZW4sIHNldFByZXNldHNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2NlbmVzT3Blbiwgc2V0U2NlbmVzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2hlbHBPcGVuLCBzZXRIZWxwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NldHRpbmdzT3Blbiwgc2V0U2V0dGluZ3NPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlPEFwcFNldHRpbmdzPigoKSA9PiBsb2FkU2V0dGluZ3MoKSk7XG4gICAgY29uc3QgW3NlcnZlclNjZW5lSWQsIHNldFNlcnZlclNjZW5lSWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbdG9hc3QsIHNldFRvYXN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtkcmFnT3Zlciwgc2V0RHJhZ092ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlbmdpbmVFcnJvciwgc2V0RW5naW5lRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBzdGFnZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGVuZ2luZVJlZiA9IHVzZVJlZjxFbmdpbmVIYW5kbGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzY2VuZVJlZiA9IHVzZVJlZihzY2VuZSk7XG4gICAgY29uc3QgaW1hZ2VJbmZvUmVmID0gdXNlUmVmKGltYWdlSW5mbyk7XG4gICAgY29uc3Qgc3RhZ2VNb2RlUmVmID0gdXNlUmVmKHN0YWdlTW9kZSk7XG4gICAgY29uc3QgZnJvemVuUmVmID0gdXNlUmVmKGZyb3plbik7XG4gICAgY29uc3QgdGltZVJlZiA9IHVzZVJlZihNYXRoLnJhbmRvbSgpICogOTApO1xuICAgIGNvbnN0IGF1ZGlvTGV2ZWxSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgYW5hbHlzZXJSZWYgPSB1c2VSZWY8QW5hbHlzZXJOb2RlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0UmVmID0gdXNlUmVmPEF1ZGlvQ29udGV4dCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IG1pY1N0cmVhbVJlZiA9IHVzZVJlZjxNZWRpYVN0cmVhbSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHNwZWN0cnVtUmVmID0gdXNlUmVmKG5ldyBVaW50OEFycmF5KDEyOCkpO1xuICAgIGNvbnN0IHJlY29yZGVyUmVmID0gdXNlUmVmPE1lZGlhUmVjb3JkZXIgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBjaHVua3NSZWYgPSB1c2VSZWY8QmxvYltdPihbXSk7XG4gICAgY29uc3QgdG9hc3RUaW1lclJlZiA9IHVzZVJlZigwKTtcbiAgICBjb25zdCBsYXN0UG9pbnRlclJlZiA9IHVzZVJlZih7IHg6IDAuNSwgeTogMC41LCBhdDogMCB9KTtcbiAgICBjb25zdCBwb2ludGVyUmVmID0gdXNlUmVmPFBvaW50ZXJTdGF0ZT4oe1xuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6IDAuNSxcbiAgICAgICAgdmVsb2NpdHlYOiAwLFxuICAgICAgICB2ZWxvY2l0eVk6IDAsXG4gICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IGRyYWdSZWYgPSB1c2VSZWY8e1xuICAgICAgICBsYXllcklkOiBzdHJpbmc7XG4gICAgICAgIHN0YXJ0WDogbnVtYmVyO1xuICAgICAgICBzdGFydFk6IG51bWJlcjtcbiAgICAgICAgZnhYOiBudW1iZXI7XG4gICAgICAgIGZ4WTogbnVtYmVyO1xuICAgIH0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzdGFnZVNpemVSZWYgPSB1c2VSZWYoeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH0pO1xuICAgIGNvbnN0IHF1YWxpdHlSZWYgPSB1c2VSZWYoMS41KTtcbiAgICBjb25zdCBleHBvcnRSZXNSZWYgPSB1c2VSZWYoZXhwb3J0UmVzKTtcbiAgICBjb25zdCBleHBvcnRMb2NrUmVmID0gdXNlUmVmPHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGw+KFxuICAgICAgICBudWxsLFxuICAgICk7XG4gICAgY29uc3QgZHJhZ1JhZlJlZiA9IHVzZVJlZigwKTtcbiAgICBjb25zdCBkcmFnUG9pbnRSZWYgPSB1c2VSZWYoeyB4OiAwLCB5OiAwIH0pO1xuICAgIGNvbnN0IG1lZGlhUnVudGltZXNSZWYgPSB1c2VSZWYobmV3IE1hcDxzdHJpbmcsIE1lZGlhUnVudGltZT4oKSk7XG4gICAgY29uc3QgaGVscE9wZW5SZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHNldHRpbmdzT3BlblJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3Qgc2V0dGluZ3NSZWYgPSB1c2VSZWYoc2V0dGluZ3MpO1xuICAgIGNvbnN0IHJlY29yZGluZ01pY1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3Qga2lja1JlZiA9IHVzZVJlZjxLaWNrU3RhdGU+KHtcbiAgICAgICAgem9vbTogMCxcbiAgICAgICAgc3Ryb2JlOiAwLFxuICAgICAgICBjaHJvbWE6IDAsXG4gICAgICAgIHJpcHBsZTogMCxcbiAgICAgICAgc3dpcmw6IDAsXG4gICAgfSk7XG4gICAgY29uc3QgaGlzdG9yeVJlZiA9IHVzZVJlZjx7IHN0YWNrOiBzdHJpbmdbXTsgaW5kZXg6IG51bWJlciB9Pih7XG4gICAgICAgIHN0YWNrOiBbXSxcbiAgICAgICAgaW5kZXg6IC0xLFxuICAgIH0pO1xuICAgIGNvbnN0IGhpc3RvcnlTa2lwUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBwbGF5R2VzdHVyZVJlZiA9IHVzZVJlZjx7XG4gICAgICAgIHN0YXJ0VTogbnVtYmVyO1xuICAgICAgICBzdGFydFY6IG51bWJlcjtcbiAgICAgICAgbGFzdFU6IG51bWJlcjtcbiAgICAgICAgbGFzdFY6IG51bWJlcjtcbiAgICAgICAgcGF0aDogbnVtYmVyO1xuICAgICAgICBhdDogbnVtYmVyO1xuICAgICAgICBzaGlmdDogYm9vbGVhbjtcbiAgICB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgbGFzdFRhcEF0UmVmID0gdXNlUmVmKDApO1xuXG4gICAgc2NlbmVSZWYuY3VycmVudCA9IHNjZW5lO1xuICAgIGltYWdlSW5mb1JlZi5jdXJyZW50ID0gaW1hZ2VJbmZvO1xuICAgIHN0YWdlTW9kZVJlZi5jdXJyZW50ID0gc3RhZ2VNb2RlO1xuICAgIGZyb3plblJlZi5jdXJyZW50ID0gZnJvemVuO1xuICAgIGV4cG9ydFJlc1JlZi5jdXJyZW50ID0gZXhwb3J0UmVzO1xuICAgIGhlbHBPcGVuUmVmLmN1cnJlbnQgPSBoZWxwT3BlbjtcbiAgICBzZXR0aW5nc09wZW5SZWYuY3VycmVudCA9IHNldHRpbmdzT3BlbjtcbiAgICBzZXR0aW5nc1JlZi5jdXJyZW50ID0gc2V0dGluZ3M7XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9XG4gICAgICAgIHNjZW5lLmxheWVycy5maW5kKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHNlbGVjdGVkSWQpID8/IG51bGw7XG4gICAgY29uc3Qgc2NlbmVMaXN0ID0gc2NlbmVzUXVlcnk/Lml0ZW1zID8/IFtdO1xuXG4gICAgZnVuY3Rpb24gc2hvd1RvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzZXRUb2FzdChtZXNzYWdlKTtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0b2FzdFRpbWVyUmVmLmN1cnJlbnQpO1xuICAgICAgICB0b2FzdFRpbWVyUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRUb2FzdChcIlwiKSwgMjYwMCk7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNjZW5lIHVwZGF0ZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbChwYXRjaDogUGFydGlhbDxHbG9iYWxGeD4pIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBnbG9iYWw6IHsgLi4ucHJldmlvdXMuZ2xvYmFsLCAuLi5wYXRjaCB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5ZXJGeChsYXllcklkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPExheWVyRng+KSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT5cbiAgICAgICAgICAgICAgICBsYXllci5pZCA9PT0gbGF5ZXJJZFxuICAgICAgICAgICAgICAgICAgICA/IHsgLi4ubGF5ZXIsIGZ4OiB7IC4uLmxheWVyLmZ4LCAuLi5wYXRjaCB9IH1cbiAgICAgICAgICAgICAgICAgICAgOiBsYXllcixcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTGF5ZXJGeChsYXllcklkOiBzdHJpbmcsIGZ4OiBMYXllckZ4KSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT5cbiAgICAgICAgICAgICAgICBsYXllci5pZCA9PT0gbGF5ZXJJZCA/IHsgLi4ubGF5ZXIsIGZ4IH0gOiBsYXllcixcbiAgICAgICAgICAgICksXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlTGF5ZXIobGF5ZXJJZDogc3RyaW5nLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2aW91cy5sYXllcnMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGluZGV4ICsgZGVsdGE7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwIHx8IG5leHQgPCAwIHx8IG5leHQgPj0gcHJldmlvdXMubGF5ZXJzLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBwcmV2aW91cy5sYXllcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IFtsYXllcl0gPSBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGxheWVycy5zcGxpY2UobmV4dCwgMCwgbGF5ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldmlvdXMsIGxheWVycyB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkdXBsaWNhdGVMYXllcihsYXllcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJldmlvdXMubGF5ZXJzLmxlbmd0aCA+PSBNQVhfTEFZRVJTKSByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZpb3VzLmxheWVycy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gcHJldmlvdXM7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBwcmV2aW91cy5sYXllcnNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY29weTogU2NlbmVMYXllciA9IHtcbiAgICAgICAgICAgICAgICBpZDogbmV3SWQoXCJsYXllclwiKSxcbiAgICAgICAgICAgICAgICBpbWFnZUlkOiBzb3VyY2UuaW1hZ2VJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtzb3VyY2UubmFtZX0gY29weWAsXG4gICAgICAgICAgICAgICAgbWVkaWFLaW5kOiBzb3VyY2UubWVkaWFLaW5kLFxuICAgICAgICAgICAgICAgIGZ4OiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnNvdXJjZS5meCxcbiAgICAgICAgICAgICAgICAgICAgeDogc291cmNlLmZ4LnggKyAwLjA2LFxuICAgICAgICAgICAgICAgICAgICB5OiBzb3VyY2UuZngueSAtIDAuMDYsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBwcmV2aW91cy5sYXllcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGxheWVycy5zcGxpY2UoaW5kZXggKyAxLCAwLCBjb3B5KTtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoY29weS5pZCk7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2aW91cywgbGF5ZXJzIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxheWVyKGxheWVySWQ6IHN0cmluZykge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWQgPSBwcmV2aW91cy5sYXllcnMuZmluZChcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IHByZXZpb3VzLmxheWVycy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCAhPT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcmVtb3ZlZCAmJlxuICAgICAgICAgICAgICAgICFsYXllcnMuc29tZSgobGF5ZXIpID0+IGxheWVyLmltYWdlSWQgPT09IHJlbW92ZWQuaW1hZ2VJZClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBJbmRleGVkREIgYmxvYiBpcyBrZXB0IHNvIHVuZG8gY2FuIGJyaW5nIHRoZSBsYXllciBiYWNrLlxuICAgICAgICAgICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUocmVtb3ZlZC5pbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8ucmVtb3ZlSW1hZ2UocmVtb3ZlZC5pbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4uaW5mbyB9O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV4dFtyZW1vdmVkLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoKGN1cnJlbnQpID0+IChjdXJyZW50ID09PSBsYXllcklkID8gbnVsbCA6IGN1cnJlbnQpKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHVuZG8gLyByZWRvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIGFwcGx5SGlzdG9yeVNuYXBzaG90KHNuYXBzaG90OiBzdHJpbmcpIHtcbiAgICAgICAgaGlzdG9yeVNraXBSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVkID0gZGVjb2RlU2NlbmUoc25hcHNob3QpO1xuICAgICAgICBzZXRTY2VuZShyZXN0b3JlZCk7XG4gICAgICAgIHNjZW5lUmVmLmN1cnJlbnQgPSByZXN0b3JlZDtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZCgoY3VycmVudCkgPT5cbiAgICAgICAgICAgIHJlc3RvcmVkLmxheWVycy5zb21lKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGN1cnJlbnQpXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50XG4gICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICApO1xuICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICB2b2lkIGh5ZHJhdGVTY2VuZUltYWdlcyhyZXN0b3JlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5kb1NjZW5lKCkge1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZW5jb2RlU2NlbmUoc2NlbmVSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChoaXN0b3J5LmluZGV4ID49IDAgJiYgaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSAhPT0gY3VycmVudCkge1xuICAgICAgICAgICAgLy8gQSBjaGFuZ2UgaXMgc3RpbGwgaW5zaWRlIHRoZSBkZWJvdW5jZSB3aW5kb3cgXHUyMDE0IGNvbW1pdCBpdCBmaXJzdFxuICAgICAgICAgICAgLy8gc28gcmVkbyBjYW4gYnJpbmcgaXQgYmFjay5cbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sgPSBoaXN0b3J5LnN0YWNrLnNsaWNlKDAsIGhpc3RvcnkuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgIGhpc3RvcnkuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJOb3RoaW5nIHRvIHVuZG9cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaGlzdG9yeS5pbmRleC0tO1xuICAgICAgICBhcHBseUhpc3RvcnlTbmFwc2hvdChoaXN0b3J5LnN0YWNrW2hpc3RvcnkuaW5kZXhdKTtcbiAgICAgICAgc2hvd1RvYXN0KFwiVW5kb1wiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWRvU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChoaXN0b3J5LmluZGV4ID49IGhpc3Rvcnkuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiTm90aGluZyB0byByZWRvXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpc3RvcnkuaW5kZXgrKztcbiAgICAgICAgYXBwbHlIaXN0b3J5U25hcHNob3QoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSk7XG4gICAgICAgIHNob3dUb2FzdChcIlJlZG9cIik7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lZGlhIGltcG9ydHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJ1bnRpbWUgPSBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuZ2V0KGltYWdlSWQpO1xuICAgICAgICBpZiAoIXJ1bnRpbWUpIHJldHVybjtcbiAgICAgICAgcnVudGltZS52aWRlbz8ucGF1c2UoKTtcbiAgICAgICAgcnVudGltZS5hdWRpbz8ucGF1c2UoKTtcbiAgICAgICAgaWYgKHJ1bnRpbWUudmlkZW8pIHtcbiAgICAgICAgICAgIHJ1bnRpbWUudmlkZW8ucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgcnVudGltZS52aWRlby5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bnRpbWUuYXVkaW8pIHtcbiAgICAgICAgICAgIHJ1bnRpbWUuYXVkaW8ucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgcnVudGltZS5hdWRpby5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bnRpbWUuc291cmNlTm9kZT8uZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIGFscmVhZHkgZGlzY29ubmVjdGVkXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bnRpbWUuYW5hbHlzZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRpc2Nvbm5lY3RlZFxuICAgICAgICB9XG4gICAgICAgIGlmIChydW50aW1lLm9iamVjdFVybCkgVVJMLnJldm9rZU9iamVjdFVSTChydW50aW1lLm9iamVjdFVybCk7XG4gICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5kZWxldGUoaW1hZ2VJZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZUFsbE1lZGlhUnVudGltZXMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2VJZCBvZiBbLi4ubWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmtleXMoKV0pIHtcbiAgICAgICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBlbnN1cmVNZWRpYUF1ZGlvQ29udGV4dCgpOiBQcm9taXNlPEF1ZGlvQ29udGV4dD4ge1xuICAgICAgICBpZiAoIWF1ZGlvQ29udGV4dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBhdWRpb0NvbnRleHRSZWYuY3VycmVudCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdWRpb0NvbnRleHRSZWYuY3VycmVudDtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhY3RpdmF0ZU1lZGlhKFxuICAgICAgICBpbWFnZUlkOiBzdHJpbmcsXG4gICAgICAgIGJsb2I6IEJsb2IsXG4gICAgICAgIGtpbmQ6IE1lZGlhS2luZCxcbiAgICAgICAgX2ZpbGVOYW1lOiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxJbWFnZUluZm8+IHtcbiAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKGtpbmQgPT09IFwiaW1hZ2VcIikge1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGRlY29kZUltYWdlQmxvYihibG9iKTtcbiAgICAgICAgICAgIGVuZ2luZT8uc2V0SW1hZ2UoaW1hZ2VJZCwgZGVjb2RlZC5jYW52YXMpO1xuICAgICAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LnNldChpbWFnZUlkLCB7IGtpbmQgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBkZWNvZGVkLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZGVjb2RlZC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGh1bWI6IGRlY29kZWQudGh1bWIsXG4gICAgICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2luZCA9PT0gXCJkYXRhXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBibG9iLnNsaWNlKDAsIDEwMjQgKiAxMDI0KS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgcGFpbnREYXRhQnl0ZXMoY2FudmFzLCBuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAgICAgICAgICAgIGVuZ2luZT8uc2V0SW1hZ2UoaW1hZ2VJZCwgY2FudmFzKTtcbiAgICAgICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwgeyBraW5kLCBjYW52YXMgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRodW1iOiBjYW52YXNUaHVtYihjYW52YXMsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCksXG4gICAgICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2luZCA9PT0gXCJ2aWRlb1wiKSB7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG4gICAgICAgICAgICB2aWRlby5wbGF5c0lubGluZSA9IHRydWU7XG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwiXCIpO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKFwid2Via2l0LXBsYXlzaW5saW5lXCIsIFwiXCIpO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gb2JqZWN0VXJsO1xuXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25SZWFkeSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGVjb2RlIHRoYXQgdmlkZW9cIikpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlZGRhdGFcIiwgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICB2aWRlby5sb2FkKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCB2aWRlby52aWRlb1dpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIHZpZGVvLnZpZGVvSGVpZ2h0KTtcbiAgICAgICAgICAgIGVuZ2luZT8uc2V0SW1hZ2UoaW1hZ2VJZCwgdmlkZW8pO1xuICAgICAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LnNldChpbWFnZUlkLCB7IGtpbmQsIG9iamVjdFVybCwgdmlkZW8gfSk7XG4gICAgICAgICAgICB2b2lkIHZpZGVvLnBsYXkoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICB0aHVtYjogY2FudmFzVGh1bWIodmlkZW8sIHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXVkaW9cbiAgICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIGF1ZGlvLmxvb3AgPSB0cnVlO1xuICAgICAgICBhdWRpby5wcmVsb2FkID0gXCJhdXRvXCI7XG4gICAgICAgIGF1ZGlvLnNyYyA9IG9iamVjdFVybDtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBlbnN1cmVTcGVjdHJ1bUNhbnZhcyhjYW52YXMpO1xuICAgICAgICBwYWludEF1ZGlvVmlzdWFsKGNhbnZhcywgbmV3IFVpbnQ4QXJyYXkoMTI4KSwgMC4yNSwgMCk7XG5cbiAgICAgICAgY29uc3QgY29udGV4dCA9IGF3YWl0IGVuc3VyZU1lZGlhQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHNvdXJjZU5vZGUgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgICAgIGNvbnN0IGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICBhbmFseXNlci5mZnRTaXplID0gMjU2O1xuICAgICAgICBhbmFseXNlci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjcyO1xuICAgICAgICBzb3VyY2VOb2RlLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICBhbmFseXNlci5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIGVuZ2luZT8uc2V0SW1hZ2UoaW1hZ2VJZCwgY2FudmFzKTtcbiAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LnNldChpbWFnZUlkLCB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgb2JqZWN0VXJsLFxuICAgICAgICAgICAgYXVkaW8sXG4gICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICBhbmFseXNlcixcbiAgICAgICAgICAgIHNvdXJjZU5vZGUsXG4gICAgICAgICAgICBzcGVjdHJ1bTogbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpLFxuICAgICAgICB9KTtcbiAgICAgICAgdm9pZCBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHRodW1iOiBjYW52YXNUaHVtYihjYW52YXMsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCksXG4gICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW1wb3J0RmlsZXMoZmlsZXM6IEl0ZXJhYmxlPEZpbGU+KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKGZpbGVzKTtcbiAgICAgICAgaWYgKCFsaXN0Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBsZXQgYWRkZWQgPSAwO1xuICAgICAgICBsZXQgaW1wb3J0ZWRBdWRpbyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbGlzdCkge1xuICAgICAgICAgICAgaWYgKHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmxlbmd0aCArIGFkZGVkID49IE1BWF9MQVlFUlMpIHtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoYExheWVyIGxpbWl0IGlzICR7TUFYX0xBWUVSU31gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBjbGFzc2lmeUZpbGUoZmlsZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSWQgPSBuZXdJZChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBwdXRJbWFnZUJsb2IoaW1hZ2VJZCwgZmlsZSkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgYWN0aXZhdGVNZWRpYShpbWFnZUlkLCBmaWxlLCBraW5kLCBmaWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNldEltYWdlSW5mbygocHJldmlvdXMpID0+ICh7IC4uLnByZXZpb3VzLCBbaW1hZ2VJZF06IGluZm8gfSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyOiBTY2VuZUxheWVyID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogbmV3SWQoXCJsYXllclwiKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY2xlYW5OYW1lKGRlZmF1bHRMYXllck5hbWUoa2luZCwgZmlsZS5uYW1lKSwgbWVkaWFLaW5kTGFiZWwoa2luZCkpLFxuICAgICAgICAgICAgICAgICAgICBtZWRpYUtpbmQ6IGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIGZ4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ERUZBVUxUX0xBWUVSX0ZYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYWRkZWQgKiAwLjA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogYWRkZWQgKiAtMC4wNyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyczogWy4uLnByZXZpb3VzLmxheWVycywgbGF5ZXJdLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJhdWRpb1wiKSBpbXBvcnRlZEF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhZGRlZCsrO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KGBDb3VsZCBub3QgaW1wb3J0ICR7bWVkaWFLaW5kTGFiZWwoa2luZCkudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1wb3J0ZWRBdWRpbyAmJiBzY2VuZVJlZi5jdXJyZW50Lmdsb2JhbC5hdWRpb1JlYWN0IDwgMC4yNSkge1xuICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHsgYXVkaW9SZWFjdDogMC41NSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVTY2VuZUltYWdlcyh0YXJnZXQ6IFNjZW5lKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVuZ2luZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBraW5kQnlJZCA9IG5ldyBNYXA8c3RyaW5nLCBNZWRpYUtpbmQ+KCk7XG4gICAgICAgIGNvbnN0IG5hbWVCeUlkID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0YXJnZXQubGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAoIWxheWVyLmltYWdlSWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFraW5kQnlJZC5oYXMobGF5ZXIuaW1hZ2VJZCkpIHtcbiAgICAgICAgICAgICAgICBraW5kQnlJZC5zZXQobGF5ZXIuaW1hZ2VJZCwgbGF5ZXIubWVkaWFLaW5kID8/IFwiaW1hZ2VcIik7XG4gICAgICAgICAgICAgICAgbmFtZUJ5SWQuc2V0KGxheWVyLmltYWdlSWQsIGxheWVyLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpbWFnZUlkIG9mIFsuLi5tZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQua2V5cygpXSkge1xuICAgICAgICAgICAgaWYgKCFraW5kQnlJZC5oYXMoaW1hZ2VJZCkpIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5yZW1vdmVJbWFnZShpbWFnZUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgW2ltYWdlSWQsIGtpbmRdIG9mIGtpbmRCeUlkKSB7XG4gICAgICAgICAgICBpZiAobWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmhhcyhpbWFnZUlkKSAmJiBlbmdpbmUuaGFzSW1hZ2UoaW1hZ2VJZCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGdldEltYWdlQmxvYihpbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2IpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQ6IE1lZGlhS2luZCA9XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiaW1hZ2VcIiB8fFxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcInZpZGVvXCIgfHxcbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJhdWRpb1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGtpbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3NpZnlCbG9iKGJsb2IsIG5hbWVCeUlkLmdldChpbWFnZUlkKSA/PyBcIlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgYWN0aXZhdGVNZWRpYShcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgYmxvYixcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVCeUlkLmdldChpbWFnZUlkKSA/PyBcIm1lZGlhXCIsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoeyAuLi5wcmV2aW91cywgW2ltYWdlSWRdOiBpbmZvIH0pKTtcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNldEltYWdlSW5mbygocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICBbaW1hZ2VJZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzeW5jTGl2ZU1lZGlhVGV4dHVyZXMoZW5naW5lOiBFbmdpbmVIYW5kbGUsIHRpbWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGxldCBtZWRpYUxldmVsID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbaW1hZ2VJZCwgcnVudGltZV0gb2YgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAocnVudGltZS5raW5kID09PSBcInZpZGVvXCIgJiYgcnVudGltZS52aWRlbykge1xuICAgICAgICAgICAgICAgIGlmIChydW50aW1lLnZpZGVvLnJlYWR5U3RhdGUgPj0gSFRNTE1lZGlhRWxlbWVudC5IQVZFX0NVUlJFTlRfREFUQSkge1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuc2V0SW1hZ2UoaW1hZ2VJZCwgcnVudGltZS52aWRlbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bnRpbWUua2luZCA9PT0gXCJhdWRpb1wiICYmIHJ1bnRpbWUuYXVkaW8gJiYgcnVudGltZS5jYW52YXMgJiYgcnVudGltZS5hbmFseXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWN0cnVtID1cbiAgICAgICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bSAmJlxuICAgICAgICAgICAgICAgICAgICBydW50aW1lLnNwZWN0cnVtLmxlbmd0aCA9PT0gcnVudGltZS5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBydW50aW1lLnNwZWN0cnVtXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBVaW50OEFycmF5KHJ1bnRpbWUuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuc3BlY3RydW0gPSBzcGVjdHJ1bTtcbiAgICAgICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHNwZWN0cnVtKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsRnJvbVNwZWN0cnVtKHNwZWN0cnVtKTtcbiAgICAgICAgICAgICAgICBtZWRpYUxldmVsID0gTWF0aC5tYXgobWVkaWFMZXZlbCwgbGV2ZWwpO1xuICAgICAgICAgICAgICAgIHBhaW50QXVkaW9WaXN1YWwocnVudGltZS5jYW52YXMsIHNwZWN0cnVtLCBsZXZlbCwgdGltZSk7XG4gICAgICAgICAgICAgICAgZW5naW5lLnNldEltYWdlKGltYWdlSWQsIHJ1bnRpbWUuY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVkaWFMZXZlbDtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGVuZ2luZSBsb29wIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gYnVpbGRGcmFtZSgpOiBGcmFtZVN0YXRlIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHNjZW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGluZm8gPSBpbWFnZUluZm9SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgdGltZSA9IHRpbWVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb0xldmVsUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGtpY2sgPSBraWNrUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgY29uc3QgbGF5ZXJzOiBMYXllclJlbmRlclN0YXRlW10gPSBjdXJyZW50LmxheWVyc1xuICAgICAgICAgICAgLmZpbHRlcigobGF5ZXIpID0+IGxheWVyLmZ4LnZpc2libGUpXG4gICAgICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ4ID0gbGF5ZXIuZng7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VlZCA9IGxheWVyU2VlZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IGluZm9bbGF5ZXIuaW1hZ2VJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VBc3BlY3QgPVxuICAgICAgICAgICAgICAgICAgICBtZXRhICYmIG1ldGEud2lkdGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEud2lkdGggLyBNYXRoLm1heCgxLCBtZXRhLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXRIZWlnaHQgPSBNYXRoLm1pbigxLCBhc3BlY3QgLyBpbWFnZUFzcGVjdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHVsc2UgPVxuICAgICAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICAgICAgZngucHVsc2UgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKDAuMTYgKiBNYXRoLnNpbih0aW1lICogMi4yICsgc2VlZCAqIDIwKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8gKiBjdXJyZW50Lmdsb2JhbC5hdWRpb1JlYWN0ICogMC41KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IGZ4LnNjYWxlICogcHVsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJpZnRYID1cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5zaW4odGltZSAqIDAuNTcgKyBzZWVkICogOS4yKSAqIGZ4LmRyaWZ0ICogMC4zO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaWZ0WSA9XG4gICAgICAgICAgICAgICAgICAgIE1hdGguY29zKHRpbWUgKiAwLjQzICsgc2VlZCAqIDUuNykgKiBmeC5kcmlmdCAqIDAuMztcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQ6IGxheWVyLmltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIHBvczogW2Z4LnggKyBkcmlmdFgsIGZ4LnkgKyBkcmlmdFldLFxuICAgICAgICAgICAgICAgICAgICBleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDFlLTQsIChmaXRIZWlnaHQgKiBpbWFnZUFzcGVjdCAqIHNjYWxlKSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMWUtNCwgKGZpdEhlaWdodCAqIHNjYWxlKSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICByb3Q6IChmeC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwICsgZnguc3BpbiAqIHRpbWUgKiAxLjUsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGZ4Lm9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kOiBibGVuZEluZGV4KGZ4LmJsZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgdGlsZTogTWF0aC5yb3VuZChmeC50aWxlKSxcbiAgICAgICAgICAgICAgICAgICAgd2FycDogZngud2FycCxcbiAgICAgICAgICAgICAgICAgICAgc3dpcmw6IGZ4LnN3aXJsLFxuICAgICAgICAgICAgICAgICAgICByaXBwbGU6IGZ4LnJpcHBsZSxcbiAgICAgICAgICAgICAgICAgICAga2FsZWlkbzogZngua2FsZWlkbyxcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxhdGU6IGZ4LnBpeGVsYXRlLFxuICAgICAgICAgICAgICAgICAgICBidWxnZTogZnguYnVsZ2UsXG4gICAgICAgICAgICAgICAgICAgIG1pcnJvcjogZngubWlycm9yLFxuICAgICAgICAgICAgICAgICAgICBodWU6IGZ4Lmh1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2F0dXJhdGlvbjogZnguc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29udHJhc3Q6IGZ4LmNvbnRyYXN0LFxuICAgICAgICAgICAgICAgICAgICBicmlnaHRuZXNzOiBmeC5icmlnaHRuZXNzLFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnQ6IGZ4LmludmVydCxcbiAgICAgICAgICAgICAgICAgICAgcG9zdGVyaXplOiBmeC5wb3N0ZXJpemUsXG4gICAgICAgICAgICAgICAgICAgIGNocm9tYTogZnguY2hyb21hLFxuICAgICAgICAgICAgICAgICAgICBlZGdlczogZnguZWRnZXMsXG4gICAgICAgICAgICAgICAgICAgIHRpbnQ6IGhleFRvUmdiKGZ4LnRpbnRDb2xvciksXG4gICAgICAgICAgICAgICAgICAgIHRpbnRBbW91bnQ6IGZ4LnRpbnRBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHNoaW1tZXI6IGZ4LnNoaW1tZXIsXG4gICAgICAgICAgICAgICAgICAgIHNlZWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGcgPSBjdXJyZW50Lmdsb2JhbDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICBhdWRpbyxcbiAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXJSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGxheWVycyxcbiAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgIGJnTW9kZTogZy5iZ01vZGUsXG4gICAgICAgICAgICAgICAgYmdBOiBoZXhUb1JnYihnLmJnQSksXG4gICAgICAgICAgICAgICAgYmdCOiBoZXhUb1JnYihnLmJnQiksXG4gICAgICAgICAgICAgICAgZmVlZGJhY2s6IGcuZmVlZGJhY2ssXG4gICAgICAgICAgICAgICAgdHJhaWxzOiBnLnRyYWlscyxcbiAgICAgICAgICAgICAgICBmYlpvb206IGcuZmJab29tLFxuICAgICAgICAgICAgICAgIGZiUm90YXRlOiBnLmZiUm90YXRlLFxuICAgICAgICAgICAgICAgIGZiSHVlOiBnLmZiSHVlLFxuICAgICAgICAgICAgICAgIHdhcnA6IGcud2FycCxcbiAgICAgICAgICAgICAgICBzd2lybDogY2xhbXAoZy5zd2lybCArIGtpY2suc3dpcmwsIDAsIDEpLFxuICAgICAgICAgICAgICAgIHJpcHBsZTogY2xhbXAoZy5yaXBwbGUgKyBraWNrLnJpcHBsZSwgMCwgMSksXG4gICAgICAgICAgICAgICAgem9vbTogY2xhbXAoZy56b29tICsga2ljay56b29tLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBrYWxlaWRvOiBnLmthbGVpZG8sXG4gICAgICAgICAgICAgICAgbWlycm9yOiBnLm1pcnJvcixcbiAgICAgICAgICAgICAgICBjaHJvbWE6IGNsYW1wKGcuY2hyb21hICsga2ljay5jaHJvbWEsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGh1ZU9yYml0OiBnLmh1ZU9yYml0LFxuICAgICAgICAgICAgICAgIHNhdHVyYXRpb246IGcuc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICBjb250cmFzdDogZy5jb250cmFzdCxcbiAgICAgICAgICAgICAgICBzb2xhcml6ZTogZy5zb2xhcml6ZSxcbiAgICAgICAgICAgICAgICBncmFpbjogZy5ncmFpbixcbiAgICAgICAgICAgICAgICBzY2FubGluZXM6IGcuc2NhbmxpbmVzLFxuICAgICAgICAgICAgICAgIHZpZ25ldHRlOiBnLnZpZ25ldHRlLFxuICAgICAgICAgICAgICAgIHN0cm9iZTogY2xhbXAoZy5zdHJvYmUgKyBraWNrLnN0cm9iZSwgMCwgMSksXG4gICAgICAgICAgICAgICAgYXVkaW9SZWFjdDogZy5hdWRpb1JlYWN0LFxuICAgICAgICAgICAgICAgIHBvaW50ZXJGb3JjZTogZy5wb2ludGVyRm9yY2UsXG4gICAgICAgICAgICAgICAgcG9pbnRlclNpemU6IGcucG9pbnRlclNpemUsXG4gICAgICAgICAgICAgICAgcG9pbnRlck1vZGU6IGcucG9pbnRlck1vZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFzdGFnZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBlbmdpbmU6IEVuZ2luZUhhbmRsZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVuZ2luZSA9IGNyZWF0ZUVuZ2luZShjYW52YXMpO1xuICAgICAgICB9IGNhdGNoIChjYXVzZSkge1xuICAgICAgICAgICAgc2V0RW5naW5lRXJyb3IoXG4gICAgICAgICAgICAgICAgY2F1c2UgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICAgICAgICAgICAgICA/IGNhdXNlLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgOiBcIldlYkdMIGZhaWxlZCB0byBzdGFydFwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbmdpbmVSZWYuY3VycmVudCA9IGVuZ2luZTtcblxuICAgICAgICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBzdGFnZVNpemVSZWYuY3VycmVudCA9IHsgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHQgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSBleHBvcnRMb2NrUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAobG9jaykge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5yZXNpemUobG9jay53aWR0aCwgbG9jay5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUucmVzaXplKHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHJlc2l6ZSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc3RhZ2UpO1xuXG4gICAgICAgIGxldCByYWYgPSAwO1xuICAgICAgICBsZXQgbGFzdCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBsZXQgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgIGxldCBmYXN0U3RyZWFrID0gMDtcbiAgICAgICAgY29uc3QgdGljayA9IChub3c6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHQgPSBNYXRoLm1pbigwLjEsIChub3cgLSBsYXN0KSAvIDEwMDApO1xuICAgICAgICAgICAgbGFzdCA9IG5vdztcblxuICAgICAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBhbmFseXNlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IDA7XG4gICAgICAgICAgICBpZiAoYW5hbHlzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BlY3RydW1SZWYuY3VycmVudC5sZW5ndGggIT09IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWN0cnVtUmVmLmN1cnJlbnQgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShzcGVjdHJ1bVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5zID0gc3BlY3RydW1SZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBsZXQgYmFzcyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gYmluc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAxMCkgYmFzcyArPSBiaW5zW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgKChiYXNzIC8gMTApICogMiArIHRvdGFsIC8gYmlucy5sZW5ndGgpIC8gMyAvIDE0OCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZyb3plblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGltZVJlZi5jdXJyZW50ICs9IGR0ICogc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuc3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhTGV2ZWwgPSBzeW5jTGl2ZU1lZGlhVGV4dHVyZXMoZW5naW5lLCB0aW1lUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgdGFyZ2V0ID0gTWF0aC5tYXgodGFyZ2V0LCBtZWRpYUxldmVsKTtcbiAgICAgICAgICAgIGF1ZGlvTGV2ZWxSZWYuY3VycmVudCArPSAodGFyZ2V0IC0gYXVkaW9MZXZlbFJlZi5jdXJyZW50KSAqIDAuMjg7XG5cbiAgICAgICAgICAgIC8vIFBlcmN1c3NpdmUgcGxheS1tb2RlIGtpY2tzIGZhZGUgb3V0IG9uIHRoZWlyIG93bi5cbiAgICAgICAgICAgIGNvbnN0IGtpY2sgPSBraWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBraWNrRGVjYXkgPSBNYXRoLmV4cCgtZHQgKiA0LjUpO1xuICAgICAgICAgICAga2ljay56b29tICo9IGtpY2tEZWNheTtcbiAgICAgICAgICAgIGtpY2suc3Ryb2JlICo9IGtpY2tEZWNheTtcbiAgICAgICAgICAgIGtpY2suY2hyb21hICo9IGtpY2tEZWNheTtcbiAgICAgICAgICAgIGtpY2sucmlwcGxlICo9IGtpY2tEZWNheTtcbiAgICAgICAgICAgIGtpY2suc3dpcmwgKj0ga2lja0RlY2F5O1xuXG4gICAgICAgICAgICAvLyBBZGFwdGl2ZSBxdWFsaXR5OiBkcm9wIGludGVybmFsIHJlc29sdXRpb24gd2hlbiBmcmFtZXMgcnVuIHNsb3csXG4gICAgICAgICAgICAvLyBjcmVlcCBiYWNrIHVwIHdoZW4gdGhlcmUgaXMgaGVhZHJvb20uIFNraXAgd2hpbGUgZXhwb3J0LWxvY2tlZC5cbiAgICAgICAgICAgIGlmICghZXhwb3J0TG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGR0ID4gMC4wMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhaysrO1xuICAgICAgICAgICAgICAgICAgICBmYXN0U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGR0IDwgMC4wMTQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhaysrO1xuICAgICAgICAgICAgICAgICAgICBzbG93U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbG93U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzbG93U3RyZWFrID4gMzAgJiYgcXVhbGl0eVJlZi5jdXJyZW50ID4gMC45KSB7XG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eVJlZi5jdXJyZW50IC0gMC4yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcChxdWFsaXR5UmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzbG93U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZhc3RTdHJlYWsgPiA2MDAgJiYgcXVhbGl0eVJlZi5jdXJyZW50IDwgMS41KSB7XG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgICAgMS41LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eVJlZi5jdXJyZW50ICsgMC4yLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcChxdWFsaXR5UmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICBmYXN0U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVuZ2luZS5yZW5kZXIoYnVpbGRGcmFtZSgpKTtcbiAgICAgICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIGxhc3Qgd29ya2luZyBzY2VuZS5cbiAgICAgICAgY29uc3Qgc2F2ZWQgPSBsb2FkQXV0b3NhdmUoKTtcbiAgICAgICAgaWYgKHNhdmVkKSB7XG4gICAgICAgICAgICBzZXRTY2VuZShzYXZlZCk7XG4gICAgICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gc2F2ZWQ7XG4gICAgICAgICAgICB2b2lkIGh5ZHJhdGVTY2VuZUltYWdlcyhzYXZlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGRpc3Bvc2VBbGxNZWRpYVJ1bnRpbWVzKCk7XG4gICAgICAgICAgICBlbmdpbmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW10pO1xuXG4gICAgLy8gQXV0b3NhdmUgKGRlYm91bmNlZClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNhdmVBdXRvc2F2ZShzY2VuZSksIDM1MCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9LCBbc2NlbmVdKTtcblxuICAgIC8vIFVuZG8gaGlzdG9yeSAoZGVib3VuY2VkIFx1MjAxNCBjb2FsZXNjZXMgc2xpZGVyIGRyYWdzIGFuZCBrZXkgcmlmZnMgaW50byBvbmUgZW50cnkpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGhpc3RvcnlTa2lwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhpc3RvcnlTa2lwUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGVuY29kZVNjZW5lKHNjZW5lKTtcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LnN0YWNrW2hpc3RvcnkuaW5kZXhdID09PSBzbmFwc2hvdCkgcmV0dXJuO1xuICAgICAgICAgICAgaGlzdG9yeS5zdGFjayA9IGhpc3Rvcnkuc3RhY2suc2xpY2UoMCwgaGlzdG9yeS5pbmRleCArIDEpO1xuICAgICAgICAgICAgaGlzdG9yeS5zdGFjay5wdXNoKHNuYXBzaG90KTtcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LnN0YWNrLmxlbmd0aCA+IDgwKSBoaXN0b3J5LnN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgICBoaXN0b3J5LmluZGV4ID0gaGlzdG9yeS5zdGFjay5sZW5ndGggLSAxO1xuICAgICAgICB9LCA0MDApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW3NjZW5lXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBtaWNTdHJlYW1SZWYuY3VycmVudD8uZ2V0VHJhY2tzKCkgPz8gW10pXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0YXRlID09PSBcInJlY29yZGluZ1wiKVxuICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgICAgICAgdm9pZCBhdWRpb0NvbnRleHRSZWYuY3VycmVudD8uY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT5cbiAgICAgICAgICAgIHNldEZ1bGxzY3JlZW4oZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT09IHN0YWdlUmVmLmN1cnJlbnQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHN5bmMpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJ2YXVkaW8tMlwiO1xuICAgICAgICBjb25zdCBmYXZpY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cbiAgPHJlY3Qgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgZmlsbD1cIiMwODA4MGFcIi8+XG4gIDxwYXRoIGQ9XCJNNSA4LjUgMjMuNSA1LjUgMjYuNSAyMy41IDggMjYuNVpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZTZjNjhcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+XG4gIDxwYXRoIGQ9XCJNNCA3LjUgMjQuNSA0LjUgMjcuNSAyNC41IDcgMjcuNVpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlOGU2ZTBcIiBzdHJva2Utd2lkdGg9XCIxLjdcIi8+XG4gIDxwYXRoIGQ9XCJNMTAgMjIuNSAyMS41IDkuNVwiIHN0cm9rZT1cIiNlOGU2ZTBcIiBzdHJva2Utd2lkdGg9XCIyLjRcIiBzdHJva2UtbGluZWNhcD1cInNxdWFyZVwiLz5cbiAgPHBhdGggZD1cIk0xMS4yIDIyLjUgMjIuNyA5LjVcIiBzdHJva2U9XCIjYTg3ODgwXCIgc3Ryb2tlLXdpZHRoPVwiMS4xXCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIiBvcGFjaXR5PVwiLjg1XCIvPlxuICA8cmVjdCB4PVwiMjAuNVwiIHk9XCIyMC41XCIgd2lkdGg9XCIzLjJcIiBoZWlnaHQ9XCIzLjJcIiBmaWxsPVwiI2U4ZTZlMFwiLz5cbiAgPHJlY3QgeD1cIjYuNVwiIHk9XCI2LjVcIiB3aWR0aD1cIjIuMlwiIGhlaWdodD1cIjIuMlwiIGZpbGw9XCIjNmU2YzY4XCIvPlxuPC9zdmc+YDtcbiAgICAgICAgY29uc3QgbGluayA9XG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnbGlua1tyZWw9XCJpY29uXCJdJyxcbiAgICAgICAgICAgICkgYXMgSFRNTExpbmtFbGVtZW50IHwgbnVsbCkgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGxpbmsucmVsID0gXCJpY29uXCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwiaW1hZ2Uvc3ZnK3htbFwiO1xuICAgICAgICBsaW5rLmhyZWYgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KGZhdmljb24pfWA7XG4gICAgICAgIGlmICghbGluay5wYXJlbnROb2RlKSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0sIFtdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGtleWJvYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICYmXG4gICAgICAgICAgICAgICAgKHRhcmdldC50YWdOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaXNDb250ZW50RWRpdGFibGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5O1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydGN1dCA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzaG9ydGN1dCA9PT0gXCJ6XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSByZWRvU2NlbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB1bmRvU2NlbmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNob3J0Y3V0ID09PSBcInlcIikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZWRvU2NlbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRVaUhpZGRlbigocHJldmlvdXMpID0+ICFwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNldHRpbmdzT3BlblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5nc09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGVscE9wZW5SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgfHwgZXZlbnQua2V5ID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRIZWxwT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRIZWxwT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0RnJvemVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVQbGF5S2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ2XCIpIHNldFN0YWdlTW9kZShcImFycmFuZ2VcIik7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInBcIikgc2V0U3RhZ2VNb2RlKFwicGxheVwiKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZXZlbnQua2V5ID09PSBcIkRlbGV0ZVwiIHx8IGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIikgJiZcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUxheWVyKHNlbGVjdGVkSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSWQgJiYgZXZlbnQua2V5LnN0YXJ0c1dpdGgoXCJBcnJvd1wiKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IGV2ZW50LnNoaWZ0S2V5ID8gMC4wNSA6IDAuMDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBzY2VuZVJlZi5jdXJyZW50LmxheWVycy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAobCkgPT4gbC5pZCA9PT0gc2VsZWN0ZWRJZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICghbGF5ZXIpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPVxuICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLXN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXZlbnQua2V5ID09PSBcIkFycm93VXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWRJZCwge1xuICAgICAgICAgICAgICAgICAgICB4OiBjbGFtcChsYXllci5meC54ICsgZHgsIC0zLCAzKSxcbiAgICAgICAgICAgICAgICAgICAgeTogY2xhbXAobGF5ZXIuZngueSArIGR5LCAtMywgMyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgfSwgW3NlbGVjdGVkSWRdKTtcblxuICAgIC8vIFBhc3RlIGZpbGVzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25QYXN0ZSA9IChldmVudDogQ2xpcGJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzOiBGaWxlW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBldmVudC5jbGlwYm9hcmREYXRhPy5pdGVtcyA/PyBbXSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgIT09IFwiZmlsZVwiKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSkgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZvaWQgaW1wb3J0RmlsZXMoZmlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIG9uUGFzdGUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBhc3RlKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGF5IHBlcmZvcm1hbmNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIGFkZEtpY2socGF0Y2g6IFBhcnRpYWw8S2lja1N0YXRlPikge1xuICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXRjaCkgYXMgKGtleW9mIEtpY2tTdGF0ZSlbXSkge1xuICAgICAgICAgICAga2lja1trZXldID0gTWF0aC5taW4oMC45LCBraWNrW2tleV0gKyAocGF0Y2hba2V5XSA/PyAwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGVwR2xvYmFsKHBhcmFtOiBrZXlvZiBHbG9iYWxGeCwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcHJldmlvdXMuZ2xvYmFsW3BhcmFtXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgICAgIGNvbnN0IG1heCA9XG4gICAgICAgICAgICAgICAgcGFyYW0gPT09IFwic2F0dXJhdGlvblwiIHx8XG4gICAgICAgICAgICAgICAgcGFyYW0gPT09IFwiY29udHJhc3RcIiB8fFxuICAgICAgICAgICAgICAgIHBhcmFtID09PSBcInNwZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcmFtID09PSBcImZiWm9vbVwiIHx8IHBhcmFtID09PSBcImZiUm90YXRlXCIgPyAtMSA6IDA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cy5nbG9iYWwsXG4gICAgICAgICAgICAgICAgICAgIFtwYXJhbV06IGNsYW1wKHZhbHVlICsgZGVsdGEsIG1pbiwgbWF4KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheU5vdGUoaW5kZXg6IG51bWJlciwgcGFpbnRCYWNrZ3JvdW5kOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gUExBWV9QSUFOTy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY291bnQgPiAxID8gaW5kZXggLyAoY291bnQgLSAxKSA6IDA7XG4gICAgICAgIGNvbnN0IGh1ZURlZyA9IE1hdGgucm91bmQoKGluZGV4IC8gY291bnQpICogMzYwKTtcbiAgICAgICAgaWYgKHBhaW50QmFja2dyb3VuZCB8fCBzY2VuZVJlZi5jdXJyZW50LmxheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBiZ0E6IGhzbFRvSGV4KGh1ZURlZywgMC41LCAwLjA5KSxcbiAgICAgICAgICAgICAgICAgICAgYmdCOiBoc2xUb0hleCgoaHVlRGVnICsgNDUpICUgMzYwLCAwLjU1LCAwLjMpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBodWUgPSBpbmRleCAvIGNvdW50O1xuICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmxheWVyLFxuICAgICAgICAgICAgICAgICAgICBmeDogeyAuLi5sYXllci5meCwgaHVlIH0sXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvdyBub3RlcyB0aHVtcCwgaGlnaCBub3RlcyBzcGFya2xlLlxuICAgICAgICBhZGRLaWNrKHtcbiAgICAgICAgICAgIHpvb206IDAuMTUgKiAoMSAtIHBvc2l0aW9uKSxcbiAgICAgICAgICAgIHJpcHBsZTogMC4wOCxcbiAgICAgICAgICAgIGNocm9tYTogMC4wNSArIDAuMTMgKiBwb3NpdGlvbixcbiAgICAgICAgICAgIHN0cm9iZTogMC4xICogcG9zaXRpb24sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmlrZUxheWVyKGluZGV4OiBudW1iZXIsIHJlc2V0OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gc2NlbmVSZWYuY3VycmVudC5sYXllcnNbaW5kZXhdO1xuICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgIHJlcGxhY2VMYXllckZ4KFxuICAgICAgICAgICAgbGF5ZXIuaWQsXG4gICAgICAgICAgICByZXNldCA/IHJlc2V0TGF5ZXJGeEVmZmVjdHMobGF5ZXIuZngpIDogcmFuZG9tTGF5ZXJGeChsYXllci5meCksXG4gICAgICAgICk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQobGF5ZXIuaWQpO1xuICAgICAgICBhZGRLaWNrKHsgcmlwcGxlOiAwLjE0LCBzdHJvYmU6IDAuMDYgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2FzaFdvcmxkKCkge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfR0xPQkFMX0ZYLFxuICAgICAgICAgICAgICAgIGJnTW9kZTogcHJldmlvdXMuZ2xvYmFsLmJnTW9kZSxcbiAgICAgICAgICAgICAgICBiZ0E6IHByZXZpb3VzLmdsb2JhbC5iZ0EsXG4gICAgICAgICAgICAgICAgYmdCOiBwcmV2aW91cy5nbG9iYWwuYmdCLFxuICAgICAgICAgICAgICAgIGF1ZGlvUmVhY3Q6IHByZXZpb3VzLmdsb2JhbC5hdWRpb1JlYWN0LFxuICAgICAgICAgICAgICAgIHBvaW50ZXJGb3JjZTogcHJldmlvdXMuZ2xvYmFsLnBvaW50ZXJGb3JjZSxcbiAgICAgICAgICAgICAgICBwb2ludGVyU2l6ZTogcHJldmlvdXMuZ2xvYmFsLnBvaW50ZXJTaXplLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJNb2RlOiBwcmV2aW91cy5nbG9iYWwucG9pbnRlck1vZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQuY29kZTtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgc2V0U3RhZ2VNb2RlKFwiYXJyYW5nZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXNldEluZGV4ID0gUExBWV9QUkVTRVRfQ09ERVMuaW5kZXhPZihjb2RlKTtcbiAgICAgICAgaWYgKHByZXNldEluZGV4ID49IDAgJiYgcHJlc2V0SW5kZXggPCBXT1JMRF9QUkVTRVRTLmxlbmd0aCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHByZXNldCA9IFdPUkxEX1BSRVNFVFNbcHJlc2V0SW5kZXhdO1xuICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHByZXNldC5nbG9iYWwpO1xuICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGFkZEtpY2soeyBzdHJvYmU6IDAuMjIsIHpvb206IDAuMDggfSk7XG4gICAgICAgICAgICBzaG93VG9hc3QoYCR7cHJlc2V0LmNvZGV9IFx1MDBCNyAke3ByZXNldC5uYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZnhLZXkgPSBQTEFZX0ZYX0tFWVMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcbiAgICAgICAgaWYgKGZ4S2V5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChmeEtleS5wYXJhbSwgZXZlbnQuc2hpZnRLZXkgPyAtMC4wOCA6IDAuMDgpO1xuICAgICAgICAgICAgYWRkS2ljayh7IGNocm9tYTogMC4wNCwgc3Ryb2JlOiAwLjA1IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IFwiQnJhY2tldExlZnRcIiB8fCBjb2RlID09PSBcIkJyYWNrZXRSaWdodFwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChcInNwZWVkXCIsIGNvZGUgPT09IFwiQnJhY2tldFJpZ2h0XCIgPyAwLjEgOiAtMC4xKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29kZSA9PT0gXCJCYWNrc2xhc2hcIikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHN0ZXBHbG9iYWwoXCJzb2xhcml6ZVwiLCBldmVudC5zaGlmdEtleSA/IC0wLjE1IDogMC4xNSk7XG4gICAgICAgICAgICBhZGRLaWNrKHsgc3Ryb2JlOiAwLjEgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlSW5kZXggPSBQTEFZX1BJQU5PLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcbiAgICAgICAgaWYgKG5vdGVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGxheU5vdGUobm90ZUluZGV4LCBldmVudC5zaGlmdEtleSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXllckluZGV4ID0gUExBWV9MQVlFUl9LRVlTLmZpbmRJbmRleChcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsYXllckluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG4gICAgICAgICAgICBzdHJpa2VMYXllcihsYXllckluZGV4LCBldmVudC5zaGlmdEtleSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgICAgICAgICAgIHdhc2hXb3JsZCgpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiV2FzaGVkIHRoZSB3b3JsZCBjbGVhblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXkuc3RhcnRzV2l0aChcIkFycm93XCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHN0ZXBHbG9iYWwoXCJzYXR1cmF0aW9uXCIsIDAuMDgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikgc3RlcEdsb2JhbChcInNhdHVyYXRpb25cIiwgLTAuMDgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHN0ZXBHbG9iYWwoXCJodWVPcmJpdFwiLCAwLjA2KTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHN0ZXBHbG9iYWwoXCJodWVPcmJpdFwiLCAtMC4wNik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFtcFRhcCh1OiBudW1iZXIsIHY6IG51bWJlciwgc3VidHJhY3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgZ2xvYmFsID0gc2NlbmVSZWYuY3VycmVudC5nbG9iYWw7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBNYXRoLnJvdW5kKGdsb2JhbC5wb2ludGVyTW9kZSk7XG4gICAgICAgIGNvbnN0IHJlYWNoID0gTWF0aC5taW4oMSwgTWF0aC5oeXBvdCh1IC0gMC41LCB2IC0gMC41KSAvIDAuNjIpO1xuICAgICAgICBjb25zdCBzdHJlbmd0aCA9ICgwLjA1ICsgMC4xMyAqIHJlYWNoKSAqIChzdWJ0cmFjdCA/IC0xIDogMSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IGhpdCA9IGhpdExheWVyKCh1IC0gMC41KSAqIGFzcGVjdCwgMC41IC0gdik7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gR3Jhdml0eSBwaW5jaGVzIHRoZSBsYXllciBpbndhcmQuXG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChoaXQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGNsYW1wKGhpdC5meC5idWxnZSAtIHN0cmVuZ3RoICogMS40LCAtMSwgMSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtID1cbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gMCA/IFwic3dpcmxcIiA6IG1vZGUgPT09IDIgPyBcImNocm9tYVwiIDogXCJ3YXJwXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IChoaXQuZnggYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KVtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoaGl0LmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIFtwYXJhbV06IGNsYW1wKGN1cnJlbnQgKyBzdHJlbmd0aCAqIDEuMiwgMCwgMSksXG4gICAgICAgICAgICAgICAgfSBhcyBQYXJ0aWFsPExheWVyRng+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID1cbiAgICAgICAgICAgICAgICBtb2RlID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJzd2lybFwiXG4gICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ6b29tXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaHJvbWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIndhcnBcIjtcbiAgICAgICAgICAgIHN0ZXBHbG9iYWwocGFyYW0sIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRLaWNrKFxuICAgICAgICAgICAgbW9kZSA9PT0gMFxuICAgICAgICAgICAgICAgID8geyBzd2lybDogMC4xMiB9XG4gICAgICAgICAgICAgICAgOiBtb2RlID09PSAxXG4gICAgICAgICAgICAgICAgICA/IHsgem9vbTogMC4xMiB9XG4gICAgICAgICAgICAgICAgICA6IG1vZGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgPyB7IGNocm9tYTogMC4xNCB9XG4gICAgICAgICAgICAgICAgICAgIDogeyByaXBwbGU6IDAuMTIgfSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGVwS2FsZWlkbygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsLmthbGVpZG87XG4gICAgICAgIGNvbnN0IG5leHQgPVxuICAgICAgICAgICAgY3VycmVudCA8IDAuMSA/IDAuMyA6IGN1cnJlbnQgPCAwLjQ1ID8gMC42IDogY3VycmVudCA8IDAuNzUgPyAwLjg1IDogMDtcbiAgICAgICAgdXBkYXRlR2xvYmFsKHsga2FsZWlkbzogbmV4dCB9KTtcbiAgICAgICAgYWRkS2ljayh7IHN3aXJsOiAwLjE2LCBzdHJvYmU6IDAuMDggfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29vdGhlUGxheShzY2VuZVg6IG51bWJlciwgc2NlbmVZOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXIoc2NlbmVYLCBzY2VuZVkpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT5cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGhpdC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5sYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIuZngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FycDogbGF5ZXIuZngud2FycCAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcmw6IGxheWVyLmZ4LnN3aXJsICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaXBwbGU6IGxheWVyLmZ4LnJpcHBsZSAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2FsZWlkbzogbGF5ZXIuZngua2FsZWlkbyAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGl4ZWxhdGU6IGxheWVyLmZ4LnBpeGVsYXRlICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWxnZTogbGF5ZXIuZnguYnVsZ2UgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pcnJvcjogbGF5ZXIuZngubWlycm9yICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWE6IGxheWVyLmZ4LmNocm9tYSAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxheWVyLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gcHJldmlvdXMuZ2xvYmFsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgICAgICAgICAgd2FycDogZy53YXJwICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgc3dpcmw6IGcuc3dpcmwgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICByaXBwbGU6IGcucmlwcGxlICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgem9vbTogZy56b29tICogMC43MixcbiAgICAgICAgICAgICAgICAgICAga2FsZWlkbzogZy5rYWxlaWRvICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBnLm1pcnJvciAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIGNocm9tYTogZy5jaHJvbWEgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjazogZy5mZWVkYmFjayAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHNvbGFyaXplOiBnLnNvbGFyaXplICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2JlOiBnLnN0cm9iZSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRocm93RWNobyhcbiAgICAgICAgZ2VzdHVyZTogeyBzdGFydFU6IG51bWJlcjsgc3RhcnRWOiBudW1iZXI7IHBhdGg6IG51bWJlciB9LFxuICAgICAgICB1OiBudW1iZXIsXG4gICAgICAgIHY6IG51bWJlcixcbiAgICApIHtcbiAgICAgICAgY29uc3QgZHggPSB1IC0gZ2VzdHVyZS5zdGFydFU7XG4gICAgICAgIGNvbnN0IGxpZnQgPSBnZXN0dXJlLnN0YXJ0ViAtIHY7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IHByZXZpb3VzLmdsb2JhbDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmcsXG4gICAgICAgICAgICAgICAgICAgIGZiUm90YXRlOiBjbGFtcChnLmZiUm90YXRlICsgZHggKiAwLjcsIC0xLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgZmJab29tOiBjbGFtcChnLmZiWm9vbSArIGxpZnQgKiAwLjcsIC0xLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2s6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoZy5mZWVkYmFjaywgMC4zKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oMC4yLCBnZXN0dXJlLnBhdGggKiAwLjI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjk1LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0cmFpbHM6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoZy50cmFpbHMsIDAuNTUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbigwLjE1LCBnZXN0dXJlLnBhdGggKiAwLjEyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjk2LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkS2ljayh7IHpvb206IDAuMSwgY2hyb21hOiAwLjA4IH0pO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0YWdlIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gc3RhZ2VQb2ludChldmVudDogUG9pbnRlckV2ZW50KToge1xuICAgICAgICBzY2VuZVg6IG51bWJlcjtcbiAgICAgICAgc2NlbmVZOiBudW1iZXI7XG4gICAgICAgIHU6IG51bWJlcjtcbiAgICAgICAgdjogbnVtYmVyO1xuICAgIH0ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZVxuICAgICAgICAgICAgPyBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgOiB7IGxlZnQ6IDAsIHRvcDogMCwgd2lkdGg6IDEsIGhlaWdodDogMSB9O1xuICAgICAgICBjb25zdCB1ID0gY2xhbXAoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMCwgMSk7XG4gICAgICAgIGNvbnN0IHYgPSBjbGFtcCgoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0LCAwLCAxKTtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gcmVjdC53aWR0aCAvIE1hdGgubWF4KDEsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHsgc2NlbmVYOiAodSAtIDAuNSkgKiBhc3BlY3QsIHNjZW5lWTogMC41IC0gdiwgdSwgdiB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdExheWVyKHNjZW5lWDogbnVtYmVyLCBzY2VuZVk6IG51bWJlcik6IFNjZW5lTGF5ZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHNjZW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGluZm8gPSBpbWFnZUluZm9SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnQubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGN1cnJlbnQubGF5ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKCFsYXllci5meC52aXNpYmxlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBpbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VBc3BlY3QgPVxuICAgICAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgIGNvbnN0IGZpdEhlaWdodCA9IE1hdGgubWluKDEsIGFzcGVjdCAvIGltYWdlQXNwZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4dFggPSAoZml0SGVpZ2h0ICogaW1hZ2VBc3BlY3QgKiBsYXllci5meC5zY2FsZSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgZXh0WSA9IChmaXRIZWlnaHQgKiBsYXllci5meC5zY2FsZSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoLWxheWVyLmZ4LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODA7XG4gICAgICAgICAgICBjb25zdCBkeCA9IHNjZW5lWCAtIGxheWVyLmZ4Lng7XG4gICAgICAgICAgICBjb25zdCBkeSA9IHNjZW5lWSAtIGxheWVyLmZ4Lnk7XG4gICAgICAgICAgICBjb25zdCBxeCA9IE1hdGguY29zKGFuZ2xlKSAqIGR4IC0gTWF0aC5zaW4oYW5nbGUpICogZHk7XG4gICAgICAgICAgICBjb25zdCBxeSA9IE1hdGguc2luKGFuZ2xlKSAqIGR4ICsgTWF0aC5jb3MoYW5nbGUpICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocXgpIDw9IGV4dFggJiYgTWF0aC5hYnMocXkpIDw9IGV4dFkpIHJldHVybiBsYXllcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5UG9pbnRlcihldmVudDogUG9pbnRlckV2ZW50LCBkb3duOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgIGNvbnN0IHggPSB1O1xuICAgICAgICBjb25zdCB5ID0gMSAtIHY7XG4gICAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gTWF0aC5tYXgoOCwgbm93IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC5hdCk7XG4gICAgICAgIHBvaW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgdmVsb2NpdHlYOiAoeCAtIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQueCkgKiAoMTYgLyBlbGFwc2VkKSxcbiAgICAgICAgICAgIHZlbG9jaXR5WTogKHkgLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LnkpICogKDE2IC8gZWxhcHNlZCksXG4gICAgICAgICAgICBkb3duLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICBsYXN0UG9pbnRlclJlZi5jdXJyZW50ID0geyB4LCB5LCBhdDogbm93IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJEb3duKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHNjZW5lWCwgc2NlbmVZIH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBzb290aGVQbGF5KHNjZW5lWCwgc2NlbmVZKTtcbiAgICAgICAgICAgICAgICBhZGRLaWNrKHsgcmlwcGxlOiAwLjA4IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgICAgICBwbGF5R2VzdHVyZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIHN0YXJ0VTogdSxcbiAgICAgICAgICAgICAgICBzdGFydFY6IHYsXG4gICAgICAgICAgICAgICAgbGFzdFU6IHUsXG4gICAgICAgICAgICAgICAgbGFzdFY6IHYsXG4gICAgICAgICAgICAgICAgcGF0aDogMCxcbiAgICAgICAgICAgICAgICBhdDogcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgICAgICAgICAgc2hpZnQ6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNjZW5lWCwgc2NlbmVZIH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXIoc2NlbmVYLCBzY2VuZVkpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKGhpdC5pZCk7XG4gICAgICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJJZDogaGl0LmlkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogc2NlbmVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogc2NlbmVZLFxuICAgICAgICAgICAgICAgIGZ4WDogaGl0LmZ4LngsXG4gICAgICAgICAgICAgICAgZnhZOiBoaXQuZngueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xuICAgICAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyTW92ZShldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCBwb2ludGVyUmVmLmN1cnJlbnQuZG93bik7XG4gICAgICAgICAgICBjb25zdCBnZXN0dXJlID0gcGxheUdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChnZXN0dXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBnZXN0dXJlLnBhdGggKz0gTWF0aC5oeXBvdCh1IC0gZ2VzdHVyZS5sYXN0VSwgdiAtIGdlc3R1cmUubGFzdFYpO1xuICAgICAgICAgICAgICAgIGdlc3R1cmUubGFzdFUgPSB1O1xuICAgICAgICAgICAgICAgIGdlc3R1cmUubGFzdFYgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZHJhZ1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICBkcmFnUG9pbnRSZWYuY3VycmVudCA9IHsgeDogc2NlbmVYLCB5OiBzY2VuZVkgfTtcbiAgICAgICAgLy8gQ29hbGVzY2UgcG9pbnRlciBldmVudHMgdG8gb25lIHN0YXRlIHVwZGF0ZSBwZXIgZnJhbWUuXG4gICAgICAgIGlmIChkcmFnUmFmUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgZHJhZ1JhZlJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdSYWZSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBkcmFnID0gZHJhZ1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFkcmFnKSByZXR1cm47XG4gICAgICAgICAgICB1cGRhdGVMYXllckZ4KGRyYWcubGF5ZXJJZCwge1xuICAgICAgICAgICAgICAgIHg6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICBkcmFnLmZ4WCArIGRyYWdQb2ludFJlZi5jdXJyZW50LnggLSBkcmFnLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICAgICAgLTMsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB5OiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgZHJhZy5meFkgKyBkcmFnUG9pbnRSZWYuY3VycmVudC55IC0gZHJhZy5zdGFydFksXG4gICAgICAgICAgICAgICAgICAgIC0zLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJVcChldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBnZXN0dXJlID0gcGxheUdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFnZXN0dXJlIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCB7IHUsIHYgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKG5vdyAtIGdlc3R1cmUuYXQgPCAzMDAgJiYgZ2VzdHVyZS5wYXRoIDwgMC4wMikge1xuICAgICAgICAgICAgICAgIGlmIChub3cgLSBsYXN0VGFwQXRSZWYuY3VycmVudCA8IDM2MCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VGFwQXRSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBLYWxlaWRvKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRhcEF0UmVmLmN1cnJlbnQgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgIHN0YW1wVGFwKHUsIHYsIGdlc3R1cmUuc2hpZnQgfHwgZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZS5wYXRoID4gMC4wMykge1xuICAgICAgICAgICAgICAgIHRocm93RWNobyhnZXN0dXJlLCB1LCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyTGVhdmUoKSB7XG4gICAgICAgIHBvaW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIC4uLnBvaW50ZXJSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcGxheUdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG9uV2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZIHx8IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHN0ZXBHbG9iYWwoXCJzYXR1cmF0aW9uXCIsIC1kZWx0YSAqIDAuMDAxMik7XG4gICAgICAgICAgICAgICAgZWxzZSBzdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgLWRlbHRhICogMC4wMDA2KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgIT09IFwiYXJyYW5nZVwiKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBsYXllcklkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgIGlmICghbGF5ZXJJZCkgcmV0dXJuO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc2NlbmVSZWYuY3VycmVudC5sYXllcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gbGF5ZXJJZCk7XG4gICAgICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVySWQsIHtcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IGxheWVyLmZ4LnJvdGF0aW9uICsgKGV2ZW50LmRlbHRhWSA+IDAgPyAzIDogLTMpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVySWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuZnguc2NhbGUgKiBNYXRoLmV4cCgtZXZlbnQuZGVsdGFZICogMC4wMDE2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzdGFnZS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHN0YWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcbiAgICB9LCBbc2VsZWN0ZWRJZF0pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGF1ZGlvIC8gcmVjb3JkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTZXR0aW5ncyhwYXRjaDogUGFydGlhbDxBcHBTZXR0aW5ncz4pIHtcbiAgICAgICAgc2V0U2V0dGluZ3MoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0geyAuLi5wcmV2aW91cywgLi4ucGF0Y2ggfTtcbiAgICAgICAgICAgIHNhdmVTZXR0aW5ncyhuZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBlbnN1cmVNaWMob3B0aW9ucz86IHtcbiAgICAgICAgdG9hc3RPblN1Y2Nlc3M/OiBib29sZWFuO1xuICAgICAgICB0b2FzdE9uRXJyb3I/OiBib29sZWFuO1xuICAgIH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKG1pY1N0cmVhbVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBzdHJlYW07XG4gICAgICAgICAgICBpZiAoIWF1ZGlvQ29udGV4dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgYXdhaXQgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQucmVzdW1lKCk7XG4gICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICBhbmFseXNlci5mZnRTaXplID0gMjU2O1xuICAgICAgICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC42ODtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50XG4gICAgICAgICAgICAgICAgLmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50ID0gYW5hbHlzZXI7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMylcbiAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwoeyBhdWRpb1JlYWN0OiAwLjcgfSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucz8udG9hc3RPblN1Y2Nlc3MgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHNob3dUb2FzdChcIk1pYyBsaXZlIFx1MjAxNCBhdWRpbyBkcml2ZXMgdGhlIHNoYWRlclwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zPy50b2FzdE9uRXJyb3IgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHNob3dUb2FzdChcIk1pY3JvcGhvbmUgd2FzIGJsb2NrZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB0b2dnbGVNaWMoKSB7XG4gICAgICAgIGlmIChtaWNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmRpbmcgJiYgcmVjb3JkaW5nTWljUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoXCJDYW4ndCBzdG9wIG1pYyB3aGlsZSByZWNvcmRpbmcgd2l0aCBhdWRpb1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1pY1N0cmVhbVJlZi5jdXJyZW50Py5nZXRUcmFja3MoKSA/PyBbXSlcbiAgICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICBtaWNTdHJlYW1SZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGF1ZGlvTGV2ZWxSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGVuc3VyZU1pYygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUgfHwgIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQgPSB7IHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0IH07XG4gICAgICAgIGVuZ2luZS5yZXNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcChxdWFsaXR5UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShcbiAgICAgICAgcmVzb2x1dGlvbklkOiBFeHBvcnRSZXNvbHV0aW9uSWQsXG4gICAgICAgIHNjcmVlblNjYWxlID0gMSxcbiAgICApIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHJlc29sdmVFeHBvcnRTaXplKFxuICAgICAgICAgICAgcmVzb2x1dGlvbklkLFxuICAgICAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBzY3JlZW5TY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gc2l6ZTtcbiAgICAgICAgZW5naW5lLnJlc2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKDEpO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwaWNrUmVjb3JkZXJNaW1lKGluY2x1ZGVBdWRpbzogYm9vbGVhbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGNvbnN0IHdpdGhBdWRpbyA9IFtcbiAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA5LG9wdXNcIixcbiAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA4LG9wdXNcIixcbiAgICAgICAgICAgIFwidmlkZW8vd2VibVwiLFxuICAgICAgICAgICAgXCJ2aWRlby9tcDRcIixcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgdmlkZW9Pbmx5ID0gW1xuICAgICAgICAgICAgXCJ2aWRlby93ZWJtO2NvZGVjcz12cDlcIixcbiAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA4XCIsXG4gICAgICAgICAgICBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgICAgIFwidmlkZW8vbXA0XCIsXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAoaW5jbHVkZUF1ZGlvID8gd2l0aEF1ZGlvIDogdmlkZW9Pbmx5KS5maW5kKCh0eXBlKSA9PlxuICAgICAgICAgICAgTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQodHlwZSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlUmVjb3JkaW5nKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFlbmdpbmUpIHJldHVybjtcbiAgICAgICAgaWYgKHJlY29yZGluZykge1xuICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudD8uc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpemUgPSBhcHBseUV4cG9ydENhbnZhc1NpemUoXG4gICAgICAgICAgICBleHBvcnRSZXNSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc2l6ZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbmNsdWRlTWljID0gc2V0dGluZ3NSZWYuY3VycmVudC5yZWNvcmRNaWNBdWRpbztcbiAgICAgICAgaWYgKGluY2x1ZGVNaWMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9rID0gYXdhaXQgZW5zdXJlTWljKHtcbiAgICAgICAgICAgICAgICB0b2FzdE9uU3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG9hc3RPbkVycm9yOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIW9rKSBpbmNsdWRlTWljID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmUgZnJhbWUgYXQgdGhlIGxvY2tlZCBzaXplIGJlZm9yZSBjYXB0dXJlU3RyZWFtIHJlYWRzIGRpbWVuc2lvbnMuXG4gICAgICAgIGVuZ2luZS5yZW5kZXIoYnVpbGRGcmFtZSgpKTtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY2FudmFzLmNhcHR1cmVTdHJlYW0oNjApO1xuICAgICAgICBpZiAoaW5jbHVkZU1pYykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBtaWNTdHJlYW1SZWYuY3VycmVudD8uZ2V0QXVkaW9UcmFja3MoKSA/PyBbXSkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWltZVR5cGUgPSBwaWNrUmVjb3JkZXJNaW1lKGluY2x1ZGVNaWMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZSxcbiAgICAgICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IDE4XzAwMF8wMDAsXG4gICAgICAgICAgICAgICAgLi4uKGluY2x1ZGVNaWMgPyB7IGF1ZGlvQml0c1BlclNlY29uZDogMjU2XzAwMCB9IDoge30pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaHVua3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgcmVjb3JkaW5nTWljUmVmLmN1cnJlbnQgPSBpbmNsdWRlTWljO1xuICAgICAgICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc2l6ZSkgY2h1bmtzUmVmLmN1cnJlbnQucHVzaChldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gKHJlY29yZGVyLm1pbWVUeXBlIHx8IFwidmlkZW8vd2VibVwiKS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgXCJtcDRcIixcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgID8gXCJtcDRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwid2VibVwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihjaHVua3NSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiByZWNvcmRlci5taW1lVHlwZSB8fCBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjaHVua3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICAgIHJlY29yZGluZ01pY1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJsb2IoYmxvYiwgZXhwb3J0RmlsZW5hbWUoZXh0ZW5zaW9uKSk7XG4gICAgICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkaW5nV2l0aE1pYyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWNvcmRlci5zdGFydCgyNTApO1xuICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudCA9IHJlY29yZGVyO1xuICAgICAgICAgICAgc2V0UmVjb3JkaW5nV2l0aE1pYyhpbmNsdWRlTWljKTtcbiAgICAgICAgICAgIHNldFJlY29yZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcbiAgICAgICAgICAgICAgICBpbmNsdWRlTWljXG4gICAgICAgICAgICAgICAgICAgID8gYFJlY29yZGluZyAke3NpemUud2lkdGh9XHUwMEQ3JHtzaXplLmhlaWdodH0gXHUwMEI3IG1pY2BcbiAgICAgICAgICAgICAgICAgICAgOiBgUmVjb3JkaW5nICR7c2l6ZS53aWR0aH1cdTAwRDcke3NpemUuaGVpZ2h0fWAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJlY29yZGluZ01pY1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRSZWNvcmRpbmdXaXRoTWljKGZhbHNlKTtcbiAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIlJlY29yZGluZyBpcyBub3Qgc3VwcG9ydGVkIGhlcmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb3dubG9hZEJsb2IoYmxvYjogQmxvYiwgZmlsZW5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgICAgIGFuY2hvci5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgICAgICBhbmNob3IuY2xpY2soKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCksIDQwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydEZpbGVuYW1lKGV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9XG4gICAgICAgICAgICBjbGVhbk5hbWUoc2NlbmVSZWYuY3VycmVudC5uYW1lLCBcInZhdWRpby0yXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XFwtXSsvZywgXCItXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eLXwtJC9nLCBcIlwiKSB8fCBcInZhdWRpby0yXCI7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHBhZCA9IChuOiBudW1iZXIpID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IHN0YW1wID0gW1xuICAgICAgICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBwYWQobm93LmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgIHBhZChub3cuZ2V0RGF0ZSgpKSxcbiAgICAgICAgICAgIFwiLVwiLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXRIb3VycygpKSxcbiAgICAgICAgICAgIHBhZChub3cuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgIHBhZChub3cuZ2V0U2Vjb25kcygpKSxcbiAgICAgICAgXS5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gYCR7cHJvamVjdH0tJHtzdGFtcH0uJHtleHRlbnNpb259YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBvcnRQbmcoKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUgfHwgIWNhbnZhcykgcmV0dXJuO1xuICAgICAgICBjb25zdCBzaXplID0gYXBwbHlFeHBvcnRDYW52YXNTaXplKGV4cG9ydFJlc1JlZi5jdXJyZW50LCAzKTtcbiAgICAgICAgaWYgKCFzaXplKSByZXR1cm47XG4gICAgICAgIGVuZ2luZS5yZW5kZXIoYnVpbGRGcmFtZSgpKTtcbiAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpO1xuICAgICAgICAgICAgaWYgKGJsb2IpIHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJsb2IoYmxvYiwgZXhwb3J0RmlsZW5hbWUoXCJwbmdcIikpO1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdChgRXhwb3J0ZWQgJHtzaXplLndpZHRofVx1MDBENyR7c2l6ZS5oZWlnaHR9YCk7XG4gICAgICAgICAgICB9IGVsc2Ugc2hvd1RvYXN0KFwiRXhwb3J0IGZhaWxlZFwiKTtcbiAgICAgICAgfSwgXCJpbWFnZS9wbmdcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FwdHVyZVRodW1iKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhY2FudmFzLndpZHRoKSByZXR1cm4gXCJcIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFRoZSBkcmF3aW5nIGJ1ZmZlciBpcyBub3QgcHJlc2VydmVkIFx1MjAxNCByZWRyYXcgc28gdGhlIGdyYWIgaXNuJ3QgYmxhbmsuXG4gICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8ucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IDIyMCAvIE1hdGgubWF4KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCB0aHVtYkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoY2FudmFzLndpZHRoICogc2NhbGUpKTtcbiAgICAgICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoY2FudmFzLmhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGh1bWJDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgdGh1bWJDYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgdGh1bWJDYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aHVtYkNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuNjIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoIDwgNThfMDAwID8gZGF0YSA6IFwiXCI7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VydmVyIHNjZW5lcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVUb1NlcnZlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNhdmVTY2VuZU11dGF0aW9uKFxuICAgICAgICAgICAgICAgIHNlcnZlclNjZW5lSWQsXG4gICAgICAgICAgICAgICAgc2NlbmUubmFtZSxcbiAgICAgICAgICAgICAgICBlbmNvZGVTY2VuZShzY2VuZSksXG4gICAgICAgICAgICAgICAgY2FwdHVyZVRodW1iKCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0U2VydmVyU2NlbmVJZChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiU2NlbmUgc2F2ZWRcIik7XG4gICAgICAgIH0gY2F0Y2ggKGNhdXNlKSB7XG4gICAgICAgICAgICBzaG93VG9hc3QoY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBcIlNhdmUgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEZyb21TZXJ2ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0U2NlbmVNdXRhdGlvbihpZCk7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkZWNvZGVTY2VuZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBsb2FkZWQubmFtZSA9IGNsZWFuTmFtZShyZXN1bHQubmFtZSwgbG9hZGVkLm5hbWUpO1xuICAgICAgICAgICAgc2V0U2NlbmUobG9hZGVkKTtcbiAgICAgICAgICAgIHNjZW5lUmVmLmN1cnJlbnQgPSBsb2FkZWQ7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xuICAgICAgICAgICAgc2V0U2VydmVyU2NlbmVJZChpZCk7XG4gICAgICAgICAgICBzZXRTY2VuZXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICBhd2FpdCBoeWRyYXRlU2NlbmVJbWFnZXMobG9hZGVkKTtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NpbmcgPSBsb2FkZWQubGF5ZXJzLnNvbWUoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiAhZW5naW5lUmVmLmN1cnJlbnQ/Lmhhc0ltYWdlKGxheWVyLmltYWdlSWQpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChtaXNzaW5nKVxuICAgICAgICAgICAgICAgIHNob3dUb2FzdChcbiAgICAgICAgICAgICAgICAgICAgXCJTb21lIG1lZGlhIGZpbGVzIGFyZSBub3Qgb24gdGhpcyBkZXZpY2UgXHUyMDE0IHNob3dpbmcgcGxhY2Vob2xkZXJzXCIsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJDb3VsZCBub3QgbG9hZCB0aGF0IHNjZW5lXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN0YWdlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIGF3YWl0IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICBlbHNlIGF3YWl0IHN0YWdlLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiRnVsbHNjcmVlbiBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VsZWN0aW9uIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdCBzZWxlY3Rpb25Cb3ggPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCBzdGFnZU1vZGUgIT09IFwiYXJyYW5nZVwiKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgbWV0YSA9IGltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHdpZHRoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgaW1hZ2VBc3BlY3QgPVxuICAgICAgICAgICAgbWV0YSAmJiBtZXRhLndpZHRoID4gMCA/IG1ldGEud2lkdGggLyBNYXRoLm1heCgxLCBtZXRhLmhlaWdodCkgOiAxO1xuICAgICAgICBjb25zdCBmaXRIZWlnaHQgPSBNYXRoLm1pbigxLCBhc3BlY3QgLyBpbWFnZUFzcGVjdCk7XG4gICAgICAgIGNvbnN0IGJveFdpZHRoID0gZml0SGVpZ2h0ICogaW1hZ2VBc3BlY3QgKiBzZWxlY3RlZC5meC5zY2FsZSAqIGhlaWdodDtcbiAgICAgICAgY29uc3QgYm94SGVpZ2h0ID0gZml0SGVpZ2h0ICogc2VsZWN0ZWQuZnguc2NhbGUgKiBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSAoMC41ICsgc2VsZWN0ZWQuZngueCAvIGFzcGVjdCkgKiB3aWR0aDtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9ICgwLjUgLSBzZWxlY3RlZC5meC55KSAqIGhlaWdodDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJveFdpZHRoLFxuICAgICAgICAgICAgYm94SGVpZ2h0LFxuICAgICAgICAgICAgY2VudGVyWCxcbiAgICAgICAgICAgIGNlbnRlclksXG4gICAgICAgICAgICByb3RhdGlvbjogc2VsZWN0ZWQuZngucm90YXRpb24sXG4gICAgICAgIH07XG4gICAgfSwgW3NlbGVjdGVkLCBpbWFnZUluZm8sIHN0YWdlTW9kZSwgc2NlbmVdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3Qgd29ybGRQYW5lbCA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiV29ybGQgcHJlc2V0c1wiIGFjY2VudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMSBweC0zIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge1dPUkxEX1BSRVNFVFMubWFwKChwcmVzZXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldC5jb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHByZXNldC5nbG9iYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXSBweC0xLjUgcHktMSB0ZXh0LWxlZnQgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tYWNpZCldLzYwIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bdmFyKC0tYWNpZCldLzcwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0cnVuY2F0ZVwiPntwcmVzZXQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgICA8U2VnUm93XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9kZVwiXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e0JHX01PREVTfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmJnTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmRleCkgPT4gdXBkYXRlR2xvYmFsKHsgYmdNb2RlOiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBweC0zIHB5LTEgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5iZ0F9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdBOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5iZ0J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdCOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZsdWlkIHdhcnBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLndhcnB9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgd2FycDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3dpcmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnN3aXJsfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHN3aXJsOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSaXBwbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5yaXBwbGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgcmlwcGxlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUdW5uZWwgem9vbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuem9vbX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyB6b29tOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJLYWxlaWRvc2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmthbGVpZG99XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsga2FsZWlkbzogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWlycm9yIGZvbGRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLm1pcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBtaXJyb3I6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5mZWVkYmFja31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBmZWVkYmFjazogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhaWwgbGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC50cmFpbHN9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MC42fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyB0cmFpbHM6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVjaG8gem9vbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZmJab29tfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBmYlpvb206IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVjaG8gc3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZmJSb3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTF9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9eyh2KSA9PiB2LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGZiUm90YXRlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIGh1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZmJIdWV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmJIdWU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIldvcmxkIGNvbG9yXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByaXNtIHNwbGl0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5jaHJvbWF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgY2hyb21hOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIdWUgb3JiaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmh1ZU9yYml0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGh1ZU9yYml0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zYXR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzYXR1cmF0aW9uOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuY29udHJhc3R9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGNvbnRyYXN0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTb2xhcml6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc29sYXJpemV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc29sYXJpemU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlNpZ25hbFwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcmFpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZ3JhaW59XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZ3JhaW46IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNjYW5saW5lc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc2NhbmxpbmVzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHNjYW5saW5lczogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmlnbmV0dGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnZpZ25ldHRlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuMjJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHZpZ25ldHRlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJvYmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnN0cm9iZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzdHJvYmU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIk1vdGlvbiAmIGF1ZGlvXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbWUgc3BlZWRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNwZWVkfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzcGVlZDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXVkaW8gcmVhY3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmF1ZGlvUmVhY3R9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgYXVkaW9SZWFjdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiQ3Vyc29yIChwbGF5IG1vZGUpXCI+XG4gICAgICAgICAgICAgICAgPFNlZ1Jvd1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17UE9JTlRFUl9NT0RFU31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5wb2ludGVyTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmRleCkgPT4gdXBkYXRlR2xvYmFsKHsgcG9pbnRlck1vZGU6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvcmNlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5wb2ludGVyRm9yY2V9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MC42fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBwb2ludGVyRm9yY2U6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpZWxkIHNpemVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnBvaW50ZXJTaXplfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezAuMDJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MC4zNX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgcG9pbnRlclNpemU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG5cbiAgICBjb25zdCBsYXllclBhbmVsID0gc2VsZWN0ZWQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2VjdGlvblxuICAgICAgICAgICAgICAgIHRpdGxlPXtgTGF5ZXIgXHUwMEI3ICR7c2VsZWN0ZWQubmFtZX1gfVxuICAgICAgICAgICAgICAgIGFjY2VudFxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2h1ZmZsZSBsYXllciBGWFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTGF5ZXJGeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tTGF5ZXJGeChzZWxlY3RlZC5meCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElEaWNlIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZXNldCBsYXllciBGWFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VMYXllckZ4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldExheWVyRnhFZmZlY3RzKHNlbGVjdGVkLmZ4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAge21lZGlhS2luZExhYmVsKHNlbGVjdGVkLm1lZGlhS2luZCl9XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF0ubWlzc2luZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYCBcdTAwQjcgJHtpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF0ud2lkdGh9XHUwMEQ3JHtpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF0uaGVpZ2h0fWB9XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF0/Lm1pc3NpbmcgPyBcIiBcdTAwQjcgbWlzc2luZyBvbiBkZXZpY2VcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktWzVweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCbGVuZFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoLTYgdy1mdWxsIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHB4LTEgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0ZXh0LVt2YXIoLS1wYXBlcildIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguYmxlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSBhcyBCbGVuZE1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge0JMRU5EX01PREVTLm1hcCgobW9kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXttb2RlfSB2YWx1ZT17bW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4Lm9wYWNpdHl9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgb3BhY2l0eTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNlZ1Jvd1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhbnZhcyBmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17VElMRV9NT0RFU31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnRpbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHRpbGU6IGluZGV4IH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTY2FsZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjA1fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezZ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzY2FsZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJvdGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnJvdGF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xODB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MTgwfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0RGVnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyByb3RhdGlvbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkRpc3RvcnRcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmx1aWQgd2FycFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC53YXJwfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHdhcnA6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTd2lybFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zd2lybH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzd2lybDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJpcHBsZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucmlwcGxlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHJpcHBsZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkthbGVpZG9zY29wZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5rYWxlaWRvfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGthbGVpZG86IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaXhlbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5waXhlbGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBwaXhlbGF0ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxlbnNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguYnVsZ2V9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTF9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9eyh2KSA9PiB2LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGJ1bGdlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWlycm9yIGZvbGRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngubWlycm9yfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IG1pcnJvcjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkxheWVyIGNvbG9yXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkh1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5odWV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgaHVlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2F0dXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zYXR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzYXR1cmF0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguY29udHJhc3R9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGNvbnRyYXN0OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnJpZ2h0bmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5icmlnaHRuZXNzfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBicmlnaHRuZXNzOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW52ZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmludmVydH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBpbnZlcnQ6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3N0ZXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucG9zdGVyaXplfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHBvc3Rlcml6ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByaXNtIHNwbGl0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmNocm9tYX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBjaHJvbWE6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOZW9uIGVkZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmVkZ2VzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGVkZ2VzOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS1bNXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngudGludENvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGludENvbG9yOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngudGludEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGludEFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkxheWVyIG1vdGlvblwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTcGluXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnNwaW59XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTF9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9eyh2KSA9PiB2LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHNwaW46IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEcmlmdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5kcmlmdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBkcmlmdDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlB1bHNlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnB1bHNlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHB1bHNlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hpbW1lclwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zaGltbWVyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHNoaW1tZXI6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICk7XG5cbiAgICBpZiAoZW5naW5lRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGgtc2NyZWVuIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1bdmFyKC0tdm9pZCldIHAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMiBmb250LW1vbm8gdGV4dC1zbSB0ZXh0LVsjYjg2YTc0XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VuZ2luZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXVkaW8tMiBuZWVkcyBXZWJHTCB0byBydW4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiBiZy1bdmFyKC0tdm9pZCldIHRleHQtW3ZhcigtLXBhcGVyKV0gc2VsZWN0LW5vbmVcIj5cbiAgICAgICAgICAgIDxzdHlsZT57R0xPQkFMX0NTU308L3N0eWxlPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBpbnNldC0wIG9wYWNpdHktNDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTQlIC0xMCUsIHJnYmEoMjMyLDIzMCwyMjQsLjA4KSwgdHJhbnNwYXJlbnQgMzIlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MiUgMjAlLCByZ2JhKDE2OCwxMjAsMTI4LC4wNiksIHRyYW5zcGFyZW50IDI4JSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIFRvcCBiYXIgKi99XG4gICAgICAgICAgICB7IXVpSGlkZGVuICYmIChcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwicmVsYXRpdmUgei0xMCBmbGV4IGgtMTEgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXSBweC0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItMSB0ZXh0LVsxLjE1cmVtXSBmb250LWJvbGQgbGVhZGluZy1ub25lIHRyYWNraW5nLVstMC4wOGVtXSB0ZXh0LVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXVkaW8tMlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoLVsyNnB4XSB3LTM2IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgcHgtMS41IHRleHQtWzEycHhdIGZvbnQtbWVkaXVtIHRleHQtW3ZhcigtLXBhcGVyKV0gb3V0bGluZS1ub25lIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZSldIGZvY3VzOmJvcmRlci1bdmFyKC0tYWNpZCldLzYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW50aXRsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJteC0xIGgtNCB3LXB4IGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFycmFuZ2UgbGF5ZXJzIChWKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3N0YWdlTW9kZSA9PT0gXCJhcnJhbmdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGFnZU1vZGUoXCJhcnJhbmdlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBcnJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElNb3ZlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYXkgdGhlIGNhbnZhcyB3aXRoIHlvdXIgY3Vyc29yIChQKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3N0YWdlTW9kZSA9PT0gXCJwbGF5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGFnZU1vZGUoXCJwbGF5XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElTcGFyayAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJteC0xIGgtNCB3LXB4IGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJhbmRvbWl6ZSBldmVyeXRoaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWw6IHJhbmRvbUdsb2JhbEZ4KHByZXZpb3VzLmdsb2JhbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5sYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4OiByYW5kb21MYXllckZ4KGxheWVyLmZ4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hhb3NcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SURpY2UgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVkZ2UgdGhlIHdvcmxkIHNvbWV3aGVyZSBuZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwobXV0YXRlR2xvYmFsRngoc2NlbmUuZ2xvYmFsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTXV0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElXYW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvemVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJSZXN1bWUgdGltZSAoU3BhY2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkZyZWV6ZSB0aW1lIChTcGFjZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtmcm96ZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGcm96ZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJvemVuID8gPElQbGF5IC8+IDogPElQYXVzZSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTYXZlIHNjZW5lIHRvIHlvdXIgbGlicmFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHNhdmVUb1NlcnZlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElTYXZlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgc2F2ZWQgc2NlbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NjZW5lc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmVzT3BlbigocHJldmlvdXMpID0+ICFwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTY2VuZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRm9sZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei0zMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTY2VuZXNPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcCBhYnNvbHV0ZSByaWdodC0wIHRvcC04IHotNDAgbWF4LWgtWzYwdmhdIHctNjQgb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHAtMS41IHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZUxpc3QubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInAtMyBmb250LW1vbm8gdGV4dC1bMTBweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHNhdmVkIHNjZW5lcyB5ZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoLmlzR3Vlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgKEd1ZXN0IHNlc3Npb25zIHNhdmUgbG9jYWxseSBwZXIgZGVwbG95LilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmVMaXN0Lm1hcCgobWV0YSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtMS41IGhvdmVyOmJnLVt2YXIoLS1saW5lKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggbWluLXctMCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgbG9hZEZyb21TZXJ2ZXIobWV0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmlkIGgtOSB3LTE0IGZsZXgtc2hyaW5rLTAgcGxhY2UtaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YS50aHVtYiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZXRhLnRodW1ifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bOHB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhdWRpby0yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0cnVuY2F0ZSB0ZXh0LVsxMS41cHhdIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LW1vbm8gdGV4dC1bOC41cHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhLnVwZGF0ZWRBdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgc2NlbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gb3BhY2l0eS0wIGhvdmVyOnRleHQtWyNiODZhNzRdIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGRlbGV0ZVNjZW5lTXV0YXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5jYXRjaCgoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9hc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRlbGV0ZSBmYWlsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVyU2NlbmVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VydmVyU2NlbmVJZChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJVHJhc2ggY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pY0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiU3RvcCBtaWNyb3Bob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkF1ZGlvLXJlYWN0IGZyb20geW91ciBtaWNyb3Bob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17bWljQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVNaWMoKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElNaWMgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlN0b3AgcmVjb3JkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZXR0aW5ncy5yZWNvcmRNaWNBdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJSZWNvcmQgY2FudmFzICsgbWljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiUmVjb3JkIHRoZSBjYW52YXMgdG8gdmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2VyPXtyZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHRvZ2dsZVJlY29yZGluZygpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjLWRvdCBpbmxpbmUtYmxvY2sgaC0yLjUgdy0yLjUgcm91bmRlZC1mdWxsIGJnLVsjYzQ1YjZhXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5saW5lLWJsb2NrIGgtMi41IHctMi41IHJvdW5kZWQtZnVsbCBib3JkZXItWzEuNXB4XSBib3JkZXItY3VycmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmeC1yZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHBvcnQgLyByZWNvcmRpbmcgcmVzb2x1dGlvbiAoa2VlcHMgc3RhZ2UgYXNwZWN0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwb3J0UmVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSBhcyBFeHBvcnRSZXNvbHV0aW9uSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFWFBPUlRfUkVTT0xVVElPTlMuc29tZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBvcnRSZXModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtFWFBPUlRfUkVTT0xVVElPTlMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgRXhwb3J0IFBORyBhdCAke0VYUE9SVF9SRVNPTFVUSU9OUy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBleHBvcnRSZXMpPy5sYWJlbCA/PyBcInNlbGVjdGVkXCJ9IHJlc29sdXRpb25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXhwb3J0UG5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2V0dGluZ3NPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlbHBPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5nc09wZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElTZXR0aW5ncyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbnN0cnVtZW50IG1hbnVhbCAoPylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtoZWxwT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXR0aW5nc09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlbHBPcGVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JpZCBoLVsxNXB4XSB3LVsxNXB4XSBwbGFjZS1pdGVtcy1jZW50ZXIgZm9udC1tb25vIHRleHQtWzExcHhdIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtmdWxsc2NyZWVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVGdWxsc2NyZWVuKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJRXhwYW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhpZGUgaW50ZXJmYWNlIChUYWIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVpSGlkZGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SVBhbmVsIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBtaW4taC0wIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIHsvKiBMYXllcnMgcGFuZWwgKi99XG4gICAgICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXggdy1bMjEycHhdIGZsZXgtc2hyaW5rLTAgZmxleC1jb2wgYm9yZGVyLXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGgtOCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVs5cHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzlweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnMubGVuZ3RofS97TUFYX0xBWUVSU31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW1wb3J0IGZpbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElQbHVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaW4taC0wIGZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm14LTMgbXktMyBibG9jayB3LVtjYWxjKDEwMCUtMjRweCldIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTMgcHktNiB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC1bMTBweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWFjaWQpXS81MCBob3Zlcjp0ZXh0LVt2YXIoLS1tdXRlKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wLCBwYXN0ZSwgb3IgY2xpY2sgdG8gaW1wb3J0IGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lLmxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0gaW1hZ2VJbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGxheWVyLmlkID09PSBzZWxlY3RlZElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgZ3JvdXAgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMiBweS0xLjUgJHtpc1NlbGVjdGVkID8gXCJiZy1bdmFyKC0tYWNpZCldLzEwXCIgOiBcImhvdmVyOmJnLVt2YXIoLS1saW5lKV1cIn0gJHtsYXllci5meC52aXNpYmxlID8gXCJcIiA6IFwib3BhY2l0eS00NVwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGxheWVyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5meC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJIaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LXNocmluay0wIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngobGF5ZXIuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsYXllci5meC52aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLmZ4LnZpc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElFeWUgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRXllT2ZmIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyaWQgaC04IHctOCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyICR7aXNTZWxlY3RlZCA/IFwiYm9yZGVyLVt2YXIoLS1hY2lkKV0vNjBcIiA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV1cIn0gYmctYmxhY2tgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YT8udGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21ldGEudGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGE/Lm1pc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcdTIwMjZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluLXctMCBmbGV4LTEgdHJ1bmNhdGUgdGV4dC1bMTFweF0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm1lZGlhS2luZCAhPT0gXCJpbWFnZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1zaHJpbmstMCBmb250LW1vbm8gdGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm1lZGlhS2luZCA9PT0gXCJ2aWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ2aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxheWVyLm1lZGlhS2luZCA9PT0gXCJhdWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRhdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMC41IGdyb3VwLWhvdmVyOmZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJhaXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMYXllcihsYXllci5pZCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SVVwIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb3dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGF5ZXIobGF5ZXIuaWQsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRG93biBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxheWVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUNvcHkgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bI2I4NmE3NF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGF5ZXIobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElUcmFzaCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImJvcmRlci10IGJvcmRlci1bdmFyKC0tbGluZSldIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzguNXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYgYXJyYW5nZSBcdTAwQjcgUCBwbGF5IFx1MDBCNyBTcGFjZSBmcmVlemUgXHUwMEI3IFRhYiBoaWRlIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MDBCNyBcdTIzMThaIHVuZG8gXHUwMEI3ID8gbWFudWFsIFx1MDBCNyBkcmFnIC8gd2hlZWwgLyBcdTIxRTd3aGVlbCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlLCBzY2FsZSwgcm90YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBTdGFnZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17c3RhZ2VSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgcmVsYXRpdmUgbWluLXctMCBmbGV4LTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsYWNrICR7c3RhZ2VNb2RlID09PSBcInBsYXlcIiA/IFwiY3Vyc29yLWNyb3NzaGFpclwiIDogXCJjdXJzb3ItZGVmYXVsdFwifWB9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e29uU3RhZ2VQb2ludGVyRG93bn1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17b25TdGFnZVBvaW50ZXJNb3ZlfVxuICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17b25TdGFnZVBvaW50ZXJVcH1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTGVhdmU9e29uU3RhZ2VQb2ludGVyTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3Zlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldERyYWdPdmVyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyPy5maWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBpbXBvcnRGaWxlcyhldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gY2xhc3M9XCJibG9jayBoLWZ1bGwgdy1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGlvbkJveCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGJvcmRlciBib3JkZXItW3ZhcigtLWFjaWQpXS83MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7c2VsZWN0aW9uQm94LmNlbnRlclggLSBzZWxlY3Rpb25Cb3guYm94V2lkdGggLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtzZWxlY3Rpb25Cb3guY2VudGVyWSAtIHNlbGVjdGlvbkJveC5ib3hIZWlnaHQgLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3NlbGVjdGlvbkJveC5ib3hXaWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c2VsZWN0aW9uQm94LmJveEhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3NlbGVjdGlvbkJveC5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDFweCByZ2JhKDAsMCwwLC42KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gYmctYmxhY2svNDAgcHgtNiBweS00IHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3AgaW1hZ2VzLCB2aWRlbywgYXVkaW8sIG9yIGFueSBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtkcmFnT3ZlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHotMjAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmxhY2svNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1bdmFyKC0tYWNpZCldIHB4LTggcHktNSBmb250LW1vbm8gdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZSB0byBhZGQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtzdGFnZU1vZGUgPT09IFwicGxheVwiICYmICF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBib3R0b20tMyBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFjay82MCBweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5IG1vZGUgXHUyMDE0IHRhcCwgZHJhZyAmIHBsYXkgdGhlIGtleXMgXHUwMEI3IGZpZWxkOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBPSU5URVJfTU9ERVNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHNjZW5lLmdsb2JhbC5wb2ludGVyTW9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUwMEI3ID8gbWFudWFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3JlY29yZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1bI2M0NWI2YV0vNTAgYmctYmxhY2svNjAgcHgtMi41IHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjYjg2YTc0XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjLWRvdCBpbmxpbmUtYmxvY2sgaC0yIHctMiByb3VuZGVkLWZ1bGwgYmctWyNjNDViNmFdXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZGluZ1dpdGhNaWMgPyBcIiBcdTAwQjcgbWljXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHt1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSBib3R0b20tMyByaWdodC0zIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFjay82MCBweC0yLjUgcHktMS41IGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVpSGlkZGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IFVJIChUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDb250cm9scyBwYW5lbCAqL31cbiAgICAgICAgICAgICAgICB7IXVpSGlkZGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwidy1bMjY0cHhdIGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3cteS1hdXRvIGJvcmRlci1sIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGF5ZXJQYW5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JsZFBhbmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMyBmb250LW1vbm8gdGV4dC1bOC41cHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3VibGUtY2xpY2sgYW55IHNsaWRlciB0byByZXNldCBpdC4gRmVlZGJhY2sgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1bm5lbCB6b29tICsgYSBrYWxlaWRvc2NvcGUgaXMgYSBnb29kIHdheSB0byBsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW4gYWZ0ZXJub29uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aGVscE9wZW4gJiYgPEhlbHBNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRIZWxwT3BlbihmYWxzZSl9IC8+fVxuICAgICAgICAgICAge3NldHRpbmdzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPFNldHRpbmdzTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmc9e3JlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZXR0aW5nc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7dG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AgcG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBib3R0b20tNSBsZWZ0LTEvMiB6LTUwIC10cmFuc2xhdGUteC0xLzIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcHgtNCBweS0yIGZvbnQtbW9ubyB0ZXh0LVsxMC41cHhdIHRleHQtW3ZhcigtLXBhcGVyKV0gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICB7dG9hc3R9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2ZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIiovKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzPy5sZW5ndGgpIHZvaWQgaW1wb3J0RmlsZXMoaW5wdXQuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2NsaWVudC9pbmRleC50c3hcIjtcblxucmVuZGVyKGgoQXBwLCB7fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDTyxJQzBCTUE7QUQxQk4sSUVVREM7QUZWQyxJR0dIQztBSEhHLElHOEZNQztBSDlGTixJSStLSEM7QUovS0csSUkwTEhDO0FKMUxHLElJNExEQztBSjVMQyxJSXNOREM7QUp0TkMsSUtTSEM7QUxURyxJS1VOQztBTFZNLElLV05DO0FMWE0sSUt5QkRDO0FMekJDLElLc0NIQztBTHRDRyxJS3FMREM7QUxyTEMsSUtzTERDO0FMdExDLElNRUlDO0FORkosSUFpQk1DLElBQWdDLENBQUc7QUFqQnpDLElBa0JNQyxJQUFZLENBQUE7QUFsQmxCLElBbUJNQyxJQUNaO0FBcEJNLElDQ01DLElBQVVDLE1BQU1EO0FBU3RCLFNBQVNFLEVBQU9DLElBQUtDLElBQUFBO0FBRTNCLFdBQVNSLE1BQUtRLEdBQU9ELENBQUFBLEdBQUlQLEVB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QSxFQUMvRSxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFBQSxFQUNyRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFBSyxPQUFPO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxZQUFZO0FBQUEsTUFDakUsVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sT0FBTztBQUFBLElBQ3JFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDaEUsT0FBTztBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLElBQ3RFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxZQUFZO0FBQUEsTUFDckUsVUFBVTtBQUFBLE1BQUssVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLElBQ3RFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDckQsUUFBUTtBQUFBLE1BQU0sWUFBWTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLElBQzFFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBSyxZQUFZO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDcEUsVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sT0FBTztBQUFBLE1BQUssT0FBTztBQUFBLElBQ2xFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTyxZQUFZO0FBQUEsTUFDekUsVUFBVTtBQUFBLE1BQU0sT0FBTztBQUFBLE1BQUssVUFBVTtBQUFBLE1BQUssT0FBTztBQUFBLElBQ3BELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxZQUFZO0FBQUEsTUFDekQsU0FBUztBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sV0FBVztBQUFBLElBQ3pFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUNiLElBQU0sYUFBYTtBQUFBLEVBQ2pCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxSmIsSUFBTSxZQUFZO0FBQUEsRUFDaEIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRJYixTQUFTLFFBQVEsSUFBMkIsTUFBYyxRQUE2QjtBQUNyRixRQUFNLFNBQVMsR0FBRyxhQUFhLElBQUk7QUFDbkMsTUFBSSxDQUFDLE9BQVEsT0FBTSxJQUFJLE1BQU0seUJBQXlCO0FBQ3RELEtBQUcsYUFBYSxRQUFRLE1BQU07QUFDOUIsS0FBRyxjQUFjLE1BQU07QUFDdkIsTUFBSSxDQUFDLEdBQUcsbUJBQW1CLFFBQVEsR0FBRyxjQUFjLEdBQUc7QUFDckQsVUFBTSxPQUFPLEdBQUcsaUJBQWlCLE1BQU0sS0FBSztBQUM1QyxPQUFHLGFBQWEsTUFBTTtBQUN0QixVQUFNLElBQUksTUFBTSwwQkFBMEIsSUFBSSxFQUFFO0FBQUEsRUFDbEQ7QUFDQSxTQUFPO0FBQ1Q7QUFFQSxTQUFTLFlBQVksSUFBMkIsTUFBdUI7QUFDckUsUUFBTSxVQUFVLEdBQUcsY0FBYztBQUNqQyxNQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSwwQkFBMEI7QUFDeEQsS0FBRyxhQUFhLFNBQVMsUUFBUSxJQUFJLEdBQUcsZUFBZSxJQUFJLENBQUM7QUFDNUQsS0FBRyxhQUFhLFNBQVMsUUFBUSxJQUFJLEdBQUcsaUJBQWlCLElBQUksQ0FBQztBQUM5RCxLQUFHLG1CQUFtQixTQUFTLEdBQUcsT0FBTztBQUN6QyxLQUFHLFlBQVksT0FBTztBQUN0QixNQUFJLENBQUMsR0FBRyxvQkFBb0IsU0FBUyxHQUFHLFdBQVcsR0FBRztBQUNwRCxVQUFNLElBQUksTUFBTSx3QkFBd0IsR0FBRyxrQkFBa0IsT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUFBLEVBQ3RGO0FBQ0EsUUFBTSxXQUF3RCxDQUFDO0FBQy9ELFFBQU0sUUFBUSxHQUFHLG9CQUFvQixTQUFTLEdBQUcsZUFBZTtBQUNoRSxXQUFTQyxLQUFJLEdBQUdBLEtBQUksT0FBT0EsTUFBSztBQUM5QixVQUFNLE9BQU8sR0FBRyxpQkFBaUIsU0FBU0EsRUFBQztBQUMzQyxRQUFJLEtBQU0sVUFBUyxLQUFLLElBQUksSUFBSSxHQUFHLG1CQUFtQixTQUFTLEtBQUssSUFBSTtBQUFBLEVBQzFFO0FBQ0EsU0FBTyxFQUFFLFNBQVMsU0FBUztBQUM3QjtBQUVPLFNBQVMsU0FBUyxLQUF1QztBQUM5RCxRQUFNLFFBQVEsb0JBQW9CLEtBQUssR0FBRztBQUMxQyxNQUFJLENBQUMsTUFBTyxRQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0IsUUFBTSxRQUFRLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNuQyxTQUFPLEVBQUcsU0FBUyxLQUFNLE9BQU8sTUFBTyxTQUFTLElBQUssT0FBTyxNQUFNLFFBQVEsT0FBTyxHQUFHO0FBQ3RGO0FBRUEsU0FBUyxrQkFBa0IsUUFBMkQ7QUFDcEYsTUFBSSxPQUFPLHFCQUFxQixlQUFlLGtCQUFrQixrQkFBa0I7QUFDakYsV0FBTztBQUFBLE1BQ0wsT0FBTyxLQUFLLElBQUksR0FBRyxPQUFPLGNBQWMsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUN6RCxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU8sZUFBZSxPQUFPLFVBQVUsQ0FBQztBQUFBLElBQzlEO0FBQUEsRUFDRjtBQUNBLE1BQUksT0FBTyxxQkFBcUIsZUFBZSxrQkFBa0Isa0JBQWtCO0FBQ2pGLFdBQU87QUFBQSxNQUNMLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxnQkFBZ0IsT0FBTyxTQUFTLENBQUM7QUFBQSxNQUMzRCxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU8saUJBQWlCLE9BQU8sVUFBVSxDQUFDO0FBQUEsSUFDaEU7QUFBQSxFQUNGO0FBQ0EsTUFBSSxPQUFPLHNCQUFzQixlQUFlLGtCQUFrQixtQkFBbUI7QUFDbkYsV0FBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxLQUFLLEdBQUcsUUFBUSxLQUFLLElBQUksR0FBRyxPQUFPLE1BQU0sRUFBRTtBQUFBLEVBQ2hGO0FBQ0EsTUFBSSxPQUFPLGdCQUFnQixlQUFlLGtCQUFrQixhQUFhO0FBQ3ZFLFdBQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxHQUFHLE9BQU8sS0FBSyxHQUFHLFFBQVEsS0FBSyxJQUFJLEdBQUcsT0FBTyxNQUFNLEVBQUU7QUFBQSxFQUNoRjtBQUNBLFFBQU0sWUFBWTtBQUNsQixTQUFPO0FBQUEsSUFDTCxPQUFPLEtBQUssSUFBSSxHQUFHLFVBQVUsU0FBUyxDQUFDO0FBQUEsSUFDdkMsUUFBUSxLQUFLLElBQUksR0FBRyxVQUFVLFVBQVUsQ0FBQztBQUFBLEVBQzNDO0FBQ0Y7QUFFTyxTQUFTLGFBQWEsUUFBeUM7QUFDcEUsUUFBTSxLQUFLLE9BQU8sV0FBVyxTQUFTO0FBQUEsSUFDcEMsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsdUJBQXVCO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUEsRUFDbkIsQ0FBQztBQUNELE1BQUksQ0FBQyxHQUFJLE9BQU0sSUFBSSxNQUFNLHdDQUF3QztBQUVqRSxRQUFNLE9BQU8sR0FBRyxhQUFhO0FBQzdCLEtBQUcsV0FBVyxHQUFHLGNBQWMsSUFBSTtBQUNuQyxLQUFHLFdBQVcsR0FBRyxjQUFjLElBQUksYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLFdBQVc7QUFDdkYsS0FBRyx3QkFBd0IsQ0FBQztBQUM1QixLQUFHLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxPQUFPLE9BQU8sR0FBRyxDQUFDO0FBRWxELFFBQU0sV0FBVztBQUFBLElBQ2YsSUFBSSxZQUFZLElBQUksT0FBTztBQUFBLElBQzNCLE9BQU8sWUFBWSxJQUFJLFVBQVU7QUFBQSxJQUNqQyxNQUFNLFlBQVksSUFBSSxTQUFTO0FBQUEsSUFDL0IsTUFBTSxZQUFZLElBQUksU0FBUztBQUFBLEVBQ2pDO0FBRUEsV0FBUyxjQUE0QjtBQUNuQyxVQUFNLFVBQVUsR0FBSSxjQUFjO0FBQ2xDLFFBQUksQ0FBQyxRQUFTLE9BQU0sSUFBSSxNQUFNLDBCQUEwQjtBQUN4RCxPQUFJLFlBQVksR0FBSSxZQUFZLE9BQU87QUFDdkMsT0FBSSxjQUFjLEdBQUksWUFBWSxHQUFJLG9CQUFvQixHQUFJLE1BQU07QUFDcEUsT0FBSSxjQUFjLEdBQUksWUFBWSxHQUFJLG9CQUFvQixHQUFJLE1BQU07QUFDcEUsT0FBSSxjQUFjLEdBQUksWUFBWSxHQUFJLGdCQUFnQixHQUFJLGFBQWE7QUFDdkUsT0FBSSxjQUFjLEdBQUksWUFBWSxHQUFJLGdCQUFnQixHQUFJLGFBQWE7QUFDdkUsV0FBTztBQUFBLEVBQ1Q7QUFFQSxXQUFTLFdBQVdDLFFBQWVDLFNBQXdCO0FBQ3pELFVBQU0sVUFBVSxZQUFZO0FBQzVCLE9BQUksV0FBVyxHQUFJLFlBQVksR0FBRyxHQUFJLE1BQU1ELFFBQU9DLFNBQVEsR0FBRyxHQUFJLE1BQU0sR0FBSSxlQUFlLElBQUk7QUFDL0YsVUFBTSxjQUFjLEdBQUksa0JBQWtCO0FBQzFDLFFBQUksQ0FBQyxZQUFhLE9BQU0sSUFBSSxNQUFNLDhCQUE4QjtBQUNoRSxPQUFJLGdCQUFnQixHQUFJLGFBQWEsV0FBVztBQUNoRCxPQUFJLHFCQUFxQixHQUFJLGFBQWEsR0FBSSxtQkFBbUIsR0FBSSxZQUFZLFNBQVMsQ0FBQztBQUMzRixPQUFJLGdCQUFnQixHQUFJLGFBQWEsSUFBSTtBQUN6QyxXQUFPLEVBQUUsYUFBYSxTQUFTLE9BQUFELFFBQU8sUUFBQUMsUUFBTztBQUFBLEVBQy9DO0FBRUEsV0FBUyxhQUFhLFFBQWdCRCxRQUFlQyxTQUFnQjtBQUNuRSxRQUFJLE9BQU8sVUFBVUQsVUFBUyxPQUFPLFdBQVdDLFFBQVE7QUFDeEQsT0FBSSxZQUFZLEdBQUksWUFBWSxPQUFPLE9BQU87QUFDOUMsT0FBSSxXQUFXLEdBQUksWUFBWSxHQUFHLEdBQUksTUFBTUQsUUFBT0MsU0FBUSxHQUFHLEdBQUksTUFBTSxHQUFJLGVBQWUsSUFBSTtBQUMvRixXQUFPLFFBQVFEO0FBQ2YsV0FBTyxTQUFTQztBQUFBLEVBQ2xCO0FBRUEsTUFBSSxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU8sU0FBUyxDQUFDO0FBQ3pDLE1BQUksU0FBUyxLQUFLLElBQUksR0FBRyxPQUFPLFVBQVUsQ0FBQztBQUMzQyxNQUFJLGdCQUFnQjtBQUNwQixNQUFJLFdBQVc7QUFDZixNQUFJLFlBQVk7QUFFaEIsUUFBTSxVQUFVO0FBQUEsSUFDZCxRQUFRLFdBQVcsT0FBTyxNQUFNO0FBQUEsSUFDaEMsUUFBUSxXQUFXLE9BQU8sTUFBTTtBQUFBLElBQ2hDLE9BQU8sV0FBVyxPQUFPLE1BQU07QUFBQSxJQUMvQixPQUFPLFdBQVcsT0FBTyxNQUFNO0FBQUEsRUFDakM7QUFDQSxNQUFJLFdBQVc7QUFDZixNQUFJLG9CQUFvQjtBQUl4QixRQUFNLGlCQUFpQixZQUFZO0FBQ25DO0FBQ0UsVUFBTSxPQUFPO0FBQ2IsVUFBTSxPQUFPLElBQUksV0FBVyxPQUFPLE9BQU8sQ0FBQztBQUMzQyxhQUFTQyxLQUFJLEdBQUdBLEtBQUksTUFBTUEsTUFBSztBQUM3QixlQUFTQyxLQUFJLEdBQUdBLEtBQUksTUFBTUEsTUFBSztBQUM3QixjQUFNSixNQUFLRyxLQUFJLE9BQU9DLE1BQUs7QUFDM0IsY0FBTSxPQUFRQSxLQUFJLEtBQUssS0FBS0QsS0FBSSxLQUFLLElBQUssSUFBSTtBQUM5QyxhQUFLSCxFQUFDLElBQUksT0FBTyxNQUFNLEtBQU9JLEtBQUksSUFBSztBQUN2QyxhQUFLSixLQUFJLENBQUMsSUFBSSxPQUFPLEtBQUs7QUFDMUIsYUFBS0EsS0FBSSxDQUFDLElBQUksT0FBTyxNQUFNLEtBQU9HLEtBQUksSUFBSztBQUMzQyxhQUFLSCxLQUFJLENBQUMsSUFBSTtBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUNBLE9BQUcsWUFBWSxHQUFHLFlBQVksY0FBYztBQUM1QyxPQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsR0FBRyxNQUFNLE1BQU0sTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLGVBQWUsSUFBSTtBQUFBLEVBQ3pGO0FBRUEsUUFBTSxTQUFTLG9CQUFJLElBQXNFO0FBRXpGLFdBQVMsV0FBVztBQUNsQixPQUFJLFdBQVcsR0FBSSxXQUFXLEdBQUcsQ0FBQztBQUFBLEVBQ3BDO0FBRUEsV0FBUyxpQkFBaUIsUUFBdUI7QUFDL0MsT0FBSSxnQkFBZ0IsR0FBSSxhQUFhLFNBQVMsT0FBTyxjQUFjLElBQUk7QUFDdkUsT0FBSSxTQUFTLEdBQUcsR0FBRyxTQUFTLE9BQU8sUUFBUSxPQUFPLFNBQVMsT0FBTyxTQUFTLE1BQU07QUFBQSxFQUNuRjtBQUVBLFdBQVMsR0FBR0ssSUFBWSxNQUFjLE9BQWU7QUFDbkQsVUFBTSxNQUFNQSxHQUFFLFNBQVMsSUFBSTtBQUMzQixRQUFJLElBQUssSUFBSSxVQUFVLEtBQUssS0FBSztBQUFBLEVBQ25DO0FBQ0EsV0FBU0MsSUFBR0QsSUFBWSxNQUFjRCxJQUFXRCxJQUFXO0FBQzFELFVBQU0sTUFBTUUsR0FBRSxTQUFTLElBQUk7QUFDM0IsUUFBSSxJQUFLLElBQUksVUFBVSxLQUFLRCxJQUFHRCxFQUFDO0FBQUEsRUFDbEM7QUFDQSxXQUFTSSxJQUFHRixJQUFZLE1BQWNHLElBQTZCO0FBQ2pFLFVBQU0sTUFBTUgsR0FBRSxTQUFTLElBQUk7QUFDM0IsUUFBSSxJQUFLLElBQUksVUFBVSxLQUFLRyxHQUFFLENBQUMsR0FBR0EsR0FBRSxDQUFDLEdBQUdBLEdBQUUsQ0FBQyxDQUFDO0FBQUEsRUFDOUM7QUFDQSxXQUFTLEtBQUtILElBQVksTUFBYyxTQUF1QixNQUFjO0FBQzNFLFVBQU0sTUFBTUEsR0FBRSxTQUFTLElBQUk7QUFDM0IsUUFBSSxDQUFDLElBQUs7QUFDVixPQUFJLGNBQWMsR0FBSSxXQUFXLElBQUk7QUFDckMsT0FBSSxZQUFZLEdBQUksWUFBWSxPQUFPO0FBQ3ZDLE9BQUksVUFBVSxLQUFLLElBQUk7QUFBQSxFQUN6QjtBQUVBLFdBQVMsT0FBTyxPQUFtQjtBQUNqQyxRQUFJLEdBQUksY0FBYyxFQUFHO0FBQ3pCLFVBQU1JLEtBQUksTUFBTTtBQUdoQixVQUFNLEtBQUssU0FBUztBQUNwQixPQUFJLFdBQVcsR0FBRyxPQUFPO0FBQ3pCLHFCQUFpQixRQUFRLE1BQU07QUFDL0IsSUFBQUgsSUFBRyxJQUFJLFNBQVMsT0FBTyxNQUFNO0FBQzdCLE9BQUcsSUFBSSxVQUFVLE1BQU0sSUFBSTtBQUMzQixPQUFHLElBQUksVUFBVUcsR0FBRSxNQUFNO0FBQ3pCLElBQUFGLElBQUcsSUFBSSxhQUFhRSxHQUFFLEdBQUc7QUFDekIsSUFBQUYsSUFBRyxJQUFJLGFBQWFFLEdBQUUsR0FBRztBQUN6QixPQUFHLElBQUksV0FBVyxNQUFNLFFBQVFBLEdBQUUsVUFBVTtBQUM1QyxhQUFTO0FBR1QsUUFBSSxTQUFTLFFBQVE7QUFDckIsUUFBSSxPQUFPLFFBQVE7QUFDbkIsVUFBTSxlQUFlLFNBQVM7QUFDOUIsT0FBSSxXQUFXLGFBQWEsT0FBTztBQUNuQyxlQUFXLFNBQVMsTUFBTSxRQUFRO0FBQ2hDLFlBQU0sUUFBUSxPQUFPLElBQUksTUFBTSxPQUFPO0FBQ3RDLHVCQUFpQixJQUFJO0FBQ3JCLFdBQUssY0FBYyxVQUFVLE9BQU8sU0FBUyxDQUFDO0FBQzlDLFdBQUssY0FBYyxTQUFTLFFBQVEsTUFBTSxVQUFVLGdCQUFnQixDQUFDO0FBQ3JFLE1BQUFILElBQUcsY0FBYyxTQUFTLE9BQU8sTUFBTTtBQUN2QyxNQUFBQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQSxRQUFRLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxRQUM5QixRQUFRLElBQUksTUFBTSxTQUFTLElBQUk7QUFBQSxNQUNqQztBQUNBLE1BQUFBLElBQUcsY0FBYyxTQUFTLE1BQU0sSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNwRCxNQUFBQSxJQUFHLGNBQWMsU0FBUyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDcEQsU0FBRyxjQUFjLFNBQVMsTUFBTSxHQUFHO0FBQ25DLFNBQUcsY0FBYyxVQUFVLE1BQU0sSUFBSTtBQUNyQyxTQUFHLGNBQWMsV0FBVyxNQUFNLFFBQVFHLEdBQUUsVUFBVTtBQUN0RCxTQUFHLGNBQWMsYUFBYSxNQUFNLE9BQU87QUFDM0MsU0FBRyxjQUFjLFdBQVcsTUFBTSxLQUFLO0FBQ3ZDLFNBQUcsY0FBYyxVQUFVLE1BQU0sSUFBSTtBQUNyQyxTQUFHLGNBQWMsVUFBVSxNQUFNLElBQUk7QUFDckMsU0FBRyxjQUFjLFdBQVcsTUFBTSxLQUFLO0FBQ3ZDLFNBQUcsY0FBYyxZQUFZLE1BQU0sTUFBTTtBQUN6QyxTQUFHLGNBQWMsYUFBYSxNQUFNLE9BQU87QUFDM0MsU0FBRyxjQUFjLGNBQWMsTUFBTSxRQUFRO0FBQzdDLFNBQUcsY0FBYyxXQUFXLE1BQU0sS0FBSztBQUN2QyxTQUFHLGNBQWMsWUFBWSxNQUFNLE1BQU07QUFDekMsU0FBRyxjQUFjLFNBQVMsTUFBTSxHQUFHO0FBQ25DLFNBQUcsY0FBYyxTQUFTLE1BQU0sVUFBVTtBQUMxQyxTQUFHLGNBQWMsU0FBUyxNQUFNLFFBQVE7QUFDeEMsU0FBRyxjQUFjLFNBQVMsTUFBTSxVQUFVO0FBQzFDLFNBQUcsY0FBYyxZQUFZLE1BQU0sTUFBTTtBQUN6QyxTQUFHLGNBQWMsWUFBWSxNQUFNLFNBQVM7QUFDNUMsU0FBRyxjQUFjLFlBQVksTUFBTSxNQUFNO0FBQ3pDLFNBQUcsY0FBYyxXQUFXLE1BQU0sS0FBSztBQUN2QyxNQUFBRixJQUFHLGNBQWMsVUFBVSxNQUFNLElBQUk7QUFDckMsU0FBRyxjQUFjLGNBQWMsTUFBTSxVQUFVO0FBQy9DLFNBQUcsY0FBYyxhQUFhLE1BQU0sT0FBTztBQUMzQyxTQUFHLGNBQWMsVUFBVSxNQUFNLElBQUk7QUFDckMsZUFBUztBQUNULFlBQU0sT0FBTztBQUNiLGVBQVM7QUFDVCxhQUFPO0FBQUEsSUFDVDtBQUdBLFFBQUksbUJBQW1CO0FBQ3JCLGlCQUFXLFVBQVUsQ0FBQyxRQUFRLE9BQU8sUUFBUSxLQUFLLEdBQUc7QUFDbkQseUJBQWlCLE1BQU07QUFDdkIsV0FBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDekIsV0FBSSxNQUFNLEdBQUksZ0JBQWdCO0FBQUEsTUFDaEM7QUFDQSwwQkFBb0I7QUFBQSxJQUN0QjtBQUNBLFVBQU0sT0FBTyxXQUFXLFFBQVEsUUFBUSxRQUFRO0FBQ2hELFVBQU0sTUFBTSxXQUFXLFFBQVEsUUFBUSxRQUFRO0FBQy9DLGVBQVcsQ0FBQztBQUVaLFVBQU0sT0FBTyxTQUFTO0FBQ3RCLE9BQUksV0FBVyxLQUFLLE9BQU87QUFDM0IscUJBQWlCLEdBQUc7QUFDcEIsU0FBSyxNQUFNLFdBQVcsT0FBTyxTQUFTLENBQUM7QUFDdkMsU0FBSyxNQUFNLFVBQVUsS0FBSyxTQUFTLENBQUM7QUFDcEMsSUFBQUQsSUFBRyxNQUFNLFNBQVMsT0FBTyxNQUFNO0FBQy9CLE9BQUcsTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUM3QixPQUFHLE1BQU0sV0FBVyxNQUFNLFFBQVFHLEdBQUUsVUFBVTtBQUM5QyxJQUFBSCxJQUFHLE1BQU0sYUFBYSxNQUFNLFFBQVEsR0FBRyxNQUFNLFFBQVEsQ0FBQztBQUN0RCxJQUFBQSxJQUFHLE1BQU0saUJBQWlCLE1BQU0sUUFBUSxXQUFXLE1BQU0sUUFBUSxTQUFTO0FBQzFFLE9BQUcsTUFBTSxrQkFBa0IsTUFBTSxRQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3JELE9BQUcsTUFBTSxvQkFBb0IsTUFBTSxRQUFRLFNBQVMsSUFBSSxDQUFDO0FBQ3pELE9BQUcsTUFBTSxjQUFjRyxHQUFFLFFBQVE7QUFDakMsT0FBRyxNQUFNLFlBQVlBLEdBQUUsTUFBTTtBQUM3QixPQUFHLE1BQU0sYUFBYUEsR0FBRSxNQUFNO0FBQzlCLE9BQUcsTUFBTSxlQUFlQSxHQUFFLFFBQVE7QUFDbEMsT0FBRyxNQUFNLFlBQVlBLEdBQUUsS0FBSztBQUM1QixPQUFHLE1BQU0sVUFBVUEsR0FBRSxJQUFJO0FBQ3pCLE9BQUcsTUFBTSxXQUFXQSxHQUFFLEtBQUs7QUFDM0IsT0FBRyxNQUFNLFlBQVlBLEdBQUUsTUFBTTtBQUM3QixPQUFHLE1BQU0sVUFBVUEsR0FBRSxJQUFJO0FBQ3pCLE9BQUcsTUFBTSxhQUFhQSxHQUFFLE9BQU87QUFDL0IsT0FBRyxNQUFNLFlBQVlBLEdBQUUsTUFBTTtBQUM3QixPQUFHLE1BQU0sWUFBWUEsR0FBRSxNQUFNO0FBQzdCLE9BQUcsTUFBTSxlQUFlQSxHQUFFLFFBQVE7QUFDbEMsT0FBRyxNQUFNLFNBQVNBLEdBQUUsVUFBVTtBQUM5QixPQUFHLE1BQU0sU0FBU0EsR0FBRSxRQUFRO0FBQzVCLE9BQUcsTUFBTSxjQUFjQSxHQUFFLFFBQVE7QUFDakMsT0FBRyxNQUFNLFdBQVdBLEdBQUUsS0FBSztBQUMzQixPQUFHLE1BQU0sZUFBZUEsR0FBRSxTQUFTO0FBQ25DLE9BQUcsTUFBTSxjQUFjQSxHQUFFLFFBQVE7QUFDakMsT0FBRyxNQUFNLFlBQVlBLEdBQUUsTUFBTTtBQUM3QixPQUFHLE1BQU0sbUJBQW1CQSxHQUFFLFlBQVk7QUFDMUMsT0FBRyxNQUFNLGtCQUFrQkEsR0FBRSxXQUFXO0FBQ3hDLE9BQUcsTUFBTSxrQkFBa0JBLEdBQUUsV0FBVztBQUN4QyxhQUFTO0FBR1QsVUFBTSxPQUFPLFNBQVM7QUFDdEIsT0FBSSxXQUFXLEtBQUssT0FBTztBQUMzQixxQkFBaUIsSUFBSTtBQUNyQixTQUFLLE1BQU0sU0FBUyxJQUFJLFNBQVMsQ0FBQztBQUNsQyxhQUFTO0FBQUEsRUFDWDtBQUVBLFdBQVMsWUFBWTtBQUNuQixVQUFNLFFBQVEsS0FBSyxJQUFJLE9BQU8sb0JBQW9CLEdBQUcsYUFBYTtBQUNsRSxVQUFNLFlBQVksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFdBQVcsS0FBSyxDQUFDO0FBQzFELFVBQU0sYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sWUFBWSxLQUFLLENBQUM7QUFDNUQsUUFBSSxjQUFjLFNBQVMsZUFBZSxPQUFRO0FBQ2xELFlBQVE7QUFDUixhQUFTO0FBQ1QsV0FBTyxRQUFRO0FBQ2YsV0FBTyxTQUFTO0FBQ2hCLGVBQVcsVUFBVSxPQUFPLE9BQU8sT0FBTyxFQUFHLGNBQWEsUUFBUSxPQUFPLE1BQU07QUFDL0Usd0JBQW9CO0FBQUEsRUFDdEI7QUFFQSxTQUFPO0FBQUEsSUFDTCxPQUFPLGNBQWMsZUFBZTtBQUNsQyxpQkFBVyxLQUFLLElBQUksR0FBRyxZQUFZO0FBQ25DLGtCQUFZLEtBQUssSUFBSSxHQUFHLGFBQWE7QUFDckMsZ0JBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxpQkFBaUIsS0FBSztBQUNwQixzQkFBZ0IsS0FBSyxJQUFJLEtBQUssR0FBRztBQUNqQyxnQkFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVMsU0FBUyxhQUFhO0FBQzdCLFVBQUksUUFBUSxPQUFPLElBQUksT0FBTztBQUM5QixVQUFJLENBQUMsT0FBTztBQUNWLGdCQUFRLEVBQUUsU0FBUyxZQUFZLEdBQUcsT0FBTyxHQUFHLFFBQVEsRUFBRTtBQUN0RCxlQUFPLElBQUksU0FBUyxLQUFLO0FBQUEsTUFDM0I7QUFDQSxTQUFHLFlBQVksR0FBRyxZQUFZLE1BQU0sT0FBTztBQUMzQyxTQUFHLFlBQVksR0FBRyxxQkFBcUIsSUFBSTtBQUMzQyxTQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLGVBQWUsV0FBVztBQUMvRSxTQUFHLFlBQVksR0FBRyxxQkFBcUIsS0FBSztBQUM1QyxZQUFNLE9BQU8sa0JBQWtCLFdBQVc7QUFDMUMsWUFBTSxRQUFRLEtBQUs7QUFDbkIsWUFBTSxTQUFTLEtBQUs7QUFBQSxJQUN0QjtBQUFBLElBQ0EsWUFBWSxTQUFTO0FBQ25CLFlBQU0sUUFBUSxPQUFPLElBQUksT0FBTztBQUNoQyxVQUFJLENBQUMsTUFBTztBQUNaLFNBQUcsY0FBYyxNQUFNLE9BQU87QUFDOUIsYUFBTyxPQUFPLE9BQU87QUFBQSxJQUN2QjtBQUFBLElBQ0EsU0FBUyxTQUFTO0FBQ2hCLGFBQU8sT0FBTyxJQUFJLE9BQU87QUFBQSxJQUMzQjtBQUFBLElBQ0E7QUFBQSxJQUNBLGdCQUFnQjtBQUNkLDBCQUFvQjtBQUFBLElBQ3RCO0FBQUEsSUFDQSxVQUFVO0FBQ1IsaUJBQVcsU0FBUyxPQUFPLE9BQU8sRUFBRyxJQUFHLGNBQWMsTUFBTSxPQUFPO0FBQ25FLGFBQU8sTUFBTTtBQUNiLFNBQUcsY0FBYyxjQUFjO0FBQy9CLGlCQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sR0FBRztBQUMzQyxXQUFHLGtCQUFrQixPQUFPLFdBQVc7QUFDdkMsV0FBRyxjQUFjLE9BQU8sT0FBTztBQUFBLE1BQ2pDO0FBQ0EsaUJBQVcsRUFBRSxRQUFRLEtBQUssT0FBTyxPQUFPLFFBQVEsRUFBRyxJQUFHLGNBQWMsT0FBTztBQUMzRSxVQUFJLEtBQU0sSUFBRyxhQUFhLElBQUk7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjs7O0FDMzBCQSxJQUFNLFlBQVk7QUFDbEIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sWUFBWTtBQUVYLFNBQVMsYUFBYSxNQUF1QjtBQUNsRCxRQUFNLE9BQU8sS0FBSyxLQUFLLFlBQVk7QUFDbkMsTUFBSSxLQUFLLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDdEMsTUFBSSxLQUFLLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDdEMsTUFBSSxLQUFLLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDdEMsTUFBSSxVQUFVLEtBQUssS0FBSyxJQUFJLEVBQUcsUUFBTztBQUN0QyxNQUFJLFVBQVUsS0FBSyxLQUFLLElBQUksRUFBRyxRQUFPO0FBQ3RDLE1BQUksVUFBVSxLQUFLLEtBQUssSUFBSSxFQUFHLFFBQU87QUFDdEMsU0FBTztBQUNUO0FBRU8sU0FBUyxhQUFhLE1BQVksT0FBTyxJQUFlO0FBQzdELFNBQU8sYUFBYSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxRQUFRLEVBQUUsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQzNFO0FBRU8sU0FBUyxlQUFlLE1BQXlCO0FBQ3RELFVBQVEsTUFBTTtBQUFBLElBQ1osS0FBSztBQUNILGFBQU87QUFBQSxJQUNULEtBQUs7QUFDSCxhQUFPO0FBQUEsSUFDVCxLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1QsS0FBSztBQUNILGFBQU87QUFBQSxJQUNULFNBQVM7QUFDUCxZQUFNLGNBQXFCO0FBQzNCLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGO0FBRU8sU0FBUyxpQkFBaUIsTUFBaUIsVUFBMEI7QUFDMUUsUUFBTSxPQUFPLFNBQVMsUUFBUSxpQkFBaUIsRUFBRSxFQUFFLEtBQUs7QUFDeEQsU0FBTyxRQUFRLGVBQWUsSUFBSTtBQUNwQztBQUdPLFNBQVMsZUFBZSxRQUEyQixPQUFtQjtBQUMzRSxRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixTQUFPLFFBQVE7QUFDZixTQUFPLFNBQVM7QUFDaEIsUUFBTSxNQUFNLE9BQU8sV0FBVyxJQUFJO0FBQ2xDLE1BQUksQ0FBQyxJQUFLO0FBRVYsUUFBTSxRQUFRLElBQUksZ0JBQWdCLE9BQU8sTUFBTTtBQUMvQyxRQUFNLFFBQVEsUUFBUTtBQUN0QixRQUFNLE1BQU0sTUFBTTtBQUNsQixXQUFTQyxLQUFJLEdBQUdBLEtBQUksT0FBT0EsTUFBSyxHQUFHO0FBQ2pDLFVBQU1DLEtBQUksTUFBTyxNQUFNRCxLQUFJLEdBQUcsS0FBSyxJQUFNQSxLQUFJLEtBQU07QUFDbkQsVUFBTUUsS0FBSSxNQUFPLE1BQU9GLEtBQUksSUFBSyxHQUFHLEtBQUssSUFBTUEsS0FBSSxLQUFNO0FBQ3pELFVBQU1HLEtBQUksTUFBTyxPQUFPSCxLQUFJLElBQUksTUFBTSxHQUFHLEtBQUssSUFBTUEsS0FBSSxLQUFNO0FBQzlELFVBQU1JLEtBQUlKLEtBQUk7QUFDZCxVQUFNLEtBQUtJLEVBQUMsSUFBSUg7QUFDaEIsVUFBTSxLQUFLRyxLQUFJLENBQUMsSUFBSUY7QUFDcEIsVUFBTSxLQUFLRSxLQUFJLENBQUMsS0FBS0gsS0FBSUUsTUFBSztBQUM5QixVQUFNLEtBQUtDLEtBQUksQ0FBQyxJQUFJO0FBQUEsRUFDdEI7QUFDQSxNQUFJLGFBQWEsT0FBTyxHQUFHLENBQUM7QUFFNUIsUUFBTSxPQUFPLElBQUkscUJBQXFCLEdBQUcsR0FBRyxPQUFPLE1BQU07QUFDekQsT0FBSyxhQUFhLEdBQUcsdUJBQXVCO0FBQzVDLE9BQUssYUFBYSxLQUFLLHdCQUF3QjtBQUMvQyxPQUFLLGFBQWEsR0FBRyx1QkFBdUI7QUFDNUMsTUFBSSxZQUFZO0FBQ2hCLE1BQUksU0FBUyxHQUFHLEdBQUcsT0FBTyxNQUFNO0FBQ2xDO0FBRU8sU0FBUyxxQkFBcUIsUUFBMkI7QUFDOUQsTUFBSSxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsS0FBSztBQUNqRCxXQUFPLFFBQVE7QUFDZixXQUFPLFNBQVM7QUFBQSxFQUNsQjtBQUNGO0FBRU8sU0FBUyxrQkFBa0IsVUFBOEI7QUFDOUQsUUFBTSxPQUFPLEtBQUssSUFBSSxJQUFJLFNBQVMsTUFBTTtBQUN6QyxNQUFJLFFBQVE7QUFDWixXQUFTSixLQUFJLEdBQUdBLEtBQUksTUFBTUEsTUFBSztBQUM3QixhQUFTLFNBQVNBLEVBQUMsS0FBSyxPQUFRQSxLQUFJLE9BQVE7QUFDOUMsU0FBTyxLQUFLLElBQUksR0FBRyxRQUFRLE9BQU8sR0FBRztBQUN2QztBQUdPLFNBQVMsaUJBQ2QsUUFDQSxVQUNBLE9BQ0EsTUFDQTtBQUNBLHVCQUFxQixNQUFNO0FBQzNCLFFBQU0sUUFBUSxPQUFPO0FBQ3JCLFFBQU0sU0FBUyxPQUFPO0FBQ3RCLFFBQU0sTUFBTSxPQUFPLFdBQVcsSUFBSTtBQUNsQyxNQUFJLENBQUMsSUFBSztBQUVWLE1BQUksWUFBWSxrQkFBa0IsT0FBTyxJQUFJLFNBQVMsSUFBSTtBQUMxRCxNQUFJLFNBQVMsR0FBRyxHQUFHLE9BQU8sTUFBTTtBQUVoQyxRQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksU0FBUyxNQUFNO0FBQ3pDLFFBQU0sV0FBVyxRQUFRO0FBQ3pCLFFBQU0sTUFBTSxTQUFTO0FBQ3JCLFdBQVNBLEtBQUksR0FBR0EsS0FBSSxNQUFNQSxNQUFLLEdBQUc7QUFDaEMsVUFBTSxTQUFTLFNBQVNBLEVBQUMsSUFBSTtBQUM3QixVQUFNLFFBQVEsVUFBVSxPQUFPLFFBQVE7QUFDdkMsVUFBTUssS0FBSSxRQUFRLFNBQVM7QUFDM0IsVUFBTSxNQUFNLEtBQU1MLEtBQUksT0FBUSxLQUFLLE9BQU8sS0FBSyxRQUFRO0FBQ3ZELFFBQUksWUFBWSxPQUFPLE1BQU0sR0FBRyxJQUFJLEtBQUssU0FBUyxFQUFFLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDekUsUUFBSSxTQUFTQSxLQUFJLFVBQVUsTUFBTUssS0FBSSxNQUFNLEtBQUssSUFBSSxHQUFHLFdBQVcsSUFBSSxHQUFHQSxFQUFDO0FBQUEsRUFDNUU7QUFFQSxRQUFNLEtBQUssUUFBUTtBQUNuQixRQUFNLEtBQUssU0FBUztBQUNwQixRQUFNLFNBQVMsS0FBSyxJQUFJLE9BQU8sTUFBTSxLQUFLLE9BQU8sUUFBUTtBQUN6RCxRQUFNLE9BQU8sSUFBSSxxQkFBcUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRztBQUNyRSxPQUFLLGFBQWEsR0FBRyxxQkFBcUIsT0FBTyxRQUFRLElBQUksR0FBRztBQUNoRSxPQUFLLGFBQWEsR0FBRyxtQkFBbUI7QUFDeEMsTUFBSSxZQUFZO0FBQ2hCLE1BQUksVUFBVTtBQUNkLE1BQUksSUFBSSxJQUFJLElBQUksU0FBUyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDNUMsTUFBSSxLQUFLO0FBQ1g7QUFFTyxTQUFTLFlBQ2QsUUFDQSxPQUNBLFFBQ0EsU0FBUyxJQUNEO0FBQ1IsUUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLFNBQVMsS0FBSyxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUM7QUFDN0QsUUFBTSxRQUFRLFNBQVMsY0FBYyxRQUFRO0FBQzdDLFFBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFDbkQsUUFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxTQUFTLEtBQUssQ0FBQztBQUNyRCxRQUFNLE1BQU0sTUFBTSxXQUFXLElBQUk7QUFDakMsTUFBSSxDQUFDLElBQUssUUFBTztBQUNqQixNQUFJLFVBQVUsUUFBUSxHQUFHLEdBQUcsTUFBTSxPQUFPLE1BQU0sTUFBTTtBQUNyRCxTQUFPLE1BQU0sVUFBVSxjQUFjLEdBQUc7QUFDMUM7OztBQzNJQSxJQUFNLFVBQVU7QUFDaEIsSUFBTSxRQUFRO0FBQ2QsSUFBTSxlQUFlO0FBQ3JCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sWUFBWTtBQUVsQixJQUFJLFlBQXlDO0FBRTdDLFNBQVMsU0FBK0I7QUFDdEMsTUFBSSxDQUFDLFdBQVc7QUFDZCxnQkFBWSxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDM0MsWUFBTUMsV0FBVSxVQUFVLEtBQUssU0FBUyxDQUFDO0FBQ3pDLE1BQUFBLFNBQVEsa0JBQWtCLE1BQU07QUFDOUIsWUFBSSxDQUFDQSxTQUFRLE9BQU8saUJBQWlCLFNBQVMsS0FBSyxHQUFHO0FBQ3BELFVBQUFBLFNBQVEsT0FBTyxrQkFBa0IsS0FBSztBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUNBLE1BQUFBLFNBQVEsWUFBWSxNQUFNLFFBQVFBLFNBQVEsTUFBTTtBQUNoRCxNQUFBQSxTQUFRLFVBQVUsTUFBTSxPQUFPQSxTQUFRLFNBQVMsSUFBSSxNQUFNLHVCQUF1QixDQUFDO0FBQUEsSUFDcEYsQ0FBQztBQUFBLEVBQ0g7QUFDQSxTQUFPO0FBQ1Q7QUFFQSxlQUFzQixhQUFhLElBQVksTUFBMkI7QUFDeEUsUUFBTSxLQUFLLE1BQU0sT0FBTztBQUN4QixRQUFNLElBQUksUUFBYyxDQUFDLFNBQVMsV0FBVztBQUMzQyxVQUFNLEtBQUssR0FBRyxZQUFZLE9BQU8sV0FBVztBQUM1QyxPQUFHLFlBQVksS0FBSyxFQUFFLElBQUksTUFBTSxFQUFFO0FBQ2xDLE9BQUcsYUFBYSxNQUFNLFFBQVE7QUFDOUIsT0FBRyxVQUFVLE1BQU0sT0FBTyxHQUFHLFNBQVMsSUFBSSxNQUFNLHdCQUF3QixDQUFDO0FBQUEsRUFDM0UsQ0FBQztBQUNIO0FBRUEsZUFBc0IsYUFBYSxJQUFrQztBQUNuRSxRQUFNLEtBQUssTUFBTSxPQUFPO0FBQ3hCLFNBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLFVBQU1BLFdBQVUsR0FBRyxZQUFZLE9BQU8sVUFBVSxFQUFFLFlBQVksS0FBSyxFQUFFLElBQUksRUFBRTtBQUMzRSxJQUFBQSxTQUFRLFlBQVksTUFBTSxRQUFRQSxTQUFRLGtCQUFrQixPQUFPQSxTQUFRLFNBQVMsSUFBSTtBQUN4RixJQUFBQSxTQUFRLFVBQVUsTUFBTSxPQUFPQSxTQUFRLFNBQVMsSUFBSSxNQUFNLHVCQUF1QixDQUFDO0FBQUEsRUFDcEYsQ0FBQztBQUNIO0FBcUJPLFNBQVMsZ0JBQWdCLE1BQW1DO0FBQ2pFLFNBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLFVBQU0sTUFBTSxJQUFJLGdCQUFnQixJQUFJO0FBQ3BDLFVBQU0sUUFBUSxJQUFJLE1BQU07QUFDeEIsVUFBTSxTQUFTLE1BQU07QUFDbkIsVUFBSSxnQkFBZ0IsR0FBRztBQUN2QixVQUFJO0FBQ0YsY0FBTSxRQUFRLEtBQUssSUFBSSxHQUFHLGtCQUFrQixLQUFLLElBQUksTUFBTSxjQUFjLE1BQU0sYUFBYSxDQUFDO0FBQzdGLGNBQU0sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sTUFBTSxlQUFlLEtBQUssQ0FBQztBQUNoRSxjQUFNLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLEtBQUssQ0FBQztBQUNsRSxjQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMsZUFBTyxRQUFRO0FBQ2YsZUFBTyxTQUFTO0FBQ2hCLGNBQU0sVUFBVSxPQUFPLFdBQVcsSUFBSTtBQUN0QyxZQUFJLENBQUMsUUFBUyxPQUFNLElBQUksTUFBTSx1QkFBdUI7QUFDckQsZ0JBQVEsVUFBVSxPQUFPLEdBQUcsR0FBRyxPQUFPLE1BQU07QUFFNUMsY0FBTSxhQUFhLEtBQUssSUFBSSxHQUFHLFlBQVksS0FBSyxJQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xFLGNBQU0sY0FBYyxTQUFTLGNBQWMsUUFBUTtBQUNuRCxvQkFBWSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxRQUFRLFVBQVUsQ0FBQztBQUM5RCxvQkFBWSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxTQUFTLFVBQVUsQ0FBQztBQUNoRSxjQUFNLGVBQWUsWUFBWSxXQUFXLElBQUk7QUFDaEQsWUFBSSxhQUFjLGNBQWEsVUFBVSxRQUFRLEdBQUcsR0FBRyxZQUFZLE9BQU8sWUFBWSxNQUFNO0FBRTVGLGdCQUFRO0FBQUEsVUFDTjtBQUFBLFVBQ0EsT0FBTyxZQUFZLFVBQVUsY0FBYyxHQUFHO0FBQUEsVUFDOUM7QUFBQSxVQUNBO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSCxTQUFTLE9BQU87QUFDZCxlQUFPLGlCQUFpQixRQUFRLFFBQVEsSUFBSSxNQUFNLHFCQUFxQixDQUFDO0FBQUEsTUFDMUU7QUFBQSxJQUNGO0FBQ0EsVUFBTSxVQUFVLE1BQU07QUFDcEIsVUFBSSxnQkFBZ0IsR0FBRztBQUN2QixhQUFPLElBQUksTUFBTSw2QkFBNkIsQ0FBQztBQUFBLElBQ2pEO0FBQ0EsVUFBTSxNQUFNO0FBQUEsRUFDZCxDQUFDO0FBQ0g7QUFFTyxTQUFTLE1BQU0sUUFBd0I7QUFDNUMsU0FBTyxHQUFHLE1BQU0sSUFBSSxLQUFLLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDdkY7QUFFTyxTQUFTLGFBQWEsT0FBb0I7QUFDL0MsTUFBSTtBQUNGLGlCQUFhLFFBQVEsY0FBYyxZQUFZLEtBQUssQ0FBQztBQUFBLEVBQ3ZELFFBQVE7QUFBQSxFQUVSO0FBQ0Y7QUFFTyxTQUFTLGVBQTZCO0FBQzNDLE1BQUk7QUFDRixVQUFNLE1BQU0sYUFBYSxRQUFRLFlBQVk7QUFDN0MsUUFBSSxDQUFDLElBQUssUUFBTztBQUNqQixXQUFPLFlBQVksR0FBRztBQUFBLEVBQ3hCLFFBQVE7QUFDTixXQUFPO0FBQUEsRUFDVDtBQUNGOzs7QUU3R2EsSUNoQlRDLEtBQVU7QUF3QmQsU0FBU0MsR0FBWUMsSUFBTUMsSUFBT0MsSUFBS0MsSUFBa0JDLElBQVVDLElBQUFBO0FBQzdESixFQUFBQSxPQUFPQSxLQUFRLENBQUE7QUFJcEIsTUFDQ0ssSUFDQUMsSUFGR0MsS0FBa0JQO0FBSXRCLE1BQUksU0FBU08sR0FFWixNQUFLRCxNQURMQyxLQUFrQixDQUFBLEdBQ1JQLEdBQ0EsVUFBTE0sS0FDSEQsS0FBTUwsR0FBTU0sRUFBQUEsSUFFWkMsR0FBZ0JELEVBQUFBLElBQUtOLEdBQU1NLEVBQUFBO0FBTTlCLE1BQU1FLEtBQVEsRUFDYlQsTUFBQUEsSUFDQUMsT0FBT08sSUFDUE4sS0FBQUEsSUFDQUksS0FBQUEsSUFDQUksS0FBVyxNQUNYQyxJQUFTLE1BQ1RDLEtBQVEsR0FDUkMsS0FBTSxNQUNOQyxLQUFZLE1BQ1pDLGFBQUFBLFFBQ0FDLEtBQUFBLEVBQWFDLElBQ2JDLEtBQUFBLElBQ0FDLEtBQVEsR0FDUmYsVUFBQUEsSUFDQUMsUUFBQUEsR0FBQUE7QUFLRCxNQUFvQixjQUFBLE9BQVRMLE9BQXdCTSxLQUFNTixHQUFLb0IsY0FDN0MsTUFBS2IsTUFBS0QsR0FBQUEsWUFDTEUsR0FBZ0JELEVBQUFBLE1BQ25CQyxHQUFnQkQsRUFBQUEsSUFBS0QsR0FBSUMsRUFBQUE7QUFLNUIsU0FESWMsRUFBUVosU0FBT1ksRUFBUVosTUFBTUEsRUFBQUEsR0FDMUJBO0FBQ1I7OztBQ2pCQSxJQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEVuQixJQUFNLHFCQUFxQjtBQUFBLEVBQ3ZCLEVBQUUsSUFBSSxVQUFVLE9BQU8sVUFBVSxRQUFRLEVBQUU7QUFBQSxFQUMzQyxFQUFFLElBQUksT0FBTyxPQUFPLFFBQVEsUUFBUSxJQUFJO0FBQUEsRUFDeEMsRUFBRSxJQUFJLFFBQVEsT0FBTyxTQUFTLFFBQVEsS0FBSztBQUFBLEVBQzNDLEVBQUUsSUFBSSxRQUFRLE9BQU8sU0FBUyxRQUFRLEtBQUs7QUFBQSxFQUMzQyxFQUFFLElBQUksUUFBUSxPQUFPLE1BQU0sUUFBUSxLQUFLO0FBQzVDO0FBSUEsSUFBTSxrQkFBa0I7QUFFeEIsU0FBUyxrQkFDTCxjQUNBLE9BRUEsY0FBYyxHQUNtQjtBQUNqQyxRQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sTUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSSxpQkFBaUIsVUFBVTtBQUMzQixhQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxNQUFNLFNBQVMsV0FBVyxDQUFDO0FBQzNELFlBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLE1BQU0sUUFBUSxXQUFXLENBQUM7QUFBQSxFQUM3RCxPQUFPO0FBQ0gsVUFBTSxTQUFTLG1CQUFtQjtBQUFBLE1BQzlCLENBQUMsU0FBUyxLQUFLLE9BQU87QUFBQSxJQUMxQjtBQUNBLGFBQVMsUUFBUSxVQUFVO0FBQzNCLFlBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFNBQVMsTUFBTSxDQUFDO0FBQUEsRUFDbkQ7QUFDQSxRQUFNLFVBQVUsS0FBSyxJQUFJLE9BQU8sTUFBTTtBQUN0QyxNQUFJLFVBQVUsaUJBQWlCO0FBQzNCLFVBQU0sUUFBUSxrQkFBa0I7QUFDaEMsWUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFDN0MsYUFBUyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sU0FBUyxLQUFLLENBQUM7QUFBQSxFQUNuRDtBQUVBLFNBQU8sRUFBRSxPQUFPLFFBQVMsUUFBUSxHQUFJLFFBQVEsU0FBVSxTQUFTLEVBQUc7QUFDdkU7QUFLQSxJQUFNLE1BQU0sQ0FBQyxPQUFrQixhQUMzQixnQkFBQWE7QUFBQSxFQUFDO0FBQUE7QUFBQSxJQUNHLE9BQU8sTUFBTSxTQUFTO0FBQUEsSUFDdEIsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsZ0JBQWE7QUFBQSxJQUNiLGtCQUFlO0FBQUEsSUFDZixtQkFBZ0I7QUFBQSxJQUNoQixlQUFZO0FBQUEsSUFFWDtBQUFBO0FBQ0w7QUFFSixJQUFNLFFBQVEsQ0FBQ0MsT0FBaUIsSUFBSUEsSUFBRyxnQkFBQUQsR0FBQyxVQUFLLEdBQUUsb0JBQW1CLENBQUU7QUFDcEUsSUFBTSxRQUFRLENBQUNDLE9BQ1g7QUFBQSxFQUNJQTtBQUFBLEVBQ0EsZ0JBQUFELEdBQUEsS0FDSTtBQUFBLG9CQUFBQSxHQUFDLFVBQUssR0FBRSxLQUFJLEdBQUUsS0FBSSxPQUFNLE1BQUssUUFBTyxNQUFLLElBQUcsT0FBTTtBQUFBLElBQ2xELGdCQUFBQSxHQUFDLFlBQU8sSUFBRyxLQUFJLElBQUcsS0FBSSxHQUFFLE9BQU0sTUFBSyxnQkFBZTtBQUFBLElBQ2xELGdCQUFBQSxHQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE9BQU0sTUFBSyxnQkFBZTtBQUFBLElBQ3BELGdCQUFBQSxHQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsS0FBSSxHQUFFLE9BQU0sTUFBSyxnQkFBZTtBQUFBLElBQ25ELGdCQUFBQSxHQUFDLFlBQU8sSUFBRyxLQUFJLElBQUcsTUFBSyxHQUFFLE9BQU0sTUFBSyxnQkFBZTtBQUFBLEtBQ3ZEO0FBQ0o7QUFDSixJQUFNLFFBQVEsQ0FBQ0MsT0FDWDtBQUFBLEVBQ0lBO0FBQUEsRUFDQSxnQkFBQUQsR0FBQyxVQUFLLEdBQUUsc0pBQXFKO0FBQ2pLO0FBQ0osSUFBTSxRQUFRLENBQUNDLE9BQ1gsSUFBSUEsSUFBRyxnQkFBQUQsR0FBQyxVQUFLLEdBQUUsMENBQXlDLENBQUU7QUFDOUQsSUFBTSxVQUFVLENBQUNDLE9BQ2I7QUFBQSxFQUNJQTtBQUFBLEVBQ0EsZ0JBQUFELEdBQUMsVUFBSyxHQUFFLDJHQUEwRztBQUN0SDtBQUNKLElBQU0sT0FBTyxDQUFDQyxPQUNWO0FBQUEsRUFDSUE7QUFBQSxFQUNBLGdCQUFBRCxHQUFBLEtBQ0k7QUFBQSxvQkFBQUEsR0FBQyxVQUFLLEdBQUUsS0FBSSxHQUFFLEtBQUksT0FBTSxLQUFJLFFBQU8sTUFBSyxJQUFHLEtBQUk7QUFBQSxJQUMvQyxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsd0NBQXVDO0FBQUEsS0FDbkQ7QUFDSjtBQUNKLElBQU0sWUFBWSxDQUFDQyxPQUNmLElBQUlBLElBQUcsZ0JBQUFELEdBQUMsVUFBSyxHQUFFLCtDQUE4QyxDQUFFO0FBQ25FLElBQU0sVUFBVSxDQUFDQyxPQUNiLElBQUlBLElBQUcsZ0JBQUFELEdBQUMsVUFBSyxHQUFFLHlDQUF3QyxDQUFFO0FBQzdELElBQU0sT0FBTyxDQUFDQyxPQUNWO0FBQUEsRUFDSUE7QUFBQSxFQUNBLGdCQUFBRCxHQUFBLEtBQ0k7QUFBQSxvQkFBQUEsR0FBQyxVQUFLLEdBQUUsdUVBQXNFO0FBQUEsSUFDOUUsZ0JBQUFBLEdBQUMsWUFBTyxJQUFHLE1BQUssSUFBRyxNQUFLLEdBQUUsT0FBTTtBQUFBLEtBQ3BDO0FBQ0o7QUFDSixJQUFNLFVBQVUsQ0FBQ0MsT0FDYjtBQUFBLEVBQ0lBO0FBQUEsRUFDQSxnQkFBQUQsR0FBQSxLQUNJLDBCQUFBQSxHQUFDLFVBQUssR0FBRSx3SUFBdUksR0FDbko7QUFDSjtBQUNKLElBQU0sU0FBUyxDQUFDQyxPQUNaLElBQUlBLElBQUcsZ0JBQUFELEdBQUMsVUFBSyxHQUFFLHlEQUF3RCxDQUFFO0FBQzdFLElBQU0sUUFBUSxDQUFDQyxPQUNYO0FBQUEsRUFDSUE7QUFBQSxFQUNBLGdCQUFBRCxHQUFBLEtBQ0k7QUFBQSxvQkFBQUEsR0FBQyxVQUFLLEdBQUUsS0FBSSxHQUFFLEtBQUksT0FBTSxNQUFLLFFBQU8sTUFBSyxJQUFHLE9BQU07QUFBQSxJQUNsRCxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsd0ZBQXVGO0FBQUEsS0FDbkc7QUFDSjtBQUNKLElBQU0sTUFBTSxDQUFDQyxPQUFpQixJQUFJQSxJQUFHLGdCQUFBRCxHQUFDLFVBQUssR0FBRSxpQkFBZ0IsQ0FBRTtBQUMvRCxJQUFNLFFBQVEsQ0FBQ0MsT0FBaUIsSUFBSUEsSUFBRyxnQkFBQUQsR0FBQyxVQUFLLEdBQUUsaUJBQWdCLENBQUU7QUFDakUsSUFBTSxTQUFTLENBQUNDLE9BQWlCLElBQUlBLElBQUcsZ0JBQUFELEdBQUMsVUFBSyxHQUFFLG1CQUFrQixDQUFFO0FBQ3BFLElBQU0sUUFBUSxDQUFDQyxPQUFpQixJQUFJQSxJQUFHLGdCQUFBRCxHQUFDLFVBQUssR0FBRSxpQkFBZ0IsQ0FBRTtBQUNqRSxJQUFNLFNBQVMsQ0FBQ0MsT0FDWjtBQUFBLEVBQ0lBO0FBQUEsRUFDQSxnQkFBQUQsR0FBQSxLQUNJO0FBQUEsb0JBQUFBLEdBQUMsVUFBSyxHQUFFLEtBQUksR0FBRSxPQUFNLE9BQU0sTUFBSyxRQUFPLE1BQUssSUFBRyxPQUFNO0FBQUEsSUFDcEQsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLGdCQUFlO0FBQUEsS0FDM0I7QUFDSjtBQUNKLElBQU0sUUFBUSxDQUFDQyxPQUNYO0FBQUEsRUFDSUE7QUFBQSxFQUNBLGdCQUFBRCxHQUFDLFVBQUssR0FBRSxtSUFBa0k7QUFDOUk7QUFDSixJQUFNLFNBQVMsQ0FBQ0MsT0FDWjtBQUFBLEVBQ0lBO0FBQUEsRUFDQSxnQkFBQUQsR0FBQyxVQUFLLEdBQUUsa0hBQWlIO0FBQzdIO0FBQ0osSUFBTSxZQUFZLENBQUNDLE9BQ2Y7QUFBQSxFQUNJQTtBQUFBLEVBQ0EsZ0JBQUFELEdBQUEsS0FDSTtBQUFBLG9CQUFBQSxHQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUk7QUFBQSxJQUM5QixnQkFBQUEsR0FBQyxVQUFLLEdBQUUsMG1CQUF5bUI7QUFBQSxLQUNybkI7QUFDSjtBQVFKLElBQU0sZUFBZTtBQUNyQixJQUFNLG1CQUFnQyxFQUFFLGdCQUFnQixNQUFNO0FBRTlELFNBQVMsZUFBNEI7QUFDakMsTUFBSTtBQUNBLFVBQU0sTUFBTSxhQUFhLFFBQVEsWUFBWTtBQUM3QyxRQUFJLENBQUMsSUFBSyxRQUFPLEVBQUUsR0FBRyxpQkFBaUI7QUFDdkMsVUFBTSxTQUFTLEtBQUssTUFBTSxHQUFHO0FBQzdCLFdBQU87QUFBQSxNQUNILGdCQUFnQixRQUFRLE9BQU8sY0FBYztBQUFBLElBQ2pEO0FBQUEsRUFDSixRQUFRO0FBQ0osV0FBTyxFQUFFLEdBQUcsaUJBQWlCO0FBQUEsRUFDakM7QUFDSjtBQUVBLFNBQVMsYUFBYSxVQUF1QjtBQUN6QyxNQUFJO0FBQ0EsaUJBQWEsUUFBUSxjQUFjLEtBQUssVUFBVSxRQUFRLENBQUM7QUFBQSxFQUMvRCxRQUFRO0FBQUEsRUFFUjtBQUNKO0FBSUEsU0FBUyxVQUFVLElBQW9CO0FBQ25DLE1BQUksT0FBTztBQUNYLFdBQVNFLEtBQUksR0FBR0EsS0FBSSxHQUFHLFFBQVFBO0FBQzNCLFdBQVEsT0FBTyxLQUFLLEdBQUcsV0FBV0EsRUFBQyxNQUFPO0FBQzlDLFNBQVEsT0FBTyxNQUFRO0FBQzNCO0FBRUEsU0FBUyxVQUFVLE9BQXVCO0FBQ3RDLFNBQU8sR0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQy9CO0FBQ0EsU0FBUyxRQUFRLE9BQXVCO0FBQ3BDLFNBQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQzlCO0FBQ0EsU0FBUyxLQUFLLE9BQWUsTUFBTSxHQUFHLE1BQU0sR0FBVztBQUNuRCxTQUFPLE9BQU8sS0FBSyxPQUFRLFFBQVEsUUFBUSxNQUFNLE9BQVEsR0FBRyxDQUFDLEVBQUU7QUFBQSxJQUMzRDtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQ0o7QUFhQSxJQUFNLGVBS0E7QUFBQSxFQUNGLEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFFBQVEsT0FBTyxPQUFPO0FBQUEsRUFDdkQsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sU0FBUyxPQUFPLFFBQVE7QUFBQSxFQUN6RCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sU0FBUztBQUFBLEVBQzNELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFFBQVEsT0FBTyxTQUFTO0FBQUEsRUFDekQsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sV0FBVyxPQUFPLFVBQVU7QUFBQSxFQUM3RCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sU0FBUztBQUFBLEVBQzNELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFVBQVUsT0FBTyxRQUFRO0FBQUEsRUFDMUQsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sWUFBWSxPQUFPLE9BQU87QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sU0FBUztBQUFBLEVBQzNELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFVBQVUsT0FBTyxTQUFTO0FBQy9EO0FBRUEsSUFBTSxhQUE4QztBQUFBLEVBQ2hELEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxRQUFRLEtBQUssSUFBSTtBQUFBLEVBQ3pCLEVBQUUsTUFBTSxhQUFhLEtBQUssSUFBSTtBQUFBLEVBQzlCLEVBQUUsTUFBTSxTQUFTLEtBQUssSUFBSTtBQUM5QjtBQUVBLElBQU0sa0JBQW1EO0FBQUEsRUFDckQsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFFBQVEsS0FBSyxJQUFJO0FBQUEsRUFDekIsRUFBRSxNQUFNLFNBQVMsS0FBSyxJQUFJO0FBQUEsRUFDMUIsRUFBRSxNQUFNLFVBQVUsS0FBSyxJQUFJO0FBQUEsRUFDM0IsRUFBRSxNQUFNLFNBQVMsS0FBSyxJQUFJO0FBQzlCO0FBR0EsSUFBTSxvQkFBb0I7QUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSjtBQUVBLFNBQVMsU0FBUyxRQUFnQixZQUFvQixXQUEyQjtBQUM3RSxRQUFNQyxLQUFJLGFBQWEsS0FBSyxJQUFJLFdBQVcsSUFBSSxTQUFTO0FBQ3hELFFBQU0sVUFBVSxDQUFDQyxPQUFjO0FBQzNCLFVBQU1DLE1BQUtELEtBQUksU0FBUyxNQUFNO0FBQzlCLFVBQU1FLEtBQUksWUFBWUgsS0FBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUlFLEtBQUksR0FBRyxJQUFJQSxJQUFHLENBQUMsQ0FBQztBQUNoRSxXQUFPLEtBQUssTUFBTUMsS0FBSSxHQUFHLEVBQ3BCLFNBQVMsRUFBRSxFQUNYLFNBQVMsR0FBRyxHQUFHO0FBQUEsRUFDeEI7QUFDQSxTQUFPLElBQUksUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQ25EO0FBcUJBLFNBQVMsYUFBb0I7QUFDekIsU0FBTyxFQUFFLE1BQU0sWUFBWSxRQUFRLENBQUMsR0FBRyxRQUFRLEVBQUUsR0FBRyxrQkFBa0IsRUFBRTtBQUM1RTtBQUlBLFNBQVMsT0FBTyxPQVFiO0FBQ0MsUUFBTSxNQUFNLE1BQU0sT0FBTztBQUN6QixRQUFNLE1BQU0sTUFBTSxPQUFPO0FBQ3pCLFFBQU0sTUFBTSxPQUFRLE1BQU0sUUFBUSxRQUFRLE1BQU0sT0FBUSxLQUFLLEdBQUcsR0FBRztBQUNuRSxTQUNJLGdCQUFBTjtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0csT0FBTTtBQUFBLE1BQ04sWUFBWSxNQUNSLE1BQU0sUUFBUSxVQUFhLE1BQU0sU0FBUyxNQUFNLEdBQUc7QUFBQSxNQUV2RCxPQUFNO0FBQUEsTUFFTjtBQUFBLHdCQUFBQSxHQUFDLFNBQUksT0FBTSx3R0FDUDtBQUFBLDBCQUFBQSxHQUFDLFVBQU0sZ0JBQU0sT0FBTTtBQUFBLFVBQ25CLGdCQUFBQSxHQUFDLFVBQUssT0FBTSxvQ0FDUCxnQkFBTSxTQUNELE1BQU0sT0FBTyxNQUFNLEtBQUssSUFDeEIsS0FBSyxNQUFNLE9BQU8sS0FBSyxHQUFHLEdBQ3BDO0FBQUEsV0FDSjtBQUFBLFFBQ0EsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxNQUFLO0FBQUEsWUFDTCxPQUFNO0FBQUEsWUFDTixPQUFPLEVBQUUsVUFBVSxHQUFHLEdBQUcsSUFBSTtBQUFBLFlBQzdCO0FBQUEsWUFDQTtBQUFBLFlBQ0EsTUFBTTtBQUFBLFlBQ04sT0FBTyxNQUFNO0FBQUEsWUFDYixTQUFTLENBQUMsVUFDTixNQUFNO0FBQUEsY0FDRjtBQUFBLGdCQUNLLE1BQU0sY0FBbUM7QUFBQSxjQUM5QztBQUFBLFlBQ0o7QUFBQTtBQUFBLFFBRVI7QUFBQTtBQUFBO0FBQUEsRUFDSjtBQUVSO0FBRUEsU0FBUyxRQUFRLE9BS2Q7QUFDQyxTQUNJLGdCQUFBQSxHQUFDLGFBQVEsT0FBTSxzQ0FDWDtBQUFBLG9CQUFBQSxHQUFDLFlBQU8sT0FBTSxvQ0FDVjtBQUFBLHNCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTyxzREFBc0QsTUFBTSxTQUFTLHVCQUF1QixvQkFBb0I7QUFBQSxVQUV0SCxnQkFBTTtBQUFBO0FBQUEsTUFDWDtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLGdDQUErQjtBQUFBLE1BQzFDLE1BQU07QUFBQSxPQUNYO0FBQUEsSUFDQyxNQUFNO0FBQUEsS0FDWDtBQUVSO0FBRUEsU0FBUyxPQUFPLE9BS2I7QUFDQyxTQUNJLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxpQkFDUDtBQUFBLG9CQUFBQSxHQUFDLFNBQUksT0FBTSxrRUFDTixnQkFBTSxPQUNYO0FBQUEsSUFDQSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0sUUFDTixnQkFBTSxRQUFRLElBQUksQ0FBQyxRQUFRLFVBQ3hCLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUcsTUFBSztBQUFBLFFBQ0wsU0FBUyxNQUFNLE1BQU0sU0FBUyxLQUFLO0FBQUEsUUFDbkMsT0FBTyxzR0FDSCxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sUUFDdEIsd0NBQ0EsZ0VBQ1Y7QUFBQSxRQUVDO0FBQUE7QUFBQSxNQVRJO0FBQUEsSUFVVCxDQUNILEdBQ0w7QUFBQSxLQUNKO0FBRVI7QUFFQSxTQUFTLFVBQVUsT0FRaEI7QUFDQyxTQUNJLGdCQUFBQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0csTUFBSztBQUFBLE1BQ0wsT0FBTyxNQUFNO0FBQUEsTUFDYixVQUFVLE1BQU07QUFBQSxNQUNoQixTQUFTLE1BQU07QUFBQSxNQUNmLE9BQU8sNEhBQ0gsTUFBTSxTQUNBLGdFQUNBLE1BQU0sU0FDSixvREFDQSxvSEFDWjtBQUFBLE1BRUM7QUFBQSxjQUFNO0FBQUEsUUFDTixNQUFNLFFBQ0gsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLG9CQUFvQixnQkFBTSxPQUFNLElBQzVDO0FBQUE7QUFBQTtBQUFBLEVBQ1I7QUFFUjtBQWNBLFNBQVMsV0FBVyxPQUErQztBQUMvRCxNQUFJLFNBQVM7QUFDYixNQUFJLFdBQVc7QUFDZixNQUFJLGFBQWE7QUFDakIsTUFBSSxhQUFhO0FBQ2pCLE1BQUksTUFBTSxVQUFVLFVBQVU7QUFDMUIsYUFBUztBQUNULGlCQUFhO0FBQ2IsaUJBQWE7QUFBQSxFQUNqQixXQUFXLE1BQU0sVUFBVSxNQUFNO0FBQzdCLGFBQVM7QUFDVCxpQkFBYTtBQUNiLGlCQUFhO0FBQUEsRUFDakIsV0FBVyxNQUFNLFVBQVUsUUFBUTtBQUMvQixVQUFNLE1BQU0sTUFBTSxPQUFPO0FBQ3pCLGFBQVMsUUFBUSxHQUFHO0FBQ3BCLGlCQUFhLE9BQU8sR0FBRztBQUN2QixlQUFXLE9BQU8sR0FBRztBQUNyQixpQkFBYSxRQUFRLEdBQUc7QUFBQSxFQUM1QixXQUFXLE1BQU0sVUFBVSxTQUFTO0FBQ2hDLGFBQVM7QUFDVCxpQkFBYTtBQUNiLGlCQUFhO0FBQUEsRUFDakIsV0FBVyxNQUFNLFVBQVUsUUFBUTtBQUMvQixlQUFXO0FBQUEsRUFDZjtBQUNBLFNBQ0ksZ0JBQUFBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDRyxPQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDSCxPQUFPLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtBQUFBLFFBQzdCLGFBQWE7QUFBQSxRQUNiO0FBQUEsTUFDSjtBQUFBLE1BRUE7QUFBQSx3QkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNHLE9BQU07QUFBQSxZQUNOLE9BQU8sRUFBRSxPQUFPLFNBQVM7QUFBQSxZQUV4QixnQkFBTTtBQUFBO0FBQUEsUUFDWDtBQUFBLFFBQ0MsTUFBTSxRQUNILGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0csT0FBTTtBQUFBLFlBQ04sT0FBTyxFQUFFLE9BQU8sV0FBVztBQUFBLFlBRTFCLGdCQUFNO0FBQUE7QUFBQSxRQUNYLElBQ0E7QUFBQTtBQUFBO0FBQUEsRUFDUjtBQUVSO0FBRUEsU0FBUyxTQUFTLE9BQXFEO0FBQ25FLFNBQ0ksZ0JBQUFBLEdBQUMsU0FDRztBQUFBLG9CQUFBQSxHQUFDLFFBQUcsT0FBTSw4RUFDTCxnQkFBTSxPQUNYO0FBQUEsSUFDQSxnQkFBQUEsR0FBQyxRQUFHLE9BQU0sZUFDTCxnQkFBTSxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUN6QixnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUVHLE9BQU07QUFBQSxRQUVOO0FBQUEsMEJBQUFBLEdBQUMsVUFBSyxPQUFNLHVCQUF1QixnQkFBSztBQUFBLFVBQU87QUFBQSxVQUFJO0FBQUE7QUFBQTtBQUFBLE1BSDlDO0FBQUEsSUFJVCxDQUNILEdBQ0w7QUFBQSxLQUNKO0FBRVI7QUFFQSxTQUFTLFVBQVUsT0FBZ0M7QUFDL0MsUUFBTSxVQUFVLENBQUMsVUFDYixLQUFLLE1BQU8sUUFBUSxXQUFXLFNBQVUsR0FBRztBQUNoRCxRQUFNLE9BQWlEO0FBQUEsSUFDbkQ7QUFBQSxNQUNJLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxRQUNGLEVBQUUsS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLFNBQVM7QUFBQSxRQUN6QyxHQUFHLGNBQWMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsV0FBVztBQUFBLFVBQzlDLEtBQUssUUFBUSxRQUFRLEtBQUssRUFBRTtBQUFBLFVBQzVCLE9BQU8sT0FBTztBQUFBLFVBQ2QsT0FBTztBQUFBLFFBQ1gsRUFBRTtBQUFBLFFBQ0YsRUFBRSxLQUFLLEtBQUssT0FBTyxPQUFPO0FBQUEsUUFDMUIsRUFBRSxLQUFLLEtBQUssT0FBTyxPQUFPO0FBQUEsUUFDMUIsRUFBRSxLQUFLLFVBQUssR0FBRyxLQUFLLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFBQSxNQUNwRDtBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsTUFDSSxRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsUUFDRixFQUFFLEtBQUssVUFBSyxHQUFHLEtBQUssT0FBTyxXQUFXLE9BQU8sTUFBTTtBQUFBLFFBQ25ELEdBQUcsYUFBYSxJQUFJLENBQUMsU0FBUztBQUFBLFVBQzFCLEtBQUssSUFBSTtBQUFBLFVBQ1QsT0FBTyxJQUFJO0FBQUEsVUFDWCxPQUFPO0FBQUEsUUFDWCxFQUFFO0FBQUEsUUFDRixFQUFFLEtBQUssS0FBSyxPQUFPLFVBQVUsT0FBTyxLQUFLO0FBQUEsUUFDekMsRUFBRSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sS0FBSztBQUFBLFFBQ3pDLEVBQUUsS0FBSyxNQUFNLEdBQUcsS0FBSyxPQUFPLFNBQVMsT0FBTyxLQUFLO0FBQUEsTUFDckQ7QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLE1BQ0ksUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLFFBQ0YsRUFBRSxLQUFLLFVBQUssR0FBRyxLQUFLLE9BQU8sT0FBTztBQUFBLFFBQ2xDLEdBQUcsV0FBVyxJQUFJLENBQUMsS0FBSyxXQUFXO0FBQUEsVUFDL0IsS0FBSyxJQUFJO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxLQUFLLFFBQVEsS0FBSztBQUFBLFFBQ3RCLEVBQUU7QUFBQSxRQUNGLEVBQUUsS0FBSyxVQUFLLEdBQUcsR0FBSyxPQUFPLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0o7QUFBQSxJQUNBO0FBQUEsTUFDSSxRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsUUFDRixFQUFFLEtBQUssVUFBSyxHQUFHLEtBQUssT0FBTyxVQUFVLE9BQU8sTUFBTTtBQUFBLFFBQ2xELEdBQUcsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLFdBQVc7QUFBQSxVQUNwQyxLQUFLLElBQUk7QUFBQSxVQUNULE9BQU8sT0FBTyxRQUFRLENBQUM7QUFBQSxVQUN2QixPQUFPO0FBQUEsUUFDWCxFQUFFO0FBQUEsUUFDRixFQUFFLEtBQUssWUFBTyxHQUFHLEtBQUssT0FBTyxVQUFVLE9BQU8sTUFBTTtBQUFBLE1BQ3hEO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxNQUNJLFFBQVE7QUFBQSxNQUNSLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFHLEdBQUcsT0FBTyxlQUFlLE9BQU8sTUFBTSxDQUFDO0FBQUEsSUFDckU7QUFBQSxFQUNKO0FBQ0EsU0FDSSxnQkFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLE9BQU07QUFBQSxNQUNOLFNBQVMsTUFBTTtBQUFBLE1BRWYsMEJBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixTQUFTLENBQUMsVUFBVSxNQUFNLGdCQUFnQjtBQUFBLFVBRTFDO0FBQUEsNEJBQUFBLEdBQUMsWUFBTyxPQUFNLG1FQUNWO0FBQUEsOEJBQUFBLEdBQUMsVUFBSyxPQUFNLDBFQUF5RSw4Q0FFckY7QUFBQSxjQUNBLGdCQUFBQSxHQUFDLFVBQUssT0FBTSxVQUFTO0FBQUEsY0FDckIsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLG9GQUFtRix5REFFL0Y7QUFBQSxjQUNBLGdCQUFBQTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDRyxNQUFLO0FBQUEsa0JBQ0wsT0FBTTtBQUFBLGtCQUNOLFNBQVMsTUFBTTtBQUFBLGtCQUNsQjtBQUFBO0FBQUEsY0FFRDtBQUFBLGVBQ0o7QUFBQSxZQUNBLGdCQUFBQSxHQUFDLFNBQUksT0FBTSx1QkFDUCwwQkFBQUEsR0FBQyxTQUFJLE9BQU0scUNBQ04sZUFBSyxJQUFJLENBQUMsS0FBSyxhQUNaLGdCQUFBQTtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUVHLE9BQU07QUFBQSxnQkFDTixPQUFPLEVBQUUsWUFBWSxHQUFHLElBQUksTUFBTSxLQUFLO0FBQUEsZ0JBRXRDLGNBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxhQUNoQixnQkFBQUE7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBRUcsS0FBSyxJQUFJO0FBQUEsb0JBQ1QsT0FBTyxJQUFJO0FBQUEsb0JBQ1gsR0FBRyxJQUFJO0FBQUEsb0JBQ1AsT0FBTyxJQUFJO0FBQUEsb0JBQ1gsS0FBSyxJQUFJO0FBQUE7QUFBQSxrQkFMSjtBQUFBLGdCQU1ULENBQ0g7QUFBQTtBQUFBLGNBYkk7QUFBQSxZQWNULENBQ0gsR0FDTCxHQUNKO0FBQUEsWUFDQSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0sK0RBQ1A7QUFBQSw4QkFBQUE7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0csT0FBTTtBQUFBLGtCQUNOLE9BQU87QUFBQSxvQkFDSDtBQUFBLHNCQUNJO0FBQUEsc0JBQ0E7QUFBQSxvQkFDSjtBQUFBLG9CQUNBO0FBQUEsc0JBQ0k7QUFBQSxzQkFDQTtBQUFBLG9CQUNKO0FBQUEsb0JBQ0EsQ0FBQyxhQUFhLHdDQUFtQztBQUFBLG9CQUNqRCxDQUFDLGNBQWMsdUJBQXVCO0FBQUEsb0JBQ3RDO0FBQUEsc0JBQ0k7QUFBQSxzQkFDQTtBQUFBLG9CQUNKO0FBQUEsb0JBQ0E7QUFBQSxzQkFDSTtBQUFBLHNCQUNBO0FBQUEsb0JBQ0o7QUFBQSxvQkFDQSxDQUFDLFNBQVMseUNBQXNDO0FBQUEsa0JBQ3BEO0FBQUE7QUFBQSxjQUNKO0FBQUEsY0FDQSxnQkFBQUE7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0csT0FBTTtBQUFBLGtCQUNOLE9BQU87QUFBQSxvQkFDSCxDQUFDLGNBQWMsMEJBQXFCO0FBQUEsb0JBQ3BDO0FBQUEsc0JBQ0k7QUFBQSxzQkFDQTtBQUFBLG9CQUNKO0FBQUEsb0JBQ0E7QUFBQSxzQkFDSTtBQUFBLHNCQUNBO0FBQUEsb0JBQ0o7QUFBQSxvQkFDQTtBQUFBLHNCQUNJO0FBQUEsc0JBQ0E7QUFBQSxvQkFDSjtBQUFBLG9CQUNBLENBQUMsT0FBTyx1Q0FBb0M7QUFBQSxvQkFDNUMsQ0FBQyxVQUFVLHVEQUFnQztBQUFBLG9CQUMzQyxDQUFDLGFBQWEscUNBQXFDO0FBQUEsa0JBQ3ZEO0FBQUE7QUFBQSxjQUNKO0FBQUEsY0FDQSxnQkFBQUE7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0csT0FBTTtBQUFBLGtCQUNOLE9BQU87QUFBQSxvQkFDSCxDQUFDLE9BQU8sc0JBQXNCO0FBQUEsb0JBQzlCLENBQUMsU0FBUyxhQUFhO0FBQUEsb0JBQ3ZCLENBQUMsT0FBTyxvQkFBb0I7QUFBQSxvQkFDNUIsQ0FBQywyQkFBWSxzQkFBc0I7QUFBQSxvQkFDbkM7QUFBQSxzQkFDSTtBQUFBLHNCQUNBO0FBQUEsb0JBQ0o7QUFBQSxrQkFDSjtBQUFBO0FBQUEsY0FDSjtBQUFBLGVBQ0o7QUFBQTtBQUFBO0FBQUEsTUFDSjtBQUFBO0FBQUEsRUFDSjtBQUVSO0FBRUEsU0FBUyxlQUFlLE9BTXJCO0FBQ0MsU0FDSSxnQkFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLE1BQUs7QUFBQSxNQUNMLE1BQUs7QUFBQSxNQUNMLGdCQUFjLE1BQU07QUFBQSxNQUNwQixVQUFVLE1BQU07QUFBQSxNQUNoQixTQUFTLE1BQU0sTUFBTSxTQUFTLENBQUMsTUFBTSxPQUFPO0FBQUEsTUFDNUMsT0FBTTtBQUFBLE1BRU47QUFBQSx3QkFBQUEsR0FBQyxVQUFLLE9BQU0sa0JBQ1I7QUFBQSwwQkFBQUEsR0FBQyxVQUFLLE9BQU0sbURBQ1AsZ0JBQU0sT0FDWDtBQUFBLFVBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLHdFQUNQLGdCQUFNLE1BQ1g7QUFBQSxXQUNKO0FBQUEsUUFDQSxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNHLE9BQU8sNEZBQ0gsTUFBTSxVQUNBLDZDQUNBLHVDQUNWO0FBQUEsWUFDQSxlQUFZO0FBQUEsWUFFWiwwQkFBQUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDRyxPQUFPLDBDQUNILE1BQU0sVUFDQSx3Q0FDQSxnQ0FDVjtBQUFBO0FBQUEsWUFDSjtBQUFBO0FBQUEsUUFDSjtBQUFBO0FBQUE7QUFBQSxFQUNKO0FBRVI7QUFFQSxTQUFTLGNBQWMsT0FLcEI7QUFDQyxTQUNJLGdCQUFBQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0csT0FBTTtBQUFBLE1BQ04sU0FBUyxNQUFNO0FBQUEsTUFFZiwwQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLFNBQVMsQ0FBQyxVQUFVLE1BQU0sZ0JBQWdCO0FBQUEsVUFFMUM7QUFBQSw0QkFBQUEsR0FBQyxZQUFPLE9BQU0sbUVBQ1Y7QUFBQSw4QkFBQUEsR0FBQyxVQUFLLE9BQU0sMEVBQXlFLHNCQUVyRjtBQUFBLGNBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLFVBQVM7QUFBQSxjQUNyQixnQkFBQUE7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0csTUFBSztBQUFBLGtCQUNMLE9BQU07QUFBQSxrQkFDTixTQUFTLE1BQU07QUFBQSxrQkFDbEI7QUFBQTtBQUFBLGNBRUQ7QUFBQSxlQUNKO0FBQUEsWUFDQSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0saUJBQ1A7QUFBQSw4QkFBQUEsR0FBQyxPQUFFLE9BQU0sdUVBQXNFLHVCQUUvRTtBQUFBLGNBQ0EsZ0JBQUFBO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUNHLE9BQU07QUFBQSxrQkFDTixNQUFLO0FBQUEsa0JBQ0wsU0FBUyxNQUFNLFNBQVM7QUFBQSxrQkFDeEIsVUFBVSxNQUFNO0FBQUEsa0JBQ2hCLFVBQVUsQ0FBQyxZQUNQLE1BQU0sU0FBUyxFQUFFLGdCQUFnQixRQUFRLENBQUM7QUFBQTtBQUFBLGNBRWxEO0FBQUEsZUFDSjtBQUFBO0FBQUE7QUFBQSxNQUNKO0FBQUE7QUFBQSxFQUNKO0FBRVI7QUFJTyxTQUFTLE1BQU07QUFDbEIsUUFBTU8sUUFBTyxRQUFRO0FBQ3JCLFFBQU0sY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDSjtBQUNBLFFBQU0sb0JBQW9CLFlBR3hCLFdBQVc7QUFDYixRQUFNLHNCQUFzQixZQUE0QixhQUFhO0FBQ3JFLFFBQU0sbUJBQW1CLFlBR3ZCLFVBQVU7QUFFWixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlDLEdBQWdCLFVBQVU7QUFDcEQsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxHQUF3QixJQUFJO0FBQ2hFLFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUEsR0FBb0MsQ0FBQyxDQUFDO0FBQ3hFLFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUEsR0FBNkIsU0FBUztBQUN4RSxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlBLEdBQVMsS0FBSztBQUM5QyxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUlBLEdBQVMsS0FBSztBQUMxQyxRQUFNLENBQUMsV0FBVyxZQUFZLElBQUlBLEdBQVMsS0FBSztBQUNoRCxRQUFNLENBQUMsV0FBVyxZQUFZLElBQUlBLEdBQVMsS0FBSztBQUNoRCxRQUFNLENBQUMsa0JBQWtCLG1CQUFtQixJQUFJQSxHQUFTLEtBQUs7QUFDOUQsUUFBTSxDQUFDLFdBQVcsWUFBWSxJQUFJQSxHQUE2QixNQUFNO0FBQ3JFLFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUEsR0FBUyxLQUFLO0FBQ2xELFFBQU0sQ0FBQyxhQUFhLGNBQWMsSUFBSUEsR0FBUyxLQUFLO0FBQ3BELFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUEsR0FBUyxLQUFLO0FBQ2xELFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsR0FBUyxLQUFLO0FBQzlDLFFBQU0sQ0FBQyxjQUFjLGVBQWUsSUFBSUEsR0FBUyxLQUFLO0FBQ3RELFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsR0FBc0IsTUFBTSxhQUFhLENBQUM7QUFDMUUsUUFBTSxDQUFDLGVBQWUsZ0JBQWdCLElBQUlBLEdBQWlCLEVBQUU7QUFDN0QsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJQSxHQUFTLEVBQUU7QUFDckMsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJQSxHQUFTLEtBQUs7QUFDOUMsUUFBTSxDQUFDLGFBQWEsY0FBYyxJQUFJQSxHQUFTLEVBQUU7QUFFakQsUUFBTSxXQUFXQyxHQUF1QixJQUFJO0FBQzVDLFFBQU0sWUFBWUEsR0FBMEIsSUFBSTtBQUNoRCxRQUFNLFVBQVVBLEdBQXlCLElBQUk7QUFDN0MsUUFBTSxZQUFZQSxHQUE0QixJQUFJO0FBQ2xELFFBQU0sV0FBV0EsR0FBTyxLQUFLO0FBQzdCLFFBQU0sZUFBZUEsR0FBTyxTQUFTO0FBQ3JDLFFBQU0sZUFBZUEsR0FBTyxTQUFTO0FBQ3JDLFFBQU0sWUFBWUEsR0FBTyxNQUFNO0FBQy9CLFFBQU0sVUFBVUEsR0FBTyxLQUFLLE9BQU8sSUFBSSxFQUFFO0FBQ3pDLFFBQU0sZ0JBQWdCQSxHQUFPLENBQUM7QUFDOUIsUUFBTSxjQUFjQSxHQUE0QixJQUFJO0FBQ3BELFFBQU0sa0JBQWtCQSxHQUE0QixJQUFJO0FBQ3hELFFBQU0sZUFBZUEsR0FBMkIsSUFBSTtBQUNwRCxRQUFNLGNBQWNBLEdBQU8sSUFBSSxXQUFXLEdBQUcsQ0FBQztBQUM5QyxRQUFNLGNBQWNBLEdBQTZCLElBQUk7QUFDckQsUUFBTSxZQUFZQSxHQUFlLENBQUMsQ0FBQztBQUNuQyxRQUFNLGdCQUFnQkEsR0FBTyxDQUFDO0FBQzlCLFFBQU0saUJBQWlCQSxHQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUN2RCxRQUFNLGFBQWFBLEdBQXFCO0FBQUEsSUFDcEMsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1osQ0FBQztBQUNELFFBQU0sVUFBVUEsR0FNTixJQUFJO0FBQ2QsUUFBTSxlQUFlQSxHQUFPLEVBQUUsT0FBTyxHQUFHLFFBQVEsRUFBRSxDQUFDO0FBQ25ELFFBQU0sYUFBYUEsR0FBTyxHQUFHO0FBQzdCLFFBQU0sZUFBZUEsR0FBTyxTQUFTO0FBQ3JDLFFBQU0sZ0JBQWdCQTtBQUFBLElBQ2xCO0FBQUEsRUFDSjtBQUNBLFFBQU0sYUFBYUEsR0FBTyxDQUFDO0FBQzNCLFFBQU0sZUFBZUEsR0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUMxQyxRQUFNLG1CQUFtQkEsR0FBTyxvQkFBSSxJQUEwQixDQUFDO0FBQy9ELFFBQU0sY0FBY0EsR0FBTyxLQUFLO0FBQ2hDLFFBQU0sa0JBQWtCQSxHQUFPLEtBQUs7QUFDcEMsUUFBTSxjQUFjQSxHQUFPLFFBQVE7QUFDbkMsUUFBTSxrQkFBa0JBLEdBQU8sS0FBSztBQUNwQyxRQUFNLFVBQVVBLEdBQWtCO0FBQUEsSUFDOUIsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLEVBQ1gsQ0FBQztBQUNELFFBQU0sYUFBYUEsR0FBMkM7QUFBQSxJQUMxRCxPQUFPLENBQUM7QUFBQSxJQUNSLE9BQU87QUFBQSxFQUNYLENBQUM7QUFDRCxRQUFNLGlCQUFpQkEsR0FBTyxLQUFLO0FBQ25DLFFBQU0saUJBQWlCQSxHQVFiLElBQUk7QUFDZCxRQUFNLGVBQWVBLEdBQU8sQ0FBQztBQUU3QixXQUFTLFVBQVU7QUFDbkIsZUFBYSxVQUFVO0FBQ3ZCLGVBQWEsVUFBVTtBQUN2QixZQUFVLFVBQVU7QUFDcEIsZUFBYSxVQUFVO0FBQ3ZCLGNBQVksVUFBVTtBQUN0QixrQkFBZ0IsVUFBVTtBQUMxQixjQUFZLFVBQVU7QUFFdEIsUUFBTSxXQUNGLE1BQU0sT0FBTyxLQUFLLENBQUMsVUFBVSxNQUFNLE9BQU8sVUFBVSxLQUFLO0FBQzdELFFBQU0sWUFBWSxhQUFhLFNBQVMsQ0FBQztBQUV6QyxXQUFTLFVBQVUsU0FBaUI7QUFDaEMsYUFBUyxPQUFPO0FBQ2hCLFdBQU8sYUFBYSxjQUFjLE9BQU87QUFDekMsa0JBQWMsVUFBVSxPQUFPLFdBQVcsTUFBTSxTQUFTLEVBQUUsR0FBRyxJQUFJO0FBQUEsRUFDdEU7QUFJQSxXQUFTLGFBQWEsT0FBMEI7QUFDNUMsYUFBUyxDQUFDLGNBQWM7QUFBQSxNQUNwQixHQUFHO0FBQUEsTUFDSCxRQUFRLEVBQUUsR0FBRyxTQUFTLFFBQVEsR0FBRyxNQUFNO0FBQUEsSUFDM0MsRUFBRTtBQUFBLEVBQ047QUFFQSxXQUFTLGNBQWMsU0FBaUIsT0FBeUI7QUFDN0QsYUFBUyxDQUFDLGNBQWM7QUFBQSxNQUNwQixHQUFHO0FBQUEsTUFDSCxRQUFRLFNBQVMsT0FBTztBQUFBLFFBQUksQ0FBQyxVQUN6QixNQUFNLE9BQU8sVUFDUCxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsSUFDMUM7QUFBQSxNQUNWO0FBQUEsSUFDSixFQUFFO0FBQUEsRUFDTjtBQUVBLFdBQVMsZUFBZSxTQUFpQixJQUFhO0FBQ2xELGFBQVMsQ0FBQyxjQUFjO0FBQUEsTUFDcEIsR0FBRztBQUFBLE1BQ0gsUUFBUSxTQUFTLE9BQU87QUFBQSxRQUFJLENBQUMsVUFDekIsTUFBTSxPQUFPLFVBQVUsRUFBRSxHQUFHLE9BQU8sR0FBRyxJQUFJO0FBQUEsTUFDOUM7QUFBQSxJQUNKLEVBQUU7QUFBQSxFQUNOO0FBRUEsV0FBUyxVQUFVLFNBQWlCLE9BQWU7QUFDL0MsYUFBUyxDQUFDLGFBQWE7QUFDbkIsWUFBTSxRQUFRLFNBQVMsT0FBTztBQUFBLFFBQzFCLENBQUNDLFdBQVVBLE9BQU0sT0FBTztBQUFBLE1BQzVCO0FBQ0EsWUFBTSxPQUFPLFFBQVE7QUFDckIsVUFBSSxRQUFRLEtBQUssT0FBTyxLQUFLLFFBQVEsU0FBUyxPQUFPO0FBQ2pELGVBQU87QUFDWCxZQUFNLFNBQVMsU0FBUyxPQUFPLE1BQU07QUFDckMsWUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLE9BQU8sT0FBTyxDQUFDO0FBQ3RDLGFBQU8sT0FBTyxNQUFNLEdBQUcsS0FBSztBQUM1QixhQUFPLEVBQUUsR0FBRyxVQUFVLE9BQU87QUFBQSxJQUNqQyxDQUFDO0FBQUEsRUFDTDtBQUVBLFdBQVMsZUFBZSxTQUFpQjtBQUNyQyxhQUFTLENBQUMsYUFBYTtBQUNuQixVQUFJLFNBQVMsT0FBTyxVQUFVLFdBQVksUUFBTztBQUNqRCxZQUFNLFFBQVEsU0FBUyxPQUFPO0FBQUEsUUFDMUIsQ0FBQyxVQUFVLE1BQU0sT0FBTztBQUFBLE1BQzVCO0FBQ0EsVUFBSSxRQUFRLEVBQUcsUUFBTztBQUN0QixZQUFNLFNBQVMsU0FBUyxPQUFPLEtBQUs7QUFDcEMsWUFBTSxPQUFtQjtBQUFBLFFBQ3JCLElBQUksTUFBTSxPQUFPO0FBQUEsUUFDakIsU0FBUyxPQUFPO0FBQUEsUUFDaEIsTUFBTSxHQUFHLE9BQU8sSUFBSTtBQUFBLFFBQ3BCLFdBQVcsT0FBTztBQUFBLFFBQ2xCLElBQUk7QUFBQSxVQUNBLEdBQUcsT0FBTztBQUFBLFVBQ1YsR0FBRyxPQUFPLEdBQUcsSUFBSTtBQUFBLFVBQ2pCLEdBQUcsT0FBTyxHQUFHLElBQUk7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFDQSxZQUFNLFNBQVMsU0FBUyxPQUFPLE1BQU07QUFDckMsYUFBTyxPQUFPLFFBQVEsR0FBRyxHQUFHLElBQUk7QUFDaEMsb0JBQWMsS0FBSyxFQUFFO0FBQ3JCLGFBQU8sRUFBRSxHQUFHLFVBQVUsT0FBTztBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNMO0FBRUEsV0FBUyxZQUFZLFNBQWlCO0FBQ2xDLGFBQVMsQ0FBQyxhQUFhO0FBQ25CLFlBQU0sVUFBVSxTQUFTLE9BQU87QUFBQSxRQUM1QixDQUFDLFVBQVUsTUFBTSxPQUFPO0FBQUEsTUFDNUI7QUFDQSxZQUFNLFNBQVMsU0FBUyxPQUFPO0FBQUEsUUFDM0IsQ0FBQyxVQUFVLE1BQU0sT0FBTztBQUFBLE1BQzVCO0FBQ0EsVUFDSSxXQUNBLENBQUMsT0FBTyxLQUFLLENBQUMsVUFBVSxNQUFNLFlBQVksUUFBUSxPQUFPLEdBQzNEO0FBRUUsNEJBQW9CLFFBQVEsT0FBTztBQUNuQyxrQkFBVSxTQUFTLFlBQVksUUFBUSxPQUFPO0FBQzlDLHFCQUFhLENBQUMsU0FBUztBQUNuQixnQkFBTSxPQUFPLEVBQUUsR0FBRyxLQUFLO0FBQ3ZCLGlCQUFPLEtBQUssUUFBUSxPQUFPO0FBQzNCLGlCQUFPO0FBQUEsUUFDWCxDQUFDO0FBQUEsTUFDTDtBQUNBLGFBQU8sRUFBRSxHQUFHLFVBQVUsT0FBTztBQUFBLElBQ2pDLENBQUM7QUFDRCxrQkFBYyxDQUFDLFlBQWEsWUFBWSxVQUFVLE9BQU8sT0FBUTtBQUFBLEVBQ3JFO0FBSUEsV0FBUyxxQkFBcUIsVUFBa0I7QUFDNUMsbUJBQWUsVUFBVTtBQUN6QixVQUFNLFdBQVcsWUFBWSxRQUFRO0FBQ3JDLGFBQVMsUUFBUTtBQUNqQixhQUFTLFVBQVU7QUFDbkI7QUFBQSxNQUFjLENBQUMsWUFDWCxTQUFTLE9BQU8sS0FBSyxDQUFDLFVBQVUsTUFBTSxPQUFPLE9BQU8sSUFDOUMsVUFDQTtBQUFBLElBQ1Y7QUFDQSxjQUFVLFNBQVMsY0FBYztBQUNqQyxTQUFLLG1CQUFtQixRQUFRO0FBQUEsRUFDcEM7QUFFQSxXQUFTLFlBQVk7QUFDakIsVUFBTSxVQUFVLFdBQVc7QUFDM0IsVUFBTSxVQUFVLFlBQVksU0FBUyxPQUFPO0FBQzVDLFFBQUksUUFBUSxTQUFTLEtBQUssUUFBUSxNQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFHaEUsY0FBUSxRQUFRLFFBQVEsTUFBTSxNQUFNLEdBQUcsUUFBUSxRQUFRLENBQUM7QUFDeEQsY0FBUSxNQUFNLEtBQUssT0FBTztBQUMxQixjQUFRO0FBQUEsSUFDWjtBQUNBLFFBQUksUUFBUSxTQUFTLEdBQUc7QUFDcEIsZ0JBQVUsaUJBQWlCO0FBQzNCO0FBQUEsSUFDSjtBQUNBLFlBQVE7QUFDUix5QkFBcUIsUUFBUSxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQ2pELGNBQVUsTUFBTTtBQUFBLEVBQ3BCO0FBRUEsV0FBUyxZQUFZO0FBQ2pCLFVBQU0sVUFBVSxXQUFXO0FBQzNCLFFBQUksUUFBUSxTQUFTLFFBQVEsTUFBTSxTQUFTLEdBQUc7QUFDM0MsZ0JBQVUsaUJBQWlCO0FBQzNCO0FBQUEsSUFDSjtBQUNBLFlBQVE7QUFDUix5QkFBcUIsUUFBUSxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQ2pELGNBQVUsTUFBTTtBQUFBLEVBQ3BCO0FBSUEsV0FBUyxvQkFBb0IsU0FBaUI7QUFDMUMsVUFBTSxVQUFVLGlCQUFpQixRQUFRLElBQUksT0FBTztBQUNwRCxRQUFJLENBQUMsUUFBUztBQUNkLFlBQVEsT0FBTyxNQUFNO0FBQ3JCLFlBQVEsT0FBTyxNQUFNO0FBQ3JCLFFBQUksUUFBUSxPQUFPO0FBQ2YsY0FBUSxNQUFNLGdCQUFnQixLQUFLO0FBQ25DLGNBQVEsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFDQSxRQUFJLFFBQVEsT0FBTztBQUNmLGNBQVEsTUFBTSxnQkFBZ0IsS0FBSztBQUNuQyxjQUFRLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQ0EsUUFBSTtBQUNBLGNBQVEsWUFBWSxXQUFXO0FBQUEsSUFDbkMsUUFBUTtBQUFBLElBRVI7QUFDQSxRQUFJO0FBQ0EsY0FBUSxVQUFVLFdBQVc7QUFBQSxJQUNqQyxRQUFRO0FBQUEsSUFFUjtBQUNBLFFBQUksUUFBUSxVQUFXLEtBQUksZ0JBQWdCLFFBQVEsU0FBUztBQUM1RCxxQkFBaUIsUUFBUSxPQUFPLE9BQU87QUFBQSxFQUMzQztBQUVBLFdBQVMsMEJBQTBCO0FBQy9CLGVBQVcsV0FBVyxDQUFDLEdBQUcsaUJBQWlCLFFBQVEsS0FBSyxDQUFDLEdBQUc7QUFDeEQsMEJBQW9CLE9BQU87QUFBQSxJQUMvQjtBQUFBLEVBQ0o7QUFFQSxpQkFBZSwwQkFBaUQ7QUFDNUQsUUFBSSxDQUFDLGdCQUFnQixTQUFTO0FBQzFCLHNCQUFnQixVQUFVLElBQUksYUFBYTtBQUFBLElBQy9DO0FBQ0EsUUFBSSxnQkFBZ0IsUUFBUSxVQUFVLGFBQWE7QUFDL0MsWUFBTSxnQkFBZ0IsUUFBUSxPQUFPO0FBQUEsSUFDekM7QUFDQSxXQUFPLGdCQUFnQjtBQUFBLEVBQzNCO0FBRUEsaUJBQWUsY0FDWCxTQUNBLE1BQ0EsTUFDQSxXQUNrQjtBQUNsQix3QkFBb0IsT0FBTztBQUMzQixVQUFNLFNBQVMsVUFBVTtBQUV6QixRQUFJLFNBQVMsU0FBUztBQUNsQixZQUFNLFVBQVUsTUFBTSxnQkFBZ0IsSUFBSTtBQUMxQyxjQUFRLFNBQVMsU0FBUyxRQUFRLE1BQU07QUFDeEMsdUJBQWlCLFFBQVEsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQzlDLGFBQU87QUFBQSxRQUNILE9BQU8sUUFBUTtBQUFBLFFBQ2YsUUFBUSxRQUFRO0FBQUEsUUFDaEIsT0FBTyxRQUFRO0FBQUEsUUFDZixTQUFTO0FBQUEsUUFDVDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBRUEsUUFBSSxTQUFTLFFBQVE7QUFDakIsWUFBTUMsVUFBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxZQUFNLFNBQVMsTUFBTSxLQUFLLE1BQU0sR0FBRyxPQUFPLElBQUksRUFBRSxZQUFZO0FBQzVELHFCQUFlQSxTQUFRLElBQUksV0FBVyxNQUFNLENBQUM7QUFDN0MsY0FBUSxTQUFTLFNBQVNBLE9BQU07QUFDaEMsdUJBQWlCLFFBQVEsSUFBSSxTQUFTLEVBQUUsTUFBTSxRQUFBQSxRQUFPLENBQUM7QUFDdEQsYUFBTztBQUFBLFFBQ0gsT0FBT0EsUUFBTztBQUFBLFFBQ2QsUUFBUUEsUUFBTztBQUFBLFFBQ2YsT0FBTyxZQUFZQSxTQUFRQSxRQUFPLE9BQU9BLFFBQU8sTUFBTTtBQUFBLFFBQ3RELFNBQVM7QUFBQSxRQUNUO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxRQUFJLFNBQVMsU0FBUztBQUNsQixZQUFNQyxhQUFZLElBQUksZ0JBQWdCLElBQUk7QUFDMUMsWUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFlBQU0sY0FBYztBQUNwQixZQUFNLFFBQVE7QUFDZCxZQUFNLE9BQU87QUFDYixZQUFNLFVBQVU7QUFDaEIsWUFBTSxhQUFhLGVBQWUsRUFBRTtBQUNwQyxZQUFNLGFBQWEsc0JBQXNCLEVBQUU7QUFDM0MsWUFBTSxNQUFNQTtBQUVaLFlBQU0sSUFBSSxRQUFjLENBQUMsU0FBUyxXQUFXO0FBQ3pDLGNBQU0sVUFBVSxNQUFNO0FBQ2xCLGtCQUFRO0FBQ1Isa0JBQVE7QUFBQSxRQUNaO0FBQ0EsY0FBTSxVQUFVLE1BQU07QUFDbEIsa0JBQVE7QUFDUixpQkFBTyxJQUFJLE1BQU0sNkJBQTZCLENBQUM7QUFBQSxRQUNuRDtBQUNBLGNBQU0sVUFBVSxNQUFNO0FBQ2xCLGdCQUFNLG9CQUFvQixjQUFjLE9BQU87QUFDL0MsZ0JBQU0sb0JBQW9CLFNBQVMsT0FBTztBQUFBLFFBQzlDO0FBQ0EsY0FBTSxpQkFBaUIsY0FBYyxPQUFPO0FBQzVDLGNBQU0saUJBQWlCLFNBQVMsT0FBTztBQUN2QyxjQUFNLEtBQUs7QUFBQSxNQUNmLENBQUM7QUFFRCxZQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsTUFBTSxVQUFVO0FBQzFDLFlBQU0sU0FBUyxLQUFLLElBQUksR0FBRyxNQUFNLFdBQVc7QUFDNUMsY0FBUSxTQUFTLFNBQVMsS0FBSztBQUMvQix1QkFBaUIsUUFBUSxJQUFJLFNBQVMsRUFBRSxNQUFNLFdBQUFBLFlBQVcsTUFBTSxDQUFDO0FBQ2hFLFdBQUssTUFBTSxLQUFLLEVBQUUsTUFBTSxNQUFNLE1BQVM7QUFFdkMsYUFBTztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQSxPQUFPLFlBQVksT0FBTyxPQUFPLE1BQU07QUFBQSxRQUN2QyxTQUFTO0FBQUEsUUFDVDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBR0EsVUFBTSxZQUFZLElBQUksZ0JBQWdCLElBQUk7QUFDMUMsVUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFVBQU0sT0FBTztBQUNiLFVBQU0sVUFBVTtBQUNoQixVQUFNLE1BQU07QUFFWixVQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7QUFDOUMseUJBQXFCLE1BQU07QUFDM0IscUJBQWlCLFFBQVEsSUFBSSxXQUFXLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFFckQsVUFBTSxVQUFVLE1BQU0sd0JBQXdCO0FBQzlDLFVBQU0sYUFBYSxRQUFRLHlCQUF5QixLQUFLO0FBQ3pELFVBQU0sV0FBVyxRQUFRLGVBQWU7QUFDeEMsYUFBUyxVQUFVO0FBQ25CLGFBQVMsd0JBQXdCO0FBQ2pDLGVBQVcsUUFBUSxRQUFRO0FBQzNCLGFBQVMsUUFBUSxRQUFRLFdBQVc7QUFFcEMsWUFBUSxTQUFTLFNBQVMsTUFBTTtBQUNoQyxxQkFBaUIsUUFBUSxJQUFJLFNBQVM7QUFBQSxNQUNsQztBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxVQUFVLElBQUksV0FBVyxTQUFTLGlCQUFpQjtBQUFBLElBQ3ZELENBQUM7QUFDRCxTQUFLLE1BQU0sS0FBSyxFQUFFLE1BQU0sTUFBTSxNQUFTO0FBRXZDLFdBQU87QUFBQSxNQUNILE9BQU8sT0FBTztBQUFBLE1BQ2QsUUFBUSxPQUFPO0FBQUEsTUFDZixPQUFPLFlBQVksUUFBUSxPQUFPLE9BQU8sT0FBTyxNQUFNO0FBQUEsTUFDdEQsU0FBUztBQUFBLE1BQ1Q7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUVBLGlCQUFlLFlBQVksT0FBdUI7QUFDOUMsVUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLO0FBQzdCLFFBQUksQ0FBQyxLQUFLLE9BQVE7QUFDbEIsUUFBSSxRQUFRO0FBQ1osUUFBSSxnQkFBZ0I7QUFDcEIsZUFBVyxRQUFRLE1BQU07QUFDckIsVUFBSSxTQUFTLFFBQVEsT0FBTyxTQUFTLFNBQVMsWUFBWTtBQUN0RCxrQkFBVSxrQkFBa0IsVUFBVSxFQUFFO0FBQ3hDO0FBQUEsTUFDSjtBQUNBLFlBQU0sT0FBTyxhQUFhLElBQUk7QUFDOUIsVUFBSTtBQUNBLGNBQU0sVUFBVSxNQUFNLEtBQUs7QUFDM0IsY0FBTSxhQUFhLFNBQVMsSUFBSSxFQUFFLE1BQU0sTUFBTSxNQUFTO0FBQ3ZELGNBQU0sT0FBTyxNQUFNLGNBQWMsU0FBUyxNQUFNLE1BQU0sS0FBSyxJQUFJO0FBQy9ELHFCQUFhLENBQUMsY0FBYyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFDN0QsY0FBTSxRQUFvQjtBQUFBLFVBQ3RCLElBQUksTUFBTSxPQUFPO0FBQUEsVUFDakI7QUFBQSxVQUNBLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxLQUFLLElBQUksR0FBRyxlQUFlLElBQUksQ0FBQztBQUFBLFVBQ3ZFLFdBQVc7QUFBQSxVQUNYLElBQUk7QUFBQSxZQUNBLEdBQUc7QUFBQSxZQUNILEdBQUcsUUFBUTtBQUFBLFlBQ1gsR0FBRyxRQUFRO0FBQUEsVUFDZjtBQUFBLFFBQ0o7QUFDQSxpQkFBUyxDQUFDLGNBQWM7QUFBQSxVQUNwQixHQUFHO0FBQUEsVUFDSCxRQUFRLENBQUMsR0FBRyxTQUFTLFFBQVEsS0FBSztBQUFBLFFBQ3RDLEVBQUU7QUFDRixzQkFBYyxNQUFNLEVBQUU7QUFDdEIsWUFBSSxTQUFTLFFBQVMsaUJBQWdCO0FBQ3RDO0FBQUEsTUFDSixRQUFRO0FBQ0osa0JBQVUsb0JBQW9CLGVBQWUsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQUEsTUFDdEU7QUFBQSxJQUNKO0FBQ0EsUUFBSSxpQkFBaUIsU0FBUyxRQUFRLE9BQU8sYUFBYSxNQUFNO0FBQzVELG1CQUFhLEVBQUUsWUFBWSxLQUFLLENBQUM7QUFBQSxJQUNyQztBQUFBLEVBQ0o7QUFFQSxpQkFBZSxtQkFBbUIsUUFBZTtBQUM3QyxVQUFNLFNBQVMsVUFBVTtBQUN6QixRQUFJLENBQUMsT0FBUTtBQUNiLFVBQU0sV0FBVyxvQkFBSSxJQUF1QjtBQUM1QyxVQUFNLFdBQVcsb0JBQUksSUFBb0I7QUFDekMsZUFBVyxTQUFTLE9BQU8sUUFBUTtBQUMvQixVQUFJLENBQUMsTUFBTSxRQUFTO0FBQ3BCLFVBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxPQUFPLEdBQUc7QUFDOUIsaUJBQVMsSUFBSSxNQUFNLFNBQVMsTUFBTSxhQUFhLE9BQU87QUFDdEQsaUJBQVMsSUFBSSxNQUFNLFNBQVMsTUFBTSxJQUFJO0FBQUEsTUFDMUM7QUFBQSxJQUNKO0FBRUEsZUFBVyxXQUFXLENBQUMsR0FBRyxpQkFBaUIsUUFBUSxLQUFLLENBQUMsR0FBRztBQUN4RCxVQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sR0FBRztBQUN4Qiw0QkFBb0IsT0FBTztBQUMzQixlQUFPLFlBQVksT0FBTztBQUFBLE1BQzlCO0FBQUEsSUFDSjtBQUVBLGVBQVcsQ0FBQyxTQUFTLElBQUksS0FBSyxVQUFVO0FBQ3BDLFVBQUksaUJBQWlCLFFBQVEsSUFBSSxPQUFPLEtBQUssT0FBTyxTQUFTLE9BQU8sR0FBRztBQUNuRTtBQUFBLE1BQ0o7QUFDQSxVQUFJO0FBQ0EsY0FBTSxPQUFPLE1BQU0sYUFBYSxPQUFPO0FBQ3ZDLFlBQUksQ0FBQyxLQUFNLE9BQU0sSUFBSSxNQUFNLFNBQVM7QUFDcEMsY0FBTSxXQUNGLFNBQVMsV0FDVCxTQUFTLFdBQ1QsU0FBUyxXQUNULFNBQVMsU0FDSCxPQUNBLGFBQWEsTUFBTSxTQUFTLElBQUksT0FBTyxLQUFLLEVBQUU7QUFDeEQsY0FBTSxPQUFPLE1BQU07QUFBQSxVQUNmO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLFNBQVMsSUFBSSxPQUFPLEtBQUs7QUFBQSxRQUM3QjtBQUNBLHFCQUFhLENBQUMsY0FBYyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFBQSxNQUNqRSxRQUFRO0FBQ0oscUJBQWEsQ0FBQyxjQUFjO0FBQUEsVUFDeEIsR0FBRztBQUFBLFVBQ0gsQ0FBQyxPQUFPLEdBQUc7QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLFNBQVM7QUFBQSxZQUNUO0FBQUEsVUFDSjtBQUFBLFFBQ0osRUFBRTtBQUFBLE1BQ047QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUVBLFdBQVMsc0JBQXNCLFFBQXNCLE1BQXNCO0FBQ3ZFLFFBQUksYUFBYTtBQUNqQixlQUFXLENBQUMsU0FBUyxPQUFPLEtBQUssaUJBQWlCLFNBQVM7QUFDdkQsVUFBSSxRQUFRLFNBQVMsV0FBVyxRQUFRLE9BQU87QUFDM0MsWUFBSSxRQUFRLE1BQU0sY0FBYyxpQkFBaUIsbUJBQW1CO0FBQ2hFLGlCQUFPLFNBQVMsU0FBUyxRQUFRLEtBQUs7QUFBQSxRQUMxQztBQUNBO0FBQUEsTUFDSjtBQUNBLFVBQUksUUFBUSxTQUFTLFdBQVcsUUFBUSxTQUFTLFFBQVEsVUFBVSxRQUFRLFVBQVU7QUFDakYsY0FBTSxXQUNGLFFBQVEsWUFDUixRQUFRLFNBQVMsV0FBVyxRQUFRLFNBQVMsb0JBQ3ZDLFFBQVEsV0FDUixJQUFJLFdBQVcsUUFBUSxTQUFTLGlCQUFpQjtBQUMzRCxnQkFBUSxXQUFXO0FBQ25CLGdCQUFRLFNBQVMscUJBQXFCLFFBQVE7QUFDOUMsY0FBTSxRQUFRLGtCQUFrQixRQUFRO0FBQ3hDLHFCQUFhLEtBQUssSUFBSSxZQUFZLEtBQUs7QUFDdkMseUJBQWlCLFFBQVEsUUFBUSxVQUFVLE9BQU8sSUFBSTtBQUN0RCxlQUFPLFNBQVMsU0FBUyxRQUFRLE1BQU07QUFBQSxNQUMzQztBQUFBLElBQ0o7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUlBLFdBQVMsYUFBeUI7QUFDOUIsVUFBTSxVQUFVLFNBQVM7QUFDekIsVUFBTSxPQUFPLGFBQWE7QUFDMUIsVUFBTSxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWE7QUFDdkMsVUFBTSxTQUFTLEtBQUssSUFBSSxNQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ3pELFVBQU0sT0FBTyxRQUFRO0FBQ3JCLFVBQU0sUUFBUSxjQUFjO0FBQzVCLFVBQU0sT0FBTyxRQUFRO0FBRXJCLFVBQU0sU0FBNkIsUUFBUSxPQUN0QyxPQUFPLENBQUMsVUFBVSxNQUFNLEdBQUcsT0FBTyxFQUNsQyxJQUFJLENBQUMsVUFBVTtBQUNaLFlBQU0sS0FBSyxNQUFNO0FBQ2pCLFlBQU0sT0FBTyxVQUFVLE1BQU0sRUFBRTtBQUMvQixZQUFNLE9BQU8sS0FBSyxNQUFNLE9BQU87QUFDL0IsWUFBTSxjQUNGLFFBQVEsS0FBSyxRQUFRLElBQ2YsS0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUNwQztBQUNWLFlBQU0sWUFBWSxLQUFLLElBQUksR0FBRyxTQUFTLFdBQVc7QUFDbEQsWUFBTSxRQUNGLElBQ0EsR0FBRyxTQUNFLE9BQU8sS0FBSyxJQUFJLE9BQU8sTUFBTSxPQUFPLEVBQUUsSUFDbkMsUUFBUSxRQUFRLE9BQU8sYUFBYTtBQUNoRCxZQUFNLFFBQVEsR0FBRyxRQUFRO0FBQ3pCLFlBQU0sU0FDRixLQUFLLElBQUksT0FBTyxPQUFPLE9BQU8sR0FBRyxJQUFJLEdBQUcsUUFBUTtBQUNwRCxZQUFNLFNBQ0YsS0FBSyxJQUFJLE9BQU8sT0FBTyxPQUFPLEdBQUcsSUFBSSxHQUFHLFFBQVE7QUFDcEQsYUFBTztBQUFBLFFBQ0gsSUFBSSxNQUFNO0FBQUEsUUFDVixTQUFTLE1BQU07QUFBQSxRQUNmLEtBQUssQ0FBQyxHQUFHLElBQUksUUFBUSxHQUFHLElBQUksTUFBTTtBQUFBLFFBQ2xDLEtBQUs7QUFBQSxVQUNELEtBQUssSUFBSSxNQUFPLFlBQVksY0FBYyxRQUFTLENBQUM7QUFBQSxVQUNwRCxLQUFLLElBQUksTUFBTyxZQUFZLFFBQVMsQ0FBQztBQUFBLFFBQzFDO0FBQUEsUUFDQSxLQUFNLEdBQUcsV0FBVyxLQUFLLEtBQU0sTUFBTSxHQUFHLE9BQU8sT0FBTztBQUFBLFFBQ3RELFNBQVMsR0FBRztBQUFBLFFBQ1osT0FBTyxXQUFXLEdBQUcsS0FBSztBQUFBLFFBQzFCLE1BQU0sS0FBSyxNQUFNLEdBQUcsSUFBSTtBQUFBLFFBQ3hCLE1BQU0sR0FBRztBQUFBLFFBQ1QsT0FBTyxHQUFHO0FBQUEsUUFDVixRQUFRLEdBQUc7QUFBQSxRQUNYLFNBQVMsR0FBRztBQUFBLFFBQ1osVUFBVSxHQUFHO0FBQUEsUUFDYixPQUFPLEdBQUc7QUFBQSxRQUNWLFFBQVEsR0FBRztBQUFBLFFBQ1gsS0FBSyxHQUFHO0FBQUEsUUFDUixZQUFZLEdBQUc7QUFBQSxRQUNmLFVBQVUsR0FBRztBQUFBLFFBQ2IsWUFBWSxHQUFHO0FBQUEsUUFDZixRQUFRLEdBQUc7QUFBQSxRQUNYLFdBQVcsR0FBRztBQUFBLFFBQ2QsUUFBUSxHQUFHO0FBQUEsUUFDWCxPQUFPLEdBQUc7QUFBQSxRQUNWLE1BQU0sU0FBUyxHQUFHLFNBQVM7QUFBQSxRQUMzQixZQUFZLEdBQUc7QUFBQSxRQUNmLFNBQVMsR0FBRztBQUFBLFFBQ1o7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBRUwsVUFBTUMsS0FBSSxRQUFRO0FBQ2xCLFdBQU87QUFBQSxNQUNIO0FBQUEsTUFDQTtBQUFBLE1BQ0EsU0FBUyxXQUFXO0FBQUEsTUFDcEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLFFBQVFBLEdBQUU7QUFBQSxRQUNWLEtBQUssU0FBU0EsR0FBRSxHQUFHO0FBQUEsUUFDbkIsS0FBSyxTQUFTQSxHQUFFLEdBQUc7QUFBQSxRQUNuQixVQUFVQSxHQUFFO0FBQUEsUUFDWixRQUFRQSxHQUFFO0FBQUEsUUFDVixRQUFRQSxHQUFFO0FBQUEsUUFDVixVQUFVQSxHQUFFO0FBQUEsUUFDWixPQUFPQSxHQUFFO0FBQUEsUUFDVCxNQUFNQSxHQUFFO0FBQUEsUUFDUixPQUFPLE1BQU1BLEdBQUUsUUFBUSxLQUFLLE9BQU8sR0FBRyxDQUFDO0FBQUEsUUFDdkMsUUFBUSxNQUFNQSxHQUFFLFNBQVMsS0FBSyxRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQzFDLE1BQU0sTUFBTUEsR0FBRSxPQUFPLEtBQUssTUFBTSxHQUFHLENBQUM7QUFBQSxRQUNwQyxTQUFTQSxHQUFFO0FBQUEsUUFDWCxRQUFRQSxHQUFFO0FBQUEsUUFDVixRQUFRLE1BQU1BLEdBQUUsU0FBUyxLQUFLLFFBQVEsR0FBRyxDQUFDO0FBQUEsUUFDMUMsVUFBVUEsR0FBRTtBQUFBLFFBQ1osWUFBWUEsR0FBRTtBQUFBLFFBQ2QsVUFBVUEsR0FBRTtBQUFBLFFBQ1osVUFBVUEsR0FBRTtBQUFBLFFBQ1osT0FBT0EsR0FBRTtBQUFBLFFBQ1QsV0FBV0EsR0FBRTtBQUFBLFFBQ2IsVUFBVUEsR0FBRTtBQUFBLFFBQ1osUUFBUSxNQUFNQSxHQUFFLFNBQVMsS0FBSyxRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQzFDLFlBQVlBLEdBQUU7QUFBQSxRQUNkLGNBQWNBLEdBQUU7QUFBQSxRQUNoQixhQUFhQSxHQUFFO0FBQUEsUUFDZixhQUFhQSxHQUFFO0FBQUEsTUFDbkI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUVBLEVBQUFDLEdBQVUsTUFBTTtBQUNaLFVBQU0sU0FBUyxVQUFVO0FBQ3pCLFVBQU0sUUFBUSxTQUFTO0FBQ3ZCLFFBQUksQ0FBQyxVQUFVLENBQUMsTUFBTztBQUV2QixRQUFJO0FBQ0osUUFBSTtBQUNBLGVBQVMsYUFBYSxNQUFNO0FBQUEsSUFDaEMsU0FBUyxPQUFPO0FBQ1o7QUFBQSxRQUNJLGlCQUFpQixRQUNYLE1BQU0sVUFDTjtBQUFBLE1BQ1Y7QUFDQTtBQUFBLElBQ0o7QUFDQSxjQUFVLFVBQVU7QUFFcEIsVUFBTSxTQUFTLE1BQU07QUFDakIsWUFBTSxPQUFPLE1BQU0sc0JBQXNCO0FBQ3pDLG1CQUFhLFVBQVUsRUFBRSxPQUFPLEtBQUssT0FBTyxRQUFRLEtBQUssT0FBTztBQUNoRSxZQUFNLE9BQU8sY0FBYztBQUMzQixVQUFJLE1BQU07QUFDTixlQUFPLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTTtBQUNyQyxlQUFPLGlCQUFpQixDQUFDO0FBQUEsTUFDN0IsT0FBTztBQUNILGVBQU8sT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNO0FBQUEsTUFDekM7QUFBQSxJQUNKO0FBQ0EsV0FBTztBQUNQLFVBQU0sV0FBVyxJQUFJLGVBQWUsTUFBTTtBQUMxQyxhQUFTLFFBQVEsS0FBSztBQUV0QixRQUFJLE1BQU07QUFDVixRQUFJLE9BQU8sWUFBWSxJQUFJO0FBQzNCLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsVUFBTSxPQUFPLENBQUMsUUFBZ0I7QUFDMUIsWUFBTSxLQUFLLEtBQUssSUFBSSxNQUFNLE1BQU0sUUFBUSxHQUFJO0FBQzVDLGFBQU87QUFFUCxZQUFNLFdBQVcsWUFBWTtBQUM3QixVQUFJLFNBQVM7QUFDYixVQUFJLFVBQVU7QUFDVixZQUFJLFlBQVksUUFBUSxXQUFXLFNBQVMsbUJBQW1CO0FBQzNELHNCQUFZLFVBQVUsSUFBSTtBQUFBLFlBQ3RCLFNBQVM7QUFBQSxVQUNiO0FBQUEsUUFDSjtBQUNBLGlCQUFTLHFCQUFxQixZQUFZLE9BQU87QUFDakQsY0FBTSxPQUFPLFlBQVk7QUFDekIsWUFBSSxPQUFPO0FBQ1gsWUFBSSxRQUFRO0FBQ1osaUJBQVNaLEtBQUksR0FBR0EsS0FBSSxLQUFLLFFBQVFBLE1BQUs7QUFDbEMsbUJBQVMsS0FBS0EsRUFBQztBQUNmLGNBQUlBLEtBQUksR0FBSSxTQUFRLEtBQUtBLEVBQUM7QUFBQSxRQUM5QjtBQUNBLGlCQUFTLEtBQUs7QUFBQSxVQUNWO0FBQUEsV0FDRSxPQUFPLEtBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxJQUFJO0FBQUEsUUFDbEQ7QUFBQSxNQUNKO0FBRUEsVUFBSSxDQUFDLFVBQVUsU0FBUztBQUNwQixnQkFBUSxXQUFXLEtBQUssU0FBUyxRQUFRLE9BQU87QUFBQSxNQUNwRDtBQUVBLFlBQU0sYUFBYSxzQkFBc0IsUUFBUSxRQUFRLE9BQU87QUFDaEUsZUFBUyxLQUFLLElBQUksUUFBUSxVQUFVO0FBQ3BDLG9CQUFjLFlBQVksU0FBUyxjQUFjLFdBQVc7QUFHNUQsWUFBTSxPQUFPLFFBQVE7QUFDckIsWUFBTSxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRztBQUNwQyxXQUFLLFFBQVE7QUFDYixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFDZixXQUFLLFNBQVM7QUFJZCxVQUFJLENBQUMsY0FBYyxTQUFTO0FBQ3hCLFlBQUksS0FBSyxPQUFPO0FBQ1o7QUFDQSx1QkFBYTtBQUFBLFFBQ2pCLFdBQVcsS0FBSyxPQUFPO0FBQ25CO0FBQ0EsdUJBQWE7QUFBQSxRQUNqQixPQUFPO0FBQ0gsdUJBQWE7QUFDYix1QkFBYTtBQUFBLFFBQ2pCO0FBQ0EsWUFBSSxhQUFhLE1BQU0sV0FBVyxVQUFVLEtBQUs7QUFDN0MscUJBQVcsVUFBVSxLQUFLO0FBQUEsWUFDdEI7QUFBQSxZQUNBLFdBQVcsVUFBVTtBQUFBLFVBQ3pCO0FBQ0EsaUJBQU8saUJBQWlCLFdBQVcsT0FBTztBQUMxQyx1QkFBYTtBQUFBLFFBQ2pCLFdBQVcsYUFBYSxPQUFPLFdBQVcsVUFBVSxLQUFLO0FBQ3JELHFCQUFXLFVBQVUsS0FBSztBQUFBLFlBQ3RCO0FBQUEsWUFDQSxXQUFXLFVBQVU7QUFBQSxVQUN6QjtBQUNBLGlCQUFPLGlCQUFpQixXQUFXLE9BQU87QUFDMUMsdUJBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFFQSxhQUFPLE9BQU8sV0FBVyxDQUFDO0FBQzFCLFlBQU0sc0JBQXNCLElBQUk7QUFBQSxJQUNwQztBQUNBLFVBQU0sc0JBQXNCLElBQUk7QUFHaEMsVUFBTSxRQUFRLGFBQWE7QUFDM0IsUUFBSSxPQUFPO0FBQ1AsZUFBUyxLQUFLO0FBQ2QsZUFBUyxVQUFVO0FBQ25CLFdBQUssbUJBQW1CLEtBQUs7QUFBQSxJQUNqQztBQUVBLFdBQU8sTUFBTTtBQUNULDJCQUFxQixHQUFHO0FBQ3hCLGVBQVMsV0FBVztBQUNwQiw4QkFBd0I7QUFDeEIsYUFBTyxRQUFRO0FBQ2YsZ0JBQVUsVUFBVTtBQUFBLElBQ3hCO0FBQUEsRUFFSixHQUFHLENBQUMsQ0FBQztBQUdMLEVBQUFZLEdBQVUsTUFBTTtBQUNaLFVBQU0sUUFBUSxPQUFPLFdBQVcsTUFBTSxhQUFhLEtBQUssR0FBRyxHQUFHO0FBQzlELFdBQU8sTUFBTSxPQUFPLGFBQWEsS0FBSztBQUFBLEVBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFHVixFQUFBQSxHQUFVLE1BQU07QUFDWixRQUFJLGVBQWUsU0FBUztBQUN4QixxQkFBZSxVQUFVO0FBQ3pCO0FBQUEsSUFDSjtBQUNBLFVBQU0sUUFBUSxPQUFPLFdBQVcsTUFBTTtBQUNsQyxZQUFNLFVBQVUsV0FBVztBQUMzQixZQUFNLFdBQVcsWUFBWSxLQUFLO0FBQ2xDLFVBQUksUUFBUSxNQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVU7QUFDL0MsY0FBUSxRQUFRLFFBQVEsTUFBTSxNQUFNLEdBQUcsUUFBUSxRQUFRLENBQUM7QUFDeEQsY0FBUSxNQUFNLEtBQUssUUFBUTtBQUMzQixVQUFJLFFBQVEsTUFBTSxTQUFTLEdBQUksU0FBUSxNQUFNLE1BQU07QUFDbkQsY0FBUSxRQUFRLFFBQVEsTUFBTSxTQUFTO0FBQUEsSUFDM0MsR0FBRyxHQUFHO0FBQ04sV0FBTyxNQUFNLE9BQU8sYUFBYSxLQUFLO0FBQUEsRUFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUVWLEVBQUFBLEdBQVUsTUFBTTtBQUNaLFdBQU8sTUFBTTtBQUNULGlCQUFXLFNBQVMsYUFBYSxTQUFTLFVBQVUsS0FBSyxDQUFDO0FBQ3RELGNBQU0sS0FBSztBQUNmLFVBQUksWUFBWSxTQUFTLFVBQVU7QUFDL0Isb0JBQVksUUFBUSxLQUFLO0FBQzdCLFdBQUssZ0JBQWdCLFNBQVMsTUFBTTtBQUFBLElBQ3hDO0FBQUEsRUFDSixHQUFHLENBQUMsQ0FBQztBQUVMLEVBQUFBLEdBQVUsTUFBTTtBQUNaLFVBQU0sT0FBTyxNQUNULGNBQWMsU0FBUyxzQkFBc0IsU0FBUyxPQUFPO0FBQ2pFLGFBQVMsaUJBQWlCLG9CQUFvQixJQUFJO0FBQ2xELFdBQU8sTUFBTSxTQUFTLG9CQUFvQixvQkFBb0IsSUFBSTtBQUFBLEVBQ3RFLEdBQUcsQ0FBQyxDQUFDO0FBRUwsRUFBQUEsR0FBVSxNQUFNO0FBQ1osYUFBUyxRQUFRO0FBQ2pCLFVBQU0sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTaEIsVUFBTSxPQUNELFNBQVM7QUFBQSxNQUNOO0FBQUEsSUFDSixLQUFnQyxTQUFTLGNBQWMsTUFBTTtBQUNqRSxTQUFLLE1BQU07QUFDWCxTQUFLLE9BQU87QUFDWixTQUFLLE9BQU8sc0JBQXNCLG1CQUFtQixPQUFPLENBQUM7QUFDN0QsUUFBSSxDQUFDLEtBQUssV0FBWSxVQUFTLEtBQUssWUFBWSxJQUFJO0FBQUEsRUFDeEQsR0FBRyxDQUFDLENBQUM7QUFJTCxFQUFBQSxHQUFVLE1BQU07QUFDWixVQUFNLFlBQVksQ0FBQyxVQUF5QjtBQUN4QyxZQUFNLFNBQVMsTUFBTTtBQUNyQixVQUNJLFdBQ0MsT0FBTyxZQUFZLFdBQ2hCLE9BQU8sWUFBWSxjQUNuQixPQUFPO0FBRVg7QUFFSixZQUFNLFVBQVUsTUFBTSxXQUFXLE1BQU07QUFDdkMsVUFBSSxTQUFTO0FBQ1QsY0FBTSxXQUFXLE1BQU0sSUFBSSxZQUFZO0FBQ3ZDLFlBQUksYUFBYSxLQUFLO0FBQ2xCLGdCQUFNLGVBQWU7QUFDckIsY0FBSSxNQUFNLFNBQVUsV0FBVTtBQUFBLGNBQ3pCLFdBQVU7QUFBQSxRQUNuQixXQUFXLGFBQWEsS0FBSztBQUN6QixnQkFBTSxlQUFlO0FBQ3JCLG9CQUFVO0FBQUEsUUFDZDtBQUNBO0FBQUEsTUFDSjtBQUVBLFVBQUksTUFBTSxRQUFRLE9BQU87QUFDckIsY0FBTSxlQUFlO0FBQ3JCLG9CQUFZLENBQUMsYUFBYSxDQUFDLFFBQVE7QUFDbkM7QUFBQSxNQUNKO0FBQ0EsVUFBSSxnQkFBZ0IsU0FBUztBQUN6QixZQUFJLE1BQU0sUUFBUSxVQUFVO0FBQ3hCLGdCQUFNLGVBQWU7QUFDckIsMEJBQWdCLEtBQUs7QUFBQSxRQUN6QjtBQUNBO0FBQUEsTUFDSjtBQUNBLFVBQUksWUFBWSxTQUFTO0FBQ3JCLFlBQUksTUFBTSxRQUFRLFlBQVksTUFBTSxRQUFRLEtBQUs7QUFDN0MsZ0JBQU0sZUFBZTtBQUNyQixzQkFBWSxLQUFLO0FBQUEsUUFDckI7QUFDQTtBQUFBLE1BQ0o7QUFDQSxVQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ25CLGNBQU0sZUFBZTtBQUNyQixvQkFBWSxJQUFJO0FBQ2hCO0FBQUEsTUFDSjtBQUNBLFVBQUksTUFBTSxRQUFRLEtBQUs7QUFDbkIsY0FBTSxlQUFlO0FBQ3JCLGtCQUFVLENBQUMsYUFBYSxDQUFDLFFBQVE7QUFDakM7QUFBQSxNQUNKO0FBRUEsVUFBSSxhQUFhLFlBQVksUUFBUTtBQUNqQyxzQkFBYyxLQUFLO0FBQ25CO0FBQUEsTUFDSjtBQUVBLFlBQU0sTUFBTSxNQUFNLElBQUksWUFBWTtBQUNsQyxVQUFJLFFBQVEsSUFBSyxjQUFhLFNBQVM7QUFDdkMsVUFBSSxRQUFRLElBQUssY0FBYSxNQUFNO0FBQ3BDLFdBQ0ssTUFBTSxRQUFRLFlBQVksTUFBTSxRQUFRLGdCQUN6QyxZQUNGO0FBQ0UsY0FBTSxlQUFlO0FBQ3JCLG9CQUFZLFVBQVU7QUFBQSxNQUMxQjtBQUNBLFVBQUksY0FBYyxNQUFNLElBQUksV0FBVyxPQUFPLEdBQUc7QUFDN0MsY0FBTSxlQUFlO0FBQ3JCLGNBQU0sT0FBTyxNQUFNLFdBQVcsT0FBTztBQUNyQyxjQUFNLFFBQVEsU0FBUyxRQUFRLE9BQU87QUFBQSxVQUNsQyxDQUFDQyxPQUFNQSxHQUFFLE9BQU87QUFBQSxRQUNwQjtBQUNBLFlBQUksQ0FBQyxNQUFPO0FBQ1osY0FBTSxLQUNGLE1BQU0sUUFBUSxjQUNSLENBQUMsT0FDRCxNQUFNLFFBQVEsZUFDWixPQUNBO0FBQ1osY0FBTSxLQUNGLE1BQU0sUUFBUSxjQUNSLENBQUMsT0FDRCxNQUFNLFFBQVEsWUFDWixPQUNBO0FBQ1osc0JBQWMsWUFBWTtBQUFBLFVBQ3RCLEdBQUcsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLFVBQy9CLEdBQUcsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLFFBQ25DLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUNBLFdBQU8saUJBQWlCLFdBQVcsU0FBUztBQUM1QyxXQUFPLE1BQU0sT0FBTyxvQkFBb0IsV0FBVyxTQUFTO0FBQUEsRUFDaEUsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUdmLEVBQUFELEdBQVUsTUFBTTtBQUNaLFVBQU0sVUFBVSxDQUFDLFVBQTBCO0FBQ3ZDLFlBQU0sUUFBZ0IsQ0FBQztBQUN2QixpQkFBVyxRQUFRLE1BQU0sZUFBZSxTQUFTLENBQUMsR0FBRztBQUNqRCxZQUFJLEtBQUssU0FBUyxPQUFRO0FBQzFCLGNBQU0sT0FBTyxLQUFLLFVBQVU7QUFDNUIsWUFBSSxLQUFNLE9BQU0sS0FBSyxJQUFJO0FBQUEsTUFDN0I7QUFDQSxVQUFJLE1BQU0sUUFBUTtBQUNkLGNBQU0sZUFBZTtBQUNyQixhQUFLLFlBQVksS0FBSztBQUFBLE1BQzFCO0FBQUEsSUFDSjtBQUNBLFdBQU8saUJBQWlCLFNBQVMsT0FBTztBQUN4QyxXQUFPLE1BQU0sT0FBTyxvQkFBb0IsU0FBUyxPQUFPO0FBQUEsRUFDNUQsR0FBRyxDQUFDLENBQUM7QUFJTCxXQUFTLFFBQVEsT0FBMkI7QUFDeEMsVUFBTSxPQUFPLFFBQVE7QUFDckIsZUFBVyxPQUFPLE9BQU8sS0FBSyxLQUFLLEdBQTBCO0FBQ3pELFdBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sR0FBRyxLQUFLLEVBQUU7QUFBQSxJQUMzRDtBQUFBLEVBQ0o7QUFFQSxXQUFTLFdBQVcsT0FBdUIsT0FBZTtBQUN0RCxhQUFTLENBQUMsYUFBYTtBQUNuQixZQUFNLFFBQVEsU0FBUyxPQUFPLEtBQUs7QUFDbkMsVUFBSSxPQUFPLFVBQVUsU0FBVSxRQUFPO0FBQ3RDLFlBQU0sTUFDRixVQUFVLGdCQUNWLFVBQVUsY0FDVixVQUFVLFVBQ0osSUFDQTtBQUNWLFlBQU0sTUFBTSxVQUFVLFlBQVksVUFBVSxhQUFhLEtBQUs7QUFDOUQsYUFBTztBQUFBLFFBQ0gsR0FBRztBQUFBLFFBQ0gsUUFBUTtBQUFBLFVBQ0osR0FBRyxTQUFTO0FBQUEsVUFDWixDQUFDLEtBQUssR0FBRyxNQUFNLFFBQVEsT0FBTyxLQUFLLEdBQUc7QUFBQSxRQUMxQztBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBRUEsV0FBUyxTQUFTLE9BQWUsaUJBQTBCO0FBQ3ZELFVBQU0sUUFBUSxXQUFXO0FBQ3pCLFVBQU0sV0FBVyxRQUFRLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDbkQsVUFBTSxTQUFTLEtBQUssTUFBTyxRQUFRLFFBQVMsR0FBRztBQUMvQyxRQUFJLG1CQUFtQixTQUFTLFFBQVEsT0FBTyxXQUFXLEdBQUc7QUFDekQsZUFBUyxDQUFDLGNBQWM7QUFBQSxRQUNwQixHQUFHO0FBQUEsUUFDSCxRQUFRO0FBQUEsVUFDSixHQUFHLFNBQVM7QUFBQSxVQUNaLEtBQUssU0FBUyxRQUFRLEtBQUssSUFBSTtBQUFBLFVBQy9CLEtBQUssVUFBVSxTQUFTLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFBQSxRQUNoRDtBQUFBLE1BQ0osRUFBRTtBQUFBLElBQ04sT0FBTztBQUNILFlBQU0sTUFBTSxRQUFRO0FBQ3BCLGVBQVMsQ0FBQyxjQUFjO0FBQUEsUUFDcEIsR0FBRztBQUFBLFFBQ0gsUUFBUSxTQUFTLE9BQU8sSUFBSSxDQUFDLFdBQVc7QUFBQSxVQUNwQyxHQUFHO0FBQUEsVUFDSCxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSTtBQUFBLFFBQzNCLEVBQUU7QUFBQSxNQUNOLEVBQUU7QUFBQSxJQUNOO0FBRUEsWUFBUTtBQUFBLE1BQ0osTUFBTSxRQUFRLElBQUk7QUFBQSxNQUNsQixRQUFRO0FBQUEsTUFDUixRQUFRLE9BQU8sT0FBTztBQUFBLE1BQ3RCLFFBQVEsTUFBTTtBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNMO0FBRUEsV0FBUyxZQUFZLE9BQWUsT0FBZ0I7QUFDaEQsVUFBTSxRQUFRLFNBQVMsUUFBUSxPQUFPLEtBQUs7QUFDM0MsUUFBSSxDQUFDLE1BQU87QUFDWjtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sUUFBUSxvQkFBb0IsTUFBTSxFQUFFLElBQUksY0FBYyxNQUFNLEVBQUU7QUFBQSxJQUNsRTtBQUNBLGtCQUFjLE1BQU0sRUFBRTtBQUN0QixZQUFRLEVBQUUsUUFBUSxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQUEsRUFDMUM7QUFFQSxXQUFTLFlBQVk7QUFDakIsYUFBUyxDQUFDLGNBQWM7QUFBQSxNQUNwQixHQUFHO0FBQUEsTUFDSCxRQUFRO0FBQUEsUUFDSixHQUFHO0FBQUEsUUFDSCxRQUFRLFNBQVMsT0FBTztBQUFBLFFBQ3hCLEtBQUssU0FBUyxPQUFPO0FBQUEsUUFDckIsS0FBSyxTQUFTLE9BQU87QUFBQSxRQUNyQixZQUFZLFNBQVMsT0FBTztBQUFBLFFBQzVCLGNBQWMsU0FBUyxPQUFPO0FBQUEsUUFDOUIsYUFBYSxTQUFTLE9BQU87QUFBQSxRQUM3QixhQUFhLFNBQVMsT0FBTztBQUFBLE1BQ2pDO0FBQUEsSUFDSixFQUFFO0FBQ0YsY0FBVSxTQUFTLGNBQWM7QUFBQSxFQUNyQztBQUVBLFdBQVMsY0FBYyxPQUFzQjtBQUN6QyxVQUFNLE9BQU8sTUFBTTtBQUNuQixRQUFJLE1BQU0sUUFBUSxVQUFVO0FBQ3hCLG1CQUFhLFNBQVM7QUFDdEI7QUFBQSxJQUNKO0FBRUEsVUFBTSxjQUFjLGtCQUFrQixRQUFRLElBQUk7QUFDbEQsUUFBSSxlQUFlLEtBQUssY0FBYyxjQUFjLFFBQVE7QUFDeEQsWUFBTSxlQUFlO0FBQ3JCLFVBQUksTUFBTSxPQUFRO0FBQ2xCLFlBQU0sU0FBUyxjQUFjLFdBQVc7QUFDeEMsbUJBQWEsT0FBTyxNQUFNO0FBQzFCLGdCQUFVLFNBQVMsY0FBYztBQUNqQyxjQUFRLEVBQUUsUUFBUSxNQUFNLE1BQU0sS0FBSyxDQUFDO0FBQ3BDLGdCQUFVLEdBQUcsT0FBTyxJQUFJLFNBQU0sT0FBTyxJQUFJLEVBQUU7QUFDM0M7QUFBQSxJQUNKO0FBRUEsVUFBTSxRQUFRLGFBQWEsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUk7QUFDNUQsUUFBSSxPQUFPO0FBQ1AsWUFBTSxlQUFlO0FBQ3JCLGlCQUFXLE1BQU0sT0FBTyxNQUFNLFdBQVcsUUFBUSxJQUFJO0FBQ3JELGNBQVEsRUFBRSxRQUFRLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFDdEM7QUFBQSxJQUNKO0FBRUEsUUFBSSxTQUFTLGlCQUFpQixTQUFTLGdCQUFnQjtBQUNuRCxZQUFNLGVBQWU7QUFDckIsaUJBQVcsU0FBUyxTQUFTLGlCQUFpQixNQUFNLElBQUk7QUFDeEQ7QUFBQSxJQUNKO0FBQ0EsUUFBSSxTQUFTLGFBQWE7QUFDdEIsWUFBTSxlQUFlO0FBQ3JCLGlCQUFXLFlBQVksTUFBTSxXQUFXLFFBQVEsSUFBSTtBQUNwRCxjQUFRLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDdkI7QUFBQSxJQUNKO0FBRUEsVUFBTSxZQUFZLFdBQVcsVUFBVSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUk7QUFDbkUsUUFBSSxhQUFhLEdBQUc7QUFDaEIsWUFBTSxlQUFlO0FBQ3JCLGVBQVMsV0FBVyxNQUFNLFFBQVE7QUFDbEM7QUFBQSxJQUNKO0FBRUEsVUFBTSxhQUFhLGdCQUFnQjtBQUFBLE1BQy9CLENBQUMsU0FBUyxLQUFLLFNBQVM7QUFBQSxJQUM1QjtBQUNBLFFBQUksY0FBYyxHQUFHO0FBQ2pCLFlBQU0sZUFBZTtBQUNyQixVQUFJLE1BQU0sT0FBUTtBQUNsQixrQkFBWSxZQUFZLE1BQU0sUUFBUTtBQUN0QztBQUFBLElBQ0o7QUFFQSxRQUFJLFNBQVMsYUFBYTtBQUN0QixZQUFNLGVBQWU7QUFDckIsVUFBSSxNQUFNLE9BQVE7QUFDbEIsZ0JBQVU7QUFDVixnQkFBVSx3QkFBd0I7QUFDbEM7QUFBQSxJQUNKO0FBRUEsUUFBSSxNQUFNLElBQUksV0FBVyxPQUFPLEdBQUc7QUFDL0IsWUFBTSxlQUFlO0FBQ3JCLFVBQUksTUFBTSxRQUFRLFVBQVcsWUFBVyxjQUFjLElBQUk7QUFDMUQsVUFBSSxNQUFNLFFBQVEsWUFBYSxZQUFXLGNBQWMsS0FBSztBQUM3RCxVQUFJLE1BQU0sUUFBUSxhQUFjLFlBQVcsWUFBWSxJQUFJO0FBQzNELFVBQUksTUFBTSxRQUFRLFlBQWEsWUFBVyxZQUFZLEtBQUs7QUFBQSxJQUMvRDtBQUFBLEVBQ0o7QUFFQSxXQUFTLFNBQVNkLElBQVdnQixJQUFXLFVBQW1CO0FBQ3ZELFVBQU0sU0FBUyxTQUFTLFFBQVE7QUFDaEMsVUFBTSxPQUFPLEtBQUssTUFBTSxPQUFPLFdBQVc7QUFDMUMsVUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTWhCLEtBQUksS0FBS2dCLEtBQUksR0FBRyxJQUFJLElBQUk7QUFDN0QsVUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFdBQVcsS0FBSztBQUMxRCxVQUFNLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYTtBQUN2QyxVQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksR0FBRyxNQUFNLENBQUM7QUFDekQsVUFBTSxNQUFNLFVBQVVoQixLQUFJLE9BQU8sUUFBUSxNQUFNZ0IsRUFBQztBQUNoRCxRQUFJLEtBQUs7QUFDTCxVQUFJLFNBQVMsR0FBRztBQUVaLHNCQUFjLElBQUksSUFBSTtBQUFBLFVBQ2xCLE9BQU8sTUFBTSxJQUFJLEdBQUcsUUFBUSxXQUFXLEtBQUssSUFBSSxDQUFDO0FBQUEsUUFDckQsQ0FBQztBQUFBLE1BQ0wsT0FBTztBQUNILGNBQU0sUUFDRixTQUFTLElBQUksVUFBVSxTQUFTLElBQUksV0FBVztBQUNuRCxjQUFNLFVBQVcsSUFBSSxHQUNqQixLQUNKO0FBQ0Esc0JBQWMsSUFBSSxJQUFJO0FBQUEsVUFDbEIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxVQUFVLFdBQVcsS0FBSyxHQUFHLENBQUM7QUFBQSxRQUNqRCxDQUFxQjtBQUFBLE1BQ3pCO0FBQUEsSUFDSixPQUFPO0FBQ0gsWUFBTSxRQUNGLFNBQVMsSUFDSCxVQUNBLFNBQVMsSUFDUCxTQUNBLFNBQVMsSUFDUCxXQUNBO0FBQ2QsaUJBQVcsT0FBTyxRQUFRO0FBQUEsSUFDOUI7QUFDQTtBQUFBLE1BQ0ksU0FBUyxJQUNILEVBQUUsT0FBTyxLQUFLLElBQ2QsU0FBUyxJQUNQLEVBQUUsTUFBTSxLQUFLLElBQ2IsU0FBUyxJQUNQLEVBQUUsUUFBUSxLQUFLLElBQ2YsRUFBRSxRQUFRLEtBQUs7QUFBQSxJQUM3QjtBQUFBLEVBQ0o7QUFFQSxXQUFTLGNBQWM7QUFDbkIsVUFBTSxVQUFVLFNBQVMsUUFBUSxPQUFPO0FBQ3hDLFVBQU0sT0FDRixVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTztBQUN6RSxpQkFBYSxFQUFFLFNBQVMsS0FBSyxDQUFDO0FBQzlCLFlBQVEsRUFBRSxPQUFPLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFBQSxFQUN6QztBQUVBLFdBQVMsV0FBVyxRQUFnQixRQUFnQjtBQUNoRCxVQUFNLE1BQU0sU0FBUyxRQUFRLE1BQU07QUFDbkMsUUFBSSxLQUFLO0FBQ0wsZUFBUyxDQUFDLGNBQWM7QUFBQSxRQUNwQixHQUFHO0FBQUEsUUFDSCxRQUFRLFNBQVMsT0FBTztBQUFBLFVBQUksQ0FBQyxVQUN6QixNQUFNLE9BQU8sSUFBSSxLQUNYO0FBQUEsWUFDSSxHQUFHO0FBQUEsWUFDSCxJQUFJO0FBQUEsY0FDQSxHQUFHLE1BQU07QUFBQSxjQUNULE1BQU0sTUFBTSxHQUFHLE9BQU87QUFBQSxjQUN0QixPQUFPLE1BQU0sR0FBRyxRQUFRO0FBQUEsY0FDeEIsUUFBUSxNQUFNLEdBQUcsU0FBUztBQUFBLGNBQzFCLFNBQVMsTUFBTSxHQUFHLFVBQVU7QUFBQSxjQUM1QixVQUFVLE1BQU0sR0FBRyxXQUFXO0FBQUEsY0FDOUIsT0FBTyxNQUFNLEdBQUcsUUFBUTtBQUFBLGNBQ3hCLFFBQVEsTUFBTSxHQUFHLFNBQVM7QUFBQSxjQUMxQixRQUFRLE1BQU0sR0FBRyxTQUFTO0FBQUEsWUFDOUI7QUFBQSxVQUNKLElBQ0E7QUFBQSxRQUNWO0FBQUEsTUFDSixFQUFFO0FBQ0Y7QUFBQSxJQUNKO0FBQ0EsYUFBUyxDQUFDLGFBQWE7QUFDbkIsWUFBTUgsS0FBSSxTQUFTO0FBQ25CLGFBQU87QUFBQSxRQUNILEdBQUc7QUFBQSxRQUNILFFBQVE7QUFBQSxVQUNKLEdBQUdBO0FBQUEsVUFDSCxNQUFNQSxHQUFFLE9BQU87QUFBQSxVQUNmLE9BQU9BLEdBQUUsUUFBUTtBQUFBLFVBQ2pCLFFBQVFBLEdBQUUsU0FBUztBQUFBLFVBQ25CLE1BQU1BLEdBQUUsT0FBTztBQUFBLFVBQ2YsU0FBU0EsR0FBRSxVQUFVO0FBQUEsVUFDckIsUUFBUUEsR0FBRSxTQUFTO0FBQUEsVUFDbkIsUUFBUUEsR0FBRSxTQUFTO0FBQUEsVUFDbkIsVUFBVUEsR0FBRSxXQUFXO0FBQUEsVUFDdkIsVUFBVUEsR0FBRSxXQUFXO0FBQUEsVUFDdkIsUUFBUUEsR0FBRSxTQUFTO0FBQUEsUUFDdkI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUVBLFdBQVMsVUFDTCxTQUNBYixJQUNBZ0IsSUFDRjtBQUNFLFVBQU0sS0FBS2hCLEtBQUksUUFBUTtBQUN2QixVQUFNLE9BQU8sUUFBUSxTQUFTZ0I7QUFDOUIsYUFBUyxDQUFDLGFBQWE7QUFDbkIsWUFBTUgsS0FBSSxTQUFTO0FBQ25CLGFBQU87QUFBQSxRQUNILEdBQUc7QUFBQSxRQUNILFFBQVE7QUFBQSxVQUNKLEdBQUdBO0FBQUEsVUFDSCxVQUFVLE1BQU1BLEdBQUUsV0FBVyxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQUEsVUFDNUMsUUFBUSxNQUFNQSxHQUFFLFNBQVMsT0FBTyxLQUFLLElBQUksQ0FBQztBQUFBLFVBQzFDLFVBQVU7QUFBQSxZQUNOLEtBQUssSUFBSUEsR0FBRSxVQUFVLEdBQUcsSUFDcEIsS0FBSyxJQUFJLEtBQUssUUFBUSxPQUFPLElBQUk7QUFBQSxZQUNyQztBQUFBLFlBQ0E7QUFBQSxVQUNKO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDSixLQUFLLElBQUlBLEdBQUUsUUFBUSxJQUFJLElBQ25CLEtBQUssSUFBSSxNQUFNLFFBQVEsT0FBTyxJQUFJO0FBQUEsWUFDdEM7QUFBQSxZQUNBO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQ0QsWUFBUSxFQUFFLE1BQU0sS0FBSyxRQUFRLEtBQUssQ0FBQztBQUFBLEVBQ3ZDO0FBSUEsV0FBUyxXQUFXLE9BS2xCO0FBQ0UsVUFBTSxRQUFRLFNBQVM7QUFDdkIsVUFBTSxPQUFPLFFBQ1AsTUFBTSxzQkFBc0IsSUFDNUIsRUFBRSxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sR0FBRyxRQUFRLEVBQUU7QUFDN0MsVUFBTWIsS0FBSSxPQUFPLE1BQU0sVUFBVSxLQUFLLFFBQVEsS0FBSyxPQUFPLEdBQUcsQ0FBQztBQUM5RCxVQUFNZ0IsS0FBSSxPQUFPLE1BQU0sVUFBVSxLQUFLLE9BQU8sS0FBSyxRQUFRLEdBQUcsQ0FBQztBQUM5RCxVQUFNLFNBQVMsS0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTTtBQUNuRCxXQUFPLEVBQUUsU0FBU2hCLEtBQUksT0FBTyxRQUFRLFFBQVEsTUFBTWdCLElBQUcsR0FBQWhCLElBQUcsR0FBQWdCLEdBQUU7QUFBQSxFQUMvRDtBQUVBLFdBQVMsU0FBUyxRQUFnQixRQUFtQztBQUNqRSxVQUFNLFVBQVUsU0FBUztBQUN6QixVQUFNLE9BQU8sYUFBYTtBQUMxQixVQUFNLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYTtBQUN2QyxVQUFNLFNBQVMsS0FBSyxJQUFJLE1BQU0sUUFBUSxLQUFLLElBQUksR0FBRyxNQUFNLENBQUM7QUFDekQsYUFBU2QsS0FBSSxRQUFRLE9BQU8sU0FBUyxHQUFHQSxNQUFLLEdBQUdBLE1BQUs7QUFDakQsWUFBTSxRQUFRLFFBQVEsT0FBT0EsRUFBQztBQUM5QixVQUFJLENBQUMsTUFBTSxHQUFHLFFBQVM7QUFDdkIsWUFBTSxPQUFPLEtBQUssTUFBTSxPQUFPO0FBQy9CLFlBQU0sY0FDRixRQUFRLEtBQUssUUFBUSxJQUNmLEtBQUssUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sSUFDcEM7QUFDVixZQUFNLFlBQVksS0FBSyxJQUFJLEdBQUcsU0FBUyxXQUFXO0FBQ2xELFlBQU0sT0FBUSxZQUFZLGNBQWMsTUFBTSxHQUFHLFFBQVM7QUFDMUQsWUFBTSxPQUFRLFlBQVksTUFBTSxHQUFHLFFBQVM7QUFDNUMsWUFBTSxRQUFTLENBQUMsTUFBTSxHQUFHLFdBQVcsS0FBSyxLQUFNO0FBQy9DLFlBQU0sS0FBSyxTQUFTLE1BQU0sR0FBRztBQUM3QixZQUFNLEtBQUssU0FBUyxNQUFNLEdBQUc7QUFDN0IsWUFBTSxLQUFLLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJO0FBQ3BELFlBQU0sS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssSUFBSTtBQUNwRCxVQUFJLEtBQUssSUFBSSxFQUFFLEtBQUssUUFBUSxLQUFLLElBQUksRUFBRSxLQUFLLEtBQU0sUUFBTztBQUFBLElBQzdEO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFFQSxXQUFTLGtCQUFrQixPQUFxQixNQUFlO0FBQzNELFVBQU0sRUFBRSxHQUFBRixJQUFHLEdBQUFnQixHQUFFLElBQUksV0FBVyxLQUFLO0FBQ2pDLFVBQU1DLEtBQUlqQjtBQUNWLFVBQU1rQixLQUFJLElBQUlGO0FBQ2QsVUFBTSxNQUFNLFlBQVksSUFBSTtBQUM1QixVQUFNLFVBQVUsS0FBSyxJQUFJLEdBQUcsTUFBTSxlQUFlLFFBQVEsRUFBRTtBQUMzRCxlQUFXLFVBQVU7QUFBQSxNQUNqQixHQUFBQztBQUFBLE1BQ0EsR0FBQUM7QUFBQSxNQUNBLFlBQVlELEtBQUksZUFBZSxRQUFRLE1BQU0sS0FBSztBQUFBLE1BQ2xELFlBQVlDLEtBQUksZUFBZSxRQUFRLE1BQU0sS0FBSztBQUFBLE1BQ2xEO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDWjtBQUNBLG1CQUFlLFVBQVUsRUFBRSxHQUFBRCxJQUFHLEdBQUFDLElBQUcsSUFBSSxJQUFJO0FBQUEsRUFDN0M7QUFFQSxXQUFTLG1CQUFtQixPQUFxQjtBQUM3QyxJQUFDLE1BQU0sY0FBOEIsa0JBQWtCLE1BQU0sU0FBUztBQUN0RSxRQUFJLGFBQWEsWUFBWSxRQUFRO0FBQ2pDLFVBQUksTUFBTSxXQUFXLEdBQUc7QUFDcEIsY0FBTSxFQUFFLFFBQUFDLFNBQVEsUUFBQUMsUUFBTyxJQUFJLFdBQVcsS0FBSztBQUMzQyxtQkFBV0QsU0FBUUMsT0FBTTtBQUN6QixnQkFBUSxFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQ3hCO0FBQUEsTUFDSjtBQUNBLHdCQUFrQixPQUFPLElBQUk7QUFDN0IsWUFBTSxFQUFFLEdBQUFwQixJQUFHLEdBQUFnQixHQUFFLElBQUksV0FBVyxLQUFLO0FBQ2pDLHFCQUFlLFVBQVU7QUFBQSxRQUNyQixRQUFRaEI7QUFBQSxRQUNSLFFBQVFnQjtBQUFBLFFBQ1IsT0FBT2hCO0FBQUEsUUFDUCxPQUFPZ0I7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLElBQUksWUFBWSxJQUFJO0FBQUEsUUFDcEIsT0FBTyxNQUFNO0FBQUEsTUFDakI7QUFDQTtBQUFBLElBQ0o7QUFDQSxVQUFNLEVBQUUsUUFBUSxPQUFPLElBQUksV0FBVyxLQUFLO0FBQzNDLFVBQU0sTUFBTSxTQUFTLFFBQVEsTUFBTTtBQUNuQyxRQUFJLEtBQUs7QUFDTCxvQkFBYyxJQUFJLEVBQUU7QUFDcEIsY0FBUSxVQUFVO0FBQUEsUUFDZCxTQUFTLElBQUk7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLEtBQUssSUFBSSxHQUFHO0FBQUEsUUFDWixLQUFLLElBQUksR0FBRztBQUFBLE1BQ2hCO0FBQUEsSUFDSixPQUFPO0FBQ0gsb0JBQWMsSUFBSTtBQUNsQixjQUFRLFVBQVU7QUFBQSxJQUN0QjtBQUFBLEVBQ0o7QUFFQSxXQUFTLG1CQUFtQixPQUFxQjtBQUM3QyxRQUFJLGFBQWEsWUFBWSxRQUFRO0FBQ2pDLHdCQUFrQixPQUFPLFdBQVcsUUFBUSxJQUFJO0FBQ2hELFlBQU0sVUFBVSxlQUFlO0FBQy9CLFVBQUksU0FBUztBQUNULGNBQU0sRUFBRSxHQUFBaEIsSUFBRyxHQUFBZ0IsR0FBRSxJQUFJLFdBQVcsS0FBSztBQUNqQyxnQkFBUSxRQUFRLEtBQUssTUFBTWhCLEtBQUksUUFBUSxPQUFPZ0IsS0FBSSxRQUFRLEtBQUs7QUFDL0QsZ0JBQVEsUUFBUWhCO0FBQ2hCLGdCQUFRLFFBQVFnQjtBQUFBLE1BQ3BCO0FBQ0E7QUFBQSxJQUNKO0FBQ0EsUUFBSSxDQUFDLFFBQVEsUUFBUztBQUN0QixVQUFNLEVBQUUsUUFBUSxPQUFPLElBQUksV0FBVyxLQUFLO0FBQzNDLGlCQUFhLFVBQVUsRUFBRSxHQUFHLFFBQVEsR0FBRyxPQUFPO0FBRTlDLFFBQUksV0FBVyxRQUFTO0FBQ3hCLGVBQVcsVUFBVSxzQkFBc0IsTUFBTTtBQUM3QyxpQkFBVyxVQUFVO0FBQ3JCLFlBQU0sT0FBTyxRQUFRO0FBQ3JCLFVBQUksQ0FBQyxLQUFNO0FBQ1gsb0JBQWMsS0FBSyxTQUFTO0FBQUEsUUFDeEIsR0FBRztBQUFBLFVBQ0MsS0FBSyxNQUFNLGFBQWEsUUFBUSxJQUFJLEtBQUs7QUFBQSxVQUN6QztBQUFBLFVBQ0E7QUFBQSxRQUNKO0FBQUEsUUFDQSxHQUFHO0FBQUEsVUFDQyxLQUFLLE1BQU0sYUFBYSxRQUFRLElBQUksS0FBSztBQUFBLFVBQ3pDO0FBQUEsVUFDQTtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMLENBQUM7QUFBQSxFQUNMO0FBRUEsV0FBUyxpQkFBaUIsT0FBcUI7QUFDM0MsUUFBSSxhQUFhLFlBQVksUUFBUTtBQUNqQyx3QkFBa0IsT0FBTyxLQUFLO0FBQzlCLFlBQU0sVUFBVSxlQUFlO0FBQy9CLHFCQUFlLFVBQVU7QUFDekIsVUFBSSxDQUFDLFdBQVcsTUFBTSxXQUFXLEVBQUc7QUFDcEMsWUFBTSxNQUFNLFlBQVksSUFBSTtBQUM1QixZQUFNLEVBQUUsR0FBQWhCLElBQUcsR0FBQWdCLEdBQUUsSUFBSSxXQUFXLEtBQUs7QUFDakMsVUFBSSxNQUFNLFFBQVEsS0FBSyxPQUFPLFFBQVEsT0FBTyxNQUFNO0FBQy9DLFlBQUksTUFBTSxhQUFhLFVBQVUsS0FBSztBQUNsQyx1QkFBYSxVQUFVO0FBQ3ZCLHNCQUFZO0FBQUEsUUFDaEIsT0FBTztBQUNILHVCQUFhLFVBQVU7QUFDdkIsbUJBQVNoQixJQUFHZ0IsSUFBRyxRQUFRLFNBQVMsTUFBTSxRQUFRO0FBQUEsUUFDbEQ7QUFBQSxNQUNKLFdBQVcsUUFBUSxPQUFPLE1BQU07QUFDNUIsa0JBQVUsU0FBU2hCLElBQUdnQixFQUFDO0FBQUEsTUFDM0I7QUFDQTtBQUFBLElBQ0o7QUFDQSxZQUFRLFVBQVU7QUFBQSxFQUN0QjtBQUVBLFdBQVMsc0JBQXNCO0FBQzNCLGVBQVcsVUFBVTtBQUFBLE1BQ2pCLEdBQUcsV0FBVztBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1o7QUFDQSxZQUFRLFVBQVU7QUFDbEIsbUJBQWUsVUFBVTtBQUFBLEVBQzdCO0FBRUEsRUFBQUYsR0FBVSxNQUFNO0FBQ1osVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxDQUFDLE1BQU87QUFDWixVQUFNLFVBQVUsQ0FBQyxVQUFzQjtBQUNuQyxVQUFJLGFBQWEsWUFBWSxRQUFRO0FBQ2pDLGNBQU0sZUFBZTtBQUNyQixjQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU07QUFDcEMsWUFBSSxNQUFNLFNBQVUsWUFBVyxjQUFjLENBQUMsUUFBUSxLQUFNO0FBQUEsWUFDdkQsWUFBVyxZQUFZLENBQUMsUUFBUSxJQUFNO0FBQzNDO0FBQUEsTUFDSjtBQUNBLFVBQUksYUFBYSxZQUFZLFVBQVc7QUFDeEMsWUFBTSxVQUFVO0FBQ2hCLFVBQUksQ0FBQyxRQUFTO0FBQ2QsWUFBTSxlQUFlO0FBQ3JCLFlBQU0sUUFBUSxTQUFTLFFBQVEsT0FBTyxLQUFLLENBQUNDLE9BQU1BLEdBQUUsT0FBTyxPQUFPO0FBQ2xFLFVBQUksQ0FBQyxNQUFPO0FBQ1osVUFBSSxNQUFNLFVBQVU7QUFDaEIsc0JBQWMsU0FBUztBQUFBLFVBQ25CLFVBQVUsTUFBTSxHQUFHLFlBQVksTUFBTSxTQUFTLElBQUksSUFBSTtBQUFBLFFBQzFELENBQUM7QUFBQSxNQUNMLE9BQU87QUFDSCxzQkFBYyxTQUFTO0FBQUEsVUFDbkIsT0FBTztBQUFBLFlBQ0gsTUFBTSxHQUFHLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxTQUFTLEtBQU07QUFBQSxZQUNoRDtBQUFBLFlBQ0E7QUFBQSxVQUNKO0FBQUEsUUFDSixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFDQSxVQUFNLGlCQUFpQixTQUFTLFNBQVMsRUFBRSxTQUFTLE1BQU0sQ0FBQztBQUMzRCxXQUFPLE1BQU0sTUFBTSxvQkFBb0IsU0FBUyxPQUFPO0FBQUEsRUFDM0QsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUlmLFdBQVMsZUFBZSxPQUE2QjtBQUNqRCxnQkFBWSxDQUFDLGFBQWE7QUFDdEIsWUFBTSxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsTUFBTTtBQUNyQyxtQkFBYSxJQUFJO0FBQ2pCLGFBQU87QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNMO0FBRUEsaUJBQWUsVUFBVSxTQUdKO0FBQ2pCLFFBQUksYUFBYSxTQUFTO0FBQ3RCLG1CQUFhLElBQUk7QUFDakIsYUFBTztBQUFBLElBQ1g7QUFDQSxRQUFJO0FBQ0EsWUFBTSxTQUFTLE1BQU0sVUFBVSxhQUFhLGFBQWE7QUFBQSxRQUNyRCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDWCxDQUFDO0FBQ0QsbUJBQWEsVUFBVTtBQUN2QixVQUFJLENBQUMsZ0JBQWdCO0FBQ2pCLHdCQUFnQixVQUFVLElBQUksYUFBYTtBQUMvQyxZQUFNLGdCQUFnQixRQUFRLE9BQU87QUFDckMsWUFBTSxXQUFXLGdCQUFnQixRQUFRLGVBQWU7QUFDeEQsZUFBUyxVQUFVO0FBQ25CLGVBQVMsd0JBQXdCO0FBQ2pDLHNCQUFnQixRQUNYLHdCQUF3QixNQUFNLEVBQzlCLFFBQVEsUUFBUTtBQUNyQixrQkFBWSxVQUFVO0FBQ3RCLG1CQUFhLElBQUk7QUFDakIsVUFBSSxTQUFTLFFBQVEsT0FBTyxhQUFhO0FBQ3JDLHFCQUFhLEVBQUUsWUFBWSxJQUFJLENBQUM7QUFDcEMsVUFBSSxTQUFTLG1CQUFtQjtBQUM1QixrQkFBVSx5Q0FBb0M7QUFDbEQsYUFBTztBQUFBLElBQ1gsUUFBUTtBQUNKLFVBQUksU0FBUyxpQkFBaUI7QUFDMUIsa0JBQVUsd0JBQXdCO0FBQ3RDLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUVBLGlCQUFlLFlBQVk7QUFDdkIsUUFBSSxXQUFXO0FBQ1gsVUFBSSxhQUFhLGdCQUFnQixTQUFTO0FBQ3RDLGtCQUFVLDJDQUEyQztBQUNyRDtBQUFBLE1BQ0o7QUFDQSxpQkFBVyxTQUFTLGFBQWEsU0FBUyxVQUFVLEtBQUssQ0FBQztBQUN0RCxjQUFNLEtBQUs7QUFDZixtQkFBYSxVQUFVO0FBQ3ZCLGtCQUFZLFVBQVU7QUFDdEIsb0JBQWMsVUFBVTtBQUN4QixtQkFBYSxLQUFLO0FBQ2xCO0FBQUEsSUFDSjtBQUNBLFVBQU0sVUFBVTtBQUFBLEVBQ3BCO0FBRUEsV0FBUyx3QkFBd0I7QUFDN0IsVUFBTSxTQUFTLFVBQVU7QUFDekIsVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFPO0FBQ3ZCLFVBQU0sT0FBTyxNQUFNLHNCQUFzQjtBQUN6QyxpQkFBYSxVQUFVLEVBQUUsT0FBTyxLQUFLLE9BQU8sUUFBUSxLQUFLLE9BQU87QUFDaEUsV0FBTyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDckMsV0FBTyxpQkFBaUIsV0FBVyxPQUFPO0FBQUEsRUFDOUM7QUFFQSxXQUFTLHNCQUNMLGNBQ0EsY0FBYyxHQUNoQjtBQUNFLFVBQU0sU0FBUyxVQUFVO0FBQ3pCLFFBQUksQ0FBQyxPQUFRLFFBQU87QUFDcEIsVUFBTSxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2I7QUFBQSxJQUNKO0FBQ0Esa0JBQWMsVUFBVTtBQUN4QixXQUFPLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTTtBQUNyQyxXQUFPLGlCQUFpQixDQUFDO0FBQ3pCLFdBQU87QUFBQSxFQUNYO0FBRUEsV0FBUyxpQkFBaUIsY0FBMkM7QUFDakUsVUFBTSxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0o7QUFDQSxVQUFNLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUNBLFlBQVEsZUFBZSxZQUFZLFdBQVc7QUFBQSxNQUFLLENBQUMsU0FDaEQsY0FBYyxnQkFBZ0IsSUFBSTtBQUFBLElBQ3RDO0FBQUEsRUFDSjtBQUVBLGlCQUFlLGtCQUFrQjtBQUM3QixVQUFNLFNBQVMsVUFBVTtBQUN6QixVQUFNLFNBQVMsVUFBVTtBQUN6QixRQUFJLENBQUMsVUFBVSxDQUFDLE9BQVE7QUFDeEIsUUFBSSxXQUFXO0FBQ1gsa0JBQVksU0FBUyxLQUFLO0FBQzFCO0FBQUEsSUFDSjtBQUNBLFVBQU0sT0FBTztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsT0FBTyxvQkFBb0I7QUFBQSxJQUMvQjtBQUNBLFFBQUksQ0FBQyxLQUFNO0FBRVgsUUFBSSxhQUFhLFlBQVksUUFBUTtBQUNyQyxRQUFJLFlBQVk7QUFDWixZQUFNLEtBQUssTUFBTSxVQUFVO0FBQUEsUUFDdkIsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLE1BQ2xCLENBQUM7QUFDRCxVQUFJLENBQUMsR0FBSSxjQUFhO0FBQUEsSUFDMUI7QUFHQSxXQUFPLE9BQU8sV0FBVyxDQUFDO0FBQzFCLFVBQU0sU0FBUyxPQUFPLGNBQWMsRUFBRTtBQUN0QyxRQUFJLFlBQVk7QUFDWixpQkFBVyxTQUFTLGFBQWEsU0FBUyxlQUFlLEtBQUssQ0FBQyxHQUFHO0FBQzlELGVBQU8sU0FBUyxLQUFLO0FBQUEsTUFDekI7QUFBQSxJQUNKO0FBQ0EsVUFBTSxXQUFXLGlCQUFpQixVQUFVO0FBQzVDLFFBQUk7QUFDQSxZQUFNLFdBQVcsSUFBSSxjQUFjLFFBQVE7QUFBQSxRQUN2QztBQUFBLFFBQ0Esb0JBQW9CO0FBQUEsUUFDcEIsR0FBSSxhQUFhLEVBQUUsb0JBQW9CLE1BQVEsSUFBSSxDQUFDO0FBQUEsTUFDeEQsQ0FBQztBQUNELGdCQUFVLFVBQVUsQ0FBQztBQUNyQixzQkFBZ0IsVUFBVTtBQUMxQixlQUFTLGtCQUFrQixDQUFDLFVBQVU7QUFDbEMsWUFBSSxNQUFNLEtBQUssS0FBTSxXQUFVLFFBQVEsS0FBSyxNQUFNLElBQUk7QUFBQSxNQUMxRDtBQUNBLGVBQVMsU0FBUyxNQUFNO0FBQ3BCLGNBQU0sYUFBYSxTQUFTLFlBQVksY0FBYztBQUFBLFVBQ2xEO0FBQUEsUUFDSixJQUNNLFFBQ0E7QUFDTixjQUFNLE9BQU8sSUFBSSxLQUFLLFVBQVUsU0FBUztBQUFBLFVBQ3JDLE1BQU0sU0FBUyxZQUFZO0FBQUEsUUFDL0IsQ0FBQztBQUNELGtCQUFVLFVBQVUsQ0FBQztBQUNyQix3QkFBZ0IsVUFBVTtBQUMxQixzQkFBYyxVQUFVO0FBQ3hCLDhCQUFzQjtBQUN0QixxQkFBYSxNQUFNLGVBQWUsU0FBUyxDQUFDO0FBQzVDLG9CQUFZLFVBQVU7QUFDdEIsNEJBQW9CLEtBQUs7QUFDekIscUJBQWEsS0FBSztBQUFBLE1BQ3RCO0FBQ0EsZUFBUyxNQUFNLEdBQUc7QUFDbEIsa0JBQVksVUFBVTtBQUN0QiwwQkFBb0IsVUFBVTtBQUM5QixtQkFBYSxJQUFJO0FBQ2pCO0FBQUEsUUFDSSxhQUNNLGFBQWEsS0FBSyxLQUFLLE9BQUksS0FBSyxNQUFNLGNBQ3RDLGFBQWEsS0FBSyxLQUFLLE9BQUksS0FBSyxNQUFNO0FBQUEsTUFDaEQ7QUFBQSxJQUNKLFFBQVE7QUFDSixzQkFBZ0IsVUFBVTtBQUMxQiwwQkFBb0IsS0FBSztBQUN6QixvQkFBYyxVQUFVO0FBQ3hCLDRCQUFzQjtBQUN0QixnQkFBVSxpQ0FBaUM7QUFBQSxJQUMvQztBQUFBLEVBQ0o7QUFFQSxXQUFTLGFBQWEsTUFBWSxVQUFrQjtBQUNoRCxVQUFNLE1BQU0sSUFBSSxnQkFBZ0IsSUFBSTtBQUNwQyxVQUFNLFNBQVMsU0FBUyxjQUFjLEdBQUc7QUFDekMsV0FBTyxPQUFPO0FBQ2QsV0FBTyxXQUFXO0FBQ2xCLFdBQU8sTUFBTTtBQUNiLGVBQVcsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsR0FBSTtBQUFBLEVBQ25EO0FBRUEsV0FBUyxlQUFlLFdBQTJCO0FBQy9DLFVBQU0sVUFDRixVQUFVLFNBQVMsUUFBUSxNQUFNLFVBQVUsRUFDdEMsUUFBUSxhQUFhLEdBQUcsRUFDeEIsUUFBUSxPQUFPLEdBQUcsRUFDbEIsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUNsQyxVQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixVQUFNLE1BQU0sQ0FBQ1gsT0FBYyxPQUFPQSxFQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDcEQsVUFBTSxRQUFRO0FBQUEsTUFDVixJQUFJLFlBQVk7QUFBQSxNQUNoQixJQUFJLElBQUksU0FBUyxJQUFJLENBQUM7QUFBQSxNQUN0QixJQUFJLElBQUksUUFBUSxDQUFDO0FBQUEsTUFDakI7QUFBQSxNQUNBLElBQUksSUFBSSxTQUFTLENBQUM7QUFBQSxNQUNsQixJQUFJLElBQUksV0FBVyxDQUFDO0FBQUEsTUFDcEIsSUFBSSxJQUFJLFdBQVcsQ0FBQztBQUFBLElBQ3hCLEVBQUUsS0FBSyxFQUFFO0FBQ1QsV0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLElBQUksU0FBUztBQUFBLEVBQzNDO0FBRUEsV0FBUyxZQUFZO0FBQ2pCLFVBQU0sU0FBUyxVQUFVO0FBQ3pCLFVBQU0sU0FBUyxVQUFVO0FBQ3pCLFFBQUksQ0FBQyxVQUFVLENBQUMsT0FBUTtBQUN4QixVQUFNLE9BQU8sc0JBQXNCLGFBQWEsU0FBUyxDQUFDO0FBQzFELFFBQUksQ0FBQyxLQUFNO0FBQ1gsV0FBTyxPQUFPLFdBQVcsQ0FBQztBQUMxQixXQUFPLE9BQU8sQ0FBQyxTQUFTO0FBQ3BCLG9CQUFjLFVBQVU7QUFDeEIsNEJBQXNCO0FBQ3RCLFVBQUksTUFBTTtBQUNOLHFCQUFhLE1BQU0sZUFBZSxLQUFLLENBQUM7QUFDeEMsa0JBQVUsWUFBWSxLQUFLLEtBQUssT0FBSSxLQUFLLE1BQU0sRUFBRTtBQUFBLE1BQ3JELE1BQU8sV0FBVSxlQUFlO0FBQUEsSUFDcEMsR0FBRyxXQUFXO0FBQUEsRUFDbEI7QUFFQSxXQUFTLGVBQXVCO0FBQzVCLFVBQU0sU0FBUyxVQUFVO0FBQ3pCLFFBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxNQUFPLFFBQU87QUFDckMsUUFBSTtBQUVBLGdCQUFVLFNBQVMsT0FBTyxXQUFXLENBQUM7QUFDdEMsWUFBTSxRQUFRLE1BQU0sS0FBSyxJQUFJLE9BQU8sT0FBTyxPQUFPLE1BQU07QUFDeEQsWUFBTSxjQUFjLFNBQVMsY0FBYyxRQUFRO0FBQ25ELGtCQUFZLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLE9BQU8sUUFBUSxLQUFLLENBQUM7QUFDaEUsa0JBQVksU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sT0FBTyxTQUFTLEtBQUssQ0FBQztBQUNsRSxZQUFNLFVBQVUsWUFBWSxXQUFXLElBQUk7QUFDM0MsVUFBSSxDQUFDLFFBQVMsUUFBTztBQUNyQixjQUFRO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxZQUFZO0FBQUEsUUFDWixZQUFZO0FBQUEsTUFDaEI7QUFDQSxZQUFNLE9BQU8sWUFBWSxVQUFVLGNBQWMsSUFBSTtBQUNyRCxhQUFPLEtBQUssU0FBUyxPQUFTLE9BQU87QUFBQSxJQUN6QyxRQUFRO0FBQ0osYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBSUEsaUJBQWUsZUFBZTtBQUMxQixRQUFJO0FBQ0EsWUFBTSxTQUFTLE1BQU07QUFBQSxRQUNqQjtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sWUFBWSxLQUFLO0FBQUEsUUFDakIsYUFBYTtBQUFBLE1BQ2pCO0FBQ0EsdUJBQWlCLE9BQU8sRUFBRTtBQUMxQixnQkFBVSxhQUFhO0FBQUEsSUFDM0IsU0FBUyxPQUFPO0FBQ1osZ0JBQVUsaUJBQWlCLFFBQVEsTUFBTSxVQUFVLGFBQWE7QUFBQSxJQUNwRTtBQUFBLEVBQ0o7QUFFQSxpQkFBZSxlQUFlLElBQVk7QUFDdEMsUUFBSTtBQUNBLFlBQU0sU0FBUyxNQUFNLGlCQUFpQixFQUFFO0FBQ3hDLFlBQU0sU0FBUyxZQUFZLE9BQU8sSUFBSTtBQUN0QyxhQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sT0FBTyxJQUFJO0FBQ2hELGVBQVMsTUFBTTtBQUNmLGVBQVMsVUFBVTtBQUNuQixvQkFBYyxJQUFJO0FBQ2xCLHVCQUFpQixFQUFFO0FBQ25CLG9CQUFjLEtBQUs7QUFDbkIsZ0JBQVUsU0FBUyxjQUFjO0FBQ2pDLFlBQU0sbUJBQW1CLE1BQU07QUFDL0IsWUFBTSxVQUFVLE9BQU8sT0FBTztBQUFBLFFBQzFCLENBQUMsVUFBVSxDQUFDLFVBQVUsU0FBUyxTQUFTLE1BQU0sT0FBTztBQUFBLE1BQ3pEO0FBQ0EsVUFBSTtBQUNBO0FBQUEsVUFDSTtBQUFBLFFBQ0o7QUFBQSxJQUNSLFFBQVE7QUFDSixnQkFBVSwyQkFBMkI7QUFBQSxJQUN6QztBQUFBLEVBQ0o7QUFFQSxpQkFBZSxtQkFBbUI7QUFDOUIsVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxDQUFDLE1BQU87QUFDWixRQUFJO0FBQ0EsVUFBSSxTQUFTLGtCQUFtQixPQUFNLFNBQVMsZUFBZTtBQUFBLFVBQ3pELE9BQU0sTUFBTSxrQkFBa0I7QUFBQSxJQUN2QyxRQUFRO0FBQ0osZ0JBQVUsNkJBQTZCO0FBQUEsSUFDM0M7QUFBQSxFQUNKO0FBSUEsUUFBTSxlQUFlaUIsR0FBUSxNQUFNO0FBQy9CLFFBQUksQ0FBQyxZQUFZLGNBQWMsVUFBVyxRQUFPO0FBQ2pELFVBQU0sT0FBTyxVQUFVLFNBQVMsT0FBTztBQUN2QyxVQUFNLEVBQUUsT0FBTyxPQUFPLElBQUksYUFBYTtBQUN2QyxRQUFJLFFBQVEsRUFBRyxRQUFPO0FBQ3RCLFVBQU0sU0FBUyxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU07QUFDekMsVUFBTSxjQUNGLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJO0FBQ3JFLFVBQU0sWUFBWSxLQUFLLElBQUksR0FBRyxTQUFTLFdBQVc7QUFDbEQsVUFBTSxXQUFXLFlBQVksY0FBYyxTQUFTLEdBQUcsUUFBUTtBQUMvRCxVQUFNLFlBQVksWUFBWSxTQUFTLEdBQUcsUUFBUTtBQUNsRCxVQUFNLFdBQVcsTUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVO0FBQ2pELFVBQU0sV0FBVyxNQUFNLFNBQVMsR0FBRyxLQUFLO0FBQ3hDLFdBQU87QUFBQSxNQUNIO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQSxVQUFVLFNBQVMsR0FBRztBQUFBLElBQzFCO0FBQUEsRUFDSixHQUFHLENBQUMsVUFBVSxXQUFXLFdBQVcsS0FBSyxDQUFDO0FBSTFDLFFBQU0sYUFDRixnQkFBQXJCLEdBQUEsS0FDSTtBQUFBLG9CQUFBQSxHQUFDLFdBQVEsT0FBTSxpQkFBZ0IsUUFBTSxNQUNqQywwQkFBQUEsR0FBQyxTQUFJLE9BQU0sb0NBQ04sd0JBQWMsSUFBSSxDQUFDLFdBQ2hCLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUcsTUFBSztBQUFBLFFBQ0wsU0FBUyxNQUFNO0FBQ1gsdUJBQWEsT0FBTyxNQUFNO0FBQzFCLG9CQUFVLFNBQVMsY0FBYztBQUFBLFFBQ3JDO0FBQUEsUUFDQSxPQUFNO0FBQUEsUUFFTjtBQUFBLDBCQUFBQSxHQUFDLFVBQUssT0FBTSx5QkFDUCxpQkFBTyxNQUNaO0FBQUEsVUFDQSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sWUFBWSxpQkFBTyxNQUFLO0FBQUE7QUFBQTtBQUFBLE1BWC9CLE9BQU87QUFBQSxJQVloQixDQUNILEdBQ0wsR0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLGNBQ1g7QUFBQSxzQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN2RDtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsU0FBSSxPQUFNLCtGQUNQO0FBQUEsd0JBQUFBLEdBQUMsV0FBTSxPQUFNLDZCQUE0QjtBQUFBO0FBQUEsVUFFckMsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxNQUFLO0FBQUEsY0FDTCxPQUFPLE1BQU0sT0FBTztBQUFBLGNBQ3BCLFNBQVMsQ0FBQyxVQUNOLGFBQWE7QUFBQSxnQkFDVCxLQUNJLE1BQU0sY0FDUjtBQUFBLGNBQ04sQ0FBQztBQUFBO0FBQUEsVUFFVDtBQUFBLFdBQ0o7QUFBQSxRQUNBLGdCQUFBQSxHQUFDLFdBQU0sT0FBTSw2QkFBNEI7QUFBQTtBQUFBLFVBRXJDLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csTUFBSztBQUFBLGNBQ0wsT0FBTyxNQUFNLE9BQU87QUFBQSxjQUNwQixTQUFTLENBQUMsVUFDTixhQUFhO0FBQUEsZ0JBQ1QsS0FDSSxNQUFNLGNBQ1I7QUFBQSxjQUNOLENBQUM7QUFBQTtBQUFBLFVBRVQ7QUFBQSxXQUNKO0FBQUEsU0FDSjtBQUFBLE9BQ0o7QUFBQSxJQUNBLGdCQUFBQSxHQUFDLFdBQVEsT0FBTSxTQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDckQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3REO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN2RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDckQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3hEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN2RDtBQUFBLE9BQ0o7QUFBQSxJQUNBLGdCQUFBQSxHQUFDLFdBQVEsT0FBTSxZQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDekQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3ZEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsUUFBUSxDQUFDZ0IsT0FBTUEsR0FBRSxRQUFRLENBQUM7QUFBQSxVQUMxQixVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3ZEO0FBQUEsTUFDQSxnQkFBQWhCO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVEsQ0FBQ2dCLE9BQU1BLEdBQUUsUUFBUSxDQUFDO0FBQUEsVUFDMUIsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN6RDtBQUFBLE1BQ0EsZ0JBQUFoQjtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3REO0FBQUEsT0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLGVBQ1g7QUFBQSxzQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN2RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDekQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsVUFDUixVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsWUFBWSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQzNEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsUUFBUTtBQUFBLFVBQ1IsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN6RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDekQ7QUFBQSxPQUNKO0FBQUEsSUFDQSxnQkFBQUEsR0FBQyxXQUFRLE9BQU0sVUFDWDtBQUFBLHNCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3REO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLFdBQVcsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUMxRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDekQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3ZEO0FBQUEsT0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLGtCQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxVQUNSLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDdEQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsWUFBWSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQzNEO0FBQUEsT0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLHNCQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxPQUFPLE1BQU0sT0FBTztBQUFBLFVBQ3BCLFVBQVUsQ0FBQyxVQUFVLGFBQWEsRUFBRSxhQUFhLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDNUQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNLE9BQU87QUFBQSxVQUNwQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxhQUFhLEVBQUUsY0FBYyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQzdEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sTUFBTSxPQUFPO0FBQUEsVUFDcEIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsYUFBYSxFQUFFLGFBQWEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUM1RDtBQUFBLE9BQ0o7QUFBQSxLQUNKO0FBR0osUUFBTSxhQUFhLFdBQ2YsZ0JBQUFBLEdBQUEsS0FDSTtBQUFBLG9CQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0csT0FBTyxjQUFXLFNBQVMsSUFBSTtBQUFBLFFBQy9CLFFBQU07QUFBQSxRQUNOLFNBQ0ksZ0JBQUFBLEdBQUEsS0FDSTtBQUFBLDBCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csTUFBSztBQUFBLGNBQ0wsT0FBTTtBQUFBLGNBQ04sT0FBTTtBQUFBLGNBQ04sU0FBUyxNQUNMO0FBQUEsZ0JBQ0ksU0FBUztBQUFBLGdCQUNULGNBQWMsU0FBUyxFQUFFO0FBQUEsY0FDN0I7QUFBQSxjQUdKLDBCQUFBQSxHQUFDLFNBQU0sT0FBTSxlQUFjO0FBQUE7QUFBQSxVQUMvQjtBQUFBLFVBQ0EsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxNQUFLO0FBQUEsY0FDTCxPQUFNO0FBQUEsY0FDTixPQUFNO0FBQUEsY0FDTixTQUFTLE1BQ0w7QUFBQSxnQkFDSSxTQUFTO0FBQUEsZ0JBQ1Qsb0JBQW9CLFNBQVMsRUFBRTtBQUFBLGNBQ25DO0FBQUEsY0FFUDtBQUFBO0FBQUEsVUFFRDtBQUFBLFdBQ0o7QUFBQSxRQUdKO0FBQUEsMEJBQUFBLEdBQUMsU0FBSSxPQUFNLGlGQUNOO0FBQUEsMkJBQWUsU0FBUyxTQUFTO0FBQUEsWUFDakMsVUFBVSxTQUFTLE9BQU8sS0FDdkIsQ0FBQyxVQUFVLFNBQVMsT0FBTyxFQUFFLFdBQzdCLFNBQU0sVUFBVSxTQUFTLE9BQU8sRUFBRSxLQUFLLE9BQUksVUFBVSxTQUFTLE9BQU8sRUFBRSxNQUFNO0FBQUEsWUFDaEYsVUFBVSxTQUFTLE9BQU8sR0FBRyxVQUFVLDRCQUF5QjtBQUFBLGFBQ3JFO0FBQUEsVUFDQSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0saUJBQ1A7QUFBQSw0QkFBQUEsR0FBQyxTQUFJLE9BQU0sa0VBQWlFLG1CQUU1RTtBQUFBLFlBQ0EsZ0JBQUFBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0csT0FBTTtBQUFBLGdCQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsZ0JBQ25CLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJO0FBQUEsa0JBQ3ZCLE9BQ0ksTUFBTSxjQUNSO0FBQUEsZ0JBQ04sQ0FBQztBQUFBLGdCQUdKLHNCQUFZLElBQUksQ0FBQyxTQUNkLGdCQUFBQSxHQUFDLFlBQWtCLE9BQU8sTUFDckIsa0JBRFEsSUFFYixDQUNIO0FBQUE7QUFBQSxZQUNMO0FBQUEsYUFDSjtBQUFBLFVBQ0EsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxPQUFNO0FBQUEsY0FDTixPQUFPLFNBQVMsR0FBRztBQUFBLGNBQ25CLEtBQUs7QUFBQSxjQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLFVBRXJEO0FBQUEsVUFDQSxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNHLE9BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxjQUNULE9BQU8sU0FBUyxHQUFHO0FBQUEsY0FDbkIsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsVUFFbEQ7QUFBQSxVQUNBLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csT0FBTTtBQUFBLGNBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxjQUNuQixLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxRQUFRO0FBQUEsY0FDUixVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxVQUVuRDtBQUFBLFVBQ0EsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxPQUFNO0FBQUEsY0FDTixPQUFPLFNBQVMsR0FBRztBQUFBLGNBQ25CLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxjQUNMLFFBQVE7QUFBQSxjQUNSLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsVUFBVSxNQUFNLENBQUM7QUFBQTtBQUFBLFVBRXREO0FBQUE7QUFBQTtBQUFBLElBQ0o7QUFBQSxJQUNBLGdCQUFBQSxHQUFDLFdBQVEsT0FBTSxXQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRWxEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFbkQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVwRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRXJEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFdEQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxRQUFRLENBQUNnQixPQUFNQSxHQUFFLFFBQVEsQ0FBQztBQUFBLFVBQzFCLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRW5EO0FBQUEsTUFDQSxnQkFBQWhCO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRXBEO0FBQUEsT0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLGVBQ1g7QUFBQSxzQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFakQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsVUFDUixVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLFlBQVksTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUV4RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxVQUNSLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsVUFBVSxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRXREO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsUUFBUTtBQUFBLFVBQ1IsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxZQUFZLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFeEQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVwRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsV0FBVyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRXZEO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxRQUFRLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFcEQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVuRDtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsU0FBSSxPQUFNLHlDQUNQO0FBQUEsd0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxNQUFLO0FBQUEsWUFDTCxPQUFPLFNBQVMsR0FBRztBQUFBLFlBQ25CLFNBQVMsQ0FBQyxVQUNOLGNBQWMsU0FBUyxJQUFJO0FBQUEsY0FDdkIsV0FDSSxNQUFNLGNBQ1I7QUFBQSxZQUNOLENBQUM7QUFBQTtBQUFBLFFBRVQ7QUFBQSxRQUNBLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxVQUNQLDBCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0csT0FBTTtBQUFBLFlBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxZQUNuQixLQUFLO0FBQUEsWUFDTCxVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSTtBQUFBLGNBQ3ZCLFlBQVk7QUFBQSxZQUNoQixDQUFDO0FBQUE7QUFBQSxRQUVULEdBQ0o7QUFBQSxTQUNKO0FBQUEsT0FDSjtBQUFBLElBQ0EsZ0JBQUFBLEdBQUMsV0FBUSxPQUFNLGdCQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVEsQ0FBQ2dCLE9BQU1BLEdBQUUsUUFBUSxDQUFDO0FBQUEsVUFDMUIsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFbEQ7QUFBQSxNQUNBLGdCQUFBaEI7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU8sU0FBUyxHQUFHO0FBQUEsVUFDbkIsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQ1AsY0FBYyxTQUFTLElBQUksRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFFbkQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxTQUFTLEdBQUc7QUFBQSxVQUNuQixLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFDUCxjQUFjLFNBQVMsSUFBSSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUVuRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLFNBQVMsR0FBRztBQUFBLFVBQ25CLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUNQLGNBQWMsU0FBUyxJQUFJLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BRXJEO0FBQUEsT0FDSjtBQUFBLEtBQ0osSUFFQSxnQkFBQUEsR0FBQSxLQUFFO0FBR04sTUFBSSxhQUFhO0FBQ2IsV0FDSSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0scUVBQ1AsMEJBQUFBLEdBQUMsU0FDRztBQUFBLHNCQUFBQSxHQUFDLE9BQUUsT0FBTSx5Q0FDSix1QkFDTDtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsT0FBRSxPQUFNLHdDQUF1QywwQ0FFaEQ7QUFBQSxPQUNKLEdBQ0o7QUFBQSxFQUVSO0FBRUEsU0FDSSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0sNkdBQ1A7QUFBQSxvQkFBQUEsR0FBQyxXQUFPLHNCQUFXO0FBQUEsSUFDbkIsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDRyxPQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDSCxZQUNJO0FBQUEsUUFDUjtBQUFBO0FBQUEsSUFDSjtBQUFBLElBR0MsQ0FBQyxZQUNFLGdCQUFBQSxHQUFDLFlBQU8sT0FBTSxxSEFDVjtBQUFBLHNCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxFQUFFLFlBQVksOEJBQThCO0FBQUEsVUFDdEQ7QUFBQTtBQUFBLE1BRUQ7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBTyxNQUFNO0FBQUEsVUFDYixTQUFTLENBQUMsVUFDTixTQUFTLENBQUMsY0FBYztBQUFBLFlBQ3BCLEdBQUc7QUFBQSxZQUNILE1BQU8sTUFBTSxjQUNSO0FBQUEsVUFDVCxFQUFFO0FBQUEsVUFFTixRQUFRLENBQUMsVUFDTCxTQUFTLENBQUMsY0FBYztBQUFBLFlBQ3BCLEdBQUc7QUFBQSxZQUNILE1BQU07QUFBQSxjQUNELE1BQU0sY0FDRjtBQUFBLGNBQ0w7QUFBQSxZQUNKO0FBQUEsVUFDSixFQUFFO0FBQUE7QUFBQSxNQUVWO0FBQUEsTUFDQSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sa0NBQWlDO0FBQUEsTUFDN0MsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixRQUFRLGNBQWM7QUFBQSxVQUN0QixTQUFTLE1BQU0sYUFBYSxTQUFTO0FBQUEsVUFDckMsT0FBTTtBQUFBLFVBRU4sMEJBQUFBLEdBQUMsU0FBTTtBQUFBO0FBQUEsTUFDWDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixRQUFRLGNBQWM7QUFBQSxVQUN0QixTQUFTLE1BQU0sYUFBYSxNQUFNO0FBQUEsVUFDbEMsT0FBTTtBQUFBLFVBRU4sMEJBQUFBLEdBQUMsVUFBTztBQUFBO0FBQUEsTUFDWjtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLGtDQUFpQztBQUFBLE1BQzdDLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sU0FBUyxNQUFNO0FBQ1gscUJBQVMsQ0FBQyxjQUFjO0FBQUEsY0FDcEIsR0FBRztBQUFBLGNBQ0gsUUFBUSxlQUFlLFNBQVMsTUFBTTtBQUFBLGNBQ3RDLFFBQVEsU0FBUyxPQUFPLElBQUksQ0FBQyxXQUFXO0FBQUEsZ0JBQ3BDLEdBQUc7QUFBQSxnQkFDSCxJQUFJLGNBQWMsTUFBTSxFQUFFO0FBQUEsY0FDOUIsRUFBRTtBQUFBLFlBQ04sRUFBRTtBQUNGLHNCQUFVLFNBQVMsY0FBYztBQUFBLFVBQ3JDO0FBQUEsVUFDQSxPQUFNO0FBQUEsVUFFTiwwQkFBQUEsR0FBQyxTQUFNO0FBQUE7QUFBQSxNQUNYO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLFNBQVMsTUFDTCxhQUFhLGVBQWUsTUFBTSxNQUFNLENBQUM7QUFBQSxVQUU3QyxPQUFNO0FBQUEsVUFFTiwwQkFBQUEsR0FBQyxTQUFNO0FBQUE7QUFBQSxNQUNYO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQ0ksU0FDTSx3QkFDQTtBQUFBLFVBRVYsUUFBUTtBQUFBLFVBQ1IsU0FBUyxNQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUTtBQUFBLFVBRS9DLG1CQUFTLGdCQUFBQSxHQUFDLFNBQU0sSUFBSyxnQkFBQUEsR0FBQyxVQUFPO0FBQUE7QUFBQSxNQUNsQztBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLFVBQVM7QUFBQSxNQUNyQixnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLFNBQVMsTUFBTSxLQUFLLGFBQWE7QUFBQSxVQUNqQyxPQUFNO0FBQUEsVUFFTiwwQkFBQUEsR0FBQyxTQUFNO0FBQUE7QUFBQSxNQUNYO0FBQUEsTUFDQSxnQkFBQUEsR0FBQyxTQUFJLE9BQU0sWUFDUDtBQUFBLHdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0csT0FBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFlBQ1IsU0FBUyxNQUNMLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUTtBQUFBLFlBRXpDLE9BQU07QUFBQSxZQUVOLDBCQUFBQSxHQUFDLFdBQVE7QUFBQTtBQUFBLFFBQ2I7QUFBQSxRQUNDLGNBQ0csZ0JBQUFBLEdBQUEsS0FDSTtBQUFBLDBCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csT0FBTTtBQUFBLGNBQ04sU0FBUyxNQUFNLGNBQWMsS0FBSztBQUFBO0FBQUEsVUFDdEM7QUFBQSxVQUNBLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxzSUFDTjtBQUFBLHNCQUFVLFdBQVcsS0FDbEIsZ0JBQUFBLEdBQUMsT0FBRSxPQUFNLGdEQUErQztBQUFBO0FBQUEsY0FFbkRPLE1BQUssVUFDQSwrQ0FDQTtBQUFBLGVBQ1Y7QUFBQSxZQUVILFVBQVUsSUFBSSxDQUFDLFNBQ1osZ0JBQUFQO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBRUcsT0FBTTtBQUFBLGdCQUVOO0FBQUEsa0NBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxPQUFNO0FBQUEsc0JBQ04sU0FBUyxNQUNMLEtBQUssZUFBZSxLQUFLLEVBQUU7QUFBQSxzQkFHL0I7QUFBQSx3Q0FBQUEsR0FBQyxVQUFLLE9BQU0sdUdBQ1AsZUFBSyxRQUNGLGdCQUFBQTtBQUFBLDBCQUFDO0FBQUE7QUFBQSw0QkFDRyxLQUFLLEtBQUs7QUFBQSw0QkFDVixPQUFNO0FBQUE7QUFBQSx3QkFDVixJQUVBLGdCQUFBQSxHQUFDLFVBQUssT0FBTSwyQ0FBMEMsc0JBRXRELEdBRVI7QUFBQSx3QkFDQSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sV0FDUjtBQUFBLDBDQUFBQSxHQUFDLFVBQUssT0FBTSxvREFDUCxlQUFLLE1BQ1Y7QUFBQSwwQkFDQSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sbURBQ1AsY0FBSTtBQUFBLDRCQUNELEtBQUs7QUFBQSwwQkFDVCxFQUFFLGVBQWUsR0FDckI7QUFBQSwyQkFDSjtBQUFBO0FBQUE7QUFBQSxrQkFDSjtBQUFBLGtCQUNBLGdCQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDRyxNQUFLO0FBQUEsc0JBQ0wsT0FBTTtBQUFBLHNCQUNOLE9BQU07QUFBQSxzQkFDTixTQUFTLE1BQU07QUFDWCw2QkFBSztBQUFBLDBCQUNELEtBQUs7QUFBQSx3QkFDVCxFQUFFO0FBQUEsMEJBQU0sTUFDSjtBQUFBLDRCQUNJO0FBQUEsMEJBQ0o7QUFBQSx3QkFDSjtBQUNBLDRCQUNJLEtBQUssT0FDTDtBQUVBLDJDQUFpQixFQUFFO0FBQUEsc0JBQzNCO0FBQUEsc0JBRUEsMEJBQUFBLEdBQUMsVUFBTyxPQUFNLGVBQWM7QUFBQTtBQUFBLGtCQUNoQztBQUFBO0FBQUE7QUFBQSxjQXJESyxLQUFLO0FBQUEsWUFzRGQsQ0FDSDtBQUFBLGFBQ0w7QUFBQSxXQUNKO0FBQUEsU0FFUjtBQUFBLE1BQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLGtDQUFpQztBQUFBLE1BQzdDLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FDSSxZQUNNLG9CQUNBO0FBQUEsVUFFVixRQUFRO0FBQUEsVUFDUixTQUFTLE1BQU0sS0FBSyxVQUFVO0FBQUEsVUFFOUIsMEJBQUFBLEdBQUMsUUFBSztBQUFBO0FBQUEsTUFDVjtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUNJLFlBQ00sbUJBQ0EsU0FBUyxpQkFDUCx3QkFDQTtBQUFBLFVBRVosUUFBUTtBQUFBLFVBQ1IsU0FBUyxNQUFNLEtBQUssZ0JBQWdCO0FBQUEsVUFFbkMsc0JBQ0csZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLDhEQUE2RCxJQUV6RSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sdUVBQXNFO0FBQUE7QUFBQSxNQUUxRjtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixVQUFVLENBQUMsVUFBVTtBQUNqQixrQkFBTSxRQUFTLE1BQU0sT0FDaEI7QUFDTCxnQkFDSSxtQkFBbUI7QUFBQSxjQUNmLENBQUMsU0FBUyxLQUFLLE9BQU87QUFBQSxZQUMxQixHQUNGO0FBQ0UsMkJBQWEsS0FBSztBQUFBLFlBQ3RCO0FBQUEsVUFDSjtBQUFBLFVBRUMsNkJBQW1CLElBQUksQ0FBQyxTQUNyQixnQkFBQUEsR0FBQyxZQUFxQixPQUFPLEtBQUssSUFDN0IsZUFBSyxTQURHLEtBQUssRUFFbEIsQ0FDSDtBQUFBO0FBQUEsTUFDTDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFPLGlCQUFpQixtQkFBbUIsS0FBSyxDQUFDLFNBQVMsS0FBSyxPQUFPLFNBQVMsR0FBRyxTQUFTLFVBQVU7QUFBQSxVQUNyRyxTQUFTO0FBQUEsVUFFVCwwQkFBQUEsR0FBQyxhQUFVO0FBQUE7QUFBQSxNQUNmO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFNBQVMsTUFBTTtBQUNYLHdCQUFZLEtBQUs7QUFDakIsNEJBQWdCLENBQUMsYUFBYSxDQUFDLFFBQVE7QUFBQSxVQUMzQztBQUFBLFVBRUEsMEJBQUFBLEdBQUMsYUFBVTtBQUFBO0FBQUEsTUFDZjtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixTQUFTLE1BQU07QUFDWCw0QkFBZ0IsS0FBSztBQUNyQix3QkFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRO0FBQUEsVUFDdkM7QUFBQSxVQUVBLDBCQUFBQSxHQUFDLFVBQUssT0FBTSwwRkFBeUYsZUFFckc7QUFBQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsU0FBUyxNQUFNLEtBQUssaUJBQWlCO0FBQUEsVUFFckMsMEJBQUFBLEdBQUMsV0FBUTtBQUFBO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixTQUFTLE1BQU0sWUFBWSxJQUFJO0FBQUEsVUFFL0IsMEJBQUFBLEdBQUMsVUFBTztBQUFBO0FBQUEsTUFDWjtBQUFBLE9BQ0o7QUFBQSxJQUdKLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxxQ0FFTjtBQUFBLE9BQUMsWUFDRSxnQkFBQUEsR0FBQyxXQUFNLE9BQU0seUZBQ1Q7QUFBQSx3QkFBQUEsR0FBQyxZQUFPLE9BQU0sZ0ZBQ1Y7QUFBQSwwQkFBQUEsR0FBQyxVQUFLLE9BQU0seUVBQXdFLG9CQUVwRjtBQUFBLFVBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxPQUFNLDJDQUNQO0FBQUEsa0JBQU0sT0FBTztBQUFBLFlBQU87QUFBQSxZQUFFO0FBQUEsYUFDM0I7QUFBQSxVQUNBLGdCQUFBQSxHQUFDLFVBQUssT0FBTSxVQUFTO0FBQUEsVUFDckIsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxNQUFLO0FBQUEsY0FDTCxPQUFNO0FBQUEsY0FDTixPQUFNO0FBQUEsY0FDTixTQUFTLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFBQSxjQUV0QywwQkFBQUEsR0FBQyxTQUFNO0FBQUE7QUFBQSxVQUNYO0FBQUEsV0FDSjtBQUFBLFFBQ0EsZ0JBQUFBLEdBQUMsU0FBSSxPQUFNLHVDQUNOO0FBQUEsZ0JBQU0sT0FBTyxXQUFXLEtBQ3JCLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csTUFBSztBQUFBLGNBQ0wsT0FBTTtBQUFBLGNBQ04sU0FBUyxNQUFNLFFBQVEsU0FBUyxNQUFNO0FBQUEsY0FDekM7QUFBQTtBQUFBLFVBRUQ7QUFBQSxVQUVILE1BQU0sT0FDRixNQUFNLEVBQ04sUUFBUSxFQUNSLElBQUksQ0FBQyxVQUFVO0FBQ1osa0JBQU0sT0FBTyxVQUFVLE1BQU0sT0FBTztBQUNwQyxrQkFBTSxhQUFhLE1BQU0sT0FBTztBQUNoQyxtQkFDSSxnQkFBQUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFFRyxPQUFPLDREQUE0RCxhQUFhLHdCQUF3Qix3QkFBd0IsSUFBSSxNQUFNLEdBQUcsVUFBVSxLQUFLLFlBQVk7QUFBQSxnQkFDeEssU0FBUyxNQUNMLGNBQWMsTUFBTSxFQUFFO0FBQUEsZ0JBRzFCO0FBQUEsa0NBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxPQUNJLE1BQU0sR0FBRyxVQUNILFNBQ0E7QUFBQSxzQkFFVixPQUFNO0FBQUEsc0JBQ04sU0FBUyxDQUFDLFVBQVU7QUFDaEIsOEJBQU0sZ0JBQWdCO0FBQ3RCLHNDQUFjLE1BQU0sSUFBSTtBQUFBLDBCQUNwQixTQUNJLENBQUMsTUFBTSxHQUFHO0FBQUEsd0JBQ2xCLENBQUM7QUFBQSxzQkFDTDtBQUFBLHNCQUVDLGdCQUFNLEdBQUcsVUFDTixnQkFBQUEsR0FBQyxRQUFLLE9BQU0sZUFBYyxJQUUxQixnQkFBQUEsR0FBQyxXQUFRLE9BQU0sZUFBYztBQUFBO0FBQUEsa0JBRXJDO0FBQUEsa0JBQ0EsZ0JBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE9BQU8sd0VBQXdFLGFBQWEsNEJBQTRCLHNCQUFzQjtBQUFBLHNCQUU3SSxnQkFBTSxRQUNILGdCQUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDRyxLQUFLLEtBQUs7QUFBQSwwQkFDVixPQUFNO0FBQUE7QUFBQSxzQkFDVixJQUVBLGdCQUFBQSxHQUFDLFVBQUssT0FBTSx1Q0FDUCxnQkFBTSxVQUNELE1BQ0EsVUFDVjtBQUFBO0FBQUEsa0JBRVI7QUFBQSxrQkFDQSxnQkFBQUEsR0FBQyxVQUFLLE9BQU0sMkRBQ1AsZ0JBQU0sTUFDWDtBQUFBLGtCQUNDLE1BQU0sY0FBYyxXQUNqQixnQkFBQUEsR0FBQyxVQUFLLE9BQU0sa0ZBQ1AsZ0JBQU0sY0FBYyxVQUNmLFFBQ0EsTUFBTSxjQUFjLFVBQ2xCLFFBQ0EsT0FDWjtBQUFBLGtCQUVKLGdCQUFBQSxHQUFDLFVBQUssT0FBTSw4REFDUjtBQUFBLG9DQUFBQTtBQUFBLHNCQUFDO0FBQUE7QUFBQSx3QkFDRyxNQUFLO0FBQUEsd0JBQ0wsT0FBTTtBQUFBLHdCQUNOLE9BQU07QUFBQSx3QkFDTixTQUFTLENBQUMsVUFBVTtBQUNoQixnQ0FBTSxnQkFBZ0I7QUFDdEIsb0NBQVUsTUFBTSxJQUFJLENBQUM7QUFBQSx3QkFDekI7QUFBQSx3QkFFQSwwQkFBQUEsR0FBQyxPQUFJLE9BQU0sZUFBYztBQUFBO0FBQUEsb0JBQzdCO0FBQUEsb0JBQ0EsZ0JBQUFBO0FBQUEsc0JBQUM7QUFBQTtBQUFBLHdCQUNHLE1BQUs7QUFBQSx3QkFDTCxPQUFNO0FBQUEsd0JBQ04sT0FBTTtBQUFBLHdCQUNOLFNBQVMsQ0FBQyxVQUFVO0FBQ2hCLGdDQUFNLGdCQUFnQjtBQUN0QixvQ0FBVSxNQUFNLElBQUksRUFBRTtBQUFBLHdCQUMxQjtBQUFBLHdCQUVBLDBCQUFBQSxHQUFDLFNBQU0sT0FBTSxlQUFjO0FBQUE7QUFBQSxvQkFDL0I7QUFBQSxvQkFDQSxnQkFBQUE7QUFBQSxzQkFBQztBQUFBO0FBQUEsd0JBQ0csTUFBSztBQUFBLHdCQUNMLE9BQU07QUFBQSx3QkFDTixPQUFNO0FBQUEsd0JBQ04sU0FBUyxDQUFDLFVBQVU7QUFDaEIsZ0NBQU0sZ0JBQWdCO0FBQ3RCO0FBQUEsNEJBQ0ksTUFBTTtBQUFBLDBCQUNWO0FBQUEsd0JBQ0o7QUFBQSx3QkFFQSwwQkFBQUEsR0FBQyxTQUFNLE9BQU0sZUFBYztBQUFBO0FBQUEsb0JBQy9CO0FBQUEsb0JBQ0EsZ0JBQUFBO0FBQUEsc0JBQUM7QUFBQTtBQUFBLHdCQUNHLE1BQUs7QUFBQSx3QkFDTCxPQUFNO0FBQUEsd0JBQ04sT0FBTTtBQUFBLHdCQUNOLFNBQVMsQ0FBQyxVQUFVO0FBQ2hCLGdDQUFNLGdCQUFnQjtBQUN0QixzQ0FBWSxNQUFNLEVBQUU7QUFBQSx3QkFDeEI7QUFBQSx3QkFFQSwwQkFBQUEsR0FBQyxVQUFPLE9BQU0sZUFBYztBQUFBO0FBQUEsb0JBQ2hDO0FBQUEscUJBQ0o7QUFBQTtBQUFBO0FBQUEsY0F2R0ssTUFBTTtBQUFBLFlBd0dmO0FBQUEsVUFFUixDQUFDO0FBQUEsV0FDVDtBQUFBLFFBQ0EsZ0JBQUFBLEdBQUMsWUFBTyxPQUFNLHFDQUNWLDBCQUFBQSxHQUFDLE9BQUUsT0FBTSw2REFBNEQsNkpBSXJFLEdBQ0o7QUFBQSxTQUNKO0FBQUEsTUFJSixnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLEtBQUs7QUFBQSxVQUNMLE9BQU8sb0RBQW9ELGNBQWMsU0FBUyxxQkFBcUIsZ0JBQWdCO0FBQUEsVUFDdkgsZUFBZTtBQUFBLFVBQ2YsZUFBZTtBQUFBLFVBQ2YsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsVUFDaEIsZUFBZSxDQUFDLFVBQVU7QUFDdEIsZ0JBQUksYUFBYSxZQUFZO0FBQ3pCLG9CQUFNLGVBQWU7QUFBQSxVQUM3QjtBQUFBLFVBQ0EsWUFBWSxDQUFDLFVBQVU7QUFDbkIsa0JBQU0sZUFBZTtBQUNyQix3QkFBWSxJQUFJO0FBQUEsVUFDcEI7QUFBQSxVQUNBLGFBQWEsTUFBTSxZQUFZLEtBQUs7QUFBQSxVQUNwQyxRQUFRLENBQUMsVUFBVTtBQUNmLGtCQUFNLGVBQWU7QUFDckIsd0JBQVksS0FBSztBQUNqQixnQkFBSSxNQUFNLGNBQWMsTUFBTTtBQUMxQixtQkFBSyxZQUFZLE1BQU0sYUFBYSxLQUFLO0FBQUEsVUFDakQ7QUFBQSxVQUVBO0FBQUEsNEJBQUFBLEdBQUMsWUFBTyxLQUFLLFdBQVcsT0FBTSx1QkFBc0I7QUFBQSxZQUNuRCxnQkFDRyxnQkFBQUE7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDRyxPQUFNO0FBQUEsZ0JBQ04sT0FBTztBQUFBLGtCQUNILE1BQU0sR0FBRyxhQUFhLFVBQVUsYUFBYSxXQUFXLENBQUM7QUFBQSxrQkFDekQsS0FBSyxHQUFHLGFBQWEsVUFBVSxhQUFhLFlBQVksQ0FBQztBQUFBLGtCQUN6RCxPQUFPLEdBQUcsYUFBYSxRQUFRO0FBQUEsa0JBQy9CLFFBQVEsR0FBRyxhQUFhLFNBQVM7QUFBQSxrQkFDakMsV0FBVyxVQUFVLGFBQWEsUUFBUTtBQUFBLGtCQUMxQyxXQUFXO0FBQUEsZ0JBQ2Y7QUFBQTtBQUFBLFlBQ0o7QUFBQSxZQUVILE1BQU0sT0FBTyxXQUFXLEtBQ3JCLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxnRUFDUCwwQkFBQUEsR0FBQyxPQUFFLE9BQU0sNElBQTJJLG9EQUVwSixHQUNKO0FBQUEsWUFFSCxZQUNHLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxpRkFDUCwwQkFBQUEsR0FBQyxPQUFFLE9BQU0sMEhBQXlILG1DQUVsSSxHQUNKO0FBQUEsWUFFSCxjQUFjLFVBQVUsQ0FBQyxZQUN0QixnQkFBQUEsR0FBQyxTQUFJLE9BQU0sdUxBQXNMO0FBQUE7QUFBQSxjQUM5STtBQUFBLGNBRTNDLGNBQ0ksS0FBSyxNQUFNLE1BQU0sT0FBTyxXQUFXLENBQ3ZDO0FBQUEsY0FDRjtBQUFBLGNBQUk7QUFBQSxlQUVWO0FBQUEsWUFFSCxhQUNHLGdCQUFBQSxHQUFDLFNBQUksT0FBTSxzTEFDUDtBQUFBLDhCQUFBQSxHQUFDLFVBQUssT0FBTSwwREFBeUQ7QUFBQSxjQUFHO0FBQUEsY0FBSTtBQUFBLGNBRTNFLG1CQUFtQixjQUFXO0FBQUEsZUFDbkM7QUFBQSxZQUVILFlBQ0csZ0JBQUFBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0csTUFBSztBQUFBLGdCQUNMLE9BQU07QUFBQSxnQkFDTixTQUFTLE1BQU0sWUFBWSxLQUFLO0FBQUEsZ0JBQ25DO0FBQUE7QUFBQSxZQUVEO0FBQUE7QUFBQTtBQUFBLE1BRVI7QUFBQSxNQUdDLENBQUMsWUFDRSxnQkFBQUEsR0FBQyxXQUFNLE9BQU0sMkZBQ1I7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNELGdCQUFBQSxHQUFDLFNBQUksT0FBTSxpRUFBZ0UsOEhBSTNFO0FBQUEsU0FDSjtBQUFBLE9BRVI7QUFBQSxJQUVDLFlBQVksZ0JBQUFBLEdBQUMsYUFBVSxTQUFTLE1BQU0sWUFBWSxLQUFLLEdBQUc7QUFBQSxJQUMxRCxnQkFDRyxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHO0FBQUEsUUFDQTtBQUFBLFFBQ0EsVUFBVTtBQUFBLFFBQ1YsU0FBUyxNQUFNLGdCQUFnQixLQUFLO0FBQUE7QUFBQSxJQUN4QztBQUFBLElBR0gsU0FDRyxnQkFBQUEsR0FBQyxTQUFJLE9BQU0sMExBQ04saUJBQ0w7QUFBQSxJQUdKLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0csS0FBSztBQUFBLFFBQ0wsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsVUFBUTtBQUFBLFFBQ1IsT0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFVBQVU7QUFDakIsZ0JBQU0sUUFBUSxNQUFNO0FBQ3BCLGNBQUksTUFBTSxPQUFPLE9BQVEsTUFBSyxZQUFZLE1BQU0sS0FBSztBQUNyRCxnQkFBTSxRQUFRO0FBQUEsUUFDbEI7QUFBQTtBQUFBLElBQ0o7QUFBQSxLQUNKO0FBRVI7OztBQ2h5SEEsRUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxlQUFlLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFsic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImRlZmVyIiwgImRlcHRoU29ydCIsICJfaWQiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgIkVNUFRZX09CSiIsICJFTVBUWV9BUlIiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgIl9faSIsICJfX3UiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQmFzZUNvbXBvbmVudCIsICJjb250ZXh0IiwgInRoaXMiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgIl9fIiwgIl9faSIsICJzaWJsaW5nIiwgIl9fayIsICJsZW5ndGgiLCAiX19lIiwgInR5cGUiLCAicmVuZGVyQ29tcG9uZW50IiwgImNvbXBvbmVudCIsICJfX1AiLCAiX19kIiwgIm9sZFZOb2RlIiwgIl9fdiIsICJvbGREb20iLCAiY29tbWl0UXVldWUiLCAicmVmUXVldWUiLCAibmV3Vk5vZGUiLCAiYXNzaWduIiwgIm9wdGlvbnMiLCAiZGlmZiIsICJfX24iLCAibmFtZXNwYWNlVVJJIiwgIl9fdSIsICJjb21taXRSb290IiwgInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwgIl9fYyIsICJiYXNlIiwgInNvbWUiLCAiY2hpbGQiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgIl9fciIsICJwcmV2RGVib3VuY2UiLCAiZGVib3VuY2VSZW5kZXJpbmciLCAiZGVmZXIiLCAibCIsICJzb3J0IiwgImRlcHRoU29ydCIsICJzaGlmdCIsICJkaWZmQ2hpbGRyZW4iLCAicGFyZW50RG9tIiwgInJlbmRlclJlc3VsdCIsICJuZXdQYXJlbnRWTm9kZSIsICJvbGRQYXJlbnRWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgIm5hbWVzcGFjZSIsICJleGNlc3NEb21DaGlsZHJlbiIsICJpc0h5ZHJhdGluZyIsICJpIiwgImNoaWxkVk5vZGUiLCAibmV3RG9tIiwgImZpcnN0Q2hpbGREb20iLCAicmVzdWx0IiwgInNob3VsZFBsYWNlIiwgIm9sZENoaWxkcmVuIiwgIkVNUFRZX0FSUiIsICJuZXdDaGlsZHJlbkxlbmd0aCIsICJjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IiwgIkVNUFRZX09CSiIsICJyZWYiLCAiYXBwbHlSZWYiLCAiaW5zZXJ0IiwgIm5leHRTaWJsaW5nIiwgInNrZXdlZEluZGV4IiwgIm1hdGNoaW5nSW5kZXgiLCAib2xkQ2hpbGRyZW5MZW5ndGgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAic2tldyIsICJBcnJheSIsICJjb25zdHJ1Y3RvciIsICJTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiaXNBcnJheSIsICJfX2IiLCAia2V5IiwgImZpbmRNYXRjaGluZ0luZGV4IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibm9kZVR5cGUiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAiY2hpbGRWTm9kZSIsICJvbGRDaGlsZHJlbiIsICJza2V3ZWRJbmRleCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJ4IiwgInkiLCAiY2hpbGRJbmRleCIsICJrZXkiLCAidHlwZSIsICJvbGRWTm9kZSIsICJtYXRjaGVkIiwgIl9fdSIsICJsZW5ndGgiLCAic2V0U3R5bGUiLCAic3R5bGUiLCAidmFsdWUiLCAic2V0UHJvcGVydHkiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgInRlc3QiLCAiZG9tIiwgIm5hbWUiLCAib2xkVmFsdWUiLCAibmFtZXNwYWNlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgImwiLCAiRVZFTlRfQVRUQUNIRUQiLCAiZXZlbnRDbG9jayIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJ0aGlzIiwgImV2ZW50SGFuZGxlciIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIm9wdGlvbnMiLCAiZXZlbnQiLCAiZGlmZiIsICJwYXJlbnREb20iLCAibmV3Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJleGNlc3NEb21DaGlsZHJlbiIsICJjb21taXRRdWV1ZSIsICJvbGREb20iLCAiaXNIeWRyYXRpbmciLCAicmVmUXVldWUiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImMiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgInJlbmRlclJlc3VsdCIsICJpIiwgIm5ld1R5cGUiLCAiY29uc3RydWN0b3IiLCAiX19lIiwgIl9fYiIsICJvdXRlciIsICJwcm9wcyIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgImNvbnRleHRUeXBlIiwgIl9fYyIsICJfXyIsICJfX0UiLCAiQmFzZUNvbXBvbmVudCIsICJkb1JlbmRlciIsICJzdWIiLCAic3RhdGUiLCAiX19uIiwgIl9fZCIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiYXNzaWduIiwgIl9fdiIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAicHVzaCIsICJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfX2siLCAic29tZSIsICJ2bm9kZSIsICJFTVBUWV9BUlIiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiY29udGV4dCIsICJfX1AiLCAiX19yIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJGcmFnbWVudCIsICJjbG9uZU5vZGUiLCAiY2hpbGRyZW4iLCAiZGlmZkNoaWxkcmVuIiwgImlzQXJyYXkiLCAiYmFzZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJub2RlVHlwZSIsICJuZXh0U2libGluZyIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAiY29tbWl0Um9vdCIsICJyb290IiwgImFwcGx5UmVmIiwgImNiIiwgImNhbGwiLCAibm9kZSIsICJtYXAiLCAibmV3SHRtbCIsICJvbGRIdG1sIiwgIm5ld0NoaWxkcmVuIiwgImlucHV0VmFsdWUiLCAiY2hlY2tlZCIsICJFTVBUWV9PQkoiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJkZWZhdWx0VmFsdWUiLCAiY2hpbGROb2RlcyIsICJhdHRyaWJ1dGVzIiwgIl9faHRtbCIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJnZXREb21TaWJsaW5nIiwgInVuZGVmaW5lZCIsICJyZWYiLCAiaGFzUmVmVW5tb3VudCIsICJjdXJyZW50IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAic2tpcFJlbW92ZSIsICJyIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInJlcGxhY2VOb2RlIiwgImRvY3VtZW50RWxlbWVudCIsICJjcmVhdGVFbGVtZW50IiwgIm5hbWVzcGFjZVVSSSIsICJmaXJzdENoaWxkIiwgImNyZWF0ZUNvbnRleHQiLCAiZGVmYXVsdFZhbHVlIiwgIkNvbnRleHQiLCAicHJvcHMiLCAic3VicyIsICJjdHgiLCAidGhpcyIsICJnZXRDaGlsZENvbnRleHQiLCAiU2V0IiwgIl9fYyIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX3Byb3BzIiwgInZhbHVlIiwgImZvckVhY2giLCAiYyIsICJfX2UiLCAiZW5xdWV1ZVJlbmRlciIsICJzdWIiLCAiYWRkIiwgIm9sZCIsICJkZWxldGUiLCAiY2FsbCIsICJjaGlsZHJlbiIsICJpIiwgIl9fIiwgIlByb3ZpZGVyIiwgIl9fbCIsICJDb25zdW1lciIsICJjb250ZXh0VmFsdWUiLCAiY29udGV4dFR5cGUiLCAic2xpY2UiLCAiRU1QVFlfQVJSIiwgIm9wdGlvbnMiLCAiZXJyb3IiLCAidm5vZGUiLCAib2xkVk5vZGUiLCAiZXJyb3JJbmZvIiwgImNvbXBvbmVudCIsICJjdG9yIiwgImhhbmRsZWQiLCAiY29uc3RydWN0b3IiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwgInNldFN0YXRlIiwgIl9fZCIsICJjb21wb25lbnREaWRDYXRjaCIsICJfX0UiLCAiZSIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgIkJhc2VDb21wb25lbnQiLCAicHJvdG90eXBlIiwgInVwZGF0ZSIsICJjYWxsYmFjayIsICJzIiwgIl9fcyIsICJzdGF0ZSIsICJhc3NpZ24iLCAiX192IiwgIl9zYiIsICJwdXNoIiwgImZvcmNlVXBkYXRlIiwgIl9faCIsICJyZW5kZXIiLCAiRnJhZ21lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJkZWZlciIsICJQcm9taXNlIiwgInRoZW4iLCAiYmluZCIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiZGVwdGhTb3J0IiwgImEiLCAiYiIsICJfX2IiLCAicHJvY2VzcyIsICJfX3IiLCAiX2lkIiwgIk1hdGgiLCAicmFuZG9tIiwgInRvU3RyaW5nIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2aW91c0NvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9wdGlvbnMiLCAiX29wdGlvbnMiLCAib2xkQmVmb3JlRGlmZiIsICJfX2IiLCAib2xkQmVmb3JlUmVuZGVyIiwgIl9fciIsICJvbGRBZnRlckRpZmYiLCAiZGlmZmVkIiwgIm9sZENvbW1pdCIsICJfX2MiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgIm9sZFJvb3QiLCAiX18iLCAiZ2V0SG9va1N0YXRlIiwgImluZGV4IiwgInR5cGUiLCAiX19oIiwgImhvb2tzIiwgIl9fSCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgImFjdGlvbiIsICJjdXJyZW50VmFsdWUiLCAiX19OIiwgIm5leHRWYWx1ZSIsICJzZXRTdGF0ZSIsICJfX2YiLCAidXBkYXRlSG9va1N0YXRlIiwgInAiLCAicyIsICJjIiwgInVwZGF0ZWRIb29rIiwgInNob3VsZFVwZGF0ZSIsICJwcm9wcyIsICJzb21lIiwgImhvb2tJdGVtIiwgInByZXZTY3UiLCAicmVzdWx0IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImQiLCAiaCIsICJkIiwgImgiLCAidCIsICJkIiwgImwiLCAicCIsICJpIiwgIndpZHRoIiwgImhlaWdodCIsICJ5IiwgIngiLCAicCIsICJ1MiIsICJ1MyIsICJ2IiwgImciLCAiaSIsICJhIiwgImIiLCAiYyIsICJvIiwgImgiLCAicmVxdWVzdCIsICJ2bm9kZUlkIiwgImNyZWF0ZVZOb2RlIiwgInR5cGUiLCAicHJvcHMiLCAia2V5IiwgImlzU3RhdGljQ2hpbGRyZW4iLCAiX19zb3VyY2UiLCAiX19zZWxmIiwgInJlZiIsICJpIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgInZub2RlSWQiLCAiX19pIiwgIl9fdSIsICJkZWZhdWx0UHJvcHMiLCAib3B0aW9ucyIsICJ1IiwgInAiLCAiaSIsICJhIiwgIm4iLCAiayIsICJjIiwgImF1dGgiLCAiZCIsICJBIiwgImxheWVyIiwgImNhbnZhcyIsICJvYmplY3RVcmwiLCAiZyIsICJoIiwgImwiLCAidiIsICJ4IiwgInkiLCAic2NlbmVYIiwgInNjZW5lWSIsICJUIl0KfQo=
