// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/dist/preact.module.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/internal.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/hooks/dist/hooks.module.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/transport.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/auth.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/router.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/hooks.js
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
  textFontFamily: "Inter",
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
      const asset = "ref" in op.asset ? { assetId: resolveAssetId(op.asset.ref) } : { src: op.asset.src, width: op.asset.width, height: op.asset.height };
      const timeout = "src" in asset ? UPLOAD_TIMEOUT_MS : OP_TIMEOUT_MS;
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
      const result = await withTimeout(
        api.replaceLayerAsset(resolveLayerId(op.id), op.src, op.width, op.height),
        UPLOAD_TIMEOUT_MS
      );
      mapAssetId(op.clientAssetId, result.assetId);
      seedAsset(op.clientAssetId, {
        src: result.src,
        paintSrc: op.src,
        width: op.width,
        height: op.height
      });
      seedAsset(result.assetId, {
        src: result.src,
        paintSrc: op.src,
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
function useAssetEntry(id) {
  const [entry, setEntry] = d2(() => getAssetEntry(id));
  h2(() => {
    const check = () => setEntry(getAssetEntry(id));
    check();
    listeners2.add(check);
    ensureAsset(id).catch((error) => console.error("Asset load failed:", error));
    return () => {
      listeners2.delete(check);
    };
  }, [id]);
  return entry;
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
    if (entry?.src) return entry.src;
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
    return canvas.toDataURL("image/jpeg", 0.85);
  } catch {
    const fallback = await firstLayerSrc(doc);
    if (fallback) return fallback;
    throw new Error("Could not render thumbnail");
  }
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
function blankLayerAsset(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, width);
  canvas.height = Math.max(1, height);
  return { src: canvas.toDataURL("image/png"), width: canvas.width, height: canvas.height };
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
async function paintBrushStroke(src, _width, _height, opacity = 1) {
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
  const width = Math.max(1, base.naturalWidth);
  const height = Math.max(1, base.naturalHeight);
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
  applyLayerRaster(layer.id, afterSrc, width, height, clearText);
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
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
  const style = {
    width: layer.w,
    height: layer.h,
    transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg) scaleX(${layer.flipX ? -1 : 1})`,
    opacity: layer.opacity,
    display: layer.visible ? "block" : "none",
    mixBlendMode: previewBlend ?? layer.blendMode,
    visibility: editing ? "hidden" : "visible"
  };
  if (!asset) {
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
      src: asset.src,
      style
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
      const canvas = brushCanvasRef.current;
      if (canvas) {
        const src = canvas.toDataURL("image/png");
        const width = canvas.width;
        const height = canvas.height;
        void paintBrushStroke(src, width, height, brushOpacity / 100).finally(() => {
          canvas.getContext("2d")?.clearRect(0, 0, width, height);
        });
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
                  /* @__PURE__ */ u3("canvas", { ref: brushCanvasRef, className: "brush-overlay", style: { opacity: brushOpacity / 100 }, width: doc.width, height: doc.height }),
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
    /* @__PURE__ */ u3(Dropdown, { label: "Font", value: fontFamily, options: ["Inter", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value })), onChange: (v3) => setState({ textFontFamily: v3 }) }),
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
      /* @__PURE__ */ u3(Dropdown, { label: "Font", value: text.fontFamily, options: ["Inter", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value })), onChange: (v3) => updateTextLayer(selected.id, { fontFamily: v3 }, "Font") }),
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
  return /* @__PURE__ */ u3("span", { className: "checker layer-thumb", children: asset ? /* @__PURE__ */ u3("img", { alt: "", src: asset.src, draggable: false }) : null });
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
      const result = await api.createProjectFromImage(
        image.name,
        image.width,
        image.height,
        image.name,
        image.src,
        transform
      );
      seedAsset(result.assetId, {
        src: result.src || image.src,
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
          await api.setProjectThumb(result.id, canvas.toDataURL("image/jpeg", 0.85));
        }
      } catch (thumbError) {
        console.warn("Could not write project thumb:", thumbError);
        if (result.src) {
          await api.setProjectThumb(result.id, result.src).catch(() => void 0);
        }
      }
      navigate2(`/p/${result.id}`);
    } catch (error) {
      console.error("Could not create project from image:", error);
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
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
:root {
  color-scheme: light;
  --bg: #fff; --surface: #fff; --surface-subtle: #fafafa; --canvas: #f4f4f4;
  --border: #e4e4e4; --border-strong: #111; --text: #0a0a0a;
  --muted: #737373; --faint: #a3a3a3; --accent: #2563eb; --accent-hover: #1d4ed8;
  --accent-soft: #eff6ff; --danger: #dc2626; --checker-a: #ececec; --checker-b: #d8d8d8;
  --shadow: 0 16px 48px rgba(0,0,0,.14);
  --sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --mono: ui-monospace, SFMono-Regular, Menlo, monospace;
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
button, input { font: inherit; }
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
.home-meta { margin: 12px 0 38px; padding-top: 9px; display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--border); color: var(--faint); font: 10.5px var(--mono); letter-spacing: .08em; text-transform: uppercase; }
.intro { margin: 0 0 24px; color: var(--muted); font-size: 13px; }
.create-panel { margin-bottom: 38px; }
.eyebrow { margin: 0 0 10px; color: var(--faint); font: 10.5px var(--mono); letter-spacing: .09em; text-transform: uppercase; }
.presets { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 10px; }
.preset { min-width: 0; padding: 11px; text-align: left; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--muted); }
.preset:hover { border-color: var(--border-strong); color: var(--text); }
.preset.selected { border-color: var(--accent); background: var(--accent-soft); color: var(--text); }
.preset-name { display: block; margin-bottom: 3px; color: inherit; font-size: 12.5px; font-weight: 600; }
.preset-size { display: block; color: var(--faint); font: 10.5px var(--mono); }
.create-actions { display: flex; gap: 8px; }
.create-actions .button:first-of-type { flex: 1; }
.section-label { display: flex; align-items: center; gap: 10px; margin: 0 0 12px; color: var(--faint); font: 10.5px var(--mono); letter-spacing: .09em; text-transform: uppercase; }
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
.panel-head { display: flex; align-items: center; gap: 7px; height: 42px; padding: 0 12px; border-bottom: 1px solid var(--border); color: var(--muted); font: 10.5px var(--mono); letter-spacing: .08em; text-transform: uppercase; }.panel-head svg { width: 13px; height: 13px; }
.layers-head { height: 36px; flex-shrink: 0; }.layers-head .layer-add { margin-left: auto; width: 24px; height: 24px; display: grid; place-items: center; padding: 0; border: 0; border-radius: 2px; background: transparent; color: var(--muted); cursor: pointer; }.layers-head .layer-add:hover { background: var(--surface-subtle); color: var(--text); }.layers-head .layer-add svg { width: 14px; height: 14px; }
.panel-width-resizer { position: absolute; z-index: 45; left: -3px; top: 0; bottom: 0; width: 6px; cursor: ew-resize; }.panel-width-resizer:hover,.panel-width-resizer:active { background: color-mix(in srgb,var(--accent) 45%,transparent); }
.properties-resizer { height: 5px; flex-shrink: 0; cursor: ns-resize; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface-subtle); }.properties-resizer:hover,.properties-resizer:active { background: var(--accent); }
.properties-panel { min-height: 0; display: flex; flex: 0 0 auto; flex-direction: column; background: var(--surface); }
.properties-panel > .panel-head { height: 34px; flex-shrink: 0; color: var(--text); font-weight: 600; }
.properties-body { min-height: 0; overflow-y: auto; }
.properties-empty { margin: 0; padding: 16px 12px; color: var(--faint); font: 10.5px var(--mono); }
.prop-section { padding: 8px 10px; border-bottom: 1px solid var(--border); }
.prop-field { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 6px 0; color: var(--muted); font: 10.5px var(--mono); }
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
.global-color-section { background: var(--surface-subtle); }.global-color-row { height: 30px; display: flex; align-items: center; gap: 8px; color: var(--muted); font: 10.5px var(--mono); }.global-color-row code { margin-left: auto; color: var(--faint); font: 9.5px var(--mono); }.global-swatches { position: relative; width: 45px; height: 30px; }.global-swatch { position: absolute; width: 23px; height: 23px; padding: 0; border: 2px solid var(--surface); border-radius: 0; outline: 1px solid var(--muted); }.global-swatch.background { right: 1px; bottom: 0; }.global-swatch.foreground { z-index: 2; left: 1px; top: 0; }.swap-colors { position: absolute; right: -13px; top: -5px; width: 17px; height: 17px; padding: 0; border: 0; background: transparent; color: var(--faint); font-size: 12px; }.swap-colors:hover { color: var(--text); }
.color-popover { margin: 8px -2px 0; padding: 8px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.color-popover-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 7px; color: var(--text); font: 10px var(--mono); }.color-popover-head button { width: 20px; height: 20px; padding: 0; border: 0; background: transparent; color: var(--muted); }.color-picker { margin-top: 0; }
.sv-picker { position: relative; height: 104px; overflow: hidden; cursor: crosshair; background-image: linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent); }.sv-picker span { pointer-events: none; position: absolute; width: 10px; height: 10px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 0 1px #000; transform: translate(-50%,-50%); }
.hue-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 9px; margin: 8px 0; border: 0; border-radius: 0; background: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); }.hue-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }.hue-slider::-moz-range-thumb { width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }
.color-row { display: flex; gap: 5px; }.color-swatch { width: 27px; height: 27px; flex-shrink: 0; padding: 2px; border: 1px solid var(--border); }.color-swatch i { display: block; width: 100%; height: 100%; }.hex-input { min-width: 0; flex: 1; height: 27px; padding: 4px 6px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10.5px var(--mono); text-transform: uppercase; user-select: text; }.eyedropper { width: 27px; height: 27px; padding: 0; border: 1px solid var(--border); background: var(--surface); color: var(--muted); }.eyedropper:hover { color: var(--text); border-color: var(--border-strong); }
.rgb-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 5px; margin-top: 6px; }.rgb-row label { display: flex; align-items: center; gap: 3px; color: var(--faint); font: 9px var(--mono); }.rgb-row input { min-width: 0; width: 100%; height: 25px; padding: 3px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10px var(--mono); }
.blend-control { position: relative; padding: 10px 12px; border-bottom: 1px solid var(--border); }.blend-control.disabled { opacity: .4; }.blend-control label { display: block; margin-bottom: 5px; color: var(--muted); font: 10.5px var(--mono); }.blend-trigger { width: 100%; height: 29px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu { position: absolute; z-index: 30; top: 61px; left: 12px; right: 12px; max-height: 248px; overflow-y: auto; padding: 4px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.blend-menu button { display: block; width: 100%; padding: 5px 7px; border: 0; background: transparent; color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu button:hover,.blend-menu button:focus,.blend-menu button.selected { outline: 0; background: var(--accent-soft); }.blend-hint { display: block; margin-top: 4px; color: var(--faint); font-size: 9.5px; }
.opacity-control { --progress: 100%; padding: 10px 12px; border-bottom: 1px solid var(--border); }.opacity-control.disabled { opacity: .4; }.opacity-label { display: flex; justify-content: space-between; margin-bottom: 5px; color: var(--muted); font: 10.5px var(--mono); }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvZ2VvbWV0cnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FwaS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvc3RvcmUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3BlcnNpc3QudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2Fzc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbGliL3JlbmRlci50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvaGlzdG9yeS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYWN0aW9ucy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvdmlldy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbGliL2ltYWdlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy9pbmRleC5qcyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9DYW52YXNTdGFnZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvSWNvbnMudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1Byb3BlcnRpZXNQYW5lbC50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvTGF5ZXJzUGFuZWwudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1Rvb2xiYXIudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Ub3BCYXIudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0VkaXRvci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvSG9tZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2luZGV4LnRzeCIsICJsYWtlYmVkLXNvdXJjZTpfX2xha2ViZWQvY2xpZW50LWVudHJ5LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IEVNUFRZX0FSUiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgY2hhbmdlIHRoZSB0eXBlIG9mIGBvYmpgIHRvIGJlIGBPICYgUGBcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yXG4gKiBJRTExIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlKClgLiBVc2luZyB0aGlzIGZ1bmN0aW9uXG4gKiBpcyBzbWFsbGVyIHRoYW4gaW5jbHVkaW5nIGEgZGVkaWNhdGVkIHBvbHlmaWxsLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5Db250YWluZXJOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCAiaW1wb3J0IHsgX2NhdGNoRXJyb3IgfSBmcm9tICcuL2RpZmYvY2F0Y2gtZXJyb3InO1xuXG4vKipcbiAqIFRoZSBgb3B0aW9uYCBvYmplY3QgY2FuIHBvdGVudGlhbGx5IGNvbnRhaW4gY2FsbGJhY2sgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBjYWxsZWQgZHVyaW5nIHZhcmlvdXMgc3RhZ2VzIG9mIG91ciByZW5kZXJlci4gVGhpcyBpcyB0aGVcbiAqIGZvdW5kYXRpb24gb24gd2hpY2ggYWxsIG91ciBhZGRvbnMgbGlrZSBgcHJlYWN0L2RlYnVnYCwgYHByZWFjdC9jb21wYXRgLFxuICogYW5kIGBwcmVhY3QvaG9va3NgIGFyZSBiYXNlZCBvbi4gU2VlIHRoZSBgT3B0aW9uc2AgdHlwZSBpbiBgaW50ZXJuYWwuZC50c2BcbiAqIGZvciBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9uIGhvb2tzIChtb3N0IGVkaXRvcnMvSURFcyBhbGxvdyB5b3UgdG9cbiAqIGN0cmwrY2xpY2sgb3IgY21kK2NsaWNrIG9uIG1hYyB0aGUgdHlwZSBkZWZpbml0aW9uIGJlbG93KS5cbiAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfVxuICovXG5jb25zdCBvcHRpb25zID0ge1xuXHRfY2F0Y2hFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucztcbiIsICJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgTlVMTCwgVU5ERUZJTkVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbi8qKlxuICogQ3JlYXRlIGFuIHZpcnR1YWwgbm9kZSAodXNlZCBmb3IgSlNYKVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnQgY29uc3RydWN0b3IgZm9yIHRoaXNcbiAqIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbcHJvcHNdIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuJykuQ29tcG9uZW50Q2hpbGRyZW4+fSBbY2hpbGRyZW5dIFRoZSBjaGlsZHJlbiBvZiB0aGVcbiAqIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gTlVMTCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBOVUxMKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBOVUxMLFxuXHRcdF9wYXJlbnQ6IE5VTEwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IE5VTEwsXG5cdFx0X2NvbXBvbmVudDogTlVMTCxcblx0XHRjb25zdHJ1Y3RvcjogVU5ERUZJTkVELFxuXHRcdF9vcmlnaW5hbDogb3JpZ2luYWwgPT0gTlVMTCA/ICsrdm5vZGVJZCA6IG9yaWdpbmFsLFxuXHRcdF9pbmRleDogLTEsXG5cdFx0X2ZsYWdzOiAwXG5cdH07XG5cblx0Ly8gT25seSBpbnZva2UgdGhlIHZub2RlIGhvb2sgaWYgdGhpcyB3YXMgKm5vdCogYSBkaXJlY3QgY29weTpcblx0aWYgKG9yaWdpbmFsID09IE5VTEwgJiYgb3B0aW9ucy52bm9kZSAhPSBOVUxMKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG5cdHJldHVybiB7IGN1cnJlbnQ6IE5VTEwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KHByb3BzKSB7XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRoZSBhcmd1bWVudCBpcyBhIHZhbGlkIFByZWFjdCBWTm9kZS5cbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqIEByZXR1cm5zIHt2bm9kZSBpcyBWTm9kZX1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRFbGVtZW50ID0gdm5vZGUgPT5cblx0dm5vZGUgIT0gTlVMTCAmJiB2bm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEO1xuIiwgImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkaWZmLCBjb21taXRSb290IH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgTU9ERV9IWURSQVRFLCBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYW5kIHNjaGVkdWxlIGEgcmUtcmVuZGVyLlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7b2JqZWN0IHwgKChzOiBvYmplY3QsIHA6IG9iamVjdCkgPT4gb2JqZWN0KX0gdXBkYXRlIEEgaGFzaCBvZiBzdGF0ZVxuICogcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzIG9yIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiB0aGUgY3VycmVudFxuICogc3RhdGUgYW5kIHByb3BzIHJldHVybnMgYSBuZXcgcGFydGlhbCBzdGF0ZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG4gKiB1cGRhdGVkXG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBOVUxMICYmIHRoaXMuX25leHRTdGF0ZSAhPSB0aGlzLnN0YXRlKSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZTtcblx0fSBlbHNlIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdXBkYXRlID09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBTb21lIGxpYnJhcmllcyBsaWtlIGBpbW1lcmAgbWFyayB0aGUgY3VycmVudCBzdGF0ZSBhcyByZWFkb25seSxcblx0XHQvLyBwcmV2ZW50aW5nIHVzIGZyb20gbXV0YXRpbmcgaXQsIHNvIHdlIG5lZWQgdG8gY2xvbmUgaXQuIFNlZSAjMjcxNlxuXHRcdHVwZGF0ZSA9IHVwZGF0ZShhc3NpZ24oe30sIHMpLCB0aGlzLnByb3BzKTtcblx0fVxuXG5cdGlmICh1cGRhdGUpIHtcblx0XHRhc3NpZ24ocywgdXBkYXRlKTtcblx0fVxuXG5cdC8vIFNraXAgdXBkYXRlIGlmIHVwZGF0ZXIgZnVuY3Rpb24gcmV0dXJuZWQgbnVsbFxuXHRpZiAodXBkYXRlID09IE5VTEwpIHJldHVybjtcblxuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMuX3N0YXRlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdH1cblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IHBlcmZvcm0gYSBzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgdGhlIGNvbXBvbmVudFxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQgaXNcbiAqIHJlLXJlbmRlcmVkXG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdC8vIFNldCByZW5kZXIgbW9kZSBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHdoZXJlIHRoZSByZW5kZXIgcmVxdWVzdFxuXHRcdC8vIGlzIGNvbWluZyBmcm9tLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSBmb3JjZVVwZGF0ZSBzaG91bGQgbmV2ZXIgY2FsbFxuXHRcdC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdHRoaXMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAqIFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeCkuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUHJvcHMgKGVnOiBKU1ggYXR0cmlidXRlcykgcmVjZWl2ZWQgZnJvbSBwYXJlbnRcbiAqIGVsZW1lbnQvY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IENvbnRleHQgb2JqZWN0LCBhcyByZXR1cm5lZCBieSB0aGUgbmVhcmVzdFxuICogYW5jZXN0b3IncyBgZ2V0Q2hpbGRDb250ZXh0KClgXG4gKiBAcmV0dXJucyB7Q29tcG9uZW50Q2hpbGRyZW4gfCB2b2lkfVxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gTlVMTCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX2luZGV4ICsgMSlcblx0XHRcdDogTlVMTDtcblx0fVxuXG5cdGxldCBzaWJsaW5nO1xuXHRmb3IgKDsgY2hpbGRJbmRleCA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuXHRcdHNpYmxpbmcgPSB2bm9kZS5fY2hpbGRyZW5bY2hpbGRJbmRleF07XG5cblx0XHRpZiAoc2libGluZyAhPSBOVUxMICYmIHNpYmxpbmcuX2RvbSAhPSBOVUxMKSB7XG5cdFx0XHQvLyBTaW5jZSB1cGRhdGVQYXJlbnREb21Qb2ludGVycyBrZWVwcyBfZG9tIHBvaW50ZXIgY29ycmVjdCxcblx0XHRcdC8vIHdlIGNhbiByZWx5IG9uIF9kb20gdG8gdGVsbCB1cyBpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYVxuXHRcdFx0Ly8gcmVuZGVyZWQgRE9NIG5vZGUsIGFuZCB3aGF0IHRoZSBmaXJzdCByZW5kZXJlZCBET00gbm9kZSBpc1xuXHRcdFx0cmV0dXJuIHNpYmxpbmcuX2RvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBnZXQgaGVyZSwgd2UgaGF2ZSBub3QgZm91bmQgYSBET00gbm9kZSBpbiB0aGlzIHZub2RlJ3MgY2hpbGRyZW4uXG5cdC8vIFdlIG11c3QgcmVzdW1lIGZyb20gdGhpcyB2bm9kZSdzIHNpYmxpbmcgKGluIGl0J3MgcGFyZW50IF9jaGlsZHJlbiBhcnJheSlcblx0Ly8gT25seSBjbGltYiB1cCBhbmQgc2VhcmNoIHRoZSBwYXJlbnQgaWYgd2UgYXJlbid0IHNlYXJjaGluZyB0aHJvdWdoIGEgRE9NXG5cdC8vIFZOb2RlIChtZWFuaW5nIHdlIHJlYWNoZWQgdGhlIERPTSBwYXJlbnQgb2YgdGhlIG9yaWdpbmFsIHZub2RlIHRoYXQgYmVnYW5cblx0Ly8gdGhlIHNlYXJjaClcblx0cmV0dXJuIHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IE5VTEw7XG59XG5cbi8qKlxuICogVHJpZ2dlciBpbi1wbGFjZSByZS1yZW5kZXJpbmcgb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRpZiAoY29tcG9uZW50Ll9wYXJlbnREb20gJiYgY29tcG9uZW50Ll9kaXJ0eSkge1xuXHRcdGxldCBvbGRWTm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0XHRvbGREb20gPSBvbGRWTm9kZS5fZG9tLFxuXHRcdFx0Y29tbWl0UXVldWUgPSBbXSxcblx0XHRcdHJlZlF1ZXVlID0gW10sXG5cdFx0XHRuZXdWTm9kZSA9IGFzc2lnbih7fSwgb2xkVk5vZGUpO1xuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG9sZFZOb2RlLl9vcmlnaW5hbCArIDE7XG5cdFx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUobmV3Vk5vZGUpO1xuXG5cdFx0ZGlmZihcblx0XHRcdGNvbXBvbmVudC5fcGFyZW50RG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGNvbXBvbmVudC5fZ2xvYmFsQ29udGV4dCxcblx0XHRcdGNvbXBvbmVudC5fcGFyZW50RG9tLm5hbWVzcGFjZVVSSSxcblx0XHRcdG9sZFZOb2RlLl9mbGFncyAmIE1PREVfSFlEUkFURSA/IFtvbGREb21dIDogTlVMTCxcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tID09IE5VTEwgPyBnZXREb21TaWJsaW5nKG9sZFZOb2RlKSA6IG9sZERvbSxcblx0XHRcdCEhKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfSFlEUkFURSksXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWw7XG5cdFx0bmV3Vk5vZGUuX3BhcmVudC5fY2hpbGRyZW5bbmV3Vk5vZGUuX2luZGV4XSA9IG5ld1ZOb2RlO1xuXHRcdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIG5ld1ZOb2RlLCByZWZRdWV1ZSk7XG5cdFx0b2xkVk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9wYXJlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG5ld1ZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0XHR1cGRhdGVQYXJlbnREb21Qb2ludGVycyhuZXdWTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpIHtcblx0aWYgKCh2bm9kZSA9IHZub2RlLl9wYXJlbnQpICE9IE5VTEwgJiYgdm5vZGUuX2NvbXBvbmVudCAhPSBOVUxMKSB7XG5cdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IE5VTEw7XG5cdFx0dm5vZGUuX2NoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0aWYgKGNoaWxkICE9IE5VTEwgJiYgY2hpbGQuX2RvbSAhPSBOVUxMKSB7XG5cdFx0XHRcdHJldHVybiAodm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IGNoaWxkLl9kb20pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgcXVldWVcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgcmVyZW5kZXJRdWV1ZSA9IFtdO1xuXG4vKlxuICogVGhlIHZhbHVlIG9mIGBDb21wb25lbnQuZGVib3VuY2VgIG11c3QgYXN5bmNocm9ub3VzbHkgaW52b2tlIHRoZSBwYXNzZWQgaW4gY2FsbGJhY2suIEl0IGlzXG4gKiBpbXBvcnRhbnQgdGhhdCBjb250cmlidXRvcnMgdG8gUHJlYWN0IGNhbiBjb25zaXN0ZW50bHkgcmVhc29uIGFib3V0IHdoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCwgZXRjLlxuICogZG8sIGFuZCB3aGVuIHRoZWlyIGVmZmVjdHMgd2lsbCBiZSBhcHBsaWVkLiBTZWUgdGhlIGxpbmtzIGJlbG93IGZvciBzb21lIGZ1cnRoZXIgcmVhZGluZyBvbiBkZXNpZ25pbmdcbiAqIGFzeW5jaHJvbm91cyBBUElzLlxuICogKiBbRGVzaWduaW5nIEFQSXMgZm9yIEFzeW5jaHJvbnldKGh0dHBzOi8vYmxvZy5penMubWUvMjAxMy8wOC9kZXNpZ25pbmctYXBpcy1mb3ItYXN5bmNocm9ueSlcbiAqICogW0NhbGxiYWNrcyBzeW5jaHJvbm91cyBhbmQgYXN5bmNocm9ub3VzXShodHRwczovL2Jsb2cub21ldGVyLmNvbS8yMDExLzA3LzI0L2NhbGxiYWNrcy1zeW5jaHJvbm91cy1hbmQtYXN5bmNocm9ub3VzLylcbiAqL1xuXG5sZXQgcHJldkRlYm91bmNlO1xuXG5jb25zdCBkZWZlciA9XG5cdHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbidcblx0XHQ/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSlcblx0XHQ6IHNldFRpbWVvdXQ7XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYyBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGMpIHtcblx0aWYgKFxuXHRcdCghYy5fZGlydHkgJiZcblx0XHRcdChjLl9kaXJ0eSA9IHRydWUpICYmXG5cdFx0XHRyZXJlbmRlclF1ZXVlLnB1c2goYykgJiZcblx0XHRcdCFwcm9jZXNzLl9yZXJlbmRlckNvdW50KyspIHx8XG5cdFx0cHJldkRlYm91bmNlICE9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdcblx0KSB7XG5cdFx0cHJldkRlYm91bmNlID0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZztcblx0XHQocHJldkRlYm91bmNlIHx8IGRlZmVyKShwcm9jZXNzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBhXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYlxuICovXG5jb25zdCBkZXB0aFNvcnQgPSAoYSwgYikgPT4gYS5fdm5vZGUuX2RlcHRoIC0gYi5fdm5vZGUuX2RlcHRoO1xuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdHRyeSB7XG5cdFx0bGV0IGMsXG5cdFx0XHRsID0gMTtcblxuXHRcdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHRcdC8vIHByb2Nlc3MoKSBjYWxscyBmcm9tIGdldHRpbmcgc2NoZWR1bGVkIHdoaWxlIGBxdWV1ZWAgaXMgc3RpbGwgYmVpbmcgY29uc3VtZWQuXG5cdFx0d2hpbGUgKHJlcmVuZGVyUXVldWUubGVuZ3RoKSB7XG5cdFx0XHQvLyBLZWVwIHRoZSByZXJlbmRlciBxdWV1ZSBzb3J0ZWQgYnkgKGRlcHRoLCBpbnNlcnRpb24gb3JkZXIpLiBUaGUgcXVldWVcblx0XHRcdC8vIHdpbGwgaW5pdGlhbGx5IGJlIHNvcnRlZCBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uIG9ubHkgaWYgaXQgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG5cdFx0XHQvL1xuXHRcdFx0Ly8gTmV3IGl0ZW1zIGNhbiBiZSBhZGRlZCB0byB0aGUgcXVldWUgZS5nLiB3aGVuIHJlcmVuZGVyaW5nIGEgcHJvdmlkZXIsIHNvIHdlIHdhbnQgdG9cblx0XHRcdC8vIGtlZXAgdGhlIG9yZGVyIGZyb20gdG9wIHRvIGJvdHRvbSB3aXRoIHRob3NlIG5ldyBpdGVtcyBzbyB3ZSBjYW4gaGFuZGxlIHRoZW0gaW4gYVxuXHRcdFx0Ly8gc2luZ2xlIHBhc3Ncblx0XHRcdGlmIChyZXJlbmRlclF1ZXVlLmxlbmd0aCA+IGwpIHtcblx0XHRcdFx0cmVyZW5kZXJRdWV1ZS5zb3J0KGRlcHRoU29ydCk7XG5cdFx0XHR9XG5cblx0XHRcdGMgPSByZXJlbmRlclF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRsID0gcmVyZW5kZXJRdWV1ZS5sZW5ndGg7XG5cblx0XHRcdHJlbmRlckNvbXBvbmVudChjKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0cmVyZW5kZXJRdWV1ZS5sZW5ndGggPSBwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcblx0fVxufVxuXG5wcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcbiIsICJpbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwsIE5VTEwsIFNWR19OQU1FU1BBQ0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8vIFBlci1pbnN0YW5jZSB1bmlxdWUga2V5IGZvciBldmVudCBjbG9jayBzdGFtcHMuIEVhY2ggUHJlYWN0IGNvcHkgb24gdGhlIHBhZ2Vcbi8vIGdldHMgaXRzIG93biByYW5kb20gc3VmZml4IHNvIHRoYXQgYF9kaXNwYXRjaGVkYCAvIGBfYXR0YWNoZWRgIHByb3BlcnRpZXMgb25cbi8vIHNoYXJlZCBldmVudCBvYmplY3RzIGFuZCBoYW5kbGVyIGZ1bmN0aW9ucyBjYW5ub3QgY29sbGlkZSBhY3Jvc3MgaW5zdGFuY2VzLlxuLy8gfjEgaW4gNjBNIGNvbGxpc2lvbiBvZGRzIC0gaWYgeW91IGhhdmUgdGhhdCBtYW55IHByYWVjdCB2ZXJzaW9ucyBvbiB0aGUgcGFnZSxcbi8vIHlvdSBkZXNlcnZlIHNvbWUgd2VpcmQgYnVncy5cbi8vIEluIDExIHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBhXG4vLyBTeW1ib2xcbmxldCBfaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDgpLFxuXHRFVkVOVF9ESVNQQVRDSEVEID0gJ19fZCcgKyBfaWQsXG5cdEVWRU5UX0FUVEFDSEVEID0gJ19fYScgKyBfaWQ7XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT0gJy0nKSB7XG5cdFx0c3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSA9PSBOVUxMID8gJycgOiB2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT0gTlVMTCkge1xuXHRcdHN0eWxlW2tleV0gPSAnJztcblx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgfHwgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3Qoa2V5KSkge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWUgKyAncHgnO1xuXHR9XG59XG5cbmNvbnN0IENBUFRVUkVfUkVHRVggPSAvKFBvaW50ZXJDYXB0dXJlKSR8Q2FwdHVyZSQvaTtcblxuLy8gQSBsb2dpY2FsIGNsb2NrIHRvIHNvbHZlIGlzc3VlcyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM5MjcuXG4vLyBXaGVuIHRoZSBET00gcGVyZm9ybXMgYW4gZXZlbnQgaXQgbGVhdmVzIG1pY3JvLXRpY2tzIGluIGJldHdlZW4gYnViYmxpbmcgdXAgd2hpY2ggbWVhbnMgdGhhdFxuLy8gYW4gZXZlbnQgY2FuIHRyaWdnZXIgb24gYSBuZXdseSByZWF0ZWQgRE9NLW5vZGUgd2hpbGUgdGhlIGV2ZW50IGJ1YmJsZXMgdXAuXG4vL1xuLy8gT3JpZ2luYWxseSBpbnNwaXJlZCBieSBWdWVcbi8vIChodHRwczovL2dpdGh1Yi5jb20vdnVlanMvY29yZS9ibG9iL2NhZWI4YTY4ODExYTFiMGY3OS9wYWNrYWdlcy9ydW50aW1lLWRvbS9zcmMvbW9kdWxlcy9ldmVudHMudHMjTDkwLUwxMDEpLFxuLy8gYnV0IG1vZGlmaWVkIHRvIHVzZSBhIGxvZ2ljYWwgY2xvY2sgaW5zdGVhZCBvZiBEYXRlLm5vdygpIGluIGNhc2UgZXZlbnQgaGFuZGxlcnMgZ2V0IGF0dGFjaGVkXG4vLyBhbmQgZXZlbnRzIGdldCBkaXNwYXRjaGVkIGR1cmluZyB0aGUgc2FtZSBtaWxsaXNlY29uZC5cbi8vXG4vLyBUaGUgY2xvY2sgaXMgaW5jcmVtZW50ZWQgYWZ0ZXIgZWFjaCBuZXcgZXZlbnQgZGlzcGF0Y2guIFRoaXMgYWxsb3dzIDEgMDAwIDAwMCBuZXcgZXZlbnRzXG4vLyBwZXIgc2Vjb25kIGZvciBvdmVyIDI4MCB5ZWFycyBiZWZvcmUgdGhlIHZhbHVlIHJlYWNoZXMgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgKDIqKjUzIC0gMSkuXG5sZXQgZXZlbnRDbG9jayA9IDA7XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdmFsdWUgb24gYSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCB0aGUgcHJvcGVydHkgdG9cbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSB0aGUgcHJvcGVydHkgaGFkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShkb20sIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSwgbmFtZXNwYWNlKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09ICdzdHlsZScpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZFZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gb2xkVmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiBvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdGlmICghKHZhbHVlICYmIG5hbWUgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghb2xkVmFsdWUgfHwgdmFsdWVbbmFtZV0gIT0gb2xkVmFsdWVbbmFtZV0pIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgdmFsdWVbbmFtZV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBCZW5jaG1hcmsgZm9yIGNvbXBhcmlzb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTc0Yzk1NGJkYjk2NWI5YTAwOTY1YWM2XG5cdGVsc2UgaWYgKG5hbWVbMF0gPT0gJ28nICYmIG5hbWVbMV0gPT0gJ24nKSB7XG5cdFx0dXNlQ2FwdHVyZSA9IG5hbWUgIT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoQ0FQVFVSRV9SRUdFWCwgJyQxJykpO1xuXHRcdGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBJbmZlciBjb3JyZWN0IGNhc2luZyBmb3IgRE9NIGJ1aWx0LWluIGV2ZW50czpcblx0XHRpZiAobG93ZXJDYXNlTmFtZSBpbiBkb20gfHwgbmFtZSA9PSAnb25Gb2N1c091dCcgfHwgbmFtZSA9PSAnb25Gb2N1c0luJylcblx0XHRcdG5hbWUgPSBsb3dlckNhc2VOYW1lLnNsaWNlKDIpO1xuXHRcdGVsc2UgbmFtZSA9IG5hbWUuc2xpY2UoMik7XG5cblx0XHRpZiAoIWRvbS5fbGlzdGVuZXJzKSBkb20uX2xpc3RlbmVycyA9IHt9O1xuXHRcdGRvbS5fbGlzdGVuZXJzW25hbWUgKyB1c2VDYXB0dXJlXSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZFZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlW0VWRU5UX0FUVEFDSEVEXSA9IGV2ZW50Q2xvY2s7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0XHR1c2VDYXB0dXJlXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBvbGRWYWx1ZVtFVkVOVF9BVFRBQ0hFRF07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHR1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5LFxuXHRcdFx0XHR1c2VDYXB0dXJlXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAobmFtZXNwYWNlID09IFNWR19OQU1FU1BBQ0UpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSBpbmNvcnJlY3QgcHJvcCB1c2FnZSBmb3IgU1ZHOlxuXHRcdFx0Ly8gLSB4bGluazpocmVmIC8geGxpbmtIcmVmIC0tPiBocmVmICh4bGluazpocmVmIHdhcyByZW1vdmVkIGZyb20gU1ZHIGFuZCBpc24ndCBuZWVkZWQpXG5cdFx0XHQvLyAtIGNsYXNzTmFtZSAtLT4gY2xhc3Ncblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL3hsaW5rKEh8OmgpLywgJ2gnKS5yZXBsYWNlKC9zTmFtZSQvLCAncycpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRuYW1lICE9ICd3aWR0aCcgJiZcblx0XHRcdG5hbWUgIT0gJ2hlaWdodCcgJiZcblx0XHRcdG5hbWUgIT0gJ2hyZWYnICYmXG5cdFx0XHRuYW1lICE9ICdsaXN0JyAmJlxuXHRcdFx0bmFtZSAhPSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9ICd0YWJJbmRleCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Rvd25sb2FkJyAmJlxuXHRcdFx0bmFtZSAhPSAncm93U3BhbicgJiZcblx0XHRcdG5hbWUgIT0gJ2NvbFNwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdyb2xlJyAmJlxuXHRcdFx0bmFtZSAhPSAncG9wb3ZlcicgJiZcblx0XHRcdG5hbWUgaW4gZG9tXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkb21bbmFtZV0gPSB2YWx1ZSA9PSBOVUxMID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0Ly8gbGFiZWxsZWQgYnJlYWsgaXMgMWIgc21hbGxlciBoZXJlIHRoYW4gYSByZXR1cm4gc3RhdGVtZW50IChzb3JyeSlcblx0XHRcdFx0YnJlYWsgbztcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0Ly8gYXJpYS0gYW5kIGRhdGEtIGF0dHJpYnV0ZXMgaGF2ZSBubyBib29sZWFuIHJlcHJlc2VudGF0aW9uLlxuXHRcdC8vIEEgYGZhbHNlYCB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZ1xuXHRcdC8vIHByZXNlbnQsIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuIGFyaWFcblx0XHQvLyBhdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgZnJhbWV3b3JrcyBnZW5lcmFsbHkgc3RyaW5naWZ5IGBmYWxzZWAuXG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdC8vIG5ldmVyIHNlcmlhbGl6ZSBmdW5jdGlvbnMgYXMgYXR0cmlidXRlIHZhbHVlc1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gTlVMTCAmJiAodmFsdWUgIT09IGZhbHNlIHx8IG5hbWVbNF0gPT0gJy0nKSkge1xuXHRcdFx0ZG9tLnNldEF0dHJpYnV0ZShuYW1lLCBuYW1lID09ICdwb3BvdmVyJyAmJiB2YWx1ZSA9PSB0cnVlID8gJycgOiB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV2ZW50IHByb3h5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSB1c2VDYXB0dXJlIElzIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgY2FwdHVyZSBwaGFzZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50UHJveHkodXNlQ2FwdHVyZSkge1xuXHQvKipcblx0ICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG5cdCAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEV2ZW50fSBlIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3NlclxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0cmV0dXJuIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHRoaXMuX2xpc3RlbmVycykge1xuXHRcdFx0Y29uc3QgZXZlbnRIYW5kbGVyID0gdGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIHVzZUNhcHR1cmVdO1xuXHRcdFx0aWYgKGVbRVZFTlRfRElTUEFUQ0hFRF0gPT0gTlVMTCkge1xuXHRcdFx0XHRlW0VWRU5UX0RJU1BBVENIRURdID0gZXZlbnRDbG9jaysrO1xuXG5cdFx0XHRcdC8vIFdoZW4gYGVbRVZFTlRfRElTUEFUQ0hFRF1gIGlzIHNtYWxsZXIgdGhhbiB0aGUgdGltZSB3aGVuIHRoZSB0YXJnZXRlZCBldmVudFxuXHRcdFx0XHQvLyBoYW5kbGVyIHdhcyBhdHRhY2hlZCB3ZSBrbm93IHdlIGhhdmUgYnViYmxlZCB1cCB0byBhbiBlbGVtZW50IHRoYXQgd2FzIGFkZGVkXG5cdFx0XHRcdC8vIGR1cmluZyBwYXRjaGluZyB0aGUgRE9NLlxuXHRcdFx0fSBlbHNlIGlmIChlW0VWRU5UX0RJU1BBVENIRURdIDwgZXZlbnRIYW5kbGVyW0VWRU5UX0FUVEFDSEVEXSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZlbnRIYW5kbGVyKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBldmVudFByb3h5ID0gY3JlYXRlRXZlbnRQcm94eShmYWxzZSk7XG5jb25zdCBldmVudFByb3h5Q2FwdHVyZSA9IGNyZWF0ZUV2ZW50UHJveHkodHJ1ZSk7XG4iLCAiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBsZXQgaSA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuXHRmdW5jdGlvbiBDb250ZXh0KHByb3BzKSB7XG5cdFx0aWYgKCF0aGlzLmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0LyoqIEB0eXBlIHtTZXQ8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50PiB8IG51bGx9ICovXG5cdFx0XHRsZXQgc3VicyA9IG5ldyBTZXQoKTtcblx0XHRcdGxldCBjdHggPSB7fTtcblx0XHRcdGN0eFtDb250ZXh0Ll9pZF0gPSB0aGlzO1xuXG5cdFx0XHR0aGlzLmdldENoaWxkQ29udGV4dCA9ICgpID0+IGN0eDtcblxuXHRcdFx0dGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcblx0XHRcdFx0c3VicyA9IE5VTEw7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChfcHJvcHMpIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBldmVuXG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlICE9IF9wcm9wcy52YWx1ZSkge1xuXHRcdFx0XHRcdHN1YnMuZm9yRWFjaChjID0+IHtcblx0XHRcdFx0XHRcdGMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdHN1YnMuYWRkKGMpO1xuXHRcdFx0XHRsZXQgb2xkID0gYy5jb21wb25lbnRXaWxsVW5tb3VudDtcblx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc3Vicykge1xuXHRcdFx0XHRcdFx0c3Vicy5kZWxldGUoYyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChvbGQpIG9sZC5jYWxsKGMpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG5cdH1cblxuXHRDb250ZXh0Ll9pZCA9ICdfX2NDJyArIGkrKztcblx0Q29udGV4dC5fZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdENvbnRleHQuQ29uc3VtZXIgPSAocHJvcHMsIGNvbnRleHRWYWx1ZSkgPT4ge1xuXHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0VmFsdWUpO1xuXHR9O1xuXG5cdC8vIHdlIGNvdWxkIGFsc28gZ2V0IHJpZCBvZiBfY29udGV4dFJlZiBlbnRpcmVseVxuXHRDb250ZXh0LlByb3ZpZGVyID1cblx0XHRDb250ZXh0Ll9jb250ZXh0UmVmID1cblx0XHRDb250ZXh0LkNvbnN1bWVyLmNvbnRleHRUeXBlID1cblx0XHRcdENvbnRleHQ7XG5cblx0cmV0dXJuIENvbnRleHQ7XG59XG4iLCAiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7XG5cdEVNUFRZX09CSixcblx0RU1QVFlfQVJSLFxuXHRJTlNFUlRfVk5PREUsXG5cdE1BVENIRUQsXG5cdFVOREVGSU5FRCxcblx0TlVMTFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbn0gQ29tcG9uZW50Q2hpbGRyZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSBDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gUHJlYWN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gVk5vZGVcbiAqL1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nXG4gKiBkaWZmZWRcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkUGFyZW50Vk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3QgbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0IC0gbW9kaWZpZWQgYnlcbiAqIGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NIGVsZW1lbnQgYW55IG5ldyBkb21cbiAqIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0IHJlbmRlciAoZXhjZXB0IHdoZW5cbiAqIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nIEZyYWdtZW50cyB0aGF0IGhhdmVcbiAqIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHBhcmFtIHthbnlbXX0gcmVmUXVldWUgYW4gYXJyYXkgb2YgZWxlbWVudHMgbmVlZGVkIHRvIGludm9rZSByZWZzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdGxldCBpLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0b2xkVk5vZGUsXG5cdFx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0XHRjaGlsZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRuZXdEb20sXG5cdFx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRcdGZpcnN0Q2hpbGREb207XG5cblx0Ly8gVGhpcyBpcyBhIGNvbXByZXNzaW9uIG9mIG9sZFBhcmVudFZOb2RlIT1udWxsICYmIG9sZFBhcmVudFZOb2RlICE9IEVNUFRZX09CSiAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4gfHwgRU1QVFlfQVJSXG5cdC8vIGFzIEVNUFRZX09CSi5fY2hpbGRyZW4gc2hvdWxkIGJlIGB1bmRlZmluZWRgLlxuXHQvKiogQHR5cGUge1ZOb2RlW119ICovXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgbmV3Q2hpbGRyZW5MZW5ndGggPSByZW5kZXJSZXN1bHQubGVuZ3RoO1xuXG5cdG9sZERvbSA9IGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdFx0bmV3UGFyZW50Vk5vZGUsXG5cdFx0cmVuZGVyUmVzdWx0LFxuXHRcdG9sZENoaWxkcmVuLFxuXHRcdG9sZERvbSxcblx0XHRuZXdDaGlsZHJlbkxlbmd0aFxuXHQpO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXTtcblx0XHRpZiAoY2hpbGRWTm9kZSA9PSBOVUxMKSBjb250aW51ZTtcblxuXHRcdC8vIEF0IHRoaXMgcG9pbnQsIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkgaGFzIGFzc2lnbmVkIF9pbmRleCB0byBiZSB0aGVcblx0XHQvLyBtYXRjaGluZ0luZGV4IGZvciB0aGlzIFZOb2RlJ3Mgb2xkVk5vZGUgKG9yIC0xIGlmIHRoZXJlIGlzIG5vIG9sZFZOb2RlKS5cblx0XHRvbGRWTm9kZSA9XG5cdFx0XHQoY2hpbGRWTm9kZS5faW5kZXggIT0gLTEgJiYgb2xkQ2hpbGRyZW5bY2hpbGRWTm9kZS5faW5kZXhdKSB8fCBFTVBUWV9PQko7XG5cblx0XHQvLyBVcGRhdGUgY2hpbGRWTm9kZS5faW5kZXggdG8gaXRzIGZpbmFsIGluZGV4XG5cdFx0Y2hpbGRWTm9kZS5faW5kZXggPSBpO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRsZXQgcmVzdWx0ID0gZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cblx0XHQvLyBBZGp1c3QgRE9NIG5vZGVzXG5cdFx0bmV3RG9tID0gY2hpbGRWTm9kZS5fZG9tO1xuXHRcdGlmIChjaGlsZFZOb2RlLnJlZiAmJiBvbGRWTm9kZS5yZWYgIT0gY2hpbGRWTm9kZS5yZWYpIHtcblx0XHRcdGlmIChvbGRWTm9kZS5yZWYpIHtcblx0XHRcdFx0YXBwbHlSZWYob2xkVk5vZGUucmVmLCBOVUxMLCBjaGlsZFZOb2RlKTtcblx0XHRcdH1cblx0XHRcdHJlZlF1ZXVlLnB1c2goXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLFxuXHRcdFx0XHRjaGlsZFZOb2RlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChmaXJzdENoaWxkRG9tID09IE5VTEwgJiYgbmV3RG9tICE9IE5VTEwpIHtcblx0XHRcdGZpcnN0Q2hpbGREb20gPSBuZXdEb207XG5cdFx0fVxuXG5cdFx0bGV0IHNob3VsZFBsYWNlID0gISEoY2hpbGRWTm9kZS5fZmxhZ3MgJiBJTlNFUlRfVk5PREUpO1xuXHRcdGlmIChzaG91bGRQbGFjZSB8fCBvbGRWTm9kZS5fY2hpbGRyZW4gPT09IGNoaWxkVk5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0XHRvbGREb20gPSBpbnNlcnQoY2hpbGRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblxuXHRcdFx0Ly8gV2hlbiBhIG1hdGNoZWQgVk5vZGUgaXMgcGh5c2ljYWxseSBtb3ZlZCB2aWEgSU5TRVJUX1ZOT0RFLCBpdHMgb2xkXG5cdFx0XHQvLyBfZG9tIHBvaW50ZXIgYmVjb21lcyBhIHN0YWxlIHBvc2l0aW9uYWwgcmVmZXJlbmNlLiBDbGVhciBpdCBzbyB0aGF0XG5cdFx0XHQvLyBnZXREb21TaWJsaW5nIChjYWxsZWQgZnJvbSBuZXN0ZWQgZGlmZnMpIHdvbid0IHJldHVybiB0aGlzIHN0YWxlXG5cdFx0XHQvLyByZWZlcmVuY2UgYW5kIG1pcy1wbGFjZSBzdWJzZXF1ZW50IERPTSBub2Rlcy4gU2VlICM1MDY1LlxuXHRcdFx0aWYgKHNob3VsZFBsYWNlICYmIG9sZFZOb2RlLl9kb20pIHtcblx0XHRcdFx0b2xkVk5vZGUuX2RvbSA9IE5VTEw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlID09ICdmdW5jdGlvbicgJiYgcmVzdWx0ICE9PSBVTkRFRklORUQpIHtcblx0XHRcdG9sZERvbSA9IHJlc3VsdDtcblx0XHR9IGVsc2UgaWYgKG5ld0RvbSkge1xuXHRcdFx0b2xkRG9tID0gbmV3RG9tLm5leHRTaWJsaW5nO1xuXHRcdH1cblxuXHRcdC8vIFVuc2V0IGRpZmZpbmcgZmxhZ3Ncblx0XHRjaGlsZFZOb2RlLl9mbGFncyAmPSB+KElOU0VSVF9WTk9ERSB8IE1BVENIRUQpO1xuXHR9XG5cblx0bmV3UGFyZW50Vk5vZGUuX2RvbSA9IGZpcnN0Q2hpbGREb207XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7Vk5vZGVbXX0gb2xkQ2hpbGRyZW5cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheShcblx0bmV3UGFyZW50Vk5vZGUsXG5cdHJlbmRlclJlc3VsdCxcblx0b2xkQ2hpbGRyZW4sXG5cdG9sZERvbSxcblx0bmV3Q2hpbGRyZW5MZW5ndGhcbikge1xuXHQvKiogQHR5cGUge251bWJlcn0gKi9cblx0bGV0IGk7XG5cdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdGxldCBjaGlsZFZOb2RlO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgb2xkVk5vZGU7XG5cblx0bGV0IG9sZENoaWxkcmVuTGVuZ3RoID0gb2xkQ2hpbGRyZW4ubGVuZ3RoLFxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID0gb2xkQ2hpbGRyZW5MZW5ndGg7XG5cblx0bGV0IHNrZXcgPSAwO1xuXG5cdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbiA9IG5ldyBBcnJheShuZXdDaGlsZHJlbkxlbmd0aCk7XG5cdGZvciAoaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBXZSBhcmUgcmV1c2luZyB0aGUgY2hpbGRWTm9kZSB2YXJpYWJsZSB0byBob2xkIGJvdGggdGhlXG5cdFx0Ly8gcHJlIGFuZCBwb3N0IG5vcm1hbGl6ZWQgY2hpbGRWTm9kZVxuXHRcdGNoaWxkVk5vZGUgPSByZW5kZXJSZXN1bHRbaV07XG5cblx0XHRpZiAoXG5cdFx0XHRjaGlsZFZOb2RlID09IE5VTEwgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdib29sZWFuJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Z1bmN0aW9uJ1xuXHRcdCkge1xuXHRcdFx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gTlVMTDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBJZiB0aGlzIG5ld1ZOb2RlIGlzIGJlaW5nIHJldXNlZCAoZS5nLiA8ZGl2PntyZXVzZX17cmV1c2V9PC9kaXY+KSBpbiB0aGUgc2FtZSBkaWZmLFxuXHRcdC8vIG9yIHdlIGFyZSByZW5kZXJpbmcgYSBjb21wb25lbnQgKGUuZy4gc2V0U3RhdGUpIGNvcHkgdGhlIG9sZFZOb2RlcyBzbyBpdCBjYW4gaGF2ZVxuXHRcdC8vIGl0J3Mgb3duIERPTSAmIGV0Yy4gcG9pbnRlcnNcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnbnVtYmVyJyB8fFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2JpZ2ludCcgfHxcblx0XHRcdGNoaWxkVk5vZGUuY29uc3RydWN0b3IgPT0gU3RyaW5nXG5cdFx0KSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdE5VTEwsXG5cdFx0XHRcdE5VTEwsXG5cdFx0XHRcdE5VTExcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChpc0FycmF5KGNoaWxkVk5vZGUpKSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHR7IGNoaWxkcmVuOiBjaGlsZFZOb2RlIH0sXG5cdFx0XHRcdE5VTEwsXG5cdFx0XHRcdE5VTEwsXG5cdFx0XHRcdE5VTExcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09PSBVTkRFRklORUQgJiYgY2hpbGRWTm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0XHQvLyBWTm9kZSBpcyBhbHJlYWR5IGluIHVzZSwgY2xvbmUgaXQuIFRoaXMgY2FuIGhhcHBlbiBpbiB0aGUgZm9sbG93aW5nXG5cdFx0XHQvLyBzY2VuYXJpbzpcblx0XHRcdC8vICAgY29uc3QgcmV1c2UgPSA8ZGl2IC8+XG5cdFx0XHQvLyAgIDxkaXY+e3JldXNlfTxzcGFuIC8+e3JldXNlfTwvZGl2PlxuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUsXG5cdFx0XHRcdGNoaWxkVk5vZGUucHJvcHMsXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5LFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZiA/IGNoaWxkVk5vZGUucmVmIDogTlVMTCxcblx0XHRcdFx0Y2hpbGRWTm9kZS5fb3JpZ2luYWxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNoaWxkVk5vZGU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2tld2VkSW5kZXggPSBpICsgc2tldztcblx0XHRjaGlsZFZOb2RlLl9wYXJlbnQgPSBuZXdQYXJlbnRWTm9kZTtcblx0XHRjaGlsZFZOb2RlLl9kZXB0aCA9IG5ld1BhcmVudFZOb2RlLl9kZXB0aCArIDE7XG5cblx0XHQvLyBUZW1wb3JhcmlseSBzdG9yZSB0aGUgbWF0Y2hpbmdJbmRleCBvbiB0aGUgX2luZGV4IHByb3BlcnR5IHNvIHdlIGNhbiBwdWxsXG5cdFx0Ly8gb3V0IHRoZSBvbGRWTm9kZSBpbiBkaWZmQ2hpbGRyZW4uIFdlJ2xsIG92ZXJyaWRlIHRoaXMgdG8gdGhlIFZOb2RlJ3Ncblx0XHQvLyBmaW5hbCBpbmRleCBhZnRlciB1c2luZyB0aGlzIHByb3BlcnR5IHRvIGdldCB0aGUgb2xkVk5vZGVcblx0XHRjb25zdCBtYXRjaGluZ0luZGV4ID0gKGNoaWxkVk5vZGUuX2luZGV4ID0gZmluZE1hdGNoaW5nSW5kZXgoXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkQ2hpbGRyZW4sXG5cdFx0XHRza2V3ZWRJbmRleCxcblx0XHRcdHJlbWFpbmluZ09sZENoaWxkcmVuXG5cdFx0KSk7XG5cblx0XHRvbGRWTm9kZSA9IE5VTEw7XG5cdFx0aWYgKG1hdGNoaW5nSW5kZXggIT0gLTEpIHtcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bbWF0Y2hpbmdJbmRleF07XG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbi0tO1xuXHRcdFx0aWYgKG9sZFZOb2RlKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9mbGFncyB8PSBNQVRDSEVEO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEhlcmUsIHdlIGRlZmluZSBpc01vdW50aW5nIGZvciB0aGUgcHVycG9zZXMgb2YgdGhlIHNrZXcgZGlmZmluZ1xuXHRcdC8vIGFsZ29yaXRobS4gTm9kZXMgdGhhdCBhcmUgdW5zdXNwZW5kaW5nIGFyZSBjb25zaWRlcmVkIG1vdW50aW5nIGFuZCB3ZSBkZXRlY3Rcblx0XHQvLyB0aGlzIGJ5IGNoZWNraW5nIGlmIG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBudWxsXG5cdFx0Y29uc3QgaXNNb3VudGluZyA9IG9sZFZOb2RlID09IE5VTEwgfHwgb2xkVk5vZGUuX29yaWdpbmFsID09IE5VTEw7XG5cblx0XHRpZiAoaXNNb3VudGluZykge1xuXHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPT0gLTEpIHtcblx0XHRcdFx0Ly8gV2hlbiB0aGUgYXJyYXkgb2YgY2hpbGRyZW4gaXMgZ3Jvd2luZyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3XG5cdFx0XHRcdC8vIGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudCB0byB0aGUgYXJyYXkuXG5cdFx0XHRcdC8vIEV4YW1wbGU6XG5cdFx0XHRcdC8vIFsxLCAyLCAzXSAtLT4gWzAsIDEsIDIsIDNdXG5cdFx0XHRcdC8vIG9sZENoaWxkcmVuICAgbmV3Q2hpbGRyZW5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gVGhlIG5ldyBlbGVtZW50IGlzIGF0IGluZGV4IDAsIHNvIG91ciBza2V3IGlzIDAsXG5cdFx0XHRcdC8vIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIHNrZXcgYXMgd2UgYXJlIGFkZGluZyBhIG5ldyBlbGVtZW50LlxuXHRcdFx0XHQvLyBUaGUgZGVjcmVhc2Ugd2lsbCBjYXVzZSB1cyB0byBjb21wYXJlIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDFcblx0XHRcdFx0Ly8gd2l0aCB2YWx1ZSAxIHdpdGggdGhlIGVsZW1lbnQgYXQgcG9zaXRpb24gMCB3aXRoIHZhbHVlIDAuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIEEgbGluZWFyIGNvbmNlcHQgaXMgYXBwbGllZCB3aGVuIHRoZSBhcnJheSBpcyBzaHJpbmtpbmcsXG5cdFx0XHRcdC8vIGlmIHRoZSBsZW5ndGggaXMgdW5jaGFuZ2VkIHdlIGNhbiBhc3N1bWUgdGhhdCBubyBza2V3XG5cdFx0XHRcdC8vIGNoYW5nZXMgYXJlIG5lZWRlZC5cblx0XHRcdFx0aWYgKG5ld0NoaWxkcmVuTGVuZ3RoID4gb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3LS07XG5cdFx0XHRcdH0gZWxzZSBpZiAobmV3Q2hpbGRyZW5MZW5ndGggPCBvbGRDaGlsZHJlbkxlbmd0aCkge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBhcmUgbW91bnRpbmcgYSBET00gVk5vZGUsIG1hcmsgaXQgZm9yIGluc2VydGlvblxuXHRcdFx0aWYgKHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjaGlsZFZOb2RlLl9mbGFncyB8PSBJTlNFUlRfVk5PREU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ICE9IHNrZXdlZEluZGV4KSB7XG5cdFx0XHQvLyBXaGVuIHdlIG1vdmUgZWxlbWVudHMgYXJvdW5kIGkuZS4gWzAsIDEsIDJdIC0tPiBbMSwgMCwgMl1cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDEsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMSB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIDAgYW5kIG91ciBza2V3IGlzIDBcblx0XHRcdC8vICAgICB3ZSBzZXQgdGhlIHNrZXcgdG8gMSBhcyB3ZSBmb3VuZCBhbiBvZmZzZXQuXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAwLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDAgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCAyIGFuZCBvdXIgc2tldyBpcyAxXG5cdFx0XHQvLyAgICAgdGhpcyBtYWtlcyB1cyBpbmNyZWFzZSB0aGUgc2tldyBhZ2Fpbi5cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDIsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMiB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIGF0IDQgYW5kIG91ciBza2V3IGlzIDJcblx0XHRcdC8vXG5cdFx0XHQvLyB0aGlzIGJlY29tZXMgYW4gb3B0aW1pemF0aW9uIHF1ZXN0aW9uIHdoZXJlIGN1cnJlbnRseSB3ZSBzZWUgYSAxIGVsZW1lbnQgb2Zmc2V0IGFzIGFuIGluc2VydGlvblxuXHRcdFx0Ly8gb3IgZGVsZXRpb24gaS5lLiB3ZSBvcHRpbWl6ZSBmb3IgWzAsIDEsIDJdIC0tPiBbOSwgMCwgMSwgMl1cblx0XHRcdC8vIHdoaWxlIGEgbW9yZSB0aGFuIDEgb2Zmc2V0IHdlIHNlZSBhcyBhIHN3YXAuXG5cdFx0XHQvLyBXZSBjb3VsZCBwcm9iYWJseSBidWlsZCBoZXVyaXN0aWNzIGZvciBoYXZpbmcgYW4gb3B0aW1pemVkIGNvdXJzZSBvZiBhY3Rpb24gaGVyZSBhcyB3ZWxsLCBidXRcblx0XHRcdC8vIG1pZ2h0IGdvIGF0IHRoZSBjb3N0IG9mIHNvbWUgYnl0ZXMuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgd2Ugd2FudGVkIHRvIG9wdGltaXplIGZvciBpLmUuIG9ubHkgc3dhcHMgd2UnZCBqdXN0IGRvIHRoZSBsYXN0IHR3byBjb2RlLWJyYW5jaGVzIGFuZCBoYXZlXG5cdFx0XHQvLyBvbmx5IHRoZSBmaXJzdCBpdGVtIGJlIGEgcmUtc2NvdXRpbmcgYW5kIGFsbCB0aGUgb3RoZXJzIGZhbGwgaW4gdGhlaXIgc2tld2VkIGNvdW50ZXItcGFydC5cblx0XHRcdC8vIFdlIGNvdWxkIGFsc28gZnVydGhlciBvcHRpbWl6ZSBmb3Igc3dhcHNcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4IC0gMSkge1xuXHRcdFx0XHRza2V3LS07XG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoaW5nSW5kZXggPT0gc2tld2VkSW5kZXggKyAxKSB7XG5cdFx0XHRcdHNrZXcrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID4gc2tld2VkSW5kZXgpIHtcblx0XHRcdFx0XHRza2V3LS07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2tldysrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTW92ZSB0aGlzIFZOb2RlJ3MgRE9NIGlmIHRoZSBvcmlnaW5hbCBpbmRleCAobWF0Y2hpbmdJbmRleCkgZG9lc24ndFxuXHRcdFx0XHQvLyBtYXRjaCB0aGUgbmV3IHNrZXcgaW5kZXggKGkgKyBuZXcgc2tldylcblx0XHRcdFx0Ly8gSW4gdGhlIGZvcm1lciB0d28gYnJhbmNoZXMgd2Uga25vdyB0aGF0IGl0IG1hdGNoZXMgYWZ0ZXIgc2tld2luZ1xuXHRcdFx0XHRjaGlsZFZOb2RlLl9mbGFncyB8PSBJTlNFUlRfVk5PREU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHJlbWFpbmluZyBvbGRDaGlsZHJlbiBpZiB0aGVyZSBhcmUgYW55LiBMb29wIGZvcndhcmRzIHNvIHRoYXQgYXMgd2Vcblx0Ly8gdW5tb3VudCBET00gZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBvbGRDaGlsZHJlbiwgd2UgY2FuIGFkanVzdCBvbGREb20gdG9cblx0Ly8gcG9pbnQgdG8gdGhlIG5leHQgY2hpbGQsIHdoaWNoIG5lZWRzIHRvIGJlIHRoZSBmaXJzdCBET00gbm9kZSB0aGF0IHdvbid0IGJlXG5cdC8vIHVubW91bnRlZC5cblx0aWYgKHJlbWFpbmluZ09sZENoaWxkcmVuKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9sZENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5baV07XG5cdFx0XHRpZiAob2xkVk5vZGUgIT0gTlVMTCAmJiAob2xkVk5vZGUuX2ZsYWdzICYgTUFUQ0hFRCkgPT0gMCkge1xuXHRcdFx0XHRpZiAob2xkVk5vZGUuX2RvbSA9PSBvbGREb20pIHtcblx0XHRcdFx0XHRvbGREb20gPSBnZXREb21TaWJsaW5nKG9sZFZOb2RlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVubW91bnQob2xkVk5vZGUsIG9sZFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IHBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb21cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkUGxhY2VcbiAqIEByZXR1cm5zIHtQcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBpbnNlcnQocGFyZW50Vk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSkge1xuXHQvLyBOb3RlOiBWTm9kZXMgaW4gbmVzdGVkIHN1c3BlbmRlZCB0cmVlcyBtYXkgYmUgbWlzc2luZyBfY2hpbGRyZW4uXG5cblx0aWYgKHR5cGVvZiBwYXJlbnRWTm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRsZXQgY2hpbGRyZW4gPSBwYXJlbnRWTm9kZS5fY2hpbGRyZW47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGNoaWxkcmVuICYmIGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNoaWxkcmVuW2ldKSB7XG5cdFx0XHRcdC8vIElmIHdlIGVudGVyIHRoaXMgY29kZSBwYXRoIG9uIHNDVSBiYWlsb3V0LCB3aGVyZSB3ZSBjb3B5XG5cdFx0XHRcdC8vIG9sZFZOb2RlLl9jaGlsZHJlbiB0byBuZXdWTm9kZS5fY2hpbGRyZW4sIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBvbGRcblx0XHRcdFx0Ly8gY2hpbGRyZW4ncyBfcGFyZW50IHBvaW50ZXIgdG8gcG9pbnQgdG8gdGhlIG5ld1ZOb2RlIChwYXJlbnRWTm9kZVxuXHRcdFx0XHQvLyBoZXJlKS5cblx0XHRcdFx0Y2hpbGRyZW5baV0uX3BhcmVudCA9IHBhcmVudFZOb2RlO1xuXHRcdFx0XHRvbGREb20gPSBpbnNlcnQoY2hpbGRyZW5baV0sIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9sZERvbTtcblx0fSBlbHNlIGlmIChwYXJlbnRWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdGlmIChzaG91bGRQbGFjZSkge1xuXHRcdFx0aWYgKG9sZERvbSAmJiBwYXJlbnRWTm9kZS50eXBlICYmICFvbGREb20ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRvbGREb20gPSBnZXREb21TaWJsaW5nKHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHRcdHBhcmVudERvbS5pbnNlcnRCZWZvcmUocGFyZW50Vk5vZGUuX2RvbSwgb2xkRG9tIHx8IE5VTEwpO1xuXHRcdH1cblx0XHRvbGREb20gPSBwYXJlbnRWTm9kZS5fZG9tO1xuXHR9XG5cblx0ZG8ge1xuXHRcdG9sZERvbSA9IG9sZERvbSAmJiBvbGREb20ubmV4dFNpYmxpbmc7XG5cdH0gd2hpbGUgKG9sZERvbSAhPSBOVUxMICYmIG9sZERvbS5ub2RlVHlwZSA9PSA4KTtcblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW5kIGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW59IGNoaWxkcmVuIFRoZSB1bmZsYXR0ZW5lZCBjaGlsZHJlbiBvZiBhIHZpcnR1YWxcbiAqIG5vZGVcbiAqIEByZXR1cm5zIHtWTm9kZVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9DaGlsZEFycmF5KGNoaWxkcmVuLCBvdXQpIHtcblx0b3V0ID0gb3V0IHx8IFtdO1xuXHRpZiAoY2hpbGRyZW4gPT0gTlVMTCB8fCB0eXBlb2YgY2hpbGRyZW4gPT0gJ2Jvb2xlYW4nKSB7XG5cdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdHRvQ2hpbGRBcnJheShjaGlsZCwgb3V0KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvdXQucHVzaChjaGlsZHJlbik7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBjaGlsZFZOb2RlXG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gc2tld2VkSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1haW5pbmdPbGRDaGlsZHJlblxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZmluZE1hdGNoaW5nSW5kZXgoXG5cdGNoaWxkVk5vZGUsXG5cdG9sZENoaWxkcmVuLFxuXHRza2V3ZWRJbmRleCxcblx0cmVtYWluaW5nT2xkQ2hpbGRyZW5cbikge1xuXHRjb25zdCBrZXkgPSBjaGlsZFZOb2RlLmtleTtcblx0Y29uc3QgdHlwZSA9IGNoaWxkVk5vZGUudHlwZTtcblx0bGV0IG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bc2tld2VkSW5kZXhdO1xuXHRjb25zdCBtYXRjaGVkID0gb2xkVk5vZGUgIT0gTlVMTCAmJiAob2xkVk5vZGUuX2ZsYWdzICYgTUFUQ0hFRCkgPT0gMDtcblxuXHQvLyBXZSBvbmx5IG5lZWQgdG8gcGVyZm9ybSBhIHNlYXJjaCBpZiB0aGVyZSBhcmUgbW9yZSBjaGlsZHJlblxuXHQvLyAocmVtYWluaW5nT2xkQ2hpbGRyZW4pIHRvIHNlYXJjaC4gSG93ZXZlciwgaWYgdGhlIG9sZFZOb2RlIHdlIGp1c3QgbG9va2VkXG5cdC8vIGF0IHNrZXdlZEluZGV4IHdhcyBub3QgYWxyZWFkeSB1c2VkIGluIHRoaXMgZGlmZiwgdGhlbiB0aGVyZSBtdXN0IGJlIGF0XG5cdC8vIGxlYXN0IDEgb3RoZXIgKHNvIGdyZWF0ZXIgdGhhbiAxKSByZW1haW5pbmdPbGRDaGlsZHJlbiB0byBhdHRlbXB0IHRvIG1hdGNoXG5cdC8vIGFnYWluc3QuIFNvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uIGNoZWNrcyB0aGF0IGVuc3VyaW5nXG5cdC8vIHJlbWFpbmluZ09sZENoaWxkcmVuID4gMSBpZiB0aGUgb2xkVk5vZGUgaXMgbm90IGFscmVhZHkgdXNlZC9tYXRjaGVkLiBFbHNlXG5cdC8vIGlmIHRoZSBvbGRWTm9kZSB3YXMgbnVsbCBvciBtYXRjaGVkLCB0aGVuIHRoZXJlIGNvdWxkIG5lZWRzIHRvIGJlIGF0IGxlYXN0XG5cdC8vIDEgKGFrYSBgcmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAwYCkgY2hpbGRyZW4gdG8gZmluZCBhbmQgY29tcGFyZSBhZ2FpbnN0LlxuXHQvL1xuXHQvLyBJZiB0aGVyZSBpcyBhbiB1bmtleWVkIGZ1bmN0aW9uYWwgVk5vZGUsIHRoYXQgaXNuJ3QgYSBidWlsdC1pbiBsaWtlIG91ciBGcmFnbWVudCxcblx0Ly8gd2Ugc2hvdWxkIG5vdCBzZWFyY2ggYXMgd2UgcmlzayByZS11c2luZyBzdGF0ZSBvZiBhbiB1bnJlbGF0ZWQgVk5vZGUuIChyZXZlcnRlZCBmb3Igbm93KVxuXHRsZXQgc2hvdWxkU2VhcmNoID1cblx0XHQvLyAodHlwZW9mIHR5cGUgIT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSBGcmFnbWVudCB8fCBrZXkpICYmXG5cdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAobWF0Y2hlZCA/IDEgOiAwKTtcblxuXHRpZiAoXG5cdFx0KG9sZFZOb2RlID09PSBOVUxMICYmIGtleSA9PSBudWxsKSB8fFxuXHRcdChtYXRjaGVkICYmIGtleSA9PSBvbGRWTm9kZS5rZXkgJiYgdHlwZSA9PSBvbGRWTm9kZS50eXBlKVxuXHQpIHtcblx0XHRyZXR1cm4gc2tld2VkSW5kZXg7XG5cdH0gZWxzZSBpZiAoc2hvdWxkU2VhcmNoKSB7XG5cdFx0bGV0IHggPSBza2V3ZWRJbmRleCAtIDE7XG5cdFx0bGV0IHkgPSBza2V3ZWRJbmRleCArIDE7XG5cdFx0d2hpbGUgKHggPj0gMCB8fCB5IDwgb2xkQ2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBjaGlsZEluZGV4ID0geCA+PSAwID8geC0tIDogeSsrO1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltjaGlsZEluZGV4XTtcblx0XHRcdGlmIChcblx0XHRcdFx0b2xkVk5vZGUgIT0gTlVMTCAmJlxuXHRcdFx0XHQob2xkVk5vZGUuX2ZsYWdzICYgTUFUQ0hFRCkgPT0gMCAmJlxuXHRcdFx0XHRrZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdHR5cGUgPT0gb2xkVk5vZGUudHlwZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBjaGlsZEluZGV4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiAtMTtcbn1cbiIsICJpbXBvcnQge1xuXHRFTVBUWV9BUlIsXG5cdEVNUFRZX09CSixcblx0TUFUSF9OQU1FU1BBQ0UsXG5cdE1PREVfSFlEUkFURSxcblx0TU9ERV9TVVNQRU5ERUQsXG5cdE5VTEwsXG5cdFJFU0VUX01PREUsXG5cdFNWR19OQU1FU1BBQ0UsXG5cdFVOREVGSU5FRCxcblx0WEhUTUxfTkFNRVNQQUNFXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50LCBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGlmZkNoaWxkcmVuIH0gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBzZXRQcm9wZXJ0eSB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgYXNzaWduLCBpc0FycmF5LCByZW1vdmVOb2RlLCBzbGljZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbn0gQ29tcG9uZW50Q2hpbGRyZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSBDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gUHJlYWN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gVk5vZGVcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7YW55fSBUXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlJlZjxUPn0gUmVmPFQ+XG4gKi9cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIGFuZCBhcHBseSBwcm9wZXIgY2hhbmdlcyB0byB0aGUgRE9NXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgcGFyZW50IG9mIHRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtWTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdC4gTW9kaWZpZWQgYnlcbiAqIGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NIGVsZW1lbnQgYW55IG5ldyBkb21cbiAqIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0IHJlbmRlciAoZXhjZXB0IHdoZW5cbiAqIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nIEZyYWdtZW50cyB0aGF0IGhhdmVcbiAqIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHBhcmFtIHthbnlbXX0gcmVmUXVldWUgYW4gYXJyYXkgb2YgZWxlbWVudHMgbmVlZGVkIHRvIGludm9rZSByZWZzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKFxuXHRwYXJlbnREb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCB0bXAsXG5cdFx0bmV3VHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cblx0Ly8gV2hlbiBwYXNzaW5nIHRocm91Z2ggY3JlYXRlRWxlbWVudCBpdCBhc3NpZ25zIHRoZSBvYmplY3Rcblx0Ly8gY29uc3RydWN0b3IgYXMgdW5kZWZpbmVkLiBUaGlzIHRvIHByZXZlbnQgSlNPTi1pbmplY3Rpb24uXG5cdGlmIChuZXdWTm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gTlVMTDtcblxuXHQvLyBJZiB0aGUgcHJldmlvdXMgZGlmZiBiYWlsZWQgb3V0LCByZXN1bWUgY3JlYXRpbmcvaHlkcmF0aW5nLlxuXHRpZiAob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQpIHtcblx0XHRpc0h5ZHJhdGluZyA9ICEhKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfSFlEUkFURSk7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBbb2xkRG9tXTtcblx0fVxuXG5cdGlmICgodG1wID0gb3B0aW9ucy5fZGlmZikpIHRtcChuZXdWTm9kZSk7XG5cblx0b3V0ZXI6IGlmICh0eXBlb2YgbmV3VHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IG9sZENvbW1pdFF1ZXVlTGVuZ3RoID0gY29tbWl0UXVldWUubGVuZ3RoO1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYywgaXNOZXcsIG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QsIGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbjtcblx0XHRcdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXHRcdFx0Y29uc3QgaXNDbGFzc0NvbXBvbmVudCA9IG5ld1R5cGUucHJvdG90eXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcjtcblxuXHRcdFx0Ly8gTmVjZXNzYXJ5IGZvciBjcmVhdGVDb250ZXh0IGFwaS4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgcGFzc1xuXHRcdFx0Ly8gdGhlIGNvbnRleHQgdmFsdWUgYXMgYHRoaXMuY29udGV4dGAganVzdCBmb3IgdGhpcyBjb21wb25lbnQuXG5cdFx0XHR0bXAgPSBuZXdUeXBlLmNvbnRleHRUeXBlO1xuXHRcdFx0bGV0IHByb3ZpZGVyID0gdG1wICYmIGdsb2JhbENvbnRleHRbdG1wLl9pZF07XG5cdFx0XHRsZXQgY29tcG9uZW50Q29udGV4dCA9IHRtcFxuXHRcdFx0XHQ/IHByb3ZpZGVyXG5cdFx0XHRcdFx0PyBwcm92aWRlci5wcm9wcy52YWx1ZVxuXHRcdFx0XHRcdDogdG1wLl9kZWZhdWx0VmFsdWVcblx0XHRcdFx0OiBnbG9iYWxDb250ZXh0O1xuXG5cdFx0XHQvLyBHZXQgY29tcG9uZW50IGFuZCBzZXQgaXQgdG8gYGNgXG5cdFx0XHRpZiAob2xkVk5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRjID0gbmV3Vk5vZGUuX2NvbXBvbmVudCA9IG9sZFZOb2RlLl9jb21wb25lbnQ7XG5cdFx0XHRcdGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wZW5kaW5nRXJyb3I7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJbnN0YW50aWF0ZSB0aGUgbmV3IGNvbXBvbmVudFxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCkge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVGhlIGNoZWNrIGFib3ZlIHZlcmlmaWVzIHRoYXQgbmV3VHlwZSBpcyBzdXBwb3NlIHRvIGJlIGNvbnN0cnVjdGVkXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgbmV3VHlwZShuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVHJ1c3QgbWUsIENvbXBvbmVudCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2Ugd2Ugd2FudFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IEJhc2VDb21wb25lbnQoXG5cdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGMuY29uc3RydWN0b3IgPSBuZXdUeXBlO1xuXHRcdFx0XHRcdGMucmVuZGVyID0gZG9SZW5kZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByb3ZpZGVyKSBwcm92aWRlci5zdWIoYyk7XG5cblx0XHRcdFx0aWYgKCFjLnN0YXRlKSBjLnN0YXRlID0ge307XG5cdFx0XHRcdGMuX2dsb2JhbENvbnRleHQgPSBnbG9iYWxDb250ZXh0O1xuXHRcdFx0XHRpc05ldyA9IGMuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9XG5cblx0XHRcdC8vIEludm9rZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuX25leHRTdGF0ZSA9PSBOVUxMKSB7XG5cdFx0XHRcdGMuX25leHRTdGF0ZSA9IGMuc3RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9IE5VTEwpIHtcblx0XHRcdFx0aWYgKGMuX25leHRTdGF0ZSA9PSBjLnN0YXRlKSB7XG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCBjLl9uZXh0U3RhdGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXNzaWduKFxuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXdQcm9wcywgYy5fbmV4dFN0YXRlKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbGRQcm9wcyA9IGMucHJvcHM7XG5cdFx0XHRvbGRTdGF0ZSA9IGMuc3RhdGU7XG5cdFx0XHRjLl92bm9kZSA9IG5ld1ZOb2RlO1xuXG5cdFx0XHQvLyBJbnZva2UgcHJlLXJlbmRlciBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdFx0aWYgKGlzTmV3KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpc0NsYXNzQ29tcG9uZW50ICYmXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gTlVMTCAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50ICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkTW91bnQgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuY29tcG9uZW50RGlkTW91bnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRuZXdQcm9wcyAhPT0gb2xkUHJvcHMgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgIT0gTlVMTFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PSBvbGRWTm9kZS5fb3JpZ2luYWwgfHxcblx0XHRcdFx0XHQoIWMuX2ZvcmNlICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPSBOVUxMICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZShcblx0XHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdFx0KSA9PT0gZmFsc2UpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIE1vcmUgaW5mbyBhYm91dCB0aGlzIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0pvdmlEZUNyb29jay9iZWM1ZjJjZTkzNTQ0ZDJlNjA3MGVmOGUwMDM2ZTRlOFxuXHRcdFx0XHRcdGlmIChuZXdWTm9kZS5fb3JpZ2luYWwgIT0gb2xkVk5vZGUuX29yaWdpbmFsKSB7XG5cdFx0XHRcdFx0XHQvLyBXaGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBiYWlsIGJlY2F1c2Ugb2Ygc0NVIHdlIGhhdmUgdG8gdXBkYXRlXG5cdFx0XHRcdFx0XHQvLyB0aGUgcHJvcHMsIHN0YXRlIGFuZCBkaXJ0eS1zdGF0ZS5cblx0XHRcdFx0XHRcdC8vIHdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBzdHJpY3QtZXF1YWxpdHkgd2UgZG9uJ3QgYXMgdGhlIGNoaWxkIGNvdWxkIHN0aWxsXG5cdFx0XHRcdFx0XHQvLyBiZSBkaXJ0aWVkIHNlZSAjMzg4M1xuXHRcdFx0XHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbi5zb21lKHZub2RlID0+IHtcblx0XHRcdFx0XHRcdGlmICh2bm9kZSkgdm5vZGUuX3BhcmVudCA9IG5ld1ZOb2RlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblxuXHRcdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50V2lsbFVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVXBkYXRlKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5jb21wb25lbnREaWRVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRcdGMuY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGMuY29udGV4dCA9IGNvbXBvbmVudENvbnRleHQ7XG5cdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRjLl9wYXJlbnREb20gPSBwYXJlbnREb207XG5cdFx0XHRjLl9mb3JjZSA9IGZhbHNlO1xuXG5cdFx0XHRsZXQgcmVuZGVySG9vayA9IG9wdGlvbnMuX3JlbmRlcixcblx0XHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRFTVBUWV9BUlIucHVzaC5hcHBseShjLl9yZW5kZXJDYWxsYmFja3MsIGMuX3N0YXRlQ2FsbGJhY2tzKTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0fSB3aGlsZSAoYy5fZGlydHkgJiYgKytjb3VudCA8IDI1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblxuXHRcdFx0aWYgKGMuZ2V0Q2hpbGRDb250ZXh0ICE9IE5VTEwpIHtcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCA9IGFzc2lnbihhc3NpZ24oe30sIGdsb2JhbENvbnRleHQpLCBjLmdldENoaWxkQ29udGV4dCgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgIWlzTmV3ICYmIGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRzbmFwc2hvdCA9IGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHJlbmRlclJlc3VsdCA9XG5cdFx0XHRcdHRtcCAhPSBOVUxMICYmIHRtcC50eXBlID09PSBGcmFnbWVudCAmJiB0bXAua2V5ID09IE5VTExcblx0XHRcdFx0XHQ/IGNsb25lTm9kZSh0bXAucHJvcHMuY2hpbGRyZW4pXG5cdFx0XHRcdFx0OiB0bXA7XG5cblx0XHRcdG9sZERvbSA9IGRpZmZDaGlsZHJlbihcblx0XHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0XHRpc0FycmF5KHJlbmRlclJlc3VsdCkgPyByZW5kZXJSZXN1bHQgOiBbcmVuZGVyUmVzdWx0XSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdFx0cmVmUXVldWVcblx0XHRcdCk7XG5cblx0XHRcdGMuYmFzZSA9IG5ld1ZOb2RlLl9kb207XG5cblx0XHRcdC8vIFdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZCB0aGlzIFZOb2RlLCB1bnNldCBhbnkgc3RvcmVkIGh5ZHJhdGlvbi9iYWlsb3V0IHN0YXRlOlxuXHRcdFx0bmV3Vk5vZGUuX2ZsYWdzICY9IFJFU0VUX01PREU7XG5cblx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdFx0Yy5fcGVuZGluZ0Vycm9yID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IE5VTEw7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gV2UgcmVtb3ZlIGFueSBjb21wb25lbnREaWRNb3VudCwgLi4uXG5cdFx0XHQvLyB0aGF0IGhhdmUgYmVlbiBpbnZhbGlkYXRlZCBieSB1c1xuXHRcdFx0Ly8gaW50ZXJjZXB0aW5nIHRoZSBlcnJvci5cblx0XHRcdGNvbW1pdFF1ZXVlLmxlbmd0aCA9IG9sZENvbW1pdFF1ZXVlTGVuZ3RoO1xuXHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gTlVMTDtcblx0XHRcdC8vIGlmIGh5ZHJhdGluZyBvciBjcmVhdGluZyBpbml0aWFsIHRyZWUsIGJhaWxvdXQgcHJlc2VydmVzIERPTTpcblx0XHRcdGlmIChpc0h5ZHJhdGluZyB8fCBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChlLnRoZW4pIHtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZmxhZ3MgfD0gaXNIeWRyYXRpbmdcblx0XHRcdFx0XHRcdD8gTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERURcblx0XHRcdFx0XHRcdDogTU9ERV9TVVNQRU5ERUQ7XG5cblx0XHRcdFx0XHR3aGlsZSAob2xkRG9tICYmIG9sZERvbS5ub2RlVHlwZSA9PSA4ICYmIG9sZERvbS5uZXh0U2libGluZykge1xuXHRcdFx0XHRcdFx0b2xkRG9tID0gb2xkRG9tLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltleGNlc3NEb21DaGlsZHJlbi5pbmRleE9mKG9sZERvbSldID0gTlVMTDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZERvbTtcblx0XHRcdFx0fSBlbHNlIGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdWTm9kZS5fY2hpbGRyZW4gPT0gTlVMTCkge1xuXHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW4gfHwgW107XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZS50aGVuKSBtYXJrQXNGb3JjZShuZXdWTm9kZSk7XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIG5ld1ZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKFxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID09IE5VTEwgJiZcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdCkge1xuXHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0fSBlbHNlIHtcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gZGlmZkVsZW1lbnROb2Rlcyhcblx0XHRcdG9sZFZOb2RlLl9kb20sXG5cdFx0XHRuZXdWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblx0fVxuXG5cdGlmICgodG1wID0gb3B0aW9ucy5kaWZmZWQpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdHJldHVybiBuZXdWTm9kZS5fZmxhZ3MgJiBNT0RFX1NVU1BFTkRFRCA/IHVuZGVmaW5lZCA6IG9sZERvbTtcbn1cblxuZnVuY3Rpb24gbWFya0FzRm9yY2Uodm5vZGUpIHtcblx0aWYgKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQpIHZub2RlLl9jb21wb25lbnQuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAodm5vZGUuX2NoaWxkcmVuKSB2bm9kZS5fY2hpbGRyZW4uc29tZShtYXJrQXNGb3JjZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7Vk5vZGV9IHJvb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHJvb3QsIHJlZlF1ZXVlKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcmVmUXVldWUubGVuZ3RoOyBpKyspIHtcblx0XHRhcHBseVJlZihyZWZRdWV1ZVtpXSwgcmVmUXVldWVbKytpXSwgcmVmUXVldWVbKytpXSk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5fY29tbWl0KSBvcHRpb25zLl9jb21taXQocm9vdCwgY29tbWl0UXVldWUpO1xuXG5cdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgUmV1c2UgdGhlIGNvbW1pdFF1ZXVlIHZhcmlhYmxlIGhlcmUgc28gdGhlIHR5cGUgY2hhbmdlc1xuXHRcdFx0Y29tbWl0UXVldWUgPSBjLl9yZW5kZXJDYWxsYmFja3M7XG5cdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoY2IgPT4ge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFNlZSBhYm92ZSBjb21tZW50IG9uIGNvbW1pdFF1ZXVlXG5cdFx0XHRcdGNiLmNhbGwoYyk7XG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGMuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuXHRpZiAodHlwZW9mIG5vZGUgIT0gJ29iamVjdCcgfHwgbm9kZSA9PSBOVUxMIHx8IG5vZGUuX2RlcHRoID4gMCkge1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0aWYgKGlzQXJyYXkobm9kZSkpIHtcblx0XHRyZXR1cm4gbm9kZS5tYXAoY2xvbmVOb2RlKTtcblx0fVxuXG5cdGlmIChub2RlLmNvbnN0cnVjdG9yICE9PSBVTkRFRklORUQpIHJldHVybiBudWxsO1xuXG5cdHJldHVybiBhc3NpZ24oe30sIG5vZGUpO1xufVxuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgcmVwcmVzZW50aW5nIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSB2aXJ0dWFsIG5vZGVzXG4gKiBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHBhcmFtIHthbnlbXX0gcmVmUXVldWUgYW4gYXJyYXkgb2YgZWxlbWVudHMgbmVlZGVkIHRvIGludm9rZSByZWZzXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZGlmZkVsZW1lbnROb2Rlcyhcblx0ZG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgb2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG5cdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXHRsZXQgbm9kZVR5cGUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKG5ld1ZOb2RlLnR5cGUpO1xuXHQvKiogQHR5cGUge2FueX0gKi9cblx0bGV0IGk7XG5cdC8qKiBAdHlwZSB7eyBfX2h0bWw/OiBzdHJpbmcgfX0gKi9cblx0bGV0IG5ld0h0bWw7XG5cdC8qKiBAdHlwZSB7eyBfX2h0bWw/OiBzdHJpbmcgfX0gKi9cblx0bGV0IG9sZEh0bWw7XG5cdC8qKiBAdHlwZSB7Q29tcG9uZW50Q2hpbGRyZW59ICovXG5cdGxldCBuZXdDaGlsZHJlbjtcblx0bGV0IHZhbHVlO1xuXHRsZXQgaW5wdXRWYWx1ZTtcblx0bGV0IGNoZWNrZWQ7XG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIG5hbWVzcGFjZXMgd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlmIChub2RlVHlwZSA9PSAnc3ZnJykgbmFtZXNwYWNlID0gU1ZHX05BTUVTUEFDRTtcblx0ZWxzZSBpZiAobm9kZVR5cGUgPT0gJ21hdGgnKSBuYW1lc3BhY2UgPSBNQVRIX05BTUVTUEFDRTtcblx0ZWxzZSBpZiAoIW5hbWVzcGFjZSkgbmFtZXNwYWNlID0gWEhUTUxfTkFNRVNQQUNFO1xuXG5cdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YWx1ZSA9IGV4Y2Vzc0RvbUNoaWxkcmVuW2ldO1xuXG5cdFx0XHQvLyBpZiBuZXdWTm9kZSBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4gb3IgdGhlIGBkb21gXG5cdFx0XHQvLyBhcmd1bWVudCBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4sIHJlbW92ZSBpdCBmcm9tXG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbiBzbyBpdCBpc24ndCBsYXRlciByZW1vdmVkIGluIGRpZmZDaGlsZHJlblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR2YWx1ZSAmJlxuXHRcdFx0XHQnc2V0QXR0cmlidXRlJyBpbiB2YWx1ZSA9PSAhIW5vZGVUeXBlICYmXG5cdFx0XHRcdChub2RlVHlwZSA/IHZhbHVlLmxvY2FsTmFtZSA9PSBub2RlVHlwZSA6IHZhbHVlLm5vZGVUeXBlID09IDMpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tID0gdmFsdWU7XG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2ldID0gTlVMTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGRvbSA9PSBOVUxMKSB7XG5cdFx0aWYgKG5vZGVUeXBlID09IE5VTEwpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdQcm9wcyk7XG5cdFx0fVxuXG5cdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0bm9kZVR5cGUsXG5cdFx0XHRuZXdQcm9wcy5pcyAmJiBuZXdQcm9wc1xuXHRcdCk7XG5cblx0XHQvLyB3ZSBhcmUgY3JlYXRpbmcgYSBuZXcgbm9kZSwgc28gd2UgY2FuIGFzc3VtZSB0aGlzIGlzIGEgbmV3IHN1YnRyZWUgKGluXG5cdFx0Ly8gY2FzZSB3ZSBhcmUgaHlkcmF0aW5nKSwgdGhpcyBkZW9wdHMgdGhlIGh5ZHJhdGVcblx0XHRpZiAoaXNIeWRyYXRpbmcpIHtcblx0XHRcdGlmIChvcHRpb25zLl9oeWRyYXRpb25NaXNtYXRjaClcblx0XHRcdFx0b3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gobmV3Vk5vZGUsIGV4Y2Vzc0RvbUNoaWxkcmVuKTtcblx0XHRcdGlzSHlkcmF0aW5nID0gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIHdlIGNyZWF0ZWQgYSBuZXcgcGFyZW50LCBzbyBub25lIG9mIHRoZSBwcmV2aW91c2x5IGF0dGFjaGVkIGNoaWxkcmVuIGNhbiBiZSByZXVzZWQ6XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBOVUxMO1xuXHR9XG5cblx0aWYgKG5vZGVUeXBlID09IE5VTEwpIHtcblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCB3ZSBzdGlsbCBoYXZlIHRvIHNwbGl0IG1lcmdlZCB0ZXh0IGZyb20gU1NSJ2QgSFRNTC5cblx0XHRpZiAob2xkUHJvcHMgIT09IG5ld1Byb3BzICYmICghaXNIeWRyYXRpbmcgfHwgZG9tLmRhdGEgIT0gbmV3UHJvcHMpKSB7XG5cdFx0XHRkb20uZGF0YSA9IG5ld1Byb3BzO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBJZiBleGNlc3NEb21DaGlsZHJlbiB3YXMgbm90IG51bGwsIHJlcG9wdWxhdGUgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50J3MgY2hpbGRyZW46XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPVxuXHRcdFx0bm9kZVR5cGUgPT0gJ3RleHRhcmVhJyAmJiBuZXdQcm9wcy5kZWZhdWx0VmFsdWUgIT0gTlVMTFxuXHRcdFx0XHQ/IE5VTExcblx0XHRcdFx0OiBleGNlc3NEb21DaGlsZHJlbiAmJiBzbGljZS5jYWxsKGRvbS5jaGlsZE5vZGVzKTtcblxuXHRcdC8vIElmIHdlIGFyZSBpbiBhIHNpdHVhdGlvbiB3aGVyZSB3ZSBhcmUgbm90IGh5ZHJhdGluZyBidXQgYXJlIHVzaW5nXG5cdFx0Ly8gZXhpc3RpbmcgRE9NIChlLmcuIHJlcGxhY2VOb2RlKSB3ZSBzaG91bGQgcmVhZCB0aGUgZXhpc3RpbmcgRE9NXG5cdFx0Ly8gYXR0cmlidXRlcyB0byBkaWZmIHRoZW1cblx0XHRpZiAoIWlzSHlkcmF0aW5nICYmIGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdG9sZFByb3BzID0ge307XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZG9tLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFsdWUgPSBkb20uYXR0cmlidXRlc1tpXTtcblx0XHRcdFx0b2xkUHJvcHNbdmFsdWUubmFtZV0gPSB2YWx1ZS52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgaW4gb2xkUHJvcHMpIHtcblx0XHRcdHZhbHVlID0gb2xkUHJvcHNbaV07XG5cdFx0XHRpZiAoaSA9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0XHRcdG9sZEh0bWwgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGkgIT0gJ2NoaWxkcmVuJyAmJlxuXHRcdFx0XHQhKGkgaW4gbmV3UHJvcHMpICYmXG5cdFx0XHRcdCEoaSA9PSAndmFsdWUnICYmICdkZWZhdWx0VmFsdWUnIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ2NoZWNrZWQnICYmICdkZWZhdWx0Q2hlY2tlZCcgaW4gbmV3UHJvcHMpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBOVUxMLCB2YWx1ZSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCBwcm9wcyBhcmUgbm90IGRpZmZlZCBhdCBhbGwgKGluY2x1ZGluZyBkYW5nZXJvdXNseVNldElubmVySFRNTClcblx0XHQvLyBAVE9ETyB3ZSBzaG91bGQgd2FybiBpbiBkZWJ1ZyBtb2RlIHdoZW4gcHJvcHMgZG9uJ3QgbWF0Y2ggaGVyZS5cblx0XHRmb3IgKGkgaW4gbmV3UHJvcHMpIHtcblx0XHRcdHZhbHVlID0gbmV3UHJvcHNbaV07XG5cdFx0XHRpZiAoaSA9PSAnY2hpbGRyZW4nKSB7XG5cdFx0XHRcdG5ld0NoaWxkcmVuID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRuZXdIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT0gJ3ZhbHVlJykge1xuXHRcdFx0XHRpbnB1dFZhbHVlID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT0gJ2NoZWNrZWQnKSB7XG5cdFx0XHRcdGNoZWNrZWQgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdCghaXNIeWRyYXRpbmcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpICYmXG5cdFx0XHRcdG9sZFByb3BzW2ldICE9PSB2YWx1ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgdmFsdWUsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBuZXcgdm5vZGUgZGlkbid0IGhhdmUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGRpZmYgaXRzIGNoaWxkcmVuXG5cdFx0aWYgKG5ld0h0bWwpIHtcblx0XHRcdC8vIEF2b2lkIHJlLWFwcGx5aW5nIHRoZSBzYW1lICdfX2h0bWwnIGlmIGl0IGRpZCBub3QgY2hhbmdlZCBiZXR3ZWVuIHJlLXJlbmRlclxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhaXNIeWRyYXRpbmcgJiZcblx0XHRcdFx0KCFvbGRIdG1sIHx8XG5cdFx0XHRcdFx0KG5ld0h0bWwuX19odG1sICE9IG9sZEh0bWwuX19odG1sICYmIG5ld0h0bWwuX19odG1sICE9IGRvbS5pbm5lckhUTUwpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbS5pbm5lckhUTUwgPSBuZXdIdG1sLl9faHRtbDtcblx0XHRcdH1cblxuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChvbGRIdG1sKSBkb20uaW5uZXJIVE1MID0gJyc7XG5cblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHRuZXdWTm9kZS50eXBlID09ICd0ZW1wbGF0ZScgPyBkb20uY29udGVudCA6IGRvbSxcblx0XHRcdFx0aXNBcnJheShuZXdDaGlsZHJlbikgPyBuZXdDaGlsZHJlbiA6IFtuZXdDaGlsZHJlbl0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bm9kZVR5cGUgPT0gJ2ZvcmVpZ25PYmplY3QnID8gWEhUTUxfTkFNRVNQQUNFIDogbmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuXG5cdFx0XHRcdFx0PyBleGNlc3NEb21DaGlsZHJlblswXVxuXHRcdFx0XHRcdDogb2xkVk5vZGUuX2NoaWxkcmVuICYmIGdldERvbVNpYmxpbmcob2xkVk5vZGUsIDApLFxuXHRcdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdFx0cmVmUXVldWVcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgcGFydCBvZiBhbnkgdm5vZGUuXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRmb3IgKGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBcyBhYm92ZSwgZG9uJ3QgZGlmZiBwcm9wcyBkdXJpbmcgaHlkcmF0aW9uXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyB8fCBub2RlVHlwZSA9PSAndGV4dGFyZWEnKSB7XG5cdFx0XHRpID0gJ3ZhbHVlJztcblx0XHRcdGlmIChub2RlVHlwZSA9PSAncHJvZ3Jlc3MnICYmIGlucHV0VmFsdWUgPT0gTlVMTCkge1xuXHRcdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aW5wdXRWYWx1ZSAhPSBVTkRFRklORUQgJiZcblx0XHRcdFx0Ly8gIzI3NTYgRm9yIHRoZSA8cHJvZ3Jlc3M+LWVsZW1lbnQgdGhlIGluaXRpYWwgdmFsdWUgaXMgMCxcblx0XHRcdFx0Ly8gZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZyBwcmVzZW50LiBXaGVuIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gaXMgbWlzc2luZyB0aGUgcHJvZ3Jlc3MgYmFyIGlzIHRyZWF0ZWQgYXMgaW5kZXRlcm1pbmF0ZS5cblx0XHRcdFx0Ly8gVG8gZml4IHRoYXQgd2UnbGwgYWx3YXlzIHVwZGF0ZSBpdCB3aGVuIGl0IGlzIDAgZm9yIHByb2dyZXNzIGVsZW1lbnRzXG5cdFx0XHRcdChpbnB1dFZhbHVlICE9PSBkb21baV0gfHxcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiAhaW5wdXRWYWx1ZSkgfHxcblx0XHRcdFx0XHQvLyBUaGlzIGlzIG9ubHkgZm9yIElFIDExIHRvIGZpeCA8c2VsZWN0PiB2YWx1ZSBub3QgYmVpbmcgdXBkYXRlZC5cblx0XHRcdFx0XHQvLyBUbyBhdm9pZCBhIHN0YWxlIHNlbGVjdCB2YWx1ZSB3ZSBuZWVkIHRvIHNldCB0aGUgb3B0aW9uLnZhbHVlXG5cdFx0XHRcdFx0Ly8gYWdhaW4sIHdoaWNoIHRyaWdnZXJzIElFMTEgdG8gcmUtZXZhbHVhdGUgdGhlIHNlbGVjdCB2YWx1ZVxuXHRcdFx0XHRcdChub2RlVHlwZSA9PSAnb3B0aW9uJyAmJiBpbnB1dFZhbHVlICE9IG9sZFByb3BzW2ldKSlcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGlucHV0VmFsdWUsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpID0gJ2NoZWNrZWQnO1xuXHRcdFx0aWYgKGNoZWNrZWQgIT0gVU5ERUZJTkVEICYmIGNoZWNrZWQgIT0gZG9tW2ldKSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgY2hlY2tlZCwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuLyoqXG4gKiBJbnZva2Ugb3IgdXBkYXRlIGEgcmVmLCBkZXBlbmRpbmcgb24gd2hldGhlciBpdCBpcyBhIGZ1bmN0aW9uIG9yIG9iamVjdCByZWYuXG4gKiBAcGFyYW0ge1JlZjxhbnk+ICYgeyBfdW5tb3VudD86IHVua25vd24gfX0gcmVmXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlZihyZWYsIHZhbHVlLCB2bm9kZSkge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGxldCBoYXNSZWZVbm1vdW50ID0gdHlwZW9mIHJlZi5fdW5tb3VudCA9PSAnZnVuY3Rpb24nO1xuXHRcdFx0aWYgKGhhc1JlZlVubW91bnQpIHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGxpa2UgbW92aW5nIG5hcnJvd2luZyBjaGVja3MgaW50byB2YXJpYWJsZXNcblx0XHRcdFx0cmVmLl91bm1vdW50KCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaGFzUmVmVW5tb3VudCB8fCB2YWx1ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdC8vIFN0b3JlIHRoZSBjbGVhbnVwIGZ1bmN0aW9uIG9uIHRoZSBmdW5jdGlvblxuXHRcdFx0XHQvLyBpbnN0YW5jZSBvYmplY3QgaXRzZWxmIHRvIGF2b2lkIHNoYXBlXG5cdFx0XHRcdC8vIHRyYW5zaXRpb25pbmcgdm5vZGVcblx0XHRcdFx0cmVmLl91bm1vdW50ID0gcmVmKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgdm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVW5tb3VudCBhIHZpcnR1YWwgbm9kZSBmcm9tIHRoZSB0cmVlIGFuZCBhcHBseSBET00gY2hhbmdlc1xuICogQHBhcmFtIHtWTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byB1bm1vdW50XG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZSBUaGUgcGFyZW50IG9mIHRoZSBWTm9kZSB0aGF0IGluaXRpYXRlZCB0aGUgdW5tb3VudFxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcFJlbW92ZV0gRmxhZyB0aGF0IGluZGljYXRlcyB0aGF0IGEgcGFyZW50IG5vZGUgb2YgdGhlXG4gKiBjdXJyZW50IGVsZW1lbnQgaXMgYWxyZWFkeSBkZXRhY2hlZCBmcm9tIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KHZub2RlLCBwYXJlbnRWTm9kZSwgc2tpcFJlbW92ZSkge1xuXHRsZXQgcjtcblx0aWYgKG9wdGlvbnMudW5tb3VudCkgb3B0aW9ucy51bm1vdW50KHZub2RlKTtcblxuXHRpZiAoKHIgPSB2bm9kZS5yZWYpKSB7XG5cdFx0aWYgKCFyLmN1cnJlbnQgfHwgci5jdXJyZW50ID09IHZub2RlLl9kb20pIHtcblx0XHRcdGFwcGx5UmVmKHIsIE5VTEwsIHBhcmVudFZOb2RlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY29tcG9uZW50KSAhPSBOVUxMKSB7XG5cdFx0aWYgKHIuY29tcG9uZW50V2lsbFVubW91bnQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ci5iYXNlID0gci5fcGFyZW50RG9tID0gci5fZ2xvYmFsQ29udGV4dCA9IE5VTEw7XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY2hpbGRyZW4pKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocltpXSkge1xuXHRcdFx0XHR1bm1vdW50KFxuXHRcdFx0XHRcdHJbaV0sXG5cdFx0XHRcdFx0cGFyZW50Vk5vZGUsXG5cdFx0XHRcdFx0c2tpcFJlbW92ZSB8fCB0eXBlb2Ygdm5vZGUudHlwZSAhPSAnZnVuY3Rpb24nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFza2lwUmVtb3ZlKSB7XG5cdFx0cmVtb3ZlTm9kZSh2bm9kZS5fZG9tKTtcblx0fVxuXG5cdHZub2RlLl9jb21wb25lbnQgPSB2bm9kZS5fcGFyZW50ID0gdm5vZGUuX2RvbSA9IFVOREVGSU5FRDtcbn1cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuIiwgImltcG9ydCB7IEVNUFRZX09CSiwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbW1pdFJvb3QsIGRpZmYgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUmVuZGVyIGEgUHJlYWN0IHZpcnR1YWwgbm9kZSBpbnRvIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gcmVuZGVyIGludG9cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudCB8IG9iamVjdH0gW3JlcGxhY2VOb2RlXSBPcHRpb25hbDogQXR0ZW1wdCB0byByZS11c2UgYW5cbiAqIGV4aXN0aW5nIERPTSB0cmVlIHJvb3RlZCBhdCBgcmVwbGFjZU5vZGVgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudERvbSwgcmVwbGFjZU5vZGUpIHtcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMzc5NFxuXHRpZiAocGFyZW50RG9tID09IGRvY3VtZW50KSB7XG5cdFx0cGFyZW50RG9tID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX3Jvb3QpIG9wdGlvbnMuX3Jvb3Qodm5vZGUsIHBhcmVudERvbSk7XG5cblx0Ly8gV2UgYWJ1c2UgdGhlIGByZXBsYWNlTm9kZWAgcGFyYW1ldGVyIGluIGBoeWRyYXRlKClgIHRvIHNpZ25hbCBpZiB3ZSBhcmUgaW5cblx0Ly8gaHlkcmF0aW9uIG1vZGUgb3Igbm90IGJ5IHBhc3NpbmcgdGhlIGBoeWRyYXRlYCBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgRE9NXG5cdC8vIGVsZW1lbnQuLlxuXHRsZXQgaXNIeWRyYXRpbmcgPSB0eXBlb2YgcmVwbGFjZU5vZGUgPT0gJ2Z1bmN0aW9uJztcblxuXHQvLyBUbyBiZSBhYmxlIHRvIHN1cHBvcnQgY2FsbGluZyBgcmVuZGVyKClgIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lXG5cdC8vIERPTSBub2RlLCB3ZSBuZWVkIHRvIG9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgdHJlZS4gV2UgZG9cblx0Ly8gdGhpcyBieSBhc3NpZ25pbmcgYSBuZXcgYF9jaGlsZHJlbmAgcHJvcGVydHkgdG8gRE9NIG5vZGVzIHdoaWNoIHBvaW50c1xuXHQvLyB0byB0aGUgbGFzdCByZW5kZXJlZCB0cmVlLiBCeSBkZWZhdWx0IHRoaXMgcHJvcGVydHkgaXMgbm90IHByZXNlbnQsIHdoaWNoXG5cdC8vIG1lYW5zIHRoYXQgd2UgYXJlIG1vdW50aW5nIGEgbmV3IHRyZWUgZm9yIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgb2xkVk5vZGUgPSBpc0h5ZHJhdGluZ1xuXHRcdD8gTlVMTFxuXHRcdDogKHJlcGxhY2VOb2RlICYmIHJlcGxhY2VOb2RlLl9jaGlsZHJlbikgfHwgcGFyZW50RG9tLl9jaGlsZHJlbjtcblxuXHR2bm9kZSA9ICgoIWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlKSB8fCBwYXJlbnREb20pLl9jaGlsZHJlbiA9XG5cdFx0Y3JlYXRlRWxlbWVudChGcmFnbWVudCwgTlVMTCwgW3Zub2RlXSk7XG5cblx0Ly8gTGlzdCBvZiBlZmZlY3RzIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgZGlmZmluZy5cblx0bGV0IGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0cmVmUXVldWUgPSBbXTtcblx0ZGlmZihcblx0XHRwYXJlbnREb20sXG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBuZXcgdm5vZGUgdHJlZSBhbmQgc3RvcmUgaXQgb24gdGhlIERPTSBlbGVtZW50IG9uXG5cdFx0Ly8gb3VyIGN1c3RvbSBgX2NoaWxkcmVuYCBwcm9wZXJ0eS5cblx0XHR2bm9kZSxcblx0XHRvbGRWTm9kZSB8fCBFTVBUWV9PQkosXG5cdFx0RU1QVFlfT0JKLFxuXHRcdHBhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IFtyZXBsYWNlTm9kZV1cblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGRcblx0XHRcdFx0XHQ/IHNsaWNlLmNhbGwocGFyZW50RG9tLmNoaWxkTm9kZXMpXG5cdFx0XHRcdFx0OiBOVUxMLFxuXHRcdGNvbW1pdFF1ZXVlLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyByZXBsYWNlTm9kZVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0XHQ/IG9sZFZOb2RlLl9kb21cblx0XHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZCxcblx0XHRpc0h5ZHJhdGluZyxcblx0XHRyZWZRdWV1ZVxuXHQpO1xuXG5cdC8vIEZsdXNoIGFsbCBxdWV1ZWQgZWZmZWN0c1xuXHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSwgcmVmUXVldWUpO1xuXG5cdC8vIFRoZSBsaXZlIGNoaWxkcmVuIGFyZSB0cmFja2VkIG9uIF9jaGlsZHJlbiBhZnRlciBkaWZmaW5nLlxuXHR2bm9kZS5wcm9wcy5jaGlsZHJlbiA9IE5VTEw7XG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50IHdpdGggZGF0YSBmcm9tIGEgUHJlYWN0IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0byB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudERvbSkge1xuXHRyZW5kZXIodm5vZGUsIHBhcmVudERvbSwgaHlkcmF0ZSk7XG59XG4iLCAiaW1wb3J0IHsgYXNzaWduLCBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgTlVMTCwgVU5ERUZJTkVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHNcbiAqIGNoaWxkcmVuLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgRE9NIGVsZW1lbnQgdG8gY2xvbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBBdHRyaWJ1dGVzL3Byb3BzIHRvIGFkZCB3aGVuIGNsb25pbmdcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW4+fSByZXN0IEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB3aWxsIGJlIHVzZWRcbiAqIGFzIHJlcGxhY2VtZW50IGNoaWxkcmVuLlxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IGFzc2lnbih7fSwgdm5vZGUucHJvcHMpLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRsZXQgZGVmYXVsdFByb3BzO1xuXG5cdGlmICh2bm9kZS50eXBlICYmIHZub2RlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG5cdFx0ZGVmYXVsdFByb3BzID0gdm5vZGUudHlwZS5kZWZhdWx0UHJvcHM7XG5cdH1cblxuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAocHJvcHNbaV0gPT09IFVOREVGSU5FRCAmJiBkZWZhdWx0UHJvcHMgIT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBkZWZhdWx0UHJvcHNbaV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdH1cblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKFxuXHRcdHZub2RlLnR5cGUsXG5cdFx0bm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSB8fCB2bm9kZS5rZXksXG5cdFx0cmVmIHx8IHZub2RlLnJlZixcblx0XHROVUxMXG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgTlVMTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogRmluZCB0aGUgY2xvc2VzdCBlcnJvciBib3VuZGFyeSB0byBhIHRocm93biBlcnJvciBhbmQgY2FsbCBpdFxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIFRoZSB0aHJvd24gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdGhhdCB0aHJldyB0aGUgZXJyb3IgdGhhdCB3YXMgY2F1Z2h0IChleGNlcHRcbiAqIGZvciB1bm1vdW50aW5nIHdoZW4gdGhpcyBwYXJhbWV0ZXIgaXMgdGhlIGhpZ2hlc3QgcGFyZW50IHRoYXQgd2FzIGJlaW5nXG4gKiB1bm1vdW50ZWQpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gW29sZFZOb2RlXVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuRXJyb3JJbmZvfSBbZXJyb3JJbmZvXVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoRXJyb3IoZXJyb3IsIHZub2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCxcblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRUeXBlfSAqL1xuXHRcdGN0b3IsXG5cdFx0LyoqIEB0eXBlIHtib29sZWFufSAqL1xuXHRcdGhhbmRsZWQ7XG5cblx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmICFjb21wb25lbnQuX3Byb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGN0b3IgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG5cblx0XHRcdFx0aWYgKGN0b3IgJiYgY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRTdGF0ZShjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikpO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8gfHwge30pO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBhbiBlcnJvciBib3VuZGFyeS4gTWFyayBpdCBhcyBoYXZpbmcgYmFpbGVkIG91dCwgYW5kIHdoZXRoZXIgaXQgd2FzIG1pZC1oeWRyYXRpb24uXG5cdFx0XHRcdGlmIChoYW5kbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChjb21wb25lbnQuX3BlbmRpbmdFcnJvciA9IGNvbXBvbmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRocm93IGVycm9yO1xufVxuIiwgbnVsbCwgImltcG9ydCB7IG9wdGlvbnMgYXMgX29wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SW5kZXg7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IHByZXZpb3VzQ29tcG9uZW50O1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SG9vayA9IDA7XG5cbi8qKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn0gKi9cbmxldCBhZnRlclBhaW50RWZmZWN0cyA9IFtdO1xuXG4vLyBDYXN0IHRvIHVzZSBpbnRlcm5hbCBPcHRpb25zIHR5cGVcbmNvbnN0IG9wdGlvbnMgPSAvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9ICovIChfb3B0aW9ucyk7XG5cbmxldCBvbGRCZWZvcmVEaWZmID0gb3B0aW9ucy5fZGlmZjtcbmxldCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5sZXQgb2xkQWZ0ZXJEaWZmID0gb3B0aW9ucy5kaWZmZWQ7XG5sZXQgb2xkQ29tbWl0ID0gb3B0aW9ucy5fY29tbWl0O1xubGV0IG9sZEJlZm9yZVVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5sZXQgb2xkUm9vdCA9IG9wdGlvbnMuX3Jvb3Q7XG5cbi8vIFdlIHRha2UgdGhlIG1pbmltdW0gdGltZW91dCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIGVuc3VyZSB0aGF0XG4vLyB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB0aGUgbmV4dCBmcmFtZS4gMzVtcyBpcyBiYXNlZCBvbiBhIDMwaHpcbi8vIHJlZnJlc2ggcmF0ZSwgd2hpY2ggaXMgdGhlIG1pbmltdW0gcmF0ZSBmb3IgYSBzbW9vdGggdXNlciBleHBlcmllbmNlLlxuY29uc3QgUkFGX1RJTUVPVVQgPSAzNTtcbmxldCBwcmV2UmFmO1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9kaWZmID0gdm5vZGUgPT4ge1xuXHRjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcblx0aWYgKG9sZEJlZm9yZURpZmYpIG9sZEJlZm9yZURpZmYodm5vZGUpO1xufTtcblxub3B0aW9ucy5fcm9vdCA9ICh2bm9kZSwgcGFyZW50RG9tKSA9PiB7XG5cdGlmICh2bm9kZSAmJiBwYXJlbnREb20uX2NoaWxkcmVuICYmIHBhcmVudERvbS5fY2hpbGRyZW4uX21hc2spIHtcblx0XHR2bm9kZS5fbWFzayA9IHBhcmVudERvbS5fY2hpbGRyZW4uX21hc2s7XG5cdH1cblxuXHRpZiAob2xkUm9vdCkgb2xkUm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX3JlbmRlciA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikgb2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0Y3VycmVudEluZGV4ID0gMDtcblxuXHRjb25zdCBob29rcyA9IGN1cnJlbnRDb21wb25lbnQuX19ob29rcztcblx0aWYgKGhvb2tzKSB7XG5cdFx0aWYgKHByZXZpb3VzQ29tcG9uZW50ID09PSBjdXJyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0aG9va3MuX2xpc3Quc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSBob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudEluZGV4ID0gMDtcblx0XHR9XG5cdH1cblx0cHJldmlvdXNDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5kaWZmZWQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRBZnRlckRpZmYpIG9sZEFmdGVyRGlmZih2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGlmIChjLl9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmxlbmd0aCkgYWZ0ZXJQYWludChhZnRlclBhaW50RWZmZWN0cy5wdXNoKGMpKTtcblx0XHRjLl9faG9va3MuX2xpc3Quc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRpZiAoaG9va0l0ZW0uX3BlbmRpbmdBcmdzKSB7XG5cdFx0XHRcdGhvb2tJdGVtLl9hcmdzID0gaG9va0l0ZW0uX3BlbmRpbmdBcmdzO1xuXHRcdFx0XHRob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0cHJldmlvdXNDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcbn07XG5cbi8vIFRPRE86IEltcHJvdmUgdHlwaW5nIG9mIGNvbW1pdFF1ZXVlIHBhcmFtZXRlclxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlLCBjb21taXRRdWV1ZTogYW55KSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fY29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xuXHRjb21taXRRdWV1ZS5zb21lKGNvbXBvbmVudCA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZpbHRlcihjYiA9PlxuXHRcdFx0XHRjYi5fdmFsdWUgPyBpbnZva2VFZmZlY3QoY2IpIDogdHJ1ZVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzKSBjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0pO1xuXHRcdFx0Y29tbWl0UXVldWUgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAob2xkQ29tbWl0KSBvbGRDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMudW5tb3VudCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVVubW91bnQpIG9sZEJlZm9yZVVubW91bnQodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRsZXQgaGFzRXJyb3JlZDtcblx0XHRjLl9faG9va3MuX2xpc3Quc29tZShzID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGludm9rZUNsZWFudXAocyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGhhc0Vycm9yZWQgPSBlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGMuX19ob29rcyA9IHVuZGVmaW5lZDtcblx0XHRpZiAoaGFzRXJyb3JlZCkgb3B0aW9ucy5fY2F0Y2hFcnJvcihoYXNFcnJvcmVkLCBjLl92bm9kZSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0IGEgaG9vaydzIHN0YXRlIGZyb20gdGhlIGN1cnJlbnRDb21wb25lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBnZXRIb29rU3RhdGUoaW5kZXgsIHR5cGUpIHtcblx0aWYgKG9wdGlvbnMuX2hvb2spIHtcblx0XHRvcHRpb25zLl9ob29rKGN1cnJlbnRDb21wb25lbnQsIGluZGV4LCBjdXJyZW50SG9vayB8fCB0eXBlKTtcblx0fVxuXHRjdXJyZW50SG9vayA9IDA7XG5cblx0Ly8gTGFyZ2VseSBpbnNwaXJlZCBieTpcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iL2Y2YmU3MzQ2OGU2ZWM0NmIwZmY1YWEzY2M0YzliYWY3MmEyOTAyNWEvc3JjL2hvb2tzL2NvcmVfaG9va3MubWpzXG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi82NTBiZWFhNThjNDNjMzNhNzQ4MjBhM2M5OGIzYzcwNzljZjJlMzMzL3NyYy9yZW5kZXJlci5tanNcblx0Ly8gT3RoZXIgaW1wbGVtZW50YXRpb25zIHRvIGxvb2sgYXQ6XG5cdC8vICogaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL21ub3gwNXFwOFxuXHRjb25zdCBob29rcyA9XG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzIHx8XG5cdFx0KGN1cnJlbnRDb21wb25lbnQuX19ob29rcyA9IHtcblx0XHRcdF9saXN0OiBbXSxcblx0XHRcdF9wZW5kaW5nRWZmZWN0czogW11cblx0XHR9KTtcblxuXHRpZiAoaW5kZXggPj0gaG9va3MuX2xpc3QubGVuZ3RoKSB7XG5cdFx0aG9va3MuX2xpc3QucHVzaCh7fSk7XG5cdH1cblxuXHRyZXR1cm4gaG9va3MuX2xpc3RbaW5kZXhdO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5EaXNwYXRjaDxpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8Uz4+fSBbaW5pdGlhbFN0YXRlXVxuICogQHJldHVybnMge1tTLCAoc3RhdGU6IFMpID0+IHZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG5cdGN1cnJlbnRIb29rID0gMTtcblx0cmV0dXJuIHVzZVJlZHVjZXIoaW52b2tlT3JSZXR1cm4sIGluaXRpYWxTdGF0ZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBTXG4gKiBAdGVtcGxhdGUge3Vua25vd259IEFcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuUmVkdWNlcjxTLCBBPn0gcmVkdWNlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5EaXNwYXRjaDxpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8Uz4+fSBpbml0aWFsU3RhdGVcbiAqIEBwYXJhbSB7KGluaXRpYWxTdGF0ZTogYW55KSA9PiB2b2lkfSBbaW5pdF1cbiAqIEByZXR1cm5zIHtbIFMsIChzdGF0ZTogUykgPT4gdm9pZCBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXQpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5SZWR1Y2VySG9va1N0YXRlfSAqL1xuXHRjb25zdCBob29rU3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDIpO1xuXHRob29rU3RhdGUuX3JlZHVjZXIgPSByZWR1Y2VyO1xuXHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50KSB7XG5cdFx0aG9va1N0YXRlLl92YWx1ZSA9IFtcblx0XHRcdCFpbml0ID8gaW52b2tlT3JSZXR1cm4odW5kZWZpbmVkLCBpbml0aWFsU3RhdGUpIDogaW5pdChpbml0aWFsU3RhdGUpLFxuXG5cdFx0XHRhY3Rpb24gPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rU3RhdGUuX25leHRWYWx1ZVxuXHRcdFx0XHRcdD8gaG9va1N0YXRlLl9uZXh0VmFsdWVbMF1cblx0XHRcdFx0XHQ6IGhvb2tTdGF0ZS5fdmFsdWVbMF07XG5cdFx0XHRcdGNvbnN0IG5leHRWYWx1ZSA9IGhvb2tTdGF0ZS5fcmVkdWNlcihjdXJyZW50VmFsdWUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9uZXh0VmFsdWUgPSBbbmV4dFZhbHVlLCBob29rU3RhdGUuX3ZhbHVlWzFdXTtcblx0XHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5zZXRTdGF0ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aG9va1N0YXRlLl9jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuXG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MpIHtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcyA9IHRydWU7XG5cdFx0XHRsZXQgcHJldlNjdSA9IGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlO1xuXHRcdFx0Y29uc3QgcHJldkNXVSA9IGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuXHRcdFx0Ly8gSWYgd2UncmUgZGVhbGluZyB3aXRoIGEgZm9yY2VkIHVwZGF0ZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCB3aWxsXG5cdFx0XHQvLyBub3QgYmUgY2FsbGVkLiBCdXQgd2UgdXNlIHRoYXQgdG8gdXBkYXRlIHRoZSBob29rIHZhbHVlcywgc28gd2Vcblx0XHRcdC8vIG5lZWQgdG8gY2FsbCBpdC5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGZ1bmN0aW9uIChwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9mb3JjZSkge1xuXHRcdFx0XHRcdGxldCB0bXAgPSBwcmV2U2N1O1xuXHRcdFx0XHRcdC8vIENsZWFyIHRvIGF2b2lkIG90aGVyIHNDVSBob29rcyBmcm9tIGJlaW5nIGNhbGxlZFxuXHRcdFx0XHRcdHByZXZTY3UgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0dXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpO1xuXHRcdFx0XHRcdHByZXZTY3UgPSB0bXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJldkNXVSkgcHJldkNXVS5jYWxsKHRoaXMsIHAsIHMsIGMpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gVGhpcyBTQ1UgaGFzIHRoZSBwdXJwb3NlIG9mIGJhaWxpbmcgb3V0IGFmdGVyIHJlcGVhdGVkIHVwZGF0ZXNcblx0XHRcdC8vIHRvIHN0YXRlZnVsIGhvb2tzLlxuXHRcdFx0Ly8gd2Ugc3RvcmUgdGhlIG5leHQgdmFsdWUgaW4gX25leHRWYWx1ZVswXSBhbmQga2VlcCBkb2luZyB0aGF0IGZvciBhbGxcblx0XHRcdC8vIHN0YXRlIHNldHRlcnMsIGlmIHdlIGhhdmUgbmV4dCBzdGF0ZXMgYW5kXG5cdFx0XHQvLyBhbGwgbmV4dCBzdGF0ZXMgd2l0aGluIGEgY29tcG9uZW50IGVuZCB1cCBiZWluZyBlcXVhbCB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuXHRcdFx0Ly8gd2UgYXJlIHNhZmUgdG8gYmFpbCBvdXQgZm9yIHRoaXMgc3BlY2lmaWMgY29tcG9uZW50LlxuXHRcdFx0LyoqXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudFtcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiXX1cblx0XHRcdCAqL1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSAtIFdlIGRvbid0IHVzZSBUUyB0byBkb3dudHJhbnNwaWxlXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVIb29rU3RhdGUocCwgcywgYykge1xuXHRcdFx0XHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MpIHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdC8vIFdlIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBjb21wb25lbnRzIHdpdGggYSBuZXh0VmFsdWUgc2V0IHRoYXRcblx0XHRcdFx0Ly8gaGF2ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgZXF1YWwgdG8gb25lIGFub3RoZXIgdGhpcyBwdXNoZXNcblx0XHRcdFx0Ly8gdXMgdG8gdXBkYXRlIGZ1cnRoZXIgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRsZXQgdXBkYXRlZEhvb2sgPSBmYWxzZTtcblx0XHRcdFx0bGV0IHNob3VsZFVwZGF0ZSA9IGhvb2tTdGF0ZS5fY29tcG9uZW50LnByb3BzICE9PSBwO1xuXHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVkSG9vayA9IHRydWU7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rSXRlbS5fdmFsdWVbMF07XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IGhvb2tJdGVtLl92YWx1ZVswXSkgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChwcmV2U2N1KSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpO1xuXHRcdFx0XHRcdHJldHVybiB1cGRhdGVkSG9vayA/IHJlc3VsdCB8fCBzaG91bGRVcGRhdGUgOiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gIXVwZGF0ZWRIb29rIHx8IHNob3VsZFVwZGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSB1cGRhdGVIb29rU3RhdGU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGhvb2tTdGF0ZS5fbmV4dFZhbHVlIHx8IGhvb2tTdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAzKTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNCk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG4vKiogQHR5cGUgeyhpbml0aWFsVmFsdWU6IHVua25vd24pID0+IHVua25vd259ICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuXHRjdXJyZW50SG9vayA9IDU7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+ICh7IGN1cnJlbnQ6IGluaXRpYWxWYWx1ZSB9KSwgW10pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7KCkgPT4gb2JqZWN0fSBjcmVhdGVIYW5kbGVcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGVIYW5kbGUsIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA2O1xuXHR1c2VMYXlvdXRFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSByZWYoY3JlYXRlSGFuZGxlKCkpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdHJlZihudWxsKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT0gJ2Z1bmN0aW9uJykgcmVzdWx0KCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYgKHJlZikge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IGNyZWF0ZUhhbmRsZSgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcmdzID09IG51bGwgPyBhcmdzIDogYXJncy5jb25jYXQocmVmKVxuXHQpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmYWN0b3J5XG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnksIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5NZW1vSG9va1N0YXRlPFQ+fSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNyk7XG5cdGlmIChhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBmYWN0b3J5KCk7XG5cdFx0c3RhdGUuX2FyZ3MgPSBhcmdzO1xuXHRcdHN0YXRlLl9mYWN0b3J5ID0gZmFjdG9yeTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA4O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiBjYWxsYmFjaywgYXJncyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RDb250ZXh0fSBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnRleHQpIHtcblx0Y29uc3QgcHJvdmlkZXIgPSBjdXJyZW50Q29tcG9uZW50LmNvbnRleHRbY29udGV4dC5faWRdO1xuXHQvLyBXZSBjb3VsZCBza2lwIHRoaXMgY2FsbCBoZXJlLCBidXQgdGhhbiB3ZSdkIG5vdCBjYWxsXG5cdC8vIGBvcHRpb25zLl9ob29rYC4gV2UgbmVlZCB0byBkbyB0aGF0IGluIG9yZGVyIHRvIG1ha2Vcblx0Ly8gdGhlIGRldnRvb2xzIGF3YXJlIG9mIHRoaXMgaG9vay5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db250ZXh0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgOSk7XG5cdC8vIFRoZSBkZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHRvXG5cdC8vIGJlIGFibGUgdG8gcHVsbCBvZiB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIG5vIHByb3ZpZGVyXG5cdC8vIGlzIHByZXNlbnQgaW4gdGhlIHRyZWUuXG5cdHN0YXRlLl9jb250ZXh0ID0gY29udGV4dDtcblx0aWYgKCFwcm92aWRlcikgcmV0dXJuIGNvbnRleHQuX2RlZmF1bHRWYWx1ZTtcblx0Ly8gVGhpcyBpcyBwcm9iYWJseSBub3Qgc2FmZSB0byBjb252ZXJ0IHRvIFwiIVwiXG5cdGlmIChzdGF0ZS5fdmFsdWUgPT0gbnVsbCkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IHRydWU7XG5cdFx0cHJvdmlkZXIuc3ViKGN1cnJlbnRDb21wb25lbnQpO1xuXHR9XG5cdHJldHVybiBwcm92aWRlci5wcm9wcy52YWx1ZTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgY3VzdG9tIGxhYmVsIGZvciBhIGN1c3RvbSBob29rIGZvciB0aGUgZGV2dG9vbHMgcGFuZWxcbiAqIEB0eXBlIHs8VD4odmFsdWU6IFQsIGNiPzogKHZhbHVlOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXIpIHtcblx0aWYgKG9wdGlvbnMudXNlRGVidWdWYWx1ZSkge1xuXHRcdG9wdGlvbnMudXNlRGVidWdWYWx1ZShcblx0XHRcdGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWx1ZSkgOiAvKiogQHR5cGUge2FueX0qLyAodmFsdWUpXG5cdFx0KTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7KGVycm9yOiB1bmtub3duLCBlcnJvckluZm86IGltcG9ydCgncHJlYWN0JykuRXJyb3JJbmZvKSA9PiB2b2lkfSBjYlxuICogQHJldHVybnMge1t1bmtub3duLCAoKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVycm9yQm91bmRhcnkoY2IpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FcnJvckJvdW5kYXJ5SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTApO1xuXHRjb25zdCBlcnJTdGF0ZSA9IHVzZVN0YXRlKCk7XG5cdHN0YXRlLl92YWx1ZSA9IGNiO1xuXHRpZiAoIWN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2gpIHtcblx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoID0gKGVyciwgZXJyb3JJbmZvKSA9PiB7XG5cdFx0XHRpZiAoc3RhdGUuX3ZhbHVlKSBzdGF0ZS5fdmFsdWUoZXJyLCBlcnJvckluZm8pO1xuXHRcdFx0ZXJyU3RhdGVbMV0oZXJyKTtcblx0XHR9O1xuXHR9XG5cdHJldHVybiBbXG5cdFx0ZXJyU3RhdGVbMF0sXG5cdFx0KCkgPT4ge1xuXHRcdFx0ZXJyU3RhdGVbMV0odW5kZWZpbmVkKTtcblx0XHR9XG5cdF07XG59XG5cbi8qKiBAdHlwZSB7KCkgPT4gc3RyaW5nfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLklkSG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTEpO1xuXHRpZiAoIXN0YXRlLl92YWx1ZSkge1xuXHRcdC8vIEdyYWIgZWl0aGVyIHRoZSByb290IG5vZGUgb3IgdGhlIG5lYXJlc3QgYXN5bmMgYm91bmRhcnkgbm9kZS5cblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRcdGxldCByb290ID0gY3VycmVudENvbXBvbmVudC5fdm5vZGU7XG5cdFx0d2hpbGUgKHJvb3QgIT09IG51bGwgJiYgIXJvb3QuX21hc2sgJiYgcm9vdC5fcGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRyb290ID0gcm9vdC5fcGFyZW50O1xuXHRcdH1cblxuXHRcdGxldCBtYXNrID0gcm9vdC5fbWFzayB8fCAocm9vdC5fbWFzayA9IFswLCAwXSk7XG5cdFx0c3RhdGUuX3ZhbHVlID0gJ1AnICsgbWFza1swXSArICctJyArIG1hc2tbMV0rKztcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQWZ0ZXIgcGFpbnQgZWZmZWN0cyBjb25zdW1lci5cbiAqL1xuZnVuY3Rpb24gZmx1c2hBZnRlclBhaW50RWZmZWN0cygpIHtcblx0bGV0IGNvbXBvbmVudDtcblx0d2hpbGUgKChjb21wb25lbnQgPSBhZnRlclBhaW50RWZmZWN0cy5zaGlmdCgpKSkge1xuXHRcdGNvbnN0IGhvb2tzID0gY29tcG9uZW50Ll9faG9va3M7XG5cdFx0aWYgKCFjb21wb25lbnQuX3BhcmVudERvbSB8fCAhaG9va3MpIGNvbnRpbnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmxldCBIQVNfUkFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PSAnZnVuY3Rpb24nO1xuXG4vKipcbiAqIFNjaGVkdWxlIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgYnJvd3NlciBoYXMgYSBjaGFuY2UgdG8gcGFpbnQgYSBuZXcgZnJhbWUuXG4gKiBEbyB0aGlzIGJ5IGNvbWJpbmluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKHJBRikgKyBzZXRUaW1lb3V0IHRvIGludm9rZSBhIGNhbGxiYWNrIGFmdGVyXG4gKiB0aGUgbmV4dCBicm93c2VyIGZyYW1lLlxuICpcbiAqIEFsc28sIHNjaGVkdWxlIGEgdGltZW91dCBpbiBwYXJhbGxlbCB0byB0aGUgdGhlIHJBRiB0byBlbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGludm9rZWRcbiAqIGV2ZW4gaWYgUkFGIGRvZXNuJ3QgZmlyZSAoZm9yIGV4YW1wbGUgaWYgdGhlIGJyb3dzZXIgdGFiIGlzIG5vdCB2aXNpYmxlKVxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJOZXh0RnJhbWUoY2FsbGJhY2spIHtcblx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0aWYgKEhBU19SQUYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRvbmUsIFJBRl9USU1FT1VUKTtcblxuXHRsZXQgcmFmO1xuXHRpZiAoSEFTX1JBRikge1xuXHRcdHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkb25lKTtcblx0fVxufVxuXG4vLyBOb3RlOiBpZiBzb21lb25lIHVzZWQgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbi8vIHRoZW4gZWZmZWN0cyB3aWxsIEFMV0FZUyBydW4gb24gdGhlIE5FWFQgZnJhbWUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBvbmUsIGluY3VycmluZyBhIH4xNm1zIGRlbGF5LlxuLy8gUGVyaGFwcyB0aGlzIGlzIG5vdCBzdWNoIGEgYmlnIGRlYWwuXG4vKipcbiAqIFNjaGVkdWxlIGFmdGVyUGFpbnRFZmZlY3RzIGZsdXNoIGFmdGVyIHRoZSBicm93c2VyIHBhaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5ld1F1ZXVlTGVuZ3RoXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gYWZ0ZXJQYWludChuZXdRdWV1ZUxlbmd0aCkge1xuXHRpZiAobmV3UXVldWVMZW5ndGggPT09IDEgfHwgcHJldlJhZiAhPT0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRwcmV2UmFmID0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0KHByZXZSYWYgfHwgYWZ0ZXJOZXh0RnJhbWUpKGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Ib29rU3RhdGV9IGhvb2tcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbnZva2VDbGVhbnVwKGhvb2spIHtcblx0Ly8gQSBob29rIGNsZWFudXAgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0bGV0IGNsZWFudXAgPSBob29rLl9jbGVhbnVwO1xuXHRpZiAodHlwZW9mIGNsZWFudXAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhvb2suX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogSW52b2tlIGEgSG9vaydzIGVmZmVjdFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbnZva2VFZmZlY3QoaG9vaykge1xuXHQvLyBBIGhvb2sgY2FsbCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRob29rLl9jbGVhbnVwID0gaG9vay5fdmFsdWUoKTtcblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3duW119IG9sZEFyZ3NcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBuZXdBcmdzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuXHRyZXR1cm4gKFxuXHRcdCFvbGRBcmdzIHx8XG5cdFx0b2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3MubGVuZ3RoIHx8XG5cdFx0bmV3QXJncy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuXHQpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBcmdcbiAqIEBwYXJhbSB7QXJnfSBhcmdcbiAqIEBwYXJhbSB7KGFyZzogQXJnKSA9PiBhbnl9IGZcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGludm9rZU9yUmV0dXJuKGFyZywgZikge1xuXHRyZXR1cm4gdHlwZW9mIGYgPT0gJ2Z1bmN0aW9uJyA/IGYoYXJnKSA6IGY7XG59XG4iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLy8gQ29yZSBkb2N1bWVudCB0eXBlcyBzaGFyZWQgYnkgY2xpZW50IGFuZCBzZXJ2ZXIsIHBsdXMgdGhlIEpTT04gY29kZWMgZm9yXG4vLyBsYXllciB0cmFuc2Zvcm0gZGF0YSAobnVtYmVycyBtdXN0IGJlIHNlcmlhbGl6ZWQgYmVjYXVzZSB0YWJsZSBjb2x1bW5zIGFyZVxuLy8gc3RyaW5ncyBvbmx5KS5cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9XSURUSCA9IDEyODA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9KRUNUX0hFSUdIVCA9IDgwMDtcbmV4cG9ydCBjb25zdCBNQVhfSU1BR0VfRElNID0gMjU2MDtcbmV4cG9ydCBjb25zdCBNSU5fTEFZRVJfU0laRSA9IDg7XG5leHBvcnQgY29uc3QgTUFYX1BST0pFQ1RfRElNID0gODAwMDtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLCBcIm11bHRpcGx5XCIsIFwic2NyZWVuXCIsIFwib3ZlcmxheVwiLCBcImRhcmtlblwiLCBcImxpZ2h0ZW5cIixcbiAgXCJjb2xvci1kb2RnZVwiLCBcImNvbG9yLWJ1cm5cIiwgXCJoYXJkLWxpZ2h0XCIsIFwic29mdC1saWdodFwiLCBcImRpZmZlcmVuY2VcIiwgXCJleGNsdXNpb25cIixcbiAgXCJodWVcIiwgXCJzYXR1cmF0aW9uXCIsIFwiY29sb3JcIiwgXCJsdW1pbm9zaXR5XCJcbl0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBCbGVuZE1vZGUgPSAodHlwZW9mIEJMRU5EX01PREVTKVtudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBMYXllclRyYW5zZm9ybSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHc6IG51bWJlcjtcbiAgaDogbnVtYmVyO1xuICAvKiogRGVncmVlcywgY2xvY2t3aXNlLCBhYm91dCB0aGUgYm94IGNlbnRlci4gKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgLyoqIDAuLjEgKi9cbiAgb3BhY2l0eTogbnVtYmVyO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBmbGlwWDogYm9vbGVhbjtcbiAgYmxlbmRNb2RlOiBCbGVuZE1vZGU7XG59O1xuXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG5cbmV4cG9ydCB0eXBlIFRleHRMYXllckRhdGEgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250V2VpZ2h0OiBudW1iZXI7XG4gIGFsaWduOiBUZXh0QWxpZ247XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ6IG51bWJlcjtcbiAgLyoqIEludHJpbnNpYyByYXN0ZXIgZGltZW5zaW9ucyB1c2VkIHRvIHByZXNlcnZlIGxheWVyIHNjYWxlIGFjcm9zcyB0ZXh0IHJlcmVuZGVycy4gKi9cbiAgcmFzdGVyV2lkdGg/OiBudW1iZXI7XG4gIHJhc3RlckhlaWdodD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyRGF0YSA9IExheWVyVHJhbnNmb3JtICYgeyB0ZXh0PzogVGV4dExheWVyRGF0YSB9O1xuXG5leHBvcnQgdHlwZSBMYXllciA9IExheWVyRGF0YSAmIHtcbiAgaWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG4vKiogVGhlIGluLW1lbW9yeSBlZGl0aW5nIGRvY3VtZW50LiBsYXllcnNbMF0gaXMgdGhlIGJvdHRvbSBsYXllci4gKi9cbmV4cG9ydCB0eXBlIFByb2plY3REb2MgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyczogTGF5ZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllck9yZGVyOiBzdHJpbmdbXTtcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclJvdyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcHJvamVjdElkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0VGh1bWIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRodW1iOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBc3NldFBheWxvYWQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhaW50QXNzZXRQYXlsb2FkID0geyBzcmM6IHN0cmluZyB9O1xuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZVRleHQoaW5wdXQ6IFBhcnRpYWw8VGV4dExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogVGV4dExheWVyRGF0YSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaW5wdXQgfHwgdHlwZW9mIGlucHV0LmNvbnRlbnQgIT09IFwic3RyaW5nXCIpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IGFsaWduOiBUZXh0QWxpZ24gPSBpbnB1dC5hbGlnbiA9PT0gXCJjZW50ZXJcIiB8fCBpbnB1dC5hbGlnbiA9PT0gXCJyaWdodFwiID8gaW5wdXQuYWxpZ24gOiBcImxlZnRcIjtcbiAgY29uc3QgcmFzdGVyV2lkdGggPSBmaW5pdGUoaW5wdXQucmFzdGVyV2lkdGgsIDApO1xuICBjb25zdCByYXN0ZXJIZWlnaHQgPSBmaW5pdGUoaW5wdXQucmFzdGVySGVpZ2h0LCAwKTtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBpbnB1dC5jb250ZW50LnNsaWNlKDAsIDQwMDApLFxuICAgIGZvbnRGYW1pbHk6IHR5cGVvZiBpbnB1dC5mb250RmFtaWx5ID09PSBcInN0cmluZ1wiID8gaW5wdXQuZm9udEZhbWlseS5zbGljZSgwLCA4MCkgOiBcIkludGVyXCIsXG4gICAgZm9udFNpemU6IGNsYW1wKGZpbml0ZShpbnB1dC5mb250U2l6ZSwgNDgpLCA2LCA1MDApLFxuICAgIGZvbnRXZWlnaHQ6IGNsYW1wKE1hdGgucm91bmQoZmluaXRlKGlucHV0LmZvbnRXZWlnaHQsIDQwMCkgLyAxMDApICogMTAwLCAxMDAsIDkwMCksXG4gICAgYWxpZ24sXG4gICAgY29sb3I6IHR5cGVvZiBpbnB1dC5jb2xvciA9PT0gXCJzdHJpbmdcIiAmJiAvXiNbMC05YS1mXXs2fSQvaS50ZXN0KGlucHV0LmNvbG9yKSA/IGlucHV0LmNvbG9yIDogXCIjMTExMTExXCIsXG4gICAgbGluZUhlaWdodDogY2xhbXAoZmluaXRlKGlucHV0LmxpbmVIZWlnaHQsIDEuMiksIDAuNiwgMyksXG4gICAgLi4uKHJhc3RlcldpZHRoID4gMCAmJiByYXN0ZXJIZWlnaHQgPiAwID8geyByYXN0ZXJXaWR0aCwgcmFzdGVySGVpZ2h0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVHJhbnNmb3JtKGlucHV0OiBQYXJ0aWFsPExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogTGF5ZXJEYXRhIHtcbiAgY29uc3QgdCA9IGlucHV0ID8/IHt9O1xuICBjb25zdCB0ZXh0ID0gc2FuaXRpemVUZXh0KHQudGV4dCk7XG4gIHJldHVybiB7XG4gICAgeDogZmluaXRlKHQueCwgMCksXG4gICAgeTogZmluaXRlKHQueSwgMCksXG4gICAgdzogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LncsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgaDogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LmgsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgcm90YXRpb246IGZpbml0ZSh0LnJvdGF0aW9uLCAwKSxcbiAgICBvcGFjaXR5OiBjbGFtcChmaW5pdGUodC5vcGFjaXR5LCAxKSwgMCwgMSksXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIGZsaXBYOiB0eXBlb2YgdC5mbGlwWCA9PT0gXCJib29sZWFuXCIgPyB0LmZsaXBYIDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBCTEVORF9NT0RFUy5pbmNsdWRlcyh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmRNb2RlIGFzIEJsZW5kTW9kZSkgOiBcIm5vcm1hbFwiLFxuICAgIC4uLih0ZXh0ID8geyB0ZXh0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRyYW5zZm9ybSh0OiBMYXllckRhdGEpOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2FuaXRpemVUcmFuc2Zvcm0odCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVHJhbnNmb3JtKHJhdzogc3RyaW5nKTogTGF5ZXJEYXRhIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0oSlNPTi5wYXJzZShyYXcpIGFzIFBhcnRpYWw8TGF5ZXJEYXRhPik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nQXJyYXkocmF3OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZC5maWx0ZXIoKHYpOiB2IGlzIHN0cmluZyA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgOiBbXTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cbiIsICIvLyBQdXJlIGdlb21ldHJ5IGZvciBtb3ZpbmcsIHNjYWxpbmcsIGFuZCByb3RhdGluZyBsYXllcnMuIEFsbCBtYXRoIHdvcmtzIGluXG4vLyBwcm9qZWN0IChcIndvcmxkXCIpIGNvb3JkaW5hdGVzOyByb3RhdGlvbiBpcyBkZWdyZWVzIGNsb2Nrd2lzZSBhYm91dCB0aGVcbi8vIGxheWVyJ3MgY2VudGVyLlxuXG5pbXBvcnQgeyBNSU5fTEFZRVJfU0laRSwgdHlwZSBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG5leHBvcnQgdHlwZSBIYW5kbGVJZCA9IFwibndcIiB8IFwiblwiIHwgXCJuZVwiIHwgXCJlXCIgfCBcInNlXCIgfCBcInNcIiB8IFwic3dcIiB8IFwid1wiO1xuXG4vKiogSGFuZGxlIHBvc2l0aW9ucyBpbiB1bml0IGJveCBjb29yZGluYXRlcyAoMC4uMSkuICovXG5leHBvcnQgY29uc3QgSEFORExFUzogUmVjb3JkPEhhbmRsZUlkLCBQb2ludD4gPSB7XG4gIG53OiB7IHg6IDAsIHk6IDAgfSxcbiAgbjogeyB4OiAwLjUsIHk6IDAgfSxcbiAgbmU6IHsgeDogMSwgeTogMCB9LFxuICBlOiB7IHg6IDEsIHk6IDAuNSB9LFxuICBzZTogeyB4OiAxLCB5OiAxIH0sXG4gIHM6IHsgeDogMC41LCB5OiAxIH0sXG4gIHN3OiB7IHg6IDAsIHk6IDEgfSxcbiAgdzogeyB4OiAwLCB5OiAwLjUgfVxufTtcblxuZXhwb3J0IGNvbnN0IEhBTkRMRV9JRFMgPSBPYmplY3Qua2V5cyhIQU5ETEVTKSBhcyBIYW5kbGVJZFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb3JuZXJIYW5kbGUoaGFuZGxlOiBIYW5kbGVJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFuZGxlLmxlbmd0aCA9PT0gMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIChkZWcgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlYyh2OiBQb2ludCwgZGVnOiBudW1iZXIpOiBQb2ludCB7XG4gIGNvbnN0IHJhZCA9IGRlZ1RvUmFkKGRlZyk7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKHJhZCk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZCk7XG4gIHJldHVybiB7IHg6IHYueCAqIGNvcyAtIHYueSAqIHNpbiwgeTogdi54ICogc2luICsgdi55ICogY29zIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNlbnRlcih0OiBMYXllclRyYW5zZm9ybSk6IFBvaW50IHtcbiAgcmV0dXJuIHsgeDogdC54ICsgdC53IC8gMiwgeTogdC55ICsgdC5oIC8gMiB9O1xufVxuXG4vKiogV29ybGQgcG9zaXRpb24gb2YgYSBwb2ludCBnaXZlbiBpbiB1bml0IGJveCBjb29yZGluYXRlcyAoMC4uMSkuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pdFBvaW50VG9Xb3JsZCh0OiBMYXllclRyYW5zZm9ybSwgdW5pdDogUG9pbnQpOiBQb2ludCB7XG4gIGNvbnN0IGNlbnRlciA9IGxheWVyQ2VudGVyKHQpO1xuICBjb25zdCBsb2NhbCA9IHsgeDogKHVuaXQueCAtIDAuNSkgKiB0LncsIHk6ICh1bml0LnkgLSAwLjUpICogdC5oIH07XG4gIGNvbnN0IHJvdGF0ZWQgPSByb3RhdGVWZWMobG9jYWwsIHQucm90YXRpb24pO1xuICByZXR1cm4geyB4OiBjZW50ZXIueCArIHJvdGF0ZWQueCwgeTogY2VudGVyLnkgKyByb3RhdGVkLnkgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGEgPSBkZWcgJSAzNjA7XG4gIGlmIChhID4gMTgwKSBhIC09IDM2MDtcbiAgaWYgKGEgPD0gLTE4MCkgYSArPSAzNjA7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlc2l6ZSBgc3RhcnRgIGJ5IGRyYWdnaW5nIGBoYW5kbGVgIHRvIHdvcmxkIHBvaW50IGBwb2ludGVyYCwga2VlcGluZyB0aGVcbiAqIG9wcG9zaXRlIGhhbmRsZSBmaXhlZC4gQ29ybmVyIGhhbmRsZXMgc2NhbGUgcHJvcG9ydGlvbmFsbHkgdW5sZXNzIGBmcmVlYDtcbiAqIGVkZ2UgaGFuZGxlcyBzdHJldGNoIGEgc2luZ2xlIGF4aXMuIE5ldmVyIGZsaXBzOyBjbGFtcHMgdG8gTUlOX0xBWUVSX1NJWkUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUZyb21IYW5kbGUoXG4gIHN0YXJ0OiBMYXllclRyYW5zZm9ybSxcbiAgaGFuZGxlOiBIYW5kbGVJZCxcbiAgcG9pbnRlcjogUG9pbnQsXG4gIGZyZWU6IGJvb2xlYW5cbik6IFBpY2s8TGF5ZXJUcmFuc2Zvcm0sIFwieFwiIHwgXCJ5XCIgfCBcIndcIiB8IFwiaFwiPiB7XG4gIGNvbnN0IGggPSBIQU5ETEVTW2hhbmRsZV07XG4gIGNvbnN0IGFuY2hvciA9IHsgeDogMSAtIGgueCwgeTogMSAtIGgueSB9O1xuICBjb25zdCBhbmNob3JXb3JsZCA9IHVuaXRQb2ludFRvV29ybGQoc3RhcnQsIGFuY2hvcik7XG5cbiAgLy8gUG9pbnRlciBleHByZXNzZWQgaW4gdGhlIGxheWVyJ3MgbG9jYWwgKHVucm90YXRlZCkgZnJhbWUsIHJlbGF0aXZlIHRvIHRoZSBhbmNob3IuXG4gIGNvbnN0IHYgPSByb3RhdGVWZWMoeyB4OiBwb2ludGVyLnggLSBhbmNob3JXb3JsZC54LCB5OiBwb2ludGVyLnkgLSBhbmNob3JXb3JsZC55IH0sIC1zdGFydC5yb3RhdGlvbik7XG4gIGNvbnN0IGRpclggPSBoLnggLSBhbmNob3IueDsgLy8gLTEsIDAsIG9yIDFcbiAgY29uc3QgZGlyWSA9IGgueSAtIGFuY2hvci55O1xuXG4gIGxldCB3ID0gc3RhcnQudztcbiAgbGV0IGhndCA9IHN0YXJ0Lmg7XG5cbiAgaWYgKGlzQ29ybmVySGFuZGxlKGhhbmRsZSkgJiYgIWZyZWUpIHtcbiAgICAvLyBQcm9qZWN0IHRoZSBwb2ludGVyIG9udG8gdGhlIGFuY2hvci0+aGFuZGxlIGRpYWdvbmFsIGZvciBhIHNtb290aCB1bmlmb3JtIHNjYWxlLlxuICAgIGNvbnN0IGR4ID0gZGlyWCAqIHN0YXJ0Lnc7XG4gICAgY29uc3QgZHkgPSBkaXJZICogc3RhcnQuaDtcbiAgICBjb25zdCBzID0gTWF0aC5tYXgoXG4gICAgICBNSU5fTEFZRVJfU0laRSAvIE1hdGgubWF4KHN0YXJ0LncsIHN0YXJ0LmgpLFxuICAgICAgKHYueCAqIGR4ICsgdi55ICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KVxuICAgICk7XG4gICAgdyA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBzdGFydC53ICogcyk7XG4gICAgaGd0ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHN0YXJ0LmggKiBzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGlyWCAhPT0gMCkgdyA9IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCB2LnggLyBkaXJYKTtcbiAgICBpZiAoZGlyWSAhPT0gMCkgaGd0ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHYueSAvIGRpclkpO1xuICB9XG5cbiAgLy8gUmVwb3NpdGlvbiBzbyB0aGUgYW5jaG9yIHBvaW50IHN0YXlzIGZpeGVkIGluIHdvcmxkIHNwYWNlLlxuICBjb25zdCBjZW50ZXJPZmZzZXQgPSByb3RhdGVWZWMoeyB4OiAoMC41IC0gYW5jaG9yLngpICogdywgeTogKDAuNSAtIGFuY2hvci55KSAqIGhndCB9LCBzdGFydC5yb3RhdGlvbik7XG4gIGNvbnN0IGN4ID0gYW5jaG9yV29ybGQueCArIGNlbnRlck9mZnNldC54O1xuICBjb25zdCBjeSA9IGFuY2hvcldvcmxkLnkgKyBjZW50ZXJPZmZzZXQueTtcbiAgcmV0dXJuIHsgeDogY3ggLSB3IC8gMiwgeTogY3kgLSBoZ3QgLyAyLCB3LCBoOiBoZ3QgfTtcbn1cblxuLyoqIEFuZ2xlIGZvciB0aGUgcm90YXRlIGhhbmRsZSAod2hpY2ggc2l0cyBhYm92ZSB0aGUgdG9wIGVkZ2UpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uRnJvbVBvaW50ZXIoc3RhcnQ6IExheWVyVHJhbnNmb3JtLCBwb2ludGVyOiBQb2ludCwgc25hcDogYm9vbGVhbik6IG51bWJlciB7XG4gIGNvbnN0IGNlbnRlciA9IGxheWVyQ2VudGVyKHN0YXJ0KTtcbiAgY29uc3QgZGVnID0gKE1hdGguYXRhbjIocG9pbnRlci55IC0gY2VudGVyLnksIHBvaW50ZXIueCAtIGNlbnRlci54KSAqIDE4MCkgLyBNYXRoLlBJICsgOTA7XG4gIGNvbnN0IHNuYXBwZWQgPSBzbmFwID8gTWF0aC5yb3VuZChkZWcgLyAxNSkgKiAxNSA6IGRlZztcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHNuYXBwZWQpO1xufVxuXG4vKiogQXhpcy1hbGlnbmVkIGJvdW5kcyBvZiBhIChwb3NzaWJseSByb3RhdGVkKSBsYXllciwgZm9yIGdyb3VwIG91dGxpbmVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQWFiYih0OiBMYXllclRyYW5zZm9ybSk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xuICBjb25zdCBjb3JuZXJzID0gW1xuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAwLCB5OiAwIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAxLCB5OiAwIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAxLCB5OiAxIH0pLFxuICAgIHVuaXRQb2ludFRvV29ybGQodCwgeyB4OiAwLCB5OiAxIH0pXG4gIF07XG4gIGNvbnN0IHhzID0gY29ybmVycy5tYXAoKGMpID0+IGMueCk7XG4gIGNvbnN0IHlzID0gY29ybmVycy5tYXAoKGMpID0+IGMueSk7XG4gIGNvbnN0IG1pblggPSBNYXRoLm1pbiguLi54cyk7XG4gIGNvbnN0IG1pblkgPSBNYXRoLm1pbiguLi55cyk7XG4gIHJldHVybiB7IHg6IG1pblgsIHk6IG1pblksIHc6IE1hdGgubWF4KC4uLnhzKSAtIG1pblgsIGg6IE1hdGgubWF4KC4uLnlzKSAtIG1pblkgfTtcbn1cbiIsICIvLyBUeXBlZCB3cmFwcGVycyBvdmVyIHRoZSBjYXBzdWxlJ3MgbXV0YXRpb25zLiBMYWtlYmVkJ3MgdXNlTXV0YXRpb24gcGVyZm9ybXNcbi8vIG5vIGhvb2sgY2FsbHMgaW50ZXJuYWxseSAoaXQganVzdCBiaW5kcyB0aGUgV2ViU29ja2V0IHJlcXVlc3QpLCBzbyBpdCBpc1xuLy8gc2FmZSB0byBjcmVhdGUgdGhlc2UgYmluZGluZ3Mgb25jZSBhdCBtb2R1bGUgc2NvcGUgYW5kIGNhbGwgdGhlbSBmcm9tXG4vLyBub24tY29tcG9uZW50IGNvZGUgbGlrZSB0aGUgcGVyc2lzdCBxdWV1ZS5cblxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQXNzZXRQYXlsb2FkLCBQYWludEFzc2V0UGF5bG9hZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcbiAgY3JlYXRlUHJvamVjdDogdXNlTXV0YXRpb248W25hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLCB7IGlkOiBzdHJpbmcgfT4oXCJjcmVhdGVQcm9qZWN0XCIpLFxuICBjcmVhdGVQcm9qZWN0RnJvbUltYWdlOiB1c2VNdXRhdGlvbjxcbiAgICBbbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGF5ZXJOYW1lOiBzdHJpbmcsIHNyYzogc3RyaW5nLCBkYXRhSnNvbjogc3RyaW5nXSxcbiAgICB7IGlkOiBzdHJpbmc7IGxheWVySWQ6IHN0cmluZzsgYXNzZXRJZDogc3RyaW5nOyBzcmM6IHN0cmluZyB9XG4gID4oXCJjcmVhdGVQcm9qZWN0RnJvbUltYWdlXCIpLFxuICByZW5hbWVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nXSwgdm9pZD4oXCJyZW5hbWVQcm9qZWN0XCIpLFxuICByZXNpemVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLCB2b2lkPihcInJlc2l6ZVByb2plY3RcIiksXG4gIHNldFByb2plY3RUaHVtYjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIHRodW1iOiBzdHJpbmddLCB2b2lkPihcInNldFByb2plY3RUaHVtYlwiKSxcbiAgZGVsZXRlUHJvamVjdDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCB2b2lkPihcImRlbGV0ZVByb2plY3RcIiksXG4gIGFkZExheWVyOiB1c2VNdXRhdGlvbjxcbiAgICBbXG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNsaWVudEtleTogc3RyaW5nLFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGF0YUpzb246IHN0cmluZyxcbiAgICAgIGFzc2V0OiB7IGFzc2V0SWQ/OiBzdHJpbmc7IHNyYz86IHN0cmluZzsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9XG4gICAgXSxcbiAgICB7IGxheWVySWQ6IHN0cmluZzsgYXNzZXRJZDogc3RyaW5nOyBzcmM/OiBzdHJpbmcgfVxuICA+KFwiYWRkTGF5ZXJcIiksXG4gIHVwZGF0ZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgZGF0YUpzb246IHN0cmluZ10sIHZvaWQ+KFwidXBkYXRlTGF5ZXJcIiksXG4gIHJlcGxhY2VMYXllckFzc2V0OiB1c2VNdXRhdGlvbjxcbiAgICBbaWQ6IHN0cmluZywgc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXSxcbiAgICB7IGFzc2V0SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmcgfVxuICA+KFwicmVwbGFjZUxheWVyQXNzZXRcIiksXG4gIHJlbmFtZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nXSwgdm9pZD4oXCJyZW5hbWVMYXllclwiKSxcbiAgZGVsZXRlTGF5ZXI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgdm9pZD4oXCJkZWxldGVMYXllclwiKSxcbiAgc2V0TGF5ZXJPcmRlcjogdXNlTXV0YXRpb248W3Byb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdXSwgdm9pZD4oXCJzZXRMYXllck9yZGVyXCIpLFxuICBnZXRBc3NldDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCBBc3NldFBheWxvYWQ+KFwiZ2V0QXNzZXRcIiksXG4gIGdldEFzc2V0UGFpbnQ6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgUGFpbnRBc3NldFBheWxvYWQ+KFwiZ2V0QXNzZXRQYWludFwiKVxufTtcblxuLyoqXG4gKiBRdWVyaWVzIGFycml2ZSBhcyBgW11gIGJlZm9yZSB0aGUgZmlyc3QgV2ViU29ja2V0IHJlc3VsdCwgdGhlbiBhc1xuICogYHsgcmVhZHk6IHRydWUsIGl0ZW1zIH1gLiBUaGlzIG5vcm1hbGl6ZXMgYm90aCBzaGFwZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVJlc3VsdDxUPihyYXc6IHVua25vd24pOiB7IHJlYWR5OiBib29sZWFuOyBpdGVtczogVFtdIH0ge1xuICBpZiAocmF3ICYmIHR5cGVvZiByYXcgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkocmF3KSAmJiAocmF3IGFzIHsgcmVhZHk/OiBib29sZWFuIH0pLnJlYWR5KSB7XG4gICAgY29uc3QgaXRlbXMgPSAocmF3IGFzIHsgaXRlbXM/OiBUW10gfSkuaXRlbXM7XG4gICAgcmV0dXJuIHsgcmVhZHk6IHRydWUsIGl0ZW1zOiBBcnJheS5pc0FycmF5KGl0ZW1zKSA/IGl0ZW1zIDogW10gfTtcbiAgfVxuICByZXR1cm4geyByZWFkeTogZmFsc2UsIGl0ZW1zOiBbXSB9O1xufVxuIiwgIi8vIFRpbnkgb2JzZXJ2YWJsZSBzdG9yZSBmb3IgdGhlIGVkaXRvci4gV2hpbGUgYSBwcm9qZWN0IGlzIG9wZW4sIHRoaXMgZG9jIGlzXG4vLyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aDogcG9pbnRlciBnZXN0dXJlcyBtdXRhdGUgaXQgc3luY2hyb25vdXNseSBmb3Jcbi8vIGluc3RhbnQgZmVlZGJhY2ssIGFuZCBwZXJzaXN0ZW5jZSBoYXBwZW5zIGluIHRoZSBiYWNrZ3JvdW5kIChzZWUgcGVyc2lzdC50cykuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB0eXBlIHsgQmxlbmRNb2RlLCBQcm9qZWN0RG9jLCBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFRvb2wgPSBcIm1vdmVcIiB8IFwiaGFuZFwiIHwgXCJ0ZXh0XCIgfCBcImJydXNoXCIgfCBcImNyb3BcIjtcbmV4cG9ydCB0eXBlIFNhdmVTdGF0dXMgPSBcInNhdmVkXCIgfCBcInNhdmluZ1wiIHwgXCJyZXRyeWluZ1wiO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JWaWV3ID0geyB6b29tOiBudW1iZXI7IHBhblg6IG51bWJlcjsgcGFuWTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIEVkaXRvclN0YXRlID0ge1xuICBkb2M6IFByb2plY3REb2MgfCBudWxsO1xuICBzZWxlY3Rpb246IHN0cmluZ1tdO1xuICB0b29sOiBUb29sO1xuICBzcGFjZVBhbjogYm9vbGVhbjtcbiAgdmlldzogRWRpdG9yVmlldztcbiAgc2F2ZVN0YXR1czogU2F2ZVN0YXR1cztcbiAgcGVuZGluZ09wczogbnVtYmVyO1xuICBzYXZlRXJyb3I6IHN0cmluZyB8IG51bGw7XG4gIC8qKiBCdW1wZWQgd2hlbmV2ZXIgdGhlIHVuZG8vcmVkbyBzdGFja3MgY2hhbmdlLCBzbyB0aGUgVUkgcmUtcmVhZHMgdGhlbS4gKi9cbiAgaGlzdFZlcnNpb246IG51bWJlcjtcbiAgLyoqIEJ1bXBlZCB0byBhc2sgdGhlIGNhbnZhcyB0byByZS1maXQgdGhlIGFydGJvYXJkIHRvIHRoZSB2aWV3cG9ydC4gKi9cbiAgZml0VmVyc2lvbjogbnVtYmVyO1xuICBicnVzaFNpemU6IG51bWJlcjtcbiAgYnJ1c2hIYXJkbmVzczogbnVtYmVyO1xuICBicnVzaE9wYWNpdHk6IG51bWJlcjtcbiAgYnJ1c2hGbG93OiBudW1iZXI7XG4gIGZvcmVncm91bmRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgdGV4dEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGV4dEZvbnRTaXplOiBudW1iZXI7XG4gIHRleHRGb250V2VpZ2h0OiBudW1iZXI7XG4gIHRleHRBbGlnbjogVGV4dEFsaWduO1xuICB0ZXh0TGluZUhlaWdodDogbnVtYmVyO1xuICB0ZXh0RWRpdGluZzogeyBpZDogc3RyaW5nOyBkcmFmdDogc3RyaW5nIH0gfCBudWxsO1xuICBjcm9wUmVjdDogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB8IG51bGw7XG4gIHNuYXBHdWlkZXM6IHsgeD86IG51bWJlcjsgeT86IG51bWJlciB9IHwgbnVsbDtcbiAgYmxlbmRQcmV2aWV3OiBCbGVuZE1vZGUgfCBudWxsO1xufTtcblxubGV0IHN0YXRlOiBFZGl0b3JTdGF0ZSA9IHtcbiAgZG9jOiBudWxsLFxuICBzZWxlY3Rpb246IFtdLFxuICB0b29sOiBcIm1vdmVcIixcbiAgc3BhY2VQYW46IGZhbHNlLFxuICB2aWV3OiB7IHpvb206IDEsIHBhblg6IDAsIHBhblk6IDAgfSxcbiAgc2F2ZVN0YXR1czogXCJzYXZlZFwiLFxuICBwZW5kaW5nT3BzOiAwLFxuICBzYXZlRXJyb3I6IG51bGwsXG4gIGhpc3RWZXJzaW9uOiAwLFxuICBmaXRWZXJzaW9uOiAwLFxuICBicnVzaFNpemU6IDE2LFxuICBicnVzaEhhcmRuZXNzOiA4MCxcbiAgYnJ1c2hPcGFjaXR5OiAxMDAsXG4gIGJydXNoRmxvdzogMTAwLFxuICBmb3JlZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICB0ZXh0Rm9udEZhbWlseTogXCJJbnRlclwiLFxuICB0ZXh0Rm9udFNpemU6IDQ4LFxuICB0ZXh0Rm9udFdlaWdodDogNDAwLFxuICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICB0ZXh0TGluZUhlaWdodDogMS4yLFxuICB0ZXh0RWRpdGluZzogbnVsbCxcbiAgY3JvcFJlY3Q6IG51bGwsXG4gIHNuYXBHdWlkZXM6IG51bGwsXG4gIGJsZW5kUHJldmlldzogbnVsbFxufTtcblxuY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGUoKTogRWRpdG9yU3RhdGUge1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZShwYXRjaDogUGFydGlhbDxFZGl0b3JTdGF0ZT4pOiB2b2lkIHtcbiAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5wYXRjaCB9O1xuICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIFsuLi5saXN0ZW5lcnNdKSB7XG4gICAgbGlzdGVuZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9jKGZuOiAoZG9jOiBQcm9qZWN0RG9jKSA9PiBQcm9qZWN0RG9jKTogdm9pZCB7XG4gIGlmICghc3RhdGUuZG9jKSByZXR1cm47XG4gIHNldFN0YXRlKHsgZG9jOiBmbihzdGF0ZS5kb2MpIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyOiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICB9O1xufVxuXG4vKiogU3Vic2NyaWJlIGEgY29tcG9uZW50IHRvIGEgc2xpY2Ugb2YgZWRpdG9yIHN0YXRlIChPYmplY3QuaXMgY29tcGFyaXNvbikuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWRpdG9yPFQ+KHNlbGVjdG9yOiAoczogRWRpdG9yU3RhdGUpID0+IFQpOiBUIHtcbiAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc2VsZWN0b3IpO1xuICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc2VsZWN0b3I7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4gc2VsZWN0b3Ioc3RhdGUpKTtcbiAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSBzZWxlY3RvclJlZi5jdXJyZW50KHN0YXRlKTtcbiAgICAgIGlmICghT2JqZWN0LmlzKG5leHQsIHZhbHVlUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0O1xuICAgICAgICBzZXRWYWx1ZSgoKSA9PiBuZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoZWNrKCk7XG4gICAgcmV0dXJuIHN1YnNjcmliZShjaGVjayk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gdmFsdWU7XG59XG4iLCAiLy8gV3JpdGUtYmVoaW5kIHBlcnNpc3RlbmNlIHF1ZXVlOiB0aGUgb3B0aW1pc3RpYyBlbmdpbmUncyBiYWNrYm9uZS5cbi8vXG4vLyBFdmVyeSBlZGl0IGlzIGFwcGxpZWQgdG8gdGhlIGxvY2FsIGRvYyBpbW1lZGlhdGVseTsgdGhlIGNvcnJlc3BvbmRpbmdcbi8vIG9wZXJhdGlvbiBpcyBlbnF1ZXVlZCBoZXJlIGFuZCBkcmFpbmVkIGluIG9yZGVyIG92ZXIgdGhlIFdlYlNvY2tldC5cbi8vXG4vLyBHdWFyYW50ZWVzOlxuLy8gLSBGSUZPOiBhbiBvcCB0aGF0IHJlZmVyZW5jZXMgYSBsYXllciBjcmVhdGVkIGJ5IGFuIGVhcmxpZXIgb3AgYWx3YXlzIHJ1bnNcbi8vICAgYWZ0ZXIgaXQsIHNvIHRlbXAgY2xpZW50IGlkcyBjYW4gYmUgcmVtYXBwZWQgdG8gc2VydmVyIGlkcyBvbiB0aGUgZmx5LlxuLy8gLSBDb2FsZXNjaW5nOiByYXBpZCB1cGRhdGVzIHRvIHRoZSBzYW1lIHRhcmdldCBjb2xsYXBzZSBpbnRvIG9uZSBwZW5kaW5nIG9wXG4vLyAgIChkcmFnIGdlc3R1cmVzIGRvbid0IGZsb29kIHRoZSBzZXJ2ZXIpLlxuLy8gLSBEZWxpdmVyeTogb3BzIHRoYXQgdGltZSBvdXQgKGRlYWQgc29ja2V0LCByZWNvbm5lY3QpIGFyZSByZXRyaWVkIHdpdGhcbi8vICAgYmFja29mZiBmb3JldmVyOyBhZGRMYXllciBjYXJyaWVzIGFuIGlkZW1wb3RlbmN5IGtleSBzbyByZXRyaWVzIG5ldmVyXG4vLyAgIGR1cGxpY2F0ZS4gRGV0ZXJtaW5pc3RpYyBzZXJ2ZXIgcmVqZWN0aW9ucyBhcmUgZHJvcHBlZCBhbmQgc3VyZmFjZWQuXG5cbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgc2VlZEFzc2V0IH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgdHlwZSBQZXJzaXN0T3AgPVxuICB8IHtcbiAgICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIjtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nO1xuICAgICAgY2xpZW50SWQ6IHN0cmluZztcbiAgICAgIGNsaWVudEtleTogc3RyaW5nO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgZGF0YTogc3RyaW5nO1xuICAgICAgYXNzZXQ6IHsgcmVmOiBzdHJpbmcgfSB8IHsgY2xpZW50SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XG4gICAgfVxuICB8IHsga2luZDogXCJ1cGRhdGVMYXllclwiOyBpZDogc3RyaW5nOyBkYXRhOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJyZXBsYWNlTGF5ZXJBc3NldFwiOyBpZDogc3RyaW5nOyBjbGllbnRBc3NldElkOiBzdHJpbmc7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9XG4gIHwgeyBraW5kOiBcInJlbmFtZUxheWVyXCI7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcImRlbGV0ZUxheWVyXCI7IGlkOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJzZXRPcmRlclwiOyBwcm9qZWN0SWQ6IHN0cmluZzsgaWRzOiBzdHJpbmdbXSB9XG4gIHwgeyBraW5kOiBcInJlbmFtZVByb2plY3RcIjsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwicmVzaXplUHJvamVjdFwiOyBpZDogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9XG4gIHwgeyBraW5kOiBcInNldFRodW1iXCI7IGlkOiBzdHJpbmc7IHRodW1iOiBzdHJpbmcgfTtcblxuY29uc3QgT1BfVElNRU9VVF9NUyA9IDEwXzAwMDtcbi8vIFVwbG9hZHMgZ28gY2xpZW50IFx1MjE5MiBMYWtlYmVkIFx1MjE5MiBTMzsgYWxsb3cgbW9yZSB0aW1lIHRoYW4gYSBub3JtYWwgbWV0YWRhdGEgd3JpdGUuXG5jb25zdCBVUExPQURfVElNRU9VVF9NUyA9IDYwXzAwMDtcbmNvbnN0IE1BWF9CQUNLT0ZGX01TID0gMTVfMDAwO1xuXG4vLyBUZW1wIGNsaWVudCBpZCAtPiBzZXJ2ZXIgaWQuIENsaWVudCBjb2RlIG9ubHkgZXZlciBzZWVzIGNsaWVudCBpZHM7IHRoZVxuLy8gdHJhbnNsYXRpb24gaGFwcGVucyBoZXJlIGF0IGV4ZWN1dGlvbiB0aW1lLlxuY29uc3QgbGF5ZXJJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuY29uc3QgYXNzZXRJZHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5jb25zdCBxdWV1ZTogUGVyc2lzdE9wW10gPSBbXTtcbmxldCBkcmFpbmluZyA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUxheWVySWQoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBsYXllcklkcy5nZXQoaWQpID8/IGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFzc2V0SWQoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhc3NldElkcy5nZXQoaWQpID8/IGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQXNzZXRJZChjbGllbnRJZDogc3RyaW5nLCBzZXJ2ZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjbGllbnRJZCAhPT0gc2VydmVySWQpIGFzc2V0SWRzLnNldChjbGllbnRJZCwgc2VydmVySWQpO1xufVxuXG5sZXQgbmV4dENsaWVudElkID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBuZXdDbGllbnRJZChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtwcmVmaXh9XyR7RGF0ZS5ub3coKS50b1N0cmluZygzNil9XyR7KG5leHRDbGllbnRJZCsrKS50b1N0cmluZygzNil9XyR7TWF0aC5yYW5kb20oKVxuICAgIC50b1N0cmluZygzNilcbiAgICAuc2xpY2UoMiwgOCl9YDtcbn1cblxuLyoqIEtleSBmb3IgY29hbGVzY2luZzsgb3BzIHdpdGggdGhlIHNhbWUga2V5IHJlcGxhY2UgZWFjaCBvdGhlciBpbiBwbGFjZS4gKi9cbmZ1bmN0aW9uIG9wS2V5KG9wOiBQZXJzaXN0T3ApOiBzdHJpbmcgfCBudWxsIHtcbiAgc3dpdGNoIChvcC5raW5kKSB7XG4gICAgY2FzZSBcInVwZGF0ZUxheWVyXCI6XG4gICAgICByZXR1cm4gYHVwZGF0ZUxheWVyOiR7b3AuaWR9YDtcbiAgICBjYXNlIFwicmVuYW1lTGF5ZXJcIjpcbiAgICAgIHJldHVybiBgcmVuYW1lTGF5ZXI6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJzZXRPcmRlclwiOlxuICAgICAgcmV0dXJuIGBzZXRPcmRlcjoke29wLnByb2plY3RJZH1gO1xuICAgIGNhc2UgXCJyZW5hbWVQcm9qZWN0XCI6XG4gICAgICByZXR1cm4gYHJlbmFtZVByb2plY3Q6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJyZXNpemVQcm9qZWN0XCI6XG4gICAgICByZXR1cm4gYHJlc2l6ZVByb2plY3Q6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJzZXRUaHVtYlwiOlxuICAgICAgcmV0dXJuIGBzZXRUaHVtYjoke29wLmlkfWA7XG4gICAgY2FzZSBcInJlcGxhY2VMYXllckFzc2V0XCI6XG4gICAgICByZXR1cm4gYHJlcGxhY2VMYXllckFzc2V0OiR7b3AuaWR9YDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWUob3A6IFBlcnNpc3RPcCk6IHZvaWQge1xuICBjb25zdCBrZXkgPSBvcEtleShvcCk7XG4gIGlmIChrZXkpIHtcbiAgICBmb3IgKGxldCBpID0gcXVldWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmIChvcEtleShxdWV1ZVtpXSkgPT09IGtleSkge1xuICAgICAgICBxdWV1ZVtpXSA9IG9wO1xuICAgICAgICBzeW5jU3RhdHVzKCk7XG4gICAgICAgIHZvaWQgZHJhaW4oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBxdWV1ZS5wdXNoKG9wKTtcbiAgc3luY1N0YXR1cygpO1xuICB2b2lkIGRyYWluKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZW5kaW5nQ291bnQoKTogbnVtYmVyIHtcbiAgcmV0dXJuIHF1ZXVlLmxlbmd0aCArIChkcmFpbmluZyA/IDEgOiAwKTtcbn1cblxuZnVuY3Rpb24gc3luY1N0YXR1cyhwYXRjaDogUGFydGlhbDx7IHNhdmVTdGF0dXM6IFwic2F2ZWRcIiB8IFwic2F2aW5nXCIgfCBcInJldHJ5aW5nXCI7IHNhdmVFcnJvcjogc3RyaW5nIHwgbnVsbCB9PiA9IHt9KTogdm9pZCB7XG4gIGNvbnN0IGJ1c3kgPSBxdWV1ZS5sZW5ndGggPiAwIHx8IGRyYWluaW5nO1xuICBzZXRTdGF0ZSh7XG4gICAgc2F2ZVN0YXR1czogcGF0Y2guc2F2ZVN0YXR1cyA/PyAoYnVzeSA/IFwic2F2aW5nXCIgOiBcInNhdmVkXCIpLFxuICAgIHBlbmRpbmdPcHM6IHF1ZXVlLmxlbmd0aCArIChkcmFpbmluZyA/IDEgOiAwKSxcbiAgICAuLi4ocGF0Y2guc2F2ZUVycm9yICE9PSB1bmRlZmluZWQgPyB7IHNhdmVFcnJvcjogcGF0Y2guc2F2ZUVycm9yIH0gOiB7fSlcbiAgfSk7XG59XG5cbmNsYXNzIE9wVGltZW91dCBleHRlbmRzIEVycm9yIHt9XG5cbmZ1bmN0aW9uIHdpdGhUaW1lb3V0PFQ+KHByb21pc2U6IFByb21pc2U8VD4sIG1zID0gT1BfVElNRU9VVF9NUyk6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiByZWplY3QobmV3IE9wVGltZW91dChcInRpbWVkIG91dFwiKSksIG1zKTtcbiAgICBwcm9taXNlLnRoZW4oXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGF5KG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUob3A6IFBlcnNpc3RPcCk6IFByb21pc2U8dm9pZD4ge1xuICBzd2l0Y2ggKG9wLmtpbmQpIHtcbiAgICBjYXNlIFwiYWRkTGF5ZXJcIjoge1xuICAgICAgY29uc3QgYXNzZXQgPVxuICAgICAgICBcInJlZlwiIGluIG9wLmFzc2V0XG4gICAgICAgICAgPyB7IGFzc2V0SWQ6IHJlc29sdmVBc3NldElkKG9wLmFzc2V0LnJlZikgfVxuICAgICAgICAgIDogeyBzcmM6IG9wLmFzc2V0LnNyYywgd2lkdGg6IG9wLmFzc2V0LndpZHRoLCBoZWlnaHQ6IG9wLmFzc2V0LmhlaWdodCB9O1xuICAgICAgY29uc3QgdGltZW91dCA9IFwic3JjXCIgaW4gYXNzZXQgPyBVUExPQURfVElNRU9VVF9NUyA6IE9QX1RJTUVPVVRfTVM7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3aXRoVGltZW91dChcbiAgICAgICAgYXBpLmFkZExheWVyKG9wLnByb2plY3RJZCwgb3AuY2xpZW50S2V5LCBvcC5uYW1lLCBvcC5kYXRhLCBhc3NldCksXG4gICAgICAgIHRpbWVvdXRcbiAgICAgICk7XG4gICAgICBpZiAob3AuY2xpZW50SWQgIT09IHJlc3VsdC5sYXllcklkKSBsYXllcklkcy5zZXQob3AuY2xpZW50SWQsIHJlc3VsdC5sYXllcklkKTtcbiAgICAgIGNvbnN0IGNsaWVudEFzc2V0SWQgPSBcInJlZlwiIGluIG9wLmFzc2V0ID8gb3AuYXNzZXQucmVmIDogb3AuYXNzZXQuY2xpZW50SWQ7XG4gICAgICBtYXBBc3NldElkKGNsaWVudEFzc2V0SWQsIHJlc3VsdC5hc3NldElkKTtcbiAgICAgIGlmIChyZXN1bHQuc3JjICYmIFwic3JjXCIgaW4gb3AuYXNzZXQpIHtcbiAgICAgICAgc2VlZEFzc2V0KGNsaWVudEFzc2V0SWQsIHtcbiAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMsXG4gICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IG9wLmFzc2V0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMsXG4gICAgICAgICAgcGFpbnRTcmM6IG9wLmFzc2V0LnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikgPyBvcC5hc3NldC5zcmMgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IG9wLmFzc2V0LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXNlIFwidXBkYXRlTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkudXBkYXRlTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5kYXRhKSk7XG4gICAgY2FzZSBcInJlcGxhY2VMYXllckFzc2V0XCI6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpdGhUaW1lb3V0KFxuICAgICAgICBhcGkucmVwbGFjZUxheWVyQXNzZXQocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5zcmMsIG9wLndpZHRoLCBvcC5oZWlnaHQpLFxuICAgICAgICBVUExPQURfVElNRU9VVF9NU1xuICAgICAgKTtcbiAgICAgIG1hcEFzc2V0SWQob3AuY2xpZW50QXNzZXRJZCwgcmVzdWx0LmFzc2V0SWQpO1xuICAgICAgc2VlZEFzc2V0KG9wLmNsaWVudEFzc2V0SWQsIHtcbiAgICAgICAgc3JjOiByZXN1bHQuc3JjLFxuICAgICAgICBwYWludFNyYzogb3Auc3JjLFxuICAgICAgICB3aWR0aDogb3Aud2lkdGgsXG4gICAgICAgIGhlaWdodDogb3AuaGVpZ2h0XG4gICAgICB9KTtcbiAgICAgIHNlZWRBc3NldChyZXN1bHQuYXNzZXRJZCwge1xuICAgICAgICBzcmM6IHJlc3VsdC5zcmMsXG4gICAgICAgIHBhaW50U3JjOiBvcC5zcmMsXG4gICAgICAgIHdpZHRoOiBvcC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBvcC5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXNlIFwicmVuYW1lTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVuYW1lTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcImRlbGV0ZUxheWVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLmRlbGV0ZUxheWVyKHJlc29sdmVMYXllcklkKG9wLmlkKSkpO1xuICAgIGNhc2UgXCJzZXRPcmRlclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5zZXRMYXllck9yZGVyKG9wLnByb2plY3RJZCwgb3AuaWRzLm1hcChyZXNvbHZlTGF5ZXJJZCkpKTtcbiAgICBjYXNlIFwicmVuYW1lUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5yZW5hbWVQcm9qZWN0KG9wLmlkLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcInJlc2l6ZVByb2plY3RcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVzaXplUHJvamVjdChvcC5pZCwgb3Aud2lkdGgsIG9wLmhlaWdodCkpO1xuICAgIGNhc2UgXCJzZXRUaHVtYlwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5zZXRQcm9qZWN0VGh1bWIob3AuaWQsIG9wLnRodW1iKSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZHJhaW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkcmFpbmluZykgcmV0dXJuO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHN5bmNTdGF0dXMoKTtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG9wID0gcXVldWUuc2hpZnQoKSE7XG4gICAgbGV0IGF0dGVtcHQgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZShvcCk7XG4gICAgICAgIGlmIChhdHRlbXB0ID4gMCkgc3luY1N0YXR1cyh7IHNhdmVTdGF0dXM6IFwic2F2aW5nXCIgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgT3BUaW1lb3V0KSB7XG4gICAgICAgICAgLy8gU29ja2V0IGxpa2VseSBkaWVkOyB0aGUgdHJhbnNwb3J0IHJlY29ubmVjdHMgb24gaXRzIG93bi4gUmV0cnkgZm9yZXZlci5cbiAgICAgICAgICBhdHRlbXB0ICs9IDE7XG4gICAgICAgICAgc3luY1N0YXR1cyh7IHNhdmVTdGF0dXM6IFwicmV0cnlpbmdcIiB9KTtcbiAgICAgICAgICBhd2FpdCBkZWxheShNYXRoLm1pbihNQVhfQkFDS09GRl9NUywgNTAwICogMiAqKiBNYXRoLm1pbihhdHRlbXB0LCA1KSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcik7XG4gICAgICAgIC8vIFwibm90IGZvdW5kXCIgYWZ0ZXIgYSByZXRyeSBqdXN0IG1lYW5zIGEgY29tcGV0aW5nIGRlbGV0ZSBhbHJlYWR5IHdvbjtcbiAgICAgICAgLy8gdGhlIHN0YXRlcyBoYXZlIGNvbnZlcmdlZCwgc28gdHJlYXQgaXQgYXMgc3VjY2Vzcy5cbiAgICAgICAgaWYgKCEvbm90IGZvdW5kL2kudGVzdChtZXNzYWdlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQZXJzaXN0IG9wIGZhaWxlZCwgZHJvcHBpbmc6XCIsIG9wLmtpbmQsIG1lc3NhZ2UpO1xuICAgICAgICAgIHN5bmNTdGF0dXMoeyBzYXZlRXJyb3I6IGAke29wLmtpbmR9OiAke21lc3NhZ2V9YCB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBzeW5jU3RhdHVzKCk7XG59XG5cbi8vIEVkaXRpbmcgY29tbWl0cyBhcmUgZW5xdWV1ZWQgb24gZ2VzdHVyZSBlbmQgYW5kIG5vcm1hbGx5IGZsdXNoIGluXG4vLyBtaWxsaXNlY29uZHMsIGJ1dCB3YXJuIGlmIHRoZSB1c2VyIGNsb3NlcyB0aGUgdGFiIG1pZC1zYXZlLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKHBlbmRpbmdDb3VudCgpID4gMCB8fCBnZXRTdGF0ZSgpLnNhdmVTdGF0dXMgIT09IFwic2F2ZWRcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8vIEluLW1lbW9yeSBhc3NldCBjYWNoZS4gTG9jYWxseSBpbXBvcnRlZCBpbWFnZXMgYXJlIHNlZWRlZCB3aXRoIGEgZGF0YSBVUkxcbi8vIChwYWludFNyYykgZm9yIGNhbnZhcyB3b3JrOyBhZnRlciBTMyB1cGxvYWQsIHNyYyBiZWNvbWVzIHRoZSBDbG91ZEZyb250IFVSTFxuLy8gdXNlZCBmb3IgPGltZz4gZGlzcGxheS4gcGFpbnRTcmMgaXMga2VwdCBzbyB0aHVtYnMvZXhwb3J0IHdvcmsgd2l0aG91dCBDT1JTLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyByZXNvbHZlQXNzZXRJZCB9IGZyb20gXCIuL3BlcnNpc3RcIjtcblxuZXhwb3J0IHR5cGUgQXNzZXRFbnRyeSA9IHtcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogU2FtZS1vcmlnaW4vZGF0YSBVUkwgc2FmZSBmb3IgY2FudmFzICh0aHVtYnMsIGV4cG9ydCkuICovXG4gIHBhaW50U3JjPzogc3RyaW5nO1xufTtcblxuY29uc3QgZW50cmllcyA9IG5ldyBNYXA8c3RyaW5nLCBBc3NldEVudHJ5PigpO1xuY29uc3QgaW5mbGlnaHQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxBc3NldEVudHJ5Pj4oKTtcbmNvbnN0IGltYWdlcyA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+PigpO1xuY29uc3QgcGFpbnRJbmZsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEFzc2V0RW50cnk+PigpO1xuY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5mdW5jdGlvbiBub3RpZnkoKTogdm9pZCB7XG4gIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc10pIGxpc3RlbmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWVkQXNzZXQoaWQ6IHN0cmluZywgZW50cnk6IEFzc2V0RW50cnkpOiB2b2lkIHtcbiAgY29uc3QgcHJldiA9IGVudHJpZXMuZ2V0KGlkKTtcbiAgZW50cmllcy5zZXQoaWQsIHtcbiAgICBzcmM6IGVudHJ5LnNyYyxcbiAgICB3aWR0aDogZW50cnkud2lkdGgsXG4gICAgaGVpZ2h0OiBlbnRyeS5oZWlnaHQsXG4gICAgcGFpbnRTcmM6IGVudHJ5LnBhaW50U3JjID8/IHByZXY/LnBhaW50U3JjXG4gIH0pO1xuICBpbWFnZXMuZGVsZXRlKGlkKTtcbiAgbm90aWZ5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldEVudHJ5KGlkOiBzdHJpbmcpOiBBc3NldEVudHJ5IHwgbnVsbCB7XG4gIHJldHVybiBlbnRyaWVzLmdldChpZCkgPz8gZW50cmllcy5nZXQocmVzb2x2ZUFzc2V0SWQoaWQpKSA/PyBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXNzZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8QXNzZXRFbnRyeT4ge1xuICBjb25zdCBleGlzdGluZyA9IGdldEFzc2V0RW50cnkoaWQpO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhpc3RpbmcpO1xuICBjb25zdCBwZW5kaW5nID0gaW5mbGlnaHQuZ2V0KGlkKTtcbiAgaWYgKHBlbmRpbmcpIHJldHVybiBwZW5kaW5nO1xuXG4gIGNvbnN0IHByb21pc2UgPSBhcGlcbiAgICAuZ2V0QXNzZXQocmVzb2x2ZUFzc2V0SWQoaWQpKVxuICAgIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zdCBwcmV2ID0gZW50cmllcy5nZXQoaWQpO1xuICAgICAgY29uc3QgZW50cnk6IEFzc2V0RW50cnkgPSB7XG4gICAgICAgIHNyYzogcGF5bG9hZC5zcmMsXG4gICAgICAgIHdpZHRoOiBwYXlsb2FkLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBheWxvYWQuaGVpZ2h0LFxuICAgICAgICBwYWludFNyYzogcHJldj8ucGFpbnRTcmNcbiAgICAgIH07XG4gICAgICBlbnRyaWVzLnNldChpZCwgZW50cnkpO1xuICAgICAgbm90aWZ5KCk7XG4gICAgICByZXR1cm4gZW50cnk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBpbmZsaWdodC5kZWxldGUoaWQpO1xuICAgIH0pO1xuICBpbmZsaWdodC5zZXQoaWQsIHByb21pc2UpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcGFpbnRVcmwoZW50cnk6IEFzc2V0RW50cnkpOiBzdHJpbmcge1xuICByZXR1cm4gZW50cnkucGFpbnRTcmMgfHwgZW50cnkuc3JjO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVQYWludEFzc2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPEFzc2V0RW50cnk+IHtcbiAgY29uc3QgZW50cnkgPSBhd2FpdCBlbnN1cmVBc3NldChpZCk7XG4gIGlmIChlbnRyeS5wYWludFNyYyB8fCBlbnRyeS5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSByZXR1cm4gZW50cnk7XG4gIGNvbnN0IGV4aXN0aW5nID0gcGFpbnRJbmZsaWdodC5nZXQoaWQpO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgY29uc3QgcHJvbWlzZSA9IGFwaS5nZXRBc3NldFBhaW50KHJlc29sdmVBc3NldElkKGlkKSkudGhlbigocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRBc3NldEVudHJ5KGlkKSA/PyBlbnRyeTtcbiAgICBjb25zdCBuZXh0ID0geyAuLi5jdXJyZW50LCBwYWludFNyYzogcGF5bG9hZC5zcmMgfTtcbiAgICBlbnRyaWVzLnNldChpZCwgbmV4dCk7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlQXNzZXRJZChpZCk7XG4gICAgaWYgKHJlc29sdmVkICE9PSBpZCkgZW50cmllcy5zZXQocmVzb2x2ZWQsIG5leHQpO1xuICAgIG5vdGlmeSgpO1xuICAgIHJldHVybiBuZXh0O1xuICB9KS5maW5hbGx5KCgpID0+IHBhaW50SW5mbGlnaHQuZGVsZXRlKGlkKSk7XG4gIHBhaW50SW5mbGlnaHQuc2V0KGlkLCBwcm9taXNlKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKiBEZWNvZGVkIGltYWdlIGVsZW1lbnQgZm9yIGNhbnZhcyByZW5kZXJpbmcgKGV4cG9ydCwgdGh1bWJuYWlscykuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKGlkOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgY29uc3QgY2FjaGVkID0gaW1hZ2VzLmdldChpZCk7XG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gIGNvbnN0IHByb21pc2UgPSBlbnN1cmVQYWludEFzc2V0KGlkKS50aGVuKFxuICAgIChlbnRyeSkgPT5cbiAgICAgIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGFpbnRVcmwoZW50cnkpO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gUmVtb3RlIFVSTHMgbmVlZCBDT1JTIGZvciBjYW52YXM7IGRhdGEgVVJMcyBkbyBub3QuXG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xuICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlY29kZSBpbWFnZVwiKSk7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICB9KVxuICApO1xuICBpbWFnZXMuc2V0KGlkLCBwcm9taXNlKTtcbiAgcHJvbWlzZS5jYXRjaCgoKSA9PiBpbWFnZXMuZGVsZXRlKGlkKSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKiogQ29tcG9uZW50IGhvb2s6IHJldHVybnMgdGhlIGFzc2V0IG9uY2UgYXZhaWxhYmxlLCBraWNraW5nIG9mZiBhIGZldGNoLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzc2V0RW50cnkoaWQ6IHN0cmluZyk6IEFzc2V0RW50cnkgfCBudWxsIHtcbiAgY29uc3QgW2VudHJ5LCBzZXRFbnRyeV0gPSB1c2VTdGF0ZTxBc3NldEVudHJ5IHwgbnVsbD4oKCkgPT4gZ2V0QXNzZXRFbnRyeShpZCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiBzZXRFbnRyeShnZXRBc3NldEVudHJ5KGlkKSk7XG4gICAgY2hlY2soKTtcbiAgICBsaXN0ZW5lcnMuYWRkKGNoZWNrKTtcbiAgICBlbnN1cmVBc3NldChpZCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiQXNzZXQgbG9hZCBmYWlsZWQ6XCIsIGVycm9yKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUoY2hlY2spO1xuICAgIH07XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cbiIsICIvLyBGbGF0dGVuIGEgZG9jdW1lbnQgdG8gYSBjYW52YXM6IHVzZWQgZm9yIFBORyBleHBvcnQgYW5kIHByb2plY3QgdGh1bWJuYWlscy5cblxuaW1wb3J0IHR5cGUgeyBQcm9qZWN0RG9jIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgZW5zdXJlQXNzZXQsIGxvYWRJbWFnZSB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckRvY1RvQ2FudmFzKGRvYzogUHJvamVjdERvYywgc2NhbGU6IG51bWJlcik6IFByb21pc2U8SFRNTENhbnZhc0VsZW1lbnQ+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChkb2Mud2lkdGggKiBzY2FsZSkpO1xuICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChkb2MuaGVpZ2h0ICogc2NhbGUpKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcblxuICBjb25zdCB2aXNpYmxlID0gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBsYXllci52aXNpYmxlICYmIGxheWVyLm9wYWNpdHkgPiAwKTtcbiAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgdmlzaWJsZS5tYXAoKGxheWVyKSA9PiBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCkuY2F0Y2goKCkgPT4gbnVsbCkpXG4gICk7XG5cbiAgY3R4LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IFwiaGlnaFwiO1xuICB2aXNpYmxlLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgY29uc3QgaW1nID0gaW1hZ2VzW2ldO1xuICAgIGlmICghaW1nKSByZXR1cm47XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5O1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsYXllci5ibGVuZE1vZGUgYXMgR2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uO1xuICAgIGN0eC50cmFuc2xhdGUoKGxheWVyLnggKyBsYXllci53IC8gMikgKiBzY2FsZSwgKGxheWVyLnkgKyBsYXllci5oIC8gMikgKiBzY2FsZSk7XG4gICAgY3R4LnJvdGF0ZSgobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgKC1sYXllci53IC8gMikgKiBzY2FsZSwgKC1sYXllci5oIC8gMikgKiBzY2FsZSwgbGF5ZXIudyAqIHNjYWxlLCBsYXllci5oICogc2NhbGUpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH0pO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG93bmxvYWRQbmcoZG9jOiBQcm9qZWN0RG9jKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGNhbnZhcyA9IGF3YWl0IHJlbmRlckRvY1RvQ2FudmFzKGRvYywgMSk7XG4gIGNvbnN0IHVybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGluay5ocmVmID0gdXJsO1xuICBsaW5rLmRvd25sb2FkID0gYCR7ZG9jLm5hbWUgfHwgXCJpbWFnZVwifS5wbmdgO1xuICBsaW5rLmNsaWNrKCk7XG59XG5cbmNvbnN0IFRIVU1CX01BWCA9IDM2MDtcblxuYXN5bmMgZnVuY3Rpb24gZmlyc3RMYXllclNyYyhkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgZm9yIChjb25zdCBsYXllciBvZiBkb2MubGF5ZXJzKSB7XG4gICAgaWYgKCFsYXllci52aXNpYmxlIHx8IGxheWVyLm9wYWNpdHkgPD0gMCkgY29udGludWU7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCBlbnN1cmVBc3NldChsYXllci5hc3NldElkKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgICBpZiAoZW50cnk/LnNyYykgcmV0dXJuIGVudHJ5LnNyYztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlclRodW1iKGRvYzogUHJvamVjdERvYyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHZpc2libGUgPSBkb2MubGF5ZXJzLmZpbHRlcigobGF5ZXIpID0+IGxheWVyLnZpc2libGUgJiYgbGF5ZXIub3BhY2l0eSA+IDApO1xuICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIFRIVU1CX01BWCAvIE1hdGgubWF4KGRvYy53aWR0aCwgZG9jLmhlaWdodCkpO1xuXG4gIGlmICh2aXNpYmxlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHZpc2libGUubWFwKChsYXllcikgPT4gbG9hZEltYWdlKGxheWVyLmFzc2V0SWQpLnRoZW4oKCkgPT4gdHJ1ZSkuY2F0Y2goKCkgPT4gZmFsc2UpKVxuICAgICk7XG4gICAgaWYgKGxvYWRlZC5ldmVyeSgob2spID0+ICFvaykpIHtcbiAgICAgIGNvbnN0IGZhbGxiYWNrID0gYXdhaXQgZmlyc3RMYXllclNyYyhkb2MpO1xuICAgICAgaWYgKGZhbGxiYWNrKSByZXR1cm4gZmFsbGJhY2s7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVuZGVyIHRodW1ibmFpbFwiKTtcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IHJlbmRlckRvY1RvQ2FudmFzKGRvYywgc2NhbGUpO1xuICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjg1KTtcbiAgfSBjYXRjaCB7XG4gICAgY29uc3QgZmFsbGJhY2sgPSBhd2FpdCBmaXJzdExheWVyU3JjKGRvYyk7XG4gICAgaWYgKGZhbGxiYWNrKSByZXR1cm4gZmFsbGJhY2s7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHJlbmRlciB0aHVtYm5haWxcIik7XG4gIH1cbn1cbiIsICIvLyBDb21tYW5kLWJhc2VkIHVuZG8vcmVkby4gRWFjaCBlbnRyeSBvd25zIGNsb3N1cmVzIHRoYXQgcmUtYXBwbHkgb3IgcmV2ZXJ0IGFcbi8vIGNoYW5nZSB0aHJvdWdoIHRoZSBzYW1lIGFjdGlvbiBwYXRocyB0aGF0IG1hZGUgaXQsIHNvIHVuZG8vcmVkbyBhbHNvXG4vLyBwZXJzaXN0cyAoYW5kIHN0YXlzIG9wdGltaXN0aWMpIGxpa2UgYW55IG90aGVyIGVkaXQuXG5cbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmV4cG9ydCB0eXBlIEhpc3RvcnlFbnRyeSA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdW5kbzogKCkgPT4gdm9pZDtcbiAgcmVkbzogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IExJTUlUID0gMTAwO1xuXG5sZXQgdW5kb1N0YWNrOiBIaXN0b3J5RW50cnlbXSA9IFtdO1xubGV0IHJlZG9TdGFjazogSGlzdG9yeUVudHJ5W10gPSBbXTtcblxuZnVuY3Rpb24gYnVtcCgpOiB2b2lkIHtcbiAgc2V0U3RhdGUoeyBoaXN0VmVyc2lvbjogZ2V0U3RhdGUoKS5oaXN0VmVyc2lvbiArIDEgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoSGlzdG9yeShlbnRyeTogSGlzdG9yeUVudHJ5KTogdm9pZCB7XG4gIHVuZG9TdGFjay5wdXNoKGVudHJ5KTtcbiAgaWYgKHVuZG9TdGFjay5sZW5ndGggPiBMSU1JVCkgdW5kb1N0YWNrLnNoaWZ0KCk7XG4gIHJlZG9TdGFjayA9IFtdO1xuICBidW1wKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEhpc3RvcnkoKTogdm9pZCB7XG4gIHVuZG9TdGFjayA9IFtdO1xuICByZWRvU3RhY2sgPSBbXTtcbiAgYnVtcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuVW5kbygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHVuZG9TdGFjay5sZW5ndGggPiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuUmVkbygpOiBib29sZWFuIHtcbiAgcmV0dXJuIHJlZG9TdGFjay5sZW5ndGggPiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kbygpOiB2b2lkIHtcbiAgY29uc3QgZW50cnkgPSB1bmRvU3RhY2sucG9wKCk7XG4gIGlmICghZW50cnkpIHJldHVybjtcbiAgZW50cnkudW5kbygpO1xuICByZWRvU3RhY2sucHVzaChlbnRyeSk7XG4gIGJ1bXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZG8oKTogdm9pZCB7XG4gIGNvbnN0IGVudHJ5ID0gcmVkb1N0YWNrLnBvcCgpO1xuICBpZiAoIWVudHJ5KSByZXR1cm47XG4gIGVudHJ5LnJlZG8oKTtcbiAgdW5kb1N0YWNrLnB1c2goZW50cnkpO1xuICBidW1wKCk7XG59XG4iLCAiLy8gRXZlcnkgZWRpdCBmbG93cyB0aHJvdWdoIGhlcmU6IGFwcGx5IHRvIHRoZSBsb2NhbCBkb2Mgc3luY2hyb25vdXNseSAoaW5zdGFudFxuLy8gVUkpLCByZWNvcmQgYW4gdW5kby9yZWRvIGVudHJ5LCBhbmQgZW5xdWV1ZSBiYWNrZ3JvdW5kIHBlcnNpc3RlbmNlLiBHZXN0dXJlc1xuLy8gdXNlIHRoZSB0cmFuc2llbnQgcGF0aCBhdCBwb2ludGVyLW1vdmUgcmF0ZSBhbmQgY29tbWl0IG9uY2Ugb24gcmVsZWFzZS5cblxuaW1wb3J0IHtcbiAgdHlwZSBCbGVuZE1vZGUsXG4gIGRlY29kZVRyYW5zZm9ybSxcbiAgZW5jb2RlVHJhbnNmb3JtLFxuICBNQVhfUFJPSkVDVF9ESU0sXG4gIHR5cGUgTGF5ZXIsXG4gIHR5cGUgVGV4dExheWVyRGF0YSxcbiAgdHlwZSBMYXllclJvdyxcbiAgdHlwZSBMYXllclRyYW5zZm9ybSxcbiAgdHlwZSBQcm9qZWN0RG9jLFxuICB0eXBlIFByb2plY3RNZXRhXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGxheWVyQWFiYiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ2VvbWV0cnlcIjtcbmltcG9ydCB7IHJlbmRlclRodW1iIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IGdldEFzc2V0RW50cnksIGxvYWRJbWFnZSwgc2VlZEFzc2V0IH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgeyBwdXNoSGlzdG9yeSwgcmVzZXRIaXN0b3J5IH0gZnJvbSBcIi4vaGlzdG9yeVwiO1xuaW1wb3J0IHsgZW5xdWV1ZSwgbmV3Q2xpZW50SWQgfSBmcm9tIFwiLi9wZXJzaXN0XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVwZGF0ZURvYyB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmV4cG9ydCB0eXBlIEltcG9ydGVkSW1hZ2UgPSB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1QYXRjaCA9IFBhcnRpYWw8TGF5ZXJUcmFuc2Zvcm0+O1xuXG5jb25zdCBUUkFOU0lFTlRfUEVSU0lTVF9NUyA9IDMwMDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQcm9qZWN0IGxpZmVjeWNsZVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3QobWV0YTogUHJvamVjdE1ldGEsIHJvd3M6IExheWVyUm93W10pOiB2b2lkIHtcbiAgY29uc3QgYnlJZCA9IG5ldyBNYXAocm93cy5tYXAoKHJvdykgPT4gW3Jvdy5pZCwgcm93XSkpO1xuICBjb25zdCBsYXllcnM6IExheWVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChyb3c6IExheWVyUm93KSA9PiB7XG4gICAgbGF5ZXJzLnB1c2goe1xuICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgIGFzc2V0SWQ6IHJvdy5hc3NldElkLFxuICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAuLi5kZWNvZGVUcmFuc2Zvcm0ocm93LmRhdGEpXG4gICAgfSk7XG4gIH07XG4gIGZvciAoY29uc3QgaWQgb2YgbWV0YS5sYXllck9yZGVyKSB7XG4gICAgY29uc3Qgcm93ID0gYnlJZC5nZXQoaWQpO1xuICAgIGlmIChyb3cpIHtcbiAgICAgIHB1c2gocm93KTtcbiAgICAgIGJ5SWQuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCByb3cgb2YgYnlJZC52YWx1ZXMoKSkgcHVzaChyb3cpO1xuXG4gIHNldFN0YXRlKHtcbiAgICBkb2M6IHsgaWQ6IG1ldGEuaWQsIG5hbWU6IG1ldGEubmFtZSwgd2lkdGg6IG1ldGEud2lkdGgsIGhlaWdodDogbWV0YS5oZWlnaHQsIGxheWVycyB9LFxuICAgIHNlbGVjdGlvbjogW10sXG4gICAgc2F2ZUVycm9yOiBudWxsXG4gIH0pO1xuICByZXNldEhpc3RvcnkoKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdCgpOiB2b2lkIHtcbiAgc2V0U3RhdGUoeyBkb2M6IG51bGwsIHNlbGVjdGlvbjogW10sIHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCwgc25hcEd1aWRlczogbnVsbCwgYmxlbmRQcmV2aWV3OiBudWxsLCB0ZXh0RWRpdGluZzogbnVsbCB9KTtcbiAgcmVzZXRIaXN0b3J5KCk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VsZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3Rpb24oaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IHNlbGVjdGlvbjogaWRzIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlU2VsZWN0ZWQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5zZWxlY3Rpb247XG4gIHNldFNlbGVjdGlvbihjdXJyZW50LmluY2x1ZGVzKGlkKSA/IGN1cnJlbnQuZmlsdGVyKChzKSA9PiBzICE9PSBpZCkgOiBbLi4uY3VycmVudCwgaWRdKTtcbn1cblxuZnVuY3Rpb24gcHJ1bmVTZWxlY3Rpb24ocmVtb3ZlZDogU2V0PHN0cmluZz4pOiB2b2lkIHtcbiAgc2V0U3RhdGUoeyBzZWxlY3Rpb246IGdldFN0YXRlKCkuc2VsZWN0aW9uLmZpbHRlcigoaWQpID0+ICFyZW1vdmVkLmhhcyhpZCkpIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRyYW5zZm9ybSBlZGl0c1xuXG5mdW5jdGlvbiBwYXRjaERvY0xheWVycyhwYXRjaGVzOiBSZWFkb25seU1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPik6IHZvaWQge1xuICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAuLi5kb2MsXG4gICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IHBhdGNoID0gcGF0Y2hlcy5nZXQobGF5ZXIuaWQpO1xuICAgICAgcmV0dXJuIHBhdGNoID8geyAuLi5sYXllciwgLi4ucGF0Y2ggfSA6IGxheWVyO1xuICAgIH0pXG4gIH0pKTtcbn1cblxuY29uc3QgdHJhbnNpZW50VGltZXJzID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuZnVuY3Rpb24gcGVyc2lzdExheWVyTm93KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgdGltZXIgPSB0cmFuc2llbnRUaW1lcnMuZ2V0KGlkKTtcbiAgaWYgKHRpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRyYW5zaWVudFRpbWVycy5kZWxldGUoaWQpO1xuICB9XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllcikgfSk7XG59XG5cbmZ1bmN0aW9uIHBlcnNpc3RMYXllclRocm90dGxlZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGlmICh0cmFuc2llbnRUaW1lcnMuaGFzKGlkKSkgcmV0dXJuO1xuICB0cmFuc2llbnRUaW1lcnMuc2V0KFxuICAgIGlkLFxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyYW5zaWVudFRpbWVycy5kZWxldGUoaWQpO1xuICAgICAgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgICB9LCBUUkFOU0lFTlRfUEVSU0lTVF9NUylcbiAgKTtcbn1cblxuLyoqIEhpZ2gtZnJlcXVlbmN5IGdlc3R1cmUgdXBkYXRlczogbG9jYWwgYXBwbHkgKyB0aHJvdHRsZWQgcGVyc2lzdCwgbm8gaGlzdG9yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRyYW5zaWVudChwYXRjaGVzOiBSZWFkb25seU1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPik6IHZvaWQge1xuICBwYXRjaERvY0xheWVycyhwYXRjaGVzKTtcbiAgZm9yIChjb25zdCBpZCBvZiBwYXRjaGVzLmtleXMoKSkgcGVyc2lzdExheWVyVGhyb3R0bGVkKGlkKTtcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtQ2hhbmdlID0geyBpZDogc3RyaW5nOyBiZWZvcmU6IFRyYW5zZm9ybVBhdGNoOyBhZnRlcjogVHJhbnNmb3JtUGF0Y2ggfTtcblxuZnVuY3Rpb24gYXBwbHlBbmRQZXJzaXN0KGVudHJpZXM6IEFycmF5PHsgaWQ6IHN0cmluZzsgcGF0Y2g6IFRyYW5zZm9ybVBhdGNoIH0+KTogdm9pZCB7XG4gIHBhdGNoRG9jTGF5ZXJzKG5ldyBNYXAoZW50cmllcy5tYXAoKGUpID0+IFtlLmlkLCBlLnBhdGNoXSkpKTtcbiAgZm9yIChjb25zdCB7IGlkIH0gb2YgZW50cmllcykgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuLyoqIEZpbmFsaXplIGFuIGVkaXQ6IGFwcGx5IHRoZSBlbmQgc3RhdGUsIHBlcnNpc3Qgbm93LCBhbmQgcmVjb3JkIGhpc3RvcnkuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0VHJhbnNmb3JtcyhsYWJlbDogc3RyaW5nLCBjaGFuZ2VzOiBUcmFuc2Zvcm1DaGFuZ2VbXSk6IHZvaWQge1xuICBjb25zdCByZWFsID0gY2hhbmdlcy5maWx0ZXIoKGMpID0+ICFzaGFsbG93RXF1YWxQYXRjaChjLmJlZm9yZSwgYy5hZnRlcikpO1xuICBpZiAocmVhbC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBOb3RoaW5nIGFjdHVhbGx5IGNoYW5nZWQgKGUuZy4gYSBjbGljayB3aXRob3V0IGEgZHJhZyk7IHN0aWxsIGZsdXNoIGFueVxuICAgIC8vIHRocm90dGxlZCB0cmFuc2llbnQgd3JpdGVzIHNvIGxvY2FsIGFuZCBzZXJ2ZXIgc3RhdGUgbWF0Y2guXG4gICAgZm9yIChjb25zdCB7IGlkIH0gb2YgY2hhbmdlcykgcGVyc2lzdExheWVyTm93KGlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYWZ0ZXIgfSkpKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsLFxuICAgIHVuZG86ICgpID0+IGFwcGx5QW5kUGVyc2lzdChyZWFsLm1hcCgoYykgPT4gKHsgaWQ6IGMuaWQsIHBhdGNoOiBjLmJlZm9yZSB9KSkpLFxuICAgIHJlZG86ICgpID0+IGFwcGx5QW5kUGVyc2lzdChyZWFsLm1hcCgoYykgPT4gKHsgaWQ6IGMuaWQsIHBhdGNoOiBjLmFmdGVyIH0pKSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbFBhdGNoKGE6IFRyYW5zZm9ybVBhdGNoLCBiOiBUcmFuc2Zvcm1QYXRjaCk6IGJvb2xlYW4ge1xuICBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoYSksIC4uLk9iamVjdC5rZXlzKGIpXSBhcyBBcnJheTxrZXlvZiBMYXllclRyYW5zZm9ybT4pO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKCFPYmplY3QuaXMoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBudWRnZVNlbGVjdGlvbihkeDogbnVtYmVyLCBkeTogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgY2hhbmdlczogVHJhbnNmb3JtQ2hhbmdlW10gPSBbXTtcbiAgZm9yIChjb25zdCBsYXllciBvZiBkb2MubGF5ZXJzKSB7XG4gICAgaWYgKHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpIHtcbiAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgYmVmb3JlOiB7IHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSxcbiAgICAgICAgYWZ0ZXI6IHsgeDogbGF5ZXIueCArIGR4LCB5OiBsYXllci55ICsgZHkgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNvbW1pdFRyYW5zZm9ybXMoXCJOdWRnZVwiLCBjaGFuZ2VzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVZpc2libGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gaWQpO1xuICBpZiAoIWxheWVyKSByZXR1cm47XG4gIGNvbW1pdFRyYW5zZm9ybXMobGF5ZXIudmlzaWJsZSA/IFwiSGlkZSBsYXllclwiIDogXCJTaG93IGxheWVyXCIsIFtcbiAgICB7IGlkLCBiZWZvcmU6IHsgdmlzaWJsZTogbGF5ZXIudmlzaWJsZSB9LCBhZnRlcjogeyB2aXNpYmxlOiAhbGF5ZXIudmlzaWJsZSB9IH1cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCgpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29tbWl0VHJhbnNmb3JtcyhcIkZsaXAgaG9yaXpvbnRhbFwiLCBkb2MubGF5ZXJzXG4gICAgLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpXG4gICAgLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgYmVmb3JlOiB7IGZsaXBYOiBsYXllci5mbGlwWCB9LCBhZnRlcjogeyBmbGlwWDogIWxheWVyLmZsaXBYIH0gfSkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbkJsZW5kTW9kZShibGVuZE1vZGU6IEJsZW5kTW9kZSk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb21taXRUcmFuc2Zvcm1zKFwiQmxlbmQgbW9kZVwiLCBkb2MubGF5ZXJzXG4gICAgLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpXG4gICAgLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgYmVmb3JlOiB7IGJsZW5kTW9kZTogbGF5ZXIuYmxlbmRNb2RlIH0sIGFmdGVyOiB7IGJsZW5kTW9kZSB9IH0pKSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU3RydWN0dXJhbCBlZGl0cyAoYWRkIC8gZGVsZXRlIC8gZHVwbGljYXRlIC8gcmVvcmRlcilcblxudHlwZSBQbGFjZWRMYXllciA9IHsgbGF5ZXI6IExheWVyOyBpbmRleDogbnVtYmVyIH07XG5cbi8qKiBJbnNlcnQgbGF5ZXJzIGFuZCBlbnF1ZXVlIHRoZWlyIGNyZWF0aW9uLiBObyBoaXN0b3J5IFx1MjAxNCBjYWxsZXJzIHJlY29yZCBpdC4gKi9cbmZ1bmN0aW9uIHJhd0luc2VydExheWVycyhpdGVtczogUGxhY2VkTGF5ZXJbXSk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3Qgc29ydGVkID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gIGNvbnN0IGxheWVycyA9IFsuLi5kb2MubGF5ZXJzXTtcbiAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkge1xuICAgIGxheWVycy5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIGxheWVycy5sZW5ndGgpLCAwLCBsYXllcik7XG4gIH1cbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnMgfSkpO1xuXG4gIGxldCBuZWVkc09yZGVyID0gZmFsc2U7XG4gIGZvciAoY29uc3QgeyBsYXllciwgaW5kZXggfSBvZiBzb3J0ZWQpIHtcbiAgICBlbnF1ZXVlKHtcbiAgICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICAgIHByb2plY3RJZDogZG9jLmlkLFxuICAgICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgICAgLy8gRnJlc2gga2V5IHBlciBhdHRlbXB0OiBhIHJlZG8gb2YgdGhlIHNhbWUgbGF5ZXIgaXMgYSBuZXcgaW5zZXJ0LlxuICAgICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgICAgYXNzZXQ6IHsgcmVmOiBsYXllci5hc3NldElkIH1cbiAgICB9KTtcbiAgICBpZiAoaW5kZXggPCBsYXllcnMubGVuZ3RoIC0gMSkgbmVlZHNPcmRlciA9IHRydWU7XG4gIH1cbiAgLy8gVGhlIHNlcnZlciBhcHBlbmRzIG5ldyBsYXllcnM7IHJlc3RvcmUgbWlkLXN0YWNrIHBvc2l0aW9ucyBleHBsaWNpdGx5LlxuICBpZiAobmVlZHNPcmRlcikge1xuICAgIGVucXVldWUoeyBraW5kOiBcInNldE9yZGVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBpZHM6IGxheWVycy5tYXAoKGwpID0+IGwuaWQpIH0pO1xuICB9XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbmZ1bmN0aW9uIHJhd0RlbGV0ZUxheWVycyhpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCByZW1vdmVkID0gbmV3IFNldChpZHMpO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogZC5sYXllcnMuZmlsdGVyKChsKSA9PiAhcmVtb3ZlZC5oYXMobC5pZCkpIH0pKTtcbiAgcHJ1bmVTZWxlY3Rpb24ocmVtb3ZlZCk7XG4gIGZvciAoY29uc3QgaWQgb2YgaWRzKSBlbnF1ZXVlKHsga2luZDogXCJkZWxldGVMYXllclwiLCBpZCB9KTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVBsYWNlbWVudChkb2M6IFByb2plY3REb2MsIGlkczogc3RyaW5nW10pOiBQbGFjZWRMYXllcltdIHtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBbXTtcbiAgZG9jLmxheWVycy5mb3JFYWNoKChsYXllciwgaW5kZXgpID0+IHtcbiAgICBpZiAoaWRzLmluY2x1ZGVzKGxheWVyLmlkKSkgaXRlbXMucHVzaCh7IGxheWVyLCBpbmRleCB9KTtcbiAgfSk7XG4gIHJldHVybiBpdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBpdGVtcyA9IGNhcHR1cmVQbGFjZW1lbnQoZG9jLCBzZWxlY3Rpb24pO1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIHJhd0RlbGV0ZUxheWVycyhpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiRGVsZXRlIGxheWVyXCIsXG4gICAgdW5kbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH0sXG4gICAgcmVkbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcylcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVTZWxlY3Rpb24oKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3Qgc291cmNlID0gY2FwdHVyZVBsYWNlbWVudChkb2MsIHNlbGVjdGlvbik7XG4gIGlmIChzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zOiBQbGFjZWRMYXllcltdID0gc291cmNlLm1hcCgoeyBsYXllciB9LCBpKSA9PiAoe1xuICAgIGxheWVyOiB7XG4gICAgICAuLi5sYXllcixcbiAgICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgICAgbmFtZTogYCR7bGF5ZXIubmFtZX0gY29weWAsXG4gICAgICB4OiBsYXllci54ICsgMjAsXG4gICAgICB5OiBsYXllci55ICsgMjBcbiAgICB9LFxuICAgIC8vIFBsYWNlIGR1cGxpY2F0ZXMgdG9nZXRoZXIgYWJvdmUgdGhlIHRvcG1vc3Qgc291cmNlIGxheWVyLlxuICAgIGluZGV4OiBzb3VyY2Vbc291cmNlLmxlbmd0aCAtIDFdLmluZGV4ICsgMSArIGlcbiAgfSkpO1xuICBjb25zdCBpZHMgPSBpdGVtcy5tYXAoKGkpID0+IGkubGF5ZXIuaWQpO1xuICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkR1cGxpY2F0ZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIHJlZG86ICgpID0+IHtcbiAgICAgIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gICAgICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5sZXQgY2xpcGJvYXJkOiBMYXllcltdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5U2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjbGlwYm9hcmQgPSBkb2MubGF5ZXJzLmZpbHRlcigobGF5ZXIpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsYXllci5pZCkpLm1hcCgobGF5ZXIpID0+ICh7IC4uLmxheWVyIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1dFNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29weVNlbGVjdGlvbigpO1xuICBkZWxldGVTZWxlY3Rpb24oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc3RlQ2xpcGJvYXJkKCk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MgfHwgY2xpcGJvYXJkLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBpdGVtcyA9IGNsaXBib2FyZC5tYXAoKGxheWVyLCBpKSA9PiAoe1xuICAgIGxheWVyOiB7IC4uLmxheWVyLCBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSwgbmFtZTogYCR7bGF5ZXIubmFtZX0gY29weWAsIHg6IGxheWVyLnggKyAyMCwgeTogbGF5ZXIueSArIDIwIH0sXG4gICAgaW5kZXg6IGRvYy5sYXllcnMubGVuZ3RoICsgaVxuICB9KSk7XG4gIGNsaXBib2FyZCA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHsgLi4uaXRlbS5sYXllciB9KSk7XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5sYXllci5pZCk7XG4gIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiUGFzdGVcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKSxcbiAgICByZWRvOiAoKSA9PiB7IHJhd0luc2VydExheWVycyhpdGVtcyk7IHNldFNlbGVjdGlvbihpZHMpOyB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1hZ2VMYXllcnMoaW1hZ2VzOiBJbXBvcnRlZEltYWdlW10sIGF0PzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zOiBQbGFjZWRMYXllcltdID0gaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IHtcbiAgICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgICBzZWVkQXNzZXQoYXNzZXRJZCwge1xuICAgICAgc3JjOiBpbWFnZS5zcmMsXG4gICAgICBwYWludFNyYzogaW1hZ2Uuc3JjLFxuICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHRcbiAgICB9KTtcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIChkb2Mud2lkdGggKiAwLjkpIC8gaW1hZ2Uud2lkdGgsIChkb2MuaGVpZ2h0ICogMC45KSAvIGltYWdlLmhlaWdodCk7XG4gICAgY29uc3QgdyA9IE1hdGgubWF4KDEsIGltYWdlLndpZHRoICogc2NhbGUpO1xuICAgIGNvbnN0IGggPSBNYXRoLm1heCgxLCBpbWFnZS5oZWlnaHQgKiBzY2FsZSk7XG4gICAgY29uc3QgY3ggPSAoYXQ/LnggPz8gZG9jLndpZHRoIC8gMikgKyBpICogMjQ7XG4gICAgY29uc3QgY3kgPSAoYXQ/LnkgPz8gZG9jLmhlaWdodCAvIDIpICsgaSAqIDI0O1xuICAgIHJldHVybiB7XG4gICAgICBsYXllcjoge1xuICAgICAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSxcbiAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgbmFtZTogaW1hZ2UubmFtZSxcbiAgICAgICAgeDogY3ggLSB3IC8gMixcbiAgICAgICAgeTogY3kgLSBoIC8gMixcbiAgICAgICAgdyxcbiAgICAgICAgaCxcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGZsaXBYOiBmYWxzZSxcbiAgICAgICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gICAgICB9LFxuICAgICAgaW5kZXg6IGRvYy5sYXllcnMubGVuZ3RoICsgaVxuICAgIH07XG4gIH0pO1xuXG4gIC8vIE5ldyBhc3NldHMgcmlkZSBhbG9uZyBvbiB0aGUgYWRkTGF5ZXIgb3AgaXRzZWxmLlxuICBjb25zdCBpZHMgPSBpdGVtcy5tYXAoKGkpID0+IGkubGF5ZXIuaWQpO1xuICBjb25zdCBpbnNlcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5pdGVtc10uc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICAgIGNvbnN0IGxheWVycyA9IFsuLi5jdXJyZW50LmxheWVyc107XG4gICAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkgbGF5ZXJzLnNwbGljZShNYXRoLm1pbihpbmRleCwgbGF5ZXJzLmxlbmd0aCksIDAsIGxheWVyKTtcbiAgICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVycyB9KSk7XG4gICAgZm9yIChjb25zdCB7IGxheWVyIH0gb2Ygc29ydGVkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tpdGVtcy5maW5kSW5kZXgoKGl0KSA9PiBpdC5sYXllci5pZCA9PT0gbGF5ZXIuaWQpXTtcbiAgICAgIGVucXVldWUoe1xuICAgICAgICBraW5kOiBcImFkZExheWVyXCIsXG4gICAgICAgIHByb2plY3RJZDogY3VycmVudC5pZCxcbiAgICAgICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgICAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgICAgICBhc3NldDogeyBjbGllbnRJZDogbGF5ZXIuYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG4gIH07XG4gIGluc2VydCgpO1xuICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkFkZCBpbWFnZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIC8vIFJlZG8gcmUtaW5zZXJ0cyBieSBhc3NldCByZWZlcmVuY2U6IHRoZSBhc3NldCBhbHJlYWR5IGV4aXN0cyBieSB0aGVuLlxuICAgIHJlZG86ICgpID0+IHtcbiAgICAgIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gICAgICBzZXRTZWxlY3Rpb24oaWRzKTtcbiAgICB9XG4gIH0pO1xufVxuXG50eXBlIFJhc3RlckJvdW5kcyA9IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKGlkczogc3RyaW5nW10sIGltYWdlOiBJbXBvcnRlZEltYWdlLCBib3VuZHM6IFJhc3RlckJvdW5kcywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3Qgb2xkSXRlbXMgPSBjYXB0dXJlUGxhY2VtZW50KGRvYywgaWRzKTtcbiAgaWYgKG9sZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLCBhc3NldElkLCBuYW1lOiBpbWFnZS5uYW1lLFxuICAgIC4uLmJvdW5kcywgcm90YXRpb246IDAsIG9wYWNpdHk6IDEsIHZpc2libGU6IHRydWUsIGZsaXBYOiBmYWxzZSwgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIGNvbnN0IG5ld0l0ZW0gPSB7IGxheWVyLCBpbmRleCB9O1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcblxuICByYXdEZWxldGVMYXllcnMoaWRzKTtcbiAgdXBkYXRlRG9jKChkKSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzID0gWy4uLmQubGF5ZXJzXTtcbiAgICBsYXllcnMuc3BsaWNlKE1hdGgubWluKGluZGV4LCBsYXllcnMubGVuZ3RoKSwgMCwgbGF5ZXIpO1xuICAgIHJldHVybiB7IC4uLmQsIGxheWVycyB9O1xuICB9KTtcbiAgZW5xdWV1ZSh7XG4gICAga2luZDogXCJhZGRMYXllclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgY2xpZW50SWQ6IGxheWVyLmlkLCBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgIG5hbWU6IGxheWVyLm5hbWUsIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIGVucXVldWUoeyBraW5kOiBcInNldE9yZGVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBpZHM6IGdldFN0YXRlKCkuZG9jPy5sYXllcnMubWFwKChsKSA9PiBsLmlkKSA/PyBbXSB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuXG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogaW1hZ2UubmFtZSxcbiAgICB1bmRvOiAoKSA9PiB7IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKTsgcmF3SW5zZXJ0TGF5ZXJzKG9sZEl0ZW1zKTsgc2V0U2VsZWN0aW9uKGlkcyk7IH0sXG4gICAgcmVkbzogKCkgPT4geyByYXdEZWxldGVMYXllcnMoaWRzKTsgcmF3SW5zZXJ0TGF5ZXJzKFtuZXdJdGVtXSk7IHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTsgfVxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbWJpbmVTZWxlY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbnN0IGxheWVycyA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSAmJiBsYXllci52aXNpYmxlKTtcbiAgaWYgKGxheWVycy5sZW5ndGggPCAyKSByZXR1cm47XG4gIGNvbnN0IGJveGVzID0gbGF5ZXJzLm1hcChsYXllckFhYmIpO1xuICBjb25zdCB4ID0gTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLngpKTtcbiAgY29uc3QgeSA9IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi55KSk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnggKyBiLncpKTtcbiAgY29uc3QgYm90dG9tID0gTWF0aC5tYXgoLi4uYm94ZXMubWFwKChiKSA9PiBiLnkgKyBiLmgpKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwocmlnaHQgLSB4KSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChib3R0b20gLSB5KSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7IGNhbnZhcy53aWR0aCA9IHdpZHRoOyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyBpZiAoIWN0eCkgcmV0dXJuO1xuICBsZXQgaW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W107XG4gIHRyeSB7XG4gICAgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwobGF5ZXJzLm1hcCgobCkgPT4gbG9hZEltYWdlKGwuYXNzZXRJZCkpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvdWxkIG5vdCBsb2FkIGltYWdlIHBpeGVsc1wiO1xuICAgIHdpbmRvdy5hbGVydChgQ291bGQgbm90IGNvbWJpbmUgbGF5ZXJzOiAke21lc3NhZ2V9YCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxheWVycy5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGltYWdlc1tpXTtcbiAgICBjdHguc2F2ZSgpOyBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5OyBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGF5ZXIuYmxlbmRNb2RlIGFzIEdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbjtcbiAgICBjdHgudHJhbnNsYXRlKGxheWVyLnggKyBsYXllci53IC8gMiAtIHgsIGxheWVyLnkgKyBsYXllci5oIC8gMiAtIHkpO1xuICAgIGN0eC5yb3RhdGUobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTsgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgLWxheWVyLncgLyAyLCAtbGF5ZXIuaCAvIDIsIGxheWVyLncsIGxheWVyLmgpOyBjdHgucmVzdG9yZSgpO1xuICB9KTtcbiAgY29uc3QgaW5kZXggPSBNYXRoLm1pbiguLi5kb2MubGF5ZXJzLm1hcCgobCwgaSkgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGwuaWQpID8gaSA6IEluZmluaXR5KSk7XG4gIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKGxheWVycy5tYXAoKGwpID0+IGwuaWQpLCB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGgsIGhlaWdodCwgbmFtZTogXCJDb21iaW5lZCBsYXllcnNcIiB9LCB7IHgsIHksIHc6IHdpZHRoLCBoOiBoZWlnaHQgfSwgaW5kZXgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JvcFNlbGVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiwgY3JvcFJlY3QgfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jIHx8IHNlbGVjdGlvbi5sZW5ndGggIT09IDEgfHwgIWNyb3BSZWN0IHx8IGNyb3BSZWN0LncgPCAyIHx8IGNyb3BSZWN0LmggPCAyKSByZXR1cm47XG4gIGNvbnN0IGxheWVyID0gZG9jLmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBzZWxlY3Rpb25bMF0pO1xuICBpZiAoIWxheWVyKSByZXR1cm47XG4gIGNvbnN0IGJvdW5kcyA9IGxheWVyQWFiYihsYXllcik7XG4gIGNvbnN0IHggPSBNYXRoLm1heChjcm9wUmVjdC54LCBib3VuZHMueCk7XG4gIGNvbnN0IHkgPSBNYXRoLm1heChjcm9wUmVjdC55LCBib3VuZHMueSk7XG4gIGNvbnN0IHJpZ2h0ID0gTWF0aC5taW4oY3JvcFJlY3QueCArIGNyb3BSZWN0LncsIGJvdW5kcy54ICsgYm91bmRzLncpO1xuICBjb25zdCBib3R0b20gPSBNYXRoLm1pbihjcm9wUmVjdC55ICsgY3JvcFJlY3QuaCwgYm91bmRzLnkgKyBib3VuZHMuaCk7XG4gIGlmIChyaWdodCAtIHggPCAyIHx8IGJvdHRvbSAtIHkgPCAyKSB7XG4gICAgd2luZG93LmFsZXJ0KFwiRHJhdyB0aGUgY3JvcCBhcmVhIG92ZXIgdGhlIHNlbGVjdGVkIGxheWVyLlwiKTtcbiAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiBudWxsIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZWN0ID0geyB4LCB5LCB3OiByaWdodCAtIHgsIGg6IGJvdHRvbSAtIHkgfTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHJlY3QudykpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHJlY3QuaCkpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpOyBjYW52YXMud2lkdGggPSB3aWR0aDsgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTsgaWYgKCFjdHgpIHJldHVybjtcbiAgbGV0IGltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgdHJ5IHtcbiAgICBpbWcgPSBhd2FpdCBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJDb3VsZCBub3QgbG9hZCBpbWFnZSBwaXhlbHNcIjtcbiAgICB3aW5kb3cuYWxlcnQoYENvdWxkIG5vdCBjcm9wIGxheWVyOiAke21lc3NhZ2V9YCk7XG4gICAgc2V0U3RhdGUoeyBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY3R4Lmdsb2JhbEFscGhhID0gbGF5ZXIub3BhY2l0eTtcbiAgY3R4LnRyYW5zbGF0ZShsYXllci54ICsgbGF5ZXIudyAvIDIgLSByZWN0LngsIGxheWVyLnkgKyBsYXllci5oIC8gMiAtIHJlY3QueSk7XG4gIGN0eC5yb3RhdGUobGF5ZXIucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTsgY3R4LnNjYWxlKGxheWVyLmZsaXBYID8gLTEgOiAxLCAxKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIC1sYXllci53IC8gMiwgLWxheWVyLmggLyAyLCBsYXllci53LCBsYXllci5oKTtcbiAgY29uc3QgaW5kZXggPSBkb2MubGF5ZXJzLmZpbmRJbmRleCgobCkgPT4gbC5pZCA9PT0gbGF5ZXIuaWQpO1xuICByZXBsYWNlTGF5ZXJzV2l0aFJhc3RlcihbbGF5ZXIuaWRdLCB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGgsIGhlaWdodCwgbmFtZTogYCR7bGF5ZXIubmFtZX0gY3JvcHBlZGAgfSwgcmVjdCwgaW5kZXgpO1xuICBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3BDYW52YXMoKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBjcm9wUmVjdCB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgIWNyb3BSZWN0IHx8IGNyb3BSZWN0LncgPCAyIHx8IGNyb3BSZWN0LmggPCAyKSByZXR1cm47XG4gIGNvbnN0IHggPSBNYXRoLnJvdW5kKGNyb3BSZWN0LngpO1xuICBjb25zdCB5ID0gTWF0aC5yb3VuZChjcm9wUmVjdC55KTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLm1pbihNQVhfUFJPSkVDVF9ESU0sIE1hdGgucm91bmQoY3JvcFJlY3QudykpKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oTUFYX1BST0pFQ1RfRElNLCBNYXRoLnJvdW5kKGNyb3BSZWN0LmgpKSk7XG4gIGNvbnN0IGJlZm9yZSA9IHtcbiAgICB3aWR0aDogZG9jLndpZHRoLFxuICAgIGhlaWdodDogZG9jLmhlaWdodCxcbiAgICBwb3NpdGlvbnM6IGRvYy5sYXllcnMubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCB4OiBsYXllci54LCB5OiBsYXllci55IH0pKVxuICB9O1xuICBjb25zdCBhZnRlciA9IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgcG9zaXRpb25zOiBiZWZvcmUucG9zaXRpb25zLm1hcCgobGF5ZXIpID0+ICh7IGlkOiBsYXllci5pZCwgeDogbGF5ZXIueCAtIHgsIHk6IGxheWVyLnkgLSB5IH0pKVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5ID0gKHNuYXBzaG90OiB0eXBlb2YgYmVmb3JlKSA9PiB7XG4gICAgdXBkYXRlRG9jKChjdXJyZW50KSA9PiAoe1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIHdpZHRoOiBzbmFwc2hvdC53aWR0aCxcbiAgICAgIGhlaWdodDogc25hcHNob3QuaGVpZ2h0LFxuICAgICAgbGF5ZXJzOiBjdXJyZW50LmxheWVycy5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gc25hcHNob3QucG9zaXRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVyLmlkKTtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uID8geyAuLi5sYXllciwgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSB9IDogbGF5ZXI7XG4gICAgICB9KVxuICAgIH0pKTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJyZXNpemVQcm9qZWN0XCIsIGlkOiBkb2MuaWQsIHdpZHRoOiBzbmFwc2hvdC53aWR0aCwgaGVpZ2h0OiBzbmFwc2hvdC5oZWlnaHQgfSk7XG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBzbmFwc2hvdC5wb3NpdGlvbnMpIHBlcnNpc3RMYXllck5vdyhwb3NpdGlvbi5pZCk7XG4gICAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgfTtcblxuICBhcHBseShhZnRlcik7XG4gIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsIH0pO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsOiBcIkNyb3AgY2FudmFzXCIsIHVuZG86ICgpID0+IGFwcGx5KGJlZm9yZSksIHJlZG86ICgpID0+IGFwcGx5KGFmdGVyKSB9KTtcbn1cblxuZnVuY3Rpb24gYmxhbmtMYXllckFzc2V0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogeyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIHdpZHRoKTtcbiAgY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIGhlaWdodCk7XG4gIHJldHVybiB7IHNyYzogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG59XG5cbmZ1bmN0aW9uIGFwcGx5TGF5ZXJSYXN0ZXIoXG4gIGxheWVySWQ6IHN0cmluZyxcbiAgc3JjOiBzdHJpbmcsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBjbGVhclRleHQ6IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjLCBwYWludFNyYzogc3JjLCB3aWR0aCwgaGVpZ2h0IH0pO1xuICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAuLi5kb2MsXG4gICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgIT09IGxheWVySWQpIHJldHVybiBpdGVtO1xuICAgICAgaWYgKCFjbGVhclRleHQpIHJldHVybiB7IC4uLml0ZW0sIGFzc2V0SWQgfTtcbiAgICAgIGNvbnN0IHsgdGV4dDogX3RleHQsIC4uLnJlc3QgfSA9IGl0ZW07XG4gICAgICByZXR1cm4geyAuLi5yZXN0LCBhc3NldElkIH07XG4gICAgfSlcbiAgfSkpO1xuICBjb25zdCB1cGRhdGVkID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKHVwZGF0ZWQpIGVucXVldWUoeyBraW5kOiBcInVwZGF0ZUxheWVyXCIsIGlkOiBsYXllcklkLCBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0odXBkYXRlZCkgfSk7XG4gIGVucXVldWUoeyBraW5kOiBcInJlcGxhY2VMYXllckFzc2V0XCIsIGlkOiBsYXllcklkLCBjbGllbnRBc3NldElkOiBhc3NldElkLCBzcmMsIHdpZHRoLCBoZWlnaHQgfSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbi8qKiBUcmFuc3BhcmVudCBkb2N1bWVudC1zaXplZCBsYXllciBhdCB0aGUgdG9wIG9mIHRoZSBzdGFjay4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCbGFua0xheWVyKCk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBjb25zdCBpbWFnZSA9IGJsYW5rTGF5ZXJBc3NldChkb2Mud2lkdGgsIGRvYy5oZWlnaHQpO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjOiBpbWFnZS5zcmMsIHBhaW50U3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIGNvbnN0IGxheWVyOiBMYXllciA9IHtcbiAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSxcbiAgICBhc3NldElkLFxuICAgIG5hbWU6IGBMYXllciAke2RvYy5sYXllcnMubGVuZ3RoICsgMX1gLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3OiBkb2Mud2lkdGgsXG4gICAgaDogZG9jLmhlaWdodCxcbiAgICByb3RhdGlvbjogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogXCJub3JtYWxcIlxuICB9O1xuICBjb25zdCBpbmRleCA9IGRvYy5sYXllcnMubGVuZ3RoO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogWy4uLmQubGF5ZXJzLCBsYXllcl0gfSkpO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsXG4gICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgIGFzc2V0OiB7IGNsaWVudElkOiBhc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJOZXcgbGF5ZXJcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSksXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKFt7IGxheWVyLCBpbmRleCB9XSk7XG4gICAgICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxheWVyLmlkO1xufVxuXG4vKiogRW5zdXJlIGEgcGFpbnRhYmxlIGxheWVyIGV4aXN0czsgY3JlYXRlcyBhIGJsYW5rIG9uZSAobm8gaGlzdG9yeSkgd2hlbiB0aGUgZG9jIGlzIGVtcHR5LiAqL1xuZnVuY3Rpb24gcGFpbnRUYXJnZXRMYXllcigpOiB7IGxheWVyOiBMYXllcjsgY3JlYXRlZDogYm9vbGVhbiB9IHwgbnVsbCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc2VsZWN0ZWRJZCA9IHNlbGVjdGlvbltzZWxlY3Rpb24ubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRJZCA/IGRvYy5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3RlZElkKSA6IHVuZGVmaW5lZDtcbiAgaWYgKHNlbGVjdGVkKSByZXR1cm4geyBsYXllcjogc2VsZWN0ZWQsIGNyZWF0ZWQ6IGZhbHNlIH07XG4gIGlmIChkb2MubGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB0b3AgPSBkb2MubGF5ZXJzW2RvYy5sYXllcnMubGVuZ3RoIC0gMV07XG4gICAgc2V0U2VsZWN0aW9uKFt0b3AuaWRdKTtcbiAgICByZXR1cm4geyBsYXllcjogdG9wLCBjcmVhdGVkOiBmYWxzZSB9O1xuICB9XG5cbiAgY29uc3QgaW1hZ2UgPSBibGFua0xheWVyQXNzZXQoZG9jLndpZHRoLCBkb2MuaGVpZ2h0KTtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksXG4gICAgYXNzZXRJZCxcbiAgICBuYW1lOiBcIkxheWVyIDFcIixcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgdzogZG9jLndpZHRoLFxuICAgIGg6IGRvYy5oZWlnaHQsXG4gICAgcm90YXRpb246IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgfTtcbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnM6IFsuLi5kLmxheWVycywgbGF5ZXJdIH0pKTtcbiAgZW5xdWV1ZSh7XG4gICAga2luZDogXCJhZGRMYXllclwiLFxuICAgIHByb2plY3RJZDogZG9jLmlkLFxuICAgIGNsaWVudElkOiBsYXllci5pZCxcbiAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICByZXR1cm4geyBsYXllciwgY3JlYXRlZDogdHJ1ZSB9O1xufVxuXG5mdW5jdGlvbiBsb2FkRGF0YVVybChzcmM6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlY29kZSBpbWFnZVwiKSk7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgfSk7XG59XG5cbi8qKiBDb21wb3NpdGUgYSBkb2N1bWVudC1zcGFjZSBicnVzaCBzdHJva2Ugb250byB0aGUgY3VycmVudCBsYXllci4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYWludEJydXNoU3Ryb2tlKHNyYzogc3RyaW5nLCBfd2lkdGg6IG51bWJlciwgX2hlaWdodDogbnVtYmVyLCBvcGFjaXR5ID0gMSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB0YXJnZXQgPSBwYWludFRhcmdldExheWVyKCk7XG4gIGlmICghdGFyZ2V0KSByZXR1cm47XG4gIGNvbnN0IHsgbGF5ZXIsIGNyZWF0ZWQgfSA9IHRhcmdldDtcblxuICBsZXQgYmFzZTogSFRNTEltYWdlRWxlbWVudDtcbiAgbGV0IHN0cm9rZTogSFRNTEltYWdlRWxlbWVudDtcbiAgdHJ5IHtcbiAgICBbYmFzZSwgc3Ryb2tlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCksIGxvYWREYXRhVXJsKHNyYyldKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvdWxkIG5vdCBsb2FkIGxheWVyIHBpeGVsc1wiO1xuICAgIHdpbmRvdy5hbGVydChgQ291bGQgbm90IHBhaW50OiAke21lc3NhZ2V9YCk7XG4gICAgaWYgKGNyZWF0ZWQpIHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIGJhc2UubmF0dXJhbFdpZHRoKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgYmFzZS5uYXR1cmFsSGVpZ2h0KTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB7XG4gICAgaWYgKGNyZWF0ZWQpIHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdHguZHJhd0ltYWdlKGJhc2UsIDAsIDApO1xuICBjb25zdCBjYWNoZWQgPSBnZXRBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICBjb25zdCBiZWZvcmVTcmMgPSBjYWNoZWQ/LnBhaW50U3JjPy5zdGFydHNXaXRoKFwiZGF0YTpcIilcbiAgICA/IGNhY2hlZC5wYWludFNyY1xuICAgIDogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgY29uc3QgYmVmb3JlVGV4dCA9IGxheWVyLnRleHQgPyB7IC4uLmxheWVyLnRleHQgfSA6IHVuZGVmaW5lZDtcblxuICBjdHguc2F2ZSgpO1xuICBjdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xuICBjdHgudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gIGN0eC5zY2FsZSh3aWR0aCAvIE1hdGgubWF4KDEsIGxheWVyLncpLCBoZWlnaHQgLyBNYXRoLm1heCgxLCBsYXllci5oKSk7XG4gIGlmIChsYXllci5mbGlwWCkgY3R4LnNjYWxlKC0xLCAxKTtcbiAgY3R4LnJvdGF0ZSgoLWxheWVyLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xuICBjdHgudHJhbnNsYXRlKC0obGF5ZXIueCArIGxheWVyLncgLyAyKSwgLShsYXllci55ICsgbGF5ZXIuaCAvIDIpKTtcbiAgY3R4LmRyYXdJbWFnZShzdHJva2UsIDAsIDApO1xuICBjdHgucmVzdG9yZSgpO1xuXG4gIGNvbnN0IGFmdGVyU3JjID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgY29uc3QgY2xlYXJUZXh0ID0gQm9vbGVhbihsYXllci50ZXh0KTtcbiAgYXBwbHlMYXllclJhc3RlcihsYXllci5pZCwgYWZ0ZXJTcmMsIHdpZHRoLCBoZWlnaHQsIGNsZWFyVGV4dCk7XG5cbiAgaWYgKGNyZWF0ZWQpIHtcbiAgICBjb25zdCBmaW5hbExheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllci5pZCk7XG4gICAgaWYgKCFmaW5hbExheWVyKSByZXR1cm47XG4gICAgcHVzaEhpc3Rvcnkoe1xuICAgICAgbGFiZWw6IFwiQnJ1c2ggc3Ryb2tlXCIsXG4gICAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSksXG4gICAgICByZWRvOiAoKSA9PiB7XG4gICAgICAgIHJhd0luc2VydExheWVycyhbeyBsYXllcjogZmluYWxMYXllciwgaW5kZXg6IDAgfV0pO1xuICAgICAgICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkJydXNoIHN0cm9rZVwiLFxuICAgIHVuZG86ICgpID0+IHtcbiAgICAgIGFwcGx5TGF5ZXJSYXN0ZXIobGF5ZXIuaWQsIGJlZm9yZVNyYywgd2lkdGgsIGhlaWdodCwgZmFsc2UpO1xuICAgICAgaWYgKGJlZm9yZVRleHQpIHtcbiAgICAgICAgdXBkYXRlRG9jKChkb2MpID0+ICh7XG4gICAgICAgICAgLi4uZG9jLFxuICAgICAgICAgIGxheWVyczogZG9jLmxheWVycy5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSBsYXllci5pZCA/IHsgLi4uaXRlbSwgdGV4dDogYmVmb3JlVGV4dCB9IDogaXRlbSkpXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXIuaWQpO1xuICAgICAgICBpZiAodXBkYXRlZCkgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQ6IGxheWVyLmlkLCBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0odXBkYXRlZCkgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWRvOiAoKSA9PiBhcHBseUxheWVyUmFzdGVyKGxheWVyLmlkLCBhZnRlclNyYywgd2lkdGgsIGhlaWdodCwgY2xlYXJUZXh0KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGV4dFJhc3Rlcih0ZXh0OiBUZXh0TGF5ZXJEYXRhKTogeyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gIGNvbnN0IGxpbmVzID0gKHRleHQuY29udGVudCB8fCBcIlRleHRcIikucmVwbGFjZSgvXFxyL2csIFwiXCIpLnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBtZWFzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghbWVhc3VyZSkgcmV0dXJuIHsgc3JjOiBcIlwiLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gIG1lYXN1cmUuZm9udCA9IGAke3RleHQuZm9udFdlaWdodH0gJHt0ZXh0LmZvbnRTaXplfXB4ICR7dGV4dC5mb250RmFtaWx5fWA7XG4gIGNvbnN0IHBhZGRpbmcgPSBNYXRoLm1heCg0LCBNYXRoLmNlaWwodGV4dC5mb250U2l6ZSAqIDAuMTQpKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoTWF0aC5tYXgoLi4ubGluZXMubWFwKChsaW5lKSA9PiBtZWFzdXJlLm1lYXN1cmVUZXh0KGxpbmUgfHwgXCIgXCIpLndpZHRoKSkgKyBwYWRkaW5nICogMikpO1xuICBjb25zdCBsaW5lUHggPSB0ZXh0LmZvbnRTaXplICogdGV4dC5saW5lSGVpZ2h0O1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwobGluZXMubGVuZ3RoICogbGluZVB4ICsgcGFkZGluZyAqIDIpKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm4geyBzcmM6IFwiXCIsIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgY3R4LmZvbnQgPSBgJHt0ZXh0LmZvbnRXZWlnaHR9ICR7dGV4dC5mb250U2l6ZX1weCAke3RleHQuZm9udEZhbWlseX1gO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgY3R4LnRleHRBbGlnbiA9IHRleHQuYWxpZ247XG4gIGN0eC5maWxsU3R5bGUgPSB0ZXh0LmNvbG9yO1xuICBjb25zdCB4ID0gdGV4dC5hbGlnbiA9PT0gXCJsZWZ0XCIgPyBwYWRkaW5nIDogdGV4dC5hbGlnbiA9PT0gXCJjZW50ZXJcIiA/IHdpZHRoIC8gMiA6IHdpZHRoIC0gcGFkZGluZztcbiAgbGluZXMuZm9yRWFjaCgobGluZSwgaW5kZXgpID0+IGN0eC5maWxsVGV4dChsaW5lIHx8IFwiIFwiLCB4LCBwYWRkaW5nICsgaW5kZXggKiBsaW5lUHgpKTtcbiAgcmV0dXJuIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aCwgaGVpZ2h0IH07XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRUZXh0RGVmYXVsdHMoKTogVGV4dExheWVyRGF0YSB7XG4gIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBcIlRleHRcIixcbiAgICBmb250RmFtaWx5OiBzdGF0ZS50ZXh0Rm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogc3RhdGUudGV4dEZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHQ6IHN0YXRlLnRleHRGb250V2VpZ2h0LFxuICAgIGFsaWduOiBzdGF0ZS50ZXh0QWxpZ24sXG4gICAgY29sb3I6IHN0YXRlLmZvcmVncm91bmRDb2xvcixcbiAgICBsaW5lSGVpZ2h0OiBzdGF0ZS50ZXh0TGluZUhlaWdodFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGV4dExheWVyKGF0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgdGV4dCA9IGN1cnJlbnRUZXh0RGVmYXVsdHMoKTtcbiAgY29uc3QgaW1hZ2UgPSByZW5kZXJUZXh0UmFzdGVyKHRleHQpO1xuICBpZiAoIWltYWdlLnNyYykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLCBhc3NldElkLCBuYW1lOiBcIlRleHRcIiwgdGV4dDogeyAuLi50ZXh0LCByYXN0ZXJXaWR0aDogaW1hZ2Uud2lkdGgsIHJhc3RlckhlaWdodDogaW1hZ2UuaGVpZ2h0IH0sXG4gICAgeDogYXQueCwgeTogYXQueSwgdzogaW1hZ2Uud2lkdGgsIGg6IGltYWdlLmhlaWdodCxcbiAgICByb3RhdGlvbjogMCwgb3BhY2l0eTogMSwgdmlzaWJsZTogdHJ1ZSwgZmxpcFg6IGZhbHNlLCBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgfTtcbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnM6IFsuLi5kLmxheWVycywgbGF5ZXJdIH0pKTtcbiAgZW5xdWV1ZSh7XG4gICAga2luZDogXCJhZGRMYXllclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgY2xpZW50SWQ6IGxheWVyLmlkLCBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgIG5hbWU6IGxheWVyLm5hbWUsIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIkFkZCB0ZXh0XCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pLFxuICAgIHJlZG86ICgpID0+IHsgcmF3SW5zZXJ0TGF5ZXJzKFt7IGxheWVyLCBpbmRleDogZG9jLmxheWVycy5sZW5ndGggfV0pOyBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7IH1cbiAgfSk7XG4gIHJldHVybiBsYXllci5pZDtcbn1cblxuZnVuY3Rpb24gYXBwbHlUZXh0KGxheWVySWQ6IHN0cmluZywgdGV4dDogVGV4dExheWVyRGF0YSk6IHZvaWQge1xuICBjb25zdCBsYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29uc3QgaW1hZ2UgPSByZW5kZXJUZXh0UmFzdGVyKHRleHQpO1xuICBpZiAoIWltYWdlLnNyYykgcmV0dXJuO1xuICBjb25zdCBjYWNoZWRBc3NldCA9IGdldEFzc2V0RW50cnkobGF5ZXIuYXNzZXRJZCk7XG4gIGNvbnN0IG9sZFJhc3RlcldpZHRoID0gbGF5ZXIudGV4dD8ucmFzdGVyV2lkdGggPz8gY2FjaGVkQXNzZXQ/LndpZHRoID8/IGxheWVyLnc7XG4gIGNvbnN0IG9sZFJhc3RlckhlaWdodCA9IGxheWVyLnRleHQ/LnJhc3RlckhlaWdodCA/PyBjYWNoZWRBc3NldD8uaGVpZ2h0ID8/IGxheWVyLmg7XG4gIGNvbnN0IHNjYWxlWCA9IG9sZFJhc3RlcldpZHRoID4gMCA/IGxheWVyLncgLyBvbGRSYXN0ZXJXaWR0aCA6IDE7XG4gIGNvbnN0IHNjYWxlWSA9IG9sZFJhc3RlckhlaWdodCA+IDAgPyBsYXllci5oIC8gb2xkUmFzdGVySGVpZ2h0IDogMTtcbiAgY29uc3QgcmVuZGVyZWRUZXh0ID0geyAuLi50ZXh0LCByYXN0ZXJXaWR0aDogaW1hZ2Uud2lkdGgsIHJhc3RlckhlaWdodDogaW1hZ2UuaGVpZ2h0IH07XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgdXBkYXRlRG9jKChkb2MpID0+ICh7XG4gICAgLi4uZG9jLFxuICAgIGxheWVyczogZG9jLmxheWVycy5tYXAoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWRcbiAgICAgID8geyAuLi5pdGVtLCBhc3NldElkLCB0ZXh0OiByZW5kZXJlZFRleHQsIHc6IGltYWdlLndpZHRoICogc2NhbGVYLCBoOiBpbWFnZS5oZWlnaHQgKiBzY2FsZVkgfVxuICAgICAgOiBpdGVtKVxuICB9KSk7XG4gIGNvbnN0IHVwZGF0ZWQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAodXBkYXRlZCkgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQ6IGxheWVySWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybSh1cGRhdGVkKSB9KTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwicmVwbGFjZUxheWVyQXNzZXRcIiwgaWQ6IGxheWVySWQsIGNsaWVudEFzc2V0SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGV4dExheWVyKGxheWVySWQ6IHN0cmluZywgcGF0Y2g6IFBhcnRpYWw8VGV4dExheWVyRGF0YT4sIGxhYmVsID0gXCJFZGl0IHRleHRcIik6IHZvaWQge1xuICBjb25zdCBsYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICghbGF5ZXI/LnRleHQpIHJldHVybjtcbiAgY29uc3QgYmVmb3JlID0geyAuLi5sYXllci50ZXh0IH07XG4gIGNvbnN0IGFmdGVyID0geyAuLi5iZWZvcmUsIC4uLnBhdGNoIH07XG4gIGlmIChKU09OLnN0cmluZ2lmeShiZWZvcmUpID09PSBKU09OLnN0cmluZ2lmeShhZnRlcikpIHJldHVybjtcbiAgYXBwbHlUZXh0KGxheWVySWQsIGFmdGVyKTtcbiAgcHVzaEhpc3RvcnkoeyBsYWJlbCwgdW5kbzogKCkgPT4gYXBwbHlUZXh0KGxheWVySWQsIGJlZm9yZSksIHJlZG86ICgpID0+IGFwcGx5VGV4dChsYXllcklkLCBhZnRlcikgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZWdpblRleHRFZGl0aW5nKGxheWVySWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBsYXllciA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICghbGF5ZXI/LnRleHQpIHJldHVybjtcbiAgc2V0U2VsZWN0aW9uKFtsYXllcklkXSk7XG4gIHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IHsgaWQ6IGxheWVySWQsIGRyYWZ0OiBsYXllci50ZXh0LmNvbnRlbnQgfSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmlzaFRleHRFZGl0aW5nKCk6IHZvaWQge1xuICBjb25zdCBlZGl0aW5nID0gZ2V0U3RhdGUoKS50ZXh0RWRpdGluZztcbiAgaWYgKCFlZGl0aW5nKSByZXR1cm47XG4gIHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IG51bGwgfSk7XG4gIHVwZGF0ZVRleHRMYXllcihlZGl0aW5nLmlkLCB7IGNvbnRlbnQ6IGVkaXRpbmcuZHJhZnQgfSwgXCJFZGl0IHRleHRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGF5ZXIoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MgfHwgZnJvbUluZGV4ID09PSB0b0luZGV4KSByZXR1cm47XG4gIGNvbnN0IGJlZm9yZSA9IGRvYy5sYXllcnMubWFwKChsKSA9PiBsLmlkKTtcbiAgY29uc3Qgb3JkZXIgPSBbLi4uYmVmb3JlXTtcbiAgY29uc3QgW21vdmVkXSA9IG9yZGVyLnNwbGljZShmcm9tSW5kZXgsIDEpO1xuICBpZiAobW92ZWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBvcmRlci5zcGxpY2UodG9JbmRleCwgMCwgbW92ZWQpO1xuXG4gIGNvbnN0IGFwcGx5T3JkZXIgPSAoaWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIHVwZGF0ZURvYygoZCkgPT4ge1xuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZC5sYXllcnMubWFwKChsKSA9PiBbbC5pZCwgbF0pKTtcbiAgICAgIGNvbnN0IGxheWVyczogTGF5ZXJbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChpZCk7XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgIGxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgICAgICBieUlkLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxheWVycy5wdXNoKC4uLmJ5SWQudmFsdWVzKCkpO1xuICAgICAgcmV0dXJuIHsgLi4uZCwgbGF5ZXJzIH07XG4gICAgfSk7XG4gICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogWy4uLmlkc10gfSk7XG4gICAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgfTtcblxuICBhcHBseU9yZGVyKG9yZGVyKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIlJlb3JkZXIgbGF5ZXJcIixcbiAgICB1bmRvOiAoKSA9PiBhcHBseU9yZGVyKGJlZm9yZSksXG4gICAgcmVkbzogKCkgPT4gYXBwbHlPcmRlcihvcmRlcilcbiAgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTmFtaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVMYXllcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGNvbnN0IGxheWVyID0gZG9jPy5sYXllcnMuZmluZCgobCkgPT4gbC5pZCA9PT0gaWQpO1xuICBpZiAoIWRvYyB8fCAhbGF5ZXIgfHwgbGF5ZXIubmFtZSA9PT0gbmFtZSkgcmV0dXJuO1xuICBjb25zdCBhcHBseSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdXBkYXRlRG9jKChkKSA9PiAoe1xuICAgICAgLi4uZCxcbiAgICAgIGxheWVyczogZC5sYXllcnMubWFwKChsKSA9PiAobC5pZCA9PT0gaWQgPyB7IC4uLmwsIG5hbWU6IHZhbHVlIH0gOiBsKSlcbiAgICB9KSk7XG4gICAgZW5xdWV1ZSh7IGtpbmQ6IFwicmVuYW1lTGF5ZXJcIiwgaWQsIG5hbWU6IHZhbHVlIH0pO1xuICB9O1xuICBjb25zdCBiZWZvcmUgPSBsYXllci5uYW1lO1xuICBhcHBseShuYW1lKTtcbiAgcHVzaEhpc3RvcnkoeyBsYWJlbDogXCJSZW5hbWUgbGF5ZXJcIiwgdW5kbzogKCkgPT4gYXBwbHkoYmVmb3JlKSwgcmVkbzogKCkgPT4gYXBwbHkobmFtZSkgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MgfHwgZG9jLm5hbWUgPT09IG5hbWUpIHJldHVybjtcbiAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBuYW1lIH0pKTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwicmVuYW1lUHJvamVjdFwiLCBpZDogZG9jLmlkLCBuYW1lIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRodW1ibmFpbHNcblxubGV0IHRodW1iVGltZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICBjbGVhclRpbWVvdXQodGh1bWJUaW1lcik7XG4gIHRodW1iVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gICAgaWYgKCFkb2MpIHJldHVybjtcbiAgICByZW5kZXJUaHVtYihkb2MpXG4gICAgICAudGhlbigodGh1bWIpID0+IHtcbiAgICAgICAgLy8gVGhlIGRvYyBtYXkgaGF2ZSBiZWVuIGNsb3NlZCB3aGlsZSByZW5kZXJpbmcuXG4gICAgICAgIGlmIChnZXRTdGF0ZSgpLmRvYz8uaWQgPT09IGRvYy5pZCkge1xuICAgICAgICAgIGVucXVldWUoeyBraW5kOiBcInNldFRodW1iXCIsIGlkOiBkb2MuaWQsIHRodW1iIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gIH0sIDE1MDApO1xufVxuIiwgIi8vIFZpZXdwb3J0ICh6b29tL3BhbikgaGVscGVycy4gVGhlIGNhbnZhcyBzdGFnZSByZWdpc3RlcnMgaXRzIERPTSBlbGVtZW50IHNvXG4vLyB6b29tIHNob3J0Y3V0cyBhbmQgdG9vbGJhciBidXR0b25zIGNhbiB6b29tIGFib3V0IHRoZSB2aWV3cG9ydCBjZW50ZXIuXG5cbmltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IGNvbnN0IE1JTl9aT09NID0gMC4wNTtcbmV4cG9ydCBjb25zdCBNQVhfWk9PTSA9IDg7XG5jb25zdCBGSVRfUEFERElORyA9IDU2O1xuLyoqIFdoZWVsIHNlbnNpdGl2aXR5IGF0IHpvb209MTsgc2NhbGVzIHVwIHdoZW4gem9vbWVkIG91dC4gKi9cbmNvbnN0IFdIRUVMX1pPT01fU0VOU0lUSVZJVFkgPSAwLjAwNzI7XG5cbmV4cG9ydCBjb25zdCB2aWV3cG9ydEVsOiB7IGN1cnJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCB9ID0geyBjdXJyZW50OiBudWxsIH07XG5cbi8qKiBNdWx0aXBsaWNhdGl2ZSB6b29tIHN0ZXAgXHUyMDE0IGxhcmdlciB3aGVuIHpvb21lZCBvdXQsIGZpbmVyIHdoZW4gem9vbWVkIGluLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHpvb21TdGVwRmFjdG9yKHpvb206IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIDEgKyAwLjI1IC8gTWF0aC5zcXJ0KE1hdGgubWF4KHpvb20sIE1JTl9aT09NKSk7XG59XG5cbi8qKiBXaGVlbCB6b29tIHNlbnNpdGl2aXR5IFx1MjAxNCBzdHJvbmdlciB3aGVuIHpvb21lZCBvdXQuICovXG5leHBvcnQgZnVuY3Rpb24gd2hlZWxab29tU2Vuc2l0aXZpdHkoem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gV0hFRUxfWk9PTV9TRU5TSVRJVklUWSAvIE1hdGguc3FydChNYXRoLm1heCh6b29tLCBNSU5fWk9PTSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NyZWVuVG9Xb3JsZChcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyLFxuKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgcmVjdCA9IGVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA/PyB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IChjbGllbnRYIC0gcmVjdC5sZWZ0IC0gdmlldy5wYW5YKSAvIHZpZXcuem9vbSxcbiAgICAgICAgeTogKGNsaWVudFkgLSByZWN0LnRvcCAtIHZpZXcucGFuWSkgLyB2aWV3Lnpvb20sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHpvb21BdENsaWVudChcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyLFxuICAgIG5leHRab29tOiBudW1iZXIsXG4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB6b29tID0gY2xhbXAobmV4dFpvb20sIE1JTl9aT09NLCBNQVhfWk9PTSk7XG4gICAgY29uc3Qgd3ggPSAoY2xpZW50WCAtIHJlY3QubGVmdCAtIHZpZXcucGFuWCkgLyB2aWV3Lnpvb207XG4gICAgY29uc3Qgd3kgPSAoY2xpZW50WSAtIHJlY3QudG9wIC0gdmlldy5wYW5ZKSAvIHZpZXcuem9vbTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICBwYW5YOiBjbGllbnRYIC0gcmVjdC5sZWZ0IC0gd3ggKiB6b29tLFxuICAgICAgICAgICAgcGFuWTogY2xpZW50WSAtIHJlY3QudG9wIC0gd3kgKiB6b29tLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGVQYW4ocGFuWDogbnVtYmVyLCBwYW5ZOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHZpZXcgfSA9IGdldFN0YXRlKCk7XG4gICAgc2V0U3RhdGUoeyB2aWV3OiB7IC4uLnZpZXcsIHBhblgsIHBhblkgfSB9KTtcbn1cblxuLyoqIFpvb20gaW4gKGBkaXJlY3Rpb24gPiAwYCkgb3Igb3V0IChgZGlyZWN0aW9uIDwgMGApIGFib3V0IHRoZSB2aWV3cG9ydCBjZW50ZXIuICovXG5leHBvcnQgZnVuY3Rpb24gem9vbUJ5KGRpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB2aWV3cG9ydEVsLmN1cnJlbnQ7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB6b29tID0gZ2V0U3RhdGUoKS52aWV3Lnpvb207XG4gICAgY29uc3Qgc3RlcCA9IHpvb21TdGVwRmFjdG9yKHpvb20pO1xuICAgIGNvbnN0IGZhY3RvciA9IGRpcmVjdGlvbiA+IDAgPyBzdGVwIDogMSAvIHN0ZXA7XG4gICAgem9vbUF0Q2xpZW50KFxuICAgICAgICByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMixcbiAgICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIsXG4gICAgICAgIHpvb20gKiBmYWN0b3IsXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdERvYygpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgICBpZiAoIWVsIHx8ICFkb2MpIHJldHVybjtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgem9vbSA9IGNsYW1wKFxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgIChyZWN0LndpZHRoIC0gRklUX1BBRERJTkcgKiAyKSAvIGRvYy53aWR0aCxcbiAgICAgICAgICAgIChyZWN0LmhlaWdodCAtIEZJVF9QQURESU5HICogMikgLyBkb2MuaGVpZ2h0LFxuICAgICAgICApLFxuICAgICAgICBNSU5fWk9PTSxcbiAgICAgICAgTUFYX1pPT00sXG4gICAgKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICBwYW5YOiAocmVjdC53aWR0aCAtIGRvYy53aWR0aCAqIHpvb20pIC8gMixcbiAgICAgICAgICAgIHBhblk6IChyZWN0LmhlaWdodCAtIGRvYy5oZWlnaHQgKiB6b29tKSAvIDIsXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Rml0KCk6IHZvaWQge1xuICAgIHNldFN0YXRlKHsgZml0VmVyc2lvbjogZ2V0U3RhdGUoKS5maXRWZXJzaW9uICsgMSB9KTtcbn1cbiIsICIvLyBJbXBvcnRpbmcgaW1hZ2VzIGZyb20gZmlsZXM6IGRlY29kZSwgZG93bnNjYWxlIG92ZXJzaXplZCBpbWFnZXMgKGRhdGEgVVJMc1xuLy8gYXJlIHRoZSB1cGxvYWQgd2lyZSBmb3JtYXQ7IHRoZSBzZXJ2ZXIgc3RvcmVzIHRoZW0gaW4gUzMpLCBhbmQgcmVwb3J0XG4vLyBuYXR1cmFsIGRpbWVuc2lvbnMuXG5cbmltcG9ydCB7IE1BWF9JTUFHRV9ESU0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEltcG9ydGVkSW1hZ2UgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiByZWFkRmlsZUFzRGF0YVVybChmaWxlOiBGaWxlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKFN0cmluZyhyZWFkZXIucmVzdWx0KSk7XG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiQ291bGQgbm90IHJlYWQgZmlsZVwiKSk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVJbWFnZShzcmM6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiTm90IGEgc3VwcG9ydGVkIGltYWdlXCIpKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYmFzZU5hbWUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5bXi5dKyQvLCBcIlwiKSB8fCBcIkltYWdlXCI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWxlVG9JbXBvcnRlZEltYWdlKGZpbGU6IEZpbGUpOiBQcm9taXNlPEltcG9ydGVkSW1hZ2U+IHtcbiAgY29uc3Qgb3JpZ2luYWwgPSBhd2FpdCByZWFkRmlsZUFzRGF0YVVybChmaWxlKTtcbiAgY29uc3QgaW1nID0gYXdhaXQgZGVjb2RlSW1hZ2Uob3JpZ2luYWwpO1xuICBjb25zdCB3aWR0aCA9IGltZy5uYXR1cmFsV2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IGltZy5uYXR1cmFsSGVpZ2h0O1xuICBpZiAod2lkdGggPCAxIHx8IGhlaWdodCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzdXBwb3J0ZWQgaW1hZ2VcIik7XG4gIH1cblxuICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIE1BWF9JTUFHRV9ESU0gLyBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSk7XG4gIGlmIChzY2FsZSA9PT0gMSkge1xuICAgIHJldHVybiB7IHNyYzogb3JpZ2luYWwsIHdpZHRoLCBoZWlnaHQsIG5hbWU6IGJhc2VOYW1lKGZpbGUubmFtZSkgfTtcbiAgfVxuXG4gIGNvbnN0IHcgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHdpZHRoICogc2NhbGUpKTtcbiAgY29uc3QgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogc2NhbGUpKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gdztcbiAgY2FudmFzLmhlaWdodCA9IGg7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgdW5hdmFpbGFibGVcIik7XG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3LCBoKTtcbiAgLy8gSlBFRyByZS1lbmNvZGVzIHBob3RvcyBjb21wYWN0bHk7IFBORyBrZWVwcyB0cmFuc3BhcmVuY3kgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgY29uc3Qgc3JjID1cbiAgICBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiID8gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC45KSA6IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gIHJldHVybiB7IHNyYywgd2lkdGg6IHcsIGhlaWdodDogaCwgbmFtZTogYmFzZU5hbWUoZmlsZS5uYW1lKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VGaWxlc0Zyb21EYXRhVHJhbnNmZXIoZHQ6IERhdGFUcmFuc2ZlciB8IG51bGwpOiBGaWxlW10ge1xuICBpZiAoIWR0KSByZXR1cm4gW107XG4gIHJldHVybiBbLi4uZHQuZmlsZXNdLmZpbHRlcigoZmlsZSkgPT4gZmlsZS50eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpO1xufVxuIiwgImNvbnN0IEVOQ09ERURfRU5USVRJRVMgPSAvW1wiJjxdLztcblxuLyoqIEBwYXJhbSB7c3RyaW5nfSBzdHIgKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVFbnRpdGllcyhzdHIpIHtcblx0Ly8gU2tpcCBhbGwgd29yayBmb3Igc3RyaW5ncyB3aXRoIG5vIGVudGl0aWVzIG5lZWRpbmcgZW5jb2Rpbmc6XG5cdGlmIChzdHIubGVuZ3RoID09PSAwIHx8IEVOQ09ERURfRU5USVRJRVMudGVzdChzdHIpID09PSBmYWxzZSkgcmV0dXJuIHN0cjtcblxuXHRsZXQgbGFzdCA9IDAsXG5cdFx0aSA9IDAsXG5cdFx0b3V0ID0gJycsXG5cdFx0Y2ggPSAnJztcblxuXHQvLyBTZWVrIGZvcndhcmQgaW4gc3RyIHVudGlsIHRoZSBuZXh0IGVudGl0eSBjaGFyOlxuXHRmb3IgKDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuXHRcdHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaSkpIHtcblx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdGNoID0gJyZxdW90Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0Y2ggPSAnJmFtcDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNjA6XG5cdFx0XHRcdGNoID0gJyZsdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBBcHBlbmQgc2tpcHBlZC9idWZmZXJlZCBjaGFyYWN0ZXJzIGFuZCB0aGUgZW5jb2RlZCBlbnRpdHk6XG5cdFx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdFx0b3V0ICs9IGNoO1xuXHRcdC8vIFN0YXJ0IHRoZSBuZXh0IHNlZWsvYnVmZmVyIGFmdGVyIHRoZSBlbnRpdHkncyBvZmZzZXQ6XG5cdFx0bGFzdCA9IGkgKyAxO1xuXHR9XG5cdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRyZXR1cm4gb3V0O1xufVxuIiwgIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBlbmNvZGVFbnRpdGllcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vLi4vc3JjL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogVGhpcyBmaWxlIGV4cG9ydHMgdmFyaW91cyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IEJhYmVsJ3MgXCJhdXRvbWF0aWNcIiBKU1ggcnVudGltZSBBUEk6XG4gKiAtIGpzeCh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hzKHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBfX3NvdXJjZSwgX19zZWxmKVxuICpcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiBjcmVhdGVWTm9kZSBoZXJlIGlzIG9wdGltaXplZCBmb3IgcGVyZm9ybWFuY2UuXG4gKiBCZW5jaG1hcmtzOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzVmNmI1NGEwYjQ2MzIxMDBhN2RjZDJiM1xuICovXG5cbi8qKlxuICogSlNYLkVsZW1lbnQgZmFjdG9yeSB1c2VkIGJ5IEJhYmVsJ3Mge3J1bnRpbWU6XCJhdXRvbWF0aWNcIn0gSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtWTm9kZVsndHlwZSddfSB0eXBlXG4gKiBAcGFyYW0ge1ZOb2RlWydwcm9wcyddfSBwcm9wc1xuICogQHBhcmFtIHtWTm9kZVsna2V5J119IFtrZXldXG4gKiBAcGFyYW0ge3Vua25vd259IFtpc1N0YXRpY0NoaWxkcmVuXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zb3VyY2VdXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NlbGZdXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIF9fc291cmNlLCBfX3NlbGYpIHtcblx0aWYgKCFwcm9wcykgcHJvcHMgPSB7fTtcblx0Ly8gV2UnbGwgd2FudCB0byBwcmVzZXJ2ZSBgcmVmYCBpbiBwcm9wcyB0byBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvclxuXHQvLyBmb3J3YXJkUmVmIGNvbXBvbmVudHMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoYXQgc2hvdWxkIGhhcHBlbiB2aWFcblx0Ly8gYSBzZXBhcmF0ZSBQUi5cblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzLFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGlmICgncmVmJyBpbiBub3JtYWxpemVkUHJvcHMpIHtcblx0XHRub3JtYWxpemVkUHJvcHMgPSB7fTtcblx0XHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRcdGlmIChpID09ICdyZWYnKSB7XG5cdFx0XHRcdHJlZiA9IHByb3BzW2ldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqIEB0eXBlIHtWTm9kZSAmIHsgX19zb3VyY2U6IGFueTsgX19zZWxmOiBhbnkgfX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wczogbm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0X2NvbXBvbmVudDogbnVsbCxcblx0XHRjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuXHRcdF9vcmlnaW5hbDogLS12bm9kZUlkLFxuXHRcdF9pbmRleDogLTEsXG5cdFx0X2ZsYWdzOiAwLFxuXHRcdF9fc291cmNlLFxuXHRcdF9fc2VsZlxuXHR9O1xuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wcy5cblx0Ly8gTm90ZTogYHR5cGVgIGlzIG9mdGVuIGEgU3RyaW5nLCBhbmQgY2FuIGJlIGB1bmRlZmluZWRgIGluIGRldmVsb3BtZW50LlxuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgKHJlZiA9IHR5cGUuZGVmYXVsdFByb3BzKSkge1xuXHRcdGZvciAoaSBpbiByZWYpXG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcmVmW2ldO1xuXHRcdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdGVtcGxhdGUgdm5vZGUuIFRoaXMgZnVuY3Rpb24gaXMgbm90IGV4cGVjdGVkIHRvIGJlXG4gKiB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nW119IHRlbXBsYXRlc1xuICogQHBhcmFtICB7QXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn0gZXhwcnNcbiAqIEByZXR1cm5zIHtWTm9kZX1cbiAqL1xuZnVuY3Rpb24ganN4VGVtcGxhdGUodGVtcGxhdGVzLCAuLi5leHBycykge1xuXHRjb25zdCB2bm9kZSA9IGNyZWF0ZVZOb2RlKEZyYWdtZW50LCB7IHRwbDogdGVtcGxhdGVzLCBleHBycyB9KTtcblx0Ly8gQnlwYXNzIHJlbmRlciB0byBzdHJpbmcgdG9wIGxldmVsIEZyYWdtZW50IG9wdGltaXphdGlvblxuXHR2bm9kZS5rZXkgPSB2bm9kZS5fdm5vZGU7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuY29uc3QgSlNfVE9fQ1NTID0ge307XG5jb25zdCBDU1NfUkVHRVggPSAvW0EtWl0vZztcblxuLyoqXG4gKiBVbndyYXAgcG90ZW50aWFsIHNpZ25hbHMuXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gdmFsdWUudmFsdWVPZigpXG5cdFx0OiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gSFRNTCBhdHRyaWJ1dGUgdG8gYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgbm90XG4gKiBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYSBwcmVjb21waWxlXG4gKiBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgYXR0cmlidXRlIG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGF0dHJpYnV0ZSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24ganN4QXR0cihuYW1lLCB2YWx1ZSkge1xuXHRpZiAob3B0aW9ucy5hdHRyKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gb3B0aW9ucy5hdHRyKG5hbWUsIHZhbHVlKTtcblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHR2YWx1ZSA9IG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSk7XG5cblx0aWYgKG5hbWUgPT09ICdyZWYnIHx8IG5hbWUgPT09ICdrZXknKSByZXR1cm4gJyc7XG5cdGlmIChuYW1lID09PSAnc3R5bGUnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB2YWx1ZSkge1xuXHRcdFx0bGV0IHZhbCA9IHZhbHVlW3Byb3BdO1xuXHRcdFx0aWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJycpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9XG5cdFx0XHRcdFx0cHJvcFswXSA9PSAnLSdcblx0XHRcdFx0XHRcdD8gcHJvcFxuXHRcdFx0XHRcdFx0OiBKU19UT19DU1NbcHJvcF0gfHxcblx0XHRcdFx0XHRcdFx0KEpTX1RPX0NTU1twcm9wXSA9IHByb3AucmVwbGFjZShDU1NfUkVHRVgsICctJCYnKS50b0xvd2VyQ2FzZSgpKTtcblxuXHRcdFx0XHRsZXQgc3VmZml4ID0gJzsnO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiZcblx0XHRcdFx0XHQvLyBFeGNsdWRlIGN1c3RvbS1hdHRyaWJ1dGVzXG5cdFx0XHRcdFx0IW5hbWUuc3RhcnRzV2l0aCgnLS0nKSAmJlxuXHRcdFx0XHRcdCFJU19OT05fRElNRU5TSU9OQUwudGVzdChuYW1lKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzdWZmaXggPSAncHg7Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgPSBzdHIgKyBuYW1lICsgJzonICsgdmFsICsgc3VmZml4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoc3RyKSArICdcIic7XG5cdH1cblxuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHZhbHVlID09PSBmYWxzZSB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSByZXR1cm4gbmFtZTtcblxuXHRyZXR1cm4gbmFtZSArICc9XCInICsgZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSkgKyAnXCInO1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIGR5bmFtaWMgY2hpbGQgcGFzc2VkIHRvIGBqc3hUZW1wbGF0ZWAuIFRoaXMgZnVuY3Rpb25cbiAqIGlzIG5vdCBleHBlY3RlZCB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgcmF0aGVyIHRocm91Z2ggYVxuICogcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbCB8IFZOb2RlIHwgQXJyYXk8c3RyaW5nIHwgbnVsbCB8IFZOb2RlPn1cbiAqL1xuZnVuY3Rpb24ganN4RXNjYXBlKHZhbHVlKSB7XG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcblx0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIENoZWNrIGZvciBWTm9kZVxuXHRcdGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdmFsdWU7XG5cblx0XHRpZiAoaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFsdWVbaV0gPSBqc3hFc2NhcGUodmFsdWVbaV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlVk5vZGUgYXMganN4LFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hzLFxuXHRjcmVhdGVWTm9kZSBhcyBqc3hERVYsXG5cdEZyYWdtZW50LFxuXHQvLyBwcmVjb21waWxlZCBKU1ggdHJhbnNmb3JtXG5cdGpzeFRlbXBsYXRlLFxuXHRqc3hBdHRyLFxuXHRqc3hFc2NhcGVcbn07XG4iLCAiLy8gVGhlIGNhbnZhczogcmVuZGVycyB0aGUgYXJ0Ym9hcmQgYW5kIGl0cyBsYXllcnMgd2l0aCBDU1MgdHJhbnNmb3JtcyAoR1BVXG4vLyBjb21wb3NpdGluZyBrZWVwcyBkcmFncyBhdCBmcmFtZSByYXRlKSwgYW5kIG93bnMgYWxsIHBvaW50ZXIgZ2VzdHVyZXMgXHUyMDE0XG4vLyBzZWxlY3QsIG1vdmUsIHNjYWxlLCByb3RhdGUsIHBhbiBcdTIwMTQgcGx1cyB3aGVlbCB6b29tL3BhbiBhbmQgaW1hZ2UgZHJvcC5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIEhBTkRMRVMsXG4gICAgSEFORExFX0lEUyxcbiAgICByb3RhdGlvbkZyb21Qb2ludGVyLFxuICAgIHNjYWxlRnJvbUhhbmRsZSxcbiAgICB0eXBlIEhhbmRsZUlkLFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgdHlwZSB7IExheWVyLCBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgcGFpbnRCcnVzaFN0cm9rZSxcbiAgICBhZGRUZXh0TGF5ZXIsXG4gICAgYWRkSW1hZ2VMYXllcnMsXG4gICAgYXBwbHlUcmFuc2llbnQsXG4gICAgY29tbWl0VHJhbnNmb3JtcyxcbiAgICBjcm9wQ2FudmFzLFxuICAgIGNyb3BTZWxlY3Rpb24sXG4gICAgYmVnaW5UZXh0RWRpdGluZyxcbiAgICBmaW5pc2hUZXh0RWRpdGluZyxcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlU2VsZWN0ZWQsXG4gICAgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UsXG4gICAgdHlwZSBUcmFuc2Zvcm1QYXRjaCxcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnkgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgICBmaXREb2MsXG4gICAgc2NyZWVuVG9Xb3JsZCxcbiAgICBzZXRTdGF0ZVBhbixcbiAgICB2aWV3cG9ydEVsLFxuICAgIHdoZWVsWm9vbVNlbnNpdGl2aXR5LFxuICAgIHpvb21BdENsaWVudCxcbn0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuXG50eXBlIEdlc3R1cmUgPVxuICAgIHwge1xuICAgICAgICAgIGtpbmQ6IFwicGFuXCI7XG4gICAgICAgICAgc3RhcnRDbGllbnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRDbGllbnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5YOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5ZOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAga2luZDogXCJtb3ZlXCI7XG4gICAgICAgICAgc3RhcnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRzOiBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAgICAgICAgIG1vdmVkOiBib29sZWFuO1xuICAgICAgfVxuICAgIHwgeyBraW5kOiBcInNjYWxlXCI7IGlkOiBzdHJpbmc7IGhhbmRsZTogSGFuZGxlSWQ7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwicm90YXRlXCI7IGlkOiBzdHJpbmc7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwiYnJ1c2hcIjsgbGFzdFg6IG51bWJlcjsgbGFzdFk6IG51bWJlciB9XG4gICAgfCB7IGtpbmQ6IFwiY3JvcFwiOyBzdGFydFg6IG51bWJlcjsgc3RhcnRZOiBudW1iZXIgfTtcblxuY29uc3QgSEFORExFX0NVUlNPUlM6IFJlY29yZDxIYW5kbGVJZCwgc3RyaW5nPiA9IHtcbiAgICBudzogXCJud3NlLXJlc2l6ZVwiLFxuICAgIG46IFwibnMtcmVzaXplXCIsXG4gICAgbmU6IFwibmVzdy1yZXNpemVcIixcbiAgICBlOiBcImV3LXJlc2l6ZVwiLFxuICAgIHNlOiBcIm53c2UtcmVzaXplXCIsXG4gICAgczogXCJucy1yZXNpemVcIixcbiAgICBzdzogXCJuZXN3LXJlc2l6ZVwiLFxuICAgIHc6IFwiZXctcmVzaXplXCIsXG59O1xuXG5mdW5jdGlvbiBwb2ludEluc2lkZUxheWVyKGxheWVyOiBMYXllciwgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN4ID0gbGF5ZXIueCArIGxheWVyLncgLyAyO1xuICAgIGNvbnN0IGN5ID0gbGF5ZXIueSArIGxheWVyLmggLyAyO1xuICAgIGNvbnN0IGFuZ2xlID0gLWxheWVyLnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBkeCA9IHBvaW50LnggLSBjeDtcbiAgICBjb25zdCBkeSA9IHBvaW50LnkgLSBjeTtcbiAgICBjb25zdCBsb2NhbFggPSBkeCAqIE1hdGguY29zKGFuZ2xlKSAtIGR5ICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IGxvY2FsWSA9IGR4ICogTWF0aC5zaW4oYW5nbGUpICsgZHkgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGxvY2FsWCkgPD0gbGF5ZXIudyAvIDIgJiYgTWF0aC5hYnMobG9jYWxZKSA8PSBsYXllci5oIC8gMjtcbn1cblxuZnVuY3Rpb24gTGF5ZXJWaWV3KHtcbiAgICBsYXllcixcbiAgICBwcmV2aWV3QmxlbmQsXG4gICAgZWRpdGluZyxcbn06IHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgcHJldmlld0JsZW5kPzogc3RyaW5nO1xuICAgIGVkaXRpbmc/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IGFzc2V0ID0gdXNlQXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGxheWVyLncsXG4gICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bGF5ZXIueH1weCwgJHtsYXllci55fXB4KSByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpIHNjYWxlWCgke2xheWVyLmZsaXBYID8gLTEgOiAxfSlgLFxuICAgICAgICBvcGFjaXR5OiBsYXllci5vcGFjaXR5LFxuICAgICAgICBkaXNwbGF5OiBsYXllci52aXNpYmxlID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgIG1peEJsZW5kTW9kZTogcHJldmlld0JsZW5kID8/IGxheWVyLmJsZW5kTW9kZSxcbiAgICAgICAgdmlzaWJpbGl0eTogZWRpdGluZyA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIixcbiAgICB9O1xuICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBhbmltYXRlLXB1bHNlIGJnLW5ldXRyYWwtNTAwLzMwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9e2xheWVyLm5hbWV9XG4gICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBtYXgtdy1ub25lIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIHNyYz17YXNzZXQuc3JjfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIElubGluZVRleHRFZGl0b3IoeyBsYXllciB9OiB7IGxheWVyOiBMYXllciB9KSB7XG4gICAgY29uc3QgZWRpdGluZyA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0RWRpdGluZyk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IHRleHQgPSBsYXllci50ZXh0O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgICAgZWwuc2VsZWN0KCk7XG4gICAgfSwgW2xheWVyLmlkXSk7XG4gICAgaWYgKCFlZGl0aW5nIHx8ICF0ZXh0IHx8IGVkaXRpbmcuaWQgIT09IGxheWVyLmlkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBwYWRkaW5nID0gTWF0aC5tYXgoNCwgTWF0aC5jZWlsKHRleHQuZm9udFNpemUgKiAwLjE0KSk7XG4gICAgY29uc3QgbGluZXMgPSBlZGl0aW5nLmRyYWZ0LnJlcGxhY2UoL1xcci9nLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgICBjb25zdCByYXN0ZXJXaWR0aCA9IHRleHQucmFzdGVyV2lkdGggPz8gbGF5ZXIudztcbiAgICBjb25zdCByYXN0ZXJIZWlnaHQgPSB0ZXh0LnJhc3RlckhlaWdodCA/PyBsYXllci5oO1xuICAgIGNvbnN0IHNjYWxlWCA9IHJhc3RlcldpZHRoID4gMCA/IGxheWVyLncgLyByYXN0ZXJXaWR0aCA6IDE7XG4gICAgY29uc3Qgc2NhbGVZID0gcmFzdGVySGVpZ2h0ID4gMCA/IGxheWVyLmggLyByYXN0ZXJIZWlnaHQgOiAxO1xuICAgIGNvbnN0IGVkaXRXaWR0aCA9IE1hdGgubWF4KHJhc3RlcldpZHRoLCBNYXRoLm1heCguLi5saW5lcy5tYXAoKGxpbmUpID0+IE1hdGgubWF4KDEsIGxpbmUubGVuZ3RoKSkpICogdGV4dC5mb250U2l6ZSAqIDAuNjggKyBwYWRkaW5nICogMik7XG4gICAgY29uc3QgZWRpdEhlaWdodCA9IE1hdGgubWF4KHJhc3RlckhlaWdodCwgbGluZXMubGVuZ3RoICogdGV4dC5mb250U2l6ZSAqIHRleHQubGluZUhlaWdodCArIHBhZGRpbmcgKiAyKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLXRleHQtZWRpdG9yPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtdGV4dC1lZGl0b3Itd3JhcFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGxlZnQ6IGxheWVyLngsXG4gICAgICAgICAgICAgICAgdG9wOiBsYXllci55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBsYXllci53LFxuICAgICAgICAgICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0LWVkaXRvcj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS10ZXh0LWVkaXRvclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRpbmcuZHJhZnR9XG4gICAgICAgICAgICAgICAgc3BlbGxjaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgd3JhcD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogbGF5ZXIuZmxpcFggPyBsYXllci53IDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZWRpdFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGVkaXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7bGF5ZXIuZmxpcFggPyAtc2NhbGVYIDogc2NhbGVYfSwgJHtzY2FsZVl9KWAsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIwIDBcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogdGV4dC5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogdGV4dC5mb250U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogdGV4dC5mb250V2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiB0ZXh0LmxpbmVIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogdGV4dC5hbGlnbixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRleHQuY29sb3IsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXsoZTogRXZlbnQpID0+IHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IHsgaWQ6IGxheWVyLmlkLCBkcmFmdDogKGUuY3VycmVudFRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSB9IH0pfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGUucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Py5jbG9zZXN0KFwiLnByb3BlcnRpZXMtcGFuZWwsIC50b29sYmFyLWNvbG9ycywgLnRvb2wtY29sb3ItcG9wb3ZlclwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgdGV4dEVkaXRpbmc6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudD8uYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSAmJiBlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGlvbkJveCh7XG4gICAgbGF5ZXIsXG4gICAgem9vbSxcbiAgICBzaW5nbGUsXG59OiB7XG4gICAgbGF5ZXI6IExheWVyO1xuICAgIHpvb206IG51bWJlcjtcbiAgICBzaW5nbGU6IGJvb2xlYW47XG59KSB7XG4gICAgY29uc3QgaGFuZGxlU2l6ZSA9IDExIC8gem9vbTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMCB0b3AtMFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBsYXllci53LFxuICAgICAgICAgICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtsYXllci54fXB4LCAke2xheWVyLnl9cHgpIHJvdGF0ZSgke2xheWVyLnJvdGF0aW9ufWRlZylgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYm9yZGVyLXNreS00MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcldpZHRoOiAxLjUgLyB6b29tLCBib3JkZXJTdHlsZTogXCJzb2xpZFwiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3NpbmdsZSA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICB7Lyogcm90YXRlIGhhbmRsZSBzdGVtICsga25vYiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctc2t5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjIgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjUgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjIgLyB6b29tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhhbmRsZT1cInJvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNreS01MDAgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTI2IC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtIQU5ETEVfSURTLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhhbmRsZT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtWzJweF0gYm9yZGVyIGJvcmRlci1za3ktNTAwIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtIQU5ETEVTW2lkXS54ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGAke0hBTkRMRVNbaWRdLnkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBIQU5ETEVfQ1VSU09SU1tpZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYW52YXNTdGFnZSgpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCB2aWV3ID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICAgIGNvbnN0IHRvb2wgPSB1c2VFZGl0b3IoKHMpID0+IHMudG9vbCk7XG4gICAgY29uc3Qgc3BhY2VQYW4gPSB1c2VFZGl0b3IoKHMpID0+IHMuc3BhY2VQYW4pO1xuICAgIGNvbnN0IGZpdFZlcnNpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuZml0VmVyc2lvbik7XG4gICAgY29uc3QgYnJ1c2hDb2xvciA9IHVzZUVkaXRvcigocykgPT4gcy5mb3JlZ3JvdW5kQ29sb3IpO1xuICAgIGNvbnN0IGJydXNoU2l6ZSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaFNpemUpO1xuICAgIGNvbnN0IGJydXNoSGFyZG5lc3MgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hIYXJkbmVzcyk7XG4gICAgY29uc3QgYnJ1c2hPcGFjaXR5ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoT3BhY2l0eSk7XG4gICAgY29uc3QgYnJ1c2hGbG93ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoRmxvdyk7XG4gICAgY29uc3QgY3JvcFJlY3QgPSB1c2VFZGl0b3IoKHMpID0+IHMuY3JvcFJlY3QpO1xuICAgIGNvbnN0IHNuYXBHdWlkZXMgPSB1c2VFZGl0b3IoKHMpID0+IHMuc25hcEd1aWRlcyk7XG4gICAgY29uc3QgYmxlbmRQcmV2aWV3ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJsZW5kUHJldmlldyk7XG4gICAgY29uc3QgdGV4dEVkaXRpbmcgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEVkaXRpbmcpO1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBnZXN0dXJlUmVmID0gdXNlUmVmPEdlc3R1cmUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBwYW5uaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBicnVzaENhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBicnVzaERhYihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gYnJ1c2hTaXplIC8gMjtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gYnJ1c2hGbG93IC8gMTAwO1xuICAgICAgICBpZiAoYnJ1c2hIYXJkbmVzcyA+PSA5OSkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJydXNoQ29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCByYWRpdXMgKiBicnVzaEhhcmRuZXNzIC8gMTAwLCB4LCB5LCByYWRpdXMpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGJydXNoQ29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGAke2JydXNoQ29sb3J9MDBgKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnJ1c2hTZWdtZW50KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcm9tWDogbnVtYmVyLCBmcm9tWTogbnVtYmVyLCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KHRvWCAtIGZyb21YLCB0b1kgLSBmcm9tWSk7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSBNYXRoLm1heCgxLCBicnVzaFNpemUgKiAwLjEyKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwoZGlzdGFuY2UgLyBzcGFjaW5nKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBpIC8gc3RlcHM7XG4gICAgICAgICAgICBicnVzaERhYihjdHgsIGZyb21YICsgKHRvWCAtIGZyb21YKSAqIHQsIGZyb21ZICsgKHRvWSAtIGZyb21ZKSAqIHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmlld3BvcnRFbC5jdXJyZW50ID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3cG9ydEVsLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEZpdCB0aGUgYXJ0Ym9hcmQgb24gb3BlbiBhbmQgd2hlbiByZXF1ZXN0ZWQuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZml0RG9jKCk7XG4gICAgfSwgW2RvYz8uaWQsIGZpdFZlcnNpb25dKTtcblxuICAgIC8vIFdoZWVsIG11c3QgYmUgYSBub24tcGFzc2l2ZSBuYXRpdmUgbGlzdGVuZXIgdG8gcHJldmVudERlZmF1bHQgcmVsaWFibHkuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBvbldoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdmlldzogdiB9ID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgem9vbUF0Q2xpZW50KFxuICAgICAgICAgICAgICAgICAgICBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIGUuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgICAgdi56b29tICogTWF0aC5leHAoLWUuZGVsdGFZICogd2hlZWxab29tU2Vuc2l0aXZpdHkodi56b29tKSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGVQYW4odi5wYW5YIC0gZS5kZWx0YVgsIHYucGFuWSAtIGUuZGVsdGFZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcGFuTW9kZSA9IHRvb2wgPT09IFwiaGFuZFwiIHx8IHNwYWNlUGFuO1xuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlOiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCB8fCBlLmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZS50ZXh0RWRpdGluZyAmJiAhdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS10ZXh0LWVkaXRvcl1cIikpIHtcbiAgICAgICAgICAgIGZpbmlzaFRleHRFZGl0aW5nKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDEgfHwgcGFuTW9kZSkge1xuICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwicGFuXCIsXG4gICAgICAgICAgICAgICAgc3RhcnRDbGllbnRYOiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgc3RhcnRDbGllbnRZOiBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgc3RhcnRQYW5YOiBzdGF0ZS52aWV3LnBhblgsXG4gICAgICAgICAgICAgICAgc3RhcnRQYW5ZOiBzdGF0ZS52aWV3LnBhblksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFubmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdvcmxkID0gc2NyZWVuVG9Xb3JsZChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgICAgIGNvbnN0IGluc2lkZSA9ICEhc3RhdGUuZG9jICYmIHdvcmxkLnggPj0gMCAmJiB3b3JsZC55ID49IDAgJiYgd29ybGQueCA8PSBzdGF0ZS5kb2Mud2lkdGggJiYgd29ybGQueSA8PSBzdGF0ZS5kb2MuaGVpZ2h0O1xuICAgICAgICBpZiAodG9vbCA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIGlmICghaW5zaWRlIHx8ICFzdGF0ZS5kb2MpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGxheWVySWQgPSB0YXJnZXQuY2xvc2VzdChcIltkYXRhLWxheWVyaWRdXCIpPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxheWVyaWRcIik7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHN0YXRlLmRvYy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gICAgICAgICAgICBpZiAobGF5ZXI/LnRleHQpIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXIuaWQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhZGRUZXh0TGF5ZXIod29ybGQpO1xuICAgICAgICAgICAgICAgIGlmIChpZCkgYmVnaW5UZXh0RWRpdGluZyhpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvb2wgPT09IFwiYnJ1c2hcIikge1xuICAgICAgICAgICAgaWYgKCFpbnNpZGUgfHwgIXN0YXRlLmRvYykgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKCFjYW52YXMgfHwgIWN0eCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGNhbnZhcy53aWR0aCAhPT0gc3RhdGUuZG9jLndpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IHN0YXRlLmRvYy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBzdGF0ZS5kb2Mud2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHN0YXRlLmRvYy5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicnVzaERhYihjdHgsIHdvcmxkLngsIHdvcmxkLnkpO1xuICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0geyBraW5kOiBcImJydXNoXCIsIGxhc3RYOiB3b3JsZC54LCBsYXN0WTogd29ybGQueSB9O1xuICAgICAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b29sID09PSBcImNyb3BcIikge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGlvbi5sZW5ndGggPiAxKSByZXR1cm47XG4gICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSB7IGtpbmQ6IFwiY3JvcFwiLCBzdGFydFg6IHdvcmxkLngsIHN0YXJ0WTogd29ybGQueSB9O1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBjcm9wUmVjdDogeyB4OiB3b3JsZC54LCB5OiB3b3JsZC55LCB3OiAwLCBoOiAwIH0gfSk7XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGUgPSB0YXJnZXRcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiW2RhdGEtaGFuZGxlXVwiKVxuICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhhbmRsZVwiKTtcbiAgICAgICAgaWYgKGhhbmRsZSAmJiBzdGF0ZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IHN0YXRlLmRvYz8ubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGwpID0+IGwuaWQgPT09IHN0YXRlLnNlbGVjdGlvblswXSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydDogTGF5ZXJUcmFuc2Zvcm0gPSB7IC4uLmxheWVyIH07XG4gICAgICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID09PSBcInJvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHsga2luZDogXCJyb3RhdGVcIiwgaWQ6IGxheWVyLmlkLCBzdGFydCB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6IFwic2NhbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogaGFuZGxlIGFzIEhhbmRsZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXllcklkID0gdGFyZ2V0XG4gICAgICAgICAgICAuY2xvc2VzdChcIltkYXRhLWxheWVyaWRdXCIpXG4gICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcImRhdGEtbGF5ZXJpZFwiKTtcbiAgICAgICAgaWYgKGxheWVySWQpIHtcbiAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0ZWQobGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5zZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXJJZCkpIHtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Rpb24oW2xheWVySWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZ2V0U3RhdGUoKS5zZWxlY3Rpb247XG4gICAgICAgICAgICBjb25zdCBzdGFydHMgPSBuZXcgTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsYXllciBvZiBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGxheWVyLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRzLnNldChsYXllci5pZCwgeyB4OiBsYXllci54LCB5OiBsYXllci55IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIGtpbmQ6IFwibW92ZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogd29ybGQueCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IHdvcmxkLnksXG4gICAgICAgICAgICAgICAgc3RhcnRzLFxuICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoZTogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGdlc3R1cmUgPSBnZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZ2VzdHVyZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwicGFuXCIpIHtcbiAgICAgICAgICAgIHNldFN0YXRlUGFuKFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuc3RhcnRQYW5YICsgKGUuY2xpZW50WCAtIGdlc3R1cmUuc3RhcnRDbGllbnRYKSxcbiAgICAgICAgICAgICAgICBnZXN0dXJlLnN0YXJ0UGFuWSArIChlLmNsaWVudFkgLSBnZXN0dXJlLnN0YXJ0Q2xpZW50WSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd29ybGQgPSBzY3JlZW5Ub1dvcmxkKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImJydXNoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGJydXNoQ2FudmFzUmVmLmN1cnJlbnQ/LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmICghY3R4KSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZG9jLndpZHRoLCB3b3JsZC54KSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZG9jLmhlaWdodCwgd29ybGQueSkpO1xuICAgICAgICAgICAgYnJ1c2hTZWdtZW50KGN0eCwgZ2VzdHVyZS5sYXN0WCwgZ2VzdHVyZS5sYXN0WSwgeCwgeSk7XG4gICAgICAgICAgICBnZXN0dXJlLmxhc3RYID0geDtcbiAgICAgICAgICAgIGdlc3R1cmUubGFzdFkgPSB5O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJjcm9wXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSB3b3JsZC54O1xuICAgICAgICAgICAgY29uc3QgeSA9IHdvcmxkLnk7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiB7IHg6IE1hdGgubWluKGdlc3R1cmUuc3RhcnRYLCB4KSwgeTogTWF0aC5taW4oZ2VzdHVyZS5zdGFydFksIHkpLCB3OiBNYXRoLmFicyh4IC0gZ2VzdHVyZS5zdGFydFgpLCBoOiBNYXRoLmFicyh5IC0gZ2VzdHVyZS5zdGFydFkpIH0gfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcIm1vdmVcIikge1xuICAgICAgICAgICAgY29uc3QgZHggPSB3b3JsZC54IC0gZ2VzdHVyZS5zdGFydFg7XG4gICAgICAgICAgICBjb25zdCBkeSA9IHdvcmxkLnkgLSBnZXN0dXJlLnN0YXJ0WTtcbiAgICAgICAgICAgIGlmICghZ2VzdHVyZS5tb3ZlZCAmJiBNYXRoLmh5cG90KGR4LCBkeSkgKiBnZXRTdGF0ZSgpLnZpZXcuem9vbSA8IDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgZ2VzdHVyZS5tb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgc25hcHBlZER4ID0gZHg7XG4gICAgICAgICAgICBsZXQgc25hcHBlZER5ID0gZHk7XG4gICAgICAgICAgICBjb25zdCBtb3ZpbmcgPSBbLi4uZ2VzdHVyZS5zdGFydHMua2V5cygpXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzID8/IFtdO1xuICAgICAgICAgICAgY29uc3QgYm94ZXMgPSBjdXJyZW50LmZpbHRlcigobCkgPT4gbW92aW5nLmluY2x1ZGVzKGwuaWQpKS5tYXAoKGwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGdlc3R1cmUuc3RhcnRzLmdldChsLmlkKSE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogc3RhcnQueCArIGR4LCB5OiBzdGFydC55ICsgZHksIHc6IGwudywgaDogbC5oIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0geyB4OiBNYXRoLm1pbiguLi5ib3hlcy5tYXAoKGIpID0+IGIueCkpLCB5OiBNYXRoLm1pbiguLi5ib3hlcy5tYXAoKGIpID0+IGIueSkpLCByOiBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueCArIGIudykpLCBiOiBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueSArIGIuaCkpIH07XG4gICAgICAgICAgICBjb25zdCB4QW5jaG9ycyA9IFtncm91cC54LCAoZ3JvdXAueCArIGdyb3VwLnIpIC8gMiwgZ3JvdXAucl07XG4gICAgICAgICAgICBjb25zdCB5QW5jaG9ycyA9IFtncm91cC55LCAoZ3JvdXAueSArIGdyb3VwLmIpIC8gMiwgZ3JvdXAuYl07XG4gICAgICAgICAgICBjb25zdCBvdGhlcnMgPSBjdXJyZW50LmZpbHRlcigobCkgPT4gIW1vdmluZy5pbmNsdWRlcyhsLmlkKSAmJiBsLnZpc2libGUpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0WCA9IFswLCBkb2Mud2lkdGggLyAyLCBkb2Mud2lkdGgsIC4uLm90aGVycy5mbGF0TWFwKChsKSA9PiBbbC54LCBsLnggKyBsLncgLyAyLCBsLnggKyBsLnddKV07XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRZID0gWzAsIGRvYy5oZWlnaHQgLyAyLCBkb2MuaGVpZ2h0LCAuLi5vdGhlcnMuZmxhdE1hcCgobCkgPT4gW2wueSwgbC55ICsgbC5oIC8gMiwgbC55ICsgbC5oXSldO1xuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gNiAvIGdldFN0YXRlKCkudmlldy56b29tO1xuICAgICAgICAgICAgbGV0IG9mZnNldFggPSB0aHJlc2hvbGQgKyAxO1xuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSB0aHJlc2hvbGQgKyAxO1xuICAgICAgICAgICAgbGV0IGd1aWRlWDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgbGV0IGd1aWRlWTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhbmNob3Igb2YgeEFuY2hvcnMpIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldFgpIGlmIChNYXRoLmFicyh0YXJnZXQgLSBhbmNob3IpIDwgTWF0aC5hYnMob2Zmc2V0WCkpIHsgb2Zmc2V0WCA9IHRhcmdldCAtIGFuY2hvcjsgZ3VpZGVYID0gdGFyZ2V0OyB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB5QW5jaG9ycykgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0WSkgaWYgKE1hdGguYWJzKHRhcmdldCAtIGFuY2hvcikgPCBNYXRoLmFicyhvZmZzZXRZKSkgeyBvZmZzZXRZID0gdGFyZ2V0IC0gYW5jaG9yOyBndWlkZVkgPSB0YXJnZXQ7IH1cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXRYKSA8PSB0aHJlc2hvbGQpIHNuYXBwZWREeCArPSBvZmZzZXRYOyBlbHNlIGd1aWRlWCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhvZmZzZXRZKSA8PSB0aHJlc2hvbGQpIHNuYXBwZWREeSArPSBvZmZzZXRZOyBlbHNlIGd1aWRlWSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgc25hcEd1aWRlczogZ3VpZGVYID09PSB1bmRlZmluZWQgJiYgZ3VpZGVZID09PSB1bmRlZmluZWQgPyBudWxsIDogeyB4OiBndWlkZVgsIHk6IGd1aWRlWSB9IH0pO1xuICAgICAgICAgICAgY29uc3QgcGF0Y2hlcyA9IG5ldyBNYXA8c3RyaW5nLCBUcmFuc2Zvcm1QYXRjaD4oKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2lkLCBzdGFydF0gb2YgZ2VzdHVyZS5zdGFydHMpIHtcbiAgICAgICAgICAgICAgICBwYXRjaGVzLnNldChpZCwgeyB4OiBzdGFydC54ICsgc25hcHBlZER4LCB5OiBzdGFydC55ICsgc25hcHBlZER5IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwbHlUcmFuc2llbnQocGF0Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBzY2FsZUZyb21IYW5kbGUoXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5zdGFydCxcbiAgICAgICAgICAgICAgICBnZXN0dXJlLmhhbmRsZSxcbiAgICAgICAgICAgICAgICB3b3JsZCxcbiAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGFwcGx5VHJhbnNpZW50KG5ldyBNYXAoW1tnZXN0dXJlLmlkLCBuZXh0XV0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gcm90YXRpb25Gcm9tUG9pbnRlcihnZXN0dXJlLnN0YXJ0LCB3b3JsZCwgZS5zaGlmdEtleSk7XG4gICAgICAgIGFwcGx5VHJhbnNpZW50KG5ldyBNYXAoW1tnZXN0dXJlLmlkLCB7IHJvdGF0aW9uIH1dXSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlclVwKCkge1xuICAgICAgICBjb25zdCBnZXN0dXJlID0gZ2VzdHVyZVJlZi5jdXJyZW50O1xuICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICBwYW5uaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgc2V0U3RhdGUoeyBzbmFwR3VpZGVzOiBudWxsIH0pO1xuICAgICAgICBpZiAoIWdlc3R1cmUgfHwgZ2VzdHVyZS5raW5kID09PSBcInBhblwiKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJicnVzaFwiKSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBicnVzaENhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2b2lkIHBhaW50QnJ1c2hTdHJva2Uoc3JjLCB3aWR0aCwgaGVpZ2h0LCBicnVzaE9wYWNpdHkgLyAxMDApLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpPy5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJjcm9wXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBnZXRTdGF0ZSgpLmNyb3BSZWN0O1xuICAgICAgICAgICAgaWYgKCFyZWN0IHx8IHJlY3QudyA8IDIgfHwgcmVjdC5oIDwgMikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCkuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkgdm9pZCBjcm9wU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBlbHNlIGNyb3BDYW52YXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVycyA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBpZiAoIWdlc3R1cmUubW92ZWQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgc3RhcnRdIG9mIGdlc3R1cmUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJNb3ZlXCIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChnZXN0dXJlLmlkKTtcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgdywgaCB9ID0gZ2VzdHVyZS5zdGFydDtcbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSZXNpemVcIiwgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHsgeCwgeSwgdywgaCB9LFxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55LCB3OiBsYXllci53LCBoOiBsYXllci5oIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSb3RhdGVcIiwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHsgcm90YXRpb246IGdlc3R1cmUuc3RhcnQucm90YXRpb24gfSxcbiAgICAgICAgICAgICAgICBhZnRlcjogeyByb3RhdGlvbjogbGF5ZXIucm90YXRpb24gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhdCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoZmlsZVRvSW1wb3J0ZWRJbWFnZSkpO1xuICAgICAgICBhZGRJbWFnZUxheWVycyhpbWFnZXMsIGF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBsYXllcklkID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiW2RhdGEtbGF5ZXJpZF1cIik/LmdldEF0dHJpYnV0ZShcImRhdGEtbGF5ZXJpZFwiKTtcbiAgICAgICAgY29uc3QgZGlyZWN0ID0gc3RhdGUuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCAmJiBpdGVtLnRleHQpO1xuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBsYXllciA9IGRpcmVjdCA/PyBbLi4uKHN0YXRlLmRvYz8ubGF5ZXJzID8/IFtdKV0ucmV2ZXJzZSgpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiBpdGVtLnRleHQgJiYgcG9pbnRJbnNpZGVMYXllcihpdGVtLCB3b3JsZCkpO1xuICAgICAgICBpZiAobGF5ZXI/LnRleHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcnMgPSBkb2MubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgKGwpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsLmlkKSAmJiBsLnZpc2libGUsXG4gICAgKTtcbiAgICBjb25zdCBjdXJzb3IgPSBwYW5Nb2RlXG4gICAgICAgID8gcGFubmluZ1JlZi5jdXJyZW50XG4gICAgICAgICAgICA/IFwiZ3JhYmJpbmdcIlxuICAgICAgICAgICAgOiBcImdyYWJcIlxuICAgICAgICA6IHRvb2wgPT09IFwiYnJ1c2hcIiB8fCB0b29sID09PSBcImNyb3BcIiB8fCB0b29sID09PSBcInRleHRcIiA/IFwiY3Jvc3NoYWlyXCIgOiBcImRlZmF1bHRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWRvdHMgY2FudmFzLXN0YWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvciB9fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICAgICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgb25EYmxDbGljaz17b25Eb3VibGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17KGU6IERyYWdFdmVudCkgPT4gdm9pZCBvbkRyb3AoZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3ZpZXcucGFuWH1weCwgJHt2aWV3LnBhbll9cHgpIHNjYWxlKCR7dmlldy56b29tfSlgLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgYXJ0Ym9hcmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRvYy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZG9jLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclZpZXcga2V5PXtsYXllci5pZH0gbGF5ZXI9e2xheWVyfSBlZGl0aW5nPXt0ZXh0RWRpdGluZz8uaWQgPT09IGxheWVyLmlkfSBwcmV2aWV3QmxlbmQ9e2JsZW5kUHJldmlldyAmJiBzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpID8gYmxlbmRQcmV2aWV3IDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2JydXNoQ2FudmFzUmVmfSBjbGFzc05hbWU9XCJicnVzaC1vdmVybGF5XCIgc3R5bGU9e3sgb3BhY2l0eTogYnJ1c2hPcGFjaXR5IC8gMTAwIH19IHdpZHRoPXtkb2Mud2lkdGh9IGhlaWdodD17ZG9jLmhlaWdodH0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RleHRFZGl0aW5nID8gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gdGV4dEVkaXRpbmcuaWQpLm1hcCgobGF5ZXIpID0+IDxJbmxpbmVUZXh0RWRpdG9yIGtleT17bGF5ZXIuaWR9IGxheWVyPXtsYXllcn0gLz4pIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IXRleHRFZGl0aW5nICYmICh0b29sID09PSBcIm1vdmVcIiB8fCB0b29sID09PSBcInRleHRcIikgPyBzZWxlY3RlZExheWVycy5tYXAoKGxheWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25Cb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tPXt2aWV3Lnpvb219XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGU9e3Rvb2wgPT09IFwibW92ZVwiICYmIHNlbGVjdGVkTGF5ZXJzLmxlbmd0aCA9PT0gMX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKSA6IHRvb2wgPT09IFwiY3JvcFwiID8gc2VsZWN0ZWRMYXllcnMubWFwKChsYXllcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQm94IGtleT17bGF5ZXIuaWR9IGxheWVyPXtsYXllcn0gem9vbT17dmlldy56b29tfSBzaW5nbGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7c25hcEd1aWRlcz8ueCAhPT0gdW5kZWZpbmVkID8gPGRpdiBjbGFzc05hbWU9XCJzbmFwLWd1aWRlIHZlcnRpY2FsXCIgc3R5bGU9e3sgbGVmdDogc25hcEd1aWRlcy54LCBoZWlnaHQ6IGRvYy5oZWlnaHQgfX0gLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtzbmFwR3VpZGVzPy55ICE9PSB1bmRlZmluZWQgPyA8ZGl2IGNsYXNzTmFtZT1cInNuYXAtZ3VpZGUgaG9yaXpvbnRhbFwiIHN0eWxlPXt7IHRvcDogc25hcEd1aWRlcy55LCB3aWR0aDogZG9jLndpZHRoIH19IC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dG9vbCA9PT0gXCJjcm9wXCIgJiYgY3JvcFJlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcC1ib3hcIiBzdHlsZT17eyBsZWZ0OiBjcm9wUmVjdC54LCB0b3A6IGNyb3BSZWN0LnksIHdpZHRoOiBjcm9wUmVjdC53LCBoZWlnaHQ6IGNyb3BSZWN0LmgsIGJvcmRlcldpZHRoOiAxLjUgLyB2aWV3Lnpvb20gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTEgLyB2aWV3Lnpvb20sIHBhZGRpbmc6IGAkezIgLyB2aWV3Lnpvb219cHggJHs1IC8gdmlldy56b29tfXB4YCB9fT57TWF0aC5yb3VuZChjcm9wUmVjdC53KX0gXHUwMEQ3IHtNYXRoLnJvdW5kKGNyb3BSZWN0LmgpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuXG50eXBlIEljb25Qcm9wcyA9IHsgY2xhc3NOYW1lPzogc3RyaW5nOyB0aXRsZT86IHN0cmluZyB9O1xuXG5mdW5jdGlvbiBJY29uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgdGl0bGUgfTogSWNvblByb3BzICYgeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGFyaWEtaGlkZGVuPXt0aXRsZSA/IHVuZGVmaW5lZCA6IFwidHJ1ZVwifVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgcm9sZT17dGl0bGUgPyBcImltZ1wiIDogdW5kZWZpbmVkfVxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiMS44XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIxZW1cIlxuICAgID5cbiAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuICApO1xufVxuXG4vLyBLZXB0IGFzIGxvY2FsIGNvbXBvbmVudHMgYmVjYXVzZSBMYWtlYmVkIGNhcHN1bGVzIG9ubHkgYWxsb3cgTGFrZWJlZCBhbmRcbi8vIHJlbGF0aXZlIGltcG9ydHMuIFRoZSBBUEkgbWlycm9ycyB0aGUgc21hbGwgaWNvbiBjb21wb25lbnRzIGZyb20gcmVhY3QtaWNvbnMuXG5leHBvcnQgY29uc3QgRmlBcnJvd0xlZnQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTE5IDEySDVtNyA3LTctNyA3LTdcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDaGV2cm9uRG93biA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtNiA5IDYgNiA2LTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDb3B5ID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHJlY3QgeD1cIjlcIiB5PVwiOVwiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxMVwiIHJ4PVwiMVwiIC8+PHBhdGggZD1cIk01IDE1SDRhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoMTBhMSAxIDAgMCAxIDEgMXYxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRG93bmxvYWQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDN2MTJtLTQtNCA0IDQgNC00TTQgMjBoMTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlFZGl0MyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTIgMjBoOVwiIC8+PHBhdGggZD1cIk0xNi41IDMuNWEyLjEgMi4xIDAgMCAxIDMgM0w4IDE4bC00IDEgMS00WlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUV5ZSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMiAxMnMzLjUtNiAxMC02IDEwIDYgMTAgNi0zLjUgNi0xMCA2UzIgMTIgMiAxMlpcIiAvPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMi41XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRXllT2ZmID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0zIDMgMTggMThNMTAuNiAxMC42YTIgMiAwIDAgMCAyLjggMi44TTkuOSA1LjJBMTEgMTEgMCAwIDEgMTIgNWM2LjUgMCAxMCA3IDEwIDdhMTYgMTYgMCAwIDEtMi4xIDMuMU02LjYgNi42QzMuNSA4LjQgMiAxMiAyIDEyczMuNSA3IDEwIDdhMTAgMTAgMCAwIDAgNC4xLS45XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpSGFuZCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNOCAxMVY2YTIgMiAwIDAgMSA0IDB2NC02YTIgMiAwIDAgMSA0IDB2Ni00YTIgMiAwIDAgMSA0IDB2N2E4IDggMCAwIDEtOCA4aC0xYTcgNyAwIDAgMS01LjctM0wyLjUgMTRhMiAyIDAgMCAxIDMtMi42TDggMTRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlJbWFnZSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiAvPjxjaXJjbGUgY3g9XCI4LjVcIiBjeT1cIjguNVwiIHI9XCIxLjVcIiAvPjxwYXRoIGQ9XCJtMjEgMTUtNS01TDUgMjFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlMYXllcnMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTEyIDIgMTAgNS0xMCA1TDIgN2wxMC01WlwiIC8+PHBhdGggZD1cIm0yIDEyIDEwIDUgMTAtNU0yIDE3bDEwIDUgMTAtNVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1pbnVzID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk01IDEyaDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpTW9vbiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMjEgMTNBOSA5IDAgMSAxIDExIDNhNyA3IDAgMCAwIDEwIDEwWlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1vdXNlUG9pbnRlciA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtNCAzIDcgMTcgMi4zLTYuN0wyMCAxMSA0IDNaXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpUGx1cyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTIgNXYxNE01IDEyaDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpUmVkbzIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTE1IDQgNSA1LTUgNVwiIC8+PHBhdGggZD1cIk0yMCA5aC05YTcgNyAwIDAgMC03IDd2MVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVN1biA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNFwiIC8+PHBhdGggZD1cIk0xMiAydjJtMCAxNnYyTTQuOSA0LjlsMS40IDEuNG0xMS40IDExLjQgMS40IDEuNE0yIDEyaDJtMTYgMGgyTTQuOSAxOS4xbDEuNC0xLjRNMTcuNyA2LjNsMS40LTEuNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVRyYXNoMiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMyA2aDE4TTggNlY0aDh2Mm0zIDAtMSAxNUg2TDUgNm01IDR2N200LTd2N1wiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVVuZG8yID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk05IDQgNCA5bDUgNVwiIC8+PHBhdGggZD1cIk00IDloOWE3IDcgMCAwIDEgNyA3djFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlVcGxvYWQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDE1VjNtLTQgNCA0LTQgNCA0TTQgMTR2NmgxNnYtNlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUJydXNoID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xNC41IDQuNSA1IDVMMTAgMTlINXYtNVpcIiAvPjxwYXRoIGQ9XCJtMTIgNyA1IDVNNSAxOWMtMS41IDAtMi41IDEtMi41IDJcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlDcm9wID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk02IDJ2MTRhMiAyIDAgMCAwIDIgMmgxNE0yIDZoMTRhMiAyIDAgMCAxIDIgMnYxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVR5cGUgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTQgNVYzaDE2djJNOSAyMWg2TTEyIDN2MThcIiAvPjwvSWNvbj47XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgQkxFTkRfTU9ERVMsIHR5cGUgQmxlbmRNb2RlLCB0eXBlIFRleHRBbGlnbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGNvbW1pdFRyYW5zZm9ybXMsIHNldFNlbGVjdGlvbkJsZW5kTW9kZSwgdXBkYXRlVGV4dExheWVyIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5cbnR5cGUgRmllbGRQcm9wcyA9IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlcjsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyOyBzdGVwPzogbnVtYmVyOyB1bml0Pzogc3RyaW5nOyBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlckZpZWxkKHsgbGFiZWwsIHZhbHVlLCBtaW4sIG1heCwgc3RlcCA9IDEsIHVuaXQgPSBcIlwiLCBvbkNoYW5nZSB9OiBGaWVsZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3Atc2xpZGVyXCI+XG4gICAgICA8bGFiZWw+PHNwYW4+e2xhYmVsfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJwcm9wLXZhbHVlXCI+e01hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwfXt1bml0fTwvc3Bhbj48L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17bWlufSBtYXg9e21heH0gc3RlcD17c3RlcH0gdmFsdWU9e3ZhbHVlfSBvbklucHV0PXsoZTogRXZlbnQpID0+IG9uQ2hhbmdlKE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSl9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOdW1iZXJGaWVsZCh7IGxhYmVsLCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXAgPSAxLCB1bml0ID0gXCJcIiwgb25DaGFuZ2UgfTogRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3AtbnVtYmVyXCI+XG4gICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyLXdyYXBcIj48aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17bWlufSBtYXg9e21heH0gc3RlcD17c3RlcH0gdmFsdWU9e01hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IG5leHQgPSBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobmV4dCkpIG9uQ2hhbmdlKE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBuZXh0KSkpOyB9fSAvPjxpPnt1bml0fTwvaT48L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERyb3Bkb3duPFQgZXh0ZW5kcyBzdHJpbmc+KHsgbGFiZWwsIHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSB9OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBUOyBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBUOyBsYWJlbDogc3RyaW5nIH0+OyBvbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB2b2lkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLXNlbGVjdFwiPjxzcGFuPntsYWJlbH08L3NwYW4+PHNlbGVjdCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IG9uQ2hhbmdlKChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlIGFzIFQpfT57b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gPG9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5sYWJlbH08L29wdGlvbj4pfTwvc2VsZWN0PjwvbGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGUoeyBsYWJlbCwgY2hlY2tlZCwgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuOyBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQgfSkge1xuICByZXR1cm4gPGxhYmVsIGNsYXNzTmFtZT1cInByb3AtZmllbGQgcHJvcC10b2dnbGVcIj48c3Bhbj57bGFiZWx9PC9zcGFuPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZSgoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpfSAvPjxpIC8+PC9sYWJlbD47XG59XG5cbnR5cGUgSHN2ID0geyBoOiBudW1iZXI7IHM6IG51bWJlcjsgdjogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIGhleFJnYihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHZhbGlkID0gL14jWzAtOWEtZl17Nn0kL2kudGVzdChoZXgpID8gaGV4IDogXCIjMDAwMDAwXCI7XG4gIHJldHVybiBbTnVtYmVyLnBhcnNlSW50KHZhbGlkLnNsaWNlKDEsIDMpLCAxNiksIE51bWJlci5wYXJzZUludCh2YWxpZC5zbGljZSgzLCA1KSwgMTYpLCBOdW1iZXIucGFyc2VJbnQodmFsaWQuc2xpY2UoNSwgNyksIDE2KV07XG59XG5cbmZ1bmN0aW9uIHJnYkhleChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgcGFydCA9ICh2YWx1ZTogbnVtYmVyKSA9PiBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpKSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAjJHtwYXJ0KHIpfSR7cGFydChnKX0ke3BhcnQoYil9YDtcbn1cblxuZnVuY3Rpb24gcmdiSHN2KHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIpOiBIc3Yge1xuICBjb25zdCBbcm4sIGduLCBibl0gPSBbciAvIDI1NSwgZyAvIDI1NSwgYiAvIDI1NV07XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KHJuLCBnbiwgYm4pLCBtaW4gPSBNYXRoLm1pbihybiwgZ24sIGJuKSwgZCA9IG1heCAtIG1pbjtcbiAgbGV0IGggPSAwO1xuICBpZiAoZCkgaCA9IG1heCA9PT0gcm4gPyAoKGduIC0gYm4pIC8gZCkgJSA2IDogbWF4ID09PSBnbiA/IChibiAtIHJuKSAvIGQgKyAyIDogKHJuIC0gZ24pIC8gZCArIDQ7XG4gIHJldHVybiB7IGg6ICgoaCAqIDYwKSArIDM2MCkgJSAzNjAsIHM6IG1heCA/IGQgLyBtYXggOiAwLCB2OiBtYXggfTtcbn1cblxuZnVuY3Rpb24gaHN2UmdiKHsgaCwgcywgdiB9OiBIc3YpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBjID0gdiAqIHMsIHggPSBjICogKDEgLSBNYXRoLmFicygoKGggLyA2MCkgJSAyKSAtIDEpKSwgbSA9IHYgLSBjO1xuICBjb25zdCB2YWx1ZXMgPSBoIDwgNjAgPyBbYywgeCwgMF0gOiBoIDwgMTIwID8gW3gsIGMsIDBdIDogaCA8IDE4MCA/IFswLCBjLCB4XSA6IGggPCAyNDAgPyBbMCwgeCwgY10gOiBoIDwgMzAwID8gW3gsIDAsIGNdIDogW2MsIDAsIHhdO1xuICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWUpID0+ICh2YWx1ZSArIG0pICogMjU1KSBhcyBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2xvclBpY2tlcih7IHZhbHVlLCBvbkNoYW5nZSB9OiB7IHZhbHVlOiBzdHJpbmc7IG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCB9KSB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IGhleFJnYih2YWx1ZSk7XG4gIGNvbnN0IGhzdiA9IHJnYkhzdihyLCBnLCBiKTtcbiAgY29uc3QgaHVlSGV4ID0gcmdiSGV4KC4uLmhzdlJnYih7IGg6IGhzdi5oLCBzOiAxLCB2OiAxIH0pKTtcblxuICBmdW5jdGlvbiBzZXRIc3YobmV4dDogSHN2KSB7IG9uQ2hhbmdlKHJnYkhleCguLi5oc3ZSZ2IobmV4dCkpKTsgfVxuICBmdW5jdGlvbiBwaWNrU3YoZTogUG9pbnRlckV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHNldEhzdih7IGg6IGhzdi5oLCBzOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgpKSwgdjogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgMSAtIChlLmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodCkpIH0pO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGV5ZWRyb3AoKSB7XG4gICAgY29uc3QgRXllRHJvcHBlckN0b3IgPSAod2luZG93IGFzIHVua25vd24gYXMgeyBFeWVEcm9wcGVyPzogbmV3ICgpID0+IHsgb3BlbjogKCkgPT4gUHJvbWlzZTx7IHNSR0JIZXg6IHN0cmluZyB9PiB9IH0pLkV5ZURyb3BwZXI7XG4gICAgaWYgKCFFeWVEcm9wcGVyQ3RvcikgcmV0dXJuO1xuICAgIHRyeSB7IG9uQ2hhbmdlKChhd2FpdCBuZXcgRXllRHJvcHBlckN0b3IoKS5vcGVuKCkpLnNSR0JIZXgpOyB9IGNhdGNoIHsgLyogY2FuY2VsbGVkICovIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1waWNrZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3YtcGlja2VyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBodWVIZXggfX0gb25Qb2ludGVyRG93bj17cGlja1N2fSBvblBvaW50ZXJNb3ZlPXsoZTogUG9pbnRlckV2ZW50KSA9PiB7IGlmIChlLmJ1dHRvbnMgPT09IDEpIHBpY2tTdihlKTsgfX0+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGxlZnQ6IGAke2hzdi5zICogMTAwfSVgLCB0b3A6IGAkeygxIC0gaHN2LnYpICogMTAwfSVgIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJodWUtc2xpZGVyXCIgYXJpYS1sYWJlbD1cIkh1ZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj17MH0gbWF4PXszNTl9IHZhbHVlPXtNYXRoLnJvdW5kKGhzdi5oKX0gb25JbnB1dD17KGU6IEV2ZW50KSA9PiBzZXRIc3YoeyAuLi5oc3YsIGg6IE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSB9KX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itcm93XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrZXIgY29sb3Itc3dhdGNoXCI+PGkgc3R5bGU9e3sgYmFja2dyb3VuZDogdmFsdWUgfX0gLz48L3NwYW4+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoZXgtaW5wdXRcIiBhcmlhLWxhYmVsPVwiSGV4IGNvbG9yXCIgdmFsdWU9e3ZhbHVlLnRvVXBwZXJDYXNlKCl9IG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IHsgY29uc3QgbmV4dCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7IGlmICgvXiNbMC05YS1mXXs2fSQvaS50ZXN0KG5leHQpKSBvbkNoYW5nZShuZXh0KTsgfX0gLz5cbiAgICAgICAgeyh3aW5kb3cgYXMgdW5rbm93biBhcyB7IEV5ZURyb3BwZXI/OiB1bmtub3duIH0pLkV5ZURyb3BwZXIgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJleWVkcm9wcGVyXCIgdGl0bGU9XCJQaWNrIGNvbG9yIGZyb20gc2NyZWVuXCIgb25DbGljaz17KCkgPT4gdm9pZCBleWVkcm9wKCl9Plx1MjMzRTwvYnV0dG9uPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmdiLXJvd1wiPnsoW3IsIGcsIGJdIGFzIG51bWJlcltdKS5tYXAoKGNoYW5uZWwsIGluZGV4KSA9PiA8bGFiZWwga2V5PXtpbmRleH0+PHNwYW4+e1wiUkdCXCJbaW5kZXhdfTwvc3Bhbj48aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj17MH0gbWF4PXsyNTV9IHZhbHVlPXtjaGFubmVsfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IHJnYiA9IFtyLCBnLCBiXTsgcmdiW2luZGV4XSA9IE51bWJlcigoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTsgb25DaGFuZ2UocmdiSGV4KHJnYlswXSwgcmdiWzFdLCByZ2JbMl0pKTsgfX0gLz48L2xhYmVsPil9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlbGVjdGlvblByb3BlcnRpZXMoeyBsYXllcklkIH06IHsgbGF5ZXJJZDogc3RyaW5nIH0pIHtcbiAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gIGNvbnN0IGxheWVyID0gZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybiBudWxsO1xuICBmdW5jdGlvbiBjaGFuZ2Uoa2V5OiBcIm9wYWNpdHlcIiB8IFwidmlzaWJsZVwiLCB2YWx1ZTogbnVtYmVyIHwgYm9vbGVhbikge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuO1xuICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJQcm9wZXJ0aWVzXCIsIFt7IGlkOiBsYXllcklkLCBiZWZvcmU6IHsgW2tleV06IGN1cnJlbnRba2V5XSB9LCBhZnRlcjogeyBba2V5XTogdmFsdWUgfSB9XSk7XG4gIH1cbiAgcmV0dXJuIDw+XG4gICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiT3BhY2l0eVwiIHZhbHVlPXtNYXRoLnJvdW5kKGxheWVyLm9wYWNpdHkgKiAxMDApfSBtaW49ezB9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gY2hhbmdlKFwib3BhY2l0eVwiLCB2IC8gMTAwKX0gLz5cbiAgICA8RHJvcGRvd248QmxlbmRNb2RlPiBsYWJlbD1cIkJsZW5kXCIgdmFsdWU9e2xheWVyLmJsZW5kTW9kZX0gb3B0aW9ucz17QkxFTkRfTU9ERVMubWFwKCh2YWx1ZSkgPT4gKHsgdmFsdWUsIGxhYmVsOiB2YWx1ZS5yZXBsYWNlKC8tL2csIFwiIFwiKS5yZXBsYWNlKC9eLi8sIChsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKSB9KSl9IG9uQ2hhbmdlPXtzZXRTZWxlY3Rpb25CbGVuZE1vZGV9IC8+XG4gICAgPFRvZ2dsZSBsYWJlbD1cIlZpc2libGVcIiBjaGVja2VkPXtsYXllci52aXNpYmxlfSBvbkNoYW5nZT17KHYpID0+IGNoYW5nZShcInZpc2libGVcIiwgdil9IC8+XG4gIDwvPjtcbn1cblxuZnVuY3Rpb24gVGV4dERlZmF1bHRzKCkge1xuICBjb25zdCBmb250RmFtaWx5ID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRGb250RmFtaWx5KTtcbiAgY29uc3QgZm9udFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEZvbnRTaXplKTtcbiAgY29uc3QgZm9udFdlaWdodCA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0Rm9udFdlaWdodCk7XG4gIGNvbnN0IGFsaWduID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRBbGlnbik7XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dExpbmVIZWlnaHQpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb24gdGV4dC1wcm9wZXJ0aWVzXCI+XG4gICAgPHAgY2xhc3NOYW1lPVwidG9vbC1oaW50XCI+Q2xpY2sgdGhlIGNhbnZhcyB0byBhZGQgdGV4dC48L3A+XG4gICAgPERyb3Bkb3duIGxhYmVsPVwiRm9udFwiIHZhbHVlPXtmb250RmFtaWx5fSBvcHRpb25zPXtbXCJJbnRlclwiLCBcIkFyaWFsXCIsIFwiR2VvcmdpYVwiLCBcIkNvdXJpZXIgTmV3XCIsIFwiVGltZXMgTmV3IFJvbWFuXCJdLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUgfSkpfSBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgdGV4dEZvbnRGYW1pbHk6IHYgfSl9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWdyaWRcIj48TnVtYmVyRmllbGQgbGFiZWw9XCJTaXplXCIgdmFsdWU9e2ZvbnRTaXplfSBtaW49ezZ9IG1heD17NTAwfSB1bml0PVwicHhcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgdGV4dEZvbnRTaXplOiB2IH0pfSAvPjxEcm9wZG93biBsYWJlbD1cIldlaWdodFwiIHZhbHVlPXtTdHJpbmcoZm9udFdlaWdodCl9IG9wdGlvbnM9e1sxMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw5MDBdLm1hcCgodikgPT4gKHsgdmFsdWU6IFN0cmluZyh2KSwgbGFiZWw6IFN0cmluZyh2KSB9KSl9IG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyB0ZXh0Rm9udFdlaWdodDogTnVtYmVyKHYpIH0pfSAvPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1maWVsZFwiPjxzcGFuPkFsaWdubWVudDwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnQtY29udHJvbFwiPnsoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdIGFzIFRleHRBbGlnbltdKS5tYXAoKHZhbHVlKSA9PiA8YnV0dG9uIGtleT17dmFsdWV9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2FsaWduID09PSB2YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSh7IHRleHRBbGlnbjogdmFsdWUgfSl9Pnt2YWx1ZVswXS50b1VwcGVyQ2FzZSgpfTwvYnV0dG9uPil9PC9kaXY+PC9kaXY+XG4gICAgPE51bWJlckZpZWxkIGxhYmVsPVwiTGluZSBoZWlnaHRcIiB2YWx1ZT17bGluZUhlaWdodH0gbWluPXswLjZ9IG1heD17M30gc3RlcD17MC4wNX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRMaW5lSGVpZ2h0OiB2IH0pfSAvPlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9wZXJ0aWVzUGFuZWwoeyBoZWlnaHQgfTogeyBoZWlnaHQ/OiBudW1iZXIgfSkge1xuICBjb25zdCB0b29sID0gdXNlRWRpdG9yKChzKSA9PiBzLnRvb2wpO1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gIGNvbnN0IGJydXNoU2l6ZSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaFNpemUpO1xuICBjb25zdCBicnVzaEhhcmRuZXNzID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoSGFyZG5lc3MpO1xuICBjb25zdCBicnVzaE9wYWNpdHkgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hPcGFjaXR5KTtcbiAgY29uc3QgYnJ1c2hGbG93ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoRmxvdyk7XG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jPy5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3Rpb25bc2VsZWN0aW9uLmxlbmd0aCAtIDFdKTtcbiAgY29uc3QgdGV4dCA9IHNlbGVjdGVkPy50ZXh0O1xuICB1c2VFZmZlY3QoKCkgPT4geyBpZiAodGV4dCkgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IHRleHQuY29sb3IgfSk7IH0sIFtzZWxlY3RlZD8uaWRdKTtcblxuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvcGVydGllcy1wYW5lbFwiIHN0eWxlPXtoZWlnaHQgPyB7IGhlaWdodCB9IDogdW5kZWZpbmVkfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRcIj48c3Bhbj57dG9vbCA9PT0gXCJicnVzaFwiID8gXCJCcnVzaFwiIDogdG9vbCA9PT0gXCJ0ZXh0XCIgfHwgdGV4dCA/IFwiVGV4dFwiIDogc2VsZWN0ZWQgPyBcIlByb3BlcnRpZXNcIiA6IFwiQ2FudmFzXCJ9PC9zcGFuPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydGllcy1ib2R5XCI+XG4gICAgICB7dG9vbCA9PT0gXCJicnVzaFwiID8gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb25cIj5cbiAgICAgICAgPFNsaWRlckZpZWxkIGxhYmVsPVwiU2l6ZVwiIHZhbHVlPXticnVzaFNpemV9IG1pbj17MX0gbWF4PXszMDB9IHVuaXQ9XCJweFwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyBicnVzaFNpemU6IHYgfSl9IC8+XG4gICAgICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIkhhcmRuZXNzXCIgdmFsdWU9e2JydXNoSGFyZG5lc3N9IG1pbj17MH0gbWF4PXsxMDB9IHVuaXQ9XCIlXCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IGJydXNoSGFyZG5lc3M6IHYgfSl9IC8+XG4gICAgICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIk9wYWNpdHlcIiB2YWx1ZT17YnJ1c2hPcGFjaXR5fSBtaW49ezF9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyBicnVzaE9wYWNpdHk6IHYgfSl9IC8+XG4gICAgICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIkZsb3dcIiB2YWx1ZT17YnJ1c2hGbG93fSBtaW49ezF9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyBicnVzaEZsb3c6IHYgfSl9IC8+XG4gICAgICA8L2Rpdj4gOiB0ZXh0ICYmIHNlbGVjdGVkID8gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb24gdGV4dC1wcm9wZXJ0aWVzXCI+XG4gICAgICAgIDxEcm9wZG93biBsYWJlbD1cIkZvbnRcIiB2YWx1ZT17dGV4dC5mb250RmFtaWx5fSBvcHRpb25zPXtbXCJJbnRlclwiLCBcIkFyaWFsXCIsIFwiR2VvcmdpYVwiLCBcIkNvdXJpZXIgTmV3XCIsIFwiVGltZXMgTmV3IFJvbWFuXCJdLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUgfSkpfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBmb250RmFtaWx5OiB2IH0sIFwiRm9udFwiKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wLWdyaWRcIj48TnVtYmVyRmllbGQgbGFiZWw9XCJTaXplXCIgdmFsdWU9e3RleHQuZm9udFNpemV9IG1pbj17Nn0gbWF4PXs1MDB9IHVuaXQ9XCJweFwiIG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGZvbnRTaXplOiB2IH0sIFwiVGV4dCBzaXplXCIpfSAvPjxEcm9wZG93biBsYWJlbD1cIldlaWdodFwiIHZhbHVlPXtTdHJpbmcodGV4dC5mb250V2VpZ2h0KX0gb3B0aW9ucz17WzEwMCwzMDAsNDAwLDUwMCw2MDAsNzAwLDkwMF0ubWFwKCh2KSA9PiAoeyB2YWx1ZTogU3RyaW5nKHYpLCBsYWJlbDogU3RyaW5nKHYpIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgZm9udFdlaWdodDogTnVtYmVyKHYpIH0sIFwiVGV4dCB3ZWlnaHRcIil9IC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1maWVsZFwiPjxzcGFuPkFsaWdubWVudDwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cInNlZ21lbnQtY29udHJvbFwiPnsoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdIGFzIFRleHRBbGlnbltdKS5tYXAoKGFsaWduKSA9PiA8YnV0dG9uIGtleT17YWxpZ259IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3RleHQuYWxpZ24gPT09IGFsaWduID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBhbGlnbiB9LCBcIlRleHQgYWxpZ25tZW50XCIpfT57YWxpZ25bMF0udG9VcHBlckNhc2UoKX08L2J1dHRvbj4pfTwvZGl2PjwvZGl2PlxuICAgICAgICA8TnVtYmVyRmllbGQgbGFiZWw9XCJMaW5lIGhlaWdodFwiIHZhbHVlPXt0ZXh0LmxpbmVIZWlnaHR9IG1pbj17MC42fSBtYXg9ezN9IHN0ZXA9ezAuMDV9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGxpbmVIZWlnaHQ6IHYgfSwgXCJMaW5lIGhlaWdodFwiKX0gLz5cbiAgICAgIDwvZGl2PiA6IHRvb2wgPT09IFwidGV4dFwiID8gPFRleHREZWZhdWx0cyAvPiA6IHNlbGVjdGVkID8gPGRpdiBjbGFzc05hbWU9XCJwcm9wLXNlY3Rpb25cIj48U2VsZWN0aW9uUHJvcGVydGllcyBsYXllcklkPXtzZWxlY3RlZC5pZH0gLz48L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJwcm9wZXJ0aWVzLWVtcHR5XCI+U2VsZWN0IGEgbGF5ZXIgb3IgY2hvb3NlIGEgdG9vbC48L3A+fVxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+O1xufVxuIiwgIi8vIExheWVycyBwYW5lbDogdG9wLWZpcnN0IGxpc3Qgd2l0aCB2aXNpYmlsaXR5IHRvZ2dsZXMsIGlubGluZSByZW5hbWUsXG4vLyBkcmFnLXRvLXJlb3JkZXIsIGFuIG9wYWNpdHkgc2xpZGVyLCBhbmQgZHVwbGljYXRlL2RlbGV0ZSBhY3Rpb25zLlxuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgY2xlYW5OYW1lLCB0eXBlIExheWVyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBhZGRCbGFua0xheWVyLFxuICAgIHJlbmFtZUxheWVyLFxuICAgIHJlb3JkZXJMYXllcixcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlU2VsZWN0ZWQsXG4gICAgdG9nZ2xlVmlzaWJsZSxcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnkgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyB1c2VFZGl0b3IgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IEZpRXllLCBGaUV5ZU9mZiwgRmlMYXllcnMsIEZpUGx1cyB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzUGFuZWwgfSBmcm9tIFwiLi9Qcm9wZXJ0aWVzUGFuZWxcIjtcblxuZnVuY3Rpb24gTGF5ZXJUaHVtYih7IGxheWVyIH06IHsgbGF5ZXI6IExheWVyIH0pIHtcbiAgICBjb25zdCBhc3NldCA9IHVzZUFzc2V0RW50cnkobGF5ZXIuYXNzZXRJZCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tlciBsYXllci10aHVtYlwiPlxuICAgICAgICAgICAge2Fzc2V0ID8gPGltZyBhbHQ9XCJcIiBzcmM9e2Fzc2V0LnNyY30gZHJhZ2dhYmxlPXtmYWxzZX0gLz4gOiBudWxsfVxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gTGF5ZXJSb3dWaWV3KHtcbiAgICBsYXllcixcbiAgICBkaXNwbGF5SW5kZXgsXG4gICAgc2VsZWN0ZWQsXG4gICAgb25EcmFnRnJvbSxcbiAgICBkcm9wTWFyayxcbn06IHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgZGlzcGxheUluZGV4OiBudW1iZXI7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgb25EcmFnRnJvbTogKHNsb3Q6IG51bWJlcikgPT4gdm9pZDtcbiAgICBkcm9wTWFyazogXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgbnVsbDtcbn0pIHtcbiAgICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBjb21taXRSZW5hbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICByZW5hbWVMYXllcihsYXllci5pZCwgY2xlYW5OYW1lKGlucHV0LnZhbHVlLCBsYXllci5uYW1lKSk7XG4gICAgICAgIHNldEVkaXRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXshZWRpdGluZ31cbiAgICAgICAgICAgIGRhdGEtZGlzcGxheS1pbmRleD17ZGlzcGxheUluZGV4fVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlOiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlcj8uc2V0RGF0YShcInRleHQvcGxhaW5cIiwgU3RyaW5nKGRpc3BsYXlJbmRleCkpO1xuICAgICAgICAgICAgICAgIG9uRHJhZ0Zyb20oZGlzcGxheUluZGV4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB0b2dnbGVTZWxlY3RlZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGF5ZXItcm93ICR7c2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSAke2xheWVyLnZpc2libGUgPyBcIlwiIDogXCJoaWRkZW5cIn1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZHJvcE1hcmsgPyA8c3BhbiBjbGFzc05hbWU9e2Bkcm9wLW1hcmsgJHtkcm9wTWFya31gfSAvPiA6IG51bGx9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xheWVyLnZpc2libGUgPyBcIkhpZGUgbGF5ZXJcIiA6IFwiU2hvdyBsYXllclwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVZpc2libGUobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlzaWJpbGl0eVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc2libGUgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxMYXllclRodW1iIGxheWVyPXtsYXllcn0gLz5cbiAgICAgICAgICAgIHtlZGl0aW5nID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2NvbW1pdFJlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHNldEVkaXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkRibENsaWNrPXsoKSA9PiBzZXRFZGl0aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJzUGFuZWwoKSB7XG4gICAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLnNlbGVjdGlvbik7XG4gICAgY29uc3QgW2Ryb3BTbG90LCBzZXREcm9wU2xvdF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbcGFuZWxXaWR0aCwgc2V0UGFuZWxXaWR0aF0gPSB1c2VTdGF0ZSgoKSA9PiBNYXRoLm1heCgyMjAsIE1hdGgubWluKDQyMCwgTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXBhbmVsLXdpZHRoXCIpKSB8fCAyNDQpKSk7XG4gICAgY29uc3QgW3Byb3BlcnRpZXNIZWlnaHQsIHNldFByb3BlcnRpZXNIZWlnaHRdID0gdXNlU3RhdGUoKCkgPT4gTWF0aC5tYXgoMTUwLCBNYXRoLm1pbig1MDAsIE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlLWVkaXRvci1wcm9wZXJ0aWVzLWhlaWdodFwiKSkgfHwgMjMwKSkpO1xuICAgIGNvbnN0IGRyYWdGcm9tUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHBhbmVsUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcblxuICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIERpc3BsYXkgb3JkZXIgaXMgdG9wIGxheWVyIGZpcnN0OyB0aGUgZG9jIHN0b3JlcyBib3R0b20tZmlyc3QuXG4gICAgY29uc3QgZGlzcGxheSA9IFsuLi5kb2MubGF5ZXJzXS5yZXZlcnNlKCk7XG4gICAgY29uc3QgY291bnQgPSBkb2MubGF5ZXJzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHNsb3RGcm9tRXZlbnQoZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgcm93ID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiW2RhdGEtZGlzcGxheS1pbmRleF1cIik7XG4gICAgICAgIGlmICghcm93KSByZXR1cm4gZHJvcFNsb3QgPz8gMDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIocm93LmdldEF0dHJpYnV0ZShcImRhdGEtZGlzcGxheS1pbmRleFwiKSk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiBlLmNsaWVudFkgPCByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiA/IGluZGV4IDogaW5kZXggKyAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmcm9tID0gZHJhZ0Zyb21SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGRyb3BTbG90O1xuICAgICAgICBkcmFnRnJvbVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgc2V0RHJvcFNsb3QobnVsbCk7XG4gICAgICAgIGlmIChmcm9tID09PSBudWxsIHx8IHNsb3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG90ID4gZnJvbSA/IHNsb3QgLSAxIDogc2xvdDtcbiAgICAgICAgaWYgKGFkanVzdGVkID09PSBmcm9tKSByZXR1cm47XG4gICAgICAgIC8vIENvbnZlcnQgZGlzcGxheSBjb29yZGluYXRlcyAodG9wLWZpcnN0KSB0byBkb2MgY29vcmRpbmF0ZXMgKGJvdHRvbS1maXJzdCkuXG4gICAgICAgIHJlb3JkZXJMYXllcihjb3VudCAtIDEgLSBmcm9tLCBjb3VudCAtIDEgLSBhZGp1c3RlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSZXNpemUoa2luZDogXCJ3aWR0aFwiIHwgXCJwcm9wZXJ0aWVzXCIsIGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxUb3AgPSBwYW5lbFJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPz8gMDtcbiAgICAgICAgY29uc3Qgb25Nb3ZlID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwid2lkdGhcIikgc2V0UGFuZWxXaWR0aChNYXRoLm1heCgyMjAsIE1hdGgubWluKDQyMCwgd2luZG93LmlubmVyV2lkdGggLSBlLmNsaWVudFgpKSk7XG4gICAgICAgICAgICBlbHNlIHNldFByb3BlcnRpZXNIZWlnaHQoTWF0aC5tYXgoMTUwLCBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjcsIGUuY2xpZW50WSAtIHBhbmVsVG9wKSkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvblVwID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgb25Nb3ZlKGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG9uVXApO1xuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwid2lkdGhcIikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZS1lZGl0b3ItcGFuZWwtd2lkdGhcIiwgU3RyaW5nKE1hdGgubWF4KDIyMCwgTWF0aC5taW4oNDIwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIGUuY2xpZW50WCkpKSk7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJwcm9wZXJ0aWVzXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXByb3BlcnRpZXMtaGVpZ2h0XCIsIFN0cmluZyhNYXRoLm1heCgxNTAsIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNywgZS5jbGllbnRZIC0gcGFuZWxUb3ApKSkpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvblVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGUgcmVmPXtwYW5lbFJlZn0gY2xhc3NOYW1lPVwibGF5ZXJzLXBhbmVsXCIgc3R5bGU9e3sgd2lkdGg6IHBhbmVsV2lkdGggfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXdpZHRoLXJlc2l6ZXJcIiBvblBvaW50ZXJEb3duPXsoZTogUG9pbnRlckV2ZW50KSA9PiBzdGFydFJlc2l6ZShcIndpZHRoXCIsIGUpfSAvPlxuICAgICAgICAgICAgPFByb3BlcnRpZXNQYW5lbCBoZWlnaHQ9e3Byb3BlcnRpZXNIZWlnaHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcmVzaXplclwiIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IHN0YXJ0UmVzaXplKFwicHJvcGVydGllc1wiLCBlKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZCBsYXllcnMtaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxGaUxheWVycyAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxheWVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBsYXllclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWFkZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEJsYW5rTGF5ZXIoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGaVBsdXMgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFNsb3Qoc2xvdEZyb21FdmVudChlKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0RHJvcFNsb3QobnVsbCl9XG4gICAgICAgICAgICAgICAgb25Ecm9wPXtvbkRyb3B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXkubWFwKChsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyUm93Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0Zyb209eyhzbG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ0Zyb21SZWYuY3VycmVudCA9IHNsb3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hcms9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BTbG90ID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWJvdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRyb3BTbG90ID09PSBpbmRleCArIDEgJiYgaW5kZXggPT09IGNvdW50IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZWxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge2NvdW50ID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tbGF5ZXJzXCI+Tm8gbGF5ZXJzIHlldC48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufVxuIiwgIi8vIExlZnQgdG9vbCByYWlsOiBtb3ZlIC8gaGFuZCB0b29scy5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZmluaXNoVGV4dEVkaXRpbmcsIHVwZGF0ZVRleHRMYXllciB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXRTdGF0ZSwgdXNlRWRpdG9yLCB0eXBlIFRvb2wgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IEZpQnJ1c2gsIEZpQ3JvcCwgRmlIYW5kLCBGaU1vdXNlUG9pbnRlciwgRmlUeXBlIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSBcIi4vUHJvcGVydGllc1BhbmVsXCI7XG5cbmNvbnN0IFRPT0xTOiBBcnJheTx7IGlkOiBUb29sOyBsYWJlbDogc3RyaW5nOyBoaW50OiBzdHJpbmc7IGljb246IHR5cGVvZiBGaUhhbmQgfT4gPSBbXG4gIHsgaWQ6IFwibW92ZVwiLCBsYWJlbDogXCJNb3ZlXCIsIGhpbnQ6IFwiVlwiLCBpY29uOiBGaU1vdXNlUG9pbnRlciB9LFxuICB7IGlkOiBcImhhbmRcIiwgbGFiZWw6IFwiSGFuZFwiLCBoaW50OiBcIkhcIiwgaWNvbjogRmlIYW5kIH0sXG4gIHsgaWQ6IFwidGV4dFwiLCBsYWJlbDogXCJUZXh0XCIsIGhpbnQ6IFwiVFwiLCBpY29uOiBGaVR5cGUgfSxcbiAgeyBpZDogXCJicnVzaFwiLCBsYWJlbDogXCJCcnVzaFwiLCBoaW50OiBcIkJcIiwgaWNvbjogRmlCcnVzaCB9LFxuICB7IGlkOiBcImNyb3BcIiwgbGFiZWw6IFwiQ3JvcFwiLCBoaW50OiBcIkNcIiwgaWNvbjogRmlDcm9wIH1cbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBUb29sYmFyKCkge1xuICBjb25zdCB0b29sID0gdXNlRWRpdG9yKChzKSA9PiBzLnRvb2wpO1xuICBjb25zdCBmb3JlZ3JvdW5kQ29sb3IgPSB1c2VFZGl0b3IoKHMpID0+IHMuZm9yZWdyb3VuZENvbG9yKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdXNlRWRpdG9yKChzKSA9PiBzLmJhY2tncm91bmRDb2xvcik7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gZG9jPy5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3Rpb25bc2VsZWN0aW9uLmxlbmd0aCAtIDFdICYmIGxheWVyLnRleHQpO1xuICBjb25zdCBbY29sb3JPcGVuLCBzZXRDb2xvck9wZW5dID0gdXNlU3RhdGU8XCJmb3JlZ3JvdW5kXCIgfCBcImJhY2tncm91bmRcIiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB0ZXh0Q29sb3JUaW1lciA9IHVzZVJlZjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRleHRDb2xvclRpbWVyLmN1cnJlbnQpLCBbXSk7XG5cbiAgZnVuY3Rpb24gc2V0Rm9yZWdyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IHZhbHVlIH0pO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGV4dENvbG9yVGltZXIuY3VycmVudCk7XG4gICAgaWYgKHNlbGVjdGVkVGV4dD8udGV4dCkgdGV4dENvbG9yVGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZFRleHQuaWQsIHsgY29sb3I6IHZhbHVlIH0sIFwiVGV4dCBjb2xvclwiKSwgMTgwKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ0b29sLXJhaWxcIj5cbiAgICAgIHtUT09MUy5tYXAoKHQpID0+IHtcbiAgICAgICAgY29uc3QgVG9vbEljb24gPSB0Lmljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXt0LmlkfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17YCR7dC5sYWJlbH0gKCR7dC5oaW50fSlgfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dC5sYWJlbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgZmluaXNoVGV4dEVkaXRpbmcoKTsgc2V0U3RhdGUoeyB0b29sOiB0LmlkIH0pOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9vbC1idXR0b24gJHt0b29sID09PSB0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9vbEljb24gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWNvbG9yc1wiIHRpdGxlPVwiRm9yZWdyb3VuZCAvIGJhY2tncm91bmQgY29sb3JzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdsb2JhbC1zd2F0Y2ggYmFja2dyb3VuZFwiIGFyaWEtbGFiZWw9XCJFZGl0IGJhY2tncm91bmQgY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IgfX0gb25DbGljaz17KCkgPT4gc2V0Q29sb3JPcGVuKGNvbG9yT3BlbiA9PT0gXCJiYWNrZ3JvdW5kXCIgPyBudWxsIDogXCJiYWNrZ3JvdW5kXCIpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJnbG9iYWwtc3dhdGNoIGZvcmVncm91bmRcIiBhcmlhLWxhYmVsPVwiRWRpdCBmb3JlZ3JvdW5kIGNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogZm9yZWdyb3VuZENvbG9yIH19IG9uQ2xpY2s9eygpID0+IHNldENvbG9yT3Blbihjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gbnVsbCA6IFwiZm9yZWdyb3VuZFwiKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic3dhcC1jb2xvcnNcIiB0aXRsZT1cIlN3YXAgY29sb3JzIChYKVwiIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcjogZm9yZWdyb3VuZENvbG9yIH0pfT5cdTIxOTc8L2J1dHRvbj5cbiAgICAgICAge2NvbG9yT3BlbiA/IDxkaXYgY2xhc3NOYW1lPVwidG9vbC1jb2xvci1wb3BvdmVyXCIgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+PGRpdiBjbGFzc05hbWU9XCJjb2xvci1wb3BvdmVyLWhlYWRcIj48c3Bhbj57Y29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IFwiRm9yZWdyb3VuZFwiIDogXCJCYWNrZ3JvdW5kXCJ9PC9zcGFuPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldENvbG9yT3BlbihudWxsKX0+XHUwMEQ3PC9idXR0b24+PC9kaXY+PENvbG9yUGlja2VyIHZhbHVlPXtjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gZm9yZWdyb3VuZENvbG9yIDogYmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17Y29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IHNldEZvcmVncm91bmQgOiAodmFsdWUpID0+IHNldFN0YXRlKHsgYmFja2dyb3VuZENvbG9yOiB2YWx1ZSB9KX0gLz48L2Rpdj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biB9IGZyb20gXCIuL0ljb25zXCI7XG5cbnR5cGUgVGhlbWUgPSBcImxpZ2h0XCIgfCBcImRhcmtcIjtcblxuZnVuY3Rpb24gcHJlZmVycmVkVGhlbWUoKTogVGhlbWUge1xuICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXRoZW1lXCIpO1xuICBpZiAoc2F2ZWQgPT09IFwibGlnaHRcIiB8fCBzYXZlZCA9PT0gXCJkYXJrXCIpIHJldHVybiBzYXZlZDtcbiAgcmV0dXJuIG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lVG9nZ2xlKCkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lPigoKSA9PiBwcmVmZXJyZWRUaGVtZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gdGhlbWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIiwgdGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCBuZXh0ID0gdGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbiB0aGVtZS10b2dnbGVcIlxuICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke25leHR9IG1vZGVgfVxuICAgICAgdGl0bGU9e2BTd2l0Y2ggdG8gJHtuZXh0fSBtb2RlYH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKG5leHQpfVxuICAgID5cbiAgICAgIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyA8RmlTdW4gLz4gOiA8RmlNb29uIC8+fVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIiwgIi8vIEVkaXRvciBjaHJvbWU6IGJhY2sgbGluaywgcHJvamVjdCBuYW1lLCB1bmRvL3JlZG8sIHpvb20sIGV4cG9ydCwgYW5kIHRoZVxuLy8gcGVyc2lzdGVuY2Ugc3RhdHVzIGluZGljYXRvciBmZWQgYnkgdGhlIHdyaXRlLWJlaGluZCBxdWV1ZS5cblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGNsZWFuTmFtZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGRvd25sb2FkUG5nIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IGFkZEltYWdlTGF5ZXJzLCByZW5hbWVQcm9qZWN0IH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGNhblJlZG8sIGNhblVuZG8sIHJlZG8sIHVuZG8gfSBmcm9tIFwiLi4vc3RhdGUvaGlzdG9yeVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdEZpdCwgem9vbUJ5IH0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UgfSBmcm9tIFwiLi4vbGliL2ltYWdlXCI7XG5pbXBvcnQge1xuICAgIEZpQXJyb3dMZWZ0LFxuICAgIEZpRG93bmxvYWQsXG4gICAgRmlJbWFnZSxcbiAgICBGaU1pbnVzLFxuICAgIEZpUGx1cyxcbiAgICBGaVJlZG8yLFxuICAgIEZpVW5kbzIsXG59IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCIuL1RoZW1lVG9nZ2xlXCI7XG5cbmZ1bmN0aW9uIEljb25CdXR0b24oe1xuICAgIGxhYmVsLFxuICAgIG9uQ2xpY2ssXG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvcEJhcigpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCB6b29tID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcuem9vbSk7XG4gICAgdXNlRWRpdG9yKChzKSA9PiBzLmhpc3RWZXJzaW9uKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GaWxlcyhldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gWy4uLihpbnB1dC5maWxlcyA/PyBbXSldO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXMubWFwKGZpbGVUb0ltcG9ydGVkSW1hZ2UpKTtcbiAgICAgICAgYWRkSW1hZ2VMYXllcnMoaW1hZ2VzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21taXROYW1lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNsZWFuTmFtZShpbnB1dC52YWx1ZSwgXCJVbnRpdGxlZFwiKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBuYW1lO1xuICAgICAgICByZW5hbWVQcm9qZWN0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wYmFyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiIHRpdGxlPVwiQmFjayB0byBwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxGaUFycm93TGVmdCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkb2MubmFtZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2NvbW1pdE5hbWV9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuYmx1cigpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wYmFyLW5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1zaXplXCI+XG4gICAgICAgICAgICAgICAge2RvYy53aWR0aH1cdTAwRDd7ZG9jLmhlaWdodH1cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiVW5kbyAoXHUyMzE4WilcIiBvbkNsaWNrPXt1bmRvfSBkaXNhYmxlZD17IWNhblVuZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpVW5kbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiUmVkbyAoXHUyMUU3XHUyMzE4WilcIiBvbkNsaWNrPXtyZWRvfSBkaXNhYmxlZD17IWNhblJlZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpUmVkbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb20tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlpvb20gb3V0IChcdTIzMTgtKVwiIG9uQ2xpY2s9eygpID0+IHpvb21CeSgtMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlNaW51cyAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0Rml0fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpdCB0byBzY3JlZW4gKFx1MjMxODApXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1idXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoem9vbSAqIDEwMCl9JVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiWm9vbSBpbiAoXHUyMzE4KylcIiBvbkNsaWNrPXsoKSA9PiB6b29tQnkoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IHZvaWQgb25GaWxlcyhlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGRvd25sb2FkUG5nKGdldFN0YXRlKCkuZG9jID8/IGRvYyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgRXhwb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuIiwgIi8vIFRoZSBlZGl0b3Igc2NyZWVuOiBsb2FkcyB0aGUgcHJvamVjdCBkb2MgZnJvbSB0aGUgbGl2ZSBxdWVyaWVzIGV4YWN0bHkgb25jZVxuLy8gcGVyIHByb2plY3QgaWQgKGFmdGVyIHRoYXQgdGhlIGxvY2FsIGRvYyBpcyBhdXRob3JpdGF0aXZlIGFuZCBxdWVyeSBwdXNoZXNcbi8vIGFyZSBpZ25vcmVkIFx1MjAxNCB0aGV5IGFyZSBqdXN0IG91ciBvd24gd3JpdGVzIGVjaG9pbmcgYmFjayksIGFuZCBvd25zIGdsb2JhbFxuLy8ga2V5Ym9hcmQgc2hvcnRjdXRzLlxuXG5pbXBvcnQgeyBMaW5rLCB1c2VRdWVyeSwgdXNlUGFyYW1zIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IExheWVyUm93LCBQcm9qZWN0TWV0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gIGNsb3NlUHJvamVjdCxcbiAgY29tYmluZVNlbGVjdGlvbixcbiAgY29weVNlbGVjdGlvbixcbiAgY3V0U2VsZWN0aW9uLFxuICBkZWxldGVTZWxlY3Rpb24sXG4gIGR1cGxpY2F0ZVNlbGVjdGlvbixcbiAgZmxpcFNlbGVjdGlvbkhvcml6b250YWwsXG4gIGZpbmlzaFRleHRFZGl0aW5nLFxuICBudWRnZVNlbGVjdGlvbixcbiAgb3BlblByb2plY3QsXG4gIHBhc3RlQ2xpcGJvYXJkLFxuICBzZXRTZWxlY3Rpb25cbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHF1ZXJ5UmVzdWx0IH0gZnJvbSBcIi4uL3N0YXRlL2FwaVwiO1xuaW1wb3J0IHsgcmVkbywgdW5kbyB9IGZyb20gXCIuLi9zdGF0ZS9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdEZpdCwgem9vbUJ5IH0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IENhbnZhc1N0YWdlIH0gZnJvbSBcIi4vQ2FudmFzU3RhZ2VcIjtcbmltcG9ydCB7IExheWVyc1BhbmVsIH0gZnJvbSBcIi4vTGF5ZXJzUGFuZWxcIjtcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCI7XG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tIFwiLi9Ub3BCYXJcIjtcblxudHlwZSBMYXllclJvd1dpdGhQcm9qZWN0ID0gTGF5ZXJSb3cgJiB7IHByb2plY3RJZDogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGlzVHlwaW5nVGFyZ2V0KHRhcmdldDogRXZlbnRUYXJnZXQgfCBudWxsKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVsID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8IGVsLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fCBlbC5pc0NvbnRlbnRFZGl0YWJsZTtcbn1cblxuZnVuY3Rpb24gdXNlRWRpdG9yU2hvcnRjdXRzKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoaXNUeXBpbmdUYXJnZXQoZS50YXJnZXQpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2QgPSBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5O1xuXG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgaWYgKCFnZXRTdGF0ZSgpLnNwYWNlUGFuKSBzZXRTdGF0ZSh7IHNwYWNlUGFuOiB0cnVlIH0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ6XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5zaGlmdEtleSkgcmVkbygpO1xuICAgICAgICBlbHNlIHVuZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImNcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGNvcHlTZWxlY3Rpb24oKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInhcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGN1dFNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgcGFzdGVDbGlwYm9hcmQoKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImpcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGR1cGxpY2F0ZVNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgdm9pZCBjb21iaW5lU2VsZWN0aW9uKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJoXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCgpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHVwbGljYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgKGUua2V5ID09PSBcIj1cIiB8fCBlLmtleSA9PT0gXCIrXCIpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgem9vbUJ5KDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5ID09PSBcIi1cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHpvb21CeSgtMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkgPT09IFwiMFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVxdWVzdEZpdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVTZWxlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgpLnRvb2wgPT09IFwiY3JvcFwiKSBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICAgICAgZWxzZSBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwidlwiIHx8IGUua2V5ID09PSBcIlZcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiaFwiIHx8IGUua2V5ID09PSBcIkhcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiaGFuZFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiYlwiIHx8IGUua2V5ID09PSBcIkJcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiYnJ1c2hcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInRcIiB8fCBlLmtleSA9PT0gXCJUXCIpIHtcbiAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgc2V0U3RhdGUoeyB0b29sOiBcInRleHRcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCJYXCIpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogc3RhdGUuYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmZvcmVncm91bmRDb2xvciB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJEXCIpIHtcbiAgICAgICAgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiY1wiIHx8IGUua2V5ID09PSBcIkNcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiY3JvcFwiLCBjcm9wUmVjdDogbnVsbCB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RlcCA9IGUuc2hpZnRLZXkgPyAxMCA6IDE7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigtc3RlcCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKHN0ZXAsIDApO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigwLCAtc3RlcCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oMCwgc3RlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHNldFN0YXRlKHsgc3BhY2VQYW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBzZXRTdGF0ZSh7IHNwYWNlUGFuOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uS2V5VXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbkJsdXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlVcCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb25CbHVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0b3IoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtczx7IGlkPzogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkID8/IFwiXCI7XG4gIGNvbnN0IHByb2plY3RzID0gcXVlcnlSZXN1bHQ8UHJvamVjdE1ldGE+KHVzZVF1ZXJ5KFwicHJvamVjdHNcIikpO1xuICBjb25zdCBsYXllclJvd3MgPSBxdWVyeVJlc3VsdDxMYXllclJvd1dpdGhQcm9qZWN0Pih1c2VRdWVyeShcImxheWVyc1wiKSk7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBbdGltZWRPdXQsIHNldFRpbWVkT3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbmVkUmVmID0gdXNlUmVmPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0cy5yZWFkeSB8fCAhbGF5ZXJSb3dzLnJlYWR5IHx8IG9wZW5lZFJlZi5jdXJyZW50ID09PSBpZCkgcmV0dXJuO1xuICAgIGNvbnN0IG1ldGEgPSBwcm9qZWN0cy5pdGVtcy5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XG4gICAgaWYgKCFtZXRhKSByZXR1cm47XG4gICAgb3BlbmVkUmVmLmN1cnJlbnQgPSBpZDtcbiAgICBvcGVuUHJvamVjdChtZXRhLCBsYXllclJvd3MuaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0SWQgPT09IGlkKSk7XG4gIH0sIFtwcm9qZWN0cywgbGF5ZXJSb3dzLCBpZF0pO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBvcGVuZWRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICBjbG9zZVByb2plY3QoKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgLy8gQSBmcmVzaGx5IGNyZWF0ZWQgcHJvamVjdCBjYW4gbGFnIGl0cyBxdWVyeSBwdXNoIGJ5IGEgYmVhdDsgb25seSByZXBvcnRcbiAgLy8gXCJub3QgZm91bmRcIiBpZiBpdCBzdGF5cyBtaXNzaW5nLlxuICBjb25zdCBsb2FkZWQgPSBkb2M/LmlkID09PSBpZDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGVkKSByZXR1cm47XG4gICAgc2V0VGltZWRPdXQoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VGltZWRPdXQodHJ1ZSksIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbbG9hZGVkLCBpZF0pO1xuXG4gIHVzZUVkaXRvclNob3J0Y3V0cygpO1xuXG4gIGlmICghbG9hZGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1wYWdlXCI+XG4gICAgICAgIHt0aW1lZE91dCAmJiBwcm9qZWN0cy5yZWFkeSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+UHJvamVjdCBub3QgZm91bmQ8L3A+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkxvYWRpbmcgcHJvamVjdFx1MjAyNjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXNoZWxsXCI+XG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluXCI+XG4gICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgIDxDYW52YXNTdGFnZSAvPlxuICAgICAgICA8TGF5ZXJzUGFuZWwgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8vIFByb2plY3QgZ2FsbGVyeTogb3BlbiBwcmV2aW91cyBwcm9qZWN0cywgY3JlYXRlIGEgYmxhbmsgb25lIChkZWZhdWx0XG4vLyBkaW1lbnNpb25zKSwgb3IgZHJvcC9waWNrIGFuIGltYWdlIHRvIHN0YXJ0IGEgcHJvamVjdCBhdCB0aGF0IGltYWdlJ3Mgc2l6ZS5cblxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHtcbiAgICBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZW5jb2RlVHJhbnNmb3JtLFxuICAgIHR5cGUgUHJvamVjdE1ldGEsXG4gICAgdHlwZSBQcm9qZWN0VGh1bWIsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuaW1wb3J0IHsgYXBpLCBxdWVyeVJlc3VsdCB9IGZyb20gXCIuLi9zdGF0ZS9hcGlcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IEZpRWRpdDMsIEZpSW1hZ2UsIEZpUGx1cywgRmlUcmFzaDIsIEZpVXBsb2FkIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IFRoZW1lVG9nZ2xlIH0gZnJvbSBcIi4vVGhlbWVUb2dnbGVcIjtcblxuY29uc3QgU0laRV9QUkVTRVRTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJDYW52YXNcIixcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlNxdWFyZVwiLCB3aWR0aDogMTIwMCwgaGVpZ2h0OiAxMjAwIH0sXG4gICAgeyBuYW1lOiBcIlBvcnRyYWl0XCIsIHdpZHRoOiAxMDgwLCBoZWlnaHQ6IDEzNTAgfSxcbiAgICB7IG5hbWU6IFwiTGFuZHNjYXBlXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEwODAgfSxcbl0gYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIHRpbWVBZ28oaXNvOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGlzbykuZ2V0VGltZSgpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1zKSB8fCBtcyA8IDApIHJldHVybiBcImp1c3Qgbm93XCI7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobXMgLyA2MF8wMDApO1xuICAgIGlmIChtaW51dGVzIDwgMSkgcmV0dXJuIFwianVzdCBub3dcIjtcbiAgICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBgJHtob3Vyc31oIGFnb2A7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XG4gICAgaWYgKGRheXMgPCAzMCkgcmV0dXJuIGAke2RheXN9ZCBhZ29gO1xuICAgIHJldHVybiBuZXcgRGF0ZShpc28pLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0Q2FyZCh7XG4gICAgcHJvamVjdCxcbiAgICB0aHVtYixcbiAgICBvbk9wZW4sXG4gICAgb25SZW5hbWUsXG4gICAgb25EZWxldGUsXG59OiB7XG4gICAgcHJvamVjdDogUHJvamVjdE1ldGE7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBvbk9wZW46ICgpID0+IHZvaWQ7XG4gICAgb25SZW5hbWU6ICgpID0+IHZvaWQ7XG4gICAgb25EZWxldGU6ICgpID0+IHZvaWQ7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgcHJvamVjdC1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgT3BlbiAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aHVtYiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e3RodW1ifSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaUltYWdlIGNsYXNzTmFtZT1cInByb2plY3QtZW1wdHktaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25PcGVufSBjbGFzc05hbWU9XCJwcm9qZWN0LW1haW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj57cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qud2lkdGh9XHUwMEQ3e3Byb2plY3QuaGVpZ2h0fSBcdTAwQjd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxheWVyT3JkZXIubGVuZ3RofXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubGF5ZXJPcmRlci5sZW5ndGggPT09IDEgPyBcImxheWVyXCIgOiBcImxheWVyc1wifSBcdTAwQjd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHt0aW1lQWdvKHByb2plY3QudXBkYXRlZEF0KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgUmVuYW1lICR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0MyAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YERlbGV0ZSAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpVHJhc2gyIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gcXVlcnlSZXN1bHQ8UHJvamVjdE1ldGE+KHVzZVF1ZXJ5KFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IHRodW1icyA9IHF1ZXJ5UmVzdWx0PFByb2plY3RUaHVtYj4odXNlUXVlcnkoXCJwcm9qZWN0VGh1bWJzXCIpKTtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbYnVzeSwgc2V0QnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe1xuICAgICAgICB3aWR0aDogREVGQVVMVF9QUk9KRUNUX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQsXG4gICAgfSk7XG4gICAgY29uc3QgZHJhZ0RlcHRoUmVmID0gdXNlUmVmKDApO1xuXG4gICAgY29uc3QgdGh1bWJCeUlkID0gbmV3IE1hcCh0aHVtYnMuaXRlbXMubWFwKCh0KSA9PiBbdC5pZCwgdC50aHVtYl0pKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsYW5rKCkge1xuICAgICAgICBpZiAoYnVzeSkgcmV0dXJuO1xuICAgICAgICBzZXRCdXN5KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGBVbnRpdGxlZCAke3Byb2plY3RzLml0ZW1zLmxlbmd0aCArIDF9YDtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtpZH1gKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRnJvbUZpbGUoZmlsZTogRmlsZSkge1xuICAgICAgICBpZiAoYnVzeSkgcmV0dXJuO1xuICAgICAgICBzZXRCdXN5KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmaWxlVG9JbXBvcnRlZEltYWdlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gZW5jb2RlVHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgdzogaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGlwWDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0RnJvbUltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMgfHwgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBIb21lIG5ldmVyIG9wZW5zIHRoZSBlZGl0b3IgbG9uZyBlbm91Z2ggZm9yIHRoZSBkZWxheWVkIHRodW1iXG4gICAgICAgICAgICAvLyBwYXNzIFx1MjAxNCB3cml0ZSBvbmUgbm93IGZyb20gdGhlIGxvY2FsIGRhdGEgVVJMLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIDM2MCAvIE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2Uud2lkdGggKiBzY2FsZSkpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLmhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwidGh1bWIgZGVjb2RlIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFwaS5zZXRQcm9qZWN0VGh1bWIocmVzdWx0LmlkLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjg1KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodGh1bWJFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCB3cml0ZSBwcm9qZWN0IHRodW1iOlwiLCB0aHVtYkVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNyYykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGkuc2V0UHJvamVjdFRodW1iKHJlc3VsdC5pZCwgcmVzdWx0LnNyYykuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtyZXN1bHQuaWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBwcm9qZWN0IGZyb20gaW1hZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRyYWdEZXB0aFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHZvaWQgY3JlYXRlRnJvbUZpbGUoZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHByb2plY3Q6IFByb2plY3RNZXRhKSB7XG4gICAgICAgIGlmIChjb25maXJtKGBEZWxldGUgXCIke3Byb2plY3QubmFtZX1cIj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lLmApKSB7XG4gICAgICAgICAgICB2b2lkIGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW5hbWUocHJvamVjdDogUHJvamVjdE1ldGEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdm9pZCBhcGkucmVuYW1lUHJvamVjdChwcm9qZWN0LmlkLCBjbGVhbk5hbWUobmFtZSwgcHJvamVjdC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZVwiXG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkcmFnRGVwdGhSZWYuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgPSBNYXRoLm1heCgwLCBkcmFnRGVwdGhSZWYuY3VycmVudCAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnRGVwdGhSZWYuY3VycmVudCA9PT0gMCkgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPmltYWdlIGVkaXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtcGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctcHJvamVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtTSVpFX1BSRVNFVFMubWFwKChwcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldC53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQuaGVpZ2h0ID09PSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmVzZXQgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcHJlc2V0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHByZXNldC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJlc2V0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmVzZXQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQud2lkdGh9IFx1MDBENyB7cHJlc2V0LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgY3JlYXRlQmxhbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkgdm9pZCBjcmVhdGVGcm9tRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlUmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlVcGxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLnJlYWR5ID8gYCgke3Byb2plY3RzLml0ZW1zLmxlbmd0aH0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHshcHJvamVjdHMucmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5Mb2FkaW5nIHByb2plY3RzXHUyMDI2PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IHByb2plY3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcHJvamVjdHMgeWV0LiBDaG9vc2UgYSBzaXplIGFib3ZlIG9yIGRyb3AgYW4gaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMuaXRlbXMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI9e3RodW1iQnlJZC5nZXQocHJvamVjdC5pZCkgPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0LmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17KCkgPT4gb25SZW5hbWUocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RyYWdnaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRyb3AgdG8gY3JlYXRlIGEgcHJvamVjdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2J1c3kgPyA8ZGl2IGNsYXNzTmFtZT1cImJ1c3ktdG9hc3RcIj5DcmVhdGluZyBwcm9qZWN0XHUyMDI2PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL0VkaXRvclwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5jb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIik7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9XG4gICAgc2F2ZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8IHNhdmVkVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gc2F2ZWRUaGVtZVxuICAgICAgICA6IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICAgICAgICA/IFwiZGFya1wiXG4gICAgICAgICAgOiBcImxpZ2h0XCI7XG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAtLWJnOiAjZmZmOyAtLXN1cmZhY2U6ICNmZmY7IC0tc3VyZmFjZS1zdWJ0bGU6ICNmYWZhZmE7IC0tY2FudmFzOiAjZjRmNGY0O1xuICAtLWJvcmRlcjogI2U0ZTRlNDsgLS1ib3JkZXItc3Ryb25nOiAjMTExOyAtLXRleHQ6ICMwYTBhMGE7XG4gIC0tbXV0ZWQ6ICM3MzczNzM7IC0tZmFpbnQ6ICNhM2EzYTM7IC0tYWNjZW50OiAjMjU2M2ViOyAtLWFjY2VudC1ob3ZlcjogIzFkNGVkODtcbiAgLS1hY2NlbnQtc29mdDogI2VmZjZmZjsgLS1kYW5nZXI6ICNkYzI2MjY7IC0tY2hlY2tlci1hOiAjZWNlY2VjOyAtLWNoZWNrZXItYjogI2Q4ZDhkODtcbiAgLS1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwwLDAsLjE0KTtcbiAgLS1zYW5zOiBcIkludGVyXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC0tbW9ubzogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbn1cbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWJnOiAjMTYxNjE2OyAtLXN1cmZhY2U6ICMxYzFjMWM7IC0tc3VyZmFjZS1zdWJ0bGU6ICMxOTE5MTk7IC0tY2FudmFzOiAjMTIxMjEyO1xuICAtLWJvcmRlcjogIzMzMzsgLS1ib3JkZXItc3Ryb25nOiAjZmFmYWZhOyAtLXRleHQ6ICNmMGYwZjA7XG4gIC0tbXV0ZWQ6ICNhOGE4YTg7IC0tZmFpbnQ6ICM2ODY4Njg7IC0tYWNjZW50OiAjM2I4MmY2OyAtLWFjY2VudC1ob3ZlcjogIzI1NjNlYjtcbiAgLS1hY2NlbnQtc29mdDogIzE3MjU1NDsgLS1kYW5nZXI6ICNlZjQ0NDQ7IC0tY2hlY2tlci1hOiAjMzIzMjMyOyAtLWNoZWNrZXItYjogIzI4MjgyODtcbiAgLS1zaGFkb3c6IDAgMThweCA1NnB4IHJnYmEoMCwwLDAsLjU4KTtcbn1cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sLCBib2R5IHsgbWFyZ2luOiAwOyBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuYm9keSB7IGZvbnQ6IDE0cHgvMS41IHZhcigtLXNhbnMpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuYnV0dG9uLCBpbnB1dCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgfVxuYnV0dG9uOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9XG4uY2hlY2tlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZXItYSk7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS1jaGVja2VyLWIpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNzUlLHZhcigtLWNoZWNrZXItYikgNzUlKSxsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tY2hlY2tlci1iKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDc1JSx2YXIoLS1jaGVja2VyLWIpIDc1JSk7IGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsOHB4IDhweDsgfVxuLmNhbnZhcy1kb3RzIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FudmFzKTsgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNvbG9yLW1peChpbiBzcmdiLHZhcigtLW11dGVkKSAyNCUsdHJhbnNwYXJlbnQpIDFweCx0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDsgfVxuLmljb24tYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuLmljb24tYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5pY29uLWJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IC4zOyB9XG4uaWNvbi1idXR0b24gc3ZnIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgfVxuLmJ1dHRvbiB7IG1pbi1oZWlnaHQ6IDM0cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDdweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNTUwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc3Ryb25nKTsgfVxuLmJ1dHRvbi5wcmltYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfVxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpOyB9XG4uYnV0dG9uLmRhbmdlciB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4uYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cblxuLyogSG9tZSAqL1xuLmhvbWUgeyBtaW4taGVpZ2h0OiAxMDB2aDsgcGFkZGluZzogNDZweCAyNHB4IDkwcHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuLmhvbWUtaW5uZXIgeyB3aWR0aDogbWluKDEwMCUsIDc4MHB4KTsgbWFyZ2luOiAwIGF1dG87IH1cbi5icmFuZC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cbi5icmFuZCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMXB4OyBsaW5lLWhlaWdodDogMTsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC0uMDM1ZW07IH1cbi5icmFuZC1tYXJrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogOXB4OyBoZWlnaHQ6IDE3cHg7IG1hcmdpbi1sZWZ0OiA0cHg7IHZlcnRpY2FsLWFsaWduOiAtMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4uYnJhbmQtcm93IC50aGVtZS10b2dnbGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuLmhvbWUtbWV0YSB7IG1hcmdpbjogMTJweCAwIDM4cHg7IHBhZGRpbmctdG9wOiA5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5pbnRybyB7IG1hcmdpbjogMCAwIDI0cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMTNweDsgfVxuLmNyZWF0ZS1wYW5lbCB7IG1hcmdpbi1ib3R0b206IDM4cHg7IH1cbi5leWVicm93IHsgbWFyZ2luOiAwIDAgMTBweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA5ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5wcmVzZXRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW5tYXgoMCwxZnIpKTsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi5wcmVzZXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDExcHg7IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbi5wcmVzZXQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zdHJvbmcpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5wcmVzZXQuc2VsZWN0ZWQgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4ucHJlc2V0LW5hbWUgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogM3B4OyBjb2xvcjogaW5oZXJpdDsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5wcmVzZXQtc2l6ZSB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5jcmVhdGUtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyB9XG4uY3JlYXRlLWFjdGlvbnMgLmJ1dHRvbjpmaXJzdC1vZi10eXBlIHsgZmxleDogMTsgfVxuLnNlY3Rpb24tbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbjogMCAwIDEycHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wOWVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4uc2VjdGlvbi1sYWJlbDo6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBmbGV4OiAxOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuLnByb2plY3QtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxuLnByb2plY3QtY2FyZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTE2cHggbWlubWF4KDAsMWZyKSBhdXRvOyBtaW4taGVpZ2h0OiA4MnB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjEyczsgfVxuLnByb2plY3QtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDY1JSx2YXIoLS1ib3JkZXIpKTsgfVxuLnByb2plY3QtcHJldmlldyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiA3cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlci1hKTsgfVxuLnByb2plY3QtcHJldmlldyBpbWcgeyBkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiA2NnB4OyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ucHJvamVjdC1lbXB0eS1pY29uIHsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6IHZhcigtLWZhaW50KTsgfVxuLnByb2plY3QtbWFpbiB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMTZweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4ucHJvamVjdC1uYW1lIHsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjUwOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnByb2plY3QtaW5mbyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA3cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wMmVtOyB9XG4ucHJvamVjdC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxcHg7IHBhZGRpbmc6IDAgMTBweDsgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTJzOyB9XG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWFjdGlvbnMsIC5wcm9qZWN0LWFjdGlvbnM6Zm9jdXMtd2l0aGluIHsgb3BhY2l0eTogMTsgfVxuLmVtcHR5LXN0YXRlIHsgcGFkZGluZzogNjBweCAyMHB4OyBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250OiAxMnB4IHZhcigtLW1vbm8pOyB9XG4uZHJvcC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgei1pbmRleDogMjA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLWJnKSA4NCUsdHJhbnNwYXJlbnQpOyB9XG4uZHJvcC1vdmVybGF5IHAgeyBwYWRkaW5nOiAzMHB4IDQ4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgZm9udDogMTJweCB2YXIoLS1tb25vKTsgfVxuLmJ1c3ktdG9hc3QgeyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMjRweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IHBhZGRpbmc6IDlweCAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfVxuXG4vKiBFZGl0b3IgKi9cbi5lZGl0b3Itc2hlbGwgeyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDEwMHZoOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdzogaGlkZGVuOyBiYWNrZ3JvdW5kOiB2YXIoLS1jYW52YXMpOyBjb2xvcjogdmFyKC0tdGV4dCk7IHVzZXItc2VsZWN0OiBub25lOyB9XG4uZWRpdG9yLW1haW4geyBkaXNwbGF5OiBmbGV4OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IG1pbi1oZWlnaHQ6IDA7IH1cbi50b3BiYXIgeyBoZWlnaHQ6IDQ2cHg7IGZsZXgtc2hyaW5rOiAwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgcGFkZGluZzogMCAxMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi50b3BiYXItbmFtZSB7IHdpZHRoOiAxNjhweDsgcGFkZGluZzogNXB4IDdweDsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB9XG4udG9wYmFyLW5hbWU6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcik7IH0udG9wYmFyLW5hbWU6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IH1cbi5kb2Mtc2l6ZSwgLnpvb20tYnV0dG9uLCAuc2F2ZS1zdGF0dXMgeyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxOHB4OyBtYXJnaW46IDAgNnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4uc3BhY2VyIHsgZmxleDogMTsgfVxuLnpvb20tY29udHJvbHMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9Lnpvb20tYnV0dG9uIHsgd2lkdGg6IDUycHg7IHBhZGRpbmc6IDVweCAycHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH0uem9vbS1idXR0b246aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5zYXZlLXN0YXR1cyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9LnNhdmUtZG90IHsgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfS5zYXZlZCB7IGJhY2tncm91bmQ6ICMyMmM1NWU7IH0uc2F2aW5nIHsgYmFja2dyb3VuZDogI2Y1OWUwYjsgfS5lcnJvciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IH1cbi50b29sLXJhaWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDU7IHdpZHRoOiA0NHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDdweCAwOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnRvb2wtYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMDsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0udG9vbC1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfS50b29sLWJ1dHRvbi5hY3RpdmUgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9LnRvb2wtYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cbi50b29sYmFyLWNvbG9ycyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDM4cHg7IGhlaWdodDogMzlweDsgbWFyZ2luLXRvcDogYXV0bzsgZmxleC1zaHJpbms6IDA7IH0udG9vbGJhci1jb2xvcnMgLmdsb2JhbC1zd2F0Y2ggeyB3aWR0aDogMjFweDsgaGVpZ2h0OiAyMXB4OyB9LnRvb2xiYXItY29sb3JzIC5nbG9iYWwtc3dhdGNoLmZvcmVncm91bmQgeyBsZWZ0OiAzcHg7IHRvcDogM3B4OyB9LnRvb2xiYXItY29sb3JzIC5nbG9iYWwtc3dhdGNoLmJhY2tncm91bmQgeyByaWdodDogM3B4OyBib3R0b206IDJweDsgfS50b29sYmFyLWNvbG9ycyAuc3dhcC1jb2xvcnMgeyByaWdodDogLTFweDsgdG9wOiAtNXB4OyB9XG4udG9vbC1jb2xvci1wb3BvdmVyIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA3MDsgbGVmdDogNDNweDsgYm90dG9tOiAwOyB3aWR0aDogMjIwcHg7IHBhZGRpbmc6IDlweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH1cbi50b29sLXBvcG92ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyBsZWZ0OiA1MHB4OyB3aWR0aDogMTk2cHg7IHBhZGRpbmc6IDEycHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi50b29sLXBvcG92ZXIgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDExcHg7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMnB4OyB9LnRvb2wtcG9wb3ZlciBsYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyBtYXJnaW46IDhweCAwOyB9LnRvb2wtcG9wb3ZlciBpbnB1dFt0eXBlPVwiY29sb3JcIl0geyB3aWR0aDogMzBweDsgaGVpZ2h0OiAyNHB4OyBwYWRkaW5nOiAxcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9LnRvb2wtcG9wb3ZlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyB3aWR0aDogMTAwJTsgYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9LnRvb2wtcG9wb3ZlciBwIHsgbWFyZ2luOiAwIDAgMTJweDsgfS50b29sLXBvcG92ZXIgLmJ1dHRvbiB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA2cHg7IH0uYnJ1c2gtcHJldmlldyB7IG1heC13aWR0aDogNjRweDsgbWF4LWhlaWdodDogNjRweDsgbWluLXdpZHRoOiAzcHg7IG1pbi1oZWlnaHQ6IDNweDsgbWFyZ2luOiAxMnB4IGF1dG8gMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IH1cbi5sYXllcnMtcGFuZWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAyNDRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5wYW5lbC1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IGhlaWdodDogNDJweDsgcGFkZGluZzogMCAxMnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH0ucGFuZWwtaGVhZCBzdmcgeyB3aWR0aDogMTNweDsgaGVpZ2h0OiAxM3B4OyB9XG4ubGF5ZXJzLWhlYWQgeyBoZWlnaHQ6IDM2cHg7IGZsZXgtc2hyaW5rOiAwOyB9LmxheWVycy1oZWFkIC5sYXllci1hZGQgeyBtYXJnaW4tbGVmdDogYXV0bzsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBjdXJzb3I6IHBvaW50ZXI7IH0ubGF5ZXJzLWhlYWQgLmxheWVyLWFkZDpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgY29sb3I6IHZhcigtLXRleHQpOyB9LmxheWVycy1oZWFkIC5sYXllci1hZGQgc3ZnIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuLnBhbmVsLXdpZHRoLXJlc2l6ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDQ1OyBsZWZ0OiAtM3B4OyB0b3A6IDA7IGJvdHRvbTogMDsgd2lkdGg6IDZweDsgY3Vyc29yOiBldy1yZXNpemU7IH0ucGFuZWwtd2lkdGgtcmVzaXplcjpob3ZlciwucGFuZWwtd2lkdGgtcmVzaXplcjphY3RpdmUgeyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1hY2NlbnQpIDQ1JSx0cmFuc3BhcmVudCk7IH1cbi5wcm9wZXJ0aWVzLXJlc2l6ZXIgeyBoZWlnaHQ6IDVweDsgZmxleC1zaHJpbms6IDA7IGN1cnNvcjogbnMtcmVzaXplOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5wcm9wZXJ0aWVzLXJlc2l6ZXI6aG92ZXIsLnByb3BlcnRpZXMtcmVzaXplcjphY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ucHJvcGVydGllcy1wYW5lbCB7IG1pbi1oZWlnaHQ6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IDAgMCBhdXRvOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnByb3BlcnRpZXMtcGFuZWwgPiAucGFuZWwtaGVhZCB7IGhlaWdodDogMzRweDsgZmxleC1zaHJpbms6IDA7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnByb3BlcnRpZXMtYm9keSB7IG1pbi1oZWlnaHQ6IDA7IG92ZXJmbG93LXk6IGF1dG87IH1cbi5wcm9wZXJ0aWVzLWVtcHR5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAxNnB4IDEycHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLnByb3Atc2VjdGlvbiB7IHBhZGRpbmc6IDhweCAxMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuLnByb3AtZmllbGQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiA4cHg7IG1hcmdpbjogNnB4IDA7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLnByb3AtZmllbGQ6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tdG9wOiAwOyB9LnByb3AtZmllbGQ6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cbi5wcm9wLWZpZWxkIGlucHV0LCAucHJvcC1maWVsZCBzZWxlY3QsIC5wcm9wLWZpZWxkIHRleHRhcmVhIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9XG4ucHJvcC1maWVsZCBpbnB1dDpmb2N1cywgLnByb3AtZmllbGQgc2VsZWN0OmZvY3VzLCAucHJvcC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLnByb3Atc2xpZGVyIHsgZGlzcGxheTogYmxvY2s7IH0ucHJvcC1zbGlkZXIgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDsgfS5wcm9wLXZhbHVlIHsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XG4ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMnB4OyBtYXJnaW46IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH0ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDdweDsgaGVpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiAtNXB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdGh1bWIgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEycHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnByb3AtbnVtYmVyIGlucHV0IHsgd2lkdGg6IDYycHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogNHB4IDE4cHggNHB4IDZweDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfS5udW1iZXItd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfS5udW1iZXItd3JhcCBpIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDZweDsgdG9wOiA2cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC1zaXplOiA5cHg7IH1cbi5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogMTI0cHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogM3B4IDVweDsgfVxuLnByb3AtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgY29sdW1uLWdhcDogMTBweDsgfS5wcm9wLWdyaWQgLnByb3AtZmllbGQgeyBtaW4td2lkdGg6IDA7IH0ucHJvcC1ncmlkIC5wcm9wLW51bWJlciBpbnB1dCwucHJvcC1ncmlkIC5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogNzBweDsgfVxuLnByb3AtdG9nZ2xlIGlucHV0IHsgcG9zaXRpb246IGFic29sdXRlOyBvcGFjaXR5OiAwOyB9LnByb3AtdG9nZ2xlIGkgeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAxNXB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTJzOyB9LnByb3AtdG9nZ2xlIGk6OmFmdGVyIHsgY29udGVudDogXCJcIjsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNSk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzOyB9LnByb3AtdG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgaTo6YWZ0ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTJweCk7IH1cbi50ZXh0LWNvbnRlbnQgeyBkaXNwbGF5OiBibG9jazsgfS50ZXh0LWNvbnRlbnQgPiBzcGFuIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgfS50ZXh0LWNvbnRlbnQgdGV4dGFyZWEgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogNnB4OyByZXNpemU6IHZlcnRpY2FsOyBsaW5lLWhlaWdodDogMS4zNTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi50b29sLWhpbnQgeyBtYXJnaW46IDAgMCA5cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH1cbi5zZWdtZW50LWNvbnRyb2wgeyBkaXNwbGF5OiBmbGV4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24geyB3aWR0aDogMzRweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmlnaHQtd2lkdGg6IDA7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMHB4IHZhcigtLW1vbm8pOyB9LnNlZ21lbnQtY29udHJvbCBidXR0b246bGFzdC1jaGlsZCB7IGJvcmRlci1yaWdodC13aWR0aDogMXB4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24uYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4uZ2xvYmFsLWNvbG9yLXNlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXN1YnRsZSk7IH0uZ2xvYmFsLWNvbG9yLXJvdyB7IGhlaWdodDogMzBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfS5nbG9iYWwtY29sb3Itcm93IGNvZGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOS41cHggdmFyKC0tbW9ubyk7IH0uZ2xvYmFsLXN3YXRjaGVzIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogNDVweDsgaGVpZ2h0OiAzMHB4OyB9Lmdsb2JhbC1zd2F0Y2ggeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyM3B4OyBoZWlnaHQ6IDIzcHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UpOyBib3JkZXItcmFkaXVzOiAwOyBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbXV0ZWQpOyB9Lmdsb2JhbC1zd2F0Y2guYmFja2dyb3VuZCB7IHJpZ2h0OiAxcHg7IGJvdHRvbTogMDsgfS5nbG9iYWwtc3dhdGNoLmZvcmVncm91bmQgeyB6LWluZGV4OiAyOyBsZWZ0OiAxcHg7IHRvcDogMDsgfS5zd2FwLWNvbG9ycyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IC0xM3B4OyB0b3A6IC01cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc2l6ZTogMTJweDsgfS5zd2FwLWNvbG9yczpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLmNvbG9yLXBvcG92ZXIgeyBtYXJnaW46IDhweCAtMnB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH0uY29sb3ItcG9wb3Zlci1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiA3cHg7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfS5jb2xvci1wb3BvdmVyLWhlYWQgYnV0dG9uIHsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5jb2xvci1waWNrZXIgeyBtYXJnaW4tdG9wOiAwOyB9XG4uc3YtcGlja2VyIHsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwNHB4OyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IGNyb3NzaGFpcjsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMDAwLHRyYW5zcGFyZW50KSxsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZix0cmFuc3BhcmVudCk7IH0uc3YtcGlja2VyIHNwYW4geyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgYm9yZGVyLXJhZGl1czogNTAlOyBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgfVxuLmh1ZS1zbGlkZXIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDlweDsgbWFyZ2luOiA4cHggMDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2YwMCwjZmYwLCMwZjAsIzBmZiwjMDBmLCNmMGYsI2YwMCk7IH0uaHVlLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH0uaHVlLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5jb2xvci1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDVweDsgfS5jb2xvci1zd2F0Y2ggeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAyN3B4OyBmbGV4LXNocmluazogMDsgcGFkZGluZzogMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9LmNvbG9yLXN3YXRjaCBpIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH0uaGV4LWlucHV0IHsgbWluLXdpZHRoOiAwOyBmbGV4OiAxOyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDRweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH0uZXllZHJvcHBlciB7IHdpZHRoOiAyN3B4OyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LmV5ZWRyb3BwZXI6aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXN0cm9uZyk7IH1cbi5yZ2Itcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpOyBnYXA6IDVweDsgbWFyZ2luLXRvcDogNnB4OyB9LnJnYi1yb3cgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOXB4IHZhcigtLW1vbm8pOyB9LnJnYi1yb3cgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1cHg7IHBhZGRpbmc6IDNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfVxuLmJsZW5kLWNvbnRyb2wgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0uYmxlbmQtY29udHJvbC5kaXNhYmxlZCB7IG9wYWNpdHk6IC40OyB9LmJsZW5kLWNvbnRyb2wgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH0uYmxlbmQtdHJpZ2dlciB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMCA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTEuNXB4OyB0ZXh0LWFsaWduOiBsZWZ0OyB9LmJsZW5kLW1lbnUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDMwOyB0b3A6IDYxcHg7IGxlZnQ6IDEycHg7IHJpZ2h0OiAxMnB4OyBtYXgtaGVpZ2h0OiAyNDhweDsgb3ZlcmZsb3cteTogYXV0bzsgcGFkZGluZzogNHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgfS5ibGVuZC1tZW51IGJ1dHRvbiB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgcGFkZGluZzogNXB4IDdweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1hbGlnbjogbGVmdDsgfS5ibGVuZC1tZW51IGJ1dHRvbjpob3ZlciwuYmxlbmQtbWVudSBidXR0b246Zm9jdXMsLmJsZW5kLW1lbnUgYnV0dG9uLnNlbGVjdGVkIHsgb3V0bGluZTogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyB9LmJsZW5kLWhpbnQgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNHB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250LXNpemU6IDkuNXB4OyB9XG4ub3BhY2l0eS1jb250cm9sIHsgLS1wcm9ncmVzczogMTAwJTsgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfS5vcGFjaXR5LWNvbnRyb2wuZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgfS5vcGFjaXR5LWxhYmVsIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiA1cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLm9wYWNpdHktY29udHJvbCBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEycHg7IG1hcmdpbjogMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1hY2NlbnQpIDAlLCB2YXIoLS1hY2NlbnQpIHZhcigtLXByb2dyZXNzKSwgdmFyKC0tYm9yZGVyKSB2YXIoLS1wcm9ncmVzcyksIHZhcigtLWJvcmRlcikgMTAwJSk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgY3Vyc29yOiBwb2ludGVyOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IG1hcmdpbi10b3A6IC0zcHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLmxheWVyLWxpc3QgeyBtaW4taGVpZ2h0OiAwOyBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBtYXJnaW46IDA7IHBhZGRpbmc6IDRweCAwOyBsaXN0LXN0eWxlOiBub25lOyB9XG4ubGF5ZXItcm93IHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgcGFkZGluZzogNnB4IDhweDsgY3Vyc29yOiBwb2ludGVyOyB9LmxheWVyLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5sYXllci1yb3cuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IH0ubGF5ZXItcm93LmhpZGRlbiB7IG9wYWNpdHk6IC41OyB9XG4udmlzaWJpbGl0eSB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDI1cHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LnZpc2liaWxpdHkgc3ZnIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuLmxheWVyLXRodW1iIHsgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IH0ubGF5ZXItdGh1bWIgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ubGF5ZXItbmFtZSB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgb3ZlcmZsb3c6IGhpZGRlbjsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH0ubGF5ZXItaW5wdXQgeyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHBhZGRpbmc6IDNweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMS41cHg7IH1cbi5kcm9wLW1hcmsgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldC1pbmxpbmU6IDRweDsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH0uZHJvcC1tYXJrLmFib3ZlIHsgdG9wOiAwOyB9LmRyb3AtbWFyay5iZWxvdyB7IGJvdHRvbTogMDsgfVxuLm5vLWxheWVycyB7IHBhZGRpbmc6IDE2cHggMTJweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfS5wYW5lbC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7IHBhZGRpbmc6IDdweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0ucGFuZWwtYWN0aW9ucyAuYnV0dG9uIHsgZmxleDogMTsgbWluLWhlaWdodDogMzBweDsgcGFkZGluZzogNXB4OyB9XG4uY2FudmFzLXN0YWdlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHRvdWNoLWFjdGlvbjogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgfS5hcnRib2FyZCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyBvdmVyZmxvdzogaGlkZGVuOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBvdXRsaW5lOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDM0JSx0cmFuc3BhcmVudCk7IH0uY2FudmFzLWVtcHR5IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH0uY2FudmFzLWVtcHR5IHAgeyBwYWRkaW5nOiAxM3B4IDE4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9XG4uYnJ1c2gtb3ZlcmxheSB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9LnNuYXAtZ3VpZGUgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAyMDsgYmFja2dyb3VuZDogI2VjNDg5OTsgfS5zbmFwLWd1aWRlLnZlcnRpY2FsIHsgdG9wOiAwOyB3aWR0aDogMXB4OyB9LnNuYXAtZ3VpZGUuaG9yaXpvbnRhbCB7IGxlZnQ6IDA7IGhlaWdodDogMXB4OyB9LmNyb3AtYm94IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMjE7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogIzM4YmRmODsgYmFja2dyb3VuZDogcmdiYSg1NiwxODksMjQ4LC4wOCk7IGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLDAsMCwuMzgpOyB9LmNyb3AtYm94IHNwYW4geyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMTAwJTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgYmFja2dyb3VuZDogIzAyODRjNzsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7IH1cbi5pbmxpbmUtdGV4dC1lZGl0b3Itd3JhcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMzA7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG4uaW5saW5lLXRleHQtZWRpdG9yIHsgcG9zaXRpb246IGFic29sdXRlOyBvdmVyZmxvdzogaGlkZGVuOyByZXNpemU6IG5vbmU7IG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1zdXJmYWNlKSA4JSx0cmFuc3BhcmVudCk7IGNhcmV0LWNvbG9yOiB2YXIoLS10ZXh0KTsgd2hpdGUtc3BhY2U6IHByZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi5sb2FkaW5nLXBhZ2UgeyBoZWlnaHQ6IDEwMHZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0ubG9hZGluZy1wYWdlIHAgeyBtYXJnaW46IDA7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH0ubm90LWZvdW5kIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5ub3QtZm91bmQgPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyAuaG9tZSB7IHBhZGRpbmc6IDI4cHggMTZweCA3MHB4OyB9LnByZXNldHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7IH0ucHJvamVjdC1jYXJkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MnB4IG1pbm1heCgwLDFmcikgYXV0bzsgfS5wcm9qZWN0LWFjdGlvbnMgeyBwYWRkaW5nOiAwIDVweDsgb3BhY2l0eTogMTsgfS50b3BiYXIgLmRvYy1zaXplLCAudG9wYmFyIC5zYXZlLWxhYmVsLCAudG9wYmFyIC5hZGQtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9LmxheWVycy1wYW5lbCB7IHdpZHRoOiAyMDVweDsgfSB9XG5gO1xuXG5mdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5QYWdlIG5vdCBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcC86aWRcIiBlbGVtZW50PXs8RWRpdG9yIC8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ08sSUMwQk1BO0FEMUJOLElFVURDO0FGVkMsSUdHSEM7QUhIRyxJRzhGTUM7QUg5Rk4sSUkrS0hDO0FKL0tHLElJMExIQztBSjFMRyxJSTRMREM7QUo1TEMsSUlzTkRDO0FKdE5DLElLU0hDO0FMVEcsSUtVTkM7QUxWTSxJS1dOQztBTFhNLElLeUJEQztBTHpCQyxJS3NDSEM7QUx0Q0csSUtxTERDO0FMckxDLElLc0xEQztBTHRMQyxJTUVJQztBTkZKLElBaUJNQyxJQUFnQyxDQUFHO0FBakJ6QyxJQWtCTUMsSUFB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QUFBLEdBQUMsVUFDRztBQUFBLG9CQUFBQSxHQUFDLFdBQU8sc0JBQVc7QUFBQSxJQUNuQixnQkFBQUEsR0FBQyxVQUNHO0FBQUEsc0JBQUFBLEdBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyxnQkFBQUEsR0FBQyxRQUFLLEdBQUk7QUFBQSxNQUNuQyxnQkFBQUEsR0FBQyxTQUFNLE1BQUssVUFBUyxTQUFTLGdCQUFBQSxHQUFDLFVBQU8sR0FBSTtBQUFBLE1BQzFDLGdCQUFBQSxHQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsZ0JBQUFBLEdBQUMsWUFBUyxHQUFJO0FBQUEsT0FDM0M7QUFBQSxLQUNKO0FBRVI7OztBQ3RMQSxFQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLGVBQWUsS0FBSyxDQUFDOyIsCiAgIm5hbWVzIjogWyJzbGljZSIsICJvcHRpb25zIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJwcmV2RGVib3VuY2UiLCAiZGVmZXIiLCAiZGVwdGhTb3J0IiwgIl9pZCIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImkiLCAiRU1QVFlfT0JKIiwgIkVNUFRZX0FSUiIsICJJU19OT05fRElNRU5TSU9OQUwiLCAiaXNBcnJheSIsICJBcnJheSIsICJhc3NpZ24iLCAib2JqIiwgInByb3BzIiwgInJlbW92ZU5vZGUiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgInJlbW92ZUNoaWxkIiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjaGlsZHJlbiIsICJrZXkiLCAicmVmIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgImNhbGwiLCAiZGVmYXVsdFByb3BzIiwgImNyZWF0ZVZOb2RlIiwgIm9yaWdpbmFsIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAiX19pIiwgIl9fdSIsICJGcmFnbWVudCIsICJwcm9wcyIsICJjaGlsZHJlbiIsICJCYXNlQ29tcG9uZW50IiwgImNvbnRleHQiLCAidGhpcyIsICJnZXREb21TaWJsaW5nIiwgInZub2RlIiwgImNoaWxkSW5kZXgiLCAiX18iLCAiX19pIiwgInNpYmxpbmciLCAiX19rIiwgImxlbmd0aCIsICJfX2UiLCAidHlwZSIsICJyZW5kZXJDb21wb25lbnQiLCAiY29tcG9uZW50IiwgIl9fUCIsICJfX2QiLCAib2xkVk5vZGUiLCAiX192IiwgIm9sZERvbSIsICJjb21taXRRdWV1ZSIsICJyZWZRdWV1ZSIsICJuZXdWTm9kZSIsICJhc3NpZ24iLCAib3B0aW9ucyIsICJkaWZmIiwgIl9fbiIsICJuYW1lc3BhY2VVUkkiLCAiX191IiwgImNvbW1pdFJvb3QiLCAidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCAiX19jIiwgImJhc2UiLCAic29tZSIsICJjaGlsZCIsICJlbnF1ZXVlUmVuZGVyIiwgImMiLCAicmVyZW5kZXJRdWV1ZSIsICJwdXNoIiwgInByb2Nlc3MiLCAiX19yIiwgInByZXZEZWJvdW5jZSIsICJkZWJvdW5jZVJlbmRlcmluZyIsICJkZWZlciIsICJsIiwgInNvcnQiLCAiZGVwdGhTb3J0IiwgInNoaWZ0IiwgImRpZmZDaGlsZHJlbiIsICJwYXJlbnREb20iLCAicmVuZGVyUmVzdWx0IiwgIm5ld1BhcmVudFZOb2RlIiwgIm9sZFBhcmVudFZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAibmFtZXNwYWNlIiwgImV4Y2Vzc0RvbUNoaWxkcmVuIiwgImlzSHlkcmF0aW5nIiwgImkiLCAiY2hpbGRWTm9kZSIsICJuZXdEb20iLCAiZmlyc3RDaGlsZERvbSIsICJyZXN1bHQiLCAic2hvdWxkUGxhY2UiLCAib2xkQ2hpbGRyZW4iLCAiRU1QVFlfQVJSIiwgIm5ld0NoaWxkcmVuTGVuZ3RoIiwgImNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkiLCAiRU1QVFlfT0JKIiwgInJlZiIsICJhcHBseVJlZiIsICJpbnNlcnQiLCAibmV4dFNpYmxpbmciLCAic2tld2VkSW5kZXgiLCAibWF0Y2hpbmdJbmRleCIsICJvbGRDaGlsZHJlbkxlbmd0aCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJza2V3IiwgIkFycmF5IiwgImNvbnN0cnVjdG9yIiwgIlN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJpc0FycmF5IiwgIl9fYiIsICJrZXkiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJub2RlVHlwZSIsICJ0b0NoaWxkQXJyYXkiLCAib3V0IiwgIngiLCAieSIsICJtYXRjaGVkIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgIkVWRU5UX0FUVEFDSEVEIiwgImV2ZW50Q2xvY2siLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFByb3h5Q2FwdHVyZSIsICJldmVudFByb3h5IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRIYW5kbGVyIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiZXZlbnQiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImlzTmV3IiwgIm9sZFByb3BzIiwgIm9sZFN0YXRlIiwgInNuYXBzaG90IiwgImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsICJuZXdQcm9wcyIsICJpc0NsYXNzQ29tcG9uZW50IiwgInByb3ZpZGVyIiwgImNvbXBvbmVudENvbnRleHQiLCAicmVuZGVySG9vayIsICJjb3VudCIsICJuZXdUeXBlIiwgIm91dGVyIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAiY29udGV4dFR5cGUiLCAiX19FIiwgImRvUmVuZGVyIiwgInN1YiIsICJzdGF0ZSIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgImFwcGx5IiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiY29tcG9uZW50RGlkVXBkYXRlIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJjbG9uZU5vZGUiLCAidGhlbiIsICJNT0RFX0hZRFJBVEUiLCAiaW5kZXhPZiIsICJyZW1vdmVOb2RlIiwgIm1hcmtBc0ZvcmNlIiwgImRpZmZFbGVtZW50Tm9kZXMiLCAiZGlmZmVkIiwgInJvb3QiLCAiY2IiLCAiY2FsbCIsICJub2RlIiwgIm1hcCIsICJuZXdIdG1sIiwgIm9sZEh0bWwiLCAibmV3Q2hpbGRyZW4iLCAiaW5wdXRWYWx1ZSIsICJjaGVja2VkIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiaXMiLCAiX19tIiwgImRhdGEiLCAiZGVmYXVsdFZhbHVlIiwgImNoaWxkTm9kZXMiLCAiYXR0cmlidXRlcyIsICJfX2h0bWwiLCAiaW5uZXJIVE1MIiwgImNvbnRlbnQiLCAidW5kZWZpbmVkIiwgImhhc1JlZlVubW91bnQiLCAiY3VycmVudCIsICJza2lwUmVtb3ZlIiwgInIiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAicmVwbGFjZU5vZGUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiZmlyc3RDaGlsZCIsICJjcmVhdGVDb250ZXh0IiwgImRlZmF1bHRWYWx1ZSIsICJDb250ZXh0IiwgInByb3BzIiwgInN1YnMiLCAiY3R4IiwgInRoaXMiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgIlNldCIsICJfX2MiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9wcm9wcyIsICJ2YWx1ZSIsICJmb3JFYWNoIiwgImMiLCAiX19lIiwgImVucXVldWVSZW5kZXIiLCAic3ViIiwgImFkZCIsICJvbGQiLCAiZGVsZXRlIiwgImNhbGwiLCAiY2hpbGRyZW4iLCAiaSIsICJfXyIsICJQcm92aWRlciIsICJfX2wiLCAiQ29uc3VtZXIiLCAiY29udGV4dFZhbHVlIiwgImNvbnRleHRUeXBlIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJfX2QiLCAiY29tcG9uZW50RGlkQ2F0Y2giLCAiX19FIiwgImUiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJCYXNlQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiY3VycmVudEluZGV4IiwgImN1cnJlbnRDb21wb25lbnQiLCAicHJldmlvdXNDb21wb25lbnQiLCAicHJldlJhZiIsICJjdXJyZW50SG9vayIsICJhZnRlclBhaW50RWZmZWN0cyIsICJvcHRpb25zIiwgIl9vcHRpb25zIiwgIm9sZEJlZm9yZURpZmYiLCAiX19iIiwgIm9sZEJlZm9yZVJlbmRlciIsICJfX3IiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAiX19jIiwgIm9sZEJlZm9yZVVubW91bnQiLCAidW5tb3VudCIsICJvbGRSb290IiwgIl9fIiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgIl9faCIsICJob29rcyIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAidXNlU3RhdGUiLCAiaW5pdGlhbFN0YXRlIiwgInVzZVJlZHVjZXIiLCAiaW52b2tlT3JSZXR1cm4iLCAicmVkdWNlciIsICJpbml0IiwgImhvb2tTdGF0ZSIsICJfcmVkdWNlciIsICJhY3Rpb24iLCAiY3VycmVudFZhbHVlIiwgIl9fTiIsICJuZXh0VmFsdWUiLCAic2V0U3RhdGUiLCAiX19mIiwgInVwZGF0ZUhvb2tTdGF0ZSIsICJwIiwgInMiLCAiYyIsICJ1cGRhdGVkSG9vayIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJwcmV2U2N1IiwgInJlc3VsdCIsICJjYWxsIiwgInRoaXMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgInByZXZDV1UiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAidG1wIiwgInVzZUVmZmVjdCIsICJjYWxsYmFjayIsICJhcmdzIiwgInN0YXRlIiwgIl9fcyIsICJhcmdzQ2hhbmdlZCIsICJfcGVuZGluZ0FyZ3MiLCAidXNlUmVmIiwgImluaXRpYWxWYWx1ZSIsICJjdXJyZW50SG9vayIsICJ1c2VNZW1vIiwgImN1cnJlbnQiLCAidXNlTWVtbyIsICJmYWN0b3J5IiwgImFyZ3MiLCAic3RhdGUiLCAiZ2V0SG9va1N0YXRlIiwgImN1cnJlbnRJbmRleCIsICJhcmdzQ2hhbmdlZCIsICJfX0giLCAiX18iLCAiX19oIiwgInVzZUNvbnRleHQiLCAiY29udGV4dCIsICJwcm92aWRlciIsICJjdXJyZW50Q29tcG9uZW50IiwgIl9fYyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImMiLCAiX18iLCAic3ViIiwgInByb3BzIiwgInZhbHVlIiwgImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCAiY29tcG9uZW50IiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgInNoaWZ0IiwgImhvb2tzIiwgIl9fSCIsICJfX1AiLCAiX19oIiwgInNvbWUiLCAiaW52b2tlQ2xlYW51cCIsICJpbnZva2VFZmZlY3QiLCAiZSIsICJvcHRpb25zIiwgIl9fZSIsICJfX3YiLCAiX19iIiwgInZub2RlIiwgImN1cnJlbnRDb21wb25lbnQiLCAib2xkQmVmb3JlRGlmZiIsICJfXyIsICJwYXJlbnREb20iLCAiX19rIiwgIl9fbSIsICJvbGRSb290IiwgIl9fciIsICJvbGRCZWZvcmVSZW5kZXIiLCAiY3VycmVudEluZGV4IiwgIl9fYyIsICJwcmV2aW91c0NvbXBvbmVudCIsICJob29rSXRlbSIsICJfX04iLCAiX3BlbmRpbmdBcmdzIiwgImRpZmZlZCIsICJvbGRBZnRlckRpZmYiLCAiYyIsICJsZW5ndGgiLCAicHVzaCIsICJwcmV2UmFmIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJhZnRlck5leHRGcmFtZSIsICJjb21taXRRdWV1ZSIsICJmaWx0ZXIiLCAiY2IiLCAib2xkQ29tbWl0IiwgInVubW91bnQiLCAib2xkQmVmb3JlVW5tb3VudCIsICJoYXNFcnJvcmVkIiwgInMiLCAiSEFTX1JBRiIsICJjYWxsYmFjayIsICJyYWYiLCAiZG9uZSIsICJjbGVhclRpbWVvdXQiLCAidGltZW91dCIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJzZXRUaW1lb3V0IiwgImhvb2siLCAiY29tcCIsICJjbGVhbnVwIiwgImFyZ3NDaGFuZ2VkIiwgIm9sZEFyZ3MiLCAibmV3QXJncyIsICJhcmciLCAiaW5kZXgiLCAiaW52b2tlT3JSZXR1cm4iLCAiZiIsICJsaXN0ZW5lcnMiLCAic3RhdGUiLCAiZCIsICJoIiwgIngiLCAiZCIsICJoIiwgInQiLCAidiIsICJ0IiwgImEiLCAiaCIsICJ3IiwgInMiLCAiYyIsICJBIiwgImQiLCAiaCIsICJpIiwgImxpc3RlbmVycyIsICJwZW5kaW5nIiwgImQiLCAiaCIsICJpbWFnZXMiLCAiaSIsICJzIiwgImwiLCAiZW50cmllcyIsICJlIiwgImMiLCAiYSIsICJiIiwgImQiLCAiaSIsICJpbWFnZXMiLCAidyIsICJoIiwgIngiLCAieSIsICJsYXllciIsICJzdGF0ZSIsICJ3IiwgImgiLCAidm5vZGVJZCIsICJjcmVhdGVWTm9kZSIsICJ0eXBlIiwgInByb3BzIiwgImtleSIsICJpc1N0YXRpY0NoaWxkcmVuIiwgIl9fc291cmNlIiwgIl9fc2VsZiIsICJyZWYiLCAiaSIsICJub3JtYWxpemVkUHJvcHMiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJ2bm9kZUlkIiwgIl9faSIsICJfX3UiLCAiZGVmYXVsdFByb3BzIiwgIm9wdGlvbnMiLCAidSIsICJzIiwgIkEiLCAiaCIsICJlIiwgIngiLCAieSIsICJpIiwgInQiLCAidiIsICJzdGF0ZSIsICJsYXllcklkIiwgImwiLCAiYiIsICJsYXllciIsICJ3IiwgImltYWdlcyIsICJ1IiwgInUiLCAidSIsICJlIiwgInIiLCAiZyIsICJiIiwgImQiLCAiaCIsICJzIiwgInYiLCAiYyIsICJ4IiwgIm0iLCAidSIsICJkIiwgImUiLCAicyIsICJBIiwgInMiLCAiZCIsICJBIiwgImgiLCAidSIsICJ0IiwgImUiLCAiZCIsICJoIiwgInUiLCAidSIsICJzIiwgIkEiLCAiaW1hZ2VzIiwgImUiLCAiaCIsICJlIiwgInN0YXRlIiwgInMiLCAiZCIsICJBIiwgInAiLCAidSIsICJ1IiwgIm5hdmlnYXRlIiwgIkEiLCAiZCIsICJ0IiwgImUiLCAidSJdCn0K
