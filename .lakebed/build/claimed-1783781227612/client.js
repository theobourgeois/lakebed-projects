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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvZ2VvbWV0cnkudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2FwaS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvc3RvcmUudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL3BlcnNpc3QudHMiLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L3N0YXRlL2Fzc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbGliL3JlbmRlci50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYnJ1c2hPdmVybGF5LnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9oaXN0b3J5LnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9hY3Rpb25zLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS92aWV3LnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9saWIvaW1hZ2UudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0NhbnZhc1N0YWdlLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9JY29ucy50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvUHJvcGVydGllc1BhbmVsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9MYXllcnNQYW5lbC50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvVG9vbGJhci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvVGhlbWVUb2dnbGUudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL1RvcEJhci50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvRWRpdG9yLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Ib21lLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvaW5kZXgudHN4IiwgImxha2ViZWQtc291cmNlOl9fbGFrZWJlZC9jbGllbnQtZW50cnkudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkNvbnRhaW5lck5vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0aWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzbGljZSA9IEVNUFRZX0FSUi5zbGljZTtcbiIsICJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwgImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gdmlydHVhbCBub2RlICh1c2VkIGZvciBKU1gpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudCBjb25zdHJ1Y3RvciBmb3IgdGhpc1xuICogdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IFtwcm9wc10gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4nKS5Db21wb25lbnRDaGlsZHJlbj59IFtjaGlsZHJlbl0gVGhlIGNoaWxkcmVuIG9mIHRoZVxuICogdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0ge30sXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzXG5cdC8vIE5vdGU6IHR5cGUgbWF5IGJlIHVuZGVmaW5lZCBpbiBkZXZlbG9wbWVudCwgbXVzdCBuZXZlciBlcnJvciBoZXJlLlxuXHRpZiAodHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmRlZmF1bHRQcm9wcyAhPSBOVUxMKSB7XG5cdFx0Zm9yIChpIGluIHR5cGUuZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSBVTkRFRklORUQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdHlwZS5kZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKHR5cGUsIG5vcm1hbGl6ZWRQcm9wcywga2V5LCByZWYsIE5VTEwpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFZOb2RlICh1c2VkIGludGVybmFsbHkgYnkgUHJlYWN0KVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnRcbiAqIENvbnN0cnVjdG9yIGZvciB0aGlzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGlzIHZpcnR1YWwgbm9kZS5cbiAqIElmIHRoaXMgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSB0ZXh0IG5vZGUsIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIG5vZGUgKHN0cmluZyBvciBudW1iZXIpLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBrZXkgVGhlIGtleSBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHVzZWQgd2hlblxuICogZGlmZmluZyBpdCBhZ2FpbnN0IGl0cyBjaGlsZHJlblxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInJlZlwiXX0gcmVmIFRoZSByZWYgcHJvcGVydHkgdGhhdCB3aWxsXG4gKiByZWNlaXZlIGEgcmVmZXJlbmNlIHRvIGl0cyBjcmVhdGVkIGNoaWxkXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCByZWYsIG9yaWdpbmFsKSB7XG5cdC8vIFY4IHNlZW1zIHRvIGJlIGJldHRlciBhdCBkZXRlY3RpbmcgdHlwZSBzaGFwZXMgaWYgdGhlIG9iamVjdCBpcyBhbGxvY2F0ZWQgZnJvbSB0aGUgc2FtZSBjYWxsIHNpdGVcblx0Ly8gRG8gbm90IGlubGluZSBpbnRvIGNyZWF0ZUVsZW1lbnQgYW5kIGNvZXJjZVRvVk5vZGUhXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IE5VTEwsXG5cdFx0X3BhcmVudDogTlVMTCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogTlVMTCxcblx0XHRfY29tcG9uZW50OiBOVUxMLFxuXHRcdGNvbnN0cnVjdG9yOiBVTkRFRklORUQsXG5cdFx0X29yaWdpbmFsOiBvcmlnaW5hbCA9PSBOVUxMID8gKyt2bm9kZUlkIDogb3JpZ2luYWwsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDBcblx0fTtcblxuXHQvLyBPbmx5IGludm9rZSB0aGUgdm5vZGUgaG9vayBpZiB0aGlzIHdhcyAqbm90KiBhIGRpcmVjdCBjb3B5OlxuXHRpZiAob3JpZ2luYWwgPT0gTlVMTCAmJiBvcHRpb25zLnZub2RlICE9IE5VTEwpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHsgY3VycmVudDogTlVMTCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGhlIGFyZ3VtZW50IGlzIGEgdmFsaWQgUHJlYWN0IFZOb2RlLlxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHJldHVybnMge3Zub2RlIGlzIFZOb2RlfVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEVsZW1lbnQgPSB2bm9kZSA9PlxuXHR2bm9kZSAhPSBOVUxMICYmIHZub2RlLmNvbnN0cnVjdG9yID09PSBVTkRFRklORUQ7XG4iLCAiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRpZmYsIGNvbW1pdFJvb3QgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBNT0RFX0hZRFJBVEUsIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQmFzZSBDb21wb25lbnQgY2xhc3MuIFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaFxuICogdHJpZ2dlciByZW5kZXJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgaW5pdGlhbCBjb21wb25lbnQgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbml0aWFsIGNvbnRleHQgZnJvbSBwYXJlbnQgY29tcG9uZW50cydcbiAqIGdldENoaWxkQ29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gQmFzZUNvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlLCBjYWxsYmFjaykge1xuXHQvLyBvbmx5IGNsb25lIHN0YXRlIHdoZW4gY29weWluZyB0byBuZXh0U3RhdGUgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBzO1xuXHRpZiAodGhpcy5fbmV4dFN0YXRlICE9IE5VTEwgJiYgdGhpcy5fbmV4dFN0YXRlICE9IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gTlVMTCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5fc3RhdGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwczovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtDb21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IEZyYWdtZW50O1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGx9IFtjaGlsZEluZGV4XVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tU2libGluZyh2bm9kZSwgY2hpbGRJbmRleCkge1xuXHRpZiAoY2hpbGRJbmRleCA9PSBOVUxMKSB7XG5cdFx0Ly8gVXNlIGNoaWxkSW5kZXg9PW51bGwgYXMgYSBzaWduYWwgdG8gcmVzdW1lIHRoZSBzZWFyY2ggZnJvbSB0aGUgdm5vZGUncyBzaWJsaW5nXG5cdFx0cmV0dXJuIHZub2RlLl9wYXJlbnRcblx0XHRcdD8gZ2V0RG9tU2libGluZyh2bm9kZS5fcGFyZW50LCB2bm9kZS5faW5kZXggKyAxKVxuXHRcdFx0OiBOVUxMO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IE5VTEwgJiYgc2libGluZy5fZG9tICE9IE5VTEwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogTlVMTDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGlmIChjb21wb25lbnQuX3BhcmVudERvbSAmJiBjb21wb25lbnQuX2RpcnR5KSB7XG5cdFx0bGV0IG9sZFZOb2RlID0gY29tcG9uZW50Ll92bm9kZSxcblx0XHRcdG9sZERvbSA9IG9sZFZOb2RlLl9kb20sXG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdLFxuXHRcdFx0cmVmUXVldWUgPSBbXSxcblx0XHRcdG5ld1ZOb2RlID0gYXNzaWduKHt9LCBvbGRWTm9kZSk7XG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsICsgMTtcblx0XHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZShuZXdWTm9kZSk7XG5cblx0XHRkaWZmKFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20sXG5cdFx0XHRuZXdWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0Y29tcG9uZW50Ll9wYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdFx0b2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFID8gW29sZERvbV0gOiBOVUxMLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gTlVMTCA/IGdldERvbVNpYmxpbmcob2xkVk5vZGUpIDogb2xkRG9tLFxuXHRcdFx0ISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKSxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG9sZFZOb2RlLl9vcmlnaW5hbDtcblx0XHRuZXdWTm9kZS5fcGFyZW50Ll9jaGlsZHJlbltuZXdWTm9kZS5faW5kZXhdID0gbmV3Vk5vZGU7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgbmV3Vk5vZGUsIHJlZlF1ZXVlKTtcblx0XHRvbGRWTm9kZS5fZG9tID0gb2xkVk5vZGUuX3BhcmVudCA9IG51bGw7XG5cblx0XHRpZiAobmV3Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKG5ld1ZOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gTlVMTCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IE5VTEwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gTlVMTDtcblx0XHR2bm9kZS5fY2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHRpZiAoY2hpbGQgIT0gTlVMTCAmJiBjaGlsZC5fZG9tICE9IE5VTEwpIHtcblx0XHRcdFx0cmV0dXJuICh2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbmNvbnN0IGRlZmVyID1cblx0dHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKVxuXHRcdDogc2V0VGltZW91dDtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ1xuXHQpIHtcblx0XHRwcmV2RGVib3VuY2UgPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nO1xuXHRcdChwcmV2RGVib3VuY2UgfHwgZGVmZXIpKHByb2Nlc3MpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGFcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBiXG4gKi9cbmNvbnN0IGRlcHRoU29ydCA9IChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGg7XG5cbi8qKiBGbHVzaCB0aGUgcmVuZGVyIHF1ZXVlIGJ5IHJlcmVuZGVyaW5nIGFsbCBxdWV1ZWQgY29tcG9uZW50cyAqL1xuZnVuY3Rpb24gcHJvY2VzcygpIHtcblx0dHJ5IHtcblx0XHRsZXQgYyxcblx0XHRcdGwgPSAxO1xuXG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIGByZW5kZXJDb3VudGAgeWV0LiBLZWVwIGl0cyB2YWx1ZSBub24temVybyB0byBwcmV2ZW50IHVubmVjZXNzYXJ5XG5cdFx0Ly8gcHJvY2VzcygpIGNhbGxzIGZyb20gZ2V0dGluZyBzY2hlZHVsZWQgd2hpbGUgYHF1ZXVlYCBpcyBzdGlsbCBiZWluZyBjb25zdW1lZC5cblx0XHR3aGlsZSAocmVyZW5kZXJRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdC8vIEtlZXAgdGhlIHJlcmVuZGVyIHF1ZXVlIHNvcnRlZCBieSAoZGVwdGgsIGluc2VydGlvbiBvcmRlcikuIFRoZSBxdWV1ZVxuXHRcdFx0Ly8gd2lsbCBpbml0aWFsbHkgYmUgc29ydGVkIG9uIHRoZSBmaXJzdCBpdGVyYXRpb24gb25seSBpZiBpdCBoYXMgbW9yZSB0aGFuIDEgaXRlbS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOZXcgaXRlbXMgY2FuIGJlIGFkZGVkIHRvIHRoZSBxdWV1ZSBlLmcuIHdoZW4gcmVyZW5kZXJpbmcgYSBwcm92aWRlciwgc28gd2Ugd2FudCB0b1xuXHRcdFx0Ly8ga2VlcCB0aGUgb3JkZXIgZnJvbSB0b3AgdG8gYm90dG9tIHdpdGggdGhvc2UgbmV3IGl0ZW1zIHNvIHdlIGNhbiBoYW5kbGUgdGhlbSBpbiBhXG5cdFx0XHQvLyBzaW5nbGUgcGFzc1xuXHRcdFx0aWYgKHJlcmVuZGVyUXVldWUubGVuZ3RoID4gbCkge1xuXHRcdFx0XHRyZXJlbmRlclF1ZXVlLnNvcnQoZGVwdGhTb3J0KTtcblx0XHRcdH1cblxuXHRcdFx0YyA9IHJlcmVuZGVyUXVldWUuc2hpZnQoKTtcblx0XHRcdGwgPSByZXJlbmRlclF1ZXVlLmxlbmd0aDtcblxuXHRcdFx0cmVuZGVyQ29tcG9uZW50KGMpO1xuXHRcdH1cblx0fSBmaW5hbGx5IHtcblx0XHRyZXJlbmRlclF1ZXVlLmxlbmd0aCA9IHByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuXHR9XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwgImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCwgTlVMTCwgU1ZHX05BTUVTUEFDRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLy8gUGVyLWluc3RhbmNlIHVuaXF1ZSBrZXkgZm9yIGV2ZW50IGNsb2NrIHN0YW1wcy4gRWFjaCBQcmVhY3QgY29weSBvbiB0aGUgcGFnZVxuLy8gZ2V0cyBpdHMgb3duIHJhbmRvbSBzdWZmaXggc28gdGhhdCBgX2Rpc3BhdGNoZWRgIC8gYF9hdHRhY2hlZGAgcHJvcGVydGllcyBvblxuLy8gc2hhcmVkIGV2ZW50IG9iamVjdHMgYW5kIGhhbmRsZXIgZnVuY3Rpb25zIGNhbm5vdCBjb2xsaWRlIGFjcm9zcyBpbnN0YW5jZXMuXG4vLyB+MSBpbiA2ME0gY29sbGlzaW9uIG9kZHMgLSBpZiB5b3UgaGF2ZSB0aGF0IG1hbnkgcHJhZWN0IHZlcnNpb25zIG9uIHRoZSBwYWdlLFxuLy8geW91IGRlc2VydmUgc29tZSB3ZWlyZCBidWdzLlxuLy8gSW4gMTEgd2UgY2FuIHJlcGxhY2UgdGhpcyB3aXRoIGFcbi8vIFN5bWJvbFxubGV0IF9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoOCksXG5cdEVWRU5UX0RJU1BBVENIRUQgPSAnX19kJyArIF9pZCxcblx0RVZFTlRfQVRUQUNIRUQgPSAnX19hJyArIF9pZDtcblxuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIGtleSwgdmFsdWUpIHtcblx0aWYgKGtleVswXSA9PSAnLScpIHtcblx0XHRzdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZSA9PSBOVUxMKSB7XG5cdFx0c3R5bGVba2V5XSA9ICcnO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCBJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpKSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZSArICdweCc7XG5cdH1cbn1cblxuY29uc3QgQ0FQVFVSRV9SRUdFWCA9IC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pO1xuXG4vLyBBIGxvZ2ljYWwgY2xvY2sgdG8gc29sdmUgaXNzdWVzIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMzkyNy5cbi8vIFdoZW4gdGhlIERPTSBwZXJmb3JtcyBhbiBldmVudCBpdCBsZWF2ZXMgbWljcm8tdGlja3MgaW4gYmV0d2VlbiBidWJibGluZyB1cCB3aGljaCBtZWFucyB0aGF0XG4vLyBhbiBldmVudCBjYW4gdHJpZ2dlciBvbiBhIG5ld2x5IHJlYXRlZCBET00tbm9kZSB3aGlsZSB0aGUgZXZlbnQgYnViYmxlcyB1cC5cbi8vXG4vLyBPcmlnaW5hbGx5IGluc3BpcmVkIGJ5IFZ1ZVxuLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb3JlL2Jsb2IvY2FlYjhhNjg4MTFhMWIwZjc5L3BhY2thZ2VzL3J1bnRpbWUtZG9tL3NyYy9tb2R1bGVzL2V2ZW50cy50cyNMOTAtTDEwMSksXG4vLyBidXQgbW9kaWZpZWQgdG8gdXNlIGEgbG9naWNhbCBjbG9jayBpbnN0ZWFkIG9mIERhdGUubm93KCkgaW4gY2FzZSBldmVudCBoYW5kbGVycyBnZXQgYXR0YWNoZWRcbi8vIGFuZCBldmVudHMgZ2V0IGRpc3BhdGNoZWQgZHVyaW5nIHRoZSBzYW1lIG1pbGxpc2Vjb25kLlxuLy9cbi8vIFRoZSBjbG9jayBpcyBpbmNyZW1lbnRlZCBhZnRlciBlYWNoIG5ldyBldmVudCBkaXNwYXRjaC4gVGhpcyBhbGxvd3MgMSAwMDAgMDAwIG5ldyBldmVudHNcbi8vIHBlciBzZWNvbmQgZm9yIG92ZXIgMjgwIHllYXJzIGJlZm9yZSB0aGUgdmFsdWUgcmVhY2hlcyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAoMioqNTMgLSAxKS5cbmxldCBldmVudENsb2NrID0gMDtcblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB2YWx1ZSBvbiBhIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIHRoZSBwcm9wZXJ0eSBoYWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGRvbSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlLCBuYW1lc3BhY2UpIHtcblx0bGV0IHVzZUNhcHR1cmU7XG5cblx0bzogaWYgKG5hbWUgPT0gJ3N0eWxlJykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkVmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSBvbGRWYWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2xkVmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCEodmFsdWUgJiYgbmFtZSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRWYWx1ZSB8fCB2YWx1ZVtuYW1lXSAhPSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PSAnbycgJiYgbmFtZVsxXSA9PSAnbicpIHtcblx0XHR1c2VDYXB0dXJlID0gbmFtZSAhPSAobmFtZSA9IG5hbWUucmVwbGFjZShDQVBUVVJFX1JFR0VYLCAnJDEnKSk7XG5cdFx0Y29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIEluZmVyIGNvcnJlY3QgY2FzaW5nIGZvciBET00gYnVpbHQtaW4gZXZlbnRzOlxuXHRcdGlmIChsb3dlckNhc2VOYW1lIGluIGRvbSB8fCBuYW1lID09ICdvbkZvY3VzT3V0JyB8fCBuYW1lID09ICdvbkZvY3VzSW4nKVxuXHRcdFx0bmFtZSA9IGxvd2VyQ2FzZU5hbWUuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gZXZlbnRDbG9jaztcblx0XHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHR1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5LFxuXHRcdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlW0VWRU5UX0FUVEFDSEVEXSA9IG9sZFZhbHVlW0VWRU5UX0FUVEFDSEVEXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdHVzZUNhcHR1cmVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmIChuYW1lc3BhY2UgPT0gU1ZHX05BTUVTUEFDRSkge1xuXHRcdFx0Ly8gTm9ybWFsaXplIGluY29ycmVjdCBwcm9wIHVzYWdlIGZvciBTVkc6XG5cdFx0XHQvLyAtIHhsaW5rOmhyZWYgLyB4bGlua0hyZWYgLS0+IGhyZWYgKHhsaW5rOmhyZWYgd2FzIHJlbW92ZWQgZnJvbSBTVkcgYW5kIGlzbid0IG5lZWRlZClcblx0XHRcdC8vIC0gY2xhc3NOYW1lIC0tPiBjbGFzc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgveGxpbmsoSHw6aCkvLCAnaCcpLnJlcGxhY2UoL3NOYW1lJC8sICdzJyk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG5hbWUgIT0gJ3dpZHRoJyAmJlxuXHRcdFx0bmFtZSAhPSAnaGVpZ2h0JyAmJlxuXHRcdFx0bmFtZSAhPSAnaHJlZicgJiZcblx0XHRcdG5hbWUgIT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT0gJ3RhYkluZGV4JyAmJlxuXHRcdFx0bmFtZSAhPSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lICE9ICdyb3dTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAnY29sU3BhbicgJiZcblx0XHRcdG5hbWUgIT0gJ3JvbGUnICYmXG5cdFx0XHRuYW1lICE9ICdwb3BvdmVyJyAmJlxuXHRcdFx0bmFtZSBpbiBkb21cblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRvbVtuYW1lXSA9IHZhbHVlID09IE5VTEwgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHQvLyBsYWJlbGxlZCBicmVhayBpcyAxYiBzbWFsbGVyIGhlcmUgdGhhbiBhIHJldHVybiBzdGF0ZW1lbnQgKHNvcnJ5KVxuXHRcdFx0XHRicmVhayBvO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHQvLyBhcmlhLSBhbmQgZGF0YS0gYXR0cmlidXRlcyBoYXZlIG5vIGJvb2xlYW4gcmVwcmVzZW50YXRpb24uXG5cdFx0Ly8gQSBgZmFsc2VgIHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nXG5cdFx0Ly8gcHJlc2VudCwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW4gYXJpYVxuXHRcdC8vIGF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBmcmFtZXdvcmtzIGdlbmVyYWxseSBzdHJpbmdpZnkgYGZhbHNlYC5cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBOVUxMICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZVs0XSA9PSAnLScpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUgPT0gJ3BvcG92ZXInICYmIHZhbHVlID09IHRydWUgPyAnJyA6IHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXZlbnQgcHJveHkgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhcHR1cmUgSXMgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBjYXB0dXJlIHBoYXNlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRQcm94eSh1c2VDYXB0dXJlKSB7XG5cdC8qKlxuXHQgKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcblx0ICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRyZXR1cm4gZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG5cdFx0XHRjb25zdCBldmVudEhhbmRsZXIgPSB0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgdXNlQ2FwdHVyZV07XG5cdFx0XHRpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA9PSBOVUxMKSB7XG5cdFx0XHRcdGVbRVZFTlRfRElTUEFUQ0hFRF0gPSBldmVudENsb2NrKys7XG5cblx0XHRcdFx0Ly8gV2hlbiBgZVtFVkVOVF9ESVNQQVRDSEVEXWAgaXMgc21hbGxlciB0aGFuIHRoZSB0aW1lIHdoZW4gdGhlIHRhcmdldGVkIGV2ZW50XG5cdFx0XHRcdC8vIGhhbmRsZXIgd2FzIGF0dGFjaGVkIHdlIGtub3cgd2UgaGF2ZSBidWJibGVkIHVwIHRvIGFuIGVsZW1lbnQgdGhhdCB3YXMgYWRkZWRcblx0XHRcdFx0Ly8gZHVyaW5nIHBhdGNoaW5nIHRoZSBET00uXG5cdFx0XHR9IGVsc2UgaWYgKGVbRVZFTlRfRElTUEFUQ0hFRF0gPCBldmVudEhhbmRsZXJbRVZFTlRfQVRUQUNIRURdKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldmVudEhhbmRsZXIob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IGV2ZW50UHJveHkgPSBjcmVhdGVFdmVudFByb3h5KGZhbHNlKTtcbmNvbnN0IGV2ZW50UHJveHlDYXB0dXJlID0gY3JlYXRlRXZlbnRQcm94eSh0cnVlKTtcbiIsICJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG5cdGZ1bmN0aW9uIENvbnRleHQocHJvcHMpIHtcblx0XHRpZiAoIXRoaXMuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHQvKiogQHR5cGUge1NldDxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+IHwgbnVsbH0gKi9cblx0XHRcdGxldCBzdWJzID0gbmV3IFNldCgpO1xuXHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0Y3R4W0NvbnRleHQuX2lkXSA9IHRoaXM7XG5cblx0XHRcdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gY3R4O1xuXG5cdFx0XHR0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRzdWJzID0gTlVMTDtcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKF9wcm9wcykge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIGV2ZW5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMudmFsdWUgIT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vicy5mb3JFYWNoKGMgPT4ge1xuXHRcdFx0XHRcdFx0Yy5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zdWIgPSBjID0+IHtcblx0XHRcdFx0c3Vicy5hZGQoYyk7XG5cdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzdWJzKSB7XG5cdFx0XHRcdFx0XHRzdWJzLmRlbGV0ZShjKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcblx0fVxuXG5cdENvbnRleHQuX2lkID0gJ19fY0MnICsgaSsrO1xuXHRDb250ZXh0Ll9kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0Q29udGV4dC5Db25zdW1lciA9IChwcm9wcywgY29udGV4dFZhbHVlKSA9PiB7XG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHRWYWx1ZSk7XG5cdH07XG5cblx0Ly8gd2UgY291bGQgYWxzbyBnZXQgcmlkIG9mIF9jb250ZXh0UmVmIGVudGlyZWx5XG5cdENvbnRleHQuUHJvdmlkZXIgPVxuXHRcdENvbnRleHQuX2NvbnRleHRSZWYgPVxuXHRcdENvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPVxuXHRcdFx0Q29udGV4dDtcblxuXHRyZXR1cm4gQ29udGV4dDtcbn1cbiIsICJpbXBvcnQgeyBkaWZmLCB1bm1vdW50LCBhcHBseVJlZiB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHtcblx0RU1QVFlfT0JKLFxuXHRFTVBUWV9BUlIsXG5cdElOU0VSVF9WTk9ERSxcblx0TUFUQ0hFRCxcblx0VU5ERUZJTkVELFxuXHROVUxMXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmdcbiAqIGRpZmZlZFxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG9sZFBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRQYXJlbnRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGRpZmYnZWQgYWdhaW5zdCBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QgLSBtb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGlsZHJlbihcblx0cGFyZW50RG9tLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRvbGRQYXJlbnRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IGksXG5cdFx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0XHRvbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdGNoaWxkVk5vZGUsXG5cdFx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRcdG5ld0RvbSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0Zmlyc3RDaGlsZERvbTtcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdC8qKiBAdHlwZSB7Vk5vZGVbXX0gKi9cblx0bGV0IG9sZENoaWxkcmVuID0gKG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbikgfHwgRU1QVFlfQVJSO1xuXG5cdGxldCBuZXdDaGlsZHJlbkxlbmd0aCA9IHJlbmRlclJlc3VsdC5sZW5ndGg7XG5cblx0b2xkRG9tID0gY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheShcblx0XHRuZXdQYXJlbnRWTm9kZSxcblx0XHRyZW5kZXJSZXN1bHQsXG5cdFx0b2xkQ2hpbGRyZW4sXG5cdFx0b2xkRG9tLFxuXHRcdG5ld0NoaWxkcmVuTGVuZ3RoXG5cdCk7XG5cblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdGlmIChjaGlsZFZOb2RlID09IE5VTEwpIGNvbnRpbnVlO1xuXG5cdFx0Ly8gQXQgdGhpcyBwb2ludCwgY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSBoYXMgYXNzaWduZWQgX2luZGV4IHRvIGJlIHRoZVxuXHRcdC8vIG1hdGNoaW5nSW5kZXggZm9yIHRoaXMgVk5vZGUncyBvbGRWTm9kZSAob3IgLTEgaWYgdGhlcmUgaXMgbm8gb2xkVk5vZGUpLlxuXHRcdG9sZFZOb2RlID1cblx0XHRcdChjaGlsZFZOb2RlLl9pbmRleCAhPSAtMSAmJiBvbGRDaGlsZHJlbltjaGlsZFZOb2RlLl9pbmRleF0pIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIFVwZGF0ZSBjaGlsZFZOb2RlLl9pbmRleCB0byBpdHMgZmluYWwgaW5kZXhcblx0XHRjaGlsZFZOb2RlLl9pbmRleCA9IGk7XG5cblx0XHQvLyBNb3JwaCB0aGUgb2xkIGVsZW1lbnQgaW50byB0aGUgbmV3IG9uZSwgYnV0IGRvbid0IGFwcGVuZCBpdCB0byB0aGUgZG9tIHlldFxuXHRcdGxldCByZXN1bHQgPSBkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZyxcblx0XHRcdHJlZlF1ZXVlXG5cdFx0KTtcblxuXHRcdC8vIEFkanVzdCBET00gbm9kZXNcblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cdFx0aWYgKGNoaWxkVk5vZGUucmVmICYmIG9sZFZOb2RlLnJlZiAhPSBjaGlsZFZOb2RlLnJlZikge1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikge1xuXHRcdFx0XHRhcHBseVJlZihvbGRWTm9kZS5yZWYsIE5VTEwsIGNoaWxkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cmVmUXVldWUucHVzaChcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NvbXBvbmVudCB8fCBuZXdEb20sXG5cdFx0XHRcdGNoaWxkVk5vZGVcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGZpcnN0Q2hpbGREb20gPT0gTlVMTCAmJiBuZXdEb20gIT0gTlVMTCkge1xuXHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHR9XG5cblx0XHRsZXQgc2hvdWxkUGxhY2UgPSAhIShjaGlsZFZOb2RlLl9mbGFncyAmIElOU0VSVF9WTk9ERSk7XG5cdFx0aWYgKHNob3VsZFBsYWNlIHx8IG9sZFZOb2RlLl9jaGlsZHJlbiA9PT0gY2hpbGRWTm9kZS5fY2hpbGRyZW4pIHtcblx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXG5cdFx0XHQvLyBXaGVuIGEgbWF0Y2hlZCBWTm9kZSBpcyBwaHlzaWNhbGx5IG1vdmVkIHZpYSBJTlNFUlRfVk5PREUsIGl0cyBvbGRcblx0XHRcdC8vIF9kb20gcG9pbnRlciBiZWNvbWVzIGEgc3RhbGUgcG9zaXRpb25hbCByZWZlcmVuY2UuIENsZWFyIGl0IHNvIHRoYXRcblx0XHRcdC8vIGdldERvbVNpYmxpbmcgKGNhbGxlZCBmcm9tIG5lc3RlZCBkaWZmcykgd29uJ3QgcmV0dXJuIHRoaXMgc3RhbGVcblx0XHRcdC8vIHJlZmVyZW5jZSBhbmQgbWlzLXBsYWNlIHN1YnNlcXVlbnQgRE9NIG5vZGVzLiBTZWUgIzUwNjUuXG5cdFx0XHRpZiAoc2hvdWxkUGxhY2UgJiYgb2xkVk5vZGUuX2RvbSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZG9tID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiByZXN1bHQgIT09IFVOREVGSU5FRCkge1xuXHRcdFx0b2xkRG9tID0gcmVzdWx0O1xuXHRcdH0gZWxzZSBpZiAobmV3RG9tKSB7XG5cdFx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0Ly8gVW5zZXQgZGlmZmluZyBmbGFnc1xuXHRcdGNoaWxkVk5vZGUuX2ZsYWdzICY9IH4oSU5TRVJUX1ZOT0RFIHwgTUFUQ0hFRCk7XG5cdH1cblxuXHRuZXdQYXJlbnRWTm9kZS5fZG9tID0gZmlyc3RDaGlsZERvbTtcblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0cmVuZGVyUmVzdWx0LFxuXHRvbGRDaGlsZHJlbixcblx0b2xkRG9tLFxuXHRuZXdDaGlsZHJlbkxlbmd0aFxuKSB7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IGNoaWxkVk5vZGU7XG5cdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdGxldCBvbGRWTm9kZTtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGgsXG5cdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4gPSBvbGRDaGlsZHJlbkxlbmd0aDtcblxuXHRsZXQgc2tldyA9IDA7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gbmV3IEFycmF5KG5ld0NoaWxkcmVuTGVuZ3RoKTtcblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGFyZSByZXVzaW5nIHRoZSBjaGlsZFZOb2RlIHZhcmlhYmxlIHRvIGhvbGQgYm90aCB0aGVcblx0XHQvLyBwcmUgYW5kIHBvc3Qgbm9ybWFsaXplZCBjaGlsZFZOb2RlXG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChcblx0XHRcdGNoaWxkVk5vZGUgPT0gTlVMTCB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnZnVuY3Rpb24nXG5cdFx0KSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50JyB8fFxuXHRcdFx0Y2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRCAmJiBjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBOVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHRjb25zdCBza2V3ZWRJbmRleCA9IGkgKyBza2V3O1xuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIFRlbXBvcmFyaWx5IHN0b3JlIHRoZSBtYXRjaGluZ0luZGV4IG9uIHRoZSBfaW5kZXggcHJvcGVydHkgc28gd2UgY2FuIHB1bGxcblx0XHQvLyBvdXQgdGhlIG9sZFZOb2RlIGluIGRpZmZDaGlsZHJlbi4gV2UnbGwgb3ZlcnJpZGUgdGhpcyB0byB0aGUgVk5vZGUnc1xuXHRcdC8vIGZpbmFsIGluZGV4IGFmdGVyIHVzaW5nIHRoaXMgcHJvcGVydHkgdG8gZ2V0IHRoZSBvbGRWTm9kZVxuXHRcdGNvbnN0IG1hdGNoaW5nSW5kZXggPSAoY2hpbGRWTm9kZS5faW5kZXggPSBmaW5kTWF0Y2hpbmdJbmRleChcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdHNrZXdlZEluZGV4LFxuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW5cblx0XHQpKTtcblxuXHRcdG9sZFZOb2RlID0gTlVMTDtcblx0XHRpZiAobWF0Y2hpbmdJbmRleCAhPSAtMSkge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlblttYXRjaGluZ0luZGV4XTtcblx0XHRcdHJlbWFpbmluZ09sZENoaWxkcmVuLS07XG5cdFx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdFx0b2xkVk5vZGUuX2ZsYWdzIHw9IE1BVENIRUQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGVyZSwgd2UgZGVmaW5lIGlzTW91bnRpbmcgZm9yIHRoZSBwdXJwb3NlcyBvZiB0aGUgc2tldyBkaWZmaW5nXG5cdFx0Ly8gYWxnb3JpdGhtLiBOb2RlcyB0aGF0IGFyZSB1bnN1c3BlbmRpbmcgYXJlIGNvbnNpZGVyZWQgbW91bnRpbmcgYW5kIHdlIGRldGVjdFxuXHRcdC8vIHRoaXMgYnkgY2hlY2tpbmcgaWYgb2xkVk5vZGUuX29yaWdpbmFsID09IG51bGxcblx0XHRjb25zdCBpc01vdW50aW5nID0gb2xkVk5vZGUgPT0gTlVMTCB8fCBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gTlVMTDtcblxuXHRcdGlmIChpc01vdW50aW5nKSB7XG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSAtMSkge1xuXHRcdFx0XHQvLyBXaGVuIHRoZSBhcnJheSBvZiBjaGlsZHJlbiBpcyBncm93aW5nIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIHNrZXdcblx0XHRcdFx0Ly8gYXMgd2UgYXJlIGFkZGluZyBhIG5ldyBlbGVtZW50IHRvIHRoZSBhcnJheS5cblx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0Ly8gWzEsIDIsIDNdIC0tPiBbMCwgMSwgMiwgM11cblx0XHRcdFx0Ly8gb2xkQ2hpbGRyZW4gICBuZXdDaGlsZHJlblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBUaGUgbmV3IGVsZW1lbnQgaXMgYXQgaW5kZXggMCwgc28gb3VyIHNrZXcgaXMgMCxcblx0XHRcdFx0Ly8gd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tldyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQuXG5cdFx0XHRcdC8vIFRoZSBkZWNyZWFzZSB3aWxsIGNhdXNlIHVzIHRvIGNvbXBhcmUgdGhlIGVsZW1lbnQgYXQgcG9zaXRpb24gMVxuXHRcdFx0XHQvLyB3aXRoIHZhbHVlIDEgd2l0aCB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAwIHdpdGggdmFsdWUgMC5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gQSBsaW5lYXIgY29uY2VwdCBpcyBhcHBsaWVkIHdoZW4gdGhlIGFycmF5IGlzIHNocmlua2luZyxcblx0XHRcdFx0Ly8gaWYgdGhlIGxlbmd0aCBpcyB1bmNoYW5nZWQgd2UgY2FuIGFzc3VtZSB0aGF0IG5vIHNrZXdcblx0XHRcdFx0Ly8gY2hhbmdlcyBhcmUgbmVlZGVkLlxuXHRcdFx0XHRpZiAobmV3Q2hpbGRyZW5MZW5ndGggPiBvbGRDaGlsZHJlbkxlbmd0aCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdDaGlsZHJlbkxlbmd0aCA8IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGFyZSBtb3VudGluZyBhIERPTSBWTm9kZSwgbWFyayBpdCBmb3IgaW5zZXJ0aW9uXG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSAhPSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG1hdGNoaW5nSW5kZXggIT0gc2tld2VkSW5kZXgpIHtcblx0XHRcdC8vIFdoZW4gd2UgbW92ZSBlbGVtZW50cyBhcm91bmQgaS5lLiBbMCwgMSwgMl0gLS0+IFsxLCAwLCAyXVxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMSwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAxIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgMCBhbmQgb3VyIHNrZXcgaXMgMFxuXHRcdFx0Ly8gICAgIHdlIHNldCB0aGUgc2tldyB0byAxIGFzIHdlIGZvdW5kIGFuIG9mZnNldC5cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDAsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMCB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIGF0IDIgYW5kIG91ciBza2V3IGlzIDFcblx0XHRcdC8vICAgICB0aGlzIG1ha2VzIHVzIGluY3JlYXNlIHRoZSBza2V3IGFnYWluLlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMiwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAyIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgNCBhbmQgb3VyIHNrZXcgaXMgMlxuXHRcdFx0Ly9cblx0XHRcdC8vIHRoaXMgYmVjb21lcyBhbiBvcHRpbWl6YXRpb24gcXVlc3Rpb24gd2hlcmUgY3VycmVudGx5IHdlIHNlZSBhIDEgZWxlbWVudCBvZmZzZXQgYXMgYW4gaW5zZXJ0aW9uXG5cdFx0XHQvLyBvciBkZWxldGlvbiBpLmUuIHdlIG9wdGltaXplIGZvciBbMCwgMSwgMl0gLS0+IFs5LCAwLCAxLCAyXVxuXHRcdFx0Ly8gd2hpbGUgYSBtb3JlIHRoYW4gMSBvZmZzZXQgd2Ugc2VlIGFzIGEgc3dhcC5cblx0XHRcdC8vIFdlIGNvdWxkIHByb2JhYmx5IGJ1aWxkIGhldXJpc3RpY3MgZm9yIGhhdmluZyBhbiBvcHRpbWl6ZWQgY291cnNlIG9mIGFjdGlvbiBoZXJlIGFzIHdlbGwsIGJ1dFxuXHRcdFx0Ly8gbWlnaHQgZ28gYXQgdGhlIGNvc3Qgb2Ygc29tZSBieXRlcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiB3ZSB3YW50ZWQgdG8gb3B0aW1pemUgZm9yIGkuZS4gb25seSBzd2FwcyB3ZSdkIGp1c3QgZG8gdGhlIGxhc3QgdHdvIGNvZGUtYnJhbmNoZXMgYW5kIGhhdmVcblx0XHRcdC8vIG9ubHkgdGhlIGZpcnN0IGl0ZW0gYmUgYSByZS1zY291dGluZyBhbmQgYWxsIHRoZSBvdGhlcnMgZmFsbCBpbiB0aGVpciBza2V3ZWQgY291bnRlci1wYXJ0LlxuXHRcdFx0Ly8gV2UgY291bGQgYWxzbyBmdXJ0aGVyIG9wdGltaXplIGZvciBzd2Fwc1xuXHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPT0gc2tld2VkSW5kZXggLSAxKSB7XG5cdFx0XHRcdHNrZXctLTtcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCArIDEpIHtcblx0XHRcdFx0c2tldysrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPiBza2V3ZWRJbmRleCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIHRoaXMgVk5vZGUncyBET00gaWYgdGhlIG9yaWdpbmFsIGluZGV4IChtYXRjaGluZ0luZGV4KSBkb2Vzbid0XG5cdFx0XHRcdC8vIG1hdGNoIHRoZSBuZXcgc2tldyBpbmRleCAoaSArIG5ldyBza2V3KVxuXHRcdFx0XHQvLyBJbiB0aGUgZm9ybWVyIHR3byBicmFuY2hlcyB3ZSBrbm93IHRoYXQgaXQgbWF0Y2hlcyBhZnRlciBza2V3aW5nXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcmVtYWluaW5nIG9sZENoaWxkcmVuIGlmIHRoZXJlIGFyZSBhbnkuIExvb3AgZm9yd2FyZHMgc28gdGhhdCBhcyB3ZVxuXHQvLyB1bm1vdW50IERPTSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG9sZENoaWxkcmVuLCB3ZSBjYW4gYWRqdXN0IG9sZERvbSB0b1xuXHQvLyBwb2ludCB0byB0aGUgbmV4dCBjaGlsZCwgd2hpY2ggbmVlZHMgdG8gYmUgdGhlIGZpcnN0IERPTSBub2RlIHRoYXQgd29uJ3QgYmVcblx0Ly8gdW5tb3VudGVkLlxuXHRpZiAocmVtYWluaW5nT2xkQ2hpbGRyZW4pIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2xkQ2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblx0XHRcdGlmIChvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwKSB7XG5cdFx0XHRcdGlmIChvbGRWTm9kZS5fZG9tID09IG9sZERvbSkge1xuXHRcdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dW5tb3VudChvbGRWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbVxuICogQHBhcmFtIHtib29sZWFufSBzaG91bGRQbGFjZVxuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGluc2VydChwYXJlbnRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblxuXHRpZiAodHlwZW9mIHBhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBjaGlsZHJlbiA9IHBhcmVudFZOb2RlLl9jaGlsZHJlbjtcblx0XHRmb3IgKGxldCBpID0gMDsgY2hpbGRyZW4gJiYgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY2hpbGRyZW5baV0pIHtcblx0XHRcdFx0Ly8gSWYgd2UgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbiwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9sZFxuXHRcdFx0XHQvLyBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGUgKHBhcmVudFZOb2RlXG5cdFx0XHRcdC8vIGhlcmUpLlxuXHRcdFx0XHRjaGlsZHJlbltpXS5fcGFyZW50ID0gcGFyZW50Vk5vZGU7XG5cdFx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZHJlbltpXSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2xkRG9tO1xuXHR9IGVsc2UgaWYgKHBhcmVudFZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0aWYgKHNob3VsZFBsYWNlKSB7XG5cdFx0XHRpZiAob2xkRG9tICYmIHBhcmVudFZOb2RlLnR5cGUgJiYgIW9sZERvbS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcocGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShwYXJlbnRWTm9kZS5fZG9tLCBvbGREb20gfHwgTlVMTCk7XG5cdFx0fVxuXHRcdG9sZERvbSA9IHBhcmVudFZOb2RlLl9kb207XG5cdH1cblxuXHRkbyB7XG5cdFx0b2xkRG9tID0gb2xkRG9tICYmIG9sZERvbS5uZXh0U2libGluZztcblx0fSB3aGlsZSAob2xkRG9tICE9IE5VTEwgJiYgb2xkRG9tLm5vZGVUeXBlID09IDgpO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbn0gY2hpbGRyZW4gVGhlIHVuZmxhdHRlbmVkIGNoaWxkcmVuIG9mIGEgdmlydHVhbFxuICogbm9kZVxuICogQHJldHVybnMge1ZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBOVUxMIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IGNoaWxkVk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGVbXX0gb2xkQ2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBza2V3ZWRJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHJlbWFpbmluZ09sZENoaWxkcmVuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdJbmRleChcblx0Y2hpbGRWTm9kZSxcblx0b2xkQ2hpbGRyZW4sXG5cdHNrZXdlZEluZGV4LFxuXHRyZW1haW5pbmdPbGRDaGlsZHJlblxuKSB7XG5cdGNvbnN0IGtleSA9IGNoaWxkVk5vZGUua2V5O1xuXHRjb25zdCB0eXBlID0gY2hpbGRWTm9kZS50eXBlO1xuXHRsZXQgb2xkVk5vZGUgPSBvbGRDaGlsZHJlbltza2V3ZWRJbmRleF07XG5cdGNvbnN0IG1hdGNoZWQgPSBvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwO1xuXG5cdC8vIFdlIG9ubHkgbmVlZCB0byBwZXJmb3JtIGEgc2VhcmNoIGlmIHRoZXJlIGFyZSBtb3JlIGNoaWxkcmVuXG5cdC8vIChyZW1haW5pbmdPbGRDaGlsZHJlbikgdG8gc2VhcmNoLiBIb3dldmVyLCBpZiB0aGUgb2xkVk5vZGUgd2UganVzdCBsb29rZWRcblx0Ly8gYXQgc2tld2VkSW5kZXggd2FzIG5vdCBhbHJlYWR5IHVzZWQgaW4gdGhpcyBkaWZmLCB0aGVuIHRoZXJlIG11c3QgYmUgYXRcblx0Ly8gbGVhc3QgMSBvdGhlciAoc28gZ3JlYXRlciB0aGFuIDEpIHJlbWFpbmluZ09sZENoaWxkcmVuIHRvIGF0dGVtcHQgdG8gbWF0Y2hcblx0Ly8gYWdhaW5zdC4gU28gdGhlIGZvbGxvd2luZyBjb25kaXRpb24gY2hlY2tzIHRoYXQgZW5zdXJpbmdcblx0Ly8gcmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAxIGlmIHRoZSBvbGRWTm9kZSBpcyBub3QgYWxyZWFkeSB1c2VkL21hdGNoZWQuIEVsc2Vcblx0Ly8gaWYgdGhlIG9sZFZOb2RlIHdhcyBudWxsIG9yIG1hdGNoZWQsIHRoZW4gdGhlcmUgY291bGQgbmVlZHMgdG8gYmUgYXQgbGVhc3Rcblx0Ly8gMSAoYWthIGByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDBgKSBjaGlsZHJlbiB0byBmaW5kIGFuZCBjb21wYXJlIGFnYWluc3QuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIGFuIHVua2V5ZWQgZnVuY3Rpb25hbCBWTm9kZSwgdGhhdCBpc24ndCBhIGJ1aWx0LWluIGxpa2Ugb3VyIEZyYWdtZW50LFxuXHQvLyB3ZSBzaG91bGQgbm90IHNlYXJjaCBhcyB3ZSByaXNrIHJlLXVzaW5nIHN0YXRlIG9mIGFuIHVucmVsYXRlZCBWTm9kZS4gKHJldmVydGVkIGZvciBub3cpXG5cdGxldCBzaG91bGRTZWFyY2ggPVxuXHRcdC8vICh0eXBlb2YgdHlwZSAhPSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09IEZyYWdtZW50IHx8IGtleSkgJiZcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA+IChtYXRjaGVkID8gMSA6IDApO1xuXG5cdGlmIChcblx0XHQob2xkVk5vZGUgPT09IE5VTEwgJiYga2V5ID09IG51bGwpIHx8XG5cdFx0KG1hdGNoZWQgJiYga2V5ID09IG9sZFZOb2RlLmtleSAmJiB0eXBlID09IG9sZFZOb2RlLnR5cGUpXG5cdCkge1xuXHRcdHJldHVybiBza2V3ZWRJbmRleDtcblx0fSBlbHNlIGlmIChzaG91bGRTZWFyY2gpIHtcblx0XHRsZXQgeCA9IHNrZXdlZEluZGV4IC0gMTtcblx0XHRsZXQgeSA9IHNrZXdlZEluZGV4ICsgMTtcblx0XHR3aGlsZSAoeCA+PSAwIHx8IHkgPCBvbGRDaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoaWxkSW5kZXggPSB4ID49IDAgPyB4LS0gOiB5Kys7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRvbGRWTm9kZSAhPSBOVUxMICYmXG5cdFx0XHRcdChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwICYmXG5cdFx0XHRcdGtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0dHlwZSA9PSBvbGRWTm9kZS50eXBlXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGNoaWxkSW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIC0xO1xufVxuIiwgImltcG9ydCB7XG5cdEVNUFRZX0FSUixcblx0RU1QVFlfT0JKLFxuXHRNQVRIX05BTUVTUEFDRSxcblx0TU9ERV9IWURSQVRFLFxuXHRNT0RFX1NVU1BFTkRFRCxcblx0TlVMTCxcblx0UkVTRVRfTU9ERSxcblx0U1ZHX05BTUVTUEFDRSxcblx0VU5ERUZJTkVELFxuXHRYSFRNTF9OQU1FU1BBQ0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIGlzQXJyYXksIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHthbnl9IFRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUmVmPFQ+fSBSZWY8VD5cbiAqL1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHQvKiogQHR5cGUge2FueX0gKi9cblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSBVTkRFRklORUQpIHJldHVybiBOVUxMO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX1NVU1BFTkRFRCkge1xuXHRcdGlzSHlkcmF0aW5nID0gISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKTtcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRsZXQgb2xkQ29tbWl0UXVldWVMZW5ndGggPSBjb21taXRRdWV1ZS5sZW5ndGg7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdFx0XHRjb25zdCBpc0NsYXNzQ29tcG9uZW50ID0gbmV3VHlwZS5wcm90b3R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQmFzZUNvbXBvbmVudChcblx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRpZiAoIWMuc3RhdGUpIGMuc3RhdGUgPSB7fTtcblx0XHRcdFx0Yy5fZ2xvYmFsQ29udGV4dCA9IGdsb2JhbENvbnRleHQ7XG5cdFx0XHRcdGlzTmV3ID0gYy5fZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW52b2tlIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5fbmV4dFN0YXRlID09IE5VTEwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgbmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRcdC8vIEludm9rZSBwcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gTlVMTFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQgJiYgYy5jb21wb25lbnREaWRNb3VudCAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5jb21wb25lbnREaWRNb3VudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRpc0NsYXNzQ29tcG9uZW50ICYmXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gTlVMTCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbCB8fFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IE5VTEwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gTW9yZSBpbmZvIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vSm92aURlQ3Jvb2NrL2JlYzVmMmNlOTM1NDRkMmU2MDcwZWY4ZTAwMzZlNGU4XG5cdFx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9vcmlnaW5hbCAhPSBvbGRWTm9kZS5fb3JpZ2luYWwpIHtcblx0XHRcdFx0XHRcdC8vIFdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBhIGJhaWwgYmVjYXVzZSBvZiBzQ1Ugd2UgaGF2ZSB0byB1cGRhdGVcblx0XHRcdFx0XHRcdC8vIHRoZSBwcm9wcywgc3RhdGUgYW5kIGRpcnR5LXN0YXRlLlxuXHRcdFx0XHRcdFx0Ly8gd2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIHN0cmljdC1lcXVhbGl0eSB3ZSBkb24ndCBhcyB0aGUgY2hpbGQgY291bGQgc3RpbGxcblx0XHRcdFx0XHRcdC8vIGJlIGRpcnRpZWQgc2VlICMzODgzXG5cdFx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLnNvbWUodm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRFTVBUWV9BUlIucHVzaC5hcHBseShjLl9yZW5kZXJDYWxsYmFja3MsIGMuX3N0YXRlQ2FsbGJhY2tzKTtcblx0XHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnRXaWxsVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVcGRhdGUobmV3UHJvcHMsIGMuX25leHRTdGF0ZSwgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3BhcmVudERvbSA9IHBhcmVudERvbTtcblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCkge1xuXHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gTlVMTCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiAhaXNOZXcgJiYgYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPSBOVUxMKSB7XG5cdFx0XHRcdHNuYXBzaG90ID0gYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID1cblx0XHRcdFx0dG1wICE9IE5VTEwgJiYgdG1wLnR5cGUgPT09IEZyYWdtZW50ICYmIHRtcC5rZXkgPT0gTlVMTFxuXHRcdFx0XHRcdD8gY2xvbmVOb2RlKHRtcC5wcm9wcy5jaGlsZHJlbilcblx0XHRcdFx0XHQ6IHRtcDtcblxuXHRcdFx0b2xkRG9tID0gZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdGlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5fZmxhZ3MgJj0gUkVTRVRfTU9ERTtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gTlVMTDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBXZSByZW1vdmUgYW55IGNvbXBvbmVudERpZE1vdW50LCAuLi5cblx0XHRcdC8vIHRoYXQgaGF2ZSBiZWVuIGludmFsaWRhdGVkIGJ5IHVzXG5cdFx0XHQvLyBpbnRlcmNlcHRpbmcgdGhlIGVycm9yLlxuXHRcdFx0Y29tbWl0UXVldWUubGVuZ3RoID0gb2xkQ29tbWl0UXVldWVMZW5ndGg7XG5cdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBOVUxMO1xuXHRcdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdFx0aWYgKGlzSHlkcmF0aW5nIHx8IGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0aWYgKGUudGhlbikge1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9mbGFncyB8PSBpc0h5ZHJhdGluZ1xuXHRcdFx0XHRcdFx0PyBNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRFxuXHRcdFx0XHRcdFx0OiBNT0RFX1NVU1BFTkRFRDtcblxuXHRcdFx0XHRcdHdoaWxlIChvbGREb20gJiYgb2xkRG9tLm5vZGVUeXBlID09IDggJiYgb2xkRG9tLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRcdFx0XHRvbGREb20gPSBvbGREb20ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2V4Y2Vzc0RvbUNoaWxkcmVuLmluZGV4T2Yob2xkRG9tKV0gPSBOVUxMO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld1ZOb2RlLl9jaGlsZHJlbiA9PSBOVUxMKSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbiB8fCBbXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlLnRoZW4pIG1hcmtBc0ZvcmNlKG5ld1ZOb2RlKTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoXG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gTlVMTCAmJlxuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0KSB7XG5cdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBkaWZmRWxlbWVudE5vZGVzKFxuXHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cblx0cmV0dXJuIG5ld1ZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEID8gdW5kZWZpbmVkIDogb2xkRG9tO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNGb3JjZSh2bm9kZSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCkgdm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmICh2bm9kZS5fY2hpbGRyZW4pIHZub2RlLl9jaGlsZHJlbi5zb21lKG1hcmtBc0ZvcmNlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtWTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCwgcmVmUXVldWUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZWZRdWV1ZS5sZW5ndGg7IGkrKykge1xuXHRcdGFwcGx5UmVmKHJlZlF1ZXVlW2ldLCByZWZRdWV1ZVsrK2ldLCByZWZRdWV1ZVsrK2ldKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgU2VlIGFib3ZlIGNvbW1lbnQgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG5cdGlmICh0eXBlb2Ygbm9kZSAhPSAnb2JqZWN0JyB8fCBub2RlID09IE5VTEwgfHwgbm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRpZiAoaXNBcnJheShub2RlKSkge1xuXHRcdHJldHVybiBub2RlLm1hcChjbG9uZU5vZGUpO1xuXHR9XG5cblx0aWYgKG5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIG51bGw7XG5cblx0cmV0dXJuIGFzc2lnbih7fSwgbm9kZSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIHZpcnR1YWwgbm9kZXNcbiAqIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtWTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqIEByZXR1cm5zIHtQcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0bmFtZXNwYWNlLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdGxldCBvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAobmV3Vk5vZGUudHlwZSk7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgbmV3SHRtbDtcblx0LyoqIEB0eXBlIHt7IF9faHRtbD86IHN0cmluZyB9fSAqL1xuXHRsZXQgb2xkSHRtbDtcblx0LyoqIEB0eXBlIHtDb21wb25lbnRDaGlsZHJlbn0gKi9cblx0bGV0IG5ld0NoaWxkcmVuO1xuXHRsZXQgdmFsdWU7XG5cdGxldCBpbnB1dFZhbHVlO1xuXHRsZXQgY2hlY2tlZDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgbmFtZXNwYWNlcyB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09ICdzdmcnKSBuYW1lc3BhY2UgPSBTVkdfTkFNRVNQQUNFO1xuXHRlbHNlIGlmIChub2RlVHlwZSA9PSAnbWF0aCcpIG5hbWVzcGFjZSA9IE1BVEhfTkFNRVNQQUNFO1xuXHRlbHNlIGlmICghbmFtZXNwYWNlKSBuYW1lc3BhY2UgPSBYSFRNTF9OQU1FU1BBQ0U7XG5cblx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhbHVlID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHZhbHVlICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIHZhbHVlID09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gdmFsdWUubG9jYWxOYW1lID09IG5vZGVUeXBlIDogdmFsdWUubm9kZVR5cGUgPT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSB2YWx1ZTtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IE5VTEwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRub2RlVHlwZSxcblx0XHRcdG5ld1Byb3BzLmlzICYmIG5ld1Byb3BzXG5cdFx0KTtcblxuXHRcdC8vIHdlIGFyZSBjcmVhdGluZyBhIG5ldyBub2RlLCBzbyB3ZSBjYW4gYXNzdW1lIHRoaXMgaXMgYSBuZXcgc3VidHJlZSAoaW5cblx0XHQvLyBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlmIChpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKVxuXHRcdFx0XHRvcHRpb25zLl9oeWRyYXRpb25NaXNtYXRjaChuZXdWTm9kZSwgZXhjZXNzRG9tQ2hpbGRyZW4pO1xuXHRcdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IE5VTEw7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT0gTlVMTCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPSBuZXdQcm9wcykpIHtcblx0XHRcdGRvbS5kYXRhID0gbmV3UHJvcHM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGV4Y2Vzc0RvbUNoaWxkcmVuIHdhcyBub3QgbnVsbCwgcmVwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQncyBjaGlsZHJlbjpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9XG5cdFx0XHRub2RlVHlwZSA9PSAndGV4dGFyZWEnICYmIG5ld1Byb3BzLmRlZmF1bHRWYWx1ZSAhPSBOVUxMXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IGV4Y2Vzc0RvbUNoaWxkcmVuICYmIHNsaWNlLmNhbGwoZG9tLmNoaWxkTm9kZXMpO1xuXG5cdFx0Ly8gSWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSBub3QgaHlkcmF0aW5nIGJ1dCBhcmUgdXNpbmdcblx0XHQvLyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET01cblx0XHQvLyBhdHRyaWJ1dGVzIHRvIGRpZmYgdGhlbVxuXHRcdGlmICghaXNIeWRyYXRpbmcgJiYgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0b2xkUHJvcHMgPSB7fTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZSA9IGRvbS5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0XHRvbGRQcm9wc1t2YWx1ZS5uYW1lXSA9IHZhbHVlLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBvbGRQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0b2xkSHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aSAhPSAnY2hpbGRyZW4nICYmXG5cdFx0XHRcdCEoaSBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gbmV3UHJvcHMpICYmXG5cdFx0XHRcdCEoaSA9PSAnY2hlY2tlZCcgJiYgJ2RlZmF1bHRDaGVja2VkJyBpbiBuZXdQcm9wcylcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIE5VTEwsIHZhbHVlLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGZvciAoaSBpbiBuZXdQcm9wcykge1xuXHRcdFx0dmFsdWUgPSBuZXdQcm9wc1tpXTtcblx0XHRcdGlmIChpID09ICdjaGlsZHJlbicpIHtcblx0XHRcdFx0bmV3Q2hpbGRyZW4gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0XHRcdG5ld0h0bWwgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAndmFsdWUnKSB7XG5cdFx0XHRcdGlucHV0VmFsdWUgPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PSAnY2hlY2tlZCcpIHtcblx0XHRcdFx0Y2hlY2tlZCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0KCFpc0h5ZHJhdGluZyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykgJiZcblx0XHRcdFx0b2xkUHJvcHNbaV0gIT09IHZhbHVlXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCB2YWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFpc0h5ZHJhdGluZyAmJlxuXHRcdFx0XHQoIW9sZEh0bWwgfHxcblx0XHRcdFx0XHQobmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwgJiYgbmV3SHRtbC5fX2h0bWwgIT0gZG9tLmlubmVySFRNTCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IG5ld0h0bWwuX19odG1sO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG9sZEh0bWwpIGRvbS5pbm5lckhUTUwgPSAnJztcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yXG5cdFx0XHRcdG5ld1ZOb2RlLnR5cGUgPT0gJ3RlbXBsYXRlJyA/IGRvbS5jb250ZW50IDogZG9tLFxuXHRcdFx0XHRpc0FycmF5KG5ld0NoaWxkcmVuKSA/IG5ld0NoaWxkcmVuIDogW25ld0NoaWxkcmVuXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRub2RlVHlwZSA9PSAnZm9yZWlnbk9iamVjdCcgPyBYSFRNTF9OQU1FU1BBQ0UgOiBuYW1lc3BhY2UsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5cblx0XHRcdFx0XHQ/IGV4Y2Vzc0RvbUNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0OiBvbGRWTm9kZS5fY2hpbGRyZW4gJiYgZ2V0RG9tU2libGluZyhvbGRWTm9kZSwgMCksXG5cdFx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0XHRyZWZRdWV1ZVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb25cblx0XHRpZiAoIWlzSHlkcmF0aW5nIHx8IG5vZGVUeXBlID09ICd0ZXh0YXJlYScpIHtcblx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0aWYgKG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgaW5wdXRWYWx1ZSA9PSBOVUxMKSB7XG5cdFx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpbnB1dFZhbHVlICE9IFVOREVGSU5FRCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGlucHV0VmFsdWUgIT09IGRvbVtpXSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PSAncHJvZ3Jlc3MnICYmICFpbnB1dFZhbHVlKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdvcHRpb24nICYmIGlucHV0VmFsdWUgIT0gb2xkUHJvcHNbaV0pKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgaW5wdXRWYWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSAnY2hlY2tlZCc7XG5cdFx0XHRpZiAoY2hlY2tlZCAhPSBVTkRFRklORUQgJiYgY2hlY2tlZCAhPSBkb21baV0pIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBjaGVja2VkLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7UmVmPGFueT4gJiB7IF91bm1vdW50PzogdW5rbm93biB9fSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGhhc1JlZlVubW91bnQgPSB0eXBlb2YgcmVmLl91bm1vdW50ID09ICdmdW5jdGlvbic7XG5cdFx0XHRpZiAoaGFzUmVmVW5tb3VudCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgbGlrZSBtb3ZpbmcgbmFycm93aW5nIGNoZWNrcyBpbnRvIHZhcmlhYmxlc1xuXHRcdFx0XHRyZWYuX3VubW91bnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFoYXNSZWZVbm1vdW50IHx8IHZhbHVlICE9IE5VTEwpIHtcblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGNsZWFudXAgZnVuY3Rpb24gb24gdGhlIGZ1bmN0aW9uXG5cdFx0XHRcdC8vIGluc3RhbmNlIG9iamVjdCBpdHNlbGYgdG8gYXZvaWQgc2hhcGVcblx0XHRcdFx0Ly8gdHJhbnNpdGlvbmluZyB2bm9kZVxuXHRcdFx0XHRyZWYuX3VubW91bnQgPSByZWYodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7Vk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXQgaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgTlVMTCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IE5VTEwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSByLl9nbG9iYWxDb250ZXh0ID0gTlVMTDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9ICdmdW5jdGlvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUpIHtcblx0XHRyZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXHR9XG5cblx0dm5vZGUuX2NvbXBvbmVudCA9IHZub2RlLl9wYXJlbnQgPSB2bm9kZS5fZG9tID0gVU5ERUZJTkVEO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCAiaW1wb3J0IHsgRU1QVFlfT0JKLCBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29tbWl0Um9vdCwgZGlmZiB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBSZW5kZXIgYSBQcmVhY3QgdmlydHVhbCBub2RlIGludG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0byByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zNzk0XG5cdGlmIChwYXJlbnREb20gPT0gZG9jdW1lbnQpIHtcblx0XHRwYXJlbnREb20gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBOVUxMXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8IHBhcmVudERvbSkuX2NoaWxkcmVuID1cblx0XHRjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBOVUxMLCBbdm5vZGVdKTtcblxuXHQvLyBMaXN0IG9mIGVmZmVjdHMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBkaWZmaW5nLlxuXHRsZXQgY29tbWl0UXVldWUgPSBbXSxcblx0XHRyZWZRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm5hbWVzcGFjZVVSSSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gW3JlcGxhY2VOb2RlXVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0XHQ/IE5VTExcblx0XHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdFx0XHQ6IE5VTEwsXG5cdFx0Y29tbWl0UXVldWUsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IHJlcGxhY2VOb2RlXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nLFxuXHRcdHJlZlF1ZXVlXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlLCByZWZRdWV1ZSk7XG5cblx0Ly8gVGhlIGxpdmUgY2hpbGRyZW4gYXJlIHRyYWNrZWQgb24gX2NoaWxkcmVuIGFmdGVyIGRpZmZpbmcuXG5cdHZub2RlLnByb3BzLmNoaWxkcmVuID0gTlVMTDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsICJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0c1xuICogY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZFxuICogYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGxldCBkZWZhdWx0UHJvcHM7XG5cblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRkZWZhdWx0UHJvcHMgPSB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcztcblx0fVxuXG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChwcm9wc1tpXSA9PT0gVU5ERUZJTkVEICYmIGRlZmF1bHRQcm9wcyAhPSBVTkRFRklORUQpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0fVxuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdE5VTExcblx0KTtcbn1cbiIsICJpbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3IHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdFxuICogZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlciBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmdcbiAqIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudFR5cGV9ICovXG5cdFx0Y3Rvcixcblx0XHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdFx0aGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCBudWxsLCAiaW1wb3J0IHsgb3B0aW9ucyBhcyBfb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRJbmRleDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgY3VycmVudENvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgcHJldmlvdXNDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRIb29rID0gMDtcblxuLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSAqL1xubGV0IGFmdGVyUGFpbnRFZmZlY3RzID0gW107XG5cbi8vIENhc3QgdG8gdXNlIGludGVybmFsIE9wdGlvbnMgdHlwZVxuY29uc3Qgb3B0aW9ucyA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc30gKi8gKF9vcHRpb25zKTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbmxldCBvbGRSb290ID0gb3B0aW9ucy5fcm9vdDtcblxuLy8gV2UgdGFrZSB0aGUgbWluaW11bSB0aW1lb3V0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gZW5zdXJlIHRoYXRcbi8vIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBuZXh0IGZyYW1lLiAzNW1zIGlzIGJhc2VkIG9uIGEgMzBoelxuLy8gcmVmcmVzaCByYXRlLCB3aGljaCBpcyB0aGUgbWluaW11bSByYXRlIGZvciBhIHNtb290aCB1c2VyIGV4cGVyaWVuY2UuXG5jb25zdCBSQUZfVElNRU9VVCA9IDM1O1xubGV0IHByZXZSYWY7XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yb290ID0gKHZub2RlLCBwYXJlbnREb20pID0+IHtcblx0aWYgKHZub2RlICYmIHBhcmVudERvbS5fY2hpbGRyZW4gJiYgcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaykge1xuXHRcdHZub2RlLl9tYXNrID0gcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaztcblx0fVxuXG5cdGlmIChvbGRSb290KSBvbGRSb290KHZub2RlLCBwYXJlbnREb20pO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fcmVuZGVyID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSBvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRjdXJyZW50SW5kZXggPSAwO1xuXG5cdGNvbnN0IGhvb2tzID0gY3VycmVudENvbXBvbmVudC5fX2hvb2tzO1xuXHRpZiAoaG9va3MpIHtcblx0XHRpZiAocHJldmlvdXNDb21wb25lbnQgPT09IGN1cnJlbnRDb21wb25lbnQpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50SW5kZXggPSAwO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxuLy8gVE9ETzogSW1wcm92ZSB0eXBpbmcgb2YgY29tbWl0UXVldWUgcGFyYW1ldGVyXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUsIGNvbW1pdFF1ZXVlOiBhbnkpID0+IHZvaWR9ICovXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3Muc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHt9KTtcblx0fVxuXG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBTXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IFtpbml0aWFsU3RhdGVdXG4gKiBAcmV0dXJucyB7W1MsIChzdGF0ZTogUykgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcblx0Y3VycmVudEhvb2sgPSAxO1xuXHRyZXR1cm4gdXNlUmVkdWNlcihpbnZva2VPclJldHVybiwgaW5pdGlhbFN0YXRlKTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gQVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPFMsIEE+fSByZWR1Y2VyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkRpc3BhdGNoPGltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxTPj59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgUywgKHN0YXRlOiBTKSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGxldCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cdFx0XHRjb25zdCBwcmV2Q1dVID0gY3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlO1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBmb3JjZWQgdXBkYXRlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgIHdpbGxcblx0XHRcdC8vIG5vdCBiZSBjYWxsZWQuIEJ1dCB3ZSB1c2UgdGhhdCB0byB1cGRhdGUgdGhlIGhvb2sgdmFsdWVzLCBzbyB3ZVxuXHRcdFx0Ly8gbmVlZCB0byBjYWxsIGl0LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvcmNlKSB7XG5cdFx0XHRcdFx0bGV0IHRtcCA9IHByZXZTY3U7XG5cdFx0XHRcdFx0Ly8gQ2xlYXIgdG8gYXZvaWQgb3RoZXIgc0NVIGhvb2tzIGZyb20gYmVpbmcgY2FsbGVkXG5cdFx0XHRcdFx0cHJldlNjdSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR1cGRhdGVIb29rU3RhdGUocCwgcywgYyk7XG5cdFx0XHRcdFx0cHJldlNjdSA9IHRtcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2Q1dVKSBwcmV2Q1dVLmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBUaGlzIFNDVSBoYXMgdGhlIHB1cnBvc2Ugb2YgYmFpbGluZyBvdXQgYWZ0ZXIgcmVwZWF0ZWQgdXBkYXRlc1xuXHRcdFx0Ly8gdG8gc3RhdGVmdWwgaG9va3MuXG5cdFx0XHQvLyB3ZSBzdG9yZSB0aGUgbmV4dCB2YWx1ZSBpbiBfbmV4dFZhbHVlWzBdIGFuZCBrZWVwIGRvaW5nIHRoYXQgZm9yIGFsbFxuXHRcdFx0Ly8gc3RhdGUgc2V0dGVycywgaWYgd2UgaGF2ZSBuZXh0IHN0YXRlcyBhbmRcblx0XHRcdC8vIGFsbCBuZXh0IHN0YXRlcyB3aXRoaW4gYSBjb21wb25lbnQgZW5kIHVwIGJlaW5nIGVxdWFsIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlXG5cdFx0XHQvLyB3ZSBhcmUgc2FmZSB0byBiYWlsIG91dCBmb3IgdGhpcyBzcGVjaWZpYyBjb21wb25lbnQuXG5cdFx0XHQvKipcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50W1wic2hvdWxkQ29tcG9uZW50VXBkYXRlXCJdfVxuXHRcdFx0ICovXG5cdFx0XHQvLyBAdHMtaWdub3JlIC0gV2UgZG9uJ3QgdXNlIFRTIHRvIGRvd250cmFuc3BpbGVcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbm5lci1kZWNsYXJhdGlvbnNcblx0XHRcdGZ1bmN0aW9uIHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Ly8gV2UgY2hlY2sgd2hldGhlciB3ZSBoYXZlIGNvbXBvbmVudHMgd2l0aCBhIG5leHRWYWx1ZSBzZXQgdGhhdFxuXHRcdFx0XHQvLyBoYXZlIHZhbHVlcyB0aGF0IGFyZW4ndCBlcXVhbCB0byBvbmUgYW5vdGhlciB0aGlzIHB1c2hlc1xuXHRcdFx0XHQvLyB1cyB0byB1cGRhdGUgZnVydGhlciBkb3duIHRoZSB0cmVlXG5cdFx0XHRcdGxldCB1cGRhdGVkSG9vayA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHA7XG5cdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3Quc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZWRIb29rID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKHByZXZTY3UpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYyk7XG5cdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRIb29rID8gcmVzdWx0IHx8IHNob3VsZFVwZGF0ZSA6IHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAhdXBkYXRlZEhvb2sgfHwgc2hvdWxkVXBkYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHVwZGF0ZUhvb2tTdGF0ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKiBAdHlwZSB7KGluaXRpYWxWYWx1ZTogdW5rbm93bikgPT4gdW5rbm93bn0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdFx0cmVmKG51bGwpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSByZXN1bHQoKTtcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0geygpID0+IFR9IGZhY3RvcnlcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7VH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGU8VD59ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGZhY3RvcnkoKTtcblx0XHRzdGF0ZS5fYXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMgeygpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKFxuXHRcdFx0Zm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IC8qKiBAdHlwZSB7YW55fSovICh2YWx1ZSlcblx0XHQpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHsoZXJyb3I6IHVua25vd24sIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKiBAcmV0dXJucyB7W3Vua25vd24sICgpID0+IHZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuLyoqIEB0eXBlIHsoKSA9PiBzdHJpbmd9ICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuSWRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0Y29uc3QgaG9va3MgPSBjb21wb25lbnQuX19ob29rcztcblx0XHRpZiAoIWNvbXBvbmVudC5fcGFyZW50RG9tIHx8ICFob29rcykgY29udGludWU7XG5cdFx0dHJ5IHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH1cbn1cblxubGV0IEhBU19SQUYgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09ICdmdW5jdGlvbic7XG5cbi8qKlxuICogU2NoZWR1bGUgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBicm93c2VyIGhhcyBhIGNoYW5jZSB0byBwYWludCBhIG5ldyBmcmFtZS5cbiAqIERvIHRoaXMgYnkgY29tYmluaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSAockFGKSArIHNldFRpbWVvdXQgdG8gaW52b2tlIGEgY2FsbGJhY2sgYWZ0ZXJcbiAqIHRoZSBuZXh0IGJyb3dzZXIgZnJhbWUuXG4gKlxuICogQWxzbywgc2NoZWR1bGUgYSB0aW1lb3V0IGluIHBhcmFsbGVsIHRvIHRoZSB0aGUgckFGIHRvIGVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZFxuICogZXZlbiBpZiBSQUYgZG9lc24ndCBmaXJlIChmb3IgZXhhbXBsZSBpZiB0aGUgYnJvd3NlciB0YWIgaXMgbm90IHZpc2libGUpXG4gKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBhZnRlck5leHRGcmFtZShjYWxsYmFjaykge1xuXHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRpZiAoSEFTX1JBRikgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoZG9uZSwgUkFGX1RJTUVPVVQpO1xuXG5cdGxldCByYWY7XG5cdGlmIChIQVNfUkFGKSB7XG5cdFx0cmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRvbmUpO1xuXHR9XG59XG5cbi8vIE5vdGU6IGlmIHNvbWVvbmUgdXNlZCBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuLy8gdGhlbiBlZmZlY3RzIHdpbGwgQUxXQVlTIHJ1biBvbiB0aGUgTkVYVCBmcmFtZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IG9uZSwgaW5jdXJyaW5nIGEgfjE2bXMgZGVsYXkuXG4vLyBQZXJoYXBzIHRoaXMgaXMgbm90IHN1Y2ggYSBiaWcgZGVhbC5cbi8qKlxuICogU2NoZWR1bGUgYWZ0ZXJQYWludEVmZmVjdHMgZmx1c2ggYWZ0ZXIgdGhlIGJyb3dzZXIgcGFpbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3UXVldWVMZW5ndGhcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGludm9rZUVmZmVjdChob29rKSB7XG5cdC8vIEEgaG9vayBjYWxsIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGhvb2suX2NsZWFudXAgPSBob29rLl92YWx1ZSgpO1xuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gb2xkQXJnc1xuICogQHBhcmFtIHt1bmtub3duW119IG5ld0FyZ3NcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIEFyZ1xuICogQHBhcmFtIHtBcmd9IGFyZ1xuICogQHBhcmFtIHsoYXJnOiBBcmcpID0+IGFueX0gZlxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gaW52b2tlT3JSZXR1cm4oYXJnLCBmKSB7XG5cdHJldHVybiB0eXBlb2YgZiA9PSAnZnVuY3Rpb24nID8gZihhcmcpIDogZjtcbn1cbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICIvLyBDb3JlIGRvY3VtZW50IHR5cGVzIHNoYXJlZCBieSBjbGllbnQgYW5kIHNlcnZlciwgcGx1cyB0aGUgSlNPTiBjb2RlYyBmb3Jcbi8vIGxheWVyIHRyYW5zZm9ybSBkYXRhIChudW1iZXJzIG11c3QgYmUgc2VyaWFsaXplZCBiZWNhdXNlIHRhYmxlIGNvbHVtbnMgYXJlXG4vLyBzdHJpbmdzIG9ubHkpLlxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9KRUNUX1dJRFRIID0gMTI4MDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfSEVJR0hUID0gODAwO1xuZXhwb3J0IGNvbnN0IE1BWF9JTUFHRV9ESU0gPSAyNTYwO1xuZXhwb3J0IGNvbnN0IE1JTl9MQVlFUl9TSVpFID0gODtcbmV4cG9ydCBjb25zdCBNQVhfUFJPSkVDVF9ESU0gPSA4MDAwO1xuXG5leHBvcnQgY29uc3QgQkxFTkRfTU9ERVMgPSBbXG4gIFwibm9ybWFsXCIsIFwibXVsdGlwbHlcIiwgXCJzY3JlZW5cIiwgXCJvdmVybGF5XCIsIFwiZGFya2VuXCIsIFwibGlnaHRlblwiLFxuICBcImNvbG9yLWRvZGdlXCIsIFwiY29sb3ItYnVyblwiLCBcImhhcmQtbGlnaHRcIiwgXCJzb2Z0LWxpZ2h0XCIsIFwiZGlmZmVyZW5jZVwiLCBcImV4Y2x1c2lvblwiLFxuICBcImh1ZVwiLCBcInNhdHVyYXRpb25cIiwgXCJjb2xvclwiLCBcImx1bWlub3NpdHlcIlxuXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEJsZW5kTW9kZSA9ICh0eXBlb2YgQkxFTkRfTU9ERVMpW251bWJlcl07XG5cbmV4cG9ydCB0eXBlIExheWVyVHJhbnNmb3JtID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdzogbnVtYmVyO1xuICBoOiBudW1iZXI7XG4gIC8qKiBEZWdyZWVzLCBjbG9ja3dpc2UsIGFib3V0IHRoZSBib3ggY2VudGVyLiAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICAvKiogMC4uMSAqL1xuICBvcGFjaXR5OiBudW1iZXI7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIGZsaXBYOiBib29sZWFuO1xuICBibGVuZE1vZGU6IEJsZW5kTW9kZTtcbn07XG5cbmV4cG9ydCB0eXBlIFRleHRBbGlnbiA9IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcblxuZXhwb3J0IHR5cGUgVGV4dExheWVyRGF0YSA9IHtcbiAgY29udGVudDogc3RyaW5nO1xuICBmb250RmFtaWx5OiBzdHJpbmc7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ6IG51bWJlcjtcbiAgYWxpZ246IFRleHRBbGlnbjtcbiAgY29sb3I6IHN0cmluZztcbiAgbGluZUhlaWdodDogbnVtYmVyO1xuICAvKiogSW50cmluc2ljIHJhc3RlciBkaW1lbnNpb25zIHVzZWQgdG8gcHJlc2VydmUgbGF5ZXIgc2NhbGUgYWNyb3NzIHRleHQgcmVyZW5kZXJzLiAqL1xuICByYXN0ZXJXaWR0aD86IG51bWJlcjtcbiAgcmFzdGVySGVpZ2h0PzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJEYXRhID0gTGF5ZXJUcmFuc2Zvcm0gJiB7IHRleHQ/OiBUZXh0TGF5ZXJEYXRhIH07XG5cbmV4cG9ydCB0eXBlIExheWVyID0gTGF5ZXJEYXRhICYge1xuICBpZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbi8qKiBUaGUgaW4tbWVtb3J5IGVkaXRpbmcgZG9jdW1lbnQuIGxheWVyc1swXSBpcyB0aGUgYm90dG9tIGxheWVyLiAqL1xuZXhwb3J0IHR5cGUgUHJvamVjdERvYyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJzOiBMYXllcltdO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdE1ldGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyT3JkZXI6IHN0cmluZ1tdO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyUm93ID0ge1xuICBpZDogc3RyaW5nO1xuICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGE6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RUaHVtYiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGh1bWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEFzc2V0UGF5bG9hZCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUGFpbnRBc3NldFBheWxvYWQgPSB7IHNyYzogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGZpbml0ZSh2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogZmFsbGJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXplVGV4dChpbnB1dDogUGFydGlhbDxUZXh0TGF5ZXJEYXRhPiB8IG51bGwgfCB1bmRlZmluZWQpOiBUZXh0TGF5ZXJEYXRhIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFpbnB1dCB8fCB0eXBlb2YgaW5wdXQuY29udGVudCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY29uc3QgYWxpZ246IFRleHRBbGlnbiA9IGlucHV0LmFsaWduID09PSBcImNlbnRlclwiIHx8IGlucHV0LmFsaWduID09PSBcInJpZ2h0XCIgPyBpbnB1dC5hbGlnbiA6IFwibGVmdFwiO1xuICBjb25zdCByYXN0ZXJXaWR0aCA9IGZpbml0ZShpbnB1dC5yYXN0ZXJXaWR0aCwgMCk7XG4gIGNvbnN0IHJhc3RlckhlaWdodCA9IGZpbml0ZShpbnB1dC5yYXN0ZXJIZWlnaHQsIDApO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGlucHV0LmNvbnRlbnQuc2xpY2UoMCwgNDAwMCksXG4gICAgZm9udEZhbWlseTogdHlwZW9mIGlucHV0LmZvbnRGYW1pbHkgPT09IFwic3RyaW5nXCIgPyBpbnB1dC5mb250RmFtaWx5LnNsaWNlKDAsIDgwKSA6IFwiSW50ZXJcIixcbiAgICBmb250U2l6ZTogY2xhbXAoZmluaXRlKGlucHV0LmZvbnRTaXplLCA0OCksIDYsIDUwMCksXG4gICAgZm9udFdlaWdodDogY2xhbXAoTWF0aC5yb3VuZChmaW5pdGUoaW5wdXQuZm9udFdlaWdodCwgNDAwKSAvIDEwMCkgKiAxMDAsIDEwMCwgOTAwKSxcbiAgICBhbGlnbixcbiAgICBjb2xvcjogdHlwZW9mIGlucHV0LmNvbG9yID09PSBcInN0cmluZ1wiICYmIC9eI1swLTlhLWZdezZ9JC9pLnRlc3QoaW5wdXQuY29sb3IpID8gaW5wdXQuY29sb3IgOiBcIiMxMTExMTFcIixcbiAgICBsaW5lSGVpZ2h0OiBjbGFtcChmaW5pdGUoaW5wdXQubGluZUhlaWdodCwgMS4yKSwgMC42LCAzKSxcbiAgICAuLi4ocmFzdGVyV2lkdGggPiAwICYmIHJhc3RlckhlaWdodCA+IDAgPyB7IHJhc3RlcldpZHRoLCByYXN0ZXJIZWlnaHQgfSA6IHt9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVUcmFuc2Zvcm0oaW5wdXQ6IFBhcnRpYWw8TGF5ZXJEYXRhPiB8IG51bGwgfCB1bmRlZmluZWQpOiBMYXllckRhdGEge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IHRleHQgPSBzYW5pdGl6ZVRleHQodC50ZXh0KTtcbiAgcmV0dXJuIHtcbiAgICB4OiBmaW5pdGUodC54LCAwKSxcbiAgICB5OiBmaW5pdGUodC55LCAwKSxcbiAgICB3OiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQudywgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICBoOiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQuaCwgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICByb3RhdGlvbjogZmluaXRlKHQucm90YXRpb24sIDApLFxuICAgIG9wYWNpdHk6IGNsYW1wKGZpbml0ZSh0Lm9wYWNpdHksIDEpLCAwLCAxKSxcbiAgICB2aXNpYmxlOiB0eXBlb2YgdC52aXNpYmxlID09PSBcImJvb2xlYW5cIiA/IHQudmlzaWJsZSA6IHRydWUsXG4gICAgZmxpcFg6IHR5cGVvZiB0LmZsaXBYID09PSBcImJvb2xlYW5cIiA/IHQuZmxpcFggOiBmYWxzZSxcbiAgICBibGVuZE1vZGU6IEJMRU5EX01PREVTLmluY2x1ZGVzKHQuYmxlbmRNb2RlIGFzIEJsZW5kTW9kZSkgPyAodC5ibGVuZE1vZGUgYXMgQmxlbmRNb2RlKSA6IFwibm9ybWFsXCIsXG4gICAgLi4uKHRleHQgPyB7IHRleHQgfSA6IHt9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlVHJhbnNmb3JtKHQ6IExheWVyRGF0YSk6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzYW5pdGl6ZVRyYW5zZm9ybSh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUcmFuc2Zvcm0ocmF3OiBzdHJpbmcpOiBMYXllckRhdGEge1xuICB0cnkge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShKU09OLnBhcnNlKHJhdykgYXMgUGFydGlhbDxMYXllckRhdGE+KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKG51bGwpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTdHJpbmdBcnJheShyYXc6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdykgYXMgdW5rbm93bjtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWQpID8gcGFyc2VkLmZpbHRlcigodik6IHYgaXMgc3RyaW5nID0+IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSA6IFtdO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTmFtZSh2YWx1ZTogc3RyaW5nLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2xlYW5lZCA9IHZhbHVlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKS5zbGljZSgwLCA4MCk7XG4gIHJldHVybiBjbGVhbmVkIHx8IGZhbGxiYWNrO1xufVxuIiwgIi8vIFB1cmUgZ2VvbWV0cnkgZm9yIG1vdmluZywgc2NhbGluZywgYW5kIHJvdGF0aW5nIGxheWVycy4gQWxsIG1hdGggd29ya3MgaW5cbi8vIHByb2plY3QgKFwid29ybGRcIikgY29vcmRpbmF0ZXM7IHJvdGF0aW9uIGlzIGRlZ3JlZXMgY2xvY2t3aXNlIGFib3V0IHRoZVxuLy8gbGF5ZXIncyBjZW50ZXIuXG5cbmltcG9ydCB7IE1JTl9MQVlFUl9TSVpFLCB0eXBlIExheWVyVHJhbnNmb3JtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgUG9pbnQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIEhhbmRsZUlkID0gXCJud1wiIHwgXCJuXCIgfCBcIm5lXCIgfCBcImVcIiB8IFwic2VcIiB8IFwic1wiIHwgXCJzd1wiIHwgXCJ3XCI7XG5cbi8qKiBIYW5kbGUgcG9zaXRpb25zIGluIHVuaXQgYm94IGNvb3JkaW5hdGVzICgwLi4xKS4gKi9cbmV4cG9ydCBjb25zdCBIQU5ETEVTOiBSZWNvcmQ8SGFuZGxlSWQsIFBvaW50PiA9IHtcbiAgbnc6IHsgeDogMCwgeTogMCB9LFxuICBuOiB7IHg6IDAuNSwgeTogMCB9LFxuICBuZTogeyB4OiAxLCB5OiAwIH0sXG4gIGU6IHsgeDogMSwgeTogMC41IH0sXG4gIHNlOiB7IHg6IDEsIHk6IDEgfSxcbiAgczogeyB4OiAwLjUsIHk6IDEgfSxcbiAgc3c6IHsgeDogMCwgeTogMSB9LFxuICB3OiB7IHg6IDAsIHk6IDAuNSB9XG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFX0lEUyA9IE9iamVjdC5rZXlzKEhBTkRMRVMpIGFzIEhhbmRsZUlkW107XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nvcm5lckhhbmRsZShoYW5kbGU6IEhhbmRsZUlkKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYW5kbGUubGVuZ3RoID09PSAyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKGRlZyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVjKHY6IFBvaW50LCBkZWc6IG51bWJlcik6IFBvaW50IHtcbiAgY29uc3QgcmFkID0gZGVnVG9SYWQoZGVnKTtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkKTtcbiAgcmV0dXJuIHsgeDogdi54ICogY29zIC0gdi55ICogc2luLCB5OiB2LnggKiBzaW4gKyB2LnkgKiBjb3MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ2VudGVyKHQ6IExheWVyVHJhbnNmb3JtKTogUG9pbnQge1xuICByZXR1cm4geyB4OiB0LnggKyB0LncgLyAyLCB5OiB0LnkgKyB0LmggLyAyIH07XG59XG5cbi8qKiBXb3JsZCBwb3NpdGlvbiBvZiBhIHBvaW50IGdpdmVuIGluIHVuaXQgYm94IGNvb3JkaW5hdGVzICgwLi4xKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bml0UG9pbnRUb1dvcmxkKHQ6IExheWVyVHJhbnNmb3JtLCB1bml0OiBQb2ludCk6IFBvaW50IHtcbiAgY29uc3QgY2VudGVyID0gbGF5ZXJDZW50ZXIodCk7XG4gIGNvbnN0IGxvY2FsID0geyB4OiAodW5pdC54IC0gMC41KSAqIHQudywgeTogKHVuaXQueSAtIDAuNSkgKiB0LmggfTtcbiAgY29uc3Qgcm90YXRlZCA9IHJvdGF0ZVZlYyhsb2NhbCwgdC5yb3RhdGlvbik7XG4gIHJldHVybiB7IHg6IGNlbnRlci54ICsgcm90YXRlZC54LCB5OiBjZW50ZXIueSArIHJvdGF0ZWQueSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgYSA9IGRlZyAlIDM2MDtcbiAgaWYgKGEgPiAxODApIGEgLT0gMzYwO1xuICBpZiAoYSA8PSAtMTgwKSBhICs9IDM2MDtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVzaXplIGBzdGFydGAgYnkgZHJhZ2dpbmcgYGhhbmRsZWAgdG8gd29ybGQgcG9pbnQgYHBvaW50ZXJgLCBrZWVwaW5nIHRoZVxuICogb3Bwb3NpdGUgaGFuZGxlIGZpeGVkLiBDb3JuZXIgaGFuZGxlcyBzY2FsZSBwcm9wb3J0aW9uYWxseSB1bmxlc3MgYGZyZWVgO1xuICogZWRnZSBoYW5kbGVzIHN0cmV0Y2ggYSBzaW5nbGUgYXhpcy4gTmV2ZXIgZmxpcHM7IGNsYW1wcyB0byBNSU5fTEFZRVJfU0laRS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlRnJvbUhhbmRsZShcbiAgc3RhcnQ6IExheWVyVHJhbnNmb3JtLFxuICBoYW5kbGU6IEhhbmRsZUlkLFxuICBwb2ludGVyOiBQb2ludCxcbiAgZnJlZTogYm9vbGVhblxuKTogUGljazxMYXllclRyYW5zZm9ybSwgXCJ4XCIgfCBcInlcIiB8IFwid1wiIHwgXCJoXCI+IHtcbiAgY29uc3QgaCA9IEhBTkRMRVNbaGFuZGxlXTtcbiAgY29uc3QgYW5jaG9yID0geyB4OiAxIC0gaC54LCB5OiAxIC0gaC55IH07XG4gIGNvbnN0IGFuY2hvcldvcmxkID0gdW5pdFBvaW50VG9Xb3JsZChzdGFydCwgYW5jaG9yKTtcblxuICAvLyBQb2ludGVyIGV4cHJlc3NlZCBpbiB0aGUgbGF5ZXIncyBsb2NhbCAodW5yb3RhdGVkKSBmcmFtZSwgcmVsYXRpdmUgdG8gdGhlIGFuY2hvci5cbiAgY29uc3QgdiA9IHJvdGF0ZVZlYyh7IHg6IHBvaW50ZXIueCAtIGFuY2hvcldvcmxkLngsIHk6IHBvaW50ZXIueSAtIGFuY2hvcldvcmxkLnkgfSwgLXN0YXJ0LnJvdGF0aW9uKTtcbiAgY29uc3QgZGlyWCA9IGgueCAtIGFuY2hvci54OyAvLyAtMSwgMCwgb3IgMVxuICBjb25zdCBkaXJZID0gaC55IC0gYW5jaG9yLnk7XG5cbiAgbGV0IHcgPSBzdGFydC53O1xuICBsZXQgaGd0ID0gc3RhcnQuaDtcblxuICBpZiAoaXNDb3JuZXJIYW5kbGUoaGFuZGxlKSAmJiAhZnJlZSkge1xuICAgIC8vIFByb2plY3QgdGhlIHBvaW50ZXIgb250byB0aGUgYW5jaG9yLT5oYW5kbGUgZGlhZ29uYWwgZm9yIGEgc21vb3RoIHVuaWZvcm0gc2NhbGUuXG4gICAgY29uc3QgZHggPSBkaXJYICogc3RhcnQudztcbiAgICBjb25zdCBkeSA9IGRpclkgKiBzdGFydC5oO1xuICAgIGNvbnN0IHMgPSBNYXRoLm1heChcbiAgICAgIE1JTl9MQVlFUl9TSVpFIC8gTWF0aC5tYXgoc3RhcnQudywgc3RhcnQuaCksXG4gICAgICAodi54ICogZHggKyB2LnkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpXG4gICAgKTtcbiAgICB3ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHN0YXJ0LncgKiBzKTtcbiAgICBoZ3QgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgc3RhcnQuaCAqIHMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChkaXJYICE9PSAwKSB3ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHYueCAvIGRpclgpO1xuICAgIGlmIChkaXJZICE9PSAwKSBoZ3QgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgdi55IC8gZGlyWSk7XG4gIH1cblxuICAvLyBSZXBvc2l0aW9uIHNvIHRoZSBhbmNob3IgcG9pbnQgc3RheXMgZml4ZWQgaW4gd29ybGQgc3BhY2UuXG4gIGNvbnN0IGNlbnRlck9mZnNldCA9IHJvdGF0ZVZlYyh7IHg6ICgwLjUgLSBhbmNob3IueCkgKiB3LCB5OiAoMC41IC0gYW5jaG9yLnkpICogaGd0IH0sIHN0YXJ0LnJvdGF0aW9uKTtcbiAgY29uc3QgY3ggPSBhbmNob3JXb3JsZC54ICsgY2VudGVyT2Zmc2V0Lng7XG4gIGNvbnN0IGN5ID0gYW5jaG9yV29ybGQueSArIGNlbnRlck9mZnNldC55O1xuICByZXR1cm4geyB4OiBjeCAtIHcgLyAyLCB5OiBjeSAtIGhndCAvIDIsIHcsIGg6IGhndCB9O1xufVxuXG4vKiogQW5nbGUgZm9yIHRoZSByb3RhdGUgaGFuZGxlICh3aGljaCBzaXRzIGFib3ZlIHRoZSB0b3AgZWRnZSkuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25Gcm9tUG9pbnRlcihzdGFydDogTGF5ZXJUcmFuc2Zvcm0sIHBvaW50ZXI6IFBvaW50LCBzbmFwOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgY2VudGVyID0gbGF5ZXJDZW50ZXIoc3RhcnQpO1xuICBjb25zdCBkZWcgPSAoTWF0aC5hdGFuMihwb2ludGVyLnkgLSBjZW50ZXIueSwgcG9pbnRlci54IC0gY2VudGVyLngpICogMTgwKSAvIE1hdGguUEkgKyA5MDtcbiAgY29uc3Qgc25hcHBlZCA9IHNuYXAgPyBNYXRoLnJvdW5kKGRlZyAvIDE1KSAqIDE1IDogZGVnO1xuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoc25hcHBlZCk7XG59XG5cbi8qKiBBeGlzLWFsaWduZWQgYm91bmRzIG9mIGEgKHBvc3NpYmx5IHJvdGF0ZWQpIGxheWVyLCBmb3IgZ3JvdXAgb3V0bGluZXMuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJBYWJiKHQ6IExheWVyVHJhbnNmb3JtKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XG4gIGNvbnN0IGNvcm5lcnMgPSBbXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDAsIHk6IDAgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDEsIHk6IDAgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDEsIHk6IDEgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDAsIHk6IDEgfSlcbiAgXTtcbiAgY29uc3QgeHMgPSBjb3JuZXJzLm1hcCgoYykgPT4gYy54KTtcbiAgY29uc3QgeXMgPSBjb3JuZXJzLm1hcCgoYykgPT4gYy55KTtcbiAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnhzKTtcbiAgY29uc3QgbWluWSA9IE1hdGgubWluKC4uLnlzKTtcbiAgcmV0dXJuIHsgeDogbWluWCwgeTogbWluWSwgdzogTWF0aC5tYXgoLi4ueHMpIC0gbWluWCwgaDogTWF0aC5tYXgoLi4ueXMpIC0gbWluWSB9O1xufVxuIiwgIi8vIFR5cGVkIHdyYXBwZXJzIG92ZXIgdGhlIGNhcHN1bGUncyBtdXRhdGlvbnMuIExha2ViZWQncyB1c2VNdXRhdGlvbiBwZXJmb3Jtc1xuLy8gbm8gaG9vayBjYWxscyBpbnRlcm5hbGx5IChpdCBqdXN0IGJpbmRzIHRoZSBXZWJTb2NrZXQgcmVxdWVzdCksIHNvIGl0IGlzXG4vLyBzYWZlIHRvIGNyZWF0ZSB0aGVzZSBiaW5kaW5ncyBvbmNlIGF0IG1vZHVsZSBzY29wZSBhbmQgY2FsbCB0aGVtIGZyb21cbi8vIG5vbi1jb21wb25lbnQgY29kZSBsaWtlIHRoZSBwZXJzaXN0IHF1ZXVlLlxuXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBBc3NldFBheWxvYWQsIFBhaW50QXNzZXRQYXlsb2FkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0ge1xuICBjcmVhdGVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl0sIHsgaWQ6IHN0cmluZyB9PihcImNyZWF0ZVByb2plY3RcIiksXG4gIGNyZWF0ZVByb2plY3RGcm9tSW1hZ2U6IHVzZU11dGF0aW9uPFxuICAgIFtuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsYXllck5hbWU6IHN0cmluZywgc3JjOiBzdHJpbmcsIGRhdGFKc29uOiBzdHJpbmddLFxuICAgIHsgaWQ6IHN0cmluZzsgbGF5ZXJJZDogc3RyaW5nOyBhc3NldElkOiBzdHJpbmc7IHNyYzogc3RyaW5nIH1cbiAgPihcImNyZWF0ZVByb2plY3RGcm9tSW1hZ2VcIiksXG4gIHJlbmFtZVByb2plY3Q6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmddLCB2b2lkPihcInJlbmFtZVByb2plY3RcIiksXG4gIHJlc2l6ZVByb2plY3Q6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl0sIHZvaWQ+KFwicmVzaXplUHJvamVjdFwiKSxcbiAgc2V0UHJvamVjdFRodW1iOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgdGh1bWI6IHN0cmluZ10sIHZvaWQ+KFwic2V0UHJvamVjdFRodW1iXCIpLFxuICBkZWxldGVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZ10sIHZvaWQ+KFwiZGVsZXRlUHJvamVjdFwiKSxcbiAgYWRkTGF5ZXI6IHVzZU11dGF0aW9uPFxuICAgIFtcbiAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgY2xpZW50S2V5OiBzdHJpbmcsXG4gICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICBkYXRhSnNvbjogc3RyaW5nLFxuICAgICAgYXNzZXQ6IHsgYXNzZXRJZD86IHN0cmluZzsgc3JjPzogc3RyaW5nOyB3aWR0aD86IG51bWJlcjsgaGVpZ2h0PzogbnVtYmVyIH1cbiAgICBdLFxuICAgIHsgbGF5ZXJJZDogc3RyaW5nOyBhc3NldElkOiBzdHJpbmc7IHNyYz86IHN0cmluZyB9XG4gID4oXCJhZGRMYXllclwiKSxcbiAgdXBkYXRlTGF5ZXI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCBkYXRhSnNvbjogc3RyaW5nXSwgdm9pZD4oXCJ1cGRhdGVMYXllclwiKSxcbiAgcmVwbGFjZUxheWVyQXNzZXQ6IHVzZU11dGF0aW9uPFxuICAgIFtpZDogc3RyaW5nLCBzcmM6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJdLFxuICAgIHsgYXNzZXRJZDogc3RyaW5nOyBzcmM6IHN0cmluZyB9XG4gID4oXCJyZXBsYWNlTGF5ZXJBc3NldFwiKSxcbiAgcmVuYW1lTGF5ZXI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmddLCB2b2lkPihcInJlbmFtZUxheWVyXCIpLFxuICBkZWxldGVMYXllcjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCB2b2lkPihcImRlbGV0ZUxheWVyXCIpLFxuICBzZXRMYXllck9yZGVyOiB1c2VNdXRhdGlvbjxbcHJvamVjdElkOiBzdHJpbmcsIGlkczogc3RyaW5nW11dLCB2b2lkPihcInNldExheWVyT3JkZXJcIiksXG4gIGdldEFzc2V0OiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZ10sIEFzc2V0UGF5bG9hZD4oXCJnZXRBc3NldFwiKSxcbiAgZ2V0QXNzZXRQYWludDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCBQYWludEFzc2V0UGF5bG9hZD4oXCJnZXRBc3NldFBhaW50XCIpXG59O1xuXG4vKipcbiAqIFF1ZXJpZXMgYXJyaXZlIGFzIGBbXWAgYmVmb3JlIHRoZSBmaXJzdCBXZWJTb2NrZXQgcmVzdWx0LCB0aGVuIGFzXG4gKiBgeyByZWFkeTogdHJ1ZSwgaXRlbXMgfWAuIFRoaXMgbm9ybWFsaXplcyBib3RoIHNoYXBlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5UmVzdWx0PFQ+KHJhdzogdW5rbm93bik6IHsgcmVhZHk6IGJvb2xlYW47IGl0ZW1zOiBUW10gfSB7XG4gIGlmIChyYXcgJiYgdHlwZW9mIHJhdyA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShyYXcpICYmIChyYXcgYXMgeyByZWFkeT86IGJvb2xlYW4gfSkucmVhZHkpIHtcbiAgICBjb25zdCBpdGVtcyA9IChyYXcgYXMgeyBpdGVtcz86IFRbXSB9KS5pdGVtcztcbiAgICByZXR1cm4geyByZWFkeTogdHJ1ZSwgaXRlbXM6IEFycmF5LmlzQXJyYXkoaXRlbXMpID8gaXRlbXMgOiBbXSB9O1xuICB9XG4gIHJldHVybiB7IHJlYWR5OiBmYWxzZSwgaXRlbXM6IFtdIH07XG59XG4iLCAiLy8gVGlueSBvYnNlcnZhYmxlIHN0b3JlIGZvciB0aGUgZWRpdG9yLiBXaGlsZSBhIHByb2plY3QgaXMgb3BlbiwgdGhpcyBkb2MgaXNcbi8vIHRoZSBzaW5nbGUgc291cmNlIG9mIHRydXRoOiBwb2ludGVyIGdlc3R1cmVzIG11dGF0ZSBpdCBzeW5jaHJvbm91c2x5IGZvclxuLy8gaW5zdGFudCBmZWVkYmFjaywgYW5kIHBlcnNpc3RlbmNlIGhhcHBlbnMgaW4gdGhlIGJhY2tncm91bmQgKHNlZSBwZXJzaXN0LnRzKS5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHR5cGUgeyBCbGVuZE1vZGUsIFByb2plY3REb2MsIFRleHRBbGlnbiB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgVG9vbCA9IFwibW92ZVwiIHwgXCJoYW5kXCIgfCBcInRleHRcIiB8IFwiYnJ1c2hcIiB8IFwiY3JvcFwiO1xuZXhwb3J0IHR5cGUgU2F2ZVN0YXR1cyA9IFwic2F2ZWRcIiB8IFwic2F2aW5nXCIgfCBcInJldHJ5aW5nXCI7XG5cbmV4cG9ydCB0eXBlIEVkaXRvclZpZXcgPSB7IHpvb206IG51bWJlcjsgcGFuWDogbnVtYmVyOyBwYW5ZOiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgRWRpdG9yU3RhdGUgPSB7XG4gIGRvYzogUHJvamVjdERvYyB8IG51bGw7XG4gIHNlbGVjdGlvbjogc3RyaW5nW107XG4gIHRvb2w6IFRvb2w7XG4gIHNwYWNlUGFuOiBib29sZWFuO1xuICB2aWV3OiBFZGl0b3JWaWV3O1xuICBzYXZlU3RhdHVzOiBTYXZlU3RhdHVzO1xuICBwZW5kaW5nT3BzOiBudW1iZXI7XG4gIHNhdmVFcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEJ1bXBlZCB3aGVuZXZlciB0aGUgdW5kby9yZWRvIHN0YWNrcyBjaGFuZ2UsIHNvIHRoZSBVSSByZS1yZWFkcyB0aGVtLiAqL1xuICBoaXN0VmVyc2lvbjogbnVtYmVyO1xuICAvKiogQnVtcGVkIHRvIGFzayB0aGUgY2FudmFzIHRvIHJlLWZpdCB0aGUgYXJ0Ym9hcmQgdG8gdGhlIHZpZXdwb3J0LiAqL1xuICBmaXRWZXJzaW9uOiBudW1iZXI7XG4gIGJydXNoU2l6ZTogbnVtYmVyO1xuICBicnVzaEhhcmRuZXNzOiBudW1iZXI7XG4gIGJydXNoT3BhY2l0eTogbnVtYmVyO1xuICBicnVzaEZsb3c6IG51bWJlcjtcbiAgZm9yZWdyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICB0ZXh0Rm9udEZhbWlseTogc3RyaW5nO1xuICB0ZXh0Rm9udFNpemU6IG51bWJlcjtcbiAgdGV4dEZvbnRXZWlnaHQ6IG51bWJlcjtcbiAgdGV4dEFsaWduOiBUZXh0QWxpZ247XG4gIHRleHRMaW5lSGVpZ2h0OiBudW1iZXI7XG4gIHRleHRFZGl0aW5nOiB7IGlkOiBzdHJpbmc7IGRyYWZ0OiBzdHJpbmcgfSB8IG51bGw7XG4gIGNyb3BSZWN0OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHwgbnVsbDtcbiAgc25hcEd1aWRlczogeyB4PzogbnVtYmVyOyB5PzogbnVtYmVyIH0gfCBudWxsO1xuICBibGVuZFByZXZpZXc6IEJsZW5kTW9kZSB8IG51bGw7XG59O1xuXG5sZXQgc3RhdGU6IEVkaXRvclN0YXRlID0ge1xuICBkb2M6IG51bGwsXG4gIHNlbGVjdGlvbjogW10sXG4gIHRvb2w6IFwibW92ZVwiLFxuICBzcGFjZVBhbjogZmFsc2UsXG4gIHZpZXc6IHsgem9vbTogMSwgcGFuWDogMCwgcGFuWTogMCB9LFxuICBzYXZlU3RhdHVzOiBcInNhdmVkXCIsXG4gIHBlbmRpbmdPcHM6IDAsXG4gIHNhdmVFcnJvcjogbnVsbCxcbiAgaGlzdFZlcnNpb246IDAsXG4gIGZpdFZlcnNpb246IDAsXG4gIGJydXNoU2l6ZTogMTYsXG4gIGJydXNoSGFyZG5lc3M6IDgwLFxuICBicnVzaE9wYWNpdHk6IDEwMCxcbiAgYnJ1c2hGbG93OiAxMDAsXG4gIGZvcmVncm91bmRDb2xvcjogXCIjMTExMTExXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG4gIHRleHRGb250RmFtaWx5OiBcIkludGVyXCIsXG4gIHRleHRGb250U2l6ZTogNDgsXG4gIHRleHRGb250V2VpZ2h0OiA0MDAsXG4gIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gIHRleHRMaW5lSGVpZ2h0OiAxLjIsXG4gIHRleHRFZGl0aW5nOiBudWxsLFxuICBjcm9wUmVjdDogbnVsbCxcbiAgc25hcEd1aWRlczogbnVsbCxcbiAgYmxlbmRQcmV2aWV3OiBudWxsXG59O1xuXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZSgpOiBFZGl0b3JTdGF0ZSB7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlKHBhdGNoOiBQYXJ0aWFsPEVkaXRvclN0YXRlPik6IHZvaWQge1xuICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLnBhdGNoIH07XG4gIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc10pIHtcbiAgICBsaXN0ZW5lcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2MoZm46IChkb2M6IFByb2plY3REb2MpID0+IFByb2plY3REb2MpOiB2b2lkIHtcbiAgaWYgKCFzdGF0ZS5kb2MpIHJldHVybjtcbiAgc2V0U3RhdGUoeyBkb2M6IGZuKHN0YXRlLmRvYykgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXI6ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gIH07XG59XG5cbi8qKiBTdWJzY3JpYmUgYSBjb21wb25lbnQgdG8gYSBzbGljZSBvZiBlZGl0b3Igc3RhdGUgKE9iamVjdC5pcyBjb21wYXJpc29uKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZGl0b3I8VD4oc2VsZWN0b3I6IChzOiBFZGl0b3JTdGF0ZSkgPT4gVCk6IFQge1xuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzZWxlY3RvcjtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiBzZWxlY3RvcihzdGF0ZSkpO1xuICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV4dCA9IHNlbGVjdG9yUmVmLmN1cnJlbnQoc3RhdGUpO1xuICAgICAgaWYgKCFPYmplY3QuaXMobmV4dCwgdmFsdWVSZWYuY3VycmVudCkpIHtcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHQ7XG4gICAgICAgIHNldFZhbHVlKCgpID0+IG5leHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hlY2soKTtcbiAgICByZXR1cm4gc3Vic2NyaWJlKGNoZWNrKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsICIvLyBXcml0ZS1iZWhpbmQgcGVyc2lzdGVuY2UgcXVldWU6IHRoZSBvcHRpbWlzdGljIGVuZ2luZSdzIGJhY2tib25lLlxuLy9cbi8vIEV2ZXJ5IGVkaXQgaXMgYXBwbGllZCB0byB0aGUgbG9jYWwgZG9jIGltbWVkaWF0ZWx5OyB0aGUgY29ycmVzcG9uZGluZ1xuLy8gb3BlcmF0aW9uIGlzIGVucXVldWVkIGhlcmUgYW5kIGRyYWluZWQgaW4gb3JkZXIgb3ZlciB0aGUgV2ViU29ja2V0LlxuLy9cbi8vIEd1YXJhbnRlZXM6XG4vLyAtIEZJRk86IGFuIG9wIHRoYXQgcmVmZXJlbmNlcyBhIGxheWVyIGNyZWF0ZWQgYnkgYW4gZWFybGllciBvcCBhbHdheXMgcnVuc1xuLy8gICBhZnRlciBpdCwgc28gdGVtcCBjbGllbnQgaWRzIGNhbiBiZSByZW1hcHBlZCB0byBzZXJ2ZXIgaWRzIG9uIHRoZSBmbHkuXG4vLyAtIENvYWxlc2Npbmc6IHJhcGlkIHVwZGF0ZXMgdG8gdGhlIHNhbWUgdGFyZ2V0IGNvbGxhcHNlIGludG8gb25lIHBlbmRpbmcgb3Bcbi8vICAgKGRyYWcgZ2VzdHVyZXMgZG9uJ3QgZmxvb2QgdGhlIHNlcnZlcikuXG4vLyAtIERlbGl2ZXJ5OiBvcHMgdGhhdCB0aW1lIG91dCAoZGVhZCBzb2NrZXQsIHJlY29ubmVjdCkgYXJlIHJldHJpZWQgd2l0aFxuLy8gICBiYWNrb2ZmIGZvcmV2ZXI7IGFkZExheWVyIGNhcnJpZXMgYW4gaWRlbXBvdGVuY3kga2V5IHNvIHJldHJpZXMgbmV2ZXJcbi8vICAgZHVwbGljYXRlLiBEZXRlcm1pbmlzdGljIHNlcnZlciByZWplY3Rpb25zIGFyZSBkcm9wcGVkIGFuZCBzdXJmYWNlZC5cblxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyBzZWVkQXNzZXQgfSBmcm9tIFwiLi9hc3NldHNcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmV4cG9ydCB0eXBlIFBlcnNpc3RPcCA9XG4gIHwge1xuICAgICAga2luZDogXCJhZGRMYXllclwiO1xuICAgICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgICAgY2xpZW50S2V5OiBzdHJpbmc7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBkYXRhOiBzdHJpbmc7XG4gICAgICBhc3NldDogeyByZWY6IHN0cmluZyB9IHwgeyBjbGllbnRJZDogc3RyaW5nOyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgICB9XG4gIHwgeyBraW5kOiBcInVwZGF0ZUxheWVyXCI7IGlkOiBzdHJpbmc7IGRhdGE6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInJlcGxhY2VMYXllckFzc2V0XCI7IGlkOiBzdHJpbmc7IGNsaWVudEFzc2V0SWQ6IHN0cmluZzsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lTGF5ZXJcIjsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwiZGVsZXRlTGF5ZXJcIjsgaWQ6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInNldE9yZGVyXCI7IHByb2plY3RJZDogc3RyaW5nOyBpZHM6IHN0cmluZ1tdIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lUHJvamVjdFwiOyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJyZXNpemVQcm9qZWN0XCI7IGlkOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6IFwic2V0VGh1bWJcIjsgaWQ6IHN0cmluZzsgdGh1bWI6IHN0cmluZyB9O1xuXG5jb25zdCBPUF9USU1FT1VUX01TID0gMTBfMDAwO1xuLy8gVXBsb2FkcyBnbyBjbGllbnQgXHUyMTkyIExha2ViZWQgXHUyMTkyIFMzOyBhbGxvdyBtb3JlIHRpbWUgdGhhbiBhIG5vcm1hbCBtZXRhZGF0YSB3cml0ZS5cbmNvbnN0IFVQTE9BRF9USU1FT1VUX01TID0gNjBfMDAwO1xuY29uc3QgTUFYX0JBQ0tPRkZfTVMgPSAxNV8wMDA7XG5cbi8vIFRlbXAgY2xpZW50IGlkIC0+IHNlcnZlciBpZC4gQ2xpZW50IGNvZGUgb25seSBldmVyIHNlZXMgY2xpZW50IGlkczsgdGhlXG4vLyB0cmFuc2xhdGlvbiBoYXBwZW5zIGhlcmUgYXQgZXhlY3V0aW9uIHRpbWUuXG5jb25zdCBsYXllcklkcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5jb25zdCBhc3NldElkcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbmNvbnN0IHF1ZXVlOiBQZXJzaXN0T3BbXSA9IFtdO1xubGV0IGRyYWluaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTGF5ZXJJZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxheWVySWRzLmdldChpZCkgPz8gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXNzZXRJZChpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFzc2V0SWRzLmdldChpZCkgPz8gaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBBc3NldElkKGNsaWVudElkOiBzdHJpbmcsIHNlcnZlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNsaWVudElkICE9PSBzZXJ2ZXJJZCkgYXNzZXRJZHMuc2V0KGNsaWVudElkLCBzZXJ2ZXJJZCk7XG59XG5cbmxldCBuZXh0Q2xpZW50SWQgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIG5ld0NsaWVudElkKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3ByZWZpeH1fJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHsobmV4dENsaWVudElkKyspLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpXG4gICAgLnRvU3RyaW5nKDM2KVxuICAgIC5zbGljZSgyLCA4KX1gO1xufVxuXG4vKiogS2V5IGZvciBjb2FsZXNjaW5nOyBvcHMgd2l0aCB0aGUgc2FtZSBrZXkgcmVwbGFjZSBlYWNoIG90aGVyIGluIHBsYWNlLiAqL1xuZnVuY3Rpb24gb3BLZXkob3A6IFBlcnNpc3RPcCk6IHN0cmluZyB8IG51bGwge1xuICBzd2l0Y2ggKG9wLmtpbmQpIHtcbiAgICBjYXNlIFwidXBkYXRlTGF5ZXJcIjpcbiAgICAgIHJldHVybiBgdXBkYXRlTGF5ZXI6JHtvcC5pZH1gO1xuICAgIGNhc2UgXCJyZW5hbWVMYXllclwiOlxuICAgICAgcmV0dXJuIGByZW5hbWVMYXllcjoke29wLmlkfWA7XG4gICAgY2FzZSBcInNldE9yZGVyXCI6XG4gICAgICByZXR1cm4gYHNldE9yZGVyOiR7b3AucHJvamVjdElkfWA7XG4gICAgY2FzZSBcInJlbmFtZVByb2plY3RcIjpcbiAgICAgIHJldHVybiBgcmVuYW1lUHJvamVjdDoke29wLmlkfWA7XG4gICAgY2FzZSBcInJlc2l6ZVByb2plY3RcIjpcbiAgICAgIHJldHVybiBgcmVzaXplUHJvamVjdDoke29wLmlkfWA7XG4gICAgY2FzZSBcInNldFRodW1iXCI6XG4gICAgICByZXR1cm4gYHNldFRodW1iOiR7b3AuaWR9YDtcbiAgICBjYXNlIFwicmVwbGFjZUxheWVyQXNzZXRcIjpcbiAgICAgIHJldHVybiBgcmVwbGFjZUxheWVyQXNzZXQ6JHtvcC5pZH1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZShvcDogUGVyc2lzdE9wKTogdm9pZCB7XG4gIGNvbnN0IGtleSA9IG9wS2V5KG9wKTtcbiAgaWYgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSBxdWV1ZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKG9wS2V5KHF1ZXVlW2ldKSA9PT0ga2V5KSB7XG4gICAgICAgIHF1ZXVlW2ldID0gb3A7XG4gICAgICAgIHN5bmNTdGF0dXMoKTtcbiAgICAgICAgdm9pZCBkcmFpbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHF1ZXVlLnB1c2gob3ApO1xuICBzeW5jU3RhdHVzKCk7XG4gIHZvaWQgZHJhaW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlbmRpbmdDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBzeW5jU3RhdHVzKHBhdGNoOiBQYXJ0aWFsPHsgc2F2ZVN0YXR1czogXCJzYXZlZFwiIHwgXCJzYXZpbmdcIiB8IFwicmV0cnlpbmdcIjsgc2F2ZUVycm9yOiBzdHJpbmcgfCBudWxsIH0+ID0ge30pOiB2b2lkIHtcbiAgY29uc3QgYnVzeSA9IHF1ZXVlLmxlbmd0aCA+IDAgfHwgZHJhaW5pbmc7XG4gIHNldFN0YXRlKHtcbiAgICBzYXZlU3RhdHVzOiBwYXRjaC5zYXZlU3RhdHVzID8/IChidXN5ID8gXCJzYXZpbmdcIiA6IFwic2F2ZWRcIiksXG4gICAgcGVuZGluZ09wczogcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApLFxuICAgIC4uLihwYXRjaC5zYXZlRXJyb3IgIT09IHVuZGVmaW5lZCA/IHsgc2F2ZUVycm9yOiBwYXRjaC5zYXZlRXJyb3IgfSA6IHt9KVxuICB9KTtcbn1cblxuY2xhc3MgT3BUaW1lb3V0IGV4dGVuZHMgRXJyb3Ige31cblxuZnVuY3Rpb24gd2l0aFRpbWVvdXQ8VD4ocHJvbWlzZTogUHJvbWlzZTxUPiwgbXMgPSBPUF9USU1FT1VUX01TKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgT3BUaW1lb3V0KFwidGltZWQgb3V0XCIpKSwgbXMpO1xuICAgIHByb21pc2UudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShvcDogUGVyc2lzdE9wKTogUHJvbWlzZTx2b2lkPiB7XG4gIHN3aXRjaCAob3Aua2luZCkge1xuICAgIGNhc2UgXCJhZGRMYXllclwiOiB7XG4gICAgICBjb25zdCBhc3NldCA9XG4gICAgICAgIFwicmVmXCIgaW4gb3AuYXNzZXRcbiAgICAgICAgICA/IHsgYXNzZXRJZDogcmVzb2x2ZUFzc2V0SWQob3AuYXNzZXQucmVmKSB9XG4gICAgICAgICAgOiB7IHNyYzogb3AuYXNzZXQuc3JjLCB3aWR0aDogb3AuYXNzZXQud2lkdGgsIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0IH07XG4gICAgICBjb25zdCB0aW1lb3V0ID0gXCJzcmNcIiBpbiBhc3NldCA/IFVQTE9BRF9USU1FT1VUX01TIDogT1BfVElNRU9VVF9NUztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpdGhUaW1lb3V0KFxuICAgICAgICBhcGkuYWRkTGF5ZXIob3AucHJvamVjdElkLCBvcC5jbGllbnRLZXksIG9wLm5hbWUsIG9wLmRhdGEsIGFzc2V0KSxcbiAgICAgICAgdGltZW91dFxuICAgICAgKTtcbiAgICAgIGlmIChvcC5jbGllbnRJZCAhPT0gcmVzdWx0LmxheWVySWQpIGxheWVySWRzLnNldChvcC5jbGllbnRJZCwgcmVzdWx0LmxheWVySWQpO1xuICAgICAgY29uc3QgY2xpZW50QXNzZXRJZCA9IFwicmVmXCIgaW4gb3AuYXNzZXQgPyBvcC5hc3NldC5yZWYgOiBvcC5hc3NldC5jbGllbnRJZDtcbiAgICAgIG1hcEFzc2V0SWQoY2xpZW50QXNzZXRJZCwgcmVzdWx0LmFzc2V0SWQpO1xuICAgICAgaWYgKHJlc3VsdC5zcmMgJiYgXCJzcmNcIiBpbiBvcC5hc3NldCkge1xuICAgICAgICBzZWVkQXNzZXQoY2xpZW50QXNzZXRJZCwge1xuICAgICAgICAgIHNyYzogcmVzdWx0LnNyYyxcbiAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBvcC5hc3NldC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHNlZWRBc3NldChyZXN1bHQuYXNzZXRJZCwge1xuICAgICAgICAgIHNyYzogcmVzdWx0LnNyYyxcbiAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBvcC5hc3NldC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhc2UgXCJ1cGRhdGVMYXllclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS51cGRhdGVMYXllcihyZXNvbHZlTGF5ZXJJZChvcC5pZCksIG9wLmRhdGEpKTtcbiAgICBjYXNlIFwicmVwbGFjZUxheWVyQXNzZXRcIjoge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2l0aFRpbWVvdXQoXG4gICAgICAgIGFwaS5yZXBsYWNlTGF5ZXJBc3NldChyZXNvbHZlTGF5ZXJJZChvcC5pZCksIG9wLnNyYywgb3Aud2lkdGgsIG9wLmhlaWdodCksXG4gICAgICAgIFVQTE9BRF9USU1FT1VUX01TXG4gICAgICApO1xuICAgICAgbWFwQXNzZXRJZChvcC5jbGllbnRBc3NldElkLCByZXN1bHQuYXNzZXRJZCk7XG4gICAgICAvLyBLZWVwIGEgbG9jYWwgZGF0YSBVUkwgYXMgZGlzcGxheSBzcmMgc28gdGhlIGxheWVyIDxpbWc+IGRvZXNuJ3QgZmxhc2hcbiAgICAgIC8vIHdoZW4gdGhlIHVwbG9hZGVkIENsb3VkRnJvbnQgVVJMIGFycml2ZXMuXG4gICAgICBjb25zdCBsb2NhbCA9IG9wLnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIik7XG4gICAgICBjb25zdCBkaXNwbGF5ID0gbG9jYWwgPyBvcC5zcmMgOiByZXN1bHQuc3JjO1xuICAgICAgY29uc3QgcGFpbnRTcmMgPSBsb2NhbCA/IG9wLnNyYyA6IHVuZGVmaW5lZDtcbiAgICAgIHNlZWRBc3NldChvcC5jbGllbnRBc3NldElkLCB7XG4gICAgICAgIHNyYzogZGlzcGxheSxcbiAgICAgICAgcGFpbnRTcmMsXG4gICAgICAgIHdpZHRoOiBvcC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBvcC5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgc2VlZEFzc2V0KHJlc3VsdC5hc3NldElkLCB7XG4gICAgICAgIHNyYzogZGlzcGxheSxcbiAgICAgICAgcGFpbnRTcmMsXG4gICAgICAgIHdpZHRoOiBvcC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBvcC5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYXNlIFwicmVuYW1lTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVuYW1lTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcImRlbGV0ZUxheWVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLmRlbGV0ZUxheWVyKHJlc29sdmVMYXllcklkKG9wLmlkKSkpO1xuICAgIGNhc2UgXCJzZXRPcmRlclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5zZXRMYXllck9yZGVyKG9wLnByb2plY3RJZCwgb3AuaWRzLm1hcChyZXNvbHZlTGF5ZXJJZCkpKTtcbiAgICBjYXNlIFwicmVuYW1lUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5yZW5hbWVQcm9qZWN0KG9wLmlkLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcInJlc2l6ZVByb2plY3RcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVzaXplUHJvamVjdChvcC5pZCwgb3Aud2lkdGgsIG9wLmhlaWdodCkpO1xuICAgIGNhc2UgXCJzZXRUaHVtYlwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5zZXRQcm9qZWN0VGh1bWIob3AuaWQsIG9wLnRodW1iKSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZHJhaW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChkcmFpbmluZykgcmV0dXJuO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHN5bmNTdGF0dXMoKTtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG9wID0gcXVldWUuc2hpZnQoKSE7XG4gICAgbGV0IGF0dGVtcHQgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZShvcCk7XG4gICAgICAgIGlmIChhdHRlbXB0ID4gMCkgc3luY1N0YXR1cyh7IHNhdmVTdGF0dXM6IFwic2F2aW5nXCIgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgT3BUaW1lb3V0KSB7XG4gICAgICAgICAgLy8gU29ja2V0IGxpa2VseSBkaWVkOyB0aGUgdHJhbnNwb3J0IHJlY29ubmVjdHMgb24gaXRzIG93bi4gUmV0cnkgZm9yZXZlci5cbiAgICAgICAgICBhdHRlbXB0ICs9IDE7XG4gICAgICAgICAgc3luY1N0YXR1cyh7IHNhdmVTdGF0dXM6IFwicmV0cnlpbmdcIiB9KTtcbiAgICAgICAgICBhd2FpdCBkZWxheShNYXRoLm1pbihNQVhfQkFDS09GRl9NUywgNTAwICogMiAqKiBNYXRoLm1pbihhdHRlbXB0LCA1KSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcik7XG4gICAgICAgIC8vIFwibm90IGZvdW5kXCIgYWZ0ZXIgYSByZXRyeSBqdXN0IG1lYW5zIGEgY29tcGV0aW5nIGRlbGV0ZSBhbHJlYWR5IHdvbjtcbiAgICAgICAgLy8gdGhlIHN0YXRlcyBoYXZlIGNvbnZlcmdlZCwgc28gdHJlYXQgaXQgYXMgc3VjY2Vzcy5cbiAgICAgICAgaWYgKCEvbm90IGZvdW5kL2kudGVzdChtZXNzYWdlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQZXJzaXN0IG9wIGZhaWxlZCwgZHJvcHBpbmc6XCIsIG9wLmtpbmQsIG1lc3NhZ2UpO1xuICAgICAgICAgIHN5bmNTdGF0dXMoeyBzYXZlRXJyb3I6IGAke29wLmtpbmR9OiAke21lc3NhZ2V9YCB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBzeW5jU3RhdHVzKCk7XG59XG5cbi8vIEVkaXRpbmcgY29tbWl0cyBhcmUgZW5xdWV1ZWQgb24gZ2VzdHVyZSBlbmQgYW5kIG5vcm1hbGx5IGZsdXNoIGluXG4vLyBtaWxsaXNlY29uZHMsIGJ1dCB3YXJuIGlmIHRoZSB1c2VyIGNsb3NlcyB0aGUgdGFiIG1pZC1zYXZlLlxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKHBlbmRpbmdDb3VudCgpID4gMCB8fCBnZXRTdGF0ZSgpLnNhdmVTdGF0dXMgIT09IFwic2F2ZWRcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwgIi8vIEluLW1lbW9yeSBhc3NldCBjYWNoZS4gTG9jYWxseSBpbXBvcnRlZCBpbWFnZXMgYXJlIHNlZWRlZCB3aXRoIGEgZGF0YSBVUkxcbi8vIChwYWludFNyYykgZm9yIGNhbnZhcyB3b3JrOyBhZnRlciBTMyB1cGxvYWQsIHNyYyBiZWNvbWVzIHRoZSBDbG91ZEZyb250IFVSTFxuLy8gdXNlZCBmb3IgPGltZz4gZGlzcGxheS4gcGFpbnRTcmMgaXMga2VwdCBzbyB0aHVtYnMvZXhwb3J0IHdvcmsgd2l0aG91dCBDT1JTLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4vYXBpXCI7XG5pbXBvcnQgeyByZXNvbHZlQXNzZXRJZCB9IGZyb20gXCIuL3BlcnNpc3RcIjtcblxuZXhwb3J0IHR5cGUgQXNzZXRFbnRyeSA9IHtcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogU2FtZS1vcmlnaW4vZGF0YSBVUkwgc2FmZSBmb3IgY2FudmFzICh0aHVtYnMsIGV4cG9ydCkuICovXG4gIHBhaW50U3JjPzogc3RyaW5nO1xufTtcblxuY29uc3QgZW50cmllcyA9IG5ldyBNYXA8c3RyaW5nLCBBc3NldEVudHJ5PigpO1xuY29uc3QgaW5mbGlnaHQgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxBc3NldEVudHJ5Pj4oKTtcbmNvbnN0IGltYWdlcyA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+PigpO1xuY29uc3QgcGFpbnRJbmZsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEFzc2V0RW50cnk+PigpO1xuY29uc3QgbGlzdGVuZXJzID0gbmV3IFNldDwoKSA9PiB2b2lkPigpO1xuXG5mdW5jdGlvbiBub3RpZnkoKTogdm9pZCB7XG4gIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc10pIGxpc3RlbmVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWVkQXNzZXQoaWQ6IHN0cmluZywgZW50cnk6IEFzc2V0RW50cnkpOiB2b2lkIHtcbiAgY29uc3QgcHJldiA9IGVudHJpZXMuZ2V0KGlkKTtcbiAgZW50cmllcy5zZXQoaWQsIHtcbiAgICBzcmM6IGVudHJ5LnNyYyxcbiAgICB3aWR0aDogZW50cnkud2lkdGgsXG4gICAgaGVpZ2h0OiBlbnRyeS5oZWlnaHQsXG4gICAgcGFpbnRTcmM6IGVudHJ5LnBhaW50U3JjID8/IHByZXY/LnBhaW50U3JjXG4gIH0pO1xuICBpbWFnZXMuZGVsZXRlKGlkKTtcbiAgbm90aWZ5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldEVudHJ5KGlkOiBzdHJpbmcpOiBBc3NldEVudHJ5IHwgbnVsbCB7XG4gIHJldHVybiBlbnRyaWVzLmdldChpZCkgPz8gZW50cmllcy5nZXQocmVzb2x2ZUFzc2V0SWQoaWQpKSA/PyBudWxsO1xufVxuXG4vKiogUHJlZmVyIGEgbG9jYWwgZGF0YSBVUkwgc28gZGlzcGxheSBkb2Vzbid0IGZsYXNoIHdoZW4gYSByZW1vdGUgVVJMIGFycml2ZXMgbGF0ZXIuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVNyYyhlbnRyeTogQXNzZXRFbnRyeSk6IHN0cmluZyB7XG4gIGlmIChlbnRyeS5wYWludFNyYz8uc3RhcnRzV2l0aChcImRhdGE6XCIpKSByZXR1cm4gZW50cnkucGFpbnRTcmM7XG4gIGlmIChlbnRyeS5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSByZXR1cm4gZW50cnkuc3JjO1xuICByZXR1cm4gZW50cnkucGFpbnRTcmMgfHwgZW50cnkuc3JjO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQXNzZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8QXNzZXRFbnRyeT4ge1xuICBjb25zdCBleGlzdGluZyA9IGdldEFzc2V0RW50cnkoaWQpO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhpc3RpbmcpO1xuICBjb25zdCBwZW5kaW5nID0gaW5mbGlnaHQuZ2V0KGlkKTtcbiAgaWYgKHBlbmRpbmcpIHJldHVybiBwZW5kaW5nO1xuXG4gIGNvbnN0IHByb21pc2UgPSBhcGlcbiAgICAuZ2V0QXNzZXQocmVzb2x2ZUFzc2V0SWQoaWQpKVxuICAgIC50aGVuKChwYXlsb2FkKSA9PiB7XG4gICAgICBjb25zdCBwcmV2ID0gZW50cmllcy5nZXQoaWQpO1xuICAgICAgY29uc3QgZW50cnk6IEFzc2V0RW50cnkgPSB7XG4gICAgICAgIHNyYzogcGF5bG9hZC5zcmMsXG4gICAgICAgIHdpZHRoOiBwYXlsb2FkLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHBheWxvYWQuaGVpZ2h0LFxuICAgICAgICBwYWludFNyYzogcHJldj8ucGFpbnRTcmNcbiAgICAgIH07XG4gICAgICBlbnRyaWVzLnNldChpZCwgZW50cnkpO1xuICAgICAgbm90aWZ5KCk7XG4gICAgICByZXR1cm4gZW50cnk7XG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICBpbmZsaWdodC5kZWxldGUoaWQpO1xuICAgIH0pO1xuICBpbmZsaWdodC5zZXQoaWQsIHByb21pc2UpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcGFpbnRVcmwoZW50cnk6IEFzc2V0RW50cnkpOiBzdHJpbmcge1xuICByZXR1cm4gZW50cnkucGFpbnRTcmMgfHwgZW50cnkuc3JjO1xufVxuXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVQYWludEFzc2V0KGlkOiBzdHJpbmcpOiBQcm9taXNlPEFzc2V0RW50cnk+IHtcbiAgY29uc3QgZW50cnkgPSBhd2FpdCBlbnN1cmVBc3NldChpZCk7XG4gIGlmIChlbnRyeS5wYWludFNyYyB8fCBlbnRyeS5zcmMuc3RhcnRzV2l0aChcImRhdGE6XCIpKSByZXR1cm4gZW50cnk7XG4gIGNvbnN0IGV4aXN0aW5nID0gcGFpbnRJbmZsaWdodC5nZXQoaWQpO1xuICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgY29uc3QgcHJvbWlzZSA9IGFwaS5nZXRBc3NldFBhaW50KHJlc29sdmVBc3NldElkKGlkKSkudGhlbigocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRBc3NldEVudHJ5KGlkKSA/PyBlbnRyeTtcbiAgICBjb25zdCBuZXh0ID0geyAuLi5jdXJyZW50LCBwYWludFNyYzogcGF5bG9hZC5zcmMgfTtcbiAgICBlbnRyaWVzLnNldChpZCwgbmV4dCk7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlQXNzZXRJZChpZCk7XG4gICAgaWYgKHJlc29sdmVkICE9PSBpZCkgZW50cmllcy5zZXQocmVzb2x2ZWQsIG5leHQpO1xuICAgIG5vdGlmeSgpO1xuICAgIHJldHVybiBuZXh0O1xuICB9KS5maW5hbGx5KCgpID0+IHBhaW50SW5mbGlnaHQuZGVsZXRlKGlkKSk7XG4gIHBhaW50SW5mbGlnaHQuc2V0KGlkLCBwcm9taXNlKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8qKiBEZWNvZGVkIGltYWdlIGVsZW1lbnQgZm9yIGNhbnZhcyByZW5kZXJpbmcgKGV4cG9ydCwgdGh1bWJuYWlscykuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKGlkOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgY29uc3QgY2FjaGVkID0gaW1hZ2VzLmdldChpZCk7XG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gIGNvbnN0IHByb21pc2UgPSBlbnN1cmVQYWludEFzc2V0KGlkKS50aGVuKFxuICAgIChlbnRyeSkgPT5cbiAgICAgIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gcGFpbnRVcmwoZW50cnkpO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgLy8gUmVtb3RlIFVSTHMgbmVlZCBDT1JTIGZvciBjYW52YXM7IGRhdGEgVVJMcyBkbyBub3QuXG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xuICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlY29kZSBpbWFnZVwiKSk7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICB9KVxuICApO1xuICBpbWFnZXMuc2V0KGlkLCBwcm9taXNlKTtcbiAgcHJvbWlzZS5jYXRjaCgoKSA9PiBpbWFnZXMuZGVsZXRlKGlkKSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG4vKiogRGVjb2RlIGEgZGF0YSBVUkwgLyBpbWFnZSBVUkwgc28gc3dhcHBpbmcgYW4gPGltZz4gc3JjIHdvbid0IGJsYW5rIGEgZnJhbWUuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3JjKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gc3JjO1xuICBpZiAodHlwZW9mIGltZy5kZWNvZGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBpbWcuZGVjb2RlKCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIGlmIChpbWcuY29tcGxldGUpIHJlc29sdmUoKTtcbiAgfSk7XG59XG5cbi8qKiBDb21wb25lbnQgaG9vazogcmV0dXJucyB0aGUgYXNzZXQgb25jZSBhdmFpbGFibGUsIGtpY2tpbmcgb2ZmIGEgZmV0Y2guICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQXNzZXRFbnRyeShpZDogc3RyaW5nKTogQXNzZXRFbnRyeSB8IG51bGwge1xuICBjb25zdCBbLCBzZXRWZXJzaW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiBzZXRWZXJzaW9uKCh2YWx1ZSkgPT4gdmFsdWUgKyAxKTtcbiAgICBjaGVjaygpO1xuICAgIGxpc3RlbmVycy5hZGQoY2hlY2spO1xuICAgIGVuc3VyZUFzc2V0KGlkKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJBc3NldCBsb2FkIGZhaWxlZDpcIiwgZXJyb3IpKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGlzdGVuZXJzLmRlbGV0ZShjaGVjayk7XG4gICAgfTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIGdldEFzc2V0RW50cnkoaWQpO1xufVxuIiwgIi8vIEZsYXR0ZW4gYSBkb2N1bWVudCB0byBhIGNhbnZhczogdXNlZCBmb3IgUE5HIGV4cG9ydCBhbmQgcHJvamVjdCB0aHVtYm5haWxzLlxuXG5pbXBvcnQgdHlwZSB7IFByb2plY3REb2MgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBlbnN1cmVBc3NldCwgbG9hZEltYWdlIH0gZnJvbSBcIi4uL3N0YXRlL2Fzc2V0c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyRG9jVG9DYW52YXMoZG9jOiBQcm9qZWN0RG9jLCBzY2FsZTogbnVtYmVyKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGRvYy53aWR0aCAqIHNjYWxlKSk7XG4gIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGRvYy5oZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuXG4gIGNvbnN0IHZpc2libGUgPSBkb2MubGF5ZXJzLmZpbHRlcigobGF5ZXIpID0+IGxheWVyLnZpc2libGUgJiYgbGF5ZXIub3BhY2l0eSA+IDApO1xuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICB2aXNpYmxlLm1hcCgobGF5ZXIpID0+IGxvYWRJbWFnZShsYXllci5hc3NldElkKS5jYXRjaCgoKSA9PiBudWxsKSlcbiAgKTtcblxuICBjdHguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gXCJoaWdoXCI7XG4gIHZpc2libGUuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcbiAgICBjb25zdCBpbWcgPSBpbWFnZXNbaV07XG4gICAgaWYgKCFpbWcpIHJldHVybjtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyLm9wYWNpdHk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxheWVyLmJsZW5kTW9kZSBhcyBHbG9iYWxDb21wb3NpdGVPcGVyYXRpb247XG4gICAgY3R4LnRyYW5zbGF0ZSgobGF5ZXIueCArIGxheWVyLncgLyAyKSAqIHNjYWxlLCAobGF5ZXIueSArIGxheWVyLmggLyAyKSAqIHNjYWxlKTtcbiAgICBjdHgucm90YXRlKChsYXllci5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcbiAgICBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAoLWxheWVyLncgLyAyKSAqIHNjYWxlLCAoLWxheWVyLmggLyAyKSAqIHNjYWxlLCBsYXllci53ICogc2NhbGUsIGxheWVyLmggKiBzY2FsZSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFBuZyhkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCAxKTtcbiAgY29uc3QgdXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSBgJHtkb2MubmFtZSB8fCBcImltYWdlXCJ9LnBuZ2A7XG4gIGxpbmsuY2xpY2soKTtcbn1cblxuY29uc3QgVEhVTUJfTUFYID0gMzYwO1xuXG5hc3luYyBmdW5jdGlvbiBmaXJzdExheWVyU3JjKGRvYzogUHJvamVjdERvYyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoIWxheWVyLnZpc2libGUgfHwgbGF5ZXIub3BhY2l0eSA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGVuc3VyZUFzc2V0KGxheWVyLmFzc2V0SWQpLmNhdGNoKCgpID0+IG51bGwpO1xuICAgIGlmIChlbnRyeT8uc3JjKSByZXR1cm4gZW50cnkuc3JjO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGh1bWIoZG9jOiBQcm9qZWN0RG9jKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdmlzaWJsZSA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSAmJiBsYXllci5vcGFjaXR5ID4gMCk7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgVEhVTUJfTUFYIC8gTWF0aC5tYXgoZG9jLndpZHRoLCBkb2MuaGVpZ2h0KSk7XG5cbiAgaWYgKHZpc2libGUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgdmlzaWJsZS5tYXAoKGxheWVyKSA9PiBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCkudGhlbigoKSA9PiB0cnVlKS5jYXRjaCgoKSA9PiBmYWxzZSkpXG4gICAgKTtcbiAgICBpZiAobG9hZGVkLmV2ZXJ5KChvaykgPT4gIW9rKSkge1xuICAgICAgY29uc3QgZmFsbGJhY2sgPSBhd2FpdCBmaXJzdExheWVyU3JjKGRvYyk7XG4gICAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZW5kZXIgdGh1bWJuYWlsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCBzY2FsZSk7XG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuODUpO1xuICB9IGNhdGNoIHtcbiAgICBjb25zdCBmYWxsYmFjayA9IGF3YWl0IGZpcnN0TGF5ZXJTcmMoZG9jKTtcbiAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVuZGVyIHRodW1ibmFpbFwiKTtcbiAgfVxufVxuIiwgIi8vIENvb3JkaW5hdGVzIGNsZWFyaW5nIHRoZSBsaXZlIGJydXNoIG92ZXJsYXkgb25seSBhZnRlciB0aGUgY29tbWl0dGVkIGxheWVyXG4vLyBiaXRtYXAgaXMgb24gc2NyZWVuIFx1MjAxNCBhbmQgbmV2ZXIgd2hpbGUgdGhlIHVzZXIgaXMgbWlkLXN0cm9rZS5cblxubGV0IGNsZWFyT3ZlcmxheTogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5sZXQgcGVuZGluZ1NyYzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5sZXQgZ2VzdHVyZUFjdGl2ZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJCcnVzaE92ZXJsYXlDbGVhcihmbjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICBjbGVhck92ZXJsYXkgPSBmbjtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoY2xlYXJPdmVybGF5ID09PSBmbikgY2xlYXJPdmVybGF5ID0gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFybUJydXNoT3ZlcmxheUNsZWFyKHNyYzogc3RyaW5nKTogdm9pZCB7XG4gIHBlbmRpbmdTcmMgPSBzcmM7XG59XG5cbi8qKiBTdGFydCBhIGxpdmUgc3Ryb2tlOiBjYW5jZWwgYW55IGRlZmVycmVkIGNsZWFyIGFuZCB3aXBlIHRoZSBvdmVybGF5IGZpcnN0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlZ2luQnJ1c2hHZXN0dXJlKCk6IHZvaWQge1xuICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgZ2VzdHVyZUFjdGl2ZSA9IHRydWU7XG4gIGNsZWFyT3ZlcmxheT8uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRCcnVzaEdlc3R1cmUoKTogdm9pZCB7XG4gIGdlc3R1cmVBY3RpdmUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHJ5Q2xlYXJPdmVybGF5KCk6IHZvaWQge1xuICAvLyBOZXZlciB3aXBlIHRoZSBjYW52YXMgd2hpbGUgdGhlIHVzZXIgaXMgZHJhd2luZyBcdTIwMTQgdGhhdCBkcm9wcyB0aGUgc3RhcnQgb2ZcbiAgLy8gdGhlIG5ldyBzdHJva2Ugd2hlbiBhIHByZXZpb3VzIGNvbW1pdCBmaW5hbGx5IGxhbmRzIG9uIHRoZSBsYXllci5cbiAgaWYgKGdlc3R1cmVBY3RpdmUpIHtcbiAgICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYXJPdmVybGF5Py4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVMYXllclNyY1ByZXNlbnRlZChzcmM6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoIXBlbmRpbmdTcmMgfHwgc3JjICE9PSBwZW5kaW5nU3JjKSByZXR1cm47XG4gIHBlbmRpbmdTcmMgPSBudWxsO1xuICB0cnlDbGVhck92ZXJsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnJ1c2hPdmVybGF5Tm93KCk6IHZvaWQge1xuICBwZW5kaW5nU3JjID0gbnVsbDtcbiAgdHJ5Q2xlYXJPdmVybGF5KCk7XG59XG4iLCAiLy8gQ29tbWFuZC1iYXNlZCB1bmRvL3JlZG8uIEVhY2ggZW50cnkgb3ducyBjbG9zdXJlcyB0aGF0IHJlLWFwcGx5IG9yIHJldmVydCBhXG4vLyBjaGFuZ2UgdGhyb3VnaCB0aGUgc2FtZSBhY3Rpb24gcGF0aHMgdGhhdCBtYWRlIGl0LCBzbyB1bmRvL3JlZG8gYWxzb1xuLy8gcGVyc2lzdHMgKGFuZCBzdGF5cyBvcHRpbWlzdGljKSBsaWtlIGFueSBvdGhlciBlZGl0LlxuXG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgdHlwZSBIaXN0b3J5RW50cnkgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHVuZG86ICgpID0+IHZvaWQ7XG4gIHJlZG86ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBMSU1JVCA9IDEwMDtcblxubGV0IHVuZG9TdGFjazogSGlzdG9yeUVudHJ5W10gPSBbXTtcbmxldCByZWRvU3RhY2s6IEhpc3RvcnlFbnRyeVtdID0gW107XG5cbmZ1bmN0aW9uIGJ1bXAoKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgaGlzdFZlcnNpb246IGdldFN0YXRlKCkuaGlzdFZlcnNpb24gKyAxIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaEhpc3RvcnkoZW50cnk6IEhpc3RvcnlFbnRyeSk6IHZvaWQge1xuICB1bmRvU3RhY2sucHVzaChlbnRyeSk7XG4gIGlmICh1bmRvU3RhY2subGVuZ3RoID4gTElNSVQpIHVuZG9TdGFjay5zaGlmdCgpO1xuICByZWRvU3RhY2sgPSBbXTtcbiAgYnVtcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRIaXN0b3J5KCk6IHZvaWQge1xuICB1bmRvU3RhY2sgPSBbXTtcbiAgcmVkb1N0YWNrID0gW107XG4gIGJ1bXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhblVuZG8oKTogYm9vbGVhbiB7XG4gIHJldHVybiB1bmRvU3RhY2subGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhblJlZG8oKTogYm9vbGVhbiB7XG4gIHJldHVybiByZWRvU3RhY2subGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZG8oKTogdm9pZCB7XG4gIGNvbnN0IGVudHJ5ID0gdW5kb1N0YWNrLnBvcCgpO1xuICBpZiAoIWVudHJ5KSByZXR1cm47XG4gIGVudHJ5LnVuZG8oKTtcbiAgcmVkb1N0YWNrLnB1c2goZW50cnkpO1xuICBidW1wKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRvKCk6IHZvaWQge1xuICBjb25zdCBlbnRyeSA9IHJlZG9TdGFjay5wb3AoKTtcbiAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICBlbnRyeS5yZWRvKCk7XG4gIHVuZG9TdGFjay5wdXNoKGVudHJ5KTtcbiAgYnVtcCgpO1xufVxuIiwgIi8vIEV2ZXJ5IGVkaXQgZmxvd3MgdGhyb3VnaCBoZXJlOiBhcHBseSB0byB0aGUgbG9jYWwgZG9jIHN5bmNocm9ub3VzbHkgKGluc3RhbnRcbi8vIFVJKSwgcmVjb3JkIGFuIHVuZG8vcmVkbyBlbnRyeSwgYW5kIGVucXVldWUgYmFja2dyb3VuZCBwZXJzaXN0ZW5jZS4gR2VzdHVyZXNcbi8vIHVzZSB0aGUgdHJhbnNpZW50IHBhdGggYXQgcG9pbnRlci1tb3ZlIHJhdGUgYW5kIGNvbW1pdCBvbmNlIG9uIHJlbGVhc2UuXG5cbmltcG9ydCB7XG4gIHR5cGUgQmxlbmRNb2RlLFxuICBkZWNvZGVUcmFuc2Zvcm0sXG4gIGVuY29kZVRyYW5zZm9ybSxcbiAgTUFYX1BST0pFQ1RfRElNLFxuICB0eXBlIExheWVyLFxuICB0eXBlIFRleHRMYXllckRhdGEsXG4gIHR5cGUgTGF5ZXJSb3csXG4gIHR5cGUgTGF5ZXJUcmFuc2Zvcm0sXG4gIHR5cGUgUHJvamVjdERvYyxcbiAgdHlwZSBQcm9qZWN0TWV0YVxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBsYXllckFhYmIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgeyByZW5kZXJUaHVtYiB9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XG5pbXBvcnQgeyBnZXRBc3NldEVudHJ5LCBsb2FkSW1hZ2UsIHNlZWRBc3NldCwgZGVjb2RlU3JjIH0gZnJvbSBcIi4vYXNzZXRzXCI7XG5pbXBvcnQgeyBhcm1CcnVzaE92ZXJsYXlDbGVhciwgY2xlYXJCcnVzaE92ZXJsYXlOb3cgfSBmcm9tIFwiLi9icnVzaE92ZXJsYXlcIjtcbmltcG9ydCB7IHB1c2hIaXN0b3J5LCByZXNldEhpc3RvcnkgfSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBlbnF1ZXVlLCBuZXdDbGllbnRJZCB9IGZyb20gXCIuL3BlcnNpc3RcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXBkYXRlRG9jIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgSW1wb3J0ZWRJbWFnZSA9IHsgc3JjOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybVBhdGNoID0gUGFydGlhbDxMYXllclRyYW5zZm9ybT47XG5cbmNvbnN0IFRSQU5TSUVOVF9QRVJTSVNUX01TID0gMzAwO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFByb2plY3QgbGlmZWN5Y2xlXG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuUHJvamVjdChtZXRhOiBQcm9qZWN0TWV0YSwgcm93czogTGF5ZXJSb3dbXSk6IHZvaWQge1xuICBjb25zdCBieUlkID0gbmV3IE1hcChyb3dzLm1hcCgocm93KSA9PiBbcm93LmlkLCByb3ddKSk7XG4gIGNvbnN0IGxheWVyczogTGF5ZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKHJvdzogTGF5ZXJSb3cpID0+IHtcbiAgICBsYXllcnMucHVzaCh7XG4gICAgICBpZDogcm93LmlkLFxuICAgICAgYXNzZXRJZDogcm93LmFzc2V0SWQsXG4gICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgIC4uLmRlY29kZVRyYW5zZm9ybShyb3cuZGF0YSlcbiAgICB9KTtcbiAgfTtcbiAgZm9yIChjb25zdCBpZCBvZiBtZXRhLmxheWVyT3JkZXIpIHtcbiAgICBjb25zdCByb3cgPSBieUlkLmdldChpZCk7XG4gICAgaWYgKHJvdykge1xuICAgICAgcHVzaChyb3cpO1xuICAgICAgYnlJZC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHJvdyBvZiBieUlkLnZhbHVlcygpKSBwdXNoKHJvdyk7XG5cbiAgc2V0U3RhdGUoe1xuICAgIGRvYzogeyBpZDogbWV0YS5pZCwgbmFtZTogbWV0YS5uYW1lLCB3aWR0aDogbWV0YS53aWR0aCwgaGVpZ2h0OiBtZXRhLmhlaWdodCwgbGF5ZXJzIH0sXG4gICAgc2VsZWN0aW9uOiBbXSxcbiAgICBzYXZlRXJyb3I6IG51bGxcbiAgfSk7XG4gIHJlc2V0SGlzdG9yeSgpO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQcm9qZWN0KCk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IGRvYzogbnVsbCwgc2VsZWN0aW9uOiBbXSwgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsLCBzbmFwR3VpZGVzOiBudWxsLCBibGVuZFByZXZpZXc6IG51bGwsIHRleHRFZGl0aW5nOiBudWxsIH0pO1xuICByZXNldEhpc3RvcnkoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWxlY3Rpb25cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbihpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgc2VsZWN0aW9uOiBpZHMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTZWxlY3RlZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgc2V0U2VsZWN0aW9uKGN1cnJlbnQuaW5jbHVkZXMoaWQpID8gY3VycmVudC5maWx0ZXIoKHMpID0+IHMgIT09IGlkKSA6IFsuLi5jdXJyZW50LCBpZF0pO1xufVxuXG5mdW5jdGlvbiBwcnVuZVNlbGVjdGlvbihyZW1vdmVkOiBTZXQ8c3RyaW5nPik6IHZvaWQge1xuICBzZXRTdGF0ZSh7IHNlbGVjdGlvbjogZ2V0U3RhdGUoKS5zZWxlY3Rpb24uZmlsdGVyKChpZCkgPT4gIXJlbW92ZWQuaGFzKGlkKSkgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHJhbnNmb3JtIGVkaXRzXG5cbmZ1bmN0aW9uIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChsYXllcikgPT4ge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzLmdldChsYXllci5pZCk7XG4gICAgICByZXR1cm4gcGF0Y2ggPyB7IC4uLmxheWVyLCAuLi5wYXRjaCB9IDogbGF5ZXI7XG4gICAgfSlcbiAgfSkpO1xufVxuXG5jb25zdCB0cmFuc2llbnRUaW1lcnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5mdW5jdGlvbiBwZXJzaXN0TGF5ZXJOb3coaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB0aW1lciA9IHRyYW5zaWVudFRpbWVycy5nZXQoaWQpO1xuICBpZiAodGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gIH1cbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGlkKTtcbiAgaWYgKCFsYXllcikgcmV0dXJuO1xuICBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSB9KTtcbn1cblxuZnVuY3Rpb24gcGVyc2lzdExheWVyVGhyb3R0bGVkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKHRyYW5zaWVudFRpbWVycy5oYXMoaWQpKSByZXR1cm47XG4gIHRyYW5zaWVudFRpbWVycy5zZXQoXG4gICAgaWQsXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gICAgICBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIH0sIFRSQU5TSUVOVF9QRVJTSVNUX01TKVxuICApO1xufVxuXG4vKiogSGlnaC1mcmVxdWVuY3kgZ2VzdHVyZSB1cGRhdGVzOiBsb2NhbCBhcHBseSArIHRocm90dGxlZCBwZXJzaXN0LCBubyBoaXN0b3J5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHJhbnNpZW50KHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXMpO1xuICBmb3IgKGNvbnN0IGlkIG9mIHBhdGNoZXMua2V5cygpKSBwZXJzaXN0TGF5ZXJUaHJvdHRsZWQoaWQpO1xufVxuXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UgPSB7IGlkOiBzdHJpbmc7IGJlZm9yZTogVHJhbnNmb3JtUGF0Y2g7IGFmdGVyOiBUcmFuc2Zvcm1QYXRjaCB9O1xuXG5mdW5jdGlvbiBhcHBseUFuZFBlcnNpc3QoZW50cmllczogQXJyYXk8eyBpZDogc3RyaW5nOyBwYXRjaDogVHJhbnNmb3JtUGF0Y2ggfT4pOiB2b2lkIHtcbiAgcGF0Y2hEb2NMYXllcnMobmV3IE1hcChlbnRyaWVzLm1hcCgoZSkgPT4gW2UuaWQsIGUucGF0Y2hdKSkpO1xuICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBlbnRyaWVzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG4vKiogRmluYWxpemUgYW4gZWRpdDogYXBwbHkgdGhlIGVuZCBzdGF0ZSwgcGVyc2lzdCBub3csIGFuZCByZWNvcmQgaGlzdG9yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRUcmFuc2Zvcm1zKGxhYmVsOiBzdHJpbmcsIGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdKTogdm9pZCB7XG4gIGNvbnN0IHJlYWwgPSBjaGFuZ2VzLmZpbHRlcigoYykgPT4gIXNoYWxsb3dFcXVhbFBhdGNoKGMuYmVmb3JlLCBjLmFmdGVyKSk7XG4gIGlmIChyZWFsLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgYWN0dWFsbHkgY2hhbmdlZCAoZS5nLiBhIGNsaWNrIHdpdGhvdXQgYSBkcmFnKTsgc3RpbGwgZmx1c2ggYW55XG4gICAgLy8gdGhyb3R0bGVkIHRyYW5zaWVudCB3cml0ZXMgc28gbG9jYWwgYW5kIHNlcnZlciBzdGF0ZSBtYXRjaC5cbiAgICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBjaGFuZ2VzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBhcHBseUFuZFBlcnNpc3QocmVhbC5tYXAoKGMpID0+ICh7IGlkOiBjLmlkLCBwYXRjaDogYy5hZnRlciB9KSkpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWwsXG4gICAgdW5kbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYmVmb3JlIH0pKSksXG4gICAgcmVkbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYWZ0ZXIgfSkpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsUGF0Y2goYTogVHJhbnNmb3JtUGF0Y2gsIGI6IFRyYW5zZm9ybVBhdGNoKTogYm9vbGVhbiB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhhKSwgLi4uT2JqZWN0LmtleXMoYildIGFzIEFycmF5PGtleW9mIExheWVyVHJhbnNmb3JtPik7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoIU9iamVjdC5pcyhhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51ZGdlU2VsZWN0aW9uKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBjaGFuZ2VzOiBUcmFuc2Zvcm1DaGFuZ2VbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBiZWZvcmU6IHsgeDogbGF5ZXIueCwgeTogbGF5ZXIueSB9LFxuICAgICAgICBhZnRlcjogeyB4OiBsYXllci54ICsgZHgsIHk6IGxheWVyLnkgKyBkeSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29tbWl0VHJhbnNmb3JtcyhcIk51ZGdlXCIsIGNoYW5nZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29tbWl0VHJhbnNmb3JtcyhsYXllci52aXNpYmxlID8gXCJIaWRlIGxheWVyXCIgOiBcIlNob3cgbGF5ZXJcIiwgW1xuICAgIHsgaWQsIGJlZm9yZTogeyB2aXNpYmxlOiBsYXllci52aXNpYmxlIH0sIGFmdGVyOiB7IHZpc2libGU6ICFsYXllci52aXNpYmxlIH0gfVxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBTZWxlY3Rpb25Ib3Jpem9udGFsKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb21taXRUcmFuc2Zvcm1zKFwiRmxpcCBob3Jpem9udGFsXCIsIGRvYy5sYXllcnNcbiAgICAuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSlcbiAgICAubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCBiZWZvcmU6IHsgZmxpcFg6IGxheWVyLmZsaXBYIH0sIGFmdGVyOiB7IGZsaXBYOiAhbGF5ZXIuZmxpcFggfSB9KSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0aW9uQmxlbmRNb2RlKGJsZW5kTW9kZTogQmxlbmRNb2RlKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbW1pdFRyYW5zZm9ybXMoXCJCbGVuZCBtb2RlXCIsIGRvYy5sYXllcnNcbiAgICAuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSlcbiAgICAubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCBiZWZvcmU6IHsgYmxlbmRNb2RlOiBsYXllci5ibGVuZE1vZGUgfSwgYWZ0ZXI6IHsgYmxlbmRNb2RlIH0gfSkpKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdHJ1Y3R1cmFsIGVkaXRzIChhZGQgLyBkZWxldGUgLyBkdXBsaWNhdGUgLyByZW9yZGVyKVxuXG50eXBlIFBsYWNlZExheWVyID0geyBsYXllcjogTGF5ZXI7IGluZGV4OiBudW1iZXIgfTtcblxuLyoqIEluc2VydCBsYXllcnMgYW5kIGVucXVldWUgdGhlaXIgY3JlYXRpb24uIE5vIGhpc3RvcnkgXHUyMDE0IGNhbGxlcnMgcmVjb3JkIGl0LiAqL1xuZnVuY3Rpb24gcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zOiBQbGFjZWRMYXllcltdKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgY29uc3QgbGF5ZXJzID0gWy4uLmRvYy5sYXllcnNdO1xuICBmb3IgKGNvbnN0IHsgbGF5ZXIsIGluZGV4IH0gb2Ygc29ydGVkKSB7XG4gICAgbGF5ZXJzLnNwbGljZShNYXRoLm1pbihpbmRleCwgbGF5ZXJzLmxlbmd0aCksIDAsIGxheWVyKTtcbiAgfVxuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVycyB9KSk7XG5cbiAgbGV0IG5lZWRzT3JkZXIgPSBmYWxzZTtcbiAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkge1xuICAgIGVucXVldWUoe1xuICAgICAga2luZDogXCJhZGRMYXllclwiLFxuICAgICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgICAvLyBGcmVzaCBrZXkgcGVyIGF0dGVtcHQ6IGEgcmVkbyBvZiB0aGUgc2FtZSBsYXllciBpcyBhIG5ldyBpbnNlcnQuXG4gICAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgICBhc3NldDogeyByZWY6IGxheWVyLmFzc2V0SWQgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCA8IGxheWVycy5sZW5ndGggLSAxKSBuZWVkc09yZGVyID0gdHJ1ZTtcbiAgfVxuICAvLyBUaGUgc2VydmVyIGFwcGVuZHMgbmV3IGxheWVyczsgcmVzdG9yZSBtaWQtc3RhY2sgcG9zaXRpb25zIGV4cGxpY2l0bHkuXG4gIGlmIChuZWVkc09yZGVyKSB7XG4gICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogbGF5ZXJzLm1hcCgobCkgPT4gbC5pZCkgfSk7XG4gIH1cbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZnVuY3Rpb24gcmF3RGVsZXRlTGF5ZXJzKGlkczogc3RyaW5nW10pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbnN0IHJlbW92ZWQgPSBuZXcgU2V0KGlkcyk7XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBkLmxheWVycy5maWx0ZXIoKGwpID0+ICFyZW1vdmVkLmhhcyhsLmlkKSkgfSkpO1xuICBwcnVuZVNlbGVjdGlvbihyZW1vdmVkKTtcbiAgZm9yIChjb25zdCBpZCBvZiBpZHMpIGVucXVldWUoeyBraW5kOiBcImRlbGV0ZUxheWVyXCIsIGlkIH0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlUGxhY2VtZW50KGRvYzogUHJvamVjdERvYywgaWRzOiBzdHJpbmdbXSk6IFBsYWNlZExheWVyW10ge1xuICBjb25zdCBpdGVtczogUGxhY2VkTGF5ZXJbXSA9IFtdO1xuICBkb2MubGF5ZXJzLmZvckVhY2goKGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChpZHMuaW5jbHVkZXMobGF5ZXIuaWQpKSBpdGVtcy5wdXNoKHsgbGF5ZXIsIGluZGV4IH0pO1xuICB9KTtcbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYyB8fCBzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gY2FwdHVyZVBsYWNlbWVudChkb2MsIHNlbGVjdGlvbik7XG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpKSA9PiBpLmxheWVyLmlkKTtcbiAgcmF3RGVsZXRlTGF5ZXJzKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJEZWxldGUgbGF5ZXJcIixcbiAgICB1bmRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICAgICAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gICAgfSxcbiAgICByZWRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBzb3VyY2UgPSBjYXB0dXJlUGxhY2VtZW50KGRvYywgc2VsZWN0aW9uKTtcbiAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBzb3VyY2UubWFwKCh7IGxheWVyIH0sIGkpID0+ICh7XG4gICAgbGF5ZXI6IHtcbiAgICAgIC4uLmxheWVyLFxuICAgICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksXG4gICAgICBuYW1lOiBgJHtsYXllci5uYW1lfSBjb3B5YCxcbiAgICAgIHg6IGxheWVyLnggKyAyMCxcbiAgICAgIHk6IGxheWVyLnkgKyAyMFxuICAgIH0sXG4gICAgLy8gUGxhY2UgZHVwbGljYXRlcyB0b2dldGhlciBhYm92ZSB0aGUgdG9wbW9zdCBzb3VyY2UgbGF5ZXIuXG4gICAgaW5kZXg6IHNvdXJjZVtzb3VyY2UubGVuZ3RoIC0gMV0uaW5kZXggKyAxICsgaVxuICB9KSk7XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiRHVwbGljYXRlXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcyksXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmxldCBjbGlwYm9hcmQ6IExheWVyW10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHlTZWxlY3Rpb24oKTogdm9pZCB7XG4gIGNvbnN0IHsgZG9jLCBzZWxlY3Rpb24gfSA9IGdldFN0YXRlKCk7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNsaXBib2FyZCA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSkubWFwKChsYXllcikgPT4gKHsgLi4ubGF5ZXIgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3V0U2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb3B5U2VsZWN0aW9uKCk7XG4gIGRlbGV0ZVNlbGVjdGlvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzdGVDbGlwYm9hcmQoKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBjbGlwYm9hcmQubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gY2xpcGJvYXJkLm1hcCgobGF5ZXIsIGkpID0+ICh7XG4gICAgbGF5ZXI6IHsgLi4ubGF5ZXIsIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLCBuYW1lOiBgJHtsYXllci5uYW1lfSBjb3B5YCwgeDogbGF5ZXIueCArIDIwLCB5OiBsYXllci55ICsgMjAgfSxcbiAgICBpbmRleDogZG9jLmxheWVycy5sZW5ndGggKyBpXG4gIH0pKTtcbiAgY2xpcGJvYXJkID0gaXRlbXMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLmxheWVyIH0pKTtcbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmxheWVyLmlkKTtcbiAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJQYXN0ZVwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhpZHMpLFxuICAgIHJlZG86ICgpID0+IHsgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTsgc2V0U2VsZWN0aW9uKGlkcyk7IH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbWFnZUxheWVycyhpbWFnZXM6IEltcG9ydGVkSW1hZ2VbXSwgYXQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jIHx8IGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4ge1xuICAgIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICAgIHNlZWRBc3NldChhc3NldElkLCB7XG4gICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodFxuICAgIH0pO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgKGRvYy53aWR0aCAqIDAuOSkgLyBpbWFnZS53aWR0aCwgKGRvYy5oZWlnaHQgKiAwLjkpIC8gaW1hZ2UuaGVpZ2h0KTtcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgoMSwgaW1hZ2Uud2lkdGggKiBzY2FsZSk7XG4gICAgY29uc3QgaCA9IE1hdGgubWF4KDEsIGltYWdlLmhlaWdodCAqIHNjYWxlKTtcbiAgICBjb25zdCBjeCA9IChhdD8ueCA/PyBkb2Mud2lkdGggLyAyKSArIGkgKiAyNDtcbiAgICBjb25zdCBjeSA9IChhdD8ueSA/PyBkb2MuaGVpZ2h0IC8gMikgKyBpICogMjQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheWVyOiB7XG4gICAgICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgICAgICBhc3NldElkLFxuICAgICAgICBuYW1lOiBpbWFnZS5uYW1lLFxuICAgICAgICB4OiBjeCAtIHcgLyAyLFxuICAgICAgICB5OiBjeSAtIGggLyAyLFxuICAgICAgICB3LFxuICAgICAgICBoLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgZmxpcFg6IGZhbHNlLFxuICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgICAgIH0sXG4gICAgICBpbmRleDogZG9jLmxheWVycy5sZW5ndGggKyBpXG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gTmV3IGFzc2V0cyByaWRlIGFsb25nIG9uIHRoZSBhZGRMYXllciBvcCBpdHNlbGYuXG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIGNvbnN0IGluc2VydCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5kb2M7XG4gICAgaWYgKCFjdXJyZW50KSByZXR1cm47XG4gICAgY29uc3Qgc29ydGVkID0gWy4uLml0ZW1zXS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG4gICAgY29uc3QgbGF5ZXJzID0gWy4uLmN1cnJlbnQubGF5ZXJzXTtcbiAgICBmb3IgKGNvbnN0IHsgbGF5ZXIsIGluZGV4IH0gb2Ygc29ydGVkKSBsYXllcnMuc3BsaWNlKE1hdGgubWluKGluZGV4LCBsYXllcnMubGVuZ3RoKSwgMCwgbGF5ZXIpO1xuICAgIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzIH0pKTtcbiAgICBmb3IgKGNvbnN0IHsgbGF5ZXIgfSBvZiBzb3J0ZWQpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzW2l0ZW1zLmZpbmRJbmRleCgoaXQpID0+IGl0LmxheWVyLmlkID09PSBsYXllci5pZCldO1xuICAgICAgZW5xdWV1ZSh7XG4gICAgICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICAgICAgcHJvamVjdElkOiBjdXJyZW50LmlkLFxuICAgICAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgICAgIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgICAgIG5hbWU6IGxheWVyLm5hbWUsXG4gICAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgICAgIGFzc2V0OiB7IGNsaWVudElkOiBsYXllci5hc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgfTtcbiAgaW5zZXJ0KCk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQWRkIGltYWdlXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcyksXG4gICAgLy8gUmVkbyByZS1pbnNlcnRzIGJ5IGFzc2V0IHJlZmVyZW5jZTogdGhlIGFzc2V0IGFscmVhZHkgZXhpc3RzIGJ5IHRoZW4uXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbnR5cGUgUmFzdGVyQm91bmRzID0geyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcblxuZnVuY3Rpb24gcmVwbGFjZUxheWVyc1dpdGhSYXN0ZXIoaWRzOiBzdHJpbmdbXSwgaW1hZ2U6IEltcG9ydGVkSW1hZ2UsIGJvdW5kczogUmFzdGVyQm91bmRzLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCBvbGRJdGVtcyA9IGNhcHR1cmVQbGFjZW1lbnQoZG9jLCBpZHMpO1xuICBpZiAob2xkSXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksIGFzc2V0SWQsIG5hbWU6IGltYWdlLm5hbWUsXG4gICAgLi4uYm91bmRzLCByb3RhdGlvbjogMCwgb3BhY2l0eTogMSwgdmlzaWJsZTogdHJ1ZSwgZmxpcFg6IGZhbHNlLCBibGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgfTtcbiAgY29uc3QgbmV3SXRlbSA9IHsgbGF5ZXIsIGluZGV4IH07XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuXG4gIHJhd0RlbGV0ZUxheWVycyhpZHMpO1xuICB1cGRhdGVEb2MoKGQpID0+IHtcbiAgICBjb25zdCBsYXllcnMgPSBbLi4uZC5sYXllcnNdO1xuICAgIGxheWVycy5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIGxheWVycy5sZW5ndGgpLCAwLCBsYXllcik7XG4gICAgcmV0dXJuIHsgLi4uZCwgbGF5ZXJzIH07XG4gIH0pO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBjbGllbnRJZDogbGF5ZXIuaWQsIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5tYXAoKGwpID0+IGwuaWQpID8/IFtdIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG5cbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBpbWFnZS5uYW1lLFxuICAgIHVuZG86ICgpID0+IHsgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pOyByYXdJbnNlcnRMYXllcnMob2xkSXRlbXMpOyBzZXRTZWxlY3Rpb24oaWRzKTsgfSxcbiAgICByZWRvOiAoKSA9PiB7IHJhd0RlbGV0ZUxheWVycyhpZHMpOyByYXdJbnNlcnRMYXllcnMoW25ld0l0ZW1dKTsgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pOyB9XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tYmluZVNlbGVjdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybjtcbiAgY29uc3QgbGF5ZXJzID0gZG9jLmxheWVycy5maWx0ZXIoKGxheWVyKSA9PiBzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpICYmIGxheWVyLnZpc2libGUpO1xuICBpZiAobGF5ZXJzLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgY29uc3QgYm94ZXMgPSBsYXllcnMubWFwKGxheWVyQWFiYik7XG4gIGNvbnN0IHggPSBNYXRoLm1pbiguLi5ib3hlcy5tYXAoKGIpID0+IGIueCkpO1xuICBjb25zdCB5ID0gTWF0aC5taW4oLi4uYm94ZXMubWFwKChiKSA9PiBiLnkpKTtcbiAgY29uc3QgcmlnaHQgPSBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueCArIGIudykpO1xuICBjb25zdCBib3R0b20gPSBNYXRoLm1heCguLi5ib3hlcy5tYXAoKGIpID0+IGIueSArIGIuaCkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChyaWdodCAtIHgpKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGJvdHRvbSAtIHkpKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTsgY2FudmFzLndpZHRoID0gd2lkdGg7IGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7IGlmICghY3R4KSByZXR1cm47XG4gIGxldCBpbWFnZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgdHJ5IHtcbiAgICBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChsYXllcnMubWFwKChsKSA9PiBsb2FkSW1hZ2UobC5hc3NldElkKSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQ291bGQgbm90IGxvYWQgaW1hZ2UgcGl4ZWxzXCI7XG4gICAgd2luZG93LmFsZXJ0KGBDb3VsZCBub3QgY29tYmluZSBsYXllcnM6ICR7bWVzc2FnZX1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGF5ZXJzLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XG4gICAgY29uc3QgaW1nID0gaW1hZ2VzW2ldO1xuICAgIGN0eC5zYXZlKCk7IGN0eC5nbG9iYWxBbHBoYSA9IGxheWVyLm9wYWNpdHk7IGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsYXllci5ibGVuZE1vZGUgYXMgR2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uO1xuICAgIGN0eC50cmFuc2xhdGUobGF5ZXIueCArIGxheWVyLncgLyAyIC0geCwgbGF5ZXIueSArIGxheWVyLmggLyAyIC0geSk7XG4gICAgY3R4LnJvdGF0ZShsYXllci5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApOyBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAtbGF5ZXIudyAvIDIsIC1sYXllci5oIC8gMiwgbGF5ZXIudywgbGF5ZXIuaCk7IGN0eC5yZXN0b3JlKCk7XG4gIH0pO1xuICBjb25zdCBpbmRleCA9IE1hdGgubWluKC4uLmRvYy5sYXllcnMubWFwKChsLCBpKSA9PiBzZWxlY3Rpb24uaW5jbHVkZXMobC5pZCkgPyBpIDogSW5maW5pdHkpKTtcbiAgcmVwbGFjZUxheWVyc1dpdGhSYXN0ZXIobGF5ZXJzLm1hcCgobCkgPT4gbC5pZCksIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aCwgaGVpZ2h0LCBuYW1lOiBcIkNvbWJpbmVkIGxheWVyc1wiIH0sIHsgeCwgeSwgdzogd2lkdGgsIGg6IGhlaWdodCB9LCBpbmRleCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcm9wU2VsZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uLCBjcm9wUmVjdCB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCAhPT0gMSB8fCAhY3JvcFJlY3QgfHwgY3JvcFJlY3QudyA8IDIgfHwgY3JvcFJlY3QuaCA8IDIpIHJldHVybjtcbiAgY29uc3QgbGF5ZXIgPSBkb2MubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IHNlbGVjdGlvblswXSk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29uc3QgYm91bmRzID0gbGF5ZXJBYWJiKGxheWVyKTtcbiAgY29uc3QgeCA9IE1hdGgubWF4KGNyb3BSZWN0LngsIGJvdW5kcy54KTtcbiAgY29uc3QgeSA9IE1hdGgubWF4KGNyb3BSZWN0LnksIGJvdW5kcy55KTtcbiAgY29uc3QgcmlnaHQgPSBNYXRoLm1pbihjcm9wUmVjdC54ICsgY3JvcFJlY3QudywgYm91bmRzLnggKyBib3VuZHMudyk7XG4gIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKGNyb3BSZWN0LnkgKyBjcm9wUmVjdC5oLCBib3VuZHMueSArIGJvdW5kcy5oKTtcbiAgaWYgKHJpZ2h0IC0geCA8IDIgfHwgYm90dG9tIC0geSA8IDIpIHtcbiAgICB3aW5kb3cuYWxlcnQoXCJEcmF3IHRoZSBjcm9wIGFyZWEgb3ZlciB0aGUgc2VsZWN0ZWQgbGF5ZXIuXCIpO1xuICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IG51bGwgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHJlY3QgPSB7IHgsIHksIHc6IHJpZ2h0IC0geCwgaDogYm90dG9tIC0geSB9O1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocmVjdC53KSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocmVjdC5oKSk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7IGNhbnZhcy53aWR0aCA9IHdpZHRoOyBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpOyBpZiAoIWN0eCkgcmV0dXJuO1xuICBsZXQgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB0cnkge1xuICAgIGltZyA9IGF3YWl0IGxvYWRJbWFnZShsYXllci5hc3NldElkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkNvdWxkIG5vdCBsb2FkIGltYWdlIHBpeGVsc1wiO1xuICAgIHdpbmRvdy5hbGVydChgQ291bGQgbm90IGNyb3AgbGF5ZXI6ICR7bWVzc2FnZX1gKTtcbiAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiBudWxsIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjdHguZ2xvYmFsQWxwaGEgPSBsYXllci5vcGFjaXR5O1xuICBjdHgudHJhbnNsYXRlKGxheWVyLnggKyBsYXllci53IC8gMiAtIHJlY3QueCwgbGF5ZXIueSArIGxheWVyLmggLyAyIC0gcmVjdC55KTtcbiAgY3R4LnJvdGF0ZShsYXllci5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApOyBjdHguc2NhbGUobGF5ZXIuZmxpcFggPyAtMSA6IDEsIDEpO1xuICBjdHguZHJhd0ltYWdlKGltZywgLWxheWVyLncgLyAyLCAtbGF5ZXIuaCAvIDIsIGxheWVyLncsIGxheWVyLmgpO1xuICBjb25zdCBpbmRleCA9IGRvYy5sYXllcnMuZmluZEluZGV4KChsKSA9PiBsLmlkID09PSBsYXllci5pZCk7XG4gIHJlcGxhY2VMYXllcnNXaXRoUmFzdGVyKFtsYXllci5pZF0sIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aCwgaGVpZ2h0LCBuYW1lOiBgJHtsYXllci5uYW1lfSBjcm9wcGVkYCB9LCByZWN0LCBpbmRleCk7XG4gIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIsIGNyb3BSZWN0OiBudWxsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JvcENhbnZhcygpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIGNyb3BSZWN0IH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYyB8fCAhY3JvcFJlY3QgfHwgY3JvcFJlY3QudyA8IDIgfHwgY3JvcFJlY3QuaCA8IDIpIHJldHVybjtcbiAgY29uc3QgeCA9IE1hdGgucm91bmQoY3JvcFJlY3QueCk7XG4gIGNvbnN0IHkgPSBNYXRoLnJvdW5kKGNyb3BSZWN0LnkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgubWluKE1BWF9QUk9KRUNUX0RJTSwgTWF0aC5yb3VuZChjcm9wUmVjdC53KSkpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLm1pbihNQVhfUFJPSkVDVF9ESU0sIE1hdGgucm91bmQoY3JvcFJlY3QuaCkpKTtcbiAgY29uc3QgYmVmb3JlID0ge1xuICAgIHdpZHRoOiBkb2Mud2lkdGgsXG4gICAgaGVpZ2h0OiBkb2MuaGVpZ2h0LFxuICAgIHBvc2l0aW9uczogZG9jLmxheWVycy5tYXAoKGxheWVyKSA9PiAoeyBpZDogbGF5ZXIuaWQsIHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSkpXG4gIH07XG4gIGNvbnN0IGFmdGVyID0ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBwb3NpdGlvbnM6IGJlZm9yZS5wb3NpdGlvbnMubWFwKChsYXllcikgPT4gKHsgaWQ6IGxheWVyLmlkLCB4OiBsYXllci54IC0geCwgeTogbGF5ZXIueSAtIHkgfSkpXG4gIH07XG5cbiAgY29uc3QgYXBwbHkgPSAoc25hcHNob3Q6IHR5cGVvZiBiZWZvcmUpID0+IHtcbiAgICB1cGRhdGVEb2MoKGN1cnJlbnQpID0+ICh7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgd2lkdGg6IHNuYXBzaG90LndpZHRoLFxuICAgICAgaGVpZ2h0OiBzbmFwc2hvdC5oZWlnaHQsXG4gICAgICBsYXllcnM6IGN1cnJlbnQubGF5ZXJzLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzbmFwc2hvdC5wb3NpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXIuaWQpO1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gPyB7IC4uLmxheWVyLCB4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IH0gOiBsYXllcjtcbiAgICAgIH0pXG4gICAgfSkpO1xuICAgIGVucXVldWUoeyBraW5kOiBcInJlc2l6ZVByb2plY3RcIiwgaWQ6IGRvYy5pZCwgd2lkdGg6IHNuYXBzaG90LndpZHRoLCBoZWlnaHQ6IHNuYXBzaG90LmhlaWdodCB9KTtcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIHNuYXBzaG90LnBvc2l0aW9ucykgcGVyc2lzdExheWVyTm93KHBvc2l0aW9uLmlkKTtcbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuXG4gIGFwcGx5KGFmdGVyKTtcbiAgc2V0U3RhdGUoeyB0b29sOiBcIm1vdmVcIiwgY3JvcFJlY3Q6IG51bGwgfSk7XG4gIHB1c2hIaXN0b3J5KHsgbGFiZWw6IFwiQ3JvcCBjYW52YXNcIiwgdW5kbzogKCkgPT4gYXBwbHkoYmVmb3JlKSwgcmVkbzogKCkgPT4gYXBwbHkoYWZ0ZXIpIH0pO1xufVxuXG5mdW5jdGlvbiBibGFua0xheWVyQXNzZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgd2lkdGgpO1xuICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgaGVpZ2h0KTtcbiAgcmV0dXJuIHsgc3JjOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLCB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbn1cblxuZnVuY3Rpb24gYXBwbHlMYXllclJhc3RlcihcbiAgbGF5ZXJJZDogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIGNsZWFyVGV4dDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmMsIHBhaW50U3JjOiBzcmMsIHdpZHRoLCBoZWlnaHQgfSk7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCAhPT0gbGF5ZXJJZCkgcmV0dXJuIGl0ZW07XG4gICAgICBpZiAoIWNsZWFyVGV4dCkgcmV0dXJuIHsgLi4uaXRlbSwgYXNzZXRJZCB9O1xuICAgICAgY29uc3QgeyB0ZXh0OiBfdGV4dCwgLi4ucmVzdCB9ID0gaXRlbTtcbiAgICAgIHJldHVybiB7IC4uLnJlc3QsIGFzc2V0SWQgfTtcbiAgICB9KVxuICB9KSk7XG4gIGNvbnN0IHVwZGF0ZWQgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAodXBkYXRlZCkgZW5xdWV1ZSh7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIiwgaWQ6IGxheWVySWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybSh1cGRhdGVkKSB9KTtcbiAgZW5xdWV1ZSh7IGtpbmQ6IFwicmVwbGFjZUxheWVyQXNzZXRcIiwgaWQ6IGxheWVySWQsIGNsaWVudEFzc2V0SWQ6IGFzc2V0SWQsIHNyYywgd2lkdGgsIGhlaWdodCB9KTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuLyoqIFRyYW5zcGFyZW50IGRvY3VtZW50LXNpemVkIGxheWVyIGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsYW5rTGF5ZXIoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGltYWdlID0gYmxhbmtMYXllckFzc2V0KGRvYy53aWR0aCwgZG9jLmhlaWdodCk7XG4gIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICBzZWVkQXNzZXQoYXNzZXRJZCwgeyBzcmM6IGltYWdlLnNyYywgcGFpbnRTcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9KTtcbiAgY29uc3QgbGF5ZXI6IExheWVyID0ge1xuICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgIGFzc2V0SWQsXG4gICAgbmFtZTogYExheWVyICR7ZG9jLmxheWVycy5sZW5ndGggKyAxfWAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHc6IGRvYy53aWR0aCxcbiAgICBoOiBkb2MuaGVpZ2h0LFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBcIm5vcm1hbFwiXG4gIH07XG4gIGNvbnN0IGluZGV4ID0gZG9jLmxheWVycy5sZW5ndGg7XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBbLi4uZC5sYXllcnMsIGxheWVyXSB9KSk7XG4gIGVucXVldWUoe1xuICAgIGtpbmQ6IFwiYWRkTGF5ZXJcIixcbiAgICBwcm9qZWN0SWQ6IGRvYy5pZCxcbiAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICBuYW1lOiBsYXllci5uYW1lLFxuICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgfSk7XG4gIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbiAgcHVzaEhpc3Rvcnkoe1xuICAgIGxhYmVsOiBcIk5ldyBsYXllclwiLFxuICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKSxcbiAgICByZWRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoW3sgbGF5ZXIsIGluZGV4IH1dKTtcbiAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbGF5ZXIuaWQ7XG59XG5cbi8qKiBFbnN1cmUgYSBwYWludGFibGUgbGF5ZXIgZXhpc3RzOyBjcmVhdGVzIGEgYmxhbmsgb25lIChubyBoaXN0b3J5KSB3aGVuIHRoZSBkb2MgaXMgZW1wdHkuICovXG5mdW5jdGlvbiBwYWludFRhcmdldExheWVyKCk6IHsgbGF5ZXI6IExheWVyOyBjcmVhdGVkOiBib29sZWFuIH0gfCBudWxsIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBjb25zdCBzZWxlY3RlZElkID0gc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZElkID8gZG9jLmxheWVycy5maW5kKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHNlbGVjdGVkSWQpIDogdW5kZWZpbmVkO1xuICBpZiAoc2VsZWN0ZWQpIHJldHVybiB7IGxheWVyOiBzZWxlY3RlZCwgY3JlYXRlZDogZmFsc2UgfTtcbiAgaWYgKGRvYy5sYXllcnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRvcCA9IGRvYy5sYXllcnNbZG9jLmxheWVycy5sZW5ndGggLSAxXTtcbiAgICBzZXRTZWxlY3Rpb24oW3RvcC5pZF0pO1xuICAgIHJldHVybiB7IGxheWVyOiB0b3AsIGNyZWF0ZWQ6IGZhbHNlIH07XG4gIH1cblxuICBjb25zdCBpbWFnZSA9IGJsYW5rTGF5ZXJBc3NldChkb2Mud2lkdGgsIGRvYy5oZWlnaHQpO1xuICBjb25zdCBhc3NldElkID0gbmV3Q2xpZW50SWQoXCJhc3NldFwiKTtcbiAgc2VlZEFzc2V0KGFzc2V0SWQsIHsgc3JjOiBpbWFnZS5zcmMsIHBhaW50U3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIGNvbnN0IGxheWVyOiBMYXllciA9IHtcbiAgICBpZDogbmV3Q2xpZW50SWQoXCJsYXllclwiKSxcbiAgICBhc3NldElkLFxuICAgIG5hbWU6IFwiTGF5ZXIgMVwiLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3OiBkb2Mud2lkdGgsXG4gICAgaDogZG9jLmhlaWdodCxcbiAgICByb3RhdGlvbjogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogXCJub3JtYWxcIlxuICB9O1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogWy4uLmQubGF5ZXJzLCBsYXllcl0gfSkpO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsXG4gICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgY2xpZW50SWQ6IGxheWVyLmlkLFxuICAgIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0obGF5ZXIpLFxuICAgIGFzc2V0OiB7IGNsaWVudElkOiBhc3NldElkLCBzcmM6IGltYWdlLnNyYywgd2lkdGg6IGltYWdlLndpZHRoLCBoZWlnaHQ6IGltYWdlLmhlaWdodCB9XG4gIH0pO1xuICBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gIHJldHVybiB7IGxheWVyLCBjcmVhdGVkOiB0cnVlIH07XG59XG5cbmZ1bmN0aW9uIGxvYWREYXRhVXJsKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZGVjb2RlIGltYWdlXCIpKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9KTtcbn1cblxuLyoqIENvbXBvc2l0ZSBhIGRvY3VtZW50LXNwYWNlIGJydXNoIHN0cm9rZSBvbnRvIHRoZSBjdXJyZW50IGxheWVyLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhaW50QnJ1c2hTdHJva2Uoc3JjOiBzdHJpbmcsIG9wYWNpdHkgPSAxKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHRhcmdldCA9IHBhaW50VGFyZ2V0TGF5ZXIoKTtcbiAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgY29uc3QgeyBsYXllciwgY3JlYXRlZCB9ID0gdGFyZ2V0O1xuXG4gIGxldCBiYXNlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBsZXQgc3Ryb2tlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICB0cnkge1xuICAgIFtiYXNlLCBzdHJva2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2xvYWRJbWFnZShsYXllci5hc3NldElkKSwgbG9hZERhdGFVcmwoc3JjKV0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiQ291bGQgbm90IGxvYWQgbGF5ZXIgcGl4ZWxzXCI7XG4gICAgd2luZG93LmFsZXJ0KGBDb3VsZCBub3QgcGFpbnQ6ICR7bWVzc2FnZX1gKTtcbiAgICBpZiAoY3JlYXRlZCkgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgYmFzZS5uYXR1cmFsV2lkdGgpO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBiYXNlLm5hdHVyYWxIZWlnaHQpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBpZiAoY3JlYXRlZCkgcmF3RGVsZXRlTGF5ZXJzKFtsYXllci5pZF0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eC5kcmF3SW1hZ2UoYmFzZSwgMCwgMCk7XG4gIGNvbnN0IGNhY2hlZCA9IGdldEFzc2V0RW50cnkobGF5ZXIuYXNzZXRJZCk7XG4gIGNvbnN0IGJlZm9yZVNyYyA9IGNhY2hlZD8ucGFpbnRTcmM/LnN0YXJ0c1dpdGgoXCJkYXRhOlwiKVxuICAgID8gY2FjaGVkLnBhaW50U3JjXG4gICAgOiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICBjb25zdCBiZWZvcmVUZXh0ID0gbGF5ZXIudGV4dCA/IHsgLi4ubGF5ZXIudGV4dCB9IDogdW5kZWZpbmVkO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XG4gIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgY3R4LnNjYWxlKHdpZHRoIC8gTWF0aC5tYXgoMSwgbGF5ZXIudyksIGhlaWdodCAvIE1hdGgubWF4KDEsIGxheWVyLmgpKTtcbiAgaWYgKGxheWVyLmZsaXBYKSBjdHguc2NhbGUoLTEsIDEpO1xuICBjdHgucm90YXRlKCgtbGF5ZXIucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XG4gIGN0eC50cmFuc2xhdGUoLShsYXllci54ICsgbGF5ZXIudyAvIDIpLCAtKGxheWVyLnkgKyBsYXllci5oIC8gMikpO1xuICBjdHguZHJhd0ltYWdlKHN0cm9rZSwgMCwgMCk7XG4gIGN0eC5yZXN0b3JlKCk7XG5cbiAgY29uc3QgYWZ0ZXJTcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICBjb25zdCBjbGVhclRleHQgPSBCb29sZWFuKGxheWVyLnRleHQpO1xuICAvLyBEZWNvZGUgYmVmb3JlIHN3YXBwaW5nIHNvIHRoZSBsYXllciA8aW1nPiBjYW4gcGFpbnQgaW1tZWRpYXRlbHkuIFRoZSBsaXZlXG4gIC8vIG92ZXJsYXkgc3RheXMgdXAgdW50aWwgTGF5ZXJWaWV3IHByZXNlbnRzIHRoaXMgZXhhY3Qgc3JjLlxuICBhd2FpdCBkZWNvZGVTcmMoYWZ0ZXJTcmMpO1xuICBhcm1CcnVzaE92ZXJsYXlDbGVhcihhZnRlclNyYyk7XG4gIGFwcGx5TGF5ZXJSYXN0ZXIobGF5ZXIuaWQsIGFmdGVyU3JjLCB3aWR0aCwgaGVpZ2h0LCBjbGVhclRleHQpO1xuICAvLyBGYWxsYmFjayBpZiB0aGUgbGF5ZXIgaXNuJ3QgdmlzaWJsZSAvIGZhaWxzIHRvIG1vdW50IGFuIDxpbWc+LlxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBjbGVhckJydXNoT3ZlcmxheU5vdygpLCAyMDAwKTtcblxuICBpZiAoY3JlYXRlZCkge1xuICAgIGNvbnN0IGZpbmFsTGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVyLmlkKTtcbiAgICBpZiAoIWZpbmFsTGF5ZXIpIHJldHVybjtcbiAgICBwdXNoSGlzdG9yeSh7XG4gICAgICBsYWJlbDogXCJCcnVzaCBzdHJva2VcIixcbiAgICAgIHVuZG86ICgpID0+IHJhd0RlbGV0ZUxheWVycyhbbGF5ZXIuaWRdKSxcbiAgICAgIHJlZG86ICgpID0+IHtcbiAgICAgICAgcmF3SW5zZXJ0TGF5ZXJzKFt7IGxheWVyOiBmaW5hbExheWVyLCBpbmRleDogMCB9XSk7XG4gICAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQnJ1c2ggc3Ryb2tlXCIsXG4gICAgdW5kbzogKCkgPT4ge1xuICAgICAgYXBwbHlMYXllclJhc3RlcihsYXllci5pZCwgYmVmb3JlU3JjLCB3aWR0aCwgaGVpZ2h0LCBmYWxzZSk7XG4gICAgICBpZiAoYmVmb3JlVGV4dCkge1xuICAgICAgICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAgICAgICAuLi5kb2MsXG4gICAgICAgICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGxheWVyLmlkID8geyAuLi5pdGVtLCB0ZXh0OiBiZWZvcmVUZXh0IH0gOiBpdGVtKSlcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllci5pZCk7XG4gICAgICAgIGlmICh1cGRhdGVkKSBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZDogbGF5ZXIuaWQsIGRhdGE6IGVuY29kZVRyYW5zZm9ybSh1cGRhdGVkKSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZG86ICgpID0+IGFwcGx5TGF5ZXJSYXN0ZXIobGF5ZXIuaWQsIGFmdGVyU3JjLCB3aWR0aCwgaGVpZ2h0LCBjbGVhclRleHQpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0UmFzdGVyKHRleHQ6IFRleHRMYXllckRhdGEpOiB7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgY29uc3QgbGluZXMgPSAodGV4dC5jb250ZW50IHx8IFwiVGV4dFwiKS5yZXBsYWNlKC9cXHIvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IG1lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFtZWFzdXJlKSByZXR1cm4geyBzcmM6IFwiXCIsIHdpZHRoOiAxLCBoZWlnaHQ6IDEgfTtcbiAgbWVhc3VyZS5mb250ID0gYCR7dGV4dC5mb250V2VpZ2h0fSAke3RleHQuZm9udFNpemV9cHggJHt0ZXh0LmZvbnRGYW1pbHl9YDtcbiAgY29uc3QgcGFkZGluZyA9IE1hdGgubWF4KDQsIE1hdGguY2VpbCh0ZXh0LmZvbnRTaXplICogMC4xNCkpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChNYXRoLm1heCguLi5saW5lcy5tYXAoKGxpbmUpID0+IG1lYXN1cmUubWVhc3VyZVRleHQobGluZSB8fCBcIiBcIikud2lkdGgpKSArIHBhZGRpbmcgKiAyKSk7XG4gIGNvbnN0IGxpbmVQeCA9IHRleHQuZm9udFNpemUgKiB0ZXh0LmxpbmVIZWlnaHQ7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChsaW5lcy5sZW5ndGggKiBsaW5lUHggKyBwYWRkaW5nICogMikpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiB7IHNyYzogXCJcIiwgd2lkdGg6IDEsIGhlaWdodDogMSB9O1xuICBjdHguZm9udCA9IGAke3RleHQuZm9udFdlaWdodH0gJHt0ZXh0LmZvbnRTaXplfXB4ICR7dGV4dC5mb250RmFtaWx5fWA7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBjdHgudGV4dEFsaWduID0gdGV4dC5hbGlnbjtcbiAgY3R4LmZpbGxTdHlsZSA9IHRleHQuY29sb3I7XG4gIGNvbnN0IHggPSB0ZXh0LmFsaWduID09PSBcImxlZnRcIiA/IHBhZGRpbmcgOiB0ZXh0LmFsaWduID09PSBcImNlbnRlclwiID8gd2lkdGggLyAyIDogd2lkdGggLSBwYWRkaW5nO1xuICBsaW5lcy5mb3JFYWNoKChsaW5lLCBpbmRleCkgPT4gY3R4LmZpbGxUZXh0KGxpbmUgfHwgXCIgXCIsIHgsIHBhZGRpbmcgKyBpbmRleCAqIGxpbmVQeCkpO1xuICByZXR1cm4geyBzcmM6IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksIHdpZHRoLCBoZWlnaHQgfTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFRleHREZWZhdWx0cygpOiBUZXh0TGF5ZXJEYXRhIHtcbiAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IFwiVGV4dFwiLFxuICAgIGZvbnRGYW1pbHk6IHN0YXRlLnRleHRGb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiBzdGF0ZS50ZXh0Rm9udFNpemUsXG4gICAgZm9udFdlaWdodDogc3RhdGUudGV4dEZvbnRXZWlnaHQsXG4gICAgYWxpZ246IHN0YXRlLnRleHRBbGlnbixcbiAgICBjb2xvcjogc3RhdGUuZm9yZWdyb3VuZENvbG9yLFxuICAgIGxpbmVIZWlnaHQ6IHN0YXRlLnRleHRMaW5lSGVpZ2h0XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZXh0TGF5ZXIoYXQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuICBjb25zdCB0ZXh0ID0gY3VycmVudFRleHREZWZhdWx0cygpO1xuICBjb25zdCBpbWFnZSA9IHJlbmRlclRleHRSYXN0ZXIodGV4dCk7XG4gIGlmICghaW1hZ2Uuc3JjKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICBjb25zdCBsYXllcjogTGF5ZXIgPSB7XG4gICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksIGFzc2V0SWQsIG5hbWU6IFwiVGV4dFwiLCB0ZXh0OiB7IC4uLnRleHQsIHJhc3RlcldpZHRoOiBpbWFnZS53aWR0aCwgcmFzdGVySGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSxcbiAgICB4OiBhdC54LCB5OiBhdC55LCB3OiBpbWFnZS53aWR0aCwgaDogaW1hZ2UuaGVpZ2h0LFxuICAgIHJvdGF0aW9uOiAwLCBvcGFjaXR5OiAxLCB2aXNpYmxlOiB0cnVlLCBmbGlwWDogZmFsc2UsIGJsZW5kTW9kZTogXCJub3JtYWxcIlxuICB9O1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVyczogWy4uLmQubGF5ZXJzLCBsYXllcl0gfSkpO1xuICBlbnF1ZXVlKHtcbiAgICBraW5kOiBcImFkZExheWVyXCIsIHByb2plY3RJZDogZG9jLmlkLCBjbGllbnRJZDogbGF5ZXIuaWQsIGNsaWVudEtleTogbmV3Q2xpZW50SWQoXCJrZXlcIiksXG4gICAgbmFtZTogbGF5ZXIubmFtZSwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICBhc3NldDogeyBjbGllbnRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfVxuICB9KTtcbiAgc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiQWRkIHRleHRcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoW2xheWVyLmlkXSksXG4gICAgcmVkbzogKCkgPT4geyByYXdJbnNlcnRMYXllcnMoW3sgbGF5ZXIsIGluZGV4OiBkb2MubGF5ZXJzLmxlbmd0aCB9XSk7IHNldFNlbGVjdGlvbihbbGF5ZXIuaWRdKTsgfVxuICB9KTtcbiAgcmV0dXJuIGxheWVyLmlkO1xufVxuXG5mdW5jdGlvbiBhcHBseVRleHQobGF5ZXJJZDogc3RyaW5nLCB0ZXh0OiBUZXh0TGF5ZXJEYXRhKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcikgcmV0dXJuO1xuICBjb25zdCBpbWFnZSA9IHJlbmRlclRleHRSYXN0ZXIodGV4dCk7XG4gIGlmICghaW1hZ2Uuc3JjKSByZXR1cm47XG4gIGNvbnN0IGNhY2hlZEFzc2V0ID0gZ2V0QXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgY29uc3Qgb2xkUmFzdGVyV2lkdGggPSBsYXllci50ZXh0Py5yYXN0ZXJXaWR0aCA/PyBjYWNoZWRBc3NldD8ud2lkdGggPz8gbGF5ZXIudztcbiAgY29uc3Qgb2xkUmFzdGVySGVpZ2h0ID0gbGF5ZXIudGV4dD8ucmFzdGVySGVpZ2h0ID8/IGNhY2hlZEFzc2V0Py5oZWlnaHQgPz8gbGF5ZXIuaDtcbiAgY29uc3Qgc2NhbGVYID0gb2xkUmFzdGVyV2lkdGggPiAwID8gbGF5ZXIudyAvIG9sZFJhc3RlcldpZHRoIDogMTtcbiAgY29uc3Qgc2NhbGVZID0gb2xkUmFzdGVySGVpZ2h0ID4gMCA/IGxheWVyLmggLyBvbGRSYXN0ZXJIZWlnaHQgOiAxO1xuICBjb25zdCByZW5kZXJlZFRleHQgPSB7IC4uLnRleHQsIHJhc3RlcldpZHRoOiBpbWFnZS53aWR0aCwgcmFzdGVySGVpZ2h0OiBpbWFnZS5oZWlnaHQgfTtcbiAgY29uc3QgYXNzZXRJZCA9IG5ld0NsaWVudElkKFwiYXNzZXRcIik7XG4gIHNlZWRBc3NldChhc3NldElkLCB7IHNyYzogaW1hZ2Uuc3JjLCBwYWludFNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH0pO1xuICB1cGRhdGVEb2MoKGRvYykgPT4gKHtcbiAgICAuLi5kb2MsXG4gICAgbGF5ZXJzOiBkb2MubGF5ZXJzLm1hcCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZFxuICAgICAgPyB7IC4uLml0ZW0sIGFzc2V0SWQsIHRleHQ6IHJlbmRlcmVkVGV4dCwgdzogaW1hZ2Uud2lkdGggKiBzY2FsZVgsIGg6IGltYWdlLmhlaWdodCAqIHNjYWxlWSB9XG4gICAgICA6IGl0ZW0pXG4gIH0pKTtcbiAgY29uc3QgdXBkYXRlZCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCk7XG4gIGlmICh1cGRhdGVkKSBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZDogbGF5ZXJJZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKHVwZGF0ZWQpIH0pO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZXBsYWNlTGF5ZXJBc3NldFwiLCBpZDogbGF5ZXJJZCwgY2xpZW50QXNzZXRJZDogYXNzZXRJZCwgc3JjOiBpbWFnZS5zcmMsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHQgfSk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZXh0TGF5ZXIobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxUZXh0TGF5ZXJEYXRhPiwgbGFiZWwgPSBcIkVkaXQgdGV4dFwiKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcj8udGV4dCkgcmV0dXJuO1xuICBjb25zdCBiZWZvcmUgPSB7IC4uLmxheWVyLnRleHQgfTtcbiAgY29uc3QgYWZ0ZXIgPSB7IC4uLmJlZm9yZSwgLi4ucGF0Y2ggfTtcbiAgaWYgKEpTT04uc3RyaW5naWZ5KGJlZm9yZSkgPT09IEpTT04uc3RyaW5naWZ5KGFmdGVyKSkgcmV0dXJuO1xuICBhcHBseVRleHQobGF5ZXJJZCwgYWZ0ZXIpO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsLCB1bmRvOiAoKSA9PiBhcHBseVRleHQobGF5ZXJJZCwgYmVmb3JlKSwgcmVkbzogKCkgPT4gYXBwbHlUZXh0KGxheWVySWQsIGFmdGVyKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgaWYgKCFsYXllcj8udGV4dCkgcmV0dXJuO1xuICBzZXRTZWxlY3Rpb24oW2xheWVySWRdKTtcbiAgc2V0U3RhdGUoeyB0ZXh0RWRpdGluZzogeyBpZDogbGF5ZXJJZCwgZHJhZnQ6IGxheWVyLnRleHQuY29udGVudCB9IH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluaXNoVGV4dEVkaXRpbmcoKTogdm9pZCB7XG4gIGNvbnN0IGVkaXRpbmcgPSBnZXRTdGF0ZSgpLnRleHRFZGl0aW5nO1xuICBpZiAoIWVkaXRpbmcpIHJldHVybjtcbiAgc2V0U3RhdGUoeyB0ZXh0RWRpdGluZzogbnVsbCB9KTtcbiAgdXBkYXRlVGV4dExheWVyKGVkaXRpbmcuaWQsIHsgY29udGVudDogZWRpdGluZy5kcmFmdCB9LCBcIkVkaXQgdGV4dFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJMYXllcihmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBmcm9tSW5kZXggPT09IHRvSW5kZXgpIHJldHVybjtcbiAgY29uc3QgYmVmb3JlID0gZG9jLmxheWVycy5tYXAoKGwpID0+IGwuaWQpO1xuICBjb25zdCBvcmRlciA9IFsuLi5iZWZvcmVdO1xuICBjb25zdCBbbW92ZWRdID0gb3JkZXIuc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gIGlmIChtb3ZlZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG9yZGVyLnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZCk7XG5cbiAgY29uc3QgYXBwbHlPcmRlciA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdXBkYXRlRG9jKChkKSA9PiB7XG4gICAgICBjb25zdCBieUlkID0gbmV3IE1hcChkLmxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuICAgICAgY29uc3QgbGF5ZXJzOiBMYXllcltdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBjb25zdCBsYXllciA9IGJ5SWQuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgICAgIGJ5SWQuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGF5ZXJzLnB1c2goLi4uYnlJZC52YWx1ZXMoKSk7XG4gICAgICByZXR1cm4geyAuLi5kLCBsYXllcnMgfTtcbiAgICB9KTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJzZXRPcmRlclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgaWRzOiBbLi4uaWRzXSB9KTtcbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuXG4gIGFwcGx5T3JkZXIob3JkZXIpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiUmVvcmRlciBsYXllclwiLFxuICAgIHVuZG86ICgpID0+IGFwcGx5T3JkZXIoYmVmb3JlKSxcbiAgICByZWRvOiAoKSA9PiBhcHBseU9yZGVyKG9yZGVyKVxuICB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOYW1pbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUxheWVyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgY29uc3QgbGF5ZXIgPSBkb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghZG9jIHx8ICFsYXllciB8fCBsYXllci5uYW1lID09PSBuYW1lKSByZXR1cm47XG4gIGNvbnN0IGFwcGx5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB1cGRhdGVEb2MoKGQpID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgbGF5ZXJzOiBkLmxheWVycy5tYXAoKGwpID0+IChsLmlkID09PSBpZCA/IHsgLi4ubCwgbmFtZTogdmFsdWUgfSA6IGwpKVxuICAgIH0pKTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVMYXllclwiLCBpZCwgbmFtZTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZSA9IGxheWVyLm5hbWU7XG4gIGFwcGx5KG5hbWUpO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsOiBcIlJlbmFtZSBsYXllclwiLCB1bmRvOiAoKSA9PiBhcHBseShiZWZvcmUpLCByZWRvOiAoKSA9PiBhcHBseShuYW1lKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBkb2MubmFtZSA9PT0gbmFtZSkgcmV0dXJuO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIG5hbWUgfSkpO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVQcm9qZWN0XCIsIGlkOiBkb2MuaWQsIG5hbWUgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGh1bWJuYWlsc1xuXG5sZXQgdGh1bWJUaW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVUaHVtYlJlZnJlc2goKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gIGNsZWFyVGltZW91dCh0aHVtYlRpbWVyKTtcbiAgdGh1bWJUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgICBpZiAoIWRvYykgcmV0dXJuO1xuICAgIHJlbmRlclRodW1iKGRvYylcbiAgICAgIC50aGVuKCh0aHVtYikgPT4ge1xuICAgICAgICAvLyBUaGUgZG9jIG1heSBoYXZlIGJlZW4gY2xvc2VkIHdoaWxlIHJlbmRlcmluZy5cbiAgICAgICAgaWYgKGdldFN0YXRlKCkuZG9jPy5pZCA9PT0gZG9jLmlkKSB7XG4gICAgICAgICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0VGh1bWJcIiwgaWQ6IGRvYy5pZCwgdGh1bWIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgfSwgMTUwMCk7XG59XG4iLCAiLy8gVmlld3BvcnQgKHpvb20vcGFuKSBoZWxwZXJzLiBUaGUgY2FudmFzIHN0YWdlIHJlZ2lzdGVycyBpdHMgRE9NIGVsZW1lbnQgc29cbi8vIHpvb20gc2hvcnRjdXRzIGFuZCB0b29sYmFyIGJ1dHRvbnMgY2FuIHpvb20gYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci5cblxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgTUlOX1pPT00gPSAwLjA1O1xuZXhwb3J0IGNvbnN0IE1BWF9aT09NID0gODtcbmNvbnN0IEZJVF9QQURESU5HID0gNTY7XG4vKiogV2hlZWwgc2Vuc2l0aXZpdHkgYXQgem9vbT0xOyBzY2FsZXMgdXAgd2hlbiB6b29tZWQgb3V0LiAqL1xuY29uc3QgV0hFRUxfWk9PTV9TRU5TSVRJVklUWSA9IDAuMDA3MjtcblxuZXhwb3J0IGNvbnN0IHZpZXdwb3J0RWw6IHsgY3VycmVudDogSFRNTEVsZW1lbnQgfCBudWxsIH0gPSB7IGN1cnJlbnQ6IG51bGwgfTtcblxuLyoqIE11bHRpcGxpY2F0aXZlIHpvb20gc3RlcCBcdTIwMTQgbGFyZ2VyIHdoZW4gem9vbWVkIG91dCwgZmluZXIgd2hlbiB6b29tZWQgaW4uICovXG5leHBvcnQgZnVuY3Rpb24gem9vbVN0ZXBGYWN0b3Ioem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMSArIDAuMjUgLyBNYXRoLnNxcnQoTWF0aC5tYXgoem9vbSwgTUlOX1pPT00pKTtcbn1cblxuLyoqIFdoZWVsIHpvb20gc2Vuc2l0aXZpdHkgXHUyMDE0IHN0cm9uZ2VyIHdoZW4gem9vbWVkIG91dC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGVlbFpvb21TZW5zaXRpdml0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBXSEVFTF9aT09NX1NFTlNJVElWSVRZIC8gTWF0aC5zcXJ0KE1hdGgubWF4KHpvb20sIE1JTl9aT09NKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JlZW5Ub1dvcmxkKFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCByZWN0ID0gZWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpID8/IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogKGNsaWVudFggLSByZWN0LmxlZnQgLSB2aWV3LnBhblgpIC8gdmlldy56b29tLFxuICAgICAgICB5OiAoY2xpZW50WSAtIHJlY3QudG9wIC0gdmlldy5wYW5ZKSAvIHZpZXcuem9vbSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gem9vbUF0Q2xpZW50KFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4gICAgbmV4dFpvb206IG51bWJlcixcbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHpvb20gPSBjbGFtcChuZXh0Wm9vbSwgTUlOX1pPT00sIE1BWF9aT09NKTtcbiAgICBjb25zdCB3eCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0IC0gdmlldy5wYW5YKSAvIHZpZXcuem9vbTtcbiAgICBjb25zdCB3eSA9IChjbGllbnRZIC0gcmVjdC50b3AgLSB2aWV3LnBhblkpIC8gdmlldy56b29tO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IGNsaWVudFggLSByZWN0LmxlZnQgLSB3eCAqIHpvb20sXG4gICAgICAgICAgICBwYW5ZOiBjbGllbnRZIC0gcmVjdC50b3AgLSB3eSAqIHpvb20sXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZVBhbihwYW5YOiBudW1iZXIsIHBhblk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBzZXRTdGF0ZSh7IHZpZXc6IHsgLi4udmlldywgcGFuWCwgcGFuWSB9IH0pO1xufVxuXG4vKiogWm9vbSBpbiAoYGRpcmVjdGlvbiA+IDBgKSBvciBvdXQgKGBkaXJlY3Rpb24gPCAwYCkgYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6b29tQnkoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHpvb20gPSBnZXRTdGF0ZSgpLnZpZXcuem9vbTtcbiAgICBjb25zdCBzdGVwID0gem9vbVN0ZXBGYWN0b3Ioem9vbSk7XG4gICAgY29uc3QgZmFjdG9yID0gZGlyZWN0aW9uID4gMCA/IHN0ZXAgOiAxIC8gc3RlcDtcbiAgICB6b29tQXRDbGllbnQoXG4gICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMixcbiAgICAgICAgem9vbSAqIGZhY3RvcixcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0RG9jKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghZWwgfHwgIWRvYykgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB6b29tID0gY2xhbXAoXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgKHJlY3Qud2lkdGggLSBGSVRfUEFERElORyAqIDIpIC8gZG9jLndpZHRoLFxuICAgICAgICAgICAgKHJlY3QuaGVpZ2h0IC0gRklUX1BBRERJTkcgKiAyKSAvIGRvYy5oZWlnaHQsXG4gICAgICAgICksXG4gICAgICAgIE1JTl9aT09NLFxuICAgICAgICBNQVhfWk9PTSxcbiAgICApO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IChyZWN0LndpZHRoIC0gZG9jLndpZHRoICogem9vbSkgLyAyLFxuICAgICAgICAgICAgcGFuWTogKHJlY3QuaGVpZ2h0IC0gZG9jLmhlaWdodCAqIHpvb20pIC8gMixcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RGaXQoKTogdm9pZCB7XG4gICAgc2V0U3RhdGUoeyBmaXRWZXJzaW9uOiBnZXRTdGF0ZSgpLmZpdFZlcnNpb24gKyAxIH0pO1xufVxuIiwgIi8vIEltcG9ydGluZyBpbWFnZXMgZnJvbSBmaWxlczogZGVjb2RlLCBkb3duc2NhbGUgb3ZlcnNpemVkIGltYWdlcyAoZGF0YSBVUkxzXG4vLyBhcmUgdGhlIHVwbG9hZCB3aXJlIGZvcm1hdDsgdGhlIHNlcnZlciBzdG9yZXMgdGhlbSBpbiBTMyksIGFuZCByZXBvcnRcbi8vIG5hdHVyYWwgZGltZW5zaW9ucy5cblxuaW1wb3J0IHsgTUFYX0lNQUdFX0RJTSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1wb3J0ZWRJbWFnZSB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIHJlYWRGaWxlQXNEYXRhVXJsKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQpKTtcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVhZCBmaWxlXCIpKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUltYWdlKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJOb3QgYSBzdXBwb3J0ZWQgaW1hZ2VcIikpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiYXNlTmFtZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLl0rJC8sIFwiXCIpIHx8IFwiSW1hZ2VcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVUb0ltcG9ydGVkSW1hZ2UoZmlsZTogRmlsZSk6IFByb21pc2U8SW1wb3J0ZWRJbWFnZT4ge1xuICBjb25zdCBvcmlnaW5hbCA9IGF3YWl0IHJlYWRGaWxlQXNEYXRhVXJsKGZpbGUpO1xuICBjb25zdCBpbWcgPSBhd2FpdCBkZWNvZGVJbWFnZShvcmlnaW5hbCk7XG4gIGNvbnN0IHdpZHRoID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG4gIGlmICh3aWR0aCA8IDEgfHwgaGVpZ2h0IDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHN1cHBvcnRlZCBpbWFnZVwiKTtcbiAgfVxuXG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX0lNQUdFX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgaWYgKHNjYWxlID09PSAxKSB7XG4gICAgcmV0dXJuIHsgc3JjOiBvcmlnaW5hbCwgd2lkdGgsIGhlaWdodCwgbmFtZTogYmFzZU5hbWUoZmlsZS5uYW1lKSB9O1xuICB9XG5cbiAgY29uc3QgdyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICBjb25zdCBoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3O1xuICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHcsIGgpO1xuICAvLyBKUEVHIHJlLWVuY29kZXMgcGhvdG9zIGNvbXBhY3RseTsgUE5HIGtlZXBzIHRyYW5zcGFyZW5jeSBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICBjb25zdCBzcmMgPVxuICAgIGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgPyBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjkpIDogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgcmV0dXJuIHsgc3JjLCB3aWR0aDogdywgaGVpZ2h0OiBoLCBuYW1lOiBiYXNlTmFtZShmaWxlLm5hbWUpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlcihkdDogRGF0YVRyYW5zZmVyIHwgbnVsbCk6IEZpbGVbXSB7XG4gIGlmICghZHQpIHJldHVybiBbXTtcbiAgcmV0dXJuIFsuLi5kdC5maWxlc10uZmlsdGVyKChmaWxlKSA9PiBmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSk7XG59XG4iLCAiY29uc3QgRU5DT0RFRF9FTlRJVElFUyA9IC9bXCImPF0vO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHN0ciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHN0cikge1xuXHQvLyBTa2lwIGFsbCB3b3JrIGZvciBzdHJpbmdzIHdpdGggbm8gZW50aXRpZXMgbmVlZGluZyBlbmNvZGluZzpcblx0aWYgKHN0ci5sZW5ndGggPT09IDAgfHwgRU5DT0RFRF9FTlRJVElFUy50ZXN0KHN0cikgPT09IGZhbHNlKSByZXR1cm4gc3RyO1xuXG5cdGxldCBsYXN0ID0gMCxcblx0XHRpID0gMCxcblx0XHRvdXQgPSAnJyxcblx0XHRjaCA9ICcnO1xuXG5cdC8vIFNlZWsgZm9yd2FyZCBpbiBzdHIgdW50aWwgdGhlIG5leHQgZW50aXR5IGNoYXI6XG5cdGZvciAoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0Y2ggPSAnJnF1b3Q7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRjaCA9ICcmYW1wOyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2MDpcblx0XHRcdFx0Y2ggPSAnJmx0Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIEFwcGVuZCBza2lwcGVkL2J1ZmZlcmVkIGNoYXJhY3RlcnMgYW5kIHRoZSBlbmNvZGVkIGVudGl0eTpcblx0XHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0XHRvdXQgKz0gY2g7XG5cdFx0Ly8gU3RhcnQgdGhlIG5leHQgc2Vlay9idWZmZXIgYWZ0ZXIgdGhlIGVudGl0eSdzIG9mZnNldDpcblx0XHRsYXN0ID0gaSArIDE7XG5cdH1cblx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdHJldHVybiBvdXQ7XG59XG4iLCAiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGVuY29kZUVudGl0aWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi8uLi9zcmMvY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgZXhwb3J0cyB2YXJpb3VzIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQmFiZWwncyBcImF1dG9tYXRpY1wiIEpTWCBydW50aW1lIEFQSTpcbiAqIC0ganN4KHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeHModHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIF9fc291cmNlLCBfX3NlbGYpXG4gKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIGNyZWF0ZVZOb2RlIGhlcmUgaXMgb3B0aW1pemVkIGZvciBwZXJmb3JtYW5jZS5cbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWY2YjU0YTBiNDYzMjEwMGE3ZGNkMmIzXG4gKi9cblxuLyoqXG4gKiBKU1guRWxlbWVudCBmYWN0b3J5IHVzZWQgYnkgQmFiZWwncyB7cnVudGltZTpcImF1dG9tYXRpY1wifSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZOb2RlWyd0eXBlJ119IHR5cGVcbiAqIEBwYXJhbSB7Vk5vZGVbJ3Byb3BzJ119IHByb3BzXG4gKiBAcGFyYW0ge1ZOb2RlWydrZXknXX0gW2tleV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW2lzU3RhdGljQ2hpbGRyZW5dXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NvdXJjZV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc2VsZl1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgX19zb3VyY2UsIF9fc2VsZikge1xuXHRpZiAoIXByb3BzKSBwcm9wcyA9IHt9O1xuXHQvLyBXZSdsbCB3YW50IHRvIHByZXNlcnZlIGByZWZgIGluIHByb3BzIHRvIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yXG5cdC8vIGZvcndhcmRSZWYgY29tcG9uZW50cyBpbiB0aGUgZnV0dXJlLCBidXQgdGhhdCBzaG91bGQgaGFwcGVuIHZpYVxuXHQvLyBhIHNlcGFyYXRlIFBSLlxuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHMsXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0aWYgKCdyZWYnIGluIG5vcm1hbGl6ZWRQcm9wcykge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXHRcdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdFx0aWYgKGkgPT0gJ3JlZicpIHtcblx0XHRcdFx0cmVmID0gcHJvcHNbaV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge1ZOb2RlICYgeyBfX3NvdXJjZTogYW55OyBfX3NlbGY6IGFueSB9fSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzOiBub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiAtLXZub2RlSWQsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDAsXG5cdFx0X19zb3VyY2UsXG5cdFx0X19zZWxmXG5cdH07XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzLlxuXHQvLyBOb3RlOiBgdHlwZWAgaXMgb2Z0ZW4gYSBTdHJpbmcsIGFuZCBjYW4gYmUgYHVuZGVmaW5lZGAgaW4gZGV2ZWxvcG1lbnQuXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAocmVmID0gdHlwZS5kZWZhdWx0UHJvcHMpKSB7XG5cdFx0Zm9yIChpIGluIHJlZilcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSByZWZbaV07XG5cdFx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB0ZW1wbGF0ZSB2bm9kZS4gVGhpcyBmdW5jdGlvbiBpcyBub3QgZXhwZWN0ZWQgdG8gYmVcbiAqIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdGVtcGxhdGVzXG4gKiBAcGFyYW0gIHtBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fSBleHByc1xuICogQHJldHVybnMge1ZOb2RlfVxuICovXG5mdW5jdGlvbiBqc3hUZW1wbGF0ZSh0ZW1wbGF0ZXMsIC4uLmV4cHJzKSB7XG5cdGNvbnN0IHZub2RlID0gY3JlYXRlVk5vZGUoRnJhZ21lbnQsIHsgdHBsOiB0ZW1wbGF0ZXMsIGV4cHJzIH0pO1xuXHQvLyBCeXBhc3MgcmVuZGVyIHRvIHN0cmluZyB0b3AgbGV2ZWwgRnJhZ21lbnQgb3B0aW1pemF0aW9uXG5cdHZub2RlLmtleSA9IHZub2RlLl92bm9kZTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG5jb25zdCBKU19UT19DU1MgPSB7fTtcbmNvbnN0IENTU19SRUdFWCA9IC9bQS1aXS9nO1xuXG4vKipcbiAqIFVud3JhcCBwb3RlbnRpYWwgc2lnbmFscy5cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nXG5cdFx0PyB2YWx1ZS52YWx1ZU9mKClcblx0XHQ6IHZhbHVlO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBIVE1MIGF0dHJpYnV0ZSB0byBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBub3RcbiAqIGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGVcbiAqIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYXR0cmlidXRlIHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqc3hBdHRyKG5hbWUsIHZhbHVlKSB7XG5cdGlmIChvcHRpb25zLmF0dHIpIHtcblx0XHRjb25zdCByZXN1bHQgPSBvcHRpb25zLmF0dHIobmFtZSwgdmFsdWUpO1xuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHZhbHVlID0gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKTtcblxuXHRpZiAobmFtZSA9PT0gJ3JlZicgfHwgbmFtZSA9PT0gJ2tleScpIHJldHVybiAnJztcblx0aWYgKG5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG5cdFx0XHRsZXQgdmFsID0gdmFsdWVbcHJvcF07XG5cdFx0XHRpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBuYW1lID1cblx0XHRcdFx0XHRwcm9wWzBdID09ICctJ1xuXHRcdFx0XHRcdFx0PyBwcm9wXG5cdFx0XHRcdFx0XHQ6IEpTX1RPX0NTU1twcm9wXSB8fFxuXHRcdFx0XHRcdFx0XHQoSlNfVE9fQ1NTW3Byb3BdID0gcHJvcC5yZXBsYWNlKENTU19SRUdFWCwgJy0kJicpLnRvTG93ZXJDYXNlKCkpO1xuXG5cdFx0XHRcdGxldCBzdWZmaXggPSAnOyc7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRcdC8vIEV4Y2x1ZGUgY3VzdG9tLWF0dHJpYnV0ZXNcblx0XHRcdFx0XHQhbmFtZS5zdGFydHNXaXRoKCctLScpICYmXG5cdFx0XHRcdFx0IUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KG5hbWUpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICdweDsnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciA9IHN0ciArIG5hbWUgKyAnOicgKyB2YWwgKyBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcyhzdHIpICsgJ1wiJztcblx0fVxuXG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dmFsdWUgPT09IGZhbHNlIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBuYW1lO1xuXG5cdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKSArICdcIic7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgZHluYW1pYyBjaGlsZCBwYXNzZWQgdG8gYGpzeFRlbXBsYXRlYC4gVGhpcyBmdW5jdGlvblxuICogaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhXG4gKiBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsIHwgVk5vZGUgfCBBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fVxuICovXG5mdW5jdGlvbiBqc3hFc2NhcGUodmFsdWUpIHtcblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gQ2hlY2sgZm9yIFZOb2RlXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZTtcblxuXHRcdGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZVtpXSA9IGpzeEVzY2FwZSh2YWx1ZVtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVWTm9kZSBhcyBqc3gsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeHMsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeERFVixcblx0RnJhZ21lbnQsXG5cdC8vIHByZWNvbXBpbGVkIEpTWCB0cmFuc2Zvcm1cblx0anN4VGVtcGxhdGUsXG5cdGpzeEF0dHIsXG5cdGpzeEVzY2FwZVxufTtcbiIsICIvLyBUaGUgY2FudmFzOiByZW5kZXJzIHRoZSBhcnRib2FyZCBhbmQgaXRzIGxheWVycyB3aXRoIENTUyB0cmFuc2Zvcm1zIChHUFVcbi8vIGNvbXBvc2l0aW5nIGtlZXBzIGRyYWdzIGF0IGZyYW1lIHJhdGUpLCBhbmQgb3ducyBhbGwgcG9pbnRlciBnZXN0dXJlcyBcdTIwMTRcbi8vIHNlbGVjdCwgbW92ZSwgc2NhbGUsIHJvdGF0ZSwgcGFuIFx1MjAxNCBwbHVzIHdoZWVsIHpvb20vcGFuIGFuZCBpbWFnZSBkcm9wLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQge1xuICAgIEhBTkRMRVMsXG4gICAgSEFORExFX0lEUyxcbiAgICByb3RhdGlvbkZyb21Qb2ludGVyLFxuICAgIHNjYWxlRnJvbUhhbmRsZSxcbiAgICB0eXBlIEhhbmRsZUlkLFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgdHlwZSB7IExheWVyLCBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgcGFpbnRCcnVzaFN0cm9rZSxcbiAgICBhZGRUZXh0TGF5ZXIsXG4gICAgYWRkSW1hZ2VMYXllcnMsXG4gICAgYXBwbHlUcmFuc2llbnQsXG4gICAgY29tbWl0VHJhbnNmb3JtcyxcbiAgICBjcm9wQ2FudmFzLFxuICAgIGNyb3BTZWxlY3Rpb24sXG4gICAgYmVnaW5UZXh0RWRpdGluZyxcbiAgICBmaW5pc2hUZXh0RWRpdGluZyxcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlU2VsZWN0ZWQsXG4gICAgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UsXG4gICAgdHlwZSBUcmFuc2Zvcm1QYXRjaCxcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnksIGRpc3BsYXlTcmMgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBub3RlTGF5ZXJTcmNQcmVzZW50ZWQsIHJlZ2lzdGVyQnJ1c2hPdmVybGF5Q2xlYXIsIGJlZ2luQnJ1c2hHZXN0dXJlLCBlbmRCcnVzaEdlc3R1cmUgfSBmcm9tIFwiLi4vc3RhdGUvYnJ1c2hPdmVybGF5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHtcbiAgICBmaXREb2MsXG4gICAgc2NyZWVuVG9Xb3JsZCxcbiAgICBzZXRTdGF0ZVBhbixcbiAgICB2aWV3cG9ydEVsLFxuICAgIHdoZWVsWm9vbVNlbnNpdGl2aXR5LFxuICAgIHpvb21BdENsaWVudCxcbn0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuXG50eXBlIEdlc3R1cmUgPVxuICAgIHwge1xuICAgICAgICAgIGtpbmQ6IFwicGFuXCI7XG4gICAgICAgICAgc3RhcnRDbGllbnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRDbGllbnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5YOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRQYW5ZOiBudW1iZXI7XG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICAga2luZDogXCJtb3ZlXCI7XG4gICAgICAgICAgc3RhcnRYOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgICAgc3RhcnRzOiBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+O1xuICAgICAgICAgIG1vdmVkOiBib29sZWFuO1xuICAgICAgfVxuICAgIHwgeyBraW5kOiBcInNjYWxlXCI7IGlkOiBzdHJpbmc7IGhhbmRsZTogSGFuZGxlSWQ7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwicm90YXRlXCI7IGlkOiBzdHJpbmc7IHN0YXJ0OiBMYXllclRyYW5zZm9ybSB9XG4gICAgfCB7IGtpbmQ6IFwiYnJ1c2hcIjsgbGFzdFg6IG51bWJlcjsgbGFzdFk6IG51bWJlciB9XG4gICAgfCB7IGtpbmQ6IFwiY3JvcFwiOyBzdGFydFg6IG51bWJlcjsgc3RhcnRZOiBudW1iZXIgfTtcblxuY29uc3QgSEFORExFX0NVUlNPUlM6IFJlY29yZDxIYW5kbGVJZCwgc3RyaW5nPiA9IHtcbiAgICBudzogXCJud3NlLXJlc2l6ZVwiLFxuICAgIG46IFwibnMtcmVzaXplXCIsXG4gICAgbmU6IFwibmVzdy1yZXNpemVcIixcbiAgICBlOiBcImV3LXJlc2l6ZVwiLFxuICAgIHNlOiBcIm53c2UtcmVzaXplXCIsXG4gICAgczogXCJucy1yZXNpemVcIixcbiAgICBzdzogXCJuZXN3LXJlc2l6ZVwiLFxuICAgIHc6IFwiZXctcmVzaXplXCIsXG59O1xuXG5mdW5jdGlvbiBwb2ludEluc2lkZUxheWVyKGxheWVyOiBMYXllciwgcG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGN4ID0gbGF5ZXIueCArIGxheWVyLncgLyAyO1xuICAgIGNvbnN0IGN5ID0gbGF5ZXIueSArIGxheWVyLmggLyAyO1xuICAgIGNvbnN0IGFuZ2xlID0gLWxheWVyLnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBkeCA9IHBvaW50LnggLSBjeDtcbiAgICBjb25zdCBkeSA9IHBvaW50LnkgLSBjeTtcbiAgICBjb25zdCBsb2NhbFggPSBkeCAqIE1hdGguY29zKGFuZ2xlKSAtIGR5ICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IGxvY2FsWSA9IGR4ICogTWF0aC5zaW4oYW5nbGUpICsgZHkgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGxvY2FsWCkgPD0gbGF5ZXIudyAvIDIgJiYgTWF0aC5hYnMobG9jYWxZKSA8PSBsYXllci5oIC8gMjtcbn1cblxuZnVuY3Rpb24gTGF5ZXJWaWV3KHtcbiAgICBsYXllcixcbiAgICBwcmV2aWV3QmxlbmQsXG4gICAgZWRpdGluZyxcbn06IHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgcHJldmlld0JsZW5kPzogc3RyaW5nO1xuICAgIGVkaXRpbmc/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IGFzc2V0ID0gdXNlQXNzZXRFbnRyeShsYXllci5hc3NldElkKTtcbiAgICBjb25zdCB0YXJnZXRTcmMgPSBhc3NldCA/IGRpc3BsYXlTcmMoYXNzZXQpIDogbnVsbDtcbiAgICAvLyBLZWVwIHRoZSBwcmV2aW91cyBiaXRtYXAgdmlzaWJsZSB1bnRpbCB0aGUgbmV4dCBvbmUgaXMgZGVjb2RlZCBzbyBhc3NldFxuICAgIC8vIHN3YXBzIChicnVzaCBjb21taXRzKSBkb24ndCBibGFuayB0aGUgbGF5ZXIgZm9yIGEgZnJhbWUuXG4gICAgY29uc3QgW2RyYXduU3JjLCBzZXREcmF3blNyY10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPih0YXJnZXRTcmMpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdGFyZ2V0U3JjKSB7XG4gICAgICAgICAgICBzZXREcmF3blNyYyhudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxpdmUgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhbGl2ZSkgc2V0RHJhd25TcmModGFyZ2V0U3JjKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IHNob3c7XG4gICAgICAgIGltZy5vbmVycm9yID0gc2hvdztcbiAgICAgICAgaW1nLnNyYyA9IHRhcmdldFNyYztcbiAgICAgICAgaWYgKGltZy5jb21wbGV0ZSkgc2hvdygpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgYWxpdmUgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGFyZ2V0U3JjXSk7XG4gICAgY29uc3Qgc3JjID0gZHJhd25TcmMgPz8gdGFyZ2V0U3JjO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgaGVpZ2h0OiBsYXllci5oLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtsYXllci54fXB4LCAke2xheWVyLnl9cHgpIHJvdGF0ZSgke2xheWVyLnJvdGF0aW9ufWRlZykgc2NhbGVYKCR7bGF5ZXIuZmxpcFggPyAtMSA6IDF9KWAsXG4gICAgICAgIG9wYWNpdHk6IGxheWVyLm9wYWNpdHksXG4gICAgICAgIGRpc3BsYXk6IGxheWVyLnZpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgbWl4QmxlbmRNb2RlOiBwcmV2aWV3QmxlbmQgPz8gbGF5ZXIuYmxlbmRNb2RlLFxuICAgICAgICB2aXNpYmlsaXR5OiBlZGl0aW5nID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxuICAgIH07XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBhbmltYXRlLXB1bHNlIGJnLW5ldXRyYWwtNTAwLzMwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9e2xheWVyLm5hbWV9XG4gICAgICAgICAgICBkYXRhLWxheWVyaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMCBtYXgtdy1ub25lIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgb25Mb2FkPXsoKSA9PiBub3RlTGF5ZXJTcmNQcmVzZW50ZWQoc3JjKX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBJbmxpbmVUZXh0RWRpdG9yKHsgbGF5ZXIgfTogeyBsYXllcjogTGF5ZXIgfSkge1xuICAgIGNvbnN0IGVkaXRpbmcgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEVkaXRpbmcpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCB0ZXh0ID0gbGF5ZXIudGV4dDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgIGVsLnNlbGVjdCgpO1xuICAgIH0sIFtsYXllci5pZF0pO1xuICAgIGlmICghZWRpdGluZyB8fCAhdGV4dCB8fCBlZGl0aW5nLmlkICE9PSBsYXllci5pZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcGFkZGluZyA9IE1hdGgubWF4KDQsIE1hdGguY2VpbCh0ZXh0LmZvbnRTaXplICogMC4xNCkpO1xuICAgIGNvbnN0IGxpbmVzID0gZWRpdGluZy5kcmFmdC5yZXBsYWNlKC9cXHIvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgcmFzdGVyV2lkdGggPSB0ZXh0LnJhc3RlcldpZHRoID8/IGxheWVyLnc7XG4gICAgY29uc3QgcmFzdGVySGVpZ2h0ID0gdGV4dC5yYXN0ZXJIZWlnaHQgPz8gbGF5ZXIuaDtcbiAgICBjb25zdCBzY2FsZVggPSByYXN0ZXJXaWR0aCA+IDAgPyBsYXllci53IC8gcmFzdGVyV2lkdGggOiAxO1xuICAgIGNvbnN0IHNjYWxlWSA9IHJhc3RlckhlaWdodCA+IDAgPyBsYXllci5oIC8gcmFzdGVySGVpZ2h0IDogMTtcbiAgICBjb25zdCBlZGl0V2lkdGggPSBNYXRoLm1heChyYXN0ZXJXaWR0aCwgTWF0aC5tYXgoLi4ubGluZXMubWFwKChsaW5lKSA9PiBNYXRoLm1heCgxLCBsaW5lLmxlbmd0aCkpKSAqIHRleHQuZm9udFNpemUgKiAwLjY4ICsgcGFkZGluZyAqIDIpO1xuICAgIGNvbnN0IGVkaXRIZWlnaHQgPSBNYXRoLm1heChyYXN0ZXJIZWlnaHQsIGxpbmVzLmxlbmd0aCAqIHRleHQuZm9udFNpemUgKiB0ZXh0LmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGF0YS10ZXh0LWVkaXRvcj1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLXRleHQtZWRpdG9yLXdyYXBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBsZWZ0OiBsYXllci54LFxuICAgICAgICAgICAgICAgIHRvcDogbGF5ZXIueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7bGF5ZXIucm90YXRpb259ZGVnKWAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dC1lZGl0b3I9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtdGV4dC1lZGl0b3JcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0aW5nLmRyYWZ0fVxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHdyYXA9XCJvZmZcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxheWVyLmZsaXBYID8gbGF5ZXIudyA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGVkaXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBlZGl0SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke2xheWVyLmZsaXBYID8gLXNjYWxlWCA6IHNjYWxlWH0sICR7c2NhbGVZfSlgLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRleHQuZm9udEZhbWlseSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRleHQuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRleHQuZm9udFdlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogdGV4dC5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IHRleHQuYWxpZ24sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0ZXh0LmNvbG9yLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25JbnB1dD17KGU6IEV2ZW50KSA9PiBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiB7IGlkOiBsYXllci5pZCwgZHJhZnQ6IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgfSB9KX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyhlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBlLnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dD8uY2xvc2VzdChcIi5wcm9wZXJ0aWVzLXBhbmVsLCAudG9vbGJhci1jb2xvcnMsIC50b29sLWNvbG9yLXBvcG92ZXJcIikpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IHRleHRFZGl0aW5nOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQ/LmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3Rpb25Cb3goe1xuICAgIGxheWVyLFxuICAgIHpvb20sXG4gICAgc2luZ2xlLFxufToge1xuICAgIGxheWVyOiBMYXllcjtcbiAgICB6b29tOiBudW1iZXI7XG4gICAgc2luZ2xlOiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IGhhbmRsZVNpemUgPSAxMSAvIHpvb207XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogbGF5ZXIudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bGF5ZXIueH1weCwgJHtsYXllci55fXB4KSByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJvcmRlci1za3ktNDAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJXaWR0aDogMS41IC8gem9vbSwgYm9yZGVyU3R5bGU6IFwic29saWRcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtzaW5nbGUgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgey8qIHJvdGF0ZSBoYW5kbGUgc3RlbSArIGtub2IgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXNreS00MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTIyIC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41IC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyIC8gem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYW5kbGU9XCJyb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtYXV0byBhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1za3ktNTAwIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0yNiAvIHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwiY3Jvc3NoYWlyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7SEFORExFX0lEUy5tYXAoKGlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1oYW5kbGU9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtYXV0byBhYnNvbHV0ZSByb3VuZGVkLVsycHhdIGJvcmRlciBib3JkZXItc2t5LTUwMCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7SEFORExFU1tpZF0ueCAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtIQU5ETEVTW2lkXS55ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogSEFORExFX0NVUlNPUlNbaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FudmFzU3RhZ2UoKSB7XG4gICAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gICAgY29uc3QgdmlldyA9IHVzZUVkaXRvcigocykgPT4gcy52aWV3KTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgICBjb25zdCB0b29sID0gdXNlRWRpdG9yKChzKSA9PiBzLnRvb2wpO1xuICAgIGNvbnN0IHNwYWNlUGFuID0gdXNlRWRpdG9yKChzKSA9PiBzLnNwYWNlUGFuKTtcbiAgICBjb25zdCBmaXRWZXJzaW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLmZpdFZlcnNpb24pO1xuICAgIGNvbnN0IGJydXNoQ29sb3IgPSB1c2VFZGl0b3IoKHMpID0+IHMuZm9yZWdyb3VuZENvbG9yKTtcbiAgICBjb25zdCBicnVzaFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hTaXplKTtcbiAgICBjb25zdCBicnVzaEhhcmRuZXNzID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoSGFyZG5lc3MpO1xuICAgIGNvbnN0IGJydXNoT3BhY2l0eSA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaE9wYWNpdHkpO1xuICAgIGNvbnN0IGJydXNoRmxvdyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEZsb3cpO1xuICAgIGNvbnN0IGNyb3BSZWN0ID0gdXNlRWRpdG9yKChzKSA9PiBzLmNyb3BSZWN0KTtcbiAgICBjb25zdCBzbmFwR3VpZGVzID0gdXNlRWRpdG9yKChzKSA9PiBzLnNuYXBHdWlkZXMpO1xuICAgIGNvbnN0IGJsZW5kUHJldmlldyA9IHVzZUVkaXRvcigocykgPT4gcy5ibGVuZFByZXZpZXcpO1xuICAgIGNvbnN0IHRleHRFZGl0aW5nID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRFZGl0aW5nKTtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZ2VzdHVyZVJlZiA9IHVzZVJlZjxHZXN0dXJlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcGFubmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgYnJ1c2hDYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyQnJ1c2hPdmVybGF5Q2xlYXIoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG4gICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpPy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gYnJ1c2hEYWIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGJydXNoU2l6ZSAvIDI7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGJydXNoRmxvdyAvIDEwMDtcbiAgICAgICAgaWYgKGJydXNoSGFyZG5lc3MgPj0gOTkpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBicnVzaENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgcmFkaXVzICogYnJ1c2hIYXJkbmVzcyAvIDEwMCwgeCwgeSwgcmFkaXVzKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBicnVzaENvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgJHticnVzaENvbG9yfTAwYCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJydXNoU2VnbWVudChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJvbVg6IG51bWJlciwgZnJvbVk6IG51bWJlciwgdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdCh0b1ggLSBmcm9tWCwgdG9ZIC0gZnJvbVkpO1xuICAgICAgICBjb25zdCBzcGFjaW5nID0gTWF0aC5tYXgoMSwgYnJ1c2hTaXplICogMC4xMik7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKGRpc3RhbmNlIC8gc3BhY2luZykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gaSAvIHN0ZXBzO1xuICAgICAgICAgICAgYnJ1c2hEYWIoY3R4LCBmcm9tWCArICh0b1ggLSBmcm9tWCkgKiB0LCBmcm9tWSArICh0b1kgLSBmcm9tWSkgKiB0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZpZXdwb3J0RWwuY3VycmVudCA9IHJlZi5jdXJyZW50O1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdmlld3BvcnRFbC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBGaXQgdGhlIGFydGJvYXJkIG9uIG9wZW4gYW5kIHdoZW4gcmVxdWVzdGVkLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZpdERvYygpO1xuICAgIH0sIFtkb2M/LmlkLCBmaXRWZXJzaW9uXSk7XG5cbiAgICAvLyBXaGVlbCBtdXN0IGJlIGEgbm9uLXBhc3NpdmUgbmF0aXZlIGxpc3RlbmVyIHRvIHByZXZlbnREZWZhdWx0IHJlbGlhYmx5LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25XaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB7IHZpZXc6IHYgfSA9IGdldFN0YXRlKCk7XG4gICAgICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICAgICAgICAgIHpvb21BdENsaWVudChcbiAgICAgICAgICAgICAgICAgICAgZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIHYuem9vbSAqIE1hdGguZXhwKC1lLmRlbHRhWSAqIHdoZWVsWm9vbVNlbnNpdGl2aXR5KHYuem9vbSkpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlUGFuKHYucGFuWCAtIGUuZGVsdGFYLCB2LnBhblkgLSBlLmRlbHRhWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwpO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHBhbk1vZGUgPSB0b29sID09PSBcImhhbmRcIiB8fCBzcGFjZVBhbjtcblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZTogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwgfHwgZS5idXR0b24gPT09IDIpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuICAgICAgICBpZiAoc3RhdGUudGV4dEVkaXRpbmcgJiYgIXRhcmdldC5jbG9zZXN0KFwiW2RhdGEtdGV4dC1lZGl0b3JdXCIpKSB7XG4gICAgICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuYnV0dG9uID09PSAxIHx8IHBhbk1vZGUpIHtcbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBraW5kOiBcInBhblwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xpZW50WDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIHN0YXJ0Q2xpZW50WTogZS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIHN0YXJ0UGFuWDogc3RhdGUudmlldy5wYW5YLFxuICAgICAgICAgICAgICAgIHN0YXJ0UGFuWTogc3RhdGUudmlldy5wYW5ZLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhbm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBpbnNpZGUgPSAhIXN0YXRlLmRvYyAmJiB3b3JsZC54ID49IDAgJiYgd29ybGQueSA+PSAwICYmIHdvcmxkLnggPD0gc3RhdGUuZG9jLndpZHRoICYmIHdvcmxkLnkgPD0gc3RhdGUuZG9jLmhlaWdodDtcbiAgICAgICAgaWYgKHRvb2wgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICBpZiAoIWluc2lkZSB8fCAhc3RhdGUuZG9jKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBsYXllcklkID0gdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1sYXllcmlkXVwiKT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBzdGF0ZS5kb2MubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICAgICAgICAgICAgaWYgKGxheWVyPy50ZXh0KSBiZWdpblRleHRFZGl0aW5nKGxheWVyLmlkKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYWRkVGV4dExheWVyKHdvcmxkKTtcbiAgICAgICAgICAgICAgICBpZiAoaWQpIGJlZ2luVGV4dEVkaXRpbmcoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b29sID09PSBcImJydXNoXCIpIHtcbiAgICAgICAgICAgIGlmICghaW5zaWRlIHx8ICFzdGF0ZS5kb2MpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGJydXNoQ2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXM/LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgIGlmICghY2FudmFzIHx8ICFjdHgpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChjYW52YXMud2lkdGggIT09IHN0YXRlLmRvYy53aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBzdGF0ZS5kb2MuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc3RhdGUuZG9jLndpZHRoO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5kb2MuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmVnaW5CcnVzaEdlc3R1cmUoKTtcbiAgICAgICAgICAgIGJydXNoRGFiKGN0eCwgd29ybGQueCwgd29ybGQueSk7XG4gICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSB7IGtpbmQ6IFwiYnJ1c2hcIiwgbGFzdFg6IHdvcmxkLngsIGxhc3RZOiB3b3JsZC55IH07XG4gICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvb2wgPT09IFwiY3JvcFwiKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2VsZWN0aW9uLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHsga2luZDogXCJjcm9wXCIsIHN0YXJ0WDogd29ybGQueCwgc3RhcnRZOiB3b3JsZC55IH07XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IGNyb3BSZWN0OiB7IHg6IHdvcmxkLngsIHk6IHdvcmxkLnksIHc6IDAsIGg6IDAgfSB9KTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRhcmdldFxuICAgICAgICAgICAgLmNsb3Nlc3QoXCJbZGF0YS1oYW5kbGVdXCIpXG4gICAgICAgICAgICA/LmdldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIpO1xuICAgICAgICBpZiAoaGFuZGxlICYmIHN0YXRlLnNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gc3RhdGUuZG9jPy5sYXllcnMuZmluZChcbiAgICAgICAgICAgICAgICAobCkgPT4gbC5pZCA9PT0gc3RhdGUuc2VsZWN0aW9uWzBdLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0OiBMYXllclRyYW5zZm9ybSA9IHsgLi4ubGF5ZXIgfTtcbiAgICAgICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPT09IFwicm90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8geyBraW5kOiBcInJvdGF0ZVwiLCBpZDogbGF5ZXIuaWQsIHN0YXJ0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogXCJzY2FsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBoYW5kbGUgYXMgSGFuZGxlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVySWQgPSB0YXJnZXRcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiW2RhdGEtbGF5ZXJpZF1cIilcbiAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgICAgICBpZiAobGF5ZXJJZCkge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0b2dnbGVTZWxlY3RlZChsYXllcklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLnNlbGVjdGlvbi5pbmNsdWRlcyhsYXllcklkKSkge1xuICAgICAgICAgICAgICAgIHNldFNlbGVjdGlvbihbbGF5ZXJJZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0cyA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW10pIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMobGF5ZXIuaWQpKVxuICAgICAgICAgICAgICAgICAgICBzdGFydHMuc2V0KGxheWVyLmlkLCB7IHg6IGxheWVyLngsIHk6IGxheWVyLnkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAga2luZDogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnRYOiB3b3JsZC54LFxuICAgICAgICAgICAgICAgIHN0YXJ0WTogd29ybGQueSxcbiAgICAgICAgICAgICAgICBzdGFydHMsXG4gICAgICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsLnNldFBvaW50ZXJDYXB0dXJlKGUucG9pbnRlcklkKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNlbGVjdGlvbihbXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlOiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZ2VzdHVyZSA9IGdlc3R1cmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFnZXN0dXJlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJwYW5cIikge1xuICAgICAgICAgICAgc2V0U3RhdGVQYW4oXG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5zdGFydFBhblggKyAoZS5jbGllbnRYIC0gZ2VzdHVyZS5zdGFydENsaWVudFgpLFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuc3RhcnRQYW5ZICsgKGUuY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRDbGllbnRZKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwiYnJ1c2hcIikge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgaWYgKCFjdHgpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkb2Mud2lkdGgsIHdvcmxkLngpKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihkb2MuaGVpZ2h0LCB3b3JsZC55KSk7XG4gICAgICAgICAgICBicnVzaFNlZ21lbnQoY3R4LCBnZXN0dXJlLmxhc3RYLCBnZXN0dXJlLmxhc3RZLCB4LCB5KTtcbiAgICAgICAgICAgIGdlc3R1cmUubGFzdFggPSB4O1xuICAgICAgICAgICAgZ2VzdHVyZS5sYXN0WSA9IHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImNyb3BcIikge1xuICAgICAgICAgICAgY29uc3QgeCA9IHdvcmxkLng7XG4gICAgICAgICAgICBjb25zdCB5ID0gd29ybGQueTtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IHsgeDogTWF0aC5taW4oZ2VzdHVyZS5zdGFydFgsIHgpLCB5OiBNYXRoLm1pbihnZXN0dXJlLnN0YXJ0WSwgeSksIHc6IE1hdGguYWJzKHggLSBnZXN0dXJlLnN0YXJ0WCksIGg6IE1hdGguYWJzKHkgLSBnZXN0dXJlLnN0YXJ0WSkgfSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IHdvcmxkLnggLSBnZXN0dXJlLnN0YXJ0WDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gd29ybGQueSAtIGdlc3R1cmUuc3RhcnRZO1xuICAgICAgICAgICAgaWYgKCFnZXN0dXJlLm1vdmVkICYmIE1hdGguaHlwb3QoZHgsIGR5KSAqIGdldFN0YXRlKCkudmlldy56b29tIDwgMilcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBnZXN0dXJlLm1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBzbmFwcGVkRHggPSBkeDtcbiAgICAgICAgICAgIGxldCBzbmFwcGVkRHkgPSBkeTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmluZyA9IFsuLi5nZXN0dXJlLnN0YXJ0cy5rZXlzKCldO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgICAgICBjb25zdCBib3hlcyA9IGN1cnJlbnQuZmlsdGVyKChsKSA9PiBtb3ZpbmcuaW5jbHVkZXMobC5pZCkpLm1hcCgobCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZ2VzdHVyZS5zdGFydHMuZ2V0KGwuaWQpITtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBzdGFydC54ICsgZHgsIHk6IHN0YXJ0LnkgKyBkeSwgdzogbC53LCBoOiBsLmggfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSB7IHg6IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi54KSksIHk6IE1hdGgubWluKC4uLmJveGVzLm1hcCgoYikgPT4gYi55KSksIHI6IE1hdGgubWF4KC4uLmJveGVzLm1hcCgoYikgPT4gYi54ICsgYi53KSksIGI6IE1hdGgubWF4KC4uLmJveGVzLm1hcCgoYikgPT4gYi55ICsgYi5oKSkgfTtcbiAgICAgICAgICAgIGNvbnN0IHhBbmNob3JzID0gW2dyb3VwLngsIChncm91cC54ICsgZ3JvdXAucikgLyAyLCBncm91cC5yXTtcbiAgICAgICAgICAgIGNvbnN0IHlBbmNob3JzID0gW2dyb3VwLnksIChncm91cC55ICsgZ3JvdXAuYikgLyAyLCBncm91cC5iXTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVycyA9IGN1cnJlbnQuZmlsdGVyKChsKSA9PiAhbW92aW5nLmluY2x1ZGVzKGwuaWQpICYmIGwudmlzaWJsZSk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRYID0gWzAsIGRvYy53aWR0aCAvIDIsIGRvYy53aWR0aCwgLi4ub3RoZXJzLmZsYXRNYXAoKGwpID0+IFtsLngsIGwueCArIGwudyAvIDIsIGwueCArIGwud10pXTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFkgPSBbMCwgZG9jLmhlaWdodCAvIDIsIGRvYy5oZWlnaHQsIC4uLm90aGVycy5mbGF0TWFwKChsKSA9PiBbbC55LCBsLnkgKyBsLmggLyAyLCBsLnkgKyBsLmhdKV07XG4gICAgICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSA2IC8gZ2V0U3RhdGUoKS52aWV3Lnpvb207XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IHRocmVzaG9sZCArIDE7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IHRocmVzaG9sZCArIDE7XG4gICAgICAgICAgICBsZXQgZ3VpZGVYOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBsZXQgZ3VpZGVZOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB4QW5jaG9ycykgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0WCkgaWYgKE1hdGguYWJzKHRhcmdldCAtIGFuY2hvcikgPCBNYXRoLmFicyhvZmZzZXRYKSkgeyBvZmZzZXRYID0gdGFyZ2V0IC0gYW5jaG9yOyBndWlkZVggPSB0YXJnZXQ7IH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHlBbmNob3JzKSBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRZKSBpZiAoTWF0aC5hYnModGFyZ2V0IC0gYW5jaG9yKSA8IE1hdGguYWJzKG9mZnNldFkpKSB7IG9mZnNldFkgPSB0YXJnZXQgLSBhbmNob3I7IGd1aWRlWSA9IHRhcmdldDsgfVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFgpIDw9IHRocmVzaG9sZCkgc25hcHBlZER4ICs9IG9mZnNldFg7IGVsc2UgZ3VpZGVYID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKG9mZnNldFkpIDw9IHRocmVzaG9sZCkgc25hcHBlZER5ICs9IG9mZnNldFk7IGVsc2UgZ3VpZGVZID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyBzbmFwR3VpZGVzOiBndWlkZVggPT09IHVuZGVmaW5lZCAmJiBndWlkZVkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB7IHg6IGd1aWRlWCwgeTogZ3VpZGVZIH0gfSk7XG4gICAgICAgICAgICBjb25zdCBwYXRjaGVzID0gbmV3IE1hcDxzdHJpbmcsIFRyYW5zZm9ybVBhdGNoPigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbaWQsIHN0YXJ0XSBvZiBnZXN0dXJlLnN0YXJ0cykge1xuICAgICAgICAgICAgICAgIHBhdGNoZXMuc2V0KGlkLCB7IHg6IHN0YXJ0LnggKyBzbmFwcGVkRHgsIHk6IHN0YXJ0LnkgKyBzbmFwcGVkRHkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBseVRyYW5zaWVudChwYXRjaGVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHNjYWxlRnJvbUhhbmRsZShcbiAgICAgICAgICAgICAgICBnZXN0dXJlLnN0YXJ0LFxuICAgICAgICAgICAgICAgIGdlc3R1cmUuaGFuZGxlLFxuICAgICAgICAgICAgICAgIHdvcmxkLFxuICAgICAgICAgICAgICAgIGUuc2hpZnRLZXksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXBwbHlUcmFuc2llbnQobmV3IE1hcChbW2dlc3R1cmUuaWQsIG5leHRdXSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZyb21Qb2ludGVyKGdlc3R1cmUuc3RhcnQsIHdvcmxkLCBlLnNoaWZ0S2V5KTtcbiAgICAgICAgYXBwbHlUcmFuc2llbnQobmV3IE1hcChbW2dlc3R1cmUuaWQsIHsgcm90YXRpb24gfV1dKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyVXAoKSB7XG4gICAgICAgIGNvbnN0IGdlc3R1cmUgPSBnZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHBhbm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBzZXRTdGF0ZSh7IHNuYXBHdWlkZXM6IG51bGwgfSk7XG4gICAgICAgIGlmICghZ2VzdHVyZSB8fCBnZXN0dXJlLmtpbmQgPT09IFwicGFuXCIpIHJldHVybjtcblxuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcImJydXNoXCIpIHtcbiAgICAgICAgICAgIGVuZEJydXNoR2VzdHVyZSgpO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gYnJ1c2hDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuICAgICAgICAgICAgICAgIHZvaWQgcGFpbnRCcnVzaFN0cm9rZShzcmMsIGJydXNoT3BhY2l0eSAvIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJjcm9wXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBnZXRTdGF0ZSgpLmNyb3BSZWN0O1xuICAgICAgICAgICAgaWYgKCFyZWN0IHx8IHJlY3QudyA8IDIgfHwgcmVjdC5oIDwgMikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKHsgY3JvcFJlY3Q6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCkuc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkgdm9pZCBjcm9wU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBlbHNlIGNyb3BDYW52YXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVycyA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuXG4gICAgICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBpZiAoIWdlc3R1cmUubW92ZWQpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpZCwgc3RhcnRdIG9mIGdlc3R1cmUuc3RhcnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55IH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJNb3ZlXCIsIGNoYW5nZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChnZXN0dXJlLmlkKTtcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICBpZiAoZ2VzdHVyZS5raW5kID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgdywgaCB9ID0gZ2VzdHVyZS5zdGFydDtcbiAgICAgICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSZXNpemVcIiwgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHsgeCwgeSwgdywgaCB9LFxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55LCB3OiBsYXllci53LCBoOiBsYXllci5oIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSb3RhdGVcIiwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBsYXllci5pZCxcbiAgICAgICAgICAgICAgICBiZWZvcmU6IHsgcm90YXRpb246IGdlc3R1cmUuc3RhcnQucm90YXRpb24gfSxcbiAgICAgICAgICAgICAgICBhZnRlcjogeyByb3RhdGlvbjogbGF5ZXIucm90YXRpb24gfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhdCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoZmlsZVRvSW1wb3J0ZWRJbWFnZSkpO1xuICAgICAgICBhZGRJbWFnZUxheWVycyhpbWFnZXMsIGF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBsYXllcklkID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiW2RhdGEtbGF5ZXJpZF1cIik/LmdldEF0dHJpYnV0ZShcImRhdGEtbGF5ZXJpZFwiKTtcbiAgICAgICAgY29uc3QgZGlyZWN0ID0gc3RhdGUuZG9jPy5sYXllcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbGF5ZXJJZCAmJiBpdGVtLnRleHQpO1xuICAgICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgICBjb25zdCBsYXllciA9IGRpcmVjdCA/PyBbLi4uKHN0YXRlLmRvYz8ubGF5ZXJzID8/IFtdKV0ucmV2ZXJzZSgpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiBpdGVtLnRleHQgJiYgcG9pbnRJbnNpZGVMYXllcihpdGVtLCB3b3JsZCkpO1xuICAgICAgICBpZiAobGF5ZXI/LnRleHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJlZ2luVGV4dEVkaXRpbmcobGF5ZXIuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcnMgPSBkb2MubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgKGwpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsLmlkKSAmJiBsLnZpc2libGUsXG4gICAgKTtcbiAgICBjb25zdCBjdXJzb3IgPSBwYW5Nb2RlXG4gICAgICAgID8gcGFubmluZ1JlZi5jdXJyZW50XG4gICAgICAgICAgICA/IFwiZ3JhYmJpbmdcIlxuICAgICAgICAgICAgOiBcImdyYWJcIlxuICAgICAgICA6IHRvb2wgPT09IFwiYnJ1c2hcIiB8fCB0b29sID09PSBcImNyb3BcIiB8fCB0b29sID09PSBcInRleHRcIiA/IFwiY3Jvc3NoYWlyXCIgOiBcImRlZmF1bHRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWRvdHMgY2FudmFzLXN0YWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvciB9fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICAgICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgb25EYmxDbGljaz17b25Eb3VibGVDbGlja31cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17KGU6IERyYWdFdmVudCkgPT4gdm9pZCBvbkRyb3AoZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3ZpZXcucGFuWH1weCwgJHt2aWV3LnBhbll9cHgpIHNjYWxlKCR7dmlldy56b29tfSlgLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgYXJ0Ym9hcmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRvYy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZG9jLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllclZpZXcga2V5PXtsYXllci5pZH0gbGF5ZXI9e2xheWVyfSBlZGl0aW5nPXt0ZXh0RWRpdGluZz8uaWQgPT09IGxheWVyLmlkfSBwcmV2aWV3QmxlbmQ9e2JsZW5kUHJldmlldyAmJiBzZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXIuaWQpID8gYmxlbmRQcmV2aWV3IDogdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2JydXNoQ2FudmFzUmVmfSBjbGFzc05hbWU9XCJicnVzaC1vdmVybGF5XCIgc3R5bGU9e3sgb3BhY2l0eTogYnJ1c2hPcGFjaXR5IC8gMTAwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0RWRpdGluZyA/IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIuaWQgPT09IHRleHRFZGl0aW5nLmlkKS5tYXAoKGxheWVyKSA9PiA8SW5saW5lVGV4dEVkaXRvciBrZXk9e2xheWVyLmlkfSBsYXllcj17bGF5ZXJ9IC8+KSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyF0ZXh0RWRpdGluZyAmJiAodG9vbCA9PT0gXCJtb3ZlXCIgfHwgdG9vbCA9PT0gXCJ0ZXh0XCIpID8gc2VsZWN0ZWRMYXllcnMubWFwKChsYXllcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbT17dmlldy56b29tfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlPXt0b29sID09PSBcIm1vdmVcIiAmJiBzZWxlY3RlZExheWVycy5sZW5ndGggPT09IDF9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSkgOiB0b29sID09PSBcImNyb3BcIiA/IHNlbGVjdGVkTGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJveCBrZXk9e2xheWVyLmlkfSBsYXllcj17bGF5ZXJ9IHpvb209e3ZpZXcuem9vbX0gc2luZ2xlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge3NuYXBHdWlkZXM/LnggIT09IHVuZGVmaW5lZCA/IDxkaXYgY2xhc3NOYW1lPVwic25hcC1ndWlkZSB2ZXJ0aWNhbFwiIHN0eWxlPXt7IGxlZnQ6IHNuYXBHdWlkZXMueCwgaGVpZ2h0OiBkb2MuaGVpZ2h0IH19IC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7c25hcEd1aWRlcz8ueSAhPT0gdW5kZWZpbmVkID8gPGRpdiBjbGFzc05hbWU9XCJzbmFwLWd1aWRlIGhvcml6b250YWxcIiBzdHlsZT17eyB0b3A6IHNuYXBHdWlkZXMueSwgd2lkdGg6IGRvYy53aWR0aCB9fSAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge3Rvb2wgPT09IFwiY3JvcFwiICYmIGNyb3BSZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AtYm94XCIgc3R5bGU9e3sgbGVmdDogY3JvcFJlY3QueCwgdG9wOiBjcm9wUmVjdC55LCB3aWR0aDogY3JvcFJlY3QudywgaGVpZ2h0OiBjcm9wUmVjdC5oLCBib3JkZXJXaWR0aDogMS41IC8gdmlldy56b29tIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExIC8gdmlldy56b29tLCBwYWRkaW5nOiBgJHsyIC8gdmlldy56b29tfXB4ICR7NSAvIHZpZXcuem9vbX1weGAgfX0+e01hdGgucm91bmQoY3JvcFJlY3Qudyl9IFx1MDBENyB7TWF0aC5yb3VuZChjcm9wUmVjdC5oKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gSWNvbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHRpdGxlIH06IEljb25Qcm9wcyAmIHsgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBhcmlhLWhpZGRlbj17dGl0bGUgPyB1bmRlZmluZWQgOiBcInRydWVcIn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHJvbGU9e3RpdGxlID8gXCJpbWdcIiA6IHVuZGVmaW5lZH1cbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjEuOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICA+XG4gICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuLy8gS2VwdCBhcyBsb2NhbCBjb21wb25lbnRzIGJlY2F1c2UgTGFrZWJlZCBjYXBzdWxlcyBvbmx5IGFsbG93IExha2ViZWQgYW5kXG4vLyByZWxhdGl2ZSBpbXBvcnRzLiBUaGUgQVBJIG1pcnJvcnMgdGhlIHNtYWxsIGljb24gY29tcG9uZW50cyBmcm9tIHJlYWN0LWljb25zLlxuZXhwb3J0IGNvbnN0IEZpQXJyb3dMZWZ0ID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xOSAxMkg1bTcgNy03LTcgNy03XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ2hldnJvbkRvd24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTYgOSA2IDYgNi02XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ29weSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxyZWN0IHg9XCI5XCIgeT1cIjlcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIiByeD1cIjFcIiAvPjxwYXRoIGQ9XCJNNSAxNUg0YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF2MVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaURvd25sb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAzdjEybS00LTQgNCA0IDQtNE00IDIwaDE2XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRWRpdDMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDIwaDlcIiAvPjxwYXRoIGQ9XCJNMTYuNSAzLjVhMi4xIDIuMSAwIDAgMSAzIDNMOCAxOGwtNCAxIDEtNFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlFeWUgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIgMTJzMy41LTYgMTAtNiAxMCA2IDEwIDYtMy41IDYtMTAgNlMyIDEyIDIgMTJaXCIgLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUV5ZU9mZiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtMyAzIDE4IDE4TTEwLjYgMTAuNmEyIDIgMCAwIDAgMi44IDIuOE05LjkgNS4yQTExIDExIDAgMCAxIDEyIDVjNi41IDAgMTAgNyAxMCA3YTE2IDE2IDAgMCAxLTIuMSAzLjFNNi42IDYuNkMzLjUgOC40IDIgMTIgMiAxMnMzLjUgNyAxMCA3YTEwIDEwIDAgMCAwIDQuMS0uOVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUhhbmQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTggMTFWNmEyIDIgMCAwIDEgNCAwdjQtNmEyIDIgMCAwIDEgNCAwdjYtNGEyIDIgMCAwIDEgNCAwdjdhOCA4IDAgMCAxLTggOGgtMWE3IDcgMCAwIDEtNS43LTNMMi41IDE0YTIgMiAwIDAgMSAzLTIuNkw4IDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpSW1hZ2UgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgLz48Y2lyY2xlIGN4PVwiOC41XCIgY3k9XCI4LjVcIiByPVwiMS41XCIgLz48cGF0aCBkPVwibTIxIDE1LTUtNUw1IDIxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpTGF5ZXJzID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xMiAyIDEwIDUtMTAgNUwyIDdsMTAtNVpcIiAvPjxwYXRoIGQ9XCJtMiAxMiAxMCA1IDEwLTVNMiAxN2wxMCA1IDEwLTVcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNaW51cyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1vb24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIxIDEzQTkgOSAwIDEgMSAxMSAzYTcgNyAwIDAgMCAxMCAxMFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNb3VzZVBvaW50ZXIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTQgMyA3IDE3IDIuMy02LjdMMjAgMTEgNCAzWlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVBsdXMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDV2MTRNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVJlZG8yID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xNSA0IDUgNS01IDVcIiAvPjxwYXRoIGQ9XCJNMjAgOWgtOWE3IDcgMCAwIDAtNyA3djFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlTdW4gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjRcIiAvPjxwYXRoIGQ9XCJNMTIgMnYybTAgMTZ2Mk00LjkgNC45bDEuNCAxLjRtMTEuNCAxMS40IDEuNCAxLjRNMiAxMmgybTE2IDBoMk00LjkgMTkuMWwxLjQtMS40TTE3LjcgNi4zbDEuNC0xLjRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlUcmFzaDIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTMgNmgxOE04IDZWNGg4djJtMyAwLTEgMTVINkw1IDZtNSA0djdtNC03djdcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlVbmRvMiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNOSA0IDQgOWw1IDVcIiAvPjxwYXRoIGQ9XCJNNCA5aDlhNyA3IDAgMCAxIDcgN3YxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpVXBsb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAxNVYzbS00IDQgNC00IDQgNE00IDE0djZoMTZ2LTZcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlCcnVzaCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtMTQuNSA0LjUgNSA1TDEwIDE5SDV2LTVaXCIgLz48cGF0aCBkPVwibTEyIDcgNSA1TTUgMTljLTEuNSAwLTIuNSAxLTIuNSAyXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ3JvcCA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNNiAydjE0YTIgMiAwIDAgMCAyIDJoMTRNMiA2aDE0YTIgMiAwIDAgMSAyIDJ2MTRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlUeXBlID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk00IDVWM2gxNnYyTTkgMjFoNk0xMiAzdjE4XCIgLz48L0ljb24+O1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEJMRU5EX01PREVTLCB0eXBlIEJsZW5kTW9kZSwgdHlwZSBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21taXRUcmFuc2Zvcm1zLCBzZXRTZWxlY3Rpb25CbGVuZE1vZGUsIHVwZGF0ZVRleHRMYXllciB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuXG50eXBlIEZpZWxkUHJvcHMgPSB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlcjsgc3RlcD86IG51bWJlcjsgdW5pdD86IHN0cmluZzsgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXJGaWVsZCh7IGxhYmVsLCB2YWx1ZSwgbWluLCBtYXgsIHN0ZXAgPSAxLCB1bml0ID0gXCJcIiwgb25DaGFuZ2UgfTogRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLXNsaWRlclwiPlxuICAgICAgPGxhYmVsPjxzcGFuPntsYWJlbH08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwicHJvcC12YWx1ZVwiPntNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMH17dW5pdH08L3NwYW4+PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49e21pbn0gbWF4PXttYXh9IHN0ZXA9e3N0ZXB9IHZhbHVlPXt2YWx1ZX0gb25JbnB1dD17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZShOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTnVtYmVyRmllbGQoeyBsYWJlbCwgdmFsdWUsIG1pbiwgbWF4LCBzdGVwID0gMSwgdW5pdCA9IFwiXCIsIG9uQ2hhbmdlIH06IEZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHJvcC1maWVsZCBwcm9wLW51bWJlclwiPlxuICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlci13cmFwXCI+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49e21pbn0gbWF4PXttYXh9IHN0ZXA9e3N0ZXB9IHZhbHVlPXtNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4geyBjb25zdCBuZXh0ID0gTnVtYmVyKChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpOyBpZiAoTnVtYmVyLmlzRmluaXRlKG5leHQpKSBvbkNoYW5nZShNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgbmV4dCkpKTsgfX0gLz48aT57dW5pdH08L2k+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEcm9wZG93bjxUIGV4dGVuZHMgc3RyaW5nPih7IGxhYmVsLCB2YWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogVDsgb3B0aW9uczogQXJyYXk8eyB2YWx1ZTogVDsgbGFiZWw6IHN0cmluZyB9Pjsgb25DaGFuZ2U6ICh2YWx1ZTogVCkgPT4gdm9pZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT1cInByb3AtZmllbGQgcHJvcC1zZWxlY3RcIj48c3Bhbj57bGFiZWx9PC9zcGFuPjxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiBvbkNoYW5nZSgoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSBhcyBUKX0+e29wdGlvbnMubWFwKChvcHRpb24pID0+IDxvcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PntvcHRpb24ubGFiZWx9PC9vcHRpb24+KX08L3NlbGVjdD48L2xhYmVsPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlKHsgbGFiZWwsIGNoZWNrZWQsIG9uQ2hhbmdlIH06IHsgbGFiZWw6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbjsgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkIH0pIHtcbiAgcmV0dXJuIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9wLWZpZWxkIHByb3AtdG9nZ2xlXCI+PHNwYW4+e2xhYmVsfTwvc3Bhbj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4gb25DaGFuZ2UoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKX0gLz48aSAvPjwvbGFiZWw+O1xufVxuXG50eXBlIEhzdiA9IHsgaDogbnVtYmVyOyBzOiBudW1iZXI7IHY6IG51bWJlciB9O1xuXG5mdW5jdGlvbiBoZXhSZ2IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCB2YWxpZCA9IC9eI1swLTlhLWZdezZ9JC9pLnRlc3QoaGV4KSA/IGhleCA6IFwiIzAwMDAwMFwiO1xuICByZXR1cm4gW051bWJlci5wYXJzZUludCh2YWxpZC5zbGljZSgxLCAzKSwgMTYpLCBOdW1iZXIucGFyc2VJbnQodmFsaWQuc2xpY2UoMywgNSksIDE2KSwgTnVtYmVyLnBhcnNlSW50KHZhbGlkLnNsaWNlKDUsIDcpLCAxNildO1xufVxuXG5mdW5jdGlvbiByZ2JIZXgocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHBhcnQgPSAodmFsdWU6IG51bWJlcikgPT4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHZhbHVlKSkpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHJldHVybiBgIyR7cGFydChyKX0ke3BhcnQoZyl9JHtwYXJ0KGIpfWA7XG59XG5cbmZ1bmN0aW9uIHJnYkhzdihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyKTogSHN2IHtcbiAgY29uc3QgW3JuLCBnbiwgYm5dID0gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTVdO1xuICBjb25zdCBtYXggPSBNYXRoLm1heChybiwgZ24sIGJuKSwgbWluID0gTWF0aC5taW4ocm4sIGduLCBibiksIGQgPSBtYXggLSBtaW47XG4gIGxldCBoID0gMDtcbiAgaWYgKGQpIGggPSBtYXggPT09IHJuID8gKChnbiAtIGJuKSAvIGQpICUgNiA6IG1heCA9PT0gZ24gPyAoYm4gLSBybikgLyBkICsgMiA6IChybiAtIGduKSAvIGQgKyA0O1xuICByZXR1cm4geyBoOiAoKGggKiA2MCkgKyAzNjApICUgMzYwLCBzOiBtYXggPyBkIC8gbWF4IDogMCwgdjogbWF4IH07XG59XG5cbmZ1bmN0aW9uIGhzdlJnYih7IGgsIHMsIHYgfTogSHN2KTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgYyA9IHYgKiBzLCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSksIG0gPSB2IC0gYztcbiAgY29uc3QgdmFsdWVzID0gaCA8IDYwID8gW2MsIHgsIDBdIDogaCA8IDEyMCA/IFt4LCBjLCAwXSA6IGggPCAxODAgPyBbMCwgYywgeF0gOiBoIDwgMjQwID8gWzAsIHgsIGNdIDogaCA8IDMwMCA/IFt4LCAwLCBjXSA6IFtjLCAwLCB4XTtcbiAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAodmFsdWUgKyBtKSAqIDI1NSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JQaWNrZXIoeyB2YWx1ZSwgb25DaGFuZ2UgfTogeyB2YWx1ZTogc3RyaW5nOyBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQgfSkge1xuICBjb25zdCBbciwgZywgYl0gPSBoZXhSZ2IodmFsdWUpO1xuICBjb25zdCBoc3YgPSByZ2JIc3YociwgZywgYik7XG4gIGNvbnN0IGh1ZUhleCA9IHJnYkhleCguLi5oc3ZSZ2IoeyBoOiBoc3YuaCwgczogMSwgdjogMSB9KSk7XG5cbiAgZnVuY3Rpb24gc2V0SHN2KG5leHQ6IEhzdikgeyBvbkNoYW5nZShyZ2JIZXgoLi4uaHN2UmdiKG5leHQpKSk7IH1cbiAgZnVuY3Rpb24gcGlja1N2KGU6IFBvaW50ZXJFdmVudCkge1xuICAgIGNvbnN0IGVsID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBzZXRIc3YoeyBoOiBoc3YuaCwgczogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoKSksIHY6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIDEgLSAoZS5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQpKSB9KTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBleWVkcm9wKCkge1xuICAgIGNvbnN0IEV5ZURyb3BwZXJDdG9yID0gKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgRXllRHJvcHBlcj86IG5ldyAoKSA9PiB7IG9wZW46ICgpID0+IFByb21pc2U8eyBzUkdCSGV4OiBzdHJpbmcgfT4gfSB9KS5FeWVEcm9wcGVyO1xuICAgIGlmICghRXllRHJvcHBlckN0b3IpIHJldHVybjtcbiAgICB0cnkgeyBvbkNoYW5nZSgoYXdhaXQgbmV3IEV5ZURyb3BwZXJDdG9yKCkub3BlbigpKS5zUkdCSGV4KTsgfSBjYXRjaCB7IC8qIGNhbmNlbGxlZCAqLyB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGlja2VyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2LXBpY2tlclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaHVlSGV4IH19IG9uUG9pbnRlckRvd249e3BpY2tTdn0gb25Qb2ludGVyTW92ZT17KGU6IFBvaW50ZXJFdmVudCkgPT4geyBpZiAoZS5idXR0b25zID09PSAxKSBwaWNrU3YoZSk7IH19PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBsZWZ0OiBgJHtoc3YucyAqIDEwMH0lYCwgdG9wOiBgJHsoMSAtIGhzdi52KSAqIDEwMH0lYCB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaHVlLXNsaWRlclwiIGFyaWEtbGFiZWw9XCJIdWVcIiB0eXBlPVwicmFuZ2VcIiBtaW49ezB9IG1heD17MzU5fSB2YWx1ZT17TWF0aC5yb3VuZChoc3YuaCl9IG9uSW5wdXQ9eyhlOiBFdmVudCkgPT4gc2V0SHN2KHsgLi4uaHN2LCBoOiBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkgfSl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXJvd1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2VyIGNvbG9yLXN3YXRjaFwiPjxpIHN0eWxlPXt7IGJhY2tncm91bmQ6IHZhbHVlIH19IC8+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaGV4LWlucHV0XCIgYXJpYS1sYWJlbD1cIkhleCBjb2xvclwiIHZhbHVlPXt2YWx1ZS50b1VwcGVyQ2FzZSgpfSBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7IGNvbnN0IG5leHQgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlOyBpZiAoL14jWzAtOWEtZl17Nn0kL2kudGVzdChuZXh0KSkgb25DaGFuZ2UobmV4dCk7IH19IC8+XG4gICAgICAgIHsod2luZG93IGFzIHVua25vd24gYXMgeyBFeWVEcm9wcGVyPzogdW5rbm93biB9KS5FeWVEcm9wcGVyID8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZXllZHJvcHBlclwiIHRpdGxlPVwiUGljayBjb2xvciBmcm9tIHNjcmVlblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgZXllZHJvcCgpfT5cdTIzM0U8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJnYi1yb3dcIj57KFtyLCBnLCBiXSBhcyBudW1iZXJbXSkubWFwKChjaGFubmVsLCBpbmRleCkgPT4gPGxhYmVsIGtleT17aW5kZXh9PjxzcGFuPntcIlJHQlwiW2luZGV4XX08L3NwYW4+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49ezB9IG1heD17MjU1fSB2YWx1ZT17Y2hhbm5lbH0gb25DaGFuZ2U9eyhlOiBFdmVudCkgPT4geyBjb25zdCByZ2IgPSBbciwgZywgYl07IHJnYltpbmRleF0gPSBOdW1iZXIoKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7IG9uQ2hhbmdlKHJnYkhleChyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdKSk7IH19IC8+PC9sYWJlbD4pfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3Rpb25Qcm9wZXJ0aWVzKHsgbGF5ZXJJZCB9OiB7IGxheWVySWQ6IHN0cmluZyB9KSB7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBsYXllciA9IGRvYz8ubGF5ZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGxheWVySWQpO1xuICBpZiAoIWxheWVyKSByZXR1cm4gbnVsbDtcbiAgZnVuY3Rpb24gY2hhbmdlKGtleTogXCJvcGFjaXR5XCIgfCBcInZpc2libGVcIiwgdmFsdWU6IG51bWJlciB8IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBsYXllcklkKTtcbiAgICBpZiAoIWN1cnJlbnQpIHJldHVybjtcbiAgICBjb21taXRUcmFuc2Zvcm1zKFwiUHJvcGVydGllc1wiLCBbeyBpZDogbGF5ZXJJZCwgYmVmb3JlOiB7IFtrZXldOiBjdXJyZW50W2tleV0gfSwgYWZ0ZXI6IHsgW2tleV06IHZhbHVlIH0gfV0pO1xuICB9XG4gIHJldHVybiA8PlxuICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIk9wYWNpdHlcIiB2YWx1ZT17TWF0aC5yb3VuZChsYXllci5vcGFjaXR5ICogMTAwKX0gbWluPXswfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IGNoYW5nZShcIm9wYWNpdHlcIiwgdiAvIDEwMCl9IC8+XG4gICAgPERyb3Bkb3duPEJsZW5kTW9kZT4gbGFiZWw9XCJCbGVuZFwiIHZhbHVlPXtsYXllci5ibGVuZE1vZGV9IG9wdGlvbnM9e0JMRU5EX01PREVTLm1hcCgodmFsdWUpID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUucmVwbGFjZSgvLS9nLCBcIiBcIikucmVwbGFjZSgvXi4vLCAobGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSkgfSkpfSBvbkNoYW5nZT17c2V0U2VsZWN0aW9uQmxlbmRNb2RlfSAvPlxuICAgIDxUb2dnbGUgbGFiZWw9XCJWaXNpYmxlXCIgY2hlY2tlZD17bGF5ZXIudmlzaWJsZX0gb25DaGFuZ2U9eyh2KSA9PiBjaGFuZ2UoXCJ2aXNpYmxlXCIsIHYpfSAvPlxuICA8Lz47XG59XG5cbmZ1bmN0aW9uIFRleHREZWZhdWx0cygpIHtcbiAgY29uc3QgZm9udEZhbWlseSA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0Rm9udEZhbWlseSk7XG4gIGNvbnN0IGZvbnRTaXplID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRGb250U2l6ZSk7XG4gIGNvbnN0IGZvbnRXZWlnaHQgPSB1c2VFZGl0b3IoKHMpID0+IHMudGV4dEZvbnRXZWlnaHQpO1xuICBjb25zdCBhbGlnbiA9IHVzZUVkaXRvcigocykgPT4gcy50ZXh0QWxpZ24pO1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gdXNlRWRpdG9yKChzKSA9PiBzLnRleHRMaW5lSGVpZ2h0KTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uIHRleHQtcHJvcGVydGllc1wiPlxuICAgIDxwIGNsYXNzTmFtZT1cInRvb2wtaGludFwiPkNsaWNrIHRoZSBjYW52YXMgdG8gYWRkIHRleHQuPC9wPlxuICAgIDxEcm9wZG93biBsYWJlbD1cIkZvbnRcIiB2YWx1ZT17Zm9udEZhbWlseX0gb3B0aW9ucz17W1wiSW50ZXJcIiwgXCJBcmlhbFwiLCBcIkdlb3JnaWFcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIlRpbWVzIE5ldyBSb21hblwiXS5tYXAoKHZhbHVlKSA9PiAoeyB2YWx1ZSwgbGFiZWw6IHZhbHVlIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRGb250RmFtaWx5OiB2IH0pfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1ncmlkXCI+PE51bWJlckZpZWxkIGxhYmVsPVwiU2l6ZVwiIHZhbHVlPXtmb250U2l6ZX0gbWluPXs2fSBtYXg9ezUwMH0gdW5pdD1cInB4XCIgb25DaGFuZ2U9eyh2KSA9PiBzZXRTdGF0ZSh7IHRleHRGb250U2l6ZTogdiB9KX0gLz48RHJvcGRvd24gbGFiZWw9XCJXZWlnaHRcIiB2YWx1ZT17U3RyaW5nKGZvbnRXZWlnaHQpfSBvcHRpb25zPXtbMTAwLDMwMCw0MDAsNTAwLDYwMCw3MDAsOTAwXS5tYXAoKHYpID0+ICh7IHZhbHVlOiBTdHJpbmcodiksIGxhYmVsOiBTdHJpbmcodikgfSkpfSBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgdGV4dEZvbnRXZWlnaHQ6IE51bWJlcih2KSB9KX0gLz48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3AtZmllbGRcIj48c3Bhbj5BbGlnbm1lbnQ8L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJzZWdtZW50LWNvbnRyb2xcIj57KFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSBhcyBUZXh0QWxpZ25bXSkubWFwKCh2YWx1ZSkgPT4gPGJ1dHRvbiBrZXk9e3ZhbHVlfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXthbGlnbiA9PT0gdmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyB0ZXh0QWxpZ246IHZhbHVlIH0pfT57dmFsdWVbMF0udG9VcHBlckNhc2UoKX08L2J1dHRvbj4pfTwvZGl2PjwvZGl2PlxuICAgIDxOdW1iZXJGaWVsZCBsYWJlbD1cIkxpbmUgaGVpZ2h0XCIgdmFsdWU9e2xpbmVIZWlnaHR9IG1pbj17MC42fSBtYXg9ezN9IHN0ZXA9ezAuMDV9IG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyB0ZXh0TGluZUhlaWdodDogdiB9KX0gLz5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydGllc1BhbmVsKHsgaGVpZ2h0IH06IHsgaGVpZ2h0PzogbnVtYmVyIH0pIHtcbiAgY29uc3QgdG9vbCA9IHVzZUVkaXRvcigocykgPT4gcy50b29sKTtcbiAgY29uc3Qgc2VsZWN0aW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLnNlbGVjdGlvbik7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBicnVzaFNpemUgPSB1c2VFZGl0b3IoKHMpID0+IHMuYnJ1c2hTaXplKTtcbiAgY29uc3QgYnJ1c2hIYXJkbmVzcyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEhhcmRuZXNzKTtcbiAgY29uc3QgYnJ1c2hPcGFjaXR5ID0gdXNlRWRpdG9yKChzKSA9PiBzLmJydXNoT3BhY2l0eSk7XG4gIGNvbnN0IGJydXNoRmxvdyA9IHVzZUVkaXRvcigocykgPT4gcy5icnVzaEZsb3cpO1xuICBjb25zdCBzZWxlY3RlZCA9IGRvYz8ubGF5ZXJzLmZpbmQoKGxheWVyKSA9PiBsYXllci5pZCA9PT0gc2VsZWN0aW9uW3NlbGVjdGlvbi5sZW5ndGggLSAxXSk7XG4gIGNvbnN0IHRleHQgPSBzZWxlY3RlZD8udGV4dDtcbiAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRleHQpIHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiB0ZXh0LmNvbG9yIH0pOyB9LCBbc2VsZWN0ZWQ/LmlkXSk7XG5cbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcGFuZWxcIiBzdHlsZT17aGVpZ2h0ID8geyBoZWlnaHQgfSA6IHVuZGVmaW5lZH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkXCI+PHNwYW4+e3Rvb2wgPT09IFwiYnJ1c2hcIiA/IFwiQnJ1c2hcIiA6IHRvb2wgPT09IFwidGV4dFwiIHx8IHRleHQgPyBcIlRleHRcIiA6IHNlbGVjdGVkID8gXCJQcm9wZXJ0aWVzXCIgOiBcIkNhbnZhc1wifTwvc3Bhbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtYm9keVwiPlxuICAgICAge3Rvb2wgPT09IFwiYnJ1c2hcIiA/IDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uXCI+XG4gICAgICAgIDxTbGlkZXJGaWVsZCBsYWJlbD1cIlNpemVcIiB2YWx1ZT17YnJ1c2hTaXplfSBtaW49ezF9IG1heD17MzAwfSB1bml0PVwicHhcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hTaXplOiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJIYXJkbmVzc1wiIHZhbHVlPXticnVzaEhhcmRuZXNzfSBtaW49ezB9IG1heD17MTAwfSB1bml0PVwiJVwiIG9uQ2hhbmdlPXsodikgPT4gc2V0U3RhdGUoeyBicnVzaEhhcmRuZXNzOiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJPcGFjaXR5XCIgdmFsdWU9e2JydXNoT3BhY2l0eX0gbWluPXsxfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hPcGFjaXR5OiB2IH0pfSAvPlxuICAgICAgICA8U2xpZGVyRmllbGQgbGFiZWw9XCJGbG93XCIgdmFsdWU9e2JydXNoRmxvd30gbWluPXsxfSBtYXg9ezEwMH0gdW5pdD1cIiVcIiBvbkNoYW5nZT17KHYpID0+IHNldFN0YXRlKHsgYnJ1c2hGbG93OiB2IH0pfSAvPlxuICAgICAgPC9kaXY+IDogdGV4dCAmJiBzZWxlY3RlZCA/IDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uIHRleHQtcHJvcGVydGllc1wiPlxuICAgICAgICA8RHJvcGRvd24gbGFiZWw9XCJGb250XCIgdmFsdWU9e3RleHQuZm9udEZhbWlseX0gb3B0aW9ucz17W1wiSW50ZXJcIiwgXCJBcmlhbFwiLCBcIkdlb3JnaWFcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIlRpbWVzIE5ldyBSb21hblwiXS5tYXAoKHZhbHVlKSA9PiAoeyB2YWx1ZSwgbGFiZWw6IHZhbHVlIH0pKX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgZm9udEZhbWlseTogdiB9LCBcIkZvbnRcIil9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcC1ncmlkXCI+PE51bWJlckZpZWxkIGxhYmVsPVwiU2l6ZVwiIHZhbHVlPXt0ZXh0LmZvbnRTaXplfSBtaW49ezZ9IG1heD17NTAwfSB1bml0PVwicHhcIiBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBmb250U2l6ZTogdiB9LCBcIlRleHQgc2l6ZVwiKX0gLz48RHJvcGRvd24gbGFiZWw9XCJXZWlnaHRcIiB2YWx1ZT17U3RyaW5nKHRleHQuZm9udFdlaWdodCl9IG9wdGlvbnM9e1sxMDAsMzAwLDQwMCw1MDAsNjAwLDcwMCw5MDBdLm1hcCgodikgPT4gKHsgdmFsdWU6IFN0cmluZyh2KSwgbGFiZWw6IFN0cmluZyh2KSB9KSl9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlVGV4dExheWVyKHNlbGVjdGVkLmlkLCB7IGZvbnRXZWlnaHQ6IE51bWJlcih2KSB9LCBcIlRleHQgd2VpZ2h0XCIpfSAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3AtZmllbGRcIj48c3Bhbj5BbGlnbm1lbnQ8L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJzZWdtZW50LWNvbnRyb2xcIj57KFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSBhcyBUZXh0QWxpZ25bXSkubWFwKChhbGlnbikgPT4gPGJ1dHRvbiBrZXk9e2FsaWdufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXt0ZXh0LmFsaWduID09PSBhbGlnbiA/IFwiYWN0aXZlXCIgOiBcIlwifSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUZXh0TGF5ZXIoc2VsZWN0ZWQuaWQsIHsgYWxpZ24gfSwgXCJUZXh0IGFsaWdubWVudFwiKX0+e2FsaWduWzBdLnRvVXBwZXJDYXNlKCl9PC9idXR0b24+KX08L2Rpdj48L2Rpdj5cbiAgICAgICAgPE51bWJlckZpZWxkIGxhYmVsPVwiTGluZSBoZWlnaHRcIiB2YWx1ZT17dGV4dC5saW5lSGVpZ2h0fSBtaW49ezAuNn0gbWF4PXszfSBzdGVwPXswLjA1fSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZC5pZCwgeyBsaW5lSGVpZ2h0OiB2IH0sIFwiTGluZSBoZWlnaHRcIil9IC8+XG4gICAgICA8L2Rpdj4gOiB0b29sID09PSBcInRleHRcIiA/IDxUZXh0RGVmYXVsdHMgLz4gOiBzZWxlY3RlZCA/IDxkaXYgY2xhc3NOYW1lPVwicHJvcC1zZWN0aW9uXCI+PFNlbGVjdGlvblByb3BlcnRpZXMgbGF5ZXJJZD17c2VsZWN0ZWQuaWR9IC8+PC9kaXY+IDogPHAgY2xhc3NOYW1lPVwicHJvcGVydGllcy1lbXB0eVwiPlNlbGVjdCBhIGxheWVyIG9yIGNob29zZSBhIHRvb2wuPC9wPn1cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPjtcbn1cbiIsICIvLyBMYXllcnMgcGFuZWw6IHRvcC1maXJzdCBsaXN0IHdpdGggdmlzaWJpbGl0eSB0b2dnbGVzLCBpbmxpbmUgcmVuYW1lLFxuLy8gZHJhZy10by1yZW9yZGVyLCBhbiBvcGFjaXR5IHNsaWRlciwgYW5kIGR1cGxpY2F0ZS9kZWxldGUgYWN0aW9ucy5cblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGNsZWFuTmFtZSwgdHlwZSBMYXllciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgYWRkQmxhbmtMYXllcixcbiAgICByZW5hbWVMYXllcixcbiAgICByZW9yZGVyTGF5ZXIsXG4gICAgc2V0U2VsZWN0aW9uLFxuICAgIHRvZ2dsZVNlbGVjdGVkLFxuICAgIHRvZ2dsZVZpc2libGUsXG59IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VBc3NldEVudHJ5LCBkaXNwbGF5U3JjIH0gZnJvbSBcIi4uL3N0YXRlL2Fzc2V0c1wiO1xuaW1wb3J0IHsgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyBGaUV5ZSwgRmlFeWVPZmYsIEZpTGF5ZXJzLCBGaVBsdXMgfSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgUHJvcGVydGllc1BhbmVsIH0gZnJvbSBcIi4vUHJvcGVydGllc1BhbmVsXCI7XG5cbmZ1bmN0aW9uIExheWVyVGh1bWIoeyBsYXllciB9OiB7IGxheWVyOiBMYXllciB9KSB7XG4gICAgY29uc3QgYXNzZXQgPSB1c2VBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrZXIgbGF5ZXItdGh1bWJcIj5cbiAgICAgICAgICAgIHthc3NldCA/IDxpbWcgYWx0PVwiXCIgc3JjPXtkaXNwbGF5U3JjKGFzc2V0KX0gZHJhZ2dhYmxlPXtmYWxzZX0gLz4gOiBudWxsfVxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gTGF5ZXJSb3dWaWV3KHtcbiAgICBsYXllcixcbiAgICBkaXNwbGF5SW5kZXgsXG4gICAgc2VsZWN0ZWQsXG4gICAgb25EcmFnRnJvbSxcbiAgICBkcm9wTWFyayxcbn06IHtcbiAgICBsYXllcjogTGF5ZXI7XG4gICAgZGlzcGxheUluZGV4OiBudW1iZXI7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgb25EcmFnRnJvbTogKHNsb3Q6IG51bWJlcikgPT4gdm9pZDtcbiAgICBkcm9wTWFyazogXCJhYm92ZVwiIHwgXCJiZWxvd1wiIHwgbnVsbDtcbn0pIHtcbiAgICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBjb21taXRSZW5hbWUoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICByZW5hbWVMYXllcihsYXllci5pZCwgY2xlYW5OYW1lKGlucHV0LnZhbHVlLCBsYXllci5uYW1lKSk7XG4gICAgICAgIHNldEVkaXRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXshZWRpdGluZ31cbiAgICAgICAgICAgIGRhdGEtZGlzcGxheS1pbmRleD17ZGlzcGxheUluZGV4fVxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9eyhlOiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlcj8uc2V0RGF0YShcInRleHQvcGxhaW5cIiwgU3RyaW5nKGRpc3BsYXlJbmRleCkpO1xuICAgICAgICAgICAgICAgIG9uRHJhZ0Zyb20oZGlzcGxheUluZGV4KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB0b2dnbGVTZWxlY3RlZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZXRTZWxlY3Rpb24oW2xheWVyLmlkXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGF5ZXItcm93ICR7c2VsZWN0ZWQgPyBcInNlbGVjdGVkXCIgOiBcIlwifSAke2xheWVyLnZpc2libGUgPyBcIlwiIDogXCJoaWRkZW5cIn1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZHJvcE1hcmsgPyA8c3BhbiBjbGFzc05hbWU9e2Bkcm9wLW1hcmsgJHtkcm9wTWFya31gfSAvPiA6IG51bGx9XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xheWVyLnZpc2libGUgPyBcIkhpZGUgbGF5ZXJcIiA6IFwiU2hvdyBsYXllclwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVZpc2libGUobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmlzaWJpbGl0eVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc2libGUgPyA8RmlFeWUgLz4gOiA8RmlFeWVPZmYgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxMYXllclRodW1iIGxheWVyPXtsYXllcn0gLz5cbiAgICAgICAgICAgIHtlZGl0aW5nID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2NvbW1pdFJlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHNldEVkaXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkRibENsaWNrPXsoKSA9PiBzZXRFZGl0aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9saT5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJzUGFuZWwoKSB7XG4gICAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLnNlbGVjdGlvbik7XG4gICAgY29uc3QgW2Ryb3BTbG90LCBzZXREcm9wU2xvdF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbcGFuZWxXaWR0aCwgc2V0UGFuZWxXaWR0aF0gPSB1c2VTdGF0ZSgoKSA9PiBNYXRoLm1heCgyMjAsIE1hdGgubWluKDQyMCwgTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXBhbmVsLXdpZHRoXCIpKSB8fCAyNDQpKSk7XG4gICAgY29uc3QgW3Byb3BlcnRpZXNIZWlnaHQsIHNldFByb3BlcnRpZXNIZWlnaHRdID0gdXNlU3RhdGUoKCkgPT4gTWF0aC5tYXgoMTUwLCBNYXRoLm1pbig1MDAsIE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlLWVkaXRvci1wcm9wZXJ0aWVzLWhlaWdodFwiKSkgfHwgMjMwKSkpO1xuICAgIGNvbnN0IGRyYWdGcm9tUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHBhbmVsUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcblxuICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIERpc3BsYXkgb3JkZXIgaXMgdG9wIGxheWVyIGZpcnN0OyB0aGUgZG9jIHN0b3JlcyBib3R0b20tZmlyc3QuXG4gICAgY29uc3QgZGlzcGxheSA9IFsuLi5kb2MubGF5ZXJzXS5yZXZlcnNlKCk7XG4gICAgY29uc3QgY291bnQgPSBkb2MubGF5ZXJzLmxlbmd0aDtcblxuICAgIGZ1bmN0aW9uIHNsb3RGcm9tRXZlbnQoZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgcm93ID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0KFwiW2RhdGEtZGlzcGxheS1pbmRleF1cIik7XG4gICAgICAgIGlmICghcm93KSByZXR1cm4gZHJvcFNsb3QgPz8gMDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIocm93LmdldEF0dHJpYnV0ZShcImRhdGEtZGlzcGxheS1pbmRleFwiKSk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiBlLmNsaWVudFkgPCByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiA/IGluZGV4IDogaW5kZXggKyAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRHJvcChlOiBEcmFnRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmcm9tID0gZHJhZ0Zyb21SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGRyb3BTbG90O1xuICAgICAgICBkcmFnRnJvbVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgc2V0RHJvcFNsb3QobnVsbCk7XG4gICAgICAgIGlmIChmcm9tID09PSBudWxsIHx8IHNsb3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgYWRqdXN0ZWQgPSBzbG90ID4gZnJvbSA/IHNsb3QgLSAxIDogc2xvdDtcbiAgICAgICAgaWYgKGFkanVzdGVkID09PSBmcm9tKSByZXR1cm47XG4gICAgICAgIC8vIENvbnZlcnQgZGlzcGxheSBjb29yZGluYXRlcyAodG9wLWZpcnN0KSB0byBkb2MgY29vcmRpbmF0ZXMgKGJvdHRvbS1maXJzdCkuXG4gICAgICAgIHJlb3JkZXJMYXllcihjb3VudCAtIDEgLSBmcm9tLCBjb3VudCAtIDEgLSBhZGp1c3RlZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSZXNpemUoa2luZDogXCJ3aWR0aFwiIHwgXCJwcm9wZXJ0aWVzXCIsIGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxUb3AgPSBwYW5lbFJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPz8gMDtcbiAgICAgICAgY29uc3Qgb25Nb3ZlID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwid2lkdGhcIikgc2V0UGFuZWxXaWR0aChNYXRoLm1heCgyMjAsIE1hdGgubWluKDQyMCwgd2luZG93LmlubmVyV2lkdGggLSBlLmNsaWVudFgpKSk7XG4gICAgICAgICAgICBlbHNlIHNldFByb3BlcnRpZXNIZWlnaHQoTWF0aC5tYXgoMTUwLCBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjcsIGUuY2xpZW50WSAtIHBhbmVsVG9wKSkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvblVwID0gKGU6IFBvaW50ZXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgb25Nb3ZlKGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIG9uTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIG9uVXApO1xuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwid2lkdGhcIikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZS1lZGl0b3ItcGFuZWwtd2lkdGhcIiwgU3RyaW5nKE1hdGgubWF4KDIyMCwgTWF0aC5taW4oNDIwLCB3aW5kb3cuaW5uZXJXaWR0aCAtIGUuY2xpZW50WCkpKSk7XG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJwcm9wZXJ0aWVzXCIpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXByb3BlcnRpZXMtaGVpZ2h0XCIsIFN0cmluZyhNYXRoLm1heCgxNTAsIE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNywgZS5jbGllbnRZIC0gcGFuZWxUb3ApKSkpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgb25Nb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvblVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGUgcmVmPXtwYW5lbFJlZn0gY2xhc3NOYW1lPVwibGF5ZXJzLXBhbmVsXCIgc3R5bGU9e3sgd2lkdGg6IHBhbmVsV2lkdGggfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXdpZHRoLXJlc2l6ZXJcIiBvblBvaW50ZXJEb3duPXsoZTogUG9pbnRlckV2ZW50KSA9PiBzdGFydFJlc2l6ZShcIndpZHRoXCIsIGUpfSAvPlxuICAgICAgICAgICAgPFByb3BlcnRpZXNQYW5lbCBoZWlnaHQ9e3Byb3BlcnRpZXNIZWlnaHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnRpZXMtcmVzaXplclwiIG9uUG9pbnRlckRvd249eyhlOiBQb2ludGVyRXZlbnQpID0+IHN0YXJ0UmVzaXplKFwicHJvcGVydGllc1wiLCBlKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZCBsYXllcnMtaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxGaUxheWVycyAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkxheWVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBsYXllclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWFkZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEJsYW5rTGF5ZXIoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGaVBsdXMgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFNsb3Qoc2xvdEZyb21FdmVudChlKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0RHJvcFNsb3QobnVsbCl9XG4gICAgICAgICAgICAgICAgb25Ecm9wPXtvbkRyb3B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXkubWFwKChsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyUm93Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0Zyb209eyhzbG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ0Zyb21SZWYuY3VycmVudCA9IHNsb3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hcms9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BTbG90ID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWJvdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRyb3BTbG90ID09PSBpbmRleCArIDEgJiYgaW5kZXggPT09IGNvdW50IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZWxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge2NvdW50ID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tbGF5ZXJzXCI+Tm8gbGF5ZXJzIHlldC48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufVxuIiwgIi8vIExlZnQgdG9vbCByYWlsOiBtb3ZlIC8gaGFuZCB0b29scy5cblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZmluaXNoVGV4dEVkaXRpbmcsIHVwZGF0ZVRleHRMYXllciB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXRTdGF0ZSwgdXNlRWRpdG9yLCB0eXBlIFRvb2wgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IEZpQnJ1c2gsIEZpQ3JvcCwgRmlIYW5kLCBGaU1vdXNlUG9pbnRlciwgRmlUeXBlIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSBcIi4vUHJvcGVydGllc1BhbmVsXCI7XG5cbmNvbnN0IFRPT0xTOiBBcnJheTx7IGlkOiBUb29sOyBsYWJlbDogc3RyaW5nOyBoaW50OiBzdHJpbmc7IGljb246IHR5cGVvZiBGaUhhbmQgfT4gPSBbXG4gIHsgaWQ6IFwibW92ZVwiLCBsYWJlbDogXCJNb3ZlXCIsIGhpbnQ6IFwiVlwiLCBpY29uOiBGaU1vdXNlUG9pbnRlciB9LFxuICB7IGlkOiBcImhhbmRcIiwgbGFiZWw6IFwiSGFuZFwiLCBoaW50OiBcIkhcIiwgaWNvbjogRmlIYW5kIH0sXG4gIHsgaWQ6IFwidGV4dFwiLCBsYWJlbDogXCJUZXh0XCIsIGhpbnQ6IFwiVFwiLCBpY29uOiBGaVR5cGUgfSxcbiAgeyBpZDogXCJicnVzaFwiLCBsYWJlbDogXCJCcnVzaFwiLCBoaW50OiBcIkJcIiwgaWNvbjogRmlCcnVzaCB9LFxuICB7IGlkOiBcImNyb3BcIiwgbGFiZWw6IFwiQ3JvcFwiLCBoaW50OiBcIkNcIiwgaWNvbjogRmlDcm9wIH1cbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBUb29sYmFyKCkge1xuICBjb25zdCB0b29sID0gdXNlRWRpdG9yKChzKSA9PiBzLnRvb2wpO1xuICBjb25zdCBmb3JlZ3JvdW5kQ29sb3IgPSB1c2VFZGl0b3IoKHMpID0+IHMuZm9yZWdyb3VuZENvbG9yKTtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdXNlRWRpdG9yKChzKSA9PiBzLmJhY2tncm91bmRDb2xvcik7XG4gIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gZG9jPy5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3Rpb25bc2VsZWN0aW9uLmxlbmd0aCAtIDFdICYmIGxheWVyLnRleHQpO1xuICBjb25zdCBbY29sb3JPcGVuLCBzZXRDb2xvck9wZW5dID0gdXNlU3RhdGU8XCJmb3JlZ3JvdW5kXCIgfCBcImJhY2tncm91bmRcIiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB0ZXh0Q29sb3JUaW1lciA9IHVzZVJlZjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KHRleHRDb2xvclRpbWVyLmN1cnJlbnQpLCBbXSk7XG5cbiAgZnVuY3Rpb24gc2V0Rm9yZWdyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IHZhbHVlIH0pO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGV4dENvbG9yVGltZXIuY3VycmVudCk7XG4gICAgaWYgKHNlbGVjdGVkVGV4dD8udGV4dCkgdGV4dENvbG9yVGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHVwZGF0ZVRleHRMYXllcihzZWxlY3RlZFRleHQuaWQsIHsgY29sb3I6IHZhbHVlIH0sIFwiVGV4dCBjb2xvclwiKSwgMTgwKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ0b29sLXJhaWxcIj5cbiAgICAgIHtUT09MUy5tYXAoKHQpID0+IHtcbiAgICAgICAgY29uc3QgVG9vbEljb24gPSB0Lmljb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXt0LmlkfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17YCR7dC5sYWJlbH0gKCR7dC5oaW50fSlgfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dC5sYWJlbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgZmluaXNoVGV4dEVkaXRpbmcoKTsgc2V0U3RhdGUoeyB0b29sOiB0LmlkIH0pOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9vbC1idXR0b24gJHt0b29sID09PSB0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9vbEljb24gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWNvbG9yc1wiIHRpdGxlPVwiRm9yZWdyb3VuZCAvIGJhY2tncm91bmQgY29sb3JzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdsb2JhbC1zd2F0Y2ggYmFja2dyb3VuZFwiIGFyaWEtbGFiZWw9XCJFZGl0IGJhY2tncm91bmQgY29sb3JcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IgfX0gb25DbGljaz17KCkgPT4gc2V0Q29sb3JPcGVuKGNvbG9yT3BlbiA9PT0gXCJiYWNrZ3JvdW5kXCIgPyBudWxsIDogXCJiYWNrZ3JvdW5kXCIpfSAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJnbG9iYWwtc3dhdGNoIGZvcmVncm91bmRcIiBhcmlhLWxhYmVsPVwiRWRpdCBmb3JlZ3JvdW5kIGNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogZm9yZWdyb3VuZENvbG9yIH19IG9uQ2xpY2s9eygpID0+IHNldENvbG9yT3Blbihjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gbnVsbCA6IFwiZm9yZWdyb3VuZFwiKX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic3dhcC1jb2xvcnNcIiB0aXRsZT1cIlN3YXAgY29sb3JzIChYKVwiIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHsgZm9yZWdyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcjogZm9yZWdyb3VuZENvbG9yIH0pfT5cdTIxOTc8L2J1dHRvbj5cbiAgICAgICAge2NvbG9yT3BlbiA/IDxkaXYgY2xhc3NOYW1lPVwidG9vbC1jb2xvci1wb3BvdmVyXCIgb25Qb2ludGVyRG93bj17KGU6IFBvaW50ZXJFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+PGRpdiBjbGFzc05hbWU9XCJjb2xvci1wb3BvdmVyLWhlYWRcIj48c3Bhbj57Y29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IFwiRm9yZWdyb3VuZFwiIDogXCJCYWNrZ3JvdW5kXCJ9PC9zcGFuPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldENvbG9yT3BlbihudWxsKX0+XHUwMEQ3PC9idXR0b24+PC9kaXY+PENvbG9yUGlja2VyIHZhbHVlPXtjb2xvck9wZW4gPT09IFwiZm9yZWdyb3VuZFwiID8gZm9yZWdyb3VuZENvbG9yIDogYmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17Y29sb3JPcGVuID09PSBcImZvcmVncm91bmRcIiA/IHNldEZvcmVncm91bmQgOiAodmFsdWUpID0+IHNldFN0YXRlKHsgYmFja2dyb3VuZENvbG9yOiB2YWx1ZSB9KX0gLz48L2Rpdj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgRmlNb29uLCBGaVN1biB9IGZyb20gXCIuL0ljb25zXCI7XG5cbnR5cGUgVGhlbWUgPSBcImxpZ2h0XCIgfCBcImRhcmtcIjtcblxuZnVuY3Rpb24gcHJlZmVycmVkVGhlbWUoKTogVGhlbWUge1xuICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXRoZW1lXCIpO1xuICBpZiAoc2F2ZWQgPT09IFwibGlnaHRcIiB8fCBzYXZlZCA9PT0gXCJkYXJrXCIpIHJldHVybiBzYXZlZDtcbiAgcmV0dXJuIG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lVG9nZ2xlKCkge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPFRoZW1lPigoKSA9PiBwcmVmZXJyZWRUaGVtZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gdGhlbWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIiwgdGhlbWUpO1xuICB9LCBbdGhlbWVdKTtcblxuICBjb25zdCBuZXh0ID0gdGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvbiB0aGVtZS10b2dnbGVcIlxuICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke25leHR9IG1vZGVgfVxuICAgICAgdGl0bGU9e2BTd2l0Y2ggdG8gJHtuZXh0fSBtb2RlYH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKG5leHQpfVxuICAgID5cbiAgICAgIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyA8RmlTdW4gLz4gOiA8RmlNb29uIC8+fVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIiwgIi8vIEVkaXRvciBjaHJvbWU6IGJhY2sgbGluaywgcHJvamVjdCBuYW1lLCB1bmRvL3JlZG8sIHpvb20sIGV4cG9ydCwgYW5kIHRoZVxuLy8gcGVyc2lzdGVuY2Ugc3RhdHVzIGluZGljYXRvciBmZWQgYnkgdGhlIHdyaXRlLWJlaGluZCBxdWV1ZS5cblxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGNsZWFuTmFtZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGRvd25sb2FkUG5nIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IGFkZEltYWdlTGF5ZXJzLCByZW5hbWVQcm9qZWN0IH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IGNhblJlZG8sIGNhblVuZG8sIHJlZG8sIHVuZG8gfSBmcm9tIFwiLi4vc3RhdGUvaGlzdG9yeVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdEZpdCwgem9vbUJ5IH0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UgfSBmcm9tIFwiLi4vbGliL2ltYWdlXCI7XG5pbXBvcnQge1xuICAgIEZpQXJyb3dMZWZ0LFxuICAgIEZpRG93bmxvYWQsXG4gICAgRmlJbWFnZSxcbiAgICBGaU1pbnVzLFxuICAgIEZpUGx1cyxcbiAgICBGaVJlZG8yLFxuICAgIEZpVW5kbzIsXG59IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCIuL1RoZW1lVG9nZ2xlXCI7XG5cbmZ1bmN0aW9uIEljb25CdXR0b24oe1xuICAgIGxhYmVsLFxuICAgIG9uQ2xpY2ssXG4gICAgZGlzYWJsZWQsXG4gICAgY2hpbGRyZW4sXG59OiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRvcEJhcigpIHtcbiAgICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgICBjb25zdCB6b29tID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcuem9vbSk7XG4gICAgdXNlRWRpdG9yKChzKSA9PiBzLmhpc3RWZXJzaW9uKTtcbiAgICBjb25zdCBmaWxlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GaWxlcyhldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gWy4uLihpbnB1dC5maWxlcyA/PyBbXSldO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZXMubWFwKGZpbGVUb0ltcG9ydGVkSW1hZ2UpKTtcbiAgICAgICAgYWRkSW1hZ2VMYXllcnMoaW1hZ2VzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21taXROYW1lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNsZWFuTmFtZShpbnB1dC52YWx1ZSwgXCJVbnRpdGxlZFwiKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBuYW1lO1xuICAgICAgICByZW5hbWVQcm9qZWN0KG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidG9wYmFyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiIHRpdGxlPVwiQmFjayB0byBwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxGaUFycm93TGVmdCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAga2V5PXtkb2MuaWR9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkb2MubmFtZX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2NvbW1pdE5hbWV9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuYmx1cigpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wYmFyLW5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1zaXplXCI+XG4gICAgICAgICAgICAgICAge2RvYy53aWR0aH1cdTAwRDd7ZG9jLmhlaWdodH1cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiVW5kbyAoXHUyMzE4WilcIiBvbkNsaWNrPXt1bmRvfSBkaXNhYmxlZD17IWNhblVuZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpVW5kbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiUmVkbyAoXHUyMUU3XHUyMzE4WilcIiBvbkNsaWNrPXtyZWRvfSBkaXNhYmxlZD17IWNhblJlZG8oKX0+XG4gICAgICAgICAgICAgICAgPEZpUmVkbzIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb20tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlpvb20gb3V0IChcdTIzMTgtKVwiIG9uQ2xpY2s9eygpID0+IHpvb21CeSgtMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlNaW51cyAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0Rml0fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpdCB0byBzY3JlZW4gKFx1MjMxODApXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiem9vbS1idXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoem9vbSAqIDEwMCl9JVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGxhYmVsPVwiWm9vbSBpbiAoXHUyMzE4KylcIiBvbkNsaWNrPXsoKSA9PiB6b29tQnkoMSl9PlxuICAgICAgICAgICAgICAgICAgICA8RmlQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogRXZlbnQpID0+IHZvaWQgb25GaWxlcyhlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIGRvd25sb2FkUG5nKGdldFN0YXRlKCkuZG9jID8/IGRvYyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHByaW1hcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgRXhwb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cbiAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufVxuIiwgIi8vIFRoZSBlZGl0b3Igc2NyZWVuOiBsb2FkcyB0aGUgcHJvamVjdCBkb2MgZnJvbSB0aGUgbGl2ZSBxdWVyaWVzIGV4YWN0bHkgb25jZVxuLy8gcGVyIHByb2plY3QgaWQgKGFmdGVyIHRoYXQgdGhlIGxvY2FsIGRvYyBpcyBhdXRob3JpdGF0aXZlIGFuZCBxdWVyeSBwdXNoZXNcbi8vIGFyZSBpZ25vcmVkIFx1MjAxNCB0aGV5IGFyZSBqdXN0IG91ciBvd24gd3JpdGVzIGVjaG9pbmcgYmFjayksIGFuZCBvd25zIGdsb2JhbFxuLy8ga2V5Ym9hcmQgc2hvcnRjdXRzLlxuXG5pbXBvcnQgeyBMaW5rLCB1c2VRdWVyeSwgdXNlUGFyYW1zIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IExheWVyUm93LCBQcm9qZWN0TWV0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gIGNsb3NlUHJvamVjdCxcbiAgY29tYmluZVNlbGVjdGlvbixcbiAgY29weVNlbGVjdGlvbixcbiAgY3V0U2VsZWN0aW9uLFxuICBkZWxldGVTZWxlY3Rpb24sXG4gIGR1cGxpY2F0ZVNlbGVjdGlvbixcbiAgZmxpcFNlbGVjdGlvbkhvcml6b250YWwsXG4gIGZpbmlzaFRleHRFZGl0aW5nLFxuICBudWRnZVNlbGVjdGlvbixcbiAgb3BlblByb2plY3QsXG4gIHBhc3RlQ2xpcGJvYXJkLFxuICBzZXRTZWxlY3Rpb25cbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHF1ZXJ5UmVzdWx0IH0gZnJvbSBcIi4uL3N0YXRlL2FwaVwiO1xuaW1wb3J0IHsgcmVkbywgdW5kbyB9IGZyb20gXCIuLi9zdGF0ZS9oaXN0b3J5XCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVxdWVzdEZpdCwgem9vbUJ5IH0gZnJvbSBcIi4uL3N0YXRlL3ZpZXdcIjtcbmltcG9ydCB7IENhbnZhc1N0YWdlIH0gZnJvbSBcIi4vQ2FudmFzU3RhZ2VcIjtcbmltcG9ydCB7IExheWVyc1BhbmVsIH0gZnJvbSBcIi4vTGF5ZXJzUGFuZWxcIjtcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCI7XG5pbXBvcnQgeyBUb3BCYXIgfSBmcm9tIFwiLi9Ub3BCYXJcIjtcblxudHlwZSBMYXllclJvd1dpdGhQcm9qZWN0ID0gTGF5ZXJSb3cgJiB7IHByb2plY3RJZDogc3RyaW5nIH07XG5cbmZ1bmN0aW9uIGlzVHlwaW5nVGFyZ2V0KHRhcmdldDogRXZlbnRUYXJnZXQgfCBudWxsKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVsID0gdGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8IGVsLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fCBlbC5pc0NvbnRlbnRFZGl0YWJsZTtcbn1cblxuZnVuY3Rpb24gdXNlRWRpdG9yU2hvcnRjdXRzKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoaXNUeXBpbmdUYXJnZXQoZS50YXJnZXQpKSByZXR1cm47XG4gICAgICBjb25zdCBtb2QgPSBlLm1ldGFLZXkgfHwgZS5jdHJsS2V5O1xuXG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgaWYgKCFnZXRTdGF0ZSgpLnNwYWNlUGFuKSBzZXRTdGF0ZSh7IHNwYWNlUGFuOiB0cnVlIH0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJ6XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5zaGlmdEtleSkgcmVkbygpO1xuICAgICAgICBlbHNlIHVuZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJlZG8oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImNcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGNvcHlTZWxlY3Rpb24oKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInhcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGN1dFNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwidlwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgcGFzdGVDbGlwYm9hcmQoKTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcImpcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IGR1cGxpY2F0ZVNlbGVjdGlvbigpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgdm9pZCBjb21iaW5lU2VsZWN0aW9uKCk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJoXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBmbGlwU2VsZWN0aW9uSG9yaXpvbnRhbCgpOyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHVwbGljYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgKGUua2V5ID09PSBcIj1cIiB8fCBlLmtleSA9PT0gXCIrXCIpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgem9vbUJ5KDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5ID09PSBcIi1cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHpvb21CeSgtMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkgPT09IFwiMFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVxdWVzdEZpdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVTZWxlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgpLnRvb2wgPT09IFwiY3JvcFwiKSBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiLCBjcm9wUmVjdDogbnVsbCB9KTtcbiAgICAgICAgZWxzZSBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwidlwiIHx8IGUua2V5ID09PSBcIlZcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwibW92ZVwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiaFwiIHx8IGUua2V5ID09PSBcIkhcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiaGFuZFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiYlwiIHx8IGUua2V5ID09PSBcIkJcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiYnJ1c2hcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInRcIiB8fCBlLmtleSA9PT0gXCJUXCIpIHtcbiAgICAgICAgZmluaXNoVGV4dEVkaXRpbmcoKTtcbiAgICAgICAgc2V0U3RhdGUoeyB0b29sOiBcInRleHRcIiB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcInhcIiB8fCBlLmtleSA9PT0gXCJYXCIpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBzZXRTdGF0ZSh7IGZvcmVncm91bmRDb2xvcjogc3RhdGUuYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmZvcmVncm91bmRDb2xvciB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcImRcIiB8fCBlLmtleSA9PT0gXCJEXCIpIHtcbiAgICAgICAgc2V0U3RhdGUoeyBmb3JlZ3JvdW5kQ29sb3I6IFwiIzExMTExMVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiY1wiIHx8IGUua2V5ID09PSBcIkNcIikge1xuICAgICAgICBmaW5pc2hUZXh0RWRpdGluZygpO1xuICAgICAgICBzZXRTdGF0ZSh7IHRvb2w6IFwiY3JvcFwiLCBjcm9wUmVjdDogbnVsbCB9KTsgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RlcCA9IGUuc2hpZnRLZXkgPyAxMCA6IDE7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigtc3RlcCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKHN0ZXAsIDApO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbigwLCAtc3RlcCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oMCwgc3RlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoZS5jb2RlID09PSBcIlNwYWNlXCIpIHNldFN0YXRlKHsgc3BhY2VQYW46IGZhbHNlIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBzZXRTdGF0ZSh7IHNwYWNlUGFuOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uS2V5VXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbkJsdXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlVcCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb25CbHVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGl0b3IoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtczx7IGlkPzogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmlkID8/IFwiXCI7XG4gIGNvbnN0IHByb2plY3RzID0gcXVlcnlSZXN1bHQ8UHJvamVjdE1ldGE+KHVzZVF1ZXJ5KFwicHJvamVjdHNcIikpO1xuICBjb25zdCBsYXllclJvd3MgPSBxdWVyeVJlc3VsdDxMYXllclJvd1dpdGhQcm9qZWN0Pih1c2VRdWVyeShcImxheWVyc1wiKSk7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCBbdGltZWRPdXQsIHNldFRpbWVkT3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbmVkUmVmID0gdXNlUmVmPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0cy5yZWFkeSB8fCAhbGF5ZXJSb3dzLnJlYWR5IHx8IG9wZW5lZFJlZi5jdXJyZW50ID09PSBpZCkgcmV0dXJuO1xuICAgIGNvbnN0IG1ldGEgPSBwcm9qZWN0cy5pdGVtcy5maW5kKChwKSA9PiBwLmlkID09PSBpZCk7XG4gICAgaWYgKCFtZXRhKSByZXR1cm47XG4gICAgb3BlbmVkUmVmLmN1cnJlbnQgPSBpZDtcbiAgICBvcGVuUHJvamVjdChtZXRhLCBsYXllclJvd3MuaXRlbXMuZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0SWQgPT09IGlkKSk7XG4gIH0sIFtwcm9qZWN0cywgbGF5ZXJSb3dzLCBpZF0pO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICBvcGVuZWRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICBjbG9zZVByb2plY3QoKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgLy8gQSBmcmVzaGx5IGNyZWF0ZWQgcHJvamVjdCBjYW4gbGFnIGl0cyBxdWVyeSBwdXNoIGJ5IGEgYmVhdDsgb25seSByZXBvcnRcbiAgLy8gXCJub3QgZm91bmRcIiBpZiBpdCBzdGF5cyBtaXNzaW5nLlxuICBjb25zdCBsb2FkZWQgPSBkb2M/LmlkID09PSBpZDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9hZGVkKSByZXR1cm47XG4gICAgc2V0VGltZWRPdXQoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VGltZWRPdXQodHJ1ZSksIDMwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9LCBbbG9hZGVkLCBpZF0pO1xuXG4gIHVzZUVkaXRvclNob3J0Y3V0cygpO1xuXG4gIGlmICghbG9hZGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1wYWdlXCI+XG4gICAgICAgIHt0aW1lZE91dCAmJiBwcm9qZWN0cy5yZWFkeSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+UHJvamVjdCBub3QgZm91bmQ8L3A+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkxvYWRpbmcgcHJvamVjdFx1MjAyNjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yLXNoZWxsXCI+XG4gICAgICA8VG9wQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluXCI+XG4gICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgIDxDYW52YXNTdGFnZSAvPlxuICAgICAgICA8TGF5ZXJzUGFuZWwgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8vIFByb2plY3QgZ2FsbGVyeTogb3BlbiBwcmV2aW91cyBwcm9qZWN0cywgY3JlYXRlIGEgYmxhbmsgb25lIChkZWZhdWx0XG4vLyBkaW1lbnNpb25zKSwgb3IgZHJvcC9waWNrIGFuIGltYWdlIHRvIHN0YXJ0IGEgcHJvamVjdCBhdCB0aGF0IGltYWdlJ3Mgc2l6ZS5cblxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVF1ZXJ5IH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHtcbiAgICBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZW5jb2RlVHJhbnNmb3JtLFxuICAgIHR5cGUgUHJvamVjdE1ldGEsXG4gICAgdHlwZSBQcm9qZWN0VGh1bWIsXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGZpbGVUb0ltcG9ydGVkSW1hZ2UsIGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuaW1wb3J0IHsgYXBpLCBxdWVyeVJlc3VsdCB9IGZyb20gXCIuLi9zdGF0ZS9hcGlcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuLi9zdGF0ZS9hc3NldHNcIjtcbmltcG9ydCB7IEZpRWRpdDMsIEZpSW1hZ2UsIEZpUGx1cywgRmlUcmFzaDIsIEZpVXBsb2FkIH0gZnJvbSBcIi4vSWNvbnNcIjtcbmltcG9ydCB7IFRoZW1lVG9nZ2xlIH0gZnJvbSBcIi4vVGhlbWVUb2dnbGVcIjtcblxuY29uc3QgU0laRV9QUkVTRVRTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJDYW52YXNcIixcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIlNxdWFyZVwiLCB3aWR0aDogMTIwMCwgaGVpZ2h0OiAxMjAwIH0sXG4gICAgeyBuYW1lOiBcIlBvcnRyYWl0XCIsIHdpZHRoOiAxMDgwLCBoZWlnaHQ6IDEzNTAgfSxcbiAgICB7IG5hbWU6IFwiTGFuZHNjYXBlXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEwODAgfSxcbl0gYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIHRpbWVBZ28oaXNvOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKGlzbykuZ2V0VGltZSgpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1zKSB8fCBtcyA8IDApIHJldHVybiBcImp1c3Qgbm93XCI7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobXMgLyA2MF8wMDApO1xuICAgIGlmIChtaW51dGVzIDwgMSkgcmV0dXJuIFwianVzdCBub3dcIjtcbiAgICBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gYCR7bWludXRlc31tIGFnb2A7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBgJHtob3Vyc31oIGFnb2A7XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XG4gICAgaWYgKGRheXMgPCAzMCkgcmV0dXJuIGAke2RheXN9ZCBhZ29gO1xuICAgIHJldHVybiBuZXcgRGF0ZShpc28pLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0Q2FyZCh7XG4gICAgcHJvamVjdCxcbiAgICB0aHVtYixcbiAgICBvbk9wZW4sXG4gICAgb25SZW5hbWUsXG4gICAgb25EZWxldGUsXG59OiB7XG4gICAgcHJvamVjdDogUHJvamVjdE1ldGE7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBvbk9wZW46ICgpID0+IHZvaWQ7XG4gICAgb25SZW5hbWU6ICgpID0+IHZvaWQ7XG4gICAgb25EZWxldGU6ICgpID0+IHZvaWQ7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25PcGVufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgcHJvamVjdC1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgT3BlbiAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aHVtYiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e3RodW1ifSBkcmFnZ2FibGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaUltYWdlIGNsYXNzTmFtZT1cInByb2plY3QtZW1wdHktaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25PcGVufSBjbGFzc05hbWU9XCJwcm9qZWN0LW1haW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj57cHJvamVjdC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3Qud2lkdGh9XHUwMEQ3e3Byb2plY3QuaGVpZ2h0fSBcdTAwQjd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxheWVyT3JkZXIubGVuZ3RofXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubGF5ZXJPcmRlci5sZW5ndGggPT09IDEgPyBcImxheWVyXCIgOiBcImxheWVyc1wifSBcdTAwQjd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHt0aW1lQWdvKHByb2plY3QudXBkYXRlZEF0KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgUmVuYW1lICR7cHJvamVjdC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0MyAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YERlbGV0ZSAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpVHJhc2gyIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gcXVlcnlSZXN1bHQ8UHJvamVjdE1ldGE+KHVzZVF1ZXJ5KFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IHRodW1icyA9IHF1ZXJ5UmVzdWx0PFByb2plY3RUaHVtYj4odXNlUXVlcnkoXCJwcm9qZWN0VGh1bWJzXCIpKTtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbYnVzeSwgc2V0QnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2RyYWdnaW5nLCBzZXREcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe1xuICAgICAgICB3aWR0aDogREVGQVVMVF9QUk9KRUNUX1dJRFRILFxuICAgICAgICBoZWlnaHQ6IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQsXG4gICAgfSk7XG4gICAgY29uc3QgZHJhZ0RlcHRoUmVmID0gdXNlUmVmKDApO1xuXG4gICAgY29uc3QgdGh1bWJCeUlkID0gbmV3IE1hcCh0aHVtYnMuaXRlbXMubWFwKCh0KSA9PiBbdC5pZCwgdC50aHVtYl0pKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJsYW5rKCkge1xuICAgICAgICBpZiAoYnVzeSkgcmV0dXJuO1xuICAgICAgICBzZXRCdXN5KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGBVbnRpdGxlZCAke3Byb2plY3RzLml0ZW1zLmxlbmd0aCArIDF9YDtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgICBzaXplLmhlaWdodCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtpZH1gKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRnJvbUZpbGUoZmlsZTogRmlsZSkge1xuICAgICAgICBpZiAoYnVzeSkgcmV0dXJuO1xuICAgICAgICBzZXRCdXN5KHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmaWxlVG9JbXBvcnRlZEltYWdlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gZW5jb2RlVHJhbnNmb3JtKHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgdzogaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGlwWDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0RnJvbUltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMgfHwgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBIb21lIG5ldmVyIG9wZW5zIHRoZSBlZGl0b3IgbG9uZyBlbm91Z2ggZm9yIHRoZSBkZWxheWVkIHRodW1iXG4gICAgICAgICAgICAvLyBwYXNzIFx1MjAxNCB3cml0ZSBvbmUgbm93IGZyb20gdGhlIGxvY2FsIGRhdGEgVVJMLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIDM2MCAvIE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2Uud2lkdGggKiBzY2FsZSkpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLmhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwidGh1bWIgZGVjb2RlIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFwaS5zZXRQcm9qZWN0VGh1bWIocmVzdWx0LmlkLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjg1KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodGh1bWJFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCB3cml0ZSBwcm9qZWN0IHRodW1iOlwiLCB0aHVtYkVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNyYykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGkuc2V0UHJvamVjdFRodW1iKHJlc3VsdC5pZCwgcmVzdWx0LnNyYykuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtyZXN1bHQuaWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBwcm9qZWN0IGZyb20gaW1hZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRyYWdEZXB0aFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHZvaWQgY3JlYXRlRnJvbUZpbGUoZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHByb2plY3Q6IFByb2plY3RNZXRhKSB7XG4gICAgICAgIGlmIChjb25maXJtKGBEZWxldGUgXCIke3Byb2plY3QubmFtZX1cIj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lLmApKSB7XG4gICAgICAgICAgICB2b2lkIGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW5hbWUocHJvamVjdDogUHJvamVjdE1ldGEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdm9pZCBhcGkucmVuYW1lUHJvamVjdChwcm9qZWN0LmlkLCBjbGVhbk5hbWUobmFtZSwgcHJvamVjdC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZVwiXG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkcmFnRGVwdGhSZWYuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgPSBNYXRoLm1heCgwLCBkcmFnRGVwdGhSZWYuY3VycmVudCAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnRGVwdGhSZWYuY3VycmVudCA9PT0gMCkgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPmltYWdlIGVkaXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtcGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctcHJvamVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtTSVpFX1BSRVNFVFMubWFwKChwcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldC53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQuaGVpZ2h0ID09PSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmVzZXQgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcHJlc2V0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHByZXNldC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJlc2V0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmVzZXQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQud2lkdGh9IFx1MDBENyB7cHJlc2V0LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgY3JlYXRlQmxhbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkgdm9pZCBjcmVhdGVGcm9tRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlUmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlVcGxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLnJlYWR5ID8gYCgke3Byb2plY3RzLml0ZW1zLmxlbmd0aH0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHshcHJvamVjdHMucmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5Mb2FkaW5nIHByb2plY3RzXHUyMDI2PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IHByb2plY3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcHJvamVjdHMgeWV0LiBDaG9vc2UgYSBzaXplIGFib3ZlIG9yIGRyb3AgYW4gaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMuaXRlbXMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI9e3RodW1iQnlJZC5nZXQocHJvamVjdC5pZCkgPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0LmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17KCkgPT4gb25SZW5hbWUocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RyYWdnaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRyb3AgdG8gY3JlYXRlIGEgcHJvamVjdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2J1c3kgPyA8ZGl2IGNsYXNzTmFtZT1cImJ1c3ktdG9hc3RcIj5DcmVhdGluZyBwcm9qZWN0XHUyMDI2PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL0VkaXRvclwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5jb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIik7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9XG4gICAgc2F2ZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8IHNhdmVkVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gc2F2ZWRUaGVtZVxuICAgICAgICA6IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICAgICAgICA/IFwiZGFya1wiXG4gICAgICAgICAgOiBcImxpZ2h0XCI7XG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAtLWJnOiAjZmZmOyAtLXN1cmZhY2U6ICNmZmY7IC0tc3VyZmFjZS1zdWJ0bGU6ICNmYWZhZmE7IC0tY2FudmFzOiAjZjRmNGY0O1xuICAtLWJvcmRlcjogI2U0ZTRlNDsgLS1ib3JkZXItc3Ryb25nOiAjMTExOyAtLXRleHQ6ICMwYTBhMGE7XG4gIC0tbXV0ZWQ6ICM3MzczNzM7IC0tZmFpbnQ6ICNhM2EzYTM7IC0tYWNjZW50OiAjMjU2M2ViOyAtLWFjY2VudC1ob3ZlcjogIzFkNGVkODtcbiAgLS1hY2NlbnQtc29mdDogI2VmZjZmZjsgLS1kYW5nZXI6ICNkYzI2MjY7IC0tY2hlY2tlci1hOiAjZWNlY2VjOyAtLWNoZWNrZXItYjogI2Q4ZDhkODtcbiAgLS1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwwLDAsLjE0KTtcbiAgLS1zYW5zOiBcIkludGVyXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC0tbW9ubzogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbn1cbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWJnOiAjMTYxNjE2OyAtLXN1cmZhY2U6ICMxYzFjMWM7IC0tc3VyZmFjZS1zdWJ0bGU6ICMxOTE5MTk7IC0tY2FudmFzOiAjMTIxMjEyO1xuICAtLWJvcmRlcjogIzMzMzsgLS1ib3JkZXItc3Ryb25nOiAjZmFmYWZhOyAtLXRleHQ6ICNmMGYwZjA7XG4gIC0tbXV0ZWQ6ICNhOGE4YTg7IC0tZmFpbnQ6ICM2ODY4Njg7IC0tYWNjZW50OiAjM2I4MmY2OyAtLWFjY2VudC1ob3ZlcjogIzI1NjNlYjtcbiAgLS1hY2NlbnQtc29mdDogIzE3MjU1NDsgLS1kYW5nZXI6ICNlZjQ0NDQ7IC0tY2hlY2tlci1hOiAjMzIzMjMyOyAtLWNoZWNrZXItYjogIzI4MjgyODtcbiAgLS1zaGFkb3c6IDAgMThweCA1NnB4IHJnYmEoMCwwLDAsLjU4KTtcbn1cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sLCBib2R5IHsgbWFyZ2luOiAwOyBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuYm9keSB7IGZvbnQ6IDE0cHgvMS41IHZhcigtLXNhbnMpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuYnV0dG9uLCBpbnB1dCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgfVxuYnV0dG9uOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9XG4uY2hlY2tlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZXItYSk7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS1jaGVja2VyLWIpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNzUlLHZhcigtLWNoZWNrZXItYikgNzUlKSxsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tY2hlY2tlci1iKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDc1JSx2YXIoLS1jaGVja2VyLWIpIDc1JSk7IGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsOHB4IDhweDsgfVxuLmNhbnZhcy1kb3RzIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FudmFzKTsgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNvbG9yLW1peChpbiBzcmdiLHZhcigtLW11dGVkKSAyNCUsdHJhbnNwYXJlbnQpIDFweCx0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDsgfVxuLmljb24tYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuLmljb24tYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5pY29uLWJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IC4zOyB9XG4uaWNvbi1idXR0b24gc3ZnIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgfVxuLmJ1dHRvbiB7IG1pbi1oZWlnaHQ6IDM0cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDdweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNTUwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc3Ryb25nKTsgfVxuLmJ1dHRvbi5wcmltYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfVxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpOyB9XG4uYnV0dG9uLmRhbmdlciB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4uYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cblxuLyogSG9tZSAqL1xuLmhvbWUgeyBtaW4taGVpZ2h0OiAxMDB2aDsgcGFkZGluZzogNDZweCAyNHB4IDkwcHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuLmhvbWUtaW5uZXIgeyB3aWR0aDogbWluKDEwMCUsIDc4MHB4KTsgbWFyZ2luOiAwIGF1dG87IH1cbi5icmFuZC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cbi5icmFuZCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMXB4OyBsaW5lLWhlaWdodDogMTsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC0uMDM1ZW07IH1cbi5icmFuZC1tYXJrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogOXB4OyBoZWlnaHQ6IDE3cHg7IG1hcmdpbi1sZWZ0OiA0cHg7IHZlcnRpY2FsLWFsaWduOiAtMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4uYnJhbmQtcm93IC50aGVtZS10b2dnbGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuLmhvbWUtbWV0YSB7IG1hcmdpbjogMTJweCAwIDM4cHg7IHBhZGRpbmctdG9wOiA5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5pbnRybyB7IG1hcmdpbjogMCAwIDI0cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMTNweDsgfVxuLmNyZWF0ZS1wYW5lbCB7IG1hcmdpbi1ib3R0b206IDM4cHg7IH1cbi5leWVicm93IHsgbWFyZ2luOiAwIDAgMTBweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA5ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5wcmVzZXRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW5tYXgoMCwxZnIpKTsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi5wcmVzZXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDExcHg7IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbi5wcmVzZXQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zdHJvbmcpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5wcmVzZXQuc2VsZWN0ZWQgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4ucHJlc2V0LW5hbWUgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogM3B4OyBjb2xvcjogaW5oZXJpdDsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5wcmVzZXQtc2l6ZSB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5jcmVhdGUtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyB9XG4uY3JlYXRlLWFjdGlvbnMgLmJ1dHRvbjpmaXJzdC1vZi10eXBlIHsgZmxleDogMTsgfVxuLnNlY3Rpb24tbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbjogMCAwIDEycHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wOWVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4uc2VjdGlvbi1sYWJlbDo6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBmbGV4OiAxOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuLnByb2plY3QtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxuLnByb2plY3QtY2FyZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTE2cHggbWlubWF4KDAsMWZyKSBhdXRvOyBtaW4taGVpZ2h0OiA4MnB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjEyczsgfVxuLnByb2plY3QtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDY1JSx2YXIoLS1ib3JkZXIpKTsgfVxuLnByb2plY3QtcHJldmlldyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiA3cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlci1hKTsgfVxuLnByb2plY3QtcHJldmlldyBpbWcgeyBkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiA2NnB4OyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ucHJvamVjdC1lbXB0eS1pY29uIHsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6IHZhcigtLWZhaW50KTsgfVxuLnByb2plY3QtbWFpbiB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMTZweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4ucHJvamVjdC1uYW1lIHsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjUwOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnByb2plY3QtaW5mbyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA3cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wMmVtOyB9XG4ucHJvamVjdC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxcHg7IHBhZGRpbmc6IDAgMTBweDsgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTJzOyB9XG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWFjdGlvbnMsIC5wcm9qZWN0LWFjdGlvbnM6Zm9jdXMtd2l0aGluIHsgb3BhY2l0eTogMTsgfVxuLmVtcHR5LXN0YXRlIHsgcGFkZGluZzogNjBweCAyMHB4OyBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250OiAxMnB4IHZhcigtLW1vbm8pOyB9XG4uZHJvcC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgei1pbmRleDogMjA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLWJnKSA4NCUsdHJhbnNwYXJlbnQpOyB9XG4uZHJvcC1vdmVybGF5IHAgeyBwYWRkaW5nOiAzMHB4IDQ4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgZm9udDogMTJweCB2YXIoLS1tb25vKTsgfVxuLmJ1c3ktdG9hc3QgeyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMjRweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IHBhZGRpbmc6IDlweCAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfVxuXG4vKiBFZGl0b3IgKi9cbi5lZGl0b3Itc2hlbGwgeyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDEwMHZoOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdzogaGlkZGVuOyBiYWNrZ3JvdW5kOiB2YXIoLS1jYW52YXMpOyBjb2xvcjogdmFyKC0tdGV4dCk7IHVzZXItc2VsZWN0OiBub25lOyB9XG4uZWRpdG9yLW1haW4geyBkaXNwbGF5OiBmbGV4OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IG1pbi1oZWlnaHQ6IDA7IH1cbi50b3BiYXIgeyBoZWlnaHQ6IDQ2cHg7IGZsZXgtc2hyaW5rOiAwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgcGFkZGluZzogMCAxMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi50b3BiYXItbmFtZSB7IHdpZHRoOiAxNjhweDsgcGFkZGluZzogNXB4IDdweDsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB9XG4udG9wYmFyLW5hbWU6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcik7IH0udG9wYmFyLW5hbWU6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IH1cbi5kb2Mtc2l6ZSwgLnpvb20tYnV0dG9uLCAuc2F2ZS1zdGF0dXMgeyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxOHB4OyBtYXJnaW46IDAgNnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4uc3BhY2VyIHsgZmxleDogMTsgfVxuLnpvb20tY29udHJvbHMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9Lnpvb20tYnV0dG9uIHsgd2lkdGg6IDUycHg7IHBhZGRpbmc6IDVweCAycHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH0uem9vbS1idXR0b246aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5zYXZlLXN0YXR1cyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9LnNhdmUtZG90IHsgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfS5zYXZlZCB7IGJhY2tncm91bmQ6ICMyMmM1NWU7IH0uc2F2aW5nIHsgYmFja2dyb3VuZDogI2Y1OWUwYjsgfS5lcnJvciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IH1cbi50b29sLXJhaWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDU7IHdpZHRoOiA0NHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDdweCAwOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnRvb2wtYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMDsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0udG9vbC1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfS50b29sLWJ1dHRvbi5hY3RpdmUgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9LnRvb2wtYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7IH1cbi50b29sYmFyLWNvbG9ycyB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IDM4cHg7IGhlaWdodDogMzlweDsgbWFyZ2luLXRvcDogYXV0bzsgZmxleC1zaHJpbms6IDA7IH0udG9vbGJhci1jb2xvcnMgLmdsb2JhbC1zd2F0Y2ggeyB3aWR0aDogMjFweDsgaGVpZ2h0OiAyMXB4OyB9LnRvb2xiYXItY29sb3JzIC5nbG9iYWwtc3dhdGNoLmZvcmVncm91bmQgeyBsZWZ0OiAzcHg7IHRvcDogM3B4OyB9LnRvb2xiYXItY29sb3JzIC5nbG9iYWwtc3dhdGNoLmJhY2tncm91bmQgeyByaWdodDogM3B4OyBib3R0b206IDJweDsgfS50b29sYmFyLWNvbG9ycyAuc3dhcC1jb2xvcnMgeyByaWdodDogLTFweDsgdG9wOiAtNXB4OyB9XG4udG9vbC1jb2xvci1wb3BvdmVyIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA3MDsgbGVmdDogNDNweDsgYm90dG9tOiAwOyB3aWR0aDogMjIwcHg7IHBhZGRpbmc6IDlweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH1cbi50b29sLXBvcG92ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyBsZWZ0OiA1MHB4OyB3aWR0aDogMTk2cHg7IHBhZGRpbmc6IDEycHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDExcHg7IH1cbi50b29sLXBvcG92ZXIgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDExcHg7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMnB4OyB9LnRvb2wtcG9wb3ZlciBsYWJlbCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyBtYXJnaW46IDhweCAwOyB9LnRvb2wtcG9wb3ZlciBpbnB1dFt0eXBlPVwiY29sb3JcIl0geyB3aWR0aDogMzBweDsgaGVpZ2h0OiAyNHB4OyBwYWRkaW5nOiAxcHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9LnRvb2wtcG9wb3ZlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyB3aWR0aDogMTAwJTsgYWNjZW50LWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9LnRvb2wtcG9wb3ZlciBwIHsgbWFyZ2luOiAwIDAgMTJweDsgfS50b29sLXBvcG92ZXIgLmJ1dHRvbiB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA2cHg7IH0uYnJ1c2gtcHJldmlldyB7IG1heC13aWR0aDogNjRweDsgbWF4LWhlaWdodDogNjRweDsgbWluLXdpZHRoOiAzcHg7IG1pbi1oZWlnaHQ6IDNweDsgbWFyZ2luOiAxMnB4IGF1dG8gMnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IH1cbi5sYXllcnMtcGFuZWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAyNDRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5wYW5lbC1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA3cHg7IGhlaWdodDogNDJweDsgcGFkZGluZzogMCAxMnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH0ucGFuZWwtaGVhZCBzdmcgeyB3aWR0aDogMTNweDsgaGVpZ2h0OiAxM3B4OyB9XG4ubGF5ZXJzLWhlYWQgeyBoZWlnaHQ6IDM2cHg7IGZsZXgtc2hyaW5rOiAwOyB9LmxheWVycy1oZWFkIC5sYXllci1hZGQgeyBtYXJnaW4tbGVmdDogYXV0bzsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBjdXJzb3I6IHBvaW50ZXI7IH0ubGF5ZXJzLWhlYWQgLmxheWVyLWFkZDpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgY29sb3I6IHZhcigtLXRleHQpOyB9LmxheWVycy1oZWFkIC5sYXllci1hZGQgc3ZnIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuLnBhbmVsLXdpZHRoLXJlc2l6ZXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDQ1OyBsZWZ0OiAtM3B4OyB0b3A6IDA7IGJvdHRvbTogMDsgd2lkdGg6IDZweDsgY3Vyc29yOiBldy1yZXNpemU7IH0ucGFuZWwtd2lkdGgtcmVzaXplcjpob3ZlciwucGFuZWwtd2lkdGgtcmVzaXplcjphY3RpdmUgeyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1hY2NlbnQpIDQ1JSx0cmFuc3BhcmVudCk7IH1cbi5wcm9wZXJ0aWVzLXJlc2l6ZXIgeyBoZWlnaHQ6IDVweDsgZmxleC1zaHJpbms6IDA7IGN1cnNvcjogbnMtcmVzaXplOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5wcm9wZXJ0aWVzLXJlc2l6ZXI6aG92ZXIsLnByb3BlcnRpZXMtcmVzaXplcjphY3RpdmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ucHJvcGVydGllcy1wYW5lbCB7IG1pbi1oZWlnaHQ6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IDAgMCBhdXRvOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnByb3BlcnRpZXMtcGFuZWwgPiAucGFuZWwtaGVhZCB7IGhlaWdodDogMzRweDsgZmxleC1zaHJpbms6IDA7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnByb3BlcnRpZXMtYm9keSB7IG1pbi1oZWlnaHQ6IDA7IG92ZXJmbG93LXk6IGF1dG87IH1cbi5wcm9wZXJ0aWVzLWVtcHR5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAxNnB4IDEycHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLnByb3Atc2VjdGlvbiB7IHBhZGRpbmc6IDhweCAxMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuLnByb3AtZmllbGQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiA4cHg7IG1hcmdpbjogNnB4IDA7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLnByb3AtZmllbGQ6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tdG9wOiAwOyB9LnByb3AtZmllbGQ6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cbi5wcm9wLWZpZWxkIGlucHV0LCAucHJvcC1maWVsZCBzZWxlY3QsIC5wcm9wLWZpZWxkIHRleHRhcmVhIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250OiAxMXB4IHZhcigtLXNhbnMpOyB9XG4ucHJvcC1maWVsZCBpbnB1dDpmb2N1cywgLnByb3AtZmllbGQgc2VsZWN0OmZvY3VzLCAucHJvcC1maWVsZCB0ZXh0YXJlYTpmb2N1cyB7IGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTsgfVxuLnByb3Atc2xpZGVyIHsgZGlzcGxheTogYmxvY2s7IH0ucHJvcC1zbGlkZXIgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDsgfS5wcm9wLXZhbHVlIHsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zOyB9XG4ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMnB4OyBtYXJnaW46IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH0ucHJvcC1zbGlkZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDdweDsgaGVpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiAtNXB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXNsaWRlciBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi1tb3otcmFuZ2UtdGh1bWIgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDEycHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLnByb3AtbnVtYmVyIGlucHV0IHsgd2lkdGg6IDYycHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogNHB4IDE4cHggNHB4IDZweDsgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtczsgfS5udW1iZXItd3JhcCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfS5udW1iZXItd3JhcCBpIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDZweDsgdG9wOiA2cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC1zaXplOiA5cHg7IH1cbi5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogMTI0cHg7IGhlaWdodDogMjdweDsgcGFkZGluZzogM3B4IDVweDsgfVxuLnByb3AtZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgY29sdW1uLWdhcDogMTBweDsgfS5wcm9wLWdyaWQgLnByb3AtZmllbGQgeyBtaW4td2lkdGg6IDA7IH0ucHJvcC1ncmlkIC5wcm9wLW51bWJlciBpbnB1dCwucHJvcC1ncmlkIC5wcm9wLXNlbGVjdCBzZWxlY3QgeyB3aWR0aDogNzBweDsgfVxuLnByb3AtdG9nZ2xlIGlucHV0IHsgcG9zaXRpb246IGFic29sdXRlOyBvcGFjaXR5OiAwOyB9LnByb3AtdG9nZ2xlIGkgeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAxNXB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyKTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTJzOyB9LnByb3AtdG9nZ2xlIGk6OmFmdGVyIHsgY29udGVudDogXCJcIjsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yNSk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTJzOyB9LnByb3AtdG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5wcm9wLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgaTo6YWZ0ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTJweCk7IH1cbi50ZXh0LWNvbnRlbnQgeyBkaXNwbGF5OiBibG9jazsgfS50ZXh0LWNvbnRlbnQgPiBzcGFuIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDVweDsgfS50ZXh0LWNvbnRlbnQgdGV4dGFyZWEgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogNnB4OyByZXNpemU6IHZlcnRpY2FsOyBsaW5lLWhlaWdodDogMS4zNTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi50b29sLWhpbnQgeyBtYXJnaW46IDAgMCA5cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwcHggdmFyKC0tbW9ubyk7IH1cbi5zZWdtZW50LWNvbnRyb2wgeyBkaXNwbGF5OiBmbGV4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24geyB3aWR0aDogMzRweDsgaGVpZ2h0OiAyN3B4OyBwYWRkaW5nOiAwOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmlnaHQtd2lkdGg6IDA7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMHB4IHZhcigtLW1vbm8pOyB9LnNlZ21lbnQtY29udHJvbCBidXR0b246bGFzdC1jaGlsZCB7IGJvcmRlci1yaWdodC13aWR0aDogMXB4OyB9LnNlZ21lbnQtY29udHJvbCBidXR0b24uYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyB9XG4uZ2xvYmFsLWNvbG9yLXNlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXN1YnRsZSk7IH0uZ2xvYmFsLWNvbG9yLXJvdyB7IGhlaWdodDogMzBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfS5nbG9iYWwtY29sb3Itcm93IGNvZGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOS41cHggdmFyKC0tbW9ubyk7IH0uZ2xvYmFsLXN3YXRjaGVzIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogNDVweDsgaGVpZ2h0OiAzMHB4OyB9Lmdsb2JhbC1zd2F0Y2ggeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyM3B4OyBoZWlnaHQ6IDIzcHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1cmZhY2UpOyBib3JkZXItcmFkaXVzOiAwOyBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbXV0ZWQpOyB9Lmdsb2JhbC1zd2F0Y2guYmFja2dyb3VuZCB7IHJpZ2h0OiAxcHg7IGJvdHRvbTogMDsgfS5nbG9iYWwtc3dhdGNoLmZvcmVncm91bmQgeyB6LWluZGV4OiAyOyBsZWZ0OiAxcHg7IHRvcDogMDsgfS5zd2FwLWNvbG9ycyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IC0xM3B4OyB0b3A6IC01cHg7IHdpZHRoOiAxN3B4OyBoZWlnaHQ6IDE3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQtc2l6ZTogMTJweDsgfS5zd2FwLWNvbG9yczpob3ZlciB7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuLmNvbG9yLXBvcG92ZXIgeyBtYXJnaW46IDhweCAtMnB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IH0uY29sb3ItcG9wb3Zlci1oZWFkIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiA3cHg7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfS5jb2xvci1wb3BvdmVyLWhlYWQgYnV0dG9uIHsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5jb2xvci1waWNrZXIgeyBtYXJnaW4tdG9wOiAwOyB9XG4uc3YtcGlja2VyIHsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDEwNHB4OyBvdmVyZmxvdzogaGlkZGVuOyBjdXJzb3I6IGNyb3NzaGFpcjsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjMDAwLHRyYW5zcGFyZW50KSxsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2ZmZix0cmFuc3BhcmVudCk7IH0uc3YtcGlja2VyIHNwYW4geyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4OyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgYm9yZGVyLXJhZGl1czogNTAlOyBib3gtc2hhZG93OiAwIDAgMCAxcHggIzAwMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgfVxuLmh1ZS1zbGlkZXIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDlweDsgbWFyZ2luOiA4cHggMDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2YwMCwjZmYwLCMwZjAsIzBmZiwjMDBmLCNmMGYsI2YwMCk7IH0uaHVlLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIgeyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH0uaHVlLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA3cHg7IGhlaWdodDogMTNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dCk7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi5jb2xvci1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDVweDsgfS5jb2xvci1zd2F0Y2ggeyB3aWR0aDogMjdweDsgaGVpZ2h0OiAyN3B4OyBmbGV4LXNocmluazogMDsgcGFkZGluZzogMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9LmNvbG9yLXN3YXRjaCBpIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH0uaGV4LWlucHV0IHsgbWluLXdpZHRoOiAwOyBmbGV4OiAxOyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDRweCA2cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH0uZXllZHJvcHBlciB7IHdpZHRoOiAyN3B4OyBoZWlnaHQ6IDI3cHg7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LmV5ZWRyb3BwZXI6aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLXN0cm9uZyk7IH1cbi5yZ2Itcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpOyBnYXA6IDVweDsgbWFyZ2luLXRvcDogNnB4OyB9LnJnYi1yb3cgbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogOXB4IHZhcigtLW1vbm8pOyB9LnJnYi1yb3cgaW5wdXQgeyBtaW4td2lkdGg6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI1cHg7IHBhZGRpbmc6IDNweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udDogMTBweCB2YXIoLS1tb25vKTsgfVxuLmJsZW5kLWNvbnRyb2wgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDEwcHggMTJweDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0uYmxlbmQtY29udHJvbC5kaXNhYmxlZCB7IG9wYWNpdHk6IC40OyB9LmJsZW5kLWNvbnRyb2wgbGFiZWwgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNXB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH0uYmxlbmQtdHJpZ2dlciB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcGFkZGluZzogMCA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTEuNXB4OyB0ZXh0LWFsaWduOiBsZWZ0OyB9LmJsZW5kLW1lbnUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDMwOyB0b3A6IDYxcHg7IGxlZnQ6IDEycHg7IHJpZ2h0OiAxMnB4OyBtYXgtaGVpZ2h0OiAyNDhweDsgb3ZlcmZsb3cteTogYXV0bzsgcGFkZGluZzogNHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgfS5ibGVuZC1tZW51IGJ1dHRvbiB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgcGFkZGluZzogNXB4IDdweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1hbGlnbjogbGVmdDsgfS5ibGVuZC1tZW51IGJ1dHRvbjpob3ZlciwuYmxlbmQtbWVudSBidXR0b246Zm9jdXMsLmJsZW5kLW1lbnUgYnV0dG9uLnNlbGVjdGVkIHsgb3V0bGluZTogMDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXNvZnQpOyB9LmJsZW5kLWhpbnQgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogNHB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250LXNpemU6IDkuNXB4OyB9XG4ub3BhY2l0eS1jb250cm9sIHsgLS1wcm9ncmVzczogMTAwJTsgcGFkZGluZzogMTBweCAxMnB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfS5vcGFjaXR5LWNvbnRyb2wuZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDsgfS5vcGFjaXR5LWxhYmVsIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBtYXJnaW4tYm90dG9tOiA1cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgfVxuLm9wYWNpdHktY29udHJvbCBpbnB1dFt0eXBlPVwicmFuZ2VcIl0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEycHg7IG1hcmdpbjogMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1hY2NlbnQpIDAlLCB2YXIoLS1hY2NlbnQpIHZhcigtLXByb2dyZXNzKSwgdmFyKC0tYm9yZGVyKSB2YXIoLS1wcm9ncmVzcyksIHZhcigtLWJvcmRlcikgMTAwJSk7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDsgY3Vyc29yOiBwb2ludGVyOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sgeyBoZWlnaHQ6IDJweDsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IG1hcmdpbi10b3A6IC0zcHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10aHVtYiB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfVxuLmxheWVyLWxpc3QgeyBtaW4taGVpZ2h0OiAwOyBmbGV4OiAxOyBvdmVyZmxvdy15OiBhdXRvOyBtYXJnaW46IDA7IHBhZGRpbmc6IDRweCAwOyBsaXN0LXN0eWxlOiBub25lOyB9XG4ubGF5ZXItcm93IHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDhweDsgcGFkZGluZzogNnB4IDhweDsgY3Vyc29yOiBwb2ludGVyOyB9LmxheWVyLXJvdzpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2Utc3VidGxlKTsgfS5sYXllci1yb3cuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtc29mdCk7IH0ubGF5ZXItcm93LmhpZGRlbiB7IG9wYWNpdHk6IC41OyB9XG4udmlzaWJpbGl0eSB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDI1cHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwOyBwYWRkaW5nOiAwOyBib3JkZXI6IDA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LnZpc2liaWxpdHkgc3ZnIHsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweDsgfVxuLmxheWVyLXRodW1iIHsgd2lkdGg6IDM0cHg7IGhlaWdodDogMzRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IH0ubGF5ZXItdGh1bWIgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ubGF5ZXItbmFtZSB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgb3ZlcmZsb3c6IGhpZGRlbjsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH0ubGF5ZXItaW5wdXQgeyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHBhZGRpbmc6IDNweCA1cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxMS41cHg7IH1cbi5kcm9wLW1hcmsgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldC1pbmxpbmU6IDRweDsgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH0uZHJvcC1tYXJrLmFib3ZlIHsgdG9wOiAwOyB9LmRyb3AtbWFyay5iZWxvdyB7IGJvdHRvbTogMDsgfVxuLm5vLWxheWVycyB7IHBhZGRpbmc6IDE2cHggMTJweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfS5wYW5lbC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiA0cHg7IHBhZGRpbmc6IDdweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IH0ucGFuZWwtYWN0aW9ucyAuYnV0dG9uIHsgZmxleDogMTsgbWluLWhlaWdodDogMzBweDsgcGFkZGluZzogNXB4OyB9XG4uY2FudmFzLXN0YWdlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBtaW4td2lkdGg6IDA7IGZsZXg6IDE7IHRvdWNoLWFjdGlvbjogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgfS5hcnRib2FyZCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyBvdmVyZmxvdzogaGlkZGVuOyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOyBvdXRsaW5lOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDM0JSx0cmFuc3BhcmVudCk7IH0uY2FudmFzLWVtcHR5IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgaW5zZXQ6IDA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH0uY2FudmFzLWVtcHR5IHAgeyBwYWRkaW5nOiAxM3B4IDE4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9XG4uYnJ1c2gtb3ZlcmxheSB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9LnNuYXAtZ3VpZGUgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiAyMDsgYmFja2dyb3VuZDogI2VjNDg5OTsgfS5zbmFwLWd1aWRlLnZlcnRpY2FsIHsgdG9wOiAwOyB3aWR0aDogMXB4OyB9LnNuYXAtZ3VpZGUuaG9yaXpvbnRhbCB7IGxlZnQ6IDA7IGhlaWdodDogMXB4OyB9LmNyb3AtYm94IHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMjE7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogIzM4YmRmODsgYmFja2dyb3VuZDogcmdiYSg1NiwxODksMjQ4LC4wOCk7IGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLDAsMCwuMzgpOyB9LmNyb3AtYm94IHNwYW4geyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMTAwJTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgYmFja2dyb3VuZDogIzAyODRjNzsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7IH1cbi5pbmxpbmUtdGV4dC1lZGl0b3Itd3JhcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgei1pbmRleDogMzA7IG92ZXJmbG93OiB2aXNpYmxlOyB9XG4uaW5saW5lLXRleHQtZWRpdG9yIHsgcG9zaXRpb246IGFic29sdXRlOyBvdmVyZmxvdzogaGlkZGVuOyByZXNpemU6IG5vbmU7IG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1zdXJmYWNlKSA4JSx0cmFuc3BhcmVudCk7IGNhcmV0LWNvbG9yOiB2YXIoLS10ZXh0KTsgd2hpdGUtc3BhY2U6IHByZTsgdXNlci1zZWxlY3Q6IHRleHQ7IH1cbi5sb2FkaW5nLXBhZ2UgeyBoZWlnaHQ6IDEwMHZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0ubG9hZGluZy1wYWdlIHAgeyBtYXJnaW46IDA7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH0ubm90LWZvdW5kIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5ub3QtZm91bmQgPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyAuaG9tZSB7IHBhZGRpbmc6IDI4cHggMTZweCA3MHB4OyB9LnByZXNldHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7IH0ucHJvamVjdC1jYXJkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MnB4IG1pbm1heCgwLDFmcikgYXV0bzsgfS5wcm9qZWN0LWFjdGlvbnMgeyBwYWRkaW5nOiAwIDVweDsgb3BhY2l0eTogMTsgfS50b3BiYXIgLmRvYy1zaXplLCAudG9wYmFyIC5zYXZlLWxhYmVsLCAudG9wYmFyIC5hZGQtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9LmxheWVycy1wYW5lbCB7IHdpZHRoOiAyMDVweDsgfSB9XG5gO1xuXG5mdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5QYWdlIG5vdCBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcC86aWRcIiBlbGVtZW50PXs8RWRpdG9yIC8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChc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QyxVQUNHO0FBQUEsb0JBQUFBLEdBQUMsV0FBTyxzQkFBVztBQUFBLElBQ25CLGdCQUFBQSxHQUFDLFVBQ0c7QUFBQSxzQkFBQUEsR0FBQyxTQUFNLE1BQUssS0FBSSxTQUFTLGdCQUFBQSxHQUFDLFFBQUssR0FBSTtBQUFBLE1BQ25DLGdCQUFBQSxHQUFDLFNBQU0sTUFBSyxVQUFTLFNBQVMsZ0JBQUFBLEdBQUMsVUFBTyxHQUFJO0FBQUEsTUFDMUMsZ0JBQUFBLEdBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyxnQkFBQUEsR0FBQyxZQUFTLEdBQUk7QUFBQSxPQUMzQztBQUFBLEtBQ0o7QUFFUjs7O0FDdExBLEVBQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsZUFBZSxLQUFLLENBQUM7IiwKICAibmFtZXMiOiBbInNsaWNlIiwgIm9wdGlvbnMiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJyZXJlbmRlclF1ZXVlIiwgInByZXZEZWJvdW5jZSIsICJkZWZlciIsICJkZXB0aFNvcnQiLCAiX2lkIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiaSIsICJFTVBUWV9PQkoiLCAiRU1QVFlfQVJSIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJpc0FycmF5IiwgIkFycmF5IiwgImFzc2lnbiIsICJvYmoiLCAicHJvcHMiLCAicmVtb3ZlTm9kZSIsICJub2RlIiwgInBhcmVudE5vZGUiLCAicmVtb3ZlQ2hpbGQiLCAiY3JlYXRlRWxlbWVudCIsICJ0eXBlIiwgImNoaWxkcmVuIiwgImtleSIsICJyZWYiLCAibm9ybWFsaXplZFByb3BzIiwgImFyZ3VtZW50cyIsICJsZW5ndGgiLCAiY2FsbCIsICJkZWZhdWx0UHJvcHMiLCAiY3JlYXRlVk5vZGUiLCAib3JpZ2luYWwiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJfX2kiLCAiX191IiwgIkZyYWdtZW50IiwgInByb3BzIiwgImNoaWxkcmVuIiwgIkJhc2VDb21wb25lbnQiLCAiY29udGV4dCIsICJ0aGlzIiwgImdldERvbVNpYmxpbmciLCAidm5vZGUiLCAiY2hpbGRJbmRleCIsICJfXyIsICJfX2kiLCAic2libGluZyIsICJfX2siLCAibGVuZ3RoIiwgIl9fZSIsICJ0eXBlIiwgInJlbmRlckNvbXBvbmVudCIsICJjb21wb25lbnQiLCAiX19QIiwgIl9fZCIsICJvbGRWTm9kZSIsICJfX3YiLCAib2xkRG9tIiwgImNvbW1pdFF1ZXVlIiwgInJlZlF1ZXVlIiwgIm5ld1ZOb2RlIiwgImFzc2lnbiIsICJvcHRpb25zIiwgImRpZmYiLCAiX19uIiwgIm5hbWVzcGFjZVVSSSIsICJfX3UiLCAiY29tbWl0Um9vdCIsICJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsICJfX2MiLCAiYmFzZSIsICJzb21lIiwgImNoaWxkIiwgImVucXVldWVSZW5kZXIiLCAiYyIsICJyZXJlbmRlclF1ZXVlIiwgInB1c2giLCAicHJvY2VzcyIsICJfX3IiLCAicHJldkRlYm91bmNlIiwgImRlYm91bmNlUmVuZGVyaW5nIiwgImRlZmVyIiwgImwiLCAic29ydCIsICJkZXB0aFNvcnQiLCAic2hpZnQiLCAiZGlmZkNoaWxkcmVuIiwgInBhcmVudERvbSIsICJyZW5kZXJSZXN1bHQiLCAibmV3UGFyZW50Vk5vZGUiLCAib2xkUGFyZW50Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJuYW1lc3BhY2UiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiaXNIeWRyYXRpbmciLCAiaSIsICJjaGlsZFZOb2RlIiwgIm5ld0RvbSIsICJmaXJzdENoaWxkRG9tIiwgInJlc3VsdCIsICJzaG91bGRQbGFjZSIsICJvbGRDaGlsZHJlbiIsICJFTVBUWV9BUlIiLCAibmV3Q2hpbGRyZW5MZW5ndGgiLCAiY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSIsICJFTVBUWV9PQkoiLCAicmVmIiwgImFwcGx5UmVmIiwgImluc2VydCIsICJuZXh0U2libGluZyIsICJza2V3ZWRJbmRleCIsICJtYXRjaGluZ0luZGV4IiwgIm9sZENoaWxkcmVuTGVuZ3RoIiwgInJlbWFpbmluZ09sZENoaWxkcmVuIiwgInNrZXciLCAiQXJyYXkiLCAiY29uc3RydWN0b3IiLCAiU3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgImlzQXJyYXkiLCAiX19iIiwgImtleSIsICJmaW5kTWF0Y2hpbmdJbmRleCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInBhcmVudE5vZGUiLCAiaW5zZXJ0QmVmb3JlIiwgIm5vZGVUeXBlIiwgInRvQ2hpbGRBcnJheSIsICJvdXQiLCAieCIsICJ5IiwgIm1hdGNoZWQiLCAic2V0U3R5bGUiLCAic3R5bGUiLCAidmFsdWUiLCAic2V0UHJvcGVydHkiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgInRlc3QiLCAiZG9tIiwgIm5hbWUiLCAib2xkVmFsdWUiLCAidXNlQ2FwdHVyZSIsICJsb3dlckNhc2VOYW1lIiwgIm8iLCAiY3NzVGV4dCIsICJyZXBsYWNlIiwgIkNBUFRVUkVfUkVHRVgiLCAidG9Mb3dlckNhc2UiLCAic2xpY2UiLCAiRVZFTlRfQVRUQUNIRUQiLCAiZXZlbnRDbG9jayIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudEhhbmRsZXIiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJldmVudCIsICJ0bXAiLCAib2xkQ29tbWl0UXVldWVMZW5ndGgiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgIm5ld1R5cGUiLCAib3V0ZXIiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJjb250ZXh0VHlwZSIsICJfX0UiLCAiZG9SZW5kZXIiLCAic3ViIiwgInN0YXRlIiwgIl9faCIsICJfc2IiLCAiX19zIiwgImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwgImNsb25lTm9kZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAicm9vdCIsICJjYiIsICJjYWxsIiwgIm5vZGUiLCAibWFwIiwgIm5ld0h0bWwiLCAib2xkSHRtbCIsICJuZXdDaGlsZHJlbiIsICJpbnB1dFZhbHVlIiwgImNoZWNrZWQiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJkZWZhdWx0VmFsdWUiLCAiY2hpbGROb2RlcyIsICJhdHRyaWJ1dGVzIiwgIl9faHRtbCIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJ1bmRlZmluZWQiLCAiaGFzUmVmVW5tb3VudCIsICJjdXJyZW50IiwgInNraXBSZW1vdmUiLCAiciIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJyZXBsYWNlTm9kZSIsICJkb2N1bWVudEVsZW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJmaXJzdENoaWxkIiwgImNyZWF0ZUNvbnRleHQiLCAiZGVmYXVsdFZhbHVlIiwgIkNvbnRleHQiLCAicHJvcHMiLCAic3VicyIsICJjdHgiLCAidGhpcyIsICJnZXRDaGlsZENvbnRleHQiLCAiU2V0IiwgIl9fYyIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX3Byb3BzIiwgInZhbHVlIiwgImZvckVhY2giLCAiYyIsICJfX2UiLCAiZW5xdWV1ZVJlbmRlciIsICJzdWIiLCAiYWRkIiwgIm9sZCIsICJkZWxldGUiLCAiY2FsbCIsICJjaGlsZHJlbiIsICJpIiwgIl9fIiwgIlByb3ZpZGVyIiwgIl9fbCIsICJDb25zdW1lciIsICJjb250ZXh0VmFsdWUiLCAiY29udGV4dFR5cGUiLCAic2xpY2UiLCAiRU1QVFlfQVJSIiwgIm9wdGlvbnMiLCAiZXJyb3IiLCAidm5vZGUiLCAib2xkVk5vZGUiLCAiZXJyb3JJbmZvIiwgImNvbXBvbmVudCIsICJjdG9yIiwgImhhbmRsZWQiLCAiY29uc3RydWN0b3IiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwgInNldFN0YXRlIiwgIl9fZCIsICJjb21wb25lbnREaWRDYXRjaCIsICJfX0UiLCAiZSIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgIkJhc2VDb21wb25lbnQiLCAicHJvdG90eXBlIiwgInVwZGF0ZSIsICJjYWxsYmFjayIsICJzIiwgIl9fcyIsICJzdGF0ZSIsICJhc3NpZ24iLCAiX192IiwgIl9zYiIsICJwdXNoIiwgImZvcmNlVXBkYXRlIiwgIl9faCIsICJyZW5kZXIiLCAiRnJhZ21lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJkZWZlciIsICJQcm9taXNlIiwgInRoZW4iLCAiYmluZCIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiZGVwdGhTb3J0IiwgImEiLCAiYiIsICJfX2IiLCAicHJvY2VzcyIsICJfX3IiLCAiX2lkIiwgIk1hdGgiLCAicmFuZG9tIiwgInRvU3RyaW5nIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2aW91c0NvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9wdGlvbnMiLCAiX29wdGlvbnMiLCAib2xkQmVmb3JlRGlmZiIsICJfX2IiLCAib2xkQmVmb3JlUmVuZGVyIiwgIl9fciIsICJvbGRBZnRlckRpZmYiLCAiZGlmZmVkIiwgIm9sZENvbW1pdCIsICJfX2MiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgIm9sZFJvb3QiLCAiX18iLCAiZ2V0SG9va1N0YXRlIiwgImluZGV4IiwgInR5cGUiLCAiX19oIiwgImhvb2tzIiwgIl9fSCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgImFjdGlvbiIsICJjdXJyZW50VmFsdWUiLCAiX19OIiwgIm5leHRWYWx1ZSIsICJzZXRTdGF0ZSIsICJfX2YiLCAidXBkYXRlSG9va1N0YXRlIiwgInAiLCAicyIsICJjIiwgInVwZGF0ZWRIb29rIiwgInNob3VsZFVwZGF0ZSIsICJwcm9wcyIsICJzb21lIiwgImhvb2tJdGVtIiwgInByZXZTY3UiLCAicmVzdWx0IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAidXNlQ29udGV4dCIsICJjb250ZXh0IiwgInByb3ZpZGVyIiwgImN1cnJlbnRDb21wb25lbnQiLCAiX19jIiwgInN0YXRlIiwgImdldEhvb2tTdGF0ZSIsICJjdXJyZW50SW5kZXgiLCAiYyIsICJfXyIsICJzdWIiLCAicHJvcHMiLCAidmFsdWUiLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImxpc3RlbmVycyIsICJzdGF0ZSIsICJkIiwgImgiLCAieCIsICJkIiwgImgiLCAidCIsICJ2IiwgInQiLCAiYSIsICJoIiwgInciLCAicyIsICJjIiwgIkEiLCAiZCIsICJoIiwgImkiLCAibGlzdGVuZXJzIiwgInBlbmRpbmciLCAiZCIsICJoIiwgImltYWdlcyIsICJpIiwgInMiLCAibCIsICJlbnRyaWVzIiwgImUiLCAiYyIsICJhIiwgImIiLCAiZCIsICJpIiwgImltYWdlcyIsICJ3IiwgImgiLCAieCIsICJ5IiwgImxheWVyIiwgInN0YXRlIiwgInciLCAiaCIsICJ2bm9kZUlkIiwgImNyZWF0ZVZOb2RlIiwgInR5cGUiLCAicHJvcHMiLCAia2V5IiwgImlzU3RhdGljQ2hpbGRyZW4iLCAiX19zb3VyY2UiLCAiX19zZWxmIiwgInJlZiIsICJpIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgInZub2RlSWQiLCAiX19pIiwgIl9fdSIsICJkZWZhdWx0UHJvcHMiLCAib3B0aW9ucyIsICJkIiwgImgiLCAidSIsICJzIiwgIkEiLCAiZSIsICJ4IiwgInkiLCAiaSIsICJ0IiwgInYiLCAic3RhdGUiLCAibGF5ZXJJZCIsICJsIiwgImIiLCAibGF5ZXIiLCAidyIsICJpbWFnZXMiLCAidSIsICJ1IiwgInUiLCAiZSIsICJyIiwgImciLCAiYiIsICJkIiwgImgiLCAicyIsICJ2IiwgImMiLCAieCIsICJtIiwgInUiLCAiZCIsICJlIiwgInMiLCAiQSIsICJzIiwgImQiLCAiQSIsICJoIiwgInUiLCAidCIsICJlIiwgImQiLCAiaCIsICJ1IiwgInUiLCAicyIsICJBIiwgImltYWdlcyIsICJlIiwgImgiLCAiZSIsICJzdGF0ZSIsICJzIiwgImQiLCAiQSIsICJwIiwgInUiLCAidSIsICJuYXZpZ2F0ZSIsICJBIiwgImQiLCAidCIsICJlIiwgInUiXQp9Cg==
