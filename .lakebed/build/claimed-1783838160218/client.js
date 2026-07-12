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

// lakebed-source:client/appSettings.ts
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

// lakebed-source:client/icons.tsx
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
var IChevronDown = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "m6 9 6 6 6-6" }));
var ICheck = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "m5 12.5 4.5 4.5L19 7" }));

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

// lakebed-source:client/ui/Button.tsx
function Button(props) {
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
function IconButton(props) {
  const hover = props.tone === "accent" ? "hover:text-[var(--acid)]" : props.tone === "danger" ? "hover:text-[#b86a74]" : "hover:text-[var(--paper)]";
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      title: props.title,
      class: `text-[var(--mute)] ${hover} ${props.class ?? ""}`,
      onClick: props.onClick,
      children: props.children
    }
  );
}

// lakebed-source:client/ui/Modal.tsx
function Modal(props) {
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4",
      onClick: props.onClose,
      children: /* @__PURE__ */ u3(
        "div",
        {
          class: `pop max-h-[88vh] w-full ${props.maxWidth ?? "max-w-[420px]"} overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] shadow-2xl`,
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ u3("header", { class: "flex items-center gap-2 border-b border-[var(--line)] px-4 py-3", children: [
              /* @__PURE__ */ u3("span", { class: "text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--acid)]", children: props.title }),
              /* @__PURE__ */ u3("span", { class: "flex-1" }),
              props.headerExtra,
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
            props.children
          ]
        }
      )
    }
  );
}

// lakebed-source:client/ui/Section.tsx
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

// lakebed-source:client/ui/Segmented.tsx
function Segmented(props) {
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

// lakebed-source:client/ui/Select.tsx
function Select(props) {
  const [open, setOpen] = d2(false);
  const [highlight, setHighlight] = d2(0);
  const [menuStyle, setMenuStyle] = d2(
    {}
  );
  const triggerRef = A2(null);
  const alignRight = (props.menuClass ?? "").includes("right-0");
  const selectedIndex = props.options.findIndex(
    (option) => option.value === props.value
  );
  const selected = props.options[selectedIndex];
  function placeMenu() {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const style = {
      position: "fixed",
      top: rect.bottom + 4,
      minWidth: rect.width,
      zIndex: 100
    };
    if (alignRight) {
      style.right = window.innerWidth - rect.right;
      style.left = "auto";
    } else {
      style.left = rect.left;
    }
    setMenuStyle(style);
  }
  function openMenu() {
    setHighlight(Math.max(0, selectedIndex));
    placeMenu();
    setOpen(true);
  }
  function choose(value) {
    props.onChange(value);
    setOpen(false);
  }
  h2(() => {
    if (!open) return;
    const onReposition = () => placeMenu();
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);
    return () => {
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [open, alignRight]);
  function onKeyDown(event) {
    event.stopPropagation();
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMenu();
      }
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlight(
        (index) => Math.min(props.options.length - 1, index + 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((index) => Math.max(0, index - 1));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const option = props.options[highlight];
      if (option) choose(option.value);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  }
  return /* @__PURE__ */ u3("div", { class: "relative", children: [
    /* @__PURE__ */ u3(
      "button",
      {
        ref: triggerRef,
        type: "button",
        title: props.title,
        disabled: props.disabled,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => open ? setOpen(false) : openMenu(),
        onKeyDown,
        class: `flex h-[26px] items-center justify-between gap-1.5 border px-2 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors disabled:opacity-35 ${open ? "border-[var(--acid)]/60 bg-[var(--panel)] text-[var(--paper)]" : "border-[var(--line)] bg-[var(--panel)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"} ${props.class ?? "w-full"}`,
        children: [
          /* @__PURE__ */ u3("span", { class: "truncate", children: selected?.label ?? props.value }),
          /* @__PURE__ */ u3(
            IChevronDown,
            {
              class: `h-3 w-3 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ u3(S, { children: [
      /* @__PURE__ */ u3(
        "div",
        {
          class: "fixed inset-0 z-[99]",
          onClick: () => setOpen(false)
        }
      ),
      /* @__PURE__ */ u3(
        "div",
        {
          role: "listbox",
          style: menuStyle,
          class: `pop max-h-60 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] py-0.5 shadow-2xl ${props.menuClass ?? ""}`,
          children: props.options.map((option, index) => {
            const isSelected = option.value === props.value;
            return /* @__PURE__ */ u3(
              "button",
              {
                type: "button",
                role: "option",
                "aria-selected": isSelected,
                onMouseEnter: () => setHighlight(index),
                onClick: () => choose(option.value),
                class: `flex w-full items-center justify-between gap-2 px-2 py-1 text-left font-mono text-[10px] uppercase tracking-[0.06em] ${index === highlight ? "bg-[var(--line)] text-[var(--paper)]" : isSelected ? "text-[var(--acid)]" : "text-[var(--mute)]"}`,
                children: [
                  /* @__PURE__ */ u3("span", { class: "truncate", children: option.label }),
                  isSelected && /* @__PURE__ */ u3(ICheck, { class: "h-3 w-3 flex-shrink-0 text-[var(--acid)]" })
                ]
              },
              option.value
            );
          })
        }
      )
    ] })
  ] });
}

// lakebed-source:client/ui/format.ts
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

// lakebed-source:client/ui/Slider.tsx
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

// lakebed-source:client/ui/Toggle.tsx
function Toggle(props) {
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": props.checked,
      disabled: props.disabled,
      onClick: () => props.onChange(!props.checked),
      class: "flex w-full items-center gap-3 border border-[var(--line)] bg-[var(--panel)] px-3 py-3 text-left transition-colors hover:border-[var(--line-hot)] disabled:opacity-40",
      children: [
        /* @__PURE__ */ u3("span", { class: "min-w-0 flex-1", children: [
          /* @__PURE__ */ u3("span", { class: "block font-mono text-[11px] text-[var(--paper)]", children: props.label }),
          props.hint && /* @__PURE__ */ u3("span", { class: "mt-1 block font-mono text-[9.5px] leading-relaxed text-[var(--mute)]", children: props.hint })
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

// lakebed-source:client/components/LayerPanel.tsx
var BLEND_OPTIONS = BLEND_MODES.map((mode) => ({
  value: mode,
  label: mode
}));
function LayerPanel(props) {
  const { layer, info } = props;
  const fx = layer.fx;
  return /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3(
      Section,
      {
        title: `Layer \xB7 ${layer.name}`,
        accent: true,
        actions: /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3(
            IconButton,
            {
              title: "Shuffle layer FX",
              tone: "accent",
              onClick: () => props.onReplaceFx(randomLayerFx(fx)),
              children: /* @__PURE__ */ u3(IDice, { class: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              title: "Reset layer FX",
              class: "font-mono text-[9px] uppercase text-[var(--mute)] hover:text-[var(--paper)]",
              onClick: () => props.onReplaceFx(resetLayerFxEffects(fx)),
              children: "reset"
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ u3("div", { class: "px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: [
            mediaKindLabel(layer.mediaKind),
            info && !info.missing && ` \xB7 ${info.width}\xD7${info.height}`,
            info?.missing ? " \xB7 missing on device" : ""
          ] }),
          /* @__PURE__ */ u3("div", { class: "px-3 py-[5px]", children: [
            /* @__PURE__ */ u3("div", { class: "mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: "Blend" }),
            /* @__PURE__ */ u3(
              Select,
              {
                value: fx.blend,
                options: BLEND_OPTIONS,
                onChange: (blend) => props.onPatch({ blend })
              }
            )
          ] }),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Opacity",
              value: fx.opacity,
              def: 1,
              onChange: (value) => props.onPatch({ opacity: value })
            }
          ),
          /* @__PURE__ */ u3(
            Segmented,
            {
              label: "Canvas fill",
              options: TILE_MODES,
              value: fx.tile,
              onChange: (index) => props.onPatch({ tile: index })
            }
          ),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Scale",
              value: fx.scale,
              min: 0.05,
              max: 6,
              def: 1,
              format: formatX,
              onChange: (value) => props.onPatch({ scale: value })
            }
          ),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Rotation",
              value: fx.rotation,
              min: -180,
              max: 180,
              def: 0,
              format: formatDeg,
              onChange: (value) => props.onPatch({ rotation: value })
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
          value: fx.warp,
          def: 0,
          onChange: (value) => props.onPatch({ warp: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Swirl",
          value: fx.swirl,
          def: 0,
          onChange: (value) => props.onPatch({ swirl: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Ripples",
          value: fx.ripple,
          def: 0,
          onChange: (value) => props.onPatch({ ripple: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Kaleidoscope",
          value: fx.kaleido,
          def: 0,
          onChange: (value) => props.onPatch({ kaleido: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Pixelate",
          value: fx.pixelate,
          def: 0,
          onChange: (value) => props.onPatch({ pixelate: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Lens",
          value: fx.bulge,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => props.onPatch({ bulge: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Mirror fold",
          value: fx.mirror,
          def: 0,
          onChange: (value) => props.onPatch({ mirror: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Layer color", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Hue",
          value: fx.hue,
          def: 0,
          onChange: (value) => props.onPatch({ hue: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Saturation",
          value: fx.saturation,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ saturation: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Contrast",
          value: fx.contrast,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ contrast: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Brightness",
          value: fx.brightness,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ brightness: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Invert",
          value: fx.invert,
          def: 0,
          onChange: (value) => props.onPatch({ invert: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Posterize",
          value: fx.posterize,
          def: 0,
          onChange: (value) => props.onPatch({ posterize: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Prism split",
          value: fx.chroma,
          def: 0,
          onChange: (value) => props.onPatch({ chroma: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Neon edges",
          value: fx.edges,
          def: 0,
          onChange: (value) => props.onPatch({ edges: value })
        }
      ),
      /* @__PURE__ */ u3("div", { class: "flex items-center gap-2 px-3 py-[5px]", children: [
        /* @__PURE__ */ u3(
          "input",
          {
            type: "color",
            value: fx.tintColor,
            onInput: (event) => props.onPatch({
              tintColor: event.currentTarget.value
            })
          }
        ),
        /* @__PURE__ */ u3("div", { class: "flex-1", children: /* @__PURE__ */ u3(
          Slider,
          {
            label: "Tint",
            value: fx.tintAmount,
            def: 0,
            onChange: (value) => props.onPatch({ tintAmount: value })
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Layer motion", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Spin",
          value: fx.spin,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => props.onPatch({ spin: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Drift",
          value: fx.drift,
          def: 0,
          onChange: (value) => props.onPatch({ drift: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Pulse",
          value: fx.pulse,
          def: 0,
          onChange: (value) => props.onPatch({ pulse: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Shimmer",
          value: fx.shimmer,
          def: 0,
          onChange: (value) => props.onPatch({ shimmer: value })
        }
      )
    ] })
  ] });
}

// lakebed-source:client/components/LayersSidebar.tsx
function LayersSidebar(props) {
  return /* @__PURE__ */ u3("aside", { class: "flex w-[212px] flex-shrink-0 flex-col border-r border-[var(--line)] bg-[var(--panel)]", children: [
    /* @__PURE__ */ u3("header", { class: "flex h-8 flex-shrink-0 items-center gap-2 border-b border-[var(--line)] px-3", children: [
      /* @__PURE__ */ u3("span", { class: "text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--mute)]", children: "Layers" }),
      /* @__PURE__ */ u3("span", { class: "font-mono text-[9px] text-[var(--mute)]", children: [
        props.layers.length,
        "/",
        MAX_LAYERS
      ] }),
      /* @__PURE__ */ u3("span", { class: "flex-1" }),
      /* @__PURE__ */ u3(
        IconButton,
        {
          title: "Import files",
          tone: "accent",
          onClick: props.onImport,
          children: /* @__PURE__ */ u3(IPlus, {})
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { class: "min-h-0 flex-1 overflow-y-auto py-1", children: [
      props.layers.length === 0 && /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          class: "mx-3 my-3 block w-[calc(100%-24px)] border border-dashed border-[var(--line)] px-3 py-6 text-center font-mono text-[10px] leading-relaxed text-[var(--mute)] hover:border-[var(--acid)]/50 hover:text-[var(--mute)]",
          onClick: props.onImport,
          children: "Drop, paste, or click to import anything"
        }
      ),
      props.layers.slice().reverse().map((layer) => {
        const meta = props.imageInfo[layer.imageId];
        const isSelected = layer.id === props.selectedId;
        return /* @__PURE__ */ u3(
          "div",
          {
            class: `group flex cursor-pointer items-center gap-2 px-2 py-1.5 ${isSelected ? "bg-[var(--acid)]/10" : "hover:bg-[var(--line)]"} ${layer.fx.visible ? "" : "opacity-45"}`,
            onClick: () => props.onSelect(layer.id),
            children: [
              /* @__PURE__ */ u3(
                IconButton,
                {
                  title: layer.fx.visible ? "Hide" : "Show",
                  class: "flex-shrink-0",
                  onClick: (event) => {
                    event.stopPropagation();
                    props.onToggleVisible(layer);
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
                  IconButton,
                  {
                    title: "Raise",
                    onClick: (event) => {
                      event.stopPropagation();
                      props.onMove(layer.id, 1);
                    },
                    children: /* @__PURE__ */ u3(IUp, { class: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ u3(
                  IconButton,
                  {
                    title: "Lower",
                    onClick: (event) => {
                      event.stopPropagation();
                      props.onMove(layer.id, -1);
                    },
                    children: /* @__PURE__ */ u3(IDown, { class: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ u3(
                  IconButton,
                  {
                    title: "Duplicate",
                    onClick: (event) => {
                      event.stopPropagation();
                      props.onDuplicate(layer.id);
                    },
                    children: /* @__PURE__ */ u3(ICopy, { class: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ u3(
                  IconButton,
                  {
                    title: "Delete",
                    tone: "danger",
                    onClick: (event) => {
                      event.stopPropagation();
                      props.onRemove(layer.id);
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
    ] })
  ] });
}

// lakebed-source:client/playmap.ts
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

// lakebed-source:client/components/HelpModal.tsx
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
    Modal,
    {
      title: "Play mode \xB7 controls",
      onClose: props.onClose,
      maxWidth: "max-w-[840px]",
      headerExtra: /* @__PURE__ */ u3("span", { class: "hidden font-mono text-[9px] uppercase tracking-wide text-[var(--mute)] sm:inline", children: "undo / redo covers every change" }),
      children: [
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
                ["click a layer", "applies to that layer only"],
                ["shift+click", "subtract instead of add"],
                ["double-click", "cycle kaleidoscope"],
                ["drag + release", "set echo trail direction"],
                [
                  "right-click",
                  "calm FX on the world or the layer under the cursor"
                ],
                ["wheel", "hue \xB7 shift+wheel = saturation"]
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
                  "raise an effect \xB7 shift lowers \xB7 hold to ramp"
                ],
                [
                  "home row",
                  "set all layers to a hue \xB7 shift sets background"
                ],
                [
                  "bottom row",
                  "reroll layer FX \xB7 shift resets"
                ],
                ["[ ]", "time slower / faster \xB7 \\ solarize"],
                ["arrows", "\u2190 \u2192 hue \xB7 \u2191 \u2193 saturation"],
                ["backspace", "reset world FX"]
              ]
            }
          ),
          /* @__PURE__ */ u3(
            HelpList,
            {
              title: "Global",
              items: [
                ["esc", "arrange mode"],
                ["P", "play mode (from arrange)"],
                ["space", "freeze time"],
                ["tab", "hide UI"],
                ["\u2318Z / \u21E7\u2318Z", "undo / redo"],
                ["field", "cursor mode under Cursor settings"]
              ]
            }
          )
        ] })
      ]
    }
  );
}

// lakebed-source:client/components/SettingsModal.tsx
function SettingsModal(props) {
  return /* @__PURE__ */ u3(Modal, { title: "Settings", onClose: props.onClose, children: /* @__PURE__ */ u3("div", { class: "space-y-3 p-4", children: [
    /* @__PURE__ */ u3("p", { class: "font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: "Recording" }),
    /* @__PURE__ */ u3(
      Toggle,
      {
        label: "Mic audio in recording",
        checked: props.settings.recordMicAudio,
        disabled: props.recording,
        onChange: (checked) => props.onChange({ recordMicAudio: checked })
      }
    )
  ] }) });
}

// lakebed-source:client/exporting.ts
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
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
function exportFilename(sceneName, extension) {
  const project = cleanName(sceneName, "vaudio-2").replace(/[^\w\-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "vaudio-2";
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

// lakebed-source:client/components/ScenesMenu.tsx
function ScenesMenu(props) {
  return /* @__PURE__ */ u3("div", { class: "relative", children: [
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Your saved scenes",
        active: props.open,
        onClick: props.onToggle,
        label: "Scenes",
        children: /* @__PURE__ */ u3(IFolder, {})
      }
    ),
    props.open && /* @__PURE__ */ u3(S, { children: [
      /* @__PURE__ */ u3("div", { class: "fixed inset-0 z-[99]", onClick: props.onClose }),
      /* @__PURE__ */ u3("div", { class: "pop absolute right-0 top-8 z-[100] max-h-[60vh] w-64 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] p-1.5 shadow-2xl", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            class: "mb-1 flex w-full items-center gap-2 border border-[var(--line)] px-2.5 py-2 text-left hover:border-[var(--line-hot)] hover:bg-[var(--line)]",
            onClick: props.onNew,
            children: [
              /* @__PURE__ */ u3(IPlus, { class: "h-3.5 w-3.5 text-[var(--acid)]" }),
              /* @__PURE__ */ u3("span", { class: "font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--paper)]", children: "New scene" })
            ]
          }
        ),
        props.scenes.length === 0 && /* @__PURE__ */ u3("p", { class: "p-3 font-mono text-[10px] text-[var(--mute)]", children: [
          "No saved scenes yet.",
          props.isGuest ? " (Guest sessions save locally per deploy.)" : ""
        ] }),
        props.scenes.map((meta) => /* @__PURE__ */ u3(
          "div",
          {
            class: "group flex items-center gap-2 p-1.5 hover:bg-[var(--line)]",
            children: [
              /* @__PURE__ */ u3(
                "button",
                {
                  type: "button",
                  class: "flex min-w-0 flex-1 items-center gap-2 text-left",
                  onClick: () => props.onLoad(meta.id),
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
                IconButton,
                {
                  title: "Delete scene",
                  tone: "danger",
                  class: "opacity-0 group-hover:opacity-100",
                  onClick: () => props.onDelete(meta.id),
                  children: /* @__PURE__ */ u3(ITrash, { class: "h-3.5 w-3.5" })
                }
              )
            ]
          },
          meta.id
        ))
      ] })
    ] })
  ] });
}

// lakebed-source:client/components/TopBar.tsx
var RESOLUTION_OPTIONS = EXPORT_RESOLUTIONS.map((item) => ({
  value: item.id,
  label: item.label
}));
function TopBar(props) {
  return /* @__PURE__ */ u3("header", { class: "relative z-50 flex h-11 flex-shrink-0 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--panel)] px-2.5", children: [
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
        value: props.sceneName,
        onInput: (event) => props.onRename(
          event.currentTarget.value
        ),
        onBlur: (event) => props.onRenameCommit(
          event.currentTarget.value
        )
      }
    ),
    /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Arrange layers",
        active: props.stageMode === "arrange",
        onClick: () => props.onStageMode("arrange"),
        label: "Arrange",
        children: /* @__PURE__ */ u3(IMove, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Play the canvas with your cursor (P)",
        active: props.stageMode === "play",
        onClick: () => props.onStageMode("play"),
        label: "Play",
        children: /* @__PURE__ */ u3(ISpark, {})
      }
    ),
    /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Randomize everything",
        onClick: props.onChaos,
        label: "Chaos",
        children: /* @__PURE__ */ u3(IDice, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Nudge the world somewhere new",
        onClick: props.onMutate,
        label: "Mutate",
        children: /* @__PURE__ */ u3(IWand, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: props.frozen ? "Resume time (Space)" : "Freeze time (Space)",
        active: props.frozen,
        onClick: props.onToggleFrozen,
        children: props.frozen ? /* @__PURE__ */ u3(IPlay, {}) : /* @__PURE__ */ u3(IPause, {})
      }
    ),
    /* @__PURE__ */ u3("span", { class: "flex-1" }),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Save scene to your library",
        onClick: props.onSave,
        label: "Save",
        children: /* @__PURE__ */ u3(ISave, {})
      }
    ),
    /* @__PURE__ */ u3(
      ScenesMenu,
      {
        open: props.scenesOpen,
        onToggle: props.onToggleScenes,
        onClose: props.onCloseScenes,
        scenes: props.scenes,
        isGuest: props.isGuest,
        onNew: props.onNewScene,
        onLoad: props.onLoadScene,
        onDelete: props.onDeleteScene
      }
    ),
    /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
    /* @__PURE__ */ u3(
      Button,
      {
        title: props.micActive ? "Stop microphone" : "Audio-react from your microphone",
        active: props.micActive,
        onClick: props.onToggleMic,
        children: /* @__PURE__ */ u3(IMic, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: props.recording ? "Stop recording" : props.recordMicAudio ? "Record canvas + mic" : "Record the canvas to video",
        danger: props.recording,
        onClick: props.onToggleRecording,
        children: props.recording ? /* @__PURE__ */ u3("span", { class: "rec-dot inline-block h-2.5 w-2.5 rounded-full bg-[#c45b6a]" }) : /* @__PURE__ */ u3("span", { class: "inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-current" })
      }
    ),
    /* @__PURE__ */ u3(
      Select,
      {
        title: "Export / recording resolution (keeps stage aspect)",
        value: props.exportRes,
        options: RESOLUTION_OPTIONS,
        disabled: props.recording,
        onChange: props.onExportRes,
        class: "w-[78px]",
        menuClass: "right-0"
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: `Export PNG at ${EXPORT_RESOLUTIONS.find((item) => item.id === props.exportRes)?.label ?? "selected"} resolution`,
        onClick: props.onExportPng,
        children: /* @__PURE__ */ u3(IDownload, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Settings",
        active: props.settingsOpen,
        onClick: props.onToggleSettings,
        children: /* @__PURE__ */ u3(ISettings, {})
      }
    ),
    /* @__PURE__ */ u3(
      Button,
      {
        title: "Instrument manual (?)",
        active: props.helpOpen,
        onClick: props.onToggleHelp,
        children: /* @__PURE__ */ u3("span", { class: "grid h-[15px] w-[15px] place-items-center font-mono text-[11px] font-bold leading-none", children: "?" })
      }
    ),
    /* @__PURE__ */ u3(Button, { title: "Hide interface (Tab)", onClick: props.onHideUi, children: /* @__PURE__ */ u3(IPanel, {}) })
  ] });
}

// lakebed-source:client/components/WorldPanel.tsx
function WorldPanel(props) {
  const g2 = props.global;
  return /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3(Section, { title: "Space", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Fluid warp",
          value: g2.warp,
          def: 0,
          onChange: (value) => props.onPatch({ warp: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Swirl",
          value: g2.swirl,
          def: 0,
          onChange: (value) => props.onPatch({ swirl: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Ripples",
          value: g2.ripple,
          def: 0,
          onChange: (value) => props.onPatch({ ripple: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Tunnel zoom",
          value: g2.zoom,
          def: 0,
          onChange: (value) => props.onPatch({ zoom: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Kaleidoscope",
          value: g2.kaleido,
          def: 0,
          onChange: (value) => props.onPatch({ kaleido: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Mirror fold",
          value: g2.mirror,
          def: 0,
          onChange: (value) => props.onPatch({ mirror: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Feedback", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Feedback",
          value: g2.feedback,
          def: 0,
          onChange: (value) => props.onPatch({ feedback: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Trail length",
          value: g2.trails,
          def: 0.6,
          onChange: (value) => props.onPatch({ trails: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo zoom",
          value: g2.fbZoom,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => props.onPatch({ fbZoom: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo spin",
          value: g2.fbRotate,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => props.onPatch({ fbRotate: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo hue",
          value: g2.fbHue,
          def: 0,
          onChange: (value) => props.onPatch({ fbHue: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "World color", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Prism split",
          value: g2.chroma,
          def: 0,
          onChange: (value) => props.onPatch({ chroma: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Hue orbit",
          value: g2.hueOrbit,
          def: 0,
          onChange: (value) => props.onPatch({ hueOrbit: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Saturation",
          value: g2.saturation,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ saturation: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Contrast",
          value: g2.contrast,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ contrast: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Solarize",
          value: g2.solarize,
          def: 0,
          onChange: (value) => props.onPatch({ solarize: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Signal", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Grain",
          value: g2.grain,
          def: 0,
          onChange: (value) => props.onPatch({ grain: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Scanlines",
          value: g2.scanlines,
          def: 0,
          onChange: (value) => props.onPatch({ scanlines: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Vignette",
          value: g2.vignette,
          def: 0.22,
          onChange: (value) => props.onPatch({ vignette: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Strobe",
          value: g2.strobe,
          def: 0,
          onChange: (value) => props.onPatch({ strobe: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Motion & audio", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Time speed",
          value: g2.speed,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => props.onPatch({ speed: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Audio react",
          value: g2.audioReact,
          def: 0,
          onChange: (value) => props.onPatch({ audioReact: value })
        }
      )
    ] })
  ] });
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

// lakebed-source:client/frame.ts
function emptyKick() {
  return { zoom: 0, strobe: 0, chroma: 0, ripple: 0, swirl: 0 };
}
function layerSeed(id) {
  let hash = 0;
  for (let i3 = 0; i3 < id.length; i3++)
    hash = hash * 31 + id.charCodeAt(i3) >>> 0;
  return hash % 1e3 / 1e3;
}
function buildFrameState(args) {
  const { scene, info, time, audio, kick } = args;
  const { width, height } = args.stageSize;
  const aspect = Math.max(0.05, width / Math.max(1, height));
  const layers = scene.layers.filter((layer) => layer.fx.visible).map((layer) => {
    const fx = layer.fx;
    const seed = layerSeed(layer.id);
    const meta = info[layer.imageId];
    const imageAspect = meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
    const fitHeight = Math.min(1, aspect / imageAspect);
    const pulse = 1 + fx.pulse * (0.16 * Math.sin(time * 2.2 + seed * 20) + audio * scene.global.audioReact * 0.5);
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
  const g2 = scene.global;
  return {
    time,
    audio,
    pointer: args.pointer,
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
function hitLayer(scene, info, stageSize, sceneX, sceneY) {
  const { width, height } = stageSize;
  const aspect = Math.max(0.05, width / Math.max(1, height));
  for (let i3 = scene.layers.length - 1; i3 >= 0; i3--) {
    const layer = scene.layers[i3];
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
function selectionBoxFor(layer, meta, stageSize) {
  const { width, height } = stageSize;
  if (width < 2) return null;
  const aspect = width / Math.max(1, height);
  const imageAspect = meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
  const fitHeight = Math.min(1, aspect / imageAspect);
  const boxWidth = fitHeight * imageAspect * layer.fx.scale * height;
  const boxHeight = fitHeight * layer.fx.scale * height;
  const centerX = (0.5 + layer.fx.x / aspect) * width;
  const centerY = (0.5 - layer.fx.y) * height;
  return {
    boxWidth,
    boxHeight,
    centerX,
    centerY,
    rotation: layer.fx.rotation
  };
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

// lakebed-source:client/hooks/useMediaLibrary.ts
function useMediaLibrary(deps) {
  const [imageInfo, setImageInfo] = d2({});
  const imageInfoRef = A2(imageInfo);
  imageInfoRef.current = imageInfo;
  const mediaRuntimesRef = A2(/* @__PURE__ */ new Map());
  const audioContextRef = A2(null);
  h2(() => {
    return () => {
      void audioContextRef.current?.close();
    };
  }, []);
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
  function forgetImage(imageId) {
    disposeMediaRuntime(imageId);
    deps.engineRef.current?.removeImage(imageId);
    setImageInfo((info) => {
      const next = { ...info };
      delete next[imageId];
      return next;
    });
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
  async function activateMedia(imageId, blob, kind) {
    disposeMediaRuntime(imageId);
    const engine = deps.engineRef.current;
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
      if (deps.sceneRef.current.layers.length + added >= MAX_LAYERS) {
        deps.showToast(`Layer limit is ${MAX_LAYERS}`);
        break;
      }
      const kind = classifyFile(file);
      try {
        const imageId = newId("img");
        await putImageBlob(imageId, file).catch(() => void 0);
        const info = await activateMedia(imageId, file, kind);
        setImageInfo((previous) => ({ ...previous, [imageId]: info }));
        const layer = {
          id: newId("layer"),
          imageId,
          name: cleanName(
            defaultLayerName(kind, file.name),
            mediaKindLabel(kind)
          ),
          mediaKind: kind,
          fx: {
            ...DEFAULT_LAYER_FX,
            x: added * 0.07,
            y: added * -0.07
          }
        };
        deps.setScene((previous) => ({
          ...previous,
          layers: [...previous.layers, layer]
        }));
        deps.setSelectedId(layer.id);
        if (kind === "audio") importedAudio = true;
        added++;
      } catch {
        deps.showToast(
          `Could not import ${mediaKindLabel(kind).toLowerCase()}`
        );
      }
    }
    if (importedAudio && deps.sceneRef.current.global.audioReact < 0.25) {
      deps.onAudioImported();
    }
  }
  async function hydrateSceneImages(target) {
    const engine = deps.engineRef.current;
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
        const info = await activateMedia(imageId, blob, resolved);
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
  return {
    imageInfo,
    imageInfoRef,
    audioContextRef,
    importFiles,
    hydrateSceneImages,
    syncLiveMediaTextures,
    disposeAllMediaRuntimes,
    forgetImage
  };
}

// lakebed-source:client/hooks/useMic.ts
function useMic(deps) {
  const [micActive, setMicActive] = d2(false);
  const micStreamRef = A2(null);
  const analyserRef = A2(null);
  h2(() => {
    return () => {
      for (const track of micStreamRef.current?.getTracks() ?? [])
        track.stop();
    };
  }, []);
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
      if (!deps.audioContextRef.current)
        deps.audioContextRef.current = new AudioContext();
      await deps.audioContextRef.current.resume();
      const analyser = deps.audioContextRef.current.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.68;
      deps.audioContextRef.current.createMediaStreamSource(stream).connect(analyser);
      analyserRef.current = analyser;
      setMicActive(true);
      if (deps.sceneRef.current.global.audioReact < 0.3)
        deps.updateGlobal({ audioReact: 0.7 });
      if (options?.toastOnSuccess !== false)
        deps.showToast("Mic live \u2014 audio drives the shader");
      return true;
    } catch {
      if (options?.toastOnError !== false)
        deps.showToast("Microphone was blocked");
      return false;
    }
  }
  async function toggleMic() {
    if (micActive) {
      if (deps.recordingMicRef.current) {
        deps.showToast("Can't stop mic while recording with audio");
        return;
      }
      for (const track of micStreamRef.current?.getTracks() ?? [])
        track.stop();
      micStreamRef.current = null;
      analyserRef.current = null;
      deps.audioLevelRef.current = 0;
      setMicActive(false);
      return;
    }
    await ensureMic();
  }
  return { micActive, micStreamRef, analyserRef, ensureMic, toggleMic };
}

// lakebed-source:client/hooks/usePlayMode.ts
function usePlayMode(deps) {
  const kickRef = A2(emptyKick());
  function hitLayerAt(sceneX, sceneY) {
    return hitLayer(
      deps.sceneRef.current,
      deps.imageInfoRef.current,
      deps.stageSizeRef.current,
      sceneX,
      sceneY
    );
  }
  function addKick(patch) {
    const kick = kickRef.current;
    for (const key of Object.keys(patch)) {
      kick[key] = Math.min(0.9, kick[key] + (patch[key] ?? 0));
    }
  }
  function stepGlobal(param, delta) {
    deps.setScene((previous) => {
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
    if (paintBackground || deps.sceneRef.current.layers.length === 0) {
      deps.setScene((previous) => ({
        ...previous,
        global: {
          ...previous.global,
          bgA: hslToHex(hueDeg, 0.5, 0.09),
          bgB: hslToHex((hueDeg + 45) % 360, 0.55, 0.3)
        }
      }));
    } else {
      const hue = index / count;
      deps.setScene((previous) => ({
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
    const layer = deps.sceneRef.current.layers[index];
    if (!layer) return;
    deps.replaceLayerFx(
      layer.id,
      reset ? resetLayerFxEffects(layer.fx) : randomLayerFx(layer.fx)
    );
    deps.setSelectedId(layer.id);
    addKick({ ripple: 0.14, strobe: 0.06 });
  }
  function washWorld() {
    deps.setScene((previous) => ({
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
    deps.engineRef.current?.clearFeedback();
  }
  function handlePlayKey(event) {
    const code = event.code;
    if (event.key === "Escape") {
      deps.setStageMode("arrange");
      return;
    }
    const presetIndex = PLAY_PRESET_CODES.indexOf(code);
    if (presetIndex >= 0 && presetIndex < WORLD_PRESETS.length) {
      event.preventDefault();
      if (event.repeat) return;
      const preset = WORLD_PRESETS[presetIndex];
      deps.updateGlobal(preset.global);
      deps.engineRef.current?.clearFeedback();
      addKick({ strobe: 0.22, zoom: 0.08 });
      deps.showToast(`${preset.code} \xB7 ${preset.name}`);
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
      deps.showToast("Washed the world clean");
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
    const global = deps.sceneRef.current.global;
    const mode = Math.round(global.pointerMode);
    const reach = Math.min(1, Math.hypot(u4 - 0.5, v3 - 0.5) / 0.62);
    const strength = (0.05 + 0.13 * reach) * (subtract ? -1 : 1);
    const { width, height } = deps.stageSizeRef.current;
    const aspect = Math.max(0.05, width / Math.max(1, height));
    const hit = hitLayerAt((u4 - 0.5) * aspect, 0.5 - v3);
    if (hit) {
      if (mode === 1) {
        deps.updateLayerFx(hit.id, {
          bulge: clamp(hit.fx.bulge - strength * 1.4, -1, 1)
        });
      } else {
        const param = mode === 0 ? "swirl" : mode === 2 ? "chroma" : "warp";
        const current = hit.fx[param];
        deps.updateLayerFx(hit.id, {
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
    const current = deps.sceneRef.current.global.kaleido;
    const next = current < 0.1 ? 0.3 : current < 0.45 ? 0.6 : current < 0.75 ? 0.85 : 0;
    deps.updateGlobal({ kaleido: next });
    addKick({ swirl: 0.16, strobe: 0.08 });
  }
  function soothePlay(sceneX, sceneY) {
    const hit = hitLayerAt(sceneX, sceneY);
    if (hit) {
      deps.setScene((previous) => ({
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
    deps.setScene((previous) => {
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
    deps.setScene((previous) => {
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
  return {
    kickRef,
    addKick,
    stepGlobal,
    handlePlayKey,
    stampTap,
    stepKaleido,
    soothePlay,
    throwEcho
  };
}

// lakebed-source:client/hooks/useRecorder.ts
function useRecorder(deps) {
  const [recording, setRecording] = d2(false);
  const [recordingWithMic, setRecordingWithMic] = d2(false);
  const [exportRes, setExportRes] = d2("1080");
  const exportResRef = A2(exportRes);
  exportResRef.current = exportRes;
  const exportLockRef = A2(
    null
  );
  const recorderRef = A2(null);
  const chunksRef = A2([]);
  h2(() => {
    return () => {
      if (recorderRef.current?.state === "recording")
        recorderRef.current.stop();
    };
  }, []);
  function restoreLiveCanvasSize() {
    const engine = deps.engineRef.current;
    const stage = deps.stageRef.current;
    if (!engine || !stage) return;
    const rect = stage.getBoundingClientRect();
    deps.stageSizeRef.current = { width: rect.width, height: rect.height };
    engine.resize(rect.width, rect.height);
    engine.setPixelRatioCap(deps.qualityRef.current);
  }
  function applyExportCanvasSize(resolutionId, screenScale = 1) {
    const engine = deps.engineRef.current;
    if (!engine) return null;
    const size = resolveExportSize(
      resolutionId,
      deps.stageSizeRef.current,
      screenScale
    );
    exportLockRef.current = size;
    engine.resize(size.width, size.height);
    engine.setPixelRatioCap(1);
    return size;
  }
  async function toggleRecording() {
    const canvas = deps.canvasRef.current;
    const engine = deps.engineRef.current;
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
    let includeMic = deps.settingsRef.current.recordMicAudio;
    if (includeMic) {
      const ok = await deps.ensureMic({
        toastOnSuccess: false,
        toastOnError: true
      });
      if (!ok) includeMic = false;
    }
    engine.render(deps.buildFrame());
    const stream = canvas.captureStream(60);
    if (includeMic) {
      for (const track of deps.micStreamRef.current?.getAudioTracks() ?? []) {
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
      deps.recordingMicRef.current = includeMic;
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
        deps.recordingMicRef.current = false;
        exportLockRef.current = null;
        restoreLiveCanvasSize();
        downloadBlob(
          blob,
          exportFilename(deps.sceneRef.current.name, extension)
        );
        recorderRef.current = null;
        setRecordingWithMic(false);
        setRecording(false);
      };
      recorder.start(250);
      recorderRef.current = recorder;
      setRecordingWithMic(includeMic);
      setRecording(true);
      deps.showToast(
        includeMic ? `Recording ${size.width}\xD7${size.height} \xB7 mic` : `Recording ${size.width}\xD7${size.height}`
      );
    } catch {
      deps.recordingMicRef.current = false;
      setRecordingWithMic(false);
      exportLockRef.current = null;
      restoreLiveCanvasSize();
      deps.showToast("Recording is not supported here");
    }
  }
  function exportPng() {
    const engine = deps.engineRef.current;
    const canvas = deps.canvasRef.current;
    if (!engine || !canvas) return;
    const size = applyExportCanvasSize(exportResRef.current, 3);
    if (!size) return;
    engine.render(deps.buildFrame());
    canvas.toBlob((blob) => {
      exportLockRef.current = null;
      restoreLiveCanvasSize();
      if (blob) {
        downloadBlob(
          blob,
          exportFilename(deps.sceneRef.current.name, "png")
        );
        deps.showToast(`Exported ${size.width}\xD7${size.height}`);
      } else deps.showToast("Export failed");
    }, "image/png");
  }
  return {
    recording,
    recordingWithMic,
    exportRes,
    setExportRes,
    exportLockRef,
    toggleRecording,
    exportPng
  };
}

// lakebed-source:client/hooks/useSceneHistory.ts
function useSceneHistory(deps) {
  const historyRef = A2({
    stack: [],
    index: -1
  });
  const skipRef = A2(false);
  h2(() => {
    if (skipRef.current) {
      skipRef.current = false;
      return;
    }
    const timer = window.setTimeout(() => {
      const history = historyRef.current;
      const snapshot = encodeScene(deps.scene);
      if (history.stack[history.index] === snapshot) return;
      history.stack = history.stack.slice(0, history.index + 1);
      history.stack.push(snapshot);
      if (history.stack.length > 80) history.stack.shift();
      history.index = history.stack.length - 1;
    }, 400);
    return () => window.clearTimeout(timer);
  }, [deps.scene]);
  function applySnapshot(snapshot) {
    skipRef.current = true;
    deps.restoreScene(decodeScene(snapshot));
  }
  function undoScene() {
    const history = historyRef.current;
    const current = encodeScene(deps.sceneRef.current);
    if (history.index >= 0 && history.stack[history.index] !== current) {
      history.stack = history.stack.slice(0, history.index + 1);
      history.stack.push(current);
      history.index++;
    }
    if (history.index <= 0) {
      deps.showToast("Nothing to undo");
      return;
    }
    history.index--;
    applySnapshot(history.stack[history.index]);
    deps.showToast("Undo");
  }
  function redoScene() {
    const history = historyRef.current;
    if (history.index >= history.stack.length - 1) {
      deps.showToast("Nothing to redo");
      return;
    }
    history.index++;
    applySnapshot(history.stack[history.index]);
    deps.showToast("Redo");
  }
  return { undoScene, redoScene };
}

// lakebed-source:client/hooks/useToast.ts
function useToast() {
  const [toast, setToast] = d2("");
  const timerRef = A2(0);
  function showToast(message) {
    setToast(message);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setToast(""), 2600);
  }
  return { toast, showToast };
}

// lakebed-source:client/theme.ts
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
`;

// lakebed-source:client/index.tsx
function emptyScene() {
  return { name: "Untitled", layers: [], global: { ...DEFAULT_GLOBAL_FX } };
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
  const [stageMode, setStageMode] = d2("arrange");
  const [uiHidden, setUiHidden] = d2(false);
  const [frozen, setFrozen] = d2(false);
  const [fullscreen, setFullscreen] = d2(false);
  const [scenesOpen, setScenesOpen] = d2(false);
  const [helpOpen, setHelpOpen] = d2(false);
  const [settingsOpen, setSettingsOpen] = d2(false);
  const [settings, setSettings] = d2(() => loadSettings());
  const [serverSceneId, setServerSceneId] = d2("");
  const [dragOver, setDragOver] = d2(false);
  const [engineError, setEngineError] = d2("");
  const stageRef = A2(null);
  const canvasRef = A2(null);
  const fileRef = A2(null);
  const engineRef = A2(null);
  const sceneRef = A2(scene);
  const stageModeRef = A2(stageMode);
  const frozenRef = A2(frozen);
  const timeRef = A2(Math.random() * 90);
  const audioLevelRef = A2(0);
  const spectrumRef = A2(new Uint8Array(128));
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
  const dragRafRef = A2(0);
  const dragPointRef = A2({ x: 0, y: 0 });
  const helpOpenRef = A2(false);
  const settingsOpenRef = A2(false);
  const settingsRef = A2(settings);
  const recordingMicRef = A2(false);
  const playGestureRef = A2(null);
  const lastTapAtRef = A2(0);
  sceneRef.current = scene;
  stageModeRef.current = stageMode;
  frozenRef.current = frozen;
  helpOpenRef.current = helpOpen;
  settingsOpenRef.current = settingsOpen;
  settingsRef.current = settings;
  const { toast, showToast } = useToast();
  const media = useMediaLibrary({
    engineRef,
    sceneRef,
    setScene,
    setSelectedId,
    showToast,
    onAudioImported: () => updateGlobal({ audioReact: 0.55 })
  });
  const mic = useMic({
    audioContextRef: media.audioContextRef,
    sceneRef,
    audioLevelRef,
    updateGlobal,
    showToast,
    recordingMicRef
  });
  const playMode = usePlayMode({
    sceneRef,
    setScene,
    updateGlobal,
    updateLayerFx,
    replaceLayerFx,
    setSelectedId,
    setStageMode,
    engineRef,
    stageSizeRef,
    imageInfoRef: media.imageInfoRef,
    showToast
  });
  const recorder = useRecorder({
    canvasRef,
    engineRef,
    stageRef,
    stageSizeRef,
    qualityRef,
    sceneRef,
    settingsRef,
    micStreamRef: mic.micStreamRef,
    ensureMic: mic.ensureMic,
    recordingMicRef,
    buildFrame,
    showToast
  });
  const history = useSceneHistory({
    scene,
    sceneRef,
    restoreScene,
    showToast
  });
  const selected = scene.layers.find((layer) => layer.id === selectedId) ?? null;
  const sceneList = scenesQuery?.items ?? [];
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
        media.forgetImage(removed.imageId);
      }
      return { ...previous, layers };
    });
    setSelectedId((current) => current === layerId ? null : current);
  }
  function restoreScene(restored) {
    setScene(restored);
    sceneRef.current = restored;
    setSelectedId(
      (current) => restored.layers.some((layer) => layer.id === current) ? current : null
    );
    engineRef.current?.clearFeedback();
    return media.hydrateSceneImages(restored);
  }
  function chaosScene() {
    setScene((previous) => ({
      ...previous,
      global: randomGlobalFx(previous.global),
      layers: previous.layers.map((layer) => ({
        ...layer,
        fx: randomLayerFx(layer.fx)
      }))
    }));
    engineRef.current?.clearFeedback();
  }
  function updateSettings(patch) {
    setSettings((previous) => {
      const next = { ...previous, ...patch };
      saveSettings(next);
      return next;
    });
  }
  function buildFrame() {
    return buildFrameState({
      scene: sceneRef.current,
      info: media.imageInfoRef.current,
      stageSize: stageSizeRef.current,
      time: timeRef.current,
      audio: audioLevelRef.current,
      pointer: pointerRef.current,
      kick: playMode.kickRef.current
    });
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
      const lock = recorder.exportLockRef.current;
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
      const analyser = mic.analyserRef.current;
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
      const mediaLevel = media.syncLiveMediaTextures(
        engine,
        timeRef.current
      );
      target = Math.max(target, mediaLevel);
      audioLevelRef.current += (target - audioLevelRef.current) * 0.28;
      const kick = playMode.kickRef.current;
      const kickDecay = Math.exp(-dt * 4.5);
      kick.zoom *= kickDecay;
      kick.strobe *= kickDecay;
      kick.chroma *= kickDecay;
      kick.ripple *= kickDecay;
      kick.swirl *= kickDecay;
      if (!recorder.exportLockRef.current) {
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
      void media.hydrateSceneImages(saved);
    }
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      media.disposeAllMediaRuntimes();
      engine.destroy();
      engineRef.current = null;
    };
  }, []);
  h2(() => {
    const timer = window.setTimeout(() => saveAutosave(scene), 350);
    return () => window.clearTimeout(timer);
  }, [scene]);
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
          if (event.shiftKey) history.redoScene();
          else history.undoScene();
        } else if (shortcut === "y") {
          event.preventDefault();
          history.redoScene();
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
        playMode.handlePlayKey(event);
        return;
      }
      const key = event.key.toLowerCase();
      if (key === "p" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setStageMode("play");
      }
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
        void media.importFiles(files);
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);
  function stagePoint(event) {
    const stage = stageRef.current;
    const rect = stage ? stage.getBoundingClientRect() : { left: 0, top: 0, width: 1, height: 1 };
    const u4 = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const v3 = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    const aspect = rect.width / Math.max(1, rect.height);
    return { sceneX: (u4 - 0.5) * aspect, sceneY: 0.5 - v3, u: u4, v: v3 };
  }
  function hitLayerAt(sceneX, sceneY) {
    return hitLayer(
      sceneRef.current,
      media.imageInfoRef.current,
      stageSizeRef.current,
      sceneX,
      sceneY
    );
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
        playMode.soothePlay(sceneX2, sceneY2);
        playMode.addKick({ ripple: 0.08 });
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
    const hit = hitLayerAt(sceneX, sceneY);
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
        gesture.path += Math.hypot(
          u4 - gesture.lastU,
          v3 - gesture.lastV
        );
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
          playMode.stepKaleido();
        } else {
          lastTapAtRef.current = now;
          playMode.stampTap(u4, v3, gesture.shift || event.shiftKey);
        }
      } else if (gesture.path > 0.03) {
        playMode.throwEcho(gesture, u4, v3);
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
        if (event.shiftKey)
          playMode.stepGlobal("saturation", -delta * 12e-4);
        else playMode.stepGlobal("hueOrbit", -delta * 6e-4);
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
            layer.fx.scale * Math.exp(-event.deltaY * 45e-4),
            0.05,
            6
          )
        });
      }
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [selectedId]);
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
      restoreScene(loaded);
      setSelectedId(null);
      setServerSceneId(id);
      setScenesOpen(false);
      await media.hydrateSceneImages(loaded);
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
  function newScene() {
    const blank = emptyScene();
    restoreScene(blank);
    setSelectedId(null);
    setServerSceneId("");
    setScenesOpen(false);
    setStageMode("arrange");
    showToast("New scene");
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
    return selectionBoxFor(
      selected,
      media.imageInfo[selected.imageId],
      stageSizeRef.current
    );
  }, [selected, media.imageInfo, stageMode, scene]);
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
    !uiHidden && /* @__PURE__ */ u3(
      TopBar,
      {
        sceneName: scene.name,
        onRename: (name) => setScene((previous) => ({ ...previous, name })),
        onRenameCommit: (name) => setScene((previous) => ({
          ...previous,
          name: cleanName(name, "Untitled")
        })),
        stageMode,
        onStageMode: setStageMode,
        frozen,
        onToggleFrozen: () => setFrozen((previous) => !previous),
        onChaos: chaosScene,
        onMutate: () => updateGlobal(mutateGlobalFx(scene.global)),
        onSave: () => void saveToServer(),
        scenesOpen,
        onToggleScenes: () => setScenesOpen((previous) => !previous),
        onCloseScenes: () => setScenesOpen(false),
        scenes: sceneList,
        isGuest: auth2.isGuest,
        onNewScene: newScene,
        onLoadScene: (id) => void loadFromServer(id),
        onDeleteScene: (id) => {
          void deleteSceneMutation(id).catch(
            () => showToast("Delete failed")
          );
          if (id === serverSceneId) setServerSceneId("");
        },
        micActive: mic.micActive,
        onToggleMic: () => void mic.toggleMic(),
        recording: recorder.recording,
        recordMicAudio: settings.recordMicAudio,
        onToggleRecording: () => void recorder.toggleRecording(),
        exportRes: recorder.exportRes,
        onExportRes: recorder.setExportRes,
        onExportPng: recorder.exportPng,
        settingsOpen,
        onToggleSettings: () => {
          setHelpOpen(false);
          setSettingsOpen((previous) => !previous);
        },
        helpOpen,
        onToggleHelp: () => {
          setSettingsOpen(false);
          setHelpOpen((previous) => !previous);
        },
        fullscreen,
        onToggleFullscreen: () => void toggleFullscreen(),
        onHideUi: () => setUiHidden(true)
      }
    ),
    /* @__PURE__ */ u3("div", { class: "relative z-0 flex min-h-0 flex-1", children: [
      !uiHidden && /* @__PURE__ */ u3(
        LayersSidebar,
        {
          layers: scene.layers,
          imageInfo: media.imageInfo,
          selectedId,
          onSelect: setSelectedId,
          onToggleVisible: (layer) => updateLayerFx(layer.id, {
            visible: !layer.fx.visible
          }),
          onMove: moveLayer,
          onDuplicate: duplicateLayer,
          onRemove: removeLayer,
          onImport: () => fileRef.current?.click()
        }
      ),
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
              void media.importFiles(event.dataTransfer.files);
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
            recorder.recording && /* @__PURE__ */ u3("div", { class: "pointer-events-none absolute left-3 top-3 flex items-center gap-2 border border-[#c45b6a]/50 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#b86a74]", children: [
              /* @__PURE__ */ u3("span", { class: "rec-dot inline-block h-2 w-2 rounded-full bg-[#c45b6a]" }),
              " ",
              "Rec",
              recorder.recordingWithMic ? " \xB7 mic" : ""
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
        selected && /* @__PURE__ */ u3(
          LayerPanel,
          {
            layer: selected,
            info: media.imageInfo[selected.imageId],
            onPatch: (patch) => updateLayerFx(selected.id, patch),
            onReplaceFx: (fx) => replaceLayerFx(selected.id, fx)
          }
        ),
        /* @__PURE__ */ u3(
          WorldPanel,
          {
            global: scene.global,
            onPatch: updateGlobal,
            onPreset: (preset) => {
              updateGlobal(preset.global);
              engineRef.current?.clearFeedback();
            }
          }
        )
      ] })
    ] }),
    helpOpen && /* @__PURE__ */ u3(HelpModal, { onClose: () => setHelpOpen(false) }),
    settingsOpen && /* @__PURE__ */ u3(
      SettingsModal,
      {
        settings,
        recording: recorder.recording,
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
          if (input.files?.length)
            void media.importFiles(input.files);
          input.value = "";
        }
      }
    )
  ] });
}

// lakebed-source:__lakebed/client-entry.tsx
R(k(App, {}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvYXBwU2V0dGluZ3MudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pY29ucy50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L21lZGlhLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9wcmVzZXRzLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC91aS9CdXR0b24udHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC91aS9Nb2RhbC50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3VpL1NlY3Rpb24udHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC91aS9TZWdtZW50ZWQudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC91aS9TZWxlY3QudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC91aS9mb3JtYXQudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3VpL1NsaWRlci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3VpL1RvZ2dsZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvTGF5ZXJQYW5lbC50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvTGF5ZXJzU2lkZWJhci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3BsYXltYXAudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvSGVscE1vZGFsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9TZXR0aW5nc01vZGFsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZXhwb3J0aW5nLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1NjZW5lc01lbnUudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1RvcEJhci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvV29ybGRQYW5lbC50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2VuZ2luZS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZnJhbWUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0b3JlLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9ob29rcy91c2VNZWRpYUxpYnJhcnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2hvb2tzL3VzZU1pYy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvaG9va3MvdXNlUGxheU1vZGUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2hvb2tzL3VzZVJlY29yZGVyLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9ob29rcy91c2VTY2VuZUhpc3RvcnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2hvb2tzL3VzZVRvYXN0LnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC90aGVtZS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvaW5kZXgudHN4IiwgImxha2ViZWQtc291cmNlOl9fbGFrZWJlZC9jbGllbnQtZW50cnkudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkNvbnRhaW5lck5vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0aWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzbGljZSA9IEVNUFRZX0FSUi5zbGljZTtcbiIsICJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwgImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gdmlydHVhbCBub2RlICh1c2VkIGZvciBKU1gpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudCBjb25zdHJ1Y3RvciBmb3IgdGhpc1xuICogdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IFtwcm9wc10gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4nKS5Db21wb25lbnRDaGlsZHJlbj59IFtjaGlsZHJlbl0gVGhlIGNoaWxkcmVuIG9mIHRoZVxuICogdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0ge30sXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzXG5cdC8vIE5vdGU6IHR5cGUgbWF5IGJlIHVuZGVmaW5lZCBpbiBkZXZlbG9wbWVudCwgbXVzdCBuZXZlciBlcnJvciBoZXJlLlxuXHRpZiAodHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmRlZmF1bHRQcm9wcyAhPSBOVUxMKSB7XG5cdFx0Zm9yIChpIGluIHR5cGUuZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSBVTkRFRklORUQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdHlwZS5kZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKHR5cGUsIG5vcm1hbGl6ZWRQcm9wcywga2V5LCByZWYsIE5VTEwpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFZOb2RlICh1c2VkIGludGVybmFsbHkgYnkgUHJlYWN0KVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnRcbiAqIENvbnN0cnVjdG9yIGZvciB0aGlzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGlzIHZpcnR1YWwgbm9kZS5cbiAqIElmIHRoaXMgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSB0ZXh0IG5vZGUsIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIG5vZGUgKHN0cmluZyBvciBudW1iZXIpLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBrZXkgVGhlIGtleSBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHVzZWQgd2hlblxuICogZGlmZmluZyBpdCBhZ2FpbnN0IGl0cyBjaGlsZHJlblxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInJlZlwiXX0gcmVmIFRoZSByZWYgcHJvcGVydHkgdGhhdCB3aWxsXG4gKiByZWNlaXZlIGEgcmVmZXJlbmNlIHRvIGl0cyBjcmVhdGVkIGNoaWxkXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCByZWYsIG9yaWdpbmFsKSB7XG5cdC8vIFY4IHNlZW1zIHRvIGJlIGJldHRlciBhdCBkZXRlY3RpbmcgdHlwZSBzaGFwZXMgaWYgdGhlIG9iamVjdCBpcyBhbGxvY2F0ZWQgZnJvbSB0aGUgc2FtZSBjYWxsIHNpdGVcblx0Ly8gRG8gbm90IGlubGluZSBpbnRvIGNyZWF0ZUVsZW1lbnQgYW5kIGNvZXJjZVRvVk5vZGUhXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IE5VTEwsXG5cdFx0X3BhcmVudDogTlVMTCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogTlVMTCxcblx0XHRfY29tcG9uZW50OiBOVUxMLFxuXHRcdGNvbnN0cnVjdG9yOiBVTkRFRklORUQsXG5cdFx0X29yaWdpbmFsOiBvcmlnaW5hbCA9PSBOVUxMID8gKyt2bm9kZUlkIDogb3JpZ2luYWwsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDBcblx0fTtcblxuXHQvLyBPbmx5IGludm9rZSB0aGUgdm5vZGUgaG9vayBpZiB0aGlzIHdhcyAqbm90KiBhIGRpcmVjdCBjb3B5OlxuXHRpZiAob3JpZ2luYWwgPT0gTlVMTCAmJiBvcHRpb25zLnZub2RlICE9IE5VTEwpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHsgY3VycmVudDogTlVMTCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGhlIGFyZ3VtZW50IGlzIGEgdmFsaWQgUHJlYWN0IFZOb2RlLlxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHJldHVybnMge3Zub2RlIGlzIFZOb2RlfVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEVsZW1lbnQgPSB2bm9kZSA9PlxuXHR2bm9kZSAhPSBOVUxMICYmIHZub2RlLmNvbnN0cnVjdG9yID09PSBVTkRFRklORUQ7XG4iLCAiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRpZmYsIGNvbW1pdFJvb3QgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBNT0RFX0hZRFJBVEUsIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQmFzZSBDb21wb25lbnQgY2xhc3MuIFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaFxuICogdHJpZ2dlciByZW5kZXJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgaW5pdGlhbCBjb21wb25lbnQgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbml0aWFsIGNvbnRleHQgZnJvbSBwYXJlbnQgY29tcG9uZW50cydcbiAqIGdldENoaWxkQ29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlLCBjYWxsYmFjaykge1xuXHQvLyBvbmx5IGNsb25lIHN0YXRlIHdoZW4gY29weWluZyB0byBuZXh0U3RhdGUgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBzO1xuXHRpZiAodGhpcy5fbmV4dFN0YXRlICE9IE5VTEwgJiYgdGhpcy5fbmV4dFN0YXRlICE9IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gTlVMTCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5fc3RhdGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwczovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtDb21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IEZyYWdtZW50O1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGx9IFtjaGlsZEluZGV4XVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tU2libGluZyh2bm9kZSwgY2hpbGRJbmRleCkge1xuXHRpZiAoY2hpbGRJbmRleCA9PSBOVUxMKSB7XG5cdFx0Ly8gVXNlIGNoaWxkSW5kZXg9PW51bGwgYXMgYSBzaWduYWwgdG8gcmVzdW1lIHRoZSBzZWFyY2ggZnJvbSB0aGUgdm5vZGUncyBzaWJsaW5nXG5cdFx0cmV0dXJuIHZub2RlLl9wYXJlbnRcblx0XHRcdD8gZ2V0RG9tU2libGluZyh2bm9kZS5fcGFyZW50LCB2bm9kZS5faW5kZXggKyAxKVxuXHRcdFx0OiBOVUxMO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IE5VTEwgJiYgc2libGluZy5fZG9tICE9IE5VTEwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogTlVMTDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChjb21wb25lbnQuX3BhcmVudERvbSAmJiBjb21wb25lbnQuX2RpcnR5KSB7XG5cdFx0bGV0IG9sZFZOb2RlID0gY29tcG9uZW50Ll92bm9kZSxcblx0XHRcdG9sZERvbSA9IG9sZFZOb2RlLl9kb20sXG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdLFxuXHRcdFx0cmVmUXVldWUgPSBbXSxcblx0XHRcdG5ld1ZOb2RlID0gYXNzaWduKHt9LCBvbGRWTm9kZSk7XG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsICsgMTtcblx0XHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZShuZXdWTm9kZSk7XG5cblx0XHRkaWZmKFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20sXG5cdFx0XHRuZXdWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdFx0b2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFID8gW29sZERvbV0gOiBOVUxMLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gTlVMTCA/IGdldERvbVNpYmxpbmcob2xkVk5vZGUpIDogb2xkRG9tLFxuXHRcdFx0ISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKSxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG9sZFZOb2RlLl9vcmlnaW5hbDtcblx0XHRuZXdWTm9kZS5fcGFyZW50Ll9jaGlsZHJlbltuZXdWTm9kZS5faW5kZXhdID0gbmV3Vk5vZGU7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgbmV3Vk5vZGUsIHJlZlF1ZXVlKTtcblx0XHRvbGRWTm9kZS5fZG9tID0gb2xkVk5vZGUuX3BhcmVudCA9IG51bGw7XG5cblx0XHRpZiAobmV3Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKG5ld1ZOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gTlVMTCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IE5VTEwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gTlVMTDtcblx0XHR2bm9kZS5fY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHRpZiAoY2hpbGQgIT0gTlVMTCAmJiBjaGlsZC5fZG9tICE9IE5VTEwpIHtcblx0XHRcdFx0cmV0dXJuICh2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbmNvbnN0IGRlZmVyID1cblx0dHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKVxuXHRcdDogc2V0VGltZW91dDtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ1xuXHQpIHtcblx0XHRwcmV2RGVib3VuY2UgPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nO1xuXHRcdChwcmV2RGVib3VuY2UgfHwgZGVmZXIpKHByb2Nlc3MpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGFcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBiXG4gKi9cbmNvbnN0IGRlcHRoU29ydCA9IChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGg7XG5cbi8qKiBGbHVzaCB0aGUgcmVuZGVyIHF1ZXVlIGJ5IHJlcmVuZGVyaW5nIGFsbCBxdWV1ZWQgY29tcG9uZW50cyAqL1xuZnVuY3Rpb24gcHJvY2VzcygpIHtcblx0dHJ5IHtcblx0XHRsZXQgYyxcblx0XHRcdGwgPSAxO1xuXG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIGByZW5kZXJDb3VudGAgeWV0LiBLZWVwIGl0cyB2YWx1ZSBub24temVybyB0byBwcmV2ZW50IHVubmVjZXNzYXJ5XG5cdFx0Ly8gcHJvY2VzcygpIGNhbGxzIGZyb20gZ2V0dGluZyBzY2hlZHVsZWQgd2hpbGUgYHF1ZXVlYCBpcyBzdGlsbCBiZWluZyBjb25zdW1lZC5cblx0XHR3aGlsZSAocmVyZW5kZXJRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdC8vIEtlZXAgdGhlIHJlcmVuZGVyIHF1ZXVlIHNvcnRlZCBieSAoZGVwdGgsIGluc2VydGlvbiBvcmRlcikuIFRoZSBxdWV1ZVxuXHRcdFx0Ly8gd2lsbCBpbml0aWFsbHkgYmUgc29ydGVkIG9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb25seSBpZiBpdCBoYXMgbW9yZSB0aGFuIDEgaXRlbS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHRvIHRoZSBxdWV1ZSBlLmcuIHdoZW4gcmVyZW5kZXJpbmcgYSBwcm92aWRlciwgc28gd2Ugd2FudCB0b1xuXHRcdFx0Ly8ga2VlcCB0aGUgb3JkZXIgZnJvbSB0b3AgdG8gYm90dG9tIHdpdGggdGhvc2UgbmV3IGl0ZW1zIHNvIHdlIGNhbiBoYW5kbGUgdGhlbSBpbiBhXG5cdFx0XHQvLyBzaW5nbGUgcGFzc1xuXHRcdFx0aWYgKHJlcmVuZGVyUXVldWUubGVuZ3RoID4gbCkge1xuXHRcdFx0XHRyZXJlbmRlclF1ZXVlLnNvcnQoZGVwdGhTb3J0KTtcblx0XHRcdH1cblxuXHRcdFx0YyA9IHJlcmVuZGVyUXVldWUuc2hpZnQoKTtcblx0XHRcdGwgPSByZXJlbmRlclF1ZXVlLmxlbmd0aDtcblxuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGMpO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRyZXJlbmRlclF1ZXVlLmxlbmd0aCA9IHByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuXHR9XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwgImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCwgTlVMTCwgU1ZHX05BTUVTUEFDRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLy8gUGVyLWluc3RhbmNlIHVuaXF1ZSBrZXkgZm9yIGV2ZW50IGNsb2NrIHN0YW1wcy4gRWFjaCBQcmVhY3QgY29weSBvbiB0aGUgcGFnZVxuLy8gZ2V0cyBpdHMgb3duIHJhbmRvbSBzdWZmaXggc28gdGhhdCBgX2Rpc3BhdGNoZWRgIC8gYF9hdHRhY2hlZGAgcHJvcGVydGllcyBvblxuLy8gc2hhcmVkIGV2ZW50IG9iamVjdHMgYW5kIGhhbmRsZXIgZnVuY3Rpb25zIGNhbm5vdCBjb2xsaWRlIGFjcm9zcyBpbnN0YW5jZXMuXG4vLyB+MSBpbiA2ME0gY29sbGlzaW9uIG9kZHMgLSBpZiB5b3UgaGF2ZSB0aGF0IG1hbnkgcHJhZWN0IHZlcnNpb25zIG9uIHRoZSBwYWdlLFxuLy8geW91IGRlc2VydmUgc29tZSB3ZWlyZCBidWdzLlxuLy8gSW4gMTEgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGFcbi8vIFN5bWJvbFxubGV0IF9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoOCksXG5cdEVWRU5UX0RJU1BBVENIRUQgPSAnX19kJyArIF9pZCxcblx0RVZFTlRfQVRUQUNIRUQgPSAnX19hJyArIF9pZDtcblxuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIGtleSwgdmFsdWUpIHtcblx0aWYgKGtleVswXSA9PSAnLScpIHtcblx0XHRzdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZSA9PSBOVUxMKSB7XG5cdFx0c3R5bGVba2V5XSA9ICcnO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCBJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpKSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZSArICdweCc7XG5cdH1cbn1cblxuY29uc3QgQ0FQVFVSRV9SRUdFWCA9IC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pO1xuXG4vLyBBIGxvZ2ljYWwgY2xvY2sgdG8gc29sdmUgaXNzdWVzIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMzkyNy5cbi8vIFdoZW4gdGhlIERPTSBwZXJmb3JtcyBhbiBldmVudCBpdCBsZWF2ZXMgbWljcm8tdGlja3MgaW4gYmV0d2VlbiBidWJibGluZyB1cCB3aGljaCBtZWFucyB0aGF0XG4vLyBhbiBldmVudCBjYW4gdHJpZ2dlciBvbiBhIG5ld2x5IHJlYXRlZCBET00tbm9kZSB3aGlsZSB0aGUgZXZlbnQgYnViYmxlcyB1cC5cbi8vXG4vLyBPcmlnaW5hbGx5IGluc3BpcmVkIGJ5IFZ1ZVxuLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb3JlL2Jsb2IvY2FlYjhhNjg4MTFhMWIwZjc5L3BhY2thZ2VzL3J1bnRpbWUtZG9tL3NyYy9tb2R1bGVzL2V2ZW50cy50cyNMOTAtTDEwMSksXG4vLyBidXQgbW9kaWZpZWQgdG8gdXNlIGEgbG9naWNhbCBjbG9jayBpbnN0ZWFkIG9mIERhdGUubm93KCkgaW4gY2FzZSBldmVudCBoYW5kbGVycyBnZXQgYXR0YWNoZWRcbi8vIGFuZCBldmVudHMgZ2V0IGRpc3BhdGNoZWQgZHVyaW5nIHRoZSBzYW1lIG1pbGxpc2Vjb25kLlxuLy9cbi8vIFRoZSBjbG9jayBpcyBpbmNyZW1lbnRlZCBhZnRlciBlYWNoIG5ldyBldmVudCBkaXNwYXRjaC4gVGhpcyBhbGxvd3MgMSAwMDAgMDAwIG5ldyBldmVudHNcbi8vIHBlciBzZWNvbmQgZm9yIG92ZXIgMjgwIHllYXJzIGJlZm9yZSB0aGUgdmFsdWUgcmVhY2hlcyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAoMioqNTMgLSAxKS5cbmxldCBldmVudENsb2NrID0gMDtcblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB2YWx1ZSBvbiBhIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIHRoZSBwcm9wZXJ0eSBoYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGRvbSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlLCBuYW1lc3BhY2UpIHtcblx0bGV0IHVzZUNhcHR1cmU7XG5cblx0bzogaWYgKG5hbWUgPT0gJ3N0eWxlJykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkVmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSBvbGRWYWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2xkVmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCEodmFsdWUgJiYgbmFtZSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRWYWx1ZSB8fCB2YWx1ZVtuYW1lXSAhPSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PSAnbycgJiYgbmFtZVsxXSA9PSAnbicpIHtcblx0XHR1c2VDYXB0dXJlID0gbmFtZSAhPSAobmFtZSA9IG5hbWUucmVwbGFjZShDQVBUVVJFX1JFR0VYLCAnJDEnKSk7XG5cdFx0Y29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIEluZmVyIGNvcnJlY3QgY2FzaW5nIGZvciBET00gYnVpbHQtaW4gZXZlbnRzOlxuXHRcdGlmIChsb3dlckNhc2VOYW1lIGluIGRvbSB8fCBuYW1lID09ICdvbkZvY3VzT3V0JyB8fCBuYW1lID09ICdvbkZvY3VzSW4nKVxuXHRcdFx0bmFtZSA9IGxvd2VyQ2FzZU5hbWUuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gZXZlbnRDbG9jaztcblx0XHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHR1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5LFxuXHRcdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlW0VWRU5UX0FUVEFDSEVEXSA9IG9sZFZhbHVlW0VWRU5UX0FUVEFDSEVEXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmIChuYW1lc3BhY2UgPT0gU1ZHX05BTUVTUEFDRSkge1xuXHRcdFx0Ly8gTm9ybWFsaXplIGluY29ycmVjdCBwcm9wIHVzYWdlIGZvciBTVkc6XG5cdFx0XHQvLyAtIHhsaW5rOmhyZWYgLyB4bGlua0hyZWYgLS0+IGhyZWYgKHhsaW5rOmhyZWYgd2FzIHJlbW92ZWQgZnJvbSBTVkcgYW5kIGlzbid0IG5lZWRlZClcblx0XHRcdC8vIC0gY2xhc3NOYW1lIC0tPiBjbGFzc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgveGxpbmsoSHw6aCkvLCAnaCcpLnJlcGxhY2UoL3NOYW1lJC8sICdzJyk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG5hbWUgIT0gJ3dpZHRoJyAmJlxuXHRcdFx0bmFtZSAhPSAnaGVpZ2h0JyAmJlxuXHRcdFx0bmFtZSAhPSAnaHJlZicgJiZcblx0XHRcdG5hbWUgIT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT0gJ3RhYkluZGV4JyAmJlxuXHRcdFx0bmFtZSAhPSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lICE9ICdyb3dTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAnY29sU3BhbicgJiZcblx0XHRcdG5hbWUgIT0gJ3JvbGUnICYmXG5cdFx0XHRuYW1lICE9ICdwb3BvdmVyJyAmJlxuXHRcdFx0bmFtZSBpbiBkb21cblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRvbVtuYW1lXSA9IHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHQvLyBsYWJlbGxlZCBicmVhayBpcyAxYiBzbWFsbGVyIGhlcmUgdGhhbiBhIHJldHVybiBzdGF0ZW1lbnQgKHNvcnJ5KVxuXHRcdFx0XHRicmVhayBvO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHQvLyBhcmlhLSBhbmQgZGF0YS0gYXR0cmlidXRlcyBoYXZlIG5vIGJvb2xlYW4gcmVwcmVzZW50YXRpb24uXG5cdFx0Ly8gQSBgZmFsc2VgIHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nXG5cdFx0Ly8gcHJlc2VudCwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW4gYXJpYVxuXHRcdC8vIGF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBmcmFtZXdvcmtzIGdlbmVyYWxseSBzdHJpbmdpZnkgYGZhbHNlYC5cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBOVUxMICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZVs0XSA9PSAnLScpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUgPT0gJ3BvcG92ZXInICYmIHZhbHVlID09IHRydWUgPyAnJyA6IHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXZlbnQgcHJveHkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhcHR1cmUgSXMgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBjYXB0dXJlIHBoYXNlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRQcm94eSh1c2VDYXB0dXJlKSB7XG5cdC8qKlxuXHQgKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcblx0ICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRyZXR1cm4gZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG5cdFx0XHRjb25zdCBldmVudEhhbmRsZXIgPSB0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgdXNlQ2FwdHVyZV07XG5cdFx0XHRpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA9PSBOVUxMKSB7XG5cdFx0XHRcdGVbRVZFTlRfRElTUEFUQ0hFRF0gPSBldmVudENsb2NrKys7XG5cblx0XHRcdFx0Ly8gV2hlbiBgZVtFVkVOVF9ESVNQQVRDSEVEXWAgaXMgc21hbGxlciB0aGFuIHRoZSB0aW1lIHdoZW4gdGhlIHRhcmdldGVkIGV2ZW50XG5cdFx0XHRcdC8vIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHdlIGtub3cgd2UgaGF2ZSBidWJibGVkIHVwIHRvIGFuIGVsZW1lbnQgdGhhdCB3YXMgYWRkZWRcblx0XHRcdFx0Ly8gZHVyaW5nIHBhdGNoaW5nIHRoZSBET00uXG5cdFx0XHR9IGVsc2UgaWYgKGVbRVZFTlRfRElTUEFUQ0hFRF0gPCBldmVudEhhbmRsZXJbRVZFTlRfQVRUQUNIRURdKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXIob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IGV2ZW50UHJveHkgPSBjcmVhdGVFdmVudFByb3h5KGZhbHNlKTtcbmNvbnN0IGV2ZW50UHJveHlDYXB0dXJlID0gY3JlYXRlRXZlbnRQcm94eSh0cnVlKTtcbiIsICJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG5cdGZ1bmN0aW9uIENvbnRleHQocHJvcHMpIHtcblx0XHRpZiAoIXRoaXMuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHQvKiogQHR5cGUge1NldDxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+IHwgbnVsbH0gKi9cblx0XHRcdGxldCBzdWJzID0gbmV3IFNldCgpO1xuXHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0Y3R4W0NvbnRleHQuX2lkXSA9IHRoaXM7XG5cblx0XHRcdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gY3R4O1xuXG5cdFx0XHR0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRzdWJzID0gTlVMTDtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKF9wcm9wcykge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIGV2ZW5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMudmFsdWUgIT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vicy5mb3JFYWNoKGMgPT4ge1xuXHRcdFx0XHRcdFx0Yy5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zdWIgPSBjID0+IHtcblx0XHRcdFx0c3Vicy5hZGQoYyk7XG5cdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzdWJzKSB7XG5cdFx0XHRcdFx0XHRzdWJzLmRlbGV0ZShjKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcblx0fVxuXG5cdENvbnRleHQuX2lkID0gJ19fY0MnICsgaSsrO1xuXHRDb250ZXh0Ll9kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0Q29udGV4dC5Db25zdW1lciA9IChwcm9wcywgY29udGV4dFZhbHVlKSA9PiB7XG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHRWYWx1ZSk7XG5cdH07XG5cblx0Ly8gd2UgY291bGQgYWxzbyBnZXQgcmlkIG9mIF9jb250ZXh0UmVmIGVudGlyZWx5XG5cdENvbnRleHQuUHJvdmlkZXIgPVxuXHRcdENvbnRleHQuX2NvbnRleHRSZWYgPVxuXHRcdENvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPVxuXHRcdFx0Q29udGV4dDtcblxuXHRyZXR1cm4gQ29udGV4dDtcbn1cbiIsICJpbXBvcnQgeyBkaWZmLCB1bm1vdW50LCBhcHBseVJlZiB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHtcblx0RU1QVFlfT0JKLFxuXHRFTVBUWV9BUlIsXG5cdElOU0VSVF9WTk9ERSxcblx0TUFUQ0hFRCxcblx0VU5ERUZJTkVELFxuXHROVUxMXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmdcbiAqIGRpZmZlZFxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG9sZFBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRQYXJlbnRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGRpZmYnZWQgYWdhaW5zdCBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QgLSBtb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGlsZHJlbihcblx0cGFyZW50RG9tLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRvbGRQYXJlbnRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IGksXG5cdFx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0XHRvbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdGNoaWxkVk5vZGUsXG5cdFx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRcdG5ld0RvbSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0Zmlyc3RDaGlsZERvbTtcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdC8qKiBAdHlwZSB7Vk5vZGVbXX0gKi9cblx0bGV0IG9sZENoaWxkcmVuID0gKG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbikgfHwgRU1QVFlfQVJSO1xuXG5cdGxldCBuZXdDaGlsZHJlbkxlbmd0aCA9IHJlbmRlclJlc3VsdC5sZW5ndGg7XG5cblx0b2xkRG9tID0gY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheShcblx0XHRuZXdQYXJlbnRWTm9kZSxcblx0XHRyZW5kZXJSZXN1bHQsXG5cdFx0b2xkQ2hpbGRyZW4sXG5cdFx0b2xkRG9tLFxuXHRcdG5ld0NoaWxkcmVuTGVuZ3RoXG5cdCk7XG5cblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdGlmIChjaGlsZFZOb2RlID09IE5VTEwpIGNvbnRpbnVlO1xuXG5cdFx0Ly8gQXQgdGhpcyBwb2ludCwgY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSBoYXMgYXNzaWduZWQgX2luZGV4IHRvIGJlIHRoZVxuXHRcdC8vIG1hdGNoaW5nSW5kZXggZm9yIHRoaXMgVk5vZGUncyBvbGRWTm9kZSAob3IgLTEgaWYgdGhlcmUgaXMgbm8gb2xkVk5vZGUpLlxuXHRcdG9sZFZOb2RlID1cblx0XHRcdChjaGlsZFZOb2RlLl9pbmRleCAhPSAtMSAmJiBvbGRDaGlsZHJlbltjaGlsZFZOb2RlLl9pbmRleF0pIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIFVwZGF0ZSBjaGlsZFZOb2RlLl9pbmRleCB0byBpdHMgZmluYWwgaW5kZXhcblx0XHRjaGlsZFZOb2RlLl9pbmRleCA9IGk7XG5cblx0XHQvLyBNb3JwaCB0aGUgb2xkIGVsZW1lbnQgaW50byB0aGUgbmV3IG9uZSwgYnV0IGRvbid0IGFwcGVuZCBpdCB0byB0aGUgZG9tIHlldFxuXHRcdGxldCByZXN1bHQgPSBkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdC8vIEFkanVzdCBET00gbm9kZXNcblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cdFx0aWYgKGNoaWxkVk5vZGUucmVmICYmIG9sZFZOb2RlLnJlZiAhPSBjaGlsZFZOb2RlLnJlZikge1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikge1xuXHRcdFx0XHRhcHBseVJlZihvbGRWTm9kZS5yZWYsIE5VTEwsIGNoaWxkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmVmUXVldWUucHVzaChcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NvbXBvbmVudCB8fCBuZXdEb20sXG5cdFx0XHRcdGNoaWxkVk5vZGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpcnN0Q2hpbGREb20gPT0gTlVMTCAmJiBuZXdEb20gIT0gTlVMTCkge1xuXHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHR9XG5cblx0XHRsZXQgc2hvdWxkUGxhY2UgPSAhIShjaGlsZFZOb2RlLl9mbGFncyAmIElOU0VSVF9WTk9ERSk7XG5cdFx0aWYgKHNob3VsZFBsYWNlIHx8IG9sZFZOb2RlLl9jaGlsZHJlbiA9PT0gY2hpbGRWTm9kZS5fY2hpbGRyZW4pIHtcblx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXG5cdFx0XHQvLyBXaGVuIGEgbWF0Y2hlZCBWTm9kZSBpcyBwaHlzaWNhbGx5IG1vdmVkIHZpYSBJTlNFUlRfVk5PREUsIGl0cyBvbGRcblx0XHRcdC8vIF9kb20gcG9pbnRlciBiZWNvbWVzIGEgc3RhbGUgcG9zaXRpb25hbCByZWZlcmVuY2UuIENsZWFyIGl0IHNvIHRoYXRcblx0XHRcdC8vIGdldERvbVNpYmxpbmcgKGNhbGxlZCBmcm9tIG5lc3RlZCBkaWZmcykgd29uJ3QgcmV0dXJuIHRoaXMgc3RhbGVcblx0XHRcdC8vIHJlZmVyZW5jZSBhbmQgbWlzLXBsYWNlIHN1YnNlcXVlbnQgRE9NIG5vZGVzLiBTZWUgIzUwNjUuXG5cdFx0XHRpZiAoc2hvdWxkUGxhY2UgJiYgb2xkVk5vZGUuX2RvbSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZG9tID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiByZXN1bHQgIT09IFVOREVGSU5FRCkge1xuXHRcdFx0b2xkRG9tID0gcmVzdWx0O1xuXHRcdH0gZWxzZSBpZiAobmV3RG9tKSB7XG5cdFx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0Ly8gVW5zZXQgZGlmZmluZyBmbGFnc1xuXHRcdGNoaWxkVk5vZGUuX2ZsYWdzICY9IH4oSU5TRVJUX1ZOT0RFIHwgTUFUQ0hFRCk7XG5cdH1cblxuXHRuZXdQYXJlbnRWTm9kZS5fZG9tID0gZmlyc3RDaGlsZERvbTtcblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0cmVuZGVyUmVzdWx0LFxuXHRvbGRDaGlsZHJlbixcblx0b2xkRG9tLFxuXHRuZXdDaGlsZHJlbkxlbmd0aFxuKSB7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IGNoaWxkVk5vZGU7XG5cdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdGxldCBvbGRWTm9kZTtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGgsXG5cdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4gPSBvbGRDaGlsZHJlbkxlbmd0aDtcblxuXHRsZXQgc2tldyA9IDA7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gbmV3IEFycmF5KG5ld0NoaWxkcmVuTGVuZ3RoKTtcblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGFyZSByZXVzaW5nIHRoZSBjaGlsZFZOb2RlIHZhcmlhYmxlIHRvIGhvbGQgYm90aCB0aGVcblx0XHQvLyBwcmUgYW5kIHBvc3Qgbm9ybWFsaXplZCBjaGlsZFZOb2RlXG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChcblx0XHRcdGNoaWxkVk5vZGUgPT0gTlVMTCB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnZnVuY3Rpb24nXG5cdFx0KSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50JyB8fFxuXHRcdFx0Y2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRCAmJiBjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBOVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHRjb25zdCBza2V3ZWRJbmRleCA9IGkgKyBza2V3O1xuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIFRlbXBvcmFyaWx5IHN0b3JlIHRoZSBtYXRjaGluZ0luZGV4IG9uIHRoZSBfaW5kZXggcHJvcGVydHkgc28gd2UgY2FuIHB1bGxcblx0XHQvLyBvdXQgdGhlIG9sZFZOb2RlIGluIGRpZmZDaGlsZHJlbi4gV2UnbGwgb3ZlcnJpZGUgdGhpcyB0byB0aGUgVk5vZGUnc1xuXHRcdC8vIGZpbmFsIGluZGV4IGFmdGVyIHVzaW5nIHRoaXMgcHJvcGVydHkgdG8gZ2V0IHRoZSBvbGRWTm9kZVxuXHRcdGNvbnN0IG1hdGNoaW5nSW5kZXggPSAoY2hpbGRWTm9kZS5faW5kZXggPSBmaW5kTWF0Y2hpbmdJbmRleChcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdHNrZXdlZEluZGV4LFxuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW5cblx0XHQpKTtcblxuXHRcdG9sZFZOb2RlID0gTlVMTDtcblx0XHRpZiAobWF0Y2hpbmdJbmRleCAhPSAtMSkge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlblttYXRjaGluZ0luZGV4XTtcblx0XHRcdHJlbWFpbmluZ09sZENoaWxkcmVuLS07XG5cdFx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdFx0b2xkVk5vZGUuX2ZsYWdzIHw9IE1BVENIRUQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGVyZSwgd2UgZGVmaW5lIGlzTW91bnRpbmcgZm9yIHRoZSBwdXJwb3NlcyBvZiB0aGUgc2tldyBkaWZmaW5nXG5cdFx0Ly8gYWxnb3JpdGhtLiBOb2RlcyB0aGF0IGFyZSB1bnN1c3BlbmRpbmcgYXJlIGNvbnNpZGVyZWQgbW91bnRpbmcgYW5kIHdlIGRldGVjdFxuXHRcdC8vIHRoaXMgYnkgY2hlY2tpbmcgaWYgb2xkVk5vZGUuX29yaWdpbmFsID09IG51bGxcblx0XHRjb25zdCBpc01vdW50aW5nID0gb2xkVk5vZGUgPT0gTlVMTCB8fCBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gTlVMTDtcblxuXHRcdGlmIChpc01vdW50aW5nKSB7XG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSAtMSkge1xuXHRcdFx0XHQvLyBXaGVuIHRoZSBhcnJheSBvZiBjaGlsZHJlbiBpcyBncm93aW5nIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIHNrZXdcblx0XHRcdFx0Ly8gYXMgd2UgYXJlIGFkZGluZyBhIG5ldyBlbGVtZW50IHRvIHRoZSBhcnJheS5cblx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0Ly8gWzEsIDIsIDNdIC0tPiBbMCwgMSwgMiwgM11cblx0XHRcdFx0Ly8gb2xkQ2hpbGRyZW4gICBuZXdDaGlsZHJlblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBUaGUgbmV3IGVsZW1lbnQgaXMgYXQgaW5kZXggMCwgc28gb3VyIHNrZXcgaXMgMCxcblx0XHRcdFx0Ly8gd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tldyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQuXG5cdFx0XHRcdC8vIFRoZSBkZWNyZWFzZSB3aWxsIGNhdXNlIHVzIHRvIGNvbXBhcmUgdGhlIGVsZW1lbnQgYXQgcG9zaXRpb24gMVxuXHRcdFx0XHQvLyB3aXRoIHZhbHVlIDEgd2l0aCB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAwIHdpdGggdmFsdWUgMC5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gQSBsaW5lYXIgY29uY2VwdCBpcyBhcHBsaWVkIHdoZW4gdGhlIGFycmF5IGlzIHNocmlua2luZyxcblx0XHRcdFx0Ly8gaWYgdGhlIGxlbmd0aCBpcyB1bmNoYW5nZWQgd2UgY2FuIGFzc3VtZSB0aGF0IG5vIHNrZXdcblx0XHRcdFx0Ly8gY2hhbmdlcyBhcmUgbmVlZGVkLlxuXHRcdFx0XHRpZiAobmV3Q2hpbGRyZW5MZW5ndGggPiBvbGRDaGlsZHJlbkxlbmd0aCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdDaGlsZHJlbkxlbmd0aCA8IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGFyZSBtb3VudGluZyBhIERPTSBWTm9kZSwgbWFyayBpdCBmb3IgaW5zZXJ0aW9uXG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSAhPSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG1hdGNoaW5nSW5kZXggIT0gc2tld2VkSW5kZXgpIHtcblx0XHRcdC8vIFdoZW4gd2UgbW92ZSBlbGVtZW50cyBhcm91bmQgaS5lLiBbMCwgMSwgMl0gLS0+IFsxLCAwLCAyXVxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMSwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAxIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgMCBhbmQgb3VyIHNrZXcgaXMgMFxuXHRcdFx0Ly8gICAgIHdlIHNldCB0aGUgc2tldyB0byAxIGFzIHdlIGZvdW5kIGFuIG9mZnNldC5cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDAsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMCB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIGF0IDIgYW5kIG91ciBza2V3IGlzIDFcblx0XHRcdC8vICAgICB0aGlzIG1ha2VzIHVzIGluY3JlYXNlIHRoZSBza2V3IGFnYWluLlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMiwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAyIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgNCBhbmQgb3VyIHNrZXcgaXMgMlxuXHRcdFx0Ly9cblx0XHRcdC8vIHRoaXMgYmVjb21lcyBhbiBvcHRpbWl6YXRpb24gcXVlc3Rpb24gd2hlcmUgY3VycmVudGx5IHdlIHNlZSBhIDEgZWxlbWVudCBvZmZzZXQgYXMgYW4gaW5zZXJ0aW9uXG5cdFx0XHQvLyBvciBkZWxldGlvbiBpLmUuIHdlIG9wdGltaXplIGZvciBbMCwgMSwgMl0gLS0+IFs5LCAwLCAxLCAyXVxuXHRcdFx0Ly8gd2hpbGUgYSBtb3JlIHRoYW4gMSBvZmZzZXQgd2Ugc2VlIGFzIGEgc3dhcC5cblx0XHRcdC8vIFdlIGNvdWxkIHByb2JhYmx5IGJ1aWxkIGhldXJpc3RpY3MgZm9yIGhhdmluZyBhbiBvcHRpbWl6ZWQgY291cnNlIG9mIGFjdGlvbiBoZXJlIGFzIHdlbGwsIGJ1dFxuXHRcdFx0Ly8gbWlnaHQgZ28gYXQgdGhlIGNvc3Qgb2Ygc29tZSBieXRlcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiB3ZSB3YW50ZWQgdG8gb3B0aW1pemUgZm9yIGkuZS4gb25seSBzd2FwcyB3ZSdkIGp1c3QgZG8gdGhlIGxhc3QgdHdvIGNvZGUtYnJhbmNoZXMgYW5kIGhhdmVcblx0XHRcdC8vIG9ubHkgdGhlIGZpcnN0IGl0ZW0gYmUgYSByZS1zY291dGluZyBhbmQgYWxsIHRoZSBvdGhlcnMgZmFsbCBpbiB0aGVpciBza2V3ZWQgY291bnRlci1wYXJ0LlxuXHRcdFx0Ly8gV2UgY291bGQgYWxzbyBmdXJ0aGVyIG9wdGltaXplIGZvciBzd2Fwc1xuXHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPT0gc2tld2VkSW5kZXggLSAxKSB7XG5cdFx0XHRcdHNrZXctLTtcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCArIDEpIHtcblx0XHRcdFx0c2tldysrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPiBza2V3ZWRJbmRleCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIHRoaXMgVk5vZGUncyBET00gaWYgdGhlIG9yaWdpbmFsIGluZGV4IChtYXRjaGluZ0luZGV4KSBkb2Vzbid0XG5cdFx0XHRcdC8vIG1hdGNoIHRoZSBuZXcgc2tldyBpbmRleCAoaSArIG5ldyBza2V3KVxuXHRcdFx0XHQvLyBJbiB0aGUgZm9ybWVyIHR3byBicmFuY2hlcyB3ZSBrbm93IHRoYXQgaXQgbWF0Y2hlcyBhZnRlciBza2V3aW5nXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcmVtYWluaW5nIG9sZENoaWxkcmVuIGlmIHRoZXJlIGFyZSBhbnkuIExvb3AgZm9yd2FyZHMgc28gdGhhdCBhcyB3ZVxuXHQvLyB1bm1vdW50IERPTSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG9sZENoaWxkcmVuLCB3ZSBjYW4gYWRqdXN0IG9sZERvbSB0b1xuXHQvLyBwb2ludCB0byB0aGUgbmV4dCBjaGlsZCwgd2hpY2ggbmVlZHMgdG8gYmUgdGhlIGZpcnN0IERPTSBub2RlIHRoYXQgd29uJ3QgYmVcblx0Ly8gdW5tb3VudGVkLlxuXHRpZiAocmVtYWluaW5nT2xkQ2hpbGRyZW4pIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2xkQ2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblx0XHRcdGlmIChvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwKSB7XG5cdFx0XHRcdGlmIChvbGRWTm9kZS5fZG9tID09IG9sZERvbSkge1xuXHRcdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dW5tb3VudChvbGRWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbVxuICogQHBhcmFtIHtib29sZWFufSBzaG91bGRQbGFjZVxuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGluc2VydChwYXJlbnRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblxuXHRpZiAodHlwZW9mIHBhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBjaGlsZHJlbiA9IHBhcmVudFZOb2RlLl9jaGlsZHJlbjtcblx0XHRmb3IgKGxldCBpID0gMDsgY2hpbGRyZW4gJiYgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY2hpbGRyZW5baV0pIHtcblx0XHRcdFx0Ly8gSWYgd2UgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbiwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9sZFxuXHRcdFx0XHQvLyBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGUgKHBhcmVudFZOb2RlXG5cdFx0XHRcdC8vIGhlcmUpLlxuXHRcdFx0XHRjaGlsZHJlbltpXS5fcGFyZW50ID0gcGFyZW50Vk5vZGU7XG5cdFx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZHJlbltpXSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2xkRG9tO1xuXHR9IGVsc2UgaWYgKHBhcmVudFZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0aWYgKHNob3VsZFBsYWNlKSB7XG5cdFx0XHRpZiAob2xkRG9tICYmIHBhcmVudFZOb2RlLnR5cGUgJiYgIW9sZERvbS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcocGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShwYXJlbnRWTm9kZS5fZG9tLCBvbGREb20gfHwgTlVMTCk7XG5cdFx0fVxuXHRcdG9sZERvbSA9IHBhcmVudFZOb2RlLl9kb207XG5cdH1cblxuXHRkbyB7XG5cdFx0b2xkRG9tID0gb2xkRG9tICYmIG9sZERvbS5uZXh0U2libGluZztcblx0fSB3aGlsZSAob2xkRG9tICE9IE5VTEwgJiYgb2xkRG9tLm5vZGVUeXBlID09IDgpO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbn0gY2hpbGRyZW4gVGhlIHVuZmxhdHRlbmVkIGNoaWxkcmVuIG9mIGEgdmlydHVhbFxuICogbm9kZVxuICogQHJldHVybnMge1ZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBOVUxMIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IGNoaWxkVk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGVbXX0gb2xkQ2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBza2V3ZWRJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHJlbWFpbmluZ09sZENoaWxkcmVuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdJbmRleChcblx0Y2hpbGRWTm9kZSxcblx0b2xkQ2hpbGRyZW4sXG5cdHNrZXdlZEluZGV4LFxuXHRyZW1haW5pbmdPbGRDaGlsZHJlblxuKSB7XG5cdGNvbnN0IGtleSA9IGNoaWxkVk5vZGUua2V5O1xuXHRjb25zdCB0eXBlID0gY2hpbGRWTm9kZS50eXBlO1xuXHRsZXQgb2xkVk5vZGUgPSBvbGRDaGlsZHJlbltza2V3ZWRJbmRleF07XG5cdGNvbnN0IG1hdGNoZWQgPSBvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwO1xuXG5cdC8vIFdlIG9ubHkgbmVlZCB0byBwZXJmb3JtIGEgc2VhcmNoIGlmIHRoZXJlIGFyZSBtb3JlIGNoaWxkcmVuXG5cdC8vIChyZW1haW5pbmdPbGRDaGlsZHJlbikgdG8gc2VhcmNoLiBIb3dldmVyLCBpZiB0aGUgb2xkVk5vZGUgd2UganVzdCBsb29rZWRcblx0Ly8gYXQgc2tld2VkSW5kZXggd2FzIG5vdCBhbHJlYWR5IHVzZWQgaW4gdGhpcyBkaWZmLCB0aGVuIHRoZXJlIG11c3QgYmUgYXRcblx0Ly8gbGVhc3QgMSBvdGhlciAoc28gZ3JlYXRlciB0aGFuIDEpIHJlbWFpbmluZ09sZENoaWxkcmVuIHRvIGF0dGVtcHQgdG8gbWF0Y2hcblx0Ly8gYWdhaW5zdC4gU28gdGhlIGZvbGxvd2luZyBjb25kaXRpb24gY2hlY2tzIHRoYXQgZW5zdXJpbmdcblx0Ly8gcmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAxIGlmIHRoZSBvbGRWTm9kZSBpcyBub3QgYWxyZWFkeSB1c2VkL21hdGNoZWQuIEVsc2Vcblx0Ly8gaWYgdGhlIG9sZFZOb2RlIHdhcyBudWxsIG9yIG1hdGNoZWQsIHRoZW4gdGhlcmUgY291bGQgbmVlZHMgdG8gYmUgYXQgbGVhc3Rcblx0Ly8gMSAoYWthIGByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDBgKSBjaGlsZHJlbiB0byBmaW5kIGFuZCBjb21wYXJlIGFnYWluc3QuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIGFuIHVua2V5ZWQgZnVuY3Rpb25hbCBWTm9kZSwgdGhhdCBpc24ndCBhIGJ1aWx0LWluIGxpa2Ugb3VyIEZyYWdtZW50LFxuXHQvLyB3ZSBzaG91bGQgbm90IHNlYXJjaCBhcyB3ZSByaXNrIHJlLXVzaW5nIHN0YXRlIG9mIGFuIHVucmVsYXRlZCBWTm9kZS4gKHJldmVydGVkIGZvciBub3cpXG5cdGxldCBzaG91bGRTZWFyY2ggPVxuXHRcdC8vICh0eXBlb2YgdHlwZSAhPSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09IEZyYWdtZW50IHx8IGtleSkgJiZcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA+IChtYXRjaGVkID8gMSA6IDApO1xuXG5cdGlmIChcblx0XHQob2xkVk5vZGUgPT09IE5VTEwgJiYga2V5ID09IG51bGwpIHx8XG5cdFx0KG1hdGNoZWQgJiYga2V5ID09IG9sZFZOb2RlLmtleSAmJiB0eXBlID09IG9sZFZOb2RlLnR5cGUpXG5cdCkge1xuXHRcdHJldHVybiBza2V3ZWRJbmRleDtcblx0fSBlbHNlIGlmIChzaG91bGRTZWFyY2gpIHtcblx0XHRsZXQgeCA9IHNrZXdlZEluZGV4IC0gMTtcblx0XHRsZXQgeSA9IHNrZXdlZEluZGV4ICsgMTtcblx0XHR3aGlsZSAoeCA+PSAwIHx8IHkgPCBvbGRDaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoaWxkSW5kZXggPSB4ID49IDAgPyB4LS0gOiB5Kys7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRvbGRWTm9kZSAhPSBOVUxMICYmXG5cdFx0XHRcdChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwICYmXG5cdFx0XHRcdGtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0dHlwZSA9PSBvbGRWTm9kZS50eXBlXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGNoaWxkSW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIC0xO1xufVxuIiwgImltcG9ydCB7XG5cdEVNUFRZX0FSUixcblx0RU1QVFlfT0JKLFxuXHRNQVRIX05BTUVTUEFDRSxcblx0TU9ERV9IWURSQVRFLFxuXHRNT0RFX1NVU1BFTkRFRCxcblx0TlVMTCxcblx0UkVTRVRfTU9ERSxcblx0U1ZHX05BTUVTUEFDRSxcblx0VU5ERUZJTkVELFxuXHRYSFRNTF9OQU1FU1BBQ0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIGlzQXJyYXksIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHthbnl9IFRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUmVmPFQ+fSBSZWY8VD5cbiAqL1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHQvKiogQHR5cGUge2FueX0gKi9cblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSBVTkRFRklORUQpIHJldHVybiBOVUxMO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX1NVU1BFTkRFRCkge1xuXHRcdGlzSHlkcmF0aW5nID0gISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKTtcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRsZXQgb2xkQ29tbWl0UXVldWVMZW5ndGggPSBjb21taXRRdWV1ZS5sZW5ndGg7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdFx0XHRjb25zdCBpc0NsYXNzQ29tcG9uZW50ID0gbmV3VHlwZS5wcm90b3R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQmFzZUNvbXBvbmVudChcblx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRpZiAoIWMuc3RhdGUpIGMuc3RhdGUgPSB7fTtcblx0XHRcdFx0Yy5fZ2xvYmFsQ29udGV4dCA9IGdsb2JhbENvbnRleHQ7XG5cdFx0XHRcdGlzTmV3ID0gYy5fZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW52b2tlIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5fbmV4dFN0YXRlID09IE5VTEwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgbmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRcdC8vIEludm9rZSBwcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gTlVMTFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5jb21wb25lbnREaWRNb3VudCAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5jb21wb25lbnREaWRNb3VudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpc0NsYXNzQ29tcG9uZW50ICYmXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gTlVMTCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbCB8fFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IE5VTEwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gTW9yZSBpbmZvIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vSm92aURlQ3Jvb2NrL2JlYzVmMmNlOTM1NDRkMmU2MDcwZWY4ZTAwMzZlNGU4XG5cdFx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9vcmlnaW5hbCAhPSBvbGRWTm9kZS5fb3JpZ2luYWwpIHtcblx0XHRcdFx0XHRcdC8vIFdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBhIGJhaWwgYmVjYXVzZSBvZiBzQ1Ugd2UgaGF2ZSB0byB1cGRhdGVcblx0XHRcdFx0XHRcdC8vIHRoZSBwcm9wcywgc3RhdGUgYW5kIGRpcnR5LXN0YXRlLlxuXHRcdFx0XHRcdFx0Ly8gd2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIHN0cmljdC1lcXVhbGl0eSB3ZSBkb24ndCBhcyB0aGUgY2hpbGQgY291bGQgc3RpbGxcblx0XHRcdFx0XHRcdC8vIGJlIGRpcnRpZWQgc2VlICMzODgzXG5cdFx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLnNvbWUodm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRFTVBUWV9BUlIucHVzaC5hcHBseShjLl9yZW5kZXJDYWxsYmFja3MsIGMuX3N0YXRlQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnRXaWxsVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVcGRhdGUobmV3UHJvcHMsIGMuX25leHRTdGF0ZSwgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3BhcmVudERvbSA9IHBhcmVudERvbTtcblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCkge1xuXHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gTlVMTCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiAhaXNOZXcgJiYgYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdHNuYXBzaG90ID0gYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID1cblx0XHRcdFx0dG1wICE9IE5VTEwgJiYgdG1wLnR5cGUgPT09IEZyYWdtZW50ICYmIHRtcC5rZXkgPT0gTlVMTFxuXHRcdFx0XHRcdD8gY2xvbmVOb2RlKHRtcC5wcm9wcy5jaGlsZHJlbilcblx0XHRcdFx0XHQ6IHRtcDtcblxuXHRcdFx0b2xkRG9tID0gZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdGlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5fZmxhZ3MgJj0gUkVTRVRfTU9ERTtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBXZSByZW1vdmUgYW55IGNvbXBvbmVudERpZE1vdW50LCAuLi5cblx0XHRcdC8vIHRoYXQgaGF2ZSBiZWVuIGludmFsaWRhdGVkIGJ5IHVzXG5cdFx0XHQvLyBpbnRlcmNlcHRpbmcgdGhlIGVycm9yLlxuXHRcdFx0Y29tbWl0UXVldWUubGVuZ3RoID0gb2xkQ29tbWl0UXVldWVMZW5ndGg7XG5cdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBOVUxMO1xuXHRcdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdFx0aWYgKGlzSHlkcmF0aW5nIHx8IGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0aWYgKGUudGhlbikge1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9mbGFncyB8PSBpc0h5ZHJhdGluZ1xuXHRcdFx0XHRcdFx0PyBNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRFxuXHRcdFx0XHRcdFx0OiBNT0RFX1NVU1BFTkRFRDtcblxuXHRcdFx0XHRcdHdoaWxlIChvbGREb20gJiYgb2xkRG9tLm5vZGVUeXBlID09IDggJiYgb2xkRG9tLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0XHRvbGREb20gPSBvbGREb20ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2V4Y2Vzc0RvbUNoaWxkcmVuLmluZGV4T2Yob2xkRG9tKV0gPSBOVUxMO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld1ZOb2RlLl9jaGlsZHJlbiA9PSBOVUxMKSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbiB8fCBbXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlLnRoZW4pIG1hcmtBc0ZvcmNlKG5ld1ZOb2RlKTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gTlVMTCAmJlxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0KSB7XG5cdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBkaWZmRWxlbWVudE5vZGVzKFxuXHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cblx0cmV0dXJuIG5ld1ZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEID8gdW5kZWZpbmVkIDogb2xkRG9tO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNGb3JjZSh2bm9kZSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCkgdm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmICh2bm9kZS5fY2hpbGRyZW4pIHZub2RlLl9jaGlsZHJlbi5zb21lKG1hcmtBc0ZvcmNlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtWTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCwgcmVmUXVldWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZWZRdWV1ZS5sZW5ndGg7IGkrKykge1xuXHRcdGFwcGx5UmVmKHJlZlF1ZXVlW2ldLCByZWZRdWV1ZVsrK2ldLCByZWZRdWV1ZVsrK2ldKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgU2VlIGFib3ZlIGNvbW1lbnQgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG5cdGlmICh0eXBlb2Ygbm9kZSAhPSAnb2JqZWN0JyB8fCBub2RlID09IE5VTEwgfHwgbm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAoaXNBcnJheShub2RlKSkge1xuXHRcdHJldHVybiBub2RlLm1hcChjbG9uZU5vZGUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGFzc2lnbih7fSwgbm9kZSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIHZpcnR1YWwgbm9kZXNcbiAqIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtWTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqIEByZXR1cm5zIHtQcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdGxldCBvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAobmV3Vk5vZGUudHlwZSk7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgbmV3SHRtbDtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgb2xkSHRtbDtcblx0LyoqIEB0eXBlIHtDb21wb25lbnRDaGlsZHJlbn0gKi9cblx0bGV0IG5ld0NoaWxkcmVuO1xuXHRsZXQgdmFsdWU7XG5cdGxldCBpbnB1dFZhbHVlO1xuXHRsZXQgY2hlY2tlZDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgbmFtZXNwYWNlcyB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09ICdzdmcnKSBuYW1lc3BhY2UgPSBTVkdfTkFNRVNQQUNFO1xuXHRlbHNlIGlmIChub2RlVHlwZSA9PSAnbWF0aCcpIG5hbWVzcGFjZSA9IE1BVEhfTkFNRVNQQUNFO1xuXHRlbHNlIGlmICghbmFtZXNwYWNlKSBuYW1lc3BhY2UgPSBYSFRNTF9OQU1FU1BBQ0U7XG5cblx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhbHVlID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHZhbHVlICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIHZhbHVlID09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gdmFsdWUubG9jYWxOYW1lID09IG5vZGVUeXBlIDogdmFsdWUubm9kZVR5cGUgPT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSB2YWx1ZTtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IE5VTEwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRub2RlVHlwZSxcblx0XHRcdG5ld1Byb3BzLmlzICYmIG5ld1Byb3BzXG5cdFx0KTtcblxuXHRcdC8vIHdlIGFyZSBjcmVhdGluZyBhIG5ldyBub2RlLCBzbyB3ZSBjYW4gYXNzdW1lIHRoaXMgaXMgYSBuZXcgc3VidHJlZSAoaW5cblx0XHQvLyBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlmIChpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKVxuXHRcdFx0XHRvcHRpb25zLl9oeWRyYXRpb25NaXNtYXRjaChuZXdWTm9kZSwgZXhjZXNzRG9tQ2hpbGRyZW4pO1xuXHRcdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IE5VTEw7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPSBuZXdQcm9wcykpIHtcblx0XHRcdGRvbS5kYXRhID0gbmV3UHJvcHM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGV4Y2Vzc0RvbUNoaWxkcmVuIHdhcyBub3QgbnVsbCwgcmVwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQncyBjaGlsZHJlbjpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9XG5cdFx0XHRub2RlVHlwZSA9PSAndGV4dGFyZWEnICYmIG5ld1Byb3BzLmRlZmF1bHRWYWx1ZSAhPSBOVUxMXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IGV4Y2Vzc0RvbUNoaWxkcmVuICYmIHNsaWNlLmNhbGwoZG9tLmNoaWxkTm9kZXMpO1xuXG5cdFx0Ly8gSWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSBub3QgaHlkcmF0aW5nIGJ1dCBhcmUgdXNpbmdcblx0XHQvLyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET01cblx0XHQvLyBhdHRyaWJ1dGVzIHRvIGRpZmYgdGhlbVxuXHRcdGlmICghaXNIeWRyYXRpbmcgJiYgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0b2xkUHJvcHMgPSB7fTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZSA9IGRvbS5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0XHRvbGRQcm9wc1t2YWx1ZS5uYW1lXSA9IHZhbHVlLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBvbGRQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0b2xkSHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aSAhPSAnY2hpbGRyZW4nICYmXG5cdFx0XHRcdCEoaSBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gbmV3UHJvcHMpICYmXG5cdFx0XHRcdCEoaSA9PSAnY2hlY2tlZCcgJiYgJ2RlZmF1bHRDaGVja2VkJyBpbiBuZXdQcm9wcylcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIE5VTEwsIHZhbHVlLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGZvciAoaSBpbiBuZXdQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBuZXdQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0bmV3Q2hpbGRyZW4gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0XHRcdG5ld0h0bWwgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAndmFsdWUnKSB7XG5cdFx0XHRcdGlucHV0VmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnY2hlY2tlZCcpIHtcblx0XHRcdFx0Y2hlY2tlZCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0KCFpc0h5ZHJhdGluZyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgJiZcblx0XHRcdFx0b2xkUHJvcHNbaV0gIT09IHZhbHVlXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCB2YWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFpc0h5ZHJhdGluZyAmJlxuXHRcdFx0XHQoIW9sZEh0bWwgfHxcblx0XHRcdFx0XHQobmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwgJiYgbmV3SHRtbC5fX2h0bWwgIT0gZG9tLmlubmVySFRNTCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IG5ld0h0bWwuX19odG1sO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG9sZEh0bWwpIGRvbS5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdG5ld1ZOb2RlLnR5cGUgPT0gJ3RlbXBsYXRlJyA/IGRvbS5jb250ZW50IDogZG9tLFxuXHRcdFx0XHRpc0FycmF5KG5ld0NoaWxkcmVuKSA/IG5ld0NoaWxkcmVuIDogW25ld0NoaWxkcmVuXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRub2RlVHlwZSA9PSAnZm9yZWlnbk9iamVjdCcgPyBYSFRNTF9OQU1FU1BBQ0UgOiBuYW1lc3BhY2UsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5cblx0XHRcdFx0XHQ/IGV4Y2Vzc0RvbUNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0OiBvbGRWTm9kZS5fY2hpbGRyZW4gJiYgZ2V0RG9tU2libGluZyhvbGRWTm9kZSwgMCksXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb25cblx0XHRpZiAoIWlzSHlkcmF0aW5nIHx8IG5vZGVUeXBlID09ICd0ZXh0YXJlYScpIHtcblx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0aWYgKG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgaW5wdXRWYWx1ZSA9PSBOVUxMKSB7XG5cdFx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpbnB1dFZhbHVlICE9IFVOREVGSU5FRCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGlucHV0VmFsdWUgIT09IGRvbVtpXSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PSAncHJvZ3Jlc3MnICYmICFpbnB1dFZhbHVlKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdvcHRpb24nICYmIGlucHV0VmFsdWUgIT0gb2xkUHJvcHNbaV0pKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgaW5wdXRWYWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSAnY2hlY2tlZCc7XG5cdFx0XHRpZiAoY2hlY2tlZCAhPSBVTkRFRklORUQgJiYgY2hlY2tlZCAhPSBkb21baV0pIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBjaGVja2VkLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7UmVmPGFueT4gJiB7IF91bm1vdW50PzogdW5rbm93biB9fSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGhhc1JlZlVubW91bnQgPSB0eXBlb2YgcmVmLl91bm1vdW50ID09ICdmdW5jdGlvbic7XG5cdFx0XHRpZiAoaGFzUmVmVW5tb3VudCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgbGlrZSBtb3ZpbmcgbmFycm93aW5nIGNoZWNrcyBpbnRvIHZhcmlhYmxlc1xuXHRcdFx0XHRyZWYuX3VubW91bnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFoYXNSZWZVbm1vdW50IHx8IHZhbHVlICE9IE5VTEwpIHtcblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGNsZWFudXAgZnVuY3Rpb24gb24gdGhlIGZ1bmN0aW9uXG5cdFx0XHRcdC8vIGluc3RhbmNlIG9iamVjdCBpdHNlbGYgdG8gYXZvaWQgc2hhcGVcblx0XHRcdFx0Ly8gdHJhbnNpdGlvbmluZyB2bm9kZVxuXHRcdFx0XHRyZWYuX3VubW91bnQgPSByZWYodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7Vk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXQgaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgTlVMTCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IE5VTEwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSByLl9nbG9iYWxDb250ZXh0ID0gTlVMTDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9ICdmdW5jdGlvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUpIHtcblx0XHRyZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXHR9XG5cblx0dm5vZGUuX2NvbXBvbmVudCA9IHZub2RlLl9wYXJlbnQgPSB2bm9kZS5fZG9tID0gVU5ERUZJTkVEO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCAiaW1wb3J0IHsgRU1QVFlfT0JKLCBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29tbWl0Um9vdCwgZGlmZiB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBSZW5kZXIgYSBQcmVhY3QgdmlydHVhbCBub2RlIGludG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0byByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zNzk0XG5cdGlmIChwYXJlbnREb20gPT0gZG9jdW1lbnQpIHtcblx0XHRwYXJlbnREb20gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBOVUxMXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8IHBhcmVudERvbSkuX2NoaWxkcmVuID1cblx0XHRjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBOVUxMLCBbdm5vZGVdKTtcblxuXHQvLyBMaXN0IG9mIGVmZmVjdHMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBkaWZmaW5nLlxuXHRsZXQgY29tbWl0UXVldWUgPSBbXSxcblx0XHRyZWZRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm5hbWVzcGFjZVVSSSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gW3JlcGxhY2VOb2RlXVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0XHQ/IE5VTExcblx0XHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdFx0XHQ6IE5VTEwsXG5cdFx0Y29tbWl0UXVldWUsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IHJlcGxhY2VOb2RlXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nLFxuXHRcdHJlZlF1ZXVlXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlLCByZWZRdWV1ZSk7XG5cblx0Ly8gVGhlIGxpdmUgY2hpbGRyZW4gYXJlIHRyYWNrZWQgb24gX2NoaWxkcmVuIGFmdGVyIGRpZmZpbmcuXG5cdHZub2RlLnByb3BzLmNoaWxkcmVuID0gTlVMTDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsICJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0c1xuICogY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZFxuICogYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGxldCBkZWZhdWx0UHJvcHM7XG5cblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRkZWZhdWx0UHJvcHMgPSB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcztcblx0fVxuXG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChwcm9wc1tpXSA9PT0gVU5ERUZJTkVEICYmIGRlZmF1bHRQcm9wcyAhPSBVTkRFRklORUQpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0fVxuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdE5VTExcblx0KTtcbn1cbiIsICJpbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3IHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdFxuICogZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlciBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmdcbiAqIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudFR5cGV9ICovXG5cdFx0Y3Rvcixcblx0XHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdFx0aGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCBudWxsLCAiaW1wb3J0IHsgb3B0aW9ucyBhcyBfb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRJbmRleDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgY3VycmVudENvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgcHJldmlvdXNDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRIb29rID0gMDtcblxuLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSAqL1xubGV0IGFmdGVyUGFpbnRFZmZlY3RzID0gW107XG5cbi8vIENhc3QgdG8gdXNlIGludGVybmFsIE9wdGlvbnMgdHlwZVxuY29uc3Qgb3B0aW9ucyA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc30gKi8gKF9vcHRpb25zKTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbmxldCBvbGRSb290ID0gb3B0aW9ucy5fcm9vdDtcblxuLy8gV2UgdGFrZSB0aGUgbWluaW11bSB0aW1lb3V0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gZW5zdXJlIHRoYXRcbi8vIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBuZXh0IGZyYW1lLiAzNW1zIGlzIGJhc2VkIG9uIGEgMzBoelxuLy8gcmVmcmVzaCByYXRlLCB3aGljaCBpcyB0aGUgbWluaW11bSByYXRlIGZvciBhIHNtb290aCB1c2VyIGV4cGVyaWVuY2UuXG5jb25zdCBSQUZfVElNRU9VVCA9IDM1O1xubGV0IHByZXZSYWY7XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yb290ID0gKHZub2RlLCBwYXJlbnREb20pID0+IHtcblx0aWYgKHZub2RlICYmIHBhcmVudERvbS5fY2hpbGRyZW4gJiYgcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaykge1xuXHRcdHZub2RlLl9tYXNrID0gcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaztcblx0fVxuXG5cdGlmIChvbGRSb290KSBvbGRSb290KHZub2RlLCBwYXJlbnREb20pO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fcmVuZGVyID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSBvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRjdXJyZW50SW5kZXggPSAwO1xuXG5cdGNvbnN0IGhvb2tzID0gY3VycmVudENvbXBvbmVudC5fX2hvb2tzO1xuXHRpZiAoaG9va3MpIHtcblx0XHRpZiAocHJldmlvdXNDb21wb25lbnQgPT09IGN1cnJlbnRDb21wb25lbnQpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50SW5kZXggPSAwO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxuLy8gVE9ETzogSW1wcm92ZSB0eXBpbmcgb2YgY29tbWl0UXVldWUgcGFyYW1ldGVyXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUsIGNvbW1pdFF1ZXVlOiBhbnkpID0+IHZvaWR9ICovXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3Muc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHt9KTtcblx0fVxuXG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBTXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IFtpbml0aWFsU3RhdGVdXG4gKiBAcmV0dXJucyB7W1MsIChzdGF0ZTogUykgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcblx0Y3VycmVudEhvb2sgPSAxO1xuXHRyZXR1cm4gdXNlUmVkdWNlcihpbnZva2VPclJldHVybiwgaW5pdGlhbFN0YXRlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gQVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPFMsIEE+fSByZWR1Y2VyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgUywgKHN0YXRlOiBTKSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGxldCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cdFx0XHRjb25zdCBwcmV2Q1dVID0gY3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlO1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBmb3JjZWQgdXBkYXRlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgIHdpbGxcblx0XHRcdC8vIG5vdCBiZSBjYWxsZWQuIEJ1dCB3ZSB1c2UgdGhhdCB0byB1cGRhdGUgdGhlIGhvb2sgdmFsdWVzLCBzbyB3ZVxuXHRcdFx0Ly8gbmVlZCB0byBjYWxsIGl0LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvcmNlKSB7XG5cdFx0XHRcdFx0bGV0IHRtcCA9IHByZXZTY3U7XG5cdFx0XHRcdFx0Ly8gQ2xlYXIgdG8gYXZvaWQgb3RoZXIgc0NVIGhvb2tzIGZyb20gYmVpbmcgY2FsbGVkXG5cdFx0XHRcdFx0cHJldlNjdSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR1cGRhdGVIb29rU3RhdGUocCwgcywgYyk7XG5cdFx0XHRcdFx0cHJldlNjdSA9IHRtcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2Q1dVKSBwcmV2Q1dVLmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBUaGlzIFNDVSBoYXMgdGhlIHB1cnBvc2Ugb2YgYmFpbGluZyBvdXQgYWZ0ZXIgcmVwZWF0ZWQgdXBkYXRlc1xuXHRcdFx0Ly8gdG8gc3RhdGVmdWwgaG9va3MuXG5cdFx0XHQvLyB3ZSBzdG9yZSB0aGUgbmV4dCB2YWx1ZSBpbiBfbmV4dFZhbHVlWzBdIGFuZCBrZWVwIGRvaW5nIHRoYXQgZm9yIGFsbFxuXHRcdFx0Ly8gc3RhdGUgc2V0dGVycywgaWYgd2UgaGF2ZSBuZXh0IHN0YXRlcyBhbmRcblx0XHRcdC8vIGFsbCBuZXh0IHN0YXRlcyB3aXRoaW4gYSBjb21wb25lbnQgZW5kIHVwIGJlaW5nIGVxdWFsIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlXG5cdFx0XHQvLyB3ZSBhcmUgc2FmZSB0byBiYWlsIG91dCBmb3IgdGhpcyBzcGVjaWZpYyBjb21wb25lbnQuXG5cdFx0XHQvKipcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50W1wic2hvdWxkQ29tcG9uZW50VXBkYXRlXCJdfVxuXHRcdFx0ICovXG5cdFx0XHQvLyBAdHMtaWdub3JlIC0gV2UgZG9uJ3QgdXNlIFRTIHRvIGRvd250cmFuc3BpbGVcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Ly8gV2UgY2hlY2sgd2hldGhlciB3ZSBoYXZlIGNvbXBvbmVudHMgd2l0aCBhIG5leHRWYWx1ZSBzZXQgdGhhdFxuXHRcdFx0XHQvLyBoYXZlIHZhbHVlcyB0aGF0IGFyZW4ndCBlcXVhbCB0byBvbmUgYW5vdGhlciB0aGlzIHB1c2hlc1xuXHRcdFx0XHQvLyB1cyB0byB1cGRhdGUgZnVydGhlciBkb3duIHRoZSB0cmVlXG5cdFx0XHRcdGxldCB1cGRhdGVkSG9vayA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHA7XG5cdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3Quc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZWRIb29rID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHByZXZTY3UpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRIb29rID8gcmVzdWx0IHx8IHNob3VsZFVwZGF0ZSA6IHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAhdXBkYXRlZEhvb2sgfHwgc2hvdWxkVXBkYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHVwZGF0ZUhvb2tTdGF0ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKiBAdHlwZSB7KGluaXRpYWxWYWx1ZTogdW5rbm93bikgPT4gdW5rbm93bn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0cmVmKG51bGwpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSByZXN1bHQoKTtcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZhY3RvcnlcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGU8VD59ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGZhY3RvcnkoKTtcblx0XHRzdGF0ZS5fYXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKFxuXHRcdFx0Zm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IC8qKiBAdHlwZSB7YW55fSovICh2YWx1ZSlcblx0XHQpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHsoZXJyb3I6IHVua25vd24sIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKiBAcmV0dXJucyB7W3Vua25vd24sICgpID0+IHZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuLyoqIEB0eXBlIHsoKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuSWRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0Y29uc3QgaG9va3MgPSBjb21wb25lbnQuX19ob29rcztcblx0XHRpZiAoIWNvbXBvbmVudC5fcGFyZW50RG9tIHx8ICFob29rcykgY29udGludWU7XG5cdFx0dHJ5IHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH1cbn1cblxubGV0IEhBU19SQUYgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09ICdmdW5jdGlvbic7XG5cbi8qKlxuICogU2NoZWR1bGUgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBicm93c2VyIGhhcyBhIGNoYW5jZSB0byBwYWludCBhIG5ldyBmcmFtZS5cbiAqIERvIHRoaXMgYnkgY29tYmluaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSAockFGKSArIHNldFRpbWVvdXQgdG8gaW52b2tlIGEgY2FsbGJhY2sgYWZ0ZXJcbiAqIHRoZSBuZXh0IGJyb3dzZXIgZnJhbWUuXG4gKlxuICogQWxzbywgc2NoZWR1bGUgYSB0aW1lb3V0IGluIHBhcmFsbGVsIHRvIHRoZSB0aGUgckFGIHRvIGVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZFxuICogZXZlbiBpZiBSQUYgZG9lc24ndCBmaXJlIChmb3IgZXhhbXBsZSBpZiB0aGUgYnJvd3NlciB0YWIgaXMgbm90IHZpc2libGUpXG4gKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBhZnRlck5leHRGcmFtZShjYWxsYmFjaykge1xuXHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRpZiAoSEFTX1JBRikgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoZG9uZSwgUkFGX1RJTUVPVVQpO1xuXG5cdGxldCByYWY7XG5cdGlmIChIQVNfUkFGKSB7XG5cdFx0cmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRvbmUpO1xuXHR9XG59XG5cbi8vIE5vdGU6IGlmIHNvbWVvbmUgdXNlZCBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuLy8gdGhlbiBlZmZlY3RzIHdpbGwgQUxXQVlTIHJ1biBvbiB0aGUgTkVYVCBmcmFtZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IG9uZSwgaW5jdXJyaW5nIGEgfjE2bXMgZGVsYXkuXG4vLyBQZXJoYXBzIHRoaXMgaXMgbm90IHN1Y2ggYSBiaWcgZGVhbC5cbi8qKlxuICogU2NoZWR1bGUgYWZ0ZXJQYWludEVmZmVjdHMgZmx1c2ggYWZ0ZXIgdGhlIGJyb3dzZXIgcGFpbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3UXVldWVMZW5ndGhcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUVmZmVjdChob29rKSB7XG5cdC8vIEEgaG9vayBjYWxsIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGhvb2suX2NsZWFudXAgPSBob29rLl92YWx1ZSgpO1xuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gb2xkQXJnc1xuICogQHBhcmFtIHt1bmtub3duW119IG5ld0FyZ3NcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIEFyZ1xuICogQHBhcmFtIHtBcmd9IGFyZ1xuICogQHBhcmFtIHsoYXJnOiBBcmcpID0+IGFueX0gZlxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gaW52b2tlT3JSZXR1cm4oYXJnLCBmKSB7XG5cdHJldHVybiB0eXBlb2YgZiA9PSAnZnVuY3Rpb24nID8gZihhcmcpIDogZjtcbn1cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICIvLyBTY2VuZSBkb2N1bWVudCB0eXBlcyBzaGFyZWQgYnkgY2xpZW50IGFuZCBzZXJ2ZXIsIHBsdXMgc2FuaXRpemVycyBhbmQgdGhlXG4vLyBKU09OIGNvZGVjLiBBIHNjZW5lIGlzIHNtYWxsIChwYXJhbXMgb25seSkgXHUyMDE0IG1lZGlhIGJsb2JzIGxpdmUgY2xpZW50LXNpZGUuXG5cbmV4cG9ydCBjb25zdCBTQ0VORV9EQVRBX0xJTUlUID0gNjBfMDAwO1xuZXhwb3J0IGNvbnN0IFRIVU1CX0xJTUlUID0gNjBfMDAwO1xuZXhwb3J0IGNvbnN0IE1BWF9MQVlFUlMgPSAxMjtcblxuZXhwb3J0IGNvbnN0IE1FRElBX0tJTkRTID0gW1wiaW1hZ2VcIiwgXCJ2aWRlb1wiLCBcImF1ZGlvXCIsIFwiZGF0YVwiXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIE1lZGlhS2luZCA9ICh0eXBlb2YgTUVESUFfS0lORFMpW251bWJlcl07XG5cbmV4cG9ydCBjb25zdCBCTEVORF9NT0RFUyA9IFtcbiAgXCJub3JtYWxcIixcbiAgXCJhZGRcIixcbiAgXCJzY3JlZW5cIixcbiAgXCJtdWx0aXBseVwiLFxuICBcIm92ZXJsYXlcIixcbiAgXCJkaWZmZXJlbmNlXCIsXG4gIFwibGlnaHRlblwiLFxuICBcImRhcmtlblwiLFxuXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEJsZW5kTW9kZSA9ICh0eXBlb2YgQkxFTkRfTU9ERVMpW251bWJlcl07XG5cbmV4cG9ydCBjb25zdCBUSUxFX01PREVTID0gW1wiY3JvcFwiLCBcInJlcGVhdFwiLCBcIm1pcnJvclwiXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEJHX01PREVTID0gW1widm9pZFwiLCBcImdyYWRpZW50XCIsIFwicGxhc21hXCIsIFwidHVubmVsXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgUE9JTlRFUl9NT0RFUyA9IFtcInZvcnRleFwiLCBcImdyYXZpdHlcIiwgXCJwcmlzbVwiLCBcIm1lbHRcIl0gYXMgY29uc3Q7XG5cbi8qKiBQZXItbGF5ZXIgZWZmZWN0ICsgdHJhbnNmb3JtIHN0YWNrLiBBbGwgMC4uMSB1bmxlc3Mgbm90ZWQuICovXG5leHBvcnQgdHlwZSBMYXllckZ4ID0ge1xuICAvLyBUcmFuc2Zvcm0gKHNjZW5lIHVuaXRzOiB4L3kgYXJlIGNlbnRlciBvZmZzZXRzLCAtMi4uMjsgc2NhbGUgMC4wNS4uNilcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHNjYWxlOiBudW1iZXI7XG4gIC8qKiBEZWdyZWVzICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgYmxlbmQ6IEJsZW5kTW9kZTtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgLyoqIDAgY3JvcCwgMSByZXBlYXQsIDIgbWlycm9yLXJlcGVhdCBcdTIwMTQgcmVwZWF0IG1ha2VzIGEgc2luZ2xlIGltYWdlIGluZmluaXRlICovXG4gIHRpbGU6IG51bWJlcjtcbiAgLy8gRGlzdG9ydFxuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIHBpeGVsYXRlOiBudW1iZXI7XG4gIC8qKiAtMSBwaW5jaCAuLiAxIGJ1bGdlICovXG4gIGJ1bGdlOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICAvLyBDb2xvclxuICBodWU6IG51bWJlcjtcbiAgLyoqIDAuLjIgKi9cbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBjb250cmFzdDogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBicmlnaHRuZXNzOiBudW1iZXI7XG4gIGludmVydDogbnVtYmVyO1xuICBwb3N0ZXJpemU6IG51bWJlcjtcbiAgY2hyb21hOiBudW1iZXI7XG4gIGVkZ2VzOiBudW1iZXI7XG4gIHRpbnRBbW91bnQ6IG51bWJlcjtcbiAgdGludENvbG9yOiBzdHJpbmc7XG4gIC8vIE1vdGlvbiAoYW5pbWF0ZWQgYnkgdGhlIGVuZ2luZSBjbG9jaylcbiAgLyoqIC0xLi4xIHJldm9sdXRpb25zLWlzaCAqL1xuICBzcGluOiBudW1iZXI7XG4gIGRyaWZ0OiBudW1iZXI7XG4gIHB1bHNlOiBudW1iZXI7XG4gIHNoaW1tZXI6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lTGF5ZXIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBJbmRleGVkREIgbWVkaWEga2V5IG9uIHRoZSBjbGllbnQgdGhhdCBjcmVhdGVkIGl0LiAqL1xuICBpbWFnZUlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEhvdyB0aGUgSW5kZXhlZERCIGJsb2Igc2hvdWxkIGJlIGRlY29kZWQgLyBwbGF5ZWQuIERlZmF1bHRzIHRvIGltYWdlLiAqL1xuICBtZWRpYUtpbmQ6IE1lZGlhS2luZDtcbiAgZng6IExheWVyRng7XG59O1xuXG4vKiogR2xvYmFsIHBvc3QtcHJvY2Vzc2luZyBwYXJhbXMuIEFsbCAwLi4xIHVubGVzcyBub3RlZC4gKi9cbmV4cG9ydCB0eXBlIEdsb2JhbEZ4ID0ge1xuICBiZ01vZGU6IG51bWJlcjtcbiAgYmdBOiBzdHJpbmc7XG4gIGJnQjogc3RyaW5nO1xuICAvLyBGZWVkYmFja1xuICBmZWVkYmFjazogbnVtYmVyO1xuICB0cmFpbHM6IG51bWJlcjtcbiAgLyoqIC0xLi4xICovXG4gIGZiWm9vbTogbnVtYmVyO1xuICAvKiogLTEuLjEgKi9cbiAgZmJSb3RhdGU6IG51bWJlcjtcbiAgZmJIdWU6IG51bWJlcjtcbiAgLy8gU3BhY2VcbiAgd2FycDogbnVtYmVyO1xuICBzd2lybDogbnVtYmVyO1xuICByaXBwbGU6IG51bWJlcjtcbiAgem9vbTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICAvLyBDb2xvclxuICBjaHJvbWE6IG51bWJlcjtcbiAgaHVlT3JiaXQ6IG51bWJlcjtcbiAgLyoqIDAuLjIgKi9cbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBjb250cmFzdDogbnVtYmVyO1xuICBzb2xhcml6ZTogbnVtYmVyO1xuICAvLyBTaWduYWxcbiAgZ3JhaW46IG51bWJlcjtcbiAgc2NhbmxpbmVzOiBudW1iZXI7XG4gIHZpZ25ldHRlOiBudW1iZXI7XG4gIHN0cm9iZTogbnVtYmVyO1xuICAvLyBNb3Rpb25cbiAgLyoqIDAuLjIgKi9cbiAgc3BlZWQ6IG51bWJlcjtcbiAgYXVkaW9SZWFjdDogbnVtYmVyO1xuICAvLyBDdXJzb3JcbiAgcG9pbnRlckZvcmNlOiBudW1iZXI7XG4gIHBvaW50ZXJTaXplOiBudW1iZXI7XG4gIHBvaW50ZXJNb2RlOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBTY2VuZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYXllcnM6IFNjZW5lTGF5ZXJbXTtcbiAgZ2xvYmFsOiBHbG9iYWxGeDtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lTWV0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgdGh1bWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX0ZYOiBMYXllckZ4ID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBzY2FsZTogMSxcbiAgcm90YXRpb246IDAsXG4gIG9wYWNpdHk6IDEsXG4gIGJsZW5kOiBcIm5vcm1hbFwiLFxuICB2aXNpYmxlOiB0cnVlLFxuICB0aWxlOiAwLFxuICB3YXJwOiAwLFxuICBzd2lybDogMCxcbiAgcmlwcGxlOiAwLFxuICBrYWxlaWRvOiAwLFxuICBwaXhlbGF0ZTogMCxcbiAgYnVsZ2U6IDAsXG4gIG1pcnJvcjogMCxcbiAgaHVlOiAwLFxuICBzYXR1cmF0aW9uOiAxLFxuICBjb250cmFzdDogMSxcbiAgYnJpZ2h0bmVzczogMSxcbiAgaW52ZXJ0OiAwLFxuICBwb3N0ZXJpemU6IDAsXG4gIGNocm9tYTogMCxcbiAgZWRnZXM6IDAsXG4gIHRpbnRBbW91bnQ6IDAsXG4gIHRpbnRDb2xvcjogXCIjYTg3ODgwXCIsXG4gIHNwaW46IDAsXG4gIGRyaWZ0OiAwLFxuICBwdWxzZTogMCxcbiAgc2hpbW1lcjogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dMT0JBTF9GWDogR2xvYmFsRnggPSB7XG4gIGJnTW9kZTogMCxcbiAgYmdBOiBcIiMwNjA2MDhcIixcbiAgYmdCOiBcIiMxYTEyMTZcIixcbiAgZmVlZGJhY2s6IDAsXG4gIHRyYWlsczogMC42LFxuICBmYlpvb206IDAsXG4gIGZiUm90YXRlOiAwLFxuICBmYkh1ZTogMCxcbiAgd2FycDogMCxcbiAgc3dpcmw6IDAsXG4gIHJpcHBsZTogMCxcbiAgem9vbTogMCxcbiAga2FsZWlkbzogMCxcbiAgbWlycm9yOiAwLFxuICBjaHJvbWE6IDAsXG4gIGh1ZU9yYml0OiAwLFxuICBzYXR1cmF0aW9uOiAxLFxuICBjb250cmFzdDogMSxcbiAgc29sYXJpemU6IDAsXG4gIGdyYWluOiAwLFxuICBzY2FubGluZXM6IDAsXG4gIHZpZ25ldHRlOiAwLjIyLFxuICBzdHJvYmU6IDAsXG4gIHNwZWVkOiAxLFxuICBhdWRpb1JlYWN0OiAwLFxuICBwb2ludGVyRm9yY2U6IDAuNixcbiAgcG9pbnRlclNpemU6IDAuMzUsXG4gIHBvaW50ZXJNb2RlOiAwLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gbnVtKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gY2xhbXAoZmluaXRlKHZhbHVlLCBmYWxsYmFjayksIG1pbiwgbWF4KTtcbn1cblxuZnVuY3Rpb24gY29sb3IodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplTGF5ZXJGeChpbnB1dDogUGFydGlhbDxMYXllckZ4PiB8IG51bGwgfCB1bmRlZmluZWQpOiBMYXllckZ4IHtcbiAgY29uc3QgdCA9IGlucHV0ID8/IHt9O1xuICBjb25zdCBkID0gREVGQVVMVF9MQVlFUl9GWDtcbiAgcmV0dXJuIHtcbiAgICB4OiBudW0odC54LCBkLngsIC0zLCAzKSxcbiAgICB5OiBudW0odC55LCBkLnksIC0zLCAzKSxcbiAgICBzY2FsZTogbnVtKHQuc2NhbGUsIGQuc2NhbGUsIDAuMDUsIDYpLFxuICAgIHJvdGF0aW9uOiBudW0odC5yb3RhdGlvbiwgZC5yb3RhdGlvbiwgLTM2MDAsIDM2MDApLFxuICAgIG9wYWNpdHk6IG51bSh0Lm9wYWNpdHksIGQub3BhY2l0eSwgMCwgMSksXG4gICAgYmxlbmQ6IEJMRU5EX01PREVTLmluY2x1ZGVzKHQuYmxlbmQgYXMgQmxlbmRNb2RlKSA/ICh0LmJsZW5kIGFzIEJsZW5kTW9kZSkgOiBcIm5vcm1hbFwiLFxuICAgIHZpc2libGU6IHR5cGVvZiB0LnZpc2libGUgPT09IFwiYm9vbGVhblwiID8gdC52aXNpYmxlIDogdHJ1ZSxcbiAgICB0aWxlOiBudW0odC50aWxlLCBkLnRpbGUsIDAsIDIpLFxuICAgIHdhcnA6IG51bSh0LndhcnAsIGQud2FycCwgMCwgMSksXG4gICAgc3dpcmw6IG51bSh0LnN3aXJsLCBkLnN3aXJsLCAwLCAxKSxcbiAgICByaXBwbGU6IG51bSh0LnJpcHBsZSwgZC5yaXBwbGUsIDAsIDEpLFxuICAgIGthbGVpZG86IG51bSh0LmthbGVpZG8sIGQua2FsZWlkbywgMCwgMSksXG4gICAgcGl4ZWxhdGU6IG51bSh0LnBpeGVsYXRlLCBkLnBpeGVsYXRlLCAwLCAxKSxcbiAgICBidWxnZTogbnVtKHQuYnVsZ2UsIGQuYnVsZ2UsIC0xLCAxKSxcbiAgICBtaXJyb3I6IG51bSh0Lm1pcnJvciwgZC5taXJyb3IsIDAsIDEpLFxuICAgIGh1ZTogbnVtKHQuaHVlLCBkLmh1ZSwgMCwgMSksXG4gICAgc2F0dXJhdGlvbjogbnVtKHQuc2F0dXJhdGlvbiwgZC5zYXR1cmF0aW9uLCAwLCAyKSxcbiAgICBjb250cmFzdDogbnVtKHQuY29udHJhc3QsIGQuY29udHJhc3QsIDAsIDIpLFxuICAgIGJyaWdodG5lc3M6IG51bSh0LmJyaWdodG5lc3MsIGQuYnJpZ2h0bmVzcywgMCwgMiksXG4gICAgaW52ZXJ0OiBudW0odC5pbnZlcnQsIGQuaW52ZXJ0LCAwLCAxKSxcbiAgICBwb3N0ZXJpemU6IG51bSh0LnBvc3Rlcml6ZSwgZC5wb3N0ZXJpemUsIDAsIDEpLFxuICAgIGNocm9tYTogbnVtKHQuY2hyb21hLCBkLmNocm9tYSwgMCwgMSksXG4gICAgZWRnZXM6IG51bSh0LmVkZ2VzLCBkLmVkZ2VzLCAwLCAxKSxcbiAgICB0aW50QW1vdW50OiBudW0odC50aW50QW1vdW50LCBkLnRpbnRBbW91bnQsIDAsIDEpLFxuICAgIHRpbnRDb2xvcjogY29sb3IodC50aW50Q29sb3IsIGQudGludENvbG9yKSxcbiAgICBzcGluOiBudW0odC5zcGluLCBkLnNwaW4sIC0xLCAxKSxcbiAgICBkcmlmdDogbnVtKHQuZHJpZnQsIGQuZHJpZnQsIDAsIDEpLFxuICAgIHB1bHNlOiBudW0odC5wdWxzZSwgZC5wdWxzZSwgMCwgMSksXG4gICAgc2hpbW1lcjogbnVtKHQuc2hpbW1lciwgZC5zaGltbWVyLCAwLCAxKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplR2xvYmFsRngoaW5wdXQ6IFBhcnRpYWw8R2xvYmFsRng+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgdCA9IGlucHV0ID8/IHt9O1xuICBjb25zdCBkID0gREVGQVVMVF9HTE9CQUxfRlg7XG4gIHJldHVybiB7XG4gICAgYmdNb2RlOiBudW0odC5iZ01vZGUsIGQuYmdNb2RlLCAwLCBCR19NT0RFUy5sZW5ndGggLSAxKSxcbiAgICBiZ0E6IGNvbG9yKHQuYmdBLCBkLmJnQSksXG4gICAgYmdCOiBjb2xvcih0LmJnQiwgZC5iZ0IpLFxuICAgIGZlZWRiYWNrOiBudW0odC5mZWVkYmFjaywgZC5mZWVkYmFjaywgMCwgMSksXG4gICAgdHJhaWxzOiBudW0odC50cmFpbHMsIGQudHJhaWxzLCAwLCAxKSxcbiAgICBmYlpvb206IG51bSh0LmZiWm9vbSwgZC5mYlpvb20sIC0xLCAxKSxcbiAgICBmYlJvdGF0ZTogbnVtKHQuZmJSb3RhdGUsIGQuZmJSb3RhdGUsIC0xLCAxKSxcbiAgICBmYkh1ZTogbnVtKHQuZmJIdWUsIGQuZmJIdWUsIDAsIDEpLFxuICAgIHdhcnA6IG51bSh0LndhcnAsIGQud2FycCwgMCwgMSksXG4gICAgc3dpcmw6IG51bSh0LnN3aXJsLCBkLnN3aXJsLCAwLCAxKSxcbiAgICByaXBwbGU6IG51bSh0LnJpcHBsZSwgZC5yaXBwbGUsIDAsIDEpLFxuICAgIHpvb206IG51bSh0Lnpvb20sIGQuem9vbSwgMCwgMSksXG4gICAga2FsZWlkbzogbnVtKHQua2FsZWlkbywgZC5rYWxlaWRvLCAwLCAxKSxcbiAgICBtaXJyb3I6IG51bSh0Lm1pcnJvciwgZC5taXJyb3IsIDAsIDEpLFxuICAgIGNocm9tYTogbnVtKHQuY2hyb21hLCBkLmNocm9tYSwgMCwgMSksXG4gICAgaHVlT3JiaXQ6IG51bSh0Lmh1ZU9yYml0LCBkLmh1ZU9yYml0LCAwLCAxKSxcbiAgICBzYXR1cmF0aW9uOiBudW0odC5zYXR1cmF0aW9uLCBkLnNhdHVyYXRpb24sIDAsIDIpLFxuICAgIGNvbnRyYXN0OiBudW0odC5jb250cmFzdCwgZC5jb250cmFzdCwgMCwgMiksXG4gICAgc29sYXJpemU6IG51bSh0LnNvbGFyaXplLCBkLnNvbGFyaXplLCAwLCAxKSxcbiAgICBncmFpbjogbnVtKHQuZ3JhaW4sIGQuZ3JhaW4sIDAsIDEpLFxuICAgIHNjYW5saW5lczogbnVtKHQuc2NhbmxpbmVzLCBkLnNjYW5saW5lcywgMCwgMSksXG4gICAgdmlnbmV0dGU6IG51bSh0LnZpZ25ldHRlLCBkLnZpZ25ldHRlLCAwLCAxKSxcbiAgICBzdHJvYmU6IG51bSh0LnN0cm9iZSwgZC5zdHJvYmUsIDAsIDEpLFxuICAgIHNwZWVkOiBudW0odC5zcGVlZCwgZC5zcGVlZCwgMCwgMiksXG4gICAgYXVkaW9SZWFjdDogbnVtKHQuYXVkaW9SZWFjdCwgZC5hdWRpb1JlYWN0LCAwLCAxKSxcbiAgICBwb2ludGVyRm9yY2U6IG51bSh0LnBvaW50ZXJGb3JjZSwgZC5wb2ludGVyRm9yY2UsIDAsIDEpLFxuICAgIHBvaW50ZXJTaXplOiBudW0odC5wb2ludGVyU2l6ZSwgZC5wb2ludGVyU2l6ZSwgMC4wMiwgMSksXG4gICAgcG9pbnRlck1vZGU6IG51bSh0LnBvaW50ZXJNb2RlLCBkLnBvaW50ZXJNb2RlLCAwLCBQT0lOVEVSX01PREVTLmxlbmd0aCAtIDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5OYW1lKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjbGVhbmVkID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgZmFsbGJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVNjZW5lKGlucHV0OiB1bmtub3duKTogU2NlbmUge1xuICBjb25zdCByYXcgPSAoaW5wdXQgPz8ge30pIGFzIFBhcnRpYWw8U2NlbmU+O1xuICBjb25zdCBsYXllcnNSYXcgPSBBcnJheS5pc0FycmF5KHJhdy5sYXllcnMpID8gcmF3LmxheWVycy5zbGljZSgwLCBNQVhfTEFZRVJTKSA6IFtdO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGNsZWFuTmFtZSh0eXBlb2YgcmF3Lm5hbWUgPT09IFwic3RyaW5nXCIgPyByYXcubmFtZSA6IFwiXCIsIFwiVW50aXRsZWRcIiksXG4gICAgbGF5ZXJzOiBsYXllcnNSYXdcbiAgICAgIC5maWx0ZXIoKGwpOiBsIGlzIFNjZW5lTGF5ZXIgPT4gISFsICYmIHR5cGVvZiBsID09PSBcIm9iamVjdFwiKVxuICAgICAgLm1hcCgobCwgaW5kZXgpID0+ICh7XG4gICAgICAgIGlkOiB0eXBlb2YgbC5pZCA9PT0gXCJzdHJpbmdcIiAmJiBsLmlkID8gbC5pZC5zbGljZSgwLCA0MCkgOiBgbGF5ZXItJHtpbmRleH1gLFxuICAgICAgICBpbWFnZUlkOiB0eXBlb2YgbC5pbWFnZUlkID09PSBcInN0cmluZ1wiID8gbC5pbWFnZUlkLnNsaWNlKDAsIDYwKSA6IFwiXCIsXG4gICAgICAgIG5hbWU6IGNsZWFuTmFtZSh0eXBlb2YgbC5uYW1lID09PSBcInN0cmluZ1wiID8gbC5uYW1lIDogXCJcIiwgXCJMYXllclwiKSxcbiAgICAgICAgbWVkaWFLaW5kOiBNRURJQV9LSU5EUy5pbmNsdWRlcyhsLm1lZGlhS2luZCBhcyBNZWRpYUtpbmQpXG4gICAgICAgICAgPyAobC5tZWRpYUtpbmQgYXMgTWVkaWFLaW5kKVxuICAgICAgICAgIDogXCJpbWFnZVwiLFxuICAgICAgICBmeDogc2FuaXRpemVMYXllckZ4KGwuZngpLFxuICAgICAgfSkpLFxuICAgIGdsb2JhbDogc2FuaXRpemVHbG9iYWxGeChyYXcuZ2xvYmFsKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVNjZW5lKHNjZW5lOiBTY2VuZSk6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzY2VuZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTY2VuZShyYXc6IHN0cmluZyk6IFNjZW5lIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2FuaXRpemVTY2VuZShKU09OLnBhcnNlKHJhdykpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc2FuaXRpemVTY2VuZShudWxsKTtcbiAgfVxufVxuIiwgIi8qKiBBcHAtbGV2ZWwgc2V0dGluZ3MgcGVyc2lzdGVkIGluIGxvY2FsU3RvcmFnZS4gKi9cblxuZXhwb3J0IHR5cGUgQXBwU2V0dGluZ3MgPSB7XG4gICAgcmVjb3JkTWljQXVkaW86IGJvb2xlYW47XG59O1xuXG5jb25zdCBTRVRUSU5HU19LRVkgPSBcInZhdWRpby0yLXNldHRpbmdzXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFVFRJTkdTOiBBcHBTZXR0aW5ncyA9IHsgcmVjb3JkTWljQXVkaW86IGZhbHNlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2V0dGluZ3MoKTogQXBwU2V0dGluZ3Mge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFVFRJTkdTX0tFWSk7XG4gICAgICAgIGlmICghcmF3KSByZXR1cm4geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPEFwcFNldHRpbmdzPjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZE1pY0F1ZGlvOiBCb29sZWFuKHBhcnNlZC5yZWNvcmRNaWNBdWRpbyksXG4gICAgICAgIH07XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiB7IC4uLkRFRkFVTFRfU0VUVElOR1MgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU2V0dGluZ3Moc2V0dGluZ3M6IEFwcFNldHRpbmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU0VUVElOR1NfS0VZLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgcXVvdGEgLyBwcml2YXRlIG1vZGUgKi9cbiAgICB9XG59XG4iLCAiY29uc3QgRU5DT0RFRF9FTlRJVElFUyA9IC9bXCImPF0vO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHN0ciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHN0cikge1xuXHQvLyBTa2lwIGFsbCB3b3JrIGZvciBzdHJpbmdzIHdpdGggbm8gZW50aXRpZXMgbmVlZGluZyBlbmNvZGluZzpcblx0aWYgKHN0ci5sZW5ndGggPT09IDAgfHwgRU5DT0RFRF9FTlRJVElFUy50ZXN0KHN0cikgPT09IGZhbHNlKSByZXR1cm4gc3RyO1xuXG5cdGxldCBsYXN0ID0gMCxcblx0XHRpID0gMCxcblx0XHRvdXQgPSAnJyxcblx0XHRjaCA9ICcnO1xuXG5cdC8vIFNlZWsgZm9yd2FyZCBpbiBzdHIgdW50aWwgdGhlIG5leHQgZW50aXR5IGNoYXI6XG5cdGZvciAoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0Y2ggPSAnJnF1b3Q7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRjaCA9ICcmYW1wOyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2MDpcblx0XHRcdFx0Y2ggPSAnJmx0Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIEFwcGVuZCBza2lwcGVkL2J1ZmZlcmVkIGNoYXJhY3RlcnMgYW5kIHRoZSBlbmNvZGVkIGVudGl0eTpcblx0XHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0XHRvdXQgKz0gY2g7XG5cdFx0Ly8gU3RhcnQgdGhlIG5leHQgc2Vlay9idWZmZXIgYWZ0ZXIgdGhlIGVudGl0eSdzIG9mZnNldDpcblx0XHRsYXN0ID0gaSArIDE7XG5cdH1cblx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdHJldHVybiBvdXQ7XG59XG4iLCAiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGVuY29kZUVudGl0aWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi8uLi9zcmMvY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgZXhwb3J0cyB2YXJpb3VzIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQmFiZWwncyBcImF1dG9tYXRpY1wiIEpTWCBydW50aW1lIEFQSTpcbiAqIC0ganN4KHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeHModHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIF9fc291cmNlLCBfX3NlbGYpXG4gKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIGNyZWF0ZVZOb2RlIGhlcmUgaXMgb3B0aW1pemVkIGZvciBwZXJmb3JtYW5jZS5cbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWY2YjU0YTBiNDYzMjEwMGE3ZGNkMmIzXG4gKi9cblxuLyoqXG4gKiBKU1guRWxlbWVudCBmYWN0b3J5IHVzZWQgYnkgQmFiZWwncyB7cnVudGltZTpcImF1dG9tYXRpY1wifSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZOb2RlWyd0eXBlJ119IHR5cGVcbiAqIEBwYXJhbSB7Vk5vZGVbJ3Byb3BzJ119IHByb3BzXG4gKiBAcGFyYW0ge1ZOb2RlWydrZXknXX0gW2tleV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW2lzU3RhdGljQ2hpbGRyZW5dXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NvdXJjZV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc2VsZl1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgX19zb3VyY2UsIF9fc2VsZikge1xuXHRpZiAoIXByb3BzKSBwcm9wcyA9IHt9O1xuXHQvLyBXZSdsbCB3YW50IHRvIHByZXNlcnZlIGByZWZgIGluIHByb3BzIHRvIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yXG5cdC8vIGZvcndhcmRSZWYgY29tcG9uZW50cyBpbiB0aGUgZnV0dXJlLCBidXQgdGhhdCBzaG91bGQgaGFwcGVuIHZpYVxuXHQvLyBhIHNlcGFyYXRlIFBSLlxuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHMsXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0aWYgKCdyZWYnIGluIG5vcm1hbGl6ZWRQcm9wcykge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXHRcdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdFx0aWYgKGkgPT0gJ3JlZicpIHtcblx0XHRcdFx0cmVmID0gcHJvcHNbaV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge1ZOb2RlICYgeyBfX3NvdXJjZTogYW55OyBfX3NlbGY6IGFueSB9fSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzOiBub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiAtLXZub2RlSWQsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDAsXG5cdFx0X19zb3VyY2UsXG5cdFx0X19zZWxmXG5cdH07XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzLlxuXHQvLyBOb3RlOiBgdHlwZWAgaXMgb2Z0ZW4gYSBTdHJpbmcsIGFuZCBjYW4gYmUgYHVuZGVmaW5lZGAgaW4gZGV2ZWxvcG1lbnQuXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAocmVmID0gdHlwZS5kZWZhdWx0UHJvcHMpKSB7XG5cdFx0Zm9yIChpIGluIHJlZilcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSByZWZbaV07XG5cdFx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB0ZW1wbGF0ZSB2bm9kZS4gVGhpcyBmdW5jdGlvbiBpcyBub3QgZXhwZWN0ZWQgdG8gYmVcbiAqIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdGVtcGxhdGVzXG4gKiBAcGFyYW0gIHtBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fSBleHByc1xuICogQHJldHVybnMge1ZOb2RlfVxuICovXG5mdW5jdGlvbiBqc3hUZW1wbGF0ZSh0ZW1wbGF0ZXMsIC4uLmV4cHJzKSB7XG5cdGNvbnN0IHZub2RlID0gY3JlYXRlVk5vZGUoRnJhZ21lbnQsIHsgdHBsOiB0ZW1wbGF0ZXMsIGV4cHJzIH0pO1xuXHQvLyBCeXBhc3MgcmVuZGVyIHRvIHN0cmluZyB0b3AgbGV2ZWwgRnJhZ21lbnQgb3B0aW1pemF0aW9uXG5cdHZub2RlLmtleSA9IHZub2RlLl92bm9kZTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG5jb25zdCBKU19UT19DU1MgPSB7fTtcbmNvbnN0IENTU19SRUdFWCA9IC9bQS1aXS9nO1xuXG4vKipcbiAqIFVud3JhcCBwb3RlbnRpYWwgc2lnbmFscy5cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nXG5cdFx0PyB2YWx1ZS52YWx1ZU9mKClcblx0XHQ6IHZhbHVlO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBIVE1MIGF0dHJpYnV0ZSB0byBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBub3RcbiAqIGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGVcbiAqIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYXR0cmlidXRlIHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqc3hBdHRyKG5hbWUsIHZhbHVlKSB7XG5cdGlmIChvcHRpb25zLmF0dHIpIHtcblx0XHRjb25zdCByZXN1bHQgPSBvcHRpb25zLmF0dHIobmFtZSwgdmFsdWUpO1xuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHZhbHVlID0gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKTtcblxuXHRpZiAobmFtZSA9PT0gJ3JlZicgfHwgbmFtZSA9PT0gJ2tleScpIHJldHVybiAnJztcblx0aWYgKG5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG5cdFx0XHRsZXQgdmFsID0gdmFsdWVbcHJvcF07XG5cdFx0XHRpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBuYW1lID1cblx0XHRcdFx0XHRwcm9wWzBdID09ICctJ1xuXHRcdFx0XHRcdFx0PyBwcm9wXG5cdFx0XHRcdFx0XHQ6IEpTX1RPX0NTU1twcm9wXSB8fFxuXHRcdFx0XHRcdFx0XHQoSlNfVE9fQ1NTW3Byb3BdID0gcHJvcC5yZXBsYWNlKENTU19SRUdFWCwgJy0kJicpLnRvTG93ZXJDYXNlKCkpO1xuXG5cdFx0XHRcdGxldCBzdWZmaXggPSAnOyc7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRcdC8vIEV4Y2x1ZGUgY3VzdG9tLWF0dHJpYnV0ZXNcblx0XHRcdFx0XHQhbmFtZS5zdGFydHNXaXRoKCctLScpICYmXG5cdFx0XHRcdFx0IUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KG5hbWUpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICdweDsnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciA9IHN0ciArIG5hbWUgKyAnOicgKyB2YWwgKyBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcyhzdHIpICsgJ1wiJztcblx0fVxuXG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dmFsdWUgPT09IGZhbHNlIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBuYW1lO1xuXG5cdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKSArICdcIic7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgZHluYW1pYyBjaGlsZCBwYXNzZWQgdG8gYGpzeFRlbXBsYXRlYC4gVGhpcyBmdW5jdGlvblxuICogaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhXG4gKiBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsIHwgVk5vZGUgfCBBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fVxuICovXG5mdW5jdGlvbiBqc3hFc2NhcGUodmFsdWUpIHtcblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gQ2hlY2sgZm9yIFZOb2RlXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZTtcblxuXHRcdGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZVtpXSA9IGpzeEVzY2FwZSh2YWx1ZVtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVWTm9kZSBhcyBqc3gsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeHMsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeERFVixcblx0RnJhZ21lbnQsXG5cdC8vIHByZWNvbXBpbGVkIEpTWCB0cmFuc2Zvcm1cblx0anN4VGVtcGxhdGUsXG5cdGpzeEF0dHIsXG5cdGpzeEVzY2FwZVxufTtcbiIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgdHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzPzogc3RyaW5nIH07XG5cbmNvbnN0IHN2ZyA9IChwcm9wczogSWNvblByb3BzLCBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4pID0+IChcbiAgICA8c3ZnXG4gICAgICAgIGNsYXNzPXtwcm9wcy5jbGFzcyA/PyBcInctWzE1cHhdIGgtWzE1cHhdXCJ9XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjEuOFwiXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9zdmc+XG4pO1xuXG5leHBvcnQgY29uc3QgSVBsdXMgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk0xMiA1djE0TTUgMTJoMTRcIiAvPik7XG5leHBvcnQgY29uc3QgSURpY2UgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjIuNVwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCIwLjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjlcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuZXhwb3J0IGNvbnN0IElXYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNNSAxOSAxNyA3bTItMi0xLjUgMS41TTE3IDdsMS41IDEuNU05IDUuNSA5LjggNy4zIDExLjYgOCA5LjggOC43IDkgMTAuNSA4LjIgOC43IDYuNCA4IDguMiA3LjNabTkgNyAuNiAxLjQgMS40LjYtMS40LjYtLjYgMS40LS42LTEuNC0xLjQtLjYgMS40LS42WlwiIC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSVNhdmUgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhwLCA8cGF0aCBkPVwiTTEyIDN2MTJtMCAwIDQtNG0tNCA0LTQtNE00IDE3djNoMTZ2LTNcIiAvPik7XG5leHBvcnQgY29uc3QgSUZvbGRlciA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTMgNi41QTEuNSAxLjUgMCAwIDEgNC41IDVoNGwyIDIuNWg5QTEuNSAxLjUgMCAwIDEgMjEgOXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTVBMS41IDEuNSAwIDAgMSAzIDE4WlwiIC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSU1pYyA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHJlY3QgeD1cIjlcIiB5PVwiM1wiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjExXCIgcng9XCIzXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDExLjVhNi41IDYuNSAwIDAgMCAxMyAwTTEyIDE4djNcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmV4cG9ydCBjb25zdCBJRG93bmxvYWQgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhwLCA8cGF0aCBkPVwiTTEyIDR2MTFtMCAwIDQuNS00LjVNMTIgMTUgNy41IDEwLjVNNCAxOWgxNlwiIC8+KTtcbmV4cG9ydCBjb25zdCBJRXhwYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00IDlWNGg1TTIwIDlWNGgtNU00IDE1djVoNW0xMS01djVoLTVcIiAvPik7XG5leHBvcnQgY29uc3QgSUV5ZSA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yLjUgMTJTNiA1LjUgMTIgNS41IDIxLjUgMTIgMjEuNSAxMiAxOCAxOC41IDEyIDE4LjUgMi41IDEyIDIuNSAxMlpcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIyLjZcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmV4cG9ydCBjb25zdCBJRXllT2ZmID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQgNGwxNiAxNk05LjkgNS45QTkuNSA5LjUgMCAwIDEgMTIgNS41YzYgMCA5LjUgNi41IDkuNSA2LjVhMTcgMTcgMCAwIDEtMy4zIDRNNiA3LjVBMTYgMTYgMCAwIDAgMi41IDEyUzYgMTguNSAxMiAxOC41YTkgOSAwIDAgMCAzLS42XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSVRyYXNoID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00LjUgNi41aDE1bS0xMS0yaDdtLTkuNSAyIDEgMTNoMTBsMS0xM00xMCAxMHY2bTQtNnY2XCIgLz4pO1xuZXhwb3J0IGNvbnN0IElDb3B5ID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiOFwiIHk9XCI4XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgcng9XCIxLjVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA1VjUuNU0xNiA1YTEuNSAxLjUgMCAwIDAtMS41LTEuNWgtOUExLjUgMS41IDAgMCAwIDQgNXY5QTEuNSAxLjUgMCAwIDAgNS41IDE1LjVINlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuZXhwb3J0IGNvbnN0IElVcCA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwibTYgMTQgNi02IDYgNlwiIC8+KTtcbmV4cG9ydCBjb25zdCBJRG93biA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwibTYgMTAgNiA2IDYtNlwiIC8+KTtcbmV4cG9ydCBjb25zdCBJUGF1c2UgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk05IDV2MTRNMTUgNXYxNFwiIC8+KTtcbmV4cG9ydCBjb25zdCBJUGxheSA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwiTTcgNXYxNGwxMi03WlwiIC8+KTtcbmV4cG9ydCBjb25zdCBJUGFuZWwgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjQuNVwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHJ4PVwiMS41XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSA0LjV2MTVcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmV4cG9ydCBjb25zdCBJTW92ZSA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTEyIDN2MThNMyAxMmgxOE0xMiAzIDkuNSA1LjVNMTIgM2wyLjUgMi41TTEyIDIxbC0yLjUtMi41TTEyIDIxbDIuNS0yLjVNMyAxMmwyLjUtMi41TTMgMTJsMi41IDIuNU0yMSAxMmwtMi41LTIuNU0yMSAxMmwtMi41IDIuNVwiIC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSVNwYXJrID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgM2wxLjggNS4yTDE5IDEwbC01LjIgMS44TDEyIDE3bC0xLjgtNS4yTDUgMTBsNS4yLTEuOFptNyAxMSAuOCAyLjJMMjIgMTdsLTIuMi44TDE5IDIwbC0uOC0yLjJMMTYgMTdsMi4yLS44WlwiIC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSVNldHRpbmdzID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOS40IDE1YTEuNjUgMS42NSAwIDAgMCAuMzMgMS44MmwuMDYuMDZhMiAyIDAgMCAxLTIuODMgMi44M2wtLjA2LS4wNmExLjY1IDEuNjUgMCAwIDAtMS44Mi0uMzMgMS42NSAxLjY1IDAgMCAwLTEgMS41MVYyMWEyIDIgMCAwIDEtNCAwdi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzLTIuODNsLjA2LS4wNkExLjY1IDEuNjUgMCAwIDAgNC42OCAxNWExLjY1IDEuNjUgMCAwIDAtMS41MS0xSDNhMiAyIDAgMCAxIDAtNGguMDlBMS42NSAxLjY1IDAgMCAwIDQuNiA5YTEuNjUgMS42NSAwIDAgMC0uMzMtMS44MmwtLjA2LS4wNmEyIDIgMCAwIDEgMi44My0yLjgzbC4wNi4wNkExLjY1IDEuNjUgMCAwIDAgOSA0LjY4YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgNCAwdi4wOWExLjY1IDEuNjUgMCAwIDAgMSAxLjUxIDEuNjUgMS42NSAwIDAgMCAxLjgyLS4zM2wuMDYtLjA2YTIgMiAwIDAgMSAyLjgzIDIuODNsLS4wNi4wNkExLjY1IDEuNjUgMCAwIDAgMTkuNCA5YTEuNjUgMS42NSAwIDAgMCAxLjUxIDFIMjFhMiAyIDAgMCAxIDAgNGgtLjA5YTEuNjUgMS42NSAwIDAgMC0xLjUxIDF6XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5leHBvcnQgY29uc3QgSUNoZXZyb25Eb3duID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJtNiA5IDYgNiA2LTZcIiAvPik7XG5leHBvcnQgY29uc3QgSUNoZWNrID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJtNSAxMi41IDQuNSA0LjVMMTkgN1wiIC8+KTtcbiIsICJpbXBvcnQgdHlwZSB7IE1lZGlhS2luZCB9IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcblxuY29uc3QgQVVESU9fRVhUID0gL1xcLihtcDN8d2F2fG9nZ3xtNGF8YWFjfGZsYWN8b3B1c3x3bWEpJC9pO1xuY29uc3QgSU1BR0VfRVhUID0gL1xcLihwbmd8anBlP2d8Z2lmfHdlYnB8Ym1wfHN2Z3xhdmlmfGljbykkL2k7XG5jb25zdCBWSURFT19FWFQgPSAvXFwuKG1wNHx3ZWJtfG1vdnxtNHZ8YXZpfG1rdnxvZ3YpJC9pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGaWxlKGZpbGU6IEZpbGUpOiBNZWRpYUtpbmQge1xuICBjb25zdCB0eXBlID0gZmlsZS50eXBlLnRvTG93ZXJDYXNlKCk7XG4gIGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJ2aWRlby9cIikpIHJldHVybiBcInZpZGVvXCI7XG4gIGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJhdWRpby9cIikpIHJldHVybiBcImF1ZGlvXCI7XG4gIGlmICh0eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHJldHVybiBcImltYWdlXCI7XG4gIGlmIChBVURJT19FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJhdWRpb1wiO1xuICBpZiAoSU1BR0VfRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgaWYgKFZJREVPX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcInZpZGVvXCI7XG4gIHJldHVybiBcImRhdGFcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5QmxvYihibG9iOiBCbG9iLCBuYW1lID0gXCJcIik6IE1lZGlhS2luZCB7XG4gIHJldHVybiBjbGFzc2lmeUZpbGUobmV3IEZpbGUoW2Jsb2JdLCBuYW1lIHx8IFwiZmlsZVwiLCB7IHR5cGU6IGJsb2IudHlwZSB9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUtpbmRMYWJlbChraW5kOiBNZWRpYUtpbmQpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGtpbmQpIHtcbiAgICBjYXNlIFwidmlkZW9cIjpcbiAgICAgIHJldHVybiBcIlZpZGVvXCI7XG4gICAgY2FzZSBcImF1ZGlvXCI6XG4gICAgICByZXR1cm4gXCJBdWRpb1wiO1xuICAgIGNhc2UgXCJpbWFnZVwiOlxuICAgICAgcmV0dXJuIFwiSW1hZ2VcIjtcbiAgICBjYXNlIFwiZGF0YVwiOlxuICAgICAgcmV0dXJuIFwiRGF0YVwiO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IF9leGhhdXN0aXZlOiBuZXZlciA9IGtpbmQ7XG4gICAgICByZXR1cm4gX2V4aGF1c3RpdmU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TGF5ZXJOYW1lKGtpbmQ6IE1lZGlhS2luZCwgZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0ZW0gPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5bYS16MC05XSskL2ksIFwiXCIpLnRyaW0oKTtcbiAgcmV0dXJuIHN0ZW0gfHwgbWVkaWFLaW5kTGFiZWwoa2luZCk7XG59XG5cbi8qKiBGaXJzdCAxTUIgb2YgYW4gYXJiaXRyYXJ5IGZpbGUsIHBhaW50ZWQgYXMgYSAyNTZcdTAwRDcyNTYgYnl0ZSB0ZXh0dXJlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhaW50RGF0YUJ5dGVzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGJ5dGVzOiBVaW50OEFycmF5KSB7XG4gIGNvbnN0IHdpZHRoID0gMjU2O1xuICBjb25zdCBoZWlnaHQgPSAyNTY7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGNvbnN0IGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgdG90YWwgPSB3aWR0aCAqIGhlaWdodDtcbiAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsOyBpICs9IDEpIHtcbiAgICBjb25zdCBhID0gbGVuID8gKGJ5dGVzW2kgJSBsZW5dID8/IDApIDogKGkgKiAzNykgJiAyNTU7XG4gICAgY29uc3QgYiA9IGxlbiA/IChieXRlc1soaSAqIDMpICUgbGVuXSA/PyAwKSA6IChpICogOTEpICYgMjU1O1xuICAgIGNvbnN0IGMgPSBsZW4gPyAoYnl0ZXNbKGkgKiA3ICsgMTMpICUgbGVuXSA/PyAwKSA6IChpICogMTMpICYgMjU1O1xuICAgIGNvbnN0IG8gPSBpICogNDtcbiAgICBpbWFnZS5kYXRhW29dID0gYTtcbiAgICBpbWFnZS5kYXRhW28gKyAxXSA9IGI7XG4gICAgaW1hZ2UuZGF0YVtvICsgMl0gPSAoYSBeIGMpICYgMjU1O1xuICAgIGltYWdlLmRhdGFbbyArIDNdID0gMjU1O1xuICB9XG4gIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2UsIDAsIDApO1xuXG4gIGNvbnN0IHdhc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDAsIFwicmdiYSgyMzIsMjMwLDIyNCwwLjEpXCIpO1xuICB3YXNoLmFkZENvbG9yU3RvcCgwLjUsIFwicmdiYSgxNjgsMTIwLDEyOCwwLjEyKVwiKTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDEzOCwxMzQsMTQ0LDAuMSlcIik7XG4gIGN0eC5maWxsU3R5bGUgPSB3YXNoO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVTcGVjdHJ1bUNhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gIGlmIChjYW52YXMud2lkdGggIT09IDY0MCB8fCBjYW52YXMuaGVpZ2h0ICE9PSAzNjApIHtcbiAgICBjYW52YXMud2lkdGggPSA2NDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDM2MDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV2ZWxGcm9tU3BlY3RydW0oc3BlY3RydW06IFVpbnQ4QXJyYXkpOiBudW1iZXIge1xuICBjb25zdCBiaW5zID0gTWF0aC5taW4oNDgsIHNwZWN0cnVtLmxlbmd0aCk7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluczsgaSArPSAxKVxuICAgIHRvdGFsICs9IHNwZWN0cnVtW2ldICogKDEuMzUgLSAoaSAvIGJpbnMpICogMC41NSk7XG4gIHJldHVybiBNYXRoLm1pbigxLCB0b3RhbCAvIGJpbnMgLyAxOTApO1xufVxuXG4vKiogUmVhY3RpdmUgZmllbGQgdXNlZCBhcyB0aGUgbGF5ZXIgdGV4dHVyZSBmb3IgYXVkaW8gZmlsZXMuICovXG5leHBvcnQgZnVuY3Rpb24gcGFpbnRBdWRpb1Zpc3VhbChcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbikge1xuICBlbnN1cmVTcGVjdHJ1bUNhbnZhcyhjYW52YXMpO1xuICBjb25zdCB3aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjdHguZmlsbFN0eWxlID0gYHJnYmEoOCwgOCwgMTAsICR7MC4xICsgKDEgLSBsZXZlbCkgKiAwLjA4fSlgO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgY29uc3QgYmlucyA9IE1hdGgubWluKDk2LCBzcGVjdHJ1bS5sZW5ndGgpO1xuICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gYmlucztcbiAgY29uc3QgbWlkID0gaGVpZ2h0ICogMC41NTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpICs9IDEpIHtcbiAgICBjb25zdCBzYW1wbGUgPSBzcGVjdHJ1bVtpXSAvIDI1NTtcbiAgICBjb25zdCBib29zdCA9IHNhbXBsZSAqICgwLjU1ICsgbGV2ZWwgKiAwLjkpO1xuICAgIGNvbnN0IGggPSBib29zdCAqIGhlaWdodCAqIDAuNzI7XG4gICAgY29uc3QgaHVlID0gMjAgKyAoaSAvIGJpbnMpICogNDAgKyB0aW1lICogMTIgKyBsZXZlbCAqIDMwO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgaHNsKCR7aHVlICUgMzYwfSAkezI4ICsgc2FtcGxlICogMzV9JSAkezMyICsgc2FtcGxlICogMzh9JSlgO1xuICAgIGN0eC5maWxsUmVjdChpICogYmFyV2lkdGgsIG1pZCAtIGggKiAwLjU1LCBNYXRoLm1heCgxLCBiYXJXaWR0aCAqIDAuODIpLCBoKTtcbiAgfVxuXG4gIGNvbnN0IGN4ID0gd2lkdGggKiAwLjU7XG4gIGNvbnN0IGN5ID0gaGVpZ2h0ICogMC40ODtcbiAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgKiAoMC4wOCArIGxldmVsICogMC4xOCk7XG4gIGNvbnN0IGdsb3cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIHJhZGl1cyAqIDIuMik7XG4gIGdsb3cuYWRkQ29sb3JTdG9wKDAsIGBoc2xhKDEyIDQ1JSA2MiUgLyAkezAuMTggKyBsZXZlbCAqIDAuMzV9KWApO1xuICBnbG93LmFkZENvbG9yU3RvcCgxLCBcImhzbGEoMCAwJSAwJSAvIDApXCIpO1xuICBjdHguZmlsbFN0eWxlID0gZ2xvdztcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHguYXJjKGN4LCBjeSwgcmFkaXVzICogMi4yLCAwLCBNYXRoLlBJICogMik7XG4gIGN0eC5maWxsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW52YXNUaHVtYihcbiAgc291cmNlOiBDYW52YXNJbWFnZVNvdXJjZSxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIG1heERpbSA9IDk2LFxuKTogc3RyaW5nIHtcbiAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCBtYXhEaW0gLyBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0LCAxKSk7XG4gIGNvbnN0IHRodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgdGh1bWIud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpKTtcbiAgdGh1bWIuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjdHggPSB0aHVtYi5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm4gXCJcIjtcbiAgY3R4LmRyYXdJbWFnZShzb3VyY2UsIDAsIDAsIHRodW1iLndpZHRoLCB0aHVtYi5oZWlnaHQpO1xuICByZXR1cm4gdGh1bWIudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjcpO1xufVxuIiwgIi8vIE5hbWVkIGdsb2JhbC1GWCBsb29rcywgcGx1cyByYW5kb21pemUgLyBtdXRhdGUgaGVscGVycyBmb3IgYm90aCB0aGUgd29ybGRcbi8vIHBpcGVsaW5lIGFuZCBwZXItbGF5ZXIgZWZmZWN0IHN0YWNrcy5cblxuaW1wb3J0IHtcbiAgQkxFTkRfTU9ERVMsXG4gIERFRkFVTFRfR0xPQkFMX0ZYLFxuICBERUZBVUxUX0xBWUVSX0ZYLFxuICBjbGFtcCxcbiAgdHlwZSBCbGVuZE1vZGUsXG4gIHR5cGUgR2xvYmFsRngsXG4gIHR5cGUgTGF5ZXJGeCxcbn0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5mdW5jdGlvbiBsb29rKG92ZXJyaWRlczogUGFydGlhbDxHbG9iYWxGeD4pOiBHbG9iYWxGeCB7XG4gIHJldHVybiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYLCAuLi5vdmVycmlkZXMgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFdPUkxEX1BSRVNFVFM6IHsgbmFtZTogc3RyaW5nOyBjb2RlOiBzdHJpbmc7IGdsb2JhbDogR2xvYmFsRnggfVtdID0gW1xuICB7IG5hbWU6IFwiQ2xlYW4gc2lnbmFsXCIsIGNvZGU6IFwiMDBcIiwgZ2xvYmFsOiBsb29rKHt9KSB9LFxuICB7XG4gICAgbmFtZTogXCJMaXF1aWQgY2hyb21lXCIsXG4gICAgY29kZTogXCIwMVwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjUsIHN3aXJsOiAwLjM0LCBjaHJvbWE6IDAuMywgaHVlT3JiaXQ6IDAuMjQsIHNhdHVyYXRpb246IDEuMixcbiAgICAgIGNvbnRyYXN0OiAxLjEyLCBmZWVkYmFjazogMC40MiwgdHJhaWxzOiAwLjcyLCBmYlpvb206IDAuMTIsIGdyYWluOiAwLjEsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVjaG8gdHVubmVsXCIsXG4gICAgY29kZTogXCIwMlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB6b29tOiAwLjQsIGZlZWRiYWNrOiAwLjgyLCB0cmFpbHM6IDAuOSwgZmJab29tOiAwLjM0LCBmYlJvdGF0ZTogMC4xNCxcbiAgICAgIGZiSHVlOiAwLjEyLCBjaHJvbWE6IDAuMjgsIHZpZ25ldHRlOiAwLjQsIGh1ZU9yYml0OiAwLjE2LCBjb250cmFzdDogMS4wOCxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2FsZWlkbyBjYXRoZWRyYWxcIixcbiAgICBjb2RlOiBcIjAzXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGthbGVpZG86IDAuNzIsIG1pcnJvcjogMC4zLCBjaHJvbWE6IDAuMzQsIGh1ZU9yYml0OiAwLjQsIHNhdHVyYXRpb246IDEuNSxcbiAgICAgIGNvbnRyYXN0OiAxLjEsIGZlZWRiYWNrOiAwLjI2LCB0cmFpbHM6IDAuNiwgcmlwcGxlOiAwLjE4LCB2aWduZXR0ZTogMC4zLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWSFMgc2VhbmNlXCIsXG4gICAgY29kZTogXCIwNFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBzY2FubGluZXM6IDAuNjYsIGdyYWluOiAwLjUsIGNocm9tYTogMC42MiwgZmVlZGJhY2s6IDAuNDIsXG4gICAgICB0cmFpbHM6IDAuNjgsIHNhdHVyYXRpb246IDAuODgsIGNvbnRyYXN0OiAxLjIyLCB2aWduZXR0ZTogMC40OCwgc3Ryb2JlOiAwLjA4LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBY2lkIGJhdGhcIixcbiAgICBjb2RlOiBcIjA1XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuNjgsIHJpcHBsZTogMC40LCBodWVPcmJpdDogMC43LCBzYXR1cmF0aW9uOiAxLjg1LCBzb2xhcml6ZTogMC41LFxuICAgICAgY29udHJhc3Q6IDEuMTUsIGZlZWRiYWNrOiAwLjUsIHRyYWlsczogMC43OCwgZmJIdWU6IDAuMywgc3BlZWQ6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2hvc3QgdHJhaWxzXCIsXG4gICAgY29kZTogXCIwNlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBmZWVkYmFjazogMC45MiwgdHJhaWxzOiAwLjk3LCBmYlpvb206IDAuMDYsIGZiUm90YXRlOiAtMC4wNSwgc2F0dXJhdGlvbjogMC42LFxuICAgICAgY29udHJhc3Q6IDEuMTQsIGdyYWluOiAwLjIsIHZpZ25ldHRlOiAwLjUsIHNwZWVkOiAwLjUsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5lb24gYXV0b3BzeVwiLFxuICAgIGNvZGU6IFwiMDdcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgY2hyb21hOiAwLjgsIHNvbGFyaXplOiAwLjI4LCBjb250cmFzdDogMS4zNSwgc2F0dXJhdGlvbjogMS42LFxuICAgICAga2FsZWlkbzogMC4xOCwgaHVlT3JiaXQ6IDAuMzIsIGZlZWRiYWNrOiAwLjMsIHRyYWlsczogMC42Miwgc2NhbmxpbmVzOiAwLjIsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByaXNtIHN0b3JtXCIsXG4gICAgY29kZTogXCIwOFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjM0LCByaXBwbGU6IDAuMjgsIGNocm9tYTogMC45MiwgZmVlZGJhY2s6IDAuNTYsIHRyYWlsczogMC44LFxuICAgICAgZmJab29tOiAtMC4xNCwgZ3JhaW46IDAuMjQsIHNwZWVkOiAxLjUsIHN0cm9iZTogMC4xNiwgY29udHJhc3Q6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU29sYXIgZmxhcmVcIixcbiAgICBjb2RlOiBcIjA5XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHpvb206IDAuMjYsIHN3aXJsOiAwLjUsIHJpcHBsZTogMC4zNCwgaHVlT3JiaXQ6IDAuNSwgc2F0dXJhdGlvbjogMS43LFxuICAgICAgc29sYXJpemU6IDAuNzIsIGZlZWRiYWNrOiAwLjQ0LCB0cmFpbHM6IDAuNywgZmJIdWU6IDAuMiwgdmlnbmV0dGU6IDAuMzYsXG4gICAgICBzdHJvYmU6IDAuMSwgc3BlZWQ6IDAuOSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGVlcCB2b2lkXCIsXG4gICAgY29kZTogXCIxMFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBiZ01vZGU6IDIsIG1pcnJvcjogMC41LCB3YXJwOiAwLjI0LCBjaHJvbWE6IDAuMiwgc2F0dXJhdGlvbjogMC44NSxcbiAgICAgIGNvbnRyYXN0OiAxLjI1LCBmZWVkYmFjazogMC42OCwgdHJhaWxzOiAwLjg4LCBmYlpvb206IDAuMiwgdmlnbmV0dGU6IDAuNixcbiAgICAgIGh1ZU9yYml0OiAwLjEsIHNwZWVkOiAwLjYsXG4gICAgfSksXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiByYW5kKG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBjaGFuY2UocDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgcDtcbn1cblxudHlwZSBFZmZlY3RQaWNrID0geyBrZXk6IHN0cmluZzsgd2VpZ2h0OiBudW1iZXI7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9O1xuXG5mdW5jdGlvbiBwaWNrRGlzdGluY3QoaXRlbXM6IEVmZmVjdFBpY2tbXSwgY291bnQ6IG51bWJlcik6IEVmZmVjdFBpY2tbXSB7XG4gIGNvbnN0IHBvb2wgPSBpdGVtcy5zbGljZSgpO1xuICBjb25zdCBwaWNrczogRWZmZWN0UGlja1tdID0gW107XG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCBjb3VudCAmJiBwb29sLmxlbmd0aCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBvb2wpIHRvdGFsICs9IGl0ZW0ud2VpZ2h0O1xuICAgIGxldCByb2xsID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yICg7IGluZGV4IDwgcG9vbC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJvbGwgLT0gcG9vbFtpbmRleF0ud2VpZ2h0O1xuICAgICAgaWYgKHJvbGwgPD0gMCkgYnJlYWs7XG4gICAgfVxuICAgIHBpY2tzLnB1c2gocG9vbC5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIHBvb2wubGVuZ3RoIC0gMSksIDEpWzBdKTtcbiAgfVxuICByZXR1cm4gcGlja3M7XG59XG5cbi8vIEthbGVpZG8vcmlwcGxlIGFyZSB3ZWlnaHRlZCBsb3c6IHN5bW1ldHJpYyBtYW5kYWxhcyBhbGwgbG9vayBhbGlrZSwgc28gYVxuLy8gY2hhb3Mgcm9sbCBzaG91bGQgdXN1YWxseSBiZSBidWlsdCBvbiB3YXJwIC8gc3dpcmwgLyB6b29tIC8gbWlycm9yIGluc3RlYWQuXG5jb25zdCBXT1JMRF9TUEFDRV9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4zLCBtYXg6IDAuOSB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuNCwgbWluOiAwLjI1LCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJ6b29tXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMiwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS42LCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMTIsIG1heDogMC40IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjYsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuXTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmVkIGNoYW9zOiBvbmUgc3Ryb25nIHNwYWNlIGVmZmVjdCAocGx1cyBzb21ldGltZXMgYSBzb2Z0IHNlY29uZCksXG4gKiBhbiBvcHRpb25hbCBmZWVkYmFjayByZWNpcGUsIGEgY29sb3IgbW92ZSBhbmQgbGlnaHQgdGV4dHVyZSBcdTIwMTQgZXZlcnl0aGluZ1xuICogZWxzZSBzdGF5cyB6ZXJvIHNvIGVhY2ggcm9sbCBoYXMgYSBkaXN0aW5jdCBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21HbG9iYWxGeChiYXNlOiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dDogR2xvYmFsRnggPSB7XG4gICAgLi4uREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgYmdBOiBiYXNlLmJnQSxcbiAgICBiZ0I6IGJhc2UuYmdCLFxuICAgIGF1ZGlvUmVhY3Q6IGJhc2UuYXVkaW9SZWFjdCxcbiAgICBwb2ludGVyRm9yY2U6IGJhc2UucG9pbnRlckZvcmNlLFxuICAgIHBvaW50ZXJTaXplOiBiYXNlLnBvaW50ZXJTaXplLFxuICAgIHBvaW50ZXJNb2RlOiBNYXRoLmZsb29yKHJhbmQoMCwgNCkpLFxuICAgIGJnTW9kZTogTWF0aC5mbG9vcihyYW5kKDAsIDQpKSxcbiAgfTtcblxuICBjb25zdCBzcGFjZVBpY2tzID0gcGlja0Rpc3RpbmN0KFdPUkxEX1NQQUNFX1BPT0wsIGNoYW5jZSgwLjUpID8gMiA6IDEpO1xuICBzcGFjZVBpY2tzLmZvckVhY2goKHBpY2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41KTtcbiAgICAobmV4dCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pW3BpY2sua2V5XSA9IHN0cmVuZ3RoO1xuICB9KTtcblxuICBpZiAoY2hhbmNlKDAuNTUpKSB7XG4gICAgbmV4dC5mZWVkYmFjayA9IHJhbmQoMC4zLCAwLjg1KTtcbiAgICBuZXh0LnRyYWlscyA9IHJhbmQoMC41LCAwLjk1KTtcbiAgICBpZiAoY2hhbmNlKDAuNikpIG5leHQuZmJab29tID0gcmFuZCgtMC4zNSwgMC4zNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiUm90YXRlID0gcmFuZCgtMC4yNSwgMC4yNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiSHVlID0gcmFuZCgwLjA1LCAwLjQpO1xuICB9XG5cbiAgaWYgKGNoYW5jZSgwLjUpKSBuZXh0Lmh1ZU9yYml0ID0gcmFuZCgwLjEsIDAuNyk7XG4gIGlmIChjaGFuY2UoMC41KSkgbmV4dC5jaHJvbWEgPSByYW5kKDAuMSwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zb2xhcml6ZSA9IHJhbmQoMC4yLCAwLjcpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuODUsIDEuNik7XG4gIG5leHQuY29udHJhc3QgPSByYW5kKDAuOTUsIDEuMyk7XG5cbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5ncmFpbiA9IHJhbmQoMC4wNSwgMC40KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zY2FubGluZXMgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjEyKSkgbmV4dC5zdHJvYmUgPSByYW5kKDAuMDUsIDAuMyk7XG4gIG5leHQudmlnbmV0dGUgPSByYW5kKDAuMSwgMC41KTtcbiAgbmV4dC5zcGVlZCA9IHJhbmQoMC40NSwgMS41KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGVHbG9iYWxGeChjdXJyZW50OiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dCA9IHsgLi4uY3VycmVudCB9O1xuICBjb25zdCBrZXlzOiAoa2V5b2YgR2xvYmFsRngpW10gPSBbXG4gICAgXCJmZWVkYmFja1wiLCBcInRyYWlsc1wiLCBcImZiWm9vbVwiLCBcImZiUm90YXRlXCIsIFwiZmJIdWVcIiwgXCJ3YXJwXCIsIFwic3dpcmxcIixcbiAgICBcInJpcHBsZVwiLCBcInpvb21cIiwgXCJrYWxlaWRvXCIsIFwibWlycm9yXCIsIFwiY2hyb21hXCIsIFwiaHVlT3JiaXRcIiwgXCJzYXR1cmF0aW9uXCIsXG4gICAgXCJjb250cmFzdFwiLCBcInNvbGFyaXplXCIsIFwiZ3JhaW5cIiwgXCJzY2FubGluZXNcIiwgXCJ2aWduZXR0ZVwiLFxuICAgIFwic3Ryb2JlXCIsIFwic3BlZWRcIixcbiAgXTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHZhbHVlID0gbmV4dFtrZXldIGFzIG51bWJlcjtcbiAgICBjb25zdCBtYXggPSBrZXkgPT09IFwic2F0dXJhdGlvblwiIHx8IGtleSA9PT0gXCJjb250cmFzdFwiIHx8IGtleSA9PT0gXCJzcGVlZFwiID8gMiA6IDE7XG4gICAgY29uc3QgbWluID0ga2V5ID09PSBcImZiWm9vbVwiIHx8IGtleSA9PT0gXCJmYlJvdGF0ZVwiID8gLTEgOiAwO1xuICAgIChuZXh0W2tleV0gYXMgbnVtYmVyKSA9IGNsYW1wKHZhbHVlICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4yNCwgbWluLCBtYXgpO1xuICB9XG4gIG5leHQuZmVlZGJhY2sgPSBNYXRoLm1pbihuZXh0LmZlZWRiYWNrLCAwLjkpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuY29uc3QgQ0hBT1NfQkxFTkRTOiBCbGVuZE1vZGVbXSA9IFtcIm5vcm1hbFwiLCBcImFkZFwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkaWZmZXJlbmNlXCIsIFwibGlnaHRlblwiXTtcblxuY29uc3QgTEFZRVJfRElTVE9SVF9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4yLCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuMCwgbWluOiAwLjIsIG1heDogMC43IH0sXG4gIHsga2V5OiBcImJ1bGdlXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMywgbWF4OiAwLjggfSxcbiAgeyBrZXk6IFwicGl4ZWxhdGVcIiwgd2VpZ2h0OiAxLjMsIG1pbjogMC4xNSwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS4yLCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMSwgbWF4OiAwLjQ1IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjUsIG1pbjogMC4yNSwgbWF4OiAwLjc1IH0sXG5dO1xuXG4vKipcbiAqIFJhbmRvbWl6ZSBhIGxheWVyJ3MgZWZmZWN0IHN0YWNrIHdoaWxlIGtlZXBpbmcgaXRzIHBsYWNlbWVudCArIHZpc2liaWxpdHkuXG4gKiBTYW1lIHN0cnVjdHVyZSBhcyB0aGUgd29ybGQgcm9sbDogMS0yIGRpc3RvcnRpb25zLCBhIGNvbG9yIG1vdmUsIGEgYml0IG9mXG4gKiBtb3Rpb24gXHUyMDE0IG5vdCBldmVyeSBrbm9iIGF0IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21MYXllckZ4KGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgY29uc3QgbmV4dDogTGF5ZXJGeCA9IHtcbiAgICAuLi5yZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQpLFxuICAgIGJsZW5kOiBjaGFuY2UoMC40KSA/IENIQU9TX0JMRU5EU1tNYXRoLmZsb29yKHJhbmQoMCwgQ0hBT1NfQkxFTkRTLmxlbmd0aCkpXSA6IGN1cnJlbnQuYmxlbmQsXG4gIH07XG5cbiAgY29uc3QgZGlzdG9ydFBpY2tzID0gcGlja0Rpc3RpbmN0KExBWUVSX0RJU1RPUlRfUE9PTCwgY2hhbmNlKDAuNDUpID8gMiA6IDEpO1xuICBkaXN0b3J0UGlja3MuZm9yRWFjaCgocGljaywgaW5kZXgpID0+IHtcbiAgICBsZXQgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41NSk7XG4gICAgaWYgKHBpY2sua2V5ID09PSBcImJ1bGdlXCIgJiYgY2hhbmNlKDAuNSkpIHN0cmVuZ3RoID0gLXN0cmVuZ3RoO1xuICAgIChuZXh0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbcGljay5rZXldID0gc3RyZW5ndGg7XG4gIH0pO1xuXG4gIGlmIChjaGFuY2UoMC42KSkgbmV4dC5odWUgPSBNYXRoLnJhbmRvbSgpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuNzUsIDEuNjUpO1xuICBuZXh0LmNvbnRyYXN0ID0gcmFuZCgwLjksIDEuMzUpO1xuICBuZXh0LmJyaWdodG5lc3MgPSByYW5kKDAuOSwgMS4yKTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5wb3N0ZXJpemUgPSByYW5kKDAuMiwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmNocm9tYSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuMTgpKSBuZXh0LmVkZ2VzID0gcmFuZCgwLjIsIDAuOCk7XG4gIGlmIChjaGFuY2UoMC4wOCkpIG5leHQuaW52ZXJ0ID0gcmFuZCgwLjUsIDEpO1xuICBpZiAoY2hhbmNlKDAuMTUpKSBuZXh0LnRpbnRBbW91bnQgPSByYW5kKDAuMiwgMC42KTtcblxuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LnNwaW4gPSByYW5kKDAuMDUsIDAuNCkgKiAoY2hhbmNlKDAuNSkgPyAtMSA6IDEpO1xuICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZHJpZnQgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5wdWxzZSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuNDUpKSBuZXh0LnNoaW1tZXIgPSByYW5kKDAuMiwgMC44KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5ERUZBVUxUX0xBWUVSX0ZYLFxuICAgIHg6IGN1cnJlbnQueCxcbiAgICB5OiBjdXJyZW50LnksXG4gICAgc2NhbGU6IGN1cnJlbnQuc2NhbGUsXG4gICAgcm90YXRpb246IGN1cnJlbnQucm90YXRpb24sXG4gICAgb3BhY2l0eTogY3VycmVudC5vcGFjaXR5LFxuICAgIGJsZW5kOiBjdXJyZW50LmJsZW5kLFxuICAgIHZpc2libGU6IGN1cnJlbnQudmlzaWJsZSxcbiAgICB0aWxlOiBjdXJyZW50LnRpbGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVuZEluZGV4KGJsZW5kOiBCbGVuZE1vZGUpOiBudW1iZXIge1xuICBjb25zdCBpbmRleCA9IEJMRU5EX01PREVTLmluZGV4T2YoYmxlbmQpO1xuICByZXR1cm4gaW5kZXggPCAwID8gMCA6IGluZGV4O1xufVxuIiwgImltcG9ydCB0eXBlIHsgQ29tcG9uZW50Q2hpbGRyZW4gfSBmcm9tIFwicHJlYWN0XCI7XG5cbi8qKiBCb3JkZXJlZCB0b29sYmFyIGJ1dHRvbiB3aXRoIGFuIGljb24gYW5kIGFuIG9wdGlvbmFsIFx1MjI2NWxnIHRleHQgbGFiZWwuICovXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGRhbmdlcj86IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xuICAgIGxhYmVsPzogc3RyaW5nO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgIGNsYXNzPXtgZmxleCBoLVsyNnB4XSBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXIgcHgtMiB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpvcGFjaXR5LTMwICR7XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItW3ZhcigtLWFjaWQpXSBiZy1bdmFyKC0tYWNpZCldLzE1IHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcHMuZGFuZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bI2M0NWI2YV0gYmctWyNjNDViNmFdLzEwIHRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gbGc6aW5saW5lXCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG4vKiogQm9yZGVybGVzcyBpY29uLW9ubHkgYnV0dG9uIHRoYXQgYnJpZ2h0ZW5zIG9uIGhvdmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEljb25CdXR0b24ocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIC8qKiBIb3ZlciBjb2xvcjogZGVmYXVsdCBwYXBlciwgYGFjY2VudGAgYWNpZCwgYGRhbmdlcmAgcmVkLiAqL1xuICAgIHRvbmU/OiBcImRlZmF1bHRcIiB8IFwiYWNjZW50XCIgfCBcImRhbmdlclwiO1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIG9uQ2xpY2s6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgY29uc3QgaG92ZXIgPVxuICAgICAgICBwcm9wcy50b25lID09PSBcImFjY2VudFwiXG4gICAgICAgICAgICA/IFwiaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgIDogcHJvcHMudG9uZSA9PT0gXCJkYW5nZXJcIlxuICAgICAgICAgICAgICA/IFwiaG92ZXI6dGV4dC1bI2I4NmE3NF1cIlxuICAgICAgICAgICAgICA6IFwiaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgY2xhc3M9e2B0ZXh0LVt2YXIoLS1tdXRlKV0gJHtob3Zlcn0gJHtwcm9wcy5jbGFzcyA/PyBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcblxuLyoqIENlbnRlcmVkIG1vZGFsIHdpdGggYmFja2Ryb3AgZGlzbWlzcywgYSB0aXRsZWQgaGVhZGVyLCBhbmQgYW4gZXNjIGJ1dHRvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNb2RhbChwcm9wczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgICAvKiogVGFpbHdpbmQgbWF4LXdpZHRoIGNsYXNzIGZvciB0aGUgZGlhbG9nLCBlLmcuIFwibWF4LXctWzg0MHB4XVwiLiAqL1xuICAgIG1heFdpZHRoPzogc3RyaW5nO1xuICAgIC8qKiBFeHRyYSBjb250ZW50IHJlbmRlcmVkIGluIHRoZSBoZWFkZXIsIGxlZnQgb2YgdGhlIGVzYyBidXR0b24uICovXG4gICAgaGVhZGVyRXh0cmE/OiBDb21wb25lbnRDaGlsZHJlbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotWzcwXSBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBiZy1ibGFjay83NSBwLTRcIlxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPXtgcG9wIG1heC1oLVs4OHZoXSB3LWZ1bGwgJHtwcm9wcy5tYXhXaWR0aCA/PyBcIm1heC13LVs0MjBweF1cIn0gb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHNoYWRvdy0yeGxgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtWzExcHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xOGVtXSB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5oZWFkZXJFeHRyYX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTIgcHktMC41IGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuXG4vKiogVGl0bGVkIHBhbmVsIHNlY3Rpb24gd2l0aCBhIHJ1bGUgYW5kIG9wdGlvbmFsIHJpZ2h0LWFsaWduZWQgYWN0aW9ucy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZWN0aW9uKHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY2NlbnQ/OiBib29sZWFuO1xuICAgIGFjdGlvbnM/OiBDb21wb25lbnRDaGlsZHJlbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBwYi0yXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBoLTggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YHRleHQtWzlweF0gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dICR7cHJvcHMuYWNjZW50ID8gXCJ0ZXh0LVt2YXIoLS1hY2lkKV1cIiA6IFwidGV4dC1bdmFyKC0tbXV0ZSldXCJ9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoLXB4IGZsZXgtMSBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuYWN0aW9uc31cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cbiIsICIvKiogTGFiZWxlZCByb3cgb2YgbXV0dWFsbHkgZXhjbHVzaXZlIHNlZ21lbnRzOyB2YWx1ZSBpcyB0aGUgc2VsZWN0ZWQgaW5kZXguICovXG5leHBvcnQgZnVuY3Rpb24gU2VnbWVudGVkKHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvcHRpb25zOiByZWFkb25seSBzdHJpbmdbXTtcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG9uQ2hhbmdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS1bNXB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DaGFuZ2UoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BoLTYgZmxleC0xIGJvcmRlciBib3JkZXItci0wIGJvcmRlci1bdmFyKC0tbGluZSldIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgbGFzdDpib3JkZXItciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQocHJvcHMudmFsdWUpID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctW3ZhcigtLWFjaWQpXSB0ZXh0LVt2YXIoLS12b2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgSUNoZWNrLCBJQ2hldnJvbkRvd24gfSBmcm9tIFwiLi4vaWNvbnNcIjtcblxuZXhwb3J0IHR5cGUgU2VsZWN0T3B0aW9uPFQgZXh0ZW5kcyBzdHJpbmc+ID0geyB2YWx1ZTogVDsgbGFiZWw6IHN0cmluZyB9O1xuXG4vKipcbiAqIEN1c3RvbSBkcm9wZG93biAocmVwbGFjZXMgdGhlIG5hdGl2ZSA8c2VsZWN0Pikgc3R5bGVkIHRvIG1hdGNoIHRoZSBwYW5lbFxuICogY2hyb21lLiBTdXBwb3J0cyBrZXlib2FyZCBjb250cm9sIHdoaWxlIHRoZSB0cmlnZ2VyIGlzIGZvY3VzZWQuXG4gKiBNZW51IGlzIHBvc2l0aW9uOmZpeGVkIHNvIGl0IGVzY2FwZXMgb3ZlcmZsb3cgLyBzdGFja2luZy1jb250ZXh0IHBhcmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Q8VCBleHRlbmRzIHN0cmluZz4ocHJvcHM6IHtcbiAgICB2YWx1ZTogVDtcbiAgICBvcHRpb25zOiByZWFkb25seSBTZWxlY3RPcHRpb248VD5bXTtcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB2b2lkO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICAvKiogRXh0cmEgY2xhc3NlcyBmb3IgdGhlIHRyaWdnZXIgYnV0dG9uICh3aWR0aHMsIGFsaWdubWVudCkuICovXG4gICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqIEV4dHJhIGNsYXNzZXMgZm9yIHRoZSBkcm9wZG93biBwYW5lbCwgZS5nLiBcInJpZ2h0LTBcIiB0byByaWdodC1hbGlnbi4gKi9cbiAgICBtZW51Q2xhc3M/OiBzdHJpbmc7XG59KSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtoaWdobGlnaHQsIHNldEhpZ2hsaWdodF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbWVudVN0eWxlLCBzZXRNZW51U3R5bGVdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPj4oXG4gICAgICAgIHt9LFxuICAgICk7XG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgYWxpZ25SaWdodCA9IChwcm9wcy5tZW51Q2xhc3MgPz8gXCJcIikuaW5jbHVkZXMoXCJyaWdodC0wXCIpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHByb3BzLm9wdGlvbnMuZmluZEluZGV4KFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHByb3BzLnZhbHVlLFxuICAgICk7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wcy5vcHRpb25zW3NlbGVjdGVkSW5kZXhdO1xuXG4gICAgZnVuY3Rpb24gcGxhY2VNZW51KCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdHJpZ2dlclJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKCFyZWN0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+ID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIHRvcDogcmVjdC5ib3R0b20gKyA0LFxuICAgICAgICAgICAgbWluV2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFsaWduUmlnaHQpIHtcbiAgICAgICAgICAgIHN0eWxlLnJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICAgICAgc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUubGVmdCA9IHJlY3QubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBzZXRNZW51U3R5bGUoc3R5bGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgICAgICBzZXRIaWdobGlnaHQoTWF0aC5tYXgoMCwgc2VsZWN0ZWRJbmRleCkpO1xuICAgICAgICBwbGFjZU1lbnUoKTtcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2UodmFsdWU6IFQpIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIW9wZW4pIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25SZXBvc2l0aW9uID0gKCkgPT4gcGxhY2VNZW51KCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVwb3NpdGlvbik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uUmVwb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlcG9zaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25SZXBvc2l0aW9uLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbb3BlbiwgYWxpZ25SaWdodF0pO1xuXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIEtlZXAgZHJvcGRvd24gbmF2aWdhdGlvbiBmcm9tIHRyaWdnZXJpbmcgYXBwLWxldmVsIHNob3J0Y3V0cy5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fFxuICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIgfHxcbiAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fFxuICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCIgXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0KChpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBNYXRoLm1pbihwcm9wcy5vcHRpb25zLmxlbmd0aCAtIDEsIGluZGV4ICsgMSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHQoKGluZGV4KSA9PiBNYXRoLm1heCgwLCBpbmRleCAtIDEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fCBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gcHJvcHMub3B0aW9uc1toaWdobGlnaHRdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbikgY2hvb3NlKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChvcGVuID8gc2V0T3BlbihmYWxzZSkgOiBvcGVuTWVudSgpKX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgICAgICAgICBjbGFzcz17YGZsZXggaC1bMjZweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMS41IGJvcmRlciBweC0yIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMDZlbV0gdHJhbnNpdGlvbi1jb2xvcnMgZGlzYWJsZWQ6b3BhY2l0eS0zNSAke1xuICAgICAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLVt2YXIoLS1hY2lkKV0vNjAgYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICB9ICR7cHJvcHMuY2xhc3MgPz8gXCJ3LWZ1bGxcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57c2VsZWN0ZWQ/LmxhYmVsID8/IHByb3BzLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8SUNoZXZyb25Eb3duXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgaC0zIHctMyBmbGV4LXNocmluay0wIHRyYW5zaXRpb24tdHJhbnNmb3JtICR7b3BlbiA/IFwicm90YXRlLTE4MFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtvcGVuICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei1bOTldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2Bwb3AgbWF4LWgtNjAgb3ZlcmZsb3cteS1hdXRvIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwtMildIHB5LTAuNSBzaGFkb3ctMnhsICR7cHJvcHMubWVudUNsYXNzID8/IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PT0gcHJvcHMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SGlnaGxpZ2h0KGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNob29zZShvcHRpb24udmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHB4LTIgcHktMSB0ZXh0LWxlZnQgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4wNmVtXSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBoaWdobGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLVt2YXIoLS1saW5lKV0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LVt2YXIoLS1tdXRlKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57b3B0aW9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUNoZWNrIGNsYXNzPVwiaC0zIHctMyBmbGV4LXNocmluay0wIHRleHQtW3ZhcigtLWFjaWQpXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICIvKiogVmFsdWUgZm9ybWF0dGVycyBzaGFyZWQgYnkgc2xpZGVycyBhbmQgcmVhZG91dHMuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWcodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodmFsdWUpfVx1MDBCMGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRYKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt2YWx1ZS50b0ZpeGVkKDIpfVx1MDBEN2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQzKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCgoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCkpLnBhZFN0YXJ0KFxuICAgICAgICAzLFxuICAgICAgICBcIjBcIixcbiAgICApO1xufVxuIiwgImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgcGFkMyB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuXG4vKiogTGFiZWxlZCBob3Jpem9udGFsIHNsaWRlci4gRG91YmxlLWNsaWNrIHJlc2V0cyB0byBgZGVmYCB3aGVuIHByb3ZpZGVkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlcihwcm9wczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgbWF4PzogbnVtYmVyO1xuICAgIGRlZj86IG51bWJlcjtcbiAgICBmb3JtYXQ/OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuICAgIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCBtaW4gPSBwcm9wcy5taW4gPz8gMDtcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXggPz8gMTtcbiAgICBjb25zdCBwY3QgPSBjbGFtcCgoKHByb3BzLnZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCwgMCwgMTAwKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgcHgtMyBweS1bNXB4XSBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICBvbkRibENsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmRlZiAhPT0gdW5kZWZpbmVkICYmIHByb3BzLm9uQ2hhbmdlKHByb3BzLmRlZilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpdGxlPVwiRG91YmxlLWNsaWNrIHRvIHJlc2V0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTAuNSBmbGV4IGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFidWxhci1udW1zIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5mb3JtYXQocHJvcHMudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhZDMocHJvcHMudmFsdWUsIG1pbiwgbWF4KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJrbm9iLXJhbmdlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcIi0tZmlsbFwiOiBgJHtwY3R9JWAgfX1cbiAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICBzdGVwPXswLjAwMX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICApO1xufVxuIiwgIi8qKiBGdWxsLXdpZHRoIHN3aXRjaCByb3cgd2l0aCBhIGxhYmVsIGFuZCBvcHRpb25hbCBoaW50IHRleHQuICovXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlKHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBoaW50Pzogc3RyaW5nO1xuICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgYXJpYS1jaGVja2VkPXtwcm9wcy5jaGVja2VkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25DaGFuZ2UoIXByb3BzLmNoZWNrZWQpfVxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTMgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHB4LTMgcHktMyB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLVt2YXIoLS1saW5lLWhvdCldIGRpc2FibGVkOm9wYWNpdHktNDBcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTAgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5oaW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdC0xIGJsb2NrIGZvbnQtbW9ubyB0ZXh0LVs5LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhpbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz17YG10LTAuNSBmbGV4IGgtWzE4cHhdIHctWzM0cHhdIGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIGJvcmRlciBweC0wLjUgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldIGJnLVt2YXIoLS1hY2lkKV0vMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS12b2lkKV1cIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BoLVsxMnB4XSB3LVsxMnB4XSB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2xhdGUteC1bMTRweF0gYmctW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zbGF0ZS14LTAgYmctW3ZhcigtLW11dGUpXVwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgICBCTEVORF9NT0RFUyxcbiAgICBUSUxFX01PREVTLFxuICAgIHR5cGUgQmxlbmRNb2RlLFxuICAgIHR5cGUgTGF5ZXJGeCxcbiAgICB0eXBlIFNjZW5lTGF5ZXIsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1hZ2VJbmZvIH0gZnJvbSBcIi4uL2ZyYW1lXCI7XG5pbXBvcnQgeyBJRGljZSB9IGZyb20gXCIuLi9pY29uc1wiO1xuaW1wb3J0IHsgbWVkaWFLaW5kTGFiZWwgfSBmcm9tIFwiLi4vbWVkaWFcIjtcbmltcG9ydCB7IHJhbmRvbUxheWVyRngsIHJlc2V0TGF5ZXJGeEVmZmVjdHMgfSBmcm9tIFwiLi4vcHJlc2V0c1wiO1xuaW1wb3J0IHtcbiAgICBJY29uQnV0dG9uLFxuICAgIFNlY3Rpb24sXG4gICAgU2VnbWVudGVkLFxuICAgIFNlbGVjdCxcbiAgICBTbGlkZXIsXG4gICAgZm9ybWF0RGVnLFxuICAgIGZvcm1hdFgsXG59IGZyb20gXCIuLi91aVwiO1xuXG5jb25zdCBCTEVORF9PUFRJT05TID0gQkxFTkRfTU9ERVMubWFwKChtb2RlKSA9PiAoe1xuICAgIHZhbHVlOiBtb2RlLFxuICAgIGxhYmVsOiBtb2RlLFxufSkpO1xuXG4vKiogUmlnaHQtcGFuZWwgc2VjdGlvbnMgZm9yIHRoZSBzZWxlY3RlZCBsYXllcidzIEZYLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExheWVyUGFuZWwocHJvcHM6IHtcbiAgICBsYXllcjogU2NlbmVMYXllcjtcbiAgICBpbmZvPzogSW1hZ2VJbmZvO1xuICAgIG9uUGF0Y2g6IChwYXRjaDogUGFydGlhbDxMYXllckZ4PikgPT4gdm9pZDtcbiAgICBvblJlcGxhY2VGeDogKGZ4OiBMYXllckZ4KSA9PiB2b2lkO1xufSkge1xuICAgIGNvbnN0IHsgbGF5ZXIsIGluZm8gfSA9IHByb3BzO1xuICAgIGNvbnN0IGZ4ID0gbGF5ZXIuZng7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWN0aW9uXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BMYXllciBcdTAwQjcgJHtsYXllci5uYW1lfWB9XG4gICAgICAgICAgICAgICAgYWNjZW50XG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2h1ZmZsZSBsYXllciBGWFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9uZT1cImFjY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25SZXBsYWNlRngocmFuZG9tTGF5ZXJGeChmeCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRGljZSBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGxheWVyIEZYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25SZXBsYWNlRngocmVzZXRMYXllckZ4RWZmZWN0cyhmeCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFLaW5kTGFiZWwobGF5ZXIubWVkaWFLaW5kKX1cbiAgICAgICAgICAgICAgICAgICAge2luZm8gJiYgIWluZm8ubWlzc2luZyAmJiBgIFx1MDBCNyAke2luZm8ud2lkdGh9XHUwMEQ3JHtpbmZvLmhlaWdodH1gfVxuICAgICAgICAgICAgICAgICAgICB7aW5mbz8ubWlzc2luZyA/IFwiIFx1MDBCNyBtaXNzaW5nIG9uIGRldmljZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS1bNXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJsZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PEJsZW5kTW9kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5ibGVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e0JMRU5EX09QVElPTlN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGJsZW5kKSA9PiBwcm9wcy5vblBhdGNoKHsgYmxlbmQgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zngub3BhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgb3BhY2l0eTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VnbWVudGVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FudmFzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtUSUxFX01PREVTfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZngudGlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmRleCkgPT4gcHJvcHMub25QYXRjaCh7IHRpbGU6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LnNjYWxlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezAuMDV9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Nn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBzY2FsZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm90YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zngucm90YXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTE4MH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxODB9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXREZWd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyByb3RhdGlvbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiRGlzdG9ydFwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGbHVpZCB3YXJwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LndhcnB9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHdhcnA6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LnN3aXJsfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBzd2lybDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlwcGxlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5yaXBwbGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHJpcHBsZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS2FsZWlkb3Njb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LmthbGVpZG99XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGthbGVpZG86IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBpeGVsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LnBpeGVsYXRlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBwaXhlbGF0ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVuc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5idWxnZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGJ1bGdlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaXJyb3IgZm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5taXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IG1pcnJvcjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTGF5ZXIgY29sb3JcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSHVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4Lmh1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgaHVlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LnNhdHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBzYXR1cmF0aW9uOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5jb250cmFzdH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGNvbnRyYXN0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCcmlnaHRuZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LmJyaWdodG5lc3N9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBicmlnaHRuZXNzOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnguaW52ZXJ0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBpbnZlcnQ6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3Rlcml6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5wb3N0ZXJpemV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHBvc3Rlcml6ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpc20gc3BsaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnguY2hyb21hfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBjaHJvbWE6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5lb24gZWRnZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnguZWRnZXN9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGVkZ2VzOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC50aW50Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25QYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnRDb2xvcjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z4LnRpbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uUGF0Y2goeyB0aW50QW1vdW50OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJMYXllciBtb3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5zcGlufVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgc3BpbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHJpZnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnguZHJpZnR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGRyaWZ0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQdWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmeC5wdWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgcHVsc2U6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaW1tZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Znguc2hpbW1lcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgc2hpbW1lcjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgeyBNQVhfTEFZRVJTLCB0eXBlIFNjZW5lTGF5ZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEltYWdlSW5mbyB9IGZyb20gXCIuLi9mcmFtZVwiO1xuaW1wb3J0IHsgSUNvcHksIElEb3duLCBJRXllLCBJRXllT2ZmLCBJUGx1cywgSVRyYXNoLCBJVXAgfSBmcm9tIFwiLi4vaWNvbnNcIjtcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiLi4vdWlcIjtcblxuLyoqIExlZnQgc2lkZWJhcjogbGF5ZXIgc3RhY2sgKHRvcCBsYXllciBmaXJzdCkgd2l0aCBwZXItcm93IGFjdGlvbnMuICovXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJzU2lkZWJhcihwcm9wczoge1xuICAgIGxheWVyczogU2NlbmVMYXllcltdO1xuICAgIGltYWdlSW5mbzogUmVjb3JkPHN0cmluZywgSW1hZ2VJbmZvPjtcbiAgICBzZWxlY3RlZElkOiBzdHJpbmcgfCBudWxsO1xuICAgIG9uU2VsZWN0OiAobGF5ZXJJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uVG9nZ2xlVmlzaWJsZTogKGxheWVyOiBTY2VuZUxheWVyKSA9PiB2b2lkO1xuICAgIG9uTW92ZTogKGxheWVySWQ6IHN0cmluZywgZGVsdGE6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbkR1cGxpY2F0ZTogKGxheWVySWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblJlbW92ZTogKGxheWVySWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkltcG9ydDogKCkgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IHctWzIxMnB4XSBmbGV4LXNocmluay0wIGZsZXgtY29sIGJvcmRlci1yIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBoLTggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgIExheWVyc1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGF5ZXJzLmxlbmd0aH0ve01BWF9MQVlFUlN9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltcG9ydCBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgIHRvbmU9XCJhY2NlbnRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkltcG9ydH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJUGx1cyAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi1oLTAgZmxleC0xIG92ZXJmbG93LXktYXV0byBweS0xXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmxheWVycy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtMyBteS0zIGJsb2NrIHctW2NhbGMoMTAwJS0yNHB4KV0gYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtMyBweS02IHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tYWNpZCldLzUwIGhvdmVyOnRleHQtW3ZhcigtLW11dGUpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkltcG9ydH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCwgcGFzdGUsIG9yIGNsaWNrIHRvIGltcG9ydCBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYXllcnNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IHByb3BzLmltYWdlSW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBsYXllci5pZCA9PT0gcHJvcHMuc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyb3VwIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB4LTIgcHktMS41ICR7aXNTZWxlY3RlZCA/IFwiYmctW3ZhcigtLWFjaWQpXS8xMFwiIDogXCJob3ZlcjpiZy1bdmFyKC0tbGluZSldXCJ9ICR7bGF5ZXIuZngudmlzaWJsZSA/IFwiXCIgOiBcIm9wYWNpdHktNDVcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblNlbGVjdChsYXllci5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2xheWVyLmZ4LnZpc2libGUgPyBcIkhpZGVcIiA6IFwiU2hvd1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LXNocmluay0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uVG9nZ2xlVmlzaWJsZShsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGF5ZXIuZngudmlzaWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUV5ZSBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElFeWVPZmYgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyaWQgaC04IHctOCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyICR7aXNTZWxlY3RlZCA/IFwiYm9yZGVyLVt2YXIoLS1hY2lkKV0vNjBcIiA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV1cIn0gYmctYmxhY2tgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YT8udGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21ldGEudGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGE/Lm1pc3NpbmcgPyBcIj9cIiA6IFwiXHUyMDI2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTAgZmxleC0xIHRydW5jYXRlIHRleHQtWzExcHhdIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgIT09IFwiaW1hZ2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtc2hyaW5rLTAgZm9udC1tb25vIHRleHQtWzhweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgPT09IFwidmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsYXllci5tZWRpYUtpbmQgPT09IFwiYXVkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkYXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTAuNSBncm91cC1ob3ZlcjpmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmFpc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3ZlKGxheWVyLmlkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJVXAgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG93ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25Nb3ZlKGxheWVyLmlkLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SURvd24gY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRHVwbGljYXRlKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJQ29weSBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvbmU9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25SZW1vdmUobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElUcmFzaCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgR2xvYmFsRnggfSBmcm9tIFwiLi4vc2hhcmVkL3R5cGVzXCI7XG5cbi8qKiBLZXlib2FyZCBtYXBzIGZvciBwbGF5IG1vZGUgXHUyMDE0IHRoZSBjYW52YXMtYXMtaW5zdHJ1bWVudCBsYXlvdXQuICovXG5cbmV4cG9ydCBjb25zdCBQTEFZX0ZYX0tFWVM6IHtcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgY2FwOiBzdHJpbmc7XG4gICAgcGFyYW06IGtleW9mIEdsb2JhbEZ4O1xuICAgIGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG4gICAgeyBjb2RlOiBcIktleVFcIiwgY2FwOiBcIlFcIiwgcGFyYW06IFwid2FycFwiLCBsYWJlbDogXCJ3YXJwXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5V1wiLCBjYXA6IFwiV1wiLCBwYXJhbTogXCJzd2lybFwiLCBsYWJlbDogXCJzd2lybFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUVcIiwgY2FwOiBcIkVcIiwgcGFyYW06IFwicmlwcGxlXCIsIGxhYmVsOiBcInJpcHBsZVwiIH0sXG4gICAgeyBjb2RlOiBcIktleVJcIiwgY2FwOiBcIlJcIiwgcGFyYW06IFwiem9vbVwiLCBsYWJlbDogXCJ0dW5uZWxcIiB9LFxuICAgIHsgY29kZTogXCJLZXlUXCIsIGNhcDogXCJUXCIsIHBhcmFtOiBcImthbGVpZG9cIiwgbGFiZWw6IFwia2FsZWlkb1wiIH0sXG4gICAgeyBjb2RlOiBcIktleVlcIiwgY2FwOiBcIllcIiwgcGFyYW06IFwibWlycm9yXCIsIGxhYmVsOiBcIm1pcnJvclwiIH0sXG4gICAgeyBjb2RlOiBcIktleVVcIiwgY2FwOiBcIlVcIiwgcGFyYW06IFwiY2hyb21hXCIsIGxhYmVsOiBcInByaXNtXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5SVwiLCBjYXA6IFwiSVwiLCBwYXJhbTogXCJmZWVkYmFja1wiLCBsYWJlbDogXCJlY2hvXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5T1wiLCBjYXA6IFwiT1wiLCBwYXJhbTogXCJ0cmFpbHNcIiwgbGFiZWw6IFwidHJhaWxzXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5UFwiLCBjYXA6IFwiUFwiLCBwYXJhbTogXCJzdHJvYmVcIiwgbGFiZWw6IFwic3Ryb2JlXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQTEFZX1BJQU5POiB7IGNvZGU6IHN0cmluZzsgY2FwOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgY29kZTogXCJLZXlBXCIsIGNhcDogXCJBXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5U1wiLCBjYXA6IFwiU1wiIH0sXG4gICAgeyBjb2RlOiBcIktleURcIiwgY2FwOiBcIkRcIiB9LFxuICAgIHsgY29kZTogXCJLZXlGXCIsIGNhcDogXCJGXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5R1wiLCBjYXA6IFwiR1wiIH0sXG4gICAgeyBjb2RlOiBcIktleUhcIiwgY2FwOiBcIkhcIiB9LFxuICAgIHsgY29kZTogXCJLZXlKXCIsIGNhcDogXCJKXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5S1wiLCBjYXA6IFwiS1wiIH0sXG4gICAgeyBjb2RlOiBcIktleUxcIiwgY2FwOiBcIkxcIiB9LFxuICAgIHsgY29kZTogXCJTZW1pY29sb25cIiwgY2FwOiBcIjtcIiB9LFxuICAgIHsgY29kZTogXCJRdW90ZVwiLCBjYXA6IFwiJ1wiIH0sXG5dO1xuXG4vKiogQm90dG9tLXJvdyBsYXllciBzdHJpa2VzIChaXHUyMDEzLyBcdTIxOTIgbGF5ZXJzIDFcdTIwMTMxMCkuICovXG5leHBvcnQgY29uc3QgUExBWV9MQVlFUl9LRVlTOiB7IGNvZGU6IHN0cmluZzsgY2FwOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgY29kZTogXCJLZXlaXCIsIGNhcDogXCJaXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5WFwiLCBjYXA6IFwiWFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUNcIiwgY2FwOiBcIkNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlWXCIsIGNhcDogXCJWXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5QlwiLCBjYXA6IFwiQlwiIH0sXG4gICAgeyBjb2RlOiBcIktleU5cIiwgY2FwOiBcIk5cIiB9LFxuICAgIHsgY29kZTogXCJLZXlNXCIsIGNhcDogXCJNXCIgfSxcbiAgICB7IGNvZGU6IFwiQ29tbWFcIiwgY2FwOiBcIixcIiB9LFxuICAgIHsgY29kZTogXCJQZXJpb2RcIiwgY2FwOiBcIi5cIiB9LFxuICAgIHsgY29kZTogXCJTbGFzaFwiLCBjYXA6IFwiL1wiIH0sXG5dO1xuXG4vKiogQmFja3F1b3RlICsgZGlnaXQgcm93LCBpbmRleC1hbGlnbmVkIHdpdGggV09STERfUFJFU0VUUy4gKi9cbmV4cG9ydCBjb25zdCBQTEFZX1BSRVNFVF9DT0RFUyA9IFtcbiAgICBcIkJhY2txdW90ZVwiLFxuICAgIFwiRGlnaXQxXCIsXG4gICAgXCJEaWdpdDJcIixcbiAgICBcIkRpZ2l0M1wiLFxuICAgIFwiRGlnaXQ0XCIsXG4gICAgXCJEaWdpdDVcIixcbiAgICBcIkRpZ2l0NlwiLFxuICAgIFwiRGlnaXQ3XCIsXG4gICAgXCJEaWdpdDhcIixcbiAgICBcIkRpZ2l0OVwiLFxuICAgIFwiRGlnaXQwXCIsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9IZXgoXG4gICAgaHVlRGVnOiBudW1iZXIsXG4gICAgc2F0dXJhdGlvbjogbnVtYmVyLFxuICAgIGxpZ2h0bmVzczogbnVtYmVyLFxuKTogc3RyaW5nIHtcbiAgICBjb25zdCBhID0gc2F0dXJhdGlvbiAqIE1hdGgubWluKGxpZ2h0bmVzcywgMSAtIGxpZ2h0bmVzcyk7XG4gICAgY29uc3QgY2hhbm5lbCA9IChuOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgayA9IChuICsgaHVlRGVnIC8gMzApICUgMTI7XG4gICAgICAgIGNvbnN0IGMgPSBsaWdodG5lc3MgLSBhICogTWF0aC5tYXgoLTEsIE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSkpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChjICogMjU1KVxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBgIyR7Y2hhbm5lbCgwKX0ke2NoYW5uZWwoOCl9JHtjaGFubmVsKDQpfWA7XG59XG4iLCAiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vdWlcIjtcbmltcG9ydCB7IFBMQVlfRlhfS0VZUywgUExBWV9MQVlFUl9LRVlTLCBQTEFZX1BJQU5PIH0gZnJvbSBcIi4uL3BsYXltYXBcIjtcbmltcG9ydCB7IFdPUkxEX1BSRVNFVFMgfSBmcm9tIFwiLi4vcHJlc2V0c1wiO1xuXG50eXBlIEhlbHBLZXlHcm91cCA9IFwicHJlc2V0XCIgfCBcImZ4XCIgfCBcIm5vdGVcIiB8IFwibGF5ZXJcIiB8IFwic3lzXCIgfCBcIm5vbmVcIjtcblxudHlwZSBIZWxwS2V5RGVmID0ge1xuICAgIGNhcDogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHU/OiBudW1iZXI7XG4gICAgZ3JvdXA6IEhlbHBLZXlHcm91cDtcbiAgICBodWU/OiBudW1iZXI7XG59O1xuXG5mdW5jdGlvbiBIZWxwS2V5Q2FwKHByb3BzOiBIZWxwS2V5RGVmICYgeyBrZXk/OiBzdHJpbmcgfCBudW1iZXIgfSkge1xuICAgIGxldCBib3JkZXIgPSBcInZhcigtLWxpbmUpXCI7XG4gICAgbGV0IGNhcENvbG9yID0gXCJ2YXIoLS1wYXBlcilcIjtcbiAgICBsZXQgbGFiZWxDb2xvciA9IFwidmFyKC0tbXV0ZSlcIjtcbiAgICBsZXQgYmFja2dyb3VuZCA9IFwidmFyKC0tcGFuZWwpXCI7XG4gICAgaWYgKHByb3BzLmdyb3VwID09PSBcInByZXNldFwiKSB7XG4gICAgICAgIGJvcmRlciA9IFwicmdiYSgyMzIsMjMwLDIyNCwwLjQpXCI7XG4gICAgICAgIGxhYmVsQ29sb3IgPSBcInZhcigtLWFjaWQpXCI7XG4gICAgICAgIGJhY2tncm91bmQgPSBcInJnYmEoMjMyLDIzMCwyMjQsMC4wNSlcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcImZ4XCIpIHtcbiAgICAgICAgYm9yZGVyID0gXCJyZ2JhKDE2OCwxMjAsMTI4LDAuNTUpXCI7XG4gICAgICAgIGxhYmVsQ29sb3IgPSBcIiNjZjlhYTZcIjtcbiAgICAgICAgYmFja2dyb3VuZCA9IFwicmdiYSgxNjgsMTIwLDEyOCwwLjA5KVwiO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuZ3JvdXAgPT09IFwibm90ZVwiKSB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHByb3BzLmh1ZSA/PyAwO1xuICAgICAgICBib3JkZXIgPSBgaHNsYSgke2h1ZX0sIDcwJSwgNjAlLCAwLjc1KWA7XG4gICAgICAgIGxhYmVsQ29sb3IgPSBgaHNsKCR7aHVlfSwgNzUlLCA2OCUpYDtcbiAgICAgICAgY2FwQ29sb3IgPSBgaHNsKCR7aHVlfSwgNjAlLCA4NCUpYDtcbiAgICAgICAgYmFja2dyb3VuZCA9IGBoc2xhKCR7aHVlfSwgNzAlLCA1MCUsIDAuMTMpYDtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcImxheWVyXCIpIHtcbiAgICAgICAgYm9yZGVyID0gXCJyZ2JhKDEyNSwxNjUsMTMxLDAuNTUpXCI7XG4gICAgICAgIGxhYmVsQ29sb3IgPSBcIiM5Y2M0YTJcIjtcbiAgICAgICAgYmFja2dyb3VuZCA9IFwicmdiYSgxMjUsMTY1LDEzMSwwLjA5KVwiO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuZ3JvdXAgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIGNhcENvbG9yID0gXCJ2YXIoLS10cmFjaylcIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4IGgtWzQ2cHhdIGZsZXgtc2hyaW5rLTAgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xIGJvcmRlciBweC0wLjUgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7KHByb3BzLnUgPz8gMSkgKiA0Nn1weGAsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlcixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjYXBDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVs2LjVweF0gdXBwZXJjYXNlIGxlYWRpbmctbm9uZSB0cmFja2luZy1bMC4wOGVtXVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBsYWJlbENvbG9yIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEhlbHBMaXN0KHByb3BzOiB7IHRpdGxlOiBzdHJpbmc7IGl0ZW1zOiBbc3RyaW5nLCBzdHJpbmddW10gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJtYi0yIHRleHQtWzlweF0gZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE2ZW1dIHRleHQtW3ZhcigtLWFjaWQpXVwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKFt0ZXJtLCBib2R5XSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzkuNXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVt2YXIoLS1wYXBlcildXCI+e3Rlcm19PC9zcGFuPiBcdTIwMTQge2JvZHl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVscE1vZGFsKHByb3BzOiB7IG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuICAgIGNvbnN0IG5vdGVIdWUgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgTWF0aC5yb3VuZCgoaW5kZXggLyBQTEFZX1BJQU5PLmxlbmd0aCkgKiAzNjApO1xuICAgIGNvbnN0IHJvd3M6IHsgb2Zmc2V0OiBudW1iZXI7IGtleXM6IEhlbHBLZXlEZWZbXSB9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJgXCIsIGxhYmVsOiBcIjAwXCIsIGdyb3VwOiBcInByZXNldFwiIH0sXG4gICAgICAgICAgICAgICAgLi4uV09STERfUFJFU0VUUy5zbGljZSgxKS5tYXAoKHByZXNldCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDogU3RyaW5nKChpbmRleCArIDEpICUgMTApLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2V0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcInByZXNldFwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCItXCIsIGdyb3VwOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIj1cIiwgZ3JvdXA6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMzJCXCIsIHU6IDEuNiwgbGFiZWw6IFwid2FzaFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAga2V5czogW1xuICAgICAgICAgICAgICAgIHsgY2FwOiBcIlx1MjFFNVwiLCB1OiAxLjQsIGxhYmVsOiBcImhpZGUgdWlcIiwgZ3JvdXA6IFwic3lzXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX0ZYX0tFWVMubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDoga2V5LmNhcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwiZnhcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiW1wiLCBsYWJlbDogXCJzbG93ZXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIl1cIiwgbGFiZWw6IFwiZmFzdGVyXCIsIGdyb3VwOiBcImZ4XCIgfSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcXFxcXCIsIHU6IDEuMiwgbGFiZWw6IFwic29sYXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNixcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRUFcIiwgdTogMS43LCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX1BJQU5PLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcdTI2NkFcIixcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwibm90ZVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICBodWU6IG5vdGVIdWUoaW5kZXgpLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIzQ0VcIiwgdTogMi4wLCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMzAsXG4gICAgICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMUU3XCIsIHU6IDIuMiwgbGFiZWw6IFwiaW52ZXJ0XCIsIGdyb3VwOiBcInN5c1wiIH0sXG4gICAgICAgICAgICAgICAgLi4uUExBWV9MQVlFUl9LRVlTLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGx5ciAke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogXCJsYXllclwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRTcgL1wiLCB1OiAxLjUsIGxhYmVsOiBcIm1hbnVhbFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNzAsXG4gICAgICAgICAgICBrZXlzOiBbeyBjYXA6IFwic3BhY2VcIiwgdTogNywgbGFiZWw6IFwiZnJlZXplIHRpbWVcIiwgZ3JvdXA6IFwic3lzXCIgfV0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRpdGxlPVwiUGxheSBtb2RlIFx1MDBCNyBjb250cm9sc1wiXG4gICAgICAgICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgbWF4V2lkdGg9XCJtYXgtdy1bODQwcHhdXCJcbiAgICAgICAgICAgIGhlYWRlckV4dHJhPXtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVt2YXIoLS1tdXRlKV0gc206aW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIHVuZG8gLyByZWRvIGNvdmVycyBldmVyeSBjaGFuZ2VcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy14LWF1dG8gcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWluLXctWzc0MHB4XSBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBnYXAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7cm93Lm9mZnNldH1weGAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmtleXMubWFwKChrZXksIGtleUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWxwS2V5Q2FwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwPXtrZXkuY2FwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2tleS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHU9e2tleS51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e2tleS5ncm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh1ZT17a2V5Lmh1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ2FwLTUgYm9yZGVyLXQgYm9yZGVyLVt2YXIoLS1saW5lKV0gcC00IHNtOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTW91c2VcIlxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgW1wiY2xpY2sgYSBsYXllclwiLCBcImFwcGxpZXMgdG8gdGhhdCBsYXllciBvbmx5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wic2hpZnQrY2xpY2tcIiwgXCJzdWJ0cmFjdCBpbnN0ZWFkIG9mIGFkZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImRvdWJsZS1jbGlja1wiLCBcImN5Y2xlIGthbGVpZG9zY29wZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImRyYWcgKyByZWxlYXNlXCIsIFwic2V0IGVjaG8gdHJhaWwgZGlyZWN0aW9uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhbG0gRlggb24gdGhlIHdvcmxkIG9yIHRoZSBsYXllciB1bmRlciB0aGUgY3Vyc29yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wid2hlZWxcIiwgXCJodWUgXHUwMEI3IHNoaWZ0K3doZWVsID0gc2F0dXJhdGlvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwTGlzdFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIktleWJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcIm51bWJlciByb3dcIiwgXCJ3b3JsZCBwcmVzZXRzIDAwXHUyMDEzMTBcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxd2VydHkgcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWlzZSBhbiBlZmZlY3QgXHUwMEI3IHNoaWZ0IGxvd2VycyBcdTAwQjcgaG9sZCB0byByYW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZSByb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldCBhbGwgbGF5ZXJzIHRvIGEgaHVlIFx1MDBCNyBzaGlmdCBzZXRzIGJhY2tncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXJvbGwgbGF5ZXIgRlggXHUwMEI3IHNoaWZ0IHJlc2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcIlsgXVwiLCBcInRpbWUgc2xvd2VyIC8gZmFzdGVyIFx1MDBCNyBcXFxcIHNvbGFyaXplXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wiYXJyb3dzXCIsIFwiXHUyMTkwIFx1MjE5MiBodWUgXHUwMEI3IFx1MjE5MSBcdTIxOTMgc2F0dXJhdGlvblwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImJhY2tzcGFjZVwiLCBcInJlc2V0IHdvcmxkIEZYXCJdLFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2xvYmFsXCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcImVzY1wiLCBcImFycmFuZ2UgbW9kZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcIlBcIiwgXCJwbGF5IG1vZGUgKGZyb20gYXJyYW5nZSlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJzcGFjZVwiLCBcImZyZWV6ZSB0aW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1widGFiXCIsIFwiaGlkZSBVSVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcIlx1MjMxOFogLyBcdTIxRTdcdTIzMThaXCIsIFwidW5kbyAvIHJlZG9cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXCJmaWVsZFwiLCBcImN1cnNvciBtb2RlIHVuZGVyIEN1cnNvciBzZXR0aW5nc1wiXSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFwcFNldHRpbmdzIH0gZnJvbSBcIi4uL2FwcFNldHRpbmdzXCI7XG5pbXBvcnQgeyBNb2RhbCwgVG9nZ2xlIH0gZnJvbSBcIi4uL3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc01vZGFsKHByb3BzOiB7XG4gICAgc2V0dGluZ3M6IEFwcFNldHRpbmdzO1xuICAgIHJlY29yZGluZzogYm9vbGVhbjtcbiAgICBvbkNoYW5nZTogKHBhdGNoOiBQYXJ0aWFsPEFwcFNldHRpbmdzPikgPT4gdm9pZDtcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB0aXRsZT1cIlNldHRpbmdzXCIgb25DbG9zZT17cHJvcHMub25DbG9zZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteS0zIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICBSZWNvcmRpbmdcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pYyBhdWRpbyBpbiByZWNvcmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcm9wcy5zZXR0aW5ncy5yZWNvcmRNaWNBdWRpb31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLnJlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhjaGVja2VkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoeyByZWNvcmRNaWNBdWRpbzogY2hlY2tlZCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgY2xlYW5OYW1lIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG4vKiogUE5HLWV4cG9ydCAvIHJlY29yZGluZyByZXNvbHV0aW9ucywgYWxsIGtlZXBpbmcgdGhlIGxpdmUgc3RhZ2UgYXNwZWN0LiAqL1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9SRVNPTFVUSU9OUyA9IFtcbiAgICB7IGlkOiBcInNjcmVlblwiLCBsYWJlbDogXCJTY3JlZW5cIiwgaGVpZ2h0OiAwIH0sXG4gICAgeyBpZDogXCI3MjBcIiwgbGFiZWw6IFwiNzIwcFwiLCBoZWlnaHQ6IDcyMCB9LFxuICAgIHsgaWQ6IFwiMTA4MFwiLCBsYWJlbDogXCIxMDgwcFwiLCBoZWlnaHQ6IDEwODAgfSxcbiAgICB7IGlkOiBcIjE0NDBcIiwgbGFiZWw6IFwiMTQ0MHBcIiwgaGVpZ2h0OiAxNDQwIH0sXG4gICAgeyBpZDogXCIyMTYwXCIsIGxhYmVsOiBcIjRLXCIsIGhlaWdodDogMjE2MCB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgRXhwb3J0UmVzb2x1dGlvbklkID0gKHR5cGVvZiBFWFBPUlRfUkVTT0xVVElPTlMpW251bWJlcl1bXCJpZFwiXTtcblxuY29uc3QgTUFYX0VYUE9SVF9FREdFID0gODE5MjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFeHBvcnRTaXplKFxuICAgIHJlc29sdXRpb25JZDogRXhwb3J0UmVzb2x1dGlvbklkLFxuICAgIHN0YWdlOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0sXG4gICAgLyoqIEZvciBcInNjcmVlblwiIFBORyBleHBvcnRzIFx1MjAxNCBtdWx0aXBseSB0aGUgbGl2ZSBzdGFnZSBieSB0aGlzLiAqL1xuICAgIHNjcmVlblNjYWxlID0gMSxcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgc3RhZ2Uud2lkdGggLyBNYXRoLm1heCgxLCBzdGFnZS5oZWlnaHQpKTtcbiAgICBsZXQgaGVpZ2h0OiBudW1iZXI7XG4gICAgbGV0IHdpZHRoOiBudW1iZXI7XG4gICAgaWYgKHJlc29sdXRpb25JZCA9PT0gXCJzY3JlZW5cIikge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHN0YWdlLmhlaWdodCAqIHNjcmVlblNjYWxlKSk7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzdGFnZS53aWR0aCAqIHNjcmVlblNjYWxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJlc2V0ID0gRVhQT1JUX1JFU09MVVRJT05TLmZpbmQoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcmVzb2x1dGlvbklkLFxuICAgICAgICApO1xuICAgICAgICBoZWlnaHQgPSBwcmVzZXQ/LmhlaWdodCB8fCAxMDgwO1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoaGVpZ2h0ICogYXNwZWN0KSk7XG4gICAgfVxuICAgIGNvbnN0IGxvbmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBpZiAobG9uZ2VzdCA+IE1BWF9FWFBPUlRfRURHRSkge1xuICAgICAgICBjb25zdCBzY2FsZSA9IE1BWF9FWFBPUlRfRURHRSAvIGxvbmdlc3Q7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpKTtcbiAgICB9XG4gICAgLy8gS2VlcCBldmVuIGRpbWVuc2lvbnMgXHUyMDE0IGZyaWVuZGxpZXIgZm9yIHZpZGVvIGVuY29kZXJzLlxuICAgIHJldHVybiB7IHdpZHRoOiB3aWR0aCAtICh3aWR0aCAlIDIpLCBoZWlnaHQ6IGhlaWdodCAtIChoZWlnaHQgJSAyKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGlja1JlY29yZGVyTWltZShpbmNsdWRlQXVkaW86IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHdpdGhBdWRpbyA9IFtcbiAgICAgICAgXCJ2aWRlby93ZWJtO2NvZGVjcz12cDksb3B1c1wiLFxuICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOCxvcHVzXCIsXG4gICAgICAgIFwidmlkZW8vd2VibVwiLFxuICAgICAgICBcInZpZGVvL21wNFwiLFxuICAgIF07XG4gICAgY29uc3QgdmlkZW9Pbmx5ID0gW1xuICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOVwiLFxuICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOFwiLFxuICAgICAgICBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgXCJ2aWRlby9tcDRcIixcbiAgICBdO1xuICAgIHJldHVybiAoaW5jbHVkZUF1ZGlvID8gd2l0aEF1ZGlvIDogdmlkZW9Pbmx5KS5maW5kKCh0eXBlKSA9PlxuICAgICAgICBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCh0eXBlKSxcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRCbG9iKGJsb2I6IEJsb2IsIGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgIGFuY2hvci5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgIGFuY2hvci5jbGljaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpLCA0MDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydEZpbGVuYW1lKHNjZW5lTmFtZTogc3RyaW5nLCBleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgcHJvamVjdCA9XG4gICAgICAgIGNsZWFuTmFtZShzY2VuZU5hbWUsIFwidmF1ZGlvLTJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLV0rL2csIFwiLVwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL14tfC0kL2csIFwiXCIpIHx8IFwidmF1ZGlvLTJcIjtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHBhZCA9IChuOiBudW1iZXIpID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3Qgc3RhbXAgPSBbXG4gICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICBwYWQobm93LmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgcGFkKG5vdy5nZXREYXRlKCkpLFxuICAgICAgICBcIi1cIixcbiAgICAgICAgcGFkKG5vdy5nZXRIb3VycygpKSxcbiAgICAgICAgcGFkKG5vdy5nZXRNaW51dGVzKCkpLFxuICAgICAgICBwYWQobm93LmdldFNlY29uZHMoKSksXG4gICAgXS5qb2luKFwiXCIpO1xuICAgIHJldHVybiBgJHtwcm9qZWN0fS0ke3N0YW1wfS4ke2V4dGVuc2lvbn1gO1xufVxuIiwgImltcG9ydCB0eXBlIHsgU2NlbmVNZXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgSUZvbGRlciwgSVBsdXMsIElUcmFzaCB9IGZyb20gXCIuLi9pY29uc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSBcIi4uL3VpXCI7XG5cbi8qKiBcIlNjZW5lc1wiIHRvb2xiYXIgYnV0dG9uIHBsdXMgaXRzIHNhdmVkLXNjZW5lcyBkcm9wZG93bi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTY2VuZXNNZW51KHByb3BzOiB7XG4gICAgb3BlbjogYm9vbGVhbjtcbiAgICBvblRvZ2dsZTogKCkgPT4gdm9pZDtcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICAgIHNjZW5lczogU2NlbmVNZXRhW107XG4gICAgaXNHdWVzdDogYm9vbGVhbjtcbiAgICBvbk5ldzogKCkgPT4gdm9pZDtcbiAgICBvbkxvYWQ6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uRGVsZXRlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgc2F2ZWQgc2NlbmVzXCJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTY2VuZXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJRm9sZGVyIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtwcm9wcy5vcGVuICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LVs5OV1cIiBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wIGFic29sdXRlIHJpZ2h0LTAgdG9wLTggei1bMTAwXSBtYXgtaC1bNjB2aF0gdy02NCBvdmVyZmxvdy15LWF1dG8gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcC0xLjUgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMSBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTIuNSBweS0yIHRleHQtbGVmdCBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gaG92ZXI6YmctW3ZhcigtLWxpbmUpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25OZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElQbHVzIGNsYXNzPVwiaC0zLjUgdy0zLjUgdGV4dC1bdmFyKC0tYWNpZCldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVsxMC41cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4wOGVtXSB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBzY2VuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNjZW5lcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC0zIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gc2F2ZWQgc2NlbmVzIHlldC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzR3Vlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgKEd1ZXN0IHNlc3Npb25zIHNhdmUgbG9jYWxseSBwZXIgZGVwbG95LilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2NlbmVzLm1hcCgobWV0YSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttZXRhLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtMS41IGhvdmVyOmJnLVt2YXIoLS1saW5lKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggbWluLXctMCBmbGV4LTEgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkxvYWQobWV0YS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JpZCBoLTkgdy0xNCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWV0YS50aHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXVkaW8tMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdHJ1bmNhdGUgdGV4dC1bMTEuNXB4XSB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tb25vIHRleHQtWzguNXB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS51cGRhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgc2NlbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9uZT1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkRlbGV0ZShtZXRhLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElUcmFzaCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IFNjZW5lTWV0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IEVYUE9SVF9SRVNPTFVUSU9OUywgdHlwZSBFeHBvcnRSZXNvbHV0aW9uSWQgfSBmcm9tIFwiLi4vZXhwb3J0aW5nXCI7XG5pbXBvcnQge1xuICAgIElEaWNlLFxuICAgIElEb3dubG9hZCxcbiAgICBJRXhwYW5kLFxuICAgIElNaWMsXG4gICAgSU1vdmUsXG4gICAgSVBhbmVsLFxuICAgIElQYXVzZSxcbiAgICBJUGxheSxcbiAgICBJU2F2ZSxcbiAgICBJU2V0dGluZ3MsXG4gICAgSVNwYXJrLFxuICAgIElXYW5kLFxufSBmcm9tIFwiLi4vaWNvbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0IH0gZnJvbSBcIi4uL3VpXCI7XG5pbXBvcnQgeyBTY2VuZXNNZW51IH0gZnJvbSBcIi4vU2NlbmVzTWVudVwiO1xuXG5jb25zdCBSRVNPTFVUSU9OX09QVElPTlMgPSBFWFBPUlRfUkVTT0xVVElPTlMubWFwKChpdGVtKSA9PiAoe1xuICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxufSkpO1xuXG5leHBvcnQgdHlwZSBTdGFnZU1vZGUgPSBcImFycmFuZ2VcIiB8IFwicGxheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9wQmFyKHByb3BzOiB7XG4gICAgc2NlbmVOYW1lOiBzdHJpbmc7XG4gICAgb25SZW5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25SZW5hbWVDb21taXQ6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgc3RhZ2VNb2RlOiBTdGFnZU1vZGU7XG4gICAgb25TdGFnZU1vZGU6IChtb2RlOiBTdGFnZU1vZGUpID0+IHZvaWQ7XG4gICAgZnJvemVuOiBib29sZWFuO1xuICAgIG9uVG9nZ2xlRnJvemVuOiAoKSA9PiB2b2lkO1xuICAgIG9uQ2hhb3M6ICgpID0+IHZvaWQ7XG4gICAgb25NdXRhdGU6ICgpID0+IHZvaWQ7XG4gICAgb25TYXZlOiAoKSA9PiB2b2lkO1xuICAgIHNjZW5lc09wZW46IGJvb2xlYW47XG4gICAgb25Ub2dnbGVTY2VuZXM6ICgpID0+IHZvaWQ7XG4gICAgb25DbG9zZVNjZW5lczogKCkgPT4gdm9pZDtcbiAgICBzY2VuZXM6IFNjZW5lTWV0YVtdO1xuICAgIGlzR3Vlc3Q6IGJvb2xlYW47XG4gICAgb25OZXdTY2VuZTogKCkgPT4gdm9pZDtcbiAgICBvbkxvYWRTY2VuZTogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25EZWxldGVTY2VuZTogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgbWljQWN0aXZlOiBib29sZWFuO1xuICAgIG9uVG9nZ2xlTWljOiAoKSA9PiB2b2lkO1xuICAgIHJlY29yZGluZzogYm9vbGVhbjtcbiAgICByZWNvcmRNaWNBdWRpbzogYm9vbGVhbjtcbiAgICBvblRvZ2dsZVJlY29yZGluZzogKCkgPT4gdm9pZDtcbiAgICBleHBvcnRSZXM6IEV4cG9ydFJlc29sdXRpb25JZDtcbiAgICBvbkV4cG9ydFJlczogKGlkOiBFeHBvcnRSZXNvbHV0aW9uSWQpID0+IHZvaWQ7XG4gICAgb25FeHBvcnRQbmc6ICgpID0+IHZvaWQ7XG4gICAgc2V0dGluZ3NPcGVuOiBib29sZWFuO1xuICAgIG9uVG9nZ2xlU2V0dGluZ3M6ICgpID0+IHZvaWQ7XG4gICAgaGVscE9wZW46IGJvb2xlYW47XG4gICAgb25Ub2dnbGVIZWxwOiAoKSA9PiB2b2lkO1xuICAgIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gICAgb25Ub2dnbGVGdWxsc2NyZWVuOiAoKSA9PiB2b2lkO1xuICAgIG9uSGlkZVVpOiAoKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyZWxhdGl2ZSB6LTUwIGZsZXggaC0xMSBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHB4LTIuNVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEgdGV4dC1bMS4xNXJlbV0gZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy1bLTAuMDhlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiAnXCJTcGFjZSBHcm90ZXNrXCIsIHNhbnMtc2VyaWYnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgdmF1ZGlvLTJcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1bMjZweF0gdy0zNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHB4LTEuNSB0ZXh0LVsxMnB4XSBmb250LW1lZGl1bSB0ZXh0LVt2YXIoLS1wYXBlcildIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUpXSBmb2N1czpib3JkZXItW3ZhcigtLWFjaWQpXS82MFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnNjZW5lTmFtZX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uUmVuYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uUmVuYW1lQ29tbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJteC0xIGgtNCB3LXB4IGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJyYW5nZSBsYXllcnNcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZT17cHJvcHMuc3RhZ2VNb2RlID09PSBcImFycmFuZ2VcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblN0YWdlTW9kZShcImFycmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBcnJhbmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SU1vdmUgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheSB0aGUgY2FudmFzIHdpdGggeW91ciBjdXJzb3IgKFApXCJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLnN0YWdlTW9kZSA9PT0gXCJwbGF5XCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25TdGFnZU1vZGUoXCJwbGF5XCIpfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElTcGFyayAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTEgaC00IHctcHggYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJSYW5kb21pemUgZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DaGFvc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNoYW9zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SURpY2UgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVkZ2UgdGhlIHdvcmxkIHNvbWV3aGVyZSBuZXdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uTXV0YXRlfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTXV0YXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SVdhbmQgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZnJvemVuID8gXCJSZXN1bWUgdGltZSAoU3BhY2UpXCIgOiBcIkZyZWV6ZSB0aW1lIChTcGFjZSlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLmZyb3plbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblRvZ2dsZUZyb3plbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuZnJvemVuID8gPElQbGF5IC8+IDogPElQYXVzZSAvPn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU2F2ZSBzY2VuZSB0byB5b3VyIGxpYnJhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uU2F2ZX1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJU2F2ZSAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8U2NlbmVzTWVudVxuICAgICAgICAgICAgICAgIG9wZW49e3Byb3BzLnNjZW5lc09wZW59XG4gICAgICAgICAgICAgICAgb25Ub2dnbGU9e3Byb3BzLm9uVG9nZ2xlU2NlbmVzfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLm9uQ2xvc2VTY2VuZXN9XG4gICAgICAgICAgICAgICAgc2NlbmVzPXtwcm9wcy5zY2VuZXN9XG4gICAgICAgICAgICAgICAgaXNHdWVzdD17cHJvcHMuaXNHdWVzdH1cbiAgICAgICAgICAgICAgICBvbk5ldz17cHJvcHMub25OZXdTY2VuZX1cbiAgICAgICAgICAgICAgICBvbkxvYWQ9e3Byb3BzLm9uTG9hZFNjZW5lfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtwcm9wcy5vbkRlbGV0ZVNjZW5lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1pY0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlN0b3AgbWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiQXVkaW8tcmVhY3QgZnJvbSB5b3VyIG1pY3JvcGhvbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLm1pY0FjdGl2ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblRvZ2dsZU1pY31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SU1pYyAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5yZWNvcmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTdG9wIHJlY29yZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLnJlY29yZE1pY0F1ZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJSZWNvcmQgY2FudmFzICsgbWljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlJlY29yZCB0aGUgY2FudmFzIHRvIHZpZGVvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGFuZ2VyPXtwcm9wcy5yZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25Ub2dnbGVSZWNvcmRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLnJlY29yZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWMtZG90IGlubGluZS1ibG9jayBoLTIuNSB3LTIuNSByb3VuZGVkLWZ1bGwgYmctWyNjNDViNmFdXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayBoLTIuNSB3LTIuNSByb3VuZGVkLWZ1bGwgYm9yZGVyLVsxLjVweF0gYm9yZGVyLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxTZWxlY3Q8RXhwb3J0UmVzb2x1dGlvbklkPlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhwb3J0IC8gcmVjb3JkaW5nIHJlc29sdXRpb24gKGtlZXBzIHN0YWdlIGFzcGVjdClcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5leHBvcnRSZXN9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17UkVTT0xVVElPTl9PUFRJT05TfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5yZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uRXhwb3J0UmVzfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy1bNzhweF1cIlxuICAgICAgICAgICAgICAgIG1lbnVDbGFzcz1cInJpZ2h0LTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT17YEV4cG9ydCBQTkcgYXQgJHtFWFBPUlRfUkVTT0xVVElPTlMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvcHMuZXhwb3J0UmVzKT8ubGFiZWwgPz8gXCJzZWxlY3RlZFwifSByZXNvbHV0aW9uYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkV4cG9ydFBuZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SURvd25sb2FkIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLnNldHRpbmdzT3Blbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblRvZ2dsZVNldHRpbmdzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJU2V0dGluZ3MgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiSW5zdHJ1bWVudCBtYW51YWwgKD8pXCJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e3Byb3BzLmhlbHBPcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uVG9nZ2xlSGVscH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyaWQgaC1bMTVweF0gdy1bMTVweF0gcGxhY2UtaXRlbXMtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBmb250LWJvbGQgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJIaWRlIGludGVyZmFjZSAoVGFiKVwiIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZVVpfT5cbiAgICAgICAgICAgICAgICA8SVBhbmVsIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgeyBCR19NT0RFUywgUE9JTlRFUl9NT0RFUywgdHlwZSBHbG9iYWxGeCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IFdPUkxEX1BSRVNFVFMgfSBmcm9tIFwiLi4vcHJlc2V0c1wiO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VnbWVudGVkLCBTbGlkZXIsIGZvcm1hdFggfSBmcm9tIFwiLi4vdWlcIjtcblxuLyoqIFJpZ2h0LXBhbmVsIHNlY3Rpb25zIGNvbnRyb2xsaW5nIHRoZSB3b3JsZCAoZ2xvYmFsKSBGWC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBXb3JsZFBhbmVsKHByb3BzOiB7XG4gICAgZ2xvYmFsOiBHbG9iYWxGeDtcbiAgICBvblBhdGNoOiAocGF0Y2g6IFBhcnRpYWw8R2xvYmFsRng+KSA9PiB2b2lkO1xuICAgIG9uUHJlc2V0OiAocHJlc2V0OiAodHlwZW9mIFdPUkxEX1BSRVNFVFMpW251bWJlcl0pID0+IHZvaWQ7XG59KSB7XG4gICAgY29uc3QgZyA9IHByb3BzLmdsb2JhbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGbHVpZCB3YXJwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cud2FycH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgd2FycDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3dpcmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5zd2lybH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgc3dpcmw6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJpcHBsZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5yaXBwbGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHJpcHBsZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVubmVsIHpvb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy56b29tfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyB6b29tOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJLYWxlaWRvc2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5rYWxlaWRvfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBrYWxlaWRvOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaXJyb3IgZm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnLm1pcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgbWlycm9yOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJGZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnLmZlZWRiYWNrfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBmZWVkYmFjazogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhaWwgbGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cudHJhaWxzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuNn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHRyYWlsczogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWNobyB6b29tXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuZmJab29tfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgZmJab29tOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIHNwaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5mYlJvdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGZiUm90YXRlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIGh1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnLmZiSHVlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBmYkh1ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiV29ybGQgY29sb3JcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpc20gc3BsaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5jaHJvbWF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGNocm9tYTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSHVlIG9yYml0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuaHVlT3JiaXR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IGh1ZU9yYml0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuc2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHNhdHVyYXRpb246IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuY29udHJhc3R9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBjb250cmFzdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU29sYXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5zb2xhcml6ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgc29sYXJpemU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIlNpZ25hbFwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcmFpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnLmdyYWlufVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBncmFpbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NhbmxpbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuc2NhbmxpbmVzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHByb3BzLm9uUGF0Y2goeyBzY2FubGluZXM6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZ25ldHRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cudmlnbmV0dGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MC4yMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHZpZ25ldHRlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdHJvYmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zy5zdHJvYmV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gcHJvcHMub25QYXRjaCh7IHN0cm9iZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTW90aW9uICYgYXVkaW9cIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGltZSBzcGVlZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtnLnNwZWVkfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgc3BlZWQ6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF1ZGlvIHJlYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2cuYXVkaW9SZWFjdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBwcm9wcy5vblBhdGNoKHsgYXVkaW9SZWFjdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsICIvLyBXZWJHTCBjb21wb3NpdG9yLiBQaXBlbGluZSBwZXIgZnJhbWU6XG4vLyAgIGJhY2tncm91bmQgc2hhZGVyIC0+IHNjZW5lIEZCT1xuLy8gICBmb3IgZWFjaCBsYXllcjogXHUwMEZDYmVyLXNoYWRlciAoZGlzdG9ydCArIGNvbG9yICsgYmxlbmQgb3ZlciBkZXN0KSAtPiBwaW5nLXBvbmcgc2NlbmUgRkJPXG4vLyAgIHBvc3Qgc2hhZGVyIChzcGFjZSB3YXJwLCBmZWVkYmFjayBlY2hvLCBncmFkZSkgLT4gcGluZy1wb25nIHBvc3QgRkJPXG4vLyAgIGNvcHkgcG9zdCBGQk8gLT4gc2NyZWVuXG4vLyBUaGUgcG9zdCBwaW5nLXBvbmcgZG91YmxlcyBhcyB0aGUgZmVlZGJhY2sgYnVmZmVyLCB3aGljaCBpcyB3aGF0IG1ha2VzXG4vLyB0cmFpbHMgLyBlY2hvLXR1bm5lbCBlZmZlY3RzIHBvc3NpYmxlLlxuXG5leHBvcnQgdHlwZSBQb2ludGVyU3RhdGUgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2ZWxvY2l0eVg6IG51bWJlcjtcbiAgdmVsb2NpdHlZOiBudW1iZXI7XG4gIGRvd246IGJvb2xlYW47XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyUmVuZGVyU3RhdGUgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGltYWdlSWQ6IHN0cmluZztcbiAgcG9zOiBbbnVtYmVyLCBudW1iZXJdO1xuICBleHQ6IFtudW1iZXIsIG51bWJlcl07XG4gIHJvdDogbnVtYmVyO1xuICBvcGFjaXR5OiBudW1iZXI7XG4gIGJsZW5kOiBudW1iZXI7XG4gIHRpbGU6IG51bWJlcjtcbiAgd2FycDogbnVtYmVyO1xuICBzd2lybDogbnVtYmVyO1xuICByaXBwbGU6IG51bWJlcjtcbiAga2FsZWlkbzogbnVtYmVyO1xuICBwaXhlbGF0ZTogbnVtYmVyO1xuICBidWxnZTogbnVtYmVyO1xuICBtaXJyb3I6IG51bWJlcjtcbiAgaHVlOiBudW1iZXI7XG4gIHNhdHVyYXRpb246IG51bWJlcjtcbiAgY29udHJhc3Q6IG51bWJlcjtcbiAgYnJpZ2h0bmVzczogbnVtYmVyO1xuICBpbnZlcnQ6IG51bWJlcjtcbiAgcG9zdGVyaXplOiBudW1iZXI7XG4gIGNocm9tYTogbnVtYmVyO1xuICBlZGdlczogbnVtYmVyO1xuICB0aW50OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIHRpbnRBbW91bnQ6IG51bWJlcjtcbiAgc2hpbW1lcjogbnVtYmVyO1xuICBzZWVkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBHbG9iYWxSZW5kZXJTdGF0ZSA9IHtcbiAgYmdNb2RlOiBudW1iZXI7XG4gIGJnQTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBiZ0I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgZmVlZGJhY2s6IG51bWJlcjtcbiAgdHJhaWxzOiBudW1iZXI7XG4gIGZiWm9vbTogbnVtYmVyO1xuICBmYlJvdGF0ZTogbnVtYmVyO1xuICBmYkh1ZTogbnVtYmVyO1xuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIGNocm9tYTogbnVtYmVyO1xuICBodWVPcmJpdDogbnVtYmVyO1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIHNvbGFyaXplOiBudW1iZXI7XG4gIGdyYWluOiBudW1iZXI7XG4gIHNjYW5saW5lczogbnVtYmVyO1xuICB2aWduZXR0ZTogbnVtYmVyO1xuICBzdHJvYmU6IG51bWJlcjtcbiAgYXVkaW9SZWFjdDogbnVtYmVyO1xuICBwb2ludGVyRm9yY2U6IG51bWJlcjtcbiAgcG9pbnRlclNpemU6IG51bWJlcjtcbiAgcG9pbnRlck1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEZyYW1lU3RhdGUgPSB7XG4gIHRpbWU6IG51bWJlcjtcbiAgYXVkaW86IG51bWJlcjtcbiAgcG9pbnRlcjogUG9pbnRlclN0YXRlO1xuICBsYXllcnM6IExheWVyUmVuZGVyU3RhdGVbXTtcbiAgZ2xvYmFsOiBHbG9iYWxSZW5kZXJTdGF0ZTtcbn07XG5cbmV4cG9ydCB0eXBlIEVuZ2luZUhhbmRsZSA9IHtcbiAgcmVzaXplKGNzc1dpZHRoOiBudW1iZXIsIGNzc0hlaWdodDogbnVtYmVyKTogdm9pZDtcbiAgc2V0UGl4ZWxSYXRpb0NhcChjYXA6IG51bWJlcik6IHZvaWQ7XG4gIHNldEltYWdlKGltYWdlSWQ6IHN0cmluZywgc291cmNlOiBUZXhJbWFnZVNvdXJjZSk6IHZvaWQ7XG4gIHJlbW92ZUltYWdlKGltYWdlSWQ6IHN0cmluZyk6IHZvaWQ7XG4gIGhhc0ltYWdlKGltYWdlSWQ6IHN0cmluZyk6IGJvb2xlYW47XG4gIHJlbmRlcihzdGF0ZTogRnJhbWVTdGF0ZSk6IHZvaWQ7XG4gIGNsZWFyRmVlZGJhY2soKTogdm9pZDtcbiAgZGVzdHJveSgpOiB2b2lkO1xufTtcblxuY29uc3QgVkVSVCA9IGBcbmF0dHJpYnV0ZSB2ZWMyIGFfcG9zO1xudmFyeWluZyB2ZWMyIHZfdXY7XG52b2lkIG1haW4oKSB7XG4gIHZfdXYgPSBhX3BvcyAqIDAuNSArIDAuNTtcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zLCAwLjAsIDEuMCk7XG59XG5gO1xuXG5jb25zdCBHTFNMX0NPTU1PTiA9IGBcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcbm1hdDIgcm90MihmbG9hdCBhKSB7IGZsb2F0IGMgPSBjb3MoYSk7IGZsb2F0IHMgPSBzaW4oYSk7IHJldHVybiBtYXQyKGMsIC1zLCBzLCBjKTsgfVxuZmxvYXQgaGFzaDIxKHZlYzIgcCkgeyByZXR1cm4gZnJhY3Qoc2luKGRvdChwLCB2ZWMyKDEyNy4xLCAzMTEuNykpKSAqIDQzNzU4LjU0NTMxMjMpOyB9XG5mbG9hdCB2bm9pc2UodmVjMiBwKSB7XG4gIHZlYzIgaSA9IGZsb29yKHApO1xuICB2ZWMyIGYgPSBmcmFjdChwKTtcbiAgdmVjMiB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIGZsb2F0IGEgPSBoYXNoMjEoaSk7XG4gIGZsb2F0IGIgPSBoYXNoMjEoaSArIHZlYzIoMS4wLCAwLjApKTtcbiAgZmxvYXQgYyA9IGhhc2gyMShpICsgdmVjMigwLjAsIDEuMCkpO1xuICBmbG9hdCBkID0gaGFzaDIxKGkgKyB2ZWMyKDEuMCwgMS4wKSk7XG4gIHJldHVybiBtaXgobWl4KGEsIGIsIHUueCksIG1peChjLCBkLCB1LngpLCB1LnkpO1xufVxuZmxvYXQgZmJtKHZlYzIgcCkge1xuICBmbG9hdCB2ID0gMC4wO1xuICBmbG9hdCBhbXAgPSAwLjU7XG4gIGZvciAoaW50IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgdiArPSBhbXAgKiB2bm9pc2UocCk7XG4gICAgcCA9IHAgKiAyLjAzICsgdmVjMigxNy4zLCA5LjEpO1xuICAgIGFtcCAqPSAwLjU7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG52ZWMzIGh1ZVJvdGF0ZSh2ZWMzIGNvbG9yLCBmbG9hdCBhbmdsZSkge1xuICBjb25zdCB2ZWMzIGsgPSB2ZWMzKDAuNTc3MzUpO1xuICBmbG9hdCBjID0gY29zKGFuZ2xlKTtcbiAgZmxvYXQgcyA9IHNpbihhbmdsZSk7XG4gIHJldHVybiBjb2xvciAqIGMgKyBjcm9zcyhrLCBjb2xvcikgKiBzICsgayAqIGRvdChrLCBjb2xvcikgKiAoMS4wIC0gYyk7XG59XG5mbG9hdCBsdW1hKHZlYzMgYykgeyByZXR1cm4gZG90KGMsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpOyB9XG5gO1xuXG5jb25zdCBDT1BZX0ZSQUcgPSBgXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSBzYW1wbGVyMkQgdV90ZXg7XG52b2lkIG1haW4oKSB7IGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4dHVyZTJEKHVfdGV4LCB2X3V2KS5yZ2IsIDEuMCk7IH1cbmA7XG5cbmNvbnN0IEJHX0ZSQUcgPSBgXG4ke0dMU0xfQ09NTU9OfVxudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHZlYzIgdV9yZXM7XG51bmlmb3JtIGZsb2F0IHVfdGltZTtcbnVuaWZvcm0gZmxvYXQgdV9tb2RlO1xudW5pZm9ybSB2ZWMzIHVfY29sb3JfYTtcbnVuaWZvcm0gdmVjMyB1X2NvbG9yX2I7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKSwgMS4wKTtcbiAgdmVjMiBuID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICB2ZWMzIGNvbCA9IHVfY29sb3JfYTtcbiAgaWYgKHVfbW9kZSA+IDIuNSkge1xuICAgIC8vIFR1bm5lbCByaW5nc1xuICAgIGZsb2F0IHIgPSBsZW5ndGgobikgKyAwLjEyO1xuICAgIGZsb2F0IGEgPSBhdGFuKG4ueSwgbi54KTtcbiAgICBmbG9hdCB3YXZlID0gc2luKDIuNCAvIHIgLSB1X3RpbWUgKiAxLjYgKyBhICogMy4wICsgc2luKHVfdGltZSAqIDAuNCkgKiAyLjApO1xuICAgIGNvbCA9IG1peCh1X2NvbG9yX2EsIHVfY29sb3JfYiwgMC41ICsgMC41ICogd2F2ZSk7XG4gICAgY29sICo9IHNtb290aHN0ZXAoMC4wLCAwLjI1LCByKSAqICgwLjg1ICsgdV9hdWRpbyAqIDAuNSk7XG4gIH0gZWxzZSBpZiAodV9tb2RlID4gMS41KSB7XG4gICAgLy8gUGxhc21hXG4gICAgZmxvYXQgdCA9IHVfdGltZSAqIDAuMjU7XG4gICAgZmxvYXQgZiA9IGZibShuICogMi4yICsgdmVjMih0LCAtdCAqIDAuNykpO1xuICAgIGZsb2F0IGcgPSBmYm0obiAqIDMuNCAtIHZlYzIodCAqIDAuNiwgdCkgKyBmICogMi4wKTtcbiAgICBjb2wgPSBtaXgodV9jb2xvcl9hLCB1X2NvbG9yX2IsIGNsYW1wKGcgKiAxLjYgLSAwLjIgKyB1X2F1ZGlvICogMC4zLCAwLjAsIDEuMCkpO1xuICAgIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIGYgKiAxLjIgKyB0ICogMC4zKTtcbiAgfSBlbHNlIGlmICh1X21vZGUgPiAwLjUpIHtcbiAgICAvLyBEcmlmdGluZyBncmFkaWVudFxuICAgIHZlYzIgZGlyID0gdmVjMihjb3ModV90aW1lICogMC4xMSksIHNpbih1X3RpbWUgKiAwLjExKSk7XG4gICAgZmxvYXQgZyA9IGNsYW1wKGRvdChuLCBkaXIpICogMC45ICsgMC41LCAwLjAsIDEuMCk7XG4gICAgY29sID0gbWl4KHVfY29sb3JfYSwgdV9jb2xvcl9iLCBnKTtcbiAgfVxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbCwgMS4wKTtcbn1cbmA7XG5cbmNvbnN0IExBWUVSX0ZSQUcgPSBgXG4ke0dMU0xfQ09NTU9OfVxudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHNhbXBsZXIyRCB1X2Rlc3Q7XG51bmlmb3JtIHNhbXBsZXIyRCB1X2ltZztcbnVuaWZvcm0gdmVjMiB1X3JlcztcbnVuaWZvcm0gdmVjMiB1X2ltZ190ZXhlbDtcbnVuaWZvcm0gdmVjMiB1X3BvcztcbnVuaWZvcm0gdmVjMiB1X2V4dDtcbnVuaWZvcm0gZmxvYXQgdV9yb3Q7XG51bmlmb3JtIGZsb2F0IHVfdGltZTtcbnVuaWZvcm0gZmxvYXQgdV9hdWRpbztcbnVuaWZvcm0gZmxvYXQgdV9vcGFjaXR5O1xudW5pZm9ybSBmbG9hdCB1X2JsZW5kO1xudW5pZm9ybSBmbG9hdCB1X3RpbGU7XG51bmlmb3JtIGZsb2F0IHVfd2FycDtcbnVuaWZvcm0gZmxvYXQgdV9zd2lybDtcbnVuaWZvcm0gZmxvYXQgdV9yaXBwbGU7XG51bmlmb3JtIGZsb2F0IHVfa2FsZWlkbztcbnVuaWZvcm0gZmxvYXQgdV9waXhlbGF0ZTtcbnVuaWZvcm0gZmxvYXQgdV9idWxnZTtcbnVuaWZvcm0gZmxvYXQgdV9taXJyb3I7XG51bmlmb3JtIGZsb2F0IHVfaHVlO1xudW5pZm9ybSBmbG9hdCB1X3NhdDtcbnVuaWZvcm0gZmxvYXQgdV9jb247XG51bmlmb3JtIGZsb2F0IHVfYnJpO1xudW5pZm9ybSBmbG9hdCB1X2ludmVydDtcbnVuaWZvcm0gZmxvYXQgdV9wb3N0ZXI7XG51bmlmb3JtIGZsb2F0IHVfY2hyb21hO1xudW5pZm9ybSBmbG9hdCB1X2VkZ2VzO1xudW5pZm9ybSB2ZWMzIHVfdGludDtcbnVuaWZvcm0gZmxvYXQgdV90aW50X2FtdDtcbnVuaWZvcm0gZmxvYXQgdV9zaGltbWVyO1xudW5pZm9ybSBmbG9hdCB1X3NlZWQ7XG5cbnZlYzIgdGlsZVV2KHZlYzIgdXYpIHtcbiAgaWYgKHVfdGlsZSA+IDEuNSkgcmV0dXJuIGFicyhmcmFjdCh1diAqIDAuNSkgKiAyLjAgLSAxLjApO1xuICBpZiAodV90aWxlID4gMC41KSByZXR1cm4gZnJhY3QodXYpO1xuICByZXR1cm4gdXY7XG59XG5cbmZsb2F0IHRpbGVNYXNrKHZlYzIgdXYpIHtcbiAgaWYgKHVfdGlsZSA+IDAuNSkgcmV0dXJuIDEuMDtcbiAgdmVjMiBpbnNpZGUgPSBzdGVwKHZlYzIoMC4wKSwgdXYpICogc3RlcCh1diwgdmVjMigxLjApKTtcbiAgcmV0dXJuIGluc2lkZS54ICogaW5zaWRlLnk7XG59XG5cbnZlYzQgdGFwKHZlYzIgdXYpIHtcbiAgdmVjNCBzID0gdGV4dHVyZTJEKHVfaW1nLCBjbGFtcCh0aWxlVXYodXYpLCAwLjAsIDEuMCkpO1xuICBzLmEgKj0gdGlsZU1hc2sodXYpO1xuICByZXR1cm4gcztcbn1cblxudmVjMyBibGVuZFBpeCh2ZWMzIGQsIHZlYzMgcykge1xuICBmbG9hdCBtID0gdV9ibGVuZDtcbiAgaWYgKG0gPCAwLjUpIHJldHVybiBzO1xuICBpZiAobSA8IDEuNSkgcmV0dXJuIGQgKyBzO1xuICBpZiAobSA8IDIuNSkgcmV0dXJuIDEuMCAtICgxLjAgLSBkKSAqICgxLjAgLSBzKTtcbiAgaWYgKG0gPCAzLjUpIHJldHVybiBkICogcztcbiAgaWYgKG0gPCA0LjUpIHtcbiAgICB2ZWMzIGxvID0gMi4wICogZCAqIHM7XG4gICAgdmVjMyBoaSA9IDEuMCAtIDIuMCAqICgxLjAgLSBkKSAqICgxLjAgLSBzKTtcbiAgICByZXR1cm4gbWl4KGxvLCBoaSwgc3RlcCgwLjUsIGQpKTtcbiAgfVxuICBpZiAobSA8IDUuNSkgcmV0dXJuIGFicyhkIC0gcyk7XG4gIGlmIChtIDwgNi41KSByZXR1cm4gbWF4KGQsIHMpO1xuICByZXR1cm4gbWluKGQsIHMpO1xufVxuXG52b2lkIG1haW4oKSB7XG4gIHZlYzIgYXNwZWN0ID0gdmVjMih1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCksIDEuMCk7XG4gIHZlYzIgcCA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgdmVjMiBxID0gcm90MigtdV9yb3QpICogKHAgLSB1X3Bvcyk7XG4gIHZlYzIgYyA9IHEgLyBtYXgodV9leHQsIHZlYzIoMWUtNSkpICogMC41O1xuXG4gIC8vIERpc3RvcnQgaW4gYXNwZWN0LW5vcm1hbGl6ZWQgbGF5ZXIgc3BhY2Ugc28gY2lyY3VsYXIgZWZmZWN0cyBzdGF5IGNpcmN1bGFyLlxuICB2ZWMyIGxhID0gdmVjMihtYXgodV9leHQueCwgMWUtNSkgLyBtYXgodV9leHQueSwgMWUtNSksIDEuMCk7XG4gIHZlYzIgbiA9IGMgKiBsYTtcbiAgZmxvYXQgdCA9IHVfdGltZSArIHVfc2VlZCAqIDM3LjA7XG4gIGZsb2F0IHNoaW0gPSAxLjAgKyB1X3NoaW1tZXIgKiAwLjYgKiBzaW4odCAqIDAuOSk7XG5cbiAgbiAqPSAxLjAgKyB1X2J1bGdlICogZG90KG4sIG4pICogMy4yO1xuXG4gIGlmICh1X3N3aXJsID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pO1xuICAgIG4gPSByb3QyKHVfc3dpcmwgKiA2LjAgKiBzaGltICogZXhwKC1yICogMi40KSkgKiBuO1xuICB9XG4gIGlmICh1X2thbGVpZG8gPiAwLjAwMykge1xuICAgIGZsb2F0IHNlZyA9IGZsb29yKDIuMCArIHVfa2FsZWlkbyAqIDE0LjApO1xuICAgIGZsb2F0IHNsaWNlID0gNi4yODMxODUzIC8gc2VnO1xuICAgIGZsb2F0IGEgPSBhdGFuKG4ueSwgbi54KSArIHQgKiB1X3NoaW1tZXIgKiAwLjE1O1xuICAgIGEgPSBhYnMobW9kKGEsIHNsaWNlKSAtIHNsaWNlICogMC41KTtcbiAgICBuID0gbGVuZ3RoKG4pICogdmVjMihjb3MoYSksIHNpbihhKSk7XG4gIH1cbiAgaWYgKHVfcmlwcGxlID4gMC4wMDMpIHtcbiAgICBmbG9hdCByID0gbGVuZ3RoKG4pICsgMWUtNDtcbiAgICBuICs9IChuIC8gcikgKiBzaW4ociAqIDM0LjAgLSB0ICogMy4yKSAqIHVfcmlwcGxlICogMC4wNyAqIHNoaW07XG4gIH1cbiAgaWYgKHVfd2FycCA+IDAuMDAzKSB7XG4gICAgdmVjMiB3ID0gdmVjMihcbiAgICAgIGZibShuICogMy4wICsgdmVjMih0ICogMC4yMiAqICgwLjMgKyB1X3NoaW1tZXIpLCB1X3NlZWQpKSxcbiAgICAgIGZibShuICogMy4wICsgdmVjMih1X3NlZWQgKyA3LjMsIC10ICogMC4xOSAqICgwLjMgKyB1X3NoaW1tZXIpKSlcbiAgICApO1xuICAgIG4gKz0gKHcgLSAwLjUpICogdV93YXJwICogMC41NTtcbiAgfVxuICBuLnggPSBtaXgobi54LCBhYnMobi54KSwgY2xhbXAodV9taXJyb3IgKiAyLjAsIDAuMCwgMS4wKSk7XG4gIG4ueSA9IG1peChuLnksIGFicyhuLnkpLCBjbGFtcCh1X21pcnJvciAqIDIuMCAtIDEuMCwgMC4wLCAxLjApKTtcblxuICBjID0gbiAvIGxhO1xuICB2ZWMyIHV2ID0gYyArIDAuNTtcblxuICBpZiAodV9waXhlbGF0ZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgY2VsbHMgPSBmbG9vcihtaXgoMjIwLjAsIDYuMCwgcG93KHVfcGl4ZWxhdGUsIDAuNTUpKSk7XG4gICAgdXYgPSAoZmxvb3IodXYgKiBjZWxscykgKyAwLjUpIC8gY2VsbHM7XG4gIH1cblxuICB2ZWMyIGNkID0gYyAqIHVfY2hyb21hICogMC4xO1xuICB2ZWM0IHNhbXBsZU1pZCA9IHRhcCh1dik7XG4gIHZlYzMgY29sID0gdmVjMyh0YXAodXYgKyBjZCkuciwgc2FtcGxlTWlkLmcsIHRhcCh1diAtIGNkKS5iKTtcbiAgZmxvYXQgYWxwaGEgPSBzYW1wbGVNaWQuYTtcblxuICBpZiAodV9lZGdlcyA+IDAuMDAzKSB7XG4gICAgdmVjMiBlID0gbWF4KHVfaW1nX3RleGVsICogMS41LCB2ZWMyKDAuMDAxNSkpO1xuICAgIGZsb2F0IGd4ID0gbHVtYSh0YXAodXYgKyB2ZWMyKGUueCwgMC4wKSkucmdiKSAtIGx1bWEodGFwKHV2IC0gdmVjMihlLngsIDAuMCkpLnJnYik7XG4gICAgZmxvYXQgZ3kgPSBsdW1hKHRhcCh1diArIHZlYzIoMC4wLCBlLnkpKS5yZ2IpIC0gbHVtYSh0YXAodXYgLSB2ZWMyKDAuMCwgZS55KSkucmdiKTtcbiAgICBmbG9hdCBnID0gY2xhbXAobGVuZ3RoKHZlYzIoZ3gsIGd5KSkgKiA0LjAsIDAuMCwgMS4wKTtcbiAgICB2ZWMzIG5lb24gPSBnICogKGNvbCAqIDEuNiArIGh1ZVJvdGF0ZSh2ZWMzKDAuOSwgMC4yLCAxLjApLCB0ICogMC41KSAqIDAuNyk7XG4gICAgY29sID0gbWl4KGNvbCwgbmVvbiwgdV9lZGdlcyk7XG4gIH1cblxuICAvLyBHcmFkZVxuICBjb2wgPSAoY29sIC0gMC41KSAqIHVfY29uICsgMC41O1xuICBjb2wgKj0gdV9icmk7XG4gIGNvbCA9IG1peCh2ZWMzKGx1bWEoY29sKSksIGNvbCwgdV9zYXQpO1xuICBjb2wgPSBodWVSb3RhdGUoY29sLCB1X2h1ZSAqIDYuMjgzMTg1MyArIHVfc2hpbW1lciAqIDAuNCAqIHNpbih0ICogMC42KSk7XG4gIGlmICh1X3Bvc3RlciA+IDAuMDAzKSB7XG4gICAgZmxvYXQgbGV2ZWxzID0gbWl4KDE0LjAsIDIuMCwgdV9wb3N0ZXIpO1xuICAgIGNvbCA9IG1peChjb2wsIGZsb29yKGNvbCAqIGxldmVscyArIDAuNSkgLyBsZXZlbHMsIGNsYW1wKHVfcG9zdGVyICogNC4wLCAwLjAsIDEuMCkpO1xuICB9XG4gIGNvbCA9IG1peChjb2wsIDEuMCAtIGNvbCwgdV9pbnZlcnQpO1xuICBjb2wgPSBtaXgoY29sLCB2ZWMzKGx1bWEoY29sKSkgKiB1X3RpbnQgKiAyLjEsIHVfdGludF9hbXQpO1xuICBjb2wgPSBjbGFtcChjb2wsIDAuMCwgMS41KTtcblxuICB2ZWMzIGRlc3QgPSB0ZXh0dXJlMkQodV9kZXN0LCB2X3V2KS5yZ2I7XG4gIHZlYzMgYmxlbmRlZCA9IGNsYW1wKGJsZW5kUGl4KGRlc3QsIGNvbCksIDAuMCwgMS4wKTtcbiAgZmxvYXQgYSA9IGNsYW1wKGFscGhhICogdV9vcGFjaXR5ICogKDEuMCArIHVfYXVkaW8gKiAwLjApLCAwLjAsIDEuMCk7XG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQobWl4KGRlc3QsIGJsZW5kZWQsIGEpLCAxLjApO1xufVxuYDtcblxuY29uc3QgUE9TVF9GUkFHID0gYFxuJHtHTFNMX0NPTU1PTn1cbnZhcnlpbmcgdmVjMiB2X3V2O1xudW5pZm9ybSBzYW1wbGVyMkQgdV9zY2VuZTtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfcHJldjtcbnVuaWZvcm0gdmVjMiB1X3JlcztcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvO1xudW5pZm9ybSB2ZWMyIHVfcG9pbnRlcjtcbnVuaWZvcm0gdmVjMiB1X3BvaW50ZXJfdmVsO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfZG93bjtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX2FjdGl2ZTtcbnVuaWZvcm0gZmxvYXQgdV9mZWVkYmFjaztcbnVuaWZvcm0gZmxvYXQgdV90cmFpbHM7XG51bmlmb3JtIGZsb2F0IHVfZmJfem9vbTtcbnVuaWZvcm0gZmxvYXQgdV9mYl9yb3RhdGU7XG51bmlmb3JtIGZsb2F0IHVfZmJfaHVlO1xudW5pZm9ybSBmbG9hdCB1X3dhcnA7XG51bmlmb3JtIGZsb2F0IHVfc3dpcmw7XG51bmlmb3JtIGZsb2F0IHVfcmlwcGxlO1xudW5pZm9ybSBmbG9hdCB1X3pvb207XG51bmlmb3JtIGZsb2F0IHVfa2FsZWlkbztcbnVuaWZvcm0gZmxvYXQgdV9taXJyb3I7XG51bmlmb3JtIGZsb2F0IHVfY2hyb21hO1xudW5pZm9ybSBmbG9hdCB1X2h1ZV9vcmJpdDtcbnVuaWZvcm0gZmxvYXQgdV9zYXQ7XG51bmlmb3JtIGZsb2F0IHVfY29uO1xudW5pZm9ybSBmbG9hdCB1X3NvbGFyaXplO1xudW5pZm9ybSBmbG9hdCB1X2dyYWluO1xudW5pZm9ybSBmbG9hdCB1X3NjYW5saW5lcztcbnVuaWZvcm0gZmxvYXQgdV92aWduZXR0ZTtcbnVuaWZvcm0gZmxvYXQgdV9zdHJvYmU7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9mb3JjZTtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX3NpemU7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9tb2RlO1xuXG52b2lkIG1haW4oKSB7XG4gIHZlYzIgYXNwZWN0ID0gdmVjMih1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCksIDEuMCk7XG4gIHZlYzIgbiA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgZmxvYXQgdCA9IHVfdGltZTtcbiAgZmxvYXQgY2hyb21hQW10ID0gdV9jaHJvbWE7XG5cbiAgLy8gU3BhY2VcbiAgbiAqPSAxLjAgLSB1X3pvb20gKiAoMC4zICsgMC4xICogc2luKHQgKiAwLjcpKSAtIHVfYXVkaW8gKiB1X3pvb20gKiAwLjE1O1xuICBpZiAodV9zd2lybCA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKTtcbiAgICBuID0gcm90Mih1X3N3aXJsICogKDMuNCArIHVfYXVkaW8gKiAxLjUpICogZXhwKC1yICogMS43KSAqIHNpbih0ICogMC4yMyArIDEuOSkpICogbjtcbiAgfVxuICBpZiAodV9rYWxlaWRvID4gMC4wMDMpIHtcbiAgICBmbG9hdCBzZWcgPSBmbG9vcigyLjAgKyB1X2thbGVpZG8gKiAxNS4wKTtcbiAgICBmbG9hdCBzbGljZSA9IDYuMjgzMTg1MyAvIHNlZztcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCkgKyB0ICogMC4wNTtcbiAgICBhID0gYWJzKG1vZChhLCBzbGljZSkgLSBzbGljZSAqIDAuNSk7XG4gICAgbiA9IGxlbmd0aChuKSAqIHZlYzIoY29zKGEpLCBzaW4oYSkpO1xuICB9XG4gIGlmICh1X3JpcHBsZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDFlLTQ7XG4gICAgbiArPSAobiAvIHIpICogc2luKHIgKiAyNi4wIC0gdCAqIDIuNikgKiB1X3JpcHBsZSAqIDAuMDU7XG4gIH1cbiAgaWYgKHVfd2FycCA+IDAuMDAzKSB7XG4gICAgdmVjMiB3ID0gdmVjMihmYm0obiAqIDIuNCArIHQgKiAwLjE2KSwgZmJtKG4gKiAyLjQgLSB0ICogMC4xMyArIDUuMikpO1xuICAgIG4gKz0gKHcgLSAwLjUpICogdV93YXJwICogKDAuMzQgKyB1X2F1ZGlvICogMC4yKTtcbiAgfVxuICBuLnggPSBtaXgobi54LCBhYnMobi54KSwgY2xhbXAodV9taXJyb3IgKiAyLjAsIDAuMCwgMS4wKSk7XG4gIG4ueSA9IG1peChuLnksIGFicyhuLnkpLCBjbGFtcCh1X21pcnJvciAqIDIuMCAtIDEuMCwgMC4wLCAxLjApKTtcblxuICB2ZWMyIHV2ID0gbiAvIGFzcGVjdCArIDAuNTtcblxuICB2ZWMyIGNkID0gKHV2IC0gMC41KSAqIGNocm9tYUFtdCAqIDAuMDU7XG4gIHZlYzMgY29sID0gdmVjMyhcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYgKyBjZCkucixcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYpLmcsXG4gICAgdGV4dHVyZTJEKHVfc2NlbmUsIHV2IC0gY2QpLmJcbiAgKTtcblxuICAvLyBGZWVkYmFjayBlY2hvXG4gIGlmICh1X2ZlZWRiYWNrID4gMC4wMDMpIHtcbiAgICB2ZWMyIGZwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICAgIGZwID0gcm90Mih1X2ZiX3JvdGF0ZSAqIDAuMDU1KSAqIGZwO1xuICAgIGZwICo9IDEuMCAtIHVfZmJfem9vbSAqIDAuMDQ1O1xuICAgIHZlYzMgcHJldiA9IHRleHR1cmUyRCh1X3ByZXYsIGZwIC8gYXNwZWN0ICsgMC41KS5yZ2I7XG4gICAgcHJldiA9IGh1ZVJvdGF0ZShwcmV2LCB1X2ZiX2h1ZSAqIDAuNSk7XG4gICAgdmVjMyBlY2hvID0gcHJldiAqIG1peCgwLjU1LCAwLjk4NSwgdV90cmFpbHMpO1xuICAgIGNvbCA9IG1peChjb2wsIG1heChjb2wsIGVjaG8pLCB1X2ZlZWRiYWNrKTtcbiAgfVxuXG4gIC8vIEdyYWRlXG4gIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIHVfaHVlX29yYml0ICogdCAqIDAuOSk7XG4gIGNvbCA9IChjb2wgLSAwLjUpICogdV9jb24gKyAwLjU7XG4gIGNvbCA9IG1peCh2ZWMzKGx1bWEoY29sKSksIGNvbCwgdV9zYXQpO1xuICBpZiAodV9zb2xhcml6ZSA+IDAuMDAzKSB7XG4gICAgdmVjMyBzb2wgPSBtaXgoY29sLCAxLjAgLSBjb2wsIHNtb290aHN0ZXAoMC41IC0gMC4yNSwgMC41ICsgMC4yNSwgY29sKSk7XG4gICAgY29sID0gbWl4KGNvbCwgc29sLCB1X3NvbGFyaXplKTtcbiAgfVxuICBjb2wgKj0gMS4wICsgdV9zdHJvYmUgKiAoMC40NSAqIHNpbih0ICogMTEuMCkgKyB1X2F1ZGlvICogMC44KTtcblxuICAvLyBUZXh0dXJlXG4gIGlmICh1X3NjYW5saW5lcyA+IDAuMDAzKSB7XG4gICAgY29sICo9IDEuMCAtIHVfc2NhbmxpbmVzICogMC4zMiAqICgwLjUgKyAwLjUgKiBzaW4odl91di55ICogdV9yZXMueSAqIDIuNCkpO1xuICB9XG4gIGlmICh1X2dyYWluID4gMC4wMDMpIHtcbiAgICBjb2wgKz0gKGhhc2gyMSh2X3V2ICogdV9yZXMgKyBmcmFjdCh0KSAqIDYxLjcpIC0gMC41KSAqIHVfZ3JhaW4gKiAwLjM7XG4gIH1cbiAgdmVjMiB2cCA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgY29sICo9IDEuMCAtIHVfdmlnbmV0dGUgKiBzbW9vdGhzdGVwKDAuMzUsIDEuMTUsIGxlbmd0aCh2cCkgKiAxLjM1KTtcblxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsYW1wKGNvbCwgMC4wLCAxLjApLCAxLjApO1xufVxuYDtcblxudHlwZSBUYXJnZXQgPSB7XG4gIGZyYW1lYnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xuICB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxudHlwZSBQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+O1xufTtcblxuZnVuY3Rpb24gY29tcGlsZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gIGlmICghc2hhZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHNoYWRlclwiKTtcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGNvbnN0IGluZm8gPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgPz8gXCJ1bmtub3duXCI7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTaGFkZXIgY29tcGlsZSBmYWlsZWQ6ICR7aW5mb31gKTtcbiAgfVxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvZ3JhbShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBmcmFnOiBzdHJpbmcpOiBQcm9ncmFtIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgaWYgKCFwcm9ncmFtKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHByb2dyYW1cIik7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5WRVJURVhfU0hBREVSLCBWRVJUKSk7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWcpKTtcbiAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYV9wb3NcIik7XG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQcm9ncmFtIGxpbmsgZmFpbGVkOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pID8/IFwidW5rbm93blwifWApO1xuICB9XG4gIGNvbnN0IHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+ID0ge307XG4gIGNvbnN0IGNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpIGFzIG51bWJlcjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29uc3QgaW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSk7XG4gICAgaWYgKGluZm8pIHVuaWZvcm1zW2luZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgaW5mby5uYW1lKTtcbiAgfVxuICByZXR1cm4geyBwcm9ncmFtLCB1bmlmb3JtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBtYXRjaCA9IC9eIyhbMC05YS1mXXs2fSkkL2kuZXhlYyhoZXgpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gWzAsIDAsIDBdO1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxNik7XG4gIHJldHVybiBbKCh2YWx1ZSA+PiAxNikgJiAyNTUpIC8gMjU1LCAoKHZhbHVlID4+IDgpICYgMjU1KSAvIDI1NSwgKHZhbHVlICYgMjU1KSAvIDI1NV07XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZTogVGV4SW1hZ2VTb3VyY2UpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICBpZiAodHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLnZpZGVvV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UudmlkZW9IZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2UubmF0dXJhbFdpZHRoIHx8IHNvdXJjZS53aWR0aCB8fCAxKSxcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoMSwgc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXApIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGNvbnN0IGFueVNvdXJjZSA9IHNvdXJjZSBhcyB7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5tYXgoMSwgYW55U291cmNlLndpZHRoID8/IDEpLFxuICAgIGhlaWdodDogTWF0aC5tYXgoMSwgYW55U291cmNlLmhlaWdodCA/PyAxKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZ2luZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogRW5naW5lSGFuZGxlIHtcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIsIHtcbiAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgIGFscGhhOiBmYWxzZSxcbiAgICBkZXB0aDogZmFsc2UsXG4gICAgc3RlbmNpbDogZmFsc2UsXG4gICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcbiAgICBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuICB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsO1xuICBpZiAoIWdsKSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlclwiKTtcblxuICBjb25zdCBxdWFkID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAtMSwgMywgLTEsIC0xLCAzXSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICBjb25zdCBwcm9ncmFtcyA9IHtcbiAgICBiZzogbWFrZVByb2dyYW0oZ2wsIEJHX0ZSQUcpLFxuICAgIGxheWVyOiBtYWtlUHJvZ3JhbShnbCwgTEFZRVJfRlJBRyksXG4gICAgcG9zdDogbWFrZVByb2dyYW0oZ2wsIFBPU1RfRlJBRyksXG4gICAgY29weTogbWFrZVByb2dyYW0oZ2wsIENPUFlfRlJBRyksXG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZVRleHR1cmUoKTogV2ViR0xUZXh0dXJlIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gZ2whLmNyZWF0ZVRleHR1cmUoKTtcbiAgICBpZiAoIXRleHR1cmUpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGV4dHVyZVwiKTtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9NSU5fRklMVEVSLCBnbCEuTElORUFSKTtcbiAgICBnbCEudGV4UGFyYW1ldGVyaShnbCEuVEVYVFVSRV8yRCwgZ2whLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2whLkxJTkVBUik7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX1dSQVBfUywgZ2whLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9XUkFQX1QsIGdsIS5DTEFNUF9UT19FREdFKTtcbiAgICByZXR1cm4gdGV4dHVyZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VUYXJnZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBUYXJnZXQge1xuICAgIGNvbnN0IHRleHR1cmUgPSBtYWtlVGV4dHVyZSgpO1xuICAgIGdsIS50ZXhJbWFnZTJEKGdsIS5URVhUVVJFXzJELCAwLCBnbCEuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2whLlJHQkEsIGdsIS5VTlNJR05FRF9CWVRFLCBudWxsKTtcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IGdsIS5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgIGlmICghZnJhbWVidWZmZXIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgZnJhbWVidWZmZXJcIik7XG4gICAgZ2whLmJpbmRGcmFtZWJ1ZmZlcihnbCEuRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyKTtcbiAgICBnbCEuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2whLkZSQU1FQlVGRkVSLCBnbCEuQ09MT1JfQVRUQUNITUVOVDAsIGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgcmV0dXJuIHsgZnJhbWVidWZmZXIsIHRleHR1cmUsIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IFRhcmdldCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBpZiAodGFyZ2V0LndpZHRoID09PSB3aWR0aCAmJiB0YXJnZXQuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRhcmdldC50ZXh0dXJlKTtcbiAgICBnbCEudGV4SW1hZ2UyRChnbCEuVEVYVFVSRV8yRCwgMCwgZ2whLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsIS5SR0JBLCBnbCEuVU5TSUdORURfQllURSwgbnVsbCk7XG4gICAgdGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgdGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGxldCB3aWR0aCA9IE1hdGgubWF4KDIsIGNhbnZhcy53aWR0aCB8fCAyKTtcbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KDIsIGNhbnZhcy5oZWlnaHQgfHwgMik7XG4gIGxldCBwaXhlbFJhdGlvQ2FwID0gMS41O1xuICBsZXQgY3NzV2lkdGggPSB3aWR0aDtcbiAgbGV0IGNzc0hlaWdodCA9IGhlaWdodDtcblxuICBjb25zdCB0YXJnZXRzID0ge1xuICAgIHNjZW5lQTogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBzY2VuZUI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEE6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gIH07XG4gIGxldCBwb3N0RmxpcCA9IGZhbHNlO1xuICBsZXQgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuXG4gIC8vIFBsYWNlaG9sZGVyIHRleHR1cmUgZm9yIGxheWVycyB3aG9zZSBpbWFnZSBpcyBtaXNzaW5nIChlLmcuIGEgc2NlbmUgbG9hZGVkXG4gIC8vIG9uIGFub3RoZXIgZGV2aWNlKTogYW4gYW5pbWF0ZWQtbG9va2luZyBtYWdlbnRhL2RlZXAtYmx1ZSBncmlkLlxuICBjb25zdCBtaXNzaW5nVGV4dHVyZSA9IG1ha2VUZXh0dXJlKCk7XG4gIHtcbiAgICBjb25zdCBzaXplID0gNjQ7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplICogNCk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGkgPSAoeSAqIHNpemUgKyB4KSAqIDQ7XG4gICAgICAgIGNvbnN0IGdyaWQgPSAoeCAlIDE2IDwgMSB8fCB5ICUgMTYgPCAxKSA/IDEgOiAwO1xuICAgICAgICBkYXRhW2ldID0gZ3JpZCA/IDI1NSA6IDMwICsgKCh4ICogMykgJSA2MCk7XG4gICAgICAgIGRhdGFbaSArIDFdID0gZ3JpZCA/IDQwIDogODtcbiAgICAgICAgZGF0YVtpICsgMl0gPSBncmlkID8gMTcwIDogNDYgKyAoKHkgKiAzKSAlIDcwKTtcbiAgICAgICAgZGF0YVtpICsgM10gPSAyNTU7XG4gICAgICB9XG4gICAgfVxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG1pc3NpbmdUZXh0dXJlKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHNpemUsIHNpemUsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xuICB9XG5cbiAgY29uc3QgaW1hZ2VzID0gbmV3IE1hcDxzdHJpbmcsIHsgdGV4dHVyZTogV2ViR0xUZXh0dXJlOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9PigpO1xuXG4gIGZ1bmN0aW9uIGRyYXdRdWFkKCkge1xuICAgIGdsIS5kcmF3QXJyYXlzKGdsIS5UUklBTkdMRVMsIDAsIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFRhcmdldE91dHB1dCh0YXJnZXQ6IFRhcmdldCB8IG51bGwpIHtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgdGFyZ2V0ID8gdGFyZ2V0LmZyYW1lYnVmZmVyIDogbnVsbCk7XG4gICAgZ2whLnZpZXdwb3J0KDAsIDAsIHRhcmdldCA/IHRhcmdldC53aWR0aCA6IHdpZHRoLCB0YXJnZXQgPyB0YXJnZXQuaGVpZ2h0IDogaGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHUxKHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKGxvYykgZ2whLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiB1MihwOiBQcm9ncmFtLCBuYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jID0gcC51bmlmb3Jtc1tuYW1lXTtcbiAgICBpZiAobG9jKSBnbCEudW5pZm9ybTJmKGxvYywgeCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gdTMocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB2OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChsb2MpIGdsIS51bmlmb3JtM2YobG9jLCB2WzBdLCB2WzFdLCB2WzJdKTtcbiAgfVxuICBmdW5jdGlvbiB1VGV4KHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdGV4dHVyZTogV2ViR0xUZXh0dXJlLCB1bml0OiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmICghbG9jKSByZXR1cm47XG4gICAgZ2whLmFjdGl2ZVRleHR1cmUoZ2whLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2whLmJpbmRUZXh0dXJlKGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbCEudW5pZm9ybTFpKGxvYywgdW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoc3RhdGU6IEZyYW1lU3RhdGUpIHtcbiAgICBpZiAoZ2whLmlzQ29udGV4dExvc3QoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGcgPSBzdGF0ZS5nbG9iYWw7XG5cbiAgICAvLyBCYWNrZ3JvdW5kXG4gICAgY29uc3QgYmcgPSBwcm9ncmFtcy5iZztcbiAgICBnbCEudXNlUHJvZ3JhbShiZy5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldHMuc2NlbmVBKTtcbiAgICB1MihiZywgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShiZywgXCJ1X3RpbWVcIiwgc3RhdGUudGltZSk7XG4gICAgdTEoYmcsIFwidV9tb2RlXCIsIGcuYmdNb2RlKTtcbiAgICB1MyhiZywgXCJ1X2NvbG9yX2FcIiwgZy5iZ0EpO1xuICAgIHUzKGJnLCBcInVfY29sb3JfYlwiLCBnLmJnQik7XG4gICAgdTEoYmcsIFwidV9hdWRpb1wiLCBzdGF0ZS5hdWRpbyAqIGcuYXVkaW9SZWFjdCk7XG4gICAgZHJhd1F1YWQoKTtcblxuICAgIC8vIExheWVyczogcGluZy1wb25nIGNvbXBvc2l0ZVxuICAgIGxldCBzb3VyY2UgPSB0YXJnZXRzLnNjZW5lQTtcbiAgICBsZXQgZGVzdCA9IHRhcmdldHMuc2NlbmVCO1xuICAgIGNvbnN0IGxheWVyUHJvZ3JhbSA9IHByb2dyYW1zLmxheWVyO1xuICAgIGdsIS51c2VQcm9ncmFtKGxheWVyUHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHN0YXRlLmxheWVycykge1xuICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXMuZ2V0KGxheWVyLmltYWdlSWQpO1xuICAgICAgYmluZFRhcmdldE91dHB1dChkZXN0KTtcbiAgICAgIHVUZXgobGF5ZXJQcm9ncmFtLCBcInVfZGVzdFwiLCBzb3VyY2UudGV4dHVyZSwgMCk7XG4gICAgICB1VGV4KGxheWVyUHJvZ3JhbSwgXCJ1X2ltZ1wiLCBpbWFnZSA/IGltYWdlLnRleHR1cmUgOiBtaXNzaW5nVGV4dHVyZSwgMSk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9yZXNcIiwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB1MihcbiAgICAgICAgbGF5ZXJQcm9ncmFtLFxuICAgICAgICBcInVfaW1nX3RleGVsXCIsXG4gICAgICAgIGltYWdlID8gMSAvIGltYWdlLndpZHRoIDogMSAvIDY0LFxuICAgICAgICBpbWFnZSA/IDEgLyBpbWFnZS5oZWlnaHQgOiAxIC8gNjRcbiAgICAgICk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9wb3NcIiwgbGF5ZXIucG9zWzBdLCBsYXllci5wb3NbMV0pO1xuICAgICAgdTIobGF5ZXJQcm9ncmFtLCBcInVfZXh0XCIsIGxheWVyLmV4dFswXSwgbGF5ZXIuZXh0WzFdKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JvdFwiLCBsYXllci5yb3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2F1ZGlvXCIsIHN0YXRlLmF1ZGlvICogZy5hdWRpb1JlYWN0KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X29wYWNpdHlcIiwgbGF5ZXIub3BhY2l0eSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9ibGVuZFwiLCBsYXllci5ibGVuZCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV90aWxlXCIsIGxheWVyLnRpbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfd2FycFwiLCBsYXllci53YXJwKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3N3aXJsXCIsIGxheWVyLnN3aXJsKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JpcHBsZVwiLCBsYXllci5yaXBwbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfa2FsZWlkb1wiLCBsYXllci5rYWxlaWRvKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3BpeGVsYXRlXCIsIGxheWVyLnBpeGVsYXRlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2J1bGdlXCIsIGxheWVyLmJ1bGdlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X21pcnJvclwiLCBsYXllci5taXJyb3IpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaHVlXCIsIGxheWVyLmh1ZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9zYXRcIiwgbGF5ZXIuc2F0dXJhdGlvbik7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9jb25cIiwgbGF5ZXIuY29udHJhc3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYnJpXCIsIGxheWVyLmJyaWdodG5lc3MpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaW52ZXJ0XCIsIGxheWVyLmludmVydCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9wb3N0ZXJcIiwgbGF5ZXIucG9zdGVyaXplKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2Nocm9tYVwiLCBsYXllci5jaHJvbWEpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfZWRnZXNcIiwgbGF5ZXIuZWRnZXMpO1xuICAgICAgdTMobGF5ZXJQcm9ncmFtLCBcInVfdGludFwiLCBsYXllci50aW50KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3RpbnRfYW10XCIsIGxheWVyLnRpbnRBbW91bnQpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc2hpbW1lclwiLCBsYXllci5zaGltbWVyKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3NlZWRcIiwgbGF5ZXIuc2VlZCk7XG4gICAgICBkcmF3UXVhZCgpO1xuICAgICAgY29uc3Qgc3dhcCA9IHNvdXJjZTtcbiAgICAgIHNvdXJjZSA9IGRlc3Q7XG4gICAgICBkZXN0ID0gc3dhcDtcbiAgICB9XG5cbiAgICAvLyBQb3N0ICsgZmVlZGJhY2tcbiAgICBpZiAobmVlZEZlZWRiYWNrQ2xlYXIpIHtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIFt0YXJnZXRzLnBvc3RBLCB0YXJnZXRzLnBvc3RCXSkge1xuICAgICAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldCk7XG4gICAgICAgIGdsIS5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgICBnbCEuY2xlYXIoZ2whLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgfVxuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcHJldiA9IHBvc3RGbGlwID8gdGFyZ2V0cy5wb3N0QSA6IHRhcmdldHMucG9zdEI7XG4gICAgY29uc3Qgb3V0ID0gcG9zdEZsaXAgPyB0YXJnZXRzLnBvc3RCIDogdGFyZ2V0cy5wb3N0QTtcbiAgICBwb3N0RmxpcCA9ICFwb3N0RmxpcDtcblxuICAgIGNvbnN0IHBvc3QgPSBwcm9ncmFtcy5wb3N0O1xuICAgIGdsIS51c2VQcm9ncmFtKHBvc3QucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChvdXQpO1xuICAgIHVUZXgocG9zdCwgXCJ1X3NjZW5lXCIsIHNvdXJjZS50ZXh0dXJlLCAwKTtcbiAgICB1VGV4KHBvc3QsIFwidV9wcmV2XCIsIHByZXYudGV4dHVyZSwgMSk7XG4gICAgdTIocG9zdCwgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShwb3N0LCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICB1MShwb3N0LCBcInVfYXVkaW9cIiwgc3RhdGUuYXVkaW8gKiBnLmF1ZGlvUmVhY3QpO1xuICAgIHUyKHBvc3QsIFwidV9wb2ludGVyXCIsIHN0YXRlLnBvaW50ZXIueCwgc3RhdGUucG9pbnRlci55KTtcbiAgICB1Mihwb3N0LCBcInVfcG9pbnRlcl92ZWxcIiwgc3RhdGUucG9pbnRlci52ZWxvY2l0eVgsIHN0YXRlLnBvaW50ZXIudmVsb2NpdHlZKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9kb3duXCIsIHN0YXRlLnBvaW50ZXIuZG93biA/IDEgOiAwKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9hY3RpdmVcIiwgc3RhdGUucG9pbnRlci5hY3RpdmUgPyAxIDogMCk7XG4gICAgdTEocG9zdCwgXCJ1X2ZlZWRiYWNrXCIsIGcuZmVlZGJhY2spO1xuICAgIHUxKHBvc3QsIFwidV90cmFpbHNcIiwgZy50cmFpbHMpO1xuICAgIHUxKHBvc3QsIFwidV9mYl96b29tXCIsIGcuZmJab29tKTtcbiAgICB1MShwb3N0LCBcInVfZmJfcm90YXRlXCIsIGcuZmJSb3RhdGUpO1xuICAgIHUxKHBvc3QsIFwidV9mYl9odWVcIiwgZy5mYkh1ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3dhcnBcIiwgZy53YXJwKTtcbiAgICB1MShwb3N0LCBcInVfc3dpcmxcIiwgZy5zd2lybCk7XG4gICAgdTEocG9zdCwgXCJ1X3JpcHBsZVwiLCBnLnJpcHBsZSk7XG4gICAgdTEocG9zdCwgXCJ1X3pvb21cIiwgZy56b29tKTtcbiAgICB1MShwb3N0LCBcInVfa2FsZWlkb1wiLCBnLmthbGVpZG8pO1xuICAgIHUxKHBvc3QsIFwidV9taXJyb3JcIiwgZy5taXJyb3IpO1xuICAgIHUxKHBvc3QsIFwidV9jaHJvbWFcIiwgZy5jaHJvbWEpO1xuICAgIHUxKHBvc3QsIFwidV9odWVfb3JiaXRcIiwgZy5odWVPcmJpdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NhdFwiLCBnLnNhdHVyYXRpb24pO1xuICAgIHUxKHBvc3QsIFwidV9jb25cIiwgZy5jb250cmFzdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NvbGFyaXplXCIsIGcuc29sYXJpemUpO1xuICAgIHUxKHBvc3QsIFwidV9ncmFpblwiLCBnLmdyYWluKTtcbiAgICB1MShwb3N0LCBcInVfc2NhbmxpbmVzXCIsIGcuc2NhbmxpbmVzKTtcbiAgICB1MShwb3N0LCBcInVfdmlnbmV0dGVcIiwgZy52aWduZXR0ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3N0cm9iZVwiLCBnLnN0cm9iZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfZm9yY2VcIiwgZy5wb2ludGVyRm9yY2UpO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX3NpemVcIiwgZy5wb2ludGVyU2l6ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfbW9kZVwiLCBnLnBvaW50ZXJNb2RlKTtcbiAgICBkcmF3UXVhZCgpO1xuXG4gICAgLy8gUHJlc2VudFxuICAgIGNvbnN0IGNvcHkgPSBwcm9ncmFtcy5jb3B5O1xuICAgIGdsIS51c2VQcm9ncmFtKGNvcHkucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChudWxsKTtcbiAgICB1VGV4KGNvcHksIFwidV90ZXhcIiwgb3V0LnRleHR1cmUsIDApO1xuICAgIGRyYXdRdWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNpemUoKSB7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCBwaXhlbFJhdGlvQ2FwKTtcbiAgICBjb25zdCBuZXh0V2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGNzc1dpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBuZXh0SGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChjc3NIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmIChuZXh0V2lkdGggPT09IHdpZHRoICYmIG5leHRIZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHdpZHRoID0gbmV4dFdpZHRoO1xuICAgIGhlaWdodCA9IG5leHRIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBPYmplY3QudmFsdWVzKHRhcmdldHMpKSByZXNpemVUYXJnZXQodGFyZ2V0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2l6ZShuZXh0Q3NzV2lkdGgsIG5leHRDc3NIZWlnaHQpIHtcbiAgICAgIGNzc1dpZHRoID0gTWF0aC5tYXgoMSwgbmV4dENzc1dpZHRoKTtcbiAgICAgIGNzc0hlaWdodCA9IE1hdGgubWF4KDEsIG5leHRDc3NIZWlnaHQpO1xuICAgICAgYXBwbHlTaXplKCk7XG4gICAgfSxcbiAgICBzZXRQaXhlbFJhdGlvQ2FwKGNhcCkge1xuICAgICAgcGl4ZWxSYXRpb0NhcCA9IE1hdGgubWF4KDAuNSwgY2FwKTtcbiAgICAgIGFwcGx5U2l6ZSgpO1xuICAgIH0sXG4gICAgc2V0SW1hZ2UoaW1hZ2VJZCwgc291cmNlSW1hZ2UpIHtcbiAgICAgIGxldCBlbnRyeSA9IGltYWdlcy5nZXQoaW1hZ2VJZCk7XG4gICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0geyB0ZXh0dXJlOiBtYWtlVGV4dHVyZSgpLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gICAgICAgIGltYWdlcy5zZXQoaW1hZ2VJZCwgZW50cnkpO1xuICAgICAgfVxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZW50cnkudGV4dHVyZSk7XG4gICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgc291cmNlSW1hZ2UpO1xuICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgZmFsc2UpO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZUltYWdlKTtcbiAgICAgIGVudHJ5LndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgIGVudHJ5LmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH0sXG4gICAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZCkge1xuICAgICAgY29uc3QgZW50cnkgPSBpbWFnZXMuZ2V0KGltYWdlSWQpO1xuICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICAgICAgZ2wuZGVsZXRlVGV4dHVyZShlbnRyeS50ZXh0dXJlKTtcbiAgICAgIGltYWdlcy5kZWxldGUoaW1hZ2VJZCk7XG4gICAgfSxcbiAgICBoYXNJbWFnZShpbWFnZUlkKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmhhcyhpbWFnZUlkKTtcbiAgICB9LFxuICAgIHJlbmRlcixcbiAgICBjbGVhckZlZWRiYWNrKCkge1xuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaW1hZ2VzLnZhbHVlcygpKSBnbC5kZWxldGVUZXh0dXJlKGVudHJ5LnRleHR1cmUpO1xuICAgICAgaW1hZ2VzLmNsZWFyKCk7XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKG1pc3NpbmdUZXh0dXJlKTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIE9iamVjdC52YWx1ZXModGFyZ2V0cykpIHtcbiAgICAgICAgZ2wuZGVsZXRlRnJhbWVidWZmZXIodGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0YXJnZXQudGV4dHVyZSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHsgcHJvZ3JhbSB9IG9mIE9iamVjdC52YWx1ZXMocHJvZ3JhbXMpKSBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgaWYgKHF1YWQpIGdsLmRlbGV0ZUJ1ZmZlcihxdWFkKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImltcG9ydCB7IGNsYW1wLCB0eXBlIE1lZGlhS2luZCwgdHlwZSBTY2VuZSwgdHlwZSBTY2VuZUxheWVyIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBoZXhUb1JnYixcbiAgICB0eXBlIEZyYW1lU3RhdGUsXG4gICAgdHlwZSBMYXllclJlbmRlclN0YXRlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxufSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7IGJsZW5kSW5kZXggfSBmcm9tIFwiLi9wcmVzZXRzXCI7XG5cbi8qKiBQdXJlIHNjZW5lIFx1MjE5MiByZW5kZXItc3RhdGUgbWF0aCBzaGFyZWQgYnkgdGhlIGVuZ2luZSBsb29wIGFuZCBoaXQtdGVzdGluZy4gKi9cblxuZXhwb3J0IHR5cGUgU3RhZ2VTaXplID0geyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBJbWFnZUluZm8gPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB0aHVtYjogc3RyaW5nO1xuICAgIG1pc3Npbmc6IGJvb2xlYW47XG4gICAga2luZDogTWVkaWFLaW5kO1xufTtcblxuLyoqIFRyYW5zaWVudCBwZXItaGl0IGJvb3N0cyBsYXllcmVkIG9udG8gdGhlIHdvcmxkIEZYOyBkZWNheXMgZXZlcnkgZnJhbWUuICovXG5leHBvcnQgdHlwZSBLaWNrU3RhdGUgPSB7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIHN0cm9iZTogbnVtYmVyO1xuICAgIGNocm9tYTogbnVtYmVyO1xuICAgIHJpcHBsZTogbnVtYmVyO1xuICAgIHN3aXJsOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlLaWNrKCk6IEtpY2tTdGF0ZSB7XG4gICAgcmV0dXJuIHsgem9vbTogMCwgc3Ryb2JlOiAwLCBjaHJvbWE6IDAsIHJpcHBsZTogMCwgc3dpcmw6IDAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyU2VlZChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZC5sZW5ndGg7IGkrKylcbiAgICAgICAgaGFzaCA9IChoYXNoICogMzEgKyBpZC5jaGFyQ29kZUF0KGkpKSA+Pj4gMDtcbiAgICByZXR1cm4gKGhhc2ggJSAxMDAwKSAvIDEwMDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZyYW1lU3RhdGUoYXJnczoge1xuICAgIHNjZW5lOiBTY2VuZTtcbiAgICBpbmZvOiBSZWNvcmQ8c3RyaW5nLCBJbWFnZUluZm8+O1xuICAgIHN0YWdlU2l6ZTogU3RhZ2VTaXplO1xuICAgIHRpbWU6IG51bWJlcjtcbiAgICBhdWRpbzogbnVtYmVyO1xuICAgIHBvaW50ZXI6IFBvaW50ZXJTdGF0ZTtcbiAgICBraWNrOiBLaWNrU3RhdGU7XG59KTogRnJhbWVTdGF0ZSB7XG4gICAgY29uc3QgeyBzY2VuZSwgaW5mbywgdGltZSwgYXVkaW8sIGtpY2sgfSA9IGFyZ3M7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBhcmdzLnN0YWdlU2l6ZTtcbiAgICBjb25zdCBhc3BlY3QgPSBNYXRoLm1heCgwLjA1LCB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCkpO1xuXG4gICAgY29uc3QgbGF5ZXJzOiBMYXllclJlbmRlclN0YXRlW10gPSBzY2VuZS5sYXllcnNcbiAgICAgICAgLmZpbHRlcigobGF5ZXIpID0+IGxheWVyLmZ4LnZpc2libGUpXG4gICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmeCA9IGxheWVyLmZ4O1xuICAgICAgICAgICAgY29uc3Qgc2VlZCA9IGxheWVyU2VlZChsYXllci5pZCk7XG4gICAgICAgICAgICBjb25zdCBtZXRhID0gaW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgICAgICBtZXRhICYmIG1ldGEud2lkdGggPiAwXG4gICAgICAgICAgICAgICAgICAgID8gbWV0YS53aWR0aCAvIE1hdGgubWF4KDEsIG1ldGEuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICBjb25zdCBmaXRIZWlnaHQgPSBNYXRoLm1pbigxLCBhc3BlY3QgLyBpbWFnZUFzcGVjdCk7XG4gICAgICAgICAgICBjb25zdCBwdWxzZSA9XG4gICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgZngucHVsc2UgKlxuICAgICAgICAgICAgICAgICAgICAoMC4xNiAqIE1hdGguc2luKHRpbWUgKiAyLjIgKyBzZWVkICogMjApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvICogc2NlbmUuZ2xvYmFsLmF1ZGlvUmVhY3QgKiAwLjUpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBmeC5zY2FsZSAqIHB1bHNlO1xuICAgICAgICAgICAgY29uc3QgZHJpZnRYID0gTWF0aC5zaW4odGltZSAqIDAuNTcgKyBzZWVkICogOS4yKSAqIGZ4LmRyaWZ0ICogMC4zO1xuICAgICAgICAgICAgY29uc3QgZHJpZnRZID0gTWF0aC5jb3ModGltZSAqIDAuNDMgKyBzZWVkICogNS43KSAqIGZ4LmRyaWZ0ICogMC4zO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgaW1hZ2VJZDogbGF5ZXIuaW1hZ2VJZCxcbiAgICAgICAgICAgICAgICBwb3M6IFtmeC54ICsgZHJpZnRYLCBmeC55ICsgZHJpZnRZXSxcbiAgICAgICAgICAgICAgICBleHQ6IFtcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMWUtNCwgKGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogc2NhbGUpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDFlLTQsIChmaXRIZWlnaHQgKiBzY2FsZSkgLyAyKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJvdDogKGZ4LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODAgKyBmeC5zcGluICogdGltZSAqIDEuNSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBmeC5vcGFjaXR5LFxuICAgICAgICAgICAgICAgIGJsZW5kOiBibGVuZEluZGV4KGZ4LmJsZW5kKSxcbiAgICAgICAgICAgICAgICB0aWxlOiBNYXRoLnJvdW5kKGZ4LnRpbGUpLFxuICAgICAgICAgICAgICAgIHdhcnA6IGZ4LndhcnAsXG4gICAgICAgICAgICAgICAgc3dpcmw6IGZ4LnN3aXJsLFxuICAgICAgICAgICAgICAgIHJpcHBsZTogZngucmlwcGxlLFxuICAgICAgICAgICAgICAgIGthbGVpZG86IGZ4LmthbGVpZG8sXG4gICAgICAgICAgICAgICAgcGl4ZWxhdGU6IGZ4LnBpeGVsYXRlLFxuICAgICAgICAgICAgICAgIGJ1bGdlOiBmeC5idWxnZSxcbiAgICAgICAgICAgICAgICBtaXJyb3I6IGZ4Lm1pcnJvcixcbiAgICAgICAgICAgICAgICBodWU6IGZ4Lmh1ZSxcbiAgICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBmeC5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGNvbnRyYXN0OiBmeC5jb250cmFzdCxcbiAgICAgICAgICAgICAgICBicmlnaHRuZXNzOiBmeC5icmlnaHRuZXNzLFxuICAgICAgICAgICAgICAgIGludmVydDogZnguaW52ZXJ0LFxuICAgICAgICAgICAgICAgIHBvc3Rlcml6ZTogZngucG9zdGVyaXplLFxuICAgICAgICAgICAgICAgIGNocm9tYTogZnguY2hyb21hLFxuICAgICAgICAgICAgICAgIGVkZ2VzOiBmeC5lZGdlcyxcbiAgICAgICAgICAgICAgICB0aW50OiBoZXhUb1JnYihmeC50aW50Q29sb3IpLFxuICAgICAgICAgICAgICAgIHRpbnRBbW91bnQ6IGZ4LnRpbnRBbW91bnQsXG4gICAgICAgICAgICAgICAgc2hpbW1lcjogZnguc2hpbW1lcixcbiAgICAgICAgICAgICAgICBzZWVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCBnID0gc2NlbmUuZ2xvYmFsO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpbWUsXG4gICAgICAgIGF1ZGlvLFxuICAgICAgICBwb2ludGVyOiBhcmdzLnBvaW50ZXIsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICBiZ01vZGU6IGcuYmdNb2RlLFxuICAgICAgICAgICAgYmdBOiBoZXhUb1JnYihnLmJnQSksXG4gICAgICAgICAgICBiZ0I6IGhleFRvUmdiKGcuYmdCKSxcbiAgICAgICAgICAgIGZlZWRiYWNrOiBnLmZlZWRiYWNrLFxuICAgICAgICAgICAgdHJhaWxzOiBnLnRyYWlscyxcbiAgICAgICAgICAgIGZiWm9vbTogZy5mYlpvb20sXG4gICAgICAgICAgICBmYlJvdGF0ZTogZy5mYlJvdGF0ZSxcbiAgICAgICAgICAgIGZiSHVlOiBnLmZiSHVlLFxuICAgICAgICAgICAgd2FycDogZy53YXJwLFxuICAgICAgICAgICAgc3dpcmw6IGNsYW1wKGcuc3dpcmwgKyBraWNrLnN3aXJsLCAwLCAxKSxcbiAgICAgICAgICAgIHJpcHBsZTogY2xhbXAoZy5yaXBwbGUgKyBraWNrLnJpcHBsZSwgMCwgMSksXG4gICAgICAgICAgICB6b29tOiBjbGFtcChnLnpvb20gKyBraWNrLnpvb20sIDAsIDEpLFxuICAgICAgICAgICAga2FsZWlkbzogZy5rYWxlaWRvLFxuICAgICAgICAgICAgbWlycm9yOiBnLm1pcnJvcixcbiAgICAgICAgICAgIGNocm9tYTogY2xhbXAoZy5jaHJvbWEgKyBraWNrLmNocm9tYSwgMCwgMSksXG4gICAgICAgICAgICBodWVPcmJpdDogZy5odWVPcmJpdCxcbiAgICAgICAgICAgIHNhdHVyYXRpb246IGcuc2F0dXJhdGlvbixcbiAgICAgICAgICAgIGNvbnRyYXN0OiBnLmNvbnRyYXN0LFxuICAgICAgICAgICAgc29sYXJpemU6IGcuc29sYXJpemUsXG4gICAgICAgICAgICBncmFpbjogZy5ncmFpbixcbiAgICAgICAgICAgIHNjYW5saW5lczogZy5zY2FubGluZXMsXG4gICAgICAgICAgICB2aWduZXR0ZTogZy52aWduZXR0ZSxcbiAgICAgICAgICAgIHN0cm9iZTogY2xhbXAoZy5zdHJvYmUgKyBraWNrLnN0cm9iZSwgMCwgMSksXG4gICAgICAgICAgICBhdWRpb1JlYWN0OiBnLmF1ZGlvUmVhY3QsXG4gICAgICAgICAgICBwb2ludGVyRm9yY2U6IGcucG9pbnRlckZvcmNlLFxuICAgICAgICAgICAgcG9pbnRlclNpemU6IGcucG9pbnRlclNpemUsXG4gICAgICAgICAgICBwb2ludGVyTW9kZTogZy5wb2ludGVyTW9kZSxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG4vKiogVG9wbW9zdCB2aXNpYmxlIGxheWVyIHdob3NlIHF1YWQgY29udGFpbnMgdGhlIHNjZW5lLXNwYWNlIHBvaW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpdExheWVyKFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBpbmZvOiBSZWNvcmQ8c3RyaW5nLCBJbWFnZUluZm8+LFxuICAgIHN0YWdlU2l6ZTogU3RhZ2VTaXplLFxuICAgIHNjZW5lWDogbnVtYmVyLFxuICAgIHNjZW5lWTogbnVtYmVyLFxuKTogU2NlbmVMYXllciB8IG51bGwge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplO1xuICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KSk7XG4gICAgZm9yIChsZXQgaSA9IHNjZW5lLmxheWVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lLmxheWVyc1tpXTtcbiAgICAgICAgaWYgKCFsYXllci5meC52aXNpYmxlKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgbWV0YSA9IGluZm9bbGF5ZXIuaW1hZ2VJZF07XG4gICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpIDogMTtcbiAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICBjb25zdCBleHRYID0gKGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogbGF5ZXIuZnguc2NhbGUpIC8gMjtcbiAgICAgICAgY29uc3QgZXh0WSA9IChmaXRIZWlnaHQgKiBsYXllci5meC5zY2FsZSkgLyAyO1xuICAgICAgICBjb25zdCBhbmdsZSA9ICgtbGF5ZXIuZngucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgICAgY29uc3QgZHggPSBzY2VuZVggLSBsYXllci5meC54O1xuICAgICAgICBjb25zdCBkeSA9IHNjZW5lWSAtIGxheWVyLmZ4Lnk7XG4gICAgICAgIGNvbnN0IHF4ID0gTWF0aC5jb3MoYW5nbGUpICogZHggLSBNYXRoLnNpbihhbmdsZSkgKiBkeTtcbiAgICAgICAgY29uc3QgcXkgPSBNYXRoLnNpbihhbmdsZSkgKiBkeCArIE1hdGguY29zKGFuZ2xlKSAqIGR5O1xuICAgICAgICBpZiAoTWF0aC5hYnMocXgpIDw9IGV4dFggJiYgTWF0aC5hYnMocXkpIDw9IGV4dFkpIHJldHVybiBsYXllcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB0eXBlIFNlbGVjdGlvbkJveCA9IHtcbiAgICBib3hXaWR0aDogbnVtYmVyO1xuICAgIGJveEhlaWdodDogbnVtYmVyO1xuICAgIGNlbnRlclg6IG51bWJlcjtcbiAgICBjZW50ZXJZOiBudW1iZXI7XG4gICAgcm90YXRpb246IG51bWJlcjtcbn07XG5cbi8qKiBQaXhlbC1zcGFjZSBib3VuZGluZyBib3ggb2YgYSBsYXllciBmb3IgdGhlIGFycmFuZ2UtbW9kZSBzZWxlY3Rpb24gb3V0bGluZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rpb25Cb3hGb3IoXG4gICAgbGF5ZXI6IFNjZW5lTGF5ZXIsXG4gICAgbWV0YTogSW1hZ2VJbmZvIHwgdW5kZWZpbmVkLFxuICAgIHN0YWdlU2l6ZTogU3RhZ2VTaXplLFxuKTogU2VsZWN0aW9uQm94IHwgbnVsbCB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemU7XG4gICAgaWYgKHdpZHRoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYXNwZWN0ID0gd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpO1xuICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgbWV0YSAmJiBtZXRhLndpZHRoID4gMCA/IG1ldGEud2lkdGggLyBNYXRoLm1heCgxLCBtZXRhLmhlaWdodCkgOiAxO1xuICAgIGNvbnN0IGZpdEhlaWdodCA9IE1hdGgubWluKDEsIGFzcGVjdCAvIGltYWdlQXNwZWN0KTtcbiAgICBjb25zdCBib3hXaWR0aCA9IGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogbGF5ZXIuZnguc2NhbGUgKiBoZWlnaHQ7XG4gICAgY29uc3QgYm94SGVpZ2h0ID0gZml0SGVpZ2h0ICogbGF5ZXIuZnguc2NhbGUgKiBoZWlnaHQ7XG4gICAgY29uc3QgY2VudGVyWCA9ICgwLjUgKyBsYXllci5meC54IC8gYXNwZWN0KSAqIHdpZHRoO1xuICAgIGNvbnN0IGNlbnRlclkgPSAoMC41IC0gbGF5ZXIuZngueSkgKiBoZWlnaHQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm94V2lkdGgsXG4gICAgICAgIGJveEhlaWdodCxcbiAgICAgICAgY2VudGVyWCxcbiAgICAgICAgY2VudGVyWSxcbiAgICAgICAgcm90YXRpb246IGxheWVyLmZ4LnJvdGF0aW9uLFxuICAgIH07XG59XG4iLCAiLy8gQ2xpZW50LXNpZGUgcGVyc2lzdGVuY2U6IG1lZGlhIGJsb2JzIGxpdmUgaW4gSW5kZXhlZERCIChzY2VuZXMgc2F2ZWQgdG8gdGhlXG4vLyBzZXJ2ZXIgYXJlIHBhcmFtcy1vbmx5IEpTT04pLCBhbmQgdGhlIHdvcmtpbmcgc2NlbmUgYXV0b3NhdmVzIHRvIGxvY2FsU3RvcmFnZS5cblxuaW1wb3J0IHsgZGVjb2RlU2NlbmUsIGVuY29kZVNjZW5lLCB0eXBlIFNjZW5lIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5jb25zdCBEQl9OQU1FID0gXCJ2YXVkaW8tMi1pbWFnZXNcIjtcbmNvbnN0IFNUT1JFID0gXCJpbWFnZXNcIjtcbmNvbnN0IEFVVE9TQVZFX0tFWSA9IFwidmF1ZGlvLTI6YXV0b3NhdmVcIjtcbmNvbnN0IE1BWF9URVhUVVJFX0RJTSA9IDIwNDg7XG5jb25zdCBUSFVNQl9ESU0gPSA5NjtcblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJEYXRhYmFzZT4gfCBudWxsID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlbkRiKCk6IFByb21pc2U8SURCRGF0YWJhc2U+IHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oREJfTkFNRSwgMSk7XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnJlc3VsdC5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFNUT1JFKSkge1xuICAgICAgICAgIHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgb3BlbiBmYWlsZWRcIikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYlByb21pc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRJbWFnZUJsb2IoaWQ6IHN0cmluZywgYmxvYjogQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkd3JpdGVcIik7XG4gICAgdHgub2JqZWN0U3RvcmUoU1RPUkUpLnB1dChibG9iLCBpZCk7XG4gICAgdHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICB0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiB3cml0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iIHwgbnVsbD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShTVE9SRSkuZ2V0KGlkKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQgaW5zdGFuY2VvZiBCbG9iID8gcmVxdWVzdC5yZXN1bHQgOiBudWxsKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgcmVhZCBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWR3cml0ZVwiKTtcbiAgICB0eC5vYmplY3RTdG9yZShTVE9SRSkuZGVsZXRlKGlkKTtcbiAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IEVycm9yKFwiSW5kZXhlZERCIGRlbGV0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IHR5cGUgRGVjb2RlZEltYWdlID0ge1xuICAvKiogRG93bnNjYWxlZCB0byBHUFUtZnJpZW5kbHkgc2l6ZTsgdXBsb2FkIHRoaXMgYXMgdGhlIHRleHR1cmUuICovXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIC8qKiBUaW55IGRhdGEgVVJMIGZvciB0aGUgbGF5ZXJzIHBhbmVsLiAqL1xuICB0aHVtYjogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJbWFnZUJsb2IoYmxvYjogQmxvYik6IFByb21pc2U8RGVjb2RlZEltYWdlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX1RFWFRVUkVfRElNIC8gTWF0aC5tYXgoaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWFnZS5uYXR1cmFsV2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLm5hdHVyYWxIZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiMkQgY2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJTY2FsZSA9IE1hdGgubWluKDEsIFRIVU1CX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgdGh1bWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiB0aHVtYlNjYWxlKSk7XG4gICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogdGh1bWJTY2FsZSkpO1xuICAgICAgICBjb25zdCB0aHVtYkNvbnRleHQgPSB0aHVtYkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICh0aHVtYkNvbnRleHQpIHRodW1iQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwLCB0aHVtYkNhbnZhcy53aWR0aCwgdGh1bWJDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgdGh1bWI6IHRodW1iQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC43KSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgcmVqZWN0KGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZSA6IG5ldyBFcnJvcihcIkltYWdlIGRlY29kZSBmYWlsZWRcIikpO1xuICAgICAgfVxuICAgIH07XG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGVjb2RlIHRoYXQgaW1hZ2VcIikpO1xuICAgIH07XG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3ByZWZpeH0tJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUF1dG9zYXZlKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVE9TQVZFX0tFWSwgZW5jb2RlU2NlbmUoc2NlbmUpKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gUXVvdGEgLyBwcml2YXRlIG1vZGUgXHUyMDE0IGxvc2luZyBhdXRvc2F2ZSBpcyBhY2NlcHRhYmxlLlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXV0b3NhdmUoKTogU2NlbmUgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRPU0FWRV9LRVkpO1xuICAgIGlmICghcmF3KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZGVjb2RlU2NlbmUocmF3KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIERFRkFVTFRfTEFZRVJfRlgsXG4gICAgTUFYX0xBWUVSUyxcbiAgICBjbGVhbk5hbWUsXG4gICAgdHlwZSBNZWRpYUtpbmQsXG4gICAgdHlwZSBTY2VuZSxcbiAgICB0eXBlIFNjZW5lTGF5ZXIsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgRW5naW5lSGFuZGxlIH0gZnJvbSBcIi4uL2VuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBJbWFnZUluZm8gfSBmcm9tIFwiLi4vZnJhbWVcIjtcbmltcG9ydCB7XG4gICAgY2FudmFzVGh1bWIsXG4gICAgY2xhc3NpZnlCbG9iLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBkZWZhdWx0TGF5ZXJOYW1lLFxuICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzLFxuICAgIGxldmVsRnJvbVNwZWN0cnVtLFxuICAgIG1lZGlhS2luZExhYmVsLFxuICAgIHBhaW50QXVkaW9WaXN1YWwsXG4gICAgcGFpbnREYXRhQnl0ZXMsXG59IGZyb20gXCIuLi9tZWRpYVwiO1xuaW1wb3J0IHsgZGVjb2RlSW1hZ2VCbG9iLCBnZXRJbWFnZUJsb2IsIG5ld0lkLCBwdXRJbWFnZUJsb2IgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgTWVkaWFSdW50aW1lID0ge1xuICAgIGtpbmQ6IE1lZGlhS2luZDtcbiAgICBvYmplY3RVcmw/OiBzdHJpbmc7XG4gICAgdmlkZW8/OiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIGF1ZGlvPzogSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBhbmFseXNlcj86IEFuYWx5c2VyTm9kZTtcbiAgICBzb3VyY2VOb2RlPzogTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xuICAgIHNwZWN0cnVtPzogVWludDhBcnJheTtcbn07XG5cbi8qKlxuICogT3ducyBpbXBvcnRlZCBtZWRpYTogSW5kZXhlZERCIGJsb2JzLCBsaXZlIDx2aWRlbz4vPGF1ZGlvPiBydW50aW1lcywgZW5naW5lXG4gKiB0ZXh0dXJlcywgdGh1bWJuYWlscywgYW5kIHRoZSBzaGFyZWQgQXVkaW9Db250ZXh0IGZvciBtZWRpYSBhbmFseXNlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZWRpYUxpYnJhcnkoZGVwczoge1xuICAgIGVuZ2luZVJlZjogeyBjdXJyZW50OiBFbmdpbmVIYW5kbGUgfCBudWxsIH07XG4gICAgc2NlbmVSZWY6IHsgY3VycmVudDogU2NlbmUgfTtcbiAgICBzZXRTY2VuZTogKHVwZGF0ZXI6IChwcmV2aW91czogU2NlbmUpID0+IFNjZW5lKSA9PiB2b2lkO1xuICAgIHNldFNlbGVjdGVkSWQ6IChpZDogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZDtcbiAgICBzaG93VG9hc3Q6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgLyoqIENhbGxlZCB3aGVuIGFuIGF1ZGlvIGZpbGUgbGFuZHMgYW5kIHRoZSBzY2VuZSBiYXJlbHkgcmVhY3RzIHRvIGF1ZGlvLiAqL1xuICAgIG9uQXVkaW9JbXBvcnRlZDogKCkgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCBbaW1hZ2VJbmZvLCBzZXRJbWFnZUluZm9dID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgSW1hZ2VJbmZvPj4oe30pO1xuICAgIGNvbnN0IGltYWdlSW5mb1JlZiA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBJbWFnZUluZm8+PihpbWFnZUluZm8pO1xuICAgIGltYWdlSW5mb1JlZi5jdXJyZW50ID0gaW1hZ2VJbmZvO1xuXG4gICAgY29uc3QgbWVkaWFSdW50aW1lc1JlZiA9IHVzZVJlZihuZXcgTWFwPHN0cmluZywgTWVkaWFSdW50aW1lPigpKTtcbiAgICBjb25zdCBhdWRpb0NvbnRleHRSZWYgPSB1c2VSZWY8QXVkaW9Db250ZXh0IHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdm9pZCBhdWRpb0NvbnRleHRSZWYuY3VycmVudD8uY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBydW50aW1lID0gbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmdldChpbWFnZUlkKTtcbiAgICAgICAgaWYgKCFydW50aW1lKSByZXR1cm47XG4gICAgICAgIHJ1bnRpbWUudmlkZW8/LnBhdXNlKCk7XG4gICAgICAgIHJ1bnRpbWUuYXVkaW8/LnBhdXNlKCk7XG4gICAgICAgIGlmIChydW50aW1lLnZpZGVvKSB7XG4gICAgICAgICAgICBydW50aW1lLnZpZGVvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUudmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW50aW1lLmF1ZGlvKSB7XG4gICAgICAgICAgICBydW50aW1lLmF1ZGlvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUuYXVkaW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLnNvdXJjZU5vZGU/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRpc2Nvbm5lY3RlZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyPy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBkaXNjb25uZWN0ZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVudGltZS5vYmplY3RVcmwpIFVSTC5yZXZva2VPYmplY3RVUkwocnVudGltZS5vYmplY3RVcmwpO1xuICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuZGVsZXRlKGltYWdlSWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VBbGxNZWRpYVJ1bnRpbWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGltYWdlSWQgb2YgWy4uLm1lZGlhUnVudGltZXNSZWYuY3VycmVudC5rZXlzKCldKSB7XG4gICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIERyb3AgdGhlIHJ1bnRpbWUsIGVuZ2luZSB0ZXh0dXJlLCBhbmQgaW5mbyBlbnRyeSBmb3IgYW4gdW51c2VkIGltYWdlLiAqL1xuICAgIGZ1bmN0aW9uIGZvcmdldEltYWdlKGltYWdlSWQ6IHN0cmluZykge1xuICAgICAgICAvLyBUaGUgSW5kZXhlZERCIGJsb2IgaXMga2VwdCBzbyB1bmRvIGNhbiBicmluZyB0aGUgbGF5ZXIgYmFjay5cbiAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgZGVwcy5lbmdpbmVSZWYuY3VycmVudD8ucmVtb3ZlSW1hZ2UoaW1hZ2VJZCk7XG4gICAgICAgIHNldEltYWdlSW5mbygoaW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4uaW5mbyB9O1xuICAgICAgICAgICAgZGVsZXRlIG5leHRbaW1hZ2VJZF07XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlTWVkaWFBdWRpb0NvbnRleHQoKTogUHJvbWlzZTxBdWRpb0NvbnRleHQ+IHtcbiAgICAgICAgaWYgKCFhdWRpb0NvbnRleHRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LnN0YXRlID09PSBcInN1c3BlbmRlZFwiKSB7XG4gICAgICAgICAgICBhd2FpdCBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGVNZWRpYShcbiAgICAgICAgaW1hZ2VJZDogc3RyaW5nLFxuICAgICAgICBibG9iOiBCbG9iLFxuICAgICAgICBraW5kOiBNZWRpYUtpbmQsXG4gICAgKTogUHJvbWlzZTxJbWFnZUluZm8+IHtcbiAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZGVwcy5lbmdpbmVSZWYuY3VycmVudDtcblxuICAgICAgICBpZiAoa2luZCA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgZGVjb2RlSW1hZ2VCbG9iKGJsb2IpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBkZWNvZGVkLmNhbnZhcyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGRlY29kZWQud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBkZWNvZGVkLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aHVtYjogZGVjb2RlZC50aHVtYixcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcImRhdGFcIikge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGJsb2Iuc2xpY2UoMCwgMTAyNCAqIDEwMjQpLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBwYWludERhdGFCeXRlcyhjYW52YXMsIG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBjYW52YXMpO1xuICAgICAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LnNldChpbWFnZUlkLCB7IGtpbmQsIGNhbnZhcyB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXlzSW5saW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXQtcGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBvYmplY3RVcmw7XG5cbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvblJlYWR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBkZWNvZGUgdGhhdCB2aWRlb1wiKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZGRhdGFcIiwgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIHZpZGVvLmxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIHZpZGVvLnZpZGVvV2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgdmlkZW8udmlkZW9IZWlnaHQpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCB2aWRlbyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCwgb2JqZWN0VXJsLCB2aWRlbyB9KTtcbiAgICAgICAgICAgIHZvaWQgdmlkZW8ucGxheSgpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRodW1iOiBjYW52YXNUaHVtYih2aWRlbywgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdWRpb1xuICAgICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgYXVkaW8ubG9vcCA9IHRydWU7XG4gICAgICAgIGF1ZGlvLnByZWxvYWQgPSBcImF1dG9cIjtcbiAgICAgICAgYXVkaW8uc3JjID0gb2JqZWN0VXJsO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhcyk7XG4gICAgICAgIHBhaW50QXVkaW9WaXN1YWwoY2FudmFzLCBuZXcgVWludDhBcnJheSgxMjgpLCAwLjI1LCAwKTtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gYXdhaXQgZW5zdXJlTWVkaWFBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgICAgIGFuYWx5c2VyLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuNzI7XG4gICAgICAgIHNvdXJjZU5vZGUuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBjYW52YXMpO1xuICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBvYmplY3RVcmwsXG4gICAgICAgICAgICBhdWRpbyxcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIGFuYWx5c2VyLFxuICAgICAgICAgICAgc291cmNlTm9kZSxcbiAgICAgICAgICAgIHNwZWN0cnVtOiBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCksXG4gICAgICAgIH0pO1xuICAgICAgICB2b2lkIGF1ZGlvLnBsYXkoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSxcbiAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbXBvcnRGaWxlcyhmaWxlczogSXRlcmFibGU8RmlsZT4pIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20oZmlsZXMpO1xuICAgICAgICBpZiAoIWxpc3QubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGxldCBhZGRlZCA9IDA7XG4gICAgICAgIGxldCBpbXBvcnRlZEF1ZGlvID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBsaXN0KSB7XG4gICAgICAgICAgICBpZiAoZGVwcy5zY2VuZVJlZi5jdXJyZW50LmxheWVycy5sZW5ndGggKyBhZGRlZCA+PSBNQVhfTEFZRVJTKSB7XG4gICAgICAgICAgICAgICAgZGVwcy5zaG93VG9hc3QoYExheWVyIGxpbWl0IGlzICR7TUFYX0xBWUVSU31gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBjbGFzc2lmeUZpbGUoZmlsZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlSWQgPSBuZXdJZChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBwdXRJbWFnZUJsb2IoaW1hZ2VJZCwgZmlsZSkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgYWN0aXZhdGVNZWRpYShpbWFnZUlkLCBmaWxlLCBraW5kKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoeyAuLi5wcmV2aW91cywgW2ltYWdlSWRdOiBpbmZvIH0pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllcjogU2NlbmVMYXllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMYXllck5hbWUoa2luZCwgZmlsZS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhS2luZExhYmVsKGtpbmQpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBtZWRpYUtpbmQ6IGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIGZ4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ERUZBVUxUX0xBWUVSX0ZYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogYWRkZWQgKiAwLjA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogYWRkZWQgKiAtMC4wNyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRlcHMuc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBbLi4ucHJldmlvdXMubGF5ZXJzLCBsYXllcl0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIGRlcHMuc2V0U2VsZWN0ZWRJZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiYXVkaW9cIikgaW1wb3J0ZWRBdWRpbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWRkZWQrKztcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGRlcHMuc2hvd1RvYXN0KFxuICAgICAgICAgICAgICAgICAgICBgQ291bGQgbm90IGltcG9ydCAke21lZGlhS2luZExhYmVsKGtpbmQpLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBvcnRlZEF1ZGlvICYmIGRlcHMuc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMjUpIHtcbiAgICAgICAgICAgIGRlcHMub25BdWRpb0ltcG9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQnJpbmcgZW5naW5lIHRleHR1cmVzIGFuZCBydW50aW1lcyBpbiBsaW5lIHdpdGggYSAocmUpbG9hZGVkIHNjZW5lLiAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVTY2VuZUltYWdlcyh0YXJnZXQ6IFNjZW5lKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGRlcHMuZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGtpbmRCeUlkID0gbmV3IE1hcDxzdHJpbmcsIE1lZGlhS2luZD4oKTtcbiAgICAgICAgY29uc3QgbmFtZUJ5SWQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRhcmdldC5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmICghbGF5ZXIuaW1hZ2VJZCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIWtpbmRCeUlkLmhhcyhsYXllci5pbWFnZUlkKSkge1xuICAgICAgICAgICAgICAgIGtpbmRCeUlkLnNldChsYXllci5pbWFnZUlkLCBsYXllci5tZWRpYUtpbmQgPz8gXCJpbWFnZVwiKTtcbiAgICAgICAgICAgICAgICBuYW1lQnlJZC5zZXQobGF5ZXIuaW1hZ2VJZCwgbGF5ZXIubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlSWQgb2YgWy4uLm1lZGlhUnVudGltZXNSZWYuY3VycmVudC5rZXlzKCldKSB7XG4gICAgICAgICAgICBpZiAoIWtpbmRCeUlkLmhhcyhpbWFnZUlkKSkge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlbW92ZUltYWdlKGltYWdlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBbaW1hZ2VJZCwga2luZF0gb2Yga2luZEJ5SWQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuaGFzKGltYWdlSWQpICYmXG4gICAgICAgICAgICAgICAgZW5naW5lLmhhc0ltYWdlKGltYWdlSWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGdldEltYWdlQmxvYihpbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWJsb2IpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWQ6IE1lZGlhS2luZCA9XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiaW1hZ2VcIiB8fFxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcInZpZGVvXCIgfHxcbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJhdWRpb1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGtpbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2xhc3NpZnlCbG9iKGJsb2IsIG5hbWVCeUlkLmdldChpbWFnZUlkKSA/PyBcIlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgYWN0aXZhdGVNZWRpYShpbWFnZUlkLCBibG9iLCByZXNvbHZlZCk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChwcmV2aW91cykgPT4gKHsgLi4ucHJldmlvdXMsIFtpbWFnZUlkXTogaW5mbyB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlSWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFB1c2ggZnJlc2ggdmlkZW8gZnJhbWVzIC8gYXVkaW8gc3BlY3RyYSB0byB0aGUgZW5naW5lOyByZXR1cm5zIHBlYWsgbGV2ZWwuICovXG4gICAgZnVuY3Rpb24gc3luY0xpdmVNZWRpYVRleHR1cmVzKGVuZ2luZTogRW5naW5lSGFuZGxlLCB0aW1lOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWVkaWFMZXZlbCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2ltYWdlSWQsIHJ1bnRpbWVdIG9mIG1lZGlhUnVudGltZXNSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKHJ1bnRpbWUua2luZCA9PT0gXCJ2aWRlb1wiICYmIHJ1bnRpbWUudmlkZW8pIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWUudmlkZW8ucmVhZHlTdGF0ZSA+PVxuICAgICAgICAgICAgICAgICAgICBIVE1MTWVkaWFFbGVtZW50LkhBVkVfQ1VSUkVOVF9EQVRBXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRJbWFnZShpbWFnZUlkLCBydW50aW1lLnZpZGVvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcnVudGltZS5raW5kID09PSBcImF1ZGlvXCIgJiZcbiAgICAgICAgICAgICAgICBydW50aW1lLmF1ZGlvICYmXG4gICAgICAgICAgICAgICAgcnVudGltZS5jYW52YXMgJiZcbiAgICAgICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjdHJ1bSA9XG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWUuc3BlY3RydW0gJiZcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bS5sZW5ndGggPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bnRpbWUuc3BlY3RydW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkocnVudGltZS5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bSA9IHNwZWN0cnVtO1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoc3BlY3RydW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxGcm9tU3BlY3RydW0oc3BlY3RydW0pO1xuICAgICAgICAgICAgICAgIG1lZGlhTGV2ZWwgPSBNYXRoLm1heChtZWRpYUxldmVsLCBsZXZlbCk7XG4gICAgICAgICAgICAgICAgcGFpbnRBdWRpb1Zpc3VhbChydW50aW1lLmNhbnZhcywgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuc2V0SW1hZ2UoaW1hZ2VJZCwgcnVudGltZS5jYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYUxldmVsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGltYWdlSW5mbyxcbiAgICAgICAgaW1hZ2VJbmZvUmVmLFxuICAgICAgICBhdWRpb0NvbnRleHRSZWYsXG4gICAgICAgIGltcG9ydEZpbGVzLFxuICAgICAgICBoeWRyYXRlU2NlbmVJbWFnZXMsXG4gICAgICAgIHN5bmNMaXZlTWVkaWFUZXh0dXJlcyxcbiAgICAgICAgZGlzcG9zZUFsbE1lZGlhUnVudGltZXMsXG4gICAgICAgIGZvcmdldEltYWdlLFxuICAgIH07XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHR5cGUgeyBHbG9iYWxGeCwgU2NlbmUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5cbi8qKiBNaWNyb3Bob25lIGNhcHR1cmUgZmVlZGluZyB0aGUgYXVkaW8tcmVhY3QgYW5hbHlzZXIuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWljKGRlcHM6IHtcbiAgICBhdWRpb0NvbnRleHRSZWY6IHsgY3VycmVudDogQXVkaW9Db250ZXh0IHwgbnVsbCB9O1xuICAgIHNjZW5lUmVmOiB7IGN1cnJlbnQ6IFNjZW5lIH07XG4gICAgYXVkaW9MZXZlbFJlZjogeyBjdXJyZW50OiBudW1iZXIgfTtcbiAgICB1cGRhdGVHbG9iYWw6IChwYXRjaDogUGFydGlhbDxHbG9iYWxGeD4pID0+IHZvaWQ7XG4gICAgc2hvd1RvYXN0OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIC8qKiBUcnVlIHdoaWxlIGEgcmVjb3JkaW5nIHRoYXQgaW5jbHVkZXMgbWljIGF1ZGlvIGlzIHJ1bm5pbmcuICovXG4gICAgcmVjb3JkaW5nTWljUmVmOiB7IGN1cnJlbnQ6IGJvb2xlYW4gfTtcbn0pIHtcbiAgICBjb25zdCBbbWljQWN0aXZlLCBzZXRNaWNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1pY1N0cmVhbVJlZiA9IHVzZVJlZjxNZWRpYVN0cmVhbSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGFuYWx5c2VyUmVmID0gdXNlUmVmPEFuYWx5c2VyTm9kZSB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWljU3RyZWFtUmVmLmN1cnJlbnQ/LmdldFRyYWNrcygpID8/IFtdKVxuICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBlbnN1cmVNaWMob3B0aW9ucz86IHtcbiAgICAgICAgdG9hc3RPblN1Y2Nlc3M/OiBib29sZWFuO1xuICAgICAgICB0b2FzdE9uRXJyb3I/OiBib29sZWFuO1xuICAgIH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKG1pY1N0cmVhbVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBzdHJlYW07XG4gICAgICAgICAgICBpZiAoIWRlcHMuYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgZGVwcy5hdWRpb0NvbnRleHRSZWYuY3VycmVudCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIGF3YWl0IGRlcHMuYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQucmVzdW1lKCk7XG4gICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IGRlcHMuYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgICAgICAgICBhbmFseXNlci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjY4O1xuICAgICAgICAgICAgZGVwcy5hdWRpb0NvbnRleHRSZWYuY3VycmVudFxuICAgICAgICAgICAgICAgIC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pXG4gICAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICAgICAgYW5hbHlzZXJSZWYuY3VycmVudCA9IGFuYWx5c2VyO1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgaWYgKGRlcHMuc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMylcbiAgICAgICAgICAgICAgICBkZXBzLnVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IDAuNyB9KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zPy50b2FzdE9uU3VjY2VzcyAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgZGVwcy5zaG93VG9hc3QoXCJNaWMgbGl2ZSBcdTIwMTQgYXVkaW8gZHJpdmVzIHRoZSBzaGFkZXJcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucz8udG9hc3RPbkVycm9yICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICBkZXBzLnNob3dUb2FzdChcIk1pY3JvcGhvbmUgd2FzIGJsb2NrZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB0b2dnbGVNaWMoKSB7XG4gICAgICAgIGlmIChtaWNBY3RpdmUpIHtcbiAgICAgICAgICAgIGlmIChkZXBzLnJlY29yZGluZ01pY1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgZGVwcy5zaG93VG9hc3QoXCJDYW4ndCBzdG9wIG1pYyB3aGlsZSByZWNvcmRpbmcgd2l0aCBhdWRpb1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1pY1N0cmVhbVJlZi5jdXJyZW50Py5nZXRUcmFja3MoKSA/PyBbXSlcbiAgICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICBtaWNTdHJlYW1SZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGRlcHMuYXVkaW9MZXZlbFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgIHNldE1pY0FjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZW5zdXJlTWljKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWljQWN0aXZlLCBtaWNTdHJlYW1SZWYsIGFuYWx5c2VyUmVmLCBlbnN1cmVNaWMsIHRvZ2dsZU1pYyB9O1xufVxuIiwgImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgY2xhbXAsXG4gICAgdHlwZSBHbG9iYWxGeCxcbiAgICB0eXBlIExheWVyRngsXG4gICAgdHlwZSBTY2VuZSxcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBFbmdpbmVIYW5kbGUgfSBmcm9tIFwiLi4vZW5naW5lXCI7XG5pbXBvcnQge1xuICAgIGVtcHR5S2ljayxcbiAgICBoaXRMYXllcixcbiAgICB0eXBlIEltYWdlSW5mbyxcbiAgICB0eXBlIEtpY2tTdGF0ZSxcbiAgICB0eXBlIFN0YWdlU2l6ZSxcbn0gZnJvbSBcIi4uL2ZyYW1lXCI7XG5pbXBvcnQge1xuICAgIFBMQVlfRlhfS0VZUyxcbiAgICBQTEFZX0xBWUVSX0tFWVMsXG4gICAgUExBWV9QSUFOTyxcbiAgICBQTEFZX1BSRVNFVF9DT0RFUyxcbiAgICBoc2xUb0hleCxcbn0gZnJvbSBcIi4uL3BsYXltYXBcIjtcbmltcG9ydCB7XG4gICAgV09STERfUFJFU0VUUyxcbiAgICByYW5kb21MYXllckZ4LFxuICAgIHJlc2V0TGF5ZXJGeEVmZmVjdHMsXG59IGZyb20gXCIuLi9wcmVzZXRzXCI7XG5cbi8qKlxuICogUGxheSBtb2RlIFx1MjAxNCB0aGUgY2FudmFzIGFzIGFuIGluc3RydW1lbnQuIE93bnMgdGhlIHRyYW5zaWVudCBcImtpY2tcIiBib29zdHNcbiAqIGFuZCBldmVyeSBwZXJtYW5lbnQtYnV0LXVuZG9hYmxlIGdlc3R1cmU6IHByZXNldCBzdHJpa2VzLCBGWCBwdW1wcywgdGhlIGh1ZVxuICogcGlhbm8sIGxheWVyIHN0cmlrZXMsIHRhcHMsIGVjaG9lcywgYW5kIHNvb3RoZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGF5TW9kZShkZXBzOiB7XG4gICAgc2NlbmVSZWY6IHsgY3VycmVudDogU2NlbmUgfTtcbiAgICBzZXRTY2VuZTogKHVwZGF0ZXI6IChwcmV2aW91czogU2NlbmUpID0+IFNjZW5lKSA9PiB2b2lkO1xuICAgIHVwZGF0ZUdsb2JhbDogKHBhdGNoOiBQYXJ0aWFsPEdsb2JhbEZ4PikgPT4gdm9pZDtcbiAgICB1cGRhdGVMYXllckZ4OiAobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxMYXllckZ4PikgPT4gdm9pZDtcbiAgICByZXBsYWNlTGF5ZXJGeDogKGxheWVySWQ6IHN0cmluZywgZng6IExheWVyRngpID0+IHZvaWQ7XG4gICAgc2V0U2VsZWN0ZWRJZDogKGlkOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xuICAgIHNldFN0YWdlTW9kZTogKG1vZGU6IFwiYXJyYW5nZVwiIHwgXCJwbGF5XCIpID0+IHZvaWQ7XG4gICAgZW5naW5lUmVmOiB7IGN1cnJlbnQ6IEVuZ2luZUhhbmRsZSB8IG51bGwgfTtcbiAgICBzdGFnZVNpemVSZWY6IHsgY3VycmVudDogU3RhZ2VTaXplIH07XG4gICAgaW1hZ2VJbmZvUmVmOiB7IGN1cnJlbnQ6IFJlY29yZDxzdHJpbmcsIEltYWdlSW5mbz4gfTtcbiAgICBzaG93VG9hc3Q6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gICAgY29uc3Qga2lja1JlZiA9IHVzZVJlZjxLaWNrU3RhdGU+KGVtcHR5S2ljaygpKTtcblxuICAgIGZ1bmN0aW9uIGhpdExheWVyQXQoc2NlbmVYOiBudW1iZXIsIHNjZW5lWTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBoaXRMYXllcihcbiAgICAgICAgICAgIGRlcHMuc2NlbmVSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGRlcHMuaW1hZ2VJbmZvUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBkZXBzLnN0YWdlU2l6ZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgc2NlbmVYLFxuICAgICAgICAgICAgc2NlbmVZLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEtpY2socGF0Y2g6IFBhcnRpYWw8S2lja1N0YXRlPikge1xuICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXRjaCkgYXMgKGtleW9mIEtpY2tTdGF0ZSlbXSkge1xuICAgICAgICAgICAga2lja1trZXldID0gTWF0aC5taW4oMC45LCBraWNrW2tleV0gKyAocGF0Y2hba2V5XSA/PyAwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGVwR2xvYmFsKHBhcmFtOiBrZXlvZiBHbG9iYWxGeCwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBkZXBzLnNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcmV2aW91cy5nbG9iYWxbcGFyYW1dO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgbWF4ID1cbiAgICAgICAgICAgICAgICBwYXJhbSA9PT0gXCJzYXR1cmF0aW9uXCIgfHxcbiAgICAgICAgICAgICAgICBwYXJhbSA9PT0gXCJjb250cmFzdFwiIHx8XG4gICAgICAgICAgICAgICAgcGFyYW0gPT09IFwic3BlZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICAgICAgY29uc3QgbWluID0gcGFyYW0gPT09IFwiZmJab29tXCIgfHwgcGFyYW0gPT09IFwiZmJSb3RhdGVcIiA/IC0xIDogMDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgW3BhcmFtXTogY2xhbXAodmFsdWUgKyBkZWx0YSwgbWluLCBtYXgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5Tm90ZShpbmRleDogbnVtYmVyLCBwYWludEJhY2tncm91bmQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBQTEFZX1BJQU5PLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb3VudCA+IDEgPyBpbmRleCAvIChjb3VudCAtIDEpIDogMDtcbiAgICAgICAgY29uc3QgaHVlRGVnID0gTWF0aC5yb3VuZCgoaW5kZXggLyBjb3VudCkgKiAzNjApO1xuICAgICAgICBpZiAocGFpbnRCYWNrZ3JvdW5kIHx8IGRlcHMuc2NlbmVSZWYuY3VycmVudC5sYXllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZXBzLnNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMuZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgICBiZ0E6IGhzbFRvSGV4KGh1ZURlZywgMC41LCAwLjA5KSxcbiAgICAgICAgICAgICAgICAgICAgYmdCOiBoc2xUb0hleCgoaHVlRGVnICsgNDUpICUgMzYwLCAwLjU1LCAwLjMpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBodWUgPSBpbmRleCAvIGNvdW50O1xuICAgICAgICAgICAgZGVwcy5zZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIGZ4OiB7IC4uLmxheWVyLmZ4LCBodWUgfSxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG93IG5vdGVzIHRodW1wLCBoaWdoIG5vdGVzIHNwYXJrbGUuXG4gICAgICAgIGFkZEtpY2soe1xuICAgICAgICAgICAgem9vbTogMC4xNSAqICgxIC0gcG9zaXRpb24pLFxuICAgICAgICAgICAgcmlwcGxlOiAwLjA4LFxuICAgICAgICAgICAgY2hyb21hOiAwLjA1ICsgMC4xMyAqIHBvc2l0aW9uLFxuICAgICAgICAgICAgc3Ryb2JlOiAwLjEgKiBwb3NpdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaWtlTGF5ZXIoaW5kZXg6IG51bWJlciwgcmVzZXQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkZXBzLnNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzW2luZGV4XTtcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICBkZXBzLnJlcGxhY2VMYXllckZ4KFxuICAgICAgICAgICAgbGF5ZXIuaWQsXG4gICAgICAgICAgICByZXNldCA/IHJlc2V0TGF5ZXJGeEVmZmVjdHMobGF5ZXIuZngpIDogcmFuZG9tTGF5ZXJGeChsYXllci5meCksXG4gICAgICAgICk7XG4gICAgICAgIGRlcHMuc2V0U2VsZWN0ZWRJZChsYXllci5pZCk7XG4gICAgICAgIGFkZEtpY2soeyByaXBwbGU6IDAuMTQsIHN0cm9iZTogMC4wNiB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXNoV29ybGQoKSB7XG4gICAgICAgIGRlcHMuc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAuLi5ERUZBVUxUX0dMT0JBTF9GWCxcbiAgICAgICAgICAgICAgICBiZ01vZGU6IHByZXZpb3VzLmdsb2JhbC5iZ01vZGUsXG4gICAgICAgICAgICAgICAgYmdBOiBwcmV2aW91cy5nbG9iYWwuYmdBLFxuICAgICAgICAgICAgICAgIGJnQjogcHJldmlvdXMuZ2xvYmFsLmJnQixcbiAgICAgICAgICAgICAgICBhdWRpb1JlYWN0OiBwcmV2aW91cy5nbG9iYWwuYXVkaW9SZWFjdCxcbiAgICAgICAgICAgICAgICBwb2ludGVyRm9yY2U6IHByZXZpb3VzLmdsb2JhbC5wb2ludGVyRm9yY2UsXG4gICAgICAgICAgICAgICAgcG9pbnRlclNpemU6IHByZXZpb3VzLmdsb2JhbC5wb2ludGVyU2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludGVyTW9kZTogcHJldmlvdXMuZ2xvYmFsLnBvaW50ZXJNb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgICBkZXBzLmVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQuY29kZTtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgZGVwcy5zZXRTdGFnZU1vZGUoXCJhcnJhbmdlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlc2V0SW5kZXggPSBQTEFZX1BSRVNFVF9DT0RFUy5pbmRleE9mKGNvZGUpO1xuICAgICAgICBpZiAocHJlc2V0SW5kZXggPj0gMCAmJiBwcmVzZXRJbmRleCA8IFdPUkxEX1BSRVNFVFMubGVuZ3RoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJlc2V0ID0gV09STERfUFJFU0VUU1twcmVzZXRJbmRleF07XG4gICAgICAgICAgICBkZXBzLnVwZGF0ZUdsb2JhbChwcmVzZXQuZ2xvYmFsKTtcbiAgICAgICAgICAgIGRlcHMuZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGFkZEtpY2soeyBzdHJvYmU6IDAuMjIsIHpvb206IDAuMDggfSk7XG4gICAgICAgICAgICBkZXBzLnNob3dUb2FzdChgJHtwcmVzZXQuY29kZX0gXHUwMEI3ICR7cHJlc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmeEtleSA9IFBMQVlfRlhfS0VZUy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAoZnhLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKGZ4S2V5LnBhcmFtLCBldmVudC5zaGlmdEtleSA/IC0wLjA4IDogMC4wOCk7XG4gICAgICAgICAgICBhZGRLaWNrKHsgY2hyb21hOiAwLjA0LCBzdHJvYmU6IDAuMDUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gXCJCcmFja2V0TGVmdFwiIHx8IGNvZGUgPT09IFwiQnJhY2tldFJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKFwic3BlZWRcIiwgY29kZSA9PT0gXCJCcmFja2V0UmlnaHRcIiA/IDAuMSA6IC0wLjEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09PSBcIkJhY2tzbGFzaFwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChcInNvbGFyaXplXCIsIGV2ZW50LnNoaWZ0S2V5ID8gLTAuMTUgOiAwLjE1KTtcbiAgICAgICAgICAgIGFkZEtpY2soeyBzdHJvYmU6IDAuMSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVJbmRleCA9IFBMQVlfUElBTk8uZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAobm90ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwbGF5Tm90ZShub3RlSW5kZXgsIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVySW5kZXggPSBQTEFZX0xBWUVSX0tFWVMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxheWVySW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgICAgICAgICAgIHN0cmlrZUxheWVyKGxheWVySW5kZXgsIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICAgICAgd2FzaFdvcmxkKCk7XG4gICAgICAgICAgICBkZXBzLnNob3dUb2FzdChcIldhc2hlZCB0aGUgd29ybGQgY2xlYW5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5LnN0YXJ0c1dpdGgoXCJBcnJvd1wiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSBzdGVwR2xvYmFsKFwic2F0dXJhdGlvblwiLCAwLjA4KTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHN0ZXBHbG9iYWwoXCJzYXR1cmF0aW9uXCIsIC0wLjA4KTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBzdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgMC4wNik7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiKSBzdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgLTAuMDYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhbXBUYXAodTogbnVtYmVyLCB2OiBudW1iZXIsIHN1YnRyYWN0OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IGdsb2JhbCA9IGRlcHMuc2NlbmVSZWYuY3VycmVudC5nbG9iYWw7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBNYXRoLnJvdW5kKGdsb2JhbC5wb2ludGVyTW9kZSk7XG4gICAgICAgIGNvbnN0IHJlYWNoID0gTWF0aC5taW4oMSwgTWF0aC5oeXBvdCh1IC0gMC41LCB2IC0gMC41KSAvIDAuNjIpO1xuICAgICAgICBjb25zdCBzdHJlbmd0aCA9ICgwLjA1ICsgMC4xMyAqIHJlYWNoKSAqIChzdWJ0cmFjdCA/IC0xIDogMSk7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZGVwcy5zdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXJBdCgodSAtIDAuNSkgKiBhc3BlY3QsIDAuNSAtIHYpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIEdyYXZpdHkgcGluY2hlcyB0aGUgbGF5ZXIgaW53YXJkLlxuICAgICAgICAgICAgICAgIGRlcHMudXBkYXRlTGF5ZXJGeChoaXQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGNsYW1wKGhpdC5meC5idWxnZSAtIHN0cmVuZ3RoICogMS40LCAtMSwgMSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtID1cbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gMCA/IFwic3dpcmxcIiA6IG1vZGUgPT09IDIgPyBcImNocm9tYVwiIDogXCJ3YXJwXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IChoaXQuZnggYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KVtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGRlcHMudXBkYXRlTGF5ZXJGeChoaXQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgW3BhcmFtXTogY2xhbXAoY3VycmVudCArIHN0cmVuZ3RoICogMS4yLCAwLCAxKSxcbiAgICAgICAgICAgICAgICB9IGFzIFBhcnRpYWw8TGF5ZXJGeD4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPVxuICAgICAgICAgICAgICAgIG1vZGUgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcInN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInpvb21cIlxuICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNocm9tYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwid2FycFwiO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChwYXJhbSwgc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZEtpY2soXG4gICAgICAgICAgICBtb2RlID09PSAwXG4gICAgICAgICAgICAgICAgPyB7IHN3aXJsOiAwLjEyIH1cbiAgICAgICAgICAgICAgICA6IG1vZGUgPT09IDFcbiAgICAgICAgICAgICAgICAgID8geyB6b29tOiAwLjEyIH1cbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgICA/IHsgY2hyb21hOiAwLjE0IH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IHJpcHBsZTogMC4xMiB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0ZXBLYWxlaWRvKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZGVwcy5zY2VuZVJlZi5jdXJyZW50Lmdsb2JhbC5rYWxlaWRvO1xuICAgICAgICBjb25zdCBuZXh0ID1cbiAgICAgICAgICAgIGN1cnJlbnQgPCAwLjFcbiAgICAgICAgICAgICAgICA/IDAuM1xuICAgICAgICAgICAgICAgIDogY3VycmVudCA8IDAuNDVcbiAgICAgICAgICAgICAgICAgID8gMC42XG4gICAgICAgICAgICAgICAgICA6IGN1cnJlbnQgPCAwLjc1XG4gICAgICAgICAgICAgICAgICAgID8gMC44NVxuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIGRlcHMudXBkYXRlR2xvYmFsKHsga2FsZWlkbzogbmV4dCB9KTtcbiAgICAgICAgYWRkS2ljayh7IHN3aXJsOiAwLjE2LCBzdHJvYmU6IDAuMDggfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc29vdGhlUGxheShzY2VuZVg6IG51bWJlciwgc2NlbmVZOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXJBdChzY2VuZVgsIHNjZW5lWSk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIGRlcHMuc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmlkID09PSBoaXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVyLmZ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhcnA6IGxheWVyLmZ4LndhcnAgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXJsOiBsYXllci5meC5zd2lybCAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlwcGxlOiBsYXllci5meC5yaXBwbGUgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGthbGVpZG86IGxheWVyLmZ4LmthbGVpZG8gKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsYXRlOiBsYXllci5meC5waXhlbGF0ZSAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGxheWVyLmZ4LmJ1bGdlICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IGxheWVyLmZ4Lm1pcnJvciAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hyb21hOiBsYXllci5meC5jaHJvbWEgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsYXllcixcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlcHMuc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gcHJldmlvdXMuZ2xvYmFsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgICAgICAgICAgd2FycDogZy53YXJwICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgc3dpcmw6IGcuc3dpcmwgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICByaXBwbGU6IGcucmlwcGxlICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgem9vbTogZy56b29tICogMC43MixcbiAgICAgICAgICAgICAgICAgICAga2FsZWlkbzogZy5rYWxlaWRvICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBnLm1pcnJvciAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIGNocm9tYTogZy5jaHJvbWEgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjazogZy5mZWVkYmFjayAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHNvbGFyaXplOiBnLnNvbGFyaXplICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2JlOiBnLnN0cm9iZSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRocm93RWNobyhcbiAgICAgICAgZ2VzdHVyZTogeyBzdGFydFU6IG51bWJlcjsgc3RhcnRWOiBudW1iZXI7IHBhdGg6IG51bWJlciB9LFxuICAgICAgICB1OiBudW1iZXIsXG4gICAgICAgIHY6IG51bWJlcixcbiAgICApIHtcbiAgICAgICAgY29uc3QgZHggPSB1IC0gZ2VzdHVyZS5zdGFydFU7XG4gICAgICAgIGNvbnN0IGxpZnQgPSBnZXN0dXJlLnN0YXJ0ViAtIHY7XG4gICAgICAgIGRlcHMuc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gcHJldmlvdXMuZ2xvYmFsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgICAgICAgICAgZmJSb3RhdGU6IGNsYW1wKGcuZmJSb3RhdGUgKyBkeCAqIDAuNywgLTEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBmYlpvb206IGNsYW1wKGcuZmJab29tICsgbGlmdCAqIDAuNywgLTEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjazogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChnLmZlZWRiYWNrLCAwLjMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbigwLjIsIGdlc3R1cmUucGF0aCAqIDAuMjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRyYWlsczogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChnLnRyYWlscywgMC41NSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKDAuMTUsIGdlc3R1cmUucGF0aCAqIDAuMTIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTYsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRLaWNrKHsgem9vbTogMC4xLCBjaHJvbWE6IDAuMDggfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2lja1JlZixcbiAgICAgICAgYWRkS2ljayxcbiAgICAgICAgc3RlcEdsb2JhbCxcbiAgICAgICAgaGFuZGxlUGxheUtleSxcbiAgICAgICAgc3RhbXBUYXAsXG4gICAgICAgIHN0ZXBLYWxlaWRvLFxuICAgICAgICBzb290aGVQbGF5LFxuICAgICAgICB0aHJvd0VjaG8sXG4gICAgfTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBTZXR0aW5ncyB9IGZyb20gXCIuLi9hcHBTZXR0aW5nc1wiO1xuaW1wb3J0IHR5cGUgeyBFbmdpbmVIYW5kbGUsIEZyYW1lU3RhdGUgfSBmcm9tIFwiLi4vZW5naW5lXCI7XG5pbXBvcnQge1xuICAgIGRvd25sb2FkQmxvYixcbiAgICBleHBvcnRGaWxlbmFtZSxcbiAgICBwaWNrUmVjb3JkZXJNaW1lLFxuICAgIHJlc29sdmVFeHBvcnRTaXplLFxuICAgIHR5cGUgRXhwb3J0UmVzb2x1dGlvbklkLFxufSBmcm9tIFwiLi4vZXhwb3J0aW5nXCI7XG5pbXBvcnQgdHlwZSB7IFN0YWdlU2l6ZSB9IGZyb20gXCIuLi9mcmFtZVwiO1xuXG4vKipcbiAqIFZpZGVvIHJlY29yZGluZyBhbmQgUE5HIGV4cG9ydC4gV2hpbGUgY2FwdHVyaW5nLCB0aGUgY2FudmFzIGlzIGxvY2tlZCB0b1xuICogdGhlIGNob3NlbiBleHBvcnQgcmVzb2x1dGlvbiB2aWEgYGV4cG9ydExvY2tSZWZgICh0aGUgZW5naW5lIGxvb3Agc2tpcHNcbiAqIGFkYXB0aXZlLXF1YWxpdHkgY2hhbmdlcyB3aGlsZSBpdCBpcyBzZXQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVjb3JkZXIoZGVwczoge1xuICAgIGNhbnZhc1JlZjogeyBjdXJyZW50OiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgfTtcbiAgICBlbmdpbmVSZWY6IHsgY3VycmVudDogRW5naW5lSGFuZGxlIHwgbnVsbCB9O1xuICAgIHN0YWdlUmVmOiB7IGN1cnJlbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCB9O1xuICAgIHN0YWdlU2l6ZVJlZjogeyBjdXJyZW50OiBTdGFnZVNpemUgfTtcbiAgICBxdWFsaXR5UmVmOiB7IGN1cnJlbnQ6IG51bWJlciB9O1xuICAgIHNjZW5lUmVmOiB7IGN1cnJlbnQ6IFNjZW5lIH07XG4gICAgc2V0dGluZ3NSZWY6IHsgY3VycmVudDogQXBwU2V0dGluZ3MgfTtcbiAgICBtaWNTdHJlYW1SZWY6IHsgY3VycmVudDogTWVkaWFTdHJlYW0gfCBudWxsIH07XG4gICAgZW5zdXJlTWljOiAob3B0aW9ucz86IHtcbiAgICAgICAgdG9hc3RPblN1Y2Nlc3M/OiBib29sZWFuO1xuICAgICAgICB0b2FzdE9uRXJyb3I/OiBib29sZWFuO1xuICAgIH0pID0+IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqIFNoYXJlZCB3aXRoIHVzZU1pYyBcdTIwMTQgdHJ1ZSB3aGlsZSByZWNvcmRpbmcgaW5jbHVkZXMgbWljIGF1ZGlvLiAqL1xuICAgIHJlY29yZGluZ01pY1JlZjogeyBjdXJyZW50OiBib29sZWFuIH07XG4gICAgYnVpbGRGcmFtZTogKCkgPT4gRnJhbWVTdGF0ZTtcbiAgICBzaG93VG9hc3Q6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gICAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcmVjb3JkaW5nV2l0aE1pYywgc2V0UmVjb3JkaW5nV2l0aE1pY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2V4cG9ydFJlcywgc2V0RXhwb3J0UmVzXSA9IHVzZVN0YXRlPEV4cG9ydFJlc29sdXRpb25JZD4oXCIxMDgwXCIpO1xuICAgIGNvbnN0IGV4cG9ydFJlc1JlZiA9IHVzZVJlZjxFeHBvcnRSZXNvbHV0aW9uSWQ+KGV4cG9ydFJlcyk7XG4gICAgZXhwb3J0UmVzUmVmLmN1cnJlbnQgPSBleHBvcnRSZXM7XG5cbiAgICBjb25zdCBleHBvcnRMb2NrUmVmID0gdXNlUmVmPHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB8IG51bGw+KFxuICAgICAgICBudWxsLFxuICAgICk7XG4gICAgY29uc3QgcmVjb3JkZXJSZWYgPSB1c2VSZWY8TWVkaWFSZWNvcmRlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGNodW5rc1JlZiA9IHVzZVJlZjxCbG9iW10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkZXJSZWYuY3VycmVudD8uc3RhdGUgPT09IFwicmVjb3JkaW5nXCIpXG4gICAgICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudC5zdG9wKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gcmVzdG9yZUxpdmVDYW52YXNTaXplKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBkZXBzLmVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzdGFnZSA9IGRlcHMuc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUgfHwgIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgZGVwcy5zdGFnZVNpemVSZWYuY3VycmVudCA9IHsgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHQgfTtcbiAgICAgICAgZW5naW5lLnJlc2l6ZShyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKGRlcHMucXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUV4cG9ydENhbnZhc1NpemUoXG4gICAgICAgIHJlc29sdXRpb25JZDogRXhwb3J0UmVzb2x1dGlvbklkLFxuICAgICAgICBzY3JlZW5TY2FsZSA9IDEsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGRlcHMuZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHJlc29sdmVFeHBvcnRTaXplKFxuICAgICAgICAgICAgcmVzb2x1dGlvbklkLFxuICAgICAgICAgICAgZGVwcy5zdGFnZVNpemVSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHNjcmVlblNjYWxlLFxuICAgICAgICApO1xuICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBzaXplO1xuICAgICAgICBlbmdpbmUucmVzaXplKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAoMSk7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVJlY29yZGluZygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZGVwcy5jYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZGVwcy5lbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIWVuZ2luZSkgcmV0dXJuO1xuICAgICAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50Py5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShcbiAgICAgICAgICAgIGV4cG9ydFJlc1JlZi5jdXJyZW50LFxuICAgICAgICAgICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzaXplKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGluY2x1ZGVNaWMgPSBkZXBzLnNldHRpbmdzUmVmLmN1cnJlbnQucmVjb3JkTWljQXVkaW87XG4gICAgICAgIGlmIChpbmNsdWRlTWljKSB7XG4gICAgICAgICAgICBjb25zdCBvayA9IGF3YWl0IGRlcHMuZW5zdXJlTWljKHtcbiAgICAgICAgICAgICAgICB0b2FzdE9uU3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG9hc3RPbkVycm9yOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIW9rKSBpbmNsdWRlTWljID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmUgZnJhbWUgYXQgdGhlIGxvY2tlZCBzaXplIGJlZm9yZSBjYXB0dXJlU3RyZWFtIHJlYWRzIGRpbWVuc2lvbnMuXG4gICAgICAgIGVuZ2luZS5yZW5kZXIoZGVwcy5idWlsZEZyYW1lKCkpO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjYW52YXMuY2FwdHVyZVN0cmVhbSg2MCk7XG4gICAgICAgIGlmIChpbmNsdWRlTWljKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIGRlcHMubWljU3RyZWFtUmVmLmN1cnJlbnQ/LmdldEF1ZGlvVHJhY2tzKCkgPz9cbiAgICAgICAgICAgICAgICBbXSkge1xuICAgICAgICAgICAgICAgIHN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWltZVR5cGUgPSBwaWNrUmVjb3JkZXJNaW1lKGluY2x1ZGVNaWMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZSxcbiAgICAgICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IDE4XzAwMF8wMDAsXG4gICAgICAgICAgICAgICAgLi4uKGluY2x1ZGVNaWMgPyB7IGF1ZGlvQml0c1BlclNlY29uZDogMjU2XzAwMCB9IDoge30pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaHVua3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgZGVwcy5yZWNvcmRpbmdNaWNSZWYuY3VycmVudCA9IGluY2x1ZGVNaWM7XG4gICAgICAgICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zaXplKSBjaHVua3NSZWYuY3VycmVudC5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSAocmVjb3JkZXIubWltZVR5cGUgfHwgXCJ2aWRlby93ZWJtXCIpLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICBcIm1wNFwiLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPyBcIm1wNFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ3ZWJtXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGNodW5rc1JlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZGVyLm1pbWVUeXBlIHx8IFwidmlkZW8vd2VibVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNodW5rc1JlZi5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgICAgZGVwcy5yZWNvcmRpbmdNaWNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzdG9yZUxpdmVDYW52YXNTaXplKCk7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9iKFxuICAgICAgICAgICAgICAgICAgICBibG9iLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlbmFtZShkZXBzLnNjZW5lUmVmLmN1cnJlbnQubmFtZSwgZXh0ZW5zaW9uKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFJlY29yZGluZ1dpdGhNaWMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFJlY29yZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkZXIuc3RhcnQoMjUwKTtcbiAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQgPSByZWNvcmRlcjtcbiAgICAgICAgICAgIHNldFJlY29yZGluZ1dpdGhNaWMoaW5jbHVkZU1pYyk7XG4gICAgICAgICAgICBzZXRSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBkZXBzLnNob3dUb2FzdChcbiAgICAgICAgICAgICAgICBpbmNsdWRlTWljXG4gICAgICAgICAgICAgICAgICAgID8gYFJlY29yZGluZyAke3NpemUud2lkdGh9XHUwMEQ3JHtzaXplLmhlaWdodH0gXHUwMEI3IG1pY2BcbiAgICAgICAgICAgICAgICAgICAgOiBgUmVjb3JkaW5nICR7c2l6ZS53aWR0aH1cdTAwRDcke3NpemUuaGVpZ2h0fWAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGRlcHMucmVjb3JkaW5nTWljUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNldFJlY29yZGluZ1dpdGhNaWMoZmFsc2UpO1xuICAgICAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpO1xuICAgICAgICAgICAgZGVwcy5zaG93VG9hc3QoXCJSZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBoZXJlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0UG5nKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBkZXBzLmVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkZXBzLmNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVuZ2luZSB8fCAhY2FudmFzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNpemUgPSBhcHBseUV4cG9ydENhbnZhc1NpemUoZXhwb3J0UmVzUmVmLmN1cnJlbnQsIDMpO1xuICAgICAgICBpZiAoIXNpemUpIHJldHVybjtcbiAgICAgICAgZW5naW5lLnJlbmRlcihkZXBzLmJ1aWxkRnJhbWUoKSk7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgIGlmIChibG9iKSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9iKFxuICAgICAgICAgICAgICAgICAgICBibG9iLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRGaWxlbmFtZShkZXBzLnNjZW5lUmVmLmN1cnJlbnQubmFtZSwgXCJwbmdcIiksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkZXBzLnNob3dUb2FzdChgRXhwb3J0ZWQgJHtzaXplLndpZHRofVx1MDBENyR7c2l6ZS5oZWlnaHR9YCk7XG4gICAgICAgICAgICB9IGVsc2UgZGVwcy5zaG93VG9hc3QoXCJFeHBvcnQgZmFpbGVkXCIpO1xuICAgICAgICB9LCBcImltYWdlL3BuZ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWNvcmRpbmcsXG4gICAgICAgIHJlY29yZGluZ1dpdGhNaWMsXG4gICAgICAgIGV4cG9ydFJlcyxcbiAgICAgICAgc2V0RXhwb3J0UmVzLFxuICAgICAgICBleHBvcnRMb2NrUmVmLFxuICAgICAgICB0b2dnbGVSZWNvcmRpbmcsXG4gICAgICAgIGV4cG9ydFBuZyxcbiAgICB9O1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZGVjb2RlU2NlbmUsIGVuY29kZVNjZW5lLCB0eXBlIFNjZW5lIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuXG4vKipcbiAqIFVuZG8vcmVkbyBvdmVyIGVuY29kZWQgc2NlbmUgc25hcHNob3RzLiBFZGl0cyBhcmUgZGVib3VuY2VkIHNvIHNsaWRlclxuICogZHJhZ3MgYW5kIGtleSByaWZmcyBjb2FsZXNjZSBpbnRvIGEgc2luZ2xlIGhpc3RvcnkgZW50cnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTY2VuZUhpc3RvcnkoZGVwczoge1xuICAgIHNjZW5lOiBTY2VuZTtcbiAgICBzY2VuZVJlZjogeyBjdXJyZW50OiBTY2VuZSB9O1xuICAgIC8qKiBBcHBseSBhIHJlc3RvcmVkIHNjZW5lOiBzZXQgc3RhdGUsIHBydW5lIHNlbGVjdGlvbiwgcmVoeWRyYXRlIG1lZGlhLiAqL1xuICAgIHJlc3RvcmVTY2VuZTogKHNjZW5lOiBTY2VuZSkgPT4gdm9pZDtcbiAgICBzaG93VG9hc3Q6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gICAgY29uc3QgaGlzdG9yeVJlZiA9IHVzZVJlZjx7IHN0YWNrOiBzdHJpbmdbXTsgaW5kZXg6IG51bWJlciB9Pih7XG4gICAgICAgIHN0YWNrOiBbXSxcbiAgICAgICAgaW5kZXg6IC0xLFxuICAgIH0pO1xuICAgIGNvbnN0IHNraXBSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNraXBSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2tpcFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBlbmNvZGVTY2VuZShkZXBzLnNjZW5lKTtcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LnN0YWNrW2hpc3RvcnkuaW5kZXhdID09PSBzbmFwc2hvdCkgcmV0dXJuO1xuICAgICAgICAgICAgaGlzdG9yeS5zdGFjayA9IGhpc3Rvcnkuc3RhY2suc2xpY2UoMCwgaGlzdG9yeS5pbmRleCArIDEpO1xuICAgICAgICAgICAgaGlzdG9yeS5zdGFjay5wdXNoKHNuYXBzaG90KTtcbiAgICAgICAgICAgIGlmIChoaXN0b3J5LnN0YWNrLmxlbmd0aCA+IDgwKSBoaXN0b3J5LnN0YWNrLnNoaWZ0KCk7XG4gICAgICAgICAgICBoaXN0b3J5LmluZGV4ID0gaGlzdG9yeS5zdGFjay5sZW5ndGggLSAxO1xuICAgICAgICB9LCA0MDApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW2RlcHMuc2NlbmVdKTtcblxuICAgIGZ1bmN0aW9uIGFwcGx5U25hcHNob3Qoc25hcHNob3Q6IHN0cmluZykge1xuICAgICAgICBza2lwUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBkZXBzLnJlc3RvcmVTY2VuZShkZWNvZGVTY2VuZShzbmFwc2hvdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuZG9TY2VuZSgpIHtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGVuY29kZVNjZW5lKGRlcHMuc2NlbmVSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChoaXN0b3J5LmluZGV4ID49IDAgJiYgaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSAhPT0gY3VycmVudCkge1xuICAgICAgICAgICAgLy8gQSBjaGFuZ2UgaXMgc3RpbGwgaW5zaWRlIHRoZSBkZWJvdW5jZSB3aW5kb3cgXHUyMDE0IGNvbW1pdCBpdCBmaXJzdFxuICAgICAgICAgICAgLy8gc28gcmVkbyBjYW4gYnJpbmcgaXQgYmFjay5cbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sgPSBoaXN0b3J5LnN0YWNrLnNsaWNlKDAsIGhpc3RvcnkuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgIGhpc3RvcnkuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA8PSAwKSB7XG4gICAgICAgICAgICBkZXBzLnNob3dUb2FzdChcIk5vdGhpbmcgdG8gdW5kb1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXN0b3J5LmluZGV4LS07XG4gICAgICAgIGFwcGx5U25hcHNob3QoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSk7XG4gICAgICAgIGRlcHMuc2hvd1RvYXN0KFwiVW5kb1wiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWRvU2NlbmUoKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChoaXN0b3J5LmluZGV4ID49IGhpc3Rvcnkuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZGVwcy5zaG93VG9hc3QoXCJOb3RoaW5nIHRvIHJlZG9cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaGlzdG9yeS5pbmRleCsrO1xuICAgICAgICBhcHBseVNuYXBzaG90KGhpc3Rvcnkuc3RhY2tbaGlzdG9yeS5pbmRleF0pO1xuICAgICAgICBkZXBzLnNob3dUb2FzdChcIlJlZG9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdW5kb1NjZW5lLCByZWRvU2NlbmUgfTtcbn1cbiIsICJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG4vKiogVHJhbnNpZW50IGJvdHRvbS1jZW50ZXIgbm90aWZpY2F0aW9uLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvYXN0KCkge1xuICAgIGNvbnN0IFt0b2FzdCwgc2V0VG9hc3RdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgdGltZXJSZWYgPSB1c2VSZWYoMCk7XG5cbiAgICBmdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHNldFRvYXN0KG1lc3NhZ2UpO1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyUmVmLmN1cnJlbnQpO1xuICAgICAgICB0aW1lclJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VG9hc3QoXCJcIiksIDI2MDApO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvYXN0LCBzaG93VG9hc3QgfTtcbn1cbiIsICIvKiogR2xvYmFsIHN0eWxlc2hlZXQgaW5qZWN0ZWQgb25jZSBieSB0aGUgQXBwIHNoZWxsLiAqL1xuZXhwb3J0IGNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rTW9ubzp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcblxuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0tdm9pZDogIzA4MDgwYTtcbiAgLS1wYW5lbDogIzEwMTAxNDtcbiAgLS1wYW5lbC0yOiAjMTUxNTFhO1xuICAtLWxpbmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIC0tbGluZS1ob3Q6IHJnYmEoMjMyLCAyMzAsIDIyNCwgMC4zNSk7XG4gIC0tYWNpZDogI2U4ZTZlMDtcbiAgLS12aW9sZXQ6ICM4YTg2OTA7XG4gIC0taG90OiAjYTg3ODgwO1xuICAtLXBhcGVyOiAjZThlNmUwO1xuICAtLW11dGU6ICM4NTg1OGY7XG4gIC0tdHJhY2s6ICMzMDMwMzg7XG59XG5cbmh0bWwsIGJvZHksICNhcHAgeyBtYXJnaW46IDA7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7IG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7IH1cbmJvZHkgeyBmb250OiAxM3B4LzEuNDUgXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlOyBjb2xvcjogdmFyKC0tcGFwZXIpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2lkKTsgY29sb3I6IHZhcigtLXZvaWQpOyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjayk7IGJvcmRlci1yYWRpdXM6IDA7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4ua25vYi1yYW5nZSB7XG4gIC0tZmlsbDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNpZCkgMCB2YXIoLS1maWxsKSwgdmFyKC0tdHJhY2spIHZhcigtLWZpbGwpIDEwMCUpO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbn1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHZhcigtLXRyYWNrKTsgfVxuLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IH1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG59XG5cbkBrZXlmcmFtZXMgcmVjLWJsaW5rIHsgMCUsIDQ4JSB7IG9wYWNpdHk6IDE7IH0gNTIlLCAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfSB9XG4ucmVjLWRvdCB7IGFuaW1hdGlvbjogcmVjLWJsaW5rIDEuMXMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBmYWRlLXVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cbi5wb3AgeyBhbmltYXRpb246IGZhZGUtdXAgMTQwbXMgY3ViaWMtYmV6aWVyKC4yLC44LC4yLDEpIGJvdGg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXSB7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjBweDsgY3Vyc29yOiBwb2ludGVyOyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIgeyBwYWRkaW5nOiAxcHg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2ggeyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IH1cbmA7XG4iLCAiaW1wb3J0IHsgdXNlQXV0aCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIERFRkFVTFRfR0xPQkFMX0ZYLFxuICAgIE1BWF9MQVlFUlMsXG4gICAgUE9JTlRFUl9NT0RFUyxcbiAgICBjbGFtcCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZGVjb2RlU2NlbmUsXG4gICAgZW5jb2RlU2NlbmUsXG4gICAgdHlwZSBHbG9iYWxGeCxcbiAgICB0eXBlIExheWVyRngsXG4gICAgdHlwZSBTY2VuZSxcbiAgICB0eXBlIFNjZW5lTGF5ZXIsXG4gICAgdHlwZSBTY2VuZU1ldGEsXG59IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGxvYWRTZXR0aW5ncywgc2F2ZVNldHRpbmdzLCB0eXBlIEFwcFNldHRpbmdzIH0gZnJvbSBcIi4vYXBwU2V0dGluZ3NcIjtcbmltcG9ydCB7IExheWVyUGFuZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL0xheWVyUGFuZWxcIjtcbmltcG9ydCB7IExheWVyc1NpZGViYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0xheWVyc1NpZGViYXJcIjtcbmltcG9ydCB7IEhlbHBNb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVscE1vZGFsXCI7XG5pbXBvcnQgeyBTZXR0aW5nc01vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9TZXR0aW5nc01vZGFsXCI7XG5pbXBvcnQgeyBUb3BCYXIsIHR5cGUgU3RhZ2VNb2RlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Ub3BCYXJcIjtcbmltcG9ydCB7IFdvcmxkUGFuZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL1dvcmxkUGFuZWxcIjtcbmltcG9ydCB7XG4gICAgY3JlYXRlRW5naW5lLFxuICAgIHR5cGUgRW5naW5lSGFuZGxlLFxuICAgIHR5cGUgRnJhbWVTdGF0ZSxcbiAgICB0eXBlIFBvaW50ZXJTdGF0ZSxcbn0gZnJvbSBcIi4vZW5naW5lXCI7XG5pbXBvcnQge1xuICAgIGJ1aWxkRnJhbWVTdGF0ZSxcbiAgICBoaXRMYXllcixcbiAgICBzZWxlY3Rpb25Cb3hGb3IsXG4gICAgdHlwZSBTdGFnZVNpemUsXG59IGZyb20gXCIuL2ZyYW1lXCI7XG5pbXBvcnQgeyB1c2VNZWRpYUxpYnJhcnkgfSBmcm9tIFwiLi9ob29rcy91c2VNZWRpYUxpYnJhcnlcIjtcbmltcG9ydCB7IHVzZU1pYyB9IGZyb20gXCIuL2hvb2tzL3VzZU1pY1wiO1xuaW1wb3J0IHsgdXNlUGxheU1vZGUgfSBmcm9tIFwiLi9ob29rcy91c2VQbGF5TW9kZVwiO1xuaW1wb3J0IHsgdXNlUmVjb3JkZXIgfSBmcm9tIFwiLi9ob29rcy91c2VSZWNvcmRlclwiO1xuaW1wb3J0IHsgdXNlU2NlbmVIaXN0b3J5IH0gZnJvbSBcIi4vaG9va3MvdXNlU2NlbmVIaXN0b3J5XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCIuL2hvb2tzL3VzZVRvYXN0XCI7XG5pbXBvcnQgeyBtdXRhdGVHbG9iYWxGeCwgcmFuZG9tR2xvYmFsRngsIHJhbmRvbUxheWVyRnggfSBmcm9tIFwiLi9wcmVzZXRzXCI7XG5pbXBvcnQgeyBsb2FkQXV0b3NhdmUsIG5ld0lkLCBzYXZlQXV0b3NhdmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgR0xPQkFMX0NTUyB9IGZyb20gXCIuL3RoZW1lXCI7XG5cbmZ1bmN0aW9uIGVtcHR5U2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiB7IG5hbWU6IFwiVW50aXRsZWRcIiwgbGF5ZXJzOiBbXSwgZ2xvYmFsOiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IHNjZW5lc1F1ZXJ5ID0gdXNlUXVlcnk8eyByZWFkeTogYm9vbGVhbjsgaXRlbXM6IFNjZW5lTWV0YVtdIH0+KFxuICAgICAgICBcInNjZW5lc1wiLFxuICAgICk7XG4gICAgY29uc3Qgc2F2ZVNjZW5lTXV0YXRpb24gPSB1c2VNdXRhdGlvbjxcbiAgICAgICAgW3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10sXG4gICAgICAgIHsgaWQ6IHN0cmluZyB9XG4gICAgPihcInNhdmVTY2VuZVwiKTtcbiAgICBjb25zdCBkZWxldGVTY2VuZU11dGF0aW9uID0gdXNlTXV0YXRpb248W3N0cmluZ10sIHZvaWQ+KFwiZGVsZXRlU2NlbmVcIik7XG4gICAgY29uc3QgZ2V0U2NlbmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uPFxuICAgICAgICBbc3RyaW5nXSxcbiAgICAgICAgeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRhdGE6IHN0cmluZyB9XG4gICAgPihcImdldFNjZW5lXCIpO1xuXG4gICAgY29uc3QgW3NjZW5lLCBzZXRTY2VuZV0gPSB1c2VTdGF0ZTxTY2VuZT4oZW1wdHlTY2VuZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3N0YWdlTW9kZSwgc2V0U3RhZ2VNb2RlXSA9IHVzZVN0YXRlPFN0YWdlTW9kZT4oXCJhcnJhbmdlXCIpO1xuICAgIGNvbnN0IFt1aUhpZGRlbiwgc2V0VWlIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmcm96ZW4sIHNldEZyb3plbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzY2VuZXNPcGVuLCBzZXRTY2VuZXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaGVscE9wZW4sIHNldEhlbHBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2V0dGluZ3NPcGVuLCBzZXRTZXR0aW5nc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGU8QXBwU2V0dGluZ3M+KCgpID0+IGxvYWRTZXR0aW5ncygpKTtcbiAgICBjb25zdCBbc2VydmVyU2NlbmVJZCwgc2V0U2VydmVyU2NlbmVJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtkcmFnT3Zlciwgc2V0RHJhZ092ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlbmdpbmVFcnJvciwgc2V0RW5naW5lRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBzdGFnZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGVuZ2luZVJlZiA9IHVzZVJlZjxFbmdpbmVIYW5kbGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzY2VuZVJlZiA9IHVzZVJlZihzY2VuZSk7XG4gICAgY29uc3Qgc3RhZ2VNb2RlUmVmID0gdXNlUmVmKHN0YWdlTW9kZSk7XG4gICAgY29uc3QgZnJvemVuUmVmID0gdXNlUmVmKGZyb3plbik7XG4gICAgY29uc3QgdGltZVJlZiA9IHVzZVJlZihNYXRoLnJhbmRvbSgpICogOTApO1xuICAgIGNvbnN0IGF1ZGlvTGV2ZWxSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3Qgc3BlY3RydW1SZWYgPSB1c2VSZWYobmV3IFVpbnQ4QXJyYXkoMTI4KSk7XG4gICAgY29uc3QgbGFzdFBvaW50ZXJSZWYgPSB1c2VSZWYoeyB4OiAwLjUsIHk6IDAuNSwgYXQ6IDAgfSk7XG4gICAgY29uc3QgcG9pbnRlclJlZiA9IHVzZVJlZjxQb2ludGVyU3RhdGU+KHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLjUsXG4gICAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgICAgdmVsb2NpdHlZOiAwLFxuICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBkcmFnUmVmID0gdXNlUmVmPHtcbiAgICAgICAgbGF5ZXJJZDogc3RyaW5nO1xuICAgICAgICBzdGFydFg6IG51bWJlcjtcbiAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgIGZ4WDogbnVtYmVyO1xuICAgICAgICBmeFk6IG51bWJlcjtcbiAgICB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc3RhZ2VTaXplUmVmID0gdXNlUmVmPFN0YWdlU2l6ZT4oeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH0pO1xuICAgIGNvbnN0IHF1YWxpdHlSZWYgPSB1c2VSZWYoMS41KTtcbiAgICBjb25zdCBkcmFnUmFmUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IGRyYWdQb2ludFJlZiA9IHVzZVJlZih7IHg6IDAsIHk6IDAgfSk7XG4gICAgY29uc3QgaGVscE9wZW5SZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHNldHRpbmdzT3BlblJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3Qgc2V0dGluZ3NSZWYgPSB1c2VSZWYoc2V0dGluZ3MpO1xuICAgIGNvbnN0IHJlY29yZGluZ01pY1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgcGxheUdlc3R1cmVSZWYgPSB1c2VSZWY8e1xuICAgICAgICBzdGFydFU6IG51bWJlcjtcbiAgICAgICAgc3RhcnRWOiBudW1iZXI7XG4gICAgICAgIGxhc3RVOiBudW1iZXI7XG4gICAgICAgIGxhc3RWOiBudW1iZXI7XG4gICAgICAgIHBhdGg6IG51bWJlcjtcbiAgICAgICAgYXQ6IG51bWJlcjtcbiAgICAgICAgc2hpZnQ6IGJvb2xlYW47XG4gICAgfSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGxhc3RUYXBBdFJlZiA9IHVzZVJlZigwKTtcblxuICAgIHNjZW5lUmVmLmN1cnJlbnQgPSBzY2VuZTtcbiAgICBzdGFnZU1vZGVSZWYuY3VycmVudCA9IHN0YWdlTW9kZTtcbiAgICBmcm96ZW5SZWYuY3VycmVudCA9IGZyb3plbjtcbiAgICBoZWxwT3BlblJlZi5jdXJyZW50ID0gaGVscE9wZW47XG4gICAgc2V0dGluZ3NPcGVuUmVmLmN1cnJlbnQgPSBzZXR0aW5nc09wZW47XG4gICAgc2V0dGluZ3NSZWYuY3VycmVudCA9IHNldHRpbmdzO1xuXG4gICAgY29uc3QgeyB0b2FzdCwgc2hvd1RvYXN0IH0gPSB1c2VUb2FzdCgpO1xuXG4gICAgY29uc3QgbWVkaWEgPSB1c2VNZWRpYUxpYnJhcnkoe1xuICAgICAgICBlbmdpbmVSZWYsXG4gICAgICAgIHNjZW5lUmVmLFxuICAgICAgICBzZXRTY2VuZSxcbiAgICAgICAgc2V0U2VsZWN0ZWRJZCxcbiAgICAgICAgc2hvd1RvYXN0LFxuICAgICAgICBvbkF1ZGlvSW1wb3J0ZWQ6ICgpID0+IHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IDAuNTUgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBtaWMgPSB1c2VNaWMoe1xuICAgICAgICBhdWRpb0NvbnRleHRSZWY6IG1lZGlhLmF1ZGlvQ29udGV4dFJlZixcbiAgICAgICAgc2NlbmVSZWYsXG4gICAgICAgIGF1ZGlvTGV2ZWxSZWYsXG4gICAgICAgIHVwZGF0ZUdsb2JhbCxcbiAgICAgICAgc2hvd1RvYXN0LFxuICAgICAgICByZWNvcmRpbmdNaWNSZWYsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwbGF5TW9kZSA9IHVzZVBsYXlNb2RlKHtcbiAgICAgICAgc2NlbmVSZWYsXG4gICAgICAgIHNldFNjZW5lLFxuICAgICAgICB1cGRhdGVHbG9iYWwsXG4gICAgICAgIHVwZGF0ZUxheWVyRngsXG4gICAgICAgIHJlcGxhY2VMYXllckZ4LFxuICAgICAgICBzZXRTZWxlY3RlZElkLFxuICAgICAgICBzZXRTdGFnZU1vZGUsXG4gICAgICAgIGVuZ2luZVJlZixcbiAgICAgICAgc3RhZ2VTaXplUmVmLFxuICAgICAgICBpbWFnZUluZm9SZWY6IG1lZGlhLmltYWdlSW5mb1JlZixcbiAgICAgICAgc2hvd1RvYXN0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVjb3JkZXIgPSB1c2VSZWNvcmRlcih7XG4gICAgICAgIGNhbnZhc1JlZixcbiAgICAgICAgZW5naW5lUmVmLFxuICAgICAgICBzdGFnZVJlZixcbiAgICAgICAgc3RhZ2VTaXplUmVmLFxuICAgICAgICBxdWFsaXR5UmVmLFxuICAgICAgICBzY2VuZVJlZixcbiAgICAgICAgc2V0dGluZ3NSZWYsXG4gICAgICAgIG1pY1N0cmVhbVJlZjogbWljLm1pY1N0cmVhbVJlZixcbiAgICAgICAgZW5zdXJlTWljOiBtaWMuZW5zdXJlTWljLFxuICAgICAgICByZWNvcmRpbmdNaWNSZWYsXG4gICAgICAgIGJ1aWxkRnJhbWUsXG4gICAgICAgIHNob3dUb2FzdCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VTY2VuZUhpc3Rvcnkoe1xuICAgICAgICBzY2VuZSxcbiAgICAgICAgc2NlbmVSZWYsXG4gICAgICAgIHJlc3RvcmVTY2VuZSxcbiAgICAgICAgc2hvd1RvYXN0LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPVxuICAgICAgICBzY2VuZS5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3RlZElkKSA/PyBudWxsO1xuICAgIGNvbnN0IHNjZW5lTGlzdCA9IHNjZW5lc1F1ZXJ5Py5pdGVtcyA/PyBbXTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY2VuZSB1cGRhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVHbG9iYWwocGF0Y2g6IFBhcnRpYWw8R2xvYmFsRng+KSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgZ2xvYmFsOiB7IC4uLnByZXZpb3VzLmdsb2JhbCwgLi4ucGF0Y2ggfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxMYXllckZ4Pikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmxheWVyLCBmeDogeyAuLi5sYXllci5meCwgLi4ucGF0Y2ggfSB9XG4gICAgICAgICAgICAgICAgICAgIDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBmeDogTGF5ZXJGeCkge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWQgPyB7IC4uLmxheWVyLCBmeCB9IDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUxheWVyKGxheWVySWQ6IHN0cmluZywgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldmlvdXMubGF5ZXJzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBpbmRleCArIGRlbHRhO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBuZXh0IDwgMCB8fCBuZXh0ID49IHByZXZpb3VzLmxheWVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBbbGF5ZXJdID0gbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKG5leHQsIDAsIGxheWVyKTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHVwbGljYXRlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzLmxheWVycy5sZW5ndGggPj0gTUFYX0xBWUVSUykgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2aW91cy5sYXllcnMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gcHJldmlvdXMubGF5ZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvcHk6IFNjZW5lTGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgaW1hZ2VJZDogc291cmNlLmltYWdlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogYCR7c291cmNlLm5hbWV9IGNvcHlgLFxuICAgICAgICAgICAgICAgIG1lZGlhS2luZDogc291cmNlLm1lZGlhS2luZCxcbiAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zb3VyY2UuZngsXG4gICAgICAgICAgICAgICAgICAgIHg6IHNvdXJjZS5meC54ICsgMC4wNixcbiAgICAgICAgICAgICAgICAgICAgeTogc291cmNlLmZ4LnkgLSAwLjA2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgY29weSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNvcHkuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldmlvdXMsIGxheWVycyB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkID0gcHJldmlvdXMubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBwcmV2aW91cy5sYXllcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgIT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHJlbW92ZWQgJiZcbiAgICAgICAgICAgICAgICAhbGF5ZXJzLnNvbWUoKGxheWVyKSA9PiBsYXllci5pbWFnZUlkID09PSByZW1vdmVkLmltYWdlSWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtZWRpYS5mb3JnZXRJbWFnZShyZW1vdmVkLmltYWdlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldmlvdXMsIGxheWVycyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZCgoY3VycmVudCkgPT4gKGN1cnJlbnQgPT09IGxheWVySWQgPyBudWxsIDogY3VycmVudCkpO1xuICAgIH1cblxuICAgIC8qKiBBcHBseSBhIHJlc3RvcmVkIHNjZW5lICh1bmRvL3JlZG8gb3Igc2VydmVyIGxvYWQpLiAqL1xuICAgIGZ1bmN0aW9uIHJlc3RvcmVTY2VuZShyZXN0b3JlZDogU2NlbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgc2V0U2NlbmUocmVzdG9yZWQpO1xuICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gcmVzdG9yZWQ7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoKGN1cnJlbnQpID0+XG4gICAgICAgICAgICByZXN0b3JlZC5sYXllcnMuc29tZSgobGF5ZXIpID0+IGxheWVyLmlkID09PSBjdXJyZW50KVxuICAgICAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgKTtcbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgcmV0dXJuIG1lZGlhLmh5ZHJhdGVTY2VuZUltYWdlcyhyZXN0b3JlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhb3NTY2VuZSgpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBnbG9iYWw6IHJhbmRvbUdsb2JhbEZ4KHByZXZpb3VzLmdsb2JhbCksXG4gICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLmxheWVyLFxuICAgICAgICAgICAgICAgIGZ4OiByYW5kb21MYXllckZ4KGxheWVyLmZ4KSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNldHRpbmdzKHBhdGNoOiBQYXJ0aWFsPEFwcFNldHRpbmdzPikge1xuICAgICAgICBzZXRTZXR0aW5ncygocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLnByZXZpb3VzLCAuLi5wYXRjaCB9O1xuICAgICAgICAgICAgc2F2ZVNldHRpbmdzKG5leHQpO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZW5naW5lIGxvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBidWlsZEZyYW1lKCk6IEZyYW1lU3RhdGUge1xuICAgICAgICByZXR1cm4gYnVpbGRGcmFtZVN0YXRlKHtcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgaW5mbzogbWVkaWEuaW1hZ2VJbmZvUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBzdGFnZVNpemU6IHN0YWdlU2l6ZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgdGltZTogdGltZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgYXVkaW86IGF1ZGlvTGV2ZWxSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHBvaW50ZXI6IHBvaW50ZXJSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGtpY2s6IHBsYXlNb2RlLmtpY2tSZWYuY3VycmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXN0YWdlKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGVuZ2luZTogRW5naW5lSGFuZGxlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5naW5lID0gY3JlYXRlRW5naW5lKGNhbnZhcyk7XG4gICAgICAgIH0gY2F0Y2ggKGNhdXNlKSB7XG4gICAgICAgICAgICBzZXRFbmdpbmVFcnJvcihcbiAgICAgICAgICAgICAgICBjYXVzZSBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICAgICAgICAgID8gY2F1c2UubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA6IFwiV2ViR0wgZmFpbGVkIHRvIHN0YXJ0XCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZVJlZi5jdXJyZW50ID0gZW5naW5lO1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHN0YWdlU2l6ZVJlZi5jdXJyZW50ID0geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9O1xuICAgICAgICAgICAgY29uc3QgbG9jayA9IHJlY29yZGVyLmV4cG9ydExvY2tSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc2l6ZShsb2NrLndpZHRoLCBsb2NrLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5yZXNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXNpemUoKTtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIocmVzaXplKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzdGFnZSk7XG5cbiAgICAgICAgbGV0IHJhZiA9IDA7XG4gICAgICAgIGxldCBsYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGxldCBzbG93U3RyZWFrID0gMDtcbiAgICAgICAgbGV0IGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICBjb25zdCB0aWNrID0gKG5vdzogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkdCA9IE1hdGgubWluKDAuMSwgKG5vdyAtIGxhc3QpIC8gMTAwMCk7XG4gICAgICAgICAgICBsYXN0ID0gbm93O1xuXG4gICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IG1pYy5hbmFseXNlclJlZi5jdXJyZW50O1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IDA7XG4gICAgICAgICAgICBpZiAoYW5hbHlzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BlY3RydW1SZWYuY3VycmVudC5sZW5ndGggIT09IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWN0cnVtUmVmLmN1cnJlbnQgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShzcGVjdHJ1bVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5zID0gc3BlY3RydW1SZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBsZXQgYmFzcyA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gYmluc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAxMCkgYmFzcyArPSBiaW5zW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgKChiYXNzIC8gMTApICogMiArIHRvdGFsIC8gYmlucy5sZW5ndGgpIC8gMyAvIDE0OCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZyb3plblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGltZVJlZi5jdXJyZW50ICs9IGR0ICogc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuc3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1lZGlhTGV2ZWwgPSBtZWRpYS5zeW5jTGl2ZU1lZGlhVGV4dHVyZXMoXG4gICAgICAgICAgICAgICAgZW5naW5lLFxuICAgICAgICAgICAgICAgIHRpbWVSZWYuY3VycmVudCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0YXJnZXQgPSBNYXRoLm1heCh0YXJnZXQsIG1lZGlhTGV2ZWwpO1xuICAgICAgICAgICAgYXVkaW9MZXZlbFJlZi5jdXJyZW50ICs9ICh0YXJnZXQgLSBhdWRpb0xldmVsUmVmLmN1cnJlbnQpICogMC4yODtcblxuICAgICAgICAgICAgLy8gUGVyY3Vzc2l2ZSBwbGF5LW1vZGUga2lja3MgZmFkZSBvdXQgb24gdGhlaXIgb3duLlxuICAgICAgICAgICAgY29uc3Qga2ljayA9IHBsYXlNb2RlLmtpY2tSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IGtpY2tEZWNheSA9IE1hdGguZXhwKC1kdCAqIDQuNSk7XG4gICAgICAgICAgICBraWNrLnpvb20gKj0ga2lja0RlY2F5O1xuICAgICAgICAgICAga2ljay5zdHJvYmUgKj0ga2lja0RlY2F5O1xuICAgICAgICAgICAga2ljay5jaHJvbWEgKj0ga2lja0RlY2F5O1xuICAgICAgICAgICAga2ljay5yaXBwbGUgKj0ga2lja0RlY2F5O1xuICAgICAgICAgICAga2ljay5zd2lybCAqPSBraWNrRGVjYXk7XG5cbiAgICAgICAgICAgIC8vIEFkYXB0aXZlIHF1YWxpdHk6IGRyb3AgaW50ZXJuYWwgcmVzb2x1dGlvbiB3aGVuIGZyYW1lcyBydW4gc2xvdyxcbiAgICAgICAgICAgIC8vIGNyZWVwIGJhY2sgdXAgd2hlbiB0aGVyZSBpcyBoZWFkcm9vbS4gU2tpcCB3aGlsZSBleHBvcnQtbG9ja2VkLlxuICAgICAgICAgICAgaWYgKCFyZWNvcmRlci5leHBvcnRMb2NrUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZHQgPiAwLjAyNCkge1xuICAgICAgICAgICAgICAgICAgICBzbG93U3RyZWFrKys7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHQgPCAwLjAxNCkge1xuICAgICAgICAgICAgICAgICAgICBmYXN0U3RyZWFrKys7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmYXN0U3RyZWFrID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNsb3dTdHJlYWsgPiAzMCAmJiBxdWFsaXR5UmVmLmN1cnJlbnQgPiAwLjkpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eVJlZi5jdXJyZW50ID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgLSAwLjIsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKHF1YWxpdHlSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmFzdFN0cmVhayA+IDYwMCAmJiBxdWFsaXR5UmVmLmN1cnJlbnQgPCAxLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbGl0eVJlZi5jdXJyZW50ID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgKyAwLjIsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKHF1YWxpdHlSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZW5naW5lLnJlbmRlcihidWlsZEZyYW1lKCkpO1xuICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9O1xuICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgbGFzdCB3b3JraW5nIHNjZW5lLlxuICAgICAgICBjb25zdCBzYXZlZCA9IGxvYWRBdXRvc2F2ZSgpO1xuICAgICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgICAgIHNldFNjZW5lKHNhdmVkKTtcbiAgICAgICAgICAgIHNjZW5lUmVmLmN1cnJlbnQgPSBzYXZlZDtcbiAgICAgICAgICAgIHZvaWQgbWVkaWEuaHlkcmF0ZVNjZW5lSW1hZ2VzKHNhdmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgbWVkaWEuZGlzcG9zZUFsbE1lZGlhUnVudGltZXMoKTtcbiAgICAgICAgICAgIGVuZ2luZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBBdXRvc2F2ZSAoZGVib3VuY2VkKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2F2ZUF1dG9zYXZlKHNjZW5lKSwgMzUwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH0sIFtzY2VuZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+XG4gICAgICAgICAgICBzZXRGdWxsc2NyZWVuKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09PSBzdGFnZVJlZi5jdXJyZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgc3luYyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwidmF1ZGlvLTJcIjtcbiAgICAgICAgY29uc3QgZmF2aWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XG4gIDxyZWN0IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCIjMDgwODBhXCIvPlxuICA8cGF0aCBkPVwiTTUgOC41IDIzLjUgNS41IDI2LjUgMjMuNSA4IDI2LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNmU2YzY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPlxuICA8cGF0aCBkPVwiTTQgNy41IDI0LjUgNC41IDI3LjUgMjQuNSA3IDI3LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMS43XCIvPlxuICA8cGF0aCBkPVwiTTEwIDIyLjUgMjEuNSA5LjVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMi40XCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuMiAyMi41IDIyLjcgOS41XCIgc3Ryb2tlPVwiI2E4Nzg4MFwiIHN0cm9rZS13aWR0aD1cIjEuMVwiIHN0cm9rZS1saW5lY2FwPVwic3F1YXJlXCIgb3BhY2l0eT1cIi44NVwiLz5cbiAgPHJlY3QgeD1cIjIwLjVcIiB5PVwiMjAuNVwiIHdpZHRoPVwiMy4yXCIgaGVpZ2h0PVwiMy4yXCIgZmlsbD1cIiNlOGU2ZTBcIi8+XG4gIDxyZWN0IHg9XCI2LjVcIiB5PVwiNi41XCIgd2lkdGg9XCIyLjJcIiBoZWlnaHQ9XCIyLjJcIiBmaWxsPVwiIzZlNmM2OFwiLz5cbjwvc3ZnPmA7XG4gICAgICAgIGNvbnN0IGxpbmsgPVxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gICAgICAgICAgICApIGFzIEhUTUxMaW5rRWxlbWVudCB8IG51bGwpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rLnJlbCA9IFwiaWNvblwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcbiAgICAgICAgbGluay5ocmVmID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChmYXZpY29uKX1gO1xuICAgICAgICBpZiAoIWxpbmsucGFyZW50Tm9kZSkgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRhcmdldCAmJlxuICAgICAgICAgICAgICAgICh0YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvcnRjdXQgPT09IFwielwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkgaGlzdG9yeS5yZWRvU2NlbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBoaXN0b3J5LnVuZG9TY2VuZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvcnRjdXQgPT09IFwieVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVkb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0VWlIaWRkZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXR0aW5nc09wZW5SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3NPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGhlbHBPcGVuUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2ZW50LmtleSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVscE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0SGVscE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldEZyb3plbigocHJldmlvdXMpID0+ICFwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICAgICAgcGxheU1vZGUuaGFuZGxlUGxheUtleShldmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwicFwiICYmICFldmVudC5tZXRhS2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldFN0YWdlTW9kZShcInBsYXlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGV2ZW50LmtleSA9PT0gXCJEZWxldGVcIiB8fCBldmVudC5rZXkgPT09IFwiQmFja3NwYWNlXCIpICYmXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVMYXllcihzZWxlY3RlZElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZElkICYmIGV2ZW50LmtleS5zdGFydHNXaXRoKFwiQXJyb3dcIikpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBldmVudC5zaGlmdEtleSA/IDAuMDUgOiAwLjAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc2NlbmVSZWYuY3VycmVudC5sYXllcnMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKGwpID0+IGwuaWQgPT09IHNlbGVjdGVkSWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPVxuICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLXN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC1zdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogY2xhbXAobGF5ZXIuZngueCArIGR4LCAtMywgMyksXG4gICAgICAgICAgICAgICAgICAgIHk6IGNsYW1wKGxheWVyLmZ4LnkgKyBkeSwgLTMsIDMpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH0sIFtzZWxlY3RlZElkXSk7XG5cbiAgICAvLyBQYXN0ZSBmaWxlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uUGFzdGUgPSAoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlczogRmlsZVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZXZlbnQuY2xpcGJvYXJkRGF0YT8uaXRlbXMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5raW5kICE9PSBcImZpbGVcIikgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUpIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2b2lkIG1lZGlhLmltcG9ydEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCBvblBhc3RlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgb25QYXN0ZSk7XG4gICAgfSwgW10pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3RhZ2UgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBzdGFnZVBvaW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB7XG4gICAgICAgIHNjZW5lWDogbnVtYmVyO1xuICAgICAgICBzY2VuZVk6IG51bWJlcjtcbiAgICAgICAgdTogbnVtYmVyO1xuICAgICAgICB2OiBudW1iZXI7XG4gICAgfSB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgcmVjdCA9IHN0YWdlXG4gICAgICAgICAgICA/IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICA6IHsgbGVmdDogMCwgdG9wOiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gICAgICAgIGNvbnN0IHUgPSBjbGFtcCgoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoLCAwLCAxKTtcbiAgICAgICAgY29uc3QgdiA9IGNsYW1wKChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQsIDAsIDEpO1xuICAgICAgICBjb25zdCBhc3BlY3QgPSByZWN0LndpZHRoIC8gTWF0aC5tYXgoMSwgcmVjdC5oZWlnaHQpO1xuICAgICAgICByZXR1cm4geyBzY2VuZVg6ICh1IC0gMC41KSAqIGFzcGVjdCwgc2NlbmVZOiAwLjUgLSB2LCB1LCB2IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0TGF5ZXJBdChzY2VuZVg6IG51bWJlciwgc2NlbmVZOiBudW1iZXIpOiBTY2VuZUxheWVyIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBoaXRMYXllcihcbiAgICAgICAgICAgIHNjZW5lUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBtZWRpYS5pbWFnZUluZm9SZWYuY3VycmVudCxcbiAgICAgICAgICAgIHN0YWdlU2l6ZVJlZi5jdXJyZW50LFxuICAgICAgICAgICAgc2NlbmVYLFxuICAgICAgICAgICAgc2NlbmVZLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50OiBQb2ludGVyRXZlbnQsIGRvd246IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgeCA9IHU7XG4gICAgICAgIGNvbnN0IHkgPSAxIC0gdjtcbiAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCg4LCBub3cgLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LmF0KTtcbiAgICAgICAgcG9pbnRlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB2ZWxvY2l0eVg6ICh4IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC54KSAqICgxNiAvIGVsYXBzZWQpLFxuICAgICAgICAgICAgdmVsb2NpdHlZOiAoeSAtIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQueSkgKiAoMTYgLyBlbGFwc2VkKSxcbiAgICAgICAgICAgIGRvd24sXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQgPSB7IHgsIHksIGF0OiBub3cgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlckRvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHBsYXlNb2RlLnNvb3RoZVBsYXkoc2NlbmVYLCBzY2VuZVkpO1xuICAgICAgICAgICAgICAgIHBsYXlNb2RlLmFkZEtpY2soeyByaXBwbGU6IDAuMDggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgICAgIHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgc3RhcnRVOiB1LFxuICAgICAgICAgICAgICAgIHN0YXJ0VjogdixcbiAgICAgICAgICAgICAgICBsYXN0VTogdSxcbiAgICAgICAgICAgICAgICBsYXN0VjogdixcbiAgICAgICAgICAgICAgICBwYXRoOiAwLFxuICAgICAgICAgICAgICAgIGF0OiBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgICAgICAgICBzaGlmdDogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICBjb25zdCBoaXQgPSBoaXRMYXllckF0KHNjZW5lWCwgc2NlbmVZKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChoaXQuaWQpO1xuICAgICAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIGxheWVySWQ6IGhpdC5pZCxcbiAgICAgICAgICAgICAgICBzdGFydFg6IHNjZW5lWCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHNjZW5lWSxcbiAgICAgICAgICAgICAgICBmeFg6IGhpdC5meC54LFxuICAgICAgICAgICAgICAgIGZ4WTogaGl0LmZ4LnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcbiAgICAgICAgICAgIGRyYWdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlck1vdmUoZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPT09IFwicGxheVwiKSB7XG4gICAgICAgICAgICB1cGRhdGVQbGF5UG9pbnRlcihldmVudCwgcG9pbnRlclJlZi5jdXJyZW50LmRvd24pO1xuICAgICAgICAgICAgY29uc3QgZ2VzdHVyZSA9IHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoZ2VzdHVyZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5wYXRoICs9IE1hdGguaHlwb3QoXG4gICAgICAgICAgICAgICAgICAgIHUgLSBnZXN0dXJlLmxhc3RVLFxuICAgICAgICAgICAgICAgICAgICB2IC0gZ2VzdHVyZS5sYXN0VixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGdlc3R1cmUubGFzdFUgPSB1O1xuICAgICAgICAgICAgICAgIGdlc3R1cmUubGFzdFYgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZHJhZ1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICBkcmFnUG9pbnRSZWYuY3VycmVudCA9IHsgeDogc2NlbmVYLCB5OiBzY2VuZVkgfTtcbiAgICAgICAgLy8gQ29hbGVzY2UgcG9pbnRlciBldmVudHMgdG8gb25lIHN0YXRlIHVwZGF0ZSBwZXIgZnJhbWUuXG4gICAgICAgIGlmIChkcmFnUmFmUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgZHJhZ1JhZlJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdSYWZSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICBjb25zdCBkcmFnID0gZHJhZ1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFkcmFnKSByZXR1cm47XG4gICAgICAgICAgICB1cGRhdGVMYXllckZ4KGRyYWcubGF5ZXJJZCwge1xuICAgICAgICAgICAgICAgIHg6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICBkcmFnLmZ4WCArIGRyYWdQb2ludFJlZi5jdXJyZW50LnggLSBkcmFnLnN0YXJ0WCxcbiAgICAgICAgICAgICAgICAgICAgLTMsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB5OiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgZHJhZy5meFkgKyBkcmFnUG9pbnRSZWYuY3VycmVudC55IC0gZHJhZy5zdGFydFksXG4gICAgICAgICAgICAgICAgICAgIC0zLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJVcChldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBnZXN0dXJlID0gcGxheUdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFnZXN0dXJlIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCB7IHUsIHYgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKG5vdyAtIGdlc3R1cmUuYXQgPCAzMDAgJiYgZ2VzdHVyZS5wYXRoIDwgMC4wMikge1xuICAgICAgICAgICAgICAgIGlmIChub3cgLSBsYXN0VGFwQXRSZWYuY3VycmVudCA8IDM2MCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VGFwQXRSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlNb2RlLnN0ZXBLYWxlaWRvKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFRhcEF0UmVmLmN1cnJlbnQgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlNb2RlLnN0YW1wVGFwKHUsIHYsIGdlc3R1cmUuc2hpZnQgfHwgZXZlbnQuc2hpZnRLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZS5wYXRoID4gMC4wMykge1xuICAgICAgICAgICAgICAgIHBsYXlNb2RlLnRocm93RWNobyhnZXN0dXJlLCB1LCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyTGVhdmUoKSB7XG4gICAgICAgIHBvaW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIC4uLnBvaW50ZXJSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcGxheUdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG9uV2hlZWwgPSAoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQuZGVsdGFZIHx8IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpXG4gICAgICAgICAgICAgICAgICAgIHBsYXlNb2RlLnN0ZXBHbG9iYWwoXCJzYXR1cmF0aW9uXCIsIC1kZWx0YSAqIDAuMDAxMik7XG4gICAgICAgICAgICAgICAgZWxzZSBwbGF5TW9kZS5zdGVwR2xvYmFsKFwiaHVlT3JiaXRcIiwgLWRlbHRhICogMC4wMDA2KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhZ2VNb2RlUmVmLmN1cnJlbnQgIT09IFwiYXJyYW5nZVwiKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBsYXllcklkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgIGlmICghbGF5ZXJJZCkgcmV0dXJuO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc2NlbmVSZWYuY3VycmVudC5sYXllcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gbGF5ZXJJZCk7XG4gICAgICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVySWQsIHtcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IGxheWVyLmZ4LnJvdGF0aW9uICsgKGV2ZW50LmRlbHRhWSA+IDAgPyAzIDogLTMpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVySWQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuZnguc2NhbGUgKiBNYXRoLmV4cCgtZXZlbnQuZGVsdGFZICogMC4wMDQ1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzdGFnZS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHN0YWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsKTtcbiAgICB9LCBbc2VsZWN0ZWRJZF0pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlcnZlciBzY2VuZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlVGh1bWIoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFjYW52YXMud2lkdGgpIHJldHVybiBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gVGhlIGRyYXdpbmcgYnVmZmVyIGlzIG5vdCBwcmVzZXJ2ZWQgXHUyMDE0IHJlZHJhdyBzbyB0aGUgZ3JhYiBpc24ndCBibGFuay5cbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5yZW5kZXIoYnVpbGRGcmFtZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gMjIwIC8gTWF0aC5tYXgoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHRodW1iQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRodW1iQ2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjYW52YXMud2lkdGggKiBzY2FsZSkpO1xuICAgICAgICAgICAgdGh1bWJDYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjYW52YXMuaGVpZ2h0ICogc2NhbGUpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aHVtYkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aHVtYkNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRodW1iQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC42Mik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPCA1OF8wMDAgPyBkYXRhIDogXCJcIjtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNhdmVUb1NlcnZlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNhdmVTY2VuZU11dGF0aW9uKFxuICAgICAgICAgICAgICAgIHNlcnZlclNjZW5lSWQsXG4gICAgICAgICAgICAgICAgc2NlbmUubmFtZSxcbiAgICAgICAgICAgICAgICBlbmNvZGVTY2VuZShzY2VuZSksXG4gICAgICAgICAgICAgICAgY2FwdHVyZVRodW1iKCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0U2VydmVyU2NlbmVJZChyZXN1bHQuaWQpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiU2NlbmUgc2F2ZWRcIik7XG4gICAgICAgIH0gY2F0Y2ggKGNhdXNlKSB7XG4gICAgICAgICAgICBzaG93VG9hc3QoY2F1c2UgaW5zdGFuY2VvZiBFcnJvciA/IGNhdXNlLm1lc3NhZ2UgOiBcIlNhdmUgZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEZyb21TZXJ2ZXIoaWQ6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0U2NlbmVNdXRhdGlvbihpZCk7XG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBkZWNvZGVTY2VuZShyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICBsb2FkZWQubmFtZSA9IGNsZWFuTmFtZShyZXN1bHQubmFtZSwgbG9hZGVkLm5hbWUpO1xuICAgICAgICAgICAgcmVzdG9yZVNjZW5lKGxvYWRlZCk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xuICAgICAgICAgICAgc2V0U2VydmVyU2NlbmVJZChpZCk7XG4gICAgICAgICAgICBzZXRTY2VuZXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIGF3YWl0IG1lZGlhLmh5ZHJhdGVTY2VuZUltYWdlcyhsb2FkZWQpO1xuICAgICAgICAgICAgY29uc3QgbWlzc2luZyA9IGxvYWRlZC5sYXllcnMuc29tZShcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+ICFlbmdpbmVSZWYuY3VycmVudD8uaGFzSW1hZ2UobGF5ZXIuaW1hZ2VJZCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKG1pc3NpbmcpXG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KFxuICAgICAgICAgICAgICAgICAgICBcIlNvbWUgbWVkaWEgZmlsZXMgYXJlIG5vdCBvbiB0aGlzIGRldmljZSBcdTIwMTQgc2hvd2luZyBwbGFjZWhvbGRlcnNcIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIkNvdWxkIG5vdCBsb2FkIHRoYXQgc2NlbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdTY2VuZSgpIHtcbiAgICAgICAgY29uc3QgYmxhbmsgPSBlbXB0eVNjZW5lKCk7XG4gICAgICAgIHJlc3RvcmVTY2VuZShibGFuayk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XG4gICAgICAgIHNldFNlcnZlclNjZW5lSWQoXCJcIik7XG4gICAgICAgIHNldFNjZW5lc09wZW4oZmFsc2UpO1xuICAgICAgICBzZXRTdGFnZU1vZGUoXCJhcnJhbmdlXCIpO1xuICAgICAgICBzaG93VG9hc3QoXCJOZXcgc2NlbmVcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN0YWdlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIGF3YWl0IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICBlbHNlIGF3YWl0IHN0YWdlLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiRnVsbHNjcmVlbiBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VsZWN0aW9uIGJveCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdCBzZWxlY3Rpb25Cb3ggPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZCB8fCBzdGFnZU1vZGUgIT09IFwiYXJyYW5nZVwiKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbkJveEZvcihcbiAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgbWVkaWEuaW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLFxuICAgICAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQsXG4gICAgICAgICk7XG4gICAgfSwgW3NlbGVjdGVkLCBtZWRpYS5pbWFnZUluZm8sIHN0YWdlTW9kZSwgc2NlbmVdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlbmRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgaWYgKGVuZ2luZUVycm9yKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBoLXNjcmVlbiBwbGFjZS1pdGVtcy1jZW50ZXIgYmctW3ZhcigtLXZvaWQpXSBwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTIgZm9udC1tb25vIHRleHQtc20gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbmdpbmVFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTIgbmVlZHMgV2ViR0wgdG8gcnVuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLXZvaWQpXSB0ZXh0LVt2YXIoLS1wYXBlcildIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQtMCBvcGFjaXR5LTQwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE0JSAtMTAlLCByZ2JhKDIzMiwyMzAsMjI0LC4wOCksIHRyYW5zcGFyZW50IDMyJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTIlIDIwJSwgcmdiYSgxNjgsMTIwLDEyOCwuMDYpLCB0cmFuc3BhcmVudCAyOCUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHshdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxUb3BCYXJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmVOYW1lPXtzY2VuZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17KG5hbWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7IC4uLnByZXZpb3VzLCBuYW1lIH0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVuYW1lQ29tbWl0PXsobmFtZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUobmFtZSwgXCJVbnRpdGxlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlTW9kZT17c3RhZ2VNb2RlfVxuICAgICAgICAgICAgICAgICAgICBvblN0YWdlTW9kZT17c2V0U3RhZ2VNb2RlfVxuICAgICAgICAgICAgICAgICAgICBmcm96ZW49e2Zyb3plbn1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVGcm96ZW49eygpID0+IHNldEZyb3plbigocHJldmlvdXMpID0+ICFwcmV2aW91cyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhb3M9e2NoYW9zU2NlbmV9XG4gICAgICAgICAgICAgICAgICAgIG9uTXV0YXRlPXsoKSA9PiB1cGRhdGVHbG9iYWwobXV0YXRlR2xvYmFsRngoc2NlbmUuZ2xvYmFsKSl9XG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17KCkgPT4gdm9pZCBzYXZlVG9TZXJ2ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgc2NlbmVzT3Blbj17c2NlbmVzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVTY2VuZXM9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZXNPcGVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VTY2VuZXM9eygpID0+IHNldFNjZW5lc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBzY2VuZXM9e3NjZW5lTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgaXNHdWVzdD17YXV0aC5pc0d1ZXN0fVxuICAgICAgICAgICAgICAgICAgICBvbk5ld1NjZW5lPXtuZXdTY2VuZX1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkU2NlbmU9eyhpZCkgPT4gdm9pZCBsb2FkRnJvbVNlcnZlcihpZCl9XG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlU2NlbmU9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBkZWxldGVTY2VuZU11dGF0aW9uKGlkKS5jYXRjaCgoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdChcIkRlbGV0ZSBmYWlsZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09PSBzZXJ2ZXJTY2VuZUlkKSBzZXRTZXJ2ZXJTY2VuZUlkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBtaWNBY3RpdmU9e21pYy5taWNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWljPXsoKSA9PiB2b2lkIG1pYy50b2dnbGVNaWMoKX1cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nPXtyZWNvcmRlci5yZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZE1pY0F1ZGlvPXtzZXR0aW5ncy5yZWNvcmRNaWNBdWRpb31cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVSZWNvcmRpbmc9eygpID0+IHZvaWQgcmVjb3JkZXIudG9nZ2xlUmVjb3JkaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydFJlcz17cmVjb3JkZXIuZXhwb3J0UmVzfVxuICAgICAgICAgICAgICAgICAgICBvbkV4cG9ydFJlcz17cmVjb3JkZXIuc2V0RXhwb3J0UmVzfVxuICAgICAgICAgICAgICAgICAgICBvbkV4cG9ydFBuZz17cmVjb3JkZXIuZXhwb3J0UG5nfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc09wZW49e3NldHRpbmdzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVTZXR0aW5ncz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGVscE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2V0dGluZ3NPcGVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaGVscE9wZW49e2hlbHBPcGVufVxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZUhlbHA9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNldHRpbmdzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWxwT3BlbigocHJldmlvdXMpID0+ICFwcmV2aW91cyk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW49e2Z1bGxzY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlRnVsbHNjcmVlbj17KCkgPT4gdm9pZCB0b2dnbGVGdWxsc2NyZWVuKCl9XG4gICAgICAgICAgICAgICAgICAgIG9uSGlkZVVpPXsoKSA9PiBzZXRVaUhpZGRlbih0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMCBmbGV4IG1pbi1oLTAgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxMYXllcnNTaWRlYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM9e3NjZW5lLmxheWVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlSW5mbz17bWVkaWEuaW1hZ2VJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJZD17c2VsZWN0ZWRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRTZWxlY3RlZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVWaXNpYmxlPXsobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChsYXllci5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhbGF5ZXIuZngudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3ZlPXttb3ZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkR1cGxpY2F0ZT17ZHVwbGljYXRlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17cmVtb3ZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkltcG9ydD17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7LyogU3RhZ2UgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e3N0YWdlUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YHJlbGF0aXZlIG1pbi13LTAgZmxleC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayAke3N0YWdlTW9kZSA9PT0gXCJwbGF5XCIgPyBcImN1cnNvci1jcm9zc2hhaXJcIiA6IFwiY3Vyc29yLWRlZmF1bHRcIn1gfVxuICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtvblN0YWdlUG9pbnRlckRvd259XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uU3RhZ2VQb2ludGVyTW92ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e29uU3RhZ2VQb2ludGVyVXB9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckxlYXZlPXtvblN0YWdlUG9pbnRlckxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJhZ092ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiBzZXREcmFnT3ZlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHJhZ092ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcj8uZmlsZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgbWVkaWEuaW1wb3J0RmlsZXMoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IGNsYXNzPVwiYmxvY2sgaC1mdWxsIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3Rpb25Cb3ggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBib3JkZXIgYm9yZGVyLVt2YXIoLS1hY2lkKV0vNzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke3NlbGVjdGlvbkJveC5jZW50ZXJYIC0gc2VsZWN0aW9uQm94LmJveFdpZHRoIC8gMn1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYCR7c2VsZWN0aW9uQm94LmNlbnRlclkgLSBzZWxlY3Rpb25Cb3guYm94SGVpZ2h0IC8gMn1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzZWxlY3Rpb25Cb3guYm94V2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3NlbGVjdGlvbkJveC5ib3hIZWlnaHR9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtzZWxlY3Rpb25Cb3gucm90YXRpb259ZGVnKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMCAxcHggcmdiYSgwLDAsMCwuNilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3NjZW5lLmxheWVycy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLVt2YXIoLS1saW5lLWhvdCldIGJnLWJsYWNrLzQwIHB4LTYgcHktNCB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC1bMTFweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wIGltYWdlcywgdmlkZW8sIGF1ZGlvLCBvciBhbnkgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7ZHJhZ092ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCB6LTIwIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGJnLWJsYWNrLzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWFjaWQpXSBweC04IHB5LTUgZm9udC1tb25vIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbGVhc2UgdG8gYWRkIGxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c3RhZ2VNb2RlID09PSBcInBsYXlcIiAmJiAhdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgYm90dG9tLTMgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctYmxhY2svNjAgcHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheSBtb2RlIFx1MjAxNCB0YXAsIGRyYWcgJiBwbGF5IHRoZSBrZXlzIFx1MDBCNyBmaWVsZDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQT0lOVEVSX01PREVTW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzY2VuZS5nbG9iYWwucG9pbnRlck1vZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MDBCNyA/IG1hbnVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRlci5yZWNvcmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlciBib3JkZXItWyNjNDViNmFdLzUwIGJnLWJsYWNrLzYwIHB4LTIuNSBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlYy1kb3QgaW5saW5lLWJsb2NrIGgtMiB3LTIgcm91bmRlZC1mdWxsIGJnLVsjYzQ1YjZhXVwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmRlci5yZWNvcmRpbmdXaXRoTWljID8gXCIgXHUwMEI3IG1pY1wiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7dWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUgYm90dG9tLTMgcmlnaHQtMyBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctYmxhY2svNjAgcHgtMi41IHB5LTEuNSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRVaUhpZGRlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyBVSSAoVGFiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7IXVpSGlkZGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwidy1bMjY0cHhdIGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3cteS1hdXRvIGJvcmRlci1sIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclBhbmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mbz17bWVkaWEuaW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhdGNoPXsocGF0Y2gpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCBwYXRjaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcGxhY2VGeD17KGZ4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUxheWVyRngoc2VsZWN0ZWQuaWQsIGZ4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ybGRQYW5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbD17c2NlbmUuZ2xvYmFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGF0Y2g9e3VwZGF0ZUdsb2JhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByZXNldD17KHByZXNldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwocHJlc2V0Lmdsb2JhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aGVscE9wZW4gJiYgPEhlbHBNb2RhbCBvbkNsb3NlPXsoKSA9PiBzZXRIZWxwT3BlbihmYWxzZSl9IC8+fVxuICAgICAgICAgICAge3NldHRpbmdzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPFNldHRpbmdzTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICByZWNvcmRpbmc9e3JlY29yZGVyLnJlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZXR0aW5nc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7dG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AgcG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBib3R0b20tNSBsZWZ0LTEvMiB6LTUwIC10cmFuc2xhdGUteC0xLzIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcHgtNCBweS0yIGZvbnQtbW9ubyB0ZXh0LVsxMC41cHhdIHRleHQtW3ZhcigtLXBhcGVyKV0gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICB7dG9hc3R9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2ZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIiovKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzPy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIG1lZGlhLmltcG9ydEZpbGVzKGlucHV0LmZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ08sSUMwQk1BO0FEMUJOLElFVURDO0FGVkMsSUdHSEM7QUhIRyxJRzhGTUM7QUg5Rk4sSUkrS0hDO0FKL0tHLElJMExIQztBSjFMRyxJSTRMREM7QUo1TEMsSUlzTkRDO0FKdE5DLElLU0hDO0FMVEcsSUtVTkM7QUxWTSxJS1dOQztBTFhNLElLeUJEQztBTHpCQyxJS3NDSEM7QUx0Q0csSUtxTERDO0FMckxDLElLc0xEQztBTHRMQyxJTUVJQztBTkZKLElBaUJNQyxJQUFnQyxDQUFHO0FBakJ6QyxJQWtCTUMsSUFBWSxDQUFBO0FBbEJsQixJQW1CTUMsSUFDWjtBQXBCTSxJQ0NNQyxJQUFVQyxNQUFNRDtBQVN0QixTQUFTRSxFQUFPQyxJQUFLQyxJQUFBQTtBQUUzQixXQUFTUixNQUFLUSxHQUFPRCxDQUFBQSxHQUFJUCxFQUFBQSxJQUFLUSxHQUFNUixFQUFBQTtBQUNwQyxTQUE2Qk87QUFDOUI7QUFRZ0IsU0FBQUUsRUFBV0MsSUFBQUE7QUFDdEJBLEVB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QUFLLFVBQVU7QUFBQSxNQUFNLFlBQVk7QUFBQSxNQUNqRSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxPQUFPO0FBQUEsSUFDckUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNoRSxPQUFPO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsSUFDdEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFLLFlBQVk7QUFBQSxNQUNyRSxVQUFVO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsSUFDdEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUFNLE9BQU87QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNyRCxRQUFRO0FBQUEsTUFBTSxZQUFZO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsSUFDMUUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFLLFlBQVk7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNwRSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxPQUFPO0FBQUEsSUFDbEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFPLFlBQVk7QUFBQSxNQUN6RSxVQUFVO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBSyxPQUFPO0FBQUEsSUFDcEQsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFNLFlBQVk7QUFBQSxNQUN6RCxTQUFTO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxXQUFXO0FBQUEsSUFDekUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUNoRSxRQUFRO0FBQUEsTUFBTyxPQUFPO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsSUFDbEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7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QUNWLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxVQUNSLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUMxRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLEdBQUc7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxVQUNSLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFlBQVksTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUM1RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLEdBQUc7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN4RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLEdBQUc7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFdBQVcsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUMzRDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLEdBQUc7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN4RDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPLEdBQUc7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQUE7QUFBQSxN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QU8sT0FBTztBQUFBLEVBQ3ZELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFNBQVMsT0FBTyxRQUFRO0FBQUEsRUFDekQsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxRQUFRLE9BQU8sU0FBUztBQUFBLEVBQ3pELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFdBQVcsT0FBTyxVQUFVO0FBQUEsRUFDN0QsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sUUFBUTtBQUFBLEVBQzFELEVBQUUsTUFBTSxRQUFRLEtBQUssS0FBSyxPQUFPLFlBQVksT0FBTyxPQUFPO0FBQUEsRUFDM0QsRUFBRSxNQUFNLFFBQVEsS0FBSyxLQUFLLE9BQU8sVUFBVSxPQUFPLFNBQVM7QUFBQSxFQUMzRCxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssT0FBTyxVQUFVLE9BQU8sU0FBUztBQUMvRDtBQUVPLElBQU0sYUFBOEM7QUFBQSxFQUN2RCxFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sUUFBUSxLQUFLLElBQUk7QUFBQSxFQUN6QixFQUFFLE1BQU0sYUFBYSxLQUFLLElBQUk7QUFBQSxF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O0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPRCxHQUFFO0FBQUEsVUFDVCxLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxNQUFNLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDdEQ7QUFBQSxNQUNBLGdCQUFBQztBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBT0QsR0FBRTtBQUFBLFVBQ1QsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsTUFBTSxRQUFRLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3ZEO0FBQUEsTUFDQSxnQkFBQUM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU9ELEdBQUU7QUFBQSxVQUNULEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN4RDtBQUFBLE1BQ0EsZ0JBQUFDO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxPQUFNO0FBQUEsVUFDTixPQUFPRCxHQUFFO0FBQUEsVUFDVCxLQUFLO0FBQUEsVUFDTCxVQUFVLENBQUMsVUFBVSxNQUFNLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUFBO0FBQUEsTUFDdEQ7QUFBQSxNQUNBLGdCQUFBQztBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sT0FBT0QsR0FBRTtBQUFBLFVBQ1QsS0FBSztBQUFBLFVBQ0wsVUFBVSxDQUFDLFVBQVUsTUFBTSxRQUFRLEVBQUUsU0FBUyxNQUFNLENBQUM7QUFBQTtBQUFBLE1BQ3pEO0FBQUEsTUFDQSxnQkFBQUM7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE9BQU07QUFBQSxVQUNOLE9BQU9ELEdBQUU7QUFBQSxVQUNULEtBQUs7QUFBQSxVQUNMLFVBQVUsQ0FBQyxVQUFVLE1BQU0sUUFBUSxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQUE7QUFBQSxNQUN4RDtBQUFBLE9B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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxSmIsSUFBTSxZQUFZO0FBQUEsRUFDaEIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUE7QUFBQSxRQUNKO0FBQUEsU0FDSjtBQUFBLE9BRVI7QUFBQSxJQUVDLFlBQVksZ0JBQUFBLEdBQUMsYUFBVSxTQUFTLE1BQU0sWUFBWSxLQUFLLEdBQUc7QUFBQSxJQUMxRCxnQkFDRyxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHO0FBQUEsUUFDQSxXQUFXLFNBQVM7QUFBQSxRQUNwQixVQUFVO0FBQUEsUUFDVixTQUFTLE1BQU0sZ0JBQWdCLEtBQUs7QUFBQTtBQUFBLElBQ3hDO0FBQUEsSUFHSCxTQUNHLGdCQUFBQSxHQUFDLFNBQUksT0FBTSwwTEFDTixpQkFDTDtBQUFBLElBR0osZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDRyxLQUFLO0FBQUEsUUFDTCxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxVQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsVUFBVTtBQUNqQixnQkFBTSxRQUFRLE1BQU07QUFDcEIsY0FBSSxNQUFNLE9BQU87QUFDYixpQkFBSyxNQUFNLFlBQVksTUFBTSxLQUFLO0FBQ3RDLGdCQUFNLFFBQVE7QUFBQSxRQUNsQjtBQUFBO0FBQUEsSUFDSjtBQUFBLEtBQ0o7QUFFUjs7O0FDM25DQSxFQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLGVBQWUsS0FBSyxDQUFDOyIsCiAgIm5hbWVzIjogWyJzbGljZSIsICJvcHRpb25zIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJwcmV2RGVib3VuY2UiLCAiZGVmZXIiLCAiZGVwdGhTb3J0IiwgIl9pZCIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImkiLCAiRU1QVFlfT0JKIiwgIkVNUFRZX0FSUiIsICJJU19OT05fRElNRU5TSU9OQUwiLCAiaXNBcnJheSIsICJBcnJheSIsICJhc3NpZ24iLCAib2JqIiwgInByb3BzIiwgInJlbW92ZU5vZGUiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgInJlbW92ZUNoaWxkIiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjaGlsZHJlbiIsICJrZXkiLCAicmVmIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgImNhbGwiLCAiZGVmYXVsdFByb3BzIiwgImNyZWF0ZVZOb2RlIiwgIm9yaWdpbmFsIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAiX19pIiwgIl9fdSIsICJGcmFnbWVudCIsICJwcm9wcyIsICJjaGlsZHJlbiIsICJCYXNlQ29tcG9uZW50IiwgImNvbnRleHQiLCAidGhpcyIsICJnZXREb21TaWJsaW5nIiwgInZub2RlIiwgImNoaWxkSW5kZXgiLCAiX18iLCAiX19pIiwgInNpYmxpbmciLCAiX19rIiwgImxlbmd0aCIsICJfX2UiLCAidHlwZSIsICJyZW5kZXJDb21wb25lbnQiLCAiY29tcG9uZW50IiwgIl9fUCIsICJfX2QiLCAib2xkVk5vZGUiLCAiX192IiwgIm9sZERvbSIsICJjb21taXRRdWV1ZSIsICJyZWZRdWV1ZSIsICJuZXdWTm9kZSIsICJhc3NpZ24iLCAib3B0aW9ucyIsICJkaWZmIiwgIl9fbiIsICJuYW1lc3BhY2VVUkkiLCAiX191IiwgImNvbW1pdFJvb3QiLCAidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCAiX19jIiwgImJhc2UiLCAic29tZSIsICJjaGlsZCIsICJlbnF1ZXVlUmVuZGVyIiwgImMiLCAicmVyZW5kZXJRdWV1ZSIsICJwdXNoIiwgInByb2Nlc3MiLCAiX19yIiwgInByZXZEZWJvdW5jZSIsICJkZWJvdW5jZVJlbmRlcmluZyIsICJkZWZlciIsICJsIiwgInNvcnQiLCAiZGVwdGhTb3J0IiwgInNoaWZ0IiwgImRpZmZDaGlsZHJlbiIsICJwYXJlbnREb20iLCAicmVuZGVyUmVzdWx0IiwgIm5ld1BhcmVudFZOb2RlIiwgIm9sZFBhcmVudFZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAibmFtZXNwYWNlIiwgImV4Y2Vzc0RvbUNoaWxkcmVuIiwgImlzSHlkcmF0aW5nIiwgImkiLCAiY2hpbGRWTm9kZSIsICJuZXdEb20iLCAiZmlyc3RDaGlsZERvbSIsICJyZXN1bHQiLCAic2hvdWxkUGxhY2UiLCAib2xkQ2hpbGRyZW4iLCAiRU1QVFlfQVJSIiwgIm5ld0NoaWxkcmVuTGVuZ3RoIiwgImNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkiLCAiRU1QVFlfT0JKIiwgInJlZiIsICJhcHBseVJlZiIsICJpbnNlcnQiLCAibmV4dFNpYmxpbmciLCAic2tld2VkSW5kZXgiLCAibWF0Y2hpbmdJbmRleCIsICJvbGRDaGlsZHJlbkxlbmd0aCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJza2V3IiwgIkFycmF5IiwgImNvbnN0cnVjdG9yIiwgIlN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJpc0FycmF5IiwgIl9fYiIsICJrZXkiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJub2RlVHlwZSIsICJmaW5kTWF0Y2hpbmdJbmRleCIsICJjaGlsZFZOb2RlIiwgIm9sZENoaWxkcmVuIiwgInNrZXdlZEluZGV4IiwgInJlbWFpbmluZ09sZENoaWxkcmVuIiwgIngiLCAieSIsICJjaGlsZEluZGV4IiwgImtleSIsICJ0eXBlIiwgIm9sZFZOb2RlIiwgIm1hdGNoZWQiLCAiX191IiwgImxlbmd0aCIsICJzZXRTdHlsZSIsICJzdHlsZSIsICJ2YWx1ZSIsICJzZXRQcm9wZXJ0eSIsICJJU19OT05fRElNRU5TSU9OQUwiLCAidGVzdCIsICJkb20iLCAibmFtZSIsICJvbGRWYWx1ZSIsICJuYW1lc3BhY2UiLCAidXNlQ2FwdHVyZSIsICJsb3dlckNhc2VOYW1lIiwgIm8iLCAiY3NzVGV4dCIsICJyZXBsYWNlIiwgIkNBUFRVUkVfUkVHRVgiLCAidG9Mb3dlckNhc2UiLCAic2xpY2UiLCAibCIsICJFVkVOVF9BVFRBQ0hFRCIsICJldmVudENsb2NrIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiZXZlbnRQcm94eSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJjcmVhdGVFdmVudFByb3h5IiwgInRoaXMiLCAiZXZlbnRIYW5kbGVyIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAib3B0aW9ucyIsICJldmVudCIsICJkaWZmIiwgInBhcmVudERvbSIsICJuZXdWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgImV4Y2Vzc0RvbUNoaWxkcmVuIiwgImNvbW1pdFF1ZXVlIiwgIm9sZERvbSIsICJpc0h5ZHJhdGluZyIsICJyZWZRdWV1ZSIsICJ0bXAiLCAib2xkQ29tbWl0UXVldWVMZW5ndGgiLCAiYyIsICJpc05ldyIsICJvbGRQcm9wcyIsICJvbGRTdGF0ZSIsICJzbmFwc2hvdCIsICJjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24iLCAibmV3UHJvcHMiLCAiaXNDbGFzc0NvbXBvbmVudCIsICJwcm92aWRlciIsICJjb21wb25lbnRDb250ZXh0IiwgInJlbmRlckhvb2siLCAiY291bnQiLCAicmVuZGVyUmVzdWx0IiwgImkiLCAibmV3VHlwZSIsICJjb25zdHJ1Y3RvciIsICJfX2UiLCAiX19iIiwgIm91dGVyIiwgInByb3BzIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAiY29udGV4dFR5cGUiLCAiX19jIiwgIl9fIiwgIl9fRSIsICJCYXNlQ29tcG9uZW50IiwgImRvUmVuZGVyIiwgInN1YiIsICJzdGF0ZSIsICJfX24iLCAiX19kIiwgIl9faCIsICJfc2IiLCAiX19zIiwgImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsICJhc3NpZ24iLCAiX192IiwgImNvbXBvbmVudFdpbGxNb3VudCIsICJjb21wb25lbnREaWRNb3VudCIsICJwdXNoIiwgImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9fayIsICJzb21lIiwgInZub2RlIiwgIkVNUFRZX0FSUiIsICJhcHBseSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgImNvbXBvbmVudERpZFVwZGF0ZSIsICJjb250ZXh0IiwgIl9fUCIsICJfX3IiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwgIkZyYWdtZW50IiwgImNsb25lTm9kZSIsICJjaGlsZHJlbiIsICJkaWZmQ2hpbGRyZW4iLCAiaXNBcnJheSIsICJiYXNlIiwgInRoZW4iLCAiTU9ERV9IWURSQVRFIiwgIm5vZGVUeXBlIiwgIm5leHRTaWJsaW5nIiwgImluZGV4T2YiLCAicmVtb3ZlTm9kZSIsICJtYXJrQXNGb3JjZSIsICJkaWZmRWxlbWVudE5vZGVzIiwgImRpZmZlZCIsICJjb21taXRSb290IiwgInJvb3QiLCAiYXBwbHlSZWYiLCAiY2IiLCAiY2FsbCIsICJub2RlIiwgIm1hcCIsICJuZXdIdG1sIiwgIm9sZEh0bWwiLCAibmV3Q2hpbGRyZW4iLCAiaW5wdXRWYWx1ZSIsICJjaGVja2VkIiwgIkVNUFRZX09CSiIsICJsb2NhbE5hbWUiLCAiZG9jdW1lbnQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudE5TIiwgImlzIiwgIl9fbSIsICJkYXRhIiwgImRlZmF1bHRWYWx1ZSIsICJjaGlsZE5vZGVzIiwgImF0dHJpYnV0ZXMiLCAiX19odG1sIiwgImlubmVySFRNTCIsICJjb250ZW50IiwgImdldERvbVNpYmxpbmciLCAidW5kZWZpbmVkIiwgInJlZiIsICJoYXNSZWZVbm1vdW50IiwgImN1cnJlbnQiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJza2lwUmVtb3ZlIiwgInIiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAicmVwbGFjZU5vZGUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAibmFtZXNwYWNlVVJJIiwgImZpcnN0Q2hpbGQiLCAiY3JlYXRlQ29udGV4dCIsICJkZWZhdWx0VmFsdWUiLCAiQ29udGV4dCIsICJwcm9wcyIsICJzdWJzIiwgImN0eCIsICJ0aGlzIiwgImdldENoaWxkQ29udGV4dCIsICJTZXQiLCAiX19jIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfcHJvcHMiLCAidmFsdWUiLCAiZm9yRWFjaCIsICJjIiwgIl9fZSIsICJlbnF1ZXVlUmVuZGVyIiwgInN1YiIsICJhZGQiLCAib2xkIiwgImRlbGV0ZSIsICJjYWxsIiwgImNoaWxkcmVuIiwgImkiLCAiX18iLCAiUHJvdmlkZXIiLCAiX19sIiwgIkNvbnN1bWVyIiwgImNvbnRleHRWYWx1ZSIsICJjb250ZXh0VHlwZSIsICJzbGljZSIsICJFTVBUWV9BUlIiLCAib3B0aW9ucyIsICJlcnJvciIsICJ2bm9kZSIsICJvbGRWTm9kZSIsICJlcnJvckluZm8iLCAiY29tcG9uZW50IiwgImN0b3IiLCAiaGFuZGxlZCIsICJjb25zdHJ1Y3RvciIsICJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCAic2V0U3RhdGUiLCAiX19kIiwgImNvbXBvbmVudERpZENhdGNoIiwgIl9fRSIsICJlIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAiQmFzZUNvbXBvbmVudCIsICJwcm90b3R5cGUiLCAidXBkYXRlIiwgImNhbGxiYWNrIiwgInMiLCAiX19zIiwgInN0YXRlIiwgImFzc2lnbiIsICJfX3YiLCAiX3NiIiwgInB1c2giLCAiZm9yY2VVcGRhdGUiLCAiX19oIiwgInJlbmRlciIsICJGcmFnbWVudCIsICJyZXJlbmRlclF1ZXVlIiwgImRlZmVyIiwgIlByb21pc2UiLCAidGhlbiIsICJiaW5kIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJkZXB0aFNvcnQiLCAiYSIsICJiIiwgIl9fYiIsICJwcm9jZXNzIiwgIl9fciIsICJfaWQiLCAiTWF0aCIsICJyYW5kb20iLCAidG9TdHJpbmciLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJjcmVhdGVFdmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImN1cnJlbnRJbmRleCIsICJjdXJyZW50Q29tcG9uZW50IiwgInByZXZpb3VzQ29tcG9uZW50IiwgInByZXZSYWYiLCAiY3VycmVudEhvb2siLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAib3B0aW9ucyIsICJfb3B0aW9ucyIsICJvbGRCZWZvcmVEaWZmIiwgIl9fYiIsICJvbGRCZWZvcmVSZW5kZXIiLCAiX19yIiwgIm9sZEFmdGVyRGlmZiIsICJkaWZmZWQiLCAib2xkQ29tbWl0IiwgIl9fYyIsICJvbGRCZWZvcmVVbm1vdW50IiwgInVubW91bnQiLCAib2xkUm9vdCIsICJfXyIsICJnZXRIb29rU3RhdGUiLCAiaW5kZXgiLCAidHlwZSIsICJfX2giLCAiaG9va3MiLCAiX19IIiwgImxlbmd0aCIsICJwdXNoIiwgInVzZVN0YXRlIiwgImluaXRpYWxTdGF0ZSIsICJ1c2VSZWR1Y2VyIiwgImludm9rZU9yUmV0dXJuIiwgInJlZHVjZXIiLCAiaW5pdCIsICJob29rU3RhdGUiLCAiX3JlZHVjZXIiLCAiYWN0aW9uIiwgImN1cnJlbnRWYWx1ZSIsICJfX04iLCAibmV4dFZhbHVlIiwgInNldFN0YXRlIiwgIl9fZiIsICJ1cGRhdGVIb29rU3RhdGUiLCAicCIsICJzIiwgImMiLCAidXBkYXRlZEhvb2siLCAic2hvdWxkVXBkYXRlIiwgInByb3BzIiwgInNvbWUiLCAiaG9va0l0ZW0iLCAicHJldlNjdSIsICJyZXN1bHQiLCAiY2FsbCIsICJ0aGlzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJwcmV2Q1dVIiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiX19lIiwgInRtcCIsICJ1c2VFZmZlY3QiLCAiY2FsbGJhY2siLCAiYXJncyIsICJzdGF0ZSIsICJfX3MiLCAiYXJnc0NoYW5nZWQiLCAiX3BlbmRpbmdBcmdzIiwgInVzZVJlZiIsICJpbml0aWFsVmFsdWUiLCAiY3VycmVudEhvb2siLCAidXNlTWVtbyIsICJjdXJyZW50IiwgInVzZU1lbW8iLCAiZmFjdG9yeSIsICJhcmdzIiwgInN0YXRlIiwgImdldEhvb2tTdGF0ZSIsICJjdXJyZW50SW5kZXgiLCAiYXJnc0NoYW5nZWQiLCAiX19IIiwgIl9fIiwgIl9faCIsICJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwgImNvbXBvbmVudCIsICJhZnRlclBhaW50RWZmZWN0cyIsICJzaGlmdCIsICJob29rcyIsICJfX0giLCAiX19QIiwgIl9faCIsICJzb21lIiwgImludm9rZUNsZWFudXAiLCAiaW52b2tlRWZmZWN0IiwgImUiLCAib3B0aW9ucyIsICJfX2UiLCAiX192IiwgIl9fYiIsICJ2bm9kZSIsICJjdXJyZW50Q29tcG9uZW50IiwgIm9sZEJlZm9yZURpZmYiLCAiX18iLCAicGFyZW50RG9tIiwgIl9fayIsICJfX20iLCAib2xkUm9vdCIsICJfX3IiLCAib2xkQmVmb3JlUmVuZGVyIiwgImN1cnJlbnRJbmRleCIsICJfX2MiLCAicHJldmlvdXNDb21wb25lbnQiLCAiaG9va0l0ZW0iLCAiX19OIiwgIl9wZW5kaW5nQXJncyIsICJkaWZmZWQiLCAib2xkQWZ0ZXJEaWZmIiwgImMiLCAibGVuZ3RoIiwgInB1c2giLCAicHJldlJhZiIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAiYWZ0ZXJOZXh0RnJhbWUiLCAiY29tbWl0UXVldWUiLCAiZmlsdGVyIiwgImNiIiwgIm9sZENvbW1pdCIsICJ1bm1vdW50IiwgIm9sZEJlZm9yZVVubW91bnQiLCAiaGFzRXJyb3JlZCIsICJzIiwgIkhBU19SQUYiLCAiY2FsbGJhY2siLCAicmFmIiwgImRvbmUiLCAiY2xlYXJUaW1lb3V0IiwgInRpbWVvdXQiLCAiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCAic2V0VGltZW91dCIsICJob29rIiwgImNvbXAiLCAiY2xlYW51cCIsICJhcmdzQ2hhbmdlZCIsICJvbGRBcmdzIiwgIm5ld0FyZ3MiLCAiYXJnIiwgImluZGV4IiwgImludm9rZU9yUmV0dXJuIiwgImYiLCAiZCIsICJoIiwgImQiLCAiaCIsICJ0IiwgImQiLCAibCIsICJ2bm9kZUlkIiwgImNyZWF0ZVZOb2RlIiwgInR5cGUiLCAicHJvcHMiLCAia2V5IiwgImlzU3RhdGljQ2hpbGRyZW4iLCAiX19zb3VyY2UiLCAiX19zZWxmIiwgInJlZiIsICJpIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgInZub2RlSWQiLCAiX19pIiwgIl9fdSIsICJkZWZhdWx0UHJvcHMiLCAib3B0aW9ucyIsICJ1IiwgInAiLCAicCIsICJ1IiwgImkiLCAiYSIsICJiIiwgImMiLCAibyIsICJoIiwgInAiLCAidSIsICJ1IiwgInUiLCAidSIsICJkIiwgIkEiLCAiaCIsICJ1IiwgInUiLCAidSIsICJ1IiwgInYiLCAidSIsICJhIiwgIm4iLCAiayIsICJjIiwgInUiLCAidSIsICJuIiwgInUiLCAidSIsICJnIiwgInUiLCAidiIsICJpIiwgIndpZHRoIiwgImhlaWdodCIsICJ5IiwgIngiLCAicCIsICJ1MiIsICJ1MyIsICJ2IiwgImciLCAiaSIsICJnIiwgInJlcXVlc3QiLCAiZCIsICJBIiwgImgiLCAiY2FudmFzIiwgIm9iamVjdFVybCIsICJkIiwgIkEiLCAiaCIsICJBIiwgInUiLCAidiIsICJnIiwgImQiLCAiQSIsICJoIiwgIkEiLCAiaCIsICJkIiwgIkEiLCAiYXV0aCIsICJkIiwgIkEiLCAibGF5ZXIiLCAiaCIsICJpIiwgImwiLCAidSIsICJ2IiwgIngiLCAieSIsICJzY2VuZVgiLCAic2NlbmVZIiwgIlQiXQp9Cg==
