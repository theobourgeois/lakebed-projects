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
  var s3, h3, p3, v3, y3, d3, _2, k3, x3, M, $2, I2, P2, A2, H2, T2, j3 = u4.type;
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
      if (p3.context = I2, p3.props = x3, p3.__P = n2, p3.__e = false, P2 = l.__r, A2 = 0, M) p3.state = p3.__s, p3.__d = false, P2 && P2(u4), s3 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
      else do {
        p3.__d = false, P2 && P2(u4), s3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
      } while (p3.__d && ++A2 < 25);
      p3.state = p3.__s, null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())), M && !v3 && null != p3.getSnapshotBeforeUpdate && (_2 = p3.getSnapshotBeforeUpdate(y3, d3)), H2 = null != s3 && s3.type === S && null == s3.key ? E(s3.props.children) : s3, f4 = L(n2, g(H2) ? H2 : [H2], u4, t3, i3, r3, o3, e3, f4, c3, a3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && e3.push(p3), k3 && (p3.__E = p3.__ = null);
    } catch (n3) {
      if (e3.length = h3, u4.__v = null, c3 || null != o3) {
        if (n3.then) {
          for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
          null != o3 && (o3[o3.indexOf(f4)] = null), u4.__e = f4;
        } else if (null != o3) for (T2 = o3.length; T2--; ) b(o3[T2]);
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
function signOut() {
  clearStoredIdentity();
  clearAuthResumeAttempt();
  setAuth(withAuthLoading(createGuestAuth(currentGuestName()), true));
  emitAuth();
  reconnect();
}
function SignInWithGoogle({ children = "Sign in with Google", className = "", clientId, callbackPath: callbackPath2, disabled, onClick, redirectUri, requestPii: _requestPii, requestProfile: _requestProfile, returnTo, shooBaseUrl, type = "button", ...props } = {}) {
  return k("button", {
    className,
    disabled,
    onClick: (event) => {
      onClick?.(event);
      if (event.defaultPrevented || disabled) {
        return;
      }
      void signInWithGoogle({
        callbackPath: callbackPath2,
        clientId,
        redirectUri,
        returnTo,
        shooBaseUrl
      });
    },
    type,
    ...props
  }, children);
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

// lakebed-source:shared/todo.ts
function cleanTodoText(value) {
  return value.trim().slice(0, 160);
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
function AuthAvatar({ label, picture }) {
  const initial = label.trim().slice(0, 1).toUpperCase() || "?";
  if (picture) {
    return /* @__PURE__ */ u3(
      "img",
      {
        alt: "",
        className: "h-7 w-7 shrink-0 rounded-full border border-neutral-800 bg-neutral-900 object-cover",
        referrerPolicy: "no-referrer",
        src: picture
      }
    );
  }
  return /* @__PURE__ */ u3(
    "span",
    {
      "aria-hidden": "true",
      className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-300",
      children: initial
    }
  );
}
function TodoPage() {
  const todos = useQuery("todos");
  const addTodo = useMutation("addTodo");
  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const text = cleanTodoText(String(data.get("text") ?? ""));
    if (!text) {
      return;
    }
    await addTodo(text);
    form.reset();
  }
  return /* @__PURE__ */ u3("section", { children: [
    /* @__PURE__ */ u3("h1", { className: "mb-8 text-5xl font-bold tracking-tight", children: "image-visualizer-editor" }),
    /* @__PURE__ */ u3("form", { className: "mb-8 flex gap-3", onSubmit: (event) => void onSubmit(event), children: [
      /* @__PURE__ */ u3("input", { className: "min-w-0 flex-1 border border-neutral-700 bg-black px-3 py-2 text-white outline-none focus:border-white", name: "text", placeholder: "Add a todo" }),
      /* @__PURE__ */ u3("button", { className: "border border-white px-4 py-2 font-medium", type: "submit", children: "Add" })
    ] }),
    /* @__PURE__ */ u3("ul", { className: "divide-y divide-neutral-800 border-y border-neutral-800", children: todos.map((todo) => /* @__PURE__ */ u3("li", { className: "py-3", children: todo.text }, todo.id)) })
  ] });
}
function StatusPage() {
  const [status, setStatus] = d2("not checked");
  async function checkStatus() {
    const response = await fetch("api/status");
    setStatus(response.ok ? await response.text() : "error " + response.status);
  }
  return /* @__PURE__ */ u3("section", { children: [
    /* @__PURE__ */ u3("h1", { className: "mb-4 text-4xl font-bold tracking-tight", children: "Status" }),
    /* @__PURE__ */ u3("p", { className: "mb-6 text-neutral-400", children: "This route calls the server endpoint at /api/status." }),
    /* @__PURE__ */ u3("button", { className: "border border-white px-4 py-2 font-medium", type: "button", onClick: () => void checkStatus(), children: "Check endpoint" }),
    /* @__PURE__ */ u3("p", { className: "mt-4 font-mono text-sm text-neutral-400", children: [
      "endpoint: ",
      status
    ] })
  ] });
}
function App() {
  const auth2 = useAuth();
  const authLabel = auth2.displayName;
  const authStatus = auth2.isLoading && auth2.isGuest ? "checking session" : "signed in as " + authLabel;
  return /* @__PURE__ */ u3(Router, { children: /* @__PURE__ */ u3("main", { className: "min-h-screen bg-black px-6 py-10 text-white", children: /* @__PURE__ */ u3("section", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ u3("div", { className: "mb-3 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ u3("div", { className: "flex min-w-0 items-center gap-2", children: [
        !auth2.isLoading ? /* @__PURE__ */ u3(AuthAvatar, { label: authLabel, picture: auth2.picture }) : null,
        /* @__PURE__ */ u3("p", { className: "min-w-0 truncate font-mono text-sm text-neutral-500", children: authStatus })
      ] }),
      !auth2.isLoading && auth2.isGuest ? /* @__PURE__ */ u3(SignInWithGoogle, { className: "shrink-0 border border-neutral-700 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:border-white hover:text-white" }) : !auth2.isLoading ? /* @__PURE__ */ u3("button", { className: "shrink-0 text-sm text-neutral-400 hover:text-white", type: "button", onClick: () => signOut(), children: "Sign out" }) : null
    ] }),
    /* @__PURE__ */ u3("nav", { className: "mb-8 flex gap-4 text-sm text-neutral-400", children: [
      /* @__PURE__ */ u3(Link, { className: "hover:text-white", to: "/", children: "Todos" }),
      /* @__PURE__ */ u3(Link, { className: "hover:text-white", to: "/status", children: "Status" })
    ] }),
    /* @__PURE__ */ u3(Routes, { children: [
      /* @__PURE__ */ u3(Route, { path: "/", element: /* @__PURE__ */ u3(TodoPage, {}) }),
      /* @__PURE__ */ u3(Route, { path: "/status", element: /* @__PURE__ */ u3(StatusPage, {}) }),
      /* @__PURE__ */ u3(Route, { path: "*", element: /* @__PURE__ */ u3("section", { children: [
        /* @__PURE__ */ u3("h1", { className: "mb-4 text-4xl font-bold", children: "Not found" }),
        /* @__PURE__ */ u3(Link, { className: "text-neutral-300 hover:text-white", to: "/", children: "Back to todos" })
      ] }) })
    ] })
  ] }) }) });
}

// lakebed-source:__lakebed/client-entry.tsx
R(k(App, {}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90b2RvLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy9pbmRleC5qcyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvaW5kZXgudHN4IiwgImxha2ViZWQtc291cmNlOl9fbGFrZWJlZC9jbGllbnQtZW50cnkudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkNvbnRhaW5lck5vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0aWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzbGljZSA9IEVNUFRZX0FSUi5zbGljZTtcbiIsICJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwgImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gdmlydHVhbCBub2RlICh1c2VkIGZvciBKU1gpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudCBjb25zdHJ1Y3RvciBmb3IgdGhpc1xuICogdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IFtwcm9wc10gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4nKS5Db21wb25lbnRDaGlsZHJlbj59IFtjaGlsZHJlbl0gVGhlIGNoaWxkcmVuIG9mIHRoZVxuICogdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0ge30sXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzXG5cdC8vIE5vdGU6IHR5cGUgbWF5IGJlIHVuZGVmaW5lZCBpbiBkZXZlbG9wbWVudCwgbXVzdCBuZXZlciBlcnJvciBoZXJlLlxuXHRpZiAodHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmRlZmF1bHRQcm9wcyAhPSBOVUxMKSB7XG5cdFx0Zm9yIChpIGluIHR5cGUuZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSBVTkRFRklORUQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdHlwZS5kZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKHR5cGUsIG5vcm1hbGl6ZWRQcm9wcywga2V5LCByZWYsIE5VTEwpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFZOb2RlICh1c2VkIGludGVybmFsbHkgYnkgUHJlYWN0KVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnRcbiAqIENvbnN0cnVjdG9yIGZvciB0aGlzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGlzIHZpcnR1YWwgbm9kZS5cbiAqIElmIHRoaXMgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSB0ZXh0IG5vZGUsIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIG5vZGUgKHN0cmluZyBvciBudW1iZXIpLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBrZXkgVGhlIGtleSBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHVzZWQgd2hlblxuICogZGlmZmluZyBpdCBhZ2FpbnN0IGl0cyBjaGlsZHJlblxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInJlZlwiXX0gcmVmIFRoZSByZWYgcHJvcGVydHkgdGhhdCB3aWxsXG4gKiByZWNlaXZlIGEgcmVmZXJlbmNlIHRvIGl0cyBjcmVhdGVkIGNoaWxkXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCByZWYsIG9yaWdpbmFsKSB7XG5cdC8vIFY4IHNlZW1zIHRvIGJlIGJldHRlciBhdCBkZXRlY3RpbmcgdHlwZSBzaGFwZXMgaWYgdGhlIG9iamVjdCBpcyBhbGxvY2F0ZWQgZnJvbSB0aGUgc2FtZSBjYWxsIHNpdGVcblx0Ly8gRG8gbm90IGlubGluZSBpbnRvIGNyZWF0ZUVsZW1lbnQgYW5kIGNvZXJjZVRvVk5vZGUhXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IE5VTEwsXG5cdFx0X3BhcmVudDogTlVMTCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogTlVMTCxcblx0XHRfY29tcG9uZW50OiBOVUxMLFxuXHRcdGNvbnN0cnVjdG9yOiBVTkRFRklORUQsXG5cdFx0X29yaWdpbmFsOiBvcmlnaW5hbCA9PSBOVUxMID8gKyt2bm9kZUlkIDogb3JpZ2luYWwsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDBcblx0fTtcblxuXHQvLyBPbmx5IGludm9rZSB0aGUgdm5vZGUgaG9vayBpZiB0aGlzIHdhcyAqbm90KiBhIGRpcmVjdCBjb3B5OlxuXHRpZiAob3JpZ2luYWwgPT0gTlVMTCAmJiBvcHRpb25zLnZub2RlICE9IE5VTEwpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHsgY3VycmVudDogTlVMTCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGhlIGFyZ3VtZW50IGlzIGEgdmFsaWQgUHJlYWN0IFZOb2RlLlxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHJldHVybnMge3Zub2RlIGlzIFZOb2RlfVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEVsZW1lbnQgPSB2bm9kZSA9PlxuXHR2bm9kZSAhPSBOVUxMICYmIHZub2RlLmNvbnN0cnVjdG9yID09PSBVTkRFRklORUQ7XG4iLCAiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRpZmYsIGNvbW1pdFJvb3QgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBNT0RFX0hZRFJBVEUsIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQmFzZSBDb21wb25lbnQgY2xhc3MuIFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaFxuICogdHJpZ2dlciByZW5kZXJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgaW5pdGlhbCBjb21wb25lbnQgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbml0aWFsIGNvbnRleHQgZnJvbSBwYXJlbnQgY29tcG9uZW50cydcbiAqIGdldENoaWxkQ29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlLCBjYWxsYmFjaykge1xuXHQvLyBvbmx5IGNsb25lIHN0YXRlIHdoZW4gY29weWluZyB0byBuZXh0U3RhdGUgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBzO1xuXHRpZiAodGhpcy5fbmV4dFN0YXRlICE9IE5VTEwgJiYgdGhpcy5fbmV4dFN0YXRlICE9IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gTlVMTCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5fc3RhdGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwczovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtDb21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IEZyYWdtZW50O1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGx9IFtjaGlsZEluZGV4XVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tU2libGluZyh2bm9kZSwgY2hpbGRJbmRleCkge1xuXHRpZiAoY2hpbGRJbmRleCA9PSBOVUxMKSB7XG5cdFx0Ly8gVXNlIGNoaWxkSW5kZXg9PW51bGwgYXMgYSBzaWduYWwgdG8gcmVzdW1lIHRoZSBzZWFyY2ggZnJvbSB0aGUgdm5vZGUncyBzaWJsaW5nXG5cdFx0cmV0dXJuIHZub2RlLl9wYXJlbnRcblx0XHRcdD8gZ2V0RG9tU2libGluZyh2bm9kZS5fcGFyZW50LCB2bm9kZS5faW5kZXggKyAxKVxuXHRcdFx0OiBOVUxMO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IE5VTEwgJiYgc2libGluZy5fZG9tICE9IE5VTEwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogTlVMTDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChjb21wb25lbnQuX3BhcmVudERvbSAmJiBjb21wb25lbnQuX2RpcnR5KSB7XG5cdFx0bGV0IG9sZFZOb2RlID0gY29tcG9uZW50Ll92bm9kZSxcblx0XHRcdG9sZERvbSA9IG9sZFZOb2RlLl9kb20sXG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdLFxuXHRcdFx0cmVmUXVldWUgPSBbXSxcblx0XHRcdG5ld1ZOb2RlID0gYXNzaWduKHt9LCBvbGRWTm9kZSk7XG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsICsgMTtcblx0XHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZShuZXdWTm9kZSk7XG5cblx0XHRkaWZmKFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20sXG5cdFx0XHRuZXdWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdFx0b2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFID8gW29sZERvbV0gOiBOVUxMLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gTlVMTCA/IGdldERvbVNpYmxpbmcob2xkVk5vZGUpIDogb2xkRG9tLFxuXHRcdFx0ISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKSxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG9sZFZOb2RlLl9vcmlnaW5hbDtcblx0XHRuZXdWTm9kZS5fcGFyZW50Ll9jaGlsZHJlbltuZXdWTm9kZS5faW5kZXhdID0gbmV3Vk5vZGU7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgbmV3Vk5vZGUsIHJlZlF1ZXVlKTtcblx0XHRvbGRWTm9kZS5fZG9tID0gb2xkVk5vZGUuX3BhcmVudCA9IG51bGw7XG5cblx0XHRpZiAobmV3Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKG5ld1ZOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gTlVMTCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IE5VTEwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gTlVMTDtcblx0XHR2bm9kZS5fY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHRpZiAoY2hpbGQgIT0gTlVMTCAmJiBjaGlsZC5fZG9tICE9IE5VTEwpIHtcblx0XHRcdFx0cmV0dXJuICh2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbmNvbnN0IGRlZmVyID1cblx0dHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKVxuXHRcdDogc2V0VGltZW91dDtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ1xuXHQpIHtcblx0XHRwcmV2RGVib3VuY2UgPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nO1xuXHRcdChwcmV2RGVib3VuY2UgfHwgZGVmZXIpKHByb2Nlc3MpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGFcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBiXG4gKi9cbmNvbnN0IGRlcHRoU29ydCA9IChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGg7XG5cbi8qKiBGbHVzaCB0aGUgcmVuZGVyIHF1ZXVlIGJ5IHJlcmVuZGVyaW5nIGFsbCBxdWV1ZWQgY29tcG9uZW50cyAqL1xuZnVuY3Rpb24gcHJvY2VzcygpIHtcblx0dHJ5IHtcblx0XHRsZXQgYyxcblx0XHRcdGwgPSAxO1xuXG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIGByZW5kZXJDb3VudGAgeWV0LiBLZWVwIGl0cyB2YWx1ZSBub24temVybyB0byBwcmV2ZW50IHVubmVjZXNzYXJ5XG5cdFx0Ly8gcHJvY2VzcygpIGNhbGxzIGZyb20gZ2V0dGluZyBzY2hlZHVsZWQgd2hpbGUgYHF1ZXVlYCBpcyBzdGlsbCBiZWluZyBjb25zdW1lZC5cblx0XHR3aGlsZSAocmVyZW5kZXJRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdC8vIEtlZXAgdGhlIHJlcmVuZGVyIHF1ZXVlIHNvcnRlZCBieSAoZGVwdGgsIGluc2VydGlvbiBvcmRlcikuIFRoZSBxdWV1ZVxuXHRcdFx0Ly8gd2lsbCBpbml0aWFsbHkgYmUgc29ydGVkIG9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb25seSBpZiBpdCBoYXMgbW9yZSB0aGFuIDEgaXRlbS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHRvIHRoZSBxdWV1ZSBlLmcuIHdoZW4gcmVyZW5kZXJpbmcgYSBwcm92aWRlciwgc28gd2Ugd2FudCB0b1xuXHRcdFx0Ly8ga2VlcCB0aGUgb3JkZXIgZnJvbSB0b3AgdG8gYm90dG9tIHdpdGggdGhvc2UgbmV3IGl0ZW1zIHNvIHdlIGNhbiBoYW5kbGUgdGhlbSBpbiBhXG5cdFx0XHQvLyBzaW5nbGUgcGFzc1xuXHRcdFx0aWYgKHJlcmVuZGVyUXVldWUubGVuZ3RoID4gbCkge1xuXHRcdFx0XHRyZXJlbmRlclF1ZXVlLnNvcnQoZGVwdGhTb3J0KTtcblx0XHRcdH1cblxuXHRcdFx0YyA9IHJlcmVuZGVyUXVldWUuc2hpZnQoKTtcblx0XHRcdGwgPSByZXJlbmRlclF1ZXVlLmxlbmd0aDtcblxuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGMpO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRyZXJlbmRlclF1ZXVlLmxlbmd0aCA9IHByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuXHR9XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwgImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCwgTlVMTCwgU1ZHX05BTUVTUEFDRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLy8gUGVyLWluc3RhbmNlIHVuaXF1ZSBrZXkgZm9yIGV2ZW50IGNsb2NrIHN0YW1wcy4gRWFjaCBQcmVhY3QgY29weSBvbiB0aGUgcGFnZVxuLy8gZ2V0cyBpdHMgb3duIHJhbmRvbSBzdWZmaXggc28gdGhhdCBgX2Rpc3BhdGNoZWRgIC8gYF9hdHRhY2hlZGAgcHJvcGVydGllcyBvblxuLy8gc2hhcmVkIGV2ZW50IG9iamVjdHMgYW5kIGhhbmRsZXIgZnVuY3Rpb25zIGNhbm5vdCBjb2xsaWRlIGFjcm9zcyBpbnN0YW5jZXMuXG4vLyB+MSBpbiA2ME0gY29sbGlzaW9uIG9kZHMgLSBpZiB5b3UgaGF2ZSB0aGF0IG1hbnkgcHJhZWN0IHZlcnNpb25zIG9uIHRoZSBwYWdlLFxuLy8geW91IGRlc2VydmUgc29tZSB3ZWlyZCBidWdzLlxuLy8gSW4gMTEgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGFcbi8vIFN5bWJvbFxubGV0IF9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoOCksXG5cdEVWRU5UX0RJU1BBVENIRUQgPSAnX19kJyArIF9pZCxcblx0RVZFTlRfQVRUQUNIRUQgPSAnX19hJyArIF9pZDtcblxuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIGtleSwgdmFsdWUpIHtcblx0aWYgKGtleVswXSA9PSAnLScpIHtcblx0XHRzdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZSA9PSBOVUxMKSB7XG5cdFx0c3R5bGVba2V5XSA9ICcnO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCBJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpKSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZSArICdweCc7XG5cdH1cbn1cblxuY29uc3QgQ0FQVFVSRV9SRUdFWCA9IC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pO1xuXG4vLyBBIGxvZ2ljYWwgY2xvY2sgdG8gc29sdmUgaXNzdWVzIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMzkyNy5cbi8vIFdoZW4gdGhlIERPTSBwZXJmb3JtcyBhbiBldmVudCBpdCBsZWF2ZXMgbWljcm8tdGlja3MgaW4gYmV0d2VlbiBidWJibGluZyB1cCB3aGljaCBtZWFucyB0aGF0XG4vLyBhbiBldmVudCBjYW4gdHJpZ2dlciBvbiBhIG5ld2x5IHJlYXRlZCBET00tbm9kZSB3aGlsZSB0aGUgZXZlbnQgYnViYmxlcyB1cC5cbi8vXG4vLyBPcmlnaW5hbGx5IGluc3BpcmVkIGJ5IFZ1ZVxuLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb3JlL2Jsb2IvY2FlYjhhNjg4MTFhMWIwZjc5L3BhY2thZ2VzL3J1bnRpbWUtZG9tL3NyYy9tb2R1bGVzL2V2ZW50cy50cyNMOTAtTDEwMSksXG4vLyBidXQgbW9kaWZpZWQgdG8gdXNlIGEgbG9naWNhbCBjbG9jayBpbnN0ZWFkIG9mIERhdGUubm93KCkgaW4gY2FzZSBldmVudCBoYW5kbGVycyBnZXQgYXR0YWNoZWRcbi8vIGFuZCBldmVudHMgZ2V0IGRpc3BhdGNoZWQgZHVyaW5nIHRoZSBzYW1lIG1pbGxpc2Vjb25kLlxuLy9cbi8vIFRoZSBjbG9jayBpcyBpbmNyZW1lbnRlZCBhZnRlciBlYWNoIG5ldyBldmVudCBkaXNwYXRjaC4gVGhpcyBhbGxvd3MgMSAwMDAgMDAwIG5ldyBldmVudHNcbi8vIHBlciBzZWNvbmQgZm9yIG92ZXIgMjgwIHllYXJzIGJlZm9yZSB0aGUgdmFsdWUgcmVhY2hlcyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAoMioqNTMgLSAxKS5cbmxldCBldmVudENsb2NrID0gMDtcblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB2YWx1ZSBvbiBhIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIHRoZSBwcm9wZXJ0eSBoYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGRvbSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlLCBuYW1lc3BhY2UpIHtcblx0bGV0IHVzZUNhcHR1cmU7XG5cblx0bzogaWYgKG5hbWUgPT0gJ3N0eWxlJykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkVmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSBvbGRWYWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2xkVmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCEodmFsdWUgJiYgbmFtZSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRWYWx1ZSB8fCB2YWx1ZVtuYW1lXSAhPSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PSAnbycgJiYgbmFtZVsxXSA9PSAnbicpIHtcblx0XHR1c2VDYXB0dXJlID0gbmFtZSAhPSAobmFtZSA9IG5hbWUucmVwbGFjZShDQVBUVVJFX1JFR0VYLCAnJDEnKSk7XG5cdFx0Y29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIEluZmVyIGNvcnJlY3QgY2FzaW5nIGZvciBET00gYnVpbHQtaW4gZXZlbnRzOlxuXHRcdGlmIChsb3dlckNhc2VOYW1lIGluIGRvbSB8fCBuYW1lID09ICdvbkZvY3VzT3V0JyB8fCBuYW1lID09ICdvbkZvY3VzSW4nKVxuXHRcdFx0bmFtZSA9IGxvd2VyQ2FzZU5hbWUuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gZXZlbnRDbG9jaztcblx0XHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHR1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5LFxuXHRcdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlW0VWRU5UX0FUVEFDSEVEXSA9IG9sZFZhbHVlW0VWRU5UX0FUVEFDSEVEXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmIChuYW1lc3BhY2UgPT0gU1ZHX05BTUVTUEFDRSkge1xuXHRcdFx0Ly8gTm9ybWFsaXplIGluY29ycmVjdCBwcm9wIHVzYWdlIGZvciBTVkc6XG5cdFx0XHQvLyAtIHhsaW5rOmhyZWYgLyB4bGlua0hyZWYgLS0+IGhyZWYgKHhsaW5rOmhyZWYgd2FzIHJlbW92ZWQgZnJvbSBTVkcgYW5kIGlzbid0IG5lZWRlZClcblx0XHRcdC8vIC0gY2xhc3NOYW1lIC0tPiBjbGFzc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgveGxpbmsoSHw6aCkvLCAnaCcpLnJlcGxhY2UoL3NOYW1lJC8sICdzJyk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG5hbWUgIT0gJ3dpZHRoJyAmJlxuXHRcdFx0bmFtZSAhPSAnaGVpZ2h0JyAmJlxuXHRcdFx0bmFtZSAhPSAnaHJlZicgJiZcblx0XHRcdG5hbWUgIT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT0gJ3RhYkluZGV4JyAmJlxuXHRcdFx0bmFtZSAhPSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lICE9ICdyb3dTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAnY29sU3BhbicgJiZcblx0XHRcdG5hbWUgIT0gJ3JvbGUnICYmXG5cdFx0XHRuYW1lICE9ICdwb3BvdmVyJyAmJlxuXHRcdFx0bmFtZSBpbiBkb21cblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRvbVtuYW1lXSA9IHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHQvLyBsYWJlbGxlZCBicmVhayBpcyAxYiBzbWFsbGVyIGhlcmUgdGhhbiBhIHJldHVybiBzdGF0ZW1lbnQgKHNvcnJ5KVxuXHRcdFx0XHRicmVhayBvO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHQvLyBhcmlhLSBhbmQgZGF0YS0gYXR0cmlidXRlcyBoYXZlIG5vIGJvb2xlYW4gcmVwcmVzZW50YXRpb24uXG5cdFx0Ly8gQSBgZmFsc2VgIHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nXG5cdFx0Ly8gcHJlc2VudCwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW4gYXJpYVxuXHRcdC8vIGF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBmcmFtZXdvcmtzIGdlbmVyYWxseSBzdHJpbmdpZnkgYGZhbHNlYC5cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBOVUxMICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZVs0XSA9PSAnLScpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUgPT0gJ3BvcG92ZXInICYmIHZhbHVlID09IHRydWUgPyAnJyA6IHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXZlbnQgcHJveHkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhcHR1cmUgSXMgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBjYXB0dXJlIHBoYXNlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRQcm94eSh1c2VDYXB0dXJlKSB7XG5cdC8qKlxuXHQgKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcblx0ICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRyZXR1cm4gZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG5cdFx0XHRjb25zdCBldmVudEhhbmRsZXIgPSB0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgdXNlQ2FwdHVyZV07XG5cdFx0XHRpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA9PSBOVUxMKSB7XG5cdFx0XHRcdGVbRVZFTlRfRElTUEFUQ0hFRF0gPSBldmVudENsb2NrKys7XG5cblx0XHRcdFx0Ly8gV2hlbiBgZVtFVkVOVF9ESVNQQVRDSEVEXWAgaXMgc21hbGxlciB0aGFuIHRoZSB0aW1lIHdoZW4gdGhlIHRhcmdldGVkIGV2ZW50XG5cdFx0XHRcdC8vIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHdlIGtub3cgd2UgaGF2ZSBidWJibGVkIHVwIHRvIGFuIGVsZW1lbnQgdGhhdCB3YXMgYWRkZWRcblx0XHRcdFx0Ly8gZHVyaW5nIHBhdGNoaW5nIHRoZSBET00uXG5cdFx0XHR9IGVsc2UgaWYgKGVbRVZFTlRfRElTUEFUQ0hFRF0gPCBldmVudEhhbmRsZXJbRVZFTlRfQVRUQUNIRURdKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXIob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IGV2ZW50UHJveHkgPSBjcmVhdGVFdmVudFByb3h5KGZhbHNlKTtcbmNvbnN0IGV2ZW50UHJveHlDYXB0dXJlID0gY3JlYXRlRXZlbnRQcm94eSh0cnVlKTtcbiIsICJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG5cdGZ1bmN0aW9uIENvbnRleHQocHJvcHMpIHtcblx0XHRpZiAoIXRoaXMuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHQvKiogQHR5cGUge1NldDxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+IHwgbnVsbH0gKi9cblx0XHRcdGxldCBzdWJzID0gbmV3IFNldCgpO1xuXHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0Y3R4W0NvbnRleHQuX2lkXSA9IHRoaXM7XG5cblx0XHRcdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gY3R4O1xuXG5cdFx0XHR0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRzdWJzID0gTlVMTDtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKF9wcm9wcykge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIGV2ZW5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMudmFsdWUgIT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vicy5mb3JFYWNoKGMgPT4ge1xuXHRcdFx0XHRcdFx0Yy5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zdWIgPSBjID0+IHtcblx0XHRcdFx0c3Vicy5hZGQoYyk7XG5cdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzdWJzKSB7XG5cdFx0XHRcdFx0XHRzdWJzLmRlbGV0ZShjKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcblx0fVxuXG5cdENvbnRleHQuX2lkID0gJ19fY0MnICsgaSsrO1xuXHRDb250ZXh0Ll9kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0Q29udGV4dC5Db25zdW1lciA9IChwcm9wcywgY29udGV4dFZhbHVlKSA9PiB7XG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHRWYWx1ZSk7XG5cdH07XG5cblx0Ly8gd2UgY291bGQgYWxzbyBnZXQgcmlkIG9mIF9jb250ZXh0UmVmIGVudGlyZWx5XG5cdENvbnRleHQuUHJvdmlkZXIgPVxuXHRcdENvbnRleHQuX2NvbnRleHRSZWYgPVxuXHRcdENvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPVxuXHRcdFx0Q29udGV4dDtcblxuXHRyZXR1cm4gQ29udGV4dDtcbn1cbiIsICJpbXBvcnQgeyBkaWZmLCB1bm1vdW50LCBhcHBseVJlZiB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHtcblx0RU1QVFlfT0JKLFxuXHRFTVBUWV9BUlIsXG5cdElOU0VSVF9WTk9ERSxcblx0TUFUQ0hFRCxcblx0VU5ERUZJTkVELFxuXHROVUxMXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmdcbiAqIGRpZmZlZFxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG9sZFBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRQYXJlbnRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGRpZmYnZWQgYWdhaW5zdCBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QgLSBtb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGlsZHJlbihcblx0cGFyZW50RG9tLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRvbGRQYXJlbnRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IGksXG5cdFx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0XHRvbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdGNoaWxkVk5vZGUsXG5cdFx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRcdG5ld0RvbSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0Zmlyc3RDaGlsZERvbTtcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdC8qKiBAdHlwZSB7Vk5vZGVbXX0gKi9cblx0bGV0IG9sZENoaWxkcmVuID0gKG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbikgfHwgRU1QVFlfQVJSO1xuXG5cdGxldCBuZXdDaGlsZHJlbkxlbmd0aCA9IHJlbmRlclJlc3VsdC5sZW5ndGg7XG5cblx0b2xkRG9tID0gY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheShcblx0XHRuZXdQYXJlbnRWTm9kZSxcblx0XHRyZW5kZXJSZXN1bHQsXG5cdFx0b2xkQ2hpbGRyZW4sXG5cdFx0b2xkRG9tLFxuXHRcdG5ld0NoaWxkcmVuTGVuZ3RoXG5cdCk7XG5cblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdGlmIChjaGlsZFZOb2RlID09IE5VTEwpIGNvbnRpbnVlO1xuXG5cdFx0Ly8gQXQgdGhpcyBwb2ludCwgY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSBoYXMgYXNzaWduZWQgX2luZGV4IHRvIGJlIHRoZVxuXHRcdC8vIG1hdGNoaW5nSW5kZXggZm9yIHRoaXMgVk5vZGUncyBvbGRWTm9kZSAob3IgLTEgaWYgdGhlcmUgaXMgbm8gb2xkVk5vZGUpLlxuXHRcdG9sZFZOb2RlID1cblx0XHRcdChjaGlsZFZOb2RlLl9pbmRleCAhPSAtMSAmJiBvbGRDaGlsZHJlbltjaGlsZFZOb2RlLl9pbmRleF0pIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIFVwZGF0ZSBjaGlsZFZOb2RlLl9pbmRleCB0byBpdHMgZmluYWwgaW5kZXhcblx0XHRjaGlsZFZOb2RlLl9pbmRleCA9IGk7XG5cblx0XHQvLyBNb3JwaCB0aGUgb2xkIGVsZW1lbnQgaW50byB0aGUgbmV3IG9uZSwgYnV0IGRvbid0IGFwcGVuZCBpdCB0byB0aGUgZG9tIHlldFxuXHRcdGxldCByZXN1bHQgPSBkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdC8vIEFkanVzdCBET00gbm9kZXNcblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cdFx0aWYgKGNoaWxkVk5vZGUucmVmICYmIG9sZFZOb2RlLnJlZiAhPSBjaGlsZFZOb2RlLnJlZikge1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikge1xuXHRcdFx0XHRhcHBseVJlZihvbGRWTm9kZS5yZWYsIE5VTEwsIGNoaWxkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmVmUXVldWUucHVzaChcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NvbXBvbmVudCB8fCBuZXdEb20sXG5cdFx0XHRcdGNoaWxkVk5vZGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpcnN0Q2hpbGREb20gPT0gTlVMTCAmJiBuZXdEb20gIT0gTlVMTCkge1xuXHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHR9XG5cblx0XHRsZXQgc2hvdWxkUGxhY2UgPSAhIShjaGlsZFZOb2RlLl9mbGFncyAmIElOU0VSVF9WTk9ERSk7XG5cdFx0aWYgKHNob3VsZFBsYWNlIHx8IG9sZFZOb2RlLl9jaGlsZHJlbiA9PT0gY2hpbGRWTm9kZS5fY2hpbGRyZW4pIHtcblx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXG5cdFx0XHQvLyBXaGVuIGEgbWF0Y2hlZCBWTm9kZSBpcyBwaHlzaWNhbGx5IG1vdmVkIHZpYSBJTlNFUlRfVk5PREUsIGl0cyBvbGRcblx0XHRcdC8vIF9kb20gcG9pbnRlciBiZWNvbWVzIGEgc3RhbGUgcG9zaXRpb25hbCByZWZlcmVuY2UuIENsZWFyIGl0IHNvIHRoYXRcblx0XHRcdC8vIGdldERvbVNpYmxpbmcgKGNhbGxlZCBmcm9tIG5lc3RlZCBkaWZmcykgd29uJ3QgcmV0dXJuIHRoaXMgc3RhbGVcblx0XHRcdC8vIHJlZmVyZW5jZSBhbmQgbWlzLXBsYWNlIHN1YnNlcXVlbnQgRE9NIG5vZGVzLiBTZWUgIzUwNjUuXG5cdFx0XHRpZiAoc2hvdWxkUGxhY2UgJiYgb2xkVk5vZGUuX2RvbSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZG9tID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiByZXN1bHQgIT09IFVOREVGSU5FRCkge1xuXHRcdFx0b2xkRG9tID0gcmVzdWx0O1xuXHRcdH0gZWxzZSBpZiAobmV3RG9tKSB7XG5cdFx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0Ly8gVW5zZXQgZGlmZmluZyBmbGFnc1xuXHRcdGNoaWxkVk5vZGUuX2ZsYWdzICY9IH4oSU5TRVJUX1ZOT0RFIHwgTUFUQ0hFRCk7XG5cdH1cblxuXHRuZXdQYXJlbnRWTm9kZS5fZG9tID0gZmlyc3RDaGlsZERvbTtcblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0cmVuZGVyUmVzdWx0LFxuXHRvbGRDaGlsZHJlbixcblx0b2xkRG9tLFxuXHRuZXdDaGlsZHJlbkxlbmd0aFxuKSB7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IGNoaWxkVk5vZGU7XG5cdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdGxldCBvbGRWTm9kZTtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGgsXG5cdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4gPSBvbGRDaGlsZHJlbkxlbmd0aDtcblxuXHRsZXQgc2tldyA9IDA7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gbmV3IEFycmF5KG5ld0NoaWxkcmVuTGVuZ3RoKTtcblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGFyZSByZXVzaW5nIHRoZSBjaGlsZFZOb2RlIHZhcmlhYmxlIHRvIGhvbGQgYm90aCB0aGVcblx0XHQvLyBwcmUgYW5kIHBvc3Qgbm9ybWFsaXplZCBjaGlsZFZOb2RlXG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChcblx0XHRcdGNoaWxkVk5vZGUgPT0gTlVMTCB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnZnVuY3Rpb24nXG5cdFx0KSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50JyB8fFxuXHRcdFx0Y2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRCAmJiBjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBOVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHRjb25zdCBza2V3ZWRJbmRleCA9IGkgKyBza2V3O1xuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIFRlbXBvcmFyaWx5IHN0b3JlIHRoZSBtYXRjaGluZ0luZGV4IG9uIHRoZSBfaW5kZXggcHJvcGVydHkgc28gd2UgY2FuIHB1bGxcblx0XHQvLyBvdXQgdGhlIG9sZFZOb2RlIGluIGRpZmZDaGlsZHJlbi4gV2UnbGwgb3ZlcnJpZGUgdGhpcyB0byB0aGUgVk5vZGUnc1xuXHRcdC8vIGZpbmFsIGluZGV4IGFmdGVyIHVzaW5nIHRoaXMgcHJvcGVydHkgdG8gZ2V0IHRoZSBvbGRWTm9kZVxuXHRcdGNvbnN0IG1hdGNoaW5nSW5kZXggPSAoY2hpbGRWTm9kZS5faW5kZXggPSBmaW5kTWF0Y2hpbmdJbmRleChcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdHNrZXdlZEluZGV4LFxuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW5cblx0XHQpKTtcblxuXHRcdG9sZFZOb2RlID0gTlVMTDtcblx0XHRpZiAobWF0Y2hpbmdJbmRleCAhPSAtMSkge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlblttYXRjaGluZ0luZGV4XTtcblx0XHRcdHJlbWFpbmluZ09sZENoaWxkcmVuLS07XG5cdFx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdFx0b2xkVk5vZGUuX2ZsYWdzIHw9IE1BVENIRUQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGVyZSwgd2UgZGVmaW5lIGlzTW91bnRpbmcgZm9yIHRoZSBwdXJwb3NlcyBvZiB0aGUgc2tldyBkaWZmaW5nXG5cdFx0Ly8gYWxnb3JpdGhtLiBOb2RlcyB0aGF0IGFyZSB1bnN1c3BlbmRpbmcgYXJlIGNvbnNpZGVyZWQgbW91bnRpbmcgYW5kIHdlIGRldGVjdFxuXHRcdC8vIHRoaXMgYnkgY2hlY2tpbmcgaWYgb2xkVk5vZGUuX29yaWdpbmFsID09IG51bGxcblx0XHRjb25zdCBpc01vdW50aW5nID0gb2xkVk5vZGUgPT0gTlVMTCB8fCBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gTlVMTDtcblxuXHRcdGlmIChpc01vdW50aW5nKSB7XG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSAtMSkge1xuXHRcdFx0XHQvLyBXaGVuIHRoZSBhcnJheSBvZiBjaGlsZHJlbiBpcyBncm93aW5nIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIHNrZXdcblx0XHRcdFx0Ly8gYXMgd2UgYXJlIGFkZGluZyBhIG5ldyBlbGVtZW50IHRvIHRoZSBhcnJheS5cblx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0Ly8gWzEsIDIsIDNdIC0tPiBbMCwgMSwgMiwgM11cblx0XHRcdFx0Ly8gb2xkQ2hpbGRyZW4gICBuZXdDaGlsZHJlblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBUaGUgbmV3IGVsZW1lbnQgaXMgYXQgaW5kZXggMCwgc28gb3VyIHNrZXcgaXMgMCxcblx0XHRcdFx0Ly8gd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tldyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQuXG5cdFx0XHRcdC8vIFRoZSBkZWNyZWFzZSB3aWxsIGNhdXNlIHVzIHRvIGNvbXBhcmUgdGhlIGVsZW1lbnQgYXQgcG9zaXRpb24gMVxuXHRcdFx0XHQvLyB3aXRoIHZhbHVlIDEgd2l0aCB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAwIHdpdGggdmFsdWUgMC5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gQSBsaW5lYXIgY29uY2VwdCBpcyBhcHBsaWVkIHdoZW4gdGhlIGFycmF5IGlzIHNocmlua2luZyxcblx0XHRcdFx0Ly8gaWYgdGhlIGxlbmd0aCBpcyB1bmNoYW5nZWQgd2UgY2FuIGFzc3VtZSB0aGF0IG5vIHNrZXdcblx0XHRcdFx0Ly8gY2hhbmdlcyBhcmUgbmVlZGVkLlxuXHRcdFx0XHRpZiAobmV3Q2hpbGRyZW5MZW5ndGggPiBvbGRDaGlsZHJlbkxlbmd0aCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdDaGlsZHJlbkxlbmd0aCA8IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGFyZSBtb3VudGluZyBhIERPTSBWTm9kZSwgbWFyayBpdCBmb3IgaW5zZXJ0aW9uXG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSAhPSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG1hdGNoaW5nSW5kZXggIT0gc2tld2VkSW5kZXgpIHtcblx0XHRcdC8vIFdoZW4gd2UgbW92ZSBlbGVtZW50cyBhcm91bmQgaS5lLiBbMCwgMSwgMl0gLS0+IFsxLCAwLCAyXVxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMSwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAxIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgMCBhbmQgb3VyIHNrZXcgaXMgMFxuXHRcdFx0Ly8gICAgIHdlIHNldCB0aGUgc2tldyB0byAxIGFzIHdlIGZvdW5kIGFuIG9mZnNldC5cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDAsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMCB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIGF0IDIgYW5kIG91ciBza2V3IGlzIDFcblx0XHRcdC8vICAgICB0aGlzIG1ha2VzIHVzIGluY3JlYXNlIHRoZSBza2V3IGFnYWluLlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMiwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAyIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgNCBhbmQgb3VyIHNrZXcgaXMgMlxuXHRcdFx0Ly9cblx0XHRcdC8vIHRoaXMgYmVjb21lcyBhbiBvcHRpbWl6YXRpb24gcXVlc3Rpb24gd2hlcmUgY3VycmVudGx5IHdlIHNlZSBhIDEgZWxlbWVudCBvZmZzZXQgYXMgYW4gaW5zZXJ0aW9uXG5cdFx0XHQvLyBvciBkZWxldGlvbiBpLmUuIHdlIG9wdGltaXplIGZvciBbMCwgMSwgMl0gLS0+IFs5LCAwLCAxLCAyXVxuXHRcdFx0Ly8gd2hpbGUgYSBtb3JlIHRoYW4gMSBvZmZzZXQgd2Ugc2VlIGFzIGEgc3dhcC5cblx0XHRcdC8vIFdlIGNvdWxkIHByb2JhYmx5IGJ1aWxkIGhldXJpc3RpY3MgZm9yIGhhdmluZyBhbiBvcHRpbWl6ZWQgY291cnNlIG9mIGFjdGlvbiBoZXJlIGFzIHdlbGwsIGJ1dFxuXHRcdFx0Ly8gbWlnaHQgZ28gYXQgdGhlIGNvc3Qgb2Ygc29tZSBieXRlcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiB3ZSB3YW50ZWQgdG8gb3B0aW1pemUgZm9yIGkuZS4gb25seSBzd2FwcyB3ZSdkIGp1c3QgZG8gdGhlIGxhc3QgdHdvIGNvZGUtYnJhbmNoZXMgYW5kIGhhdmVcblx0XHRcdC8vIG9ubHkgdGhlIGZpcnN0IGl0ZW0gYmUgYSByZS1zY291dGluZyBhbmQgYWxsIHRoZSBvdGhlcnMgZmFsbCBpbiB0aGVpciBza2V3ZWQgY291bnRlci1wYXJ0LlxuXHRcdFx0Ly8gV2UgY291bGQgYWxzbyBmdXJ0aGVyIG9wdGltaXplIGZvciBzd2Fwc1xuXHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPT0gc2tld2VkSW5kZXggLSAxKSB7XG5cdFx0XHRcdHNrZXctLTtcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCArIDEpIHtcblx0XHRcdFx0c2tldysrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPiBza2V3ZWRJbmRleCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIHRoaXMgVk5vZGUncyBET00gaWYgdGhlIG9yaWdpbmFsIGluZGV4IChtYXRjaGluZ0luZGV4KSBkb2Vzbid0XG5cdFx0XHRcdC8vIG1hdGNoIHRoZSBuZXcgc2tldyBpbmRleCAoaSArIG5ldyBza2V3KVxuXHRcdFx0XHQvLyBJbiB0aGUgZm9ybWVyIHR3byBicmFuY2hlcyB3ZSBrbm93IHRoYXQgaXQgbWF0Y2hlcyBhZnRlciBza2V3aW5nXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcmVtYWluaW5nIG9sZENoaWxkcmVuIGlmIHRoZXJlIGFyZSBhbnkuIExvb3AgZm9yd2FyZHMgc28gdGhhdCBhcyB3ZVxuXHQvLyB1bm1vdW50IERPTSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG9sZENoaWxkcmVuLCB3ZSBjYW4gYWRqdXN0IG9sZERvbSB0b1xuXHQvLyBwb2ludCB0byB0aGUgbmV4dCBjaGlsZCwgd2hpY2ggbmVlZHMgdG8gYmUgdGhlIGZpcnN0IERPTSBub2RlIHRoYXQgd29uJ3QgYmVcblx0Ly8gdW5tb3VudGVkLlxuXHRpZiAocmVtYWluaW5nT2xkQ2hpbGRyZW4pIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2xkQ2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblx0XHRcdGlmIChvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwKSB7XG5cdFx0XHRcdGlmIChvbGRWTm9kZS5fZG9tID09IG9sZERvbSkge1xuXHRcdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dW5tb3VudChvbGRWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbVxuICogQHBhcmFtIHtib29sZWFufSBzaG91bGRQbGFjZVxuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGluc2VydChwYXJlbnRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblxuXHRpZiAodHlwZW9mIHBhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBjaGlsZHJlbiA9IHBhcmVudFZOb2RlLl9jaGlsZHJlbjtcblx0XHRmb3IgKGxldCBpID0gMDsgY2hpbGRyZW4gJiYgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY2hpbGRyZW5baV0pIHtcblx0XHRcdFx0Ly8gSWYgd2UgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbiwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9sZFxuXHRcdFx0XHQvLyBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGUgKHBhcmVudFZOb2RlXG5cdFx0XHRcdC8vIGhlcmUpLlxuXHRcdFx0XHRjaGlsZHJlbltpXS5fcGFyZW50ID0gcGFyZW50Vk5vZGU7XG5cdFx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZHJlbltpXSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2xkRG9tO1xuXHR9IGVsc2UgaWYgKHBhcmVudFZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0aWYgKHNob3VsZFBsYWNlKSB7XG5cdFx0XHRpZiAob2xkRG9tICYmIHBhcmVudFZOb2RlLnR5cGUgJiYgIW9sZERvbS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcocGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShwYXJlbnRWTm9kZS5fZG9tLCBvbGREb20gfHwgTlVMTCk7XG5cdFx0fVxuXHRcdG9sZERvbSA9IHBhcmVudFZOb2RlLl9kb207XG5cdH1cblxuXHRkbyB7XG5cdFx0b2xkRG9tID0gb2xkRG9tICYmIG9sZERvbS5uZXh0U2libGluZztcblx0fSB3aGlsZSAob2xkRG9tICE9IE5VTEwgJiYgb2xkRG9tLm5vZGVUeXBlID09IDgpO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbn0gY2hpbGRyZW4gVGhlIHVuZmxhdHRlbmVkIGNoaWxkcmVuIG9mIGEgdmlydHVhbFxuICogbm9kZVxuICogQHJldHVybnMge1ZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBOVUxMIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IGNoaWxkVk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGVbXX0gb2xkQ2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBza2V3ZWRJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHJlbWFpbmluZ09sZENoaWxkcmVuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdJbmRleChcblx0Y2hpbGRWTm9kZSxcblx0b2xkQ2hpbGRyZW4sXG5cdHNrZXdlZEluZGV4LFxuXHRyZW1haW5pbmdPbGRDaGlsZHJlblxuKSB7XG5cdGNvbnN0IGtleSA9IGNoaWxkVk5vZGUua2V5O1xuXHRjb25zdCB0eXBlID0gY2hpbGRWTm9kZS50eXBlO1xuXHRsZXQgb2xkVk5vZGUgPSBvbGRDaGlsZHJlbltza2V3ZWRJbmRleF07XG5cdGNvbnN0IG1hdGNoZWQgPSBvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwO1xuXG5cdC8vIFdlIG9ubHkgbmVlZCB0byBwZXJmb3JtIGEgc2VhcmNoIGlmIHRoZXJlIGFyZSBtb3JlIGNoaWxkcmVuXG5cdC8vIChyZW1haW5pbmdPbGRDaGlsZHJlbikgdG8gc2VhcmNoLiBIb3dldmVyLCBpZiB0aGUgb2xkVk5vZGUgd2UganVzdCBsb29rZWRcblx0Ly8gYXQgc2tld2VkSW5kZXggd2FzIG5vdCBhbHJlYWR5IHVzZWQgaW4gdGhpcyBkaWZmLCB0aGVuIHRoZXJlIG11c3QgYmUgYXRcblx0Ly8gbGVhc3QgMSBvdGhlciAoc28gZ3JlYXRlciB0aGFuIDEpIHJlbWFpbmluZ09sZENoaWxkcmVuIHRvIGF0dGVtcHQgdG8gbWF0Y2hcblx0Ly8gYWdhaW5zdC4gU28gdGhlIGZvbGxvd2luZyBjb25kaXRpb24gY2hlY2tzIHRoYXQgZW5zdXJpbmdcblx0Ly8gcmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAxIGlmIHRoZSBvbGRWTm9kZSBpcyBub3QgYWxyZWFkeSB1c2VkL21hdGNoZWQuIEVsc2Vcblx0Ly8gaWYgdGhlIG9sZFZOb2RlIHdhcyBudWxsIG9yIG1hdGNoZWQsIHRoZW4gdGhlcmUgY291bGQgbmVlZHMgdG8gYmUgYXQgbGVhc3Rcblx0Ly8gMSAoYWthIGByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDBgKSBjaGlsZHJlbiB0byBmaW5kIGFuZCBjb21wYXJlIGFnYWluc3QuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIGFuIHVua2V5ZWQgZnVuY3Rpb25hbCBWTm9kZSwgdGhhdCBpc24ndCBhIGJ1aWx0LWluIGxpa2Ugb3VyIEZyYWdtZW50LFxuXHQvLyB3ZSBzaG91bGQgbm90IHNlYXJjaCBhcyB3ZSByaXNrIHJlLXVzaW5nIHN0YXRlIG9mIGFuIHVucmVsYXRlZCBWTm9kZS4gKHJldmVydGVkIGZvciBub3cpXG5cdGxldCBzaG91bGRTZWFyY2ggPVxuXHRcdC8vICh0eXBlb2YgdHlwZSAhPSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09IEZyYWdtZW50IHx8IGtleSkgJiZcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA+IChtYXRjaGVkID8gMSA6IDApO1xuXG5cdGlmIChcblx0XHQob2xkVk5vZGUgPT09IE5VTEwgJiYga2V5ID09IG51bGwpIHx8XG5cdFx0KG1hdGNoZWQgJiYga2V5ID09IG9sZFZOb2RlLmtleSAmJiB0eXBlID09IG9sZFZOb2RlLnR5cGUpXG5cdCkge1xuXHRcdHJldHVybiBza2V3ZWRJbmRleDtcblx0fSBlbHNlIGlmIChzaG91bGRTZWFyY2gpIHtcblx0XHRsZXQgeCA9IHNrZXdlZEluZGV4IC0gMTtcblx0XHRsZXQgeSA9IHNrZXdlZEluZGV4ICsgMTtcblx0XHR3aGlsZSAoeCA+PSAwIHx8IHkgPCBvbGRDaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoaWxkSW5kZXggPSB4ID49IDAgPyB4LS0gOiB5Kys7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRvbGRWTm9kZSAhPSBOVUxMICYmXG5cdFx0XHRcdChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwICYmXG5cdFx0XHRcdGtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0dHlwZSA9PSBvbGRWTm9kZS50eXBlXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGNoaWxkSW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIC0xO1xufVxuIiwgImltcG9ydCB7XG5cdEVNUFRZX0FSUixcblx0RU1QVFlfT0JKLFxuXHRNQVRIX05BTUVTUEFDRSxcblx0TU9ERV9IWURSQVRFLFxuXHRNT0RFX1NVU1BFTkRFRCxcblx0TlVMTCxcblx0UkVTRVRfTU9ERSxcblx0U1ZHX05BTUVTUEFDRSxcblx0VU5ERUZJTkVELFxuXHRYSFRNTF9OQU1FU1BBQ0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIGlzQXJyYXksIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHthbnl9IFRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUmVmPFQ+fSBSZWY8VD5cbiAqL1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHQvKiogQHR5cGUge2FueX0gKi9cblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSBVTkRFRklORUQpIHJldHVybiBOVUxMO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX1NVU1BFTkRFRCkge1xuXHRcdGlzSHlkcmF0aW5nID0gISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKTtcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRsZXQgb2xkQ29tbWl0UXVldWVMZW5ndGggPSBjb21taXRRdWV1ZS5sZW5ndGg7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdFx0XHRjb25zdCBpc0NsYXNzQ29tcG9uZW50ID0gbmV3VHlwZS5wcm90b3R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQmFzZUNvbXBvbmVudChcblx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRpZiAoIWMuc3RhdGUpIGMuc3RhdGUgPSB7fTtcblx0XHRcdFx0Yy5fZ2xvYmFsQ29udGV4dCA9IGdsb2JhbENvbnRleHQ7XG5cdFx0XHRcdGlzTmV3ID0gYy5fZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW52b2tlIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5fbmV4dFN0YXRlID09IE5VTEwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgbmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRcdC8vIEludm9rZSBwcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gTlVMTFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5jb21wb25lbnREaWRNb3VudCAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5jb21wb25lbnREaWRNb3VudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpc0NsYXNzQ29tcG9uZW50ICYmXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gTlVMTCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbCB8fFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IE5VTEwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gTW9yZSBpbmZvIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vSm92aURlQ3Jvb2NrL2JlYzVmMmNlOTM1NDRkMmU2MDcwZWY4ZTAwMzZlNGU4XG5cdFx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9vcmlnaW5hbCAhPSBvbGRWTm9kZS5fb3JpZ2luYWwpIHtcblx0XHRcdFx0XHRcdC8vIFdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBhIGJhaWwgYmVjYXVzZSBvZiBzQ1Ugd2UgaGF2ZSB0byB1cGRhdGVcblx0XHRcdFx0XHRcdC8vIHRoZSBwcm9wcywgc3RhdGUgYW5kIGRpcnR5LXN0YXRlLlxuXHRcdFx0XHRcdFx0Ly8gd2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIHN0cmljdC1lcXVhbGl0eSB3ZSBkb24ndCBhcyB0aGUgY2hpbGQgY291bGQgc3RpbGxcblx0XHRcdFx0XHRcdC8vIGJlIGRpcnRpZWQgc2VlICMzODgzXG5cdFx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLnNvbWUodm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRFTVBUWV9BUlIucHVzaC5hcHBseShjLl9yZW5kZXJDYWxsYmFja3MsIGMuX3N0YXRlQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnRXaWxsVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVcGRhdGUobmV3UHJvcHMsIGMuX25leHRTdGF0ZSwgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3BhcmVudERvbSA9IHBhcmVudERvbTtcblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCkge1xuXHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gTlVMTCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiAhaXNOZXcgJiYgYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdHNuYXBzaG90ID0gYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID1cblx0XHRcdFx0dG1wICE9IE5VTEwgJiYgdG1wLnR5cGUgPT09IEZyYWdtZW50ICYmIHRtcC5rZXkgPT0gTlVMTFxuXHRcdFx0XHRcdD8gY2xvbmVOb2RlKHRtcC5wcm9wcy5jaGlsZHJlbilcblx0XHRcdFx0XHQ6IHRtcDtcblxuXHRcdFx0b2xkRG9tID0gZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdGlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5fZmxhZ3MgJj0gUkVTRVRfTU9ERTtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBXZSByZW1vdmUgYW55IGNvbXBvbmVudERpZE1vdW50LCAuLi5cblx0XHRcdC8vIHRoYXQgaGF2ZSBiZWVuIGludmFsaWRhdGVkIGJ5IHVzXG5cdFx0XHQvLyBpbnRlcmNlcHRpbmcgdGhlIGVycm9yLlxuXHRcdFx0Y29tbWl0UXVldWUubGVuZ3RoID0gb2xkQ29tbWl0UXVldWVMZW5ndGg7XG5cdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBOVUxMO1xuXHRcdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdFx0aWYgKGlzSHlkcmF0aW5nIHx8IGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0aWYgKGUudGhlbikge1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9mbGFncyB8PSBpc0h5ZHJhdGluZ1xuXHRcdFx0XHRcdFx0PyBNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRFxuXHRcdFx0XHRcdFx0OiBNT0RFX1NVU1BFTkRFRDtcblxuXHRcdFx0XHRcdHdoaWxlIChvbGREb20gJiYgb2xkRG9tLm5vZGVUeXBlID09IDggJiYgb2xkRG9tLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0XHRvbGREb20gPSBvbGREb20ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2V4Y2Vzc0RvbUNoaWxkcmVuLmluZGV4T2Yob2xkRG9tKV0gPSBOVUxMO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld1ZOb2RlLl9jaGlsZHJlbiA9PSBOVUxMKSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbiB8fCBbXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlLnRoZW4pIG1hcmtBc0ZvcmNlKG5ld1ZOb2RlKTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gTlVMTCAmJlxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0KSB7XG5cdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBkaWZmRWxlbWVudE5vZGVzKFxuXHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cblx0cmV0dXJuIG5ld1ZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEID8gdW5kZWZpbmVkIDogb2xkRG9tO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNGb3JjZSh2bm9kZSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCkgdm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmICh2bm9kZS5fY2hpbGRyZW4pIHZub2RlLl9jaGlsZHJlbi5zb21lKG1hcmtBc0ZvcmNlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtWTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCwgcmVmUXVldWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZWZRdWV1ZS5sZW5ndGg7IGkrKykge1xuXHRcdGFwcGx5UmVmKHJlZlF1ZXVlW2ldLCByZWZRdWV1ZVsrK2ldLCByZWZRdWV1ZVsrK2ldKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgU2VlIGFib3ZlIGNvbW1lbnQgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG5cdGlmICh0eXBlb2Ygbm9kZSAhPSAnb2JqZWN0JyB8fCBub2RlID09IE5VTEwgfHwgbm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAoaXNBcnJheShub2RlKSkge1xuXHRcdHJldHVybiBub2RlLm1hcChjbG9uZU5vZGUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGFzc2lnbih7fSwgbm9kZSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIHZpcnR1YWwgbm9kZXNcbiAqIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtWTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqIEByZXR1cm5zIHtQcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdGxldCBvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAobmV3Vk5vZGUudHlwZSk7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgbmV3SHRtbDtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgb2xkSHRtbDtcblx0LyoqIEB0eXBlIHtDb21wb25lbnRDaGlsZHJlbn0gKi9cblx0bGV0IG5ld0NoaWxkcmVuO1xuXHRsZXQgdmFsdWU7XG5cdGxldCBpbnB1dFZhbHVlO1xuXHRsZXQgY2hlY2tlZDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgbmFtZXNwYWNlcyB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09ICdzdmcnKSBuYW1lc3BhY2UgPSBTVkdfTkFNRVNQQUNFO1xuXHRlbHNlIGlmIChub2RlVHlwZSA9PSAnbWF0aCcpIG5hbWVzcGFjZSA9IE1BVEhfTkFNRVNQQUNFO1xuXHRlbHNlIGlmICghbmFtZXNwYWNlKSBuYW1lc3BhY2UgPSBYSFRNTF9OQU1FU1BBQ0U7XG5cblx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhbHVlID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHZhbHVlICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIHZhbHVlID09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gdmFsdWUubG9jYWxOYW1lID09IG5vZGVUeXBlIDogdmFsdWUubm9kZVR5cGUgPT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSB2YWx1ZTtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IE5VTEwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRub2RlVHlwZSxcblx0XHRcdG5ld1Byb3BzLmlzICYmIG5ld1Byb3BzXG5cdFx0KTtcblxuXHRcdC8vIHdlIGFyZSBjcmVhdGluZyBhIG5ldyBub2RlLCBzbyB3ZSBjYW4gYXNzdW1lIHRoaXMgaXMgYSBuZXcgc3VidHJlZSAoaW5cblx0XHQvLyBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlmIChpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKVxuXHRcdFx0XHRvcHRpb25zLl9oeWRyYXRpb25NaXNtYXRjaChuZXdWTm9kZSwgZXhjZXNzRG9tQ2hpbGRyZW4pO1xuXHRcdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IE5VTEw7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPSBuZXdQcm9wcykpIHtcblx0XHRcdGRvbS5kYXRhID0gbmV3UHJvcHM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGV4Y2Vzc0RvbUNoaWxkcmVuIHdhcyBub3QgbnVsbCwgcmVwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQncyBjaGlsZHJlbjpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9XG5cdFx0XHRub2RlVHlwZSA9PSAndGV4dGFyZWEnICYmIG5ld1Byb3BzLmRlZmF1bHRWYWx1ZSAhPSBOVUxMXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IGV4Y2Vzc0RvbUNoaWxkcmVuICYmIHNsaWNlLmNhbGwoZG9tLmNoaWxkTm9kZXMpO1xuXG5cdFx0Ly8gSWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSBub3QgaHlkcmF0aW5nIGJ1dCBhcmUgdXNpbmdcblx0XHQvLyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET01cblx0XHQvLyBhdHRyaWJ1dGVzIHRvIGRpZmYgdGhlbVxuXHRcdGlmICghaXNIeWRyYXRpbmcgJiYgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0b2xkUHJvcHMgPSB7fTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZSA9IGRvbS5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0XHRvbGRQcm9wc1t2YWx1ZS5uYW1lXSA9IHZhbHVlLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBvbGRQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0b2xkSHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aSAhPSAnY2hpbGRyZW4nICYmXG5cdFx0XHRcdCEoaSBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gbmV3UHJvcHMpICYmXG5cdFx0XHRcdCEoaSA9PSAnY2hlY2tlZCcgJiYgJ2RlZmF1bHRDaGVja2VkJyBpbiBuZXdQcm9wcylcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIE5VTEwsIHZhbHVlLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGZvciAoaSBpbiBuZXdQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBuZXdQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0bmV3Q2hpbGRyZW4gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0XHRcdG5ld0h0bWwgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAndmFsdWUnKSB7XG5cdFx0XHRcdGlucHV0VmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnY2hlY2tlZCcpIHtcblx0XHRcdFx0Y2hlY2tlZCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0KCFpc0h5ZHJhdGluZyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgJiZcblx0XHRcdFx0b2xkUHJvcHNbaV0gIT09IHZhbHVlXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCB2YWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFpc0h5ZHJhdGluZyAmJlxuXHRcdFx0XHQoIW9sZEh0bWwgfHxcblx0XHRcdFx0XHQobmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwgJiYgbmV3SHRtbC5fX2h0bWwgIT0gZG9tLmlubmVySFRNTCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IG5ld0h0bWwuX19odG1sO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG9sZEh0bWwpIGRvbS5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdG5ld1ZOb2RlLnR5cGUgPT0gJ3RlbXBsYXRlJyA/IGRvbS5jb250ZW50IDogZG9tLFxuXHRcdFx0XHRpc0FycmF5KG5ld0NoaWxkcmVuKSA/IG5ld0NoaWxkcmVuIDogW25ld0NoaWxkcmVuXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRub2RlVHlwZSA9PSAnZm9yZWlnbk9iamVjdCcgPyBYSFRNTF9OQU1FU1BBQ0UgOiBuYW1lc3BhY2UsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5cblx0XHRcdFx0XHQ/IGV4Y2Vzc0RvbUNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0OiBvbGRWTm9kZS5fY2hpbGRyZW4gJiYgZ2V0RG9tU2libGluZyhvbGRWTm9kZSwgMCksXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb25cblx0XHRpZiAoIWlzSHlkcmF0aW5nIHx8IG5vZGVUeXBlID09ICd0ZXh0YXJlYScpIHtcblx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0aWYgKG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgaW5wdXRWYWx1ZSA9PSBOVUxMKSB7XG5cdFx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpbnB1dFZhbHVlICE9IFVOREVGSU5FRCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGlucHV0VmFsdWUgIT09IGRvbVtpXSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PSAncHJvZ3Jlc3MnICYmICFpbnB1dFZhbHVlKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdvcHRpb24nICYmIGlucHV0VmFsdWUgIT0gb2xkUHJvcHNbaV0pKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgaW5wdXRWYWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSAnY2hlY2tlZCc7XG5cdFx0XHRpZiAoY2hlY2tlZCAhPSBVTkRFRklORUQgJiYgY2hlY2tlZCAhPSBkb21baV0pIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBjaGVja2VkLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7UmVmPGFueT4gJiB7IF91bm1vdW50PzogdW5rbm93biB9fSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGhhc1JlZlVubW91bnQgPSB0eXBlb2YgcmVmLl91bm1vdW50ID09ICdmdW5jdGlvbic7XG5cdFx0XHRpZiAoaGFzUmVmVW5tb3VudCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgbGlrZSBtb3ZpbmcgbmFycm93aW5nIGNoZWNrcyBpbnRvIHZhcmlhYmxlc1xuXHRcdFx0XHRyZWYuX3VubW91bnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFoYXNSZWZVbm1vdW50IHx8IHZhbHVlICE9IE5VTEwpIHtcblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGNsZWFudXAgZnVuY3Rpb24gb24gdGhlIGZ1bmN0aW9uXG5cdFx0XHRcdC8vIGluc3RhbmNlIG9iamVjdCBpdHNlbGYgdG8gYXZvaWQgc2hhcGVcblx0XHRcdFx0Ly8gdHJhbnNpdGlvbmluZyB2bm9kZVxuXHRcdFx0XHRyZWYuX3VubW91bnQgPSByZWYodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7Vk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXQgaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgTlVMTCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IE5VTEwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSByLl9nbG9iYWxDb250ZXh0ID0gTlVMTDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9ICdmdW5jdGlvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUpIHtcblx0XHRyZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXHR9XG5cblx0dm5vZGUuX2NvbXBvbmVudCA9IHZub2RlLl9wYXJlbnQgPSB2bm9kZS5fZG9tID0gVU5ERUZJTkVEO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCAiaW1wb3J0IHsgRU1QVFlfT0JKLCBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29tbWl0Um9vdCwgZGlmZiB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBSZW5kZXIgYSBQcmVhY3QgdmlydHVhbCBub2RlIGludG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0byByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zNzk0XG5cdGlmIChwYXJlbnREb20gPT0gZG9jdW1lbnQpIHtcblx0XHRwYXJlbnREb20gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBOVUxMXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8IHBhcmVudERvbSkuX2NoaWxkcmVuID1cblx0XHRjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBOVUxMLCBbdm5vZGVdKTtcblxuXHQvLyBMaXN0IG9mIGVmZmVjdHMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBkaWZmaW5nLlxuXHRsZXQgY29tbWl0UXVldWUgPSBbXSxcblx0XHRyZWZRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm5hbWVzcGFjZVVSSSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gW3JlcGxhY2VOb2RlXVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0XHQ/IE5VTExcblx0XHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdFx0XHQ6IE5VTEwsXG5cdFx0Y29tbWl0UXVldWUsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IHJlcGxhY2VOb2RlXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nLFxuXHRcdHJlZlF1ZXVlXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlLCByZWZRdWV1ZSk7XG5cblx0Ly8gVGhlIGxpdmUgY2hpbGRyZW4gYXJlIHRyYWNrZWQgb24gX2NoaWxkcmVuIGFmdGVyIGRpZmZpbmcuXG5cdHZub2RlLnByb3BzLmNoaWxkcmVuID0gTlVMTDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsICJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0c1xuICogY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZFxuICogYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGxldCBkZWZhdWx0UHJvcHM7XG5cblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRkZWZhdWx0UHJvcHMgPSB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcztcblx0fVxuXG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChwcm9wc1tpXSA9PT0gVU5ERUZJTkVEICYmIGRlZmF1bHRQcm9wcyAhPSBVTkRFRklORUQpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0fVxuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdE5VTExcblx0KTtcbn1cbiIsICJpbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3IHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdFxuICogZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlciBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmdcbiAqIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudFR5cGV9ICovXG5cdFx0Y3Rvcixcblx0XHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdFx0aGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCBudWxsLCAiaW1wb3J0IHsgb3B0aW9ucyBhcyBfb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRJbmRleDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgY3VycmVudENvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgcHJldmlvdXNDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRIb29rID0gMDtcblxuLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSAqL1xubGV0IGFmdGVyUGFpbnRFZmZlY3RzID0gW107XG5cbi8vIENhc3QgdG8gdXNlIGludGVybmFsIE9wdGlvbnMgdHlwZVxuY29uc3Qgb3B0aW9ucyA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc30gKi8gKF9vcHRpb25zKTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbmxldCBvbGRSb290ID0gb3B0aW9ucy5fcm9vdDtcblxuLy8gV2UgdGFrZSB0aGUgbWluaW11bSB0aW1lb3V0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gZW5zdXJlIHRoYXRcbi8vIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBuZXh0IGZyYW1lLiAzNW1zIGlzIGJhc2VkIG9uIGEgMzBoelxuLy8gcmVmcmVzaCByYXRlLCB3aGljaCBpcyB0aGUgbWluaW11bSByYXRlIGZvciBhIHNtb290aCB1c2VyIGV4cGVyaWVuY2UuXG5jb25zdCBSQUZfVElNRU9VVCA9IDM1O1xubGV0IHByZXZSYWY7XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yb290ID0gKHZub2RlLCBwYXJlbnREb20pID0+IHtcblx0aWYgKHZub2RlICYmIHBhcmVudERvbS5fY2hpbGRyZW4gJiYgcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaykge1xuXHRcdHZub2RlLl9tYXNrID0gcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaztcblx0fVxuXG5cdGlmIChvbGRSb290KSBvbGRSb290KHZub2RlLCBwYXJlbnREb20pO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fcmVuZGVyID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSBvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRjdXJyZW50SW5kZXggPSAwO1xuXG5cdGNvbnN0IGhvb2tzID0gY3VycmVudENvbXBvbmVudC5fX2hvb2tzO1xuXHRpZiAoaG9va3MpIHtcblx0XHRpZiAocHJldmlvdXNDb21wb25lbnQgPT09IGN1cnJlbnRDb21wb25lbnQpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50SW5kZXggPSAwO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxuLy8gVE9ETzogSW1wcm92ZSB0eXBpbmcgb2YgY29tbWl0UXVldWUgcGFyYW1ldGVyXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUsIGNvbW1pdFF1ZXVlOiBhbnkpID0+IHZvaWR9ICovXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3Muc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHt9KTtcblx0fVxuXG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBTXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IFtpbml0aWFsU3RhdGVdXG4gKiBAcmV0dXJucyB7W1MsIChzdGF0ZTogUykgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcblx0Y3VycmVudEhvb2sgPSAxO1xuXHRyZXR1cm4gdXNlUmVkdWNlcihpbnZva2VPclJldHVybiwgaW5pdGlhbFN0YXRlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gQVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPFMsIEE+fSByZWR1Y2VyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgUywgKHN0YXRlOiBTKSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGxldCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cdFx0XHRjb25zdCBwcmV2Q1dVID0gY3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlO1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBmb3JjZWQgdXBkYXRlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgIHdpbGxcblx0XHRcdC8vIG5vdCBiZSBjYWxsZWQuIEJ1dCB3ZSB1c2UgdGhhdCB0byB1cGRhdGUgdGhlIGhvb2sgdmFsdWVzLCBzbyB3ZVxuXHRcdFx0Ly8gbmVlZCB0byBjYWxsIGl0LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvcmNlKSB7XG5cdFx0XHRcdFx0bGV0IHRtcCA9IHByZXZTY3U7XG5cdFx0XHRcdFx0Ly8gQ2xlYXIgdG8gYXZvaWQgb3RoZXIgc0NVIGhvb2tzIGZyb20gYmVpbmcgY2FsbGVkXG5cdFx0XHRcdFx0cHJldlNjdSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR1cGRhdGVIb29rU3RhdGUocCwgcywgYyk7XG5cdFx0XHRcdFx0cHJldlNjdSA9IHRtcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2Q1dVKSBwcmV2Q1dVLmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBUaGlzIFNDVSBoYXMgdGhlIHB1cnBvc2Ugb2YgYmFpbGluZyBvdXQgYWZ0ZXIgcmVwZWF0ZWQgdXBkYXRlc1xuXHRcdFx0Ly8gdG8gc3RhdGVmdWwgaG9va3MuXG5cdFx0XHQvLyB3ZSBzdG9yZSB0aGUgbmV4dCB2YWx1ZSBpbiBfbmV4dFZhbHVlWzBdIGFuZCBrZWVwIGRvaW5nIHRoYXQgZm9yIGFsbFxuXHRcdFx0Ly8gc3RhdGUgc2V0dGVycywgaWYgd2UgaGF2ZSBuZXh0IHN0YXRlcyBhbmRcblx0XHRcdC8vIGFsbCBuZXh0IHN0YXRlcyB3aXRoaW4gYSBjb21wb25lbnQgZW5kIHVwIGJlaW5nIGVxdWFsIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlXG5cdFx0XHQvLyB3ZSBhcmUgc2FmZSB0byBiYWlsIG91dCBmb3IgdGhpcyBzcGVjaWZpYyBjb21wb25lbnQuXG5cdFx0XHQvKipcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50W1wic2hvdWxkQ29tcG9uZW50VXBkYXRlXCJdfVxuXHRcdFx0ICovXG5cdFx0XHQvLyBAdHMtaWdub3JlIC0gV2UgZG9uJ3QgdXNlIFRTIHRvIGRvd250cmFuc3BpbGVcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Ly8gV2UgY2hlY2sgd2hldGhlciB3ZSBoYXZlIGNvbXBvbmVudHMgd2l0aCBhIG5leHRWYWx1ZSBzZXQgdGhhdFxuXHRcdFx0XHQvLyBoYXZlIHZhbHVlcyB0aGF0IGFyZW4ndCBlcXVhbCB0byBvbmUgYW5vdGhlciB0aGlzIHB1c2hlc1xuXHRcdFx0XHQvLyB1cyB0byB1cGRhdGUgZnVydGhlciBkb3duIHRoZSB0cmVlXG5cdFx0XHRcdGxldCB1cGRhdGVkSG9vayA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHA7XG5cdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3Quc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZWRIb29rID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHByZXZTY3UpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRIb29rID8gcmVzdWx0IHx8IHNob3VsZFVwZGF0ZSA6IHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAhdXBkYXRlZEhvb2sgfHwgc2hvdWxkVXBkYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHVwZGF0ZUhvb2tTdGF0ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKiBAdHlwZSB7KGluaXRpYWxWYWx1ZTogdW5rbm93bikgPT4gdW5rbm93bn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0cmVmKG51bGwpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSByZXN1bHQoKTtcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZhY3RvcnlcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGU8VD59ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGZhY3RvcnkoKTtcblx0XHRzdGF0ZS5fYXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKFxuXHRcdFx0Zm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IC8qKiBAdHlwZSB7YW55fSovICh2YWx1ZSlcblx0XHQpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHsoZXJyb3I6IHVua25vd24sIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKiBAcmV0dXJucyB7W3Vua25vd24sICgpID0+IHZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuLyoqIEB0eXBlIHsoKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuSWRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0Y29uc3QgaG9va3MgPSBjb21wb25lbnQuX19ob29rcztcblx0XHRpZiAoIWNvbXBvbmVudC5fcGFyZW50RG9tIHx8ICFob29rcykgY29udGludWU7XG5cdFx0dHJ5IHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH1cbn1cblxubGV0IEhBU19SQUYgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09ICdmdW5jdGlvbic7XG5cbi8qKlxuICogU2NoZWR1bGUgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBicm93c2VyIGhhcyBhIGNoYW5jZSB0byBwYWludCBhIG5ldyBmcmFtZS5cbiAqIERvIHRoaXMgYnkgY29tYmluaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSAockFGKSArIHNldFRpbWVvdXQgdG8gaW52b2tlIGEgY2FsbGJhY2sgYWZ0ZXJcbiAqIHRoZSBuZXh0IGJyb3dzZXIgZnJhbWUuXG4gKlxuICogQWxzbywgc2NoZWR1bGUgYSB0aW1lb3V0IGluIHBhcmFsbGVsIHRvIHRoZSB0aGUgckFGIHRvIGVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZFxuICogZXZlbiBpZiBSQUYgZG9lc24ndCBmaXJlIChmb3IgZXhhbXBsZSBpZiB0aGUgYnJvd3NlciB0YWIgaXMgbm90IHZpc2libGUpXG4gKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBhZnRlck5leHRGcmFtZShjYWxsYmFjaykge1xuXHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRpZiAoSEFTX1JBRikgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoZG9uZSwgUkFGX1RJTUVPVVQpO1xuXG5cdGxldCByYWY7XG5cdGlmIChIQVNfUkFGKSB7XG5cdFx0cmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRvbmUpO1xuXHR9XG59XG5cbi8vIE5vdGU6IGlmIHNvbWVvbmUgdXNlZCBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuLy8gdGhlbiBlZmZlY3RzIHdpbGwgQUxXQVlTIHJ1biBvbiB0aGUgTkVYVCBmcmFtZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IG9uZSwgaW5jdXJyaW5nIGEgfjE2bXMgZGVsYXkuXG4vLyBQZXJoYXBzIHRoaXMgaXMgbm90IHN1Y2ggYSBiaWcgZGVhbC5cbi8qKlxuICogU2NoZWR1bGUgYWZ0ZXJQYWludEVmZmVjdHMgZmx1c2ggYWZ0ZXIgdGhlIGJyb3dzZXIgcGFpbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3UXVldWVMZW5ndGhcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUVmZmVjdChob29rKSB7XG5cdC8vIEEgaG9vayBjYWxsIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGhvb2suX2NsZWFudXAgPSBob29rLl92YWx1ZSgpO1xuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gb2xkQXJnc1xuICogQHBhcmFtIHt1bmtub3duW119IG5ld0FyZ3NcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIEFyZ1xuICogQHBhcmFtIHtBcmd9IGFyZ1xuICogQHBhcmFtIHsoYXJnOiBBcmcpID0+IGFueX0gZlxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gaW52b2tlT3JSZXR1cm4oYXJnLCBmKSB7XG5cdHJldHVybiB0eXBlb2YgZiA9PSAnZnVuY3Rpb24nID8gZihhcmcpIDogZjtcbn1cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJleHBvcnQgdHlwZSBUb2RvID0ge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGRvbmU6IGJvb2xlYW47XG4gIG93bmVySWQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuVG9kb1RleHQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS50cmltKCkuc2xpY2UoMCwgMTYwKTtcbn1cbiIsICJjb25zdCBFTkNPREVEX0VOVElUSUVTID0gL1tcIiY8XS87XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3RyICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRW50aXRpZXMoc3RyKSB7XG5cdC8vIFNraXAgYWxsIHdvcmsgZm9yIHN0cmluZ3Mgd2l0aCBubyBlbnRpdGllcyBuZWVkaW5nIGVuY29kaW5nOlxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMCB8fCBFTkNPREVEX0VOVElUSUVTLnRlc3Qoc3RyKSA9PT0gZmFsc2UpIHJldHVybiBzdHI7XG5cblx0bGV0IGxhc3QgPSAwLFxuXHRcdGkgPSAwLFxuXHRcdG91dCA9ICcnLFxuXHRcdGNoID0gJyc7XG5cblx0Ly8gU2VlayBmb3J3YXJkIGluIHN0ciB1bnRpbCB0aGUgbmV4dCBlbnRpdHkgY2hhcjpcblx0Zm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRjaCA9ICcmcXVvdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdGNoID0gJyZhbXA7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRjaCA9ICcmbHQ7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gQXBwZW5kIHNraXBwZWQvYnVmZmVyZWQgY2hhcmFjdGVycyBhbmQgdGhlIGVuY29kZWQgZW50aXR5OlxuXHRcdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRcdG91dCArPSBjaDtcblx0XHQvLyBTdGFydCB0aGUgbmV4dCBzZWVrL2J1ZmZlciBhZnRlciB0aGUgZW50aXR5J3Mgb2Zmc2V0OlxuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0cmV0dXJuIG91dDtcbn1cbiIsICIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgZW5jb2RlRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdGlmICghcHJvcHMpIHByb3BzID0ge307XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcyxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRpZiAoJ3JlZicgaW4gbm9ybWFsaXplZFByb3BzKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cdFx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0XHRpZiAoaSA9PSAncmVmJykge1xuXHRcdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7Vk5vZGUgJiB7IF9fc291cmNlOiBhbnk7IF9fc2VsZjogYW55IH19ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHM6IG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBsYXRlIHZub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBleHBlY3RlZCB0byBiZVxuICogdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSAge0FycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59IGV4cHJzXG4gKiBAcmV0dXJucyB7Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIGpzeFRlbXBsYXRlKHRlbXBsYXRlcywgLi4uZXhwcnMpIHtcblx0Y29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZShGcmFnbWVudCwgeyB0cGw6IHRlbXBsYXRlcywgZXhwcnMgfSk7XG5cdC8vIEJ5cGFzcyByZW5kZXIgdG8gc3RyaW5nIHRvcCBsZXZlbCBGcmFnbWVudCBvcHRpbWl6YXRpb25cblx0dm5vZGUua2V5ID0gdm5vZGUuX3Zub2RlO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmNvbnN0IEpTX1RPX0NTUyA9IHt9O1xuY29uc3QgQ1NTX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8qKlxuICogVW53cmFwIHBvdGVudGlhbCBzaWduYWxzLlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IHZhbHVlLnZhbHVlT2YoKVxuXHRcdDogdmFsdWU7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEhUTUwgYXR0cmlidXRlIHRvIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdFxuICogZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZVxuICogSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpzeEF0dHIobmFtZSwgdmFsdWUpIHtcblx0aWYgKG9wdGlvbnMuYXR0cikge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuYXR0cihuYW1lLCB2YWx1ZSk7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsdWUgPSBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpO1xuXG5cdGlmIChuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAna2V5JykgcmV0dXJuICcnO1xuXHRpZiAobmFtZSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcblx0XHRcdGxldCB2YWwgPSB2YWx1ZVtwcm9wXTtcblx0XHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPVxuXHRcdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0XHQ/IHByb3Bcblx0XHRcdFx0XHRcdDogSlNfVE9fQ1NTW3Byb3BdIHx8XG5cdFx0XHRcdFx0XHRcdChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoQ1NTX1JFR0VYLCAnLSQmJykudG9Mb3dlckNhc2UoKSk7XG5cblx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc7Jztcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdFx0Ly8gRXhjbHVkZSBjdXN0b20tYXR0cmlidXRlc1xuXHRcdFx0XHRcdCFuYW1lLnN0YXJ0c1dpdGgoJy0tJykgJiZcblx0XHRcdFx0XHQhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QobmFtZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJ3B4Oyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyID0gc3RyICsgbmFtZSArICc6JyArIHZhbCArIHN1ZmZpeDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKHN0cikgKyAnXCInO1xuXHR9XG5cblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR2YWx1ZSA9PT0gZmFsc2UgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG5hbWU7XG5cblx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpICsgJ1wiJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBkeW5hbWljIGNoaWxkIHBhc3NlZCB0byBganN4VGVtcGxhdGVgLiBUaGlzIGZ1bmN0aW9uXG4gKiBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGFcbiAqIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCBWTm9kZSB8IEFycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGpzeEVzY2FwZSh2YWx1ZSkge1xuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDaGVjayBmb3IgVk5vZGVcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlW2ldID0ganN4RXNjYXBlKHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudCxcblx0Ly8gcHJlY29tcGlsZWQgSlNYIHRyYW5zZm9ybVxuXHRqc3hUZW1wbGF0ZSxcblx0anN4QXR0cixcblx0anN4RXNjYXBlXG59O1xuIiwgImltcG9ydCB7IExpbmssIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcywgU2lnbkluV2l0aEdvb2dsZSwgc2lnbk91dCwgdXNlQXV0aCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGNsZWFuVG9kb1RleHQsIHR5cGUgVG9kbyB9IGZyb20gXCIuLi9zaGFyZWQvdG9kb1wiO1xuXG5mdW5jdGlvbiBBdXRoQXZhdGFyKHsgbGFiZWwsIHBpY3R1cmUgfTogeyBsYWJlbDogc3RyaW5nOyBwaWN0dXJlPzogc3RyaW5nIH0pIHtcbiAgY29uc3QgaW5pdGlhbCA9IGxhYmVsLnRyaW0oKS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpIHx8IFwiP1wiO1xuXG4gIGlmIChwaWN0dXJlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaC03IHctNyBzaHJpbmstMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTgwMCBiZy1uZXV0cmFsLTkwMCBvYmplY3QtY292ZXJcIlxuICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgc3JjPXtwaWN0dXJlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggaC03IHctNyBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItbmV1dHJhbC04MDAgYmctbmV1dHJhbC05MDAgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LW5ldXRyYWwtMzAwXCJcbiAgICA+XG4gICAgICB7aW5pdGlhbH1cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFRvZG9QYWdlKCkge1xuICBjb25zdCB0b2RvcyA9IHVzZVF1ZXJ5PFRvZG9bXT4oXCJ0b2Rvc1wiKTtcbiAgY29uc3QgYWRkVG9kbyA9IHVzZU11dGF0aW9uPFt0ZXh0OiBzdHJpbmddLCB2b2lkPihcImFkZFRvZG9cIik7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQ6IFN1Ym1pdEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCB0ZXh0ID0gY2xlYW5Ub2RvVGV4dChTdHJpbmcoZGF0YS5nZXQoXCJ0ZXh0XCIpID8/IFwiXCIpKTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBhZGRUb2RvKHRleHQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIj5pbWFnZS12aXN1YWxpemVyLWVkaXRvcjwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYi04IGZsZXggZ2FwLTNcIiBvblN1Ym1pdD17KGV2ZW50KSA9PiB2b2lkIG9uU3VibWl0KGV2ZW50KX0+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXgtMSBib3JkZXIgYm9yZGVyLW5ldXRyYWwtNzAwIGJnLWJsYWNrIHB4LTMgcHktMiB0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItd2hpdGVcIiBuYW1lPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgdG9kb1wiIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZSBweC00IHB5LTIgZm9udC1tZWRpdW1cIiB0eXBlPVwic3VibWl0XCI+QWRkPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLW5ldXRyYWwtODAwIGJvcmRlci15IGJvcmRlci1uZXV0cmFsLTgwMFwiPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTNcIiBrZXk9e3RvZG8uaWR9Pnt0b2RvLnRleHR9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3RhdHVzUGFnZSgpIHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwibm90IGNoZWNrZWRcIik7XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tTdGF0dXMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImFwaS9zdGF0dXNcIik7XG4gICAgc2V0U3RhdHVzKHJlc3BvbnNlLm9rID8gYXdhaXQgcmVzcG9uc2UudGV4dCgpIDogXCJlcnJvciBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+U3RhdHVzPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1uZXV0cmFsLTQwMFwiPlRoaXMgcm91dGUgY2FsbHMgdGhlIHNlcnZlciBlbmRwb2ludCBhdCAvYXBpL3N0YXR1cy48L3A+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2hpdGUgcHgtNCBweS0yIGZvbnQtbWVkaXVtXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgY2hlY2tTdGF0dXMoKX0+XG4gICAgICAgIENoZWNrIGVuZHBvaW50XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgZm9udC1tb25vIHRleHQtc20gdGV4dC1uZXV0cmFsLTQwMFwiPmVuZHBvaW50OiB7c3RhdHVzfTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGF1dGhMYWJlbCA9IGF1dGguZGlzcGxheU5hbWU7XG4gIGNvbnN0IGF1dGhTdGF0dXMgPSBhdXRoLmlzTG9hZGluZyAmJiBhdXRoLmlzR3Vlc3QgPyBcImNoZWNraW5nIHNlc3Npb25cIiA6IFwic2lnbmVkIGluIGFzIFwiICsgYXV0aExhYmVsO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ibGFjayBweC02IHB5LTEwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctMCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgeyFhdXRoLmlzTG9hZGluZyA/IDxBdXRoQXZhdGFyIGxhYmVsPXthdXRoTGFiZWx9IHBpY3R1cmU9e2F1dGgucGljdHVyZX0gLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtaW4tdy0wIHRydW5jYXRlIGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtbmV1dHJhbC01MDBcIj57YXV0aFN0YXR1c308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshYXV0aC5pc0xvYWRpbmcgJiYgYXV0aC5pc0d1ZXN0ID8gKFxuICAgICAgICAgICAgICA8U2lnbkluV2l0aEdvb2dsZSBjbGFzc05hbWU9XCJzaHJpbmstMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtNzAwIHB4LTMgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1uZXV0cmFsLTIwMCBob3Zlcjpib3JkZXItd2hpdGUgaG92ZXI6dGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICApIDogIWF1dGguaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNocmluay0wIHRleHQtc20gdGV4dC1uZXV0cmFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XG4gICAgICAgICAgICAgICAgU2lnbiBvdXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1iLTggZmxleCBnYXAtNCB0ZXh0LXNtIHRleHQtbmV1dHJhbC00MDBcIj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGVcIiB0bz1cIi9cIj5Ub2RvczwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGVcIiB0bz1cIi9zdGF0dXNcIj5TdGF0dXM8L0xpbms+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxUb2RvUGFnZSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0YXR1c1wiIGVsZW1lbnQ9ezxTdGF0dXNQYWdlIC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PHNlY3Rpb24+PGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgZm9udC1ib2xkXCI+Tm90IGZvdW5kPC9oMT48TGluayBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtMzAwIGhvdmVyOnRleHQtd2hpdGVcIiB0bz1cIi9cIj5CYWNrIHRvIHRvZG9zPC9MaW5rPjwvc2VjdGlvbj59IC8+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vY2xpZW50L2luZGV4LnRzeFwiO1xuXG5yZW5kZXIoaChBcHAsIHt9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNPLElDMEJNQTtBRDFCTixJRVVEQztBRlZDLElHR0hDO0FISEcsSUc4Rk1DO0FIOUZOLElJK0tIQztBSi9LRyxJSTBMSEM7QUoxTEcsSUk0TERDO0FKNUxDLElJc05EQztBSnROQyxJS1NIQztBTFRHLElLVU5DO0FMVk0sSUtXTkM7QUxYTSxJS3lCREM7QUx6QkMsSUtzQ0hDO0FMdENHLElLcUxEQztBTHJMQyxJS3NMREM7QUx0TEMsSU1FSUM7QU5GSixJQWlCTUMsSUFBZ0MsQ0FBRztBQWpCekMsSUFrQk1DLElBQVksQ0FBQTtBQWxCbEIsSUFtQk1DLElBQ1o7QUFwQk0sSUNDTUMsSUFBVUMsTUFBTUQ7QUFTdEIsU0FBU0UsRUFBT0MsSUFBS0MsSUFBQUE7QUFFM0IsV0FBU1IsTUFBS1EsR0FB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QUMsR0FBRyxTQUFTLGVBQWUsS0FBSyxDQUFDOyIsCiAgIm5hbWVzIjogWyJzbGljZSIsICJvcHRpb25zIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJwcmV2RGVib3VuY2UiLCAiZGVmZXIiLCAiZGVwdGhTb3J0IiwgIl9pZCIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImkiLCAiRU1QVFlfT0JKIiwgIkVNUFRZX0FSUiIsICJJU19OT05fRElNRU5TSU9OQUwiLCAiaXNBcnJheSIsICJBcnJheSIsICJhc3NpZ24iLCAib2JqIiwgInByb3BzIiwgInJlbW92ZU5vZGUiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgInJlbW92ZUNoaWxkIiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjaGlsZHJlbiIsICJrZXkiLCAicmVmIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgImNhbGwiLCAiZGVmYXVsdFByb3BzIiwgImNyZWF0ZVZOb2RlIiwgIm9yaWdpbmFsIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAiX19pIiwgIl9fdSIsICJGcmFnbWVudCIsICJwcm9wcyIsICJjaGlsZHJlbiIsICJCYXNlQ29tcG9uZW50IiwgImNvbnRleHQiLCAidGhpcyIsICJnZXREb21TaWJsaW5nIiwgInZub2RlIiwgImNoaWxkSW5kZXgiLCAiX18iLCAiX19pIiwgInNpYmxpbmciLCAiX19rIiwgImxlbmd0aCIsICJfX2UiLCAidHlwZSIsICJyZW5kZXJDb21wb25lbnQiLCAiY29tcG9uZW50IiwgIl9fUCIsICJfX2QiLCAib2xkVk5vZGUiLCAiX192IiwgIm9sZERvbSIsICJjb21taXRRdWV1ZSIsICJyZWZRdWV1ZSIsICJuZXdWTm9kZSIsICJhc3NpZ24iLCAib3B0aW9ucyIsICJkaWZmIiwgIl9fbiIsICJuYW1lc3BhY2VVUkkiLCAiX191IiwgImNvbW1pdFJvb3QiLCAidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCAiX19jIiwgImJhc2UiLCAic29tZSIsICJjaGlsZCIsICJlbnF1ZXVlUmVuZGVyIiwgImMiLCAicmVyZW5kZXJRdWV1ZSIsICJwdXNoIiwgInByb2Nlc3MiLCAiX19yIiwgInByZXZEZWJvdW5jZSIsICJkZWJvdW5jZVJlbmRlcmluZyIsICJkZWZlciIsICJsIiwgInNvcnQiLCAiZGVwdGhTb3J0IiwgInNoaWZ0IiwgImRpZmZDaGlsZHJlbiIsICJwYXJlbnREb20iLCAicmVuZGVyUmVzdWx0IiwgIm5ld1BhcmVudFZOb2RlIiwgIm9sZFBhcmVudFZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAibmFtZXNwYWNlIiwgImV4Y2Vzc0RvbUNoaWxkcmVuIiwgImlzSHlkcmF0aW5nIiwgImkiLCAiY2hpbGRWTm9kZSIsICJuZXdEb20iLCAiZmlyc3RDaGlsZERvbSIsICJyZXN1bHQiLCAic2hvdWxkUGxhY2UiLCAib2xkQ2hpbGRyZW4iLCAiRU1QVFlfQVJSIiwgIm5ld0NoaWxkcmVuTGVuZ3RoIiwgImNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkiLCAiRU1QVFlfT0JKIiwgInJlZiIsICJhcHBseVJlZiIsICJpbnNlcnQiLCAibmV4dFNpYmxpbmciLCAic2tld2VkSW5kZXgiLCAibWF0Y2hpbmdJbmRleCIsICJvbGRDaGlsZHJlbkxlbmd0aCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJza2V3IiwgIkFycmF5IiwgImNvbnN0cnVjdG9yIiwgIlN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJpc0FycmF5IiwgIl9fYiIsICJrZXkiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJub2RlVHlwZSIsICJ0b0NoaWxkQXJyYXkiLCAib3V0IiwgIngiLCAieSIsICJtYXRjaGVkIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgIkVWRU5UX0FUVEFDSEVEIiwgImV2ZW50Q2xvY2siLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFByb3h5Q2FwdHVyZSIsICJldmVudFByb3h5IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRIYW5kbGVyIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiZXZlbnQiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImlzTmV3IiwgIm9sZFByb3BzIiwgIm9sZFN0YXRlIiwgInNuYXBzaG90IiwgImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsICJuZXdQcm9wcyIsICJpc0NsYXNzQ29tcG9uZW50IiwgInByb3ZpZGVyIiwgImNvbXBvbmVudENvbnRleHQiLCAicmVuZGVySG9vayIsICJjb3VudCIsICJuZXdUeXBlIiwgIm91dGVyIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAiY29udGV4dFR5cGUiLCAiX19FIiwgImRvUmVuZGVyIiwgInN1YiIsICJzdGF0ZSIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgImFwcGx5IiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiY29tcG9uZW50RGlkVXBkYXRlIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJjbG9uZU5vZGUiLCAidGhlbiIsICJNT0RFX0hZRFJBVEUiLCAiaW5kZXhPZiIsICJyZW1vdmVOb2RlIiwgIm1hcmtBc0ZvcmNlIiwgImRpZmZFbGVtZW50Tm9kZXMiLCAiZGlmZmVkIiwgInJvb3QiLCAiY2IiLCAiY2FsbCIsICJub2RlIiwgIm1hcCIsICJuZXdIdG1sIiwgIm9sZEh0bWwiLCAibmV3Q2hpbGRyZW4iLCAiaW5wdXRWYWx1ZSIsICJjaGVja2VkIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiaXMiLCAiX19tIiwgImRhdGEiLCAiZGVmYXVsdFZhbHVlIiwgImNoaWxkTm9kZXMiLCAiYXR0cmlidXRlcyIsICJfX2h0bWwiLCAiaW5uZXJIVE1MIiwgImNvbnRlbnQiLCAidW5kZWZpbmVkIiwgImhhc1JlZlVubW91bnQiLCAiY3VycmVudCIsICJza2lwUmVtb3ZlIiwgInIiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAicmVwbGFjZU5vZGUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiZmlyc3RDaGlsZCIsICJjcmVhdGVDb250ZXh0IiwgImRlZmF1bHRWYWx1ZSIsICJDb250ZXh0IiwgInByb3BzIiwgInN1YnMiLCAiY3R4IiwgInRoaXMiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgIlNldCIsICJfX2MiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9wcm9wcyIsICJ2YWx1ZSIsICJmb3JFYWNoIiwgImMiLCAiX19lIiwgImVucXVldWVSZW5kZXIiLCAic3ViIiwgImFkZCIsICJvbGQiLCAiZGVsZXRlIiwgImNhbGwiLCAiY2hpbGRyZW4iLCAiaSIsICJfXyIsICJQcm92aWRlciIsICJfX2wiLCAiQ29uc3VtZXIiLCAiY29udGV4dFZhbHVlIiwgImNvbnRleHRUeXBlIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJfX2QiLCAiY29tcG9uZW50RGlkQ2F0Y2giLCAiX19FIiwgImUiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJCYXNlQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiY3VycmVudEluZGV4IiwgImN1cnJlbnRDb21wb25lbnQiLCAicHJldmlvdXNDb21wb25lbnQiLCAicHJldlJhZiIsICJjdXJyZW50SG9vayIsICJhZnRlclBhaW50RWZmZWN0cyIsICJvcHRpb25zIiwgIl9vcHRpb25zIiwgIm9sZEJlZm9yZURpZmYiLCAiX19iIiwgIm9sZEJlZm9yZVJlbmRlciIsICJfX3IiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAiX19jIiwgIm9sZEJlZm9yZVVubW91bnQiLCAidW5tb3VudCIsICJvbGRSb290IiwgIl9fIiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgIl9faCIsICJob29rcyIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAidXNlU3RhdGUiLCAiaW5pdGlhbFN0YXRlIiwgInVzZVJlZHVjZXIiLCAiaW52b2tlT3JSZXR1cm4iLCAicmVkdWNlciIsICJpbml0IiwgImhvb2tTdGF0ZSIsICJfcmVkdWNlciIsICJhY3Rpb24iLCAiY3VycmVudFZhbHVlIiwgIl9fTiIsICJuZXh0VmFsdWUiLCAic2V0U3RhdGUiLCAiX19mIiwgInVwZGF0ZUhvb2tTdGF0ZSIsICJwIiwgInMiLCAiYyIsICJ1cGRhdGVkSG9vayIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJwcmV2U2N1IiwgInJlc3VsdCIsICJjYWxsIiwgInRoaXMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgInByZXZDV1UiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAidG1wIiwgInVzZUVmZmVjdCIsICJjYWxsYmFjayIsICJhcmdzIiwgInN0YXRlIiwgIl9fcyIsICJhcmdzQ2hhbmdlZCIsICJfcGVuZGluZ0FyZ3MiLCAidXNlQ29udGV4dCIsICJjb250ZXh0IiwgInByb3ZpZGVyIiwgImN1cnJlbnRDb21wb25lbnQiLCAiX19jIiwgInN0YXRlIiwgImdldEhvb2tTdGF0ZSIsICJjdXJyZW50SW5kZXgiLCAiYyIsICJfXyIsICJzdWIiLCAicHJvcHMiLCAidmFsdWUiLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImQiLCAiaCIsICJjYWxsYmFja1BhdGgiLCAiZCIsICJoIiwgIngiLCAiZCIsICJoIiwgInZub2RlSWQiLCAiY3JlYXRlVk5vZGUiLCAidHlwZSIsICJwcm9wcyIsICJrZXkiLCAiaXNTdGF0aWNDaGlsZHJlbiIsICJfX3NvdXJjZSIsICJfX3NlbGYiLCAicmVmIiwgImkiLCAibm9ybWFsaXplZFByb3BzIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAidm5vZGVJZCIsICJfX2kiLCAiX191IiwgImRlZmF1bHRQcm9wcyIsICJvcHRpb25zIiwgInUiLCAiZCIsICJhdXRoIl0KfQo=
