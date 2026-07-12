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
var MAX_INLINE_SRC_BYTES = 6e4;
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
function decodeImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.src = src;
  });
}
async function compressToInline(src, width, height) {
  const img = await decodeImage(src);
  let scale = Math.min(1, width / Math.max(1, img.naturalWidth), height / Math.max(1, img.naturalHeight));
  if (!Number.isFinite(scale) || scale <= 0) scale = 1;
  let quality = 0.82;
  for (let attempt = 0; attempt < 16; attempt += 1) {
    const w3 = Math.max(1, Math.round(img.naturalWidth * scale));
    const h3 = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w3;
    canvas.height = h3;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unavailable");
    ctx.drawImage(img, 0, 0, w3, h3);
    const next = canvas.toDataURL("image/jpeg", quality);
    if (next.length <= MAX_INLINE_SRC_BYTES) {
      return { src: next, width: w3, height: h3 };
    }
    if (quality > 0.45) quality -= 0.08;
    else {
      scale *= 0.72;
      quality = 0.78;
    }
  }
  throw new Error("Could not compress image under the hosted size limit");
}
async function uploadViaEndpoint(projectId, src, width, height) {
  const blob = await (await fetch(src)).blob();
  const contentType = blob.type && blob.type.startsWith("image/") ? blob.type : "image/png";
  const url = `/assets/upload?projectId=${encodeURIComponent(projectId)}&width=${encodeURIComponent(String(width))}&height=${encodeURIComponent(String(height))}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: blob,
    credentials: "same-origin"
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Upload failed (${response.status}): ${detail.slice(0, 160)}`);
  }
  const payload = await response.json();
  if (!payload.assetId || !payload.publicUrl) {
    throw new Error("Upload response missing assetId");
  }
  return { assetId: payload.assetId, src: payload.publicUrl, width, height };
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
  try {
    return await uploadViaEndpoint(projectId, src, width, height);
  } catch (error) {
    console.warn("Endpoint upload failed; compressing inline:", error);
    return compressToInline(src, width, height);
  }
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
      const timeout = UPLOAD_TIMEOUT_MS;
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
function decodeImage2(src) {
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
  const img = await decodeImage2(original);
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
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      className: "save-status",
      title: saveError ?? void 0,
      onClick: () => {
        if (saveError) window.alert(saveError);
      },
      children: [
        /* @__PURE__ */ u3("span", { className: `save-dot ${dot}` }),
        /* @__PURE__ */ u3("span", { className: "save-label", children: label })
      ]
    }
  );
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvZ2VvbWV0cnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FwaS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvc3RvcmUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3VwbG9hZC50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvcGVyc2lzdC50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYXNzZXRzLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9saWIvcmVuZGVyLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9icnVzaE92ZXJsYXkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2hpc3RvcnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FjdGlvbnMudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3ZpZXcudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2xpYi9pbWFnZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9zcmMvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9zcmMvaW5kZXguanMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvQ2FudmFzU3RhZ2UudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0ljb25zLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Qcm9wZXJ0aWVzUGFuZWwudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0xheWVyc1BhbmVsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Ub29sYmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9UaGVtZVRvZ2dsZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvVG9wQmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9FZGl0b3IudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0hvbWUudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG4vKiogSG9zdGVkIExha2ViZWQgbWF4VmFsdWVCeXRlcyBpcyA2NTUzNiBcdTIwMTQgc3RheSB1bmRlciB0aGF0IGZvciBpbmxpbmUgYXNzZXQvdGh1bWIgc3RyaW5ncy4gKi9cbmV4cG9ydCBjb25zdCBNQVhfSU5MSU5FX1NSQ19CWVRFUyA9IDYwXzAwMDtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLCBcIm11bHRpcGx5XCIsIFwic2NyZWVuXCIsIFwib3ZlcmxheVwiLCBcImRhcmtlblwiLCBcImxpZ2h0ZW5cIixcbiAgXCJjb2xvci1kb2RnZVwiLCBcImNvbG9yLWJ1cm5cIiwgXCJoYXJkLWxpZ2h0XCIsIFwic29mdC1saWdodFwiLCBcImRpZmZlcmVuY2VcIiwgXCJleGNsdXNpb25cIixcbiAgXCJodWVcIiwgXCJzYXR1cmF0aW9uXCIsIFwiY29sb3JcIiwgXCJsdW1pbm9zaXR5XCJcbl0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBCbGVuZE1vZGUgPSAodHlwZW9mIEJMRU5EX01PREVTKVtudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBMYXllclRyYW5zZm9ybSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHc6IG51bWJlcjtcbiAgaDogbnVtYmVyO1xuICAvKiogRGVncmVlcywgY2xvY2t3aXNlLCBhYm91dCB0aGUgYm94IGNlbnRlci4gKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgLyoqIDAuLjEgKi9cbiAgb3BhY2l0eTogbnVtYmVyO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBmbGlwWDogYm9vbGVhbjtcbiAgYmxlbmRNb2RlOiBCbGVuZE1vZGU7XG59O1xuXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG5cbmV4cG9ydCB0eXBlIFRleHRMYXllckRhdGEgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250V2VpZ2h0OiBudW1iZXI7XG4gIGFsaWduOiBUZXh0QWxpZ247XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ6IG51bWJlcjtcbiAgLyoqIEludHJpbnNpYyByYXN0ZXIgZGltZW5zaW9ucyB1c2VkIHRvIHByZXNlcnZlIGxheWVyIHNjYWxlIGFjcm9zcyB0ZXh0IHJlcmVuZGVycy4gKi9cbiAgcmFzdGVyV2lkdGg/OiBudW1iZXI7XG4gIHJhc3RlckhlaWdodD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyRGF0YSA9IExheWVyVHJhbnNmb3JtICYgeyB0ZXh0PzogVGV4dExheWVyRGF0YSB9O1xuXG5leHBvcnQgdHlwZSBMYXllciA9IExheWVyRGF0YSAmIHtcbiAgaWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG4vKiogVGhlIGluLW1lbW9yeSBlZGl0aW5nIGRvY3VtZW50LiBsYXllcnNbMF0gaXMgdGhlIGJvdHRvbSBsYXllci4gKi9cbmV4cG9ydCB0eXBlIFByb2plY3REb2MgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyczogTGF5ZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllck9yZGVyOiBzdHJpbmdbXTtcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclJvdyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcHJvamVjdElkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0VGh1bWIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRodW1iOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBc3NldFBheWxvYWQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhaW50QXNzZXRQYXlsb2FkID0geyBzcmM6IHN0cmluZyB9O1xuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZVRleHQoaW5wdXQ6IFBhcnRpYWw8VGV4dExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogVGV4dExheWVyRGF0YSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaW5wdXQgfHwgdHlwZW9mIGlucHV0LmNvbnRlbnQgIT09IFwic3RyaW5nXCIpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IGFsaWduOiBUZXh0QWxpZ24gPSBpbnB1dC5hbGlnbiA9PT0gXCJjZW50ZXJcIiB8fCBpbnB1dC5hbGlnbiA9PT0gXCJyaWdodFwiID8gaW5wdXQuYWxpZ24gOiBcImxlZnRcIjtcbiAgY29uc3QgcmFzdGVyV2lkdGggPSBmaW5pdGUoaW5wdXQucmFzdGVyV2lkdGgsIDApO1xuICBjb25zdCByYXN0ZXJIZWlnaHQgPSBmaW5pdGUoaW5wdXQucmFzdGVySGVpZ2h0LCAwKTtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBpbnB1dC5jb250ZW50LnNsaWNlKDAsIDQwMDApLFxuICAgIGZvbnRGYW1pbHk6IHR5cGVvZiBpbnB1dC5mb250RmFtaWx5ID09PSBcInN0cmluZ1wiID8gaW5wdXQuZm9udEZhbWlseS5zbGljZSgwLCA4MCkgOiBcIkludGVyXCIsXG4gICAgZm9udFNpemU6IGNsYW1wKGZpbml0ZShpbnB1dC5mb250U2l6ZSwgNDgpLCA2LCA1MDApLFxuICAgIGZvbnRXZWlnaHQ6IGNsYW1wKE1hdGgucm91bmQoZmluaXRlKGlucHV0LmZvbnRXZWlnaHQsIDQwMCkgLyAxMDApICogMTAwLCAxMDAsIDkwMCksXG4gICAgYWxpZ24sXG4gICAgY29sb3I6IHR5cGVvZiBpbnB1dC5jb2xvciA9PT0gXCJzdHJpbmdcIiAmJiAvXiNbMC05YS1mXXs2fSQvaS50ZXN0KGlucHV0LmNvbG9yKSA/IGlucHV0LmNvbG9yIDogXCIjMTExMTExXCIsXG4gICAgbGluZUhlaWdodDogY2xhbXAoZmluaXRlKGlucHV0LmxpbmVIZWlnaHQsIDEuMiksIDAuNiwgMyksXG4gICAgLi4uKHJhc3RlcldpZHRoID4gMCAmJiByYXN0ZXJIZWlnaHQgPiAwID8geyByYXN0ZXJXaWR0aCwgcmFzdGVySGVpZ2h0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVHJhbnNmb3JtKGlucHV0OiBQYXJ0aWFsPExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogTGF5ZXJEYXRhIHtcbiAgY29uc3QgdCA9IGlucHV0ID8/IHt9O1xuICBjb25zdCB0ZXh0ID0gc2FuaXRpemVUZXh0KHQudGV4dCk7XG4gIHJldHVybiB7XG4gICAgeDogZmluaXRlKHQueCwgMCksXG4gICAgeTogZmluaXRlKHQueSwgMCksXG4gICAgdzogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LncsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgaDogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LmgsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgcm90YXRpb246IGZpbml0ZSh0LnJvdGF0aW9uLCAwKSxcbiAgICBvcGFjaXR5OiBjbGFtcChmaW5pdGUodC5vcGFjaXR5LCAxKSwgMCwgMSksXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIGZsaXBYOiB0eXBlb2YgdC5mbGlwWCA9PT0gXCJib29sZWFuXCIgPyB0LmZsaXBYIDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBCTEVORF9NT0RFUy5pbmNsdWRlcyh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmRNb2RlIGFzIEJsZW5kTW9kZSkgOiBcIm5vcm1hbFwiLFxuICAgIC4uLih0ZXh0ID8geyB0ZXh0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRyYW5zZm9ybSh0OiBMYXllckRhdGEpOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2FuaXRpemVUcmFuc2Zvcm0odCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVHJhbnNmb3JtKHJhdzogc3RyaW5nKTogTGF5ZXJEYXRhIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0oSlNPTi5wYXJzZShyYXcpIGFzIFBhcnRpYWw8TGF5ZXJEYXRhPik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nQXJyYXkocmF3OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZC5maWx0ZXIoKHYpOiB2IGlzIHN0cmluZyA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgOiBbXTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cbiIsICIvLyBQdXJlIGdlb21ldHJ5IGZvciBtb3ZpbmcsIHNjYWxpbmcsIGFuZCByb3RhdGluZyBsYXllcnMuIEFsbCBtYXRoIHdvcmtzIGluXG4vLyBwcm9qZWN0IChcIndvcmxkXCIpIGNvb3JkaW5hdGVzOyByb3RhdGlvbiBpcyBkZWdyZWVzIGNsb2Nrd2lzZSBhYm91dCB0aGVcbi8vIGxheWVyJ3MgY2VudGVyLlxuXG5pbXBvcnQgeyBNSU5fTEFZRVJfU0laRSwgdHlwZSBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBIYW5kbGVJZCA9IFwibndcIiB8IFwiblwiIHwgXCJuZVwiIHwgXCJlXCIgfCBcInNlXCIgfCBcInNcIiB8IFwic3dcIiB8IFwid1wiO1xuXG4vKiogSGFuZGxlIHBvc2l0aW9ucyBpbiB1bml0IGJveCBjb29yZGluYXRlcyAoMC4uMSkuICovXG5leHBvcnQgY29uc3QgSEFORExFUzogUmVjb3JkPEhhbmRsZUlkLCBQb2ludD4gPSB7XG4gIG53OiB7IHg6IDAsIHk6IDAgfSxcbiAgbjogeyB4OiAwLjUsIHk6IDAgfSxcbiAgbmU6IHsgeDogMSwgeTogMCB9LFxuICBlOiB7IHg6IDEsIHk6IDAuNSB9LFxuICBzZTogeyB4OiAxLCB5OiAxIH0sXG4gIHM6IHsgeDogMC41LCB5OiAxIH0sXG4gIHN3OiB7IHg6IDAsIHk6IDEgfSxcbiAgdzogeyB4OiAwLCB5OiAwLjUgfVxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRV9JRFMgPSBPYmplY3Qua2V5cyhIQU5ETEVTKSBhcyBIYW5kbGVJZFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb3JuZXJIYW5kbGUoaGFuZGxlOiBIYW5kbGVJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFuZGxlLmxlbmd0aCA9PT0gMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChkZWcgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlYyh2OiBQb2ludCwgZGVnOiBudW1iZXIpOiBQb2ludCB7XG4gIGNvbnN0IHJhZCA9IGRlZ1RvUmFkKGRlZyk7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHJhZCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZCk7XG4gIHJldHVybiB7IHg6IHYueCAqIGNvcyAtIHYueSAqIHNpbiwgeTogdi54ICogc2luICsgdi55ICogY29zIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNlbnRlcih0OiBMYXllclRyYW5zZm9ybSk6IFBvaW50IHtcbiAgcmV0dXJuIHsgeDogdC54ICsgdC53IC8gMiwgeTogdC55ICsgdC5oIC8gMiB9O1xufVxuXG4vKiogV29ybGQgcG9zaXRpb24gb2YgYSBwb2ludCBnaXZlbiBpbiB1bml0IGJveCBjb29yZGluYXRlcyAoMC4uMSkuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pdFBvaW50VG9Xb3JsZCh0OiBMYXllclRyYW5zZm9ybSwgdW5pdDogUG9pbnQpOiBQb2ludCB7XG4gIGNvbnN0IGNlbnRlciA9IGxheWVyQ2VudGVyKHQpO1xuICBjb25zdCBsb2NhbCA9IHsgeDogKHVuaXQueCAtIDAuNSkgKiB0LncsIHk6ICh1bml0LnkgLSAwLjUpICogdC5oIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSByb3RhdGVWZWMobG9jYWwsIHQucm90YXRpb24pO1xuICByZXR1cm4geyB4OiBjZW50ZXIueCArIHJvdGF0ZWQueCwgeTogY2VudGVyLnkgKyByb3RhdGVkLnkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGEgPSBkZWcgJSAzNjA7XG4gIGlmIChhID4gMTgwKSBhIC09IDM2MDtcbiAgaWYgKGEgPD0gLTE4MCkgYSArPSAzNjA7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlc2l6ZSBgc3RhcnRgIGJ5IGRyYWdnaW5nIGBoYW5kbGVgIHRvIHdvcmxkIHBvaW50IGBwb2ludGVyYCwga2VlcGluZyB0aGVcbiAqIG9wcG9zaXRlIGhhbmRsZSBmaXhlZC4gQ29ybmVyIGhhbmRsZXMgc2NhbGUgcHJvcG9ydGlvbmFsbHkgdW5sZXNzIGBmcmVlYDtcbiAqIGVkZ2UgaGFuZGxlcyBzdHJldGNoIGEgc2luZ2xlIGF4aXMuIE5ldmVyIGZsaXBzOyBjbGFtcHMgdG8gTUlOX0xBWUVSX1NJWkUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUZyb21IYW5kbGUoXG4gIHN0YXJ0OiBMYXllclRyYW5zZm9ybSxcbiAgaGFuZGxlOiBIYW5kbGVJZCxcbiAgcG9pbnRlcjogUG9pbnQsXG4gIGZyZWU6IGJvb2xlYW5cbik6IFBpY2s8TGF5ZXJUcmFuc2Zvcm0sIFwieFwiIHwgXCJ5XCIgfCBcIndcIiB8IFwiaFwiPiB7XG4gIGNvbnN0IGggPSBIQU5ETEVTW2hhbmRsZV07XG4gIGNvbnN0IGFuY2hvciA9IHsgeDogMSAtIGgueCwgeTogMSAtIGgueSB9O1xuICBjb25zdCBhbmNob3JXb3JsZCA9IHVuaXRQb2ludFRvV29ybGQoc3RhcnQsIGFuY2hvcik7XG5cbiAgLy8gUG9pbnRlciBleHByZXNzZWQgaW4gdGhlIGxheWVyJ3MgbG9jYWwgKHVucm90YXRlZCkgZnJhbWUsIHJlbGF0aXZlIHRvIHRoZSBhbmNob3IuXG4gIGNvbnN0IHYgPSByb3RhdGVWZWMoeyB4OiBwb2ludGVyLnggLSBhbmNob3JXb3JsZC54LCB5OiBwb2ludGVyLnkgLSBhbmNob3JXb3JsZC55IH0sIC1zdGFydC5yb3RhdGlvbik7XG4gIGNvbnN0IGRpclggPSBoLnggLSBhbmNob3IueDsgLy8gLTEsIDAsIG9yIDFcbiAgY29uc3QgZGlyWSA9IGgueSAtIGFuY2hvci55O1xuXG4gIGxldCB3ID0gc3RhcnQudztcbiAgbGV0IGhndCA9IHN0YXJ0Lmg7XG5cbiAgaWYgKGlzQ29ybmVySGFuZGxlKGhhbmRsZSkgJiYgIWZyZWUpIHtcbiAgICAvLyBQcm9qZWN0IHRoZSBwb2ludGVyIG9udG8gdGhlIGFuY2hvci0+aGFuZGxlIGRpYWdvbmFsIGZvciBhIHNtb290aCB1bmlmb3JtIHNjYWxlLlxuICAgIGNvbnN0IGR4ID0gZGlyWCAqIHN0YXJ0Lnc7XG4gICAgY29uc3QgZHkgPSBkaXJZICogc3RhcnQuaDtcbiAgICBjb25zdCBzID0gTWF0aC5tYXgoXG4gICAgICBNSU5fTEFZRVJfU0laRSAvIE1hdGgubWF4KHN0YXJ0LncsIHN0YXJ0LmgpLFxuICAgICAgKHYueCAqIGR4ICsgdi55ICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KVxuICAgICk7XG4gICAgdyA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBzdGFydC53ICogcyk7XG4gICAgaGd0ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHN0YXJ0LmggKiBzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGlyWCAhPT0gMCkgdyA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCB2LnggLyBkaXJYKTtcbiAgICBpZiAoZGlyWSAhPT0gMCkgaGd0ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHYueSAvIGRpclkpO1xuICB9XG5cbiAgLy8gUmVwb3NpdGlvbiBzbyB0aGUgYW5jaG9yIHBvaW50IHN0YXlzIGZpeGVkIGluIHdvcmxkIHNwYWNlLlxuICBjb25zdCBjZW50ZXJPZmZzZXQgPSByb3RhdGVWZWMoeyB4OiAoMC41IC0gYW5jaG9yLngpICogdywgeTogKDAuNSAtIGFuY2hvci55KSAqIGhndCB9LCBzdGFydC5yb3RhdGlvbik7XG4gIGNvbnN0IGN4ID0gYW5jaG9yV29ybGQueCArIGNlbnRlck9mZnNldC54O1xuICBjb25zdCBjeSA9IGFuY2hvcldvcmxkLnkgKyBjZW50ZXJPZmZzZXQueTtcbiAgcmV0dXJuIHsgeDogY3ggLSB3IC8gMiwgeTogY3kgLSBoZ3QgLyAyLCB3LCBoOiBoZ3QgfTtcbn1cblxuLyoqIEFuZ2xlIGZvciB0aGUgcm90YXRlIGhhbmRsZSAod2hpY2ggc2l0cyBhYm92ZSB0aGUgdG9wIGVkZ2UpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uRnJvbVBvaW50ZXIoc3RhcnQ6IExheWVyVHJhbnNmb3JtLCBwb2ludGVyOiBQb2ludCwgc25hcDogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IGNlbnRlciA9IGxheWVyQ2VudGVyKHN0YXJ0KTtcbiAgY29uc3QgZGVnID0gKE1hdGguYXRhbjIocG9pbnRlci55IC0gY2VudGVyLnksIHBvaW50ZXIueCAtIGNlbnRlci54KSAqIDE4MCkgLyBNYXRoLlBJICsgOTA7XG4gIGNvbnN0IHNuYXBwZWQgPSBzbmFwID8gTWF0aC5yb3VuZChkZWcgLyAxNSkgKiAxNSA6IGRlZztcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHNuYXBwZWQpO1xufVxuXG4vKiogQXhpcy1hbGlnbmVkIGJvdW5kcyBvZiBhIChwb3NzaWJseSByb3RhdGVkKSBsYXllciwgZm9yIGdyb3VwIG91dGxpbmVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQWFiYih0OiBMYXllclRyYW5zZm9ybSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xuICBjb25zdCBjb3JuZXJzID0gW1xuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAwLCB5OiAwIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAxLCB5OiAwIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAxLCB5OiAxIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAwLCB5OiAxIH0pXG4gIF07XG4gIGNvbnN0IHhzID0gY29ybmVycy5tYXAoKGMpID0+IGMueCk7XG4gIGNvbnN0IHlzID0gY29ybmVycy5tYXAoKGMpID0+IGMueSk7XG4gIGNvbnN0IG1pblggPSBNYXRoLm1pbiguLi54cyk7XG4gIGNvbnN0IG1pblkgPSBNYXRoLm1pbiguLi55cyk7XG4gIHJldHVybiB7IHg6IG1pblgsIHk6IG1pblksIHc6IE1hdGgubWF4KC4uLnhzKSAtIG1pblgsIGg6IE1hdGgubWF4KC4uLnlzKSAtIG1pblkgfTtcbn1cbiIsICIvLyBUeXBlZCB3cmFwcGVycyBvdmVyIHRoZSBjYXBzdWxlJ3MgbXV0YXRpb25zLiBMYWtlYmVkJ3MgdXNlTXV0YXRpb24gcGVyZm9ybXNcbi8vIG5vIGhvb2sgY2FsbHMgaW50ZXJuYWxseSAoaXQganVzdCBiaW5kcyB0aGUgV2ViU29ja2V0IHJlcXVlc3QpLCBzbyBpdCBpc1xuLy8gc2FmZSB0byBjcmVhdGUgdGhlc2UgYmluZGluZ3Mgb25jZSBhdCBtb2R1bGUgc2NvcGUgYW5kIGNhbGwgdGhlbSBmcm9tXG4vLyBub24tY29tcG9uZW50IGNvZGUgbGlrZSB0aGUgcGVyc2lzdCBxdWV1ZS5cblxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQXNzZXRQYXlsb2FkLCBQYWludEFzc2V0UGF5bG9hZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcbiAgY3JlYXRlUHJvamVjdDogdXNlTXV0YXRpb248W25hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLCB7IGlkOiBzdHJpbmcgfT4oXCJjcmVhdGVQcm9qZWN0XCIpLFxuICBjcmVhdGVQcm9qZWN0RnJvbUltYWdlOiB1c2VNdXRhdGlvbjxcbiAgICBbbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGF5ZXJOYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCBkYXRhSnNvbjogc3RyaW5nXSxcbiAgICB7IGlkOiBzdHJpbmc7IGxheWVySWQ6IHN0cmluZzsgYXNzZXRJZDogc3RyaW5nOyBzcmM6IHN0cmluZyB9XG4gID4oXCJjcmVhdGVQcm9qZWN0RnJvbUltYWdlXCIpLFxuICByZW5hbWVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nXSwgdm9pZD4oXCJyZW5hbWVQcm9qZWN0XCIpLFxuICByZXNpemVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLCB2b2lkPihcInJlc2l6ZVByb2plY3RcIiksXG4gIHNldFByb2plY3RUaHVtYjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIHRodW1iOiBzdHJpbmddLCB2b2lkPihcInNldFByb2plY3RUaHVtYlwiKSxcbiAgZGVsZXRlUHJvamVjdDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCB2b2lkPihcImRlbGV0ZVByb2plY3RcIiksXG4gIGFkZExheWVyOiB1c2VNdXRhdGlvbjxcbiAgICBbXG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNsaWVudEtleTogc3RyaW5nLFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGF0YUpzb246IHN0cmluZyxcbiAgICAgIGFzc2V0OiB7IGFzc2V0SWQ/OiBzdHJpbmc7IHNyYz86IHN0cmluZzsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9XG4gICAgXSxcbiAgICB7IGxheWVySWQ6IHN0cmluZzsgYXNzZXRJZDogc3RyaW5nOyBzcmM/OiBzdHJpbmcgfVxuICA+KFwiYWRkTGF5ZXJcIiksXG4gIHVwZGF0ZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgZGF0YUpzb246IHN0cmluZ10sIHZvaWQ+KFwidXBkYXRlTGF5ZXJcIiksXG4gIHJlcGxhY2VMYXllckFzc2V0OiB1c2VNdXRhdGlvbjxcbiAgICBbaWQ6IHN0cmluZywgc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSxcbiAgICB7IGFzc2V0SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmcgfVxuICA+KFwicmVwbGFjZUxheWVyQXNzZXRcIiksXG4gIHByZXBhcmVBc3NldFVwbG9hZDogdXNlTXV0YXRpb248XG4gICAgW3Byb2plY3RJZDogc3RyaW5nLCBjb250ZW50VHlwZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl0sXG4gICAgeyBhc3NldElkOiBzdHJpbmc7IHVwbG9hZFVybDogc3RyaW5nOyBwdWJsaWNVcmw6IHN0cmluZyB9XG4gID4oXCJwcmVwYXJlQXNzZXRVcGxvYWRcIiksXG4gIHJlbmFtZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nXSwgdm9pZD4oXCJyZW5hbWVMYXllclwiKSxcbiAgZGVsZXRlTGF5ZXI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgdm9pZD4oXCJkZWxldGVMYXllclwiKSxcbiAgc2V0TGF5ZXJPcmRlcjogdXNlTXV0YXRpb248W3Byb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdXSwgdm9pZD4oXCJzZXRMYXllck9yZGVyXCIpLFxuICBnZXRBc3NldDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCBBc3NldFBheWxvYWQ+KFwiZ2V0QXNzZXRcIiksXG4gIGdldEFzc2V0UGFpbnQ6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgUGFpbnRBc3NldFBheWxvYWQ+KFwiZ2V0QXNzZXRQYWludFwiKVxufTtcblxuLyoqXG4gKiBRdWVyaWVzIGFycml2ZSBhcyBgW11gIGJlZm9yZSB0aGUgZmlyc3QgV2ViU29ja2V0IHJlc3VsdCwgdGhlbiBhc1xuICogYHsgcmVhZHk6IHRydWUsIGl0ZW1zIH1gLiBUaGlzIG5vcm1hbGl6ZXMgYm90aCBzaGFwZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVJlc3VsdDxUPihyYXc6IHVua25vd24pOiB7IHJlYWR5OiBib29sZWFuOyBpdGVtczogVFtdIH0ge1xuICBpZiAocmF3ICYmIHR5cGVvZiByYXcgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkocmF3KSAmJiAocmF3IGFzIHsgcmVhZHk/OiBib29sZWFuIH0pLnJlYWR5KSB7XG4gICAgY29uc3QgaXRlbXMgPSAocmF3IGFzIHsgaXRlbXM/OiBUW10gfSkuaXRlbXM7XG4gICAgcmV0dXJuIHsgcmVhZHk6IHRydWUsIGl0ZW1zOiBBcnJheS5pc0FycmF5KGl0ZW1zKSA/IGl0ZW1zIDogW10gfTtcbiAgfVxuICByZXR1cm4geyByZWFkeTogZmFsc2UsIGl0ZW1zOiBbXSB9O1xufVxuIiwgIi8vIFRpbnkgb2JzZXJ2YWJsZSBzdG9yZSBmb3IgdGhlIGVkaXRvci4gV2hpbGUgYSBwcm9qZWN0IGlzIG9wZW4sIHRoaXMgZG9jIGlzXG4vLyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aDogcG9pbnRlciBnZXN0dXJlcyBtdXRhdGUgaXQgc3luY2hyb25vdXNseSBmb3Jcbi8vIGluc3RhbnQgZmVlZGJhY2ssIGFuZCBwZXJzaXN0ZW5jZSBoYXBwZW5zIGluIHRoZSBiYWNrZ3JvdW5kIChzZWUgcGVyc2lzdC50cykuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB0eXBlIHsgQmxlbmRNb2RlLCBQcm9qZWN0RG9jLCBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFRvb2wgPSBcIm1vdmVcIiB8IFwiaGFuZFwiIHwgXCJ0ZXh0XCIgfCBcImJydXNoXCIgfCBcImNyb3BcIjtcbmV4cG9ydCB0eXBlIFNhdmVTdGF0dXMgPSBcInNhdmVkXCIgfCBcInNhdmluZ1wiIHwgXCJyZXRyeWluZ1wiO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JWaWV3ID0geyB6b29tOiBudW1iZXI7IHBhblg6IG51bWJlcjsgcGFuWTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIEVkaXRvclN0YXRlID0ge1xuICBkb2M6IFByb2plY3REb2MgfCBudWxsO1xuICBzZWxlY3Rpb246IHN0cmluZ1tdO1xuICB0b29sOiBUb29sO1xuICBzcGFjZVBhbjogYm9vbGVhbjtcbiAgdmlldzogRWRpdG9yVmlldztcbiAgc2F2ZVN0YXR1czogU2F2ZVN0YXR1cztcbiAgcGVuZGluZ09wczogbnVtYmVyO1xuICBzYXZlRXJyb3I6IHN0cmluZyB8IG51bGw7XG4gIC8qKiBCdW1wZWQgd2hlbmV2ZXIgdGhlIHVuZG8vcmVkbyBzdGFja3MgY2hhbmdlLCBzbyB0aGUgVUkgcmUtcmVhZHMgdGhlbS4gKi9cbiAgaGlzdFZlcnNpb246IG51bWJlcjtcbiAgLyoqIEJ1bXBlZCB0byBhc2sgdGhlIGNhbnZhcyB0byByZS1maXQgdGhlIGFydGJvYXJkIHRvIHRoZSB2aWV3cG9ydC4gKi9cbiAgZml0VmVyc2lvbjogbnVtYmVyO1xuICBicnVzaFNpemU6IG51bWJlcjtcbiAgYnJ1c2hIYXJkbmVzczogbnVtYmVyO1xuICBicnVzaE9wYWNpdHk6IG51bWJlcjtcbiAgYnJ1c2hGbG93OiBudW1iZXI7XG4gIGZvcmVncm91bmRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgdGV4dEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGV4dEZvbnRTaXplOiBudW1iZXI7XG4gIHRleHRGb250V2VpZ2h0OiBudW1iZXI7XG4gIHRleHRBbGlnbjogVGV4dEFsaWduO1xuICB0ZXh0TGluZUhlaWdodDogbnVtYmVyO1xuICB0ZXh0RWRpdGluZzogeyBpZDogc3RyaW5nOyBkcmFmdDogc3RyaW5nIH0gfCBudWxsO1xuICBjcm9wUmVjdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB8IG51bGw7XG4gIHNuYXBHdWlkZXM6IHsgeD86IG51bWJlcjsgeT86IG51bWJlciB9IHwgbnVsbDtcbiAgYmxlbmRQcmV2aWV3OiBCbGVuZE1vZGUgfCBudWxsO1xufTtcblxubGV0IHN0YXRlOiBFZGl0b3JTdGF0ZSA9IHtcbiAgZG9jOiBudWxsLFxuICBzZWxlY3Rpb246IFtdLFxuICB0b29sOiBcIm1vdmVcIixcbiAgc3BhY2VQYW46IGZhbHNlLFxuICB2aWV3OiB7IHpvb206IDEsIHBhblg6IDAsIHBhblk6IDAgfSxcbiAgc2F2ZVN0YXR1czogXCJzYXZlZFwiLFxuICBwZW5kaW5nT3BzOiAwLFxuICBzYXZlRXJyb3I6IG51bGwsXG4gIGhpc3RWZXJzaW9uOiAwLFxuICBmaXRWZXJzaW9uOiAwLFxuICBicnVzaFNpemU6IDE2LFxuICBicnVzaEhhcmRuZXNzOiA4MCxcbiAgYnJ1c2hPcGFjaXR5OiAxMDAsXG4gIGJydXNoRmxvdzogMTAwLFxuICBmb3JlZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB0ZXh0Rm9udEZhbWlseTogXCJJbnN0cnVtZW50IFNhbnNcIixcbiAgdGV4dEZvbnRTaXplOiA0OCxcbiAgdGV4dEZvbnRXZWlnaHQ6IDQwMCxcbiAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgdGV4dExpbmVIZWlnaHQ6IDEuMixcbiAgdGV4dEVkaXRpbmc6IG51bGwsXG4gIGNyb3BSZWN0OiBudWxsLFxuICBzbmFwR3VpZGVzOiBudWxsLFxuICBibGVuZFByZXZpZXc6IG51bGxcbn07XG5cbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlKCk6IEVkaXRvclN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGUocGF0Y2g6IFBhcnRpYWw8RWRpdG9yU3RhdGU+KTogdm9pZCB7XG4gIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4ucGF0Y2ggfTtcbiAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBbLi4ubGlzdGVuZXJzXSkge1xuICAgIGxpc3RlbmVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvYyhmbjogKGRvYzogUHJvamVjdERvYykgPT4gUHJvamVjdERvYyk6IHZvaWQge1xuICBpZiAoIXN0YXRlLmRvYykgcmV0dXJuO1xuICBzZXRTdGF0ZSh7IGRvYzogZm4oc3RhdGUuZG9jKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgfTtcbn1cblxuLyoqIFN1YnNjcmliZSBhIGNvbXBvbmVudCB0byBhIHNsaWNlIG9mIGVkaXRvciBzdGF0ZSAoT2JqZWN0LmlzIGNvbXBhcmlzb24pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVkaXRvcjxUPihzZWxlY3RvcjogKHM6IEVkaXRvclN0YXRlKSA9PiBUKTogVCB7XG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHNlbGVjdG9yO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHNlbGVjdG9yKHN0YXRlKSk7XG4gIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gc2VsZWN0b3JSZWYuY3VycmVudChzdGF0ZSk7XG4gICAgICBpZiAoIU9iamVjdC5pcyhuZXh0LCB2YWx1ZVJlZi5jdXJyZW50KSkge1xuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dDtcbiAgICAgICAgc2V0VmFsdWUoKCkgPT4gbmV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGVjaygpO1xuICAgIHJldHVybiBzdWJzY3JpYmUoY2hlY2spO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwgIi8vIFVwbG9hZCBsYXJnZSBpbWFnZXMgd2l0aG91dCBzdHVmZmluZyB0aGVtIHRocm91Z2ggTGFrZWJlZCBtdXRhdGlvbnNcbi8vIChob3N0ZWQgbWF4VmFsdWVCeXRlcyBpcyA2NEtCKS4gUHJlZmVyIHNhbWUtb3JpZ2luIC9hc3NldHMvdXBsb2FkIFx1MjE5MiBTMztcbi8vIGlmIHRoYXQgZmFpbHMsIGNvbXByZXNzIHRvIGFuIGlubGluZSBKUEVHIHRoYXQgZml0cyB0aGUgREIgY2FwLlxuXG5pbXBvcnQgeyBNQVhfSU5MSU5FX1NSQ19CWVRFUyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcblxuZXhwb3J0IHsgTUFYX0lOTElORV9TUkNfQllURVMgfTtcblxuZXhwb3J0IHR5cGUgUmVtb3RlQXNzZXQgPSB7XG4gIC8qKiBTZXQgd2hlbiB1cGxvYWQgY3JlYXRlZCBhIHNlcnZlciBhc3NldCByb3cuICovXG4gIGFzc2V0SWQ/OiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIGRlY29kZUltYWdlKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVjb2RlIGltYWdlXCIpKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9KTtcbn1cblxuLyoqIFNocmluay9yZS1lbmNvZGUgdW50aWwgdGhlIGRhdGEgVVJMIGZpdHMgdGhlIGhvc3RlZCBEQiB2YWx1ZSBjYXAuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcHJlc3NUb0lubGluZShcbiAgc3JjOiBzdHJpbmcsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPFJlbW90ZUFzc2V0PiB7XG4gIGNvbnN0IGltZyA9IGF3YWl0IGRlY29kZUltYWdlKHNyYyk7XG4gIGxldCBzY2FsZSA9IE1hdGgubWluKDEsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaW1nLm5hdHVyYWxXaWR0aCksIGhlaWdodCAvIE1hdGgubWF4KDEsIGltZy5uYXR1cmFsSGVpZ2h0KSk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHNjYWxlKSB8fCBzY2FsZSA8PSAwKSBzY2FsZSA9IDE7XG4gIGxldCBxdWFsaXR5ID0gMC44MjtcblxuICBmb3IgKGxldCBhdHRlbXB0ID0gMDsgYXR0ZW1wdCA8IDE2OyBhdHRlbXB0ICs9IDEpIHtcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWcubmF0dXJhbFdpZHRoICogc2NhbGUpKTtcbiAgICBjb25zdCBoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWcubmF0dXJhbEhlaWdodCAqIHNjYWxlKSk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgdywgaCk7XG4gICAgY29uc3QgbmV4dCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIHF1YWxpdHkpO1xuICAgIGlmIChuZXh0Lmxlbmd0aCA8PSBNQVhfSU5MSU5FX1NSQ19CWVRFUykge1xuICAgICAgcmV0dXJuIHsgc3JjOiBuZXh0LCB3aWR0aDogdywgaGVpZ2h0OiBoIH07XG4gICAgfVxuICAgIGlmIChxdWFsaXR5ID4gMC40NSkgcXVhbGl0eSAtPSAwLjA4O1xuICAgIGVsc2Uge1xuICAgICAgc2NhbGUgKj0gMC43MjtcbiAgICAgIHF1YWxpdHkgPSAwLjc4O1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjb21wcmVzcyBpbWFnZSB1bmRlciB0aGUgaG9zdGVkIHNpemUgbGltaXRcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZFZpYUVuZHBvaW50KFxuICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPFJlbW90ZUFzc2V0PiB7XG4gIGNvbnN0IGJsb2IgPSBhd2FpdCAoYXdhaXQgZmV0Y2goc3JjKSkuYmxvYigpO1xuICBjb25zdCBjb250ZW50VHlwZSA9IGJsb2IudHlwZSAmJiBibG9iLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSA/IGJsb2IudHlwZSA6IFwiaW1hZ2UvcG5nXCI7XG4gIGNvbnN0IHVybCA9XG4gICAgYC9hc3NldHMvdXBsb2FkP3Byb2plY3RJZD0ke2VuY29kZVVSSUNvbXBvbmVudChwcm9qZWN0SWQpfWAgK1xuICAgIGAmd2lkdGg9JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHdpZHRoKSl9YCArXG4gICAgYCZoZWlnaHQ9JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGhlaWdodCkpfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IGNvbnRlbnRUeXBlIH0sXG4gICAgYm9keTogYmxvYixcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gIH0pO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZGV0YWlsID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpLmNhdGNoKCgpID0+IFwiXCIpO1xuICAgIHRocm93IG5ldyBFcnJvcihgVXBsb2FkIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtkZXRhaWwuc2xpY2UoMCwgMTYwKX1gKTtcbiAgfVxuICBjb25zdCBwYXlsb2FkID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgeyBhc3NldElkPzogc3RyaW5nOyBwdWJsaWNVcmw/OiBzdHJpbmcgfTtcbiAgaWYgKCFwYXlsb2FkLmFzc2V0SWQgfHwgIXBheWxvYWQucHVibGljVXJsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVXBsb2FkIHJlc3BvbnNlIG1pc3NpbmcgYXNzZXRJZFwiKTtcbiAgfVxuICByZXR1cm4geyBhc3NldElkOiBwYXlsb2FkLmFzc2V0SWQsIHNyYzogcGF5bG9hZC5wdWJsaWNVcmwsIHdpZHRoLCBoZWlnaHQgfTtcbn1cblxuLyoqXG4gKiBFbnN1cmUgYW4gaW1hZ2UgaXMgYWRkcmVzc2FibGUgYXMgYSBzaG9ydCBhc3NldCBpZCAvIGh0dHBzIFVSTCAvIHRpbnkgZGF0YSBVUkwuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVSZW1vdGVBc3NldChcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlclxuKTogUHJvbWlzZTxSZW1vdGVBc3NldD4ge1xuICBpZiAoIXByb2plY3RJZCkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBwcm9qZWN0IGlkIGZvciB1cGxvYWRcIik7XG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHNyYykpIHtcbiAgICByZXR1cm4geyBzcmMsIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuICBpZiAoIXNyYy5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9cIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBtdXN0IGJlIGEgZGF0YSBVUkwgb3IgaHR0cHMgVVJMXCIpO1xuICB9XG4gIGlmIChzcmMubGVuZ3RoIDw9IE1BWF9JTkxJTkVfU1JDX0JZVEVTKSB7XG4gICAgcmV0dXJuIHsgc3JjLCB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCB1cGxvYWRWaWFFbmRwb2ludChwcm9qZWN0SWQsIHNyYywgd2lkdGgsIGhlaWdodCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKFwiRW5kcG9pbnQgdXBsb2FkIGZhaWxlZDsgY29tcHJlc3NpbmcgaW5saW5lOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIGNvbXByZXNzVG9JbmxpbmUoc3JjLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufVxuXG4vKiogU2hyaW5rIGEgY2FudmFzIHRodW1iIHVudGlsIGl0IGZpdHMgdGhlIGhvc3RlZCBEQiB2YWx1ZSBjYXAuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFjdFRodW1iRGF0YVVybChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogc3RyaW5nIHtcbiAgbGV0IHF1YWxpdHkgPSAwLjg1O1xuICBsZXQgdXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgcXVhbGl0eSk7XG4gIHdoaWxlICh1cmwubGVuZ3RoID4gTUFYX0lOTElORV9TUkNfQllURVMgJiYgcXVhbGl0eSA+IDAuMzUpIHtcbiAgICBxdWFsaXR5IC09IDAuMTtcbiAgICB1cmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCBxdWFsaXR5KTtcbiAgfVxuICBpZiAodXJsLmxlbmd0aCA8PSBNQVhfSU5MSU5FX1NSQ19CWVRFUykgcmV0dXJuIHVybDtcblxuICBjb25zdCBzY2FsZSA9IE1hdGguc3FydChNQVhfSU5MSU5FX1NSQ19CWVRFUyAvIHVybC5sZW5ndGgpICogMC45O1xuICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIHNtYWxsLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjYW52YXMud2lkdGggKiBzY2FsZSkpO1xuICBzbWFsbC5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGNhbnZhcy5oZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjdHggPSBzbWFsbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm4gdXJsLnNsaWNlKDAsIE1BWF9JTkxJTkVfU1JDX0JZVEVTKTtcbiAgY3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDAsIHNtYWxsLndpZHRoLCBzbWFsbC5oZWlnaHQpO1xuICByZXR1cm4gc21hbGwudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjcpO1xufVxuIiwgIi8vIFdyaXRlLWJlaGluZCBwZXJzaXN0ZW5jZSBxdWV1ZTogdGhlIG9wdGltaXN0aWMgZW5naW5lJ3MgYmFja2JvbmUuXG4vL1xuLy8gRXZlcnkgZWRpdCBpcyBhcHBsaWVkIHRvIHRoZSBsb2NhbCBkb2MgaW1tZWRpYXRlbHk7IHRoZSBjb3JyZXNwb25kaW5nXG4vLyBvcGVyYXRpb24gaXMgZW5xdWV1ZWQgaGVyZSBhbmQgZHJhaW5lZCBpbiBvcmRlciBvdmVyIHRoZSBXZWJTb2NrZXQuXG4vL1xuLy8gR3VhcmFudGVlczpcbi8vIC0gRklGTzogYW4gb3AgdGhhdCByZWZlcmVuY2VzIGEgbGF5ZXIgY3JlYXRlZCBieSBhbiBlYXJsaWVyIG9wIGFsd2F5cyBydW5zXG4vLyAgIGFmdGVyIGl0LCBzbyB0ZW1wIGNsaWVudCBpZHMgY2FuIGJlIHJlbWFwcGVkIHRvIHNlcnZlciBpZHMgb24gdGhlIGZseS5cbi8vIC0gQ29hbGVzY2luZzogcmFwaWQgdXBkYXRlcyB0byB0aGUgc2FtZSB0YXJnZXQgY29sbGFwc2UgaW50byBvbmUgcGVuZGluZyBvcFxuLy8gICAoZHJhZyBnZXN0dXJlcyBkb24ndCBmbG9vZCB0aGUgc2VydmVyKS5cbi8vIC0gRGVsaXZlcnk6IG9wcyB0aGF0IHRpbWUgb3V0IChkZWFkIHNvY2tldCwgcmVjb25uZWN0KSBhcmUgcmV0cmllZCB3aXRoXG4vLyAgIGJhY2tvZmYgZm9yZXZlcjsgYWRkTGF5ZXIgY2FycmllcyBhbiBpZGVtcG90ZW5jeSBrZXkgc28gcmV0cmllcyBuZXZlclxuLy8gICBkdXBsaWNhdGUuIERldGVybWluaXN0aWMgc2VydmVyIHJlamVjdGlvbnMgYXJlIGRyb3BwZWQgYW5kIHN1cmZhY2VkLlxuXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IGVuc3VyZVJlbW90ZUFzc2V0IH0gZnJvbSBcIi4vdXBsb2FkXCI7XG5cbmV4cG9ydCB0eXBlIFBlcnNpc3RPcCA9XG4gIHwge1xuICAgICAga2luZDogXCJhZGRMYXllclwiO1xuICAgICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgICAgY2xpZW50S2V5OiBzdHJpbmc7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBkYXRhOiBzdHJpbmc7XG4gICAgICBhc3NldDogeyByZWY6IHN0cmluZyB9IHwgeyBjbGllbnRJZDogc3RyaW5nOyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgICB9XG4gIHwgeyBraW5kOiBcInVwZGF0ZUxheWVyXCI7IGlkOiBzdHJpbmc7IGRhdGE6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInJlcGxhY2VMYXllckFzc2V0XCI7IGlkOiBzdHJpbmc7IGNsaWVudEFzc2V0SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lTGF5ZXJcIjsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwiZGVsZXRlTGF5ZXJcIjsgaWQ6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInNldE9yZGVyXCI7IHByb2plY3RJZDogc3RyaW5nOyBpZHM6IHN0cmluZ1tdIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lUHJvamVjdFwiOyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJyZXNpemVQcm9qZWN0XCI7IGlkOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6IFwic2V0VGh1bWJcIjsgaWQ6IHN0cmluZzsgdGh1bWI6IHN0cmluZyB9O1xuXG5jb25zdCBPUF9USU1FT1VUX01TID0gMTBfMDAwO1xuLy8gVXBsb2FkcyBnbyBjbGllbnQgXHUyMTkyIExha2ViZWQgXHUyMTkyIFMzOyBhbGxvdyBtb3JlIHRpbWUgdGhhbiBhIG5vcm1hbCBtZXRhZGF0YSB3cml0ZS5cbmNvbnN0IFVQTE9BRF9USU1FT1VUX01TID0gNjBfMDAwO1xuY29uc3QgTUFYX0JBQ0tPRkZfTVMgPSAxNV8wMDA7XG5cbi8vIFRlbXAgY2xpZW50IGlkIC0+IHNlcnZlciBpZC4gQ2xpZW50IGNvZGUgb25seSBldmVyIHNlZXMgY2xpZW50IGlkczsgdGhlXG4vLyB0cmFuc2xhdGlvbiBoYXBwZW5zIGhlcmUgYXQgZXhlY3V0aW9uIHRpbWUuXG5jb25zdCBsYXllcklkcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5jb25zdCBhc3NldElkcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbmNvbnN0IHF1ZXVlOiBQZXJzaXN0T3BbXSA9IFtdO1xubGV0IGRyYWluaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTGF5ZXJJZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxheWVySWRzLmdldChpZCkgPz8gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXNzZXRJZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFzc2V0SWRzLmdldChpZCkgPz8gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBBc3NldElkKGNsaWVudElkOiBzdHJpbmcsIHNlcnZlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNsaWVudElkICE9PSBzZXJ2ZXJJZCkgYXNzZXRJZHMuc2V0KGNsaWVudElkLCBzZXJ2ZXJJZCk7XG59XG5cbmxldCBuZXh0Q2xpZW50SWQgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0NsaWVudElkKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3ByZWZpeH1fJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHsobmV4dENsaWVudElkKyspLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zbGljZSgyLCA4KX1gO1xufVxuXG4vKiogS2V5IGZvciBjb2FsZXNjaW5nOyBvcHMgd2l0aCB0aGUgc2FtZSBrZXkgcmVwbGFjZSBlYWNoIG90aGVyIGluIHBsYWNlLiAqL1xuZnVuY3Rpb24gb3BLZXkob3A6IFBlcnNpc3RPcCk6IHN0cmluZyB8IG51bGwge1xuICBzd2l0Y2ggKG9wLmtpbmQpIHtcbiAgICBjYXNlIFwidXBkYXRlTGF5ZXJcIjpcbiAgICAgIHJldHVybiBgdXBkYXRlTGF5ZXI6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJyZW5hbWVMYXllclwiOlxuICAgICAgcmV0dXJuIGByZW5hbWVMYXllcjoke29wLmlkfWA7XG4gICAgY2FzZSBcInNldE9yZGVyXCI6XG4gICAgICByZXR1cm4gYHNldE9yZGVyOiR7b3AucHJvamVjdElkfWA7XG4gICAgY2FzZSBcInJlbmFtZVByb2plY3RcIjpcbiAgICAgIHJldHVybiBgcmVuYW1lUHJvamVjdDoke29wLmlkfWA7XG4gICAgY2FzZSBcInJlc2l6ZVByb2plY3RcIjpcbiAgICAgIHJldHVybiBgcmVzaXplUHJvamVjdDoke29wLmlkfWA7XG4gICAgY2FzZSBcInNldFRodW1iXCI6XG4gICAgICByZXR1cm4gYHNldFRodW1iOiR7b3AuaWR9YDtcbiAgICBjYXNlIFwicmVwbGFjZUxheWVyQXNzZXRcIjpcbiAgICAgIHJldHVybiBgcmVwbGFjZUxheWVyQXNzZXQ6JHtvcC5pZH1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZShvcDogUGVyc2lzdE9wKTogdm9pZCB7XG4gIGNvbnN0IGtleSA9IG9wS2V5KG9wKTtcbiAgaWYgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSBxdWV1ZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKG9wS2V5KHF1ZXVlW2ldKSA9PT0ga2V5KSB7XG4gICAgICAgIHF1ZXVlW2ldID0gb3A7XG4gICAgICAgIHN5bmNTdGF0dXMoKTtcbiAgICAgICAgdm9pZCBkcmFpbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHF1ZXVlLnB1c2gob3ApO1xuICBzeW5jU3RhdHVzKCk7XG4gIHZvaWQgZHJhaW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlbmRpbmdDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBzeW5jU3RhdHVzKHBhdGNoOiBQYXJ0aWFsPHsgc2F2ZVN0YXR1czogXCJzYXZlZFwiIHwgXCJzYXZpbmdcIiB8IFwicmV0cnlpbmdcIjsgc2F2ZUVycm9yOiBzdHJpbmcgfCBudWxsIH0+ID0ge30pOiB2b2lkIHtcbiAgY29uc3QgYnVzeSA9IHF1ZXVlLmxlbmd0aCA+IDAgfHwgZHJhaW5pbmc7XG4gIHNldFN0YXRlKHtcbiAgICBzYXZlU3RhdHVzOiBwYXRjaC5zYXZlU3RhdHVzID8/IChidXN5ID8gXCJzYXZpbmdcIiA6IFwic2F2ZWRcIiksXG4gICAgcGVuZGluZ09wczogcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApLFxuICAgIC4uLihwYXRjaC5zYXZlRXJyb3IgIT09IHVuZGVmaW5lZCA/IHsgc2F2ZUVycm9yOiBwYXRjaC5zYXZlRXJyb3IgfSA6IHt9KVxuICB9KTtcbn1cblxuY2xhc3MgT3BUaW1lb3V0IGV4dGVuZHMgRXJyb3Ige31cblxuZnVuY3Rpb24gd2l0aFRpbWVvdXQ8VD4ocHJvbWlzZTogUHJvbWlzZTxUPiwgbXMgPSBPUF9USU1FT1VUX01TKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgT3BUaW1lb3V0KFwidGltZWQgb3V0XCIpKSwgbXMpO1xuICAgIHByb21pc2UudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShvcDogUGVyc2lzdE9wKTogUHJvbWlzZTx2b2lkPiB7XG4gIHN3aXRjaCAob3Aua2luZCkge1xuICAgIGNhc2UgXCJhZGRMYXllclwiOiB7XG4gICAgICBsZXQgYXNzZXQ6IHsgYXNzZXRJZD86IHN0cmluZzsgc3JjPzogc3RyaW5nOyB3aWR0aD86IG51bWJlcjsgaGVpZ2h0PzogbnVtYmVyIH07XG4gICAgICBpZiAoXCJyZWZcIiBpbiBvcC5hc3NldCkge1xuICAgICAgICBhc3NldCA9IHsgYXNzZXRJZDogcmVzb2x2ZUFzc2V0SWQob3AuYXNzZXQucmVmKSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVtb3RlID0gYXdhaXQgZW5zdXJlUmVtb3RlQXNzZXQoXG4gICAgICAgICAgb3AucHJvamVjdElkLFxuICAgICAgICAgIG9wLmFzc2V0LnNyYyxcbiAgICAgICAgICBvcC5hc3NldC53aWR0aCxcbiAgICAgICAgICBvcC5hc3NldC5oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlbW90ZS5hc3NldElkKSB7XG4gICAgICAgICAgbWFwQXNzZXRJZChvcC5hc3NldC5jbGllbnRJZCwgcmVtb3RlLmFzc2V0SWQpO1xuICAgICAgICAgIHNlZWRBc3NldChvcC5hc3NldC5jbGllbnRJZCwge1xuICAgICAgICAgICAgc3JjOiByZW1vdGUuc3JjLFxuICAgICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9wLmFzc2V0LmhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlZWRBc3NldChyZW1vdGUuYXNzZXRJZCwge1xuICAgICAgICAgICAgc3JjOiByZW1vdGUuc3JjLFxuICAgICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9wLmFzc2V0LmhlaWdodFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFzc2V0ID0geyBhc3NldElkOiByZW1vdGUuYXNzZXRJZCB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFzc2V0ID0geyBzcmM6IHJlbW90ZS5zcmMsIHdpZHRoOiByZW1vdGUud2lkdGgsIGhlaWdodDogcmVtb3RlLmhlaWdodCB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCB0aW1lb3V0ID0gVVBMT0FEX1RJTUVPVVRfTVM7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3aXRoVGltZW91dChcbiAgICAgICAgYXBpLmFkZExheWVyKG9wLnByb2plY3RJZCwgb3AuY2xpZW50S2V5LCBvcC5uYW1lLCBvcC5kYXRhLCBhc3NldCksXG4gICAgICAgIHRpbWVvdXRcbiAgICAgICk7XG4gICAgICBpZiAob3AuY2xpZW50SWQgIT09IHJlc3VsdC5sYXllcklkKSBsYXllcklkcy5zZXQob3AuY2xpZW50SWQsIHJlc3VsdC5sYXllcklkKTtcbiAgICAgIGNvbnN0IGNsaWVudEFzc2V0SWQgPSBcInJlZlwiIGluIG9wLmFzc2V0ID8gb3AuYXNzZXQucmVmIDogb3AuYXNzZXQuY2xpZW50SWQ7XG4gICAgICBtYXBBc3NldElkKGNsaWVudEFzc2V0SWQsIHJlc3VsdC5hc3NldElkKTtcbiAgICAgIGlmIChyZXN1bHQuc3JjICYmIFwic3JjXCIgaW4gb3AuYXNzZXQpIHtcbiAgICAgICAgc2VlZEFzc2V0KGNsaWVudEFzc2V0SWQsIHtcbiAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMsXG4gICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IG9wLmFzc2V0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMsXG4gICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IG9wLmFzc2V0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXNlIFwidXBkYXRlTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkudXBkYXRlTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5kYXRhKSk7XG4gICAgY2FzZSBcInJlcGxhY2VMYXllckFzc2V0XCI6IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGdldFN0YXRlKCkuZG9jPy5pZCA/PyBcIlwiO1xuICAgICAgY29uc3QgcmVtb3RlID0gYXdhaXQgZW5zdXJlUmVtb3RlQXNzZXQocHJvamVjdElkLCBvcC5zcmMsIG9wLndpZHRoLCBvcC5oZWlnaHQpO1xuICAgICAgaWYgKHJlbW90ZS5hc3NldElkKSB7XG4gICAgICAgIG1hcEFzc2V0SWQob3AuY2xpZW50QXNzZXRJZCwgcmVtb3RlLmFzc2V0SWQpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2l0aFRpbWVvdXQoXG4gICAgICAgIGFwaS5yZXBsYWNlTGF5ZXJBc3NldChyZXNvbHZlTGF5ZXJJZChvcC5pZCksIHJlbW90ZS5zcmMsIG9wLndpZHRoLCBvcC5oZWlnaHQpLFxuICAgICAgICByZW1vdGUuYXNzZXRJZCA/IE9QX1RJTUVPVVRfTVMgOiBVUExPQURfVElNRU9VVF9NU1xuICAgICAgKTtcbiAgICAgIG1hcEFzc2V0SWQob3AuY2xpZW50QXNzZXRJZCwgcmVzdWx0LmFzc2V0SWQpO1xuICAgICAgY29uc3QgbG9jYWwgPSBvcC5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpO1xuICAgICAgY29uc3QgZGlzcGxheSA9IGxvY2FsID8gb3Auc3JjIDogcmVzdWx0LnNyYztcbiAgICAgIGNvbnN0IHBhaW50U3JjID0gbG9jYWwgPyBvcC5zcmMgOiB1bmRlZmluZWQ7XG4gICAgICBzZWVkQXNzZXQob3AuY2xpZW50QXNzZXRJZCwge1xuICAgICAgICBzcmM6IGRpc3BsYXksXG4gICAgICAgIHBhaW50U3JjLFxuICAgICAgICB3aWR0aDogb3Aud2lkdGgsXG4gICAgICAgIGhlaWdodDogb3AuaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHNlZWRBc3NldChyZXN1bHQuYXNzZXRJZCwge1xuICAgICAgICBzcmM6IGRpc3BsYXksXG4gICAgICAgIHBhaW50U3JjLFxuICAgICAgICB3aWR0aDogb3Aud2lkdGgsXG4gICAgICAgIGhlaWdodDogb3AuaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FzZSBcInJlbmFtZUxheWVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnJlbmFtZUxheWVyKHJlc29sdmVMYXllcklkKG9wLmlkKSwgb3AubmFtZSkpO1xuICAgIGNhc2UgXCJkZWxldGVMYXllclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5kZWxldGVMYXllcihyZXNvbHZlTGF5ZXJJZChvcC5pZCkpKTtcbiAgICBjYXNlIFwic2V0T3JkZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkuc2V0TGF5ZXJPcmRlcihvcC5wcm9qZWN0SWQsIG9wLmlkcy5tYXAocmVzb2x2ZUxheWVySWQpKSk7XG4gICAgY2FzZSBcInJlbmFtZVByb2plY3RcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVuYW1lUHJvamVjdChvcC5pZCwgb3AubmFtZSkpO1xuICAgIGNhc2UgXCJyZXNpemVQcm9qZWN0XCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnJlc2l6ZVByb2plY3Qob3AuaWQsIG9wLndpZHRoLCBvcC5oZWlnaHQpKTtcbiAgICBjYXNlIFwic2V0VGh1bWJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkuc2V0UHJvamVjdFRodW1iKG9wLmlkLCBvcC50aHVtYikpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRyYWluKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoZHJhaW5pbmcpIHJldHVybjtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICBzeW5jU3RhdHVzKCk7XG5cbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBvcCA9IHF1ZXVlLnNoaWZ0KCkhO1xuICAgIGxldCBhdHRlbXB0ID0gMDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGV4ZWN1dGUob3ApO1xuICAgICAgICBpZiAoYXR0ZW1wdCA+IDApIHN5bmNTdGF0dXMoeyBzYXZlU3RhdHVzOiBcInNhdmluZ1wiIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE9wVGltZW91dCkge1xuICAgICAgICAgIC8vIFNvY2tldCBsaWtlbHkgZGllZDsgdGhlIHRyYW5zcG9ydCByZWNvbm5lY3RzIG9uIGl0cyBvd24uIFJldHJ5IGZvcmV2ZXIuXG4gICAgICAgICAgYXR0ZW1wdCArPSAxO1xuICAgICAgICAgIHN5bmNTdGF0dXMoeyBzYXZlU3RhdHVzOiBcInJldHJ5aW5nXCIgfSk7XG4gICAgICAgICAgYXdhaXQgZGVsYXkoTWF0aC5taW4oTUFYX0JBQ0tPRkZfTVMsIDUwMCAqIDIgKiogTWF0aC5taW4oYXR0ZW1wdCwgNSkpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpO1xuICAgICAgICAvLyBcIm5vdCBmb3VuZFwiIGFmdGVyIGEgcmV0cnkganVzdCBtZWFucyBhIGNvbXBldGluZyBkZWxldGUgYWxyZWFkeSB3b247XG4gICAgICAgIC8vIHRoZSBzdGF0ZXMgaGF2ZSBjb252ZXJnZWQsIHNvIHRyZWF0IGl0IGFzIHN1Y2Nlc3MuXG4gICAgICAgIGlmICghL25vdCBmb3VuZC9pLnRlc3QobWVzc2FnZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGVyc2lzdCBvcCBmYWlsZWQsIGRyb3BwaW5nOlwiLCBvcC5raW5kLCBtZXNzYWdlKTtcbiAgICAgICAgICBzeW5jU3RhdHVzKHsgc2F2ZUVycm9yOiBgJHtvcC5raW5kfTogJHttZXNzYWdlfWAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgc3luY1N0YXR1cygpO1xufVxuXG4vLyBFZGl0aW5nIGNvbW1pdHMgYXJlIGVucXVldWVkIG9uIGdlc3R1cmUgZW5kIGFuZCBub3JtYWxseSBmbHVzaCBpblxuLy8gbWlsbGlzZWNvbmRzLCBidXQgd2FybiBpZiB0aGUgdXNlciBjbG9zZXMgdGhlIHRhYiBtaWQtc2F2ZS5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChwZW5kaW5nQ291bnQoKSA+IDAgfHwgZ2V0U3RhdGUoKS5zYXZlU3RhdHVzICE9PSBcInNhdmVkXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn1cbiIsICIvLyBJbi1tZW1vcnkgYXNzZXQgY2FjaGUuIExvY2FsbHkgaW1wb3J0ZWQgaW1hZ2VzIGFyZSBzZWVkZWQgd2l0aCBhIGRhdGEgVVJMXG4vLyAocGFpbnRTcmMpIGZvciBjYW52YXMgd29yazsgYWZ0ZXIgUzMgdXBsb2FkLCBzcmMgYmVjb21lcyB0aGUgQ2xvdWRGcm9udCBVUkxcbi8vIHVzZWQgZm9yIDxpbWc+IGRpc3BsYXkuIHBhaW50U3JjIGlzIGtlcHQgc28gdGh1bWJzL2V4cG9ydCB3b3JrIHdpdGhvdXQgQ09SUy5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgcmVzb2x2ZUFzc2V0SWQgfSBmcm9tIFwiLi9wZXJzaXN0XCI7XG5cbmV4cG9ydCB0eXBlIEFzc2V0RW50cnkgPSB7XG4gIHNyYzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIFNhbWUtb3JpZ2luL2RhdGEgVVJMIHNhZmUgZm9yIGNhbnZhcyAodGh1bWJzLCBleHBvcnQpLiAqL1xuICBwYWludFNyYz86IHN0cmluZztcbn07XG5cbmNvbnN0IGVudHJpZXMgPSBuZXcgTWFwPHN0cmluZywgQXNzZXRFbnRyeT4oKTtcbmNvbnN0IGluZmxpZ2h0ID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8QXNzZXRFbnRyeT4+KCk7XG5jb25zdCBpbWFnZXMgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pj4oKTtcbmNvbnN0IHBhaW50SW5mbGlnaHQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxBc3NldEVudHJ5Pj4oKTtcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuZnVuY3Rpb24gbm90aWZ5KCk6IHZvaWQge1xuICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIFsuLi5saXN0ZW5lcnNdKSBsaXN0ZW5lcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VlZEFzc2V0KGlkOiBzdHJpbmcsIGVudHJ5OiBBc3NldEVudHJ5KTogdm9pZCB7XG4gIGNvbnN0IHByZXYgPSBlbnRyaWVzLmdldChpZCk7XG4gIGVudHJpZXMuc2V0KGlkLCB7XG4gICAgc3JjOiBlbnRyeS5zcmMsXG4gICAgd2lkdGg6IGVudHJ5LndpZHRoLFxuICAgIGhlaWdodDogZW50cnkuaGVpZ2h0LFxuICAgIHBhaW50U3JjOiBlbnRyeS5wYWludFNyYyA/PyBwcmV2Py5wYWludFNyY1xuICB9KTtcbiAgaW1hZ2VzLmRlbGV0ZShpZCk7XG4gIG5vdGlmeSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRFbnRyeShpZDogc3RyaW5nKTogQXNzZXRFbnRyeSB8IG51bGwge1xuICByZXR1cm4gZW50cmllcy5nZXQoaWQpID8/IGVudHJpZXMuZ2V0KHJlc29sdmVBc3NldElkKGlkKSkgPz8gbnVsbDtcbn1cblxuLyoqIFByZWZlciBhIGxvY2FsIGRhdGEgVVJMIHNvIGRpc3BsYXkgZG9lc24ndCBmbGFzaCB3aGVuIGEgcmVtb3RlIFVSTCBhcnJpdmVzIGxhdGVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlTcmMoZW50cnk6IEFzc2V0RW50cnkpOiBzdHJpbmcge1xuICBpZiAoZW50cnkucGFpbnRTcmM/LnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkgcmV0dXJuIGVudHJ5LnBhaW50U3JjO1xuICBpZiAoZW50cnkuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkgcmV0dXJuIGVudHJ5LnNyYztcbiAgcmV0dXJuIGVudHJ5LnBhaW50U3JjIHx8IGVudHJ5LnNyYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUFzc2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPEFzc2V0RW50cnk+IHtcbiAgY29uc3QgZXhpc3RpbmcgPSBnZXRBc3NldEVudHJ5KGlkKTtcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4aXN0aW5nKTtcbiAgY29uc3QgcGVuZGluZyA9IGluZmxpZ2h0LmdldChpZCk7XG4gIGlmIChwZW5kaW5nKSByZXR1cm4gcGVuZGluZztcblxuICBjb25zdCBwcm9taXNlID0gYXBpXG4gICAgLmdldEFzc2V0KHJlc29sdmVBc3NldElkKGlkKSlcbiAgICAudGhlbigocGF5bG9hZCkgPT4ge1xuICAgICAgY29uc3QgcHJldiA9IGVudHJpZXMuZ2V0KGlkKTtcbiAgICAgIGNvbnN0IGVudHJ5OiBBc3NldEVudHJ5ID0ge1xuICAgICAgICBzcmM6IHBheWxvYWQuc3JjLFxuICAgICAgICB3aWR0aDogcGF5bG9hZC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwYXlsb2FkLmhlaWdodCxcbiAgICAgICAgcGFpbnRTcmM6IHByZXY/LnBhaW50U3JjXG4gICAgICB9O1xuICAgICAgZW50cmllcy5zZXQoaWQsIGVudHJ5KTtcbiAgICAgIG5vdGlmeSgpO1xuICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgaW5mbGlnaHQuZGVsZXRlKGlkKTtcbiAgICB9KTtcbiAgaW5mbGlnaHQuc2V0KGlkLCBwcm9taXNlKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIHBhaW50VXJsKGVudHJ5OiBBc3NldEVudHJ5KTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudHJ5LnBhaW50U3JjIHx8IGVudHJ5LnNyYztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZW5zdXJlUGFpbnRBc3NldChpZDogc3RyaW5nKTogUHJvbWlzZTxBc3NldEVudHJ5PiB7XG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgZW5zdXJlQXNzZXQoaWQpO1xuICBpZiAoZW50cnkucGFpbnRTcmMgfHwgZW50cnkuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkgcmV0dXJuIGVudHJ5O1xuICBjb25zdCBleGlzdGluZyA9IHBhaW50SW5mbGlnaHQuZ2V0KGlkKTtcbiAgaWYgKGV4aXN0aW5nKSByZXR1cm4gZXhpc3Rpbmc7XG4gIGNvbnN0IHByb21pc2UgPSBhcGkuZ2V0QXNzZXRQYWludChyZXNvbHZlQXNzZXRJZChpZCkpLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0QXNzZXRFbnRyeShpZCkgPz8gZW50cnk7XG4gICAgY29uc3QgbmV4dCA9IHsgLi4uY3VycmVudCwgcGFpbnRTcmM6IHBheWxvYWQuc3JjIH07XG4gICAgZW50cmllcy5zZXQoaWQsIG5leHQpO1xuICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUFzc2V0SWQoaWQpO1xuICAgIGlmIChyZXNvbHZlZCAhPT0gaWQpIGVudHJpZXMuc2V0KHJlc29sdmVkLCBuZXh0KTtcbiAgICBub3RpZnkoKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSkuZmluYWxseSgoKSA9PiBwYWludEluZmxpZ2h0LmRlbGV0ZShpZCkpO1xuICBwYWludEluZmxpZ2h0LnNldChpZCwgcHJvbWlzZSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKiogRGVjb2RlZCBpbWFnZSBlbGVtZW50IGZvciBjYW52YXMgcmVuZGVyaW5nIChleHBvcnQsIHRodW1ibmFpbHMpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZShpZDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIGNvbnN0IGNhY2hlZCA9IGltYWdlcy5nZXQoaWQpO1xuICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkO1xuICBjb25zdCBwcm9taXNlID0gZW5zdXJlUGFpbnRBc3NldChpZCkudGhlbihcbiAgICAoZW50cnkpID0+XG4gICAgICBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHBhaW50VXJsKGVudHJ5KTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIFJlbW90ZSBVUkxzIG5lZWQgQ09SUyBmb3IgY2FudmFzOyBkYXRhIFVSTHMgZG8gbm90LlxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICB9XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWNvZGUgaW1hZ2VcIikpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgfSlcbiAgKTtcbiAgaW1hZ2VzLnNldChpZCwgcHJvbWlzZSk7XG4gIHByb21pc2UuY2F0Y2goKCkgPT4gaW1hZ2VzLmRlbGV0ZShpZCkpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqIERlY29kZSBhIGRhdGEgVVJMIC8gaW1hZ2UgVVJMIHNvIHN3YXBwaW5nIGFuIDxpbWc+IHNyYyB3b24ndCBibGFuayBhIGZyYW1lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNyYyhzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IHNyYztcbiAgaWYgKHR5cGVvZiBpbWcuZGVjb2RlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gaW1nLmRlY29kZSgpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlc29sdmUoKTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSByZXNvbHZlKCk7XG4gIH0pO1xufVxuXG4vKiogQ29tcG9uZW50IGhvb2s6IHJldHVybnMgdGhlIGFzc2V0IG9uY2UgYXZhaWxhYmxlLCBraWNraW5nIG9mZiBhIGZldGNoLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzc2V0RW50cnkoaWQ6IHN0cmluZyk6IEFzc2V0RW50cnkgfCBudWxsIHtcbiAgY29uc3QgWywgc2V0VmVyc2lvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4gc2V0VmVyc2lvbigodmFsdWUpID0+IHZhbHVlICsgMSk7XG4gICAgY2hlY2soKTtcbiAgICBsaXN0ZW5lcnMuYWRkKGNoZWNrKTtcbiAgICBlbnN1cmVBc3NldChpZCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiQXNzZXQgbG9hZCBmYWlsZWQ6XCIsIGVycm9yKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUoY2hlY2spO1xuICAgIH07XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiBnZXRBc3NldEVudHJ5KGlkKTtcbn1cbiIsICIvLyBGbGF0dGVuIGEgZG9jdW1lbnQgdG8gYSBjYW52YXM6IHVzZWQgZm9yIFBORyBleHBvcnQgYW5kIHByb2plY3QgdGh1bWJuYWlscy5cblxuaW1wb3J0IHR5cGUgeyBQcm9qZWN0RG9jIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgZW5zdXJlQXNzZXQsIGxvYWRJbWFnZSB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IGNvbXBhY3RUaHVtYkRhdGFVcmwsIE1BWF9JTkxJTkVfU1JDX0JZVEVTIH0gZnJvbSBcIi4uL3N0YXRlL3VwbG9hZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyRG9jVG9DYW52YXMoZG9jOiBQcm9qZWN0RG9jLCBzY2FsZTogbnVtYmVyKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGRvYy53aWR0aCAqIHNjYWxlKSk7XG4gIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGRvYy5oZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuXG4gIGNvbnN0IHZpc2libGUgPSBkb2MubGF5ZXJzLmZpbHRlcigobGF5ZXIpID0+IGxheWVyLnZpc2libGUgJiYgbGF5ZXIub3BhY2l0eSA+IDApO1xuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICB2aXNpYmxlLm1hcCgobGF5ZXIpID0+IGxvYWRJbWFnZShsYXllci5hc3NldElkKS5jYXRjaCgoKSA9PiBudWxsKSlcbiAgKTtcblxuICBjdHguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gXCJoaWdoXCI7XG4gIHZpc2libGUuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcbiAgICBjb25zdCBpbWcgPSBpbWFnZXNbaV07XG4gICAgaWYgKCFpbWcpIHJldHVybjtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyLm9wYWNpdHk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxheWVyLmJsZW5kTW9kZSBhcyBHbG9iYWxDb21wb3NpdGVPcGVyYXRpb247XG4gICAgY3R4LnRyYW5zbGF0ZSgobGF5ZXIueCArIGxheWVyLncgLyAyKSAqIHNjYWxlLCAobGF5ZXIueSArIGxheWVyLmggLyAyKSAqIHNjYWxlKTtcbiAgICBjdHgucm90YXRlKChsYXllci5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcbiAgICBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAoLWxheWVyLncgLyAyKSAqIHNjYWxlLCAoLWxheWVyLmggLyAyKSAqIHNjYWxlLCBsYXllci53ICogc2NhbGUsIGxheWVyLmggKiBzY2FsZSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFBuZyhkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCAxKTtcbiAgY29uc3QgdXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSBgJHtkb2MubmFtZSB8fCBcImltYWdlXCJ9LnBuZ2A7XG4gIGxpbmsuY2xpY2soKTtcbn1cblxuY29uc3QgVEhVTUJfTUFYID0gMzYwO1xuXG5hc3luYyBmdW5jdGlvbiBmaXJzdExheWVyU3JjKGRvYzogUHJvamVjdERvYyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoIWxheWVyLnZpc2libGUgfHwgbGF5ZXIub3BhY2l0eSA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGVuc3VyZUFzc2V0KGxheWVyLmFzc2V0SWQpLmNhdGNoKCgpID0+IG51bGwpO1xuICAgIC8vIFByZWZlciBzaG9ydCBVUkxzIFx1MjAxNCBkYXRhIFVSTHMgLyBodWdlIHJlbW90ZXMgd29uJ3QgZml0IGluIHRoZSB0aHVtYiBjb2x1bW4uXG4gICAgaWYgKGVudHJ5Py5zcmMgJiYgZW50cnkuc3JjLmxlbmd0aCA8PSBNQVhfSU5MSU5FX1NSQ19CWVRFUykgcmV0dXJuIGVudHJ5LnNyYztcbiAgICBpZiAoZW50cnk/LnNyYz8uc3RhcnRzV2l0aChcImh0dHBcIikpIHJldHVybiBlbnRyeS5zcmM7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJUaHVtYihkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB2aXNpYmxlID0gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBsYXllci52aXNpYmxlICYmIGxheWVyLm9wYWNpdHkgPiAwKTtcbiAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCBUSFVNQl9NQVggLyBNYXRoLm1heChkb2Mud2lkdGgsIGRvYy5oZWlnaHQpKTtcblxuICBpZiAodmlzaWJsZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICB2aXNpYmxlLm1hcCgobGF5ZXIpID0+IGxvYWRJbWFnZShsYXllci5hc3NldElkKS50aGVuKCgpID0+IHRydWUpLmNhdGNoKCgpID0+IGZhbHNlKSlcbiAgICApO1xuICAgIGlmIChsb2FkZWQuZXZlcnkoKG9rKSA9PiAhb2spKSB7XG4gICAgICBjb25zdCBmYWxsYmFjayA9IGF3YWl0IGZpcnN0TGF5ZXJTcmMoZG9jKTtcbiAgICAgIGlmIChmYWxsYmFjaykgcmV0dXJuIGZhbGxiYWNrO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlbmRlciB0aHVtYm5haWxcIik7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjYW52YXMgPSBhd2FpdCByZW5kZXJEb2NUb0NhbnZhcyhkb2MsIHNjYWxlKTtcbiAgICByZXR1cm4gY29tcGFjdFRodW1iRGF0YVVybChjYW52YXMpO1xuICB9IGNhdGNoIHtcbiAgICBjb25zdCBmYWxsYmFjayA9IGF3YWl0IGZpcnN0TGF5ZXJTcmMoZG9jKTtcbiAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVuZGVyIHRodW1ibmFpbFwiKTtcbiAgfVxufVxuIiwgIi8vIENvb3JkaW5hdGVzIGNsZWFyaW5nIHRoZSBsaXZlIGJydXNoIG92ZXJsYXkgb25seSBhZnRlciB0aGUgY29tbWl0dGVkIGxheWVyXG4vLyBiaXRtYXAgaXMgb24gc2NyZWVuIFx1MjAxNCBhbmQgbmV2ZXIgd2hpbGUgdGhlIHVzZXIgaXMgbWlkLXN0cm9rZS5cblxubGV0IGNsZWFyT3ZlcmxheTogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5sZXQgcGVuZGluZ1NyYzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5sZXQgZ2VzdHVyZUFjdGl2ZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJCcnVzaE92ZXJsYXlDbGVhcihmbjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICBjbGVhck92ZXJsYXkgPSBmbjtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoY2xlYXJPdmVybGF5ID09PSBmbikgY2xlYXJPdmVybGF5ID0gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFybUJydXNoT3ZlcmxheUNsZWFyKHNyYzogc3RyaW5nKTogdm9pZCB7XG4gIHBlbmRpbmdTcmMgPSBzcmM7XG59XG5cbi8qKiBTdGFydCBhIGxpdmUgc3Ryb2tlOiBjYW5jZWwgYW55IGRlZmVycmVkIGNsZWFyIGFuZCB3aXBlIHRoZSBvdmVybGF5IGZpcnN0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlZ2luQnJ1c2hHZXN0dXJlKCk6IHZvaWQge1xuICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgZ2VzdHVyZUFjdGl2ZSA9IHRydWU7XG4gIGNsZWFyT3ZlcmxheT8uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRCcnVzaEdlc3R1cmUoKTogdm9pZCB7XG4gIGdlc3R1cmVBY3RpdmUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHJ5Q2xlYXJPdmVybGF5KCk6IHZvaWQge1xuICAvLyBOZXZlciB3aXBlIHRoZSBjYW52YXMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhd2luZyBcdTIwMTQgdGhhdCBkcm9wcyB0aGUgc3RhcnQgb2ZcbiAgLy8gdGhlIG5ldyBzdHJva2Ugd2hlbiBhIHByZXZpb3VzIGNvbW1pdCBmaW5hbGx5IGxhbmRzIG9uIHRoZSBsYXllci5cbiAgaWYgKGdlc3R1cmVBY3RpdmUpIHtcbiAgICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYXJPdmVybGF5Py4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVMYXllclNyY1ByZXNlbnRlZChzcmM6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIXBlbmRpbmdTcmMgfHwgc3JjICE9PSBwZW5kaW5nU3JjKSByZXR1cm47XG4gIHBlbmRpbmdTcmMgPSBudWxsO1xuICB0cnlDbGVhck92ZXJsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnJ1c2hPdmVybGF5Tm93KCk6IHZvaWQge1xuICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgdHJ5Q2xlYXJPdmVybGF5KCk7XG59XG4iLCAiLy8gQ29tbWFuZC1iYXNlZCB1bmRvL3JlZG8uIEVhY2ggZW50cnkgb3ducyBjbG9zdXJlcyB0aGF0IHJlLWFwcGx5IG9yIHJldmVydCBhXG4vLyBjaGFuZ2UgdGhyb3VnaCB0aGUgc2FtZSBhY3Rpb24gcGF0aHMgdGhhdCBtYWRlIGl0LCBzbyB1bmRvL3JlZG8gYWxzb1xuLy8gcGVyc2lzdHMgKGFuZCBzdGF5cyBvcHRpbWlzdGljKSBsaWtlIGFueSBvdGhlciBlZGl0LlxuXG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgdHlwZSBIaXN0b3J5RW50cnkgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHVuZG86ICgpID0+IHZvaWQ7XG4gIHJlZG86ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBMSU1JVCA9IDEwMDtcblxubGV0IHVuZG9TdGFjazogSGlzdG9yeUVudHJ5W10gPSBbXTtcbmxldCByZWRvU3RhY2s6IEhpc3RvcnlFbnRyeVtdID0gW107XG5cbmZ1bmN0aW9uIGJ1bXAoKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgaGlzdFZlcnNpb246IGdldFN0YXRlKCkuaGlzdFZlcnNpb24gKyAxIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaEhpc3RvcnkoZW50cnk6IEhpc3RvcnlFbnRyeSk6IHZvaWQge1xuICB1bmRvU3RhY2sucHVzaChlbnRyeSk7XG4gIGlmICh1bmRvU3RhY2subGVuZ3RoID4gTElNSVQpIHVuZG9TdGFjay5zaGlmdCgpO1xuICByZWRvU3RhY2sgPSBbXTtcbiAgYnVtcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRIaXN0b3J5KCk6IHZvaWQge1xuICB1bmRvU3RhY2sgPSBbXTtcbiAgcmVkb1N0YWNrID0gW107XG4gIGJ1bXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhblVuZG8oKTogYm9vbGVhbiB7XG4gIHJldHVybiB1bmRvU3RhY2subGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhblJlZG8oKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWRvU3RhY2subGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZG8oKTogdm9pZCB7XG4gIGNvbnN0IGVudHJ5ID0gdW5kb1N0YWNrLnBvcCgpO1xuICBpZiAoIWVudHJ5KSByZXR1cm47XG4gIGVudHJ5LnVuZG8oKTtcbiAgcmVkb1N0YWNrLnB1c2goZW50cnkpO1xuICBidW1wKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRvKCk6IHZvaWQge1xuICBjb25zdCBlbnRyeSA9IHJlZG9TdGFjay5wb3AoKTtcbiAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICBlbnRyeS5yZWRvKCk7XG4gIHVuZG9TdGFjay5wdXNoKGVudHJ5KTtcbiAgYnVtcCgpO1xufVxuIiwgIi8vIEV2ZXJ5IGVkaXQgZmxvd3MgdGhyb3VnaCBoZXJlOiBhcHBseSB0byB0aGUgbG9jYWwgZG9jIHN5bmNocm9ub3VzbHkgKGluc3RhbnRcbi8vIFVJKSwgcmVjb3JkIGFuIHVuZG8vcmVkbyBlbnRyeSwgYW5kIGVucXVldWUgYmFja2dyb3VuZCBwZXJzaXN0ZW5jZS4gR2VzdHVyZXNcbi8vIHVzZSB0aGUgdHJhbnNpZW50IHBhdGggYXQgcG9pbnRlci1tb3ZlIHJhdGUgYW5kIGNvbW1pdCBvbmNlIG9uIHJlbGVhc2UuXG5cbmltcG9ydCB7XG4gIHR5cGUgQmxlbmRNb2RlLFxuICBkZWNvZGVUcmFuc2Zvcm0sXG4gIGVuY29kZVRyYW5zZm9ybSxcbiAgTUFYX1BST0pFQ1RfRElNLFxuICB0eXBlIExheWVyLFxuICB0eXBlIFRleHRMYXllckRhdGEsXG4gIHR5cGUgTGF5ZXJSb3csXG4gIHR5cGUgTGF5ZXJUcmFuc2Zvcm0sXG4gIHR5cGUgUHJvamVjdERvYyxcbiAgdHlwZSBQcm9qZWN0TWV0YVxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBsYXllckFhYmIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgeyByZW5kZXJUaHVtYiB9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XG5pbXBvcnQgeyBnZXRBc3NldEVudHJ5LCBsb2FkSW1hZ2UsIHNlZWRBc3NldCwgZGVjb2RlU3JjIH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgeyBhcm1CcnVzaE92ZXJsYXlDbGVhciwgY2xlYXJCcnVzaE92ZXJsYXlOb3cgfSBmcm9tIFwiLi9icnVzaE92ZXJsYXlcIjtcbmltcG9ydCB7IHB1c2hIaXN0b3J5LCByZXNldEhpc3RvcnkgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBlbnF1ZXVlLCBuZXdDbGllbnRJZCB9IGZyb20gXCIuL3BlcnNpc3RcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXBkYXRlRG9jIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgSW1wb3J0ZWRJbWFnZSA9IHsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybVBhdGNoID0gUGFydGlhbDxMYXllclRyYW5zZm9ybT47XG5cbmNvbnN0IFRSQU5TSUVOVF9QRVJTSVNUX01TID0gMzAwO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFByb2plY3QgbGlmZWN5Y2xlXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdChtZXRhOiBQcm9qZWN0TWV0YSwgcm93czogTGF5ZXJSb3dbXSk6IHZvaWQge1xuICBjb25zdCBieUlkID0gbmV3IE1hcChyb3dzLm1hcCgocm93KSA9PiBbcm93LmlkLCByb3ddKSk7XG4gIGNvbnN0IGxheWVyczogTGF5ZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKHJvdzogTGF5ZXJSb3cpID0+IHtcbiAgICBsYXllcnMucHVzaCh7XG4gICAgICBpZDogcm93LmlkLFxuICAgICAgYXNzZXRJZDogcm93LmFzc2V0SWQsXG4gICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgIC4uLmRlY29kZVRyYW5zZm9ybShyb3cuZGF0YSlcbiAgICB9KTtcbiAgfTtcbiAgZm9yIChjb25zdCBpZCBvZiBtZXRhLmxheWVyT3JkZXIpIHtcbiAgICBjb25zdCByb3cgPSBieUlkLmdldChpZCk7XG4gICAgaWYgKHJvdykge1xuICAgICAgcHVzaChyb3cpO1xuICAgICAgYnlJZC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHJvdyBvZiBieUlkLnZhbHVlcygpKSBwdXNoKHJvdyk7XG5cbiAgc2V0U3RhdGUoe1xuICAgIGRvYzogeyBpZDogbWV0YS5pZCwgbmFtZTogbWV0YS5uYW1lLCB3aWR0aDogbWV0YS53aWR0aCwgaGVpZ2h0OiBtZXRhLmhlaWdodCwgbGF5ZXJzIH0sXG4gICAgc2VsZWN0aW9uOiBbXSxcbiAgICBzYXZlRXJyb3I6IG51bGxcbiAgfSk7XG4gIHJlc2V0SGlzdG9yeSgpO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQcm9qZWN0KCk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IGRvYzogbnVsbCwgc2VsZWN0aW9uOiBbXSwgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsLCBzbmFwR3VpZGVzOiBudWxsLCBibGVuZFByZXZpZXc6IG51bGwsIHRleHRFZGl0aW5nOiBudWxsIH0pO1xuICByZXNldEhpc3RvcnkoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWxlY3Rpb25cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbihpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgc2VsZWN0aW9uOiBpZHMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTZWxlY3RlZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgc2V0U2VsZWN0aW9uKGN1cnJlbnQuaW5jbHVkZXMoaWQpID8gY3VycmVudC5maWx0ZXIoKHMpID0+IHMgIT09IGlkKSA6IFsuLi5jdXJyZW50LCBpZF0pO1xufVxuXG5mdW5jdGlvbiBwcnVuZVNlbGVjdGlvbihyZW1vdmVkOiBTZXQ8c3RyaW5nPik6IHZvaWQge1xuICBzZXRTdGF0ZSh7IHNlbGVjdGlvbjogZ2V0U3RhdGUoKS5zZWxlY3Rpb24uZmlsdGVyKChpZCkgPT4gIXJlbW92ZWQuaGFzKGlkKSkgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHJhbnNmb3JtIGVkaXRzXG5cbmZ1bmN0aW9uIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChsYXllcikgPT4ge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzLmdldChsYXllci5pZCk7XG4gICAgICByZXR1cm4gcGF0Y2ggPyB7IC4uLmxheWVyLCAuLi5wYXRjaCB9IDogbGF5ZXI7XG4gICAgfSlcbiAgfSkpO1xufVxuXG5jb25zdCB0cmFuc2llbnRUaW1lcnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5mdW5jdGlvbiBwZXJzaXN0TGF5ZXJOb3coaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB0aW1lciA9IHRyYW5zaWVudFRpbWVycy5nZXQoaWQpO1xuICBpZiAodGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gIH1cbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGlkKTtcbiAgaWYgKCFsYXllcikgcmV0dXJuO1xuICBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSB9KTtcbn1cblxuZnVuY3Rpb24gcGVyc2lzdExheWVyVGhyb3R0bGVkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKHRyYW5zaWVudFRpbWVycy5oYXMoaWQpKSByZXR1cm47XG4gIHRyYW5zaWVudFRpbWVycy5zZXQoXG4gICAgaWQsXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gICAgICBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIH0sIFRSQU5TSUVOVF9QRVJTSVNUX01TKVxuICApO1xufVxuXG4vKiogSGlnaC1mcmVxdWVuY3kgZ2VzdHVyZSB1cGRhdGVzOiBsb2NhbCBhcHBseSArIHRocm90dGxlZCBwZXJzaXN0LCBubyBoaXN0b3J5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHJhbnNpZW50KHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXMpO1xuICBmb3IgKGNvbnN0IGlkIG9mIHBhdGNoZXMua2V5cygpKSBwZXJzaXN0TGF5ZXJUaHJvdHRsZWQoaWQpO1xufVxuXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UgPSB7IGlkOiBzdHJpbmc7IGJlZm9yZTogVHJhbnNmb3JtUGF0Y2g7IGFmdGVyOiBUcmFuc2Zvcm1QYXRjaCB9O1xuXG5mdW5jdGlvbiBhcHBseUFuZFBlcnNpc3QoZW50cmllczogQXJyYXk8eyBpZDogc3RyaW5nOyBwYXRjaDogVHJhbnNmb3JtUGF0Y2ggfT4pOiB2b2lkIHtcbiAgcGF0Y2hEb2NMYXllcnMobmV3IE1hcChlbnRyaWVzLm1hcCgoZSkgPT4gW2UuaWQsIGUucGF0Y2hdKSkpO1xuICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBlbnRyaWVzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG4vKiogRmluYWxpemUgYW4gZWRpdDogYXBwbHkgdGhlIGVuZCBzdGF0ZSwgcGVyc2lzdCBub3csIGFuZCByZWNvcmQgaGlzdG9yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRUcmFuc2Zvcm1zKGxhYmVsOiBzdHJpbmcsIGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdKTogdm9pZCB7XG4gIGNvbnN0IHJlYWwgPSBjaGFuZ2VzLmZpbHRlcigoYykgPT4gIXNoYWxsb3dFcXVhbFBhdGNoKGMuYmVmb3JlLCBjLmFmdGVyKSk7XG4gIGlmIChyZWFsLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgYWN0dWFsbHkgY2hhbmdlZCAoZS5nLiBhIGNsaWNrIHdpdGhvdXQgYSBkcmFnKTsgc3RpbGwgZmx1c2ggYW55XG4gICAgLy8gdGhyb3R0bGVkIHRyYW5zaWVudCB3cml0ZXMgc28gbG9jYWwgYW5kIHNlcnZlciBzdGF0ZSBtYXRjaC5cbiAgICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBjaGFuZ2VzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBhcHBseUFuZFBlcnNpc3QocmVhbC5tYXAoKGMpID0+ICh7IGlkOiBjLmlkLCBwYXRjaDogYy5hZnRlciB9KSkpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWwsXG4gICAgdW5kbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYmVmb3JlIH0pKSksXG4gICAgcmVkbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYWZ0ZXIgfSkpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsUGF0Y2goYTogVHJhbnNmb3JtUGF0Y2gsIGI6IFRyYW5zZm9ybVBhdGNoKTogYm9vbGVhbiB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhhKSwgLi4uT2JqZWN0LmtleXMoYildIGFzIEFycmF5PGtleW9mIExheWVyVHJhbnNmb3JtPik7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoIU9iamVjdC5pcyhhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51ZGdlU2VsZWN0aW9uKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBjaGFuZ2VzOiBUcmFuc2Zvcm1DaGFuZ2VbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBiZWZvcmU6IHsgeDogbGF5ZXIueCwgeTogbGF5ZXIueSB9LFxuICAgICAgICBhZnRlcjogeyB4OiBsYXllci54ICsgZHgsIHk6IGxheWVyLnkgKyBkeSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29tbWl0VHJhbnNmb3JtcyhcIk51ZGdlXCIsIGNoYW5nZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29tbWl0VHJhbnNmb3JtcyhsYXllci52aXNpYmxlID8gXCJIaWRlIGxheWVyXCIgOiBcIlNob3cgbGF5ZXJcIiwgW1xuICAgIHsgaWQsIGJlZm9yZTogeyB2aXNpYmxlOiBsYXllci52aXNpYmxlIH0sIGFmdGVyOiB7IHZpc2libGU6ICFsYXllci52aXNpYmxlIH0gfVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBTZWxlY3Rpb25Ib3Jpem9udGFsKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb21taXRUcmFuc2Zvcm1zKFwiRmxpcCBob3Jpem9udGFsXCIsIGRvYy5sYXllcnNcbiAgICAuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSlcbiAgICAubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCBiZWZvcmU6IHsgZmxpcFg6IGxheWVyLmZsaXBYIH0sIGFmdGVyOiB7IGZsaXBYOiAhbGF5ZXIuZmxpcFggfSB9KSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQmxlbmRNb2RlKGJsZW5kTW9kZTogQmxlbmRNb2RlKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbW1pdFRyYW5zZm9ybXMoXCJCbGVuZCBtb2RlXCIsIGRvYy5sYXllcnNcbiAgICAuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSlcbiAgICAubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCBiZWZvcmU6IHsgYmxlbmRNb2RlOiBsYXllci5ibGVuZE1vZGUgfSwgYWZ0ZXI6IHsgYmxlbmRNb2RlIH0gfSkpKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdHJ1Y3R1cmFsIGVkaXRzIChhZGQgLyBkZWxldGUgLyBkdXBsaWNhdGUgLyByZW9yZGVyKVxuXG50eXBlIFBsYWNlZExheWVyID0geyBsYXllcjogTGF5ZXI7IGluZGV4OiBudW1iZXIgfTtcblxuLyoqIEluc2VydCBsYXllcnMgYW5kIGVucXVldWUgdGhlaXIgY3JlYXRpb24uIE5vIGhpc3RvcnkgXHUyMDE0IGNhbGxlcnMgcmVjb3JkIGl0LiAqL1xuZnVuY3Rpb24gcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zOiBQbGFjZWRMYXllcltdKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgY29uc3QgbGF5ZXJzID0gWy4uLmRvYy5sYXllcnNdO1xuICBmb3IgKGNvbnN0IHsgbGF5ZXIsIGluZGV4IH0gb2Ygc29ydGVkKSB7XG4gICAgbGF5ZXJzLnNwbGljZShNYXRoLm1pbihpbmRleCwgbGF5ZXJzLmxlbmd0aCksIDAsIGxheWVyKTtcbiAgfVxuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVycyB9KSk7XG5cbiAgbGV0IG5lZWRzT3JkZXIgPSBmYWxzZTtcbiAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkge1xuICAgIGVucXVldWUoe1xuICAgICAga2luZDogXCJhZGRMYXllclwiLFxuICAgICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgICAvLyBGcmVzaCBrZXkgcGVyIGF0dGVtcHQ6IGEgcmVkbyBvZiB0aGUgc2FtZSBsYXllciBpcyBhIG5ldyBpbnNlcnQuXG4gICAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgICBhc3NldDogeyByZWY6IGxheWVyLmFzc2V0SWQgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCA8IGxheWVycy5sZW5ndGggLSAxKSBuZWVkc09yZGVyID0gdHJ1ZTtcbiAgfVxuICAvLyBUaGUgc2VydmVyIGFwcGVuZHMgbmV3IGxheWVyczsgcmVzdG9yZSBtaWQtc3RhY2sgcG9zaXRpb25zIGV4cGxpY2l0bHkuXG4gIGlmIChuZWVkc09yZGVyKSB7XG4gICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogbGF5ZXJzLm1hcCgobCkgPT4gbC5pZCkgfSk7XG4gIH1cbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZnVuY3Rpb24gcmF3RGVsZXRlTGF5ZXJzKGlkczogc3RyaW5nW10pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbnN0IHJlbW92ZWQgPSBuZXcgU2V0KGlkcyk7XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBkLmxheWVycy5maWx0ZXIoKGwpID0+ICFyZW1vdmVkLmhhcyhsLmlkKSkgfSkpO1xuICBwcnVuZVNlbGVjdGlvbihyZW1vdmVkKTtcbiAgZm9yIChjb25zdCBpZCBvZiBpZHMpIGVucXVldWUoeyBraW5kOiBcImRlbGV0ZUxheWVyXCIsIGlkIH0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlUGxhY2VtZW50KGRvYzogUHJvamVjdERvYywgaWRzOiBzdHJpbmdbXSk6IFBsYWNlZExheWVyW10ge1xuICBjb25zdCBpdGVtczogUGxhY2VkTGF5ZXJbXSA9IFtdO1xuICBkb2MubGF5ZXJzLmZvckVhY2goKGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChpZHMuaW5jbHVkZXMobGF5ZXIuaWQpKSBpdGVtcy5wdXNoKHsgbGF5ZXIsIGluZGV4IH0pO1xuICB9KTtcbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYyB8fCBzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gY2FwdHVyZVBsYWNlbWVudChkb2MsIHNlbGVjdGlvbik7XG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpKSA9PiBpLmxheWVyLmlkKTtcbiAgcmF3RGVsZXRlTGF5ZXJzKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJEZWxldGUgbGF5ZXJcIixcbiAgICB1bmRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICAgICAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gICAgfSxcbiAgICByZWRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBzb3VyY2UgPSBjYXB0dXJlUGxhY2VtZW50KGRvYywgc2VsZWN0aW9uKTtcbiAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBzb3VyY2UubWFwKCh7IGxheWVyIH0sIGkpID0+ICh7XG4gICAgbGF5ZXI6IHtcbiAgICAgIC4uLmxheWVyLFxuICAgICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksXG4gICAgICBuYW1lOiBgJHtsYXllci5uYW1lfSBjb3B5YCxcbiAgICAgIHg6IGxheWVyLnggKyAyMCxcbiAgICAgIHk6IGxheWVyLnkgKyAyMFxuICAgIH0sXG4gICAgLy8gUGxhY2UgZHVwbGljYXRlcyB0b2dldGhlciBhYm92ZSB0aGUgdG9wbW9zdCBzb3VyY2UgbGF5ZXIuXG4gICAgaW5kZXg6IHNvdXJjZVtzb3VyY2UubGVuZ3RoIC0gMV0uaW5kZXggKyAxICsgaVxuICB9KSk7XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiRHVwbGljYXRlXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcyksXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCBjbGlwYm9hcmQ6IExheWVyW10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlTZWxlY3Rpb24oKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNsaXBib2FyZCA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSkubWFwKChsYXllcikgPT4gKHsgLi4ubGF5ZXIgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3V0U2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb3B5U2VsZWN0aW9uKCk7XG4gIGRlbGV0ZVNlbGVjdGlvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzdGVDbGlwYm9hcmQoKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBjbGlwYm9hcmQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gY2xpcGJvYXJkLm1hcCgobGF5ZXIsIGkpID0+ICh7XG4gICAgbGF5ZXI6IHsgLi4ubGF5ZXIsIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLCBuYW1lOiBgJHtsYXllci5uYW1lfSBjb3B5YCwgeDogbGF5ZXIueCArIDIwLCB5OiBsYXllci55ICsgMjAgfSxcbiAgICBpbmRleDogZG9jLmxheWVycy5sZW5ndGggKyBpXG4gIH0pKTtcbiAgY2xpcGJvYXJkID0gaXRlbXMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLmxheWVyIH0pKTtcbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmxheWVyLmlkKTtcbiAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJQYXN0ZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIHJlZG86ICgpID0+IHsgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTsgc2V0U2VsZWN0aW9uKGlkcyk7IH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbWFnZUxheWVycyhpbWFnZXM6IEltcG9ydGVkSW1hZ2VbXSwgYXQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jIHx8IGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4ge1xuICAgIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICAgIHNlZWRBc3NldChhc3NldElkLCB7XG4gICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodFxuICAgIH0pO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgKGRvYy53aWR0aCAqIDAuOSkgLyBpbWFnZS53aWR0aCwgKGRvYy5oZWlnaHQgKiAwLjkpIC8gaW1hZ2UuaGVpZ2h0KTtcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgoMSwgaW1hZ2Uud2lkdGggKiBzY2FsZSk7XG4gICAgY29uc3QgaCA9IE1hdGgubWF4KDEsIGltYWdlLmhlaWdodCAqIHNjYWxlKTtcbiAgICBjb25zdCBjeCA9IChhdD8ueCA/PyBkb2Mud2lkdGggLyAyKSArIGkgKiAyNDtcbiAgICBjb25zdCBjeSA9IChhdD8ueSA/PyBkb2MuaGVpZ2h0IC8gMikgKyBpICogMjQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheWVyOiB7XG4gICAgICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgICAgICBhc3NldElkLFxuICAgICAgICBuYW1lOiBpbWFnZS5uYW1lLFxuICAgICAgICB4OiBjeCAtIHcgLyAyLFxuICAgICAgICB5OiBjeSAtIGggLyAyLFxuICAgICAgICB3LFxuICAgICAgICBoLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgZmxpcFg6IGZhbHNlLFxuICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgICAgIH0sXG4gICAgICBpbmRleDogZG9jLmxheWVycy5sZW5ndGggKyBpXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gTmV3IGFzc2V0cyByaWRlIGFsb25nIG9uIHRoZSBhZGRMYXllciBvcCBpdHNlbGYuXG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIGNvbnN0IGluc2VydCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5kb2M7XG4gICAgaWYgKCFjdXJyZW50KSByZXR1cm47XG4gICAgY29uc3Qgc29ydGVkID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gICAgY29uc3QgbGF5ZXJzID0gWy4uLmN1cnJlbnQubGF5ZXJzXTtcbiAgICBmb3IgKGNvbnN0IHsgbGF5ZXIsIGluZGV4IH0gb2Ygc29ydGVkKSBsYXllcnMuc3BsaWNlKE1hdGgubWluKGluZGV4LCBsYXllcnMubGVuZ3RoKSwgMCwgbGF5ZXIpO1xuICAgIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzIH0pKTtcbiAgICBmb3IgKGNvbnN0IHsgbGF5ZXIgfSBvZiBzb3J0ZWQpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzW2l0ZW1zLmZpbmRJbmRleCgoaXQpID0+IGl0LmxheWVyLmlkID09PSBsYXllci5pZCldO1xuICAgICAgZW5xdWV1ZSh7XG4gICAgICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICAgICAgcHJvamVjdElkOiBjdXJyZW50LmlkLFxuICAgICAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgICAgIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgICAgIGFzc2V0OiB7IGNsaWVudElkOiBsYXllci5hc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgfTtcbiAgaW5zZXJ0KCk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQWRkIGltYWdlXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcyksXG4gICAgLy8gUmVkbyByZS1pbnNlcnRzIGJ5IGFzc2V0IHJlZmVyZW5jZTogdGhlIGFzc2V0IGFscmVhZHkgZXhpc3RzIGJ5IHRoZW4uXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbnR5cGUgUmFzdGVyQm91bmRzID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcblxuZnVuY3Rpb24gcmVwbGFjZUxheWVyc1dpdGhSYXN0ZXIoaWRzOiBzdHJpbmdbXSwgaW1hZ2U6IEltcG9ydGVkSW1hZ2UsIGJvdW5kczogUmFzdGVyQm91bmRzLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCBvbGRJdGVtcyA9IGNhcHR1cmVQbGFjZW1lbnQoZG9jLCBpZHMpO1xuICBpZiAob2xkSXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksIGFzc2V0SWQsIG5hbWU6IGltYWdlLm5hbWUsXG4gICAgLi4uYm91bmRzLCByb3RhdGlvbjogMCwgb3BhY2l0eTogMSwgdmlzaWJsZTogdHJ1ZSwgZmxpcFg6IGZhbHNlLCBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgfTtcbiAgY29uc3QgbmV3SXRlbSA9IHsgbGF5ZXIsIGluZGV4IH07XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuXG4gIHJhd0RlbGV0ZUxheWVycyhpZHMpO1xuICB1cGRhdGVEb2MoKGQpID0+IHtcbiAgICBjb25zdCBsYXllcnMgPSBbLi4uZC5sYXllcnNdO1xuICAgIGxheWVycy5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIGxheWVycy5sZW5ndGgpLCAwLCBsYXllcik7XG4gICAgcmV0dXJuIHsgLi4uZCwgbGF5ZXJzIH07XG4gIH0pO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBjbGllbnRJZDogbGF5ZXIuaWQsIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5tYXAoKGwpID0+IGwuaWQpID8/IFtdIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG5cbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBpbWFnZS5uYW1lLFxuICAgIHVuZG86ICgpID0+IHsgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pOyByYXdJbnNlcnRMYXllcnMob2xkSXRlbXMpOyBzZXRTZWxlY3Rpb24oaWRzKTsgfSxcbiAgICByZWRvOiAoKSA9PiB7IHJhd0RlbGV0ZUxheWVycyhpZHMpOyByYXdJbnNlcnRMYXllcnMoW25ld0l0ZW1dKTsgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pOyB9XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tYmluZVNlbGVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3QgbGF5ZXJzID0gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpICYmIGxheWVyLnZpc2libGUpO1xuICBpZiAobGF5ZXJzLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgY29uc3QgYm94ZXMgPSBsYXllcnMubWFwKGxheWVyQWFiYik7XG4gIGNvbnN0IHggPSBNYXRoLm1pbiguLi5ib3hlcy5tYXAoKGIpID0+IGIueCkpO1xuICBjb25zdCB5ID0gTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLnkpKTtcbiAgY29uc3QgcmlnaHQgPSBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueCArIGIudykpO1xuICBjb25zdCBib3R0b20gPSBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueSArIGIuaCkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChyaWdodCAtIHgpKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGJvdHRvbSAtIHkpKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTsgY2FudmFzLndpZHRoID0gd2lkdGg7IGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7IGlmICghY3R4KSByZXR1cm47XG4gIGxldCBpbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgdHJ5IHtcbiAgICBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChsYXllcnMubWFwKChsKSA9PiBsb2FkSW1hZ2UobC5hc3NldElkKSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQ291bGQgbm90IGxvYWQgaW1hZ2UgcGl4ZWxzXCI7XG4gICAgd2luZG93LmFsZXJ0KGBDb3VsZCBub3QgY29tYmluZSBsYXllcnM6ICR7bWVzc2FnZX1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgY29uc3QgaW1nID0gaW1hZ2VzW2ldO1xuICAgIGN0eC5zYXZlKCk7IGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyLm9wYWNpdHk7IGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsYXllci5ibGVuZE1vZGUgYXMgR2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uO1xuICAgIGN0eC50cmFuc2xhdGUobGF5ZXIueCArIGxheWVyLncgLyAyIC0geCwgbGF5ZXIueSArIGxheWVyLmggLyAyIC0geSk7XG4gICAgY3R4LnJvdGF0ZShsYXllci5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApOyBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtbGF5ZXIudyAvIDIsIC1sYXllci5oIC8gMiwgbGF5ZXIudywgbGF5ZXIuaCk7IGN0eC5yZXN0b3JlKCk7XG4gIH0pO1xuICBjb25zdCBpbmRleCA9IE1hdGgubWluKC4uLmRvYy5sYXllcnMubWFwKChsLCBpKSA9PiBzZWxlY3Rpb24uaW5jbHVkZXMobC5pZCkgPyBpIDogSW5maW5pdHkpKTtcbiAgcmVwbGFjZUxheWVyc1dpdGhSYXN0ZXIobGF5ZXJzLm1hcCgobCkgPT4gbC5pZCksIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aCwgaGVpZ2h0LCBuYW1lOiBcIkNvbWJpbmVkIGxheWVyc1wiIH0sIHsgeCwgeSwgdzogd2lkdGgsIGg6IGhlaWdodCB9LCBpbmRleCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcm9wU2VsZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uLCBjcm9wUmVjdCB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCAhPT0gMSB8fCAhY3JvcFJlY3QgfHwgY3JvcFJlY3QudyA8IDIgfHwgY3JvcFJlY3QuaCA8IDIpIHJldHVybjtcbiAgY29uc3QgbGF5ZXIgPSBkb2MubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IHNlbGVjdGlvblswXSk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29uc3QgYm91bmRzID0gbGF5ZXJBYWJiKGxheWVyKTtcbiAgY29uc3QgeCA9IE1hdGgubWF4KGNyb3BSZWN0LngsIGJvdW5kcy54KTtcbiAgY29uc3QgeSA9IE1hdGgubWF4KGNyb3BSZWN0LnksIGJvdW5kcy55KTtcbiAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbihjcm9wUmVjdC54ICsgY3JvcFJlY3QudywgYm91bmRzLnggKyBib3VuZHMudyk7XG4gIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKGNyb3BSZWN0LnkgKyBjcm9wUmVjdC5oLCBib3VuZHMueSArIGJvdW5kcy5oKTtcbiAgaWYgKHJpZ2h0IC0geCA8IDIgfHwgYm90dG9tIC0geSA8IDIpIHtcbiAgICB3aW5kb3cuYWxlcnQoXCJEcmF3IHRoZSBjcm9wIGFyZWEgb3ZlciB0aGUgc2VsZWN0ZWQgbGF5ZXIuXCIpO1xuICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IG51bGwgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHJlY3QgPSB7IHgsIHksIHc6IHJpZ2h0IC0geCwgaDogYm90dG9tIC0geSB9O1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocmVjdC53KSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocmVjdC5oKSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7IGNhbnZhcy53aWR0aCA9IHdpZHRoOyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyBpZiAoIWN0eCkgcmV0dXJuO1xuICBsZXQgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB0cnkge1xuICAgIGltZyA9IGF3YWl0IGxvYWRJbWFnZShsYXllci5hc3NldElkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvdWxkIG5vdCBsb2FkIGltYWdlIHBpeGVsc1wiO1xuICAgIHdpbmRvdy5hbGVydChgQ291bGQgbm90IGNyb3AgbGF5ZXI6ICR7bWVzc2FnZX1gKTtcbiAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiBudWxsIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5O1xuICBjdHgudHJhbnNsYXRlKGxheWVyLnggKyBsYXllci53IC8gMiAtIHJlY3QueCwgbGF5ZXIueSArIGxheWVyLmggLyAyIC0gcmVjdC55KTtcbiAgY3R4LnJvdGF0ZShsYXllci5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApOyBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICBjdHguZHJhd0ltYWdlKGltZywgLWxheWVyLncgLyAyLCAtbGF5ZXIuaCAvIDIsIGxheWVyLncsIGxheWVyLmgpO1xuICBjb25zdCBpbmRleCA9IGRvYy5sYXllcnMuZmluZEluZGV4KChsKSA9PiBsLmlkID09PSBsYXllci5pZCk7XG4gIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKFtsYXllci5pZF0sIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aCwgaGVpZ2h0LCBuYW1lOiBgJHtsYXllci5uYW1lfSBjcm9wcGVkYCB9LCByZWN0LCBpbmRleCk7XG4gIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JvcENhbnZhcygpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIGNyb3BSZWN0IH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYyB8fCAhY3JvcFJlY3QgfHwgY3JvcFJlY3QudyA8IDIgfHwgY3JvcFJlY3QuaCA8IDIpIHJldHVybjtcbiAgY29uc3QgeCA9IE1hdGgucm91bmQoY3JvcFJlY3QueCk7XG4gIGNvbnN0IHkgPSBNYXRoLnJvdW5kKGNyb3BSZWN0LnkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgubWluKE1BWF9QUk9KRUNUX0RJTSwgTWF0aC5yb3VuZChjcm9wUmVjdC53KSkpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLm1pbihNQVhfUFJPSkVDVF9ESU0sIE1hdGgucm91bmQoY3JvcFJlY3QuaCkpKTtcbiAgY29uc3QgYmVmb3JlID0ge1xuICAgIHdpZHRoOiBkb2Mud2lkdGgsXG4gICAgaGVpZ2h0OiBkb2MuaGVpZ2h0LFxuICAgIHBvc2l0aW9uczogZG9jLmxheWVycy5tYXAoKGxheWVyKSA9PiAoeyBpZDogbGF5ZXIuaWQsIHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSkpXG4gIH07XG4gIGNvbnN0IGFmdGVyID0ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBwb3NpdGlvbnM6IGJlZm9yZS5wb3NpdGlvbnMubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCB4OiBsYXllci54IC0geCwgeTogbGF5ZXIueSAtIHkgfSkpXG4gIH07XG5cbiAgY29uc3QgYXBwbHkgPSAoc25hcHNob3Q6IHR5cGVvZiBiZWZvcmUpID0+IHtcbiAgICB1cGRhdGVEb2MoKGN1cnJlbnQpID0+ICh7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgd2lkdGg6IHNuYXBzaG90LndpZHRoLFxuICAgICAgaGVpZ2h0OiBzbmFwc2hvdC5oZWlnaHQsXG4gICAgICBsYXllcnM6IGN1cnJlbnQubGF5ZXJzLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzbmFwc2hvdC5wb3NpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXIuaWQpO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gPyB7IC4uLmxheWVyLCB4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IH0gOiBsYXllcjtcbiAgICAgIH0pXG4gICAgfSkpO1xuICAgIGVucXVldWUoeyBraW5kOiBcInJlc2l6ZVByb2plY3RcIiwgaWQ6IGRvYy5pZCwgd2lkdGg6IHNuYXBzaG90LndpZHRoLCBoZWlnaHQ6IHNuYXBzaG90LmhlaWdodCB9KTtcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIHNuYXBzaG90LnBvc2l0aW9ucykgcGVyc2lzdExheWVyTm93KHBvc2l0aW9uLmlkKTtcbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuXG4gIGFwcGx5KGFmdGVyKTtcbiAgc2V0U3RhdGUoeyB0b29sOiBcIm1vdmVcIiwgY3JvcFJlY3Q6IG51bGwgfSk7XG4gIHB1c2hIaXN0b3J5KHsgbGFiZWw6IFwiQ3JvcCBjYW52YXNcIiwgdW5kbzogKCkgPT4gYXBwbHkoYmVmb3JlKSwgcmVkbzogKCkgPT4gYXBwbHkoYWZ0ZXIpIH0pO1xufVxuXG4vKiogVGlueSB0cmFuc3BhcmVudCBQTkcgXHUyMDE0IGZ1bGwtY2FudmFzIGJsYW5rcyBleGNlZWQgaG9zdGVkIERCIHZhbHVlIGxpbWl0cy4gKi9cbmNvbnN0IEVNUFRZX1BORyA9XG4gIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQURVbEVRVlI0Mm1QOHo4QlFEd0FFaFFHQWhLbU1JUUFBQUFCSlJVNUVya0pnZ2c9PVwiO1xuXG5mdW5jdGlvbiBibGFua0xheWVyQXNzZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgcmV0dXJuIHsgc3JjOiBFTVBUWV9QTkcsIHdpZHRoOiBNYXRoLm1heCgxLCB3aWR0aCksIGhlaWdodDogTWF0aC5tYXgoMSwgaGVpZ2h0KSB9O1xufVxuXG5mdW5jdGlvbiBhcHBseUxheWVyUmFzdGVyKFxuICBsYXllcklkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgY2xlYXJUZXh0OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYywgcGFpbnRTcmM6IHNyYywgd2lkdGgsIGhlaWdodCB9KTtcbiAgdXBkYXRlRG9jKChkb2MpID0+ICh7XG4gICAgLi4uZG9jLFxuICAgIGxheWVyczogZG9jLmxheWVycy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmlkICE9PSBsYXllcklkKSByZXR1cm4gaXRlbTtcbiAgICAgIGlmICghY2xlYXJUZXh0KSByZXR1cm4geyAuLi5pdGVtLCBhc3NldElkIH07XG4gICAgICBjb25zdCB7IHRleHQ6IF90ZXh0LCAuLi5yZXN0IH0gPSBpdGVtO1xuICAgICAgcmV0dXJuIHsgLi4ucmVzdCwgYXNzZXRJZCB9O1xuICAgIH0pXG4gIH0pKTtcbiAgY29uc3QgdXBkYXRlZCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICh1cGRhdGVkKSBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZDogbGF5ZXJJZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKHVwZGF0ZWQpIH0pO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZXBsYWNlTGF5ZXJBc3NldFwiLCBpZDogbGF5ZXJJZCwgY2xpZW50QXNzZXRJZDogYXNzZXRJZCwgc3JjLCB3aWR0aCwgaGVpZ2h0IH0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG4vKiogVHJhbnNwYXJlbnQgZG9jdW1lbnQtc2l6ZWQgbGF5ZXIgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2suICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxhbmtMYXllcigpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgaW1hZ2UgPSBibGFua0xheWVyQXNzZXQoZG9jLndpZHRoLCBkb2MuaGVpZ2h0KTtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksXG4gICAgYXNzZXRJZCxcbiAgICBuYW1lOiBgTGF5ZXIgJHtkb2MubGF5ZXJzLmxlbmd0aCArIDF9YCxcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgdzogZG9jLndpZHRoLFxuICAgIGg6IGRvYy5oZWlnaHQsXG4gICAgcm90YXRpb246IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgfTtcbiAgY29uc3QgaW5kZXggPSBkb2MubGF5ZXJzLmxlbmd0aDtcbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnM6IFsuLi5kLmxheWVycywgbGF5ZXJdIH0pKTtcbiAgZW5xdWV1ZSh7XG4gICAga2luZDogXCJhZGRMYXllclwiLFxuICAgIHByb2plY3RJZDogZG9jLmlkLFxuICAgIGNsaWVudElkOiBsYXllci5pZCxcbiAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiTmV3IGxheWVyXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pLFxuICAgIHJlZG86ICgpID0+IHtcbiAgICAgIHJhd0luc2VydExheWVycyhbeyBsYXllciwgaW5kZXggfV0pO1xuICAgICAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsYXllci5pZDtcbn1cblxuLyoqIEVuc3VyZSBhIHBhaW50YWJsZSBsYXllciBleGlzdHM7IGNyZWF0ZXMgYSBibGFuayBvbmUgKG5vIGhpc3RvcnkpIHdoZW4gdGhlIGRvYyBpcyBlbXB0eS4gKi9cbmZ1bmN0aW9uIHBhaW50VGFyZ2V0TGF5ZXIoKTogeyBsYXllcjogTGF5ZXI7IGNyZWF0ZWQ6IGJvb2xlYW4gfSB8IG51bGwge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNlbGVjdGVkSWQgPSBzZWxlY3Rpb25bc2VsZWN0aW9uLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkSWQgPyBkb2MubGF5ZXJzLmZpbmQoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gc2VsZWN0ZWRJZCkgOiB1bmRlZmluZWQ7XG4gIGlmIChzZWxlY3RlZCkgcmV0dXJuIHsgbGF5ZXI6IHNlbGVjdGVkLCBjcmVhdGVkOiBmYWxzZSB9O1xuICBpZiAoZG9jLmxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdG9wID0gZG9jLmxheWVyc1tkb2MubGF5ZXJzLmxlbmd0aCAtIDFdO1xuICAgIHNldFNlbGVjdGlvbihbdG9wLmlkXSk7XG4gICAgcmV0dXJuIHsgbGF5ZXI6IHRvcCwgY3JlYXRlZDogZmFsc2UgfTtcbiAgfVxuXG4gIGNvbnN0IGltYWdlID0gYmxhbmtMYXllckFzc2V0KGRvYy53aWR0aCwgZG9jLmhlaWdodCk7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgIGFzc2V0SWQsXG4gICAgbmFtZTogXCJMYXllciAxXCIsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHc6IGRvYy53aWR0aCxcbiAgICBoOiBkb2MuaGVpZ2h0LFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBbLi4uZC5sYXllcnMsIGxheWVyXSB9KSk7XG4gIGVucXVldWUoe1xuICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICBwcm9qZWN0SWQ6IGRvYy5pZCxcbiAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgcmV0dXJuIHsgbGF5ZXIsIGNyZWF0ZWQ6IHRydWUgfTtcbn1cblxuZnVuY3Rpb24gbG9hZERhdGFVcmwoc3JjOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWNvZGUgaW1hZ2VcIikpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH0pO1xufVxuXG4vKiogQ29tcG9zaXRlIGEgZG9jdW1lbnQtc3BhY2UgYnJ1c2ggc3Ryb2tlIG9udG8gdGhlIGN1cnJlbnQgbGF5ZXIuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFpbnRCcnVzaFN0cm9rZShzcmM6IHN0cmluZywgb3BhY2l0eSA9IDEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdGFyZ2V0ID0gcGFpbnRUYXJnZXRMYXllcigpO1xuICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICBjb25zdCB7IGxheWVyLCBjcmVhdGVkIH0gPSB0YXJnZXQ7XG5cbiAgbGV0IGJhc2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIGxldCBzdHJva2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHRyeSB7XG4gICAgW2Jhc2UsIHN0cm9rZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbbG9hZEltYWdlKGxheWVyLmFzc2V0SWQpLCBsb2FkRGF0YVVybChzcmMpXSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJDb3VsZCBub3QgbG9hZCBsYXllciBwaXhlbHNcIjtcbiAgICB3aW5kb3cuYWxlcnQoYENvdWxkIG5vdCBwYWludDogJHttZXNzYWdlfWApO1xuICAgIGlmIChjcmVhdGVkKSByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGxheWVyLncpLCBiYXNlLm5hdHVyYWxXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQobGF5ZXIuaCksIGJhc2UubmF0dXJhbEhlaWdodCk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkge1xuICAgIGlmIChjcmVhdGVkKSByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4LmRyYXdJbWFnZShiYXNlLCAwLCAwKTtcbiAgY29uc3QgY2FjaGVkID0gZ2V0QXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgY29uc3QgYmVmb3JlU3JjID0gY2FjaGVkPy5wYWludFNyYz8uc3RhcnRzV2l0aChcImRhdGE6XCIpXG4gICAgPyBjYWNoZWQucGFpbnRTcmNcbiAgICA6IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gIGNvbnN0IGJlZm9yZVRleHQgPSBsYXllci50ZXh0ID8geyAuLi5sYXllci50ZXh0IH0gOiB1bmRlZmluZWQ7XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgY3R4LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICBjdHguc2NhbGUod2lkdGggLyBNYXRoLm1heCgxLCBsYXllci53KSwgaGVpZ2h0IC8gTWF0aC5tYXgoMSwgbGF5ZXIuaCkpO1xuICBpZiAobGF5ZXIuZmxpcFgpIGN0eC5zY2FsZSgtMSwgMSk7XG4gIGN0eC5yb3RhdGUoKC1sYXllci5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcbiAgY3R4LnRyYW5zbGF0ZSgtKGxheWVyLnggKyBsYXllci53IC8gMiksIC0obGF5ZXIueSArIGxheWVyLmggLyAyKSk7XG4gIGN0eC5kcmF3SW1hZ2Uoc3Ryb2tlLCAwLCAwKTtcbiAgY3R4LnJlc3RvcmUoKTtcblxuICBjb25zdCBhZnRlclNyYyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gIGNvbnN0IGNsZWFyVGV4dCA9IEJvb2xlYW4obGF5ZXIudGV4dCk7XG4gIC8vIERlY29kZSBiZWZvcmUgc3dhcHBpbmcgc28gdGhlIGxheWVyIDxpbWc+IGNhbiBwYWludCBpbW1lZGlhdGVseS4gVGhlIGxpdmVcbiAgLy8gb3ZlcmxheSBzdGF5cyB1cCB1bnRpbCBMYXllclZpZXcgcHJlc2VudHMgdGhpcyBleGFjdCBzcmMuXG4gIGF3YWl0IGRlY29kZVNyYyhhZnRlclNyYyk7XG4gIGFybUJydXNoT3ZlcmxheUNsZWFyKGFmdGVyU3JjKTtcbiAgYXBwbHlMYXllclJhc3RlcihsYXllci5pZCwgYWZ0ZXJTcmMsIHdpZHRoLCBoZWlnaHQsIGNsZWFyVGV4dCk7XG4gIC8vIEZhbGxiYWNrIGlmIHRoZSBsYXllciBpc24ndCB2aXNpYmxlIC8gZmFpbHMgdG8gbW91bnQgYW4gPGltZz4uXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNsZWFyQnJ1c2hPdmVybGF5Tm93KCksIDIwMDApO1xuXG4gIGlmIChjcmVhdGVkKSB7XG4gICAgY29uc3QgZmluYWxMYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXIuaWQpO1xuICAgIGlmICghZmluYWxMYXllcikgcmV0dXJuO1xuICAgIHB1c2hIaXN0b3J5KHtcbiAgICAgIGxhYmVsOiBcIkJydXNoIHN0cm9rZVwiLFxuICAgICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pLFxuICAgICAgcmVkbzogKCkgPT4ge1xuICAgICAgICByYXdJbnNlcnRMYXllcnMoW3sgbGF5ZXI6IGZpbmFsTGF5ZXIsIGluZGV4OiAwIH1dKTtcbiAgICAgICAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJCcnVzaCBzdHJva2VcIixcbiAgICB1bmRvOiAoKSA9PiB7XG4gICAgICBhcHBseUxheWVyUmFzdGVyKGxheWVyLmlkLCBiZWZvcmVTcmMsIHdpZHRoLCBoZWlnaHQsIGZhbHNlKTtcbiAgICAgIGlmIChiZWZvcmVUZXh0KSB7XG4gICAgICAgIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgICAgICAgIC4uLmRvYyxcbiAgICAgICAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChpdGVtKSA9PiAoaXRlbS5pZCA9PT0gbGF5ZXIuaWQgPyB7IC4uLml0ZW0sIHRleHQ6IGJlZm9yZVRleHQgfSA6IGl0ZW0pKVxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVyLmlkKTtcbiAgICAgICAgaWYgKHVwZGF0ZWQpIGVucXVldWUoeyBraW5kOiBcInVwZGF0ZUxheWVyXCIsIGlkOiBsYXllci5pZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKHVwZGF0ZWQpIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVkbzogKCkgPT4gYXBwbHlMYXllclJhc3RlcihsYXllci5pZCwgYWZ0ZXJTcmMsIHdpZHRoLCBoZWlnaHQsIGNsZWFyVGV4dClcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRleHRSYXN0ZXIodGV4dDogVGV4dExheWVyRGF0YSk6IHsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICBjb25zdCBsaW5lcyA9ICh0ZXh0LmNvbnRlbnQgfHwgXCJUZXh0XCIpLnJlcGxhY2UoL1xcci9nLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgbWVhc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIW1lYXN1cmUpIHJldHVybiB7IHNyYzogXCJcIiwgd2lkdGg6IDEsIGhlaWdodDogMSB9O1xuICBtZWFzdXJlLmZvbnQgPSBgJHt0ZXh0LmZvbnRXZWlnaHR9ICR7dGV4dC5mb250U2l6ZX1weCAke3RleHQuZm9udEZhbWlseX1gO1xuICBjb25zdCBwYWRkaW5nID0gTWF0aC5tYXgoNCwgTWF0aC5jZWlsKHRleHQuZm9udFNpemUgKiAwLjE0KSk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKE1hdGgubWF4KC4uLmxpbmVzLm1hcCgobGluZSkgPT4gbWVhc3VyZS5tZWFzdXJlVGV4dChsaW5lIHx8IFwiIFwiKS53aWR0aCkpICsgcGFkZGluZyAqIDIpKTtcbiAgY29uc3QgbGluZVB4ID0gdGV4dC5mb250U2l6ZSAqIHRleHQubGluZUhlaWdodDtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGxpbmVzLmxlbmd0aCAqIGxpbmVQeCArIHBhZGRpbmcgKiAyKSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuIHsgc3JjOiBcIlwiLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gIGN0eC5mb250ID0gYCR7dGV4dC5mb250V2VpZ2h0fSAke3RleHQuZm9udFNpemV9cHggJHt0ZXh0LmZvbnRGYW1pbHl9YDtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gIGN0eC50ZXh0QWxpZ24gPSB0ZXh0LmFsaWduO1xuICBjdHguZmlsbFN0eWxlID0gdGV4dC5jb2xvcjtcbiAgY29uc3QgeCA9IHRleHQuYWxpZ24gPT09IFwibGVmdFwiID8gcGFkZGluZyA6IHRleHQuYWxpZ24gPT09IFwiY2VudGVyXCIgPyB3aWR0aCAvIDIgOiB3aWR0aCAtIHBhZGRpbmc7XG4gIGxpbmVzLmZvckVhY2goKGxpbmUsIGluZGV4KSA9PiBjdHguZmlsbFRleHQobGluZSB8fCBcIiBcIiwgeCwgcGFkZGluZyArIGluZGV4ICogbGluZVB4KSk7XG4gIHJldHVybiB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGgsIGhlaWdodCB9O1xufVxuXG5mdW5jdGlvbiBjdXJyZW50VGV4dERlZmF1bHRzKCk6IFRleHRMYXllckRhdGEge1xuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogXCJUZXh0XCIsXG4gICAgZm9udEZhbWlseTogc3RhdGUudGV4dEZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHN0YXRlLnRleHRGb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiBzdGF0ZS50ZXh0Rm9udFdlaWdodCxcbiAgICBhbGlnbjogc3RhdGUudGV4dEFsaWduLFxuICAgIGNvbG9yOiBzdGF0ZS5mb3JlZ3JvdW5kQ29sb3IsXG4gICAgbGluZUhlaWdodDogc3RhdGUudGV4dExpbmVIZWlnaHRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRleHRMYXllcihhdDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHRleHQgPSBjdXJyZW50VGV4dERlZmF1bHRzKCk7XG4gIGNvbnN0IGltYWdlID0gcmVuZGVyVGV4dFJhc3Rlcih0ZXh0KTtcbiAgaWYgKCFpbWFnZS5zcmMpIHJldHVybiBudWxsO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjOiBpbWFnZS5zcmMsIHBhaW50U3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIGNvbnN0IGxheWVyOiBMYXllciA9IHtcbiAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSwgYXNzZXRJZCwgbmFtZTogXCJUZXh0XCIsIHRleHQ6IHsgLi4udGV4dCwgcmFzdGVyV2lkdGg6IGltYWdlLndpZHRoLCByYXN0ZXJIZWlnaHQ6IGltYWdlLmhlaWdodCB9LFxuICAgIHg6IGF0LngsIHk6IGF0LnksIHc6IGltYWdlLndpZHRoLCBoOiBpbWFnZS5oZWlnaHQsXG4gICAgcm90YXRpb246IDAsIG9wYWNpdHk6IDEsIHZpc2libGU6IHRydWUsIGZsaXBYOiBmYWxzZSwgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBbLi4uZC5sYXllcnMsIGxheWVyXSB9KSk7XG4gIGVucXVldWUoe1xuICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGNsaWVudElkOiBsYXllci5pZCwgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICBuYW1lOiBsYXllci5uYW1lLCBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgIGFzc2V0OiB7IGNsaWVudElkOiBhc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJBZGQgdGV4dFwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKSxcbiAgICByZWRvOiAoKSA9PiB7IHJhd0luc2VydExheWVycyhbeyBsYXllciwgaW5kZXg6IGRvYy5sYXllcnMubGVuZ3RoIH1dKTsgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pOyB9XG4gIH0pO1xuICByZXR1cm4gbGF5ZXIuaWQ7XG59XG5cbmZ1bmN0aW9uIGFwcGx5VGV4dChsYXllcklkOiBzdHJpbmcsIHRleHQ6IFRleHRMYXllckRhdGEpOiB2b2lkIHtcbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAoIWxheWVyKSByZXR1cm47XG4gIGNvbnN0IGltYWdlID0gcmVuZGVyVGV4dFJhc3Rlcih0ZXh0KTtcbiAgaWYgKCFpbWFnZS5zcmMpIHJldHVybjtcbiAgY29uc3QgY2FjaGVkQXNzZXQgPSBnZXRBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICBjb25zdCBvbGRSYXN0ZXJXaWR0aCA9IGxheWVyLnRleHQ/LnJhc3RlcldpZHRoID8/IGNhY2hlZEFzc2V0Py53aWR0aCA/PyBsYXllci53O1xuICBjb25zdCBvbGRSYXN0ZXJIZWlnaHQgPSBsYXllci50ZXh0Py5yYXN0ZXJIZWlnaHQgPz8gY2FjaGVkQXNzZXQ/LmhlaWdodCA/PyBsYXllci5oO1xuICBjb25zdCBzY2FsZVggPSBvbGRSYXN0ZXJXaWR0aCA+IDAgPyBsYXllci53IC8gb2xkUmFzdGVyV2lkdGggOiAxO1xuICBjb25zdCBzY2FsZVkgPSBvbGRSYXN0ZXJIZWlnaHQgPiAwID8gbGF5ZXIuaCAvIG9sZFJhc3RlckhlaWdodCA6IDE7XG4gIGNvbnN0IHJlbmRlcmVkVGV4dCA9IHsgLi4udGV4dCwgcmFzdGVyV2lkdGg6IGltYWdlLndpZHRoLCByYXN0ZXJIZWlnaHQ6IGltYWdlLmhlaWdodCB9O1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjOiBpbWFnZS5zcmMsIHBhaW50U3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkXG4gICAgICA/IHsgLi4uaXRlbSwgYXNzZXRJZCwgdGV4dDogcmVuZGVyZWRUZXh0LCB3OiBpbWFnZS53aWR0aCAqIHNjYWxlWCwgaDogaW1hZ2UuaGVpZ2h0ICogc2NhbGVZIH1cbiAgICAgIDogaXRlbSlcbiAgfSkpO1xuICBjb25zdCB1cGRhdGVkID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKHVwZGF0ZWQpIGVucXVldWUoeyBraW5kOiBcInVwZGF0ZUxheWVyXCIsIGlkOiBsYXllcklkLCBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0odXBkYXRlZCkgfSk7XG4gIGVucXVldWUoeyBraW5kOiBcInJlcGxhY2VMYXllckFzc2V0XCIsIGlkOiBsYXllcklkLCBjbGllbnRBc3NldElkOiBhc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRleHRMYXllcihsYXllcklkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPFRleHRMYXllckRhdGE+LCBsYWJlbCA9IFwiRWRpdCB0ZXh0XCIpOiB2b2lkIHtcbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAoIWxheWVyPy50ZXh0KSByZXR1cm47XG4gIGNvbnN0IGJlZm9yZSA9IHsgLi4ubGF5ZXIudGV4dCB9O1xuICBjb25zdCBhZnRlciA9IHsgLi4uYmVmb3JlLCAuLi5wYXRjaCB9O1xuICBpZiAoSlNPTi5zdHJpbmdpZnkoYmVmb3JlKSA9PT0gSlNPTi5zdHJpbmdpZnkoYWZ0ZXIpKSByZXR1cm47XG4gIGFwcGx5VGV4dChsYXllcklkLCBhZnRlcik7XG4gIHB1c2hIaXN0b3J5KHsgbGFiZWwsIHVuZG86ICgpID0+IGFwcGx5VGV4dChsYXllcklkLCBiZWZvcmUpLCByZWRvOiAoKSA9PiBhcHBseVRleHQobGF5ZXJJZCwgYWZ0ZXIpIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVnaW5UZXh0RWRpdGluZyhsYXllcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAoIWxheWVyPy50ZXh0KSByZXR1cm47XG4gIHNldFNlbGVjdGlvbihbbGF5ZXJJZF0pO1xuICBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiB7IGlkOiBsYXllcklkLCBkcmFmdDogbGF5ZXIudGV4dC5jb250ZW50IH0gfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5pc2hUZXh0RWRpdGluZygpOiB2b2lkIHtcbiAgY29uc3QgZWRpdGluZyA9IGdldFN0YXRlKCkudGV4dEVkaXRpbmc7XG4gIGlmICghZWRpdGluZykgcmV0dXJuO1xuICBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiBudWxsIH0pO1xuICB1cGRhdGVUZXh0TGF5ZXIoZWRpdGluZy5pZCwgeyBjb250ZW50OiBlZGl0aW5nLmRyYWZ0IH0sIFwiRWRpdCB0ZXh0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jIHx8IGZyb21JbmRleCA9PT0gdG9JbmRleCkgcmV0dXJuO1xuICBjb25zdCBiZWZvcmUgPSBkb2MubGF5ZXJzLm1hcCgobCkgPT4gbC5pZCk7XG4gIGNvbnN0IG9yZGVyID0gWy4uLmJlZm9yZV07XG4gIGNvbnN0IFttb3ZlZF0gPSBvcmRlci5zcGxpY2UoZnJvbUluZGV4LCAxKTtcbiAgaWYgKG1vdmVkID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgb3JkZXIuc3BsaWNlKHRvSW5kZXgsIDAsIG1vdmVkKTtcblxuICBjb25zdCBhcHBseU9yZGVyID0gKGlkczogc3RyaW5nW10pID0+IHtcbiAgICB1cGRhdGVEb2MoKGQpID0+IHtcbiAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGQubGF5ZXJzLm1hcCgobCkgPT4gW2wuaWQsIGxdKSk7XG4gICAgICBjb25zdCBsYXllcnM6IExheWVyW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gYnlJZC5nZXQoaWQpO1xuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICBsYXllcnMucHVzaChsYXllcik7XG4gICAgICAgICAgYnlJZC5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsYXllcnMucHVzaCguLi5ieUlkLnZhbHVlcygpKTtcbiAgICAgIHJldHVybiB7IC4uLmQsIGxheWVycyB9O1xuICAgIH0pO1xuICAgIGVucXVldWUoeyBraW5kOiBcInNldE9yZGVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBpZHM6IFsuLi5pZHNdIH0pO1xuICAgIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG4gIH07XG5cbiAgYXBwbHlPcmRlcihvcmRlcik7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJSZW9yZGVyIGxheWVyXCIsXG4gICAgdW5kbzogKCkgPT4gYXBwbHlPcmRlcihiZWZvcmUpLFxuICAgIHJlZG86ICgpID0+IGFwcGx5T3JkZXIob3JkZXIpXG4gIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE5hbWluZ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lTGF5ZXIoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBjb25zdCBsYXllciA9IGRvYz8ubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGlkKTtcbiAgaWYgKCFkb2MgfHwgIWxheWVyIHx8IGxheWVyLm5hbWUgPT09IG5hbWUpIHJldHVybjtcbiAgY29uc3QgYXBwbHkgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHVwZGF0ZURvYygoZCkgPT4gKHtcbiAgICAgIC4uLmQsXG4gICAgICBsYXllcnM6IGQubGF5ZXJzLm1hcCgobCkgPT4gKGwuaWQgPT09IGlkID8geyAuLi5sLCBuYW1lOiB2YWx1ZSB9IDogbCkpXG4gICAgfSkpO1xuICAgIGVucXVldWUoeyBraW5kOiBcInJlbmFtZUxheWVyXCIsIGlkLCBuYW1lOiB2YWx1ZSB9KTtcbiAgfTtcbiAgY29uc3QgYmVmb3JlID0gbGF5ZXIubmFtZTtcbiAgYXBwbHkobmFtZSk7XG4gIHB1c2hIaXN0b3J5KHsgbGFiZWw6IFwiUmVuYW1lIGxheWVyXCIsIHVuZG86ICgpID0+IGFwcGx5KGJlZm9yZSksIHJlZG86ICgpID0+IGFwcGx5KG5hbWUpIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lUHJvamVjdChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jIHx8IGRvYy5uYW1lID09PSBuYW1lKSByZXR1cm47XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbmFtZSB9KSk7XG4gIGVucXVldWUoeyBraW5kOiBcInJlbmFtZVByb2plY3RcIiwgaWQ6IGRvYy5pZCwgbmFtZSB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaHVtYm5haWxzXG5cbmxldCB0aHVtYlRpbWVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVRodW1iUmVmcmVzaCgpOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgY2xlYXJUaW1lb3V0KHRodW1iVGltZXIpO1xuICB0aHVtYlRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghZG9jKSByZXR1cm47XG4gICAgcmVuZGVyVGh1bWIoZG9jKVxuICAgICAgLnRoZW4oKHRodW1iKSA9PiB7XG4gICAgICAgIC8vIFRoZSBkb2MgbWF5IGhhdmUgYmVlbiBjbG9zZWQgd2hpbGUgcmVuZGVyaW5nLlxuICAgICAgICBpZiAoZ2V0U3RhdGUoKS5kb2M/LmlkID09PSBkb2MuaWQpIHtcbiAgICAgICAgICBlbnF1ZXVlKHsga2luZDogXCJzZXRUaHVtYlwiLCBpZDogZG9jLmlkLCB0aHVtYiB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICB9LCAxNTAwKTtcbn1cbiIsICIvLyBWaWV3cG9ydCAoem9vbS9wYW4pIGhlbHBlcnMuIFRoZSBjYW52YXMgc3RhZ2UgcmVnaXN0ZXJzIGl0cyBET00gZWxlbWVudCBzb1xuLy8gem9vbSBzaG9ydGN1dHMgYW5kIHRvb2xiYXIgYnV0dG9ucyBjYW4gem9vbSBhYm91dCB0aGUgdmlld3BvcnQgY2VudGVyLlxuXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCBNSU5fWk9PTSA9IDAuMDU7XG5leHBvcnQgY29uc3QgTUFYX1pPT00gPSA4O1xuY29uc3QgRklUX1BBRERJTkcgPSA1Njtcbi8qKiBXaGVlbCBzZW5zaXRpdml0eSBhdCB6b29tPTE7IHNjYWxlcyB1cCB3aGVuIHpvb21lZCBvdXQuICovXG5jb25zdCBXSEVFTF9aT09NX1NFTlNJVElWSVRZID0gMC4wMDcyO1xuXG5leHBvcnQgY29uc3Qgdmlld3BvcnRFbDogeyBjdXJyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgfSA9IHsgY3VycmVudDogbnVsbCB9O1xuXG4vKiogTXVsdGlwbGljYXRpdmUgem9vbSBzdGVwIFx1MjAxNCBsYXJnZXIgd2hlbiB6b29tZWQgb3V0LCBmaW5lciB3aGVuIHpvb21lZCBpbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6b29tU3RlcEZhY3Rvcih6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiAxICsgMC4yNSAvIE1hdGguc3FydChNYXRoLm1heCh6b29tLCBNSU5fWk9PTSkpO1xufVxuXG4vKiogV2hlZWwgem9vbSBzZW5zaXRpdml0eSBcdTIwMTQgc3Ryb25nZXIgd2hlbiB6b29tZWQgb3V0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoZWVsWm9vbVNlbnNpdGl2aXR5KHpvb206IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIFdIRUVMX1pPT01fU0VOU0lUSVZJVFkgLyBNYXRoLnNxcnQoTWF0aC5tYXgoem9vbSwgTUlOX1pPT00pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmVlblRvV29ybGQoXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlcixcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB7XG4gICAgY29uc3QgZWwgPSB2aWV3cG9ydEVsLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHJlY3QgPSBlbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgPz8geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiAoY2xpZW50WCAtIHJlY3QubGVmdCAtIHZpZXcucGFuWCkgLyB2aWV3Lnpvb20sXG4gICAgICAgIHk6IChjbGllbnRZIC0gcmVjdC50b3AgLSB2aWV3LnBhblkpIC8gdmlldy56b29tLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6b29tQXRDbGllbnQoXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlcixcbiAgICBuZXh0Wm9vbTogbnVtYmVyLFxuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB2aWV3cG9ydEVsLmN1cnJlbnQ7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3Qgem9vbSA9IGNsYW1wKG5leHRab29tLCBNSU5fWk9PTSwgTUFYX1pPT00pO1xuICAgIGNvbnN0IHd4ID0gKGNsaWVudFggLSByZWN0LmxlZnQgLSB2aWV3LnBhblgpIC8gdmlldy56b29tO1xuICAgIGNvbnN0IHd5ID0gKGNsaWVudFkgLSByZWN0LnRvcCAtIHZpZXcucGFuWSkgLyB2aWV3Lnpvb207XG4gICAgc2V0U3RhdGUoe1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgICB6b29tLFxuICAgICAgICAgICAgcGFuWDogY2xpZW50WCAtIHJlY3QubGVmdCAtIHd4ICogem9vbSxcbiAgICAgICAgICAgIHBhblk6IGNsaWVudFkgLSByZWN0LnRvcCAtIHd5ICogem9vbSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlUGFuKHBhblg6IG51bWJlciwgcGFuWTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBnZXRTdGF0ZSgpO1xuICAgIHNldFN0YXRlKHsgdmlldzogeyAuLi52aWV3LCBwYW5YLCBwYW5ZIH0gfSk7XG59XG5cbi8qKiBab29tIGluIChgZGlyZWN0aW9uID4gMGApIG9yIG91dCAoYGRpcmVjdGlvbiA8IDBgKSBhYm91dCB0aGUgdmlld3BvcnQgY2VudGVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHpvb21CeShkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgem9vbSA9IGdldFN0YXRlKCkudmlldy56b29tO1xuICAgIGNvbnN0IHN0ZXAgPSB6b29tU3RlcEZhY3Rvcih6b29tKTtcbiAgICBjb25zdCBmYWN0b3IgPSBkaXJlY3Rpb24gPiAwID8gc3RlcCA6IDEgLyBzdGVwO1xuICAgIHpvb21BdENsaWVudChcbiAgICAgICAgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIsXG4gICAgICAgIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyLFxuICAgICAgICB6b29tICogZmFjdG9yLFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXREb2MoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB2aWV3cG9ydEVsLmN1cnJlbnQ7XG4gICAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gICAgaWYgKCFlbCB8fCAhZG9jKSByZXR1cm47XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHpvb20gPSBjbGFtcChcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICAocmVjdC53aWR0aCAtIEZJVF9QQURESU5HICogMikgLyBkb2Mud2lkdGgsXG4gICAgICAgICAgICAocmVjdC5oZWlnaHQgLSBGSVRfUEFERElORyAqIDIpIC8gZG9jLmhlaWdodCxcbiAgICAgICAgKSxcbiAgICAgICAgTUlOX1pPT00sXG4gICAgICAgIE1BWF9aT09NLFxuICAgICk7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgICB2aWV3OiB7XG4gICAgICAgICAgICB6b29tLFxuICAgICAgICAgICAgcGFuWDogKHJlY3Qud2lkdGggLSBkb2Mud2lkdGggKiB6b29tKSAvIDIsXG4gICAgICAgICAgICBwYW5ZOiAocmVjdC5oZWlnaHQgLSBkb2MuaGVpZ2h0ICogem9vbSkgLyAyLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdEZpdCgpOiB2b2lkIHtcbiAgICBzZXRTdGF0ZSh7IGZpdFZlcnNpb246IGdldFN0YXRlKCkuZml0VmVyc2lvbiArIDEgfSk7XG59XG4iLCAiLy8gSW1wb3J0aW5nIGltYWdlcyBmcm9tIGZpbGVzOiBkZWNvZGUsIGRvd25zY2FsZSBvdmVyc2l6ZWQgaW1hZ2VzIChkYXRhIFVSTHNcbi8vIGFyZSB0aGUgdXBsb2FkIHdpcmUgZm9ybWF0OyB0aGUgc2VydmVyIHN0b3JlcyB0aGVtIGluIFMzKSwgYW5kIHJlcG9ydFxuLy8gbmF0dXJhbCBkaW1lbnNpb25zLlxuXG5pbXBvcnQgeyBNQVhfSU1BR0VfRElNIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBJbXBvcnRlZEltYWdlIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gcmVhZEZpbGVBc0RhdGFVcmwoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShTdHJpbmcocmVhZGVyLnJlc3VsdCkpO1xuICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZWFkIGZpbGVcIikpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlSW1hZ2Uoc3JjOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIk5vdCBhIHN1cHBvcnRlZCBpbWFnZVwiKSk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJhc2VOYW1lKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZmlsZU5hbWUucmVwbGFjZSgvXFwuW14uXSskLywgXCJcIikgfHwgXCJJbWFnZVwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsZVRvSW1wb3J0ZWRJbWFnZShmaWxlOiBGaWxlKTogUHJvbWlzZTxJbXBvcnRlZEltYWdlPiB7XG4gIGNvbnN0IG9yaWdpbmFsID0gYXdhaXQgcmVhZEZpbGVBc0RhdGFVcmwoZmlsZSk7XG4gIGNvbnN0IGltZyA9IGF3YWl0IGRlY29kZUltYWdlKG9yaWdpbmFsKTtcbiAgY29uc3Qgd2lkdGggPSBpbWcubmF0dXJhbFdpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodDtcbiAgaWYgKHdpZHRoIDwgMSB8fCBoZWlnaHQgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3VwcG9ydGVkIGltYWdlXCIpO1xuICB9XG5cbiAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCBNQVhfSU1BR0VfRElNIC8gTWF0aC5tYXgod2lkdGgsIGhlaWdodCkpO1xuICBpZiAoc2NhbGUgPT09IDEpIHtcbiAgICByZXR1cm4geyBzcmM6IG9yaWdpbmFsLCB3aWR0aCwgaGVpZ2h0LCBuYW1lOiBiYXNlTmFtZShmaWxlLm5hbWUpIH07XG4gIH1cblxuICBjb25zdCB3ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh3aWR0aCAqIHNjYWxlKSk7XG4gIGNvbnN0IGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IHc7XG4gIGNhbnZhcy5oZWlnaHQgPSBoO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgdywgaCk7XG4gIC8vIEpQRUcgcmUtZW5jb2RlcyBwaG90b3MgY29tcGFjdGx5OyBQTkcga2VlcHMgdHJhbnNwYXJlbmN5IGZvciBldmVyeXRoaW5nIGVsc2UuXG4gIGNvbnN0IHNyYyA9XG4gICAgZmlsZS50eXBlID09PSBcImltYWdlL2pwZWdcIiA/IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuOSkgOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICByZXR1cm4geyBzcmMsIHdpZHRoOiB3LCBoZWlnaHQ6IGgsIG5hbWU6IGJhc2VOYW1lKGZpbGUubmFtZSkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGR0OiBEYXRhVHJhbnNmZXIgfCBudWxsKTogRmlsZVtdIHtcbiAgaWYgKCFkdCkgcmV0dXJuIFtdO1xuICByZXR1cm4gWy4uLmR0LmZpbGVzXS5maWx0ZXIoKGZpbGUpID0+IGZpbGUudHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKTtcbn1cbiIsICJjb25zdCBFTkNPREVEX0VOVElUSUVTID0gL1tcIiY8XS87XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3RyICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRW50aXRpZXMoc3RyKSB7XG5cdC8vIFNraXAgYWxsIHdvcmsgZm9yIHN0cmluZ3Mgd2l0aCBubyBlbnRpdGllcyBuZWVkaW5nIGVuY29kaW5nOlxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMCB8fCBFTkNPREVEX0VOVElUSUVTLnRlc3Qoc3RyKSA9PT0gZmFsc2UpIHJldHVybiBzdHI7XG5cblx0bGV0IGxhc3QgPSAwLFxuXHRcdGkgPSAwLFxuXHRcdG91dCA9ICcnLFxuXHRcdGNoID0gJyc7XG5cblx0Ly8gU2VlayBmb3J3YXJkIGluIHN0ciB1bnRpbCB0aGUgbmV4dCBlbnRpdHkgY2hhcjpcblx0Zm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRjaCA9ICcmcXVvdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdGNoID0gJyZhbXA7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRjaCA9ICcmbHQ7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gQXBwZW5kIHNraXBwZWQvYnVmZmVyZWQgY2hhcmFjdGVycyBhbmQgdGhlIGVuY29kZWQgZW50aXR5OlxuXHRcdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRcdG91dCArPSBjaDtcblx0XHQvLyBTdGFydCB0aGUgbmV4dCBzZWVrL2J1ZmZlciBhZnRlciB0aGUgZW50aXR5J3Mgb2Zmc2V0OlxuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0cmV0dXJuIG91dDtcbn1cbiIsICIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgZW5jb2RlRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdGlmICghcHJvcHMpIHByb3BzID0ge307XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcyxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRpZiAoJ3JlZicgaW4gbm9ybWFsaXplZFByb3BzKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cdFx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0XHRpZiAoaSA9PSAncmVmJykge1xuXHRcdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7Vk5vZGUgJiB7IF9fc291cmNlOiBhbnk7IF9fc2VsZjogYW55IH19ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHM6IG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBsYXRlIHZub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBleHBlY3RlZCB0byBiZVxuICogdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSAge0FycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59IGV4cHJzXG4gKiBAcmV0dXJucyB7Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIGpzeFRlbXBsYXRlKHRlbXBsYXRlcywgLi4uZXhwcnMpIHtcblx0Y29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZShGcmFnbWVudCwgeyB0cGw6IHRlbXBsYXRlcywgZXhwcnMgfSk7XG5cdC8vIEJ5cGFzcyByZW5kZXIgdG8gc3RyaW5nIHRvcCBsZXZlbCBGcmFnbWVudCBvcHRpbWl6YXRpb25cblx0dm5vZGUua2V5ID0gdm5vZGUuX3Zub2RlO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmNvbnN0IEpTX1RPX0NTUyA9IHt9O1xuY29uc3QgQ1NTX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8qKlxuICogVW53cmFwIHBvdGVudGlhbCBzaWduYWxzLlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IHZhbHVlLnZhbHVlT2YoKVxuXHRcdDogdmFsdWU7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEhUTUwgYXR0cmlidXRlIHRvIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdFxuICogZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZVxuICogSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpzeEF0dHIobmFtZSwgdmFsdWUpIHtcblx0aWYgKG9wdGlvbnMuYXR0cikge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuYXR0cihuYW1lLCB2YWx1ZSk7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsdWUgPSBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpO1xuXG5cdGlmIChuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAna2V5JykgcmV0dXJuICcnO1xuXHRpZiAobmFtZSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcblx0XHRcdGxldCB2YWwgPSB2YWx1ZVtwcm9wXTtcblx0XHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPVxuXHRcdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0XHQ/IHByb3Bcblx0XHRcdFx0XHRcdDogSlNfVE9fQ1NTW3Byb3BdIHx8XG5cdFx0XHRcdFx0XHRcdChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoQ1NTX1JFR0VYLCAnLSQmJykudG9Mb3dlckNhc2UoKSk7XG5cblx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc7Jztcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdFx0Ly8gRXhjbHVkZSBjdXN0b20tYXR0cmlidXRlc1xuXHRcdFx0XHRcdCFuYW1lLnN0YXJ0c1dpdGgoJy0tJykgJiZcblx0XHRcdFx0XHQhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QobmFtZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJ3B4Oyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyID0gc3RyICsgbmFtZSArICc6JyArIHZhbCArIHN1ZmZpeDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKHN0cikgKyAnXCInO1xuXHR9XG5cblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR2YWx1ZSA9PT0gZmFsc2UgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG5hbWU7XG5cblx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpICsgJ1wiJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBkeW5hbWljIGNoaWxkIHBhc3NlZCB0byBganN4VGVtcGxhdGVgLiBUaGlzIGZ1bmN0aW9uXG4gKiBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGFcbiAqIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCBWTm9kZSB8IEFycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGpzeEVzY2FwZSh2YWx1ZSkge1xuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDaGVjayBmb3IgVk5vZGVcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlW2ldID0ganN4RXNjYXBlKHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudCxcblx0Ly8gcHJlY29tcGlsZWQgSlNYIHRyYW5zZm9ybVxuXHRqc3hUZW1wbGF0ZSxcblx0anN4QXR0cixcblx0anN4RXNjYXBlXG59O1xuIiwgIi8vIFRoZSBjYW52YXM6IHJlbmRlcnMgdGhlIGFydGJvYXJkIGFuZCBpdHMgbGF5ZXJzIHdpdGggQ1NTIHRyYW5zZm9ybXMgKEdQVVxuLy8gY29tcG9zaXRpbmcga2VlcHMgZHJhZ3MgYXQgZnJhbWUgcmF0ZSksIGFuZCBvd25zIGFsbCBwb2ludGVyIGdlc3R1cmVzIFx1MjAxNFxuLy8gc2VsZWN0LCBtb3ZlLCBzY2FsZSwgcm90YXRlLCBwYW4gXHUyMDE0IHBsdXMgd2hlZWwgem9vbS9wYW4gYW5kIGltYWdlIGRyb3AuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgSEFORExFUyxcbiAgICBIQU5ETEVfSURTLFxuICAgIHJvdGF0aW9uRnJvbVBvaW50ZXIsXG4gICAgc2NhbGVGcm9tSGFuZGxlLFxuICAgIHR5cGUgSGFuZGxlSWQsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvZ2VvbWV0cnlcIjtcbmltcG9ydCB0eXBlIHsgTGF5ZXIsIExheWVyVHJhbnNmb3JtIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBwYWludEJydXNoU3Ryb2tlLFxuICAgIGFkZFRleHRMYXllcixcbiAgICBhZGRJbWFnZUxheWVycyxcbiAgICBhcHBseVRyYW5zaWVudCxcbiAgICBjb21taXRUcmFuc2Zvcm1zLFxuICAgIGNyb3BDYW52YXMsXG4gICAgY3JvcFNlbGVjdGlvbixcbiAgICBiZWdpblRleHRFZGl0aW5nLFxuICAgIGZpbmlzaFRleHRFZGl0aW5nLFxuICAgIHNldFNlbGVjdGlvbixcbiAgICB0b2dnbGVTZWxlY3RlZCxcbiAgICB0eXBlIFRyYW5zZm9ybUNoYW5nZSxcbiAgICB0eXBlIFRyYW5zZm9ybVBhdGNoLFxufSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlQXNzZXRFbnRyeSwgZGlzcGxheVNyYyB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IG5vdGVMYXllclNyY1ByZXNlbnRlZCwgcmVnaXN0ZXJCcnVzaE92ZXJsYXlDbGVhciwgYmVnaW5CcnVzaEdlc3R1cmUsIGVuZEJydXNoR2VzdHVyZSB9IGZyb20gXCIuLi9zdGF0ZS9icnVzaE92ZXJsYXlcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICAgIGZpdERvYyxcbiAgICBzY3JlZW5Ub1dvcmxkLFxuICAgIHNldFN0YXRlUGFuLFxuICAgIHZpZXdwb3J0RWwsXG4gICAgd2hlZWxab29tU2Vuc2l0aXZpdHksXG4gICAgem9vbUF0Q2xpZW50LFxufSBmcm9tIFwiLi4vc3RhdGUvdmlld1wiO1xuaW1wb3J0IHsgZmlsZVRvSW1wb3J0ZWRJbWFnZSwgaW1hZ2VGaWxlc0Zyb21EYXRhVHJhbnNmZXIgfSBmcm9tIFwiLi4vbGliL2ltYWdlXCI7XG5cbnR5cGUgR2VzdHVyZSA9XG4gICAgfCB7XG4gICAgICAgICAga2luZDogXCJwYW5cIjtcbiAgICAgICAgICBzdGFydENsaWVudFg6IG51bWJlcjtcbiAgICAgICAgICBzdGFydENsaWVudFk6IG51bWJlcjtcbiAgICAgICAgICBzdGFydFBhblg6IG51bWJlcjtcbiAgICAgICAgICBzdGFydFBhblk6IG51bWJlcjtcbiAgICAgIH1cbiAgICB8IHtcbiAgICAgICAgICBraW5kOiBcIm1vdmVcIjtcbiAgICAgICAgICBzdGFydFg6IG51bWJlcjtcbiAgICAgICAgICBzdGFydFk6IG51bWJlcjtcbiAgICAgICAgICBzdGFydHM6IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT47XG4gICAgICAgICAgbW92ZWQ6IGJvb2xlYW47XG4gICAgICB9XG4gICAgfCB7IGtpbmQ6IFwic2NhbGVcIjsgaWQ6IHN0cmluZzsgaGFuZGxlOiBIYW5kbGVJZDsgc3RhcnQ6IExheWVyVHJhbnNmb3JtIH1cbiAgICB8IHsga2luZDogXCJyb3RhdGVcIjsgaWQ6IHN0cmluZzsgc3RhcnQ6IExheWVyVHJhbnNmb3JtIH1cbiAgICB8IHsga2luZDogXCJicnVzaFwiOyBsYXN0WDogbnVtYmVyOyBsYXN0WTogbnVtYmVyIH1cbiAgICB8IHsga2luZDogXCJjcm9wXCI7IHN0YXJ0WDogbnVtYmVyOyBzdGFydFk6IG51bWJlciB9O1xuXG5jb25zdCBIQU5ETEVfQ1VSU09SUzogUmVjb3JkPEhhbmRsZUlkLCBzdHJpbmc+ID0ge1xuICAgIG53OiBcIm53c2UtcmVzaXplXCIsXG4gICAgbjogXCJucy1yZXNpemVcIixcbiAgICBuZTogXCJuZXN3LXJlc2l6ZVwiLFxuICAgIGU6IFwiZXctcmVzaXplXCIsXG4gICAgc2U6IFwibndzZS1yZXNpemVcIixcbiAgICBzOiBcIm5zLXJlc2l6ZVwiLFxuICAgIHN3OiBcIm5lc3ctcmVzaXplXCIsXG4gICAgdzogXCJldy1yZXNpemVcIixcbn07XG5cbmZ1bmN0aW9uIHBvaW50SW5zaWRlTGF5ZXIobGF5ZXI6IExheWVyLCBwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY3ggPSBsYXllci54ICsgbGF5ZXIudyAvIDI7XG4gICAgY29uc3QgY3kgPSBsYXllci55ICsgbGF5ZXIuaCAvIDI7XG4gICAgY29uc3QgYW5nbGUgPSAtbGF5ZXIucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGR4ID0gcG9pbnQueCAtIGN4O1xuICAgIGNvbnN0IGR5ID0gcG9pbnQueSAtIGN5O1xuICAgIGNvbnN0IGxvY2FsWCA9IGR4ICogTWF0aC5jb3MoYW5nbGUpIC0gZHkgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgbG9jYWxZID0gZHggKiBNYXRoLnNpbihhbmdsZSkgKyBkeSAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICByZXR1cm4gTWF0aC5hYnMobG9jYWxYKSA8PSBsYXllci53IC8gMiAmJiBNYXRoLmFicyhsb2NhbFkpIDw9IGxheWVyLmggLyAyO1xufVxuXG5mdW5jdGlvbiBMYXllclZpZXcoe1xuICAgIGxheWVyLFxuICAgIHByZXZpZXdCbGVuZCxcbiAgICBlZGl0aW5nLFxufToge1xuICAgIGxheWVyOiBMYXllcjtcbiAgICBwcmV2aWV3QmxlbmQ/OiBzdHJpbmc7XG4gICAgZWRpdGluZz86IGJvb2xlYW47XG59KSB7XG4gICAgY29uc3QgYXNzZXQgPSB1c2VBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICAgIGNvbnN0IHRhcmdldFNyYyA9IGFzc2V0ID8gZGlzcGxheVNyYyhhc3NldCkgOiBudWxsO1xuICAgIC8vIEtlZXAgdGhlIHByZXZpb3VzIGJpdG1hcCB2aXNpYmxlIHVudGlsIHRoZSBuZXh0IG9uZSBpcyBkZWNvZGVkIHNvIGFzc2V0XG4gICAgLy8gc3dhcHMgKGJydXNoIGNvbW1pdHMpIGRvbid0IGJsYW5rIHRoZSBsYXllciBmb3IgYSBmcmFtZS5cbiAgICBjb25zdCBbZHJhd25TcmMsIHNldERyYXduU3JjXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KHRhcmdldFNyYyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0YXJnZXRTcmMpIHtcbiAgICAgICAgICAgIHNldERyYXduU3JjKG51bGwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFsaXZlKSBzZXREcmF3blNyYyh0YXJnZXRTcmMpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25sb2FkID0gc2hvdztcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBzaG93O1xuICAgICAgICBpbWcuc3JjID0gdGFyZ2V0U3JjO1xuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlKSBzaG93KCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBhbGl2ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH0sIFt0YXJnZXRTcmNdKTtcbiAgICBjb25zdCBzcmMgPSBkcmF3blNyYyA/PyB0YXJnZXRTcmM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBsYXllci53LFxuICAgICAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke2xheWVyLnh9cHgsICR7bGF5ZXIueX1weCkgcm90YXRlKCR7bGF5ZXIucm90YXRpb259ZGVnKSBzY2FsZVgoJHtsYXllci5mbGlwWCA/IC0xIDogMX0pYCxcbiAgICAgICAgb3BhY2l0eTogbGF5ZXIub3BhY2l0eSxcbiAgICAgICAgZGlzcGxheTogbGF5ZXIudmlzaWJsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICBtaXhCbGVuZE1vZGU6IHByZXZpZXdCbGVuZCA/PyBsYXllci5ibGVuZE1vZGUsXG4gICAgICAgIHZpc2liaWxpdHk6IGVkaXRpbmcgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXG4gICAgfTtcbiAgICBpZiAoIXNyYykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGRhdGEtbGF5ZXJpZD17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIGFuaW1hdGUtcHVsc2UgYmctbmV1dHJhbC01MDAvMzBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD17bGF5ZXIubmFtZX1cbiAgICAgICAgICAgIGRhdGEtbGF5ZXJpZD17bGF5ZXIuaWR9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIG1heC13LW5vbmUgc2VsZWN0LW5vbmVcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBvbkxvYWQ9eygpID0+IG5vdGVMYXllclNyY1ByZXNlbnRlZChzcmMpfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIElubGluZVRleHRFZGl0b3IoeyBsYXllciB9OiB7IGxheWVyOiBMYXllciB9KSB7XG4gICAgY29uc3QgZWRpdGluZyA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0RWRpdGluZyk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IHRleHQgPSBsYXllci50ZXh0O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgZWwuc2VsZWN0KCk7XG4gICAgfSwgW2xheWVyLmlkXSk7XG4gICAgaWYgKCFlZGl0aW5nIHx8ICF0ZXh0IHx8IGVkaXRpbmcuaWQgIT09IGxheWVyLmlkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBwYWRkaW5nID0gTWF0aC5tYXgoNCwgTWF0aC5jZWlsKHRleHQuZm9udFNpemUgKiAwLjE0KSk7XG4gICAgY29uc3QgbGluZXMgPSBlZGl0aW5nLmRyYWZ0LnJlcGxhY2UoL1xcci9nLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgICBjb25zdCByYXN0ZXJXaWR0aCA9IHRleHQucmFzdGVyV2lkdGggPz8gbGF5ZXIudztcbiAgICBjb25zdCByYXN0ZXJIZWlnaHQgPSB0ZXh0LnJhc3RlckhlaWdodCA/PyBsYXllci5oO1xuICAgIGNvbnN0IHNjYWxlWCA9IHJhc3RlcldpZHRoID4gMCA/IGxheWVyLncgLyByYXN0ZXJXaWR0aCA6IDE7XG4gICAgY29uc3Qgc2NhbGVZID0gcmFzdGVySGVpZ2h0ID4gMCA/IGxheWVyLmggLyByYXN0ZXJIZWlnaHQgOiAxO1xuICAgIGNvbnN0IGVkaXRXaWR0aCA9IE1hdGgubWF4KHJhc3RlcldpZHRoLCBNYXRoLm1heCguLi5saW5lcy5tYXAoKGxpbmUpID0+IE1hdGgubWF4KDEsIGxpbmUubGVuZ3RoKSkpICogdGV4dC5mb250U2l6ZSAqIDAuNjggKyBwYWRkaW5nICogMik7XG4gICAgY29uc3QgZWRpdEhlaWdodCA9IE1hdGgubWF4KHJhc3RlckhlaWdodCwgbGluZXMubGVuZ3RoICogdGV4dC5mb250U2l6ZSAqIHRleHQubGluZUhlaWdodCArIHBhZGRpbmcgKiAyKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLXRleHQtZWRpdG9yPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtdGV4dC1lZGl0b3Itd3JhcFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGxlZnQ6IGxheWVyLngsXG4gICAgICAgICAgICAgICAgdG9wOiBsYXllci55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBsYXllci53LFxuICAgICAgICAgICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0LWVkaXRvcj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS10ZXh0LWVkaXRvclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRpbmcuZHJhZnR9XG4gICAgICAgICAgICAgICAgc3BlbGxjaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgd3JhcD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogbGF5ZXIuZmxpcFggPyBsYXllci53IDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZWRpdFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGVkaXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7bGF5ZXIuZmxpcFggPyAtc2NhbGVYIDogc2NhbGVYfSwgJHtzY2FsZVl9KWAsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwIDBcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogdGV4dC5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogdGV4dC5mb250U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogdGV4dC5mb250V2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0ZXh0LmxpbmVIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogdGV4dC5hbGlnbixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRleHQuY29sb3IsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXsoZTogRXZlbnQpID0+IHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IHsgaWQ6IGxheWVyLmlkLCBkcmFmdDogKGUuY3VycmVudFRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSB9IH0pfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGUucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Py5jbG9zZXN0KFwiLnByb3BlcnRpZXMtcGFuZWwsIC50b29sYmFyLWNvbG9ycywgLnRvb2wtY29sb3ItcG9wb3ZlclwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudD8uYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGlvbkJveCh7XG4gICAgbGF5ZXIsXG4gICAgem9vbSxcbiAgICBzaW5nbGUsXG59OiB7XG4gICAgbGF5ZXI6IExheWVyO1xuICAgIHpvb206IG51bWJlcjtcbiAgICBzaW5nbGU6IGJvb2xlYW47XG59KSB7XG4gICAgY29uc3QgaGFuZGxlU2l6ZSA9IDExIC8gem9vbTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMCB0b3AtMFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBsYXllci53LFxuICAgICAgICAgICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtsYXllci54fXB4LCAke2xheWVyLnl9cHgpIHJvdGF0ZSgke2xheWVyLnJvdGF0aW9ufWRlZylgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYm9yZGVyLXNreS00MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiAxLjUgLyB6b29tLCBib3JkZXJTdHlsZTogXCJzb2xpZFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3NpbmdsZSA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7Lyogcm90YXRlIGhhbmRsZSBzdGVtICsga25vYiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctc2t5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjIgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjUgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjIgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhhbmRsZT1cInJvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNreS01MDAgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTI2IC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtIQU5ETEVfSURTLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhhbmRsZT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtWzJweF0gYm9yZGVyIGJvcmRlci1za3ktNTAwIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtIQU5ETEVTW2lkXS54ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGAke0hBTkRMRVNbaWRdLnkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBIQU5ETEVfQ1VSU09SU1tpZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNTdGFnZSgpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCB2aWV3ID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICAgIGNvbnN0IHRvb2wgPSB1c2VFZGl0b3IoKHMpID0+IHMudG9vbCk7XG4gICAgY29uc3Qgc3BhY2VQYW4gPSB1c2VFZGl0b3IoKHMpID0+IHMuc3BhY2VQYW4pO1xuICAgIGNvbnN0IGZpdFZlcnNpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuZml0VmVyc2lvbik7XG4gICAgY29uc3QgYnJ1c2hDb2xvciA9IHVzZUVkaXRvcigocykgPT4gcy5mb3JlZ3JvdW5kQ29sb3IpO1xuICAgIGNvbnN0IGJydXNoU2l6ZSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaFNpemUpO1xuICAgIGNvbnN0IGJydXNoSGFyZG5lc3MgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hIYXJkbmVzcyk7XG4gICAgY29uc3QgYnJ1c2hPcGFjaXR5ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoT3BhY2l0eSk7XG4gICAgY29uc3QgYnJ1c2hGbG93ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoRmxvdyk7XG4gICAgY29uc3QgY3JvcFJlY3QgPSB1c2VFZGl0b3IoKHMpID0+IHMuY3JvcFJlY3QpO1xuICAgIGNvbnN0IHNuYXBHdWlkZXMgPSB1c2VFZGl0b3IoKHMpID0+IHMuc25hcEd1aWRlcyk7XG4gICAgY29uc3QgYmxlbmRQcmV2aWV3ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJsZW5kUHJldmlldyk7XG4gICAgY29uc3QgdGV4dEVkaXRpbmcgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEVkaXRpbmcpO1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBnZXN0dXJlUmVmID0gdXNlUmVmPEdlc3R1cmUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBwYW5uaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBicnVzaENhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJCcnVzaE92ZXJsYXlDbGVhcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBicnVzaENhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik/LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBicnVzaERhYihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gYnJ1c2hTaXplIC8gMjtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gYnJ1c2hGbG93IC8gMTAwO1xuICAgICAgICBpZiAoYnJ1c2hIYXJkbmVzcyA+PSA5OSkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJydXNoQ29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCByYWRpdXMgKiBicnVzaEhhcmRuZXNzIC8gMTAwLCB4LCB5LCByYWRpdXMpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGJydXNoQ29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGAke2JydXNoQ29sb3J9MDBgKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJ1c2hTZWdtZW50KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyLCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KHRvWCAtIGZyb21YLCB0b1kgLSBmcm9tWSk7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSBNYXRoLm1heCgxLCBicnVzaFNpemUgKiAwLjEyKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoZGlzdGFuY2UgLyBzcGFjaW5nKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBpIC8gc3RlcHM7XG4gICAgICAgICAgICBicnVzaERhYihjdHgsIGZyb21YICsgKHRvWCAtIGZyb21YKSAqIHQsIGZyb21ZICsgKHRvWSAtIGZyb21ZKSAqIHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmlld3BvcnRFbC5jdXJyZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3cG9ydEVsLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEZpdCB0aGUgYXJ0Ym9hcmQgb24gb3BlbiBhbmQgd2hlbiByZXF1ZXN0ZWQuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZml0RG9jKCk7XG4gICAgfSwgW2RvYz8uaWQsIGZpdFZlcnNpb25dKTtcblxuICAgIC8vIFdoZWVsIG11c3QgYmUgYSBub24tcGFzc2l2ZSBuYXRpdmUgbGlzdGVuZXIgdG8gcHJldmVudERlZmF1bHQgcmVsaWFibHkuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBvbldoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdmlldzogdiB9ID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgem9vbUF0Q2xpZW50KFxuICAgICAgICAgICAgICAgICAgICBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIGUuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgdi56b29tICogTWF0aC5leHAoLWUuZGVsdGFZICogd2hlZWxab29tU2Vuc2l0aXZpdHkodi56b29tKSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGVQYW4odi5wYW5YIC0gZS5kZWx0YVgsIHYucGFuWSAtIGUuZGVsdGFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcGFuTW9kZSA9IHRvb2wgPT09IFwiaGFuZFwiIHx8IHNwYWNlUGFuO1xuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlOiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCB8fCBlLmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZS50ZXh0RWRpdGluZyAmJiAhdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS10ZXh0LWVkaXRvcl1cIikpIHtcbiAgICAgICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDEgfHwgcGFuTW9kZSkge1xuICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwicGFuXCIsXG4gICAgICAgICAgICAgICAgc3RhcnRDbGllbnRYOiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgc3RhcnRDbGllbnRZOiBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgc3RhcnRQYW5YOiBzdGF0ZS52aWV3LnBhblgsXG4gICAgICAgICAgICAgICAgc3RhcnRQYW5ZOiBzdGF0ZS52aWV3LnBhblksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFubmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmxkID0gc2NyZWVuVG9Xb3JsZChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGNvbnN0IGluc2lkZSA9ICEhc3RhdGUuZG9jICYmIHdvcmxkLnggPj0gMCAmJiB3b3JsZC55ID49IDAgJiYgd29ybGQueCA8PSBzdGF0ZS5kb2Mud2lkdGggJiYgd29ybGQueSA8PSBzdGF0ZS5kb2MuaGVpZ2h0O1xuICAgICAgICBpZiAodG9vbCA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIGlmICghaW5zaWRlIHx8ICFzdGF0ZS5kb2MpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGxheWVySWQgPSB0YXJnZXQuY2xvc2VzdChcIltkYXRhLWxheWVyaWRdXCIpPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxheWVyaWRcIik7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHN0YXRlLmRvYy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gICAgICAgICAgICBpZiAobGF5ZXI/LnRleHQpIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXIuaWQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhZGRUZXh0TGF5ZXIod29ybGQpO1xuICAgICAgICAgICAgICAgIGlmIChpZCkgYmVnaW5UZXh0RWRpdGluZyhpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvb2wgPT09IFwiYnJ1c2hcIikge1xuICAgICAgICAgICAgaWYgKCFpbnNpZGUgfHwgIXN0YXRlLmRvYykgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKCFjYW52YXMgfHwgIWN0eCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gc3RhdGUuZG9jLndpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IHN0YXRlLmRvYy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBzdGF0ZS5kb2Mud2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHN0YXRlLmRvYy5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiZWdpbkJydXNoR2VzdHVyZSgpO1xuICAgICAgICAgICAgYnJ1c2hEYWIoY3R4LCB3b3JsZC54LCB3b3JsZC55KTtcbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHsga2luZDogXCJicnVzaFwiLCBsYXN0WDogd29ybGQueCwgbGFzdFk6IHdvcmxkLnkgfTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9vbCA9PT0gXCJjcm9wXCIpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zZWxlY3Rpb24ubGVuZ3RoID4gMSkgcmV0dXJuO1xuICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0geyBraW5kOiBcImNyb3BcIiwgc3RhcnRYOiB3b3JsZC54LCBzdGFydFk6IHdvcmxkLnkgfTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IHsgeDogd29ybGQueCwgeTogd29ybGQueSwgdzogMCwgaDogMCB9IH0pO1xuICAgICAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGFyZ2V0XG4gICAgICAgICAgICAuY2xvc2VzdChcIltkYXRhLWhhbmRsZV1cIilcbiAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIik7XG4gICAgICAgIGlmIChoYW5kbGUgJiYgc3RhdGUuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBzdGF0ZS5kb2M/LmxheWVycy5maW5kKFxuICAgICAgICAgICAgICAgIChsKSA9PiBsLmlkID09PSBzdGF0ZS5zZWxlY3Rpb25bMF0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQ6IExheWVyVHJhbnNmb3JtID0geyAuLi5sYXllciB9O1xuICAgICAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9PT0gXCJyb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGtpbmQ6IFwicm90YXRlXCIsIGlkOiBsYXllci5pZCwgc3RhcnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiBcInNjYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGhhbmRsZSBhcyBIYW5kbGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoXCJbZGF0YS1sYXllcmlkXVwiKVxuICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxheWVyaWRcIik7XG4gICAgICAgIGlmIChsYXllcklkKSB7XG4gICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGVkKGxheWVySWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVySWQpKSB7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKFtsYXllcklkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldFN0YXRlKCkuc2VsZWN0aW9uO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRzID0gbmV3IE1hcDxzdHJpbmcsIHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4oKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgZ2V0U3RhdGUoKS5kb2M/LmxheWVycyA/PyBbXSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhsYXllci5pZCkpXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0cy5zZXQobGF5ZXIuaWQsIHsgeDogbGF5ZXIueCwgeTogbGF5ZXIueSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBraW5kOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICBzdGFydFg6IHdvcmxkLngsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiB3b3JsZC55LFxuICAgICAgICAgICAgICAgIHN0YXJ0cyxcbiAgICAgICAgICAgICAgICBtb3ZlZDogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2VsZWN0aW9uKFtdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGU6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICBjb25zdCBnZXN0dXJlID0gZ2VzdHVyZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWdlc3R1cmUpIHJldHVybjtcblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcInBhblwiKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZVBhbihcbiAgICAgICAgICAgICAgICBnZXN0dXJlLnN0YXJ0UGFuWCArIChlLmNsaWVudFggLSBnZXN0dXJlLnN0YXJ0Q2xpZW50WCksXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5zdGFydFBhblkgKyAoZS5jbGllbnRZIC0gZ2VzdHVyZS5zdGFydENsaWVudFkpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmxkID0gc2NyZWVuVG9Xb3JsZChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJicnVzaFwiKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBicnVzaENhbnZhc1JlZi5jdXJyZW50Py5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoIWN0eCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRvYy53aWR0aCwgd29ybGQueCkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgubWF4KDAsIE1hdGgubWluKGRvYy5oZWlnaHQsIHdvcmxkLnkpKTtcbiAgICAgICAgICAgIGJydXNoU2VnbWVudChjdHgsIGdlc3R1cmUubGFzdFgsIGdlc3R1cmUubGFzdFksIHgsIHkpO1xuICAgICAgICAgICAgZ2VzdHVyZS5sYXN0WCA9IHg7XG4gICAgICAgICAgICBnZXN0dXJlLmxhc3RZID0geTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwiY3JvcFwiKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gd29ybGQueDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSB3b3JsZC55O1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBjcm9wUmVjdDogeyB4OiBNYXRoLm1pbihnZXN0dXJlLnN0YXJ0WCwgeCksIHk6IE1hdGgubWluKGdlc3R1cmUuc3RhcnRZLCB5KSwgdzogTWF0aC5hYnMoeCAtIGdlc3R1cmUuc3RhcnRYKSwgaDogTWF0aC5hYnMoeSAtIGdlc3R1cmUuc3RhcnRZKSB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJtb3ZlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gd29ybGQueCAtIGdlc3R1cmUuc3RhcnRYO1xuICAgICAgICAgICAgY29uc3QgZHkgPSB3b3JsZC55IC0gZ2VzdHVyZS5zdGFydFk7XG4gICAgICAgICAgICBpZiAoIWdlc3R1cmUubW92ZWQgJiYgTWF0aC5oeXBvdChkeCwgZHkpICogZ2V0U3RhdGUoKS52aWV3Lnpvb20gPCAyKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGdlc3R1cmUubW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHNuYXBwZWREeCA9IGR4O1xuICAgICAgICAgICAgbGV0IHNuYXBwZWREeSA9IGR5O1xuICAgICAgICAgICAgY29uc3QgbW92aW5nID0gWy4uLmdlc3R1cmUuc3RhcnRzLmtleXMoKV07XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycyA/PyBbXTtcbiAgICAgICAgICAgIGNvbnN0IGJveGVzID0gY3VycmVudC5maWx0ZXIoKGwpID0+IG1vdmluZy5pbmNsdWRlcyhsLmlkKSkubWFwKChsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBnZXN0dXJlLnN0YXJ0cy5nZXQobC5pZCkhO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHN0YXJ0LnggKyBkeCwgeTogc3RhcnQueSArIGR5LCB3OiBsLncsIGg6IGwuaCB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IHsgeDogTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLngpKSwgeTogTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLnkpKSwgcjogTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnggKyBiLncpKSwgYjogTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnkgKyBiLmgpKSB9O1xuICAgICAgICAgICAgY29uc3QgeEFuY2hvcnMgPSBbZ3JvdXAueCwgKGdyb3VwLnggKyBncm91cC5yKSAvIDIsIGdyb3VwLnJdO1xuICAgICAgICAgICAgY29uc3QgeUFuY2hvcnMgPSBbZ3JvdXAueSwgKGdyb3VwLnkgKyBncm91cC5iKSAvIDIsIGdyb3VwLmJdO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJzID0gY3VycmVudC5maWx0ZXIoKGwpID0+ICFtb3ZpbmcuaW5jbHVkZXMobC5pZCkgJiYgbC52aXNpYmxlKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFggPSBbMCwgZG9jLndpZHRoIC8gMiwgZG9jLndpZHRoLCAuLi5vdGhlcnMuZmxhdE1hcCgobCkgPT4gW2wueCwgbC54ICsgbC53IC8gMiwgbC54ICsgbC53XSldO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0WSA9IFswLCBkb2MuaGVpZ2h0IC8gMiwgZG9jLmhlaWdodCwgLi4ub3RoZXJzLmZsYXRNYXAoKGwpID0+IFtsLnksIGwueSArIGwuaCAvIDIsIGwueSArIGwuaF0pXTtcbiAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDYgLyBnZXRTdGF0ZSgpLnZpZXcuem9vbTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gdGhyZXNob2xkICsgMTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRZID0gdGhyZXNob2xkICsgMTtcbiAgICAgICAgICAgIGxldCBndWlkZVg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGxldCBndWlkZVk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHhBbmNob3JzKSBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRYKSBpZiAoTWF0aC5hYnModGFyZ2V0IC0gYW5jaG9yKSA8IE1hdGguYWJzKG9mZnNldFgpKSB7IG9mZnNldFggPSB0YXJnZXQgLSBhbmNob3I7IGd1aWRlWCA9IHRhcmdldDsgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBhbmNob3Igb2YgeUFuY2hvcnMpIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldFkpIGlmIChNYXRoLmFicyh0YXJnZXQgLSBhbmNob3IpIDwgTWF0aC5hYnMob2Zmc2V0WSkpIHsgb2Zmc2V0WSA9IHRhcmdldCAtIGFuY2hvcjsgZ3VpZGVZID0gdGFyZ2V0OyB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0WCkgPD0gdGhyZXNob2xkKSBzbmFwcGVkRHggKz0gb2Zmc2V0WDsgZWxzZSBndWlkZVggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMob2Zmc2V0WSkgPD0gdGhyZXNob2xkKSBzbmFwcGVkRHkgKz0gb2Zmc2V0WTsgZWxzZSBndWlkZVkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHNuYXBHdWlkZXM6IGd1aWRlWCA9PT0gdW5kZWZpbmVkICYmIGd1aWRlWSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHsgeDogZ3VpZGVYLCB5OiBndWlkZVkgfSB9KTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGNoZXMgPSBuZXcgTWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgc3RhcnRdIG9mIGdlc3R1cmUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hlcy5zZXQoaWQsIHsgeDogc3RhcnQueCArIHNuYXBwZWREeCwgeTogc3RhcnQueSArIHNuYXBwZWREeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5VHJhbnNpZW50KHBhdGNoZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gc2NhbGVGcm9tSGFuZGxlKFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuc3RhcnQsXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgd29ybGQsXG4gICAgICAgICAgICAgICAgZS5zaGlmdEtleSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhcHBseVRyYW5zaWVudChuZXcgTWFwKFtbZ2VzdHVyZS5pZCwgbmV4dF1dKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uRnJvbVBvaW50ZXIoZ2VzdHVyZS5zdGFydCwgd29ybGQsIGUuc2hpZnRLZXkpO1xuICAgICAgICBhcHBseVRyYW5zaWVudChuZXcgTWFwKFtbZ2VzdHVyZS5pZCwgeyByb3RhdGlvbiB9XV0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBvaW50ZXJVcCgpIHtcbiAgICAgICAgY29uc3QgZ2VzdHVyZSA9IGdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcGFubmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHNldFN0YXRlKHsgc25hcEd1aWRlczogbnVsbCB9KTtcbiAgICAgICAgaWYgKCFnZXN0dXJlIHx8IGdlc3R1cmUua2luZCA9PT0gXCJwYW5cIikgcmV0dXJuO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwiYnJ1c2hcIikge1xuICAgICAgICAgICAgZW5kQnJ1c2hHZXN0dXJlKCk7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBicnVzaENhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICAgICAgdm9pZCBwYWludEJydXNoU3Ryb2tlKHNyYywgYnJ1c2hPcGFjaXR5IC8gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImNyb3BcIikge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGdldFN0YXRlKCkuY3JvcFJlY3Q7XG4gICAgICAgICAgICBpZiAoIXJlY3QgfHwgcmVjdC53IDwgMiB8fCByZWN0LmggPCAyKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoeyBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0U3RhdGUoKS5zZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB2b2lkIGNyb3BTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGVsc2UgY3JvcENhbnZhcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXJzID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycyA/PyBbXTtcbiAgICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAobGF5ZXJzLm1hcCgobCkgPT4gW2wuaWQsIGxdKSk7XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJtb3ZlXCIpIHtcbiAgICAgICAgICAgIGlmICghZ2VzdHVyZS5tb3ZlZCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlczogVHJhbnNmb3JtQ2hhbmdlW10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBzdGFydF0gb2YgZ2VzdHVyZS5zdGFydHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IGJ5SWQuZ2V0KGlkKTtcbiAgICAgICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyOiB7IHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tbWl0VHJhbnNmb3JtcyhcIk1vdmVcIiwgY2hhbmdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXllciA9IGJ5SWQuZ2V0KGdlc3R1cmUuaWQpO1xuICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3LCBoIH0gPSBnZXN0dXJlLnN0YXJ0O1xuICAgICAgICAgICAgY29tbWl0VHJhbnNmb3JtcyhcIlJlc2l6ZVwiLCBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogeyB4LCB5LCB3LCBoIH0sXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiB7IHg6IGxheWVyLngsIHk6IGxheWVyLnksIHc6IGxheWVyLncsIGg6IGxheWVyLmggfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tbWl0VHJhbnNmb3JtcyhcIlJvdGF0ZVwiLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgIGJlZm9yZTogeyByb3RhdGlvbjogZ2VzdHVyZS5zdGFydC5yb3RhdGlvbiB9LFxuICAgICAgICAgICAgICAgIGFmdGVyOiB7IHJvdGF0aW9uOiBsYXllci5yb3RhdGlvbiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gaW1hZ2VGaWxlc0Zyb21EYXRhVHJhbnNmZXIoZS5kYXRhVHJhbnNmZXIpO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGF0ID0gc2NyZWVuVG9Xb3JsZChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IFByb21pc2UuYWxsKGZpbGVzLm1hcChmaWxlVG9JbXBvcnRlZEltYWdlKSk7XG4gICAgICAgIGFkZEltYWdlTGF5ZXJzKGltYWdlcywgYXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soZTogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGNvbnN0IGxheWVySWQgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCJbZGF0YS1sYXllcmlkXVwiKT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgICAgICBjb25zdCBkaXJlY3QgPSBzdGF0ZS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkICYmIGl0ZW0udGV4dCk7XG4gICAgICAgIGNvbnN0IHdvcmxkID0gc2NyZWVuVG9Xb3JsZChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGNvbnN0IGxheWVyID0gZGlyZWN0ID8/IFsuLi4oc3RhdGUuZG9jPy5sYXllcnMgPz8gW10pXS5yZXZlcnNlKCkuZmluZCgoaXRlbSkgPT4gaXRlbS52aXNpYmxlICYmIGl0ZW0udGV4dCAmJiBwb2ludEluc2lkZUxheWVyKGl0ZW0sIHdvcmxkKSk7XG4gICAgICAgIGlmIChsYXllcj8udGV4dCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYmVnaW5UZXh0RWRpdGluZyhsYXllci5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZExheWVycyA9IGRvYy5sYXllcnMuZmlsdGVyKFxuICAgICAgICAobCkgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGwuaWQpICYmIGwudmlzaWJsZSxcbiAgICApO1xuICAgIGNvbnN0IGN1cnNvciA9IHBhbk1vZGVcbiAgICAgICAgPyBwYW5uaW5nUmVmLmN1cnJlbnRcbiAgICAgICAgICAgID8gXCJncmFiYmluZ1wiXG4gICAgICAgICAgICA6IFwiZ3JhYlwiXG4gICAgICAgIDogdG9vbCA9PT0gXCJicnVzaFwiIHx8IHRvb2wgPT09IFwiY3JvcFwiIHx8IHRvb2wgPT09IFwidGV4dFwiID8gXCJjcm9zc2hhaXJcIiA6IFwiZGVmYXVsdFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYW52YXMtZG90cyBjYW52YXMtc3RhZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yIH19XG4gICAgICAgICAgICBvblBvaW50ZXJEb3duPXtvblBvaW50ZXJEb3dufVxuICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17b25Qb2ludGVyTW92ZX1cbiAgICAgICAgICAgIG9uUG9pbnRlclVwPXtvblBvaW50ZXJVcH1cbiAgICAgICAgICAgIG9uUG9pbnRlckNhbmNlbD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICBvbkRibENsaWNrPXtvbkRvdWJsZUNsaWNrfVxuICAgICAgICAgICAgb25EcmFnT3Zlcj17KGU6IERyYWdFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgb25Ecm9wPXsoZTogRHJhZ0V2ZW50KSA9PiB2b2lkIG9uRHJvcChlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dmlldy5wYW5YfXB4LCAke3ZpZXcucGFuWX1weCkgc2NhbGUoJHt2aWV3Lnpvb219KWAsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwIDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tlciBhcnRib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZG9jLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBkb2MuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RvYy5sYXllcnMubWFwKChsYXllcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyVmlldyBrZXk9e2xheWVyLmlkfSBsYXllcj17bGF5ZXJ9IGVkaXRpbmc9e3RleHRFZGl0aW5nPy5pZCA9PT0gbGF5ZXIuaWR9IHByZXZpZXdCbGVuZD17YmxlbmRQcmV2aWV3ICYmIHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkgPyBibGVuZFByZXZpZXcgOiB1bmRlZmluZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIHJlZj17YnJ1c2hDYW52YXNSZWZ9IGNsYXNzTmFtZT1cImJydXNoLW92ZXJsYXlcIiBzdHlsZT17eyBvcGFjaXR5OiBicnVzaE9wYWNpdHkgLyAxMDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RleHRFZGl0aW5nID8gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gdGV4dEVkaXRpbmcuaWQpLm1hcCgobGF5ZXIpID0+IDxJbmxpbmVUZXh0RWRpdG9yIGtleT17bGF5ZXIuaWR9IGxheWVyPXtsYXllcn0gLz4pIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IXRleHRFZGl0aW5nICYmICh0b29sID09PSBcIm1vdmVcIiB8fCB0b29sID09PSBcInRleHRcIikgPyBzZWxlY3RlZExheWVycy5tYXAoKGxheWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25Cb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tPXt2aWV3Lnpvb219XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGU9e3Rvb2wgPT09IFwibW92ZVwiICYmIHNlbGVjdGVkTGF5ZXJzLmxlbmd0aCA9PT0gMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKSA6IHRvb2wgPT09IFwiY3JvcFwiID8gc2VsZWN0ZWRMYXllcnMubWFwKChsYXllcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQm94IGtleT17bGF5ZXIuaWR9IGxheWVyPXtsYXllcn0gem9vbT17dmlldy56b29tfSBzaW5nbGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7c25hcEd1aWRlcz8ueCAhPT0gdW5kZWZpbmVkID8gPGRpdiBjbGFzc05hbWU9XCJzbmFwLWd1aWRlIHZlcnRpY2FsXCIgc3R5bGU9e3sgbGVmdDogc25hcEd1aWRlcy54LCBoZWlnaHQ6IGRvYy5oZWlnaHQgfX0gLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtzbmFwR3VpZGVzPy55ICE9PSB1bmRlZmluZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInNuYXAtZ3VpZGUgaG9yaXpvbnRhbFwiIHN0eWxlPXt7IHRvcDogc25hcEd1aWRlcy55LCB3aWR0aDogZG9jLndpZHRoIH19IC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dG9vbCA9PT0gXCJjcm9wXCIgJiYgY3JvcFJlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcC1ib3hcIiBzdHlsZT17eyBsZWZ0OiBjcm9wUmVjdC54LCB0b3A6IGNyb3BSZWN0LnksIHdpZHRoOiBjcm9wUmVjdC53LCBoZWlnaHQ6IGNyb3BSZWN0LmgsIGJvcmRlcldpZHRoOiAxLjUgLyB2aWV3Lnpvb20gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEgLyB2aWV3Lnpvb20sIHBhZGRpbmc6IGAkezIgLyB2aWV3Lnpvb219cHggJHs1IC8gdmlldy56b29tfXB4YCB9fT57TWF0aC5yb3VuZChjcm9wUmVjdC53KX0gXHUwMEQ3IHtNYXRoLnJvdW5kKGNyb3BSZWN0LmgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuXG50eXBlIEljb25Qcm9wcyA9IHsgY2xhc3NOYW1lPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZyB9O1xuXG5mdW5jdGlvbiBJY29uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgdGl0bGUgfTogSWNvblByb3BzICYgeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGFyaWEtaGlkZGVuPXt0aXRsZSA/IHVuZGVmaW5lZCA6IFwidHJ1ZVwifVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgcm9sZT17dGl0bGUgPyBcImltZ1wiIDogdW5kZWZpbmVkfVxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiMS44XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgID5cbiAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuICApO1xufVxuXG4vLyBLZXB0IGFzIGxvY2FsIGNvbXBvbmVudHMgYmVjYXVzZSBMYWtlYmVkIGNhcHN1bGVzIG9ubHkgYWxsb3cgTGFrZWJlZCBhbmRcbi8vIHJlbGF0aXZlIGltcG9ydHMuIFRoZSBBUEkgbWlycm9ycyB0aGUgc21hbGwgaWNvbiBjb21wb25lbnRzIGZyb20gcmVhY3QtaWNvbnMuXG5leHBvcnQgY29uc3QgRmlBcnJvd0xlZnQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTE5IDEySDVtNyA3LTctNyA3LTdcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDaGV2cm9uRG93biA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtNiA5IDYgNiA2LTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDb3B5ID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHJlY3QgeD1cIjlcIiB5PVwiOVwiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiIHJ4PVwiMVwiIC8+PHBhdGggZD1cIk01IDE1SDRhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoMTBhMSAxIDAgMCAxIDEgMXYxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRG93bmxvYWQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDN2MTJtLTQtNCA0IDQgNC00TTQgMjBoMTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlFZGl0MyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTIgMjBoOVwiIC8+PHBhdGggZD1cIk0xNi41IDMuNWEyLjEgMi4xIDAgMCAxIDMgM0w4IDE4bC00IDEgMS00WlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUV5ZSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMiAxMnMzLjUtNiAxMC02IDEwIDYgMTAgNi0zLjUgNi0xMCA2UzIgMTIgMiAxMlpcIiAvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMi41XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRXllT2ZmID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0zIDMgMTggMThNMTAuNiAxMC42YTIgMiAwIDAgMCAyLjggMi44TTkuOSA1LjJBMTEgMTEgMCAwIDEgMTIgNWM2LjUgMCAxMCA3IDEwIDdhMTYgMTYgMCAwIDEtMi4xIDMuMU02LjYgNi42QzMuNSA4LjQgMiAxMiAyIDEyczMuNSA3IDEwIDdhMTAgMTAgMCAwIDAgNC4xLS45XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpSGFuZCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNOCAxMVY2YTIgMiAwIDAgMSA0IDB2NC02YTIgMiAwIDAgMSA0IDB2Ni00YTIgMiAwIDAgMSA0IDB2N2E4IDggMCAwIDEtOCA4aC0xYTcgNyAwIDAgMS01LjctM0wyLjUgMTRhMiAyIDAgMCAxIDMtMi42TDggMTRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlJbWFnZSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiAvPjxjaXJjbGUgY3g9XCI4LjVcIiBjeT1cIjguNVwiIHI9XCIxLjVcIiAvPjxwYXRoIGQ9XCJtMjEgMTUtNS01TDUgMjFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlMYXllcnMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTEyIDIgMTAgNS0xMCA1TDIgN2wxMC01WlwiIC8+PHBhdGggZD1cIm0yIDEyIDEwIDUgMTAtNU0yIDE3bDEwIDUgMTAtNVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1pbnVzID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk01IDEyaDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpTW9vbiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMjEgMTNBOSA5IDAgMSAxIDExIDNhNyA3IDAgMCAwIDEwIDEwWlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1vdXNlUG9pbnRlciA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtNCAzIDcgMTcgMi4zLTYuN0wyMCAxMSA0IDNaXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpUGx1cyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTIgNXYxNE01IDEyaDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpUmVkbzIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTE1IDQgNSA1LTUgNVwiIC8+PHBhdGggZD1cIk0yMCA5aC05YTcgNyAwIDAgMC03IDd2MVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVN1biA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNFwiIC8+PHBhdGggZD1cIk0xMiAydjJtMCAxNnYyTTQuOSA0LjlsMS40IDEuNG0xMS40IDExLjQgMS40IDEuNE0yIDEyaDJtMTYgMGgyTTQuOSAxOS4xbDEuNC0xLjRNMTcuNyA2LjNsMS40LTEuNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVRyYXNoMiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMyA2aDE4TTggNlY0aDh2Mm0zIDAtMSAxNUg2TDUgNm01IDR2N200LTd2N1wiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVVuZG8yID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk05IDQgNCA5bDUgNVwiIC8+PHBhdGggZD1cIk00IDloOWE3IDcgMCAwIDEgNyA3djFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlVcGxvYWQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDE1VjNtLTQgNCA0LTQgNCA0TTQgMTR2NmgxNnYtNlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUJydXNoID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xNC41IDQuNSA1IDVMMTAgMTlINXYtNVpcIiAvPjxwYXRoIGQ9XCJtMTIgNyA1IDVNNSAxOWMtMS41IDAtMi41IDEtMi41IDJcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDcm9wID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk02IDJ2MTRhMiAyIDAgMCAwIDIgMmgxNE0yIDZoMTRhMiAyIDAgMCAxIDIgMnYxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVR5cGUgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTQgNVYzaDE2djJNOSAyMWg2TTEyIDN2MThcIiAvPjwvSWNvbj47XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgQkxFTkRfTU9ERVMsIHR5cGUgQmxlbmRNb2RlLCB0eXBlIFRleHRBbGlnbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGNvbW1pdFRyYW5zZm9ybXMsIHNldFNlbGVjdGlvbkJsZW5kTW9kZSwgdXBkYXRlVGV4dExheWVyIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5cbnR5cGUgRmllbGRQcm9wcyA9IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyOyBzdGVwPzogbnVtYmVyOyB1bml0Pzogc3RyaW5nOyBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlckZpZWxkKHsgbGFiZWwsIHZhbHVlLCBtaW4sIG1heCwgc3RlcCA9IDEsIHVuaXQgPSBcIlwiLCBvbkNoYW5nZSB9OiBGaWVsZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3Atc2xpZGVyXCI+XG4gICAgICA8bGFiZWw+PHNwYW4+e2xhYmVsfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJwcm9wLXZhbHVlXCI+e01hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwfXt1bml0fTwvc3Bhbj48L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17bWlufSBtYXg9e21heH0gc3RlcD17c3RlcH0gdmFsdWU9e3ZhbHVlfSBvbklucHV0PXsoZTogRXZlbnQpID0+IG9uQ2hhbmdlKE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSl9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOdW1iZXJGaWVsZCh7IGxhYmVsLCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXAgPSAxLCB1bml0ID0gXCJcIiwgb25DaGFuZ2UgfTogRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3AtbnVtYmVyXCI+XG4gICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyLXdyYXBcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17bWlufSBtYXg9e21heH0gc3RlcD17c3RlcH0gdmFsdWU9e01hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IG5leHQgPSBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobmV4dCkpIG9uQ2hhbmdlKE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBuZXh0KSkpOyB9fSAvPjxpPnt1bml0fTwvaT48L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duPFQgZXh0ZW5kcyBzdHJpbmc+KHsgbGFiZWwsIHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBUOyBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBUOyBsYWJlbDogc3RyaW5nIH0+OyBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB2b2lkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLXNlbGVjdFwiPjxzcGFuPntsYWJlbH08L3NwYW4+PHNlbGVjdCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IG9uQ2hhbmdlKChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlIGFzIFQpfT57b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5sYWJlbH08L29wdGlvbj4pfTwvc2VsZWN0PjwvbGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGUoeyBsYWJlbCwgY2hlY2tlZCwgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuOyBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQgfSkge1xuICByZXR1cm4gPGxhYmVsIGNsYXNzTmFtZT1cInByb3AtZmllbGQgcHJvcC10b2dnbGVcIj48c3Bhbj57bGFiZWx9PC9zcGFuPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZSgoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpfSAvPjxpIC8+PC9sYWJlbD47XG59XG5cbnR5cGUgSHN2ID0geyBoOiBudW1iZXI7IHM6IG51bWJlcjsgdjogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIGhleFJnYihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbGlkID0gL14jWzAtOWEtZl17Nn0kL2kudGVzdChoZXgpID8gaGV4IDogXCIjMDAwMDAwXCI7XG4gIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KHZhbGlkLnNsaWNlKDEsIDMpLCAxNiksIE51bWJlci5wYXJzZUludCh2YWxpZC5zbGljZSgzLCA1KSwgMTYpLCBOdW1iZXIucGFyc2VJbnQodmFsaWQuc2xpY2UoNSwgNyksIDE2KV07XG59XG5cbmZ1bmN0aW9uIHJnYkhleChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydCA9ICh2YWx1ZTogbnVtYmVyKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtwYXJ0KHIpfSR7cGFydChnKX0ke3BhcnQoYil9YDtcbn1cblxuZnVuY3Rpb24gcmdiSHN2KHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBIc3Yge1xuICBjb25zdCBbcm4sIGduLCBibl0gPSBbciAvIDI1NSwgZyAvIDI1NSwgYiAvIDI1NV07XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KHJuLCBnbiwgYm4pLCBtaW4gPSBNYXRoLm1pbihybiwgZ24sIGJuKSwgZCA9IG1heCAtIG1pbjtcbiAgbGV0IGggPSAwO1xuICBpZiAoZCkgaCA9IG1heCA9PT0gcm4gPyAoKGduIC0gYm4pIC8gZCkgJSA2IDogbWF4ID09PSBnbiA/IChibiAtIHJuKSAvIGQgKyAyIDogKHJuIC0gZ24pIC8gZCArIDQ7XG4gIHJldHVybiB7IGg6ICgoaCAqIDYwKSArIDM2MCkgJSAzNjAsIHM6IG1heCA/IGQgLyBtYXggOiAwLCB2OiBtYXggfTtcbn1cblxuZnVuY3Rpb24gaHN2UmdiKHsgaCwgcywgdiB9OiBIc3YpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBjID0gdiAqIHMsIHggPSBjICogKDEgLSBNYXRoLmFicygoKGggLyA2MCkgJSAyKSAtIDEpKSwgbSA9IHYgLSBjO1xuICBjb25zdCB2YWx1ZXMgPSBoIDwgNjAgPyBbYywgeCwgMF0gOiBoIDwgMTIwID8gW3gsIGMsIDBdIDogaCA8IDE4MCA/IFswLCBjLCB4XSA6IGggPCAyNDAgPyBbMCwgeCwgY10gOiBoIDwgMzAwID8gW3gsIDAsIGNdIDogW2MsIDAsIHhdO1xuICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWUpID0+ICh2YWx1ZSArIG0pICogMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvclBpY2tlcih7IHZhbHVlLCBvbkNoYW5nZSB9OiB7IHZhbHVlOiBzdHJpbmc7IG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleFJnYih2YWx1ZSk7XG4gIGNvbnN0IGhzdiA9IHJnYkhzdihyLCBnLCBiKTtcbiAgY29uc3QgaHVlSGV4ID0gcmdiSGV4KC4uLmhzdlJnYih7IGg6IGhzdi5oLCBzOiAxLCB2OiAxIH0pKTtcblxuICBmdW5jdGlvbiBzZXRIc3YobmV4dDogSHN2KSB7IG9uQ2hhbmdlKHJnYkhleCguLi5oc3ZSZ2IobmV4dCkpKTsgfVxuICBmdW5jdGlvbiBwaWNrU3YoZTogUG9pbnRlckV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHNldEhzdih7IGg6IGhzdi5oLCBzOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgpKSwgdjogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgMSAtIChlLmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodCkpIH0pO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGV5ZWRyb3AoKSB7XG4gICAgY29uc3QgRXllRHJvcHBlckN0b3IgPSAod2luZG93IGFzIHVua25vd24gYXMgeyBFeWVEcm9wcGVyPzogbmV3ICgpID0+IHsgb3BlbjogKCkgPT4gUHJvbWlzZTx7IHNSR0JIZXg6IHN0cmluZyB9PiB9IH0pLkV5ZURyb3BwZXI7XG4gICAgaWYgKCFFeWVEcm9wcGVyQ3RvcikgcmV0dXJuO1xuICAgIHRyeSB7IG9uQ2hhbmdlKChhd2FpdCBuZXcgRXllRHJvcHBlckN0b3IoKS5vcGVuKCkpLnNSR0JIZXgpOyB9IGNhdGNoIHsgLyogY2FuY2VsbGVkICovIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1waWNrZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtcGlja2VyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBodWVIZXggfX0gb25Qb2ludGVyRG93bj17cGlja1N2fSBvblBvaW50ZXJNb3ZlPXsoZTogUG9pbnRlckV2ZW50KSA9PiB7IGlmIChlLmJ1dHRvbnMgPT09IDEpIHBpY2tTdihlKTsgfX0+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGxlZnQ6IGAke2hzdi5zICogMTAwfSVgLCB0b3A6IGAkeygxIC0gaHN2LnYpICogMTAwfSVgIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJodWUtc2xpZGVyXCIgYXJpYS1sYWJlbD1cIkh1ZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj17MH0gbWF4PXszNTl9IHZhbHVlPXtNYXRoLnJvdW5kKGhzdi5oKX0gb25JbnB1dD17KGU6IEV2ZW50KSA9PiBzZXRIc3YoeyAuLi5oc3YsIGg6IE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSB9KX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itcm93XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrZXIgY29sb3Itc3dhdGNoXCI+PGkgc3R5bGU9e3sgYmFja2dyb3VuZDogdmFsdWUgfX0gLz48L3NwYW4+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoZXgtaW5wdXRcIiBhcmlhLWxhYmVsPVwiSGV4IGNvbG9yXCIgdmFsdWU9e3ZhbHVlLnRvVXBwZXJDYXNlKCl9IG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IHsgY29uc3QgbmV4dCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7IGlmICgvXiNbMC05YS1mXXs2fSQvaS50ZXN0KG5leHQpKSBvbkNoYW5nZShuZXh0KTsgfX0gLz5cbiAgICAgICAgeyh3aW5kb3cgYXMgdW5rbm93biBhcyB7IEV5ZURyb3BwZXI/OiB1bmtub3duIH0pLkV5ZURyb3BwZXIgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJleWVkcm9wcGVyXCIgdGl0bGU9XCJQaWNrIGNvbG9yIGZyb20gc2NyZWVuXCIgb25DbGljaz17KCkgPT4gdm9pZCBleWVkcm9wKCl9Plx1MjMzRTwvYnV0dG9uPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmdiLXJvd1wiPnsoW3IsIGcsIGJdIGFzIG51bWJlcltdKS5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiA8bGFiZWwga2V5PXtpbmRleH0+PHNwYW4+e1wiUkdCXCJbaW5kZXhdfTwvc3Bhbj48aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbWF4PXsyNTV9IHZhbHVlPXtjaGFubmVsfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IHJnYiA9IFtyLCBnLCBiXTsgcmdiW2luZGV4XSA9IE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTsgb25DaGFuZ2UocmdiSGV4KHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pKTsgfX0gLz48L2xhYmVsPil9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGlvblByb3BlcnRpZXMoeyBsYXllcklkIH06IHsgbGF5ZXJJZDogc3RyaW5nIH0pIHtcbiAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gIGNvbnN0IGxheWVyID0gZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybiBudWxsO1xuICBmdW5jdGlvbiBjaGFuZ2Uoa2V5OiBcIm9wYWNpdHlcIiB8IFwidmlzaWJsZVwiLCB2YWx1ZTogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJQcm9wZXJ0aWVzXCIsIFt7IGlkOiBsYXllcklkLCBiZWZvcmU6IHsgW2tleV06IGN1cnJlbnRba2V5XSB9LCBhZnRlcjogeyBba2V5XTogdmFsdWUgfSB9XSk7XG4gIH1cbiAgcmV0dXJuIDw+XG4gICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiT3BhY2l0eVwiIHZhbHVlPXtNYXRoLnJvdW5kKGxheWVyLm9wYWNpdHkgKiAxMDApfSBtaW49ezB9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gY2hhbmdlKFwib3BhY2l0eVwiLCB2IC8gMTAwKX0gLz5cbiAgICA8RHJvcGRvd248QmxlbmRNb2RlPiBsYWJlbD1cIkJsZW5kXCIgdmFsdWU9e2xheWVyLmJsZW5kTW9kZX0gb3B0aW9ucz17QkxFTkRfTU9ERVMubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIGxhYmVsOiB2YWx1ZS5yZXBsYWNlKC8tL2csIFwiIFwiKS5yZXBsYWNlKC9eLi8sIChsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKSB9KSl9IG9uQ2hhbmdlPXtzZXRTZWxlY3Rpb25CbGVuZE1vZGV9IC8+XG4gICAgPFRvZ2dsZSBsYWJlbD1cIlZpc2libGVcIiBjaGVja2VkPXtsYXllci52aXNpYmxlfSBvbkNoYW5nZT17KHYpID0+IGNoYW5nZShcInZpc2libGVcIiwgdil9IC8+XG4gIDwvPjtcbn1cblxuZnVuY3Rpb24gVGV4dERlZmF1bHRzKCkge1xuICBjb25zdCBmb250RmFtaWx5ID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRGb250RmFtaWx5KTtcbiAgY29uc3QgZm9udFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEZvbnRTaXplKTtcbiAgY29uc3QgZm9udFdlaWdodCA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0Rm9udFdlaWdodCk7XG4gIGNvbnN0IGFsaWduID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRBbGlnbik7XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dExpbmVIZWlnaHQpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb24gdGV4dC1wcm9wZXJ0aWVzXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidG9vbC1oaW50XCI+Q2xpY2sgdGhlIGNhbnZhcyB0byBhZGQgdGV4dC48L3A+XG4gICAgPERyb3Bkb3duIGxhYmVsPVwiRm9udFwiIHZhbHVlPXtmb250RmFtaWx5fSBvcHRpb25zPXtbXCJJbnN0cnVtZW50IFNhbnNcIiwgXCJJbnRlclwiLCBcIklCTSBQbGV4IE1vbm9cIiwgXCJBcmlhbFwiLCBcIkdlb3JnaWFcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIlRpbWVzIE5ldyBSb21hblwiXS5tYXAoKHZhbHVlKSA9PiAoeyB2YWx1ZSwgbGFiZWw6IHZhbHVlIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRGb250RmFtaWx5OiB2IH0pfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1ncmlkXCI+PE51bWJlckZpZWxkIGxhYmVsPVwiU2l6ZVwiIHZhbHVlPXtmb250U2l6ZX0gbWluPXs2fSBtYXg9ezUwMH0gdW5pdD1cInB4XCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRGb250U2l6ZTogdiB9KX0gLz48RHJvcGRvd24gbGFiZWw9XCJXZWlnaHRcIiB2YWx1ZT17U3RyaW5nKGZvbnRXZWlnaHQpfSBvcHRpb25zPXtbMTAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsOTAwXS5tYXAoKHYpID0+ICh7IHZhbHVlOiBTdHJpbmcodiksIGxhYmVsOiBTdHJpbmcodikgfSkpfSBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgdGV4dEZvbnRXZWlnaHQ6IE51bWJlcih2KSB9KX0gLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3AtZmllbGRcIj48c3Bhbj5BbGlnbm1lbnQ8L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJzZWdtZW50LWNvbnRyb2xcIj57KFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSBhcyBUZXh0QWxpZ25bXSkubWFwKCh2YWx1ZSkgPT4gPGJ1dHRvbiBrZXk9e3ZhbHVlfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXthbGlnbiA9PT0gdmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyB0ZXh0QWxpZ246IHZhbHVlIH0pfT57dmFsdWVbMF0udG9VcHBlckNhc2UoKX08L2J1dHRvbj4pfTwvZGl2PjwvZGl2PlxuICAgIDxOdW1iZXJGaWVsZCBsYWJlbD1cIkxpbmUgaGVpZ2h0XCIgdmFsdWU9e2xpbmVIZWlnaHR9IG1pbj17MC42fSBtYXg9ezN9IHN0ZXA9ezAuMDV9IG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyB0ZXh0TGluZUhlaWdodDogdiB9KX0gLz5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydGllc1BhbmVsKHsgaGVpZ2h0IH06IHsgaGVpZ2h0PzogbnVtYmVyIH0pIHtcbiAgY29uc3QgdG9vbCA9IHVzZUVkaXRvcigocykgPT4gcy50b29sKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLnNlbGVjdGlvbik7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBicnVzaFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hTaXplKTtcbiAgY29uc3QgYnJ1c2hIYXJkbmVzcyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEhhcmRuZXNzKTtcbiAgY29uc3QgYnJ1c2hPcGFjaXR5ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoT3BhY2l0eSk7XG4gIGNvbnN0IGJydXNoRmxvdyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEZsb3cpO1xuICBjb25zdCBzZWxlY3RlZCA9IGRvYz8ubGF5ZXJzLmZpbmQoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGggLSAxXSk7XG4gIGNvbnN0IHRleHQgPSBzZWxlY3RlZD8udGV4dDtcbiAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRleHQpIHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiB0ZXh0LmNvbG9yIH0pOyB9LCBbc2VsZWN0ZWQ/LmlkXSk7XG5cbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcGFuZWxcIiBzdHlsZT17aGVpZ2h0ID8geyBoZWlnaHQgfSA6IHVuZGVmaW5lZH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkXCI+PHNwYW4+e3Rvb2wgPT09IFwiYnJ1c2hcIiA/IFwiQnJ1c2hcIiA6IHRvb2wgPT09IFwidGV4dFwiIHx8IHRleHQgPyBcIlRleHRcIiA6IHNlbGVjdGVkID8gXCJQcm9wZXJ0aWVzXCIgOiBcIkNhbnZhc1wifTwvc3Bhbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtYm9keVwiPlxuICAgICAge3Rvb2wgPT09IFwiYnJ1c2hcIiA/IDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uXCI+XG4gICAgICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIlNpemVcIiB2YWx1ZT17YnJ1c2hTaXplfSBtaW49ezF9IG1heD17MzAwfSB1bml0PVwicHhcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hTaXplOiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJIYXJkbmVzc1wiIHZhbHVlPXticnVzaEhhcmRuZXNzfSBtaW49ezB9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyBicnVzaEhhcmRuZXNzOiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJPcGFjaXR5XCIgdmFsdWU9e2JydXNoT3BhY2l0eX0gbWluPXsxfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hPcGFjaXR5OiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJGbG93XCIgdmFsdWU9e2JydXNoRmxvd30gbWluPXsxfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hGbG93OiB2IH0pfSAvPlxuICAgICAgPC9kaXY+IDogdGV4dCAmJiBzZWxlY3RlZCA/IDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uIHRleHQtcHJvcGVydGllc1wiPlxuICAgICAgICA8RHJvcGRvd24gbGFiZWw9XCJGb250XCIgdmFsdWU9e3RleHQuZm9udEZhbWlseX0gb3B0aW9ucz17W1wiSW5zdHJ1bWVudCBTYW5zXCIsIFwiSW50ZXJcIiwgXCJJQk0gUGxleCBNb25vXCIsIFwiQXJpYWxcIiwgXCJHZW9yZ2lhXCIsIFwiQ291cmllciBOZXdcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIl0ubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIGxhYmVsOiB2YWx1ZSB9KSl9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGZvbnRGYW1pbHk6IHYgfSwgXCJGb250XCIpfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3AtZ3JpZFwiPjxOdW1iZXJGaWVsZCBsYWJlbD1cIlNpemVcIiB2YWx1ZT17dGV4dC5mb250U2l6ZX0gbWluPXs2fSBtYXg9ezUwMH0gdW5pdD1cInB4XCIgb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgZm9udFNpemU6IHYgfSwgXCJUZXh0IHNpemVcIil9IC8+PERyb3Bkb3duIGxhYmVsPVwiV2VpZ2h0XCIgdmFsdWU9e1N0cmluZyh0ZXh0LmZvbnRXZWlnaHQpfSBvcHRpb25zPXtbMTAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsOTAwXS5tYXAoKHYpID0+ICh7IHZhbHVlOiBTdHJpbmcodiksIGxhYmVsOiBTdHJpbmcodikgfSkpfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBmb250V2VpZ2h0OiBOdW1iZXIodikgfSwgXCJUZXh0IHdlaWdodFwiKX0gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWZpZWxkXCI+PHNwYW4+QWxpZ25tZW50PC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwic2VnbWVudC1jb250cm9sXCI+eyhbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0gYXMgVGV4dEFsaWduW10pLm1hcCgoYWxpZ24pID0+IDxidXR0b24ga2V5PXthbGlnbn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17dGV4dC5hbGlnbiA9PT0gYWxpZ24gPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGFsaWduIH0sIFwiVGV4dCBhbGlnbm1lbnRcIil9PnthbGlnblswXS50b1VwcGVyQ2FzZSgpfTwvYnV0dG9uPil9PC9kaXY+PC9kaXY+XG4gICAgICAgIDxOdW1iZXJGaWVsZCBsYWJlbD1cIkxpbmUgaGVpZ2h0XCIgdmFsdWU9e3RleHQubGluZUhlaWdodH0gbWluPXswLjZ9IG1heD17M30gc3RlcD17MC4wNX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgbGluZUhlaWdodDogdiB9LCBcIkxpbmUgaGVpZ2h0XCIpfSAvPlxuICAgICAgPC9kaXY+IDogdG9vbCA9PT0gXCJ0ZXh0XCIgPyA8VGV4dERlZmF1bHRzIC8+IDogc2VsZWN0ZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInByb3Atc2VjdGlvblwiPjxTZWxlY3Rpb25Qcm9wZXJ0aWVzIGxheWVySWQ9e3NlbGVjdGVkLmlkfSAvPjwvZGl2PiA6IDxwIGNsYXNzTmFtZT1cInByb3BlcnRpZXMtZW1wdHlcIj5TZWxlY3QgYSBsYXllciBvciBjaG9vc2UgYSB0b29sLjwvcD59XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj47XG59XG4iLCAiLy8gTGF5ZXJzIHBhbmVsOiB0b3AtZmlyc3QgbGlzdCB3aXRoIHZpc2liaWxpdHkgdG9nZ2xlcywgaW5saW5lIHJlbmFtZSxcbi8vIGRyYWctdG8tcmVvcmRlciwgYW4gb3BhY2l0eSBzbGlkZXIsIGFuZCBkdXBsaWNhdGUvZGVsZXRlIGFjdGlvbnMuXG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBjbGVhbk5hbWUsIHR5cGUgTGF5ZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQge1xuICAgIGFkZEJsYW5rTGF5ZXIsXG4gICAgcmVuYW1lTGF5ZXIsXG4gICAgcmVvcmRlckxheWVyLFxuICAgIHNldFNlbGVjdGlvbixcbiAgICB0b2dnbGVTZWxlY3RlZCxcbiAgICB0b2dnbGVWaXNpYmxlLFxufSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlQXNzZXRFbnRyeSwgZGlzcGxheVNyYyB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgRmlFeWUsIEZpRXllT2ZmLCBGaUxheWVycywgRmlQbHVzIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IFByb3BlcnRpZXNQYW5lbCB9IGZyb20gXCIuL1Byb3BlcnRpZXNQYW5lbFwiO1xuXG5mdW5jdGlvbiBMYXllclRodW1iKHsgbGF5ZXIgfTogeyBsYXllcjogTGF5ZXIgfSkge1xuICAgIGNvbnN0IGFzc2V0ID0gdXNlQXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2VyIGxheWVyLXRodW1iXCI+XG4gICAgICAgICAgICB7YXNzZXQgPyA8aW1nIGFsdD1cIlwiIHNyYz17ZGlzcGxheVNyYyhhc3NldCl9IGRyYWdnYWJsZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIExheWVyUm93Vmlldyh7XG4gICAgbGF5ZXIsXG4gICAgZGlzcGxheUluZGV4LFxuICAgIHNlbGVjdGVkLFxuICAgIG9uRHJhZ0Zyb20sXG4gICAgZHJvcE1hcmssXG59OiB7XG4gICAgbGF5ZXI6IExheWVyO1xuICAgIGRpc3BsYXlJbmRleDogbnVtYmVyO1xuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIG9uRHJhZ0Zyb206IChzbG90OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgZHJvcE1hcms6IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IG51bGw7XG59KSB7XG4gICAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gY29tbWl0UmVuYW1lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgcmVuYW1lTGF5ZXIobGF5ZXIuaWQsIGNsZWFuTmFtZShpbnB1dC52YWx1ZSwgbGF5ZXIubmFtZSkpO1xuICAgICAgICBzZXRFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICAgIGRyYWdnYWJsZT17IWVkaXRpbmd9XG4gICAgICAgICAgICBkYXRhLWRpc3BsYXktaW5kZXg9e2Rpc3BsYXlJbmRleH1cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIFN0cmluZyhkaXNwbGF5SW5kZXgpKTtcbiAgICAgICAgICAgICAgICBvbkRyYWdGcm9tKGRpc3BsYXlJbmRleCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkgdG9nZ2xlU2VsZWN0ZWQobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGxheWVyLXJvdyAke3NlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gJHtsYXllci52aXNpYmxlID8gXCJcIiA6IFwiaGlkZGVuXCJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Ryb3BNYXJrID8gPHNwYW4gY2xhc3NOYW1lPXtgZHJvcC1tYXJrICR7ZHJvcE1hcmt9YH0gLz4gOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtsYXllci52aXNpYmxlID8gXCJIaWRlIGxheWVyXCIgOiBcIlNob3cgbGF5ZXJcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVWaXNpYmxlKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpc2liaWxpdHlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYXllci52aXNpYmxlID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGF5ZXJUaHVtYiBsYXllcj17bGF5ZXJ9IC8+XG4gICAgICAgICAgICB7ZWRpdGluZyA/IChcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtjb21taXRSZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBzZXRFZGl0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT4gc2V0RWRpdGluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyc1BhbmVsKCkge1xuICAgIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICAgIGNvbnN0IFtkcm9wU2xvdCwgc2V0RHJvcFNsb3RdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3BhbmVsV2lkdGgsIHNldFBhbmVsV2lkdGhdID0gdXNlU3RhdGUoKCkgPT4gTWF0aC5tYXgoMjIwLCBNYXRoLm1pbig0MjAsIE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlLWVkaXRvci1wYW5lbC13aWR0aFwiKSkgfHwgMjQ0KSkpO1xuICAgIGNvbnN0IFtwcm9wZXJ0aWVzSGVpZ2h0LCBzZXRQcm9wZXJ0aWVzSGVpZ2h0XSA9IHVzZVN0YXRlKCgpID0+IE1hdGgubWF4KDE1MCwgTWF0aC5taW4oNTAwLCBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItcHJvcGVydGllcy1oZWlnaHRcIikpIHx8IDIzMCkpKTtcbiAgICBjb25zdCBkcmFnRnJvbVJlZiA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBwYW5lbFJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBEaXNwbGF5IG9yZGVyIGlzIHRvcCBsYXllciBmaXJzdDsgdGhlIGRvYyBzdG9yZXMgYm90dG9tLWZpcnN0LlxuICAgIGNvbnN0IGRpc3BsYXkgPSBbLi4uZG9jLmxheWVyc10ucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGNvdW50ID0gZG9jLmxheWVycy5sZW5ndGg7XG5cbiAgICBmdW5jdGlvbiBzbG90RnJvbUV2ZW50KGU6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHJvdyA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdChcIltkYXRhLWRpc3BsYXktaW5kZXhdXCIpO1xuICAgICAgICBpZiAoIXJvdykgcmV0dXJuIGRyb3BTbG90ID8/IDA7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHJvdy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpc3BsYXktaW5kZXhcIikpO1xuICAgICAgICBjb25zdCByZWN0ID0gcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gZS5jbGllbnRZIDwgcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIgPyBpbmRleCA6IGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRyb3AoZTogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZnJvbSA9IGRyYWdGcm9tUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkcm9wU2xvdDtcbiAgICAgICAgZHJhZ0Zyb21SZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHNldERyb3BTbG90KG51bGwpO1xuICAgICAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCBzbG90ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGFkanVzdGVkID0gc2xvdCA+IGZyb20gPyBzbG90IC0gMSA6IHNsb3Q7XG4gICAgICAgIGlmIChhZGp1c3RlZCA9PT0gZnJvbSkgcmV0dXJuO1xuICAgICAgICAvLyBDb252ZXJ0IGRpc3BsYXkgY29vcmRpbmF0ZXMgKHRvcC1maXJzdCkgdG8gZG9jIGNvb3JkaW5hdGVzIChib3R0b20tZmlyc3QpLlxuICAgICAgICByZW9yZGVyTGF5ZXIoY291bnQgLSAxIC0gZnJvbSwgY291bnQgLSAxIC0gYWRqdXN0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UmVzaXplKGtpbmQ6IFwid2lkdGhcIiB8IFwicHJvcGVydGllc1wiLCBldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHBhbmVsVG9wID0gcGFuZWxSZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID8/IDA7XG4gICAgICAgIGNvbnN0IG9uTW92ZSA9IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcIndpZHRoXCIpIHNldFBhbmVsV2lkdGgoTWF0aC5tYXgoMjIwLCBNYXRoLm1pbig0MjAsIHdpbmRvdy5pbm5lcldpZHRoIC0gZS5jbGllbnRYKSkpO1xuICAgICAgICAgICAgZWxzZSBzZXRQcm9wZXJ0aWVzSGVpZ2h0KE1hdGgubWF4KDE1MCwgTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0ICogMC43LCBlLmNsaWVudFkgLSBwYW5lbFRvcCkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb25VcCA9IChlOiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgICAgIG9uTW92ZShlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvbk1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvblVwKTtcbiAgICAgICAgICAgIGlmIChraW5kID09PSBcIndpZHRoXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXBhbmVsLXdpZHRoXCIsIFN0cmluZyhNYXRoLm1heCgyMjAsIE1hdGgubWluKDQyMCwgd2luZG93LmlubmVyV2lkdGggLSBlLmNsaWVudFgpKSkpO1xuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwicHJvcGVydGllc1wiKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlLWVkaXRvci1wcm9wZXJ0aWVzLWhlaWdodFwiLCBTdHJpbmcoTWF0aC5tYXgoMTUwLCBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjcsIGUuY2xpZW50WSAtIHBhbmVsVG9wKSkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgb25VcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlIHJlZj17cGFuZWxSZWZ9IGNsYXNzTmFtZT1cImxheWVycy1wYW5lbFwiIHN0eWxlPXt7IHdpZHRoOiBwYW5lbFdpZHRoIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC13aWR0aC1yZXNpemVyXCIgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gc3RhcnRSZXNpemUoXCJ3aWR0aFwiLCBlKX0gLz5cbiAgICAgICAgICAgIDxQcm9wZXJ0aWVzUGFuZWwgaGVpZ2h0PXtwcm9wZXJ0aWVzSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzLXJlc2l6ZXJcIiBvblBvaW50ZXJEb3duPXsoZTogUG9pbnRlckV2ZW50KSA9PiBzdGFydFJlc2l6ZShcInByb3BlcnRpZXNcIiwgZSl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWQgbGF5ZXJzLWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8RmlMYXllcnMgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5MYXllcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1hZGRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRCbGFua0xheWVyKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItbGlzdFwiXG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldERyb3BTbG90KHNsb3RGcm9tRXZlbnQoZSkpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldERyb3BTbG90KG51bGwpfVxuICAgICAgICAgICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkaXNwbGF5Lm1hcCgobGF5ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMYXllclJvd1ZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdGcm9tPXsoc2xvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdGcm9tUmVmLmN1cnJlbnQgPSBzbG90O1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXJrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wU2xvdCA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFib3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkcm9wU2xvdCA9PT0gaW5kZXggKyAxICYmIGluZGV4ID09PSBjb3VudCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmVsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtjb3VudCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vLWxheWVyc1wiPk5vIGxheWVycyB5ZXQuPC9saT5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKTtcbn1cbiIsICIvLyBMZWZ0IHRvb2wgcmFpbDogbW92ZSAvIGhhbmQgdG9vbHMuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZpbmlzaFRleHRFZGl0aW5nLCB1cGRhdGVUZXh0TGF5ZXIgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgc2V0U3RhdGUsIHVzZUVkaXRvciwgdHlwZSBUb29sIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyBGaUJydXNoLCBGaUNyb3AsIEZpSGFuZCwgRmlNb3VzZVBvaW50ZXIsIEZpVHlwZSB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBDb2xvclBpY2tlciB9IGZyb20gXCIuL1Byb3BlcnRpZXNQYW5lbFwiO1xuXG5jb25zdCBUT09MUzogQXJyYXk8eyBpZDogVG9vbDsgbGFiZWw6IHN0cmluZzsgaGludDogc3RyaW5nOyBpY29uOiB0eXBlb2YgRmlIYW5kIH0+ID0gW1xuICB7IGlkOiBcIm1vdmVcIiwgbGFiZWw6IFwiTW92ZVwiLCBoaW50OiBcIlZcIiwgaWNvbjogRmlNb3VzZVBvaW50ZXIgfSxcbiAgeyBpZDogXCJoYW5kXCIsIGxhYmVsOiBcIkhhbmRcIiwgaGludDogXCJIXCIsIGljb246IEZpSGFuZCB9LFxuICB7IGlkOiBcInRleHRcIiwgbGFiZWw6IFwiVGV4dFwiLCBoaW50OiBcIlRcIiwgaWNvbjogRmlUeXBlIH0sXG4gIHsgaWQ6IFwiYnJ1c2hcIiwgbGFiZWw6IFwiQnJ1c2hcIiwgaGludDogXCJCXCIsIGljb246IEZpQnJ1c2ggfSxcbiAgeyBpZDogXCJjcm9wXCIsIGxhYmVsOiBcIkNyb3BcIiwgaGludDogXCJDXCIsIGljb246IEZpQ3JvcCB9XG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9vbGJhcigpIHtcbiAgY29uc3QgdG9vbCA9IHVzZUVkaXRvcigocykgPT4gcy50b29sKTtcbiAgY29uc3QgZm9yZWdyb3VuZENvbG9yID0gdXNlRWRpdG9yKChzKSA9PiBzLmZvcmVncm91bmRDb2xvcik7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHVzZUVkaXRvcigocykgPT4gcy5iYWNrZ3JvdW5kQ29sb3IpO1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gIGNvbnN0IHNlbGVjdGVkVGV4dCA9IGRvYz8ubGF5ZXJzLmZpbmQoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGggLSAxXSAmJiBsYXllci50ZXh0KTtcbiAgY29uc3QgW2NvbG9yT3Blbiwgc2V0Q29sb3JPcGVuXSA9IHVzZVN0YXRlPFwiZm9yZWdyb3VuZFwiIHwgXCJiYWNrZ3JvdW5kXCIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgdGV4dENvbG9yVGltZXIgPSB1c2VSZWY8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0ZXh0Q29sb3JUaW1lci5jdXJyZW50KSwgW10pO1xuXG4gIGZ1bmN0aW9uIHNldEZvcmVncm91bmQodmFsdWU6IHN0cmluZykge1xuICAgIHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiB2YWx1ZSB9KTtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRleHRDb2xvclRpbWVyLmN1cnJlbnQpO1xuICAgIGlmIChzZWxlY3RlZFRleHQ/LnRleHQpIHRleHRDb2xvclRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWRUZXh0LmlkLCB7IGNvbG9yOiB2YWx1ZSB9LCBcIlRleHQgY29sb3JcIiksIDE4MCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwidG9vbC1yYWlsXCI+XG4gICAgICB7VE9PTFMubWFwKCh0KSA9PiB7XG4gICAgICAgIGNvbnN0IFRvb2xJY29uID0gdC5pY29uO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17dC5pZH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e2Ake3QubGFiZWx9ICgke3QuaGludH0pYH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QubGFiZWx9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGZpbmlzaFRleHRFZGl0aW5nKCk7IHNldFN0YXRlKHsgdG9vbDogdC5pZCB9KTsgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvb2wtYnV0dG9uICR7dG9vbCA9PT0gdC5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvb2xJY29uIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1jb2xvcnNcIiB0aXRsZT1cIkZvcmVncm91bmQgLyBiYWNrZ3JvdW5kIGNvbG9yc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJnbG9iYWwtc3dhdGNoIGJhY2tncm91bmRcIiBhcmlhLWxhYmVsPVwiRWRpdCBiYWNrZ3JvdW5kIGNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZENvbG9yIH19IG9uQ2xpY2s9eygpID0+IHNldENvbG9yT3Blbihjb2xvck9wZW4gPT09IFwiYmFja2dyb3VuZFwiID8gbnVsbCA6IFwiYmFja2dyb3VuZFwiKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLXN3YXRjaCBmb3JlZ3JvdW5kXCIgYXJpYS1sYWJlbD1cIkVkaXQgZm9yZWdyb3VuZCBjb2xvclwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IGZvcmVncm91bmRDb2xvciB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvck9wZW4oY29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IG51bGwgOiBcImZvcmVncm91bmRcIil9IC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInN3YXAtY29sb3JzXCIgdGl0bGU9XCJTd2FwIGNvbG9ycyAoWClcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IGZvcmVncm91bmRDb2xvciB9KX0+XHUyMTk3PC9idXR0b24+XG4gICAgICAgIHtjb2xvck9wZW4gPyA8ZGl2IGNsYXNzTmFtZT1cInRvb2wtY29sb3ItcG9wb3ZlclwiIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PjxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcG9wb3Zlci1oZWFkXCI+PHNwYW4+e2NvbG9yT3BlbiA9PT0gXCJmb3JlZ3JvdW5kXCIgPyBcIkZvcmVncm91bmRcIiA6IFwiQmFja2dyb3VuZFwifTwvc3Bhbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvck9wZW4obnVsbCl9Plx1MDBENzwvYnV0dG9uPjwvZGl2PjxDb2xvclBpY2tlciB2YWx1ZT17Y29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IGZvcmVncm91bmRDb2xvciA6IGJhY2tncm91bmRDb2xvcn0gb25DaGFuZ2U9e2NvbG9yT3BlbiA9PT0gXCJmb3JlZ3JvdW5kXCIgPyBzZXRGb3JlZ3JvdW5kIDogKHZhbHVlKSA9PiBzZXRTdGF0ZSh7IGJhY2tncm91bmRDb2xvcjogdmFsdWUgfSl9IC8+PC9kaXY+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4gfSBmcm9tIFwiLi9JY29uc1wiO1xuXG50eXBlIFRoZW1lID0gXCJsaWdodFwiIHwgXCJkYXJrXCI7XG5cbmZ1bmN0aW9uIHByZWZlcnJlZFRoZW1lKCk6IFRoZW1lIHtcbiAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlLWVkaXRvci10aGVtZVwiKTtcbiAgaWYgKHNhdmVkID09PSBcImxpZ2h0XCIgfHwgc2F2ZWQgPT09IFwiZGFya1wiKSByZXR1cm4gc2F2ZWQ7XG4gIHJldHVybiBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZTxUaGVtZT4oKCkgPT4gcHJlZmVycmVkVGhlbWUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9IHRoZW1lO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXRoZW1lXCIsIHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgY29uc3QgbmV4dCA9IHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24gdGhlbWUtdG9nZ2xlXCJcbiAgICAgIGFyaWEtbGFiZWw9e2BTd2l0Y2ggdG8gJHtuZXh0fSBtb2RlYH1cbiAgICAgIHRpdGxlPXtgU3dpdGNoIHRvICR7bmV4dH0gbW9kZWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShuZXh0KX1cbiAgICA+XG4gICAgICB7dGhlbWUgPT09IFwiZGFya1wiID8gPEZpU3VuIC8+IDogPEZpTW9vbiAvPn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiIsICIvLyBFZGl0b3IgY2hyb21lOiBiYWNrIGxpbmssIHByb2plY3QgbmFtZSwgdW5kby9yZWRvLCB6b29tLCBleHBvcnQsIGFuZCB0aGVcbi8vIHBlcnNpc3RlbmNlIHN0YXR1cyBpbmRpY2F0b3IgZmVkIGJ5IHRoZSB3cml0ZS1iZWhpbmQgcXVldWUuXG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50Q2hpbGRyZW4gfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBjbGVhbk5hbWUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBkb3dubG9hZFBuZyB9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XG5pbXBvcnQgeyBhZGRJbWFnZUxheWVycywgcmVuYW1lUHJvamVjdCB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjYW5SZWRvLCBjYW5VbmRvLCByZWRvLCB1bmRvIH0gZnJvbSBcIi4uL3N0YXRlL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFN0YXRlLCB1c2VFZGl0b3IgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IHJlcXVlc3RGaXQsIHpvb21CeSB9IGZyb20gXCIuLi9zdGF0ZS92aWV3XCI7XG5pbXBvcnQgeyBmaWxlVG9JbXBvcnRlZEltYWdlIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBGaUFycm93TGVmdCxcbiAgICBGaURvd25sb2FkLFxuICAgIEZpSW1hZ2UsXG4gICAgRmlNaW51cyxcbiAgICBGaVBsdXMsXG4gICAgRmlSZWRvMixcbiAgICBGaVVuZG8yLFxufSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgVGhlbWVUb2dnbGUgfSBmcm9tIFwiLi9UaGVtZVRvZ2dsZVwiO1xuXG5mdW5jdGlvbiBTYXZlU3RhdHVzKCkge1xuICAgIGNvbnN0IHNhdmVTdGF0dXMgPSB1c2VFZGl0b3IoKHMpID0+IHMuc2F2ZVN0YXR1cyk7XG4gICAgY29uc3Qgc2F2ZUVycm9yID0gdXNlRWRpdG9yKChzKSA9PiBzLnNhdmVFcnJvcik7XG4gICAgY29uc3QgcGVuZGluZ09wcyA9IHVzZUVkaXRvcigocykgPT4gcy5wZW5kaW5nT3BzKTtcbiAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgIHNhdmVFcnJvciAhPSBudWxsXG4gICAgICAgICAgICA/IFwiU2F2ZSBmYWlsZWRcIlxuICAgICAgICAgICAgOiBzYXZlU3RhdHVzID09PSBcInJldHJ5aW5nXCJcbiAgICAgICAgICAgICAgPyBcIlJldHJ5aW5nXHUyMDI2XCJcbiAgICAgICAgICAgICAgOiBzYXZlU3RhdHVzID09PSBcInNhdmluZ1wiIHx8IHBlbmRpbmdPcHMgPiAwXG4gICAgICAgICAgICAgICAgPyBcIlNhdmluZ1x1MjAyNlwiXG4gICAgICAgICAgICAgICAgOiBcIlNhdmVkXCI7XG4gICAgY29uc3QgZG90ID1cbiAgICAgICAgc2F2ZUVycm9yICE9IG51bGwgPyBcImVycm9yXCIgOiBzYXZlU3RhdHVzID09PSBcInNhdmVkXCIgJiYgcGVuZGluZ09wcyA9PT0gMCA/IFwic2F2ZWRcIiA6IFwic2F2aW5nXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzYXZlLXN0YXR1c1wiXG4gICAgICAgICAgICB0aXRsZT17c2F2ZUVycm9yID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2F2ZUVycm9yKSB3aW5kb3cuYWxlcnQoc2F2ZUVycm9yKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNhdmUtZG90ICR7ZG90fWB9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzYXZlLWxhYmVsXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gSWNvbkJ1dHRvbih7XG4gICAgbGFiZWwsXG4gICAgb25DbGljayxcbiAgICBkaXNhYmxlZCxcbiAgICBjaGlsZHJlbixcbn06IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9wQmFyKCkge1xuICAgIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICAgIGNvbnN0IHpvb20gPSB1c2VFZGl0b3IoKHMpID0+IHMudmlldy56b29tKTtcbiAgICB1c2VFZGl0b3IoKHMpID0+IHMuaGlzdFZlcnNpb24pO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkZpbGVzKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbLi4uKGlucHV0LmZpbGVzID8/IFtdKV07XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoZmlsZVRvSW1wb3J0ZWRJbWFnZSkpO1xuICAgICAgICBhZGRJbWFnZUxheWVycyhpbWFnZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbW1pdE5hbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBuYW1lID0gY2xlYW5OYW1lKGlucHV0LnZhbHVlLCBcIlVudGl0bGVkXCIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IG5hbWU7XG4gICAgICAgIHJlbmFtZVByb2plY3QobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCIgdGl0bGU9XCJCYWNrIHRvIHByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgPEZpQXJyb3dMZWZ0IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBrZXk9e2RvYy5pZH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RvYy5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17Y29tbWl0TmFtZX1cbiAgICAgICAgICAgICAgICBvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5ibHVyKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3BiYXItbmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLXNpemVcIj5cbiAgICAgICAgICAgICAgICB7ZG9jLndpZHRofVx1MDBEN3tkb2MuaGVpZ2h0fVxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgPEljb25CdXR0b24gbGFiZWw9XCJVbmRvIChcdTIzMThaKVwiIG9uQ2xpY2s9e3VuZG99IGRpc2FibGVkPXshY2FuVW5kbygpfT5cbiAgICAgICAgICAgICAgICA8RmlVbmRvMiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gbGFiZWw9XCJSZWRvIChcdTIxRTdcdTIzMThaKVwiIG9uQ2xpY2s9e3JlZG99IGRpc2FibGVkPXshY2FuUmVkbygpfT5cbiAgICAgICAgICAgICAgICA8RmlSZWRvMiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlclwiIC8+XG5cbiAgICAgICAgICAgIDxTYXZlU3RhdHVzIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiem9vbS1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiWm9vbSBvdXQgKFx1MjMxOC0pXCIgb25DbGljaz17KCkgPT4gem9vbUJ5KC0xKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGaU1pbnVzIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlcXVlc3RGaXR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRml0IHRvIHNjcmVlbiAoXHUyMzE4MClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6b29tLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZCh6b29tICogMTAwKX0lXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gbGFiZWw9XCJab29tIGluIChcdTIzMTgrKVwiIG9uQ2xpY2s9eygpID0+IHpvb21CeSgxKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGaVBsdXMgLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVmPXtmaWxlUmVmfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4gdm9pZCBvbkZpbGVzKGUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgZG93bmxvYWRQbmcoZ2V0U3RhdGUoKS5kb2MgPz8gZG9jKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpRG93bmxvYWQgLz5cbiAgICAgICAgICAgICAgICBFeHBvcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG4iLCAiLy8gVGhlIGVkaXRvciBzY3JlZW46IGxvYWRzIHRoZSBwcm9qZWN0IGRvYyBmcm9tIHRoZSBsaXZlIHF1ZXJpZXMgZXhhY3RseSBvbmNlXG4vLyBwZXIgcHJvamVjdCBpZCAoYWZ0ZXIgdGhhdCB0aGUgbG9jYWwgZG9jIGlzIGF1dGhvcml0YXRpdmUgYW5kIHF1ZXJ5IHB1c2hlc1xuLy8gYXJlIGlnbm9yZWQgXHUyMDE0IHRoZXkgYXJlIGp1c3Qgb3VyIG93biB3cml0ZXMgZWNob2luZyBiYWNrKSwgYW5kIG93bnMgZ2xvYmFsXG4vLyBrZXlib2FyZCBzaG9ydGN1dHMuXG5cbmltcG9ydCB7IExpbmssIHVzZVF1ZXJ5LCB1c2VQYXJhbXMgfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB0eXBlIHsgTGF5ZXJSb3csIFByb2plY3RNZXRhIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY2xvc2VQcm9qZWN0LFxuICBjb21iaW5lU2VsZWN0aW9uLFxuICBjb3B5U2VsZWN0aW9uLFxuICBjdXRTZWxlY3Rpb24sXG4gIGRlbGV0ZVNlbGVjdGlvbixcbiAgZHVwbGljYXRlU2VsZWN0aW9uLFxuICBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCxcbiAgZmluaXNoVGV4dEVkaXRpbmcsXG4gIG51ZGdlU2VsZWN0aW9uLFxuICBvcGVuUHJvamVjdCxcbiAgcGFzdGVDbGlwYm9hcmQsXG4gIHNldFNlbGVjdGlvblxufSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgcXVlcnlSZXN1bHQgfSBmcm9tIFwiLi4vc3RhdGUvYXBpXCI7XG5pbXBvcnQgeyByZWRvLCB1bmRvIH0gZnJvbSBcIi4uL3N0YXRlL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyByZXF1ZXN0Rml0LCB6b29tQnkgfSBmcm9tIFwiLi4vc3RhdGUvdmlld1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhZ2UgfSBmcm9tIFwiLi9DYW52YXNTdGFnZVwiO1xuaW1wb3J0IHsgTGF5ZXJzUGFuZWwgfSBmcm9tIFwiLi9MYXllcnNQYW5lbFwiO1xuaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXJcIjtcbmltcG9ydCB7IFRvcEJhciB9IGZyb20gXCIuL1RvcEJhclwiO1xuXG50eXBlIExheWVyUm93V2l0aFByb2plY3QgPSBMYXllclJvdyAmIHsgcHJvamVjdElkOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gaXNUeXBpbmdUYXJnZXQodGFyZ2V0OiBFdmVudFRhcmdldCB8IG51bGwpOiBib29sZWFuIHtcbiAgY29uc3QgZWwgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbC50YWdOYW1lID09PSBcIklOUFVUXCIgfHwgZWwudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiIHx8IGVsLmlzQ29udGVudEVkaXRhYmxlO1xufVxuXG5mdW5jdGlvbiB1c2VFZGl0b3JTaG9ydGN1dHMoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChpc1R5cGluZ1RhcmdldChlLnRhcmdldCkpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZCA9IGUubWV0YUtleSB8fCBlLmN0cmxLZXk7XG5cbiAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICBpZiAoIWdldFN0YXRlKCkuc3BhY2VQYW4pIHNldFN0YXRlKHsgc3BhY2VQYW46IHRydWUgfSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInpcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSByZWRvKCk7XG4gICAgICAgIGVsc2UgdW5kbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVkbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiY1wiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgY29weVNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgY3V0U2VsZWN0aW9uKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ2XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBwYXN0ZUNsaXBib2FyZCgpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwialwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgZHVwbGljYXRlU2VsZWN0aW9uKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyB2b2lkIGNvbWJpbmVTZWxlY3Rpb24oKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImhcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGZsaXBTZWxlY3Rpb25Ib3Jpem9udGFsKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJkXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkdXBsaWNhdGVTZWxlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiAoZS5rZXkgPT09IFwiPVwiIHx8IGUua2V5ID09PSBcIitcIikpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB6b29tQnkoMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkgPT09IFwiLVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgem9vbUJ5KC0xKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleSA9PT0gXCIwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXF1ZXN0Rml0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJEZWxldGVcIiB8fCBlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbGV0ZVNlbGVjdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgaWYgKGdldFN0YXRlKCkudG9vbCA9PT0gXCJjcm9wXCIpIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsIH0pO1xuICAgICAgICBlbHNlIHNldFNlbGVjdGlvbihbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJ2XCIgfHwgZS5rZXkgPT09IFwiVlwiKSB7XG4gICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJoXCIgfHwgZS5rZXkgPT09IFwiSFwiKSB7XG4gICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJoYW5kXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJiXCIgfHwgZS5rZXkgPT09IFwiQlwiKSB7XG4gICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJicnVzaFwiIH0pOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwidFwiIHx8IGUua2V5ID09PSBcIlRcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwidGV4dFwiIH0pOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwieFwiIHx8IGUua2V5ID09PSBcIlhcIikge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiBzdGF0ZS5iYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcjogc3RhdGUuZm9yZWdyb3VuZENvbG9yIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiZFwiIHx8IGUua2V5ID09PSBcIkRcIikge1xuICAgICAgICBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogXCIjMTExMTExXCIsIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJjXCIgfHwgZS5rZXkgPT09IFwiQ1wiKSB7XG4gICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJjcm9wXCIsIGNyb3BSZWN0OiBudWxsIH0pOyByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwID0gZS5zaGlmdEtleSA/IDEwIDogMTtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKC1zdGVwLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oc3RlcCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKDAsIC1zdGVwKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigwLCBzdGVwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikgc2V0U3RhdGUoeyBzcGFjZVBhbjogZmFsc2UgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIHNldFN0YXRlKHsgc3BhY2VQYW46IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlVcCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG9uQmx1cik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvbktleVVwKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbkJsdXIpO1xuICAgIH07XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRvcigpIHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zPHsgaWQ/OiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgaWQgPSBwYXJhbXMuaWQgPz8gXCJcIjtcbiAgY29uc3QgcHJvamVjdHMgPSBxdWVyeVJlc3VsdDxQcm9qZWN0TWV0YT4odXNlUXVlcnkoXCJwcm9qZWN0c1wiKSk7XG4gIGNvbnN0IGxheWVyUm93cyA9IHF1ZXJ5UmVzdWx0PExheWVyUm93V2l0aFByb2plY3Q+KHVzZVF1ZXJ5KFwibGF5ZXJzXCIpKTtcbiAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gIGNvbnN0IFt0aW1lZE91dCwgc2V0VGltZWRPdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuZWRSZWYgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb2plY3RzLnJlYWR5IHx8ICFsYXllclJvd3MucmVhZHkgfHwgb3BlbmVkUmVmLmN1cnJlbnQgPT09IGlkKSByZXR1cm47XG4gICAgY29uc3QgbWV0YSA9IHByb2plY3RzLml0ZW1zLmZpbmQoKHApID0+IHAuaWQgPT09IGlkKTtcbiAgICBpZiAoIW1ldGEpIHJldHVybjtcbiAgICBvcGVuZWRSZWYuY3VycmVudCA9IGlkO1xuICAgIG9wZW5Qcm9qZWN0KG1ldGEsIGxheWVyUm93cy5pdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93LnByb2plY3RJZCA9PT0gaWQpKTtcbiAgfSwgW3Byb2plY3RzLCBsYXllclJvd3MsIGlkXSk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+ICgpID0+IHtcbiAgICAgIG9wZW5lZFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgIGNsb3NlUHJvamVjdCgpO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyBBIGZyZXNobHkgY3JlYXRlZCBwcm9qZWN0IGNhbiBsYWcgaXRzIHF1ZXJ5IHB1c2ggYnkgYSBiZWF0OyBvbmx5IHJlcG9ydFxuICAvLyBcIm5vdCBmb3VuZFwiIGlmIGl0IHN0YXlzIG1pc3NpbmcuXG4gIGNvbnN0IGxvYWRlZCA9IGRvYz8uaWQgPT09IGlkO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2FkZWQpIHJldHVybjtcbiAgICBzZXRUaW1lZE91dChmYWxzZSk7XG4gICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRUaW1lZE91dCh0cnVlKSwgMzAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtsb2FkZWQsIGlkXSk7XG5cbiAgdXNlRWRpdG9yU2hvcnRjdXRzKCk7XG5cbiAgaWYgKCFsb2FkZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXBhZ2VcIj5cbiAgICAgICAge3RpbWVkT3V0ICYmIHByb2plY3RzLnJlYWR5ID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5Qcm9qZWN0IG5vdCBmb3VuZDwvcD5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBCYWNrIHRvIHByb2plY3RzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+TG9hZGluZyBwcm9qZWN0XHUyMDI2PC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3Itc2hlbGxcIj5cbiAgICAgIDxUb3BCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLW1haW5cIj5cbiAgICAgICAgPFRvb2xiYXIgLz5cbiAgICAgICAgPENhbnZhc1N0YWdlIC8+XG4gICAgICAgIDxMYXllcnNQYW5lbCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiLy8gUHJvamVjdCBnYWxsZXJ5OiBvcGVuIHByZXZpb3VzIHByb2plY3RzLCBjcmVhdGUgYSBibGFuayBvbmUgKGRlZmF1bHRcbi8vIGRpbWVuc2lvbnMpLCBvciBkcm9wL3BpY2sgYW4gaW1hZ2UgdG8gc3RhcnQgYSBwcm9qZWN0IGF0IHRoYXQgaW1hZ2UncyBzaXplLlxuXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUXVlcnkgfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIERFRkFVTFRfUFJPSkVDVF9IRUlHSFQsXG4gICAgREVGQVVMVF9QUk9KRUNUX1dJRFRILFxuICAgIGNsZWFuTmFtZSxcbiAgICBlbmNvZGVUcmFuc2Zvcm0sXG4gICAgdHlwZSBQcm9qZWN0TWV0YSxcbiAgICB0eXBlIFByb2plY3RUaHVtYixcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgZmlsZVRvSW1wb3J0ZWRJbWFnZSwgaW1hZ2VGaWxlc0Zyb21EYXRhVHJhbnNmZXIgfSBmcm9tIFwiLi4vbGliL2ltYWdlXCI7XG5pbXBvcnQgeyBhcGksIHF1ZXJ5UmVzdWx0IH0gZnJvbSBcIi4uL3N0YXRlL2FwaVwiO1xuaW1wb3J0IHsgc2VlZEFzc2V0IH0gZnJvbSBcIi4uL3N0YXRlL2Fzc2V0c1wiO1xuaW1wb3J0IHsgbmV3Q2xpZW50SWQgfSBmcm9tIFwiLi4vc3RhdGUvcGVyc2lzdFwiO1xuaW1wb3J0IHsgY29tcGFjdFRodW1iRGF0YVVybCwgZW5zdXJlUmVtb3RlQXNzZXQgfSBmcm9tIFwiLi4vc3RhdGUvdXBsb2FkXCI7XG5pbXBvcnQgeyBGaUVkaXQzLCBGaUltYWdlLCBGaVBsdXMsIEZpVHJhc2gyLCBGaVVwbG9hZCB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCIuL1RoZW1lVG9nZ2xlXCI7XG5cbmNvbnN0IFNJWkVfUFJFU0VUUyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FudmFzXCIsXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1BST0pFQ1RfV0lEVEgsXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9QUk9KRUNUX0hFSUdIVCxcbiAgICB9LFxuICAgIHsgbmFtZTogXCJTcXVhcmVcIiwgd2lkdGg6IDEyMDAsIGhlaWdodDogMTIwMCB9LFxuICAgIHsgbmFtZTogXCJQb3J0cmFpdFwiLCB3aWR0aDogMTA4MCwgaGVpZ2h0OiAxMzUwIH0sXG4gICAgeyBuYW1lOiBcIkxhbmRzY2FwZVwiLCB3aWR0aDogMTkyMCwgaGVpZ2h0OiAxMDgwIH0sXG5dIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiB0aW1lQWdvKGlzbzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZShpc28pLmdldFRpbWUoKTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShtcykgfHwgbXMgPCAwKSByZXR1cm4gXCJqdXN0IG5vd1wiO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1zIC8gNjBfMDAwKTtcbiAgICBpZiAobWludXRlcyA8IDEpIHJldHVybiBcImp1c3Qgbm93XCI7XG4gICAgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIGAke21pbnV0ZXN9bSBhZ29gO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICAgIGlmIChob3VycyA8IDI0KSByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGhvdXJzIC8gMjQpO1xuICAgIGlmIChkYXlzIDwgMzApIHJldHVybiBgJHtkYXlzfWQgYWdvYDtcbiAgICByZXR1cm4gbmV3IERhdGUoaXNvKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdENhcmQoe1xuICAgIHByb2plY3QsXG4gICAgdGh1bWIsXG4gICAgb25PcGVuLFxuICAgIG9uUmVuYW1lLFxuICAgIG9uRGVsZXRlLFxufToge1xuICAgIHByb2plY3Q6IFByb2plY3RNZXRhO1xuICAgIHRodW1iOiBzdHJpbmc7XG4gICAgb25PcGVuOiAoKSA9PiB2b2lkO1xuICAgIG9uUmVuYW1lOiAoKSA9PiB2b2lkO1xuICAgIG9uRGVsZXRlOiAoKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2VyIHByb2plY3QtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YE9wZW4gJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXt0aHVtYn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RmlJbWFnZSBjbGFzc05hbWU9XCJwcm9qZWN0LWVtcHR5LWljb25cIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uT3Blbn0gY2xhc3NOYW1lPVwicHJvamVjdC1tYWluXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1uYW1lXCI+e3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LndpZHRofVx1MDBEN3twcm9qZWN0LmhlaWdodH0gXHUwMEI3e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5sYXllck9yZGVyLmxlbmd0aH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxheWVyT3JkZXIubGVuZ3RoID09PSAxID8gXCJsYXllclwiIDogXCJsYXllcnNcIn0gXHUwMEI3e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7dGltZUFnbyhwcm9qZWN0LnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVuYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFJlbmFtZSAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdDMgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BEZWxldGUgJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGaVRyYXNoMiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHF1ZXJ5UmVzdWx0PFByb2plY3RNZXRhPih1c2VRdWVyeShcInByb2plY3RzXCIpKTtcbiAgICBjb25zdCB0aHVtYnMgPSBxdWVyeVJlc3VsdDxQcm9qZWN0VGh1bWI+KHVzZVF1ZXJ5KFwicHJvamVjdFRodW1ic1wiKSk7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW2J1c3ksIHNldEJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIH0pO1xuICAgIGNvbnN0IGRyYWdEZXB0aFJlZiA9IHVzZVJlZigwKTtcblxuICAgIGNvbnN0IHRodW1iQnlJZCA9IG5ldyBNYXAodGh1bWJzLml0ZW1zLm1hcCgodCkgPT4gW3QuaWQsIHQudGh1bWJdKSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVCbGFuaygpIHtcbiAgICAgICAgaWYgKGJ1c3kpIHJldHVybjtcbiAgICAgICAgc2V0QnVzeSh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgVW50aXRsZWQgJHtwcm9qZWN0cy5pdGVtcy5sZW5ndGggKyAxfWA7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBhcGkuY3JlYXRlUHJvamVjdChcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmF2aWdhdGUoYC9wLyR7aWR9YCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZyb21GaWxlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgaWYgKGJ1c3kpIHJldHVybjtcbiAgICAgICAgc2V0QnVzeSh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZmlsZVRvSW1wb3J0ZWRJbWFnZShmaWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0KGltYWdlLm5hbWUsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlID0gYXdhaXQgZW5zdXJlUmVtb3RlQXNzZXQoaWQsIGltYWdlLnNyYywgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBlbmNvZGVUcmFuc2Zvcm0oe1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICB3OiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoOiBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZsaXBYOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gYXdhaXQgYXBpLmFkZExheWVyKFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgIHJlbW90ZS5hc3NldElkXG4gICAgICAgICAgICAgICAgICAgID8geyBhc3NldElkOiByZW1vdGUuYXNzZXRJZCB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBzcmM6IHJlbW90ZS5zcmMsIHdpZHRoOiByZW1vdGUud2lkdGgsIGhlaWdodDogcmVtb3RlLmhlaWdodCB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNlZWRBc3NldChsYXllci5hc3NldElkLCB7XG4gICAgICAgICAgICAgICAgc3JjOiBsYXllci5zcmMgfHwgcmVtb3RlLnNyYyB8fCBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgcGFpbnRTcmM6IGltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1pbigxLCAzNjAgLyBNYXRoLm1heChpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLndpZHRoICogc2NhbGUpKTtcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWFnZS5oZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcInRodW1iIGRlY29kZSBmYWlsZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGkuc2V0UHJvamVjdFRodW1iKGlkLCBjb21wYWN0VGh1bWJEYXRhVXJsKGNhbnZhcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKHRodW1iRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3Qgd3JpdGUgcHJvamVjdCB0aHVtYjpcIiwgdGh1bWJFcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5zcmMuc3RhcnRzV2l0aChcImh0dHBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXBpLnNldFByb2plY3RUaHVtYihpZCwgcmVtb3RlLnNyYykuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtpZH1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHByb2plY3QgZnJvbSBpbWFnZTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJDb3VsZCBub3QgY3JlYXRlIHByb2plY3QgZnJvbSBpbWFnZVwiKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRyYWdEZXB0aFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHZvaWQgY3JlYXRlRnJvbUZpbGUoZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHByb2plY3Q6IFByb2plY3RNZXRhKSB7XG4gICAgICAgIGlmIChjb25maXJtKGBEZWxldGUgXCIke3Byb2plY3QubmFtZX1cIj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lLmApKSB7XG4gICAgICAgICAgICB2b2lkIGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW5hbWUocHJvamVjdDogUHJvamVjdE1ldGEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdm9pZCBhcGkucmVuYW1lUHJvamVjdChwcm9qZWN0LmlkLCBjbGVhbk5hbWUobmFtZSwgcHJvamVjdC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZVwiXG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkcmFnRGVwdGhSZWYuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgPSBNYXRoLm1heCgwLCBkcmFnRGVwdGhSZWYuY3VycmVudCAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnRGVwdGhSZWYuY3VycmVudCA9PT0gMCkgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPmltYWdlIGVkaXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtcGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctcHJvamVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtTSVpFX1BSRVNFVFMubWFwKChwcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldC53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQuaGVpZ2h0ID09PSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmVzZXQgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcHJlc2V0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHByZXNldC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJlc2V0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmVzZXQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQud2lkdGh9IFx1MDBENyB7cHJlc2V0LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgY3JlYXRlQmxhbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkgdm9pZCBjcmVhdGVGcm9tRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlUmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlVcGxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLnJlYWR5ID8gYCgke3Byb2plY3RzLml0ZW1zLmxlbmd0aH0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHshcHJvamVjdHMucmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5Mb2FkaW5nIHByb2plY3RzXHUyMDI2PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IHByb2plY3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcHJvamVjdHMgeWV0LiBDaG9vc2UgYSBzaXplIGFib3ZlIG9yIGRyb3AgYW4gaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMuaXRlbXMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI9e3RodW1iQnlJZC5nZXQocHJvamVjdC5pZCkgPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0LmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17KCkgPT4gb25SZW5hbWUocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RyYWdnaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRyb3AgdG8gY3JlYXRlIGEgcHJvamVjdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2J1c3kgPyA8ZGl2IGNsYXNzTmFtZT1cImJ1c3ktdG9hc3RcIj5DcmVhdGluZyBwcm9qZWN0XHUyMDI2PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL0VkaXRvclwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5jb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIik7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9XG4gICAgc2F2ZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8IHNhdmVkVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gc2F2ZWRUaGVtZVxuICAgICAgICA6IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICAgICAgICA/IFwiZGFya1wiXG4gICAgICAgICAgOiBcImxpZ2h0XCI7XG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzp3Z2h0QDQwMDs1MDAmZmFtaWx5PUluc3RydW1lbnQrU2Fuczp3ZHRoLHdnaHRANzUuLjEwMCw0MDAuLjcwMCZmYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAtLWJnOiAjZmZmOyAtLXN1cmZhY2U6ICNmZmY7IC0tc3VyZmFjZS1zdWJ0bGU6ICNmYWZhZmE7IC0tY2FudmFzOiAjZjRmNGY0O1xuICAtLWJvcmRlcjogI2U0ZTRlNDsgLS1ib3JkZXItc3Ryb25nOiAjMTExOyAtLXRleHQ6ICMwYTBhMGE7XG4gIC0tbXV0ZWQ6ICM3MzczNzM7IC0tZmFpbnQ6ICNhM2EzYTM7IC0tYWNjZW50OiAjMjU2M2ViOyAtLWFjY2VudC1ob3ZlcjogIzFkNGVkODtcbiAgLS1hY2NlbnQtc29mdDogI2VmZjZmZjsgLS1kYW5nZXI6ICNkYzI2MjY7IC0tY2hlY2tlci1hOiAjZWNlY2VjOyAtLWNoZWNrZXItYjogI2Q4ZDhkODtcbiAgLS1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwwLDAsLjE0KTtcbiAgLS1zYW5zOiBcIkluc3RydW1lbnQgU2Fuc1wiLCBcIlNlZ29lIFVJXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLS1tb25vOiBcIklCTSBQbGV4IE1vbm9cIiwgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbn1cbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWJnOiAjMTYxNjE2OyAtLXN1cmZhY2U6ICMxYzFjMWM7IC0tc3VyZmFjZS1zdWJ0bGU6ICMxOTE5MTk7IC0tY2FudmFzOiAjMTIxMjEyO1xuICAtLWJvcmRlcjogIzMzMzsgLS1ib3JkZXItc3Ryb25nOiAjZmFmYWZhOyAtLXRleHQ6ICNmMGYwZjA7XG4gIC0tbXV0ZWQ6ICNhOGE4YTg7IC0tZmFpbnQ6ICM2ODY4Njg7IC0tYWNjZW50OiAjM2I4MmY2OyAtLWFjY2VudC1ob3ZlcjogIzI1NjNlYjtcbiAgLS1hY2NlbnQtc29mdDogIzE3MjU1NDsgLS1kYW5nZXI6ICNlZjQ0NDQ7IC0tY2hlY2tlci1hOiAjMzIzMjMyOyAtLWNoZWNrZXItYjogIzI4MjgyODtcbiAgLS1zaGFkb3c6IDAgMThweCA1NnB4IHJnYmEoMCwwLDAsLjU4KTtcbn1cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sLCBib2R5IHsgbWFyZ2luOiAwOyBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuYm9keSB7IGZvbnQ6IDE0cHgvMS41IHZhcigtLXNhbnMpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgfVxuYnV0dG9uOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9XG4uY2hlY2tlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZXItYSk7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS1jaGVja2VyLWIpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNzUlLHZhcigtLWNoZWNrZXItYikgNzUlKSxsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tY2hlY2tlci1iKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDc1JSx2YXIoLS1jaGVja2VyLWIpIDc1JSk7IGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsOHB4IDhweDsgfVxuLmNhbnZhcy1kb3RzIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FudmFzKTsgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNvbG9yLW1peChpbiBzcmdiLHZhcigtLW11dGVkKSAyNCUsdHJhbnNwYXJlbnQpIDFweCx0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDsgfVxuLmljb24tYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuLmljb24tYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5pY29uLWJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IC4zOyB9XG4uaWNvbi1idXR0b24gc3ZnIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgfVxuLmJ1dHRvbiB7IG1pbi1oZWlnaHQ6IDM0cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDdweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNTUwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc3Ryb25nKTsgfVxuLmJ1dHRvbi5wcmltYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfVxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpOyB9XG4uYnV0dG9uLmRhbmdlciB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4uYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cblxuLyogSG9tZSAqL1xuLmhvbWUgeyBtaW4taGVpZ2h0OiAxMDB2aDsgcGFkZGluZzogNDZweCAyNHB4IDkwcHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuLmhvbWUtaW5uZXIgeyB3aWR0aDogbWluKDEwMCUsIDc4MHB4KTsgbWFyZ2luOiAwIGF1dG87IH1cbi5icmFuZC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cbi5icmFuZCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMXB4OyBsaW5lLWhlaWdodDogMTsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC0uMDM1ZW07IH1cbi5icmFuZC1tYXJrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogOXB4OyBoZWlnaHQ6IDE3cHg7IG1hcmdpbi1sZWZ0OiA0cHg7IHZlcnRpY2FsLWFsaWduOiAtMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4uYnJhbmQtcm93IC50aGVtZS10b2dnbGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuLmhvbWUtbWV0YSB7IG1hcmdpbjogMTJweCAwIDM4cHg7IHBhZGRpbmctdG9wOiA5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTFweCB2YXIoLS1zYW5zKTsgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOyB9XG4uaW50cm8geyBtYXJnaW46IDAgMCAyNHB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDEzcHg7IH1cbi5jcmVhdGUtcGFuZWwgeyBtYXJnaW4tYm90dG9tOiAzOHB4OyB9XG4uZXllYnJvdyB7IG1hcmdpbjogMCAwIDEwcHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDExLjVweCB2YXIoLS1zYW5zKTsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOyB9XG4ucHJlc2V0cyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsbWlubWF4KDAsMWZyKSk7IGdhcDogOHB4OyBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4ucHJlc2V0IHsgbWluLXdpZHRoOiAwOyBwYWRkaW5nOiAxMXB4OyB0ZXh0LWFsaWduOiBsZWZ0OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9XG4ucHJlc2V0OmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc3Ryb25nKTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4ucHJlc2V0LnNlbGVjdGVkIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLnByZXNldC1uYW1lIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDNweDsgY29sb3I6IGluaGVyaXQ7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNjAwOyB9XG4ucHJlc2V0LXNpemUgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyB9XG4uY3JlYXRlLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDhweDsgfVxuLmNyZWF0ZS1hY3Rpb25zIC5idXR0b246Zmlyc3Qtb2YtdHlwZSB7IGZsZXg6IDE7IH1cbi5zZWN0aW9uLWxhYmVsIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyBtYXJnaW46IDAgMCAxMnB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMS41cHggdmFyKC0tc2Fucyk7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAuMDFlbTsgfVxuLnNlY3Rpb24tbGFiZWw6OmFmdGVyIHsgY29udGVudDogXCJcIjsgZmxleDogMTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbi5wcm9qZWN0LWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEwcHg7IH1cbi5wcm9qZWN0LWNhcmQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExNnB4IG1pbm1heCgwLDFmcikgYXV0bzsgbWluLWhlaWdodDogODJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xMnM7IH1cbi5wcm9qZWN0LWNhcmQ6aG92ZXIgeyBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLW11dGVkKSA2NSUsdmFyKC0tYm9yZGVyKSk7IH1cbi5wcm9qZWN0LXByZXZpZXcgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgcGFkZGluZzogN3B4OyBib3JkZXI6IDA7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZXItYSk7IH1cbi5wcm9qZWN0LXByZXZpZXcgaW1nIHsgZGlzcGxheTogYmxvY2s7IG1heC13aWR0aDogMTAwJTsgbWF4LWhlaWdodDogNjZweDsgb2JqZWN0LWZpdDogY29udGFpbjsgfVxuLnByb2plY3QtZW1wdHktaWNvbiB7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IH1cbi5wcm9qZWN0LW1haW4geyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDE2cHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTsgdGV4dC1hbGlnbjogbGVmdDsgfVxuLnByb2plY3QtbmFtZSB7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDY1MDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5wcm9qZWN0LWluZm8geyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogN3B4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IGxldHRlci1zcGFjaW5nOiAuMDJlbTsgfVxuLnByb2plY3QtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMXB4OyBwYWRkaW5nOiAwIDEwcHg7IG9wYWNpdHk6IDA7IHRyYW5zaXRpb246IG9wYWNpdHkgLjEyczsgfVxuLnByb2plY3QtY2FyZDpob3ZlciAucHJvamVjdC1hY3Rpb25zLCAucHJvamVjdC1hY3Rpb25zOmZvY3VzLXdpdGhpbiB7IG9wYWNpdHk6IDE7IH1cbi5lbXB0eS1zdGF0ZSB7IHBhZGRpbmc6IDYwcHggMjBweDsgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1mYWludCk7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udDogMTJweCB2YXIoLS1tb25vKTsgfVxuLmRyb3Atb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IHotaW5kZXg6IDIwOyBkaXNwbGF5OiBncmlkOyBwbGFjZS1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1iZykgODQlLHRyYW5zcGFyZW50KTsgfVxuLmRyb3Atb3ZlcmxheSBwIHsgcGFkZGluZzogMzBweCA0OHB4OyBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50KTsgY29sb3I6IHZhcigtLWFjY2VudCk7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH1cbi5idXN5LXRvYXN0IHsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDI0cHg7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyBwYWRkaW5nOiA5cHggMTVweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDExcHggdmFyKC0tbW9ubyk7IH1cblxuLyogRWRpdG9yICovXG4uZWRpdG9yLXNoZWxsIHsgZGlzcGxheTogZmxleDsgaGVpZ2h0OiAxMDB2aDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgb3ZlcmZsb3c6IGhpZGRlbjsgYmFja2dyb3VuZDogdmFyKC0tY2FudmFzKTsgY29sb3I6IHZhcigtLXRleHQpOyB1c2VyLXNlbGVjdDogbm9uZTsgfVxuLmVkaXRvci1tYWluIHsgZGlzcGxheTogZmxleDsgZmxleDogMTsgbWluLXdpZHRoOiAwOyBtaW4taGVpZ2h0OiAwOyB9XG4udG9wYmFyIHsgaGVpZ2h0OiA0NnB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IHBhZGRpbmc6IDAgMTBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9XG4udG9wYmFyLW5hbWUgeyB3aWR0aDogMTY4cHg7IHBhZGRpbmc6IDVweCA3cHg7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiAycHg7IG91dGxpbmU6IG5vbmU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnRvcGJhci1uYW1lOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyB9LnRvcGJhci1uYW1lOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4uZG9jLXNpemUsIC56b29tLWJ1dHRvbiwgLnNhdmUtc3RhdHVzIHsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyB9XG4uZGl2aWRlciB7IHdpZHRoOiAxcHg7IGhlaWdodDogMThweDsgbWFyZ2luOiAwIDZweDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgfVxuLnNwYWNlciB7IGZsZXg6IDE7IH1cbi56b29tLWNvbnRyb2xzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfS56b29tLWJ1dHRvbiB7IHdpZHRoOiA1MnB4OyBwYWRkaW5nOiA1cHggMnB4OyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9Lnpvb20tYnV0dG9uOmhvdmVyIHsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4uc2F2ZS1zdGF0dXMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDdweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfS5zYXZlLWRvdCB7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IH0uc2F2ZWQgeyBiYWNrZ3JvdW5kOiAjMjJjNTVlOyB9LnNhdmluZyB7IGJhY2tncm91bmQ6ICNmNTllMGI7IH0uZXJyb3IgeyBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpOyB9XG4udG9vbC1yYWlsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiA1OyB3aWR0aDogNDRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyBwYWRkaW5nOiA3cHggMDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi50b29sLWJ1dHRvbiB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LnRvb2wtYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH0udG9vbC1idXR0b24uYWN0aXZlIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfS50b29sLWJ1dHRvbiBzdmcgeyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyB9XG4udG9vbGJhci1jb2xvcnMgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAzOHB4OyBoZWlnaHQ6IDM5cHg7IG1hcmdpbi10b3A6IGF1dG87IGZsZXgtc2hyaW5rOiAwOyB9LnRvb2xiYXItY29sb3JzIC5nbG9iYWwtc3dhdGNoIHsgd2lkdGg6IDIxcHg7IGhlaWdodDogMjFweDsgfS50b29sYmFyLWNvbG9ycyAuZ2xvYmFsLXN3YXRjaC5mb3JlZ3JvdW5kIHsgbGVmdDogM3B4OyB0b3A6IDNweDsgfS50b29sYmFyLWNvbG9ycyAuZ2xvYmFsLXN3YXRjaC5iYWNrZ3JvdW5kIHsgcmlnaHQ6IDNweDsgYm90dG9tOiAycHg7IH0udG9vbGJhci1jb2xvcnMgLnN3YXAtY29sb3JzIHsgcmlnaHQ6IC0xcHg7IHRvcDogLTVweDsgfVxuLnRvb2wtY29sb3ItcG9wb3ZlciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogNzA7IGxlZnQ6IDQzcHg7IGJvdHRvbTogMDsgd2lkdGg6IDIyMHB4OyBwYWRkaW5nOiA5cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyB9XG4udG9vbC1wb3BvdmVyIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDdweDsgbGVmdDogNTBweDsgd2lkdGg6IDE5NnB4OyBwYWRkaW5nOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udC1zaXplOiAxMXB4OyB9XG4udG9vbC1wb3BvdmVyIHN0cm9uZyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAxMXB4OyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTJweDsgfS50b29sLXBvcG92ZXIgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMTBweDsgbWFyZ2luOiA4cHggMDsgfS50b29sLXBvcG92ZXIgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMjRweDsgcGFkZGluZzogMXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfS50b29sLXBvcG92ZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHsgd2lkdGg6IDEwMCU7IGFjY2VudC1jb2xvcjogdmFyKC0tYWNjZW50KTsgfS50b29sLXBvcG92ZXIgcCB7IG1hcmdpbjogMCAwIDEycHg7IH0udG9vbC1wb3BvdmVyIC5idXR0b24geyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogNnB4OyB9LmJydXNoLXByZXZpZXcgeyBtYXgtd2lkdGg6IDY0cHg7IG1heC1oZWlnaHQ6IDY0cHg7IG1pbi13aWR0aDogM3B4OyBtaW4taGVpZ2h0OiAzcHg7IG1hcmdpbjogMTJweCBhdXRvIDJweDsgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4ubGF5ZXJzLXBhbmVsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMjQ0cHg7IGZsZXgtc2hyaW5rOiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB9XG4ucGFuZWwtaGVhZCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyBoZWlnaHQ6IDQycHg7IHBhZGRpbmc6IDAgMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDExLjVweCB2YXIoLS1zYW5zKTsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOyB9LnBhbmVsLWhlYWQgc3ZnIHsgd2lkdGg6IDEzcHg7IGhlaWdodDogMTNweDsgfVxuLmxheWVycy1oZWFkIHsgaGVpZ2h0OiAzNnB4OyBmbGV4LXNocmluazogMDsgfS5sYXllcnMtaGVhZCAubGF5ZXItYWRkIHsgbWFyZ2luLWxlZnQ6IGF1dG87IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgY3Vyc29yOiBwb2ludGVyOyB9LmxheWVycy1oZWFkIC5sYXllci1hZGQ6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXN1YnRsZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfS5sYXllcnMtaGVhZCAubGF5ZXItYWRkIHN2ZyB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cbi5wYW5lbC13aWR0aC1yZXNpemVyIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA0NTsgbGVmdDogLTNweDsgdG9wOiAwOyBib3R0b206IDA7IHdpZHRoOiA2cHg7IGN1cnNvcjogZXctcmVzaXplOyB9LnBhbmVsLXdpZHRoLXJlc2l6ZXI6aG92ZXIsLnBhbmVsLXdpZHRoLXJlc2l6ZXI6YWN0aXZlIHsgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tYWNjZW50KSA0NSUsdHJhbnNwYXJlbnQpOyB9XG4ucHJvcGVydGllcy1yZXNpemVyIHsgaGVpZ2h0OiA1cHg7IGZsZXgtc2hyaW5rOiAwOyBjdXJzb3I6IG5zLXJlc2l6ZTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXN1YnRsZSk7IH0ucHJvcGVydGllcy1yZXNpemVyOmhvdmVyLC5wcm9wZXJ0aWVzLXJlc2l6ZXI6YWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnByb3BlcnRpZXMtcGFuZWwgeyBtaW4taGVpZ2h0OiAwOyBkaXNwbGF5OiBmbGV4OyBmbGV4OiAwIDAgYXV0bzsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5wcm9wZXJ0aWVzLXBhbmVsID4gLnBhbmVsLWhlYWQgeyBoZWlnaHQ6IDM0cHg7IGZsZXgtc2hyaW5rOiAwOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5wcm9wZXJ0aWVzLWJvZHkgeyBtaW4taGVpZ2h0OiAwOyBvdmVyZmxvdy15OiBhdXRvOyB9XG4ucHJvcGVydGllcy1lbXB0eSB7IG1hcmdpbjogMDsgcGFkZGluZzogMTZweCAxMnB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5wcm9wLXNlY3Rpb24geyBwYWRkaW5nOiA4cHggMTBweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH1cbi5wcm9wLWZpZWxkIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogOHB4OyBtYXJnaW46IDZweCAwOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9XG4ucHJvcC1maWVsZDpmaXJzdC1jaGlsZCB7IG1hcmdpbi10b3A6IDA7IH0ucHJvcC1maWVsZDpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxuLnByb3AtZmllbGQgaW5wdXQsIC5wcm9wLWZpZWxkIHNlbGVjdCwgLnByb3AtZmllbGQgdGV4dGFyZWEgeyBvdXRsaW5lOiBub25lOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDExcHggdmFyKC0tc2Fucyk7IH1cbi5wcm9wLWZpZWxkIGlucHV0OmZvY3VzLCAucHJvcC1maWVsZCBzZWxlY3Q6Zm9jdXMsIC5wcm9wLWZpZWxkIHRleHRhcmVhOmZvY3VzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4ucHJvcC1zbGlkZXIgeyBkaXNwbGF5OiBibG9jazsgfS5wcm9wLXNsaWRlciBsYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogNXB4OyB9LnByb3AtdmFsdWUgeyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEycHg7IG1hcmdpbjogMDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuLnByb3Atc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEycHg7IG1hcmdpbi10b3A6IC01cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnByb3Atc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9LnByb3Atc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9LnByb3Atc2xpZGVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA3cHg7IGhlaWdodDogMTJweDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ucHJvcC1udW1iZXIgaW5wdXQgeyB3aWR0aDogNjJweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiA0cHggMThweCA0cHggNnB4OyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9Lm51bWJlci13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9Lm51bWJlci13cmFwIGkgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogNnB4OyB0b3A6IDZweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXNpemU6IDlweDsgfVxuLnByb3Atc2VsZWN0IHNlbGVjdCB7IHdpZHRoOiAxMjRweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiAzcHggNXB4OyB9XG4ucHJvcC1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBjb2x1bW4tZ2FwOiAxMHB4OyB9LnByb3AtZ3JpZCAucHJvcC1maWVsZCB7IG1pbi13aWR0aDogMDsgfS5wcm9wLWdyaWQgLnByb3AtbnVtYmVyIGlucHV0LC5wcm9wLWdyaWQgLnByb3Atc2VsZWN0IHNlbGVjdCB7IHdpZHRoOiA3MHB4OyB9XG4ucHJvcC10b2dnbGUgaW5wdXQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IG9wYWNpdHk6IDA7IH0ucHJvcC10b2dnbGUgaSB7IHdpZHRoOiAyN3B4OyBoZWlnaHQ6IDE1cHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogOHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xMnM7IH0ucHJvcC10b2dnbGUgaTo6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDExcHg7IGhlaWdodDogMTFweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsLjI1KTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xMnM7IH0ucHJvcC10b2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9LnByb3AtdG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpOjphZnRlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTsgfVxuLnRleHQtY29udGVudCB7IGRpc3BsYXk6IGJsb2NrOyB9LnRleHQtY29udGVudCA+IHNwYW4geyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyB9LnRleHQtY29udGVudCB0ZXh0YXJlYSB7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiA2cHg7IHJlc2l6ZTogdmVydGljYWw7IGxpbmUtaGVpZ2h0OiAxLjM1OyB1c2VyLXNlbGVjdDogdGV4dDsgfVxuLnRvb2wtaGludCB7IG1hcmdpbjogMCAwIDlweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfVxuLnNlZ21lbnQtY29udHJvbCB7IGRpc3BsYXk6IGZsZXg7IH0uc2VnbWVudC1jb250cm9sIGJ1dHRvbiB7IHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yaWdodC13aWR0aDogMDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH0uc2VnbWVudC1jb250cm9sIGJ1dHRvbjpsYXN0LWNoaWxkIHsgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7IH0uc2VnbWVudC1jb250cm9sIGJ1dHRvbi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IGNvbG9yOiB2YXIoLS1hY2NlbnQpOyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IH1cbi5nbG9iYWwtY29sb3Itc2VjdGlvbiB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5nbG9iYWwtY29sb3Itcm93IHsgaGVpZ2h0OiAzMHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1zYW5zKTsgfS5nbG9iYWwtY29sb3Itcm93IGNvZGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOS41cHggdmFyKC0tbW9ubyk7IH0uZ2xvYmFsLXN3YXRjaGVzIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogNDVweDsgaGVpZ2h0OiAzMHB4OyB9Lmdsb2JhbC1zd2F0Y2ggeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyM3B4OyBoZWlnaHQ6IDIzcHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UpOyBib3JkZXItcmFkaXVzOiAwOyBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbXV0ZWQpOyB9Lmdsb2JhbC1zd2F0Y2guYmFja2dyb3VuZCB7IHJpZ2h0OiAxcHg7IGJvdHRvbTogMDsgfS5nbG9iYWwtc3dhdGNoLmZvcmVncm91bmQgeyB6LWluZGV4OiAyOyBsZWZ0OiAxcHg7IHRvcDogMDsgfS5zd2FwLWNvbG9ycyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IC0xM3B4OyB0b3A6IC01cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc2l6ZTogMTJweDsgfS5zd2FwLWNvbG9yczpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLmNvbG9yLXBvcG92ZXIgeyBtYXJnaW46IDhweCAtMnB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH0uY29sb3ItcG9wb3Zlci1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiA3cHg7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfS5jb2xvci1wb3BvdmVyLWhlYWQgYnV0dG9uIHsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5jb2xvci1waWNrZXIgeyBtYXJnaW4tdG9wOiAwOyB9XG4uc3YtcGlja2VyIHsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwNHB4OyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IGNyb3NzaGFpcjsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMDAwLHRyYW5zcGFyZW50KSxsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZix0cmFuc3BhcmVudCk7IH0uc3YtcGlja2VyIHNwYW4geyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgYm9yZGVyLXJhZGl1czogNTAlOyBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgfVxuLmh1ZS1zbGlkZXIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDlweDsgbWFyZ2luOiA4cHggMDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2YwMCwjZmYwLCMwZjAsIzBmZiwjMDBmLCNmMGYsI2YwMCk7IH0uaHVlLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH0uaHVlLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5jb2xvci1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDVweDsgfS5jb2xvci1zd2F0Y2ggeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAyN3B4OyBmbGV4LXNocmluazogMDsgcGFkZGluZzogMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9LmNvbG9yLXN3YXRjaCBpIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH0uaGV4LWlucHV0IHsgbWluLXdpZHRoOiAwOyBmbGV4OiAxOyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDRweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH0uZXllZHJvcHBlciB7IHdpZHRoOiAyN3B4OyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LmV5ZWRyb3BwZXI6aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXN0cm9uZyk7IH1cbi5yZ2Itcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpOyBnYXA6IDVweDsgbWFyZ2luLXRvcDogNnB4OyB9LnJnYi1yb3cgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOXB4IHZhcigtLW1vbm8pOyB9LnJnYi1yb3cgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1cHg7IHBhZGRpbmc6IDNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfVxuLmJsZW5kLWNvbnRyb2wgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0uYmxlbmQtY29udHJvbC5kaXNhYmxlZCB7IG9wYWNpdHk6IC40OyB9LmJsZW5kLWNvbnRyb2wgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9LmJsZW5kLXRyaWdnZXIgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyOXB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDAgOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1hbGlnbjogbGVmdDsgfS5ibGVuZC1tZW51IHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAzMDsgdG9wOiA2MXB4OyBsZWZ0OiAxMnB4OyByaWdodDogMTJweDsgbWF4LWhlaWdodDogMjQ4cHg7IG92ZXJmbG93LXk6IGF1dG87IHBhZGRpbmc6IDRweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH0uYmxlbmQtbWVudSBidXR0b24geyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDVweCA3cHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMS41cHg7IHRleHQtYWxpZ246IGxlZnQ7IH0uYmxlbmQtbWVudSBidXR0b246aG92ZXIsLmJsZW5kLW1lbnUgYnV0dG9uOmZvY3VzLC5ibGVuZC1tZW51IGJ1dHRvbi5zZWxlY3RlZCB7IG91dGxpbmU6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgfS5ibGVuZC1oaW50IHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDRweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udC1zaXplOiA5LjVweDsgfVxuLm9wYWNpdHktY29udHJvbCB7IC0tcHJvZ3Jlc3M6IDEwMCU7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0ub3BhY2l0eS1jb250cm9sLmRpc2FibGVkIHsgb3BhY2l0eTogLjQ7IH0ub3BhY2l0eS1sYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgbWFyZ2luLWJvdHRvbTogNXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTJweDsgbWFyZ2luOiAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWFjY2VudCkgMCUsIHZhcigtLWFjY2VudCkgdmFyKC0tcHJvZ3Jlc3MpLCB2YXIoLS1ib3JkZXIpIHZhcigtLXByb2dyZXNzKSwgdmFyKC0tYm9yZGVyKSAxMDAlKTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuLm9wYWNpdHktY29udHJvbCBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDsgbWFyZ2luLXRvcDogLTNweDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXByb2dyZXNzIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRodW1iIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ubGF5ZXItbGlzdCB7IG1pbi1oZWlnaHQ6IDA7IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87IG1hcmdpbjogMDsgcGFkZGluZzogNHB4IDA7IGxpc3Qtc3R5bGU6IG5vbmU7IH1cbi5sYXllci1yb3cgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBwYWRkaW5nOiA2cHggOHB4OyBjdXJzb3I6IHBvaW50ZXI7IH0ubGF5ZXItcm93OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zdWJ0bGUpOyB9LmxheWVyLXJvdy5zZWxlY3RlZCB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgfS5sYXllci1yb3cuaGlkZGVuIHsgb3BhY2l0eTogLjU7IH1cbi52aXNpYmlsaXR5IHsgd2lkdGg6IDIycHg7IGhlaWdodDogMjVweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0udmlzaWJpbGl0eSBzdmcgeyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyB9XG4ubGF5ZXItdGh1bWIgeyB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgfS5sYXllci10aHVtYiBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cbi5sYXllci1uYW1lIHsgbWluLXdpZHRoOiAwOyBmbGV4OiAxOyBvdmVyZmxvdzogaGlkZGVuOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTEuNXB4OyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfS5sYXllci1pbnB1dCB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgcGFkZGluZzogM3B4IDVweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyLXJhZGl1czogMnB4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgfVxuLmRyb3AtbWFyayB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0LWlubGluZTogNHB4OyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5kcm9wLW1hcmsuYWJvdmUgeyB0b3A6IDA7IH0uZHJvcC1tYXJrLmJlbG93IHsgYm90dG9tOiAwOyB9XG4ubm8tbGF5ZXJzIHsgcGFkZGluZzogMTZweCAxMnB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9LnBhbmVsLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDRweDsgcGFkZGluZzogN3B4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfS5wYW5lbC1hY3Rpb25zIC5idXR0b24geyBmbGV4OiAxOyBtaW4taGVpZ2h0OiAzMHB4OyBwYWRkaW5nOiA1cHg7IH1cbi5jYW52YXMtc3RhZ2UgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG1pbi13aWR0aDogMDsgZmxleDogMTsgdG91Y2gtYWN0aW9uOiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB9LmFydGJvYXJkIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IG92ZXJmbG93OiBoaWRkZW47IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IG91dGxpbmU6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1tdXRlZCkgMzQlLHRyYW5zcGFyZW50KTsgfS5jYW52YXMtZW1wdHkgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfS5jYW52YXMtZW1wdHkgcCB7IHBhZGRpbmc6IDEzcHggMThweDsgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDExcHggdmFyKC0tbW9ubyk7IH1cbi5icnVzaC1vdmVybGF5IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH0uc25hcC1ndWlkZSB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDIwOyBiYWNrZ3JvdW5kOiAjZWM0ODk5OyB9LnNuYXAtZ3VpZGUudmVydGljYWwgeyB0b3A6IDA7IHdpZHRoOiAxcHg7IH0uc25hcC1ndWlkZS5ob3Jpem9udGFsIHsgbGVmdDogMDsgaGVpZ2h0OiAxcHg7IH0uY3JvcC1ib3ggeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAyMTsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWNvbG9yOiAjMzhiZGY4OyBiYWNrZ3JvdW5kOiByZ2JhKDU2LDE4OSwyNDgsLjA4KTsgYm94LXNoYWRvdzogMCAwIDAgOTk5OTlweCByZ2JhKDAsMCwwLC4zOCk7IH0uY3JvcC1ib3ggc3BhbiB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgYm90dG9tOiAxMDAlOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBiYWNrZ3JvdW5kOiAjMDI4NGM3OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTsgfVxuLmlubGluZS10ZXh0LWVkaXRvci13cmFwIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAzMDsgb3ZlcmZsb3c6IHZpc2libGU7IH1cbi5pbmxpbmUtdGV4dC1lZGl0b3IgeyBwb3NpdGlvbjogYWJzb2x1dGU7IG92ZXJmbG93OiBoaWRkZW47IHJlc2l6ZTogbm9uZTsgb3V0bGluZTogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQpOyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLXN1cmZhY2UpIDglLHRyYW5zcGFyZW50KTsgY2FyZXQtY29sb3I6IHZhcigtLXRleHQpOyB3aGl0ZS1zcGFjZTogcHJlOyB1c2VyLXNlbGVjdDogdGV4dDsgfVxuLmxvYWRpbmctcGFnZSB7IGhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDE0cHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5sb2FkaW5nLXBhZ2UgcCB7IG1hcmdpbjogMDsgZm9udDogMTJweCB2YXIoLS1tb25vKTsgfS5ub3QtZm91bmQgeyBtaW4taGVpZ2h0OiAxMDB2aDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgYmFja2dyb3VuZDogdmFyKC0tYmcpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9Lm5vdC1mb3VuZCA+IGRpdiB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7IC5ob21lIHsgcGFkZGluZzogMjhweCAxNnB4IDcwcHg7IH0ucHJlc2V0cyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTsgfS5wcm9qZWN0LWNhcmQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkycHggbWlubWF4KDAsMWZyKSBhdXRvOyB9LnByb2plY3QtYWN0aW9ucyB7IHBhZGRpbmc6IDAgNXB4OyBvcGFjaXR5OiAxOyB9LnRvcGJhciAuZG9jLXNpemUsIC50b3BiYXIgLnNhdmUtbGFiZWwsIC50b3BiYXIgLmFkZC1sYWJlbCB7IGRpc3BsYXk6IG5vbmU7IH0ubGF5ZXJzLXBhbmVsIHsgd2lkdGg6IDIwNXB4OyB9IH1cbmA7XG5cbmZ1bmN0aW9uIE5vdEZvdW5kKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWZvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlBhZ2Ugbm90IGZvdW5kPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBCYWNrIHRvIHByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxzdHlsZT57R0xPQkFMX0NTU308L3N0eWxlPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wLzppZFwiIGVsZW1lbnQ9ezxFZGl0b3IgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2NsaWVudC9pbmRleC50c3hcIjtcblxucmVuZGVyKGgoQXBwLCB7fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDTyxJQzBCTUE7QUQxQk4sSUVVREM7QUZWQyxJR0dIQztBSEhHLElHOEZNQztBSDlGTixJSStLSEM7QUovS0csSUkwTEhDO0FKMUxHLElJNExEQztBSjVMQyxJSXNOREM7QUp0TkMsSUtTSEM7QUxURyxJS1VOQztBTFZNLElLV05DO0FMWE0sSUt5QkRDO0FMekJDLElLc0NIQztBTHRDRyxJS3FMREM7QUxyTEMsSUtzTERDO0FMdExDLElNRUlDO0FORkosSUFpQk1DLElBQWdDLENBQUc7QUFqQnpDLElBa0JNQyxJQUFZLENBQUE7QUFsQmxCLElBbUJNQyxJQUNaO0FBcEJNLElDQ01DLElBQVVDLE1BQU1EO0FBU3RCLFNBQVNFLEVBQU9DLElBQUtDLElBQUFBO0FBRTNCLFdBQVNSLE1BQUtRLEdBQU9ELENBQUFBLEdBQUlQLEVBQUFBLElBQUtRLEdBQU1SLEVBQUFBO0FBQ3BDLFNBQTZCTztBQUM5QjtBQVFnQixTQUFBRSxFQUFXQyxJQUFBQTtBQUN0QkEsRUFBQUEsTUFBUUEsR0FBS0MsY0FBWUQsR0FBS0MsV0FBV0MsWUFBWUYsRUFBQUE7QUFDMUQ7QUVWZ0IsU0FBQUcsRUFBY0MsSUFBTU4sSUFBT08sSUFBQUE7QUFDMUMsTUFDQ0MsSUFDQUMsSUFDQWpCLElBSEdrQixLQUFrQixDQUFBO0FBSXRCLE9BQUtsQixNQUFLUSxHQUNBLFVBQUxSLEtBQVlnQixLQUFNUixHQUFNUixFQUFBQSxJQUNkLFNBQUxBLEtBQVlpQixLQUFNVCxHQUFNUixFQUFBQSxJQUM1QmtCLEdBQWdCbEIsRUFBQUEsSUFBS1EsR0FBTVIsRUFBQUE7QUFVakMsTUFQSW1CLFVBQVVDLFNBQVMsTUFDdEJGLEdBQWdCSCxXQUNmSSxVQUFVQyxTQUFTLElBQUluQyxFQUFNb0MsS0FBS0YsV0FBVyxDQUFBLElBQUtKLEtBS2pDLGNBQUEsT0FBUkQsTUhqQlEsUUdpQmNBLEdBQUtR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LE1BQU0sSUFBSSxJQUFJLEdBQUdBLEdBQUUsR0FBRyxHQUFHQSxHQUFFLEVBQUU7QUFBQSxNQUM5RCxDQUFDO0FBQ0QsWUFBTSxRQUFRLEVBQUUsR0FBRyxLQUFLLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ0MsT0FBTUEsR0FBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDQSxPQUFNQSxHQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNBLE9BQU1BLEdBQUUsSUFBSUEsR0FBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDQSxPQUFNQSxHQUFFLElBQUlBLEdBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDdkwsWUFBTSxXQUFXLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDM0QsWUFBTSxXQUFXLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDM0QsWUFBTSxTQUFTLFFBQVEsT0FBTyxDQUFDRCxPQUFNLENBQUMsT0FBTyxTQUFTQSxHQUFFLEVBQUUsS0FBS0EsR0FBRSxPQUFPO0FBQ3hFLFlBQU0sVUFBVSxDQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxRQUFRLENBQUNBLE9BQU0sQ0FBQ0EsR0FBRSxHQUFHQSxHQUFFLElBQUlBLEdBQUUsSUFBSSxHQUFHQSxHQUFFLElBQUlBLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkcsWUFBTSxVQUFVLENBQUMsR0FBRyxJQUFJLFNBQVMsR0FBRyxJQUFJLFFBQVEsR0FBRyxPQUFPLFFBQVEsQ0FBQ0EsT0FBTSxDQUFDQSxHQUFFLEdBQUdBLEdBQUUsSUFBSUEsR0FBRSxJQUFJLEdBQUdBLEdBQUUsSUFBSUEsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUN6RyxZQUFNLFlBQVksSUFBSSxTQUFTLEVBQUUs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R0FBQyxXQUFPLHNCQUFXO0FBQUEsSUFDbkIsZ0JBQUFBLEdBQUMsVUFDRztBQUFBLHNCQUFBQSxHQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsZ0JBQUFBLEdBQUMsUUFBSyxHQUFJO0FBQUEsTUFDbkMsZ0JBQUFBLEdBQUMsU0FBTSxNQUFLLFVBQVMsU0FBUyxnQkFBQUEsR0FBQyxVQUFPLEdBQUk7QUFBQSxNQUMxQyxnQkFBQUEsR0FBQyxTQUFNLE1BQUssS0FBSSxTQUFTLGdCQUFBQSxHQUFDLFlBQVMsR0FBSTtBQUFBLE9BQzNDO0FBQUEsS0FDSjtBQUVSOzs7QUN0TEEsRUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxlQUFlLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFsic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImRlZmVyIiwgImRlcHRoU29ydCIsICJfaWQiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgIkVNUFRZX09CSiIsICJFTVBUWV9BUlIiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgIl9faSIsICJfX3UiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQmFzZUNvbXBvbmVudCIsICJjb250ZXh0IiwgInRoaXMiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgIl9fIiwgIl9faSIsICJzaWJsaW5nIiwgIl9fayIsICJsZW5ndGgiLCAiX19lIiwgInR5cGUiLCAicmVuZGVyQ29tcG9uZW50IiwgImNvbXBvbmVudCIsICJfX1AiLCAiX19kIiwgIm9sZFZOb2RlIiwgIl9fdiIsICJvbGREb20iLCAiY29tbWl0UXVldWUiLCAicmVmUXVldWUiLCAibmV3Vk5vZGUiLCAiYXNzaWduIiwgIm9wdGlvbnMiLCAiZGlmZiIsICJfX24iLCAibmFtZXNwYWNlVVJJIiwgIl9fdSIsICJjb21taXRSb290IiwgInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwgIl9fYyIsICJiYXNlIiwgInNvbWUiLCAiY2hpbGQiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgIl9fciIsICJwcmV2RGVib3VuY2UiLCAiZGVib3VuY2VSZW5kZXJpbmciLCAiZGVmZXIiLCAibCIsICJzb3J0IiwgImRlcHRoU29ydCIsICJzaGlmdCIsICJkaWZmQ2hpbGRyZW4iLCAicGFyZW50RG9tIiwgInJlbmRlclJlc3VsdCIsICJuZXdQYXJlbnRWTm9kZSIsICJvbGRQYXJlbnRWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgIm5hbWVzcGFjZSIsICJleGNlc3NEb21DaGlsZHJlbiIsICJpc0h5ZHJhdGluZyIsICJpIiwgImNoaWxkVk5vZGUiLCAibmV3RG9tIiwgImZpcnN0Q2hpbGREb20iLCAicmVzdWx0IiwgInNob3VsZFBsYWNlIiwgIm9sZENoaWxkcmVuIiwgIkVNUFRZX0FSUiIsICJuZXdDaGlsZHJlbkxlbmd0aCIsICJjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IiwgIkVNUFRZX09CSiIsICJyZWYiLCAiYXBwbHlSZWYiLCAiaW5zZXJ0IiwgIm5leHRTaWJsaW5nIiwgInNrZXdlZEluZGV4IiwgIm1hdGNoaW5nSW5kZXgiLCAib2xkQ2hpbGRyZW5MZW5ndGgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAic2tldyIsICJBcnJheSIsICJjb25zdHJ1Y3RvciIsICJTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiaXNBcnJheSIsICJfX2IiLCAia2V5IiwgImZpbmRNYXRjaGluZ0luZGV4IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibm9kZVR5cGUiLCAidG9DaGlsZEFycmF5IiwgIm91dCIsICJ4IiwgInkiLCAibWF0Y2hlZCIsICJzZXRTdHlsZSIsICJzdHlsZSIsICJ2YWx1ZSIsICJzZXRQcm9wZXJ0eSIsICJJU19OT05fRElNRU5TSU9OQUwiLCAidGVzdCIsICJkb20iLCAibmFtZSIsICJvbGRWYWx1ZSIsICJ1c2VDYXB0dXJlIiwgImxvd2VyQ2FzZU5hbWUiLCAibyIsICJjc3NUZXh0IiwgInJlcGxhY2UiLCAiQ0FQVFVSRV9SRUdFWCIsICJ0b0xvd2VyQ2FzZSIsICJzbGljZSIsICJFVkVOVF9BVFRBQ0hFRCIsICJldmVudENsb2NrIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiZXZlbnRQcm94eSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJjcmVhdGVFdmVudFByb3h5IiwgImV2ZW50SGFuZGxlciIsICJFVkVOVF9ESVNQQVRDSEVEIiwgImV2ZW50IiwgInRtcCIsICJvbGRDb21taXRRdWV1ZUxlbmd0aCIsICJpc05ldyIsICJvbGRQcm9wcyIsICJvbGRTdGF0ZSIsICJzbmFwc2hvdCIsICJjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24iLCAibmV3UHJvcHMiLCAiaXNDbGFzc0NvbXBvbmVudCIsICJwcm92aWRlciIsICJjb21wb25lbnRDb250ZXh0IiwgInJlbmRlckhvb2siLCAiY291bnQiLCAibmV3VHlwZSIsICJvdXRlciIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgImNvbnRleHRUeXBlIiwgIl9fRSIsICJkb1JlbmRlciIsICJzdWIiLCAic3RhdGUiLCAiX19oIiwgIl9zYiIsICJfX3MiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwgImNvbXBvbmVudFdpbGxNb3VudCIsICJjb21wb25lbnREaWRNb3VudCIsICJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJhcHBseSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgImNvbXBvbmVudERpZFVwZGF0ZSIsICJnZXRDaGlsZENvbnRleHQiLCAiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCAiY2xvbmVOb2RlIiwgInRoZW4iLCAiTU9ERV9IWURSQVRFIiwgImluZGV4T2YiLCAicmVtb3ZlTm9kZSIsICJtYXJrQXNGb3JjZSIsICJkaWZmRWxlbWVudE5vZGVzIiwgImRpZmZlZCIsICJyb290IiwgImNiIiwgImNhbGwiLCAibm9kZSIsICJtYXAiLCAibmV3SHRtbCIsICJvbGRIdG1sIiwgIm5ld0NoaWxkcmVuIiwgImlucHV0VmFsdWUiLCAiY2hlY2tlZCIsICJsb2NhbE5hbWUiLCAiZG9jdW1lbnQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudE5TIiwgImlzIiwgIl9fbSIsICJkYXRhIiwgImRlZmF1bHRWYWx1ZSIsICJjaGlsZE5vZGVzIiwgImF0dHJpYnV0ZXMiLCAiX19odG1sIiwgImlubmVySFRNTCIsICJjb250ZW50IiwgInVuZGVmaW5lZCIsICJoYXNSZWZVbm1vdW50IiwgImN1cnJlbnQiLCAic2tpcFJlbW92ZSIsICJyIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInJlcGxhY2VOb2RlIiwgImRvY3VtZW50RWxlbWVudCIsICJjcmVhdGVFbGVtZW50IiwgImZpcnN0Q2hpbGQiLCAiY3JlYXRlQ29udGV4dCIsICJkZWZhdWx0VmFsdWUiLCAiQ29udGV4dCIsICJwcm9wcyIsICJzdWJzIiwgImN0eCIsICJ0aGlzIiwgImdldENoaWxkQ29udGV4dCIsICJTZXQiLCAiX19jIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfcHJvcHMiLCAidmFsdWUiLCAiZm9yRWFjaCIsICJjIiwgIl9fZSIsICJlbnF1ZXVlUmVuZGVyIiwgInN1YiIsICJhZGQiLCAib2xkIiwgImRlbGV0ZSIsICJjYWxsIiwgImNoaWxkcmVuIiwgImkiLCAiX18iLCAiUHJvdmlkZXIiLCAiX19sIiwgIkNvbnN1bWVyIiwgImNvbnRleHRWYWx1ZSIsICJjb250ZXh0VHlwZSIsICJzbGljZSIsICJFTVBUWV9BUlIiLCAib3B0aW9ucyIsICJlcnJvciIsICJ2bm9kZSIsICJvbGRWTm9kZSIsICJlcnJvckluZm8iLCAiY29tcG9uZW50IiwgImN0b3IiLCAiaGFuZGxlZCIsICJjb25zdHJ1Y3RvciIsICJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCAic2V0U3RhdGUiLCAiX19kIiwgImNvbXBvbmVudERpZENhdGNoIiwgIl9fRSIsICJlIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAiQmFzZUNvbXBvbmVudCIsICJwcm90b3R5cGUiLCAidXBkYXRlIiwgImNhbGxiYWNrIiwgInMiLCAiX19zIiwgInN0YXRlIiwgImFzc2lnbiIsICJfX3YiLCAiX3NiIiwgInB1c2giLCAiZm9yY2VVcGRhdGUiLCAiX19oIiwgInJlbmRlciIsICJGcmFnbWVudCIsICJyZXJlbmRlclF1ZXVlIiwgImRlZmVyIiwgIlByb21pc2UiLCAidGhlbiIsICJiaW5kIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJkZXB0aFNvcnQiLCAiYSIsICJiIiwgIl9fYiIsICJwcm9jZXNzIiwgIl9fciIsICJfaWQiLCAiTWF0aCIsICJyYW5kb20iLCAidG9TdHJpbmciLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJjcmVhdGVFdmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImN1cnJlbnRJbmRleCIsICJjdXJyZW50Q29tcG9uZW50IiwgInByZXZpb3VzQ29tcG9uZW50IiwgInByZXZSYWYiLCAiY3VycmVudEhvb2siLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAib3B0aW9ucyIsICJfb3B0aW9ucyIsICJvbGRCZWZvcmVEaWZmIiwgIl9fYiIsICJvbGRCZWZvcmVSZW5kZXIiLCAiX19yIiwgIm9sZEFmdGVyRGlmZiIsICJkaWZmZWQiLCAib2xkQ29tbWl0IiwgIl9fYyIsICJvbGRCZWZvcmVVbm1vdW50IiwgInVubW91bnQiLCAib2xkUm9vdCIsICJfXyIsICJnZXRIb29rU3RhdGUiLCAiaW5kZXgiLCAidHlwZSIsICJfX2giLCAiaG9va3MiLCAiX19IIiwgImxlbmd0aCIsICJwdXNoIiwgInVzZVN0YXRlIiwgImluaXRpYWxTdGF0ZSIsICJ1c2VSZWR1Y2VyIiwgImludm9rZU9yUmV0dXJuIiwgInJlZHVjZXIiLCAiaW5pdCIsICJob29rU3RhdGUiLCAiX3JlZHVjZXIiLCAiYWN0aW9uIiwgImN1cnJlbnRWYWx1ZSIsICJfX04iLCAibmV4dFZhbHVlIiwgInNldFN0YXRlIiwgIl9fZiIsICJ1cGRhdGVIb29rU3RhdGUiLCAicCIsICJzIiwgImMiLCAidXBkYXRlZEhvb2siLCAic2hvdWxkVXBkYXRlIiwgInByb3BzIiwgInNvbWUiLCAiaG9va0l0ZW0iLCAicHJldlNjdSIsICJyZXN1bHQiLCAiY2FsbCIsICJ0aGlzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJwcmV2Q1dVIiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiX19lIiwgInRtcCIsICJ1c2VFZmZlY3QiLCAiY2FsbGJhY2siLCAiYXJncyIsICJzdGF0ZSIsICJfX3MiLCAiYXJnc0NoYW5nZWQiLCAiX3BlbmRpbmdBcmdzIiwgInVzZVJlZiIsICJpbml0aWFsVmFsdWUiLCAiY3VycmVudEhvb2siLCAidXNlTWVtbyIsICJjdXJyZW50IiwgInVzZU1lbW8iLCAiZmFjdG9yeSIsICJhcmdzIiwgInN0YXRlIiwgImdldEhvb2tTdGF0ZSIsICJjdXJyZW50SW5kZXgiLCAiYXJnc0NoYW5nZWQiLCAiX19IIiwgIl9fIiwgIl9faCIsICJ1c2VDb250ZXh0IiwgImNvbnRleHQiLCAicHJvdmlkZXIiLCAiY3VycmVudENvbXBvbmVudCIsICJfX2MiLCAic3RhdGUiLCAiZ2V0SG9va1N0YXRlIiwgImN1cnJlbnRJbmRleCIsICJjIiwgIl9fIiwgInN1YiIsICJwcm9wcyIsICJ2YWx1ZSIsICJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwgImNvbXBvbmVudCIsICJhZnRlclBhaW50RWZmZWN0cyIsICJzaGlmdCIsICJob29rcyIsICJfX0giLCAiX19QIiwgIl9faCIsICJzb21lIiwgImludm9rZUNsZWFudXAiLCAiaW52b2tlRWZmZWN0IiwgImUiLCAib3B0aW9ucyIsICJfX2UiLCAiX192IiwgIl9fYiIsICJ2bm9kZSIsICJjdXJyZW50Q29tcG9uZW50IiwgIm9sZEJlZm9yZURpZmYiLCAiX18iLCAicGFyZW50RG9tIiwgIl9fayIsICJfX20iLCAib2xkUm9vdCIsICJfX3IiLCAib2xkQmVmb3JlUmVuZGVyIiwgImN1cnJlbnRJbmRleCIsICJfX2MiLCAicHJldmlvdXNDb21wb25lbnQiLCAiaG9va0l0ZW0iLCAiX19OIiwgIl9wZW5kaW5nQXJncyIsICJkaWZmZWQiLCAib2xkQWZ0ZXJEaWZmIiwgImMiLCAibGVuZ3RoIiwgInB1c2giLCAicHJldlJhZiIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAiYWZ0ZXJOZXh0RnJhbWUiLCAiY29tbWl0UXVldWUiLCAiZmlsdGVyIiwgImNiIiwgIm9sZENvbW1pdCIsICJ1bm1vdW50IiwgIm9sZEJlZm9yZVVubW91bnQiLCAiaGFzRXJyb3JlZCIsICJzIiwgIkhBU19SQUYiLCAiY2FsbGJhY2siLCAicmFmIiwgImRvbmUiLCAiY2xlYXJUaW1lb3V0IiwgInRpbWVvdXQiLCAiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCAic2V0VGltZW91dCIsICJob29rIiwgImNvbXAiLCAiY2xlYW51cCIsICJhcmdzQ2hhbmdlZCIsICJvbGRBcmdzIiwgIm5ld0FyZ3MiLCAiYXJnIiwgImluZGV4IiwgImludm9rZU9yUmV0dXJuIiwgImYiLCAibGlzdGVuZXJzIiwgInN0YXRlIiwgImQiLCAiaCIsICJ4IiwgImQiLCAiaCIsICJ0IiwgInYiLCAidCIsICJhIiwgImgiLCAidyIsICJzIiwgImMiLCAiQSIsICJkIiwgImgiLCAidyIsICJoIiwgImkiLCAibGlzdGVuZXJzIiwgInBlbmRpbmciLCAiZCIsICJoIiwgImltYWdlcyIsICJpIiwgInMiLCAibCIsICJlbnRyaWVzIiwgImUiLCAiYyIsICJhIiwgImIiLCAiZCIsICJpIiwgImltYWdlcyIsICJ3IiwgImgiLCAieCIsICJ5IiwgImxheWVyIiwgInN0YXRlIiwgImRlY29kZUltYWdlIiwgInciLCAiaCIsICJ2bm9kZUlkIiwgImNyZWF0ZVZOb2RlIiwgInR5cGUiLCAicHJvcHMiLCAia2V5IiwgImlzU3RhdGljQ2hpbGRyZW4iLCAiX19zb3VyY2UiLCAiX19zZWxmIiwgInJlZiIsICJpIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgInZub2RlSWQiLCAiX19pIiwgIl9fdSIsICJkZWZhdWx0UHJvcHMiLCAib3B0aW9ucyIsICJkIiwgImgiLCAidSIsICJzIiwgIkEiLCAiZSIsICJ4IiwgInkiLCAiaSIsICJ0IiwgInYiLCAic3RhdGUiLCAibGF5ZXJJZCIsICJsIiwgImIiLCAibGF5ZXIiLCAidyIsICJpbWFnZXMiLCAidSIsICJ1IiwgInUiLCAiZSIsICJyIiwgImciLCAiYiIsICJkIiwgImgiLCAicyIsICJ2IiwgImMiLCAieCIsICJtIiwgInUiLCAiZCIsICJlIiwgInMiLCAiQSIsICJzIiwgImQiLCAiQSIsICJoIiwgInUiLCAidCIsICJlIiwgImQiLCAiaCIsICJ1IiwgInMiLCAidSIsICJBIiwgImltYWdlcyIsICJlIiwgImgiLCAiZSIsICJzdGF0ZSIsICJzIiwgImQiLCAiQSIsICJwIiwgInUiLCAidSIsICJuYXZpZ2F0ZSIsICJBIiwgImQiLCAidCIsICJlIiwgInUiXQp9Cg==
