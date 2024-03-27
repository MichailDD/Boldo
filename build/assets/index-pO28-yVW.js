;(function () {
	const e = document.createElement('link').relList
	if (e && e.supports && e.supports('modulepreload')) return
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n)
	new MutationObserver((n) => {
		for (const r of n)
			if (r.type === 'childList')
				for (const l of r.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && s(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function t(n) {
		const r = {}
		return (
			n.integrity && (r.integrity = n.integrity),
			n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
			n.crossOrigin === 'use-credentials'
				? (r.credentials = 'include')
				: n.crossOrigin === 'anonymous'
				? (r.credentials = 'omit')
				: (r.credentials = 'same-origin'),
			r
		)
	}
	function s(n) {
		if (n.ep) return
		n.ep = !0
		const r = t(n)
		fetch(n.href, r)
	}
})()
function ye() {
	const i = document.querySelector('.header__burger'),
		e = document.querySelector('.header__menu'),
		t = document.querySelector('body')
	i.addEventListener('click', function () {
		i.classList.toggle('active'),
			e.classList.toggle('open'),
			t.classList.toggle('lock')
	})
}
function re(i) {
	return (
		i !== null &&
		typeof i == 'object' &&
		'constructor' in i &&
		i.constructor === Object
	)
}
function ee(i, e) {
	i === void 0 && (i = {}),
		e === void 0 && (e = {}),
		Object.keys(e).forEach((t) => {
			typeof i[t] > 'u'
				? (i[t] = e[t])
				: re(e[t]) && re(i[t]) && Object.keys(e[t]).length > 0 && ee(i[t], e[t])
		})
}
const ue = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: '' },
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return { initEvent() {} }
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			}
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: ''
	}
}
function N() {
	const i = typeof document < 'u' ? document : {}
	return ee(i, ue), i
}
const xe = {
	document: ue,
	navigator: { userAgent: '' },
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: ''
	},
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ''
			}
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(i) {
		return typeof setTimeout > 'u' ? (i(), null) : setTimeout(i, 0)
	},
	cancelAnimationFrame(i) {
		typeof setTimeout > 'u' || clearTimeout(i)
	}
}
function z() {
	const i = typeof window < 'u' ? window : {}
	return ee(i, xe), i
}
function Ee(i) {
	return (
		i === void 0 && (i = ''),
		i
			.trim()
			.split(' ')
			.filter((e) => !!e.trim())
	)
}
function Pe(i) {
	const e = i
	Object.keys(e).forEach((t) => {
		try {
			e[t] = null
		} catch {}
		try {
			delete e[t]
		} catch {}
	})
}
function Q(i, e) {
	return e === void 0 && (e = 0), setTimeout(i, e)
}
function H() {
	return Date.now()
}
function Me(i) {
	const e = z()
	let t
	return (
		e.getComputedStyle && (t = e.getComputedStyle(i, null)),
		!t && i.currentStyle && (t = i.currentStyle),
		t || (t = i.style),
		t
	)
}
function Ce(i, e) {
	e === void 0 && (e = 'x')
	const t = z()
	let s, n, r
	const l = Me(i)
	return (
		t.WebKitCSSMatrix
			? ((n = l.transform || l.webkitTransform),
			  n.split(',').length > 6 &&
					(n = n
						.split(', ')
						.map((o) => o.replace(',', '.'))
						.join(', ')),
			  (r = new t.WebKitCSSMatrix(n === 'none' ? '' : n)))
			: ((r =
					l.MozTransform ||
					l.OTransform ||
					l.MsTransform ||
					l.msTransform ||
					l.transform ||
					l
						.getPropertyValue('transform')
						.replace('translate(', 'matrix(1, 0, 0, 1,')),
			  (s = r.toString().split(','))),
		e === 'x' &&
			(t.WebKitCSSMatrix
				? (n = r.m41)
				: s.length === 16
				? (n = parseFloat(s[12]))
				: (n = parseFloat(s[4]))),
		e === 'y' &&
			(t.WebKitCSSMatrix
				? (n = r.m42)
				: s.length === 16
				? (n = parseFloat(s[13]))
				: (n = parseFloat(s[5]))),
		n || 0
	)
}
function F(i) {
	return (
		typeof i == 'object' &&
		i !== null &&
		i.constructor &&
		Object.prototype.toString.call(i).slice(8, -1) === 'Object'
	)
}
function Ie(i) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u'
		? i instanceof HTMLElement
		: i && (i.nodeType === 1 || i.nodeType === 11)
}
function A() {
	const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
		e = ['__proto__', 'constructor', 'prototype']
	for (let t = 1; t < arguments.length; t += 1) {
		const s = t < 0 || arguments.length <= t ? void 0 : arguments[t]
		if (s != null && !Ie(s)) {
			const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0)
			for (let r = 0, l = n.length; r < l; r += 1) {
				const o = n[r],
					a = Object.getOwnPropertyDescriptor(s, o)
				a !== void 0 &&
					a.enumerable &&
					(F(i[o]) && F(s[o])
						? s[o].__swiper__
							? (i[o] = s[o])
							: A(i[o], s[o])
						: !F(i[o]) && F(s[o])
						? ((i[o] = {}), s[o].__swiper__ ? (i[o] = s[o]) : A(i[o], s[o]))
						: (i[o] = s[o]))
			}
		}
	}
	return i
}
function $(i, e, t) {
	i.style.setProperty(e, t)
}
function fe(i) {
	let { swiper: e, targetPosition: t, side: s } = i
	const n = z(),
		r = -e.translate
	let l = null,
		o
	const a = e.params.speed
	;(e.wrapperEl.style.scrollSnapType = 'none'),
		n.cancelAnimationFrame(e.cssModeFrameID)
	const d = t > r ? 'next' : 'prev',
		c = (m, p) => (d === 'next' && m >= p) || (d === 'prev' && m <= p),
		u = () => {
			;(o = new Date().getTime()), l === null && (l = o)
			const m = Math.max(Math.min((o - l) / a, 1), 0),
				p = 0.5 - Math.cos(m * Math.PI) / 2
			let f = r + p * (t - r)
			if ((c(f, t) && (f = t), e.wrapperEl.scrollTo({ [s]: f }), c(f, t))) {
				;(e.wrapperEl.style.overflow = 'hidden'),
					(e.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [s]: f })
					}),
					n.cancelAnimationFrame(e.cssModeFrameID)
				return
			}
			e.cssModeFrameID = n.requestAnimationFrame(u)
		}
	u()
}
function k(i, e) {
	return e === void 0 && (e = ''), [...i.children].filter((t) => t.matches(e))
}
function W(i) {
	try {
		console.warn(i)
		return
	} catch {}
}
function q(i, e) {
	e === void 0 && (e = [])
	const t = document.createElement(i)
	return t.classList.add(...(Array.isArray(e) ? e : Ee(e))), t
}
function Le(i, e) {
	const t = []
	for (; i.previousElementSibling; ) {
		const s = i.previousElementSibling
		e ? s.matches(e) && t.push(s) : t.push(s), (i = s)
	}
	return t
}
function Oe(i, e) {
	const t = []
	for (; i.nextElementSibling; ) {
		const s = i.nextElementSibling
		e ? s.matches(e) && t.push(s) : t.push(s), (i = s)
	}
	return t
}
function D(i, e) {
	return z().getComputedStyle(i, null).getPropertyValue(e)
}
function ne(i) {
	let e = i,
		t
	if (e) {
		for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1)
		return t
	}
}
function Ae(i, e) {
	const t = []
	let s = i.parentElement
	for (; s; ) e ? s.matches(e) && t.push(s) : t.push(s), (s = s.parentElement)
	return t
}
function ae(i, e, t) {
	const s = z()
	return t
		? i[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
				parseFloat(
					s
						.getComputedStyle(i, null)
						.getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')
				) +
				parseFloat(
					s
						.getComputedStyle(i, null)
						.getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')
				)
		: i.offsetWidth
}
function G(i) {
	return (Array.isArray(i) ? i : [i]).filter((e) => !!e)
}
let j
function ze() {
	const i = z(),
		e = N()
	return {
		smoothScroll:
			e.documentElement &&
			e.documentElement.style &&
			'scrollBehavior' in e.documentElement.style,
		touch: !!(
			'ontouchstart' in i ||
			(i.DocumentTouch && e instanceof i.DocumentTouch)
		)
	}
}
function pe() {
	return j || (j = ze()), j
}
let Y
function ke(i) {
	let { userAgent: e } = i === void 0 ? {} : i
	const t = pe(),
		s = z(),
		n = s.navigator.platform,
		r = e || s.navigator.userAgent,
		l = { ios: !1, android: !1 },
		o = s.screen.width,
		a = s.screen.height,
		d = r.match(/(Android);?[\s\/]+([\d.]+)?/)
	let c = r.match(/(iPad).*OS\s([\d_]+)/)
	const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
		m = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		p = n === 'Win32'
	let f = n === 'MacIntel'
	const h = [
		'1024x1366',
		'1366x1024',
		'834x1194',
		'1194x834',
		'834x1112',
		'1112x834',
		'768x1024',
		'1024x768',
		'820x1180',
		'1180x820',
		'810x1080',
		'1080x810'
	]
	return (
		!c &&
			f &&
			t.touch &&
			h.indexOf(`${o}x${a}`) >= 0 &&
			((c = r.match(/(Version)\/([\d.]+)/)),
			c || (c = [0, 1, '13_0_0']),
			(f = !1)),
		d && !p && ((l.os = 'android'), (l.android = !0)),
		(c || m || u) && ((l.os = 'ios'), (l.ios = !0)),
		l
	)
}
function me(i) {
	return i === void 0 && (i = {}), Y || (Y = ke(i)), Y
}
let X
function Ge() {
	const i = z(),
		e = me()
	let t = !1
	function s() {
		const o = i.navigator.userAgent.toLowerCase()
		return (
			o.indexOf('safari') >= 0 &&
			o.indexOf('chrome') < 0 &&
			o.indexOf('android') < 0
		)
	}
	if (s()) {
		const o = String(i.navigator.userAgent)
		if (o.includes('Version/')) {
			const [a, d] = o
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map((c) => Number(c))
			t = a < 16 || (a === 16 && d < 2)
		}
	}
	const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
			i.navigator.userAgent
		),
		r = s(),
		l = r || (n && e.ios)
	return { isSafari: t || r, needPerspectiveFix: t, need3dFix: l, isWebView: n }
}
function _e() {
	return X || (X = Ge()), X
}
function De(i) {
	let { swiper: e, on: t, emit: s } = i
	const n = z()
	let r = null,
		l = null
	const o = () => {
			!e || e.destroyed || !e.initialized || (s('beforeResize'), s('resize'))
		},
		a = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((r = new ResizeObserver((u) => {
					l = n.requestAnimationFrame(() => {
						const { width: m, height: p } = e
						let f = m,
							h = p
						u.forEach((w) => {
							let { contentBoxSize: g, contentRect: S, target: v } = w
							;(v && v !== e.el) ||
								((f = S ? S.width : (g[0] || g).inlineSize),
								(h = S ? S.height : (g[0] || g).blockSize))
						}),
							(f !== m || h !== p) && o()
					})
				})),
				r.observe(e.el))
		},
		d = () => {
			l && n.cancelAnimationFrame(l),
				r && r.unobserve && e.el && (r.unobserve(e.el), (r = null))
		},
		c = () => {
			!e || e.destroyed || !e.initialized || s('orientationchange')
		}
	t('init', () => {
		if (e.params.resizeObserver && typeof n.ResizeObserver < 'u') {
			a()
			return
		}
		n.addEventListener('resize', o), n.addEventListener('orientationchange', c)
	}),
		t('destroy', () => {
			d(),
				n.removeEventListener('resize', o),
				n.removeEventListener('orientationchange', c)
		})
}
function Ve(i) {
	let { swiper: e, extendParams: t, on: s, emit: n } = i
	const r = [],
		l = z(),
		o = function (c, u) {
			u === void 0 && (u = {})
			const m = l.MutationObserver || l.WebkitMutationObserver,
				p = new m((f) => {
					if (e.__preventObserver__) return
					if (f.length === 1) {
						n('observerUpdate', f[0])
						return
					}
					const h = function () {
						n('observerUpdate', f[0])
					}
					l.requestAnimationFrame
						? l.requestAnimationFrame(h)
						: l.setTimeout(h, 0)
				})
			p.observe(c, {
				attributes: typeof u.attributes > 'u' ? !0 : u.attributes,
				childList: typeof u.childList > 'u' ? !0 : u.childList,
				characterData: typeof u.characterData > 'u' ? !0 : u.characterData
			}),
				r.push(p)
		},
		a = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const c = Ae(e.hostEl)
					for (let u = 0; u < c.length; u += 1) o(c[u])
				}
				o(e.hostEl, { childList: e.params.observeSlideChildren }),
					o(e.wrapperEl, { attributes: !1 })
			}
		},
		d = () => {
			r.forEach((c) => {
				c.disconnect()
			}),
				r.splice(0, r.length)
		}
	t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
		s('init', a),
		s('destroy', d)
}
var Be = {
	on(i, e, t) {
		const s = this
		if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
		const n = t ? 'unshift' : 'push'
		return (
			i.split(' ').forEach((r) => {
				s.eventsListeners[r] || (s.eventsListeners[r] = []),
					s.eventsListeners[r][n](e)
			}),
			s
		)
	},
	once(i, e, t) {
		const s = this
		if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
		function n() {
			s.off(i, n), n.__emitterProxy && delete n.__emitterProxy
			for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
				l[o] = arguments[o]
			e.apply(s, l)
		}
		return (n.__emitterProxy = e), s.on(i, n, t)
	},
	onAny(i, e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || typeof i != 'function') return t
		const s = e ? 'unshift' : 'push'
		return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
	},
	offAny(i) {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
		const t = e.eventsAnyListeners.indexOf(i)
		return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
	},
	off(i, e) {
		const t = this
		return (
			!t.eventsListeners ||
				t.destroyed ||
				!t.eventsListeners ||
				i.split(' ').forEach((s) => {
					typeof e > 'u'
						? (t.eventsListeners[s] = [])
						: t.eventsListeners[s] &&
						  t.eventsListeners[s].forEach((n, r) => {
								;(n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
									t.eventsListeners[s].splice(r, 1)
						  })
				}),
			t
		)
	},
	emit() {
		const i = this
		if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i
		let e, t, s
		for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
			r[l] = arguments[l]
		return (
			typeof r[0] == 'string' || Array.isArray(r[0])
				? ((e = r[0]), (t = r.slice(1, r.length)), (s = i))
				: ((e = r[0].events), (t = r[0].data), (s = r[0].context || i)),
			t.unshift(s),
			(Array.isArray(e) ? e : e.split(' ')).forEach((a) => {
				i.eventsAnyListeners &&
					i.eventsAnyListeners.length &&
					i.eventsAnyListeners.forEach((d) => {
						d.apply(s, [a, ...t])
					}),
					i.eventsListeners &&
						i.eventsListeners[a] &&
						i.eventsListeners[a].forEach((d) => {
							d.apply(s, t)
						})
			}),
			i
		)
	}
}
function Ne() {
	const i = this
	let e, t
	const s = i.el
	typeof i.params.width < 'u' && i.params.width !== null
		? (e = i.params.width)
		: (e = s.clientWidth),
		typeof i.params.height < 'u' && i.params.height !== null
			? (t = i.params.height)
			: (t = s.clientHeight),
		!((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
			((e =
				e -
				parseInt(D(s, 'padding-left') || 0, 10) -
				parseInt(D(s, 'padding-right') || 0, 10)),
			(t =
				t -
				parseInt(D(s, 'padding-top') || 0, 10) -
				parseInt(D(s, 'padding-bottom') || 0, 10)),
			Number.isNaN(e) && (e = 0),
			Number.isNaN(t) && (t = 0),
			Object.assign(i, { width: e, height: t, size: i.isHorizontal() ? e : t }))
}
function Fe() {
	const i = this
	function e(T, E) {
		return parseFloat(T.getPropertyValue(i.getDirectionLabel(E)) || 0)
	}
	const t = i.params,
		{ wrapperEl: s, slidesEl: n, size: r, rtlTranslate: l, wrongRTL: o } = i,
		a = i.virtual && t.virtual.enabled,
		d = a ? i.virtual.slides.length : i.slides.length,
		c = k(n, `.${i.params.slideClass}, swiper-slide`),
		u = a ? i.virtual.slides.length : c.length
	let m = []
	const p = [],
		f = []
	let h = t.slidesOffsetBefore
	typeof h == 'function' && (h = t.slidesOffsetBefore.call(i))
	let w = t.slidesOffsetAfter
	typeof w == 'function' && (w = t.slidesOffsetAfter.call(i))
	const g = i.snapGrid.length,
		S = i.slidesGrid.length
	let v = t.spaceBetween,
		b = -h,
		y = 0,
		M = 0
	if (typeof r > 'u') return
	typeof v == 'string' && v.indexOf('%') >= 0
		? (v = (parseFloat(v.replace('%', '')) / 100) * r)
		: typeof v == 'string' && (v = parseFloat(v)),
		(i.virtualSize = -v),
		c.forEach((T) => {
			l ? (T.style.marginLeft = '') : (T.style.marginRight = ''),
				(T.style.marginBottom = ''),
				(T.style.marginTop = '')
		}),
		t.centeredSlides &&
			t.cssMode &&
			($(s, '--swiper-centered-offset-before', ''),
			$(s, '--swiper-centered-offset-after', ''))
	const V = t.grid && t.grid.rows > 1 && i.grid
	V ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides()
	let C
	const B =
		t.slidesPerView === 'auto' &&
		t.breakpoints &&
		Object.keys(t.breakpoints).filter(
			(T) => typeof t.breakpoints[T].slidesPerView < 'u'
		).length > 0
	for (let T = 0; T < u; T += 1) {
		C = 0
		let E
		if (
			(c[T] && (E = c[T]),
			V && i.grid.updateSlide(T, E, c),
			!(c[T] && D(E, 'display') === 'none'))
		) {
			if (t.slidesPerView === 'auto') {
				B && (c[T].style[i.getDirectionLabel('width')] = '')
				const P = getComputedStyle(E),
					x = E.style.transform,
					I = E.style.webkitTransform
				if (
					(x && (E.style.transform = 'none'),
					I && (E.style.webkitTransform = 'none'),
					t.roundLengths)
				)
					C = i.isHorizontal() ? ae(E, 'width', !0) : ae(E, 'height', !0)
				else {
					const L = e(P, 'width'),
						_ = e(P, 'padding-left'),
						Se = e(P, 'padding-right'),
						te = e(P, 'margin-left'),
						ie = e(P, 'margin-right'),
						se = P.getPropertyValue('box-sizing')
					if (se && se === 'border-box') C = L + te + ie
					else {
						const { clientWidth: Te, offsetWidth: be } = E
						C = L + _ + Se + te + ie + (be - Te)
					}
				}
				x && (E.style.transform = x),
					I && (E.style.webkitTransform = I),
					t.roundLengths && (C = Math.floor(C))
			} else
				(C = (r - (t.slidesPerView - 1) * v) / t.slidesPerView),
					t.roundLengths && (C = Math.floor(C)),
					c[T] && (c[T].style[i.getDirectionLabel('width')] = `${C}px`)
			c[T] && (c[T].swiperSlideSize = C),
				f.push(C),
				t.centeredSlides
					? ((b = b + C / 2 + y / 2 + v),
					  y === 0 && T !== 0 && (b = b - r / 2 - v),
					  T === 0 && (b = b - r / 2 - v),
					  Math.abs(b) < 1 / 1e3 && (b = 0),
					  t.roundLengths && (b = Math.floor(b)),
					  M % t.slidesPerGroup === 0 && m.push(b),
					  p.push(b))
					: (t.roundLengths && (b = Math.floor(b)),
					  (M - Math.min(i.params.slidesPerGroupSkip, M)) %
							i.params.slidesPerGroup ===
							0 && m.push(b),
					  p.push(b),
					  (b = b + C + v)),
				(i.virtualSize += C + v),
				(y = C),
				(M += 1)
		}
	}
	if (
		((i.virtualSize = Math.max(i.virtualSize, r) + w),
		l &&
			o &&
			(t.effect === 'slide' || t.effect === 'coverflow') &&
			(s.style.width = `${i.virtualSize + v}px`),
		t.setWrapperSize &&
			(s.style[i.getDirectionLabel('width')] = `${i.virtualSize + v}px`),
		V && i.grid.updateWrapperSize(C, m),
		!t.centeredSlides)
	) {
		const T = []
		for (let E = 0; E < m.length; E += 1) {
			let P = m[E]
			t.roundLengths && (P = Math.floor(P)),
				m[E] <= i.virtualSize - r && T.push(P)
		}
		;(m = T),
			Math.floor(i.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 &&
				m.push(i.virtualSize - r)
	}
	if (a && t.loop) {
		const T = f[0] + v
		if (t.slidesPerGroup > 1) {
			const E = Math.ceil(
					(i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup
				),
				P = T * t.slidesPerGroup
			for (let x = 0; x < E; x += 1) m.push(m[m.length - 1] + P)
		}
		for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1)
			t.slidesPerGroup === 1 && m.push(m[m.length - 1] + T),
				p.push(p[p.length - 1] + T),
				(i.virtualSize += T)
	}
	if ((m.length === 0 && (m = [0]), v !== 0)) {
		const T =
			i.isHorizontal() && l ? 'marginLeft' : i.getDirectionLabel('marginRight')
		c.filter((E, P) =>
			!t.cssMode || t.loop ? !0 : P !== c.length - 1
		).forEach((E) => {
			E.style[T] = `${v}px`
		})
	}
	if (t.centeredSlides && t.centeredSlidesBounds) {
		let T = 0
		f.forEach((P) => {
			T += P + (v || 0)
		}),
			(T -= v)
		const E = T - r
		m = m.map((P) => (P <= 0 ? -h : P > E ? E + w : P))
	}
	if (t.centerInsufficientSlides) {
		let T = 0
		if (
			(f.forEach((E) => {
				T += E + (v || 0)
			}),
			(T -= v),
			T < r)
		) {
			const E = (r - T) / 2
			m.forEach((P, x) => {
				m[x] = P - E
			}),
				p.forEach((P, x) => {
					p[x] = P + E
				})
		}
	}
	if (
		(Object.assign(i, {
			slides: c,
			snapGrid: m,
			slidesGrid: p,
			slidesSizesGrid: f
		}),
		t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
	) {
		$(s, '--swiper-centered-offset-before', `${-m[0]}px`),
			$(
				s,
				'--swiper-centered-offset-after',
				`${i.size / 2 - f[f.length - 1] / 2}px`
			)
		const T = -i.snapGrid[0],
			E = -i.slidesGrid[0]
		;(i.snapGrid = i.snapGrid.map((P) => P + T)),
			(i.slidesGrid = i.slidesGrid.map((P) => P + E))
	}
	if (
		(u !== d && i.emit('slidesLengthChange'),
		m.length !== g &&
			(i.params.watchOverflow && i.checkOverflow(),
			i.emit('snapGridLengthChange')),
		p.length !== S && i.emit('slidesGridLengthChange'),
		t.watchSlidesProgress && i.updateSlidesOffset(),
		i.emit('slidesUpdated'),
		!a && !t.cssMode && (t.effect === 'slide' || t.effect === 'fade'))
	) {
		const T = `${t.containerModifierClass}backface-hidden`,
			E = i.el.classList.contains(T)
		u <= t.maxBackfaceHiddenSlides
			? E || i.el.classList.add(T)
			: E && i.el.classList.remove(T)
	}
}
function $e(i) {
	const e = this,
		t = [],
		s = e.virtual && e.params.virtual.enabled
	let n = 0,
		r
	typeof i == 'number'
		? e.setTransition(i)
		: i === !0 && e.setTransition(e.params.speed)
	const l = (o) => (s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o])
	if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)
			(e.visibleSlides || []).forEach((o) => {
				t.push(o)
			})
		else
			for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
				const o = e.activeIndex + r
				if (o > e.slides.length && !s) break
				t.push(l(o))
			}
	else t.push(l(e.activeIndex))
	for (r = 0; r < t.length; r += 1)
		if (typeof t[r] < 'u') {
			const o = t[r].offsetHeight
			n = o > n ? o : n
		}
	;(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}
function Re() {
	const i = this,
		e = i.slides,
		t = i.isElement
			? i.isHorizontal()
				? i.wrapperEl.offsetLeft
				: i.wrapperEl.offsetTop
			: 0
	for (let s = 0; s < e.length; s += 1)
		e[s].swiperSlideOffset =
			(i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
			t -
			i.cssOverflowAdjustment()
}
function He(i) {
	i === void 0 && (i = (this && this.translate) || 0)
	const e = this,
		t = e.params,
		{ slides: s, rtlTranslate: n, snapGrid: r } = e
	if (s.length === 0) return
	typeof s[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
	let l = -i
	n && (l = i),
		s.forEach((a) => {
			a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass)
		}),
		(e.visibleSlidesIndexes = []),
		(e.visibleSlides = [])
	let o = t.spaceBetween
	typeof o == 'string' && o.indexOf('%') >= 0
		? (o = (parseFloat(o.replace('%', '')) / 100) * e.size)
		: typeof o == 'string' && (o = parseFloat(o))
	for (let a = 0; a < s.length; a += 1) {
		const d = s[a]
		let c = d.swiperSlideOffset
		t.cssMode && t.centeredSlides && (c -= s[0].swiperSlideOffset)
		const u =
				(l + (t.centeredSlides ? e.minTranslate() : 0) - c) /
				(d.swiperSlideSize + o),
			m =
				(l - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
				(d.swiperSlideSize + o),
			p = -(l - c),
			f = p + e.slidesSizesGrid[a],
			h = p >= 0 && p <= e.size - e.slidesSizesGrid[a]
		;((p >= 0 && p < e.size - 1) ||
			(f > 1 && f <= e.size) ||
			(p <= 0 && f >= e.size)) &&
			(e.visibleSlides.push(d),
			e.visibleSlidesIndexes.push(a),
			s[a].classList.add(t.slideVisibleClass)),
			h && s[a].classList.add(t.slideFullyVisibleClass),
			(d.progress = n ? -u : u),
			(d.originalProgress = n ? -m : m)
	}
}
function We(i) {
	const e = this
	if (typeof i > 'u') {
		const c = e.rtlTranslate ? -1 : 1
		i = (e && e.translate && e.translate * c) || 0
	}
	const t = e.params,
		s = e.maxTranslate() - e.minTranslate()
	let { progress: n, isBeginning: r, isEnd: l, progressLoop: o } = e
	const a = r,
		d = l
	if (s === 0) (n = 0), (r = !0), (l = !0)
	else {
		n = (i - e.minTranslate()) / s
		const c = Math.abs(i - e.minTranslate()) < 1,
			u = Math.abs(i - e.maxTranslate()) < 1
		;(r = c || n <= 0), (l = u || n >= 1), c && (n = 0), u && (n = 1)
	}
	if (t.loop) {
		const c = e.getSlideIndexByData(0),
			u = e.getSlideIndexByData(e.slides.length - 1),
			m = e.slidesGrid[c],
			p = e.slidesGrid[u],
			f = e.slidesGrid[e.slidesGrid.length - 1],
			h = Math.abs(i)
		h >= m ? (o = (h - m) / f) : (o = (h + f - p) / f), o > 1 && (o -= 1)
	}
	Object.assign(e, { progress: n, progressLoop: o, isBeginning: r, isEnd: l }),
		(t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
			e.updateSlidesProgress(i),
		r && !a && e.emit('reachBeginning toEdge'),
		l && !d && e.emit('reachEnd toEdge'),
		((a && !r) || (d && !l)) && e.emit('fromEdge'),
		e.emit('progress', n)
}
function qe() {
	const i = this,
		{ slides: e, params: t, slidesEl: s, activeIndex: n } = i,
		r = i.virtual && t.virtual.enabled,
		l = i.grid && t.grid && t.grid.rows > 1,
		o = (u) => k(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0]
	e.forEach((u) => {
		u.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
	})
	let a, d, c
	if (r)
		if (t.loop) {
			let u = n - i.virtual.slidesBefore
			u < 0 && (u = i.virtual.slides.length + u),
				u >= i.virtual.slides.length && (u -= i.virtual.slides.length),
				(a = o(`[data-swiper-slide-index="${u}"]`))
		} else a = o(`[data-swiper-slide-index="${n}"]`)
	else
		l
			? ((a = e.filter((u) => u.column === n)[0]),
			  (c = e.filter((u) => u.column === n + 1)[0]),
			  (d = e.filter((u) => u.column === n - 1)[0]))
			: (a = e[n])
	a &&
		(a.classList.add(t.slideActiveClass),
		l
			? (c && c.classList.add(t.slideNextClass),
			  d && d.classList.add(t.slidePrevClass))
			: ((c = Oe(a, `.${t.slideClass}, swiper-slide`)[0]),
			  t.loop && !c && (c = e[0]),
			  c && c.classList.add(t.slideNextClass),
			  (d = Le(a, `.${t.slideClass}, swiper-slide`)[0]),
			  t.loop && !d === 0 && (d = e[e.length - 1]),
			  d && d.classList.add(t.slidePrevClass))),
		i.emitSlidesClasses()
}
const R = (i, e) => {
		if (!i || i.destroyed || !i.params) return
		const t = () => (i.isElement ? 'swiper-slide' : `.${i.params.slideClass}`),
			s = e.closest(t())
		if (s) {
			let n = s.querySelector(`.${i.params.lazyPreloaderClass}`)
			!n &&
				i.isElement &&
				(s.shadowRoot
					? (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`))
					: requestAnimationFrame(() => {
							s.shadowRoot &&
								((n = s.shadowRoot.querySelector(
									`.${i.params.lazyPreloaderClass}`
								)),
								n && n.remove())
					  })),
				n && n.remove()
		}
	},
	K = (i, e) => {
		if (!i.slides[e]) return
		const t = i.slides[e].querySelector('[loading="lazy"]')
		t && t.removeAttribute('loading')
	},
	Z = (i) => {
		if (!i || i.destroyed || !i.params) return
		let e = i.params.lazyPreloadPrevNext
		const t = i.slides.length
		if (!t || !e || e < 0) return
		e = Math.min(e, t)
		const s =
				i.params.slidesPerView === 'auto'
					? i.slidesPerViewDynamic()
					: Math.ceil(i.params.slidesPerView),
			n = i.activeIndex
		if (i.params.grid && i.params.grid.rows > 1) {
			const l = n,
				o = [l - e]
			o.push(...Array.from({ length: e }).map((a, d) => l + s + d)),
				i.slides.forEach((a, d) => {
					o.includes(a.column) && K(i, d)
				})
			return
		}
		const r = n + s - 1
		if (i.params.rewind || i.params.loop)
			for (let l = n - e; l <= r + e; l += 1) {
				const o = ((l % t) + t) % t
				;(o < n || o > r) && K(i, o)
			}
		else
			for (let l = Math.max(n - e, 0); l <= Math.min(r + e, t - 1); l += 1)
				l !== n && (l > r || l < n) && K(i, l)
	}
function je(i) {
	const { slidesGrid: e, params: t } = i,
		s = i.rtlTranslate ? i.translate : -i.translate
	let n
	for (let r = 0; r < e.length; r += 1)
		typeof e[r + 1] < 'u'
			? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
				? (n = r)
				: s >= e[r] && s < e[r + 1] && (n = r + 1)
			: s >= e[r] && (n = r)
	return t.normalizeSlideIndex && (n < 0 || typeof n > 'u') && (n = 0), n
}
function Ye(i) {
	const e = this,
		t = e.rtlTranslate ? e.translate : -e.translate,
		{ snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: o } = e
	let a = i,
		d
	const c = (p) => {
		let f = p - e.virtual.slidesBefore
		return (
			f < 0 && (f = e.virtual.slides.length + f),
			f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
			f
		)
	}
	if ((typeof a > 'u' && (a = je(e)), s.indexOf(t) >= 0)) d = s.indexOf(t)
	else {
		const p = Math.min(n.slidesPerGroupSkip, a)
		d = p + Math.floor((a - p) / n.slidesPerGroup)
	}
	if ((d >= s.length && (d = s.length - 1), a === r && !e.params.loop)) {
		d !== o && ((e.snapIndex = d), e.emit('snapIndexChange'))
		return
	}
	if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
		e.realIndex = c(a)
		return
	}
	const u = e.grid && n.grid && n.grid.rows > 1
	let m
	if (e.virtual && n.virtual.enabled && n.loop) m = c(a)
	else if (u) {
		const p = e.slides.filter((h) => h.column === a)[0]
		let f = parseInt(p.getAttribute('data-swiper-slide-index'), 10)
		Number.isNaN(f) && (f = Math.max(e.slides.indexOf(p), 0)),
			(m = Math.floor(f / n.grid.rows))
	} else if (e.slides[a]) {
		const p = e.slides[a].getAttribute('data-swiper-slide-index')
		p ? (m = parseInt(p, 10)) : (m = a)
	} else m = a
	Object.assign(e, {
		previousSnapIndex: o,
		snapIndex: d,
		previousRealIndex: l,
		realIndex: m,
		previousIndex: r,
		activeIndex: a
	}),
		e.initialized && Z(e),
		e.emit('activeIndexChange'),
		e.emit('snapIndexChange'),
		(e.initialized || e.params.runCallbacksOnInit) &&
			(l !== m && e.emit('realIndexChange'), e.emit('slideChange'))
}
function Xe(i, e) {
	const t = this,
		s = t.params
	let n = i.closest(`.${s.slideClass}, swiper-slide`)
	!n &&
		t.isElement &&
		e &&
		e.length > 1 &&
		e.includes(i) &&
		[...e.slice(e.indexOf(i) + 1, e.length)].forEach((o) => {
			!n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o)
		})
	let r = !1,
		l
	if (n) {
		for (let o = 0; o < t.slides.length; o += 1)
			if (t.slides[o] === n) {
				;(r = !0), (l = o)
				break
			}
	}
	if (n && r)
		(t.clickedSlide = n),
			t.virtual && t.params.virtual.enabled
				? (t.clickedIndex = parseInt(
						n.getAttribute('data-swiper-slide-index'),
						10
				  ))
				: (t.clickedIndex = l)
	else {
		;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
		return
	}
	s.slideToClickedSlide &&
		t.clickedIndex !== void 0 &&
		t.clickedIndex !== t.activeIndex &&
		t.slideToClickedSlide()
}
var Ke = {
	updateSize: Ne,
	updateSlides: Fe,
	updateAutoHeight: $e,
	updateSlidesOffset: Re,
	updateSlidesProgress: He,
	updateProgress: We,
	updateSlidesClasses: qe,
	updateActiveIndex: Ye,
	updateClickedSlide: Xe
}
function Ue(i) {
	i === void 0 && (i = this.isHorizontal() ? 'x' : 'y')
	const e = this,
		{ params: t, rtlTranslate: s, translate: n, wrapperEl: r } = e
	if (t.virtualTranslate) return s ? -n : n
	if (t.cssMode) return n
	let l = Ce(r, i)
	return (l += e.cssOverflowAdjustment()), s && (l = -l), l || 0
}
function Je(i, e) {
	const t = this,
		{ rtlTranslate: s, params: n, wrapperEl: r, progress: l } = t
	let o = 0,
		a = 0
	const d = 0
	t.isHorizontal() ? (o = s ? -i : i) : (a = i),
		n.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
		(t.previousTranslate = t.translate),
		(t.translate = t.isHorizontal() ? o : a),
		n.cssMode
			? (r[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal()
					? -o
					: -a)
			: n.virtualTranslate ||
			  (t.isHorizontal()
					? (o -= t.cssOverflowAdjustment())
					: (a -= t.cssOverflowAdjustment()),
			  (r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`))
	let c
	const u = t.maxTranslate() - t.minTranslate()
	u === 0 ? (c = 0) : (c = (i - t.minTranslate()) / u),
		c !== l && t.updateProgress(i),
		t.emit('setTranslate', t.translate, e)
}
function Qe() {
	return -this.snapGrid[0]
}
function Ze() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function et(i, e, t, s, n) {
	i === void 0 && (i = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		s === void 0 && (s = !0)
	const r = this,
		{ params: l, wrapperEl: o } = r
	if (r.animating && l.preventInteractionOnTransition) return !1
	const a = r.minTranslate(),
		d = r.maxTranslate()
	let c
	if (
		(s && i > a ? (c = a) : s && i < d ? (c = d) : (c = i),
		r.updateProgress(c),
		l.cssMode)
	) {
		const u = r.isHorizontal()
		if (e === 0) o[u ? 'scrollLeft' : 'scrollTop'] = -c
		else {
			if (!r.support.smoothScroll)
				return (
					fe({ swiper: r, targetPosition: -c, side: u ? 'left' : 'top' }), !0
				)
			o.scrollTo({ [u ? 'left' : 'top']: -c, behavior: 'smooth' })
		}
		return !0
	}
	return (
		e === 0
			? (r.setTransition(0),
			  r.setTranslate(c),
			  t && (r.emit('beforeTransitionStart', e, n), r.emit('transitionEnd')))
			: (r.setTransition(e),
			  r.setTranslate(c),
			  t && (r.emit('beforeTransitionStart', e, n), r.emit('transitionStart')),
			  r.animating ||
					((r.animating = !0),
					r.onTranslateToWrapperTransitionEnd ||
						(r.onTranslateToWrapperTransitionEnd = function (m) {
							!r ||
								r.destroyed ||
								(m.target === this &&
									(r.wrapperEl.removeEventListener(
										'transitionend',
										r.onTranslateToWrapperTransitionEnd
									),
									(r.onTranslateToWrapperTransitionEnd = null),
									delete r.onTranslateToWrapperTransitionEnd,
									t && r.emit('transitionEnd')))
						}),
					r.wrapperEl.addEventListener(
						'transitionend',
						r.onTranslateToWrapperTransitionEnd
					))),
		!0
	)
}
var tt = {
	getTranslate: Ue,
	setTranslate: Je,
	minTranslate: Qe,
	maxTranslate: Ze,
	translateTo: et
}
function it(i, e) {
	const t = this
	t.params.cssMode ||
		((t.wrapperEl.style.transitionDuration = `${i}ms`),
		(t.wrapperEl.style.transitionDelay = i === 0 ? '0ms' : '')),
		t.emit('setTransition', i, e)
}
function he(i) {
	let { swiper: e, runCallbacks: t, direction: s, step: n } = i
	const { activeIndex: r, previousIndex: l } = e
	let o = s
	if (
		(o || (r > l ? (o = 'next') : r < l ? (o = 'prev') : (o = 'reset')),
		e.emit(`transition${n}`),
		t && r !== l)
	) {
		if (o === 'reset') {
			e.emit(`slideResetTransition${n}`)
			return
		}
		e.emit(`slideChangeTransition${n}`),
			o === 'next'
				? e.emit(`slideNextTransition${n}`)
				: e.emit(`slidePrevTransition${n}`)
	}
}
function st(i, e) {
	i === void 0 && (i = !0)
	const t = this,
		{ params: s } = t
	s.cssMode ||
		(s.autoHeight && t.updateAutoHeight(),
		he({ swiper: t, runCallbacks: i, direction: e, step: 'Start' }))
}
function rt(i, e) {
	i === void 0 && (i = !0)
	const t = this,
		{ params: s } = t
	;(t.animating = !1),
		!s.cssMode &&
			(t.setTransition(0),
			he({ swiper: t, runCallbacks: i, direction: e, step: 'End' }))
}
var nt = { setTransition: it, transitionStart: st, transitionEnd: rt }
function at(i, e, t, s, n) {
	i === void 0 && (i = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		typeof i == 'string' && (i = parseInt(i, 10))
	const r = this
	let l = i
	l < 0 && (l = 0)
	const {
		params: o,
		snapGrid: a,
		slidesGrid: d,
		previousIndex: c,
		activeIndex: u,
		rtlTranslate: m,
		wrapperEl: p,
		enabled: f
	} = r
	if (
		(r.animating && o.preventInteractionOnTransition) ||
		(!f && !s && !n) ||
		r.destroyed
	)
		return !1
	const h = Math.min(r.params.slidesPerGroupSkip, l)
	let w = h + Math.floor((l - h) / r.params.slidesPerGroup)
	w >= a.length && (w = a.length - 1)
	const g = -a[w]
	if (o.normalizeSlideIndex)
		for (let v = 0; v < d.length; v += 1) {
			const b = -Math.floor(g * 100),
				y = Math.floor(d[v] * 100),
				M = Math.floor(d[v + 1] * 100)
			typeof d[v + 1] < 'u'
				? b >= y && b < M - (M - y) / 2
					? (l = v)
					: b >= y && b < M && (l = v + 1)
				: b >= y && (l = v)
		}
	if (
		r.initialized &&
		l !== u &&
		((!r.allowSlideNext &&
			(m
				? g > r.translate && g > r.minTranslate()
				: g < r.translate && g < r.minTranslate())) ||
			(!r.allowSlidePrev &&
				g > r.translate &&
				g > r.maxTranslate() &&
				(u || 0) !== l))
	)
		return !1
	l !== (c || 0) && t && r.emit('beforeSlideChangeStart'), r.updateProgress(g)
	let S
	if (
		(l > u ? (S = 'next') : l < u ? (S = 'prev') : (S = 'reset'),
		(m && -g === r.translate) || (!m && g === r.translate))
	)
		return (
			r.updateActiveIndex(l),
			o.autoHeight && r.updateAutoHeight(),
			r.updateSlidesClasses(),
			o.effect !== 'slide' && r.setTranslate(g),
			S !== 'reset' && (r.transitionStart(t, S), r.transitionEnd(t, S)),
			!1
		)
	if (o.cssMode) {
		const v = r.isHorizontal(),
			b = m ? g : -g
		if (e === 0) {
			const y = r.virtual && r.params.virtual.enabled
			y &&
				((r.wrapperEl.style.scrollSnapType = 'none'),
				(r._immediateVirtual = !0)),
				y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
					? ((r._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							p[v ? 'scrollLeft' : 'scrollTop'] = b
					  }))
					: (p[v ? 'scrollLeft' : 'scrollTop'] = b),
				y &&
					requestAnimationFrame(() => {
						;(r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1)
					})
		} else {
			if (!r.support.smoothScroll)
				return (
					fe({ swiper: r, targetPosition: b, side: v ? 'left' : 'top' }), !0
				)
			p.scrollTo({ [v ? 'left' : 'top']: b, behavior: 'smooth' })
		}
		return !0
	}
	return (
		r.setTransition(e),
		r.setTranslate(g),
		r.updateActiveIndex(l),
		r.updateSlidesClasses(),
		r.emit('beforeTransitionStart', e, s),
		r.transitionStart(t, S),
		e === 0
			? r.transitionEnd(t, S)
			: r.animating ||
			  ((r.animating = !0),
			  r.onSlideToWrapperTransitionEnd ||
					(r.onSlideToWrapperTransitionEnd = function (b) {
						!r ||
							r.destroyed ||
							(b.target === this &&
								(r.wrapperEl.removeEventListener(
									'transitionend',
									r.onSlideToWrapperTransitionEnd
								),
								(r.onSlideToWrapperTransitionEnd = null),
								delete r.onSlideToWrapperTransitionEnd,
								r.transitionEnd(t, S)))
					}),
			  r.wrapperEl.addEventListener(
					'transitionend',
					r.onSlideToWrapperTransitionEnd
			  )),
		!0
	)
}
function ot(i, e, t, s) {
	i === void 0 && (i = 0),
		e === void 0 && (e = this.params.speed),
		t === void 0 && (t = !0),
		typeof i == 'string' && (i = parseInt(i, 10))
	const n = this
	if (n.destroyed) return
	const r = n.grid && n.params.grid && n.params.grid.rows > 1
	let l = i
	if (n.params.loop)
		if (n.virtual && n.params.virtual.enabled) l = l + n.virtual.slidesBefore
		else {
			let o
			if (r) {
				const m = l * n.params.grid.rows
				o = n.slides.filter(
					(p) => p.getAttribute('data-swiper-slide-index') * 1 === m
				)[0].column
			} else o = n.getSlideIndexByData(l)
			const a = r
					? Math.ceil(n.slides.length / n.params.grid.rows)
					: n.slides.length,
				{ centeredSlides: d } = n.params
			let c = n.params.slidesPerView
			c === 'auto'
				? (c = n.slidesPerViewDynamic())
				: ((c = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
				  d && c % 2 === 0 && (c = c + 1))
			let u = a - o < c
			if ((d && (u = u || o < Math.ceil(c / 2)), u)) {
				const m = d
					? o < n.activeIndex
						? 'prev'
						: 'next'
					: o - n.activeIndex - 1 < n.params.slidesPerView
					? 'next'
					: 'prev'
				n.loopFix({
					direction: m,
					slideTo: !0,
					activeSlideIndex: m === 'next' ? o + 1 : o - a + 1,
					slideRealIndex: m === 'next' ? n.realIndex : void 0
				})
			}
			if (r) {
				const m = l * n.params.grid.rows
				l = n.slides.filter(
					(p) => p.getAttribute('data-swiper-slide-index') * 1 === m
				)[0].column
			} else l = n.getSlideIndexByData(l)
		}
	return (
		requestAnimationFrame(() => {
			n.slideTo(l, e, t, s)
		}),
		n
	)
}
function lt(i, e, t) {
	i === void 0 && (i = this.params.speed), e === void 0 && (e = !0)
	const s = this,
		{ enabled: n, params: r, animating: l } = s
	if (!n || s.destroyed) return s
	let o = r.slidesPerGroup
	r.slidesPerView === 'auto' &&
		r.slidesPerGroup === 1 &&
		r.slidesPerGroupAuto &&
		(o = Math.max(s.slidesPerViewDynamic('current', !0), 1))
	const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
		d = s.virtual && r.virtual.enabled
	if (r.loop) {
		if (l && !d && r.loopPreventsSliding) return !1
		if (
			(s.loopFix({ direction: 'next' }),
			(s._clientLeft = s.wrapperEl.clientLeft),
			s.activeIndex === s.slides.length - 1 && r.cssMode)
		)
			return (
				requestAnimationFrame(() => {
					s.slideTo(s.activeIndex + a, i, e, t)
				}),
				!0
			)
	}
	return r.rewind && s.isEnd
		? s.slideTo(0, i, e, t)
		: s.slideTo(s.activeIndex + a, i, e, t)
}
function dt(i, e, t) {
	i === void 0 && (i = this.params.speed), e === void 0 && (e = !0)
	const s = this,
		{
			params: n,
			snapGrid: r,
			slidesGrid: l,
			rtlTranslate: o,
			enabled: a,
			animating: d
		} = s
	if (!a || s.destroyed) return s
	const c = s.virtual && n.virtual.enabled
	if (n.loop) {
		if (d && !c && n.loopPreventsSliding) return !1
		s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft)
	}
	const u = o ? s.translate : -s.translate
	function m(g) {
		return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
	}
	const p = m(u),
		f = r.map((g) => m(g))
	let h = r[f.indexOf(p) - 1]
	if (typeof h > 'u' && n.cssMode) {
		let g
		r.forEach((S, v) => {
			p >= S && (g = v)
		}),
			typeof g < 'u' && (h = r[g > 0 ? g - 1 : g])
	}
	let w = 0
	if (
		(typeof h < 'u' &&
			((w = l.indexOf(h)),
			w < 0 && (w = s.activeIndex - 1),
			n.slidesPerView === 'auto' &&
				n.slidesPerGroup === 1 &&
				n.slidesPerGroupAuto &&
				((w = w - s.slidesPerViewDynamic('previous', !0) + 1),
				(w = Math.max(w, 0)))),
		n.rewind && s.isBeginning)
	) {
		const g =
			s.params.virtual && s.params.virtual.enabled && s.virtual
				? s.virtual.slides.length - 1
				: s.slides.length - 1
		return s.slideTo(g, i, e, t)
	} else if (n.loop && s.activeIndex === 0 && n.cssMode)
		return (
			requestAnimationFrame(() => {
				s.slideTo(w, i, e, t)
			}),
			!0
		)
	return s.slideTo(w, i, e, t)
}
function ct(i, e, t) {
	i === void 0 && (i = this.params.speed), e === void 0 && (e = !0)
	const s = this
	if (!s.destroyed) return s.slideTo(s.activeIndex, i, e, t)
}
function ut(i, e, t, s) {
	i === void 0 && (i = this.params.speed),
		e === void 0 && (e = !0),
		s === void 0 && (s = 0.5)
	const n = this
	if (n.destroyed) return
	let r = n.activeIndex
	const l = Math.min(n.params.slidesPerGroupSkip, r),
		o = l + Math.floor((r - l) / n.params.slidesPerGroup),
		a = n.rtlTranslate ? n.translate : -n.translate
	if (a >= n.snapGrid[o]) {
		const d = n.snapGrid[o],
			c = n.snapGrid[o + 1]
		a - d > (c - d) * s && (r += n.params.slidesPerGroup)
	} else {
		const d = n.snapGrid[o - 1],
			c = n.snapGrid[o]
		a - d <= (c - d) * s && (r -= n.params.slidesPerGroup)
	}
	return (
		(r = Math.max(r, 0)),
		(r = Math.min(r, n.slidesGrid.length - 1)),
		n.slideTo(r, i, e, t)
	)
}
function ft() {
	const i = this
	if (i.destroyed) return
	const { params: e, slidesEl: t } = i,
		s = e.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : e.slidesPerView
	let n = i.clickedIndex,
		r
	const l = i.isElement ? 'swiper-slide' : `.${e.slideClass}`
	if (e.loop) {
		if (i.animating) return
		;(r = parseInt(i.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			e.centeredSlides
				? n < i.loopedSlides - s / 2 ||
				  n > i.slides.length - i.loopedSlides + s / 2
					? (i.loopFix(),
					  (n = i.getSlideIndex(
							k(t, `${l}[data-swiper-slide-index="${r}"]`)[0]
					  )),
					  Q(() => {
							i.slideTo(n)
					  }))
					: i.slideTo(n)
				: n > i.slides.length - s
				? (i.loopFix(),
				  (n = i.getSlideIndex(
						k(t, `${l}[data-swiper-slide-index="${r}"]`)[0]
				  )),
				  Q(() => {
						i.slideTo(n)
				  }))
				: i.slideTo(n)
	} else i.slideTo(n)
}
var pt = {
	slideTo: at,
	slideToLoop: ot,
	slideNext: lt,
	slidePrev: dt,
	slideReset: ct,
	slideToClosest: ut,
	slideToClickedSlide: ft
}
function mt(i) {
	const e = this,
		{ params: t, slidesEl: s } = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	const n = () => {
			k(s, `.${t.slideClass}, swiper-slide`).forEach((u, m) => {
				u.setAttribute('data-swiper-slide-index', m)
			})
		},
		r = e.grid && t.grid && t.grid.rows > 1,
		l = t.slidesPerGroup * (r ? t.grid.rows : 1),
		o = e.slides.length % l !== 0,
		a = r && e.slides.length % t.grid.rows !== 0,
		d = (c) => {
			for (let u = 0; u < c; u += 1) {
				const m = e.isElement
					? q('swiper-slide', [t.slideBlankClass])
					: q('div', [t.slideClass, t.slideBlankClass])
				e.slidesEl.append(m)
			}
		}
	if (o) {
		if (t.loopAddBlankSlides) {
			const c = l - (e.slides.length % l)
			d(c), e.recalcSlides(), e.updateSlides()
		} else
			W(
				'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		n()
	} else if (a) {
		if (t.loopAddBlankSlides) {
			const c = t.grid.rows - (e.slides.length % t.grid.rows)
			d(c), e.recalcSlides(), e.updateSlides()
		} else
			W(
				'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
			)
		n()
	} else n()
	e.loopFix({
		slideRealIndex: i,
		direction: t.centeredSlides ? void 0 : 'next'
	})
}
function ht(i) {
	let {
		slideRealIndex: e,
		slideTo: t = !0,
		direction: s,
		setTranslate: n,
		activeSlideIndex: r,
		byController: l,
		byMousewheel: o
	} = i === void 0 ? {} : i
	const a = this
	if (!a.params.loop) return
	a.emit('beforeLoopFix')
	const {
			slides: d,
			allowSlidePrev: c,
			allowSlideNext: u,
			slidesEl: m,
			params: p
		} = a,
		{ centeredSlides: f } = p
	if (
		((a.allowSlidePrev = !0),
		(a.allowSlideNext = !0),
		a.virtual && p.virtual.enabled)
	) {
		t &&
			(!p.centeredSlides && a.snapIndex === 0
				? a.slideTo(a.virtual.slides.length, 0, !1, !0)
				: p.centeredSlides && a.snapIndex < p.slidesPerView
				? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
				: a.snapIndex === a.snapGrid.length - 1 &&
				  a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
			(a.allowSlidePrev = c),
			(a.allowSlideNext = u),
			a.emit('loopFix')
		return
	}
	let h = p.slidesPerView
	h === 'auto'
		? (h = a.slidesPerViewDynamic())
		: ((h = Math.ceil(parseFloat(p.slidesPerView, 10))),
		  f && h % 2 === 0 && (h = h + 1))
	const w = p.slidesPerGroupAuto ? h : p.slidesPerGroup
	let g = w
	g % w !== 0 && (g += w - (g % w)),
		(g += p.loopAdditionalSlides),
		(a.loopedSlides = g)
	const S = a.grid && p.grid && p.grid.rows > 1
	d.length < h + g
		? W(
				'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
		  )
		: S &&
		  p.grid.fill === 'row' &&
		  W(
				'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
		  )
	const v = [],
		b = []
	let y = a.activeIndex
	typeof r > 'u'
		? (r = a.getSlideIndex(
				d.filter((x) => x.classList.contains(p.slideActiveClass))[0]
		  ))
		: (y = r)
	const M = s === 'next' || !s,
		V = s === 'prev' || !s
	let C = 0,
		B = 0
	const T = S ? Math.ceil(d.length / p.grid.rows) : d.length,
		P = (S ? d[r].column : r) + (f && typeof n > 'u' ? -h / 2 + 0.5 : 0)
	if (P < g) {
		C = Math.max(g - P, w)
		for (let x = 0; x < g - P; x += 1) {
			const I = x - Math.floor(x / T) * T
			if (S) {
				const L = T - I - 1
				for (let _ = d.length - 1; _ >= 0; _ -= 1)
					d[_].column === L && v.push(_)
			} else v.push(T - I - 1)
		}
	} else if (P + h > T - g) {
		B = Math.max(P - (T - g * 2), w)
		for (let x = 0; x < B; x += 1) {
			const I = x - Math.floor(x / T) * T
			S
				? d.forEach((L, _) => {
						L.column === I && b.push(_)
				  })
				: b.push(I)
		}
	}
	if (
		((a.__preventObserver__ = !0),
		requestAnimationFrame(() => {
			a.__preventObserver__ = !1
		}),
		V &&
			v.forEach((x) => {
				;(d[x].swiperLoopMoveDOM = !0),
					m.prepend(d[x]),
					(d[x].swiperLoopMoveDOM = !1)
			}),
		M &&
			b.forEach((x) => {
				;(d[x].swiperLoopMoveDOM = !0),
					m.append(d[x]),
					(d[x].swiperLoopMoveDOM = !1)
			}),
		a.recalcSlides(),
		p.slidesPerView === 'auto'
			? a.updateSlides()
			: S &&
			  ((v.length > 0 && V) || (b.length > 0 && M)) &&
			  a.slides.forEach((x, I) => {
					a.grid.updateSlide(I, x, a.slides)
			  }),
		p.watchSlidesProgress && a.updateSlidesOffset(),
		t)
	) {
		if (v.length > 0 && V) {
			if (typeof e > 'u') {
				const x = a.slidesGrid[y],
					L = a.slidesGrid[y + C] - x
				o
					? a.setTranslate(a.translate - L)
					: (a.slideTo(y + Math.ceil(C), 0, !1, !0),
					  n &&
							((a.touchEventsData.startTranslate =
								a.touchEventsData.startTranslate - L),
							(a.touchEventsData.currentTranslate =
								a.touchEventsData.currentTranslate - L)))
			} else if (n) {
				const x = S ? v.length / p.grid.rows : v.length
				a.slideTo(a.activeIndex + x, 0, !1, !0),
					(a.touchEventsData.currentTranslate = a.translate)
			}
		} else if (b.length > 0 && M)
			if (typeof e > 'u') {
				const x = a.slidesGrid[y],
					L = a.slidesGrid[y - B] - x
				o
					? a.setTranslate(a.translate - L)
					: (a.slideTo(y - B, 0, !1, !0),
					  n &&
							((a.touchEventsData.startTranslate =
								a.touchEventsData.startTranslate - L),
							(a.touchEventsData.currentTranslate =
								a.touchEventsData.currentTranslate - L)))
			} else {
				const x = S ? b.length / p.grid.rows : b.length
				a.slideTo(a.activeIndex - x, 0, !1, !0)
			}
	}
	if (
		((a.allowSlidePrev = c),
		(a.allowSlideNext = u),
		a.controller && a.controller.control && !l)
	) {
		const x = {
			slideRealIndex: e,
			direction: s,
			setTranslate: n,
			activeSlideIndex: r,
			byController: !0
		}
		Array.isArray(a.controller.control)
			? a.controller.control.forEach((I) => {
					!I.destroyed &&
						I.params.loop &&
						I.loopFix({
							...x,
							slideTo: I.params.slidesPerView === p.slidesPerView ? t : !1
						})
			  })
			: a.controller.control instanceof a.constructor &&
			  a.controller.control.params.loop &&
			  a.controller.control.loopFix({
					...x,
					slideTo:
						a.controller.control.params.slidesPerView === p.slidesPerView
							? t
							: !1
			  })
	}
	a.emit('loopFix')
}
function gt() {
	const i = this,
		{ params: e, slidesEl: t } = i
	if (!e.loop || (i.virtual && i.params.virtual.enabled)) return
	i.recalcSlides()
	const s = []
	i.slides.forEach((n) => {
		const r =
			typeof n.swiperSlideIndex > 'u'
				? n.getAttribute('data-swiper-slide-index') * 1
				: n.swiperSlideIndex
		s[r] = n
	}),
		i.slides.forEach((n) => {
			n.removeAttribute('data-swiper-slide-index')
		}),
		s.forEach((n) => {
			t.append(n)
		}),
		i.recalcSlides(),
		i.slideTo(i.realIndex, 0)
}
var vt = { loopCreate: mt, loopFix: ht, loopDestroy: gt }
function wt(i) {
	const e = this
	if (
		!e.params.simulateTouch ||
		(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode
	)
		return
	const t = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
	e.isElement && (e.__preventObserver__ = !0),
		(t.style.cursor = 'move'),
		(t.style.cursor = i ? 'grabbing' : 'grab'),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			})
}
function St() {
	const i = this
	;(i.params.watchOverflow && i.isLocked) ||
		i.params.cssMode ||
		(i.isElement && (i.__preventObserver__ = !0),
		(i[
			i.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
		].style.cursor = ''),
		i.isElement &&
			requestAnimationFrame(() => {
				i.__preventObserver__ = !1
			}))
}
var Tt = { setGrabCursor: wt, unsetGrabCursor: St }
function bt(i, e) {
	e === void 0 && (e = this)
	function t(s) {
		if (!s || s === N() || s === z()) return null
		s.assignedSlot && (s = s.assignedSlot)
		const n = s.closest(i)
		return !n && !s.getRootNode ? null : n || t(s.getRootNode().host)
	}
	return t(e)
}
function oe(i, e, t) {
	const s = z(),
		{ params: n } = i,
		r = n.edgeSwipeDetection,
		l = n.edgeSwipeThreshold
	return r && (t <= l || t >= s.innerWidth - l)
		? r === 'prevent'
			? (e.preventDefault(), !0)
			: !1
		: !0
}
function yt(i) {
	const e = this,
		t = N()
	let s = i
	s.originalEvent && (s = s.originalEvent)
	const n = e.touchEventsData
	if (s.type === 'pointerdown') {
		if (n.pointerId !== null && n.pointerId !== s.pointerId) return
		n.pointerId = s.pointerId
	} else
		s.type === 'touchstart' &&
			s.targetTouches.length === 1 &&
			(n.touchId = s.targetTouches[0].identifier)
	if (s.type === 'touchstart') {
		oe(e, s, s.targetTouches[0].pageX)
		return
	}
	const { params: r, touches: l, enabled: o } = e
	if (
		!o ||
		(!r.simulateTouch && s.pointerType === 'mouse') ||
		(e.animating && r.preventInteractionOnTransition)
	)
		return
	!e.animating && r.cssMode && r.loop && e.loopFix()
	let a = s.target
	if (
		(r.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(a)) ||
		('which' in s && s.which === 3) ||
		('button' in s && s.button > 0) ||
		(n.isTouched && n.isMoved)
	)
		return
	const d = !!r.noSwipingClass && r.noSwipingClass !== '',
		c = s.composedPath ? s.composedPath() : s.path
	d && s.target && s.target.shadowRoot && c && (a = c[0])
	const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
		m = !!(s.target && s.target.shadowRoot)
	if (r.noSwiping && (m ? bt(u, a) : a.closest(u))) {
		e.allowClick = !0
		return
	}
	if (r.swipeHandler && !a.closest(r.swipeHandler)) return
	;(l.currentX = s.pageX), (l.currentY = s.pageY)
	const p = l.currentX,
		f = l.currentY
	if (!oe(e, s, p)) return
	Object.assign(n, {
		isTouched: !0,
		isMoved: !1,
		allowTouchCallbacks: !0,
		isScrolling: void 0,
		startMoving: void 0
	}),
		(l.startX = p),
		(l.startY = f),
		(n.touchStartTime = H()),
		(e.allowClick = !0),
		e.updateSize(),
		(e.swipeDirection = void 0),
		r.threshold > 0 && (n.allowThresholdMove = !1)
	let h = !0
	a.matches(n.focusableElements) &&
		((h = !1), a.nodeName === 'SELECT' && (n.isTouched = !1)),
		t.activeElement &&
			t.activeElement.matches(n.focusableElements) &&
			t.activeElement !== a &&
			t.activeElement.blur()
	const w = h && e.allowTouchMove && r.touchStartPreventDefault
	;(r.touchStartForcePreventDefault || w) &&
		!a.isContentEditable &&
		s.preventDefault(),
		r.freeMode &&
			r.freeMode.enabled &&
			e.freeMode &&
			e.animating &&
			!r.cssMode &&
			e.freeMode.onTouchStart(),
		e.emit('touchStart', s)
}
function xt(i) {
	const e = N(),
		t = this,
		s = t.touchEventsData,
		{ params: n, touches: r, rtlTranslate: l, enabled: o } = t
	if (!o || (!n.simulateTouch && i.pointerType === 'mouse')) return
	let a = i
	if (
		(a.originalEvent && (a = a.originalEvent),
		a.type === 'pointermove' &&
			(s.touchId !== null || a.pointerId !== s.pointerId))
	)
		return
	let d
	if (a.type === 'touchmove') {
		if (
			((d = [...a.changedTouches].filter((M) => M.identifier === s.touchId)[0]),
			!d || d.identifier !== s.touchId)
		)
			return
	} else d = a
	if (!s.isTouched) {
		s.startMoving && s.isScrolling && t.emit('touchMoveOpposite', a)
		return
	}
	const c = d.pageX,
		u = d.pageY
	if (a.preventedByNestedSwiper) {
		;(r.startX = c), (r.startY = u)
		return
	}
	if (!t.allowTouchMove) {
		a.target.matches(s.focusableElements) || (t.allowClick = !1),
			s.isTouched &&
				(Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u }),
				(s.touchStartTime = H()))
		return
	}
	if (n.touchReleaseOnEdges && !n.loop) {
		if (t.isVertical()) {
			if (
				(u < r.startY && t.translate <= t.maxTranslate()) ||
				(u > r.startY && t.translate >= t.minTranslate())
			) {
				;(s.isTouched = !1), (s.isMoved = !1)
				return
			}
		} else if (
			(c < r.startX && t.translate <= t.maxTranslate()) ||
			(c > r.startX && t.translate >= t.minTranslate())
		)
			return
	}
	if (
		e.activeElement &&
		a.target === e.activeElement &&
		a.target.matches(s.focusableElements)
	) {
		;(s.isMoved = !0), (t.allowClick = !1)
		return
	}
	s.allowTouchCallbacks && t.emit('touchMove', a),
		(r.previousX = r.currentX),
		(r.previousY = r.currentY),
		(r.currentX = c),
		(r.currentY = u)
	const m = r.currentX - r.startX,
		p = r.currentY - r.startY
	if (t.params.threshold && Math.sqrt(m ** 2 + p ** 2) < t.params.threshold)
		return
	if (typeof s.isScrolling > 'u') {
		let M
		;(t.isHorizontal() && r.currentY === r.startY) ||
		(t.isVertical() && r.currentX === r.startX)
			? (s.isScrolling = !1)
			: m * m + p * p >= 25 &&
			  ((M = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
			  (s.isScrolling = t.isHorizontal()
					? M > n.touchAngle
					: 90 - M > n.touchAngle))
	}
	if (
		(s.isScrolling && t.emit('touchMoveOpposite', a),
		typeof s.startMoving > 'u' &&
			(r.currentX !== r.startX || r.currentY !== r.startY) &&
			(s.startMoving = !0),
		s.isScrolling)
	) {
		s.isTouched = !1
		return
	}
	if (!s.startMoving) return
	;(t.allowClick = !1),
		!n.cssMode && a.cancelable && a.preventDefault(),
		n.touchMoveStopPropagation && !n.nested && a.stopPropagation()
	let f = t.isHorizontal() ? m : p,
		h = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
	n.oneWayMovement &&
		((f = Math.abs(f) * (l ? 1 : -1)), (h = Math.abs(h) * (l ? 1 : -1))),
		(r.diff = f),
		(f *= n.touchRatio),
		l && ((f = -f), (h = -h))
	const w = t.touchesDirection
	;(t.swipeDirection = f > 0 ? 'prev' : 'next'),
		(t.touchesDirection = h > 0 ? 'prev' : 'next')
	const g = t.params.loop && !n.cssMode,
		S =
			(t.touchesDirection === 'next' && t.allowSlideNext) ||
			(t.touchesDirection === 'prev' && t.allowSlidePrev)
	if (!s.isMoved) {
		if (
			(g && S && t.loopFix({ direction: t.swipeDirection }),
			(s.startTranslate = t.getTranslate()),
			t.setTransition(0),
			t.animating)
		) {
			const M = new window.CustomEvent('transitionend', {
				bubbles: !0,
				cancelable: !0
			})
			t.wrapperEl.dispatchEvent(M)
		}
		;(s.allowMomentumBounce = !1),
			n.grabCursor &&
				(t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
				t.setGrabCursor(!0),
			t.emit('sliderFirstMove', a)
	}
	let v
	if (
		(new Date().getTime(),
		s.isMoved &&
			s.allowThresholdMove &&
			w !== t.touchesDirection &&
			g &&
			S &&
			Math.abs(f) >= 1)
	) {
		Object.assign(r, {
			startX: c,
			startY: u,
			currentX: c,
			currentY: u,
			startTranslate: s.currentTranslate
		}),
			(s.loopSwapReset = !0),
			(s.startTranslate = s.currentTranslate)
		return
	}
	t.emit('sliderMove', a),
		(s.isMoved = !0),
		(s.currentTranslate = f + s.startTranslate)
	let b = !0,
		y = n.resistanceRatio
	if (
		(n.touchReleaseOnEdges && (y = 0),
		f > 0
			? (g &&
					S &&
					!v &&
					s.allowThresholdMove &&
					s.currentTranslate >
						(n.centeredSlides
							? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1]
							: t.minTranslate()) &&
					t.loopFix({
						direction: 'prev',
						setTranslate: !0,
						activeSlideIndex: 0
					}),
			  s.currentTranslate > t.minTranslate() &&
					((b = !1),
					n.resistance &&
						(s.currentTranslate =
							t.minTranslate() -
							1 +
							(-t.minTranslate() + s.startTranslate + f) ** y)))
			: f < 0 &&
			  (g &&
					S &&
					!v &&
					s.allowThresholdMove &&
					s.currentTranslate <
						(n.centeredSlides
							? t.maxTranslate() +
							  t.slidesSizesGrid[t.slidesSizesGrid.length - 1]
							: t.maxTranslate()) &&
					t.loopFix({
						direction: 'next',
						setTranslate: !0,
						activeSlideIndex:
							t.slides.length -
							(n.slidesPerView === 'auto'
								? t.slidesPerViewDynamic()
								: Math.ceil(parseFloat(n.slidesPerView, 10)))
					}),
			  s.currentTranslate < t.maxTranslate() &&
					((b = !1),
					n.resistance &&
						(s.currentTranslate =
							t.maxTranslate() +
							1 -
							(t.maxTranslate() - s.startTranslate - f) ** y))),
		b && (a.preventedByNestedSwiper = !0),
		!t.allowSlideNext &&
			t.swipeDirection === 'next' &&
			s.currentTranslate < s.startTranslate &&
			(s.currentTranslate = s.startTranslate),
		!t.allowSlidePrev &&
			t.swipeDirection === 'prev' &&
			s.currentTranslate > s.startTranslate &&
			(s.currentTranslate = s.startTranslate),
		!t.allowSlidePrev &&
			!t.allowSlideNext &&
			(s.currentTranslate = s.startTranslate),
		n.threshold > 0)
	)
		if (Math.abs(f) > n.threshold || s.allowThresholdMove) {
			if (!s.allowThresholdMove) {
				;(s.allowThresholdMove = !0),
					(r.startX = r.currentX),
					(r.startY = r.currentY),
					(s.currentTranslate = s.startTranslate),
					(r.diff = t.isHorizontal()
						? r.currentX - r.startX
						: r.currentY - r.startY)
				return
			}
		} else {
			s.currentTranslate = s.startTranslate
			return
		}
	!n.followFinger ||
		n.cssMode ||
		(((n.freeMode && n.freeMode.enabled && t.freeMode) ||
			n.watchSlidesProgress) &&
			(t.updateActiveIndex(), t.updateSlidesClasses()),
		n.freeMode && n.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
		t.updateProgress(s.currentTranslate),
		t.setTranslate(s.currentTranslate))
}
function Et(i) {
	const e = this,
		t = e.touchEventsData
	let s = i
	s.originalEvent && (s = s.originalEvent)
	let n
	if (s.type === 'touchend' || s.type === 'touchcancel') {
		if (
			((n = [...s.changedTouches].filter((y) => y.identifier === t.touchId)[0]),
			!n || n.identifier !== t.touchId)
		)
			return
	} else {
		if (t.touchId !== null || s.pointerId !== t.pointerId) return
		n = s
	}
	if (
		['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
			s.type
		) &&
		!(
			['pointercancel', 'contextmenu'].includes(s.type) &&
			(e.browser.isSafari || e.browser.isWebView)
		)
	)
		return
	;(t.pointerId = null), (t.touchId = null)
	const {
		params: l,
		touches: o,
		rtlTranslate: a,
		slidesGrid: d,
		enabled: c
	} = e
	if (!c || (!l.simulateTouch && s.pointerType === 'mouse')) return
	if (
		(t.allowTouchCallbacks && e.emit('touchEnd', s),
		(t.allowTouchCallbacks = !1),
		!t.isTouched)
	) {
		t.isMoved && l.grabCursor && e.setGrabCursor(!1),
			(t.isMoved = !1),
			(t.startMoving = !1)
		return
	}
	l.grabCursor &&
		t.isMoved &&
		t.isTouched &&
		(e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
		e.setGrabCursor(!1)
	const u = H(),
		m = u - t.touchStartTime
	if (e.allowClick) {
		const y = s.path || (s.composedPath && s.composedPath())
		e.updateClickedSlide((y && y[0]) || s.target, y),
			e.emit('tap click', s),
			m < 300 && u - t.lastClickTime < 300 && e.emit('doubleTap doubleClick', s)
	}
	if (
		((t.lastClickTime = H()),
		Q(() => {
			e.destroyed || (e.allowClick = !0)
		}),
		!t.isTouched ||
			!t.isMoved ||
			!e.swipeDirection ||
			(o.diff === 0 && !t.loopSwapReset) ||
			(t.currentTranslate === t.startTranslate && !t.loopSwapReset))
	) {
		;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
	let p
	if (
		(l.followFinger
			? (p = a ? e.translate : -e.translate)
			: (p = -t.currentTranslate),
		l.cssMode)
	)
		return
	if (l.freeMode && l.freeMode.enabled) {
		e.freeMode.onTouchEnd({ currentPos: p })
		return
	}
	const f = p >= -e.maxTranslate() && !e.params.loop
	let h = 0,
		w = e.slidesSizesGrid[0]
	for (
		let y = 0;
		y < d.length;
		y += y < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
	) {
		const M = y < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
		typeof d[y + M] < 'u'
			? (f || (p >= d[y] && p < d[y + M])) && ((h = y), (w = d[y + M] - d[y]))
			: (f || p >= d[y]) && ((h = y), (w = d[d.length - 1] - d[d.length - 2]))
	}
	let g = null,
		S = null
	l.rewind &&
		(e.isBeginning
			? (S =
					l.virtual && l.virtual.enabled && e.virtual
						? e.virtual.slides.length - 1
						: e.slides.length - 1)
			: e.isEnd && (g = 0))
	const v = (p - d[h]) / w,
		b = h < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup
	if (m > l.longSwipesMs) {
		if (!l.longSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.swipeDirection === 'next' &&
			(v >= l.longSwipesRatio
				? e.slideTo(l.rewind && e.isEnd ? g : h + b)
				: e.slideTo(h)),
			e.swipeDirection === 'prev' &&
				(v > 1 - l.longSwipesRatio
					? e.slideTo(h + b)
					: S !== null && v < 0 && Math.abs(v) > l.longSwipesRatio
					? e.slideTo(S)
					: e.slideTo(h))
	} else {
		if (!l.shortSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.navigation &&
		(s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
			? s.target === e.navigation.nextEl
				? e.slideTo(h + b)
				: e.slideTo(h)
			: (e.swipeDirection === 'next' && e.slideTo(g !== null ? g : h + b),
			  e.swipeDirection === 'prev' && e.slideTo(S !== null ? S : h))
	}
}
function le() {
	const i = this,
		{ params: e, el: t } = i
	if (t && t.offsetWidth === 0) return
	e.breakpoints && i.setBreakpoint()
	const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = i,
		l = i.virtual && i.params.virtual.enabled
	;(i.allowSlideNext = !0),
		(i.allowSlidePrev = !0),
		i.updateSize(),
		i.updateSlides(),
		i.updateSlidesClasses()
	const o = l && e.loop
	;(e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
	i.isEnd &&
	!i.isBeginning &&
	!i.params.centeredSlides &&
	!o
		? i.slideTo(i.slides.length - 1, 0, !1, !0)
		: i.params.loop && !l
		? i.slideToLoop(i.realIndex, 0, !1, !0)
		: i.slideTo(i.activeIndex, 0, !1, !0),
		i.autoplay &&
			i.autoplay.running &&
			i.autoplay.paused &&
			(clearTimeout(i.autoplay.resizeTimeout),
			(i.autoplay.resizeTimeout = setTimeout(() => {
				i.autoplay &&
					i.autoplay.running &&
					i.autoplay.paused &&
					i.autoplay.resume()
			}, 500))),
		(i.allowSlidePrev = n),
		(i.allowSlideNext = s),
		i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow()
}
function Pt(i) {
	const e = this
	e.enabled &&
		(e.allowClick ||
			(e.params.preventClicks && i.preventDefault(),
			e.params.preventClicksPropagation &&
				e.animating &&
				(i.stopPropagation(), i.stopImmediatePropagation())))
}
function Mt() {
	const i = this,
		{ wrapperEl: e, rtlTranslate: t, enabled: s } = i
	if (!s) return
	;(i.previousTranslate = i.translate),
		i.isHorizontal()
			? (i.translate = -e.scrollLeft)
			: (i.translate = -e.scrollTop),
		i.translate === 0 && (i.translate = 0),
		i.updateActiveIndex(),
		i.updateSlidesClasses()
	let n
	const r = i.maxTranslate() - i.minTranslate()
	r === 0 ? (n = 0) : (n = (i.translate - i.minTranslate()) / r),
		n !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
		i.emit('setTranslate', i.translate, !1)
}
function Ct(i) {
	const e = this
	R(e, i.target),
		!(
			e.params.cssMode ||
			(e.params.slidesPerView !== 'auto' && !e.params.autoHeight)
		) && e.update()
}
function It() {
	const i = this
	i.documentTouchHandlerProceeded ||
		((i.documentTouchHandlerProceeded = !0),
		i.params.touchReleaseOnEdges && (i.el.style.touchAction = 'auto'))
}
const ge = (i, e) => {
	const t = N(),
		{ params: s, el: n, wrapperEl: r, device: l } = i,
		o = !!s.nested,
		a = e === 'on' ? 'addEventListener' : 'removeEventListener',
		d = e
	t[a]('touchstart', i.onDocumentTouchStart, { passive: !1, capture: o }),
		n[a]('touchstart', i.onTouchStart, { passive: !1 }),
		n[a]('pointerdown', i.onTouchStart, { passive: !1 }),
		t[a]('touchmove', i.onTouchMove, { passive: !1, capture: o }),
		t[a]('pointermove', i.onTouchMove, { passive: !1, capture: o }),
		t[a]('touchend', i.onTouchEnd, { passive: !0 }),
		t[a]('pointerup', i.onTouchEnd, { passive: !0 }),
		t[a]('pointercancel', i.onTouchEnd, { passive: !0 }),
		t[a]('touchcancel', i.onTouchEnd, { passive: !0 }),
		t[a]('pointerout', i.onTouchEnd, { passive: !0 }),
		t[a]('pointerleave', i.onTouchEnd, { passive: !0 }),
		t[a]('contextmenu', i.onTouchEnd, { passive: !0 }),
		(s.preventClicks || s.preventClicksPropagation) &&
			n[a]('click', i.onClick, !0),
		s.cssMode && r[a]('scroll', i.onScroll),
		s.updateOnWindowResize
			? i[d](
					l.ios || l.android
						? 'resize orientationchange observerUpdate'
						: 'resize observerUpdate',
					le,
					!0
			  )
			: i[d]('observerUpdate', le, !0),
		n[a]('load', i.onLoad, { capture: !0 })
}
function Lt() {
	const i = this,
		{ params: e } = i
	;(i.onTouchStart = yt.bind(i)),
		(i.onTouchMove = xt.bind(i)),
		(i.onTouchEnd = Et.bind(i)),
		(i.onDocumentTouchStart = It.bind(i)),
		e.cssMode && (i.onScroll = Mt.bind(i)),
		(i.onClick = Pt.bind(i)),
		(i.onLoad = Ct.bind(i)),
		ge(i, 'on')
}
function Ot() {
	ge(this, 'off')
}
var At = { attachEvents: Lt, detachEvents: Ot }
const de = (i, e) => i.grid && e.grid && e.grid.rows > 1
function zt() {
	const i = this,
		{ realIndex: e, initialized: t, params: s, el: n } = i,
		r = s.breakpoints
	if (!r || (r && Object.keys(r).length === 0)) return
	const l = i.getBreakpoint(r, i.params.breakpointsBase, i.el)
	if (!l || i.currentBreakpoint === l) return
	const a = (l in r ? r[l] : void 0) || i.originalParams,
		d = de(i, s),
		c = de(i, a),
		u = s.enabled
	d && !c
		? (n.classList.remove(
				`${s.containerModifierClass}grid`,
				`${s.containerModifierClass}grid-column`
		  ),
		  i.emitContainerClasses())
		: !d &&
		  c &&
		  (n.classList.add(`${s.containerModifierClass}grid`),
		  ((a.grid.fill && a.grid.fill === 'column') ||
				(!a.grid.fill && s.grid.fill === 'column')) &&
				n.classList.add(`${s.containerModifierClass}grid-column`),
		  i.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach((g) => {
			if (typeof a[g] > 'u') return
			const S = s[g] && s[g].enabled,
				v = a[g] && a[g].enabled
			S && !v && i[g].disable(), !S && v && i[g].enable()
		})
	const m = a.direction && a.direction !== s.direction,
		p = s.loop && (a.slidesPerView !== s.slidesPerView || m),
		f = s.loop
	m && t && i.changeDirection(), A(i.params, a)
	const h = i.params.enabled,
		w = i.params.loop
	Object.assign(i, {
		allowTouchMove: i.params.allowTouchMove,
		allowSlideNext: i.params.allowSlideNext,
		allowSlidePrev: i.params.allowSlidePrev
	}),
		u && !h ? i.disable() : !u && h && i.enable(),
		(i.currentBreakpoint = l),
		i.emit('_beforeBreakpoint', a),
		t &&
			(p
				? (i.loopDestroy(), i.loopCreate(e), i.updateSlides())
				: !f && w
				? (i.loopCreate(e), i.updateSlides())
				: f && !w && i.loopDestroy()),
		i.emit('breakpoint', a)
}
function kt(i, e, t) {
	if ((e === void 0 && (e = 'window'), !i || (e === 'container' && !t))) return
	let s = !1
	const n = z(),
		r = e === 'window' ? n.innerHeight : t.clientHeight,
		l = Object.keys(i).map((o) => {
			if (typeof o == 'string' && o.indexOf('@') === 0) {
				const a = parseFloat(o.substr(1))
				return { value: r * a, point: o }
			}
			return { value: o, point: o }
		})
	l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10))
	for (let o = 0; o < l.length; o += 1) {
		const { point: a, value: d } = l[o]
		e === 'window'
			? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a)
			: d <= t.clientWidth && (s = a)
	}
	return s || 'max'
}
var Gt = { setBreakpoint: zt, getBreakpoint: kt }
function _t(i, e) {
	const t = []
	return (
		i.forEach((s) => {
			typeof s == 'object'
				? Object.keys(s).forEach((n) => {
						s[n] && t.push(e + n)
				  })
				: typeof s == 'string' && t.push(e + s)
		}),
		t
	)
}
function Dt() {
	const i = this,
		{ classNames: e, params: t, rtl: s, el: n, device: r } = i,
		l = _t(
			[
				'initialized',
				t.direction,
				{ 'free-mode': i.params.freeMode && t.freeMode.enabled },
				{ autoheight: t.autoHeight },
				{ rtl: s },
				{ grid: t.grid && t.grid.rows > 1 },
				{
					'grid-column': t.grid && t.grid.rows > 1 && t.grid.fill === 'column'
				},
				{ android: r.android },
				{ ios: r.ios },
				{ 'css-mode': t.cssMode },
				{ centered: t.cssMode && t.centeredSlides },
				{ 'watch-progress': t.watchSlidesProgress }
			],
			t.containerModifierClass
		)
	e.push(...l), n.classList.add(...e), i.emitContainerClasses()
}
function Vt() {
	const i = this,
		{ el: e, classNames: t } = i
	e.classList.remove(...t), i.emitContainerClasses()
}
var Bt = { addClasses: Dt, removeClasses: Vt }
function Nt() {
	const i = this,
		{ isLocked: e, params: t } = i,
		{ slidesOffsetBefore: s } = t
	if (s) {
		const n = i.slides.length - 1,
			r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2
		i.isLocked = i.size > r
	} else i.isLocked = i.snapGrid.length === 1
	t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
		t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
		e && e !== i.isLocked && (i.isEnd = !1),
		e !== i.isLocked && i.emit(i.isLocked ? 'lock' : 'unlock')
}
var Ft = { checkOverflow: Nt },
	ce = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		swiperElementNodeName: 'SWIPER-CONTAINER',
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: 'swiper',
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-blank',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideFullyVisibleClass: 'swiper-slide-fully-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1
	}
function $t(i, e) {
	return function (s) {
		s === void 0 && (s = {})
		const n = Object.keys(s)[0],
			r = s[n]
		if (typeof r != 'object' || r === null) {
			A(e, s)
			return
		}
		if (
			(i[n] === !0 && (i[n] = { enabled: !0 }),
			n === 'navigation' &&
				i[n] &&
				i[n].enabled &&
				!i[n].prevEl &&
				!i[n].nextEl &&
				(i[n].auto = !0),
			['pagination', 'scrollbar'].indexOf(n) >= 0 &&
				i[n] &&
				i[n].enabled &&
				!i[n].el &&
				(i[n].auto = !0),
			!(n in i && 'enabled' in r))
		) {
			A(e, s)
			return
		}
		typeof i[n] == 'object' && !('enabled' in i[n]) && (i[n].enabled = !0),
			i[n] || (i[n] = { enabled: !1 }),
			A(e, s)
	}
}
const U = {
		eventsEmitter: Be,
		update: Ke,
		translate: tt,
		transition: nt,
		slide: pt,
		loop: vt,
		grabCursor: Tt,
		events: At,
		breakpoints: Gt,
		checkOverflow: Ft,
		classes: Bt
	},
	J = {}
class O {
	constructor() {
		let e, t
		for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
			n[r] = arguments[r]
		n.length === 1 &&
		n[0].constructor &&
		Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object'
			? (t = n[0])
			: ([e, t] = n),
			t || (t = {}),
			(t = A({}, t)),
			e && !t.el && (t.el = e)
		const l = N()
		if (
			t.el &&
			typeof t.el == 'string' &&
			l.querySelectorAll(t.el).length > 1
		) {
			const c = []
			return (
				l.querySelectorAll(t.el).forEach((u) => {
					const m = A({}, t, { el: u })
					c.push(new O(m))
				}),
				c
			)
		}
		const o = this
		;(o.__swiper__ = !0),
			(o.support = pe()),
			(o.device = me({ userAgent: t.userAgent })),
			(o.browser = _e()),
			(o.eventsListeners = {}),
			(o.eventsAnyListeners = []),
			(o.modules = [...o.__modules__]),
			t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules)
		const a = {}
		o.modules.forEach((c) => {
			c({
				params: t,
				swiper: o,
				extendParams: $t(t, a),
				on: o.on.bind(o),
				once: o.once.bind(o),
				off: o.off.bind(o),
				emit: o.emit.bind(o)
			})
		})
		const d = A({}, ce, a)
		return (
			(o.params = A({}, d, J, t)),
			(o.originalParams = A({}, o.params)),
			(o.passedParams = A({}, t)),
			o.params &&
				o.params.on &&
				Object.keys(o.params.on).forEach((c) => {
					o.on(c, o.params.on[c])
				}),
			o.params && o.params.onAny && o.onAny(o.params.onAny),
			Object.assign(o, {
				enabled: o.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return o.params.direction === 'horizontal'
				},
				isVertical() {
					return o.params.direction === 'vertical'
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: o.params.allowSlideNext,
				allowSlidePrev: o.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: o.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null
				},
				allowClick: !0,
				allowTouchMove: o.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0
			}),
			o.emit('_swiper'),
			o.params.init && o.init(),
			o
		)
	}
	getDirectionLabel(e) {
		return this.isHorizontal()
			? e
			: {
					width: 'height',
					'margin-top': 'margin-left',
					'margin-bottom ': 'margin-right',
					'margin-left': 'margin-top',
					'margin-right': 'margin-bottom',
					'padding-left': 'padding-top',
					'padding-right': 'padding-bottom',
					marginRight: 'marginBottom'
			  }[e]
	}
	getSlideIndex(e) {
		const { slidesEl: t, params: s } = this,
			n = k(t, `.${s.slideClass}, swiper-slide`),
			r = ne(n[0])
		return ne(e) - r
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(
			this.slides.filter(
				(t) => t.getAttribute('data-swiper-slide-index') * 1 === e
			)[0]
		)
	}
	recalcSlides() {
		const e = this,
			{ slidesEl: t, params: s } = e
		e.slides = k(t, `.${s.slideClass}, swiper-slide`)
	}
	enable() {
		const e = this
		e.enabled ||
			((e.enabled = !0),
			e.params.grabCursor && e.setGrabCursor(),
			e.emit('enable'))
	}
	disable() {
		const e = this
		e.enabled &&
			((e.enabled = !1),
			e.params.grabCursor && e.unsetGrabCursor(),
			e.emit('disable'))
	}
	setProgress(e, t) {
		const s = this
		e = Math.min(Math.max(e, 0), 1)
		const n = s.minTranslate(),
			l = (s.maxTranslate() - n) * e + n
		s.translateTo(l, typeof t > 'u' ? 0 : t),
			s.updateActiveIndex(),
			s.updateSlidesClasses()
	}
	emitContainerClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = e.el.className
			.split(' ')
			.filter(
				(s) =>
					s.indexOf('swiper') === 0 ||
					s.indexOf(e.params.containerModifierClass) === 0
			)
		e.emit('_containerClasses', t.join(' '))
	}
	getSlideClasses(e) {
		const t = this
		return t.destroyed
			? ''
			: e.className
					.split(' ')
					.filter(
						(s) =>
							s.indexOf('swiper-slide') === 0 ||
							s.indexOf(t.params.slideClass) === 0
					)
					.join(' ')
	}
	emitSlidesClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = []
		e.slides.forEach((s) => {
			const n = e.getSlideClasses(s)
			t.push({ slideEl: s, classNames: n }), e.emit('_slideClass', s, n)
		}),
			e.emit('_slideClasses', t)
	}
	slidesPerViewDynamic(e, t) {
		e === void 0 && (e = 'current'), t === void 0 && (t = !1)
		const s = this,
			{
				params: n,
				slides: r,
				slidesGrid: l,
				slidesSizesGrid: o,
				size: a,
				activeIndex: d
			} = s
		let c = 1
		if (typeof n.slidesPerView == 'number') return n.slidesPerView
		if (n.centeredSlides) {
			let u = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0,
				m
			for (let p = d + 1; p < r.length; p += 1)
				r[p] &&
					!m &&
					((u += Math.ceil(r[p].swiperSlideSize)), (c += 1), u > a && (m = !0))
			for (let p = d - 1; p >= 0; p -= 1)
				r[p] && !m && ((u += r[p].swiperSlideSize), (c += 1), u > a && (m = !0))
		} else if (e === 'current')
			for (let u = d + 1; u < r.length; u += 1)
				(t ? l[u] + o[u] - l[d] < a : l[u] - l[d] < a) && (c += 1)
		else for (let u = d - 1; u >= 0; u -= 1) l[d] - l[u] < a && (c += 1)
		return c
	}
	update() {
		const e = this
		if (!e || e.destroyed) return
		const { snapGrid: t, params: s } = e
		s.breakpoints && e.setBreakpoint(),
			[...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
				l.complete && R(e, l)
			}),
			e.updateSize(),
			e.updateSlides(),
			e.updateProgress(),
			e.updateSlidesClasses()
		function n() {
			const l = e.rtlTranslate ? e.translate * -1 : e.translate,
				o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate())
			e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
		}
		let r
		if (s.freeMode && s.freeMode.enabled && !s.cssMode)
			n(), s.autoHeight && e.updateAutoHeight()
		else {
			if (
				(s.slidesPerView === 'auto' || s.slidesPerView > 1) &&
				e.isEnd &&
				!s.centeredSlides
			) {
				const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides
				r = e.slideTo(l.length - 1, 0, !1, !0)
			} else r = e.slideTo(e.activeIndex, 0, !1, !0)
			r || n()
		}
		s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update')
	}
	changeDirection(e, t) {
		t === void 0 && (t = !0)
		const s = this,
			n = s.params.direction
		return (
			e || (e = n === 'horizontal' ? 'vertical' : 'horizontal'),
			e === n ||
				(e !== 'horizontal' && e !== 'vertical') ||
				(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
				s.el.classList.add(`${s.params.containerModifierClass}${e}`),
				s.emitContainerClasses(),
				(s.params.direction = e),
				s.slides.forEach((r) => {
					e === 'vertical' ? (r.style.width = '') : (r.style.height = '')
				}),
				s.emit('changeDirection'),
				t && s.update()),
			s
		)
	}
	changeLanguageDirection(e) {
		const t = this
		;(t.rtl && e === 'rtl') ||
			(!t.rtl && e === 'ltr') ||
			((t.rtl = e === 'rtl'),
			(t.rtlTranslate = t.params.direction === 'horizontal' && t.rtl),
			t.rtl
				? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
				  (t.el.dir = 'rtl'))
				: (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
				  (t.el.dir = 'ltr')),
			t.update())
	}
	mount(e) {
		const t = this
		if (t.mounted) return !0
		let s = e || t.params.el
		if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1
		;(s.swiper = t),
			s.parentNode &&
				s.parentNode.host &&
				s.parentNode.host.nodeName ===
					t.params.swiperElementNodeName.toUpperCase() &&
				(t.isElement = !0)
		const n = () =>
			`.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
		let l =
			s && s.shadowRoot && s.shadowRoot.querySelector
				? s.shadowRoot.querySelector(n())
				: k(s, n())[0]
		return (
			!l &&
				t.params.createElements &&
				((l = q('div', t.params.wrapperClass)),
				s.append(l),
				k(s, `.${t.params.slideClass}`).forEach((o) => {
					l.append(o)
				})),
			Object.assign(t, {
				el: s,
				wrapperEl: l,
				slidesEl:
					t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
				hostEl: t.isElement ? s.parentNode.host : s,
				mounted: !0,
				rtl: s.dir.toLowerCase() === 'rtl' || D(s, 'direction') === 'rtl',
				rtlTranslate:
					t.params.direction === 'horizontal' &&
					(s.dir.toLowerCase() === 'rtl' || D(s, 'direction') === 'rtl'),
				wrongRTL: D(l, 'display') === '-webkit-box'
			}),
			!0
		)
	}
	init(e) {
		const t = this
		if (t.initialized || t.mount(e) === !1) return t
		t.emit('beforeInit'),
			t.params.breakpoints && t.setBreakpoint(),
			t.addClasses(),
			t.updateSize(),
			t.updateSlides(),
			t.params.watchOverflow && t.checkOverflow(),
			t.params.grabCursor && t.enabled && t.setGrabCursor(),
			t.params.loop && t.virtual && t.params.virtual.enabled
				? t.slideTo(
						t.params.initialSlide + t.virtual.slidesBefore,
						0,
						t.params.runCallbacksOnInit,
						!1,
						!0
				  )
				: t.slideTo(
						t.params.initialSlide,
						0,
						t.params.runCallbacksOnInit,
						!1,
						!0
				  ),
			t.params.loop && t.loopCreate(),
			t.attachEvents()
		const n = [...t.el.querySelectorAll('[loading="lazy"]')]
		return (
			t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
			n.forEach((r) => {
				r.complete
					? R(t, r)
					: r.addEventListener('load', (l) => {
							R(t, l.target)
					  })
			}),
			Z(t),
			(t.initialized = !0),
			Z(t),
			t.emit('init'),
			t.emit('afterInit'),
			t
		)
	}
	destroy(e, t) {
		e === void 0 && (e = !0), t === void 0 && (t = !0)
		const s = this,
			{ params: n, el: r, wrapperEl: l, slides: o } = s
		return (
			typeof s.params > 'u' ||
				s.destroyed ||
				(s.emit('beforeDestroy'),
				(s.initialized = !1),
				s.detachEvents(),
				n.loop && s.loopDestroy(),
				t &&
					(s.removeClasses(),
					r.removeAttribute('style'),
					l.removeAttribute('style'),
					o &&
						o.length &&
						o.forEach((a) => {
							a.classList.remove(
								n.slideVisibleClass,
								n.slideFullyVisibleClass,
								n.slideActiveClass,
								n.slideNextClass,
								n.slidePrevClass
							),
								a.removeAttribute('style'),
								a.removeAttribute('data-swiper-slide-index')
						})),
				s.emit('destroy'),
				Object.keys(s.eventsListeners).forEach((a) => {
					s.off(a)
				}),
				e !== !1 && ((s.el.swiper = null), Pe(s)),
				(s.destroyed = !0)),
			null
		)
	}
	static extendDefaults(e) {
		A(J, e)
	}
	static get extendedDefaults() {
		return J
	}
	static get defaults() {
		return ce
	}
	static installModule(e) {
		O.prototype.__modules__ || (O.prototype.__modules__ = [])
		const t = O.prototype.__modules__
		typeof e == 'function' && t.indexOf(e) < 0 && t.push(e)
	}
	static use(e) {
		return Array.isArray(e)
			? (e.forEach((t) => O.installModule(t)), O)
			: (O.installModule(e), O)
	}
}
Object.keys(U).forEach((i) => {
	Object.keys(U[i]).forEach((e) => {
		O.prototype[e] = U[i][e]
	})
})
O.use([De, Ve])
function Rt(i, e, t, s) {
	return (
		i.params.createElements &&
			Object.keys(s).forEach((n) => {
				if (!t[n] && t.auto === !0) {
					let r = k(i.el, `.${s[n]}`)[0]
					r || ((r = q('div', s[n])), (r.className = s[n]), i.el.append(r)),
						(t[n] = r),
						(e[n] = r)
				}
			}),
		t
	)
}
function Ht(i) {
	let { swiper: e, extendParams: t, on: s, emit: n } = i
	t({
		navigation: {
			nextEl: null,
			prevEl: null,
			hideOnClick: !1,
			disabledClass: 'swiper-button-disabled',
			hiddenClass: 'swiper-button-hidden',
			lockClass: 'swiper-button-lock',
			navigationDisabledClass: 'swiper-navigation-disabled'
		}
	}),
		(e.navigation = { nextEl: null, prevEl: null })
	function r(f) {
		let h
		return f &&
			typeof f == 'string' &&
			e.isElement &&
			((h = e.el.querySelector(f)), h)
			? h
			: (f &&
					(typeof f == 'string' && (h = [...document.querySelectorAll(f)]),
					e.params.uniqueNavElements &&
						typeof f == 'string' &&
						h.length > 1 &&
						e.el.querySelectorAll(f).length === 1 &&
						(h = e.el.querySelector(f))),
			  f && !h ? f : h)
	}
	function l(f, h) {
		const w = e.params.navigation
		;(f = G(f)),
			f.forEach((g) => {
				g &&
					(g.classList[h ? 'add' : 'remove'](...w.disabledClass.split(' ')),
					g.tagName === 'BUTTON' && (g.disabled = h),
					e.params.watchOverflow &&
						e.enabled &&
						g.classList[e.isLocked ? 'add' : 'remove'](w.lockClass))
			})
	}
	function o() {
		const { nextEl: f, prevEl: h } = e.navigation
		if (e.params.loop) {
			l(h, !1), l(f, !1)
			return
		}
		l(h, e.isBeginning && !e.params.rewind), l(f, e.isEnd && !e.params.rewind)
	}
	function a(f) {
		f.preventDefault(),
			!(e.isBeginning && !e.params.loop && !e.params.rewind) &&
				(e.slidePrev(), n('navigationPrev'))
	}
	function d(f) {
		f.preventDefault(),
			!(e.isEnd && !e.params.loop && !e.params.rewind) &&
				(e.slideNext(), n('navigationNext'))
	}
	function c() {
		const f = e.params.navigation
		if (
			((e.params.navigation = Rt(
				e,
				e.originalParams.navigation,
				e.params.navigation,
				{ nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
			)),
			!(f.nextEl || f.prevEl))
		)
			return
		let h = r(f.nextEl),
			w = r(f.prevEl)
		Object.assign(e.navigation, { nextEl: h, prevEl: w }),
			(h = G(h)),
			(w = G(w))
		const g = (S, v) => {
			S && S.addEventListener('click', v === 'next' ? d : a),
				!e.enabled && S && S.classList.add(...f.lockClass.split(' '))
		}
		h.forEach((S) => g(S, 'next')), w.forEach((S) => g(S, 'prev'))
	}
	function u() {
		let { nextEl: f, prevEl: h } = e.navigation
		;(f = G(f)), (h = G(h))
		const w = (g, S) => {
			g.removeEventListener('click', S === 'next' ? d : a),
				g.classList.remove(...e.params.navigation.disabledClass.split(' '))
		}
		f.forEach((g) => w(g, 'next')), h.forEach((g) => w(g, 'prev'))
	}
	s('init', () => {
		e.params.navigation.enabled === !1 ? p() : (c(), o())
	}),
		s('toEdge fromEdge lock unlock', () => {
			o()
		}),
		s('destroy', () => {
			u()
		}),
		s('enable disable', () => {
			let { nextEl: f, prevEl: h } = e.navigation
			if (((f = G(f)), (h = G(h)), e.enabled)) {
				o()
				return
			}
			;[...f, ...h]
				.filter((w) => !!w)
				.forEach((w) => w.classList.add(e.params.navigation.lockClass))
		}),
		s('click', (f, h) => {
			let { nextEl: w, prevEl: g } = e.navigation
			;(w = G(w)), (g = G(g))
			const S = h.target
			if (e.params.navigation.hideOnClick && !g.includes(S) && !w.includes(S)) {
				if (
					e.pagination &&
					e.params.pagination &&
					e.params.pagination.clickable &&
					(e.pagination.el === S || e.pagination.el.contains(S))
				)
					return
				let v
				w.length
					? (v = w[0].classList.contains(e.params.navigation.hiddenClass))
					: g.length &&
					  (v = g[0].classList.contains(e.params.navigation.hiddenClass)),
					n(v === !0 ? 'navigationShow' : 'navigationHide'),
					[...w, ...g]
						.filter((b) => !!b)
						.forEach((b) => b.classList.toggle(e.params.navigation.hiddenClass))
			}
		})
	const m = () => {
			e.el.classList.remove(
				...e.params.navigation.navigationDisabledClass.split(' ')
			),
				c(),
				o()
		},
		p = () => {
			e.el.classList.add(
				...e.params.navigation.navigationDisabledClass.split(' ')
			),
				u()
		}
	Object.assign(e.navigation, {
		enable: m,
		disable: p,
		update: o,
		init: c,
		destroy: u
	})
}
function Wt() {
	if (document.querySelector('.template__swiper')) {
		const s = {
			slidesPerView: 'auto',
			spaceBetween: 20,
			breakpoints: { 700: { spaceBetween: 60 } }
		}
		new O('.template__swiper', s)
	}
	if (document.querySelector('.our-services__swiper')) {
		const s = {
			enabled: !0,
			slidesPerView: 'auto',
			breakpoints: { 1024: { enabled: !1, slidesPerView: 'auto' } }
		}
		new O('.our-services__swiper', s)
	}
	if (document.querySelector('.enterprise__slider')) {
		const s = {
			modules: [Ht],
			navigation: {
				prevEl: '.enterprise__slider-btn-prev',
				nextEl: '.enterprise__slider-btn-next'
			},
			breakpoints: { 1024: { slidesPerView: 3 }, 699: { slidesPerView: 2.2 } },
			slidesPerView: 1.2,
			spaceBetween: 22,
			centeredSlides: !0,
			loop: !0,
			speed: 500
		}
		new O('.enterprise__slider', s)
	}
}
const qt = document.querySelectorAll('.customers__list-item')
function jt() {
	qt.forEach((i) => {
		i.addEventListener('click', function (e) {
			i.classList.toggle('item-element-active')
		})
	})
}
const Yt = document.getElementById('myDonutChart').getContext('2d'),
	Xt = {
		labels: ['Investor bandwidth', 'A/B testing', ' Agile Development'],
		datasets: [
			{
				data: [30, 35, 35],
				backgroundColor: ['#69E6A6', '#0A2640', '#0DBBFC'],
				borderColor: ['#69E6A6', '#0A2640', '#0DBBFC'],
				borderWidth: 1
			}
		]
	}
function Kt() {
	new Chart(Yt, {
		type: 'doughnut',
		data: Xt,
		options: {
			responsive: !0,
			plugins: {
				legend: !1,
				legendCallback: function (i) {
					let e = []
					e.push('<ul>')
					for (let t = 0; t < i.data.labels.length; t++)
						e.push('<li>'),
							e.push(
								'<span style="background-color:' +
									i.data.datasets[0].backgroundColor[t] +
									'"></span>'
							),
							e.push(i.data.labels[t]),
							e.push('</li>')
					return e.push('</ul>'), e.join('')
				}
			},
			aspectRatio: 1,
			cutout: '74%',
			rotation: -5.5 * Math.PI,
			tooltips: {
				callbacks: {
					title: function (i, e) {
						return e.labels[i[0].index]
					}
				}
			}
		}
	})
}
const Ut = document.querySelectorAll('.dropdown__accordion-item')
function Jt() {
	Ut.forEach((i) => {
		i.addEventListener('click', () => {
			i.classList.toggle('active-dropdown')
		})
	})
}
const Qt = document.getElementById('form'),
	ve = document.querySelector('.form__input-email')
function Zt(i) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)
}
function we() {
	const i = document.querySelector('.form__btn')
	Zt(ve.value)
		? (i.classList.add('active-btn'), (i.disabled = !1))
		: (i.classList.remove('active-btn'), (i.disabled = !0))
}
ve.addEventListener('input', we)
Qt.addEventListener('submit', function (i) {
	i.preventDefault(), alert('Form submitted!')
})
function ei() {
	const i = document.getElementById('loadMoreBtn'),
		e = document.getElementById('cardContainer'),
		t = document.getElementById('overlay'),
		s = document.querySelector('body')
	i.addEventListener('click', function () {
		;(t.style.display = 'block'),
			s.classList.add('lock'),
			n().then(function (l) {
				l.forEach(function (o) {
					e.appendChild(o)
				}),
					(t.style.display = 'none'),
					s.classList.remove('lock')
			})
	})
	function n() {
		return new Promise(function (l) {
			setTimeout(function () {
				const o = r('Pitch termsheet backing validation focus release.'),
					a = r('Pitch termsheet backing validation focus release.'),
					d = r('Pitch termsheet backing validation focus release.')
				l([o, a, d])
			}, 2500)
		})
	}
	function r(l) {
		const o = document.createElement('div')
		return (
			o.classList.add('proposition__card'),
			(o.innerHTML = `
            <div class="proposition__card-image">
                <img src="/Boldo/assets/image-1-zdmVgjNx.png" alt="image card">
            </div>
            <div class="proposition__card-descr">
                <p class="proposition__card-category">
                   Category
                </p>
                <p class="proposition__card-date">
                   November 22, 2021
                </p>
            </div>
            <p class="proposition__card-title">${l}</p>
            <div class="proposition__card-person">
                <img src="/src/assets/images/proposition/avatar-1.png" alt="Chandler Bing">
                <p>Chandler Bing</p>
            </div>
        `),
			o
		)
	}
}
document.addEventListener('DOMContentLoaded', async () => {
	ye(), Wt(), jt(), Kt(), Jt(), we(), ei()
})
