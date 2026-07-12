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
function F(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (g(n2) ? n2.some(function(n3) {
    F(n3, l3);
  }) : l3.push(n2)), l3;
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
function setAuth(value) {
  auth = value;
}
function getAuthResumeStarted() {
  return authResumeStarted;
}
function setAuthResumeStarted(value) {
  authResumeStarted = value;
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
function x2(n2) {
  var u4 = r2.context[n2.__c], i3 = s2(t2++, 9);
  return i3.c = n2, u4 ? (null == i3.__ && (i3.__ = true, u4.sub(r2)), u4.props.value) : n2.__;
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
  const listeners3 = queryListeners.get(name);
  if (!listeners3) {
    return;
  }
  for (const listener of listeners3) {
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
  const state2 = randomString(32);
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(verifier));
  return {
    challenge: bytesToBase64Url(new Uint8Array(digest)),
    state: state2,
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
  const state2 = parsed.searchParams.get("state");
  if (!code || !state2) {
    return null;
  }
  return { code, state: state2 };
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
function appPathnameFromBrowserPathname(pathname) {
  const base = basePath();
  if (!base) {
    return pathname || "/";
  }
  if (pathname === base) {
    return "/";
  }
  if (pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || "/";
  }
  return pathname || "/";
}
function currentAppLocation() {
  if (typeof window === "undefined") {
    return { hash: "", href: "/", pathname: "/", search: "" };
  }
  const pathname = appPathnameFromBrowserPathname(window.location.pathname);
  const search = window.location.search;
  const hash = window.location.hash;
  return {
    hash,
    href: `${pathname}${search}${hash}`,
    pathname,
    search
  };
}
function isExternalHref(value) {
  return /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(value) || value.startsWith("//");
}
function browserHrefForAppHref(appHref) {
  const url = new URL(appHref, "http://lakebed.local/");
  const base = basePath();
  const pathname = base ? `${base}${url.pathname === "/" ? "/" : url.pathname}` : url.pathname;
  return `${pathname}${url.search}${url.hash}`;
}
function hrefForRoute(to) {
  const value = String(to ?? "");
  if (!value) {
    return browserHrefForAppHref(currentAppLocation().href);
  }
  if (isExternalHref(value)) {
    return value;
  }
  const current = currentAppLocation();
  const resolved = new URL(value, `http://lakebed.local${current.href}`);
  return browserHrefForAppHref(`${resolved.pathname}${resolved.search}${resolved.hash}`);
}
function emitLocationChange() {
  window.dispatchEvent(new Event("lakebed:locationchange"));
}
function navigate(to, options = {}) {
  const href = hrefForRoute(to);
  const parsed = new URL(href, window.location.href);
  if (parsed.origin !== window.location.origin) {
    window.location.assign(parsed.toString());
    return;
  }
  const next = `${parsed.pathname}${parsed.search}${parsed.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next === current) {
    return;
  }
  if (options.replace) {
    window.history.replaceState({}, "", next);
  } else {
    window.history.pushState({}, "", next);
  }
  emitLocationChange();
}
function useBrowserLocation() {
  const [location, setLocation] = d2(currentAppLocation);
  h2(() => {
    function updateLocation() {
      setLocation(currentAppLocation());
    }
    window.addEventListener("popstate", updateLocation);
    window.addEventListener("lakebed:locationchange", updateLocation);
    return () => {
      window.removeEventListener("popstate", updateLocation);
      window.removeEventListener("lakebed:locationchange", updateLocation);
    };
  }, []);
  return location;
}
function normalizeMatchPath(path) {
  const value = String(path ?? "/").trim();
  if (value === "*" || value === "/*") {
    return "*";
  }
  const withSlash = value.startsWith("/") ? value : `/${value}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/g, "") : "/";
}
function pathSegments(path) {
  const normalized = normalizeMatchPath(path);
  if (normalized === "*" || normalized === "/") {
    return [];
  }
  return normalized.replace(/^\/+|\/+$/g, "").split("/");
}
function decodeRouteSegment(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
function matchRoutePath(pattern, pathname) {
  const normalizedPattern = normalizeMatchPath(pattern);
  if (normalizedPattern === "*") {
    return { params: {} };
  }
  const patternSegments = pathSegments(normalizedPattern);
  const pathnameSegments = pathSegments(pathname);
  const params = {};
  for (let index = 0; index < patternSegments.length; index += 1) {
    const patternSegment = patternSegments[index];
    const pathnameSegment = pathnameSegments[index];
    if (patternSegment === "*") {
      params["*"] = pathnameSegments.slice(index).map(decodeRouteSegment).join("/");
      return { params };
    }
    if (pathnameSegment === void 0) {
      return null;
    }
    if (patternSegment.startsWith(":")) {
      const name = patternSegment.slice(1);
      if (!name) {
        return null;
      }
      params[name] = decodeRouteSegment(pathnameSegment);
      continue;
    }
    if (patternSegment !== pathnameSegment) {
      return null;
    }
  }
  if (patternSegments.length !== pathnameSegments.length) {
    return null;
  }
  return { params };
}
function routeChildren(children) {
  const routes = [];
  for (const child of F(children)) {
    if (!child || typeof child !== "object") {
      continue;
    }
    const vnode = child;
    if (vnode.props?.path !== void 0) {
      routes.push(vnode);
      continue;
    }
    if (vnode.props?.children !== void 0) {
      routes.push(...routeChildren(vnode.props.children));
    }
  }
  return routes;
}
function shouldHandleLinkClick(event, target) {
  return !event.defaultPrevented && event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && (!target || target === "_self") && !event.currentTarget?.hasAttribute("download");
}
function Router({ children } = {}) {
  const location = useBrowserLocation();
  return k(RouterContext.Provider, { value: { location, navigate } }, children);
}
function Routes({ children } = {}) {
  const location = useLocation();
  const routes = routeChildren(children);
  for (const route of routes) {
    const props = route.props;
    const match = matchRoutePath(props.path, location.pathname);
    if (!match) {
      continue;
    }
    return k(RouteContext.Provider, { value: match }, props.element ?? null);
  }
  return null;
}
function Route(_props) {
  return null;
}
function Link({ children, onClick, replace = false, target, to, ...props } = {}) {
  const href = hrefForRoute(to);
  return k("a", {
    ...props,
    href,
    onClick: (event) => {
      onClick?.(event);
      if (!shouldHandleLinkClick(event, target)) {
        return;
      }
      const parsed = new URL(href, window.location.href);
      if (parsed.origin !== window.location.origin) {
        return;
      }
      event.preventDefault();
      navigate(to, { replace });
    },
    target
  }, children);
}
function useLocation() {
  const context = x2(RouterContext);
  const fallback = useBrowserLocation();
  return context?.location ?? fallback;
}
function useNavigate() {
  const context = x2(RouterContext);
  return context?.navigate ?? navigate;
}
function useParams() {
  return x2(RouteContext).params;
}

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
var DEFAULT_PROJECT_WIDTH = 1280;
var DEFAULT_PROJECT_HEIGHT = 800;
var MAX_IMAGE_DIM = 2560;
var MIN_LAYER_SIZE = 8;
var MAX_PROJECT_DIM = 8e3;
var BLEND_MODES = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"
];
function finite(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function sanitizeText(input) {
  if (!input || typeof input.content !== "string") return void 0;
  const align = input.align === "center" || input.align === "right" ? input.align : "left";
  const rasterWidth = finite(input.rasterWidth, 0);
  const rasterHeight = finite(input.rasterHeight, 0);
  return {
    content: input.content.slice(0, 4e3),
    fontFamily: typeof input.fontFamily === "string" ? input.fontFamily.slice(0, 80) : "Inter",
    fontSize: clamp(finite(input.fontSize, 48), 6, 500),
    fontWeight: clamp(Math.round(finite(input.fontWeight, 400) / 100) * 100, 100, 900),
    align,
    color: typeof input.color === "string" && /^#[0-9a-f]{6}$/i.test(input.color) ? input.color : "#111111",
    lineHeight: clamp(finite(input.lineHeight, 1.2), 0.6, 3),
    ...rasterWidth > 0 && rasterHeight > 0 ? { rasterWidth, rasterHeight } : {}
  };
}
function sanitizeTransform(input) {
  const t3 = input ?? {};
  const text = sanitizeText(t3.text);
  return {
    x: finite(t3.x, 0),
    y: finite(t3.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t3.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t3.h, MIN_LAYER_SIZE)),
    rotation: finite(t3.rotation, 0),
    opacity: clamp(finite(t3.opacity, 1), 0, 1),
    visible: typeof t3.visible === "boolean" ? t3.visible : true,
    flipX: typeof t3.flipX === "boolean" ? t3.flipX : false,
    blendMode: BLEND_MODES.includes(t3.blendMode) ? t3.blendMode : "normal",
    ...text ? { text } : {}
  };
}
function encodeTransform(t3) {
  return JSON.stringify(sanitizeTransform(t3));
}
function decodeTransform(raw) {
  try {
    return sanitizeTransform(JSON.parse(raw));
  } catch {
    return sanitizeTransform(null);
  }
}
function cleanName(value, fallback) {
  const cleaned = value.replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned || fallback;
}

// lakebed-source:shared/geometry.ts
var HANDLES = {
  nw: { x: 0, y: 0 },
  n: { x: 0.5, y: 0 },
  ne: { x: 1, y: 0 },
  e: { x: 1, y: 0.5 },
  se: { x: 1, y: 1 },
  s: { x: 0.5, y: 1 },
  sw: { x: 0, y: 1 },
  w: { x: 0, y: 0.5 }
};
var HANDLE_IDS = Object.keys(HANDLES);
function isCornerHandle(handle) {
  return handle.length === 2;
}
function degToRad(deg) {
  return deg * Math.PI / 180;
}
function rotateVec(v3, deg) {
  const rad = degToRad(deg);
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return { x: v3.x * cos - v3.y * sin, y: v3.x * sin + v3.y * cos };
}
function layerCenter(t3) {
  return { x: t3.x + t3.w / 2, y: t3.y + t3.h / 2 };
}
function unitPointToWorld(t3, unit) {
  const center = layerCenter(t3);
  const local = { x: (unit.x - 0.5) * t3.w, y: (unit.y - 0.5) * t3.h };
  const rotated = rotateVec(local, t3.rotation);
  return { x: center.x + rotated.x, y: center.y + rotated.y };
}
function normalizeAngle(deg) {
  let a3 = deg % 360;
  if (a3 > 180) a3 -= 360;
  if (a3 <= -180) a3 += 360;
  return a3;
}
function scaleFromHandle(start, handle, pointer, free) {
  const h3 = HANDLES[handle];
  const anchor = { x: 1 - h3.x, y: 1 - h3.y };
  const anchorWorld = unitPointToWorld(start, anchor);
  const v3 = rotateVec({ x: pointer.x - anchorWorld.x, y: pointer.y - anchorWorld.y }, -start.rotation);
  const dirX = h3.x - anchor.x;
  const dirY = h3.y - anchor.y;
  let w3 = start.w;
  let hgt = start.h;
  if (isCornerHandle(handle) && !free) {
    const dx = dirX * start.w;
    const dy = dirY * start.h;
    const s3 = Math.max(
      MIN_LAYER_SIZE / Math.max(start.w, start.h),
      (v3.x * dx + v3.y * dy) / (dx * dx + dy * dy)
    );
    w3 = Math.max(MIN_LAYER_SIZE, start.w * s3);
    hgt = Math.max(MIN_LAYER_SIZE, start.h * s3);
  } else {
    if (dirX !== 0) w3 = Math.max(MIN_LAYER_SIZE, v3.x / dirX);
    if (dirY !== 0) hgt = Math.max(MIN_LAYER_SIZE, v3.y / dirY);
  }
  const centerOffset = rotateVec({ x: (0.5 - anchor.x) * w3, y: (0.5 - anchor.y) * hgt }, start.rotation);
  const cx = anchorWorld.x + centerOffset.x;
  const cy = anchorWorld.y + centerOffset.y;
  return { x: cx - w3 / 2, y: cy - hgt / 2, w: w3, h: hgt };
}
function rotationFromPointer(start, pointer, snap) {
  const center = layerCenter(start);
  const deg = Math.atan2(pointer.y - center.y, pointer.x - center.x) * 180 / Math.PI + 90;
  const snapped = snap ? Math.round(deg / 15) * 15 : deg;
  return normalizeAngle(snapped);
}
function layerAabb(t3) {
  const corners = [
    unitPointToWorld(t3, { x: 0, y: 0 }),
    unitPointToWorld(t3, { x: 1, y: 0 }),
    unitPointToWorld(t3, { x: 1, y: 1 }),
    unitPointToWorld(t3, { x: 0, y: 1 })
  ];
  const xs = corners.map((c3) => c3.x);
  const ys = corners.map((c3) => c3.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  return { x: minX, y: minY, w: Math.max(...xs) - minX, h: Math.max(...ys) - minY };
}

// lakebed-source:client/state/api.ts
var api = {
  createProject: useMutation("createProject"),
  createProjectFromImage: useMutation("createProjectFromImage"),
  renameProject: useMutation("renameProject"),
  resizeProject: useMutation("resizeProject"),
  setProjectThumb: useMutation("setProjectThumb"),
  deleteProject: useMutation("deleteProject"),
  addLayer: useMutation("addLayer"),
  updateLayer: useMutation("updateLayer"),
  replaceLayerAsset: useMutation("replaceLayerAsset"),
  prepareAssetUpload: useMutation("prepareAssetUpload"),
  renameLayer: useMutation("renameLayer"),
  deleteLayer: useMutation("deleteLayer"),
  setLayerOrder: useMutation("setLayerOrder"),
  getAsset: useMutation("getAsset"),
  getAssetPaint: useMutation("getAssetPaint")
};
function queryResult(raw) {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && raw.ready) {
    const items = raw.items;
    return { ready: true, items: Array.isArray(items) ? items : [] };
  }
  return { ready: false, items: [] };
}

// lakebed-source:client/state/store.ts
var state = {
  doc: null,
  selection: [],
  tool: "move",
  spacePan: false,
  view: { zoom: 1, panX: 0, panY: 0 },
  saveStatus: "saved",
  pendingOps: 0,
  saveError: null,
  histVersion: 0,
  fitVersion: 0,
  brushSize: 16,
  brushHardness: 80,
  brushOpacity: 100,
  brushFlow: 100,
  foregroundColor: "#111111",
  backgroundColor: "#ffffff",
  textFontFamily: "Instrument Sans",
  textFontSize: 48,
  textFontWeight: 400,
  textAlign: "left",
  textLineHeight: 1.2,
  textEditing: null,
  cropRect: null,
  snapGuides: null,
  blendPreview: null
};
var listeners = /* @__PURE__ */ new Set();
function getState() {
  return state;
}
function setState(patch) {
  state = { ...state, ...patch };
  for (const listener of [...listeners]) {
    listener();
  }
}
function updateDoc(fn) {
  if (!state.doc) return;
  setState({ doc: fn(state.doc) });
}
function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function useEditor(selector) {
  const selectorRef = A2(selector);
  selectorRef.current = selector;
  const [value, setValue] = d2(() => selector(state));
  const valueRef = A2(value);
  valueRef.current = value;
  h2(() => {
    const check = () => {
      const next = selectorRef.current(state);
      if (!Object.is(next, valueRef.current)) {
        valueRef.current = next;
        setValue(() => next);
      }
    };
    check();
    return subscribe(check);
  }, []);
  return value;
}

// lakebed-source:client/state/upload.ts
var MAX_INLINE_SRC_BYTES = 6e4;
function parseDataUrl(src) {
  const match = /^data:(image\/[a-z0-9.+-]+);base64,([\s\S]+)$/i.exec(src);
  if (!match) throw new Error("Image must be a data URL");
  const contentType = match[1].toLowerCase();
  const binary = atob(match[2].replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i3 = 0; i3 < binary.length; i3 += 1) bytes[i3] = binary.charCodeAt(i3);
  return { contentType, blob: new Blob([bytes], { type: contentType }) };
}
async function ensureRemoteAsset(projectId, src, width, height) {
  if (!projectId) throw new Error("Missing project id for upload");
  if (/^https?:\/\//i.test(src)) {
    return { src, width, height };
  }
  if (!src.startsWith("data:image/")) {
    throw new Error("Image must be a data URL or https URL");
  }
  if (src.length <= MAX_INLINE_SRC_BYTES) {
    return { src, width, height };
  }
  const { contentType, blob } = parseDataUrl(src);
  const prep = await api.prepareAssetUpload(projectId, contentType, width, height);
  const response = await fetch(prep.uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": contentType },
    body: blob
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `S3 upload failed (${response.status}). Check bucket CORS allows PUT from this origin. ${detail.slice(0, 120)}`
    );
  }
  return { assetId: prep.assetId, src: prep.publicUrl, width, height };
}
function compactThumbDataUrl(canvas) {
  let quality = 0.85;
  let url = canvas.toDataURL("image/jpeg", quality);
  while (url.length > MAX_INLINE_SRC_BYTES && quality > 0.35) {
    quality -= 0.1;
    url = canvas.toDataURL("image/jpeg", quality);
  }
  if (url.length <= MAX_INLINE_SRC_BYTES) return url;
  const scale = Math.sqrt(MAX_INLINE_SRC_BYTES / url.length) * 0.9;
  const small = document.createElement("canvas");
  small.width = Math.max(1, Math.round(canvas.width * scale));
  small.height = Math.max(1, Math.round(canvas.height * scale));
  const ctx = small.getContext("2d");
  if (!ctx) return url.slice(0, MAX_INLINE_SRC_BYTES);
  ctx.drawImage(canvas, 0, 0, small.width, small.height);
  return small.toDataURL("image/jpeg", 0.7);
}

// lakebed-source:client/state/persist.ts
var OP_TIMEOUT_MS = 1e4;
var UPLOAD_TIMEOUT_MS = 6e4;
var MAX_BACKOFF_MS = 15e3;
var layerIds = /* @__PURE__ */ new Map();
var assetIds = /* @__PURE__ */ new Map();
var queue = [];
var draining = false;
function resolveLayerId(id) {
  return layerIds.get(id) ?? id;
}
function resolveAssetId(id) {
  return assetIds.get(id) ?? id;
}
function mapAssetId(clientId, serverId) {
  if (clientId !== serverId) assetIds.set(clientId, serverId);
}
var nextClientId = 1;
function newClientId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${(nextClientId++).toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
function opKey(op) {
  switch (op.kind) {
    case "updateLayer":
      return `updateLayer:${op.id}`;
    case "renameLayer":
      return `renameLayer:${op.id}`;
    case "setOrder":
      return `setOrder:${op.projectId}`;
    case "renameProject":
      return `renameProject:${op.id}`;
    case "resizeProject":
      return `resizeProject:${op.id}`;
    case "setThumb":
      return `setThumb:${op.id}`;
    case "replaceLayerAsset":
      return `replaceLayerAsset:${op.id}`;
    default:
      return null;
  }
}
function enqueue(op) {
  const key = opKey(op);
  if (key) {
    for (let i3 = queue.length - 1; i3 >= 0; i3 -= 1) {
      if (opKey(queue[i3]) === key) {
        queue[i3] = op;
        syncStatus();
        void drain();
        return;
      }
    }
  }
  queue.push(op);
  syncStatus();
  void drain();
}
function pendingCount() {
  return queue.length + (draining ? 1 : 0);
}
function syncStatus(patch = {}) {
  const busy = queue.length > 0 || draining;
  setState({
    saveStatus: patch.saveStatus ?? (busy ? "saving" : "saved"),
    pendingOps: queue.length + (draining ? 1 : 0),
    ...patch.saveError !== void 0 ? { saveError: patch.saveError } : {}
  });
}
var OpTimeout = class extends Error {
};
function withTimeout(promise, ms = OP_TIMEOUT_MS) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new OpTimeout("timed out")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function execute(op) {
  switch (op.kind) {
    case "addLayer": {
      let asset;
      if ("ref" in op.asset) {
        asset = { assetId: resolveAssetId(op.asset.ref) };
      } else {
        const remote = await ensureRemoteAsset(
          op.projectId,
          op.asset.src,
          op.asset.width,
          op.asset.height
        );
        if (remote.assetId) {
          mapAssetId(op.asset.clientId, remote.assetId);
          seedAsset(op.asset.clientId, {
            src: remote.src,
            paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : void 0,
            width: op.asset.width,
            height: op.asset.height
          });
          seedAsset(remote.assetId, {
            src: remote.src,
            paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : void 0,
            width: op.asset.width,
            height: op.asset.height
          });
          asset = { assetId: remote.assetId };
        } else {
          asset = { src: remote.src, width: remote.width, height: remote.height };
        }
      }
      const timeout = asset.src && String(asset.src).startsWith("data:") ? UPLOAD_TIMEOUT_MS : OP_TIMEOUT_MS;
      const result = await withTimeout(
        api.addLayer(op.projectId, op.clientKey, op.name, op.data, asset),
        timeout
      );
      if (op.clientId !== result.layerId) layerIds.set(op.clientId, result.layerId);
      const clientAssetId = "ref" in op.asset ? op.asset.ref : op.asset.clientId;
      mapAssetId(clientAssetId, result.assetId);
      if (result.src && "src" in op.asset) {
        seedAsset(clientAssetId, {
          src: result.src,
          paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : void 0,
          width: op.asset.width,
          height: op.asset.height
        });
        seedAsset(result.assetId, {
          src: result.src,
          paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : void 0,
          width: op.asset.width,
          height: op.asset.height
        });
      }
      return;
    }
    case "updateLayer":
      return withTimeout(api.updateLayer(resolveLayerId(op.id), op.data));
    case "replaceLayerAsset": {
      const projectId = getState().doc?.id ?? "";
      const remote = await ensureRemoteAsset(projectId, op.src, op.width, op.height);
      if (remote.assetId) {
        mapAssetId(op.clientAssetId, remote.assetId);
      }
      const result = await withTimeout(
        api.replaceLayerAsset(resolveLayerId(op.id), remote.src, op.width, op.height),
        remote.assetId ? OP_TIMEOUT_MS : UPLOAD_TIMEOUT_MS
      );
      mapAssetId(op.clientAssetId, result.assetId);
      const local = op.src.startsWith("data:");
      const display = local ? op.src : result.src;
      const paintSrc = local ? op.src : void 0;
      seedAsset(op.clientAssetId, {
        src: display,
        paintSrc,
        width: op.width,
        height: op.height
      });
      seedAsset(result.assetId, {
        src: display,
        paintSrc,
        width: op.width,
        height: op.height
      });
      return;
    }
    case "renameLayer":
      return withTimeout(api.renameLayer(resolveLayerId(op.id), op.name));
    case "deleteLayer":
      return withTimeout(api.deleteLayer(resolveLayerId(op.id)));
    case "setOrder":
      return withTimeout(api.setLayerOrder(op.projectId, op.ids.map(resolveLayerId)));
    case "renameProject":
      return withTimeout(api.renameProject(op.id, op.name));
    case "resizeProject":
      return withTimeout(api.resizeProject(op.id, op.width, op.height));
    case "setThumb":
      return withTimeout(api.setProjectThumb(op.id, op.thumb));
  }
}
async function drain() {
  if (draining) return;
  draining = true;
  syncStatus();
  while (queue.length > 0) {
    const op = queue.shift();
    let attempt = 0;
    while (true) {
      try {
        await execute(op);
        if (attempt > 0) syncStatus({ saveStatus: "saving" });
        break;
      } catch (error) {
        if (error instanceof OpTimeout) {
          attempt += 1;
          syncStatus({ saveStatus: "retrying" });
          await delay(Math.min(MAX_BACKOFF_MS, 500 * 2 ** Math.min(attempt, 5)));
          continue;
        }
        const message = error instanceof Error ? error.message : String(error);
        if (!/not found/i.test(message)) {
          console.error("Persist op failed, dropping:", op.kind, message);
          syncStatus({ saveError: `${op.kind}: ${message}` });
        }
        break;
      }
    }
  }
  draining = false;
  syncStatus();
}
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", (event) => {
    if (pendingCount() > 0 || getState().saveStatus !== "saved") {
      event.preventDefault();
    }
  });
}

// lakebed-source:client/state/assets.ts
var entries = /* @__PURE__ */ new Map();
var inflight = /* @__PURE__ */ new Map();
var images = /* @__PURE__ */ new Map();
var paintInflight = /* @__PURE__ */ new Map();
var listeners2 = /* @__PURE__ */ new Set();
function notify() {
  for (const listener of [...listeners2]) listener();
}
function seedAsset(id, entry) {
  const prev = entries.get(id);
  entries.set(id, {
    src: entry.src,
    width: entry.width,
    height: entry.height,
    paintSrc: entry.paintSrc ?? prev?.paintSrc
  });
  images.delete(id);
  notify();
}
function getAssetEntry(id) {
  return entries.get(id) ?? entries.get(resolveAssetId(id)) ?? null;
}
function displaySrc(entry) {
  if (entry.paintSrc?.startsWith("data:")) return entry.paintSrc;
  if (entry.src.startsWith("data:")) return entry.src;
  return entry.paintSrc || entry.src;
}
function ensureAsset(id) {
  const existing = getAssetEntry(id);
  if (existing) return Promise.resolve(existing);
  const pending2 = inflight.get(id);
  if (pending2) return pending2;
  const promise = api.getAsset(resolveAssetId(id)).then((payload) => {
    const prev = entries.get(id);
    const entry = {
      src: payload.src,
      width: payload.width,
      height: payload.height,
      paintSrc: prev?.paintSrc
    };
    entries.set(id, entry);
    notify();
    return entry;
  }).finally(() => {
    inflight.delete(id);
  });
  inflight.set(id, promise);
  return promise;
}
function paintUrl(entry) {
  return entry.paintSrc || entry.src;
}
async function ensurePaintAsset(id) {
  const entry = await ensureAsset(id);
  if (entry.paintSrc || entry.src.startsWith("data:")) return entry;
  const existing = paintInflight.get(id);
  if (existing) return existing;
  const promise = api.getAssetPaint(resolveAssetId(id)).then((payload) => {
    const current = getAssetEntry(id) ?? entry;
    const next = { ...current, paintSrc: payload.src };
    entries.set(id, next);
    const resolved = resolveAssetId(id);
    if (resolved !== id) entries.set(resolved, next);
    notify();
    return next;
  }).finally(() => paintInflight.delete(id));
  paintInflight.set(id, promise);
  return promise;
}
function loadImage(id) {
  const cached = images.get(id);
  if (cached) return cached;
  const promise = ensurePaintAsset(id).then(
    (entry) => new Promise((resolve, reject) => {
      const src = paintUrl(entry);
      const img = new Image();
      if (!src.startsWith("data:")) {
        img.crossOrigin = "anonymous";
      }
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Failed to decode image"));
      img.src = src;
    })
  );
  images.set(id, promise);
  promise.catch(() => images.delete(id));
  return promise;
}
function decodeSrc(src) {
  const img = new Image();
  img.src = src;
  if (typeof img.decode === "function") {
    return img.decode().catch(() => void 0);
  }
  return new Promise((resolve) => {
    img.onload = () => resolve();
    img.onerror = () => resolve();
    if (img.complete) resolve();
  });
}
function useAssetEntry(id) {
  const [, setVersion] = d2(0);
  h2(() => {
    const check = () => setVersion((value) => value + 1);
    check();
    listeners2.add(check);
    ensureAsset(id).catch((error) => console.error("Asset load failed:", error));
    return () => {
      listeners2.delete(check);
    };
  }, [id]);
  return getAssetEntry(id);
}

// lakebed-source:client/lib/render.ts
async function renderDocToCanvas(doc, scale) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(doc.width * scale));
  canvas.height = Math.max(1, Math.round(doc.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  const visible = doc.layers.filter((layer) => layer.visible && layer.opacity > 0);
  const images2 = await Promise.all(
    visible.map((layer) => loadImage(layer.assetId).catch(() => null))
  );
  ctx.imageSmoothingQuality = "high";
  visible.forEach((layer, i3) => {
    const img = images2[i3];
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.globalCompositeOperation = layer.blendMode;
    ctx.translate((layer.x + layer.w / 2) * scale, (layer.y + layer.h / 2) * scale);
    ctx.rotate(layer.rotation * Math.PI / 180);
    ctx.scale(layer.flipX ? -1 : 1, 1);
    ctx.drawImage(img, -layer.w / 2 * scale, -layer.h / 2 * scale, layer.w * scale, layer.h * scale);
    ctx.restore();
  });
  return canvas;
}
async function downloadPng(doc) {
  const canvas = await renderDocToCanvas(doc, 1);
  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = `${doc.name || "image"}.png`;
  link.click();
}
var THUMB_MAX = 360;
async function firstLayerSrc(doc) {
  for (const layer of doc.layers) {
    if (!layer.visible || layer.opacity <= 0) continue;
    const entry = await ensureAsset(layer.assetId).catch(() => null);
    if (entry?.src && entry.src.length <= MAX_INLINE_SRC_BYTES) return entry.src;
    if (entry?.src?.startsWith("http")) return entry.src;
  }
  return null;
}
async function renderThumb(doc) {
  const visible = doc.layers.filter((layer) => layer.visible && layer.opacity > 0);
  const scale = Math.min(1, THUMB_MAX / Math.max(doc.width, doc.height));
  if (visible.length > 0) {
    const loaded = await Promise.all(
      visible.map((layer) => loadImage(layer.assetId).then(() => true).catch(() => false))
    );
    if (loaded.every((ok) => !ok)) {
      const fallback = await firstLayerSrc(doc);
      if (fallback) return fallback;
      throw new Error("Could not render thumbnail");
    }
  }
  try {
    const canvas = await renderDocToCanvas(doc, scale);
    return compactThumbDataUrl(canvas);
  } catch {
    const fallback = await firstLayerSrc(doc);
    if (fallback) return fallback;
    throw new Error("Could not render thumbnail");
  }
}

// lakebed-source:client/state/brushOverlay.ts
var clearOverlay = null;
var pendingSrc = null;
var gestureActive = false;
function registerBrushOverlayClear(fn) {
  clearOverlay = fn;
  return () => {
    if (clearOverlay === fn) clearOverlay = null;
  };
}
function armBrushOverlayClear(src) {
  pendingSrc = src;
}
function beginBrushGesture() {
  pendingSrc = null;
  gestureActive = true;
  clearOverlay?.();
}
function endBrushGesture() {
  gestureActive = false;
}
function tryClearOverlay() {
  if (gestureActive) {
    pendingSrc = null;
    return;
  }
  clearOverlay?.();
}
function noteLayerSrcPresented(src) {
  if (!pendingSrc || src !== pendingSrc) return;
  pendingSrc = null;
  tryClearOverlay();
}
function clearBrushOverlayNow() {
  pendingSrc = null;
  tryClearOverlay();
}

// lakebed-source:client/state/history.ts
var LIMIT = 100;
var undoStack = [];
var redoStack = [];
function bump() {
  setState({ histVersion: getState().histVersion + 1 });
}
function pushHistory(entry) {
  undoStack.push(entry);
  if (undoStack.length > LIMIT) undoStack.shift();
  redoStack = [];
  bump();
}
function resetHistory() {
  undoStack = [];
  redoStack = [];
  bump();
}
function canUndo() {
  return undoStack.length > 0;
}
function canRedo() {
  return redoStack.length > 0;
}
function undo() {
  const entry = undoStack.pop();
  if (!entry) return;
  entry.undo();
  redoStack.push(entry);
  bump();
}
function redo() {
  const entry = redoStack.pop();
  if (!entry) return;
  entry.redo();
  undoStack.push(entry);
  bump();
}

// lakebed-source:client/state/actions.ts
var TRANSIENT_PERSIST_MS = 300;
function openProject(meta, rows) {
  const byId = new Map(rows.map((row) => [row.id, row]));
  const layers = [];
  const push = (row) => {
    layers.push({
      id: row.id,
      assetId: row.assetId,
      name: row.name,
      ...decodeTransform(row.data)
    });
  };
  for (const id of meta.layerOrder) {
    const row = byId.get(id);
    if (row) {
      push(row);
      byId.delete(id);
    }
  }
  for (const row of byId.values()) push(row);
  setState({
    doc: { id: meta.id, name: meta.name, width: meta.width, height: meta.height, layers },
    selection: [],
    saveError: null
  });
  resetHistory();
  scheduleThumbRefresh();
}
function closeProject() {
  setState({ doc: null, selection: [], tool: "move", cropRect: null, snapGuides: null, blendPreview: null, textEditing: null });
  resetHistory();
}
function setSelection(ids) {
  setState({ selection: ids });
}
function toggleSelected(id) {
  const current = getState().selection;
  setSelection(current.includes(id) ? current.filter((s3) => s3 !== id) : [...current, id]);
}
function pruneSelection(removed) {
  setState({ selection: getState().selection.filter((id) => !removed.has(id)) });
}
function patchDocLayers(patches) {
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((layer) => {
      const patch = patches.get(layer.id);
      return patch ? { ...layer, ...patch } : layer;
    })
  }));
}
var transientTimers = /* @__PURE__ */ new Map();
function persistLayerNow(id) {
  const timer = transientTimers.get(id);
  if (timer !== void 0) {
    clearTimeout(timer);
    transientTimers.delete(id);
  }
  const layer = getState().doc?.layers.find((l3) => l3.id === id);
  if (!layer) return;
  enqueue({ kind: "updateLayer", id, data: encodeTransform(layer) });
}
function persistLayerThrottled(id) {
  if (transientTimers.has(id)) return;
  transientTimers.set(
    id,
    window.setTimeout(() => {
      transientTimers.delete(id);
      persistLayerNow(id);
    }, TRANSIENT_PERSIST_MS)
  );
}
function applyTransient(patches) {
  patchDocLayers(patches);
  for (const id of patches.keys()) persistLayerThrottled(id);
}
function applyAndPersist(entries2) {
  patchDocLayers(new Map(entries2.map((e3) => [e3.id, e3.patch])));
  for (const { id } of entries2) persistLayerNow(id);
  scheduleThumbRefresh();
}
function commitTransforms(label, changes) {
  const real = changes.filter((c3) => !shallowEqualPatch(c3.before, c3.after));
  if (real.length === 0) {
    for (const { id } of changes) persistLayerNow(id);
    return;
  }
  applyAndPersist(real.map((c3) => ({ id: c3.id, patch: c3.after })));
  pushHistory({
    label,
    undo: () => applyAndPersist(real.map((c3) => ({ id: c3.id, patch: c3.before }))),
    redo: () => applyAndPersist(real.map((c3) => ({ id: c3.id, patch: c3.after })))
  });
}
function shallowEqualPatch(a3, b2) {
  const keys = /* @__PURE__ */ new Set([...Object.keys(a3), ...Object.keys(b2)]);
  for (const key of keys) {
    if (!Object.is(a3[key], b2[key])) return false;
  }
  return true;
}
function nudgeSelection(dx, dy) {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const changes = [];
  for (const layer of doc.layers) {
    if (selection.includes(layer.id)) {
      changes.push({
        id: layer.id,
        before: { x: layer.x, y: layer.y },
        after: { x: layer.x + dx, y: layer.y + dy }
      });
    }
  }
  commitTransforms("Nudge", changes);
}
function toggleVisible(id) {
  const layer = getState().doc?.layers.find((l3) => l3.id === id);
  if (!layer) return;
  commitTransforms(layer.visible ? "Hide layer" : "Show layer", [
    { id, before: { visible: layer.visible }, after: { visible: !layer.visible } }
  ]);
}
function flipSelectionHorizontal() {
  const { doc, selection } = getState();
  if (!doc) return;
  commitTransforms("Flip horizontal", doc.layers.filter((layer) => selection.includes(layer.id)).map((layer) => ({ id: layer.id, before: { flipX: layer.flipX }, after: { flipX: !layer.flipX } })));
}
function setSelectionBlendMode(blendMode) {
  const { doc, selection } = getState();
  if (!doc) return;
  commitTransforms("Blend mode", doc.layers.filter((layer) => selection.includes(layer.id)).map((layer) => ({ id: layer.id, before: { blendMode: layer.blendMode }, after: { blendMode } })));
}
function rawInsertLayers(items) {
  const doc = getState().doc;
  if (!doc) return;
  const sorted = [...items].sort((a3, b2) => a3.index - b2.index);
  const layers = [...doc.layers];
  for (const { layer, index } of sorted) {
    layers.splice(Math.min(index, layers.length), 0, layer);
  }
  updateDoc((d3) => ({ ...d3, layers }));
  let needsOrder = false;
  for (const { layer, index } of sorted) {
    enqueue({
      kind: "addLayer",
      projectId: doc.id,
      clientId: layer.id,
      // Fresh key per attempt: a redo of the same layer is a new insert.
      clientKey: newClientId("key"),
      name: layer.name,
      data: encodeTransform(layer),
      asset: { ref: layer.assetId }
    });
    if (index < layers.length - 1) needsOrder = true;
  }
  if (needsOrder) {
    enqueue({ kind: "setOrder", projectId: doc.id, ids: layers.map((l3) => l3.id) });
  }
  scheduleThumbRefresh();
}
function rawDeleteLayers(ids) {
  const doc = getState().doc;
  if (!doc) return;
  const removed = new Set(ids);
  updateDoc((d3) => ({ ...d3, layers: d3.layers.filter((l3) => !removed.has(l3.id)) }));
  pruneSelection(removed);
  for (const id of ids) enqueue({ kind: "deleteLayer", id });
  scheduleThumbRefresh();
}
function capturePlacement(doc, ids) {
  const items = [];
  doc.layers.forEach((layer, index) => {
    if (ids.includes(layer.id)) items.push({ layer, index });
  });
  return items;
}
function deleteSelection() {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const items = capturePlacement(doc, selection);
  if (items.length === 0) return;
  const ids = items.map((i3) => i3.layer.id);
  rawDeleteLayers(ids);
  pushHistory({
    label: "Delete layer",
    undo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    },
    redo: () => rawDeleteLayers(ids)
  });
}
function duplicateSelection() {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const source = capturePlacement(doc, selection);
  if (source.length === 0) return;
  const items = source.map(({ layer }, i3) => ({
    layer: {
      ...layer,
      id: newClientId("layer"),
      name: `${layer.name} copy`,
      x: layer.x + 20,
      y: layer.y + 20
    },
    // Place duplicates together above the topmost source layer.
    index: source[source.length - 1].index + 1 + i3
  }));
  const ids = items.map((i3) => i3.layer.id);
  rawInsertLayers(items);
  setSelection(ids);
  pushHistory({
    label: "Duplicate",
    undo: () => rawDeleteLayers(ids),
    redo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    }
  });
}
var clipboard = [];
function copySelection() {
  const { doc, selection } = getState();
  if (!doc) return;
  clipboard = doc.layers.filter((layer) => selection.includes(layer.id)).map((layer) => ({ ...layer }));
}
function cutSelection() {
  copySelection();
  deleteSelection();
}
function pasteClipboard() {
  const doc = getState().doc;
  if (!doc || clipboard.length === 0) return;
  const items = clipboard.map((layer, i3) => ({
    layer: { ...layer, id: newClientId("layer"), name: `${layer.name} copy`, x: layer.x + 20, y: layer.y + 20 },
    index: doc.layers.length + i3
  }));
  clipboard = items.map((item) => ({ ...item.layer }));
  const ids = items.map((item) => item.layer.id);
  rawInsertLayers(items);
  setSelection(ids);
  pushHistory({
    label: "Paste",
    undo: () => rawDeleteLayers(ids),
    redo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    }
  });
}
function addImageLayers(images2, at) {
  const doc = getState().doc;
  if (!doc || images2.length === 0) return;
  const items = images2.map((image, i3) => {
    const assetId = newClientId("asset");
    seedAsset(assetId, {
      src: image.src,
      paintSrc: image.src,
      width: image.width,
      height: image.height
    });
    const scale = Math.min(1, doc.width * 0.9 / image.width, doc.height * 0.9 / image.height);
    const w3 = Math.max(1, image.width * scale);
    const h3 = Math.max(1, image.height * scale);
    const cx = (at?.x ?? doc.width / 2) + i3 * 24;
    const cy = (at?.y ?? doc.height / 2) + i3 * 24;
    return {
      layer: {
        id: newClientId("layer"),
        assetId,
        name: image.name,
        x: cx - w3 / 2,
        y: cy - h3 / 2,
        w: w3,
        h: h3,
        rotation: 0,
        opacity: 1,
        visible: true,
        flipX: false,
        blendMode: "normal"
      },
      index: doc.layers.length + i3
    };
  });
  const ids = items.map((i3) => i3.layer.id);
  const insert = () => {
    const current = getState().doc;
    if (!current) return;
    const sorted = [...items].sort((a3, b2) => a3.index - b2.index);
    const layers = [...current.layers];
    for (const { layer, index } of sorted) layers.splice(Math.min(index, layers.length), 0, layer);
    updateDoc((d3) => ({ ...d3, layers }));
    for (const { layer } of sorted) {
      const image = images2[items.findIndex((it) => it.layer.id === layer.id)];
      enqueue({
        kind: "addLayer",
        projectId: current.id,
        clientId: layer.id,
        clientKey: newClientId("key"),
        name: layer.name,
        data: encodeTransform(layer),
        asset: { clientId: layer.assetId, src: image.src, width: image.width, height: image.height }
      });
    }
    scheduleThumbRefresh();
  };
  insert();
  setSelection(ids);
  pushHistory({
    label: "Add image",
    undo: () => rawDeleteLayers(ids),
    // Redo re-inserts by asset reference: the asset already exists by then.
    redo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    }
  });
}
function replaceLayersWithRaster(ids, image, bounds, index) {
  const doc = getState().doc;
  if (!doc) return;
  const oldItems = capturePlacement(doc, ids);
  if (oldItems.length === 0) return;
  const assetId = newClientId("asset");
  const layer = {
    id: newClientId("layer"),
    assetId,
    name: image.name,
    ...bounds,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  const newItem = { layer, index };
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  rawDeleteLayers(ids);
  updateDoc((d3) => {
    const layers = [...d3.layers];
    layers.splice(Math.min(index, layers.length), 0, layer);
    return { ...d3, layers };
  });
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  enqueue({ kind: "setOrder", projectId: doc.id, ids: getState().doc?.layers.map((l3) => l3.id) ?? [] });
  setSelection([layer.id]);
  scheduleThumbRefresh();
  pushHistory({
    label: image.name,
    undo: () => {
      rawDeleteLayers([layer.id]);
      rawInsertLayers(oldItems);
      setSelection(ids);
    },
    redo: () => {
      rawDeleteLayers(ids);
      rawInsertLayers([newItem]);
      setSelection([layer.id]);
    }
  });
}
async function combineSelection() {
  const { doc, selection } = getState();
  if (!doc) return;
  const layers = doc.layers.filter((layer) => selection.includes(layer.id) && layer.visible);
  if (layers.length < 2) return;
  const boxes = layers.map(layerAabb);
  const x3 = Math.min(...boxes.map((b2) => b2.x));
  const y3 = Math.min(...boxes.map((b2) => b2.y));
  const right = Math.max(...boxes.map((b2) => b2.x + b2.w));
  const bottom = Math.max(...boxes.map((b2) => b2.y + b2.h));
  const width = Math.max(1, Math.ceil(right - x3));
  const height = Math.max(1, Math.ceil(bottom - y3));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let images2;
  try {
    images2 = await Promise.all(layers.map((l3) => loadImage(l3.assetId)));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load image pixels";
    window.alert(`Could not combine layers: ${message}`);
    return;
  }
  layers.forEach((layer, i3) => {
    const img = images2[i3];
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.globalCompositeOperation = layer.blendMode;
    ctx.translate(layer.x + layer.w / 2 - x3, layer.y + layer.h / 2 - y3);
    ctx.rotate(layer.rotation * Math.PI / 180);
    ctx.scale(layer.flipX ? -1 : 1, 1);
    ctx.drawImage(img, -layer.w / 2, -layer.h / 2, layer.w, layer.h);
    ctx.restore();
  });
  const index = Math.min(...doc.layers.map((l3, i3) => selection.includes(l3.id) ? i3 : Infinity));
  replaceLayersWithRaster(layers.map((l3) => l3.id), { src: canvas.toDataURL("image/png"), width, height, name: "Combined layers" }, { x: x3, y: y3, w: width, h: height }, index);
}
async function cropSelection() {
  const { doc, selection, cropRect } = getState();
  if (!doc || selection.length !== 1 || !cropRect || cropRect.w < 2 || cropRect.h < 2) return;
  const layer = doc.layers.find((l3) => l3.id === selection[0]);
  if (!layer) return;
  const bounds = layerAabb(layer);
  const x3 = Math.max(cropRect.x, bounds.x);
  const y3 = Math.max(cropRect.y, bounds.y);
  const right = Math.min(cropRect.x + cropRect.w, bounds.x + bounds.w);
  const bottom = Math.min(cropRect.y + cropRect.h, bounds.y + bounds.h);
  if (right - x3 < 2 || bottom - y3 < 2) {
    window.alert("Draw the crop area over the selected layer.");
    setState({ cropRect: null });
    return;
  }
  const rect = { x: x3, y: y3, w: right - x3, h: bottom - y3 };
  const width = Math.max(1, Math.round(rect.w));
  const height = Math.max(1, Math.round(rect.h));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let img;
  try {
    img = await loadImage(layer.assetId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load image pixels";
    window.alert(`Could not crop layer: ${message}`);
    setState({ cropRect: null });
    return;
  }
  ctx.globalAlpha = layer.opacity;
  ctx.translate(layer.x + layer.w / 2 - rect.x, layer.y + layer.h / 2 - rect.y);
  ctx.rotate(layer.rotation * Math.PI / 180);
  ctx.scale(layer.flipX ? -1 : 1, 1);
  ctx.drawImage(img, -layer.w / 2, -layer.h / 2, layer.w, layer.h);
  const index = doc.layers.findIndex((l3) => l3.id === layer.id);
  replaceLayersWithRaster([layer.id], { src: canvas.toDataURL("image/png"), width, height, name: `${layer.name} cropped` }, rect, index);
  setState({ tool: "move", cropRect: null });
}
function cropCanvas() {
  const { doc, cropRect } = getState();
  if (!doc || !cropRect || cropRect.w < 2 || cropRect.h < 2) return;
  const x3 = Math.round(cropRect.x);
  const y3 = Math.round(cropRect.y);
  const width = Math.max(1, Math.min(MAX_PROJECT_DIM, Math.round(cropRect.w)));
  const height = Math.max(1, Math.min(MAX_PROJECT_DIM, Math.round(cropRect.h)));
  const before = {
    width: doc.width,
    height: doc.height,
    positions: doc.layers.map((layer) => ({ id: layer.id, x: layer.x, y: layer.y }))
  };
  const after = {
    width,
    height,
    positions: before.positions.map((layer) => ({ id: layer.id, x: layer.x - x3, y: layer.y - y3 }))
  };
  const apply = (snapshot) => {
    updateDoc((current) => ({
      ...current,
      width: snapshot.width,
      height: snapshot.height,
      layers: current.layers.map((layer) => {
        const position = snapshot.positions.find((item) => item.id === layer.id);
        return position ? { ...layer, x: position.x, y: position.y } : layer;
      })
    }));
    enqueue({ kind: "resizeProject", id: doc.id, width: snapshot.width, height: snapshot.height });
    for (const position of snapshot.positions) persistLayerNow(position.id);
    scheduleThumbRefresh();
  };
  apply(after);
  setState({ tool: "move", cropRect: null });
  pushHistory({ label: "Crop canvas", undo: () => apply(before), redo: () => apply(after) });
}
var EMPTY_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
function blankLayerAsset(width, height) {
  return { src: EMPTY_PNG, width: Math.max(1, width), height: Math.max(1, height) };
}
function applyLayerRaster(layerId, src, width, height, clearText) {
  const assetId = newClientId("asset");
  seedAsset(assetId, { src, paintSrc: src, width, height });
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((item) => {
      if (item.id !== layerId) return item;
      if (!clearText) return { ...item, assetId };
      const { text: _text, ...rest } = item;
      return { ...rest, assetId };
    })
  }));
  const updated = getState().doc?.layers.find((item) => item.id === layerId);
  if (updated) enqueue({ kind: "updateLayer", id: layerId, data: encodeTransform(updated) });
  enqueue({ kind: "replaceLayerAsset", id: layerId, clientAssetId: assetId, src, width, height });
  scheduleThumbRefresh();
}
function addBlankLayer() {
  const doc = getState().doc;
  if (!doc) return null;
  const image = blankLayerAsset(doc.width, doc.height);
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer = {
    id: newClientId("layer"),
    assetId,
    name: `Layer ${doc.layers.length + 1}`,
    x: 0,
    y: 0,
    w: doc.width,
    h: doc.height,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  const index = doc.layers.length;
  updateDoc((d3) => ({ ...d3, layers: [...d3.layers, layer] }));
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  scheduleThumbRefresh();
  pushHistory({
    label: "New layer",
    undo: () => rawDeleteLayers([layer.id]),
    redo: () => {
      rawInsertLayers([{ layer, index }]);
      setSelection([layer.id]);
    }
  });
  return layer.id;
}
function paintTargetLayer() {
  const { doc, selection } = getState();
  if (!doc) return null;
  const selectedId = selection[selection.length - 1];
  const selected = selectedId ? doc.layers.find((layer2) => layer2.id === selectedId) : void 0;
  if (selected) return { layer: selected, created: false };
  if (doc.layers.length > 0) {
    const top = doc.layers[doc.layers.length - 1];
    setSelection([top.id]);
    return { layer: top, created: false };
  }
  const image = blankLayerAsset(doc.width, doc.height);
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer = {
    id: newClientId("layer"),
    assetId,
    name: "Layer 1",
    x: 0,
    y: 0,
    w: doc.width,
    h: doc.height,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  updateDoc((d3) => ({ ...d3, layers: [...d3.layers, layer] }));
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  return { layer, created: true };
}
function loadDataUrl(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.src = src;
  });
}
async function paintBrushStroke(src, opacity = 1) {
  const target = paintTargetLayer();
  if (!target) return;
  const { layer, created } = target;
  let base;
  let stroke;
  try {
    [base, stroke] = await Promise.all([loadImage(layer.assetId), loadDataUrl(src)]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load layer pixels";
    window.alert(`Could not paint: ${message}`);
    if (created) rawDeleteLayers([layer.id]);
    return;
  }
  const width = Math.max(1, Math.round(layer.w), base.naturalWidth);
  const height = Math.max(1, Math.round(layer.h), base.naturalHeight);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    if (created) rawDeleteLayers([layer.id]);
    return;
  }
  ctx.drawImage(base, 0, 0);
  const cached = getAssetEntry(layer.assetId);
  const beforeSrc = cached?.paintSrc?.startsWith("data:") ? cached.paintSrc : canvas.toDataURL("image/png");
  const beforeText = layer.text ? { ...layer.text } : void 0;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(width / 2, height / 2);
  ctx.scale(width / Math.max(1, layer.w), height / Math.max(1, layer.h));
  if (layer.flipX) ctx.scale(-1, 1);
  ctx.rotate(-layer.rotation * Math.PI / 180);
  ctx.translate(-(layer.x + layer.w / 2), -(layer.y + layer.h / 2));
  ctx.drawImage(stroke, 0, 0);
  ctx.restore();
  const afterSrc = canvas.toDataURL("image/png");
  const clearText = Boolean(layer.text);
  await decodeSrc(afterSrc);
  armBrushOverlayClear(afterSrc);
  applyLayerRaster(layer.id, afterSrc, width, height, clearText);
  window.setTimeout(() => clearBrushOverlayNow(), 2e3);
  if (created) {
    const finalLayer = getState().doc?.layers.find((item) => item.id === layer.id);
    if (!finalLayer) return;
    pushHistory({
      label: "Brush stroke",
      undo: () => rawDeleteLayers([layer.id]),
      redo: () => {
        rawInsertLayers([{ layer: finalLayer, index: 0 }]);
        setSelection([layer.id]);
      }
    });
    return;
  }
  pushHistory({
    label: "Brush stroke",
    undo: () => {
      applyLayerRaster(layer.id, beforeSrc, width, height, false);
      if (beforeText) {
        updateDoc((doc) => ({
          ...doc,
          layers: doc.layers.map((item) => item.id === layer.id ? { ...item, text: beforeText } : item)
        }));
        const updated = getState().doc?.layers.find((item) => item.id === layer.id);
        if (updated) enqueue({ kind: "updateLayer", id: layer.id, data: encodeTransform(updated) });
      }
    },
    redo: () => applyLayerRaster(layer.id, afterSrc, width, height, clearText)
  });
}
function renderTextRaster(text) {
  const lines = (text.content || "Text").replace(/\r/g, "").split("\n");
  const measure = document.createElement("canvas").getContext("2d");
  if (!measure) return { src: "", width: 1, height: 1 };
  measure.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`;
  const padding = Math.max(4, Math.ceil(text.fontSize * 0.14));
  const width = Math.max(1, Math.ceil(Math.max(...lines.map((line) => measure.measureText(line || " ").width)) + padding * 2));
  const linePx = text.fontSize * text.lineHeight;
  const height = Math.max(1, Math.ceil(lines.length * linePx + padding * 2));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { src: "", width: 1, height: 1 };
  ctx.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`;
  ctx.textBaseline = "top";
  ctx.textAlign = text.align;
  ctx.fillStyle = text.color;
  const x3 = text.align === "left" ? padding : text.align === "center" ? width / 2 : width - padding;
  lines.forEach((line, index) => ctx.fillText(line || " ", x3, padding + index * linePx));
  return { src: canvas.toDataURL("image/png"), width, height };
}
function currentTextDefaults() {
  const state2 = getState();
  return {
    content: "Text",
    fontFamily: state2.textFontFamily,
    fontSize: state2.textFontSize,
    fontWeight: state2.textFontWeight,
    align: state2.textAlign,
    color: state2.foregroundColor,
    lineHeight: state2.textLineHeight
  };
}
function addTextLayer(at) {
  const doc = getState().doc;
  if (!doc) return null;
  const text = currentTextDefaults();
  const image = renderTextRaster(text);
  if (!image.src) return null;
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer = {
    id: newClientId("layer"),
    assetId,
    name: "Text",
    text: { ...text, rasterWidth: image.width, rasterHeight: image.height },
    x: at.x,
    y: at.y,
    w: image.width,
    h: image.height,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  updateDoc((d3) => ({ ...d3, layers: [...d3.layers, layer] }));
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  scheduleThumbRefresh();
  pushHistory({
    label: "Add text",
    undo: () => rawDeleteLayers([layer.id]),
    redo: () => {
      rawInsertLayers([{ layer, index: doc.layers.length }]);
      setSelection([layer.id]);
    }
  });
  return layer.id;
}
function applyText(layerId, text) {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer) return;
  const image = renderTextRaster(text);
  if (!image.src) return;
  const cachedAsset = getAssetEntry(layer.assetId);
  const oldRasterWidth = layer.text?.rasterWidth ?? cachedAsset?.width ?? layer.w;
  const oldRasterHeight = layer.text?.rasterHeight ?? cachedAsset?.height ?? layer.h;
  const scaleX = oldRasterWidth > 0 ? layer.w / oldRasterWidth : 1;
  const scaleY = oldRasterHeight > 0 ? layer.h / oldRasterHeight : 1;
  const renderedText = { ...text, rasterWidth: image.width, rasterHeight: image.height };
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((item) => item.id === layerId ? { ...item, assetId, text: renderedText, w: image.width * scaleX, h: image.height * scaleY } : item)
  }));
  const updated = getState().doc?.layers.find((item) => item.id === layerId);
  if (updated) enqueue({ kind: "updateLayer", id: layerId, data: encodeTransform(updated) });
  enqueue({ kind: "replaceLayerAsset", id: layerId, clientAssetId: assetId, src: image.src, width: image.width, height: image.height });
  scheduleThumbRefresh();
}
function updateTextLayer(layerId, patch, label = "Edit text") {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer?.text) return;
  const before = { ...layer.text };
  const after = { ...before, ...patch };
  if (JSON.stringify(before) === JSON.stringify(after)) return;
  applyText(layerId, after);
  pushHistory({ label, undo: () => applyText(layerId, before), redo: () => applyText(layerId, after) });
}
function beginTextEditing(layerId) {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer?.text) return;
  setSelection([layerId]);
  setState({ textEditing: { id: layerId, draft: layer.text.content } });
}
function finishTextEditing() {
  const editing = getState().textEditing;
  if (!editing) return;
  setState({ textEditing: null });
  updateTextLayer(editing.id, { content: editing.draft }, "Edit text");
}
function reorderLayer(fromIndex, toIndex) {
  const doc = getState().doc;
  if (!doc || fromIndex === toIndex) return;
  const before = doc.layers.map((l3) => l3.id);
  const order = [...before];
  const [moved] = order.splice(fromIndex, 1);
  if (moved === void 0) return;
  order.splice(toIndex, 0, moved);
  const applyOrder = (ids) => {
    updateDoc((d3) => {
      const byId = new Map(d3.layers.map((l3) => [l3.id, l3]));
      const layers = [];
      for (const id of ids) {
        const layer = byId.get(id);
        if (layer) {
          layers.push(layer);
          byId.delete(id);
        }
      }
      layers.push(...byId.values());
      return { ...d3, layers };
    });
    enqueue({ kind: "setOrder", projectId: doc.id, ids: [...ids] });
    scheduleThumbRefresh();
  };
  applyOrder(order);
  pushHistory({
    label: "Reorder layer",
    undo: () => applyOrder(before),
    redo: () => applyOrder(order)
  });
}
function renameLayer(id, name) {
  const doc = getState().doc;
  const layer = doc?.layers.find((l3) => l3.id === id);
  if (!doc || !layer || layer.name === name) return;
  const apply = (value) => {
    updateDoc((d3) => ({
      ...d3,
      layers: d3.layers.map((l3) => l3.id === id ? { ...l3, name: value } : l3)
    }));
    enqueue({ kind: "renameLayer", id, name: value });
  };
  const before = layer.name;
  apply(name);
  pushHistory({ label: "Rename layer", undo: () => apply(before), redo: () => apply(name) });
}
function renameProject(name) {
  const doc = getState().doc;
  if (!doc || doc.name === name) return;
  updateDoc((d3) => ({ ...d3, name }));
  enqueue({ kind: "renameProject", id: doc.id, name });
}
var thumbTimer;
function scheduleThumbRefresh() {
  if (typeof window === "undefined") return;
  clearTimeout(thumbTimer);
  thumbTimer = window.setTimeout(() => {
    const doc = getState().doc;
    if (!doc) return;
    renderThumb(doc).then((thumb) => {
      if (getState().doc?.id === doc.id) {
        enqueue({ kind: "setThumb", id: doc.id, thumb });
      }
    }).catch(() => void 0);
  }, 1500);
}

// lakebed-source:client/state/view.ts
var MIN_ZOOM = 0.05;
var MAX_ZOOM = 8;
var FIT_PADDING = 56;
var WHEEL_ZOOM_SENSITIVITY = 72e-4;
var viewportEl = { current: null };
function zoomStepFactor(zoom) {
  return 1 + 0.25 / Math.sqrt(Math.max(zoom, MIN_ZOOM));
}
function wheelZoomSensitivity(zoom) {
  return WHEEL_ZOOM_SENSITIVITY / Math.sqrt(Math.max(zoom, MIN_ZOOM));
}
function screenToWorld(clientX, clientY) {
  const el = viewportEl.current;
  const { view } = getState();
  const rect = el?.getBoundingClientRect() ?? { left: 0, top: 0 };
  return {
    x: (clientX - rect.left - view.panX) / view.zoom,
    y: (clientY - rect.top - view.panY) / view.zoom
  };
}
function zoomAtClient(clientX, clientY, nextZoom) {
  const el = viewportEl.current;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const { view } = getState();
  const zoom = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
  const wx = (clientX - rect.left - view.panX) / view.zoom;
  const wy = (clientY - rect.top - view.panY) / view.zoom;
  setState({
    view: {
      zoom,
      panX: clientX - rect.left - wx * zoom,
      panY: clientY - rect.top - wy * zoom
    }
  });
}
function setStatePan(panX, panY) {
  const { view } = getState();
  setState({ view: { ...view, panX, panY } });
}
function zoomBy(direction) {
  const el = viewportEl.current;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const zoom = getState().view.zoom;
  const step = zoomStepFactor(zoom);
  const factor = direction > 0 ? step : 1 / step;
  zoomAtClient(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2,
    zoom * factor
  );
}
function fitDoc() {
  const el = viewportEl.current;
  const doc = getState().doc;
  if (!el || !doc) return;
  const rect = el.getBoundingClientRect();
  const zoom = clamp(
    Math.min(
      (rect.width - FIT_PADDING * 2) / doc.width,
      (rect.height - FIT_PADDING * 2) / doc.height
    ),
    MIN_ZOOM,
    MAX_ZOOM
  );
  setState({
    view: {
      zoom,
      panX: (rect.width - doc.width * zoom) / 2,
      panY: (rect.height - doc.height * zoom) / 2
    }
  });
}
function requestFit() {
  setState({ fitVersion: getState().fitVersion + 1 });
}

// lakebed-source:client/lib/image.ts
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}
function decodeImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Not a supported image"));
    img.src = src;
  });
}
function baseName(fileName) {
  return fileName.replace(/\.[^.]+$/, "") || "Image";
}
async function fileToImportedImage(file) {
  const original = await readFileAsDataUrl(file);
  const img = await decodeImage(original);
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  if (width < 1 || height < 1) {
    throw new Error("Not a supported image");
  }
  const scale = Math.min(1, MAX_IMAGE_DIM / Math.max(width, height));
  if (scale === 1) {
    return { src: original, width, height, name: baseName(file.name) };
  }
  const w3 = Math.max(1, Math.round(width * scale));
  const h3 = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w3;
  canvas.height = h3;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.drawImage(img, 0, 0, w3, h3);
  const src = file.type === "image/jpeg" ? canvas.toDataURL("image/jpeg", 0.9) : canvas.toDataURL("image/png");
  return { src, width: w3, height: h3, name: baseName(file.name) };
}
function imageFilesFromDataTransfer(dt) {
  if (!dt) return [];
  return [...dt.files].filter((file) => file.type.startsWith("image/"));
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

// lakebed-source:client/components/CanvasStage.tsx
var HANDLE_CURSORS = {
  nw: "nwse-resize",
  n: "ns-resize",
  ne: "nesw-resize",
  e: "ew-resize",
  se: "nwse-resize",
  s: "ns-resize",
  sw: "nesw-resize",
  w: "ew-resize"
};
function pointInsideLayer(layer, point) {
  const cx = layer.x + layer.w / 2;
  const cy = layer.y + layer.h / 2;
  const angle = -layer.rotation * Math.PI / 180;
  const dx = point.x - cx;
  const dy = point.y - cy;
  const localX = dx * Math.cos(angle) - dy * Math.sin(angle);
  const localY = dx * Math.sin(angle) + dy * Math.cos(angle);
  return Math.abs(localX) <= layer.w / 2 && Math.abs(localY) <= layer.h / 2;
}
function LayerView({
  layer,
  previewBlend,
  editing
}) {
  const asset = useAssetEntry(layer.assetId);
  const targetSrc = asset ? displaySrc(asset) : null;
  const [drawnSrc, setDrawnSrc] = d2(targetSrc);
  h2(() => {
    if (!targetSrc) {
      setDrawnSrc(null);
      return;
    }
    let alive = true;
    const img = new Image();
    const show = () => {
      if (alive) setDrawnSrc(targetSrc);
    };
    img.onload = show;
    img.onerror = show;
    img.src = targetSrc;
    if (img.complete) show();
    return () => {
      alive = false;
    };
  }, [targetSrc]);
  const src = drawnSrc ?? targetSrc;
  const style = {
    width: layer.w,
    height: layer.h,
    transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg) scaleX(${layer.flipX ? -1 : 1})`,
    opacity: layer.opacity,
    display: layer.visible ? "block" : "none",
    mixBlendMode: previewBlend ?? layer.blendMode,
    visibility: editing ? "hidden" : "visible"
  };
  if (!src) {
    return /* @__PURE__ */ u3(
      "div",
      {
        "data-layerid": layer.id,
        className: "absolute left-0 top-0 animate-pulse bg-neutral-500/30",
        style
      }
    );
  }
  return /* @__PURE__ */ u3(
    "img",
    {
      alt: layer.name,
      "data-layerid": layer.id,
      draggable: false,
      className: "absolute left-0 top-0 max-w-none select-none",
      src,
      style,
      onLoad: () => noteLayerSrcPresented(src)
    }
  );
}
function InlineTextEditor({ layer }) {
  const editing = useEditor((s3) => s3.textEditing);
  const ref = A2(null);
  const text = layer.text;
  h2(() => {
    const el = ref.current;
    if (!el) return;
    el.focus();
    el.select();
  }, [layer.id]);
  if (!editing || !text || editing.id !== layer.id) return null;
  const padding = Math.max(4, Math.ceil(text.fontSize * 0.14));
  const lines = editing.draft.replace(/\r/g, "").split("\n");
  const rasterWidth = text.rasterWidth ?? layer.w;
  const rasterHeight = text.rasterHeight ?? layer.h;
  const scaleX = rasterWidth > 0 ? layer.w / rasterWidth : 1;
  const scaleY = rasterHeight > 0 ? layer.h / rasterHeight : 1;
  const editWidth = Math.max(rasterWidth, Math.max(...lines.map((line) => Math.max(1, line.length))) * text.fontSize * 0.68 + padding * 2);
  const editHeight = Math.max(rasterHeight, lines.length * text.fontSize * text.lineHeight + padding * 2);
  return /* @__PURE__ */ u3(
    "div",
    {
      "data-text-editor": "true",
      className: "inline-text-editor-wrap",
      style: {
        left: layer.x,
        top: layer.y,
        width: layer.w,
        height: layer.h,
        transform: `rotate(${layer.rotation}deg)`,
        transformOrigin: "center"
      },
      onPointerDown: (e3) => e3.stopPropagation(),
      children: /* @__PURE__ */ u3(
        "textarea",
        {
          ref,
          "data-text-editor": "true",
          className: "inline-text-editor",
          value: editing.draft,
          spellcheck: false,
          wrap: "off",
          style: {
            left: layer.flipX ? layer.w : 0,
            top: 0,
            width: editWidth,
            height: editHeight,
            padding,
            transform: `scale(${layer.flipX ? -scaleX : scaleX}, ${scaleY})`,
            transformOrigin: "0 0",
            fontFamily: text.fontFamily,
            fontSize: text.fontSize,
            fontWeight: text.fontWeight,
            lineHeight: text.lineHeight,
            textAlign: text.align,
            color: text.color
          },
          onInput: (e3) => setState({ textEditing: { id: layer.id, draft: e3.currentTarget.value } }),
          onBlur: (e3) => {
            const next = e3.relatedTarget;
            if (next?.closest(".properties-panel, .toolbar-colors, .tool-color-popover")) return;
            finishTextEditing();
          },
          onKeyDown: (e3) => {
            if (e3.key === "Escape") {
              e3.preventDefault();
              setState({ textEditing: null });
              ref.current?.blur();
            } else if ((e3.metaKey || e3.ctrlKey) && e3.key === "Enter") {
              e3.preventDefault();
              finishTextEditing();
            }
          }
        }
      )
    }
  );
}
function SelectionBox({
  layer,
  zoom,
  single
}) {
  const handleSize = 11 / zoom;
  return /* @__PURE__ */ u3(
    "div",
    {
      className: "pointer-events-none absolute left-0 top-0",
      style: {
        width: layer.w,
        height: layer.h,
        transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg)`
      },
      children: [
        /* @__PURE__ */ u3(
          "div",
          {
            className: "absolute inset-0 border-sky-400",
            style: { borderWidth: 1.5 / zoom, borderStyle: "solid" }
          }
        ),
        single ? /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3(
            "div",
            {
              className: "absolute bg-sky-400",
              style: {
                left: "50%",
                top: -22 / zoom,
                width: 1.5 / zoom,
                height: 22 / zoom,
                transform: "translateX(-50%)"
              }
            }
          ),
          /* @__PURE__ */ u3(
            "div",
            {
              "data-handle": "rot",
              className: "pointer-events-auto absolute rounded-full border border-sky-500 bg-white",
              style: {
                left: "50%",
                top: -26 / zoom,
                width: handleSize,
                height: handleSize,
                transform: "translate(-50%, -50%)",
                cursor: "crosshair"
              }
            }
          ),
          HANDLE_IDS.map((id) => /* @__PURE__ */ u3(
            "div",
            {
              "data-handle": id,
              className: "pointer-events-auto absolute rounded-[2px] border border-sky-500 bg-white",
              style: {
                left: `${HANDLES[id].x * 100}%`,
                top: `${HANDLES[id].y * 100}%`,
                width: handleSize,
                height: handleSize,
                transform: "translate(-50%, -50%)",
                cursor: HANDLE_CURSORS[id]
              }
            },
            id
          ))
        ] }) : null
      ]
    }
  );
}
function CanvasStage() {
  const doc = useEditor((s3) => s3.doc);
  const view = useEditor((s3) => s3.view);
  const selection = useEditor((s3) => s3.selection);
  const tool = useEditor((s3) => s3.tool);
  const spacePan = useEditor((s3) => s3.spacePan);
  const fitVersion = useEditor((s3) => s3.fitVersion);
  const brushColor = useEditor((s3) => s3.foregroundColor);
  const brushSize = useEditor((s3) => s3.brushSize);
  const brushHardness = useEditor((s3) => s3.brushHardness);
  const brushOpacity = useEditor((s3) => s3.brushOpacity);
  const brushFlow = useEditor((s3) => s3.brushFlow);
  const cropRect = useEditor((s3) => s3.cropRect);
  const snapGuides = useEditor((s3) => s3.snapGuides);
  const blendPreview = useEditor((s3) => s3.blendPreview);
  const textEditing = useEditor((s3) => s3.textEditing);
  const ref = A2(null);
  const gestureRef = A2(null);
  const panningRef = A2(false);
  const brushCanvasRef = A2(null);
  h2(() => {
    return registerBrushOverlayClear(() => {
      const canvas = brushCanvasRef.current;
      if (!canvas) return;
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    });
  }, []);
  function brushDab(ctx, x3, y3) {
    const radius = brushSize / 2;
    ctx.save();
    ctx.globalAlpha = brushFlow / 100;
    if (brushHardness >= 99) {
      ctx.fillStyle = brushColor;
    } else {
      const gradient = ctx.createRadialGradient(x3, y3, radius * brushHardness / 100, x3, y3, radius);
      gradient.addColorStop(0, brushColor);
      gradient.addColorStop(1, `${brushColor}00`);
      ctx.fillStyle = gradient;
    }
    ctx.beginPath();
    ctx.arc(x3, y3, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  function brushSegment(ctx, fromX, fromY, toX, toY) {
    const distance = Math.hypot(toX - fromX, toY - fromY);
    const spacing = Math.max(1, brushSize * 0.12);
    const steps = Math.max(1, Math.ceil(distance / spacing));
    for (let i3 = 1; i3 <= steps; i3 += 1) {
      const t3 = i3 / steps;
      brushDab(ctx, fromX + (toX - fromX) * t3, fromY + (toY - fromY) * t3);
    }
  }
  h2(() => {
    viewportEl.current = ref.current;
    return () => {
      viewportEl.current = null;
    };
  }, []);
  h2(() => {
    fitDoc();
  }, [doc?.id, fitVersion]);
  h2(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e3) => {
      e3.preventDefault();
      const { view: v3 } = getState();
      if (e3.ctrlKey || e3.metaKey) {
        zoomAtClient(
          e3.clientX,
          e3.clientY,
          v3.zoom * Math.exp(-e3.deltaY * wheelZoomSensitivity(v3.zoom))
        );
      } else {
        setStatePan(v3.panX - e3.deltaX, v3.panY - e3.deltaY);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);
  if (!doc) return null;
  const panMode = tool === "hand" || spacePan;
  function onPointerDown(e3) {
    const el = ref.current;
    if (!el || e3.button === 2) return;
    const target = e3.target;
    const state2 = getState();
    if (state2.textEditing && !target.closest("[data-text-editor]")) {
      finishTextEditing();
      e3.preventDefault();
      return;
    }
    if (e3.button === 1 || panMode) {
      gestureRef.current = {
        kind: "pan",
        startClientX: e3.clientX,
        startClientY: e3.clientY,
        startPanX: state2.view.panX,
        startPanY: state2.view.panY
      };
      panningRef.current = true;
      el.setPointerCapture(e3.pointerId);
      e3.preventDefault();
      return;
    }
    const world = screenToWorld(e3.clientX, e3.clientY);
    const inside = !!state2.doc && world.x >= 0 && world.y >= 0 && world.x <= state2.doc.width && world.y <= state2.doc.height;
    if (tool === "text") {
      if (!inside || !state2.doc) return;
      const layerId2 = target.closest("[data-layerid]")?.getAttribute("data-layerid");
      const layer = state2.doc.layers.find((item) => item.id === layerId2);
      if (layer?.text) beginTextEditing(layer.id);
      else {
        const id = addTextLayer(world);
        if (id) beginTextEditing(id);
      }
      e3.preventDefault();
      return;
    }
    if (tool === "brush") {
      if (!inside || !state2.doc) return;
      const canvas = brushCanvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      if (canvas.width !== state2.doc.width || canvas.height !== state2.doc.height) {
        canvas.width = state2.doc.width;
        canvas.height = state2.doc.height;
      }
      beginBrushGesture();
      brushDab(ctx, world.x, world.y);
      gestureRef.current = { kind: "brush", lastX: world.x, lastY: world.y };
      el.setPointerCapture(e3.pointerId);
      e3.preventDefault();
      return;
    }
    if (tool === "crop") {
      if (state2.selection.length > 1) return;
      gestureRef.current = { kind: "crop", startX: world.x, startY: world.y };
      setState({ cropRect: { x: world.x, y: world.y, w: 0, h: 0 } });
      el.setPointerCapture(e3.pointerId);
      e3.preventDefault();
      return;
    }
    const handle = target.closest("[data-handle]")?.getAttribute("data-handle");
    if (handle && state2.selection.length === 1) {
      const layer = state2.doc?.layers.find(
        (l3) => l3.id === state2.selection[0]
      );
      if (layer) {
        const start = { ...layer };
        gestureRef.current = handle === "rot" ? { kind: "rotate", id: layer.id, start } : {
          kind: "scale",
          id: layer.id,
          handle,
          start
        };
        el.setPointerCapture(e3.pointerId);
        e3.preventDefault();
        return;
      }
    }
    const layerId = target.closest("[data-layerid]")?.getAttribute("data-layerid");
    if (layerId) {
      if (e3.shiftKey) {
        toggleSelected(layerId);
        return;
      }
      if (!state2.selection.includes(layerId)) {
        setSelection([layerId]);
      }
      const selected = getState().selection;
      const starts = /* @__PURE__ */ new Map();
      for (const layer of getState().doc?.layers ?? []) {
        if (selected.includes(layer.id))
          starts.set(layer.id, { x: layer.x, y: layer.y });
      }
      gestureRef.current = {
        kind: "move",
        startX: world.x,
        startY: world.y,
        starts,
        moved: false
      };
      el.setPointerCapture(e3.pointerId);
      e3.preventDefault();
      return;
    }
    setSelection([]);
  }
  function onPointerMove(e3) {
    const gesture = gestureRef.current;
    if (!gesture) return;
    if (gesture.kind === "pan") {
      setStatePan(
        gesture.startPanX + (e3.clientX - gesture.startClientX),
        gesture.startPanY + (e3.clientY - gesture.startClientY)
      );
      return;
    }
    const world = screenToWorld(e3.clientX, e3.clientY);
    if (gesture.kind === "brush") {
      const ctx = brushCanvasRef.current?.getContext("2d");
      if (!ctx) return;
      const x3 = Math.max(0, Math.min(doc.width, world.x));
      const y3 = Math.max(0, Math.min(doc.height, world.y));
      brushSegment(ctx, gesture.lastX, gesture.lastY, x3, y3);
      gesture.lastX = x3;
      gesture.lastY = y3;
      return;
    }
    if (gesture.kind === "crop") {
      const x3 = world.x;
      const y3 = world.y;
      setState({ cropRect: { x: Math.min(gesture.startX, x3), y: Math.min(gesture.startY, y3), w: Math.abs(x3 - gesture.startX), h: Math.abs(y3 - gesture.startY) } });
      return;
    }
    if (gesture.kind === "move") {
      const dx = world.x - gesture.startX;
      const dy = world.y - gesture.startY;
      if (!gesture.moved && Math.hypot(dx, dy) * getState().view.zoom < 2)
        return;
      gesture.moved = true;
      let snappedDx = dx;
      let snappedDy = dy;
      const moving = [...gesture.starts.keys()];
      const current = getState().doc?.layers ?? [];
      const boxes = current.filter((l3) => moving.includes(l3.id)).map((l3) => {
        const start = gesture.starts.get(l3.id);
        return { x: start.x + dx, y: start.y + dy, w: l3.w, h: l3.h };
      });
      const group = { x: Math.min(...boxes.map((b2) => b2.x)), y: Math.min(...boxes.map((b2) => b2.y)), r: Math.max(...boxes.map((b2) => b2.x + b2.w)), b: Math.max(...boxes.map((b2) => b2.y + b2.h)) };
      const xAnchors = [group.x, (group.x + group.r) / 2, group.r];
      const yAnchors = [group.y, (group.y + group.b) / 2, group.b];
      const others = current.filter((l3) => !moving.includes(l3.id) && l3.visible);
      const targetX = [0, doc.width / 2, doc.width, ...others.flatMap((l3) => [l3.x, l3.x + l3.w / 2, l3.x + l3.w])];
      const targetY = [0, doc.height / 2, doc.height, ...others.flatMap((l3) => [l3.y, l3.y + l3.h / 2, l3.y + l3.h])];
      const threshold = 6 / getState().view.zoom;
      let offsetX = threshold + 1;
      let offsetY = threshold + 1;
      let guideX;
      let guideY;
      for (const anchor of xAnchors) for (const target of targetX) if (Math.abs(target - anchor) < Math.abs(offsetX)) {
        offsetX = target - anchor;
        guideX = target;
      }
      for (const anchor of yAnchors) for (const target of targetY) if (Math.abs(target - anchor) < Math.abs(offsetY)) {
        offsetY = target - anchor;
        guideY = target;
      }
      if (Math.abs(offsetX) <= threshold) snappedDx += offsetX;
      else guideX = void 0;
      if (Math.abs(offsetY) <= threshold) snappedDy += offsetY;
      else guideY = void 0;
      setState({ snapGuides: guideX === void 0 && guideY === void 0 ? null : { x: guideX, y: guideY } });
      const patches = /* @__PURE__ */ new Map();
      for (const [id, start] of gesture.starts) {
        patches.set(id, { x: start.x + snappedDx, y: start.y + snappedDy });
      }
      applyTransient(patches);
      return;
    }
    if (gesture.kind === "scale") {
      const next = scaleFromHandle(
        gesture.start,
        gesture.handle,
        world,
        e3.shiftKey
      );
      applyTransient(/* @__PURE__ */ new Map([[gesture.id, next]]));
      return;
    }
    const rotation = rotationFromPointer(gesture.start, world, e3.shiftKey);
    applyTransient(/* @__PURE__ */ new Map([[gesture.id, { rotation }]]));
  }
  function onPointerUp() {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    panningRef.current = false;
    setState({ snapGuides: null });
    if (!gesture || gesture.kind === "pan") return;
    if (gesture.kind === "brush") {
      endBrushGesture();
      const canvas = brushCanvasRef.current;
      if (canvas) {
        const src = canvas.toDataURL("image/png");
        void paintBrushStroke(src, brushOpacity / 100);
      }
      return;
    }
    if (gesture.kind === "crop") {
      const rect = getState().cropRect;
      if (!rect || rect.w < 2 || rect.h < 2) {
        setState({ cropRect: null });
        return;
      }
      if (getState().selection.length === 1) void cropSelection();
      else cropCanvas();
      return;
    }
    const layers = getState().doc?.layers ?? [];
    const byId = new Map(layers.map((l3) => [l3.id, l3]));
    if (gesture.kind === "move") {
      if (!gesture.moved) return;
      const changes = [];
      for (const [id, start] of gesture.starts) {
        const layer2 = byId.get(id);
        if (layer2) {
          changes.push({
            id,
            before: start,
            after: { x: layer2.x, y: layer2.y }
          });
        }
      }
      commitTransforms("Move", changes);
      return;
    }
    const layer = byId.get(gesture.id);
    if (!layer) return;
    if (gesture.kind === "scale") {
      const { x: x3, y: y3, w: w3, h: h3 } = gesture.start;
      commitTransforms("Resize", [
        {
          id: layer.id,
          before: { x: x3, y: y3, w: w3, h: h3 },
          after: { x: layer.x, y: layer.y, w: layer.w, h: layer.h }
        }
      ]);
      return;
    }
    commitTransforms("Rotate", [
      {
        id: layer.id,
        before: { rotation: gesture.start.rotation },
        after: { rotation: layer.rotation }
      }
    ]);
  }
  async function onDrop(e3) {
    e3.preventDefault();
    const files = imageFilesFromDataTransfer(e3.dataTransfer);
    if (files.length === 0) return;
    const at = screenToWorld(e3.clientX, e3.clientY);
    const images2 = await Promise.all(files.map(fileToImportedImage));
    addImageLayers(images2, at);
  }
  function onDoubleClick(e3) {
    const state2 = getState();
    const layerId = e3.target.closest("[data-layerid]")?.getAttribute("data-layerid");
    const direct = state2.doc?.layers.find((item) => item.id === layerId && item.text);
    const world = screenToWorld(e3.clientX, e3.clientY);
    const layer = direct ?? [...state2.doc?.layers ?? []].reverse().find((item) => item.visible && item.text && pointInsideLayer(item, world));
    if (layer?.text) {
      e3.preventDefault();
      beginTextEditing(layer.id);
    }
  }
  const selectedLayers = doc.layers.filter(
    (l3) => selection.includes(l3.id) && l3.visible
  );
  const cursor = panMode ? panningRef.current ? "grabbing" : "grab" : tool === "brush" || tool === "crop" || tool === "text" ? "crosshair" : "default";
  return /* @__PURE__ */ u3(
    "div",
    {
      ref,
      className: "canvas-dots canvas-stage",
      style: { cursor },
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onDblClick: onDoubleClick,
      onDragOver: (e3) => e3.preventDefault(),
      onDrop: (e3) => void onDrop(e3),
      children: /* @__PURE__ */ u3(
        "div",
        {
          className: "absolute left-0 top-0",
          style: {
            transform: `translate(${view.panX}px, ${view.panY}px) scale(${view.zoom})`,
            transformOrigin: "0 0"
          },
          children: [
            /* @__PURE__ */ u3(
              "div",
              {
                className: "checker artboard",
                style: {
                  width: doc.width,
                  height: doc.height
                },
                children: [
                  doc.layers.map((layer) => /* @__PURE__ */ u3(LayerView, { layer, editing: textEditing?.id === layer.id, previewBlend: blendPreview && selection.includes(layer.id) ? blendPreview : void 0 }, layer.id)),
                  /* @__PURE__ */ u3("canvas", { ref: brushCanvasRef, className: "brush-overlay", style: { opacity: brushOpacity / 100 } }),
                  textEditing ? doc.layers.filter((layer) => layer.id === textEditing.id).map((layer) => /* @__PURE__ */ u3(InlineTextEditor, { layer }, layer.id)) : null
                ]
              }
            ),
            !textEditing && (tool === "move" || tool === "text") ? selectedLayers.map((layer) => /* @__PURE__ */ u3(
              SelectionBox,
              {
                layer,
                zoom: view.zoom,
                single: tool === "move" && selectedLayers.length === 1
              },
              layer.id
            )) : tool === "crop" ? selectedLayers.map((layer) => /* @__PURE__ */ u3(SelectionBox, { layer, zoom: view.zoom, single: false }, layer.id)) : null,
            snapGuides?.x !== void 0 ? /* @__PURE__ */ u3("div", { className: "snap-guide vertical", style: { left: snapGuides.x, height: doc.height } }) : null,
            snapGuides?.y !== void 0 ? /* @__PURE__ */ u3("div", { className: "snap-guide horizontal", style: { top: snapGuides.y, width: doc.width } }) : null,
            tool === "crop" && cropRect ? /* @__PURE__ */ u3("div", { className: "crop-box", style: { left: cropRect.x, top: cropRect.y, width: cropRect.w, height: cropRect.h, borderWidth: 1.5 / view.zoom }, children: /* @__PURE__ */ u3("span", { style: { fontSize: 11 / view.zoom, padding: `${2 / view.zoom}px ${5 / view.zoom}px` }, children: [
              Math.round(cropRect.w),
              " \xD7 ",
              Math.round(cropRect.h)
            ] }) }) : null
          ]
        }
      )
    }
  );
}

// lakebed-source:client/components/Icons.tsx
function Icon({ children, className, title }) {
  return /* @__PURE__ */ u3(
    "svg",
    {
      "aria-hidden": title ? void 0 : "true",
      className,
      fill: "none",
      height: "1em",
      role: title ? "img" : void 0,
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.8",
      viewBox: "0 0 24 24",
      width: "1em",
      children: [
        title ? /* @__PURE__ */ u3("title", { children: title }) : null,
        children
      ]
    }
  );
}
var FiArrowLeft = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "m19 12H5m7 7-7-7 7-7" }) });
var FiDownload = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M12 3v12m-4-4 4 4 4-4M4 20h16" }) });
var FiEdit3 = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "M12 20h9" }),
  /* @__PURE__ */ u3("path", { d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" })
] });
var FiEye = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" }),
  /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "2.5" })
] });
var FiEyeOff = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-2.1 3.1M6.6 6.6C3.5 8.4 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4.1-.9" }) });
var FiHand = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M8 11V6a2 2 0 0 1 4 0v4-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v7a8 8 0 0 1-8 8h-1a7 7 0 0 1-5.7-3L2.5 14a2 2 0 0 1 3-2.6L8 14" }) });
var FiImage = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ u3("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
  /* @__PURE__ */ u3("path", { d: "m21 15-5-5L5 21" })
] });
var FiLayers = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "m12 2 10 5-10 5L2 7l10-5Z" }),
  /* @__PURE__ */ u3("path", { d: "m2 12 10 5 10-5M2 17l10 5 10-5" })
] });
var FiMinus = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M5 12h14" }) });
var FiMoon = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z" }) });
var FiMousePointer = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "m4 3 7 17 2.3-6.7L20 11 4 3Z" }) });
var FiPlus = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M12 5v14M5 12h14" }) });
var FiRedo2 = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "m15 4 5 5-5 5" }),
  /* @__PURE__ */ u3("path", { d: "M20 9h-9a7 7 0 0 0-7 7v1" })
] });
var FiSun = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ u3("path", { d: "M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })
] });
var FiTrash2 = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7" }) });
var FiUndo2 = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "M9 4 4 9l5 5" }),
  /* @__PURE__ */ u3("path", { d: "M4 9h9a7 7 0 0 1 7 7v1" })
] });
var FiUpload = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M12 15V3m-4 4 4-4 4 4M4 14v6h16v-6" }) });
var FiBrush = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("path", { d: "m14.5 4.5 5 5L10 19H5v-5Z" }),
  /* @__PURE__ */ u3("path", { d: "m12 7 5 5M5 19c-1.5 0-2.5 1-2.5 2" })
] });
var FiCrop = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14" }) });
var FiType = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: /* @__PURE__ */ u3("path", { d: "M4 5V3h16v2M9 21h6M12 3v18" }) });

// lakebed-source:client/components/PropertiesPanel.tsx
function SliderField({ label, value, min, max, step = 1, unit = "", onChange }) {
  return /* @__PURE__ */ u3("div", { className: "prop-field prop-slider", children: [
    /* @__PURE__ */ u3("label", { children: [
      /* @__PURE__ */ u3("span", { children: label }),
      /* @__PURE__ */ u3("span", { className: "prop-value", children: [
        Math.round(value * 100) / 100,
        unit
      ] })
    ] }),
    /* @__PURE__ */ u3("input", { type: "range", min, max, step, value, onInput: (e3) => onChange(Number(e3.currentTarget.value)) })
  ] });
}
function NumberField({ label, value, min, max, step = 1, unit = "", onChange }) {
  return /* @__PURE__ */ u3("label", { className: "prop-field prop-number", children: [
    /* @__PURE__ */ u3("span", { children: label }),
    /* @__PURE__ */ u3("span", { className: "number-wrap", children: [
      /* @__PURE__ */ u3("input", { type: "number", min, max, step, value: Math.round(value * 100) / 100, onChange: (e3) => {
        const next = Number(e3.currentTarget.value);
        if (Number.isFinite(next)) onChange(Math.max(min, Math.min(max, next)));
      } }),
      /* @__PURE__ */ u3("i", { children: unit })
    ] })
  ] });
}
function Dropdown({ label, value, options, onChange }) {
  return /* @__PURE__ */ u3("label", { className: "prop-field prop-select", children: [
    /* @__PURE__ */ u3("span", { children: label }),
    /* @__PURE__ */ u3("select", { value, onChange: (e3) => onChange(e3.currentTarget.value), children: options.map((option) => /* @__PURE__ */ u3("option", { value: option.value, children: option.label }, option.value)) })
  ] });
}
function Toggle({ label, checked, onChange }) {
  return /* @__PURE__ */ u3("label", { className: "prop-field prop-toggle", children: [
    /* @__PURE__ */ u3("span", { children: label }),
    /* @__PURE__ */ u3("input", { type: "checkbox", checked, onChange: (e3) => onChange(e3.currentTarget.checked) }),
    /* @__PURE__ */ u3("i", {})
  ] });
}
function hexRgb(hex) {
  const valid = /^#[0-9a-f]{6}$/i.test(hex) ? hex : "#000000";
  return [Number.parseInt(valid.slice(1, 3), 16), Number.parseInt(valid.slice(3, 5), 16), Number.parseInt(valid.slice(5, 7), 16)];
}
function rgbHex(r3, g2, b2) {
  const part = (value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
  return `#${part(r3)}${part(g2)}${part(b2)}`;
}
function rgbHsv(r3, g2, b2) {
  const [rn, gn, bn] = [r3 / 255, g2 / 255, b2 / 255];
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn), d3 = max - min;
  let h3 = 0;
  if (d3) h3 = max === rn ? (gn - bn) / d3 % 6 : max === gn ? (bn - rn) / d3 + 2 : (rn - gn) / d3 + 4;
  return { h: (h3 * 60 + 360) % 360, s: max ? d3 / max : 0, v: max };
}
function hsvRgb({ h: h3, s: s3, v: v3 }) {
  const c3 = v3 * s3, x3 = c3 * (1 - Math.abs(h3 / 60 % 2 - 1)), m3 = v3 - c3;
  const values = h3 < 60 ? [c3, x3, 0] : h3 < 120 ? [x3, c3, 0] : h3 < 180 ? [0, c3, x3] : h3 < 240 ? [0, x3, c3] : h3 < 300 ? [x3, 0, c3] : [c3, 0, x3];
  return values.map((value) => (value + m3) * 255);
}
function ColorPicker({ value, onChange }) {
  const [r3, g2, b2] = hexRgb(value);
  const hsv = rgbHsv(r3, g2, b2);
  const hueHex = rgbHex(...hsvRgb({ h: hsv.h, s: 1, v: 1 }));
  function setHsv(next) {
    onChange(rgbHex(...hsvRgb(next)));
  }
  function pickSv(e3) {
    const el = e3.currentTarget;
    const rect = el.getBoundingClientRect();
    setHsv({ h: hsv.h, s: Math.max(0, Math.min(1, (e3.clientX - rect.left) / rect.width)), v: Math.max(0, Math.min(1, 1 - (e3.clientY - rect.top) / rect.height)) });
  }
  async function eyedrop() {
    const EyeDropperCtor = window.EyeDropper;
    if (!EyeDropperCtor) return;
    try {
      onChange((await new EyeDropperCtor().open()).sRGBHex);
    } catch {
    }
  }
  return /* @__PURE__ */ u3("div", { className: "color-picker", children: [
    /* @__PURE__ */ u3("div", { className: "sv-picker", style: { backgroundColor: hueHex }, onPointerDown: pickSv, onPointerMove: (e3) => {
      if (e3.buttons === 1) pickSv(e3);
    }, children: /* @__PURE__ */ u3("span", { style: { left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` } }) }),
    /* @__PURE__ */ u3("input", { className: "hue-slider", "aria-label": "Hue", type: "range", min: 0, max: 359, value: Math.round(hsv.h), onInput: (e3) => setHsv({ ...hsv, h: Number(e3.currentTarget.value) }) }),
    /* @__PURE__ */ u3("div", { className: "color-row", children: [
      /* @__PURE__ */ u3("span", { className: "checker color-swatch", children: /* @__PURE__ */ u3("i", { style: { background: value } }) }),
      /* @__PURE__ */ u3("input", { className: "hex-input", "aria-label": "Hex color", value: value.toUpperCase(), onChange: (e3) => {
        const next = e3.currentTarget.value;
        if (/^#[0-9a-f]{6}$/i.test(next)) onChange(next);
      } }),
      window.EyeDropper ? /* @__PURE__ */ u3("button", { type: "button", className: "eyedropper", title: "Pick color from screen", onClick: () => void eyedrop(), children: "\u233E" }) : null
    ] }),
    /* @__PURE__ */ u3("div", { className: "rgb-row", children: [r3, g2, b2].map((channel, index) => /* @__PURE__ */ u3("label", { children: [
      /* @__PURE__ */ u3("span", { children: "RGB"[index] }),
      /* @__PURE__ */ u3("input", { type: "number", min: 0, max: 255, value: channel, onChange: (e3) => {
        const rgb = [r3, g2, b2];
        rgb[index] = Number(e3.currentTarget.value);
        onChange(rgbHex(rgb[0], rgb[1], rgb[2]));
      } })
    ] }, index)) })
  ] });
}
function SelectionProperties({ layerId }) {
  const doc = useEditor((s3) => s3.doc);
  const layer = doc?.layers.find((item) => item.id === layerId);
  if (!layer) return null;
  function change(key, value) {
    const current = getState().doc?.layers.find((item) => item.id === layerId);
    if (!current) return;
    commitTransforms("Properties", [{ id: layerId, before: { [key]: current[key] }, after: { [key]: value } }]);
  }
  return /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3(SliderField, { label: "Opacity", value: Math.round(layer.opacity * 100), min: 0, max: 100, unit: "%", onChange: (v3) => change("opacity", v3 / 100) }),
    /* @__PURE__ */ u3(Dropdown, { label: "Blend", value: layer.blendMode, options: BLEND_MODES.map((value) => ({ value, label: value.replace(/-/g, " ").replace(/^./, (letter) => letter.toUpperCase()) })), onChange: setSelectionBlendMode }),
    /* @__PURE__ */ u3(Toggle, { label: "Visible", checked: layer.visible, onChange: (v3) => change("visible", v3) })
  ] });
}
function TextDefaults() {
  const fontFamily = useEditor((s3) => s3.textFontFamily);
  const fontSize = useEditor((s3) => s3.textFontSize);
  const fontWeight = useEditor((s3) => s3.textFontWeight);
  const align = useEditor((s3) => s3.textAlign);
  const lineHeight = useEditor((s3) => s3.textLineHeight);
  return /* @__PURE__ */ u3("div", { className: "prop-section text-properties", children: [
    /* @__PURE__ */ u3("p", { className: "tool-hint", children: "Click the canvas to add text." }),
    /* @__PURE__ */ u3(Dropdown, { label: "Font", value: fontFamily, options: ["Instrument Sans", "Inter", "IBM Plex Mono", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value })), onChange: (v3) => setState({ textFontFamily: v3 }) }),
    /* @__PURE__ */ u3("div", { className: "prop-grid", children: [
      /* @__PURE__ */ u3(NumberField, { label: "Size", value: fontSize, min: 6, max: 500, unit: "px", onChange: (v3) => setState({ textFontSize: v3 }) }),
      /* @__PURE__ */ u3(Dropdown, { label: "Weight", value: String(fontWeight), options: [100, 300, 400, 500, 600, 700, 900].map((v3) => ({ value: String(v3), label: String(v3) })), onChange: (v3) => setState({ textFontWeight: Number(v3) }) })
    ] }),
    /* @__PURE__ */ u3("div", { className: "prop-field", children: [
      /* @__PURE__ */ u3("span", { children: "Alignment" }),
      /* @__PURE__ */ u3("div", { className: "segment-control", children: ["left", "center", "right"].map((value) => /* @__PURE__ */ u3("button", { type: "button", className: align === value ? "active" : "", onClick: () => setState({ textAlign: value }), children: value[0].toUpperCase() }, value)) })
    ] }),
    /* @__PURE__ */ u3(NumberField, { label: "Line height", value: lineHeight, min: 0.6, max: 3, step: 0.05, onChange: (v3) => setState({ textLineHeight: v3 }) })
  ] });
}
function PropertiesPanel({ height }) {
  const tool = useEditor((s3) => s3.tool);
  const selection = useEditor((s3) => s3.selection);
  const doc = useEditor((s3) => s3.doc);
  const brushSize = useEditor((s3) => s3.brushSize);
  const brushHardness = useEditor((s3) => s3.brushHardness);
  const brushOpacity = useEditor((s3) => s3.brushOpacity);
  const brushFlow = useEditor((s3) => s3.brushFlow);
  const selected = doc?.layers.find((layer) => layer.id === selection[selection.length - 1]);
  const text = selected?.text;
  h2(() => {
    if (text) setState({ foregroundColor: text.color });
  }, [selected?.id]);
  return /* @__PURE__ */ u3("section", { className: "properties-panel", style: height ? { height } : void 0, children: [
    /* @__PURE__ */ u3("div", { className: "panel-head", children: /* @__PURE__ */ u3("span", { children: tool === "brush" ? "Brush" : tool === "text" || text ? "Text" : selected ? "Properties" : "Canvas" }) }),
    /* @__PURE__ */ u3("div", { className: "properties-body", children: tool === "brush" ? /* @__PURE__ */ u3("div", { className: "prop-section", children: [
      /* @__PURE__ */ u3(SliderField, { label: "Size", value: brushSize, min: 1, max: 300, unit: "px", onChange: (v3) => setState({ brushSize: v3 }) }),
      /* @__PURE__ */ u3(SliderField, { label: "Hardness", value: brushHardness, min: 0, max: 100, unit: "%", onChange: (v3) => setState({ brushHardness: v3 }) }),
      /* @__PURE__ */ u3(SliderField, { label: "Opacity", value: brushOpacity, min: 1, max: 100, unit: "%", onChange: (v3) => setState({ brushOpacity: v3 }) }),
      /* @__PURE__ */ u3(SliderField, { label: "Flow", value: brushFlow, min: 1, max: 100, unit: "%", onChange: (v3) => setState({ brushFlow: v3 }) })
    ] }) : text && selected ? /* @__PURE__ */ u3("div", { className: "prop-section text-properties", children: [
      /* @__PURE__ */ u3(Dropdown, { label: "Font", value: text.fontFamily, options: ["Instrument Sans", "Inter", "IBM Plex Mono", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value })), onChange: (v3) => updateTextLayer(selected.id, { fontFamily: v3 }, "Font") }),
      /* @__PURE__ */ u3("div", { className: "prop-grid", children: [
        /* @__PURE__ */ u3(NumberField, { label: "Size", value: text.fontSize, min: 6, max: 500, unit: "px", onChange: (v3) => updateTextLayer(selected.id, { fontSize: v3 }, "Text size") }),
        /* @__PURE__ */ u3(Dropdown, { label: "Weight", value: String(text.fontWeight), options: [100, 300, 400, 500, 600, 700, 900].map((v3) => ({ value: String(v3), label: String(v3) })), onChange: (v3) => updateTextLayer(selected.id, { fontWeight: Number(v3) }, "Text weight") })
      ] }),
      /* @__PURE__ */ u3("div", { className: "prop-field", children: [
        /* @__PURE__ */ u3("span", { children: "Alignment" }),
        /* @__PURE__ */ u3("div", { className: "segment-control", children: ["left", "center", "right"].map((align) => /* @__PURE__ */ u3("button", { type: "button", className: text.align === align ? "active" : "", onClick: () => updateTextLayer(selected.id, { align }, "Text alignment"), children: align[0].toUpperCase() }, align)) })
      ] }),
      /* @__PURE__ */ u3(NumberField, { label: "Line height", value: text.lineHeight, min: 0.6, max: 3, step: 0.05, onChange: (v3) => updateTextLayer(selected.id, { lineHeight: v3 }, "Line height") })
    ] }) : tool === "text" ? /* @__PURE__ */ u3(TextDefaults, {}) : selected ? /* @__PURE__ */ u3("div", { className: "prop-section", children: /* @__PURE__ */ u3(SelectionProperties, { layerId: selected.id }) }) : /* @__PURE__ */ u3("p", { className: "properties-empty", children: "Select a layer or choose a tool." }) })
  ] });
}

// lakebed-source:client/components/LayersPanel.tsx
function LayerThumb({ layer }) {
  const asset = useAssetEntry(layer.assetId);
  return /* @__PURE__ */ u3("span", { className: "checker layer-thumb", children: asset ? /* @__PURE__ */ u3("img", { alt: "", src: displaySrc(asset), draggable: false }) : null });
}
function LayerRowView({
  layer,
  displayIndex,
  selected,
  onDragFrom,
  dropMark
}) {
  const [editing, setEditing] = d2(false);
  function commitRename(event) {
    const input = event.currentTarget;
    renameLayer(layer.id, cleanName(input.value, layer.name));
    setEditing(false);
  }
  return /* @__PURE__ */ u3(
    "li",
    {
      draggable: !editing,
      "data-display-index": displayIndex,
      onDragStart: (e3) => {
        e3.dataTransfer?.setData("text/plain", String(displayIndex));
        onDragFrom(displayIndex);
      },
      onClick: (e3) => {
        if (e3.shiftKey) toggleSelected(layer.id);
        else setSelection([layer.id]);
      },
      className: `layer-row ${selected ? "selected" : ""} ${layer.visible ? "" : "hidden"}`,
      children: [
        dropMark ? /* @__PURE__ */ u3("span", { className: `drop-mark ${dropMark}` }) : null,
        /* @__PURE__ */ u3(
          "button",
          {
            type: "button",
            title: layer.visible ? "Hide layer" : "Show layer",
            onClick: (e3) => {
              e3.stopPropagation();
              toggleVisible(layer.id);
            },
            className: "visibility",
            children: layer.visible ? /* @__PURE__ */ u3(FiEye, {}) : /* @__PURE__ */ u3(FiEyeOff, {})
          }
        ),
        /* @__PURE__ */ u3(LayerThumb, { layer }),
        editing ? /* @__PURE__ */ u3(
          "input",
          {
            autoFocus: true,
            defaultValue: layer.name,
            onBlur: commitRename,
            onKeyDown: (e3) => {
              if (e3.key === "Enter")
                e3.currentTarget.blur();
              if (e3.key === "Escape") setEditing(false);
            },
            onClick: (e3) => e3.stopPropagation(),
            className: "layer-input"
          }
        ) : /* @__PURE__ */ u3(
          "span",
          {
            className: "layer-name",
            onDblClick: () => setEditing(true),
            children: layer.name
          }
        )
      ]
    }
  );
}
function LayersPanel() {
  const doc = useEditor((s3) => s3.doc);
  const selection = useEditor((s3) => s3.selection);
  const [dropSlot, setDropSlot] = d2(null);
  const [panelWidth, setPanelWidth] = d2(() => Math.max(220, Math.min(420, Number(localStorage.getItem("image-editor-panel-width")) || 244)));
  const [propertiesHeight, setPropertiesHeight] = d2(() => Math.max(150, Math.min(500, Number(localStorage.getItem("image-editor-properties-height")) || 230)));
  const dragFromRef = A2(null);
  const panelRef = A2(null);
  if (!doc) return null;
  const display = [...doc.layers].reverse();
  const count = doc.layers.length;
  function slotFromEvent(e3) {
    const row = e3.target.closest("[data-display-index]");
    if (!row) return dropSlot ?? 0;
    const index = Number(row.getAttribute("data-display-index"));
    const rect = row.getBoundingClientRect();
    return e3.clientY < rect.top + rect.height / 2 ? index : index + 1;
  }
  function onDrop(e3) {
    e3.preventDefault();
    const from = dragFromRef.current;
    const slot = dropSlot;
    dragFromRef.current = null;
    setDropSlot(null);
    if (from === null || slot === null) return;
    const adjusted = slot > from ? slot - 1 : slot;
    if (adjusted === from) return;
    reorderLayer(count - 1 - from, count - 1 - adjusted);
  }
  function startResize(kind, event) {
    event.preventDefault();
    const panelTop = panelRef.current?.getBoundingClientRect().top ?? 0;
    const onMove = (e3) => {
      if (kind === "width") setPanelWidth(Math.max(220, Math.min(420, window.innerWidth - e3.clientX)));
      else setPropertiesHeight(Math.max(150, Math.min(window.innerHeight * 0.7, e3.clientY - panelTop)));
    };
    const onUp = (e3) => {
      onMove(e3);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      if (kind === "width") localStorage.setItem("image-editor-panel-width", String(Math.max(220, Math.min(420, window.innerWidth - e3.clientX))));
      if (kind === "properties") localStorage.setItem("image-editor-properties-height", String(Math.max(150, Math.min(window.innerHeight * 0.7, e3.clientY - panelTop))));
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  }
  return /* @__PURE__ */ u3("aside", { ref: panelRef, className: "layers-panel", style: { width: panelWidth }, children: [
    /* @__PURE__ */ u3("div", { className: "panel-width-resizer", onPointerDown: (e3) => startResize("width", e3) }),
    /* @__PURE__ */ u3(PropertiesPanel, { height: propertiesHeight }),
    /* @__PURE__ */ u3("div", { className: "properties-resizer", onPointerDown: (e3) => startResize("properties", e3) }),
    /* @__PURE__ */ u3("div", { className: "panel-head layers-head", children: [
      /* @__PURE__ */ u3(FiLayers, {}),
      /* @__PURE__ */ u3("span", { children: "Layers" }),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          title: "New layer",
          className: "layer-add",
          onClick: () => addBlankLayer(),
          children: /* @__PURE__ */ u3(FiPlus, {})
        }
      )
    ] }),
    /* @__PURE__ */ u3(
      "ul",
      {
        className: "layer-list",
        onDragOver: (e3) => {
          e3.preventDefault();
          setDropSlot(slotFromEvent(e3));
        },
        onDragLeave: () => setDropSlot(null),
        onDrop,
        children: [
          display.map((layer, index) => /* @__PURE__ */ u3(
            LayerRowView,
            {
              layer,
              displayIndex: index,
              selected: selection.includes(layer.id),
              onDragFrom: (slot) => {
                dragFromRef.current = slot;
              },
              dropMark: dropSlot === index ? "above" : dropSlot === index + 1 && index === count - 1 ? "below" : null
            },
            layer.id
          )),
          count === 0 ? /* @__PURE__ */ u3("li", { className: "no-layers", children: "No layers yet." }) : null
        ]
      }
    )
  ] });
}

// lakebed-source:client/components/Toolbar.tsx
var TOOLS = [
  { id: "move", label: "Move", hint: "V", icon: FiMousePointer },
  { id: "hand", label: "Hand", hint: "H", icon: FiHand },
  { id: "text", label: "Text", hint: "T", icon: FiType },
  { id: "brush", label: "Brush", hint: "B", icon: FiBrush },
  { id: "crop", label: "Crop", hint: "C", icon: FiCrop }
];
function Toolbar() {
  const tool = useEditor((s3) => s3.tool);
  const foregroundColor = useEditor((s3) => s3.foregroundColor);
  const backgroundColor = useEditor((s3) => s3.backgroundColor);
  const selection = useEditor((s3) => s3.selection);
  const doc = useEditor((s3) => s3.doc);
  const selectedText = doc?.layers.find((layer) => layer.id === selection[selection.length - 1] && layer.text);
  const [colorOpen, setColorOpen] = d2(null);
  const textColorTimer = A2();
  h2(() => () => window.clearTimeout(textColorTimer.current), []);
  function setForeground(value) {
    setState({ foregroundColor: value });
    window.clearTimeout(textColorTimer.current);
    if (selectedText?.text) textColorTimer.current = window.setTimeout(() => updateTextLayer(selectedText.id, { color: value }, "Text color"), 180);
  }
  return /* @__PURE__ */ u3("aside", { className: "tool-rail", children: [
    TOOLS.map((t3) => {
      const ToolIcon = t3.icon;
      return /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          title: `${t3.label} (${t3.hint})`,
          "aria-label": t3.label,
          onClick: () => {
            finishTextEditing();
            setState({ tool: t3.id });
          },
          className: `tool-button ${tool === t3.id ? "active" : ""}`,
          children: /* @__PURE__ */ u3(ToolIcon, {})
        },
        t3.id
      );
    }),
    /* @__PURE__ */ u3("div", { className: "toolbar-colors", title: "Foreground / background colors", children: [
      /* @__PURE__ */ u3("button", { type: "button", className: "global-swatch background", "aria-label": "Edit background color", style: { background: backgroundColor }, onClick: () => setColorOpen(colorOpen === "background" ? null : "background") }),
      /* @__PURE__ */ u3("button", { type: "button", className: "global-swatch foreground", "aria-label": "Edit foreground color", style: { background: foregroundColor }, onClick: () => setColorOpen(colorOpen === "foreground" ? null : "foreground") }),
      /* @__PURE__ */ u3("button", { type: "button", className: "swap-colors", title: "Swap colors (X)", onClick: () => setState({ foregroundColor: backgroundColor, backgroundColor: foregroundColor }), children: "\u2197" }),
      colorOpen ? /* @__PURE__ */ u3("div", { className: "tool-color-popover", onPointerDown: (e3) => e3.stopPropagation(), children: [
        /* @__PURE__ */ u3("div", { className: "color-popover-head", children: [
          /* @__PURE__ */ u3("span", { children: colorOpen === "foreground" ? "Foreground" : "Background" }),
          /* @__PURE__ */ u3("button", { type: "button", onClick: () => setColorOpen(null), children: "\xD7" })
        ] }),
        /* @__PURE__ */ u3(ColorPicker, { value: colorOpen === "foreground" ? foregroundColor : backgroundColor, onChange: colorOpen === "foreground" ? setForeground : (value) => setState({ backgroundColor: value }) })
      ] }) : null
    ] })
  ] });
}

// lakebed-source:client/components/ThemeToggle.tsx
function preferredTheme() {
  const saved = localStorage.getItem("image-editor-theme");
  if (saved === "light" || saved === "dark") return saved;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeToggle() {
  const [theme, setTheme] = d2(() => preferredTheme());
  h2(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("image-editor-theme", theme);
  }, [theme]);
  const next = theme === "dark" ? "light" : "dark";
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      className: "icon-button theme-toggle",
      "aria-label": `Switch to ${next} mode`,
      title: `Switch to ${next} mode`,
      onClick: () => setTheme(next),
      children: theme === "dark" ? /* @__PURE__ */ u3(FiSun, {}) : /* @__PURE__ */ u3(FiMoon, {})
    }
  );
}

// lakebed-source:client/components/TopBar.tsx
function SaveStatus() {
  const saveStatus = useEditor((s3) => s3.saveStatus);
  const saveError = useEditor((s3) => s3.saveError);
  const pendingOps = useEditor((s3) => s3.pendingOps);
  const label = saveError != null ? "Save failed" : saveStatus === "retrying" ? "Retrying\u2026" : saveStatus === "saving" || pendingOps > 0 ? "Saving\u2026" : "Saved";
  const dot = saveError != null ? "error" : saveStatus === "saved" && pendingOps === 0 ? "saved" : "saving";
  return /* @__PURE__ */ u3("div", { className: "save-status", title: saveError ?? void 0, children: [
    /* @__PURE__ */ u3("span", { className: `save-dot ${dot}` }),
    /* @__PURE__ */ u3("span", { className: "save-label", children: label })
  ] });
}
function IconButton({
  label,
  onClick,
  disabled,
  children
}) {
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      title: label,
      "aria-label": label,
      disabled,
      onClick,
      className: "icon-button",
      children
    }
  );
}
function TopBar() {
  const doc = useEditor((s3) => s3.doc);
  const zoom = useEditor((s3) => s3.view.zoom);
  useEditor((s3) => s3.histVersion);
  const fileRef = A2(null);
  if (!doc) return null;
  async function onFiles(event) {
    const input = event.currentTarget;
    const files = [...input.files ?? []];
    input.value = "";
    if (files.length === 0) return;
    const images2 = await Promise.all(files.map(fileToImportedImage));
    addImageLayers(images2);
  }
  function commitName(event) {
    const input = event.currentTarget;
    const name = cleanName(input.value, "Untitled");
    input.value = name;
    renameProject(name);
  }
  return /* @__PURE__ */ u3("header", { className: "topbar", children: [
    /* @__PURE__ */ u3(Link, { to: "/", className: "icon-button", title: "Back to projects", children: /* @__PURE__ */ u3(FiArrowLeft, {}) }),
    /* @__PURE__ */ u3(
      "input",
      {
        defaultValue: doc.name,
        onBlur: commitName,
        onKeyDown: (e3) => {
          if (e3.key === "Enter")
            e3.currentTarget.blur();
        },
        className: "topbar-name"
      },
      doc.id
    ),
    /* @__PURE__ */ u3("span", { className: "doc-size", children: [
      doc.width,
      "\xD7",
      doc.height
    ] }),
    /* @__PURE__ */ u3("div", { className: "divider" }),
    /* @__PURE__ */ u3(IconButton, { label: "Undo (\u2318Z)", onClick: undo, disabled: !canUndo(), children: /* @__PURE__ */ u3(FiUndo2, {}) }),
    /* @__PURE__ */ u3(IconButton, { label: "Redo (\u21E7\u2318Z)", onClick: redo, disabled: !canRedo(), children: /* @__PURE__ */ u3(FiRedo2, {}) }),
    /* @__PURE__ */ u3("div", { className: "spacer" }),
    /* @__PURE__ */ u3(SaveStatus, {}),
    /* @__PURE__ */ u3("div", { className: "zoom-controls", children: [
      /* @__PURE__ */ u3(IconButton, { label: "Zoom out (\u2318-)", onClick: () => zoomBy(-1), children: /* @__PURE__ */ u3(FiMinus, {}) }),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: requestFit,
          title: "Fit to screen (\u23180)",
          className: "zoom-button",
          children: [
            Math.round(zoom * 100),
            "%"
          ]
        }
      ),
      /* @__PURE__ */ u3(IconButton, { label: "Zoom in (\u2318+)", onClick: () => zoomBy(1), children: /* @__PURE__ */ u3(FiPlus, {}) })
    ] }),
    /* @__PURE__ */ u3("div", { className: "divider" }),
    /* @__PURE__ */ u3(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept: "image/*",
        multiple: true,
        className: "hidden",
        onChange: (e3) => void onFiles(e3)
      }
    ),
    /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        onClick: () => void downloadPng(getState().doc ?? doc),
        className: "button primary",
        children: [
          /* @__PURE__ */ u3(FiDownload, {}),
          "Export"
        ]
      }
    ),
    /* @__PURE__ */ u3("div", { className: "divider" }),
    /* @__PURE__ */ u3(ThemeToggle, {})
  ] });
}

// lakebed-source:client/components/Editor.tsx
function isTypingTarget(target) {
  const el = target;
  if (!el) return false;
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
}
function useEditorShortcuts() {
  h2(() => {
    function onKeyDown(e3) {
      if (isTypingTarget(e3.target)) return;
      const mod = e3.metaKey || e3.ctrlKey;
      if (e3.code === "Space") {
        if (!getState().spacePan) setState({ spacePan: true });
        e3.preventDefault();
        return;
      }
      if (mod && e3.key.toLowerCase() === "z") {
        e3.preventDefault();
        if (e3.shiftKey) redo();
        else undo();
        return;
      }
      if (mod && e3.key.toLowerCase() === "y") {
        e3.preventDefault();
        redo();
        return;
      }
      if (mod && e3.key.toLowerCase() === "c") {
        e3.preventDefault();
        copySelection();
        return;
      }
      if (mod && e3.key.toLowerCase() === "x") {
        e3.preventDefault();
        cutSelection();
        return;
      }
      if (mod && e3.key.toLowerCase() === "v") {
        e3.preventDefault();
        pasteClipboard();
        return;
      }
      if (mod && e3.key.toLowerCase() === "j") {
        e3.preventDefault();
        duplicateSelection();
        return;
      }
      if (mod && e3.key.toLowerCase() === "e") {
        e3.preventDefault();
        void combineSelection();
        return;
      }
      if (mod && e3.key.toLowerCase() === "h") {
        e3.preventDefault();
        flipSelectionHorizontal();
        return;
      }
      if (mod && e3.key.toLowerCase() === "d") {
        e3.preventDefault();
        duplicateSelection();
        return;
      }
      if (mod && (e3.key === "=" || e3.key === "+")) {
        e3.preventDefault();
        zoomBy(1);
        return;
      }
      if (mod && e3.key === "-") {
        e3.preventDefault();
        zoomBy(-1);
        return;
      }
      if (mod && e3.key === "0") {
        e3.preventDefault();
        requestFit();
        return;
      }
      if (e3.key === "Delete" || e3.key === "Backspace") {
        e3.preventDefault();
        deleteSelection();
        return;
      }
      if (e3.key === "Escape") {
        if (getState().tool === "crop") setState({ tool: "move", cropRect: null });
        else setSelection([]);
        return;
      }
      if (e3.key === "v" || e3.key === "V") {
        finishTextEditing();
        setState({ tool: "move" });
        return;
      }
      if (e3.key === "h" || e3.key === "H") {
        finishTextEditing();
        setState({ tool: "hand" });
        return;
      }
      if (e3.key === "b" || e3.key === "B") {
        finishTextEditing();
        setState({ tool: "brush" });
        return;
      }
      if (e3.key === "t" || e3.key === "T") {
        finishTextEditing();
        setState({ tool: "text" });
        return;
      }
      if (e3.key === "x" || e3.key === "X") {
        const state2 = getState();
        setState({ foregroundColor: state2.backgroundColor, backgroundColor: state2.foregroundColor });
        return;
      }
      if (e3.key === "d" || e3.key === "D") {
        setState({ foregroundColor: "#111111", backgroundColor: "#ffffff" });
        return;
      }
      if (e3.key === "c" || e3.key === "C") {
        finishTextEditing();
        setState({ tool: "crop", cropRect: null });
        return;
      }
      const step = e3.shiftKey ? 10 : 1;
      if (e3.key === "ArrowLeft") {
        e3.preventDefault();
        nudgeSelection(-step, 0);
      } else if (e3.key === "ArrowRight") {
        e3.preventDefault();
        nudgeSelection(step, 0);
      } else if (e3.key === "ArrowUp") {
        e3.preventDefault();
        nudgeSelection(0, -step);
      } else if (e3.key === "ArrowDown") {
        e3.preventDefault();
        nudgeSelection(0, step);
      }
    }
    function onKeyUp(e3) {
      if (e3.code === "Space") setState({ spacePan: false });
    }
    function onBlur() {
      setState({ spacePan: false });
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);
}
function Editor() {
  const params = useParams();
  const id = params.id ?? "";
  const projects = queryResult(useQuery("projects"));
  const layerRows = queryResult(useQuery("layers"));
  const doc = useEditor((s3) => s3.doc);
  const [timedOut, setTimedOut] = d2(false);
  const openedRef = A2(null);
  h2(() => {
    if (!projects.ready || !layerRows.ready || openedRef.current === id) return;
    const meta = projects.items.find((p3) => p3.id === id);
    if (!meta) return;
    openedRef.current = id;
    openProject(meta, layerRows.items.filter((row) => row.projectId === id));
  }, [projects, layerRows, id]);
  h2(
    () => () => {
      openedRef.current = null;
      closeProject();
    },
    []
  );
  const loaded = doc?.id === id;
  h2(() => {
    if (loaded) return;
    setTimedOut(false);
    const timer = window.setTimeout(() => setTimedOut(true), 3e3);
    return () => clearTimeout(timer);
  }, [loaded, id]);
  useEditorShortcuts();
  if (!loaded) {
    return /* @__PURE__ */ u3("div", { className: "loading-page", children: timedOut && projects.ready ? /* @__PURE__ */ u3(S, { children: [
      /* @__PURE__ */ u3("p", { children: "Project not found" }),
      /* @__PURE__ */ u3(Link, { to: "/", className: "button", children: "Back to projects" })
    ] }) : /* @__PURE__ */ u3("p", { children: "Loading project\u2026" }) });
  }
  return /* @__PURE__ */ u3("div", { className: "editor-shell", children: [
    /* @__PURE__ */ u3(TopBar, {}),
    /* @__PURE__ */ u3("div", { className: "editor-main", children: [
      /* @__PURE__ */ u3(Toolbar, {}),
      /* @__PURE__ */ u3(CanvasStage, {}),
      /* @__PURE__ */ u3(LayersPanel, {})
    ] })
  ] });
}

// lakebed-source:client/components/Home.tsx
var SIZE_PRESETS = [
  {
    name: "Canvas",
    width: DEFAULT_PROJECT_WIDTH,
    height: DEFAULT_PROJECT_HEIGHT
  },
  { name: "Square", width: 1200, height: 1200 },
  { name: "Portrait", width: 1080, height: 1350 },
  { name: "Landscape", width: 1920, height: 1080 }
];
function timeAgo(iso) {
  const ms = Date.now() - new Date(iso).getTime();
  if (!Number.isFinite(ms) || ms < 0) return "just now";
  const minutes = Math.floor(ms / 6e4);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}
function ProjectCard({
  project,
  thumb,
  onOpen,
  onRename,
  onDelete
}) {
  return /* @__PURE__ */ u3("article", { className: "project-card", children: [
    /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        onClick: onOpen,
        className: "checker project-preview",
        "aria-label": `Open ${project.name}`,
        children: thumb ? /* @__PURE__ */ u3("img", { alt: "", src: thumb, draggable: false }) : /* @__PURE__ */ u3(FiImage, { className: "project-empty-icon" })
      }
    ),
    /* @__PURE__ */ u3("button", { type: "button", onClick: onOpen, className: "project-main", children: [
      /* @__PURE__ */ u3("span", { className: "project-name", children: project.name }),
      /* @__PURE__ */ u3("span", { className: "project-info", children: [
        project.width,
        "\xD7",
        project.height,
        " \xB7",
        " ",
        project.layerOrder.length,
        " ",
        project.layerOrder.length === 1 ? "layer" : "layers",
        " \xB7",
        " ",
        timeAgo(project.updatedAt)
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "project-actions", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onRename,
          className: "icon-button",
          title: "Rename",
          "aria-label": `Rename ${project.name}`,
          children: /* @__PURE__ */ u3(FiEdit3, {})
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          onClick: onDelete,
          className: "icon-button",
          title: "Delete",
          "aria-label": `Delete ${project.name}`,
          children: /* @__PURE__ */ u3(FiTrash2, {})
        }
      )
    ] })
  ] });
}
function Home() {
  const projects = queryResult(useQuery("projects"));
  const thumbs = queryResult(useQuery("projectThumbs"));
  const navigate2 = useNavigate();
  const fileRef = A2(null);
  const [busy, setBusy] = d2(false);
  const [dragging, setDragging] = d2(false);
  const [size, setSize] = d2({
    width: DEFAULT_PROJECT_WIDTH,
    height: DEFAULT_PROJECT_HEIGHT
  });
  const dragDepthRef = A2(0);
  const thumbById = new Map(thumbs.items.map((t3) => [t3.id, t3.thumb]));
  async function createBlank() {
    if (busy) return;
    setBusy(true);
    try {
      const name = `Untitled ${projects.items.length + 1}`;
      const { id } = await api.createProject(
        name,
        size.width,
        size.height
      );
      navigate2(`/p/${id}`);
    } finally {
      setBusy(false);
    }
  }
  async function createFromFile(file) {
    if (busy) return;
    setBusy(true);
    try {
      const image = await fileToImportedImage(file);
      const { id } = await api.createProject(image.name, image.width, image.height);
      const remote = await ensureRemoteAsset(id, image.src, image.width, image.height);
      const transform = encodeTransform({
        x: 0,
        y: 0,
        w: image.width,
        h: image.height,
        rotation: 0,
        opacity: 1,
        visible: true,
        flipX: false,
        blendMode: "normal"
      });
      const layer = await api.addLayer(
        id,
        newClientId("key"),
        image.name,
        transform,
        remote.assetId ? { assetId: remote.assetId } : { src: remote.src, width: remote.width, height: remote.height }
      );
      seedAsset(layer.assetId, {
        src: layer.src || remote.src || image.src,
        paintSrc: image.src,
        width: image.width,
        height: image.height
      });
      try {
        const scale = Math.min(1, 360 / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error("thumb decode failed"));
            img.src = image.src;
          });
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          await api.setProjectThumb(id, compactThumbDataUrl(canvas));
        }
      } catch (thumbError) {
        console.warn("Could not write project thumb:", thumbError);
        if (remote.src.startsWith("http")) {
          await api.setProjectThumb(id, remote.src).catch(() => void 0);
        }
      }
      navigate2(`/p/${id}`);
    } catch (error) {
      console.error("Could not create project from image:", error);
      window.alert(error instanceof Error ? error.message : "Could not create project from image");
    } finally {
      setBusy(false);
    }
  }
  function onDrop(e3) {
    e3.preventDefault();
    dragDepthRef.current = 0;
    setDragging(false);
    const files = imageFilesFromDataTransfer(e3.dataTransfer);
    if (files.length > 0) void createFromFile(files[0]);
  }
  function onDelete(project) {
    if (confirm(`Delete "${project.name}"? This cannot be undone.`)) {
      void api.deleteProject(project.id);
    }
  }
  function onRename(project) {
    const name = prompt("Project name", project.name);
    if (name !== null) {
      void api.renameProject(project.id, cleanName(name, project.name));
    }
  }
  return /* @__PURE__ */ u3(
    "main",
    {
      className: "home",
      onDragEnter: (e3) => {
        e3.preventDefault();
        dragDepthRef.current += 1;
        setDragging(true);
      },
      onDragLeave: () => {
        dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
        if (dragDepthRef.current === 0) setDragging(false);
      },
      onDragOver: (e3) => e3.preventDefault(),
      onDrop,
      children: [
        /* @__PURE__ */ u3("div", { className: "home-inner", children: [
          /* @__PURE__ */ u3("header", { className: "mb-2", children: /* @__PURE__ */ u3("div", { className: "brand-row", children: [
            /* @__PURE__ */ u3("h1", { className: "brand", children: "image editor" }),
            /* @__PURE__ */ u3(ThemeToggle, {})
          ] }) }),
          /* @__PURE__ */ u3(
            "section",
            {
              className: "create-panel",
              "aria-labelledby": "new-project-label",
              children: [
                /* @__PURE__ */ u3("div", { className: "presets", children: SIZE_PRESETS.map((preset) => {
                  const selected = preset.width === size.width && preset.height === size.height;
                  return /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: `preset ${selected ? "selected" : ""}`,
                      "aria-pressed": selected,
                      onClick: () => setSize({
                        width: preset.width,
                        height: preset.height
                      }),
                      children: [
                        /* @__PURE__ */ u3("span", { className: "preset-name", children: preset.name }),
                        /* @__PURE__ */ u3("span", { className: "preset-size", children: [
                          preset.width,
                          " \xD7 ",
                          preset.height
                        ] })
                      ]
                    },
                    preset.name
                  );
                }) }),
                /* @__PURE__ */ u3("div", { className: "create-actions", children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      disabled: busy,
                      onClick: () => void createBlank(),
                      className: "button primary",
                      children: [
                        /* @__PURE__ */ u3(FiPlus, {}),
                        "New project"
                      ]
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "input",
                    {
                      ref: fileRef,
                      type: "file",
                      accept: "image/*",
                      className: "hidden",
                      onChange: (e3) => {
                        const input = e3.currentTarget;
                        const file = input.files?.[0];
                        input.value = "";
                        if (file) void createFromFile(file);
                      }
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      disabled: busy,
                      onClick: () => fileRef.current?.click(),
                      className: "button",
                      children: [
                        /* @__PURE__ */ u3(FiUpload, {}),
                        "From image"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ u3("p", { className: "section-label", children: [
            "Projects",
            " ",
            projects.ready ? `(${projects.items.length})` : ""
          ] }),
          !projects.ready ? /* @__PURE__ */ u3("div", { className: "empty-state", children: "Loading projects\u2026" }) : projects.items.length === 0 ? /* @__PURE__ */ u3("div", { className: "empty-state", children: "No projects yet. Choose a size above or drop an image here." }) : /* @__PURE__ */ u3("div", { className: "project-list", children: projects.items.map((project) => /* @__PURE__ */ u3(
            ProjectCard,
            {
              project,
              thumb: thumbById.get(project.id) ?? "",
              onOpen: () => navigate2(`/p/${project.id}`),
              onRename: () => onRename(project),
              onDelete: () => onDelete(project)
            },
            project.id
          )) })
        ] }),
        dragging ? /* @__PURE__ */ u3("div", { className: "drop-overlay", children: /* @__PURE__ */ u3("p", { children: "Drop to create a project" }) }) : null,
        busy ? /* @__PURE__ */ u3("div", { className: "busy-toast", children: "Creating project\u2026" }) : null
      ]
    }
  );
}

// lakebed-source:client/index.tsx
var savedTheme = localStorage.getItem("image-editor-theme");
document.documentElement.dataset.theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
var GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wdth,wght@75..100,400..700&family=Inter:wght@400;500;600;700&display=swap");
:root {
  color-scheme: light;
  --bg: #fff; --surface: #fff; --surface-subtle: #fafafa; --canvas: #f4f4f4;
  --border: #e4e4e4; --border-strong: #111; --text: #0a0a0a;
  --muted: #737373; --faint: #a3a3a3; --accent: #2563eb; --accent-hover: #1d4ed8;
  --accent-soft: #eff6ff; --danger: #dc2626; --checker-a: #ececec; --checker-b: #d8d8d8;
  --shadow: 0 16px 48px rgba(0,0,0,.14);
  --sans: "Instrument Sans", "Segoe UI", system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
:root[data-theme="dark"] {
  color-scheme: dark;
  --bg: #161616; --surface: #1c1c1c; --surface-subtle: #191919; --canvas: #121212;
  --border: #333; --border-strong: #fafafa; --text: #f0f0f0;
  --muted: #a8a8a8; --faint: #686868; --accent: #3b82f6; --accent-hover: #2563eb;
  --accent-soft: #172554; --danger: #ef4444; --checker-a: #323232; --checker-b: #282828;
  --shadow: 0 18px 56px rgba(0,0,0,.58);
}
* { box-sizing: border-box; }
html, body { margin: 0; overscroll-behavior: none; background: var(--bg); color: var(--text); }
body { font: 14px/1.5 var(--sans); -webkit-font-smoothing: antialiased; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
button:disabled { cursor: default; }
.hidden { display: none !important; }
::selection { background: var(--accent); color: #fff; }
.checker { background-color: var(--checker-a); background-image: linear-gradient(45deg,var(--checker-b) 25%,transparent 25%,transparent 75%,var(--checker-b) 75%),linear-gradient(45deg,var(--checker-b) 25%,transparent 25%,transparent 75%,var(--checker-b) 75%); background-size: 16px 16px; background-position: 0 0,8px 8px; }
.canvas-dots { background-color: var(--canvas); background-image: radial-gradient(color-mix(in srgb,var(--muted) 24%,transparent) 1px,transparent 1px); background-size: 22px 22px; }
.icon-button { width: 30px; height: 30px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border: 1px solid transparent; border-radius: 2px; background: transparent; color: var(--muted); }
.icon-button:hover { border-color: var(--border); color: var(--text); }
.icon-button:disabled { opacity: .3; }
.icon-button svg { width: 15px; height: 15px; }
.button { min-height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 7px 12px; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--text); font-size: 12.5px; font-weight: 550; white-space: nowrap; }
.button:hover { border-color: var(--border-strong); }
.button.primary { background: var(--accent); border-color: var(--accent); color: #fff; }
.button.primary:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
.button.danger { color: var(--danger); }
.button svg { width: 14px; height: 14px; }

/* Home */
.home { min-height: 100vh; padding: 46px 24px 90px; background: var(--bg); }
.home-inner { width: min(100%, 780px); margin: 0 auto; }
.brand-row { display: flex; align-items: center; gap: 10px; }
.brand { margin: 0; font-size: 21px; line-height: 1; font-weight: 750; letter-spacing: -.035em; }
.brand-mark { display: inline-block; width: 9px; height: 17px; margin-left: 4px; vertical-align: -2px; background: var(--accent); }
.brand-row .theme-toggle { margin-left: auto; }
.home-meta { margin: 12px 0 38px; padding-top: 9px; display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--border); color: var(--faint); font: 11px var(--sans); letter-spacing: .01em; }
.intro { margin: 0 0 24px; color: var(--muted); font-size: 13px; }
.create-panel { margin-bottom: 38px; }
.eyebrow { margin: 0 0 10px; color: var(--faint); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }
.presets { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 10px; }
.preset { min-width: 0; padding: 11px; text-align: left; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--muted); }
.preset:hover { border-color: var(--border-strong); color: var(--text); }
.preset.selected { border-color: var(--accent); background: var(--accent-soft); color: var(--text); }
.preset-name { display: block; margin-bottom: 3px; color: inherit; font-size: 12.5px; font-weight: 600; }
.preset-size { display: block; color: var(--faint); font: 10.5px var(--mono); }
.create-actions { display: flex; gap: 8px; }
.create-actions .button:first-of-type { flex: 1; }
.section-label { display: flex; align-items: center; gap: 10px; margin: 0 0 12px; color: var(--faint); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }
.section-label::after { content: ""; flex: 1; border-top: 1px solid var(--border); }
.project-list { display: flex; flex-direction: column; gap: 10px; }
.project-card { display: grid; grid-template-columns: 116px minmax(0,1fr) auto; min-height: 82px; overflow: hidden; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); transition: border-color .12s; }
.project-card:hover { border-color: color-mix(in srgb,var(--muted) 65%,var(--border)); }
.project-preview { display: flex; align-items: center; justify-content: center; padding: 7px; border: 0; border-right: 1px solid var(--border); background-color: var(--checker-a); }
.project-preview img { display: block; max-width: 100%; max-height: 66px; object-fit: contain; }
.project-empty-icon { width: 18px; height: 18px; color: var(--faint); }
.project-main { min-width: 0; padding: 16px; border: 0; background: transparent; color: var(--text); text-align: left; }
.project-name { display: block; overflow: hidden; color: var(--text); font-size: 14px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
.project-info { display: block; margin-top: 7px; color: var(--faint); font: 10.5px var(--mono); letter-spacing: .02em; }
.project-actions { display: flex; align-items: center; gap: 1px; padding: 0 10px; opacity: 0; transition: opacity .12s; }
.project-card:hover .project-actions, .project-actions:focus-within { opacity: 1; }
.empty-state { padding: 60px 20px; border: 1px dashed var(--border); color: var(--faint); text-align: center; font: 12px var(--mono); }
.drop-overlay { position: fixed; inset: 0; z-index: 20; display: grid; place-items: center; background: color-mix(in srgb,var(--bg) 84%,transparent); }
.drop-overlay p { padding: 30px 48px; border: 1px dashed var(--accent); color: var(--accent); font: 12px var(--mono); }
.busy-toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); padding: 9px 15px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); color: var(--muted); font: 11px var(--mono); }

/* Editor */
.editor-shell { display: flex; height: 100vh; flex-direction: column; overflow: hidden; background: var(--canvas); color: var(--text); user-select: none; }
.editor-main { display: flex; flex: 1; min-width: 0; min-height: 0; }
.topbar { height: 46px; flex-shrink: 0; display: flex; align-items: center; gap: 5px; padding: 0 10px; border-bottom: 1px solid var(--border); background: var(--surface); }
.topbar-name { width: 168px; padding: 5px 7px; border: 1px solid transparent; border-radius: 2px; outline: none; background: transparent; color: var(--text); font-size: 13px; font-weight: 600; }
.topbar-name:hover { border-color: var(--border); }.topbar-name:focus { border-color: var(--accent); }
.doc-size, .zoom-button, .save-status { color: var(--faint); font: 10.5px var(--mono); }
.divider { width: 1px; height: 18px; margin: 0 6px; background: var(--border); }
.spacer { flex: 1; }
.zoom-controls { display: flex; align-items: center; }.zoom-button { width: 52px; padding: 5px 2px; border: 0; background: transparent; }.zoom-button:hover { color: var(--text); }
.save-status { display: flex; align-items: center; gap: 7px; white-space: nowrap; }.save-dot { width: 6px; height: 6px; border-radius: 50%; }.saved { background: #22c55e; }.saving { background: #f59e0b; }.error { background: var(--danger); }
.tool-rail { position: relative; z-index: 5; width: 44px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 7px 0; border-right: 1px solid var(--border); background: var(--surface); }
.tool-button { width: 30px; height: 30px; display: grid; place-items: center; padding: 0; border: 1px solid transparent; border-radius: 2px; background: transparent; color: var(--muted); }.tool-button:hover { border-color: var(--border); color: var(--text); }.tool-button.active { border-color: var(--accent); background: var(--accent); color: #fff; }.tool-button svg { width: 15px; height: 15px; }
.toolbar-colors { position: relative; width: 38px; height: 39px; margin-top: auto; flex-shrink: 0; }.toolbar-colors .global-swatch { width: 21px; height: 21px; }.toolbar-colors .global-swatch.foreground { left: 3px; top: 3px; }.toolbar-colors .global-swatch.background { right: 3px; bottom: 2px; }.toolbar-colors .swap-colors { right: -1px; top: -5px; }
.tool-color-popover { position: absolute; z-index: 70; left: 43px; bottom: 0; width: 220px; padding: 9px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }
.tool-popover { position: absolute; top: 7px; left: 50px; width: 196px; padding: 12px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); color: var(--muted); font-size: 11px; }
.tool-popover strong { display: block; margin-bottom: 11px; color: var(--text); font-size: 12px; }.tool-popover label { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 8px 0; }.tool-popover input[type="color"] { width: 30px; height: 24px; padding: 1px; border: 1px solid var(--border); background: transparent; }.tool-popover input[type="range"] { width: 100%; accent-color: var(--accent); }.tool-popover p { margin: 0 0 12px; }.tool-popover .button { width: 100%; margin-top: 6px; }.brush-preview { max-width: 64px; max-height: 64px; min-width: 3px; min-height: 3px; margin: 12px auto 2px; border-radius: 50%; }
.layers-panel { position: relative; width: 244px; flex-shrink: 0; display: flex; flex-direction: column; border-left: 1px solid var(--border); background: var(--surface); }
.panel-head { display: flex; align-items: center; gap: 7px; height: 42px; padding: 0 12px; border-bottom: 1px solid var(--border); color: var(--muted); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }.panel-head svg { width: 13px; height: 13px; }
.layers-head { height: 36px; flex-shrink: 0; }.layers-head .layer-add { margin-left: auto; width: 24px; height: 24px; display: grid; place-items: center; padding: 0; border: 0; border-radius: 2px; background: transparent; color: var(--muted); cursor: pointer; }.layers-head .layer-add:hover { background: var(--surface-subtle); color: var(--text); }.layers-head .layer-add svg { width: 14px; height: 14px; }
.panel-width-resizer { position: absolute; z-index: 45; left: -3px; top: 0; bottom: 0; width: 6px; cursor: ew-resize; }.panel-width-resizer:hover,.panel-width-resizer:active { background: color-mix(in srgb,var(--accent) 45%,transparent); }
.properties-resizer { height: 5px; flex-shrink: 0; cursor: ns-resize; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface-subtle); }.properties-resizer:hover,.properties-resizer:active { background: var(--accent); }
.properties-panel { min-height: 0; display: flex; flex: 0 0 auto; flex-direction: column; background: var(--surface); }
.properties-panel > .panel-head { height: 34px; flex-shrink: 0; color: var(--text); font-weight: 600; }
.properties-body { min-height: 0; overflow-y: auto; }
.properties-empty { margin: 0; padding: 16px 12px; color: var(--faint); font: 10.5px var(--mono); }
.prop-section { padding: 8px 10px; border-bottom: 1px solid var(--border); }
.prop-field { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 6px 0; color: var(--muted); font: 11px var(--sans); }
.prop-field:first-child { margin-top: 0; }.prop-field:last-child { margin-bottom: 0; }
.prop-field input, .prop-field select, .prop-field textarea { outline: none; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--text); font: 11px var(--sans); }
.prop-field input:focus, .prop-field select:focus, .prop-field textarea:focus { border-color: var(--accent); }
.prop-slider { display: block; }.prop-slider label { display: flex; justify-content: space-between; margin-bottom: 5px; }.prop-value { color: var(--text); font-variant-numeric: tabular-nums; }
.prop-slider input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 12px; margin: 0; border: 0; background: transparent; }
.prop-slider input[type="range"]::-webkit-slider-runnable-track { height: 2px; border-radius: 0; background: var(--border); }.prop-slider input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 7px; height: 12px; margin-top: -5px; border: 0; border-radius: 0; background: var(--accent); }
.prop-slider input[type="range"]::-moz-range-track { height: 2px; border-radius: 0; background: var(--border); }.prop-slider input[type="range"]::-moz-range-progress { height: 2px; border-radius: 0; background: var(--accent); }.prop-slider input[type="range"]::-moz-range-thumb { width: 7px; height: 12px; border: 0; border-radius: 0; background: var(--accent); }
.prop-number input { width: 62px; height: 27px; padding: 4px 18px 4px 6px; font-variant-numeric: tabular-nums; }.number-wrap { position: relative; }.number-wrap i { pointer-events: none; position: absolute; right: 6px; top: 6px; color: var(--faint); font-style: normal; font-size: 9px; }
.prop-select select { width: 124px; height: 27px; padding: 3px 5px; }
.prop-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 10px; }.prop-grid .prop-field { min-width: 0; }.prop-grid .prop-number input,.prop-grid .prop-select select { width: 70px; }
.prop-toggle input { position: absolute; opacity: 0; }.prop-toggle i { width: 27px; height: 15px; padding: 2px; border-radius: 8px; background: var(--border); transition: background .12s; }.prop-toggle i::after { content: ""; display: block; width: 11px; height: 11px; border-radius: 50%; background: var(--surface); box-shadow: 0 1px 2px rgba(0,0,0,.25); transition: transform .12s; }.prop-toggle input:checked + i { background: var(--accent); }.prop-toggle input:checked + i::after { transform: translateX(12px); }
.text-content { display: block; }.text-content > span { display: block; margin-bottom: 5px; }.text-content textarea { width: 100%; padding: 6px; resize: vertical; line-height: 1.35; user-select: text; }
.tool-hint { margin: 0 0 9px; color: var(--faint); font: 10px var(--mono); }
.segment-control { display: flex; }.segment-control button { width: 34px; height: 27px; padding: 0; border: 1px solid var(--border); border-right-width: 0; background: var(--surface); color: var(--muted); font: 10px var(--mono); }.segment-control button:last-child { border-right-width: 1px; }.segment-control button.active { background: var(--accent-soft); color: var(--accent); border-color: var(--accent); }
.global-color-section { background: var(--surface-subtle); }.global-color-row { height: 30px; display: flex; align-items: center; gap: 8px; color: var(--muted); font: 11px var(--sans); }.global-color-row code { margin-left: auto; color: var(--faint); font: 9.5px var(--mono); }.global-swatches { position: relative; width: 45px; height: 30px; }.global-swatch { position: absolute; width: 23px; height: 23px; padding: 0; border: 2px solid var(--surface); border-radius: 0; outline: 1px solid var(--muted); }.global-swatch.background { right: 1px; bottom: 0; }.global-swatch.foreground { z-index: 2; left: 1px; top: 0; }.swap-colors { position: absolute; right: -13px; top: -5px; width: 17px; height: 17px; padding: 0; border: 0; background: transparent; color: var(--faint); font-size: 12px; }.swap-colors:hover { color: var(--text); }
.color-popover { margin: 8px -2px 0; padding: 8px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.color-popover-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 7px; color: var(--text); font: 10px var(--mono); }.color-popover-head button { width: 20px; height: 20px; padding: 0; border: 0; background: transparent; color: var(--muted); }.color-picker { margin-top: 0; }
.sv-picker { position: relative; height: 104px; overflow: hidden; cursor: crosshair; background-image: linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent); }.sv-picker span { pointer-events: none; position: absolute; width: 10px; height: 10px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 0 1px #000; transform: translate(-50%,-50%); }
.hue-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 9px; margin: 8px 0; border: 0; border-radius: 0; background: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); }.hue-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }.hue-slider::-moz-range-thumb { width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }
.color-row { display: flex; gap: 5px; }.color-swatch { width: 27px; height: 27px; flex-shrink: 0; padding: 2px; border: 1px solid var(--border); }.color-swatch i { display: block; width: 100%; height: 100%; }.hex-input { min-width: 0; flex: 1; height: 27px; padding: 4px 6px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10.5px var(--mono); text-transform: uppercase; user-select: text; }.eyedropper { width: 27px; height: 27px; padding: 0; border: 1px solid var(--border); background: var(--surface); color: var(--muted); }.eyedropper:hover { color: var(--text); border-color: var(--border-strong); }
.rgb-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 5px; margin-top: 6px; }.rgb-row label { display: flex; align-items: center; gap: 3px; color: var(--faint); font: 9px var(--mono); }.rgb-row input { min-width: 0; width: 100%; height: 25px; padding: 3px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10px var(--mono); }
.blend-control { position: relative; padding: 10px 12px; border-bottom: 1px solid var(--border); }.blend-control.disabled { opacity: .4; }.blend-control label { display: block; margin-bottom: 5px; color: var(--muted); font: 11px var(--sans); }.blend-trigger { width: 100%; height: 29px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu { position: absolute; z-index: 30; top: 61px; left: 12px; right: 12px; max-height: 248px; overflow-y: auto; padding: 4px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.blend-menu button { display: block; width: 100%; padding: 5px 7px; border: 0; background: transparent; color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu button:hover,.blend-menu button:focus,.blend-menu button.selected { outline: 0; background: var(--accent-soft); }.blend-hint { display: block; margin-top: 4px; color: var(--faint); font-size: 9.5px; }
.opacity-control { --progress: 100%; padding: 10px 12px; border-bottom: 1px solid var(--border); }.opacity-control.disabled { opacity: .4; }.opacity-label { display: flex; justify-content: space-between; margin-bottom: 5px; color: var(--muted); font: 11px var(--sans); }
.opacity-control input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 12px; margin: 0; background: linear-gradient(to right, var(--accent) 0%, var(--accent) var(--progress), var(--border) var(--progress), var(--border) 100%); background-repeat: no-repeat; background-position: center; background-size: 100% 2px; cursor: pointer; }
.opacity-control input[type="range"]::-webkit-slider-runnable-track { height: 2px; border-radius: 0; background: transparent; }
.opacity-control input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 8px; height: 8px; margin-top: -3px; border: 0; border-radius: 1px; background: var(--accent); }
.opacity-control input[type="range"]::-moz-range-track { height: 2px; border-radius: 0; background: var(--border); }
.opacity-control input[type="range"]::-moz-range-progress { height: 2px; border-radius: 0; background: var(--accent); }
.opacity-control input[type="range"]::-moz-range-thumb { width: 8px; height: 8px; border: 0; border-radius: 1px; background: var(--accent); }
.layer-list { min-height: 0; flex: 1; overflow-y: auto; margin: 0; padding: 4px 0; list-style: none; }
.layer-row { position: relative; display: flex; align-items: center; gap: 8px; padding: 6px 8px; cursor: pointer; }.layer-row:hover { background: var(--surface-subtle); }.layer-row.selected { background: var(--accent-soft); }.layer-row.hidden { opacity: .5; }
.visibility { width: 22px; height: 25px; display: grid; place-items: center; flex-shrink: 0; padding: 0; border: 0; background: transparent; color: var(--muted); }.visibility svg { width: 14px; height: 14px; }
.layer-thumb { width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid var(--border); border-radius: 2px; }.layer-thumb img { max-width: 100%; max-height: 100%; object-fit: contain; }
.layer-name { min-width: 0; flex: 1; overflow: hidden; color: var(--text); font-size: 11.5px; text-overflow: ellipsis; white-space: nowrap; }.layer-input { min-width: 0; flex: 1; padding: 3px 5px; border: 1px solid var(--accent); border-radius: 2px; outline: none; background: var(--surface); color: var(--text); font-size: 11.5px; }
.drop-mark { pointer-events: none; position: absolute; inset-inline: 4px; height: 1px; background: var(--accent); }.drop-mark.above { top: 0; }.drop-mark.below { bottom: 0; }
.no-layers { padding: 16px 12px; color: var(--faint); font: 11px var(--mono); }.panel-actions { display: flex; gap: 4px; padding: 7px; border-top: 1px solid var(--border); }.panel-actions .button { flex: 1; min-height: 30px; padding: 5px; }
.canvas-stage { position: relative; min-width: 0; flex: 1; touch-action: none; overflow: hidden; }.artboard { position: absolute; left: 0; top: 0; overflow: hidden; box-shadow: var(--shadow); outline: 1px solid color-mix(in srgb,var(--muted) 34%,transparent); }.canvas-empty { pointer-events: none; position: absolute; inset: 0; display: grid; place-items: center; }.canvas-empty p { padding: 13px 18px; border: 1px dashed var(--border); color: var(--faint); font: 11px var(--mono); }
.brush-overlay { pointer-events: none; position: absolute; inset: 0; width: 100%; height: 100%; }.snap-guide { pointer-events: none; position: absolute; z-index: 20; background: #ec4899; }.snap-guide.vertical { top: 0; width: 1px; }.snap-guide.horizontal { left: 0; height: 1px; }.crop-box { pointer-events: none; position: absolute; z-index: 21; border-style: solid; border-color: #38bdf8; background: rgba(56,189,248,.08); box-shadow: 0 0 0 99999px rgba(0,0,0,.38); }.crop-box span { position: absolute; left: 0; bottom: 100%; white-space: nowrap; background: #0284c7; color: white; font-family: var(--mono); }
.inline-text-editor-wrap { position: absolute; z-index: 30; overflow: visible; }
.inline-text-editor { position: absolute; overflow: hidden; resize: none; outline: 1px dashed var(--accent); border: 0; border-radius: 0; background: color-mix(in srgb,var(--surface) 8%,transparent); caret-color: var(--text); white-space: pre; user-select: text; }
.loading-page { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; background: var(--bg); color: var(--muted); }.loading-page p { margin: 0; font: 12px var(--mono); }.not-found { min-height: 100vh; display: grid; place-items: center; background: var(--bg); color: var(--muted); }.not-found > div { text-align: center; }
@media (max-width: 720px) { .home { padding: 28px 16px 70px; }.presets { grid-template-columns: repeat(2,1fr); }.project-card { grid-template-columns: 92px minmax(0,1fr) auto; }.project-actions { padding: 0 5px; opacity: 1; }.topbar .doc-size, .topbar .save-label, .topbar .add-label { display: none; }.layers-panel { width: 205px; } }
`;
function NotFound() {
  return /* @__PURE__ */ u3("div", { className: "not-found", children: /* @__PURE__ */ u3("div", { children: [
    /* @__PURE__ */ u3("p", { children: "Page not found" }),
    /* @__PURE__ */ u3(Link, { to: "/", className: "button", children: "Back to projects" })
  ] }) });
}
function App() {
  return /* @__PURE__ */ u3(Router, { children: [
    /* @__PURE__ */ u3("style", { children: GLOBAL_CSS }),
    /* @__PURE__ */ u3(Routes, { children: [
      /* @__PURE__ */ u3(Route, { path: "/", element: /* @__PURE__ */ u3(Home, {}) }),
      /* @__PURE__ */ u3(Route, { path: "/p/:id", element: /* @__PURE__ */ u3(Editor, {}) }),
      /* @__PURE__ */ u3(Route, { path: "*", element: /* @__PURE__ */ u3(NotFound, {}) })
    ] })
  ] });
}

// lakebed-source:__lakebed/client-entry.tsx
R(k(App, {}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvZ2VvbWV0cnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FwaS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvc3RvcmUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3VwbG9hZC50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvcGVyc2lzdC50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYXNzZXRzLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9saWIvcmVuZGVyLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9icnVzaE92ZXJsYXkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2hpc3RvcnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FjdGlvbnMudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3ZpZXcudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2xpYi9pbWFnZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9zcmMvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9zcmMvaW5kZXguanMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvQ2FudmFzU3RhZ2UudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0ljb25zLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Qcm9wZXJ0aWVzUGFuZWwudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0xheWVyc1BhbmVsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Ub29sYmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9UaGVtZVRvZ2dsZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvVG9wQmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9FZGl0b3IudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0hvbWUudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG5cbmV4cG9ydCBjb25zdCBCTEVORF9NT0RFUyA9IFtcbiAgXCJub3JtYWxcIiwgXCJtdWx0aXBseVwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkYXJrZW5cIiwgXCJsaWdodGVuXCIsXG4gIFwiY29sb3ItZG9kZ2VcIiwgXCJjb2xvci1idXJuXCIsIFwiaGFyZC1saWdodFwiLCBcInNvZnQtbGlnaHRcIiwgXCJkaWZmZXJlbmNlXCIsIFwiZXhjbHVzaW9uXCIsXG4gIFwiaHVlXCIsIFwic2F0dXJhdGlvblwiLCBcImNvbG9yXCIsIFwibHVtaW5vc2l0eVwiXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJUcmFuc2Zvcm0gPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIGg6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMsIGNsb2Nrd2lzZSwgYWJvdXQgdGhlIGJveCBjZW50ZXIuICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4xICovXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgZmxpcFg6IGJvb2xlYW47XG4gIGJsZW5kTW9kZTogQmxlbmRNb2RlO1xufTtcblxuZXhwb3J0IHR5cGUgVGV4dEFsaWduID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xuXG5leHBvcnQgdHlwZSBUZXh0TGF5ZXJEYXRhID0ge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodDogbnVtYmVyO1xuICBhbGlnbjogVGV4dEFsaWduO1xuICBjb2xvcjogc3RyaW5nO1xuICBsaW5lSGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJbnRyaW5zaWMgcmFzdGVyIGRpbWVuc2lvbnMgdXNlZCB0byBwcmVzZXJ2ZSBsYXllciBzY2FsZSBhY3Jvc3MgdGV4dCByZXJlbmRlcnMuICovXG4gIHJhc3RlcldpZHRoPzogbnVtYmVyO1xuICByYXN0ZXJIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllckRhdGEgPSBMYXllclRyYW5zZm9ybSAmIHsgdGV4dD86IFRleHRMYXllckRhdGEgfTtcblxuZXhwb3J0IHR5cGUgTGF5ZXIgPSBMYXllckRhdGEgJiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuLyoqIFRoZSBpbi1tZW1vcnkgZWRpdGluZyBkb2N1bWVudC4gbGF5ZXJzWzBdIGlzIHRoZSBib3R0b20gbGF5ZXIuICovXG5leHBvcnQgdHlwZSBQcm9qZWN0RG9jID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllcnM6IExheWVyW107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0TWV0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJPcmRlcjogc3RyaW5nW107XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJSb3cgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHByb2plY3RJZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdFRodW1iID0ge1xuICBpZDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQXNzZXRQYXlsb2FkID0ge1xuICBpZDogc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWludEFzc2V0UGF5bG9hZCA9IHsgc3JjOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVUZXh0KGlucHV0OiBQYXJ0aWFsPFRleHRMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRleHRMYXllckRhdGEgfCB1bmRlZmluZWQge1xuICBpZiAoIWlucHV0IHx8IHR5cGVvZiBpbnB1dC5jb250ZW50ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBhbGlnbjogVGV4dEFsaWduID0gaW5wdXQuYWxpZ24gPT09IFwiY2VudGVyXCIgfHwgaW5wdXQuYWxpZ24gPT09IFwicmlnaHRcIiA/IGlucHV0LmFsaWduIDogXCJsZWZ0XCI7XG4gIGNvbnN0IHJhc3RlcldpZHRoID0gZmluaXRlKGlucHV0LnJhc3RlcldpZHRoLCAwKTtcbiAgY29uc3QgcmFzdGVySGVpZ2h0ID0gZmluaXRlKGlucHV0LnJhc3RlckhlaWdodCwgMCk7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogaW5wdXQuY29udGVudC5zbGljZSgwLCA0MDAwKSxcbiAgICBmb250RmFtaWx5OiB0eXBlb2YgaW5wdXQuZm9udEZhbWlseSA9PT0gXCJzdHJpbmdcIiA/IGlucHV0LmZvbnRGYW1pbHkuc2xpY2UoMCwgODApIDogXCJJbnRlclwiLFxuICAgIGZvbnRTaXplOiBjbGFtcChmaW5pdGUoaW5wdXQuZm9udFNpemUsIDQ4KSwgNiwgNTAwKSxcbiAgICBmb250V2VpZ2h0OiBjbGFtcChNYXRoLnJvdW5kKGZpbml0ZShpbnB1dC5mb250V2VpZ2h0LCA0MDApIC8gMTAwKSAqIDEwMCwgMTAwLCA5MDApLFxuICAgIGFsaWduLFxuICAgIGNvbG9yOiB0eXBlb2YgaW5wdXQuY29sb3IgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdChpbnB1dC5jb2xvcikgPyBpbnB1dC5jb2xvciA6IFwiIzExMTExMVwiLFxuICAgIGxpbmVIZWlnaHQ6IGNsYW1wKGZpbml0ZShpbnB1dC5saW5lSGVpZ2h0LCAxLjIpLCAwLjYsIDMpLFxuICAgIC4uLihyYXN0ZXJXaWR0aCA+IDAgJiYgcmFzdGVySGVpZ2h0ID4gMCA/IHsgcmFzdGVyV2lkdGgsIHJhc3RlckhlaWdodCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVRyYW5zZm9ybShpbnB1dDogUGFydGlhbDxMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRGF0YSB7XG4gIGNvbnN0IHQgPSBpbnB1dCA/PyB7fTtcbiAgY29uc3QgdGV4dCA9IHNhbml0aXplVGV4dCh0LnRleHQpO1xuICByZXR1cm4ge1xuICAgIHg6IGZpbml0ZSh0LngsIDApLFxuICAgIHk6IGZpbml0ZSh0LnksIDApLFxuICAgIHc6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC53LCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIGg6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC5oLCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIHJvdGF0aW9uOiBmaW5pdGUodC5yb3RhdGlvbiwgMCksXG4gICAgb3BhY2l0eTogY2xhbXAoZmluaXRlKHQub3BhY2l0eSwgMSksIDAsIDEpLFxuICAgIHZpc2libGU6IHR5cGVvZiB0LnZpc2libGUgPT09IFwiYm9vbGVhblwiID8gdC52aXNpYmxlIDogdHJ1ZSxcbiAgICBmbGlwWDogdHlwZW9mIHQuZmxpcFggPT09IFwiYm9vbGVhblwiID8gdC5mbGlwWCA6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZE1vZGUgYXMgQmxlbmRNb2RlKSA/ICh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpIDogXCJub3JtYWxcIixcbiAgICAuLi4odGV4dCA/IHsgdGV4dCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVUcmFuc2Zvcm0odDogTGF5ZXJEYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNhbml0aXplVHJhbnNmb3JtKHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVRyYW5zZm9ybShyYXc6IHN0cmluZyk6IExheWVyRGF0YSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPExheWVyRGF0YT4pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0obnVsbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZ0FycmF5KHJhdzogc3RyaW5nKTogc3RyaW5nW10ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KSBhcyB1bmtub3duO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQuZmlsdGVyKCh2KTogdiBpcyBzdHJpbmcgPT4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIDogW107XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5OYW1lKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjbGVhbmVkID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgZmFsbGJhY2s7XG59XG4iLCAiLy8gUHVyZSBnZW9tZXRyeSBmb3IgbW92aW5nLCBzY2FsaW5nLCBhbmQgcm90YXRpbmcgbGF5ZXJzLiBBbGwgbWF0aCB3b3JrcyBpblxuLy8gcHJvamVjdCAoXCJ3b3JsZFwiKSBjb29yZGluYXRlczsgcm90YXRpb24gaXMgZGVncmVlcyBjbG9ja3dpc2UgYWJvdXQgdGhlXG4vLyBsYXllcidzIGNlbnRlci5cblxuaW1wb3J0IHsgTUlOX0xBWUVSX1NJWkUsIHR5cGUgTGF5ZXJUcmFuc2Zvcm0gfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBQb2ludCA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgSGFuZGxlSWQgPSBcIm53XCIgfCBcIm5cIiB8IFwibmVcIiB8IFwiZVwiIHwgXCJzZVwiIHwgXCJzXCIgfCBcInN3XCIgfCBcIndcIjtcblxuLyoqIEhhbmRsZSBwb3NpdGlvbnMgaW4gdW5pdCBib3ggY29vcmRpbmF0ZXMgKDAuLjEpLiAqL1xuZXhwb3J0IGNvbnN0IEhBTkRMRVM6IFJlY29yZDxIYW5kbGVJZCwgUG9pbnQ+ID0ge1xuICBudzogeyB4OiAwLCB5OiAwIH0sXG4gIG46IHsgeDogMC41LCB5OiAwIH0sXG4gIG5lOiB7IHg6IDEsIHk6IDAgfSxcbiAgZTogeyB4OiAxLCB5OiAwLjUgfSxcbiAgc2U6IHsgeDogMSwgeTogMSB9LFxuICBzOiB7IHg6IDAuNSwgeTogMSB9LFxuICBzdzogeyB4OiAwLCB5OiAxIH0sXG4gIHc6IHsgeDogMCwgeTogMC41IH1cbn07XG5cbmV4cG9ydCBjb25zdCBIQU5ETEVfSURTID0gT2JqZWN0LmtleXMoSEFORExFUykgYXMgSGFuZGxlSWRbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29ybmVySGFuZGxlKGhhbmRsZTogSGFuZGxlSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGhhbmRsZS5sZW5ndGggPT09IDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWc6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoZGVnICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWZWModjogUG9pbnQsIGRlZzogbnVtYmVyKTogUG9pbnQge1xuICBjb25zdCByYWQgPSBkZWdUb1JhZChkZWcpO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWQpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihyYWQpO1xuICByZXR1cm4geyB4OiB2LnggKiBjb3MgLSB2LnkgKiBzaW4sIHk6IHYueCAqIHNpbiArIHYueSAqIGNvcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDZW50ZXIodDogTGF5ZXJUcmFuc2Zvcm0pOiBQb2ludCB7XG4gIHJldHVybiB7IHg6IHQueCArIHQudyAvIDIsIHk6IHQueSArIHQuaCAvIDIgfTtcbn1cblxuLyoqIFdvcmxkIHBvc2l0aW9uIG9mIGEgcG9pbnQgZ2l2ZW4gaW4gdW5pdCBib3ggY29vcmRpbmF0ZXMgKDAuLjEpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXRQb2ludFRvV29ybGQodDogTGF5ZXJUcmFuc2Zvcm0sIHVuaXQ6IFBvaW50KTogUG9pbnQge1xuICBjb25zdCBjZW50ZXIgPSBsYXllckNlbnRlcih0KTtcbiAgY29uc3QgbG9jYWwgPSB7IHg6ICh1bml0LnggLSAwLjUpICogdC53LCB5OiAodW5pdC55IC0gMC41KSAqIHQuaCB9O1xuICBjb25zdCByb3RhdGVkID0gcm90YXRlVmVjKGxvY2FsLCB0LnJvdGF0aW9uKTtcbiAgcmV0dXJuIHsgeDogY2VudGVyLnggKyByb3RhdGVkLngsIHk6IGNlbnRlci55ICsgcm90YXRlZC55IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZShkZWc6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBhID0gZGVnICUgMzYwO1xuICBpZiAoYSA+IDE4MCkgYSAtPSAzNjA7XG4gIGlmIChhIDw9IC0xODApIGEgKz0gMzYwO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZXNpemUgYHN0YXJ0YCBieSBkcmFnZ2luZyBgaGFuZGxlYCB0byB3b3JsZCBwb2ludCBgcG9pbnRlcmAsIGtlZXBpbmcgdGhlXG4gKiBvcHBvc2l0ZSBoYW5kbGUgZml4ZWQuIENvcm5lciBoYW5kbGVzIHNjYWxlIHByb3BvcnRpb25hbGx5IHVubGVzcyBgZnJlZWA7XG4gKiBlZGdlIGhhbmRsZXMgc3RyZXRjaCBhIHNpbmdsZSBheGlzLiBOZXZlciBmbGlwczsgY2xhbXBzIHRvIE1JTl9MQVlFUl9TSVpFLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVGcm9tSGFuZGxlKFxuICBzdGFydDogTGF5ZXJUcmFuc2Zvcm0sXG4gIGhhbmRsZTogSGFuZGxlSWQsXG4gIHBvaW50ZXI6IFBvaW50LFxuICBmcmVlOiBib29sZWFuXG4pOiBQaWNrPExheWVyVHJhbnNmb3JtLCBcInhcIiB8IFwieVwiIHwgXCJ3XCIgfCBcImhcIj4ge1xuICBjb25zdCBoID0gSEFORExFU1toYW5kbGVdO1xuICBjb25zdCBhbmNob3IgPSB7IHg6IDEgLSBoLngsIHk6IDEgLSBoLnkgfTtcbiAgY29uc3QgYW5jaG9yV29ybGQgPSB1bml0UG9pbnRUb1dvcmxkKHN0YXJ0LCBhbmNob3IpO1xuXG4gIC8vIFBvaW50ZXIgZXhwcmVzc2VkIGluIHRoZSBsYXllcidzIGxvY2FsICh1bnJvdGF0ZWQpIGZyYW1lLCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yLlxuICBjb25zdCB2ID0gcm90YXRlVmVjKHsgeDogcG9pbnRlci54IC0gYW5jaG9yV29ybGQueCwgeTogcG9pbnRlci55IC0gYW5jaG9yV29ybGQueSB9LCAtc3RhcnQucm90YXRpb24pO1xuICBjb25zdCBkaXJYID0gaC54IC0gYW5jaG9yLng7IC8vIC0xLCAwLCBvciAxXG4gIGNvbnN0IGRpclkgPSBoLnkgLSBhbmNob3IueTtcblxuICBsZXQgdyA9IHN0YXJ0Lnc7XG4gIGxldCBoZ3QgPSBzdGFydC5oO1xuXG4gIGlmIChpc0Nvcm5lckhhbmRsZShoYW5kbGUpICYmICFmcmVlKSB7XG4gICAgLy8gUHJvamVjdCB0aGUgcG9pbnRlciBvbnRvIHRoZSBhbmNob3ItPmhhbmRsZSBkaWFnb25hbCBmb3IgYSBzbW9vdGggdW5pZm9ybSBzY2FsZS5cbiAgICBjb25zdCBkeCA9IGRpclggKiBzdGFydC53O1xuICAgIGNvbnN0IGR5ID0gZGlyWSAqIHN0YXJ0Lmg7XG4gICAgY29uc3QgcyA9IE1hdGgubWF4KFxuICAgICAgTUlOX0xBWUVSX1NJWkUgLyBNYXRoLm1heChzdGFydC53LCBzdGFydC5oKSxcbiAgICAgICh2LnggKiBkeCArIHYueSAqIGR5KSAvIChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgICApO1xuICAgIHcgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgc3RhcnQudyAqIHMpO1xuICAgIGhndCA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBzdGFydC5oICogcyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRpclggIT09IDApIHcgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgdi54IC8gZGlyWCk7XG4gICAgaWYgKGRpclkgIT09IDApIGhndCA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCB2LnkgLyBkaXJZKTtcbiAgfVxuXG4gIC8vIFJlcG9zaXRpb24gc28gdGhlIGFuY2hvciBwb2ludCBzdGF5cyBmaXhlZCBpbiB3b3JsZCBzcGFjZS5cbiAgY29uc3QgY2VudGVyT2Zmc2V0ID0gcm90YXRlVmVjKHsgeDogKDAuNSAtIGFuY2hvci54KSAqIHcsIHk6ICgwLjUgLSBhbmNob3IueSkgKiBoZ3QgfSwgc3RhcnQucm90YXRpb24pO1xuICBjb25zdCBjeCA9IGFuY2hvcldvcmxkLnggKyBjZW50ZXJPZmZzZXQueDtcbiAgY29uc3QgY3kgPSBhbmNob3JXb3JsZC55ICsgY2VudGVyT2Zmc2V0Lnk7XG4gIHJldHVybiB7IHg6IGN4IC0gdyAvIDIsIHk6IGN5IC0gaGd0IC8gMiwgdywgaDogaGd0IH07XG59XG5cbi8qKiBBbmdsZSBmb3IgdGhlIHJvdGF0ZSBoYW5kbGUgKHdoaWNoIHNpdHMgYWJvdmUgdGhlIHRvcCBlZGdlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbkZyb21Qb2ludGVyKHN0YXJ0OiBMYXllclRyYW5zZm9ybSwgcG9pbnRlcjogUG9pbnQsIHNuYXA6IGJvb2xlYW4pOiBudW1iZXIge1xuICBjb25zdCBjZW50ZXIgPSBsYXllckNlbnRlcihzdGFydCk7XG4gIGNvbnN0IGRlZyA9IChNYXRoLmF0YW4yKHBvaW50ZXIueSAtIGNlbnRlci55LCBwb2ludGVyLnggLSBjZW50ZXIueCkgKiAxODApIC8gTWF0aC5QSSArIDkwO1xuICBjb25zdCBzbmFwcGVkID0gc25hcCA/IE1hdGgucm91bmQoZGVnIC8gMTUpICogMTUgOiBkZWc7XG4gIHJldHVybiBub3JtYWxpemVBbmdsZShzbmFwcGVkKTtcbn1cblxuLyoqIEF4aXMtYWxpZ25lZCBib3VuZHMgb2YgYSAocG9zc2libHkgcm90YXRlZCkgbGF5ZXIsIGZvciBncm91cCBvdXRsaW5lcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckFhYmIodDogTGF5ZXJUcmFuc2Zvcm0pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgY29uc3QgY29ybmVycyA9IFtcbiAgICB1bml0UG9pbnRUb1dvcmxkKHQsIHsgeDogMCwgeTogMCB9KSxcbiAgICB1bml0UG9pbnRUb1dvcmxkKHQsIHsgeDogMSwgeTogMCB9KSxcbiAgICB1bml0UG9pbnRUb1dvcmxkKHQsIHsgeDogMSwgeTogMSB9KSxcbiAgICB1bml0UG9pbnRUb1dvcmxkKHQsIHsgeDogMCwgeTogMSB9KVxuICBdO1xuICBjb25zdCB4cyA9IGNvcm5lcnMubWFwKChjKSA9PiBjLngpO1xuICBjb25zdCB5cyA9IGNvcm5lcnMubWFwKChjKSA9PiBjLnkpO1xuICBjb25zdCBtaW5YID0gTWF0aC5taW4oLi4ueHMpO1xuICBjb25zdCBtaW5ZID0gTWF0aC5taW4oLi4ueXMpO1xuICByZXR1cm4geyB4OiBtaW5YLCB5OiBtaW5ZLCB3OiBNYXRoLm1heCguLi54cykgLSBtaW5YLCBoOiBNYXRoLm1heCguLi55cykgLSBtaW5ZIH07XG59XG4iLCAiLy8gVHlwZWQgd3JhcHBlcnMgb3ZlciB0aGUgY2Fwc3VsZSdzIG11dGF0aW9ucy4gTGFrZWJlZCdzIHVzZU11dGF0aW9uIHBlcmZvcm1zXG4vLyBubyBob29rIGNhbGxzIGludGVybmFsbHkgKGl0IGp1c3QgYmluZHMgdGhlIFdlYlNvY2tldCByZXF1ZXN0KSwgc28gaXQgaXNcbi8vIHNhZmUgdG8gY3JlYXRlIHRoZXNlIGJpbmRpbmdzIG9uY2UgYXQgbW9kdWxlIHNjb3BlIGFuZCBjYWxsIHRoZW0gZnJvbVxuLy8gbm9uLWNvbXBvbmVudCBjb2RlIGxpa2UgdGhlIHBlcnNpc3QgcXVldWUuXG5cbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEFzc2V0UGF5bG9hZCwgUGFpbnRBc3NldFBheWxvYWQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSB7XG4gIGNyZWF0ZVByb2plY3Q6IHVzZU11dGF0aW9uPFtuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSwgeyBpZDogc3RyaW5nIH0+KFwiY3JlYXRlUHJvamVjdFwiKSxcbiAgY3JlYXRlUHJvamVjdEZyb21JbWFnZTogdXNlTXV0YXRpb248XG4gICAgW25hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGxheWVyTmFtZTogc3RyaW5nLCBzcmM6IHN0cmluZywgZGF0YUpzb246IHN0cmluZ10sXG4gICAgeyBpZDogc3RyaW5nOyBsYXllcklkOiBzdHJpbmc7IGFzc2V0SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmcgfVxuICA+KFwiY3JlYXRlUHJvamVjdEZyb21JbWFnZVwiKSxcbiAgcmVuYW1lUHJvamVjdDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ10sIHZvaWQ+KFwicmVuYW1lUHJvamVjdFwiKSxcbiAgcmVzaXplUHJvamVjdDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSwgdm9pZD4oXCJyZXNpemVQcm9qZWN0XCIpLFxuICBzZXRQcm9qZWN0VGh1bWI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCB0aHVtYjogc3RyaW5nXSwgdm9pZD4oXCJzZXRQcm9qZWN0VGh1bWJcIiksXG4gIGRlbGV0ZVByb2plY3Q6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgdm9pZD4oXCJkZWxldGVQcm9qZWN0XCIpLFxuICBhZGRMYXllcjogdXNlTXV0YXRpb248XG4gICAgW1xuICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICBjbGllbnRLZXk6IHN0cmluZyxcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGRhdGFKc29uOiBzdHJpbmcsXG4gICAgICBhc3NldDogeyBhc3NldElkPzogc3RyaW5nOyBzcmM/OiBzdHJpbmc7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfVxuICAgIF0sXG4gICAgeyBsYXllcklkOiBzdHJpbmc7IGFzc2V0SWQ6IHN0cmluZzsgc3JjPzogc3RyaW5nIH1cbiAgPihcImFkZExheWVyXCIpLFxuICB1cGRhdGVMYXllcjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIGRhdGFKc29uOiBzdHJpbmddLCB2b2lkPihcInVwZGF0ZUxheWVyXCIpLFxuICByZXBsYWNlTGF5ZXJBc3NldDogdXNlTXV0YXRpb248XG4gICAgW2lkOiBzdHJpbmcsIHNyYzogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl0sXG4gICAgeyBhc3NldElkOiBzdHJpbmc7IHNyYzogc3RyaW5nIH1cbiAgPihcInJlcGxhY2VMYXllckFzc2V0XCIpLFxuICBwcmVwYXJlQXNzZXRVcGxvYWQ6IHVzZU11dGF0aW9uPFxuICAgIFtwcm9qZWN0SWQ6IHN0cmluZywgY29udGVudFR5cGU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLFxuICAgIHsgYXNzZXRJZDogc3RyaW5nOyB1cGxvYWRVcmw6IHN0cmluZzsgcHVibGljVXJsOiBzdHJpbmcgfVxuICA+KFwicHJlcGFyZUFzc2V0VXBsb2FkXCIpLFxuICByZW5hbWVMYXllcjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIG5hbWU6IHN0cmluZ10sIHZvaWQ+KFwicmVuYW1lTGF5ZXJcIiksXG4gIGRlbGV0ZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZ10sIHZvaWQ+KFwiZGVsZXRlTGF5ZXJcIiksXG4gIHNldExheWVyT3JkZXI6IHVzZU11dGF0aW9uPFtwcm9qZWN0SWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXV0sIHZvaWQ+KFwic2V0TGF5ZXJPcmRlclwiKSxcbiAgZ2V0QXNzZXQ6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgQXNzZXRQYXlsb2FkPihcImdldEFzc2V0XCIpLFxuICBnZXRBc3NldFBhaW50OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZ10sIFBhaW50QXNzZXRQYXlsb2FkPihcImdldEFzc2V0UGFpbnRcIilcbn07XG5cbi8qKlxuICogUXVlcmllcyBhcnJpdmUgYXMgYFtdYCBiZWZvcmUgdGhlIGZpcnN0IFdlYlNvY2tldCByZXN1bHQsIHRoZW4gYXNcbiAqIGB7IHJlYWR5OiB0cnVlLCBpdGVtcyB9YC4gVGhpcyBub3JtYWxpemVzIGJvdGggc2hhcGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlSZXN1bHQ8VD4ocmF3OiB1bmtub3duKTogeyByZWFkeTogYm9vbGVhbjsgaXRlbXM6IFRbXSB9IHtcbiAgaWYgKHJhdyAmJiB0eXBlb2YgcmF3ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHJhdykgJiYgKHJhdyBhcyB7IHJlYWR5PzogYm9vbGVhbiB9KS5yZWFkeSkge1xuICAgIGNvbnN0IGl0ZW1zID0gKHJhdyBhcyB7IGl0ZW1zPzogVFtdIH0pLml0ZW1zO1xuICAgIHJldHVybiB7IHJlYWR5OiB0cnVlLCBpdGVtczogQXJyYXkuaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtdIH07XG4gIH1cbiAgcmV0dXJuIHsgcmVhZHk6IGZhbHNlLCBpdGVtczogW10gfTtcbn1cbiIsICIvLyBUaW55IG9ic2VydmFibGUgc3RvcmUgZm9yIHRoZSBlZGl0b3IuIFdoaWxlIGEgcHJvamVjdCBpcyBvcGVuLCB0aGlzIGRvYyBpc1xuLy8gdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGg6IHBvaW50ZXIgZ2VzdHVyZXMgbXV0YXRlIGl0IHN5bmNocm9ub3VzbHkgZm9yXG4vLyBpbnN0YW50IGZlZWRiYWNrLCBhbmQgcGVyc2lzdGVuY2UgaGFwcGVucyBpbiB0aGUgYmFja2dyb3VuZCAoc2VlIHBlcnNpc3QudHMpLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IEJsZW5kTW9kZSwgUHJvamVjdERvYywgVGV4dEFsaWduIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBUb29sID0gXCJtb3ZlXCIgfCBcImhhbmRcIiB8IFwidGV4dFwiIHwgXCJicnVzaFwiIHwgXCJjcm9wXCI7XG5leHBvcnQgdHlwZSBTYXZlU3RhdHVzID0gXCJzYXZlZFwiIHwgXCJzYXZpbmdcIiB8IFwicmV0cnlpbmdcIjtcblxuZXhwb3J0IHR5cGUgRWRpdG9yVmlldyA9IHsgem9vbTogbnVtYmVyOyBwYW5YOiBudW1iZXI7IHBhblk6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBFZGl0b3JTdGF0ZSA9IHtcbiAgZG9jOiBQcm9qZWN0RG9jIHwgbnVsbDtcbiAgc2VsZWN0aW9uOiBzdHJpbmdbXTtcbiAgdG9vbDogVG9vbDtcbiAgc3BhY2VQYW46IGJvb2xlYW47XG4gIHZpZXc6IEVkaXRvclZpZXc7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHBlbmRpbmdPcHM6IG51bWJlcjtcbiAgc2F2ZUVycm9yOiBzdHJpbmcgfCBudWxsO1xuICAvKiogQnVtcGVkIHdoZW5ldmVyIHRoZSB1bmRvL3JlZG8gc3RhY2tzIGNoYW5nZSwgc28gdGhlIFVJIHJlLXJlYWRzIHRoZW0uICovXG4gIGhpc3RWZXJzaW9uOiBudW1iZXI7XG4gIC8qKiBCdW1wZWQgdG8gYXNrIHRoZSBjYW52YXMgdG8gcmUtZml0IHRoZSBhcnRib2FyZCB0byB0aGUgdmlld3BvcnQuICovXG4gIGZpdFZlcnNpb246IG51bWJlcjtcbiAgYnJ1c2hTaXplOiBudW1iZXI7XG4gIGJydXNoSGFyZG5lc3M6IG51bWJlcjtcbiAgYnJ1c2hPcGFjaXR5OiBudW1iZXI7XG4gIGJydXNoRmxvdzogbnVtYmVyO1xuICBmb3JlZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIHRleHRGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRleHRGb250U2l6ZTogbnVtYmVyO1xuICB0ZXh0Rm9udFdlaWdodDogbnVtYmVyO1xuICB0ZXh0QWxpZ246IFRleHRBbGlnbjtcbiAgdGV4dExpbmVIZWlnaHQ6IG51bWJlcjtcbiAgdGV4dEVkaXRpbmc6IHsgaWQ6IHN0cmluZzsgZHJhZnQ6IHN0cmluZyB9IHwgbnVsbDtcbiAgY3JvcFJlY3Q6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0gfCBudWxsO1xuICBzbmFwR3VpZGVzOiB7IHg/OiBudW1iZXI7IHk/OiBudW1iZXIgfSB8IG51bGw7XG4gIGJsZW5kUHJldmlldzogQmxlbmRNb2RlIHwgbnVsbDtcbn07XG5cbmxldCBzdGF0ZTogRWRpdG9yU3RhdGUgPSB7XG4gIGRvYzogbnVsbCxcbiAgc2VsZWN0aW9uOiBbXSxcbiAgdG9vbDogXCJtb3ZlXCIsXG4gIHNwYWNlUGFuOiBmYWxzZSxcbiAgdmlldzogeyB6b29tOiAxLCBwYW5YOiAwLCBwYW5ZOiAwIH0sXG4gIHNhdmVTdGF0dXM6IFwic2F2ZWRcIixcbiAgcGVuZGluZ09wczogMCxcbiAgc2F2ZUVycm9yOiBudWxsLFxuICBoaXN0VmVyc2lvbjogMCxcbiAgZml0VmVyc2lvbjogMCxcbiAgYnJ1c2hTaXplOiAxNixcbiAgYnJ1c2hIYXJkbmVzczogODAsXG4gIGJydXNoT3BhY2l0eTogMTAwLFxuICBicnVzaEZsb3c6IDEwMCxcbiAgZm9yZWdyb3VuZENvbG9yOiBcIiMxMTExMTFcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgdGV4dEZvbnRGYW1pbHk6IFwiSW5zdHJ1bWVudCBTYW5zXCIsXG4gIHRleHRGb250U2l6ZTogNDgsXG4gIHRleHRGb250V2VpZ2h0OiA0MDAsXG4gIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gIHRleHRMaW5lSGVpZ2h0OiAxLjIsXG4gIHRleHRFZGl0aW5nOiBudWxsLFxuICBjcm9wUmVjdDogbnVsbCxcbiAgc25hcEd1aWRlczogbnVsbCxcbiAgYmxlbmRQcmV2aWV3OiBudWxsXG59O1xuXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZSgpOiBFZGl0b3JTdGF0ZSB7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlKHBhdGNoOiBQYXJ0aWFsPEVkaXRvclN0YXRlPik6IHZvaWQge1xuICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLnBhdGNoIH07XG4gIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc10pIHtcbiAgICBsaXN0ZW5lcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2MoZm46IChkb2M6IFByb2plY3REb2MpID0+IFByb2plY3REb2MpOiB2b2lkIHtcbiAgaWYgKCFzdGF0ZS5kb2MpIHJldHVybjtcbiAgc2V0U3RhdGUoeyBkb2M6IGZuKHN0YXRlLmRvYykgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXI6ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG59XG5cbi8qKiBTdWJzY3JpYmUgYSBjb21wb25lbnQgdG8gYSBzbGljZSBvZiBlZGl0b3Igc3RhdGUgKE9iamVjdC5pcyBjb21wYXJpc29uKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZGl0b3I8VD4oc2VsZWN0b3I6IChzOiBFZGl0b3JTdGF0ZSkgPT4gVCk6IFQge1xuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiBzZWxlY3RvcihzdGF0ZSkpO1xuICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IHNlbGVjdG9yUmVmLmN1cnJlbnQoc3RhdGUpO1xuICAgICAgaWYgKCFPYmplY3QuaXMobmV4dCwgdmFsdWVSZWYuY3VycmVudCkpIHtcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHQ7XG4gICAgICAgIHNldFZhbHVlKCgpID0+IG5leHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hlY2soKTtcbiAgICByZXR1cm4gc3Vic2NyaWJlKGNoZWNrKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsICIvLyBVcGxvYWQgbGFyZ2UgaW1hZ2VzIGZyb20gdGhlIGJyb3dzZXIgdmlhIGEgTGFrZWJlZC1zaWduZWQgUzMgUFVULlxuLy8gSG9zdGVkIExha2ViZWQgY2Fubm90IGNhcnJ5IG11bHRpLU1CIGRhdGEgVVJMcyB0aHJvdWdoIG11dGF0aW9ucyAoNjRLQlxuLy8gdmFsdWUgY2FwICsgaW5zdHJ1Y3Rpb24gYnVkZ2V0KSwgc28gb25seSB0aW55IGFzc2V0cyBzdGF5IGlubGluZS5cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4vYXBpXCI7XG5cbmV4cG9ydCBjb25zdCBNQVhfSU5MSU5FX1NSQ19CWVRFUyA9IDYwXzAwMDtcblxuZnVuY3Rpb24gcGFyc2VEYXRhVXJsKHNyYzogc3RyaW5nKTogeyBjb250ZW50VHlwZTogc3RyaW5nOyBibG9iOiBCbG9iIH0ge1xuICBjb25zdCBtYXRjaCA9IC9eZGF0YTooaW1hZ2VcXC9bYS16MC05ListXSspO2Jhc2U2NCwoW1xcc1xcU10rKSQvaS5leGVjKHNyYyk7XG4gIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG11c3QgYmUgYSBkYXRhIFVSTFwiKTtcbiAgY29uc3QgY29udGVudFR5cGUgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBiaW5hcnkgPSBhdG9iKG1hdGNoWzJdLnJlcGxhY2UoL1xccy9nLCBcIlwiKSk7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYmluYXJ5Lmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSArPSAxKSBieXRlc1tpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICByZXR1cm4geyBjb250ZW50VHlwZSwgYmxvYjogbmV3IEJsb2IoW2J5dGVzXSwgeyB0eXBlOiBjb250ZW50VHlwZSB9KSB9O1xufVxuXG5leHBvcnQgdHlwZSBSZW1vdGVBc3NldCA9IHtcbiAgLyoqIFNldCB3aGVuIHRoZSBicm93c2VyIGNvbXBsZXRlZCBhIHByZXBhcmVkIFMzIHVwbG9hZC4gKi9cbiAgYXNzZXRJZD86IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBFbnN1cmUgYW4gaW1hZ2UgaXMgYWRkcmVzc2FibGUgYXMgYSBzaG9ydCBhc3NldCBpZCAvIGh0dHBzIFVSTCBmb3IgbXV0YXRpb25zLlxuICogU21hbGwgZGF0YSBVUkxzIHBhc3MgdGhyb3VnaDsgbGFyZ2Ugb25lcyBhcmUgUFVUIHRvIFMzIHdpdGggYSBwcmVwYXJlZCBhc3NldC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuc3VyZVJlbW90ZUFzc2V0KFxuICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPFJlbW90ZUFzc2V0PiB7XG4gIGlmICghcHJvamVjdElkKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHByb2plY3QgaWQgZm9yIHVwbG9hZFwiKTtcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3Qoc3JjKSkge1xuICAgIHJldHVybiB7IHNyYywgd2lkdGgsIGhlaWdodCB9O1xuICB9XG4gIGlmICghc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL1wiKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG11c3QgYmUgYSBkYXRhIFVSTCBvciBodHRwcyBVUkxcIik7XG4gIH1cbiAgaWYgKHNyYy5sZW5ndGggPD0gTUFYX0lOTElORV9TUkNfQllURVMpIHtcbiAgICByZXR1cm4geyBzcmMsIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGNvbnN0IHsgY29udGVudFR5cGUsIGJsb2IgfSA9IHBhcnNlRGF0YVVybChzcmMpO1xuICBjb25zdCBwcmVwID0gYXdhaXQgYXBpLnByZXBhcmVBc3NldFVwbG9hZChwcm9qZWN0SWQsIGNvbnRlbnRUeXBlLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcmVwLnVwbG9hZFVybCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IGNvbnRlbnRUeXBlIH0sXG4gICAgYm9keTogYmxvYlxuICB9KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGRldGFpbCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIlwiKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgUzMgdXBsb2FkIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KS4gQ2hlY2sgYnVja2V0IENPUlMgYWxsb3dzIFBVVCBmcm9tIHRoaXMgb3JpZ2luLiAke2RldGFpbC5zbGljZSgwLCAxMjApfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHsgYXNzZXRJZDogcHJlcC5hc3NldElkLCBzcmM6IHByZXAucHVibGljVXJsLCB3aWR0aCwgaGVpZ2h0IH07XG59XG5cbi8qKiBTaHJpbmsgYSBjYW52YXMgdGh1bWIgdW50aWwgaXQgZml0cyB0aGUgaG9zdGVkIERCIHZhbHVlIGNhcC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYWN0VGh1bWJEYXRhVXJsKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBzdHJpbmcge1xuICBsZXQgcXVhbGl0eSA9IDAuODU7XG4gIGxldCB1cmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCBxdWFsaXR5KTtcbiAgd2hpbGUgKHVybC5sZW5ndGggPiBNQVhfSU5MSU5FX1NSQ19CWVRFUyAmJiBxdWFsaXR5ID4gMC4zNSkge1xuICAgIHF1YWxpdHkgLT0gMC4xO1xuICAgIHVybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIHF1YWxpdHkpO1xuICB9XG4gIGlmICh1cmwubGVuZ3RoIDw9IE1BWF9JTkxJTkVfU1JDX0JZVEVTKSByZXR1cm4gdXJsO1xuXG4gIGNvbnN0IHNjYWxlID0gTWF0aC5zcXJ0KE1BWF9JTkxJTkVfU1JDX0JZVEVTIC8gdXJsLmxlbmd0aCkgKiAwLjk7XG4gIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgc21hbGwud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy53aWR0aCAqIHNjYWxlKSk7XG4gIHNtYWxsLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoY2FudmFzLmhlaWdodCAqIHNjYWxlKSk7XG4gIGNvbnN0IGN0eCA9IHNtYWxsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiB1cmwuc2xpY2UoMCwgTUFYX0lOTElORV9TUkNfQllURVMpO1xuICBjdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCwgc21hbGwud2lkdGgsIHNtYWxsLmhlaWdodCk7XG4gIHJldHVybiBzbWFsbC50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuNyk7XG59XG4iLCAiLy8gV3JpdGUtYmVoaW5kIHBlcnNpc3RlbmNlIHF1ZXVlOiB0aGUgb3B0aW1pc3RpYyBlbmdpbmUncyBiYWNrYm9uZS5cbi8vXG4vLyBFdmVyeSBlZGl0IGlzIGFwcGxpZWQgdG8gdGhlIGxvY2FsIGRvYyBpbW1lZGlhdGVseTsgdGhlIGNvcnJlc3BvbmRpbmdcbi8vIG9wZXJhdGlvbiBpcyBlbnF1ZXVlZCBoZXJlIGFuZCBkcmFpbmVkIGluIG9yZGVyIG92ZXIgdGhlIFdlYlNvY2tldC5cbi8vXG4vLyBHdWFyYW50ZWVzOlxuLy8gLSBGSUZPOiBhbiBvcCB0aGF0IHJlZmVyZW5jZXMgYSBsYXllciBjcmVhdGVkIGJ5IGFuIGVhcmxpZXIgb3AgYWx3YXlzIHJ1bnNcbi8vICAgYWZ0ZXIgaXQsIHNvIHRlbXAgY2xpZW50IGlkcyBjYW4gYmUgcmVtYXBwZWQgdG8gc2VydmVyIGlkcyBvbiB0aGUgZmx5LlxuLy8gLSBDb2FsZXNjaW5nOiByYXBpZCB1cGRhdGVzIHRvIHRoZSBzYW1lIHRhcmdldCBjb2xsYXBzZSBpbnRvIG9uZSBwZW5kaW5nIG9wXG4vLyAgIChkcmFnIGdlc3R1cmVzIGRvbid0IGZsb29kIHRoZSBzZXJ2ZXIpLlxuLy8gLSBEZWxpdmVyeTogb3BzIHRoYXQgdGltZSBvdXQgKGRlYWQgc29ja2V0LCByZWNvbm5lY3QpIGFyZSByZXRyaWVkIHdpdGhcbi8vICAgYmFja29mZiBmb3JldmVyOyBhZGRMYXllciBjYXJyaWVzIGFuIGlkZW1wb3RlbmN5IGtleSBzbyByZXRyaWVzIG5ldmVyXG4vLyAgIGR1cGxpY2F0ZS4gRGV0ZXJtaW5pc3RpYyBzZXJ2ZXIgcmVqZWN0aW9ucyBhcmUgZHJvcHBlZCBhbmQgc3VyZmFjZWQuXG5cbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgc2VlZEFzc2V0IH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZW5zdXJlUmVtb3RlQXNzZXQgfSBmcm9tIFwiLi91cGxvYWRcIjtcblxuZXhwb3J0IHR5cGUgUGVyc2lzdE9wID1cbiAgfCB7XG4gICAgICBraW5kOiBcImFkZExheWVyXCI7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICAgIGNsaWVudElkOiBzdHJpbmc7XG4gICAgICBjbGllbnRLZXk6IHN0cmluZztcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGRhdGE6IHN0cmluZztcbiAgICAgIGFzc2V0OiB7IHJlZjogc3RyaW5nIH0gfCB7IGNsaWVudElkOiBzdHJpbmc7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xuICAgIH1cbiAgfCB7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIjsgaWQ6IHN0cmluZzsgZGF0YTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwicmVwbGFjZUxheWVyQXNzZXRcIjsgaWQ6IHN0cmluZzsgY2xpZW50QXNzZXRJZDogc3RyaW5nOyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfVxuICB8IHsga2luZDogXCJyZW5hbWVMYXllclwiOyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJkZWxldGVMYXllclwiOyBpZDogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwic2V0T3JkZXJcIjsgcHJvamVjdElkOiBzdHJpbmc7IGlkczogc3RyaW5nW10gfVxuICB8IHsga2luZDogXCJyZW5hbWVQcm9qZWN0XCI7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInJlc2l6ZVByb2plY3RcIjsgaWQ6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfVxuICB8IHsga2luZDogXCJzZXRUaHVtYlwiOyBpZDogc3RyaW5nOyB0aHVtYjogc3RyaW5nIH07XG5cbmNvbnN0IE9QX1RJTUVPVVRfTVMgPSAxMF8wMDA7XG4vLyBVcGxvYWRzIGdvIGNsaWVudCBcdTIxOTIgTGFrZWJlZCBcdTIxOTIgUzM7IGFsbG93IG1vcmUgdGltZSB0aGFuIGEgbm9ybWFsIG1ldGFkYXRhIHdyaXRlLlxuY29uc3QgVVBMT0FEX1RJTUVPVVRfTVMgPSA2MF8wMDA7XG5jb25zdCBNQVhfQkFDS09GRl9NUyA9IDE1XzAwMDtcblxuLy8gVGVtcCBjbGllbnQgaWQgLT4gc2VydmVyIGlkLiBDbGllbnQgY29kZSBvbmx5IGV2ZXIgc2VlcyBjbGllbnQgaWRzOyB0aGVcbi8vIHRyYW5zbGF0aW9uIGhhcHBlbnMgaGVyZSBhdCBleGVjdXRpb24gdGltZS5cbmNvbnN0IGxheWVySWRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbmNvbnN0IGFzc2V0SWRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuY29uc3QgcXVldWU6IFBlcnNpc3RPcFtdID0gW107XG5sZXQgZHJhaW5pbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYXllcklkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbGF5ZXJJZHMuZ2V0KGlkKSA/PyBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBc3NldElkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYXNzZXRJZHMuZ2V0KGlkKSA/PyBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEFzc2V0SWQoY2xpZW50SWQ6IHN0cmluZywgc2VydmVySWQ6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY2xpZW50SWQgIT09IHNlcnZlcklkKSBhc3NldElkcy5zZXQoY2xpZW50SWQsIHNlcnZlcklkKTtcbn1cblxubGV0IG5leHRDbGllbnRJZCA9IDE7XG5leHBvcnQgZnVuY3Rpb24gbmV3Q2xpZW50SWQocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cHJlZml4fV8ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfV8keyhuZXh0Q2xpZW50SWQrKykudG9TdHJpbmcoMzYpfV8ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnNsaWNlKDIsIDgpfWA7XG59XG5cbi8qKiBLZXkgZm9yIGNvYWxlc2Npbmc7IG9wcyB3aXRoIHRoZSBzYW1lIGtleSByZXBsYWNlIGVhY2ggb3RoZXIgaW4gcGxhY2UuICovXG5mdW5jdGlvbiBvcEtleShvcDogUGVyc2lzdE9wKTogc3RyaW5nIHwgbnVsbCB7XG4gIHN3aXRjaCAob3Aua2luZCkge1xuICAgIGNhc2UgXCJ1cGRhdGVMYXllclwiOlxuICAgICAgcmV0dXJuIGB1cGRhdGVMYXllcjoke29wLmlkfWA7XG4gICAgY2FzZSBcInJlbmFtZUxheWVyXCI6XG4gICAgICByZXR1cm4gYHJlbmFtZUxheWVyOiR7b3AuaWR9YDtcbiAgICBjYXNlIFwic2V0T3JkZXJcIjpcbiAgICAgIHJldHVybiBgc2V0T3JkZXI6JHtvcC5wcm9qZWN0SWR9YDtcbiAgICBjYXNlIFwicmVuYW1lUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIGByZW5hbWVQcm9qZWN0OiR7b3AuaWR9YDtcbiAgICBjYXNlIFwicmVzaXplUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIGByZXNpemVQcm9qZWN0OiR7b3AuaWR9YDtcbiAgICBjYXNlIFwic2V0VGh1bWJcIjpcbiAgICAgIHJldHVybiBgc2V0VGh1bWI6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJyZXBsYWNlTGF5ZXJBc3NldFwiOlxuICAgICAgcmV0dXJuIGByZXBsYWNlTGF5ZXJBc3NldDoke29wLmlkfWA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlKG9wOiBQZXJzaXN0T3ApOiB2b2lkIHtcbiAgY29uc3Qga2V5ID0gb3BLZXkob3ApO1xuICBpZiAoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAob3BLZXkocXVldWVbaV0pID09PSBrZXkpIHtcbiAgICAgICAgcXVldWVbaV0gPSBvcDtcbiAgICAgICAgc3luY1N0YXR1cygpO1xuICAgICAgICB2b2lkIGRyYWluKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcXVldWUucHVzaChvcCk7XG4gIHN5bmNTdGF0dXMoKTtcbiAgdm9pZCBkcmFpbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVuZGluZ0NvdW50KCk6IG51bWJlciB7XG4gIHJldHVybiBxdWV1ZS5sZW5ndGggKyAoZHJhaW5pbmcgPyAxIDogMCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNTdGF0dXMocGF0Y2g6IFBhcnRpYWw8eyBzYXZlU3RhdHVzOiBcInNhdmVkXCIgfCBcInNhdmluZ1wiIHwgXCJyZXRyeWluZ1wiOyBzYXZlRXJyb3I6IHN0cmluZyB8IG51bGwgfT4gPSB7fSk6IHZvaWQge1xuICBjb25zdCBidXN5ID0gcXVldWUubGVuZ3RoID4gMCB8fCBkcmFpbmluZztcbiAgc2V0U3RhdGUoe1xuICAgIHNhdmVTdGF0dXM6IHBhdGNoLnNhdmVTdGF0dXMgPz8gKGJ1c3kgPyBcInNhdmluZ1wiIDogXCJzYXZlZFwiKSxcbiAgICBwZW5kaW5nT3BzOiBxdWV1ZS5sZW5ndGggKyAoZHJhaW5pbmcgPyAxIDogMCksXG4gICAgLi4uKHBhdGNoLnNhdmVFcnJvciAhPT0gdW5kZWZpbmVkID8geyBzYXZlRXJyb3I6IHBhdGNoLnNhdmVFcnJvciB9IDoge30pXG4gIH0pO1xufVxuXG5jbGFzcyBPcFRpbWVvdXQgZXh0ZW5kcyBFcnJvciB7fVxuXG5mdW5jdGlvbiB3aXRoVGltZW91dDxUPihwcm9taXNlOiBQcm9taXNlPFQ+LCBtcyA9IE9QX1RJTUVPVVRfTVMpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBPcFRpbWVvdXQoXCJ0aW1lZCBvdXRcIikpLCBtcyk7XG4gICAgcHJvbWlzZS50aGVuKFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlKG9wOiBQZXJzaXN0T3ApOiBQcm9taXNlPHZvaWQ+IHtcbiAgc3dpdGNoIChvcC5raW5kKSB7XG4gICAgY2FzZSBcImFkZExheWVyXCI6IHtcbiAgICAgIGxldCBhc3NldDogeyBhc3NldElkPzogc3RyaW5nOyBzcmM/OiBzdHJpbmc7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfTtcbiAgICAgIGlmIChcInJlZlwiIGluIG9wLmFzc2V0KSB7XG4gICAgICAgIGFzc2V0ID0geyBhc3NldElkOiByZXNvbHZlQXNzZXRJZChvcC5hc3NldC5yZWYpIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZW1vdGUgPSBhd2FpdCBlbnN1cmVSZW1vdGVBc3NldChcbiAgICAgICAgICBvcC5wcm9qZWN0SWQsXG4gICAgICAgICAgb3AuYXNzZXQuc3JjLFxuICAgICAgICAgIG9wLmFzc2V0LndpZHRoLFxuICAgICAgICAgIG9wLmFzc2V0LmhlaWdodFxuICAgICAgICApO1xuICAgICAgICBpZiAocmVtb3RlLmFzc2V0SWQpIHtcbiAgICAgICAgICBtYXBBc3NldElkKG9wLmFzc2V0LmNsaWVudElkLCByZW1vdGUuYXNzZXRJZCk7XG4gICAgICAgICAgc2VlZEFzc2V0KG9wLmFzc2V0LmNsaWVudElkLCB7XG4gICAgICAgICAgICBzcmM6IHJlbW90ZS5zcmMsXG4gICAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdpZHRoOiBvcC5hc3NldC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VlZEFzc2V0KHJlbW90ZS5hc3NldElkLCB7XG4gICAgICAgICAgICBzcmM6IHJlbW90ZS5zcmMsXG4gICAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdpZHRoOiBvcC5hc3NldC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXNzZXQgPSB7IGFzc2V0SWQ6IHJlbW90ZS5hc3NldElkIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXNzZXQgPSB7IHNyYzogcmVtb3RlLnNyYywgd2lkdGg6IHJlbW90ZS53aWR0aCwgaGVpZ2h0OiByZW1vdGUuaGVpZ2h0IH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBhc3NldC5zcmMgJiYgU3RyaW5nKGFzc2V0LnNyYykuc3RhcnRzV2l0aChcImRhdGE6XCIpID8gVVBMT0FEX1RJTUVPVVRfTVMgOiBPUF9USU1FT1VUX01TO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2l0aFRpbWVvdXQoXG4gICAgICAgIGFwaS5hZGRMYXllcihvcC5wcm9qZWN0SWQsIG9wLmNsaWVudEtleSwgb3AubmFtZSwgb3AuZGF0YSwgYXNzZXQpLFxuICAgICAgICB0aW1lb3V0XG4gICAgICApO1xuICAgICAgaWYgKG9wLmNsaWVudElkICE9PSByZXN1bHQubGF5ZXJJZCkgbGF5ZXJJZHMuc2V0KG9wLmNsaWVudElkLCByZXN1bHQubGF5ZXJJZCk7XG4gICAgICBjb25zdCBjbGllbnRBc3NldElkID0gXCJyZWZcIiBpbiBvcC5hc3NldCA/IG9wLmFzc2V0LnJlZiA6IG9wLmFzc2V0LmNsaWVudElkO1xuICAgICAgbWFwQXNzZXRJZChjbGllbnRBc3NldElkLCByZXN1bHQuYXNzZXRJZCk7XG4gICAgICBpZiAocmVzdWx0LnNyYyAmJiBcInNyY1wiIGluIG9wLmFzc2V0KSB7XG4gICAgICAgIHNlZWRBc3NldChjbGllbnRBc3NldElkLCB7XG4gICAgICAgICAgc3JjOiByZXN1bHQuc3JjLFxuICAgICAgICAgIHBhaW50U3JjOiBvcC5hc3NldC5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpID8gb3AuYXNzZXQuc3JjIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiBvcC5hc3NldC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG9wLmFzc2V0LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgc2VlZEFzc2V0KHJlc3VsdC5hc3NldElkLCB7XG4gICAgICAgICAgc3JjOiByZXN1bHQuc3JjLFxuICAgICAgICAgIHBhaW50U3JjOiBvcC5hc3NldC5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpID8gb3AuYXNzZXQuc3JjIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHdpZHRoOiBvcC5hc3NldC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG9wLmFzc2V0LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FzZSBcInVwZGF0ZUxheWVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnVwZGF0ZUxheWVyKHJlc29sdmVMYXllcklkKG9wLmlkKSwgb3AuZGF0YSkpO1xuICAgIGNhc2UgXCJyZXBsYWNlTGF5ZXJBc3NldFwiOiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRTdGF0ZSgpLmRvYz8uaWQgPz8gXCJcIjtcbiAgICAgIGNvbnN0IHJlbW90ZSA9IGF3YWl0IGVuc3VyZVJlbW90ZUFzc2V0KHByb2plY3RJZCwgb3Auc3JjLCBvcC53aWR0aCwgb3AuaGVpZ2h0KTtcbiAgICAgIGlmIChyZW1vdGUuYXNzZXRJZCkge1xuICAgICAgICBtYXBBc3NldElkKG9wLmNsaWVudEFzc2V0SWQsIHJlbW90ZS5hc3NldElkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpdGhUaW1lb3V0KFxuICAgICAgICBhcGkucmVwbGFjZUxheWVyQXNzZXQocmVzb2x2ZUxheWVySWQob3AuaWQpLCByZW1vdGUuc3JjLCBvcC53aWR0aCwgb3AuaGVpZ2h0KSxcbiAgICAgICAgcmVtb3RlLmFzc2V0SWQgPyBPUF9USU1FT1VUX01TIDogVVBMT0FEX1RJTUVPVVRfTVNcbiAgICAgICk7XG4gICAgICBtYXBBc3NldElkKG9wLmNsaWVudEFzc2V0SWQsIHJlc3VsdC5hc3NldElkKTtcbiAgICAgIGNvbnN0IGxvY2FsID0gb3Auc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKTtcbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBsb2NhbCA/IG9wLnNyYyA6IHJlc3VsdC5zcmM7XG4gICAgICBjb25zdCBwYWludFNyYyA9IGxvY2FsID8gb3Auc3JjIDogdW5kZWZpbmVkO1xuICAgICAgc2VlZEFzc2V0KG9wLmNsaWVudEFzc2V0SWQsIHtcbiAgICAgICAgc3JjOiBkaXNwbGF5LFxuICAgICAgICBwYWludFNyYyxcbiAgICAgICAgd2lkdGg6IG9wLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9wLmhlaWdodFxuICAgICAgfSk7XG4gICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgc3JjOiBkaXNwbGF5LFxuICAgICAgICBwYWludFNyYyxcbiAgICAgICAgd2lkdGg6IG9wLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG9wLmhlaWdodFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhc2UgXCJyZW5hbWVMYXllclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5yZW5hbWVMYXllcihyZXNvbHZlTGF5ZXJJZChvcC5pZCksIG9wLm5hbWUpKTtcbiAgICBjYXNlIFwiZGVsZXRlTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkuZGVsZXRlTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpKSk7XG4gICAgY2FzZSBcInNldE9yZGVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnNldExheWVyT3JkZXIob3AucHJvamVjdElkLCBvcC5pZHMubWFwKHJlc29sdmVMYXllcklkKSkpO1xuICAgIGNhc2UgXCJyZW5hbWVQcm9qZWN0XCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnJlbmFtZVByb2plY3Qob3AuaWQsIG9wLm5hbWUpKTtcbiAgICBjYXNlIFwicmVzaXplUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5yZXNpemVQcm9qZWN0KG9wLmlkLCBvcC53aWR0aCwgb3AuaGVpZ2h0KSk7XG4gICAgY2FzZSBcInNldFRodW1iXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnNldFByb2plY3RUaHVtYihvcC5pZCwgb3AudGh1bWIpKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkcmFpbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGRyYWluaW5nKSByZXR1cm47XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgc3luY1N0YXR1cygpO1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3AgPSBxdWV1ZS5zaGlmdCgpITtcbiAgICBsZXQgYXR0ZW1wdCA9IDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBleGVjdXRlKG9wKTtcbiAgICAgICAgaWYgKGF0dGVtcHQgPiAwKSBzeW5jU3RhdHVzKHsgc2F2ZVN0YXR1czogXCJzYXZpbmdcIiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPcFRpbWVvdXQpIHtcbiAgICAgICAgICAvLyBTb2NrZXQgbGlrZWx5IGRpZWQ7IHRoZSB0cmFuc3BvcnQgcmVjb25uZWN0cyBvbiBpdHMgb3duLiBSZXRyeSBmb3JldmVyLlxuICAgICAgICAgIGF0dGVtcHQgKz0gMTtcbiAgICAgICAgICBzeW5jU3RhdHVzKHsgc2F2ZVN0YXR1czogXCJyZXRyeWluZ1wiIH0pO1xuICAgICAgICAgIGF3YWl0IGRlbGF5KE1hdGgubWluKE1BWF9CQUNLT0ZGX01TLCA1MDAgKiAyICoqIE1hdGgubWluKGF0dGVtcHQsIDUpKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKTtcbiAgICAgICAgLy8gXCJub3QgZm91bmRcIiBhZnRlciBhIHJldHJ5IGp1c3QgbWVhbnMgYSBjb21wZXRpbmcgZGVsZXRlIGFscmVhZHkgd29uO1xuICAgICAgICAvLyB0aGUgc3RhdGVzIGhhdmUgY29udmVyZ2VkLCBzbyB0cmVhdCBpdCBhcyBzdWNjZXNzLlxuICAgICAgICBpZiAoIS9ub3QgZm91bmQvaS50ZXN0KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBlcnNpc3Qgb3AgZmFpbGVkLCBkcm9wcGluZzpcIiwgb3Aua2luZCwgbWVzc2FnZSk7XG4gICAgICAgICAgc3luY1N0YXR1cyh7IHNhdmVFcnJvcjogYCR7b3Aua2luZH06ICR7bWVzc2FnZX1gIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHN5bmNTdGF0dXMoKTtcbn1cblxuLy8gRWRpdGluZyBjb21taXRzIGFyZSBlbnF1ZXVlZCBvbiBnZXN0dXJlIGVuZCBhbmQgbm9ybWFsbHkgZmx1c2ggaW5cbi8vIG1pbGxpc2Vjb25kcywgYnV0IHdhcm4gaWYgdGhlIHVzZXIgY2xvc2VzIHRoZSB0YWIgbWlkLXNhdmUuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAocGVuZGluZ0NvdW50KCkgPiAwIHx8IGdldFN0YXRlKCkuc2F2ZVN0YXR1cyAhPT0gXCJzYXZlZFwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiLy8gSW4tbWVtb3J5IGFzc2V0IGNhY2hlLiBMb2NhbGx5IGltcG9ydGVkIGltYWdlcyBhcmUgc2VlZGVkIHdpdGggYSBkYXRhIFVSTFxuLy8gKHBhaW50U3JjKSBmb3IgY2FudmFzIHdvcms7IGFmdGVyIFMzIHVwbG9hZCwgc3JjIGJlY29tZXMgdGhlIENsb3VkRnJvbnQgVVJMXG4vLyB1c2VkIGZvciA8aW1nPiBkaXNwbGF5LiBwYWludFNyYyBpcyBrZXB0IHNvIHRodW1icy9leHBvcnQgd29yayB3aXRob3V0IENPUlMuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IHJlc29sdmVBc3NldElkIH0gZnJvbSBcIi4vcGVyc2lzdFwiO1xuXG5leHBvcnQgdHlwZSBBc3NldEVudHJ5ID0ge1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBTYW1lLW9yaWdpbi9kYXRhIFVSTCBzYWZlIGZvciBjYW52YXMgKHRodW1icywgZXhwb3J0KS4gKi9cbiAgcGFpbnRTcmM/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBlbnRyaWVzID0gbmV3IE1hcDxzdHJpbmcsIEFzc2V0RW50cnk+KCk7XG5jb25zdCBpbmZsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEFzc2V0RW50cnk+PigpO1xuY29uc3QgaW1hZ2VzID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4+KCk7XG5jb25zdCBwYWludEluZmxpZ2h0ID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8QXNzZXRFbnRyeT4+KCk7XG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmZ1bmN0aW9uIG5vdGlmeSgpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBbLi4ubGlzdGVuZXJzXSkgbGlzdGVuZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlZWRBc3NldChpZDogc3RyaW5nLCBlbnRyeTogQXNzZXRFbnRyeSk6IHZvaWQge1xuICBjb25zdCBwcmV2ID0gZW50cmllcy5nZXQoaWQpO1xuICBlbnRyaWVzLnNldChpZCwge1xuICAgIHNyYzogZW50cnkuc3JjLFxuICAgIHdpZHRoOiBlbnRyeS53aWR0aCxcbiAgICBoZWlnaHQ6IGVudHJ5LmhlaWdodCxcbiAgICBwYWludFNyYzogZW50cnkucGFpbnRTcmMgPz8gcHJldj8ucGFpbnRTcmNcbiAgfSk7XG4gIGltYWdlcy5kZWxldGUoaWQpO1xuICBub3RpZnkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzc2V0RW50cnkoaWQ6IHN0cmluZyk6IEFzc2V0RW50cnkgfCBudWxsIHtcbiAgcmV0dXJuIGVudHJpZXMuZ2V0KGlkKSA/PyBlbnRyaWVzLmdldChyZXNvbHZlQXNzZXRJZChpZCkpID8/IG51bGw7XG59XG5cbi8qKiBQcmVmZXIgYSBsb2NhbCBkYXRhIFVSTCBzbyBkaXNwbGF5IGRvZXNuJ3QgZmxhc2ggd2hlbiBhIHJlbW90ZSBVUkwgYXJyaXZlcyBsYXRlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U3JjKGVudHJ5OiBBc3NldEVudHJ5KTogc3RyaW5nIHtcbiAgaWYgKGVudHJ5LnBhaW50U3JjPy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHJldHVybiBlbnRyeS5wYWludFNyYztcbiAgaWYgKGVudHJ5LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHJldHVybiBlbnRyeS5zcmM7XG4gIHJldHVybiBlbnRyeS5wYWludFNyYyB8fCBlbnRyeS5zcmM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBc3NldChpZDogc3RyaW5nKTogUHJvbWlzZTxBc3NldEVudHJ5PiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0QXNzZXRFbnRyeShpZCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGlzdGluZyk7XG4gIGNvbnN0IHBlbmRpbmcgPSBpbmZsaWdodC5nZXQoaWQpO1xuICBpZiAocGVuZGluZykgcmV0dXJuIHBlbmRpbmc7XG5cbiAgY29uc3QgcHJvbWlzZSA9IGFwaVxuICAgIC5nZXRBc3NldChyZXNvbHZlQXNzZXRJZChpZCkpXG4gICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgIGNvbnN0IHByZXYgPSBlbnRyaWVzLmdldChpZCk7XG4gICAgICBjb25zdCBlbnRyeTogQXNzZXRFbnRyeSA9IHtcbiAgICAgICAgc3JjOiBwYXlsb2FkLnNyYyxcbiAgICAgICAgd2lkdGg6IHBheWxvYWQud2lkdGgsXG4gICAgICAgIGhlaWdodDogcGF5bG9hZC5oZWlnaHQsXG4gICAgICAgIHBhaW50U3JjOiBwcmV2Py5wYWludFNyY1xuICAgICAgfTtcbiAgICAgIGVudHJpZXMuc2V0KGlkLCBlbnRyeSk7XG4gICAgICBub3RpZnkoKTtcbiAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGluZmxpZ2h0LmRlbGV0ZShpZCk7XG4gICAgfSk7XG4gIGluZmxpZ2h0LnNldChpZCwgcHJvbWlzZSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBwYWludFVybChlbnRyeTogQXNzZXRFbnRyeSk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRyeS5wYWludFNyYyB8fCBlbnRyeS5zcmM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGVuc3VyZVBhaW50QXNzZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8QXNzZXRFbnRyeT4ge1xuICBjb25zdCBlbnRyeSA9IGF3YWl0IGVuc3VyZUFzc2V0KGlkKTtcbiAgaWYgKGVudHJ5LnBhaW50U3JjIHx8IGVudHJ5LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHJldHVybiBlbnRyeTtcbiAgY29uc3QgZXhpc3RpbmcgPSBwYWludEluZmxpZ2h0LmdldChpZCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuIGV4aXN0aW5nO1xuICBjb25zdCBwcm9taXNlID0gYXBpLmdldEFzc2V0UGFpbnQocmVzb2x2ZUFzc2V0SWQoaWQpKS50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IGdldEFzc2V0RW50cnkoaWQpID8/IGVudHJ5O1xuICAgIGNvbnN0IG5leHQgPSB7IC4uLmN1cnJlbnQsIHBhaW50U3JjOiBwYXlsb2FkLnNyYyB9O1xuICAgIGVudHJpZXMuc2V0KGlkLCBuZXh0KTtcbiAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVBc3NldElkKGlkKTtcbiAgICBpZiAocmVzb2x2ZWQgIT09IGlkKSBlbnRyaWVzLnNldChyZXNvbHZlZCwgbmV4dCk7XG4gICAgbm90aWZ5KCk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH0pLmZpbmFsbHkoKCkgPT4gcGFpbnRJbmZsaWdodC5kZWxldGUoaWQpKTtcbiAgcGFpbnRJbmZsaWdodC5zZXQoaWQsIHByb21pc2UpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqIERlY29kZWQgaW1hZ2UgZWxlbWVudCBmb3IgY2FudmFzIHJlbmRlcmluZyAoZXhwb3J0LCB0aHVtYm5haWxzKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2UoaWQ6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICBjb25zdCBjYWNoZWQgPSBpbWFnZXMuZ2V0KGlkKTtcbiAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZDtcbiAgY29uc3QgcHJvbWlzZSA9IGVuc3VyZVBhaW50QXNzZXQoaWQpLnRoZW4oXG4gICAgKGVudHJ5KSA9PlxuICAgICAgbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzcmMgPSBwYWludFVybChlbnRyeSk7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvLyBSZW1vdGUgVVJMcyBuZWVkIENPUlMgZm9yIGNhbnZhczsgZGF0YSBVUkxzIGRvIG5vdC5cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgfVxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVjb2RlIGltYWdlXCIpKTtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgIH0pXG4gICk7XG4gIGltYWdlcy5zZXQoaWQsIHByb21pc2UpO1xuICBwcm9taXNlLmNhdGNoKCgpID0+IGltYWdlcy5kZWxldGUoaWQpKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKiBEZWNvZGUgYSBkYXRhIFVSTCAvIGltYWdlIFVSTCBzbyBzd2FwcGluZyBhbiA8aW1nPiBzcmMgd29uJ3QgYmxhbmsgYSBmcmFtZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTcmMoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGlmICh0eXBlb2YgaW1nLmRlY29kZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGltZy5kZWNvZGUoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgaWYgKGltZy5jb21wbGV0ZSkgcmVzb2x2ZSgpO1xuICB9KTtcbn1cblxuLyoqIENvbXBvbmVudCBob29rOiByZXR1cm5zIHRoZSBhc3NldCBvbmNlIGF2YWlsYWJsZSwga2lja2luZyBvZmYgYSBmZXRjaC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3NldEVudHJ5KGlkOiBzdHJpbmcpOiBBc3NldEVudHJ5IHwgbnVsbCB7XG4gIGNvbnN0IFssIHNldFZlcnNpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHNldFZlcnNpb24oKHZhbHVlKSA9PiB2YWx1ZSArIDEpO1xuICAgIGNoZWNrKCk7XG4gICAgbGlzdGVuZXJzLmFkZChjaGVjayk7XG4gICAgZW5zdXJlQXNzZXQoaWQpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkFzc2V0IGxvYWQgZmFpbGVkOlwiLCBlcnJvcikpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsaXN0ZW5lcnMuZGVsZXRlKGNoZWNrKTtcbiAgICB9O1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gZ2V0QXNzZXRFbnRyeShpZCk7XG59XG4iLCAiLy8gRmxhdHRlbiBhIGRvY3VtZW50IHRvIGEgY2FudmFzOiB1c2VkIGZvciBQTkcgZXhwb3J0IGFuZCBwcm9qZWN0IHRodW1ibmFpbHMuXG5cbmltcG9ydCB0eXBlIHsgUHJvamVjdERvYyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGVuc3VyZUFzc2V0LCBsb2FkSW1hZ2UgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBjb21wYWN0VGh1bWJEYXRhVXJsLCBNQVhfSU5MSU5FX1NSQ19CWVRFUyB9IGZyb20gXCIuLi9zdGF0ZS91cGxvYWRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckRvY1RvQ2FudmFzKGRvYzogUHJvamVjdERvYywgc2NhbGU6IG51bWJlcik6IFByb21pc2U8SFRNTENhbnZhc0VsZW1lbnQ+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChkb2Mud2lkdGggKiBzY2FsZSkpO1xuICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChkb2MuaGVpZ2h0ICogc2NhbGUpKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcblxuICBjb25zdCB2aXNpYmxlID0gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBsYXllci52aXNpYmxlICYmIGxheWVyLm9wYWNpdHkgPiAwKTtcbiAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgdmlzaWJsZS5tYXAoKGxheWVyKSA9PiBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCkuY2F0Y2goKCkgPT4gbnVsbCkpXG4gICk7XG5cbiAgY3R4LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IFwiaGlnaFwiO1xuICB2aXNpYmxlLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgY29uc3QgaW1nID0gaW1hZ2VzW2ldO1xuICAgIGlmICghaW1nKSByZXR1cm47XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5O1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsYXllci5ibGVuZE1vZGUgYXMgR2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uO1xuICAgIGN0eC50cmFuc2xhdGUoKGxheWVyLnggKyBsYXllci53IC8gMikgKiBzY2FsZSwgKGxheWVyLnkgKyBsYXllci5oIC8gMikgKiBzY2FsZSk7XG4gICAgY3R4LnJvdGF0ZSgobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgKC1sYXllci53IC8gMikgKiBzY2FsZSwgKC1sYXllci5oIC8gMikgKiBzY2FsZSwgbGF5ZXIudyAqIHNjYWxlLCBsYXllci5oICogc2NhbGUpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0pO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRQbmcoZG9jOiBQcm9qZWN0RG9jKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGNhbnZhcyA9IGF3YWl0IHJlbmRlckRvY1RvQ2FudmFzKGRvYywgMSk7XG4gIGNvbnN0IHVybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5ocmVmID0gdXJsO1xuICBsaW5rLmRvd25sb2FkID0gYCR7ZG9jLm5hbWUgfHwgXCJpbWFnZVwifS5wbmdgO1xuICBsaW5rLmNsaWNrKCk7XG59XG5cbmNvbnN0IFRIVU1CX01BWCA9IDM2MDtcblxuYXN5bmMgZnVuY3Rpb24gZmlyc3RMYXllclNyYyhkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgZm9yIChjb25zdCBsYXllciBvZiBkb2MubGF5ZXJzKSB7XG4gICAgaWYgKCFsYXllci52aXNpYmxlIHx8IGxheWVyLm9wYWNpdHkgPD0gMCkgY29udGludWU7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCBlbnN1cmVBc3NldChsYXllci5hc3NldElkKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgICAvLyBQcmVmZXIgc2hvcnQgVVJMcyBcdTIwMTQgZGF0YSBVUkxzIC8gaHVnZSByZW1vdGVzIHdvbid0IGZpdCBpbiB0aGUgdGh1bWIgY29sdW1uLlxuICAgIGlmIChlbnRyeT8uc3JjICYmIGVudHJ5LnNyYy5sZW5ndGggPD0gTUFYX0lOTElORV9TUkNfQllURVMpIHJldHVybiBlbnRyeS5zcmM7XG4gICAgaWYgKGVudHJ5Py5zcmM/LnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm4gZW50cnkuc3JjO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGh1bWIoZG9jOiBQcm9qZWN0RG9jKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdmlzaWJsZSA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSAmJiBsYXllci5vcGFjaXR5ID4gMCk7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgVEhVTUJfTUFYIC8gTWF0aC5tYXgoZG9jLndpZHRoLCBkb2MuaGVpZ2h0KSk7XG5cbiAgaWYgKHZpc2libGUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgdmlzaWJsZS5tYXAoKGxheWVyKSA9PiBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCkudGhlbigoKSA9PiB0cnVlKS5jYXRjaCgoKSA9PiBmYWxzZSkpXG4gICAgKTtcbiAgICBpZiAobG9hZGVkLmV2ZXJ5KChvaykgPT4gIW9rKSkge1xuICAgICAgY29uc3QgZmFsbGJhY2sgPSBhd2FpdCBmaXJzdExheWVyU3JjKGRvYyk7XG4gICAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZW5kZXIgdGh1bWJuYWlsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCBzY2FsZSk7XG4gICAgcmV0dXJuIGNvbXBhY3RUaHVtYkRhdGFVcmwoY2FudmFzKTtcbiAgfSBjYXRjaCB7XG4gICAgY29uc3QgZmFsbGJhY2sgPSBhd2FpdCBmaXJzdExheWVyU3JjKGRvYyk7XG4gICAgaWYgKGZhbGxiYWNrKSByZXR1cm4gZmFsbGJhY2s7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlbmRlciB0aHVtYm5haWxcIik7XG4gIH1cbn1cbiIsICIvLyBDb29yZGluYXRlcyBjbGVhcmluZyB0aGUgbGl2ZSBicnVzaCBvdmVybGF5IG9ubHkgYWZ0ZXIgdGhlIGNvbW1pdHRlZCBsYXllclxuLy8gYml0bWFwIGlzIG9uIHNjcmVlbiBcdTIwMTQgYW5kIG5ldmVyIHdoaWxlIHRoZSB1c2VyIGlzIG1pZC1zdHJva2UuXG5cbmxldCBjbGVhck92ZXJsYXk6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xubGV0IHBlbmRpbmdTcmM6IHN0cmluZyB8IG51bGwgPSBudWxsO1xubGV0IGdlc3R1cmVBY3RpdmUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQnJ1c2hPdmVybGF5Q2xlYXIoZm46ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgY2xlYXJPdmVybGF5ID0gZm47XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKGNsZWFyT3ZlcmxheSA9PT0gZm4pIGNsZWFyT3ZlcmxheSA9IG51bGw7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcm1CcnVzaE92ZXJsYXlDbGVhcihzcmM6IHN0cmluZyk6IHZvaWQge1xuICBwZW5kaW5nU3JjID0gc3JjO1xufVxuXG4vKiogU3RhcnQgYSBsaXZlIHN0cm9rZTogY2FuY2VsIGFueSBkZWZlcnJlZCBjbGVhciBhbmQgd2lwZSB0aGUgb3ZlcmxheSBmaXJzdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZWdpbkJydXNoR2VzdHVyZSgpOiB2b2lkIHtcbiAgcGVuZGluZ1NyYyA9IG51bGw7XG4gIGdlc3R1cmVBY3RpdmUgPSB0cnVlO1xuICBjbGVhck92ZXJsYXk/LigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kQnJ1c2hHZXN0dXJlKCk6IHZvaWQge1xuICBnZXN0dXJlQWN0aXZlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRyeUNsZWFyT3ZlcmxheSgpOiB2b2lkIHtcbiAgLy8gTmV2ZXIgd2lwZSB0aGUgY2FudmFzIHdoaWxlIHRoZSB1c2VyIGlzIGRyYXdpbmcgXHUyMDE0IHRoYXQgZHJvcHMgdGhlIHN0YXJ0IG9mXG4gIC8vIHRoZSBuZXcgc3Ryb2tlIHdoZW4gYSBwcmV2aW91cyBjb21taXQgZmluYWxseSBsYW5kcyBvbiB0aGUgbGF5ZXIuXG4gIGlmIChnZXN0dXJlQWN0aXZlKSB7XG4gICAgcGVuZGluZ1NyYyA9IG51bGw7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNsZWFyT3ZlcmxheT8uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3RlTGF5ZXJTcmNQcmVzZW50ZWQoc3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFwZW5kaW5nU3JjIHx8IHNyYyAhPT0gcGVuZGluZ1NyYykgcmV0dXJuO1xuICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgdHJ5Q2xlYXJPdmVybGF5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckJydXNoT3ZlcmxheU5vdygpOiB2b2lkIHtcbiAgcGVuZGluZ1NyYyA9IG51bGw7XG4gIHRyeUNsZWFyT3ZlcmxheSgpO1xufVxuIiwgIi8vIENvbW1hbmQtYmFzZWQgdW5kby9yZWRvLiBFYWNoIGVudHJ5IG93bnMgY2xvc3VyZXMgdGhhdCByZS1hcHBseSBvciByZXZlcnQgYVxuLy8gY2hhbmdlIHRocm91Z2ggdGhlIHNhbWUgYWN0aW9uIHBhdGhzIHRoYXQgbWFkZSBpdCwgc28gdW5kby9yZWRvIGFsc29cbi8vIHBlcnNpc3RzIChhbmQgc3RheXMgb3B0aW1pc3RpYykgbGlrZSBhbnkgb3RoZXIgZWRpdC5cblxuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgSGlzdG9yeUVudHJ5ID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB1bmRvOiAoKSA9PiB2b2lkO1xuICByZWRvOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgTElNSVQgPSAxMDA7XG5cbmxldCB1bmRvU3RhY2s6IEhpc3RvcnlFbnRyeVtdID0gW107XG5sZXQgcmVkb1N0YWNrOiBIaXN0b3J5RW50cnlbXSA9IFtdO1xuXG5mdW5jdGlvbiBidW1wKCk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IGhpc3RWZXJzaW9uOiBnZXRTdGF0ZSgpLmhpc3RWZXJzaW9uICsgMSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hIaXN0b3J5KGVudHJ5OiBIaXN0b3J5RW50cnkpOiB2b2lkIHtcbiAgdW5kb1N0YWNrLnB1c2goZW50cnkpO1xuICBpZiAodW5kb1N0YWNrLmxlbmd0aCA+IExJTUlUKSB1bmRvU3RhY2suc2hpZnQoKTtcbiAgcmVkb1N0YWNrID0gW107XG4gIGJ1bXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SGlzdG9yeSgpOiB2b2lkIHtcbiAgdW5kb1N0YWNrID0gW107XG4gIHJlZG9TdGFjayA9IFtdO1xuICBidW1wKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5VbmRvKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdW5kb1N0YWNrLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5SZWRvKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVkb1N0YWNrLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRvKCk6IHZvaWQge1xuICBjb25zdCBlbnRyeSA9IHVuZG9TdGFjay5wb3AoKTtcbiAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICBlbnRyeS51bmRvKCk7XG4gIHJlZG9TdGFjay5wdXNoKGVudHJ5KTtcbiAgYnVtcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkbygpOiB2b2lkIHtcbiAgY29uc3QgZW50cnkgPSByZWRvU3RhY2sucG9wKCk7XG4gIGlmICghZW50cnkpIHJldHVybjtcbiAgZW50cnkucmVkbygpO1xuICB1bmRvU3RhY2sucHVzaChlbnRyeSk7XG4gIGJ1bXAoKTtcbn1cbiIsICIvLyBFdmVyeSBlZGl0IGZsb3dzIHRocm91Z2ggaGVyZTogYXBwbHkgdG8gdGhlIGxvY2FsIGRvYyBzeW5jaHJvbm91c2x5IChpbnN0YW50XG4vLyBVSSksIHJlY29yZCBhbiB1bmRvL3JlZG8gZW50cnksIGFuZCBlbnF1ZXVlIGJhY2tncm91bmQgcGVyc2lzdGVuY2UuIEdlc3R1cmVzXG4vLyB1c2UgdGhlIHRyYW5zaWVudCBwYXRoIGF0IHBvaW50ZXItbW92ZSByYXRlIGFuZCBjb21taXQgb25jZSBvbiByZWxlYXNlLlxuXG5pbXBvcnQge1xuICB0eXBlIEJsZW5kTW9kZSxcbiAgZGVjb2RlVHJhbnNmb3JtLFxuICBlbmNvZGVUcmFuc2Zvcm0sXG4gIE1BWF9QUk9KRUNUX0RJTSxcbiAgdHlwZSBMYXllcixcbiAgdHlwZSBUZXh0TGF5ZXJEYXRhLFxuICB0eXBlIExheWVyUm93LFxuICB0eXBlIExheWVyVHJhbnNmb3JtLFxuICB0eXBlIFByb2plY3REb2MsXG4gIHR5cGUgUHJvamVjdE1ldGFcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgbGF5ZXJBYWJiIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9nZW9tZXRyeVwiO1xuaW1wb3J0IHsgcmVuZGVyVGh1bWIgfSBmcm9tIFwiLi4vbGliL3JlbmRlclwiO1xuaW1wb3J0IHsgZ2V0QXNzZXRFbnRyeSwgbG9hZEltYWdlLCBzZWVkQXNzZXQsIGRlY29kZVNyYyB9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHsgYXJtQnJ1c2hPdmVybGF5Q2xlYXIsIGNsZWFyQnJ1c2hPdmVybGF5Tm93IH0gZnJvbSBcIi4vYnJ1c2hPdmVybGF5XCI7XG5pbXBvcnQgeyBwdXNoSGlzdG9yeSwgcmVzZXRIaXN0b3J5IH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuaW1wb3J0IHsgZW5xdWV1ZSwgbmV3Q2xpZW50SWQgfSBmcm9tIFwiLi9wZXJzaXN0XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVwZGF0ZURvYyB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmV4cG9ydCB0eXBlIEltcG9ydGVkSW1hZ2UgPSB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1QYXRjaCA9IFBhcnRpYWw8TGF5ZXJUcmFuc2Zvcm0+O1xuXG5jb25zdCBUUkFOU0lFTlRfUEVSU0lTVF9NUyA9IDMwMDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQcm9qZWN0IGxpZmVjeWNsZVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3QobWV0YTogUHJvamVjdE1ldGEsIHJvd3M6IExheWVyUm93W10pOiB2b2lkIHtcbiAgY29uc3QgYnlJZCA9IG5ldyBNYXAocm93cy5tYXAoKHJvdykgPT4gW3Jvdy5pZCwgcm93XSkpO1xuICBjb25zdCBsYXllcnM6IExheWVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChyb3c6IExheWVyUm93KSA9PiB7XG4gICAgbGF5ZXJzLnB1c2goe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIGFzc2V0SWQ6IHJvdy5hc3NldElkLFxuICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAuLi5kZWNvZGVUcmFuc2Zvcm0ocm93LmRhdGEpXG4gICAgfSk7XG4gIH07XG4gIGZvciAoY29uc3QgaWQgb2YgbWV0YS5sYXllck9yZGVyKSB7XG4gICAgY29uc3Qgcm93ID0gYnlJZC5nZXQoaWQpO1xuICAgIGlmIChyb3cpIHtcbiAgICAgIHB1c2gocm93KTtcbiAgICAgIGJ5SWQuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCByb3cgb2YgYnlJZC52YWx1ZXMoKSkgcHVzaChyb3cpO1xuXG4gIHNldFN0YXRlKHtcbiAgICBkb2M6IHsgaWQ6IG1ldGEuaWQsIG5hbWU6IG1ldGEubmFtZSwgd2lkdGg6IG1ldGEud2lkdGgsIGhlaWdodDogbWV0YS5oZWlnaHQsIGxheWVycyB9LFxuICAgIHNlbGVjdGlvbjogW10sXG4gICAgc2F2ZUVycm9yOiBudWxsXG4gIH0pO1xuICByZXNldEhpc3RvcnkoKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdCgpOiB2b2lkIHtcbiAgc2V0U3RhdGUoeyBkb2M6IG51bGwsIHNlbGVjdGlvbjogW10sIHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCwgc25hcEd1aWRlczogbnVsbCwgYmxlbmRQcmV2aWV3OiBudWxsLCB0ZXh0RWRpdGluZzogbnVsbCB9KTtcbiAgcmVzZXRIaXN0b3J5KCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VsZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24oaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IHNlbGVjdGlvbjogaWRzIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2VsZWN0ZWQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5zZWxlY3Rpb247XG4gIHNldFNlbGVjdGlvbihjdXJyZW50LmluY2x1ZGVzKGlkKSA/IGN1cnJlbnQuZmlsdGVyKChzKSA9PiBzICE9PSBpZCkgOiBbLi4uY3VycmVudCwgaWRdKTtcbn1cblxuZnVuY3Rpb24gcHJ1bmVTZWxlY3Rpb24ocmVtb3ZlZDogU2V0PHN0cmluZz4pOiB2b2lkIHtcbiAgc2V0U3RhdGUoeyBzZWxlY3Rpb246IGdldFN0YXRlKCkuc2VsZWN0aW9uLmZpbHRlcigoaWQpID0+ICFyZW1vdmVkLmhhcyhpZCkpIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRyYW5zZm9ybSBlZGl0c1xuXG5mdW5jdGlvbiBwYXRjaERvY0xheWVycyhwYXRjaGVzOiBSZWFkb25seU1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPik6IHZvaWQge1xuICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAuLi5kb2MsXG4gICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IHBhdGNoID0gcGF0Y2hlcy5nZXQobGF5ZXIuaWQpO1xuICAgICAgcmV0dXJuIHBhdGNoID8geyAuLi5sYXllciwgLi4ucGF0Y2ggfSA6IGxheWVyO1xuICAgIH0pXG4gIH0pKTtcbn1cblxuY29uc3QgdHJhbnNpZW50VGltZXJzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuZnVuY3Rpb24gcGVyc2lzdExheWVyTm93KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgdGltZXIgPSB0cmFuc2llbnRUaW1lcnMuZ2V0KGlkKTtcbiAgaWYgKHRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRyYW5zaWVudFRpbWVycy5kZWxldGUoaWQpO1xuICB9XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllcikgfSk7XG59XG5cbmZ1bmN0aW9uIHBlcnNpc3RMYXllclRocm90dGxlZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGlmICh0cmFuc2llbnRUaW1lcnMuaGFzKGlkKSkgcmV0dXJuO1xuICB0cmFuc2llbnRUaW1lcnMuc2V0KFxuICAgIGlkLFxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyYW5zaWVudFRpbWVycy5kZWxldGUoaWQpO1xuICAgICAgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgICB9LCBUUkFOU0lFTlRfUEVSU0lTVF9NUylcbiAgKTtcbn1cblxuLyoqIEhpZ2gtZnJlcXVlbmN5IGdlc3R1cmUgdXBkYXRlczogbG9jYWwgYXBwbHkgKyB0aHJvdHRsZWQgcGVyc2lzdCwgbm8gaGlzdG9yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRyYW5zaWVudChwYXRjaGVzOiBSZWFkb25seU1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPik6IHZvaWQge1xuICBwYXRjaERvY0xheWVycyhwYXRjaGVzKTtcbiAgZm9yIChjb25zdCBpZCBvZiBwYXRjaGVzLmtleXMoKSkgcGVyc2lzdExheWVyVGhyb3R0bGVkKGlkKTtcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtQ2hhbmdlID0geyBpZDogc3RyaW5nOyBiZWZvcmU6IFRyYW5zZm9ybVBhdGNoOyBhZnRlcjogVHJhbnNmb3JtUGF0Y2ggfTtcblxuZnVuY3Rpb24gYXBwbHlBbmRQZXJzaXN0KGVudHJpZXM6IEFycmF5PHsgaWQ6IHN0cmluZzsgcGF0Y2g6IFRyYW5zZm9ybVBhdGNoIH0+KTogdm9pZCB7XG4gIHBhdGNoRG9jTGF5ZXJzKG5ldyBNYXAoZW50cmllcy5tYXAoKGUpID0+IFtlLmlkLCBlLnBhdGNoXSkpKTtcbiAgZm9yIChjb25zdCB7IGlkIH0gb2YgZW50cmllcykgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuLyoqIEZpbmFsaXplIGFuIGVkaXQ6IGFwcGx5IHRoZSBlbmQgc3RhdGUsIHBlcnNpc3Qgbm93LCBhbmQgcmVjb3JkIGhpc3RvcnkuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0VHJhbnNmb3JtcyhsYWJlbDogc3RyaW5nLCBjaGFuZ2VzOiBUcmFuc2Zvcm1DaGFuZ2VbXSk6IHZvaWQge1xuICBjb25zdCByZWFsID0gY2hhbmdlcy5maWx0ZXIoKGMpID0+ICFzaGFsbG93RXF1YWxQYXRjaChjLmJlZm9yZSwgYy5hZnRlcikpO1xuICBpZiAocmVhbC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIGFjdHVhbGx5IGNoYW5nZWQgKGUuZy4gYSBjbGljayB3aXRob3V0IGEgZHJhZyk7IHN0aWxsIGZsdXNoIGFueVxuICAgIC8vIHRocm90dGxlZCB0cmFuc2llbnQgd3JpdGVzIHNvIGxvY2FsIGFuZCBzZXJ2ZXIgc3RhdGUgbWF0Y2guXG4gICAgZm9yIChjb25zdCB7IGlkIH0gb2YgY2hhbmdlcykgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYWZ0ZXIgfSkpKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsLFxuICAgIHVuZG86ICgpID0+IGFwcGx5QW5kUGVyc2lzdChyZWFsLm1hcCgoYykgPT4gKHsgaWQ6IGMuaWQsIHBhdGNoOiBjLmJlZm9yZSB9KSkpLFxuICAgIHJlZG86ICgpID0+IGFwcGx5QW5kUGVyc2lzdChyZWFsLm1hcCgoYykgPT4gKHsgaWQ6IGMuaWQsIHBhdGNoOiBjLmFmdGVyIH0pKSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbFBhdGNoKGE6IFRyYW5zZm9ybVBhdGNoLCBiOiBUcmFuc2Zvcm1QYXRjaCk6IGJvb2xlYW4ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoYSksIC4uLk9iamVjdC5rZXlzKGIpXSBhcyBBcnJheTxrZXlvZiBMYXllclRyYW5zZm9ybT4pO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKCFPYmplY3QuaXMoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudWRnZVNlbGVjdGlvbihkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgY2hhbmdlczogVHJhbnNmb3JtQ2hhbmdlW10gPSBbXTtcbiAgZm9yIChjb25zdCBsYXllciBvZiBkb2MubGF5ZXJzKSB7XG4gICAgaWYgKHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpIHtcbiAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgYmVmb3JlOiB7IHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSxcbiAgICAgICAgYWZ0ZXI6IHsgeDogbGF5ZXIueCArIGR4LCB5OiBsYXllci55ICsgZHkgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNvbW1pdFRyYW5zZm9ybXMoXCJOdWRnZVwiLCBjaGFuZ2VzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVZpc2libGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gaWQpO1xuICBpZiAoIWxheWVyKSByZXR1cm47XG4gIGNvbW1pdFRyYW5zZm9ybXMobGF5ZXIudmlzaWJsZSA/IFwiSGlkZSBsYXllclwiIDogXCJTaG93IGxheWVyXCIsIFtcbiAgICB7IGlkLCBiZWZvcmU6IHsgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSB9LCBhZnRlcjogeyB2aXNpYmxlOiAhbGF5ZXIudmlzaWJsZSB9IH1cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCgpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29tbWl0VHJhbnNmb3JtcyhcIkZsaXAgaG9yaXpvbnRhbFwiLCBkb2MubGF5ZXJzXG4gICAgLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpXG4gICAgLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgYmVmb3JlOiB7IGZsaXBYOiBsYXllci5mbGlwWCB9LCBhZnRlcjogeyBmbGlwWDogIWxheWVyLmZsaXBYIH0gfSkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbkJsZW5kTW9kZShibGVuZE1vZGU6IEJsZW5kTW9kZSk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb21taXRUcmFuc2Zvcm1zKFwiQmxlbmQgbW9kZVwiLCBkb2MubGF5ZXJzXG4gICAgLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpXG4gICAgLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgYmVmb3JlOiB7IGJsZW5kTW9kZTogbGF5ZXIuYmxlbmRNb2RlIH0sIGFmdGVyOiB7IGJsZW5kTW9kZSB9IH0pKSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3RydWN0dXJhbCBlZGl0cyAoYWRkIC8gZGVsZXRlIC8gZHVwbGljYXRlIC8gcmVvcmRlcilcblxudHlwZSBQbGFjZWRMYXllciA9IHsgbGF5ZXI6IExheWVyOyBpbmRleDogbnVtYmVyIH07XG5cbi8qKiBJbnNlcnQgbGF5ZXJzIGFuZCBlbnF1ZXVlIHRoZWlyIGNyZWF0aW9uLiBObyBoaXN0b3J5IFx1MjAxNCBjYWxsZXJzIHJlY29yZCBpdC4gKi9cbmZ1bmN0aW9uIHJhd0luc2VydExheWVycyhpdGVtczogUGxhY2VkTGF5ZXJbXSk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3Qgc29ydGVkID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIGNvbnN0IGxheWVycyA9IFsuLi5kb2MubGF5ZXJzXTtcbiAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkge1xuICAgIGxheWVycy5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIGxheWVycy5sZW5ndGgpLCAwLCBsYXllcik7XG4gIH1cbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnMgfSkpO1xuXG4gIGxldCBuZWVkc09yZGVyID0gZmFsc2U7XG4gIGZvciAoY29uc3QgeyBsYXllciwgaW5kZXggfSBvZiBzb3J0ZWQpIHtcbiAgICBlbnF1ZXVlKHtcbiAgICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICAgIHByb2plY3RJZDogZG9jLmlkLFxuICAgICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgICAgLy8gRnJlc2gga2V5IHBlciBhdHRlbXB0OiBhIHJlZG8gb2YgdGhlIHNhbWUgbGF5ZXIgaXMgYSBuZXcgaW5zZXJ0LlxuICAgICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgICAgYXNzZXQ6IHsgcmVmOiBsYXllci5hc3NldElkIH1cbiAgICB9KTtcbiAgICBpZiAoaW5kZXggPCBsYXllcnMubGVuZ3RoIC0gMSkgbmVlZHNPcmRlciA9IHRydWU7XG4gIH1cbiAgLy8gVGhlIHNlcnZlciBhcHBlbmRzIG5ldyBsYXllcnM7IHJlc3RvcmUgbWlkLXN0YWNrIHBvc2l0aW9ucyBleHBsaWNpdGx5LlxuICBpZiAobmVlZHNPcmRlcikge1xuICAgIGVucXVldWUoeyBraW5kOiBcInNldE9yZGVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBpZHM6IGxheWVycy5tYXAoKGwpID0+IGwuaWQpIH0pO1xuICB9XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbmZ1bmN0aW9uIHJhd0RlbGV0ZUxheWVycyhpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCByZW1vdmVkID0gbmV3IFNldChpZHMpO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogZC5sYXllcnMuZmlsdGVyKChsKSA9PiAhcmVtb3ZlZC5oYXMobC5pZCkpIH0pKTtcbiAgcHJ1bmVTZWxlY3Rpb24ocmVtb3ZlZCk7XG4gIGZvciAoY29uc3QgaWQgb2YgaWRzKSBlbnF1ZXVlKHsga2luZDogXCJkZWxldGVMYXllclwiLCBpZCB9KTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVBsYWNlbWVudChkb2M6IFByb2plY3REb2MsIGlkczogc3RyaW5nW10pOiBQbGFjZWRMYXllcltdIHtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBbXTtcbiAgZG9jLmxheWVycy5mb3JFYWNoKChsYXllciwgaW5kZXgpID0+IHtcbiAgICBpZiAoaWRzLmluY2x1ZGVzKGxheWVyLmlkKSkgaXRlbXMucHVzaCh7IGxheWVyLCBpbmRleCB9KTtcbiAgfSk7XG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBpdGVtcyA9IGNhcHR1cmVQbGFjZW1lbnQoZG9jLCBzZWxlY3Rpb24pO1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIHJhd0RlbGV0ZUxheWVycyhpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiRGVsZXRlIGxheWVyXCIsXG4gICAgdW5kbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH0sXG4gICAgcmVkbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcylcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVTZWxlY3Rpb24oKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3Qgc291cmNlID0gY2FwdHVyZVBsYWNlbWVudChkb2MsIHNlbGVjdGlvbik7XG4gIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zOiBQbGFjZWRMYXllcltdID0gc291cmNlLm1hcCgoeyBsYXllciB9LCBpKSA9PiAoe1xuICAgIGxheWVyOiB7XG4gICAgICAuLi5sYXllcixcbiAgICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgICAgbmFtZTogYCR7bGF5ZXIubmFtZX0gY29weWAsXG4gICAgICB4OiBsYXllci54ICsgMjAsXG4gICAgICB5OiBsYXllci55ICsgMjBcbiAgICB9LFxuICAgIC8vIFBsYWNlIGR1cGxpY2F0ZXMgdG9nZXRoZXIgYWJvdmUgdGhlIHRvcG1vc3Qgc291cmNlIGxheWVyLlxuICAgIGluZGV4OiBzb3VyY2Vbc291cmNlLmxlbmd0aCAtIDFdLmluZGV4ICsgMSArIGlcbiAgfSkpO1xuICBjb25zdCBpZHMgPSBpdGVtcy5tYXAoKGkpID0+IGkubGF5ZXIuaWQpO1xuICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkR1cGxpY2F0ZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIHJlZG86ICgpID0+IHtcbiAgICAgIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gICAgICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5sZXQgY2xpcGJvYXJkOiBMYXllcltdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5U2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjbGlwYm9hcmQgPSBkb2MubGF5ZXJzLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpLm1hcCgobGF5ZXIpID0+ICh7IC4uLmxheWVyIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29weVNlbGVjdGlvbigpO1xuICBkZWxldGVTZWxlY3Rpb24oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlQ2xpcGJvYXJkKCk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MgfHwgY2xpcGJvYXJkLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBpdGVtcyA9IGNsaXBib2FyZC5tYXAoKGxheWVyLCBpKSA9PiAoe1xuICAgIGxheWVyOiB7IC4uLmxheWVyLCBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSwgbmFtZTogYCR7bGF5ZXIubmFtZX0gY29weWAsIHg6IGxheWVyLnggKyAyMCwgeTogbGF5ZXIueSArIDIwIH0sXG4gICAgaW5kZXg6IGRvYy5sYXllcnMubGVuZ3RoICsgaVxuICB9KSk7XG4gIGNsaXBib2FyZCA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbS5sYXllciB9KSk7XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5sYXllci5pZCk7XG4gIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiUGFzdGVcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKSxcbiAgICByZWRvOiAoKSA9PiB7IHJhd0luc2VydExheWVycyhpdGVtcyk7IHNldFNlbGVjdGlvbihpZHMpOyB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1hZ2VMYXllcnMoaW1hZ2VzOiBJbXBvcnRlZEltYWdlW10sIGF0PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zOiBQbGFjZWRMYXllcltdID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IHtcbiAgICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgICBzZWVkQXNzZXQoYXNzZXRJZCwge1xuICAgICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgICBwYWludFNyYzogaW1hZ2Uuc3JjLFxuICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHRcbiAgICB9KTtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIChkb2Mud2lkdGggKiAwLjkpIC8gaW1hZ2Uud2lkdGgsIChkb2MuaGVpZ2h0ICogMC45KSAvIGltYWdlLmhlaWdodCk7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KDEsIGltYWdlLndpZHRoICogc2NhbGUpO1xuICAgIGNvbnN0IGggPSBNYXRoLm1heCgxLCBpbWFnZS5oZWlnaHQgKiBzY2FsZSk7XG4gICAgY29uc3QgY3ggPSAoYXQ/LnggPz8gZG9jLndpZHRoIC8gMikgKyBpICogMjQ7XG4gICAgY29uc3QgY3kgPSAoYXQ/LnkgPz8gZG9jLmhlaWdodCAvIDIpICsgaSAqIDI0O1xuICAgIHJldHVybiB7XG4gICAgICBsYXllcjoge1xuICAgICAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSxcbiAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgbmFtZTogaW1hZ2UubmFtZSxcbiAgICAgICAgeDogY3ggLSB3IC8gMixcbiAgICAgICAgeTogY3kgLSBoIC8gMixcbiAgICAgICAgdyxcbiAgICAgICAgaCxcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGZsaXBYOiBmYWxzZSxcbiAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gICAgICB9LFxuICAgICAgaW5kZXg6IGRvYy5sYXllcnMubGVuZ3RoICsgaVxuICAgIH07XG4gIH0pO1xuXG4gIC8vIE5ldyBhc3NldHMgcmlkZSBhbG9uZyBvbiB0aGUgYWRkTGF5ZXIgb3AgaXRzZWxmLlxuICBjb25zdCBpZHMgPSBpdGVtcy5tYXAoKGkpID0+IGkubGF5ZXIuaWQpO1xuICBjb25zdCBpbnNlcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICAgIGNvbnN0IGxheWVycyA9IFsuLi5jdXJyZW50LmxheWVyc107XG4gICAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkgbGF5ZXJzLnNwbGljZShNYXRoLm1pbihpbmRleCwgbGF5ZXJzLmxlbmd0aCksIDAsIGxheWVyKTtcbiAgICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVycyB9KSk7XG4gICAgZm9yIChjb25zdCB7IGxheWVyIH0gb2Ygc29ydGVkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tpdGVtcy5maW5kSW5kZXgoKGl0KSA9PiBpdC5sYXllci5pZCA9PT0gbGF5ZXIuaWQpXTtcbiAgICAgIGVucXVldWUoe1xuICAgICAgICBraW5kOiBcImFkZExheWVyXCIsXG4gICAgICAgIHByb2plY3RJZDogY3VycmVudC5pZCxcbiAgICAgICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgICAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgICAgICBhc3NldDogeyBjbGllbnRJZDogbGF5ZXIuYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG4gIH07XG4gIGluc2VydCgpO1xuICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkFkZCBpbWFnZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIC8vIFJlZG8gcmUtaW5zZXJ0cyBieSBhc3NldCByZWZlcmVuY2U6IHRoZSBhc3NldCBhbHJlYWR5IGV4aXN0cyBieSB0aGVuLlxuICAgIHJlZG86ICgpID0+IHtcbiAgICAgIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gICAgICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgICB9XG4gIH0pO1xufVxuXG50eXBlIFJhc3RlckJvdW5kcyA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKGlkczogc3RyaW5nW10sIGltYWdlOiBJbXBvcnRlZEltYWdlLCBib3VuZHM6IFJhc3RlckJvdW5kcywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3Qgb2xkSXRlbXMgPSBjYXB0dXJlUGxhY2VtZW50KGRvYywgaWRzKTtcbiAgaWYgKG9sZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLCBhc3NldElkLCBuYW1lOiBpbWFnZS5uYW1lLFxuICAgIC4uLmJvdW5kcywgcm90YXRpb246IDAsIG9wYWNpdHk6IDEsIHZpc2libGU6IHRydWUsIGZsaXBYOiBmYWxzZSwgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIGNvbnN0IG5ld0l0ZW0gPSB7IGxheWVyLCBpbmRleCB9O1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcblxuICByYXdEZWxldGVMYXllcnMoaWRzKTtcbiAgdXBkYXRlRG9jKChkKSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gWy4uLmQubGF5ZXJzXTtcbiAgICBsYXllcnMuc3BsaWNlKE1hdGgubWluKGluZGV4LCBsYXllcnMubGVuZ3RoKSwgMCwgbGF5ZXIpO1xuICAgIHJldHVybiB7IC4uLmQsIGxheWVycyB9O1xuICB9KTtcbiAgZW5xdWV1ZSh7XG4gICAga2luZDogXCJhZGRMYXllclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgY2xpZW50SWQ6IGxheWVyLmlkLCBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgIG5hbWU6IGxheWVyLm5hbWUsIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIGVucXVldWUoeyBraW5kOiBcInNldE9yZGVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBpZHM6IGdldFN0YXRlKCkuZG9jPy5sYXllcnMubWFwKChsKSA9PiBsLmlkKSA/PyBbXSB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuXG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogaW1hZ2UubmFtZSxcbiAgICB1bmRvOiAoKSA9PiB7IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKTsgcmF3SW5zZXJ0TGF5ZXJzKG9sZEl0ZW1zKTsgc2V0U2VsZWN0aW9uKGlkcyk7IH0sXG4gICAgcmVkbzogKCkgPT4geyByYXdEZWxldGVMYXllcnMoaWRzKTsgcmF3SW5zZXJ0TGF5ZXJzKFtuZXdJdGVtXSk7IHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTsgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbWJpbmVTZWxlY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbnN0IGxheWVycyA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSAmJiBsYXllci52aXNpYmxlKTtcbiAgaWYgKGxheWVycy5sZW5ndGggPCAyKSByZXR1cm47XG4gIGNvbnN0IGJveGVzID0gbGF5ZXJzLm1hcChsYXllckFhYmIpO1xuICBjb25zdCB4ID0gTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLngpKTtcbiAgY29uc3QgeSA9IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi55KSk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnggKyBiLncpKTtcbiAgY29uc3QgYm90dG9tID0gTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnkgKyBiLmgpKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwocmlnaHQgLSB4KSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChib3R0b20gLSB5KSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7IGNhbnZhcy53aWR0aCA9IHdpZHRoOyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyBpZiAoIWN0eCkgcmV0dXJuO1xuICBsZXQgaW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W107XG4gIHRyeSB7XG4gICAgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwobGF5ZXJzLm1hcCgobCkgPT4gbG9hZEltYWdlKGwuYXNzZXRJZCkpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvdWxkIG5vdCBsb2FkIGltYWdlIHBpeGVsc1wiO1xuICAgIHdpbmRvdy5hbGVydChgQ291bGQgbm90IGNvbWJpbmUgbGF5ZXJzOiAke21lc3NhZ2V9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGltYWdlc1tpXTtcbiAgICBjdHguc2F2ZSgpOyBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5OyBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGF5ZXIuYmxlbmRNb2RlIGFzIEdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjtcbiAgICBjdHgudHJhbnNsYXRlKGxheWVyLnggKyBsYXllci53IC8gMiAtIHgsIGxheWVyLnkgKyBsYXllci5oIC8gMiAtIHkpO1xuICAgIGN0eC5yb3RhdGUobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTsgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgLWxheWVyLncgLyAyLCAtbGF5ZXIuaCAvIDIsIGxheWVyLncsIGxheWVyLmgpOyBjdHgucmVzdG9yZSgpO1xuICB9KTtcbiAgY29uc3QgaW5kZXggPSBNYXRoLm1pbiguLi5kb2MubGF5ZXJzLm1hcCgobCwgaSkgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGwuaWQpID8gaSA6IEluZmluaXR5KSk7XG4gIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKGxheWVycy5tYXAoKGwpID0+IGwuaWQpLCB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGgsIGhlaWdodCwgbmFtZTogXCJDb21iaW5lZCBsYXllcnNcIiB9LCB7IHgsIHksIHc6IHdpZHRoLCBoOiBoZWlnaHQgfSwgaW5kZXgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JvcFNlbGVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiwgY3JvcFJlY3QgfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggIT09IDEgfHwgIWNyb3BSZWN0IHx8IGNyb3BSZWN0LncgPCAyIHx8IGNyb3BSZWN0LmggPCAyKSByZXR1cm47XG4gIGNvbnN0IGxheWVyID0gZG9jLmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBzZWxlY3Rpb25bMF0pO1xuICBpZiAoIWxheWVyKSByZXR1cm47XG4gIGNvbnN0IGJvdW5kcyA9IGxheWVyQWFiYihsYXllcik7XG4gIGNvbnN0IHggPSBNYXRoLm1heChjcm9wUmVjdC54LCBib3VuZHMueCk7XG4gIGNvbnN0IHkgPSBNYXRoLm1heChjcm9wUmVjdC55LCBib3VuZHMueSk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4oY3JvcFJlY3QueCArIGNyb3BSZWN0LncsIGJvdW5kcy54ICsgYm91bmRzLncpO1xuICBjb25zdCBib3R0b20gPSBNYXRoLm1pbihjcm9wUmVjdC55ICsgY3JvcFJlY3QuaCwgYm91bmRzLnkgKyBib3VuZHMuaCk7XG4gIGlmIChyaWdodCAtIHggPCAyIHx8IGJvdHRvbSAtIHkgPCAyKSB7XG4gICAgd2luZG93LmFsZXJ0KFwiRHJhdyB0aGUgY3JvcCBhcmVhIG92ZXIgdGhlIHNlbGVjdGVkIGxheWVyLlwiKTtcbiAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiBudWxsIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZWN0ID0geyB4LCB5LCB3OiByaWdodCAtIHgsIGg6IGJvdHRvbSAtIHkgfTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHJlY3QudykpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHJlY3QuaCkpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpOyBjYW52YXMud2lkdGggPSB3aWR0aDsgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgaWYgKCFjdHgpIHJldHVybjtcbiAgbGV0IGltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgdHJ5IHtcbiAgICBpbWcgPSBhd2FpdCBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJDb3VsZCBub3QgbG9hZCBpbWFnZSBwaXhlbHNcIjtcbiAgICB3aW5kb3cuYWxlcnQoYENvdWxkIG5vdCBjcm9wIGxheWVyOiAke21lc3NhZ2V9YCk7XG4gICAgc2V0U3RhdGUoeyBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY3R4Lmdsb2JhbEFscGhhID0gbGF5ZXIub3BhY2l0eTtcbiAgY3R4LnRyYW5zbGF0ZShsYXllci54ICsgbGF5ZXIudyAvIDIgLSByZWN0LngsIGxheWVyLnkgKyBsYXllci5oIC8gMiAtIHJlY3QueSk7XG4gIGN0eC5yb3RhdGUobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTsgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIC1sYXllci53IC8gMiwgLWxheWVyLmggLyAyLCBsYXllci53LCBsYXllci5oKTtcbiAgY29uc3QgaW5kZXggPSBkb2MubGF5ZXJzLmZpbmRJbmRleCgobCkgPT4gbC5pZCA9PT0gbGF5ZXIuaWQpO1xuICByZXBsYWNlTGF5ZXJzV2l0aFJhc3RlcihbbGF5ZXIuaWRdLCB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGgsIGhlaWdodCwgbmFtZTogYCR7bGF5ZXIubmFtZX0gY3JvcHBlZGAgfSwgcmVjdCwgaW5kZXgpO1xuICBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3BDYW52YXMoKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBjcm9wUmVjdCB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgIWNyb3BSZWN0IHx8IGNyb3BSZWN0LncgPCAyIHx8IGNyb3BSZWN0LmggPCAyKSByZXR1cm47XG4gIGNvbnN0IHggPSBNYXRoLnJvdW5kKGNyb3BSZWN0LngpO1xuICBjb25zdCB5ID0gTWF0aC5yb3VuZChjcm9wUmVjdC55KTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLm1pbihNQVhfUFJPSkVDVF9ESU0sIE1hdGgucm91bmQoY3JvcFJlY3QudykpKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oTUFYX1BST0pFQ1RfRElNLCBNYXRoLnJvdW5kKGNyb3BSZWN0LmgpKSk7XG4gIGNvbnN0IGJlZm9yZSA9IHtcbiAgICB3aWR0aDogZG9jLndpZHRoLFxuICAgIGhlaWdodDogZG9jLmhlaWdodCxcbiAgICBwb3NpdGlvbnM6IGRvYy5sYXllcnMubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCB4OiBsYXllci54LCB5OiBsYXllci55IH0pKVxuICB9O1xuICBjb25zdCBhZnRlciA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgcG9zaXRpb25zOiBiZWZvcmUucG9zaXRpb25zLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgeDogbGF5ZXIueCAtIHgsIHk6IGxheWVyLnkgLSB5IH0pKVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5ID0gKHNuYXBzaG90OiB0eXBlb2YgYmVmb3JlKSA9PiB7XG4gICAgdXBkYXRlRG9jKChjdXJyZW50KSA9PiAoe1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIHdpZHRoOiBzbmFwc2hvdC53aWR0aCxcbiAgICAgIGhlaWdodDogc25hcHNob3QuaGVpZ2h0LFxuICAgICAgbGF5ZXJzOiBjdXJyZW50LmxheWVycy5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc25hcHNob3QucG9zaXRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVyLmlkKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uID8geyAuLi5sYXllciwgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSB9IDogbGF5ZXI7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJyZXNpemVQcm9qZWN0XCIsIGlkOiBkb2MuaWQsIHdpZHRoOiBzbmFwc2hvdC53aWR0aCwgaGVpZ2h0OiBzbmFwc2hvdC5oZWlnaHQgfSk7XG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBzbmFwc2hvdC5wb3NpdGlvbnMpIHBlcnNpc3RMYXllck5vdyhwb3NpdGlvbi5pZCk7XG4gICAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgfTtcblxuICBhcHBseShhZnRlcik7XG4gIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsIH0pO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsOiBcIkNyb3AgY2FudmFzXCIsIHVuZG86ICgpID0+IGFwcGx5KGJlZm9yZSksIHJlZG86ICgpID0+IGFwcGx5KGFmdGVyKSB9KTtcbn1cblxuLyoqIFRpbnkgdHJhbnNwYXJlbnQgUE5HIFx1MjAxNCBmdWxsLWNhbnZhcyBibGFua3MgZXhjZWVkIGhvc3RlZCBEQiB2YWx1ZSBsaW1pdHMuICovXG5jb25zdCBFTVBUWV9QTkcgPVxuICBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFEVWxFUVZSNDJtUDh6OEJRRHdBRWhRR0FoS21NSVFBQUFBQkpSVTVFcmtKZ2dnPT1cIjtcblxuZnVuY3Rpb24gYmxhbmtMYXllckFzc2V0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogeyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gIHJldHVybiB7IHNyYzogRU1QVFlfUE5HLCB3aWR0aDogTWF0aC5tYXgoMSwgd2lkdGgpLCBoZWlnaHQ6IE1hdGgubWF4KDEsIGhlaWdodCkgfTtcbn1cblxuZnVuY3Rpb24gYXBwbHlMYXllclJhc3RlcihcbiAgbGF5ZXJJZDogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIGNsZWFyVGV4dDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmMsIHBhaW50U3JjOiBzcmMsIHdpZHRoLCBoZWlnaHQgfSk7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCAhPT0gbGF5ZXJJZCkgcmV0dXJuIGl0ZW07XG4gICAgICBpZiAoIWNsZWFyVGV4dCkgcmV0dXJuIHsgLi4uaXRlbSwgYXNzZXRJZCB9O1xuICAgICAgY29uc3QgeyB0ZXh0OiBfdGV4dCwgLi4ucmVzdCB9ID0gaXRlbTtcbiAgICAgIHJldHVybiB7IC4uLnJlc3QsIGFzc2V0SWQgfTtcbiAgICB9KVxuICB9KSk7XG4gIGNvbnN0IHVwZGF0ZWQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAodXBkYXRlZCkgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQ6IGxheWVySWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybSh1cGRhdGVkKSB9KTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwicmVwbGFjZUxheWVyQXNzZXRcIiwgaWQ6IGxheWVySWQsIGNsaWVudEFzc2V0SWQ6IGFzc2V0SWQsIHNyYywgd2lkdGgsIGhlaWdodCB9KTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuLyoqIFRyYW5zcGFyZW50IGRvY3VtZW50LXNpemVkIGxheWVyIGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsYW5rTGF5ZXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGltYWdlID0gYmxhbmtMYXllckFzc2V0KGRvYy53aWR0aCwgZG9jLmhlaWdodCk7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgIGFzc2V0SWQsXG4gICAgbmFtZTogYExheWVyICR7ZG9jLmxheWVycy5sZW5ndGggKyAxfWAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHc6IGRvYy53aWR0aCxcbiAgICBoOiBkb2MuaGVpZ2h0LFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIGNvbnN0IGluZGV4ID0gZG9jLmxheWVycy5sZW5ndGg7XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBbLi4uZC5sYXllcnMsIGxheWVyXSB9KSk7XG4gIGVucXVldWUoe1xuICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICBwcm9qZWN0SWQ6IGRvYy5pZCxcbiAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIk5ldyBsYXllclwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKSxcbiAgICByZWRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoW3sgbGF5ZXIsIGluZGV4IH1dKTtcbiAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbGF5ZXIuaWQ7XG59XG5cbi8qKiBFbnN1cmUgYSBwYWludGFibGUgbGF5ZXIgZXhpc3RzOyBjcmVhdGVzIGEgYmxhbmsgb25lIChubyBoaXN0b3J5KSB3aGVuIHRoZSBkb2MgaXMgZW1wdHkuICovXG5mdW5jdGlvbiBwYWludFRhcmdldExheWVyKCk6IHsgbGF5ZXI6IExheWVyOyBjcmVhdGVkOiBib29sZWFuIH0gfCBudWxsIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBjb25zdCBzZWxlY3RlZElkID0gc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZElkID8gZG9jLmxheWVycy5maW5kKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHNlbGVjdGVkSWQpIDogdW5kZWZpbmVkO1xuICBpZiAoc2VsZWN0ZWQpIHJldHVybiB7IGxheWVyOiBzZWxlY3RlZCwgY3JlYXRlZDogZmFsc2UgfTtcbiAgaWYgKGRvYy5sYXllcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRvcCA9IGRvYy5sYXllcnNbZG9jLmxheWVycy5sZW5ndGggLSAxXTtcbiAgICBzZXRTZWxlY3Rpb24oW3RvcC5pZF0pO1xuICAgIHJldHVybiB7IGxheWVyOiB0b3AsIGNyZWF0ZWQ6IGZhbHNlIH07XG4gIH1cblxuICBjb25zdCBpbWFnZSA9IGJsYW5rTGF5ZXJBc3NldChkb2Mud2lkdGgsIGRvYy5oZWlnaHQpO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjOiBpbWFnZS5zcmMsIHBhaW50U3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIGNvbnN0IGxheWVyOiBMYXllciA9IHtcbiAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSxcbiAgICBhc3NldElkLFxuICAgIG5hbWU6IFwiTGF5ZXIgMVwiLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3OiBkb2Mud2lkdGgsXG4gICAgaDogZG9jLmhlaWdodCxcbiAgICByb3RhdGlvbjogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogXCJub3JtYWxcIlxuICB9O1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogWy4uLmQubGF5ZXJzLCBsYXllcl0gfSkpO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsXG4gICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgIGFzc2V0OiB7IGNsaWVudElkOiBhc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHJldHVybiB7IGxheWVyLCBjcmVhdGVkOiB0cnVlIH07XG59XG5cbmZ1bmN0aW9uIGxvYWREYXRhVXJsKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVjb2RlIGltYWdlXCIpKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9KTtcbn1cblxuLyoqIENvbXBvc2l0ZSBhIGRvY3VtZW50LXNwYWNlIGJydXNoIHN0cm9rZSBvbnRvIHRoZSBjdXJyZW50IGxheWVyLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhaW50QnJ1c2hTdHJva2Uoc3JjOiBzdHJpbmcsIG9wYWNpdHkgPSAxKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldCA9IHBhaW50VGFyZ2V0TGF5ZXIoKTtcbiAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgY29uc3QgeyBsYXllciwgY3JlYXRlZCB9ID0gdGFyZ2V0O1xuXG4gIGxldCBiYXNlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBsZXQgc3Ryb2tlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB0cnkge1xuICAgIFtiYXNlLCBzdHJva2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2xvYWRJbWFnZShsYXllci5hc3NldElkKSwgbG9hZERhdGFVcmwoc3JjKV0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQ291bGQgbm90IGxvYWQgbGF5ZXIgcGl4ZWxzXCI7XG4gICAgd2luZG93LmFsZXJ0KGBDb3VsZCBub3QgcGFpbnQ6ICR7bWVzc2FnZX1gKTtcbiAgICBpZiAoY3JlYXRlZCkgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChsYXllci53KSwgYmFzZS5uYXR1cmFsV2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGxheWVyLmgpLCBiYXNlLm5hdHVyYWxIZWlnaHQpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBpZiAoY3JlYXRlZCkgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eC5kcmF3SW1hZ2UoYmFzZSwgMCwgMCk7XG4gIGNvbnN0IGNhY2hlZCA9IGdldEFzc2V0RW50cnkobGF5ZXIuYXNzZXRJZCk7XG4gIGNvbnN0IGJlZm9yZVNyYyA9IGNhY2hlZD8ucGFpbnRTcmM/LnN0YXJ0c1dpdGgoXCJkYXRhOlwiKVxuICAgID8gY2FjaGVkLnBhaW50U3JjXG4gICAgOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICBjb25zdCBiZWZvcmVUZXh0ID0gbGF5ZXIudGV4dCA/IHsgLi4ubGF5ZXIudGV4dCB9IDogdW5kZWZpbmVkO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgY3R4LnNjYWxlKHdpZHRoIC8gTWF0aC5tYXgoMSwgbGF5ZXIudyksIGhlaWdodCAvIE1hdGgubWF4KDEsIGxheWVyLmgpKTtcbiAgaWYgKGxheWVyLmZsaXBYKSBjdHguc2NhbGUoLTEsIDEpO1xuICBjdHgucm90YXRlKCgtbGF5ZXIucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XG4gIGN0eC50cmFuc2xhdGUoLShsYXllci54ICsgbGF5ZXIudyAvIDIpLCAtKGxheWVyLnkgKyBsYXllci5oIC8gMikpO1xuICBjdHguZHJhd0ltYWdlKHN0cm9rZSwgMCwgMCk7XG4gIGN0eC5yZXN0b3JlKCk7XG5cbiAgY29uc3QgYWZ0ZXJTcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICBjb25zdCBjbGVhclRleHQgPSBCb29sZWFuKGxheWVyLnRleHQpO1xuICAvLyBEZWNvZGUgYmVmb3JlIHN3YXBwaW5nIHNvIHRoZSBsYXllciA8aW1nPiBjYW4gcGFpbnQgaW1tZWRpYXRlbHkuIFRoZSBsaXZlXG4gIC8vIG92ZXJsYXkgc3RheXMgdXAgdW50aWwgTGF5ZXJWaWV3IHByZXNlbnRzIHRoaXMgZXhhY3Qgc3JjLlxuICBhd2FpdCBkZWNvZGVTcmMoYWZ0ZXJTcmMpO1xuICBhcm1CcnVzaE92ZXJsYXlDbGVhcihhZnRlclNyYyk7XG4gIGFwcGx5TGF5ZXJSYXN0ZXIobGF5ZXIuaWQsIGFmdGVyU3JjLCB3aWR0aCwgaGVpZ2h0LCBjbGVhclRleHQpO1xuICAvLyBGYWxsYmFjayBpZiB0aGUgbGF5ZXIgaXNuJ3QgdmlzaWJsZSAvIGZhaWxzIHRvIG1vdW50IGFuIDxpbWc+LlxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjbGVhckJydXNoT3ZlcmxheU5vdygpLCAyMDAwKTtcblxuICBpZiAoY3JlYXRlZCkge1xuICAgIGNvbnN0IGZpbmFsTGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVyLmlkKTtcbiAgICBpZiAoIWZpbmFsTGF5ZXIpIHJldHVybjtcbiAgICBwdXNoSGlzdG9yeSh7XG4gICAgICBsYWJlbDogXCJCcnVzaCBzdHJva2VcIixcbiAgICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKSxcbiAgICAgIHJlZG86ICgpID0+IHtcbiAgICAgICAgcmF3SW5zZXJ0TGF5ZXJzKFt7IGxheWVyOiBmaW5hbExheWVyLCBpbmRleDogMCB9XSk7XG4gICAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQnJ1c2ggc3Ryb2tlXCIsXG4gICAgdW5kbzogKCkgPT4ge1xuICAgICAgYXBwbHlMYXllclJhc3RlcihsYXllci5pZCwgYmVmb3JlU3JjLCB3aWR0aCwgaGVpZ2h0LCBmYWxzZSk7XG4gICAgICBpZiAoYmVmb3JlVGV4dCkge1xuICAgICAgICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAgICAgICAuLi5kb2MsXG4gICAgICAgICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGxheWVyLmlkID8geyAuLi5pdGVtLCB0ZXh0OiBiZWZvcmVUZXh0IH0gOiBpdGVtKSlcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllci5pZCk7XG4gICAgICAgIGlmICh1cGRhdGVkKSBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZDogbGF5ZXIuaWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybSh1cGRhdGVkKSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZG86ICgpID0+IGFwcGx5TGF5ZXJSYXN0ZXIobGF5ZXIuaWQsIGFmdGVyU3JjLCB3aWR0aCwgaGVpZ2h0LCBjbGVhclRleHQpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0UmFzdGVyKHRleHQ6IFRleHRMYXllckRhdGEpOiB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgY29uc3QgbGluZXMgPSAodGV4dC5jb250ZW50IHx8IFwiVGV4dFwiKS5yZXBsYWNlKC9cXHIvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IG1lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFtZWFzdXJlKSByZXR1cm4geyBzcmM6IFwiXCIsIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgbWVhc3VyZS5mb250ID0gYCR7dGV4dC5mb250V2VpZ2h0fSAke3RleHQuZm9udFNpemV9cHggJHt0ZXh0LmZvbnRGYW1pbHl9YDtcbiAgY29uc3QgcGFkZGluZyA9IE1hdGgubWF4KDQsIE1hdGguY2VpbCh0ZXh0LmZvbnRTaXplICogMC4xNCkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChNYXRoLm1heCguLi5saW5lcy5tYXAoKGxpbmUpID0+IG1lYXN1cmUubWVhc3VyZVRleHQobGluZSB8fCBcIiBcIikud2lkdGgpKSArIHBhZGRpbmcgKiAyKSk7XG4gIGNvbnN0IGxpbmVQeCA9IHRleHQuZm9udFNpemUgKiB0ZXh0LmxpbmVIZWlnaHQ7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChsaW5lcy5sZW5ndGggKiBsaW5lUHggKyBwYWRkaW5nICogMikpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiB7IHNyYzogXCJcIiwgd2lkdGg6IDEsIGhlaWdodDogMSB9O1xuICBjdHguZm9udCA9IGAke3RleHQuZm9udFdlaWdodH0gJHt0ZXh0LmZvbnRTaXplfXB4ICR7dGV4dC5mb250RmFtaWx5fWA7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBjdHgudGV4dEFsaWduID0gdGV4dC5hbGlnbjtcbiAgY3R4LmZpbGxTdHlsZSA9IHRleHQuY29sb3I7XG4gIGNvbnN0IHggPSB0ZXh0LmFsaWduID09PSBcImxlZnRcIiA/IHBhZGRpbmcgOiB0ZXh0LmFsaWduID09PSBcImNlbnRlclwiID8gd2lkdGggLyAyIDogd2lkdGggLSBwYWRkaW5nO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lLCBpbmRleCkgPT4gY3R4LmZpbGxUZXh0KGxpbmUgfHwgXCIgXCIsIHgsIHBhZGRpbmcgKyBpbmRleCAqIGxpbmVQeCkpO1xuICByZXR1cm4geyBzcmM6IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksIHdpZHRoLCBoZWlnaHQgfTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFRleHREZWZhdWx0cygpOiBUZXh0TGF5ZXJEYXRhIHtcbiAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IFwiVGV4dFwiLFxuICAgIGZvbnRGYW1pbHk6IHN0YXRlLnRleHRGb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBzdGF0ZS50ZXh0Rm9udFNpemUsXG4gICAgZm9udFdlaWdodDogc3RhdGUudGV4dEZvbnRXZWlnaHQsXG4gICAgYWxpZ246IHN0YXRlLnRleHRBbGlnbixcbiAgICBjb2xvcjogc3RhdGUuZm9yZWdyb3VuZENvbG9yLFxuICAgIGxpbmVIZWlnaHQ6IHN0YXRlLnRleHRMaW5lSGVpZ2h0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZXh0TGF5ZXIoYXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBjb25zdCB0ZXh0ID0gY3VycmVudFRleHREZWZhdWx0cygpO1xuICBjb25zdCBpbWFnZSA9IHJlbmRlclRleHRSYXN0ZXIodGV4dCk7XG4gIGlmICghaW1hZ2Uuc3JjKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksIGFzc2V0SWQsIG5hbWU6IFwiVGV4dFwiLCB0ZXh0OiB7IC4uLnRleHQsIHJhc3RlcldpZHRoOiBpbWFnZS53aWR0aCwgcmFzdGVySGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSxcbiAgICB4OiBhdC54LCB5OiBhdC55LCB3OiBpbWFnZS53aWR0aCwgaDogaW1hZ2UuaGVpZ2h0LFxuICAgIHJvdGF0aW9uOiAwLCBvcGFjaXR5OiAxLCB2aXNpYmxlOiB0cnVlLCBmbGlwWDogZmFsc2UsIGJsZW5kTW9kZTogXCJub3JtYWxcIlxuICB9O1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogWy4uLmQubGF5ZXJzLCBsYXllcl0gfSkpO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBjbGllbnRJZDogbGF5ZXIuaWQsIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQWRkIHRleHRcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSksXG4gICAgcmVkbzogKCkgPT4geyByYXdJbnNlcnRMYXllcnMoW3sgbGF5ZXIsIGluZGV4OiBkb2MubGF5ZXJzLmxlbmd0aCB9XSk7IHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTsgfVxuICB9KTtcbiAgcmV0dXJuIGxheWVyLmlkO1xufVxuXG5mdW5jdGlvbiBhcHBseVRleHQobGF5ZXJJZDogc3RyaW5nLCB0ZXh0OiBUZXh0TGF5ZXJEYXRhKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcikgcmV0dXJuO1xuICBjb25zdCBpbWFnZSA9IHJlbmRlclRleHRSYXN0ZXIodGV4dCk7XG4gIGlmICghaW1hZ2Uuc3JjKSByZXR1cm47XG4gIGNvbnN0IGNhY2hlZEFzc2V0ID0gZ2V0QXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgY29uc3Qgb2xkUmFzdGVyV2lkdGggPSBsYXllci50ZXh0Py5yYXN0ZXJXaWR0aCA/PyBjYWNoZWRBc3NldD8ud2lkdGggPz8gbGF5ZXIudztcbiAgY29uc3Qgb2xkUmFzdGVySGVpZ2h0ID0gbGF5ZXIudGV4dD8ucmFzdGVySGVpZ2h0ID8/IGNhY2hlZEFzc2V0Py5oZWlnaHQgPz8gbGF5ZXIuaDtcbiAgY29uc3Qgc2NhbGVYID0gb2xkUmFzdGVyV2lkdGggPiAwID8gbGF5ZXIudyAvIG9sZFJhc3RlcldpZHRoIDogMTtcbiAgY29uc3Qgc2NhbGVZID0gb2xkUmFzdGVySGVpZ2h0ID4gMCA/IGxheWVyLmggLyBvbGRSYXN0ZXJIZWlnaHQgOiAxO1xuICBjb25zdCByZW5kZXJlZFRleHQgPSB7IC4uLnRleHQsIHJhc3RlcldpZHRoOiBpbWFnZS53aWR0aCwgcmFzdGVySGVpZ2h0OiBpbWFnZS5oZWlnaHQgfTtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAuLi5kb2MsXG4gICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZFxuICAgICAgPyB7IC4uLml0ZW0sIGFzc2V0SWQsIHRleHQ6IHJlbmRlcmVkVGV4dCwgdzogaW1hZ2Uud2lkdGggKiBzY2FsZVgsIGg6IGltYWdlLmhlaWdodCAqIHNjYWxlWSB9XG4gICAgICA6IGl0ZW0pXG4gIH0pKTtcbiAgY29uc3QgdXBkYXRlZCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICh1cGRhdGVkKSBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZDogbGF5ZXJJZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKHVwZGF0ZWQpIH0pO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZXBsYWNlTGF5ZXJBc3NldFwiLCBpZDogbGF5ZXJJZCwgY2xpZW50QXNzZXRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZXh0TGF5ZXIobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxUZXh0TGF5ZXJEYXRhPiwgbGFiZWwgPSBcIkVkaXQgdGV4dFwiKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcj8udGV4dCkgcmV0dXJuO1xuICBjb25zdCBiZWZvcmUgPSB7IC4uLmxheWVyLnRleHQgfTtcbiAgY29uc3QgYWZ0ZXIgPSB7IC4uLmJlZm9yZSwgLi4ucGF0Y2ggfTtcbiAgaWYgKEpTT04uc3RyaW5naWZ5KGJlZm9yZSkgPT09IEpTT04uc3RyaW5naWZ5KGFmdGVyKSkgcmV0dXJuO1xuICBhcHBseVRleHQobGF5ZXJJZCwgYWZ0ZXIpO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsLCB1bmRvOiAoKSA9PiBhcHBseVRleHQobGF5ZXJJZCwgYmVmb3JlKSwgcmVkbzogKCkgPT4gYXBwbHlUZXh0KGxheWVySWQsIGFmdGVyKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcj8udGV4dCkgcmV0dXJuO1xuICBzZXRTZWxlY3Rpb24oW2xheWVySWRdKTtcbiAgc2V0U3RhdGUoeyB0ZXh0RWRpdGluZzogeyBpZDogbGF5ZXJJZCwgZHJhZnQ6IGxheWVyLnRleHQuY29udGVudCB9IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluaXNoVGV4dEVkaXRpbmcoKTogdm9pZCB7XG4gIGNvbnN0IGVkaXRpbmcgPSBnZXRTdGF0ZSgpLnRleHRFZGl0aW5nO1xuICBpZiAoIWVkaXRpbmcpIHJldHVybjtcbiAgc2V0U3RhdGUoeyB0ZXh0RWRpdGluZzogbnVsbCB9KTtcbiAgdXBkYXRlVGV4dExheWVyKGVkaXRpbmcuaWQsIHsgY29udGVudDogZWRpdGluZy5kcmFmdCB9LCBcIkVkaXQgdGV4dFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJMYXllcihmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBmcm9tSW5kZXggPT09IHRvSW5kZXgpIHJldHVybjtcbiAgY29uc3QgYmVmb3JlID0gZG9jLmxheWVycy5tYXAoKGwpID0+IGwuaWQpO1xuICBjb25zdCBvcmRlciA9IFsuLi5iZWZvcmVdO1xuICBjb25zdCBbbW92ZWRdID0gb3JkZXIuc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gIGlmIChtb3ZlZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG9yZGVyLnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZCk7XG5cbiAgY29uc3QgYXBwbHlPcmRlciA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdXBkYXRlRG9jKChkKSA9PiB7XG4gICAgICBjb25zdCBieUlkID0gbmV3IE1hcChkLmxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuICAgICAgY29uc3QgbGF5ZXJzOiBMYXllcltdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBjb25zdCBsYXllciA9IGJ5SWQuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgICAgIGJ5SWQuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGF5ZXJzLnB1c2goLi4uYnlJZC52YWx1ZXMoKSk7XG4gICAgICByZXR1cm4geyAuLi5kLCBsYXllcnMgfTtcbiAgICB9KTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJzZXRPcmRlclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgaWRzOiBbLi4uaWRzXSB9KTtcbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuXG4gIGFwcGx5T3JkZXIob3JkZXIpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiUmVvcmRlciBsYXllclwiLFxuICAgIHVuZG86ICgpID0+IGFwcGx5T3JkZXIoYmVmb3JlKSxcbiAgICByZWRvOiAoKSA9PiBhcHBseU9yZGVyKG9yZGVyKVxuICB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOYW1pbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUxheWVyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgY29uc3QgbGF5ZXIgPSBkb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghZG9jIHx8ICFsYXllciB8fCBsYXllci5uYW1lID09PSBuYW1lKSByZXR1cm47XG4gIGNvbnN0IGFwcGx5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB1cGRhdGVEb2MoKGQpID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgbGF5ZXJzOiBkLmxheWVycy5tYXAoKGwpID0+IChsLmlkID09PSBpZCA/IHsgLi4ubCwgbmFtZTogdmFsdWUgfSA6IGwpKVxuICAgIH0pKTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVMYXllclwiLCBpZCwgbmFtZTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZSA9IGxheWVyLm5hbWU7XG4gIGFwcGx5KG5hbWUpO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsOiBcIlJlbmFtZSBsYXllclwiLCB1bmRvOiAoKSA9PiBhcHBseShiZWZvcmUpLCByZWRvOiAoKSA9PiBhcHBseShuYW1lKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBkb2MubmFtZSA9PT0gbmFtZSkgcmV0dXJuO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIG5hbWUgfSkpO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVQcm9qZWN0XCIsIGlkOiBkb2MuaWQsIG5hbWUgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGh1bWJuYWlsc1xuXG5sZXQgdGh1bWJUaW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVUaHVtYlJlZnJlc2goKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gIGNsZWFyVGltZW91dCh0aHVtYlRpbWVyKTtcbiAgdGh1bWJUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgICBpZiAoIWRvYykgcmV0dXJuO1xuICAgIHJlbmRlclRodW1iKGRvYylcbiAgICAgIC50aGVuKCh0aHVtYikgPT4ge1xuICAgICAgICAvLyBUaGUgZG9jIG1heSBoYXZlIGJlZW4gY2xvc2VkIHdoaWxlIHJlbmRlcmluZy5cbiAgICAgICAgaWYgKGdldFN0YXRlKCkuZG9jPy5pZCA9PT0gZG9jLmlkKSB7XG4gICAgICAgICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0VGh1bWJcIiwgaWQ6IGRvYy5pZCwgdGh1bWIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgfSwgMTUwMCk7XG59XG4iLCAiLy8gVmlld3BvcnQgKHpvb20vcGFuKSBoZWxwZXJzLiBUaGUgY2FudmFzIHN0YWdlIHJlZ2lzdGVycyBpdHMgRE9NIGVsZW1lbnQgc29cbi8vIHpvb20gc2hvcnRjdXRzIGFuZCB0b29sYmFyIGJ1dHRvbnMgY2FuIHpvb20gYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci5cblxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgTUlOX1pPT00gPSAwLjA1O1xuZXhwb3J0IGNvbnN0IE1BWF9aT09NID0gODtcbmNvbnN0IEZJVF9QQURESU5HID0gNTY7XG4vKiogV2hlZWwgc2Vuc2l0aXZpdHkgYXQgem9vbT0xOyBzY2FsZXMgdXAgd2hlbiB6b29tZWQgb3V0LiAqL1xuY29uc3QgV0hFRUxfWk9PTV9TRU5TSVRJVklUWSA9IDAuMDA3MjtcblxuZXhwb3J0IGNvbnN0IHZpZXdwb3J0RWw6IHsgY3VycmVudDogSFRNTEVsZW1lbnQgfCBudWxsIH0gPSB7IGN1cnJlbnQ6IG51bGwgfTtcblxuLyoqIE11bHRpcGxpY2F0aXZlIHpvb20gc3RlcCBcdTIwMTQgbGFyZ2VyIHdoZW4gem9vbWVkIG91dCwgZmluZXIgd2hlbiB6b29tZWQgaW4uICovXG5leHBvcnQgZnVuY3Rpb24gem9vbVN0ZXBGYWN0b3Ioem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMSArIDAuMjUgLyBNYXRoLnNxcnQoTWF0aC5tYXgoem9vbSwgTUlOX1pPT00pKTtcbn1cblxuLyoqIFdoZWVsIHpvb20gc2Vuc2l0aXZpdHkgXHUyMDE0IHN0cm9uZ2VyIHdoZW4gem9vbWVkIG91dC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGVlbFpvb21TZW5zaXRpdml0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBXSEVFTF9aT09NX1NFTlNJVElWSVRZIC8gTWF0aC5zcXJ0KE1hdGgubWF4KHpvb20sIE1JTl9aT09NKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JlZW5Ub1dvcmxkKFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCByZWN0ID0gZWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpID8/IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogKGNsaWVudFggLSByZWN0LmxlZnQgLSB2aWV3LnBhblgpIC8gdmlldy56b29tLFxuICAgICAgICB5OiAoY2xpZW50WSAtIHJlY3QudG9wIC0gdmlldy5wYW5ZKSAvIHZpZXcuem9vbSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gem9vbUF0Q2xpZW50KFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4gICAgbmV4dFpvb206IG51bWJlcixcbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHpvb20gPSBjbGFtcChuZXh0Wm9vbSwgTUlOX1pPT00sIE1BWF9aT09NKTtcbiAgICBjb25zdCB3eCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0IC0gdmlldy5wYW5YKSAvIHZpZXcuem9vbTtcbiAgICBjb25zdCB3eSA9IChjbGllbnRZIC0gcmVjdC50b3AgLSB2aWV3LnBhblkpIC8gdmlldy56b29tO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IGNsaWVudFggLSByZWN0LmxlZnQgLSB3eCAqIHpvb20sXG4gICAgICAgICAgICBwYW5ZOiBjbGllbnRZIC0gcmVjdC50b3AgLSB3eSAqIHpvb20sXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZVBhbihwYW5YOiBudW1iZXIsIHBhblk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBzZXRTdGF0ZSh7IHZpZXc6IHsgLi4udmlldywgcGFuWCwgcGFuWSB9IH0pO1xufVxuXG4vKiogWm9vbSBpbiAoYGRpcmVjdGlvbiA+IDBgKSBvciBvdXQgKGBkaXJlY3Rpb24gPCAwYCkgYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6b29tQnkoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHpvb20gPSBnZXRTdGF0ZSgpLnZpZXcuem9vbTtcbiAgICBjb25zdCBzdGVwID0gem9vbVN0ZXBGYWN0b3Ioem9vbSk7XG4gICAgY29uc3QgZmFjdG9yID0gZGlyZWN0aW9uID4gMCA/IHN0ZXAgOiAxIC8gc3RlcDtcbiAgICB6b29tQXRDbGllbnQoXG4gICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMixcbiAgICAgICAgem9vbSAqIGZhY3RvcixcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0RG9jKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghZWwgfHwgIWRvYykgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB6b29tID0gY2xhbXAoXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgKHJlY3Qud2lkdGggLSBGSVRfUEFERElORyAqIDIpIC8gZG9jLndpZHRoLFxuICAgICAgICAgICAgKHJlY3QuaGVpZ2h0IC0gRklUX1BBRERJTkcgKiAyKSAvIGRvYy5oZWlnaHQsXG4gICAgICAgICksXG4gICAgICAgIE1JTl9aT09NLFxuICAgICAgICBNQVhfWk9PTSxcbiAgICApO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IChyZWN0LndpZHRoIC0gZG9jLndpZHRoICogem9vbSkgLyAyLFxuICAgICAgICAgICAgcGFuWTogKHJlY3QuaGVpZ2h0IC0gZG9jLmhlaWdodCAqIHpvb20pIC8gMixcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RGaXQoKTogdm9pZCB7XG4gICAgc2V0U3RhdGUoeyBmaXRWZXJzaW9uOiBnZXRTdGF0ZSgpLmZpdFZlcnNpb24gKyAxIH0pO1xufVxuIiwgIi8vIEltcG9ydGluZyBpbWFnZXMgZnJvbSBmaWxlczogZGVjb2RlLCBkb3duc2NhbGUgb3ZlcnNpemVkIGltYWdlcyAoZGF0YSBVUkxzXG4vLyBhcmUgdGhlIHVwbG9hZCB3aXJlIGZvcm1hdDsgdGhlIHNlcnZlciBzdG9yZXMgdGhlbSBpbiBTMyksIGFuZCByZXBvcnRcbi8vIG5hdHVyYWwgZGltZW5zaW9ucy5cblxuaW1wb3J0IHsgTUFYX0lNQUdFX0RJTSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1wb3J0ZWRJbWFnZSB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIHJlYWRGaWxlQXNEYXRhVXJsKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQpKTtcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVhZCBmaWxlXCIpKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUltYWdlKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJOb3QgYSBzdXBwb3J0ZWQgaW1hZ2VcIikpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiYXNlTmFtZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLl0rJC8sIFwiXCIpIHx8IFwiSW1hZ2VcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVUb0ltcG9ydGVkSW1hZ2UoZmlsZTogRmlsZSk6IFByb21pc2U8SW1wb3J0ZWRJbWFnZT4ge1xuICBjb25zdCBvcmlnaW5hbCA9IGF3YWl0IHJlYWRGaWxlQXNEYXRhVXJsKGZpbGUpO1xuICBjb25zdCBpbWcgPSBhd2FpdCBkZWNvZGVJbWFnZShvcmlnaW5hbCk7XG4gIGNvbnN0IHdpZHRoID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG4gIGlmICh3aWR0aCA8IDEgfHwgaGVpZ2h0IDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHN1cHBvcnRlZCBpbWFnZVwiKTtcbiAgfVxuXG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX0lNQUdFX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgaWYgKHNjYWxlID09PSAxKSB7XG4gICAgcmV0dXJuIHsgc3JjOiBvcmlnaW5hbCwgd2lkdGgsIGhlaWdodCwgbmFtZTogYmFzZU5hbWUoZmlsZS5uYW1lKSB9O1xuICB9XG5cbiAgY29uc3QgdyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICBjb25zdCBoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3O1xuICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHcsIGgpO1xuICAvLyBKUEVHIHJlLWVuY29kZXMgcGhvdG9zIGNvbXBhY3RseTsgUE5HIGtlZXBzIHRyYW5zcGFyZW5jeSBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICBjb25zdCBzcmMgPVxuICAgIGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgPyBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjkpIDogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgcmV0dXJuIHsgc3JjLCB3aWR0aDogdywgaGVpZ2h0OiBoLCBuYW1lOiBiYXNlTmFtZShmaWxlLm5hbWUpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlcihkdDogRGF0YVRyYW5zZmVyIHwgbnVsbCk6IEZpbGVbXSB7XG4gIGlmICghZHQpIHJldHVybiBbXTtcbiAgcmV0dXJuIFsuLi5kdC5maWxlc10uZmlsdGVyKChmaWxlKSA9PiBmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSk7XG59XG4iLCAiY29uc3QgRU5DT0RFRF9FTlRJVElFUyA9IC9bXCImPF0vO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHN0ciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHN0cikge1xuXHQvLyBTa2lwIGFsbCB3b3JrIGZvciBzdHJpbmdzIHdpdGggbm8gZW50aXRpZXMgbmVlZGluZyBlbmNvZGluZzpcblx0aWYgKHN0ci5sZW5ndGggPT09IDAgfHwgRU5DT0RFRF9FTlRJVElFUy50ZXN0KHN0cikgPT09IGZhbHNlKSByZXR1cm4gc3RyO1xuXG5cdGxldCBsYXN0ID0gMCxcblx0XHRpID0gMCxcblx0XHRvdXQgPSAnJyxcblx0XHRjaCA9ICcnO1xuXG5cdC8vIFNlZWsgZm9yd2FyZCBpbiBzdHIgdW50aWwgdGhlIG5leHQgZW50aXR5IGNoYXI6XG5cdGZvciAoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0Y2ggPSAnJnF1b3Q7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRjaCA9ICcmYW1wOyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2MDpcblx0XHRcdFx0Y2ggPSAnJmx0Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIEFwcGVuZCBza2lwcGVkL2J1ZmZlcmVkIGNoYXJhY3RlcnMgYW5kIHRoZSBlbmNvZGVkIGVudGl0eTpcblx0XHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0XHRvdXQgKz0gY2g7XG5cdFx0Ly8gU3RhcnQgdGhlIG5leHQgc2Vlay9idWZmZXIgYWZ0ZXIgdGhlIGVudGl0eSdzIG9mZnNldDpcblx0XHRsYXN0ID0gaSArIDE7XG5cdH1cblx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdHJldHVybiBvdXQ7XG59XG4iLCAiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGVuY29kZUVudGl0aWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi8uLi9zcmMvY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgZXhwb3J0cyB2YXJpb3VzIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQmFiZWwncyBcImF1dG9tYXRpY1wiIEpTWCBydW50aW1lIEFQSTpcbiAqIC0ganN4KHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeHModHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIF9fc291cmNlLCBfX3NlbGYpXG4gKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIGNyZWF0ZVZOb2RlIGhlcmUgaXMgb3B0aW1pemVkIGZvciBwZXJmb3JtYW5jZS5cbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWY2YjU0YTBiNDYzMjEwMGE3ZGNkMmIzXG4gKi9cblxuLyoqXG4gKiBKU1guRWxlbWVudCBmYWN0b3J5IHVzZWQgYnkgQmFiZWwncyB7cnVudGltZTpcImF1dG9tYXRpY1wifSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZOb2RlWyd0eXBlJ119IHR5cGVcbiAqIEBwYXJhbSB7Vk5vZGVbJ3Byb3BzJ119IHByb3BzXG4gKiBAcGFyYW0ge1ZOb2RlWydrZXknXX0gW2tleV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW2lzU3RhdGljQ2hpbGRyZW5dXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NvdXJjZV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc2VsZl1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgX19zb3VyY2UsIF9fc2VsZikge1xuXHRpZiAoIXByb3BzKSBwcm9wcyA9IHt9O1xuXHQvLyBXZSdsbCB3YW50IHRvIHByZXNlcnZlIGByZWZgIGluIHByb3BzIHRvIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yXG5cdC8vIGZvcndhcmRSZWYgY29tcG9uZW50cyBpbiB0aGUgZnV0dXJlLCBidXQgdGhhdCBzaG91bGQgaGFwcGVuIHZpYVxuXHQvLyBhIHNlcGFyYXRlIFBSLlxuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHMsXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0aWYgKCdyZWYnIGluIG5vcm1hbGl6ZWRQcm9wcykge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXHRcdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdFx0aWYgKGkgPT0gJ3JlZicpIHtcblx0XHRcdFx0cmVmID0gcHJvcHNbaV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge1ZOb2RlICYgeyBfX3NvdXJjZTogYW55OyBfX3NlbGY6IGFueSB9fSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzOiBub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiAtLXZub2RlSWQsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDAsXG5cdFx0X19zb3VyY2UsXG5cdFx0X19zZWxmXG5cdH07XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzLlxuXHQvLyBOb3RlOiBgdHlwZWAgaXMgb2Z0ZW4gYSBTdHJpbmcsIGFuZCBjYW4gYmUgYHVuZGVmaW5lZGAgaW4gZGV2ZWxvcG1lbnQuXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAocmVmID0gdHlwZS5kZWZhdWx0UHJvcHMpKSB7XG5cdFx0Zm9yIChpIGluIHJlZilcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSByZWZbaV07XG5cdFx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB0ZW1wbGF0ZSB2bm9kZS4gVGhpcyBmdW5jdGlvbiBpcyBub3QgZXhwZWN0ZWQgdG8gYmVcbiAqIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdGVtcGxhdGVzXG4gKiBAcGFyYW0gIHtBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fSBleHByc1xuICogQHJldHVybnMge1ZOb2RlfVxuICovXG5mdW5jdGlvbiBqc3hUZW1wbGF0ZSh0ZW1wbGF0ZXMsIC4uLmV4cHJzKSB7XG5cdGNvbnN0IHZub2RlID0gY3JlYXRlVk5vZGUoRnJhZ21lbnQsIHsgdHBsOiB0ZW1wbGF0ZXMsIGV4cHJzIH0pO1xuXHQvLyBCeXBhc3MgcmVuZGVyIHRvIHN0cmluZyB0b3AgbGV2ZWwgRnJhZ21lbnQgb3B0aW1pemF0aW9uXG5cdHZub2RlLmtleSA9IHZub2RlLl92bm9kZTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG5jb25zdCBKU19UT19DU1MgPSB7fTtcbmNvbnN0IENTU19SRUdFWCA9IC9bQS1aXS9nO1xuXG4vKipcbiAqIFVud3JhcCBwb3RlbnRpYWwgc2lnbmFscy5cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nXG5cdFx0PyB2YWx1ZS52YWx1ZU9mKClcblx0XHQ6IHZhbHVlO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBIVE1MIGF0dHJpYnV0ZSB0byBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBub3RcbiAqIGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGVcbiAqIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYXR0cmlidXRlIHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqc3hBdHRyKG5hbWUsIHZhbHVlKSB7XG5cdGlmIChvcHRpb25zLmF0dHIpIHtcblx0XHRjb25zdCByZXN1bHQgPSBvcHRpb25zLmF0dHIobmFtZSwgdmFsdWUpO1xuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHZhbHVlID0gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKTtcblxuXHRpZiAobmFtZSA9PT0gJ3JlZicgfHwgbmFtZSA9PT0gJ2tleScpIHJldHVybiAnJztcblx0aWYgKG5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG5cdFx0XHRsZXQgdmFsID0gdmFsdWVbcHJvcF07XG5cdFx0XHRpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBuYW1lID1cblx0XHRcdFx0XHRwcm9wWzBdID09ICctJ1xuXHRcdFx0XHRcdFx0PyBwcm9wXG5cdFx0XHRcdFx0XHQ6IEpTX1RPX0NTU1twcm9wXSB8fFxuXHRcdFx0XHRcdFx0XHQoSlNfVE9fQ1NTW3Byb3BdID0gcHJvcC5yZXBsYWNlKENTU19SRUdFWCwgJy0kJicpLnRvTG93ZXJDYXNlKCkpO1xuXG5cdFx0XHRcdGxldCBzdWZmaXggPSAnOyc7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRcdC8vIEV4Y2x1ZGUgY3VzdG9tLWF0dHJpYnV0ZXNcblx0XHRcdFx0XHQhbmFtZS5zdGFydHNXaXRoKCctLScpICYmXG5cdFx0XHRcdFx0IUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KG5hbWUpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICdweDsnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciA9IHN0ciArIG5hbWUgKyAnOicgKyB2YWwgKyBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcyhzdHIpICsgJ1wiJztcblx0fVxuXG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dmFsdWUgPT09IGZhbHNlIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBuYW1lO1xuXG5cdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKSArICdcIic7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgZHluYW1pYyBjaGlsZCBwYXNzZWQgdG8gYGpzeFRlbXBsYXRlYC4gVGhpcyBmdW5jdGlvblxuICogaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhXG4gKiBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsIHwgVk5vZGUgfCBBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fVxuICovXG5mdW5jdGlvbiBqc3hFc2NhcGUodmFsdWUpIHtcblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gQ2hlY2sgZm9yIFZOb2RlXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZTtcblxuXHRcdGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZVtpXSA9IGpzeEVzY2FwZSh2YWx1ZVtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVWTm9kZSBhcyBqc3gsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeHMsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeERFVixcblx0RnJhZ21lbnQsXG5cdC8vIHByZWNvbXBpbGVkIEpTWCB0cmFuc2Zvcm1cblx0anN4VGVtcGxhdGUsXG5cdGpzeEF0dHIsXG5cdGpzeEVzY2FwZVxufTtcbiIsICIvLyBUaGUgY2FudmFzOiByZW5kZXJzIHRoZSBhcnRib2FyZCBhbmQgaXRzIGxheWVycyB3aXRoIENTUyB0cmFuc2Zvcm1zIChHUFVcbi8vIGNvbXBvc2l0aW5nIGtlZXBzIGRyYWdzIGF0IGZyYW1lIHJhdGUpLCBhbmQgb3ducyBhbGwgcG9pbnRlciBnZXN0dXJlcyBcdTIwMTRcbi8vIHNlbGVjdCwgbW92ZSwgc2NhbGUsIHJvdGF0ZSwgcGFuIFx1MjAxNCBwbHVzIHdoZWVsIHpvb20vcGFuIGFuZCBpbWFnZSBkcm9wLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIEhBTkRMRVMsXG4gICAgSEFORExFX0lEUyxcbiAgICByb3RhdGlvbkZyb21Qb2ludGVyLFxuICAgIHNjYWxlRnJvbUhhbmRsZSxcbiAgICB0eXBlIEhhbmRsZUlkLFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgdHlwZSB7IExheWVyLCBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgcGFpbnRCcnVzaFN0cm9rZSxcbiAgICBhZGRUZXh0TGF5ZXIsXG4gICAgYWRkSW1hZ2VMYXllcnMsXG4gICAgYXBwbHlUcmFuc2llbnQsXG4gICAgY29tbWl0VHJhbnNmb3JtcyxcbiAgICBjcm9wQ2FudmFzLFxuICAgIGNyb3BTZWxlY3Rpb24sXG4gICAgYmVnaW5UZXh0RWRpdGluZyxcbiAgICBmaW5pc2hUZXh0RWRpdGluZyxcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlU2VsZWN0ZWQsXG4gICAgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UsXG4gICAgdHlwZSBUcmFuc2Zvcm1QYXRjaCxcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnksIGRpc3BsYXlTcmMgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBub3RlTGF5ZXJTcmNQcmVzZW50ZWQsIHJlZ2lzdGVyQnJ1c2hPdmVybGF5Q2xlYXIsIGJlZ2luQnJ1c2hHZXN0dXJlLCBlbmRCcnVzaEdlc3R1cmUgfSBmcm9tIFwiLi4vc3RhdGUvYnJ1c2hPdmVybGF5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgICBmaXREb2MsXG4gICAgc2NyZWVuVG9Xb3JsZCxcbiAgICBzZXRTdGF0ZVBhbixcbiAgICB2aWV3cG9ydEVsLFxuICAgIHdoZWVsWm9vbVNlbnNpdGl2aXR5LFxuICAgIHpvb21BdENsaWVudCxcbn0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuXG50eXBlIEdlc3R1cmUgPVxuICAgIHwge1xuICAgICAgICAgIGtpbmQ6IFwicGFuXCI7XG4gICAgICAgICAgc3RhcnRDbGllbnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRDbGllbnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5YOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5ZOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAga2luZDogXCJtb3ZlXCI7XG4gICAgICAgICAgc3RhcnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRzOiBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAgICAgICAgIG1vdmVkOiBib29sZWFuO1xuICAgICAgfVxuICAgIHwgeyBraW5kOiBcInNjYWxlXCI7IGlkOiBzdHJpbmc7IGhhbmRsZTogSGFuZGxlSWQ7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwicm90YXRlXCI7IGlkOiBzdHJpbmc7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwiYnJ1c2hcIjsgbGFzdFg6IG51bWJlcjsgbGFzdFk6IG51bWJlciB9XG4gICAgfCB7IGtpbmQ6IFwiY3JvcFwiOyBzdGFydFg6IG51bWJlcjsgc3RhcnRZOiBudW1iZXIgfTtcblxuY29uc3QgSEFORExFX0NVUlNPUlM6IFJlY29yZDxIYW5kbGVJZCwgc3RyaW5nPiA9IHtcbiAgICBudzogXCJud3NlLXJlc2l6ZVwiLFxuICAgIG46IFwibnMtcmVzaXplXCIsXG4gICAgbmU6IFwibmVzdy1yZXNpemVcIixcbiAgICBlOiBcImV3LXJlc2l6ZVwiLFxuICAgIHNlOiBcIm53c2UtcmVzaXplXCIsXG4gICAgczogXCJucy1yZXNpemVcIixcbiAgICBzdzogXCJuZXN3LXJlc2l6ZVwiLFxuICAgIHc6IFwiZXctcmVzaXplXCIsXG59O1xuXG5mdW5jdGlvbiBwb2ludEluc2lkZUxheWVyKGxheWVyOiBMYXllciwgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN4ID0gbGF5ZXIueCArIGxheWVyLncgLyAyO1xuICAgIGNvbnN0IGN5ID0gbGF5ZXIueSArIGxheWVyLmggLyAyO1xuICAgIGNvbnN0IGFuZ2xlID0gLWxheWVyLnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBkeCA9IHBvaW50LnggLSBjeDtcbiAgICBjb25zdCBkeSA9IHBvaW50LnkgLSBjeTtcbiAgICBjb25zdCBsb2NhbFggPSBkeCAqIE1hdGguY29zKGFuZ2xlKSAtIGR5ICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IGxvY2FsWSA9IGR4ICogTWF0aC5zaW4oYW5nbGUpICsgZHkgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGxvY2FsWCkgPD0gbGF5ZXIudyAvIDIgJiYgTWF0aC5hYnMobG9jYWxZKSA8PSBsYXllci5oIC8gMjtcbn1cblxuZnVuY3Rpb24gTGF5ZXJWaWV3KHtcbiAgICBsYXllcixcbiAgICBwcmV2aWV3QmxlbmQsXG4gICAgZWRpdGluZyxcbn06IHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgcHJldmlld0JsZW5kPzogc3RyaW5nO1xuICAgIGVkaXRpbmc/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IGFzc2V0ID0gdXNlQXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgICBjb25zdCB0YXJnZXRTcmMgPSBhc3NldCA/IGRpc3BsYXlTcmMoYXNzZXQpIDogbnVsbDtcbiAgICAvLyBLZWVwIHRoZSBwcmV2aW91cyBiaXRtYXAgdmlzaWJsZSB1bnRpbCB0aGUgbmV4dCBvbmUgaXMgZGVjb2RlZCBzbyBhc3NldFxuICAgIC8vIHN3YXBzIChicnVzaCBjb21taXRzKSBkb24ndCBibGFuayB0aGUgbGF5ZXIgZm9yIGEgZnJhbWUuXG4gICAgY29uc3QgW2RyYXduU3JjLCBzZXREcmF3blNyY10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPih0YXJnZXRTcmMpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdGFyZ2V0U3JjKSB7XG4gICAgICAgICAgICBzZXREcmF3blNyYyhudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxpdmUgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhbGl2ZSkgc2V0RHJhd25TcmModGFyZ2V0U3JjKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IHNob3c7XG4gICAgICAgIGltZy5vbmVycm9yID0gc2hvdztcbiAgICAgICAgaW1nLnNyYyA9IHRhcmdldFNyYztcbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSkgc2hvdygpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgYWxpdmUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0U3JjXSk7XG4gICAgY29uc3Qgc3JjID0gZHJhd25TcmMgPz8gdGFyZ2V0U3JjO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgaGVpZ2h0OiBsYXllci5oLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtsYXllci54fXB4LCAke2xheWVyLnl9cHgpIHJvdGF0ZSgke2xheWVyLnJvdGF0aW9ufWRlZykgc2NhbGVYKCR7bGF5ZXIuZmxpcFggPyAtMSA6IDF9KWAsXG4gICAgICAgIG9wYWNpdHk6IGxheWVyLm9wYWNpdHksXG4gICAgICAgIGRpc3BsYXk6IGxheWVyLnZpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgbWl4QmxlbmRNb2RlOiBwcmV2aWV3QmxlbmQgPz8gbGF5ZXIuYmxlbmRNb2RlLFxuICAgICAgICB2aXNpYmlsaXR5OiBlZGl0aW5nID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxuICAgIH07XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBhbmltYXRlLXB1bHNlIGJnLW5ldXRyYWwtNTAwLzMwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9e2xheWVyLm5hbWV9XG4gICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBtYXgtdy1ub25lIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBub3RlTGF5ZXJTcmNQcmVzZW50ZWQoc3JjKX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBJbmxpbmVUZXh0RWRpdG9yKHsgbGF5ZXIgfTogeyBsYXllcjogTGF5ZXIgfSkge1xuICAgIGNvbnN0IGVkaXRpbmcgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEVkaXRpbmcpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB0ZXh0ID0gbGF5ZXIudGV4dDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgIGVsLnNlbGVjdCgpO1xuICAgIH0sIFtsYXllci5pZF0pO1xuICAgIGlmICghZWRpdGluZyB8fCAhdGV4dCB8fCBlZGl0aW5nLmlkICE9PSBsYXllci5pZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcGFkZGluZyA9IE1hdGgubWF4KDQsIE1hdGguY2VpbCh0ZXh0LmZvbnRTaXplICogMC4xNCkpO1xuICAgIGNvbnN0IGxpbmVzID0gZWRpdGluZy5kcmFmdC5yZXBsYWNlKC9cXHIvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgcmFzdGVyV2lkdGggPSB0ZXh0LnJhc3RlcldpZHRoID8/IGxheWVyLnc7XG4gICAgY29uc3QgcmFzdGVySGVpZ2h0ID0gdGV4dC5yYXN0ZXJIZWlnaHQgPz8gbGF5ZXIuaDtcbiAgICBjb25zdCBzY2FsZVggPSByYXN0ZXJXaWR0aCA+IDAgPyBsYXllci53IC8gcmFzdGVyV2lkdGggOiAxO1xuICAgIGNvbnN0IHNjYWxlWSA9IHJhc3RlckhlaWdodCA+IDAgPyBsYXllci5oIC8gcmFzdGVySGVpZ2h0IDogMTtcbiAgICBjb25zdCBlZGl0V2lkdGggPSBNYXRoLm1heChyYXN0ZXJXaWR0aCwgTWF0aC5tYXgoLi4ubGluZXMubWFwKChsaW5lKSA9PiBNYXRoLm1heCgxLCBsaW5lLmxlbmd0aCkpKSAqIHRleHQuZm9udFNpemUgKiAwLjY4ICsgcGFkZGluZyAqIDIpO1xuICAgIGNvbnN0IGVkaXRIZWlnaHQgPSBNYXRoLm1heChyYXN0ZXJIZWlnaHQsIGxpbmVzLmxlbmd0aCAqIHRleHQuZm9udFNpemUgKiB0ZXh0LmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGF0YS10ZXh0LWVkaXRvcj1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLXRleHQtZWRpdG9yLXdyYXBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBsZWZ0OiBsYXllci54LFxuICAgICAgICAgICAgICAgIHRvcDogbGF5ZXIueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7bGF5ZXIucm90YXRpb259ZGVnKWAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dC1lZGl0b3I9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtdGV4dC1lZGl0b3JcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0aW5nLmRyYWZ0fVxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHdyYXA9XCJvZmZcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheWVyLmZsaXBYID8gbGF5ZXIudyA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVkaXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlZGl0SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke2xheWVyLmZsaXBYID8gLXNjYWxlWCA6IHNjYWxlWH0sICR7c2NhbGVZfSlgLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRleHQuZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRleHQuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRleHQuZm9udFdlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogdGV4dC5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHRleHQuYWxpZ24sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0ZXh0LmNvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25JbnB1dD17KGU6IEV2ZW50KSA9PiBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiB7IGlkOiBsYXllci5pZCwgZHJhZnQ6IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgfSB9KX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyhlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBlLnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dD8uY2xvc2VzdChcIi5wcm9wZXJ0aWVzLXBhbmVsLCAudG9vbGJhci1jb2xvcnMsIC50b29sLWNvbG9yLXBvcG92ZXJcIikpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQ/LmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3Rpb25Cb3goe1xuICAgIGxheWVyLFxuICAgIHpvb20sXG4gICAgc2luZ2xlLFxufToge1xuICAgIGxheWVyOiBMYXllcjtcbiAgICB6b29tOiBudW1iZXI7XG4gICAgc2luZ2xlOiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IGhhbmRsZVNpemUgPSAxMSAvIHpvb207XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bGF5ZXIueH1weCwgJHtsYXllci55fXB4KSByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJvcmRlci1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogMS41IC8gem9vbSwgYm9yZGVyU3R5bGU6IFwic29saWRcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtzaW5nbGUgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgey8qIHJvdGF0ZSBoYW5kbGUgc3RlbSArIGtub2IgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXNreS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTIyIC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41IC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyIC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYW5kbGU9XCJyb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtYXV0byBhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1za3ktNTAwIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0yNiAvIHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7SEFORExFX0lEUy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYW5kbGU9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtYXV0byBhYnNvbHV0ZSByb3VuZGVkLVsycHhdIGJvcmRlciBib3JkZXItc2t5LTUwMCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7SEFORExFU1tpZF0ueCAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtIQU5ETEVTW2lkXS55ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogSEFORExFX0NVUlNPUlNbaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FudmFzU3RhZ2UoKSB7XG4gICAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gICAgY29uc3QgdmlldyA9IHVzZUVkaXRvcigocykgPT4gcy52aWV3KTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgICBjb25zdCB0b29sID0gdXNlRWRpdG9yKChzKSA9PiBzLnRvb2wpO1xuICAgIGNvbnN0IHNwYWNlUGFuID0gdXNlRWRpdG9yKChzKSA9PiBzLnNwYWNlUGFuKTtcbiAgICBjb25zdCBmaXRWZXJzaW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLmZpdFZlcnNpb24pO1xuICAgIGNvbnN0IGJydXNoQ29sb3IgPSB1c2VFZGl0b3IoKHMpID0+IHMuZm9yZWdyb3VuZENvbG9yKTtcbiAgICBjb25zdCBicnVzaFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hTaXplKTtcbiAgICBjb25zdCBicnVzaEhhcmRuZXNzID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoSGFyZG5lc3MpO1xuICAgIGNvbnN0IGJydXNoT3BhY2l0eSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaE9wYWNpdHkpO1xuICAgIGNvbnN0IGJydXNoRmxvdyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEZsb3cpO1xuICAgIGNvbnN0IGNyb3BSZWN0ID0gdXNlRWRpdG9yKChzKSA9PiBzLmNyb3BSZWN0KTtcbiAgICBjb25zdCBzbmFwR3VpZGVzID0gdXNlRWRpdG9yKChzKSA9PiBzLnNuYXBHdWlkZXMpO1xuICAgIGNvbnN0IGJsZW5kUHJldmlldyA9IHVzZUVkaXRvcigocykgPT4gcy5ibGVuZFByZXZpZXcpO1xuICAgIGNvbnN0IHRleHRFZGl0aW5nID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRFZGl0aW5nKTtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZ2VzdHVyZVJlZiA9IHVzZVJlZjxHZXN0dXJlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcGFubmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgYnJ1c2hDYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyQnJ1c2hPdmVybGF5Q2xlYXIoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpPy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gYnJ1c2hEYWIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoU2l6ZSAvIDI7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGJydXNoRmxvdyAvIDEwMDtcbiAgICAgICAgaWYgKGJydXNoSGFyZG5lc3MgPj0gOTkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBicnVzaENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgcmFkaXVzICogYnJ1c2hIYXJkbmVzcyAvIDEwMCwgeCwgeSwgcmFkaXVzKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBicnVzaENvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgJHticnVzaENvbG9yfTAwYCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJydXNoU2VnbWVudChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlciwgdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdCh0b1ggLSBmcm9tWCwgdG9ZIC0gZnJvbVkpO1xuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgoMSwgYnJ1c2hTaXplICogMC4xMik7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGRpc3RhbmNlIC8gc3BhY2luZykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAvIHN0ZXBzO1xuICAgICAgICAgICAgYnJ1c2hEYWIoY3R4LCBmcm9tWCArICh0b1ggLSBmcm9tWCkgKiB0LCBmcm9tWSArICh0b1kgLSBmcm9tWSkgKiB0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZpZXdwb3J0RWwuY3VycmVudCA9IHJlZi5jdXJyZW50O1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdmlld3BvcnRFbC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGaXQgdGhlIGFydGJvYXJkIG9uIG9wZW4gYW5kIHdoZW4gcmVxdWVzdGVkLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZpdERvYygpO1xuICAgIH0sIFtkb2M/LmlkLCBmaXRWZXJzaW9uXSk7XG5cbiAgICAvLyBXaGVlbCBtdXN0IGJlIGEgbm9uLXBhc3NpdmUgbmF0aXZlIGxpc3RlbmVyIHRvIHByZXZlbnREZWZhdWx0IHJlbGlhYmx5LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25XaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB7IHZpZXc6IHYgfSA9IGdldFN0YXRlKCk7XG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHpvb21BdENsaWVudChcbiAgICAgICAgICAgICAgICAgICAgZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIHYuem9vbSAqIE1hdGguZXhwKC1lLmRlbHRhWSAqIHdoZWVsWm9vbVNlbnNpdGl2aXR5KHYuem9vbSkpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlUGFuKHYucGFuWCAtIGUuZGVsdGFYLCB2LnBhblkgLSBlLmRlbHRhWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHBhbk1vZGUgPSB0b29sID09PSBcImhhbmRcIiB8fCBzcGFjZVBhbjtcblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZTogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwgfHwgZS5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuICAgICAgICBpZiAoc3RhdGUudGV4dEVkaXRpbmcgJiYgIXRhcmdldC5jbG9zZXN0KFwiW2RhdGEtdGV4dC1lZGl0b3JdXCIpKSB7XG4gICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAxIHx8IHBhbk1vZGUpIHtcbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInBhblwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xpZW50WDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xpZW50WTogZS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIHN0YXJ0UGFuWDogc3RhdGUudmlldy5wYW5YLFxuICAgICAgICAgICAgICAgIHN0YXJ0UGFuWTogc3RhdGUudmlldy5wYW5ZLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhbm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBpbnNpZGUgPSAhIXN0YXRlLmRvYyAmJiB3b3JsZC54ID49IDAgJiYgd29ybGQueSA+PSAwICYmIHdvcmxkLnggPD0gc3RhdGUuZG9jLndpZHRoICYmIHdvcmxkLnkgPD0gc3RhdGUuZG9jLmhlaWdodDtcbiAgICAgICAgaWYgKHRvb2wgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICBpZiAoIWluc2lkZSB8fCAhc3RhdGUuZG9jKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBsYXllcklkID0gdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1sYXllcmlkXVwiKT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBzdGF0ZS5kb2MubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICAgICAgICAgICAgaWYgKGxheWVyPy50ZXh0KSBiZWdpblRleHRFZGl0aW5nKGxheWVyLmlkKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYWRkVGV4dExheWVyKHdvcmxkKTtcbiAgICAgICAgICAgICAgICBpZiAoaWQpIGJlZ2luVGV4dEVkaXRpbmcoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b29sID09PSBcImJydXNoXCIpIHtcbiAgICAgICAgICAgIGlmICghaW5zaWRlIHx8ICFzdGF0ZS5kb2MpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGJydXNoQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmICghY2FudmFzIHx8ICFjdHgpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IHN0YXRlLmRvYy53aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBzdGF0ZS5kb2MuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc3RhdGUuZG9jLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5kb2MuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmVnaW5CcnVzaEdlc3R1cmUoKTtcbiAgICAgICAgICAgIGJydXNoRGFiKGN0eCwgd29ybGQueCwgd29ybGQueSk7XG4gICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSB7IGtpbmQ6IFwiYnJ1c2hcIiwgbGFzdFg6IHdvcmxkLngsIGxhc3RZOiB3b3JsZC55IH07XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvb2wgPT09IFwiY3JvcFwiKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0aW9uLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHsga2luZDogXCJjcm9wXCIsIHN0YXJ0WDogd29ybGQueCwgc3RhcnRZOiB3b3JsZC55IH07XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiB7IHg6IHdvcmxkLngsIHk6IHdvcmxkLnksIHc6IDAsIGg6IDAgfSB9KTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoXCJbZGF0YS1oYW5kbGVdXCIpXG4gICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIpO1xuICAgICAgICBpZiAoaGFuZGxlICYmIHN0YXRlLnNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc3RhdGUuZG9jPy5sYXllcnMuZmluZChcbiAgICAgICAgICAgICAgICAobCkgPT4gbC5pZCA9PT0gc3RhdGUuc2VsZWN0aW9uWzBdLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0OiBMYXllclRyYW5zZm9ybSA9IHsgLi4ubGF5ZXIgfTtcbiAgICAgICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPT09IFwicm90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyBraW5kOiBcInJvdGF0ZVwiLCBpZDogbGF5ZXIuaWQsIHN0YXJ0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogXCJzY2FsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUgYXMgSGFuZGxlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVySWQgPSB0YXJnZXRcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiW2RhdGEtbGF5ZXJpZF1cIilcbiAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgICAgICBpZiAobGF5ZXJJZCkge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RlZChsYXllcklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLnNlbGVjdGlvbi5pbmNsdWRlcyhsYXllcklkKSkge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXJJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0cyA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMobGF5ZXIuaWQpKVxuICAgICAgICAgICAgICAgICAgICBzdGFydHMuc2V0KGxheWVyLmlkLCB7IHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAga2luZDogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnRYOiB3b3JsZC54LFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogd29ybGQueSxcbiAgICAgICAgICAgICAgICBzdGFydHMsXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNlbGVjdGlvbihbXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlOiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZ2VzdHVyZSA9IGdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFnZXN0dXJlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJwYW5cIikge1xuICAgICAgICAgICAgc2V0U3RhdGVQYW4oXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5zdGFydFBhblggKyAoZS5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydENsaWVudFgpLFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuc3RhcnRQYW5ZICsgKGUuY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRDbGllbnRZKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwiYnJ1c2hcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKCFjdHgpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkb2Mud2lkdGgsIHdvcmxkLngpKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkb2MuaGVpZ2h0LCB3b3JsZC55KSk7XG4gICAgICAgICAgICBicnVzaFNlZ21lbnQoY3R4LCBnZXN0dXJlLmxhc3RYLCBnZXN0dXJlLmxhc3RZLCB4LCB5KTtcbiAgICAgICAgICAgIGdlc3R1cmUubGFzdFggPSB4O1xuICAgICAgICAgICAgZ2VzdHVyZS5sYXN0WSA9IHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImNyb3BcIikge1xuICAgICAgICAgICAgY29uc3QgeCA9IHdvcmxkLng7XG4gICAgICAgICAgICBjb25zdCB5ID0gd29ybGQueTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IHsgeDogTWF0aC5taW4oZ2VzdHVyZS5zdGFydFgsIHgpLCB5OiBNYXRoLm1pbihnZXN0dXJlLnN0YXJ0WSwgeSksIHc6IE1hdGguYWJzKHggLSBnZXN0dXJlLnN0YXJ0WCksIGg6IE1hdGguYWJzKHkgLSBnZXN0dXJlLnN0YXJ0WSkgfSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IHdvcmxkLnggLSBnZXN0dXJlLnN0YXJ0WDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gd29ybGQueSAtIGdlc3R1cmUuc3RhcnRZO1xuICAgICAgICAgICAgaWYgKCFnZXN0dXJlLm1vdmVkICYmIE1hdGguaHlwb3QoZHgsIGR5KSAqIGdldFN0YXRlKCkudmlldy56b29tIDwgMilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBnZXN0dXJlLm1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBzbmFwcGVkRHggPSBkeDtcbiAgICAgICAgICAgIGxldCBzbmFwcGVkRHkgPSBkeTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmluZyA9IFsuLi5nZXN0dXJlLnN0YXJ0cy5rZXlzKCldO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgICAgICBjb25zdCBib3hlcyA9IGN1cnJlbnQuZmlsdGVyKChsKSA9PiBtb3ZpbmcuaW5jbHVkZXMobC5pZCkpLm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZ2VzdHVyZS5zdGFydHMuZ2V0KGwuaWQpITtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBzdGFydC54ICsgZHgsIHk6IHN0YXJ0LnkgKyBkeSwgdzogbC53LCBoOiBsLmggfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB7IHg6IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi54KSksIHk6IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi55KSksIHI6IE1hdGgubWF4KC4uLmJveGVzLm1hcCgoYikgPT4gYi54ICsgYi53KSksIGI6IE1hdGgubWF4KC4uLmJveGVzLm1hcCgoYikgPT4gYi55ICsgYi5oKSkgfTtcbiAgICAgICAgICAgIGNvbnN0IHhBbmNob3JzID0gW2dyb3VwLngsIChncm91cC54ICsgZ3JvdXAucikgLyAyLCBncm91cC5yXTtcbiAgICAgICAgICAgIGNvbnN0IHlBbmNob3JzID0gW2dyb3VwLnksIChncm91cC55ICsgZ3JvdXAuYikgLyAyLCBncm91cC5iXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVycyA9IGN1cnJlbnQuZmlsdGVyKChsKSA9PiAhbW92aW5nLmluY2x1ZGVzKGwuaWQpICYmIGwudmlzaWJsZSk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRYID0gWzAsIGRvYy53aWR0aCAvIDIsIGRvYy53aWR0aCwgLi4ub3RoZXJzLmZsYXRNYXAoKGwpID0+IFtsLngsIGwueCArIGwudyAvIDIsIGwueCArIGwud10pXTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFkgPSBbMCwgZG9jLmhlaWdodCAvIDIsIGRvYy5oZWlnaHQsIC4uLm90aGVycy5mbGF0TWFwKChsKSA9PiBbbC55LCBsLnkgKyBsLmggLyAyLCBsLnkgKyBsLmhdKV07XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSA2IC8gZ2V0U3RhdGUoKS52aWV3Lnpvb207XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IHRocmVzaG9sZCArIDE7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IHRocmVzaG9sZCArIDE7XG4gICAgICAgICAgICBsZXQgZ3VpZGVYOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBsZXQgZ3VpZGVZOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB4QW5jaG9ycykgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0WCkgaWYgKE1hdGguYWJzKHRhcmdldCAtIGFuY2hvcikgPCBNYXRoLmFicyhvZmZzZXRYKSkgeyBvZmZzZXRYID0gdGFyZ2V0IC0gYW5jaG9yOyBndWlkZVggPSB0YXJnZXQ7IH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHlBbmNob3JzKSBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRZKSBpZiAoTWF0aC5hYnModGFyZ2V0IC0gYW5jaG9yKSA8IE1hdGguYWJzKG9mZnNldFkpKSB7IG9mZnNldFkgPSB0YXJnZXQgLSBhbmNob3I7IGd1aWRlWSA9IHRhcmdldDsgfVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFgpIDw9IHRocmVzaG9sZCkgc25hcHBlZER4ICs9IG9mZnNldFg7IGVsc2UgZ3VpZGVYID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFkpIDw9IHRocmVzaG9sZCkgc25hcHBlZER5ICs9IG9mZnNldFk7IGVsc2UgZ3VpZGVZID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBzbmFwR3VpZGVzOiBndWlkZVggPT09IHVuZGVmaW5lZCAmJiBndWlkZVkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB7IHg6IGd1aWRlWCwgeTogZ3VpZGVZIH0gfSk7XG4gICAgICAgICAgICBjb25zdCBwYXRjaGVzID0gbmV3IE1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbaWQsIHN0YXJ0XSBvZiBnZXN0dXJlLnN0YXJ0cykge1xuICAgICAgICAgICAgICAgIHBhdGNoZXMuc2V0KGlkLCB7IHg6IHN0YXJ0LnggKyBzbmFwcGVkRHgsIHk6IHN0YXJ0LnkgKyBzbmFwcGVkRHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBseVRyYW5zaWVudChwYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHNjYWxlRnJvbUhhbmRsZShcbiAgICAgICAgICAgICAgICBnZXN0dXJlLnN0YXJ0LFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuaGFuZGxlLFxuICAgICAgICAgICAgICAgIHdvcmxkLFxuICAgICAgICAgICAgICAgIGUuc2hpZnRLZXksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXBwbHlUcmFuc2llbnQobmV3IE1hcChbW2dlc3R1cmUuaWQsIG5leHRdXSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZyb21Qb2ludGVyKGdlc3R1cmUuc3RhcnQsIHdvcmxkLCBlLnNoaWZ0S2V5KTtcbiAgICAgICAgYXBwbHlUcmFuc2llbnQobmV3IE1hcChbW2dlc3R1cmUuaWQsIHsgcm90YXRpb24gfV1dKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyVXAoKSB7XG4gICAgICAgIGNvbnN0IGdlc3R1cmUgPSBnZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHBhbm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBzZXRTdGF0ZSh7IHNuYXBHdWlkZXM6IG51bGwgfSk7XG4gICAgICAgIGlmICghZ2VzdHVyZSB8fCBnZXN0dXJlLmtpbmQgPT09IFwicGFuXCIpIHJldHVybjtcblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImJydXNoXCIpIHtcbiAgICAgICAgICAgIGVuZEJydXNoR2VzdHVyZSgpO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgIHZvaWQgcGFpbnRCcnVzaFN0cm9rZShzcmMsIGJydXNoT3BhY2l0eSAvIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJjcm9wXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBnZXRTdGF0ZSgpLmNyb3BSZWN0O1xuICAgICAgICAgICAgaWYgKCFyZWN0IHx8IHJlY3QudyA8IDIgfHwgcmVjdC5oIDwgMikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCkuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkgdm9pZCBjcm9wU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBlbHNlIGNyb3BDYW52YXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVycyA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBpZiAoIWdlc3R1cmUubW92ZWQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgc3RhcnRdIG9mIGdlc3R1cmUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJNb3ZlXCIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChnZXN0dXJlLmlkKTtcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgdywgaCB9ID0gZ2VzdHVyZS5zdGFydDtcbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSZXNpemVcIiwgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHsgeCwgeSwgdywgaCB9LFxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55LCB3OiBsYXllci53LCBoOiBsYXllci5oIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSb3RhdGVcIiwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHsgcm90YXRpb246IGdlc3R1cmUuc3RhcnQucm90YXRpb24gfSxcbiAgICAgICAgICAgICAgICBhZnRlcjogeyByb3RhdGlvbjogbGF5ZXIucm90YXRpb24gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhdCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoZmlsZVRvSW1wb3J0ZWRJbWFnZSkpO1xuICAgICAgICBhZGRJbWFnZUxheWVycyhpbWFnZXMsIGF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBsYXllcklkID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiW2RhdGEtbGF5ZXJpZF1cIik/LmdldEF0dHJpYnV0ZShcImRhdGEtbGF5ZXJpZFwiKTtcbiAgICAgICAgY29uc3QgZGlyZWN0ID0gc3RhdGUuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCAmJiBpdGVtLnRleHQpO1xuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBsYXllciA9IGRpcmVjdCA/PyBbLi4uKHN0YXRlLmRvYz8ubGF5ZXJzID8/IFtdKV0ucmV2ZXJzZSgpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiBpdGVtLnRleHQgJiYgcG9pbnRJbnNpZGVMYXllcihpdGVtLCB3b3JsZCkpO1xuICAgICAgICBpZiAobGF5ZXI/LnRleHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcnMgPSBkb2MubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgKGwpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsLmlkKSAmJiBsLnZpc2libGUsXG4gICAgKTtcbiAgICBjb25zdCBjdXJzb3IgPSBwYW5Nb2RlXG4gICAgICAgID8gcGFubmluZ1JlZi5jdXJyZW50XG4gICAgICAgICAgICA/IFwiZ3JhYmJpbmdcIlxuICAgICAgICAgICAgOiBcImdyYWJcIlxuICAgICAgICA6IHRvb2wgPT09IFwiYnJ1c2hcIiB8fCB0b29sID09PSBcImNyb3BcIiB8fCB0b29sID09PSBcInRleHRcIiA/IFwiY3Jvc3NoYWlyXCIgOiBcImRlZmF1bHRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWRvdHMgY2FudmFzLXN0YWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvciB9fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICAgICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgb25EYmxDbGljaz17b25Eb3VibGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17KGU6IERyYWdFdmVudCkgPT4gdm9pZCBvbkRyb3AoZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3ZpZXcucGFuWH1weCwgJHt2aWV3LnBhbll9cHgpIHNjYWxlKCR7dmlldy56b29tfSlgLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgYXJ0Ym9hcmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRvYy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZG9jLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclZpZXcga2V5PXtsYXllci5pZH0gbGF5ZXI9e2xheWVyfSBlZGl0aW5nPXt0ZXh0RWRpdGluZz8uaWQgPT09IGxheWVyLmlkfSBwcmV2aWV3QmxlbmQ9e2JsZW5kUHJldmlldyAmJiBzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpID8gYmxlbmRQcmV2aWV3IDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2JydXNoQ2FudmFzUmVmfSBjbGFzc05hbWU9XCJicnVzaC1vdmVybGF5XCIgc3R5bGU9e3sgb3BhY2l0eTogYnJ1c2hPcGFjaXR5IC8gMTAwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0RWRpdGluZyA/IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHRleHRFZGl0aW5nLmlkKS5tYXAoKGxheWVyKSA9PiA8SW5saW5lVGV4dEVkaXRvciBrZXk9e2xheWVyLmlkfSBsYXllcj17bGF5ZXJ9IC8+KSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyF0ZXh0RWRpdGluZyAmJiAodG9vbCA9PT0gXCJtb3ZlXCIgfHwgdG9vbCA9PT0gXCJ0ZXh0XCIpID8gc2VsZWN0ZWRMYXllcnMubWFwKChsYXllcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbT17dmlldy56b29tfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlPXt0b29sID09PSBcIm1vdmVcIiAmJiBzZWxlY3RlZExheWVycy5sZW5ndGggPT09IDF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSkgOiB0b29sID09PSBcImNyb3BcIiA/IHNlbGVjdGVkTGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJveCBrZXk9e2xheWVyLmlkfSBsYXllcj17bGF5ZXJ9IHpvb209e3ZpZXcuem9vbX0gc2luZ2xlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge3NuYXBHdWlkZXM/LnggIT09IHVuZGVmaW5lZCA/IDxkaXYgY2xhc3NOYW1lPVwic25hcC1ndWlkZSB2ZXJ0aWNhbFwiIHN0eWxlPXt7IGxlZnQ6IHNuYXBHdWlkZXMueCwgaGVpZ2h0OiBkb2MuaGVpZ2h0IH19IC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7c25hcEd1aWRlcz8ueSAhPT0gdW5kZWZpbmVkID8gPGRpdiBjbGFzc05hbWU9XCJzbmFwLWd1aWRlIGhvcml6b250YWxcIiBzdHlsZT17eyB0b3A6IHNuYXBHdWlkZXMueSwgd2lkdGg6IGRvYy53aWR0aCB9fSAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge3Rvb2wgPT09IFwiY3JvcFwiICYmIGNyb3BSZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AtYm94XCIgc3R5bGU9e3sgbGVmdDogY3JvcFJlY3QueCwgdG9wOiBjcm9wUmVjdC55LCB3aWR0aDogY3JvcFJlY3QudywgaGVpZ2h0OiBjcm9wUmVjdC5oLCBib3JkZXJXaWR0aDogMS41IC8gdmlldy56b29tIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExIC8gdmlldy56b29tLCBwYWRkaW5nOiBgJHsyIC8gdmlldy56b29tfXB4ICR7NSAvIHZpZXcuem9vbX1weGAgfX0+e01hdGgucm91bmQoY3JvcFJlY3Qudyl9IFx1MDBENyB7TWF0aC5yb3VuZChjcm9wUmVjdC5oKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gSWNvbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHRpdGxlIH06IEljb25Qcm9wcyAmIHsgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBhcmlhLWhpZGRlbj17dGl0bGUgPyB1bmRlZmluZWQgOiBcInRydWVcIn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHJvbGU9e3RpdGxlID8gXCJpbWdcIiA6IHVuZGVmaW5lZH1cbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjEuOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICA+XG4gICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuLy8gS2VwdCBhcyBsb2NhbCBjb21wb25lbnRzIGJlY2F1c2UgTGFrZWJlZCBjYXBzdWxlcyBvbmx5IGFsbG93IExha2ViZWQgYW5kXG4vLyByZWxhdGl2ZSBpbXBvcnRzLiBUaGUgQVBJIG1pcnJvcnMgdGhlIHNtYWxsIGljb24gY29tcG9uZW50cyBmcm9tIHJlYWN0LWljb25zLlxuZXhwb3J0IGNvbnN0IEZpQXJyb3dMZWZ0ID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xOSAxMkg1bTcgNy03LTcgNy03XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ2hldnJvbkRvd24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTYgOSA2IDYgNi02XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ29weSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxyZWN0IHg9XCI5XCIgeT1cIjlcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIiByeD1cIjFcIiAvPjxwYXRoIGQ9XCJNNSAxNUg0YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF2MVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaURvd25sb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAzdjEybS00LTQgNCA0IDQtNE00IDIwaDE2XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRWRpdDMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDIwaDlcIiAvPjxwYXRoIGQ9XCJNMTYuNSAzLjVhMi4xIDIuMSAwIDAgMSAzIDNMOCAxOGwtNCAxIDEtNFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlFeWUgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIgMTJzMy41LTYgMTAtNiAxMCA2IDEwIDYtMy41IDYtMTAgNlMyIDEyIDIgMTJaXCIgLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUV5ZU9mZiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtMyAzIDE4IDE4TTEwLjYgMTAuNmEyIDIgMCAwIDAgMi44IDIuOE05LjkgNS4yQTExIDExIDAgMCAxIDEyIDVjNi41IDAgMTAgNyAxMCA3YTE2IDE2IDAgMCAxLTIuMSAzLjFNNi42IDYuNkMzLjUgOC40IDIgMTIgMiAxMnMzLjUgNyAxMCA3YTEwIDEwIDAgMCAwIDQuMS0uOVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUhhbmQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTggMTFWNmEyIDIgMCAwIDEgNCAwdjQtNmEyIDIgMCAwIDEgNCAwdjYtNGEyIDIgMCAwIDEgNCAwdjdhOCA4IDAgMCAxLTggOGgtMWE3IDcgMCAwIDEtNS43LTNMMi41IDE0YTIgMiAwIDAgMSAzLTIuNkw4IDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpSW1hZ2UgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgLz48Y2lyY2xlIGN4PVwiOC41XCIgY3k9XCI4LjVcIiByPVwiMS41XCIgLz48cGF0aCBkPVwibTIxIDE1LTUtNUw1IDIxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpTGF5ZXJzID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xMiAyIDEwIDUtMTAgNUwyIDdsMTAtNVpcIiAvPjxwYXRoIGQ9XCJtMiAxMiAxMCA1IDEwLTVNMiAxN2wxMCA1IDEwLTVcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNaW51cyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1vb24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIxIDEzQTkgOSAwIDEgMSAxMSAzYTcgNyAwIDAgMCAxMCAxMFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNb3VzZVBvaW50ZXIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTQgMyA3IDE3IDIuMy02LjdMMjAgMTEgNCAzWlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVBsdXMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDV2MTRNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVJlZG8yID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xNSA0IDUgNS01IDVcIiAvPjxwYXRoIGQ9XCJNMjAgOWgtOWE3IDcgMCAwIDAtNyA3djFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlTdW4gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjRcIiAvPjxwYXRoIGQ9XCJNMTIgMnYybTAgMTZ2Mk00LjkgNC45bDEuNCAxLjRtMTEuNCAxMS40IDEuNCAxLjRNMiAxMmgybTE2IDBoMk00LjkgMTkuMWwxLjQtMS40TTE3LjcgNi4zbDEuNC0xLjRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlUcmFzaDIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTMgNmgxOE04IDZWNGg4djJtMyAwLTEgMTVINkw1IDZtNSA0djdtNC03djdcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlVbmRvMiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNOSA0IDQgOWw1IDVcIiAvPjxwYXRoIGQ9XCJNNCA5aDlhNyA3IDAgMCAxIDcgN3YxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpVXBsb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAxNVYzbS00IDQgNC00IDQgNE00IDE0djZoMTZ2LTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlCcnVzaCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtMTQuNSA0LjUgNSA1TDEwIDE5SDV2LTVaXCIgLz48cGF0aCBkPVwibTEyIDcgNSA1TTUgMTljLTEuNSAwLTIuNSAxLTIuNSAyXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ3JvcCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNNiAydjE0YTIgMiAwIDAgMCAyIDJoMTRNMiA2aDE0YTIgMiAwIDAgMSAyIDJ2MTRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlUeXBlID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk00IDVWM2gxNnYyTTkgMjFoNk0xMiAzdjE4XCIgLz48L0ljb24+O1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEJMRU5EX01PREVTLCB0eXBlIEJsZW5kTW9kZSwgdHlwZSBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21taXRUcmFuc2Zvcm1zLCBzZXRTZWxlY3Rpb25CbGVuZE1vZGUsIHVwZGF0ZVRleHRMYXllciB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuXG50eXBlIEZpZWxkUHJvcHMgPSB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlcjsgc3RlcD86IG51bWJlcjsgdW5pdD86IHN0cmluZzsgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXJGaWVsZCh7IGxhYmVsLCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXAgPSAxLCB1bml0ID0gXCJcIiwgb25DaGFuZ2UgfTogRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLXNsaWRlclwiPlxuICAgICAgPGxhYmVsPjxzcGFuPntsYWJlbH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiPntNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMH17dW5pdH08L3NwYW4+PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49e21pbn0gbWF4PXttYXh9IHN0ZXA9e3N0ZXB9IHZhbHVlPXt2YWx1ZX0gb25JbnB1dD17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZShOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTnVtYmVyRmllbGQoeyBsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBzdGVwID0gMSwgdW5pdCA9IFwiXCIsIG9uQ2hhbmdlIH06IEZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLW51bWJlclwiPlxuICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlci13cmFwXCI+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49e21pbn0gbWF4PXttYXh9IHN0ZXA9e3N0ZXB9IHZhbHVlPXtNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4geyBjb25zdCBuZXh0ID0gTnVtYmVyKChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpOyBpZiAoTnVtYmVyLmlzRmluaXRlKG5leHQpKSBvbkNoYW5nZShNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbmV4dCkpKTsgfX0gLz48aT57dW5pdH08L2k+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bjxUIGV4dGVuZHMgc3RyaW5nPih7IGxhYmVsLCB2YWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogVDsgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogVDsgbGFiZWw6IHN0cmluZyB9Pjsgb25DaGFuZ2U6ICh2YWx1ZTogVCkgPT4gdm9pZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cInByb3AtZmllbGQgcHJvcC1zZWxlY3RcIj48c3Bhbj57bGFiZWx9PC9zcGFuPjxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZSgoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSBhcyBUKX0+e29wdGlvbnMubWFwKChvcHRpb24pID0+IDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+KX08L3NlbGVjdD48L2xhYmVsPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlKHsgbGFiZWwsIGNoZWNrZWQsIG9uQ2hhbmdlIH06IHsgbGFiZWw6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbjsgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkIH0pIHtcbiAgcmV0dXJuIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3AtdG9nZ2xlXCI+PHNwYW4+e2xhYmVsfTwvc3Bhbj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4gb25DaGFuZ2UoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKX0gLz48aSAvPjwvbGFiZWw+O1xufVxuXG50eXBlIEhzdiA9IHsgaDogbnVtYmVyOyBzOiBudW1iZXI7IHY6IG51bWJlciB9O1xuXG5mdW5jdGlvbiBoZXhSZ2IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWxpZCA9IC9eI1swLTlhLWZdezZ9JC9pLnRlc3QoaGV4KSA/IGhleCA6IFwiIzAwMDAwMFwiO1xuICByZXR1cm4gW051bWJlci5wYXJzZUludCh2YWxpZC5zbGljZSgxLCAzKSwgMTYpLCBOdW1iZXIucGFyc2VJbnQodmFsaWQuc2xpY2UoMywgNSksIDE2KSwgTnVtYmVyLnBhcnNlSW50KHZhbGlkLnNsaWNlKDUsIDcpLCAxNildO1xufVxuXG5mdW5jdGlvbiByZ2JIZXgocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnQgPSAodmFsdWU6IG51bWJlcikgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHZhbHVlKSkpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7cGFydChyKX0ke3BhcnQoZyl9JHtwYXJ0KGIpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYkhzdihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogSHN2IHtcbiAgY29uc3QgW3JuLCBnbiwgYm5dID0gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTVdO1xuICBjb25zdCBtYXggPSBNYXRoLm1heChybiwgZ24sIGJuKSwgbWluID0gTWF0aC5taW4ocm4sIGduLCBibiksIGQgPSBtYXggLSBtaW47XG4gIGxldCBoID0gMDtcbiAgaWYgKGQpIGggPSBtYXggPT09IHJuID8gKChnbiAtIGJuKSAvIGQpICUgNiA6IG1heCA9PT0gZ24gPyAoYm4gLSBybikgLyBkICsgMiA6IChybiAtIGduKSAvIGQgKyA0O1xuICByZXR1cm4geyBoOiAoKGggKiA2MCkgKyAzNjApICUgMzYwLCBzOiBtYXggPyBkIC8gbWF4IDogMCwgdjogbWF4IH07XG59XG5cbmZ1bmN0aW9uIGhzdlJnYih7IGgsIHMsIHYgfTogSHN2KTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgYyA9IHYgKiBzLCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSksIG0gPSB2IC0gYztcbiAgY29uc3QgdmFsdWVzID0gaCA8IDYwID8gW2MsIHgsIDBdIDogaCA8IDEyMCA/IFt4LCBjLCAwXSA6IGggPCAxODAgPyBbMCwgYywgeF0gOiBoIDwgMjQwID8gWzAsIHgsIGNdIDogaCA8IDMwMCA/IFt4LCAwLCBjXSA6IFtjLCAwLCB4XTtcbiAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAodmFsdWUgKyBtKSAqIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JQaWNrZXIoeyB2YWx1ZSwgb25DaGFuZ2UgfTogeyB2YWx1ZTogc3RyaW5nOyBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgfSkge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXhSZ2IodmFsdWUpO1xuICBjb25zdCBoc3YgPSByZ2JIc3YociwgZywgYik7XG4gIGNvbnN0IGh1ZUhleCA9IHJnYkhleCguLi5oc3ZSZ2IoeyBoOiBoc3YuaCwgczogMSwgdjogMSB9KSk7XG5cbiAgZnVuY3Rpb24gc2V0SHN2KG5leHQ6IEhzdikgeyBvbkNoYW5nZShyZ2JIZXgoLi4uaHN2UmdiKG5leHQpKSk7IH1cbiAgZnVuY3Rpb24gcGlja1N2KGU6IFBvaW50ZXJFdmVudCkge1xuICAgIGNvbnN0IGVsID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBzZXRIc3YoeyBoOiBoc3YuaCwgczogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoKSksIHY6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIDEgLSAoZS5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQpKSB9KTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBleWVkcm9wKCkge1xuICAgIGNvbnN0IEV5ZURyb3BwZXJDdG9yID0gKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgRXllRHJvcHBlcj86IG5ldyAoKSA9PiB7IG9wZW46ICgpID0+IFByb21pc2U8eyBzUkdCSGV4OiBzdHJpbmcgfT4gfSB9KS5FeWVEcm9wcGVyO1xuICAgIGlmICghRXllRHJvcHBlckN0b3IpIHJldHVybjtcbiAgICB0cnkgeyBvbkNoYW5nZSgoYXdhaXQgbmV3IEV5ZURyb3BwZXJDdG9yKCkub3BlbigpKS5zUkdCSGV4KTsgfSBjYXRjaCB7IC8qIGNhbmNlbGxlZCAqLyB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGlja2VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXBpY2tlclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaHVlSGV4IH19IG9uUG9pbnRlckRvd249e3BpY2tTdn0gb25Qb2ludGVyTW92ZT17KGU6IFBvaW50ZXJFdmVudCkgPT4geyBpZiAoZS5idXR0b25zID09PSAxKSBwaWNrU3YoZSk7IH19PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBsZWZ0OiBgJHtoc3YucyAqIDEwMH0lYCwgdG9wOiBgJHsoMSAtIGhzdi52KSAqIDEwMH0lYCB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaHVlLXNsaWRlclwiIGFyaWEtbGFiZWw9XCJIdWVcIiB0eXBlPVwicmFuZ2VcIiBtaW49ezB9IG1heD17MzU5fSB2YWx1ZT17TWF0aC5yb3VuZChoc3YuaCl9IG9uSW5wdXQ9eyhlOiBFdmVudCkgPT4gc2V0SHN2KHsgLi4uaHN2LCBoOiBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkgfSl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXJvd1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2VyIGNvbG9yLXN3YXRjaFwiPjxpIHN0eWxlPXt7IGJhY2tncm91bmQ6IHZhbHVlIH19IC8+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaGV4LWlucHV0XCIgYXJpYS1sYWJlbD1cIkhleCBjb2xvclwiIHZhbHVlPXt2YWx1ZS50b1VwcGVyQ2FzZSgpfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IG5leHQgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlOyBpZiAoL14jWzAtOWEtZl17Nn0kL2kudGVzdChuZXh0KSkgb25DaGFuZ2UobmV4dCk7IH19IC8+XG4gICAgICAgIHsod2luZG93IGFzIHVua25vd24gYXMgeyBFeWVEcm9wcGVyPzogdW5rbm93biB9KS5FeWVEcm9wcGVyID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZXllZHJvcHBlclwiIHRpdGxlPVwiUGljayBjb2xvciBmcm9tIHNjcmVlblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgZXllZHJvcCgpfT5cdTIzM0U8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJnYi1yb3dcIj57KFtyLCBnLCBiXSBhcyBudW1iZXJbXSkubWFwKChjaGFubmVsLCBpbmRleCkgPT4gPGxhYmVsIGtleT17aW5kZXh9PjxzcGFuPntcIlJHQlwiW2luZGV4XX08L3NwYW4+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IG1heD17MjU1fSB2YWx1ZT17Y2hhbm5lbH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4geyBjb25zdCByZ2IgPSBbciwgZywgYl07IHJnYltpbmRleF0gPSBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7IG9uQ2hhbmdlKHJnYkhleChyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdKSk7IH19IC8+PC9sYWJlbD4pfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3Rpb25Qcm9wZXJ0aWVzKHsgbGF5ZXJJZCB9OiB7IGxheWVySWQ6IHN0cmluZyB9KSB7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBsYXllciA9IGRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAoIWxheWVyKSByZXR1cm4gbnVsbDtcbiAgZnVuY3Rpb24gY2hhbmdlKGtleTogXCJvcGFjaXR5XCIgfCBcInZpc2libGVcIiwgdmFsdWU6IG51bWJlciB8IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgICBpZiAoIWN1cnJlbnQpIHJldHVybjtcbiAgICBjb21taXRUcmFuc2Zvcm1zKFwiUHJvcGVydGllc1wiLCBbeyBpZDogbGF5ZXJJZCwgYmVmb3JlOiB7IFtrZXldOiBjdXJyZW50W2tleV0gfSwgYWZ0ZXI6IHsgW2tleV06IHZhbHVlIH0gfV0pO1xuICB9XG4gIHJldHVybiA8PlxuICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIk9wYWNpdHlcIiB2YWx1ZT17TWF0aC5yb3VuZChsYXllci5vcGFjaXR5ICogMTAwKX0gbWluPXswfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IGNoYW5nZShcIm9wYWNpdHlcIiwgdiAvIDEwMCl9IC8+XG4gICAgPERyb3Bkb3duPEJsZW5kTW9kZT4gbGFiZWw9XCJCbGVuZFwiIHZhbHVlPXtsYXllci5ibGVuZE1vZGV9IG9wdGlvbnM9e0JMRU5EX01PREVTLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUucmVwbGFjZSgvLS9nLCBcIiBcIikucmVwbGFjZSgvXi4vLCAobGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSkgfSkpfSBvbkNoYW5nZT17c2V0U2VsZWN0aW9uQmxlbmRNb2RlfSAvPlxuICAgIDxUb2dnbGUgbGFiZWw9XCJWaXNpYmxlXCIgY2hlY2tlZD17bGF5ZXIudmlzaWJsZX0gb25DaGFuZ2U9eyh2KSA9PiBjaGFuZ2UoXCJ2aXNpYmxlXCIsIHYpfSAvPlxuICA8Lz47XG59XG5cbmZ1bmN0aW9uIFRleHREZWZhdWx0cygpIHtcbiAgY29uc3QgZm9udEZhbWlseSA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0Rm9udEZhbWlseSk7XG4gIGNvbnN0IGZvbnRTaXplID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRGb250U2l6ZSk7XG4gIGNvbnN0IGZvbnRXZWlnaHQgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEZvbnRXZWlnaHQpO1xuICBjb25zdCBhbGlnbiA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0QWxpZ24pO1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRMaW5lSGVpZ2h0KTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uIHRleHQtcHJvcGVydGllc1wiPlxuICAgIDxwIGNsYXNzTmFtZT1cInRvb2wtaGludFwiPkNsaWNrIHRoZSBjYW52YXMgdG8gYWRkIHRleHQuPC9wPlxuICAgIDxEcm9wZG93biBsYWJlbD1cIkZvbnRcIiB2YWx1ZT17Zm9udEZhbWlseX0gb3B0aW9ucz17W1wiSW5zdHJ1bWVudCBTYW5zXCIsIFwiSW50ZXJcIiwgXCJJQk0gUGxleCBNb25vXCIsIFwiQXJpYWxcIiwgXCJHZW9yZ2lhXCIsIFwiQ291cmllciBOZXdcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIl0ubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIGxhYmVsOiB2YWx1ZSB9KSl9IG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyB0ZXh0Rm9udEZhbWlseTogdiB9KX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3AtZ3JpZFwiPjxOdW1iZXJGaWVsZCBsYWJlbD1cIlNpemVcIiB2YWx1ZT17Zm9udFNpemV9IG1pbj17Nn0gbWF4PXs1MDB9IHVuaXQ9XCJweFwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyB0ZXh0Rm9udFNpemU6IHYgfSl9IC8+PERyb3Bkb3duIGxhYmVsPVwiV2VpZ2h0XCIgdmFsdWU9e1N0cmluZyhmb250V2VpZ2h0KX0gb3B0aW9ucz17WzEwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDkwMF0ubWFwKCh2KSA9PiAoeyB2YWx1ZTogU3RyaW5nKHYpLCBsYWJlbDogU3RyaW5nKHYpIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRGb250V2VpZ2h0OiBOdW1iZXIodikgfSl9IC8+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWZpZWxkXCI+PHNwYW4+QWxpZ25tZW50PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwic2VnbWVudC1jb250cm9sXCI+eyhbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0gYXMgVGV4dEFsaWduW10pLm1hcCgodmFsdWUpID0+IDxidXR0b24ga2V5PXt2YWx1ZX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YWxpZ24gPT09IHZhbHVlID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgdGV4dEFsaWduOiB2YWx1ZSB9KX0+e3ZhbHVlWzBdLnRvVXBwZXJDYXNlKCl9PC9idXR0b24+KX08L2Rpdj48L2Rpdj5cbiAgICA8TnVtYmVyRmllbGQgbGFiZWw9XCJMaW5lIGhlaWdodFwiIHZhbHVlPXtsaW5lSGVpZ2h0fSBtaW49ezAuNn0gbWF4PXszfSBzdGVwPXswLjA1fSBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgdGV4dExpbmVIZWlnaHQ6IHYgfSl9IC8+XG4gIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnRpZXNQYW5lbCh7IGhlaWdodCB9OiB7IGhlaWdodD86IG51bWJlciB9KSB7XG4gIGNvbnN0IHRvb2wgPSB1c2VFZGl0b3IoKHMpID0+IHMudG9vbCk7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgY29uc3QgYnJ1c2hTaXplID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoU2l6ZSk7XG4gIGNvbnN0IGJydXNoSGFyZG5lc3MgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hIYXJkbmVzcyk7XG4gIGNvbnN0IGJydXNoT3BhY2l0eSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaE9wYWNpdHkpO1xuICBjb25zdCBicnVzaEZsb3cgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hGbG93KTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBkb2M/LmxheWVycy5maW5kKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHNlbGVjdGlvbltzZWxlY3Rpb24ubGVuZ3RoIC0gMV0pO1xuICBjb25zdCB0ZXh0ID0gc2VsZWN0ZWQ/LnRleHQ7XG4gIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0ZXh0KSBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogdGV4dC5jb2xvciB9KTsgfSwgW3NlbGVjdGVkPy5pZF0pO1xuXG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzLXBhbmVsXCIgc3R5bGU9e2hlaWdodCA/IHsgaGVpZ2h0IH0gOiB1bmRlZmluZWR9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZFwiPjxzcGFuPnt0b29sID09PSBcImJydXNoXCIgPyBcIkJydXNoXCIgOiB0b29sID09PSBcInRleHRcIiB8fCB0ZXh0ID8gXCJUZXh0XCIgOiBzZWxlY3RlZCA/IFwiUHJvcGVydGllc1wiIDogXCJDYW52YXNcIn08L3NwYW4+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzLWJvZHlcIj5cbiAgICAgIHt0b29sID09PSBcImJydXNoXCIgPyA8ZGl2IGNsYXNzTmFtZT1cInByb3Atc2VjdGlvblwiPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJTaXplXCIgdmFsdWU9e2JydXNoU2l6ZX0gbWluPXsxfSBtYXg9ezMwMH0gdW5pdD1cInB4XCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IGJydXNoU2l6ZTogdiB9KX0gLz5cbiAgICAgICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiSGFyZG5lc3NcIiB2YWx1ZT17YnJ1c2hIYXJkbmVzc30gbWluPXswfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hIYXJkbmVzczogdiB9KX0gLz5cbiAgICAgICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiT3BhY2l0eVwiIHZhbHVlPXticnVzaE9wYWNpdHl9IG1pbj17MX0gbWF4PXsxMDB9IHVuaXQ9XCIlXCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IGJydXNoT3BhY2l0eTogdiB9KX0gLz5cbiAgICAgICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiRmxvd1wiIHZhbHVlPXticnVzaEZsb3d9IG1pbj17MX0gbWF4PXsxMDB9IHVuaXQ9XCIlXCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IGJydXNoRmxvdzogdiB9KX0gLz5cbiAgICAgIDwvZGl2PiA6IHRleHQgJiYgc2VsZWN0ZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInByb3Atc2VjdGlvbiB0ZXh0LXByb3BlcnRpZXNcIj5cbiAgICAgICAgPERyb3Bkb3duIGxhYmVsPVwiRm9udFwiIHZhbHVlPXt0ZXh0LmZvbnRGYW1pbHl9IG9wdGlvbnM9e1tcIkluc3RydW1lbnQgU2Fuc1wiLCBcIkludGVyXCIsIFwiSUJNIFBsZXggTW9ub1wiLCBcIkFyaWFsXCIsIFwiR2VvcmdpYVwiLCBcIkNvdXJpZXIgTmV3XCIsIFwiVGltZXMgTmV3IFJvbWFuXCJdLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUgfSkpfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBmb250RmFtaWx5OiB2IH0sIFwiRm9udFwiKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWdyaWRcIj48TnVtYmVyRmllbGQgbGFiZWw9XCJTaXplXCIgdmFsdWU9e3RleHQuZm9udFNpemV9IG1pbj17Nn0gbWF4PXs1MDB9IHVuaXQ9XCJweFwiIG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGZvbnRTaXplOiB2IH0sIFwiVGV4dCBzaXplXCIpfSAvPjxEcm9wZG93biBsYWJlbD1cIldlaWdodFwiIHZhbHVlPXtTdHJpbmcodGV4dC5mb250V2VpZ2h0KX0gb3B0aW9ucz17WzEwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDkwMF0ubWFwKCh2KSA9PiAoeyB2YWx1ZTogU3RyaW5nKHYpLCBsYWJlbDogU3RyaW5nKHYpIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgZm9udFdlaWdodDogTnVtYmVyKHYpIH0sIFwiVGV4dCB3ZWlnaHRcIil9IC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1maWVsZFwiPjxzcGFuPkFsaWdubWVudDwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnQtY29udHJvbFwiPnsoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdIGFzIFRleHRBbGlnbltdKS5tYXAoKGFsaWduKSA9PiA8YnV0dG9uIGtleT17YWxpZ259IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3RleHQuYWxpZ24gPT09IGFsaWduID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBhbGlnbiB9LCBcIlRleHQgYWxpZ25tZW50XCIpfT57YWxpZ25bMF0udG9VcHBlckNhc2UoKX08L2J1dHRvbj4pfTwvZGl2PjwvZGl2PlxuICAgICAgICA8TnVtYmVyRmllbGQgbGFiZWw9XCJMaW5lIGhlaWdodFwiIHZhbHVlPXt0ZXh0LmxpbmVIZWlnaHR9IG1pbj17MC42fSBtYXg9ezN9IHN0ZXA9ezAuMDV9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGxpbmVIZWlnaHQ6IHYgfSwgXCJMaW5lIGhlaWdodFwiKX0gLz5cbiAgICAgIDwvZGl2PiA6IHRvb2wgPT09IFwidGV4dFwiID8gPFRleHREZWZhdWx0cyAvPiA6IHNlbGVjdGVkID8gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb25cIj48U2VsZWN0aW9uUHJvcGVydGllcyBsYXllcklkPXtzZWxlY3RlZC5pZH0gLz48L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzLWVtcHR5XCI+U2VsZWN0IGEgbGF5ZXIgb3IgY2hvb3NlIGEgdG9vbC48L3A+fVxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+O1xufVxuIiwgIi8vIExheWVycyBwYW5lbDogdG9wLWZpcnN0IGxpc3Qgd2l0aCB2aXNpYmlsaXR5IHRvZ2dsZXMsIGlubGluZSByZW5hbWUsXG4vLyBkcmFnLXRvLXJlb3JkZXIsIGFuIG9wYWNpdHkgc2xpZGVyLCBhbmQgZHVwbGljYXRlL2RlbGV0ZSBhY3Rpb25zLlxuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgY2xlYW5OYW1lLCB0eXBlIExheWVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBhZGRCbGFua0xheWVyLFxuICAgIHJlbmFtZUxheWVyLFxuICAgIHJlb3JkZXJMYXllcixcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlU2VsZWN0ZWQsXG4gICAgdG9nZ2xlVmlzaWJsZSxcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnksIGRpc3BsYXlTcmMgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyB1c2VFZGl0b3IgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IEZpRXllLCBGaUV5ZU9mZiwgRmlMYXllcnMsIEZpUGx1cyB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzUGFuZWwgfSBmcm9tIFwiLi9Qcm9wZXJ0aWVzUGFuZWxcIjtcblxuZnVuY3Rpb24gTGF5ZXJUaHVtYih7IGxheWVyIH06IHsgbGF5ZXI6IExheWVyIH0pIHtcbiAgICBjb25zdCBhc3NldCA9IHVzZUFzc2V0RW50cnkobGF5ZXIuYXNzZXRJZCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tlciBsYXllci10aHVtYlwiPlxuICAgICAgICAgICAge2Fzc2V0ID8gPGltZyBhbHQ9XCJcIiBzcmM9e2Rpc3BsYXlTcmMoYXNzZXQpfSBkcmFnZ2FibGU9e2ZhbHNlfSAvPiA6IG51bGx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBMYXllclJvd1ZpZXcoe1xuICAgIGxheWVyLFxuICAgIGRpc3BsYXlJbmRleCxcbiAgICBzZWxlY3RlZCxcbiAgICBvbkRyYWdGcm9tLFxuICAgIGRyb3BNYXJrLFxufToge1xuICAgIGxheWVyOiBMYXllcjtcbiAgICBkaXNwbGF5SW5kZXg6IG51bWJlcjtcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICBvbkRyYWdGcm9tOiAoc2xvdDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGRyb3BNYXJrOiBcImFib3ZlXCIgfCBcImJlbG93XCIgfCBudWxsO1xufSkge1xuICAgIGNvbnN0IFtlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGNvbW1pdFJlbmFtZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHJlbmFtZUxheWVyKGxheWVyLmlkLCBjbGVhbk5hbWUoaW5wdXQudmFsdWUsIGxheWVyLm5hbWUpKTtcbiAgICAgICAgc2V0RWRpdGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpXG4gICAgICAgICAgICBkcmFnZ2FibGU9eyFlZGl0aW5nfVxuICAgICAgICAgICAgZGF0YS1kaXNwbGF5LWluZGV4PXtkaXNwbGF5SW5kZXh9XG4gICAgICAgICAgICBvbkRyYWdTdGFydD17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyPy5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBTdHJpbmcoZGlzcGxheUluZGV4KSk7XG4gICAgICAgICAgICAgICAgb25EcmFnRnJvbShkaXNwbGF5SW5kZXgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHRvZ2dsZVNlbGVjdGVkKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICBlbHNlIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsYXllci1yb3cgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9ICR7bGF5ZXIudmlzaWJsZSA/IFwiXCIgOiBcImhpZGRlblwifWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtkcm9wTWFyayA/IDxzcGFuIGNsYXNzTmFtZT17YGRyb3AtbWFyayAke2Ryb3BNYXJrfWB9IC8+IDogbnVsbH1cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17bGF5ZXIudmlzaWJsZSA/IFwiSGlkZSBsYXllclwiIDogXCJTaG93IGxheWVyXCJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVmlzaWJsZShsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2aXNpYmlsaXR5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGF5ZXIudmlzaWJsZSA/IDxGaUV5ZSAvPiA6IDxGaUV5ZU9mZiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPExheWVyVGh1bWIgbGF5ZXI9e2xheWVyfSAvPlxuICAgICAgICAgICAge2VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2xheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17Y29tbWl0UmVuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgc2V0RWRpdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBNb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uRGJsQ2xpY2s9eygpID0+IHNldEVkaXRpbmcodHJ1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2xpPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXllcnNQYW5lbCgpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgICBjb25zdCBbZHJvcFNsb3QsIHNldERyb3BTbG90XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtwYW5lbFdpZHRoLCBzZXRQYW5lbFdpZHRoXSA9IHVzZVN0YXRlKCgpID0+IE1hdGgubWF4KDIyMCwgTWF0aC5taW4oNDIwLCBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItcGFuZWwtd2lkdGhcIikpIHx8IDI0NCkpKTtcbiAgICBjb25zdCBbcHJvcGVydGllc0hlaWdodCwgc2V0UHJvcGVydGllc0hlaWdodF0gPSB1c2VTdGF0ZSgoKSA9PiBNYXRoLm1heCgxNTAsIE1hdGgubWluKDUwMCwgTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXByb3BlcnRpZXMtaGVpZ2h0XCIpKSB8fCAyMzApKSk7XG4gICAgY29uc3QgZHJhZ0Zyb21SZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcGFuZWxSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgLy8gRGlzcGxheSBvcmRlciBpcyB0b3AgbGF5ZXIgZmlyc3Q7IHRoZSBkb2Mgc3RvcmVzIGJvdHRvbS1maXJzdC5cbiAgICBjb25zdCBkaXNwbGF5ID0gWy4uLmRvYy5sYXllcnNdLnJldmVyc2UoKTtcbiAgICBjb25zdCBjb3VudCA9IGRvYy5sYXllcnMubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gc2xvdEZyb21FdmVudChlOiBEcmFnRXZlbnQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCByb3cgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCJbZGF0YS1kaXNwbGF5LWluZGV4XVwiKTtcbiAgICAgICAgaWYgKCFyb3cpIHJldHVybiBkcm9wU2xvdCA/PyAwO1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNwbGF5LWluZGV4XCIpKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIGUuY2xpZW50WSA8IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyID8gaW5kZXggOiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZyb20gPSBkcmFnRnJvbVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzbG90ID0gZHJvcFNsb3Q7XG4gICAgICAgIGRyYWdGcm9tUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICBzZXREcm9wU2xvdChudWxsKTtcbiAgICAgICAgaWYgKGZyb20gPT09IG51bGwgfHwgc2xvdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhZGp1c3RlZCA9IHNsb3QgPiBmcm9tID8gc2xvdCAtIDEgOiBzbG90O1xuICAgICAgICBpZiAoYWRqdXN0ZWQgPT09IGZyb20pIHJldHVybjtcbiAgICAgICAgLy8gQ29udmVydCBkaXNwbGF5IGNvb3JkaW5hdGVzICh0b3AtZmlyc3QpIHRvIGRvYyBjb29yZGluYXRlcyAoYm90dG9tLWZpcnN0KS5cbiAgICAgICAgcmVvcmRlckxheWVyKGNvdW50IC0gMSAtIGZyb20sIGNvdW50IC0gMSAtIGFkanVzdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFJlc2l6ZShraW5kOiBcIndpZHRoXCIgfCBcInByb3BlcnRpZXNcIiwgZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbFRvcCA9IHBhbmVsUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA/PyAwO1xuICAgICAgICBjb25zdCBvbk1vdmUgPSAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJ3aWR0aFwiKSBzZXRQYW5lbFdpZHRoKE1hdGgubWF4KDIyMCwgTWF0aC5taW4oNDIwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIGUuY2xpZW50WCkpKTtcbiAgICAgICAgICAgIGVsc2Ugc2V0UHJvcGVydGllc0hlaWdodChNYXRoLm1heCgxNTAsIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNywgZS5jbGllbnRZIC0gcGFuZWxUb3ApKSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uVXAgPSAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBvbk1vdmUoZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgb25VcCk7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJ3aWR0aFwiKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlLWVkaXRvci1wYW5lbC13aWR0aFwiLCBTdHJpbmcoTWF0aC5tYXgoMjIwLCBNYXRoLm1pbig0MjAsIHdpbmRvdy5pbm5lcldpZHRoIC0gZS5jbGllbnRYKSkpKTtcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcInByb3BlcnRpZXNcIikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZS1lZGl0b3ItcHJvcGVydGllcy1oZWlnaHRcIiwgU3RyaW5nKE1hdGgubWF4KDE1MCwgTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0ICogMC43LCBlLmNsaWVudFkgLSBwYW5lbFRvcCkpKSk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG9uVXApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZSByZWY9e3BhbmVsUmVmfSBjbGFzc05hbWU9XCJsYXllcnMtcGFuZWxcIiBzdHlsZT17eyB3aWR0aDogcGFuZWxXaWR0aCB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtd2lkdGgtcmVzaXplclwiIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IHN0YXJ0UmVzaXplKFwid2lkdGhcIiwgZSl9IC8+XG4gICAgICAgICAgICA8UHJvcGVydGllc1BhbmVsIGhlaWdodD17cHJvcGVydGllc0hlaWdodH0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydGllcy1yZXNpemVyXCIgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gc3RhcnRSZXNpemUoXCJwcm9wZXJ0aWVzXCIsIGUpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkIGxheWVycy1oZWFkXCI+XG4gICAgICAgICAgICAgICAgPEZpTGF5ZXJzIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+TGF5ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmV3IGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItYWRkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQmxhbmtMYXllcigpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWxpc3RcIlxuICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXREcm9wU2xvdChzbG90RnJvbUV2ZW50KGUpKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiBzZXREcm9wU2xvdChudWxsKX1cbiAgICAgICAgICAgICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheS5tYXAoKGxheWVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJSb3dWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnRnJvbT17KHNsb3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnRnJvbVJlZi5jdXJyZW50ID0gc2xvdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWFyaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcFNsb3QgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhYm92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZHJvcFNsb3QgPT09IGluZGV4ICsgMSAmJiBpbmRleCA9PT0gY291bnQgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJlbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7Y291bnQgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuby1sYXllcnNcIj5ObyBsYXllcnMgeWV0LjwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FzaWRlPlxuICAgICk7XG59XG4iLCAiLy8gTGVmdCB0b29sIHJhaWw6IG1vdmUgLyBoYW5kIHRvb2xzLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmaW5pc2hUZXh0RWRpdGluZywgdXBkYXRlVGV4dExheWVyIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHNldFN0YXRlLCB1c2VFZGl0b3IsIHR5cGUgVG9vbCB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgRmlCcnVzaCwgRmlDcm9wLCBGaUhhbmQsIEZpTW91c2VQb2ludGVyLCBGaVR5cGUgfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXIgfSBmcm9tIFwiLi9Qcm9wZXJ0aWVzUGFuZWxcIjtcblxuY29uc3QgVE9PTFM6IEFycmF5PHsgaWQ6IFRvb2w7IGxhYmVsOiBzdHJpbmc7IGhpbnQ6IHN0cmluZzsgaWNvbjogdHlwZW9mIEZpSGFuZCB9PiA9IFtcbiAgeyBpZDogXCJtb3ZlXCIsIGxhYmVsOiBcIk1vdmVcIiwgaGludDogXCJWXCIsIGljb246IEZpTW91c2VQb2ludGVyIH0sXG4gIHsgaWQ6IFwiaGFuZFwiLCBsYWJlbDogXCJIYW5kXCIsIGhpbnQ6IFwiSFwiLCBpY29uOiBGaUhhbmQgfSxcbiAgeyBpZDogXCJ0ZXh0XCIsIGxhYmVsOiBcIlRleHRcIiwgaGludDogXCJUXCIsIGljb246IEZpVHlwZSB9LFxuICB7IGlkOiBcImJydXNoXCIsIGxhYmVsOiBcIkJydXNoXCIsIGhpbnQ6IFwiQlwiLCBpY29uOiBGaUJydXNoIH0sXG4gIHsgaWQ6IFwiY3JvcFwiLCBsYWJlbDogXCJDcm9wXCIsIGhpbnQ6IFwiQ1wiLCBpY29uOiBGaUNyb3AgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRvb2xiYXIoKSB7XG4gIGNvbnN0IHRvb2wgPSB1c2VFZGl0b3IoKHMpID0+IHMudG9vbCk7XG4gIGNvbnN0IGZvcmVncm91bmRDb2xvciA9IHVzZUVkaXRvcigocykgPT4gcy5mb3JlZ3JvdW5kQ29sb3IpO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB1c2VFZGl0b3IoKHMpID0+IHMuYmFja2dyb3VuZENvbG9yKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLnNlbGVjdGlvbik7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBzZWxlY3RlZFRleHQgPSBkb2M/LmxheWVycy5maW5kKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHNlbGVjdGlvbltzZWxlY3Rpb24ubGVuZ3RoIC0gMV0gJiYgbGF5ZXIudGV4dCk7XG4gIGNvbnN0IFtjb2xvck9wZW4sIHNldENvbG9yT3Blbl0gPSB1c2VTdGF0ZTxcImZvcmVncm91bmRcIiB8IFwiYmFja2dyb3VuZFwiIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHRleHRDb2xvclRpbWVyID0gdXNlUmVmPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcbiAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQodGV4dENvbG9yVGltZXIuY3VycmVudCksIFtdKTtcblxuICBmdW5jdGlvbiBzZXRGb3JlZ3JvdW5kKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogdmFsdWUgfSk7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0ZXh0Q29sb3JUaW1lci5jdXJyZW50KTtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0Py50ZXh0KSB0ZXh0Q29sb3JUaW1lci5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkVGV4dC5pZCwgeyBjb2xvcjogdmFsdWUgfSwgXCJUZXh0IGNvbG9yXCIpLCAxODApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInRvb2wtcmFpbFwiPlxuICAgICAge1RPT0xTLm1hcCgodCkgPT4ge1xuICAgICAgICBjb25zdCBUb29sSWNvbiA9IHQuaWNvbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3QuaWR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtgJHt0LmxhYmVsfSAoJHt0LmhpbnR9KWB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0LmxhYmVsfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBmaW5pc2hUZXh0RWRpdGluZygpOyBzZXRTdGF0ZSh7IHRvb2w6IHQuaWQgfSk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0b29sLWJ1dHRvbiAke3Rvb2wgPT09IHQuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb29sSWNvbiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItY29sb3JzXCIgdGl0bGU9XCJGb3JlZ3JvdW5kIC8gYmFja2dyb3VuZCBjb2xvcnNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLXN3YXRjaCBiYWNrZ3JvdW5kXCIgYXJpYS1sYWJlbD1cIkVkaXQgYmFja2dyb3VuZCBjb2xvclwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvciB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvck9wZW4oY29sb3JPcGVuID09PSBcImJhY2tncm91bmRcIiA/IG51bGwgOiBcImJhY2tncm91bmRcIil9IC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdsb2JhbC1zd2F0Y2ggZm9yZWdyb3VuZFwiIGFyaWEtbGFiZWw9XCJFZGl0IGZvcmVncm91bmQgY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBmb3JlZ3JvdW5kQ29sb3IgfX0gb25DbGljaz17KCkgPT4gc2V0Q29sb3JPcGVuKGNvbG9yT3BlbiA9PT0gXCJmb3JlZ3JvdW5kXCIgPyBudWxsIDogXCJmb3JlZ3JvdW5kXCIpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzd2FwLWNvbG9yc1wiIHRpdGxlPVwiU3dhcCBjb2xvcnMgKFgpXCIgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yOiBmb3JlZ3JvdW5kQ29sb3IgfSl9Plx1MjE5NzwvYnV0dG9uPlxuICAgICAgICB7Y29sb3JPcGVuID8gPGRpdiBjbGFzc05hbWU9XCJ0b29sLWNvbG9yLXBvcG92ZXJcIiBvblBvaW50ZXJEb3duPXsoZTogUG9pbnRlckV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT48ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXBvcG92ZXItaGVhZFwiPjxzcGFuPntjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gXCJGb3JlZ3JvdW5kXCIgOiBcIkJhY2tncm91bmRcIn08L3NwYW4+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0Q29sb3JPcGVuKG51bGwpfT5cdTAwRDc8L2J1dHRvbj48L2Rpdj48Q29sb3JQaWNrZXIgdmFsdWU9e2NvbG9yT3BlbiA9PT0gXCJmb3JlZ3JvdW5kXCIgPyBmb3JlZ3JvdW5kQ29sb3IgOiBiYWNrZ3JvdW5kQ29sb3J9IG9uQ2hhbmdlPXtjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gc2V0Rm9yZWdyb3VuZCA6ICh2YWx1ZSkgPT4gc2V0U3RhdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlIH0pfSAvPjwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2FzaWRlPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBGaU1vb24sIEZpU3VuIH0gZnJvbSBcIi4vSWNvbnNcIjtcblxudHlwZSBUaGVtZSA9IFwibGlnaHRcIiB8IFwiZGFya1wiO1xuXG5mdW5jdGlvbiBwcmVmZXJyZWRUaGVtZSgpOiBUaGVtZSB7XG4gIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIik7XG4gIGlmIChzYXZlZCA9PT0gXCJsaWdodFwiIHx8IHNhdmVkID09PSBcImRhcmtcIikgcmV0dXJuIHNhdmVkO1xuICByZXR1cm4gbWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcyA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVUb2dnbGUoKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGU8VGhlbWU+KCgpID0+IHByZWZlcnJlZFRoZW1lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPSB0aGVtZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlLWVkaXRvci10aGVtZVwiLCB0aGVtZSk7XG4gIH0sIFt0aGVtZV0pO1xuXG4gIGNvbnN0IG5leHQgPSB0aGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uIHRoZW1lLXRvZ2dsZVwiXG4gICAgICBhcmlhLWxhYmVsPXtgU3dpdGNoIHRvICR7bmV4dH0gbW9kZWB9XG4gICAgICB0aXRsZT17YFN3aXRjaCB0byAke25leHR9IG1vZGVgfVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUobmV4dCl9XG4gICAgPlxuICAgICAge3RoZW1lID09PSBcImRhcmtcIiA/IDxGaVN1biAvPiA6IDxGaU1vb24gLz59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iLCAiLy8gRWRpdG9yIGNocm9tZTogYmFjayBsaW5rLCBwcm9qZWN0IG5hbWUsIHVuZG8vcmVkbywgem9vbSwgZXhwb3J0LCBhbmQgdGhlXG4vLyBwZXJzaXN0ZW5jZSBzdGF0dXMgaW5kaWNhdG9yIGZlZCBieSB0aGUgd3JpdGUtYmVoaW5kIHF1ZXVlLlxuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgY2xlYW5OYW1lIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgZG93bmxvYWRQbmcgfSBmcm9tIFwiLi4vbGliL3JlbmRlclwiO1xuaW1wb3J0IHsgYWRkSW1hZ2VMYXllcnMsIHJlbmFtZVByb2plY3QgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgY2FuUmVkbywgY2FuVW5kbywgcmVkbywgdW5kbyB9IGZyb20gXCIuLi9zdGF0ZS9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyByZXF1ZXN0Rml0LCB6b29tQnkgfSBmcm9tIFwiLi4vc3RhdGUvdmlld1wiO1xuaW1wb3J0IHsgZmlsZVRvSW1wb3J0ZWRJbWFnZSB9IGZyb20gXCIuLi9saWIvaW1hZ2VcIjtcbmltcG9ydCB7XG4gICAgRmlBcnJvd0xlZnQsXG4gICAgRmlEb3dubG9hZCxcbiAgICBGaUltYWdlLFxuICAgIEZpTWludXMsXG4gICAgRmlQbHVzLFxuICAgIEZpUmVkbzIsXG4gICAgRmlVbmRvMixcbn0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IFRoZW1lVG9nZ2xlIH0gZnJvbSBcIi4vVGhlbWVUb2dnbGVcIjtcblxuZnVuY3Rpb24gU2F2ZVN0YXR1cygpIHtcbiAgICBjb25zdCBzYXZlU3RhdHVzID0gdXNlRWRpdG9yKChzKSA9PiBzLnNhdmVTdGF0dXMpO1xuICAgIGNvbnN0IHNhdmVFcnJvciA9IHVzZUVkaXRvcigocykgPT4gcy5zYXZlRXJyb3IpO1xuICAgIGNvbnN0IHBlbmRpbmdPcHMgPSB1c2VFZGl0b3IoKHMpID0+IHMucGVuZGluZ09wcyk7XG4gICAgY29uc3QgbGFiZWwgPVxuICAgICAgICBzYXZlRXJyb3IgIT0gbnVsbFxuICAgICAgICAgICAgPyBcIlNhdmUgZmFpbGVkXCJcbiAgICAgICAgICAgIDogc2F2ZVN0YXR1cyA9PT0gXCJyZXRyeWluZ1wiXG4gICAgICAgICAgICAgID8gXCJSZXRyeWluZ1x1MjAyNlwiXG4gICAgICAgICAgICAgIDogc2F2ZVN0YXR1cyA9PT0gXCJzYXZpbmdcIiB8fCBwZW5kaW5nT3BzID4gMFxuICAgICAgICAgICAgICAgID8gXCJTYXZpbmdcdTIwMjZcIlxuICAgICAgICAgICAgICAgIDogXCJTYXZlZFwiO1xuICAgIGNvbnN0IGRvdCA9XG4gICAgICAgIHNhdmVFcnJvciAhPSBudWxsID8gXCJlcnJvclwiIDogc2F2ZVN0YXR1cyA9PT0gXCJzYXZlZFwiICYmIHBlbmRpbmdPcHMgPT09IDAgPyBcInNhdmVkXCIgOiBcInNhdmluZ1wiO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1zdGF0dXNcIiB0aXRsZT17c2F2ZUVycm9yID8/IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BzYXZlLWRvdCAke2RvdH1gfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2F2ZS1sYWJlbFwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIEljb25CdXR0b24oe1xuICAgIGxhYmVsLFxuICAgIG9uQ2xpY2ssXG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvcEJhcigpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCB6b29tID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcuem9vbSk7XG4gICAgdXNlRWRpdG9yKChzKSA9PiBzLmhpc3RWZXJzaW9uKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GaWxlcyhldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gWy4uLihpbnB1dC5maWxlcyA/PyBbXSldO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXMubWFwKGZpbGVUb0ltcG9ydGVkSW1hZ2UpKTtcbiAgICAgICAgYWRkSW1hZ2VMYXllcnMoaW1hZ2VzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21taXROYW1lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNsZWFuTmFtZShpbnB1dC52YWx1ZSwgXCJVbnRpdGxlZFwiKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBuYW1lO1xuICAgICAgICByZW5hbWVQcm9qZWN0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wYmFyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiIHRpdGxlPVwiQmFjayB0byBwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxGaUFycm93TGVmdCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkb2MubmFtZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2NvbW1pdE5hbWV9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuYmx1cigpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wYmFyLW5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1zaXplXCI+XG4gICAgICAgICAgICAgICAge2RvYy53aWR0aH1cdTAwRDd7ZG9jLmhlaWdodH1cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiVW5kbyAoXHUyMzE4WilcIiBvbkNsaWNrPXt1bmRvfSBkaXNhYmxlZD17IWNhblVuZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpVW5kbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiUmVkbyAoXHUyMUU3XHUyMzE4WilcIiBvbkNsaWNrPXtyZWRvfSBkaXNhYmxlZD17IWNhblJlZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpUmVkbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuXG4gICAgICAgICAgICA8U2F2ZVN0YXR1cyAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb20tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlpvb20gb3V0IChcdTIzMTgtKVwiIG9uQ2xpY2s9eygpID0+IHpvb21CeSgtMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlNaW51cyAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0Rml0fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpdCB0byBzY3JlZW4gKFx1MjMxODApXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1idXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoem9vbSAqIDEwMCl9JVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiWm9vbSBpbiAoXHUyMzE4KylcIiBvbkNsaWNrPXsoKSA9PiB6b29tQnkoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IHZvaWQgb25GaWxlcyhlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGRvd25sb2FkUG5nKGdldFN0YXRlKCkuZG9jID8/IGRvYyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgRXhwb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuIiwgIi8vIFRoZSBlZGl0b3Igc2NyZWVuOiBsb2FkcyB0aGUgcHJvamVjdCBkb2MgZnJvbSB0aGUgbGl2ZSBxdWVyaWVzIGV4YWN0bHkgb25jZVxuLy8gcGVyIHByb2plY3QgaWQgKGFmdGVyIHRoYXQgdGhlIGxvY2FsIGRvYyBpcyBhdXRob3JpdGF0aXZlIGFuZCBxdWVyeSBwdXNoZXNcbi8vIGFyZSBpZ25vcmVkIFx1MjAxNCB0aGV5IGFyZSBqdXN0IG91ciBvd24gd3JpdGVzIGVjaG9pbmcgYmFjayksIGFuZCBvd25zIGdsb2JhbFxuLy8ga2V5Ym9hcmQgc2hvcnRjdXRzLlxuXG5pbXBvcnQgeyBMaW5rLCB1c2VRdWVyeSwgdXNlUGFyYW1zIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IExheWVyUm93LCBQcm9qZWN0TWV0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gIGNsb3NlUHJvamVjdCxcbiAgY29tYmluZVNlbGVjdGlvbixcbiAgY29weVNlbGVjdGlvbixcbiAgY3V0U2VsZWN0aW9uLFxuICBkZWxldGVTZWxlY3Rpb24sXG4gIGR1cGxpY2F0ZVNlbGVjdGlvbixcbiAgZmxpcFNlbGVjdGlvbkhvcml6b250YWwsXG4gIGZpbmlzaFRleHRFZGl0aW5nLFxuICBudWRnZVNlbGVjdGlvbixcbiAgb3BlblByb2plY3QsXG4gIHBhc3RlQ2xpcGJvYXJkLFxuICBzZXRTZWxlY3Rpb25cbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHF1ZXJ5UmVzdWx0IH0gZnJvbSBcIi4uL3N0YXRlL2FwaVwiO1xuaW1wb3J0IHsgcmVkbywgdW5kbyB9IGZyb20gXCIuLi9zdGF0ZS9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdEZpdCwgem9vbUJ5IH0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IENhbnZhc1N0YWdlIH0gZnJvbSBcIi4vQ2FudmFzU3RhZ2VcIjtcbmltcG9ydCB7IExheWVyc1BhbmVsIH0gZnJvbSBcIi4vTGF5ZXJzUGFuZWxcIjtcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCI7XG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tIFwiLi9Ub3BCYXJcIjtcblxudHlwZSBMYXllclJvd1dpdGhQcm9qZWN0ID0gTGF5ZXJSb3cgJiB7IHByb2plY3RJZDogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGlzVHlwaW5nVGFyZ2V0KHRhcmdldDogRXZlbnRUYXJnZXQgfCBudWxsKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVsID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8IGVsLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fCBlbC5pc0NvbnRlbnRFZGl0YWJsZTtcbn1cblxuZnVuY3Rpb24gdXNlRWRpdG9yU2hvcnRjdXRzKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoaXNUeXBpbmdUYXJnZXQoZS50YXJnZXQpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2QgPSBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5O1xuXG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgaWYgKCFnZXRTdGF0ZSgpLnNwYWNlUGFuKSBzZXRTdGF0ZSh7IHNwYWNlUGFuOiB0cnVlIH0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ6XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5zaGlmdEtleSkgcmVkbygpO1xuICAgICAgICBlbHNlIHVuZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImNcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGNvcHlTZWxlY3Rpb24oKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInhcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGN1dFNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgcGFzdGVDbGlwYm9hcmQoKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImpcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGR1cGxpY2F0ZVNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgdm9pZCBjb21iaW5lU2VsZWN0aW9uKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJoXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCgpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHVwbGljYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgKGUua2V5ID09PSBcIj1cIiB8fCBlLmtleSA9PT0gXCIrXCIpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgem9vbUJ5KDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5ID09PSBcIi1cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHpvb21CeSgtMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkgPT09IFwiMFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVxdWVzdEZpdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVTZWxlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgpLnRvb2wgPT09IFwiY3JvcFwiKSBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICAgICAgZWxzZSBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwidlwiIHx8IGUua2V5ID09PSBcIlZcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiaFwiIHx8IGUua2V5ID09PSBcIkhcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiaGFuZFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiYlwiIHx8IGUua2V5ID09PSBcIkJcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiYnJ1c2hcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInRcIiB8fCBlLmtleSA9PT0gXCJUXCIpIHtcbiAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgc2V0U3RhdGUoeyB0b29sOiBcInRleHRcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCJYXCIpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogc3RhdGUuYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmZvcmVncm91bmRDb2xvciB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJEXCIpIHtcbiAgICAgICAgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiY1wiIHx8IGUua2V5ID09PSBcIkNcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiY3JvcFwiLCBjcm9wUmVjdDogbnVsbCB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RlcCA9IGUuc2hpZnRLZXkgPyAxMCA6IDE7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigtc3RlcCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKHN0ZXAsIDApO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigwLCAtc3RlcCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oMCwgc3RlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHNldFN0YXRlKHsgc3BhY2VQYW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBzZXRTdGF0ZSh7IHNwYWNlUGFuOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uS2V5VXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbkJsdXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlVcCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb25CbHVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0b3IoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtczx7IGlkPzogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkID8/IFwiXCI7XG4gIGNvbnN0IHByb2plY3RzID0gcXVlcnlSZXN1bHQ8UHJvamVjdE1ldGE+KHVzZVF1ZXJ5KFwicHJvamVjdHNcIikpO1xuICBjb25zdCBsYXllclJvd3MgPSBxdWVyeVJlc3VsdDxMYXllclJvd1dpdGhQcm9qZWN0Pih1c2VRdWVyeShcImxheWVyc1wiKSk7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBbdGltZWRPdXQsIHNldFRpbWVkT3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbmVkUmVmID0gdXNlUmVmPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0cy5yZWFkeSB8fCAhbGF5ZXJSb3dzLnJlYWR5IHx8IG9wZW5lZFJlZi5jdXJyZW50ID09PSBpZCkgcmV0dXJuO1xuICAgIGNvbnN0IG1ldGEgPSBwcm9qZWN0cy5pdGVtcy5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XG4gICAgaWYgKCFtZXRhKSByZXR1cm47XG4gICAgb3BlbmVkUmVmLmN1cnJlbnQgPSBpZDtcbiAgICBvcGVuUHJvamVjdChtZXRhLCBsYXllclJvd3MuaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0SWQgPT09IGlkKSk7XG4gIH0sIFtwcm9qZWN0cywgbGF5ZXJSb3dzLCBpZF0pO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBvcGVuZWRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICBjbG9zZVByb2plY3QoKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgLy8gQSBmcmVzaGx5IGNyZWF0ZWQgcHJvamVjdCBjYW4gbGFnIGl0cyBxdWVyeSBwdXNoIGJ5IGEgYmVhdDsgb25seSByZXBvcnRcbiAgLy8gXCJub3QgZm91bmRcIiBpZiBpdCBzdGF5cyBtaXNzaW5nLlxuICBjb25zdCBsb2FkZWQgPSBkb2M/LmlkID09PSBpZDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGVkKSByZXR1cm47XG4gICAgc2V0VGltZWRPdXQoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VGltZWRPdXQodHJ1ZSksIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbbG9hZGVkLCBpZF0pO1xuXG4gIHVzZUVkaXRvclNob3J0Y3V0cygpO1xuXG4gIGlmICghbG9hZGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1wYWdlXCI+XG4gICAgICAgIHt0aW1lZE91dCAmJiBwcm9qZWN0cy5yZWFkeSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+UHJvamVjdCBub3QgZm91bmQ8L3A+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkxvYWRpbmcgcHJvamVjdFx1MjAyNjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXNoZWxsXCI+XG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluXCI+XG4gICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgIDxDYW52YXNTdGFnZSAvPlxuICAgICAgICA8TGF5ZXJzUGFuZWwgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8vIFByb2plY3QgZ2FsbGVyeTogb3BlbiBwcmV2aW91cyBwcm9qZWN0cywgY3JlYXRlIGEgYmxhbmsgb25lIChkZWZhdWx0XG4vLyBkaW1lbnNpb25zKSwgb3IgZHJvcC9waWNrIGFuIGltYWdlIHRvIHN0YXJ0IGEgcHJvamVjdCBhdCB0aGF0IGltYWdlJ3Mgc2l6ZS5cblxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHtcbiAgICBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZW5jb2RlVHJhbnNmb3JtLFxuICAgIHR5cGUgUHJvamVjdE1ldGEsXG4gICAgdHlwZSBQcm9qZWN0VGh1bWIsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuaW1wb3J0IHsgYXBpLCBxdWVyeVJlc3VsdCB9IGZyb20gXCIuLi9zdGF0ZS9hcGlcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IG5ld0NsaWVudElkIH0gZnJvbSBcIi4uL3N0YXRlL3BlcnNpc3RcIjtcbmltcG9ydCB7IGNvbXBhY3RUaHVtYkRhdGFVcmwsIGVuc3VyZVJlbW90ZUFzc2V0IH0gZnJvbSBcIi4uL3N0YXRlL3VwbG9hZFwiO1xuaW1wb3J0IHsgRmlFZGl0MywgRmlJbWFnZSwgRmlQbHVzLCBGaVRyYXNoMiwgRmlVcGxvYWQgfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgVGhlbWVUb2dnbGUgfSBmcm9tIFwiLi9UaGVtZVRvZ2dsZVwiO1xuXG5jb25zdCBTSVpFX1BSRVNFVFMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNhbnZhc1wiLFxuICAgICAgICB3aWR0aDogREVGQVVMVF9QUk9KRUNUX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiU3F1YXJlXCIsIHdpZHRoOiAxMjAwLCBoZWlnaHQ6IDEyMDAgfSxcbiAgICB7IG5hbWU6IFwiUG9ydHJhaXRcIiwgd2lkdGg6IDEwODAsIGhlaWdodDogMTM1MCB9LFxuICAgIHsgbmFtZTogXCJMYW5kc2NhcGVcIiwgd2lkdGg6IDE5MjAsIGhlaWdodDogMTA4MCB9LFxuXSBhcyBjb25zdDtcblxuZnVuY3Rpb24gdGltZUFnbyhpc286IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUoaXNvKS5nZXRUaW1lKCk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobXMpIHx8IG1zIDwgMCkgcmV0dXJuIFwianVzdCBub3dcIjtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihtcyAvIDYwXzAwMCk7XG4gICAgaWYgKG1pbnV0ZXMgPCAxKSByZXR1cm4gXCJqdXN0IG5vd1wiO1xuICAgIGlmIChtaW51dGVzIDwgNjApIHJldHVybiBgJHttaW51dGVzfW0gYWdvYDtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBpZiAoaG91cnMgPCAyNCkgcmV0dXJuIGAke2hvdXJzfWggYWdvYDtcbiAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcbiAgICBpZiAoZGF5cyA8IDMwKSByZXR1cm4gYCR7ZGF5c31kIGFnb2A7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGlzbykudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RDYXJkKHtcbiAgICBwcm9qZWN0LFxuICAgIHRodW1iLFxuICAgIG9uT3BlbixcbiAgICBvblJlbmFtZSxcbiAgICBvbkRlbGV0ZSxcbn06IHtcbiAgICBwcm9qZWN0OiBQcm9qZWN0TWV0YTtcbiAgICB0aHVtYjogc3RyaW5nO1xuICAgIG9uT3BlbjogKCkgPT4gdm9pZDtcbiAgICBvblJlbmFtZTogKCkgPT4gdm9pZDtcbiAgICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tlciBwcm9qZWN0LXByZXZpZXdcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BPcGVuICR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RodW1iID8gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz17dGh1bWJ9IGRyYWdnYWJsZT17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZpSW1hZ2UgY2xhc3NOYW1lPVwicHJvamVjdC1lbXB0eS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbk9wZW59IGNsYXNzTmFtZT1cInByb2plY3QtbWFpblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3QtbmFtZVwiPntwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC53aWR0aH1cdTAwRDd7cHJvamVjdC5oZWlnaHR9IFx1MDBCN3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubGF5ZXJPcmRlci5sZW5ndGh9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5sYXllck9yZGVyLmxlbmd0aCA9PT0gMSA/IFwibGF5ZXJcIiA6IFwibGF5ZXJzXCJ9IFx1MDBCN3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3RpbWVBZ28ocHJvamVjdC51cGRhdGVkQXQpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BSZW5hbWUgJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQzIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgRGVsZXRlICR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlUcmFzaDIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBxdWVyeVJlc3VsdDxQcm9qZWN0TWV0YT4odXNlUXVlcnkoXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgdGh1bWJzID0gcXVlcnlSZXN1bHQ8UHJvamVjdFRodW1iPih1c2VRdWVyeShcInByb2plY3RUaHVtYnNcIikpO1xuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IFtidXN5LCBzZXRCdXN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1BST0pFQ1RfV0lEVEgsXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9QUk9KRUNUX0hFSUdIVCxcbiAgICB9KTtcbiAgICBjb25zdCBkcmFnRGVwdGhSZWYgPSB1c2VSZWYoMCk7XG5cbiAgICBjb25zdCB0aHVtYkJ5SWQgPSBuZXcgTWFwKHRodW1icy5pdGVtcy5tYXAoKHQpID0+IFt0LmlkLCB0LnRodW1iXSkpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQmxhbmsoKSB7XG4gICAgICAgIGlmIChidXN5KSByZXR1cm47XG4gICAgICAgIHNldEJ1c3kodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYFVudGl0bGVkICR7cHJvamVjdHMuaXRlbXMubGVuZ3RoICsgMX1gO1xuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gYXdhaXQgYXBpLmNyZWF0ZVByb2plY3QoXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBzaXplLndpZHRoLFxuICAgICAgICAgICAgICAgIHNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5hdmlnYXRlKGAvcC8ke2lkfWApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0QnVzeShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVGcm9tRmlsZShmaWxlOiBGaWxlKSB7XG4gICAgICAgIGlmIChidXN5KSByZXR1cm47XG4gICAgICAgIHNldEJ1c3kodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGZpbGVUb0ltcG9ydGVkSW1hZ2UoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBhcGkuY3JlYXRlUHJvamVjdChpbWFnZS5uYW1lLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZSA9IGF3YWl0IGVuc3VyZVJlbW90ZUFzc2V0KGlkLCBpbWFnZS5zcmMsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gZW5jb2RlVHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgdzogaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmbGlwWDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGF3YWl0IGFwaS5hZGRMYXllcihcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICAgICAgICAgICAgICBpbWFnZS5uYW1lLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICByZW1vdGUuYXNzZXRJZFxuICAgICAgICAgICAgICAgICAgICA/IHsgYXNzZXRJZDogcmVtb3RlLmFzc2V0SWQgfVxuICAgICAgICAgICAgICAgICAgICA6IHsgc3JjOiByZW1vdGUuc3JjLCB3aWR0aDogcmVtb3RlLndpZHRoLCBoZWlnaHQ6IHJlbW90ZS5oZWlnaHQgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZWVkQXNzZXQobGF5ZXIuYXNzZXRJZCwge1xuICAgICAgICAgICAgICAgIHNyYzogbGF5ZXIuc3JjIHx8IHJlbW90ZS5zcmMgfHwgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgMzYwIC8gTWF0aC5tYXgoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWFnZS53aWR0aCAqIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2UuaGVpZ2h0ICogc2NhbGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJ0aHVtYiBkZWNvZGUgZmFpbGVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXBpLnNldFByb2plY3RUaHVtYihpZCwgY29tcGFjdFRodW1iRGF0YVVybChjYW52YXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoICh0aHVtYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IHdyaXRlIHByb2plY3QgdGh1bWI6XCIsIHRodW1iRXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUuc3JjLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFwaS5zZXRQcm9qZWN0VGh1bWIoaWQsIHJlbW90ZS5zcmMpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2aWdhdGUoYC9wLyR7aWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBwcm9qZWN0IGZyb20gaW1hZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQ291bGQgbm90IGNyZWF0ZSBwcm9qZWN0IGZyb20gaW1hZ2VcIik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkcmFnRGVwdGhSZWYuY3VycmVudCA9IDA7XG4gICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlcihlLmRhdGFUcmFuc2Zlcik7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB2b2lkIGNyZWF0ZUZyb21GaWxlKGZpbGVzWzBdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRlbGV0ZShwcm9qZWN0OiBQcm9qZWN0TWV0YSkge1xuICAgICAgICBpZiAoY29uZmlybShgRGVsZXRlIFwiJHtwcm9qZWN0Lm5hbWV9XCI/IFRoaXMgY2Fubm90IGJlIHVuZG9uZS5gKSkge1xuICAgICAgICAgICAgdm9pZCBhcGkuZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVuYW1lKHByb2plY3Q6IFByb2plY3RNZXRhKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWVcIiwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgaWYgKG5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZvaWQgYXBpLnJlbmFtZVByb2plY3QocHJvamVjdC5pZCwgY2xlYW5OYW1lKG5hbWUsIHByb2plY3QubmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWVcIlxuICAgICAgICAgICAgb25EcmFnRW50ZXI9eyhlOiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgKz0gMTtcbiAgICAgICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRyYWdEZXB0aFJlZi5jdXJyZW50ID0gTWF0aC5tYXgoMCwgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgLSAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0RlcHRoUmVmLmN1cnJlbnQgPT09IDApIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZTogRHJhZ0V2ZW50KSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYnJhbmRcIj5pbWFnZSBlZGl0b3I8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLXBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmV3LXByb2plY3QtbGFiZWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVzZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7U0laRV9QUkVTRVRTLm1hcCgocHJlc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQud2lkdGggPT09IHNpemUud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2V0LmhlaWdodCA9PT0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcmVzZXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJlc2V0ICR7c2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHByZXNldC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwcmVzZXQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXNldC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJlc2V0LXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0LndpZHRofSBcdTAwRDcge3ByZXNldC5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGNyZWF0ZUJsYW5rKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaVBsdXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzPy5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHZvaWQgY3JlYXRlRnJvbUZpbGUoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2J1c3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpVXBsb2FkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJvbSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdHN7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5yZWFkeSA/IGAoJHtwcm9qZWN0cy5pdGVtcy5sZW5ndGh9KWAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7IXByb2plY3RzLnJlYWR5ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LXN0YXRlXCI+TG9hZGluZyBwcm9qZWN0c1x1MjAyNjwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBwcm9qZWN0cy5pdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByb2plY3RzIHlldC4gQ2hvb3NlIGEgc2l6ZSBhYm92ZSBvciBkcm9wIGFuIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJlLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLml0ZW1zLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q9e3Byb2plY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iPXt0aHVtYkJ5SWQuZ2V0KHByb2plY3QuaWQpID8/IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17KCkgPT4gbmF2aWdhdGUoYC9wLyR7cHJvamVjdC5pZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW5hbWU9eygpID0+IG9uUmVuYW1lKHByb2plY3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtkcmFnZ2luZyA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Atb3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIHRvIGNyZWF0ZSBhIHByb2plY3Q8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtidXN5ID8gPGRpdiBjbGFzc05hbWU9XCJidXN5LXRvYXN0XCI+Q3JlYXRpbmcgcHJvamVjdFx1MjAyNjwvZGl2PiA6IG51bGx9XG4gICAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcyB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9FZGl0b3JcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcblxuY29uc3Qgc2F2ZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXRoZW1lXCIpO1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPVxuICAgIHNhdmVkVGhlbWUgPT09IFwibGlnaHRcIiB8fCBzYXZlZFRoZW1lID09PSBcImRhcmtcIlxuICAgICAgICA/IHNhdmVkVGhlbWVcbiAgICAgICAgOiBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgICAgICAgPyBcImRhcmtcIlxuICAgICAgICAgIDogXCJsaWdodFwiO1xuXG5jb25zdCBHTE9CQUxfQ1NTID0gYFxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEA0MDA7NTAwJmZhbWlseT1JbnN0cnVtZW50K1NhbnM6d2R0aCx3Z2h0QDc1Li4xMDAsNDAwLi43MDAmZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcbjpyb290IHtcbiAgY29sb3Itc2NoZW1lOiBsaWdodDtcbiAgLS1iZzogI2ZmZjsgLS1zdXJmYWNlOiAjZmZmOyAtLXN1cmZhY2Utc3VidGxlOiAjZmFmYWZhOyAtLWNhbnZhczogI2Y0ZjRmNDtcbiAgLS1ib3JkZXI6ICNlNGU0ZTQ7IC0tYm9yZGVyLXN0cm9uZzogIzExMTsgLS10ZXh0OiAjMGEwYTBhO1xuICAtLW11dGVkOiAjNzM3MzczOyAtLWZhaW50OiAjYTNhM2EzOyAtLWFjY2VudDogIzI1NjNlYjsgLS1hY2NlbnQtaG92ZXI6ICMxZDRlZDg7XG4gIC0tYWNjZW50LXNvZnQ6ICNlZmY2ZmY7IC0tZGFuZ2VyOiAjZGMyNjI2OyAtLWNoZWNrZXItYTogI2VjZWNlYzsgLS1jaGVja2VyLWI6ICNkOGQ4ZDg7XG4gIC0tc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDAsMCwwLC4xNCk7XG4gIC0tc2FuczogXCJJbnN0cnVtZW50IFNhbnNcIiwgXCJTZWdvZSBVSVwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC0tbW9ubzogXCJJQk0gUGxleCBNb25vXCIsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBtb25vc3BhY2U7XG59XG46cm9vdFtkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgLS1iZzogIzE2MTYxNjsgLS1zdXJmYWNlOiAjMWMxYzFjOyAtLXN1cmZhY2Utc3VidGxlOiAjMTkxOTE5OyAtLWNhbnZhczogIzEyMTIxMjtcbiAgLS1ib3JkZXI6ICMzMzM7IC0tYm9yZGVyLXN0cm9uZzogI2ZhZmFmYTsgLS10ZXh0OiAjZjBmMGYwO1xuICAtLW11dGVkOiAjYThhOGE4OyAtLWZhaW50OiAjNjg2ODY4OyAtLWFjY2VudDogIzNiODJmNjsgLS1hY2NlbnQtaG92ZXI6ICMyNTYzZWI7XG4gIC0tYWNjZW50LXNvZnQ6ICMxNzI1NTQ7IC0tZGFuZ2VyOiAjZWY0NDQ0OyAtLWNoZWNrZXItYTogIzMyMzIzMjsgLS1jaGVja2VyLWI6ICMyODI4Mjg7XG4gIC0tc2hhZG93OiAwIDE4cHggNTZweCByZ2JhKDAsMCwwLC41OCk7XG59XG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuaHRtbCwgYm9keSB7IG1hcmdpbjogMDsgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbmJvZHkgeyBmb250OiAxNHB4LzEuNSB2YXIoLS1zYW5zKTsgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IH1cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEgeyBmb250OiBpbmhlcml0OyB9XG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IH1cbmJ1dHRvbjpkaXNhYmxlZCB7IGN1cnNvcjogZGVmYXVsdDsgfVxuLmhpZGRlbiB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfVxuLmNoZWNrZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VyLWEpOyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tY2hlY2tlci1iKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDc1JSx2YXIoLS1jaGVja2VyLWIpIDc1JSksbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHZhcigtLWNoZWNrZXItYikgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA3NSUsdmFyKC0tY2hlY2tlci1iKSA3NSUpOyBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLDhweCA4cHg7IH1cbi5jYW52YXMtZG90cyB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbnZhcyk7IGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjb2xvci1taXgoaW4gc3JnYix2YXIoLS1tdXRlZCkgMjQlLHRyYW5zcGFyZW50KSAxcHgsdHJhbnNwYXJlbnQgMXB4KTsgYmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7IH1cbi5pY29uLWJ1dHRvbiB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDA7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbi5pY29uLWJ1dHRvbjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4uaWNvbi1idXR0b246ZGlzYWJsZWQgeyBvcGFjaXR5OiAuMzsgfVxuLmljb24tYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cbi5idXR0b24geyBtaW4taGVpZ2h0OiAzNHB4OyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogN3B4OyBwYWRkaW5nOiA3cHggMTJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDU1MDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLmJ1dHRvbjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXN0cm9uZyk7IH1cbi5idXR0b24ucHJpbWFyeSB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgY29sb3I6ICNmZmY7IH1cbi5idXR0b24ucHJpbWFyeTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ob3Zlcik7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWhvdmVyKTsgfVxuLmJ1dHRvbi5kYW5nZXIgeyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuLmJ1dHRvbiBzdmcgeyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyB9XG5cbi8qIEhvbWUgKi9cbi5ob21lIHsgbWluLWhlaWdodDogMTAwdmg7IHBhZGRpbmc6IDQ2cHggMjRweCA5MHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IH1cbi5ob21lLWlubmVyIHsgd2lkdGg6IG1pbigxMDAlLCA3ODBweCk7IG1hcmdpbjogMCBhdXRvOyB9XG4uYnJhbmQtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB9XG4uYnJhbmQgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMjFweDsgbGluZS1oZWlnaHQ6IDE7IGZvbnQtd2VpZ2h0OiA3NTA7IGxldHRlci1zcGFjaW5nOiAtLjAzNWVtOyB9XG4uYnJhbmQtbWFyayB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDlweDsgaGVpZ2h0OiAxN3B4OyBtYXJnaW4tbGVmdDogNHB4OyB2ZXJ0aWNhbC1hbGlnbjogLTJweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLmJyYW5kLXJvdyAudGhlbWUtdG9nZ2xlIHsgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbi5ob21lLW1ldGEgeyBtYXJnaW46IDEycHggMCAzOHB4OyBwYWRkaW5nLXRvcDogOXB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDExcHggdmFyKC0tc2Fucyk7IGxldHRlci1zcGFjaW5nOiAuMDFlbTsgfVxuLmludHJvIHsgbWFyZ2luOiAwIDAgMjRweDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAxM3B4OyB9XG4uY3JlYXRlLXBhbmVsIHsgbWFyZ2luLWJvdHRvbTogMzhweDsgfVxuLmV5ZWJyb3cgeyBtYXJnaW46IDAgMCAxMHB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMS41cHggdmFyKC0tc2Fucyk7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAuMDFlbTsgfVxuLnByZXNldHMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LG1pbm1heCgwLDFmcikpOyBnYXA6IDhweDsgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuLnByZXNldCB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMTFweDsgdGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuLnByZXNldDpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXN0cm9uZyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLnByZXNldC5zZWxlY3RlZCB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5wcmVzZXQtbmFtZSB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAzcHg7IGNvbG9yOiBpbmhlcml0OyBmb250LXNpemU6IDEyLjVweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnByZXNldC1zaXplIHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLmNyZWF0ZS1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IH1cbi5jcmVhdGUtYWN0aW9ucyAuYnV0dG9uOmZpcnN0LW9mLXR5cGUgeyBmbGV4OiAxOyB9XG4uc2VjdGlvbi1sYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTBweDsgbWFyZ2luOiAwIDAgMTJweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTEuNXB4IHZhcigtLXNhbnMpOyBmb250LXdlaWdodDogNjAwOyBsZXR0ZXItc3BhY2luZzogLjAxZW07IH1cbi5zZWN0aW9uLWxhYmVsOjphZnRlciB7IGNvbnRlbnQ6IFwiXCI7IGZsZXg6IDE7IGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XG4ucHJvamVjdC1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxMHB4OyB9XG4ucHJvamVjdC1jYXJkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMTZweCBtaW5tYXgoMCwxZnIpIGF1dG87IG1pbi1oZWlnaHQ6IDgycHg7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTJzOyB9XG4ucHJvamVjdC1jYXJkOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1tdXRlZCkgNjUlLHZhcigtLWJvcmRlcikpOyB9XG4ucHJvamVjdC1wcmV2aWV3IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDdweDsgYm9yZGVyOiAwOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGVja2VyLWEpOyB9XG4ucHJvamVjdC1wcmV2aWV3IGltZyB7IGRpc3BsYXk6IGJsb2NrOyBtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDY2cHg7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cbi5wcm9qZWN0LWVtcHR5LWljb24geyB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyB9XG4ucHJvamVjdC1tYWluIHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAxNnB4OyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tdGV4dCk7IHRleHQtYWxpZ246IGxlZnQ7IH1cbi5wcm9qZWN0LW5hbWUgeyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA2NTA7IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4ucHJvamVjdC1pbmZvIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDdweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjAyZW07IH1cbi5wcm9qZWN0LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDFweDsgcGFkZGluZzogMCAxMHB4OyBvcGFjaXR5OiAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xMnM7IH1cbi5wcm9qZWN0LWNhcmQ6aG92ZXIgLnByb2plY3QtYWN0aW9ucywgLnByb2plY3QtYWN0aW9uczpmb2N1cy13aXRoaW4geyBvcGFjaXR5OiAxOyB9XG4uZW1wdHktc3RhdGUgeyBwYWRkaW5nOiA2MHB4IDIwcHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tZmFpbnQpOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH1cbi5kcm9wLW92ZXJsYXkgeyBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwOyB6LWluZGV4OiAyMDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tYmcpIDg0JSx0cmFuc3BhcmVudCk7IH1cbi5kcm9wLW92ZXJsYXkgcCB7IHBhZGRpbmc6IDMwcHggNDhweDsgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWFjY2VudCk7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBmb250OiAxMnB4IHZhcigtLW1vbm8pOyB9XG4uYnVzeS10b2FzdCB7IHBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAyNHB4OyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgcGFkZGluZzogOXB4IDE1cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9XG5cbi8qIEVkaXRvciAqL1xuLmVkaXRvci1zaGVsbCB7IGRpc3BsYXk6IGZsZXg7IGhlaWdodDogMTAwdmg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IG92ZXJmbG93OiBoaWRkZW47IGJhY2tncm91bmQ6IHZhcigtLWNhbnZhcyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbi5lZGl0b3ItbWFpbiB7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgbWluLWhlaWdodDogMDsgfVxuLnRvcGJhciB7IGhlaWdodDogNDZweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4OyBwYWRkaW5nOiAwIDEwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnRvcGJhci1uYW1lIHsgd2lkdGg6IDE2OHB4OyBwYWRkaW5nOiA1cHggN3B4OyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi50b3BiYXItbmFtZTpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTsgfS50b3BiYXItbmFtZTpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLmRvYy1zaXplLCAuem9vbS1idXR0b24sIC5zYXZlLXN0YXR1cyB7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLmRpdmlkZXIgeyB3aWR0aDogMXB4OyBoZWlnaHQ6IDE4cHg7IG1hcmdpbjogMCA2cHg7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH1cbi5zcGFjZXIgeyBmbGV4OiAxOyB9XG4uem9vbS1jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0uem9vbS1idXR0b24geyB3aWR0aDogNTJweDsgcGFkZGluZzogNXB4IDJweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfS56b29tLWJ1dHRvbjpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLnNhdmUtc3RhdHVzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH0uc2F2ZS1kb3QgeyB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDsgYm9yZGVyLXJhZGl1czogNTAlOyB9LnNhdmVkIHsgYmFja2dyb3VuZDogIzIyYzU1ZTsgfS5zYXZpbmcgeyBiYWNrZ3JvdW5kOiAjZjU5ZTBiOyB9LmVycm9yIHsgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTsgfVxuLnRvb2wtcmFpbCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogNTsgd2lkdGg6IDQ0cHg7IGZsZXgtc2hyaW5rOiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgcGFkZGluZzogN3B4IDA7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9XG4udG9vbC1idXR0b24geyB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4OyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfS50b29sLWJ1dHRvbjpob3ZlciB7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLXRleHQpOyB9LnRvb2wtYnV0dG9uLmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgY29sb3I6ICNmZmY7IH0udG9vbC1idXR0b24gc3ZnIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgfVxuLnRvb2xiYXItY29sb3JzIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMzhweDsgaGVpZ2h0OiAzOXB4OyBtYXJnaW4tdG9wOiBhdXRvOyBmbGV4LXNocmluazogMDsgfS50b29sYmFyLWNvbG9ycyAuZ2xvYmFsLXN3YXRjaCB7IHdpZHRoOiAyMXB4OyBoZWlnaHQ6IDIxcHg7IH0udG9vbGJhci1jb2xvcnMgLmdsb2JhbC1zd2F0Y2guZm9yZWdyb3VuZCB7IGxlZnQ6IDNweDsgdG9wOiAzcHg7IH0udG9vbGJhci1jb2xvcnMgLmdsb2JhbC1zd2F0Y2guYmFja2dyb3VuZCB7IHJpZ2h0OiAzcHg7IGJvdHRvbTogMnB4OyB9LnRvb2xiYXItY29sb3JzIC5zd2FwLWNvbG9ycyB7IHJpZ2h0OiAtMXB4OyB0b3A6IC01cHg7IH1cbi50b29sLWNvbG9yLXBvcG92ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDcwOyBsZWZ0OiA0M3B4OyBib3R0b206IDA7IHdpZHRoOiAyMjBweDsgcGFkZGluZzogOXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgfVxuLnRvb2wtcG9wb3ZlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA3cHg7IGxlZnQ6IDUwcHg7IHdpZHRoOiAxOTZweDsgcGFkZGluZzogMTJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMTFweDsgfVxuLnRvb2wtcG9wb3ZlciBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMTFweDsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDEycHg7IH0udG9vbC1wb3BvdmVyIGxhYmVsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEwcHg7IG1hcmdpbjogOHB4IDA7IH0udG9vbC1wb3BvdmVyIGlucHV0W3R5cGU9XCJjb2xvclwiXSB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDI0cHg7IHBhZGRpbmc6IDFweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH0udG9vbC1wb3BvdmVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7IHdpZHRoOiAxMDAlOyBhY2NlbnQtY29sb3I6IHZhcigtLWFjY2VudCk7IH0udG9vbC1wb3BvdmVyIHAgeyBtYXJnaW46IDAgMCAxMnB4OyB9LnRvb2wtcG9wb3ZlciAuYnV0dG9uIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDZweDsgfS5icnVzaC1wcmV2aWV3IHsgbWF4LXdpZHRoOiA2NHB4OyBtYXgtaGVpZ2h0OiA2NHB4OyBtaW4td2lkdGg6IDNweDsgbWluLWhlaWdodDogM3B4OyBtYXJnaW46IDEycHggYXV0byAycHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuLmxheWVycy1wYW5lbCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDI0NHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnBhbmVsLWhlYWQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDdweDsgaGVpZ2h0OiA0MnB4OyBwYWRkaW5nOiAwIDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMS41cHggdmFyKC0tc2Fucyk7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAuMDFlbTsgfS5wYW5lbC1oZWFkIHN2ZyB7IHdpZHRoOiAxM3B4OyBoZWlnaHQ6IDEzcHg7IH1cbi5sYXllcnMtaGVhZCB7IGhlaWdodDogMzZweDsgZmxleC1zaHJpbms6IDA7IH0ubGF5ZXJzLWhlYWQgLmxheWVyLWFkZCB7IG1hcmdpbi1sZWZ0OiBhdXRvOyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGN1cnNvcjogcG9pbnRlcjsgfS5sYXllcnMtaGVhZCAubGF5ZXItYWRkOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zdWJ0bGUpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH0ubGF5ZXJzLWhlYWQgLmxheWVyLWFkZCBzdmcgeyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyB9XG4ucGFuZWwtd2lkdGgtcmVzaXplciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNDU7IGxlZnQ6IC0zcHg7IHRvcDogMDsgYm90dG9tOiAwOyB3aWR0aDogNnB4OyBjdXJzb3I6IGV3LXJlc2l6ZTsgfS5wYW5lbC13aWR0aC1yZXNpemVyOmhvdmVyLC5wYW5lbC13aWR0aC1yZXNpemVyOmFjdGl2ZSB7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLWFjY2VudCkgNDUlLHRyYW5zcGFyZW50KTsgfVxuLnByb3BlcnRpZXMtcmVzaXplciB7IGhlaWdodDogNXB4OyBmbGV4LXNocmluazogMDsgY3Vyc29yOiBucy1yZXNpemU7IGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zdWJ0bGUpOyB9LnByb3BlcnRpZXMtcmVzaXplcjpob3ZlciwucHJvcGVydGllcy1yZXNpemVyOmFjdGl2ZSB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5wcm9wZXJ0aWVzLXBhbmVsIHsgbWluLWhlaWdodDogMDsgZGlzcGxheTogZmxleDsgZmxleDogMCAwIGF1dG87IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9XG4ucHJvcGVydGllcy1wYW5lbCA+IC5wYW5lbC1oZWFkIHsgaGVpZ2h0OiAzNHB4OyBmbGV4LXNocmluazogMDsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXdlaWdodDogNjAwOyB9XG4ucHJvcGVydGllcy1ib2R5IHsgbWluLWhlaWdodDogMDsgb3ZlcmZsb3cteTogYXV0bzsgfVxuLnByb3BlcnRpZXMtZW1wdHkgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDE2cHggMTJweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyB9XG4ucHJvcC1zZWN0aW9uIHsgcGFkZGluZzogOHB4IDEwcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9XG4ucHJvcC1maWVsZCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDhweDsgbWFyZ2luOiA2cHggMDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1zYW5zKTsgfVxuLnByb3AtZmllbGQ6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tdG9wOiAwOyB9LnByb3AtZmllbGQ6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cbi5wcm9wLWZpZWxkIGlucHV0LCAucHJvcC1maWVsZCBzZWxlY3QsIC5wcm9wLWZpZWxkIHRleHRhcmVhIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9XG4ucHJvcC1maWVsZCBpbnB1dDpmb2N1cywgLnByb3AtZmllbGQgc2VsZWN0OmZvY3VzLCAucHJvcC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLnByb3Atc2xpZGVyIHsgZGlzcGxheTogYmxvY2s7IH0ucHJvcC1zbGlkZXIgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDsgfS5wcm9wLXZhbHVlIHsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XG4ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMnB4OyBtYXJnaW46IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH0ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDdweDsgaGVpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiAtNXB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdGh1bWIgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEycHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnByb3AtbnVtYmVyIGlucHV0IHsgd2lkdGg6IDYycHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogNHB4IDE4cHggNHB4IDZweDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfS5udW1iZXItd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfS5udW1iZXItd3JhcCBpIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDZweDsgdG9wOiA2cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC1zaXplOiA5cHg7IH1cbi5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogMTI0cHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogM3B4IDVweDsgfVxuLnByb3AtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgY29sdW1uLWdhcDogMTBweDsgfS5wcm9wLWdyaWQgLnByb3AtZmllbGQgeyBtaW4td2lkdGg6IDA7IH0ucHJvcC1ncmlkIC5wcm9wLW51bWJlciBpbnB1dCwucHJvcC1ncmlkIC5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogNzBweDsgfVxuLnByb3AtdG9nZ2xlIGlucHV0IHsgcG9zaXRpb246IGFic29sdXRlOyBvcGFjaXR5OiAwOyB9LnByb3AtdG9nZ2xlIGkgeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAxNXB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTJzOyB9LnByb3AtdG9nZ2xlIGk6OmFmdGVyIHsgY29udGVudDogXCJcIjsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNSk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzOyB9LnByb3AtdG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgaTo6YWZ0ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTJweCk7IH1cbi50ZXh0LWNvbnRlbnQgeyBkaXNwbGF5OiBibG9jazsgfS50ZXh0LWNvbnRlbnQgPiBzcGFuIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgfS50ZXh0LWNvbnRlbnQgdGV4dGFyZWEgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogNnB4OyByZXNpemU6IHZlcnRpY2FsOyBsaW5lLWhlaWdodDogMS4zNTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi50b29sLWhpbnQgeyBtYXJnaW46IDAgMCA5cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH1cbi5zZWdtZW50LWNvbnRyb2wgeyBkaXNwbGF5OiBmbGV4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24geyB3aWR0aDogMzRweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmlnaHQtd2lkdGg6IDA7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMHB4IHZhcigtLW1vbm8pOyB9LnNlZ21lbnQtY29udHJvbCBidXR0b246bGFzdC1jaGlsZCB7IGJvcmRlci1yaWdodC13aWR0aDogMXB4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24uYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4uZ2xvYmFsLWNvbG9yLXNlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXN1YnRsZSk7IH0uZ2xvYmFsLWNvbG9yLXJvdyB7IGhlaWdodDogMzBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDExcHggdmFyKC0tc2Fucyk7IH0uZ2xvYmFsLWNvbG9yLXJvdyBjb2RlIHsgbWFyZ2luLWxlZnQ6IGF1dG87IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDkuNXB4IHZhcigtLW1vbm8pOyB9Lmdsb2JhbC1zd2F0Y2hlcyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDQ1cHg7IGhlaWdodDogMzBweDsgfS5nbG9iYWwtc3dhdGNoIHsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjNweDsgaGVpZ2h0OiAyM3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlKTsgYm9yZGVyLXJhZGl1czogMDsgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLW11dGVkKTsgfS5nbG9iYWwtc3dhdGNoLmJhY2tncm91bmQgeyByaWdodDogMXB4OyBib3R0b206IDA7IH0uZ2xvYmFsLXN3YXRjaC5mb3JlZ3JvdW5kIHsgei1pbmRleDogMjsgbGVmdDogMXB4OyB0b3A6IDA7IH0uc3dhcC1jb2xvcnMgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAtMTNweDsgdG9wOiAtNXB4OyB3aWR0aDogMTdweDsgaGVpZ2h0OiAxN3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250LXNpemU6IDEycHg7IH0uc3dhcC1jb2xvcnM6aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5jb2xvci1wb3BvdmVyIHsgbWFyZ2luOiA4cHggLTJweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyB9LmNvbG9yLXBvcG92ZXItaGVhZCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogN3B4OyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH0uY29sb3ItcG9wb3Zlci1oZWFkIGJ1dHRvbiB7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0uY29sb3ItcGlja2VyIHsgbWFyZ2luLXRvcDogMDsgfVxuLnN2LXBpY2tlciB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAxMDRweDsgb3ZlcmZsb3c6IGhpZGRlbjsgY3Vyc29yOiBjcm9zc2hhaXI7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIzAwMCx0cmFuc3BhcmVudCksbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmZmYsdHJhbnNwYXJlbnQpOyB9LnN2LXBpY2tlciBzcGFuIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyOiAycHggc29saWQgd2hpdGU7IGJvcmRlci1yYWRpdXM6IDUwJTsgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMwMDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7IH1cbi5odWUtc2xpZGVyIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA5cHg7IG1hcmdpbjogOHB4IDA7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmMDAsI2ZmMCwjMGYwLCMwZmYsIzAwZiwjZjBmLCNmMDApOyB9Lmh1ZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEzcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQpOyBib3JkZXItcmFkaXVzOiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9Lmh1ZS1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEzcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQpOyBib3JkZXItcmFkaXVzOiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9XG4uY29sb3Itcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiA1cHg7IH0uY29sb3Itc3dhdGNoIHsgd2lkdGg6IDI3cHg7IGhlaWdodDogMjdweDsgZmxleC1zaHJpbms6IDA7IHBhZGRpbmc6IDJweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfS5jb2xvci1zd2F0Y2ggaSB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9LmhleC1pbnB1dCB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiA0cHggNnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHVzZXItc2VsZWN0OiB0ZXh0OyB9LmV5ZWRyb3BwZXIgeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5leWVkcm9wcGVyOmhvdmVyIHsgY29sb3I6IHZhcigtLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zdHJvbmcpOyB9XG4ucmdiLXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTsgZ2FwOiA1cHg7IG1hcmdpbi10b3A6IDZweDsgfS5yZ2Itcm93IGxhYmVsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAzcHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDlweCB2YXIoLS1tb25vKTsgfS5yZ2Itcm93IGlucHV0IHsgbWluLXdpZHRoOiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyNXB4OyBwYWRkaW5nOiAzcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH1cbi5ibGVuZC1jb250cm9sIHsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9LmJsZW5kLWNvbnRyb2wuZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgfS5ibGVuZC1jb250cm9sIGxhYmVsIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1zYW5zKTsgfS5ibGVuZC10cmlnZ2VyIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMjlweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwYWRkaW5nOiAwIDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMS41cHg7IHRleHQtYWxpZ246IGxlZnQ7IH0uYmxlbmQtbWVudSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMzA7IHRvcDogNjFweDsgbGVmdDogMTJweDsgcmlnaHQ6IDEycHg7IG1heC1oZWlnaHQ6IDI0OHB4OyBvdmVyZmxvdy15OiBhdXRvOyBwYWRkaW5nOiA0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyB9LmJsZW5kLW1lbnUgYnV0dG9uIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiA1cHggN3B4OyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTEuNXB4OyB0ZXh0LWFsaWduOiBsZWZ0OyB9LmJsZW5kLW1lbnUgYnV0dG9uOmhvdmVyLC5ibGVuZC1tZW51IGJ1dHRvbjpmb2N1cywuYmxlbmQtbWVudSBidXR0b24uc2VsZWN0ZWQgeyBvdXRsaW5lOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IH0uYmxlbmQtaGludCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA0cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc2l6ZTogOS41cHg7IH1cbi5vcGFjaXR5LWNvbnRyb2wgeyAtLXByb2dyZXNzOiAxMDAlOyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9Lm9wYWNpdHktY29udHJvbC5kaXNhYmxlZCB7IG9wYWNpdHk6IC40OyB9Lm9wYWNpdHktbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1zYW5zKTsgfVxuLm9wYWNpdHktY29udHJvbCBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEycHg7IG1hcmdpbjogMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1hY2NlbnQpIDAlLCB2YXIoLS1hY2NlbnQpIHZhcigtLXByb2dyZXNzKSwgdmFyKC0tYm9yZGVyKSB2YXIoLS1wcm9ncmVzcyksIHZhcigtLWJvcmRlcikgMTAwJSk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgY3Vyc29yOiBwb2ludGVyOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IG1hcmdpbi10b3A6IC0zcHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLmxheWVyLWxpc3QgeyBtaW4taGVpZ2h0OiAwOyBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBtYXJnaW46IDA7IHBhZGRpbmc6IDRweCAwOyBsaXN0LXN0eWxlOiBub25lOyB9XG4ubGF5ZXItcm93IHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgcGFkZGluZzogNnB4IDhweDsgY3Vyc29yOiBwb2ludGVyOyB9LmxheWVyLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5sYXllci1yb3cuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IH0ubGF5ZXItcm93LmhpZGRlbiB7IG9wYWNpdHk6IC41OyB9XG4udmlzaWJpbGl0eSB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDI1cHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LnZpc2liaWxpdHkgc3ZnIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuLmxheWVyLXRodW1iIHsgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IH0ubGF5ZXItdGh1bWIgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ubGF5ZXItbmFtZSB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgb3ZlcmZsb3c6IGhpZGRlbjsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH0ubGF5ZXItaW5wdXQgeyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHBhZGRpbmc6IDNweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMS41cHg7IH1cbi5kcm9wLW1hcmsgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldC1pbmxpbmU6IDRweDsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH0uZHJvcC1tYXJrLmFib3ZlIHsgdG9wOiAwOyB9LmRyb3AtbWFyay5iZWxvdyB7IGJvdHRvbTogMDsgfVxuLm5vLWxheWVycyB7IHBhZGRpbmc6IDE2cHggMTJweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfS5wYW5lbC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7IHBhZGRpbmc6IDdweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0ucGFuZWwtYWN0aW9ucyAuYnV0dG9uIHsgZmxleDogMTsgbWluLWhlaWdodDogMzBweDsgcGFkZGluZzogNXB4OyB9XG4uY2FudmFzLXN0YWdlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHRvdWNoLWFjdGlvbjogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgfS5hcnRib2FyZCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyBvdmVyZmxvdzogaGlkZGVuOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBvdXRsaW5lOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDM0JSx0cmFuc3BhcmVudCk7IH0uY2FudmFzLWVtcHR5IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH0uY2FudmFzLWVtcHR5IHAgeyBwYWRkaW5nOiAxM3B4IDE4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9XG4uYnJ1c2gtb3ZlcmxheSB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9LnNuYXAtZ3VpZGUgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAyMDsgYmFja2dyb3VuZDogI2VjNDg5OTsgfS5zbmFwLWd1aWRlLnZlcnRpY2FsIHsgdG9wOiAwOyB3aWR0aDogMXB4OyB9LnNuYXAtZ3VpZGUuaG9yaXpvbnRhbCB7IGxlZnQ6IDA7IGhlaWdodDogMXB4OyB9LmNyb3AtYm94IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMjE7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogIzM4YmRmODsgYmFja2dyb3VuZDogcmdiYSg1NiwxODksMjQ4LC4wOCk7IGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLDAsMCwuMzgpOyB9LmNyb3AtYm94IHNwYW4geyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMTAwJTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgYmFja2dyb3VuZDogIzAyODRjNzsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7IH1cbi5pbmxpbmUtdGV4dC1lZGl0b3Itd3JhcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMzA7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG4uaW5saW5lLXRleHQtZWRpdG9yIHsgcG9zaXRpb246IGFic29sdXRlOyBvdmVyZmxvdzogaGlkZGVuOyByZXNpemU6IG5vbmU7IG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1zdXJmYWNlKSA4JSx0cmFuc3BhcmVudCk7IGNhcmV0LWNvbG9yOiB2YXIoLS10ZXh0KTsgd2hpdGUtc3BhY2U6IHByZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi5sb2FkaW5nLXBhZ2UgeyBoZWlnaHQ6IDEwMHZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0ubG9hZGluZy1wYWdlIHAgeyBtYXJnaW46IDA7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH0ubm90LWZvdW5kIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5ub3QtZm91bmQgPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyAuaG9tZSB7IHBhZGRpbmc6IDI4cHggMTZweCA3MHB4OyB9LnByZXNldHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7IH0ucHJvamVjdC1jYXJkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MnB4IG1pbm1heCgwLDFmcikgYXV0bzsgfS5wcm9qZWN0LWFjdGlvbnMgeyBwYWRkaW5nOiAwIDVweDsgb3BhY2l0eTogMTsgfS50b3BiYXIgLmRvYy1zaXplLCAudG9wYmFyIC5zYXZlLWxhYmVsLCAudG9wYmFyIC5hZGQtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9LmxheWVycy1wYW5lbCB7IHdpZHRoOiAyMDVweDsgfSB9XG5gO1xuXG5mdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5QYWdlIG5vdCBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcC86aWRcIiBlbGVtZW50PXs8RWRpdG9yIC8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FB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QUMsQ0FBQyxHQUFHLFNBQVMsZUFBZSxLQUFLLENBQUM7IiwKICAibmFtZXMiOiBbInNsaWNlIiwgIm9wdGlvbnMiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJyZXJlbmRlclF1ZXVlIiwgInByZXZEZWJvdW5jZSIsICJkZWZlciIsICJkZXB0aFNvcnQiLCAiX2lkIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiaSIsICJFTVBUWV9PQkoiLCAiRU1QVFlfQVJSIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJpc0FycmF5IiwgIkFycmF5IiwgImFzc2lnbiIsICJvYmoiLCAicHJvcHMiLCAicmVtb3ZlTm9kZSIsICJub2RlIiwgInBhcmVudE5vZGUiLCAicmVtb3ZlQ2hpbGQiLCAiY3JlYXRlRWxlbWVudCIsICJ0eXBlIiwgImNoaWxkcmVuIiwgImtleSIsICJyZWYiLCAibm9ybWFsaXplZFByb3BzIiwgImFyZ3VtZW50cyIsICJsZW5ndGgiLCAiY2FsbCIsICJkZWZhdWx0UHJvcHMiLCAiY3JlYXRlVk5vZGUiLCAib3JpZ2luYWwiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJfX2kiLCAiX191IiwgIkZyYWdtZW50IiwgInByb3BzIiwgImNoaWxkcmVuIiwgIkJhc2VDb21wb25lbnQiLCAiY29udGV4dCIsICJ0aGlzIiwgImdldERvbVNpYmxpbmciLCAidm5vZGUiLCAiY2hpbGRJbmRleCIsICJfXyIsICJfX2kiLCAic2libGluZyIsICJfX2siLCAibGVuZ3RoIiwgIl9fZSIsICJ0eXBlIiwgInJlbmRlckNvbXBvbmVudCIsICJjb21wb25lbnQiLCAiX19QIiwgIl9fZCIsICJvbGRWTm9kZSIsICJfX3YiLCAib2xkRG9tIiwgImNvbW1pdFF1ZXVlIiwgInJlZlF1ZXVlIiwgIm5ld1ZOb2RlIiwgImFzc2lnbiIsICJvcHRpb25zIiwgImRpZmYiLCAiX19uIiwgIm5hbWVzcGFjZVVSSSIsICJfX3UiLCAiY29tbWl0Um9vdCIsICJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsICJfX2MiLCAiYmFzZSIsICJzb21lIiwgImNoaWxkIiwgImVucXVldWVSZW5kZXIiLCAiYyIsICJyZXJlbmRlclF1ZXVlIiwgInB1c2giLCAicHJvY2VzcyIsICJfX3IiLCAicHJldkRlYm91bmNlIiwgImRlYm91bmNlUmVuZGVyaW5nIiwgImRlZmVyIiwgImwiLCAic29ydCIsICJkZXB0aFNvcnQiLCAic2hpZnQiLCAiZGlmZkNoaWxkcmVuIiwgInBhcmVudERvbSIsICJyZW5kZXJSZXN1bHQiLCAibmV3UGFyZW50Vk5vZGUiLCAib2xkUGFyZW50Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJuYW1lc3BhY2UiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiaXNIeWRyYXRpbmciLCAiaSIsICJjaGlsZFZOb2RlIiwgIm5ld0RvbSIsICJmaXJzdENoaWxkRG9tIiwgInJlc3VsdCIsICJzaG91bGRQbGFjZSIsICJvbGRDaGlsZHJlbiIsICJFTVBUWV9BUlIiLCAibmV3Q2hpbGRyZW5MZW5ndGgiLCAiY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSIsICJFTVBUWV9PQkoiLCAicmVmIiwgImFwcGx5UmVmIiwgImluc2VydCIsICJuZXh0U2libGluZyIsICJza2V3ZWRJbmRleCIsICJtYXRjaGluZ0luZGV4IiwgIm9sZENoaWxkcmVuTGVuZ3RoIiwgInJlbWFpbmluZ09sZENoaWxkcmVuIiwgInNrZXciLCAiQXJyYXkiLCAiY29uc3RydWN0b3IiLCAiU3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgImlzQXJyYXkiLCAiX19iIiwgImtleSIsICJmaW5kTWF0Y2hpbmdJbmRleCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInBhcmVudE5vZGUiLCAiaW5zZXJ0QmVmb3JlIiwgIm5vZGVUeXBlIiwgInRvQ2hpbGRBcnJheSIsICJvdXQiLCAieCIsICJ5IiwgIm1hdGNoZWQiLCAic2V0U3R5bGUiLCAic3R5bGUiLCAidmFsdWUiLCAic2V0UHJvcGVydHkiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgInRlc3QiLCAiZG9tIiwgIm5hbWUiLCAib2xkVmFsdWUiLCAidXNlQ2FwdHVyZSIsICJsb3dlckNhc2VOYW1lIiwgIm8iLCAiY3NzVGV4dCIsICJyZXBsYWNlIiwgIkNBUFRVUkVfUkVHRVgiLCAidG9Mb3dlckNhc2UiLCAic2xpY2UiLCAiRVZFTlRfQVRUQUNIRUQiLCAiZXZlbnRDbG9jayIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudEhhbmRsZXIiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJldmVudCIsICJ0bXAiLCAib2xkQ29tbWl0UXVldWVMZW5ndGgiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgIm5ld1R5cGUiLCAib3V0ZXIiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJjb250ZXh0VHlwZSIsICJfX0UiLCAiZG9SZW5kZXIiLCAic3ViIiwgInN0YXRlIiwgIl9faCIsICJfc2IiLCAiX19zIiwgImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwgImNsb25lTm9kZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAicm9vdCIsICJjYiIsICJjYWxsIiwgIm5vZGUiLCAibWFwIiwgIm5ld0h0bWwiLCAib2xkSHRtbCIsICJuZXdDaGlsZHJlbiIsICJpbnB1dFZhbHVlIiwgImNoZWNrZWQiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJkZWZhdWx0VmFsdWUiLCAiY2hpbGROb2RlcyIsICJhdHRyaWJ1dGVzIiwgIl9faHRtbCIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJ1bmRlZmluZWQiLCAiaGFzUmVmVW5tb3VudCIsICJjdXJyZW50IiwgInNraXBSZW1vdmUiLCAiciIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJyZXBsYWNlTm9kZSIsICJkb2N1bWVudEVsZW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJmaXJzdENoaWxkIiwgImNyZWF0ZUNvbnRleHQiLCAiZGVmYXVsdFZhbHVlIiwgIkNvbnRleHQiLCAicHJvcHMiLCAic3VicyIsICJjdHgiLCAidGhpcyIsICJnZXRDaGlsZENvbnRleHQiLCAiU2V0IiwgIl9fYyIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX3Byb3BzIiwgInZhbHVlIiwgImZvckVhY2giLCAiYyIsICJfX2UiLCAiZW5xdWV1ZVJlbmRlciIsICJzdWIiLCAiYWRkIiwgIm9sZCIsICJkZWxldGUiLCAiY2FsbCIsICJjaGlsZHJlbiIsICJpIiwgIl9fIiwgIlByb3ZpZGVyIiwgIl9fbCIsICJDb25zdW1lciIsICJjb250ZXh0VmFsdWUiLCAiY29udGV4dFR5cGUiLCAic2xpY2UiLCAiRU1QVFlfQVJSIiwgIm9wdGlvbnMiLCAiZXJyb3IiLCAidm5vZGUiLCAib2xkVk5vZGUiLCAiZXJyb3JJbmZvIiwgImNvbXBvbmVudCIsICJjdG9yIiwgImhhbmRsZWQiLCAiY29uc3RydWN0b3IiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwgInNldFN0YXRlIiwgIl9fZCIsICJjb21wb25lbnREaWRDYXRjaCIsICJfX0UiLCAiZSIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgIkJhc2VDb21wb25lbnQiLCAicHJvdG90eXBlIiwgInVwZGF0ZSIsICJjYWxsYmFjayIsICJzIiwgIl9fcyIsICJzdGF0ZSIsICJhc3NpZ24iLCAiX192IiwgIl9zYiIsICJwdXNoIiwgImZvcmNlVXBkYXRlIiwgIl9faCIsICJyZW5kZXIiLCAiRnJhZ21lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJkZWZlciIsICJQcm9taXNlIiwgInRoZW4iLCAiYmluZCIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiZGVwdGhTb3J0IiwgImEiLCAiYiIsICJfX2IiLCAicHJvY2VzcyIsICJfX3IiLCAiX2lkIiwgIk1hdGgiLCAicmFuZG9tIiwgInRvU3RyaW5nIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2aW91c0NvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9wdGlvbnMiLCAiX29wdGlvbnMiLCAib2xkQmVmb3JlRGlmZiIsICJfX2IiLCAib2xkQmVmb3JlUmVuZGVyIiwgIl9fciIsICJvbGRBZnRlckRpZmYiLCAiZGlmZmVkIiwgIm9sZENvbW1pdCIsICJfX2MiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgIm9sZFJvb3QiLCAiX18iLCAiZ2V0SG9va1N0YXRlIiwgImluZGV4IiwgInR5cGUiLCAiX19oIiwgImhvb2tzIiwgIl9fSCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgImFjdGlvbiIsICJjdXJyZW50VmFsdWUiLCAiX19OIiwgIm5leHRWYWx1ZSIsICJzZXRTdGF0ZSIsICJfX2YiLCAidXBkYXRlSG9va1N0YXRlIiwgInAiLCAicyIsICJjIiwgInVwZGF0ZWRIb29rIiwgInNob3VsZFVwZGF0ZSIsICJwcm9wcyIsICJzb21lIiwgImhvb2tJdGVtIiwgInByZXZTY3UiLCAicmVzdWx0IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAidXNlQ29udGV4dCIsICJjb250ZXh0IiwgInByb3ZpZGVyIiwgImN1cnJlbnRDb21wb25lbnQiLCAiX19jIiwgInN0YXRlIiwgImdldEhvb2tTdGF0ZSIsICJjdXJyZW50SW5kZXgiLCAiYyIsICJfXyIsICJzdWIiLCAicHJvcHMiLCAidmFsdWUiLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImxpc3RlbmVycyIsICJzdGF0ZSIsICJkIiwgImgiLCAieCIsICJkIiwgImgiLCAidCIsICJ2IiwgInQiLCAiYSIsICJoIiwgInciLCAicyIsICJjIiwgIkEiLCAiZCIsICJoIiwgImkiLCAiaSIsICJsaXN0ZW5lcnMiLCAicGVuZGluZyIsICJkIiwgImgiLCAiaW1hZ2VzIiwgImkiLCAicyIsICJsIiwgImVudHJpZXMiLCAiZSIsICJjIiwgImEiLCAiYiIsICJkIiwgImkiLCAiaW1hZ2VzIiwgInciLCAiaCIsICJ4IiwgInkiLCAibGF5ZXIiLCAic3RhdGUiLCAidyIsICJoIiwgInZub2RlSWQiLCAiY3JlYXRlVk5vZGUiLCAidHlwZSIsICJwcm9wcyIsICJrZXkiLCAiaXNTdGF0aWNDaGlsZHJlbiIsICJfX3NvdXJjZSIsICJfX3NlbGYiLCAicmVmIiwgImkiLCAibm9ybWFsaXplZFByb3BzIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAidm5vZGVJZCIsICJfX2kiLCAiX191IiwgImRlZmF1bHRQcm9wcyIsICJvcHRpb25zIiwgImQiLCAiaCIsICJ1IiwgInMiLCAiQSIsICJlIiwgIngiLCAieSIsICJpIiwgInQiLCAidiIsICJzdGF0ZSIsICJsYXllcklkIiwgImwiLCAiYiIsICJsYXllciIsICJ3IiwgImltYWdlcyIsICJ1IiwgInUiLCAidSIsICJlIiwgInIiLCAiZyIsICJiIiwgImQiLCAiaCIsICJzIiwgInYiLCAiYyIsICJ4IiwgIm0iLCAidSIsICJkIiwgImUiLCAicyIsICJBIiwgInMiLCAiZCIsICJBIiwgImgiLCAidSIsICJ0IiwgImUiLCAiZCIsICJoIiwgInUiLCAicyIsICJ1IiwgIkEiLCAiaW1hZ2VzIiwgImUiLCAiaCIsICJlIiwgInN0YXRlIiwgInMiLCAiZCIsICJBIiwgInAiLCAidSIsICJ1IiwgIm5hdmlnYXRlIiwgIkEiLCAiZCIsICJ0IiwgImUiLCAidSJdCn0K
