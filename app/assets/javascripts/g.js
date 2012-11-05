(function(d, e) {
	function l(b) {
		var c = i[b] = {},
			a, f, b = b.split(/\s+/);
		a = 0;
		for (f = b.length; a < f; a++) c[b[a]] = !0;
		return c
	}
	function E(b, m, a) {
		if (a === e && b.nodeType === 1) if (a = "data-" + m.replace(u, "-$1").toLowerCase(), a = b.getAttribute(a), typeof a === "string") {
			try {
				a = a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : c.isNumeric(a) ? +a : s.test(a) ? c.parseJSON(a) : a
			} catch (f) {}
			c.data(b, m, a)
		} else a = e;
		return a
	}
	function t(b) {
		for (var m in b) if (!(m === "data" && c.isEmptyObject(b[m])) && m !== "toJSON") return !1;
		return !0
	}
	function v(b, m, a) {
		var f = m + "defer",
			h = m + "queue",
			B = m + "mark",
			d = c._data(b, f);
		d && (a === "queue" || !c._data(b, h)) && (a === "mark" || !c._data(b, B)) && setTimeout(function() {
			!c._data(b, h) && !c._data(b, B) && (c.removeData(b, f, !0), d.fire())
		}, 0)
	}
	function q() {
		return !1
	}
	function F() {
		return !0
	}
	function x(b, m, a) {
		m = m || 0;
		if (c.isFunction(m)) return c.grep(b, function(b, c) {
			return !!m.call(b, c, b) === a
		});
		else if (m.nodeType) return c.grep(b, function(b) {
			return b === m === a
		});
		else if (typeof m === "string") {
			var f = c.grep(b, function(b) {
				return b.nodeType === 1
			});
			if (Ya.test(m)) return c.filter(m, f, !a);
			else m = c.filter(m, f)
		}
		return c.grep(b, function(b) {
			return c.inArray(b, m) >= 0 === a
		})
	}
	function C(b) {
		var c = Ba.split("|"),
			b = b.createDocumentFragment();
		if (b.createElement) for (; c.length;) b.createElement(c.pop());
		return b
	}
	function D(b, m) {
		if (m.nodeType === 1 && c.hasData(b)) {
			var a, f, h;
			f = c._data(b);
			var B = c._data(m, f),
				d = f.events;
			if (d) for (a in delete B.handle, B.events = {}, d) {
				f = 0;
				for (h = d[a].length; f < h; f++) c.event.add(m, a, d[a][f])
			}
			if (B.data) B.data = c.extend({}, B.data)
		}
	}
	function z(b, m) {
		var a;
		if (m.nodeType === 1) {
			m.clearAttributes && m.clearAttributes();
			m.mergeAttributes && m.mergeAttributes(b);
			a = m.nodeName.toLowerCase();
			if (a === "object") m.outerHTML = b.outerHTML;
			else if (a === "input" && (b.type === "checkbox" || b.type === "radio")) {
				if (b.checked) m.defaultChecked = m.checked = b.checked;
				if (m.value !== b.value) m.value = b.value
			} else if (a === "option") m.selected = b.defaultSelected;
			else if (a === "input" || a === "textarea") m.defaultValue = b.defaultValue;
			else if (a === "script" && m.text !== b.text) m.text = b.text;
			m.removeAttribute(c.expando);
			m.removeAttribute("_submit_attached");
			m.removeAttribute("_change_attached")
		}
	}
	function y(b) {
		return typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : typeof b.querySelectorAll !== "undefined" ? b.querySelectorAll("*") : []
	}
	function O(b) {
		if (b.type === "checkbox" || b.type === "radio") b.defaultChecked = b.checked
	}
	function I(b) {
		var m = (b.nodeName || "").toLowerCase();
		m === "input" ? O(b) : m !== "script" && typeof b.getElementsByTagName !== "undefined" && c.grep(b.getElementsByTagName("input"), O)
	}
	function M(b, m, a) {
		var f = m === "width" ? b.offsetWidth : b.offsetHeight,
			h = m === "width" ? 1 : 0;
		if (f > 0) {
			if (a !== "border") for (; h < 4; h += 2) a || (f -= parseFloat(c.css(b, "padding" + ca[h])) || 0), a === "margin" ? f += parseFloat(c.css(b, a + ca[h])) || 0 : f -= parseFloat(c.css(b, "border" + ca[h] + "Width")) || 0;
			return f + "px"
		}
		f = fa(b, m);
		if (f < 0 || f == null) f = b.style[m];
		if (sa.test(f)) return f;
		f = parseFloat(f) || 0;
		if (a) for (; h < 4; h += 2) f += parseFloat(c.css(b, "padding" + ca[h])) || 0, a !== "padding" && (f += parseFloat(c.css(b, "border" + ca[h] + "Width")) || 0), a === "margin" && (f += parseFloat(c.css(b, a + ca[h])) || 0);
		return f + "px"
	}
	function U(b) {
		return function(m, a) {
			var g;
			typeof m !== "string" && (a = m, m = "*");
			if (c.isFunction(a)) for (var f = m.toLowerCase().split(Ca), h = 0, B = f.length, d, w; h < B; h++) d = f[h], (w = /^\+/.test(d)) && (d = d.substr(1) || "*"), g = b[d] = b[d] || [], d = g, d[w ? "unshift" : "push"](a)
		}
	}
	function P(b, c, a, f, h, B) {
		h = h || c.dataTypes[0];
		B = B || {};
		B[h] = !0;
		for (var h = b[h], d = 0, w = h ? h.length : 0, i = b === ta, j; d < w && (i || !j); d++) j = h[d](c, a, f), typeof j === "string" && (!i || B[j] ? j = e : (c.dataTypes.unshift(j), j = P(b, c, a, f, j, B)));
		if ((i || !j) && !B["*"]) j = P(b, c, a, f, "*", B);
		return j
	}
	function Q(b, m) {
		var a, f, h = c.ajaxSettings.flatOptions || {};
		for (a in m) m[a] !== e && ((h[a] ? b : f || (f = {}))[a] = m[a]);
		f && c.extend(!0, b, f)
	}
	function L(b, m, a, f) {
		if (c.isArray(m)) c.each(m, function(c, m) {
			a || Za.test(b) ? f(b, m) : L(b + "[" + (typeof m === "object" ? c : "") + "]", m, a, f)
		});
		else if (!a && c.type(m) === "object") for (var h in m) L(b + "[" + h + "]", m[h], a, f);
		else f(b, m)
	}
	function W() {
		try {
			return new d.XMLHttpRequest
		} catch (b) {}
	}
	function X() {
		setTimeout(aa, 0);
		return na = c.now()
	}
	function aa() {
		na = e
	}
	function R(b, m) {
		var a = {};
		c.each(oa.concat.apply([], oa.slice(0, m)), function() {
			a[this] = b
		});
		return a
	}
	function la(b) {
		if (!ua[b]) {
			var m = k.body,
				a = c("<" + b + ">").appendTo(m),
				f = a.css("display");
			a.remove();
			if (f === "none" || f === "") {
				if (!Y) Y = k.createElement("iframe"), Y.frameBorder = Y.width = Y.height = 0;
				m.appendChild(Y);
				if (!ga || !Y.createElement) ga = (Y.contentWindow || Y.contentDocument).document, ga.write((c.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), ga.close();
				a = ga.createElement(b);
				ga.body.appendChild(a);
				f = c.css(a, "display");
				m.removeChild(Y)
			}
			ua[b] = f
		}
		return ua[b]
	}
	function ha(b) {
		return c.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
	}
	var k = d.document,
		Z = d.navigator,
		a = d.location,
		c = function() {
			function b() {
				if (!c.isReady) {
					try {
						k.documentElement.doScroll("left")
					} catch (a) {
						setTimeout(b, 1);
						return
					}
					c.ready()
				}
			}
			var c = function(b, a) {
					return new c.fn.init(b, a, h)
				},
				a = d.jQuery,
				f = d.$,
				h, B = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				ka = /\S/,
				w = /^\s+/,
				i = /\s+$/,
				j = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				p = /^[\],:{}\s]*$/,
				s = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				n = /(?:^|:|,)(?:\s*\[)+/g,
				u = /(webkit)[ \/]([\w.]+)/,
				o = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				l = /(msie) ([\w.]+)/,
				N = /(mozilla)(?:.*? rv:([\w.]+))?/,
				H = /-([a-z]|[0-9])/ig,
				K = /^-ms-/,
				q = function(c, b) {
					return (b + "").toUpperCase()
				},
				A = Z.userAgent,
				J, T, $a = Object.prototype.toString,
				va = Object.prototype.hasOwnProperty,
				wa = Array.prototype.push,
				ma = Array.prototype.slice,
				Da = String.prototype.trim,
				Ea = Array.prototype.indexOf,
				x = {};
			c.fn = c.prototype = {
				constructor: c,
				init: function(b, a, g) {
					var f;
					if (!b) return this;
					if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
					if (b === "body" && !a && k.body) return this.context = k, this[0] = k.body, this.selector = b, this.length = 1, this;
					if (typeof b === "string") if ((f = b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3 ? [null, b, null] : B.exec(b)) && (f[1] || !a)) if (f[1]) return g = (a = a instanceof c ? a[0] : a) ? a.ownerDocument || a : k, (b = j.exec(b)) ? c.isPlainObject(a) ? (b = [k.createElement(b[1])], c.fn.attr.call(b, a, !0)) : b = [g.createElement(b[1])] : (b = c.buildFragment([f[1]], [g]), b = (b.cacheable ? c.clone(b.fragment) : b.fragment).childNodes), c.merge(this, b);
					else {
						if ((a = k.getElementById(f[2])) && a.parentNode) {
							if (a.id !== f[2]) return g.find(b);
							this.length = 1;
							this[0] = a
						}
						this.context = k;
						this.selector = b;
						return this
					} else return !a || a.jquery ? (a || g).find(b) : this.constructor(a).find(b);
					else if (c.isFunction(b)) return g.ready(b);
					if (b.selector !== e) this.selector = b.selector, this.context = b.context;
					return c.makeArray(b, this)
				},
				selector: "",
				jquery: "1.7.2",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return ma.call(this, 0)
				},
				get: function(c) {
					return c == null ? this.toArray() : c < 0 ? this[this.length + c] : this[c]
				},
				pushStack: function(b, a, g) {
					var f = this.constructor();
					c.isArray(b) ? wa.apply(f, b) : c.merge(f, b);
					f.prevObject = this;
					f.context = this.context;
					if (a === "find") f.selector = this.selector + (this.selector ? " " : "") + g;
					else if (a) f.selector = this.selector + "." + a + "(" + g + ")";
					return f
				},
				each: function(b, a) {
					return c.each(this, b, a)
				},
				ready: function(b) {
					c.bindReady();
					J.add(b);
					return this
				},
				eq: function(c) {
					c = +c;
					return c === -1 ? this.slice(c) : this.slice(c, c + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(ma.apply(this, arguments), "slice", ma.call(arguments).join(","))
				},
				map: function(b) {
					return this.pushStack(c.map(this, function(c, m) {
						return b.call(c, m, c)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: wa,
				sort: [].sort,
				splice: [].splice
			};
			c.fn.init.prototype = c.fn;
			c.extend = c.fn.extend = function() {
				var b, a, g, f, h, J = arguments[0] || {},
					B = 1,
					d = arguments.length,
					w = !1;
				typeof J === "boolean" && (w = J, J = arguments[1] || {}, B = 2);
				typeof J !== "object" && !c.isFunction(J) && (J = {});
				d === B && (J = this, --B);
				for (; B < d; B++) if ((b = arguments[B]) != null) for (a in b) g = J[a], f = b[a], J !== f && (w && f && (c.isPlainObject(f) || (h = c.isArray(f))) ? (h ? (h = !1, g = g && c.isArray(g) ? g : []) : g = g && c.isPlainObject(g) ? g : {}, J[a] = c.extend(w, g, f)) : f !== e && (J[a] = f));
				return J
			};
			c.extend({
				noConflict: function(b) {
					if (d.$ === c) d.$ = f;
					if (b && d.jQuery === c) d.jQuery = a;
					return c
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(b) {
					b ? c.readyWait++ : c.ready(!0)
				},
				ready: function(b) {
					if (b === !0 && !--c.readyWait || b !== !0 && !c.isReady) {
						if (!k.body) return setTimeout(c.ready, 1);
						c.isReady = !0;
						b !== !0 && --c.readyWait > 0 || (J.fireWith(k, [c]), c.fn.trigger && c(k).trigger("ready").off("ready"))
					}
				},
				bindReady: function() {
					if (!J) {
						J = c.Callbacks("once memory");
						if (k.readyState === "complete") return setTimeout(c.ready, 1);
						if (k.addEventListener) k.addEventListener("DOMContentLoaded", T, !1), d.addEventListener("load", c.ready, !1);
						else if (k.attachEvent) {
							k.attachEvent("onreadystatechange", T);
							d.attachEvent("onload", c.ready);
							var a = !1;
							try {
								a = d.frameElement == null
							} catch (g) {}
							k.documentElement.doScroll && a && b()
						}
					}
				},
				isFunction: function(b) {
					return c.type(b) === "function"
				},
				isArray: Array.isArray ||
				function(b) {
					return c.type(b) === "array"
				},
				isWindow: function(b) {
					return b != null && b == b.window
				},
				isNumeric: function(b) {
					return !isNaN(parseFloat(b)) && isFinite(b)
				},
				type: function(b) {
					return b == null ? String(b) : x[$a.call(b)] || "object"
				},
				isPlainObject: function(b) {
					if (!b || c.type(b) !== "object" || b.nodeType || c.isWindow(b)) return !1;
					try {
						if (b.constructor && !va.call(b, "constructor") && !va.call(b.constructor.prototype, "isPrototypeOf")) return !1
					} catch (a) {
						return !1
					}
					for (var g in b);
					return g === e || va.call(b, g)
				},
				isEmptyObject: function(b) {
					for (var c in b) return !1;
					return !0
				},
				error: function(b) {
					throw Error(b);
				},
				parseJSON: function(b) {
					if (typeof b !== "string" || !b) return null;
					b = c.trim(b);
					if (d.JSON && d.JSON.parse) return d.JSON.parse(b);
					if (p.test(b.replace(s, "@").replace(r, "]").replace(n, ""))) return (new Function("return " + b))();
					c.error("Invalid JSON: " + b)
				},
				parseXML: function(b) {
					if (typeof b !== "string" || !b) return null;
					var a, g;
					try {
						d.DOMParser ? (g = new DOMParser, a = g.parseFromString(b, "text/xml")) : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(b))
					} catch (f) {
						a = e
					}(!a || !a.documentElement || a.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + b);
					return a
				},
				noop: function() {},
				globalEval: function(b) {
					b && ka.test(b) && (d.execScript ||
					function(b) {
						d.eval.call(d, b)
					})(b)
				},
				camelCase: function(b) {
					return b.replace(K, "ms-").replace(H, q)
				},
				nodeName: function(b, c) {
					return b.nodeName && b.nodeName.toUpperCase() === c.toUpperCase()
				},
				each: function(b, a, g) {
					var f, h = 0,
						J = b.length,
						B = J === e || c.isFunction(b);
					if (g) if (B) for (f in b) {
						if (a.apply(b[f], g) === !1) break
					} else for (; h < J;) {
						if (a.apply(b[h++], g) === !1) break
					} else if (B) for (f in b) {
						if (a.call(b[f], f, b[f]) === !1) break
					} else for (; h < J;) if (a.call(b[h], h, b[h++]) === !1) break;
					return b
				},
				trim: Da ?
				function(b) {
					return b == null ? "" : Da.call(b)
				} : function(b) {
					return b == null ? "" : b.toString().replace(w, "").replace(i, "")
				},
				makeArray: function(b, a) {
					var g = a || [];
					if (b != null) {
						var f = c.type(b);
						b.length == null || f === "string" || f === "function" || f === "regexp" || c.isWindow(b) ? wa.call(g, b) : c.merge(g, b)
					}
					return g
				},
				inArray: function(b, c, a) {
					var m;
					if (c) {
						if (Ea) return Ea.call(c, b, a);
						m = c.length;
						for (a = a ? a < 0 ? Math.max(0, m + a) : a : 0; a < m; a++) if (a in c && c[a] === b) return a
					}
					return -1
				},
				merge: function(b, c) {
					var a = b.length,
						m = 0;
					if (typeof c.length === "number") for (var g = c.length; m < g; m++) b[a++] = c[m];
					else for (; c[m] !== e;) b[a++] = c[m++];
					b.length = a;
					return b
				},
				grep: function(b, c, a) {
					for (var m = [], g, a = !! a, f = 0, h = b.length; f < h; f++) g = !! c(b[f], f), a !== g && m.push(b[f]);
					return m
				},
				map: function(b, a, g) {
					var f, h, J = [],
						B = 0,
						d = b.length;
					if (b instanceof c || d !== e && typeof d === "number" && (d > 0 && b[0] && b[d - 1] || d === 0 || c.isArray(b))) for (; B < d; B++) f = a(b[B], B, g), f != null && (J[J.length] = f);
					else for (h in b) f = a(b[h], h, g), f != null && (J[J.length] = f);
					return J.concat.apply([], J)
				},
				guid: 1,
				proxy: function(b, a) {
					if (typeof a === "string") var g = b[a],
						a = b,
						b = g;
					if (!c.isFunction(b)) return e;
					var f = ma.call(arguments, 2),
						g = function() {
							return b.apply(a, f.concat(ma.call(arguments)))
						};
					g.guid = b.guid = b.guid || g.guid || c.guid++;
					return g
				},
				access: function(b, a, g, f, h, J, B) {
					var d, w = g == null,
						T = 0,
						ka = b.length;
					if (g && typeof g === "object") {
						for (T in g) c.access(b, a, T, g[T], 1, J, f);
						h = 1
					} else if (f !== e) {
						d = B === e && c.isFunction(f);
						w && (d ? (d = a, a = function(b, a, g) {
							return d.call(c(b), g)
						}) : (a.call(b, f), a = null));
						if (a) for (; T < ka; T++) a(b[T], g, d ? f.call(b[T], T, a(b[T], g)) : f, B);
						h = 1
					}
					return h ? b : w ? a.call(b) : ka ? a(b[0], g) : J
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(b) {
					b = b.toLowerCase();
					b = u.exec(b) || o.exec(b) || l.exec(b) || b.indexOf("compatible") < 0 && N.exec(b) || [];
					return {
						browser: b[1] || "",
						version: b[2] || "0"
					}
				},
				sub: function() {
					function b(c, a) {
						return new b.fn.init(c, a)
					}
					c.extend(!0, b, this);
					b.superclass = this;
					b.fn = b.prototype = this();
					b.fn.constructor = b;
					b.sub = this.sub;
					b.fn.init = function(g, f) {
						f && f instanceof c && !(f instanceof b) && (f = b(f));
						return c.fn.init.call(this, g, f, a)
					};
					b.fn.init.prototype = b.fn;
					var a = b(k);
					return b
				},
				browser: {}
			});
			c.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
				x["[object " + c + "]"] = c.toLowerCase()
			});
			A = c.uaMatch(A);
			if (A.browser) c.browser[A.browser] = !0, c.browser.version = A.version;
			if (c.browser.webkit) c.browser.safari = !0;
			ka.test("\u00a0") && (w = /^[\s\xA0]+/, i = /[\s\xA0]+$/);
			h = c(k);
			k.addEventListener ? T = function() {
				k.removeEventListener("DOMContentLoaded", T, !1);
				c.ready()
			} : k.attachEvent && (T = function() {
				k.readyState === "complete" && (k.detachEvent("onreadystatechange", T), c.ready())
			});
			return c
		}(),
		i = {};
	c.Callbacks = function(b) {
		var b = b ? i[b] || l(b) : {},
			a = [],
			g = [],
			f, h, B, d, w, j, p = function(g) {
				var f, h, B, d;
				f = 0;
				for (h = g.length; f < h; f++) B = g[f], d = c.type(B), d === "array" ? p(B) : d === "function" && (!b.unique || !s.has(B)) && a.push(B)
			},
			k = function(c, i) {
				i = i || [];
				f = !b.memory || [c, i];
				B = h = !0;
				j = d || 0;
				d = 0;
				for (w = a.length; a && j < w; j++) if (a[j].apply(c, i) === !1 && b.stopOnFalse) {
					f = !0;
					break
				}
				B = !1;
				a && (b.once ? f === !0 ? s.disable() : a = [] : g && g.length && (f = g.shift(), s.fireWith(f[0], f[1])))
			},
			s = {
				add: function() {
					if (a) {
						var b = a.length;
						p(arguments);
						B ? w = a.length : f && f !== !0 && (d = b, k(f[0], f[1]))
					}
					return this
				},
				remove: function() {
					if (a) for (var c = arguments, g = 0, f = c.length; g < f; g++) for (var h = 0; h < a.length; h++) if (c[g] === a[h] && (B && h <= w && (w--, h <= j && j--), a.splice(h--, 1), b.unique)) break;
					return this
				},
				has: function(b) {
					if (a) for (var c = 0, g = a.length; c < g; c++) if (b === a[c]) return !0;
					return !1
				},
				empty: function() {
					a = [];
					return this
				},
				disable: function() {
					a = g = f = e;
					return this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					g = e;
					(!f || f === !0) && s.disable();
					return this
				},
				locked: function() {
					return !g
				},
				fireWith: function(c, a) {
					g && (B ? b.once || g.push([c, a]) : (!b.once || !f) && k(c, a));
					return this
				},
				fire: function() {
					s.fireWith(this, arguments);
					return this
				},
				fired: function() {
					return !!h
				}
			};
		return s
	};
	var j = [].slice;
	c.extend({
		Deferred: function(b) {
			var a = c.Callbacks("once memory"),
				g = c.Callbacks("once memory"),
				f = c.Callbacks("memory"),
				h = "pending",
				B = {
					resolve: a,
					reject: g,
					notify: f
				},
				d = {
					done: a.add,
					fail: g.add,
					progress: f.add,
					state: function() {
						return h
					},
					isResolved: a.fired,
					isRejected: g.fired,
					then: function(b, c, a) {
						w.done(b).fail(c).progress(a);
						return this
					},
					always: function() {
						w.done.apply(w, arguments).fail.apply(w, arguments);
						return this
					},
					pipe: function(b, a, m) {
						return c.Deferred(function(g) {
							c.each({
								done: [b, "resolve"],
								fail: [a, "reject"],
								progress: [m, "notify"]
							}, function(b, a) {
								var m = a[0],
									f = a[1],
									h;
								if (c.isFunction(m)) w[b](function() {
									if ((h = m.apply(this, arguments)) && c.isFunction(h.promise)) h.promise().then(g.resolve, g.reject, g.notify);
									else g[f + "With"](this === w ? g : this, [h])
								});
								else w[b](g[f])
							})
						}).promise()
					},
					promise: function(b) {
						if (b == null) b = d;
						else for (var c in d) b[c] = d[c];
						return b
					}
				},
				w = d.promise({}),
				i;
			for (i in B) w[i] = B[i].fire, w[i + "With"] = B[i].fireWith;
			w.done(function() {
				h = "resolved"
			}, g.disable, f.lock).fail(function() {
				h = "rejected"
			}, a.disable, f.lock);
			b && b.call(w, w);
			return w
		},
		when: function(b) {
			function a(b) {
				return function(c) {
					f[b] = arguments.length > 1 ? j.call(arguments, 0) : c;
					--w || e.resolveWith(e, f)
				}
			}
			function g(b) {
				return function(c) {
					i[b] = arguments.length > 1 ? j.call(arguments, 0) : c;
					e.notifyWith(p, i)
				}
			}
			var f = j.call(arguments, 0),
				h = 0,
				d = f.length,
				i = Array(d),
				w = d,
				e = d <= 1 && b && c.isFunction(b.promise) ? b : c.Deferred(),
				p = e.promise();
			if (d > 1) {
				for (; h < d; h++) f[h] && f[h].promise && c.isFunction(f[h].promise) ? f[h].promise().then(a(h), e.reject, g(h)) : --w;
				w || e.resolveWith(e, f)
			} else e !== b && e.resolveWith(e, d ? [b] : []);
			return p
		}
	});
	c.support = function() {
		var b, a, g, f, h, B, i, w, e = k.createElement("div");
		e.setAttribute("className", "t");
		e.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		a = e.getElementsByTagName("*");
		g = e.getElementsByTagName("a")[0];
		if (!a || !a.length || !g) return {};
		f = k.createElement("select");
		h = f.appendChild(k.createElement("option"));
		a = e.getElementsByTagName("input")[0];
		b = {
			leadingWhitespace: e.firstChild.nodeType === 3,
			tbody: !e.getElementsByTagName("tbody").length,
			htmlSerialize: !! e.getElementsByTagName("link").length,
			style: /top/.test(g.getAttribute("style")),
			hrefNormalized: g.getAttribute("href") === "/a",
			opacity: /^0.55/.test(g.style.opacity),
			cssFloat: !! g.style.cssFloat,
			checkOn: a.value === "on",
			optSelected: h.selected,
			getSetAttribute: e.className !== "t",
			enctype: !! k.createElement("form").enctype,
			html5Clone: k.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			pixelMargin: !0
		};
		c.boxModel = b.boxModel = k.compatMode === "CSS1Compat";
		a.checked = !0;
		b.noCloneChecked = a.cloneNode(!0).checked;
		f.disabled = !0;
		b.optDisabled = !h.disabled;
		try {
			delete e.test
		} catch (j) {
			b.deleteExpando = !1
		}!e.addEventListener && e.attachEvent && e.fireEvent && (e.attachEvent("onclick", function() {
			b.noCloneEvent = !1
		}), e.cloneNode(!0).fireEvent("onclick"));
		a = k.createElement("input");
		a.value = "t";
		a.setAttribute("type", "radio");
		b.radioValue = a.value === "t";
		a.setAttribute("checked", "checked");
		a.setAttribute("name", "t");
		e.appendChild(a);
		g = k.createDocumentFragment();
		g.appendChild(e.lastChild);
		b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked;
		b.appendChecked = a.checked;
		g.removeChild(a);
		g.appendChild(e);
		if (e.attachEvent) for (i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) a = "on" + i, w = a in e, w || (e.setAttribute(a, "return;"), w = typeof e[a] === "function"), b[i + "Bubbles"] = w;
		g.removeChild(e);
		g = f = h = e = a = null;
		c(function() {
			var a, m, g, f, h = k.getElementsByTagName("body")[0];
			if (h) {
				a = k.createElement("div");
				a.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";
				h.insertBefore(a, h.firstChild);
				e = k.createElement("div");
				a.appendChild(e);
				e.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
				B = e.getElementsByTagName("td");
				w = B[0].offsetHeight === 0;
				B[0].style.display = "";
				B[1].style.display = "none";
				b.reliableHiddenOffsets = w && B[0].offsetHeight === 0;
				if (d.getComputedStyle) e.innerHTML = "", m = k.createElement("div"), m.style.width = "0", m.style.marginRight = "0", e.style.width = "2px", e.appendChild(m), b.reliableMarginRight = (parseInt((d.getComputedStyle(m, null) || {
					marginRight: 0
				}).marginRight, 10) || 0) === 0;
				if (typeof e.style.zoom !== "undefined") e.innerHTML = "", e.style.width = e.style.padding = "1px", e.style.border = 0, e.style.overflow = "hidden", e.style.display = "inline", e.style.zoom = 1, b.inlineBlockNeedsLayout = e.offsetWidth === 3, e.style.display = "block", e.style.overflow = "visible", e.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = e.offsetWidth !== 3;
				e.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";
				e.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
				m = e.firstChild;
				g = m.firstChild;
				f = {
					doesNotAddBorder: g.offsetTop !== 5,
					doesAddBorderForTableAndCells: m.nextSibling.firstChild.firstChild.offsetTop === 5
				};
				g.style.position = "fixed";
				g.style.top = "20px";
				f.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15;
				g.style.position = g.style.top = "";
				m.style.overflow = "hidden";
				m.style.position = "relative";
				f.subtractsBorderForOverflowNotVisible = g.offsetTop === -5;
				f.doesNotIncludeMarginInBodyOffset = h.offsetTop !== 1;
				if (d.getComputedStyle) e.style.marginTop = "1%", b.pixelMargin = (d.getComputedStyle(e, null) || {
					marginTop: 0
				}).marginTop !== "1%";
				if (typeof a.style.zoom !== "undefined") a.style.zoom = 1;
				h.removeChild(a);
				e = null;
				c.extend(b, f)
			}
		});
		return b
	}();
	var s = /^(?:\{.*\}|\[.*\])$/,
		u = /([A-Z])/g;
	c.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(b) {
			b = b.nodeType ? c.cache[b[c.expando]] : b[c.expando];
			return !!b && !t(b)
		},
		data: function(b, a, g, f) {
			if (c.acceptData(b)) {
				var h;
				h = c.expando;
				var d = typeof a === "string",
					i = b.nodeType,
					w = i ? c.cache : b,
					j = i ? b[h] : b[h] && h,
					p = a === "events";
				if (j && w[j] && (p || f || w[j].data) || !(d && g === e)) {
					j || (i ? b[h] = j = ++c.uuid : j = h);
					if (!w[j] && (w[j] = {}, !i)) w[j].toJSON = c.noop;
					if (typeof a === "object" || typeof a === "function") f ? w[j] = c.extend(w[j], a) : w[j].data = c.extend(w[j].data, a);
					h = b = w[j];
					if (!f) {
						if (!b.data) b.data = {};
						b = b.data
					}
					g !== e && (b[c.camelCase(a)] = g);
					if (p && !b[a]) return h.events;
					d ? (g = b[a], g == null && (g = b[c.camelCase(a)])) : g = b;
					return g
				}
			}
		},
		removeData: function(b, a, g) {
			if (c.acceptData(b)) {
				var f, h, d, e = c.expando,
					w = b.nodeType,
					i = w ? c.cache : b,
					j = w ? b[e] : e;
				if (i[j]) {
					if (a && (f = g ? i[j] : i[j].data)) {
						c.isArray(a) || (a in f ? a = [a] : (a = c.camelCase(a), a = a in f ? [a] : a.split(" ")));
						h = 0;
						for (d = a.length; h < d; h++) delete f[a[h]];
						if (!(g ? t : c.isEmptyObject)(f)) return
					}
					if (!g && (delete i[j].data, !t(i[j]))) return;
					c.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null;
					w && (c.support.deleteExpando ? delete b[e] : b.removeAttribute ? b.removeAttribute(e) : b[e] = null)
				}
			}
		},
		_data: function(b, a, g) {
			return c.data(b, a, g, !0)
		},
		acceptData: function(b) {
			if (b.nodeName) {
				var a = c.noData[b.nodeName.toLowerCase()];
				if (a) return !(a === !0 || b.getAttribute("classid") !== a)
			}
			return !0
		}
	});
	c.fn.extend({
		data: function(b, a) {
			var g, f, h, d, i, w = this[0],
				j = 0,
				p = null;
			if (b === e) {
				if (this.length && (p = c.data(w), w.nodeType === 1 && !c._data(w, "parsedAttrs"))) {
					h = w.attributes;
					for (i = h.length; j < i; j++) d = h[j].name, d.indexOf("data-") === 0 && (d = c.camelCase(d.substring(5)), E(w, d, p[d]));
					c._data(w, "parsedAttrs", !0)
				}
				return p
			}
			if (typeof b === "object") return this.each(function() {
				c.data(this, b)
			});
			g = b.split(".", 2);
			g[1] = g[1] ? "." + g[1] : "";
			f = g[1] + "!";
			return c.access(this, function(a) {
				if (a === e) return p = this.triggerHandler("getData" + f, [g[0]]), p === e && w && (p = c.data(w, b), p = E(w, b, p)), p === e && g[1] ? this.data(g[0]) : p;
				g[1] = a;
				this.each(function() {
					var m = c(this);
					m.triggerHandler("setData" + f, g);
					c.data(this, b, a);
					m.triggerHandler("changeData" + f, g)
				})
			}, null, a, arguments.length > 1, null, !1)
		},
		removeData: function(b) {
			return this.each(function() {
				c.removeData(this, b)
			})
		}
	});
	c.extend({
		_mark: function(b, a) {
			b && (a = (a || "fx") + "mark", c._data(b, a, (c._data(b, a) || 0) + 1))
		},
		_unmark: function(b, a, g) {
			b !== !0 && (g = a, a = b, b = !1);
			if (a) {
				var g = g || "fx",
					f = g + "mark";
				(b = b ? 0 : (c._data(a, f) || 1) - 1) ? c._data(a, f, b) : (c.removeData(a, f, !0), v(a, g, "mark"))
			}
		},
		queue: function(b, a, g) {
			var f;
			if (b) return a = (a || "fx") + "queue", f = c._data(b, a), g && (!f || c.isArray(g) ? f = c._data(b, a, c.makeArray(g)) : f.push(g)), f || []
		},
		dequeue: function(b, a) {
			var a = a || "fx",
				g = c.queue(b, a),
				f = g.shift(),
				h = {};
			f === "inprogress" && (f = g.shift());
			f && (a === "fx" && g.unshift("inprogress"), c._data(b, a + ".run", h), f.call(b, function() {
				c.dequeue(b, a)
			}, h));
			g.length || (c.removeData(b, a + "queue " + a + ".run", !0), v(b, a, "queue"))
		}
	});
	c.fn.extend({
		queue: function(b, a) {
			var g = 2;
			typeof b !== "string" && (a = b, b = "fx", g--);
			if (arguments.length < g) return c.queue(this[0], b);
			return a === e ? this : this.each(function() {
				var g = c.queue(this, b, a);
				b === "fx" && g[0] !== "inprogress" && c.dequeue(this, b)
			})
		},
		dequeue: function(b) {
			return this.each(function() {
				c.dequeue(this, b)
			})
		},
		delay: function(b, a) {
			b = c.fx ? c.fx.speeds[b] || b : b;
			return this.queue(a || "fx", function(c, a) {
				var m = setTimeout(c, b);
				a.stop = function() {
					clearTimeout(m)
				}
			})
		},
		clearQueue: function(b) {
			return this.queue(b || "fx", [])
		},
		promise: function(b, a) {
			function g() {
				--i || f.resolveWith(h, [h])
			}
			typeof b !== "string" && (a = b, b = e);
			for (var b = b || "fx", f = c.Deferred(), h = this, d = h.length, i = 1, w = b + "defer", j = b + "queue", p = b + "mark", k; d--;) if (k = c.data(h[d], w, e, !0) || (c.data(h[d], j, e, !0) || c.data(h[d], p, e, !0)) && c.data(h[d], w, c.Callbacks("once memory"), !0)) i++, k.add(g);
			g();
			return f.promise(a)
		}
	});
	var n = /[\n\t\r]/g,
		o = /\s+/,
		S = /\r/g,
		p = /^(?:button|input)$/i,
		r = /^(?:button|input|object|select|textarea)$/i,
		N = /^a(?:rea)?$/i,
		H = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		K = c.support.getSetAttribute,
		A, ia, pa;
	c.fn.extend({
		attr: function(b, a) {
			return c.access(this, c.attr, b, a, arguments.length > 1)
		},
		removeAttr: function(b) {
			return this.each(function() {
				c.removeAttr(this, b)
			})
		},
		prop: function(b, a) {
			return c.access(this, c.prop, b, a, arguments.length > 1)
		},
		removeProp: function(b) {
			b = c.propFix[b] || b;
			return this.each(function() {
				try {
					this[b] = e, delete this[b]
				} catch (c) {}
			})
		},
		addClass: function(b) {
			var a, g, f, h, d, e, i;
			if (c.isFunction(b)) return this.each(function(a) {
				c(this).addClass(b.call(this, a, this.className))
			});
			if (b && typeof b === "string") {
				a = b.split(o);
				g = 0;
				for (f = this.length; g < f; g++) if (h = this[g], h.nodeType === 1) if (!h.className && a.length === 1) h.className = b;
				else {
					d = " " + h.className + " ";
					e = 0;
					for (i = a.length; e < i; e++)~d.indexOf(" " + a[e] + " ") || (d += a[e] + " ");
					h.className = c.trim(d)
				}
			}
			return this
		},
		removeClass: function(b) {
			var a, g, f, h, d, i, w;
			if (c.isFunction(b)) return this.each(function(a) {
				c(this).removeClass(b.call(this, a, this.className))
			});
			if (b && typeof b === "string" || b === e) {
				a = (b || "").split(o);
				g = 0;
				for (f = this.length; g < f; g++) if (h = this[g], h.nodeType === 1 && h.className) if (b) {
					d = (" " + h.className + " ").replace(n, " ");
					i = 0;
					for (w = a.length; i < w; i++) d = d.replace(" " + a[i] + " ", " ");
					h.className = c.trim(d)
				} else h.className = ""
			}
			return this
		},
		toggleClass: function(b, a) {
			var g = typeof b,
				f = typeof a === "boolean";
			if (c.isFunction(b)) return this.each(function(g) {
				c(this).toggleClass(b.call(this, g, this.className, a), a)
			});
			return this.each(function() {
				if (g === "string") for (var h, d = 0, e = c(this), i = a, j = b.split(o); h = j[d++];) i = f ? i : !e.hasClass(h), e[i ? "addClass" : "removeClass"](h);
				else if (g === "undefined" || g === "boolean") this.className && c._data(this, "__className__", this.className), this.className = this.className || b === !1 ? "" : c._data(this, "__className__") || ""
			})
		},
		hasClass: function(b) {
			for (var b = " " + b + " ", c = 0, a = this.length; c < a; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(b) {
			var a, g, f, h = this[0];
			if (arguments.length) return f = c.isFunction(b), this.each(function(g) {
				var h = c(this);
				if (this.nodeType === 1 && (g = f ? b.call(this, g, h.val()) : b, g == null ? g = "" : typeof g === "number" ? g += "" : c.isArray(g) && (g = c.map(g, function(b) {
					return b == null ? "" : b + ""
				})), a = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], !a || !("set" in a) || a.set(this, g, "value") === e)) this.value = g
			});
			else if (h) {
				if ((a = c.valHooks[h.type] || c.valHooks[h.nodeName.toLowerCase()]) && "get" in a && (g = a.get(h, "value")) !== e) return g;
				g = h.value;
				return typeof g === "string" ? g.replace(S, "") : g == null ? "" : g
			}
		}
	});
	c.extend({
		valHooks: {
			option: {
				get: function(b) {
					var c = b.attributes.value;
					return !c || c.specified ? b.value : b.text
				}
			},
			select: {
				get: function(b) {
					var a, g, f = b.selectedIndex,
						h = [],
						d = b.options,
						e = b.type === "select-one";
					if (f < 0) return null;
					b = e ? f : 0;
					for (g = e ? f + 1 : d.length; b < g; b++) if (a = d[b], a.selected && (c.support.optDisabled ? !a.disabled : a.getAttribute("disabled") === null) && (!a.parentNode.disabled || !c.nodeName(a.parentNode, "optgroup"))) {
						a = c(a).val();
						if (e) return a;
						h.push(a)
					}
					if (e && !h.length && d.length) return c(d[f]).val();
					return h
				},
				set: function(b, a) {
					var g = c.makeArray(a);
					c(b).find("option").each(function() {
						this.selected = c.inArray(c(this).val(), g) >= 0
					});
					if (!g.length) b.selectedIndex = -1;
					return g
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(b, a, g, f) {
			var h, d, i = b.nodeType;
			if (b && !(i === 3 || i === 8 || i === 2)) {
				if (f && a in c.attrFn) return c(b)[a](g);
				if (typeof b.getAttribute === "undefined") return c.prop(b, a, g);
				if (f = i !== 1 || !c.isXMLDoc(b)) a = a.toLowerCase(), d = c.attrHooks[a] || (H.test(a) ? ia : A);
				if (g !== e) if (g === null) c.removeAttr(b, a);
				else return d && "set" in d && f && (h = d.set(b, g, a)) !== e ? h : (b.setAttribute(a, "" + g), g);
				else return d && "get" in d && f && (h = d.get(b, a)) !== null ? h : (h = b.getAttribute(a), h === null ? e : h)
			}
		},
		removeAttr: function(b, a) {
			var g, f, h, d, e, i = 0;
			if (a && b.nodeType === 1) {
				f = a.toLowerCase().split(o);
				for (d = f.length; i < d; i++) if (h = f[i]) g = c.propFix[h] || h, (e = H.test(h)) || c.attr(b, h, ""), b.removeAttribute(K ? h : g), e && g in b && (b[g] = !1)
			}
		},
		attrHooks: {
			type: {
				set: function(b, a) {
					if (p.test(b.nodeName) && b.parentNode) c.error("type property can't be changed");
					else if (!c.support.radioValue && a === "radio" && c.nodeName(b, "input")) {
						var g = b.value;
						b.setAttribute("type", a);
						if (g) b.value = g;
						return a
					}
				}
			},
			value: {
				get: function(b, a) {
					if (A && c.nodeName(b, "button")) return A.get(b, a);
					return a in b ? b.value : null
				},
				set: function(b, a, g) {
					if (A && c.nodeName(b, "button")) return A.set(b, a, g);
					b.value = a
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(b, a, g) {
			var f, h, d = b.nodeType;
			if (b && !(d === 3 || d === 8 || d === 2)) {
				if (d !== 1 || !c.isXMLDoc(b)) a = c.propFix[a] || a, h = c.propHooks[a];
				return g !== e ? h && "set" in h && (f = h.set(b, g, a)) !== e ? f : b[a] = g : h && "get" in h && (f = h.get(b, a)) !== null ? f : b[a]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(b) {
					var c = b.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : r.test(b.nodeName) || N.test(b.nodeName) && b.href ? 0 : e
				}
			}
		}
	});
	c.attrHooks.tabindex = c.propHooks.tabIndex;
	ia = {
		get: function(b, a) {
			var g, f = c.prop(b, a);
			return f === !0 || typeof f !== "boolean" && (g = b.getAttributeNode(a)) && g.nodeValue !== !1 ? a.toLowerCase() : e
		},
		set: function(b, a, g) {
			a === !1 ? c.removeAttr(b, g) : (a = c.propFix[g] || g, a in b && (b[a] = !0), b.setAttribute(g, g.toLowerCase()));
			return g
		}
	};
	if (!K) pa = {
		name: !0,
		id: !0,
		coords: !0
	}, A = c.valHooks.button = {
		get: function(b, c) {
			var a;
			return (a = b.getAttributeNode(c)) && (pa[c] ? a.nodeValue !== "" : a.specified) ? a.nodeValue : e
		},
		set: function(b, c, a) {
			var f = b.getAttributeNode(a);
			f || (f = k.createAttribute(a), b.setAttributeNode(f));
			return f.nodeValue = c + ""
		}
	}, c.attrHooks.tabindex.set = A.set, c.each(["width", "height"], function(b, a) {
		c.attrHooks[a] = c.extend(c.attrHooks[a], {
			set: function(b, c) {
				if (c === "") return b.setAttribute(a, "auto"), c
			}
		})
	}), c.attrHooks.contenteditable = {
		get: A.get,
		set: function(b, c, a) {
			c === "" && (c = "false");
			A.set(b, c, a)
		}
	};
	c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(b, a) {
		c.attrHooks[a] = c.extend(c.attrHooks[a], {
			get: function(b) {
				b = b.getAttribute(a, 2);
				return b === null ? e : b
			}
		})
	});
	if (!c.support.style) c.attrHooks.style = {
		get: function(b) {
			return b.style.cssText.toLowerCase() || e
		},
		set: function(b, c) {
			return b.style.cssText = "" + c
		}
	};
	if (!c.support.optSelected) c.propHooks.selected = c.extend(c.propHooks.selected, {
		get: function() {
			return null
		}
	});
	if (!c.support.enctype) c.propFix.enctype = "encoding";
	c.support.checkOn || c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = {
			get: function(b) {
				return b.getAttribute("value") === null ? "on" : b.value
			}
		}
	});
	c.each(["radio", "checkbox"], function() {
		c.valHooks[this] = c.extend(c.valHooks[this], {
			set: function(b, a) {
				if (c.isArray(a)) return b.checked = c.inArray(c(b).val(), a) >= 0
			}
		})
	});
	var $ = /^(?:textarea|input|select)$/i,
		Fa = /^([^\.]*)?(?:\.(.+))?$/,
		ba = /(?:^|\s)hover(\.\S+)?\b/,
		ab = /^key/,
		bb = /^(?:mouse|contextmenu)|click/,
		Ga = /^(?:focusinfocus|focusoutblur)$/,
		cb = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		db = function(b) {
			if (b = cb.exec(b)) b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)");
			return b
		},
		Ha = function(b) {
			return c.event.special.hover ? b : b.replace(ba, "mouseenter$1 mouseleave$1")
		};
	c.event = {
		add: function(b, a, g, f, h) {
			var d, i, j, p, k, s, r, n, u;
			if (!(b.nodeType === 3 || b.nodeType === 8 || !a || !g || !(d = c._data(b)))) {
				if (g.handler) r = g, g = r.handler, h = r.selector;
				if (!g.guid) g.guid = c.guid++;
				j = d.events;
				if (!j) d.events = j = {};
				i = d.handle;
				if (!i) d.handle = i = function(b) {
					return typeof c !== "undefined" && (!b || c.event.triggered !== b.type) ? c.event.dispatch.apply(i.elem, arguments) : e
				}, i.elem = b;
				a = c.trim(Ha(a)).split(" ");
				for (d = 0; d < a.length; d++) {
					p = Fa.exec(a[d]) || [];
					k = p[1];
					s = (p[2] || "").split(".").sort();
					u = c.event.special[k] || {};
					k = (h ? u.delegateType : u.bindType) || k;
					u = c.event.special[k] || {};
					p = c.extend({
						type: k,
						origType: p[1],
						data: f,
						handler: g,
						guid: g.guid,
						selector: h,
						quick: h && db(h),
						namespace: s.join(".")
					}, r);
					n = j[k];
					if (!n && (n = j[k] = [], n.delegateCount = 0, !u.setup || u.setup.call(b, f, s, i) === !1)) b.addEventListener ? b.addEventListener(k, i, !1) : b.attachEvent && b.attachEvent("on" + k, i);
					if (u.add && (u.add.call(b, p), !p.handler.guid)) p.handler.guid = g.guid;
					h ? n.splice(n.delegateCount++, 0, p) : n.push(p);
					c.event.global[k] = !0
				}
				b = null
			}
		},
		global: {},
		remove: function(b, a, g, f, h) {
			var d = c.hasData(b) && c._data(b),
				e, i, j, p, k, s, r, u, n, o;
			if (d && (r = d.events)) {
				a = c.trim(Ha(a || "")).split(" ");
				for (e = 0; e < a.length; e++) if (i = Fa.exec(a[e]) || [], j = p = i[1], i = i[2], j) {
					u = c.event.special[j] || {};
					j = (f ? u.delegateType : u.bindType) || j;
					n = r[j] || [];
					k = n.length;
					i = i ? RegExp("(^|\\.)" + i.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
					for (s = 0; s < n.length; s++) if (o = n[s], (h || p === o.origType) && (!g || g.guid === o.guid) && (!i || i.test(o.namespace)) && (!f || f === o.selector || f === "**" && o.selector)) n.splice(s--, 1), o.selector && n.delegateCount--, u.remove && u.remove.call(b, o);
					n.length === 0 && k !== n.length && ((!u.teardown || u.teardown.call(b, i) === !1) && c.removeEvent(b, j, d.handle), delete r[j])
				} else for (j in r) c.event.remove(b, j + a[e], g, f, !0);
				if (c.isEmptyObject(r)) {
					if (a = d.handle) a.elem = null;
					c.removeData(b, ["events", "handle"], !0)
				}
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(b, a, g, f) {
			if (!g || !(g.nodeType === 3 || g.nodeType === 8)) {
				var h = b.type || b,
					i = [],
					j, p, k, s, r;
				if (!Ga.test(h + c.event.triggered) && (h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort()), g && !c.event.customEvent[h] || c.event.global[h])) if (b = typeof b === "object" ? b[c.expando] ? b : new c.Event(h, b) : new c.Event(h), b.type = h, b.isTrigger = !0, b.exclusive = j, b.namespace = i.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, j = h.indexOf(":") < 0 ? "on" + h : "", g) {
					b.result = e;
					if (!b.target) b.target = g;
					a = a != null ? c.makeArray(a) : [];
					a.unshift(b);
					k = c.event.special[h] || {};
					if (!(k.trigger && k.trigger.apply(g, a) === !1)) {
						r = [
							[g, k.bindType || h]
						];
						if (!f && !k.noBubble && !c.isWindow(g)) {
							s = k.delegateType || h;
							i = Ga.test(s + h) ? g : g.parentNode;
							for (p = null; i; i = i.parentNode) r.push([i, s]), p = i;
							p && p === g.ownerDocument && r.push([p.defaultView || p.parentWindow || d, s])
						}
						for (p = 0; p < r.length && !b.isPropagationStopped(); p++) i = r[p][0], b.type = r[p][1], (s = (c._data(i, "events") || {})[b.type] && c._data(i, "handle")) && s.apply(i, a), (s = j && i[j]) && c.acceptData(i) && s.apply(i, a) === !1 && b.preventDefault();
						b.type = h;
						if (!f && !b.isDefaultPrevented() && (!k._default || k._default.apply(g.ownerDocument, a) === !1) && !(h === "click" && c.nodeName(g, "a")) && c.acceptData(g)) if (j && g[h] && (h !== "focus" && h !== "blur" || b.target.offsetWidth !== 0) && !c.isWindow(g))(p = g[j]) && (g[j] = null), c.event.triggered = h, g[h](), c.event.triggered = e, p && (g[j] = p);
						return b.result
					}
				} else for (p in g = c.cache, g) g[p].events && g[p].events[h] && c.event.trigger(b, a, g[p].handle.elem, !0)
			}
		},
		dispatch: function(b) {
			var b = c.event.fix(b || d.event),
				a = (c._data(this, "events") || {})[b.type] || [],
				g = a.delegateCount,
				f = [].slice.call(arguments, 0),
				h = !b.exclusive && !b.namespace,
				i = c.event.special[b.type] || {},
				j = [],
				p, k, s, r, n, u, o;
			f[0] = b;
			b.delegateTarget = this;
			if (!(i.preDispatch && i.preDispatch.call(this, b) === !1)) {
				if (g && !(b.button && b.type === "click")) {
					s = c(this);
					s.context = this.ownerDocument || this;
					for (k = b.target; k != this; k = k.parentNode || this) if (k.disabled !== !0) {
						n = {};
						u = [];
						s[0] = k;
						for (p = 0; p < g; p++) {
							r = a[p];
							o = r.selector;
							if (n[o] === e) {
								var l = n,
									N = o,
									H;
								if (r.quick) {
									H = r.quick;
									var K = k.attributes || {};
									H = (!H[1] || k.nodeName.toLowerCase() === H[1]) && (!H[2] || (K.id || {}).value === H[2]) && (!H[3] || H[3].test((K["class"] || {}).value))
								} else H = s.is(o);
								l[N] = H
							}
							n[o] && u.push(r)
						}
						u.length && j.push({
							elem: k,
							matches: u
						})
					}
				}
				a.length > g && j.push({
					elem: this,
					matches: a.slice(g)
				});
				for (p = 0; p < j.length && !b.isPropagationStopped(); p++) {
					g = j[p];
					b.currentTarget = g.elem;
					for (a = 0; a < g.matches.length && !b.isImmediatePropagationStopped(); a++) if (r = g.matches[a], h || !b.namespace && !r.namespace || b.namespace_re && b.namespace_re.test(r.namespace)) if (b.data = r.data, b.handleObj = r, r = ((c.event.special[r.origType] || {}).handle || r.handler).apply(g.elem, f), r !== e) b.result = r, r === !1 && (b.preventDefault(), b.stopPropagation())
				}
				i.postDispatch && i.postDispatch.call(this, b);
				return b.result
			}
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(b, c) {
				if (b.which == null) b.which = c.charCode != null ? c.charCode : c.keyCode;
				return b
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(b, c) {
				var a, f, h = c.button,
					d = c.fromElement;
				if (b.pageX == null && c.clientX != null) a = b.target.ownerDocument || k, f = a.documentElement, a = a.body, b.pageX = c.clientX + (f && f.scrollLeft || a && a.scrollLeft || 0) - (f && f.clientLeft || a && a.clientLeft || 0), b.pageY = c.clientY + (f && f.scrollTop || a && a.scrollTop || 0) - (f && f.clientTop || a && a.clientTop || 0);
				if (!b.relatedTarget && d) b.relatedTarget = d === b.target ? c.toElement : d;
				if (!b.which && h !== e) b.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0;
				return b
			}
		},
		fix: function(b) {
			if (b[c.expando]) return b;
			var a, g, f = b,
				h = c.event.fixHooks[b.type] || {},
				d = h.props ? this.props.concat(h.props) : this.props,
				b = c.Event(f);
			for (a = d.length; a;) g = d[--a], b[g] = f[g];
			if (!b.target) b.target = f.srcElement || k;
			if (b.target.nodeType === 3) b.target = b.target.parentNode;
			if (b.metaKey === e) b.metaKey = b.ctrlKey;
			return h.filter ? h.filter(b, f) : b
		},
		special: {
			ready: {
				setup: c.bindReady
			},
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(b, a, g) {
					if (c.isWindow(this)) this.onbeforeunload = g
				},
				teardown: function(b, c) {
					if (this.onbeforeunload === c) this.onbeforeunload = null
				}
			}
		},
		simulate: function(b, a, g, f) {
			b = c.extend(new c.Event, g, {
				type: b,
				isSimulated: !0,
				originalEvent: {}
			});
			f ? c.event.trigger(b, null, a) : c.event.dispatch.call(a, b);
			b.isDefaultPrevented() && g.preventDefault()
		}
	};
	c.event.handle = c.event.dispatch;
	c.removeEvent = k.removeEventListener ?
	function(b, c, a) {
		b.removeEventListener && b.removeEventListener(c, a, !1)
	} : function(b, c, a) {
		b.detachEvent && b.detachEvent("on" + c, a)
	};
	c.Event = function(b, a) {
		if (!(this instanceof c.Event)) return new c.Event(b, a);
		b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === !1 || b.getPreventDefault && b.getPreventDefault() ? F : q) : this.type = b;
		a && c.extend(this, a);
		this.timeStamp = b && b.timeStamp || c.now();
		this[c.expando] = !0
	};
	c.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = F;
			var b = this.originalEvent;
			if (b) b.preventDefault ? b.preventDefault() : b.returnValue = !1
		},
		stopPropagation: function() {
			this.isPropagationStopped = F;
			var b = this.originalEvent;
			if (b) b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = F;
			this.stopPropagation()
		},
		isDefaultPrevented: q,
		isPropagationStopped: q,
		isImmediatePropagationStopped: q
	};
	c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(b, a) {
		c.event.special[b] = {
			delegateType: a,
			bindType: a,
			handle: function(b) {
				var f = b.relatedTarget,
					h = b.handleObj,
					d;
				if (!f || f !== this && !c.contains(this, f)) b.type = h.origType, d = h.handler.apply(this, arguments), b.type = a;
				return d
			}
		}
	});
	if (!c.support.submitBubbles) c.event.special.submit = {
		setup: function() {
			if (c.nodeName(this, "form")) return !1;
			c.event.add(this, "click._submit keypress._submit", function(b) {
				b = b.target;
				if ((b = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.form : e) && !b._submit_attached) c.event.add(b, "submit._submit", function(b) {
					b._submit_bubble = !0
				}), b._submit_attached = !0
			})
		},
		postDispatch: function(b) {
			b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && c.event.simulate("submit", this.parentNode, b, !0))
		},
		teardown: function() {
			if (c.nodeName(this, "form")) return !1;
			c.event.remove(this, "._submit")
		}
	};
	if (!c.support.changeBubbles) c.event.special.change = {
		setup: function() {
			if ($.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") c.event.add(this, "propertychange._change", function(b) {
					if (b.originalEvent.propertyName === "checked") this._just_changed = !0
				}), c.event.add(this, "click._change", function(b) {
					if (this._just_changed && !b.isTrigger) this._just_changed = !1, c.event.simulate("change", this, b, !0)
				});
				return !1
			}
			c.event.add(this, "beforeactivate._change", function(b) {
				b = b.target;
				if ($.test(b.nodeName) && !b._change_attached) c.event.add(b, "change._change", function(b) {
					this.parentNode && !b.isSimulated && !b.isTrigger && c.event.simulate("change", this.parentNode, b, !0)
				}), b._change_attached = !0
			})
		},
		handle: function(b) {
			var c = b.target;
			if (this !== c || b.isSimulated || b.isTrigger || c.type !== "radio" && c.type !== "checkbox") return b.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			c.event.remove(this, "._change");
			return $.test(this.nodeName)
		}
	};
	c.support.focusinBubbles || c.each({
		focus: "focusin",
		blur: "focusout"
	}, function(b, a) {
		var g = 0,
			f = function(b) {
				c.event.simulate(a, b.target, c.event.fix(b), !0)
			};
		c.event.special[a] = {
			setup: function() {
				g++ === 0 && k.addEventListener(b, f, !0)
			},
			teardown: function() {
				--g === 0 && k.removeEventListener(b, f, !0)
			}
		}
	});
	c.fn.extend({
		on: function(b, a, g, f, h) {
			var d, i;
			if (typeof b === "object") {
				typeof a !== "string" && (g = g || a, a = e);
				for (i in b) this.on(i, a, g, b[i], h);
				return this
			}
			g == null && f == null ? (f = a, g = a = e) : f == null && (typeof a === "string" ? (f = g, g = e) : (f = g, g = a, a = e));
			if (f === !1) f = q;
			else if (!f) return this;
			if (h === 1) d = f, f = function(b) {
				c().off(b);
				return d.apply(this, arguments)
			}, f.guid = d.guid || (d.guid = c.guid++);
			return this.each(function() {
				c.event.add(this, b, f, g, a)
			})
		},
		one: function(b, c, a, f) {
			return this.on(b, c, a, f, 1)
		},
		off: function(b, a, g) {
			if (b && b.preventDefault && b.handleObj) {
				var f = b.handleObj;
				c(b.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler);
				return this
			}
			if (typeof b === "object") {
				for (f in b) this.off(f, a, b[f]);
				return this
			}
			if (a === !1 || typeof a === "function") g = a, a = e;
			g === !1 && (g = q);
			return this.each(function() {
				c.event.remove(this, b, g, a)
			})
		},
		bind: function(b, c, a) {
			return this.on(b, null, c, a)
		},
		unbind: function(b, c) {
			return this.off(b, null, c)
		},
		live: function(b, a, g) {
			c(this.context).on(b, this.selector, a, g);
			return this
		},
		die: function(b, a) {
			c(this.context).off(b, this.selector || "**", a);
			return this
		},
		delegate: function(b, c, a, f) {
			return this.on(c, b, a, f)
		},
		undelegate: function(b, c, a) {
			return arguments.length == 1 ? this.off(b, "**") : this.off(c, b, a)
		},
		trigger: function(b, a) {
			return this.each(function() {
				c.event.trigger(b, a, this)
			})
		},
		triggerHandler: function(b, a) {
			if (this[0]) return c.event.trigger(b, a, this[0], !0)
		},
		toggle: function(b) {
			var a = arguments,
				g = b.guid || c.guid++,
				f = 0,
				h = function(g) {
					var h = (c._data(this, "lastToggle" + b.guid) || 0) % f;
					c._data(this, "lastToggle" + b.guid, h + 1);
					g.preventDefault();
					return a[h].apply(this, arguments) || !1
				};
			for (h.guid = g; f < a.length;) a[f++].guid = g;
			return this.click(h)
		},
		hover: function(b, c) {
			return this.mouseenter(b).mouseleave(c || b)
		}
	});
	c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, a) {
		c.fn[a] = function(b, c) {
			c == null && (c = b, b = null);
			return arguments.length > 0 ? this.on(a, null, b, c) : this.trigger(a)
		};
		c.attrFn && (c.attrFn[a] = !0);
		if (ab.test(a)) c.event.fixHooks[a] = c.event.keyHooks;
		if (bb.test(a)) c.event.fixHooks[a] = c.event.mouseHooks
	});
	(function() {
		function b(b, c, a, g, m, h) {
			for (var m = 0, d = g.length; m < d; m++) {
				var i = g[m];
				if (i) {
					for (var e = !1, i = i[b]; i;) {
						if (i[f] === a) {
							e = g[i.sizset];
							break
						}
						if (i.nodeType === 1 && !h) i[f] = a, i.sizset = m;
						if (i.nodeName.toLowerCase() === c) {
							e = i;
							break
						}
						i = i[b]
					}
					g[m] = e
				}
			}
		}
		function a(b, c, g, m, h, d) {
			for (var h = 0, i = m.length; h < i; h++) {
				var e = m[h];
				if (e) {
					for (var j = !1, e = e[b]; e;) {
						if (e[f] === g) {
							j = m[e.sizset];
							break
						}
						if (e.nodeType === 1) {
							if (!d) e[f] = g, e.sizset = h;
							if (typeof c !== "string") {
								if (e === c) {
									j = !0;
									break
								}
							} else if (n.filter(c, [e]).length > 0) {
								j = e;
								break
							}
						}
						e = e[b]
					}
					m[h] = j
				}
			}
		}
		var g = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			f = "sizcache" + (Math.random() + "").replace(".", ""),
			h = 0,
			d = Object.prototype.toString,
			i = !1,
			j = !0,
			p = /\\/g,
			s = /\r\n/g,
			r = /\W/;
		[0, 0].sort(function() {
			j = !1;
			return 0
		});
		var n = function(b, c, a, f) {
				var a = a || [],
					m = c = c || k;
				if (c.nodeType !== 1 && c.nodeType !== 9) return [];
				if (!b || typeof b !== "string") return a;
				var h, i, e, j, p, w = !0,
					s = n.isXML(c),
					r = [],
					u = b;
				do
				if (g.exec(""), h = g.exec(u)) if (u = h[3], r.push(h[1]), h[2]) {
					j = h[3];
					break
				}
				while (h);
				if (r.length > 1 && l.exec(b)) if (r.length === 2 && o.relative[r[0]]) i = v(r[0] + r[1], c, f);
				else for (i = o.relative[r[0]] ? [c] : n(r.shift(), c); r.length;) b = r.shift(), o.relative[b] && (b += r.shift()), i = v(b, i, f);
				else if (!f && r.length > 1 && c.nodeType === 9 && !s && o.match.ID.test(r[0]) && !o.match.ID.test(r[r.length - 1]) && (h = n.find(r.shift(), c, s), c = h.expr ? n.filter(h.expr, h.set)[0] : h.set[0]), c) {
					h = f ? {
						expr: r.pop(),
						set: K(f)
					} : n.find(r.pop(), r.length === 1 && (r[0] === "~" || r[0] === "+") && c.parentNode ? c.parentNode : c, s);
					i = h.expr ? n.filter(h.expr, h.set) : h.set;
					for (r.length > 0 ? e = K(i) : w = !1; r.length;) h = p = r.pop(), o.relative[p] ? h = r.pop() : p = "", h == null && (h = c), o.relative[p](e, h, s)
				} else e = [];
				e || (e = i);
				e || n.error(p || b);
				if (d.call(e) === "[object Array]") if (w) if (c && c.nodeType === 1) for (b = 0; e[b] != null; b++) e[b] && (e[b] === !0 || e[b].nodeType === 1 && n.contains(c, e[b])) && a.push(i[b]);
				else for (b = 0; e[b] != null; b++) e[b] && e[b].nodeType === 1 && a.push(i[b]);
				else a.push.apply(a, e);
				else K(e, a);
				j && (n(j, m, a, f), n.uniqueSort(a));
				return a
			};
		n.uniqueSort = function(b) {
			if (A && (i = j, b.sort(A), i)) for (var c = 1; c < b.length; c++) b[c] === b[c - 1] && b.splice(c--, 1);
			return b
		};
		n.matches = function(b, c) {
			return n(b, null, null, c)
		};
		n.matchesSelector = function(b, c) {
			return n(c, null, null, [b]).length > 0
		};
		n.find = function(b, c, a) {
			var f, g, h, m, d, i;
			if (!b) return [];
			g = 0;
			for (h = o.order.length; g < h; g++) if (d = o.order[g], m = o.leftMatch[d].exec(b)) if (i = m[1], m.splice(1, 1), i.substr(i.length - 1) !== "\\" && (m[1] = (m[1] || "").replace(p, ""), f = o.find[d](m, c, a), f != null)) {
				b = b.replace(o.match[d], "");
				break
			}
			f || (f = typeof c.getElementsByTagName !== "undefined" ? c.getElementsByTagName("*") : []);
			return {
				set: f,
				expr: b
			}
		};
		n.filter = function(b, c, a, f) {
			for (var g, h, m, d, i, j, p, k, r = b, B = [], w = c, s = c && c[0] && n.isXML(c[0]); b && c.length;) {
				for (m in o.filter) if ((g = o.leftMatch[m].exec(b)) != null && g[2]) if (j = o.filter[m], i = g[1], h = !1, g.splice(1, 1), i.substr(i.length - 1) !== "\\") {
					w === B && (B = []);
					if (o.preFilter[m]) if (g = o.preFilter[m](g, w, a, B, f, s)) {
						if (g === !0) continue
					} else h = d = !0;
					if (g) for (p = 0;
					(i = w[p]) != null; p++) i && (d = j(i, g, p, w), k = f ^ d, a && d != null ? k ? h = !0 : w[p] = !1 : k && (B.push(i), h = !0));
					if (d !== e) {
						a || (w = B);
						b = b.replace(o.match[m], "");
						if (!h) return [];
						break
					}
				}
				if (b === r) if (h == null) n.error(b);
				else break;
				r = b
			}
			return w
		};
		n.error = function(b) {
			throw Error("Syntax error, unrecognized expression: " + b);
		};
		var u = n.getText = function(b) {
				var c, a;
				c = b.nodeType;
				var f = "";
				if (c) if (c === 1 || c === 9 || c === 11) if (typeof b.textContent === "string") return b.textContent;
				else if (typeof b.innerText === "string") return b.innerText.replace(s, "");
				else for (b = b.firstChild; b; b = b.nextSibling) f += u(b);
				else {
					if (c === 3 || c === 4) return b.nodeValue
				} else for (c = 0; a = b[c]; c++) a.nodeType !== 8 && (f += u(a));
				return f
			},
			o = n.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(b) {
						return b.getAttribute("href")
					},
					type: function(b) {
						return b.getAttribute("type")
					}
				},
				relative: {
					"+": function(b, c) {
						var a = typeof c === "string",
							f = a && !r.test(c),
							a = a && !f;
						f && (c = c.toLowerCase());
						for (var f = 0, g = b.length, h; f < g; f++) if (h = b[f]) {
							for (;
							(h = h.previousSibling) && h.nodeType !== 1;);
							b[f] = a || h && h.nodeName.toLowerCase() === c ? h || !1 : h === c
						}
						a && n.filter(c, b, !0)
					},
					">": function(b, c) {
						var a, f = typeof c === "string",
							g = 0,
							h = b.length;
						if (f && !r.test(c)) for (c = c.toLowerCase(); g < h; g++) {
							if (a = b[g]) a = a.parentNode, b[g] = a.nodeName.toLowerCase() === c ? a : !1
						} else {
							for (; g < h; g++)(a = b[g]) && (b[g] = f ? a.parentNode : a.parentNode === c);
							f && n.filter(c, b, !0)
						}
					},
					"": function(c, f, g) {
						var d, i = h++,
							e = a;
						typeof f === "string" && !r.test(f) && (d = f = f.toLowerCase(), e = b);
						e("parentNode", f, i, c, d, g)
					},
					"~": function(c, f, g) {
						var d, i = h++,
							e = a;
						typeof f === "string" && !r.test(f) && (d = f = f.toLowerCase(), e = b);
						e("previousSibling", f, i, c, d, g)
					}
				},
				find: {
					ID: function(b, c, a) {
						if (typeof c.getElementById !== "undefined" && !a) return (b = c.getElementById(b[1])) && b.parentNode ? [b] : []
					},
					NAME: function(b, c) {
						if (typeof c.getElementsByName !== "undefined") {
							for (var a = [], f = c.getElementsByName(b[1]), g = 0, h = f.length; g < h; g++) f[g].getAttribute("name") === b[1] && a.push(f[g]);
							return a.length === 0 ? null : a
						}
					},
					TAG: function(b, c) {
						if (typeof c.getElementsByTagName !== "undefined") return c.getElementsByTagName(b[1])
					}
				},
				preFilter: {
					CLASS: function(b, c, a, f, g, h) {
						b = " " + b[1].replace(p, "") + " ";
						if (h) return b;
						for (var h = 0, m;
						(m = c[h]) != null; h++) m && (g ^ (m.className && (" " + m.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b) >= 0) ? a || f.push(m) : a && (c[h] = !1));
						return !1
					},
					ID: function(b) {
						return b[1].replace(p, "")
					},
					TAG: function(b) {
						return b[1].replace(p, "").toLowerCase()
					},
					CHILD: function(b) {
						if (b[1] === "nth") {
							b[2] || n.error(b[0]);
							b[2] = b[2].replace(/^\+|\s*/g, "");
							var c = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2] === "even" && "2n" || b[2] === "odd" && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
							b[2] = c[1] + (c[2] || 1) - 0;
							b[3] = c[3] - 0
						} else b[2] && n.error(b[0]);
						b[0] = h++;
						return b
					},
					ATTR: function(b, c, a, f, g, h) {
						c = b[1] = b[1].replace(p, "");
						!h && o.attrMap[c] && (b[1] = o.attrMap[c]);
						b[4] = (b[4] || b[5] || "").replace(p, "");
						b[2] === "~=" && (b[4] = " " + b[4] + " ");
						return b
					},
					PSEUDO: function(b, c, a, f, h) {
						if (b[1] === "not") if ((g.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = n(b[3], null, null, c);
						else return b = n.filter(b[3], c, a, 1 ^ h), a || f.push.apply(f, b), !1;
						else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
						return b
					},
					POS: function(b) {
						b.unshift(!0);
						return b
					}
				},
				filters: {
					enabled: function(b) {
						return b.disabled === !1 && b.type !== "hidden"
					},
					disabled: function(b) {
						return b.disabled === !0
					},
					checked: function(b) {
						return b.checked === !0
					},
					selected: function(b) {
						return b.selected === !0
					},
					parent: function(b) {
						return !!b.firstChild
					},
					empty: function(b) {
						return !b.firstChild
					},
					has: function(b, c, a) {
						return !!n(a[3], b).length
					},
					header: function(b) {
						return /h\d/i.test(b.nodeName)
					},
					text: function(b) {
						var c = b.getAttribute("type"),
							a = b.type;
						return b.nodeName.toLowerCase() === "input" && "text" === a && (c === a || c === null)
					},
					radio: function(b) {
						return b.nodeName.toLowerCase() === "input" && "radio" === b.type
					},
					checkbox: function(b) {
						return b.nodeName.toLowerCase() === "input" && "checkbox" === b.type
					},
					file: function(b) {
						return b.nodeName.toLowerCase() === "input" && "file" === b.type
					},
					password: function(b) {
						return b.nodeName.toLowerCase() === "input" && "password" === b.type
					},
					submit: function(b) {
						var c = b.nodeName.toLowerCase();
						return (c === "input" || c === "button") && "submit" === b.type
					},
					image: function(b) {
						return b.nodeName.toLowerCase() === "input" && "image" === b.type
					},
					reset: function(b) {
						var c = b.nodeName.toLowerCase();
						return (c === "input" || c === "button") && "reset" === b.type
					},
					button: function(b) {
						var c = b.nodeName.toLowerCase();
						return c === "input" && "button" === b.type || c === "button"
					},
					input: function(b) {
						return /input|select|textarea|button/i.test(b.nodeName)
					},
					focus: function(b) {
						return b === b.ownerDocument.activeElement
					}
				},
				setFilters: {
					first: function(b, c) {
						return c === 0
					},
					last: function(b, c, a, f) {
						return c === f.length - 1
					},
					even: function(b, c) {
						return c % 2 === 0
					},
					odd: function(b, c) {
						return c % 2 === 1
					},
					lt: function(b, c, a) {
						return c < a[3] - 0
					},
					gt: function(b, c, a) {
						return c > a[3] - 0
					},
					nth: function(b, c, a) {
						return a[3] - 0 === c
					},
					eq: function(b, c, a) {
						return a[3] - 0 === c
					}
				},
				filter: {
					PSEUDO: function(b, c, a, f) {
						var g = c[1],
							h = o.filters[g];
						if (h) return h(b, a, c, f);
						else if (g === "contains") return (b.textContent || b.innerText || u([b]) || "").indexOf(c[3]) >= 0;
						else if (g === "not") {
							c = c[3];
							a = 0;
							for (f = c.length; a < f; a++) if (c[a] === b) return !1;
							return !0
						} else n.error(g)
					},
					CHILD: function(b, c) {
						var a, g, h, m, d, i;
						a = c[1];
						i = b;
						switch (a) {
						case "only":
						case "first":
							for (; i = i.previousSibling;) if (i.nodeType === 1) return !1;
							if (a === "first") return !0;
							i = b;
						case "last":
							for (; i = i.nextSibling;) if (i.nodeType === 1) return !1;
							return !0;
						case "nth":
							a = c[2];
							g = c[3];
							if (a === 1 && g === 0) return !0;
							h = c[0];
							if ((m = b.parentNode) && (m[f] !== h || !b.nodeIndex)) {
								d = 0;
								for (i = m.firstChild; i; i = i.nextSibling) if (i.nodeType === 1) i.nodeIndex = ++d;
								m[f] = h
							}
							i = b.nodeIndex - g;
							return a === 0 ? i === 0 : i % a === 0 && i / a >= 0
						}
					},
					ID: function(b, c) {
						return b.nodeType === 1 && b.getAttribute("id") === c
					},
					TAG: function(b, c) {
						return c === "*" && b.nodeType === 1 || !! b.nodeName && b.nodeName.toLowerCase() === c
					},
					CLASS: function(b, c) {
						return (" " + (b.className || b.getAttribute("class")) + " ").indexOf(c) > -1
					},
					ATTR: function(b, c) {
						var a = c[1],
							a = n.attr ? n.attr(b, a) : o.attrHandle[a] ? o.attrHandle[a](b) : b[a] != null ? b[a] : b.getAttribute(a),
							f = a + "",
							g = c[2],
							h = c[4];
						return a == null ? g === "!=" : !g && n.attr ? a != null : g === "=" ? f === h : g === "*=" ? f.indexOf(h) >= 0 : g === "~=" ? (" " + f + " ").indexOf(h) >= 0 : !h ? f && a !== !1 : g === "!=" ? f !== h : g === "^=" ? f.indexOf(h) === 0 : g === "$=" ? f.substr(f.length - h.length) === h : g === "|=" ? f === h || f.substr(0, h.length + 1) === h + "-" : !1
					},
					POS: function(b, c, a, f) {
						var g = o.setFilters[c[2]];
						if (g) return g(b, a, c, f)
					}
				}
			},
			l = o.match.POS,
			H = function(b, c) {
				return "\\" + (c - 0 + 1)
			},
			N;
		for (N in o.match) o.match[N] = RegExp(o.match[N].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[N] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[N].source.replace(/\\(\d+)/g, H));
		o.match.globalPOS = l;
		var K = function(b, c) {
				b = Array.prototype.slice.call(b, 0);
				if (c) return c.push.apply(c, b), c;
				return b
			};
		try {
			Array.prototype.slice.call(k.documentElement.childNodes, 0)
		} catch (q) {
			K = function(b, c) {
				var a = 0,
					f = c || [];
				if (d.call(b) === "[object Array]") Array.prototype.push.apply(f, b);
				else if (typeof b.length === "number") for (var g = b.length; a < g; a++) f.push(b[a]);
				else for (; b[a]; a++) f.push(b[a]);
				return f
			}
		}
		var A, x;
		k.documentElement.compareDocumentPosition ? A = function(b, c) {
			if (b === c) return i = !0, 0;
			if (!b.compareDocumentPosition || !c.compareDocumentPosition) return b.compareDocumentPosition ? -1 : 1;
			return b.compareDocumentPosition(c) & 4 ? -1 : 1
		} : (A = function(b, c) {
			if (b === c) return i = !0, 0;
			else if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
			var a, f, g = [],
				h = [];
			a = b.parentNode;
			f = c.parentNode;
			var m = a;
			if (a === f) return x(b, c);
			else if (a) {
				if (!f) return 1
			} else return -1;
			for (; m;) g.unshift(m), m = m.parentNode;
			for (m = f; m;) h.unshift(m), m = m.parentNode;
			a = g.length;
			f = h.length;
			for (m = 0; m < a && m < f; m++) if (g[m] !== h[m]) return x(g[m], h[m]);
			return m === a ? x(b, h[m], -1) : x(g[m], c, 1)
		}, x = function(b, c, a) {
			if (b === c) return a;
			for (b = b.nextSibling; b;) {
				if (b === c) return -1;
				b = b.nextSibling
			}
			return 1
		});
		(function() {
			var b = k.createElement("div"),
				c = "script" + (new Date).getTime(),
				a = k.documentElement;
			b.innerHTML = "<a name='" + c + "'/>";
			a.insertBefore(b, a.firstChild);
			if (k.getElementById(c)) o.find.ID = function(b, c, a) {
				if (typeof c.getElementById !== "undefined" && !a) return (c = c.getElementById(b[1])) ? c.id === b[1] || typeof c.getAttributeNode !== "undefined" && c.getAttributeNode("id").nodeValue === b[1] ? [c] : e : []
			}, o.filter.ID = function(b, c) {
				var a = typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id");
				return b.nodeType === 1 && a && a.nodeValue === c
			};
			a.removeChild(b);
			a = b = null
		})();
		(function() {
			var b = k.createElement("div");
			b.appendChild(k.createComment(""));
			if (b.getElementsByTagName("*").length > 0) o.find.TAG = function(b, c) {
				var a = c.getElementsByTagName(b[1]);
				if (b[1] === "*") {
					for (var f = [], g = 0; a[g]; g++) a[g].nodeType === 1 && f.push(a[g]);
					a = f
				}
				return a
			};
			b.innerHTML = "<a href='#'></a>";
			if (b.firstChild && typeof b.firstChild.getAttribute !== "undefined" && b.firstChild.getAttribute("href") !== "#") o.attrHandle.href = function(b) {
				return b.getAttribute("href", 2)
			};
			b = null
		})();
		k.querySelectorAll &&
		function() {
			var b = n,
				c = k.createElement("div");
			c.innerHTML = "<p class='TEST'></p>";
			if (!(c.querySelectorAll && c.querySelectorAll(".TEST").length === 0)) {
				n = function(c, a, f, g) {
					a = a || k;
					if (!g && !n.isXML(a)) {
						var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(c);
						if (h && (a.nodeType === 1 || a.nodeType === 9)) if (h[1]) return K(a.getElementsByTagName(c), f);
						else if (h[2] && o.find.CLASS && a.getElementsByClassName) return K(a.getElementsByClassName(h[2]), f);
						if (a.nodeType === 9) {
							if (c === "body" && a.body) return K([a.body], f);
							else if (h && h[3]) {
								var m = a.getElementById(h[3]);
								if (m && m.parentNode) {
									if (m.id === h[3]) return K([m], f)
								} else return K([], f)
							}
							try {
								return K(a.querySelectorAll(c), f)
							} catch (d) {}
						} else if (a.nodeType === 1 && a.nodeName.toLowerCase() !== "object") {
							var h = a,
								i = (m = a.getAttribute("id")) || "__sizzle__",
								e = a.parentNode,
								j = /^\s*[+~]/.test(c);
							m ? i = i.replace(/'/g, "\\$&") : a.setAttribute("id", i);
							if (j && e) a = a.parentNode;
							try {
								if (!j || e) return K(a.querySelectorAll("[id='" + i + "'] " + c), f)
							} catch (p) {} finally {
								m || h.removeAttribute("id")
							}
						}
					}
					return b(c, a, f, g)
				};
				for (var a in b) n[a] = b[a];
				c = null
			}
		}();
		(function() {
			var b = k.documentElement,
				c = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
			if (c) {
				var a = !c.call(k.createElement("div"), "div"),
					f = !1;
				try {
					c.call(k.documentElement, "[test!='']:sizzle")
				} catch (g) {
					f = !0
				}
				n.matchesSelector = function(b, g) {
					g = g.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!n.isXML(b)) try {
						if (f || !o.match.PSEUDO.test(g) && !/!=/.test(g)) {
							var h = c.call(b, g);
							if (h || !a || b.document && b.document.nodeType !== 11) return h
						}
					} catch (m) {}
					return n(g, null, null, [b]).length > 0
				}
			}
		})();
		(function() {
			var b = k.createElement("div");
			b.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (b.getElementsByClassName && b.getElementsByClassName("e").length !== 0 && (b.lastChild.className = "e", b.getElementsByClassName("e").length !== 1)) o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(b, c, a) {
				if (typeof c.getElementsByClassName !== "undefined" && !a) return c.getElementsByClassName(b[1])
			}, b = null
		})();
		n.contains = k.documentElement.contains ?
		function(b, c) {
			return b !== c && (b.contains ? b.contains(c) : !0)
		} : k.documentElement.compareDocumentPosition ?
		function(b, c) {
			return !!(b.compareDocumentPosition(c) & 16)
		} : function() {
			return !1
		};
		n.isXML = function(b) {
			return (b = (b ? b.ownerDocument || b : 0).documentElement) ? b.nodeName !== "HTML" : !1
		};
		var v = function(b, c, a) {
				for (var f, g = [], h = "", c = c.nodeType ? [c] : c; f = o.match.PSEUDO.exec(b);) h += f[0], b = b.replace(o.match.PSEUDO, "");
				b = o.relative[b] ? b + "*" : b;
				f = 0;
				for (var m = c.length; f < m; f++) n(b, c[f], g, a);
				return n.filter(h, g)
			};
		n.attr = c.attr;
		n.selectors.attrMap = {};
		c.find = n;
		c.expr = n.selectors;
		c.expr[":"] = c.expr.filters;
		c.unique = n.uniqueSort;
		c.text = n.getText;
		c.isXMLDoc = n.isXML;
		c.contains = n.contains
	})();
	var eb = /Until$/,
		fb = /^(?:parents|prevUntil|prevAll)/,
		gb = /,/,
		Ya = /^.[^:#\[\.,]*$/,
		hb = Array.prototype.slice,
		Ia = c.expr.match.globalPOS,
		ib = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	c.fn.extend({
		find: function(b) {
			var a = this,
				g, f;
			if (typeof b !== "string") return c(b).filter(function() {
				g = 0;
				for (f = a.length; g < f; g++) if (c.contains(a[g], this)) return !0
			});
			var h = this.pushStack("", "find", b),
				d, i, e;
			g = 0;
			for (f = this.length; g < f; g++) if (d = h.length, c.find(b, this[g], h), g > 0) for (i = d; i < h.length; i++) for (e = 0; e < d; e++) if (h[e] === h[i]) {
				h.splice(i--, 1);
				break
			}
			return h
		},
		has: function(b) {
			var a = c(b);
			return this.filter(function() {
				for (var b = 0, f = a.length; b < f; b++) if (c.contains(this, a[b])) return !0
			})
		},
		not: function(b) {
			return this.pushStack(x(this, b, !1), "not", b)
		},
		filter: function(b) {
			return this.pushStack(x(this, b, !0), "filter", b)
		},
		is: function(b) {
			return !!b && (typeof b === "string" ? Ia.test(b) ? c(b, this.context).index(this[0]) >= 0 : c.filter(b, this).length > 0 : this.filter(b).length > 0)
		},
		closest: function(b, a) {
			var g = [],
				f, h, d = this[0];
			if (c.isArray(b)) {
				for (h = 1; d && d.ownerDocument && d !== a;) {
					for (f = 0; f < b.length; f++) c(d).is(b[f]) && g.push({
						selector: b[f],
						elem: d,
						level: h
					});
					d = d.parentNode;
					h++
				}
				return g
			}
			var i = Ia.test(b) || typeof b !== "string" ? c(b, a || this.context) : 0;
			f = 0;
			for (h = this.length; f < h; f++) for (d = this[f]; d;) if (i ? i.index(d) > -1 : c.find.matchesSelector(d, b)) {
				g.push(d);
				break
			} else if (d = d.parentNode, !d || !d.ownerDocument || d === a || d.nodeType === 11) break;
			g = g.length > 1 ? c.unique(g) : g;
			return this.pushStack(g, "closest", b)
		},
		index: function(b) {
			if (!b) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
			if (typeof b === "string") return c.inArray(this[0], c(b));
			return c.inArray(b.jquery ? b[0] : b, this)
		},
		add: function(b, a) {
			var g = typeof b === "string" ? c(b, a) : c.makeArray(b && b.nodeType ? [b] : b),
				f = c.merge(this.get(), g);
			return this.pushStack(!g[0] || !g[0].parentNode || g[0].parentNode.nodeType === 11 || !f[0] || !f[0].parentNode || f[0].parentNode.nodeType === 11 ? f : c.unique(f))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	c.each({
		parent: function(b) {
			return (b = b.parentNode) && b.nodeType !== 11 ? b : null
		},
		parents: function(b) {
			return c.dir(b, "parentNode")
		},
		parentsUntil: function(b, a, g) {
			return c.dir(b, "parentNode", g)
		},
		next: function(b) {
			return c.nth(b, 2, "nextSibling")
		},
		prev: function(b) {
			return c.nth(b, 2, "previousSibling")
		},
		nextAll: function(b) {
			return c.dir(b, "nextSibling")
		},
		prevAll: function(b) {
			return c.dir(b, "previousSibling")
		},
		nextUntil: function(b, a, g) {
			return c.dir(b, "nextSibling", g)
		},
		prevUntil: function(b, a, g) {
			return c.dir(b, "previousSibling", g)
		},
		siblings: function(b) {
			return c.sibling((b.parentNode || {}).firstChild, b)
		},
		children: function(b) {
			return c.sibling(b.firstChild)
		},
		contents: function(b) {
			return c.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : c.makeArray(b.childNodes)
		}
	}, function(b, a) {
		c.fn[b] = function(g, f) {
			var h = c.map(this, a, g);
			eb.test(b) || (f = g);
			f && typeof f === "string" && (h = c.filter(f, h));
			h = this.length > 1 && !ib[b] ? c.unique(h) : h;
			if ((this.length > 1 || gb.test(f)) && fb.test(b)) h = h.reverse();
			return this.pushStack(h, b, hb.call(arguments).join(","))
		}
	});
	c.extend({
		filter: function(b, a, g) {
			g && (b = ":not(" + b + ")");
			return a.length === 1 ? c.find.matchesSelector(a[0], b) ? [a[0]] : [] : c.find.matches(b, a)
		},
		dir: function(b, a, g) {
			for (var f = [], b = b[a]; b && b.nodeType !== 9 && (g === e || b.nodeType !== 1 || !c(b).is(g));) b.nodeType === 1 && f.push(b), b = b[a];
			return f
		},
		nth: function(b, c, a) {
			for (var c = c || 1, f = 0; b; b = b[a]) if (b.nodeType === 1 && ++f === c) break;
			return b
		},
		sibling: function(b, c) {
			for (var a = []; b; b = b.nextSibling) b.nodeType === 1 && b !== c && a.push(b);
			return a
		}
	});
	var Ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		jb = / jQuery\d+="(?:\d+|null)"/g,
		xa = /^\s+/,
		Ja = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Ka = /<([\w:]+)/,
		kb = /<tbody/i,
		lb = /<|&#?\w+;/,
		mb = /<(?:script|style)/i,
		nb = /<(?:script|object|embed|option|style)/i,
		La = RegExp("<(?:" + Ba + ")[\\s/>]", "i"),
		Ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Na = /\/(java|ecma)script/i,
		ob = /^\s*<!(?:\[CDATA\[|\-\-)/,
		V = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		ya = C(k);
	V.optgroup = V.option;
	V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
	V.th = V.td;
	if (!c.support.htmlSerialize) V._default = [1, "div<div>", "</div>"];
	c.fn.extend({
		text: function(b) {
			return c.access(this, function(b) {
				return b === e ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || k).createTextNode(b))
			}, null, b, arguments.length)
		},
		wrapAll: function(b) {
			if (c.isFunction(b)) return this.each(function(a) {
				c(this).wrapAll(b.call(this, a))
			});
			if (this[0]) {
				var a = c(b, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && a.insertBefore(this[0]);
				a.map(function() {
					for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild;
					return b
				}).append(this)
			}
			return this
		},
		wrapInner: function(b) {
			if (c.isFunction(b)) return this.each(function(a) {
				c(this).wrapInner(b.call(this, a))
			});
			return this.each(function() {
				var a = c(this),
					g = a.contents();
				g.length ? g.wrapAll(b) : a.append(b)
			})
		},
		wrap: function(b) {
			var a = c.isFunction(b);
			return this.each(function(g) {
				c(this).wrapAll(a ? b.call(this, g) : b)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(b) {
				this.nodeType === 1 && this.appendChild(b)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(b) {
				this.nodeType === 1 && this.insertBefore(b, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(b) {
				this.parentNode.insertBefore(b, this)
			});
			else if (arguments.length) {
				var b = c.clean(arguments);
				b.push.apply(b, this.toArray());
				return this.pushStack(b, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(b) {
				this.parentNode.insertBefore(b, this.nextSibling)
			});
			else if (arguments.length) {
				var b = this.pushStack(this, "after", arguments);
				b.push.apply(b, c.clean(arguments));
				return b
			}
		},
		remove: function(b, a) {
			for (var g = 0, f;
			(f = this[g]) != null; g++) if (!b || c.filter(b, [f]).length)!a && f.nodeType === 1 && (c.cleanData(f.getElementsByTagName("*")), c.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
			return this
		},
		empty: function() {
			for (var b = 0, a;
			(a = this[b]) != null; b++) for (a.nodeType === 1 && c.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
			return this
		},
		clone: function(b, a) {
			b = b == null ? !1 : b;
			a = a == null ? b : a;
			return this.map(function() {
				return c.clone(this, b, a)
			})
		},
		html: function(b) {
			return c.access(this, function(b) {
				var a = this[0] || {},
					f = 0,
					h = this.length;
				if (b === e) return a.nodeType === 1 ? a.innerHTML.replace(jb, "") : null;
				if (typeof b === "string" && !mb.test(b) && (c.support.leadingWhitespace || !xa.test(b)) && !V[(Ka.exec(b) || ["", ""])[1].toLowerCase()]) {
					b = b.replace(Ja, "<$1></$2>");
					try {
						for (; f < h; f++) if (a = this[f] || {}, a.nodeType === 1) c.cleanData(a.getElementsByTagName("*")), a.innerHTML = b;
						a = 0
					} catch (d) {}
				}
				a && this.empty().append(b)
			}, null, b, arguments.length)
		},
		replaceWith: function(b) {
			if (this[0] && this[0].parentNode) {
				if (c.isFunction(b)) return this.each(function(a) {
					var g = c(this),
						f = g.html();
					g.replaceWith(b.call(this, a, f))
				});
				typeof b !== "string" && (b = c(b).detach());
				return this.each(function() {
					var a = this.nextSibling,
						g = this.parentNode;
					c(this).remove();
					a ? c(a).before(b) : c(g).append(b)
				})
			} else return this.length ? this.pushStack(c(c.isFunction(b) ? b() : b), "replaceWith", b) : this
		},
		detach: function(b) {
			return this.remove(b, !0)
		},
		domManip: function(b, a, g) {
			var f, h, d, i = b[0],
				j = [];
			if (!c.support.checkClone && arguments.length === 3 && typeof i === "string" && Ma.test(i)) return this.each(function() {
				c(this).domManip(b, a, g, !0)
			});
			if (c.isFunction(i)) return this.each(function(f) {
				var h = c(this);
				b[0] = i.call(this, f, a ? h.html() : e);
				h.domManip(b, a, g)
			});
			if (this[0]) {
				f = i && i.parentNode;
				f = c.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {
					fragment: f
				} : c.buildFragment(b, this, j);
				d = f.fragment;
				if (h = d.childNodes.length === 1 ? d = d.firstChild : d.firstChild) {
					a = a && c.nodeName(h, "tr");
					h = 0;
					for (var p = this.length, k = p - 1; h < p; h++) g.call(a ? c.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) : this[h] : this[h], f.cacheable || p > 1 && h < k ? c.clone(d, !0, !0) : d)
				}
				j.length && c.each(j, function(b, a) {
					a.src ? c.ajax({
						type: "GET",
						global: !1,
						url: a.src,
						async: !1,
						dataType: "script"
					}) : c.globalEval((a.text || a.textContent || a.innerHTML || "").replace(ob, "/*$0*/"));
					a.parentNode && a.parentNode.removeChild(a)
				})
			}
			return this
		}
	});
	c.buildFragment = function(b, a, g) {
		var f, h, d, i, e = b[0];
		a && a[0] && (i = a[0].ownerDocument || a[0]);
		i.createDocumentFragment || (i = k);
		if (b.length === 1 && typeof e === "string" && e.length < 512 && i === k && e.charAt(0) === "<" && !nb.test(e) && (c.support.checkClone || !Ma.test(e)) && (c.support.html5Clone || !La.test(e))) h = !0, (d = c.fragments[e]) && d !== 1 && (f = d);
		f || (f = i.createDocumentFragment(), c.clean(b, i, f, g));
		h && (c.fragments[e] = d ? f : 1);
		return {
			fragment: f,
			cacheable: h
		}
	};
	c.fragments = {};
	c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(b, a) {
		c.fn[b] = function(g) {
			var f = [],
				g = c(g),
				h = this.length === 1 && this[0].parentNode;
			if (h && h.nodeType === 11 && h.childNodes.length === 1 && g.length === 1) return g[a](this[0]), this;
			else {
				for (var h = 0, d = g.length; h < d; h++) {
					var i = (h > 0 ? this.clone(!0) : this).get();
					c(g[h])[a](i);
					f = f.concat(i)
				}
				return this.pushStack(f, b, g.selector)
			}
		}
	});
	c.extend({
		clone: function(b, a, g) {
			var f, h, d;
			c.support.html5Clone || c.isXMLDoc(b) || !La.test("<" + b.nodeName + ">") ? f = b.cloneNode(!0) : (f = k.createElement("div"), ya.appendChild(f), f.innerHTML = b.outerHTML, f = f.firstChild);
			var i = f;
			if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !c.isXMLDoc(b)) {
				z(b, i);
				f = y(b);
				h = y(i);
				for (d = 0; f[d]; ++d) h[d] && z(f[d], h[d])
			}
			if (a && (D(b, i), g)) {
				f = y(b);
				h = y(i);
				for (d = 0; f[d]; ++d) D(f[d], h[d])
			}
			return i
		},
		clean: function(b, a, g, f) {
			var h, d = [],
				a = a || k;
			typeof a.createElement === "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || k);
			for (var i = 0, e;
			(e = b[i]) != null; i++) if (typeof e === "number" && (e += ""), e) {
				if (typeof e === "string") if (lb.test(e)) {
					e = e.replace(Ja, "<$1></$2>");
					h = (Ka.exec(e) || ["", ""])[1].toLowerCase();
					var j = V[h] || V._default,
						p = j[0],
						r = a.createElement("div"),
						n = ya.childNodes;
					a === k ? ya.appendChild(r) : C(a).appendChild(r);
					for (r.innerHTML = j[1] + e + j[2]; p--;) r = r.lastChild;
					if (!c.support.tbody) {
						p = kb.test(e);
						j = h === "table" && !p ? r.firstChild && r.firstChild.childNodes : j[1] === "<table>" && !p ? r.childNodes : [];
						for (h = j.length - 1; h >= 0; --h) c.nodeName(j[h], "tbody") && !j[h].childNodes.length && j[h].parentNode.removeChild(j[h])
					}!c.support.leadingWhitespace && xa.test(e) && r.insertBefore(a.createTextNode(xa.exec(e)[0]), r.firstChild);
					e = r.childNodes;
					r && (r.parentNode.removeChild(r), n.length > 0 && (r = n[n.length - 1]) && r.parentNode && r.parentNode.removeChild(r))
				} else e = a.createTextNode(e);
				var s;
				if (!c.support.appendChecked) if (e[0] && typeof(s = e.length) === "number") for (h = 0; h < s; h++) I(e[h]);
				else I(e);
				e.nodeType ? d.push(e) : d = c.merge(d, e)
			}
			if (g) {
				b = function(b) {
					return !b.type || Na.test(b.type)
				};
				for (i = 0; d[i]; i++) a = d[i], f && c.nodeName(a, "script") && (!a.type || Na.test(a.type)) ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : (a.nodeType === 1 && (e = c.grep(a.getElementsByTagName("script"), b), d.splice.apply(d, [i + 1, 0].concat(e))), g.appendChild(a))
			}
			return d
		},
		cleanData: function(b) {
			for (var a, g, f = c.cache, h = c.event.special, d = c.support.deleteExpando, i = 0, e;
			(e = b[i]) != null; i++) if (!e.nodeName || !c.noData[e.nodeName.toLowerCase()]) if (g = e[c.expando]) {
				if ((a = f[g]) && a.events) {
					for (var j in a.events) h[j] ? c.event.remove(e, j) : c.removeEvent(e, j, a.handle);
					if (a.handle) a.handle.elem = null
				}
				d ? delete e[c.expando] : e.removeAttribute && e.removeAttribute(c.expando);
				delete f[g]
			}
		}
	});
	var za = /alpha\([^)]*\)/i,
		pb = /opacity=([^)]*)/,
		qb = /([A-Z]|^ms)/g,
		rb = /^[\-+]?(?:\d*\.)?\d+$/i,
		sa = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
		sb = /^([\-+])=([\-+.\de]+)/,
		tb = /^margin/,
		ub = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ca = ["Top", "Right", "Bottom", "Left"],
		fa, Oa, Pa;
	c.fn.css = function(b, a) {
		return c.access(this, function(b, a, h) {
			return h !== e ? c.style(b, a, h) : c.css(b, a)
		}, b, a, arguments.length > 1)
	};
	c.extend({
		cssHooks: {
			opacity: {
				get: function(b, c) {
					if (c) {
						var a = fa(b, "opacity");
						return a === "" ? "1" : a
					} else return b.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": c.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(b, a, g, f) {
			if (b && !(b.nodeType === 3 || b.nodeType === 8 || !b.style)) {
				var h, d = c.camelCase(a),
					i = b.style,
					j = c.cssHooks[d],
					a = c.cssProps[d] || d;
				if (g !== e) {
					f = typeof g;
					if (f === "string" && (h = sb.exec(g))) g = +(h[1] + 1) * +h[2] + parseFloat(c.css(b, a)), f = "number";
					if (!(g == null || f === "number" && isNaN(g))) if (f === "number" && !c.cssNumber[d] && (g += "px"), !j || !("set" in j) || (g = j.set(b, g)) !== e) try {
						i[a] = g
					} catch (p) {}
				} else {
					if (j && "get" in j && (h = j.get(b, !1, f)) !== e) return h;
					return i[a]
				}
			}
		},
		css: function(b, a, g) {
			var f, h, a = c.camelCase(a);
			h = c.cssHooks[a];
			a = c.cssProps[a] || a;
			a === "cssFloat" && (a = "float");
			if (h && "get" in h && (f = h.get(b, !0, g)) !== e) return f;
			else if (fa) return fa(b, a)
		},
		swap: function(b, c, a) {
			var f = {},
				h;
			for (h in c) f[h] = b.style[h], b.style[h] = c[h];
			a = a.call(b);
			for (h in c) b.style[h] = f[h];
			return a
		}
	});
	c.curCSS = c.css;
	k.defaultView && k.defaultView.getComputedStyle && (Oa = function(b, a) {
		var g, f, h, d = b.style,
			a = a.replace(qb, "-$1").toLowerCase();
		if ((f = b.ownerDocument.defaultView) && (h = f.getComputedStyle(b, null))) g = h.getPropertyValue(a), g === "" && !c.contains(b.ownerDocument.documentElement, b) && (g = c.style(b, a));
		if (!c.support.pixelMargin && h && tb.test(a) && sa.test(g)) f = d.width, d.width = g, g = h.width, d.width = f;
		return g
	});
	k.documentElement.currentStyle && (Pa = function(b, c) {
		var a, f, h = b.currentStyle && b.currentStyle[c],
			d = b.style;
		if (h == null && d && (a = d[c])) h = a;
		if (sa.test(h)) {
			a = d.left;
			if (f = b.runtimeStyle && b.runtimeStyle.left) b.runtimeStyle.left = b.currentStyle.left;
			d.left = c === "fontSize" ? "1em" : h;
			h = d.pixelLeft + "px";
			d.left = a;
			if (f) b.runtimeStyle.left = f
		}
		return h === "" ? "auto" : h
	});
	fa = Oa || Pa;
	c.each(["height", "width"], function(b, a) {
		c.cssHooks[a] = {
			get: function(b, f, h) {
				if (f) return b.offsetWidth !== 0 ? M(b, a, h) : c.swap(b, ub, function() {
					return M(b, a, h)
				})
			},
			set: function(b, a) {
				return rb.test(a) ? a + "px" : a
			}
		}
	});
	if (!c.support.opacity) c.cssHooks.opacity = {
		get: function(b, a) {
			return pb.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : a ? "1" : ""
		},
		set: function(b, a) {
			var g = b.style,
				f = b.currentStyle,
				h = c.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")" : "",
				d = f && f.filter || g.filter || "";
			g.zoom = 1;
			if (a >= 1 && c.trim(d.replace(za, "")) === "" && (g.removeAttribute("filter"), f && !f.filter)) return;
			g.filter = za.test(d) ? d.replace(za, h) : d + " " + h
		}
	};
	c(function() {
		if (!c.support.reliableMarginRight) c.cssHooks.marginRight = {
			get: function(b, a) {
				return c.swap(b, {
					display: "inline-block"
				}, function() {
					return a ? fa(b, "margin-right") : b.style.marginRight
				})
			}
		}
	});
	if (c.expr && c.expr.filters) c.expr.filters.hidden = function(b) {
		var a = b.offsetHeight;
		return b.offsetWidth === 0 && a === 0 || !c.support.reliableHiddenOffsets && (b.style && b.style.display || c.css(b, "display")) === "none"
	}, c.expr.filters.visible = function(b) {
		return !c.expr.filters.hidden(b)
	};
	c.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(b, a) {
		c.cssHooks[b + a] = {
			expand: function(c) {
				for (var f = typeof c === "string" ? c.split(" ") : [c], h = {}, c = 0; c < 4; c++) h[b + ca[c] + a] = f[c] || f[c - 2] || f[0];
				return h
			}
		}
	});
	var vb = /%20/g,
		Za = /\[\]$/,
		Qa = /\r?\n/g,
		wb = /#.*$/,
		xb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		yb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		zb = /^(?:GET|HEAD)$/,
		Ab = /^\/\//,
		Ra = /\?/,
		Bb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Cb = /^(?:select|textarea)/i,
		Ca = /\s+/,
		Db = /([?&])_=[^&]*/,
		Sa = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		Ta = c.fn.load,
		ta = {},
		Ua = {},
		da, ea, Va = ["*/"] + ["*"];
	try {
		da = a.href
	} catch (Jb) {
		da = k.createElement("a"), da.href = "", da = da.href
	}
	ea = Sa.exec(da.toLowerCase()) || [];
	c.fn.extend({
		load: function(b, a, g) {
			if (typeof b !== "string" && Ta) return Ta.apply(this, arguments);
			else if (!this.length) return this;
			var f = b.indexOf(" ");
			if (f >= 0) var h = b.slice(f, b.length),
				b = b.slice(0, f);
			f = "GET";
			a && (c.isFunction(a) ? (g = a, a = e) : typeof a === "object" && (a = c.param(a, c.ajaxSettings.traditional), f = "POST"));
			var d = this;
			c.ajax({
				url: b,
				type: f,
				dataType: "html",
				data: a,
				complete: function(b, a, f) {
					f = b.responseText;
					b.isResolved() && (b.done(function(b) {
						f = b
					}), d.html(h ? c("<div>").append(f.replace(Bb, "")).find(h) : f));
					g && d.each(g, [f, a, b])
				}
			});
			return this
		},
		serialize: function() {
			return c.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? c.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Cb.test(this.nodeName) || yb.test(this.type))
			}).map(function(b, a) {
				var g = c(this).val();
				return g == null ? null : c.isArray(g) ? c.map(g, function(b) {
					return {
						name: a.name,
						value: b.replace(Qa, "\r\n")
					}
				}) : {
					name: a.name,
					value: g.replace(Qa, "\r\n")
				}
			}).get()
		}
	});
	c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, a) {
		c.fn[a] = function(b) {
			return this.on(a, b)
		}
	});
	c.each(["get", "post"], function(b, a) {
		c[a] = function(b, f, h, d) {
			c.isFunction(f) && (d = d || h, h = f, f = e);
			return c.ajax({
				type: a,
				url: b,
				data: f,
				success: h,
				dataType: d
			})
		}
	});
	c.extend({
		getScript: function(b, a) {
			return c.get(b, e, a, "script")
		},
		getJSON: function(b, a, g) {
			return c.get(b, a, g, "json")
		},
		ajaxSetup: function(b, a) {
			a ? Q(b, c.ajaxSettings) : (a = b, b = c.ajaxSettings);
			Q(b, a);
			return b
		},
		ajaxSettings: {
			url: da,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(ea[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Va
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": d.String,
				"text html": !0,
				"text json": c.parseJSON,
				"text xml": c.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: U(ta),
		ajaxTransport: U(Ua),
		ajax: function(b, a) {
			function g(b, a, g, m) {
				if (N !== 2) {
					N = 2;
					l && clearTimeout(l);
					u = e;
					s = m || "";
					A.readyState = b > 0 ? 4 : 0;
					var r, n, o, m = a;
					if (g) {
						var H = f,
							q = A,
							x = H.contents,
							v = H.dataTypes,
							C = H.responseFields,
							S, z, t, F;
						for (z in C) z in g && (q[C[z]] = g[z]);
						for (; v[0] === "*";) v.shift(), S === e && (S = H.mimeType || q.getResponseHeader("content-type"));
						if (S) for (z in x) if (x[z] && x[z].test(S)) {
							v.unshift(z);
							break
						}
						if (v[0] in g) t = v[0];
						else {
							for (z in g) {
								if (!v[0] || H.converters[z + " " + v[0]]) {
									t = z;
									break
								}
								F || (F = z)
							}
							t = t || F
						}
						t ? (t !== v[0] && v.unshift(t), g = g[t]) : g = void 0
					} else g = e;
					if (b >= 200 && b < 300 || b === 304) {
						if (f.ifModified) {
							if (S = A.getResponseHeader("Last-Modified")) c.lastModified[k] = S;
							if (S = A.getResponseHeader("Etag")) c.etag[k] = S
						}
						if (b === 304) m = "notmodified", r = !0;
						else try {
							S = f;
							S.dataFilter && (g = S.dataFilter(g, S.dataType));
							var ia = S.dataTypes;
							z = {};
							var y, I, pa = ia.length,
								D, M = ia[0],
								$, E, L, Q, ba;
							for (y = 1; y < pa; y++) {
								if (y === 1) for (I in S.converters) typeof I === "string" && (z[I.toLowerCase()] = S.converters[I]);
								$ = M;
								M = ia[y];
								if (M === "*") M = $;
								else if ($ !== "*" && $ !== M) {
									E = $ + " " + M;
									L = z[E] || z["* " + M];
									if (!L) for (Q in ba = e, z) if (D = Q.split(" "), D[0] === $ || D[0] === "*") if (ba = z[D[1] + " " + M]) {
										Q = z[Q];
										Q === !0 ? L = ba : ba === !0 && (L = Q);
										break
									}!L && !ba && c.error("No conversion from " + E.replace(" ", " to "));
									L !== !0 && (g = L ? L(g) : ba(Q(g)))
								}
							}
							n = g;
							m = "success";
							r = !0
						} catch (O) {
							m = "parsererror", o = O
						}
					} else if (o = m, !m || b) m = "error", b < 0 && (b = 0);
					A.status = b;
					A.statusText = "" + (a || m);
					r ? i.resolveWith(h, [n, m, A]) : i.rejectWith(h, [A, m, o]);
					A.statusCode(p);
					p = e;
					K && d.trigger("ajax" + (r ? "Success" : "Error"), [A, f, r ? n : o]);
					j.fireWith(h, [A, m]);
					K && (d.trigger("ajaxComplete", [A, f]), --c.active || c.event.trigger("ajaxStop"))
				}
			}
			typeof b === "object" && (a = b, b = e);
			var a = a || {},
				f = c.ajaxSetup({}, a),
				h = f.context || f,
				d = h !== f && (h.nodeType || h instanceof c) ? c(h) : c.event,
				i = c.Deferred(),
				j = c.Callbacks("once memory"),
				p = f.statusCode || {},
				k, r = {},
				n = {},
				s, o, u, l, H, N = 0,
				K, q, A = {
					readyState: 0,
					setRequestHeader: function(b, a) {
						if (!N) {
							var c = b.toLowerCase(),
								b = n[c] = n[c] || b;
							r[b] = a
						}
						return this
					},
					getAllResponseHeaders: function() {
						return N === 2 ? s : null
					},
					getResponseHeader: function(b) {
						var a;
						if (N === 2) {
							if (!o) for (o = {}; a = xb.exec(s);) o[a[1].toLowerCase()] = a[2];
							a = o[b.toLowerCase()]
						}
						return a === e ? null : a
					},
					overrideMimeType: function(b) {
						if (!N) f.mimeType = b;
						return this
					},
					abort: function(b) {
						b = b || "abort";
						u && u.abort(b);
						g(0, b);
						return this
					}
				};
			i.promise(A);
			A.success = A.done;
			A.error = A.fail;
			A.complete = j.add;
			A.statusCode = function(b) {
				if (b) {
					var a;
					if (N < 2) for (a in b) p[a] = [p[a], b[a]];
					else a = b[A.status], A.then(a, a)
				}
				return this
			};
			f.url = ((b || f.url) + "").replace(wb, "").replace(Ab, ea[1] + "//");
			f.dataTypes = c.trim(f.dataType || "*").toLowerCase().split(Ca);
			if (f.crossDomain == null) H = Sa.exec(f.url.toLowerCase()), f.crossDomain = !(!H || !(H[1] != ea[1] || H[2] != ea[2] || (H[3] || (H[1] === "http:" ? 80 : 443)) != (ea[3] || (ea[1] === "http:" ? 80 : 443))));
			if (f.data && f.processData && typeof f.data !== "string") f.data = c.param(f.data, f.traditional);
			P(ta, f, a, A);
			if (N === 2) return !1;
			K = f.global;
			f.type = f.type.toUpperCase();
			f.hasContent = !zb.test(f.type);
			K && c.active++ === 0 && c.event.trigger("ajaxStart");
			if (!f.hasContent && (f.data && (f.url += (Ra.test(f.url) ? "&" : "?") + f.data, delete f.data), k = f.url, f.cache === !1)) {
				H = c.now();
				var x = f.url.replace(Db, "$1_=" + H);
				f.url = x + (x === f.url ? (Ra.test(f.url) ? "&" : "?") + "_=" + H : "")
			}(f.data && f.hasContent && f.contentType !== !1 || a.contentType) && A.setRequestHeader("Content-Type", f.contentType);
			f.ifModified && (k = k || f.url, c.lastModified[k] && A.setRequestHeader("If-Modified-Since", c.lastModified[k]), c.etag[k] && A.setRequestHeader("If-None-Match", c.etag[k]));
			A.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + Va + "; q=0.01" : "") : f.accepts["*"]);
			for (q in f.headers) A.setRequestHeader(q, f.headers[q]);
			if (f.beforeSend && (f.beforeSend.call(h, A, f) === !1 || N === 2)) return A.abort(), !1;
			for (q in {
				success: 1,
				error: 1,
				complete: 1
			}) A[q](f[q]);
			if (u = P(Ua, f, a, A)) {
				A.readyState = 1;
				K && d.trigger("ajaxSend", [A, f]);
				f.async && f.timeout > 0 && (l = setTimeout(function() {
					A.abort("timeout")
				}, f.timeout));
				try {
					N = 1, u.send(r, g)
				} catch (v) {
					if (N < 2) g(-1, v);
					else throw v;
				}
			} else g(-1, "No Transport");
			return A
		},
		param: function(b, a) {
			var g = [],
				f = function(b, a) {
					a = c.isFunction(a) ? a() : a;
					g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
				};
			if (a === e) a = c.ajaxSettings.traditional;
			if (c.isArray(b) || b.jquery && !c.isPlainObject(b)) c.each(b, function() {
				f(this.name, this.value)
			});
			else for (var h in b) L(h, b[h], a, f);
			return g.join("&").replace(vb, "+")
		}
	});
	c.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Eb = c.now(),
		qa = /(\=)\?(&|$)|\?\?/i;
	c.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return c.expando + "_" + Eb++
		}
	});
	c.ajaxPrefilter("json jsonp", function(b, a, g) {
		a = typeof b.data === "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
		if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (qa.test(b.url) || a && qa.test(b.data))) {
			var f, h = b.jsonpCallback = c.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
				i = d[h],
				e = b.url,
				j = b.data,
				p = "$1" + h + "$2";
			b.jsonp !== !1 && (e = e.replace(qa, p), b.url === e && (a && (j = j.replace(qa, p)), b.data === j && (e += (/\?/.test(e) ? "&" : "?") + b.jsonp + "=" + h)));
			b.url = e;
			b.data = j;
			d[h] = function(b) {
				f = [b]
			};
			g.always(function() {
				d[h] = i;
				if (f && c.isFunction(i)) d[h](f[0])
			});
			b.converters["script json"] = function() {
				f || c.error(h + " was not called");
				return f[0]
			};
			b.dataTypes[0] = "json";
			return "script"
		}
	});
	c.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(b) {
				c.globalEval(b);
				return b
			}
		}
	});
	c.ajaxPrefilter("script", function(b) {
		if (b.cache === e) b.cache = !1;
		if (b.crossDomain) b.type = "GET", b.global = !1
	});
	c.ajaxTransport("script", function(b) {
		if (b.crossDomain) {
			var a, c = k.head || k.getElementsByTagName("head")[0] || k.documentElement;
			return {
				send: function(f, h) {
					a = k.createElement("script");
					a.async = "async";
					if (b.scriptCharset) a.charset = b.scriptCharset;
					a.src = b.url;
					a.onload = a.onreadystatechange = function(b, f) {
						if (f || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null, c && a.parentNode && c.removeChild(a), a = e, f || h(200, "success")
					};
					c.insertBefore(a, c.firstChild)
				},
				abort: function() {
					if (a) a.onload(0, 1)
				}
			}
		}
	});
	var Aa = d.ActiveXObject ?
	function() {
		for (var b in ja) ja[b](0, 1)
	} : !1, Fb = 0, ja;
	c.ajaxSettings.xhr = d.ActiveXObject ?
	function() {
		var b;
		if (!(b = !this.isLocal && W())) a: {
			try {
				b = new d.ActiveXObject("Microsoft.XMLHTTP");
				break a
			} catch (a) {}
			b = void 0
		}
		return b
	} : W;
	(function(b) {
		c.extend(c.support, {
			ajax: !! b,
			cors: !! b && "withCredentials" in b
		})
	})(c.ajaxSettings.xhr());
	c.support.ajax && c.ajaxTransport(function(b) {
		if (!b.crossDomain || c.support.cors) {
			var a;
			return {
				send: function(g, f) {
					var h = b.xhr(),
						i, j;
					b.username ? h.open(b.type, b.url, b.async, b.username, b.password) : h.open(b.type, b.url, b.async);
					if (b.xhrFields) for (j in b.xhrFields) h[j] = b.xhrFields[j];
					b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType);
					!b.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (j in g) h.setRequestHeader(j, g[j])
					} catch (p) {}
					h.send(b.hasContent && b.data || null);
					a = function(g, d) {
						var j, p, k, r, n;
						try {
							if (a && (d || h.readyState === 4)) {
								a = e;
								if (i) h.onreadystatechange = c.noop, Aa && delete ja[i];
								if (d) h.readyState !== 4 && h.abort();
								else {
									j = h.status;
									k = h.getAllResponseHeaders();
									r = {};
									if ((n = h.responseXML) && n.documentElement) r.xml = n;
									try {
										r.text = h.responseText
									} catch (s) {}
									try {
										p = h.statusText
									} catch (o) {
										p = ""
									}!j && b.isLocal && !b.crossDomain ? j = r.text ? 200 : 404 : j === 1223 && (j = 204)
								}
							}
						} catch (u) {
							d || f(-1, u)
						}
						r && f(j, p, r, k)
					};
					!b.async || h.readyState === 4 ? a() : (i = ++Fb, Aa && (ja || (ja = {}, c(d).unload(Aa)), ja[i] = a), h.onreadystatechange = a)
				},
				abort: function() {
					a && a(0, 1)
				}
			}
		}
	});
	var ua = {},
		Y, ga, Gb = /^(?:toggle|show|hide)$/,
		Hb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		ra, oa = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		na;
	c.fn.extend({
		show: function(b, a, g) {
			if (b || b === 0) return this.animate(R("show", 3), b, a, g);
			else {
				for (var g = 0, f = this.length; g < f; g++) if (b = this[g], b.style) {
					a = b.style.display;
					if (!c._data(b, "olddisplay") && a === "none") a = b.style.display = "";
					(a === "" && c.css(b, "display") === "none" || !c.contains(b.ownerDocument.documentElement, b)) && c._data(b, "olddisplay", la(b.nodeName))
				}
				for (g = 0; g < f; g++) if (b = this[g], b.style && (a = b.style.display, a === "" || a === "none")) b.style.display = c._data(b, "olddisplay") || "";
				return this
			}
		},
		hide: function(b, a, g) {
			if (b || b === 0) return this.animate(R("hide", 3), b, a, g);
			else {
				for (var g = 0, f = this.length; g < f; g++) b = this[g], b.style && (a = c.css(b, "display"), a !== "none" && !c._data(b, "olddisplay") && c._data(b, "olddisplay", a));
				for (g = 0; g < f; g++) if (this[g].style) this[g].style.display = "none";
				return this
			}
		},
		_toggle: c.fn.toggle,
		toggle: function(b, a, g) {
			var f = typeof b === "boolean";
			c.isFunction(b) && c.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || f ? this.each(function() {
				var a = f ? b : c(this).is(":hidden");
				c(this)[a ? "show" : "hide"]()
			}) : this.animate(R("toggle", 3), b, a, g);
			return this
		},
		fadeTo: function(b, a, c, f) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: a
			}, b, c, f)
		},
		animate: function(b, a, g, f) {
			function h() {
				var m;
				d.queue === !1 && c._mark(this);
				var a = c.extend({}, d),
					f = this.nodeType === 1,
					g = f && c(this).is(":hidden"),
					h, i, e, j, p;
				a.animatedProperties = {};
				for (e in b) if (h = c.camelCase(e), e !== h && (b[h] = b[e], delete b[e]), (i = c.cssHooks[h]) && "expand" in i) for (e in j = i.expand(b[h]), delete b[h], j) e in b || (b[e] = j[e]);
				for (h in b) {
					i = b[h];
					c.isArray(i) ? (a.animatedProperties[h] = i[1], m = b[h] = i[0], i = m) : a.animatedProperties[h] = a.specialEasing && a.specialEasing[h] || a.easing || "swing";
					if (i === "hide" && g || i === "show" && !g) return a.complete.call(this);
					if (f && (h === "height" || h === "width")) if (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], c.css(this, "display") === "inline" && c.css(this, "float") === "none")!c.support.inlineBlockNeedsLayout || la(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1
				}
				if (a.overflow != null) this.style.overflow = "hidden";
				for (e in b) if (f = new c.fx(this, a, e), i = b[e], Gb.test(i)) if (h = c._data(this, "toggle" + e) || (i === "toggle" ? g ? "show" : "hide" : 0)) c._data(this, "toggle" + e, h === "show" ? "hide" : "show"), f[h]();
				else f[i]();
				else h = Hb.exec(i), j = f.cur(), h ? (i = parseFloat(h[2]), p = h[3] || (c.cssNumber[e] ? "" : "px"), p !== "px" && (c.style(this, e, (i || 1) + p), j *= (i || 1) / f.cur(), c.style(this, e, j + p)), h[1] && (i = (h[1] === "-=" ? -1 : 1) * i + j), f.custom(j, i, p)) : f.custom(j, i, "");
				return !0
			}
			var d = c.speed(a, g, f);
			if (c.isEmptyObject(b)) return this.each(d.complete, [!1]);
			b = c.extend({}, b);
			return d.queue === !1 ? this.each(h) : this.queue(d.queue, h)
		},
		stop: function(b, a, g) {
			typeof b !== "string" && (g = a, a = b, b = e);
			a && b !== !1 && this.queue(b || "fx", []);
			return this.each(function() {
				function a(b, f, h) {
					f = f[h];
					c.removeData(b, h, !0);
					f.stop(g)
				}
				var h, d = !1,
					i = c.timers,
					e = c._data(this);
				g || c._unmark(!0, this);
				if (b == null) for (h in e) e[h] && e[h].stop && h.indexOf(".run") === h.length - 4 && a(this, e, h);
				else e[h = b + ".run"] && e[h].stop && a(this, e, h);
				for (h = i.length; h--;) if (i[h].elem === this && (b == null || i[h].queue === b)) {
					if (g) i[h](!0);
					else i[h].saveState();
					d = !0;
					i.splice(h, 1)
				}(!g || !d) && c.dequeue(this, b)
			})
		}
	});
	c.each({
		slideDown: R("show", 1),
		slideUp: R("hide", 1),
		slideToggle: R("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(b, a) {
		c.fn[b] = function(b, c, h) {
			return this.animate(a, b, c, h)
		}
	});
	c.extend({
		speed: function(b, a, g) {
			var f = b && typeof b === "object" ? c.extend({}, b) : {
				complete: g || !g && a || c.isFunction(b) && b,
				duration: b,
				easing: g && a || a && !c.isFunction(a) && a
			};
			f.duration = c.fx.off ? 0 : typeof f.duration === "number" ? f.duration : f.duration in c.fx.speeds ? c.fx.speeds[f.duration] : c.fx.speeds._default;
			if (f.queue == null || f.queue === !0) f.queue = "fx";
			f.old = f.complete;
			f.complete = function(b) {
				c.isFunction(f.old) && f.old.call(this);
				f.queue ? c.dequeue(this, f.queue) : b !== !1 && c._unmark(this)
			};
			return f
		},
		easing: {
			linear: function(b) {
				return b
			},
			swing: function(b) {
				return -Math.cos(b * Math.PI) / 2 + 0.5
			}
		},
		timers: [],
		fx: function(b, a, c) {
			this.options = a;
			this.elem = b;
			this.prop = c;
			a.orig = a.orig || {}
		}
	});
	c.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this);
			(c.fx.step[this.prop] || c.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
			var b, a = c.css(this.elem, this.prop);
			return isNaN(b = parseFloat(a)) ? !a || a === "auto" ? 0 : a : b
		},
		custom: function(b, a, g) {
			function f(b) {
				return h.step(b)
			}
			var h = this,
				d = c.fx;
			this.startTime = na || X();
			this.end = a;
			this.now = this.start = b;
			this.pos = this.state = 0;
			this.unit = g || this.unit || (c.cssNumber[this.prop] ? "" : "px");
			f.queue = this.options.queue;
			f.elem = this.elem;
			f.saveState = function() {
				c._data(h.elem, "fxshow" + h.prop) === e && (h.options.hide ? c._data(h.elem, "fxshow" + h.prop, h.start) : h.options.show && c._data(h.elem, "fxshow" + h.prop, h.end))
			};
			f() && c.timers.push(f) && !ra && (ra = setInterval(d.tick, d.interval))
		},
		show: function() {
			var b = c._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = b || c.style(this.elem, this.prop);
			this.options.show = !0;
			b !== e ? this.custom(this.cur(), b) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
			c(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = c._data(this.elem, "fxshow" + this.prop) || c.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(b) {
			var a, g = na || X(),
				f = !0,
				h = this.elem,
				d = this.options;
			if (b || g >= d.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				d.animatedProperties[this.prop] = !0;
				for (a in d.animatedProperties) d.animatedProperties[a] !== !0 && (f = !1);
				if (f) {
					d.overflow != null && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(b, a) {
						h.style["overflow" + a] = d.overflow[b]
					});
					d.hide && c(h).hide();
					if (d.hide || d.show) for (a in d.animatedProperties) c.style(h, a, d.orig[a]), c.removeData(h, "fxshow" + a, !0), c.removeData(h, "toggle" + a, !0);
					if (b = d.complete) d.complete = !1, b.call(h)
				}
				return !1
			} else d.duration == Infinity ? this.now = g : (b = g - this.startTime, this.state = b / d.duration, this.pos = c.easing[d.animatedProperties[this.prop]](this.state, b, 0, 1, d.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
			return !0
		}
	};
	c.extend(c.fx, {
		tick: function() {
			for (var b, a = c.timers, g = 0; g < a.length; g++) b = a[g], !b() && a[g] === b && a.splice(g--, 1);
			a.length || c.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(ra);
			ra = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(b) {
				c.style(b.elem, "opacity", b.now)
			},
			_default: function(b) {
				b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = b.now + b.unit : b.elem[b.prop] = b.now
			}
		}
	});
	c.each(oa.concat.apply([], oa), function(b, a) {
		a.indexOf("margin") && (c.fx.step[a] = function(b) {
			c.style(b.elem, a, Math.max(0, b.now) + b.unit)
		})
	});
	if (c.expr && c.expr.filters) c.expr.filters.animated = function(b) {
		return c.grep(c.timers, function(a) {
			return b === a.elem
		}).length
	};
	var Wa, Ib = /^t(?:able|d|h)$/i,
		Xa = /^(?:body|html)$/i;
	Wa = "getBoundingClientRect" in k.documentElement ?
	function(b, a, g, f) {
		try {
			f = b.getBoundingClientRect()
		} catch (h) {}
		if (!f || !c.contains(g, b)) return f ? {
			top: f.top,
			left: f.left
		} : {
			top: 0,
			left: 0
		};
		b = a.body;
		a = ha(a);
		return {
			top: f.top + (a.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop || b.clientTop || 0),
			left: f.left + (a.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft || 0)
		}
	} : function(b, a, g) {
		var f, h = b.offsetParent,
			d = a.body;
		f = (a = a.defaultView) ? a.getComputedStyle(b, null) : b.currentStyle;
		for (var i = b.offsetTop, e = b.offsetLeft;
		(b = b.parentNode) && b !== d && b !== g;) {
			if (c.support.fixedPosition && f.position === "fixed") break;
			f = a ? a.getComputedStyle(b, null) : b.currentStyle;
			i -= b.scrollTop;
			e -= b.scrollLeft;
			if (b === h) {
				i += b.offsetTop;
				e += b.offsetLeft;
				if (c.support.doesNotAddBorder && (!c.support.doesAddBorderForTableAndCells || !Ib.test(b.nodeName))) i += parseFloat(f.borderTopWidth) || 0, e += parseFloat(f.borderLeftWidth) || 0;
				h = b.offsetParent
			}
			c.support.subtractsBorderForOverflowNotVisible && f.overflow !== "visible" && (i += parseFloat(f.borderTopWidth) || 0, e += parseFloat(f.borderLeftWidth) || 0)
		}
		if (f.position === "relative" || f.position === "static") i += d.offsetTop, e += d.offsetLeft;
		c.support.fixedPosition && f.position === "fixed" && (i += Math.max(g.scrollTop, d.scrollTop), e += Math.max(g.scrollLeft, d.scrollLeft));
		return {
			top: i,
			left: e
		}
	};
	c.fn.offset = function(b) {
		if (arguments.length) return b === e ? this : this.each(function(a) {
			c.offset.setOffset(this, b, a)
		});
		var a = this[0],
			g = a && a.ownerDocument;
		if (!g) return null;
		if (a === g.body) return c.offset.bodyOffset(a);
		return Wa(a, g, g.documentElement)
	};
	c.offset = {
		bodyOffset: function(b) {
			var a = b.offsetTop,
				g = b.offsetLeft;
			c.support.doesNotIncludeMarginInBodyOffset && (a += parseFloat(c.css(b, "marginTop")) || 0, g += parseFloat(c.css(b, "marginLeft")) || 0);
			return {
				top: a,
				left: g
			}
		},
		setOffset: function(b, a, g) {
			var f = c.css(b, "position");
			if (f === "static") b.style.position = "relative";
			var h = c(b),
				d = h.offset(),
				i = c.css(b, "top"),
				e = c.css(b, "left"),
				j = {},
				p = {};
			(f === "absolute" || f === "fixed") && c.inArray("auto", [i, e]) > -1 ? (p = h.position(), f = p.top, e = p.left) : (f = parseFloat(i) || 0, e = parseFloat(e) || 0);
			c.isFunction(a) && (a = a.call(b, g, d));
			if (a.top != null) j.top = a.top - d.top + f;
			if (a.left != null) j.left = a.left - d.left + e;
			"using" in a ? a.using.call(b, j) : h.css(j)
		}
	};
	c.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var b = this[0],
				a = this.offsetParent(),
				g = this.offset(),
				f = Xa.test(a[0].nodeName) ? {
					top: 0,
					left: 0
				} : a.offset();
			g.top -= parseFloat(c.css(b, "marginTop")) || 0;
			g.left -= parseFloat(c.css(b, "marginLeft")) || 0;
			f.top += parseFloat(c.css(a[0], "borderTopWidth")) || 0;
			f.left += parseFloat(c.css(a[0], "borderLeftWidth")) || 0;
			return {
				top: g.top - f.top,
				left: g.left - f.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var b = this.offsetParent || k.body; b && !Xa.test(b.nodeName) && c.css(b, "position") === "static";) b = b.offsetParent;
				return b
			})
		}
	});
	c.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(b, a) {
		var g = /Y/.test(a);
		c.fn[b] = function(f) {
			return c.access(this, function(b, f, d) {
				var i = ha(b);
				if (d === e) return i ? a in i ? i[a] : c.support.boxModel && i.document.documentElement[f] || i.document.body[f] : b[f];
				i ? i.scrollTo(!g ? d : c(i).scrollLeft(), g ? d : c(i).scrollTop()) : b[f] = d
			}, b, f, arguments.length, null)
		}
	});
	c.each({
		Height: "height",
		Width: "width"
	}, function(b, a) {
		var g = "client" + b,
			f = "scroll" + b,
			d = "offset" + b;
		c.fn["inner" + b] = function() {
			var b = this[0];
			return b ? b.style ? parseFloat(c.css(b, a, "padding")) : this[a]() : null
		};
		c.fn["outer" + b] = function(b) {
			var f = this[0];
			return f ? f.style ? parseFloat(c.css(f, a, b ? "margin" : "border")) : this[a]() : null
		};
		c.fn[a] = function(b) {
			return c.access(this, function(b, a, i) {
				if (c.isWindow(b)) return a = b.document, b = a.documentElement[g], c.support.boxModel && b || a.body && a.body[g] || b;
				if (b.nodeType === 9) {
					a = b.documentElement;
					if (a[g] >= a[f]) return a[g];
					return Math.max(b.body[f], a[f], b.body[d], a[d])
				}
				if (i === e) return b = c.css(b, a), a = parseFloat(b), c.isNumeric(a) ? a : b;
				c(b).css(a, i)
			}, a, b, arguments.length, null)
		}
	});
	d.jQuery = d.$ = c;
	typeof define === "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return c
	})
})(window);
(function(d) {
	var e = this,
		l = e.document,
		E = d(l),
		t = d(e),
		v = Array.prototype,
		q = !0,
		F = !1,
		x = navigator.userAgent.toLowerCase(),
		C = e.location.hash.replace(/#\//, ""),
		D = function() {},
		z = function() {
			return !1
		},
		y = function() {
			var a = 3,
				c = l.createElement("div"),
				d = c.getElementsByTagName("i");
			do c.innerHTML = "<\!--[if gt IE " + ++a + "]><i></i><![endif]--\>";
			while (d[0]);
			return a > 4 ? a : void 0
		}(),
		O = function() {
			return {
				html: l.documentElement,
				body: l.body,
				head: l.getElementsByTagName("head")[0],
				title: l.title
			}
		},
		I = function() {
			var a = [];
			d.each("data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image".split(" "), function(c, d) {
				a.push(d);
				/_/.test(d) && a.push(d.replace(/_/g, ""))
			});
			return a
		}(),
		M = function(a) {
			var c;
			if (typeof a !== "object") return a;
			d.each(a, function(i, e) {
				/^[a-z]+_/.test(i) && (c = "", d.each(i.split("_"), function(a, d) {
					c += a > 0 ? d.substr(0, 1).toUpperCase() + d.substr(1) : d
				}), a[c] = e, delete a[i])
			});
			return a
		},
		U = function(a) {
			if (d.inArray(a, I) > -1) return Galleria[a.toUpperCase()];
			return a
		},
		P = {
			youtube: {
				reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
				embed: function(a) {
					return "http://www.youtube.com/embed/" + a
				},
				getThumb: function(a, c, i) {
					i = i || D;
					d.getJSON("http://gdata.youtube.com/feeds/api/videos/" + a + "?v=2&alt=json-in-script&callback=?", function(a) {
						try {
							c(a.entry.media$group.media$thumbnail[0].url)
						} catch (d) {
							i()
						}
					}).error(i)
				}
			},
			vimeo: {
				reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
				embed: function(a) {
					return "http://player.vimeo.com/video/" + a
				},
				getThumb: function(a, c, i) {
					i = i || D;
					d.getJSON("http://vimeo.com/api/v2/video/" + a + ".json?callback=?", function(a) {
						try {
							c(a[0].thumbnail_medium)
						} catch (d) {
							i()
						}
					}).error(i)
				}
			},
			dailymotion: {
				reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
				embed: function(a) {
					return "http://www.dailymotion.com/embed/video/" + a
				},
				getThumb: function(a, c, i) {
					i = i || D;
					d.getJSON("https://api.dailymotion.com/video/" + a + "?fields=thumbnail_medium_url&callback=?", function(a) {
						try {
							c(a.thumbnail_medium_url)
						} catch (d) {
							i()
						}
					}).error(i)
				}
			}
		},
		Q = function(a) {
			var c, d;
			for (d in P) if ((c = a && a.match(P[d].reg)) && c.length) return {
				id: c[2],
				provider: d
			};
			return !1
		},
		L = {
			support: function() {
				var a = O().html;
				return a.requestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullScreen
			}(),
			callback: D,
			enter: function(a, c) {
				this.instance = a;
				this.callback = c || D;
				var d = O().html;
				d.requestFullscreen ? d.requestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : d.webkitRequestFullScreen && d.webkitRequestFullScreen()
			},
			exit: function(a) {
				this.callback = a || D;
				l.exitFullscreen ? l.exitFullscreen() : l.mozCancelFullScreen ? l.mozCancelFullScreen() : l.webkitCancelFullScreen && l.webkitCancelFullScreen()
			},
			instance: null,
			listen: function() {
				if (this.support) {
					var a = function() {
							if (L.instance) {
								var a = L.instance._fullscreen;
								l.fullscreen || l.mozFullScreen || l.webkitIsFullScreen ? a._enter(L.callback) : a._exit(L.callback)
							}
						};
					l.addEventListener("fullscreenchange", a, !1);
					l.addEventListener("mozfullscreenchange", a, !1);
					l.addEventListener("webkitfullscreenchange", a, !1)
				}
			}
		},
		W = [],
		X = [],
		aa = !1,
		R = !1,
		la = [],
		ha = function(a) {
			Galleria.theme = a;
			d.each(la, function(a, d) {
				d._initialized || d._init.call(d)
			})
		},
		k = function() {
			return {
				clearTimer: function(a) {
					d.each(Galleria.get(), function() {
						this.clearTimer(a)
					})
				},
				addTimer: function(a) {
					d.each(Galleria.get(), function() {
						this.addTimer(a)
					})
				},
				array: function(a) {
					return v.slice.call(a, 0)
				},
				create: function(a, c) {
					var d = l.createElement(c || "div");
					d.className = a;
					return d
				},
				getScriptPath: function(a) {
					a = a || d("script:last").attr("src");
					a = a.split("/");
					if (a.length == 1) return "";
					a.pop();
					return a.join("/") + "/"
				},
				animate: function() {
					var a = function(a) {
							var c = "transition WebkitTransition MozTransition OTransition".split(" "),
								d;
							if (e.opera) return !1;
							for (d = 0; c[d]; d++) if (typeof a[c[d]] !== "undefined") return c[d];
							return !1
						}((l.body || l.documentElement).style),
						c = {
							MozTransition: "transitionend",
							OTransition: "oTransitionEnd",
							WebkitTransition: "webkitTransitionEnd",
							transition: "transitionend"
						}[a],
						i = {
							_default: [0.25, 0.1, 0.25, 1],
							galleria: [0.645, 0.045, 0.355, 1],
							galleriaIn: [0.55, 0.085, 0.68, 0.53],
							galleriaOut: [0.25, 0.46, 0.45, 0.94],
							ease: [0.25, 0, 0.25, 1],
							linear: [0.25, 0.25, 0.75, 0.75],
							"ease-in": [0.42, 0, 1, 1],
							"ease-out": [0, 0, 0.58, 1],
							"ease-in-out": [0.42, 0, 0.58, 1]
						},
						j = function(a, c, i) {
							var e = {},
								i = i || "transition";
							d.each("webkit moz ms o".split(" "), function() {
								e["-" + this + "-" + i] = c
							});
							a.css(e)
						},
						s = function(a) {
							j(a, "none", "transition");
							Galleria.WEBKIT && Galleria.TOUCH && (j(a, "translate3d(0,0,0)", "transform"), a.data("revert") && (a.css(a.data("revert")), a.data("revert", null)))
						},
						u, n, o, q, p, r, N;
					return function(l, K, A) {
						A = d.extend({
							duration: 400,
							complete: D,
							stop: !1
						}, A);
						l = d(l);
						A.duration ? a ? (A.stop && (l.unbind(c), s(l)), u = !1, d.each(K, function(a, c) {
							N = l.css(a);
							k.parseValue(N) != k.parseValue(c) && (u = !0);
							l.css(a, N)
						}), u ? (n = [], o = A.easing in i ? i[A.easing] : i._default, q = " " + A.duration + "ms cubic-bezier(" + o.join(",") + ")", e.setTimeout(function(a, c, i, e) {
							return function() {
								a.one(c, function(a) {
									return function() {
										s(a);
										A.complete.call(a[0])
									}
								}(a));
								if (Galleria.WEBKIT && Galleria.TOUCH && (p = {}, r = [0, 0, 0], d.each(["left", "top"], function(c, d) {
									d in i && (r[c] = k.parseValue(i[d]) - k.parseValue(a.css(d)) + "px", p[d] = i[d], delete i[d])
								}), r[0] || r[1])) a.data("revert", p), n.push("-webkit-transform" + e), j(a, "translate3d(" + r.join(",") + ")", "transform");
								d.each(i, function(a) {
									n.push(a + e)
								});
								j(a, n.join(","));
								a.css(i)
							}
						}(l, c, K, q), 2)) : e.setTimeout(function() {
							A.complete.call(l[0])
						}, A.duration)) : l.animate(K, A) : (l.css(K), A.complete.call(l[0]))
					}
				}(),
				removeAlpha: function(a) {
					if (y < 9 && a) {
						var c = a.style,
							a = (a = a.currentStyle) && a.filter || c.filter || "";
						if (/alpha/.test(a)) c.filter = a.replace(/alpha\([^)]*\)/i, "")
					}
				},
				forceStyles: function(a, c) {
					a = d(a);
					a.attr("style") && a.data("styles", a.attr("style")).removeAttr("style");
					a.css(c)
				},
				revertStyles: function() {
					d.each(k.array(arguments), function(a, c) {
						c = d(c);
						c.removeAttr("style");
						c.attr("style", "");
						c.data("styles") && c.attr("style", c.data("styles")).data("styles", null)
					})
				},
				moveOut: function(a) {
					k.forceStyles(a, {
						position: "absolute",
						left: -1E4
					})
				},
				moveIn: function() {
					k.revertStyles.apply(k, k.array(arguments))
				},
				elem: function(a) {
					return a instanceof d ? {
						$: a,
						dom: a[0]
					} : {
						$: d(a),
						dom: a
					}
				},
				hide: function(a, c, d) {
					var d = d || D,
						e = k.elem(a),
						s = e.$,
						a = e.dom;
					s.data("opacity") || s.data("opacity", s.css("opacity"));
					e = {
						opacity: 0
					};
					c ? k.animate(a, e, {
						duration: c,
						complete: y < 9 && a ?
						function() {
							k.removeAlpha(a);
							a.style.visibility = "hidden";
							d.call(a)
						} : d,
						stop: !0
					}) : y < 9 && a ? (k.removeAlpha(a), a.style.visibility = "hidden") : s.css(e)
				},
				show: function(a, c, d) {
					var d = d || D,
						e = k.elem(a),
						s = e.$,
						a = e.dom,
						u = {
							opacity: parseFloat(s.data("opacity")) || 1
						};
					if (c) {
						if (y < 9) s.css("opacity", 0), a.style.visibility = "visible";
						k.animate(a, u, {
							duration: c,
							complete: y < 9 && a ?
							function() {
								u.opacity == 1 && k.removeAlpha(a);
								d.call(a)
							} : d,
							stop: !0
						})
					} else y < 9 && u.opacity == 1 && a ? (k.removeAlpha(a), a.style.visibility = "visible") : s.css(u)
				},
				optimizeTouch: function() {
					var a, c, i, e, k = {},
						u = function(a) {
							a.preventDefault();
							k = d.extend({}, a, !0)
						},
						n = function() {
							this.evt = k
						},
						o = function() {
							this.handler.call(a, this.evt)
						};
					return function(k) {
						d(k).bind("touchend", function(p) {
							a = p.target;
							for (e = !0; a.parentNode && a != p.currentTarget && e;) c = d(a).data("events"), i = d(a).data("fakes"), c && "click" in c ? (e = !1, p.preventDefault(), d(a).click(u).click(), c.click.pop(), d.each(c.click, n), d(a).data("fakes", c.click), delete c.click) : i && (e = !1, p.preventDefault(), d.each(i, o)), a = a.parentNode
						})
					}
				}(),
				wait: function(a) {
					var a = d.extend({
						until: z,
						success: D,
						error: function() {
							Galleria.raise("Could not complete wait function.")
						},
						timeout: 3E3
					}, a),
						c = k.timestamp(),
						i, j, s = function() {
							j = k.timestamp();
							i = j - c;
							if (a.until(i)) return a.success(), !1;
							if (typeof a.timeout == "number" && j >= c + a.timeout) return a.error(), !1;
							e.setTimeout(s, 10)
						};
					e.setTimeout(s, 10)
				},
				toggleQuality: function(a, c) {
					if (!(y !== 7 && y !== 8 || !a || a.nodeName.toUpperCase() != "IMG")) typeof c === "undefined" && (c = a.style.msInterpolationMode === "nearest-neighbor"), a.style.msInterpolationMode = c ? "bicubic" : "nearest-neighbor"
				},
				insertStyleTag: function(a) {
					var c = l.createElement("style");
					O().head.appendChild(c);
					c.styleSheet ? c.styleSheet.cssText = a : (a = l.createTextNode(a), c.appendChild(a))
				},
				loadScript: function(a, c) {
					var i = !1,
						e = d("<script>").attr({
							src: a,
							async: !0
						}).get(0);
					e.onload = e.onreadystatechange = function() {
						if (!i && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) i = !0, e.onload = e.onreadystatechange = null, typeof c === "function" && c.call(this, this)
					};
					O().head.appendChild(e)
				},
				parseValue: function(a) {
					return typeof a === "number" ? a : typeof a === "string" ? (a = a.match(/\-?\d|\./g)) && a.constructor === Array ? a.join("") * 1 : 0 : 0
				},
				timestamp: function() {
					return (new Date).getTime()
				},
				loadCSS: function(a, c, i) {
					var e, s;
					d("link[rel=stylesheet]").each(function() {
						if (RegExp(a).test(this.href)) return e = this, !1
					});
					typeof c === "function" && (i = c, c = void 0);
					i = i || D;
					if (e) return i.call(e, e), e;
					s = l.styleSheets.length;
					if (d("#" + c).length) d("#" + c).attr("href", a), s--;
					else if (e = d("<link>").attr({
						rel: "stylesheet",
						href: a,
						id: c
					}).get(0), c = d('link[rel="stylesheet"], style'), c.length ? c.get(0).parentNode.insertBefore(e, c[0]) : O().head.appendChild(e), y && s >= 31) {
						Galleria.raise("You have reached the browser stylesheet limit (31)", !0);
						return
					}
					if (typeof i === "function") {
						var u = d("<s>").attr("id", "galleria-loader").hide().appendTo(O().body);
						k.wait({
							until: function() {
								return u.height() == 1
							},
							success: function() {
								u.remove();
								i.call(e, e)
							},
							error: function() {
								u.remove();
								Galleria.raise("Theme CSS could not load after 20 sec. Please download the latest theme at http://galleria.io/customer/", !0)
							},
							timeout: 2E4
						})
					}
					return e
				}
			}
		}(),
		Z = function() {
			var a = function(a, e, j, s) {
					var u = this.getOptions("easing"),
						n = this.getStageWidth(),
						o = {
							left: n * (a.rewind ? -1 : 1)
						},
						l = {
							left: 0
						};
					j ? (o.opacity = 0, l.opacity = 1) : o.opacity = 1;
					d(a.next).css(o);
					k.animate(a.next, l, {
						duration: a.speed,
						complete: function(a) {
							return function() {
								e();
								a.css({
									left: 0
								})
							}
						}(d(a.next).add(a.prev)),
						queue: !1,
						easing: u
					});
					if (s) a.rewind = !a.rewind;
					if (a.prev) {
						o = {
							left: 0
						};
						l = {
							left: n * (a.rewind ? 1 : -1)
						};
						if (j) o.opacity = 1, l.opacity = 0;
						d(a.prev).css(o);
						k.animate(a.prev, l, {
							duration: a.speed,
							queue: !1,
							easing: u,
							complete: function() {
								d(this).css("opacity", 0)
							}
						})
					}
				};
			return {
				active: !1,
				init: function(a, d, e) {
					Z.effects.hasOwnProperty(a) && Z.effects[a].call(this, d, e)
				},
				effects: {
					fade: function(a, e) {
						d(a.next).css({
							opacity: 0,
							left: 0
						}).show();
						k.animate(a.next, {
							opacity: 1
						}, {
							duration: a.speed,
							complete: e
						});
						a.prev && (d(a.prev).css("opacity", 1).show(), k.animate(a.prev, {
							opacity: 0
						}, {
							duration: a.speed
						}))
					},
					flash: function(a, e) {
						d(a.next).css({
							opacity: 0,
							left: 0
						});
						a.prev ? k.animate(a.prev, {
							opacity: 0
						}, {
							duration: a.speed / 2,
							complete: function() {
								k.animate(a.next, {
									opacity: 1
								}, {
									duration: a.speed,
									complete: e
								})
							}
						}) : k.animate(a.next, {
							opacity: 1
						}, {
							duration: a.speed,
							complete: e
						})
					},
					pulse: function(a, e) {
						a.prev && d(a.prev).hide();
						d(a.next).css({
							opacity: 0,
							left: 0
						}).show();
						k.animate(a.next, {
							opacity: 1
						}, {
							duration: a.speed,
							complete: e
						})
					},
					slide: function() {
						a.apply(this, k.array(arguments))
					},
					fadeslide: function() {
						a.apply(this, k.array(arguments).concat([!0]))
					},
					doorslide: function() {
						a.apply(this, k.array(arguments).concat([!1, !0]))
					}
				}
			}
		}();
	L.listen();
	Galleria = function() {
		var a = this;
		this._options = {};
		this._playing = !1;
		this._playtime = 5E3;
		this._active = null;
		this._queue = {
			length: 0
		};
		this._data = [];
		this._dom = {};
		this._thumbnails = [];
		this._layers = [];
		this._firstrun = this._initialized = !1;
		this._stageHeight = this._stageWidth = 0;
		this._target = void 0;
		this._binds = [];
		this._id = parseInt(Math.random() * 1E4, 10);
		d.each("container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip".split(" "), function(c, d) {
			a._dom[d] = k.create("galleria-" + d)
		});
		d.each("current total".split(" "), function(c, d) {
			a._dom[d] = k.create("galleria-" + d, "span")
		});
		var c = this._keyboard = {
			keys: {
				UP: 38,
				DOWN: 40,
				LEFT: 37,
				RIGHT: 39,
				RETURN: 13,
				ESCAPE: 27,
				BACKSPACE: 8,
				SPACE: 32
			},
			map: {},
			bound: !1,
			press: function(d) {
				var e = d.keyCode || d.which;
				e in c.map && typeof c.map[e] === "function" && c.map[e].call(a, d)
			},
			attach: function(a) {
				var d, e;
				for (d in a) a.hasOwnProperty(d) && (e = d.toUpperCase(), e in c.keys ? c.map[c.keys[e]] = a[d] : c.map[e] = a[d]);
				if (!c.bound) c.bound = !0, E.bind("keydown", c.press)
			},
			detach: function() {
				c.bound = !1;
				c.map = {};
				E.unbind("keydown", c.press)
			}
		},
			i = this._controls = {
				0: void 0,
				1: void 0,
				active: 0,
				swap: function() {
					i.active = i.active ? 0 : 1
				},
				getActive: function() {
					return i[i.active]
				},
				getNext: function() {
					return i[1 - i.active]
				}
			},
			j = this._carousel = {
				next: a.$("thumb-nav-right"),
				prev: a.$("thumb-nav-left"),
				width: 0,
				current: 0,
				max: 0,
				hooks: [],
				update: function() {
					var c = 0,
						e = 0,
						i = [0];
					d.each(a._thumbnails, function(a, j) {
						j.ready && (c += j.outerWidth || d(j.container).outerWidth(!0), i[a + 1] = c, e = Math.max(e, j.outerHeight || d(j.container).outerHeight(!0)))
					});
					a.$("thumbnails").css({
						width: c,
						height: e
					});
					j.max = c;
					j.hooks = i;
					j.width = a.$("thumbnails-list").width();
					j.setClasses();
					a.$("thumbnails-container").toggleClass("galleria-carousel", c > j.width);
					j.width = a.$("thumbnails-list").width()
				},
				bindControls: function() {
					var c;
					j.next.bind("click", function(d) {
						d.preventDefault();
						if (a._options.carouselSteps === "auto") for (c = j.current; c < j.hooks.length; c++) {
							if (j.hooks[c] - j.hooks[j.current] > j.width) {
								j.set(c - 2);
								break
							}
						} else j.set(j.current + a._options.carouselSteps)
					});
					j.prev.bind("click", function(d) {
						d.preventDefault();
						if (a._options.carouselSteps === "auto") for (c = j.current; c >= 0; c--) if (j.hooks[j.current] - j.hooks[c] > j.width) {
							j.set(c + 2);
							break
						} else {
							if (c === 0) {
								j.set(0);
								break
							}
						} else j.set(j.current - a._options.carouselSteps)
					})
				},
				set: function(a) {
					for (a = Math.max(a, 0); j.hooks[a - 1] + j.width >= j.max && a >= 0;) a--;
					j.current = a;
					j.animate()
				},
				getLast: function(a) {
					return (a || j.current) - 1
				},
				follow: function(a) {
					if (a === 0 || a === j.hooks.length - 2) j.set(a);
					else {
						for (var c = j.current; j.hooks[c] - j.hooks[j.current] < j.width && c <= j.hooks.length;) c++;
						a - 1 < j.current ? j.set(a - 1) : a + 2 > c && j.set(a - c + j.current + 2)
					}
				},
				setClasses: function() {
					j.prev.toggleClass("disabled", !j.current);
					j.next.toggleClass("disabled", j.hooks[j.current] + j.width >= j.max)
				},
				animate: function() {
					j.setClasses();
					var c = j.hooks[j.current] * -1;
					isNaN(c) || k.animate(a.get("thumbnails"), {
						left: c
					}, {
						duration: a._options.carouselSpeed,
						easing: a._options.easing,
						queue: !1
					})
				}
			},
			s = this._tooltip = {
				initialized: !1,
				open: !1,
				timer: "tooltip" + a._id,
				swapTimer: "swap" + a._id,
				init: function() {
					s.initialized = !0;
					k.insertStyleTag(".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}");
					a.$("tooltip").css({
						opacity: 0.8,
						visibility: "visible",
						display: "none"
					})
				},
				move: function(c) {
					var d = a.getMousePosition(c).x,
						c = a.getMousePosition(c).y,
						e = a.$("tooltip"),
						i = c,
						j = e.outerHeight(!0) + 1,
						k = e.outerWidth(!0),
						n = j + 15,
						k = a.$("container").width() - k - 2,
						j = a.$("container").height() - j - 2;
					!isNaN(d) && !isNaN(i) && (d += 10, i -= 30, d = Math.max(0, Math.min(k, d)), i = Math.max(0, Math.min(j, i)), c < n && (i = n), e.css({
						left: d,
						top: i
					}))
				},
				bind: function(c, e) {
					if (!Galleria.TOUCH) {
						s.initialized || s.init();
						var i = function() {
								a.$("container").unbind("mousemove", s.move);
								a.clearTimer(s.timer);
								a.$("tooltip").stop().animate({
									opacity: 0
								}, 200, function() {
									a.$("tooltip").hide();
									a.addTimer(s.swapTimer, function() {
										s.open = !1
									}, 1E3)
								})
							},
							j = function(c, e) {
								s.define(c, e);
								d(c).hover(function() {
									a.clearTimer(s.swapTimer);
									a.$("container").unbind("mousemove", s.move).bind("mousemove", s.move).trigger("mousemove");
									s.show(c);
									a.addTimer(s.timer, function() {
										a.$("tooltip").stop().show().animate({
											opacity: 1
										});
										s.open = !0
									}, s.open ? 0 : 500)
								}, i).click(i)
							};
						typeof e === "string" ? j(c in a._dom ? a.get(c) : c, e) : d.each(c, function(c, d) {
							j(a.get(c), d)
						})
					}
				},
				show: function(c) {
					var c = d(c in a._dom ? a.get(c) : c),
						i = c.data("tt"),
						j = function(a) {
							e.setTimeout(function(a) {
								return function() {
									s.move(a)
								}
							}(a), 10);
							c.unbind("mouseup", j)
						};
					if (i = typeof i === "function" ? i() : i) a.$("tooltip").html(i.replace(/\s/, "&nbsp;")), c.bind("mouseup", j)
				},
				define: function(c, e) {
					if (typeof e !== "function") var i = e,
						e = function() {
							return i
						};
					c = d(c in a._dom ? a.get(c) : c).data("tt", e);
					s.show(c)
				}
			},
			u = this._fullscreen = {
				scrolled: 0,
				crop: void 0,
				transition: void 0,
				active: !1,
				keymap: a._keyboard.map,
				parseCallback: function(c, e) {
					return Z.active ?
					function() {
						typeof c == "function" && c();
						var i = a._controls.getActive(),
							j = a._controls.getNext();
						a._scaleImage(j);
						a._scaleImage(i);
						e && a._options.trueFullscreen && d(i.container).add(j.container).trigger("transitionend")
					} : c
				},
				enter: function(c) {
					c = u.parseCallback(c, !0);
					a._options.trueFullscreen && L.support ? L.enter(a, c) : u._enter(c)
				},
				_enter: function(c) {
					u.active = !0;
					k.hide(a.getActiveImage());
					a.$("container").addClass("fullscreen");
					u.scrolled = t.scrollTop();
					k.forceStyles(a.get("container"), {
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 1E4
					});
					var e = {
						height: "100%",
						overflow: "hidden",
						margin: 0,
						padding: 0
					},
						i = a.getData(),
						j = a._options;
					k.forceStyles(O().html, e);
					k.forceStyles(O().body, e);
					u.keymap = d.extend({}, a._keyboard.map);
					a.attachKeyboard({
						escape: a.exitFullscreen,
						right: a.next,
						left: a.prev
					});
					u.crop = j.imageCrop;
					if (j.fullscreenCrop != void 0) j.imageCrop = j.fullscreenCrop;
					if (i && i.big && i.image !== i.big) {
						var e = new Galleria.Picture,
							n = e.isCached(i.big),
							s = a.getIndex(),
							o = a._thumbnails[s];
						a.trigger({
							type: Galleria.LOADSTART,
							cached: n,
							rewind: !1,
							index: s,
							imageTarget: a.getActiveImage(),
							thumbTarget: o,
							galleriaData: i
						});
						e.load(i.big, function(c) {
							a._scaleImage(c, {
								complete: function(c) {
									a.trigger({
										type: Galleria.LOADFINISH,
										cached: n,
										index: s,
										rewind: !1,
										imageTarget: c.image,
										thumbTarget: o
									});
									var e = a._controls.getActive().image;
									e && d(e).width(c.image.width).height(c.image.height).attr("style", d(c.image).attr("style")).attr("src", c.image.src)
								}
							})
						})
					}
					a.rescale(function() {
						a.addTimer(!1, function() {
							k.show(a.getActiveImage());
							typeof c === "function" && c.call(a)
						}, 100);
						a.trigger(Galleria.FULLSCREEN_ENTER)
					});
					t.resize(function() {
						u.scale()
					})
				},
				scale: function() {
					a.rescale()
				},
				exit: function(c) {
					c = u.parseCallback(c);
					a._options.trueFullscreen && L.support ? L.exit(c) : u._exit(c)
				},
				_exit: function(c) {
					u.active = !1;
					k.hide(a.getActiveImage());
					a.$("container").removeClass("fullscreen");
					k.revertStyles(a.get("container"), O().html, O().body);
					e.scrollTo(0, u.scrolled);
					a.detachKeyboard();
					a.attachKeyboard(u.keymap);
					a._options.imageCrop = u.crop;
					var d = a.getData().big,
						i = a._controls.getActive().image;
					!a.getData().iframe && i && d && d == i.src && e.setTimeout(function(a) {
						return function() {
							i.src = a
						}
					}(a.getData().image), 1);
					a.rescale(function() {
						a.addTimer(!1, function() {
							k.show(a.getActiveImage());
							typeof c === "function" && c.call(a);
							t.trigger("resize")
						}, 50);
						a.trigger(Galleria.FULLSCREEN_EXIT)
					});
					t.unbind("resize", u.scale)
				}
			},
			n = this._idle = {
				trunk: [],
				bound: !1,
				active: !1,
				add: function(a, c, e, i) {
					if (a) {
						n.bound || n.addEvent();
						a = d(a);
						typeof e == "boolean" && (i = e, e = {});
						var e = e || {},
							j = {},
							k;
						for (k in c) c.hasOwnProperty(k) && (j[k] = a.css(k));
						a.data("idle", {
							from: d.extend(j, e),
							to: c,
							complete: !0,
							busy: !1
						});
						i ? a.css(c) : n.addTimer();
						n.trunk.push(a)
					}
				},
				remove: function(c) {
					c = d(c);
					d.each(n.trunk, function(a, d) {
						d && d.length && !d.not(c).length && (c.css(c.data("idle").from), n.trunk.splice(a, 1))
					});
					n.trunk.length || (n.removeEvent(), a.clearTimer(n.timer))
				},
				addEvent: function() {
					n.bound = !0;
					a.$("container").bind("mousemove click", n.showAll);
					a._options.idleMode == "hover" && a.$("container").bind("mouseleave", n.hide)
				},
				removeEvent: function() {
					n.bound = !1;
					a.$("container").bind("mousemove click", n.showAll);
					a._options.idleMode == "hover" && a.$("container").unbind("mouseleave", n.hide)
				},
				addTimer: function() {
					a._options.idleMode != "hover" && a.addTimer("idle", function() {
						n.hide()
					}, a._options.idleTime)
				},
				hide: function() {
					if (a._options.idleMode && !(a.getIndex() === !1 || a.getData().iframe)) {
						a.trigger(Galleria.IDLE_ENTER);
						var c = n.trunk.length;
						d.each(n.trunk, function(d, e) {
							var i = e.data("idle");
							if (i) e.data("idle").complete = !1, k.animate(e, i.to, {
								duration: a._options.idleSpeed,
								complete: function() {
									if (d == c - 1) n.active = !1
								}
							})
						})
					}
				},
				showAll: function() {
					a.clearTimer("idle");
					d.each(n.trunk, function(a, c) {
						n.show(c)
					})
				},
				show: function(c) {
					var e = c.data("idle");
					if (!n.active || !e.busy && !e.complete) e.busy = !0, a.trigger(Galleria.IDLE_EXIT), a.clearTimer("idle"), k.animate(c, e.from, {
						duration: a._options.idleSpeed / 2,
						complete: function() {
							n.active = !0;
							d(c).data("idle").busy = !1;
							d(c).data("idle").complete = !0
						}
					});
					n.addTimer()
				}
			},
			o = this._lightbox = {
				width: 0,
				height: 0,
				initialized: !1,
				active: null,
				image: null,
				elems: {},
				keymap: !1,
				init: function() {
					a.trigger(Galleria.LIGHTBOX_OPEN);
					if (!o.initialized) {
						o.initialized = !0;
						var c = {},
							e = a._options,
							i = "",
							e = {
								overlay: "position:fixed;display:none;opacity:" + e.overlayOpacity + ";filter:alpha(opacity=" + e.overlayOpacity * 100 + ");top:0;left:0;width:100%;height:100%;background:" + e.overlayBackground + ";z-index:99990",
								box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
								shadow: "position:absolute;background:#000;width:100%;height:100%;",
								content: "position:absolute;background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",
								info: "position:absolute;bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",
								close: "position:absolute;top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",
								image: "position:absolute;top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
								prevholder: "position:absolute;width:50%;top:0;bottom:40px;cursor:pointer;",
								nextholder: "position:absolute;width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",
								prev: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",
								next: "position:absolute;top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
								title: "float:left",
								counter: "float:right;margin-left:8px;"
							},
							j = {};
						y && y > 7 && (e.nextholder += "background:#000;filter:alpha(opacity=0);", e.prevholder += "background:#000;filter:alpha(opacity=0);");
						d.each(e, function(a, c) {
							i += ".galleria-lightbox-" + a + "{" + c + "}"
						});
						i += ".galleria-lightbox-box.iframe .galleria-lightbox-prevholder,.galleria-lightbox-box.iframe .galleria-lightbox-nextholder{width:100px;height:100px;top:50%;margin-top:-70px}";
						k.insertStyleTag(i);
						d.each("overlay box content shadow title info close prevholder prev nextholder next counter image".split(" "), function(d, e) {
							a.addElement("lightbox-" + e);
							c[e] = o.elems[e] = a.get("lightbox-" + e)
						});
						o.image = new Galleria.Picture;
						d.each({
							box: "shadow content close prevholder nextholder",
							info: "title counter",
							content: "info image",
							prevholder: "prev",
							nextholder: "next"
						}, function(a, c) {
							var e = [];
							d.each(c.split(" "), function(a, c) {
								e.push("lightbox-" + c)
							});
							j["lightbox-" + a] = e
						});
						a.append(j);
						d(c.image).append(o.image.container);
						d(O().body).append(c.overlay, c.box);
						k.optimizeTouch(c.box);
						(function(a) {
							return a.hover(function() {
								d(this).css("color", "#bbb")
							}, function() {
								d(this).css("color", "#444")
							})
						})(d(c.close).bind("click", o.hide).html("&#215;"));
						d.each(["Prev", "Next"], function(a, e) {
							var i = d(c[e.toLowerCase()]).html(/v/.test(e) ? "&#8249;&nbsp;" : "&nbsp;&#8250;"),
								j = d(c[e.toLowerCase() + "holder"]);
							j.bind("click", function() {
								o["show" + e]()
							});
							y < 8 || Galleria.TOUCH ? i.show() : j.hover(function() {
								i.show()
							}, function() {
								i.stop().fadeOut(200)
							})
						});
						d(c.overlay).bind("click", o.hide);
						if (Galleria.IPAD) a._options.lightboxTransitionSpeed = 0
					}
				},
				rescale: function(c) {
					var e = Math.min(t.width() - 40, o.width),
						i = Math.min(t.height() - 60, o.height),
						i = Math.min(e / o.width, i / o.height),
						e = Math.round(o.width * i) + 40,
						i = Math.round(o.height * i) + 60,
						e = {
							width: e,
							height: i,
							"margin-top": Math.ceil(i / 2) * -1,
							"margin-left": Math.ceil(e / 2) * -1
						};
					c ? d(o.elems.box).css(e) : d(o.elems.box).animate(e, {
						duration: a._options.lightboxTransitionSpeed,
						easing: a._options.easing,
						complete: function() {
							var c = o.image,
								e = a._options.lightboxFadeSpeed;
							a.trigger({
								type: Galleria.LIGHTBOX_IMAGE,
								imageTarget: c.image
							});
							d(c.container).show();
							d(c.image).animate({
								opacity: 1
							}, e);
							k.show(o.elems.info, e)
						}
					})
				},
				hide: function() {
					o.image.image = null;
					t.unbind("resize", o.rescale);
					d(o.elems.box).hide();
					k.hide(o.elems.info);
					a.detachKeyboard();
					a.attachKeyboard(o.keymap);
					o.keymap = !1;
					k.hide(o.elems.overlay, 200, function() {
						d(this).hide().css("opacity", a._options.overlayOpacity);
						a.trigger(Galleria.LIGHTBOX_CLOSE)
					})
				},
				showNext: function() {
					o.show(a.getNext(o.active))
				},
				showPrev: function() {
					o.show(a.getPrev(o.active))
				},
				show: function(c) {
					o.active = c = typeof c === "number" ? c : a.getIndex() || 0;
					o.initialized || o.init();
					if (!o.keymap) o.keymap = d.extend({}, a._keyboard.map), a.attachKeyboard({
						escape: o.hide,
						right: o.showNext,
						left: o.showPrev
					});
					t.unbind("resize", o.rescale);
					var i = a.getData(c),
						j = a.getDataLength(),
						n = a.getNext(c),
						s, u, l;
					k.hide(o.elems.info);
					try {
						for (l = a._options.preload; l > 0; l--) u = new Galleria.Picture, s = a.getData(n), u.preload("big" in s ? s.big : s.image), n = a.getNext(n)
					} catch (q) {}
					o.image.isIframe = !! i.iframe;
					d(o.elems.box).toggleClass("iframe", !! i.iframe);
					o.image.load(i.iframe || i.big || i.image, function(a) {
						o.width = a.isIframe ? d(e).width() : a.original.width;
						o.height = a.isIframe ? d(e).height() : a.original.height;
						d(a.image).css({
							width: a.isIframe ? "100%" : "100.1%",
							height: a.isIframe ? "100%" : "100.1%",
							top: 0,
							zIndex: 99998,
							opacity: 0,
							visibility: "visible"
						});
						o.elems.title.innerHTML = i.title || "";
						o.elems.counter.innerHTML = c + 1 + " / " + j;
						t.resize(o.rescale);
						o.rescale()
					});
					d(o.elems.overlay).show().css("visibility", "visible");
					d(o.elems.box).show()
				}
			},
			l = this._timer = {
				trunk: {},
				add: function(a, c, d, i) {
					a = a || (new Date).getTime();
					i = i || !1;
					this.clear(a);
					if (i) var j = c,
						c = function() {
							j();
							l.add(a, c, d)
						};
					this.trunk[a] = e.setTimeout(c, d)
				},
				clear: function(a) {
					var c = function(a) {
							e.clearTimeout(this.trunk[a]);
							delete this.trunk[a]
						},
						d;
					if (a && a in this.trunk) c.call(this, a);
					else if (typeof a === "undefined") for (d in this.trunk) this.trunk.hasOwnProperty(d) && c.call(this, d)
				}
			};
		return this
	};
	Galleria.prototype = {
		constructor: Galleria,
		init: function(a, c) {
			c = M(c);
			this._original = {
				target: a,
				options: c,
				data: null
			};
			this._target = this._dom.target = a.nodeName ? a : d(a).get(0);
			this._original.html = this._target.innerHTML;
			X.push(this);
			if (this._target) {
				this._options = {
					autoplay: !1,
					carousel: !0,
					carouselFollow: !0,
					carouselSpeed: 400,
					carouselSteps: "auto",
					clicknext: !1,
					dailymotion: {
						foreground: "%23EEEEEE",
						highlight: "%235BCEC5",
						background: "%23222222",
						logo: 0,
						hideInfos: 1
					},
					dataConfig: function() {
						return {}
					},
					dataSelector: "img",
					dataSort: !1,
					dataSource: this._target,
					debug: void 0,
					dummy: void 0,
					easing: "galleria",
					extend: function() {},
					fullscreenCrop: void 0,
					fullscreenDoubleTap: !0,
					fullscreenTransition: void 0,
					height: 0,
					idleMode: !0,
					idleTime: 3E3,
					idleSpeed: 200,
					imageCrop: !1,
					imageMargin: 0,
					imagePan: !1,
					imagePanSmoothness: 12,
					imagePosition: "50%",
					imageTimeout: void 0,
					initialTransition: void 0,
					keepSource: !1,
					layerFollow: !0,
					lightbox: !1,
					lightboxFadeSpeed: 200,
					lightboxTransitionSpeed: 200,
					linkSourceImages: !0,
					maxScaleRatio: void 0,
					minScaleRatio: void 0,
					overlayOpacity: 0.85,
					overlayBackground: "#0b0b0b",
					pauseOnInteraction: !0,
					popupLinks: !1,
					preload: 2,
					queue: !0,
					responsive: !0,
					show: 0,
					showInfo: !0,
					showCounter: !0,
					showImagenav: !0,
					swipe: !0,
					thumbCrop: !0,
					thumbEventType: "click",
					thumbFit: !0,
					thumbMargin: 0,
					thumbQuality: "auto",
					thumbDisplayOrder: !0,
					thumbnails: !0,
					touchTransition: void 0,
					transition: "fade",
					transitionInitial: void 0,
					transitionSpeed: 400,
					trueFullscreen: !0,
					useCanvas: !1,
					vimeo: {
						title: 0,
						byline: 0,
						portrait: 0,
						color: "aaaaaa"
					},
					wait: 5E3,
					width: "auto",
					youtube: {
						modestbranding: 1,
						autohide: 1,
						color: "white",
						hd: 1,
						rel: 0,
						showinfo: 0
					}
				};
				this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial;
				c && c.debug === !1 && (q = !1);
				if (c && typeof c.dummy === "string") F = c.dummy;
				d(this._target).children().hide();
				typeof Galleria.theme === "object" ? this._init() : la.push(this);
				return this
			} else Galleria.raise("Target not found", !0)
		},
		_init: function() {
			var a = this,
				c = this._options;
			if (this._initialized) return Galleria.raise("Init failed: Gallery instance already initialized."), this;
			this._initialized = !0;
			if (!Galleria.theme) return Galleria.raise("Init failed: No theme found.", !0), this;
			d.extend(!0, c, Galleria.theme.defaults, this._original.options, Galleria.configure.options);
			(function(a) {
				"getContext" in a && (R = R || {
					elem: a,
					context: a.getContext("2d"),
					cache: {},
					length: 0
				})
			})(l.createElement("canvas"));
			this.bind(Galleria.DATA, function() {
				Galleria.QUIRK && Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML.");
				this._original.data = this._data;
				this.get("total").innerHTML = this.getDataLength();
				var c = this.$("container");
				if (a._options.height < 2) a._ratio = a._options.height;
				var d = {
					width: 0,
					height: 0
				},
					i = function() {
						return a.$("stage").height()
					};
				k.wait({
					until: function() {
						d = a._getWH();
						c.width(d.width).height(d.height);
						return i() && d.width && d.height > 50
					},
					success: function() {
						a._width = d.width;
						a._height = d.height;
						a._ratio = a._ratio || d.height / d.width;
						Galleria.WEBKIT ? e.setTimeout(function() {
							a._run()
						}, 1) : a._run()
					},
					error: function() {
						i() ? Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + d.width + "px, height: " + d.height + "px.", !0) : Galleria.raise("Could not extract a stage height from the CSS. Traced height: " + i() + "px.", !0)
					},
					timeout: typeof this._options.wait == "number" ? this._options.wait : !1
				})
			});
			this.append({
				"info-text": ["info-title", "info-description"],
				info: ["info-text"],
				"image-nav": ["image-nav-right", "image-nav-left"],
				stage: ["images", "loader", "counter", "image-nav"],
				"thumbnails-list": ["thumbnails"],
				"thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"],
				container: ["stage", "thumbnails-container", "info", "tooltip"]
			});
			k.hide(this.$("counter").append(this.get("current"), l.createTextNode(" / "), this.get("total")));
			this.setCounter("&#8211;");
			k.hide(a.get("tooltip"));
			this.$("container").addClass(Galleria.TOUCH ? "touch" : "notouch");
			d.each(Array(2), function(c) {
				var e = new Galleria.Picture;
				d(e.container).css({
					position: "absolute",
					top: 0,
					left: 0
				}).prepend(a._layers[c] = d(k.create("galleria-layer")).css({
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 2
				})[0]);
				a.$("images").append(e.container);
				a._controls[c] = e
			});
			this.$("images").css({
				position: "relative",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%"
			});
			this.$("thumbnails, thumbnails-list").css({
				overflow: "hidden",
				position: "relative"
			});
			this.$("image-nav-right, image-nav-left").bind("click", function(d) {
				c.clicknext && d.stopPropagation();
				c.pauseOnInteraction && a.pause();
				d = /right/.test(this.className) ? "next" : "prev";
				a[d]()
			});
			d.each(["info", "counter", "image-nav"], function(d, e) {
				c["show" + e.substr(0, 1).toUpperCase() + e.substr(1).replace(/-/, "")] === !1 && k.moveOut(a.get(e.toLowerCase()))
			});
			this.load();
			if (!c.keepSource && !y) this._target.innerHTML = "";
			this.get("errors") && this.appendChild("target", "errors");
			this.appendChild("target", "container");
			if (c.carousel) {
				var i = 0,
					j = c.show;
				this.bind(Galleria.THUMBNAIL, function() {
					this.updateCarousel();
					++i == this.getDataLength() && typeof j == "number" && j > 0 && this._carousel.follow(j)
				})
			}
			c.responsive && t.bind("resize", function() {
				a.isFullscreen() || a.resize()
			});
			c.swipe && (function(c) {
				var d = [0, 0],
					e = [0, 0],
					i = !1,
					j = 0,
					p, l = {
						start: "touchstart",
						move: "touchmove",
						stop: "touchend"
					},
					q = function(a) {
						a.originalEvent.touches && a.originalEvent.touches.length > 1 || (p = a.originalEvent.touches ? a.originalEvent.touches[0] : a, e = [p.pageX, p.pageY], d[0] || (d = e), Math.abs(d[0] - e[0]) > 10 && a.preventDefault())
					},
					x = function(p) {
						c.unbind(l.move, q);
						p.originalEvent.touches && p.originalEvent.touches.length || i ? i = !i : (k.timestamp() - j < 1E3 && Math.abs(d[0] - e[0]) > 30 && Math.abs(d[1] - e[1]) < 100 && (p.preventDefault(), a[d[0] > e[0] ? "next" : "prev"]()), d = e = [0, 0])
					};
				c.bind(l.start, function(a) {
					a.originalEvent.touches && a.originalEvent.touches.length > 1 || (p = a.originalEvent.touches ? a.originalEvent.touches[0] : a, j = k.timestamp(), d = e = [p.pageX, p.pageY], c.bind(l.move, q).one(l.stop, x))
				})
			}(a.$("images")), c.fullscreenDoubleTap && this.$("stage").bind("touchstart", function() {
				var c, d, e, i, j, k;
				return function(l) {
					k = Galleria.utils.timestamp();
					d = (l.originalEvent.touches ? l.originalEvent.touches[0] : l).pageX;
					e = (l.originalEvent.touches ? l.originalEvent.touches[0] : l).pageY;
					k - c < 500 && d - i < 20 && e - j < 20 ? (a.toggleFullscreen(), l.preventDefault(), a.$("stage").unbind("touchend", arguments.callee)) : (c = k, i = d, j = e)
				}
			}()));
			k.optimizeTouch(this.get("container"));
			d.each(Galleria.on.binds, function(c, e) {
				d.inArray(e.hash, a._binds) == -1 && a.bind(e.type, e.callback)
			});
			return this
		},
		addTimer: function() {
			this._timer.add.apply(this._timer, k.array(arguments));
			return this
		},
		clearTimer: function() {
			this._timer.clear.apply(this._timer, k.array(arguments));
			return this
		},
		_getWH: function() {
			var a = this.$("container"),
				c = this.$("target"),
				e = this,
				j = {},
				s;
			d.each(["width", "height"], function(d, n) {
				e._options[n] && typeof e._options[n] === "number" ? j[n] = e._options[n] : (s = [k.parseValue(a.css(n)), k.parseValue(c.css(n)), a[n](), c[n]()], e["_" + n] || s.splice(s.length, k.parseValue(a.css("min-" + n)), k.parseValue(c.css("min-" + n))), j[n] = Math.max.apply(Math, s))
			});
			if (e._ratio) j.height = j.width * e._ratio;
			return j
		},
		_createThumbnails: function(a) {
			this.get("total").innerHTML = this.getDataLength();
			var c, i, j, s, u = this,
				n = this._options,
				o = a ? this._data.length - a.length : 0,
				q = o,
				p = [],
				r = 0,
				x = y < 8 ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",
				v = function() {
					var a = u.$("thumbnails").find(".active");
					if (!a.length) return !1;
					return a.find("img").attr("src")
				}(),
				z = typeof n.thumbnails === "string" ? n.thumbnails.toLowerCase() : null,
				A = function(a) {
					return l.defaultView && l.defaultView.getComputedStyle ? l.defaultView.getComputedStyle(c.container, null)[a] : s.css(a)
				},
				t = function(a, c, e) {
					return function() {
						d(e).append(a);
						u.trigger({
							type: Galleria.THUMBNAIL,
							thumbTarget: a,
							index: c,
							galleriaData: u.getData(c)
						})
					}
				},
				C = function(a) {
					n.pauseOnInteraction && u.pause();
					var c = d(a.currentTarget).data("index");
					u.getIndex() !== c && u.show(c);
					a.preventDefault()
				},
				F = function(a, c) {
					d(a.container).css("visibility", "visible");
					u.trigger({
						type: Galleria.THUMBNAIL,
						thumbTarget: a.image,
						index: a.data.order,
						galleriaData: u.getData(a.data.order)
					});
					typeof c == "function" && c.call(u, a)
				},
				I = function(a, c) {
					a.scale({
						width: a.data.width,
						height: a.data.height,
						crop: n.thumbCrop,
						margin: n.thumbMargin,
						canvas: n.useCanvas,
						complete: function(a) {
							var e = ["left", "top"],
								i, j, o = u.getData(a.index),
								s = o.thumb.split(":");
							d.each(["Width", "Height"], function(c, k) {
								i = k.toLowerCase();
								if ((n.thumbCrop !== !0 || n.thumbCrop === i) && n.thumbFit) j = {}, j[i] = a[i], d(a.container).css(j), j = {}, j[e[c]] = 0, d(a.image).css(j);
								a["outer" + k] = d(a.container)["outer" + k](!0)
							});
							k.toggleQuality(a.image, n.thumbQuality === !0 || n.thumbQuality === "auto" && a.original.width < a.width * 3);
							o.iframe && s.length == 2 && s[0] in P ? P[s[0]].getThumb(s[1], function(d) {
								return function(e) {
									d.src = e;
									F(a, c)
								}
							}(a.image)) : n.thumbDisplayOrder && !a.lazy ? d.each(p, function(a, d) {
								if (a === r && d.ready && !d.displayed) r++, d.displayed = !0, F(d, c)
							}) : F(a, c)
						}
					})
				};
			if (!a) this._thumbnails = [], this.$("thumbnails").empty();
			for (; this._data[o]; o++) i = this._data[o], a = i.thumb || i.image, (n.thumbnails === !0 || z == "lazy") && (i.thumb || i.image) ? (c = new Galleria.Picture(o), c.index = o, c.displayed = !1, c.lazy = !1, c.video = !1, this.$("thumbnails").append(c.container), s = d(c.container), s.css("visibility", "hidden"), c.data = {
				width: k.parseValue(A("width")),
				height: k.parseValue(A("height")),
				order: o,
				src: a
			}, n.thumbFit && n.thumbCrop !== !0 ? s.css({
				width: "auto",
				height: "auto"
			}) : s.css({
				width: c.data.width,
				height: c.data.height
			}), j = a.split(":"), j.length == 2 && j[0] in P ? (c.video = !0, c.ready = !0, c.load(x, {
				height: c.data.height,
				width: c.data.height * 1.25
			}, I)) : z == "lazy" ? (s.addClass("lazy"), c.lazy = !0, c.load(x, {
				height: c.data.height,
				width: c.data.width
			})) : c.load(a, I), n.preload === "all" && c.preload(i.image)) : i.iframe || z === "empty" || z === "numbers" ? (c = {
				container: k.create("galleria-image"),
				image: k.create("img", "span"),
				ready: !0
			}, z === "numbers" && d(c.image).text(o + 1), i.iframe && d(c.image).addClass("iframe"), this.$("thumbnails").append(c.container), e.setTimeout(t(c.image, o, c.container), 50 + o * 20)) : c = {
				container: null,
				image: null
			}, d(c.container).add(n.keepSource && n.linkSourceImages ? i.original : null).data("index", o).bind(n.thumbEventType, C).data("thumbload", I), v === a && d(c.container).addClass("active"), this._thumbnails.push(c);
			p = this._thumbnails.slice(q);
			return this
		},
		lazyLoad: function(a, c) {
			var e = a.constructor == Array ? a : [a],
				j = this;
			this.$("thumbnails").children().filter(function() {
				return d(this).data("lazy-src")
			});
			var k = 0;
			d.each(e, function(a, n) {
				if (!(n > j._thumbnails.length - 1)) {
					var o = j._thumbnails[n],
						l = o.data;
					l.src.split(":");
					var p = function() {
							++k == e.length && typeof c == "function" && c.call(j)
						},
						r = d(o.container).data("thumbload");
					o.video ? r.call(j, o, p) : o.load(l.src, function(a) {
						r.call(j, a, p)
					})
				}
			});
			return this
		},
		lazyLoadChunks: function(a, c) {
			for (var d = this.getDataLength(), j = 0, k = 0, l = [], n = [], o = this, c = c || 0; j < d; j++) if (n.push(j), ++k == a || j == d - 1) l.push(n), k = 0, n = [];
			var q = function(a) {
					var d = l.shift();
					d && e.setTimeout(function() {
						o.lazyLoad(d, function() {
							q(!0)
						})
					}, c && a ? c : 0)
				};
			q(!1);
			return this
		},
		_run: function() {
			var a = this;
			a._createThumbnails();
			k.wait({
				timeout: 1E4,
				until: function() {
					Galleria.OPERA && a.$("stage").css("display", "inline-block");
					a._stageWidth = a.$("stage").width();
					a._stageHeight = a.$("stage").height();
					return a._stageWidth && a._stageHeight > 50
				},
				success: function() {
					W.push(a);
					k.show(a.get("counter"));
					a._options.carousel && a._carousel.bindControls();
					if (a._options.autoplay) {
						a.pause();
						if (typeof a._options.autoplay === "number") a._playtime = a._options.autoplay;
						a._playing = !0
					}
					a._firstrun ? (a._options.autoplay && a.trigger(Galleria.PLAY), typeof a._options.show === "number" && a.show(a._options.show)) : (a._firstrun = !0, Galleria.History && Galleria.History.change(function(c) {
						isNaN(c) ? e.history.go(-1) : a.show(c, void 0, !0)
					}), a.trigger(Galleria.READY), Galleria.theme.init.call(a, a._options), d.each(Galleria.ready.callbacks, function(c, d) {
						typeof d == "function" && d.call(a, a._options)
					}), a._options.extend.call(a, a._options), /^[0-9]{1,4}$/.test(C) && Galleria.History ? a.show(C, void 0, !0) : a._data[a._options.show] && a.show(a._options.show), a._options.autoplay && a.trigger(Galleria.PLAY))
				},
				error: function() {
					Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:" + a._stageWidth + "px, height: " + a._stageHeight + "px.", !0)
				}
			})
		},
		load: function(a, c, e) {
			var j = this,
				k = this._options;
			this._data = [];
			this._thumbnails = [];
			this.$("thumbnails").empty();
			typeof c === "function" && (e = c, c = null);
			a = a || k.dataSource;
			c = c || k.dataSelector;
			e = e || k.dataConfig;
			/^function Object/.test(a.constructor) && (a = [a]);
			a.constructor === Array ? this.validate(a) ? this._data = a : Galleria.raise("Load failed: JSON Array not valid.") : (c += ",.video,.iframe", d(a).find(c).each(function(a, c) {
				var c = d(c),
					k = {},
					s = c.parent(),
					l = s.attr("href"),
					s = s.attr("rel");
				l && (c[0].nodeName == "IMG" || c.hasClass("video")) && Q(l) ? k.video = l : l && c.hasClass("iframe") ? k.iframe = l : k.image = k.big = l;
				if (s) k.big = s;
				d.each("big title description link layer".split(" "), function(a, d) {
					c.data(d) && (k[d] = c.data(d))
				});
				j._data.push(d.extend({
					title: c.attr("title") || "",
					thumb: c.attr("src"),
					image: c.attr("src"),
					big: c.attr("src"),
					description: c.attr("alt") || "",
					link: c.attr("longdesc"),
					original: c.get(0)
				}, k, e(c)))
			}));
			typeof k.dataSort == "function" ? v.sort.call(this._data, k.dataSort) : k.dataSort == "random" && this._data.sort(function() {
				return Math.round(Math.random()) - 0.5
			});
			this.getDataLength() && this._parseData().trigger(Galleria.DATA);
			return this
		},
		_parseData: function() {
			var a = this,
				c;
			d.each(this._data, function(e, j) {
				c = a._data[e];
				if ("thumb" in j === !1) c.thumb = j.image;
				if (!1 in j) c.big = j.image;
				if ("video" in j) {
					var k = Q(j.video);
					if (k && (c.iframe = P[k.provider].embed(k.id) +
					function() {
						if (typeof a._options[k.provider] == "object") {
							var c = [];
							d.each(a._options[k.provider], function(a, d) {
								c.push(a + "=" + d)
							});
							k.provider == "youtube" && (c = ["wmode=opaque"].concat(c));
							return "?" + c.join("&")
						}
						return ""
					}(), delete c.video, !("thumb" in c) || !c.thumb)) c.thumb = k.provider + ":" + k.id
				}
			});
			return this
		},
		destroy: function() {
			this.get("target").innerHTML = this._original.html;
			this.clearTimer();
			return this
		},
		splice: function() {
			var a = this,
				c = k.array(arguments);
			e.setTimeout(function() {
				v.splice.apply(a._data, c);
				a._parseData()._createThumbnails()
			}, 2);
			return a
		},
		push: function() {
			var a = this,
				c = k.array(arguments);
			c.length == 1 && c[0].constructor == Array && (c = c[0]);
			e.setTimeout(function() {
				v.push.apply(a._data, c);
				a._parseData()._createThumbnails(c)
			}, 2);
			return a
		},
		_getActive: function() {
			return this._controls.getActive()
		},
		validate: function() {
			return !0
		},
		bind: function(a, c) {
			a = U(a);
			this.$("container").bind(a, this.proxy(c));
			return this
		},
		unbind: function(a) {
			a = U(a);
			this.$("container").unbind(a);
			return this
		},
		trigger: function(a) {
			a = typeof a === "object" ? d.extend(a, {
				scope: this
			}) : {
				type: U(a),
				scope: this
			};
			this.$("container").trigger(a);
			return this
		},
		addIdleState: function() {
			this._idle.add.apply(this._idle, k.array(arguments));
			return this
		},
		removeIdleState: function() {
			this._idle.remove.apply(this._idle, k.array(arguments));
			return this
		},
		enterIdleMode: function() {
			this._idle.hide();
			return this
		},
		exitIdleMode: function() {
			this._idle.showAll();
			return this
		},
		enterFullscreen: function() {
			this._fullscreen.enter.apply(this, k.array(arguments));
			return this
		},
		exitFullscreen: function() {
			this._fullscreen.exit.apply(this, k.array(arguments));
			return this
		},
		toggleFullscreen: function() {
			this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this, k.array(arguments));
			return this
		},
		bindTooltip: function() {
			this._tooltip.bind.apply(this._tooltip, k.array(arguments));
			return this
		},
		defineTooltip: function() {
			this._tooltip.define.apply(this._tooltip, k.array(arguments));
			return this
		},
		refreshTooltip: function() {
			this._tooltip.show.apply(this._tooltip, k.array(arguments));
			return this
		},
		openLightbox: function() {
			this._lightbox.show.apply(this._lightbox, k.array(arguments));
			return this
		},
		closeLightbox: function() {
			this._lightbox.hide.apply(this._lightbox, k.array(arguments));
			return this
		},
		getActiveImage: function() {
			return this._getActive().image || void 0
		},
		getActiveThumb: function() {
			return this._thumbnails[this._active].image || void 0
		},
		getMousePosition: function(a) {
			return {
				x: a.pageX - this.$("container").offset().left,
				y: a.pageY - this.$("container").offset().top
			}
		},
		addPan: function(a) {
			if (this._options.imageCrop !== !1) {
				var a = d(a || this.getActiveImage()),
					c = this,
					e = a.width() / 2,
					j = a.height() / 2,
					s = parseInt(a.css("left"), 10),
					l = parseInt(a.css("top"), 10),
					n = s || 0,
					o = l || 0,
					q = 0,
					p = 0,
					r = !1,
					x = k.timestamp(),
					z = 0,
					v = 0,
					A = function(c, d, e) {
						if (c > 0 && (v = Math.round(Math.max(c * -1, Math.min(0, d))), z !== v)) if (z = v, y === 8) a.parent()["scroll" + e](v * -1);
						else c = {}, c[e.toLowerCase()] = v, a.css(c)
					},
					t = function(a) {
						if (!(k.timestamp() - x < 50)) r = !0, e = c.getMousePosition(a).x, j = c.getMousePosition(a).y
					};
				y === 8 && (a.parent().scrollTop(o * -1).scrollLeft(n * -1), a.css({
					top: 0,
					left: 0
				}));
				this.$("stage").unbind("mousemove", t).bind("mousemove", t);
				this.addTimer("pan" + c._id, function() {
					r && (q = a.width() - c._stageWidth, p = a.height() - c._stageHeight, s = e / c._stageWidth * q * -1, l = j / c._stageHeight * p * -1, n += (s - n) / c._options.imagePanSmoothness, o += (l - o) / c._options.imagePanSmoothness, A(p, o, "Top"), A(q, n, "Left"))
				}, 50, !0);
				return this
			}
		},
		proxy: function(a, c) {
			if (typeof a !== "function") return D;
			c = c || this;
			return function() {
				return a.apply(c, k.array(arguments))
			}
		},
		removePan: function() {
			this.$("stage").unbind("mousemove");
			this.clearTimer("pan" + this._id);
			return this
		},
		addElement: function() {
			var a = this._dom;
			d.each(k.array(arguments), function(c, d) {
				a[d] = k.create("galleria-" + d)
			});
			return this
		},
		attachKeyboard: function() {
			this._keyboard.attach.apply(this._keyboard, k.array(arguments));
			return this
		},
		detachKeyboard: function() {
			this._keyboard.detach.apply(this._keyboard, k.array(arguments));
			return this
		},
		appendChild: function(a, c) {
			this.$(a).append(this.get(c) || c);
			return this
		},
		prependChild: function(a, c) {
			this.$(a).prepend(this.get(c) || c);
			return this
		},
		remove: function() {
			this.$(k.array(arguments).join(",")).remove();
			return this
		},
		append: function(a) {
			var c, d;
			for (c in a) if (a.hasOwnProperty(c)) if (a[c].constructor === Array) for (d = 0; a[c][d]; d++) this.appendChild(c, a[c][d]);
			else this.appendChild(c, a[c]);
			return this
		},
		_scaleImage: function(a, c) {
			if (a = a || this._controls.getActive()) {
				var e, j = function(a) {
						d(a.container).children(":first").css({
							top: Math.max(0, k.parseValue(a.image.style.top)),
							left: Math.max(0, k.parseValue(a.image.style.left)),
							width: k.parseValue(a.image.width),
							height: k.parseValue(a.image.height)
						})
					},
					c = d.extend({
						width: this._stageWidth,
						height: this._stageHeight,
						crop: this._options.imageCrop,
						max: this._options.maxScaleRatio,
						min: this._options.minScaleRatio,
						margin: this._options.imageMargin,
						position: this._options.imagePosition
					}, c);
				this._options.layerFollow && this._options.imageCrop !== !0 ? typeof c.complete == "function" ? (e = c.complete, c.complete = function() {
					e.call(a, a);
					j(a)
				}) : c.complete = j : d(a.container).children(":first").css({
					top: 0,
					left: 0
				});
				a.scale(c);
				return this
			}
		},
		updateCarousel: function() {
			this._carousel.update();
			return this
		},
		resize: function(a, c) {
			typeof a == "function" && (c = a, a = void 0);
			var a = d.extend({
				width: 0,
				height: 0
			}, a),
				e = this,
				j = this.$("container");
			d.each(a, function(c, d) {
				d || (j[c]("auto"), a[c] = e._getWH()[c])
			});
			d.each(a, function(a, c) {
				j[a](c)
			});
			return this.rescale(c)
		},
		rescale: function(a, c, d) {
			var e = this;
			typeof a === "function" && (d = a, a = void 0);
			(function() {
				e._stageWidth = a || e.$("stage").width();
				e._stageHeight = c || e.$("stage").height();
				e._scaleImage();
				e._options.carousel && e.updateCarousel();
				e.trigger(Galleria.RESCALE);
				typeof d === "function" && d.call(e)
			}).call(e);
			return this
		},
		refreshImage: function() {
			this._scaleImage();
			this._options.imagePan && this.addPan();
			return this
		},
		show: function(a, c, d) {
			if (!(a === !1 || !this._options.queue && this._queue.stalled)) if (a = Math.max(0, Math.min(parseInt(a, 10), this.getDataLength() - 1)), c = typeof c !== "undefined" ? !! c : a < this.getIndex(), !d && Galleria.History) Galleria.History.set(a.toString());
			else return this._active = a, v.push.call(this._queue, {
				index: a,
				rewind: c
			}), this._queue.stalled || this._show(), this
		},
		_show: function() {
			var a = this,
				c = this._queue[0],
				i = this.getData(c.index);
			if (i) {
				var j = i.iframe || (this.isFullscreen() && "big" in i ? i.big : i.image),
					l = this._controls.getActive(),
					u = this._controls.getNext(),
					n = u.isCached(j),
					o = this._thumbnails[c.index],
					q = function() {
						d(u.image).trigger("mouseup")
					},
					p = function(c, i, j, n, o) {
						return function() {
							Z.active = !1;
							a._queue.stalled = !1;
							k.toggleQuality(i.image, a._options.imageQuality);
							a._layers[a._controls.active].innerHTML = "";
							d(j.container).css({
								zIndex: 0,
								opacity: 0
							}).show();
							j.isIframe && d(j.container).find("iframe").remove();
							a.$("container").toggleClass("iframe", !! c.iframe);
							d(i.container).css({
								zIndex: 1,
								left: 0,
								top: 0
							}).show();
							a._controls.swap();
							a._options.imagePan && a.addPan(i.image);
							(c.link || a._options.lightbox || a._options.clicknext) && d(i.image).css({
								cursor: "pointer"
							}).bind("mouseup", function() {
								a._options.clicknext && !Galleria.TOUCH ? (a._options.pauseOnInteraction && a.pause(), a.next()) : c.link ? a._options.popupLinks ? e.open(c.link, "_blank") : e.location.href = c.link : a._options.lightbox && a.openLightbox()
							});
							v.shift.call(a._queue);
							a._queue.length && a._show();
							a._playCheck();
							a.trigger({
								type: Galleria.IMAGE,
								index: n.index,
								imageTarget: i.image,
								thumbTarget: o.image,
								galleriaData: c
							})
						}
					}(i, u, l, c, o);
				this._options.carousel && this._options.carouselFollow && this._carousel.follow(c.index);
				if (this._options.preload) {
					var r, x, z = this.getNext(),
						t;
					try {
						for (x = this._options.preload; x > 0; x--) r = new Galleria.Picture, t = a.getData(z), r.preload(this.isFullscreen() && "big" in t ? t.big : t.image), z = a.getNext(z)
					} catch (A) {}
				}
				k.show(u.container);
				u.isIframe = !! i.iframe;
				d(a._thumbnails[c.index].container).addClass("active").siblings(".active").removeClass("active");
				a.trigger({
					type: Galleria.LOADSTART,
					cached: n,
					index: c.index,
					rewind: c.rewind,
					imageTarget: u.image,
					thumbTarget: o.image,
					galleriaData: i
				});
				u.load(j, function(e) {
					var j = d(a._layers[1 - a._controls.active]).html(i.layer || "").hide();
					a._scaleImage(e, {
						complete: function(e) {
							"image" in l && k.toggleQuality(l.image, !1);
							k.toggleQuality(e.image, !1);
							a._queue.stalled = !0;
							a.removePan();
							a.setInfo(c.index);
							a.setCounter(c.index);
							i.layer && (j.show(), (i.link || a._options.lightbox || a._options.clicknext) && j.css("cursor", "pointer").unbind("mouseup").mouseup(q));
							a.trigger({
								type: Galleria.LOADFINISH,
								cached: n,
								index: c.index,
								rewind: c.rewind,
								imageTarget: e.image,
								thumbTarget: a._thumbnails[c.index].image,
								galleriaData: a.getData(c.index)
							});
							var o = a._options.transition;
							d.each({
								initial: l.image === null,
								touch: Galleria.TOUCH,
								fullscreen: a.isFullscreen()
							}, function(c, d) {
								if (d && a._options[c + "Transition"] !== void 0) return o = a._options[c + "Transition"], !1
							});
							o in Z.effects === !1 ? p() : (e = {
								prev: l.container,
								next: e.container,
								rewind: c.rewind,
								speed: a._options.transitionSpeed || 400
							}, Z.active = !0, Z.init.call(a, o, e, p))
						}
					})
				})
			}
		},
		getNext: function(a) {
			a = typeof a === "number" ? a : this.getIndex();
			return a === this.getDataLength() - 1 ? 0 : a + 1
		},
		getPrev: function(a) {
			a = typeof a === "number" ? a : this.getIndex();
			return a === 0 ? this.getDataLength() - 1 : a - 1
		},
		next: function() {
			this.getDataLength() > 1 && this.show(this.getNext(), !1);
			return this
		},
		prev: function() {
			this.getDataLength() > 1 && this.show(this.getPrev(), !0);
			return this
		},
		get: function(a) {
			return a in this._dom ? this._dom[a] : null
		},
		getData: function(a) {
			return a in this._data ? this._data[a] : this._data[this._active]
		},
		getDataLength: function() {
			return this._data.length
		},
		getIndex: function() {
			return typeof this._active === "number" ? this._active : !1
		},
		getStageHeight: function() {
			return this._stageHeight
		},
		getStageWidth: function() {
			return this._stageWidth
		},
		getOptions: function(a) {
			return typeof a === "undefined" ? this._options : this._options[a]
		},
		setOptions: function(a, c) {
			typeof a === "object" ? d.extend(this._options, a) : this._options[a] = c;
			return this
		},
		play: function(a) {
			this._playing = !0;
			this._playtime = a || this._playtime;
			this._playCheck();
			this.trigger(Galleria.PLAY);
			return this
		},
		pause: function() {
			this._playing = !1;
			this.trigger(Galleria.PAUSE);
			return this
		},
		playToggle: function(a) {
			return this._playing ? this.pause() : this.play(a)
		},
		isPlaying: function() {
			return this._playing
		},
		isFullscreen: function() {
			return this._fullscreen.active
		},
		_playCheck: function() {
			var a = this,
				c = 0,
				d = k.timestamp(),
				e = "play" + this._id;
			if (this._playing) {
				this.clearTimer(e);
				var l = function() {
						c = k.timestamp() - d;
						c >= a._playtime && a._playing ? (a.clearTimer(e), a.next()) : a._playing && (a.trigger({
							type: Galleria.PROGRESS,
							percent: Math.ceil(c / a._playtime * 100),
							seconds: Math.floor(c / 1E3),
							milliseconds: c
						}), a.addTimer(e, l, 20))
					};
				a.addTimer(e, l, 20)
			}
		},
		setPlaytime: function(a) {
			this._playtime = a;
			return this
		},
		setIndex: function(a) {
			this._active = a;
			return this
		},
		setCounter: function(a) {
			typeof a === "number" ? a++ : typeof a === "undefined" && (a = this.getIndex() + 1);
			this.get("current").innerHTML = a;
			if (y) {
				var a = this.$("counter"),
					c = a.css("opacity");
				parseInt(c, 10) === 1 ? k.removeAlpha(a[0]) : this.$("counter").css("opacity", c)
			}
			return this
		},
		setInfo: function(a) {
			var c = this,
				e = this.getData(a);
			d.each(["title", "description"], function(a, d) {
				var k = c.$("info-" + d);
				e[d] ? k[e[d].length ? "show" : "hide"]().html(e[d]) : k.empty().hide()
			});
			return this
		},
		hasInfo: function(a) {
			var c = "title description".split(" "),
				d;
			for (d = 0; c[d]; d++) if (this.getData(a)[c[d]]) return !0;
			return !1
		},
		jQuery: function(a) {
			var c = this,
				e = [];
			d.each(a.split(","), function(a, j) {
				j = d.trim(j);
				c.get(j) && e.push(j)
			});
			var j = d(c.get(e.shift()));
			d.each(e, function(a, d) {
				j = j.add(c.get(d))
			});
			return j
		},
		$: function() {
			return this.jQuery.apply(this, k.array(arguments))
		}
	};
	d.each(I, function(a, c) {
		var d = /_/.test(c) ? c.replace(/_/g, "") : c;
		Galleria[c.toUpperCase()] = "galleria." + d
	});
	d.extend(Galleria, {
		IE9: y === 9,
		IE8: y === 8,
		IE7: y === 7,
		IE6: y === 6,
		IE: y,
		WEBKIT: /webkit/.test(x),
		CHROME: /chrome/.test(x),
		SAFARI: /safari/.test(x) && !/chrome/.test(x),
		QUIRK: y && l.compatMode && l.compatMode === "BackCompat",
		MAC: /mac/.test(navigator.platform.toLowerCase()),
		OPERA: !! e.opera,
		IPHONE: /iphone/.test(x),
		IPAD: /ipad/.test(x),
		ANDROID: /android/.test(x),
		TOUCH: "ontouchstart" in l
	});
	Galleria.addTheme = function(a) {
		a.name || Galleria.raise("No theme name specified");
		a.defaults = typeof a.defaults !== "object" ? {} : M(a.defaults);
		var c = !1,
			i;
		typeof a.css === "string" ? (d("link").each(function(d, e) {
			i = RegExp(a.css);
			if (i.test(e.href)) return c = !0, ha(a), !1
		}), c || d("script").each(function(d, l) {
			i = RegExp("galleria\\." + a.name.toLowerCase() + "\\.");
			i.test(l.src) && (c = l.src.replace(/[^\/]*$/, "") + a.css, e.setTimeout(function() {
				k.loadCSS(c, "galleria-theme", function() {
					ha(a)
				})
			}, 1))
		}), c || Galleria.raise("No theme CSS loaded")) : ha(a);
		return a
	};
	Galleria.loadTheme = function(a, c) {
		var i = W.length,
			j = e.setTimeout(function() {
				Galleria.raise("Theme at " + a + " could not load, check theme path.", !0)
			}, 5E3);
		Galleria.theme = void 0;
		k.loadScript(a, function() {
			e.clearTimeout(j);
			if (i) {
				var a = [];
				d.each(Galleria.get(), function(e, i) {
					var j = d.extend(i._original.options, {
						data_source: i._data
					}, c);
					i.$("container").remove();
					var k = new Galleria;
					k._id = i._id;
					k.init(i._original.target, j);
					a.push(k)
				});
				W = a
			}
		});
		return Galleria
	};
	Galleria.get = function(a) {
		if (X[a]) return X[a];
		else if (typeof a !== "number") return X;
		else Galleria.raise("Gallery index " + a + " not found")
	};
	Galleria.configure = function(a, c) {
		var e = {};
		typeof a == "string" && c ? (e[a] = c, a = e) : d.extend(e, a);
		Galleria.configure.options = e;
		d.each(Galleria.get(), function(a, c) {
			c.setOptions(e)
		});
		return Galleria
	};
	Galleria.configure.options = {};
	Galleria.on = function(a, c) {
		if (a) {
			var c = c || D,
				e = a + c.toString().replace(/\s/g, "") + k.timestamp();
			d.each(Galleria.get(), function(d, k) {
				k._binds.push(e);
				k.bind(a, c)
			});
			Galleria.on.binds.push({
				type: a,
				callback: c,
				hash: e
			});
			return Galleria
		}
	};
	Galleria.on.binds = [];
	Galleria.run = function(a, c) {
		d(a || "#galleria").galleria(c);
		return Galleria
	};
	Galleria.addTransition = function(a, c) {
		Z.effects[a] = c;
		return Galleria
	};
	Galleria.utils = k;
	Galleria.log = function() {
		var a = k.array(arguments);
		if ("console" in e && "log" in e.console) try {
			return e.console.log.apply(e.console, a)
		} catch (c) {
			d.each(a, function() {
				e.console.log(this)
			})
		} else return e.alert(a.join("<br>"))
	};
	Galleria.ready = function(a) {
		if (typeof a != "function") return Galleria;
		d.each(W, function(c, d) {
			a.call(d, d._options)
		});
		Galleria.ready.callbacks.push(a);
		return Galleria
	};
	Galleria.ready.callbacks = [];
	Galleria.raise = function(a, c) {
		var e = c ? "Fatal error" : "Error",
			j = {
				color: "#fff",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: 1E5
			},
			k = function(a) {
				var k = '<div style="padding:4px;margin:0 0 2px;background:#' + (c ? "811" : "222") + '";>' + (c ? "<strong>" + e + ": </strong>" : "") + a + "</div>";
				d.each(X, function() {
					var a = this.$("errors"),
						c = this.$("target");
					a.length || (c.css("position", "relative"), a = this.addElement("errors").appendChild("target", "errors").$("errors").css(j));
					a.append(k)
				});
				X.length || d("<div>").css(d.extend(j, {
					position: "fixed"
				})).append(k).appendTo(O().body)
			};
		if (q) {
			if (k(a), c) throw Error(e + ": " + a);
		} else c && !aa && (aa = !0, c = !1, k("Gallery could not load."))
	};
	Galleria.version = 1.28;
	Galleria.requires = function(a, c) {
		Galleria.version < a && Galleria.raise(c || "You need to upgrade Galleria to version " + a + " to use one or more components.", !0);
		return Galleria
	};
	Galleria.Picture = function(a) {
		this.id = a || null;
		this.image = null;
		this.container = k.create("galleria-image");
		d(this.container).css({
			overflow: "hidden",
			position: "relative"
		});
		this.original = {
			width: 0,
			height: 0
		};
		this.isIframe = this.ready = !1
	};
	Galleria.Picture.prototype = {
		cache: {},
		show: function() {
			k.show(this.image)
		},
		hide: function() {
			k.moveOut(this.image)
		},
		clear: function() {
			this.image = null
		},
		isCached: function(a) {
			return !!this.cache[a]
		},
		preload: function(a) {
			d(new Image).load(function(a, d) {
				return function() {
					d[a] = a
				}
			}(a, this.cache)).attr("src", a)
		},
		load: function(a, c, i) {
			typeof c == "function" && (i = c, c = null);
			if (this.isIframe) {
				var j = "if" + (new Date).getTime();
				this.image = d("<iframe>", {
					src: a,
					frameborder: 0,
					id: j,
					allowfullscreen: !0,
					css: {
						visibility: "hidden"
					}
				})[0];
				d(this.container).find("iframe,img").remove();
				this.container.appendChild(this.image);
				d("#" + j).load(function(a, c) {
					return function() {
						e.setTimeout(function() {
							d(a.image).css("visibility", "visible");
							typeof c == "function" && c.call(a, a)
						}, 10)
					}
				}(this, i));
				return this.container
			}
			this.image = new Image;
			var l = !1,
				q = !1,
				j = d(this.container),
				n = d(this.image),
				o = function(a, i, j) {
					return function() {
						var k = function() {
								d(this).unbind("load");
								a.original = c || {
									height: this.height,
									width: this.width
								};
								a.container.appendChild(this);
								a.cache[j] = j;
								typeof i == "function" && e.setTimeout(function() {
									i.call(a, a)
								}, 1)
							};
						!this.width || !this.height ? e.setTimeout(function(a) {
							return function() {
								a.width && a.height ? k.call(a) : q ? Galleria.raise("Could not extract width/height from image: " + a.src + ". Traced measures: width:" + a.width + "px, height: " + a.height + "px.") : (d(new Image).load(o).attr("src", a.src), q = !0)
							}
						}(this), 2) : k.call(this)
					}
				}(this, i, a);
			j.find("iframe,img").remove();
			n.css("display", "block");
			k.hide(this.image);
			d.each("minWidth minHeight maxWidth maxHeight".split(" "), function(a, c) {
				n.css(c, /min/.test(c) ? "0" : "none")
			});
			n.load(o).error(function() {
				l ? F ? d(this).attr("src", F) : Galleria.raise("Image not found: " + a) : (l = !0, e.setTimeout(function(a, c) {
					return function() {
						a.attr("src", c + "?" + k.timestamp())
					}
				}(d(this), a), 50))
			}).attr("src", a);
			return this.container
		},
		scale: function(a) {
			var c = this,
				a = d.extend({
					width: 0,
					height: 0,
					min: void 0,
					max: void 0,
					margin: 0,
					complete: D,
					position: "center",
					crop: !1,
					canvas: !1
				}, a);
			if (this.isIframe) {
				d(this.image).width(a.width).height(a.height).removeAttr("width").removeAttr("height");
				d(this.container).width(a.width).height(a.height);
				a.complete.call(c, c);
				try {
					this.image.contentWindow && d(this.image.contentWindow).trigger("resize")
				} catch (e) {}
				return this.container
			}
			if (!this.image) return this.container;
			var j, l, q = d(c.container),
				n;
			k.wait({
				until: function() {
					j = a.width || q.width() || k.parseValue(q.css("width"));
					l = a.height || q.height() || k.parseValue(q.css("height"));
					return j && l
				},
				success: function() {
					var e = (j - a.margin * 2) / c.original.width,
						i = (l - a.margin * 2) / c.original.height,
						p = Math.min(e, i),
						r = Math.max(e, i),
						q = {
							"true": r,
							width: e,
							height: i,
							"false": p,
							landscape: c.original.width > c.original.height ? r : p,
							portrait: c.original.width < c.original.height ? r : p
						}[a.crop.toString()],
						e = "";
					a.max && (q = Math.min(a.max, q));
					a.min && (q = Math.max(a.min, q));
					d.each(["width", "height"], function(a, e) {
						d(c.image)[e](c[e] = c.image[e] = Math.round(c.original[e] * q))
					});
					d(c.container).width(j).height(l);
					if (a.canvas && R) R.elem.width = c.width, R.elem.height = c.height, e = c.image.src + ":" + c.width + "x" + c.height, c.image.src = R.cache[e] ||
					function(a) {
						R.context.drawImage(c.image, 0, 0, c.original.width * q, c.original.height * q);
						try {
							return n = R.elem.toDataURL(), R.length += n.length, R.cache[a] = n
						} catch (d) {
							return c.image.src
						}
					}(e);
					var u = {},
						x = {},
						e = function(a, e, i) {
							var j = 0;
							/\%/.test(a) ? (a = parseInt(a, 10) / 100, e = c.image[e] || d(c.image)[e](), j = Math.ceil(e * -1 * a + i * a)) : j = k.parseValue(a);
							return j
						},
						z = {
							top: {
								top: 0
							},
							left: {
								left: 0
							},
							right: {
								left: "100%"
							},
							bottom: {
								top: "100%"
							}
						};
					d.each(a.position.toLowerCase().split(" "), function(a, c) {
						c === "center" && (c = "50%");
						u[a ? "top" : "left"] = c
					});
					d.each(u, function(a, c) {
						z.hasOwnProperty(c) && d.extend(x, z[c])
					});
					u = u.top ? d.extend(u, x) : x;
					u = d.extend({
						top: "50%",
						left: "50%"
					}, u);
					d(c.image).css({
						position: "absolute",
						top: e(u.top, "height", l),
						left: e(u.left, "width", j)
					});
					c.show();
					c.ready = !0;
					a.complete.call(c, c)
				},
				error: function() {
					Galleria.raise("Could not scale image: " + c.image.src)
				},
				timeout: 1E3
			});
			return this
		}
	};
	d.extend(d.easing, {
		galleria: function(a, c, d, e, k) {
			if ((c /= k / 2) < 1) return e / 2 * c * c * c + d;
			return e / 2 * ((c -= 2) * c * c + 2) + d
		},
		galleriaIn: function(a, c, d, e, k) {
			return e * (c /= k) * c + d
		},
		galleriaOut: function(a, c, d, e, k) {
			return -e * (c /= k) * (c - 2) + d
		}
	});
	d.fn.galleria = function(a) {
		var c = this.selector;
		if (!d(this).length) return d(function() {
			d(c).length ? d(c).galleria(a) : Galleria.utils.wait({
				until: function() {
					return d(c).length
				},
				success: function() {
					d(c).galleria(a)
				},
				error: function() {
					Galleria.raise('Init failed: Galleria could not find the element "' + c + '".')
				},
				timeout: 5E3
			})
		}), this;
		return this.each(function() {
			d.data(this, "galleria") || d.data(this, "galleria", (new Galleria).init(this, a))
		})
	}
})(jQuery);
(function(d) {
	var e = {
		prototyping: function() {
			d('img[src="#"]').attr("src", "/media/i/placeholder.png").addClass("placeholder").each(function() {
				this.width -= 2;
				this.height -= 2
			});
			d('a[href="#"]').click(function(d) {
				d.preventDefault()
			})
		},
		BROWSER: {
			IE: function() {
				for (var d = 3, e = document.createElement("div"); e.innerHTML = "<\!--[if gt IE " + ++d + "]><i></i><![endif]--\>", e.getElementsByTagName("i")[0];);
				return d > 4 ? d : void 0
			}()
		}
	};
	window.Aino = e;
	window.STATIC_URL = "/static/";
	window.THEMES_URL = STATIC_URL + "themes/"
})(jQuery);
var G_DEMO_IMAGES = [{
	title: "Morning river",
	thumb: STATIC_URL + "i/sample-new/3s.jpg",
	image: STATIC_URL + "i/sample-new/3b.jpg",
	description: "A wonderful serenity has taken possession of my entire soul"
}, {
	title: "Scotland",
	thumb: STATIC_URL + "i/sample-new/1s.jpg",
	image: STATIC_URL + "i/sample-new/1m.jpg",
	big: STATIC_URL + "i/sample-new/1b.jpg",
	description: "I throw myself down among the tall grass by the trickling stream"
}, {
	title: "Antarctic Sunset",
	thumb: STATIC_URL + "i/sample/12_m.jpg",
	image: STATIC_URL + "i/sample/12.jpg",
	description: "An Antarctic Sunset, photo taken by Calee Allen on April 6th, 2008."
}, {
	title: "Works for Video too",
	video: "http://vimeo.com/22439234",
	description: "Integrated API for YouTube, Vimeo and Dailymotion videos"
}, {
	title: "Locomotives Roundhouse",
	thumb: STATIC_URL + "i/sample/01_m.jpg",
	image: STATIC_URL + "i/sample/01.jpg",
	description: "Steam locomotives of the Chicago & North Western Railway."
}, {
	title: "Braunwald Alps",
	thumb: STATIC_URL + "i/sample/11_m.jpg",
	image: STATIC_URL + "i/sample/11.jpg",
	description: "View from Braunwald, Switzerland."
}, {
	title: "Icebergs in the High Arctic",
	thumb: STATIC_URL + "i/sample/02_m.jpg",
	image: STATIC_URL + "i/sample/02.jpg",
	description: "\u201dThe debris loading isn't particularly extensive, but the color is usual.\u201d"
}, {
	title: "Ara\u00f1a",
	thumb: STATIC_URL + "i/sample/03_m.jpg",
	image: STATIC_URL + "i/sample/03.jpg",
	description: "Xysticus cristatus, A Estrada, Galicia, Spain"
}, {
	title: "Museo storia naturale",
	thumb: STATIC_URL + "i/sample/04_m.jpg",
	image: STATIC_URL + "i/sample/04.jpg"
}, {
	title: "Grj\u00f3tagj\u00e1 caves in summer 2009",
	thumb: STATIC_URL + "i/sample/05_m.jpg",
	image: STATIC_URL + "i/sample/05.jpg"
}, {
	title: "Thermes",
	thumb: STATIC_URL + "i/sample/06_m.jpg",
	image: STATIC_URL + "i/sample/06.jpg",
	description: "Xanthi hot-spa springs, Xanthi Prefecture, Greece"
}, {
	title: "Polish Army Ko\u0142obrzeg",
	thumb: STATIC_URL + "i/sample/07_m.jpg",
	image: STATIC_URL + "i/sample/07.jpg",
	description: "A display of the Polish Army. Both the soldier, and the vehicle belong to the 7th Pomeranian Coastal Defence Brigade, a part of the Szczecin-based 12th Mechanized Division \u201dBoles\u0142aw Krzywousty\u201d"
}, {
	title: "Zlatograd Bulgaria",
	thumb: STATIC_URL + "i/sample/08_m.jpg",
	image: STATIC_URL + "i/sample/08.jpg"
}, {
	title: "09-28-2001 in New York City",
	thumb: STATIC_URL + "i/sample/09_m.jpg",
	image: STATIC_URL + "i/sample/09.jpg",
	description: "New York, NY, September 28, 2001 -- Debris on surrounding roofs at the site of the World Trade Center. Photo by Andrea Booher/ FEMA News Photo"
}, {
	thumb: STATIC_URL + "i/sample/10_m.jpg",
	image: STATIC_URL + "i/sample/10.jpg"
}];
(function(d, e, l) {
	var E = [],
		t = d.G = {
			init: function(d) {
				this.views._global.call(this);
				for (var e = document.body.className.split(" "), l = 0; l < e.length; l++) e[l] in this.views && this.views[e[l]].call(this);
				typeof d === "number" && t.run(d)
			},
			make: function(d, e) {
				E[d] = e
			},
			run: function(d, q, t) {
				q = q || "#demo";
				t = t ||
				function() {};
				l.theme = E[d];
				l.utils.loadCSS(THEMES_URL + d + "/" + d + ".css", "galleria-theme", function() {
					e(q).galleria({
						responsive: !0,
						height: 0.5,
						data_source: G_DEMO_IMAGES,
						extend: function(d) {
							t.call(this, d)
						}
					})
				})
			},
			trackDownload: function(d) {
				e(d).each(function() {
					e(this).click(function() {
						var d = this.href.split("/");
						_gaq.push(["_trackEvent", "Stats", "Download", d.length > 1 ? d[d.length - 1] : "unknown"])
					})
				})
			},
			views: {
				_global: function() {
					e(".campaign");
					e(".main a:path").addClass("active");
					e(".secondary .box li:last").addClass("last");
					t.trackDownload("a.dl, a.download");
					e(".messages li").each(function() {
						var d = this;
						e("<a>", {
							text: "'",
							href: "#",
							"class": "close symbol",
							click: function(l) {
								l.preventDefault();
								e(d).animate({
									opacity: 0
								}, 300, function() {
									e(d).animate({
										height: 0
									}, 200, function() {
										e(d).remove()
									})
								})
							}
						}).appendTo(this);
						this.className == "info" ? e(this).find("p .symbol").text("/") : e(this).find("p .symbol").text("W")
					});
					e("ul.errorlist li").each(function() {
						e(this).prepend('<span class="symbol">W</span> ')
					})
				},
				admin: function() {
					e(".menu a:path").addClass("active")
				},
				settings: function() {
					var l = e("form.settings"),
						q = l.find(".verify").hide(),
						t = l.find(".email"),
						x = t.val(),
						C;
					t.focus(function() {
						C = d.setInterval(function() {
							t.val() != x && q.is(":hidden") ? q.show() : t.val() == x && q.is(":visible") && q.hide()
						}, 50)
					}).blur(function() {
						d.clearInterval(C)
					})
				},
				login: function() {
					e("form.login").find(".error ul").each(function() {
						e(this).parent().prev("input").addClass("error");
						e(this).find(".symbol").remove()
					});
					e("#id_login").blur().focus()
				},
				home: function() {
					t.run(1, "#demo", function() {
						Galleria.TOUCH && this.setOptions("transition", "fadeslide");
						this.setOptions("responsive", !0)
					})
				},
				tp: function() {
					var d = e("#themes");
					e("#theme-switcher").click(function() {
						d.toggle()
					}).trigger("click")
				},
				docs: function() {},
				"theme-purchase": function() {
					var l = RegExp("^((AT)?U[0-9]{8}|(BE)?0?[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$"),
						q = e("form.info"),
						t = !1,
						x = !1,
						C = !1,
						D = q.find(".vat").each(function() {
							e(this).find("input").val().length || e(this).css({
								position: "absolute",
								left: "-100000px"
							})
						}),
						z = !1,
						y, E, I = D.find("input"),
						M = q.find(".email"),
						U = M.parent().next(".err"),
						P = !1,
						Q = function() {
							q.find("input[name=residence]").each(function() {
								e(this).attr("checked") && (this.className == "sweden" && (L(), z = !1), this.className == "outside" && (W(), z = !1), this.className == "addvat" && t ? (z = !0, x ? W() : L(), D.css({
									position: "static",
									left: "auto"
								}).find("input").focus()) : (this.className == "addvat" && !t && (L(), z = !0), D.css({
									position: "absolute",
									left: "-100000px"
								})))
							})
						},
						L = function() {
							E = parseFloat(y) * 0.25;
							var d = Math.round((parseFloat(y) + E) * 100) / 100;
							e(".buy-form input[name=amount]").val(d);
							e(".total span").html("$" + y + " + $" + E + " VAT = <strong>$" + d + "</strong>")
						},
						W = function() {
							e(".buy-form input[name=amount]").val(y);
							e(".total span").html("<strong>$" + y + "</strong>")
						},
						X = function() {},
						aa = !1;
					I.blur(function() {
						if (I.val().length) {
							var d = I.val().substr(0, 2),
								q = I.val().substr(2);
							I.removeClass("error ok").addClass("loading");
							aa = !0;
							e.ajax({
								url: "http://isvat.appspot.com/" + d + "/" + q + "/?callback=?",
								dataType: "json",
								success: function(d) {
									x = d;
									!x && z && L();
									d && t && W();
									I.attr("class", d ? "ok" : "error");
									aa = !1;
									X()
								},
								error: function() {
									l.test(I.val()) ? (x = !0, W(), I.attr("class", "ok")) : (x = !1, L(), I.attr("class", "error"))
								}
							})
						} else I.removeClass("error ok loading"), t && z && (x = !1, L())
					});
					M.blur(function() {
						M.val().length ? P || (C = !0, M.removeClass("error"), U.html("")) : (C = !1, U.html("This field is required."), M.attr("class", "error"))
					});
					if (M.length && M.val().length || !e(".emailwrap").length) C = !0;
					D.find(".btn a").click(function(d) {
						d.preventDefault();
						I.blur()
					});
					q.find("input[name=typ]").change(function() {
						t = this.className == "business";
						Q()
					}).each(function() {
						t = this.className == "business" && this.checked
					});
					q.find("input[name=residence]").change(function() {
						Q()
					});
					y = parseFloat(e(".buy-form").data("price"));
					e("input[type=image]").each(function() {
						y = y.toFixed(2);
						var l = '<div class="total">Total: <span>' + (e(this).closest(".buy-form").hasClass("hasvat") ? "$" + y * 0.8 + " + $" + (y * 0.2).toFixed(2) + " VAT = <strong>$" + y : "<strong>$" + y) + "</strong></span></div>",
							v = e("<a>", {
								href: "#",
								html: "Buy Now",
								click: function(l) {
									l.preventDefault();
									e(this).closest("form");
									var k = e(this),
										v = arguments.callee;
									if (e("div.customer").length) e.post(q.attr("action"), q.serialize(), function(a) {
										if (a.errors) alert("We are very sorry, but something went wrong with your account, please contact us at info@aino.se and describe your problem.");
										else {
											var c = e('<input type="hidden" name="invoice" value="' + a.invoice + '">');
											e(".buy-form form").append(c);
											k.after('<p class="loading"><em>Contacting PayPal...</em></p>').parent().addClass("disabled");
											e(".buy-form input[name=amount]").val(a.total_price);
											e(".buy-form form").submit()
										}
									}, "json");
									else if (C) {
										k.unbind("click").parent().addClass("disabled");
										var a = function() {
												e.post(q.attr("action"), q.serialize(), function(a) {
													if (a.errors) if (k.bind("click", v).parent().removeClass("disabled"), a.errors.email) P = !0, U.html(a.errors.email[0]), M.attr("class", "error").focus();
													else {
														var c = e("<div>").addClass("messages"),
															l = e("<ul>").appendTo(c),
															q = !1;
														e.each(a.errors, function() {
															l.append('<li class="error"><p><span class="symbol">W</span>' + this[0] + "</p></li>");
															/VAT/.test(this[0]) && (q = !0)
														});
														c.insertAfter("header.main");
														q && D.css({
															position: "static",
															left: "auto"
														}).find("input").attr("class", "error").focus();
														d.scrollTo(0, 0)
													} else c = e('<input type="hidden" name="invoice" value="' + a.invoice + '">'), e(".buy-form form").append(c), M.removeClass("error"), U.html(""), k.after('<p class="loading"><em>Contacting PayPal...</em></p>'), D.find("input").removeClass("error"), e(".buy-form input[name=amount]").val(a.total_price), e(".buy-form form").submit()
												}, "json")
											};
										(!z || !t) && D.find("input").val("");
										if (z && t && !x) {
											var c = function() {
													d.confirm("Are you sure you don\u2019t have a valid VAT number for your business? Without a valid VAT number, we will have to add 25% VAT on the total price. \n\nPress cancel to add your VAT number or OK to complete the purchase including VAT (total " + e(".total span strong").html() + ").") ? (D.find("input").val(""), a()) : (k.bind("click", v).parent().removeClass("disabled"), D.find("input").focus())
												};
											aa ? X = function() {
												x ? a() : c()
											} : c()
										} else a()
									} else M.attr("class", "error").focus(), U.html("This field is required.")
								}
							});
						e(this).replaceWith(v);
						v.before(l);
						v.wrap('<div class="btn send" />')
					});
					Q()
				}
			}
		};
	d.G = t
})(window, jQuery, Galleria);
(function(d) {
	G.make(0, {
		defaults: {
			transition: "fade",
			transitionSpeed: 500,
			imageCrop: !1,
			thumbCrop: "height",
			idleMode: "hover",
			idleSpeed: 500,
			fullscreenTransition: !1,
			_locale: {
				show_captions: "Show captions",
				hide_captions: "Hide captions",
				play: "Play slideshow",
				pause: "Pause slideshow",
				enter_fullscreen: "Enter fullscreen",
				exit_fullscreen: "Exit fullscreen",
				next: "Next image",
				prev: "Previous image",
				showing_image: "Showing image %s of %s"
			},
			_toggleCaption: !0,
			_showCaption: !0,
			_showTooltip: !0
		},
		init: function(e) {
			Galleria.requires(1.28, "This version of Azur theme requires Galleria version 1.2.8 or later");
			this.addElement("bar", "fullscreen", "play", "progress").append({
				stage: "progress",
				container: "bar",
				bar: ["fullscreen", "play", "thumbnails-container"]
			}).prependChild("stage", "info").appendChild("container", "tooltip");
			var l = this,
				E = window.document,
				t = e._locale,
				v = "getContext" in E.createElement("canvas");
			(function() {
				if (v) {
					var e = E.createElement("canvas"),
						q = e.getContext("2d");
					e.width = 24;
					e.height = 24;
					d(e).css({
						zIndex: 1E4,
						position: "absolute",
						right: 10,
						top: 10
					}).appendTo(l.get("container"));
					l.bind("progress", function(l) {
						d(e).fadeIn(200);
						l = l.percent * 3.6;
						q.strokeStyle = "rgba(255,255,255,.7)";
						q.lineWidth = 3;
						q.clearRect(0, 0, 24, 24);
						q.beginPath();
						q.arc(12, 12, 10, -90 * (Math.PI / 180), (l - 90) * (Math.PI / 180), !1);
						q.stroke();
						q.closePath()
					});
					l.bind("pause", function() {
						d(e).fadeOut(200, function() {
							q.clearRect(0, 0, 24, 24)
						})
					})
				} else {
					l.addElement("progressbar").appendChild("progress", "progressbar");
					l.$("progress").addClass("nocanvas");
					var t = l.$("progress").width();
					l.bind("progress", function(d) {
						l.$("progressbar").width(d.percent / 100 * t)
					})
				}
			})();
			(function() {
				if (v) {
					var e = E.createElement("canvas"),
						q = e.getContext("2d"),
						t = Math,
						z = function(d, e, l) {
							l = l ? -2 : 2;
							d.translate(e / l, e / l)
						},
						y = 28;
					d(e).hide().appendTo(l.get("loader")).fadeIn(500);
					window.setInterval(function() {
						var d = y,
							e;
						q.clearRect(0, 0, 48, 48);
						q.lineWidth = 1.5;
						for (var l = 0; l < 28; l++) e = l + d >= 28 ? l - 28 + d : l + d, q.strokeStyle = "rgba(255,255,255," + t.max(0, e / 28) + ")", q.beginPath(), q.moveTo(24, 8), q.lineTo(24, 0), q.stroke(1), z(q, 48, !1), q.rotate(360 / 28 * t.PI / 180), z(q, 48, !0);
						q.save();
						z(q, 48, !1);
						q.rotate(-1 * (360 / 28 / 8) * t.PI / 180);
						z(q, 48, !0);
						y = y === 0 ? 28 : y - 1
					}, 20)
				} else l.$("loader").addClass("nocanvas")
			})();
			var q = Galleria.IE < 9 ? {
				bottom: -100
			} : {
				bottom: -50,
				opacity: 0
			},
				F = Galleria.IE < 9 ? {
					top: -20
				} : {
					opacity: 0,
					top: -20
				};
			this.bind("play", function() {
				this.$("play").addClass("pause");
				v || this.$("progress").show()
			}).bind("pause", function() {
				this.$("play").removeClass("pause");
				v || this.$("progress").hide()
			}).bind("loadstart", function(d) {
				d.cached || this.$("loader").show()
			}).bind("loadfinish", function() {
				v ? this.$("loader").fadeOut(100) : this.$("loader").hide()
			});
			this.addIdleState(this.get("info"), q, Galleria.IE < 9 ? {} : {
				opacity: 1
			}, !0).addIdleState(this.get("image-nav-left"), {
				opacity: 0,
				left: 0
			}, {
				opacity: 1
			}, !0).addIdleState(this.get("image-nav-right"), {
				opacity: 0,
				right: 0
			}, {
				opacity: 1
			}, !0).addIdleState(this.get("counter"), F, Galleria.IE < 9 ? {} : {
				opacity: 0.9
			}, !0);
			this.$("fullscreen").click(function(d) {
				d.preventDefault();
				l.toggleFullscreen()
			});
			this.$("play").click(function(d) {
				d.preventDefault();
				l.playToggle()
			});
			e._toggleCaption && (this.$("info").addClass("toggler"), this.addElement("captionopen").appendChild("stage", "captionopen"), this.addElement("captionclose").appendChild("info", "captionclose"), this.$("captionopen").click(function() {
				l.$("info").addClass("open");
				d(this).hide()
			}).html(t.show_captions), this.bind("loadstart", function() {
				this.$("captionopen").toggle(!l.$("info").hasClass("open") && this.hasInfo())
			}), this.$("captionclose").click(function() {
				l.$("info").removeClass("open");
				l.hasInfo() && l.$("captionopen").show()
			}).html("&#215;"), e._showCaption && this.$("captionopen").click());
			e._showTooltip && this.bindTooltip({
				fullscreen: l.isFullscreen() ? t.exit_fullscreen : t.enter_fullscreen,
				play: function() {
					return l.isPlaying() ? t.pause : t.play
				},
				captionclose: t.hide_captions,
				"image-nav-right": t.next,
				"image-nav-left": t.prev,
				counter: function() {
					return t.showing_image.replace(/\%s/, l.getIndex() + 1).replace(/\%s/, l.getDataLength())
				}
			})
		}
	});


	G.make(2, {
		defaults: {
			transition: "none",
			imageCrop: !0,
			thumbCrop: "height",
			easing: "galleriaOut",
			trueFullscreen: !1,
			_hideDock: !0,
			_closeOnClick: !1
		},
		init: function(e) {
			Galleria.requires(1.28, "This version of Fullscreen theme requires Galleria version 1.2.8 or later");
			this.addElement("thumbnails-tab");
			this.appendChild("thumbnails-container", "thumbnails-tab");
			var l = this.$("thumbnails-tab"),
				E = this.$("loader"),
				t = this.$("thumbnails-container"),
				v = this.$("thumbnails-list"),
				q = this.$("info-text"),
				F = this.$("info"),
				x = !e._hideDock,
				C = 0;
			Galleria.IE && (this.addElement("iefix"), this.appendChild("container", "iefix"), this.$("iefix").css({
				zIndex: 3,
				position: "absolute",
				backgroundColor: "#000",
				opacity: 0.4,
				top: 0
			}));
			e.thumbnails === !1 && t.hide();
			var D = this.proxy(function(e) {
				if (e || e.width) e = Math.min(e.width, d(window).width()), q.width(e - 40), Galleria.IE && this.getOptions("showInfo") && this.$("iefix").width(F.outerWidth()).height(F.outerHeight())
			});
			this.bind("rescale", function() {
				C = this.getStageHeight() - l.height() - 2;
				t.css("top", x ? C - v.outerHeight() + 2 : C);
				var d = this.getActiveImage();
				d && D(d)
			});
			this.bind("loadstart", function(e) {
				e.cached || E.show().fadeTo(100, 1);
				d(e.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
			});
			this.bind("loadfinish", function() {
				E.fadeOut(300);
				this.$("info, iefix").toggle(this.hasInfo())
			});
			this.bind("image", function(d) {
				D(d.imageTarget)
			});
			this.bind("thumbnail", function(q) {
				d(q.thumbTarget).parent(":not(.active)").children().css("opacity", 0.6);
				d(q.thumbTarget).click(function() {
					x && e._closeOnClick && l.click()
				})
			});
			this.trigger("rescale");
			Galleria.TOUCH || (this.addIdleState(t, {
				opacity: 0
			}), this.addIdleState(this.get("info"), {
				opacity: 0
			}));
			Galleria.IE && this.addIdleState(this.get("iefix"), {
				opacity: 0
			});
			this.$("image-nav-left, image-nav-right").css("opacity", 0.01).hover(function() {
				d(this).animate({
					opacity: 1
				}, 100)
			}, function() {
				d(this).animate({
					opacity: 0
				})
			}).show();
			e._hideDock ? l.click(this.proxy(function() {
				l.toggleClass("open", !x);
				x ? t.animate({
					top: C
				}, 400, e.easing) : t.animate({
					top: C - v.outerHeight() + 2
				}, 400, e.easing);
				x = !x
			})) : (this.bind("thumbnail", function() {
				t.css("top", C - v.outerHeight() + 2)
			}), l.css("visibility", "hidden"));
			this.$("thumbnails").children().hover(function() {
				d(this).not(".active").children().stop().fadeTo(100, 1)
			}, function() {
				d(this).not(".active").children().stop().fadeTo(400, 0.6)
			});
			this.enterFullscreen();
			this.attachKeyboard({
				escape: function() {
					return !1
				},
				up: function(d) {
					x || l.click();
					d.preventDefault()
				},
				down: function(d) {
					x && l.click();
					d.preventDefault()
				}
			})
		}
	});
	G.make(3, {
		defaults: {
			transition: "slide",
			thumbCrop: "height",
			_toggleInfo: !0
		},
		init: function(e) {
			Galleria.requires(1.28, "This version of Classic theme requires Galleria 1.2.8 or later");
			this.addElement("info-link", "info-close");
			this.append({
				info: ["info-link", "info-close"]
			});
			var l = this.$("info-link,info-close,info-text"),
				E = Galleria.TOUCH,
				t = E ? "touchstart" : "click";
			this.$("loader,counter").show().css("opacity", 0.4);
			E || (this.addIdleState(this.get("image-nav-left"), {
				left: -50
			}), this.addIdleState(this.get("image-nav-right"), {
				right: -50
			}), this.addIdleState(this.get("counter"), {
				opacity: 0
			}));
			e._toggleInfo === !0 ? l.bind(t, function() {
				l.toggle()
			}) : (l.show(), this.$("info-link, info-close").hide());
			this.bind("thumbnail", function(e) {
				E ? d(e.thumbTarget).css("opacity", this.getIndex() ? 1 : 0.6) : (d(e.thumbTarget).css("opacity", 0.6).parent().hover(function() {
					d(this).not(".active").children().stop().fadeTo(100, 1)
				}, function() {
					d(this).not(".active").children().stop().fadeTo(400, 0.6)
				}), e.index === this.getIndex() && d(e.thumbTarget).css("opacity", 1))
			});
			this.bind("loadstart", function(e) {
				e.cached || this.$("loader").show().fadeTo(200, 0.4);
				this.$("info").toggle(this.hasInfo());
				d(e.thumbTarget).css("opacity", 1).parent().siblings().children().css("opacity", 0.6)
			});
			this.bind("loadfinish", function() {
				this.$("loader").fadeOut(200)
			})
		}
	});
	G.make(4, {
		defaults: {
			transition: "pulse",
			thumbCrop: "width",
			imageCrop: !1,
			carousel: !1,
			show: !1,
			easing: "galleriaOut",
			fullscreenDoubleTap: !1,
			trueFullscreen: !1,
			_webkitCursor: !1,
			_animate: !0
		},
		init: function(e) {
			Galleria.requires(1.28, "This version of Folio theme requires Galleria version 1.2.8 or later");
			this.addElement("preloader", "loaded", "close").append({
				container: "preloader",
				preloader: "loaded",
				stage: "close"
			});
			var l = this,
				E = this.$("stage"),
				t = this.$("thumbnails");
			this.$("images");
			var v = this.$("info"),
				q = this.$("loader"),
				F = this.$("target"),
				x = 0,
				C = F.width(),
				D = 0,
				z = window.location.hash.substr(2),
				y = function(e) {
					l.$("info").css({
						left: Math.max(20, d(window).width() / 2 - e / 2 + 10),
						marginBottom: l.getData().video ? 40 : 0
					})
				},
				O = function(e, l) {
					var l = d.extend({
						speed: 400,
						width: 190,
						onbrick: function() {},
						onheight: function() {},
						delay: 0,
						debug: !1
					}, l),
						e = d(e),
						q = e.children(),
						t = e.width(),
						x = Math.floor(t / l.width),
						z = [],
						v, y, C, t = {
							"float": "none",
							position: "absolute",
							display: d.browser.safari ? "inline-block" : "block"
						};
					if (e.data("colCount") !== x && (e.data("colCount", x), q.length)) {
						for (v = 0; v < x; v++) z[v] = 0;
						e.css("position", "relative");
						q.css(t).each(function(e, q) {
							q = d(q);
							for (v = x - 1; v > -1; v--) z[v] === Math.min.apply(window, z) && (y = v);
							C = {
								top: z[y],
								left: l.width * y
							};
							typeof C.top !== "number" || typeof C.left !== "number" || (l.speed ? window.setTimeout(function(d, e, l) {
								return function() {
									Galleria.utils.animate(d, l, {
										easing: "galleriaOut",
										duration: e.speed,
										complete: e.onbrick
									})
								}
							}(q, l, C), e * l.delay) : (q.css(C), l.onbrick.call(q)), q.data("height") || q.data("height", q.outerHeight(!0)), z[y] += q.data("height"))
						});
						q = Math.max.apply(window, z);
						!(q < 0) && typeof q === "number" && (l.speed ? e.animate({
							height: Math.max.apply(window, z)
						}, l.speed, l.onheight) : (e.height(Math.max.apply(window, z)), l.onheight.call(e)))
					}
				};
			this.bind("fullscreen_enter", function() {
				this.$("container").css("height", "100%")
			});
			this.bind("fullscreen_exit", function() {
				this.getData().iframe && (d(this._controls.getActive().container).find("iframe").remove(), this.$("container").removeClass("iframe"));
				v.hide();
				d(l._controls.getActive().container).hide();
				t.show();
				E.css("left", -1E4)
			});
			this.bind("loadstart", function(d) {
				Galleria.TOUCH && this.$("image-nav").toggle( !! d.galleriaData.iframe)
			});
			this.bind("thumbnail", function(q) {
				this.addElement("plus");
				Galleria.History && q.index === parseInt(z, 10) && this.enterFullscreen(function() {
					this.show(z)
				});
				var v = q.thumbTarget,
					y = this.$("plus").css({
						display: "block"
					}).insertAfter(v),
					C = d(v).parent().data("index", q.index);
				e.showInfo && this.hasInfo(q.index) && y.append("<span>" + this.getData(q.index).title + "</span>");
				D = D || d(v).parent().outerWidth(!0);
				d(v).css("opacity", 0);
				C.unbind(e.thumbEventType);
				Galleria.IE ? y.hide() : y.css("opacity", 0);
				Galleria.TOUCH ? C.bind("touchstart", function() {
					y.css("opacity", 1)
				}).bind("touchend", function() {
					y.hide()
				}) : C.hover(function() {
					Galleria.IE ? y.show() : y.stop().css("opacity", 1)
				}, function() {
					Galleria.IE ? y.hide() : y.stop().animate({
						opacity: 0
					}, 300)
				});
				x++;
				this.$("loaded").css("width", x / this.getDataLength() * 100 + "%");
				x === this.getDataLength() && (this.$("preloader").fadeOut(100), t.data("colCount", null), O(t, {
					width: D,
					speed: e._animate ? 400 : 0,
					onbrick: function() {
						var q = d(this).find("img");
						window.setTimeout(function(q) {
							return function() {
								Galleria.utils.animate(q, {
									opacity: 1
								}, {
									duration: e.transition_speed
								});
								q.parent().unbind("mouseup click").bind(Galleria.TOUCH ? "mouseup" : "click", function() {
									t.hide();
									E.css("left", 0);
									var e = d(this).data("index");
									l.enterFullscreen(function() {
										l.show(e)
									})
								})
							}
						}(q), e._animate ? q.parent().data("index") * 100 : 0)
					},
					onheight: function() {
						F.height(t.height())
					}
				}))
			});
			this.bind("loadstart", function(d) {
				d.cached || q.show()
			});
			this.bind("data", function() {
				x = 0
			});
			this.bind("loadfinish", function(l) {
				q.hide();
				v.hide();
				this.hasInfo() && e.showInfo && this.isFullscreen() && v.fadeIn(e.transition ? e.transitionSpeed : 0);
				y(d(l.imageTarget).width())
			});
			!Galleria.TOUCH && !e._webkitCursor && (this.addIdleState(this.get("image-nav-left"), {
				left: -100
			}), this.addIdleState(this.get("image-nav-right"), {
				right: -100
			}), this.addIdleState(this.get("info"), {
				opacity: 0
			}));
			this.$("container").css({
				width: e.width,
				height: "auto"
			});
			e._webkitCursor && Galleria.WEBKIT && !Galleria.TOUCH && this.$("image-nav-right,image-nav-left").addClass("cur");
			Galleria.TOUCH && this.setOptions({
				transition: "fadeslide",
				initialTransition: !1
			});
			this.$("close").click(function() {
				l.exitFullscreen()
			});
			d(window).resize(function() {
				if (l.isFullscreen()) l.getActiveImage() && y(l.getActiveImage().width);
				else {
					var d = F.width();
					d !== C && (C = d, O(t, {
						width: D,
						delay: 50,
						debug: !0,
						onheight: function() {
							F.height(t.height())
						}
					}))
				}
			})
		}
	});
	G.make(5, {
		defaults: {
			transition: "pulse",
			thumbCrop: !0,
			imageCrop: !0,
			carousel: !1,
			imagePan: !0,
			clicknext: !0,
			_locale: {
				enter_fullscreen: "Enter fullscreen",
				exit_fullscreen: "Exit fullscreen",
				click_to_close: "Click to close",
				show_thumbnails: "Show thumbnails",
				show_info: "Show info"
			}
		},
		init: function(e) {
			Galleria.requires(1.28, "This version of Miniml theme requires Galleria version 1.2.8 or later");
			var l = this,
				E = !1,
				t;
			t = 0;
			var v, q, F;
			this.addElement("desc", "dots", "thumbs", "fs", "more");
			this.append({
				container: ["desc", "dots", "thumbs", "fs", "info-description", "more"]
			});
			F = this.$("thumbnails-container").hide().css("visibility", "visible");
			var x = function(e) {
					return d("<div>").click(function(d) {
						return function(e) {
							e.preventDefault();
							l.show(d)
						}
					}(e))
				};
			for (t = 0; t < this.getDataLength(); t++) this.$("dots").append(x(t));
			t = this.$("dots").outerWidth();
			v = this.$("desc").hide().hover(function() {
				d(this).addClass("hover")
			}, function() {
				d(this).removeClass("hover")
			}).click(function() {
				d(this).hide()
			});
			q = this.$("loader");
			this.bindTooltip({
				fs: function() {
					return E ? e._locale.exit_fullscreen : e._locale.enter_fullscreen
				},
				desc: e._locale.click_to_close,
				more: e._locale.show_info,
				thumbs: e._locale.show_thumbnails
			});
			this.bind("loadstart", function(d) {
				d.cached || this.$("loader").show().fadeTo(200, 0.4)
			});
			this.bind("loadfinish", function(d) {
				var t = l.getData().title,
					x = l.getData().description;
				v.hide();
				q.fadeOut(200);
				this.$("dots").children("div").eq(d.index).addClass("active").siblings(".active").removeClass("active");
				t && x ? (v.empty().append("<strong>" + t + "</strong>", "<p>" + x + "</p>").css({
					marginTop: this.$("desc").outerHeight() / -2
				}), this.$("more").show()) : this.$("more").hide();
				F.fadeOut(e.fadeSpeed);
				l.$("thumbs").removeClass("active")
			});
			this.bind("thumbnail", function(e) {
				d(e.thumbTarget).hover(function() {
					l.setInfo(e.index)
				}, function() {
					l.setInfo()
				})
			});
			this.$("fs").click(function() {
				l.toggleFullscreen();
				E = !E
			});
			this.$("thumbs").click(function(e) {
				e.preventDefault();
				F.toggle();
				d(this).toggleClass("active");
				v.hide()
			});
			this.$("more").click(function() {
				v.toggle()
			});
			this.$("info").css({
				width: this.getStageWidth() - t - 30,
				left: t + 10
			})
		}
	})
})(jQuery);
(function(d) {
	var e = this,
		l = function(d) {
			var l = e.location,
				t, v;
			if (/^\w+:/.test(d)) return d.toString();
			t = l.protocol + "//" + l.host;
			if (d.indexOf("/") === 0) return t + d.toString();
			l = l.pathname.replace(/\/[^\/]*$/, "");
			if (v = d.match(/\.\.\//g)) {
				d = d.substring(v.length * 3);
				for (v = v.length; v--;) l = l.substring(0, l.lastIndexOf("/"))
			} else d = d.toString();
			return t + l + "/" + d
		},
		E = function(d, e) {
			var l;
			if (d.length !== e.length) return !1;
			for (l = 0; l < e.length; l++) if (d[l] !== e[l]) return !1;
			return !0
		},
		t = function(d) {
			return d.replace(/#.*$/, "").replace(/\?.*/, "").replace(/\/$/, "")
		},
		v = t(e.location.href).split("/");
	d.extend(d.expr[":"], {
		path: function(d) {
			if (!(d.href && d.nodeName.toUpperCase() === "A")) return !1;
			d = t(l(d.href)).split("/");
			if (d.length === 3) return E(v, d);
			return v.length < d.length ? !1 : E(v.slice(0, d.length), d)
		},
		current: function(d) {
			if (!(d.href && d.nodeName.toUpperCase() === "A")) return !1;
			d = t(l(d.href)).split("/");
			return E(v, d)
		}
	})
})(jQuery);
