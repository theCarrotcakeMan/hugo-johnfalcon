/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scroll_triggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-triggers */ \"./node_modules/scroll-triggers/dist/scroll-triggers.js\");\n\n\n/**\n * Initialize experience based on the current scroll position\n * See: scenes, scene_progress and transition classes\n */\nwindow.initExperience = function() {\n\n  console.log('Ok, init. Man');\n\n};\n\nwindow.onload = (event) => {\n  console.log(\"Loaded window\", event);\n  event.target.body.addEventListener(\"load\", initExperience());\n\n};\n\n\n//# sourceURL=webpack://hugo-johnfalcon/./assets/js/main.js?");

/***/ }),

/***/ "./node_modules/attrobj/dist/attrobj.js":
/*!**********************************************!*\
  !*** ./node_modules/attrobj/dist/attrobj.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global window */\nfunction attrobj (key, el) {\n  var values = {};\n  Object.keys(el.dataset).forEach(function (data) {\n    if (data.match(new RegExp(\"^\" + key)) && data !== key) {\n      var optionName = data.replace(key, '');\n      var isGlobal = false;\n\n      if (optionName.match(/^Global/)) {\n        optionName = optionName.replace('Global', '');\n        isGlobal = true;\n      }\n\n      optionName = \"\" + optionName[0].toLowerCase() + optionName.slice(1);\n\n      if (isGlobal) {\n        values[optionName] = window[el.dataset[data]];\n      } else {\n        values[optionName] = el.dataset[data];\n      }\n\n      if (typeof values[optionName] === 'undefined' || values[optionName] === '') {\n        values[optionName] = true;\n      }\n    }\n  });\n  return values;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attrobj);\n//# sourceMappingURL=attrobj.js.map\n\n\n//# sourceURL=webpack://hugo-johnfalcon/./node_modules/attrobj/dist/attrobj.js?");

/***/ }),

/***/ "./node_modules/domassist/dist/domassist.js":
/*!**************************************************!*\
  !*** ./node_modules/domassist/dist/domassist.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"addAttrs\": () => (/* binding */ addAttrs),\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"append\": () => (/* binding */ append),\n/* harmony export */   \"closest\": () => (/* binding */ closest),\n/* harmony export */   \"delegate\": () => (/* binding */ delegate),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findOne\": () => (/* binding */ findOne),\n/* harmony export */   \"fire\": () => (/* binding */ fire),\n/* harmony export */   \"hasClass\": () => (/* binding */ hasClass),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"hover\": () => (/* binding */ hover),\n/* harmony export */   \"html\": () => (/* binding */ html),\n/* harmony export */   \"isTouch\": () => (/* binding */ isTouch),\n/* harmony export */   \"isWindow\": () => (/* binding */ isWindow),\n/* harmony export */   \"matches\": () => (/* binding */ matches),\n/* harmony export */   \"modify\": () => (/* binding */ modify),\n/* harmony export */   \"off\": () => (/* binding */ off),\n/* harmony export */   \"on\": () => (/* binding */ on),\n/* harmony export */   \"once\": () => (/* binding */ once),\n/* harmony export */   \"prefixedTransform\": () => (/* binding */ prefixedTransform),\n/* harmony export */   \"ready\": () => (/* binding */ ready),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass),\n/* harmony export */   \"scrollableContainer\": () => (/* binding */ getScrollableContainer),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"toArray\": () => (/* binding */ toArray),\n/* harmony export */   \"toggleClass\": () => (/* binding */ toggleClass)\n/* harmony export */ });\nfunction isWindow(obj) {\n  return obj != null && obj === obj.window;\n}\n\nfunction find(selector, context) {\n  if (context === void 0) {\n    context = null;\n  }\n\n  if (selector instanceof HTMLElement || selector instanceof Node || isWindow(selector)) {\n    return [selector];\n  } else if (selector instanceof NodeList) {\n    return [].slice.call(selector);\n  } else if (typeof selector === 'string') {\n    var startElement = context ? find(context)[0] : document;\n    return [].slice.call(startElement.querySelectorAll(selector));\n  }\n\n  return [];\n}\n\nfunction addClass(selector, cls) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return addClass(item, cls);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    var clsArray = [].concat(cls);\n    els.forEach(function (el) {\n      clsArray.forEach(function (item) {\n        el.classList.add(item);\n      });\n    });\n    return els;\n  }\n}\n\nfunction on(selector, event, cb, capture) {\n  if (capture === void 0) {\n    capture = false;\n  }\n\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return on(item, event, cb, capture);\n    });\n    return;\n  }\n\n  var data = {\n    cb: cb,\n    capture: capture\n  };\n\n  if (!window._domassistevents) {\n    window._domassistevents = {};\n  }\n\n  window._domassistevents[\"_\" + event] = data;\n  var el = find(selector);\n\n  if (el.length) {\n    el.forEach(function (item) {\n      item.addEventListener(event, cb, capture);\n    });\n  }\n}\n\nfunction matches(el, selector) {\n  var proto = Element.prototype;\n  var match = false;\n  var prefixes = ['matches', 'matchesSelector', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'];\n  prefixes.forEach(function (prefix) {\n    if (proto.hasOwnProperty(prefix)) {\n      match = proto[prefix];\n    }\n  });\n\n  if (match) {\n    return el ? match.call(el, selector) : null;\n  }\n}\n\nfunction closest(el, selector) {\n  do {\n    if (matches(el, selector)) {\n      return el;\n    }\n\n    el = el.parentElement || el.parentNode;\n  } while (el !== null && el.nodeType === 1);\n\n  return null;\n}\n\nfunction delegate(el, event, selector, cb, capture) {\n  if (capture === void 0) {\n    capture = false;\n  }\n\n  on(el, event, function (e) {\n    if (e.target && closest(e.target, selector)) {\n      return cb(e);\n    }\n  }, capture);\n}\n\nfunction findOne(selector, el) {\n  var found = find(selector, el);\n\n  if (found.length) {\n    return found[0];\n  }\n\n  return null;\n}\n\n// Check for the usage of native support for CustomEvents which is lacking\n// completely on IE.\n//\n\nfunction canIuseNativeCustom() {\n  try {\n    var p = new CustomEvent('t', {\n      detail: {\n        a: 'b'\n      }\n    });\n    return p.type === 't' && p.detail.a === 'b';\n  } catch (e) {\n    return false;\n  }\n} // Lousy polyfill for the Custom Event constructor for IE.\n\n\nvar IECustomEvent = function CustomEvent(type, params) {\n  var e = document.createEvent('CustomEvent');\n\n  if (params) {\n    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);\n  } else {\n    e.initCustomEvent(type, false, false, undefined);\n  }\n\n  return e;\n};\n\nvar DomassistCustomEvent = false;\n\nfunction fire(selector, type, params) {\n  if (params === void 0) {\n    params = {};\n  }\n\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return fire(item, type, params);\n    });\n  }\n\n  if (!DomassistCustomEvent) {\n    DomassistCustomEvent = canIuseNativeCustom() ? CustomEvent : IECustomEvent;\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    if (params.bubbles !== false) {\n      params.bubbles = true;\n    }\n\n    els.forEach(function (el) {\n      var event = new DomassistCustomEvent(type, params);\n      el.dispatchEvent(event);\n    });\n    return els;\n  }\n}\n\nfunction hasClass(selector, cls) {\n  var el = findOne(selector);\n\n  if (!el) {\n    return false;\n  }\n\n  return el.classList.contains(cls);\n}\n\nfunction hide(selector) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return hide(item);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      var currentDisplay = window.getComputedStyle(el).getPropertyValue('display');\n\n      if (currentDisplay !== 'none') {\n        el.dataset._currentDisplay = currentDisplay;\n        el.style.display = 'none';\n      }\n    });\n  }\n}\n\nfunction hover(el, enter, exit) {\n  on(el, 'mouseenter', enter);\n  on(el, 'mouseleave', exit);\n}\n\nfunction off(selector, event) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return off(item, event);\n    });\n  }\n\n  if (!window._domassistevents) {\n    window._domassistevents = {};\n  }\n\n  var data = window._domassistevents[\"_\" + event];\n\n  if (!data) {\n    return;\n  }\n\n  var el = find(selector);\n\n  if (el.length) {\n    el.forEach(function (item) {\n      item.removeEventListener(event, data.cb, data.capture);\n    });\n  }\n}\n\nfunction once(el, event, run, capture) {\n  if (capture === void 0) {\n    capture = false;\n  }\n\n  on(el, event, function (e) {\n    off(el, event);\n    run(e);\n  }, capture);\n}\n\nvar transform = null;\nfunction prefixedTransform() {\n  if (transform) {\n    return transform;\n  }\n\n  var testEl = document.createElement('div');\n\n  if (testEl.style.transform === null) {\n    var vendors = ['Webkit', 'webkit', 'Moz', 'ms'];\n    var property = null;\n\n    for (var i = 0, len = vendors.length; i < len && !property; i++) {\n      var tProperty = vendors[i] + \"Transform\";\n\n      if (typeof testEl.style[tProperty] !== 'undefined') {\n        property = tProperty;\n      }\n    }\n\n    transform = property;\n  } else {\n    transform = 'transform';\n  }\n\n  return transform;\n}\n\nfunction removeClass(selector, cls) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return removeClass(item, cls);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    var clsArray = [].concat(cls);\n    els.forEach(function (el) {\n      clsArray.forEach(function (item) {\n        el.classList.remove(item);\n      });\n    });\n    return els;\n  }\n}\n\nvar SCROLLABLE_CONTAINER;\n\nfunction getScrollableContainer() {\n  if (SCROLLABLE_CONTAINER) {\n    return SCROLLABLE_CONTAINER;\n  }\n\n  var documentElement = window.document.documentElement;\n  var scrollableContainer;\n  documentElement.scrollTop = 1;\n\n  if (documentElement.scrollTop === 1) {\n    documentElement.scrollTop = 0;\n    scrollableContainer = documentElement;\n  } else {\n    scrollableContainer = document.body;\n  }\n\n  SCROLLABLE_CONTAINER = scrollableContainer;\n  return scrollableContainer;\n}\n\nfunction show(selector) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return show(item);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      el.style.display = el.dataset._currentDisplay || 'block';\n    });\n  }\n}\n\nfunction toggleClass(selector, cls) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return toggleClass(item, cls);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    var clsArray = [].concat(cls);\n    els.forEach(function (el) {\n      clsArray.forEach(function (item) {\n        el.classList.toggle(item);\n      });\n    });\n    return els;\n  }\n}\n\nvar setupReady = function setupReady(callbacks) {\n  return function (callback) {\n    callbacks.push(callback);\n\n    function execute() {\n      while (callbacks.length) {\n        var fn = callbacks.shift();\n\n        if (typeof fn === 'function') {\n          fn();\n        }\n      }\n    }\n\n    function loaded() {\n      document.removeEventListener('DOMContentLoaded', loaded);\n      execute();\n    }\n\n    setTimeout(function () {\n      if (document.readyState !== 'loading') {\n        return execute();\n      }\n    }, 0);\n    document.addEventListener('DOMContentLoaded', loaded);\n  };\n};\n\nvar ready = setupReady([]);\n\nfunction styles(selector, css) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return styles(item, css);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      Object.keys(css).forEach(function (key) {\n        el.style[key] = css[key];\n      });\n    });\n  }\n}\n\nfunction addAttrs(selector, attrs) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return addAttrs(item, attrs);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (item) {\n      Object.keys(attrs).forEach(function (attr) {\n        if (attr in item) {\n          item[attr] = attrs[attr];\n        } else {\n          item.dataset[attr] = attrs[attr];\n        }\n      });\n    });\n  }\n\n  return els;\n}\n\nfunction html(selector, value) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return html(item, value);\n    });\n  }\n\n  var el = find(selector);\n\n  if (el.length) {\n    var length = el.length;\n\n    for (var i = 0; i < length; i += 1) {\n      el[i].innerHTML = value;\n    }\n  }\n}\n\n/* global DocumentTouch */\nfunction isTouch() {\n  return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;\n}\n\nfunction bindEvents(el, events) {\n  Object.keys(events).forEach(function (event) {\n    on(el, event, events[event]);\n  });\n}\n\nfunction modify(selector, params) {\n  if (Array.isArray(selector)) {\n    selector.forEach(function (item) {\n      return modify(item, params);\n    });\n  }\n\n  var modules = {\n    addClass: addClass,\n    removeClass: removeClass,\n    html: html,\n    events: on,\n    styles: styles\n  };\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      Object.keys(params).forEach(function (param, index) {\n        if (param in modules) {\n          if (param === 'events') {\n            bindEvents(el, params[param]);\n          }\n\n          modules[param](el, params[param]);\n        }\n      });\n    });\n  }\n}\n\nfunction append(selector, value) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return append(item, value);\n    });\n  }\n\n  var els = find(selector);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      if (typeof value === 'string') {\n        el.insertAdjacentHTML('beforeend', value);\n      } else {\n        el.appendChild(value);\n      }\n    });\n  }\n}\n\nfunction toArray(value) {\n  if (!value) {\n    return [];\n  }\n\n  if (Array.isArray(value)) {\n    return value;\n  }\n\n  if (value instanceof Node) {\n    return [value];\n  }\n\n  return [].slice.call(value);\n}\n\nfunction remove(selector, context) {\n  if (Array.isArray(selector)) {\n    return selector.forEach(function (item) {\n      return remove(item, context);\n    });\n  }\n\n  var els = find(selector, context);\n\n  if (els.length) {\n    els.forEach(function (el) {\n      if (el.prototype && el.prototype.remove) {\n        el.remove();\n      } else if (el.parentNode) {\n        el.parentNode.removeChild(el);\n      }\n    });\n  }\n}\n\nvar domassist_default = {\n  addClass: addClass,\n  delegate: delegate,\n  find: find,\n  findOne: findOne,\n  fire: fire,\n  hasClass: hasClass,\n  hide: hide,\n  hover: hover,\n  isWindow: isWindow,\n  off: off,\n  on: on,\n  once: once,\n  prefixedTransform: prefixedTransform,\n  removeClass: removeClass,\n  scrollableContainer: getScrollableContainer,\n  show: show,\n  matches: matches,\n  toggleClass: toggleClass,\n  closest: closest,\n  ready: ready,\n  styles: styles,\n  addAttrs: addAttrs,\n  html: html,\n  isTouch: isTouch,\n  modify: modify,\n  append: append,\n  toArray: toArray,\n  remove: remove\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domassist_default);\n\n//# sourceMappingURL=domassist.js.map\n\n\n//# sourceURL=webpack://hugo-johnfalcon/./node_modules/domassist/dist/domassist.js?");

/***/ }),

/***/ "./node_modules/scroll-triggers/dist/scroll-triggers.js":
/*!**************************************************************!*\
  !*** ./node_modules/scroll-triggers/dist/scroll-triggers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var domassist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domassist */ \"./node_modules/domassist/dist/domassist.js\");\n/* harmony import */ var attrobj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! attrobj */ \"./node_modules/attrobj/dist/attrobj.js\");\n/* harmony import */ var tinybounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinybounce */ \"./node_modules/tinybounce/dist/tinybounce.js\");\n\n\n\n\nvar Events = {\n  In: 'scrolltriggers:inView',\n  Out: 'scrolltriggers:outOfView',\n  Pause: 'scrolltriggers:pause',\n  Resume: 'scrolltriggers:resume',\n  Bounds: 'scrolltriggers:bounds'\n};\n\nvar ScrollTrigger =\n/*#__PURE__*/\nfunction () {\n  function ScrollTrigger(el, options) {\n    var _this = this;\n\n    if (el.hasAttribute('data-scroll-init')) {\n      return;\n    }\n\n    this.added = false;\n    this.el = el;\n    this.options = options;\n    this.eventHandler = (0,tinybounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.onScroll.bind(this), 10, true);\n    this.dCalcBounds = (0,tinybounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.calcBounds.bind(this), 10);\n    this.paused = false;\n    this.disabled = false;\n    this.calcOffset(); // If images, once by default\n\n    if (this.options.image || this.options.src || this.options.srcset) {\n      this.options.once = true;\n    }\n\n    el.setAttribute('data-scroll-init', 'true');\n    this.calcBounds();\n    window.addEventListener('scroll', this.eventHandler);\n    window.addEventListener('resize', this.dCalcBounds);\n    (0,domassist__WEBPACK_IMPORTED_MODULE_0__.on)(this.el, Events.Pause, function () {\n      _this.paused = true;\n    });\n    (0,domassist__WEBPACK_IMPORTED_MODULE_0__.on)(this.el, Events.Resume, function () {\n      _this.paused = false;\n    });\n    /*\n      Prevents a bug on Blink+Webkit in which scroll is always 0 until around\n      400 milliseconds due to anchor scrolling features.\n     */\n\n    setTimeout(this.eventHandler, 400);\n  }\n\n  var _proto = ScrollTrigger.prototype;\n\n  _proto.calcBounds = function calcBounds() {\n    var _this2 = this;\n\n    this.calcOffset(); // Element is hidden and not fixed\n\n    var isAllowedToBeFixed = this.options.progress === true || typeof this.options.fixed !== 'undefined';\n\n    if (!this.el.offsetParent && !isAllowedToBeFixed || this.added && this.options.once) {\n      // Don't even bother calculating\n      this.disabled = true;\n      return;\n    }\n\n    this.disabled = false;\n\n    if (isAllowedToBeFixed && this.added) {\n      this.outOfView();\n      return requestAnimationFrame(function () {\n        return _this2.calcBounds();\n      });\n    }\n\n    var position = this.options.position || 'bottom';\n    this.startEl = this.options.start ? (0,domassist__WEBPACK_IMPORTED_MODULE_0__.findOne)(this.options.start) : this.el;\n    ScrollTrigger.checkElement(this.startEl, 'start', this.options.start);\n    var rect = this.startEl.getBoundingClientRect();\n    var scrollY = ScrollTrigger.getScrollY();\n    var start = rect.top + scrollY + (this.options.offset || 0);\n    this.start = ScrollTrigger.processPosition(position, start);\n\n    if (this.options.end) {\n      var endEl = (0,domassist__WEBPACK_IMPORTED_MODULE_0__.findOne)(this.options.end);\n      var endRect = endEl.getBoundingClientRect();\n      var end = endRect.top + scrollY;\n      var endPosition = this.options.positionEnd || 'bottom';\n\n      if (endPosition === 'auto') {\n        endPosition = 'top';\n      }\n\n      this.end = ScrollTrigger.processPosition(endPosition, end);\n\n      if (this.options.positionEnd === 'auto') {\n        this.end -= this.el.offsetHeight;\n      }\n\n      ScrollTrigger.checkElement(endEl, 'end', this.options.end);\n    }\n\n    this.fire(Events.Bounds);\n    this.eventHandler();\n  };\n\n  _proto.calcOffset = function calcOffset() {\n    this.options.offset = this.options.offset ? this.options.offset : this.el.dataset.scrollOffset; // A screen above loading\n\n    if (this.options.image || this.options.srcset || this.options.offset === 'auto') {\n      this.options.offset = Math.max(document.documentElement.clientHeight, window.innerHeight, 0) * -1;\n    } else {\n      this.options.offset = parseInt(this.options.offset || 0, 10);\n    }\n  };\n\n  _proto.inView = function inView() {\n    var _this$options = this.options,\n        className = _this$options.className,\n        inView = _this$options.inView;\n\n    if (className && this.el.classList) {\n      (0,domassist__WEBPACK_IMPORTED_MODULE_0__.addClass)(this.el, className);\n    }\n\n    var image = this.options.image;\n    var src = this.options.src;\n    var srcset = this.options.srcset;\n\n    if (image || src) {\n      var source = image || src;\n\n      switch (this.el.tagName) {\n        case 'IMG':\n        case 'IFRAME':\n        case 'VIDEO':\n        case 'SCRIPT':\n          this.el.setAttribute('src', source);\n          break;\n\n        default:\n          (0,domassist__WEBPACK_IMPORTED_MODULE_0__.styles)(this.el, {\n            backgroundImage: \"url(\" + source + \")\",\n            backgroundRepeat: 'no-repeat'\n          });\n      }\n    }\n\n    if (srcset) {\n      this.el.setAttribute('srcset', srcset);\n    }\n\n    if (typeof inView === 'function') {\n      inView(this.el, this.options);\n    }\n\n    this.fire(Events.In);\n\n    if (this.options.once) {\n      this.disabled = true;\n      window.removeEventListener('scroll', this.eventHandler);\n      window.removeEventListener('resize', this.dCalcBounds);\n    }\n\n    this.added = true;\n  };\n\n  _proto.outOfView = function outOfView() {\n    var _this$options2 = this.options,\n        className = _this$options2.className,\n        outOfView = _this$options2.outOfView;\n\n    if (className && this.el.classList) {\n      (0,domassist__WEBPACK_IMPORTED_MODULE_0__.removeClass)(this.el, className);\n    }\n\n    if (typeof outOfView === 'function') {\n      outOfView(this.el, this.options);\n    }\n\n    this.fire(Events.Out);\n    this.added = false;\n  };\n\n  _proto.fire = function fire$1(event) {\n    (0,domassist__WEBPACK_IMPORTED_MODULE_0__.fire)(this.el, event, {\n      detail: {\n        instance: this,\n        options: this.options\n      }\n    });\n  };\n\n  _proto.onScroll = function onScroll() {\n    var scroll = ScrollTrigger.getScrollY();\n\n    if (this.paused || this.disabled) {\n      return;\n    }\n\n    if (this.options.progress) {\n      var perc = scroll / (document.documentElement.scrollHeight - window.innerHeight);\n      this.el.style.width = perc * 100 + \"%\";\n    }\n\n    if (scroll < this.start || this.end && scroll > this.end) {\n      if (this.added) {\n        this.outOfView();\n      }\n\n      return;\n    }\n\n    if (this.added) {\n      return;\n    }\n\n    this.inView();\n  };\n\n  ScrollTrigger.checkElement = function checkElement(element, position, selector) {\n    if (!element) {\n      throw new Error(position + \" element doesn't match any element with selector: \\\"\" + selector + \"\\\"\");\n    }\n  };\n\n  ScrollTrigger.getScrollY = function getScrollY() {\n    return window.pageYOffset || document.documentElement.scrollTop;\n  };\n\n  ScrollTrigger.processPosition = function processPosition(position, currentValue) {\n    if (position === 'top') {\n      return currentValue;\n    }\n\n    if (position === 'middle') {\n      currentValue -= window.innerHeight / 2;\n    } else if (position === 'bottom') {\n      currentValue -= window.innerHeight;\n    } else {\n      currentValue -= window.innerHeight * (parseInt(position, 10) / 100);\n    }\n\n    return currentValue;\n  };\n\n  return ScrollTrigger;\n}();\n\nvar init = function init(items) {\n  var instances = [];\n\n  if (items && Array.isArray(items)) {\n    items.forEach(function (item) {\n      var els = (0,domassist__WEBPACK_IMPORTED_MODULE_0__.find)(item.el);\n\n      if (els === null) {\n        throw new Error('unknown element');\n      }\n\n      els.forEach(function (el) {\n        delete item.el;\n        instances.push(new ScrollTrigger(el, item));\n      });\n    });\n  } else if (items) {\n    throw new Error('please convert object to array');\n  } else {\n    var els = (0,domassist__WEBPACK_IMPORTED_MODULE_0__.find)('[data-scroll]');\n    els.forEach(function (el) {\n      var options = (0,attrobj__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('scroll', el);\n\n      if (options.progress !== null && typeof options.progress !== 'undefined') {\n        options.progress = true;\n      }\n\n      options.className = options[\"class\"];\n\n      if (options.offset) {\n        options.offset = parseInt(options.offset, 10);\n      }\n\n      if (typeof options.once !== 'undefined') {\n        options.once = true;\n      }\n\n      instances.push(new ScrollTrigger(el, options));\n    });\n  }\n\n  return instances;\n};\n\nif (document.readyState !== 'complete') {\n  // Avoid image loading impacting on calculations\n  document.addEventListener('readystatechange', function () {\n    if (document.readyState === 'complete') {\n      (0,domassist__WEBPACK_IMPORTED_MODULE_0__.fire)(window, 'resize');\n    }\n  });\n}\n\n(0,domassist__WEBPACK_IMPORTED_MODULE_0__.ready)(init);\ninit.Events = Events;\ninit.ScrollTrigger = ScrollTrigger;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n//# sourceMappingURL=scroll-triggers.js.map\n\n\n//# sourceURL=webpack://hugo-johnfalcon/./node_modules/scroll-triggers/dist/scroll-triggers.js?");

/***/ }),

/***/ "./node_modules/tinybounce/dist/tinybounce.js":
/*!****************************************************!*\
  !*** ./node_modules/tinybounce/dist/tinybounce.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar debounce = function debounce(func, wait, immediate) {\n  var timeout;\n  return function () {\n    var context = this;\n    var args = arguments; // eslint-disable-line prefer-rest-params\n\n    var later = function later() {\n      timeout = null;\n\n      if (!immediate) {\n        func.apply(context, args);\n      }\n    };\n\n    var callNow = immediate && !timeout;\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n\n    if (callNow) {\n      func.apply(context, args);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);\n//# sourceMappingURL=tinybounce.js.map\n\n\n//# sourceURL=webpack://hugo-johnfalcon/./node_modules/tinybounce/dist/tinybounce.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;