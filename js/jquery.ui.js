﻿(function (e, t) {
	var i = "ui-effects-";
	e.effects = {
		effect : {}
	},
	function (e, t) {
		function i(e, t, i) {
			var s = c[t.type] || {};
			return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
		}
		function s(i) {
			var s = l(),
			a = s._rgba = [];
			return i = i.toLowerCase(),
			f(h, function (e, n) {
				var r,
				o = n.re.exec(i),
				h = o && n.parse(o),
				l = n.space || "rgba";
				return h ? (r = s[l](h), s[u[l].cache] = r[u[l].cache], a = s._rgba = r._rgba, !1) : t
			}),
			a.length ? ("0,0,0,0" === a.join() && e.extend(a, n.transparent), s) : n[i]
		}
		function a(e, t, i) {
			return i = (i + 1) % 1,
			1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
		}
		var n,
		r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		o = /^([\-+])=\s*(\d+\.?\d*)/,
		h = [{
				re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (e) {
					return [e[1], e[2], e[3], e[4]]
				}
			}, {
				re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (e) {
					return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
				}
			}, {
				re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse : function (e) {
					return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
				}
			}, {
				re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse : function (e) {
					return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
				}
			}, {
				re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space : "hsla",
				parse : function (e) {
					return [e[1], e[2] / 100, e[3] / 100, e[4]]
				}
			}
		],
		l = e.Color = function (t, i, s, a) {
			return new e.Color.fn.parse(t, i, s, a)
		},
		u = {
			rgba : {
				props : {
					red : {
						idx : 0,
						type : "byte"
					},
					green : {
						idx : 1,
						type : "byte"
					},
					blue : {
						idx : 2,
						type : "byte"
					}
				}
			},
			hsla : {
				props : {
					hue : {
						idx : 0,
						type : "degrees"
					},
					saturation : {
						idx : 1,
						type : "percent"
					},
					lightness : {
						idx : 2,
						type : "percent"
					}
				}
			}
		},
		c = {
			"byte" : {
				floor : !0,
				max : 255
			},
			percent : {
				max : 1
			},
			degrees : {
				mod : 360,
				floor : !0
			}
		},
		d = l.support = {},
		p = e("<p>")[0],
		f = e.each;
		p.style.cssText = "background-color:rgba(1,1,1,.5)",
		d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
		f(u, function (e, t) {
			t.cache = "_" + e,
			t.props.alpha = {
				idx : 3,
				type : "percent",
				def : 1
			}
		}),
		l.fn = e.extend(l.prototype, {
				parse : function (a, r, o, h) {
					if (a === t)
						return this._rgba = [null, null, null, null], this;
					(a.jquery || a.nodeType) && (a = e(a).css(r), r = t);
					var c = this,
					d = e.type(a),
					p = this._rgba = [];
					return r !== t && (a = [a, r, o, h], d = "array"),
					"string" === d ? this.parse(s(a) || n._default) : "array" === d ? (f(u.rgba.props, function (e, t) {
							p[t.idx] = i(a[t.idx], t)
						}), this) : "object" === d ? (a instanceof l ? f(u, function (e, t) {
							a[t.cache] && (c[t.cache] = a[t.cache].slice())
						}) : f(u, function (t, s) {
							var n = s.cache;
							f(s.props, function (e, t) {
								if (!c[n] && s.to) {
									if ("alpha" === e || null == a[e])
										return;
									c[n] = s.to(c._rgba)
								}
								c[n][t.idx] = i(a[e], t, !0)
							}),
							c[n] && 0 > e.inArray(null, c[n].slice(0, 3)) && (c[n][3] = 1, s.from && (c._rgba = s.from(c[n])))
						}), this) : t
				},
				is : function (e) {
					var i = l(e),
					s = !0,
					a = this;
					return f(u, function (e, n) {
						var r,
						o = i[n.cache];
						return o && (r = a[n.cache] || n.to && n.to(a._rgba) || [], f(n.props, function (e, i) {
								return null != o[i.idx] ? s = o[i.idx] === r[i.idx] : t
							})),
						s
					}),
					s
				},
				_space : function () {
					var e = [],
					t = this;
					return f(u, function (i, s) {
						t[s.cache] && e.push(i)
					}),
					e.pop()
				},
				transition : function (e, t) {
					var s = l(e),
					a = s._space(),
					n = u[a],
					r = 0 === this.alpha() ? l("transparent") : this,
					o = r[n.cache] || n.to(r._rgba),
					h = o.slice();
					return s = s[n.cache],
					f(n.props, function (e, a) {
						var n = a.idx,
						r = o[n],
						l = s[n],
						u = c[a.type] || {};
						null !== l && (null === r ? h[n] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[n] = i((l - r) * t + r, a)))
					}),
					this[a](h)
				},
				blend : function (t) {
					if (1 === this._rgba[3])
						return this;
					var i = this._rgba.slice(),
					s = i.pop(),
					a = l(t)._rgba;
					return l(e.map(i, function (e, t) {
							return (1 - s) * a[t] + s * e
						}))
				},
				toRgbaString : function () {
					var t = "rgba(",
					i = e.map(this._rgba, function (e, t) {
							return null == e ? t > 2 ? 1 : 0 : e
						});
					return 1 === i[3] && (i.pop(), t = "rgb("),
					t + i.join() + ")"
				},
				toHslaString : function () {
					var t = "hsla(",
					i = e.map(this.hsla(), function (e, t) {
							return null == e && (e = t > 2 ? 1 : 0),
							t && 3 > t && (e = Math.round(100 * e) + "%"),
							e
						});
					return 1 === i[3] && (i.pop(), t = "hsl("),
					t + i.join() + ")"
				},
				toHexString : function (t) {
					var i = this._rgba.slice(),
					s = i.pop();
					return t && i.push(~~(255 * s)),
					"#" + e.map(i, function (e) {
						return e = (e || 0).toString(16),
						1 === e.length ? "0" + e : e
					}).join("")
				},
				toString : function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}),
		l.fn.parse.prototype = l.fn,
		u.hsla.to = function (e) {
			if (null == e[0] || null == e[1] || null == e[2])
				return [null, null, null, e[3]];
			var t,
			i,
			s = e[0] / 255,
			a = e[1] / 255,
			n = e[2] / 255,
			r = e[3],
			o = Math.max(s, a, n),
			h = Math.min(s, a, n),
			l = o - h,
			u = o + h,
			c = .5 * u;
			return t = h === o ? 0 : s === o ? 60 * (a - n) / l + 360 : a === o ? 60 * (n - s) / l + 120 : 60 * (s - a) / l + 240,
			i = 0 === l ? 0 : .5 >= c ? l / u : l / (2 - u),
			[Math.round(t) % 360, i, c, null == r ? 1 : r]
		},
		u.hsla.from = function (e) {
			if (null == e[0] || null == e[1] || null == e[2])
				return [null, null, null, e[3]];
			var t = e[0] / 360,
			i = e[1],
			s = e[2],
			n = e[3],
			r = .5 >= s ? s * (1 + i) : s + i - s * i,
			o = 2 * s - r;
			return [Math.round(255 * a(o, r, t + 1 / 3)), Math.round(255 * a(o, r, t)), Math.round(255 * a(o, r, t - 1 / 3)), n]
		},
		f(u, function (s, a) {
			var n = a.props,
			r = a.cache,
			h = a.to,
			u = a.from;
			l.fn[s] = function (s) {
				if (h && !this[r] && (this[r] = h(this._rgba)), s === t)
					return this[r].slice();
				var a,
				o = e.type(s),
				c = "array" === o || "object" === o ? s : arguments,
				d = this[r].slice();
				return f(n, function (e, t) {
					var s = c["object" === o ? e : t.idx];
					null == s && (s = d[t.idx]),
					d[t.idx] = i(s, t)
				}),
				u ? (a = l(u(d)), a[r] = d, a) : l(d)
			},
			f(n, function (t, i) {
				l.fn[t] || (l.fn[t] = function (a) {
					var n,
					r = e.type(a),
					h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
					l = this[h](),
					u = l[i.idx];
					return "undefined" === r ? u : ("function" === r && (a = a.call(this, u), r = e.type(a)), null == a && i.empty ? this : ("string" === r && (n = o.exec(a), n && (a = u + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), l[i.idx] = a, this[h](l)))
				})
			})
		}),
		l.hook = function (t) {
			var i = t.split(" ");
			f(i, function (t, i) {
				e.cssHooks[i] = {
					set : function (t, a) {
						var n,
						r,
						o = "";
						if ("transparent" !== a && ("string" !== e.type(a) || (n = s(a)))) {
							if (a = l(n || a), !d.rgba && 1 !== a._rgba[3]) {
								for (r = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && r && r.style; )
									try {
										o = e.css(r, "backgroundColor"),
										r = r.parentNode
									} catch (h) {}

								a = a.blend(o && "transparent" !== o ? o : "_default")
							}
							a = a.toRgbaString()
						}
						try {
							t.style[i] = a
						} catch (h) {}

					}
				},
				e.fx.step[i] = function (t) {
					t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0),
					e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
				}
			})
		},
		l.hook(r),
		e.cssHooks.borderColor = {
			expand : function (e) {
				var t = {};
				return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
					t["border" + s + "Color"] = e
				}),
				t
			}
		},
		n = e.Color.names = {
			aqua : "#00ffff",
			black : "#000000",
			blue : "#0000ff",
			fuchsia : "#ff00ff",
			gray : "#808080",
			green : "#008000",
			lime : "#00ff00",
			maroon : "#800000",
			navy : "#000080",
			olive : "#808000",
			purple : "#800080",
			red : "#ff0000",
			silver : "#c0c0c0",
			teal : "#008080",
			white : "#ffffff",
			yellow : "#ffff00",
			transparent : [null, null, null, 0],
			_default : "#ffffff"
		}
	}
	(jQuery),
	function () {
		function i(t) {
			var i,
			s,
			a = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
			n = {};
			if (a && a.length && a[0] && a[a[0]])
				for (s = a.length; s--; )
					i = a[s], "string" == typeof a[i] && (n[e.camelCase(i)] = a[i]);
			else
				for (i in a)
					"string" == typeof a[i] && (n[i] = a[i]);
			return n
		}
		function s(t, i) {
			var s,
			a,
			r = {};
			for (s in i)
				a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (r[s] = a));
			return r
		}
		var a = ["add", "remove", "toggle"],
		n = {
			border : 1,
			borderBottom : 1,
			borderColor : 1,
			borderLeft : 1,
			borderRight : 1,
			borderTop : 1,
			borderWidth : 1,
			margin : 1,
			padding : 1
		};
		e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
			e.fx.step[i] = function (e) {
				("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, i, e.end), e.setAttr = !0)
			}
		}),
		e.fn.addBack || (e.fn.addBack = function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}),
		e.effects.animateClass = function (t, n, r, o) {
			var h = e.speed(n, r, o);
			return this.queue(function () {
				var n,
				r = e(this),
				o = r.attr("class") || "",
				l = h.children ? r.find("*").addBack() : r;
				l = l.map(function () {
						var t = e(this);
						return {
							el : t,
							start : i(this)
						}
					}),
				n = function () {
					e.each(a, function (e, i) {
						t[i] && r[i + "Class"](t[i])
					})
				},
				n(),
				l = l.map(function () {
						return this.end = i(this.el[0]),
						this.diff = s(this.start, this.end),
						this
					}),
				r.attr("class", o),
				l = l.map(function () {
						var t = this,
						i = e.Deferred(),
						s = e.extend({}, h, {
								queue : !1,
								complete : function () {
									i.resolve(t)
								}
							});
						return this.el.animate(this.diff, s),
						i.promise()
					}),
				e.when.apply(e, l.get()).done(function () {
					n(),
					e.each(arguments, function () {
						var t = this.el;
						e.each(this.diff, function (e) {
							t.css(e, "")
						})
					}),
					h.complete.call(r[0])
				})
			})
		},
		e.fn.extend({
			addClass : function (t) {
				return function (i, s, a, n) {
					return s ? e.effects.animateClass.call(this, {
						add : i
					}, s, a, n) : t.apply(this, arguments)
				}
			}
			(e.fn.addClass),
			removeClass : function (t) {
				return function (i, s, a, n) {
					return arguments.length > 1 ? e.effects.animateClass.call(this, {
						remove : i
					}, s, a, n) : t.apply(this, arguments)
				}
			}
			(e.fn.removeClass),
			toggleClass : function (i) {
				return function (s, a, n, r, o) {
					return "boolean" == typeof a || a === t ? n ? e.effects.animateClass.call(this, a ? {
						add : s
					}
						 : {
						remove : s
					}, n, r, o) : i.apply(this, arguments) : e.effects.animateClass.call(this, {
						toggle : s
					}, a, n, r)
				}
			}
			(e.fn.toggleClass),
			switchClass : function (t, i, s, a, n) {
				return e.effects.animateClass.call(this, {
					add : i,
					remove : t
				}, s, a, n)
			}
		})
	}
	(),
	function () {
		function s(t, i, s, a) {
			return e.isPlainObject(t) && (i = t, t = t.effect),
			t = {
				effect : t
			},
			null == i && (i = {}),
			e.isFunction(i) && (a = i, s = null, i = {}),
			("number" == typeof i || e.fx.speeds[i]) && (a = s, s = i, i = {}),
			e.isFunction(s) && (a = s, s = null),
			i && e.extend(t, i),
			s = s || i.duration,
			t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default,
			t.complete = a || i.complete,
			t
		}
		function a(t) {
			return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
		}
		e.extend(e.effects, {
			version : "1.10.3",
			save : function (e, t) {
				for (var s = 0; t.length > s; s++)
					null !== t[s] && e.data(i + t[s], e[0].style[t[s]])
			},
			restore : function (e, s) {
				var a,
				n;
				for (n = 0; s.length > n; n++)
					null !== s[n] && (a = e.data(i + s[n]), a === t && (a = ""), e.css(s[n], a))
			},
			setMode : function (e, t) {
				return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"),
				t
			},
			getBaseline : function (e, t) {
				var i,
				s;
				switch (e[0]) {
				case "top":
					i = 0;
					break;
				case "middle":
					i = .5;
					break;
				case "bottom":
					i = 1;
					break;
				default:
					i = e[0] / t.height
				}
				switch (e[1]) {
				case "left":
					s = 0;
					break;
				case "center":
					s = .5;
					break;
				case "right":
					s = 1;
					break;
				default:
					s = e[1] / t.width
				}
				return {
					x : s,
					y : i
				}
			},
			createWrapper : function (t) {
				if (t.parent().is(".ui-effects-wrapper"))
					return t.parent();
				var i = {
					width : t.outerWidth(!0),
					height : t.outerHeight(!0),
					"float" : t.css("float")
				},
				s = e("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize : "100%",
						background : "transparent",
						border : "none",
						margin : 0,
						padding : 0
					}),
				a = {
					width : t.width(),
					height : t.height()
				},
				n = document.activeElement;
				try {
					n.id
				} catch (r) {
					n = document.body
				}
				return t.wrap(s),
				(t[0] === n || e.contains(t[0], n)) && e(n).focus(),
				s = t.parent(),
				"static" === t.css("position") ? (s.css({
						position : "relative"
					}), t.css({
						position : "relative"
					})) : (e.extend(i, {
						position : t.css("position"),
						zIndex : t.css("z-index")
					}), e.each(["top", "left", "bottom", "right"], function (e, s) {
						i[s] = t.css(s),
						isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), t.css({
						position : "relative",
						top : 0,
						left : 0,
						right : "auto",
						bottom : "auto"
					})),
				t.css(a),
				s.css(i).show()
			},
			removeWrapper : function (t) {
				var i = document.activeElement;
				return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()),
				t
			},
			setTransition : function (t, i, s, a) {
				return a = a || {},
				e.each(i, function (e, i) {
					var n = t.cssUnit(i);
					n[0] > 0 && (a[i] = n[0] * s + n[1])
				}),
				a
			}
		}),
		e.fn.extend({
			effect : function () {
				function t(t) {
					function s() {
						e.isFunction(n) && n.call(a[0]),
						e.isFunction(t) && t()
					}
					var a = e(this),
					n = i.complete,
					o = i.mode;
					(a.is(":hidden") ? "hide" === o : "show" === o) ? (a[o](), s()) : r.call(a[0], i, s)
				}
				var i = s.apply(this, arguments),
				a = i.mode,
				n = i.queue,
				r = e.effects.effect[i.effect];
				return e.fx.off || !r ? a ? this[a](i.duration, i.complete) : this.each(function () {
					i.complete && i.complete.call(this)
				}) : n === !1 ? this.each(t) : this.queue(n || "fx", t)
			},
			show : function (e) {
				return function (t) {
					if (a(t))
						return e.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "show",
					this.effect.call(this, i)
				}
			}
			(e.fn.show),
			hide : function (e) {
				return function (t) {
					if (a(t))
						return e.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "hide",
					this.effect.call(this, i)
				}
			}
			(e.fn.hide),
			toggle : function (e) {
				return function (t) {
					if (a(t) || "boolean" == typeof t)
						return e.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "toggle",
					this.effect.call(this, i)
				}
			}
			(e.fn.toggle),
			cssUnit : function (t) {
				var i = this.css(t),
				s = [];
				return e.each(["em", "px", "%", "pt"], function (e, t) {
					i.indexOf(t) > 0 && (s = [parseFloat(i), t])
				}),
				s
			}
		})
	}
	(),
	function () {
		var t = {};
		e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
			t[i] = function (t) {
				return Math.pow(t, e + 2)
			}
		}),
		e.extend(t, {
			Sine : function (e) {
				return 1 - Math.cos(e * Math.PI / 2)
			},
			Circ : function (e) {
				return 1 - Math.sqrt(1 - e * e)
			},
			Elastic : function (e) {
				return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
			},
			Back : function (e) {
				return e * e * (3 * e - 2)
			},
			Bounce : function (e) {
				for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e; );
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
			}
		}),
		e.each(t, function (t, i) {
			e.easing["easeIn" + t] = i,
			e.easing["easeOut" + t] = function (e) {
				return 1 - i(1 - e)
			},
			e.easing["easeInOut" + t] = function (e) {
				return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
			}
		})
	}
	()
})(jQuery);
(function (e) {
	var t = /up|down|vertical/,
	i = /up|left|vertical|horizontal/;
	e.effects.effect.blind = function (a, s) {
		var n,
		r,
		o,
		l = e(this),
		h = ["position", "top", "bottom", "left", "right", "height", "width"],
		u = e.effects.setMode(l, a.mode || "hide"),
		d = a.direction || "up",
		c = t.test(d),
		p = c ? "height" : "width",
		f = c ? "top" : "left",
		m = i.test(d),
		g = {},
		v = "show" === u;
		l.parent().is(".ui-effects-wrapper") ? e.effects.save(l.parent(), h) : e.effects.save(l, h),
		l.show(),
		n = e.effects.createWrapper(l).css({
				overflow : "hidden"
			}),
		r = n[p](),
		o = parseFloat(n.css(f)) || 0,
		g[p] = v ? r : 0,
		m || (l.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
				position : "absolute"
			}), g[f] = v ? o : r + o),
		v && (n.css(p, 0), m || n.css(f, o + r)),
		n.animate(g, {
			duration : a.duration,
			easing : a.easing,
			queue : !1,
			complete : function () {
				"hide" === u && l.hide(),
				e.effects.restore(l, h),
				e.effects.removeWrapper(l),
				s()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.bounce = function (t, i) {
		var a,
		s,
		n,
		r = e(this),
		o = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = e.effects.setMode(r, t.mode || "effect"),
		h = "hide" === l,
		u = "show" === l,
		d = t.direction || "up",
		c = t.distance,
		p = t.times || 5,
		f = 2 * p + (u || h ? 1 : 0),
		m = t.duration / f,
		g = t.easing,
		v = "up" === d || "down" === d ? "top" : "left",
		y = "up" === d || "left" === d,
		b = r.queue(),
		_ = b.length;
		for ((u || h) && o.push("opacity"), e.effects.save(r, o), r.show(), e.effects.createWrapper(r), c || (c = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (n = {
					opacity : 1
				}, n[v] = 0, r.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(n, m, g)), h && (c /= Math.pow(2, p - 1)), n = {}, n[v] = 0, a = 0; p > a; a++)
			s = {},
		s[v] = (y ? "-=" : "+=") + c,
		r.animate(s, m, g).animate(n, m, g),
		c = h ? 2 * c : c / 2;
		h && (s = {
				opacity : 0
			}, s[v] = (y ? "-=" : "+=") + c, r.animate(s, m, g)),
		r.queue(function () {
			h && r.hide(),
			e.effects.restore(r, o),
			e.effects.removeWrapper(r),
			i()
		}),
		_ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))),
		r.dequeue()
	}
})(jQuery);
(function (e) {
	e.effects.effect.clip = function (t, i) {
		var a,
		s,
		n,
		r = e(this),
		o = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = e.effects.setMode(r, t.mode || "hide"),
		h = "show" === l,
		u = t.direction || "vertical",
		d = "vertical" === u,
		c = d ? "height" : "width",
		p = d ? "top" : "left",
		f = {};
		e.effects.save(r, o),
		r.show(),
		a = e.effects.createWrapper(r).css({
				overflow : "hidden"
			}),
		s = "IMG" === r[0].tagName ? a : r,
		n = s[c](),
		h && (s.css(c, 0), s.css(p, n / 2)),
		f[c] = h ? n : 0,
		f[p] = h ? 0 : n / 2,
		s.animate(f, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : function () {
				h || r.hide(),
				e.effects.restore(r, o),
				e.effects.removeWrapper(r),
				i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.drop = function (t, i) {
		var a,
		s = e(this),
		n = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
		r = e.effects.setMode(s, t.mode || "hide"),
		o = "show" === r,
		l = t.direction || "left",
		h = "up" === l || "down" === l ? "top" : "left",
		u = "up" === l || "left" === l ? "pos" : "neg",
		d = {
			opacity : o ? 1 : 0
		};
		e.effects.save(s, n),
		s.show(),
		e.effects.createWrapper(s),
		a = t.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
		o && s.css("opacity", 0).css(h, "pos" === u ? -a : a),
		d[h] = (o ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + a,
		s.animate(d, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : function () {
				"hide" === r && s.hide(),
				e.effects.restore(s, n),
				e.effects.removeWrapper(s),
				i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.explode = function (t, i) {
		function s() {
			b.push(this),
			b.length === d * c && a()
		}
		function a() {
			p.css({
				visibility : "visible"
			}),
			e(b).remove(),
			m || p.hide(),
			i()
		}
		var n,
		r,
		o,
		l,
		h,
		u,
		d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
		c = d,
		p = e(this),
		f = e.effects.setMode(p, t.mode || "hide"),
		m = "show" === f,
		g = p.show().css("visibility", "hidden").offset(),
		v = Math.ceil(p.outerWidth() / c),
		y = Math.ceil(p.outerHeight() / d),
		b = [];
		for (n = 0; d > n; n++)
			for (l = g.top + n * y, u = n - (d - 1) / 2, r = 0; c > r; r++)
				var divdiv = "<div></div>";
				o = g.left + r * v, h = r - (c - 1) / 2, p.clone().appendTo("body").wrap(divdiv).css({
					position : "absolute",
					visibility : "visible",
					left : -r * v,
					top : -n * y
				}).parent().addClass("ui-effects-explode").css({
					position : "absolute",
					overflow : "hidden",
					width : v,
					height : y,
					left : o + (m ? h * v : 0),
					top : l + (m ? u * y : 0),
					opacity : m ? 0 : 1
				}).animate({
					left : o + (m ? 0 : h * v),
					top : l + (m ? 0 : u * y),
					opacity : m ? 1 : 0
				}, t.duration || 500, t.easing, s)
	}
})(jQuery);
(function (e) {
	e.effects.effect.fade = function (t, i) {
		var s = e(this),
		a = e.effects.setMode(s, t.mode || "toggle");
		s.animate({
			opacity : a
		}, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : i
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.fold = function (t, i) {
		var s,
		a,
		n = e(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		o = e.effects.setMode(n, t.mode || "hide"),
		l = "show" === o,
		h = "hide" === o,
		u = t.size || 15,
		d = /([0-9]+)%/.exec(u),
		c = !!t.horizFirst,
		p = l !== c,
		f = p ? ["width", "height"] : ["height", "width"],
		m = t.duration / 2,
		g = {},
		v = {};
		e.effects.save(n, r),
		n.show(),
		s = e.effects.createWrapper(n).css({
				overflow : "hidden"
			}),
		a = p ? [s.width(), s.height()] : [s.height(), s.width()],
		d && (u = parseInt(d[1], 10) / 100 * a[h ? 0 : 1]),
		l && s.css(c ? {
			height : 0,
			width : u
		}
			 : {
			height : u,
			width : 0
		}),
		g[f[0]] = l ? a[0] : u,
		v[f[1]] = l ? a[1] : 0,
		s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
			h && n.hide(),
			e.effects.restore(n, r),
			e.effects.removeWrapper(n),
			i()
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.highlight = function (t, i) {
		var s = e(this),
		a = ["backgroundImage", "backgroundColor", "opacity"],
		n = e.effects.setMode(s, t.mode || "show"),
		r = {
			backgroundColor : s.css("backgroundColor")
		};
		"hide" === n && (r.opacity = 0),
		e.effects.save(s, a),
		s.show().css({
			backgroundImage : "none",
			backgroundColor : t.color || "#ffff99"
		}).animate(r, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : function () {
				"hide" === n && s.hide(),
				e.effects.restore(s, a),
				i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.pulsate = function (t, i) {
		var s,
		a = e(this),
		n = e.effects.setMode(a, t.mode || "show"),
		r = "show" === n,
		o = "hide" === n,
		l = r || "hide" === n,
		h = 2 * (t.times || 5) + (l ? 1 : 0),
		u = t.duration / h,
		d = 0,
		c = a.queue(),
		p = c.length;
		for ((r || !a.is(":visible")) && (a.css("opacity", 0).show(), d = 1), s = 1; h > s; s++)
			a.animate({
				opacity : d
			}, u, t.easing), d = 1 - d;
		a.animate({
			opacity : d
		}, u, t.easing),
		a.queue(function () {
			o && a.hide(),
			i()
		}),
		p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, h + 1))),
		a.dequeue()
	}
})(jQuery);
(function (e) {
	e.effects.effect.puff = function (t, i) {
		var s = e(this),
		a = e.effects.setMode(s, t.mode || "hide"),
		n = "hide" === a,
		r = parseInt(t.percent, 10) || 150,
		o = r / 100,
		h = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		};
		e.extend(t, {
			effect : "scale",
			queue : !1,
			fade : !0,
			mode : a,
			complete : i,
			percent : n ? r : 100,
			from : n ? h : {
				height : h.height * o,
				width : h.width * o,
				outerHeight : h.outerHeight * o,
				outerWidth : h.outerWidth * o
			}
		}),
		s.effect(t)
	},
	e.effects.effect.scale = function (t, i) {
		var s = e(this),
		a = e.extend(!0, {}, t),
		n = e.effects.setMode(s, t.mode || "effect"),
		r = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === n ? 0 : 100),
		o = t.direction || "both",
		h = t.origin,
		l = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		},
		u = {
			y : "horizontal" !== o ? r / 100 : 1,
			x : "vertical" !== o ? r / 100 : 1
		};
		a.effect = "size",
		a.queue = !1,
		a.complete = i,
		"effect" !== n && (a.origin = h || ["middle", "center"], a.restore = !0),
		a.from = t.from || ("show" === n ? {
				height : 0,
				width : 0,
				outerHeight : 0,
				outerWidth : 0
			}
				 : l),
		a.to = {
			height : l.height * u.y,
			width : l.width * u.x,
			outerHeight : l.outerHeight * u.y,
			outerWidth : l.outerWidth * u.x
		},
		a.fade && ("show" === n && (a.from.opacity = 0, a.to.opacity = 1), "hide" === n && (a.from.opacity = 1, a.to.opacity = 0)),
		s.effect(a)
	},
	e.effects.effect.size = function (t, i) {
		var s,
		a,
		n,
		r = e(this),
		o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
		h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
		l = ["width", "height", "overflow"],
		u = ["fontSize"],
		d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
		c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
		p = e.effects.setMode(r, t.mode || "effect"),
		f = t.restore || "effect" !== p,
		m = t.scale || "both",
		g = t.origin || ["middle", "center"],
		v = r.css("position"),
		y = f ? o : h,
		b = {
			height : 0,
			width : 0,
			outerHeight : 0,
			outerWidth : 0
		};
		"show" === p && r.show(),
		s = {
			height : r.height(),
			width : r.width(),
			outerHeight : r.outerHeight(),
			outerWidth : r.outerWidth()
		},
		"toggle" === t.mode && "show" === p ? (r.from = t.to || b, r.to = t.from || s) : (r.from = t.from || ("show" === p ? b : s), r.to = t.to || ("hide" === p ? b : s)),
		n = {
			from : {
				y : r.from.height / s.height,
				x : r.from.width / s.width
			},
			to : {
				y : r.to.height / s.height,
				x : r.to.width / s.width
			}
		},
		("box" === m || "both" === m) && (n.from.y !== n.to.y && (y = y.concat(d), r.from = e.effects.setTransition(r, d, n.from.y, r.from), r.to = e.effects.setTransition(r, d, n.to.y, r.to)), n.from.x !== n.to.x && (y = y.concat(c), r.from = e.effects.setTransition(r, c, n.from.x, r.from), r.to = e.effects.setTransition(r, c, n.to.x, r.to))),
		("content" === m || "both" === m) && n.from.y !== n.to.y && (y = y.concat(u).concat(l), r.from = e.effects.setTransition(r, u, n.from.y, r.from), r.to = e.effects.setTransition(r, u, n.to.y, r.to)),
		e.effects.save(r, y),
		r.show(),
		e.effects.createWrapper(r),
		r.css("overflow", "hidden").css(r.from),
		g && (a = e.effects.getBaseline(g, s), r.from.top = (s.outerHeight - r.outerHeight()) * a.y, r.from.left = (s.outerWidth - r.outerWidth()) * a.x, r.to.top = (s.outerHeight - r.to.outerHeight) * a.y, r.to.left = (s.outerWidth - r.to.outerWidth) * a.x),
		r.css(r.from),
		("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = o.concat(d).concat(c), r.find("*[width]").each(function () {
				var i = e(this),
				s = {
					height : i.height(),
					width : i.width(),
					outerHeight : i.outerHeight(),
					outerWidth : i.outerWidth()
				};
				f && e.effects.save(i, l),
				i.from = {
					height : s.height * n.from.y,
					width : s.width * n.from.x,
					outerHeight : s.outerHeight * n.from.y,
					outerWidth : s.outerWidth * n.from.x
				},
				i.to = {
					height : s.height * n.to.y,
					width : s.width * n.to.x,
					outerHeight : s.height * n.to.y,
					outerWidth : s.width * n.to.x
				},
				n.from.y !== n.to.y && (i.from = e.effects.setTransition(i, d, n.from.y, i.from), i.to = e.effects.setTransition(i, d, n.to.y, i.to)),
				n.from.x !== n.to.x && (i.from = e.effects.setTransition(i, c, n.from.x, i.from), i.to = e.effects.setTransition(i, c, n.to.x, i.to)),
				i.css(i.from),
				i.animate(i.to, t.duration, t.easing, function () {
					f && e.effects.restore(i, l)
				})
			})),
		r.animate(r.to, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : function () {
				0 === r.to.opacity && r.css("opacity", r.from.opacity),
				"hide" === p && r.hide(),
				e.effects.restore(r, y),
				f || ("static" === v ? r.css({
						position : "relative",
						top : r.to.top,
						left : r.to.left
					}) : e.each(["top", "left"], function (e, t) {
						r.css(t, function (t, i) {
							var s = parseInt(i, 10),
							a = e ? r.to.left : r.to.top;
							return "auto" === i ? a + "px" : s + a + "px"
						})
					})),
				e.effects.removeWrapper(r),
				i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.shake = function (t, i) {
		var s,
		a = e(this),
		n = ["position", "top", "bottom", "left", "right", "height", "width"],
		r = e.effects.setMode(a, t.mode || "effect"),
		o = t.direction || "left",
		h = t.distance || 20,
		l = t.times || 3,
		u = 2 * l + 1,
		d = Math.round(t.duration / u),
		c = "up" === o || "down" === o ? "top" : "left",
		p = "up" === o || "left" === o,
		f = {},
		m = {},
		g = {},
		v = a.queue(),
		y = v.length;
		for (e.effects.save(a, n), a.show(), e.effects.createWrapper(a), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, a.animate(f, d, t.easing), s = 1; l > s; s++)
			a.animate(m, d, t.easing).animate(g, d, t.easing);
		a.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
			"hide" === r && a.hide(),
			e.effects.restore(a, n),
			e.effects.removeWrapper(a),
			i()
		}),
		y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))),
		a.dequeue()
	}
})(jQuery);
(function (e) {
	e.effects.effect.slide = function (t, i) {
		var s,
		a = e(this),
		n = ["position", "top", "bottom", "left", "right", "width", "height"],
		r = e.effects.setMode(a, t.mode || "show"),
		o = "show" === r,
		h = t.direction || "left",
		l = "up" === h || "down" === h ? "top" : "left",
		u = "up" === h || "left" === h,
		d = {};
		e.effects.save(a, n),
		a.show(),
		s = t.distance || a["top" === l ? "outerHeight" : "outerWidth"](!0),
		e.effects.createWrapper(a).css({
			overflow : "hidden"
		}),
		o && a.css(l, u ? isNaN(s) ? "-" + s : -s : s),
		d[l] = (o ? u ? "+=" : "-=" : u ? "-=" : "+=") + s,
		a.animate(d, {
			queue : !1,
			duration : t.duration,
			easing : t.easing,
			complete : function () {
				"hide" === r && a.hide(),
				e.effects.restore(a, n),
				e.effects.removeWrapper(a),
				i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.transfer = function (t, i) {
		var s = e(this),
		a = e(t.to),
		n = "fixed" === a.css("position"),
		r = e("body"),
		o = n ? r.scrollTop() : 0,
		h = n ? r.scrollLeft() : 0,
		l = a.offset(),
		u = {
			top : l.top - o,
			left : l.left - h,
			height : a.innerHeight(),
			width : a.innerWidth()
		},
		d = s.offset(),
		c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
				top : d.top - o,
				left : d.left - h,
				height : s.innerHeight(),
				width : s.innerWidth(),
				position : n ? "fixed" : "absolute"
			}).animate(u, t.duration, t.easing, function () {
				c.remove(),
				i()
			})
	}
})(jQuery);
