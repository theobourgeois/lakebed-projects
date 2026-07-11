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
function finite(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function sanitizeTransform(input) {
  const t3 = input ?? {};
  return {
    x: finite(t3.x, 0),
    y: finite(t3.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t3.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t3.h, MIN_LAYER_SIZE)),
    rotation: finite(t3.rotation, 0),
    opacity: clamp(finite(t3.opacity, 1), 0, 1),
    visible: typeof t3.visible === "boolean" ? t3.visible : true
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

// lakebed-source:client/state/api.ts
var api = {
  createProject: useMutation("createProject"),
  createProjectFromImage: useMutation("createProjectFromImage"),
  renameProject: useMutation("renameProject"),
  setProjectThumb: useMutation("setProjectThumb"),
  deleteProject: useMutation("deleteProject"),
  addLayer: useMutation("addLayer"),
  updateLayer: useMutation("updateLayer"),
  renameLayer: useMutation("renameLayer"),
  deleteLayer: useMutation("deleteLayer"),
  setLayerOrder: useMutation("setLayerOrder"),
  getAsset: useMutation("getAsset")
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
  fitVersion: 0
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
    case "setThumb":
      return `setThumb:${op.id}`;
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
    case "renameLayer":
      return withTimeout(api.renameLayer(resolveLayerId(op.id), op.name));
    case "deleteLayer":
      return withTimeout(api.deleteLayer(resolveLayerId(op.id)));
    case "setOrder":
      return withTimeout(api.setLayerOrder(op.projectId, op.ids.map(resolveLayerId)));
    case "renameProject":
      return withTimeout(api.renameProject(op.id, op.name));
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
function loadImage(id) {
  const cached = images.get(id);
  if (cached) return cached;
  const promise = ensureAsset(id).then(
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
    ctx.translate((layer.x + layer.w / 2) * scale, (layer.y + layer.h / 2) * scale);
    ctx.rotate(layer.rotation * Math.PI / 180);
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
  setState({ doc: null, selection: [] });
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
        visible: true
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
function LayerView({ layer }) {
  const asset = useAssetEntry(layer.assetId);
  const style = {
    width: layer.w,
    height: layer.h,
    transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg)`,
    opacity: layer.opacity,
    display: layer.visible ? "block" : "none"
  };
  if (!asset) {
    return /* @__PURE__ */ u3("div", { "data-layerid": layer.id, className: "absolute left-0 top-0 animate-pulse bg-neutral-500/30", style });
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
function SelectionBox({ layer, zoom, single }) {
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
        /* @__PURE__ */ u3("div", { className: "absolute inset-0 border-sky-400", style: { borderWidth: 1.5 / zoom, borderStyle: "solid" } }),
        single ? /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3(
            "div",
            {
              className: "absolute bg-sky-400",
              style: { left: "50%", top: -22 / zoom, width: 1.5 / zoom, height: 22 / zoom, transform: "translateX(-50%)" }
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
  const ref = A2(null);
  const gestureRef = A2(null);
  const panningRef = A2(false);
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
    const handle = target.closest("[data-handle]")?.getAttribute("data-handle");
    if (handle && state2.selection.length === 1) {
      const layer = state2.doc?.layers.find((l3) => l3.id === state2.selection[0]);
      if (layer) {
        const start = { ...layer };
        gestureRef.current = handle === "rot" ? { kind: "rotate", id: layer.id, start } : { kind: "scale", id: layer.id, handle, start };
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
      const world = screenToWorld(e3.clientX, e3.clientY);
      const selected = getState().selection;
      const starts = /* @__PURE__ */ new Map();
      for (const layer of getState().doc?.layers ?? []) {
        if (selected.includes(layer.id)) starts.set(layer.id, { x: layer.x, y: layer.y });
      }
      gestureRef.current = { kind: "move", startX: world.x, startY: world.y, starts, moved: false };
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
    if (gesture.kind === "move") {
      const dx = world.x - gesture.startX;
      const dy = world.y - gesture.startY;
      if (!gesture.moved && Math.hypot(dx, dy) * getState().view.zoom < 2) return;
      gesture.moved = true;
      const patches = /* @__PURE__ */ new Map();
      for (const [id, start] of gesture.starts) {
        patches.set(id, { x: start.x + dx, y: start.y + dy });
      }
      applyTransient(patches);
      return;
    }
    if (gesture.kind === "scale") {
      const next = scaleFromHandle(gesture.start, gesture.handle, world, e3.shiftKey);
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
    if (!gesture || gesture.kind === "pan") return;
    const layers = getState().doc?.layers ?? [];
    const byId = new Map(layers.map((l3) => [l3.id, l3]));
    if (gesture.kind === "move") {
      if (!gesture.moved) return;
      const changes = [];
      for (const [id, start] of gesture.starts) {
        const layer2 = byId.get(id);
        if (layer2) {
          changes.push({ id, before: start, after: { x: layer2.x, y: layer2.y } });
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
        { id: layer.id, before: { x: x3, y: y3, w: w3, h: h3 }, after: { x: layer.x, y: layer.y, w: layer.w, h: layer.h } }
      ]);
      return;
    }
    commitTransforms("Rotate", [
      { id: layer.id, before: { rotation: gesture.start.rotation }, after: { rotation: layer.rotation } }
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
  const selectedLayers = doc.layers.filter((l3) => selection.includes(l3.id) && l3.visible);
  const cursor = panMode ? panningRef.current ? "grabbing" : "grab" : "default";
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
      onDragOver: (e3) => e3.preventDefault(),
      onDrop: (e3) => void onDrop(e3),
      children: [
        /* @__PURE__ */ u3(
          "div",
          {
            className: "absolute left-0 top-0",
            style: { transform: `translate(${view.panX}px, ${view.panY}px) scale(${view.zoom})`, transformOrigin: "0 0" },
            children: [
              /* @__PURE__ */ u3(
                "div",
                {
                  className: "checker artboard",
                  style: {
                    width: doc.width,
                    height: doc.height
                  },
                  children: doc.layers.map((layer) => /* @__PURE__ */ u3(LayerView, { layer }, layer.id))
                }
              ),
              selectedLayers.map((layer) => /* @__PURE__ */ u3(SelectionBox, { layer, zoom: view.zoom, single: selectedLayers.length === 1 }, layer.id))
            ]
          }
        ),
        doc.layers.length === 0 ? /* @__PURE__ */ u3("div", { className: "canvas-empty", children: /* @__PURE__ */ u3("p", { children: "Drop images here, or use Add image in the top bar" }) }) : null
      ]
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
var FiCopy = (props) => /* @__PURE__ */ u3(Icon, { ...props, children: [
  /* @__PURE__ */ u3("rect", { x: "9", y: "9", width: "11", height: "11", rx: "1" }),
  /* @__PURE__ */ u3("path", { d: "M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" })
] });
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
  const dragFromRef = A2(null);
  const opacityBeforeRef = A2(null);
  if (!doc) return null;
  const display = [...doc.layers].reverse();
  const count = doc.layers.length;
  const selectedLayers = doc.layers.filter((l3) => selection.includes(l3.id));
  const opacity = selectedLayers.length > 0 ? selectedLayers[selectedLayers.length - 1].opacity : 1;
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
  function onOpacityInput(event) {
    const value = Number(event.currentTarget.value) / 100;
    const targets = getState().selection;
    if (targets.length === 0) return;
    if (!opacityBeforeRef.current) {
      const layers = getState().doc?.layers ?? [];
      opacityBeforeRef.current = layers.filter((l3) => targets.includes(l3.id)).map((l3) => ({
        id: l3.id,
        before: { opacity: l3.opacity },
        after: { opacity: l3.opacity }
      }));
    }
    applyTransient(new Map(targets.map((id) => [id, { opacity: value }])));
  }
  function onOpacityCommit() {
    const changes = opacityBeforeRef.current;
    opacityBeforeRef.current = null;
    if (!changes) return;
    const layers = getState().doc?.layers ?? [];
    for (const change of changes) {
      const layer = layers.find((l3) => l3.id === change.id);
      if (layer) change.after = { opacity: layer.opacity };
    }
    commitTransforms("Opacity", changes);
  }
  return /* @__PURE__ */ u3("aside", { className: "layers-panel", children: [
    /* @__PURE__ */ u3(
      "div",
      {
        className: `opacity-control ${selectedLayers.length === 0 ? "disabled" : ""}`,
        style: { "--progress": `${Math.round(opacity * 100)}%` },
        children: [
          /* @__PURE__ */ u3("div", { className: "opacity-label", children: [
            /* @__PURE__ */ u3("span", { children: "Opacity" }),
            /* @__PURE__ */ u3("span", { className: "tabular-nums", children: [
              Math.round(opacity * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ u3(
            "input",
            {
              type: "range",
              min: 0,
              max: 100,
              value: Math.round(opacity * 100),
              disabled: selectedLayers.length === 0,
              onInput: onOpacityInput,
              onChange: onOpacityCommit
            }
          )
        ]
      }
    ),
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
    ),
    /* @__PURE__ */ u3("div", { className: "panel-actions", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          disabled: selectedLayers.length === 0,
          onClick: duplicateSelection,
          title: "Duplicate (\u2318D)",
          className: "button",
          children: [
            /* @__PURE__ */ u3(FiCopy, {}),
            "Duplicate"
          ]
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          type: "button",
          disabled: selectedLayers.length === 0,
          onClick: deleteSelection,
          title: "Delete (\u232B)",
          className: "button danger",
          children: [
            /* @__PURE__ */ u3(FiTrash2, {}),
            "Delete"
          ]
        }
      )
    ] })
  ] });
}

// lakebed-source:client/components/Toolbar.tsx
var TOOLS = [
  { id: "move", label: "Move", hint: "V", icon: FiMousePointer },
  { id: "hand", label: "Hand", hint: "H", icon: FiHand }
];
function Toolbar() {
  const tool = useEditor((s3) => s3.tool);
  return /* @__PURE__ */ u3("aside", { className: "tool-rail", children: TOOLS.map((t3) => {
    const ToolIcon = t3.icon;
    return /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        title: `${t3.label} (${t3.hint})`,
        "aria-label": t3.label,
        onClick: () => setState({ tool: t3.id }),
        className: `tool-button ${tool === t3.id ? "active" : ""}`,
        children: /* @__PURE__ */ u3(ToolIcon, {})
      },
      t3.id
    );
  }) });
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
      /* @__PURE__ */ u3(
        IconButton,
        {
          label: "Zoom out (\u2318-)",
          onClick: () => zoomBy(-1),
          children: /* @__PURE__ */ u3(FiMinus, {})
        }
      ),
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
        onClick: () => fileRef.current?.click(),
        className: "button",
        children: [
          /* @__PURE__ */ u3(FiImage, {}),
          /* @__PURE__ */ u3("span", { className: "add-label", children: "Add image" })
        ]
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
        setSelection([]);
        return;
      }
      if (e3.key === "v" || e3.key === "V") {
        setState({ tool: "move" });
        return;
      }
      if (e3.key === "h" || e3.key === "H") {
        setState({ tool: "hand" });
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
        visible: true
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
.tool-rail { width: 44px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 7px 0; border-right: 1px solid var(--border); background: var(--surface); }
.tool-button { width: 30px; height: 30px; display: grid; place-items: center; padding: 0; border: 1px solid transparent; border-radius: 2px; background: transparent; color: var(--muted); }.tool-button:hover { border-color: var(--border); color: var(--text); }.tool-button.active { border-color: var(--accent); background: var(--accent); color: #fff; }.tool-button svg { width: 15px; height: 15px; }
.layers-panel { width: 244px; flex-shrink: 0; display: flex; flex-direction: column; border-left: 1px solid var(--border); background: var(--surface); }
.panel-head { display: flex; align-items: center; gap: 7px; height: 42px; padding: 0 12px; border-bottom: 1px solid var(--border); color: var(--muted); font: 10.5px var(--mono); letter-spacing: .08em; text-transform: uppercase; }.panel-head svg { width: 13px; height: 13px; }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYXBpLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9zdG9yZS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvcGVyc2lzdC50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RhdGUvYXNzZXRzLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9saWIvcmVuZGVyLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9oaXN0b3J5LnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS9hY3Rpb25zLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9zdGF0ZS92aWV3LnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC9nZW9tZXRyeS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbGliL2ltYWdlLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy91dGlscy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlL2ZjNWFmNmUwYWI5NjVjYjZjM2UzY2IxMjlkZDZjOTRlL25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvZmM1YWY2ZTBhYjk2NWNiNmMzZTNjYjEyOWRkNmM5NGUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy9pbmRleC5qcyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9DYW52YXNTdGFnZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvSWNvbnMudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0xheWVyc1BhbmVsLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9Ub29sYmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9UaGVtZVRvZ2dsZS50c3giLCAibGFrZWJlZC1zb3VyY2U6Y2xpZW50L2NvbXBvbmVudHMvVG9wQmFyLnRzeCIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvY29tcG9uZW50cy9FZGl0b3IudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9jb21wb25lbnRzL0hvbWUudHN4IiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG5cbmV4cG9ydCB0eXBlIExheWVyVHJhbnNmb3JtID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdzogbnVtYmVyO1xuICBoOiBudW1iZXI7XG4gIC8qKiBEZWdyZWVzLCBjbG9ja3dpc2UsIGFib3V0IHRoZSBib3ggY2VudGVyLiAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICAvKiogMC4uMSAqL1xuICBvcGFjaXR5OiBudW1iZXI7XG4gIHZpc2libGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBMYXllciA9IExheWVyVHJhbnNmb3JtICYge1xuICBpZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbi8qKiBUaGUgaW4tbWVtb3J5IGVkaXRpbmcgZG9jdW1lbnQuIGxheWVyc1swXSBpcyB0aGUgYm90dG9tIGxheWVyLiAqL1xuZXhwb3J0IHR5cGUgUHJvamVjdERvYyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJzOiBMYXllcltdO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdE1ldGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyT3JkZXI6IHN0cmluZ1tdO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyUm93ID0ge1xuICBpZDogc3RyaW5nO1xuICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGE6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RUaHVtYiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGh1bWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEFzc2V0UGF5bG9hZCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVHJhbnNmb3JtKGlucHV0OiBQYXJ0aWFsPExheWVyVHJhbnNmb3JtPiB8IG51bGwgfCB1bmRlZmluZWQpOiBMYXllclRyYW5zZm9ybSB7XG4gIGNvbnN0IHQgPSBpbnB1dCA/PyB7fTtcbiAgcmV0dXJuIHtcbiAgICB4OiBmaW5pdGUodC54LCAwKSxcbiAgICB5OiBmaW5pdGUodC55LCAwKSxcbiAgICB3OiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQudywgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICBoOiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQuaCwgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICByb3RhdGlvbjogZmluaXRlKHQucm90YXRpb24sIDApLFxuICAgIG9wYWNpdHk6IGNsYW1wKGZpbml0ZSh0Lm9wYWNpdHksIDEpLCAwLCAxKSxcbiAgICB2aXNpYmxlOiB0eXBlb2YgdC52aXNpYmxlID09PSBcImJvb2xlYW5cIiA/IHQudmlzaWJsZSA6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRyYW5zZm9ybSh0OiBMYXllclRyYW5zZm9ybSk6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzYW5pdGl6ZVRyYW5zZm9ybSh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUcmFuc2Zvcm0ocmF3OiBzdHJpbmcpOiBMYXllclRyYW5zZm9ybSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPExheWVyVHJhbnNmb3JtPik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nQXJyYXkocmF3OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZC5maWx0ZXIoKHYpOiB2IGlzIHN0cmluZyA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgOiBbXTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cbiIsICIvLyBUeXBlZCB3cmFwcGVycyBvdmVyIHRoZSBjYXBzdWxlJ3MgbXV0YXRpb25zLiBMYWtlYmVkJ3MgdXNlTXV0YXRpb24gcGVyZm9ybXNcbi8vIG5vIGhvb2sgY2FsbHMgaW50ZXJuYWxseSAoaXQganVzdCBiaW5kcyB0aGUgV2ViU29ja2V0IHJlcXVlc3QpLCBzbyBpdCBpc1xuLy8gc2FmZSB0byBjcmVhdGUgdGhlc2UgYmluZGluZ3Mgb25jZSBhdCBtb2R1bGUgc2NvcGUgYW5kIGNhbGwgdGhlbSBmcm9tXG4vLyBub24tY29tcG9uZW50IGNvZGUgbGlrZSB0aGUgcGVyc2lzdCBxdWV1ZS5cblxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQXNzZXRQYXlsb2FkIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0ge1xuICBjcmVhdGVQcm9qZWN0OiB1c2VNdXRhdGlvbjxbbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl0sIHsgaWQ6IHN0cmluZyB9PihcImNyZWF0ZVByb2plY3RcIiksXG4gIGNyZWF0ZVByb2plY3RGcm9tSW1hZ2U6IHVzZU11dGF0aW9uPFxuICAgIFtuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBsYXllck5hbWU6IHN0cmluZywgc3JjOiBzdHJpbmcsIGRhdGFKc29uOiBzdHJpbmddLFxuICAgIHsgaWQ6IHN0cmluZzsgbGF5ZXJJZDogc3RyaW5nOyBhc3NldElkOiBzdHJpbmc7IHNyYzogc3RyaW5nIH1cbiAgPihcImNyZWF0ZVByb2plY3RGcm9tSW1hZ2VcIiksXG4gIHJlbmFtZVByb2plY3Q6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmddLCB2b2lkPihcInJlbmFtZVByb2plY3RcIiksXG4gIHNldFByb2plY3RUaHVtYjogdXNlTXV0YXRpb248W2lkOiBzdHJpbmcsIHRodW1iOiBzdHJpbmddLCB2b2lkPihcInNldFByb2plY3RUaHVtYlwiKSxcbiAgZGVsZXRlUHJvamVjdDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCB2b2lkPihcImRlbGV0ZVByb2plY3RcIiksXG4gIGFkZExheWVyOiB1c2VNdXRhdGlvbjxcbiAgICBbXG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgIGNsaWVudEtleTogc3RyaW5nLFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgZGF0YUpzb246IHN0cmluZyxcbiAgICAgIGFzc2V0OiB7IGFzc2V0SWQ/OiBzdHJpbmc7IHNyYz86IHN0cmluZzsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9XG4gICAgXSxcbiAgICB7IGxheWVySWQ6IHN0cmluZzsgYXNzZXRJZDogc3RyaW5nOyBzcmM/OiBzdHJpbmcgfVxuICA+KFwiYWRkTGF5ZXJcIiksXG4gIHVwZGF0ZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgZGF0YUpzb246IHN0cmluZ10sIHZvaWQ+KFwidXBkYXRlTGF5ZXJcIiksXG4gIHJlbmFtZUxheWVyOiB1c2VNdXRhdGlvbjxbaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nXSwgdm9pZD4oXCJyZW5hbWVMYXllclwiKSxcbiAgZGVsZXRlTGF5ZXI6IHVzZU11dGF0aW9uPFtpZDogc3RyaW5nXSwgdm9pZD4oXCJkZWxldGVMYXllclwiKSxcbiAgc2V0TGF5ZXJPcmRlcjogdXNlTXV0YXRpb248W3Byb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdXSwgdm9pZD4oXCJzZXRMYXllck9yZGVyXCIpLFxuICBnZXRBc3NldDogdXNlTXV0YXRpb248W2lkOiBzdHJpbmddLCBBc3NldFBheWxvYWQ+KFwiZ2V0QXNzZXRcIilcbn07XG5cbi8qKlxuICogUXVlcmllcyBhcnJpdmUgYXMgYFtdYCBiZWZvcmUgdGhlIGZpcnN0IFdlYlNvY2tldCByZXN1bHQsIHRoZW4gYXNcbiAqIGB7IHJlYWR5OiB0cnVlLCBpdGVtcyB9YC4gVGhpcyBub3JtYWxpemVzIGJvdGggc2hhcGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlSZXN1bHQ8VD4ocmF3OiB1bmtub3duKTogeyByZWFkeTogYm9vbGVhbjsgaXRlbXM6IFRbXSB9IHtcbiAgaWYgKHJhdyAmJiB0eXBlb2YgcmF3ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHJhdykgJiYgKHJhdyBhcyB7IHJlYWR5PzogYm9vbGVhbiB9KS5yZWFkeSkge1xuICAgIGNvbnN0IGl0ZW1zID0gKHJhdyBhcyB7IGl0ZW1zPzogVFtdIH0pLml0ZW1zO1xuICAgIHJldHVybiB7IHJlYWR5OiB0cnVlLCBpdGVtczogQXJyYXkuaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtdIH07XG4gIH1cbiAgcmV0dXJuIHsgcmVhZHk6IGZhbHNlLCBpdGVtczogW10gfTtcbn1cbiIsICIvLyBUaW55IG9ic2VydmFibGUgc3RvcmUgZm9yIHRoZSBlZGl0b3IuIFdoaWxlIGEgcHJvamVjdCBpcyBvcGVuLCB0aGlzIGRvYyBpc1xuLy8gdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGg6IHBvaW50ZXIgZ2VzdHVyZXMgbXV0YXRlIGl0IHN5bmNocm9ub3VzbHkgZm9yXG4vLyBpbnN0YW50IGZlZWRiYWNrLCBhbmQgcGVyc2lzdGVuY2UgaGFwcGVucyBpbiB0aGUgYmFja2dyb3VuZCAoc2VlIHBlcnNpc3QudHMpLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgdHlwZSB7IFByb2plY3REb2MgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFRvb2wgPSBcIm1vdmVcIiB8IFwiaGFuZFwiO1xuZXhwb3J0IHR5cGUgU2F2ZVN0YXR1cyA9IFwic2F2ZWRcIiB8IFwic2F2aW5nXCIgfCBcInJldHJ5aW5nXCI7XG5cbmV4cG9ydCB0eXBlIEVkaXRvclZpZXcgPSB7IHpvb206IG51bWJlcjsgcGFuWDogbnVtYmVyOyBwYW5ZOiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgRWRpdG9yU3RhdGUgPSB7XG4gIGRvYzogUHJvamVjdERvYyB8IG51bGw7XG4gIHNlbGVjdGlvbjogc3RyaW5nW107XG4gIHRvb2w6IFRvb2w7XG4gIHNwYWNlUGFuOiBib29sZWFuO1xuICB2aWV3OiBFZGl0b3JWaWV3O1xuICBzYXZlU3RhdHVzOiBTYXZlU3RhdHVzO1xuICBwZW5kaW5nT3BzOiBudW1iZXI7XG4gIHNhdmVFcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEJ1bXBlZCB3aGVuZXZlciB0aGUgdW5kby9yZWRvIHN0YWNrcyBjaGFuZ2UsIHNvIHRoZSBVSSByZS1yZWFkcyB0aGVtLiAqL1xuICBoaXN0VmVyc2lvbjogbnVtYmVyO1xuICAvKiogQnVtcGVkIHRvIGFzayB0aGUgY2FudmFzIHRvIHJlLWZpdCB0aGUgYXJ0Ym9hcmQgdG8gdGhlIHZpZXdwb3J0LiAqL1xuICBmaXRWZXJzaW9uOiBudW1iZXI7XG59O1xuXG5sZXQgc3RhdGU6IEVkaXRvclN0YXRlID0ge1xuICBkb2M6IG51bGwsXG4gIHNlbGVjdGlvbjogW10sXG4gIHRvb2w6IFwibW92ZVwiLFxuICBzcGFjZVBhbjogZmFsc2UsXG4gIHZpZXc6IHsgem9vbTogMSwgcGFuWDogMCwgcGFuWTogMCB9LFxuICBzYXZlU3RhdHVzOiBcInNhdmVkXCIsXG4gIHBlbmRpbmdPcHM6IDAsXG4gIHNhdmVFcnJvcjogbnVsbCxcbiAgaGlzdFZlcnNpb246IDAsXG4gIGZpdFZlcnNpb246IDBcbn07XG5cbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBTZXQ8KCkgPT4gdm9pZD4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRlKCk6IEVkaXRvclN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhdGUocGF0Y2g6IFBhcnRpYWw8RWRpdG9yU3RhdGU+KTogdm9pZCB7XG4gIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4ucGF0Y2ggfTtcbiAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBbLi4ubGlzdGVuZXJzXSkge1xuICAgIGxpc3RlbmVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvYyhmbjogKGRvYzogUHJvamVjdERvYykgPT4gUHJvamVjdERvYyk6IHZvaWQge1xuICBpZiAoIXN0YXRlLmRvYykgcmV0dXJuO1xuICBzZXRTdGF0ZSh7IGRvYzogZm4oc3RhdGUuZG9jKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcjogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgfTtcbn1cblxuLyoqIFN1YnNjcmliZSBhIGNvbXBvbmVudCB0byBhIHNsaWNlIG9mIGVkaXRvciBzdGF0ZSAoT2JqZWN0LmlzIGNvbXBhcmlzb24pLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVkaXRvcjxUPihzZWxlY3RvcjogKHM6IEVkaXRvclN0YXRlKSA9PiBUKTogVCB7XG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHNlbGVjdG9yO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHNlbGVjdG9yKHN0YXRlKSk7XG4gIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcbiAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0ID0gc2VsZWN0b3JSZWYuY3VycmVudChzdGF0ZSk7XG4gICAgICBpZiAoIU9iamVjdC5pcyhuZXh0LCB2YWx1ZVJlZi5jdXJyZW50KSkge1xuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dDtcbiAgICAgICAgc2V0VmFsdWUoKCkgPT4gbmV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGVjaygpO1xuICAgIHJldHVybiBzdWJzY3JpYmUoY2hlY2spO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwgIi8vIFdyaXRlLWJlaGluZCBwZXJzaXN0ZW5jZSBxdWV1ZTogdGhlIG9wdGltaXN0aWMgZW5naW5lJ3MgYmFja2JvbmUuXG4vL1xuLy8gRXZlcnkgZWRpdCBpcyBhcHBsaWVkIHRvIHRoZSBsb2NhbCBkb2MgaW1tZWRpYXRlbHk7IHRoZSBjb3JyZXNwb25kaW5nXG4vLyBvcGVyYXRpb24gaXMgZW5xdWV1ZWQgaGVyZSBhbmQgZHJhaW5lZCBpbiBvcmRlciBvdmVyIHRoZSBXZWJTb2NrZXQuXG4vL1xuLy8gR3VhcmFudGVlczpcbi8vIC0gRklGTzogYW4gb3AgdGhhdCByZWZlcmVuY2VzIGEgbGF5ZXIgY3JlYXRlZCBieSBhbiBlYXJsaWVyIG9wIGFsd2F5cyBydW5zXG4vLyAgIGFmdGVyIGl0LCBzbyB0ZW1wIGNsaWVudCBpZHMgY2FuIGJlIHJlbWFwcGVkIHRvIHNlcnZlciBpZHMgb24gdGhlIGZseS5cbi8vIC0gQ29hbGVzY2luZzogcmFwaWQgdXBkYXRlcyB0byB0aGUgc2FtZSB0YXJnZXQgY29sbGFwc2UgaW50byBvbmUgcGVuZGluZyBvcFxuLy8gICAoZHJhZyBnZXN0dXJlcyBkb24ndCBmbG9vZCB0aGUgc2VydmVyKS5cbi8vIC0gRGVsaXZlcnk6IG9wcyB0aGF0IHRpbWUgb3V0IChkZWFkIHNvY2tldCwgcmVjb25uZWN0KSBhcmUgcmV0cmllZCB3aXRoXG4vLyAgIGJhY2tvZmYgZm9yZXZlcjsgYWRkTGF5ZXIgY2FycmllcyBhbiBpZGVtcG90ZW5jeSBrZXkgc28gcmV0cmllcyBuZXZlclxuLy8gICBkdXBsaWNhdGUuIERldGVybWluaXN0aWMgc2VydmVyIHJlamVjdGlvbnMgYXJlIGRyb3BwZWQgYW5kIHN1cmZhY2VkLlxuXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgUGVyc2lzdE9wID1cbiAgfCB7XG4gICAgICBraW5kOiBcImFkZExheWVyXCI7XG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICAgIGNsaWVudElkOiBzdHJpbmc7XG4gICAgICBjbGllbnRLZXk6IHN0cmluZztcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGRhdGE6IHN0cmluZztcbiAgICAgIGFzc2V0OiB7IHJlZjogc3RyaW5nIH0gfCB7IGNsaWVudElkOiBzdHJpbmc7IHNyYzogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xuICAgIH1cbiAgfCB7IGtpbmQ6IFwidXBkYXRlTGF5ZXJcIjsgaWQ6IHN0cmluZzsgZGF0YTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lTGF5ZXJcIjsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1cbiAgfCB7IGtpbmQ6IFwiZGVsZXRlTGF5ZXJcIjsgaWQ6IHN0cmluZyB9XG4gIHwgeyBraW5kOiBcInNldE9yZGVyXCI7IHByb2plY3RJZDogc3RyaW5nOyBpZHM6IHN0cmluZ1tdIH1cbiAgfCB7IGtpbmQ6IFwicmVuYW1lUHJvamVjdFwiOyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVxuICB8IHsga2luZDogXCJzZXRUaHVtYlwiOyBpZDogc3RyaW5nOyB0aHVtYjogc3RyaW5nIH07XG5cbmNvbnN0IE9QX1RJTUVPVVRfTVMgPSAxMF8wMDA7XG4vLyBVcGxvYWRzIGdvIGNsaWVudCBcdTIxOTIgTGFrZWJlZCBcdTIxOTIgUzM7IGFsbG93IG1vcmUgdGltZSB0aGFuIGEgbm9ybWFsIG1ldGFkYXRhIHdyaXRlLlxuY29uc3QgVVBMT0FEX1RJTUVPVVRfTVMgPSA2MF8wMDA7XG5jb25zdCBNQVhfQkFDS09GRl9NUyA9IDE1XzAwMDtcblxuLy8gVGVtcCBjbGllbnQgaWQgLT4gc2VydmVyIGlkLiBDbGllbnQgY29kZSBvbmx5IGV2ZXIgc2VlcyBjbGllbnQgaWRzOyB0aGVcbi8vIHRyYW5zbGF0aW9uIGhhcHBlbnMgaGVyZSBhdCBleGVjdXRpb24gdGltZS5cbmNvbnN0IGxheWVySWRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbmNvbnN0IGFzc2V0SWRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuY29uc3QgcXVldWU6IFBlcnNpc3RPcFtdID0gW107XG5sZXQgZHJhaW5pbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVMYXllcklkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbGF5ZXJJZHMuZ2V0KGlkKSA/PyBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBc3NldElkKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYXNzZXRJZHMuZ2V0KGlkKSA/PyBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEFzc2V0SWQoY2xpZW50SWQ6IHN0cmluZywgc2VydmVySWQ6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY2xpZW50SWQgIT09IHNlcnZlcklkKSBhc3NldElkcy5zZXQoY2xpZW50SWQsIHNlcnZlcklkKTtcbn1cblxubGV0IG5leHRDbGllbnRJZCA9IDE7XG5leHBvcnQgZnVuY3Rpb24gbmV3Q2xpZW50SWQocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cHJlZml4fV8ke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfV8keyhuZXh0Q2xpZW50SWQrKykudG9TdHJpbmcoMzYpfV8ke01hdGgucmFuZG9tKClcbiAgICAudG9TdHJpbmcoMzYpXG4gICAgLnNsaWNlKDIsIDgpfWA7XG59XG5cbi8qKiBLZXkgZm9yIGNvYWxlc2Npbmc7IG9wcyB3aXRoIHRoZSBzYW1lIGtleSByZXBsYWNlIGVhY2ggb3RoZXIgaW4gcGxhY2UuICovXG5mdW5jdGlvbiBvcEtleShvcDogUGVyc2lzdE9wKTogc3RyaW5nIHwgbnVsbCB7XG4gIHN3aXRjaCAob3Aua2luZCkge1xuICAgIGNhc2UgXCJ1cGRhdGVMYXllclwiOlxuICAgICAgcmV0dXJuIGB1cGRhdGVMYXllcjoke29wLmlkfWA7XG4gICAgY2FzZSBcInJlbmFtZUxheWVyXCI6XG4gICAgICByZXR1cm4gYHJlbmFtZUxheWVyOiR7b3AuaWR9YDtcbiAgICBjYXNlIFwic2V0T3JkZXJcIjpcbiAgICAgIHJldHVybiBgc2V0T3JkZXI6JHtvcC5wcm9qZWN0SWR9YDtcbiAgICBjYXNlIFwicmVuYW1lUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIGByZW5hbWVQcm9qZWN0OiR7b3AuaWR9YDtcbiAgICBjYXNlIFwic2V0VGh1bWJcIjpcbiAgICAgIHJldHVybiBgc2V0VGh1bWI6JHtvcC5pZH1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZShvcDogUGVyc2lzdE9wKTogdm9pZCB7XG4gIGNvbnN0IGtleSA9IG9wS2V5KG9wKTtcbiAgaWYgKGtleSkge1xuICAgIGZvciAobGV0IGkgPSBxdWV1ZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKG9wS2V5KHF1ZXVlW2ldKSA9PT0ga2V5KSB7XG4gICAgICAgIHF1ZXVlW2ldID0gb3A7XG4gICAgICAgIHN5bmNTdGF0dXMoKTtcbiAgICAgICAgdm9pZCBkcmFpbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHF1ZXVlLnB1c2gob3ApO1xuICBzeW5jU3RhdHVzKCk7XG4gIHZvaWQgZHJhaW4oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlbmRpbmdDb3VudCgpOiBudW1iZXIge1xuICByZXR1cm4gcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApO1xufVxuXG5mdW5jdGlvbiBzeW5jU3RhdHVzKHBhdGNoOiBQYXJ0aWFsPHsgc2F2ZVN0YXR1czogXCJzYXZlZFwiIHwgXCJzYXZpbmdcIiB8IFwicmV0cnlpbmdcIjsgc2F2ZUVycm9yOiBzdHJpbmcgfCBudWxsIH0+ID0ge30pOiB2b2lkIHtcbiAgY29uc3QgYnVzeSA9IHF1ZXVlLmxlbmd0aCA+IDAgfHwgZHJhaW5pbmc7XG4gIHNldFN0YXRlKHtcbiAgICBzYXZlU3RhdHVzOiBwYXRjaC5zYXZlU3RhdHVzID8/IChidXN5ID8gXCJzYXZpbmdcIiA6IFwic2F2ZWRcIiksXG4gICAgcGVuZGluZ09wczogcXVldWUubGVuZ3RoICsgKGRyYWluaW5nID8gMSA6IDApLFxuICAgIC4uLihwYXRjaC5zYXZlRXJyb3IgIT09IHVuZGVmaW5lZCA/IHsgc2F2ZUVycm9yOiBwYXRjaC5zYXZlRXJyb3IgfSA6IHt9KVxuICB9KTtcbn1cblxuY2xhc3MgT3BUaW1lb3V0IGV4dGVuZHMgRXJyb3Ige31cblxuZnVuY3Rpb24gd2l0aFRpbWVvdXQ8VD4ocHJvbWlzZTogUHJvbWlzZTxUPiwgbXMgPSBPUF9USU1FT1VUX01TKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgT3BUaW1lb3V0KFwidGltZWQgb3V0XCIpKSwgbXMpO1xuICAgIHByb21pc2UudGhlbihcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZShvcDogUGVyc2lzdE9wKTogUHJvbWlzZTx2b2lkPiB7XG4gIHN3aXRjaCAob3Aua2luZCkge1xuICAgIGNhc2UgXCJhZGRMYXllclwiOiB7XG4gICAgICBjb25zdCBhc3NldCA9XG4gICAgICAgIFwicmVmXCIgaW4gb3AuYXNzZXRcbiAgICAgICAgICA/IHsgYXNzZXRJZDogcmVzb2x2ZUFzc2V0SWQob3AuYXNzZXQucmVmKSB9XG4gICAgICAgICAgOiB7IHNyYzogb3AuYXNzZXQuc3JjLCB3aWR0aDogb3AuYXNzZXQud2lkdGgsIGhlaWdodDogb3AuYXNzZXQuaGVpZ2h0IH07XG4gICAgICBjb25zdCB0aW1lb3V0ID0gXCJzcmNcIiBpbiBhc3NldCA/IFVQTE9BRF9USU1FT1VUX01TIDogT1BfVElNRU9VVF9NUztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHdpdGhUaW1lb3V0KFxuICAgICAgICBhcGkuYWRkTGF5ZXIob3AucHJvamVjdElkLCBvcC5jbGllbnRLZXksIG9wLm5hbWUsIG9wLmRhdGEsIGFzc2V0KSxcbiAgICAgICAgdGltZW91dFxuICAgICAgKTtcbiAgICAgIGlmIChvcC5jbGllbnRJZCAhPT0gcmVzdWx0LmxheWVySWQpIGxheWVySWRzLnNldChvcC5jbGllbnRJZCwgcmVzdWx0LmxheWVySWQpO1xuICAgICAgY29uc3QgY2xpZW50QXNzZXRJZCA9IFwicmVmXCIgaW4gb3AuYXNzZXQgPyBvcC5hc3NldC5yZWYgOiBvcC5hc3NldC5jbGllbnRJZDtcbiAgICAgIG1hcEFzc2V0SWQoY2xpZW50QXNzZXRJZCwgcmVzdWx0LmFzc2V0SWQpO1xuICAgICAgaWYgKHJlc3VsdC5zcmMgJiYgXCJzcmNcIiBpbiBvcC5hc3NldCkge1xuICAgICAgICBzZWVkQXNzZXQoY2xpZW50QXNzZXRJZCwge1xuICAgICAgICAgIHNyYzogcmVzdWx0LnNyYyxcbiAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBvcC5hc3NldC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHNlZWRBc3NldChyZXN1bHQuYXNzZXRJZCwge1xuICAgICAgICAgIHNyYzogcmVzdWx0LnNyYyxcbiAgICAgICAgICBwYWludFNyYzogb3AuYXNzZXQuc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSA/IG9wLmFzc2V0LnNyYyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB3aWR0aDogb3AuYXNzZXQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBvcC5hc3NldC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhc2UgXCJ1cGRhdGVMYXllclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS51cGRhdGVMYXllcihyZXNvbHZlTGF5ZXJJZChvcC5pZCksIG9wLmRhdGEpKTtcbiAgICBjYXNlIFwicmVuYW1lTGF5ZXJcIjpcbiAgICAgIHJldHVybiB3aXRoVGltZW91dChhcGkucmVuYW1lTGF5ZXIocmVzb2x2ZUxheWVySWQob3AuaWQpLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcImRlbGV0ZUxheWVyXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLmRlbGV0ZUxheWVyKHJlc29sdmVMYXllcklkKG9wLmlkKSkpO1xuICAgIGNhc2UgXCJzZXRPcmRlclwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5zZXRMYXllck9yZGVyKG9wLnByb2plY3RJZCwgb3AuaWRzLm1hcChyZXNvbHZlTGF5ZXJJZCkpKTtcbiAgICBjYXNlIFwicmVuYW1lUHJvamVjdFwiOlxuICAgICAgcmV0dXJuIHdpdGhUaW1lb3V0KGFwaS5yZW5hbWVQcm9qZWN0KG9wLmlkLCBvcC5uYW1lKSk7XG4gICAgY2FzZSBcInNldFRodW1iXCI6XG4gICAgICByZXR1cm4gd2l0aFRpbWVvdXQoYXBpLnNldFByb2plY3RUaHVtYihvcC5pZCwgb3AudGh1bWIpKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkcmFpbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKGRyYWluaW5nKSByZXR1cm47XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgc3luY1N0YXR1cygpO1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3AgPSBxdWV1ZS5zaGlmdCgpITtcbiAgICBsZXQgYXR0ZW1wdCA9IDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBleGVjdXRlKG9wKTtcbiAgICAgICAgaWYgKGF0dGVtcHQgPiAwKSBzeW5jU3RhdHVzKHsgc2F2ZVN0YXR1czogXCJzYXZpbmdcIiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBPcFRpbWVvdXQpIHtcbiAgICAgICAgICAvLyBTb2NrZXQgbGlrZWx5IGRpZWQ7IHRoZSB0cmFuc3BvcnQgcmVjb25uZWN0cyBvbiBpdHMgb3duLiBSZXRyeSBmb3JldmVyLlxuICAgICAgICAgIGF0dGVtcHQgKz0gMTtcbiAgICAgICAgICBzeW5jU3RhdHVzKHsgc2F2ZVN0YXR1czogXCJyZXRyeWluZ1wiIH0pO1xuICAgICAgICAgIGF3YWl0IGRlbGF5KE1hdGgubWluKE1BWF9CQUNLT0ZGX01TLCA1MDAgKiAyICoqIE1hdGgubWluKGF0dGVtcHQsIDUpKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKTtcbiAgICAgICAgLy8gXCJub3QgZm91bmRcIiBhZnRlciBhIHJldHJ5IGp1c3QgbWVhbnMgYSBjb21wZXRpbmcgZGVsZXRlIGFscmVhZHkgd29uO1xuICAgICAgICAvLyB0aGUgc3RhdGVzIGhhdmUgY29udmVyZ2VkLCBzbyB0cmVhdCBpdCBhcyBzdWNjZXNzLlxuICAgICAgICBpZiAoIS9ub3QgZm91bmQvaS50ZXN0KG1lc3NhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBlcnNpc3Qgb3AgZmFpbGVkLCBkcm9wcGluZzpcIiwgb3Aua2luZCwgbWVzc2FnZSk7XG4gICAgICAgICAgc3luY1N0YXR1cyh7IHNhdmVFcnJvcjogYCR7b3Aua2luZH06ICR7bWVzc2FnZX1gIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIHN5bmNTdGF0dXMoKTtcbn1cblxuLy8gRWRpdGluZyBjb21taXRzIGFyZSBlbnF1ZXVlZCBvbiBnZXN0dXJlIGVuZCBhbmQgbm9ybWFsbHkgZmx1c2ggaW5cbi8vIG1pbGxpc2Vjb25kcywgYnV0IHdhcm4gaWYgdGhlIHVzZXIgY2xvc2VzIHRoZSB0YWIgbWlkLXNhdmUuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAocGVuZGluZ0NvdW50KCkgPiAwIHx8IGdldFN0YXRlKCkuc2F2ZVN0YXR1cyAhPT0gXCJzYXZlZFwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG4iLCAiLy8gSW4tbWVtb3J5IGFzc2V0IGNhY2hlLiBMb2NhbGx5IGltcG9ydGVkIGltYWdlcyBhcmUgc2VlZGVkIHdpdGggYSBkYXRhIFVSTFxuLy8gKHBhaW50U3JjKSBmb3IgY2FudmFzIHdvcms7IGFmdGVyIFMzIHVwbG9hZCwgc3JjIGJlY29tZXMgdGhlIENsb3VkRnJvbnQgVVJMXG4vLyB1c2VkIGZvciA8aW1nPiBkaXNwbGF5LiBwYWludFNyYyBpcyBrZXB0IHNvIHRodW1icy9leHBvcnQgd29yayB3aXRob3V0IENPUlMuXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi9hcGlcIjtcbmltcG9ydCB7IHJlc29sdmVBc3NldElkIH0gZnJvbSBcIi4vcGVyc2lzdFwiO1xuXG5leHBvcnQgdHlwZSBBc3NldEVudHJ5ID0ge1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBTYW1lLW9yaWdpbi9kYXRhIFVSTCBzYWZlIGZvciBjYW52YXMgKHRodW1icywgZXhwb3J0KS4gKi9cbiAgcGFpbnRTcmM/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBlbnRyaWVzID0gbmV3IE1hcDxzdHJpbmcsIEFzc2V0RW50cnk+KCk7XG5jb25zdCBpbmZsaWdodCA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPEFzc2V0RW50cnk+PigpO1xuY29uc3QgaW1hZ2VzID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4+KCk7XG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG5cbmZ1bmN0aW9uIG5vdGlmeSgpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBbLi4ubGlzdGVuZXJzXSkgbGlzdGVuZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlZWRBc3NldChpZDogc3RyaW5nLCBlbnRyeTogQXNzZXRFbnRyeSk6IHZvaWQge1xuICBjb25zdCBwcmV2ID0gZW50cmllcy5nZXQoaWQpO1xuICBlbnRyaWVzLnNldChpZCwge1xuICAgIHNyYzogZW50cnkuc3JjLFxuICAgIHdpZHRoOiBlbnRyeS53aWR0aCxcbiAgICBoZWlnaHQ6IGVudHJ5LmhlaWdodCxcbiAgICBwYWludFNyYzogZW50cnkucGFpbnRTcmMgPz8gcHJldj8ucGFpbnRTcmNcbiAgfSk7XG4gIGltYWdlcy5kZWxldGUoaWQpO1xuICBub3RpZnkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzc2V0RW50cnkoaWQ6IHN0cmluZyk6IEFzc2V0RW50cnkgfCBudWxsIHtcbiAgcmV0dXJuIGVudHJpZXMuZ2V0KGlkKSA/PyBlbnRyaWVzLmdldChyZXNvbHZlQXNzZXRJZChpZCkpID8/IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVBc3NldChpZDogc3RyaW5nKTogUHJvbWlzZTxBc3NldEVudHJ5PiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0QXNzZXRFbnRyeShpZCk7XG4gIGlmIChleGlzdGluZykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGlzdGluZyk7XG4gIGNvbnN0IHBlbmRpbmcgPSBpbmZsaWdodC5nZXQoaWQpO1xuICBpZiAocGVuZGluZykgcmV0dXJuIHBlbmRpbmc7XG5cbiAgY29uc3QgcHJvbWlzZSA9IGFwaVxuICAgIC5nZXRBc3NldChyZXNvbHZlQXNzZXRJZChpZCkpXG4gICAgLnRoZW4oKHBheWxvYWQpID0+IHtcbiAgICAgIGNvbnN0IHByZXYgPSBlbnRyaWVzLmdldChpZCk7XG4gICAgICBjb25zdCBlbnRyeTogQXNzZXRFbnRyeSA9IHtcbiAgICAgICAgc3JjOiBwYXlsb2FkLnNyYyxcbiAgICAgICAgd2lkdGg6IHBheWxvYWQud2lkdGgsXG4gICAgICAgIGhlaWdodDogcGF5bG9hZC5oZWlnaHQsXG4gICAgICAgIHBhaW50U3JjOiBwcmV2Py5wYWludFNyY1xuICAgICAgfTtcbiAgICAgIGVudHJpZXMuc2V0KGlkLCBlbnRyeSk7XG4gICAgICBub3RpZnkoKTtcbiAgICAgIHJldHVybiBlbnRyeTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGluZmxpZ2h0LmRlbGV0ZShpZCk7XG4gICAgfSk7XG4gIGluZmxpZ2h0LnNldChpZCwgcHJvbWlzZSk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBwYWludFVybChlbnRyeTogQXNzZXRFbnRyeSk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRyeS5wYWludFNyYyB8fCBlbnRyeS5zcmM7XG59XG5cbi8qKiBEZWNvZGVkIGltYWdlIGVsZW1lbnQgZm9yIGNhbnZhcyByZW5kZXJpbmcgKGV4cG9ydCwgdGh1bWJuYWlscykuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKGlkOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+IHtcbiAgY29uc3QgY2FjaGVkID0gaW1hZ2VzLmdldChpZCk7XG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQ7XG4gIGNvbnN0IHByb21pc2UgPSBlbnN1cmVBc3NldChpZCkudGhlbihcbiAgICAoZW50cnkpID0+XG4gICAgICBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHBhaW50VXJsKGVudHJ5KTtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIFJlbW90ZSBVUkxzIG5lZWQgQ09SUyBmb3IgY2FudmFzOyBkYXRhIFVSTHMgZG8gbm90LlxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIikpIHtcbiAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICB9XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltZyk7XG4gICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWNvZGUgaW1hZ2VcIikpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgfSlcbiAgKTtcbiAgaW1hZ2VzLnNldChpZCwgcHJvbWlzZSk7XG4gIHByb21pc2UuY2F0Y2goKCkgPT4gaW1hZ2VzLmRlbGV0ZShpZCkpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLyoqIENvbXBvbmVudCBob29rOiByZXR1cm5zIHRoZSBhc3NldCBvbmNlIGF2YWlsYWJsZSwga2lja2luZyBvZmYgYSBmZXRjaC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3NldEVudHJ5KGlkOiBzdHJpbmcpOiBBc3NldEVudHJ5IHwgbnVsbCB7XG4gIGNvbnN0IFtlbnRyeSwgc2V0RW50cnldID0gdXNlU3RhdGU8QXNzZXRFbnRyeSB8IG51bGw+KCgpID0+IGdldEFzc2V0RW50cnkoaWQpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrID0gKCkgPT4gc2V0RW50cnkoZ2V0QXNzZXRFbnRyeShpZCkpO1xuICAgIGNoZWNrKCk7XG4gICAgbGlzdGVuZXJzLmFkZChjaGVjayk7XG4gICAgZW5zdXJlQXNzZXQoaWQpLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkFzc2V0IGxvYWQgZmFpbGVkOlwiLCBlcnJvcikpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsaXN0ZW5lcnMuZGVsZXRlKGNoZWNrKTtcbiAgICB9O1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gZW50cnk7XG59XG4iLCAiLy8gRmxhdHRlbiBhIGRvY3VtZW50IHRvIGEgY2FudmFzOiB1c2VkIGZvciBQTkcgZXhwb3J0IGFuZCBwcm9qZWN0IHRodW1ibmFpbHMuXG5cbmltcG9ydCB0eXBlIHsgUHJvamVjdERvYyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IGVuc3VyZUFzc2V0LCBsb2FkSW1hZ2UgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJEb2NUb0NhbnZhcyhkb2M6IFByb2plY3REb2MsIHNjYWxlOiBudW1iZXIpOiBQcm9taXNlPEhUTUxDYW52YXNFbGVtZW50PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoZG9jLndpZHRoICogc2NhbGUpKTtcbiAgY2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoZG9jLmhlaWdodCAqIHNjYWxlKSk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgdW5hdmFpbGFibGVcIik7XG5cbiAgY29uc3QgdmlzaWJsZSA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSAmJiBsYXllci5vcGFjaXR5ID4gMCk7XG4gIGNvbnN0IGltYWdlcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIHZpc2libGUubWFwKChsYXllcikgPT4gbG9hZEltYWdlKGxheWVyLmFzc2V0SWQpLmNhdGNoKCgpID0+IG51bGwpKVxuICApO1xuXG4gIGN0eC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBcImhpZ2hcIjtcbiAgdmlzaWJsZS5mb3JFYWNoKChsYXllciwgaSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGltYWdlc1tpXTtcbiAgICBpZiAoIWltZykgcmV0dXJuO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gbGF5ZXIub3BhY2l0eTtcbiAgICBjdHgudHJhbnNsYXRlKChsYXllci54ICsgbGF5ZXIudyAvIDIpICogc2NhbGUsIChsYXllci55ICsgbGF5ZXIuaCAvIDIpICogc2NhbGUpO1xuICAgIGN0eC5yb3RhdGUoKGxheWVyLnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAoLWxheWVyLncgLyAyKSAqIHNjYWxlLCAoLWxheWVyLmggLyAyKSAqIHNjYWxlLCBsYXllci53ICogc2NhbGUsIGxheWVyLmggKiBzY2FsZSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFBuZyhkb2M6IFByb2plY3REb2MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCAxKTtcbiAgY29uc3QgdXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSB1cmw7XG4gIGxpbmsuZG93bmxvYWQgPSBgJHtkb2MubmFtZSB8fCBcImltYWdlXCJ9LnBuZ2A7XG4gIGxpbmsuY2xpY2soKTtcbn1cblxuY29uc3QgVEhVTUJfTUFYID0gMzYwO1xuXG5hc3luYyBmdW5jdGlvbiBmaXJzdExheWVyU3JjKGRvYzogUHJvamVjdERvYyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoIWxheWVyLnZpc2libGUgfHwgbGF5ZXIub3BhY2l0eSA8PSAwKSBjb250aW51ZTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGVuc3VyZUFzc2V0KGxheWVyLmFzc2V0SWQpLmNhdGNoKCgpID0+IG51bGwpO1xuICAgIGlmIChlbnRyeT8uc3JjKSByZXR1cm4gZW50cnkuc3JjO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyVGh1bWIoZG9jOiBQcm9qZWN0RG9jKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdmlzaWJsZSA9IGRvYy5sYXllcnMuZmlsdGVyKChsYXllcikgPT4gbGF5ZXIudmlzaWJsZSAmJiBsYXllci5vcGFjaXR5ID4gMCk7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgVEhVTUJfTUFYIC8gTWF0aC5tYXgoZG9jLndpZHRoLCBkb2MuaGVpZ2h0KSk7XG5cbiAgaWYgKHZpc2libGUubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgdmlzaWJsZS5tYXAoKGxheWVyKSA9PiBsb2FkSW1hZ2UobGF5ZXIuYXNzZXRJZCkudGhlbigoKSA9PiB0cnVlKS5jYXRjaCgoKSA9PiBmYWxzZSkpXG4gICAgKTtcbiAgICBpZiAobG9hZGVkLmV2ZXJ5KChvaykgPT4gIW9rKSkge1xuICAgICAgY29uc3QgZmFsbGJhY2sgPSBhd2FpdCBmaXJzdExheWVyU3JjKGRvYyk7XG4gICAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZW5kZXIgdGh1bWJuYWlsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgcmVuZGVyRG9jVG9DYW52YXMoZG9jLCBzY2FsZSk7XG4gICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuODUpO1xuICB9IGNhdGNoIHtcbiAgICBjb25zdCBmYWxsYmFjayA9IGF3YWl0IGZpcnN0TGF5ZXJTcmMoZG9jKTtcbiAgICBpZiAoZmFsbGJhY2spIHJldHVybiBmYWxsYmFjaztcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVuZGVyIHRodW1ibmFpbFwiKTtcbiAgfVxufVxuIiwgIi8vIENvbW1hbmQtYmFzZWQgdW5kby9yZWRvLiBFYWNoIGVudHJ5IG93bnMgY2xvc3VyZXMgdGhhdCByZS1hcHBseSBvciByZXZlcnQgYVxuLy8gY2hhbmdlIHRocm91Z2ggdGhlIHNhbWUgYWN0aW9uIHBhdGhzIHRoYXQgbWFkZSBpdCwgc28gdW5kby9yZWRvIGFsc29cbi8vIHBlcnNpc3RzIChhbmQgc3RheXMgb3B0aW1pc3RpYykgbGlrZSBhbnkgb3RoZXIgZWRpdC5cblxuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcblxuZXhwb3J0IHR5cGUgSGlzdG9yeUVudHJ5ID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB1bmRvOiAoKSA9PiB2b2lkO1xuICByZWRvOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgTElNSVQgPSAxMDA7XG5cbmxldCB1bmRvU3RhY2s6IEhpc3RvcnlFbnRyeVtdID0gW107XG5sZXQgcmVkb1N0YWNrOiBIaXN0b3J5RW50cnlbXSA9IFtdO1xuXG5mdW5jdGlvbiBidW1wKCk6IHZvaWQge1xuICBzZXRTdGF0ZSh7IGhpc3RWZXJzaW9uOiBnZXRTdGF0ZSgpLmhpc3RWZXJzaW9uICsgMSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hIaXN0b3J5KGVudHJ5OiBIaXN0b3J5RW50cnkpOiB2b2lkIHtcbiAgdW5kb1N0YWNrLnB1c2goZW50cnkpO1xuICBpZiAodW5kb1N0YWNrLmxlbmd0aCA+IExJTUlUKSB1bmRvU3RhY2suc2hpZnQoKTtcbiAgcmVkb1N0YWNrID0gW107XG4gIGJ1bXAoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SGlzdG9yeSgpOiB2b2lkIHtcbiAgdW5kb1N0YWNrID0gW107XG4gIHJlZG9TdGFjayA9IFtdO1xuICBidW1wKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5VbmRvKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdW5kb1N0YWNrLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5SZWRvKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcmVkb1N0YWNrLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRvKCk6IHZvaWQge1xuICBjb25zdCBlbnRyeSA9IHVuZG9TdGFjay5wb3AoKTtcbiAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICBlbnRyeS51bmRvKCk7XG4gIHJlZG9TdGFjay5wdXNoKGVudHJ5KTtcbiAgYnVtcCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkbygpOiB2b2lkIHtcbiAgY29uc3QgZW50cnkgPSByZWRvU3RhY2sucG9wKCk7XG4gIGlmICghZW50cnkpIHJldHVybjtcbiAgZW50cnkucmVkbygpO1xuICB1bmRvU3RhY2sucHVzaChlbnRyeSk7XG4gIGJ1bXAoKTtcbn1cbiIsICIvLyBFdmVyeSBlZGl0IGZsb3dzIHRocm91Z2ggaGVyZTogYXBwbHkgdG8gdGhlIGxvY2FsIGRvYyBzeW5jaHJvbm91c2x5IChpbnN0YW50XG4vLyBVSSksIHJlY29yZCBhbiB1bmRvL3JlZG8gZW50cnksIGFuZCBlbnF1ZXVlIGJhY2tncm91bmQgcGVyc2lzdGVuY2UuIEdlc3R1cmVzXG4vLyB1c2UgdGhlIHRyYW5zaWVudCBwYXRoIGF0IHBvaW50ZXItbW92ZSByYXRlIGFuZCBjb21taXQgb25jZSBvbiByZWxlYXNlLlxuXG5pbXBvcnQge1xuICBkZWNvZGVUcmFuc2Zvcm0sXG4gIGVuY29kZVRyYW5zZm9ybSxcbiAgdHlwZSBMYXllcixcbiAgdHlwZSBMYXllclJvdyxcbiAgdHlwZSBMYXllclRyYW5zZm9ybSxcbiAgdHlwZSBQcm9qZWN0RG9jLFxuICB0eXBlIFByb2plY3RNZXRhXG59IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IHJlbmRlclRodW1iIH0gZnJvbSBcIi4uL2xpYi9yZW5kZXJcIjtcbmltcG9ydCB7IHNlZWRBc3NldCB9IGZyb20gXCIuL2Fzc2V0c1wiO1xuaW1wb3J0IHsgcHVzaEhpc3RvcnksIHJlc2V0SGlzdG9yeSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IGVucXVldWUsIG5ld0NsaWVudElkIH0gZnJvbSBcIi4vcGVyc2lzdFwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCB1cGRhdGVEb2MgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgdHlwZSBJbXBvcnRlZEltYWdlID0geyBzcmM6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IG5hbWU6IHN0cmluZyB9O1xuZXhwb3J0IHR5cGUgVHJhbnNmb3JtUGF0Y2ggPSBQYXJ0aWFsPExheWVyVHJhbnNmb3JtPjtcblxuY29uc3QgVFJBTlNJRU5UX1BFUlNJU1RfTVMgPSAzMDA7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJvamVjdCBsaWZlY3ljbGVcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qcm9qZWN0KG1ldGE6IFByb2plY3RNZXRhLCByb3dzOiBMYXllclJvd1tdKTogdm9pZCB7XG4gIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKHJvd3MubWFwKChyb3cpID0+IFtyb3cuaWQsIHJvd10pKTtcbiAgY29uc3QgbGF5ZXJzOiBMYXllcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAocm93OiBMYXllclJvdykgPT4ge1xuICAgIGxheWVycy5wdXNoKHtcbiAgICAgIGlkOiByb3cuaWQsXG4gICAgICBhc3NldElkOiByb3cuYXNzZXRJZCxcbiAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgLi4uZGVjb2RlVHJhbnNmb3JtKHJvdy5kYXRhKVxuICAgIH0pO1xuICB9O1xuICBmb3IgKGNvbnN0IGlkIG9mIG1ldGEubGF5ZXJPcmRlcikge1xuICAgIGNvbnN0IHJvdyA9IGJ5SWQuZ2V0KGlkKTtcbiAgICBpZiAocm93KSB7XG4gICAgICBwdXNoKHJvdyk7XG4gICAgICBieUlkLmRlbGV0ZShpZCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3Qgcm93IG9mIGJ5SWQudmFsdWVzKCkpIHB1c2gocm93KTtcblxuICBzZXRTdGF0ZSh7XG4gICAgZG9jOiB7IGlkOiBtZXRhLmlkLCBuYW1lOiBtZXRhLm5hbWUsIHdpZHRoOiBtZXRhLndpZHRoLCBoZWlnaHQ6IG1ldGEuaGVpZ2h0LCBsYXllcnMgfSxcbiAgICBzZWxlY3Rpb246IFtdLFxuICAgIHNhdmVFcnJvcjogbnVsbFxuICB9KTtcbiAgcmVzZXRIaXN0b3J5KCk7XG4gIHNjaGVkdWxlVGh1bWJSZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVByb2plY3QoKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgZG9jOiBudWxsLCBzZWxlY3Rpb246IFtdIH0pO1xuICByZXNldEhpc3RvcnkoKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWxlY3Rpb25cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGlvbihpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIHNldFN0YXRlKHsgc2VsZWN0aW9uOiBpZHMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTZWxlY3RlZChpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgc2V0U2VsZWN0aW9uKGN1cnJlbnQuaW5jbHVkZXMoaWQpID8gY3VycmVudC5maWx0ZXIoKHMpID0+IHMgIT09IGlkKSA6IFsuLi5jdXJyZW50LCBpZF0pO1xufVxuXG5mdW5jdGlvbiBwcnVuZVNlbGVjdGlvbihyZW1vdmVkOiBTZXQ8c3RyaW5nPik6IHZvaWQge1xuICBzZXRTdGF0ZSh7IHNlbGVjdGlvbjogZ2V0U3RhdGUoKS5zZWxlY3Rpb24uZmlsdGVyKChpZCkgPT4gIXJlbW92ZWQuaGFzKGlkKSkgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVHJhbnNmb3JtIGVkaXRzXG5cbmZ1bmN0aW9uIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHVwZGF0ZURvYygoZG9jKSA9PiAoe1xuICAgIC4uLmRvYyxcbiAgICBsYXllcnM6IGRvYy5sYXllcnMubWFwKChsYXllcikgPT4ge1xuICAgICAgY29uc3QgcGF0Y2ggPSBwYXRjaGVzLmdldChsYXllci5pZCk7XG4gICAgICByZXR1cm4gcGF0Y2ggPyB7IC4uLmxheWVyLCAuLi5wYXRjaCB9IDogbGF5ZXI7XG4gICAgfSlcbiAgfSkpO1xufVxuXG5jb25zdCB0cmFuc2llbnRUaW1lcnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5mdW5jdGlvbiBwZXJzaXN0TGF5ZXJOb3coaWQ6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB0aW1lciA9IHRyYW5zaWVudFRpbWVycy5nZXQoaWQpO1xuICBpZiAodGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gIH1cbiAgY29uc3QgbGF5ZXIgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGlkKTtcbiAgaWYgKCFsYXllcikgcmV0dXJuO1xuICBlbnF1ZXVlKHsga2luZDogXCJ1cGRhdGVMYXllclwiLCBpZCwgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSB9KTtcbn1cblxuZnVuY3Rpb24gcGVyc2lzdExheWVyVGhyb3R0bGVkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKHRyYW5zaWVudFRpbWVycy5oYXMoaWQpKSByZXR1cm47XG4gIHRyYW5zaWVudFRpbWVycy5zZXQoXG4gICAgaWQsXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJhbnNpZW50VGltZXJzLmRlbGV0ZShpZCk7XG4gICAgICBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIH0sIFRSQU5TSUVOVF9QRVJTSVNUX01TKVxuICApO1xufVxuXG4vKiogSGlnaC1mcmVxdWVuY3kgZ2VzdHVyZSB1cGRhdGVzOiBsb2NhbCBhcHBseSArIHRocm90dGxlZCBwZXJzaXN0LCBubyBoaXN0b3J5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHJhbnNpZW50KHBhdGNoZXM6IFJlYWRvbmx5TWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KTogdm9pZCB7XG4gIHBhdGNoRG9jTGF5ZXJzKHBhdGNoZXMpO1xuICBmb3IgKGNvbnN0IGlkIG9mIHBhdGNoZXMua2V5cygpKSBwZXJzaXN0TGF5ZXJUaHJvdHRsZWQoaWQpO1xufVxuXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UgPSB7IGlkOiBzdHJpbmc7IGJlZm9yZTogVHJhbnNmb3JtUGF0Y2g7IGFmdGVyOiBUcmFuc2Zvcm1QYXRjaCB9O1xuXG5mdW5jdGlvbiBhcHBseUFuZFBlcnNpc3QoZW50cmllczogQXJyYXk8eyBpZDogc3RyaW5nOyBwYXRjaDogVHJhbnNmb3JtUGF0Y2ggfT4pOiB2b2lkIHtcbiAgcGF0Y2hEb2NMYXllcnMobmV3IE1hcChlbnRyaWVzLm1hcCgoZSkgPT4gW2UuaWQsIGUucGF0Y2hdKSkpO1xuICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBlbnRyaWVzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG4vKiogRmluYWxpemUgYW4gZWRpdDogYXBwbHkgdGhlIGVuZCBzdGF0ZSwgcGVyc2lzdCBub3csIGFuZCByZWNvcmQgaGlzdG9yeS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRUcmFuc2Zvcm1zKGxhYmVsOiBzdHJpbmcsIGNoYW5nZXM6IFRyYW5zZm9ybUNoYW5nZVtdKTogdm9pZCB7XG4gIGNvbnN0IHJlYWwgPSBjaGFuZ2VzLmZpbHRlcigoYykgPT4gIXNoYWxsb3dFcXVhbFBhdGNoKGMuYmVmb3JlLCBjLmFmdGVyKSk7XG4gIGlmIChyZWFsLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vdGhpbmcgYWN0dWFsbHkgY2hhbmdlZCAoZS5nLiBhIGNsaWNrIHdpdGhvdXQgYSBkcmFnKTsgc3RpbGwgZmx1c2ggYW55XG4gICAgLy8gdGhyb3R0bGVkIHRyYW5zaWVudCB3cml0ZXMgc28gbG9jYWwgYW5kIHNlcnZlciBzdGF0ZSBtYXRjaC5cbiAgICBmb3IgKGNvbnN0IHsgaWQgfSBvZiBjaGFuZ2VzKSBwZXJzaXN0TGF5ZXJOb3coaWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBhcHBseUFuZFBlcnNpc3QocmVhbC5tYXAoKGMpID0+ICh7IGlkOiBjLmlkLCBwYXRjaDogYy5hZnRlciB9KSkpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWwsXG4gICAgdW5kbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYmVmb3JlIH0pKSksXG4gICAgcmVkbzogKCkgPT4gYXBwbHlBbmRQZXJzaXN0KHJlYWwubWFwKChjKSA9PiAoeyBpZDogYy5pZCwgcGF0Y2g6IGMuYWZ0ZXIgfSkpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsUGF0Y2goYTogVHJhbnNmb3JtUGF0Y2gsIGI6IFRyYW5zZm9ybVBhdGNoKTogYm9vbGVhbiB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhhKSwgLi4uT2JqZWN0LmtleXMoYildIGFzIEFycmF5PGtleW9mIExheWVyVHJhbnNmb3JtPik7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoIU9iamVjdC5pcyhhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51ZGdlU2VsZWN0aW9uKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBjaGFuZ2VzOiBUcmFuc2Zvcm1DaGFuZ2VbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGxheWVyIG9mIGRvYy5sYXllcnMpIHtcbiAgICBpZiAoc2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKSkge1xuICAgICAgY2hhbmdlcy5wdXNoKHtcbiAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICBiZWZvcmU6IHsgeDogbGF5ZXIueCwgeTogbGF5ZXIueSB9LFxuICAgICAgICBhZnRlcjogeyB4OiBsYXllci54ICsgZHgsIHk6IGxheWVyLnkgKyBkeSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29tbWl0VHJhbnNmb3JtcyhcIk51ZGdlXCIsIGNoYW5nZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShpZDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGxheWVyID0gZ2V0U3RhdGUoKS5kb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghbGF5ZXIpIHJldHVybjtcbiAgY29tbWl0VHJhbnNmb3JtcyhsYXllci52aXNpYmxlID8gXCJIaWRlIGxheWVyXCIgOiBcIlNob3cgbGF5ZXJcIiwgW1xuICAgIHsgaWQsIGJlZm9yZTogeyB2aXNpYmxlOiBsYXllci52aXNpYmxlIH0sIGFmdGVyOiB7IHZpc2libGU6ICFsYXllci52aXNpYmxlIH0gfVxuICBdKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTdHJ1Y3R1cmFsIGVkaXRzIChhZGQgLyBkZWxldGUgLyBkdXBsaWNhdGUgLyByZW9yZGVyKVxuXG50eXBlIFBsYWNlZExheWVyID0geyBsYXllcjogTGF5ZXI7IGluZGV4OiBudW1iZXIgfTtcblxuLyoqIEluc2VydCBsYXllcnMgYW5kIGVucXVldWUgdGhlaXIgY3JlYXRpb24uIE5vIGhpc3RvcnkgXHUyMDE0IGNhbGxlcnMgcmVjb3JkIGl0LiAqL1xuZnVuY3Rpb24gcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zOiBQbGFjZWRMYXllcltdKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYykgcmV0dXJuO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgY29uc3QgbGF5ZXJzID0gWy4uLmRvYy5sYXllcnNdO1xuICBmb3IgKGNvbnN0IHsgbGF5ZXIsIGluZGV4IH0gb2Ygc29ydGVkKSB7XG4gICAgbGF5ZXJzLnNwbGljZShNYXRoLm1pbihpbmRleCwgbGF5ZXJzLmxlbmd0aCksIDAsIGxheWVyKTtcbiAgfVxuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIGxheWVycyB9KSk7XG5cbiAgbGV0IG5lZWRzT3JkZXIgPSBmYWxzZTtcbiAgZm9yIChjb25zdCB7IGxheWVyLCBpbmRleCB9IG9mIHNvcnRlZCkge1xuICAgIGVucXVldWUoe1xuICAgICAga2luZDogXCJhZGRMYXllclwiLFxuICAgICAgcHJvamVjdElkOiBkb2MuaWQsXG4gICAgICBjbGllbnRJZDogbGF5ZXIuaWQsXG4gICAgICAvLyBGcmVzaCBrZXkgcGVyIGF0dGVtcHQ6IGEgcmVkbyBvZiB0aGUgc2FtZSBsYXllciBpcyBhIG5ldyBpbnNlcnQuXG4gICAgICBjbGllbnRLZXk6IG5ld0NsaWVudElkKFwia2V5XCIpLFxuICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShsYXllciksXG4gICAgICBhc3NldDogeyByZWY6IGxheWVyLmFzc2V0SWQgfVxuICAgIH0pO1xuICAgIGlmIChpbmRleCA8IGxheWVycy5sZW5ndGggLSAxKSBuZWVkc09yZGVyID0gdHJ1ZTtcbiAgfVxuICAvLyBUaGUgc2VydmVyIGFwcGVuZHMgbmV3IGxheWVyczsgcmVzdG9yZSBtaWQtc3RhY2sgcG9zaXRpb25zIGV4cGxpY2l0bHkuXG4gIGlmIChuZWVkc09yZGVyKSB7XG4gICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0T3JkZXJcIiwgcHJvamVjdElkOiBkb2MuaWQsIGlkczogbGF5ZXJzLm1hcCgobCkgPT4gbC5pZCkgfSk7XG4gIH1cbiAgc2NoZWR1bGVUaHVtYlJlZnJlc2goKTtcbn1cblxuZnVuY3Rpb24gcmF3RGVsZXRlTGF5ZXJzKGlkczogc3RyaW5nW10pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGNvbnN0IHJlbW92ZWQgPSBuZXcgU2V0KGlkcyk7XG4gIHVwZGF0ZURvYygoZCkgPT4gKHsgLi4uZCwgbGF5ZXJzOiBkLmxheWVycy5maWx0ZXIoKGwpID0+ICFyZW1vdmVkLmhhcyhsLmlkKSkgfSkpO1xuICBwcnVuZVNlbGVjdGlvbihyZW1vdmVkKTtcbiAgZm9yIChjb25zdCBpZCBvZiBpZHMpIGVucXVldWUoeyBraW5kOiBcImRlbGV0ZUxheWVyXCIsIGlkIH0pO1xuICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlUGxhY2VtZW50KGRvYzogUHJvamVjdERvYywgaWRzOiBzdHJpbmdbXSk6IFBsYWNlZExheWVyW10ge1xuICBjb25zdCBpdGVtczogUGxhY2VkTGF5ZXJbXSA9IFtdO1xuICBkb2MubGF5ZXJzLmZvckVhY2goKGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChpZHMuaW5jbHVkZXMobGF5ZXIuaWQpKSBpdGVtcy5wdXNoKHsgbGF5ZXIsIGluZGV4IH0pO1xuICB9KTtcbiAgcmV0dXJuIGl0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuICBjb25zdCB7IGRvYywgc2VsZWN0aW9uIH0gPSBnZXRTdGF0ZSgpO1xuICBpZiAoIWRvYyB8fCBzZWxlY3Rpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGl0ZW1zID0gY2FwdHVyZVBsYWNlbWVudChkb2MsIHNlbGVjdGlvbik7XG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpKSA9PiBpLmxheWVyLmlkKTtcbiAgcmF3RGVsZXRlTGF5ZXJzKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJEZWxldGUgbGF5ZXJcIixcbiAgICB1bmRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICAgICAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gICAgfSxcbiAgICByZWRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZVNlbGVjdGlvbigpOiB2b2lkIHtcbiAgY29uc3QgeyBkb2MsIHNlbGVjdGlvbiB9ID0gZ2V0U3RhdGUoKTtcbiAgaWYgKCFkb2MgfHwgc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCBzb3VyY2UgPSBjYXB0dXJlUGxhY2VtZW50KGRvYywgc2VsZWN0aW9uKTtcbiAgaWYgKHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBzb3VyY2UubWFwKCh7IGxheWVyIH0sIGkpID0+ICh7XG4gICAgbGF5ZXI6IHtcbiAgICAgIC4uLmxheWVyLFxuICAgICAgaWQ6IG5ld0NsaWVudElkKFwibGF5ZXJcIiksXG4gICAgICBuYW1lOiBgJHtsYXllci5uYW1lfSBjb3B5YCxcbiAgICAgIHg6IGxheWVyLnggKyAyMCxcbiAgICAgIHk6IGxheWVyLnkgKyAyMFxuICAgIH0sXG4gICAgLy8gUGxhY2UgZHVwbGljYXRlcyB0b2dldGhlciBhYm92ZSB0aGUgdG9wbW9zdCBzb3VyY2UgbGF5ZXIuXG4gICAgaW5kZXg6IHNvdXJjZVtzb3VyY2UubGVuZ3RoIC0gMV0uaW5kZXggKyAxICsgaVxuICB9KSk7XG4gIGNvbnN0IGlkcyA9IGl0ZW1zLm1hcCgoaSkgPT4gaS5sYXllci5pZCk7XG4gIHJhd0luc2VydExheWVycyhpdGVtcyk7XG4gIHNldFNlbGVjdGlvbihpZHMpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiRHVwbGljYXRlXCIsXG4gICAgdW5kbzogKCkgPT4gcmF3RGVsZXRlTGF5ZXJzKGlkcyksXG4gICAgcmVkbzogKCkgPT4ge1xuICAgICAgcmF3SW5zZXJ0TGF5ZXJzKGl0ZW1zKTtcbiAgICAgIHNldFNlbGVjdGlvbihpZHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbWFnZUxheWVycyhpbWFnZXM6IEltcG9ydGVkSW1hZ2VbXSwgYXQ/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB2b2lkIHtcbiAgY29uc3QgZG9jID0gZ2V0U3RhdGUoKS5kb2M7XG4gIGlmICghZG9jIHx8IGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgaXRlbXM6IFBsYWNlZExheWVyW10gPSBpbWFnZXMubWFwKChpbWFnZSwgaSkgPT4ge1xuICAgIGNvbnN0IGFzc2V0SWQgPSBuZXdDbGllbnRJZChcImFzc2V0XCIpO1xuICAgIHNlZWRBc3NldChhc3NldElkLCB7XG4gICAgICBzcmM6IGltYWdlLnNyYyxcbiAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodFxuICAgIH0pO1xuICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgKGRvYy53aWR0aCAqIDAuOSkgLyBpbWFnZS53aWR0aCwgKGRvYy5oZWlnaHQgKiAwLjkpIC8gaW1hZ2UuaGVpZ2h0KTtcbiAgICBjb25zdCB3ID0gTWF0aC5tYXgoMSwgaW1hZ2Uud2lkdGggKiBzY2FsZSk7XG4gICAgY29uc3QgaCA9IE1hdGgubWF4KDEsIGltYWdlLmhlaWdodCAqIHNjYWxlKTtcbiAgICBjb25zdCBjeCA9IChhdD8ueCA/PyBkb2Mud2lkdGggLyAyKSArIGkgKiAyNDtcbiAgICBjb25zdCBjeSA9IChhdD8ueSA/PyBkb2MuaGVpZ2h0IC8gMikgKyBpICogMjQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheWVyOiB7XG4gICAgICAgIGlkOiBuZXdDbGllbnRJZChcImxheWVyXCIpLFxuICAgICAgICBhc3NldElkLFxuICAgICAgICBuYW1lOiBpbWFnZS5uYW1lLFxuICAgICAgICB4OiBjeCAtIHcgLyAyLFxuICAgICAgICB5OiBjeSAtIGggLyAyLFxuICAgICAgICB3LFxuICAgICAgICBoLFxuICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGluZGV4OiBkb2MubGF5ZXJzLmxlbmd0aCArIGlcbiAgICB9O1xuICB9KTtcblxuICAvLyBOZXcgYXNzZXRzIHJpZGUgYWxvbmcgb24gdGhlIGFkZExheWVyIG9wIGl0c2VsZi5cbiAgY29uc3QgaWRzID0gaXRlbXMubWFwKChpKSA9PiBpLmxheWVyLmlkKTtcbiAgY29uc3QgaW5zZXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRTdGF0ZSgpLmRvYztcbiAgICBpZiAoIWN1cnJlbnQpIHJldHVybjtcbiAgICBjb25zdCBzb3J0ZWQgPSBbLi4uaXRlbXNdLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcbiAgICBjb25zdCBsYXllcnMgPSBbLi4uY3VycmVudC5sYXllcnNdO1xuICAgIGZvciAoY29uc3QgeyBsYXllciwgaW5kZXggfSBvZiBzb3J0ZWQpIGxheWVycy5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIGxheWVycy5sZW5ndGgpLCAwLCBsYXllcik7XG4gICAgdXBkYXRlRG9jKChkKSA9PiAoeyAuLi5kLCBsYXllcnMgfSkpO1xuICAgIGZvciAoY29uc3QgeyBsYXllciB9IG9mIHNvcnRlZCkge1xuICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXNbaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQubGF5ZXIuaWQgPT09IGxheWVyLmlkKV07XG4gICAgICBlbnF1ZXVlKHtcbiAgICAgICAga2luZDogXCJhZGRMYXllclwiLFxuICAgICAgICBwcm9qZWN0SWQ6IGN1cnJlbnQuaWQsXG4gICAgICAgIGNsaWVudElkOiBsYXllci5pZCxcbiAgICAgICAgY2xpZW50S2V5OiBuZXdDbGllbnRJZChcImtleVwiKSxcbiAgICAgICAgbmFtZTogbGF5ZXIubmFtZSxcbiAgICAgICAgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGxheWVyKSxcbiAgICAgICAgYXNzZXQ6IHsgY2xpZW50SWQ6IGxheWVyLmFzc2V0SWQsIHNyYzogaW1hZ2Uuc3JjLCB3aWR0aDogaW1hZ2Uud2lkdGgsIGhlaWdodDogaW1hZ2UuaGVpZ2h0IH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuICBpbnNlcnQoKTtcbiAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gIHB1c2hIaXN0b3J5KHtcbiAgICBsYWJlbDogXCJBZGQgaW1hZ2VcIixcbiAgICB1bmRvOiAoKSA9PiByYXdEZWxldGVMYXllcnMoaWRzKSxcbiAgICAvLyBSZWRvIHJlLWluc2VydHMgYnkgYXNzZXQgcmVmZXJlbmNlOiB0aGUgYXNzZXQgYWxyZWFkeSBleGlzdHMgYnkgdGhlbi5cbiAgICByZWRvOiAoKSA9PiB7XG4gICAgICByYXdJbnNlcnRMYXllcnMoaXRlbXMpO1xuICAgICAgc2V0U2VsZWN0aW9uKGlkcyk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJMYXllcihmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBmcm9tSW5kZXggPT09IHRvSW5kZXgpIHJldHVybjtcbiAgY29uc3QgYmVmb3JlID0gZG9jLmxheWVycy5tYXAoKGwpID0+IGwuaWQpO1xuICBjb25zdCBvcmRlciA9IFsuLi5iZWZvcmVdO1xuICBjb25zdCBbbW92ZWRdID0gb3JkZXIuc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gIGlmIChtb3ZlZCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIG9yZGVyLnNwbGljZSh0b0luZGV4LCAwLCBtb3ZlZCk7XG5cbiAgY29uc3QgYXBwbHlPcmRlciA9IChpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgdXBkYXRlRG9jKChkKSA9PiB7XG4gICAgICBjb25zdCBieUlkID0gbmV3IE1hcChkLmxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuICAgICAgY29uc3QgbGF5ZXJzOiBMYXllcltdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBjb25zdCBsYXllciA9IGJ5SWQuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgICAgIGJ5SWQuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGF5ZXJzLnB1c2goLi4uYnlJZC52YWx1ZXMoKSk7XG4gICAgICByZXR1cm4geyAuLi5kLCBsYXllcnMgfTtcbiAgICB9KTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJzZXRPcmRlclwiLCBwcm9qZWN0SWQ6IGRvYy5pZCwgaWRzOiBbLi4uaWRzXSB9KTtcbiAgICBzY2hlZHVsZVRodW1iUmVmcmVzaCgpO1xuICB9O1xuXG4gIGFwcGx5T3JkZXIob3JkZXIpO1xuICBwdXNoSGlzdG9yeSh7XG4gICAgbGFiZWw6IFwiUmVvcmRlciBsYXllclwiLFxuICAgIHVuZG86ICgpID0+IGFwcGx5T3JkZXIoYmVmb3JlKSxcbiAgICByZWRvOiAoKSA9PiBhcHBseU9yZGVyKG9yZGVyKVxuICB9KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBOYW1pbmdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUxheWVyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgY29uc3QgbGF5ZXIgPSBkb2M/LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBpZCk7XG4gIGlmICghZG9jIHx8ICFsYXllciB8fCBsYXllci5uYW1lID09PSBuYW1lKSByZXR1cm47XG4gIGNvbnN0IGFwcGx5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB1cGRhdGVEb2MoKGQpID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgbGF5ZXJzOiBkLmxheWVycy5tYXAoKGwpID0+IChsLmlkID09PSBpZCA/IHsgLi4ubCwgbmFtZTogdmFsdWUgfSA6IGwpKVxuICAgIH0pKTtcbiAgICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVMYXllclwiLCBpZCwgbmFtZTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZSA9IGxheWVyLm5hbWU7XG4gIGFwcGx5KG5hbWUpO1xuICBwdXNoSGlzdG9yeSh7IGxhYmVsOiBcIlJlbmFtZSBsYXllclwiLCB1bmRvOiAoKSA9PiBhcHBseShiZWZvcmUpLCByZWRvOiAoKSA9PiBhcHBseShuYW1lKSB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICBpZiAoIWRvYyB8fCBkb2MubmFtZSA9PT0gbmFtZSkgcmV0dXJuO1xuICB1cGRhdGVEb2MoKGQpID0+ICh7IC4uLmQsIG5hbWUgfSkpO1xuICBlbnF1ZXVlKHsga2luZDogXCJyZW5hbWVQcm9qZWN0XCIsIGlkOiBkb2MuaWQsIG5hbWUgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGh1bWJuYWlsc1xuXG5sZXQgdGh1bWJUaW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVUaHVtYlJlZnJlc2goKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gIGNsZWFyVGltZW91dCh0aHVtYlRpbWVyKTtcbiAgdGh1bWJUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBnZXRTdGF0ZSgpLmRvYztcbiAgICBpZiAoIWRvYykgcmV0dXJuO1xuICAgIHJlbmRlclRodW1iKGRvYylcbiAgICAgIC50aGVuKCh0aHVtYikgPT4ge1xuICAgICAgICAvLyBUaGUgZG9jIG1heSBoYXZlIGJlZW4gY2xvc2VkIHdoaWxlIHJlbmRlcmluZy5cbiAgICAgICAgaWYgKGdldFN0YXRlKCkuZG9jPy5pZCA9PT0gZG9jLmlkKSB7XG4gICAgICAgICAgZW5xdWV1ZSh7IGtpbmQ6IFwic2V0VGh1bWJcIiwgaWQ6IGRvYy5pZCwgdGh1bWIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgfSwgMTUwMCk7XG59XG4iLCAiLy8gVmlld3BvcnQgKHpvb20vcGFuKSBoZWxwZXJzLiBUaGUgY2FudmFzIHN0YWdlIHJlZ2lzdGVycyBpdHMgRE9NIGVsZW1lbnQgc29cbi8vIHpvb20gc2hvcnRjdXRzIGFuZCB0b29sYmFyIGJ1dHRvbnMgY2FuIHpvb20gYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci5cblxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgTUlOX1pPT00gPSAwLjA1O1xuZXhwb3J0IGNvbnN0IE1BWF9aT09NID0gODtcbmNvbnN0IEZJVF9QQURESU5HID0gNTY7XG4vKiogV2hlZWwgc2Vuc2l0aXZpdHkgYXQgem9vbT0xOyBzY2FsZXMgdXAgd2hlbiB6b29tZWQgb3V0LiAqL1xuY29uc3QgV0hFRUxfWk9PTV9TRU5TSVRJVklUWSA9IDAuMDA3MjtcblxuZXhwb3J0IGNvbnN0IHZpZXdwb3J0RWw6IHsgY3VycmVudDogSFRNTEVsZW1lbnQgfCBudWxsIH0gPSB7IGN1cnJlbnQ6IG51bGwgfTtcblxuLyoqIE11bHRpcGxpY2F0aXZlIHpvb20gc3RlcCBcdTIwMTQgbGFyZ2VyIHdoZW4gem9vbWVkIG91dCwgZmluZXIgd2hlbiB6b29tZWQgaW4uICovXG5leHBvcnQgZnVuY3Rpb24gem9vbVN0ZXBGYWN0b3Ioem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMSArIDAuMjUgLyBNYXRoLnNxcnQoTWF0aC5tYXgoem9vbSwgTUlOX1pPT00pKTtcbn1cblxuLyoqIFdoZWVsIHpvb20gc2Vuc2l0aXZpdHkgXHUyMDE0IHN0cm9uZ2VyIHdoZW4gem9vbWVkIG91dC4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGVlbFpvb21TZW5zaXRpdml0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBXSEVFTF9aT09NX1NFTlNJVElWSVRZIC8gTWF0aC5zcXJ0KE1hdGgubWF4KHpvb20sIE1JTl9aT09NKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JlZW5Ub1dvcmxkKFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCByZWN0ID0gZWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpID8/IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogKGNsaWVudFggLSByZWN0LmxlZnQgLSB2aWV3LnBhblgpIC8gdmlldy56b29tLFxuICAgICAgICB5OiAoY2xpZW50WSAtIHJlY3QudG9wIC0gdmlldy5wYW5ZKSAvIHZpZXcuem9vbSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gem9vbUF0Q2xpZW50KFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXIsXG4gICAgbmV4dFpvb206IG51bWJlcixcbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB2aWV3IH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHpvb20gPSBjbGFtcChuZXh0Wm9vbSwgTUlOX1pPT00sIE1BWF9aT09NKTtcbiAgICBjb25zdCB3eCA9IChjbGllbnRYIC0gcmVjdC5sZWZ0IC0gdmlldy5wYW5YKSAvIHZpZXcuem9vbTtcbiAgICBjb25zdCB3eSA9IChjbGllbnRZIC0gcmVjdC50b3AgLSB2aWV3LnBhblkpIC8gdmlldy56b29tO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IGNsaWVudFggLSByZWN0LmxlZnQgLSB3eCAqIHpvb20sXG4gICAgICAgICAgICBwYW5ZOiBjbGllbnRZIC0gcmVjdC50b3AgLSB3eSAqIHpvb20sXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZVBhbihwYW5YOiBudW1iZXIsIHBhblk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgdmlldyB9ID0gZ2V0U3RhdGUoKTtcbiAgICBzZXRTdGF0ZSh7IHZpZXc6IHsgLi4udmlldywgcGFuWCwgcGFuWSB9IH0pO1xufVxuXG4vKiogWm9vbSBpbiAoYGRpcmVjdGlvbiA+IDBgKSBvciBvdXQgKGBkaXJlY3Rpb24gPCAwYCkgYWJvdXQgdGhlIHZpZXdwb3J0IGNlbnRlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6b29tQnkoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHZpZXdwb3J0RWwuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHpvb20gPSBnZXRTdGF0ZSgpLnZpZXcuem9vbTtcbiAgICBjb25zdCBzdGVwID0gem9vbVN0ZXBGYWN0b3Ioem9vbSk7XG4gICAgY29uc3QgZmFjdG9yID0gZGlyZWN0aW9uID4gMCA/IHN0ZXAgOiAxIC8gc3RlcDtcbiAgICB6b29tQXRDbGllbnQoXG4gICAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMixcbiAgICAgICAgem9vbSAqIGZhY3RvcixcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0RG9jKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdmlld3BvcnRFbC5jdXJyZW50O1xuICAgIGNvbnN0IGRvYyA9IGdldFN0YXRlKCkuZG9jO1xuICAgIGlmICghZWwgfHwgIWRvYykgcmV0dXJuO1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB6b29tID0gY2xhbXAoXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgKHJlY3Qud2lkdGggLSBGSVRfUEFERElORyAqIDIpIC8gZG9jLndpZHRoLFxuICAgICAgICAgICAgKHJlY3QuaGVpZ2h0IC0gRklUX1BBRERJTkcgKiAyKSAvIGRvYy5oZWlnaHQsXG4gICAgICAgICksXG4gICAgICAgIE1JTl9aT09NLFxuICAgICAgICBNQVhfWk9PTSxcbiAgICApO1xuICAgIHNldFN0YXRlKHtcbiAgICAgICAgdmlldzoge1xuICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgIHBhblg6IChyZWN0LndpZHRoIC0gZG9jLndpZHRoICogem9vbSkgLyAyLFxuICAgICAgICAgICAgcGFuWTogKHJlY3QuaGVpZ2h0IC0gZG9jLmhlaWdodCAqIHpvb20pIC8gMixcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RGaXQoKTogdm9pZCB7XG4gICAgc2V0U3RhdGUoeyBmaXRWZXJzaW9uOiBnZXRTdGF0ZSgpLmZpdFZlcnNpb24gKyAxIH0pO1xufVxuIiwgIi8vIFB1cmUgZ2VvbWV0cnkgZm9yIG1vdmluZywgc2NhbGluZywgYW5kIHJvdGF0aW5nIGxheWVycy4gQWxsIG1hdGggd29ya3MgaW5cbi8vIHByb2plY3QgKFwid29ybGRcIikgY29vcmRpbmF0ZXM7IHJvdGF0aW9uIGlzIGRlZ3JlZXMgY2xvY2t3aXNlIGFib3V0IHRoZVxuLy8gbGF5ZXIncyBjZW50ZXIuXG5cbmltcG9ydCB7IE1JTl9MQVlFUl9TSVpFLCB0eXBlIExheWVyVHJhbnNmb3JtIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgUG9pbnQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbmV4cG9ydCB0eXBlIEhhbmRsZUlkID0gXCJud1wiIHwgXCJuXCIgfCBcIm5lXCIgfCBcImVcIiB8IFwic2VcIiB8IFwic1wiIHwgXCJzd1wiIHwgXCJ3XCI7XG5cbi8qKiBIYW5kbGUgcG9zaXRpb25zIGluIHVuaXQgYm94IGNvb3JkaW5hdGVzICgwLi4xKS4gKi9cbmV4cG9ydCBjb25zdCBIQU5ETEVTOiBSZWNvcmQ8SGFuZGxlSWQsIFBvaW50PiA9IHtcbiAgbnc6IHsgeDogMCwgeTogMCB9LFxuICBuOiB7IHg6IDAuNSwgeTogMCB9LFxuICBuZTogeyB4OiAxLCB5OiAwIH0sXG4gIGU6IHsgeDogMSwgeTogMC41IH0sXG4gIHNlOiB7IHg6IDEsIHk6IDEgfSxcbiAgczogeyB4OiAwLjUsIHk6IDEgfSxcbiAgc3c6IHsgeDogMCwgeTogMSB9LFxuICB3OiB7IHg6IDAsIHk6IDAuNSB9XG59O1xuXG5leHBvcnQgY29uc3QgSEFORExFX0lEUyA9IE9iamVjdC5rZXlzKEhBTkRMRVMpIGFzIEhhbmRsZUlkW107XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nvcm5lckhhbmRsZShoYW5kbGU6IEhhbmRsZUlkKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYW5kbGUubGVuZ3RoID09PSAyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKGRlZyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVjKHY6IFBvaW50LCBkZWc6IG51bWJlcik6IFBvaW50IHtcbiAgY29uc3QgcmFkID0gZGVnVG9SYWQoZGVnKTtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkKTtcbiAgcmV0dXJuIHsgeDogdi54ICogY29zIC0gdi55ICogc2luLCB5OiB2LnggKiBzaW4gKyB2LnkgKiBjb3MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ2VudGVyKHQ6IExheWVyVHJhbnNmb3JtKTogUG9pbnQge1xuICByZXR1cm4geyB4OiB0LnggKyB0LncgLyAyLCB5OiB0LnkgKyB0LmggLyAyIH07XG59XG5cbi8qKiBXb3JsZCBwb3NpdGlvbiBvZiBhIHBvaW50IGdpdmVuIGluIHVuaXQgYm94IGNvb3JkaW5hdGVzICgwLi4xKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bml0UG9pbnRUb1dvcmxkKHQ6IExheWVyVHJhbnNmb3JtLCB1bml0OiBQb2ludCk6IFBvaW50IHtcbiAgY29uc3QgY2VudGVyID0gbGF5ZXJDZW50ZXIodCk7XG4gIGNvbnN0IGxvY2FsID0geyB4OiAodW5pdC54IC0gMC41KSAqIHQudywgeTogKHVuaXQueSAtIDAuNSkgKiB0LmggfTtcbiAgY29uc3Qgcm90YXRlZCA9IHJvdGF0ZVZlYyhsb2NhbCwgdC5yb3RhdGlvbik7XG4gIHJldHVybiB7IHg6IGNlbnRlci54ICsgcm90YXRlZC54LCB5OiBjZW50ZXIueSArIHJvdGF0ZWQueSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgYSA9IGRlZyAlIDM2MDtcbiAgaWYgKGEgPiAxODApIGEgLT0gMzYwO1xuICBpZiAoYSA8PSAtMTgwKSBhICs9IDM2MDtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVzaXplIGBzdGFydGAgYnkgZHJhZ2dpbmcgYGhhbmRsZWAgdG8gd29ybGQgcG9pbnQgYHBvaW50ZXJgLCBrZWVwaW5nIHRoZVxuICogb3Bwb3NpdGUgaGFuZGxlIGZpeGVkLiBDb3JuZXIgaGFuZGxlcyBzY2FsZSBwcm9wb3J0aW9uYWxseSB1bmxlc3MgYGZyZWVgO1xuICogZWRnZSBoYW5kbGVzIHN0cmV0Y2ggYSBzaW5nbGUgYXhpcy4gTmV2ZXIgZmxpcHM7IGNsYW1wcyB0byBNSU5fTEFZRVJfU0laRS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlRnJvbUhhbmRsZShcbiAgc3RhcnQ6IExheWVyVHJhbnNmb3JtLFxuICBoYW5kbGU6IEhhbmRsZUlkLFxuICBwb2ludGVyOiBQb2ludCxcbiAgZnJlZTogYm9vbGVhblxuKTogUGljazxMYXllclRyYW5zZm9ybSwgXCJ4XCIgfCBcInlcIiB8IFwid1wiIHwgXCJoXCI+IHtcbiAgY29uc3QgaCA9IEhBTkRMRVNbaGFuZGxlXTtcbiAgY29uc3QgYW5jaG9yID0geyB4OiAxIC0gaC54LCB5OiAxIC0gaC55IH07XG4gIGNvbnN0IGFuY2hvcldvcmxkID0gdW5pdFBvaW50VG9Xb3JsZChzdGFydCwgYW5jaG9yKTtcblxuICAvLyBQb2ludGVyIGV4cHJlc3NlZCBpbiB0aGUgbGF5ZXIncyBsb2NhbCAodW5yb3RhdGVkKSBmcmFtZSwgcmVsYXRpdmUgdG8gdGhlIGFuY2hvci5cbiAgY29uc3QgdiA9IHJvdGF0ZVZlYyh7IHg6IHBvaW50ZXIueCAtIGFuY2hvcldvcmxkLngsIHk6IHBvaW50ZXIueSAtIGFuY2hvcldvcmxkLnkgfSwgLXN0YXJ0LnJvdGF0aW9uKTtcbiAgY29uc3QgZGlyWCA9IGgueCAtIGFuY2hvci54OyAvLyAtMSwgMCwgb3IgMVxuICBjb25zdCBkaXJZID0gaC55IC0gYW5jaG9yLnk7XG5cbiAgbGV0IHcgPSBzdGFydC53O1xuICBsZXQgaGd0ID0gc3RhcnQuaDtcblxuICBpZiAoaXNDb3JuZXJIYW5kbGUoaGFuZGxlKSAmJiAhZnJlZSkge1xuICAgIC8vIFByb2plY3QgdGhlIHBvaW50ZXIgb250byB0aGUgYW5jaG9yLT5oYW5kbGUgZGlhZ29uYWwgZm9yIGEgc21vb3RoIHVuaWZvcm0gc2NhbGUuXG4gICAgY29uc3QgZHggPSBkaXJYICogc3RhcnQudztcbiAgICBjb25zdCBkeSA9IGRpclkgKiBzdGFydC5oO1xuICAgIGNvbnN0IHMgPSBNYXRoLm1heChcbiAgICAgIE1JTl9MQVlFUl9TSVpFIC8gTWF0aC5tYXgoc3RhcnQudywgc3RhcnQuaCksXG4gICAgICAodi54ICogZHggKyB2LnkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpXG4gICAgKTtcbiAgICB3ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHN0YXJ0LncgKiBzKTtcbiAgICBoZ3QgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgc3RhcnQuaCAqIHMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChkaXJYICE9PSAwKSB3ID0gTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIHYueCAvIGRpclgpO1xuICAgIGlmIChkaXJZICE9PSAwKSBoZ3QgPSBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgdi55IC8gZGlyWSk7XG4gIH1cblxuICAvLyBSZXBvc2l0aW9uIHNvIHRoZSBhbmNob3IgcG9pbnQgc3RheXMgZml4ZWQgaW4gd29ybGQgc3BhY2UuXG4gIGNvbnN0IGNlbnRlck9mZnNldCA9IHJvdGF0ZVZlYyh7IHg6ICgwLjUgLSBhbmNob3IueCkgKiB3LCB5OiAoMC41IC0gYW5jaG9yLnkpICogaGd0IH0sIHN0YXJ0LnJvdGF0aW9uKTtcbiAgY29uc3QgY3ggPSBhbmNob3JXb3JsZC54ICsgY2VudGVyT2Zmc2V0Lng7XG4gIGNvbnN0IGN5ID0gYW5jaG9yV29ybGQueSArIGNlbnRlck9mZnNldC55O1xuICByZXR1cm4geyB4OiBjeCAtIHcgLyAyLCB5OiBjeSAtIGhndCAvIDIsIHcsIGg6IGhndCB9O1xufVxuXG4vKiogQW5nbGUgZm9yIHRoZSByb3RhdGUgaGFuZGxlICh3aGljaCBzaXRzIGFib3ZlIHRoZSB0b3AgZWRnZSkuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25Gcm9tUG9pbnRlcihzdGFydDogTGF5ZXJUcmFuc2Zvcm0sIHBvaW50ZXI6IFBvaW50LCBzbmFwOiBib29sZWFuKTogbnVtYmVyIHtcbiAgY29uc3QgY2VudGVyID0gbGF5ZXJDZW50ZXIoc3RhcnQpO1xuICBjb25zdCBkZWcgPSAoTWF0aC5hdGFuMihwb2ludGVyLnkgLSBjZW50ZXIueSwgcG9pbnRlci54IC0gY2VudGVyLngpICogMTgwKSAvIE1hdGguUEkgKyA5MDtcbiAgY29uc3Qgc25hcHBlZCA9IHNuYXAgPyBNYXRoLnJvdW5kKGRlZyAvIDE1KSAqIDE1IDogZGVnO1xuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoc25hcHBlZCk7XG59XG5cbi8qKiBBeGlzLWFsaWduZWQgYm91bmRzIG9mIGEgKHBvc3NpYmx5IHJvdGF0ZWQpIGxheWVyLCBmb3IgZ3JvdXAgb3V0bGluZXMuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJBYWJiKHQ6IExheWVyVHJhbnNmb3JtKTogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XG4gIGNvbnN0IGNvcm5lcnMgPSBbXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDAsIHk6IDAgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDEsIHk6IDAgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDEsIHk6IDEgfSksXG4gICAgdW5pdFBvaW50VG9Xb3JsZCh0LCB7IHg6IDAsIHk6IDEgfSlcbiAgXTtcbiAgY29uc3QgeHMgPSBjb3JuZXJzLm1hcCgoYykgPT4gYy54KTtcbiAgY29uc3QgeXMgPSBjb3JuZXJzLm1hcCgoYykgPT4gYy55KTtcbiAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnhzKTtcbiAgY29uc3QgbWluWSA9IE1hdGgubWluKC4uLnlzKTtcbiAgcmV0dXJuIHsgeDogbWluWCwgeTogbWluWSwgdzogTWF0aC5tYXgoLi4ueHMpIC0gbWluWCwgaDogTWF0aC5tYXgoLi4ueXMpIC0gbWluWSB9O1xufVxuIiwgIi8vIEltcG9ydGluZyBpbWFnZXMgZnJvbSBmaWxlczogZGVjb2RlLCBkb3duc2NhbGUgb3ZlcnNpemVkIGltYWdlcyAoZGF0YSBVUkxzXG4vLyBhcmUgdGhlIHVwbG9hZCB3aXJlIGZvcm1hdDsgdGhlIHNlcnZlciBzdG9yZXMgdGhlbSBpbiBTMyksIGFuZCByZXBvcnRcbi8vIG5hdHVyYWwgZGltZW5zaW9ucy5cblxuaW1wb3J0IHsgTUFYX0lNQUdFX0RJTSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1wb3J0ZWRJbWFnZSB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIHJlYWRGaWxlQXNEYXRhVXJsKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoU3RyaW5nKHJlYWRlci5yZXN1bHQpKTtcbiAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVhZCBmaWxlXCIpKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUltYWdlKHNyYzogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1nKTtcbiAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJOb3QgYSBzdXBwb3J0ZWQgaW1hZ2VcIikpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiYXNlTmFtZShmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZpbGVOYW1lLnJlcGxhY2UoL1xcLlteLl0rJC8sIFwiXCIpIHx8IFwiSW1hZ2VcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVUb0ltcG9ydGVkSW1hZ2UoZmlsZTogRmlsZSk6IFByb21pc2U8SW1wb3J0ZWRJbWFnZT4ge1xuICBjb25zdCBvcmlnaW5hbCA9IGF3YWl0IHJlYWRGaWxlQXNEYXRhVXJsKGZpbGUpO1xuICBjb25zdCBpbWcgPSBhd2FpdCBkZWNvZGVJbWFnZShvcmlnaW5hbCk7XG4gIGNvbnN0IHdpZHRoID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG4gIGlmICh3aWR0aCA8IDEgfHwgaGVpZ2h0IDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHN1cHBvcnRlZCBpbWFnZVwiKTtcbiAgfVxuXG4gIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX0lNQUdFX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgaWYgKHNjYWxlID09PSAxKSB7XG4gICAgcmV0dXJuIHsgc3JjOiBvcmlnaW5hbCwgd2lkdGgsIGhlaWdodCwgbmFtZTogYmFzZU5hbWUoZmlsZS5uYW1lKSB9O1xuICB9XG5cbiAgY29uc3QgdyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICBjb25zdCBoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChoZWlnaHQgKiBzY2FsZSkpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3O1xuICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHRocm93IG5ldyBFcnJvcihcIkNhbnZhcyB1bmF2YWlsYWJsZVwiKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHcsIGgpO1xuICAvLyBKUEVHIHJlLWVuY29kZXMgcGhvdG9zIGNvbXBhY3RseTsgUE5HIGtlZXBzIHRyYW5zcGFyZW5jeSBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICBjb25zdCBzcmMgPVxuICAgIGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgPyBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjkpIDogY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgcmV0dXJuIHsgc3JjLCB3aWR0aDogdywgaGVpZ2h0OiBoLCBuYW1lOiBiYXNlTmFtZShmaWxlLm5hbWUpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlcihkdDogRGF0YVRyYW5zZmVyIHwgbnVsbCk6IEZpbGVbXSB7XG4gIGlmICghZHQpIHJldHVybiBbXTtcbiAgcmV0dXJuIFsuLi5kdC5maWxlc10uZmlsdGVyKChmaWxlKSA9PiBmaWxlLnR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSk7XG59XG4iLCAiY29uc3QgRU5DT0RFRF9FTlRJVElFUyA9IC9bXCImPF0vO1xuXG4vKiogQHBhcmFtIHtzdHJpbmd9IHN0ciAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUVudGl0aWVzKHN0cikge1xuXHQvLyBTa2lwIGFsbCB3b3JrIGZvciBzdHJpbmdzIHdpdGggbm8gZW50aXRpZXMgbmVlZGluZyBlbmNvZGluZzpcblx0aWYgKHN0ci5sZW5ndGggPT09IDAgfHwgRU5DT0RFRF9FTlRJVElFUy50ZXN0KHN0cikgPT09IGZhbHNlKSByZXR1cm4gc3RyO1xuXG5cdGxldCBsYXN0ID0gMCxcblx0XHRpID0gMCxcblx0XHRvdXQgPSAnJyxcblx0XHRjaCA9ICcnO1xuXG5cdC8vIFNlZWsgZm9yd2FyZCBpbiBzdHIgdW50aWwgdGhlIG5leHQgZW50aXR5IGNoYXI6XG5cdGZvciAoOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0Y2ggPSAnJnF1b3Q7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRjaCA9ICcmYW1wOyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2MDpcblx0XHRcdFx0Y2ggPSAnJmx0Oyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIEFwcGVuZCBza2lwcGVkL2J1ZmZlcmVkIGNoYXJhY3RlcnMgYW5kIHRoZSBlbmNvZGVkIGVudGl0eTpcblx0XHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0XHRvdXQgKz0gY2g7XG5cdFx0Ly8gU3RhcnQgdGhlIG5leHQgc2Vlay9idWZmZXIgYWZ0ZXIgdGhlIGVudGl0eSdzIG9mZnNldDpcblx0XHRsYXN0ID0gaSArIDE7XG5cdH1cblx0aWYgKGkgIT09IGxhc3QpIG91dCArPSBzdHIuc2xpY2UobGFzdCwgaSk7XG5cdHJldHVybiBvdXQ7XG59XG4iLCAiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGVuY29kZUVudGl0aWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi8uLi9zcmMvY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgZXhwb3J0cyB2YXJpb3VzIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQmFiZWwncyBcImF1dG9tYXRpY1wiIEpTWCBydW50aW1lIEFQSTpcbiAqIC0ganN4KHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeHModHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIF9fc291cmNlLCBfX3NlbGYpXG4gKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIGNyZWF0ZVZOb2RlIGhlcmUgaXMgb3B0aW1pemVkIGZvciBwZXJmb3JtYW5jZS5cbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWY2YjU0YTBiNDYzMjEwMGE3ZGNkMmIzXG4gKi9cblxuLyoqXG4gKiBKU1guRWxlbWVudCBmYWN0b3J5IHVzZWQgYnkgQmFiZWwncyB7cnVudGltZTpcImF1dG9tYXRpY1wifSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZOb2RlWyd0eXBlJ119IHR5cGVcbiAqIEBwYXJhbSB7Vk5vZGVbJ3Byb3BzJ119IHByb3BzXG4gKiBAcGFyYW0ge1ZOb2RlWydrZXknXX0gW2tleV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW2lzU3RhdGljQ2hpbGRyZW5dXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NvdXJjZV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc2VsZl1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgX19zb3VyY2UsIF9fc2VsZikge1xuXHRpZiAoIXByb3BzKSBwcm9wcyA9IHt9O1xuXHQvLyBXZSdsbCB3YW50IHRvIHByZXNlcnZlIGByZWZgIGluIHByb3BzIHRvIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yXG5cdC8vIGZvcndhcmRSZWYgY29tcG9uZW50cyBpbiB0aGUgZnV0dXJlLCBidXQgdGhhdCBzaG91bGQgaGFwcGVuIHZpYVxuXHQvLyBhIHNlcGFyYXRlIFBSLlxuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHMsXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0aWYgKCdyZWYnIGluIG5vcm1hbGl6ZWRQcm9wcykge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXHRcdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdFx0aWYgKGkgPT0gJ3JlZicpIHtcblx0XHRcdFx0cmVmID0gcHJvcHNbaV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiogQHR5cGUge1ZOb2RlICYgeyBfX3NvdXJjZTogYW55OyBfX3NlbGY6IGFueSB9fSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzOiBub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiAtLXZub2RlSWQsXG5cdFx0X2luZGV4OiAtMSxcblx0XHRfZmxhZ3M6IDAsXG5cdFx0X19zb3VyY2UsXG5cdFx0X19zZWxmXG5cdH07XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzLlxuXHQvLyBOb3RlOiBgdHlwZWAgaXMgb2Z0ZW4gYSBTdHJpbmcsIGFuZCBjYW4gYmUgYHVuZGVmaW5lZGAgaW4gZGV2ZWxvcG1lbnQuXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAocmVmID0gdHlwZS5kZWZhdWx0UHJvcHMpKSB7XG5cdFx0Zm9yIChpIGluIHJlZilcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSByZWZbaV07XG5cdFx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy52bm9kZSkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cdHJldHVybiB2bm9kZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB0ZW1wbGF0ZSB2bm9kZS4gVGhpcyBmdW5jdGlvbiBpcyBub3QgZXhwZWN0ZWQgdG8gYmVcbiAqIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmdbXX0gdGVtcGxhdGVzXG4gKiBAcGFyYW0gIHtBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fSBleHByc1xuICogQHJldHVybnMge1ZOb2RlfVxuICovXG5mdW5jdGlvbiBqc3hUZW1wbGF0ZSh0ZW1wbGF0ZXMsIC4uLmV4cHJzKSB7XG5cdGNvbnN0IHZub2RlID0gY3JlYXRlVk5vZGUoRnJhZ21lbnQsIHsgdHBsOiB0ZW1wbGF0ZXMsIGV4cHJzIH0pO1xuXHQvLyBCeXBhc3MgcmVuZGVyIHRvIHN0cmluZyB0b3AgbGV2ZWwgRnJhZ21lbnQgb3B0aW1pemF0aW9uXG5cdHZub2RlLmtleSA9IHZub2RlLl92bm9kZTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG5jb25zdCBKU19UT19DU1MgPSB7fTtcbmNvbnN0IENTU19SRUdFWCA9IC9bQS1aXS9nO1xuXG4vKipcbiAqIFVud3JhcCBwb3RlbnRpYWwgc2lnbmFscy5cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nXG5cdFx0PyB2YWx1ZS52YWx1ZU9mKClcblx0XHQ6IHZhbHVlO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBIVE1MIGF0dHJpYnV0ZSB0byBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBub3RcbiAqIGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhIHByZWNvbXBpbGVcbiAqIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYXR0cmlidXRlIHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqc3hBdHRyKG5hbWUsIHZhbHVlKSB7XG5cdGlmIChvcHRpb25zLmF0dHIpIHtcblx0XHRjb25zdCByZXN1bHQgPSBvcHRpb25zLmF0dHIobmFtZSwgdmFsdWUpO1xuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHZhbHVlID0gbm9ybWFsaXplQXR0clZhbHVlKHZhbHVlKTtcblxuXHRpZiAobmFtZSA9PT0gJ3JlZicgfHwgbmFtZSA9PT0gJ2tleScpIHJldHVybiAnJztcblx0aWYgKG5hbWUgPT09ICdzdHlsZScgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRmb3IgKGxldCBwcm9wIGluIHZhbHVlKSB7XG5cdFx0XHRsZXQgdmFsID0gdmFsdWVbcHJvcF07XG5cdFx0XHRpZiAodmFsICE9IG51bGwgJiYgdmFsICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBuYW1lID1cblx0XHRcdFx0XHRwcm9wWzBdID09ICctJ1xuXHRcdFx0XHRcdFx0PyBwcm9wXG5cdFx0XHRcdFx0XHQ6IEpTX1RPX0NTU1twcm9wXSB8fFxuXHRcdFx0XHRcdFx0XHQoSlNfVE9fQ1NTW3Byb3BdID0gcHJvcC5yZXBsYWNlKENTU19SRUdFWCwgJy0kJicpLnRvTG93ZXJDYXNlKCkpO1xuXG5cdFx0XHRcdGxldCBzdWZmaXggPSAnOyc7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0XHRcdC8vIEV4Y2x1ZGUgY3VzdG9tLWF0dHJpYnV0ZXNcblx0XHRcdFx0XHQhbmFtZS5zdGFydHNXaXRoKCctLScpICYmXG5cdFx0XHRcdFx0IUlTX05PTl9ESU1FTlNJT05BTC50ZXN0KG5hbWUpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICdweDsnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciA9IHN0ciArIG5hbWUgKyAnOicgKyB2YWwgKyBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcyhzdHIpICsgJ1wiJztcblx0fVxuXG5cdGlmIChcblx0XHR2YWx1ZSA9PSBudWxsIHx8XG5cdFx0dmFsdWUgPT09IGZhbHNlIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHJldHVybiBuYW1lO1xuXG5cdHJldHVybiBuYW1lICsgJz1cIicgKyBlbmNvZGVFbnRpdGllcygnJyArIHZhbHVlKSArICdcIic7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgZHluYW1pYyBjaGlsZCBwYXNzZWQgdG8gYGpzeFRlbXBsYXRlYC4gVGhpcyBmdW5jdGlvblxuICogaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCByYXRoZXIgdGhyb3VnaCBhXG4gKiBwcmVjb21waWxlIEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsIHwgVk5vZGUgfCBBcnJheTxzdHJpbmcgfCBudWxsIHwgVk5vZGU+fVxuICovXG5mdW5jdGlvbiBqc3hFc2NhcGUodmFsdWUpIHtcblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gQ2hlY2sgZm9yIFZOb2RlXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZTtcblxuXHRcdGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YWx1ZVtpXSA9IGpzeEVzY2FwZSh2YWx1ZVtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVWTm9kZSBhcyBqc3gsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeHMsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeERFVixcblx0RnJhZ21lbnQsXG5cdC8vIHByZWNvbXBpbGVkIEpTWCB0cmFuc2Zvcm1cblx0anN4VGVtcGxhdGUsXG5cdGpzeEF0dHIsXG5cdGpzeEVzY2FwZVxufTtcbiIsICIvLyBUaGUgY2FudmFzOiByZW5kZXJzIHRoZSBhcnRib2FyZCBhbmQgaXRzIGxheWVycyB3aXRoIENTUyB0cmFuc2Zvcm1zIChHUFVcbi8vIGNvbXBvc2l0aW5nIGtlZXBzIGRyYWdzIGF0IGZyYW1lIHJhdGUpLCBhbmQgb3ducyBhbGwgcG9pbnRlciBnZXN0dXJlcyBcdTIwMTRcbi8vIHNlbGVjdCwgbW92ZSwgc2NhbGUsIHJvdGF0ZSwgcGFuIFx1MjAxNCBwbHVzIHdoZWVsIHpvb20vcGFuIGFuZCBpbWFnZSBkcm9wLlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gIEhBTkRMRVMsXG4gIEhBTkRMRV9JRFMsXG4gIHJvdGF0aW9uRnJvbVBvaW50ZXIsXG4gIHNjYWxlRnJvbUhhbmRsZSxcbiAgdHlwZSBIYW5kbGVJZFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dlb21ldHJ5XCI7XG5pbXBvcnQgdHlwZSB7IExheWVyLCBMYXllclRyYW5zZm9ybSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gIGFkZEltYWdlTGF5ZXJzLFxuICBhcHBseVRyYW5zaWVudCxcbiAgY29tbWl0VHJhbnNmb3JtcyxcbiAgc2V0U2VsZWN0aW9uLFxuICB0b2dnbGVTZWxlY3RlZCxcbiAgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UsXG4gIHR5cGUgVHJhbnNmb3JtUGF0Y2hcbn0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFzc2V0RW50cnkgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQge1xuICBmaXREb2MsXG4gIHNjcmVlblRvV29ybGQsXG4gIHNldFN0YXRlUGFuLFxuICB2aWV3cG9ydEVsLFxuICB3aGVlbFpvb21TZW5zaXRpdml0eSxcbiAgem9vbUF0Q2xpZW50XG59IGZyb20gXCIuLi9zdGF0ZS92aWV3XCI7XG5pbXBvcnQgeyBmaWxlVG9JbXBvcnRlZEltYWdlLCBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlciB9IGZyb20gXCIuLi9saWIvaW1hZ2VcIjtcblxudHlwZSBHZXN0dXJlID1cbiAgfCB7IGtpbmQ6IFwicGFuXCI7IHN0YXJ0Q2xpZW50WDogbnVtYmVyOyBzdGFydENsaWVudFk6IG51bWJlcjsgc3RhcnRQYW5YOiBudW1iZXI7IHN0YXJ0UGFuWTogbnVtYmVyIH1cbiAgfCB7IGtpbmQ6IFwibW92ZVwiOyBzdGFydFg6IG51bWJlcjsgc3RhcnRZOiBudW1iZXI7IHN0YXJ0czogTWFwPHN0cmluZywgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PjsgbW92ZWQ6IGJvb2xlYW4gfVxuICB8IHsga2luZDogXCJzY2FsZVwiOyBpZDogc3RyaW5nOyBoYW5kbGU6IEhhbmRsZUlkOyBzdGFydDogTGF5ZXJUcmFuc2Zvcm0gfVxuICB8IHsga2luZDogXCJyb3RhdGVcIjsgaWQ6IHN0cmluZzsgc3RhcnQ6IExheWVyVHJhbnNmb3JtIH07XG5cbmNvbnN0IEhBTkRMRV9DVVJTT1JTOiBSZWNvcmQ8SGFuZGxlSWQsIHN0cmluZz4gPSB7XG4gIG53OiBcIm53c2UtcmVzaXplXCIsXG4gIG46IFwibnMtcmVzaXplXCIsXG4gIG5lOiBcIm5lc3ctcmVzaXplXCIsXG4gIGU6IFwiZXctcmVzaXplXCIsXG4gIHNlOiBcIm53c2UtcmVzaXplXCIsXG4gIHM6IFwibnMtcmVzaXplXCIsXG4gIHN3OiBcIm5lc3ctcmVzaXplXCIsXG4gIHc6IFwiZXctcmVzaXplXCJcbn07XG5cbmZ1bmN0aW9uIExheWVyVmlldyh7IGxheWVyIH06IHsgbGF5ZXI6IExheWVyIH0pIHtcbiAgY29uc3QgYXNzZXQgPSB1c2VBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aDogbGF5ZXIudyxcbiAgICBoZWlnaHQ6IGxheWVyLmgsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bGF5ZXIueH1weCwgJHtsYXllci55fXB4KSByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYCxcbiAgICBvcGFjaXR5OiBsYXllci5vcGFjaXR5LFxuICAgIGRpc3BsYXk6IGxheWVyLnZpc2libGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxuICB9O1xuICBpZiAoIWFzc2V0KSB7XG4gICAgcmV0dXJuIDxkaXYgZGF0YS1sYXllcmlkPXtsYXllci5pZH0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIGFuaW1hdGUtcHVsc2UgYmctbmV1dHJhbC01MDAvMzBcIiBzdHlsZT17c3R5bGV9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgYWx0PXtsYXllci5uYW1lfVxuICAgICAgZGF0YS1sYXllcmlkPXtsYXllci5pZH1cbiAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgbWF4LXctbm9uZSBzZWxlY3Qtbm9uZVwiXG4gICAgICBzcmM9e2Fzc2V0LnNyY31cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWxlY3Rpb25Cb3goeyBsYXllciwgem9vbSwgc2luZ2xlIH06IHsgbGF5ZXI6IExheWVyOyB6b29tOiBudW1iZXI7IHNpbmdsZTogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IGhhbmRsZVNpemUgPSAxMSAvIHpvb207XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IGxheWVyLncsXG4gICAgICAgIGhlaWdodDogbGF5ZXIuaCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7bGF5ZXIueH1weCwgJHtsYXllci55fXB4KSByb3RhdGUoJHtsYXllci5yb3RhdGlvbn1kZWcpYFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYm9yZGVyLXNreS00MDBcIiBzdHlsZT17eyBib3JkZXJXaWR0aDogMS41IC8gem9vbSwgYm9yZGVyU3R5bGU6IFwic29saWRcIiB9fSAvPlxuICAgICAge3NpbmdsZSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7Lyogcm90YXRlIGhhbmRsZSBzdGVtICsga25vYiAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBiZy1za3ktNDAwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IFwiNTAlXCIsIHRvcDogLTIyIC8gem9vbSwgd2lkdGg6IDEuNSAvIHpvb20sIGhlaWdodDogMjIgLyB6b29tLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLWhhbmRsZT1cInJvdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXNreS01MDAgYmctd2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgICAgICAgICAgdG9wOiAtMjYgLyB6b29tLFxuICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBoYW5kbGVTaXplLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJjcm9zc2hhaXJcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtIQU5ETEVfSURTLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgZGF0YS1oYW5kbGU9e2lkfVxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIGFic29sdXRlIHJvdW5kZWQtWzJweF0gYm9yZGVyIGJvcmRlci1za3ktNTAwIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHtIQU5ETEVTW2lkXS54ICogMTAwfSVgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7SEFORExFU1tpZF0ueSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICB3aWR0aDogaGFuZGxlU2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhhbmRsZVNpemUsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogSEFORExFX0NVUlNPUlNbaWRdXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FudmFzU3RhZ2UoKSB7XG4gIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICBjb25zdCB2aWV3ID0gdXNlRWRpdG9yKChzKSA9PiBzLnZpZXcpO1xuICBjb25zdCBzZWxlY3Rpb24gPSB1c2VFZGl0b3IoKHMpID0+IHMuc2VsZWN0aW9uKTtcbiAgY29uc3QgdG9vbCA9IHVzZUVkaXRvcigocykgPT4gcy50b29sKTtcbiAgY29uc3Qgc3BhY2VQYW4gPSB1c2VFZGl0b3IoKHMpID0+IHMuc3BhY2VQYW4pO1xuICBjb25zdCBmaXRWZXJzaW9uID0gdXNlRWRpdG9yKChzKSA9PiBzLmZpdFZlcnNpb24pO1xuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGdlc3R1cmVSZWYgPSB1c2VSZWY8R2VzdHVyZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBwYW5uaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZpZXdwb3J0RWwuY3VycmVudCA9IHJlZi5jdXJyZW50O1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB2aWV3cG9ydEVsLmN1cnJlbnQgPSBudWxsO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBGaXQgdGhlIGFydGJvYXJkIG9uIG9wZW4gYW5kIHdoZW4gcmVxdWVzdGVkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZpdERvYygpO1xuICB9LCBbZG9jPy5pZCwgZml0VmVyc2lvbl0pO1xuXG4gIC8vIFdoZWVsIG11c3QgYmUgYSBub24tcGFzc2l2ZSBuYXRpdmUgbGlzdGVuZXIgdG8gcHJldmVudERlZmF1bHQgcmVsaWFibHkuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgY29uc3Qgb25XaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IHZpZXc6IHYgfSA9IGdldFN0YXRlKCk7XG4gICAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgICB6b29tQXRDbGllbnQoXG4gICAgICAgICAgZS5jbGllbnRYLFxuICAgICAgICAgIGUuY2xpZW50WSxcbiAgICAgICAgICB2Lnpvb20gKiBNYXRoLmV4cCgtZS5kZWx0YVkgKiB3aGVlbFpvb21TZW5zaXRpdml0eSh2Lnpvb20pKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdGVQYW4odi5wYW5YIC0gZS5kZWx0YVgsIHYucGFuWSAtIGUuZGVsdGFZKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIHJldHVybiAoKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgb25XaGVlbCk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWRvYykgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgcGFuTW9kZSA9IHRvb2wgPT09IFwiaGFuZFwiIHx8IHNwYWNlUGFuO1xuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZTogUG9pbnRlckV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSByZWYuY3VycmVudDtcbiAgICBpZiAoIWVsIHx8IGUuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuXG4gICAgaWYgKGUuYnV0dG9uID09PSAxIHx8IHBhbk1vZGUpIHtcbiAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IHtcbiAgICAgICAga2luZDogXCJwYW5cIixcbiAgICAgICAgc3RhcnRDbGllbnRYOiBlLmNsaWVudFgsXG4gICAgICAgIHN0YXJ0Q2xpZW50WTogZS5jbGllbnRZLFxuICAgICAgICBzdGFydFBhblg6IHN0YXRlLnZpZXcucGFuWCxcbiAgICAgICAgc3RhcnRQYW5ZOiBzdGF0ZS52aWV3LnBhbllcbiAgICAgIH07XG4gICAgICBwYW5uaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZSA9IHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtaGFuZGxlXVwiKT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIik7XG4gICAgaWYgKGhhbmRsZSAmJiBzdGF0ZS5zZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBsYXllciA9IHN0YXRlLmRvYz8ubGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IHN0YXRlLnNlbGVjdGlvblswXSk7XG4gICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQ6IExheWVyVHJhbnNmb3JtID0geyAuLi5sYXllciB9O1xuICAgICAgICBnZXN0dXJlUmVmLmN1cnJlbnQgPVxuICAgICAgICAgIGhhbmRsZSA9PT0gXCJyb3RcIlxuICAgICAgICAgICAgPyB7IGtpbmQ6IFwicm90YXRlXCIsIGlkOiBsYXllci5pZCwgc3RhcnQgfVxuICAgICAgICAgICAgOiB7IGtpbmQ6IFwic2NhbGVcIiwgaWQ6IGxheWVyLmlkLCBoYW5kbGU6IGhhbmRsZSBhcyBIYW5kbGVJZCwgc3RhcnQgfTtcbiAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsYXllcklkID0gdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1sYXllcmlkXVwiKT8uZ2V0QXR0cmlidXRlKFwiZGF0YS1sYXllcmlkXCIpO1xuICAgIGlmIChsYXllcklkKSB7XG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICB0b2dnbGVTZWxlY3RlZChsYXllcklkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFzdGF0ZS5zZWxlY3Rpb24uaW5jbHVkZXMobGF5ZXJJZCkpIHtcbiAgICAgICAgc2V0U2VsZWN0aW9uKFtsYXllcklkXSk7XG4gICAgICB9XG4gICAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRTdGF0ZSgpLnNlbGVjdGlvbjtcbiAgICAgIGNvbnN0IHN0YXJ0cyA9IG5ldyBNYXA8c3RyaW5nLCB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+KCk7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW10pIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGxheWVyLmlkKSkgc3RhcnRzLnNldChsYXllci5pZCwgeyB4OiBsYXllci54LCB5OiBsYXllci55IH0pO1xuICAgICAgfVxuICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0geyBraW5kOiBcIm1vdmVcIiwgc3RhcnRYOiB3b3JsZC54LCBzdGFydFk6IHdvcmxkLnksIHN0YXJ0cywgbW92ZWQ6IGZhbHNlIH07XG4gICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0aW9uKFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoZTogUG9pbnRlckV2ZW50KSB7XG4gICAgY29uc3QgZ2VzdHVyZSA9IGdlc3R1cmVSZWYuY3VycmVudDtcbiAgICBpZiAoIWdlc3R1cmUpIHJldHVybjtcblxuICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwicGFuXCIpIHtcbiAgICAgIHNldFN0YXRlUGFuKFxuICAgICAgICBnZXN0dXJlLnN0YXJ0UGFuWCArIChlLmNsaWVudFggLSBnZXN0dXJlLnN0YXJ0Q2xpZW50WCksXG4gICAgICAgIGdlc3R1cmUuc3RhcnRQYW5ZICsgKGUuY2xpZW50WSAtIGdlc3R1cmUuc3RhcnRDbGllbnRZKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3b3JsZCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJtb3ZlXCIpIHtcbiAgICAgIGNvbnN0IGR4ID0gd29ybGQueCAtIGdlc3R1cmUuc3RhcnRYO1xuICAgICAgY29uc3QgZHkgPSB3b3JsZC55IC0gZ2VzdHVyZS5zdGFydFk7XG4gICAgICBpZiAoIWdlc3R1cmUubW92ZWQgJiYgTWF0aC5oeXBvdChkeCwgZHkpICogZ2V0U3RhdGUoKS52aWV3Lnpvb20gPCAyKSByZXR1cm47XG4gICAgICBnZXN0dXJlLm1vdmVkID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBhdGNoZXMgPSBuZXcgTWFwPHN0cmluZywgVHJhbnNmb3JtUGF0Y2g+KCk7XG4gICAgICBmb3IgKGNvbnN0IFtpZCwgc3RhcnRdIG9mIGdlc3R1cmUuc3RhcnRzKSB7XG4gICAgICAgIHBhdGNoZXMuc2V0KGlkLCB7IHg6IHN0YXJ0LnggKyBkeCwgeTogc3RhcnQueSArIGR5IH0pO1xuICAgICAgfVxuICAgICAgYXBwbHlUcmFuc2llbnQocGF0Y2hlcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICBjb25zdCBuZXh0ID0gc2NhbGVGcm9tSGFuZGxlKGdlc3R1cmUuc3RhcnQsIGdlc3R1cmUuaGFuZGxlLCB3b3JsZCwgZS5zaGlmdEtleSk7XG4gICAgICBhcHBseVRyYW5zaWVudChuZXcgTWFwKFtbZ2VzdHVyZS5pZCwgbmV4dF1dKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvbkZyb21Qb2ludGVyKGdlc3R1cmUuc3RhcnQsIHdvcmxkLCBlLnNoaWZ0S2V5KTtcbiAgICBhcHBseVRyYW5zaWVudChuZXcgTWFwKFtbZ2VzdHVyZS5pZCwgeyByb3RhdGlvbiB9XV0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlclVwKCkge1xuICAgIGNvbnN0IGdlc3R1cmUgPSBnZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICBwYW5uaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBpZiAoIWdlc3R1cmUgfHwgZ2VzdHVyZS5raW5kID09PSBcInBhblwiKSByZXR1cm47XG5cbiAgICBjb25zdCBsYXllcnMgPSBnZXRTdGF0ZSgpLmRvYz8ubGF5ZXJzID8/IFtdO1xuICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGxheWVycy5tYXAoKGwpID0+IFtsLmlkLCBsXSkpO1xuXG4gICAgaWYgKGdlc3R1cmUua2luZCA9PT0gXCJtb3ZlXCIpIHtcbiAgICAgIGlmICghZ2VzdHVyZS5tb3ZlZCkgcmV0dXJuO1xuICAgICAgY29uc3QgY2hhbmdlczogVHJhbnNmb3JtQ2hhbmdlW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgW2lkLCBzdGFydF0gb2YgZ2VzdHVyZS5zdGFydHMpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBieUlkLmdldChpZCk7XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgIGNoYW5nZXMucHVzaCh7IGlkLCBiZWZvcmU6IHN0YXJ0LCBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55IH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJNb3ZlXCIsIGNoYW5nZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxheWVyID0gYnlJZC5nZXQoZ2VzdHVyZS5pZCk7XG4gICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgIGlmIChnZXN0dXJlLmtpbmQgPT09IFwic2NhbGVcIikge1xuICAgICAgY29uc3QgeyB4LCB5LCB3LCBoIH0gPSBnZXN0dXJlLnN0YXJ0O1xuICAgICAgY29tbWl0VHJhbnNmb3JtcyhcIlJlc2l6ZVwiLCBbXG4gICAgICAgIHsgaWQ6IGxheWVyLmlkLCBiZWZvcmU6IHsgeCwgeSwgdywgaCB9LCBhZnRlcjogeyB4OiBsYXllci54LCB5OiBsYXllci55LCB3OiBsYXllci53LCBoOiBsYXllci5oIH0gfVxuICAgICAgXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJSb3RhdGVcIiwgW1xuICAgICAgeyBpZDogbGF5ZXIuaWQsIGJlZm9yZTogeyByb3RhdGlvbjogZ2VzdHVyZS5zdGFydC5yb3RhdGlvbiB9LCBhZnRlcjogeyByb3RhdGlvbjogbGF5ZXIucm90YXRpb24gfSB9XG4gICAgXSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvbkRyb3AoZTogRHJhZ0V2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGVzID0gaW1hZ2VGaWxlc0Zyb21EYXRhVHJhbnNmZXIoZS5kYXRhVHJhbnNmZXIpO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBhdCA9IHNjcmVlblRvV29ybGQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IFByb21pc2UuYWxsKGZpbGVzLm1hcChmaWxlVG9JbXBvcnRlZEltYWdlKSk7XG4gICAgYWRkSW1hZ2VMYXllcnMoaW1hZ2VzLCBhdCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RlZExheWVycyA9IGRvYy5sYXllcnMuZmlsdGVyKChsKSA9PiBzZWxlY3Rpb24uaW5jbHVkZXMobC5pZCkgJiYgbC52aXNpYmxlKTtcbiAgY29uc3QgY3Vyc29yID0gcGFuTW9kZSA/IChwYW5uaW5nUmVmLmN1cnJlbnQgPyBcImdyYWJiaW5nXCIgOiBcImdyYWJcIikgOiBcImRlZmF1bHRcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPVwiY2FudmFzLWRvdHMgY2FudmFzLXN0YWdlXCJcbiAgICAgIHN0eWxlPXt7IGN1cnNvciB9fVxuICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgb25EcmFnT3Zlcj17KGU6IERyYWdFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgb25Ecm9wPXsoZTogRHJhZ0V2ZW50KSA9PiB2b2lkIG9uRHJvcChlKX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMFwiXG4gICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3ZpZXcucGFuWH1weCwgJHt2aWV3LnBhbll9cHgpIHNjYWxlKCR7dmlldy56b29tfSlgLCB0cmFuc2Zvcm1PcmlnaW46IFwiMCAwXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrZXIgYXJ0Ym9hcmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogZG9jLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBkb2MuaGVpZ2h0XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb2MubGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICAgIDxMYXllclZpZXcga2V5PXtsYXllci5pZH0gbGF5ZXI9e2xheWVyfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlbGVjdGVkTGF5ZXJzLm1hcCgobGF5ZXIpID0+IChcbiAgICAgICAgICA8U2VsZWN0aW9uQm94IGtleT17bGF5ZXIuaWR9IGxheWVyPXtsYXllcn0gem9vbT17dmlldy56b29tfSBzaW5nbGU9e3NlbGVjdGVkTGF5ZXJzLmxlbmd0aCA9PT0gMX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtkb2MubGF5ZXJzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW52YXMtZW1wdHlcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIERyb3AgaW1hZ2VzIGhlcmUsIG9yIHVzZSBBZGQgaW1hZ2UgaW4gdGhlIHRvcCBiYXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZzsgdGl0bGU/OiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gSWNvbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHRpdGxlIH06IEljb25Qcm9wcyAmIHsgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBhcmlhLWhpZGRlbj17dGl0bGUgPyB1bmRlZmluZWQgOiBcInRydWVcIn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgIHJvbGU9e3RpdGxlID8gXCJpbWdcIiA6IHVuZGVmaW5lZH1cbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjEuOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICA+XG4gICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuLy8gS2VwdCBhcyBsb2NhbCBjb21wb25lbnRzIGJlY2F1c2UgTGFrZWJlZCBjYXBzdWxlcyBvbmx5IGFsbG93IExha2ViZWQgYW5kXG4vLyByZWxhdGl2ZSBpbXBvcnRzLiBUaGUgQVBJIG1pcnJvcnMgdGhlIHNtYWxsIGljb24gY29tcG9uZW50cyBmcm9tIHJlYWN0LWljb25zLlxuZXhwb3J0IGNvbnN0IEZpQXJyb3dMZWZ0ID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xOSAxMkg1bTcgNy03LTcgNy03XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ2hldnJvbkRvd24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTYgOSA2IDYgNi02XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpQ29weSA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxyZWN0IHg9XCI5XCIgeT1cIjlcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTFcIiByeD1cIjFcIiAvPjxwYXRoIGQ9XCJNNSAxNUg0YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF2MVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaURvd25sb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAzdjEybS00LTQgNCA0IDQtNE00IDIwaDE2XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpRWRpdDMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDIwaDlcIiAvPjxwYXRoIGQ9XCJNMTYuNSAzLjVhMi4xIDIuMSAwIDAgMSAzIDNMOCAxOGwtNCAxIDEtNFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlFeWUgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIgMTJzMy41LTYgMTAtNiAxMCA2IDEwIDYtMy41IDYtMTAgNlMyIDEyIDIgMTJaXCIgLz48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUV5ZU9mZiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJtMyAzIDE4IDE4TTEwLjYgMTAuNmEyIDIgMCAwIDAgMi44IDIuOE05LjkgNS4yQTExIDExIDAgMCAxIDEyIDVjNi41IDAgMTAgNyAxMCA3YTE2IDE2IDAgMCAxLTIuMSAzLjFNNi42IDYuNkMzLjUgOC40IDIgMTIgMiAxMnMzLjUgNyAxMCA3YTEwIDEwIDAgMCAwIDQuMS0uOVwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaUhhbmQgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTggMTFWNmEyIDIgMCAwIDEgNCAwdjQtNmEyIDIgMCAwIDEgNCAwdjYtNGEyIDIgMCAwIDEgNCAwdjdhOCA4IDAgMCAxLTggOGgtMWE3IDcgMCAwIDEtNS43LTNMMi41IDE0YTIgMiAwIDAgMSAzLTIuNkw4IDE0XCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpSW1hZ2UgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cmVjdCB4PVwiM1wiIHk9XCIzXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgcng9XCIyXCIgLz48Y2lyY2xlIGN4PVwiOC41XCIgY3k9XCI4LjVcIiByPVwiMS41XCIgLz48cGF0aCBkPVwibTIxIDE1LTUtNUw1IDIxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpTGF5ZXJzID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xMiAyIDEwIDUtMTAgNUwyIDdsMTAtNVpcIiAvPjxwYXRoIGQ9XCJtMiAxMiAxMCA1IDEwLTVNMiAxN2wxMCA1IDEwLTVcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNaW51cyA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaU1vb24gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTIxIDEzQTkgOSAwIDEgMSAxMSAzYTcgNyAwIDAgMCAxMCAxMFpcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlNb3VzZVBvaW50ZXIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwibTQgMyA3IDE3IDIuMy02LjdMMjAgMTEgNCAzWlwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVBsdXMgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTEyIDV2MTRNNSAxMmgxNFwiIC8+PC9JY29uPjtcbmV4cG9ydCBjb25zdCBGaVJlZG8yID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIm0xNSA0IDUgNS01IDVcIiAvPjxwYXRoIGQ9XCJNMjAgOWgtOWE3IDcgMCAwIDAtNyA3djFcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlTdW4gPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjRcIiAvPjxwYXRoIGQ9XCJNMTIgMnYybTAgMTZ2Mk00LjkgNC45bDEuNCAxLjRtMTEuNCAxMS40IDEuNCAxLjRNMiAxMmgybTE2IDBoMk00LjkgMTkuMWwxLjQtMS40TTE3LjcgNi4zbDEuNC0xLjRcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlUcmFzaDIgPSAocHJvcHM6IEljb25Qcm9wcykgPT4gPEljb24gey4uLnByb3BzfT48cGF0aCBkPVwiTTMgNmgxOE04IDZWNGg4djJtMyAwLTEgMTVINkw1IDZtNSA0djdtNC03djdcIiAvPjwvSWNvbj47XG5leHBvcnQgY29uc3QgRmlVbmRvMiA9IChwcm9wczogSWNvblByb3BzKSA9PiA8SWNvbiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNOSA0IDQgOWw1IDVcIiAvPjxwYXRoIGQ9XCJNNCA5aDlhNyA3IDAgMCAxIDcgN3YxXCIgLz48L0ljb24+O1xuZXhwb3J0IGNvbnN0IEZpVXBsb2FkID0gKHByb3BzOiBJY29uUHJvcHMpID0+IDxJY29uIHsuLi5wcm9wc30+PHBhdGggZD1cIk0xMiAxNVYzbS00IDQgNC00IDQgNE00IDE0djZoMTZ2LTZcIiAvPjwvSWNvbj47XG4iLCAiLy8gTGF5ZXJzIHBhbmVsOiB0b3AtZmlyc3QgbGlzdCB3aXRoIHZpc2liaWxpdHkgdG9nZ2xlcywgaW5saW5lIHJlbmFtZSxcbi8vIGRyYWctdG8tcmVvcmRlciwgYW4gb3BhY2l0eSBzbGlkZXIsIGFuZCBkdXBsaWNhdGUvZGVsZXRlIGFjdGlvbnMuXG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBjbGVhbk5hbWUsIHR5cGUgTGF5ZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQge1xuICAgIGFwcGx5VHJhbnNpZW50LFxuICAgIGNvbW1pdFRyYW5zZm9ybXMsXG4gICAgZGVsZXRlU2VsZWN0aW9uLFxuICAgIGR1cGxpY2F0ZVNlbGVjdGlvbixcbiAgICByZW5hbWVMYXllcixcbiAgICByZW9yZGVyTGF5ZXIsXG4gICAgc2V0U2VsZWN0aW9uLFxuICAgIHRvZ2dsZVNlbGVjdGVkLFxuICAgIHRvZ2dsZVZpc2libGUsXG4gICAgdHlwZSBUcmFuc2Zvcm1DaGFuZ2UsXG59IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VBc3NldEVudHJ5IH0gZnJvbSBcIi4uL3N0YXRlL2Fzc2V0c1wiO1xuaW1wb3J0IHsgZ2V0U3RhdGUsIHVzZUVkaXRvciB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuaW1wb3J0IHsgRmlDb3B5LCBGaUV5ZSwgRmlFeWVPZmYsIEZpTGF5ZXJzLCBGaVRyYXNoMiB9IGZyb20gXCIuL0ljb25zXCI7XG5cbmZ1bmN0aW9uIExheWVyVGh1bWIoeyBsYXllciB9OiB7IGxheWVyOiBMYXllciB9KSB7XG4gICAgY29uc3QgYXNzZXQgPSB1c2VBc3NldEVudHJ5KGxheWVyLmFzc2V0SWQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrZXIgbGF5ZXItdGh1bWJcIj5cbiAgICAgICAgICAgIHthc3NldCA/IDxpbWcgYWx0PVwiXCIgc3JjPXthc3NldC5zcmN9IGRyYWdnYWJsZT17ZmFsc2V9IC8+IDogbnVsbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIExheWVyUm93Vmlldyh7XG4gICAgbGF5ZXIsXG4gICAgZGlzcGxheUluZGV4LFxuICAgIHNlbGVjdGVkLFxuICAgIG9uRHJhZ0Zyb20sXG4gICAgZHJvcE1hcmssXG59OiB7XG4gICAgbGF5ZXI6IExheWVyO1xuICAgIGRpc3BsYXlJbmRleDogbnVtYmVyO1xuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIG9uRHJhZ0Zyb206IChzbG90OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgZHJvcE1hcms6IFwiYWJvdmVcIiB8IFwiYmVsb3dcIiB8IG51bGw7XG59KSB7XG4gICAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gY29tbWl0UmVuYW1lKGV2ZW50OiBFdmVudCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgcmVuYW1lTGF5ZXIobGF5ZXIuaWQsIGNsZWFuTmFtZShpbnB1dC52YWx1ZSwgbGF5ZXIubmFtZSkpO1xuICAgICAgICBzZXRFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICAgIGRyYWdnYWJsZT17IWVkaXRpbmd9XG4gICAgICAgICAgICBkYXRhLWRpc3BsYXktaW5kZXg9e2Rpc3BsYXlJbmRleH1cbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXsoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIFN0cmluZyhkaXNwbGF5SW5kZXgpKTtcbiAgICAgICAgICAgICAgICBvbkRyYWdGcm9tKGRpc3BsYXlJbmRleCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkgdG9nZ2xlU2VsZWN0ZWQobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2V0U2VsZWN0aW9uKFtsYXllci5pZF0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGxheWVyLXJvdyAke3NlbGVjdGVkID8gXCJzZWxlY3RlZFwiIDogXCJcIn0gJHtsYXllci52aXNpYmxlID8gXCJcIiA6IFwiaGlkZGVuXCJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Ryb3BNYXJrID8gPHNwYW4gY2xhc3NOYW1lPXtgZHJvcC1tYXJrICR7ZHJvcE1hcmt9YH0gLz4gOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtsYXllci52aXNpYmxlID8gXCJIaWRlIGxheWVyXCIgOiBcIlNob3cgbGF5ZXJcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVWaXNpYmxlKGxheWVyLmlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpc2liaWxpdHlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYXllci52aXNpYmxlID8gPEZpRXllIC8+IDogPEZpRXllT2ZmIC8+fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGF5ZXJUaHVtYiBsYXllcj17bGF5ZXJ9IC8+XG4gICAgICAgICAgICB7ZWRpdGluZyA/IChcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtjb21taXRSZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBzZXRFZGl0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KCkgPT4gc2V0RWRpdGluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvbGk+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyc1BhbmVsKCkge1xuICAgIGNvbnN0IGRvYyA9IHVzZUVkaXRvcigocykgPT4gcy5kb2MpO1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHVzZUVkaXRvcigocykgPT4gcy5zZWxlY3Rpb24pO1xuICAgIGNvbnN0IFtkcm9wU2xvdCwgc2V0RHJvcFNsb3RdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgZHJhZ0Zyb21SZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgb3BhY2l0eUJlZm9yZVJlZiA9IHVzZVJlZjxUcmFuc2Zvcm1DaGFuZ2VbXSB8IG51bGw+KG51bGwpO1xuXG4gICAgaWYgKCFkb2MpIHJldHVybiBudWxsO1xuXG4gICAgLy8gRGlzcGxheSBvcmRlciBpcyB0b3AgbGF5ZXIgZmlyc3Q7IHRoZSBkb2Mgc3RvcmVzIGJvdHRvbS1maXJzdC5cbiAgICBjb25zdCBkaXNwbGF5ID0gWy4uLmRvYy5sYXllcnNdLnJldmVyc2UoKTtcbiAgICBjb25zdCBjb3VudCA9IGRvYy5sYXllcnMubGVuZ3RoO1xuICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzID0gZG9jLmxheWVycy5maWx0ZXIoKGwpID0+IHNlbGVjdGlvbi5pbmNsdWRlcyhsLmlkKSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9XG4gICAgICAgIHNlbGVjdGVkTGF5ZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gc2VsZWN0ZWRMYXllcnNbc2VsZWN0ZWRMYXllcnMubGVuZ3RoIC0gMV0ub3BhY2l0eVxuICAgICAgICAgICAgOiAxO1xuXG4gICAgZnVuY3Rpb24gc2xvdEZyb21FdmVudChlOiBEcmFnRXZlbnQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCByb3cgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoXCJbZGF0YS1kaXNwbGF5LWluZGV4XVwiKTtcbiAgICAgICAgaWYgKCFyb3cpIHJldHVybiBkcm9wU2xvdCA/PyAwO1xuICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlcihyb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1kaXNwbGF5LWluZGV4XCIpKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIGUuY2xpZW50WSA8IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyID8gaW5kZXggOiBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZyb20gPSBkcmFnRnJvbVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzbG90ID0gZHJvcFNsb3Q7XG4gICAgICAgIGRyYWdGcm9tUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICBzZXREcm9wU2xvdChudWxsKTtcbiAgICAgICAgaWYgKGZyb20gPT09IG51bGwgfHwgc2xvdCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBhZGp1c3RlZCA9IHNsb3QgPiBmcm9tID8gc2xvdCAtIDEgOiBzbG90O1xuICAgICAgICBpZiAoYWRqdXN0ZWQgPT09IGZyb20pIHJldHVybjtcbiAgICAgICAgLy8gQ29udmVydCBkaXNwbGF5IGNvb3JkaW5hdGVzICh0b3AtZmlyc3QpIHRvIGRvYyBjb29yZGluYXRlcyAoYm90dG9tLWZpcnN0KS5cbiAgICAgICAgcmVvcmRlckxheWVyKGNvdW50IC0gMSAtIGZyb20sIGNvdW50IC0gMSAtIGFkanVzdGVkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wYWNpdHlJbnB1dChldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICAgICAgTnVtYmVyKChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSAvIDEwMDtcbiAgICAgICAgY29uc3QgdGFyZ2V0cyA9IGdldFN0YXRlKCkuc2VsZWN0aW9uO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgaWYgKCFvcGFjaXR5QmVmb3JlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVycyA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgICAgICBvcGFjaXR5QmVmb3JlUmVmLmN1cnJlbnQgPSBsYXllcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChsKSA9PiB0YXJnZXRzLmluY2x1ZGVzKGwuaWQpKVxuICAgICAgICAgICAgICAgIC5tYXAoKGwpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBsLmlkLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IHsgb3BhY2l0eTogbC5vcGFjaXR5IH0sXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyOiB7IG9wYWNpdHk6IGwub3BhY2l0eSB9LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBhcHBseVRyYW5zaWVudChuZXcgTWFwKHRhcmdldHMubWFwKChpZCkgPT4gW2lkLCB7IG9wYWNpdHk6IHZhbHVlIH1dKSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uT3BhY2l0eUNvbW1pdCgpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IG9wYWNpdHlCZWZvcmVSZWYuY3VycmVudDtcbiAgICAgICAgb3BhY2l0eUJlZm9yZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKCFjaGFuZ2VzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxheWVycyA9IGdldFN0YXRlKCkuZG9jPy5sYXllcnMgPz8gW107XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzLmZpbmQoKGwpID0+IGwuaWQgPT09IGNoYW5nZS5pZCk7XG4gICAgICAgICAgICBpZiAobGF5ZXIpIGNoYW5nZS5hZnRlciA9IHsgb3BhY2l0eTogbGF5ZXIub3BhY2l0eSB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbW1pdFRyYW5zZm9ybXMoXCJPcGFjaXR5XCIsIGNoYW5nZXMpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsYXllcnMtcGFuZWxcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BvcGFjaXR5LWNvbnRyb2wgJHtzZWxlY3RlZExheWVycy5sZW5ndGggPT09IDAgPyBcImRpc2FibGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCItLXByb2dyZXNzXCI6IGAke01hdGgucm91bmQob3BhY2l0eSAqIDEwMCl9JWAgfSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcGFjaXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKG9wYWNpdHkgKiAxMDApfSVcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MTAwfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TWF0aC5yb3VuZChvcGFjaXR5ICogMTAwKX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkTGF5ZXJzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17b25PcGFjaXR5SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbk9wYWNpdHlDb21taXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJvcFNsb3Qoc2xvdEZyb21FdmVudChlKSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0RHJvcFNsb3QobnVsbCl9XG4gICAgICAgICAgICAgICAgb25Ecm9wPXtvbkRyb3B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXkubWFwKChsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExheWVyUm93Vmlld1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0aW9uLmluY2x1ZGVzKGxheWVyLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0Zyb209eyhzbG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ0Zyb21SZWYuY3VycmVudCA9IHNsb3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hcms9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BTbG90ID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWJvdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRyb3BTbG90ID09PSBpbmRleCArIDEgJiYgaW5kZXggPT09IGNvdW50IC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZWxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge2NvdW50ID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tbGF5ZXJzXCI+Tm8gbGF5ZXJzIHlldC48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkTGF5ZXJzLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZHVwbGljYXRlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkR1cGxpY2F0ZSAoXHUyMzE4RClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpQ29weSAvPlxuICAgICAgICAgICAgICAgICAgICBEdXBsaWNhdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWRMYXllcnMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIChcdTIzMkIpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGRhbmdlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlUcmFzaDIgLz5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufVxuIiwgIi8vIExlZnQgdG9vbCByYWlsOiBtb3ZlIC8gaGFuZCB0b29scy5cblxuaW1wb3J0IHsgc2V0U3RhdGUsIHVzZUVkaXRvciwgdHlwZSBUb29sIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyBGaUhhbmQsIEZpTW91c2VQb2ludGVyIH0gZnJvbSBcIi4vSWNvbnNcIjtcblxuY29uc3QgVE9PTFM6IEFycmF5PHsgaWQ6IFRvb2w7IGxhYmVsOiBzdHJpbmc7IGhpbnQ6IHN0cmluZzsgaWNvbjogdHlwZW9mIEZpSGFuZCB9PiA9IFtcbiAgeyBpZDogXCJtb3ZlXCIsIGxhYmVsOiBcIk1vdmVcIiwgaGludDogXCJWXCIsIGljb246IEZpTW91c2VQb2ludGVyIH0sXG4gIHsgaWQ6IFwiaGFuZFwiLCBsYWJlbDogXCJIYW5kXCIsIGhpbnQ6IFwiSFwiLCBpY29uOiBGaUhhbmQgfVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRvb2xiYXIoKSB7XG4gIGNvbnN0IHRvb2wgPSB1c2VFZGl0b3IoKHMpID0+IHMudG9vbCk7XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInRvb2wtcmFpbFwiPlxuICAgICAge1RPT0xTLm1hcCgodCkgPT4ge1xuICAgICAgICBjb25zdCBUb29sSWNvbiA9IHQuaWNvbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e3QuaWR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtgJHt0LmxhYmVsfSAoJHt0LmhpbnR9KWB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0LmxhYmVsfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoeyB0b29sOiB0LmlkIH0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9vbC1idXR0b24gJHt0b29sID09PSB0LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9vbEljb24gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IEZpTW9vbiwgRmlTdW4gfSBmcm9tIFwiLi9JY29uc1wiO1xuXG50eXBlIFRoZW1lID0gXCJsaWdodFwiIHwgXCJkYXJrXCI7XG5cbmZ1bmN0aW9uIHByZWZlcnJlZFRoZW1lKCk6IFRoZW1lIHtcbiAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImltYWdlLWVkaXRvci10aGVtZVwiKTtcbiAgaWYgKHNhdmVkID09PSBcImxpZ2h0XCIgfHwgc2F2ZWQgPT09IFwiZGFya1wiKSByZXR1cm4gc2F2ZWQ7XG4gIHJldHVybiBtYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZTxUaGVtZT4oKCkgPT4gcHJlZmVycmVkVGhlbWUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9IHRoZW1lO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2UtZWRpdG9yLXRoZW1lXCIsIHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgY29uc3QgbmV4dCA9IHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b24gdGhlbWUtdG9nZ2xlXCJcbiAgICAgIGFyaWEtbGFiZWw9e2BTd2l0Y2ggdG8gJHtuZXh0fSBtb2RlYH1cbiAgICAgIHRpdGxlPXtgU3dpdGNoIHRvICR7bmV4dH0gbW9kZWB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShuZXh0KX1cbiAgICA+XG4gICAgICB7dGhlbWUgPT09IFwiZGFya1wiID8gPEZpU3VuIC8+IDogPEZpTW9vbiAvPn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiIsICIvLyBFZGl0b3IgY2hyb21lOiBiYWNrIGxpbmssIHByb2plY3QgbmFtZSwgdW5kby9yZWRvLCB6b29tLCBleHBvcnQsIGFuZCB0aGVcbi8vIHBlcnNpc3RlbmNlIHN0YXR1cyBpbmRpY2F0b3IgZmVkIGJ5IHRoZSB3cml0ZS1iZWhpbmQgcXVldWUuXG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibGFrZWJlZC9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50Q2hpbGRyZW4gfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBjbGVhbk5hbWUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBkb3dubG9hZFBuZyB9IGZyb20gXCIuLi9saWIvcmVuZGVyXCI7XG5pbXBvcnQgeyBhZGRJbWFnZUxheWVycywgcmVuYW1lUHJvamVjdCB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjYW5SZWRvLCBjYW5VbmRvLCByZWRvLCB1bmRvIH0gZnJvbSBcIi4uL3N0YXRlL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFN0YXRlLCB1c2VFZGl0b3IgfSBmcm9tIFwiLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IHJlcXVlc3RGaXQsIHpvb21CeSB9IGZyb20gXCIuLi9zdGF0ZS92aWV3XCI7XG5pbXBvcnQgeyBmaWxlVG9JbXBvcnRlZEltYWdlIH0gZnJvbSBcIi4uL2xpYi9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgICBGaUFycm93TGVmdCxcbiAgICBGaURvd25sb2FkLFxuICAgIEZpSW1hZ2UsXG4gICAgRmlNaW51cyxcbiAgICBGaVBsdXMsXG4gICAgRmlSZWRvMixcbiAgICBGaVVuZG8yLFxufSBmcm9tIFwiLi9JY29uc1wiO1xuaW1wb3J0IHsgVGhlbWVUb2dnbGUgfSBmcm9tIFwiLi9UaGVtZVRvZ2dsZVwiO1xuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHtcbiAgICBsYWJlbCxcbiAgICBvbkNsaWNrLFxuICAgIGRpc2FibGVkLFxuICAgIGNoaWxkcmVuLFxufToge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUb3BCYXIoKSB7XG4gICAgY29uc3QgZG9jID0gdXNlRWRpdG9yKChzKSA9PiBzLmRvYyk7XG4gICAgY29uc3Qgem9vbSA9IHVzZUVkaXRvcigocykgPT4gcy52aWV3Lnpvb20pO1xuICAgIHVzZUVkaXRvcigocykgPT4gcy5oaXN0VmVyc2lvbik7XG4gICAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICAgIGlmICghZG9jKSByZXR1cm4gbnVsbDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRmlsZXMoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBmaWxlcyA9IFsuLi4oaW5wdXQuZmlsZXMgPz8gW10pXTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGF3YWl0IFByb21pc2UuYWxsKGZpbGVzLm1hcChmaWxlVG9JbXBvcnRlZEltYWdlKSk7XG4gICAgICAgIGFkZEltYWdlTGF5ZXJzKGltYWdlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tbWl0TmFtZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjbGVhbk5hbWUoaW5wdXQudmFsdWUsIFwiVW50aXRsZWRcIik7XG4gICAgICAgIGlucHV0LnZhbHVlID0gbmFtZTtcbiAgICAgICAgcmVuYW1lUHJvamVjdChuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInRvcGJhclwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIiB0aXRsZT1cIkJhY2sgdG8gcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICA8RmlBcnJvd0xlZnQgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZG9jLm5hbWV9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtjb21taXROYW1lfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcGJhci1uYW1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2Mtc2l6ZVwiPlxuICAgICAgICAgICAgICAgIHtkb2Mud2lkdGh9XHUwMEQ3e2RvYy5oZWlnaHR9XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlVuZG8gKFx1MjMxOFopXCIgb25DbGljaz17dW5kb30gZGlzYWJsZWQ9eyFjYW5VbmRvKCl9PlxuICAgICAgICAgICAgICAgIDxGaVVuZG8yIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlJlZG8gKFx1MjFFN1x1MjMxOFopXCIgb25DbGljaz17cmVkb30gZGlzYWJsZWQ9eyFjYW5SZWRvKCl9PlxuICAgICAgICAgICAgICAgIDxGaVJlZG8yIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6b29tLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJab29tIG91dCAoXHUyMzE4LSlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB6b29tQnkoLTEpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpTWludXMgLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVxdWVzdEZpdH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGaXQgdG8gc2NyZWVuIChcdTIzMTgwKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInpvb20tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHpvb20gKiAxMDApfSVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBsYWJlbD1cIlpvb20gaW4gKFx1MjMxOCspXCIgb25DbGljaz17KCkgPT4gem9vbUJ5KDEpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2ZpbGVSZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB2b2lkIG9uRmlsZXMoZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaUltYWdlIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWxhYmVsXCI+QWRkIGltYWdlPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCBkb3dubG9hZFBuZyhnZXRTdGF0ZSgpLmRvYyA/PyBkb2MpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBwcmltYXJ5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlEb3dubG9hZCAvPlxuICAgICAgICAgICAgICAgIEV4cG9ydFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XG4gICAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn1cbiIsICIvLyBUaGUgZWRpdG9yIHNjcmVlbjogbG9hZHMgdGhlIHByb2plY3QgZG9jIGZyb20gdGhlIGxpdmUgcXVlcmllcyBleGFjdGx5IG9uY2Vcbi8vIHBlciBwcm9qZWN0IGlkIChhZnRlciB0aGF0IHRoZSBsb2NhbCBkb2MgaXMgYXV0aG9yaXRhdGl2ZSBhbmQgcXVlcnkgcHVzaGVzXG4vLyBhcmUgaWdub3JlZCBcdTIwMTQgdGhleSBhcmUganVzdCBvdXIgb3duIHdyaXRlcyBlY2hvaW5nIGJhY2spLCBhbmQgb3ducyBnbG9iYWxcbi8vIGtleWJvYXJkIHNob3J0Y3V0cy5cblxuaW1wb3J0IHsgTGluaywgdXNlUXVlcnksIHVzZVBhcmFtcyB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHR5cGUgeyBMYXllclJvdywgUHJvamVjdE1ldGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjbG9zZVByb2plY3QsXG4gIGRlbGV0ZVNlbGVjdGlvbixcbiAgZHVwbGljYXRlU2VsZWN0aW9uLFxuICBudWRnZVNlbGVjdGlvbixcbiAgb3BlblByb2plY3QsXG4gIHNldFNlbGVjdGlvblxufSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9uc1wiO1xuaW1wb3J0IHsgcXVlcnlSZXN1bHQgfSBmcm9tIFwiLi4vc3RhdGUvYXBpXCI7XG5pbXBvcnQgeyByZWRvLCB1bmRvIH0gZnJvbSBcIi4uL3N0YXRlL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgdXNlRWRpdG9yIH0gZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XG5pbXBvcnQgeyByZXF1ZXN0Rml0LCB6b29tQnkgfSBmcm9tIFwiLi4vc3RhdGUvdmlld1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhZ2UgfSBmcm9tIFwiLi9DYW52YXNTdGFnZVwiO1xuaW1wb3J0IHsgTGF5ZXJzUGFuZWwgfSBmcm9tIFwiLi9MYXllcnNQYW5lbFwiO1xuaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gXCIuL1Rvb2xiYXJcIjtcbmltcG9ydCB7IFRvcEJhciB9IGZyb20gXCIuL1RvcEJhclwiO1xuXG50eXBlIExheWVyUm93V2l0aFByb2plY3QgPSBMYXllclJvdyAmIHsgcHJvamVjdElkOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gaXNUeXBpbmdUYXJnZXQodGFyZ2V0OiBFdmVudFRhcmdldCB8IG51bGwpOiBib29sZWFuIHtcbiAgY29uc3QgZWwgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbC50YWdOYW1lID09PSBcIklOUFVUXCIgfHwgZWwudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiIHx8IGVsLmlzQ29udGVudEVkaXRhYmxlO1xufVxuXG5mdW5jdGlvbiB1c2VFZGl0b3JTaG9ydGN1dHMoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChpc1R5cGluZ1RhcmdldChlLnRhcmdldCkpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vZCA9IGUubWV0YUtleSB8fCBlLmN0cmxLZXk7XG5cbiAgICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICBpZiAoIWdldFN0YXRlKCkuc3BhY2VQYW4pIHNldFN0YXRlKHsgc3BhY2VQYW46IHRydWUgfSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1vZCAmJiBlLmtleS50b0xvd2VyQ2FzZSgpID09PSBcInpcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSByZWRvKCk7XG4gICAgICAgIGVsc2UgdW5kbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwieVwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVkbygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiZFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZHVwbGljYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgKGUua2V5ID09PSBcIj1cIiB8fCBlLmtleSA9PT0gXCIrXCIpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgem9vbUJ5KDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobW9kICYmIGUua2V5ID09PSBcIi1cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHpvb21CeSgtMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2QgJiYgZS5rZXkgPT09IFwiMFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVxdWVzdEZpdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkZWxldGVTZWxlY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHNldFNlbGVjdGlvbihbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJ2XCIgfHwgZS5rZXkgPT09IFwiVlwiKSB7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJtb3ZlXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJoXCIgfHwgZS5rZXkgPT09IFwiSFwiKSB7XG4gICAgICAgIHNldFN0YXRlKHsgdG9vbDogXCJoYW5kXCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0ZXAgPSBlLnNoaWZ0S2V5ID8gMTAgOiAxO1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oLXN0ZXAsIDApO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBudWRnZVNlbGVjdGlvbihzdGVwLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbnVkZ2VTZWxlY3Rpb24oMCwgLXN0ZXApO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG51ZGdlU2VsZWN0aW9uKDAsIHN0ZXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKSBzZXRTdGF0ZSh7IHNwYWNlUGFuOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0U3RhdGUoeyBzcGFjZVBhbjogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvbktleVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb25CbHVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG9uS2V5VXApO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG9uQmx1cik7XG4gICAgfTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRWRpdG9yKCkge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXM8eyBpZD86IHN0cmluZyB9PigpO1xuICBjb25zdCBpZCA9IHBhcmFtcy5pZCA/PyBcIlwiO1xuICBjb25zdCBwcm9qZWN0cyA9IHF1ZXJ5UmVzdWx0PFByb2plY3RNZXRhPih1c2VRdWVyeShcInByb2plY3RzXCIpKTtcbiAgY29uc3QgbGF5ZXJSb3dzID0gcXVlcnlSZXN1bHQ8TGF5ZXJSb3dXaXRoUHJvamVjdD4odXNlUXVlcnkoXCJsYXllcnNcIikpO1xuICBjb25zdCBkb2MgPSB1c2VFZGl0b3IoKHMpID0+IHMuZG9jKTtcbiAgY29uc3QgW3RpbWVkT3V0LCBzZXRUaW1lZE91dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9wZW5lZFJlZiA9IHVzZVJlZjxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJvamVjdHMucmVhZHkgfHwgIWxheWVyUm93cy5yZWFkeSB8fCBvcGVuZWRSZWYuY3VycmVudCA9PT0gaWQpIHJldHVybjtcbiAgICBjb25zdCBtZXRhID0gcHJvamVjdHMuaXRlbXMuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xuICAgIGlmICghbWV0YSkgcmV0dXJuO1xuICAgIG9wZW5lZFJlZi5jdXJyZW50ID0gaWQ7XG4gICAgb3BlblByb2plY3QobWV0YSwgbGF5ZXJSb3dzLml0ZW1zLmZpbHRlcigocm93KSA9PiByb3cucHJvamVjdElkID09PSBpZCkpO1xuICB9LCBbcHJvamVjdHMsIGxheWVyUm93cywgaWRdKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgb3BlbmVkUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgY2xvc2VQcm9qZWN0KCk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIEEgZnJlc2hseSBjcmVhdGVkIHByb2plY3QgY2FuIGxhZyBpdHMgcXVlcnkgcHVzaCBieSBhIGJlYXQ7IG9ubHkgcmVwb3J0XG4gIC8vIFwibm90IGZvdW5kXCIgaWYgaXQgc3RheXMgbWlzc2luZy5cbiAgY29uc3QgbG9hZGVkID0gZG9jPy5pZCA9PT0gaWQ7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvYWRlZCkgcmV0dXJuO1xuICAgIHNldFRpbWVkT3V0KGZhbHNlKTtcbiAgICBjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFRpbWVkT3V0KHRydWUpLCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW2xvYWRlZCwgaWRdKTtcblxuICB1c2VFZGl0b3JTaG9ydGN1dHMoKTtcblxuICBpZiAoIWxvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctcGFnZVwiPlxuICAgICAgICB7dGltZWRPdXQgJiYgcHJvamVjdHMucmVhZHkgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlByb2plY3Qgbm90IGZvdW5kPC9wPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgIEJhY2sgdG8gcHJvamVjdHNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5Mb2FkaW5nIHByb2plY3RcdTIwMjY8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1zaGVsbFwiPlxuICAgICAgPFRvcEJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbWFpblwiPlxuICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICA8Q2FudmFzU3RhZ2UgLz5cbiAgICAgICAgPExheWVyc1BhbmVsIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICIvLyBQcm9qZWN0IGdhbGxlcnk6IG9wZW4gcHJldmlvdXMgcHJvamVjdHMsIGNyZWF0ZSBhIGJsYW5rIG9uZSAoZGVmYXVsdFxuLy8gZGltZW5zaW9ucyksIG9yIGRyb3AvcGljayBhbiBpbWFnZSB0byBzdGFydCBhIHByb2plY3QgYXQgdGhhdCBpbWFnZSdzIHNpemUuXG5cbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VRdWVyeSB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgREVGQVVMVF9QUk9KRUNUX0hFSUdIVCxcbiAgICBERUZBVUxUX1BST0pFQ1RfV0lEVEgsXG4gICAgY2xlYW5OYW1lLFxuICAgIGVuY29kZVRyYW5zZm9ybSxcbiAgICB0eXBlIFByb2plY3RNZXRhLFxuICAgIHR5cGUgUHJvamVjdFRodW1iLFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL3R5cGVzXCI7XG5pbXBvcnQgeyBmaWxlVG9JbXBvcnRlZEltYWdlLCBpbWFnZUZpbGVzRnJvbURhdGFUcmFuc2ZlciB9IGZyb20gXCIuLi9saWIvaW1hZ2VcIjtcbmltcG9ydCB7IGFwaSwgcXVlcnlSZXN1bHQgfSBmcm9tIFwiLi4vc3RhdGUvYXBpXCI7XG5pbXBvcnQgeyBzZWVkQXNzZXQgfSBmcm9tIFwiLi4vc3RhdGUvYXNzZXRzXCI7XG5pbXBvcnQgeyBGaUVkaXQzLCBGaUltYWdlLCBGaVBsdXMsIEZpVHJhc2gyLCBGaVVwbG9hZCB9IGZyb20gXCIuL0ljb25zXCI7XG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCIuL1RoZW1lVG9nZ2xlXCI7XG5cbmNvbnN0IFNJWkVfUFJFU0VUUyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2FudmFzXCIsXG4gICAgICAgIHdpZHRoOiBERUZBVUxUX1BST0pFQ1RfV0lEVEgsXG4gICAgICAgIGhlaWdodDogREVGQVVMVF9QUk9KRUNUX0hFSUdIVCxcbiAgICB9LFxuICAgIHsgbmFtZTogXCJTcXVhcmVcIiwgd2lkdGg6IDEyMDAsIGhlaWdodDogMTIwMCB9LFxuICAgIHsgbmFtZTogXCJQb3J0cmFpdFwiLCB3aWR0aDogMTA4MCwgaGVpZ2h0OiAxMzUwIH0sXG4gICAgeyBuYW1lOiBcIkxhbmRzY2FwZVwiLCB3aWR0aDogMTkyMCwgaGVpZ2h0OiAxMDgwIH0sXG5dIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiB0aW1lQWdvKGlzbzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZShpc28pLmdldFRpbWUoKTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShtcykgfHwgbXMgPCAwKSByZXR1cm4gXCJqdXN0IG5vd1wiO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1zIC8gNjBfMDAwKTtcbiAgICBpZiAobWludXRlcyA8IDEpIHJldHVybiBcImp1c3Qgbm93XCI7XG4gICAgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIGAke21pbnV0ZXN9bSBhZ29gO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuICAgIGlmIChob3VycyA8IDI0KSByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGhvdXJzIC8gMjQpO1xuICAgIGlmIChkYXlzIDwgMzApIHJldHVybiBgJHtkYXlzfWQgYWdvYDtcbiAgICByZXR1cm4gbmV3IERhdGUoaXNvKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdENhcmQoe1xuICAgIHByb2plY3QsXG4gICAgdGh1bWIsXG4gICAgb25PcGVuLFxuICAgIG9uUmVuYW1lLFxuICAgIG9uRGVsZXRlLFxufToge1xuICAgIHByb2plY3Q6IFByb2plY3RNZXRhO1xuICAgIHRodW1iOiBzdHJpbmc7XG4gICAgb25PcGVuOiAoKSA9PiB2b2lkO1xuICAgIG9uUmVuYW1lOiAoKSA9PiB2b2lkO1xuICAgIG9uRGVsZXRlOiAoKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2VyIHByb2plY3QtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YE9wZW4gJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXt0aHVtYn0gZHJhZ2dhYmxlPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RmlJbWFnZSBjbGFzc05hbWU9XCJwcm9qZWN0LWVtcHR5LWljb25cIiAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uT3Blbn0gY2xhc3NOYW1lPVwicHJvamVjdC1tYWluXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1uYW1lXCI+e3Byb2plY3QubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LndpZHRofVx1MDBEN3twcm9qZWN0LmhlaWdodH0gXHUwMEI3e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5sYXllck9yZGVyLmxlbmd0aH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxheWVyT3JkZXIubGVuZ3RoID09PSAxID8gXCJsYXllclwiIDogXCJsYXllcnNcIn0gXHUwMEI3e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICB7dGltZUFnbyhwcm9qZWN0LnVwZGF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVuYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFJlbmFtZSAke3Byb2plY3QubmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdDMgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BEZWxldGUgJHtwcm9qZWN0Lm5hbWV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGaVRyYXNoMiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHF1ZXJ5UmVzdWx0PFByb2plY3RNZXRhPih1c2VRdWVyeShcInByb2plY3RzXCIpKTtcbiAgICBjb25zdCB0aHVtYnMgPSBxdWVyeVJlc3VsdDxQcm9qZWN0VGh1bWI+KHVzZVF1ZXJ5KFwicHJvamVjdFRodW1ic1wiKSk7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW2J1c3ksIHNldEJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgd2lkdGg6IERFRkFVTFRfUFJPSkVDVF9XSURUSCxcbiAgICAgICAgaGVpZ2h0OiBERUZBVUxUX1BST0pFQ1RfSEVJR0hULFxuICAgIH0pO1xuICAgIGNvbnN0IGRyYWdEZXB0aFJlZiA9IHVzZVJlZigwKTtcblxuICAgIGNvbnN0IHRodW1iQnlJZCA9IG5ldyBNYXAodGh1bWJzLml0ZW1zLm1hcCgodCkgPT4gW3QuaWQsIHQudGh1bWJdKSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVCbGFuaygpIHtcbiAgICAgICAgaWYgKGJ1c3kpIHJldHVybjtcbiAgICAgICAgc2V0QnVzeSh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgVW50aXRsZWQgJHtwcm9qZWN0cy5pdGVtcy5sZW5ndGggKyAxfWA7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBhd2FpdCBhcGkuY3JlYXRlUHJvamVjdChcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgc2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmF2aWdhdGUoYC9wLyR7aWR9YCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRCdXN5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUZyb21GaWxlKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgaWYgKGJ1c3kpIHJldHVybjtcbiAgICAgICAgc2V0QnVzeSh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgZmlsZVRvSW1wb3J0ZWRJbWFnZShmaWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGVuY29kZVRyYW5zZm9ybSh7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHc6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICAgIGg6IGltYWdlLmhlaWdodCxcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0RnJvbUltYWdlKFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGltYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZWVkQXNzZXQocmVzdWx0LmFzc2V0SWQsIHtcbiAgICAgICAgICAgICAgICBzcmM6IHJlc3VsdC5zcmMgfHwgaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgIHBhaW50U3JjOiBpbWFnZS5zcmMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBIb21lIG5ldmVyIG9wZW5zIHRoZSBlZGl0b3IgbG9uZyBlbm91Z2ggZm9yIHRoZSBkZWxheWVkIHRodW1iXG4gICAgICAgICAgICAvLyBwYXNzIFx1MjAxNCB3cml0ZSBvbmUgbm93IGZyb20gdGhlIGxvY2FsIGRhdGEgVVJMLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIDM2MCAvIE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaW1hZ2Uud2lkdGggKiBzY2FsZSkpO1xuICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLmhlaWdodCAqIHNjYWxlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwidGh1bWIgZGVjb2RlIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFwaS5zZXRQcm9qZWN0VGh1bWIocmVzdWx0LmlkLCBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiLCAwLjg1KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAodGh1bWJFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCB3cml0ZSBwcm9qZWN0IHRodW1iOlwiLCB0aHVtYkVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnNyYykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhcGkuc2V0UHJvamVjdFRodW1iKHJlc3VsdC5pZCwgcmVzdWx0LnNyYykuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0ZShgL3AvJHtyZXN1bHQuaWR9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBwcm9qZWN0IGZyb20gaW1hZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Ecm9wKGU6IERyYWdFdmVudCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRyYWdEZXB0aFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGltYWdlRmlsZXNGcm9tRGF0YVRyYW5zZmVyKGUuZGF0YVRyYW5zZmVyKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHZvaWQgY3JlYXRlRnJvbUZpbGUoZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKHByb2plY3Q6IFByb2plY3RNZXRhKSB7XG4gICAgICAgIGlmIChjb25maXJtKGBEZWxldGUgXCIke3Byb2plY3QubmFtZX1cIj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lLmApKSB7XG4gICAgICAgICAgICB2b2lkIGFwaS5kZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW5hbWUocHJvamVjdDogUHJvamVjdE1ldGEpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZVwiLCBwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBpZiAobmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdm9pZCBhcGkucmVuYW1lUHJvamVjdChwcm9qZWN0LmlkLCBjbGVhbk5hbWUobmFtZSwgcHJvamVjdC5uYW1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZVwiXG4gICAgICAgICAgICBvbkRyYWdFbnRlcj17KGU6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkcmFnRGVwdGhSZWYuY3VycmVudCArPSAxO1xuICAgICAgICAgICAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhZ0RlcHRoUmVmLmN1cnJlbnQgPSBNYXRoLm1heCgwLCBkcmFnRGVwdGhSZWYuY3VycmVudCAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkcmFnRGVwdGhSZWYuY3VycmVudCA9PT0gMCkgc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlOiBEcmFnRXZlbnQpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgIG9uRHJvcD17b25Ecm9wfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJicmFuZFwiPmltYWdlIGVkaXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtcGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuZXctcHJvamVjdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtTSVpFX1BSRVNFVFMubWFwKChwcmVzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldC53aWR0aCA9PT0gc2l6ZS53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQuaGVpZ2h0ID09PSBzaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ByZXNldC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwcmVzZXQgJHtzZWxlY3RlZCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpemUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcHJlc2V0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHByZXNldC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJlc2V0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmVzZXQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmVzZXQud2lkdGh9IFx1MDBENyB7cHJlc2V0LmhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgY3JlYXRlQmxhbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpUGx1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkgdm9pZCBjcmVhdGVGcm9tRmlsZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YnVzeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlUmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmlVcGxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLnJlYWR5ID8gYCgke3Byb2plY3RzLml0ZW1zLmxlbmd0aH0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIHshcHJvamVjdHMucmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktc3RhdGVcIj5Mb2FkaW5nIHByb2plY3RzXHUyMDI2PC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IHByb2plY3RzLml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1zdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcHJvamVjdHMgeWV0LiBDaG9vc2UgYSBzaXplIGFib3ZlIG9yIGRyb3AgYW4gaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMuaXRlbXMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI9e3RodW1iQnlJZC5nZXQocHJvamVjdC5pZCkgPz8gXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoKSA9PiBuYXZpZ2F0ZShgL3AvJHtwcm9qZWN0LmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbmFtZT17KCkgPT4gb25SZW5hbWUocHJvamVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShwcm9qZWN0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RyYWdnaW5nID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcC1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRyb3AgdG8gY3JlYXRlIGEgcHJvamVjdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2J1c3kgPyA8ZGl2IGNsYXNzTmFtZT1cImJ1c3ktdG9hc3RcIj5DcmVhdGluZyBwcm9qZWN0XHUyMDI2PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgUm91dGUsIFJvdXRlciwgUm91dGVzIH0gZnJvbSBcImxha2ViZWQvY2xpZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL0VkaXRvclwiO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xuXG5jb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbWFnZS1lZGl0b3ItdGhlbWVcIik7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9XG4gICAgc2F2ZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8IHNhdmVkVGhlbWUgPT09IFwiZGFya1wiXG4gICAgICAgID8gc2F2ZWRUaGVtZVxuICAgICAgICA6IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICAgICAgICA/IFwiZGFya1wiXG4gICAgICAgICAgOiBcImxpZ2h0XCI7XG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAtLWJnOiAjZmZmOyAtLXN1cmZhY2U6ICNmZmY7IC0tc3VyZmFjZS1zdWJ0bGU6ICNmYWZhZmE7IC0tY2FudmFzOiAjZjRmNGY0O1xuICAtLWJvcmRlcjogI2U0ZTRlNDsgLS1ib3JkZXItc3Ryb25nOiAjMTExOyAtLXRleHQ6ICMwYTBhMGE7XG4gIC0tbXV0ZWQ6ICM3MzczNzM7IC0tZmFpbnQ6ICNhM2EzYTM7IC0tYWNjZW50OiAjMjU2M2ViOyAtLWFjY2VudC1ob3ZlcjogIzFkNGVkODtcbiAgLS1hY2NlbnQtc29mdDogI2VmZjZmZjsgLS1kYW5nZXI6ICNkYzI2MjY7IC0tY2hlY2tlci1hOiAjZWNlY2VjOyAtLWNoZWNrZXItYjogI2Q4ZDhkODtcbiAgLS1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwwLDAsLjE0KTtcbiAgLS1zYW5zOiBcIkludGVyXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC0tbW9ubzogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbn1cbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAtLWJnOiAjMTYxNjE2OyAtLXN1cmZhY2U6ICMxYzFjMWM7IC0tc3VyZmFjZS1zdWJ0bGU6ICMxOTE5MTk7IC0tY2FudmFzOiAjMTIxMjEyO1xuICAtLWJvcmRlcjogIzMzMzsgLS1ib3JkZXItc3Ryb25nOiAjZmFmYWZhOyAtLXRleHQ6ICNmMGYwZjA7XG4gIC0tbXV0ZWQ6ICNhOGE4YTg7IC0tZmFpbnQ6ICM2ODY4Njg7IC0tYWNjZW50OiAjM2I4MmY2OyAtLWFjY2VudC1ob3ZlcjogIzI1NjNlYjtcbiAgLS1hY2NlbnQtc29mdDogIzE3MjU1NDsgLS1kYW5nZXI6ICNlZjQ0NDQ7IC0tY2hlY2tlci1hOiAjMzIzMjMyOyAtLWNoZWNrZXItYjogIzI4MjgyODtcbiAgLS1zaGFkb3c6IDAgMThweCA1NnB4IHJnYmEoMCwwLDAsLjU4KTtcbn1cbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5odG1sLCBib2R5IHsgbWFyZ2luOiAwOyBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS10ZXh0KTsgfVxuYm9keSB7IGZvbnQ6IDE0cHgvMS41IHZhcigtLXNhbnMpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuYnV0dG9uLCBpbnB1dCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgfVxuYnV0dG9uOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9XG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IGNvbG9yOiAjZmZmOyB9XG4uY2hlY2tlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoZWNrZXItYSk7IGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZyx2YXIoLS1jaGVja2VyLWIpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNzUlLHZhcigtLWNoZWNrZXItYikgNzUlKSxsaW5lYXItZ3JhZGllbnQoNDVkZWcsdmFyKC0tY2hlY2tlci1iKSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDc1JSx2YXIoLS1jaGVja2VyLWIpIDc1JSk7IGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsOHB4IDhweDsgfVxuLmNhbnZhcy1kb3RzIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FudmFzKTsgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNvbG9yLW1peChpbiBzcmdiLHZhcigtLW11dGVkKSAyNCUsdHJhbnNwYXJlbnQpIDFweCx0cmFuc3BhcmVudCAxcHgpOyBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDsgfVxuLmljb24tYnV0dG9uIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgcGFkZGluZzogMDsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLW11dGVkKTsgfVxuLmljb24tYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5pY29uLWJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IC4zOyB9XG4uaWNvbi1idXR0b24gc3ZnIHsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgfVxuLmJ1dHRvbiB7IG1pbi1oZWlnaHQ6IDM0cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA3cHg7IHBhZGRpbmc6IDdweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTIuNXB4OyBmb250LXdlaWdodDogNTUwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4uYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItc3Ryb25nKTsgfVxuLmJ1dHRvbi5wcmltYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfVxuLmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWhvdmVyKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtaG92ZXIpOyB9XG4uYnV0dG9uLmRhbmdlciB7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4uYnV0dG9uIHN2ZyB7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7IH1cblxuLyogSG9tZSAqL1xuLmhvbWUgeyBtaW4taGVpZ2h0OiAxMDB2aDsgcGFkZGluZzogNDZweCAyNHB4IDkwcHg7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgfVxuLmhvbWUtaW5uZXIgeyB3aWR0aDogbWluKDEwMCUsIDc4MHB4KTsgbWFyZ2luOiAwIGF1dG87IH1cbi5icmFuZC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IH1cbi5icmFuZCB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAyMXB4OyBsaW5lLWhlaWdodDogMTsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC0uMDM1ZW07IH1cbi5icmFuZC1tYXJrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogOXB4OyBoZWlnaHQ6IDE3cHg7IG1hcmdpbi1sZWZ0OiA0cHg7IHZlcnRpY2FsLWFsaWduOiAtMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4uYnJhbmQtcm93IC50aGVtZS10b2dnbGUgeyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuLmhvbWUtbWV0YSB7IG1hcmdpbjogMTJweCAwIDM4cHg7IHBhZGRpbmctdG9wOiA5cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA4ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5pbnRybyB7IG1hcmdpbjogMCAwIDI0cHg7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZTogMTNweDsgfVxuLmNyZWF0ZS1wYW5lbCB7IG1hcmdpbi1ib3R0b206IDM4cHg7IH1cbi5leWVicm93IHsgbWFyZ2luOiAwIDAgMTBweDsgY29sb3I6IHZhcigtLWZhaW50KTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyBsZXR0ZXItc3BhY2luZzogLjA5ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbi5wcmVzZXRzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCxtaW5tYXgoMCwxZnIpKTsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbi5wcmVzZXQgeyBtaW4td2lkdGg6IDA7IHBhZGRpbmc6IDExcHg7IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cbi5wcmVzZXQ6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1zdHJvbmcpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5wcmVzZXQuc2VsZWN0ZWQgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgY29sb3I6IHZhcigtLXRleHQpOyB9XG4ucHJlc2V0LW5hbWUgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogM3B4OyBjb2xvcjogaW5oZXJpdDsgZm9udC1zaXplOiAxMi41cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5wcmVzZXQtc2l6ZSB7IGRpc3BsYXk6IGJsb2NrOyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5jcmVhdGUtYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyB9XG4uY3JlYXRlLWFjdGlvbnMgLmJ1dHRvbjpmaXJzdC1vZi10eXBlIHsgZmxleDogMTsgfVxuLnNlY3Rpb24tbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IG1hcmdpbjogMCAwIDEycHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wOWVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4uc2VjdGlvbi1sYWJlbDo6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyBmbGV4OiAxOyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfVxuLnByb2plY3QtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTBweDsgfVxuLnByb2plY3QtY2FyZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTE2cHggbWlubWF4KDAsMWZyKSBhdXRvOyBtaW4taGVpZ2h0OiA4MnB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpOyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjEyczsgfVxuLnByb2plY3QtY2FyZDpob3ZlciB7IGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsdmFyKC0tbXV0ZWQpIDY1JSx2YXIoLS1ib3JkZXIpKTsgfVxuLnByb2plY3QtcHJldmlldyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiA3cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hlY2tlci1hKTsgfVxuLnByb2plY3QtcHJldmlldyBpbWcgeyBkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiA2NnB4OyBvYmplY3QtZml0OiBjb250YWluOyB9XG4ucHJvamVjdC1lbXB0eS1pY29uIHsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY29sb3I6IHZhcigtLWZhaW50KTsgfVxuLnByb2plY3QtbWFpbiB7IG1pbi13aWR0aDogMDsgcGFkZGluZzogMTZweDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IHZhcigtLXRleHQpOyB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4ucHJvamVjdC1uYW1lIHsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjUwOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLnByb2plY3QtaW5mbyB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiA3cHg7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDEwLjVweCB2YXIoLS1tb25vKTsgbGV0dGVyLXNwYWNpbmc6IC4wMmVtOyB9XG4ucHJvamVjdC1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxcHg7IHBhZGRpbmc6IDAgMTBweDsgb3BhY2l0eTogMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTJzOyB9XG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWFjdGlvbnMsIC5wcm9qZWN0LWFjdGlvbnM6Zm9jdXMtd2l0aGluIHsgb3BhY2l0eTogMTsgfVxuLmVtcHR5LXN0YXRlIHsgcGFkZGluZzogNjBweCAyMHB4OyBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tYm9yZGVyKTsgY29sb3I6IHZhcigtLWZhaW50KTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250OiAxMnB4IHZhcigtLW1vbm8pOyB9XG4uZHJvcC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgei1pbmRleDogMjA7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLHZhcigtLWJnKSA4NCUsdHJhbnNwYXJlbnQpOyB9XG4uZHJvcC1vdmVybGF5IHAgeyBwYWRkaW5nOiAzMHB4IDQ4cHg7IGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1hY2NlbnQpOyBjb2xvcjogdmFyKC0tYWNjZW50KTsgZm9udDogMTJweCB2YXIoLS1tb25vKTsgfVxuLmJ1c3ktdG9hc3QgeyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMjRweDsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IHBhZGRpbmc6IDlweCAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTFweCB2YXIoLS1tb25vKTsgfVxuXG4vKiBFZGl0b3IgKi9cbi5lZGl0b3Itc2hlbGwgeyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDEwMHZoOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBvdmVyZmxvdzogaGlkZGVuOyBiYWNrZ3JvdW5kOiB2YXIoLS1jYW52YXMpOyBjb2xvcjogdmFyKC0tdGV4dCk7IHVzZXItc2VsZWN0OiBub25lOyB9XG4uZWRpdG9yLW1haW4geyBkaXNwbGF5OiBmbGV4OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IG1pbi1oZWlnaHQ6IDA7IH1cbi50b3BiYXIgeyBoZWlnaHQ6IDQ2cHg7IGZsZXgtc2hyaW5rOiAwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDVweDsgcGFkZGluZzogMCAxMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi50b3BiYXItbmFtZSB7IHdpZHRoOiAxNjhweDsgcGFkZGluZzogNXB4IDdweDsgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yYWRpdXM6IDJweDsgb3V0bGluZTogbm9uZTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS10ZXh0KTsgZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogNjAwOyB9XG4udG9wYmFyLW5hbWU6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcik7IH0udG9wYmFyLW5hbWU6Zm9jdXMgeyBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7IH1cbi5kb2Mtc2l6ZSwgLnpvb20tYnV0dG9uLCAuc2F2ZS1zdGF0dXMgeyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IH1cbi5kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxOHB4OyBtYXJnaW46IDAgNnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXIpOyB9XG4uc3BhY2VyIHsgZmxleDogMTsgfVxuLnpvb20tY29udHJvbHMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9Lnpvb20tYnV0dG9uIHsgd2lkdGg6IDUycHg7IHBhZGRpbmc6IDVweCAycHg7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH0uem9vbS1idXR0b246aG92ZXIgeyBjb2xvcjogdmFyKC0tdGV4dCk7IH1cbi5zYXZlLXN0YXR1cyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9LnNhdmUtZG90IHsgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgfS5zYXZlZCB7IGJhY2tncm91bmQ6ICMyMmM1NWU7IH0uc2F2aW5nIHsgYmFja2dyb3VuZDogI2Y1OWUwYjsgfS5lcnJvciB7IGJhY2tncm91bmQ6IHZhcigtLWRhbmdlcik7IH1cbi50b29sLXJhaWwgeyB3aWR0aDogNDRweDsgZmxleC1zaHJpbms6IDA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyBwYWRkaW5nOiA3cHggMDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7IH1cbi50b29sLWJ1dHRvbiB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItcmFkaXVzOiAycHg7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyB9LnRvb2wtYnV0dG9uOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tdGV4dCk7IH0udG9vbC1idXR0b24uYWN0aXZlIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyBjb2xvcjogI2ZmZjsgfS50b29sLWJ1dHRvbiBzdmcgeyB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4OyB9XG4ubGF5ZXJzLXBhbmVsIHsgd2lkdGg6IDI0NHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgfVxuLnBhbmVsLWhlYWQgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDdweDsgaGVpZ2h0OiA0MnB4OyBwYWRkaW5nOiAwIDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250OiAxMC41cHggdmFyKC0tbW9ubyk7IGxldHRlci1zcGFjaW5nOiAuMDhlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfS5wYW5lbC1oZWFkIHN2ZyB7IHdpZHRoOiAxM3B4OyBoZWlnaHQ6IDEzcHg7IH1cbi5vcGFjaXR5LWNvbnRyb2wgeyAtLXByb2dyZXNzOiAxMDAlOyBwYWRkaW5nOiAxMHB4IDEycHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpOyB9Lm9wYWNpdHktY29udHJvbC5kaXNhYmxlZCB7IG9wYWNpdHk6IC40OyB9Lm9wYWNpdHktbGFiZWwgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDsgY29sb3I6IHZhcigtLW11dGVkKTsgZm9udDogMTAuNXB4IHZhcigtLW1vbm8pOyB9XG4ub3BhY2l0eS1jb250cm9sIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTJweDsgbWFyZ2luOiAwOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWFjY2VudCkgMCUsIHZhcigtLWFjY2VudCkgdmFyKC0tcHJvZ3Jlc3MpLCB2YXIoLS1ib3JkZXIpIHZhcigtLXByb2dyZXNzKSwgdmFyKC0tYm9yZGVyKSAxMDAlKTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7IGhlaWdodDogMnB4OyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuLm9wYWNpdHktY29udHJvbCBpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDsgbWFyZ2luLXRvcDogLTNweDsgYm9yZGVyOiAwOyBib3JkZXItcmFkaXVzOiAxcHg7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXByb2dyZXNzIHsgaGVpZ2h0OiAycHg7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7IH1cbi5vcGFjaXR5LWNvbnRyb2wgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotbW96LXJhbmdlLXRodW1iIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IGJvcmRlcjogMDsgYm9yZGVyLXJhZGl1czogMXB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpOyB9XG4ubGF5ZXItbGlzdCB7IG1pbi1oZWlnaHQ6IDA7IGZsZXg6IDE7IG92ZXJmbG93LXk6IGF1dG87IG1hcmdpbjogMDsgcGFkZGluZzogNHB4IDA7IGxpc3Qtc3R5bGU6IG5vbmU7IH1cbi5sYXllci1yb3cgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOHB4OyBwYWRkaW5nOiA2cHggOHB4OyBjdXJzb3I6IHBvaW50ZXI7IH0ubGF5ZXItcm93OmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1zdWJ0bGUpOyB9LmxheWVyLXJvdy5zZWxlY3RlZCB7IGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1zb2Z0KTsgfS5sYXllci1yb3cuaGlkZGVuIHsgb3BhY2l0eTogLjU7IH1cbi52aXNpYmlsaXR5IHsgd2lkdGg6IDIycHg7IGhlaWdodDogMjVweDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0udmlzaWJpbGl0eSBzdmcgeyB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4OyB9XG4ubGF5ZXItdGh1bWIgeyB3aWR0aDogMzRweDsgaGVpZ2h0OiAzNHB4OyBmbGV4LXNocmluazogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDJweDsgfS5sYXllci10aHVtYiBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvbnRhaW47IH1cbi5sYXllci1uYW1lIHsgbWluLXdpZHRoOiAwOyBmbGV4OiAxOyBvdmVyZmxvdzogaGlkZGVuOyBjb2xvcjogdmFyKC0tdGV4dCk7IGZvbnQtc2l6ZTogMTEuNXB4OyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfS5sYXllci1pbnB1dCB7IG1pbi13aWR0aDogMDsgZmxleDogMTsgcGFkZGluZzogM3B4IDVweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTsgYm9yZGVyLXJhZGl1czogMnB4OyBvdXRsaW5lOiBub25lOyBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTsgY29sb3I6IHZhcigtLXRleHQpOyBmb250LXNpemU6IDExLjVweDsgfVxuLmRyb3AtbWFyayB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0LWlubGluZTogNHB4OyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTsgfS5kcm9wLW1hcmsuYWJvdmUgeyB0b3A6IDA7IH0uZHJvcC1tYXJrLmJlbG93IHsgYm90dG9tOiAwOyB9XG4ubm8tbGF5ZXJzIHsgcGFkZGluZzogMTZweCAxMnB4OyBjb2xvcjogdmFyKC0tZmFpbnQpOyBmb250OiAxMXB4IHZhcigtLW1vbm8pOyB9LnBhbmVsLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDRweDsgcGFkZGluZzogN3B4OyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTsgfS5wYW5lbC1hY3Rpb25zIC5idXR0b24geyBmbGV4OiAxOyBtaW4taGVpZ2h0OiAzMHB4OyBwYWRkaW5nOiA1cHg7IH1cbi5jYW52YXMtc3RhZ2UgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG1pbi13aWR0aDogMDsgZmxleDogMTsgdG91Y2gtYWN0aW9uOiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB9LmFydGJvYXJkIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IG92ZXJmbG93OiBoaWRkZW47IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7IG91dGxpbmU6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYix2YXIoLS1tdXRlZCkgMzQlLHRyYW5zcGFyZW50KTsgfS5jYW52YXMtZW1wdHkgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgcG9zaXRpb246IGFic29sdXRlOyBpbnNldDogMDsgZGlzcGxheTogZ3JpZDsgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfS5jYW52YXMtZW1wdHkgcCB7IHBhZGRpbmc6IDEzcHggMThweDsgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1mYWludCk7IGZvbnQ6IDExcHggdmFyKC0tbW9ubyk7IH1cbi5sb2FkaW5nLXBhZ2UgeyBoZWlnaHQ6IDEwMHZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNHB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH0ubG9hZGluZy1wYWdlIHAgeyBtYXJnaW46IDA7IGZvbnQ6IDEycHggdmFyKC0tbW9ubyk7IH0ubm90LWZvdW5kIHsgbWluLWhlaWdodDogMTAwdmg7IGRpc3BsYXk6IGdyaWQ7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJhY2tncm91bmQ6IHZhcigtLWJnKTsgY29sb3I6IHZhcigtLW11dGVkKTsgfS5ub3QtZm91bmQgPiBkaXYgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyAuaG9tZSB7IHBhZGRpbmc6IDI4cHggMTZweCA3MHB4OyB9LnByZXNldHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7IH0ucHJvamVjdC1jYXJkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MnB4IG1pbm1heCgwLDFmcikgYXV0bzsgfS5wcm9qZWN0LWFjdGlvbnMgeyBwYWRkaW5nOiAwIDVweDsgb3BhY2l0eTogMTsgfS50b3BiYXIgLmRvYy1zaXplLCAudG9wYmFyIC5zYXZlLWxhYmVsLCAudG9wYmFyIC5hZGQtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9LmxheWVycy1wYW5lbCB7IHdpZHRoOiAyMDVweDsgfSB9XG5gO1xuXG5mdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1mb3VuZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5QYWdlIG5vdCBmb3VuZDwvcD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQmFjayB0byBwcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8c3R5bGU+e0dMT0JBTF9DU1N9PC9zdHlsZT5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcC86aWRcIiBlbGVtZW50PXs8RWRpdG9yIC8+fSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxOb3RGb3VuZCAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICApO1xufVxuIiwgImltcG9ydCB7IGgsIHJlbmRlciB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9jbGllbnQvaW5kZXgudHN4XCI7XG5cbnJlbmRlcihoKEFwcCwge30pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ08sSUMwQk1BO0FEMUJOLElFVURDO0FGVkMsSUdHSEM7QUhIRyxJRzhGTUM7QUg5Rk4sSUkrS0hDO0FKL0tHLElJMExIQztBSjFMRyxJSTRMREM7QUo1TEMsSUlzTkRDO0FKdE5DLElLU0hDO0FMVEcsSUtVTkM7QUxWTSxJS1dOQztBTFhNLElLeUJEQztBTHpCQyxJS3NDSEM7QUx0Q0csSUtxTERDO0FMckxDLElLc0xEQztBTHRMQyxJTUVJQztBTkZKLElBaUJNQyxJQUFnQyxDQUFHO0FBakJ6QyxJQWtCTUMsSUFBWSxDQUFBO0FBbEJsQixJQW1CTUMsSUFDWjtBQXBCTSxJQ0NNQyxJQUFVQyxNQUFNRDtBQVN0QixTQUFTRSxFQUFPQyxJQUFLQyxJQUFBQTtBQUUzQixXQUFTUixNQUFLUSxHQUFPRCxDQUFBQSxHQUFJUCxFQUFBQSxJQUFLUSxHQUFNUixFQUFBQTtBQUNwQyxTQUE2Qk87QUFDOUI7QUFRZ0IsU0FBQUUsRUFBV0MsSUFBQUE7QUFDdEJBLEVBQUFBLE1BQVFBLEdBQUtDLGNBQVlELEdBQUtDLFdBQVdDLFlBQVlGLEVBQUFBO0FBQzFEO0FFVmdCLFNBQUFHLEVBQWNDLElBQU1OLElBQU9PLElBQUFBO0FBQzFDLE1BQ0NDLElBQ0FDLElBQ0FqQixJQUhHa0IsS0FBa0IsQ0FBQTtBQUl0QixPQUFLbEIsTUFBS1EsR0FDQSxVQUFMUixLQUFZZ0IsS0FBTVIsR0FBTVIsRUFBQUEsSUFDZCxTQUFMQSxLQUFZaUIsS0FBTVQsR0FBTVIsRUFBQUEsSUFDNUJrQixHQUFnQmxCLEVBQUFBLElBQUtRLEdBQU1SLEVBQUFBO0FBVWpDLE1BUEltQixVQUFVQyxTQUFTLE1BQ3RCRixHQUFnQkgsV0FDZkksVUFBVUMsU0FBUyxJQUFJbkMsRUFBTW9DLEtBQUtGLFdBQVcsQ0FBQSxJQUFLSixLQUtqQyxjQUFBLE9BQVJELE1IakJRLFFHaUJjQSxHQUFLUSxhQUNyQyxNQUFLdEIsTUFBS2MsR0FBS1EsYUFBQUEsWUFDVkosR0FBZ0JsQixFQUFBQSxNQUNuQmtCLEdBQWdCbEIsRUFBQUEsSUFBS2MsR0FBS1EsYUFBYXRCLEVBQUFBO0FBSzFDLFNBQU91QixFQUFZVCxJQUFNSSxJQUFpQkYsSUFBS0MsSUh6QjVCLElBQUE7QUcwQnBCO0FBY2dCLFNBQUFNLEVBQVlULElBQU1OLElBQU9RLElBQUtDLElBQUtPLElBQUFBO0FBSWxELE1BQU1DLEtBQVEsRUFDYlgsTUFBQUEsSUFDQU4sT0FBQUEsSUFDQVEsS0FBQUEsSUFDQUMsS0FBQUEsSUFDQVMsS0hqRGtCLE1Ha0RsQkMsSUhsRGtCLE1HbURsQkMsS0FBUSxHQUNSQyxLSHBEa0IsTUdxRGxCQyxLSHJEa0IsTUdzRGxCQyxhQUFBQSxRQUNBQyxLSHZEa0IsUUd1RFBSLEtBQUFBLEVBQXFCckMsSUFBVXFDLElBQzFDUyxLQUFBQSxJQUNBQyxLQUFRLEVBQUE7QUFNVCxTSC9EbUIsUUc2RGZWLE1IN0RlLFFHNkRLdEMsRUFBUXVDLFNBQWV2QyxFQUFRdUMsTUFBTUEsRUFBQUEsR0FFdERBO0FBQ1I7QUFNZ0IsU0FBQVUsRUFBU0MsSUFBQUE7QUFDeEIsU0FBT0EsR0FBTUM7QUFDZDtBQzNFTyxTQUFTQyxFQUFjRixJQUFPRyxJQUFBQTtBQUNwQ0MsT0FBS0osUUFBUUEsSUFDYkksS0FBS0QsVUFBVUE7QUFDaEI7QUEwRWdCLFNBQUFFLEVBQWNDLElBQU9DLElBQUFBO0FBQ3BDLE1KM0VtQixRSTJFZkEsR0FFSCxRQUFPRCxHQUFLRSxLQUNUSCxFQUFjQyxHQUFLRSxJQUFVRixHQUFLRyxNQUFVLENBQUEsSUo5RTdCO0FJbUZuQixXQURJQyxJQUNHSCxLQUFhRCxHQUFLSyxJQUFXQyxRQUFRTCxLQUczQyxLSnRGa0IsU0lvRmxCRyxLQUFVSixHQUFLSyxJQUFXSixFQUFBQSxNSnBGUixRSXNGS0csR0FBT0csSUFJN0IsUUFBT0gsR0FBT0c7QUFTaEIsU0FBNEIsY0FBQSxPQUFkUCxHQUFNUSxPQUFxQlQsRUFBY0MsRUFBQUEsSUpuR3BDO0FJb0dwQjtBQU1BLFNBQVNTLEVBQWdCQyxJQUFBQTtBQUN4QixNQUFJQSxHQUFTQyxPQUFlRCxHQUFTRSxLQUFTO0FBQzdDLFFBQUlDLEtBQVdILEdBQVNJLEtBQ3ZCQyxLQUFTRixHQUFRTixLQUNqQlMsS0FBYyxDQUFBLEdBQ2RDLEtBQVcsQ0FBQSxHQUNYQyxLQUFXQyxFQUFPLENBQUUsR0FBRU4sRUFBQUE7QUFDdkJLLElBQUFBLEdBQVFKLE1BQWFELEdBQVFDLE1BQWEsR0FDdENNLEVBQVFwQixTQUFPb0IsRUFBUXBCLE1BQU1rQixFQUFBQSxHQUVqQ0csRUFDQ1gsR0FBU0MsS0FDVE8sSUFDQUwsSUFDQUgsR0FBU1ksS0FDVFosR0FBU0MsSUFBWVksY0p4SUksS0l5SXpCVixHQUFRVyxNQUF5QixDQUFDVCxFQUFBQSxJSjFIakIsTUkySGpCQyxJSjNIaUIsUUk0SGpCRCxLQUFpQmhCLEVBQWNjLEVBQUFBLElBQVlFLElBQUFBLENBQUFBLEVKM0lsQixLSTRJdEJGLEdBQVFXLE1BQ1hQLEVBQUFBLEdBR0RDLEdBQVFKLE1BQWFELEdBQVFDLEtBQzdCSSxHQUFRaEIsR0FBQUcsSUFBbUJhLEdBQVFmLEdBQUFBLElBQVdlLElBQzlDTyxFQUFXVCxJQUFhRSxJQUFVRCxFQUFBQSxHQUNsQ0osR0FBUU4sTUFBUU0sR0FBUVgsS0FBVyxNQUUvQmdCLEdBQVFYLE9BQVNRLE1BQ3BCVyxFQUF3QlIsRUFBQUE7RUFFMUI7QUFDRDtBQUtBLFNBQVNRLEVBQXdCMUIsSUFBQUE7QUFDaEMsTUpoSm1CLFNJZ0pkQSxLQUFRQSxHQUFLRSxPSmhKQyxRSWdKb0JGLEdBQUsyQixJQVEzQyxRQVBBM0IsR0FBS08sTUFBUVAsR0FBSzJCLElBQVlDLE9KakpaLE1Ja0psQjVCLEdBQUtLLElBQVd3QixLQUFLLFNBQUFDLElBQUFBO0FBQ3BCLFFKbkppQixRSW1KYkEsTUpuSmEsUUltSklBLEdBQUt2QixJQUN6QixRQUFRUCxHQUFLTyxNQUFRUCxHQUFLMkIsSUFBWUMsT0FBT0UsR0FBS3ZCO0VBRXBELENBQUEsR0FFT21CLEVBQXdCMUIsRUFBQUE7QUFFakM7QUE0Qk8sU0FBUytCLEVBQWNDLElBQUFBO0FBQUFBLEdBQUFBLENBRTFCQSxHQUFDcEIsUUFDRG9CLEdBQUNwQixNQUFBQSxTQUNGcUIsRUFBY0MsS0FBS0YsRUFBQUEsS0FBQUEsQ0FDbEJHLEVBQU9DLFNBQ1RDLEtBQWdCakIsRUFBUWtCLHdCQUV4QkQsSUFBZWpCLEVBQVFrQixzQkFDTkMsR0FBT0osQ0FBQUE7QUFFMUI7QUFTQSxTQUFTQSxJQUFBQTtBQUNSLE1BQUE7QUFNQyxhQUxJSCxJQUNIUSxLQUFJLEdBSUVQLEVBQWMzQixTQU9oQjJCLEdBQWMzQixTQUFTa0MsTUFDMUJQLEVBQWNRLEtBQUtDLENBQUFBLEdBR3BCVixLQUFJQyxFQUFjVSxNQUFBQSxHQUNsQkgsS0FBSVAsRUFBYzNCLFFBRWxCRyxFQUFnQnVCLEVBQUFBO0VBSWxCLFVBRkM7QUFDQUMsTUFBYzNCLFNBQVM2QixFQUFPQyxNQUFrQjtFQUNqRDtBQUNEO0FHMU1nQixTQUFBUSxFQUNmQyxJQUNBQyxJQUNBQyxJQUNBQyxJQUNBQyxJQUNBQyxJQUNBQyxJQUNBbkMsSUFDQUQsSUFDQXFDLElBQ0FuQyxJQUFBQTtBQVhlLE1BYVhvQyxJQUVIeEMsSUFFQXlDLElBRUFDLElBRUFDLElBOEJJQyxJQThCQUMsSUF2RERDLEtBQWVYLE1BQWtCQSxHQUFjM0MsT0FBZXVELEdBRTlEQyxLQUFvQmYsR0FBYXhDO0FBVXJDLE9BUkFTLEtBQVMrQyxFQUNSZixJQUNBRCxJQUNBYSxJQUNBNUMsSUFDQThDLEVBQUFBLEdBR0lSLEtBQUksR0FBR0EsS0FBSVEsSUFBbUJSLEtQaEVoQixVT2lFbEJDLEtBQWFQLEdBQWMxQyxJQUFXZ0QsRUFBQUEsT0FLdEN4QyxLQUFBQSxNQUNFeUMsR0FBVW5ELE9BQWlCd0QsR0FBWUwsR0FBVW5ELEdBQUFBLEtBQWE0RCxHQUdoRVQsR0FBVW5ELE1BQVVrRCxJQUdoQkksS0FBU3BDLEVBQ1p3QixJQUNBUyxJQUNBekMsSUFDQW9DLElBQ0FDLElBQ0FDLElBQ0FuQyxJQUNBRCxJQUNBcUMsSUFDQW5DLEVBQUFBLEdBSURzQyxLQUFTRCxHQUFVL0MsS0FDZitDLEdBQVdVLE9BQU9uRCxHQUFTbUQsT0FBT1YsR0FBV1UsUUFDNUNuRCxHQUFTbUQsT0FDWkMsRUFBU3BELEdBQVNtRCxLUDlGRixNTzhGYVYsRUFBQUEsR0FFOUJyQyxHQUFTaUIsS0FDUm9CLEdBQVdVLEtBQ1hWLEdBQVUzQixPQUFlNEIsSUFDekJELEVBQUFBLElQbkdnQixRT3VHZEUsTVB2R2MsUU91R1dELE9BQzVCQyxLQUFnQkQsTUFHYkcsS0FBQUEsQ0FBQUEsRVB0SHNCLElPc0hMSixHQUFVOUIsU0FDWlgsR0FBUVIsUUFBZWlELEdBQVVqRCxPQUNuRFUsS0FBU21ELEVBQU9aLElBQVl2QyxJQUFROEIsSUFBV2EsRUFBQUEsR0FNM0NBLE1BQWU3QyxHQUFRTixRQUMxQk0sR0FBUU4sTVBwSFEsU09zSG1CLGNBQUEsT0FBbkIrQyxHQUFXOUMsUUFBQUEsV0FBc0JpRCxLQUNsRDFDLEtBQVMwQyxLQUNDRixPQUNWeEMsS0FBU3dDLEdBQU9ZLGNBSWpCYixHQUFVOUIsT0FBQUE7QUFLWCxTQUZBdUIsR0FBY3hDLE1BQVFpRCxJQUVmekM7QUFDUjtBQU9BLFNBQVMrQyxFQUNSZixJQUNBRCxJQUNBYSxJQUNBNUMsSUFDQThDLElBQUFBO0FBTEQsTUFRS1IsSUFFQUMsSUFFQXpDLElBOERHdUQsSUFPQUMsSUFuRUhDLEtBQW9CWCxHQUFZckQsUUFDbkNpRSxLQUF1QkQsSUFFcEJFLEtBQU87QUFHWCxPQURBekIsR0FBYzFDLE1BQWEsSUFBSW9FLE1BQU1aLEVBQUFBLEdBQ2hDUixLQUFJLEdBQUdBLEtBQUlRLElBQW1CUixLUDlKaEIsVU9pS2xCQyxLQUFhUixHQUFhTyxFQUFBQSxNQUlKLGFBQUEsT0FBZEMsTUFDYyxjQUFBLE9BQWRBLE1BU2MsWUFBQSxPQUFkQSxNQUNjLFlBQUEsT0FBZEEsTUFFYyxZQUFBLE9BQWRBLE1BQ1BBLEdBQVdvQixlQUFlQyxTQUUxQnJCLEtBQWFQLEdBQWMxQyxJQUFXZ0QsRUFBQUEsSUFBS3VCLEVQckwxQixNT3VMaEJ0QixJUHZMZ0IsTUFBQSxNQUFBLElBQUEsSU80TFB1QixFQUFRdkIsRUFBQUEsSUFDbEJBLEtBQWFQLEdBQWMxQyxJQUFXZ0QsRUFBQUEsSUFBS3VCLEVBQzFDbkYsR0FDQSxFQUFFRSxVQUFVMkQsR0FBQUEsR1AvTEksTUFBQSxNQUFBLElBQUEsSUFBQSxXT29NUEEsR0FBV29CLGVBQTZCcEIsR0FBVXdCLE1BQVUsSUFLdEV4QixLQUFhUCxHQUFjMUMsSUFBV2dELEVBQUFBLElBQUt1QixFQUMxQ3RCLEdBQVc5QyxNQUNYOEMsR0FBVzVELE9BQ1g0RCxHQUFXeUIsS0FDWHpCLEdBQVdVLE1BQU1WLEdBQVdVLE1QN01aLE1POE1oQlYsR0FBVXhDLEdBQUFBLElBR1hpQyxHQUFjMUMsSUFBV2dELEVBQUFBLElBQUtDLElBR3pCYyxLQUFjZixLQUFJbUIsSUFDeEJsQixHQUFVcEQsS0FBVzZDLElBQ3JCTyxHQUFVd0IsTUFBVS9CLEdBQWMrQixNQUFVLEdBWTVDakUsS1BsT2tCLE1BQUEsT08yTlp3RCxLQUFpQmYsR0FBVW5ELE1BQVU2RSxFQUMxQzFCLElBQ0FLLElBQ0FTLElBQ0FHLEVBQUFBLE9BTUFBLE9BREExRCxLQUFXOEMsR0FBWVUsRUFBQUEsT0FHdEJ4RCxHQUFRVyxPUGhQVyxLQVNILFFPOE9DWCxNUDlPRCxRTzhPcUJBLEdBQVFDLE9BQUFBLE1BRzFDdUQsT0FlQ1IsS0FBb0JTLEtBQ3ZCRSxPQUNVWCxLQUFvQlMsTUFDOUJFLE9BSzRCLGNBQUEsT0FBbkJsQixHQUFXOUMsU0FDckI4QyxHQUFVOUIsT1BwUmMsTU9zUmY2QyxNQUFpQkQsT0FpQnZCQyxNQUFpQkQsS0FBYyxJQUNsQ0ksT0FDVUgsTUFBaUJELEtBQWMsSUFDekNJLFFBRUlILEtBQWdCRCxLQUNuQkksT0FFQUEsTUFNRGxCLEdBQVU5QixPUHJUYyxPT21MekJ1QixHQUFjMUMsSUFBV2dELEVBQUFBLElQeEtSO0FPbVRuQixNQUFJa0IsR0FDSCxNQUFLbEIsS0FBSSxHQUFHQSxLQUFJaUIsSUFBbUJqQixLUHBUakIsVU9xVGpCeEMsS0FBVzhDLEdBQVlOLEVBQUFBLE1BQ2dDLE1QL1RuQyxJTytUS3hDLEdBQVFXLFNBQzVCWCxHQUFRTixPQUFTUSxPQUNwQkEsS0FBU2hCLEVBQWNjLEVBQUFBLElBR3hCb0UsRUFBUXBFLElBQVVBLEVBQUFBO0FBS3JCLFNBQU9FO0FBQ1I7QUFTQSxTQUFTbUQsRUFBT2dCLElBQWFuRSxJQUFROEIsSUFBV2EsSUFBQUE7QUFBaEQsTUFJTS9ELElBQ0swRDtBQUZWLE1BQStCLGNBQUEsT0FBcEI2QixHQUFZMUUsTUFBb0I7QUFFMUMsU0FESWIsS0FBV3VGLEdBQVc3RSxLQUNqQmdELEtBQUksR0FBRzFELE1BQVkwRCxLQUFJMUQsR0FBU1csUUFBUStDLEtBQzVDMUQsQ0FBQUEsR0FBUzBELEVBQUFBLE1BS1oxRCxHQUFTMEQsRUFBQUEsRUFBRW5ELEtBQVdnRixJQUN0Qm5FLEtBQVNtRCxFQUFPdkUsR0FBUzBELEVBQUFBLEdBQUl0QyxJQUFROEIsSUFBV2EsRUFBQUE7QUFJbEQsV0FBTzNDO0VBQ1I7QUFBV21FLEVBQUFBLEdBQVczRSxPQUFTUSxPQUMxQjJDLE9BQ0MzQyxNQUFVbUUsR0FBWTFFLFFBQUFBLENBQVNPLEdBQU9vRSxlQUN6Q3BFLEtBQVNoQixFQUFjbUYsRUFBQUEsSUFFeEJyQyxHQUFVdUMsYUFBYUYsR0FBVzNFLEtBQU9RLE1QaFd4QixJQUFBLElPa1dsQkEsS0FBU21FLEdBQVczRTtBQUdyQixLQUFBO0FBQ0NRLElBQUFBLEtBQVNBLE1BQVVBLEdBQU9vRDtFQUFBQSxTUHRXUixRT3VXVnBELE1BQXFDLEtBQW5CQSxHQUFPc0U7QUFFbEMsU0FBT3RFO0FBQ1I7QUFRTyxTQUFTdUUsRUFBYTNGLElBQVU0RixJQUFBQTtBQVV0QyxTQVRBQSxLQUFNQSxNQUFPLENBQUEsR1BuWE0sUU9vWGY1RixNQUF1QyxhQUFBLE9BQVpBLE9BQ3BCa0YsRUFBUWxGLEVBQUFBLElBQ2xCQSxHQUFTa0MsS0FBSyxTQUFBQyxJQUFBQTtBQUNid0QsTUFBYXhELElBQU95RCxFQUFBQTtFQUNyQixDQUFBLElBRUFBLEdBQUlyRCxLQUFLdkMsRUFBQUEsSUFFSDRGO0FBQ1I7QUFTQSxTQUFTUCxFQUNSMUIsSUFDQUssSUFDQVMsSUFDQUcsSUFBQUE7QUFKRCxNQWdDTWlCLElBQ0FDLElBRUd4RixJQTdCRjhFLEtBQU16QixHQUFXeUIsS0FDakJ2RSxLQUFPOEMsR0FBVzlDLE1BQ3BCSyxLQUFXOEMsR0FBWVMsRUFBQUEsR0FDckJzQixLUC9ZYSxRTytZSDdFLE1BQW1ELE1QeFo3QyxJT3daZUEsR0FBUVc7QUFpQjdDLE1QaGFtQixTT2lhakJYLE1BQTRCLFFBQVBrRSxNQUNyQlcsTUFBV1gsTUFBT2xFLEdBQVNrRSxPQUFPdkUsTUFBUUssR0FBU0wsS0FFcEQsUUFBTzREO0FBQUFBLE1BTlBHLE1BQXdCbUIsS0FBVSxJQUFJO0FBVXRDLFNBRklGLEtBQUlwQixLQUFjLEdBQ2xCcUIsS0FBSXJCLEtBQWMsR0FDZm9CLE1BQUssS0FBS0MsS0FBSTlCLEdBQVlyRCxTQUdoQyxLUDNhaUIsU08wYWpCTyxLQUFXOEMsR0FETDFELEtBQWF1RixNQUFLLElBQUlBLE9BQU1DLElBQUFBLE1BSUYsTVB0YlosSU9zYmxCNUUsR0FBUVcsUUFDVHVELE1BQU9sRSxHQUFTa0UsT0FDaEJ2RSxNQUFRSyxHQUFTTCxLQUVqQixRQUFPUDs7QUFLVixTQUFBO0FBQ0Q7QUZ6YkEsU0FBUzBGLEVBQVNDLElBQU9iLElBQUtjLElBQUFBO0FBQ2YsU0FBVmQsR0FBSSxDQUFBLElBQ1BhLEdBQU1FLFlBQVlmLElMQUEsUUtBS2MsS0FBZ0IsS0FBS0EsRUFBQUEsSUFFNUNELEdBQU1iLEVBQUFBLElMRlksUUtDUmMsS0FDRyxLQUNhLFlBQUEsT0FBVEEsTUFBcUJFLEVBQW1CQyxLQUFLakIsRUFBQUEsSUFDakRjLEtBRUFBLEtBQVE7QUFFdkI7QUFBQSxTQXlCZ0JDLEVBQVlHLElBQUtDLElBQU1MLElBQU9NLElBQVVqRCxJQUFBQTtBQUFBQSxNQUNuRGtELElBOEJHQztBQTVCUEMsSUFBRyxLQUFZLFdBQVJKLEdBQ04sS0FBb0IsWUFBQSxPQUFUTCxHQUNWSSxDQUFBQSxHQUFJTCxNQUFNVyxVQUFVVjtPQUNkO0FBS04sUUFKdUIsWUFBQSxPQUFaTSxPQUNWRixHQUFJTCxNQUFNVyxVQUFVSixLQUFXLEtBRzVCQSxHQUNILE1BQUtELE1BQVFDLEdBQ05OLENBQUFBLE1BQVNLLE1BQVFMLE1BQ3RCRixFQUFTTSxHQUFJTCxPQUFPTSxJQUFNLEVBQUE7QUFLN0IsUUFBSUwsR0FDSCxNQUFLSyxNQUFRTCxHQUNQTSxDQUFBQSxNQUFZTixHQUFNSyxFQUFBQSxLQUFTQyxHQUFTRCxFQUFBQSxLQUN4Q1AsRUFBU00sR0FBSUwsT0FBT00sSUFBTUwsR0FBTUssRUFBQUEsQ0FBQUE7RUFJcEM7V0FHbUIsT0FBWEEsR0FBSyxDQUFBLEtBQXdCLE9BQVhBLEdBQUssQ0FBQSxFQUMvQkUsQ0FBQUEsS0FBYUYsT0FBU0EsS0FBT0EsR0FBS00sUUFBUUMsR0FBZSxJQUFBLElBQ25ESixLQUFnQkgsR0FBS1EsWUFBQUEsR0FJMUJSLEtBREdHLE1BQWlCSixNQUFlLGdCQUFSQyxNQUFnQyxlQUFSQSxLQUM1Q0csR0FBY00sTUFBTSxDQUFBLElBQ2hCVCxHQUFLUyxNQUFNLENBQUEsR0FFbEJWLEdBQUd6RCxNQUFheUQsR0FBR3pELElBQWMsQ0FBQSxJQUN0Q3lELEdBQUd6RCxFQUFZMEQsS0FBT0UsRUFBQUEsSUFBY1AsSUFFaENBLEtBQ0VNLEtBUUpOLEdBQU1lLENBQUFBLElBQWtCVCxHQUFTUyxDQUFBQSxLQVBqQ2YsR0FBTWUsQ0FBQUEsSUFBa0JDLEdBQ3hCWixHQUFJYSxpQkFDSFosSUFDQUUsS0FBYVcsSUFBb0JDLEdBQ2pDWixFQUFBQSxLQU1GSCxHQUFJZ0Isb0JBQ0hmLElBQ0FFLEtBQWFXLElBQW9CQyxHQUNqQ1osRUFBQUE7T0FHSTtBQUNOLFFMakcyQixnQ0tpR3ZCbEQsR0FJSGdELENBQUFBLEtBQU9BLEdBQUtNLFFBQVEsZUFBZSxHQUFBLEVBQUtBLFFBQVEsVUFBVSxHQUFBO2FBRWxELFdBQVJOLE1BQ1EsWUFBUkEsTUFDUSxVQUFSQSxNQUNRLFVBQVJBLE1BQ1EsVUFBUkEsTUFHUSxjQUFSQSxNQUNRLGNBQVJBLE1BQ1EsYUFBUkEsTUFDUSxhQUFSQSxNQUNRLFVBQVJBLE1BQ1EsYUFBUkEsTUFDQUEsTUFBUUQsR0FFUixLQUFBO0FBQ0NBLE1BQUFBLEdBQUlDLEVBQUFBLElMbkhZLFFLbUhKTCxLQUFnQixLQUFLQTtBQUVqQyxZQUFNUztJQUNLLFNBQUhZLElBQUFBO0lBQUc7QUFVTyxrQkFBQSxPQUFUckIsT0xoSU8sUUtrSVBBLE1BQUFBLFVBQWtCQSxNQUE4QixPQUFYSyxHQUFLLENBQUEsSUFHcERELEdBQUlrQixnQkFBZ0JqQixFQUFBQSxJQUZwQkQsR0FBSW1CLGFBQWFsQixJQUFjLGFBQVJBLE1BQThCLEtBQVRMLEtBQWdCLEtBQUtBLEVBQUFBO0VBSW5FO0FBQ0Q7QUFPQSxTQUFTd0IsRUFBaUJqQixJQUFBQTtBQU16QixTQUFBLFNBQWlCYyxJQUFBQTtBQUNoQixRQUFJcEgsS0FBSTBDLEdBQWE7QUFDcEIsVUFBTThFLEtBQWV4SCxLQUFJMEMsRUFBWTBFLEdBQUUxRyxPQUFPNEYsRUFBQUE7QUFDOUMsVUx4SmlCLFFLd0piYyxHQUFFSyxDQUFBQSxFQUNMTCxDQUFBQSxHQUFFSyxDQUFBQSxJQUFvQlY7ZUFLWkssR0FBRUssQ0FBQUEsSUFBb0JELEdBQWFWLENBQUFBLEVBQzdDO0FBRUQsYUFBT1UsR0FBYWxHLEVBQVFvRyxRQUFRcEcsRUFBUW9HLE1BQU1OLEVBQUFBLElBQUtBLEVBQUFBO0lBQ3hEO0VBQ0Q7QUFDRDtBR25JZ0IsU0FBQTdGLEVBQ2Z3QixJQUNBM0IsSUFDQUwsSUFDQW9DLElBQ0FDLElBQ0FDLElBQ0FuQyxJQUNBRCxJQUNBcUMsSUFDQW5DLElBQUFBO0FBVmUsTUFhWHdHLElBaUJDQyxJQUVDMUYsSUFBRzJGLElBQU9DLElBQVVDLElBQVVDLElBQVVDLElBQ3hDQyxJQUNFQyxHQUtGQyxJQUNBQyxJQWlJQUMsSUFDSEMsSUFrQ0d2RixJQXFET08sSUFuUFppRixLQUFVcEgsR0FBU1Y7QUFJcEIsTUFBQSxXQUFJVSxHQUFTd0QsWUFBMkIsUVJuRHJCO0FBYlUsUVFtRXpCN0QsR0FBUVcsUUFDWDRCLEtBQUFBLENBQUFBLEVSdEUwQixLUXNFVHZDLEdBQVFXLE1BRXpCMkIsS0FBb0IsQ0FEcEJwQyxLQUFTRyxHQUFRWCxNQUFRTSxHQUFRTixHQUFBQSxLQUk3QmtILEtBQU1yRyxFQUFPMEQsUUFBUzJDLEdBQUl2RyxFQUFBQTtBQUUvQnFILElBQU8sS0FBc0IsY0FBQSxPQUFYRCxJQUF1QjtBQUNwQ1osSUFBQUEsS0FBdUIxRyxHQUFZVjtBQUN2QyxRQUFBO0FBK0RDLFVBN0RJMEgsS0FBVzlHLEdBQVN4QixPQUNsQnVJLElBQW1CSyxHQUFRRSxhQUFhRixHQUFRRSxVQUFVQyxRQUs1RFAsTUFESlQsS0FBTWEsR0FBUUksZ0JBQ1F6RixHQUFjd0UsR0FBRzlGLEdBQUFBLEdBQ25Dd0csS0FBbUJWLEtBQ3BCUyxLQUNDQSxHQUFTeEksTUFBTW1HLFFBQ2Y0QixHQUFHdkgsS0FDSitDLElBR0NwQyxHQUFRYyxNQUVYb0csTUFEQS9GLEtBQUlkLEdBQVFTLE1BQWNkLEdBQVFjLEtBQ056QixLQUF3QjhCLEdBQUMyRyxPQUdqRFYsSUFFSC9HLEdBQVFTLE1BQWNLLEtBQUksSUFBSXNHLEdBQVFOLElBQVVHLEVBQUFBLEtBR2hEakgsR0FBUVMsTUFBY0ssS0FBSSxJQUFJcEMsRUFDN0JvSSxJQUNBRyxFQUFBQSxHQUVEbkcsR0FBRTBDLGNBQWM0RCxJQUNoQnRHLEdBQUV5RyxTQUFTRyxJQUVSVixNQUFVQSxHQUFTVyxJQUFJN0csRUFBQUEsR0FFdEJBLEdBQUU4RyxVQUFPOUcsR0FBRThHLFFBQVEsQ0FBRSxJQUMxQjlHLEdBQUNWLE1BQWtCMkIsSUFDbkIwRSxLQUFRM0YsR0FBQ3BCLE1BQUFBLE1BQ1RvQixHQUFDK0csTUFBb0IsQ0FBQSxHQUNyQi9HLEdBQUNnSCxNQUFtQixDQUFBLElBSWpCZixLUjNHYSxRUTJHT2pHLEdBQUNpSCxRQUN4QmpILEdBQUNpSCxNQUFjakgsR0FBRThHLFFBR2RiLEtSL0dhLFFRK0dPSyxHQUFRWSw2QkFDM0JsSCxHQUFDaUgsT0FBZWpILEdBQUU4RyxVQUNyQjlHLEdBQUNpSCxNQUFjOUgsRUFBTyxDQUFBLEdBQUlhLEdBQUNpSCxHQUFBQSxJQUc1QjlILEVBQ0NhLEdBQUNpSCxLQUNEWCxHQUFRWSx5QkFBeUJsQixJQUFVaEcsR0FBQ2lILEdBQUFBLENBQUFBLElBSTlDckIsS0FBVzVGLEdBQUV0QyxPQUNibUksS0FBVzdGLEdBQUU4RyxPQUNiOUcsR0FBQ2xCLE1BQVVJLElBR1B5RyxHQUVGTSxNUmpJZSxRUWtJZkssR0FBUVksNEJSbElPLFFRbUlmbEgsR0FBRW1ILHNCQUVGbkgsR0FBRW1ILG1CQUFBQSxHQUdDbEIsS1J4SVksUVF3SVFqRyxHQUFFb0gscUJBQ3pCcEgsR0FBQytHLElBQWtCN0csS0FBS0YsR0FBRW9ILGlCQUFBQTtXQUVyQjtBQVVOLFlBUkNuQixLUjdJZSxRUThJZkssR0FBUVksNEJBQ1JsQixPQUFhSixNUi9JRSxRUWdKZjVGLEdBQUVxSCw2QkFFRnJILEdBQUVxSCwwQkFBMEJyQixJQUFVRyxFQUFBQSxHQUl0Q2pILEdBQVFKLE9BQWNELEdBQVFDLE9BQUFBLENBQzVCa0IsR0FBQ3pCLE9SdkpZLFFRd0pkeUIsR0FBRXNILHlCQUFBQSxVQUNGdEgsR0FBRXNILHNCQUNEdEIsSUFDQWhHLEdBQUNpSCxLQUNEZCxFQUFBQSxHQUVEO0FBRUdqSCxVQUFBQSxHQUFRSixPQUFjRCxHQUFRQyxRQUtqQ2tCLEdBQUV0QyxRQUFRc0ksSUFDVmhHLEdBQUU4RyxRQUFROUcsR0FBQ2lILEtBQ1hqSCxHQUFDcEIsTUFBQUEsUUFHRk0sR0FBUVgsTUFBUU0sR0FBUU4sS0FDeEJXLEdBQVFiLE1BQWFRLEdBQVFSLEtBQzdCYSxHQUFRYixJQUFXd0IsS0FBSyxTQUFBN0IsSUFBQUE7QUFDbkJBLFlBQUFBLE9BQU9BLEdBQUtFLEtBQVdnQjtVQUM1QixDQUFBLEdBRUEwQyxFQUFVMUIsS0FBS3FILE1BQU12SCxHQUFDK0csS0FBbUIvRyxHQUFDZ0gsR0FBQUEsR0FDMUNoSCxHQUFDZ0gsTUFBbUIsQ0FBQSxHQUVoQmhILEdBQUMrRyxJQUFrQnpJLFVBQ3RCVSxHQUFZa0IsS0FBS0YsRUFBQUE7QUFHbEIsZ0JBQU11RztRQUNQO0FSeExnQixnQlEwTFp2RyxHQUFFd0gsdUJBQ0x4SCxHQUFFd0gsb0JBQW9CeEIsSUFBVWhHLEdBQUNpSCxLQUFhZCxFQUFBQSxHQUczQ0YsS1I5TFksUVE4TFFqRyxHQUFFeUgsc0JBQ3pCekgsR0FBQytHLElBQWtCN0csS0FBSyxXQUFBO0FBQ3ZCRixVQUFBQSxHQUFFeUgsbUJBQW1CN0IsSUFBVUMsSUFBVUMsRUFBQUE7UUFDMUMsQ0FBQTtNQUVGO0FBU0EsVUFQQTlGLEdBQUVuQyxVQUFVc0ksSUFDWm5HLEdBQUV0QyxRQUFRc0ksSUFDVmhHLEdBQUNyQixNQUFja0MsSUFDZmIsR0FBQ3pCLE1BQUFBLE9BRUc2SCxLQUFhaEgsRUFBT2dCLEtBQ3ZCaUcsS0FBUSxHQUNMSixFQUNIakcsQ0FBQUEsR0FBRThHLFFBQVE5RyxHQUFDaUgsS0FDWGpILEdBQUNwQixNQUFBQSxPQUVHd0gsTUFBWUEsR0FBV2xILEVBQUFBLEdBRTNCdUcsS0FBTXpGLEdBQUV5RyxPQUFPekcsR0FBRXRDLE9BQU9zQyxHQUFFOEcsT0FBTzlHLEdBQUVuQyxPQUFBQSxHQUVuQytELEVBQVUxQixLQUFLcUgsTUFBTXZILEdBQUMrRyxLQUFtQi9HLEdBQUNnSCxHQUFBQSxHQUMxQ2hILEdBQUNnSCxNQUFtQixDQUFBO1VBRXBCLElBQUE7QUFDQ2hILFFBQUFBLEdBQUNwQixNQUFBQSxPQUNHd0gsTUFBWUEsR0FBV2xILEVBQUFBLEdBRTNCdUcsS0FBTXpGLEdBQUV5RyxPQUFPekcsR0FBRXRDLE9BQU9zQyxHQUFFOEcsT0FBTzlHLEdBQUVuQyxPQUFBQSxHQUduQ21DLEdBQUU4RyxRQUFROUcsR0FBQ2lIO01BQUFBLFNBQ0hqSCxHQUFDcEIsT0FBQUEsRUFBYXlILEtBQVE7QUFJaENyRyxNQUFBQSxHQUFFOEcsUUFBUTlHLEdBQUNpSCxLUm5PTSxRUXFPYmpILEdBQUUwSCxvQkFDTHpHLEtBQWdCOUIsRUFBT0EsRUFBTyxDQUFBLEdBQUk4QixFQUFBQSxHQUFnQmpCLEdBQUUwSCxnQkFBQUEsQ0FBQUEsSUFHakR6QixLQUFBQSxDQUFxQk4sTVJ6T1IsUVF5T2lCM0YsR0FBRTJILDRCQUNuQzdCLEtBQVc5RixHQUFFMkgsd0JBQXdCL0IsSUFBVUMsRUFBQUEsSUFHNUMvRSxLUjdPYSxRUThPaEIyRSxNQUFlQSxHQUFJakgsU0FBU2YsS1I5T1osUVE4T3dCZ0ksR0FBSTFDLE1BQ3pDNkUsRUFBVW5DLEdBQUkvSCxNQUFNQyxRQUFBQSxJQUNwQjhILElBRUoxRyxLQUFTNkIsRUFDUkMsSUFDQWdDLEVBQVEvQixFQUFBQSxJQUFnQkEsS0FBZSxDQUFDQSxFQUFBQSxHQUN4QzVCLElBQ0FMLElBQ0FvQyxJQUNBQyxJQUNBQyxJQUNBbkMsSUFDQUQsSUFDQXFDLElBQ0FuQyxFQUFBQSxHQUdEZSxHQUFFSixPQUFPVixHQUFRWCxLQUdqQlcsR0FBUU0sT0FBQUEsTUFFSlEsR0FBQytHLElBQWtCekksVUFDdEJVLEdBQVlrQixLQUFLRixFQUFBQSxHQUdkK0YsT0FDSC9GLEdBQUMyRyxNQUFpQjNHLEdBQUM5QixLUjFRSDtJUWdUbEIsU0FwQ1NnSCxJQUFBQTtBQU9SLFVBSEFsRyxHQUFZVixTQUFTb0gsSUFDckJ4RyxHQUFRSixNUmpSUyxNUW1SYnNDLE1SblJhLFFRbVJFRCxJQUFBQTtBQUNsQixZQUFJK0QsR0FBRTJDLE1BQU07QUFLWCxlQUpBM0ksR0FBUU0sT0FBVzRCLEtBQ2hCMEcsTVJuU3NCLEtRc1NsQi9JLE1BQTZCLEtBQW5CQSxHQUFPc0UsWUFBaUJ0RSxHQUFPb0QsY0FDL0NwRCxDQUFBQSxLQUFTQSxHQUFPb0Q7QVIxUkYsa0JRNlJYaEIsT0FDSEEsR0FBa0JBLEdBQWtCNEcsUUFBUWhKLEVBQUFBLENBQUFBLElSOVI5QixPUWdTZkcsR0FBUVgsTUFBUVE7UUFDakIsV1JqU2dCLFFRaVNMb0MsR0FDVixNQUFTRSxLQUFJRixHQUFrQjdDLFFBQVErQyxPQUN0QzJHLEdBQVc3RyxHQUFrQkUsRUFBQUEsQ0FBQUE7TUFBQUEsTUFJL0JuQyxDQUFBQSxHQUFRWCxNQUFRTSxHQUFRTjtBUnZTUixjUTBTYlcsR0FBUWIsUUFDWGEsR0FBUWIsTUFBYVEsR0FBUVIsT0FBYyxDQUFBLElBR3ZDNkcsR0FBRTJDLFFBQU1JLEVBQVkvSSxFQUFBQSxHQUN6QkUsRUFBT2IsSUFBYTJHLElBQUdoRyxJQUFVTCxFQUFBQTtJQUNsQztFQUNELE1SalRtQixTUWtUbEJzQyxNQUNBakMsR0FBUUosT0FBY0QsR0FBUUMsT0FFOUJJLEdBQVFiLE1BQWFRLEdBQVFSLEtBQzdCYSxHQUFRWCxNQUFRTSxHQUFRTixPQUV4QlEsS0FBU0csR0FBUVgsTUFBUTJKLEVBQ3hCckosR0FBUU4sS0FDUlcsSUFDQUwsSUFDQW9DLElBQ0FDLElBQ0FDLElBQ0FuQyxJQUNBb0MsSUFDQW5DLEVBQUFBO0FBTUYsVUFGS3dHLEtBQU1yRyxFQUFRK0ksV0FBUzFDLEdBQUl2RyxFQUFBQSxHUmxWSCxNUW9WdEJBLEdBQVFNLE1BQUFBLFNBQXVDVDtBQUN2RDtBQUVBLFNBQVNrSixFQUFZakssSUFBQUE7QUFDaEJBLEVBQUFBLE9BQ0NBLEdBQUsyQixRQUFhM0IsR0FBSzJCLElBQUFwQixNQUFBQSxPQUN2QlAsR0FBS0ssT0FBWUwsR0FBS0ssSUFBV3dCLEtBQUtvSSxDQUFBQTtBQUU1QztBQUFBLFNBT2dCeEksRUFBV1QsSUFBYW9KLElBQU1uSixJQUFBQTtBQUM3QyxXQUFTb0MsS0FBSSxHQUFHQSxLQUFJcEMsR0FBU1gsUUFBUStDLEtBQ3BDWSxHQUFTaEQsR0FBU29DLEVBQUFBLEdBQUlwQyxHQUFBQSxFQUFXb0MsRUFBQUEsR0FBSXBDLEdBQUFBLEVBQVdvQyxFQUFBQSxDQUFBQTtBQUc3Q2pDLElBQU9PLE9BQVVQLEVBQU9PLElBQVN5SSxJQUFNcEosRUFBQUEsR0FFM0NBLEdBQVlhLEtBQUssU0FBQUcsSUFBQUE7QUFDaEIsUUFBQTtBQUVDaEIsTUFBQUEsS0FBY2dCLEdBQUMrRyxLQUNmL0csR0FBQytHLE1BQW9CLENBQUEsR0FDckIvSCxHQUFZYSxLQUFLLFNBQUF3SSxJQUFBQTtBQUVoQkEsUUFBQUEsR0FBR0MsS0FBS3RJLEVBQUFBO01BQ1QsQ0FBQTtJQUdELFNBRlNrRixJQUFBQTtBQUNSOUYsUUFBT2IsSUFBYTJHLElBQUdsRixHQUFDbEIsR0FBQUE7SUFDekI7RUFDRCxDQUFBO0FBQ0Q7QUFFQSxTQUFTOEksRUFBVVcsSUFBQUE7QUFDbEIsU0FBbUIsWUFBQSxPQUFSQSxNUjdXUSxRUTZXWUEsTUFBZ0JBLEdBQUl6RixNQUFVLElBQ3JEeUYsS0FHSjFGLEVBQVEwRixFQUFBQSxJQUNKQSxHQUFLQyxJQUFJWixDQUFBQSxJQUFBQSxXQUdiVyxHQUFLN0YsY0FBc0MsT0FFeEN2RCxFQUFPLENBQUUsR0FBRW9KLEVBQUFBO0FBQ25CO0FBaUJBLFNBQVNMLEVBQ1JqRSxJQUNBL0UsSUFDQUwsSUFDQW9DLElBQ0FDLElBQ0FDLElBQ0FuQyxJQUNBb0MsSUFDQW5DLElBQUFBO0FBVEQsTUFlS29DLElBRUFvSCxJQUVBQyxJQUVBQyxJQUNBOUUsSUFDQStFLElBQ0FDLElBYkFqRCxLQUFXL0csR0FBU25CLFNBQVNxRSxHQUM3QmlFLEtBQVc5RyxHQUFTeEIsT0FDcEIyRixLQUFrQ25FLEdBQVNWO0FBa0IvQyxNQUpnQixTQUFaNkUsS0FBbUJuQyxLUnhhSywrQlF5YVAsVUFBWm1DLEtBQW9CbkMsS1J2YUEsdUNRd2FuQkEsT0FBV0EsS1J6YVMsaUNBR1gsUVF3YWZDO0FBQ0gsU0FBS0UsS0FBSSxHQUFHQSxLQUFJRixHQUFrQjdDLFFBQVErQyxLQU16QyxNQUxBd0MsS0FBUTFDLEdBQWtCRSxFQUFBQSxNQU96QixrQkFBa0J3QyxNQUFBQSxDQUFBQSxDQUFXUixPQUM1QkEsS0FBV1EsR0FBTWlGLGFBQWF6RixLQUE2QixLQUFsQlEsR0FBTVIsV0FDL0M7QUFDRFksTUFBQUEsS0FBTUosSUFDTjFDLEdBQWtCRSxFQUFBQSxJUnJiRjtBUXNiaEI7SUFDRDs7QUFJRixNUjNibUIsUVEyYmY0QyxJQUFhO0FBQ2hCLFFSNWJrQixRUTRiZFosR0FDSCxRQUFPMEYsU0FBU0MsZUFBZWhELEVBQUFBO0FBR2hDL0IsSUFBQUEsS0FBTThFLFNBQVNFLGdCQUNkL0gsSUFDQW1DLElBQ0EyQyxHQUFTa0QsTUFBTWxELEVBQUFBLEdBS1o1RSxPQUNDaEMsRUFBTytKLE9BQ1YvSixFQUFPK0osSUFBb0JqSyxJQUFVaUMsRUFBQUEsR0FDdENDLEtBQUFBLFFBR0RELEtSOWNrQjtFUStjbkI7QUFFQSxNUmpkbUIsUVFpZGZrQyxHQUVDdUMsQ0FBQUEsT0FBYUksTUFBYzVFLE1BQWU2QyxHQUFJbUYsUUFBUXBELE9BQ3pEL0IsR0FBSW1GLE9BQU9wRDtPQUVOO0FBVU4sUUFSQTdFLEtBQ2EsY0FBWmtDLE1SemRpQixRUXlkUzJDLEdBQVNxRCxlUnpkbEIsT1EyZGRsSSxNQUFxQndELEVBQU0yRCxLQUFLckUsR0FBSXFGLFVBQUFBLEdBQUFBLENBS25DbEksTVJoZWEsUVFnZUVELEdBRW5CLE1BREF5RSxLQUFXLENBQUEsR0FDTnZFLEtBQUksR0FBR0EsS0FBSTRDLEdBQUlzRixXQUFXakwsUUFBUStDLEtBRXRDdUUsQ0FBQUEsSUFEQS9CLEtBQVFJLEdBQUlzRixXQUFXbEksRUFBQUEsR0FDUjZDLElBQUFBLElBQVFMLEdBQU1BO0FBSS9CLFNBQUt4QyxNQUFLdUUsR0FDVC9CLENBQUFBLEtBQVErQixHQUFTdkUsRUFBQUEsR0FDUiw2QkFBTEEsS0FDSHFILEtBQVU3RSxLQUVMLGNBQUx4QyxNQUNFQSxNQUFLMkUsTUFDQSxXQUFMM0UsTUFBZ0Isa0JBQWtCMkUsTUFDN0IsYUFBTDNFLE1BQWtCLG9CQUFvQjJFLE1BRXhDbEMsRUFBWUcsSUFBSzVDLElSbGZELE1Ra2ZVd0MsSUFBTzNDLEVBQUFBO0FBTW5DLFNBQUtHLE1BQUsyRSxHQUNUbkMsQ0FBQUEsS0FBUW1DLEdBQVMzRSxFQUFBQSxHQUNSLGNBQUxBLEtBQ0hzSCxLQUFjOUUsS0FDQyw2QkFBTHhDLEtBQ1ZvSCxLQUFVNUUsS0FDSyxXQUFMeEMsS0FDVnVILEtBQWEvRSxLQUNFLGFBQUx4QyxLQUNWd0gsS0FBVWhGLEtBRVJ6QyxNQUErQixjQUFBLE9BQVR5QyxNQUN4QitCLEdBQVN2RSxFQUFBQSxNQUFPd0MsTUFFaEJDLEVBQVlHLElBQUs1QyxJQUFHd0MsSUFBTytCLEdBQVN2RSxFQUFBQSxHQUFJSCxFQUFBQTtBQUsxQyxRQUFJdUgsR0FHRHJILENBQUFBLE1BQ0NzSCxPQUNBRCxHQUFPZSxVQUFXZCxHQUFPYyxVQUFXZixHQUFPZSxVQUFXdkYsR0FBSXdGLGVBRTVEeEYsR0FBSXdGLFlBQVloQixHQUFPZSxTQUd4QnRLLEdBQVFiLE1BQWEsQ0FBQTthQUVqQnFLLE9BQVN6RSxHQUFJd0YsWUFBWSxLQUU3QjdJLEVBRWtCLGNBQWpCMUIsR0FBU1YsT0FBcUJ5RixHQUFJeUYsVUFBVXpGLElBQzVDcEIsRUFBUThGLEVBQUFBLElBQWVBLEtBQWMsQ0FBQ0EsRUFBQUEsR0FDdEN6SixJQUNBTCxJQUNBb0MsSUFDWSxtQkFBWm9DLEtSbmlCMkIsaUNRbWlCcUJuQyxJQUNoREMsSUFDQW5DLElBQ0FtQyxLQUNHQSxHQUFrQixDQUFBLElBQ2xCdEMsR0FBUVIsT0FBY04sRUFBY2MsSUFBVSxDQUFBLEdBQ2pEdUMsSUFDQW5DLEVBQUFBLEdSdmlCZ0IsUVEyaUJia0MsR0FDSCxNQUFLRSxLQUFJRixHQUFrQjdDLFFBQVErQyxPQUNsQzJHLEdBQVc3RyxHQUFrQkUsRUFBQUEsQ0FBQUE7QUFNM0JELElBQUFBLE1BQTJCLGNBQVppQyxPQUNuQmhDLEtBQUksU0FDWSxjQUFaZ0MsTVJyakJhLFFRcWpCYXVGLEtBQzdCM0UsR0FBSWtCLGdCQUFnQixPQUFBLElScmpCQ3dFLFFRdWpCckJmLE9BS0NBLE9BQWUzRSxHQUFJNUMsRUFBQUEsS0FDTixjQUFaZ0MsTUFBQUEsQ0FBMkJ1RixNQUlmLFlBQVp2RixNQUF3QnVGLE1BQWNoRCxHQUFTdkUsRUFBQUEsTUFFakR5QyxFQUFZRyxJQUFLNUMsSUFBR3VILElBQVloRCxHQUFTdkUsRUFBQUEsR0FBSUgsRUFBQUEsR0FHOUNHLEtBQUksV1J0a0JrQnNJLFFRdWtCbEJkLE1BQXdCQSxNQUFXNUUsR0FBSTVDLEVBQUFBLEtBQzFDeUMsRUFBWUcsSUFBSzVDLElBQUd3SCxJQUFTakQsR0FBU3ZFLEVBQUFBLEdBQUlILEVBQUFBO0VBRzdDO0FBRUEsU0FBTytDO0FBQ1I7QUFRZ0IsU0FBQWhDLEVBQVNELElBQUs2QixJQUFPN0YsSUFBQUE7QUFDcEMsTUFBQTtBQUNDLFFBQWtCLGNBQUEsT0FBUGdFLElBQW1CO0FBQzdCLFVBQUk0SCxLQUF1QyxjQUFBLE9BQWhCNUgsR0FBR3hDO0FBQzFCb0ssTUFBQUEsTUFFSDVILEdBQUd4QyxJQUFBQSxHQUdDb0ssTVJobUJZLFFRZ21CSy9GLE9BSXJCN0IsR0FBR3hDLE1BQVl3QyxHQUFJNkIsRUFBQUE7SUFFckIsTUFBTzdCLENBQUFBLEdBQUk2SCxVQUFVaEc7RUFHdEIsU0FGU3FCLElBQUFBO0FBQ1I5RixNQUFPYixJQUFhMkcsSUFBR2xILEVBQUFBO0VBQ3hCO0FBQ0Q7QUFTZ0IsU0FBQWlGLEVBQVFqRixJQUFPa0YsSUFBYTRHLElBQUFBO0FBQTVCLE1BQ1hDLElBc0JNMUk7QUFiVixNQVJJakMsRUFBUTZELFdBQVM3RCxFQUFRNkQsUUFBUWpGLEVBQUFBLElBRWhDK0wsS0FBSS9MLEdBQU1nRSxTQUNUK0gsR0FBRUYsV0FBV0UsR0FBRUYsV0FBVzdMLEdBQUtPLE9BQ25DMEQsRUFBUzhILElSem5CUSxNUXluQkM3RyxFQUFBQSxJUnpuQkQsU1E2bkJkNkcsS0FBSS9MLEdBQUsyQixNQUFzQjtBQUNuQyxRQUFJb0ssR0FBRUMscUJBQ0wsS0FBQTtBQUNDRCxNQUFBQSxHQUFFQyxxQkFBQUE7SUFHSCxTQUZTOUUsSUFBQUE7QUFDUjlGLFFBQU9iLElBQWEyRyxJQUFHaEMsRUFBQUE7SUFDeEI7QUFHRDZHLElBQUFBLEdBQUVuSyxPQUFPbUssR0FBQ3BMLE1BQWNvTCxHQUFDekssTVJ0b0JQO0VRdW9CbkI7QUFFQSxNQUFLeUssS0FBSS9MLEdBQUtLLElBQ2IsTUFBU2dELEtBQUksR0FBR0EsS0FBSTBJLEdBQUV6TCxRQUFRK0MsS0FDekIwSSxDQUFBQSxHQUFFMUksRUFBQUEsS0FDTDRCLEVBQ0M4RyxHQUFFMUksRUFBQUEsR0FDRjZCLElBQ0E0RyxNQUFtQyxjQUFBLE9BQWQ5TCxHQUFNUSxJQUFBQTtBQU0xQnNMLEVBQUFBLE1BQ0o5QixFQUFXaEssR0FBS08sR0FBQUEsR0FHakJQLEdBQUsyQixNQUFjM0IsR0FBS0UsS0FBV0YsR0FBS08sTUFBQUE7QUFDekM7QUFHQSxTQUFTcUksRUFBU2xKLElBQU9vSixJQUFPakosSUFBQUE7QUFDL0IsU0FBQSxLQUFZNkUsWUFBWWhGLElBQU9HLEVBQUFBO0FBQ2hDO0FDbHFCZ0IsU0FBQTRJLEVBQU96SSxJQUFPNkMsSUFBV29KLElBQUFBO0FBQXpCLE1BV1g3SSxJQU9BdkMsSUFRQUcsSUFDSEM7QUF6Qkc0QixFQUFBQSxNQUFha0ksYUFDaEJsSSxLQUFZa0ksU0FBU21CLGtCQUdsQjlLLEVBQU9sQixNQUFRa0IsRUFBT2xCLEdBQU9GLElBQU82QyxFQUFBQSxHQVlwQ2hDLE1BUEF1QyxLQUFvQyxjQUFBLE9BQWY2SSxNVFJOLE9TaUJmQSxNQUFlQSxHQUFXNUwsT0FBZXdDLEdBQVN4QyxLQU1sRFcsS0FBYyxDQUFBLEdBQ2pCQyxLQUFXLENBQUEsR0FDWkksRUFDQ3dCLElBUEQ3QyxNQUFBQSxDQUFXb0QsTUFBZTZJLE1BQWdCcEosSUFBU3hDLE1BQ2xEOEwsRUFBYzFNLEdUcEJJLE1Tb0JZLENBQUNPLEVBQUFBLENBQUFBLEdBVS9CYSxNQUFZa0QsR0FDWkEsR0FDQWxCLEdBQVV0QixjQUFBQSxDQUNUNkIsTUFBZTZJLEtBQ2IsQ0FBQ0EsRUFBQUEsSUFDRHBMLEtUbkNlLE9TcUNkZ0MsR0FBVXVKLGFBQ1R6RixFQUFNMkQsS0FBS3pILEdBQVV5SSxVQUFBQSxJVHRDUixNU3dDbEJ0SyxJQUFBQSxDQUNDb0MsTUFBZTZJLEtBQ2JBLEtBQ0FwTCxLQUNDQSxHQUFRTixNQUNSc0MsR0FBVXVKLFlBQ2RoSixJQUNBbkMsRUFBQUEsR0FJRFEsRUFBV1QsSUFBYWhCLElBQU9pQixFQUFBQSxHQUcvQmpCLEdBQU1OLE1BQU1DLFdUdERPO0FTdURwQjtBSGxFZ0IsU0FBQTBNLEVBQWNDLElBQUFBO0FBQzdCLFdBQVNDLEdBQVFDLElBQUFBO0FBQWpCLFFBR01DLElBQ0FDO0FBK0JMLFdBbENLQyxLQUFLQyxvQkFFTEgsS0FBTyxvQkFBSUksUUFDWEgsS0FBTSxDQUFFLEdBQ1JILEdBQU9PLEdBQUFBLElBQVFILE1BRW5CQSxLQUFLQyxrQkFBa0IsV0FBQTtBQUFNLGFBQUFGO0lBQUcsR0FFaENDLEtBQUtJLHVCQUF1QixXQUFBO0FBQzNCTixNQUFBQSxLTkFnQjtJTUNqQixHQUVBRSxLQUFLSyx3QkFBd0IsU0FBVUMsSUFBQUE7QUFFbENOLFdBQUtILE1BQU1VLFNBQVNELEdBQU9DLFNBQzlCVCxHQUFLVSxRQUFRLFNBQUFDLElBQUFBO0FBQ1pBLFFBQUFBLEdBQUNDLE1BQUFBLE1BQ0RDLEVBQWNGLEVBQUFBO01BQ2YsQ0FBQTtJQUVGLEdBRUFULEtBQUtZLE1BQU0sU0FBQUgsSUFBQUE7QUFDVlgsTUFBQUEsR0FBS2UsSUFBSUosRUFBQUE7QUFDVCxVQUFJSyxLQUFNTCxHQUFFTDtBQUNaSyxNQUFBQSxHQUFFTCx1QkFBdUIsV0FBQTtBQUNwQk4sUUFBQUEsTUFDSEEsR0FBS2lCLE9BQU9OLEVBQUFBLEdBRVRLLE1BQUtBLEdBQUlFLEtBQUtQLEVBQUFBO01BQ25CO0lBQ0QsSUFHTVosR0FBTW9CO0VBQ2Q7QUFnQkEsU0FkQXJCLEdBQU9PLE1BQU8sU0FBU2UsS0FDdkJ0QixHQUFPdUIsS0FBaUJ4QixJQVF4QkMsR0FBUXdCLFdBQ1B4QixHQUFPeUIsT0FOUnpCLEdBQVEwQixXQUFXLFNBQUN6QixJQUFPMEIsSUFBQUE7QUFDMUIsV0FBTzFCLEdBQU1vQixTQUFTTSxFQUFBQTtFQUN2QixHQUtrQkMsY0FDaEI1QixJQUVLQTtBQUNSO0FMaENhNkIsSUFBUUMsRUFBVUQsT0NoQnpCRSxJQUFVLEVBQ2ZqQixLU0RNLFNBQXFCa0IsSUFBT0MsSUFBT0MsSUFBVUMsSUFBQUE7QUFRbkQsV0FOSUMsSUFFSEMsSUFFQUMsSUFFT0wsS0FBUUEsR0FBS1YsS0FDcEIsTUFBS2EsS0FBWUgsR0FBSzFCLFFBQUFBLENBQWlCNkIsR0FBU2IsR0FDL0MsS0FBQTtBQWNDLFNBYkFjLEtBQU9ELEdBQVVHLGdCWE5ELFFXUUpGLEdBQUtHLDZCQUNoQkosR0FBVUssU0FBU0osR0FBS0cseUJBQXlCUixFQUFBQSxDQUFBQSxHQUNqRE0sS0FBVUYsR0FBU00sTVhWSixRV2FaTixHQUFVTyxzQkFDYlAsR0FBVU8sa0JBQWtCWCxJQUFPRyxNQUFhLENBQUUsQ0FBQSxHQUNsREcsS0FBVUYsR0FBU00sTUFJaEJKLEdBQ0gsUUFBUUYsR0FBU1EsTUFBaUJSO0VBSXBDLFNBRlNTLElBQUFBO0FBQ1JiLElBQUFBLEtBQVFhO0VBQ1Q7QUFJRixRQUFNYjtBQUNQLEVBQUEsR1J6Q0ljLElBQVUsR0EyRkRDLElBQWlCLFNBQUFkLElBQUFBO0FBQUssU0gvRWYsUUdnRm5CQSxNQUFBQSxXQUFpQkEsR0FBTU07QUFBeUIsR0NyRWpEUyxFQUFjQyxVQUFVUixXQUFXLFNBQVVTLElBQVFDLElBQUFBO0FBRXBELE1BQUlDO0FBRUhBLEVBQUFBLEtKZmtCLFFJY2ZoRCxLQUFJaUQsT0FBdUJqRCxLQUFJaUQsT0FBZWpELEtBQUtrRCxRQUNsRGxELEtBQUlpRCxNQUVKakQsS0FBSWlELE1BQWNFLEVBQU8sQ0FBQSxHQUFJbkQsS0FBS2tELEtBQUFBLEdBR2xCLGNBQUEsT0FBVkosT0FHVkEsS0FBU0EsR0FBT0ssRUFBTyxDQUFFLEdBQUVILEVBQUFBLEdBQUloRCxLQUFLSCxLQUFBQSxJQUdqQ2lELE1BQ0hLLEVBQU9ILElBQUdGLEVBQUFBLEdKM0JRLFFJK0JmQSxNQUVBOUMsS0FBSW9ELFFBQ0hMLE1BQ0gvQyxLQUFJcUQsSUFBaUJDLEtBQUtQLEVBQUFBLEdBRTNCcEMsRUFBY1gsSUFBQUE7QUFFaEIsR0FRQTRDLEVBQWNDLFVBQVVVLGNBQWMsU0FBVVIsSUFBQUE7QUFDM0MvQyxPQUFJb0QsUUFJUHBELEtBQUlVLE1BQUFBLE1BQ0FxQyxNQUFVL0MsS0FBSXdELElBQWtCRixLQUFLUCxFQUFBQSxHQUN6Q3BDLEVBQWNYLElBQUFBO0FBRWhCLEdBWUE0QyxFQUFjQyxVQUFVWSxTQUFTQyxHQTRGN0JDLElBQWdCLENBQUEsR0FhZEMsSUFDYSxjQUFBLE9BQVhDLFVBQ0pBLFFBQVFoQixVQUFVaUIsS0FBS0MsS0FBS0YsUUFBUUcsUUFBQUEsQ0FBQUEsSUFDcENDLFlBdUJFQyxJQUFZLFNBQUNDLElBQUdDLElBQUFBO0FBQUFBLFNBQU1ELEdBQUNmLElBQUFpQixNQUFpQkQsR0FBQ2hCLElBQUFpQjtBQUFjLEdBK0I3REMsRUFBT0MsTUFBa0IsR0M1T3JCQyxJQUFNQyxLQUFLQyxPQUFBQSxFQUFTQyxTQUFTLENBQUEsR0FDaENDLElBQW1CLFFBQVFKLEdBQzNCSyxJQUFpQixRQUFRTCxHQWNwQk0sSUFBZ0IsK0JBYWxCQyxJQUFhLEdBK0lYQyxJQUFhQyxFQUFBQSxLQUFpQixHQUM5QkMsSUFBb0JELEVBQUFBLElBQWlCLEdDcExoQy9ELElBQUk7OztBTUVSLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sMEJBQTBCO0FBQ2hDLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sMEJBQTBCO0FBQ2hDLElBQU0sa0JBQWtCLEtBQUssS0FBSztBQUNsQyxJQUFNLFVBQVUsSUFBSSxZQUFXO0FBNEJ0QyxJQUFJLE9BQWtCLGtCQUFpQjtBQUN2QyxJQUFJLG9CQUFvQjtBQUN4QixJQUFNLGdCQUFnQixvQkFBSSxJQUFHO0FBTXZCLFNBQVUsUUFBUSxPQUFnQjtBQUN0QyxTQUFPO0FBQ1Q7QUFFTSxTQUFVLHVCQUFvQjtBQUNsQyxTQUFPO0FBQ1Q7QUFFTSxTQUFVLHFCQUFxQixPQUFjO0FBQ2pELHNCQUFvQjtBQUN0QjtBQVVNLFNBQVUsV0FBUTtBQUN0QixhQUFXLFlBQVksZUFBZTtBQUNwQyxhQUFTLElBQUk7RUFDZjtBQUNGO0FBRU0sU0FBVSx1QkFBdUIsT0FBYztBQUNuRCxRQUFNLFFBQVEsT0FBTyxTQUFTLEVBQUUsRUFBRSxRQUFRLFNBQVMsRUFBRTtBQUNyRCxTQUFPLFVBQVUsTUFBTSxLQUFLO0FBQzlCO0FBRU0sU0FBVSxXQUFRO0FBQ3RCLFNBQU8sdUJBQXdCLE9BQTBELHlCQUF5QixFQUFFO0FBQ3RIO0FBRU0sU0FBVSxhQUFVO0FBQ3hCLFNBQVEsT0FBcUUsb0JBQW9CLENBQUE7QUFDbkc7QUFFTSxTQUFVLFlBQVksTUFBYTtBQUN2QyxTQUNFLE9BQU8sUUFBUSxPQUFPLEVBQ25CLFFBQVEsV0FBVyxFQUFFLEVBQ3JCLEtBQUksRUFDSixRQUFRLHFCQUFxQixHQUFHLEVBQ2hDLFFBQVEsWUFBWSxFQUFFLEVBQ3RCLFlBQVcsS0FBTTtBQUV4QjtBQUVNLFNBQVUsY0FBYyxNQUFhO0FBQ3pDLFNBQU8sWUFBWSxJQUFJLEVBQ3BCLE1BQU0sVUFBVSxFQUNoQixPQUFPLE9BQU8sRUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLFlBQVcsS0FBTSxFQUFFLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQy9ELEtBQUssR0FBRztBQUNiO0FBRU0sU0FBVSxnQkFBZ0IsTUFBYTtBQUMzQyxRQUFNLFlBQVksWUFBWSxJQUFJO0FBQ2xDLFNBQU87SUFDTCxhQUFhLGNBQWMsU0FBUztJQUNwQyxpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRLFNBQVMsU0FBUzs7QUFFOUI7QUFFTSxTQUFVLGdCQUFnQixPQUFrQixXQUFrQjtBQUNsRSxTQUFPLEVBQUUsR0FBRyxPQUFPLFVBQVM7QUFDOUI7QUFFTSxTQUFVLGlCQUFjO0FBQzVCLE1BQUksT0FBTyxXQUFXLGFBQWE7QUFDakMsV0FBTztFQUNUO0FBRUEsTUFBSTtBQUNGLFdBQU8sT0FBTztFQUNoQixRQUFRO0FBQ04sV0FBTztFQUNUO0FBQ0Y7QUFFTSxTQUFVLHdCQUFxQjtBQUNuQyxNQUFJLE9BQU8sV0FBVyxhQUFhO0FBQ2pDLFdBQU87RUFDVDtBQUVBLE1BQUk7QUFDRixXQUFPLE9BQU87RUFDaEIsUUFBUTtBQUNOLFdBQU87RUFDVDtBQUNGO0FBRU0sU0FBVSxtQkFBZ0I7QUFDOUIsTUFBSSxPQUFPLFdBQVcsYUFBYTtBQUNqQyxXQUFPO0VBQ1Q7QUFFQSxTQUFPLElBQUksZ0JBQWdCLE9BQU8sU0FBUyxNQUFNLEVBQUUsSUFBSSxlQUFlLEtBQUs7QUFDN0U7QUFFTSxTQUFVLFVBQVUsT0FBb0I7QUFDNUMsTUFBSTtBQUNGLFdBQU8sS0FBSyxNQUFNLEtBQWU7RUFDbkMsUUFBUTtBQUNOLFdBQU87RUFDVDtBQUNGO0FBRU0sU0FBVSxnQkFBZ0IsT0FBYTtBQUMzQyxRQUFNLGFBQWEsTUFBTSxRQUFRLE1BQU0sR0FBRyxFQUFFLFFBQVEsTUFBTSxHQUFHO0FBQzdELFFBQU0sU0FBUyxXQUFXLE9BQU8sS0FBSyxLQUFLLFdBQVcsU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHO0FBQzFFLFNBQU8sS0FBSyxNQUFNO0FBQ3BCO0FBRU0sU0FBVSxxQkFBcUIsU0FBa0M7QUFDckUsTUFBSSxDQUFDLFNBQVM7QUFDWixXQUFPO0VBQ1Q7QUFFQSxRQUFNLFFBQVEsUUFBUSxNQUFNLEdBQUc7QUFDL0IsTUFBSSxNQUFNLFNBQVMsR0FBRztBQUNwQixXQUFPO0VBQ1Q7QUFFQSxTQUFPLFVBQVUsZ0JBQWdCLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUM7QUFFTSxTQUFVLGdCQUFnQixRQUE2QjtBQUMzRCxTQUFPLE9BQU8sUUFBUSxRQUFRLFlBQVksT0FBTyxNQUFNLE9BQVEsS0FBSyxJQUFHO0FBQ3pFO0FBUU0sU0FBVSxtQkFBbUIsRUFBRSxlQUFlLE1BQUssSUFBaUMsQ0FBQSxHQUFFO0FBQzFGLFFBQU0sVUFBVSxlQUFjO0FBQzlCLE1BQUksQ0FBQyxTQUFTO0FBQ1osV0FBTyxFQUFFLFFBQVEsS0FBSTtFQUN2QjtBQUVBLE1BQUksTUFBcUI7QUFDekIsTUFBSTtBQUNGLFVBQU0sUUFBUSxRQUFRLGdCQUFnQixLQUFLLFFBQVEsUUFBUSx1QkFBdUI7RUFDcEYsUUFBUTtBQUNOLFdBQU8sRUFBRSxRQUFRLEtBQUk7RUFDdkI7QUFFQSxNQUFJLENBQUMsS0FBSztBQUNSLFdBQU8sRUFBRSxRQUFRLEtBQUk7RUFDdkI7QUFFQSxRQUFNLFNBQVMsVUFBVSxHQUFHO0FBQzVCLE1BQUksQ0FBQyxVQUFVLE9BQU8sV0FBVyxVQUFVO0FBQ3pDLFdBQU8sRUFBRSxRQUFRLEtBQUk7RUFDdkI7QUFFQSxRQUFNLFFBQVEsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLFFBQVE7QUFDaEUsUUFBTSxTQUFTLHFCQUFxQixLQUFLO0FBQ3pDLFFBQU0sVUFBVSxnQkFBZ0IsTUFBTTtBQUN0QyxNQUFJLFdBQVcsQ0FBQyxjQUFjO0FBQzVCLFdBQU8sRUFBRSxTQUFTLFFBQVEsS0FBSTtFQUNoQztBQUVBLFNBQU87SUFDTDtJQUNBO0lBQ0EsUUFDRSxPQUFPLE9BQU8sV0FBVyxXQUNyQixPQUFPLFNBQ1AsT0FBTyxPQUFPLGdCQUFnQixXQUM1QixPQUFPLGNBQ1A7O0FBRVo7QUFFTSxTQUFVLGtCQUFlO0FBQzdCLFNBQU8sbUJBQWtCLEVBQUcsU0FBUztBQUN2QztBQUVNLFNBQVUsMEJBQTBCLE9BQWdDO0FBQ3hFLFFBQU0sU0FBUyxxQkFBcUIsS0FBSztBQUN6QyxRQUFNLGNBQWMsUUFBUSxnQkFBZ0IsUUFBUTtBQUNwRCxNQUFJLENBQUMsYUFBYTtBQUNoQixXQUFPO0VBQ1Q7QUFFQSxRQUFNLGNBQ0osT0FBTyxPQUFRLFNBQVMsWUFBYSxPQUFRLEtBQWdCLEtBQUksSUFBTSxPQUFRLEtBQWdCLEtBQUksSUFBSztBQUMxRyxTQUFPO0lBQ0w7SUFDQSxPQUFPLE9BQU8sT0FBUSxVQUFVLFdBQVcsT0FBUSxRQUFRO0lBQzNELGVBQWUsT0FBTyxPQUFRLG1CQUFtQixZQUFZLE9BQVEsaUJBQWlCO0lBQ3RGLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsU0FBUyxPQUFPLE9BQVEsWUFBWSxXQUFXLE9BQVEsVUFBVTtJQUNqRSxVQUFVO0lBQ1YsUUFBUSxVQUFVLFdBQVc7O0FBRWpDO0FBRU0sU0FBVSxvQkFBaUI7QUFDL0IsUUFBTSxRQUFRLGdCQUFlO0FBQzdCLFFBQU0sYUFBYSwwQkFBMEIsS0FBSztBQUNsRCxNQUFJLFlBQVk7QUFDZCxXQUFPLGdCQUFnQixZQUFZLElBQUk7RUFDekM7QUFFQSxTQUFPLGdCQUFnQixnQkFBZ0IsaUJBQWdCLENBQUUsR0FBRyxPQUFPLFdBQVcsV0FBVztBQUMzRjs7O0FDclFBLElBQUlpRTtBQUFKLElBR0lDO0FBSEosSUFNSUM7QUFOSixJQTRCSUM7QUE1QkosSUFTSUMsS0FBYztBQVRsQixJQVlJQyxLQUFvQixDQUFBO0FBWnhCLElBZU1DLEtBQXVEQztBQWY3RCxJQWlCSUMsS0FBZ0JGLEdBQU9HO0FBakIzQixJQWtCSUMsS0FBa0JKLEdBQU9LO0FBbEI3QixJQW1CSUMsS0FBZU4sR0FBUU87QUFuQjNCLElBb0JJQyxLQUFZUixHQUFPUztBQXBCdkIsSUFxQklDLEtBQW1CVixHQUFRVztBQXJCL0IsSUFzQklDLEtBQVVaLEdBQU9hO0FBaUhyQixTQUFTQyxHQUFhQyxJQUFPQyxJQUFBQTtBQUN4QmhCLEVBQUFBLEdBQU9pQixPQUNWakIsR0FBT2lCLElBQU90QixJQUFrQm9CLElBQU9qQixNQUFla0IsRUFBQUEsR0FFdkRsQixLQUFjO0FBT2QsTUFBTW9CLEtBQ0x2QixHQUFnQndCLFFBQ2Z4QixHQUFnQndCLE1BQVcsRUFDM0JOLElBQU8sQ0FBQSxHQUNQSSxLQUFpQixDQUFBLEVBQUE7QUFPbkIsU0FKSUYsTUFBU0csR0FBS0wsR0FBT08sVUFDeEJGLEdBQUtMLEdBQU9RLEtBQUssQ0FBQSxDQUFBLEdBR1hILEdBQUtMLEdBQU9FLEVBQUFBO0FBQ3BCO0FBT2dCLFNBQUFPLEdBQVNDLElBQUFBO0FBRXhCLFNBREF6QixLQUFjLEdBQ1AwQixHQUFXQyxJQUFnQkYsRUFBQUE7QUFDbkM7QUFVTyxTQUFTQyxHQUFXRSxJQUFTSCxJQUFjSSxJQUFBQTtBQUVqRCxNQUFNQyxLQUFZZCxHQUFhcEIsTUFBZ0IsQ0FBQTtBQUUvQyxNQURBa0MsR0FBVUMsSUFBV0gsSUFBQUEsQ0FDaEJFLEdBQVNuQixRQUNibUIsR0FBU2YsS0FBVSxDQUNqQmMsS0FBaURBLEdBQUtKLEVBQUFBLElBQS9DRSxHQUFBQSxRQUEwQkYsRUFBQUEsR0FFbEMsU0FBQU8sSUFBQUE7QUFDQyxRQUFNQyxLQUFlSCxHQUFTSSxNQUMzQkosR0FBU0ksSUFBWSxDQUFBLElBQ3JCSixHQUFTZixHQUFRLENBQUEsR0FDZG9CLEtBQVlMLEdBQVVDLEVBQVNFLElBQWNELEVBQUFBO0FBRS9DQyxJQUFBQSxPQUFpQkUsT0FDcEJMLEdBQVNJLE1BQWMsQ0FBQ0MsSUFBV0wsR0FBU2YsR0FBUSxDQUFBLENBQUEsR0FDcERlLEdBQVNuQixJQUFZeUIsU0FBUyxDQUFBLENBQUE7RUFFaEMsQ0FBQSxHQUdETixHQUFTbkIsTUFBY2QsSUFBQUEsQ0FFbEJBLEdBQWdCd0MsTUFBbUI7QUFBQSxRQWdDOUJDLEtBQVQsU0FBeUJDLElBQUdDLElBQUdDLElBQUFBO0FBQzlCLFVBQUEsQ0FBS1gsR0FBU25CLElBQUFVLElBQXFCLFFBQUE7QUFLbkMsVUFBSXFCLEtBQUFBLE9BQ0FDLEtBQWViLEdBQVNuQixJQUFZaUMsVUFBVUw7QUFXbEQsVUFWQVQsR0FBU25CLElBQUFVLElBQUFOLEdBQTBCOEIsS0FBSyxTQUFBQyxJQUFBQTtBQUN2QyxZQUFJQSxHQUFRWixLQUFhO0FBQ3hCUSxVQUFBQSxLQUFBQTtBQUNBLGNBQU1ULEtBQWVhLEdBQVEvQixHQUFRLENBQUE7QUFDckMrQixVQUFBQSxHQUFRL0IsS0FBVStCLEdBQVFaLEtBQzFCWSxHQUFRWixNQUFBQSxRQUNKRCxPQUFpQmEsR0FBUS9CLEdBQVEsQ0FBQSxNQUFJNEIsS0FBQUE7UUFDMUM7TUFDRCxDQUFBLEdBRUlJLElBQVM7QUFDWixZQUFNQyxLQUFTRCxHQUFRRSxLQUFLQyxNQUFNWCxJQUFHQyxJQUFHQyxFQUFBQTtBQUN4QyxlQUFPQyxLQUFjTSxNQUFVTCxLQUFlSztNQUMvQztBQUVBLGFBQUEsQ0FBUU4sTUFBZUM7SUFDeEI7QUF2REE5QyxJQUFBQSxHQUFnQndDLE1BQUFBO0FBQ2hCLFFBQUlVLEtBQVVsRCxHQUFpQnNELHVCQUN6QkMsS0FBVXZELEdBQWlCd0Q7QUFLakN4RCxJQUFBQSxHQUFpQndELHNCQUFzQixTQUFVZCxJQUFHQyxJQUFHQyxJQUFBQTtBQUN0RCxVQUFJUyxLQUFJSSxLQUFTO0FBQ2hCLFlBQUlDLEtBQU1SO0FBRVZBLFFBQUFBLEtBQUFBLFFBQ0FULEdBQWdCQyxJQUFHQyxJQUFHQyxFQUFBQSxHQUN0Qk0sS0FBVVE7TUFDWDtBQUVJSCxNQUFBQSxNQUFTQSxHQUFRSCxLQUFLQyxNQUFNWCxJQUFHQyxJQUFHQyxFQUFBQTtJQUN2QyxHQXdDQTVDLEdBQWlCc0Qsd0JBQXdCYjtFQUMxQztBQUdELFNBQU9SLEdBQVNJLE9BQWVKLEdBQVNmO0FBQ3pDO0FBT2dCLFNBQUF5QyxHQUFVQyxJQUFVQyxJQUFBQTtBQUVuQyxNQUFNQyxLQUFRM0MsR0FBYXBCLE1BQWdCLENBQUE7QUFBQSxHQUN0Q00sR0FBTzBELE9BQWlCQyxHQUFZRixHQUFLdEMsS0FBUXFDLEVBQUFBLE1BQ3JEQyxHQUFLNUMsS0FBVTBDLElBQ2ZFLEdBQU1HLElBQWVKLElBRXJCN0QsR0FBZ0J3QixJQUFBRixJQUF5QkksS0FBS29DLEVBQUFBO0FBRWhEO0FBbUJPLFNBQVNJLEdBQU9DLElBQUFBO0FBRXRCLFNBREFDLEtBQWMsR0FDUEMsR0FBUSxXQUFBO0FBQU8sV0FBQSxFQUFFQyxTQUFTSCxHQUFBQTtFQUFjLEdBQUcsQ0FBQSxDQUFBO0FBQ25EO0FBaUNPLFNBQVNJLEdBQVFDLElBQVNDLElBQUFBO0FBRWhDLE1BQU1DLEtBQVFDLEdBQWFDLE1BQWdCLENBQUE7QUFPM0MsU0FOSUMsR0FBWUgsR0FBS0ksS0FBUUwsRUFBQUEsTUFDNUJDLEdBQUtLLEtBQVVQLEdBQUFBLEdBQ2ZFLEdBQUtJLE1BQVNMLElBQ2RDLEdBQUtNLE1BQVlSLEtBR1hFLEdBQUtLO0FBQ2I7QUFlTyxTQUFTRSxHQUFXQyxJQUFBQTtBQUMxQixNQUFNQyxLQUFXQyxHQUFpQkYsUUFBUUEsR0FBT0csR0FBQUEsR0FLM0NDLEtBQVFDLEdBQWFDLE1BQWdCLENBQUE7QUFLM0MsU0FEQUYsR0FBS0csSUFBWVAsSUFDWkMsTUFFZSxRQUFoQkcsR0FBS0ksT0FDUkosR0FBS0ksS0FBQUEsTUFDTFAsR0FBU1EsSUFBSVAsRUFBQUEsSUFFUEQsR0FBU1MsTUFBTUMsU0FOQVgsR0FBT1E7QUFPOUI7QUEyREEsU0FBU0ksS0FBQUE7QUFFUixXQURJQyxJQUNJQSxLQUFZQyxHQUFrQkMsTUFBQUEsS0FBVTtBQUMvQyxRQUFNQyxLQUFRSCxHQUFTSTtBQUN2QixRQUFLSixHQUFTSyxPQUFnQkYsR0FDOUIsS0FBQTtBQUNDQSxNQUFBQSxHQUFLRyxJQUFpQkMsS0FBS0MsRUFBQUEsR0FDM0JMLEdBQUtHLElBQWlCQyxLQUFLRSxFQUFBQSxHQUMzQk4sR0FBS0csTUFBbUIsQ0FBQTtJQUl6QixTQUhTSSxJQUFBQTtBQUNSUCxNQUFBQSxHQUFLRyxNQUFtQixDQUFBLEdBQ3hCSyxHQUFPQyxJQUFhRixJQUFHVixHQUFTYSxHQUFBQTtJQUNqQztFQUNEO0FBQ0Q7QUFwYUFGLEdBQU9HLE1BQVMsU0FBQUMsSUFBQUE7QUFDZkMsRUFBQUEsS0FBbUIsTUFDZkMsTUFBZUEsR0FBY0YsRUFBQUE7QUFDbEMsR0FFQUosR0FBT08sS0FBUyxTQUFDSCxJQUFPSSxJQUFBQTtBQUNuQkosRUFBQUEsTUFBU0ksR0FBU0MsT0FBY0QsR0FBU0MsSUFBQUMsUUFDNUNOLEdBQUtNLE1BQVNGLEdBQVNDLElBQUFDLE1BR3BCQyxNQUFTQSxHQUFRUCxJQUFPSSxFQUFBQTtBQUM3QixHQUdBUixHQUFPWSxNQUFXLFNBQUFSLElBQUFBO0FBQ2JTLEVBQUFBLE1BQWlCQSxHQUFnQlQsRUFBQUEsR0FHckNVLEtBQWU7QUFFZixNQUFNdEIsTUFITmEsS0FBbUJELEdBQUtXLEtBR010QjtBQUMxQkQsRUFBQUEsT0FDQ3dCLE9BQXNCWCxNQUN6QmIsR0FBS0csTUFBbUIsQ0FBQSxHQUN4QlUsR0FBZ0JWLE1BQW9CLENBQUEsR0FDcENILEdBQUtlLEdBQU9YLEtBQUssU0FBQXFCLElBQUFBO0FBQ1pBLElBQUFBLEdBQVFDLFFBQ1hELEdBQVFWLEtBQVVVLEdBQVFDLE1BRTNCRCxHQUFTRSxJQUFlRixHQUFRQyxNQUFBQTtFQUNqQyxDQUFBLE1BRUExQixHQUFLRyxJQUFpQkMsS0FBS0MsRUFBQUEsR0FDM0JMLEdBQUtHLElBQWlCQyxLQUFLRSxFQUFBQSxHQUMzQk4sR0FBS0csTUFBbUIsQ0FBQSxHQUN4Qm1CLEtBQWUsS0FHakJFLEtBQW9CWDtBQUNyQixHQUdBTCxHQUFRb0IsU0FBUyxTQUFBaEIsSUFBQUE7QUFDWmlCLEVBQUFBLE1BQWNBLEdBQWFqQixFQUFBQTtBQUUvQixNQUFNa0IsS0FBSWxCLEdBQUtXO0FBQ1hPLEVBQUFBLE1BQUtBLEdBQUM3QixRQUNMNkIsR0FBQzdCLElBQUFFLElBQXlCNEIsV0EwWlIsTUExWjJCakMsR0FBa0JrQyxLQUFLRixFQUFBQSxLQTBaN0NHLE9BQVl6QixHQUFRMEIsMkJBQy9DRCxLQUFVekIsR0FBUTBCLDBCQUNOQyxJQUFnQnZDLEVBQUFBLElBM1o1QmtDLEdBQUM3QixJQUFBYyxHQUFlWCxLQUFLLFNBQUFxQixJQUFBQTtBQUNoQkEsSUFBQUEsR0FBU0UsTUFDWkYsR0FBUXhCLE1BQVN3QixHQUFTRSxHQUMxQkYsR0FBU0UsSUFBQUE7RUFFWCxDQUFBLElBRURILEtBQW9CWCxLQUFtQjtBQUN4QyxHQUlBTCxHQUFPZSxNQUFXLFNBQUNYLElBQU93QixJQUFBQTtBQUN6QkEsRUFBQUEsR0FBWWhDLEtBQUssU0FBQVAsSUFBQUE7QUFDaEIsUUFBQTtBQUNDQSxNQUFBQSxHQUFTTSxJQUFrQkMsS0FBS0MsRUFBQUEsR0FDaENSLEdBQVNNLE1BQW9CTixHQUFTTSxJQUFrQmtDLE9BQU8sU0FBQUMsSUFBQUE7QUFDOUQsZUFBQSxDQUFBQSxHQUFFdkIsTUFBVVQsR0FBYWdDLEVBQUFBO01BQVUsQ0FBQTtJQVFyQyxTQU5TL0IsSUFBQUE7QUFDUjZCLE1BQUFBLEdBQVloQyxLQUFLLFNBQUEwQixJQUFBQTtBQUNaQSxRQUFBQSxHQUFDM0IsUUFBbUIyQixHQUFDM0IsTUFBb0IsQ0FBQTtNQUM5QyxDQUFBLEdBQ0FpQyxLQUFjLENBQUEsR0FDZDVCLEdBQU9DLElBQWFGLElBQUdWLEdBQVNhLEdBQUFBO0lBQ2pDO0VBQ0QsQ0FBQSxHQUVJNkIsTUFBV0EsR0FBVTNCLElBQU93QixFQUFBQTtBQUNqQyxHQUdBNUIsR0FBUWdDLFVBQVUsU0FBQTVCLElBQUFBO0FBQ2I2QixFQUFBQSxNQUFrQkEsR0FBaUI3QixFQUFBQTtBQUV2QyxNQUVLOEIsSUFGQ1osS0FBSWxCLEdBQUtXO0FBQ1hPLEVBQUFBLE1BQUtBLEdBQUM3QixRQUVUNkIsR0FBQzdCLElBQUFjLEdBQWVYLEtBQUssU0FBQXVDLElBQUFBO0FBQ3BCLFFBQUE7QUFDQ3RDLE1BQUFBLEdBQWNzQyxFQUFBQTtJQUdmLFNBRlNwQyxJQUFBQTtBQUNSbUMsTUFBQUEsS0FBYW5DO0lBQ2Q7RUFDRCxDQUFBLEdBQ0F1QixHQUFDN0IsTUFBQUEsUUFDR3lDLE1BQVlsQyxHQUFPQyxJQUFhaUMsSUFBWVosR0FBQ3BCLEdBQUFBO0FBRW5EO0FBc1VBLElBQUlrQyxLQUEwQyxjQUFBLE9BQXpCVjtBQVlyQixTQUFTQyxHQUFlVSxJQUFBQTtBQUN2QixNQU9JQyxJQVBFQyxLQUFPLFdBQUE7QUFDWkMsaUJBQWFDLEVBQUFBLEdBQ1RMLE1BQVNNLHFCQUFxQkosRUFBQUEsR0FDbENLLFdBQVdOLEVBQUFBO0VBQ1osR0FDTUksS0FBVUUsV0FBV0osSUE1YlIsRUFBQTtBQStiZkgsRUFBQUEsT0FDSEUsS0FBTVosc0JBQXNCYSxFQUFBQTtBQUU5QjtBQXFCQSxTQUFTMUMsR0FBYytDLElBQUFBO0FBR3RCLE1BQU1DLEtBQU94QyxJQUNUeUMsS0FBVUYsR0FBSTdCO0FBQ0ksZ0JBQUEsT0FBWCtCLE9BQ1ZGLEdBQUk3QixNQUFBQSxRQUNKK0IsR0FBQUEsSUFHRHpDLEtBQW1Cd0M7QUFDcEI7QUFPQSxTQUFTL0MsR0FBYThDLElBQUFBO0FBR3JCLE1BQU1DLEtBQU94QztBQUNidUMsRUFBQUEsR0FBSTdCLE1BQVk2QixHQUFJckMsR0FBQUEsR0FDcEJGLEtBQW1Cd0M7QUFDcEI7QUFPQSxTQUFTRSxHQUFZQyxJQUFTQyxJQUFBQTtBQUM3QixTQUFBLENBQ0VELE1BQ0RBLEdBQVF6QixXQUFXMEIsR0FBUTFCLFVBQzNCMEIsR0FBUXJELEtBQUssU0FBQ3NELElBQUtDLElBQUFBO0FBQUssV0FBS0QsT0FBUUYsR0FBUUcsRUFBQUE7RUFBTSxDQUFBO0FBRXJEO0FBUUEsU0FBU0MsR0FBZUYsSUFBS0csSUFBQUE7QUFDNUIsU0FBbUIsY0FBQSxPQUFMQSxLQUFrQkEsR0FBRUgsRUFBQUEsSUFBT0c7QUFDMUM7OztBQ2poQkEsSUFBSSxTQUEyQjtBQUMvQixJQUFJLGdCQUFnQjtBQUNwQixJQUFJLG1CQUFtQjtBQUN2QixJQUFNLGNBQWMsb0JBQUksSUFBRztBQUMzQixJQUFNLGlCQUFpQixvQkFBSSxJQUFHO0FBQzlCLElBQU0sVUFBVSxvQkFBSSxJQUFHO0FBQ3ZCLElBQU0sc0JBQXNCLG9CQUFJLElBQUc7QUFFN0IsU0FBVSxjQUFjLE1BQVk7QUFDeEMsU0FBTyxZQUFZLElBQUksSUFBSTtBQUM3QjtBQUVNLFNBQVUsaUJBQWlCLE1BQWMsVUFBa0M7QUFDL0Usc0JBQW9CLElBQUksSUFBSTtBQUM1QixNQUFJLENBQUMsZUFBZSxJQUFJLElBQUksR0FBRztBQUM3QixtQkFBZSxJQUFJLE1BQU0sb0JBQUksSUFBRyxDQUFFO0VBQ3BDO0FBRUEsaUJBQWUsSUFBSSxJQUFJLEVBQUcsSUFBSSxRQUFRO0FBQ3hDO0FBRU0sU0FBVSxvQkFBb0IsTUFBYyxVQUFrQztBQUNsRixpQkFBZSxJQUFJLElBQUksR0FBRyxPQUFPLFFBQVE7QUFDM0M7QUFFQSxTQUFTLFVBQVUsTUFBYyxPQUFjO0FBQzdDLGNBQVksSUFBSSxNQUFNLEtBQUs7QUFDM0IsUUFBTUMsYUFBWSxlQUFlLElBQUksSUFBSTtBQUN6QyxNQUFJLENBQUNBLFlBQVc7QUFDZDtFQUNGO0FBRUEsYUFBVyxZQUFZQSxZQUFXO0FBQ2hDLGFBQVMsS0FBSztFQUNoQjtBQUNGO0FBRUEsU0FBUyxjQUFXO0FBQ2xCLE1BQUksa0JBQWtCO0FBQ3BCO0VBQ0Y7QUFFQSxxQkFBbUI7QUFDbkIsU0FBTyxTQUFTLE9BQU07QUFDeEI7QUFFTSxTQUFVLEtBQUssU0FBZ0M7QUFDbkQsUUFBTSxLQUFLLFFBQU87QUFDbEIsUUFBTSxVQUFVLEtBQUssVUFBVSxPQUFPO0FBQ3RDLE1BQUksR0FBRyxlQUFlLFVBQVUsTUFBTTtBQUNwQyxPQUFHLEtBQUssT0FBTztBQUNmO0VBQ0Y7QUFFQSxLQUFHLGlCQUNELFFBQ0EsTUFBSztBQUNILE9BQUcsS0FBSyxPQUFPO0VBQ2pCLEdBQ0EsRUFBRSxNQUFNLEtBQUksQ0FBRTtBQUVsQjtBQUVNLFNBQVUsUUFBUSxJQUFZLFNBQWdDO0FBQ2xFLFFBQU0sS0FBSztBQUNYLE9BQUssRUFBRSxJQUFJLElBQUksR0FBRyxRQUFPLENBQUU7QUFFM0IsU0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVU7QUFDckMsWUFBUSxJQUFJLElBQUksRUFBRSxTQUFTLE9BQU0sQ0FBRTtFQUNyQyxDQUFDO0FBQ0g7QUFFTSxTQUFVLFVBQU87QUFDckIsTUFBSSxVQUFVLE9BQU8sZUFBZSxVQUFVLFVBQVUsT0FBTyxlQUFlLFVBQVUsU0FBUztBQUMvRixXQUFPO0VBQ1Q7QUFFQSxPQUFLLHNCQUFxQjtBQUUxQixRQUFNLFdBQVcsT0FBTyxTQUFTLGFBQWEsV0FBVyxTQUFTO0FBQ2xFLFFBQU0sTUFBTSxJQUFJLElBQUksR0FBRyxRQUFRLEtBQUssT0FBTyxTQUFTLElBQUksR0FBRyxTQUFRLENBQUUsZUFBZTtBQUNwRixRQUFNLFlBQVksSUFBSSxnQkFBZ0IsT0FBTyxTQUFTLE1BQU0sRUFBRSxJQUFJLGVBQWU7QUFDakYsTUFBSSxXQUFXO0FBQ2IsUUFBSSxhQUFhLElBQUksaUJBQWlCLFNBQVM7RUFDakQ7QUFDQSxRQUFNLFFBQVEsZ0JBQWU7QUFDN0IsTUFBSSxPQUFPO0FBQ1QsUUFBSSxhQUFhLElBQUksaUJBQWlCLEtBQUs7RUFDN0M7QUFFQSxXQUFTLElBQUksVUFBVSxHQUFHO0FBQzFCLFFBQU0sZ0JBQWdCO0FBRXRCLGdCQUFjLGlCQUFpQixRQUFRLE1BQUs7QUFDMUMsU0FBSyxFQUFFLElBQUksV0FBVSxDQUFFO0FBQ3ZCLGVBQVcsUUFBUSxxQkFBcUI7QUFDdEMsV0FBSyxFQUFFLElBQUksbUJBQW1CLEtBQUksQ0FBRTtJQUN0QztFQUNGLENBQUM7QUFFRCxnQkFBYyxpQkFBaUIsV0FBVyxDQUFDLFVBQVM7QUFDbEQsVUFBTSxVQUFVLEtBQUssTUFBTSxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBRTdDLFFBQUksUUFBUSxPQUFPLGVBQWU7QUFDaEMsVUFBSSxxQkFBb0IsR0FBSTtBQUMxQjtNQUNGO0FBQ0EsY0FBUSxnQkFBZ0IsUUFBUSxNQUFNLEtBQUssQ0FBQztBQUM1QyxlQUFRO0FBQ1I7SUFDRjtBQUVBLFFBQUksUUFBUSxPQUFPLGdCQUFnQjtBQUNqQyxnQkFBVSxRQUFRLE1BQU0sUUFBUSxJQUFJO0FBQ3BDO0lBQ0Y7QUFFQSxRQUFJLFFBQVEsT0FBTyxXQUFXO0FBQzVCLGtCQUFXO0FBQ1g7SUFDRjtBQUVBLFFBQUksUUFBUSxNQUFNLFFBQVEsSUFBSSxRQUFRLEVBQUUsR0FBRztBQUN6QyxZQUFNLFdBQVcsUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN2QyxjQUFRLE9BQU8sUUFBUSxFQUFFO0FBRXpCLFVBQUksUUFBUSxJQUFJO0FBQ2QsaUJBQVMsUUFBUSxRQUFRLE1BQU07TUFDakMsT0FBTztBQUNMLGlCQUFTLE9BQU8sSUFBSSxNQUFNLFFBQVEsU0FBUyx3QkFBd0IsQ0FBQztNQUN0RTtJQUNGO0VBQ0YsQ0FBQztBQUVELGdCQUFjLGlCQUFpQixTQUFTLE1BQUs7QUFDM0MsUUFBSSxXQUFXLGVBQWU7QUFDNUI7SUFDRjtBQUVBLFdBQU8sV0FBVyxNQUFLO0FBQ3JCLFVBQUksV0FBVyxlQUFlO0FBQzVCO01BQ0Y7QUFFQSxlQUFTO0FBQ1QsY0FBTztJQUNULEdBQUcsR0FBRztFQUNSLENBQUM7QUFFRCxTQUFPO0FBQ1Q7QUFFTSxTQUFVLFlBQVM7QUFDdkIsTUFBSSxVQUFVLE9BQU8sZUFBZSxVQUFVLFVBQVUsT0FBTyxlQUFlLFVBQVUsU0FBUztBQUMvRixXQUFPLE1BQUs7RUFDZDtBQUNBLFdBQVM7QUFDVCxVQUFPO0FBQ1Q7OztBQzFJQSxJQUFJLGtCQUF3QztBQUM1QyxJQUFJLGtCQUFrQjtBQXdCdEIsU0FBUyxlQUFZO0FBQ25CLFNBQU8sR0FBRyxTQUFRLENBQUUsaUJBQWlCLFFBQVEsV0FBVyxHQUFHO0FBQzdEO0FBRUEsU0FBUyxlQUFZO0FBQ25CLFNBQU8sR0FBRyxPQUFPLFNBQVMsUUFBUSxHQUFHLE9BQU8sU0FBUyxNQUFNLEdBQUcsT0FBTyxTQUFTLElBQUk7QUFDcEY7QUFFQSxTQUFTLGtCQUFrQixPQUFnQztBQUN6RCxNQUFJLENBQUMsT0FBTztBQUNWLFdBQU87RUFDVDtBQUVBLE1BQUk7QUFDRixVQUFNLFNBQVMsSUFBSSxJQUFJLE9BQU8sT0FBTyxTQUFTLE1BQU07QUFDcEQsUUFBSSxPQUFPLFdBQVcsT0FBTyxTQUFTLFFBQVE7QUFDNUMsYUFBTztJQUNUO0FBRUEsVUFBTSxRQUFRLEdBQUcsT0FBTyxRQUFRLEdBQUcsT0FBTyxNQUFNLEdBQUcsT0FBTyxJQUFJO0FBQzlELFFBQUksQ0FBQyxNQUFNLFdBQVcsR0FBRyxLQUFLLE1BQU0sV0FBVyxJQUFJLEdBQUc7QUFDcEQsYUFBTztJQUNUO0FBRUEsV0FBTztFQUNULFFBQVE7QUFDTixXQUFPO0VBQ1Q7QUFDRjtBQUVBLFNBQVMsZ0JBQWE7QUFDcEIsU0FBTyxTQUFRLEtBQU07QUFDdkI7QUFFQSxTQUFTLGtCQUFrQixNQUFZO0FBQ3JDLFNBQU8sSUFBSSxJQUFJLE1BQU0sT0FBTyxTQUFTLE1BQU0sRUFBRSxTQUFRO0FBQ3ZEO0FBRUEsU0FBUyw4QkFBOEIsYUFBbUI7QUFDeEQsU0FBTyxVQUFVLElBQUksSUFBSSxXQUFXLEVBQUUsTUFBTTtBQUM5QztBQUVBLFNBQVMseUJBQXlCLFVBQTZCLENBQUEsR0FBRTtBQUMvRCxRQUFNLHVCQUF1QixrQkFBa0IsUUFBUSxZQUFZLEtBQUssYUFBWTtBQUNwRixRQUFNLGNBQWMsUUFBUSxlQUFlLGtCQUFrQixvQkFBb0I7QUFDakYsU0FBTztJQUNMLGNBQWM7SUFDZCxVQUFVLFFBQVEsWUFBWSw4QkFBOEIsV0FBVztJQUN2RTtJQUNBLFVBQVUsa0JBQWtCLFFBQVEsUUFBUSxLQUFLLGFBQVk7SUFDN0QsYUFBYSxPQUFPLFFBQVEsZUFBZSxXQUFVLEVBQUcsZUFBZSxxQkFBcUIsRUFBRSxRQUFRLFNBQVMsRUFBRTs7QUFFckg7QUFFQSxTQUFTLGFBQWEsU0FBUyxJQUFFO0FBQy9CLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUyxPQUFPLGdCQUFnQixJQUFJLFdBQVcsTUFBTSxDQUFDO0FBQzVELE1BQUksUUFBUTtBQUNaLFdBQVMsUUFBUSxHQUFHLFFBQVEsT0FBTyxRQUFRLFNBQVMsR0FBRztBQUNyRCxhQUFTLE1BQU0sT0FBTyxLQUFLLElBQUksTUFBTSxNQUFNO0VBQzdDO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxpQkFBaUIsT0FBaUI7QUFDekMsTUFBSSxTQUFTO0FBQ2IsYUFBVyxRQUFRLE9BQU87QUFDeEIsY0FBVSxPQUFPLGFBQWEsSUFBSTtFQUNwQztBQUNBLFNBQU8sS0FBSyxNQUFNLEVBQUUsUUFBUSxPQUFPLEdBQUcsRUFBRSxRQUFRLE9BQU8sR0FBRyxFQUFFLFFBQVEsUUFBUSxFQUFFO0FBQ2hGO0FBRUEsZUFBZSxtQkFBZ0I7QUFDN0IsUUFBTSxXQUFXLGFBQWEsRUFBRTtBQUNoQyxRQUFNQyxTQUFRLGFBQWEsRUFBRTtBQUM3QixRQUFNLFNBQVMsTUFBTSxPQUFPLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxRQUFRLENBQUM7QUFDN0UsU0FBTztJQUNMLFdBQVcsaUJBQWlCLElBQUksV0FBVyxNQUFNLENBQUM7SUFDbEQsT0FBQUE7SUFDQTs7QUFFSjtBQUVBLFNBQVMsZ0JBQWdCLFNBQW9DLFFBQWtCO0FBQzdFLFFBQU0sTUFBTSxJQUFJLElBQUksY0FBYyxRQUFRLFdBQVc7QUFDckQsTUFBSSxhQUFhLElBQUksYUFBYSxRQUFRLFFBQVE7QUFDbEQsTUFBSSxhQUFhLElBQUksZ0JBQWdCLFFBQVEsV0FBVztBQUN4RCxNQUFJLGFBQWEsSUFBSSxTQUFTLE9BQU8sS0FBSztBQUMxQyxNQUFJLGFBQWEsSUFBSSxrQkFBa0IsT0FBTyxTQUFTO0FBQ3ZELE1BQUksYUFBYSxJQUFJLHlCQUF5QixNQUFNO0FBQ3BELE1BQUksYUFBYSxJQUFJLE9BQU8sTUFBTTtBQUNsQyxTQUFPLElBQUksU0FBUTtBQUNyQjtBQUVBLFNBQVMsZ0JBQWdCLFFBQWdCLE9BQWUsV0FBa0I7QUFDeEUsUUFBTSxVQUFVLGVBQWM7QUFDOUIsTUFBSSxDQUFDLFNBQVM7QUFDWjtFQUNGO0FBRUEsTUFBSTtBQUNGLFlBQVEsUUFDTixrQkFDQSxLQUFLLFVBQVU7TUFDYjtNQUNBLFlBQVksS0FBSyxJQUFHO01BQ3BCO01BQ0E7S0FDRCxDQUFDO0VBRU4sUUFBUTtFQUVSO0FBQ0Y7QUFFQSxTQUFTLHNCQUFtQjtBQUMxQixRQUFNLFVBQVUsZUFBYztBQUM5QixNQUFJLENBQUMsU0FBUztBQUNaO0VBQ0Y7QUFFQSxNQUFJO0FBQ0YsWUFBUSxXQUFXLGdCQUFnQjtBQUNuQyxZQUFRLFdBQVcsdUJBQXVCO0VBQzVDLFFBQVE7RUFFUjtBQUNGO0FBRUEsU0FBUyx5QkFBc0I7QUFDN0IsUUFBTSxVQUFVLHNCQUFxQjtBQUNyQyxNQUFJLENBQUMsU0FBUztBQUNaO0VBQ0Y7QUFFQSxNQUFJO0FBQ0YsWUFBUSxXQUFXLHVCQUF1QjtFQUM1QyxRQUFRO0VBRVI7QUFDRjtBQUVBLFNBQVMsY0FBYyxNQUFjLE9BQU8sU0FBUyxNQUFJO0FBQ3ZELFFBQU0sU0FBUyxJQUFJLElBQUksR0FBRztBQUMxQixRQUFNLE9BQU8sT0FBTyxhQUFhLElBQUksTUFBTTtBQUMzQyxRQUFNQSxTQUFRLE9BQU8sYUFBYSxJQUFJLE9BQU87QUFDN0MsTUFBSSxDQUFDLFFBQVEsQ0FBQ0EsUUFBTztBQUNuQixXQUFPO0VBQ1Q7QUFDQSxTQUFPLEVBQUUsTUFBTSxPQUFBQSxPQUFLO0FBQ3RCO0FBRUEsU0FBUyxvQkFBb0IsTUFBYyxPQUFPLFNBQVMsTUFBSTtBQUM3RCxRQUFNLE9BQU8sSUFBSSxJQUFJLEdBQUc7QUFDeEIsT0FBSyxhQUFhLE9BQU8sTUFBTTtBQUMvQixPQUFLLGFBQWEsT0FBTyxPQUFPO0FBQ2hDLE9BQUssYUFBYSxPQUFPLE9BQU87QUFDaEMsU0FBTyxRQUFRLGFBQWEsQ0FBQSxHQUFJLElBQUksS0FBSyxTQUFRLENBQUU7QUFDckQ7QUFFQSxTQUFTLGNBQVc7QUFDbEIsUUFBTSxRQUFRLGtCQUFrQixPQUFPLGVBQWUsUUFBUSxxQkFBcUIsQ0FBQztBQUNwRixTQUFPLGVBQWUsV0FBVyxxQkFBcUI7QUFDdEQsU0FBTztBQUNUO0FBRUEsZUFBZSxhQUFhLEVBQzFCLE1BQ0EsY0FDQSxRQUFPLEdBS1I7QUFDQyxRQUFNLE9BQU8sSUFBSSxnQkFBZ0I7SUFDL0IsV0FBVyxRQUFRO0lBQ25CO0lBQ0EsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjLFFBQVE7R0FDdkI7QUFDRCxRQUFNLFdBQVcsTUFBTSxNQUFNLElBQUksSUFBSSxVQUFVLFFBQVEsV0FBVyxHQUFHO0lBQ25FO0lBQ0EsU0FBUztNQUNQLGdCQUFnQjs7SUFFbEIsUUFBUTtHQUNUO0FBRUQsTUFBSSxDQUFDLFNBQVMsSUFBSTtBQUNoQixVQUFNLFVBQVUsTUFBTSxTQUFTLEtBQUk7QUFDbkMsVUFBTSxJQUFJLE1BQU0seUNBQXlDLFNBQVMsTUFBTSxNQUFNLFdBQVcsWUFBWSxFQUFFO0VBQ3pHO0FBRUEsU0FBTyxTQUFTLEtBQUk7QUFDdEI7QUFFQSxlQUFlLHVCQUFvQjtBQUNqQyxRQUFNLFdBQVcsY0FBYTtBQUM5QixNQUFJLENBQUMsVUFBVTtBQUNiLFdBQU87RUFDVDtBQUVBLFFBQU0sVUFBVSxPQUFPLGVBQWUsUUFBUSxnQkFBZ0I7QUFDOUQsUUFBTSxhQUFjLFVBQVUsVUFBVSxPQUFPLElBQUk7QUFDbkQsTUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDLFlBQVksVUFBVTtBQUMvQyxVQUFNLElBQUksTUFBTSx1REFBdUQ7RUFDekU7QUFFQSxNQUFJLE9BQU8sV0FBVyxjQUFjLFlBQVksS0FBSyxJQUFHLElBQUssV0FBVyxZQUFZLGlCQUFpQjtBQUNuRyxXQUFPLGVBQWUsV0FBVyxnQkFBZ0I7QUFDakQsVUFBTSxJQUFJLE1BQU0sdURBQXVEO0VBQ3pFO0FBRUEsTUFBSSxXQUFXLFVBQVUsU0FBUyxPQUFPO0FBQ3ZDLFVBQU0sSUFBSSxNQUFNLGdDQUFnQztFQUNsRDtBQUVBLFFBQU0sVUFBVSx5QkFBd0I7QUFDeEMsUUFBTSxRQUFRLE1BQU0sYUFBYTtJQUMvQixNQUFNLFNBQVM7SUFDZixjQUFjLFdBQVc7SUFDekI7R0FDRDtBQUNELE1BQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxPQUFPLGNBQWM7QUFDNUMsVUFBTSxJQUFJLE1BQU0sNERBQTREO0VBQzlFO0FBQ0Esa0JBQWdCLE1BQU0sY0FBd0IsTUFBTSxVQUFvQixNQUFNLFVBQVU7QUFDeEYseUJBQXNCO0FBQ3RCLFNBQU8sZUFBZSxXQUFXLGdCQUFnQjtBQUVqRCxRQUFNLFlBQVksMEJBQTBCLE1BQU0sUUFBa0I7QUFDcEUsTUFBSSxXQUFXO0FBQ2IsWUFBUSxnQkFBZ0IsV0FBVyxJQUFJLENBQUM7QUFDeEMsYUFBUTtFQUNWO0FBRUEsUUFBTSxXQUFXLFlBQVcsS0FBTSxjQUFhO0FBQy9DLHNCQUFtQjtBQUNuQixTQUFPLFNBQVMsUUFBUSxRQUFRO0FBQ2hDLFNBQU87QUFDVDtBQUVBLFNBQVMscUJBQXFCLFVBQW1EO0FBQy9FLFFBQU0sU0FBUyxxQkFBcUIsU0FBUyxLQUFLO0FBQ2xELFNBQU8sQ0FBQyxTQUFTLFFBQVEsUUFBUSxLQUFLLFFBQVEsR0FBRyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxLQUFNLFNBQVM7QUFDNUY7QUFFQSxTQUFTLGlDQUE4QjtBQUNyQyxNQUFJLE9BQU8sV0FBVyxlQUFlLHFCQUFvQixHQUFJO0FBQzNELFdBQU87RUFDVDtBQUVBLE1BQUksY0FBYSxHQUFJO0FBQ25CLFdBQU87RUFDVDtBQUVBLFFBQU0sU0FBUyxJQUFJLGdCQUFnQixPQUFPLFNBQVMsTUFBTTtBQUN6RCxNQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssT0FBTyxTQUFTLGFBQWEsYUFBWSxHQUFJO0FBQ3RFLFdBQU87RUFDVDtBQUVBLE1BQUksT0FBTyxJQUFJLGVBQWUsS0FBSyxPQUFPLElBQUksT0FBTyxHQUFHO0FBQ3RELFdBQU87RUFDVDtBQUVBLFFBQU0sV0FBVyxtQkFBbUIsRUFBRSxjQUFjLEtBQUksQ0FBRTtBQUMxRCxNQUFJLENBQUMsU0FBUyxTQUFTLENBQUMsU0FBUyxTQUFTO0FBQ3hDLFdBQU87RUFDVDtBQUVBLFFBQU0sU0FBUyxxQkFBcUIsU0FBUyxLQUFLO0FBQ2xELE1BQUksQ0FBQyxRQUFRLGdCQUFnQixDQUFDLFFBQVEsS0FBSztBQUN6Qyx3QkFBbUI7QUFDbkIsV0FBTztFQUNUO0FBRUEsUUFBTSxVQUFVLHNCQUFxQjtBQUNyQyxRQUFNLGFBQWEscUJBQXFCLFFBQVE7QUFDaEQsTUFBSTtBQUNGLFFBQUksU0FBUyxRQUFRLHVCQUF1QixNQUFNLFlBQVk7QUFDNUQsYUFBTztJQUNUO0FBQ0EsYUFBUyxRQUFRLHlCQUF5QixVQUFVO0VBQ3RELFFBQVE7RUFFUjtBQUVBLHVCQUFxQixJQUFJO0FBQ3pCLFVBQVEsZ0JBQWdCLGdCQUFnQixpQkFBZ0IsQ0FBRSxHQUFHLElBQUksQ0FBQztBQUNsRSxXQUFRO0FBRVIsT0FBSyxpQkFBaUIsRUFBRSxVQUFVLGFBQVksRUFBRSxDQUFFLEVBQUUsTUFBTSxDQUFDLFVBQVM7QUFDbEUsWUFBUSxNQUFNLDBDQUEwQyxLQUFLO0FBQzdELHlCQUFxQixLQUFLO0FBQzFCLHdCQUFtQjtBQUNuQiwyQkFBc0I7QUFDdEIsWUFBUSxnQkFBZ0IsZ0JBQWdCLGlCQUFnQixDQUFFLEdBQUcsS0FBSyxDQUFDO0FBQ25FLGFBQVE7QUFDUixjQUFTO0VBQ1gsQ0FBQztBQUVELFNBQU87QUFDVDtBQUVNLFNBQVUsd0JBQXFCO0FBQ25DLE1BQUksaUJBQWlCO0FBQ25CLFdBQU8sUUFBUSxRQUFPO0VBQ3hCO0FBRUEsTUFBSSwrQkFBOEIsR0FBSTtBQUNwQyxzQkFBa0I7QUFDbEIsV0FBTyxRQUFRLFFBQU87RUFDeEI7QUFFQSxzQkFBb0IscUJBQW9CLEVBQ3JDLEtBQUssTUFBTSxNQUFTLEVBQ3BCLE1BQU0sQ0FBQyxVQUFTO0FBQ2YsWUFBUSxNQUFNLG1DQUFtQyxLQUFLO0VBQ3hELENBQUMsRUFDQSxRQUFRLE1BQUs7QUFDWixzQkFBa0I7RUFDcEIsQ0FBQztBQUNILFNBQU87QUFDVDtBQWlCQSxlQUFzQixpQkFBaUIsVUFBNkIsQ0FBQSxHQUFFO0FBQ3BFLFFBQU0sV0FBVyx5QkFBeUIsT0FBTztBQUNqRCxRQUFNLFNBQVMsTUFBTSxpQkFBZ0I7QUFDckMsU0FBTyxlQUFlLFFBQ3BCLGtCQUNBLEtBQUssVUFBVTtJQUNiLFdBQVcsS0FBSyxJQUFHO0lBQ25CLE9BQU8sT0FBTztJQUNkLFVBQVUsT0FBTztHQUNsQixDQUFDO0FBRUosU0FBTyxlQUFlLFFBQ3BCLHVCQUNBLGtCQUFrQixTQUFTLFFBQVEsTUFBTSxTQUFTLGVBQzlDLGNBQWEsSUFDWixrQkFBa0IsU0FBUyxRQUFRLEtBQUssY0FBYSxDQUFHO0FBRy9ELFFBQU0sTUFBTSxnQkFBZ0IsVUFBVSxNQUFNO0FBQzVDLFNBQU8sU0FBUyxPQUFPLEdBQUc7QUFDMUIsU0FBTyxFQUFFLFFBQVEsSUFBRztBQUN0Qjs7O0FDclpBLElBQU0sZ0JBQWdCLEVBQXlDLElBQUk7QUFDbkUsSUFBTSxlQUFlLEVBQWtELEVBQUUsUUFBUSxDQUFBLEVBQUUsQ0FBRTtBQUVyRixTQUFTLCtCQUErQixVQUFnQjtBQUN0RCxRQUFNLE9BQU8sU0FBUTtBQUNyQixNQUFJLENBQUMsTUFBTTtBQUNULFdBQU8sWUFBWTtFQUNyQjtBQUVBLE1BQUksYUFBYSxNQUFNO0FBQ3JCLFdBQU87RUFDVDtBQUVBLE1BQUksU0FBUyxXQUFXLEdBQUcsSUFBSSxHQUFHLEdBQUc7QUFDbkMsV0FBTyxTQUFTLE1BQU0sS0FBSyxNQUFNLEtBQUs7RUFDeEM7QUFFQSxTQUFPLFlBQVk7QUFDckI7QUFFQSxTQUFTLHFCQUFrQjtBQUN6QixNQUFJLE9BQU8sV0FBVyxhQUFhO0FBQ2pDLFdBQU8sRUFBRSxNQUFNLElBQUksTUFBTSxLQUFLLFVBQVUsS0FBSyxRQUFRLEdBQUU7RUFDekQ7QUFFQSxRQUFNLFdBQVcsK0JBQStCLE9BQU8sU0FBUyxRQUFRO0FBQ3hFLFFBQU0sU0FBUyxPQUFPLFNBQVM7QUFDL0IsUUFBTSxPQUFPLE9BQU8sU0FBUztBQUM3QixTQUFPO0lBQ0w7SUFDQSxNQUFNLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJO0lBQ2pDO0lBQ0E7O0FBRUo7QUFFQSxTQUFTLGVBQWUsT0FBYTtBQUNuQyxTQUFPLDJCQUEyQixLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsSUFBSTtBQUN4RTtBQUVBLFNBQVMsc0JBQXNCLFNBQWU7QUFDNUMsUUFBTSxNQUFNLElBQUksSUFBSSxTQUFTLHVCQUF1QjtBQUNwRCxRQUFNLE9BQU8sU0FBUTtBQUNyQixRQUFNLFdBQVcsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLGFBQWEsTUFBTSxNQUFNLElBQUksUUFBUSxLQUFLLElBQUk7QUFDcEYsU0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUk7QUFDNUM7QUFFQSxTQUFTLGFBQWEsSUFBVztBQUMvQixRQUFNLFFBQVEsT0FBTyxNQUFNLEVBQUU7QUFDN0IsTUFBSSxDQUFDLE9BQU87QUFDVixXQUFPLHNCQUFzQixtQkFBa0IsRUFBRyxJQUFJO0VBQ3hEO0FBRUEsTUFBSSxlQUFlLEtBQUssR0FBRztBQUN6QixXQUFPO0VBQ1Q7QUFFQSxRQUFNLFVBQVUsbUJBQWtCO0FBQ2xDLFFBQU0sV0FBVyxJQUFJLElBQUksT0FBTyx1QkFBdUIsUUFBUSxJQUFJLEVBQUU7QUFDckUsU0FBTyxzQkFBc0IsR0FBRyxTQUFTLFFBQVEsR0FBRyxTQUFTLE1BQU0sR0FBRyxTQUFTLElBQUksRUFBRTtBQUN2RjtBQUVBLFNBQVMscUJBQWtCO0FBQ3pCLFNBQU8sY0FBYyxJQUFJLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQ7QUFFTSxTQUFVLFNBQVMsSUFBWSxVQUFpQyxDQUFBLEdBQUU7QUFDdEUsUUFBTSxPQUFPLGFBQWEsRUFBRTtBQUM1QixRQUFNLFNBQVMsSUFBSSxJQUFJLE1BQU0sT0FBTyxTQUFTLElBQUk7QUFFakQsTUFBSSxPQUFPLFdBQVcsT0FBTyxTQUFTLFFBQVE7QUFDNUMsV0FBTyxTQUFTLE9BQU8sT0FBTyxTQUFRLENBQUU7QUFDeEM7RUFDRjtBQUVBLFFBQU0sT0FBTyxHQUFHLE9BQU8sUUFBUSxHQUFHLE9BQU8sTUFBTSxHQUFHLE9BQU8sSUFBSTtBQUM3RCxRQUFNLFVBQVUsR0FBRyxPQUFPLFNBQVMsUUFBUSxHQUFHLE9BQU8sU0FBUyxNQUFNLEdBQUcsT0FBTyxTQUFTLElBQUk7QUFDM0YsTUFBSSxTQUFTLFNBQVM7QUFDcEI7RUFDRjtBQUVBLE1BQUksUUFBUSxTQUFTO0FBQ25CLFdBQU8sUUFBUSxhQUFhLENBQUEsR0FBSSxJQUFJLElBQUk7RUFDMUMsT0FBTztBQUNMLFdBQU8sUUFBUSxVQUFVLENBQUEsR0FBSSxJQUFJLElBQUk7RUFDdkM7QUFDQSxxQkFBa0I7QUFDcEI7QUFFQSxTQUFTLHFCQUFrQjtBQUN6QixRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlDLEdBQVMsa0JBQWtCO0FBRTNELEVBQUFDLEdBQVUsTUFBSztBQUNiLGFBQVMsaUJBQWM7QUFDckIsa0JBQVksbUJBQWtCLENBQUU7SUFDbEM7QUFFQSxXQUFPLGlCQUFpQixZQUFZLGNBQWM7QUFDbEQsV0FBTyxpQkFBaUIsMEJBQTBCLGNBQWM7QUFDaEUsV0FBTyxNQUFLO0FBQ1YsYUFBTyxvQkFBb0IsWUFBWSxjQUFjO0FBQ3JELGFBQU8sb0JBQW9CLDBCQUEwQixjQUFjO0lBQ3JFO0VBQ0YsR0FBRyxDQUFBLENBQUU7QUFFTCxTQUFPO0FBQ1Q7QUFFQSxTQUFTLG1CQUFtQixNQUFhO0FBQ3ZDLFFBQU0sUUFBUSxPQUFPLFFBQVEsR0FBRyxFQUFFLEtBQUk7QUFDdEMsTUFBSSxVQUFVLE9BQU8sVUFBVSxNQUFNO0FBQ25DLFdBQU87RUFDVDtBQUVBLFFBQU0sWUFBWSxNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsSUFBSSxLQUFLO0FBQzNELFNBQU8sVUFBVSxTQUFTLElBQUksVUFBVSxRQUFRLFNBQVMsRUFBRSxJQUFJO0FBQ2pFO0FBRUEsU0FBUyxhQUFhLE1BQWE7QUFDakMsUUFBTSxhQUFhLG1CQUFtQixJQUFJO0FBQzFDLE1BQUksZUFBZSxPQUFPLGVBQWUsS0FBSztBQUM1QyxXQUFPLENBQUE7RUFDVDtBQUVBLFNBQU8sV0FBVyxRQUFRLGNBQWMsRUFBRSxFQUFFLE1BQU0sR0FBRztBQUN2RDtBQUVBLFNBQVMsbUJBQW1CLE9BQWE7QUFDdkMsTUFBSTtBQUNGLFdBQU8sbUJBQW1CLEtBQUs7RUFDakMsUUFBUTtBQUNOLFdBQU87RUFDVDtBQUNGO0FBRUEsU0FBUyxlQUFlLFNBQWtCLFVBQWlCO0FBQ3pELFFBQU0sb0JBQW9CLG1CQUFtQixPQUFPO0FBQ3BELE1BQUksc0JBQXNCLEtBQUs7QUFDN0IsV0FBTyxFQUFFLFFBQVEsQ0FBQSxFQUFFO0VBQ3JCO0FBRUEsUUFBTSxrQkFBa0IsYUFBYSxpQkFBaUI7QUFDdEQsUUFBTSxtQkFBbUIsYUFBYSxRQUFRO0FBQzlDLFFBQU0sU0FBaUMsQ0FBQTtBQUV2QyxXQUFTLFFBQVEsR0FBRyxRQUFRLGdCQUFnQixRQUFRLFNBQVMsR0FBRztBQUM5RCxVQUFNLGlCQUFpQixnQkFBZ0IsS0FBSztBQUM1QyxVQUFNLGtCQUFrQixpQkFBaUIsS0FBSztBQUU5QyxRQUFJLG1CQUFtQixLQUFLO0FBQzFCLGFBQU8sR0FBRyxJQUFJLGlCQUFpQixNQUFNLEtBQUssRUFBRSxJQUFJLGtCQUFrQixFQUFFLEtBQUssR0FBRztBQUM1RSxhQUFPLEVBQUUsT0FBTTtJQUNqQjtBQUVBLFFBQUksb0JBQW9CLFFBQVc7QUFDakMsYUFBTztJQUNUO0FBRUEsUUFBSSxlQUFlLFdBQVcsR0FBRyxHQUFHO0FBQ2xDLFlBQU0sT0FBTyxlQUFlLE1BQU0sQ0FBQztBQUNuQyxVQUFJLENBQUMsTUFBTTtBQUNULGVBQU87TUFDVDtBQUNBLGFBQU8sSUFBSSxJQUFJLG1CQUFtQixlQUFlO0FBQ2pEO0lBQ0Y7QUFFQSxRQUFJLG1CQUFtQixpQkFBaUI7QUFDdEMsYUFBTztJQUNUO0VBQ0Y7QUFFQSxNQUFJLGdCQUFnQixXQUFXLGlCQUFpQixRQUFRO0FBQ3RELFdBQU87RUFDVDtBQUVBLFNBQU8sRUFBRSxPQUFNO0FBQ2pCO0FBRUEsU0FBUyxjQUFjLFVBQTJCO0FBQ2hELFFBQU0sU0FBa0IsQ0FBQTtBQUN4QixhQUFXLFNBQVMsRUFBYSxRQUFRLEdBQUc7QUFDMUMsUUFBSSxDQUFDLFNBQVMsT0FBTyxVQUFVLFVBQVU7QUFDdkM7SUFDRjtBQUVBLFVBQU0sUUFBUTtBQUNkLFFBQUksTUFBTSxPQUFPLFNBQVMsUUFBVztBQUNuQyxhQUFPLEtBQUssS0FBSztBQUNqQjtJQUNGO0FBRUEsUUFBSSxNQUFNLE9BQU8sYUFBYSxRQUFXO0FBQ3ZDLGFBQU8sS0FBSyxHQUFHLGNBQWMsTUFBTSxNQUFNLFFBQVEsQ0FBQztJQUNwRDtFQUNGO0FBQ0EsU0FBTztBQUNUO0FBRUEsU0FBUyxzQkFDUCxPQVNBLFFBQTBCO0FBRTFCLFNBQ0UsQ0FBQyxNQUFNLG9CQUNQLE1BQU0sV0FBVyxLQUNqQixDQUFDLE1BQU0sVUFDUCxDQUFDLE1BQU0sV0FDUCxDQUFDLE1BQU0sV0FDUCxDQUFDLE1BQU0sYUFDTixDQUFDLFVBQVUsV0FBVyxZQUN2QixDQUFDLE1BQU0sZUFBZSxhQUFhLFVBQVU7QUFFakQ7QUFvQk0sU0FBVSxPQUFPLEVBQUUsU0FBUSxJQUFrQixDQUFBLEdBQUU7QUFDbkQsUUFBTSxXQUFXLG1CQUFrQjtBQUNuQyxTQUFPLEVBQUUsY0FBYyxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsU0FBUSxFQUFFLEdBQUksUUFBUTtBQUM5RTtBQUVNLFNBQVUsT0FBTyxFQUFFLFNBQVEsSUFBa0IsQ0FBQSxHQUFFO0FBQ25ELFFBQU0sV0FBVyxZQUFXO0FBQzVCLFFBQU0sU0FBUyxjQUFjLFFBQVE7QUFDckMsYUFBVyxTQUFTLFFBQVE7QUFDMUIsVUFBTSxRQUFRLE1BQU07QUFDcEIsVUFBTSxRQUFRLGVBQWUsTUFBTSxNQUFNLFNBQVMsUUFBUTtBQUMxRCxRQUFJLENBQUMsT0FBTztBQUNWO0lBQ0Y7QUFFQSxXQUFPLEVBQUUsYUFBYSxVQUFVLEVBQUUsT0FBTyxNQUFLLEdBQUksTUFBTSxXQUFXLElBQUk7RUFDekU7QUFFQSxTQUFPO0FBQ1Q7QUFFTSxTQUFVLE1BQU0sUUFBa0I7QUFDdEMsU0FBTztBQUNUO0FBRU0sU0FBVSxLQUFLLEVBQ25CLFVBQ0EsU0FDQSxVQUFVLE9BQ1YsUUFDQSxJQUNBLEdBQUcsTUFBSyxJQUNLLENBQUEsR0FBZTtBQUM1QixRQUFNLE9BQU8sYUFBYSxFQUFFO0FBQzVCLFNBQU8sRUFDTCxLQUNBO0lBQ0UsR0FBRztJQUNIO0lBQ0EsU0FBUyxDQUFDLFVBQThEO0FBQ3RFLGdCQUFVLEtBQUs7QUFDZixVQUFJLENBQUMsc0JBQXNCLE9BQU8sTUFBTSxHQUFHO0FBQ3pDO01BQ0Y7QUFFQSxZQUFNLFNBQVMsSUFBSSxJQUFJLE1BQU0sT0FBTyxTQUFTLElBQUk7QUFDakQsVUFBSSxPQUFPLFdBQVcsT0FBTyxTQUFTLFFBQVE7QUFDNUM7TUFDRjtBQUVBLFlBQU0sZUFBYztBQUNwQixlQUFTLElBQUksRUFBRSxRQUFPLENBQUU7SUFDMUI7SUFDQTtLQUVGLFFBQVE7QUFFWjtBQUVNLFNBQVUsY0FBVztBQUN6QixRQUFNLFVBQVVDLEdBQVcsYUFBYTtBQUN4QyxRQUFNLFdBQVcsbUJBQWtCO0FBQ25DLFNBQU8sU0FBUyxZQUFZO0FBQzlCO0FBRU0sU0FBVSxjQUFXO0FBQ3pCLFFBQU0sVUFBVUEsR0FBVyxhQUFhO0FBQ3hDLFNBQU8sU0FBUyxZQUFZO0FBQzlCO0FBRU0sU0FBVSxZQUFTO0FBQ3ZCLFNBQU9BLEdBQVcsWUFBWSxFQUFFO0FBQ2xDOzs7QUN6VU0sU0FBVSxTQUE0QixNQUFZO0FBQ3RELFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSUMsR0FBa0IsY0FBYyxJQUFJLEtBQUssQ0FBQSxDQUFFO0FBRXJFLEVBQUFDLEdBQVUsTUFBSztBQUNiLFlBQU87QUFDUCxxQkFBaUIsTUFBTSxRQUFRO0FBQy9CLFNBQUssRUFBRSxJQUFJLG1CQUFtQixLQUFJLENBQUU7QUFFcEMsV0FBTyxNQUFLO0FBQ1YsMEJBQW9CLE1BQU0sUUFBUTtJQUNwQztFQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFVCxTQUFPO0FBQ1Q7QUFFTSxTQUFVLFlBQ2QsTUFBWTtBQUVaLFNBQU8sSUFBSSxTQUFnQixRQUFRLGdCQUFnQixFQUFFLE1BQU0sS0FBSSxDQUFFO0FBQ25FOzs7QUN0Qk8sSUFBTSx3QkFBd0I7QUFDOUIsSUFBTSx5QkFBeUI7QUFDL0IsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxpQkFBaUI7QUEyRDlCLFNBQVMsT0FBTyxPQUFnQixVQUEwQjtBQUN4RCxTQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sU0FBUyxLQUFLLElBQUksUUFBUTtBQUN2RTtBQUVPLFNBQVMsTUFBTSxPQUFlLEtBQWEsS0FBcUI7QUFDckUsU0FBTyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUM7QUFDM0M7QUFFTyxTQUFTLGtCQUFrQixPQUFtRTtBQUNuRyxRQUFNQyxLQUFJLFNBQVMsQ0FBQztBQUNwQixTQUFPO0FBQUEsSUFDTCxHQUFHLE9BQU9BLEdBQUUsR0FBRyxDQUFDO0FBQUEsSUFDaEIsR0FBRyxPQUFPQSxHQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2hCLEdBQUcsS0FBSyxJQUFJLGdCQUFnQixPQUFPQSxHQUFFLEdBQUcsY0FBYyxDQUFDO0FBQUEsSUFDdkQsR0FBRyxLQUFLLElBQUksZ0JBQWdCLE9BQU9BLEdBQUUsR0FBRyxjQUFjLENBQUM7QUFBQSxJQUN2RCxVQUFVLE9BQU9BLEdBQUUsVUFBVSxDQUFDO0FBQUEsSUFDOUIsU0FBUyxNQUFNLE9BQU9BLEdBQUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDekMsU0FBUyxPQUFPQSxHQUFFLFlBQVksWUFBWUEsR0FBRSxVQUFVO0FBQUEsRUFDeEQ7QUFDRjtBQUVPLFNBQVMsZ0JBQWdCQSxJQUEyQjtBQUN6RCxTQUFPLEtBQUssVUFBVSxrQkFBa0JBLEVBQUMsQ0FBQztBQUM1QztBQUVPLFNBQVMsZ0JBQWdCLEtBQTZCO0FBQzNELE1BQUk7QUFDRixXQUFPLGtCQUFrQixLQUFLLE1BQU0sR0FBRyxDQUE0QjtBQUFBLEVBQ3JFLFFBQVE7QUFDTixXQUFPLGtCQUFrQixJQUFJO0FBQUEsRUFDL0I7QUFDRjtBQVdPLFNBQVMsVUFBVSxPQUFlLFVBQTBCO0FBQ2pFLFFBQU0sVUFBVSxNQUFNLFFBQVEsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQzdELFNBQU8sV0FBVztBQUNwQjs7O0FDdkdPLElBQU0sTUFBTTtBQUFBLEVBQ2pCLGVBQWUsWUFBMkUsZUFBZTtBQUFBLEVBQ3pHLHdCQUF3QixZQUd0Qix3QkFBd0I7QUFBQSxFQUMxQixlQUFlLFlBQThDLGVBQWU7QUFBQSxFQUM1RSxpQkFBaUIsWUFBK0MsaUJBQWlCO0FBQUEsRUFDakYsZUFBZSxZQUFnQyxlQUFlO0FBQUEsRUFDOUQsVUFBVSxZQVNSLFVBQVU7QUFBQSxFQUNaLGFBQWEsWUFBa0QsYUFBYTtBQUFBLEVBQzVFLGFBQWEsWUFBOEMsYUFBYTtBQUFBLEVBQ3hFLGFBQWEsWUFBZ0MsYUFBYTtBQUFBLEVBQzFELGVBQWUsWUFBc0QsZUFBZTtBQUFBLEVBQ3BGLFVBQVUsWUFBd0MsVUFBVTtBQUM5RDtBQU1PLFNBQVMsWUFBZSxLQUE4QztBQUMzRSxNQUFJLE9BQU8sT0FBTyxRQUFRLFlBQVksQ0FBQyxNQUFNLFFBQVEsR0FBRyxLQUFNLElBQTRCLE9BQU87QUFDL0YsVUFBTSxRQUFTLElBQXdCO0FBQ3ZDLFdBQU8sRUFBRSxPQUFPLE1BQU0sT0FBTyxNQUFNLFFBQVEsS0FBSyxJQUFJLFFBQVEsQ0FBQyxFQUFFO0FBQUEsRUFDakU7QUFDQSxTQUFPLEVBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO0FBQ25DOzs7QUNqQkEsSUFBSSxRQUFxQjtBQUFBLEVBQ3ZCLEtBQUs7QUFBQSxFQUNMLFdBQVcsQ0FBQztBQUFBLEVBQ1osTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsTUFBTSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxFQUFFO0FBQUEsRUFDbEMsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUNkO0FBRUEsSUFBTSxZQUFZLG9CQUFJLElBQWdCO0FBRS9CLFNBQVMsV0FBd0I7QUFDdEMsU0FBTztBQUNUO0FBRU8sU0FBUyxTQUFTLE9BQW1DO0FBQzFELFVBQVEsRUFBRSxHQUFHLE9BQU8sR0FBRyxNQUFNO0FBQzdCLGFBQVcsWUFBWSxDQUFDLEdBQUcsU0FBUyxHQUFHO0FBQ3JDLGFBQVM7QUFBQSxFQUNYO0FBQ0Y7QUFFTyxTQUFTLFVBQVUsSUFBMkM7QUFDbkUsTUFBSSxDQUFDLE1BQU0sSUFBSztBQUNoQixXQUFTLEVBQUUsS0FBSyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakM7QUFFTyxTQUFTLFVBQVUsVUFBa0M7QUFDMUQsWUFBVSxJQUFJLFFBQVE7QUFDdEIsU0FBTyxNQUFNO0FBQ1gsY0FBVSxPQUFPLFFBQVE7QUFBQSxFQUMzQjtBQUNGO0FBR08sU0FBUyxVQUFhLFVBQW9DO0FBQy9ELFFBQU0sY0FBY0MsR0FBTyxRQUFRO0FBQ25DLGNBQVksVUFBVTtBQUN0QixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlDLEdBQVMsTUFBTSxTQUFTLEtBQUssQ0FBQztBQUN4RCxRQUFNLFdBQVdELEdBQU8sS0FBSztBQUM3QixXQUFTLFVBQVU7QUFFbkIsRUFBQUUsR0FBVSxNQUFNO0FBQ2QsVUFBTSxRQUFRLE1BQU07QUFDbEIsWUFBTSxPQUFPLFlBQVksUUFBUSxLQUFLO0FBQ3RDLFVBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxTQUFTLE9BQU8sR0FBRztBQUN0QyxpQkFBUyxVQUFVO0FBQ25CLGlCQUFTLE1BQU0sSUFBSTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUNBLFVBQU07QUFDTixXQUFPLFVBQVUsS0FBSztBQUFBLEVBQ3hCLEdBQUcsQ0FBQyxDQUFDO0FBRUwsU0FBTztBQUNUOzs7QUNuREEsSUFBTSxnQkFBZ0I7QUFFdEIsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSxpQkFBaUI7QUFJdkIsSUFBTSxXQUFXLG9CQUFJLElBQW9CO0FBQ3pDLElBQU0sV0FBVyxvQkFBSSxJQUFvQjtBQUV6QyxJQUFNLFFBQXFCLENBQUM7QUFDNUIsSUFBSSxXQUFXO0FBRVIsU0FBUyxlQUFlLElBQW9CO0FBQ2pELFNBQU8sU0FBUyxJQUFJLEVBQUUsS0FBSztBQUM3QjtBQUVPLFNBQVMsZUFBZSxJQUFvQjtBQUNqRCxTQUFPLFNBQVMsSUFBSSxFQUFFLEtBQUs7QUFDN0I7QUFFTyxTQUFTLFdBQVcsVUFBa0IsVUFBd0I7QUFDbkUsTUFBSSxhQUFhLFNBQVUsVUFBUyxJQUFJLFVBQVUsUUFBUTtBQUM1RDtBQUVBLElBQUksZUFBZTtBQUNaLFNBQVMsWUFBWSxRQUF3QjtBQUNsRCxTQUFPLEdBQUcsTUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssZ0JBQWdCLFNBQVMsRUFBRSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQ3pGLFNBQVMsRUFBRSxFQUNYLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEI7QUFHQSxTQUFTLE1BQU0sSUFBOEI7QUFDM0MsVUFBUSxHQUFHLE1BQU07QUFBQSxJQUNmLEtBQUs7QUFDSCxhQUFPLGVBQWUsR0FBRyxFQUFFO0FBQUEsSUFDN0IsS0FBSztBQUNILGFBQU8sZUFBZSxHQUFHLEVBQUU7QUFBQSxJQUM3QixLQUFLO0FBQ0gsYUFBTyxZQUFZLEdBQUcsU0FBUztBQUFBLElBQ2pDLEtBQUs7QUFDSCxhQUFPLGlCQUFpQixHQUFHLEVBQUU7QUFBQSxJQUMvQixLQUFLO0FBQ0gsYUFBTyxZQUFZLEdBQUcsRUFBRTtBQUFBLElBQzFCO0FBQ0UsYUFBTztBQUFBLEVBQ1g7QUFDRjtBQUVPLFNBQVMsUUFBUSxJQUFxQjtBQUMzQyxRQUFNLE1BQU0sTUFBTSxFQUFFO0FBQ3BCLE1BQUksS0FBSztBQUNQLGFBQVNDLEtBQUksTUFBTSxTQUFTLEdBQUdBLE1BQUssR0FBR0EsTUFBSyxHQUFHO0FBQzdDLFVBQUksTUFBTSxNQUFNQSxFQUFDLENBQUMsTUFBTSxLQUFLO0FBQzNCLGNBQU1BLEVBQUMsSUFBSTtBQUNYLG1CQUFXO0FBQ1gsYUFBSyxNQUFNO0FBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLEtBQUssRUFBRTtBQUNiLGFBQVc7QUFDWCxPQUFLLE1BQU07QUFDYjtBQUVPLFNBQVMsZUFBdUI7QUFDckMsU0FBTyxNQUFNLFVBQVUsV0FBVyxJQUFJO0FBQ3hDO0FBRUEsU0FBUyxXQUFXLFFBQTRGLENBQUMsR0FBUztBQUN4SCxRQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFDakMsV0FBUztBQUFBLElBQ1AsWUFBWSxNQUFNLGVBQWUsT0FBTyxXQUFXO0FBQUEsSUFDbkQsWUFBWSxNQUFNLFVBQVUsV0FBVyxJQUFJO0FBQUEsSUFDM0MsR0FBSSxNQUFNLGNBQWMsU0FBWSxFQUFFLFdBQVcsTUFBTSxVQUFVLElBQUksQ0FBQztBQUFBLEVBQ3hFLENBQUM7QUFDSDtBQUVBLElBQU0sWUFBTixjQUF3QixNQUFNO0FBQUM7QUFFL0IsU0FBUyxZQUFlLFNBQXFCLEtBQUssZUFBMkI7QUFDM0UsU0FBTyxJQUFJLFFBQVcsQ0FBQyxTQUFTLFdBQVc7QUFDekMsVUFBTSxRQUFRLFdBQVcsTUFBTSxPQUFPLElBQUksVUFBVSxXQUFXLENBQUMsR0FBRyxFQUFFO0FBQ3JFLFlBQVE7QUFBQSxNQUNOLENBQUMsVUFBVTtBQUNULHFCQUFhLEtBQUs7QUFDbEIsZ0JBQVEsS0FBSztBQUFBLE1BQ2Y7QUFBQSxNQUNBLENBQUMsVUFBVTtBQUNULHFCQUFhLEtBQUs7QUFDbEIsZUFBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQUVBLFNBQVMsTUFBTSxJQUEyQjtBQUN4QyxTQUFPLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLEVBQUUsQ0FBQztBQUN6RDtBQUVBLGVBQWUsUUFBUSxJQUE4QjtBQUNuRCxVQUFRLEdBQUcsTUFBTTtBQUFBLElBQ2YsS0FBSyxZQUFZO0FBQ2YsWUFBTSxRQUNKLFNBQVMsR0FBRyxRQUNSLEVBQUUsU0FBUyxlQUFlLEdBQUcsTUFBTSxHQUFHLEVBQUUsSUFDeEMsRUFBRSxLQUFLLEdBQUcsTUFBTSxLQUFLLE9BQU8sR0FBRyxNQUFNLE9BQU8sUUFBUSxHQUFHLE1BQU0sT0FBTztBQUMxRSxZQUFNLFVBQVUsU0FBUyxRQUFRLG9CQUFvQjtBQUNyRCxZQUFNLFNBQVMsTUFBTTtBQUFBLFFBQ25CLElBQUksU0FBUyxHQUFHLFdBQVcsR0FBRyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU0sS0FBSztBQUFBLFFBQ2hFO0FBQUEsTUFDRjtBQUNBLFVBQUksR0FBRyxhQUFhLE9BQU8sUUFBUyxVQUFTLElBQUksR0FBRyxVQUFVLE9BQU8sT0FBTztBQUM1RSxZQUFNLGdCQUFnQixTQUFTLEdBQUcsUUFBUSxHQUFHLE1BQU0sTUFBTSxHQUFHLE1BQU07QUFDbEUsaUJBQVcsZUFBZSxPQUFPLE9BQU87QUFDeEMsVUFBSSxPQUFPLE9BQU8sU0FBUyxHQUFHLE9BQU87QUFDbkMsa0JBQVUsZUFBZTtBQUFBLFVBQ3ZCLEtBQUssT0FBTztBQUFBLFVBQ1osVUFBVSxHQUFHLE1BQU0sSUFBSSxXQUFXLE9BQU8sSUFBSSxHQUFHLE1BQU0sTUFBTTtBQUFBLFVBQzVELE9BQU8sR0FBRyxNQUFNO0FBQUEsVUFDaEIsUUFBUSxHQUFHLE1BQU07QUFBQSxRQUNuQixDQUFDO0FBQ0Qsa0JBQVUsT0FBTyxTQUFTO0FBQUEsVUFDeEIsS0FBSyxPQUFPO0FBQUEsVUFDWixVQUFVLEdBQUcsTUFBTSxJQUFJLFdBQVcsT0FBTyxJQUFJLEdBQUcsTUFBTSxNQUFNO0FBQUEsVUFDNUQsT0FBTyxHQUFHLE1BQU07QUFBQSxVQUNoQixRQUFRLEdBQUcsTUFBTTtBQUFBLFFBQ25CLENBQUM7QUFBQSxNQUNIO0FBQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQ0gsYUFBTyxZQUFZLElBQUksWUFBWSxlQUFlLEdBQUcsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQUEsSUFDcEUsS0FBSztBQUNILGFBQU8sWUFBWSxJQUFJLFlBQVksZUFBZSxHQUFHLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztBQUFBLElBQ3BFLEtBQUs7QUFDSCxhQUFPLFlBQVksSUFBSSxZQUFZLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQzNELEtBQUs7QUFDSCxhQUFPLFlBQVksSUFBSSxjQUFjLEdBQUcsV0FBVyxHQUFHLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQztBQUFBLElBQ2hGLEtBQUs7QUFDSCxhQUFPLFlBQVksSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUFBLElBQ3RELEtBQUs7QUFDSCxhQUFPLFlBQVksSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDM0Q7QUFDRjtBQUVBLGVBQWUsUUFBdUI7QUFDcEMsTUFBSSxTQUFVO0FBQ2QsYUFBVztBQUNYLGFBQVc7QUFFWCxTQUFPLE1BQU0sU0FBUyxHQUFHO0FBQ3ZCLFVBQU0sS0FBSyxNQUFNLE1BQU07QUFDdkIsUUFBSSxVQUFVO0FBRWQsV0FBTyxNQUFNO0FBQ1gsVUFBSTtBQUNGLGNBQU0sUUFBUSxFQUFFO0FBQ2hCLFlBQUksVUFBVSxFQUFHLFlBQVcsRUFBRSxZQUFZLFNBQVMsQ0FBQztBQUNwRDtBQUFBLE1BQ0YsU0FBUyxPQUFPO0FBQ2QsWUFBSSxpQkFBaUIsV0FBVztBQUU5QixxQkFBVztBQUNYLHFCQUFXLEVBQUUsWUFBWSxXQUFXLENBQUM7QUFDckMsZ0JBQU0sTUFBTSxLQUFLLElBQUksZ0JBQWdCLE1BQU0sS0FBSyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNyRTtBQUFBLFFBQ0Y7QUFDQSxjQUFNLFVBQVUsaUJBQWlCLFFBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSztBQUdyRSxZQUFJLENBQUMsYUFBYSxLQUFLLE9BQU8sR0FBRztBQUMvQixrQkFBUSxNQUFNLGdDQUFnQyxHQUFHLE1BQU0sT0FBTztBQUM5RCxxQkFBVyxFQUFFLFdBQVcsR0FBRyxHQUFHLElBQUksS0FBSyxPQUFPLEdBQUcsQ0FBQztBQUFBLFFBQ3BEO0FBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxhQUFXO0FBQ1gsYUFBVztBQUNiO0FBSUEsSUFBSSxPQUFPLFdBQVcsYUFBYTtBQUNqQyxTQUFPLGlCQUFpQixnQkFBZ0IsQ0FBQyxVQUFVO0FBQ2pELFFBQUksYUFBYSxJQUFJLEtBQUssU0FBUyxFQUFFLGVBQWUsU0FBUztBQUMzRCxZQUFNLGVBQWU7QUFBQSxJQUN2QjtBQUFBLEVBQ0YsQ0FBQztBQUNIOzs7QUNyTkEsSUFBTSxVQUFVLG9CQUFJLElBQXdCO0FBQzVDLElBQU0sV0FBVyxvQkFBSSxJQUFpQztBQUN0RCxJQUFNLFNBQVMsb0JBQUksSUFBdUM7QUFDMUQsSUFBTUMsYUFBWSxvQkFBSSxJQUFnQjtBQUV0QyxTQUFTLFNBQWU7QUFDdEIsYUFBVyxZQUFZLENBQUMsR0FBR0EsVUFBUyxFQUFHLFVBQVM7QUFDbEQ7QUFFTyxTQUFTLFVBQVUsSUFBWSxPQUF5QjtBQUM3RCxRQUFNLE9BQU8sUUFBUSxJQUFJLEVBQUU7QUFDM0IsVUFBUSxJQUFJLElBQUk7QUFBQSxJQUNkLEtBQUssTUFBTTtBQUFBLElBQ1gsT0FBTyxNQUFNO0FBQUEsSUFDYixRQUFRLE1BQU07QUFBQSxJQUNkLFVBQVUsTUFBTSxZQUFZLE1BQU07QUFBQSxFQUNwQyxDQUFDO0FBQ0QsU0FBTyxPQUFPLEVBQUU7QUFDaEIsU0FBTztBQUNUO0FBRU8sU0FBUyxjQUFjLElBQStCO0FBQzNELFNBQU8sUUFBUSxJQUFJLEVBQUUsS0FBSyxRQUFRLElBQUksZUFBZSxFQUFFLENBQUMsS0FBSztBQUMvRDtBQUVPLFNBQVMsWUFBWSxJQUFpQztBQUMzRCxRQUFNLFdBQVcsY0FBYyxFQUFFO0FBQ2pDLE1BQUksU0FBVSxRQUFPLFFBQVEsUUFBUSxRQUFRO0FBQzdDLFFBQU1DLFdBQVUsU0FBUyxJQUFJLEVBQUU7QUFDL0IsTUFBSUEsU0FBUyxRQUFPQTtBQUVwQixRQUFNLFVBQVUsSUFDYixTQUFTLGVBQWUsRUFBRSxDQUFDLEVBQzNCLEtBQUssQ0FBQyxZQUFZO0FBQ2pCLFVBQU0sT0FBTyxRQUFRLElBQUksRUFBRTtBQUMzQixVQUFNLFFBQW9CO0FBQUEsTUFDeEIsS0FBSyxRQUFRO0FBQUEsTUFDYixPQUFPLFFBQVE7QUFBQSxNQUNmLFFBQVEsUUFBUTtBQUFBLE1BQ2hCLFVBQVUsTUFBTTtBQUFBLElBQ2xCO0FBQ0EsWUFBUSxJQUFJLElBQUksS0FBSztBQUNyQixXQUFPO0FBQ1AsV0FBTztBQUFBLEVBQ1QsQ0FBQyxFQUNBLFFBQVEsTUFBTTtBQUNiLGFBQVMsT0FBTyxFQUFFO0FBQUEsRUFDcEIsQ0FBQztBQUNILFdBQVMsSUFBSSxJQUFJLE9BQU87QUFDeEIsU0FBTztBQUNUO0FBRUEsU0FBUyxTQUFTLE9BQTJCO0FBQzNDLFNBQU8sTUFBTSxZQUFZLE1BQU07QUFDakM7QUFHTyxTQUFTLFVBQVUsSUFBdUM7QUFDL0QsUUFBTSxTQUFTLE9BQU8sSUFBSSxFQUFFO0FBQzVCLE1BQUksT0FBUSxRQUFPO0FBQ25CLFFBQU0sVUFBVSxZQUFZLEVBQUUsRUFBRTtBQUFBLElBQzlCLENBQUMsVUFDQyxJQUFJLFFBQTBCLENBQUMsU0FBUyxXQUFXO0FBQ2pELFlBQU0sTUFBTSxTQUFTLEtBQUs7QUFDMUIsWUFBTSxNQUFNLElBQUksTUFBTTtBQUV0QixVQUFJLENBQUMsSUFBSSxXQUFXLE9BQU8sR0FBRztBQUM1QixZQUFJLGNBQWM7QUFBQSxNQUNwQjtBQUNBLFVBQUksU0FBUyxNQUFNLFFBQVEsR0FBRztBQUM5QixVQUFJLFVBQVUsTUFBTSxPQUFPLElBQUksTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxVQUFJLE1BQU07QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNMO0FBQ0EsU0FBTyxJQUFJLElBQUksT0FBTztBQUN0QixVQUFRLE1BQU0sTUFBTSxPQUFPLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLFNBQU87QUFDVDtBQUdPLFNBQVMsY0FBYyxJQUErQjtBQUMzRCxRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlDLEdBQTRCLE1BQU0sY0FBYyxFQUFFLENBQUM7QUFFN0UsRUFBQUMsR0FBVSxNQUFNO0FBQ2QsVUFBTSxRQUFRLE1BQU0sU0FBUyxjQUFjLEVBQUUsQ0FBQztBQUM5QyxVQUFNO0FBQ04sSUFBQUgsV0FBVSxJQUFJLEtBQUs7QUFDbkIsZ0JBQVksRUFBRSxFQUFFLE1BQU0sQ0FBQyxVQUFVLFFBQVEsTUFBTSxzQkFBc0IsS0FBSyxDQUFDO0FBQzNFLFdBQU8sTUFBTTtBQUNYLE1BQUFBLFdBQVUsT0FBTyxLQUFLO0FBQUEsSUFDeEI7QUFBQSxFQUNGLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFFUCxTQUFPO0FBQ1Q7OztBQ3pHQSxlQUFzQixrQkFBa0IsS0FBaUIsT0FBMkM7QUFDbEcsUUFBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLFNBQU8sUUFBUSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssQ0FBQztBQUN4RCxTQUFPLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksU0FBUyxLQUFLLENBQUM7QUFDMUQsUUFBTSxNQUFNLE9BQU8sV0FBVyxJQUFJO0FBQ2xDLE1BQUksQ0FBQyxJQUFLLE9BQU0sSUFBSSxNQUFNLG9CQUFvQjtBQUU5QyxRQUFNLFVBQVUsSUFBSSxPQUFPLE9BQU8sQ0FBQyxVQUFVLE1BQU0sV0FBVyxNQUFNLFVBQVUsQ0FBQztBQUMvRSxRQUFNSSxVQUFTLE1BQU0sUUFBUTtBQUFBLElBQzNCLFFBQVEsSUFBSSxDQUFDLFVBQVUsVUFBVSxNQUFNLE9BQU8sRUFBRSxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQUEsRUFDbkU7QUFFQSxNQUFJLHdCQUF3QjtBQUM1QixVQUFRLFFBQVEsQ0FBQyxPQUFPQyxPQUFNO0FBQzVCLFVBQU0sTUFBTUQsUUFBT0MsRUFBQztBQUNwQixRQUFJLENBQUMsSUFBSztBQUNWLFFBQUksS0FBSztBQUNULFFBQUksY0FBYyxNQUFNO0FBQ3hCLFFBQUksV0FBVyxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssUUFBUSxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssS0FBSztBQUM5RSxRQUFJLE9BQVEsTUFBTSxXQUFXLEtBQUssS0FBTSxHQUFHO0FBQzNDLFFBQUksVUFBVSxLQUFNLENBQUMsTUFBTSxJQUFJLElBQUssT0FBUSxDQUFDLE1BQU0sSUFBSSxJQUFLLE9BQU8sTUFBTSxJQUFJLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDbkcsUUFBSSxRQUFRO0FBQUEsRUFDZCxDQUFDO0FBQ0QsU0FBTztBQUNUO0FBRUEsZUFBc0IsWUFBWSxLQUFnQztBQUNoRSxRQUFNLFNBQVMsTUFBTSxrQkFBa0IsS0FBSyxDQUFDO0FBQzdDLFFBQU0sTUFBTSxPQUFPLFVBQVUsV0FBVztBQUN4QyxRQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDdkMsT0FBSyxPQUFPO0FBQ1osT0FBSyxXQUFXLEdBQUcsSUFBSSxRQUFRLE9BQU87QUFDdEMsT0FBSyxNQUFNO0FBQ2I7QUFFQSxJQUFNLFlBQVk7QUFFbEIsZUFBZSxjQUFjLEtBQXlDO0FBQ3BFLGFBQVcsU0FBUyxJQUFJLFFBQVE7QUFDOUIsUUFBSSxDQUFDLE1BQU0sV0FBVyxNQUFNLFdBQVcsRUFBRztBQUMxQyxVQUFNLFFBQVEsTUFBTSxZQUFZLE1BQU0sT0FBTyxFQUFFLE1BQU0sTUFBTSxJQUFJO0FBQy9ELFFBQUksT0FBTyxJQUFLLFFBQU8sTUFBTTtBQUFBLEVBQy9CO0FBQ0EsU0FBTztBQUNUO0FBRUEsZUFBc0IsWUFBWSxLQUFrQztBQUNsRSxRQUFNLFVBQVUsSUFBSSxPQUFPLE9BQU8sQ0FBQyxVQUFVLE1BQU0sV0FBVyxNQUFNLFVBQVUsQ0FBQztBQUMvRSxRQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsWUFBWSxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDO0FBRXJFLE1BQUksUUFBUSxTQUFTLEdBQUc7QUFDdEIsVUFBTSxTQUFTLE1BQU0sUUFBUTtBQUFBLE1BQzNCLFFBQVEsSUFBSSxDQUFDLFVBQVUsVUFBVSxNQUFNLE9BQU8sRUFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFBQSxJQUNyRjtBQUNBLFFBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztBQUM3QixZQUFNLFdBQVcsTUFBTSxjQUFjLEdBQUc7QUFDeEMsVUFBSSxTQUFVLFFBQU87QUFDckIsWUFBTSxJQUFJLE1BQU0sNEJBQTRCO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBRUEsTUFBSTtBQUNGLFVBQU0sU0FBUyxNQUFNLGtCQUFrQixLQUFLLEtBQUs7QUFDakQsV0FBTyxPQUFPLFVBQVUsY0FBYyxJQUFJO0FBQUEsRUFDNUMsUUFBUTtBQUNOLFVBQU0sV0FBVyxNQUFNLGNBQWMsR0FBRztBQUN4QyxRQUFJLFNBQVUsUUFBTztBQUNyQixVQUFNLElBQUksTUFBTSw0QkFBNEI7QUFBQSxFQUM5QztBQUNGOzs7QUM5REEsSUFBTSxRQUFRO0FBRWQsSUFBSSxZQUE0QixDQUFDO0FBQ2pDLElBQUksWUFBNEIsQ0FBQztBQUVqQyxTQUFTLE9BQWE7QUFDcEIsV0FBUyxFQUFFLGFBQWEsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQ3REO0FBRU8sU0FBUyxZQUFZLE9BQTJCO0FBQ3JELFlBQVUsS0FBSyxLQUFLO0FBQ3BCLE1BQUksVUFBVSxTQUFTLE1BQU8sV0FBVSxNQUFNO0FBQzlDLGNBQVksQ0FBQztBQUNiLE9BQUs7QUFDUDtBQUVPLFNBQVMsZUFBcUI7QUFDbkMsY0FBWSxDQUFDO0FBQ2IsY0FBWSxDQUFDO0FBQ2IsT0FBSztBQUNQO0FBRU8sU0FBUyxVQUFtQjtBQUNqQyxTQUFPLFVBQVUsU0FBUztBQUM1QjtBQUVPLFNBQVMsVUFBbUI7QUFDakMsU0FBTyxVQUFVLFNBQVM7QUFDNUI7QUFFTyxTQUFTLE9BQWE7QUFDM0IsUUFBTSxRQUFRLFVBQVUsSUFBSTtBQUM1QixNQUFJLENBQUMsTUFBTztBQUNaLFFBQU0sS0FBSztBQUNYLFlBQVUsS0FBSyxLQUFLO0FBQ3BCLE9BQUs7QUFDUDtBQUVPLFNBQVMsT0FBYTtBQUMzQixRQUFNLFFBQVEsVUFBVSxJQUFJO0FBQzVCLE1BQUksQ0FBQyxNQUFPO0FBQ1osUUFBTSxLQUFLO0FBQ1gsWUFBVSxLQUFLLEtBQUs7QUFDcEIsT0FBSztBQUNQOzs7QUNsQ0EsSUFBTSx1QkFBdUI7QUFLdEIsU0FBUyxZQUFZLE1BQW1CLE1BQXdCO0FBQ3JFLFFBQU0sT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNyRCxRQUFNLFNBQWtCLENBQUM7QUFDekIsUUFBTSxPQUFPLENBQUMsUUFBa0I7QUFDOUIsV0FBTyxLQUFLO0FBQUEsTUFDVixJQUFJLElBQUk7QUFBQSxNQUNSLFNBQVMsSUFBSTtBQUFBLE1BQ2IsTUFBTSxJQUFJO0FBQUEsTUFDVixHQUFHLGdCQUFnQixJQUFJLElBQUk7QUFBQSxJQUM3QixDQUFDO0FBQUEsRUFDSDtBQUNBLGFBQVcsTUFBTSxLQUFLLFlBQVk7QUFDaEMsVUFBTSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ3ZCLFFBQUksS0FBSztBQUNQLFdBQUssR0FBRztBQUNSLFdBQUssT0FBTyxFQUFFO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0EsYUFBVyxPQUFPLEtBQUssT0FBTyxFQUFHLE1BQUssR0FBRztBQUV6QyxXQUFTO0FBQUEsSUFDUCxLQUFLLEVBQUUsSUFBSSxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLE9BQU8sUUFBUSxLQUFLLFFBQVEsT0FBTztBQUFBLElBQ3BGLFdBQVcsQ0FBQztBQUFBLElBQ1osV0FBVztBQUFBLEVBQ2IsQ0FBQztBQUNELGVBQWE7QUFDYix1QkFBcUI7QUFDdkI7QUFFTyxTQUFTLGVBQXFCO0FBQ25DLFdBQVMsRUFBRSxLQUFLLE1BQU0sV0FBVyxDQUFDLEVBQUUsQ0FBQztBQUNyQyxlQUFhO0FBQ2Y7QUFLTyxTQUFTLGFBQWEsS0FBcUI7QUFDaEQsV0FBUyxFQUFFLFdBQVcsSUFBSSxDQUFDO0FBQzdCO0FBRU8sU0FBUyxlQUFlLElBQWtCO0FBQy9DLFFBQU0sVUFBVSxTQUFTLEVBQUU7QUFDM0IsZUFBYSxRQUFRLFNBQVMsRUFBRSxJQUFJLFFBQVEsT0FBTyxDQUFDQyxPQUFNQSxPQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFDeEY7QUFFQSxTQUFTLGVBQWUsU0FBNEI7QUFDbEQsV0FBUyxFQUFFLFdBQVcsU0FBUyxFQUFFLFVBQVUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMvRTtBQUtBLFNBQVMsZUFBZSxTQUFvRDtBQUMxRSxZQUFVLENBQUMsU0FBUztBQUFBLElBQ2xCLEdBQUc7QUFBQSxJQUNILFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVO0FBQ2hDLFlBQU0sUUFBUSxRQUFRLElBQUksTUFBTSxFQUFFO0FBQ2xDLGFBQU8sUUFBUSxFQUFFLEdBQUcsT0FBTyxHQUFHLE1BQU0sSUFBSTtBQUFBLElBQzFDLENBQUM7QUFBQSxFQUNILEVBQUU7QUFDSjtBQUVBLElBQU0sa0JBQWtCLG9CQUFJLElBQW9CO0FBRWhELFNBQVMsZ0JBQWdCLElBQWtCO0FBQ3pDLFFBQU0sUUFBUSxnQkFBZ0IsSUFBSSxFQUFFO0FBQ3BDLE1BQUksVUFBVSxRQUFXO0FBQ3ZCLGlCQUFhLEtBQUs7QUFDbEIsb0JBQWdCLE9BQU8sRUFBRTtBQUFBLEVBQzNCO0FBQ0EsUUFBTSxRQUFRLFNBQVMsRUFBRSxLQUFLLE9BQU8sS0FBSyxDQUFDQyxPQUFNQSxHQUFFLE9BQU8sRUFBRTtBQUM1RCxNQUFJLENBQUMsTUFBTztBQUNaLFVBQVEsRUFBRSxNQUFNLGVBQWUsSUFBSSxNQUFNLGdCQUFnQixLQUFLLEVBQUUsQ0FBQztBQUNuRTtBQUVBLFNBQVMsc0JBQXNCLElBQWtCO0FBQy9DLE1BQUksZ0JBQWdCLElBQUksRUFBRSxFQUFHO0FBQzdCLGtCQUFnQjtBQUFBLElBQ2Q7QUFBQSxJQUNBLE9BQU8sV0FBVyxNQUFNO0FBQ3RCLHNCQUFnQixPQUFPLEVBQUU7QUFDekIsc0JBQWdCLEVBQUU7QUFBQSxJQUNwQixHQUFHLG9CQUFvQjtBQUFBLEVBQ3pCO0FBQ0Y7QUFHTyxTQUFTLGVBQWUsU0FBb0Q7QUFDakYsaUJBQWUsT0FBTztBQUN0QixhQUFXLE1BQU0sUUFBUSxLQUFLLEVBQUcsdUJBQXNCLEVBQUU7QUFDM0Q7QUFJQSxTQUFTLGdCQUFnQkMsVUFBNkQ7QUFDcEYsaUJBQWUsSUFBSSxJQUFJQSxTQUFRLElBQUksQ0FBQ0MsT0FBTSxDQUFDQSxHQUFFLElBQUlBLEdBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzRCxhQUFXLEVBQUUsR0FBRyxLQUFLRCxTQUFTLGlCQUFnQixFQUFFO0FBQ2hELHVCQUFxQjtBQUN2QjtBQUdPLFNBQVMsaUJBQWlCLE9BQWUsU0FBa0M7QUFDaEYsUUFBTSxPQUFPLFFBQVEsT0FBTyxDQUFDRSxPQUFNLENBQUMsa0JBQWtCQSxHQUFFLFFBQVFBLEdBQUUsS0FBSyxDQUFDO0FBQ3hFLE1BQUksS0FBSyxXQUFXLEdBQUc7QUFHckIsZUFBVyxFQUFFLEdBQUcsS0FBSyxRQUFTLGlCQUFnQixFQUFFO0FBQ2hEO0FBQUEsRUFDRjtBQUNBLGtCQUFnQixLQUFLLElBQUksQ0FBQ0EsUUFBTyxFQUFFLElBQUlBLEdBQUUsSUFBSSxPQUFPQSxHQUFFLE1BQU0sRUFBRSxDQUFDO0FBQy9ELGNBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQSxNQUFNLE1BQU0sZ0JBQWdCLEtBQUssSUFBSSxDQUFDQSxRQUFPLEVBQUUsSUFBSUEsR0FBRSxJQUFJLE9BQU9BLEdBQUUsT0FBTyxFQUFFLENBQUM7QUFBQSxJQUM1RSxNQUFNLE1BQU0sZ0JBQWdCLEtBQUssSUFBSSxDQUFDQSxRQUFPLEVBQUUsSUFBSUEsR0FBRSxJQUFJLE9BQU9BLEdBQUUsTUFBTSxFQUFFLENBQUM7QUFBQSxFQUM3RSxDQUFDO0FBQ0g7QUFFQSxTQUFTLGtCQUFrQkMsSUFBbUJDLElBQTRCO0FBQ3hFLFFBQU0sT0FBTyxvQkFBSSxJQUFJLENBQUMsR0FBRyxPQUFPLEtBQUtELEVBQUMsR0FBRyxHQUFHLE9BQU8sS0FBS0MsRUFBQyxDQUFDLENBQWdDO0FBQzFGLGFBQVcsT0FBTyxNQUFNO0FBQ3RCLFFBQUksQ0FBQyxPQUFPLEdBQUdELEdBQUUsR0FBRyxHQUFHQyxHQUFFLEdBQUcsQ0FBQyxFQUFHLFFBQU87QUFBQSxFQUN6QztBQUNBLFNBQU87QUFDVDtBQUVPLFNBQVMsZUFBZSxJQUFZLElBQWtCO0FBQzNELFFBQU0sRUFBRSxLQUFLLFVBQVUsSUFBSSxTQUFTO0FBQ3BDLE1BQUksQ0FBQyxPQUFPLFVBQVUsV0FBVyxFQUFHO0FBQ3BDLFFBQU0sVUFBNkIsQ0FBQztBQUNwQyxhQUFXLFNBQVMsSUFBSSxRQUFRO0FBQzlCLFFBQUksVUFBVSxTQUFTLE1BQU0sRUFBRSxHQUFHO0FBQ2hDLGNBQVEsS0FBSztBQUFBLFFBQ1gsSUFBSSxNQUFNO0FBQUEsUUFDVixRQUFRLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUU7QUFBQSxRQUNqQyxPQUFPLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBSSxHQUFHO0FBQUEsTUFDNUMsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0EsbUJBQWlCLFNBQVMsT0FBTztBQUNuQztBQUVPLFNBQVMsY0FBYyxJQUFrQjtBQUM5QyxRQUFNLFFBQVEsU0FBUyxFQUFFLEtBQUssT0FBTyxLQUFLLENBQUNMLE9BQU1BLEdBQUUsT0FBTyxFQUFFO0FBQzVELE1BQUksQ0FBQyxNQUFPO0FBQ1osbUJBQWlCLE1BQU0sVUFBVSxlQUFlLGNBQWM7QUFBQSxJQUM1RCxFQUFFLElBQUksUUFBUSxFQUFFLFNBQVMsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLFNBQVMsQ0FBQyxNQUFNLFFBQVEsRUFBRTtBQUFBLEVBQy9FLENBQUM7QUFDSDtBQVFBLFNBQVMsZ0JBQWdCLE9BQTRCO0FBQ25ELFFBQU0sTUFBTSxTQUFTLEVBQUU7QUFDdkIsTUFBSSxDQUFDLElBQUs7QUFDVixRQUFNLFNBQVMsQ0FBQyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUNJLElBQUdDLE9BQU1ELEdBQUUsUUFBUUMsR0FBRSxLQUFLO0FBQzFELFFBQU0sU0FBUyxDQUFDLEdBQUcsSUFBSSxNQUFNO0FBQzdCLGFBQVcsRUFBRSxPQUFPLE1BQU0sS0FBSyxRQUFRO0FBQ3JDLFdBQU8sT0FBTyxLQUFLLElBQUksT0FBTyxPQUFPLE1BQU0sR0FBRyxHQUFHLEtBQUs7QUFBQSxFQUN4RDtBQUNBLFlBQVUsQ0FBQ0MsUUFBTyxFQUFFLEdBQUdBLElBQUcsT0FBTyxFQUFFO0FBRW5DLE1BQUksYUFBYTtBQUNqQixhQUFXLEVBQUUsT0FBTyxNQUFNLEtBQUssUUFBUTtBQUNyQyxZQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixXQUFXLElBQUk7QUFBQSxNQUNmLFVBQVUsTUFBTTtBQUFBO0FBQUEsTUFFaEIsV0FBVyxZQUFZLEtBQUs7QUFBQSxNQUM1QixNQUFNLE1BQU07QUFBQSxNQUNaLE1BQU0sZ0JBQWdCLEtBQUs7QUFBQSxNQUMzQixPQUFPLEVBQUUsS0FBSyxNQUFNLFFBQVE7QUFBQSxJQUM5QixDQUFDO0FBQ0QsUUFBSSxRQUFRLE9BQU8sU0FBUyxFQUFHLGNBQWE7QUFBQSxFQUM5QztBQUVBLE1BQUksWUFBWTtBQUNkLFlBQVEsRUFBRSxNQUFNLFlBQVksV0FBVyxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQ04sT0FBTUEsR0FBRSxFQUFFLEVBQUUsQ0FBQztBQUFBLEVBQy9FO0FBQ0EsdUJBQXFCO0FBQ3ZCO0FBRUEsU0FBUyxnQkFBZ0IsS0FBcUI7QUFDNUMsUUFBTSxNQUFNLFNBQVMsRUFBRTtBQUN2QixNQUFJLENBQUMsSUFBSztBQUNWLFFBQU0sVUFBVSxJQUFJLElBQUksR0FBRztBQUMzQixZQUFVLENBQUNNLFFBQU8sRUFBRSxHQUFHQSxJQUFHLFFBQVFBLEdBQUUsT0FBTyxPQUFPLENBQUNOLE9BQU0sQ0FBQyxRQUFRLElBQUlBLEdBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMvRSxpQkFBZSxPQUFPO0FBQ3RCLGFBQVcsTUFBTSxJQUFLLFNBQVEsRUFBRSxNQUFNLGVBQWUsR0FBRyxDQUFDO0FBQ3pELHVCQUFxQjtBQUN2QjtBQUVBLFNBQVMsaUJBQWlCLEtBQWlCLEtBQThCO0FBQ3ZFLFFBQU0sUUFBdUIsQ0FBQztBQUM5QixNQUFJLE9BQU8sUUFBUSxDQUFDLE9BQU8sVUFBVTtBQUNuQyxRQUFJLElBQUksU0FBUyxNQUFNLEVBQUUsRUFBRyxPQUFNLEtBQUssRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUFBLEVBQ3pELENBQUM7QUFDRCxTQUFPO0FBQ1Q7QUFFTyxTQUFTLGtCQUF3QjtBQUN0QyxRQUFNLEVBQUUsS0FBSyxVQUFVLElBQUksU0FBUztBQUNwQyxNQUFJLENBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRztBQUNwQyxRQUFNLFFBQVEsaUJBQWlCLEtBQUssU0FBUztBQUM3QyxNQUFJLE1BQU0sV0FBVyxFQUFHO0FBQ3hCLFFBQU0sTUFBTSxNQUFNLElBQUksQ0FBQ08sT0FBTUEsR0FBRSxNQUFNLEVBQUU7QUFDdkMsa0JBQWdCLEdBQUc7QUFDbkIsY0FBWTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsTUFBTSxNQUFNO0FBQ1Ysc0JBQWdCLEtBQUs7QUFDckIsbUJBQWEsR0FBRztBQUFBLElBQ2xCO0FBQUEsSUFDQSxNQUFNLE1BQU0sZ0JBQWdCLEdBQUc7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFFTyxTQUFTLHFCQUEyQjtBQUN6QyxRQUFNLEVBQUUsS0FBSyxVQUFVLElBQUksU0FBUztBQUNwQyxNQUFJLENBQUMsT0FBTyxVQUFVLFdBQVcsRUFBRztBQUNwQyxRQUFNLFNBQVMsaUJBQWlCLEtBQUssU0FBUztBQUM5QyxNQUFJLE9BQU8sV0FBVyxFQUFHO0FBQ3pCLFFBQU0sUUFBdUIsT0FBTyxJQUFJLENBQUMsRUFBRSxNQUFNLEdBQUdBLFFBQU87QUFBQSxJQUN6RCxPQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxJQUFJLFlBQVksT0FBTztBQUFBLE1BQ3ZCLE1BQU0sR0FBRyxNQUFNLElBQUk7QUFBQSxNQUNuQixHQUFHLE1BQU0sSUFBSTtBQUFBLE1BQ2IsR0FBRyxNQUFNLElBQUk7QUFBQSxJQUNmO0FBQUE7QUFBQSxJQUVBLE9BQU8sT0FBTyxPQUFPLFNBQVMsQ0FBQyxFQUFFLFFBQVEsSUFBSUE7QUFBQSxFQUMvQyxFQUFFO0FBQ0YsUUFBTSxNQUFNLE1BQU0sSUFBSSxDQUFDQSxPQUFNQSxHQUFFLE1BQU0sRUFBRTtBQUN2QyxrQkFBZ0IsS0FBSztBQUNyQixlQUFhLEdBQUc7QUFDaEIsY0FBWTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsTUFBTSxNQUFNLGdCQUFnQixHQUFHO0FBQUEsSUFDL0IsTUFBTSxNQUFNO0FBQ1Ysc0JBQWdCLEtBQUs7QUFDckIsbUJBQWEsR0FBRztBQUFBLElBQ2xCO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFFTyxTQUFTLGVBQWVDLFNBQXlCLElBQXFDO0FBQzNGLFFBQU0sTUFBTSxTQUFTLEVBQUU7QUFDdkIsTUFBSSxDQUFDLE9BQU9BLFFBQU8sV0FBVyxFQUFHO0FBQ2pDLFFBQU0sUUFBdUJBLFFBQU8sSUFBSSxDQUFDLE9BQU9ELE9BQU07QUFDcEQsVUFBTSxVQUFVLFlBQVksT0FBTztBQUNuQyxjQUFVLFNBQVM7QUFBQSxNQUNqQixLQUFLLE1BQU07QUFBQSxNQUNYLFVBQVUsTUFBTTtBQUFBLE1BQ2hCLE9BQU8sTUFBTTtBQUFBLE1BQ2IsUUFBUSxNQUFNO0FBQUEsSUFDaEIsQ0FBQztBQUNELFVBQU0sUUFBUSxLQUFLLElBQUksR0FBSSxJQUFJLFFBQVEsTUFBTyxNQUFNLE9BQVEsSUFBSSxTQUFTLE1BQU8sTUFBTSxNQUFNO0FBQzVGLFVBQU1FLEtBQUksS0FBSyxJQUFJLEdBQUcsTUFBTSxRQUFRLEtBQUs7QUFDekMsVUFBTUMsS0FBSSxLQUFLLElBQUksR0FBRyxNQUFNLFNBQVMsS0FBSztBQUMxQyxVQUFNLE1BQU0sSUFBSSxLQUFLLElBQUksUUFBUSxLQUFLSCxLQUFJO0FBQzFDLFVBQU0sTUFBTSxJQUFJLEtBQUssSUFBSSxTQUFTLEtBQUtBLEtBQUk7QUFDM0MsV0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsSUFBSSxZQUFZLE9BQU87QUFBQSxRQUN2QjtBQUFBLFFBQ0EsTUFBTSxNQUFNO0FBQUEsUUFDWixHQUFHLEtBQUtFLEtBQUk7QUFBQSxRQUNaLEdBQUcsS0FBS0MsS0FBSTtBQUFBLFFBQ1osR0FBQUQ7QUFBQSxRQUNBLEdBQUFDO0FBQUEsUUFDQSxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsT0FBTyxJQUFJLE9BQU8sU0FBU0g7QUFBQSxJQUM3QjtBQUFBLEVBQ0YsQ0FBQztBQUdELFFBQU0sTUFBTSxNQUFNLElBQUksQ0FBQ0EsT0FBTUEsR0FBRSxNQUFNLEVBQUU7QUFDdkMsUUFBTSxTQUFTLE1BQU07QUFDbkIsVUFBTSxVQUFVLFNBQVMsRUFBRTtBQUMzQixRQUFJLENBQUMsUUFBUztBQUNkLFVBQU0sU0FBUyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQ0gsSUFBR0MsT0FBTUQsR0FBRSxRQUFRQyxHQUFFLEtBQUs7QUFDMUQsVUFBTSxTQUFTLENBQUMsR0FBRyxRQUFRLE1BQU07QUFDakMsZUFBVyxFQUFFLE9BQU8sTUFBTSxLQUFLLE9BQVEsUUFBTyxPQUFPLEtBQUssSUFBSSxPQUFPLE9BQU8sTUFBTSxHQUFHLEdBQUcsS0FBSztBQUM3RixjQUFVLENBQUNDLFFBQU8sRUFBRSxHQUFHQSxJQUFHLE9BQU8sRUFBRTtBQUNuQyxlQUFXLEVBQUUsTUFBTSxLQUFLLFFBQVE7QUFDOUIsWUFBTSxRQUFRRSxRQUFPLE1BQU0sVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFDdEUsY0FBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sV0FBVyxRQUFRO0FBQUEsUUFDbkIsVUFBVSxNQUFNO0FBQUEsUUFDaEIsV0FBVyxZQUFZLEtBQUs7QUFBQSxRQUM1QixNQUFNLE1BQU07QUFBQSxRQUNaLE1BQU0sZ0JBQWdCLEtBQUs7QUFBQSxRQUMzQixPQUFPLEVBQUUsVUFBVSxNQUFNLFNBQVMsS0FBSyxNQUFNLEtBQUssT0FBTyxNQUFNLE9BQU8sUUFBUSxNQUFNLE9BQU87QUFBQSxNQUM3RixDQUFDO0FBQUEsSUFDSDtBQUNBLHlCQUFxQjtBQUFBLEVBQ3ZCO0FBQ0EsU0FBTztBQUNQLGVBQWEsR0FBRztBQUNoQixjQUFZO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxNQUFNLE1BQU0sZ0JBQWdCLEdBQUc7QUFBQTtBQUFBLElBRS9CLE1BQU0sTUFBTTtBQUNWLHNCQUFnQixLQUFLO0FBQ3JCLG1CQUFhLEdBQUc7QUFBQSxJQUNsQjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBRU8sU0FBUyxhQUFhLFdBQW1CLFNBQXVCO0FBQ3JFLFFBQU0sTUFBTSxTQUFTLEVBQUU7QUFDdkIsTUFBSSxDQUFDLE9BQU8sY0FBYyxRQUFTO0FBQ25DLFFBQU0sU0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDUixPQUFNQSxHQUFFLEVBQUU7QUFDekMsUUFBTSxRQUFRLENBQUMsR0FBRyxNQUFNO0FBQ3hCLFFBQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxPQUFPLFdBQVcsQ0FBQztBQUN6QyxNQUFJLFVBQVUsT0FBVztBQUN6QixRQUFNLE9BQU8sU0FBUyxHQUFHLEtBQUs7QUFFOUIsUUFBTSxhQUFhLENBQUMsUUFBa0I7QUFDcEMsY0FBVSxDQUFDTSxPQUFNO0FBQ2YsWUFBTSxPQUFPLElBQUksSUFBSUEsR0FBRSxPQUFPLElBQUksQ0FBQ04sT0FBTSxDQUFDQSxHQUFFLElBQUlBLEVBQUMsQ0FBQyxDQUFDO0FBQ25ELFlBQU0sU0FBa0IsQ0FBQztBQUN6QixpQkFBVyxNQUFNLEtBQUs7QUFDcEIsY0FBTSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3pCLFlBQUksT0FBTztBQUNULGlCQUFPLEtBQUssS0FBSztBQUNqQixlQUFLLE9BQU8sRUFBRTtBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUNBLGFBQU8sS0FBSyxHQUFHLEtBQUssT0FBTyxDQUFDO0FBQzVCLGFBQU8sRUFBRSxHQUFHTSxJQUFHLE9BQU87QUFBQSxJQUN4QixDQUFDO0FBQ0QsWUFBUSxFQUFFLE1BQU0sWUFBWSxXQUFXLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUM5RCx5QkFBcUI7QUFBQSxFQUN2QjtBQUVBLGFBQVcsS0FBSztBQUNoQixjQUFZO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxNQUFNLE1BQU0sV0FBVyxNQUFNO0FBQUEsSUFDN0IsTUFBTSxNQUFNLFdBQVcsS0FBSztBQUFBLEVBQzlCLENBQUM7QUFDSDtBQUtPLFNBQVMsWUFBWSxJQUFZLE1BQW9CO0FBQzFELFFBQU0sTUFBTSxTQUFTLEVBQUU7QUFDdkIsUUFBTSxRQUFRLEtBQUssT0FBTyxLQUFLLENBQUNOLE9BQU1BLEdBQUUsT0FBTyxFQUFFO0FBQ2pELE1BQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxNQUFNLFNBQVMsS0FBTTtBQUMzQyxRQUFNLFFBQVEsQ0FBQyxVQUFrQjtBQUMvQixjQUFVLENBQUNNLFFBQU87QUFBQSxNQUNoQixHQUFHQTtBQUFBLE1BQ0gsUUFBUUEsR0FBRSxPQUFPLElBQUksQ0FBQ04sT0FBT0EsR0FBRSxPQUFPLEtBQUssRUFBRSxHQUFHQSxJQUFHLE1BQU0sTUFBTSxJQUFJQSxFQUFFO0FBQUEsSUFDdkUsRUFBRTtBQUNGLFlBQVEsRUFBRSxNQUFNLGVBQWUsSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUFBLEVBQ2xEO0FBQ0EsUUFBTSxTQUFTLE1BQU07QUFDckIsUUFBTSxJQUFJO0FBQ1YsY0FBWSxFQUFFLE9BQU8sZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMzRjtBQUVPLFNBQVMsY0FBYyxNQUFvQjtBQUNoRCxRQUFNLE1BQU0sU0FBUyxFQUFFO0FBQ3ZCLE1BQUksQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFNO0FBQy9CLFlBQVUsQ0FBQ00sUUFBTyxFQUFFLEdBQUdBLElBQUcsS0FBSyxFQUFFO0FBQ2pDLFVBQVEsRUFBRSxNQUFNLGlCQUFpQixJQUFJLElBQUksSUFBSSxLQUFLLENBQUM7QUFDckQ7QUFLQSxJQUFJO0FBRUcsU0FBUyx1QkFBNkI7QUFDM0MsTUFBSSxPQUFPLFdBQVcsWUFBYTtBQUNuQyxlQUFhLFVBQVU7QUFDdkIsZUFBYSxPQUFPLFdBQVcsTUFBTTtBQUNuQyxVQUFNLE1BQU0sU0FBUyxFQUFFO0FBQ3ZCLFFBQUksQ0FBQyxJQUFLO0FBQ1YsZ0JBQVksR0FBRyxFQUNaLEtBQUssQ0FBQyxVQUFVO0FBRWYsVUFBSSxTQUFTLEVBQUUsS0FBSyxPQUFPLElBQUksSUFBSTtBQUNqQyxnQkFBUSxFQUFFLE1BQU0sWUFBWSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUM7QUFBQSxNQUNqRDtBQUFBLElBQ0YsQ0FBQyxFQUNBLE1BQU0sTUFBTSxNQUFTO0FBQUEsRUFDMUIsR0FBRyxJQUFJO0FBQ1Q7OztBQ3RhTyxJQUFNLFdBQVc7QUFDakIsSUFBTSxXQUFXO0FBQ3hCLElBQU0sY0FBYztBQUVwQixJQUFNLHlCQUF5QjtBQUV4QixJQUFNLGFBQThDLEVBQUUsU0FBUyxLQUFLO0FBR3BFLFNBQVMsZUFBZSxNQUFzQjtBQUNqRCxTQUFPLElBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBQ3hEO0FBR08sU0FBUyxxQkFBcUIsTUFBc0I7QUFDdkQsU0FBTyx5QkFBeUIsS0FBSyxLQUFLLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUN0RTtBQUVPLFNBQVMsY0FDWixTQUNBLFNBQ3dCO0FBQ3hCLFFBQU0sS0FBSyxXQUFXO0FBQ3RCLFFBQU0sRUFBRSxLQUFLLElBQUksU0FBUztBQUMxQixRQUFNLE9BQU8sSUFBSSxzQkFBc0IsS0FBSyxFQUFFLE1BQU0sR0FBRyxLQUFLLEVBQUU7QUFDOUQsU0FBTztBQUFBLElBQ0gsSUFBSSxVQUFVLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSztBQUFBLElBQzVDLElBQUksVUFBVSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUs7QUFBQSxFQUMvQztBQUNKO0FBRU8sU0FBUyxhQUNaLFNBQ0EsU0FDQSxVQUNJO0FBQ0osUUFBTSxLQUFLLFdBQVc7QUFDdEIsTUFBSSxDQUFDLEdBQUk7QUFDVCxRQUFNLE9BQU8sR0FBRyxzQkFBc0I7QUFDdEMsUUFBTSxFQUFFLEtBQUssSUFBSSxTQUFTO0FBQzFCLFFBQU0sT0FBTyxNQUFNLFVBQVUsVUFBVSxRQUFRO0FBQy9DLFFBQU0sTUFBTSxVQUFVLEtBQUssT0FBTyxLQUFLLFFBQVEsS0FBSztBQUNwRCxRQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUs7QUFDbkQsV0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE1BQU0sVUFBVSxLQUFLLE9BQU8sS0FBSztBQUFBLE1BQ2pDLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDSixDQUFDO0FBQ0w7QUFFTyxTQUFTLFlBQVksTUFBYyxNQUFvQjtBQUMxRCxRQUFNLEVBQUUsS0FBSyxJQUFJLFNBQVM7QUFDMUIsV0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sTUFBTSxLQUFLLEVBQUUsQ0FBQztBQUM5QztBQUdPLFNBQVMsT0FBTyxXQUF5QjtBQUM1QyxRQUFNLEtBQUssV0FBVztBQUN0QixNQUFJLENBQUMsR0FBSTtBQUNULFFBQU0sT0FBTyxHQUFHLHNCQUFzQjtBQUN0QyxRQUFNLE9BQU8sU0FBUyxFQUFFLEtBQUs7QUFDN0IsUUFBTSxPQUFPLGVBQWUsSUFBSTtBQUNoQyxRQUFNLFNBQVMsWUFBWSxJQUFJLE9BQU8sSUFBSTtBQUMxQztBQUFBLElBQ0ksS0FBSyxPQUFPLEtBQUssUUFBUTtBQUFBLElBQ3pCLEtBQUssTUFBTSxLQUFLLFNBQVM7QUFBQSxJQUN6QixPQUFPO0FBQUEsRUFDWDtBQUNKO0FBRU8sU0FBUyxTQUFlO0FBQzNCLFFBQU0sS0FBSyxXQUFXO0FBQ3RCLFFBQU0sTUFBTSxTQUFTLEVBQUU7QUFDdkIsTUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFLO0FBQ2pCLFFBQU0sT0FBTyxHQUFHLHNCQUFzQjtBQUN0QyxRQUFNLE9BQU87QUFBQSxJQUNULEtBQUs7QUFBQSxPQUNBLEtBQUssUUFBUSxjQUFjLEtBQUssSUFBSTtBQUFBLE9BQ3BDLEtBQUssU0FBUyxjQUFjLEtBQUssSUFBSTtBQUFBLElBQzFDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNKO0FBQ0EsV0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLE9BQU8sS0FBSyxRQUFRLElBQUksUUFBUSxRQUFRO0FBQUEsTUFDeEMsT0FBTyxLQUFLLFNBQVMsSUFBSSxTQUFTLFFBQVE7QUFBQSxJQUM5QztBQUFBLEVBQ0osQ0FBQztBQUNMO0FBRU8sU0FBUyxhQUFtQjtBQUMvQixXQUFTLEVBQUUsWUFBWSxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUM7QUFDdEQ7OztBQzNGTyxJQUFNLFVBQW1DO0FBQUEsRUFDOUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUNqQixHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRTtBQUFBLEVBQ2xCLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDakIsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUk7QUFBQSxFQUNsQixJQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQ2pCLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFO0FBQUEsRUFDbEIsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUNqQixHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSTtBQUNwQjtBQUVPLElBQU0sYUFBYSxPQUFPLEtBQUssT0FBTztBQUV0QyxTQUFTLGVBQWUsUUFBMkI7QUFDeEQsU0FBTyxPQUFPLFdBQVc7QUFDM0I7QUFFTyxTQUFTLFNBQVMsS0FBcUI7QUFDNUMsU0FBUSxNQUFNLEtBQUssS0FBTTtBQUMzQjtBQUVPLFNBQVMsVUFBVUssSUFBVSxLQUFvQjtBQUN0RCxRQUFNLE1BQU0sU0FBUyxHQUFHO0FBQ3hCLFFBQU0sTUFBTSxLQUFLLElBQUksR0FBRztBQUN4QixRQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUc7QUFDeEIsU0FBTyxFQUFFLEdBQUdBLEdBQUUsSUFBSSxNQUFNQSxHQUFFLElBQUksS0FBSyxHQUFHQSxHQUFFLElBQUksTUFBTUEsR0FBRSxJQUFJLElBQUk7QUFDOUQ7QUFFTyxTQUFTLFlBQVlDLElBQTBCO0FBQ3BELFNBQU8sRUFBRSxHQUFHQSxHQUFFLElBQUlBLEdBQUUsSUFBSSxHQUFHLEdBQUdBLEdBQUUsSUFBSUEsR0FBRSxJQUFJLEVBQUU7QUFDOUM7QUFHTyxTQUFTLGlCQUFpQkEsSUFBbUIsTUFBb0I7QUFDdEUsUUFBTSxTQUFTLFlBQVlBLEVBQUM7QUFDNUIsUUFBTSxRQUFRLEVBQUUsSUFBSSxLQUFLLElBQUksT0FBT0EsR0FBRSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU9BLEdBQUUsRUFBRTtBQUNqRSxRQUFNLFVBQVUsVUFBVSxPQUFPQSxHQUFFLFFBQVE7QUFDM0MsU0FBTyxFQUFFLEdBQUcsT0FBTyxJQUFJLFFBQVEsR0FBRyxHQUFHLE9BQU8sSUFBSSxRQUFRLEVBQUU7QUFDNUQ7QUFFTyxTQUFTLGVBQWUsS0FBcUI7QUFDbEQsTUFBSUMsS0FBSSxNQUFNO0FBQ2QsTUFBSUEsS0FBSSxJQUFLLENBQUFBLE1BQUs7QUFDbEIsTUFBSUEsTUFBSyxLQUFNLENBQUFBLE1BQUs7QUFDcEIsU0FBT0E7QUFDVDtBQU9PLFNBQVMsZ0JBQ2QsT0FDQSxRQUNBLFNBQ0EsTUFDNkM7QUFDN0MsUUFBTUMsS0FBSSxRQUFRLE1BQU07QUFDeEIsUUFBTSxTQUFTLEVBQUUsR0FBRyxJQUFJQSxHQUFFLEdBQUcsR0FBRyxJQUFJQSxHQUFFLEVBQUU7QUFDeEMsUUFBTSxjQUFjLGlCQUFpQixPQUFPLE1BQU07QUFHbEQsUUFBTUgsS0FBSSxVQUFVLEVBQUUsR0FBRyxRQUFRLElBQUksWUFBWSxHQUFHLEdBQUcsUUFBUSxJQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxRQUFRO0FBQ25HLFFBQU0sT0FBT0csR0FBRSxJQUFJLE9BQU87QUFDMUIsUUFBTSxPQUFPQSxHQUFFLElBQUksT0FBTztBQUUxQixNQUFJQyxLQUFJLE1BQU07QUFDZCxNQUFJLE1BQU0sTUFBTTtBQUVoQixNQUFJLGVBQWUsTUFBTSxLQUFLLENBQUMsTUFBTTtBQUVuQyxVQUFNLEtBQUssT0FBTyxNQUFNO0FBQ3hCLFVBQU0sS0FBSyxPQUFPLE1BQU07QUFDeEIsVUFBTUMsS0FBSSxLQUFLO0FBQUEsTUFDYixpQkFBaUIsS0FBSyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFBQSxPQUN6Q0wsR0FBRSxJQUFJLEtBQUtBLEdBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxLQUFLO0FBQUEsSUFDMUM7QUFDQSxJQUFBSSxLQUFJLEtBQUssSUFBSSxnQkFBZ0IsTUFBTSxJQUFJQyxFQUFDO0FBQ3hDLFVBQU0sS0FBSyxJQUFJLGdCQUFnQixNQUFNLElBQUlBLEVBQUM7QUFBQSxFQUM1QyxPQUFPO0FBQ0wsUUFBSSxTQUFTLEVBQUcsQ0FBQUQsS0FBSSxLQUFLLElBQUksZ0JBQWdCSixHQUFFLElBQUksSUFBSTtBQUN2RCxRQUFJLFNBQVMsRUFBRyxPQUFNLEtBQUssSUFBSSxnQkFBZ0JBLEdBQUUsSUFBSSxJQUFJO0FBQUEsRUFDM0Q7QUFHQSxRQUFNLGVBQWUsVUFBVSxFQUFFLElBQUksTUFBTSxPQUFPLEtBQUtJLElBQUcsSUFBSSxNQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsTUFBTSxRQUFRO0FBQ3JHLFFBQU0sS0FBSyxZQUFZLElBQUksYUFBYTtBQUN4QyxRQUFNLEtBQUssWUFBWSxJQUFJLGFBQWE7QUFDeEMsU0FBTyxFQUFFLEdBQUcsS0FBS0EsS0FBSSxHQUFHLEdBQUcsS0FBSyxNQUFNLEdBQUcsR0FBQUEsSUFBRyxHQUFHLElBQUk7QUFDckQ7QUFHTyxTQUFTLG9CQUFvQixPQUF1QixTQUFnQixNQUF1QjtBQUNoRyxRQUFNLFNBQVMsWUFBWSxLQUFLO0FBQ2hDLFFBQU0sTUFBTyxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksTUFBTyxLQUFLLEtBQUs7QUFDdkYsUUFBTSxVQUFVLE9BQU8sS0FBSyxNQUFNLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDbkQsU0FBTyxlQUFlLE9BQU87QUFDL0I7OztBQ3RHQSxTQUFTLGtCQUFrQixNQUE2QjtBQUN0RCxTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxVQUFNLFNBQVMsSUFBSSxXQUFXO0FBQzlCLFdBQU8sU0FBUyxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU0sQ0FBQztBQUNuRCxXQUFPLFVBQVUsTUFBTSxPQUFPLElBQUksTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxXQUFPLGNBQWMsSUFBSTtBQUFBLEVBQzNCLENBQUM7QUFDSDtBQUVBLFNBQVMsWUFBWSxLQUF3QztBQUMzRCxTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxVQUFNLE1BQU0sSUFBSSxNQUFNO0FBQ3RCLFFBQUksU0FBUyxNQUFNLFFBQVEsR0FBRztBQUM5QixRQUFJLFVBQVUsTUFBTSxPQUFPLElBQUksTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxRQUFJLE1BQU07QUFBQSxFQUNaLENBQUM7QUFDSDtBQUVBLFNBQVMsU0FBUyxVQUEwQjtBQUMxQyxTQUFPLFNBQVMsUUFBUSxZQUFZLEVBQUUsS0FBSztBQUM3QztBQUVBLGVBQXNCLG9CQUFvQixNQUFvQztBQUM1RSxRQUFNLFdBQVcsTUFBTSxrQkFBa0IsSUFBSTtBQUM3QyxRQUFNLE1BQU0sTUFBTSxZQUFZLFFBQVE7QUFDdEMsUUFBTSxRQUFRLElBQUk7QUFDbEIsUUFBTSxTQUFTLElBQUk7QUFDbkIsTUFBSSxRQUFRLEtBQUssU0FBUyxHQUFHO0FBQzNCLFVBQU0sSUFBSSxNQUFNLHVCQUF1QjtBQUFBLEVBQ3pDO0FBRUEsUUFBTSxRQUFRLEtBQUssSUFBSSxHQUFHLGdCQUFnQixLQUFLLElBQUksT0FBTyxNQUFNLENBQUM7QUFDakUsTUFBSSxVQUFVLEdBQUc7QUFDZixXQUFPLEVBQUUsS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLFNBQVMsS0FBSyxJQUFJLEVBQUU7QUFBQSxFQUNuRTtBQUVBLFFBQU1FLEtBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDO0FBQy9DLFFBQU1DLEtBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQ2hELFFBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxTQUFPLFFBQVFEO0FBQ2YsU0FBTyxTQUFTQztBQUNoQixRQUFNLE1BQU0sT0FBTyxXQUFXLElBQUk7QUFDbEMsTUFBSSxDQUFDLElBQUssT0FBTSxJQUFJLE1BQU0sb0JBQW9CO0FBQzlDLE1BQUksVUFBVSxLQUFLLEdBQUcsR0FBR0QsSUFBR0MsRUFBQztBQUU3QixRQUFNLE1BQ0osS0FBSyxTQUFTLGVBQWUsT0FBTyxVQUFVLGNBQWMsR0FBRyxJQUFJLE9BQU8sVUFBVSxXQUFXO0FBQ2pHLFNBQU8sRUFBRSxLQUFLLE9BQU9ELElBQUcsUUFBUUMsSUFBRyxNQUFNLFNBQVMsS0FBSyxJQUFJLEVBQUU7QUFDL0Q7QUFFTyxTQUFTLDJCQUEyQixJQUFpQztBQUMxRSxNQUFJLENBQUMsR0FBSSxRQUFPLENBQUM7QUFDakIsU0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVMsS0FBSyxLQUFLLFdBQVcsUUFBUSxDQUFDO0FBQ3RFOzs7QUV4Q2EsSUNoQlRDLEtBQVU7QUF3QmQsU0FBU0MsR0FBWUMsSUFBTUMsSUFBT0MsSUFBS0MsSUFBa0JDLElBQVVDLElBQUFBO0FBQzdESixFQUFBQSxPQUFPQSxLQUFRLENBQUE7QUFJcEIsTUFDQ0ssSUFDQUMsSUFGR0MsS0FBa0JQO0FBSXRCLE1BQUksU0FBU08sR0FFWixNQUFLRCxNQURMQyxLQUFrQixDQUFBLEdBQ1JQLEdBQ0EsVUFBTE0sS0FDSEQsS0FBTUwsR0FBTU0sRUFBQUEsSUFFWkMsR0FBZ0JELEVBQUFBLElBQUtOLEdBQU1NLEVBQUFBO0FBTTlCLE1BQU1FLEtBQVEsRUFDYlQsTUFBQUEsSUFDQUMsT0FBT08sSUFDUE4sS0FBQUEsSUFDQUksS0FBQUEsSUFDQUksS0FBVyxNQUNYQyxJQUFTLE1BQ1RDLEtBQVEsR0FDUkMsS0FBTSxNQUNOQyxLQUFZLE1BQ1pDLGFBQUFBLFFBQ0FDLEtBQUFBLEVBQWFDLElBQ2JDLEtBQUFBLElBQ0FDLEtBQVEsR0FDUmYsVUFBQUEsSUFDQUMsUUFBQUEsR0FBQUE7QUFLRCxNQUFvQixjQUFBLE9BQVRMLE9BQXdCTSxLQUFNTixHQUFLb0IsY0FDN0MsTUFBS2IsTUFBS0QsR0FBQUEsWUFDTEUsR0FBZ0JELEVBQUFBLE1BQ25CQyxHQUFnQkQsRUFBQUEsSUFBS0QsR0FBSUMsRUFBQUE7QUFLNUIsU0FESWMsRUFBUVosU0FBT1ksRUFBUVosTUFBTUEsRUFBQUEsR0FDMUJBO0FBQ1I7OztBQ3RDQSxJQUFNLGlCQUEyQztBQUFBLEVBQy9DLElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILElBQUk7QUFBQSxFQUNKLEdBQUc7QUFBQSxFQUNILElBQUk7QUFBQSxFQUNKLEdBQUc7QUFDTDtBQUVBLFNBQVMsVUFBVSxFQUFFLE1BQU0sR0FBcUI7QUFDOUMsUUFBTSxRQUFRLGNBQWMsTUFBTSxPQUFPO0FBQ3pDLFFBQU0sUUFBUTtBQUFBLElBQ1osT0FBTyxNQUFNO0FBQUEsSUFDYixRQUFRLE1BQU07QUFBQSxJQUNkLFdBQVcsYUFBYSxNQUFNLENBQUMsT0FBTyxNQUFNLENBQUMsY0FBYyxNQUFNLFFBQVE7QUFBQSxJQUN6RSxTQUFTLE1BQU07QUFBQSxJQUNmLFNBQVMsTUFBTSxVQUFVLFVBQVU7QUFBQSxFQUNyQztBQUNBLE1BQUksQ0FBQyxPQUFPO0FBQ1YsV0FBTyxnQkFBQWEsR0FBQyxTQUFJLGdCQUFjLE1BQU0sSUFBSSxXQUFVLHlEQUF3RCxPQUFjO0FBQUEsRUFDdEg7QUFDQSxTQUNFLGdCQUFBQTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsS0FBSyxNQUFNO0FBQUEsTUFDWCxnQkFBYyxNQUFNO0FBQUEsTUFDcEIsV0FBVztBQUFBLE1BQ1gsV0FBVTtBQUFBLE1BQ1YsS0FBSyxNQUFNO0FBQUEsTUFDWDtBQUFBO0FBQUEsRUFDRjtBQUVKO0FBRUEsU0FBUyxhQUFhLEVBQUUsT0FBTyxNQUFNLE9BQU8sR0FBb0Q7QUFDOUYsUUFBTSxhQUFhLEtBQUs7QUFDeEIsU0FDRSxnQkFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxRQUNMLE9BQU8sTUFBTTtBQUFBLFFBQ2IsUUFBUSxNQUFNO0FBQUEsUUFDZCxXQUFXLGFBQWEsTUFBTSxDQUFDLE9BQU8sTUFBTSxDQUFDLGNBQWMsTUFBTSxRQUFRO0FBQUEsTUFDM0U7QUFBQSxNQUVBO0FBQUEsd0JBQUFBLEdBQUMsU0FBSSxXQUFVLG1DQUFrQyxPQUFPLEVBQUUsYUFBYSxNQUFNLE1BQU0sYUFBYSxRQUFRLEdBQUc7QUFBQSxRQUMxRyxTQUNDLGdCQUFBQSxHQUFBLEtBRUU7QUFBQSwwQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLFdBQVU7QUFBQSxjQUNWLE9BQU8sRUFBRSxNQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sT0FBTyxNQUFNLE1BQU0sUUFBUSxLQUFLLE1BQU0sV0FBVyxtQkFBbUI7QUFBQTtBQUFBLFVBQzdHO0FBQUEsVUFDQSxnQkFBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLGVBQVk7QUFBQSxjQUNaLFdBQVU7QUFBQSxjQUNWLE9BQU87QUFBQSxnQkFDTCxNQUFNO0FBQUEsZ0JBQ04sS0FBSyxNQUFNO0FBQUEsZ0JBQ1gsT0FBTztBQUFBLGdCQUNQLFFBQVE7QUFBQSxnQkFDUixXQUFXO0FBQUEsZ0JBQ1gsUUFBUTtBQUFBLGNBQ1Y7QUFBQTtBQUFBLFVBQ0Y7QUFBQSxVQUNDLFdBQVcsSUFBSSxDQUFDLE9BQ2YsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxlQUFhO0FBQUEsY0FFYixXQUFVO0FBQUEsY0FDVixPQUFPO0FBQUEsZ0JBQ0wsTUFBTSxHQUFHLFFBQVEsRUFBRSxFQUFFLElBQUksR0FBRztBQUFBLGdCQUM1QixLQUFLLEdBQUcsUUFBUSxFQUFFLEVBQUUsSUFBSSxHQUFHO0FBQUEsZ0JBQzNCLE9BQU87QUFBQSxnQkFDUCxRQUFRO0FBQUEsZ0JBQ1IsV0FBVztBQUFBLGdCQUNYLFFBQVEsZUFBZSxFQUFFO0FBQUEsY0FDM0I7QUFBQTtBQUFBLFlBVEs7QUFBQSxVQVVQLENBQ0Q7QUFBQSxXQUNILElBQ0U7QUFBQTtBQUFBO0FBQUEsRUFDTjtBQUVKO0FBRU8sU0FBUyxjQUFjO0FBQzVCLFFBQU0sTUFBTSxVQUFVLENBQUNDLE9BQU1BLEdBQUUsR0FBRztBQUNsQyxRQUFNLE9BQU8sVUFBVSxDQUFDQSxPQUFNQSxHQUFFLElBQUk7QUFDcEMsUUFBTSxZQUFZLFVBQVUsQ0FBQ0EsT0FBTUEsR0FBRSxTQUFTO0FBQzlDLFFBQU0sT0FBTyxVQUFVLENBQUNBLE9BQU1BLEdBQUUsSUFBSTtBQUNwQyxRQUFNLFdBQVcsVUFBVSxDQUFDQSxPQUFNQSxHQUFFLFFBQVE7QUFDNUMsUUFBTSxhQUFhLFVBQVUsQ0FBQ0EsT0FBTUEsR0FBRSxVQUFVO0FBRWhELFFBQU0sTUFBTUMsR0FBdUIsSUFBSTtBQUN2QyxRQUFNLGFBQWFBLEdBQXVCLElBQUk7QUFDOUMsUUFBTSxhQUFhQSxHQUFPLEtBQUs7QUFFL0IsRUFBQUMsR0FBVSxNQUFNO0FBQ2QsZUFBVyxVQUFVLElBQUk7QUFDekIsV0FBTyxNQUFNO0FBQ1gsaUJBQVcsVUFBVTtBQUFBLElBQ3ZCO0FBQUEsRUFDRixHQUFHLENBQUMsQ0FBQztBQUdMLEVBQUFBLEdBQVUsTUFBTTtBQUNkLFdBQU87QUFBQSxFQUNULEdBQUcsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDO0FBR3hCLEVBQUFBLEdBQVUsTUFBTTtBQUNkLFVBQU0sS0FBSyxJQUFJO0FBQ2YsUUFBSSxDQUFDLEdBQUk7QUFDVCxVQUFNLFVBQVUsQ0FBQ0MsT0FBa0I7QUFDakMsTUFBQUEsR0FBRSxlQUFlO0FBQ2pCLFlBQU0sRUFBRSxNQUFNQyxHQUFFLElBQUksU0FBUztBQUM3QixVQUFJRCxHQUFFLFdBQVdBLEdBQUUsU0FBUztBQUMxQjtBQUFBLFVBQ0VBLEdBQUU7QUFBQSxVQUNGQSxHQUFFO0FBQUEsVUFDRkMsR0FBRSxPQUFPLEtBQUssSUFBSSxDQUFDRCxHQUFFLFNBQVMscUJBQXFCQyxHQUFFLElBQUksQ0FBQztBQUFBLFFBQzVEO0FBQUEsTUFDRixPQUFPO0FBQ0wsb0JBQVlBLEdBQUUsT0FBT0QsR0FBRSxRQUFRQyxHQUFFLE9BQU9ELEdBQUUsTUFBTTtBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUNBLE9BQUcsaUJBQWlCLFNBQVMsU0FBUyxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3hELFdBQU8sTUFBTSxHQUFHLG9CQUFvQixTQUFTLE9BQU87QUFBQSxFQUN0RCxHQUFHLENBQUMsQ0FBQztBQUVMLE1BQUksQ0FBQyxJQUFLLFFBQU87QUFFakIsUUFBTSxVQUFVLFNBQVMsVUFBVTtBQUVuQyxXQUFTLGNBQWNBLElBQWlCO0FBQ3RDLFVBQU0sS0FBSyxJQUFJO0FBQ2YsUUFBSSxDQUFDLE1BQU1BLEdBQUUsV0FBVyxFQUFHO0FBQzNCLFVBQU0sU0FBU0EsR0FBRTtBQUNqQixVQUFNRSxTQUFRLFNBQVM7QUFFdkIsUUFBSUYsR0FBRSxXQUFXLEtBQUssU0FBUztBQUM3QixpQkFBVyxVQUFVO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFFBQ04sY0FBY0EsR0FBRTtBQUFBLFFBQ2hCLGNBQWNBLEdBQUU7QUFBQSxRQUNoQixXQUFXRSxPQUFNLEtBQUs7QUFBQSxRQUN0QixXQUFXQSxPQUFNLEtBQUs7QUFBQSxNQUN4QjtBQUNBLGlCQUFXLFVBQVU7QUFDckIsU0FBRyxrQkFBa0JGLEdBQUUsU0FBUztBQUNoQyxNQUFBQSxHQUFFLGVBQWU7QUFDakI7QUFBQSxJQUNGO0FBRUEsVUFBTSxTQUFTLE9BQU8sUUFBUSxlQUFlLEdBQUcsYUFBYSxhQUFhO0FBQzFFLFFBQUksVUFBVUUsT0FBTSxVQUFVLFdBQVcsR0FBRztBQUMxQyxZQUFNLFFBQVFBLE9BQU0sS0FBSyxPQUFPLEtBQUssQ0FBQ0MsT0FBTUEsR0FBRSxPQUFPRCxPQUFNLFVBQVUsQ0FBQyxDQUFDO0FBQ3ZFLFVBQUksT0FBTztBQUNULGNBQU0sUUFBd0IsRUFBRSxHQUFHLE1BQU07QUFDekMsbUJBQVcsVUFDVCxXQUFXLFFBQ1AsRUFBRSxNQUFNLFVBQVUsSUFBSSxNQUFNLElBQUksTUFBTSxJQUN0QyxFQUFFLE1BQU0sU0FBUyxJQUFJLE1BQU0sSUFBSSxRQUE0QixNQUFNO0FBQ3ZFLFdBQUcsa0JBQWtCRixHQUFFLFNBQVM7QUFDaEMsUUFBQUEsR0FBRSxlQUFlO0FBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQVUsT0FBTyxRQUFRLGdCQUFnQixHQUFHLGFBQWEsY0FBYztBQUM3RSxRQUFJLFNBQVM7QUFDWCxVQUFJQSxHQUFFLFVBQVU7QUFDZCx1QkFBZSxPQUFPO0FBQ3RCO0FBQUEsTUFDRjtBQUNBLFVBQUksQ0FBQ0UsT0FBTSxVQUFVLFNBQVMsT0FBTyxHQUFHO0FBQ3RDLHFCQUFhLENBQUMsT0FBTyxDQUFDO0FBQUEsTUFDeEI7QUFDQSxZQUFNLFFBQVEsY0FBY0YsR0FBRSxTQUFTQSxHQUFFLE9BQU87QUFDaEQsWUFBTSxXQUFXLFNBQVMsRUFBRTtBQUM1QixZQUFNLFNBQVMsb0JBQUksSUFBc0M7QUFDekQsaUJBQVcsU0FBUyxTQUFTLEVBQUUsS0FBSyxVQUFVLENBQUMsR0FBRztBQUNoRCxZQUFJLFNBQVMsU0FBUyxNQUFNLEVBQUUsRUFBRyxRQUFPLElBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUFBLE1BQ2xGO0FBQ0EsaUJBQVcsVUFBVSxFQUFFLE1BQU0sUUFBUSxRQUFRLE1BQU0sR0FBRyxRQUFRLE1BQU0sR0FBRyxRQUFRLE9BQU8sTUFBTTtBQUM1RixTQUFHLGtCQUFrQkEsR0FBRSxTQUFTO0FBQ2hDLE1BQUFBLEdBQUUsZUFBZTtBQUNqQjtBQUFBLElBQ0Y7QUFFQSxpQkFBYSxDQUFDLENBQUM7QUFBQSxFQUNqQjtBQUVBLFdBQVMsY0FBY0EsSUFBaUI7QUFDdEMsVUFBTSxVQUFVLFdBQVc7QUFDM0IsUUFBSSxDQUFDLFFBQVM7QUFFZCxRQUFJLFFBQVEsU0FBUyxPQUFPO0FBQzFCO0FBQUEsUUFDRSxRQUFRLGFBQWFBLEdBQUUsVUFBVSxRQUFRO0FBQUEsUUFDekMsUUFBUSxhQUFhQSxHQUFFLFVBQVUsUUFBUTtBQUFBLE1BQzNDO0FBQ0E7QUFBQSxJQUNGO0FBRUEsVUFBTSxRQUFRLGNBQWNBLEdBQUUsU0FBU0EsR0FBRSxPQUFPO0FBRWhELFFBQUksUUFBUSxTQUFTLFFBQVE7QUFDM0IsWUFBTSxLQUFLLE1BQU0sSUFBSSxRQUFRO0FBQzdCLFlBQU0sS0FBSyxNQUFNLElBQUksUUFBUTtBQUM3QixVQUFJLENBQUMsUUFBUSxTQUFTLEtBQUssTUFBTSxJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxPQUFPLEVBQUc7QUFDckUsY0FBUSxRQUFRO0FBQ2hCLFlBQU0sVUFBVSxvQkFBSSxJQUE0QjtBQUNoRCxpQkFBVyxDQUFDLElBQUksS0FBSyxLQUFLLFFBQVEsUUFBUTtBQUN4QyxnQkFBUSxJQUFJLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQ3REO0FBQ0EscUJBQWUsT0FBTztBQUN0QjtBQUFBLElBQ0Y7QUFFQSxRQUFJLFFBQVEsU0FBUyxTQUFTO0FBQzVCLFlBQU0sT0FBTyxnQkFBZ0IsUUFBUSxPQUFPLFFBQVEsUUFBUSxPQUFPQSxHQUFFLFFBQVE7QUFDN0UscUJBQWUsb0JBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUM7QUFBQSxJQUNGO0FBRUEsVUFBTSxXQUFXLG9CQUFvQixRQUFRLE9BQU8sT0FBT0EsR0FBRSxRQUFRO0FBQ3JFLG1CQUFlLG9CQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3REO0FBRUEsV0FBUyxjQUFjO0FBQ3JCLFVBQU0sVUFBVSxXQUFXO0FBQzNCLGVBQVcsVUFBVTtBQUNyQixlQUFXLFVBQVU7QUFDckIsUUFBSSxDQUFDLFdBQVcsUUFBUSxTQUFTLE1BQU87QUFFeEMsVUFBTSxTQUFTLFNBQVMsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUMxQyxVQUFNLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDRyxPQUFNLENBQUNBLEdBQUUsSUFBSUEsRUFBQyxDQUFDLENBQUM7QUFFakQsUUFBSSxRQUFRLFNBQVMsUUFBUTtBQUMzQixVQUFJLENBQUMsUUFBUSxNQUFPO0FBQ3BCLFlBQU0sVUFBNkIsQ0FBQztBQUNwQyxpQkFBVyxDQUFDLElBQUksS0FBSyxLQUFLLFFBQVEsUUFBUTtBQUN4QyxjQUFNQyxTQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3pCLFlBQUlBLFFBQU87QUFDVCxrQkFBUSxLQUFLLEVBQUUsSUFBSSxRQUFRLE9BQU8sT0FBTyxFQUFFLEdBQUdBLE9BQU0sR0FBRyxHQUFHQSxPQUFNLEVBQUUsRUFBRSxDQUFDO0FBQUEsUUFDdkU7QUFBQSxNQUNGO0FBQ0EsdUJBQWlCLFFBQVEsT0FBTztBQUNoQztBQUFBLElBQ0Y7QUFFQSxVQUFNLFFBQVEsS0FBSyxJQUFJLFFBQVEsRUFBRTtBQUNqQyxRQUFJLENBQUMsTUFBTztBQUNaLFFBQUksUUFBUSxTQUFTLFNBQVM7QUFDNUIsWUFBTSxFQUFFLEdBQUFDLElBQUcsR0FBQUMsSUFBRyxHQUFBQyxJQUFHLEdBQUFSLEdBQUUsSUFBSSxRQUFRO0FBQy9CLHVCQUFpQixVQUFVO0FBQUEsUUFDekIsRUFBRSxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUUsR0FBQU0sSUFBRyxHQUFBQyxJQUFHLEdBQUFDLElBQUcsR0FBQVIsR0FBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxFQUFFO0FBQUEsTUFDcEcsQ0FBQztBQUNEO0FBQUEsSUFDRjtBQUNBLHFCQUFpQixVQUFVO0FBQUEsTUFDekIsRUFBRSxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUUsVUFBVSxRQUFRLE1BQU0sU0FBUyxHQUFHLE9BQU8sRUFBRSxVQUFVLE1BQU0sU0FBUyxFQUFFO0FBQUEsSUFDcEcsQ0FBQztBQUFBLEVBQ0g7QUFFQSxpQkFBZSxPQUFPQyxJQUFjO0FBQ2xDLElBQUFBLEdBQUUsZUFBZTtBQUNqQixVQUFNLFFBQVEsMkJBQTJCQSxHQUFFLFlBQVk7QUFDdkQsUUFBSSxNQUFNLFdBQVcsRUFBRztBQUN4QixVQUFNLEtBQUssY0FBY0EsR0FBRSxTQUFTQSxHQUFFLE9BQU87QUFDN0MsVUFBTVEsVUFBUyxNQUFNLFFBQVEsSUFBSSxNQUFNLElBQUksbUJBQW1CLENBQUM7QUFDL0QsbUJBQWVBLFNBQVEsRUFBRTtBQUFBLEVBQzNCO0FBRUEsUUFBTSxpQkFBaUIsSUFBSSxPQUFPLE9BQU8sQ0FBQ0wsT0FBTSxVQUFVLFNBQVNBLEdBQUUsRUFBRSxLQUFLQSxHQUFFLE9BQU87QUFDckYsUUFBTSxTQUFTLFVBQVcsV0FBVyxVQUFVLGFBQWEsU0FBVTtBQUV0RSxTQUNFLGdCQUFBUDtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0M7QUFBQSxNQUNBLFdBQVU7QUFBQSxNQUNWLE9BQU8sRUFBRSxPQUFPO0FBQUEsTUFDaEI7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsTUFDakIsWUFBWSxDQUFDSSxPQUFpQkEsR0FBRSxlQUFlO0FBQUEsTUFDL0MsUUFBUSxDQUFDQSxPQUFpQixLQUFLLE9BQU9BLEVBQUM7QUFBQSxNQUV2QztBQUFBLHdCQUFBSjtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsV0FBVTtBQUFBLFlBQ1YsT0FBTyxFQUFFLFdBQVcsYUFBYSxLQUFLLElBQUksT0FBTyxLQUFLLElBQUksYUFBYSxLQUFLLElBQUksS0FBSyxpQkFBaUIsTUFBTTtBQUFBLFlBRTVHO0FBQUEsOEJBQUFBO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUNDLFdBQVU7QUFBQSxrQkFDVixPQUFPO0FBQUEsb0JBQ0wsT0FBTyxJQUFJO0FBQUEsb0JBQ1gsUUFBUSxJQUFJO0FBQUEsa0JBQ2Q7QUFBQSxrQkFFQyxjQUFJLE9BQU8sSUFBSSxDQUFDLFVBQ2YsZ0JBQUFBLEdBQUMsYUFBeUIsU0FBVixNQUFNLEVBQWtCLENBQ3pDO0FBQUE7QUFBQSxjQUNIO0FBQUEsY0FDQyxlQUFlLElBQUksQ0FBQyxVQUNuQixnQkFBQUEsR0FBQyxnQkFBNEIsT0FBYyxNQUFNLEtBQUssTUFBTSxRQUFRLGVBQWUsV0FBVyxLQUEzRSxNQUFNLEVBQXdFLENBQ2xHO0FBQUE7QUFBQTtBQUFBLFFBQ0g7QUFBQSxRQUNDLElBQUksT0FBTyxXQUFXLElBQ3JCLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxnQkFDYiwwQkFBQUEsR0FBQyxPQUFFLCtEQUVILEdBQ0YsSUFDRTtBQUFBO0FBQUE7QUFBQSxFQUNOO0FBRUo7OztBQ3BXQSxTQUFTLEtBQUssRUFBRSxVQUFVLFdBQVcsTUFBTSxHQUFnRDtBQUN6RixTQUNFLGdCQUFBYTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsZUFBYSxRQUFRLFNBQVk7QUFBQSxNQUNqQztBQUFBLE1BQ0EsTUFBSztBQUFBLE1BQ0wsUUFBTztBQUFBLE1BQ1AsTUFBTSxRQUFRLFFBQVE7QUFBQSxNQUN0QixRQUFPO0FBQUEsTUFDUCxrQkFBZTtBQUFBLE1BQ2YsbUJBQWdCO0FBQUEsTUFDaEIsZ0JBQWE7QUFBQSxNQUNiLFNBQVE7QUFBQSxNQUNSLE9BQU07QUFBQSxNQUVMO0FBQUEsZ0JBQVEsZ0JBQUFBLEdBQUMsV0FBTyxpQkFBTSxJQUFXO0FBQUEsUUFDakM7QUFBQTtBQUFBO0FBQUEsRUFDSDtBQUVKO0FBSU8sSUFBTSxjQUFjLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU8sMEJBQUFBLEdBQUMsVUFBSyxHQUFFLHdCQUF1QixHQUFFO0FBRTVGLElBQU0sU0FBUyxDQUFDLFVBQXFCLGdCQUFBQyxHQUFDLFFBQU0sR0FBRyxPQUFPO0FBQUEsa0JBQUFBLEdBQUMsVUFBSyxHQUFFLEtBQUksR0FBRSxLQUFJLE9BQU0sTUFBSyxRQUFPLE1BQUssSUFBRyxLQUFJO0FBQUEsRUFBRSxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsNERBQTJEO0FBQUEsR0FBRTtBQUM3SyxJQUFNLGFBQWEsQ0FBQyxVQUFxQixnQkFBQUEsR0FBQyxRQUFNLEdBQUcsT0FBTywwQkFBQUEsR0FBQyxVQUFLLEdBQUUsaUNBQWdDLEdBQUU7QUFDcEcsSUFBTSxVQUFVLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU87QUFBQSxrQkFBQUEsR0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBLEVBQUUsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLDhDQUE2QztBQUFBLEdBQUU7QUFDbkksSUFBTSxRQUFRLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU87QUFBQSxrQkFBQUEsR0FBQyxVQUFLLEdBQUUsb0RBQW1EO0FBQUEsRUFBRSxnQkFBQUEsR0FBQyxZQUFPLElBQUcsTUFBSyxJQUFHLE1BQUssR0FBRSxPQUFNO0FBQUEsR0FBRTtBQUNwSixJQUFNLFdBQVcsQ0FBQyxVQUFxQixnQkFBQUEsR0FBQyxRQUFNLEdBQUcsT0FBTywwQkFBQUEsR0FBQyxVQUFLLEdBQUUsK0pBQThKLEdBQUU7QUFDaE8sSUFBTSxTQUFTLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU8sMEJBQUFBLEdBQUMsVUFBSyxHQUFFLDRIQUEySCxHQUFFO0FBQzNMLElBQU0sVUFBVSxDQUFDLFVBQXFCLGdCQUFBQSxHQUFDLFFBQU0sR0FBRyxPQUFPO0FBQUEsa0JBQUFBLEdBQUMsVUFBSyxHQUFFLEtBQUksR0FBRSxLQUFJLE9BQU0sTUFBSyxRQUFPLE1BQUssSUFBRyxLQUFJO0FBQUEsRUFBRSxnQkFBQUEsR0FBQyxZQUFPLElBQUcsT0FBTSxJQUFHLE9BQU0sR0FBRSxPQUFNO0FBQUEsRUFBRSxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsbUJBQWtCO0FBQUEsR0FBRTtBQUV6SyxJQUFNLFVBQVUsQ0FBQyxVQUFxQixnQkFBQUMsR0FBQyxRQUFNLEdBQUcsT0FBTywwQkFBQUEsR0FBQyxVQUFLLEdBQUUsWUFBVyxHQUFFO0FBQzVFLElBQU0sU0FBUyxDQUFDLFVBQXFCLGdCQUFBQSxHQUFDLFFBQU0sR0FBRyxPQUFPLDBCQUFBQSxHQUFDLFVBQUssR0FBRSwwQ0FBeUMsR0FBRTtBQUN6RyxJQUFNLGlCQUFpQixDQUFDLFVBQXFCLGdCQUFBQSxHQUFDLFFBQU0sR0FBRyxPQUFPLDBCQUFBQSxHQUFDLFVBQUssR0FBRSxnQ0FBK0IsR0FBRTtBQUN2RyxJQUFNLFNBQVMsQ0FBQyxVQUFxQixnQkFBQUEsR0FBQyxRQUFNLEdBQUcsT0FBTywwQkFBQUEsR0FBQyxVQUFLLEdBQUUsb0JBQW1CLEdBQUU7QUFDbkYsSUFBTSxVQUFVLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU87QUFBQSxrQkFBQUEsR0FBQyxVQUFLLEdBQUUsaUJBQWdCO0FBQUEsRUFBRSxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsNEJBQTJCO0FBQUEsR0FBRTtBQUN0SCxJQUFNLFFBQVEsQ0FBQyxVQUFxQixnQkFBQUEsR0FBQyxRQUFNLEdBQUcsT0FBTztBQUFBLGtCQUFBQSxHQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUk7QUFBQSxFQUFFLGdCQUFBQSxHQUFDLFVBQUssR0FBRSxvR0FBbUc7QUFBQSxHQUFFO0FBQ2xNLElBQU0sV0FBVyxDQUFDLFVBQXFCLGdCQUFBQSxHQUFDLFFBQU0sR0FBRyxPQUFPLDBCQUFBQSxHQUFDLFVBQUssR0FBRSxnREFBK0MsR0FBRTtBQUNqSCxJQUFNLFVBQVUsQ0FBQyxVQUFxQixnQkFBQUEsR0FBQyxRQUFNLEdBQUcsT0FBTztBQUFBLGtCQUFBQSxHQUFDLFVBQUssR0FBRSxnQkFBZTtBQUFBLEVBQUUsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLDBCQUF5QjtBQUFBLEdBQUU7QUFDbkgsSUFBTSxXQUFXLENBQUMsVUFBcUIsZ0JBQUFBLEdBQUMsUUFBTSxHQUFHLE9BQU8sMEJBQUFBLEdBQUMsVUFBSyxHQUFFLHNDQUFxQyxHQUFFOzs7QUN4QjlHLFNBQVMsV0FBVyxFQUFFLE1BQU0sR0FBcUI7QUFDN0MsUUFBTSxRQUFRLGNBQWMsTUFBTSxPQUFPO0FBQ3pDLFNBQ0ksZ0JBQUFDLEdBQUMsVUFBSyxXQUFVLHVCQUNYLGtCQUFRLGdCQUFBQSxHQUFDLFNBQUksS0FBSSxJQUFHLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxJQUFLLE1BQ2hFO0FBRVI7QUFFQSxTQUFTLGFBQWE7QUFBQSxFQUNsQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSixHQU1HO0FBQ0MsUUFBTSxDQUFDLFNBQVMsVUFBVSxJQUFJQyxHQUFTLEtBQUs7QUFFNUMsV0FBUyxhQUFhLE9BQWM7QUFDaEMsVUFBTSxRQUFRLE1BQU07QUFDcEIsZ0JBQVksTUFBTSxJQUFJLFVBQVUsTUFBTSxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBQ3hELGVBQVcsS0FBSztBQUFBLEVBQ3BCO0FBRUEsU0FDSSxnQkFBQUQ7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLFdBQVcsQ0FBQztBQUFBLE1BQ1osc0JBQW9CO0FBQUEsTUFDcEIsYUFBYSxDQUFDRSxPQUFpQjtBQUMzQixRQUFBQSxHQUFFLGNBQWMsUUFBUSxjQUFjLE9BQU8sWUFBWSxDQUFDO0FBQzFELG1CQUFXLFlBQVk7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsU0FBUyxDQUFDQSxPQUFrQjtBQUN4QixZQUFJQSxHQUFFLFNBQVUsZ0JBQWUsTUFBTSxFQUFFO0FBQUEsWUFDbEMsY0FBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQUEsTUFDaEM7QUFBQSxNQUNBLFdBQVcsYUFBYSxXQUFXLGFBQWEsRUFBRSxJQUFJLE1BQU0sVUFBVSxLQUFLLFFBQVE7QUFBQSxNQUVsRjtBQUFBLG1CQUFXLGdCQUFBRixHQUFDLFVBQUssV0FBVyxhQUFhLFFBQVEsSUFBSSxJQUFLO0FBQUEsUUFDM0QsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxNQUFLO0FBQUEsWUFDTCxPQUFPLE1BQU0sVUFBVSxlQUFlO0FBQUEsWUFDdEMsU0FBUyxDQUFDRSxPQUFrQjtBQUN4QixjQUFBQSxHQUFFLGdCQUFnQjtBQUNsQiw0QkFBYyxNQUFNLEVBQUU7QUFBQSxZQUMxQjtBQUFBLFlBQ0EsV0FBVTtBQUFBLFlBRVQsZ0JBQU0sVUFBVSxnQkFBQUYsR0FBQyxTQUFNLElBQUssZ0JBQUFBLEdBQUMsWUFBUztBQUFBO0FBQUEsUUFDM0M7QUFBQSxRQUNBLGdCQUFBQSxHQUFDLGNBQVcsT0FBYztBQUFBLFFBQ3pCLFVBQ0csZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxXQUFTO0FBQUEsWUFDVCxjQUFjLE1BQU07QUFBQSxZQUNwQixRQUFRO0FBQUEsWUFDUixXQUFXLENBQUNFLE9BQXFCO0FBQzdCLGtCQUFJQSxHQUFFLFFBQVE7QUFDVixnQkFBQ0EsR0FBRSxjQUFtQyxLQUFLO0FBQy9DLGtCQUFJQSxHQUFFLFFBQVEsU0FBVSxZQUFXLEtBQUs7QUFBQSxZQUM1QztBQUFBLFlBQ0EsU0FBUyxDQUFDQSxPQUFrQkEsR0FBRSxnQkFBZ0I7QUFBQSxZQUM5QyxXQUFVO0FBQUE7QUFBQSxRQUNkLElBRUEsZ0JBQUFGO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxXQUFVO0FBQUEsWUFDVixZQUFZLE1BQU0sV0FBVyxJQUFJO0FBQUEsWUFFaEMsZ0JBQU07QUFBQTtBQUFBLFFBQ1g7QUFBQTtBQUFBO0FBQUEsRUFFUjtBQUVSO0FBRU8sU0FBUyxjQUFjO0FBQzFCLFFBQU0sTUFBTSxVQUFVLENBQUNHLE9BQU1BLEdBQUUsR0FBRztBQUNsQyxRQUFNLFlBQVksVUFBVSxDQUFDQSxPQUFNQSxHQUFFLFNBQVM7QUFDOUMsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJRixHQUF3QixJQUFJO0FBQzVELFFBQU0sY0FBY0csR0FBc0IsSUFBSTtBQUM5QyxRQUFNLG1CQUFtQkEsR0FBaUMsSUFBSTtBQUU5RCxNQUFJLENBQUMsSUFBSyxRQUFPO0FBR2pCLFFBQU0sVUFBVSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsUUFBUTtBQUN4QyxRQUFNLFFBQVEsSUFBSSxPQUFPO0FBQ3pCLFFBQU0saUJBQWlCLElBQUksT0FBTyxPQUFPLENBQUNDLE9BQU0sVUFBVSxTQUFTQSxHQUFFLEVBQUUsQ0FBQztBQUN4RSxRQUFNLFVBQ0YsZUFBZSxTQUFTLElBQ2xCLGVBQWUsZUFBZSxTQUFTLENBQUMsRUFBRSxVQUMxQztBQUVWLFdBQVMsY0FBY0gsSUFBc0I7QUFDekMsVUFBTSxNQUFPQSxHQUFFLE9BQXVCLFFBQVEsc0JBQXNCO0FBQ3BFLFFBQUksQ0FBQyxJQUFLLFFBQU8sWUFBWTtBQUM3QixVQUFNLFFBQVEsT0FBTyxJQUFJLGFBQWEsb0JBQW9CLENBQUM7QUFDM0QsVUFBTSxPQUFPLElBQUksc0JBQXNCO0FBQ3ZDLFdBQU9BLEdBQUUsVUFBVSxLQUFLLE1BQU0sS0FBSyxTQUFTLElBQUksUUFBUSxRQUFRO0FBQUEsRUFDcEU7QUFFQSxXQUFTLE9BQU9BLElBQWM7QUFDMUIsSUFBQUEsR0FBRSxlQUFlO0FBQ2pCLFVBQU0sT0FBTyxZQUFZO0FBQ3pCLFVBQU0sT0FBTztBQUNiLGdCQUFZLFVBQVU7QUFDdEIsZ0JBQVksSUFBSTtBQUNoQixRQUFJLFNBQVMsUUFBUSxTQUFTLEtBQU07QUFDcEMsVUFBTSxXQUFXLE9BQU8sT0FBTyxPQUFPLElBQUk7QUFDMUMsUUFBSSxhQUFhLEtBQU07QUFFdkIsaUJBQWEsUUFBUSxJQUFJLE1BQU0sUUFBUSxJQUFJLFFBQVE7QUFBQSxFQUN2RDtBQUVBLFdBQVMsZUFBZSxPQUFjO0FBQ2xDLFVBQU0sUUFDRixPQUFRLE1BQU0sY0FBbUMsS0FBSyxJQUFJO0FBQzlELFVBQU0sVUFBVSxTQUFTLEVBQUU7QUFDM0IsUUFBSSxRQUFRLFdBQVcsRUFBRztBQUMxQixRQUFJLENBQUMsaUJBQWlCLFNBQVM7QUFDM0IsWUFBTSxTQUFTLFNBQVMsRUFBRSxLQUFLLFVBQVUsQ0FBQztBQUMxQyx1QkFBaUIsVUFBVSxPQUN0QixPQUFPLENBQUNHLE9BQU0sUUFBUSxTQUFTQSxHQUFFLEVBQUUsQ0FBQyxFQUNwQyxJQUFJLENBQUNBLFFBQU87QUFBQSxRQUNULElBQUlBLEdBQUU7QUFBQSxRQUNOLFFBQVEsRUFBRSxTQUFTQSxHQUFFLFFBQVE7QUFBQSxRQUM3QixPQUFPLEVBQUUsU0FBU0EsR0FBRSxRQUFRO0FBQUEsTUFDaEMsRUFBRTtBQUFBLElBQ1Y7QUFDQSxtQkFBZSxJQUFJLElBQUksUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3pFO0FBRUEsV0FBUyxrQkFBa0I7QUFDdkIsVUFBTSxVQUFVLGlCQUFpQjtBQUNqQyxxQkFBaUIsVUFBVTtBQUMzQixRQUFJLENBQUMsUUFBUztBQUNkLFVBQU0sU0FBUyxTQUFTLEVBQUUsS0FBSyxVQUFVLENBQUM7QUFDMUMsZUFBVyxVQUFVLFNBQVM7QUFDMUIsWUFBTSxRQUFRLE9BQU8sS0FBSyxDQUFDQSxPQUFNQSxHQUFFLE9BQU8sT0FBTyxFQUFFO0FBQ25ELFVBQUksTUFBTyxRQUFPLFFBQVEsRUFBRSxTQUFTLE1BQU0sUUFBUTtBQUFBLElBQ3ZEO0FBQ0EscUJBQWlCLFdBQVcsT0FBTztBQUFBLEVBQ3ZDO0FBRUEsU0FDSSxnQkFBQUwsR0FBQyxXQUFNLFdBQVUsZ0JBQ2I7QUFBQSxvQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHLFdBQVcsbUJBQW1CLGVBQWUsV0FBVyxJQUFJLGFBQWEsRUFBRTtBQUFBLFFBQzNFLE9BQU8sRUFBRSxjQUFjLEdBQUcsS0FBSyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUk7QUFBQSxRQUV2RDtBQUFBLDBCQUFBQSxHQUFDLFNBQUksV0FBVSxpQkFDWDtBQUFBLDRCQUFBQSxHQUFDLFVBQUsscUJBQU87QUFBQSxZQUNiLGdCQUFBQSxHQUFDLFVBQUssV0FBVSxnQkFDWDtBQUFBLG1CQUFLLE1BQU0sVUFBVSxHQUFHO0FBQUEsY0FBRTtBQUFBLGVBQy9CO0FBQUEsYUFDSjtBQUFBLFVBQ0EsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDRyxNQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxPQUFPLEtBQUssTUFBTSxVQUFVLEdBQUc7QUFBQSxjQUMvQixVQUFVLGVBQWUsV0FBVztBQUFBLGNBQ3BDLFNBQVM7QUFBQSxjQUNULFVBQVU7QUFBQTtBQUFBLFVBQ2Q7QUFBQTtBQUFBO0FBQUEsSUFDSjtBQUFBLElBRUEsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDRyxXQUFVO0FBQUEsUUFDVixZQUFZLENBQUNFLE9BQWlCO0FBQzFCLFVBQUFBLEdBQUUsZUFBZTtBQUNqQixzQkFBWSxjQUFjQSxFQUFDLENBQUM7QUFBQSxRQUNoQztBQUFBLFFBQ0EsYUFBYSxNQUFNLFlBQVksSUFBSTtBQUFBLFFBQ25DO0FBQUEsUUFFQztBQUFBLGtCQUFRLElBQUksQ0FBQyxPQUFPLFVBQ2pCLGdCQUFBRjtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBRUc7QUFBQSxjQUNBLGNBQWM7QUFBQSxjQUNkLFVBQVUsVUFBVSxTQUFTLE1BQU0sRUFBRTtBQUFBLGNBQ3JDLFlBQVksQ0FBQyxTQUFTO0FBQ2xCLDRCQUFZLFVBQVU7QUFBQSxjQUMxQjtBQUFBLGNBQ0EsVUFDSSxhQUFhLFFBQ1AsVUFDQSxhQUFhLFFBQVEsS0FBSyxVQUFVLFFBQVEsSUFDMUMsVUFDQTtBQUFBO0FBQUEsWUFaUCxNQUFNO0FBQUEsVUFjZixDQUNIO0FBQUEsVUFDQSxVQUFVLElBQ1AsZ0JBQUFBLEdBQUMsUUFBRyxXQUFVLGFBQVksNEJBQWMsSUFDeEM7QUFBQTtBQUFBO0FBQUEsSUFDUjtBQUFBLElBRUEsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLGlCQUNYO0FBQUEsc0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxNQUFLO0FBQUEsVUFDTCxVQUFVLGVBQWUsV0FBVztBQUFBLFVBQ3BDLFNBQVM7QUFBQSxVQUNULE9BQU07QUFBQSxVQUNOLFdBQVU7QUFBQSxVQUVWO0FBQUEsNEJBQUFBLEdBQUMsVUFBTztBQUFBLFlBQUU7QUFBQTtBQUFBO0FBQUEsTUFFZDtBQUFBLE1BQ0EsZ0JBQUFBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDRyxNQUFLO0FBQUEsVUFDTCxVQUFVLGVBQWUsV0FBVztBQUFBLFVBQ3BDLFNBQVM7QUFBQSxVQUNULE9BQU07QUFBQSxVQUNOLFdBQVU7QUFBQSxVQUVWO0FBQUEsNEJBQUFBLEdBQUMsWUFBUztBQUFBLFlBQUU7QUFBQTtBQUFBO0FBQUEsTUFFaEI7QUFBQSxPQUNKO0FBQUEsS0FDSjtBQUVSOzs7QUN0UEEsSUFBTSxRQUErRTtBQUFBLEVBQ25GLEVBQUUsSUFBSSxRQUFRLE9BQU8sUUFBUSxNQUFNLEtBQUssTUFBTSxlQUFlO0FBQUEsRUFDN0QsRUFBRSxJQUFJLFFBQVEsT0FBTyxRQUFRLE1BQU0sS0FBSyxNQUFNLE9BQU87QUFDdkQ7QUFFTyxTQUFTLFVBQVU7QUFDeEIsUUFBTSxPQUFPLFVBQVUsQ0FBQ00sT0FBTUEsR0FBRSxJQUFJO0FBQ3BDLFNBQ0UsZ0JBQUFDLEdBQUMsV0FBTSxXQUFVLGFBQ2QsZ0JBQU0sSUFBSSxDQUFDQyxPQUFNO0FBQ2hCLFVBQU0sV0FBV0EsR0FBRTtBQUNuQixXQUNFLGdCQUFBRDtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBRUMsTUFBSztBQUFBLFFBQ0wsT0FBTyxHQUFHQyxHQUFFLEtBQUssS0FBS0EsR0FBRSxJQUFJO0FBQUEsUUFDNUIsY0FBWUEsR0FBRTtBQUFBLFFBQ2QsU0FBUyxNQUFNLFNBQVMsRUFBRSxNQUFNQSxHQUFFLEdBQUcsQ0FBQztBQUFBLFFBQ3RDLFdBQVcsZUFBZSxTQUFTQSxHQUFFLEtBQUssV0FBVyxFQUFFO0FBQUEsUUFFdkQsMEJBQUFELEdBQUMsWUFBUztBQUFBO0FBQUEsTUFQTEMsR0FBRTtBQUFBLElBUVQ7QUFBQSxFQUVKLENBQUMsR0FDSDtBQUVKOzs7QUMxQkEsU0FBUyxpQkFBd0I7QUFDL0IsUUFBTSxRQUFRLGFBQWEsUUFBUSxvQkFBb0I7QUFDdkQsTUFBSSxVQUFVLFdBQVcsVUFBVSxPQUFRLFFBQU87QUFDbEQsU0FBTyxXQUFXLDhCQUE4QixFQUFFLFVBQVUsU0FBUztBQUN2RTtBQUVPLFNBQVMsY0FBYztBQUM1QixRQUFNLENBQUMsT0FBTyxRQUFRLElBQUlDLEdBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWhFLEVBQUFDLEdBQVUsTUFBTTtBQUNkLGFBQVMsZ0JBQWdCLFFBQVEsUUFBUTtBQUN6QyxpQkFBYSxRQUFRLHNCQUFzQixLQUFLO0FBQUEsRUFDbEQsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUVWLFFBQU0sT0FBTyxVQUFVLFNBQVMsVUFBVTtBQUMxQyxTQUNFLGdCQUFBQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0MsTUFBSztBQUFBLE1BQ0wsV0FBVTtBQUFBLE1BQ1YsY0FBWSxhQUFhLElBQUk7QUFBQSxNQUM3QixPQUFPLGFBQWEsSUFBSTtBQUFBLE1BQ3hCLFNBQVMsTUFBTSxTQUFTLElBQUk7QUFBQSxNQUUzQixvQkFBVSxTQUFTLGdCQUFBQSxHQUFDLFNBQU0sSUFBSyxnQkFBQUEsR0FBQyxVQUFPO0FBQUE7QUFBQSxFQUMxQztBQUVKOzs7QUNQQSxTQUFTLFdBQVc7QUFBQSxFQUNoQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNKLEdBS0c7QUFDQyxTQUNJLGdCQUFBQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0csTUFBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsY0FBWTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsTUFDQSxXQUFVO0FBQUEsTUFFVDtBQUFBO0FBQUEsRUFDTDtBQUVSO0FBRU8sU0FBUyxTQUFTO0FBQ3JCLFFBQU0sTUFBTSxVQUFVLENBQUNDLE9BQU1BLEdBQUUsR0FBRztBQUNsQyxRQUFNLE9BQU8sVUFBVSxDQUFDQSxPQUFNQSxHQUFFLEtBQUssSUFBSTtBQUN6QyxZQUFVLENBQUNBLE9BQU1BLEdBQUUsV0FBVztBQUM5QixRQUFNLFVBQVVDLEdBQXlCLElBQUk7QUFFN0MsTUFBSSxDQUFDLElBQUssUUFBTztBQUVqQixpQkFBZSxRQUFRLE9BQWM7QUFDakMsVUFBTSxRQUFRLE1BQU07QUFDcEIsVUFBTSxRQUFRLENBQUMsR0FBSSxNQUFNLFNBQVMsQ0FBQyxDQUFFO0FBQ3JDLFVBQU0sUUFBUTtBQUNkLFFBQUksTUFBTSxXQUFXLEVBQUc7QUFDeEIsVUFBTUMsVUFBUyxNQUFNLFFBQVEsSUFBSSxNQUFNLElBQUksbUJBQW1CLENBQUM7QUFDL0QsbUJBQWVBLE9BQU07QUFBQSxFQUN6QjtBQUVBLFdBQVMsV0FBVyxPQUFjO0FBQzlCLFVBQU0sUUFBUSxNQUFNO0FBQ3BCLFVBQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVO0FBQzlDLFVBQU0sUUFBUTtBQUNkLGtCQUFjLElBQUk7QUFBQSxFQUN0QjtBQUVBLFNBQ0ksZ0JBQUFILEdBQUMsWUFBTyxXQUFVLFVBQ2Q7QUFBQSxvQkFBQUEsR0FBQyxRQUFLLElBQUcsS0FBSSxXQUFVLGVBQWMsT0FBTSxvQkFDdkMsMEJBQUFBLEdBQUMsZUFBWSxHQUNqQjtBQUFBLElBQ0EsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFFRyxjQUFjLElBQUk7QUFBQSxRQUNsQixRQUFRO0FBQUEsUUFDUixXQUFXLENBQUNJLE9BQXFCO0FBQzdCLGNBQUlBLEdBQUUsUUFBUTtBQUNWLFlBQUNBLEdBQUUsY0FBbUMsS0FBSztBQUFBLFFBQ25EO0FBQUEsUUFDQSxXQUFVO0FBQUE7QUFBQSxNQVBMLElBQUk7QUFBQSxJQVFiO0FBQUEsSUFDQSxnQkFBQUosR0FBQyxVQUFLLFdBQVUsWUFDWDtBQUFBLFVBQUk7QUFBQSxNQUFNO0FBQUEsTUFBRSxJQUFJO0FBQUEsT0FDckI7QUFBQSxJQUVBLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxXQUFVO0FBQUEsSUFDekIsZ0JBQUFBLEdBQUMsY0FBVyxPQUFNLGtCQUFZLFNBQVMsTUFBTSxVQUFVLENBQUMsUUFBUSxHQUM1RCwwQkFBQUEsR0FBQyxXQUFRLEdBQ2I7QUFBQSxJQUNBLGdCQUFBQSxHQUFDLGNBQVcsT0FBTSx3QkFBYSxTQUFTLE1BQU0sVUFBVSxDQUFDLFFBQVEsR0FDN0QsMEJBQUFBLEdBQUMsV0FBUSxHQUNiO0FBQUEsSUFFQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsVUFBUztBQUFBLElBRXhCLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxpQkFDWDtBQUFBLHNCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csT0FBTTtBQUFBLFVBQ04sU0FBUyxNQUFNLE9BQU8sRUFBRTtBQUFBLFVBRXhCLDBCQUFBQSxHQUFDLFdBQVE7QUFBQTtBQUFBLE1BQ2I7QUFBQSxNQUNBLGdCQUFBQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0csTUFBSztBQUFBLFVBQ0wsU0FBUztBQUFBLFVBQ1QsT0FBTTtBQUFBLFVBQ04sV0FBVTtBQUFBLFVBRVQ7QUFBQSxpQkFBSyxNQUFNLE9BQU8sR0FBRztBQUFBLFlBQUU7QUFBQTtBQUFBO0FBQUEsTUFDNUI7QUFBQSxNQUNBLGdCQUFBQSxHQUFDLGNBQVcsT0FBTSxxQkFBZSxTQUFTLE1BQU0sT0FBTyxDQUFDLEdBQ3BELDBCQUFBQSxHQUFDLFVBQU8sR0FDWjtBQUFBLE9BQ0o7QUFBQSxJQUVBLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxXQUFVO0FBQUEsSUFFekIsZ0JBQUFBO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDRyxLQUFLO0FBQUEsUUFDTCxNQUFLO0FBQUEsUUFDTCxRQUFPO0FBQUEsUUFDUCxVQUFRO0FBQUEsUUFDUixXQUFVO0FBQUEsUUFDVixVQUFVLENBQUNJLE9BQWEsS0FBSyxRQUFRQSxFQUFDO0FBQUE7QUFBQSxJQUMxQztBQUFBLElBQ0EsZ0JBQUFKO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDRyxNQUFLO0FBQUEsUUFDTCxTQUFTLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFBQSxRQUN0QyxXQUFVO0FBQUEsUUFFVjtBQUFBLDBCQUFBQSxHQUFDLFdBQVE7QUFBQSxVQUNULGdCQUFBQSxHQUFDLFVBQUssV0FBVSxhQUFZLHVCQUFTO0FBQUE7QUFBQTtBQUFBLElBQ3pDO0FBQUEsSUFDQSxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHLE1BQUs7QUFBQSxRQUNMLFNBQVMsTUFBTSxLQUFLLFlBQVksU0FBUyxFQUFFLE9BQU8sR0FBRztBQUFBLFFBQ3JELFdBQVU7QUFBQSxRQUVWO0FBQUEsMEJBQUFBLEdBQUMsY0FBVztBQUFBLFVBQUU7QUFBQTtBQUFBO0FBQUEsSUFFbEI7QUFBQSxJQUVBLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxXQUFVO0FBQUEsSUFDekIsZ0JBQUFBLEdBQUMsZUFBWTtBQUFBLEtBQ2pCO0FBRVI7OztBQzlIQSxTQUFTLGVBQWUsUUFBcUM7QUFDM0QsUUFBTSxLQUFLO0FBQ1gsTUFBSSxDQUFDLEdBQUksUUFBTztBQUNoQixTQUFPLEdBQUcsWUFBWSxXQUFXLEdBQUcsWUFBWSxjQUFjLEdBQUc7QUFDbkU7QUFFQSxTQUFTLHFCQUFxQjtBQUM1QixFQUFBSyxHQUFVLE1BQU07QUFDZCxhQUFTLFVBQVVDLElBQWtCO0FBQ25DLFVBQUksZUFBZUEsR0FBRSxNQUFNLEVBQUc7QUFDOUIsWUFBTSxNQUFNQSxHQUFFLFdBQVdBLEdBQUU7QUFFM0IsVUFBSUEsR0FBRSxTQUFTLFNBQVM7QUFDdEIsWUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFVLFVBQVMsRUFBRSxVQUFVLEtBQUssQ0FBQztBQUNyRCxRQUFBQSxHQUFFLGVBQWU7QUFDakI7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPQSxHQUFFLElBQUksWUFBWSxNQUFNLEtBQUs7QUFDdEMsUUFBQUEsR0FBRSxlQUFlO0FBQ2pCLFlBQUlBLEdBQUUsU0FBVSxNQUFLO0FBQUEsWUFDaEIsTUFBSztBQUNWO0FBQUEsTUFDRjtBQUNBLFVBQUksT0FBT0EsR0FBRSxJQUFJLFlBQVksTUFBTSxLQUFLO0FBQ3RDLFFBQUFBLEdBQUUsZUFBZTtBQUNqQixhQUFLO0FBQ0w7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPQSxHQUFFLElBQUksWUFBWSxNQUFNLEtBQUs7QUFDdEMsUUFBQUEsR0FBRSxlQUFlO0FBQ2pCLDJCQUFtQjtBQUNuQjtBQUFBLE1BQ0Y7QUFDQSxVQUFJLFFBQVFBLEdBQUUsUUFBUSxPQUFPQSxHQUFFLFFBQVEsTUFBTTtBQUMzQyxRQUFBQSxHQUFFLGVBQWU7QUFDakIsZUFBTyxDQUFDO0FBQ1I7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPQSxHQUFFLFFBQVEsS0FBSztBQUN4QixRQUFBQSxHQUFFLGVBQWU7QUFDakIsZUFBTyxFQUFFO0FBQ1Q7QUFBQSxNQUNGO0FBQ0EsVUFBSSxPQUFPQSxHQUFFLFFBQVEsS0FBSztBQUN4QixRQUFBQSxHQUFFLGVBQWU7QUFDakIsbUJBQVc7QUFDWDtBQUFBLE1BQ0Y7QUFDQSxVQUFJQSxHQUFFLFFBQVEsWUFBWUEsR0FBRSxRQUFRLGFBQWE7QUFDL0MsUUFBQUEsR0FBRSxlQUFlO0FBQ2pCLHdCQUFnQjtBQUNoQjtBQUFBLE1BQ0Y7QUFDQSxVQUFJQSxHQUFFLFFBQVEsVUFBVTtBQUN0QixxQkFBYSxDQUFDLENBQUM7QUFDZjtBQUFBLE1BQ0Y7QUFDQSxVQUFJQSxHQUFFLFFBQVEsT0FBT0EsR0FBRSxRQUFRLEtBQUs7QUFDbEMsaUJBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QjtBQUFBLE1BQ0Y7QUFDQSxVQUFJQSxHQUFFLFFBQVEsT0FBT0EsR0FBRSxRQUFRLEtBQUs7QUFDbEMsaUJBQVMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUN6QjtBQUFBLE1BQ0Y7QUFDQSxZQUFNLE9BQU9BLEdBQUUsV0FBVyxLQUFLO0FBQy9CLFVBQUlBLEdBQUUsUUFBUSxhQUFhO0FBQ3pCLFFBQUFBLEdBQUUsZUFBZTtBQUNqQix1QkFBZSxDQUFDLE1BQU0sQ0FBQztBQUFBLE1BQ3pCLFdBQVdBLEdBQUUsUUFBUSxjQUFjO0FBQ2pDLFFBQUFBLEdBQUUsZUFBZTtBQUNqQix1QkFBZSxNQUFNLENBQUM7QUFBQSxNQUN4QixXQUFXQSxHQUFFLFFBQVEsV0FBVztBQUM5QixRQUFBQSxHQUFFLGVBQWU7QUFDakIsdUJBQWUsR0FBRyxDQUFDLElBQUk7QUFBQSxNQUN6QixXQUFXQSxHQUFFLFFBQVEsYUFBYTtBQUNoQyxRQUFBQSxHQUFFLGVBQWU7QUFDakIsdUJBQWUsR0FBRyxJQUFJO0FBQUEsTUFDeEI7QUFBQSxJQUNGO0FBRUEsYUFBUyxRQUFRQSxJQUFrQjtBQUNqQyxVQUFJQSxHQUFFLFNBQVMsUUFBUyxVQUFTLEVBQUUsVUFBVSxNQUFNLENBQUM7QUFBQSxJQUN0RDtBQUNBLGFBQVMsU0FBUztBQUNoQixlQUFTLEVBQUUsVUFBVSxNQUFNLENBQUM7QUFBQSxJQUM5QjtBQUVBLFdBQU8saUJBQWlCLFdBQVcsU0FBUztBQUM1QyxXQUFPLGlCQUFpQixTQUFTLE9BQU87QUFDeEMsV0FBTyxpQkFBaUIsUUFBUSxNQUFNO0FBQ3RDLFdBQU8sTUFBTTtBQUNYLGFBQU8sb0JBQW9CLFdBQVcsU0FBUztBQUMvQyxhQUFPLG9CQUFvQixTQUFTLE9BQU87QUFDM0MsYUFBTyxvQkFBb0IsUUFBUSxNQUFNO0FBQUEsSUFDM0M7QUFBQSxFQUNGLEdBQUcsQ0FBQyxDQUFDO0FBQ1A7QUFFTyxTQUFTLFNBQVM7QUFDdkIsUUFBTSxTQUFTLFVBQTJCO0FBQzFDLFFBQU0sS0FBSyxPQUFPLE1BQU07QUFDeEIsUUFBTSxXQUFXLFlBQXlCLFNBQVMsVUFBVSxDQUFDO0FBQzlELFFBQU0sWUFBWSxZQUFpQyxTQUFTLFFBQVEsQ0FBQztBQUNyRSxRQUFNLE1BQU0sVUFBVSxDQUFDQyxPQUFNQSxHQUFFLEdBQUc7QUFDbEMsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJQyxHQUFTLEtBQUs7QUFDOUMsUUFBTSxZQUFZQyxHQUFzQixJQUFJO0FBRTVDLEVBQUFKLEdBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxVQUFVLFNBQVMsVUFBVSxZQUFZLEdBQUk7QUFDckUsVUFBTSxPQUFPLFNBQVMsTUFBTSxLQUFLLENBQUNLLE9BQU1BLEdBQUUsT0FBTyxFQUFFO0FBQ25ELFFBQUksQ0FBQyxLQUFNO0FBQ1gsY0FBVSxVQUFVO0FBQ3BCLGdCQUFZLE1BQU0sVUFBVSxNQUFNLE9BQU8sQ0FBQyxRQUFRLElBQUksY0FBYyxFQUFFLENBQUM7QUFBQSxFQUN6RSxHQUFHLENBQUMsVUFBVSxXQUFXLEVBQUUsQ0FBQztBQUU1QixFQUFBTDtBQUFBLElBQ0UsTUFBTSxNQUFNO0FBQ1YsZ0JBQVUsVUFBVTtBQUNwQixtQkFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLENBQUM7QUFBQSxFQUNIO0FBSUEsUUFBTSxTQUFTLEtBQUssT0FBTztBQUMzQixFQUFBQSxHQUFVLE1BQU07QUFDZCxRQUFJLE9BQVE7QUFDWixnQkFBWSxLQUFLO0FBQ2pCLFVBQU0sUUFBUSxPQUFPLFdBQVcsTUFBTSxZQUFZLElBQUksR0FBRyxHQUFJO0FBQzdELFdBQU8sTUFBTSxhQUFhLEtBQUs7QUFBQSxFQUNqQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFZixxQkFBbUI7QUFFbkIsTUFBSSxDQUFDLFFBQVE7QUFDWCxXQUNFLGdCQUFBTSxHQUFDLFNBQUksV0FBVSxnQkFDWixzQkFBWSxTQUFTLFFBQ3BCLGdCQUFBQSxHQUFBLEtBQ0U7QUFBQSxzQkFBQUEsR0FBQyxPQUFFLCtCQUFpQjtBQUFBLE1BQ3BCLGdCQUFBQSxHQUFDLFFBQUssSUFBRyxLQUFJLFdBQVUsVUFBUyw4QkFFaEM7QUFBQSxPQUNGLElBRUEsZ0JBQUFBLEdBQUMsT0FBRSxtQ0FBZ0IsR0FFdkI7QUFBQSxFQUVKO0FBRUEsU0FDRSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsZ0JBQ2I7QUFBQSxvQkFBQUEsR0FBQyxVQUFPO0FBQUEsSUFDUixnQkFBQUEsR0FBQyxTQUFJLFdBQVUsZUFDYjtBQUFBLHNCQUFBQSxHQUFDLFdBQVE7QUFBQSxNQUNULGdCQUFBQSxHQUFDLGVBQVk7QUFBQSxNQUNiLGdCQUFBQSxHQUFDLGVBQVk7QUFBQSxPQUNmO0FBQUEsS0FDRjtBQUVKOzs7QUMzS0EsSUFBTSxlQUFlO0FBQUEsRUFDakI7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxFQUNaO0FBQUEsRUFDQSxFQUFFLE1BQU0sVUFBVSxPQUFPLE1BQU0sUUFBUSxLQUFLO0FBQUEsRUFDNUMsRUFBRSxNQUFNLFlBQVksT0FBTyxNQUFNLFFBQVEsS0FBSztBQUFBLEVBQzlDLEVBQUUsTUFBTSxhQUFhLE9BQU8sTUFBTSxRQUFRLEtBQUs7QUFDbkQ7QUFFQSxTQUFTLFFBQVEsS0FBcUI7QUFDbEMsUUFBTSxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsUUFBUTtBQUM5QyxNQUFJLENBQUMsT0FBTyxTQUFTLEVBQUUsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUMzQyxRQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssR0FBTTtBQUN0QyxNQUFJLFVBQVUsRUFBRyxRQUFPO0FBQ3hCLE1BQUksVUFBVSxHQUFJLFFBQU8sR0FBRyxPQUFPO0FBQ25DLFFBQU0sUUFBUSxLQUFLLE1BQU0sVUFBVSxFQUFFO0FBQ3JDLE1BQUksUUFBUSxHQUFJLFFBQU8sR0FBRyxLQUFLO0FBQy9CLFFBQU0sT0FBTyxLQUFLLE1BQU0sUUFBUSxFQUFFO0FBQ2xDLE1BQUksT0FBTyxHQUFJLFFBQU8sR0FBRyxJQUFJO0FBQzdCLFNBQU8sSUFBSSxLQUFLLEdBQUcsRUFBRSxtQkFBbUI7QUFDNUM7QUFFQSxTQUFTLFlBQVk7QUFBQSxFQUNqQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSixHQU1HO0FBQ0MsU0FDSSxnQkFBQUMsR0FBQyxhQUFRLFdBQVUsZ0JBQ2Y7QUFBQSxvQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHLE1BQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULFdBQVU7QUFBQSxRQUNWLGNBQVksUUFBUSxRQUFRLElBQUk7QUFBQSxRQUUvQixrQkFDRyxnQkFBQUEsR0FBQyxTQUFJLEtBQUksSUFBRyxLQUFLLE9BQU8sV0FBVyxPQUFPLElBRTFDLGdCQUFBQSxHQUFDLFdBQVEsV0FBVSxzQkFBcUI7QUFBQTtBQUFBLElBRWhEO0FBQUEsSUFDQSxnQkFBQUEsR0FBQyxZQUFPLE1BQUssVUFBUyxTQUFTLFFBQVEsV0FBVSxnQkFDN0M7QUFBQSxzQkFBQUEsR0FBQyxVQUFLLFdBQVUsZ0JBQWdCLGtCQUFRLE1BQUs7QUFBQSxNQUM3QyxnQkFBQUEsR0FBQyxVQUFLLFdBQVUsZ0JBQ1g7QUFBQSxnQkFBUTtBQUFBLFFBQU07QUFBQSxRQUFFLFFBQVE7QUFBQSxRQUFPO0FBQUEsUUFBRztBQUFBLFFBQ2xDLFFBQVEsV0FBVztBQUFBLFFBQVE7QUFBQSxRQUMzQixRQUFRLFdBQVcsV0FBVyxJQUFJLFVBQVU7QUFBQSxRQUFTO0FBQUEsUUFBRztBQUFBLFFBQ3hELFFBQVEsUUFBUSxTQUFTO0FBQUEsU0FDOUI7QUFBQSxPQUNKO0FBQUEsSUFDQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsbUJBQ1g7QUFBQSxzQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE1BQUs7QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULFdBQVU7QUFBQSxVQUNWLE9BQU07QUFBQSxVQUNOLGNBQVksVUFBVSxRQUFRLElBQUk7QUFBQSxVQUVsQywwQkFBQUEsR0FBQyxXQUFRO0FBQUE7QUFBQSxNQUNiO0FBQUEsTUFDQSxnQkFBQUE7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNHLE1BQUs7QUFBQSxVQUNMLFNBQVM7QUFBQSxVQUNULFdBQVU7QUFBQSxVQUNWLE9BQU07QUFBQSxVQUNOLGNBQVksVUFBVSxRQUFRLElBQUk7QUFBQSxVQUVsQywwQkFBQUEsR0FBQyxZQUFTO0FBQUE7QUFBQSxNQUNkO0FBQUEsT0FDSjtBQUFBLEtBQ0o7QUFFUjtBQUVPLFNBQVMsT0FBTztBQUNuQixRQUFNLFdBQVcsWUFBeUIsU0FBUyxVQUFVLENBQUM7QUFDOUQsUUFBTSxTQUFTLFlBQTBCLFNBQVMsZUFBZSxDQUFDO0FBQ2xFLFFBQU1DLFlBQVcsWUFBWTtBQUM3QixRQUFNLFVBQVVDLEdBQXlCLElBQUk7QUFDN0MsUUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJQyxHQUFTLEtBQUs7QUFDdEMsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJQSxHQUFTLEtBQUs7QUFDOUMsUUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJQSxHQUFTO0FBQUEsSUFDN0IsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLEVBQ1osQ0FBQztBQUNELFFBQU0sZUFBZUQsR0FBTyxDQUFDO0FBRTdCLFFBQU0sWUFBWSxJQUFJLElBQUksT0FBTyxNQUFNLElBQUksQ0FBQ0UsT0FBTSxDQUFDQSxHQUFFLElBQUlBLEdBQUUsS0FBSyxDQUFDLENBQUM7QUFFbEUsaUJBQWUsY0FBYztBQUN6QixRQUFJLEtBQU07QUFDVixZQUFRLElBQUk7QUFDWixRQUFJO0FBQ0EsWUFBTSxPQUFPLFlBQVksU0FBUyxNQUFNLFNBQVMsQ0FBQztBQUNsRCxZQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sSUFBSTtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDVDtBQUNBLE1BQUFILFVBQVMsTUFBTSxFQUFFLEVBQUU7QUFBQSxJQUN2QixVQUFFO0FBQ0UsY0FBUSxLQUFLO0FBQUEsSUFDakI7QUFBQSxFQUNKO0FBRUEsaUJBQWUsZUFBZSxNQUFZO0FBQ3RDLFFBQUksS0FBTTtBQUNWLFlBQVEsSUFBSTtBQUNaLFFBQUk7QUFDQSxZQUFNLFFBQVEsTUFBTSxvQkFBb0IsSUFBSTtBQUM1QyxZQUFNLFlBQVksZ0JBQWdCO0FBQUEsUUFDOUIsR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLFFBQ0gsR0FBRyxNQUFNO0FBQUEsUUFDVCxHQUFHLE1BQU07QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNiLENBQUM7QUFDRCxZQUFNLFNBQVMsTUFBTSxJQUFJO0FBQUEsUUFDckIsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ047QUFBQSxNQUNKO0FBQ0EsZ0JBQVUsT0FBTyxTQUFTO0FBQUEsUUFDdEIsS0FBSyxPQUFPLE9BQU8sTUFBTTtBQUFBLFFBQ3pCLFVBQVUsTUFBTTtBQUFBLFFBQ2hCLE9BQU8sTUFBTTtBQUFBLFFBQ2IsUUFBUSxNQUFNO0FBQUEsTUFDbEIsQ0FBQztBQUdELFVBQUk7QUFDQSxjQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsTUFBTSxLQUFLLElBQUksTUFBTSxPQUFPLE1BQU0sTUFBTSxDQUFDO0FBQ25FLGNBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxlQUFPLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFDMUQsZUFBTyxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssTUFBTSxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQzVELGNBQU0sTUFBTSxPQUFPLFdBQVcsSUFBSTtBQUNsQyxZQUFJLEtBQUs7QUFDTCxnQkFBTSxNQUFNLElBQUksTUFBTTtBQUN0QixnQkFBTSxJQUFJLFFBQWMsQ0FBQyxTQUFTLFdBQVc7QUFDekMsZ0JBQUksU0FBUyxNQUFNLFFBQVE7QUFDM0IsZ0JBQUksVUFBVSxNQUFNLE9BQU8sSUFBSSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELGdCQUFJLE1BQU0sTUFBTTtBQUFBLFVBQ3BCLENBQUM7QUFDRCxjQUFJLFVBQVUsS0FBSyxHQUFHLEdBQUcsT0FBTyxPQUFPLE9BQU8sTUFBTTtBQUNwRCxnQkFBTSxJQUFJLGdCQUFnQixPQUFPLElBQUksT0FBTyxVQUFVLGNBQWMsSUFBSSxDQUFDO0FBQUEsUUFDN0U7QUFBQSxNQUNKLFNBQVMsWUFBWTtBQUNqQixnQkFBUSxLQUFLLGtDQUFrQyxVQUFVO0FBQ3pELFlBQUksT0FBTyxLQUFLO0FBQ1osZ0JBQU0sSUFBSSxnQkFBZ0IsT0FBTyxJQUFJLE9BQU8sR0FBRyxFQUFFLE1BQU0sTUFBTSxNQUFTO0FBQUEsUUFDMUU7QUFBQSxNQUNKO0FBQ0EsTUFBQUEsVUFBUyxNQUFNLE9BQU8sRUFBRSxFQUFFO0FBQUEsSUFDOUIsU0FBUyxPQUFPO0FBQ1osY0FBUSxNQUFNLHdDQUF3QyxLQUFLO0FBQUEsSUFDL0QsVUFBRTtBQUNFLGNBQVEsS0FBSztBQUFBLElBQ2pCO0FBQUEsRUFDSjtBQUVBLFdBQVMsT0FBT0ksSUFBYztBQUMxQixJQUFBQSxHQUFFLGVBQWU7QUFDakIsaUJBQWEsVUFBVTtBQUN2QixnQkFBWSxLQUFLO0FBQ2pCLFVBQU0sUUFBUSwyQkFBMkJBLEdBQUUsWUFBWTtBQUN2RCxRQUFJLE1BQU0sU0FBUyxFQUFHLE1BQUssZUFBZSxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQ3REO0FBRUEsV0FBUyxTQUFTLFNBQXNCO0FBQ3BDLFFBQUksUUFBUSxXQUFXLFFBQVEsSUFBSSwyQkFBMkIsR0FBRztBQUM3RCxXQUFLLElBQUksY0FBYyxRQUFRLEVBQUU7QUFBQSxJQUNyQztBQUFBLEVBQ0o7QUFFQSxXQUFTLFNBQVMsU0FBc0I7QUFDcEMsVUFBTSxPQUFPLE9BQU8sZ0JBQWdCLFFBQVEsSUFBSTtBQUNoRCxRQUFJLFNBQVMsTUFBTTtBQUNmLFdBQUssSUFBSSxjQUFjLFFBQVEsSUFBSSxVQUFVLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFBQSxJQUNwRTtBQUFBLEVBQ0o7QUFFQSxTQUNJLGdCQUFBTDtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0csV0FBVTtBQUFBLE1BQ1YsYUFBYSxDQUFDSyxPQUFpQjtBQUMzQixRQUFBQSxHQUFFLGVBQWU7QUFDakIscUJBQWEsV0FBVztBQUN4QixvQkFBWSxJQUFJO0FBQUEsTUFDcEI7QUFBQSxNQUNBLGFBQWEsTUFBTTtBQUNmLHFCQUFhLFVBQVUsS0FBSyxJQUFJLEdBQUcsYUFBYSxVQUFVLENBQUM7QUFDM0QsWUFBSSxhQUFhLFlBQVksRUFBRyxhQUFZLEtBQUs7QUFBQSxNQUNyRDtBQUFBLE1BQ0EsWUFBWSxDQUFDQSxPQUFpQkEsR0FBRSxlQUFlO0FBQUEsTUFDL0M7QUFBQSxNQUVBO0FBQUEsd0JBQUFMLEdBQUMsU0FBSSxXQUFVLGNBQ1g7QUFBQSwwQkFBQUEsR0FBQyxZQUFPLFdBQVUsUUFDZCwwQkFBQUEsR0FBQyxTQUFJLFdBQVUsYUFDWDtBQUFBLDRCQUFBQSxHQUFDLFFBQUcsV0FBVSxTQUFRLDBCQUFZO0FBQUEsWUFDbEMsZ0JBQUFBLEdBQUMsZUFBWTtBQUFBLGFBQ2pCLEdBQ0o7QUFBQSxVQUVBLGdCQUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0csV0FBVTtBQUFBLGNBQ1YsbUJBQWdCO0FBQUEsY0FFaEI7QUFBQSxnQ0FBQUEsR0FBQyxTQUFJLFdBQVUsV0FDVix1QkFBYSxJQUFJLENBQUMsV0FBVztBQUMxQix3QkFBTSxXQUNGLE9BQU8sVUFBVSxLQUFLLFNBQ3RCLE9BQU8sV0FBVyxLQUFLO0FBQzNCLHlCQUNJLGdCQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFFRyxNQUFLO0FBQUEsc0JBQ0wsV0FBVyxVQUFVLFdBQVcsYUFBYSxFQUFFO0FBQUEsc0JBQy9DLGdCQUFjO0FBQUEsc0JBQ2QsU0FBUyxNQUNMLFFBQVE7QUFBQSx3QkFDSixPQUFPLE9BQU87QUFBQSx3QkFDZCxRQUFRLE9BQU87QUFBQSxzQkFDbkIsQ0FBQztBQUFBLHNCQUdMO0FBQUEsd0NBQUFBLEdBQUMsVUFBSyxXQUFVLGVBQ1gsaUJBQU8sTUFDWjtBQUFBLHdCQUNBLGdCQUFBQSxHQUFDLFVBQUssV0FBVSxlQUNYO0FBQUEsaUNBQU87QUFBQSwwQkFBTTtBQUFBLDBCQUFJLE9BQU87QUFBQSwyQkFDN0I7QUFBQTtBQUFBO0FBQUEsb0JBaEJLLE9BQU87QUFBQSxrQkFpQmhCO0FBQUEsZ0JBRVIsQ0FBQyxHQUNMO0FBQUEsZ0JBQ0EsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLGtCQUNYO0FBQUEsa0NBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxVQUFVO0FBQUEsc0JBQ1YsU0FBUyxNQUFNLEtBQUssWUFBWTtBQUFBLHNCQUNoQyxXQUFVO0FBQUEsc0JBRVY7QUFBQSx3Q0FBQUEsR0FBQyxVQUFPO0FBQUEsd0JBQUU7QUFBQTtBQUFBO0FBQUEsa0JBRWQ7QUFBQSxrQkFDQSxnQkFBQUE7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0csS0FBSztBQUFBLHNCQUNMLE1BQUs7QUFBQSxzQkFDTCxRQUFPO0FBQUEsc0JBQ1AsV0FBVTtBQUFBLHNCQUNWLFVBQVUsQ0FBQ0ssT0FBYTtBQUNwQiw4QkFBTSxRQUNGQSxHQUFFO0FBQ04sOEJBQU0sT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUM1Qiw4QkFBTSxRQUFRO0FBQ2QsNEJBQUksS0FBTSxNQUFLLGVBQWUsSUFBSTtBQUFBLHNCQUN0QztBQUFBO0FBQUEsa0JBQ0o7QUFBQSxrQkFDQSxnQkFBQUw7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0csTUFBSztBQUFBLHNCQUNMLFVBQVU7QUFBQSxzQkFDVixTQUFTLE1BQU0sUUFBUSxTQUFTLE1BQU07QUFBQSxzQkFDdEMsV0FBVTtBQUFBLHNCQUVWO0FBQUEsd0NBQUFBLEdBQUMsWUFBUztBQUFBLHdCQUFFO0FBQUE7QUFBQTtBQUFBLGtCQUVoQjtBQUFBLG1CQUNKO0FBQUE7QUFBQTtBQUFBLFVBQ0o7QUFBQSxVQUVBLGdCQUFBQSxHQUFDLE9BQUUsV0FBVSxpQkFBZ0I7QUFBQTtBQUFBLFlBQ2hCO0FBQUEsWUFDUixTQUFTLFFBQVEsSUFBSSxTQUFTLE1BQU0sTUFBTSxNQUFNO0FBQUEsYUFDckQ7QUFBQSxVQUNDLENBQUMsU0FBUyxRQUNQLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxlQUFjLG9DQUFpQixJQUM5QyxTQUFTLE1BQU0sV0FBVyxJQUMxQixnQkFBQUEsR0FBQyxTQUFJLFdBQVUsZUFBYyx5RUFHN0IsSUFFQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsZ0JBQ1YsbUJBQVMsTUFBTSxJQUFJLENBQUMsWUFDakIsZ0JBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FFRztBQUFBLGNBQ0EsT0FBTyxVQUFVLElBQUksUUFBUSxFQUFFLEtBQUs7QUFBQSxjQUNwQyxRQUFRLE1BQU1DLFVBQVMsTUFBTSxRQUFRLEVBQUUsRUFBRTtBQUFBLGNBQ3pDLFVBQVUsTUFBTSxTQUFTLE9BQU87QUFBQSxjQUNoQyxVQUFVLE1BQU0sU0FBUyxPQUFPO0FBQUE7QUFBQSxZQUwzQixRQUFRO0FBQUEsVUFNakIsQ0FDSCxHQUNMO0FBQUEsV0FFUjtBQUFBLFFBRUMsV0FDRyxnQkFBQUQsR0FBQyxTQUFJLFdBQVUsZ0JBQ1gsMEJBQUFBLEdBQUMsT0FBRSxzQ0FBd0IsR0FDL0IsSUFDQTtBQUFBLFFBQ0gsT0FBTyxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsY0FBYSxvQ0FBaUIsSUFBUztBQUFBO0FBQUE7QUFBQSxFQUNsRTtBQUVSOzs7QUNoVkEsSUFBTSxhQUFhLGFBQWEsUUFBUSxvQkFBb0I7QUFDNUQsU0FBUyxnQkFBZ0IsUUFBUSxRQUM3QixlQUFlLFdBQVcsZUFBZSxTQUNuQyxhQUNBLFdBQVcsOEJBQThCLEVBQUUsVUFDekMsU0FDQTtBQUVaLElBQU0sYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnSG5CLFNBQVMsV0FBVztBQUNoQixTQUNJLGdCQUFBTSxHQUFDLFNBQUksV0FBVSxhQUNYLDBCQUFBQSxHQUFDLFNBQ0c7QUFBQSxvQkFBQUEsR0FBQyxPQUFFLDRCQUFjO0FBQUEsSUFDakIsZ0JBQUFBLEdBQUMsUUFBSyxJQUFHLEtBQUksV0FBVSxVQUFTLDhCQUVoQztBQUFBLEtBQ0osR0FDSjtBQUVSO0FBRU8sU0FBUyxNQUFNO0FBQ2xCLFNBQ0ksZ0JBQUFBLEdBQUMsVUFDRztBQUFBLG9CQUFBQSxHQUFDLFdBQU8sc0JBQVc7QUFBQSxJQUNuQixnQkFBQUEsR0FBQyxVQUNHO0FBQUEsc0JBQUFBLEdBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyxnQkFBQUEsR0FBQyxRQUFLLEdBQUk7QUFBQSxNQUNuQyxnQkFBQUEsR0FBQyxTQUFNLE1BQUssVUFBUyxTQUFTLGdCQUFBQSxHQUFDLFVBQU8sR0FBSTtBQUFBLE1BQzFDLGdCQUFBQSxHQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsZ0JBQUFBLEdBQUMsWUFBUyxHQUFJO0FBQUEsT0FDM0M7QUFBQSxLQUNKO0FBRVI7OztBQ2pKQSxFQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLGVBQWUsS0FBSyxDQUFDOyIsCiAgIm5hbWVzIjogWyJzbGljZSIsICJvcHRpb25zIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJwcmV2RGVib3VuY2UiLCAiZGVmZXIiLCAiZGVwdGhTb3J0IiwgIl9pZCIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImkiLCAiRU1QVFlfT0JKIiwgIkVNUFRZX0FSUiIsICJJU19OT05fRElNRU5TSU9OQUwiLCAiaXNBcnJheSIsICJBcnJheSIsICJhc3NpZ24iLCAib2JqIiwgInByb3BzIiwgInJlbW92ZU5vZGUiLCAibm9kZSIsICJwYXJlbnROb2RlIiwgInJlbW92ZUNoaWxkIiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjaGlsZHJlbiIsICJrZXkiLCAicmVmIiwgIm5vcm1hbGl6ZWRQcm9wcyIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgImNhbGwiLCAiZGVmYXVsdFByb3BzIiwgImNyZWF0ZVZOb2RlIiwgIm9yaWdpbmFsIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAiX19pIiwgIl9fdSIsICJGcmFnbWVudCIsICJwcm9wcyIsICJjaGlsZHJlbiIsICJCYXNlQ29tcG9uZW50IiwgImNvbnRleHQiLCAidGhpcyIsICJnZXREb21TaWJsaW5nIiwgInZub2RlIiwgImNoaWxkSW5kZXgiLCAiX18iLCAiX19pIiwgInNpYmxpbmciLCAiX19rIiwgImxlbmd0aCIsICJfX2UiLCAidHlwZSIsICJyZW5kZXJDb21wb25lbnQiLCAiY29tcG9uZW50IiwgIl9fUCIsICJfX2QiLCAib2xkVk5vZGUiLCAiX192IiwgIm9sZERvbSIsICJjb21taXRRdWV1ZSIsICJyZWZRdWV1ZSIsICJuZXdWTm9kZSIsICJhc3NpZ24iLCAib3B0aW9ucyIsICJkaWZmIiwgIl9fbiIsICJuYW1lc3BhY2VVUkkiLCAiX191IiwgImNvbW1pdFJvb3QiLCAidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCAiX19jIiwgImJhc2UiLCAic29tZSIsICJjaGlsZCIsICJlbnF1ZXVlUmVuZGVyIiwgImMiLCAicmVyZW5kZXJRdWV1ZSIsICJwdXNoIiwgInByb2Nlc3MiLCAiX19yIiwgInByZXZEZWJvdW5jZSIsICJkZWJvdW5jZVJlbmRlcmluZyIsICJkZWZlciIsICJsIiwgInNvcnQiLCAiZGVwdGhTb3J0IiwgInNoaWZ0IiwgImRpZmZDaGlsZHJlbiIsICJwYXJlbnREb20iLCAicmVuZGVyUmVzdWx0IiwgIm5ld1BhcmVudFZOb2RlIiwgIm9sZFBhcmVudFZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAibmFtZXNwYWNlIiwgImV4Y2Vzc0RvbUNoaWxkcmVuIiwgImlzSHlkcmF0aW5nIiwgImkiLCAiY2hpbGRWTm9kZSIsICJuZXdEb20iLCAiZmlyc3RDaGlsZERvbSIsICJyZXN1bHQiLCAic2hvdWxkUGxhY2UiLCAib2xkQ2hpbGRyZW4iLCAiRU1QVFlfQVJSIiwgIm5ld0NoaWxkcmVuTGVuZ3RoIiwgImNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkiLCAiRU1QVFlfT0JKIiwgInJlZiIsICJhcHBseVJlZiIsICJpbnNlcnQiLCAibmV4dFNpYmxpbmciLCAic2tld2VkSW5kZXgiLCAibWF0Y2hpbmdJbmRleCIsICJvbGRDaGlsZHJlbkxlbmd0aCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJza2V3IiwgIkFycmF5IiwgImNvbnN0cnVjdG9yIiwgIlN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJpc0FycmF5IiwgIl9fYiIsICJrZXkiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJub2RlVHlwZSIsICJ0b0NoaWxkQXJyYXkiLCAib3V0IiwgIngiLCAieSIsICJtYXRjaGVkIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgIkVWRU5UX0FUVEFDSEVEIiwgImV2ZW50Q2xvY2siLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFByb3h5Q2FwdHVyZSIsICJldmVudFByb3h5IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRIYW5kbGVyIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiZXZlbnQiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImlzTmV3IiwgIm9sZFByb3BzIiwgIm9sZFN0YXRlIiwgInNuYXBzaG90IiwgImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsICJuZXdQcm9wcyIsICJpc0NsYXNzQ29tcG9uZW50IiwgInByb3ZpZGVyIiwgImNvbXBvbmVudENvbnRleHQiLCAicmVuZGVySG9vayIsICJjb3VudCIsICJuZXdUeXBlIiwgIm91dGVyIiwgInByb3RvdHlwZSIsICJyZW5kZXIiLCAiY29udGV4dFR5cGUiLCAiX19FIiwgImRvUmVuZGVyIiwgInN1YiIsICJzdGF0ZSIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgImFwcGx5IiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiY29tcG9uZW50RGlkVXBkYXRlIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJjbG9uZU5vZGUiLCAidGhlbiIsICJNT0RFX0hZRFJBVEUiLCAiaW5kZXhPZiIsICJyZW1vdmVOb2RlIiwgIm1hcmtBc0ZvcmNlIiwgImRpZmZFbGVtZW50Tm9kZXMiLCAiZGlmZmVkIiwgInJvb3QiLCAiY2IiLCAiY2FsbCIsICJub2RlIiwgIm1hcCIsICJuZXdIdG1sIiwgIm9sZEh0bWwiLCAibmV3Q2hpbGRyZW4iLCAiaW5wdXRWYWx1ZSIsICJjaGVja2VkIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiaXMiLCAiX19tIiwgImRhdGEiLCAiZGVmYXVsdFZhbHVlIiwgImNoaWxkTm9kZXMiLCAiYXR0cmlidXRlcyIsICJfX2h0bWwiLCAiaW5uZXJIVE1MIiwgImNvbnRlbnQiLCAidW5kZWZpbmVkIiwgImhhc1JlZlVubW91bnQiLCAiY3VycmVudCIsICJza2lwUmVtb3ZlIiwgInIiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAicmVwbGFjZU5vZGUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiZmlyc3RDaGlsZCIsICJjcmVhdGVDb250ZXh0IiwgImRlZmF1bHRWYWx1ZSIsICJDb250ZXh0IiwgInByb3BzIiwgInN1YnMiLCAiY3R4IiwgInRoaXMiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgIlNldCIsICJfX2MiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9wcm9wcyIsICJ2YWx1ZSIsICJmb3JFYWNoIiwgImMiLCAiX19lIiwgImVucXVldWVSZW5kZXIiLCAic3ViIiwgImFkZCIsICJvbGQiLCAiZGVsZXRlIiwgImNhbGwiLCAiY2hpbGRyZW4iLCAiaSIsICJfXyIsICJQcm92aWRlciIsICJfX2wiLCAiQ29uc3VtZXIiLCAiY29udGV4dFZhbHVlIiwgImNvbnRleHRUeXBlIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJfX2QiLCAiY29tcG9uZW50RGlkQ2F0Y2giLCAiX19FIiwgImUiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJCYXNlQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiY3VycmVudEluZGV4IiwgImN1cnJlbnRDb21wb25lbnQiLCAicHJldmlvdXNDb21wb25lbnQiLCAicHJldlJhZiIsICJjdXJyZW50SG9vayIsICJhZnRlclBhaW50RWZmZWN0cyIsICJvcHRpb25zIiwgIl9vcHRpb25zIiwgIm9sZEJlZm9yZURpZmYiLCAiX19iIiwgIm9sZEJlZm9yZVJlbmRlciIsICJfX3IiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAiX19jIiwgIm9sZEJlZm9yZVVubW91bnQiLCAidW5tb3VudCIsICJvbGRSb290IiwgIl9fIiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgIl9faCIsICJob29rcyIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAidXNlU3RhdGUiLCAiaW5pdGlhbFN0YXRlIiwgInVzZVJlZHVjZXIiLCAiaW52b2tlT3JSZXR1cm4iLCAicmVkdWNlciIsICJpbml0IiwgImhvb2tTdGF0ZSIsICJfcmVkdWNlciIsICJhY3Rpb24iLCAiY3VycmVudFZhbHVlIiwgIl9fTiIsICJuZXh0VmFsdWUiLCAic2V0U3RhdGUiLCAiX19mIiwgInVwZGF0ZUhvb2tTdGF0ZSIsICJwIiwgInMiLCAiYyIsICJ1cGRhdGVkSG9vayIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJwcmV2U2N1IiwgInJlc3VsdCIsICJjYWxsIiwgInRoaXMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgInByZXZDV1UiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAidG1wIiwgInVzZUVmZmVjdCIsICJjYWxsYmFjayIsICJhcmdzIiwgInN0YXRlIiwgIl9fcyIsICJhcmdzQ2hhbmdlZCIsICJfcGVuZGluZ0FyZ3MiLCAidXNlUmVmIiwgImluaXRpYWxWYWx1ZSIsICJjdXJyZW50SG9vayIsICJ1c2VNZW1vIiwgImN1cnJlbnQiLCAidXNlTWVtbyIsICJmYWN0b3J5IiwgImFyZ3MiLCAic3RhdGUiLCAiZ2V0SG9va1N0YXRlIiwgImN1cnJlbnRJbmRleCIsICJhcmdzQ2hhbmdlZCIsICJfX0giLCAiX18iLCAiX19oIiwgInVzZUNvbnRleHQiLCAiY29udGV4dCIsICJwcm92aWRlciIsICJjdXJyZW50Q29tcG9uZW50IiwgIl9fYyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImMiLCAiX18iLCAic3ViIiwgInByb3BzIiwgInZhbHVlIiwgImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCAiY29tcG9uZW50IiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgInNoaWZ0IiwgImhvb2tzIiwgIl9fSCIsICJfX1AiLCAiX19oIiwgInNvbWUiLCAiaW52b2tlQ2xlYW51cCIsICJpbnZva2VFZmZlY3QiLCAiZSIsICJvcHRpb25zIiwgIl9fZSIsICJfX3YiLCAiX19iIiwgInZub2RlIiwgImN1cnJlbnRDb21wb25lbnQiLCAib2xkQmVmb3JlRGlmZiIsICJfXyIsICJwYXJlbnREb20iLCAiX19rIiwgIl9fbSIsICJvbGRSb290IiwgIl9fciIsICJvbGRCZWZvcmVSZW5kZXIiLCAiY3VycmVudEluZGV4IiwgIl9fYyIsICJwcmV2aW91c0NvbXBvbmVudCIsICJob29rSXRlbSIsICJfX04iLCAiX3BlbmRpbmdBcmdzIiwgImRpZmZlZCIsICJvbGRBZnRlckRpZmYiLCAiYyIsICJsZW5ndGgiLCAicHVzaCIsICJwcmV2UmFmIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJhZnRlck5leHRGcmFtZSIsICJjb21taXRRdWV1ZSIsICJmaWx0ZXIiLCAiY2IiLCAib2xkQ29tbWl0IiwgInVubW91bnQiLCAib2xkQmVmb3JlVW5tb3VudCIsICJoYXNFcnJvcmVkIiwgInMiLCAiSEFTX1JBRiIsICJjYWxsYmFjayIsICJyYWYiLCAiZG9uZSIsICJjbGVhclRpbWVvdXQiLCAidGltZW91dCIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJzZXRUaW1lb3V0IiwgImhvb2siLCAiY29tcCIsICJjbGVhbnVwIiwgImFyZ3NDaGFuZ2VkIiwgIm9sZEFyZ3MiLCAibmV3QXJncyIsICJhcmciLCAiaW5kZXgiLCAiaW52b2tlT3JSZXR1cm4iLCAiZiIsICJsaXN0ZW5lcnMiLCAic3RhdGUiLCAiZCIsICJoIiwgIngiLCAiZCIsICJoIiwgInQiLCAiQSIsICJkIiwgImgiLCAiaSIsICJsaXN0ZW5lcnMiLCAicGVuZGluZyIsICJkIiwgImgiLCAiaW1hZ2VzIiwgImkiLCAicyIsICJsIiwgImVudHJpZXMiLCAiZSIsICJjIiwgImEiLCAiYiIsICJkIiwgImkiLCAiaW1hZ2VzIiwgInciLCAiaCIsICJ2IiwgInQiLCAiYSIsICJoIiwgInciLCAicyIsICJ3IiwgImgiLCAidm5vZGVJZCIsICJjcmVhdGVWTm9kZSIsICJ0eXBlIiwgInByb3BzIiwgImtleSIsICJpc1N0YXRpY0NoaWxkcmVuIiwgIl9fc291cmNlIiwgIl9fc2VsZiIsICJyZWYiLCAiaSIsICJub3JtYWxpemVkUHJvcHMiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJ2bm9kZUlkIiwgIl9faSIsICJfX3UiLCAiZGVmYXVsdFByb3BzIiwgIm9wdGlvbnMiLCAidSIsICJzIiwgIkEiLCAiaCIsICJlIiwgInYiLCAic3RhdGUiLCAibCIsICJsYXllciIsICJ4IiwgInkiLCAidyIsICJpbWFnZXMiLCAidSIsICJ1IiwgInUiLCAidSIsICJkIiwgImUiLCAicyIsICJBIiwgImwiLCAicyIsICJ1IiwgInQiLCAiZCIsICJoIiwgInUiLCAidSIsICJzIiwgIkEiLCAiaW1hZ2VzIiwgImUiLCAiaCIsICJlIiwgInMiLCAiZCIsICJBIiwgInAiLCAidSIsICJ1IiwgIm5hdmlnYXRlIiwgIkEiLCAiZCIsICJ0IiwgImUiLCAidSJdCn0K
