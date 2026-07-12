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
async function deleteImageBlob(id) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("IndexedDB delete failed"));
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
  sceneRef.current = scene;
  imageInfoRef.current = imageInfo;
  stageModeRef.current = stageMode;
  frozenRef.current = frozen;
  exportResRef.current = exportRes;
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
        void deleteImageBlob(removed.imageId).catch(() => void 0);
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
        swirl: g2.swirl,
        ripple: g2.ripple,
        zoom: g2.zoom,
        kaleido: g2.kaleido,
        mirror: g2.mirror,
        chroma: g2.chroma,
        hueOrbit: g2.hueOrbit,
        saturation: g2.saturation,
        contrast: g2.contrast,
        solarize: g2.solarize,
        grain: g2.grain,
        scanlines: g2.scanlines,
        vignette: g2.vignette,
        strobe: g2.strobe,
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
      if (event.key === "Tab") {
        event.preventDefault();
        setUiHidden((previous) => !previous);
        return;
      }
      const key = event.key.toLowerCase();
      if (key === "v") setStageMode("arrange");
      if (key === "p") setStageMode("play");
      if (key === " ") {
        event.preventDefault();
        setFrozen((previous) => !previous);
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
        void importFiles(files);
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
      updatePlayPointer(event, true);
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
  }
  h2(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onWheel = (event) => {
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
        /* @__PURE__ */ u3("footer", { class: "border-t border-[var(--line)] p-2", children: /* @__PURE__ */ u3("p", { class: "font-mono text-[8.5px] leading-relaxed text-[var(--mute)]", children: "V arrange \xB7 P play \xB7 Space freeze \xB7 Tab hide UI \xB7 drag / wheel / \u21E7wheel to move, scale, rotate" }) })
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
              "Play mode \u2014 drag the canvas \xB7 field:",
              " ",
              POINTER_MODES[Math.round(scene.global.pointerMode)]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvcHJlc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZW5naW5lLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9tZWRpYS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIFNjZW5lIGRvY3VtZW50IHR5cGVzIHNoYXJlZCBieSBjbGllbnQgYW5kIHNlcnZlciwgcGx1cyBzYW5pdGl6ZXJzIGFuZCB0aGVcbi8vIEpTT04gY29kZWMuIEEgc2NlbmUgaXMgc21hbGwgKHBhcmFtcyBvbmx5KSBcdTIwMTQgbWVkaWEgYmxvYnMgbGl2ZSBjbGllbnQtc2lkZS5cblxuZXhwb3J0IGNvbnN0IFNDRU5FX0RBVEFfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgVEhVTUJfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgTUFYX0xBWUVSUyA9IDEyO1xuXG5leHBvcnQgY29uc3QgTUVESUFfS0lORFMgPSBbXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIiwgXCJkYXRhXCJdIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgTWVkaWFLaW5kID0gKHR5cGVvZiBNRURJQV9LSU5EUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLFxuICBcImFkZFwiLFxuICBcInNjcmVlblwiLFxuICBcIm11bHRpcGx5XCIsXG4gIFwib3ZlcmxheVwiLFxuICBcImRpZmZlcmVuY2VcIixcbiAgXCJsaWdodGVuXCIsXG4gIFwiZGFya2VuXCIsXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IFRJTEVfTU9ERVMgPSBbXCJjcm9wXCIsIFwicmVwZWF0XCIsIFwibWlycm9yXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQkdfTU9ERVMgPSBbXCJ2b2lkXCIsIFwiZ3JhZGllbnRcIiwgXCJwbGFzbWFcIiwgXCJ0dW5uZWxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQT0lOVEVSX01PREVTID0gW1widm9ydGV4XCIsIFwiZ3Jhdml0eVwiLCBcInByaXNtXCIsIFwibWVsdFwiXSBhcyBjb25zdDtcblxuLyoqIFBlci1sYXllciBlZmZlY3QgKyB0cmFuc2Zvcm0gc3RhY2suIEFsbCAwLi4xIHVubGVzcyBub3RlZC4gKi9cbmV4cG9ydCB0eXBlIExheWVyRnggPSB7XG4gIC8vIFRyYW5zZm9ybSAoc2NlbmUgdW5pdHM6IHgveSBhcmUgY2VudGVyIG9mZnNldHMsIC0yLi4yOyBzY2FsZSAwLjA1Li42KVxuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogQmxlbmRNb2RlO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICAvKiogMCBjcm9wLCAxIHJlcGVhdCwgMiBtaXJyb3ItcmVwZWF0IFx1MjAxNCByZXBlYXQgbWFrZXMgYSBzaW5nbGUgaW1hZ2UgaW5maW5pdGUgKi9cbiAgdGlsZTogbnVtYmVyO1xuICAvLyBEaXN0b3J0XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgLyoqIC0xIHBpbmNoIC4uIDEgYnVsZ2UgKi9cbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGh1ZTogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICB0aW50Q29sb3I6IHN0cmluZztcbiAgLy8gTW90aW9uIChhbmltYXRlZCBieSB0aGUgZW5naW5lIGNsb2NrKVxuICAvKiogLTEuLjEgcmV2b2x1dGlvbnMtaXNoICovXG4gIHNwaW46IG51bWJlcjtcbiAgZHJpZnQ6IG51bWJlcjtcbiAgcHVsc2U6IG51bWJlcjtcbiAgc2hpbW1lcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVMYXllciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgLyoqIEluZGV4ZWREQiBtZWRpYSBrZXkgb24gdGhlIGNsaWVudCB0aGF0IGNyZWF0ZWQgaXQuICovXG4gIGltYWdlSWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogSG93IHRoZSBJbmRleGVkREIgYmxvYiBzaG91bGQgYmUgZGVjb2RlZCAvIHBsYXllZC4gRGVmYXVsdHMgdG8gaW1hZ2UuICovXG4gIG1lZGlhS2luZDogTWVkaWFLaW5kO1xuICBmeDogTGF5ZXJGeDtcbn07XG5cbi8qKiBHbG9iYWwgcG9zdC1wcm9jZXNzaW5nIHBhcmFtcy4gQWxsIDAuLjEgdW5sZXNzIG5vdGVkLiAqL1xuZXhwb3J0IHR5cGUgR2xvYmFsRnggPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IHN0cmluZztcbiAgYmdCOiBzdHJpbmc7XG4gIC8vIEZlZWRiYWNrXG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICAvKiogLTEuLjEgKi9cbiAgZmJab29tOiBudW1iZXI7XG4gIC8qKiAtMS4uMSAqL1xuICBmYlJvdGF0ZTogbnVtYmVyO1xuICBmYkh1ZTogbnVtYmVyO1xuICAvLyBTcGFjZVxuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGNocm9tYTogbnVtYmVyO1xuICBodWVPcmJpdDogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIHNvbGFyaXplOiBudW1iZXI7XG4gIC8vIFNpZ25hbFxuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIC8vIE1vdGlvblxuICAvKiogMC4uMiAqL1xuICBzcGVlZDogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIC8vIEN1cnNvclxuICBwb2ludGVyRm9yY2U6IG51bWJlcjtcbiAgcG9pbnRlclNpemU6IG51bWJlcjtcbiAgcG9pbnRlck1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxheWVyczogU2NlbmVMYXllcltdO1xuICBnbG9iYWw6IEdsb2JhbEZ4O1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfRlg6IExheWVyRnggPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICByb3RhdGlvbjogMCxcbiAgb3BhY2l0eTogMSxcbiAgYmxlbmQ6IFwibm9ybWFsXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIHRpbGU6IDAsXG4gIHdhcnA6IDAsXG4gIHN3aXJsOiAwLFxuICByaXBwbGU6IDAsXG4gIGthbGVpZG86IDAsXG4gIHBpeGVsYXRlOiAwLFxuICBidWxnZTogMCxcbiAgbWlycm9yOiAwLFxuICBodWU6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBicmlnaHRuZXNzOiAxLFxuICBpbnZlcnQ6IDAsXG4gIHBvc3Rlcml6ZTogMCxcbiAgY2hyb21hOiAwLFxuICBlZGdlczogMCxcbiAgdGludEFtb3VudDogMCxcbiAgdGludENvbG9yOiBcIiNhODc4ODBcIixcbiAgc3BpbjogMCxcbiAgZHJpZnQ6IDAsXG4gIHB1bHNlOiAwLFxuICBzaGltbWVyOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX0ZYOiBHbG9iYWxGeCA9IHtcbiAgYmdNb2RlOiAwLFxuICBiZ0E6IFwiIzA2MDYwOFwiLFxuICBiZ0I6IFwiIzFhMTIxNlwiLFxuICBmZWVkYmFjazogMCxcbiAgdHJhaWxzOiAwLjYsXG4gIGZiWm9vbTogMCxcbiAgZmJSb3RhdGU6IDAsXG4gIGZiSHVlOiAwLFxuICB3YXJwOiAwLFxuICBzd2lybDogMCxcbiAgcmlwcGxlOiAwLFxuICB6b29tOiAwLFxuICBrYWxlaWRvOiAwLFxuICBtaXJyb3I6IDAsXG4gIGNocm9tYTogMCxcbiAgaHVlT3JiaXQ6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBzb2xhcml6ZTogMCxcbiAgZ3JhaW46IDAsXG4gIHNjYW5saW5lczogMCxcbiAgdmlnbmV0dGU6IDAuMjIsXG4gIHN0cm9iZTogMCxcbiAgc3BlZWQ6IDEsXG4gIGF1ZGlvUmVhY3Q6IDAsXG4gIHBvaW50ZXJGb3JjZTogMC42LFxuICBwb2ludGVyU2l6ZTogMC4zNSxcbiAgcG9pbnRlck1vZGU6IDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBudW0odmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjbGFtcChmaW5pdGUodmFsdWUsIGZhbGxiYWNrKSwgbWluLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVMYXllckZ4KGlucHV0OiBQYXJ0aWFsPExheWVyRng+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0xBWUVSX0ZYO1xuICByZXR1cm4ge1xuICAgIHg6IG51bSh0LngsIGQueCwgLTMsIDMpLFxuICAgIHk6IG51bSh0LnksIGQueSwgLTMsIDMpLFxuICAgIHNjYWxlOiBudW0odC5zY2FsZSwgZC5zY2FsZSwgMC4wNSwgNiksXG4gICAgcm90YXRpb246IG51bSh0LnJvdGF0aW9uLCBkLnJvdGF0aW9uLCAtMzYwMCwgMzYwMCksXG4gICAgb3BhY2l0eTogbnVtKHQub3BhY2l0eSwgZC5vcGFjaXR5LCAwLCAxKSxcbiAgICBibGVuZDogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZCBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmQgYXMgQmxlbmRNb2RlKSA6IFwibm9ybWFsXCIsXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIHRpbGU6IG51bSh0LnRpbGUsIGQudGlsZSwgMCwgMiksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAga2FsZWlkbzogbnVtKHQua2FsZWlkbywgZC5rYWxlaWRvLCAwLCAxKSxcbiAgICBwaXhlbGF0ZTogbnVtKHQucGl4ZWxhdGUsIGQucGl4ZWxhdGUsIDAsIDEpLFxuICAgIGJ1bGdlOiBudW0odC5idWxnZSwgZC5idWxnZSwgLTEsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgaHVlOiBudW0odC5odWUsIGQuaHVlLCAwLCAxKSxcbiAgICBzYXR1cmF0aW9uOiBudW0odC5zYXR1cmF0aW9uLCBkLnNhdHVyYXRpb24sIDAsIDIpLFxuICAgIGNvbnRyYXN0OiBudW0odC5jb250cmFzdCwgZC5jb250cmFzdCwgMCwgMiksXG4gICAgYnJpZ2h0bmVzczogbnVtKHQuYnJpZ2h0bmVzcywgZC5icmlnaHRuZXNzLCAwLCAyKSxcbiAgICBpbnZlcnQ6IG51bSh0LmludmVydCwgZC5pbnZlcnQsIDAsIDEpLFxuICAgIHBvc3Rlcml6ZTogbnVtKHQucG9zdGVyaXplLCBkLnBvc3Rlcml6ZSwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBlZGdlczogbnVtKHQuZWRnZXMsIGQuZWRnZXMsIDAsIDEpLFxuICAgIHRpbnRBbW91bnQ6IG51bSh0LnRpbnRBbW91bnQsIGQudGludEFtb3VudCwgMCwgMSksXG4gICAgdGludENvbG9yOiBjb2xvcih0LnRpbnRDb2xvciwgZC50aW50Q29sb3IpLFxuICAgIHNwaW46IG51bSh0LnNwaW4sIGQuc3BpbiwgLTEsIDEpLFxuICAgIGRyaWZ0OiBudW0odC5kcmlmdCwgZC5kcmlmdCwgMCwgMSksXG4gICAgcHVsc2U6IG51bSh0LnB1bHNlLCBkLnB1bHNlLCAwLCAxKSxcbiAgICBzaGltbWVyOiBudW0odC5zaGltbWVyLCBkLnNoaW1tZXIsIDAsIDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVHbG9iYWxGeChpbnB1dDogUGFydGlhbDxHbG9iYWxGeD4gfCBudWxsIHwgdW5kZWZpbmVkKTogR2xvYmFsRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0dMT0JBTF9GWDtcbiAgcmV0dXJuIHtcbiAgICBiZ01vZGU6IG51bSh0LmJnTW9kZSwgZC5iZ01vZGUsIDAsIEJHX01PREVTLmxlbmd0aCAtIDEpLFxuICAgIGJnQTogY29sb3IodC5iZ0EsIGQuYmdBKSxcbiAgICBiZ0I6IGNvbG9yKHQuYmdCLCBkLmJnQiksXG4gICAgZmVlZGJhY2s6IG51bSh0LmZlZWRiYWNrLCBkLmZlZWRiYWNrLCAwLCAxKSxcbiAgICB0cmFpbHM6IG51bSh0LnRyYWlscywgZC50cmFpbHMsIDAsIDEpLFxuICAgIGZiWm9vbTogbnVtKHQuZmJab29tLCBkLmZiWm9vbSwgLTEsIDEpLFxuICAgIGZiUm90YXRlOiBudW0odC5mYlJvdGF0ZSwgZC5mYlJvdGF0ZSwgLTEsIDEpLFxuICAgIGZiSHVlOiBudW0odC5mYkh1ZSwgZC5mYkh1ZSwgMCwgMSksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAgem9vbTogbnVtKHQuem9vbSwgZC56b29tLCAwLCAxKSxcbiAgICBrYWxlaWRvOiBudW0odC5rYWxlaWRvLCBkLmthbGVpZG8sIDAsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBodWVPcmJpdDogbnVtKHQuaHVlT3JiaXQsIGQuaHVlT3JiaXQsIDAsIDEpLFxuICAgIHNhdHVyYXRpb246IG51bSh0LnNhdHVyYXRpb24sIGQuc2F0dXJhdGlvbiwgMCwgMiksXG4gICAgY29udHJhc3Q6IG51bSh0LmNvbnRyYXN0LCBkLmNvbnRyYXN0LCAwLCAyKSxcbiAgICBzb2xhcml6ZTogbnVtKHQuc29sYXJpemUsIGQuc29sYXJpemUsIDAsIDEpLFxuICAgIGdyYWluOiBudW0odC5ncmFpbiwgZC5ncmFpbiwgMCwgMSksXG4gICAgc2NhbmxpbmVzOiBudW0odC5zY2FubGluZXMsIGQuc2NhbmxpbmVzLCAwLCAxKSxcbiAgICB2aWduZXR0ZTogbnVtKHQudmlnbmV0dGUsIGQudmlnbmV0dGUsIDAsIDEpLFxuICAgIHN0cm9iZTogbnVtKHQuc3Ryb2JlLCBkLnN0cm9iZSwgMCwgMSksXG4gICAgc3BlZWQ6IG51bSh0LnNwZWVkLCBkLnNwZWVkLCAwLCAyKSxcbiAgICBhdWRpb1JlYWN0OiBudW0odC5hdWRpb1JlYWN0LCBkLmF1ZGlvUmVhY3QsIDAsIDEpLFxuICAgIHBvaW50ZXJGb3JjZTogbnVtKHQucG9pbnRlckZvcmNlLCBkLnBvaW50ZXJGb3JjZSwgMCwgMSksXG4gICAgcG9pbnRlclNpemU6IG51bSh0LnBvaW50ZXJTaXplLCBkLnBvaW50ZXJTaXplLCAwLjAyLCAxKSxcbiAgICBwb2ludGVyTW9kZTogbnVtKHQucG9pbnRlck1vZGUsIGQucG9pbnRlck1vZGUsIDAsIFBPSU5URVJfTU9ERVMubGVuZ3RoIC0gMSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU2NlbmUoaW5wdXQ6IHVua25vd24pOiBTY2VuZSB7XG4gIGNvbnN0IHJhdyA9IChpbnB1dCA/PyB7fSkgYXMgUGFydGlhbDxTY2VuZT47XG4gIGNvbnN0IGxheWVyc1JhdyA9IEFycmF5LmlzQXJyYXkocmF3LmxheWVycykgPyByYXcubGF5ZXJzLnNsaWNlKDAsIE1BWF9MQVlFUlMpIDogW107XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiByYXcubmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJhdy5uYW1lIDogXCJcIiwgXCJVbnRpdGxlZFwiKSxcbiAgICBsYXllcnM6IGxheWVyc1Jhd1xuICAgICAgLmZpbHRlcigobCk6IGwgaXMgU2NlbmVMYXllciA9PiAhIWwgJiYgdHlwZW9mIGwgPT09IFwib2JqZWN0XCIpXG4gICAgICAubWFwKChsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHR5cGVvZiBsLmlkID09PSBcInN0cmluZ1wiICYmIGwuaWQgPyBsLmlkLnNsaWNlKDAsIDQwKSA6IGBsYXllci0ke2luZGV4fWAsXG4gICAgICAgIGltYWdlSWQ6IHR5cGVvZiBsLmltYWdlSWQgPT09IFwic3RyaW5nXCIgPyBsLmltYWdlSWQuc2xpY2UoMCwgNjApIDogXCJcIixcbiAgICAgICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiBsLm5hbWUgPT09IFwic3RyaW5nXCIgPyBsLm5hbWUgOiBcIlwiLCBcIkxheWVyXCIpLFxuICAgICAgICBtZWRpYUtpbmQ6IE1FRElBX0tJTkRTLmluY2x1ZGVzKGwubWVkaWFLaW5kIGFzIE1lZGlhS2luZClcbiAgICAgICAgICA/IChsLm1lZGlhS2luZCBhcyBNZWRpYUtpbmQpXG4gICAgICAgICAgOiBcImltYWdlXCIsXG4gICAgICAgIGZ4OiBzYW5pdGl6ZUxheWVyRngobC5meCksXG4gICAgICB9KSksXG4gICAgZ2xvYmFsOiBzYW5pdGl6ZUdsb2JhbEZ4KHJhdy5nbG9iYWwpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU2NlbmUoc2NlbmU6IFNjZW5lKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjZW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNjZW5lKHJhdzogc3RyaW5nKTogU2NlbmUge1xuICB0cnkge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKEpTT04ucGFyc2UocmF3KSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKG51bGwpO1xuICB9XG59XG4iLCAiLy8gTmFtZWQgZ2xvYmFsLUZYIGxvb2tzLCBwbHVzIHJhbmRvbWl6ZSAvIG11dGF0ZSBoZWxwZXJzIGZvciBib3RoIHRoZSB3b3JsZFxuLy8gcGlwZWxpbmUgYW5kIHBlci1sYXllciBlZmZlY3Qgc3RhY2tzLlxuXG5pbXBvcnQge1xuICBCTEVORF9NT0RFUyxcbiAgREVGQVVMVF9HTE9CQUxfRlgsXG4gIERFRkFVTFRfTEFZRVJfRlgsXG4gIGNsYW1wLFxuICB0eXBlIEJsZW5kTW9kZSxcbiAgdHlwZSBHbG9iYWxGeCxcbiAgdHlwZSBMYXllckZ4LFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBsb29rKG92ZXJyaWRlczogUGFydGlhbDxHbG9iYWxGeD4pOiBHbG9iYWxGeCB7XG4gIHJldHVybiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYLCAuLi5vdmVycmlkZXMgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFdPUkxEX1BSRVNFVFM6IHsgbmFtZTogc3RyaW5nOyBjb2RlOiBzdHJpbmc7IGdsb2JhbDogR2xvYmFsRnggfVtdID0gW1xuICB7IG5hbWU6IFwiQ2xlYW4gc2lnbmFsXCIsIGNvZGU6IFwiMDBcIiwgZ2xvYmFsOiBsb29rKHt9KSB9LFxuICB7XG4gICAgbmFtZTogXCJMaXF1aWQgY2hyb21lXCIsXG4gICAgY29kZTogXCIwMVwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjUsIHN3aXJsOiAwLjM0LCBjaHJvbWE6IDAuMywgaHVlT3JiaXQ6IDAuMjQsIHNhdHVyYXRpb246IDEuMixcbiAgICAgIGNvbnRyYXN0OiAxLjEyLCBmZWVkYmFjazogMC40MiwgdHJhaWxzOiAwLjcyLCBmYlpvb206IDAuMTIsIGdyYWluOiAwLjEsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVjaG8gdHVubmVsXCIsXG4gICAgY29kZTogXCIwMlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB6b29tOiAwLjQsIGZlZWRiYWNrOiAwLjgyLCB0cmFpbHM6IDAuOSwgZmJab29tOiAwLjM0LCBmYlJvdGF0ZTogMC4xNCxcbiAgICAgIGZiSHVlOiAwLjEyLCBjaHJvbWE6IDAuMjgsIHZpZ25ldHRlOiAwLjQsIGh1ZU9yYml0OiAwLjE2LCBjb250cmFzdDogMS4wOCxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2FsZWlkbyBjYXRoZWRyYWxcIixcbiAgICBjb2RlOiBcIjAzXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGthbGVpZG86IDAuNzIsIG1pcnJvcjogMC4zLCBjaHJvbWE6IDAuMzQsIGh1ZU9yYml0OiAwLjQsIHNhdHVyYXRpb246IDEuNSxcbiAgICAgIGNvbnRyYXN0OiAxLjEsIGZlZWRiYWNrOiAwLjI2LCB0cmFpbHM6IDAuNiwgcmlwcGxlOiAwLjE4LCB2aWduZXR0ZTogMC4zLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWSFMgc2VhbmNlXCIsXG4gICAgY29kZTogXCIwNFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBzY2FubGluZXM6IDAuNjYsIGdyYWluOiAwLjUsIGNocm9tYTogMC42MiwgZmVlZGJhY2s6IDAuNDIsXG4gICAgICB0cmFpbHM6IDAuNjgsIHNhdHVyYXRpb246IDAuODgsIGNvbnRyYXN0OiAxLjIyLCB2aWduZXR0ZTogMC40OCwgc3Ryb2JlOiAwLjA4LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBY2lkIGJhdGhcIixcbiAgICBjb2RlOiBcIjA1XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuNjgsIHJpcHBsZTogMC40LCBodWVPcmJpdDogMC43LCBzYXR1cmF0aW9uOiAxLjg1LCBzb2xhcml6ZTogMC41LFxuICAgICAgY29udHJhc3Q6IDEuMTUsIGZlZWRiYWNrOiAwLjUsIHRyYWlsczogMC43OCwgZmJIdWU6IDAuMywgc3BlZWQ6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2hvc3QgdHJhaWxzXCIsXG4gICAgY29kZTogXCIwNlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBmZWVkYmFjazogMC45MiwgdHJhaWxzOiAwLjk3LCBmYlpvb206IDAuMDYsIGZiUm90YXRlOiAtMC4wNSwgc2F0dXJhdGlvbjogMC42LFxuICAgICAgY29udHJhc3Q6IDEuMTQsIGdyYWluOiAwLjIsIHZpZ25ldHRlOiAwLjUsIHNwZWVkOiAwLjUsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5lb24gYXV0b3BzeVwiLFxuICAgIGNvZGU6IFwiMDdcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgY2hyb21hOiAwLjgsIHNvbGFyaXplOiAwLjI4LCBjb250cmFzdDogMS4zNSwgc2F0dXJhdGlvbjogMS42LFxuICAgICAga2FsZWlkbzogMC4xOCwgaHVlT3JiaXQ6IDAuMzIsIGZlZWRiYWNrOiAwLjMsIHRyYWlsczogMC42Miwgc2NhbmxpbmVzOiAwLjIsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByaXNtIHN0b3JtXCIsXG4gICAgY29kZTogXCIwOFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjM0LCByaXBwbGU6IDAuMjgsIGNocm9tYTogMC45MiwgZmVlZGJhY2s6IDAuNTYsIHRyYWlsczogMC44LFxuICAgICAgZmJab29tOiAtMC4xNCwgZ3JhaW46IDAuMjQsIHNwZWVkOiAxLjUsIHN0cm9iZTogMC4xNiwgY29udHJhc3Q6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU29sYXIgZmxhcmVcIixcbiAgICBjb2RlOiBcIjA5XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHpvb206IDAuMjYsIHN3aXJsOiAwLjUsIHJpcHBsZTogMC4zNCwgaHVlT3JiaXQ6IDAuNSwgc2F0dXJhdGlvbjogMS43LFxuICAgICAgc29sYXJpemU6IDAuNzIsIGZlZWRiYWNrOiAwLjQ0LCB0cmFpbHM6IDAuNywgZmJIdWU6IDAuMiwgdmlnbmV0dGU6IDAuMzYsXG4gICAgICBzdHJvYmU6IDAuMSwgc3BlZWQ6IDAuOSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGVlcCB2b2lkXCIsXG4gICAgY29kZTogXCIxMFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBiZ01vZGU6IDIsIG1pcnJvcjogMC41LCB3YXJwOiAwLjI0LCBjaHJvbWE6IDAuMiwgc2F0dXJhdGlvbjogMC44NSxcbiAgICAgIGNvbnRyYXN0OiAxLjI1LCBmZWVkYmFjazogMC42OCwgdHJhaWxzOiAwLjg4LCBmYlpvb206IDAuMiwgdmlnbmV0dGU6IDAuNixcbiAgICAgIGh1ZU9yYml0OiAwLjEsIHNwZWVkOiAwLjYsXG4gICAgfSksXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiByYW5kKG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBjaGFuY2UocDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgcDtcbn1cblxudHlwZSBFZmZlY3RQaWNrID0geyBrZXk6IHN0cmluZzsgd2VpZ2h0OiBudW1iZXI7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9O1xuXG5mdW5jdGlvbiBwaWNrRGlzdGluY3QoaXRlbXM6IEVmZmVjdFBpY2tbXSwgY291bnQ6IG51bWJlcik6IEVmZmVjdFBpY2tbXSB7XG4gIGNvbnN0IHBvb2wgPSBpdGVtcy5zbGljZSgpO1xuICBjb25zdCBwaWNrczogRWZmZWN0UGlja1tdID0gW107XG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCBjb3VudCAmJiBwb29sLmxlbmd0aCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBvb2wpIHRvdGFsICs9IGl0ZW0ud2VpZ2h0O1xuICAgIGxldCByb2xsID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yICg7IGluZGV4IDwgcG9vbC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJvbGwgLT0gcG9vbFtpbmRleF0ud2VpZ2h0O1xuICAgICAgaWYgKHJvbGwgPD0gMCkgYnJlYWs7XG4gICAgfVxuICAgIHBpY2tzLnB1c2gocG9vbC5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIHBvb2wubGVuZ3RoIC0gMSksIDEpWzBdKTtcbiAgfVxuICByZXR1cm4gcGlja3M7XG59XG5cbi8vIEthbGVpZG8vcmlwcGxlIGFyZSB3ZWlnaHRlZCBsb3c6IHN5bW1ldHJpYyBtYW5kYWxhcyBhbGwgbG9vayBhbGlrZSwgc28gYVxuLy8gY2hhb3Mgcm9sbCBzaG91bGQgdXN1YWxseSBiZSBidWlsdCBvbiB3YXJwIC8gc3dpcmwgLyB6b29tIC8gbWlycm9yIGluc3RlYWQuXG5jb25zdCBXT1JMRF9TUEFDRV9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4zLCBtYXg6IDAuOSB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuNCwgbWluOiAwLjI1LCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJ6b29tXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMiwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS42LCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMTIsIG1heDogMC40IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjYsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuXTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmVkIGNoYW9zOiBvbmUgc3Ryb25nIHNwYWNlIGVmZmVjdCAocGx1cyBzb21ldGltZXMgYSBzb2Z0IHNlY29uZCksXG4gKiBhbiBvcHRpb25hbCBmZWVkYmFjayByZWNpcGUsIGEgY29sb3IgbW92ZSBhbmQgbGlnaHQgdGV4dHVyZSBcdTIwMTQgZXZlcnl0aGluZ1xuICogZWxzZSBzdGF5cyB6ZXJvIHNvIGVhY2ggcm9sbCBoYXMgYSBkaXN0aW5jdCBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21HbG9iYWxGeChiYXNlOiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dDogR2xvYmFsRnggPSB7XG4gICAgLi4uREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgYmdBOiBiYXNlLmJnQSxcbiAgICBiZ0I6IGJhc2UuYmdCLFxuICAgIGF1ZGlvUmVhY3Q6IGJhc2UuYXVkaW9SZWFjdCxcbiAgICBwb2ludGVyRm9yY2U6IGJhc2UucG9pbnRlckZvcmNlLFxuICAgIHBvaW50ZXJTaXplOiBiYXNlLnBvaW50ZXJTaXplLFxuICAgIHBvaW50ZXJNb2RlOiBNYXRoLmZsb29yKHJhbmQoMCwgNCkpLFxuICAgIGJnTW9kZTogTWF0aC5mbG9vcihyYW5kKDAsIDQpKSxcbiAgfTtcblxuICBjb25zdCBzcGFjZVBpY2tzID0gcGlja0Rpc3RpbmN0KFdPUkxEX1NQQUNFX1BPT0wsIGNoYW5jZSgwLjUpID8gMiA6IDEpO1xuICBzcGFjZVBpY2tzLmZvckVhY2goKHBpY2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41KTtcbiAgICAobmV4dCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pW3BpY2sua2V5XSA9IHN0cmVuZ3RoO1xuICB9KTtcblxuICBpZiAoY2hhbmNlKDAuNTUpKSB7XG4gICAgbmV4dC5mZWVkYmFjayA9IHJhbmQoMC4zLCAwLjg1KTtcbiAgICBuZXh0LnRyYWlscyA9IHJhbmQoMC41LCAwLjk1KTtcbiAgICBpZiAoY2hhbmNlKDAuNikpIG5leHQuZmJab29tID0gcmFuZCgtMC4zNSwgMC4zNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiUm90YXRlID0gcmFuZCgtMC4yNSwgMC4yNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiSHVlID0gcmFuZCgwLjA1LCAwLjQpO1xuICB9XG5cbiAgaWYgKGNoYW5jZSgwLjUpKSBuZXh0Lmh1ZU9yYml0ID0gcmFuZCgwLjEsIDAuNyk7XG4gIGlmIChjaGFuY2UoMC41KSkgbmV4dC5jaHJvbWEgPSByYW5kKDAuMSwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zb2xhcml6ZSA9IHJhbmQoMC4yLCAwLjcpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuODUsIDEuNik7XG4gIG5leHQuY29udHJhc3QgPSByYW5kKDAuOTUsIDEuMyk7XG5cbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5ncmFpbiA9IHJhbmQoMC4wNSwgMC40KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zY2FubGluZXMgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjEyKSkgbmV4dC5zdHJvYmUgPSByYW5kKDAuMDUsIDAuMyk7XG4gIG5leHQudmlnbmV0dGUgPSByYW5kKDAuMSwgMC41KTtcbiAgbmV4dC5zcGVlZCA9IHJhbmQoMC40NSwgMS41KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGVHbG9iYWxGeChjdXJyZW50OiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dCA9IHsgLi4uY3VycmVudCB9O1xuICBjb25zdCBrZXlzOiAoa2V5b2YgR2xvYmFsRngpW10gPSBbXG4gICAgXCJmZWVkYmFja1wiLCBcInRyYWlsc1wiLCBcImZiWm9vbVwiLCBcImZiUm90YXRlXCIsIFwiZmJIdWVcIiwgXCJ3YXJwXCIsIFwic3dpcmxcIixcbiAgICBcInJpcHBsZVwiLCBcInpvb21cIiwgXCJrYWxlaWRvXCIsIFwibWlycm9yXCIsIFwiY2hyb21hXCIsIFwiaHVlT3JiaXRcIiwgXCJzYXR1cmF0aW9uXCIsXG4gICAgXCJjb250cmFzdFwiLCBcInNvbGFyaXplXCIsIFwiZ3JhaW5cIiwgXCJzY2FubGluZXNcIiwgXCJ2aWduZXR0ZVwiLFxuICAgIFwic3Ryb2JlXCIsIFwic3BlZWRcIixcbiAgXTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHZhbHVlID0gbmV4dFtrZXldIGFzIG51bWJlcjtcbiAgICBjb25zdCBtYXggPSBrZXkgPT09IFwic2F0dXJhdGlvblwiIHx8IGtleSA9PT0gXCJjb250cmFzdFwiIHx8IGtleSA9PT0gXCJzcGVlZFwiID8gMiA6IDE7XG4gICAgY29uc3QgbWluID0ga2V5ID09PSBcImZiWm9vbVwiIHx8IGtleSA9PT0gXCJmYlJvdGF0ZVwiID8gLTEgOiAwO1xuICAgIChuZXh0W2tleV0gYXMgbnVtYmVyKSA9IGNsYW1wKHZhbHVlICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4yNCwgbWluLCBtYXgpO1xuICB9XG4gIG5leHQuZmVlZGJhY2sgPSBNYXRoLm1pbihuZXh0LmZlZWRiYWNrLCAwLjkpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuY29uc3QgQ0hBT1NfQkxFTkRTOiBCbGVuZE1vZGVbXSA9IFtcIm5vcm1hbFwiLCBcImFkZFwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkaWZmZXJlbmNlXCIsIFwibGlnaHRlblwiXTtcblxuY29uc3QgTEFZRVJfRElTVE9SVF9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4yLCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuMCwgbWluOiAwLjIsIG1heDogMC43IH0sXG4gIHsga2V5OiBcImJ1bGdlXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMywgbWF4OiAwLjggfSxcbiAgeyBrZXk6IFwicGl4ZWxhdGVcIiwgd2VpZ2h0OiAxLjMsIG1pbjogMC4xNSwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS4yLCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMSwgbWF4OiAwLjQ1IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjUsIG1pbjogMC4yNSwgbWF4OiAwLjc1IH0sXG5dO1xuXG4vKipcbiAqIFJhbmRvbWl6ZSBhIGxheWVyJ3MgZWZmZWN0IHN0YWNrIHdoaWxlIGtlZXBpbmcgaXRzIHBsYWNlbWVudCArIHZpc2liaWxpdHkuXG4gKiBTYW1lIHN0cnVjdHVyZSBhcyB0aGUgd29ybGQgcm9sbDogMS0yIGRpc3RvcnRpb25zLCBhIGNvbG9yIG1vdmUsIGEgYml0IG9mXG4gKiBtb3Rpb24gXHUyMDE0IG5vdCBldmVyeSBrbm9iIGF0IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21MYXllckZ4KGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgY29uc3QgbmV4dDogTGF5ZXJGeCA9IHtcbiAgICAuLi5yZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQpLFxuICAgIGJsZW5kOiBjaGFuY2UoMC40KSA/IENIQU9TX0JMRU5EU1tNYXRoLmZsb29yKHJhbmQoMCwgQ0hBT1NfQkxFTkRTLmxlbmd0aCkpXSA6IGN1cnJlbnQuYmxlbmQsXG4gIH07XG5cbiAgY29uc3QgZGlzdG9ydFBpY2tzID0gcGlja0Rpc3RpbmN0KExBWUVSX0RJU1RPUlRfUE9PTCwgY2hhbmNlKDAuNDUpID8gMiA6IDEpO1xuICBkaXN0b3J0UGlja3MuZm9yRWFjaCgocGljaywgaW5kZXgpID0+IHtcbiAgICBsZXQgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41NSk7XG4gICAgaWYgKHBpY2sua2V5ID09PSBcImJ1bGdlXCIgJiYgY2hhbmNlKDAuNSkpIHN0cmVuZ3RoID0gLXN0cmVuZ3RoO1xuICAgIChuZXh0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbcGljay5rZXldID0gc3RyZW5ndGg7XG4gIH0pO1xuXG4gIGlmIChjaGFuY2UoMC42KSkgbmV4dC5odWUgPSBNYXRoLnJhbmRvbSgpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuNzUsIDEuNjUpO1xuICBuZXh0LmNvbnRyYXN0ID0gcmFuZCgwLjksIDEuMzUpO1xuICBuZXh0LmJyaWdodG5lc3MgPSByYW5kKDAuOSwgMS4yKTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5wb3N0ZXJpemUgPSByYW5kKDAuMiwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmNocm9tYSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuMTgpKSBuZXh0LmVkZ2VzID0gcmFuZCgwLjIsIDAuOCk7XG4gIGlmIChjaGFuY2UoMC4wOCkpIG5leHQuaW52ZXJ0ID0gcmFuZCgwLjUsIDEpO1xuICBpZiAoY2hhbmNlKDAuMTUpKSBuZXh0LnRpbnRBbW91bnQgPSByYW5kKDAuMiwgMC42KTtcblxuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LnNwaW4gPSByYW5kKDAuMDUsIDAuNCkgKiAoY2hhbmNlKDAuNSkgPyAtMSA6IDEpO1xuICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZHJpZnQgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5wdWxzZSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuNDUpKSBuZXh0LnNoaW1tZXIgPSByYW5kKDAuMiwgMC44KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5ERUZBVUxUX0xBWUVSX0ZYLFxuICAgIHg6IGN1cnJlbnQueCxcbiAgICB5OiBjdXJyZW50LnksXG4gICAgc2NhbGU6IGN1cnJlbnQuc2NhbGUsXG4gICAgcm90YXRpb246IGN1cnJlbnQucm90YXRpb24sXG4gICAgb3BhY2l0eTogY3VycmVudC5vcGFjaXR5LFxuICAgIGJsZW5kOiBjdXJyZW50LmJsZW5kLFxuICAgIHZpc2libGU6IGN1cnJlbnQudmlzaWJsZSxcbiAgICB0aWxlOiBjdXJyZW50LnRpbGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVuZEluZGV4KGJsZW5kOiBCbGVuZE1vZGUpOiBudW1iZXIge1xuICBjb25zdCBpbmRleCA9IEJMRU5EX01PREVTLmluZGV4T2YoYmxlbmQpO1xuICByZXR1cm4gaW5kZXggPCAwID8gMCA6IGluZGV4O1xufVxuIiwgIi8vIFdlYkdMIGNvbXBvc2l0b3IuIFBpcGVsaW5lIHBlciBmcmFtZTpcbi8vICAgYmFja2dyb3VuZCBzaGFkZXIgLT4gc2NlbmUgRkJPXG4vLyAgIGZvciBlYWNoIGxheWVyOiBcdTAwRkNiZXItc2hhZGVyIChkaXN0b3J0ICsgY29sb3IgKyBibGVuZCBvdmVyIGRlc3QpIC0+IHBpbmctcG9uZyBzY2VuZSBGQk9cbi8vICAgcG9zdCBzaGFkZXIgKHNwYWNlIHdhcnAsIGZlZWRiYWNrIGVjaG8sIGdyYWRlKSAtPiBwaW5nLXBvbmcgcG9zdCBGQk9cbi8vICAgY29weSBwb3N0IEZCTyAtPiBzY3JlZW5cbi8vIFRoZSBwb3N0IHBpbmctcG9uZyBkb3VibGVzIGFzIHRoZSBmZWVkYmFjayBidWZmZXIsIHdoaWNoIGlzIHdoYXQgbWFrZXNcbi8vIHRyYWlscyAvIGVjaG8tdHVubmVsIGVmZmVjdHMgcG9zc2libGUuXG5cbmV4cG9ydCB0eXBlIFBvaW50ZXJTdGF0ZSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgZG93bjogYm9vbGVhbjtcbiAgYWN0aXZlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJSZW5kZXJTdGF0ZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2VJZDogc3RyaW5nO1xuICBwb3M6IFtudW1iZXIsIG51bWJlcl07XG4gIGV4dDogW251bWJlciwgbnVtYmVyXTtcbiAgcm90OiBudW1iZXI7XG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgYmxlbmQ6IG51bWJlcjtcbiAgdGlsZTogbnVtYmVyO1xuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIHBpeGVsYXRlOiBudW1iZXI7XG4gIGJ1bGdlOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICBodWU6IG51bWJlcjtcbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICBjb250cmFzdDogbnVtYmVyO1xuICBicmlnaHRuZXNzOiBudW1iZXI7XG4gIGludmVydDogbnVtYmVyO1xuICBwb3N0ZXJpemU6IG51bWJlcjtcbiAgY2hyb21hOiBudW1iZXI7XG4gIGVkZ2VzOiBudW1iZXI7XG4gIHRpbnQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICBzaGltbWVyOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEdsb2JhbFJlbmRlclN0YXRlID0ge1xuICBiZ01vZGU6IG51bWJlcjtcbiAgYmdBOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGJnQjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBmZWVkYmFjazogbnVtYmVyO1xuICB0cmFpbHM6IG51bWJlcjtcbiAgZmJab29tOiBudW1iZXI7XG4gIGZiUm90YXRlOiBudW1iZXI7XG4gIGZiSHVlOiBudW1iZXI7XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAga2FsZWlkbzogbnVtYmVyO1xuICBtaXJyb3I6IG51bWJlcjtcbiAgY2hyb21hOiBudW1iZXI7XG4gIGh1ZU9yYml0OiBudW1iZXI7XG4gIHNhdHVyYXRpb246IG51bWJlcjtcbiAgY29udHJhc3Q6IG51bWJlcjtcbiAgc29sYXJpemU6IG51bWJlcjtcbiAgZ3JhaW46IG51bWJlcjtcbiAgc2NhbmxpbmVzOiBudW1iZXI7XG4gIHZpZ25ldHRlOiBudW1iZXI7XG4gIHN0cm9iZTogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIHBvaW50ZXJGb3JjZTogbnVtYmVyO1xuICBwb2ludGVyU2l6ZTogbnVtYmVyO1xuICBwb2ludGVyTW9kZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRnJhbWVTdGF0ZSA9IHtcbiAgdGltZTogbnVtYmVyO1xuICBhdWRpbzogbnVtYmVyO1xuICBwb2ludGVyOiBQb2ludGVyU3RhdGU7XG4gIGxheWVyczogTGF5ZXJSZW5kZXJTdGF0ZVtdO1xuICBnbG9iYWw6IEdsb2JhbFJlbmRlclN0YXRlO1xufTtcblxuZXhwb3J0IHR5cGUgRW5naW5lSGFuZGxlID0ge1xuICByZXNpemUoY3NzV2lkdGg6IG51bWJlciwgY3NzSGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICBzZXRQaXhlbFJhdGlvQ2FwKGNhcDogbnVtYmVyKTogdm9pZDtcbiAgc2V0SW1hZ2UoaW1hZ2VJZDogc3RyaW5nLCBzb3VyY2U6IFRleEltYWdlU291cmNlKTogdm9pZDtcbiAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZDogc3RyaW5nKTogdm9pZDtcbiAgaGFzSW1hZ2UoaW1hZ2VJZDogc3RyaW5nKTogYm9vbGVhbjtcbiAgcmVuZGVyKHN0YXRlOiBGcmFtZVN0YXRlKTogdm9pZDtcbiAgY2xlYXJGZWVkYmFjaygpOiB2b2lkO1xuICBkZXN0cm95KCk6IHZvaWQ7XG59O1xuXG5jb25zdCBWRVJUID0gYFxuYXR0cmlidXRlIHZlYzIgYV9wb3M7XG52YXJ5aW5nIHZlYzIgdl91djtcbnZvaWQgbWFpbigpIHtcbiAgdl91diA9IGFfcG9zICogMC41ICsgMC41O1xuICBnbF9Qb3NpdGlvbiA9IHZlYzQoYV9wb3MsIDAuMCwgMS4wKTtcbn1cbmA7XG5cbmNvbnN0IEdMU0xfQ09NTU9OID0gYFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xubWF0MiByb3QyKGZsb2F0IGEpIHsgZmxvYXQgYyA9IGNvcyhhKTsgZmxvYXQgcyA9IHNpbihhKTsgcmV0dXJuIG1hdDIoYywgLXMsIHMsIGMpOyB9XG5mbG9hdCBoYXNoMjEodmVjMiBwKSB7IHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzIoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7IH1cbmZsb2F0IHZub2lzZSh2ZWMyIHApIHtcbiAgdmVjMiBpID0gZmxvb3IocCk7XG4gIHZlYzIgZiA9IGZyYWN0KHApO1xuICB2ZWMyIHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgZmxvYXQgYSA9IGhhc2gyMShpKTtcbiAgZmxvYXQgYiA9IGhhc2gyMShpICsgdmVjMigxLjAsIDAuMCkpO1xuICBmbG9hdCBjID0gaGFzaDIxKGkgKyB2ZWMyKDAuMCwgMS4wKSk7XG4gIGZsb2F0IGQgPSBoYXNoMjEoaSArIHZlYzIoMS4wLCAxLjApKTtcbiAgcmV0dXJuIG1peChtaXgoYSwgYiwgdS54KSwgbWl4KGMsIGQsIHUueCksIHUueSk7XG59XG5mbG9hdCBmYm0odmVjMiBwKSB7XG4gIGZsb2F0IHYgPSAwLjA7XG4gIGZsb2F0IGFtcCA9IDAuNTtcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICB2ICs9IGFtcCAqIHZub2lzZShwKTtcbiAgICBwID0gcCAqIDIuMDMgKyB2ZWMyKDE3LjMsIDkuMSk7XG4gICAgYW1wICo9IDAuNTtcbiAgfVxuICByZXR1cm4gdjtcbn1cbnZlYzMgaHVlUm90YXRlKHZlYzMgY29sb3IsIGZsb2F0IGFuZ2xlKSB7XG4gIGNvbnN0IHZlYzMgayA9IHZlYzMoMC41NzczNSk7XG4gIGZsb2F0IGMgPSBjb3MoYW5nbGUpO1xuICBmbG9hdCBzID0gc2luKGFuZ2xlKTtcbiAgcmV0dXJuIGNvbG9yICogYyArIGNyb3NzKGssIGNvbG9yKSAqIHMgKyBrICogZG90KGssIGNvbG9yKSAqICgxLjAgLSBjKTtcbn1cbmZsb2F0IGx1bWEodmVjMyBjKSB7IHJldHVybiBkb3QoYywgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7IH1cbmA7XG5cbmNvbnN0IENPUFlfRlJBRyA9IGBcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3RleDtcbnZvaWQgbWFpbigpIHsgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXh0dXJlMkQodV90ZXgsIHZfdXYpLnJnYiwgMS4wKTsgfVxuYDtcblxuY29uc3QgQkdfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gdmVjMiB1X3JlcztcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X21vZGU7XG51bmlmb3JtIHZlYzMgdV9jb2xvcl9hO1xudW5pZm9ybSB2ZWMzIHVfY29sb3JfYjtcbnVuaWZvcm0gZmxvYXQgdV9hdWRpbztcblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIG4gPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIHZlYzMgY29sID0gdV9jb2xvcl9hO1xuICBpZiAodV9tb2RlID4gMi41KSB7XG4gICAgLy8gVHVubmVsIHJpbmdzXG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDAuMTI7XG4gICAgZmxvYXQgYSA9IGF0YW4obi55LCBuLngpO1xuICAgIGZsb2F0IHdhdmUgPSBzaW4oMi40IC8gciAtIHVfdGltZSAqIDEuNiArIGEgKiAzLjAgKyBzaW4odV90aW1lICogMC40KSAqIDIuMCk7XG4gICAgY29sID0gbWl4KHVfY29sb3JfYSwgdV9jb2xvcl9iLCAwLjUgKyAwLjUgKiB3YXZlKTtcbiAgICBjb2wgKj0gc21vb3Roc3RlcCgwLjAsIDAuMjUsIHIpICogKDAuODUgKyB1X2F1ZGlvICogMC41KTtcbiAgfSBlbHNlIGlmICh1X21vZGUgPiAxLjUpIHtcbiAgICAvLyBQbGFzbWFcbiAgICBmbG9hdCB0ID0gdV90aW1lICogMC4yNTtcbiAgICBmbG9hdCBmID0gZmJtKG4gKiAyLjIgKyB2ZWMyKHQsIC10ICogMC43KSk7XG4gICAgZmxvYXQgZyA9IGZibShuICogMy40IC0gdmVjMih0ICogMC42LCB0KSArIGYgKiAyLjApO1xuICAgIGNvbCA9IG1peCh1X2NvbG9yX2EsIHVfY29sb3JfYiwgY2xhbXAoZyAqIDEuNiAtIDAuMiArIHVfYXVkaW8gKiAwLjMsIDAuMCwgMS4wKSk7XG4gICAgY29sID0gaHVlUm90YXRlKGNvbCwgZiAqIDEuMiArIHQgKiAwLjMpO1xuICB9IGVsc2UgaWYgKHVfbW9kZSA+IDAuNSkge1xuICAgIC8vIERyaWZ0aW5nIGdyYWRpZW50XG4gICAgdmVjMiBkaXIgPSB2ZWMyKGNvcyh1X3RpbWUgKiAwLjExKSwgc2luKHVfdGltZSAqIDAuMTEpKTtcbiAgICBmbG9hdCBnID0gY2xhbXAoZG90KG4sIGRpcikgKiAwLjkgKyAwLjUsIDAuMCwgMS4wKTtcbiAgICBjb2wgPSBtaXgodV9jb2xvcl9hLCB1X2NvbG9yX2IsIGcpO1xuICB9XG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sLCAxLjApO1xufVxuYDtcblxuY29uc3QgTEFZRVJfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfZGVzdDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfaW1nO1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSB2ZWMyIHVfaW1nX3RleGVsO1xudW5pZm9ybSB2ZWMyIHVfcG9zO1xudW5pZm9ybSB2ZWMyIHVfZXh0O1xudW5pZm9ybSBmbG9hdCB1X3JvdDtcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvO1xudW5pZm9ybSBmbG9hdCB1X29wYWNpdHk7XG51bmlmb3JtIGZsb2F0IHVfYmxlbmQ7XG51bmlmb3JtIGZsb2F0IHVfdGlsZTtcbnVuaWZvcm0gZmxvYXQgdV93YXJwO1xudW5pZm9ybSBmbG9hdCB1X3N3aXJsO1xudW5pZm9ybSBmbG9hdCB1X3JpcHBsZTtcbnVuaWZvcm0gZmxvYXQgdV9rYWxlaWRvO1xudW5pZm9ybSBmbG9hdCB1X3BpeGVsYXRlO1xudW5pZm9ybSBmbG9hdCB1X2J1bGdlO1xudW5pZm9ybSBmbG9hdCB1X21pcnJvcjtcbnVuaWZvcm0gZmxvYXQgdV9odWU7XG51bmlmb3JtIGZsb2F0IHVfc2F0O1xudW5pZm9ybSBmbG9hdCB1X2NvbjtcbnVuaWZvcm0gZmxvYXQgdV9icmk7XG51bmlmb3JtIGZsb2F0IHVfaW52ZXJ0O1xudW5pZm9ybSBmbG9hdCB1X3Bvc3RlcjtcbnVuaWZvcm0gZmxvYXQgdV9jaHJvbWE7XG51bmlmb3JtIGZsb2F0IHVfZWRnZXM7XG51bmlmb3JtIHZlYzMgdV90aW50O1xudW5pZm9ybSBmbG9hdCB1X3RpbnRfYW10O1xudW5pZm9ybSBmbG9hdCB1X3NoaW1tZXI7XG51bmlmb3JtIGZsb2F0IHVfc2VlZDtcblxudmVjMiB0aWxlVXYodmVjMiB1dikge1xuICBpZiAodV90aWxlID4gMS41KSByZXR1cm4gYWJzKGZyYWN0KHV2ICogMC41KSAqIDIuMCAtIDEuMCk7XG4gIGlmICh1X3RpbGUgPiAwLjUpIHJldHVybiBmcmFjdCh1dik7XG4gIHJldHVybiB1djtcbn1cblxuZmxvYXQgdGlsZU1hc2sodmVjMiB1dikge1xuICBpZiAodV90aWxlID4gMC41KSByZXR1cm4gMS4wO1xuICB2ZWMyIGluc2lkZSA9IHN0ZXAodmVjMigwLjApLCB1dikgKiBzdGVwKHV2LCB2ZWMyKDEuMCkpO1xuICByZXR1cm4gaW5zaWRlLnggKiBpbnNpZGUueTtcbn1cblxudmVjNCB0YXAodmVjMiB1dikge1xuICB2ZWM0IHMgPSB0ZXh0dXJlMkQodV9pbWcsIGNsYW1wKHRpbGVVdih1diksIDAuMCwgMS4wKSk7XG4gIHMuYSAqPSB0aWxlTWFzayh1dik7XG4gIHJldHVybiBzO1xufVxuXG52ZWMzIGJsZW5kUGl4KHZlYzMgZCwgdmVjMyBzKSB7XG4gIGZsb2F0IG0gPSB1X2JsZW5kO1xuICBpZiAobSA8IDAuNSkgcmV0dXJuIHM7XG4gIGlmIChtIDwgMS41KSByZXR1cm4gZCArIHM7XG4gIGlmIChtIDwgMi41KSByZXR1cm4gMS4wIC0gKDEuMCAtIGQpICogKDEuMCAtIHMpO1xuICBpZiAobSA8IDMuNSkgcmV0dXJuIGQgKiBzO1xuICBpZiAobSA8IDQuNSkge1xuICAgIHZlYzMgbG8gPSAyLjAgKiBkICogcztcbiAgICB2ZWMzIGhpID0gMS4wIC0gMi4wICogKDEuMCAtIGQpICogKDEuMCAtIHMpO1xuICAgIHJldHVybiBtaXgobG8sIGhpLCBzdGVwKDAuNSwgZCkpO1xuICB9XG4gIGlmIChtIDwgNS41KSByZXR1cm4gYWJzKGQgLSBzKTtcbiAgaWYgKG0gPCA2LjUpIHJldHVybiBtYXgoZCwgcyk7XG4gIHJldHVybiBtaW4oZCwgcyk7XG59XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKSwgMS4wKTtcbiAgdmVjMiBwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICB2ZWMyIHEgPSByb3QyKC11X3JvdCkgKiAocCAtIHVfcG9zKTtcbiAgdmVjMiBjID0gcSAvIG1heCh1X2V4dCwgdmVjMigxZS01KSkgKiAwLjU7XG5cbiAgLy8gRGlzdG9ydCBpbiBhc3BlY3Qtbm9ybWFsaXplZCBsYXllciBzcGFjZSBzbyBjaXJjdWxhciBlZmZlY3RzIHN0YXkgY2lyY3VsYXIuXG4gIHZlYzIgbGEgPSB2ZWMyKG1heCh1X2V4dC54LCAxZS01KSAvIG1heCh1X2V4dC55LCAxZS01KSwgMS4wKTtcbiAgdmVjMiBuID0gYyAqIGxhO1xuICBmbG9hdCB0ID0gdV90aW1lICsgdV9zZWVkICogMzcuMDtcbiAgZmxvYXQgc2hpbSA9IDEuMCArIHVfc2hpbW1lciAqIDAuNiAqIHNpbih0ICogMC45KTtcblxuICBuICo9IDEuMCArIHVfYnVsZ2UgKiBkb3QobiwgbikgKiAzLjI7XG5cbiAgaWYgKHVfc3dpcmwgPiAwLjAwMykge1xuICAgIGZsb2F0IHIgPSBsZW5ndGgobik7XG4gICAgbiA9IHJvdDIodV9zd2lybCAqIDYuMCAqIHNoaW0gKiBleHAoLXIgKiAyLjQpKSAqIG47XG4gIH1cbiAgaWYgKHVfa2FsZWlkbyA+IDAuMDAzKSB7XG4gICAgZmxvYXQgc2VnID0gZmxvb3IoMi4wICsgdV9rYWxlaWRvICogMTQuMCk7XG4gICAgZmxvYXQgc2xpY2UgPSA2LjI4MzE4NTMgLyBzZWc7XG4gICAgZmxvYXQgYSA9IGF0YW4obi55LCBuLngpICsgdCAqIHVfc2hpbW1lciAqIDAuMTU7XG4gICAgYSA9IGFicyhtb2QoYSwgc2xpY2UpIC0gc2xpY2UgKiAwLjUpO1xuICAgIG4gPSBsZW5ndGgobikgKiB2ZWMyKGNvcyhhKSwgc2luKGEpKTtcbiAgfVxuICBpZiAodV9yaXBwbGUgPiAwLjAwMykge1xuICAgIGZsb2F0IHIgPSBsZW5ndGgobikgKyAxZS00O1xuICAgIG4gKz0gKG4gLyByKSAqIHNpbihyICogMzQuMCAtIHQgKiAzLjIpICogdV9yaXBwbGUgKiAwLjA3ICogc2hpbTtcbiAgfVxuICBpZiAodV93YXJwID4gMC4wMDMpIHtcbiAgICB2ZWMyIHcgPSB2ZWMyKFxuICAgICAgZmJtKG4gKiAzLjAgKyB2ZWMyKHQgKiAwLjIyICogKDAuMyArIHVfc2hpbW1lciksIHVfc2VlZCkpLFxuICAgICAgZmJtKG4gKiAzLjAgKyB2ZWMyKHVfc2VlZCArIDcuMywgLXQgKiAwLjE5ICogKDAuMyArIHVfc2hpbW1lcikpKVxuICAgICk7XG4gICAgbiArPSAodyAtIDAuNSkgKiB1X3dhcnAgKiAwLjU1O1xuICB9XG4gIG4ueCA9IG1peChuLngsIGFicyhuLngpLCBjbGFtcCh1X21pcnJvciAqIDIuMCwgMC4wLCAxLjApKTtcbiAgbi55ID0gbWl4KG4ueSwgYWJzKG4ueSksIGNsYW1wKHVfbWlycm9yICogMi4wIC0gMS4wLCAwLjAsIDEuMCkpO1xuXG4gIGMgPSBuIC8gbGE7XG4gIHZlYzIgdXYgPSBjICsgMC41O1xuXG4gIGlmICh1X3BpeGVsYXRlID4gMC4wMDMpIHtcbiAgICBmbG9hdCBjZWxscyA9IGZsb29yKG1peCgyMjAuMCwgNi4wLCBwb3codV9waXhlbGF0ZSwgMC41NSkpKTtcbiAgICB1diA9IChmbG9vcih1diAqIGNlbGxzKSArIDAuNSkgLyBjZWxscztcbiAgfVxuXG4gIHZlYzIgY2QgPSBjICogdV9jaHJvbWEgKiAwLjE7XG4gIHZlYzQgc2FtcGxlTWlkID0gdGFwKHV2KTtcbiAgdmVjMyBjb2wgPSB2ZWMzKHRhcCh1diArIGNkKS5yLCBzYW1wbGVNaWQuZywgdGFwKHV2IC0gY2QpLmIpO1xuICBmbG9hdCBhbHBoYSA9IHNhbXBsZU1pZC5hO1xuXG4gIGlmICh1X2VkZ2VzID4gMC4wMDMpIHtcbiAgICB2ZWMyIGUgPSBtYXgodV9pbWdfdGV4ZWwgKiAxLjUsIHZlYzIoMC4wMDE1KSk7XG4gICAgZmxvYXQgZ3ggPSBsdW1hKHRhcCh1diArIHZlYzIoZS54LCAwLjApKS5yZ2IpIC0gbHVtYSh0YXAodXYgLSB2ZWMyKGUueCwgMC4wKSkucmdiKTtcbiAgICBmbG9hdCBneSA9IGx1bWEodGFwKHV2ICsgdmVjMigwLjAsIGUueSkpLnJnYikgLSBsdW1hKHRhcCh1diAtIHZlYzIoMC4wLCBlLnkpKS5yZ2IpO1xuICAgIGZsb2F0IGcgPSBjbGFtcChsZW5ndGgodmVjMihneCwgZ3kpKSAqIDQuMCwgMC4wLCAxLjApO1xuICAgIHZlYzMgbmVvbiA9IGcgKiAoY29sICogMS42ICsgaHVlUm90YXRlKHZlYzMoMC45LCAwLjIsIDEuMCksIHQgKiAwLjUpICogMC43KTtcbiAgICBjb2wgPSBtaXgoY29sLCBuZW9uLCB1X2VkZ2VzKTtcbiAgfVxuXG4gIC8vIEdyYWRlXG4gIGNvbCA9IChjb2wgLSAwLjUpICogdV9jb24gKyAwLjU7XG4gIGNvbCAqPSB1X2JyaTtcbiAgY29sID0gbWl4KHZlYzMobHVtYShjb2wpKSwgY29sLCB1X3NhdCk7XG4gIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIHVfaHVlICogNi4yODMxODUzICsgdV9zaGltbWVyICogMC40ICogc2luKHQgKiAwLjYpKTtcbiAgaWYgKHVfcG9zdGVyID4gMC4wMDMpIHtcbiAgICBmbG9hdCBsZXZlbHMgPSBtaXgoMTQuMCwgMi4wLCB1X3Bvc3Rlcik7XG4gICAgY29sID0gbWl4KGNvbCwgZmxvb3IoY29sICogbGV2ZWxzICsgMC41KSAvIGxldmVscywgY2xhbXAodV9wb3N0ZXIgKiA0LjAsIDAuMCwgMS4wKSk7XG4gIH1cbiAgY29sID0gbWl4KGNvbCwgMS4wIC0gY29sLCB1X2ludmVydCk7XG4gIGNvbCA9IG1peChjb2wsIHZlYzMobHVtYShjb2wpKSAqIHVfdGludCAqIDIuMSwgdV90aW50X2FtdCk7XG4gIGNvbCA9IGNsYW1wKGNvbCwgMC4wLCAxLjUpO1xuXG4gIHZlYzMgZGVzdCA9IHRleHR1cmUyRCh1X2Rlc3QsIHZfdXYpLnJnYjtcbiAgdmVjMyBibGVuZGVkID0gY2xhbXAoYmxlbmRQaXgoZGVzdCwgY29sKSwgMC4wLCAxLjApO1xuICBmbG9hdCBhID0gY2xhbXAoYWxwaGEgKiB1X29wYWNpdHkgKiAoMS4wICsgdV9hdWRpbyAqIDAuMCksIDAuMCwgMS4wKTtcbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoZGVzdCwgYmxlbmRlZCwgYSksIDEuMCk7XG59XG5gO1xuXG5jb25zdCBQT1NUX0ZSQUcgPSBgXG4ke0dMU0xfQ09NTU9OfVxudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3NjZW5lO1xudW5pZm9ybSBzYW1wbGVyMkQgdV9wcmV2O1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG51bmlmb3JtIHZlYzIgdV9wb2ludGVyO1xudW5pZm9ybSB2ZWMyIHVfcG9pbnRlcl92ZWw7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9kb3duO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfYWN0aXZlO1xudW5pZm9ybSBmbG9hdCB1X2ZlZWRiYWNrO1xudW5pZm9ybSBmbG9hdCB1X3RyYWlscztcbnVuaWZvcm0gZmxvYXQgdV9mYl96b29tO1xudW5pZm9ybSBmbG9hdCB1X2ZiX3JvdGF0ZTtcbnVuaWZvcm0gZmxvYXQgdV9mYl9odWU7XG51bmlmb3JtIGZsb2F0IHVfd2FycDtcbnVuaWZvcm0gZmxvYXQgdV9zd2lybDtcbnVuaWZvcm0gZmxvYXQgdV9yaXBwbGU7XG51bmlmb3JtIGZsb2F0IHVfem9vbTtcbnVuaWZvcm0gZmxvYXQgdV9rYWxlaWRvO1xudW5pZm9ybSBmbG9hdCB1X21pcnJvcjtcbnVuaWZvcm0gZmxvYXQgdV9jaHJvbWE7XG51bmlmb3JtIGZsb2F0IHVfaHVlX29yYml0O1xudW5pZm9ybSBmbG9hdCB1X3NhdDtcbnVuaWZvcm0gZmxvYXQgdV9jb247XG51bmlmb3JtIGZsb2F0IHVfc29sYXJpemU7XG51bmlmb3JtIGZsb2F0IHVfZ3JhaW47XG51bmlmb3JtIGZsb2F0IHVfc2NhbmxpbmVzO1xudW5pZm9ybSBmbG9hdCB1X3ZpZ25ldHRlO1xudW5pZm9ybSBmbG9hdCB1X3N0cm9iZTtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX2ZvcmNlO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfc2l6ZTtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX21vZGU7XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKSwgMS4wKTtcbiAgdmVjMiBuID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICBmbG9hdCB0ID0gdV90aW1lO1xuICBmbG9hdCBjaHJvbWFBbXQgPSB1X2Nocm9tYTtcblxuICAvLyBDdXJzb3IgZmllbGRcbiAgaWYgKHVfcG9pbnRlcl9hY3RpdmUgPiAwLjUgJiYgdV9wb2ludGVyX2ZvcmNlID4gMC4wMDMpIHtcbiAgICB2ZWMyIHBuID0gKHVfcG9pbnRlciAtIDAuNSkgKiBhc3BlY3Q7XG4gICAgdmVjMiBkID0gbiAtIHBuO1xuICAgIGZsb2F0IHN6ID0gbWF4KHVfcG9pbnRlcl9zaXplICogMC44LCAwLjA0KTtcbiAgICBmbG9hdCBpbmZsID0gZXhwKC1kb3QoZCwgZCkgLyAoc3ogKiBzeikpICogdV9wb2ludGVyX2ZvcmNlICogKDAuNTUgKyAwLjQ1ICogdV9wb2ludGVyX2Rvd24pO1xuICAgIGlmICh1X3BvaW50ZXJfbW9kZSA8IDAuNSkge1xuICAgICAgbiA9IHBuICsgcm90MihpbmZsICogMi42KSAqIGQ7XG4gICAgfSBlbHNlIGlmICh1X3BvaW50ZXJfbW9kZSA8IDEuNSkge1xuICAgICAgbiAtPSBkICogaW5mbCAqIDAuNTU7XG4gICAgfSBlbHNlIGlmICh1X3BvaW50ZXJfbW9kZSA8IDIuNSkge1xuICAgICAgY2hyb21hQW10ICs9IGluZmwgKiAxLjQ7XG4gICAgICBuICs9IGQgKiBpbmZsICogMC4zO1xuICAgIH0gZWxzZSB7XG4gICAgICBuLnkgKz0gaW5mbCAqIDAuMyAqICgwLjU1ICsgMC40NSAqIHNpbih0ICogMi4wICsgbi54ICogMTIuMCkpO1xuICAgIH1cbiAgICBuICs9IHVfcG9pbnRlcl92ZWwgKiBpbmZsICogMS42O1xuICB9XG5cbiAgLy8gU3BhY2VcbiAgbiAqPSAxLjAgLSB1X3pvb20gKiAoMC4zICsgMC4xICogc2luKHQgKiAwLjcpKSAtIHVfYXVkaW8gKiB1X3pvb20gKiAwLjE1O1xuICBpZiAodV9zd2lybCA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKTtcbiAgICBuID0gcm90Mih1X3N3aXJsICogKDMuNCArIHVfYXVkaW8gKiAxLjUpICogZXhwKC1yICogMS43KSAqIHNpbih0ICogMC4yMyArIDEuOSkpICogbjtcbiAgfVxuICBpZiAodV9rYWxlaWRvID4gMC4wMDMpIHtcbiAgICBmbG9hdCBzZWcgPSBmbG9vcigyLjAgKyB1X2thbGVpZG8gKiAxNS4wKTtcbiAgICBmbG9hdCBzbGljZSA9IDYuMjgzMTg1MyAvIHNlZztcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCkgKyB0ICogMC4wNTtcbiAgICBhID0gYWJzKG1vZChhLCBzbGljZSkgLSBzbGljZSAqIDAuNSk7XG4gICAgbiA9IGxlbmd0aChuKSAqIHZlYzIoY29zKGEpLCBzaW4oYSkpO1xuICB9XG4gIGlmICh1X3JpcHBsZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDFlLTQ7XG4gICAgbiArPSAobiAvIHIpICogc2luKHIgKiAyNi4wIC0gdCAqIDIuNikgKiB1X3JpcHBsZSAqIDAuMDU7XG4gIH1cbiAgaWYgKHVfd2FycCA+IDAuMDAzKSB7XG4gICAgdmVjMiB3ID0gdmVjMihmYm0obiAqIDIuNCArIHQgKiAwLjE2KSwgZmJtKG4gKiAyLjQgLSB0ICogMC4xMyArIDUuMikpO1xuICAgIG4gKz0gKHcgLSAwLjUpICogdV93YXJwICogKDAuMzQgKyB1X2F1ZGlvICogMC4yKTtcbiAgfVxuICBuLnggPSBtaXgobi54LCBhYnMobi54KSwgY2xhbXAodV9taXJyb3IgKiAyLjAsIDAuMCwgMS4wKSk7XG4gIG4ueSA9IG1peChuLnksIGFicyhuLnkpLCBjbGFtcCh1X21pcnJvciAqIDIuMCAtIDEuMCwgMC4wLCAxLjApKTtcblxuICB2ZWMyIHV2ID0gbiAvIGFzcGVjdCArIDAuNTtcblxuICB2ZWMyIGNkID0gKHV2IC0gMC41KSAqIGNocm9tYUFtdCAqIDAuMDU7XG4gIHZlYzMgY29sID0gdmVjMyhcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYgKyBjZCkucixcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYpLmcsXG4gICAgdGV4dHVyZTJEKHVfc2NlbmUsIHV2IC0gY2QpLmJcbiAgKTtcblxuICAvLyBGZWVkYmFjayBlY2hvXG4gIGlmICh1X2ZlZWRiYWNrID4gMC4wMDMpIHtcbiAgICB2ZWMyIGZwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICAgIGZwID0gcm90Mih1X2ZiX3JvdGF0ZSAqIDAuMDU1KSAqIGZwO1xuICAgIGZwICo9IDEuMCAtIHVfZmJfem9vbSAqIDAuMDQ1O1xuICAgIHZlYzMgcHJldiA9IHRleHR1cmUyRCh1X3ByZXYsIGZwIC8gYXNwZWN0ICsgMC41KS5yZ2I7XG4gICAgcHJldiA9IGh1ZVJvdGF0ZShwcmV2LCB1X2ZiX2h1ZSAqIDAuNSk7XG4gICAgdmVjMyBlY2hvID0gcHJldiAqIG1peCgwLjU1LCAwLjk4NSwgdV90cmFpbHMpO1xuICAgIGNvbCA9IG1peChjb2wsIG1heChjb2wsIGVjaG8pLCB1X2ZlZWRiYWNrKTtcbiAgfVxuXG4gIC8vIEdyYWRlXG4gIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIHVfaHVlX29yYml0ICogdCAqIDAuOSk7XG4gIGNvbCA9IChjb2wgLSAwLjUpICogdV9jb24gKyAwLjU7XG4gIGNvbCA9IG1peCh2ZWMzKGx1bWEoY29sKSksIGNvbCwgdV9zYXQpO1xuICBpZiAodV9zb2xhcml6ZSA+IDAuMDAzKSB7XG4gICAgdmVjMyBzb2wgPSBtaXgoY29sLCAxLjAgLSBjb2wsIHNtb290aHN0ZXAoMC41IC0gMC4yNSwgMC41ICsgMC4yNSwgY29sKSk7XG4gICAgY29sID0gbWl4KGNvbCwgc29sLCB1X3NvbGFyaXplKTtcbiAgfVxuICBjb2wgKj0gMS4wICsgdV9zdHJvYmUgKiAoMC40NSAqIHNpbih0ICogMTEuMCkgKyB1X2F1ZGlvICogMC44KTtcblxuICAvLyBUZXh0dXJlXG4gIGlmICh1X3NjYW5saW5lcyA+IDAuMDAzKSB7XG4gICAgY29sICo9IDEuMCAtIHVfc2NhbmxpbmVzICogMC4zMiAqICgwLjUgKyAwLjUgKiBzaW4odl91di55ICogdV9yZXMueSAqIDIuNCkpO1xuICB9XG4gIGlmICh1X2dyYWluID4gMC4wMDMpIHtcbiAgICBjb2wgKz0gKGhhc2gyMSh2X3V2ICogdV9yZXMgKyBmcmFjdCh0KSAqIDYxLjcpIC0gMC41KSAqIHVfZ3JhaW4gKiAwLjM7XG4gIH1cbiAgdmVjMiB2cCA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgY29sICo9IDEuMCAtIHVfdmlnbmV0dGUgKiBzbW9vdGhzdGVwKDAuMzUsIDEuMTUsIGxlbmd0aCh2cCkgKiAxLjM1KTtcblxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsYW1wKGNvbCwgMC4wLCAxLjApLCAxLjApO1xufVxuYDtcblxudHlwZSBUYXJnZXQgPSB7XG4gIGZyYW1lYnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xuICB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxudHlwZSBQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+O1xufTtcblxuZnVuY3Rpb24gY29tcGlsZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gIGlmICghc2hhZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHNoYWRlclwiKTtcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGNvbnN0IGluZm8gPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgPz8gXCJ1bmtub3duXCI7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTaGFkZXIgY29tcGlsZSBmYWlsZWQ6ICR7aW5mb31gKTtcbiAgfVxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvZ3JhbShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBmcmFnOiBzdHJpbmcpOiBQcm9ncmFtIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgaWYgKCFwcm9ncmFtKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHByb2dyYW1cIik7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5WRVJURVhfU0hBREVSLCBWRVJUKSk7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWcpKTtcbiAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYV9wb3NcIik7XG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQcm9ncmFtIGxpbmsgZmFpbGVkOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pID8/IFwidW5rbm93blwifWApO1xuICB9XG4gIGNvbnN0IHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+ID0ge307XG4gIGNvbnN0IGNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpIGFzIG51bWJlcjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29uc3QgaW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSk7XG4gICAgaWYgKGluZm8pIHVuaWZvcm1zW2luZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgaW5mby5uYW1lKTtcbiAgfVxuICByZXR1cm4geyBwcm9ncmFtLCB1bmlmb3JtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBtYXRjaCA9IC9eIyhbMC05YS1mXXs2fSkkL2kuZXhlYyhoZXgpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gWzAsIDAsIDBdO1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxNik7XG4gIHJldHVybiBbKCh2YWx1ZSA+PiAxNikgJiAyNTUpIC8gMjU1LCAoKHZhbHVlID4+IDgpICYgMjU1KSAvIDI1NSwgKHZhbHVlICYgMjU1KSAvIDI1NV07XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZTogVGV4SW1hZ2VTb3VyY2UpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICBpZiAodHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLnZpZGVvV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UudmlkZW9IZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2UubmF0dXJhbFdpZHRoIHx8IHNvdXJjZS53aWR0aCB8fCAxKSxcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoMSwgc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXApIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGNvbnN0IGFueVNvdXJjZSA9IHNvdXJjZSBhcyB7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5tYXgoMSwgYW55U291cmNlLndpZHRoID8/IDEpLFxuICAgIGhlaWdodDogTWF0aC5tYXgoMSwgYW55U291cmNlLmhlaWdodCA/PyAxKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZ2luZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogRW5naW5lSGFuZGxlIHtcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIsIHtcbiAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgIGFscGhhOiBmYWxzZSxcbiAgICBkZXB0aDogZmFsc2UsXG4gICAgc3RlbmNpbDogZmFsc2UsXG4gICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcbiAgICBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuICB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsO1xuICBpZiAoIWdsKSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlclwiKTtcblxuICBjb25zdCBxdWFkID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAtMSwgMywgLTEsIC0xLCAzXSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICBjb25zdCBwcm9ncmFtcyA9IHtcbiAgICBiZzogbWFrZVByb2dyYW0oZ2wsIEJHX0ZSQUcpLFxuICAgIGxheWVyOiBtYWtlUHJvZ3JhbShnbCwgTEFZRVJfRlJBRyksXG4gICAgcG9zdDogbWFrZVByb2dyYW0oZ2wsIFBPU1RfRlJBRyksXG4gICAgY29weTogbWFrZVByb2dyYW0oZ2wsIENPUFlfRlJBRyksXG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZVRleHR1cmUoKTogV2ViR0xUZXh0dXJlIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gZ2whLmNyZWF0ZVRleHR1cmUoKTtcbiAgICBpZiAoIXRleHR1cmUpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGV4dHVyZVwiKTtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9NSU5fRklMVEVSLCBnbCEuTElORUFSKTtcbiAgICBnbCEudGV4UGFyYW1ldGVyaShnbCEuVEVYVFVSRV8yRCwgZ2whLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2whLkxJTkVBUik7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX1dSQVBfUywgZ2whLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9XUkFQX1QsIGdsIS5DTEFNUF9UT19FREdFKTtcbiAgICByZXR1cm4gdGV4dHVyZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VUYXJnZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBUYXJnZXQge1xuICAgIGNvbnN0IHRleHR1cmUgPSBtYWtlVGV4dHVyZSgpO1xuICAgIGdsIS50ZXhJbWFnZTJEKGdsIS5URVhUVVJFXzJELCAwLCBnbCEuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2whLlJHQkEsIGdsIS5VTlNJR05FRF9CWVRFLCBudWxsKTtcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IGdsIS5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgIGlmICghZnJhbWVidWZmZXIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgZnJhbWVidWZmZXJcIik7XG4gICAgZ2whLmJpbmRGcmFtZWJ1ZmZlcihnbCEuRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyKTtcbiAgICBnbCEuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2whLkZSQU1FQlVGRkVSLCBnbCEuQ09MT1JfQVRUQUNITUVOVDAsIGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgcmV0dXJuIHsgZnJhbWVidWZmZXIsIHRleHR1cmUsIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IFRhcmdldCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBpZiAodGFyZ2V0LndpZHRoID09PSB3aWR0aCAmJiB0YXJnZXQuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRhcmdldC50ZXh0dXJlKTtcbiAgICBnbCEudGV4SW1hZ2UyRChnbCEuVEVYVFVSRV8yRCwgMCwgZ2whLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsIS5SR0JBLCBnbCEuVU5TSUdORURfQllURSwgbnVsbCk7XG4gICAgdGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgdGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGxldCB3aWR0aCA9IE1hdGgubWF4KDIsIGNhbnZhcy53aWR0aCB8fCAyKTtcbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KDIsIGNhbnZhcy5oZWlnaHQgfHwgMik7XG4gIGxldCBwaXhlbFJhdGlvQ2FwID0gMS41O1xuICBsZXQgY3NzV2lkdGggPSB3aWR0aDtcbiAgbGV0IGNzc0hlaWdodCA9IGhlaWdodDtcblxuICBjb25zdCB0YXJnZXRzID0ge1xuICAgIHNjZW5lQTogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBzY2VuZUI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEE6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gIH07XG4gIGxldCBwb3N0RmxpcCA9IGZhbHNlO1xuICBsZXQgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuXG4gIC8vIFBsYWNlaG9sZGVyIHRleHR1cmUgZm9yIGxheWVycyB3aG9zZSBpbWFnZSBpcyBtaXNzaW5nIChlLmcuIGEgc2NlbmUgbG9hZGVkXG4gIC8vIG9uIGFub3RoZXIgZGV2aWNlKTogYW4gYW5pbWF0ZWQtbG9va2luZyBtYWdlbnRhL2RlZXAtYmx1ZSBncmlkLlxuICBjb25zdCBtaXNzaW5nVGV4dHVyZSA9IG1ha2VUZXh0dXJlKCk7XG4gIHtcbiAgICBjb25zdCBzaXplID0gNjQ7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplICogNCk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGkgPSAoeSAqIHNpemUgKyB4KSAqIDQ7XG4gICAgICAgIGNvbnN0IGdyaWQgPSAoeCAlIDE2IDwgMSB8fCB5ICUgMTYgPCAxKSA/IDEgOiAwO1xuICAgICAgICBkYXRhW2ldID0gZ3JpZCA/IDI1NSA6IDMwICsgKCh4ICogMykgJSA2MCk7XG4gICAgICAgIGRhdGFbaSArIDFdID0gZ3JpZCA/IDQwIDogODtcbiAgICAgICAgZGF0YVtpICsgMl0gPSBncmlkID8gMTcwIDogNDYgKyAoKHkgKiAzKSAlIDcwKTtcbiAgICAgICAgZGF0YVtpICsgM10gPSAyNTU7XG4gICAgICB9XG4gICAgfVxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG1pc3NpbmdUZXh0dXJlKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHNpemUsIHNpemUsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xuICB9XG5cbiAgY29uc3QgaW1hZ2VzID0gbmV3IE1hcDxzdHJpbmcsIHsgdGV4dHVyZTogV2ViR0xUZXh0dXJlOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9PigpO1xuXG4gIGZ1bmN0aW9uIGRyYXdRdWFkKCkge1xuICAgIGdsIS5kcmF3QXJyYXlzKGdsIS5UUklBTkdMRVMsIDAsIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFRhcmdldE91dHB1dCh0YXJnZXQ6IFRhcmdldCB8IG51bGwpIHtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgdGFyZ2V0ID8gdGFyZ2V0LmZyYW1lYnVmZmVyIDogbnVsbCk7XG4gICAgZ2whLnZpZXdwb3J0KDAsIDAsIHRhcmdldCA/IHRhcmdldC53aWR0aCA6IHdpZHRoLCB0YXJnZXQgPyB0YXJnZXQuaGVpZ2h0IDogaGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHUxKHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKGxvYykgZ2whLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiB1MihwOiBQcm9ncmFtLCBuYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jID0gcC51bmlmb3Jtc1tuYW1lXTtcbiAgICBpZiAobG9jKSBnbCEudW5pZm9ybTJmKGxvYywgeCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gdTMocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB2OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChsb2MpIGdsIS51bmlmb3JtM2YobG9jLCB2WzBdLCB2WzFdLCB2WzJdKTtcbiAgfVxuICBmdW5jdGlvbiB1VGV4KHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdGV4dHVyZTogV2ViR0xUZXh0dXJlLCB1bml0OiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmICghbG9jKSByZXR1cm47XG4gICAgZ2whLmFjdGl2ZVRleHR1cmUoZ2whLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2whLmJpbmRUZXh0dXJlKGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbCEudW5pZm9ybTFpKGxvYywgdW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoc3RhdGU6IEZyYW1lU3RhdGUpIHtcbiAgICBpZiAoZ2whLmlzQ29udGV4dExvc3QoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGcgPSBzdGF0ZS5nbG9iYWw7XG5cbiAgICAvLyBCYWNrZ3JvdW5kXG4gICAgY29uc3QgYmcgPSBwcm9ncmFtcy5iZztcbiAgICBnbCEudXNlUHJvZ3JhbShiZy5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldHMuc2NlbmVBKTtcbiAgICB1MihiZywgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShiZywgXCJ1X3RpbWVcIiwgc3RhdGUudGltZSk7XG4gICAgdTEoYmcsIFwidV9tb2RlXCIsIGcuYmdNb2RlKTtcbiAgICB1MyhiZywgXCJ1X2NvbG9yX2FcIiwgZy5iZ0EpO1xuICAgIHUzKGJnLCBcInVfY29sb3JfYlwiLCBnLmJnQik7XG4gICAgdTEoYmcsIFwidV9hdWRpb1wiLCBzdGF0ZS5hdWRpbyAqIGcuYXVkaW9SZWFjdCk7XG4gICAgZHJhd1F1YWQoKTtcblxuICAgIC8vIExheWVyczogcGluZy1wb25nIGNvbXBvc2l0ZVxuICAgIGxldCBzb3VyY2UgPSB0YXJnZXRzLnNjZW5lQTtcbiAgICBsZXQgZGVzdCA9IHRhcmdldHMuc2NlbmVCO1xuICAgIGNvbnN0IGxheWVyUHJvZ3JhbSA9IHByb2dyYW1zLmxheWVyO1xuICAgIGdsIS51c2VQcm9ncmFtKGxheWVyUHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHN0YXRlLmxheWVycykge1xuICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXMuZ2V0KGxheWVyLmltYWdlSWQpO1xuICAgICAgYmluZFRhcmdldE91dHB1dChkZXN0KTtcbiAgICAgIHVUZXgobGF5ZXJQcm9ncmFtLCBcInVfZGVzdFwiLCBzb3VyY2UudGV4dHVyZSwgMCk7XG4gICAgICB1VGV4KGxheWVyUHJvZ3JhbSwgXCJ1X2ltZ1wiLCBpbWFnZSA/IGltYWdlLnRleHR1cmUgOiBtaXNzaW5nVGV4dHVyZSwgMSk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9yZXNcIiwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB1MihcbiAgICAgICAgbGF5ZXJQcm9ncmFtLFxuICAgICAgICBcInVfaW1nX3RleGVsXCIsXG4gICAgICAgIGltYWdlID8gMSAvIGltYWdlLndpZHRoIDogMSAvIDY0LFxuICAgICAgICBpbWFnZSA/IDEgLyBpbWFnZS5oZWlnaHQgOiAxIC8gNjRcbiAgICAgICk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9wb3NcIiwgbGF5ZXIucG9zWzBdLCBsYXllci5wb3NbMV0pO1xuICAgICAgdTIobGF5ZXJQcm9ncmFtLCBcInVfZXh0XCIsIGxheWVyLmV4dFswXSwgbGF5ZXIuZXh0WzFdKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JvdFwiLCBsYXllci5yb3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2F1ZGlvXCIsIHN0YXRlLmF1ZGlvICogZy5hdWRpb1JlYWN0KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X29wYWNpdHlcIiwgbGF5ZXIub3BhY2l0eSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9ibGVuZFwiLCBsYXllci5ibGVuZCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV90aWxlXCIsIGxheWVyLnRpbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfd2FycFwiLCBsYXllci53YXJwKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3N3aXJsXCIsIGxheWVyLnN3aXJsKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JpcHBsZVwiLCBsYXllci5yaXBwbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfa2FsZWlkb1wiLCBsYXllci5rYWxlaWRvKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3BpeGVsYXRlXCIsIGxheWVyLnBpeGVsYXRlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2J1bGdlXCIsIGxheWVyLmJ1bGdlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X21pcnJvclwiLCBsYXllci5taXJyb3IpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaHVlXCIsIGxheWVyLmh1ZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9zYXRcIiwgbGF5ZXIuc2F0dXJhdGlvbik7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9jb25cIiwgbGF5ZXIuY29udHJhc3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYnJpXCIsIGxheWVyLmJyaWdodG5lc3MpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaW52ZXJ0XCIsIGxheWVyLmludmVydCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9wb3N0ZXJcIiwgbGF5ZXIucG9zdGVyaXplKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2Nocm9tYVwiLCBsYXllci5jaHJvbWEpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfZWRnZXNcIiwgbGF5ZXIuZWRnZXMpO1xuICAgICAgdTMobGF5ZXJQcm9ncmFtLCBcInVfdGludFwiLCBsYXllci50aW50KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3RpbnRfYW10XCIsIGxheWVyLnRpbnRBbW91bnQpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc2hpbW1lclwiLCBsYXllci5zaGltbWVyKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3NlZWRcIiwgbGF5ZXIuc2VlZCk7XG4gICAgICBkcmF3UXVhZCgpO1xuICAgICAgY29uc3Qgc3dhcCA9IHNvdXJjZTtcbiAgICAgIHNvdXJjZSA9IGRlc3Q7XG4gICAgICBkZXN0ID0gc3dhcDtcbiAgICB9XG5cbiAgICAvLyBQb3N0ICsgZmVlZGJhY2tcbiAgICBpZiAobmVlZEZlZWRiYWNrQ2xlYXIpIHtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIFt0YXJnZXRzLnBvc3RBLCB0YXJnZXRzLnBvc3RCXSkge1xuICAgICAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldCk7XG4gICAgICAgIGdsIS5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgICBnbCEuY2xlYXIoZ2whLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgfVxuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcHJldiA9IHBvc3RGbGlwID8gdGFyZ2V0cy5wb3N0QSA6IHRhcmdldHMucG9zdEI7XG4gICAgY29uc3Qgb3V0ID0gcG9zdEZsaXAgPyB0YXJnZXRzLnBvc3RCIDogdGFyZ2V0cy5wb3N0QTtcbiAgICBwb3N0RmxpcCA9ICFwb3N0RmxpcDtcblxuICAgIGNvbnN0IHBvc3QgPSBwcm9ncmFtcy5wb3N0O1xuICAgIGdsIS51c2VQcm9ncmFtKHBvc3QucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChvdXQpO1xuICAgIHVUZXgocG9zdCwgXCJ1X3NjZW5lXCIsIHNvdXJjZS50ZXh0dXJlLCAwKTtcbiAgICB1VGV4KHBvc3QsIFwidV9wcmV2XCIsIHByZXYudGV4dHVyZSwgMSk7XG4gICAgdTIocG9zdCwgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShwb3N0LCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICB1MShwb3N0LCBcInVfYXVkaW9cIiwgc3RhdGUuYXVkaW8gKiBnLmF1ZGlvUmVhY3QpO1xuICAgIHUyKHBvc3QsIFwidV9wb2ludGVyXCIsIHN0YXRlLnBvaW50ZXIueCwgc3RhdGUucG9pbnRlci55KTtcbiAgICB1Mihwb3N0LCBcInVfcG9pbnRlcl92ZWxcIiwgc3RhdGUucG9pbnRlci52ZWxvY2l0eVgsIHN0YXRlLnBvaW50ZXIudmVsb2NpdHlZKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9kb3duXCIsIHN0YXRlLnBvaW50ZXIuZG93biA/IDEgOiAwKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9hY3RpdmVcIiwgc3RhdGUucG9pbnRlci5hY3RpdmUgPyAxIDogMCk7XG4gICAgdTEocG9zdCwgXCJ1X2ZlZWRiYWNrXCIsIGcuZmVlZGJhY2spO1xuICAgIHUxKHBvc3QsIFwidV90cmFpbHNcIiwgZy50cmFpbHMpO1xuICAgIHUxKHBvc3QsIFwidV9mYl96b29tXCIsIGcuZmJab29tKTtcbiAgICB1MShwb3N0LCBcInVfZmJfcm90YXRlXCIsIGcuZmJSb3RhdGUpO1xuICAgIHUxKHBvc3QsIFwidV9mYl9odWVcIiwgZy5mYkh1ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3dhcnBcIiwgZy53YXJwKTtcbiAgICB1MShwb3N0LCBcInVfc3dpcmxcIiwgZy5zd2lybCk7XG4gICAgdTEocG9zdCwgXCJ1X3JpcHBsZVwiLCBnLnJpcHBsZSk7XG4gICAgdTEocG9zdCwgXCJ1X3pvb21cIiwgZy56b29tKTtcbiAgICB1MShwb3N0LCBcInVfa2FsZWlkb1wiLCBnLmthbGVpZG8pO1xuICAgIHUxKHBvc3QsIFwidV9taXJyb3JcIiwgZy5taXJyb3IpO1xuICAgIHUxKHBvc3QsIFwidV9jaHJvbWFcIiwgZy5jaHJvbWEpO1xuICAgIHUxKHBvc3QsIFwidV9odWVfb3JiaXRcIiwgZy5odWVPcmJpdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NhdFwiLCBnLnNhdHVyYXRpb24pO1xuICAgIHUxKHBvc3QsIFwidV9jb25cIiwgZy5jb250cmFzdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NvbGFyaXplXCIsIGcuc29sYXJpemUpO1xuICAgIHUxKHBvc3QsIFwidV9ncmFpblwiLCBnLmdyYWluKTtcbiAgICB1MShwb3N0LCBcInVfc2NhbmxpbmVzXCIsIGcuc2NhbmxpbmVzKTtcbiAgICB1MShwb3N0LCBcInVfdmlnbmV0dGVcIiwgZy52aWduZXR0ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3N0cm9iZVwiLCBnLnN0cm9iZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfZm9yY2VcIiwgZy5wb2ludGVyRm9yY2UpO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX3NpemVcIiwgZy5wb2ludGVyU2l6ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfbW9kZVwiLCBnLnBvaW50ZXJNb2RlKTtcbiAgICBkcmF3UXVhZCgpO1xuXG4gICAgLy8gUHJlc2VudFxuICAgIGNvbnN0IGNvcHkgPSBwcm9ncmFtcy5jb3B5O1xuICAgIGdsIS51c2VQcm9ncmFtKGNvcHkucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChudWxsKTtcbiAgICB1VGV4KGNvcHksIFwidV90ZXhcIiwgb3V0LnRleHR1cmUsIDApO1xuICAgIGRyYXdRdWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNpemUoKSB7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCBwaXhlbFJhdGlvQ2FwKTtcbiAgICBjb25zdCBuZXh0V2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGNzc1dpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBuZXh0SGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChjc3NIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmIChuZXh0V2lkdGggPT09IHdpZHRoICYmIG5leHRIZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHdpZHRoID0gbmV4dFdpZHRoO1xuICAgIGhlaWdodCA9IG5leHRIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBPYmplY3QudmFsdWVzKHRhcmdldHMpKSByZXNpemVUYXJnZXQodGFyZ2V0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2l6ZShuZXh0Q3NzV2lkdGgsIG5leHRDc3NIZWlnaHQpIHtcbiAgICAgIGNzc1dpZHRoID0gTWF0aC5tYXgoMSwgbmV4dENzc1dpZHRoKTtcbiAgICAgIGNzc0hlaWdodCA9IE1hdGgubWF4KDEsIG5leHRDc3NIZWlnaHQpO1xuICAgICAgYXBwbHlTaXplKCk7XG4gICAgfSxcbiAgICBzZXRQaXhlbFJhdGlvQ2FwKGNhcCkge1xuICAgICAgcGl4ZWxSYXRpb0NhcCA9IE1hdGgubWF4KDAuNSwgY2FwKTtcbiAgICAgIGFwcGx5U2l6ZSgpO1xuICAgIH0sXG4gICAgc2V0SW1hZ2UoaW1hZ2VJZCwgc291cmNlSW1hZ2UpIHtcbiAgICAgIGxldCBlbnRyeSA9IGltYWdlcy5nZXQoaW1hZ2VJZCk7XG4gICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0geyB0ZXh0dXJlOiBtYWtlVGV4dHVyZSgpLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gICAgICAgIGltYWdlcy5zZXQoaW1hZ2VJZCwgZW50cnkpO1xuICAgICAgfVxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZW50cnkudGV4dHVyZSk7XG4gICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgc291cmNlSW1hZ2UpO1xuICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgZmFsc2UpO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZUltYWdlKTtcbiAgICAgIGVudHJ5LndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgIGVudHJ5LmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH0sXG4gICAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZCkge1xuICAgICAgY29uc3QgZW50cnkgPSBpbWFnZXMuZ2V0KGltYWdlSWQpO1xuICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICAgICAgZ2wuZGVsZXRlVGV4dHVyZShlbnRyeS50ZXh0dXJlKTtcbiAgICAgIGltYWdlcy5kZWxldGUoaW1hZ2VJZCk7XG4gICAgfSxcbiAgICBoYXNJbWFnZShpbWFnZUlkKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmhhcyhpbWFnZUlkKTtcbiAgICB9LFxuICAgIHJlbmRlcixcbiAgICBjbGVhckZlZWRiYWNrKCkge1xuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaW1hZ2VzLnZhbHVlcygpKSBnbC5kZWxldGVUZXh0dXJlKGVudHJ5LnRleHR1cmUpO1xuICAgICAgaW1hZ2VzLmNsZWFyKCk7XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKG1pc3NpbmdUZXh0dXJlKTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIE9iamVjdC52YWx1ZXModGFyZ2V0cykpIHtcbiAgICAgICAgZ2wuZGVsZXRlRnJhbWVidWZmZXIodGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0YXJnZXQudGV4dHVyZSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHsgcHJvZ3JhbSB9IG9mIE9iamVjdC52YWx1ZXMocHJvZ3JhbXMpKSBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgaWYgKHF1YWQpIGdsLmRlbGV0ZUJ1ZmZlcihxdWFkKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTWVkaWFLaW5kIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5jb25zdCBBVURJT19FWFQgPSAvXFwuKG1wM3x3YXZ8b2dnfG00YXxhYWN8ZmxhY3xvcHVzfHdtYSkkL2k7XG5jb25zdCBJTUFHRV9FWFQgPSAvXFwuKHBuZ3xqcGU/Z3xnaWZ8d2VicHxibXB8c3ZnfGF2aWZ8aWNvKSQvaTtcbmNvbnN0IFZJREVPX0VYVCA9IC9cXC4obXA0fHdlYm18bW92fG00dnxhdml8bWt2fG9ndikkL2k7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZpbGUoZmlsZTogRmlsZSk6IE1lZGlhS2luZCB7XG4gIGNvbnN0IHR5cGUgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcInZpZGVvL1wiKSkgcmV0dXJuIFwidmlkZW9cIjtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcImF1ZGlvL1wiKSkgcmV0dXJuIFwiYXVkaW9cIjtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgaWYgKEFVRElPX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcImF1ZGlvXCI7XG4gIGlmIChJTUFHRV9FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJpbWFnZVwiO1xuICBpZiAoVklERU9fRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwidmlkZW9cIjtcbiAgcmV0dXJuIFwiZGF0YVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlCbG9iKGJsb2I6IEJsb2IsIG5hbWUgPSBcIlwiKTogTWVkaWFLaW5kIHtcbiAgcmV0dXJuIGNsYXNzaWZ5RmlsZShuZXcgRmlsZShbYmxvYl0sIG5hbWUgfHwgXCJmaWxlXCIsIHsgdHlwZTogYmxvYi50eXBlIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhS2luZExhYmVsKGtpbmQ6IE1lZGlhS2luZCk6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgXCJ2aWRlb1wiOlxuICAgICAgcmV0dXJuIFwiVmlkZW9cIjtcbiAgICBjYXNlIFwiYXVkaW9cIjpcbiAgICAgIHJldHVybiBcIkF1ZGlvXCI7XG4gICAgY2FzZSBcImltYWdlXCI6XG4gICAgICByZXR1cm4gXCJJbWFnZVwiO1xuICAgIGNhc2UgXCJkYXRhXCI6XG4gICAgICByZXR1cm4gXCJEYXRhXCI7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgX2V4aGF1c3RpdmU6IG5ldmVyID0ga2luZDtcbiAgICAgIHJldHVybiBfZXhoYXVzdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRMYXllck5hbWUoa2luZDogTWVkaWFLaW5kLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RlbSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLlthLXowLTldKyQvaSwgXCJcIikudHJpbSgpO1xuICByZXR1cm4gc3RlbSB8fCBtZWRpYUtpbmRMYWJlbChraW5kKTtcbn1cblxuLyoqIEZpcnN0IDFNQiBvZiBhbiBhcmJpdHJhcnkgZmlsZSwgcGFpbnRlZCBhcyBhIDI1Nlx1MDBENzI1NiBieXRlIHRleHR1cmUuICovXG5leHBvcnQgZnVuY3Rpb24gcGFpbnREYXRhQnl0ZXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgYnl0ZXM6IFVpbnQ4QXJyYXkpIHtcbiAgY29uc3Qgd2lkdGggPSAyNTY7XG4gIGNvbnN0IGhlaWdodCA9IDI1NjtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY29uc3QgaW1hZ2UgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICBjb25zdCB0b3RhbCA9IHdpZHRoICogaGVpZ2h0O1xuICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSBsZW4gPyAoYnl0ZXNbaSAlIGxlbl0gPz8gMCkgOiAoaSAqIDM3KSAmIDI1NTtcbiAgICBjb25zdCBiID0gbGVuID8gKGJ5dGVzWyhpICogMykgJSBsZW5dID8/IDApIDogKGkgKiA5MSkgJiAyNTU7XG4gICAgY29uc3QgYyA9IGxlbiA/IChieXRlc1soaSAqIDcgKyAxMykgJSBsZW5dID8/IDApIDogKGkgKiAxMykgJiAyNTU7XG4gICAgY29uc3QgbyA9IGkgKiA0O1xuICAgIGltYWdlLmRhdGFbb10gPSBhO1xuICAgIGltYWdlLmRhdGFbbyArIDFdID0gYjtcbiAgICBpbWFnZS5kYXRhW28gKyAyXSA9IChhIF4gYykgJiAyNTU7XG4gICAgaW1hZ2UuZGF0YVtvICsgM10gPSAyNTU7XG4gIH1cbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG5cbiAgY29uc3Qgd2FzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDIzMiwyMzAsMjI0LDAuMSlcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDAuNSwgXCJyZ2JhKDE2OCwxMjAsMTI4LDAuMTIpXCIpO1xuICB3YXNoLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMTM4LDEzNCwxNDQsMC4xKVwiKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHdhc2g7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gNjQwIHx8IGNhbnZhcy5oZWlnaHQgIT09IDM2MCkge1xuICAgIGNhbnZhcy53aWR0aCA9IDY0MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMzYwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbEZyb21TcGVjdHJ1bShzcGVjdHJ1bTogVWludDhBcnJheSk6IG51bWJlciB7XG4gIGNvbnN0IGJpbnMgPSBNYXRoLm1pbig0OCwgc3BlY3RydW0ubGVuZ3RoKTtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpICs9IDEpXG4gICAgdG90YWwgKz0gc3BlY3RydW1baV0gKiAoMS4zNSAtIChpIC8gYmlucykgKiAwLjU1KTtcbiAgcmV0dXJuIE1hdGgubWluKDEsIHRvdGFsIC8gYmlucyAvIDE5MCk7XG59XG5cbi8qKiBSZWFjdGl2ZSBmaWVsZCB1c2VkIGFzIHRoZSBsYXllciB0ZXh0dXJlIGZvciBhdWRpbyBmaWxlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludEF1ZGlvVmlzdWFsKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBzcGVjdHJ1bTogVWludDhBcnJheSxcbiAgbGV2ZWw6IG51bWJlcixcbiAgdGltZTogbnVtYmVyLFxuKSB7XG4gIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhcyk7XG4gIGNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4LCA4LCAxMCwgJHswLjEgKyAoMSAtIGxldmVsKSAqIDAuMDh9KWA7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjb25zdCBiaW5zID0gTWF0aC5taW4oOTYsIHNwZWN0cnVtLmxlbmd0aCk7XG4gIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBiaW5zO1xuICBjb25zdCBtaWQgPSBoZWlnaHQgKiAwLjU1O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNhbXBsZSA9IHNwZWN0cnVtW2ldIC8gMjU1O1xuICAgIGNvbnN0IGJvb3N0ID0gc2FtcGxlICogKDAuNTUgKyBsZXZlbCAqIDAuOSk7XG4gICAgY29uc3QgaCA9IGJvb3N0ICogaGVpZ2h0ICogMC43MjtcbiAgICBjb25zdCBodWUgPSAyMCArIChpIC8gYmlucykgKiA0MCArIHRpbWUgKiAxMiArIGxldmVsICogMzA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtodWUgJSAzNjB9ICR7MjggKyBzYW1wbGUgKiAzNX0lICR7MzIgKyBzYW1wbGUgKiAzOH0lKWA7XG4gICAgY3R4LmZpbGxSZWN0KGkgKiBiYXJXaWR0aCwgbWlkIC0gaCAqIDAuNTUsIE1hdGgubWF4KDEsIGJhcldpZHRoICogMC44MiksIGgpO1xuICB9XG5cbiAgY29uc3QgY3ggPSB3aWR0aCAqIDAuNTtcbiAgY29uc3QgY3kgPSBoZWlnaHQgKiAwLjQ4O1xuICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqICgwLjA4ICsgbGV2ZWwgKiAwLjE4KTtcbiAgY29uc3QgZ2xvdyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgcmFkaXVzICogMi4yKTtcbiAgZ2xvdy5hZGRDb2xvclN0b3AoMCwgYGhzbGEoMTIgNDUlIDYyJSAvICR7MC4xOCArIGxldmVsICogMC4zNX0pYCk7XG4gIGdsb3cuYWRkQ29sb3JTdG9wKDEsIFwiaHNsYSgwIDAlIDAlIC8gMClcIik7XG4gIGN0eC5maWxsU3R5bGUgPSBnbG93O1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoY3gsIGN5LCByYWRpdXMgKiAyLjIsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4LmZpbGwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbnZhc1RodW1iKFxuICBzb3VyY2U6IENhbnZhc0ltYWdlU291cmNlLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbWF4RGltID0gOTYsXG4pOiBzdHJpbmcge1xuICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIG1heERpbSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQsIDEpKTtcbiAgY29uc3QgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICB0aHVtYi53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICB0aHVtYi5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gIGNvbnN0IGN0eCA9IHRodW1iLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiBcIlwiO1xuICBjdHguZHJhd0ltYWdlKHNvdXJjZSwgMCwgMCwgdGh1bWIud2lkdGgsIHRodW1iLmhlaWdodCk7XG4gIHJldHVybiB0aHVtYi50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuNyk7XG59XG4iLCAiLy8gQ2xpZW50LXNpZGUgcGVyc2lzdGVuY2U6IG1lZGlhIGJsb2JzIGxpdmUgaW4gSW5kZXhlZERCIChzY2VuZXMgc2F2ZWQgdG8gdGhlXG4vLyBzZXJ2ZXIgYXJlIHBhcmFtcy1vbmx5IEpTT04pLCBhbmQgdGhlIHdvcmtpbmcgc2NlbmUgYXV0b3NhdmVzIHRvIGxvY2FsU3RvcmFnZS5cblxuaW1wb3J0IHsgZGVjb2RlU2NlbmUsIGVuY29kZVNjZW5lLCB0eXBlIFNjZW5lIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5jb25zdCBEQl9OQU1FID0gXCJ2YXVkaW8tMi1pbWFnZXNcIjtcbmNvbnN0IFNUT1JFID0gXCJpbWFnZXNcIjtcbmNvbnN0IEFVVE9TQVZFX0tFWSA9IFwidmF1ZGlvLTI6YXV0b3NhdmVcIjtcbmNvbnN0IE1BWF9URVhUVVJFX0RJTSA9IDIwNDg7XG5jb25zdCBUSFVNQl9ESU0gPSA5NjtcblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJEYXRhYmFzZT4gfCBudWxsID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlbkRiKCk6IFByb21pc2U8SURCRGF0YWJhc2U+IHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oREJfTkFNRSwgMSk7XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnJlc3VsdC5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFNUT1JFKSkge1xuICAgICAgICAgIHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgb3BlbiBmYWlsZWRcIikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYlByb21pc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRJbWFnZUJsb2IoaWQ6IHN0cmluZywgYmxvYjogQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkd3JpdGVcIik7XG4gICAgdHgub2JqZWN0U3RvcmUoU1RPUkUpLnB1dChibG9iLCBpZCk7XG4gICAgdHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICB0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiB3cml0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iIHwgbnVsbD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShTVE9SRSkuZ2V0KGlkKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQgaW5zdGFuY2VvZiBCbG9iID8gcmVxdWVzdC5yZXN1bHQgOiBudWxsKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgcmVhZCBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWR3cml0ZVwiKTtcbiAgICB0eC5vYmplY3RTdG9yZShTVE9SRSkuZGVsZXRlKGlkKTtcbiAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IEVycm9yKFwiSW5kZXhlZERCIGRlbGV0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IHR5cGUgRGVjb2RlZEltYWdlID0ge1xuICAvKiogRG93bnNjYWxlZCB0byBHUFUtZnJpZW5kbHkgc2l6ZTsgdXBsb2FkIHRoaXMgYXMgdGhlIHRleHR1cmUuICovXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIC8qKiBUaW55IGRhdGEgVVJMIGZvciB0aGUgbGF5ZXJzIHBhbmVsLiAqL1xuICB0aHVtYjogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJbWFnZUJsb2IoYmxvYjogQmxvYik6IFByb21pc2U8RGVjb2RlZEltYWdlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX1RFWFRVUkVfRElNIC8gTWF0aC5tYXgoaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWFnZS5uYXR1cmFsV2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLm5hdHVyYWxIZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiMkQgY2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJTY2FsZSA9IE1hdGgubWluKDEsIFRIVU1CX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgdGh1bWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiB0aHVtYlNjYWxlKSk7XG4gICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogdGh1bWJTY2FsZSkpO1xuICAgICAgICBjb25zdCB0aHVtYkNvbnRleHQgPSB0aHVtYkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICh0aHVtYkNvbnRleHQpIHRodW1iQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwLCB0aHVtYkNhbnZhcy53aWR0aCwgdGh1bWJDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgdGh1bWI6IHRodW1iQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC43KSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgcmVqZWN0KGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZSA6IG5ldyBFcnJvcihcIkltYWdlIGRlY29kZSBmYWlsZWRcIikpO1xuICAgICAgfVxuICAgIH07XG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGVjb2RlIHRoYXQgaW1hZ2VcIikpO1xuICAgIH07XG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3ByZWZpeH0tJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUF1dG9zYXZlKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVE9TQVZFX0tFWSwgZW5jb2RlU2NlbmUoc2NlbmUpKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gUXVvdGEgLyBwcml2YXRlIG1vZGUgXHUyMDE0IGxvc2luZyBhdXRvc2F2ZSBpcyBhY2NlcHRhYmxlLlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXV0b3NhdmUoKTogU2NlbmUgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRPU0FWRV9LRVkpO1xuICAgIGlmICghcmF3KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZGVjb2RlU2NlbmUocmF3KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsICJjb25zdCBFTkNPREVEX0VOVElUSUVTID0gL1tcIiY8XS87XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3RyICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRW50aXRpZXMoc3RyKSB7XG5cdC8vIFNraXAgYWxsIHdvcmsgZm9yIHN0cmluZ3Mgd2l0aCBubyBlbnRpdGllcyBuZWVkaW5nIGVuY29kaW5nOlxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMCB8fCBFTkNPREVEX0VOVElUSUVTLnRlc3Qoc3RyKSA9PT0gZmFsc2UpIHJldHVybiBzdHI7XG5cblx0bGV0IGxhc3QgPSAwLFxuXHRcdGkgPSAwLFxuXHRcdG91dCA9ICcnLFxuXHRcdGNoID0gJyc7XG5cblx0Ly8gU2VlayBmb3J3YXJkIGluIHN0ciB1bnRpbCB0aGUgbmV4dCBlbnRpdHkgY2hhcjpcblx0Zm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRjaCA9ICcmcXVvdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdGNoID0gJyZhbXA7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRjaCA9ICcmbHQ7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gQXBwZW5kIHNraXBwZWQvYnVmZmVyZWQgY2hhcmFjdGVycyBhbmQgdGhlIGVuY29kZWQgZW50aXR5OlxuXHRcdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRcdG91dCArPSBjaDtcblx0XHQvLyBTdGFydCB0aGUgbmV4dCBzZWVrL2J1ZmZlciBhZnRlciB0aGUgZW50aXR5J3Mgb2Zmc2V0OlxuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0cmV0dXJuIG91dDtcbn1cbiIsICIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgZW5jb2RlRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdGlmICghcHJvcHMpIHByb3BzID0ge307XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcyxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRpZiAoJ3JlZicgaW4gbm9ybWFsaXplZFByb3BzKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cdFx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0XHRpZiAoaSA9PSAncmVmJykge1xuXHRcdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7Vk5vZGUgJiB7IF9fc291cmNlOiBhbnk7IF9fc2VsZjogYW55IH19ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHM6IG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBsYXRlIHZub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBleHBlY3RlZCB0byBiZVxuICogdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSAge0FycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59IGV4cHJzXG4gKiBAcmV0dXJucyB7Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIGpzeFRlbXBsYXRlKHRlbXBsYXRlcywgLi4uZXhwcnMpIHtcblx0Y29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZShGcmFnbWVudCwgeyB0cGw6IHRlbXBsYXRlcywgZXhwcnMgfSk7XG5cdC8vIEJ5cGFzcyByZW5kZXIgdG8gc3RyaW5nIHRvcCBsZXZlbCBGcmFnbWVudCBvcHRpbWl6YXRpb25cblx0dm5vZGUua2V5ID0gdm5vZGUuX3Zub2RlO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmNvbnN0IEpTX1RPX0NTUyA9IHt9O1xuY29uc3QgQ1NTX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8qKlxuICogVW53cmFwIHBvdGVudGlhbCBzaWduYWxzLlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IHZhbHVlLnZhbHVlT2YoKVxuXHRcdDogdmFsdWU7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEhUTUwgYXR0cmlidXRlIHRvIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdFxuICogZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZVxuICogSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpzeEF0dHIobmFtZSwgdmFsdWUpIHtcblx0aWYgKG9wdGlvbnMuYXR0cikge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuYXR0cihuYW1lLCB2YWx1ZSk7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsdWUgPSBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpO1xuXG5cdGlmIChuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAna2V5JykgcmV0dXJuICcnO1xuXHRpZiAobmFtZSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcblx0XHRcdGxldCB2YWwgPSB2YWx1ZVtwcm9wXTtcblx0XHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPVxuXHRcdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0XHQ/IHByb3Bcblx0XHRcdFx0XHRcdDogSlNfVE9fQ1NTW3Byb3BdIHx8XG5cdFx0XHRcdFx0XHRcdChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoQ1NTX1JFR0VYLCAnLSQmJykudG9Mb3dlckNhc2UoKSk7XG5cblx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc7Jztcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdFx0Ly8gRXhjbHVkZSBjdXN0b20tYXR0cmlidXRlc1xuXHRcdFx0XHRcdCFuYW1lLnN0YXJ0c1dpdGgoJy0tJykgJiZcblx0XHRcdFx0XHQhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QobmFtZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJ3B4Oyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyID0gc3RyICsgbmFtZSArICc6JyArIHZhbCArIHN1ZmZpeDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKHN0cikgKyAnXCInO1xuXHR9XG5cblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR2YWx1ZSA9PT0gZmFsc2UgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG5hbWU7XG5cblx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpICsgJ1wiJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBkeW5hbWljIGNoaWxkIHBhc3NlZCB0byBganN4VGVtcGxhdGVgLiBUaGlzIGZ1bmN0aW9uXG4gKiBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGFcbiAqIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCBWTm9kZSB8IEFycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGpzeEVzY2FwZSh2YWx1ZSkge1xuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDaGVjayBmb3IgVk5vZGVcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlW2ldID0ganN4RXNjYXBlKHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudCxcblx0Ly8gcHJlY29tcGlsZWQgSlNYIHRyYW5zZm9ybVxuXHRqc3hUZW1wbGF0ZSxcblx0anN4QXR0cixcblx0anN4RXNjYXBlXG59O1xuIiwgImltcG9ydCB7IHVzZUF1dGgsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgQkdfTU9ERVMsXG4gICAgQkxFTkRfTU9ERVMsXG4gICAgREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgREVGQVVMVF9MQVlFUl9GWCxcbiAgICBNQVhfTEFZRVJTLFxuICAgIFBPSU5URVJfTU9ERVMsXG4gICAgVElMRV9NT0RFUyxcbiAgICBjbGFtcCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZGVjb2RlU2NlbmUsXG4gICAgZW5jb2RlU2NlbmUsXG4gICAgdHlwZSBCbGVuZE1vZGUsXG4gICAgdHlwZSBHbG9iYWxGeCxcbiAgICB0eXBlIExheWVyRngsXG4gICAgdHlwZSBNZWRpYUtpbmQsXG4gICAgdHlwZSBTY2VuZSxcbiAgICB0eXBlIFNjZW5lTGF5ZXIsXG4gICAgdHlwZSBTY2VuZU1ldGEsXG59IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgV09STERfUFJFU0VUUyxcbiAgICBibGVuZEluZGV4LFxuICAgIG11dGF0ZUdsb2JhbEZ4LFxuICAgIHJhbmRvbUdsb2JhbEZ4LFxuICAgIHJhbmRvbUxheWVyRngsXG4gICAgcmVzZXRMYXllckZ4RWZmZWN0cyxcbn0gZnJvbSBcIi4uL3NoYXJlZC9wcmVzZXRzXCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUVuZ2luZSxcbiAgICBoZXhUb1JnYixcbiAgICB0eXBlIEVuZ2luZUhhbmRsZSxcbiAgICB0eXBlIEZyYW1lU3RhdGUsXG4gICAgdHlwZSBMYXllclJlbmRlclN0YXRlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxufSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7XG4gICAgY2FudmFzVGh1bWIsXG4gICAgY2xhc3NpZnlCbG9iLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBkZWZhdWx0TGF5ZXJOYW1lLFxuICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzLFxuICAgIGxldmVsRnJvbVNwZWN0cnVtLFxuICAgIG1lZGlhS2luZExhYmVsLFxuICAgIHBhaW50QXVkaW9WaXN1YWwsXG4gICAgcGFpbnREYXRhQnl0ZXMsXG59IGZyb20gXCIuL21lZGlhXCI7XG5pbXBvcnQge1xuICAgIGRlY29kZUltYWdlQmxvYixcbiAgICBkZWxldGVJbWFnZUJsb2IsXG4gICAgZ2V0SW1hZ2VCbG9iLFxuICAgIGxvYWRBdXRvc2F2ZSxcbiAgICBuZXdJZCxcbiAgICBwdXRJbWFnZUJsb2IsXG4gICAgc2F2ZUF1dG9zYXZlLFxufSBmcm9tIFwiLi9zdG9yZVwiO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBHTE9CQUxfQ1NTID0gYFxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK01vbm86d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbjpyb290IHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLXZvaWQ6ICMwODA4MGE7XG4gIC0tcGFuZWw6ICMxMDEwMTQ7XG4gIC0tcGFuZWwtMjogIzE1MTUxYTtcbiAgLS1saW5lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAtLWxpbmUtaG90OiByZ2JhKDIzMiwgMjMwLCAyMjQsIDAuMzUpO1xuICAtLWFjaWQ6ICNlOGU2ZTA7XG4gIC0tdmlvbGV0OiAjOGE4NjkwO1xuICAtLWhvdDogI2E4Nzg4MDtcbiAgLS1wYXBlcjogI2U4ZTZlMDtcbiAgLS1tdXRlOiAjODU4NThmO1xuICAtLXRyYWNrOiAjMzAzMDM4O1xufVxuXG5odG1sLCBib2R5LCAjYXBwIHsgbWFyZ2luOiAwOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IHZhcigtLXZvaWQpOyBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyB9XG5ib2R5IHsgZm9udDogMTNweC8xLjQ1IFwiRE0gTW9ub1wiLCB1aS1tb25vc3BhY2UsIG1vbm9zcGFjZTsgY29sb3I6IHZhcigtLXBhcGVyKTsgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5idXR0b24sIGlucHV0LCBzZWxlY3QgeyBmb250OiBpbmhlcml0OyB9XG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IGNvbG9yOiB2YXIoLS12b2lkKTsgfVxuOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogdmFyKC0tdHJhY2spOyBib3JkZXItcmFkaXVzOiAwOyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmtub2ItcmFuZ2Uge1xuICAtLWZpbGw6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luOiAwO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IGV3LXJlc2l6ZTtcbn1cbi5rbm9iLXJhbmdlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWFjaWQpIDAgdmFyKC0tZmlsbCksIHZhcigtLXRyYWNrKSB2YXIoLS1maWxsKSAxMDAlKTtcbn1cbi5rbm9iLXJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG59XG4ua25vYi1yYW5nZTo6LW1vei1yYW5nZS10cmFjayB7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjayk7IH1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXByb2dyZXNzIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjaWQpOyB9XG4ua25vYi1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiA4cHg7IGhlaWdodDogMTZweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNpZCk7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLXZvaWQpO1xufVxuXG5Aa2V5ZnJhbWVzIHJlYy1ibGluayB7IDAlLCA0OCUgeyBvcGFjaXR5OiAxOyB9IDUyJSwgMTAwJSB7IG9wYWNpdHk6IDAuMjU7IH0gfVxuLnJlYy1kb3QgeyBhbmltYXRpb246IHJlYy1ibGluayAxLjFzIHN0ZXBzKDIsIGVuZCkgaW5maW5pdGU7IH1cbkBrZXlmcmFtZXMgZmFkZS11cCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XG4ucG9wIHsgYW5pbWF0aW9uOiBmYWRlLXVwIDE0MG1zIGN1YmljLWJlemllciguMiwuOCwuMiwxKSBib3RoOyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl0geyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjsgfVxuaW5wdXRbdHlwZT1cImNvbG9yXCJdOjotd2Via2l0LWNvbG9yLXN3YXRjaC13cmFwcGVyIHsgcGFkZGluZzogMXB4OyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoIHsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyB9XG5zZWxlY3QuZngtcmVzIHtcbiAgaGVpZ2h0OiAyNnB4OyBib3JkZXItcmFkaXVzOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwpOyBjb2xvcjogdmFyKC0tbXV0ZSk7IHBhZGRpbmc6IDAgNnB4O1xuICBmb250LWZhbWlseTogXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlOyBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAuMDZlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgb3V0bGluZTogbm9uZTsgY3Vyc29yOiBwb2ludGVyO1xufVxuc2VsZWN0LmZ4LXJlczpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tbGluZS1ob3QpOyBjb2xvcjogdmFyKC0tcGFwZXIpOyB9XG5zZWxlY3QuZngtcmVzOmRpc2FibGVkIHsgb3BhY2l0eTogLjM1OyBjdXJzb3I6IGRlZmF1bHQ7IH1cbnNlbGVjdC5meC1yZXMgb3B0aW9uIHsgYmFja2dyb3VuZDogdmFyKC0tcGFuZWwpOyBjb2xvcjogdmFyKC0tcGFwZXIpOyB9XG5gO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXhwb3J0IHJlc29sdXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBFWFBPUlRfUkVTT0xVVElPTlMgPSBbXG4gICAgeyBpZDogXCJzY3JlZW5cIiwgbGFiZWw6IFwiU2NyZWVuXCIsIGhlaWdodDogMCB9LFxuICAgIHsgaWQ6IFwiNzIwXCIsIGxhYmVsOiBcIjcyMHBcIiwgaGVpZ2h0OiA3MjAgfSxcbiAgICB7IGlkOiBcIjEwODBcIiwgbGFiZWw6IFwiMTA4MHBcIiwgaGVpZ2h0OiAxMDgwIH0sXG4gICAgeyBpZDogXCIxNDQwXCIsIGxhYmVsOiBcIjE0NDBwXCIsIGhlaWdodDogMTQ0MCB9LFxuICAgIHsgaWQ6IFwiMjE2MFwiLCBsYWJlbDogXCI0S1wiLCBoZWlnaHQ6IDIxNjAgfSxcbl0gYXMgY29uc3Q7XG5cbnR5cGUgRXhwb3J0UmVzb2x1dGlvbklkID0gKHR5cGVvZiBFWFBPUlRfUkVTT0xVVElPTlMpW251bWJlcl1bXCJpZFwiXTtcblxuY29uc3QgTUFYX0VYUE9SVF9FREdFID0gODE5MjtcblxuZnVuY3Rpb24gcmVzb2x2ZUV4cG9ydFNpemUoXG4gICAgcmVzb2x1dGlvbklkOiBFeHBvcnRSZXNvbHV0aW9uSWQsXG4gICAgc3RhZ2U6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSxcbiAgICAvKiogRm9yIFwic2NyZWVuXCIgUE5HIGV4cG9ydHMgXHUyMDE0IG11bHRpcGx5IHRoZSBsaXZlIHN0YWdlIGJ5IHRoaXMuICovXG4gICAgc2NyZWVuU2NhbGUgPSAxLFxuKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBhc3BlY3QgPSBNYXRoLm1heCgwLjA1LCBzdGFnZS53aWR0aCAvIE1hdGgubWF4KDEsIHN0YWdlLmhlaWdodCkpO1xuICAgIGxldCBoZWlnaHQ6IG51bWJlcjtcbiAgICBsZXQgd2lkdGg6IG51bWJlcjtcbiAgICBpZiAocmVzb2x1dGlvbklkID09PSBcInNjcmVlblwiKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoc3RhZ2UuaGVpZ2h0ICogc2NyZWVuU2NhbGUpKTtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHN0YWdlLndpZHRoICogc2NyZWVuU2NhbGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcmVzZXQgPSBFWFBPUlRfUkVTT0xVVElPTlMuZmluZChcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSByZXNvbHV0aW9uSWQsXG4gICAgICAgICk7XG4gICAgICAgIGhlaWdodCA9IHByZXNldD8uaGVpZ2h0IHx8IDEwODA7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChoZWlnaHQgKiBhc3BlY3QpKTtcbiAgICB9XG4gICAgY29uc3QgbG9uZ2VzdCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICAgIGlmIChsb25nZXN0ID4gTUFYX0VYUE9SVF9FREdFKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gTUFYX0VYUE9SVF9FREdFIC8gbG9uZ2VzdDtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSkpO1xuICAgIH1cbiAgICAvLyBLZWVwIGV2ZW4gZGltZW5zaW9ucyBcdTIwMTQgZnJpZW5kbGllciBmb3IgdmlkZW8gZW5jb2RlcnMuXG4gICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoIC0gKHdpZHRoICUgMiksIGhlaWdodDogaGVpZ2h0IC0gKGhlaWdodCAlIDIpIH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaWNvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbnR5cGUgSWNvblByb3BzID0geyBjbGFzcz86IHN0cmluZyB9O1xuY29uc3Qgc3ZnID0gKHByb3BzOiBJY29uUHJvcHMsIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbikgPT4gKFxuICAgIDxzdmdcbiAgICAgICAgY2xhc3M9e3Byb3BzLmNsYXNzID8/IFwidy1bMTVweF0gaC1bMTVweF1cIn1cbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS44XCJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3N2Zz5cbik7XG5jb25zdCBJUGx1cyA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwiTTEyIDV2MTRNNSAxMmgxNFwiIC8+KTtcbmNvbnN0IElEaWNlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiNFwiIHk9XCI0XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgcng9XCIyLjVcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjlcIiBjeT1cIjlcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjAuNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjE1XCIgY3k9XCI5XCIgcj1cIjAuNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjlcIiBjeT1cIjE1XCIgcj1cIjAuNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElXYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNNSAxOSAxNyA3bTItMi0xLjUgMS41TTE3IDdsMS41IDEuNU05IDUuNSA5LjggNy4zIDExLjYgOCA5LjggOC43IDkgMTAuNSA4LjIgOC43IDYuNCA4IDguMiA3LjNabTkgNyAuNiAxLjQgMS40LjYtMS40LjYtLjYgMS40LS42LTEuNC0xLjQtLjYgMS40LS42WlwiIC8+LFxuICAgICk7XG5jb25zdCBJU2F2ZSA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKHAsIDxwYXRoIGQ9XCJNMTIgM3YxMm0wIDAgNC00bS00IDQtNC00TTQgMTd2M2gxNnYtM1wiIC8+KTtcbmNvbnN0IElGb2xkZXIgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPHBhdGggZD1cIk0zIDYuNUExLjUgMS41IDAgMCAxIDQuNSA1aDRsMiAyLjVoOUExLjUgMS41IDAgMCAxIDIxIDl2OWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTE1QTEuNSAxLjUgMCAwIDEgMyAxOFpcIiAvPixcbiAgICApO1xuY29uc3QgSU1pYyA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHJlY3QgeD1cIjlcIiB5PVwiM1wiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjExXCIgcng9XCIzXCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS41IDExLjVhNi41IDYuNSAwIDAgMCAxMyAwTTEyIDE4djNcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElEb3dubG9hZCA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKHAsIDxwYXRoIGQ9XCJNMTIgNHYxMW0wIDAgNC41LTQuNU0xMiAxNSA3LjUgMTAuNU00IDE5aDE2XCIgLz4pO1xuY29uc3QgSUV4cGFuZCA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKHAsIDxwYXRoIGQ9XCJNNCA5VjRoNU0yMCA5VjRoLTVNNCAxNXY1aDVtMTEtNXY1aC01XCIgLz4pO1xuY29uc3QgSUV5ZSA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yLjUgMTJTNiA1LjUgMTIgNS41IDIxLjUgMTIgMjEuNSAxMiAxOCAxOC41IDEyIDE4LjUgMi41IDEyIDIuNSAxMlpcIiAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIyLjZcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElFeWVPZmYgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCA0bDE2IDE2TTkuOSA1LjlBOS41IDkuNSAwIDAgMSAxMiA1LjVjNiAwIDkuNSA2LjUgOS41IDYuNWExNyAxNyAwIDAgMS0zLjMgNE02IDcuNUExNiAxNiAwIDAgMCAyLjUgMTJTNiAxOC41IDEyIDE4LjVhOSA5IDAgMCAwIDMtLjZcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElUcmFzaCA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKHAsIDxwYXRoIGQ9XCJNNC41IDYuNWgxNW0tMTEtMmg3bS05LjUgMiAxIDEzaDEwbDEtMTNNMTAgMTB2Nm00LTZ2NlwiIC8+KTtcbmNvbnN0IElDb3B5ID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiOFwiIHk9XCI4XCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgcng9XCIxLjVcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA1VjUuNU0xNiA1YTEuNSAxLjUgMCAwIDAtMS41LTEuNWgtOUExLjUgMS41IDAgMCAwIDQgNXY5QTEuNSAxLjUgMCAwIDAgNS41IDE1LjVINlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVVwID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJtNiAxNCA2LTYgNiA2XCIgLz4pO1xuY29uc3QgSURvd24gPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIm02IDEwIDYgNiA2LTZcIiAvPik7XG5jb25zdCBJUGF1c2UgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk05IDV2MTRNMTUgNXYxNFwiIC8+KTtcbmNvbnN0IElQbGF5ID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJNNyA1djE0bDEyLTdaXCIgLz4pO1xuY29uc3QgSVBhbmVsID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiM1wiIHk9XCI0LjVcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTVcIiByeD1cIjEuNVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgNC41djE1XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5jb25zdCBJTW92ZSA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTEyIDN2MThNMyAxMmgxOE0xMiAzIDkuNSA1LjVNMTIgM2wyLjUgMi41TTEyIDIxbC0yLjUtMi41TTEyIDIxbDIuNS0yLjVNMyAxMmwyLjUtMi41TTMgMTJsMi41IDIuNU0yMSAxMmwtMi41LTIuNU0yMSAxMmwtMi41IDIuNVwiIC8+LFxuICAgICk7XG5jb25zdCBJU3BhcmsgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPHBhdGggZD1cIk0xMiAzbDEuOCA1LjJMMTkgMTBsLTUuMiAxLjhMMTIgMTdsLTEuOC01LjJMNSAxMGw1LjItMS44Wm03IDExIC44IDIuMkwyMiAxN2wtMi4yLjhMMTkgMjBsLS44LTIuMkwxNiAxN2wyLjItLjhaXCIgLz4sXG4gICAgKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gbGF5ZXJTZWVkKGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkLmxlbmd0aDsgaSsrKVxuICAgICAgICBoYXNoID0gKGhhc2ggKiAzMSArIGlkLmNoYXJDb2RlQXQoaSkpID4+PiAwO1xuICAgIHJldHVybiAoaGFzaCAlIDEwMDApIC8gMTAwMDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGVnKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHZhbHVlKX1cdTAwQjBgO1xufVxuZnVuY3Rpb24gZm9ybWF0WCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dmFsdWUudG9GaXhlZCgyKX1cdTAwRDdgO1xufVxuZnVuY3Rpb24gcGFkMyh2YWx1ZTogbnVtYmVyLCBtaW4gPSAwLCBtYXggPSAxKTogc3RyaW5nIHtcbiAgICByZXR1cm4gU3RyaW5nKE1hdGgucm91bmQoKCh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDApKS5wYWRTdGFydChcbiAgICAgICAgMyxcbiAgICAgICAgXCIwXCIsXG4gICAgKTtcbn1cblxudHlwZSBJbWFnZUluZm8gPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICB0aHVtYjogc3RyaW5nO1xuICAgIG1pc3Npbmc6IGJvb2xlYW47XG4gICAga2luZDogTWVkaWFLaW5kO1xufTtcblxudHlwZSBNZWRpYVJ1bnRpbWUgPSB7XG4gICAga2luZDogTWVkaWFLaW5kO1xuICAgIG9iamVjdFVybD86IHN0cmluZztcbiAgICB2aWRlbz86IEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgYXVkaW8/OiBIVE1MQXVkaW9FbGVtZW50O1xuICAgIGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGFuYWx5c2VyPzogQW5hbHlzZXJOb2RlO1xuICAgIHNvdXJjZU5vZGU/OiBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGU7XG4gICAgc3BlY3RydW0/OiBVaW50OEFycmF5O1xufTtcblxuZnVuY3Rpb24gZW1wdHlTY2VuZSgpOiBTY2VuZSB7XG4gICAgcmV0dXJuIHsgbmFtZTogXCJVbnRpdGxlZFwiLCBsYXllcnM6IFtdLCBnbG9iYWw6IHsgLi4uREVGQVVMVF9HTE9CQUxfRlggfSB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc21hbGwgY29udHJvbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBTbGlkZXIocHJvcHM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgbWluPzogbnVtYmVyO1xuICAgIG1heD86IG51bWJlcjtcbiAgICBkZWY/OiBudW1iZXI7XG4gICAgZm9ybWF0PzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG59KSB7XG4gICAgY29uc3QgbWluID0gcHJvcHMubWluID8/IDA7XG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4ID8/IDE7XG4gICAgY29uc3QgcGN0ID0gY2xhbXAoKChwcm9wcy52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDAsIDAsIDEwMCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cImJsb2NrIHB4LTMgcHktWzVweF0gc2VsZWN0LW5vbmVcIlxuICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5kZWYgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5vbkNoYW5nZShwcm9wcy5kZWYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT1cIkRvdWJsZS1jbGljayB0byByZXNldFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0wLjUgZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhYnVsYXItbnVtcyB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5mb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMuZm9ybWF0KHByb3BzLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYWQzKHByb3BzLnZhbHVlLCBtaW4sIG1heCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwia25vYi1yYW5nZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCItLWZpbGxcIjogYCR7cGN0fSVgIH19XG4gICAgICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4wMDF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gU2VjdGlvbihwcm9wczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYWNjZW50PzogYm9vbGVhbjtcbiAgICBhY3Rpb25zPzogQ29tcG9uZW50Q2hpbGRyZW47XG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcGItMlwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImZsZXggaC04IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2B0ZXh0LVs5cHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSAke3Byb3BzLmFjY2VudCA/IFwidGV4dC1bdmFyKC0tYWNpZCldXCIgOiBcInRleHQtW3ZhcigtLW11dGUpXVwifWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaC1weCBmbGV4LTEgYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICAgICAge3Byb3BzLmFjdGlvbnN9XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNlZ1Jvdyhwcm9wczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb3B0aW9uczogcmVhZG9ubHkgc3RyaW5nW107XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBvbkNoYW5nZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktWzVweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2hhbmdlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgaC02IGZsZXgtMSBib3JkZXIgYm9yZGVyLXItMCBib3JkZXItW3ZhcigtLWxpbmUpXSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGxhc3Q6Ym9yZGVyLXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHByb3BzLnZhbHVlKSA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLVt2YXIoLS1hY2lkKV0gdGV4dC1bdmFyKC0tdm9pZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJnLVt2YXIoLS1wYW5lbCldIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBUb3BCdXR0b24ocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgZGFuZ2VyPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG4gICAgbGFiZWw/OiBzdHJpbmc7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3M9e2BmbGV4IGgtWzI2cHhdIGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlciBweC0yIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRyYW5zaXRpb24tY29sb3JzIGRpc2FibGVkOm9wYWNpdHktMzAgJHtcbiAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldIGJnLVt2YXIoLS1hY2lkKV0vMTUgdGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgOiBwcm9wcy5kYW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLVsjYzQ1YjZhXSBiZy1bI2M0NWI2YV0vMTAgdGV4dC1bI2I4NmE3NF1cIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ym9yZGVyLVt2YXIoLS1saW5lLWhvdCldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIHtwcm9wcy5sYWJlbCA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBsZzppbmxpbmVcIj57cHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFwcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCBzY2VuZXNRdWVyeSA9IHVzZVF1ZXJ5PHsgcmVhZHk6IGJvb2xlYW47IGl0ZW1zOiBTY2VuZU1ldGFbXSB9PihcbiAgICAgICAgXCJzY2VuZXNcIixcbiAgICApO1xuICAgIGNvbnN0IHNhdmVTY2VuZU11dGF0aW9uID0gdXNlTXV0YXRpb248XG4gICAgICAgIFtzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmddLFxuICAgICAgICB7IGlkOiBzdHJpbmcgfVxuICAgID4oXCJzYXZlU2NlbmVcIik7XG4gICAgY29uc3QgZGVsZXRlU2NlbmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uPFtzdHJpbmddLCB2b2lkPihcImRlbGV0ZVNjZW5lXCIpO1xuICAgIGNvbnN0IGdldFNjZW5lTXV0YXRpb24gPSB1c2VNdXRhdGlvbjxcbiAgICAgICAgW3N0cmluZ10sXG4gICAgICAgIHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVxuICAgID4oXCJnZXRTY2VuZVwiKTtcblxuICAgIGNvbnN0IFtzY2VuZSwgc2V0U2NlbmVdID0gdXNlU3RhdGU8U2NlbmU+KGVtcHR5U2NlbmUpO1xuICAgIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtpbWFnZUluZm8sIHNldEltYWdlSW5mb10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBJbWFnZUluZm8+Pih7fSk7XG4gICAgY29uc3QgW3N0YWdlTW9kZSwgc2V0U3RhZ2VNb2RlXSA9IHVzZVN0YXRlPFwiYXJyYW5nZVwiIHwgXCJwbGF5XCI+KFwiYXJyYW5nZVwiKTtcbiAgICBjb25zdCBbdWlIaWRkZW4sIHNldFVpSGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZnJvemVuLCBzZXRGcm96ZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFttaWNBY3RpdmUsIHNldE1pY0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXhwb3J0UmVzLCBzZXRFeHBvcnRSZXNdID0gdXNlU3RhdGU8RXhwb3J0UmVzb2x1dGlvbklkPihcIjEwODBcIik7XG4gICAgY29uc3QgW2Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwcmVzZXRzT3Blbiwgc2V0UHJlc2V0c09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzY2VuZXNPcGVuLCBzZXRTY2VuZXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VydmVyU2NlbmVJZCwgc2V0U2VydmVyU2NlbmVJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFt0b2FzdCwgc2V0VG9hc3RdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2RyYWdPdmVyLCBzZXREcmFnT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2VuZ2luZUVycm9yLCBzZXRFbmdpbmVFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHN0YWdlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZW5naW5lUmVmID0gdXNlUmVmPEVuZ2luZUhhbmRsZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHNjZW5lUmVmID0gdXNlUmVmKHNjZW5lKTtcbiAgICBjb25zdCBpbWFnZUluZm9SZWYgPSB1c2VSZWYoaW1hZ2VJbmZvKTtcbiAgICBjb25zdCBzdGFnZU1vZGVSZWYgPSB1c2VSZWYoc3RhZ2VNb2RlKTtcbiAgICBjb25zdCBmcm96ZW5SZWYgPSB1c2VSZWYoZnJvemVuKTtcbiAgICBjb25zdCB0aW1lUmVmID0gdXNlUmVmKE1hdGgucmFuZG9tKCkgKiA5MCk7XG4gICAgY29uc3QgYXVkaW9MZXZlbFJlZiA9IHVzZVJlZigwKTtcbiAgICBjb25zdCBhbmFseXNlclJlZiA9IHVzZVJlZjxBbmFseXNlck5vZGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBhdWRpb0NvbnRleHRSZWYgPSB1c2VSZWY8QXVkaW9Db250ZXh0IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgbWljU3RyZWFtUmVmID0gdXNlUmVmPE1lZGlhU3RyZWFtIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc3BlY3RydW1SZWYgPSB1c2VSZWYobmV3IFVpbnQ4QXJyYXkoMTI4KSk7XG4gICAgY29uc3QgcmVjb3JkZXJSZWYgPSB1c2VSZWY8TWVkaWFSZWNvcmRlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGNodW5rc1JlZiA9IHVzZVJlZjxCbG9iW10+KFtdKTtcbiAgICBjb25zdCB0b2FzdFRpbWVyUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IGxhc3RQb2ludGVyUmVmID0gdXNlUmVmKHsgeDogMC41LCB5OiAwLjUsIGF0OiAwIH0pO1xuICAgIGNvbnN0IHBvaW50ZXJSZWYgPSB1c2VSZWY8UG9pbnRlclN0YXRlPih7XG4gICAgICAgIHg6IDAuNSxcbiAgICAgICAgeTogMC41LFxuICAgICAgICB2ZWxvY2l0eVg6IDAsXG4gICAgICAgIHZlbG9jaXR5WTogMCxcbiAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgZHJhZ1JlZiA9IHVzZVJlZjx7XG4gICAgICAgIGxheWVySWQ6IHN0cmluZztcbiAgICAgICAgc3RhcnRYOiBudW1iZXI7XG4gICAgICAgIHN0YXJ0WTogbnVtYmVyO1xuICAgICAgICBmeFg6IG51bWJlcjtcbiAgICAgICAgZnhZOiBudW1iZXI7XG4gICAgfSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHN0YWdlU2l6ZVJlZiA9IHVzZVJlZih7IHdpZHRoOiAxLCBoZWlnaHQ6IDEgfSk7XG4gICAgY29uc3QgcXVhbGl0eVJlZiA9IHVzZVJlZigxLjUpO1xuICAgIGNvbnN0IGV4cG9ydFJlc1JlZiA9IHVzZVJlZihleHBvcnRSZXMpO1xuICAgIGNvbnN0IGV4cG9ydExvY2tSZWYgPSB1c2VSZWY8eyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbD4oXG4gICAgICAgIG51bGwsXG4gICAgKTtcbiAgICBjb25zdCBkcmFnUmFmUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IGRyYWdQb2ludFJlZiA9IHVzZVJlZih7IHg6IDAsIHk6IDAgfSk7XG4gICAgY29uc3QgbWVkaWFSdW50aW1lc1JlZiA9IHVzZVJlZihuZXcgTWFwPHN0cmluZywgTWVkaWFSdW50aW1lPigpKTtcblxuICAgIHNjZW5lUmVmLmN1cnJlbnQgPSBzY2VuZTtcbiAgICBpbWFnZUluZm9SZWYuY3VycmVudCA9IGltYWdlSW5mbztcbiAgICBzdGFnZU1vZGVSZWYuY3VycmVudCA9IHN0YWdlTW9kZTtcbiAgICBmcm96ZW5SZWYuY3VycmVudCA9IGZyb3plbjtcbiAgICBleHBvcnRSZXNSZWYuY3VycmVudCA9IGV4cG9ydFJlcztcblxuICAgIGNvbnN0IHNlbGVjdGVkID1cbiAgICAgICAgc2NlbmUubGF5ZXJzLmZpbmQoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gc2VsZWN0ZWRJZCkgPz8gbnVsbDtcbiAgICBjb25zdCBzY2VuZUxpc3QgPSBzY2VuZXNRdWVyeT8uaXRlbXMgPz8gW107XG5cbiAgICBmdW5jdGlvbiBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHNldFRvYXN0KG1lc3NhZ2UpO1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRvYXN0VGltZXJSZWYuY3VycmVudCk7XG4gICAgICAgIHRvYXN0VGltZXJSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFRvYXN0KFwiXCIpLCAyNjAwKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2NlbmUgdXBkYXRlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlR2xvYmFsKHBhdGNoOiBQYXJ0aWFsPEdsb2JhbEZ4Pikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGdsb2JhbDogeyAuLi5wcmV2aW91cy5nbG9iYWwsIC4uLnBhdGNoIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXllckZ4KGxheWVySWQ6IHN0cmluZywgcGF0Y2g6IFBhcnRpYWw8TGF5ZXJGeD4pIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PlxuICAgICAgICAgICAgICAgIGxheWVyLmlkID09PSBsYXllcklkXG4gICAgICAgICAgICAgICAgICAgID8geyAuLi5sYXllciwgZng6IHsgLi4ubGF5ZXIuZngsIC4uLnBhdGNoIH0gfVxuICAgICAgICAgICAgICAgICAgICA6IGxheWVyLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMYXllckZ4KGxheWVySWQ6IHN0cmluZywgZng6IExheWVyRngpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PlxuICAgICAgICAgICAgICAgIGxheWVyLmlkID09PSBsYXllcklkID8geyAuLi5sYXllciwgZnggfSA6IGxheWVyLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVMYXllcihsYXllcklkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByZXZpb3VzLmxheWVycy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gaW5kZXggKyBkZWx0YTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDAgfHwgbmV4dCA8IDAgfHwgbmV4dCA+PSBwcmV2aW91cy5sYXllcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IHByZXZpb3VzLmxheWVycy5zbGljZSgpO1xuICAgICAgICAgICAgY29uc3QgW2xheWVyXSA9IGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgbGF5ZXJzLnNwbGljZShuZXh0LCAwLCBsYXllcik7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2aW91cywgbGF5ZXJzIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGR1cGxpY2F0ZUxheWVyKGxheWVySWQ6IHN0cmluZykge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2aW91cy5sYXllcnMubGVuZ3RoID49IE1BWF9MQVlFUlMpIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldmlvdXMubGF5ZXJzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBwcmV2aW91cztcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHByZXZpb3VzLmxheWVyc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBjb3B5OiBTY2VuZUxheWVyID0ge1xuICAgICAgICAgICAgICAgIGlkOiBuZXdJZChcImxheWVyXCIpLFxuICAgICAgICAgICAgICAgIGltYWdlSWQ6IHNvdXJjZS5pbWFnZUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGAke3NvdXJjZS5uYW1lfSBjb3B5YCxcbiAgICAgICAgICAgICAgICBtZWRpYUtpbmQ6IHNvdXJjZS5tZWRpYUtpbmQsXG4gICAgICAgICAgICAgICAgZng6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc291cmNlLmZ4LFxuICAgICAgICAgICAgICAgICAgICB4OiBzb3VyY2UuZngueCArIDAuMDYsXG4gICAgICAgICAgICAgICAgICAgIHk6IHNvdXJjZS5meC55IC0gMC4wNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IHByZXZpb3VzLmxheWVycy5zbGljZSgpO1xuICAgICAgICAgICAgbGF5ZXJzLnNwbGljZShpbmRleCArIDEsIDAsIGNvcHkpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChjb3B5LmlkKTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHByZXZpb3VzLmxheWVycy5maW5kKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkICE9PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICByZW1vdmVkICYmXG4gICAgICAgICAgICAgICAgIWxheWVycy5zb21lKChsYXllcikgPT4gbGF5ZXIuaW1hZ2VJZCA9PT0gcmVtb3ZlZC5pbWFnZUlkKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShyZW1vdmVkLmltYWdlSWQpO1xuICAgICAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5yZW1vdmVJbWFnZShyZW1vdmVkLmltYWdlSWQpO1xuICAgICAgICAgICAgICAgIHZvaWQgZGVsZXRlSW1hZ2VCbG9iKHJlbW92ZWQuaW1hZ2VJZCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4uaW5mbyB9O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV4dFtyZW1vdmVkLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoKGN1cnJlbnQpID0+IChjdXJyZW50ID09PSBsYXllcklkID8gbnVsbCA6IGN1cnJlbnQpKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVkaWEgaW1wb3J0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcnVudGltZSA9IG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5nZXQoaW1hZ2VJZCk7XG4gICAgICAgIGlmICghcnVudGltZSkgcmV0dXJuO1xuICAgICAgICBydW50aW1lLnZpZGVvPy5wYXVzZSgpO1xuICAgICAgICBydW50aW1lLmF1ZGlvPy5wYXVzZSgpO1xuICAgICAgICBpZiAocnVudGltZS52aWRlbykge1xuICAgICAgICAgICAgcnVudGltZS52aWRlby5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgICAgICAgICBydW50aW1lLnZpZGVvLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVudGltZS5hdWRpbykge1xuICAgICAgICAgICAgcnVudGltZS5hdWRpby5yZW1vdmVBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgICAgICAgICBydW50aW1lLmF1ZGlvLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcnVudGltZS5zb3VyY2VOb2RlPy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBkaXNjb25uZWN0ZWRcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcnVudGltZS5hbmFseXNlcj8uZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIGFscmVhZHkgZGlzY29ubmVjdGVkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bnRpbWUub2JqZWN0VXJsKSBVUkwucmV2b2tlT2JqZWN0VVJMKHJ1bnRpbWUub2JqZWN0VXJsKTtcbiAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmRlbGV0ZShpbWFnZUlkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlQWxsTWVkaWFSdW50aW1lcygpIHtcbiAgICAgICAgZm9yIChjb25zdCBpbWFnZUlkIG9mIFsuLi5tZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQua2V5cygpXSkge1xuICAgICAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGVuc3VyZU1lZGlhQXVkaW9Db250ZXh0KCk6IFByb21pc2U8QXVkaW9Db250ZXh0PiB7XG4gICAgICAgIGlmICghYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdWRpb0NvbnRleHRSZWYuY3VycmVudC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIikge1xuICAgICAgICAgICAgYXdhaXQgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQucmVzdW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGFjdGl2YXRlTWVkaWEoXG4gICAgICAgIGltYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgYmxvYjogQmxvYixcbiAgICAgICAga2luZDogTWVkaWFLaW5kLFxuICAgICAgICBfZmlsZU5hbWU6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPEltYWdlSW5mbz4ge1xuICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQpO1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcblxuICAgICAgICBpZiAoa2luZCA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgZGVjb2RlSW1hZ2VCbG9iKGJsb2IpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBkZWNvZGVkLmNhbnZhcyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGRlY29kZWQud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBkZWNvZGVkLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aHVtYjogZGVjb2RlZC50aHVtYixcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcImRhdGFcIikge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGJsb2Iuc2xpY2UoMCwgMTAyNCAqIDEwMjQpLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBwYWludERhdGFCeXRlcyhjYW52YXMsIG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBjYW52YXMpO1xuICAgICAgICAgICAgbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LnNldChpbWFnZUlkLCB7IGtpbmQsIGNhbnZhcyB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgIHZpZGVvLnBsYXlzSW5saW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZGVvLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXQtcGxheXNpbmxpbmVcIiwgXCJcIik7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBvYmplY3RVcmw7XG5cbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvblJlYWR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCBkZWNvZGUgdGhhdCB2aWRlb1wiKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZGRhdGFcIiwgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IpO1xuICAgICAgICAgICAgICAgIHZpZGVvLmxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIHZpZGVvLnZpZGVvV2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgdmlkZW8udmlkZW9IZWlnaHQpO1xuICAgICAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCB2aWRlbyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCwgb2JqZWN0VXJsLCB2aWRlbyB9KTtcbiAgICAgICAgICAgIHZvaWQgdmlkZW8ucGxheSgpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRodW1iOiBjYW52YXNUaHVtYih2aWRlbywgd2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdWRpb1xuICAgICAgICBjb25zdCBvYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgYXVkaW8ubG9vcCA9IHRydWU7XG4gICAgICAgIGF1ZGlvLnByZWxvYWQgPSBcImF1dG9cIjtcbiAgICAgICAgYXVkaW8uc3JjID0gb2JqZWN0VXJsO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhcyk7XG4gICAgICAgIHBhaW50QXVkaW9WaXN1YWwoY2FudmFzLCBuZXcgVWludDhBcnJheSgxMjgpLCAwLjI1LCAwKTtcblxuICAgICAgICBjb25zdCBjb250ZXh0ID0gYXdhaXQgZW5zdXJlTWVkaWFBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgY29uc3Qgc291cmNlTm9kZSA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgICAgIGFuYWx5c2VyLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuNzI7XG4gICAgICAgIHNvdXJjZU5vZGUuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgZW5naW5lPy5zZXRJbWFnZShpbWFnZUlkLCBjYW52YXMpO1xuICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBvYmplY3RVcmwsXG4gICAgICAgICAgICBhdWRpbyxcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIGFuYWx5c2VyLFxuICAgICAgICAgICAgc291cmNlTm9kZSxcbiAgICAgICAgICAgIHNwZWN0cnVtOiBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCksXG4gICAgICAgIH0pO1xuICAgICAgICB2b2lkIGF1ZGlvLnBsYXkoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSxcbiAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbXBvcnRGaWxlcyhmaWxlczogSXRlcmFibGU8RmlsZT4pIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IEFycmF5LmZyb20oZmlsZXMpO1xuICAgICAgICBpZiAoIWxpc3QubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGxldCBhZGRlZCA9IDA7XG4gICAgICAgIGxldCBpbXBvcnRlZEF1ZGlvID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBsaXN0KSB7XG4gICAgICAgICAgICBpZiAoc2NlbmVSZWYuY3VycmVudC5sYXllcnMubGVuZ3RoICsgYWRkZWQgPj0gTUFYX0xBWUVSUykge1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdChgTGF5ZXIgbGltaXQgaXMgJHtNQVhfTEFZRVJTfWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qga2luZCA9IGNsYXNzaWZ5RmlsZShmaWxlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VJZCA9IG5ld0lkKFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHB1dEltYWdlQmxvYihpbWFnZUlkLCBmaWxlKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhY3RpdmF0ZU1lZGlhKGltYWdlSWQsIGZpbGUsIGtpbmQsIGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChwcmV2aW91cykgPT4gKHsgLi4ucHJldmlvdXMsIFtpbWFnZUlkXTogaW5mbyB9KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXI6IFNjZW5lTGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXdJZChcImxheWVyXCIpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUoZGVmYXVsdExheWVyTmFtZShraW5kLCBmaWxlLm5hbWUpLCBtZWRpYUtpbmRMYWJlbChraW5kKSksXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhS2luZDoga2luZCxcbiAgICAgICAgICAgICAgICAgICAgZng6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfTEFZRVJfRlgsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBhZGRlZCAqIDAuMDcsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBhZGRlZCAqIC0wLjA3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBbLi4ucHJldmlvdXMubGF5ZXJzLCBsYXllcl0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChraW5kID09PSBcImF1ZGlvXCIpIGltcG9ydGVkQXVkaW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFkZGVkKys7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoYENvdWxkIG5vdCBpbXBvcnQgJHttZWRpYUtpbmRMYWJlbChraW5kKS50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbXBvcnRlZEF1ZGlvICYmIHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsLmF1ZGlvUmVhY3QgPCAwLjI1KSB7XG4gICAgICAgICAgICB1cGRhdGVHbG9iYWwoeyBhdWRpb1JlYWN0OiAwLjU1IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaHlkcmF0ZVNjZW5lSW1hZ2VzKHRhcmdldDogU2NlbmUpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGtpbmRCeUlkID0gbmV3IE1hcDxzdHJpbmcsIE1lZGlhS2luZD4oKTtcbiAgICAgICAgY29uc3QgbmFtZUJ5SWQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRhcmdldC5sYXllcnMpIHtcbiAgICAgICAgICAgIGlmICghbGF5ZXIuaW1hZ2VJZCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIWtpbmRCeUlkLmhhcyhsYXllci5pbWFnZUlkKSkge1xuICAgICAgICAgICAgICAgIGtpbmRCeUlkLnNldChsYXllci5pbWFnZUlkLCBsYXllci5tZWRpYUtpbmQgPz8gXCJpbWFnZVwiKTtcbiAgICAgICAgICAgICAgICBuYW1lQnlJZC5zZXQobGF5ZXIuaW1hZ2VJZCwgbGF5ZXIubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlSWQgb2YgWy4uLm1lZGlhUnVudGltZXNSZWYuY3VycmVudC5rZXlzKCldKSB7XG4gICAgICAgICAgICBpZiAoIWtpbmRCeUlkLmhhcyhpbWFnZUlkKSkge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlbW92ZUltYWdlKGltYWdlSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBbaW1hZ2VJZCwga2luZF0gb2Yga2luZEJ5SWQpIHtcbiAgICAgICAgICAgIGlmIChtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuaGFzKGltYWdlSWQpICYmIGVuZ2luZS5oYXNJbWFnZShpbWFnZUlkKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgZ2V0SW1hZ2VCbG9iKGltYWdlSWQpO1xuICAgICAgICAgICAgICAgIGlmICghYmxvYikgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZDogTWVkaWFLaW5kID1cbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJpbWFnZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwidmlkZW9cIiB8fFxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcImF1ZGlvXCIgfHxcbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJkYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8ga2luZFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFzc2lmeUJsb2IoYmxvYiwgbmFtZUJ5SWQuZ2V0KGltYWdlSWQpID8/IFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCBhY3RpdmF0ZU1lZGlhKFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBibG9iLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZUJ5SWQuZ2V0KGltYWdlSWQpID8/IFwibWVkaWFcIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldEltYWdlSW5mbygocHJldmlvdXMpID0+ICh7IC4uLnByZXZpb3VzLCBbaW1hZ2VJZF06IGluZm8gfSkpO1xuICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgIFtpbWFnZUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pc3Npbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNMaXZlTWVkaWFUZXh0dXJlcyhlbmdpbmU6IEVuZ2luZUhhbmRsZSwgdGltZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1lZGlhTGV2ZWwgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IFtpbWFnZUlkLCBydW50aW1lXSBvZiBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChydW50aW1lLmtpbmQgPT09IFwidmlkZW9cIiAmJiBydW50aW1lLnZpZGVvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bnRpbWUudmlkZW8ucmVhZHlTdGF0ZSA+PSBIVE1MTWVkaWFFbGVtZW50LkhBVkVfQ1VSUkVOVF9EQVRBKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRJbWFnZShpbWFnZUlkLCBydW50aW1lLnZpZGVvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVudGltZS5raW5kID09PSBcImF1ZGlvXCIgJiYgcnVudGltZS5hdWRpbyAmJiBydW50aW1lLmNhbnZhcyAmJiBydW50aW1lLmFuYWx5c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BlY3RydW0gPVxuICAgICAgICAgICAgICAgICAgICBydW50aW1lLnNwZWN0cnVtICYmXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWUuc3BlY3RydW0ubGVuZ3RoID09PSBydW50aW1lLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJ1bnRpbWUuc3BlY3RydW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkocnVudGltZS5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bSA9IHNwZWN0cnVtO1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoc3BlY3RydW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxGcm9tU3BlY3RydW0oc3BlY3RydW0pO1xuICAgICAgICAgICAgICAgIG1lZGlhTGV2ZWwgPSBNYXRoLm1heChtZWRpYUxldmVsLCBsZXZlbCk7XG4gICAgICAgICAgICAgICAgcGFpbnRBdWRpb1Zpc3VhbChydW50aW1lLmNhbnZhcywgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuc2V0SW1hZ2UoaW1hZ2VJZCwgcnVudGltZS5jYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZWRpYUxldmVsO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZW5naW5lIGxvb3AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBidWlsZEZyYW1lKCk6IEZyYW1lU3RhdGUge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc2NlbmVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgaW5mbyA9IGltYWdlSW5mb1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0YWdlU2l6ZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBhc3BlY3QgPSBNYXRoLm1heCgwLjA1LCB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCkpO1xuICAgICAgICBjb25zdCB0aW1lID0gdGltZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBhdWRpbyA9IGF1ZGlvTGV2ZWxSZWYuY3VycmVudDtcblxuICAgICAgICBjb25zdCBsYXllcnM6IExheWVyUmVuZGVyU3RhdGVbXSA9IGN1cnJlbnQubGF5ZXJzXG4gICAgICAgICAgICAuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIuZngudmlzaWJsZSlcbiAgICAgICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZnggPSBsYXllci5meDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWVkID0gbGF5ZXJTZWVkKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0gaW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUFzcGVjdCA9XG4gICAgICAgICAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbWV0YS53aWR0aCAvIE1hdGgubWF4KDEsIG1ldGEuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpdEhlaWdodCA9IE1hdGgubWluKDEsIGFzcGVjdCAvIGltYWdlQXNwZWN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwdWxzZSA9XG4gICAgICAgICAgICAgICAgICAgIDEgK1xuICAgICAgICAgICAgICAgICAgICBmeC5wdWxzZSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAoMC4xNiAqIE1hdGguc2luKHRpbWUgKiAyLjIgKyBzZWVkICogMjApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbyAqIGN1cnJlbnQuZ2xvYmFsLmF1ZGlvUmVhY3QgKiAwLjUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gZnguc2NhbGUgKiBwdWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmlmdFggPVxuICAgICAgICAgICAgICAgICAgICBNYXRoLnNpbih0aW1lICogMC41NyArIHNlZWQgKiA5LjIpICogZnguZHJpZnQgKiAwLjM7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJpZnRZID1cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5jb3ModGltZSAqIDAuNDMgKyBzZWVkICogNS43KSAqIGZ4LmRyaWZ0ICogMC4zO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VJZDogbGF5ZXIuaW1hZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgcG9zOiBbZngueCArIGRyaWZ0WCwgZngueSArIGRyaWZ0WV0sXG4gICAgICAgICAgICAgICAgICAgIGV4dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMWUtNCwgKGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogc2NhbGUpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgxZS00LCAoZml0SGVpZ2h0ICogc2NhbGUpIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHJvdDogKGZ4LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODAgKyBmeC5zcGluICogdGltZSAqIDEuNSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogZngub3BhY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgYmxlbmQ6IGJsZW5kSW5kZXgoZnguYmxlbmQpLFxuICAgICAgICAgICAgICAgICAgICB0aWxlOiBNYXRoLnJvdW5kKGZ4LnRpbGUpLFxuICAgICAgICAgICAgICAgICAgICB3YXJwOiBmeC53YXJwLFxuICAgICAgICAgICAgICAgICAgICBzd2lybDogZnguc3dpcmwsXG4gICAgICAgICAgICAgICAgICAgIHJpcHBsZTogZngucmlwcGxlLFxuICAgICAgICAgICAgICAgICAgICBrYWxlaWRvOiBmeC5rYWxlaWRvLFxuICAgICAgICAgICAgICAgICAgICBwaXhlbGF0ZTogZngucGl4ZWxhdGUsXG4gICAgICAgICAgICAgICAgICAgIGJ1bGdlOiBmeC5idWxnZSxcbiAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBmeC5taXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGh1ZTogZnguaHVlLFxuICAgICAgICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBmeC5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdDogZnguY29udHJhc3QsXG4gICAgICAgICAgICAgICAgICAgIGJyaWdodG5lc3M6IGZ4LmJyaWdodG5lc3MsXG4gICAgICAgICAgICAgICAgICAgIGludmVydDogZnguaW52ZXJ0LFxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXJpemU6IGZ4LnBvc3Rlcml6ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hyb21hOiBmeC5jaHJvbWEsXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzOiBmeC5lZGdlcyxcbiAgICAgICAgICAgICAgICAgICAgdGludDogaGV4VG9SZ2IoZngudGludENvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgdGludEFtb3VudDogZngudGludEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc2hpbW1lcjogZnguc2hpbW1lcixcbiAgICAgICAgICAgICAgICAgICAgc2VlZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZyA9IGN1cnJlbnQuZ2xvYmFsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIGF1ZGlvLFxuICAgICAgICAgICAgcG9pbnRlcjogcG9pbnRlclJlZi5jdXJyZW50LFxuICAgICAgICAgICAgbGF5ZXJzLFxuICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgYmdNb2RlOiBnLmJnTW9kZSxcbiAgICAgICAgICAgICAgICBiZ0E6IGhleFRvUmdiKGcuYmdBKSxcbiAgICAgICAgICAgICAgICBiZ0I6IGhleFRvUmdiKGcuYmdCKSxcbiAgICAgICAgICAgICAgICBmZWVkYmFjazogZy5mZWVkYmFjayxcbiAgICAgICAgICAgICAgICB0cmFpbHM6IGcudHJhaWxzLFxuICAgICAgICAgICAgICAgIGZiWm9vbTogZy5mYlpvb20sXG4gICAgICAgICAgICAgICAgZmJSb3RhdGU6IGcuZmJSb3RhdGUsXG4gICAgICAgICAgICAgICAgZmJIdWU6IGcuZmJIdWUsXG4gICAgICAgICAgICAgICAgd2FycDogZy53YXJwLFxuICAgICAgICAgICAgICAgIHN3aXJsOiBnLnN3aXJsLFxuICAgICAgICAgICAgICAgIHJpcHBsZTogZy5yaXBwbGUsXG4gICAgICAgICAgICAgICAgem9vbTogZy56b29tLFxuICAgICAgICAgICAgICAgIGthbGVpZG86IGcua2FsZWlkbyxcbiAgICAgICAgICAgICAgICBtaXJyb3I6IGcubWlycm9yLFxuICAgICAgICAgICAgICAgIGNocm9tYTogZy5jaHJvbWEsXG4gICAgICAgICAgICAgICAgaHVlT3JiaXQ6IGcuaHVlT3JiaXQsXG4gICAgICAgICAgICAgICAgc2F0dXJhdGlvbjogZy5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGNvbnRyYXN0OiBnLmNvbnRyYXN0LFxuICAgICAgICAgICAgICAgIHNvbGFyaXplOiBnLnNvbGFyaXplLFxuICAgICAgICAgICAgICAgIGdyYWluOiBnLmdyYWluLFxuICAgICAgICAgICAgICAgIHNjYW5saW5lczogZy5zY2FubGluZXMsXG4gICAgICAgICAgICAgICAgdmlnbmV0dGU6IGcudmlnbmV0dGUsXG4gICAgICAgICAgICAgICAgc3Ryb2JlOiBnLnN0cm9iZSxcbiAgICAgICAgICAgICAgICBhdWRpb1JlYWN0OiBnLmF1ZGlvUmVhY3QsXG4gICAgICAgICAgICAgICAgcG9pbnRlckZvcmNlOiBnLnBvaW50ZXJGb3JjZSxcbiAgICAgICAgICAgICAgICBwb2ludGVyU2l6ZTogZy5wb2ludGVyU2l6ZSxcbiAgICAgICAgICAgICAgICBwb2ludGVyTW9kZTogZy5wb2ludGVyTW9kZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXN0YWdlKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGVuZ2luZTogRW5naW5lSGFuZGxlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5naW5lID0gY3JlYXRlRW5naW5lKGNhbnZhcyk7XG4gICAgICAgIH0gY2F0Y2ggKGNhdXNlKSB7XG4gICAgICAgICAgICBzZXRFbmdpbmVFcnJvcihcbiAgICAgICAgICAgICAgICBjYXVzZSBpbnN0YW5jZW9mIEVycm9yXG4gICAgICAgICAgICAgICAgICAgID8gY2F1c2UubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA6IFwiV2ViR0wgZmFpbGVkIHRvIHN0YXJ0XCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZVJlZi5jdXJyZW50ID0gZW5naW5lO1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHN0YWdlU2l6ZVJlZi5jdXJyZW50ID0geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9O1xuICAgICAgICAgICAgY29uc3QgbG9jayA9IGV4cG9ydExvY2tSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc2l6ZShsb2NrLndpZHRoLCBsb2NrLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5yZXNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXNpemUoKTtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIocmVzaXplKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzdGFnZSk7XG5cbiAgICAgICAgbGV0IHJhZiA9IDA7XG4gICAgICAgIGxldCBsYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGxldCBzbG93U3RyZWFrID0gMDtcbiAgICAgICAgbGV0IGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICBjb25zdCB0aWNrID0gKG5vdzogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkdCA9IE1hdGgubWluKDAuMSwgKG5vdyAtIGxhc3QpIC8gMTAwMCk7XG4gICAgICAgICAgICBsYXN0ID0gbm93O1xuXG4gICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IGFuYWx5c2VyUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gMDtcbiAgICAgICAgICAgIGlmIChhbmFseXNlcikge1xuICAgICAgICAgICAgICAgIGlmIChzcGVjdHJ1bVJlZi5jdXJyZW50Lmxlbmd0aCAhPT0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BlY3RydW1SZWYuY3VycmVudCA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKHNwZWN0cnVtUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpbnMgPSBzcGVjdHJ1bVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGxldCBiYXNzID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbCArPSBiaW5zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDEwKSBiYXNzICs9IGJpbnNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAoKGJhc3MgLyAxMCkgKiAyICsgdG90YWwgLyBiaW5zLmxlbmd0aCkgLyAzIC8gMTQ4LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZnJvemVuUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aW1lUmVmLmN1cnJlbnQgKz0gZHQgKiBzY2VuZVJlZi5jdXJyZW50Lmdsb2JhbC5zcGVlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWVkaWFMZXZlbCA9IHN5bmNMaXZlTWVkaWFUZXh0dXJlcyhlbmdpbmUsIHRpbWVSZWYuY3VycmVudCk7XG4gICAgICAgICAgICB0YXJnZXQgPSBNYXRoLm1heCh0YXJnZXQsIG1lZGlhTGV2ZWwpO1xuICAgICAgICAgICAgYXVkaW9MZXZlbFJlZi5jdXJyZW50ICs9ICh0YXJnZXQgLSBhdWRpb0xldmVsUmVmLmN1cnJlbnQpICogMC4yODtcblxuICAgICAgICAgICAgLy8gQWRhcHRpdmUgcXVhbGl0eTogZHJvcCBpbnRlcm5hbCByZXNvbHV0aW9uIHdoZW4gZnJhbWVzIHJ1biBzbG93LFxuICAgICAgICAgICAgLy8gY3JlZXAgYmFjayB1cCB3aGVuIHRoZXJlIGlzIGhlYWRyb29tLiBTa2lwIHdoaWxlIGV4cG9ydC1sb2NrZWQuXG4gICAgICAgICAgICBpZiAoIWV4cG9ydExvY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChkdCA+IDAuMDI0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkdCA8IDAuMDE0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2xvd1N0cmVhayA+IDMwICYmIHF1YWxpdHlSZWYuY3VycmVudCA+IDAuOSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCAtIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmYXN0U3RyZWFrID4gNjAwICYmIHF1YWxpdHlSZWYuY3VycmVudCA8IDEuNSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIDEuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCArIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH07XG4gICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBsYXN0IHdvcmtpbmcgc2NlbmUuXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9hZEF1dG9zYXZlKCk7XG4gICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgc2V0U2NlbmUoc2F2ZWQpO1xuICAgICAgICAgICAgc2NlbmVSZWYuY3VycmVudCA9IHNhdmVkO1xuICAgICAgICAgICAgdm9pZCBoeWRyYXRlU2NlbmVJbWFnZXMoc2F2ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBkaXNwb3NlQWxsTWVkaWFSdW50aW1lcygpO1xuICAgICAgICAgICAgZW5naW5lLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEF1dG9zYXZlIChkZWJvdW5jZWQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzYXZlQXV0b3NhdmUoc2NlbmUpLCAzNTApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW3NjZW5lXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBtaWNTdHJlYW1SZWYuY3VycmVudD8uZ2V0VHJhY2tzKCkgPz8gW10pXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgaWYgKHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0YXRlID09PSBcInJlY29yZGluZ1wiKVxuICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgICAgICAgdm9pZCBhdWRpb0NvbnRleHRSZWYuY3VycmVudD8uY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzeW5jID0gKCkgPT5cbiAgICAgICAgICAgIHNldEZ1bGxzY3JlZW4oZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgPT09IHN0YWdlUmVmLmN1cnJlbnQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHN5bmMpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJ2YXVkaW8tMlwiO1xuICAgICAgICBjb25zdCBmYXZpY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cbiAgPHJlY3Qgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgZmlsbD1cIiMwODA4MGFcIi8+XG4gIDxwYXRoIGQ9XCJNNSA4LjUgMjMuNSA1LjUgMjYuNSAyMy41IDggMjYuNVpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ZTZjNjhcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+XG4gIDxwYXRoIGQ9XCJNNCA3LjUgMjQuNSA0LjUgMjcuNSAyNC41IDcgMjcuNVpcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlOGU2ZTBcIiBzdHJva2Utd2lkdGg9XCIxLjdcIi8+XG4gIDxwYXRoIGQ9XCJNMTAgMjIuNSAyMS41IDkuNVwiIHN0cm9rZT1cIiNlOGU2ZTBcIiBzdHJva2Utd2lkdGg9XCIyLjRcIiBzdHJva2UtbGluZWNhcD1cInNxdWFyZVwiLz5cbiAgPHBhdGggZD1cIk0xMS4yIDIyLjUgMjIuNyA5LjVcIiBzdHJva2U9XCIjYTg3ODgwXCIgc3Ryb2tlLXdpZHRoPVwiMS4xXCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIiBvcGFjaXR5PVwiLjg1XCIvPlxuICA8cmVjdCB4PVwiMjAuNVwiIHk9XCIyMC41XCIgd2lkdGg9XCIzLjJcIiBoZWlnaHQ9XCIzLjJcIiBmaWxsPVwiI2U4ZTZlMFwiLz5cbiAgPHJlY3QgeD1cIjYuNVwiIHk9XCI2LjVcIiB3aWR0aD1cIjIuMlwiIGhlaWdodD1cIjIuMlwiIGZpbGw9XCIjNmU2YzY4XCIvPlxuPC9zdmc+YDtcbiAgICAgICAgY29uc3QgbGluayA9XG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnbGlua1tyZWw9XCJpY29uXCJdJyxcbiAgICAgICAgICAgICkgYXMgSFRNTExpbmtFbGVtZW50IHwgbnVsbCkgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGxpbmsucmVsID0gXCJpY29uXCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwiaW1hZ2Uvc3ZnK3htbFwiO1xuICAgICAgICBsaW5rLmhyZWYgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KGZhdmljb24pfWA7XG4gICAgICAgIGlmICghbGluay5wYXJlbnROb2RlKSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0sIFtdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGtleWJvYXJkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGFyZ2V0ICYmXG4gICAgICAgICAgICAgICAgKHRhcmdldC50YWdOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaXNDb250ZW50RWRpdGFibGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0VWlIaWRkZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ2XCIpIHNldFN0YWdlTW9kZShcImFycmFuZ2VcIik7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInBcIikgc2V0U3RhZ2VNb2RlKFwicGxheVwiKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRGcm96ZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChldmVudC5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKSAmJlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTGF5ZXIoc2VsZWN0ZWRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJZCAmJiBldmVudC5rZXkuc3RhcnRzV2l0aChcIkFycm93XCIpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZXZlbnQuc2hpZnRLZXkgPyAwLjA1IDogMC4wMTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChsKSA9PiBsLmlkID09PSBzZWxlY3RlZElkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC1zdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZElkLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNsYW1wKGxheWVyLmZ4LnggKyBkeCwgLTMsIDMpLFxuICAgICAgICAgICAgICAgICAgICB5OiBjbGFtcChsYXllci5meC55ICsgZHksIC0zLCAzKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICB9LCBbc2VsZWN0ZWRJZF0pO1xuXG4gICAgLy8gUGFzdGUgZmlsZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvblBhc3RlID0gKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGV2ZW50LmNsaXBib2FyZERhdGE/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCAhPT0gXCJmaWxlXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdm9pZCBpbXBvcnRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgb25QYXN0ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIG9uUGFzdGUpO1xuICAgIH0sIFtdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0YWdlIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gc3RhZ2VQb2ludChldmVudDogUG9pbnRlckV2ZW50KToge1xuICAgICAgICBzY2VuZVg6IG51bWJlcjtcbiAgICAgICAgc2NlbmVZOiBudW1iZXI7XG4gICAgICAgIHU6IG51bWJlcjtcbiAgICAgICAgdjogbnVtYmVyO1xuICAgIH0ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZVxuICAgICAgICAgICAgPyBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgOiB7IGxlZnQ6IDAsIHRvcDogMCwgd2lkdGg6IDEsIGhlaWdodDogMSB9O1xuICAgICAgICBjb25zdCB1ID0gY2xhbXAoKGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCwgMCwgMSk7XG4gICAgICAgIGNvbnN0IHYgPSBjbGFtcCgoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0LCAwLCAxKTtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gcmVjdC53aWR0aCAvIE1hdGgubWF4KDEsIHJlY3QuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHsgc2NlbmVYOiAodSAtIDAuNSkgKiBhc3BlY3QsIHNjZW5lWTogMC41IC0gdiwgdSwgdiB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdExheWVyKHNjZW5lWDogbnVtYmVyLCBzY2VuZVk6IG51bWJlcik6IFNjZW5lTGF5ZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHNjZW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGluZm8gPSBpbWFnZUluZm9SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnQubGF5ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGN1cnJlbnQubGF5ZXJzW2ldO1xuICAgICAgICAgICAgaWYgKCFsYXllci5meC52aXNpYmxlKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBpbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VBc3BlY3QgPVxuICAgICAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIDogMTtcbiAgICAgICAgICAgIGNvbnN0IGZpdEhlaWdodCA9IE1hdGgubWluKDEsIGFzcGVjdCAvIGltYWdlQXNwZWN0KTtcbiAgICAgICAgICAgIGNvbnN0IGV4dFggPSAoZml0SGVpZ2h0ICogaW1hZ2VBc3BlY3QgKiBsYXllci5meC5zY2FsZSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgZXh0WSA9IChmaXRIZWlnaHQgKiBsYXllci5meC5zY2FsZSkgLyAyO1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoLWxheWVyLmZ4LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODA7XG4gICAgICAgICAgICBjb25zdCBkeCA9IHNjZW5lWCAtIGxheWVyLmZ4Lng7XG4gICAgICAgICAgICBjb25zdCBkeSA9IHNjZW5lWSAtIGxheWVyLmZ4Lnk7XG4gICAgICAgICAgICBjb25zdCBxeCA9IE1hdGguY29zKGFuZ2xlKSAqIGR4IC0gTWF0aC5zaW4oYW5nbGUpICogZHk7XG4gICAgICAgICAgICBjb25zdCBxeSA9IE1hdGguc2luKGFuZ2xlKSAqIGR4ICsgTWF0aC5jb3MoYW5nbGUpICogZHk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocXgpIDw9IGV4dFggJiYgTWF0aC5hYnMocXkpIDw9IGV4dFkpIHJldHVybiBsYXllcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5UG9pbnRlcihldmVudDogUG9pbnRlckV2ZW50LCBkb3duOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgIGNvbnN0IHggPSB1O1xuICAgICAgICBjb25zdCB5ID0gMSAtIHY7XG4gICAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCBlbGFwc2VkID0gTWF0aC5tYXgoOCwgbm93IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC5hdCk7XG4gICAgICAgIHBvaW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgdmVsb2NpdHlYOiAoeCAtIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQueCkgKiAoMTYgLyBlbGFwc2VkKSxcbiAgICAgICAgICAgIHZlbG9jaXR5WTogKHkgLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LnkpICogKDE2IC8gZWxhcHNlZCksXG4gICAgICAgICAgICBkb3duLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICBsYXN0UG9pbnRlclJlZi5jdXJyZW50ID0geyB4LCB5LCBhdDogbm93IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJEb3duKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnNldFBvaW50ZXJDYXB0dXJlKGV2ZW50LnBvaW50ZXJJZCk7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNjZW5lWCwgc2NlbmVZIH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXIoc2NlbmVYLCBzY2VuZVkpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKGhpdC5pZCk7XG4gICAgICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJJZDogaGl0LmlkLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogc2NlbmVYLFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogc2NlbmVZLFxuICAgICAgICAgICAgICAgIGZ4WDogaGl0LmZ4LngsXG4gICAgICAgICAgICAgICAgZnhZOiBoaXQuZngueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKG51bGwpO1xuICAgICAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyTW92ZShldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCA9PT0gXCJwbGF5XCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50LCBwb2ludGVyUmVmLmN1cnJlbnQuZG93bik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkcmFnUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBzY2VuZVgsIHNjZW5lWSB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgIGRyYWdQb2ludFJlZi5jdXJyZW50ID0geyB4OiBzY2VuZVgsIHk6IHNjZW5lWSB9O1xuICAgICAgICAvLyBDb2FsZXNjZSBwb2ludGVyIGV2ZW50cyB0byBvbmUgc3RhdGUgdXBkYXRlIHBlciBmcmFtZS5cbiAgICAgICAgaWYgKGRyYWdSYWZSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBkcmFnUmFmUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ1JhZlJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGRyYWcgPSBkcmFnUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWRyYWcpIHJldHVybjtcbiAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoZHJhZy5sYXllcklkLCB7XG4gICAgICAgICAgICAgICAgeDogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgIGRyYWcuZnhYICsgZHJhZ1BvaW50UmVmLmN1cnJlbnQueCAtIGRyYWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgICAgICAtMyxcbiAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHk6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICBkcmFnLmZ4WSArIGRyYWdQb2ludFJlZi5jdXJyZW50LnkgLSBkcmFnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICAgICAgLTMsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlclVwKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhZ2VQb2ludGVyTGVhdmUoKSB7XG4gICAgICAgIHBvaW50ZXJSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIC4uLnBvaW50ZXJSZWYuY3VycmVudCxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgZHJhZ1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghc3RhZ2UpIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25XaGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ICE9PSBcImFycmFuZ2VcIikgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHNlbGVjdGVkSWQ7XG4gICAgICAgICAgICBpZiAoIWxheWVySWQpIHJldHVybjtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGxheWVySWQpO1xuICAgICAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChsYXllcklkLCB7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBsYXllci5meC5yb3RhdGlvbiArIChldmVudC5kZWx0YVkgPiAwID8gMyA6IC0zKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChsYXllcklkLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBjbGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmZ4LnNjYWxlICogTWF0aC5leHAoLWV2ZW50LmRlbHRhWSAqIDAuMDAxNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzdGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gICAgfSwgW3NlbGVjdGVkSWRdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhdWRpbyAvIHJlY29yZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlTWljKCkge1xuICAgICAgICBpZiAobWljQWN0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1pY1N0cmVhbVJlZi5jdXJyZW50Py5nZXRUcmFja3MoKSA/PyBbXSlcbiAgICAgICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICBtaWNTdHJlYW1SZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGF1ZGlvTGV2ZWxSZWYuY3VycmVudCA9IDA7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgICAgICAgICAgdmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtaWNTdHJlYW1SZWYuY3VycmVudCA9IHN0cmVhbTtcbiAgICAgICAgICAgIGlmICghYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICBhd2FpdCBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5yZXN1bWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgICAgIGFuYWx5c2VyLmZmdFNpemUgPSAyNTY7XG4gICAgICAgICAgICBhbmFseXNlci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjY4O1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnRcbiAgICAgICAgICAgICAgICAuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgICAgICAgIC5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgICAgIGFuYWx5c2VyUmVmLmN1cnJlbnQgPSBhbmFseXNlcjtcbiAgICAgICAgICAgIHNldE1pY0FjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChzY2VuZVJlZi5jdXJyZW50Lmdsb2JhbC5hdWRpb1JlYWN0IDwgMC4zKVxuICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IDAuNyB9KTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIk1pYyBsaXZlIFx1MjAxNCBhdWRpbyBkcml2ZXMgdGhlIHNoYWRlclwiKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJNaWNyb3Bob25lIHdhcyBibG9ja2VkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZUxpdmVDYW52YXNTaXplKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVuZ2luZSB8fCAhc3RhZ2UpIHJldHVybjtcbiAgICAgICAgY29uc3QgcmVjdCA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBzdGFnZVNpemVSZWYuY3VycmVudCA9IHsgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHQgfTtcbiAgICAgICAgZW5naW5lLnJlc2l6ZShyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKHF1YWxpdHlSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlFeHBvcnRDYW52YXNTaXplKFxuICAgICAgICByZXNvbHV0aW9uSWQ6IEV4cG9ydFJlc29sdXRpb25JZCxcbiAgICAgICAgc2NyZWVuU2NhbGUgPSAxLFxuICAgICkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBzaXplID0gcmVzb2x2ZUV4cG9ydFNpemUoXG4gICAgICAgICAgICByZXNvbHV0aW9uSWQsXG4gICAgICAgICAgICBzdGFnZVNpemVSZWYuY3VycmVudCxcbiAgICAgICAgICAgIHNjcmVlblNjYWxlLFxuICAgICAgICApO1xuICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBzaXplO1xuICAgICAgICBlbmdpbmUucmVzaXplKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAoMSk7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVJlY29yZGluZygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhZW5naW5lKSByZXR1cm47XG4gICAgICAgIGlmIChyZWNvcmRpbmcpIHtcbiAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0b3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaXplID0gYXBwbHlFeHBvcnRDYW52YXNTaXplKFxuICAgICAgICAgICAgZXhwb3J0UmVzUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICApO1xuICAgICAgICBpZiAoIXNpemUpIHJldHVybjtcbiAgICAgICAgLy8gT25lIGZyYW1lIGF0IHRoZSBsb2NrZWQgc2l6ZSBiZWZvcmUgY2FwdHVyZVN0cmVhbSByZWFkcyBkaW1lbnNpb25zLlxuICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNhbnZhcy5jYXB0dXJlU3RyZWFtKDYwKTtcbiAgICAgICAgY29uc3QgbWltZVR5cGUgPSBbXG4gICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOVwiLFxuICAgICAgICAgICAgXCJ2aWRlby93ZWJtO2NvZGVjcz12cDhcIixcbiAgICAgICAgICAgIFwidmlkZW8vd2VibVwiLFxuICAgICAgICAgICAgXCJ2aWRlby9tcDRcIixcbiAgICAgICAgXS5maW5kKCh0eXBlKSA9PiBNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZCh0eXBlKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwge1xuICAgICAgICAgICAgICAgIG1pbWVUeXBlLFxuICAgICAgICAgICAgICAgIHZpZGVvQml0c1BlclNlY29uZDogMThfMDAwXzAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2h1bmtzUmVmLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpemUpIGNodW5rc1JlZi5jdXJyZW50LnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IChyZWNvcmRlci5taW1lVHlwZSB8fCBcInZpZGVvL3dlYm1cIikuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIFwibXA0XCIsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA/IFwibXA0XCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIndlYm1cIjtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoY2h1bmtzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkZXIubWltZVR5cGUgfHwgXCJ2aWRlby93ZWJtXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2h1bmtzUmVmLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGRvd25sb2FkQmxvYihibG9iLCBleHBvcnRGaWxlbmFtZShleHRlbnNpb24pKTtcbiAgICAgICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRSZWNvcmRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlY29yZGVyLnN0YXJ0KDI1MCk7XG4gICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50ID0gcmVjb3JkZXI7XG4gICAgICAgICAgICBzZXRSZWNvcmRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzaG93VG9hc3QoYFJlY29yZGluZyAke3NpemUud2lkdGh9XHUwMEQ3JHtzaXplLmhlaWdodH1gKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzdG9yZUxpdmVDYW52YXNTaXplKCk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJSZWNvcmRpbmcgaXMgbm90IHN1cHBvcnRlZCBoZXJlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG93bmxvYWRCbG9iKGJsb2I6IEJsb2IsIGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGFuY2hvci5ocmVmID0gdXJsO1xuICAgICAgICBhbmNob3IuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgYW5jaG9yLmNsaWNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpLCA0MDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHBvcnRGaWxlbmFtZShleHRlbnNpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPVxuICAgICAgICAgICAgY2xlYW5OYW1lKHNjZW5lUmVmLmN1cnJlbnQubmFtZSwgXCJ2YXVkaW8tMlwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLV0rL2csIFwiLVwiKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8tKy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXi18LSQvZywgXCJcIikgfHwgXCJ2YXVkaW8tMlwiO1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBwYWQgPSAobjogbnVtYmVyKSA9PiBTdHJpbmcobikucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICBjb25zdCBzdGFtcCA9IFtcbiAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICBwYWQobm93LmdldERhdGUoKSksXG4gICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgIHBhZChub3cuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICBwYWQobm93LmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICBwYWQobm93LmdldFNlY29uZHMoKSksXG4gICAgICAgIF0uam9pbihcIlwiKTtcbiAgICAgICAgcmV0dXJuIGAke3Byb2plY3R9LSR7c3RhbXB9LiR7ZXh0ZW5zaW9ufWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0UG5nKCkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lIHx8ICFjYW52YXMpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShleHBvcnRSZXNSZWYuY3VycmVudCwgMyk7XG4gICAgICAgIGlmICghc2l6ZSkgcmV0dXJuO1xuICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgICAgIGV4cG9ydExvY2tSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgIGlmIChibG9iKSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCbG9iKGJsb2IsIGV4cG9ydEZpbGVuYW1lKFwicG5nXCIpKTtcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoYEV4cG9ydGVkICR7c2l6ZS53aWR0aH1cdTAwRDcke3NpemUuaGVpZ2h0fWApO1xuICAgICAgICAgICAgfSBlbHNlIHNob3dUb2FzdChcIkV4cG9ydCBmYWlsZWRcIik7XG4gICAgICAgIH0sIFwiaW1hZ2UvcG5nXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhcHR1cmVUaHVtYigpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIWNhbnZhcy53aWR0aCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBUaGUgZHJhd2luZyBidWZmZXIgaXMgbm90IHByZXNlcnZlZCBcdTIwMTQgcmVkcmF3IHNvIHRoZSBncmFiIGlzbid0IGJsYW5rLlxuICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LnJlbmRlcihidWlsZEZyYW1lKCkpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSAyMjAgLyBNYXRoLm1heChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgdGh1bWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgdGh1bWJDYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy53aWR0aCAqIHNjYWxlKSk7XG4gICAgICAgICAgICB0aHVtYkNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy5oZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRodW1iQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHRodW1iQ2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGh1bWJDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjYyKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA8IDU4XzAwMCA/IGRhdGEgOiBcIlwiO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlcnZlciBzY2VuZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlVG9TZXJ2ZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzYXZlU2NlbmVNdXRhdGlvbihcbiAgICAgICAgICAgICAgICBzZXJ2ZXJTY2VuZUlkLFxuICAgICAgICAgICAgICAgIHNjZW5lLm5hbWUsXG4gICAgICAgICAgICAgICAgZW5jb2RlU2NlbmUoc2NlbmUpLFxuICAgICAgICAgICAgICAgIGNhcHR1cmVUaHVtYigpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQocmVzdWx0LmlkKTtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIlNjZW5lIHNhdmVkXCIpO1xuICAgICAgICB9IGNhdGNoIChjYXVzZSkge1xuICAgICAgICAgICAgc2hvd1RvYXN0KGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZS5tZXNzYWdlIDogXCJTYXZlIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRGcm9tU2VydmVyKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFNjZW5lTXV0YXRpb24oaWQpO1xuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gZGVjb2RlU2NlbmUocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgbG9hZGVkLm5hbWUgPSBjbGVhbk5hbWUocmVzdWx0Lm5hbWUsIGxvYWRlZC5uYW1lKTtcbiAgICAgICAgICAgIHNldFNjZW5lKGxvYWRlZCk7XG4gICAgICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gbG9hZGVkO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChudWxsKTtcbiAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQoaWQpO1xuICAgICAgICAgICAgc2V0U2NlbmVzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgYXdhaXQgaHlkcmF0ZVNjZW5lSW1hZ2VzKGxvYWRlZCk7XG4gICAgICAgICAgICBjb25zdCBtaXNzaW5nID0gbG9hZGVkLmxheWVycy5zb21lKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gIWVuZ2luZVJlZi5jdXJyZW50Py5oYXNJbWFnZShsYXllci5pbWFnZUlkKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobWlzc2luZylcbiAgICAgICAgICAgICAgICBzaG93VG9hc3QoXG4gICAgICAgICAgICAgICAgICAgIFwiU29tZSBtZWRpYSBmaWxlcyBhcmUgbm90IG9uIHRoaXMgZGV2aWNlIFx1MjAxNCBzaG93aW5nIHBsYWNlaG9sZGVyc1wiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiQ291bGQgbm90IGxvYWQgdGhhdCBzY2VuZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFzdGFnZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSBhd2FpdCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgZWxzZSBhd2FpdCBzdGFnZS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIkZ1bGxzY3JlZW4gaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlbGVjdGlvbiBib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uQm94ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWQgfHwgc3RhZ2VNb2RlICE9PSBcImFycmFuZ2VcIikgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBpbWFnZUluZm9bc2VsZWN0ZWQuaW1hZ2VJZF07XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICh3aWR0aCA8IDIpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBhc3BlY3QgPSB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgIG1ldGEgJiYgbWV0YS53aWR0aCA+IDAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpIDogMTtcbiAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICBjb25zdCBib3hXaWR0aCA9IGZpdEhlaWdodCAqIGltYWdlQXNwZWN0ICogc2VsZWN0ZWQuZnguc2NhbGUgKiBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IGJveEhlaWdodCA9IGZpdEhlaWdodCAqIHNlbGVjdGVkLmZ4LnNjYWxlICogaGVpZ2h0O1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gKDAuNSArIHNlbGVjdGVkLmZ4LnggLyBhc3BlY3QpICogd2lkdGg7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSAoMC41IC0gc2VsZWN0ZWQuZngueSkgKiBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBib3hXaWR0aCxcbiAgICAgICAgICAgIGJveEhlaWdodCxcbiAgICAgICAgICAgIGNlbnRlclgsXG4gICAgICAgICAgICBjZW50ZXJZLFxuICAgICAgICAgICAgcm90YXRpb246IHNlbGVjdGVkLmZ4LnJvdGF0aW9uLFxuICAgICAgICB9O1xuICAgIH0sIFtzZWxlY3RlZCwgaW1hZ2VJbmZvLCBzdGFnZU1vZGUsIHNjZW5lXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZW5kZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0IHdvcmxkUGFuZWwgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIldvcmxkIHByZXNldHNcIiBhY2NlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEgcHgtMyBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHtXT1JMRF9QUkVTRVRTLm1hcCgocHJlc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcmVzZXQuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbChwcmVzZXQuZ2xvYmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gcHgtMS41IHB5LTEgdGV4dC1sZWZ0IGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWFjaWQpXS82MCBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtW3ZhcigtLWFjaWQpXS83MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0LmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHJ1bmNhdGVcIj57cHJlc2V0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJCYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPFNlZ1Jvd1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vZGVcIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtCR19NT0RFU31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5iZ01vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+IHVwZGF0ZUdsb2JhbCh7IGJnTW9kZTogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHgtMyBweS0xIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYmdBfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYmdCfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGbHVpZCB3YXJwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC53YXJwfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHdhcnA6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zd2lybH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzd2lybDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlwcGxlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucmlwcGxlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHJpcHBsZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVubmVsIHpvb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnpvb219XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgem9vbTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS2FsZWlkb3Njb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5rYWxlaWRvfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGthbGVpZG86IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pcnJvciBmb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5taXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgbWlycm9yOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJGZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGZWVkYmFja1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuZmVlZGJhY2t9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmVlZGJhY2s6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRyYWlsIGxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwudHJhaWxzfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuNn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgdHJhaWxzOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIHpvb21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiWm9vbX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmJab29tOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFY2hvIHNwaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiUm90YXRlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBmYlJvdGF0ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWNobyBodWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZiSHVlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGZiSHVlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJXb3JsZCBjb2xvclwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmlzbSBzcGxpdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuY2hyb21hfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGNocm9tYTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSHVlIG9yYml0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5odWVPcmJpdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBodWVPcmJpdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2F0dXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc2F0dXJhdGlvbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmNvbnRyYXN0fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBjb250cmFzdDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU29sYXJpemVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNvbGFyaXplfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHNvbGFyaXplOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTaWduYWxcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JhaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmdyYWlufVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGdyYWluOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTY2FubGluZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNjYW5saW5lc31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzY2FubGluZXM6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpZ25ldHRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC52aWduZXR0ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswLjIyfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyB2aWduZXR0ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3Ryb2JlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zdHJvYmV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc3Ryb2JlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJNb3Rpb24gJiBhdWRpb1wiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaW1lIHNwZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc3BlZWQ6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkF1ZGlvIHJlYWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5hdWRpb1JlYWN0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT1cIkN1cnNvciAocGxheSBtb2RlKVwiPlxuICAgICAgICAgICAgICAgIDxTZWdSb3dcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1BPSU5URVJfTU9ERVN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucG9pbnRlck1vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaW5kZXgpID0+IHVwZGF0ZUdsb2JhbCh7IHBvaW50ZXJNb2RlOiBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb3JjZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucG9pbnRlckZvcmNlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuNn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgcG9pbnRlckZvcmNlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWVsZCBzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5wb2ludGVyU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezAuMzV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHBvaW50ZXJTaXplOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xuXG4gICAgY29uc3QgbGF5ZXJQYW5lbCA9IHNlbGVjdGVkID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb25cbiAgICAgICAgICAgICAgICB0aXRsZT17YExheWVyIFx1MDBCNyAke3NlbGVjdGVkLm5hbWV9YH1cbiAgICAgICAgICAgICAgICBhY2NlbnRcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNodWZmbGUgbGF5ZXIgRlhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUxheWVyRngoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbUxheWVyRngoc2VsZWN0ZWQuZngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRGljZSBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgbGF5ZXIgRlhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTGF5ZXJGeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRMYXllckZ4RWZmZWN0cyhzZWxlY3RlZC5meCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LTMgcHktMSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZWRpYUtpbmRMYWJlbChzZWxlY3RlZC5tZWRpYUtpbmQpfVxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLm1pc3NpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgXHUwMEI3ICR7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLndpZHRofVx1MDBENyR7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdLmhlaWdodH1gfVxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdPy5taXNzaW5nID8gXCIgXHUwMEI3IG1pc3Npbmcgb24gZGV2aWNlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmxlbmRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC02IHctZnVsbCBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBweC0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tcGFwZXIpXSBvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmJsZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUgYXMgQmxlbmRNb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtCTEVORF9NT0RFUy5tYXAoKG1vZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bW9kZX0gdmFsdWU9e21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5vcGFjaXR5fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IG9wYWNpdHk6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTZWdSb3dcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYW52YXMgZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1RJTEVfTU9ERVN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC50aWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyB0aWxlOiBpbmRleCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NhbGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4wNX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXs2fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc2NhbGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSb3RhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5yb3RhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMTgwfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezE4MH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdERlZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcm90YXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJEaXN0b3J0XCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZsdWlkIHdhcnBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngud2FycH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyB3YXJwOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3dpcmxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc3dpcmx9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc3dpcmw6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSaXBwbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnJpcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyByaXBwbGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJLYWxlaWRvc2NvcGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngua2FsZWlkb31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBrYWxlaWRvOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGl4ZWxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucGl4ZWxhdGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcGl4ZWxhdGU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMZW5zXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmJ1bGdlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBidWxnZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pcnJvciBmb2xkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4Lm1pcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBtaXJyb3I6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJMYXllciBjb2xvclwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIdWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguaHVlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGh1ZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc2F0dXJhdGlvbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmNvbnRyYXN0fVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MX1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXRYfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBjb250cmFzdDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyaWdodG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguYnJpZ2h0bmVzc31cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgYnJpZ2h0bmVzczogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkludmVydFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5pbnZlcnR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgaW52ZXJ0OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zdGVyaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnBvc3Rlcml6ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBwb3N0ZXJpemU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmlzbSBzcGxpdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5jaHJvbWF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgY2hyb21hOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmVvbiBlZGdlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5lZGdlc31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBlZGdlczogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTMgcHktWzVweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnRpbnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnRDb2xvcjogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnRpbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbnRBbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJMYXllciBtb3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5zcGlufVxuICAgICAgICAgICAgICAgICAgICBtaW49ey0xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXsodikgPT4gdi50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzcGluOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRHJpZnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguZHJpZnR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgZHJpZnQ6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQdWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5wdWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBwdWxzZTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoaW1tZXJcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc2hpbW1lcn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBzaGltbWVyOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICApO1xuXG4gICAgaWYgKGVuZ2luZUVycm9yKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBoLXNjcmVlbiBwbGFjZS1pdGVtcy1jZW50ZXIgYmctW3ZhcigtLXZvaWQpXSBwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTIgZm9udC1tb25vIHRleHQtc20gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbmdpbmVFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTIgbmVlZHMgV2ViR0wgdG8gcnVuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gYmctW3ZhcigtLXZvaWQpXSB0ZXh0LVt2YXIoLS1wYXBlcildIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQtMCBvcGFjaXR5LTQwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDE0JSAtMTAlLCByZ2JhKDIzMiwyMzAsMjI0LC4wOCksIHRyYW5zcGFyZW50IDMyJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTIlIDIwJSwgcmdiYSgxNjgsMTIwLDEyOCwuMDYpLCB0cmFuc3BhcmVudCAyOCUpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiBUb3AgYmFyICovfVxuICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBoLTExIGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIGdhcC0xLjUgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gcHgtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTEgdGV4dC1bMS4xNXJlbV0gZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy1bLTAuMDhlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdcIlNwYWNlIEdyb3Rlc2tcIiwgc2Fucy1zZXJpZicgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1bMjZweF0gdy0zNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXRyYW5zcGFyZW50IHB4LTEuNSB0ZXh0LVsxMnB4XSBmb250LW1lZGl1bSB0ZXh0LVt2YXIoLS1wYXBlcildIG91dGxpbmUtbm9uZSBob3Zlcjpib3JkZXItW3ZhcigtLWxpbmUpXSBmb2N1czpib3JkZXItW3ZhcigtLWFjaWQpXS82MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2xlYW5OYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVudGl0bGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcnJhbmdlIGxheWVycyAoVilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzdGFnZU1vZGUgPT09IFwiYXJyYW5nZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhZ2VNb2RlKFwiYXJyYW5nZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJTW92ZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGF5IHRoZSBjYW52YXMgd2l0aCB5b3VyIGN1cnNvciAoUClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzdGFnZU1vZGUgPT09IFwicGxheVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhZ2VNb2RlKFwicGxheVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGxheVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJU3BhcmsgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXgtMSBoLTQgdy1weCBiZy1bdmFyKC0tbGluZSldXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSYW5kb21pemUgZXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiByYW5kb21HbG9iYWxGeChwcmV2aW91cy5nbG9iYWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeDogcmFuZG9tTGF5ZXJGeChsYXllci5meCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNoYW9zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElEaWNlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51ZGdlIHRoZSB3b3JsZCBzb21ld2hlcmUgbmV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlR2xvYmFsKG11dGF0ZUdsb2JhbEZ4KHNjZW5lLmdsb2JhbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk11dGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJV2FuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb3plblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVzdW1lIHRpbWUgKFNwYWNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJGcmVlemUgdGltZSAoU3BhY2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZnJvemVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RnJvemVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zyb3plbiA/IDxJUGxheSAvPiA6IDxJUGF1c2UgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2F2ZSBzY2VuZSB0byB5b3VyIGxpYnJhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBzYXZlVG9TZXJ2ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJU2F2ZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHNhdmVkIHNjZW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzY2VuZXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lc09wZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NlbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUZvbGRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmVzT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2NlbmVzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AgYWJzb2x1dGUgcmlnaHQtMCB0b3AtOCB6LTQwIG1heC1oLVs2MHZoXSB3LTY0IG92ZXJmbG93LXktYXV0byBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBwLTEuNSBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmVMaXN0Lmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwLTMgZm9udC1tb25vIHRleHQtWzEwcHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBzYXZlZCBzY2VuZXMgeWV0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aC5pc0d1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIChHdWVzdCBzZXNzaW9ucyBzYXZlIGxvY2FsbHkgcGVyIGRlcGxveS4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lTGlzdC5tYXAoKG1ldGEpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWV0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTEuNSBob3ZlcjpiZy1bdmFyKC0tbGluZSldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4IG1pbi13LTAgZmxleC0xIGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIGxvYWRGcm9tU2VydmVyKG1ldGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JpZCBoLTkgdy0xNCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWV0YS50aHVtYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXVkaW8tMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdHJ1bmNhdGUgdGV4dC1bMTEuNXB4XSB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tb25vIHRleHQtWzguNXB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS51cGRhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHNjZW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIG9wYWNpdHktMCBob3Zlcjp0ZXh0LVsjYjg2YTc0XSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBkZWxldGVTY2VuZU11dGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuY2F0Y2goKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvYXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWxldGUgZmFpbGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEuaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlclNjZW5lSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlcnZlclNjZW5lSWQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SVRyYXNoIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTEgaC00IHctcHggYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlN0b3AgbWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJBdWRpby1yZWFjdCBmcm9tIHlvdXIgbWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e21pY0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgdG9nZ2xlTWljKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJTWljIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTdG9wIHJlY29yZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJSZWNvcmQgdGhlIGNhbnZhcyB0byB2aWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXI9e3JlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVJlY29yZGluZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlYy1kb3QgaW5saW5lLWJsb2NrIGgtMi41IHctMi41IHJvdW5kZWQtZnVsbCBiZy1bI2M0NWI2YV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlubGluZS1ibG9jayBoLTIuNSB3LTIuNSByb3VuZGVkLWZ1bGwgYm9yZGVyLVsxLjVweF0gYm9yZGVyLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZngtcmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXhwb3J0IC8gcmVjb3JkaW5nIHJlc29sdXRpb24gKGtlZXBzIHN0YWdlIGFzcGVjdClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cG9ydFJlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUgYXMgRXhwb3J0UmVzb2x1dGlvbklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRVhQT1JUX1JFU09MVVRJT05TLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwb3J0UmVzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7RVhQT1JUX1JFU09MVVRJT05TLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLmlkfSB2YWx1ZT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YEV4cG9ydCBQTkcgYXQgJHtFWFBPUlRfUkVTT0xVVElPTlMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXhwb3J0UmVzKT8ubGFiZWwgPz8gXCJzZWxlY3RlZFwifSByZXNvbHV0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V4cG9ydFBuZ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZnVsbHNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgdG9nZ2xlRnVsbHNjcmVlbigpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SUV4cGFuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIaWRlIGludGVyZmFjZSAoVGFiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRVaUhpZGRlbih0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElQYW5lbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGZsZXggbWluLWgtMCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICB7LyogTGF5ZXJzIHBhbmVsICovfVxuICAgICAgICAgICAgICAgIHshdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJmbGV4IHctWzIxMnB4XSBmbGV4LXNocmluay0wIGZsZXgtY29sIGJvcmRlci1yIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiZmxleCBoLTggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aH0ve01BWF9MQVlFUlN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltcG9ydCBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWluLWgtMCBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJteC0zIG15LTMgYmxvY2sgdy1bY2FsYygxMDAlLTI0cHgpXSBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0zIHB5LTYgdGV4dC1jZW50ZXIgZm9udC1tb25vIHRleHQtWzEwcHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ym9yZGVyLVt2YXIoLS1hY2lkKV0vNTAgaG92ZXI6dGV4dC1bdmFyKC0tbXV0ZSldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJvcCwgcGFzdGUsIG9yIGNsaWNrIHRvIGltcG9ydCBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChsYXllcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IGltYWdlSW5mb1tsYXllci5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBsYXllci5pZCA9PT0gc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyb3VwIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB4LTIgcHktMS41ICR7aXNTZWxlY3RlZCA/IFwiYmctW3ZhcigtLWFjaWQpXS8xMFwiIDogXCJob3ZlcjpiZy1bdmFyKC0tbGluZSldXCJ9ICR7bGF5ZXIuZngudmlzaWJsZSA/IFwiXCIgOiBcIm9wYWNpdHktNDVcIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChsYXllci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuZngudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSGlkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJTaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1zaHJpbmstMCB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGxheWVyLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbGF5ZXIuZngudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5meC52aXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRXllIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUV5ZU9mZiBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e2BncmlkIGgtOCB3LTggZmxleC1zaHJpbmstMCBwbGFjZS1pdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciAke2lzU2VsZWN0ZWQgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldLzYwXCIgOiBcImJvcmRlci1bdmFyKC0tbGluZSldXCJ9IGJnLWJsYWNrYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGE/LnRodW1iID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZXRhLnRodW1ifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs4cHhdIHRleHQtWyNiODZhNzRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhPy5taXNzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXHUyMDI2XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTAgZmxleC0xIHRydW5jYXRlIHRleHQtWzExcHhdIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgIT09IFwiaW1hZ2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtc2hyaW5rLTAgZm9udC1tb25vIHRleHQtWzhweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllci5tZWRpYUtpbmQgPT09IFwidmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsYXllci5tZWRpYUtpbmQgPT09IFwiYXVkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJkYXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgZ2FwLTAuNSBncm91cC1ob3ZlcjpmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSYWlzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGF5ZXIobGF5ZXIuaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElVcCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG93ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxheWVyKGxheWVyLmlkLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SURvd24gY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVMYXllcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElDb3B5IGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxheWVyKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJVHJhc2ggY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJib3JkZXItdCBib3JkZXItW3ZhcigtLWxpbmUpXSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs4LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWIGFycmFuZ2UgXHUwMEI3IFAgcGxheSBcdTAwQjcgU3BhY2UgZnJlZXplIFx1MDBCNyBUYWIgaGlkZSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTAwQjcgZHJhZyAvIHdoZWVsIC8gXHUyMUU3d2hlZWwgdG8gbW92ZSwgc2NhbGUsIHJvdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7LyogU3RhZ2UgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e3N0YWdlUmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17YHJlbGF0aXZlIG1pbi13LTAgZmxleC0xIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayAke3N0YWdlTW9kZSA9PT0gXCJwbGF5XCIgPyBcImN1cnNvci1jcm9zc2hhaXJcIiA6IFwiY3Vyc29yLWRlZmF1bHRcIn1gfVxuICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXtvblN0YWdlUG9pbnRlckRvd259XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uU3RhZ2VQb2ludGVyTW92ZX1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e29uU3RhZ2VQb2ludGVyVXB9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckxlYXZlPXtvblN0YWdlUG9pbnRlckxlYXZlfVxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3Zlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldERyYWdPdmVyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyPy5maWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBpbXBvcnRGaWxlcyhldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gY2xhc3M9XCJibG9jayBoLWZ1bGwgdy1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGlvbkJveCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGJvcmRlciBib3JkZXItW3ZhcigtLWFjaWQpXS83MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7c2VsZWN0aW9uQm94LmNlbnRlclggLSBzZWxlY3Rpb25Cb3guYm94V2lkdGggLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtzZWxlY3Rpb25Cb3guY2VudGVyWSAtIHNlbGVjdGlvbkJveC5ib3hIZWlnaHQgLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3NlbGVjdGlvbkJveC5ib3hXaWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c2VsZWN0aW9uQm94LmJveEhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3NlbGVjdGlvbkJveC5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDFweCByZ2JhKDAsMCwwLC42KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gYmctYmxhY2svNDAgcHgtNiBweS00IHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3AgaW1hZ2VzLCB2aWRlbywgYXVkaW8sIG9yIGFueSBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtkcmFnT3ZlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHotMjAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmxhY2svNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1bdmFyKC0tYWNpZCldIHB4LTggcHktNSBmb250LW1vbm8gdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZSB0byBhZGQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtzdGFnZU1vZGUgPT09IFwicGxheVwiICYmICF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBib3R0b20tMyBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFjay82MCBweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5IG1vZGUgXHUyMDE0IGRyYWcgdGhlIGNhbnZhcyBcdTAwQjcgZmllbGQ6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUE9JTlRFUl9NT0RFU1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoc2NlbmUuZ2xvYmFsLnBvaW50ZXJNb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtyZWNvcmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlciBib3JkZXItWyNjNDViNmFdLzUwIGJnLWJsYWNrLzYwIHB4LTIuNSBweS0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlYy1kb3QgaW5saW5lLWJsb2NrIGgtMiB3LTIgcm91bmRlZC1mdWxsIGJnLVsjYzQ1YjZhXVwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHt1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYnNvbHV0ZSBib3R0b20tMyByaWdodC0zIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFjay82MCBweC0yLjUgcHktMS41IGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVpSGlkZGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG93IFVJIChUYWIpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDb250cm9scyBwYW5lbCAqL31cbiAgICAgICAgICAgICAgICB7IXVpSGlkZGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwidy1bMjY0cHhdIGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3cteS1hdXRvIGJvcmRlci1sIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGF5ZXJQYW5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JsZFBhbmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMyBmb250LW1vbm8gdGV4dC1bOC41cHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3VibGUtY2xpY2sgYW55IHNsaWRlciB0byByZXNldCBpdC4gRmVlZGJhY2sgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1bm5lbCB6b29tICsgYSBrYWxlaWRvc2NvcGUgaXMgYSBnb29kIHdheSB0byBsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW4gYWZ0ZXJub29uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AgcG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBib3R0b20tNSBsZWZ0LTEvMiB6LTUwIC10cmFuc2xhdGUteC0xLzIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcHgtNCBweS0yIGZvbnQtbW9ubyB0ZXh0LVsxMC41cHhdIHRleHQtW3ZhcigtLXBhcGVyKV0gc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICB7dG9hc3R9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2ZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIiovKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzPy5sZW5ndGgpIHZvaWQgaW1wb3J0RmlsZXMoaW5wdXQuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2NsaWVudC9pbmRleC50c3hcIjtcblxucmVuZGVyKGgoQXBwLCB7fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDTyxJQzBCTUE7QUQxQk4sSUVVREM7QUZWQyxJR0dIQztBSEhHLElHOEZNQztBSDlGTixJSStLSEM7QUovS0csSUkwTEhDO0FKMUxHLElJNExEQztBSjVMQyxJSXNOREM7QUp0TkMsSUtTSEM7QUxURyxJS1VOQztBTFZNLElLV05DO0FMWE0sSUt5QkRDO0FMekJDLElLc0NIQztBTHRDRyxJS3FMREM7QUxyTEMsSUtzTERDO0FMdExDLElNRUlDO0FORkosSUFpQk1DLElBQWdDLENBQUc7QUFqQnpDLElBa0JNQyxJQUFZLENBQUE7QUFsQmxCLElBbUJNQyxJQUNaO0FBcEJNLElDQ01DLElBQVVDLE1BQU1EO0FBU3RCLFNBQVNFLEVBQU9DLElBQUtDLElBQUFBO0FBRTNCLFdBQVNSLE1BQUtRLEdBQU9ELENBQUFBLEdBQUlQLEVBQUFBLElBQUtRLEdBQU1SLEVBQUFBO0FBQ3BDLFNBQTZCTztBQUM5QjtBQVFnQixTQUFBRSxFQUFXQyxJQUFBQTtBQUN0QkEsRUFBQUEsTUFBUUEsR0FBS0MsY0FBWUQsR0FBS0MsV0FBV0MsWUFBWUYsRUFBQUE7QUFDMUQ7QUVWZ0IsU0FBQUcsRUFBY0MsSUFBTU4sSUFBT08sSUFBQUE7QUFDMUMsTUFDQ0MsSUFDQUMsSUFDQWpCLElBSEdrQixLQUFrQixDQUFBO0FBSXRCLE9BQUtsQixNQUFLUSxHQUNBLFVBQUxSLEtBQVlnQixLQUFNUixHQUFNUixFQUFBQSxJQUNkLFNBQUxBLEtBQVlpQixLQUFNVCxHQUFNUixFQUFBQSxJQUM1QmtCLEdBQWdCbEIsRUFBQUEsSUFBS1EsR0FBTVIsRUFBQUE7QUFVakMsTUFQSW1CLFVBQVVDLFNBQVMsTUFDdEJGLEdBQWdCSCxX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QUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDaEUsT0FBTztBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLElBQ3RFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxZQUFZO0FBQUEsTUFDckUsVUFBVTtBQUFBLE1BQUssVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sVUFBVTtBQUFBLElBQ3RFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDckQsUUFBUTtBQUFBLE1BQU0sWUFBWTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQU0sUUFBUTtBQUFBLElBQzFFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBSyxZQUFZO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFDcEUsVUFBVTtBQUFBLE1BQU0sVUFBVTtBQUFBLE1BQUssUUFBUTtBQUFBLE1BQU0sT0FBTztBQUFBLE1BQUssT0FBTztBQUFBLElBQ2xFLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxSmIsSUFBTSxZQUFZO0FBQUEsRUFDaEIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUdKLGdCQUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0csS0FBSztBQUFBLFFBQ0wsTUFBSztBQUFBLFFBQ0wsUUFBTztBQUFBLFFBQ1AsVUFBUTtBQUFBLFFBQ1IsT0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFVBQVU7QUFDakIsZ0JBQU0sUUFBUSxNQUFNO0FBQ3BCLGNBQUksTUFBTSxPQUFPLE9BQVEsTUFBSyxZQUFZLE1BQU0sS0FBSztBQUNyRCxnQkFBTSxRQUFRO0FBQUEsUUFDbEI7QUFBQTtBQUFBLElBQ0o7QUFBQSxLQUNKO0FBRVI7OztBQ252RkEsRUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxlQUFlLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFsic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImRlZmVyIiwgImRlcHRoU29ydCIsICJfaWQiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgIkVNUFRZX09CSiIsICJFTVBUWV9BUlIiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgIl9faSIsICJfX3UiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQmFzZUNvbXBvbmVudCIsICJjb250ZXh0IiwgInRoaXMiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgIl9fIiwgIl9faSIsICJzaWJsaW5nIiwgIl9fayIsICJsZW5ndGgiLCAiX19lIiwgInR5cGUiLCAicmVuZGVyQ29tcG9uZW50IiwgImNvbXBvbmVudCIsICJfX1AiLCAiX19kIiwgIm9sZFZOb2RlIiwgIl9fdiIsICJvbGREb20iLCAiY29tbWl0UXVldWUiLCAicmVmUXVldWUiLCAibmV3Vk5vZGUiLCAiYXNzaWduIiwgIm9wdGlvbnMiLCAiZGlmZiIsICJfX24iLCAibmFtZXNwYWNlVVJJIiwgIl9fdSIsICJjb21taXRSb290IiwgInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwgIl9fYyIsICJiYXNlIiwgInNvbWUiLCAiY2hpbGQiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgIl9fciIsICJwcmV2RGVib3VuY2UiLCAiZGVib3VuY2VSZW5kZXJpbmciLCAiZGVmZXIiLCAibCIsICJzb3J0IiwgImRlcHRoU29ydCIsICJzaGlmdCIsICJkaWZmQ2hpbGRyZW4iLCAicGFyZW50RG9tIiwgInJlbmRlclJlc3VsdCIsICJuZXdQYXJlbnRWTm9kZSIsICJvbGRQYXJlbnRWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgIm5hbWVzcGFjZSIsICJleGNlc3NEb21DaGlsZHJlbiIsICJpc0h5ZHJhdGluZyIsICJpIiwgImNoaWxkVk5vZGUiLCAibmV3RG9tIiwgImZpcnN0Q2hpbGREb20iLCAicmVzdWx0IiwgInNob3VsZFBsYWNlIiwgIm9sZENoaWxkcmVuIiwgIkVNUFRZX0FSUiIsICJuZXdDaGlsZHJlbkxlbmd0aCIsICJjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IiwgIkVNUFRZX09CSiIsICJyZWYiLCAiYXBwbHlSZWYiLCAiaW5zZXJ0IiwgIm5leHRTaWJsaW5nIiwgInNrZXdlZEluZGV4IiwgIm1hdGNoaW5nSW5kZXgiLCAib2xkQ2hpbGRyZW5MZW5ndGgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAic2tldyIsICJBcnJheSIsICJjb25zdHJ1Y3RvciIsICJTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiaXNBcnJheSIsICJfX2IiLCAia2V5IiwgImZpbmRNYXRjaGluZ0luZGV4IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibm9kZVR5cGUiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAiY2hpbGRWTm9kZSIsICJvbGRDaGlsZHJlbiIsICJza2V3ZWRJbmRleCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJ4IiwgInkiLCAiY2hpbGRJbmRleCIsICJrZXkiLCAidHlwZSIsICJvbGRWTm9kZSIsICJtYXRjaGVkIiwgIl9fdSIsICJsZW5ndGgiLCAic2V0U3R5bGUiLCAic3R5bGUiLCAidmFsdWUiLCAic2V0UHJvcGVydHkiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgInRlc3QiLCAiZG9tIiwgIm5hbWUiLCAib2xkVmFsdWUiLCAibmFtZXNwYWNlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgImwiLCAiRVZFTlRfQVRUQUNIRUQiLCAiZXZlbnRDbG9jayIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJ0aGlzIiwgImV2ZW50SGFuZGxlciIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIm9wdGlvbnMiLCAiZXZlbnQiLCAiZGlmZiIsICJwYXJlbnREb20iLCAibmV3Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJleGNlc3NEb21DaGlsZHJlbiIsICJjb21taXRRdWV1ZSIsICJvbGREb20iLCAiaXNIeWRyYXRpbmciLCAicmVmUXVldWUiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImMiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgInJlbmRlclJlc3VsdCIsICJpIiwgIm5ld1R5cGUiLCAiY29uc3RydWN0b3IiLCAiX19lIiwgIl9fYiIsICJvdXRlciIsICJwcm9wcyIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgImNvbnRleHRUeXBlIiwgIl9fYyIsICJfXyIsICJfX0UiLCAiQmFzZUNvbXBvbmVudCIsICJkb1JlbmRlciIsICJzdWIiLCAic3RhdGUiLCAiX19uIiwgIl9fZCIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiYXNzaWduIiwgIl9fdiIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAicHVzaCIsICJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfX2siLCAic29tZSIsICJ2bm9kZSIsICJFTVBUWV9BUlIiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiY29udGV4dCIsICJfX1AiLCAiX19yIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJGcmFnbWVudCIsICJjbG9uZU5vZGUiLCAiY2hpbGRyZW4iLCAiZGlmZkNoaWxkcmVuIiwgImlzQXJyYXkiLCAiYmFzZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJub2RlVHlwZSIsICJuZXh0U2libGluZyIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAiY29tbWl0Um9vdCIsICJyb290IiwgImFwcGx5UmVmIiwgImNiIiwgImNhbGwiLCAibm9kZSIsICJtYXAiLCAibmV3SHRtbCIsICJvbGRIdG1sIiwgIm5ld0NoaWxkcmVuIiwgImlucHV0VmFsdWUiLCAiY2hlY2tlZCIsICJFTVBUWV9PQkoiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJkZWZhdWx0VmFsdWUiLCAiY2hpbGROb2RlcyIsICJhdHRyaWJ1dGVzIiwgIl9faHRtbCIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJnZXREb21TaWJsaW5nIiwgInVuZGVmaW5lZCIsICJyZWYiLCAiaGFzUmVmVW5tb3VudCIsICJjdXJyZW50IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAic2tpcFJlbW92ZSIsICJyIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInJlcGxhY2VOb2RlIiwgImRvY3VtZW50RWxlbWVudCIsICJjcmVhdGVFbGVtZW50IiwgIm5hbWVzcGFjZVVSSSIsICJmaXJzdENoaWxkIiwgImNyZWF0ZUNvbnRleHQiLCAiZGVmYXVsdFZhbHVlIiwgIkNvbnRleHQiLCAicHJvcHMiLCAic3VicyIsICJjdHgiLCAidGhpcyIsICJnZXRDaGlsZENvbnRleHQiLCAiU2V0IiwgIl9fYyIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX3Byb3BzIiwgInZhbHVlIiwgImZvckVhY2giLCAiYyIsICJfX2UiLCAiZW5xdWV1ZVJlbmRlciIsICJzdWIiLCAiYWRkIiwgIm9sZCIsICJkZWxldGUiLCAiY2FsbCIsICJjaGlsZHJlbiIsICJpIiwgIl9fIiwgIlByb3ZpZGVyIiwgIl9fbCIsICJDb25zdW1lciIsICJjb250ZXh0VmFsdWUiLCAiY29udGV4dFR5cGUiLCAic2xpY2UiLCAiRU1QVFlfQVJSIiwgIm9wdGlvbnMiLCAiZXJyb3IiLCAidm5vZGUiLCAib2xkVk5vZGUiLCAiZXJyb3JJbmZvIiwgImNvbXBvbmVudCIsICJjdG9yIiwgImhhbmRsZWQiLCAiY29uc3RydWN0b3IiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwgInNldFN0YXRlIiwgIl9fZCIsICJjb21wb25lbnREaWRDYXRjaCIsICJfX0UiLCAiZSIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgIkJhc2VDb21wb25lbnQiLCAicHJvdG90eXBlIiwgInVwZGF0ZSIsICJjYWxsYmFjayIsICJzIiwgIl9fcyIsICJzdGF0ZSIsICJhc3NpZ24iLCAiX192IiwgIl9zYiIsICJwdXNoIiwgImZvcmNlVXBkYXRlIiwgIl9faCIsICJyZW5kZXIiLCAiRnJhZ21lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJkZWZlciIsICJQcm9taXNlIiwgInRoZW4iLCAiYmluZCIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiZGVwdGhTb3J0IiwgImEiLCAiYiIsICJfX2IiLCAicHJvY2VzcyIsICJfX3IiLCAiX2lkIiwgIk1hdGgiLCAicmFuZG9tIiwgInRvU3RyaW5nIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2aW91c0NvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9wdGlvbnMiLCAiX29wdGlvbnMiLCAib2xkQmVmb3JlRGlmZiIsICJfX2IiLCAib2xkQmVmb3JlUmVuZGVyIiwgIl9fciIsICJvbGRBZnRlckRpZmYiLCAiZGlmZmVkIiwgIm9sZENvbW1pdCIsICJfX2MiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgIm9sZFJvb3QiLCAiX18iLCAiZ2V0SG9va1N0YXRlIiwgImluZGV4IiwgInR5cGUiLCAiX19oIiwgImhvb2tzIiwgIl9fSCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgImFjdGlvbiIsICJjdXJyZW50VmFsdWUiLCAiX19OIiwgIm5leHRWYWx1ZSIsICJzZXRTdGF0ZSIsICJfX2YiLCAidXBkYXRlSG9va1N0YXRlIiwgInAiLCAicyIsICJjIiwgInVwZGF0ZWRIb29rIiwgInNob3VsZFVwZGF0ZSIsICJwcm9wcyIsICJzb21lIiwgImhvb2tJdGVtIiwgInByZXZTY3UiLCAicmVzdWx0IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImQiLCAiaCIsICJkIiwgImgiLCAidCIsICJkIiwgImwiLCAicCIsICJpIiwgIndpZHRoIiwgImhlaWdodCIsICJ5IiwgIngiLCAicCIsICJ1MiIsICJ1MyIsICJ2IiwgImciLCAiaSIsICJhIiwgImIiLCAiYyIsICJvIiwgImgiLCAicmVxdWVzdCIsICJ2bm9kZUlkIiwgImNyZWF0ZVZOb2RlIiwgInR5cGUiLCAicHJvcHMiLCAia2V5IiwgImlzU3RhdGljQ2hpbGRyZW4iLCAiX19zb3VyY2UiLCAiX19zZWxmIiwgInJlZiIsICJpIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgInZub2RlSWQiLCAiX19pIiwgIl9fdSIsICJkZWZhdWx0UHJvcHMiLCAib3B0aW9ucyIsICJ1IiwgInAiLCAiaSIsICJhdXRoIiwgImQiLCAiQSIsICJsYXllciIsICJjYW52YXMiLCAib2JqZWN0VXJsIiwgImciLCAiaCIsICJsIiwgInYiLCAieCIsICJ5IiwgIm4iLCAiVCJdCn0K
