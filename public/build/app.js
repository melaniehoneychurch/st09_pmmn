(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-scanner.min.js */ "./assets/js/qr-scanner.min.js");
/* harmony import */ var _qr_scanner_worker_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-scanner-worker.min.js */ "./assets/js/qr-scanner-worker.min.js");
/* harmony import */ var _qr_scanner_worker_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_qr_scanner_worker_min_js__WEBPACK_IMPORTED_MODULE_6__);





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';



_qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__["default"].WORKER_PATH = _qr_scanner_worker_min_js__WEBPACK_IMPORTED_MODULE_6___default.a;
var video = document.getElementById('qr-video');
var camHasCamera = document.getElementById('cam-has-camera');
var camQrResult = document.getElementById('cam-qr-result');
var camQrResultTimestamp = document.getElementById('cam-qr-result-timestamp');
var fileSelector = document.getElementById('file-selector');
var fileQrResult = document.getElementById('file-qr-result');

function setResult(label, result) {
  label.textContent = result;
  camQrResultTimestamp.textContent = new Date().toString();
  label.style.color = 'teal';
  clearTimeout(label.highlightTimeout);
  label.highlightTimeout = setTimeout(function () {
    return label.style.color = 'inherit';
  }, 100);
} // ####### Web Cam Scanning #######


_qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasCamera().then(function (hasCamera) {
  return camHasCamera.textContent = hasCamera;
});
var scanner = new _qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__["default"](video, function (result) {
  return setResult(camQrResult, result);
});
scanner.start();
document.getElementById('inversion-mode-select').addEventListener('change', function (event) {
  scanner.setInversionMode(event.target.value);
}); // ####### File Scanning #######

fileSelector.addEventListener('change', function (event) {
  var file = fileSelector.files[0];

  if (!file) {
    return;
  }

  _qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__["default"].scanImage(file).then(function (result) {
    return setResult(fileQrResult, result);
  })["catch"](function (e) {
    return setResult(fileQrResult, e || 'No QR code found.');
  });
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/qr-scanner-worker.min.js":
/*!********************************************!*\
  !*** ./assets/js/qr-scanner-worker.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-clamped-array */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.from */ "./node_modules/core-js/modules/es.typed-array.from.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  function S(a, b) {
    var c = [],
        d = "";
    b = a.readBits([8, 16, 16][b]);

    for (var _d = 0; _d < b; _d++) {
      var _b = a.readBits(8);

      c.push(_b);
    }

    try {
      d += decodeURIComponent(c.map(function (a) {
        return "%".concat(("0" + a.toString(16)).substr(-2));
      }).join(""));
    } catch (e) {}

    return {
      bytes: c,
      text: d
    };
  }

  function T(a, b) {
    a = new U(a);
    b = 9 >= b ? 0 : 26 >= b ? 1 : 2;
    var c = {
      text: "",
      bytes: [],
      chunks: []
    };

    for (; 4 <= a.available();) {
      var _c$bytes3;

      var d = a.readBits(4);
      if (d === y.Terminator) return c;
      if (d === y.ECI) 0 === a.readBits(1) ? c.chunks.push({
        type: u.ECI,
        assignmentNumber: a.readBits(7)
      }) : 0 === a.readBits(1) ? c.chunks.push({
        type: u.ECI,
        assignmentNumber: a.readBits(14)
      }) : 0 === a.readBits(1) ? c.chunks.push({
        type: u.ECI,
        assignmentNumber: a.readBits(21)
      }) : c.chunks.push({
        type: u.ECI,
        assignmentNumber: -1
      });else if (d === y.Numeric) {
        var _c$bytes;

        var e = a;
        d = [];

        for (var g = "", f = e.readBits([10, 12, 14][b]); 3 <= f;) {
          var h = e.readBits(10);
          if (1E3 <= h) throw Error("Invalid numeric value above 999");
          var k = Math.floor(h / 100),
              m = Math.floor(h / 10) % 10;
          h %= 10;
          d.push(48 + k, 48 + m, 48 + h);
          g += k.toString() + m.toString() + h.toString();
          f -= 3;
        }

        if (2 === f) {
          f = e.readBits(7);
          if (100 <= f) throw Error("Invalid numeric value above 99");
          e = Math.floor(f / 10);
          f %= 10;
          d.push(48 + e, 48 + f);
          g += e.toString() + f.toString();
        } else if (1 === f) {
          e = e.readBits(4);
          if (10 <= e) throw Error("Invalid numeric value above 9");
          d.push(48 + e);
          g += e.toString();
        }

        d = {
          bytes: d,
          text: g
        };
        c.text += d.text;

        (_c$bytes = c.bytes).push.apply(_c$bytes, _toConsumableArray(d.bytes));

        c.chunks.push({
          type: u.Numeric,
          text: d.text
        });
      } else if (d === y.Alphanumeric) {
        var _c$bytes2;

        e = a;
        d = [];
        g = "";

        for (f = e.readBits([9, 11, 13][b]); 2 <= f;) {
          m = e.readBits(11), k = Math.floor(m / 45), m %= 45, d.push(B[k].charCodeAt(0), B[m].charCodeAt(0)), g += B[k] + B[m], f -= 2;
        }

        1 === f && (e = e.readBits(6), d.push(B[e].charCodeAt(0)), g += B[e]);
        d = {
          bytes: d,
          text: g
        };
        c.text += d.text;

        (_c$bytes2 = c.bytes).push.apply(_c$bytes2, _toConsumableArray(d.bytes));

        c.chunks.push({
          type: u.Alphanumeric,
          text: d.text
        });
      } else if (d === y.Byte) d = S(a, b), c.text += d.text, (_c$bytes3 = c.bytes).push.apply(_c$bytes3, _toConsumableArray(d.bytes)), c.chunks.push({
        type: u.Byte,
        bytes: d.bytes,
        text: d.text
      });else if (d === y.Kanji) {
        var _c$bytes4;

        g = a;
        d = [];
        e = g.readBits([8, 10, 12][b]);

        for (f = 0; f < e; f++) {
          k = g.readBits(13), k = Math.floor(k / 192) << 8 | k % 192, k = 7936 > k ? k + 33088 : k + 49472, d.push(k >> 8, k & 255);
        }

        g = new TextDecoder("shift-jis").decode(Uint8Array.from(d));
        d = {
          bytes: d,
          text: g
        };
        c.text += d.text;

        (_c$bytes4 = c.bytes).push.apply(_c$bytes4, _toConsumableArray(d.bytes));

        c.chunks.push({
          type: u.Kanji,
          bytes: d.bytes,
          text: d.text
        });
      }
    }

    if (0 === a.available() || 0 === a.readBits(a.available())) return c;
  }

  function J(a, b) {
    return a ^ b;
  }

  function V(a, b, c, d) {
    var _ref;

    b.degree() < c.degree() && (_ref = [c, b], b = _ref[0], c = _ref[1], _ref);
    var e = a.zero;

    for (var g = a.one; c.degree() >= d / 2;) {
      var f = b;
      var _d2 = e;
      b = c;
      e = g;
      if (b.isZero()) return null;
      c = f;
      g = a.zero;
      f = b.getCoefficient(b.degree());

      for (f = a.inverse(f); c.degree() >= b.degree() && !c.isZero();) {
        var _d3 = c.degree() - b.degree(),
            _e = a.multiply(c.getCoefficient(c.degree()), f);

        g = g.addOrSubtract(a.buildMonomial(_d3, _e));
        c = c.addOrSubtract(b.multiplyByMonomial(_d3, _e));
      }

      g = g.multiplyPoly(e).addOrSubtract(_d2);
      if (c.degree() >= b.degree()) return null;
    }

    d = g.getCoefficient(0);
    if (0 === d) return null;
    a = a.inverse(d);
    return [g.multiply(a), c.multiply(a)];
  }

  function W(a, b) {
    var c = new Uint8ClampedArray(a.length);
    c.set(a);
    a = new X(285, 256, 0);
    var d = new w(a, c),
        e = new Uint8ClampedArray(b),
        g = !1;

    for (var f = 0; f < b; f++) {
      var h = d.evaluateAt(a.exp(f + a.generatorBase));
      e[e.length - 1 - f] = h;
      0 !== h && (g = !0);
    }

    if (!g) return c;
    d = new w(a, e);
    d = V(a, a.buildMonomial(b, 1), d, b);
    if (null === d) return null;
    b = d[0];
    f = b.degree();
    if (1 === f) b = [b.getCoefficient(1)];else {
      e = Array(f);
      g = 0;

      for (h = 1; h < a.size && g < f; h++) {
        0 === b.evaluateAt(h) && (e[g] = a.inverse(h), g++);
      }

      b = g !== f ? null : e;
    }
    if (null == b) return null;
    d = d[1];
    e = b.length;
    g = Array(e);

    for (f = 0; f < e; f++) {
      h = a.inverse(b[f]);
      var _c = 1;

      for (var _d4 = 0; _d4 < e; _d4++) {
        f !== _d4 && (_c = a.multiply(_c, J(1, a.multiply(b[_d4], h))));
      }

      g[f] = a.multiply(d.evaluateAt(h), a.inverse(_c));
      0 !== a.generatorBase && (g[f] = a.multiply(g[f], h));
    }

    d = g;

    for (e = 0; e < b.length; e++) {
      g = c.length - 1 - a.log(b[e]);
      if (0 > g) return null;
      c[g] ^= d[e];
    }

    return c;
  }

  function E(a, b) {
    a ^= b;

    for (b = 0; a;) {
      b++, a &= a - 1;
    }

    return b;
  }

  function C(a, b) {
    return b << 1 | a;
  }

  function Y(a, b, c) {
    c = Z[c.dataMask];
    var d = a.height;
    var e = 17 + 4 * b.versionNumber,
        g = A.createEmpty(e, e);
    g.setRegion(0, 0, 9, 9, !0);
    g.setRegion(e - 8, 0, 8, 9, !0);
    g.setRegion(0, e - 8, 9, 8, !0);

    var _iterator = _createForOfIteratorHelper(b.alignmentPatternCenters),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var f = _step.value;

        var _iterator2 = _createForOfIteratorHelper(b.alignmentPatternCenters),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var h = _step2.value;
            6 === f && 6 === h || 6 === f && h === e - 7 || f === e - 7 && 6 === h || g.setRegion(f - 2, h - 2, 5, 5, !0);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    g.setRegion(6, 9, 1, e - 17, !0);
    g.setRegion(9, 6, e - 17, 1, !0);
    6 < b.versionNumber && (g.setRegion(e - 11, 0, 3, 6, !0), g.setRegion(0, e - 11, 6, 3, !0));
    b = g;
    f = [];
    e = h = 0;
    g = !0;

    for (var k = d - 1; 0 < k; k -= 2) {
      6 === k && k--;

      for (var m = 0; m < d; m++) {
        var p = g ? d - 1 - m : m;

        for (var _d5 = 0; 2 > _d5; _d5++) {
          var _g = k - _d5;

          if (!b.get(_g, p)) {
            e++;

            var _b2 = a.get(_g, p);

            c({
              y: p,
              x: _g
            }) && (_b2 = !_b2);
            h = h << 1 | _b2;
            8 === e && (f.push(h), h = e = 0);
          }
        }
      }

      g = !g;
    }

    return f;
  }

  function aa(a) {
    var b = a.height,
        c = Math.floor((b - 17) / 4);
    if (6 >= c) return K[c - 1];
    c = 0;

    for (var d = 5; 0 <= d; d--) {
      for (var e = b - 9; e >= b - 11; e--) {
        c = C(a.get(e, d), c);
      }
    }

    d = 0;

    for (e = 5; 0 <= e; e--) {
      for (var _c2 = b - 9; _c2 >= b - 11; _c2--) {
        d = C(a.get(e, _c2), d);
      }
    }

    a = Infinity;
    var g;

    var _iterator3 = _createForOfIteratorHelper(K),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _e2 = _step3.value;
        if (_e2.infoBits === c || _e2.infoBits === d) return _e2;
        b = E(c, _e2.infoBits);
        b < a && (g = _e2, a = b);
        b = E(d, _e2.infoBits);
        b < a && (g = _e2, a = b);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (3 >= a) return g;
  }

  function ba(a) {
    var b = 0;

    for (var c = 0; 8 >= c; c++) {
      6 !== c && (b = C(a.get(c, 8), b));
    }

    for (c = 7; 0 <= c; c--) {
      6 !== c && (b = C(a.get(8, c), b));
    }

    var d = a.height;
    c = 0;

    for (var e = d - 1; e >= d - 7; e--) {
      c = C(a.get(8, e), c);
    }

    for (e = d - 8; e < d; e++) {
      c = C(a.get(e, 8), c);
    }

    a = Infinity;
    d = null;

    var _iterator4 = _createForOfIteratorHelper(ca),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _step4.value,
            g = _step4$value.bits,
            f = _step4$value.formatInfo;
        if (g === b || g === c) return f;
        e = E(b, g);
        e < a && (d = f, a = e);
        b !== c && (e = E(c, g), e < a && (d = f, a = e));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    return 3 >= a ? d : null;
  }

  function da(a, b, c) {
    var d = b.errorCorrectionLevels[c],
        e = [],
        g = 0;
    d.ecBlocks.forEach(function (a) {
      for (var _b3 = 0; _b3 < a.numBlocks; _b3++) {
        e.push({
          numDataCodewords: a.dataCodewordsPerBlock,
          codewords: []
        }), g += a.dataCodewordsPerBlock + d.ecCodewordsPerBlock;
      }
    });
    if (a.length < g) return null;
    a = a.slice(0, g);
    b = d.ecBlocks[0].dataCodewordsPerBlock;

    for (c = 0; c < b; c++) {
      var _iterator5 = _createForOfIteratorHelper(e),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var f = _step5.value;
          f.codewords.push(a.shift());
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    if (1 < d.ecBlocks.length) for (f = d.ecBlocks[0].numBlocks, b = d.ecBlocks[1].numBlocks, c = 0; c < b; c++) {
      e[f + c].codewords.push(a.shift());
    }

    for (; 0 < a.length;) {
      var _iterator6 = _createForOfIteratorHelper(e),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _b4 = _step6.value;

          _b4.codewords.push(a.shift());
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    return e;
  }

  function L(a) {
    var b = aa(a);
    if (!b) return null;
    var c = ba(a);
    if (!c) return null;
    a = Y(a, b, c);
    var d = da(a, b, c.errorCorrectionLevel);
    if (!d) return null;
    c = d.reduce(function (a, b) {
      return a + b.numDataCodewords;
    }, 0);
    c = new Uint8ClampedArray(c);
    a = 0;

    var _iterator7 = _createForOfIteratorHelper(d),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _b5 = _step7.value;
        d = W(_b5.codewords, _b5.codewords.length - _b5.numDataCodewords);
        if (!d) return null;

        for (var e = 0; e < _b5.numDataCodewords; e++) {
          c[a++] = d[e];
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    try {
      return T(c, b.versionNumber);
    } catch (e) {
      return null;
    }
  }

  function M(a, b, c, d) {
    var e = a.x - b.x + c.x - d.x;
    var g = a.y - b.y + c.y - d.y;
    if (0 === e && 0 === g) return {
      a11: b.x - a.x,
      a12: b.y - a.y,
      a13: 0,
      a21: c.x - b.x,
      a22: c.y - b.y,
      a23: 0,
      a31: a.x,
      a32: a.y,
      a33: 1
    };
    {
      var h = b.x - c.x;
      var f = d.x - c.x;
      var k = b.y - c.y,
          m = d.y - c.y;
      c = h * m - f * k;
      f = (e * m - f * g) / c;
      e = (h * g - e * k) / c;
      return {
        a11: b.x - a.x + f * b.x,
        a12: b.y - a.y + f * b.y,
        a13: f,
        a21: d.x - a.x + e * d.x,
        a22: d.y - a.y + e * d.y,
        a23: e,
        a31: a.x,
        a32: a.y,
        a33: 1
      };
    }
  }

  function ea(a, b, c, d) {
    a = M(a, b, c, d);
    return {
      a11: a.a22 * a.a33 - a.a23 * a.a32,
      a12: a.a13 * a.a32 - a.a12 * a.a33,
      a13: a.a12 * a.a23 - a.a13 * a.a22,
      a21: a.a23 * a.a31 - a.a21 * a.a33,
      a22: a.a11 * a.a33 - a.a13 * a.a31,
      a23: a.a13 * a.a21 - a.a11 * a.a23,
      a31: a.a21 * a.a32 - a.a22 * a.a31,
      a32: a.a12 * a.a31 - a.a11 * a.a32,
      a33: a.a11 * a.a22 - a.a12 * a.a21
    };
  }

  function fa(a, b) {
    var c = ea({
      x: 3.5,
      y: 3.5
    }, {
      x: b.dimension - 3.5,
      y: 3.5
    }, {
      x: b.dimension - 6.5,
      y: b.dimension - 6.5
    }, {
      x: 3.5,
      y: b.dimension - 3.5
    }),
        d = M(b.topLeft, b.topRight, b.alignmentPattern, b.bottomLeft),
        e = d.a11 * c.a11 + d.a21 * c.a12 + d.a31 * c.a13,
        g = d.a12 * c.a11 + d.a22 * c.a12 + d.a32 * c.a13,
        f = d.a13 * c.a11 + d.a23 * c.a12 + d.a33 * c.a13,
        h = d.a11 * c.a21 + d.a21 * c.a22 + d.a31 * c.a23,
        k = d.a12 * c.a21 + d.a22 * c.a22 + d.a32 * c.a23,
        m = d.a13 * c.a21 + d.a23 * c.a22 + d.a33 * c.a23,
        p = d.a11 * c.a31 + d.a21 * c.a32 + d.a31 * c.a33,
        n = d.a12 * c.a31 + d.a22 * c.a32 + d.a32 * c.a33,
        l = d.a13 * c.a31 + d.a23 * c.a32 + d.a33 * c.a33;
    c = A.createEmpty(b.dimension, b.dimension);

    d = function d(a, b) {
      var c = f * a + m * b + l;
      return {
        x: (e * a + h * b + p) / c,
        y: (g * a + k * b + n) / c
      };
    };

    for (var _e3 = 0; _e3 < b.dimension; _e3++) {
      for (var _f = 0; _f < b.dimension; _f++) {
        var _b6 = d(_f + .5, _e3 + .5);

        c.set(_f, _e3, a.get(Math.floor(_b6.x), Math.floor(_b6.y)));
      }
    }

    return {
      matrix: c,
      mappingFunction: d
    };
  }

  function t(a) {
    return a.reduce(function (a, c) {
      return a + c;
    });
  }

  function ha(a, b, c) {
    var _ref2, _ref3, _ref4, _ref5;

    var d = x(a, b),
        e = x(b, c),
        g = x(a, c),
        f,
        h,
        k;
    e >= d && e >= g ? (_ref2 = [b, a, c], f = _ref2[0], h = _ref2[1], k = _ref2[2], _ref2) : g >= e && g >= d ? (_ref3 = [a, b, c], f = _ref3[0], h = _ref3[1], k = _ref3[2], _ref3) : (_ref4 = [a, c, b], f = _ref4[0], h = _ref4[1], k = _ref4[2], _ref4);
    0 > (k.x - h.x) * (f.y - h.y) - (k.y - h.y) * (f.x - h.x) && (_ref5 = [k, f], f = _ref5[0], k = _ref5[1], _ref5);
    return {
      bottomLeft: f,
      topLeft: h,
      topRight: k
    };
  }

  function ia(a, b, c, d) {
    d = (t(z(a, c, d, 5)) / 7 + t(z(a, b, d, 5)) / 7 + t(z(c, a, d, 5)) / 7 + t(z(b, a, d, 5)) / 7) / 4;
    if (1 > d) throw Error("Invalid module size");
    b = Math.round(x(a, b) / d);
    a = Math.round(x(a, c) / d);
    a = Math.floor((b + a) / 2) + 7;

    switch (a % 4) {
      case 0:
        a++;
        break;

      case 2:
        a--;
    }

    return {
      dimension: a,
      moduleSize: d
    };
  }

  function N(a, b, c, d) {
    var e = [{
      x: Math.floor(a.x),
      y: Math.floor(a.y)
    }];
    var g = Math.abs(b.y - a.y) > Math.abs(b.x - a.x);

    if (g) {
      var f = Math.floor(a.y);
      var h = Math.floor(a.x);
      a = Math.floor(b.y);
      b = Math.floor(b.x);
    } else f = Math.floor(a.x), h = Math.floor(a.y), a = Math.floor(b.x), b = Math.floor(b.y);

    var k = Math.abs(a - f),
        m = Math.abs(b - h),
        p = Math.floor(-k / 2),
        n = f < a ? 1 : -1,
        l = h < b ? 1 : -1,
        q = !0;

    for (var r = f, F = h; r !== a + n; r += n) {
      f = g ? F : r;
      h = g ? r : F;
      if (c.get(f, h) !== q && (q = !q, e.push({
        x: f,
        y: h
      }), e.length === d + 1)) break;
      p += m;

      if (0 < p) {
        if (F === b) break;
        F += l;
        p -= k;
      }
    }

    c = [];

    for (g = 0; g < d; g++) {
      e[g] && e[g + 1] ? c.push(x(e[g], e[g + 1])) : c.push(0);
    }

    return c;
  }

  function z(a, b, c, d) {
    var _a$concat;

    var e = b.y - a.y,
        g = b.x - a.x;
    b = N(a, b, c, Math.ceil(d / 2));
    a = N(a, {
      x: a.x - g,
      y: a.y - e
    }, c, Math.ceil(d / 2));
    c = b.shift() + a.shift() - 1;
    return (_a$concat = a.concat(c)).concat.apply(_a$concat, _toConsumableArray(b));
  }

  function G(a, b) {
    var c = t(a) / t(b),
        d = 0;
    b.forEach(function (b, g) {
      d += Math.pow(a[g] - b * c, 2);
    });
    return {
      averageSize: c,
      error: d
    };
  }

  function O(a, b, c) {
    try {
      var d = z(a, {
        x: -1,
        y: a.y
      }, c, b.length),
          e = z(a, {
        x: a.x,
        y: -1
      }, c, b.length),
          g = z(a, {
        x: Math.max(0, a.x - a.y) - 1,
        y: Math.max(0, a.y - a.x) - 1
      }, c, b.length),
          f = z(a, {
        x: Math.min(c.width, a.x + a.y) + 1,
        y: Math.min(c.height, a.y + a.x) + 1
      }, c, b.length),
          h = G(d, b),
          k = G(e, b),
          m = G(g, b),
          p = G(f, b),
          n = (h.averageSize + k.averageSize + m.averageSize + p.averageSize) / 4;
      return Math.sqrt(h.error * h.error + k.error * k.error + m.error * m.error + p.error * p.error) + (Math.pow(h.averageSize - n, 2) + Math.pow(k.averageSize - n, 2) + Math.pow(m.averageSize - n, 2) + Math.pow(p.averageSize - n, 2)) / n;
    } catch (d) {
      return Infinity;
    }
  }

  function ja(a) {
    var _b7, _d6;

    var b = [],
        c = [],
        d = [],
        e = [];

    var _loop = function _loop(r) {
      var _b9, _d7;

      var k = 0,
          m = !1,
          l = [0, 0, 0, 0, 0];

      for (var _b8 = -1; _b8 <= a.width; _b8++) {
        g = a.get(_b8, r);
        if (g === m) k++;else {
          l = [l[1], l[2], l[3], l[4], k];
          k = 1;
          m = g;
          f = t(l) / 7;
          f = Math.abs(l[0] - f) < f && Math.abs(l[1] - f) < f && Math.abs(l[2] - 3 * f) < 3 * f && Math.abs(l[3] - f) < f && Math.abs(l[4] - f) < f && !g;
          h = t(l.slice(-3)) / 3;
          g = Math.abs(l[2] - h) < h && Math.abs(l[3] - h) < h && Math.abs(l[4] - h) < h && g;

          if (f) {
            (function () {
              var a = _b8 - l[3] - l[4],
                  d = a - l[2];
              f = {
                startX: d,
                endX: a,
                y: r
              };
              h = c.filter(function (b) {
                return d >= b.bottom.startX && d <= b.bottom.endX || a >= b.bottom.startX && d <= b.bottom.endX || d <= b.bottom.startX && a >= b.bottom.endX && 1.5 > l[2] / (b.bottom.endX - b.bottom.startX) && .5 < l[2] / (b.bottom.endX - b.bottom.startX);
              });
              0 < h.length ? h[0].bottom = f : c.push({
                top: f,
                bottom: f
              });
            })();
          }

          if (g) {
            (function () {
              var a = _b8 - l[4],
                  c = a - l[3];
              g = {
                startX: c,
                y: r,
                endX: a
              };
              f = e.filter(function (b) {
                return c >= b.bottom.startX && c <= b.bottom.endX || a >= b.bottom.startX && c <= b.bottom.endX || c <= b.bottom.startX && a >= b.bottom.endX && 1.5 > l[2] / (b.bottom.endX - b.bottom.startX) && .5 < l[2] / (b.bottom.endX - b.bottom.startX);
              });
              0 < f.length ? f[0].bottom = g : e.push({
                top: g,
                bottom: g
              });
            })();
          }
        }
      }

      (_b9 = b).push.apply(_b9, _toConsumableArray(c.filter(function (a) {
        return a.bottom.y !== r && 2 <= a.bottom.y - a.top.y;
      })));

      c = c.filter(function (a) {
        return a.bottom.y === r;
      });

      (_d7 = d).push.apply(_d7, _toConsumableArray(e.filter(function (a) {
        return a.bottom.y !== r;
      })));

      e = e.filter(function (a) {
        return a.bottom.y === r;
      });
    };

    for (var r = 0; r <= a.height; r++) {
      var g;
      var f;
      var h;

      _loop(r);
    }

    (_b7 = b).push.apply(_b7, _toConsumableArray(c.filter(function (a) {
      return 2 <= a.bottom.y - a.top.y;
    })));

    (_d6 = d).push.apply(_d6, _toConsumableArray(e));

    b = b.filter(function (a) {
      return 2 <= a.bottom.y - a.top.y;
    }).map(function (b) {
      var c = (b.top.startX + b.top.endX + b.bottom.startX + b.bottom.endX) / 4,
          d = (b.top.y + b.bottom.y + 1) / 2;
      if (a.get(Math.round(c), Math.round(d))) return b = [b.top.endX - b.top.startX, b.bottom.endX - b.bottom.startX, b.bottom.y - b.top.y + 1], b = t(b) / b.length, {
        score: O({
          x: Math.round(c),
          y: Math.round(d)
        }, [1, 1, 3, 1, 1], a),
        x: c,
        y: d,
        size: b
      };
    }).filter(function (a) {
      return !!a;
    }).sort(function (a, b) {
      return a.score - b.score;
    }).map(function (a, b, c) {
      if (4 < b) return null;
      c = c.filter(function (a, c) {
        return b !== c;
      }).map(function (b) {
        return {
          x: b.x,
          y: b.y,
          score: b.score + Math.pow(b.size - a.size, 2) / a.size,
          size: b.size
        };
      }).sort(function (a, b) {
        return a.score - b.score;
      });
      if (2 > c.length) return null;
      var d = a.score + c[0].score + c[1].score;
      return {
        points: [a].concat(c.slice(0, 2)),
        score: d
      };
    }).filter(function (a) {
      return !!a;
    }).sort(function (a, b) {
      return a.score - b.score;
    });
    if (0 === b.length) return null;

    var _ha = ha(b[0].points[0], b[0].points[1], b[0].points[2]),
        k = _ha.topRight,
        m = _ha.topLeft,
        p = _ha.bottomLeft;

    var n;

    try {
      var _ia = ia(m, k, p, a);

      n = _ia.dimension;
      l = _ia.moduleSize;
    } catch (r) {
      return null;
    }

    b = k.x - m.x + p.x;
    c = k.y - m.y + p.y;
    var l = (x(m, p) + x(m, k)) / 2 / l;
    e = 1 - 3 / l;
    var q = {
      x: m.x + e * (b - m.x),
      y: m.y + e * (c - m.y)
    };
    d = d.map(function (b) {
      var c = (b.top.startX + b.top.endX + b.bottom.startX + b.bottom.endX) / 4,
          d = (b.top.y + b.bottom.y + 1) / 2;
      if (a.get(Math.floor(c), Math.floor(d))) return t([b.top.endX - b.top.startX, b.bottom.endX - b.bottom.startX, b.bottom.y - b.top.y + 1]), b = O({
        x: Math.floor(c),
        y: Math.floor(d)
      }, [1, 1, 1], a) + x({
        x: c,
        y: d
      }, q), {
        x: c,
        y: d,
        score: b
      };
    }).filter(function (a) {
      return !!a;
    }).sort(function (a, b) {
      return a.score - b.score;
    });
    d = 15 <= l && d.length ? d[0] : q;
    return {
      alignmentPattern: {
        x: d.x,
        y: d.y
      },
      bottomLeft: {
        x: p.x,
        y: p.y
      },
      dimension: n,
      topLeft: {
        x: m.x,
        y: m.y
      },
      topRight: {
        x: k.x,
        y: k.y
      }
    };
  }

  function P(a) {
    var b = ja(a);
    if (!b) return null;
    a = fa(a, b);
    var c = a.matrix;
    if (null == c) c = null;else {
      var d = L(c);
      if (d) c = d;else {
        for (d = 0; d < c.width; d++) {
          for (var _a = d + 1; _a < c.height; _a++) {
            c.get(d, _a) !== c.get(_a, d) && (c.set(d, _a, !c.get(d, _a)), c.set(_a, d, !c.get(_a, d)));
          }
        }

        c = L(c);
      }
    }
    return c ? {
      binaryData: c.bytes,
      data: c.text,
      chunks: c.chunks,
      location: {
        topRightCorner: a.mappingFunction(b.dimension, 0),
        topLeftCorner: a.mappingFunction(0, 0),
        bottomRightCorner: a.mappingFunction(b.dimension, b.dimension),
        bottomLeftCorner: a.mappingFunction(0, b.dimension),
        topRightFinderPattern: b.topRight,
        topLeftFinderPattern: b.topLeft,
        bottomLeftFinderPattern: b.bottomLeft,
        bottomRightAlignmentPattern: b.alignmentPattern
      }
    } : null;
  }

  function Q(a, b) {
    Object.keys(b).forEach(function (c) {
      a[c] = b[c];
    });
  }

  function I(a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var e = Object.create(null);
    Q(e, ka);
    Q(e, d);
    d = "onlyInvert" === e.inversionAttempts || "invertFirst" === e.inversionAttempts;
    var g = "attemptBoth" === e.inversionAttempts || "invertFirst" === e.inversionAttempts;
    var f = e.greyScaleWeights,
        h = e.canOverwriteImage,
        k = b * c;
    if (a.length !== 4 * k) throw Error("Malformed data passed to binarizer.");
    var m = 0;

    if (h) {
      var p = new Uint8ClampedArray(a.buffer, m, k);
      m += k;
    }

    p = new R(b, c, p);
    if (f.useIntegerApproximation) for (var n = 0; n < c; n++) {
      for (var l = 0; l < b; l++) {
        var q = 4 * (n * b + l);
        p.set(l, n, f.red * a[q] + f.green * a[q + 1] + f.blue * a[q + 2] + 128 >> 8);
      }
    } else for (n = 0; n < c; n++) {
      for (l = 0; l < b; l++) {
        q = 4 * (n * b + l), p.set(l, n, f.red * a[q] + f.green * a[q + 1] + f.blue * a[q + 2]);
      }
    }
    f = Math.ceil(b / 8);
    n = Math.ceil(c / 8);
    l = f * n;

    if (h) {
      var r = new Uint8ClampedArray(a.buffer, m, l);
      m += l;
    }

    r = new R(f, n, r);

    for (l = 0; l < n; l++) {
      for (q = 0; q < f; q++) {
        var u = 0,
            v = Infinity,
            t = 0;

        for (var _a2 = 0; 8 > _a2; _a2++) {
          for (var _b10 = 0; 8 > _b10; _b10++) {
            var _c3 = p.get(8 * q + _b10, 8 * l + _a2);

            u += _c3;
            v = Math.min(v, _c3);
            t = Math.max(t, _c3);
          }
        }

        u /= Math.pow(8, 2);
        24 >= t - v && (u = v / 2, 0 < l && 0 < q && (t = (r.get(q, l - 1) + 2 * r.get(q - 1, l) + r.get(q - 1, l - 1)) / 4, v < t && (u = t)));
        r.set(q, l, u);
      }
    }

    h ? (l = new Uint8ClampedArray(a.buffer, m, k), m += k, l = new A(l, b)) : l = A.createEmpty(b, c);
    q = null;
    g && (h ? (a = new Uint8ClampedArray(a.buffer, m, k), q = new A(a, b)) : q = A.createEmpty(b, c));

    for (b = 0; b < n; b++) {
      for (a = 0; a < f; a++) {
        c = f - 3;
        c = 2 > a ? 2 : a > c ? c : a;
        h = n - 3;
        h = 2 > b ? 2 : b > h ? h : b;
        k = 0;

        for (m = -2; 2 >= m; m++) {
          for (v = -2; 2 >= v; v++) {
            k += r.get(c + m, h + v);
          }
        }

        c = k / 25;

        for (h = 0; 8 > h; h++) {
          for (k = 0; 8 > k; k++) {
            m = 8 * a + h, v = 8 * b + k, t = p.get(m, v), l.set(m, v, t <= c), g && q.set(m, v, !(t <= c));
          }
        }
      }
    }

    g = g ? {
      binarized: l,
      inverted: q
    } : {
      binarized: l
    };
    var _g2 = g,
        w = _g2.binarized,
        x = _g2.inverted;
    (g = P(d ? x : w)) || "attemptBoth" !== e.inversionAttempts && "invertFirst" !== e.inversionAttempts || (g = P(d ? w : x));
    return g;
  }

  var A = /*#__PURE__*/function () {
    _createClass(A, null, [{
      key: "createEmpty",
      value: function createEmpty(a, b) {
        return new A(new Uint8ClampedArray(a * b), a);
      }
    }]);

    function A(a, b) {
      _classCallCheck(this, A);

      this.width = b;
      this.height = a.length / b;
      this.data = a;
    }

    _createClass(A, [{
      key: "get",
      value: function get(a, b) {
        return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : !!this.data[b * this.width + a];
      }
    }, {
      key: "set",
      value: function set(a, b, c) {
        this.data[b * this.width + a] = c ? 1 : 0;
      }
    }, {
      key: "setRegion",
      value: function setRegion(a, b, c, d, e) {
        for (var g = b; g < b + d; g++) {
          for (var _b11 = a; _b11 < a + c; _b11++) {
            this.set(_b11, g, !!e);
          }
        }
      }
    }]);

    return A;
  }();

  var R = /*#__PURE__*/function () {
    function R(a, b, c) {
      _classCallCheck(this, R);

      this.width = a;
      a *= b;
      if (c && c.length !== a) throw Error("Wrong buffer size");
      this.data = c || new Uint8ClampedArray(a);
    }

    _createClass(R, [{
      key: "get",
      value: function get(a, b) {
        return this.data[b * this.width + a];
      }
    }, {
      key: "set",
      value: function set(a, b, c) {
        this.data[b * this.width + a] = c;
      }
    }]);

    return R;
  }();

  var U = /*#__PURE__*/function () {
    function U(a) {
      _classCallCheck(this, U);

      this.bitOffset = this.byteOffset = 0;
      this.bytes = a;
    }

    _createClass(U, [{
      key: "readBits",
      value: function readBits(a) {
        if (1 > a || 32 < a || a > this.available()) throw Error("Cannot read " + a.toString() + " bits");
        var b = 0;

        if (0 < this.bitOffset) {
          b = 8 - this.bitOffset;
          var c = a < b ? a : b;
          b -= c;
          b = (this.bytes[this.byteOffset] & 255 >> 8 - c << b) >> b;
          a -= c;
          this.bitOffset += c;
          8 === this.bitOffset && (this.bitOffset = 0, this.byteOffset++);
        }

        if (0 < a) {
          for (; 8 <= a;) {
            b = b << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, a -= 8;
          }

          0 < a && (c = 8 - a, b = b << a | (this.bytes[this.byteOffset] & 255 >> c << c) >> c, this.bitOffset += a);
        }

        return b;
      }
    }, {
      key: "available",
      value: function available() {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
      }
    }]);

    return U;
  }();

  var u;

  (function (a) {
    a.Numeric = "numeric";
    a.Alphanumeric = "alphanumeric";
    a.Byte = "byte";
    a.Kanji = "kanji";
    a.ECI = "eci";
  })(u || (u = {}));

  var y;

  (function (a) {
    a[a.Terminator = 0] = "Terminator";
    a[a.Numeric = 1] = "Numeric";
    a[a.Alphanumeric = 2] = "Alphanumeric";
    a[a.Byte = 4] = "Byte";
    a[a.Kanji = 8] = "Kanji";
    a[a.ECI = 7] = "ECI";
  })(y || (y = {}));

  var B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");

  var w = /*#__PURE__*/function () {
    function w(a, b) {
      _classCallCheck(this, w);

      if (0 === b.length) throw Error("No coefficients.");
      this.field = a;
      var c = b.length;

      if (1 < c && 0 === b[0]) {
        var d = 1;

        for (; d < c && 0 === b[d];) {
          d++;
        }

        if (d === c) this.coefficients = a.zero.coefficients;else for (this.coefficients = new Uint8ClampedArray(c - d), a = 0; a < this.coefficients.length; a++) {
          this.coefficients[a] = b[d + a];
        }
      } else this.coefficients = b;
    }

    _createClass(w, [{
      key: "degree",
      value: function degree() {
        return this.coefficients.length - 1;
      }
    }, {
      key: "isZero",
      value: function isZero() {
        return 0 === this.coefficients[0];
      }
    }, {
      key: "getCoefficient",
      value: function getCoefficient(a) {
        return this.coefficients[this.coefficients.length - 1 - a];
      }
    }, {
      key: "addOrSubtract",
      value: function addOrSubtract(a) {
        var _ref6;

        if (this.isZero()) return a;
        if (a.isZero()) return this;
        var b = this.coefficients;
        a = a.coefficients;
        b.length > a.length && (_ref6 = [a, b], b = _ref6[0], a = _ref6[1], _ref6);
        var c = new Uint8ClampedArray(a.length),
            d = a.length - b.length;

        for (var e = 0; e < d; e++) {
          c[e] = a[e];
        }

        for (e = d; e < a.length; e++) {
          c[e] = b[e - d] ^ a[e];
        }

        return new w(this.field, c);
      }
    }, {
      key: "multiply",
      value: function multiply(a) {
        if (0 === a) return this.field.zero;
        if (1 === a) return this;
        var b = this.coefficients.length,
            c = new Uint8ClampedArray(b);

        for (var d = 0; d < b; d++) {
          c[d] = this.field.multiply(this.coefficients[d], a);
        }

        return new w(this.field, c);
      }
    }, {
      key: "multiplyPoly",
      value: function multiplyPoly(a) {
        if (this.isZero() || a.isZero()) return this.field.zero;
        var b = this.coefficients,
            c = b.length;
        a = a.coefficients;
        var d = a.length,
            e = new Uint8ClampedArray(c + d - 1);

        for (var h = 0; h < c; h++) {
          var _c4 = b[h];

          for (var _b12 = 0; _b12 < d; _b12++) {
            var g = h + _b12,
                f = this.field.multiply(_c4, a[_b12]);
            e[g] = e[h + _b12] ^ f;
          }
        }

        return new w(this.field, e);
      }
    }, {
      key: "multiplyByMonomial",
      value: function multiplyByMonomial(a, b) {
        if (0 > a) throw Error("Invalid degree less than 0");
        if (0 === b) return this.field.zero;
        var c = this.coefficients.length;
        a = new Uint8ClampedArray(c + a);

        for (var d = 0; d < c; d++) {
          a[d] = this.field.multiply(this.coefficients[d], b);
        }

        return new w(this.field, a);
      }
    }, {
      key: "evaluateAt",
      value: function evaluateAt(a) {
        var b = 0;
        if (0 === a) return this.getCoefficient(0);
        var c = this.coefficients.length;
        if (1 === a) return this.coefficients.forEach(function (a) {
          b ^= a;
        }), b;
        b = this.coefficients[0];

        for (var d = 1; d < c; d++) {
          b = J(this.field.multiply(a, b), this.coefficients[d]);
        }

        return b;
      }
    }]);

    return w;
  }();

  var X = /*#__PURE__*/function () {
    function X(a, b, c) {
      _classCallCheck(this, X);

      this.primitive = a;
      this.size = b;
      this.generatorBase = c;
      this.expTable = Array(this.size);
      this.logTable = Array(this.size);
      a = 1;

      for (b = 0; b < this.size; b++) {
        this.expTable[b] = a, a *= 2, a >= this.size && (a = (a ^ this.primitive) & this.size - 1);
      }

      for (a = 0; a < this.size - 1; a++) {
        this.logTable[this.expTable[a]] = a;
      }

      this.zero = new w(this, Uint8ClampedArray.from([0]));
      this.one = new w(this, Uint8ClampedArray.from([1]));
    }

    _createClass(X, [{
      key: "multiply",
      value: function multiply(a, b) {
        return 0 === a || 0 === b ? 0 : this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
      }
    }, {
      key: "inverse",
      value: function inverse(a) {
        if (0 === a) throw Error("Can't invert 0");
        return this.expTable[this.size - this.logTable[a] - 1];
      }
    }, {
      key: "buildMonomial",
      value: function buildMonomial(a, b) {
        if (0 > a) throw Error("Invalid monomial degree less than 0");
        if (0 === b) return this.zero;
        a = new Uint8ClampedArray(a + 1);
        a[0] = b;
        return new w(this, a);
      }
    }, {
      key: "log",
      value: function log(a) {
        if (0 === a) throw Error("Can't take log(0)");
        return this.logTable[a];
      }
    }, {
      key: "exp",
      value: function exp(a) {
        return this.expTable[a];
      }
    }]);

    return X;
  }();

  var K = [{
    infoBits: null,
    versionNumber: 1,
    alignmentPatternCenters: [],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 7,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 19
      }]
    }, {
      ecCodewordsPerBlock: 10,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 16
      }]
    }, {
      ecCodewordsPerBlock: 13,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 13
      }]
    }, {
      ecCodewordsPerBlock: 17,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 9
      }]
    }]
  }, {
    infoBits: null,
    versionNumber: 2,
    alignmentPatternCenters: [6, 18],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 10,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 34
      }]
    }, {
      ecCodewordsPerBlock: 16,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 28
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 22
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: null,
    versionNumber: 3,
    alignmentPatternCenters: [6, 22],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 15,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 55
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 44
      }]
    }, {
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 17
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: null,
    versionNumber: 4,
    alignmentPatternCenters: [6, 26],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 20,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 80
      }]
    }, {
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 32
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 24
      }]
    }, {
      ecCodewordsPerBlock: 16,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 9
      }]
    }]
  }, {
    infoBits: null,
    versionNumber: 5,
    alignmentPatternCenters: [6, 30],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 108
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 43
      }]
    }, {
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 16
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 11
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 12
      }]
    }]
  }, {
    infoBits: null,
    versionNumber: 6,
    alignmentPatternCenters: [6, 34],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 68
      }]
    }, {
      ecCodewordsPerBlock: 16,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 27
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 19
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 15
      }]
    }]
  }, {
    infoBits: 31892,
    versionNumber: 7,
    alignmentPatternCenters: [6, 22, 38],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 20,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 78
      }]
    }, {
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 31
      }]
    }, {
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 14
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 15
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 13
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 14
      }]
    }]
  }, {
    infoBits: 34236,
    versionNumber: 8,
    alignmentPatternCenters: [6, 24, 42],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 97
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 38
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 39
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 18
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 19
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 14
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 15
      }]
    }]
  }, {
    infoBits: 39577,
    versionNumber: 9,
    alignmentPatternCenters: [6, 26, 46],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 36
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 37
      }]
    }, {
      ecCodewordsPerBlock: 20,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 17
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 12
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: 42195,
    versionNumber: 10,
    alignmentPatternCenters: [6, 28, 50],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 18,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 68
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 69
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 43
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 44
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 19
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 20
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 48118,
    versionNumber: 11,
    alignmentPatternCenters: [6, 30, 54],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 20,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 81
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 50
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 51
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 22
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 23
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 12
      }, {
        numBlocks: 8,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: 51042,
    versionNumber: 12,
    alignmentPatternCenters: [6, 32, 58],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 92
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 93
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 36
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 37
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 20
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 21
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 7,
        dataCodewordsPerBlock: 14
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 15
      }]
    }]
  }, {
    infoBits: 55367,
    versionNumber: 13,
    alignmentPatternCenters: [6, 34, 62],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 107
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 37
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 38
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 20
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 21
      }]
    }, {
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 12,
        dataCodewordsPerBlock: 11
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 12
      }]
    }]
  }, {
    infoBits: 58893,
    versionNumber: 14,
    alignmentPatternCenters: [6, 26, 46, 66],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 115
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 40
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 41
      }]
    }, {
      ecCodewordsPerBlock: 20,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 17
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 12
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: 63784,
    versionNumber: 15,
    alignmentPatternCenters: [6, 26, 48, 70],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 22,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 87
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 88
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 41
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 42
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 12
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: 68472,
    versionNumber: 16,
    alignmentPatternCenters: [6, 26, 50, 74],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 98
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 99
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 7,
        dataCodewordsPerBlock: 45
      }, {
        numBlocks: 3,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 15,
        dataCodewordsPerBlock: 19
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 20
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 13,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 70749,
    versionNumber: 17,
    alignmentPatternCenters: [6, 30, 54, 78],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 107
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 108
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 10,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 22
      }, {
        numBlocks: 15,
        dataCodewordsPerBlock: 23
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 14
      }, {
        numBlocks: 17,
        dataCodewordsPerBlock: 15
      }]
    }]
  }, {
    infoBits: 76311,
    versionNumber: 18,
    alignmentPatternCenters: [6, 30, 56, 82],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 120
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 121
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 9,
        dataCodewordsPerBlock: 43
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 44
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 22
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 23
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 14
      }, {
        numBlocks: 19,
        dataCodewordsPerBlock: 15
      }]
    }]
  }, {
    infoBits: 79154,
    versionNumber: 19,
    alignmentPatternCenters: [6, 30, 58, 86],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 113
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 114
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 44
      }, {
        numBlocks: 11,
        dataCodewordsPerBlock: 45
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 21
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 22
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 9,
        dataCodewordsPerBlock: 13
      }, {
        numBlocks: 16,
        dataCodewordsPerBlock: 14
      }]
    }]
  }, {
    infoBits: 84390,
    versionNumber: 20,
    alignmentPatternCenters: [6, 34, 62, 90],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 107
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 108
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 41
      }, {
        numBlocks: 13,
        dataCodewordsPerBlock: 42
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 15,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 15,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 87683,
    versionNumber: 21,
    alignmentPatternCenters: [6, 28, 50, 72, 94],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 116
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 117
      }]
    }, {
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 42
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 22
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 23
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 17
      }]
    }]
  }, {
    infoBits: 92361,
    versionNumber: 22,
    alignmentPatternCenters: [6, 26, 50, 74, 98],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 111
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 112
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 7,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 16,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 24,
      ecBlocks: [{
        numBlocks: 34,
        dataCodewordsPerBlock: 13
      }]
    }]
  }, {
    infoBits: 96236,
    versionNumber: 23,
    alignmentPatternCenters: [6, 30, 54, 74, 102],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 121
      }, {
        numBlocks: 5,
        dataCodewordsPerBlock: 122
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 16,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 102084,
    versionNumber: 24,
    alignmentPatternCenters: [6, 28, 54, 80, 106],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 117
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 118
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 45
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 16,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 30,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 17
      }]
    }]
  }, {
    infoBits: 102881,
    versionNumber: 25,
    alignmentPatternCenters: [6, 32, 58, 84, 110],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 26,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 106
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 107
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 13,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 7,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 22,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 22,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 13,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 110507,
    versionNumber: 26,
    alignmentPatternCenters: [6, 30, 58, 86, 114],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 10,
        dataCodewordsPerBlock: 114
      }, {
        numBlocks: 2,
        dataCodewordsPerBlock: 115
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 28,
        dataCodewordsPerBlock: 22
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 23
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 33,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 17
      }]
    }]
  }, {
    infoBits: 110734,
    versionNumber: 27,
    alignmentPatternCenters: [6, 34, 62, 90, 118],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 122
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 123
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 22,
        dataCodewordsPerBlock: 45
      }, {
        numBlocks: 3,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 8,
        dataCodewordsPerBlock: 23
      }, {
        numBlocks: 26,
        dataCodewordsPerBlock: 24
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 12,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 28,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 117786,
    versionNumber: 28,
    alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 117
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 118
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 3,
        dataCodewordsPerBlock: 45
      }, {
        numBlocks: 23,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 31,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 31,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 119615,
    versionNumber: 29,
    alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 7,
        dataCodewordsPerBlock: 116
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 117
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 21,
        dataCodewordsPerBlock: 45
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 46
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 1,
        dataCodewordsPerBlock: 23
      }, {
        numBlocks: 37,
        dataCodewordsPerBlock: 24
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 26,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 126325,
    versionNumber: 30,
    alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 5,
        dataCodewordsPerBlock: 115
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 15,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 25,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 23,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 25,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 127568,
    versionNumber: 31,
    alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 13,
        dataCodewordsPerBlock: 115
      }, {
        numBlocks: 3,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 29,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 42,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 23,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 28,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 133589,
    versionNumber: 32,
    alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 115
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 10,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 23,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 10,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 35,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 35,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 136944,
    versionNumber: 33,
    alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 115
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 14,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 21,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 29,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 19,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 11,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 46,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 141498,
    versionNumber: 34,
    alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 13,
        dataCodewordsPerBlock: 115
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 116
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 14,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 23,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 44,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 59,
        dataCodewordsPerBlock: 16
      }, {
        numBlocks: 1,
        dataCodewordsPerBlock: 17
      }]
    }]
  }, {
    infoBits: 145311,
    versionNumber: 35,
    alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 12,
        dataCodewordsPerBlock: 121
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 122
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 12,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 26,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 39,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 22,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 41,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 150283,
    versionNumber: 36,
    alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 121
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 122
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 6,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 34,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 46,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 2,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 64,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 152622,
    versionNumber: 37,
    alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 17,
        dataCodewordsPerBlock: 122
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 123
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 29,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 49,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 10,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 24,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 46,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 158308,
    versionNumber: 38,
    alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 4,
        dataCodewordsPerBlock: 122
      }, {
        numBlocks: 18,
        dataCodewordsPerBlock: 123
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 13,
        dataCodewordsPerBlock: 46
      }, {
        numBlocks: 32,
        dataCodewordsPerBlock: 47
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 48,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 14,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 42,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 32,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 161089,
    versionNumber: 39,
    alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 20,
        dataCodewordsPerBlock: 117
      }, {
        numBlocks: 4,
        dataCodewordsPerBlock: 118
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 40,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 7,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 43,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 22,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 10,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 67,
        dataCodewordsPerBlock: 16
      }]
    }]
  }, {
    infoBits: 167017,
    versionNumber: 40,
    alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
    errorCorrectionLevels: [{
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 19,
        dataCodewordsPerBlock: 118
      }, {
        numBlocks: 6,
        dataCodewordsPerBlock: 119
      }]
    }, {
      ecCodewordsPerBlock: 28,
      ecBlocks: [{
        numBlocks: 18,
        dataCodewordsPerBlock: 47
      }, {
        numBlocks: 31,
        dataCodewordsPerBlock: 48
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 34,
        dataCodewordsPerBlock: 24
      }, {
        numBlocks: 34,
        dataCodewordsPerBlock: 25
      }]
    }, {
      ecCodewordsPerBlock: 30,
      ecBlocks: [{
        numBlocks: 20,
        dataCodewordsPerBlock: 15
      }, {
        numBlocks: 61,
        dataCodewordsPerBlock: 16
      }]
    }]
  }],
      ca = [{
    bits: 21522,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 0
    }
  }, {
    bits: 20773,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 1
    }
  }, {
    bits: 24188,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 2
    }
  }, {
    bits: 23371,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 3
    }
  }, {
    bits: 17913,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 4
    }
  }, {
    bits: 16590,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 5
    }
  }, {
    bits: 20375,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 6
    }
  }, {
    bits: 19104,
    formatInfo: {
      errorCorrectionLevel: 1,
      dataMask: 7
    }
  }, {
    bits: 30660,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 0
    }
  }, {
    bits: 29427,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 1
    }
  }, {
    bits: 32170,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 2
    }
  }, {
    bits: 30877,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 3
    }
  }, {
    bits: 26159,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 4
    }
  }, {
    bits: 25368,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 5
    }
  }, {
    bits: 27713,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 6
    }
  }, {
    bits: 26998,
    formatInfo: {
      errorCorrectionLevel: 0,
      dataMask: 7
    }
  }, {
    bits: 5769,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 0
    }
  }, {
    bits: 5054,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 1
    }
  }, {
    bits: 7399,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 2
    }
  }, {
    bits: 6608,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 3
    }
  }, {
    bits: 1890,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 4
    }
  }, {
    bits: 597,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 5
    }
  }, {
    bits: 3340,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 6
    }
  }, {
    bits: 2107,
    formatInfo: {
      errorCorrectionLevel: 3,
      dataMask: 7
    }
  }, {
    bits: 13663,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 0
    }
  }, {
    bits: 12392,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 1
    }
  }, {
    bits: 16177,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 2
    }
  }, {
    bits: 14854,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 3
    }
  }, {
    bits: 9396,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 4
    }
  }, {
    bits: 8579,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 5
    }
  }, {
    bits: 11994,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 6
    }
  }, {
    bits: 11245,
    formatInfo: {
      errorCorrectionLevel: 2,
      dataMask: 7
    }
  }],
      Z = [function (a) {
    return 0 === (a.y + a.x) % 2;
  }, function (a) {
    return 0 === a.y % 2;
  }, function (a) {
    return 0 === a.x % 3;
  }, function (a) {
    return 0 === (a.y + a.x) % 3;
  }, function (a) {
    return 0 === (Math.floor(a.y / 2) + Math.floor(a.x / 3)) % 2;
  }, function (a) {
    return 0 === a.x * a.y % 2 + a.x * a.y % 3;
  }, function (a) {
    return 0 === (a.y * a.x % 2 + a.y * a.x % 3) % 2;
  }, function (a) {
    return 0 === ((a.y + a.x) % 2 + a.y * a.x % 3) % 2;
  }],
      x = function x(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  },
      ka = {
    inversionAttempts: "attemptBoth",
    greyScaleWeights: {
      red: .2126,
      green: .7152,
      blue: .0722,
      useIntegerApproximation: !1
    },
    canOverwriteImage: !0
  };

  I["default"] = I;
  var H = "dontInvert",
      D = {
    red: 77,
    green: 150,
    blue: 29,
    useIntegerApproximation: !0
  };

  self.onmessage = function (a) {
    var b = a.data.data;

    switch (a.data.type) {
      case "decode":
        a = I(b.data, b.width, b.height, {
          inversionAttempts: H,
          greyScaleWeights: D
        });
        self.postMessage({
          type: "qrResult",
          data: a ? a.data : null
        });
        break;

      case "grayscaleWeights":
        D.red = b.red;
        D.green = b.green;
        D.blue = b.blue;
        D.useIntegerApproximation = b.useIntegerApproximation;
        break;

      case "inversionMode":
        switch (b) {
          case "original":
            H = "dontInvert";
            break;

          case "invert":
            H = "attemptBoth";
            break;

          case "both":
            H = "attemptBoth";
            break;

          default:
            throw Error("Invalid inversion mode");
        }

        break;

      case "close":
        self.close();
    }
  };
})();

/***/ }),

/***/ "./assets/js/qr-scanner.min.js":
/*!*************************************!*\
  !*** ./assets/js/qr-scanner.min.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__);













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var e = /*#__PURE__*/function () {
  _createClass(e, null, [{
    key: "hasCamera",
    value: function hasCamera() {
      return navigator.mediaDevices.enumerateDevices().then(function (a) {
        return a.some(function (a) {
          return "videoinput" === a.kind;
        });
      })["catch"](function () {
        return !1;
      });
    }
  }]);

  function e(a, c) {
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.DEFAULT_CANVAS_SIZE;

    _classCallCheck(this, e);

    this.$video = a;
    this.$canvas = document.createElement("canvas");
    this._onDecode = c;
    this._paused = this._active = !1;
    this.$canvas.width = b;
    this.$canvas.height = b;
    this._sourceRect = {
      x: 0,
      y: 0,
      width: b,
      height: b
    };
    this._onCanPlay = this._onCanPlay.bind(this);
    this._onPlay = this._onPlay.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this.$video.addEventListener("canplay", this._onCanPlay);
    this.$video.addEventListener("play", this._onPlay);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    this._qrWorker = new Worker(e.WORKER_PATH);
  }

  _createClass(e, [{
    key: "destroy",
    value: function destroy() {
      this.$video.removeEventListener("canplay", this._onCanPlay);
      this.$video.removeEventListener("play", this._onPlay);
      document.removeEventListener("visibilitychange", this._onVisibilityChange);
      this.stop();

      this._qrWorker.postMessage({
        type: "close"
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (this._active && !this._paused) return Promise.resolve();
      "https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https.");
      this._active = !0;
      this._paused = !1;
      if (document.hidden) return Promise.resolve();
      clearTimeout(this._offTimeout);
      this._offTimeout = null;
      if (this.$video.srcObject) return this.$video.play(), Promise.resolve();
      var a = "environment";
      return this._getCameraStream("environment", !0)["catch"](function () {
        a = "user";
        return _this._getCameraStream();
      }).then(function (c) {
        _this.$video.srcObject = c;

        _this._setVideoMirror(a);
      })["catch"](function (a) {
        _this._active = !1;
        throw a;
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.pause();
      this._active = !1;
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;

      this._paused = !0;
      this._active && (this.$video.pause(), this._offTimeout || (this._offTimeout = setTimeout(function () {
        var a = _this2.$video.srcObject && _this2.$video.srcObject.getTracks()[0];

        a && (a.stop(), _this2._offTimeout = _this2.$video.srcObject = null);
      }, 300)));
    }
  }, {
    key: "setGrayscaleWeights",
    value: function setGrayscaleWeights(a, c, b) {
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;

      this._qrWorker.postMessage({
        type: "grayscaleWeights",
        data: {
          red: a,
          green: c,
          blue: b,
          useIntegerApproximation: d
        }
      });
    }
  }, {
    key: "setInversionMode",
    value: function setInversionMode(a) {
      this._qrWorker.postMessage({
        type: "inversionMode",
        data: a
      });
    }
  }, {
    key: "_onCanPlay",
    value: function _onCanPlay() {
      this._updateSourceRect();

      this.$video.play();
    }
  }, {
    key: "_onPlay",
    value: function _onPlay() {
      this._updateSourceRect();

      this._scanFrame();
    }
  }, {
    key: "_onVisibilityChange",
    value: function _onVisibilityChange() {
      document.hidden ? this.pause() : this._active && this.start();
    }
  }, {
    key: "_updateSourceRect",
    value: function _updateSourceRect() {
      var a = Math.round(2 / 3 * Math.min(this.$video.videoWidth, this.$video.videoHeight));
      this._sourceRect.width = this._sourceRect.height = a;
      this._sourceRect.x = (this.$video.videoWidth - a) / 2;
      this._sourceRect.y = (this.$video.videoHeight - a) / 2;
    }
  }, {
    key: "_scanFrame",
    value: function _scanFrame() {
      var _this3 = this;

      if (!this._active || this.$video.paused || this.$video.ended) return !1;
      requestAnimationFrame(function () {
        e.scanImage(_this3.$video, _this3._sourceRect, _this3._qrWorker, _this3.$canvas, !0).then(_this3._onDecode, function (a) {
          _this3._active && "QR code not found." !== a && console.error(a);
        }).then(function () {
          return _this3._scanFrame();
        });
      });
    }
  }, {
    key: "_getCameraStream",
    value: function _getCameraStream(a) {
      var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      var b = [{
        width: {
          min: 1024
        }
      }, {
        width: {
          min: 768
        }
      }, {}];
      a && (c && (a = {
        exact: a
      }), b.forEach(function (b) {
        return b.facingMode = a;
      }));
      return this._getMatchingCameraStream(b);
    }
  }, {
    key: "_getMatchingCameraStream",
    value: function _getMatchingCameraStream(a) {
      var _this4 = this;

      return 0 === a.length ? Promise.reject("Camera not found.") : navigator.mediaDevices.getUserMedia({
        video: a.shift()
      })["catch"](function () {
        return _this4._getMatchingCameraStream(a);
      });
    }
  }, {
    key: "_setVideoMirror",
    value: function _setVideoMirror(a) {
      this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
    }
  }], [{
    key: "scanImage",
    value: function scanImage(a) {
      var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var g = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
      var h = !1,
          l = new Promise(function (l, g) {
        b || (b = new Worker(e.WORKER_PATH), h = !0, b.postMessage({
          type: "inversionMode",
          data: "both"
        }));

        var n, _m, _k;

        _m = function m(a) {
          "qrResult" === a.data.type && (b.removeEventListener("message", _m), b.removeEventListener("error", _k), clearTimeout(n), null !== a.data.data ? l(a.data.data) : g("QR code not found."));
        };

        _k = function k(a) {
          b.removeEventListener("message", _m);
          b.removeEventListener("error", _k);
          clearTimeout(n);
          g("Scanner error: " + (a ? a.message || a : "Unknown Error"));
        };

        b.addEventListener("message", _m);
        b.addEventListener("error", _k);
        n = setTimeout(function () {
          return _k("timeout");
        }, 3E3);

        e._loadImage(a).then(function (a) {
          a = e._getImageData(a, c, d, f);
          b.postMessage({
            type: "decode",
            data: a
          }, [a.data.buffer]);
        })["catch"](_k);
      });
      c && g && (l = l["catch"](function () {
        return e.scanImage(a, null, b, d, f);
      }));
      return l = l["finally"](function () {
        h && b.postMessage({
          type: "close"
        });
      });
    }
  }, {
    key: "_getImageData",
    value: function _getImageData(a) {
      var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      b = b || document.createElement("canvas");
      var f = c && c.x ? c.x : 0,
          g = c && c.y ? c.y : 0,
          h = c && c.width ? c.width : a.width || a.videoWidth;
      c = c && c.height ? c.height : a.height || a.videoHeight;
      d || b.width === h && b.height === c || (b.width = h, b.height = c);
      d = b.getContext("2d", {
        alpha: !1
      });
      d.imageSmoothingEnabled = !1;
      d.drawImage(a, f, g, h, c, 0, 0, b.width, b.height);
      return d.getImageData(0, 0, b.width, b.height);
    }
  }, {
    key: "_loadImage",
    value: function _loadImage(a) {
      if (a instanceof HTMLCanvasElement || a instanceof HTMLVideoElement || window.ImageBitmap && a instanceof window.ImageBitmap || window.OffscreenCanvas && a instanceof window.OffscreenCanvas) return Promise.resolve(a);
      if (a instanceof Image) return e._awaitImageLoad(a).then(function () {
        return a;
      });

      if (a instanceof File || a instanceof URL || "string" === typeof a) {
        var c = new Image();
        c.src = a instanceof File ? URL.createObjectURL(a) : a;
        return e._awaitImageLoad(c).then(function () {
          a instanceof File && URL.revokeObjectURL(c.src);
          return c;
        });
      }

      return Promise.reject("Unsupported image type.");
    }
  }, {
    key: "_awaitImageLoad",
    value: function _awaitImageLoad(a) {
      return new Promise(function (c, b) {
        if (a.complete && 0 !== a.naturalWidth) c();else {
          var _d, _f;

          _d = function d() {
            a.removeEventListener("load", _d);
            a.removeEventListener("error", _f);
            c();
          };

          _f = function f() {
            a.removeEventListener("load", _d);
            a.removeEventListener("error", _f);
            b("Image load error");
          };

          a.addEventListener("load", _d);
          a.addEventListener("error", _f);
        }
      });
    }
  }]);

  return e;
}();

e.DEFAULT_CANVAS_SIZE = 400;
e.WORKER_PATH = "qr-scanner-worker.min.js";
/* harmony default export */ __webpack_exports__["default"] = (e);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXItc2Nhbm5lci13b3JrZXIubWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9xci1zY2FubmVyLm1pbi5qcyJdLCJuYW1lcyI6WyJRclNjYW5uZXIiLCJXT1JLRVJfUEFUSCIsIlFyU2Nhbm5lcldvcmtlciIsInZpZGVvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbUhhc0NhbWVyYSIsImNhbVFyUmVzdWx0IiwiY2FtUXJSZXN1bHRUaW1lc3RhbXAiLCJmaWxlU2VsZWN0b3IiLCJmaWxlUXJSZXN1bHQiLCJzZXRSZXN1bHQiLCJsYWJlbCIsInJlc3VsdCIsInRleHRDb250ZW50IiwiRGF0ZSIsInRvU3RyaW5nIiwic3R5bGUiLCJjb2xvciIsImNsZWFyVGltZW91dCIsImhpZ2hsaWdodFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFzQ2FtZXJhIiwidGhlbiIsInNjYW5uZXIiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldEludmVyc2lvbk1vZGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGUiLCJmaWxlcyIsInNjYW5JbWFnZSIsImUiLCJjb25zb2xlIiwibG9nIiwiUyIsImEiLCJiIiwiYyIsImQiLCJyZWFkQml0cyIsInB1c2giLCJkZWNvZGVVUklDb21wb25lbnQiLCJtYXAiLCJzdWJzdHIiLCJqb2luIiwiYnl0ZXMiLCJ0ZXh0IiwiVCIsIlUiLCJjaHVua3MiLCJhdmFpbGFibGUiLCJ5IiwiVGVybWluYXRvciIsIkVDSSIsInR5cGUiLCJ1IiwiYXNzaWdubWVudE51bWJlciIsIk51bWVyaWMiLCJnIiwiZiIsImgiLCJFcnJvciIsImsiLCJNYXRoIiwiZmxvb3IiLCJtIiwiQWxwaGFudW1lcmljIiwiQiIsImNoYXJDb2RlQXQiLCJCeXRlIiwiS2FuamkiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiSiIsIlYiLCJkZWdyZWUiLCJ6ZXJvIiwib25lIiwiaXNaZXJvIiwiZ2V0Q29lZmZpY2llbnQiLCJpbnZlcnNlIiwibXVsdGlwbHkiLCJhZGRPclN1YnRyYWN0IiwiYnVpbGRNb25vbWlhbCIsIm11bHRpcGx5QnlNb25vbWlhbCIsIm11bHRpcGx5UG9seSIsIlciLCJVaW50OENsYW1wZWRBcnJheSIsImxlbmd0aCIsInNldCIsIlgiLCJ3IiwiZXZhbHVhdGVBdCIsImV4cCIsImdlbmVyYXRvckJhc2UiLCJBcnJheSIsInNpemUiLCJFIiwiQyIsIlkiLCJaIiwiZGF0YU1hc2siLCJoZWlnaHQiLCJ2ZXJzaW9uTnVtYmVyIiwiQSIsImNyZWF0ZUVtcHR5Iiwic2V0UmVnaW9uIiwiYWxpZ25tZW50UGF0dGVybkNlbnRlcnMiLCJwIiwiZ2V0IiwieCIsImFhIiwiSyIsIkluZmluaXR5IiwiaW5mb0JpdHMiLCJiYSIsImNhIiwiYml0cyIsImZvcm1hdEluZm8iLCJkYSIsImVycm9yQ29ycmVjdGlvbkxldmVscyIsImVjQmxvY2tzIiwiZm9yRWFjaCIsIm51bUJsb2NrcyIsIm51bURhdGFDb2Rld29yZHMiLCJkYXRhQ29kZXdvcmRzUGVyQmxvY2siLCJjb2Rld29yZHMiLCJlY0NvZGV3b3Jkc1BlckJsb2NrIiwic2xpY2UiLCJzaGlmdCIsIkwiLCJlcnJvckNvcnJlY3Rpb25MZXZlbCIsInJlZHVjZSIsIk0iLCJhMTEiLCJhMTIiLCJhMTMiLCJhMjEiLCJhMjIiLCJhMjMiLCJhMzEiLCJhMzIiLCJhMzMiLCJlYSIsImZhIiwiZGltZW5zaW9uIiwidG9wTGVmdCIsInRvcFJpZ2h0IiwiYWxpZ25tZW50UGF0dGVybiIsImJvdHRvbUxlZnQiLCJuIiwibCIsIm1hdHJpeCIsIm1hcHBpbmdGdW5jdGlvbiIsInQiLCJoYSIsImlhIiwieiIsInJvdW5kIiwibW9kdWxlU2l6ZSIsIk4iLCJhYnMiLCJxIiwiciIsIkYiLCJjZWlsIiwiY29uY2F0IiwiRyIsInBvdyIsImF2ZXJhZ2VTaXplIiwiZXJyb3IiLCJPIiwibWF4IiwibWluIiwid2lkdGgiLCJzcXJ0IiwiamEiLCJzdGFydFgiLCJlbmRYIiwiZmlsdGVyIiwiYm90dG9tIiwidG9wIiwic2NvcmUiLCJzb3J0IiwicG9pbnRzIiwiUCIsImJpbmFyeURhdGEiLCJkYXRhIiwibG9jYXRpb24iLCJ0b3BSaWdodENvcm5lciIsInRvcExlZnRDb3JuZXIiLCJib3R0b21SaWdodENvcm5lciIsImJvdHRvbUxlZnRDb3JuZXIiLCJ0b3BSaWdodEZpbmRlclBhdHRlcm4iLCJ0b3BMZWZ0RmluZGVyUGF0dGVybiIsImJvdHRvbUxlZnRGaW5kZXJQYXR0ZXJuIiwiYm90dG9tUmlnaHRBbGlnbm1lbnRQYXR0ZXJuIiwiUSIsIk9iamVjdCIsImtleXMiLCJJIiwiY3JlYXRlIiwia2EiLCJpbnZlcnNpb25BdHRlbXB0cyIsImdyZXlTY2FsZVdlaWdodHMiLCJjYW5PdmVyd3JpdGVJbWFnZSIsImJ1ZmZlciIsIlIiLCJ1c2VJbnRlZ2VyQXBwcm94aW1hdGlvbiIsInJlZCIsImdyZWVuIiwiYmx1ZSIsInYiLCJiaW5hcml6ZWQiLCJpbnZlcnRlZCIsImJpdE9mZnNldCIsImJ5dGVPZmZzZXQiLCJzcGxpdCIsImZpZWxkIiwiY29lZmZpY2llbnRzIiwicHJpbWl0aXZlIiwiZXhwVGFibGUiLCJsb2dUYWJsZSIsIkgiLCJEIiwic2VsZiIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiY2xvc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJlbnVtZXJhdGVEZXZpY2VzIiwic29tZSIsImtpbmQiLCJERUZBVUxUX0NBTlZBU19TSVpFIiwiJHZpZGVvIiwiJGNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJfb25EZWNvZGUiLCJfcGF1c2VkIiwiX2FjdGl2ZSIsIl9zb3VyY2VSZWN0IiwiX29uQ2FuUGxheSIsImJpbmQiLCJfb25QbGF5IiwiX29uVmlzaWJpbGl0eUNoYW5nZSIsIl9xcldvcmtlciIsIldvcmtlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJwcm90b2NvbCIsIndhcm4iLCJoaWRkZW4iLCJfb2ZmVGltZW91dCIsInNyY09iamVjdCIsInBsYXkiLCJfZ2V0Q2FtZXJhU3RyZWFtIiwiX3NldFZpZGVvTWlycm9yIiwicGF1c2UiLCJnZXRUcmFja3MiLCJfdXBkYXRlU291cmNlUmVjdCIsIl9zY2FuRnJhbWUiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJwYXVzZWQiLCJlbmRlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV4YWN0IiwiZmFjaW5nTW9kZSIsIl9nZXRNYXRjaGluZ0NhbWVyYVN0cmVhbSIsInJlamVjdCIsImdldFVzZXJNZWRpYSIsInRyYW5zZm9ybSIsIm1lc3NhZ2UiLCJfbG9hZEltYWdlIiwiX2dldEltYWdlRGF0YSIsImdldENvbnRleHQiLCJhbHBoYSIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImRyYXdJbWFnZSIsImdldEltYWdlRGF0YSIsIkhUTUxDYW52YXNFbGVtZW50IiwiSFRNTFZpZGVvRWxlbWVudCIsIkltYWdlQml0bWFwIiwiT2Zmc2NyZWVuQ2FudmFzIiwiSW1hZ2UiLCJfYXdhaXRJbWFnZUxvYWQiLCJGaWxlIiwiVVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY29tcGxldGUiLCJuYXR1cmFsV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0FBLDBEQUFTLENBQUNDLFdBQVYsR0FBd0JDLGdFQUF4QjtBQUVJLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQSxJQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7QUFDQSxJQUFNRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFwQjtBQUNBLElBQU1HLG9CQUFvQixHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLENBQTdCO0FBQ0EsSUFBTUksWUFBWSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7QUFDQSxJQUFNSyxZQUFZLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7O0FBRUEsU0FBU00sU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQzlCRCxPQUFLLENBQUNFLFdBQU4sR0FBb0JELE1BQXBCO0FBQ0FMLHNCQUFvQixDQUFDTSxXQUFyQixHQUFtQyxJQUFJQyxJQUFKLEdBQVdDLFFBQVgsRUFBbkM7QUFDQUosT0FBSyxDQUFDSyxLQUFOLENBQVlDLEtBQVosR0FBb0IsTUFBcEI7QUFDQUMsY0FBWSxDQUFDUCxLQUFLLENBQUNRLGdCQUFQLENBQVo7QUFDQVIsT0FBSyxDQUFDUSxnQkFBTixHQUF5QkMsVUFBVSxDQUFDO0FBQUEsV0FBTVQsS0FBSyxDQUFDSyxLQUFOLENBQVlDLEtBQVosR0FBb0IsU0FBMUI7QUFBQSxHQUFELEVBQXNDLEdBQXRDLENBQW5DO0FBQ0gsQyxDQUVEOzs7QUFFQWxCLDBEQUFTLENBQUNzQixTQUFWLEdBQXNCQyxJQUF0QixDQUEyQixVQUFBRCxTQUFTO0FBQUEsU0FBSWhCLFlBQVksQ0FBQ1EsV0FBYixHQUEyQlEsU0FBL0I7QUFBQSxDQUFwQztBQUVBLElBQU1FLE9BQU8sR0FBRyxJQUFJeEIsMERBQUosQ0FBY0csS0FBZCxFQUFxQixVQUFBVSxNQUFNO0FBQUEsU0FBSUYsU0FBUyxDQUFDSixXQUFELEVBQWNNLE1BQWQsQ0FBYjtBQUFBLENBQTNCLENBQWhCO0FBQ0FXLE9BQU8sQ0FBQ0MsS0FBUjtBQUVBckIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixFQUFpRHFCLGdCQUFqRCxDQUFrRSxRQUFsRSxFQUE0RSxVQUFBQyxLQUFLLEVBQUk7QUFDakZILFNBQU8sQ0FBQ0ksZ0JBQVIsQ0FBeUJELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUF0QztBQUNILENBRkQsRSxDQUlBOztBQUVBckIsWUFBWSxDQUFDaUIsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsVUFBQUMsS0FBSyxFQUFJO0FBQzdDLE1BQU1JLElBQUksR0FBR3RCLFlBQVksQ0FBQ3VCLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBYjs7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QvQiw0REFBUyxDQUFDaUMsU0FBVixDQUFvQkYsSUFBcEIsRUFDS1IsSUFETCxDQUNVLFVBQUFWLE1BQU07QUFBQSxXQUFJRixTQUFTLENBQUNELFlBQUQsRUFBZUcsTUFBZixDQUFiO0FBQUEsR0FEaEIsV0FFVyxVQUFBcUIsQ0FBQztBQUFBLFdBQUl2QixTQUFTLENBQUNELFlBQUQsRUFBZXdCLENBQUMsSUFBSSxtQkFBcEIsQ0FBYjtBQUFBLEdBRlo7QUFHSCxDQVJEO0FBV0pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEU7Ozs7Ozs7Ozs7OztBQ3hEYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVU7QUFBQyxXQUFTQyxDQUFULENBQVdDLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsUUFBSUMsQ0FBQyxHQUFDLEVBQU47QUFBQSxRQUFTQyxDQUFDLEdBQUMsRUFBWDtBQUFjRixLQUFDLEdBQUNELENBQUMsQ0FBQ0ksUUFBRixDQUFXLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVVILENBQVYsQ0FBWCxDQUFGOztBQUEyQixTQUFJLElBQUlFLEVBQUMsR0FBQyxDQUFWLEVBQVlBLEVBQUMsR0FBQ0YsQ0FBZCxFQUFnQkUsRUFBQyxFQUFqQixFQUFvQjtBQUFDLFVBQUlGLEVBQUMsR0FBQ0QsQ0FBQyxDQUFDSSxRQUFGLENBQVcsQ0FBWCxDQUFOOztBQUFvQkYsT0FBQyxDQUFDRyxJQUFGLENBQU9KLEVBQVA7QUFBVTs7QUFBQSxRQUFHO0FBQUNFLE9BQUMsSUFBRUcsa0JBQWtCLENBQUNKLENBQUMsQ0FBQ0ssR0FBRixDQUFNLFVBQUNQLENBQUQ7QUFBQSwwQkFBUyxDQUFDLE1BQUlBLENBQUMsQ0FBQ3RCLFFBQUYsQ0FBVyxFQUFYLENBQUwsRUFBcUI4QixNQUFyQixDQUE0QixDQUFDLENBQTdCLENBQVQ7QUFBQSxPQUFOLEVBQWtEQyxJQUFsRCxDQUF1RCxFQUF2RCxDQUFELENBQXJCO0FBQWtGLEtBQXRGLENBQXNGLE9BQU1iLENBQU4sRUFBUSxDQUFFOztBQUFBLFdBQU07QUFBQ2MsV0FBSyxFQUFDUixDQUFQO0FBQVNTLFVBQUksRUFBQ1I7QUFBZCxLQUFOO0FBQXVCOztBQUFBLFdBQVNTLENBQVQsQ0FBV1osQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQ0QsS0FBQyxHQUFDLElBQUlhLENBQUosQ0FBTWIsQ0FBTixDQUFGO0FBQVdDLEtBQUMsR0FBQyxLQUFHQSxDQUFILEdBQUssQ0FBTCxHQUFPLE1BQUlBLENBQUosR0FBTSxDQUFOLEdBQVEsQ0FBakI7QUFBbUIsUUFBSUMsQ0FBQyxHQUFDO0FBQUNTLFVBQUksRUFBQyxFQUFOO0FBQVNELFdBQUssRUFBQyxFQUFmO0FBQWtCSSxZQUFNLEVBQUM7QUFBekIsS0FBTjs7QUFBbUMsV0FBSyxLQUFHZCxDQUFDLENBQUNlLFNBQUYsRUFBUixHQUF1QjtBQUFBOztBQUFDLFVBQUlaLENBQUMsR0FBQ0gsQ0FBQyxDQUFDSSxRQUFGLENBQVcsQ0FBWCxDQUFOO0FBQW9CLFVBQUdELENBQUMsS0FBR2EsQ0FBQyxDQUFDQyxVQUFULEVBQW9CLE9BQU9mLENBQVA7QUFBUyxVQUFHQyxDQUFDLEtBQUdhLENBQUMsQ0FBQ0UsR0FBVCxFQUFhLE1BQUlsQixDQUFDLENBQUNJLFFBQUYsQ0FBVyxDQUFYLENBQUosR0FBa0JGLENBQUMsQ0FBQ1ksTUFBRixDQUFTVCxJQUFULENBQWM7QUFBQ2MsWUFBSSxFQUFDQyxDQUFDLENBQUNGLEdBQVI7QUFBWUcsd0JBQWdCLEVBQUNyQixDQUFDLENBQUNJLFFBQUYsQ0FBVyxDQUFYO0FBQTdCLE9BQWQsQ0FBbEIsR0FBNkUsTUFBSUosQ0FBQyxDQUFDSSxRQUFGLENBQVcsQ0FBWCxDQUFKLEdBQ2hmRixDQUFDLENBQUNZLE1BQUYsQ0FBU1QsSUFBVCxDQUFjO0FBQUNjLFlBQUksRUFBQ0MsQ0FBQyxDQUFDRixHQUFSO0FBQVlHLHdCQUFnQixFQUFDckIsQ0FBQyxDQUFDSSxRQUFGLENBQVcsRUFBWDtBQUE3QixPQUFkLENBRGdmLEdBQ3BiLE1BQUlKLENBQUMsQ0FBQ0ksUUFBRixDQUFXLENBQVgsQ0FBSixHQUFrQkYsQ0FBQyxDQUFDWSxNQUFGLENBQVNULElBQVQsQ0FBYztBQUFDYyxZQUFJLEVBQUNDLENBQUMsQ0FBQ0YsR0FBUjtBQUFZRyx3QkFBZ0IsRUFBQ3JCLENBQUMsQ0FBQ0ksUUFBRixDQUFXLEVBQVg7QUFBN0IsT0FBZCxDQUFsQixHQUE4RUYsQ0FBQyxDQUFDWSxNQUFGLENBQVNULElBQVQsQ0FBYztBQUFDYyxZQUFJLEVBQUNDLENBQUMsQ0FBQ0YsR0FBUjtBQUFZRyx3QkFBZ0IsRUFBQyxDQUFDO0FBQTlCLE9BQWQsQ0FEeVIsQ0FBYixLQUN2TixJQUFHbEIsQ0FBQyxLQUFHYSxDQUFDLENBQUNNLE9BQVQsRUFBaUI7QUFBQTs7QUFBQyxZQUFJMUIsQ0FBQyxHQUFDSSxDQUFOO0FBQVFHLFNBQUMsR0FBQyxFQUFGOztBQUFLLGFBQUksSUFBSW9CLENBQUMsR0FBQyxFQUFOLEVBQVNDLENBQUMsR0FBQzVCLENBQUMsQ0FBQ1EsUUFBRixDQUFXLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxFQUFQLEVBQVdILENBQVgsQ0FBWCxDQUFmLEVBQXlDLEtBQUd1QixDQUE1QyxHQUErQztBQUFDLGNBQUlDLENBQUMsR0FBQzdCLENBQUMsQ0FBQ1EsUUFBRixDQUFXLEVBQVgsQ0FBTjtBQUFxQixjQUFHLE9BQUtxQixDQUFSLEVBQVUsTUFBTUMsS0FBSyxDQUFDLGlDQUFELENBQVg7QUFBK0MsY0FBSUMsQ0FBQyxHQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osQ0FBQyxHQUFDLEdBQWIsQ0FBTjtBQUFBLGNBQXdCSyxDQUFDLEdBQUNGLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLEdBQUMsRUFBYixJQUFpQixFQUEzQztBQUE4Q0EsV0FBQyxJQUFFLEVBQUg7QUFBTXRCLFdBQUMsQ0FBQ0UsSUFBRixDQUFPLEtBQUdzQixDQUFWLEVBQVksS0FBR0csQ0FBZixFQUFpQixLQUFHTCxDQUFwQjtBQUF1QkYsV0FBQyxJQUFFSSxDQUFDLENBQUNqRCxRQUFGLEtBQWFvRCxDQUFDLENBQUNwRCxRQUFGLEVBQWIsR0FBMEIrQyxDQUFDLENBQUMvQyxRQUFGLEVBQTdCO0FBQTBDOEMsV0FBQyxJQUFFLENBQUg7QUFBSzs7QUFBQSxZQUFHLE1BQUlBLENBQVAsRUFBUztBQUFDQSxXQUFDLEdBQUM1QixDQUFDLENBQUNRLFFBQUYsQ0FBVyxDQUFYLENBQUY7QUFBZ0IsY0FBRyxPQUNuZm9CLENBRGdmLEVBQzllLE1BQU1FLEtBQUssQ0FBQyxnQ0FBRCxDQUFYO0FBQThDOUIsV0FBQyxHQUFDZ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLENBQUMsR0FBQyxFQUFiLENBQUY7QUFBbUJBLFdBQUMsSUFBRSxFQUFIO0FBQU1yQixXQUFDLENBQUNFLElBQUYsQ0FBTyxLQUFHVCxDQUFWLEVBQVksS0FBRzRCLENBQWY7QUFBa0JELFdBQUMsSUFBRTNCLENBQUMsQ0FBQ2xCLFFBQUYsS0FBYThDLENBQUMsQ0FBQzlDLFFBQUYsRUFBaEI7QUFBNkIsU0FEOFYsTUFDelYsSUFBRyxNQUFJOEMsQ0FBUCxFQUFTO0FBQUM1QixXQUFDLEdBQUNBLENBQUMsQ0FBQ1EsUUFBRixDQUFXLENBQVgsQ0FBRjtBQUFnQixjQUFHLE1BQUlSLENBQVAsRUFBUyxNQUFNOEIsS0FBSyxDQUFDLCtCQUFELENBQVg7QUFBNkN2QixXQUFDLENBQUNFLElBQUYsQ0FBTyxLQUFHVCxDQUFWO0FBQWEyQixXQUFDLElBQUUzQixDQUFDLENBQUNsQixRQUFGLEVBQUg7QUFBZ0I7O0FBQUF5QixTQUFDLEdBQUM7QUFBQ08sZUFBSyxFQUFDUCxDQUFQO0FBQVNRLGNBQUksRUFBQ1k7QUFBZCxTQUFGO0FBQW1CckIsU0FBQyxDQUFDUyxJQUFGLElBQVFSLENBQUMsQ0FBQ1EsSUFBVjs7QUFBZSxvQkFBQVQsQ0FBQyxDQUFDUSxLQUFGLEVBQVFMLElBQVIsb0NBQWdCRixDQUFDLENBQUNPLEtBQWxCOztBQUF5QlIsU0FBQyxDQUFDWSxNQUFGLENBQVNULElBQVQsQ0FBYztBQUFDYyxjQUFJLEVBQUNDLENBQUMsQ0FBQ0UsT0FBUjtBQUFnQlgsY0FBSSxFQUFDUixDQUFDLENBQUNRO0FBQXZCLFNBQWQ7QUFBNEMsT0FEbEosTUFDdUosSUFBR1IsQ0FBQyxLQUFHYSxDQUFDLENBQUNlLFlBQVQsRUFBc0I7QUFBQTs7QUFBQ25DLFNBQUMsR0FBQ0ksQ0FBRjtBQUFJRyxTQUFDLEdBQUMsRUFBRjtBQUFLb0IsU0FBQyxHQUFDLEVBQUY7O0FBQUssYUFBSUMsQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDUSxRQUFGLENBQVcsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBVUgsQ0FBVixDQUFYLENBQU4sRUFBK0IsS0FBR3VCLENBQWxDO0FBQXFDTSxXQUFDLEdBQUNsQyxDQUFDLENBQUNRLFFBQUYsQ0FBVyxFQUFYLENBQUYsRUFBaUJ1QixDQUFDLEdBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxDQUFDLEdBQUMsRUFBYixDQUFuQixFQUFvQ0EsQ0FBQyxJQUFFLEVBQXZDLEVBQTBDM0IsQ0FBQyxDQUFDRSxJQUFGLENBQU8yQixDQUFDLENBQUNMLENBQUQsQ0FBRCxDQUFLTSxVQUFMLENBQWdCLENBQWhCLENBQVAsRUFBMEJELENBQUMsQ0FBQ0YsQ0FBRCxDQUFELENBQUtHLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBMUIsQ0FBMUMsRUFDaGFWLENBQUMsSUFBRVMsQ0FBQyxDQUFDTCxDQUFELENBQUQsR0FBS0ssQ0FBQyxDQUFDRixDQUFELENBRHVaLEVBQ25aTixDQUFDLElBQUUsQ0FEZ1o7QUFBckM7O0FBQ3pXLGNBQUlBLENBQUosS0FBUTVCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDUSxRQUFGLENBQVcsQ0FBWCxDQUFGLEVBQWdCRCxDQUFDLENBQUNFLElBQUYsQ0FBTzJCLENBQUMsQ0FBQ3BDLENBQUQsQ0FBRCxDQUFLcUMsVUFBTCxDQUFnQixDQUFoQixDQUFQLENBQWhCLEVBQTJDVixDQUFDLElBQUVTLENBQUMsQ0FBQ3BDLENBQUQsQ0FBdkQ7QUFBNERPLFNBQUMsR0FBQztBQUFDTyxlQUFLLEVBQUNQLENBQVA7QUFBU1EsY0FBSSxFQUFDWTtBQUFkLFNBQUY7QUFBbUJyQixTQUFDLENBQUNTLElBQUYsSUFBUVIsQ0FBQyxDQUFDUSxJQUFWOztBQUFlLHFCQUFBVCxDQUFDLENBQUNRLEtBQUYsRUFBUUwsSUFBUixxQ0FBZ0JGLENBQUMsQ0FBQ08sS0FBbEI7O0FBQXlCUixTQUFDLENBQUNZLE1BQUYsQ0FBU1QsSUFBVCxDQUFjO0FBQUNjLGNBQUksRUFBQ0MsQ0FBQyxDQUFDVyxZQUFSO0FBQXFCcEIsY0FBSSxFQUFDUixDQUFDLENBQUNRO0FBQTVCLFNBQWQ7QUFBaUQsT0FENEosTUFDdkosSUFBR1IsQ0FBQyxLQUFHYSxDQUFDLENBQUNrQixJQUFULEVBQWMvQixDQUFDLEdBQUNKLENBQUMsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILENBQUgsRUFBU0MsQ0FBQyxDQUFDUyxJQUFGLElBQVFSLENBQUMsQ0FBQ1EsSUFBbkIsRUFBd0IsYUFBQVQsQ0FBQyxDQUFDUSxLQUFGLEVBQVFMLElBQVIscUNBQWdCRixDQUFDLENBQUNPLEtBQWxCLEVBQXhCLEVBQWlEUixDQUFDLENBQUNZLE1BQUYsQ0FBU1QsSUFBVCxDQUFjO0FBQUNjLFlBQUksRUFBQ0MsQ0FBQyxDQUFDYyxJQUFSO0FBQWF4QixhQUFLLEVBQUNQLENBQUMsQ0FBQ08sS0FBckI7QUFBMkJDLFlBQUksRUFBQ1IsQ0FBQyxDQUFDUTtBQUFsQyxPQUFkLENBQWpELENBQWQsS0FBMkgsSUFBR1IsQ0FBQyxLQUFHYSxDQUFDLENBQUNtQixLQUFULEVBQWU7QUFBQTs7QUFBQ1osU0FBQyxHQUFDdkIsQ0FBRjtBQUFJRyxTQUFDLEdBQUMsRUFBRjtBQUFLUCxTQUFDLEdBQUMyQixDQUFDLENBQUNuQixRQUFGLENBQVcsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBVUgsQ0FBVixDQUFYLENBQUY7O0FBQTJCLGFBQUl1QixDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUM1QixDQUFWLEVBQVk0QixDQUFDLEVBQWI7QUFBZ0JHLFdBQUMsR0FBQ0osQ0FBQyxDQUFDbkIsUUFBRixDQUFXLEVBQVgsQ0FBRixFQUFpQnVCLENBQUMsR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLENBQUMsR0FBQyxHQUFiLEtBQW1CLENBQW5CLEdBQXFCQSxDQUFDLEdBQUMsR0FBMUMsRUFBOENBLENBQUMsR0FBQyxPQUFLQSxDQUFMLEdBQU9BLENBQUMsR0FBQyxLQUFULEdBQWVBLENBQUMsR0FBQyxLQUFqRSxFQUF1RXhCLENBQUMsQ0FBQ0UsSUFBRixDQUFPc0IsQ0FBQyxJQUFFLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEdBQWQsQ0FBdkU7QUFBaEI7O0FBQTBHSixTQUFDLEdBQUUsSUFBSWEsV0FBSixDQUFnQixXQUFoQixDQUFELENBQStCQyxNQUEvQixDQUFzQ0MsVUFBVSxDQUFDQyxJQUFYLENBQWdCcEMsQ0FBaEIsQ0FBdEMsQ0FBRjtBQUN4ZEEsU0FBQyxHQUFDO0FBQUNPLGVBQUssRUFBQ1AsQ0FBUDtBQUFTUSxjQUFJLEVBQUNZO0FBQWQsU0FBRjtBQUFtQnJCLFNBQUMsQ0FBQ1MsSUFBRixJQUFRUixDQUFDLENBQUNRLElBQVY7O0FBQWUscUJBQUFULENBQUMsQ0FBQ1EsS0FBRixFQUFRTCxJQUFSLHFDQUFnQkYsQ0FBQyxDQUFDTyxLQUFsQjs7QUFBeUJSLFNBQUMsQ0FBQ1ksTUFBRixDQUFTVCxJQUFULENBQWM7QUFBQ2MsY0FBSSxFQUFDQyxDQUFDLENBQUNlLEtBQVI7QUFBY3pCLGVBQUssRUFBQ1AsQ0FBQyxDQUFDTyxLQUF0QjtBQUE0QkMsY0FBSSxFQUFDUixDQUFDLENBQUNRO0FBQW5DLFNBQWQ7QUFBd0Q7QUFBQzs7QUFBQSxRQUFHLE1BQUlYLENBQUMsQ0FBQ2UsU0FBRixFQUFKLElBQW1CLE1BQUlmLENBQUMsQ0FBQ0ksUUFBRixDQUFXSixDQUFDLENBQUNlLFNBQUYsRUFBWCxDQUExQixFQUFvRCxPQUFPYixDQUFQO0FBQVM7O0FBQUEsV0FBU3NDLENBQVQsQ0FBV3hDLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsV0FBT0QsQ0FBQyxHQUFDQyxDQUFUO0FBQVc7O0FBQUEsV0FBU3dDLENBQVQsQ0FBV3pDLENBQVgsRUFBYUMsQ0FBYixFQUFlQyxDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFBOztBQUFDRixLQUFDLENBQUN5QyxNQUFGLEtBQVd4QyxDQUFDLENBQUN3QyxNQUFGLEVBQVgsWUFBOEIsQ0FBQ3hDLENBQUQsRUFBR0QsQ0FBSCxDQUE5QixFQUF5QkEsQ0FBekIsWUFBMkJDLENBQTNCO0FBQXFDLFFBQUlOLENBQUMsR0FBQ0ksQ0FBQyxDQUFDMkMsSUFBUjs7QUFBYSxTQUFJLElBQUlwQixDQUFDLEdBQUN2QixDQUFDLENBQUM0QyxHQUFaLEVBQWdCMUMsQ0FBQyxDQUFDd0MsTUFBRixNQUFZdkMsQ0FBQyxHQUFDLENBQTlCLEdBQWlDO0FBQUMsVUFBSXFCLENBQUMsR0FBQ3ZCLENBQU47QUFBUSxVQUFJRSxHQUFDLEdBQUNQLENBQU47QUFBUUssT0FBQyxHQUFDQyxDQUFGO0FBQUlOLE9BQUMsR0FBQzJCLENBQUY7QUFBSSxVQUFHdEIsQ0FBQyxDQUFDNEMsTUFBRixFQUFILEVBQWMsT0FBTyxJQUFQO0FBQVkzQyxPQUFDLEdBQUNzQixDQUFGO0FBQUlELE9BQUMsR0FBQ3ZCLENBQUMsQ0FBQzJDLElBQUo7QUFBU25CLE9BQUMsR0FBQ3ZCLENBQUMsQ0FBQzZDLGNBQUYsQ0FBaUI3QyxDQUFDLENBQUN5QyxNQUFGLEVBQWpCLENBQUY7O0FBQStCLFdBQUlsQixDQUFDLEdBQUN4QixDQUFDLENBQUMrQyxPQUFGLENBQVV2QixDQUFWLENBQU4sRUFBbUJ0QixDQUFDLENBQUN3QyxNQUFGLE1BQVl6QyxDQUFDLENBQUN5QyxNQUFGLEVBQVosSUFBd0IsQ0FBQ3hDLENBQUMsQ0FBQzJDLE1BQUYsRUFBNUMsR0FBd0Q7QUFBQyxZQUFJMUMsR0FBQyxHQUFDRCxDQUFDLENBQUN3QyxNQUFGLEtBQVd6QyxDQUFDLENBQUN5QyxNQUFGLEVBQWpCO0FBQUEsWUFBNEI5QyxFQUFDLEdBQUNJLENBQUMsQ0FBQ2dELFFBQUYsQ0FBVzlDLENBQUMsQ0FBQzRDLGNBQUYsQ0FBaUI1QyxDQUFDLENBQUN3QyxNQUFGLEVBQWpCLENBQVgsRUFDemVsQixDQUR5ZSxDQUE5Qjs7QUFDeGNELFNBQUMsR0FBQ0EsQ0FBQyxDQUFDMEIsYUFBRixDQUFnQmpELENBQUMsQ0FBQ2tELGFBQUYsQ0FBZ0IvQyxHQUFoQixFQUFrQlAsRUFBbEIsQ0FBaEIsQ0FBRjtBQUF3Q00sU0FBQyxHQUFDQSxDQUFDLENBQUMrQyxhQUFGLENBQWdCaEQsQ0FBQyxDQUFDa0Qsa0JBQUYsQ0FBcUJoRCxHQUFyQixFQUF1QlAsRUFBdkIsQ0FBaEIsQ0FBRjtBQUE2Qzs7QUFBQTJCLE9BQUMsR0FBQ0EsQ0FBQyxDQUFDNkIsWUFBRixDQUFleEQsQ0FBZixFQUFrQnFELGFBQWxCLENBQWdDOUMsR0FBaEMsQ0FBRjtBQUFxQyxVQUFHRCxDQUFDLENBQUN3QyxNQUFGLE1BQVl6QyxDQUFDLENBQUN5QyxNQUFGLEVBQWYsRUFBMEIsT0FBTyxJQUFQO0FBQVk7O0FBQUF2QyxLQUFDLEdBQUNvQixDQUFDLENBQUN1QixjQUFGLENBQWlCLENBQWpCLENBQUY7QUFBc0IsUUFBRyxNQUFJM0MsQ0FBUCxFQUFTLE9BQU8sSUFBUDtBQUFZSCxLQUFDLEdBQUNBLENBQUMsQ0FBQytDLE9BQUYsQ0FBVTVDLENBQVYsQ0FBRjtBQUFlLFdBQU0sQ0FBQ29CLENBQUMsQ0FBQ3lCLFFBQUYsQ0FBV2hELENBQVgsQ0FBRCxFQUFlRSxDQUFDLENBQUM4QyxRQUFGLENBQVdoRCxDQUFYLENBQWYsQ0FBTjtBQUFvQzs7QUFBQSxXQUFTcUQsQ0FBVCxDQUFXckQsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFJQyxDQUFDLEdBQUMsSUFBSW9ELGlCQUFKLENBQXNCdEQsQ0FBQyxDQUFDdUQsTUFBeEIsQ0FBTjtBQUFzQ3JELEtBQUMsQ0FBQ3NELEdBQUYsQ0FBTXhELENBQU47QUFBU0EsS0FBQyxHQUFDLElBQUl5RCxDQUFKLENBQU0sR0FBTixFQUFVLEdBQVYsRUFBYyxDQUFkLENBQUY7QUFBbUIsUUFBSXRELENBQUMsR0FBQyxJQUFJdUQsQ0FBSixDQUFNMUQsQ0FBTixFQUFRRSxDQUFSLENBQU47QUFBQSxRQUFpQk4sQ0FBQyxHQUFDLElBQUkwRCxpQkFBSixDQUFzQnJELENBQXRCLENBQW5CO0FBQUEsUUFBNENzQixDQUFDLEdBQUMsQ0FBQyxDQUEvQzs7QUFBaUQsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUN2QixDQUFkLEVBQWdCdUIsQ0FBQyxFQUFqQixFQUFvQjtBQUFDLFVBQUlDLENBQUMsR0FBQ3RCLENBQUMsQ0FBQ3dELFVBQUYsQ0FBYTNELENBQUMsQ0FBQzRELEdBQUYsQ0FBTXBDLENBQUMsR0FBQ3hCLENBQUMsQ0FBQzZELGFBQVYsQ0FBYixDQUFOO0FBQTZDakUsT0FBQyxDQUFDQSxDQUFDLENBQUMyRCxNQUFGLEdBQVMsQ0FBVCxHQUFXL0IsQ0FBWixDQUFELEdBQWdCQyxDQUFoQjtBQUFrQixZQUFJQSxDQUFKLEtBQVFGLENBQUMsR0FBQyxDQUFDLENBQVg7QUFBYzs7QUFBQSxRQUFHLENBQUNBLENBQUosRUFBTSxPQUFPckIsQ0FBUDtBQUM1ZUMsS0FBQyxHQUFDLElBQUl1RCxDQUFKLENBQU0xRCxDQUFOLEVBQVFKLENBQVIsQ0FBRjtBQUFhTyxLQUFDLEdBQUNzQyxDQUFDLENBQUN6QyxDQUFELEVBQUdBLENBQUMsQ0FBQ2tELGFBQUYsQ0FBZ0JqRCxDQUFoQixFQUFrQixDQUFsQixDQUFILEVBQXdCRSxDQUF4QixFQUEwQkYsQ0FBMUIsQ0FBSDtBQUFnQyxRQUFHLFNBQU9FLENBQVYsRUFBWSxPQUFPLElBQVA7QUFBWUYsS0FBQyxHQUFDRSxDQUFDLENBQUMsQ0FBRCxDQUFIO0FBQU9xQixLQUFDLEdBQUN2QixDQUFDLENBQUN5QyxNQUFGLEVBQUY7QUFBYSxRQUFHLE1BQUlsQixDQUFQLEVBQVN2QixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDNkMsY0FBRixDQUFpQixDQUFqQixDQUFELENBQUYsQ0FBVCxLQUFxQztBQUFDbEQsT0FBQyxHQUFDa0UsS0FBSyxDQUFDdEMsQ0FBRCxDQUFQO0FBQVdELE9BQUMsR0FBQyxDQUFGOztBQUFJLFdBQUlFLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ3pCLENBQUMsQ0FBQytELElBQUosSUFBVXhDLENBQUMsR0FBQ0MsQ0FBcEIsRUFBc0JDLENBQUMsRUFBdkI7QUFBMEIsY0FBSXhCLENBQUMsQ0FBQzBELFVBQUYsQ0FBYWxDLENBQWIsQ0FBSixLQUFzQjdCLENBQUMsQ0FBQzJCLENBQUQsQ0FBRCxHQUFLdkIsQ0FBQyxDQUFDK0MsT0FBRixDQUFVdEIsQ0FBVixDQUFMLEVBQWtCRixDQUFDLEVBQXpDO0FBQTFCOztBQUF1RXRCLE9BQUMsR0FBQ3NCLENBQUMsS0FBR0MsQ0FBSixHQUFNLElBQU4sR0FBVzVCLENBQWI7QUFBZTtBQUFBLFFBQUcsUUFBTUssQ0FBVCxFQUFXLE9BQU8sSUFBUDtBQUFZRSxLQUFDLEdBQUNBLENBQUMsQ0FBQyxDQUFELENBQUg7QUFBT1AsS0FBQyxHQUFDSyxDQUFDLENBQUNzRCxNQUFKO0FBQVdoQyxLQUFDLEdBQUN1QyxLQUFLLENBQUNsRSxDQUFELENBQVA7O0FBQVcsU0FBSTRCLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQzVCLENBQVYsRUFBWTRCLENBQUMsRUFBYixFQUFnQjtBQUFDQyxPQUFDLEdBQUN6QixDQUFDLENBQUMrQyxPQUFGLENBQVU5QyxDQUFDLENBQUN1QixDQUFELENBQVgsQ0FBRjtBQUFrQixVQUFJdEIsRUFBQyxHQUFDLENBQU47O0FBQVEsV0FBSSxJQUFJQyxHQUFDLEdBQUMsQ0FBVixFQUFZQSxHQUFDLEdBQUNQLENBQWQsRUFBZ0JPLEdBQUMsRUFBakI7QUFBb0JxQixTQUFDLEtBQUdyQixHQUFKLEtBQVFELEVBQUMsR0FBQ0YsQ0FBQyxDQUFDZ0QsUUFBRixDQUFXOUMsRUFBWCxFQUFhc0MsQ0FBQyxDQUFDLENBQUQsRUFBR3hDLENBQUMsQ0FBQ2dELFFBQUYsQ0FBVy9DLENBQUMsQ0FBQ0UsR0FBRCxDQUFaLEVBQWdCc0IsQ0FBaEIsQ0FBSCxDQUFkLENBQVY7QUFBcEI7O0FBQXFFRixPQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFLeEIsQ0FBQyxDQUFDZ0QsUUFBRixDQUFXN0MsQ0FBQyxDQUFDd0QsVUFBRixDQUFhbEMsQ0FBYixDQUFYLEVBQTJCekIsQ0FBQyxDQUFDK0MsT0FBRixDQUFVN0MsRUFBVixDQUEzQixDQUFMO0FBQThDLFlBQUlGLENBQUMsQ0FBQzZELGFBQU4sS0FBc0J0QyxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFLeEIsQ0FBQyxDQUFDZ0QsUUFBRixDQUFXekIsQ0FBQyxDQUFDQyxDQUFELENBQVosRUFBZ0JDLENBQWhCLENBQTNCO0FBQStDOztBQUFBdEIsS0FBQyxHQUFDb0IsQ0FBRjs7QUFBSSxTQUFJM0IsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDSyxDQUFDLENBQUNzRCxNQUFaLEVBQW1CM0QsQ0FBQyxFQUFwQixFQUF1QjtBQUFDMkIsT0FBQyxHQUNsZ0JyQixDQUFDLENBQUNxRCxNQUFGLEdBQVMsQ0FBVCxHQUFXdkQsQ0FBQyxDQUFDRixHQUFGLENBQU1HLENBQUMsQ0FBQ0wsQ0FBRCxDQUFQLENBRHNmO0FBQzFlLFVBQUcsSUFBRTJCLENBQUwsRUFBTyxPQUFPLElBQVA7QUFBWXJCLE9BQUMsQ0FBQ3FCLENBQUQsQ0FBRCxJQUFNcEIsQ0FBQyxDQUFDUCxDQUFELENBQVA7QUFBVzs7QUFBQSxXQUFPTSxDQUFQO0FBQVM7O0FBQUEsV0FBUzhELENBQVQsQ0FBV2hFLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNELEtBQUMsSUFBRUMsQ0FBSDs7QUFBSyxTQUFJQSxDQUFDLEdBQUMsQ0FBTixFQUFRRCxDQUFSO0FBQVdDLE9BQUMsSUFBR0QsQ0FBQyxJQUFFQSxDQUFDLEdBQUMsQ0FBVDtBQUFYOztBQUFzQixXQUFPQyxDQUFQO0FBQVM7O0FBQUEsV0FBU2dFLENBQVQsQ0FBV2pFLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsV0FBT0EsQ0FBQyxJQUFFLENBQUgsR0FBS0QsQ0FBWjtBQUFjOztBQUFBLFdBQVNrRSxDQUFULENBQVdsRSxDQUFYLEVBQWFDLENBQWIsRUFBZUMsQ0FBZixFQUFpQjtBQUFDQSxLQUFDLEdBQUNpRSxDQUFDLENBQUNqRSxDQUFDLENBQUNrRSxRQUFILENBQUg7QUFBZ0IsUUFBSWpFLENBQUMsR0FBQ0gsQ0FBQyxDQUFDcUUsTUFBUjtBQUFlLFFBQUl6RSxDQUFDLEdBQUMsS0FBRyxJQUFFSyxDQUFDLENBQUNxRSxhQUFiO0FBQUEsUUFBMkIvQyxDQUFDLEdBQUNnRCxDQUFDLENBQUNDLFdBQUYsQ0FBYzVFLENBQWQsRUFBZ0JBLENBQWhCLENBQTdCO0FBQWdEMkIsS0FBQyxDQUFDa0QsU0FBRixDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQUMsQ0FBckI7QUFBd0JsRCxLQUFDLENBQUNrRCxTQUFGLENBQVk3RSxDQUFDLEdBQUMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUFDLENBQXZCO0FBQTBCMkIsS0FBQyxDQUFDa0QsU0FBRixDQUFZLENBQVosRUFBYzdFLENBQUMsR0FBQyxDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUFDLENBQXZCOztBQUFsSSwrQ0FBeUtLLENBQUMsQ0FBQ3lFLHVCQUEzSztBQUFBOztBQUFBO0FBQTRKO0FBQUEsWUFBUWxELENBQVI7O0FBQUEsb0RBQW9EdkIsQ0FBQyxDQUFDeUUsdUJBQXREO0FBQUE7O0FBQUE7QUFBdUM7QUFBQSxnQkFBUWpELENBQVI7QUFBdUMsa0JBQUlELENBQUosSUFBTyxNQUFJQyxDQUFYLElBQWMsTUFBSUQsQ0FBSixJQUFPQyxDQUFDLEtBQUc3QixDQUFDLEdBQUMsQ0FBM0IsSUFBOEI0QixDQUFDLEtBQUc1QixDQUFDLEdBQUMsQ0FBTixJQUFTLE1BQUk2QixDQUEzQyxJQUE4Q0YsQ0FBQyxDQUFDa0QsU0FBRixDQUFZakQsQ0FBQyxHQUFDLENBQWQsRUFBZ0JDLENBQUMsR0FBQyxDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QixDQUFDLENBQXpCLENBQTlDO0FBQXZDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1SjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFvVEYsS0FBQyxDQUFDa0QsU0FBRixDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCN0UsQ0FBQyxHQUFDLEVBQXBCLEVBQXVCLENBQUMsQ0FBeEI7QUFBMkIyQixLQUFDLENBQUNrRCxTQUFGLENBQVksQ0FBWixFQUNoZixDQURnZixFQUM5ZTdFLENBQUMsR0FBQyxFQUQ0ZSxFQUN6ZSxDQUR5ZSxFQUN2ZSxDQUFDLENBRHNlO0FBQ25lLFFBQUVLLENBQUMsQ0FBQ3FFLGFBQUosS0FBb0IvQyxDQUFDLENBQUNrRCxTQUFGLENBQVk3RSxDQUFDLEdBQUMsRUFBZCxFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUFDLENBQXhCLEdBQTJCMkIsQ0FBQyxDQUFDa0QsU0FBRixDQUFZLENBQVosRUFBYzdFLENBQUMsR0FBQyxFQUFoQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUFDLENBQXhCLENBQS9DO0FBQTJFSyxLQUFDLEdBQUNzQixDQUFGO0FBQUlDLEtBQUMsR0FBQyxFQUFGO0FBQUs1QixLQUFDLEdBQUM2QixDQUFDLEdBQUMsQ0FBSjtBQUFNRixLQUFDLEdBQUMsQ0FBQyxDQUFIOztBQUFLLFNBQUksSUFBSUksQ0FBQyxHQUFDeEIsQ0FBQyxHQUFDLENBQVosRUFBYyxJQUFFd0IsQ0FBaEIsRUFBa0JBLENBQUMsSUFBRSxDQUFyQixFQUF1QjtBQUFDLFlBQUlBLENBQUosSUFBT0EsQ0FBQyxFQUFSOztBQUFXLFdBQUksSUFBSUcsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDM0IsQ0FBZCxFQUFnQjJCLENBQUMsRUFBakIsRUFBb0I7QUFBQyxZQUFJNkMsQ0FBQyxHQUFDcEQsQ0FBQyxHQUFDcEIsQ0FBQyxHQUFDLENBQUYsR0FBSTJCLENBQUwsR0FBT0EsQ0FBZDs7QUFBZ0IsYUFBSSxJQUFJM0IsR0FBQyxHQUFDLENBQVYsRUFBWSxJQUFFQSxHQUFkLEVBQWdCQSxHQUFDLEVBQWpCLEVBQW9CO0FBQUMsY0FBSW9CLEVBQUMsR0FBQ0ksQ0FBQyxHQUFDeEIsR0FBUjs7QUFBVSxjQUFHLENBQUNGLENBQUMsQ0FBQzJFLEdBQUYsQ0FBTXJELEVBQU4sRUFBUW9ELENBQVIsQ0FBSixFQUFlO0FBQUMvRSxhQUFDOztBQUFHLGdCQUFJSyxHQUFDLEdBQUNELENBQUMsQ0FBQzRFLEdBQUYsQ0FBTXJELEVBQU4sRUFBUW9ELENBQVIsQ0FBTjs7QUFBaUJ6RSxhQUFDLENBQUM7QUFBQ2MsZUFBQyxFQUFDMkQsQ0FBSDtBQUFLRSxlQUFDLEVBQUN0RDtBQUFQLGFBQUQsQ0FBRCxLQUFldEIsR0FBQyxHQUFDLENBQUNBLEdBQWxCO0FBQXFCd0IsYUFBQyxHQUFDQSxDQUFDLElBQUUsQ0FBSCxHQUFLeEIsR0FBUDtBQUFTLGtCQUFJTCxDQUFKLEtBQVE0QixDQUFDLENBQUNuQixJQUFGLENBQU9vQixDQUFQLEdBQVVBLENBQUMsR0FBQzdCLENBQUMsR0FBQyxDQUF0QjtBQUF5QjtBQUFDO0FBQUM7O0FBQUEyQixPQUFDLEdBQUMsQ0FBQ0EsQ0FBSDtBQUFLOztBQUFBLFdBQU9DLENBQVA7QUFBUzs7QUFBQSxXQUFTc0QsRUFBVCxDQUFZOUUsQ0FBWixFQUFjO0FBQUMsUUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNxRSxNQUFSO0FBQUEsUUFBZW5FLENBQUMsR0FBQzBCLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUM1QixDQUFDLEdBQUMsRUFBSCxJQUFPLENBQWxCLENBQWpCO0FBQXNDLFFBQUcsS0FBR0MsQ0FBTixFQUFRLE9BQU82RSxDQUFDLENBQUM3RSxDQUFDLEdBQUMsQ0FBSCxDQUFSO0FBQWNBLEtBQUMsR0FBQyxDQUFGOztBQUFJLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWSxLQUFHQSxDQUFmLEVBQWlCQSxDQUFDLEVBQWxCO0FBQXFCLFdBQUksSUFBSVAsQ0FBQyxHQUFDSyxDQUFDLEdBQUMsQ0FBWixFQUFjTCxDQUFDLElBQUVLLENBQUMsR0FBQyxFQUFuQixFQUFzQkwsQ0FBQyxFQUF2QjtBQUEwQk0sU0FBQyxHQUFDK0QsQ0FBQyxDQUFDakUsQ0FBQyxDQUFDNEUsR0FBRixDQUFNaEYsQ0FBTixFQUFRTyxDQUFSLENBQUQsRUFBWUQsQ0FBWixDQUFIO0FBQTFCO0FBQXJCOztBQUFpRUMsS0FBQyxHQUFDLENBQUY7O0FBQUksU0FBSVAsQ0FBQyxHQUFDLENBQU4sRUFBUSxLQUFHQSxDQUFYLEVBQWFBLENBQUMsRUFBZDtBQUFpQixXQUFJLElBQUlNLEdBQUMsR0FBQ0QsQ0FBQyxHQUFDLENBQVosRUFBY0MsR0FBQyxJQUNuZkQsQ0FBQyxHQUFDLEVBRGtlLEVBQy9kQyxHQUFDLEVBRDhkO0FBQzNkQyxTQUFDLEdBQUM4RCxDQUFDLENBQUNqRSxDQUFDLENBQUM0RSxHQUFGLENBQU1oRixDQUFOLEVBQVFNLEdBQVIsQ0FBRCxFQUFZQyxDQUFaLENBQUg7QUFEMmQ7QUFBakI7O0FBQ3hiSCxLQUFDLEdBQUNnRixRQUFGO0FBQVcsUUFBSXpELENBQUo7O0FBRHVTLGdEQUNwUndELENBRG9SO0FBQUE7O0FBQUE7QUFDalMsNkRBQWU7QUFBQSxZQUFQbkYsR0FBTztBQUFDLFlBQUdBLEdBQUMsQ0FBQ3FGLFFBQUYsS0FBYS9FLENBQWIsSUFBZ0JOLEdBQUMsQ0FBQ3FGLFFBQUYsS0FBYTlFLENBQWhDLEVBQWtDLE9BQU9QLEdBQVA7QUFBU0ssU0FBQyxHQUFDK0QsQ0FBQyxDQUFDOUQsQ0FBRCxFQUFHTixHQUFDLENBQUNxRixRQUFMLENBQUg7QUFBa0JoRixTQUFDLEdBQUNELENBQUYsS0FBTXVCLENBQUMsR0FBQzNCLEdBQUYsRUFBSUksQ0FBQyxHQUFDQyxDQUFaO0FBQWVBLFNBQUMsR0FBQytELENBQUMsQ0FBQzdELENBQUQsRUFBR1AsR0FBQyxDQUFDcUYsUUFBTCxDQUFIO0FBQWtCaEYsU0FBQyxHQUFDRCxDQUFGLEtBQU11QixDQUFDLEdBQUMzQixHQUFGLEVBQUlJLENBQUMsR0FBQ0MsQ0FBWjtBQUFlO0FBRG9LO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ3BLLFFBQUcsS0FBR0QsQ0FBTixFQUFRLE9BQU91QixDQUFQO0FBQVM7O0FBQUEsV0FBUzJELEVBQVQsQ0FBWWxGLENBQVosRUFBYztBQUFDLFFBQUlDLENBQUMsR0FBQyxDQUFOOztBQUFRLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWSxLQUFHQSxDQUFmLEVBQWlCQSxDQUFDLEVBQWxCO0FBQXFCLFlBQUlBLENBQUosS0FBUUQsQ0FBQyxHQUFDZ0UsQ0FBQyxDQUFDakUsQ0FBQyxDQUFDNEUsR0FBRixDQUFNMUUsQ0FBTixFQUFRLENBQVIsQ0FBRCxFQUFZRCxDQUFaLENBQVg7QUFBckI7O0FBQWdELFNBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVEsS0FBR0EsQ0FBWCxFQUFhQSxDQUFDLEVBQWQ7QUFBaUIsWUFBSUEsQ0FBSixLQUFRRCxDQUFDLEdBQUNnRSxDQUFDLENBQUNqRSxDQUFDLENBQUM0RSxHQUFGLENBQU0sQ0FBTixFQUFRMUUsQ0FBUixDQUFELEVBQVlELENBQVosQ0FBWDtBQUFqQjs7QUFBNEMsUUFBSUUsQ0FBQyxHQUFDSCxDQUFDLENBQUNxRSxNQUFSO0FBQWVuRSxLQUFDLEdBQUMsQ0FBRjs7QUFBSSxTQUFJLElBQUlOLENBQUMsR0FBQ08sQ0FBQyxHQUFDLENBQVosRUFBY1AsQ0FBQyxJQUFFTyxDQUFDLEdBQUMsQ0FBbkIsRUFBcUJQLENBQUMsRUFBdEI7QUFBeUJNLE9BQUMsR0FBQytELENBQUMsQ0FBQ2pFLENBQUMsQ0FBQzRFLEdBQUYsQ0FBTSxDQUFOLEVBQVFoRixDQUFSLENBQUQsRUFBWU0sQ0FBWixDQUFIO0FBQXpCOztBQUEyQyxTQUFJTixDQUFDLEdBQUNPLENBQUMsR0FBQyxDQUFSLEVBQVVQLENBQUMsR0FBQ08sQ0FBWixFQUFjUCxDQUFDLEVBQWY7QUFBa0JNLE9BQUMsR0FBQytELENBQUMsQ0FBQ2pFLENBQUMsQ0FBQzRFLEdBQUYsQ0FBTWhGLENBQU4sRUFBUSxDQUFSLENBQUQsRUFBWU0sQ0FBWixDQUFIO0FBQWxCOztBQUFvQ0YsS0FBQyxHQUFDZ0YsUUFBRjtBQUFXN0UsS0FBQyxHQUFDLElBQUY7O0FBQWxOLGdEQUF5UGdGLEVBQXpQO0FBQUE7O0FBQUE7QUFBeU4sNkRBQW1DO0FBQUE7QUFBQSxZQUFyQjVELENBQXFCLGdCQUExQjZELElBQTBCO0FBQUEsWUFBUjVELENBQVEsZ0JBQW5CNkQsVUFBbUI7QUFBQyxZQUFHOUQsQ0FBQyxLQUFHdEIsQ0FBSixJQUFPc0IsQ0FBQyxLQUFHckIsQ0FBZCxFQUFnQixPQUFPc0IsQ0FBUDtBQUFTNUIsU0FBQyxHQUFDb0UsQ0FBQyxDQUFDL0QsQ0FBRCxFQUFHc0IsQ0FBSCxDQUFIO0FBQVMzQixTQUFDLEdBQUNJLENBQUYsS0FBTUcsQ0FBQyxHQUFDcUIsQ0FBRixFQUFJeEIsQ0FBQyxHQUFDSixDQUFaO0FBQ3ZlSyxTQUFDLEtBQUdDLENBQUosS0FBUU4sQ0FBQyxHQUFDb0UsQ0FBQyxDQUFDOUQsQ0FBRCxFQUFHcUIsQ0FBSCxDQUFILEVBQVMzQixDQUFDLEdBQUNJLENBQUYsS0FBTUcsQ0FBQyxHQUFDcUIsQ0FBRixFQUFJeEIsQ0FBQyxHQUFDSixDQUFaLENBQWpCO0FBQWlDO0FBRHVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ3ZLLFdBQU8sS0FBR0ksQ0FBSCxHQUFLRyxDQUFMLEdBQU8sSUFBZDtBQUFtQjs7QUFBQSxXQUFTbUYsRUFBVCxDQUFZdEYsQ0FBWixFQUFjQyxDQUFkLEVBQWdCQyxDQUFoQixFQUFrQjtBQUFDLFFBQUlDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDc0YscUJBQUYsQ0FBd0JyRixDQUF4QixDQUFOO0FBQUEsUUFBaUNOLENBQUMsR0FBQyxFQUFuQztBQUFBLFFBQXNDMkIsQ0FBQyxHQUFDLENBQXhDO0FBQTBDcEIsS0FBQyxDQUFDcUYsUUFBRixDQUFXQyxPQUFYLENBQW1CLFVBQUN6RixDQUFELEVBQUs7QUFBQyxXQUFJLElBQUlDLEdBQUMsR0FBQyxDQUFWLEVBQVlBLEdBQUMsR0FBQ0QsQ0FBQyxDQUFDMEYsU0FBaEIsRUFBMEJ6RixHQUFDLEVBQTNCO0FBQThCTCxTQUFDLENBQUNTLElBQUYsQ0FBTztBQUFDc0YsMEJBQWdCLEVBQUMzRixDQUFDLENBQUM0RixxQkFBcEI7QUFBMENDLG1CQUFTLEVBQUM7QUFBcEQsU0FBUCxHQUFnRXRFLENBQUMsSUFBRXZCLENBQUMsQ0FBQzRGLHFCQUFGLEdBQXdCekYsQ0FBQyxDQUFDMkYsbUJBQTdGO0FBQTlCO0FBQStJLEtBQXhLO0FBQTBLLFFBQUc5RixDQUFDLENBQUN1RCxNQUFGLEdBQVNoQyxDQUFaLEVBQWMsT0FBTyxJQUFQO0FBQVl2QixLQUFDLEdBQUNBLENBQUMsQ0FBQytGLEtBQUYsQ0FBUSxDQUFSLEVBQVV4RSxDQUFWLENBQUY7QUFBZXRCLEtBQUMsR0FBQ0UsQ0FBQyxDQUFDcUYsUUFBRixDQUFXLENBQVgsRUFBY0kscUJBQWhCOztBQUFzQyxTQUFJMUYsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDRCxDQUFWLEVBQVlDLENBQUMsRUFBYjtBQUFBLGtEQUE2Qk4sQ0FBN0I7QUFBQTs7QUFBQTtBQUFnQjtBQUFBLGNBQVE0QixDQUFSO0FBQWVBLFdBQUMsQ0FBQ3FFLFNBQUYsQ0FBWXhGLElBQVosQ0FBaUJMLENBQUMsQ0FBQ2dHLEtBQUYsRUFBakI7QUFBZjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQTJELFFBQUcsSUFBRTdGLENBQUMsQ0FBQ3FGLFFBQUYsQ0FBV2pDLE1BQWhCLEVBQXVCLEtBQUkvQixDQUFDLEdBQUNyQixDQUFDLENBQUNxRixRQUFGLENBQVcsQ0FBWCxFQUFjRSxTQUFoQixFQUEwQnpGLENBQUMsR0FBQ0UsQ0FBQyxDQUFDcUYsUUFBRixDQUFXLENBQVgsRUFBY0UsU0FBMUMsRUFBb0R4RixDQUFDLEdBQ3JmLENBRDRiLEVBQzFiQSxDQUFDLEdBQUNELENBRHdiLEVBQ3RiQyxDQUFDLEVBRHFiO0FBQ2xiTixPQUFDLENBQUM0QixDQUFDLEdBQUN0QixDQUFILENBQUQsQ0FBTzJGLFNBQVAsQ0FBaUJ4RixJQUFqQixDQUFzQkwsQ0FBQyxDQUFDZ0csS0FBRixFQUF0QjtBQURrYjs7QUFDalosV0FBSyxJQUFFaEcsQ0FBQyxDQUFDdUQsTUFBVDtBQUFBLGtEQUE4QjNELENBQTlCO0FBQUE7O0FBQUE7QUFBaUI7QUFBQSxjQUFRSyxHQUFSOztBQUFlQSxhQUFDLENBQUM0RixTQUFGLENBQVl4RixJQUFaLENBQWlCTCxDQUFDLENBQUNnRyxLQUFGLEVBQWpCO0FBQWY7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUE0RCxXQUFPcEcsQ0FBUDtBQUFTOztBQUFBLFdBQVNxRyxDQUFULENBQVdqRyxDQUFYLEVBQWE7QUFBQyxRQUFJQyxDQUFDLEdBQUM2RSxFQUFFLENBQUM5RSxDQUFELENBQVI7QUFBWSxRQUFHLENBQUNDLENBQUosRUFBTSxPQUFPLElBQVA7QUFBWSxRQUFJQyxDQUFDLEdBQUNnRixFQUFFLENBQUNsRixDQUFELENBQVI7QUFBWSxRQUFHLENBQUNFLENBQUosRUFBTSxPQUFPLElBQVA7QUFBWUYsS0FBQyxHQUFDa0UsQ0FBQyxDQUFDbEUsQ0FBRCxFQUFHQyxDQUFILEVBQUtDLENBQUwsQ0FBSDtBQUFXLFFBQUlDLENBQUMsR0FBQ21GLEVBQUUsQ0FBQ3RGLENBQUQsRUFBR0MsQ0FBSCxFQUFLQyxDQUFDLENBQUNnRyxvQkFBUCxDQUFSO0FBQXFDLFFBQUcsQ0FBQy9GLENBQUosRUFBTSxPQUFPLElBQVA7QUFBWUQsS0FBQyxHQUFDQyxDQUFDLENBQUNnRyxNQUFGLENBQVMsVUFBQ25HLENBQUQsRUFBR0MsQ0FBSDtBQUFBLGFBQU9ELENBQUMsR0FBQ0MsQ0FBQyxDQUFDMEYsZ0JBQVg7QUFBQSxLQUFULEVBQXFDLENBQXJDLENBQUY7QUFBMEN6RixLQUFDLEdBQUMsSUFBSW9ELGlCQUFKLENBQXNCcEQsQ0FBdEIsQ0FBRjtBQUEyQkYsS0FBQyxHQUFDLENBQUY7O0FBQXBNLGdEQUFxTkcsQ0FBck47QUFBQTs7QUFBQTtBQUF3TSw2REFBZTtBQUFBLFlBQVBGLEdBQU87QUFBQ0UsU0FBQyxHQUFDa0QsQ0FBQyxDQUFDcEQsR0FBQyxDQUFDNEYsU0FBSCxFQUFhNUYsR0FBQyxDQUFDNEYsU0FBRixDQUFZdEMsTUFBWixHQUFtQnRELEdBQUMsQ0FBQzBGLGdCQUFsQyxDQUFIO0FBQXVELFlBQUcsQ0FBQ3hGLENBQUosRUFBTSxPQUFPLElBQVA7O0FBQVksYUFBSSxJQUFJUCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNLLEdBQUMsQ0FBQzBGLGdCQUFoQixFQUFpQy9GLENBQUMsRUFBbEM7QUFBcUNNLFdBQUMsQ0FBQ0YsQ0FBQyxFQUFGLENBQUQsR0FBT0csQ0FBQyxDQUFDUCxDQUFELENBQVI7QUFBckM7QUFBaUQ7QUFBbFY7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBa1YsUUFBRztBQUFDLGFBQU9nQixDQUFDLENBQUNWLENBQUQsRUFBR0QsQ0FBQyxDQUFDcUUsYUFBTCxDQUFSO0FBQTRCLEtBQWhDLENBQWdDLE9BQU0xRSxDQUFOLEVBQVE7QUFBQyxhQUFPLElBQVA7QUFBWTtBQUFDOztBQUNyZ0IsV0FBU3dHLENBQVQsQ0FBV3BHLENBQVgsRUFBYUMsQ0FBYixFQUFlQyxDQUFmLEVBQWlCQyxDQUFqQixFQUFtQjtBQUFDLFFBQUlQLENBQUMsR0FBQ0ksQ0FBQyxDQUFDNkUsQ0FBRixHQUFJNUUsQ0FBQyxDQUFDNEUsQ0FBTixHQUFRM0UsQ0FBQyxDQUFDMkUsQ0FBVixHQUFZMUUsQ0FBQyxDQUFDMEUsQ0FBcEI7QUFBc0IsUUFBSXRELENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ2dCLENBQUYsR0FBSWYsQ0FBQyxDQUFDZSxDQUFOLEdBQVFkLENBQUMsQ0FBQ2MsQ0FBVixHQUFZYixDQUFDLENBQUNhLENBQXBCO0FBQXNCLFFBQUcsTUFBSXBCLENBQUosSUFBTyxNQUFJMkIsQ0FBZCxFQUFnQixPQUFNO0FBQUM4RSxTQUFHLEVBQUNwRyxDQUFDLENBQUM0RSxDQUFGLEdBQUk3RSxDQUFDLENBQUM2RSxDQUFYO0FBQWF5QixTQUFHLEVBQUNyRyxDQUFDLENBQUNlLENBQUYsR0FBSWhCLENBQUMsQ0FBQ2dCLENBQXZCO0FBQXlCdUYsU0FBRyxFQUFDLENBQTdCO0FBQStCQyxTQUFHLEVBQUN0RyxDQUFDLENBQUMyRSxDQUFGLEdBQUk1RSxDQUFDLENBQUM0RSxDQUF6QztBQUEyQzRCLFNBQUcsRUFBQ3ZHLENBQUMsQ0FBQ2MsQ0FBRixHQUFJZixDQUFDLENBQUNlLENBQXJEO0FBQXVEMEYsU0FBRyxFQUFDLENBQTNEO0FBQTZEQyxTQUFHLEVBQUMzRyxDQUFDLENBQUM2RSxDQUFuRTtBQUFxRStCLFNBQUcsRUFBQzVHLENBQUMsQ0FBQ2dCLENBQTNFO0FBQTZFNkYsU0FBRyxFQUFDO0FBQWpGLEtBQU47QUFBMEY7QUFBQyxVQUFJcEYsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDNEUsQ0FBRixHQUFJM0UsQ0FBQyxDQUFDMkUsQ0FBWjtBQUFjLFVBQUlyRCxDQUFDLEdBQUNyQixDQUFDLENBQUMwRSxDQUFGLEdBQUkzRSxDQUFDLENBQUMyRSxDQUFaO0FBQWMsVUFBSWxELENBQUMsR0FBQzFCLENBQUMsQ0FBQ2UsQ0FBRixHQUFJZCxDQUFDLENBQUNjLENBQVo7QUFBQSxVQUFjYyxDQUFDLEdBQUMzQixDQUFDLENBQUNhLENBQUYsR0FBSWQsQ0FBQyxDQUFDYyxDQUF0QjtBQUF3QmQsT0FBQyxHQUFDdUIsQ0FBQyxHQUFDSyxDQUFGLEdBQUlOLENBQUMsR0FBQ0csQ0FBUjtBQUFVSCxPQUFDLEdBQUMsQ0FBQzVCLENBQUMsR0FBQ2tDLENBQUYsR0FBSU4sQ0FBQyxHQUFDRCxDQUFQLElBQVVyQixDQUFaO0FBQWNOLE9BQUMsR0FBQyxDQUFDNkIsQ0FBQyxHQUFDRixDQUFGLEdBQUkzQixDQUFDLEdBQUMrQixDQUFQLElBQVV6QixDQUFaO0FBQWMsYUFBTTtBQUFDbUcsV0FBRyxFQUFDcEcsQ0FBQyxDQUFDNEUsQ0FBRixHQUFJN0UsQ0FBQyxDQUFDNkUsQ0FBTixHQUFRckQsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDNEUsQ0FBakI7QUFBbUJ5QixXQUFHLEVBQUNyRyxDQUFDLENBQUNlLENBQUYsR0FBSWhCLENBQUMsQ0FBQ2dCLENBQU4sR0FBUVEsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDZSxDQUFuQztBQUFxQ3VGLFdBQUcsRUFBQy9FLENBQXpDO0FBQTJDZ0YsV0FBRyxFQUFDckcsQ0FBQyxDQUFDMEUsQ0FBRixHQUFJN0UsQ0FBQyxDQUFDNkUsQ0FBTixHQUFRakYsQ0FBQyxHQUFDTyxDQUFDLENBQUMwRSxDQUEzRDtBQUE2RDRCLFdBQUcsRUFBQ3RHLENBQUMsQ0FBQ2EsQ0FBRixHQUFJaEIsQ0FBQyxDQUFDZ0IsQ0FBTixHQUFRcEIsQ0FBQyxHQUFDTyxDQUFDLENBQUNhLENBQTdFO0FBQStFMEYsV0FBRyxFQUFDOUcsQ0FBbkY7QUFBcUYrRyxXQUFHLEVBQUMzRyxDQUFDLENBQUM2RSxDQUEzRjtBQUE2RitCLFdBQUcsRUFBQzVHLENBQUMsQ0FBQ2dCLENBQW5HO0FBQXFHNkYsV0FBRyxFQUFDO0FBQXpHLE9BQU47QUFBa0g7QUFBQzs7QUFBQSxXQUFTQyxFQUFULENBQVk5RyxDQUFaLEVBQWNDLENBQWQsRUFBZ0JDLENBQWhCLEVBQWtCQyxDQUFsQixFQUFvQjtBQUFDSCxLQUFDLEdBQUNvRyxDQUFDLENBQUNwRyxDQUFELEVBQUdDLENBQUgsRUFBS0MsQ0FBTCxFQUFPQyxDQUFQLENBQUg7QUFBYSxXQUFNO0FBQUNrRyxTQUFHLEVBQUNyRyxDQUFDLENBQUN5RyxHQUFGLEdBQU16RyxDQUFDLENBQUM2RyxHQUFSLEdBQVk3RyxDQUFDLENBQUMwRyxHQUFGLEdBQU0xRyxDQUFDLENBQUM0RyxHQUF6QjtBQUE2Qk4sU0FBRyxFQUFDdEcsQ0FBQyxDQUFDdUcsR0FBRixHQUFNdkcsQ0FBQyxDQUFDNEcsR0FBUixHQUFZNUcsQ0FBQyxDQUFDc0csR0FBRixHQUFNdEcsQ0FBQyxDQUFDNkcsR0FBckQ7QUFBeUROLFNBQUcsRUFBQ3ZHLENBQUMsQ0FBQ3NHLEdBQUYsR0FBTXRHLENBQUMsQ0FBQzBHLEdBQVIsR0FBWTFHLENBQUMsQ0FBQ3VHLEdBQUYsR0FBTXZHLENBQUMsQ0FBQ3lHLEdBQWpGO0FBQ2hhRCxTQUFHLEVBQUN4RyxDQUFDLENBQUMwRyxHQUFGLEdBQU0xRyxDQUFDLENBQUMyRyxHQUFSLEdBQVkzRyxDQUFDLENBQUN3RyxHQUFGLEdBQU14RyxDQUFDLENBQUM2RyxHQUR3WTtBQUNwWUosU0FBRyxFQUFDekcsQ0FBQyxDQUFDcUcsR0FBRixHQUFNckcsQ0FBQyxDQUFDNkcsR0FBUixHQUFZN0csQ0FBQyxDQUFDdUcsR0FBRixHQUFNdkcsQ0FBQyxDQUFDMkcsR0FENFc7QUFDeFdELFNBQUcsRUFBQzFHLENBQUMsQ0FBQ3VHLEdBQUYsR0FBTXZHLENBQUMsQ0FBQ3dHLEdBQVIsR0FBWXhHLENBQUMsQ0FBQ3FHLEdBQUYsR0FBTXJHLENBQUMsQ0FBQzBHLEdBRGdWO0FBQzVVQyxTQUFHLEVBQUMzRyxDQUFDLENBQUN3RyxHQUFGLEdBQU14RyxDQUFDLENBQUM0RyxHQUFSLEdBQVk1RyxDQUFDLENBQUN5RyxHQUFGLEdBQU16RyxDQUFDLENBQUMyRyxHQURvVDtBQUNoVEMsU0FBRyxFQUFDNUcsQ0FBQyxDQUFDc0csR0FBRixHQUFNdEcsQ0FBQyxDQUFDMkcsR0FBUixHQUFZM0csQ0FBQyxDQUFDcUcsR0FBRixHQUFNckcsQ0FBQyxDQUFDNEcsR0FEd1I7QUFDcFJDLFNBQUcsRUFBQzdHLENBQUMsQ0FBQ3FHLEdBQUYsR0FBTXJHLENBQUMsQ0FBQ3lHLEdBQVIsR0FBWXpHLENBQUMsQ0FBQ3NHLEdBQUYsR0FBTXRHLENBQUMsQ0FBQ3dHO0FBRDRQLEtBQU47QUFDalA7O0FBQUEsV0FBU08sRUFBVCxDQUFZL0csQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUMsUUFBSUMsQ0FBQyxHQUFDNEcsRUFBRSxDQUFDO0FBQUNqQyxPQUFDLEVBQUMsR0FBSDtBQUFPN0QsT0FBQyxFQUFDO0FBQVQsS0FBRCxFQUFlO0FBQUM2RCxPQUFDLEVBQUM1RSxDQUFDLENBQUMrRyxTQUFGLEdBQVksR0FBZjtBQUFtQmhHLE9BQUMsRUFBQztBQUFyQixLQUFmLEVBQXlDO0FBQUM2RCxPQUFDLEVBQUM1RSxDQUFDLENBQUMrRyxTQUFGLEdBQVksR0FBZjtBQUFtQmhHLE9BQUMsRUFBQ2YsQ0FBQyxDQUFDK0csU0FBRixHQUFZO0FBQWpDLEtBQXpDLEVBQStFO0FBQUNuQyxPQUFDLEVBQUMsR0FBSDtBQUFPN0QsT0FBQyxFQUFDZixDQUFDLENBQUMrRyxTQUFGLEdBQVk7QUFBckIsS0FBL0UsQ0FBUjtBQUFBLFFBQWtIN0csQ0FBQyxHQUFDaUcsQ0FBQyxDQUFDbkcsQ0FBQyxDQUFDZ0gsT0FBSCxFQUFXaEgsQ0FBQyxDQUFDaUgsUUFBYixFQUFzQmpILENBQUMsQ0FBQ2tILGdCQUF4QixFQUF5Q2xILENBQUMsQ0FBQ21ILFVBQTNDLENBQXJIO0FBQUEsUUFBNEt4SCxDQUFDLEdBQUNPLENBQUMsQ0FBQ2tHLEdBQUYsR0FBTW5HLENBQUMsQ0FBQ21HLEdBQVIsR0FBWWxHLENBQUMsQ0FBQ3FHLEdBQUYsR0FBTXRHLENBQUMsQ0FBQ29HLEdBQXBCLEdBQXdCbkcsQ0FBQyxDQUFDd0csR0FBRixHQUFNekcsQ0FBQyxDQUFDcUcsR0FBOU07QUFBQSxRQUFrTmhGLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ21HLEdBQUYsR0FBTXBHLENBQUMsQ0FBQ21HLEdBQVIsR0FBWWxHLENBQUMsQ0FBQ3NHLEdBQUYsR0FBTXZHLENBQUMsQ0FBQ29HLEdBQXBCLEdBQXdCbkcsQ0FBQyxDQUFDeUcsR0FBRixHQUFNMUcsQ0FBQyxDQUFDcUcsR0FBcFA7QUFBQSxRQUF3UC9FLENBQUMsR0FBQ3JCLENBQUMsQ0FBQ29HLEdBQUYsR0FBTXJHLENBQUMsQ0FBQ21HLEdBQVIsR0FBWWxHLENBQUMsQ0FBQ3VHLEdBQUYsR0FBTXhHLENBQUMsQ0FBQ29HLEdBQXBCLEdBQXdCbkcsQ0FBQyxDQUFDMEcsR0FBRixHQUFNM0csQ0FBQyxDQUFDcUcsR0FBMVI7QUFBQSxRQUE4UjlFLENBQUMsR0FBQ3RCLENBQUMsQ0FBQ2tHLEdBQUYsR0FBTW5HLENBQUMsQ0FBQ3NHLEdBQVIsR0FBWXJHLENBQUMsQ0FBQ3FHLEdBQUYsR0FBTXRHLENBQUMsQ0FBQ3VHLEdBQXBCLEdBQXdCdEcsQ0FBQyxDQUFDd0csR0FBRixHQUNsZnpHLENBQUMsQ0FBQ3dHLEdBRHdMO0FBQUEsUUFDcEwvRSxDQUFDLEdBQUN4QixDQUFDLENBQUNtRyxHQUFGLEdBQU1wRyxDQUFDLENBQUNzRyxHQUFSLEdBQVlyRyxDQUFDLENBQUNzRyxHQUFGLEdBQU12RyxDQUFDLENBQUN1RyxHQUFwQixHQUF3QnRHLENBQUMsQ0FBQ3lHLEdBQUYsR0FBTTFHLENBQUMsQ0FBQ3dHLEdBRGtKO0FBQUEsUUFDOUk1RSxDQUFDLEdBQUMzQixDQUFDLENBQUNvRyxHQUFGLEdBQU1yRyxDQUFDLENBQUNzRyxHQUFSLEdBQVlyRyxDQUFDLENBQUN1RyxHQUFGLEdBQU14RyxDQUFDLENBQUN1RyxHQUFwQixHQUF3QnRHLENBQUMsQ0FBQzBHLEdBQUYsR0FBTTNHLENBQUMsQ0FBQ3dHLEdBRDRHO0FBQUEsUUFDeEcvQixDQUFDLEdBQUN4RSxDQUFDLENBQUNrRyxHQUFGLEdBQU1uRyxDQUFDLENBQUN5RyxHQUFSLEdBQVl4RyxDQUFDLENBQUNxRyxHQUFGLEdBQU10RyxDQUFDLENBQUMwRyxHQUFwQixHQUF3QnpHLENBQUMsQ0FBQ3dHLEdBQUYsR0FBTXpHLENBQUMsQ0FBQzJHLEdBRHNFO0FBQUEsUUFDbEVRLENBQUMsR0FBQ2xILENBQUMsQ0FBQ21HLEdBQUYsR0FBTXBHLENBQUMsQ0FBQ3lHLEdBQVIsR0FBWXhHLENBQUMsQ0FBQ3NHLEdBQUYsR0FBTXZHLENBQUMsQ0FBQzBHLEdBQXBCLEdBQXdCekcsQ0FBQyxDQUFDeUcsR0FBRixHQUFNMUcsQ0FBQyxDQUFDMkcsR0FEZ0M7QUFBQSxRQUM1QlMsQ0FBQyxHQUFDbkgsQ0FBQyxDQUFDb0csR0FBRixHQUFNckcsQ0FBQyxDQUFDeUcsR0FBUixHQUFZeEcsQ0FBQyxDQUFDdUcsR0FBRixHQUFNeEcsQ0FBQyxDQUFDMEcsR0FBcEIsR0FBd0J6RyxDQUFDLENBQUMwRyxHQUFGLEdBQU0zRyxDQUFDLENBQUMyRyxHQUROO0FBQ1UzRyxLQUFDLEdBQUNxRSxDQUFDLENBQUNDLFdBQUYsQ0FBY3ZFLENBQUMsQ0FBQytHLFNBQWhCLEVBQTBCL0csQ0FBQyxDQUFDK0csU0FBNUIsQ0FBRjs7QUFBeUM3RyxLQUFDLEdBQUMsV0FBQ0gsQ0FBRCxFQUFHQyxDQUFILEVBQU87QUFBQyxVQUFNQyxDQUFDLEdBQUNzQixDQUFDLEdBQUN4QixDQUFGLEdBQUk4QixDQUFDLEdBQUM3QixDQUFOLEdBQVFxSCxDQUFoQjtBQUFrQixhQUFNO0FBQUN6QyxTQUFDLEVBQUMsQ0FBQ2pGLENBQUMsR0FBQ0ksQ0FBRixHQUFJeUIsQ0FBQyxHQUFDeEIsQ0FBTixHQUFRMEUsQ0FBVCxJQUFZekUsQ0FBZjtBQUFpQmMsU0FBQyxFQUFDLENBQUNPLENBQUMsR0FBQ3ZCLENBQUYsR0FBSTJCLENBQUMsR0FBQzFCLENBQU4sR0FBUW9ILENBQVQsSUFBWW5IO0FBQS9CLE9BQU47QUFBd0MsS0FBcEU7O0FBQXFFLFNBQUksSUFBSU4sR0FBQyxHQUFDLENBQVYsRUFBWUEsR0FBQyxHQUFDSyxDQUFDLENBQUMrRyxTQUFoQixFQUEwQnBILEdBQUMsRUFBM0I7QUFBOEIsV0FBSSxJQUFJNEIsRUFBQyxHQUFDLENBQVYsRUFBWUEsRUFBQyxHQUFDdkIsQ0FBQyxDQUFDK0csU0FBaEIsRUFBMEJ4RixFQUFDLEVBQTNCLEVBQThCO0FBQUMsWUFBSXZCLEdBQUMsR0FBQ0UsQ0FBQyxDQUFDcUIsRUFBQyxHQUFDLEVBQUgsRUFBTTVCLEdBQUMsR0FBQyxFQUFSLENBQVA7O0FBQW1CTSxTQUFDLENBQUNzRCxHQUFGLENBQU1oQyxFQUFOLEVBQVE1QixHQUFSLEVBQVVJLENBQUMsQ0FBQzRFLEdBQUYsQ0FBTWhELElBQUksQ0FBQ0MsS0FBTCxDQUFXNUIsR0FBQyxDQUFDNEUsQ0FBYixDQUFOLEVBQXNCakQsSUFBSSxDQUFDQyxLQUFMLENBQVc1QixHQUFDLENBQUNlLENBQWIsQ0FBdEIsQ0FBVjtBQUFrRDtBQUFsSTs7QUFBa0ksV0FBTTtBQUFDdUcsWUFBTSxFQUFDckgsQ0FBUjtBQUFVc0gscUJBQWUsRUFBQ3JIO0FBQTFCLEtBQU47QUFBbUM7O0FBQUEsV0FBU3NILENBQVQsQ0FBV3pILENBQVgsRUFBYTtBQUFDLFdBQU9BLENBQUMsQ0FBQ21HLE1BQUYsQ0FBUyxVQUFDbkcsQ0FBRCxFQUNyZkUsQ0FEcWY7QUFBQSxhQUNqZkYsQ0FBQyxHQUFDRSxDQUQrZTtBQUFBLEtBQVQsQ0FBUDtBQUM1ZDs7QUFBQSxXQUFTd0gsRUFBVCxDQUFZMUgsQ0FBWixFQUFjQyxDQUFkLEVBQWdCQyxDQUFoQixFQUFrQjtBQUFBOztBQUFDLFFBQUlDLENBQUMsR0FBQzBFLENBQUMsQ0FBQzdFLENBQUQsRUFBR0MsQ0FBSCxDQUFQO0FBQUEsUUFBYUwsQ0FBQyxHQUFDaUYsQ0FBQyxDQUFDNUUsQ0FBRCxFQUFHQyxDQUFILENBQWhCO0FBQUEsUUFBc0JxQixDQUFDLEdBQUNzRCxDQUFDLENBQUM3RSxDQUFELEVBQUdFLENBQUgsQ0FBekI7QUFBQSxRQUErQnNCLENBQS9CO0FBQUEsUUFBaUNDLENBQWpDO0FBQUEsUUFBbUNFLENBQW5DO0FBQXFDL0IsS0FBQyxJQUFFTyxDQUFILElBQU1QLENBQUMsSUFBRTJCLENBQVQsWUFBbUIsQ0FBQ3RCLENBQUQsRUFBR0QsQ0FBSCxFQUFLRSxDQUFMLENBQW5CLEVBQVlzQixDQUFaLGFBQWNDLENBQWQsYUFBZ0JFLENBQWhCLHNCQUEyQkosQ0FBQyxJQUFFM0IsQ0FBSCxJQUFNMkIsQ0FBQyxJQUFFcEIsQ0FBVCxZQUFtQixDQUFDSCxDQUFELEVBQUdDLENBQUgsRUFBS0MsQ0FBTCxDQUFuQixFQUFZc0IsQ0FBWixhQUFjQyxDQUFkLGFBQWdCRSxDQUFoQiwrQkFBbUMsQ0FBQzNCLENBQUQsRUFBR0UsQ0FBSCxFQUFLRCxDQUFMLENBQW5DLEVBQTRCdUIsQ0FBNUIsYUFBOEJDLENBQTlCLGFBQWdDRSxDQUFoQyxtQkFBM0I7QUFBc0UsUUFBRSxDQUFDQSxDQUFDLENBQUNrRCxDQUFGLEdBQUlwRCxDQUFDLENBQUNvRCxDQUFQLEtBQVdyRCxDQUFDLENBQUNSLENBQUYsR0FBSVMsQ0FBQyxDQUFDVCxDQUFqQixJQUFvQixDQUFDVyxDQUFDLENBQUNYLENBQUYsR0FBSVMsQ0FBQyxDQUFDVCxDQUFQLEtBQVdRLENBQUMsQ0FBQ3FELENBQUYsR0FBSXBELENBQUMsQ0FBQ29ELENBQWpCLENBQXRCLGFBQWtELENBQUNsRCxDQUFELEVBQUdILENBQUgsQ0FBbEQsRUFBNkNBLENBQTdDLGFBQStDRyxDQUEvQztBQUF5RCxXQUFNO0FBQUN5RixnQkFBVSxFQUFDNUYsQ0FBWjtBQUFjeUYsYUFBTyxFQUFDeEYsQ0FBdEI7QUFBd0J5RixjQUFRLEVBQUN2RjtBQUFqQyxLQUFOO0FBQTBDOztBQUFBLFdBQVNnRyxFQUFULENBQVkzSCxDQUFaLEVBQWNDLENBQWQsRUFBZ0JDLENBQWhCLEVBQWtCQyxDQUFsQixFQUFvQjtBQUFDQSxLQUFDLEdBQUMsQ0FBQ3NILENBQUMsQ0FBQ0csQ0FBQyxDQUFDNUgsQ0FBRCxFQUFHRSxDQUFILEVBQUtDLENBQUwsRUFBTyxDQUFQLENBQUYsQ0FBRCxHQUFjLENBQWQsR0FBZ0JzSCxDQUFDLENBQUNHLENBQUMsQ0FBQzVILENBQUQsRUFBR0MsQ0FBSCxFQUFLRSxDQUFMLEVBQU8sQ0FBUCxDQUFGLENBQUQsR0FBYyxDQUE5QixHQUFnQ3NILENBQUMsQ0FBQ0csQ0FBQyxDQUFDMUgsQ0FBRCxFQUFHRixDQUFILEVBQUtHLENBQUwsRUFBTyxDQUFQLENBQUYsQ0FBRCxHQUFjLENBQTlDLEdBQWdEc0gsQ0FBQyxDQUFDRyxDQUFDLENBQUMzSCxDQUFELEVBQUdELENBQUgsRUFBS0csQ0FBTCxFQUFPLENBQVAsQ0FBRixDQUFELEdBQWMsQ0FBL0QsSUFBa0UsQ0FBcEU7QUFBc0UsUUFBRyxJQUFFQSxDQUFMLEVBQU8sTUFBTXVCLEtBQUssQ0FBQyxxQkFBRCxDQUFYO0FBQW1DekIsS0FBQyxHQUFDMkIsSUFBSSxDQUFDaUcsS0FBTCxDQUFXaEQsQ0FBQyxDQUFDN0UsQ0FBRCxFQUFHQyxDQUFILENBQUQsR0FBT0UsQ0FBbEIsQ0FBRjtBQUF1QkgsS0FBQyxHQUFDNEIsSUFBSSxDQUFDaUcsS0FBTCxDQUFXaEQsQ0FBQyxDQUFDN0UsQ0FBRCxFQUFHRSxDQUFILENBQUQsR0FBT0MsQ0FBbEIsQ0FBRjtBQUF1QkgsS0FBQyxHQUFDNEIsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQzVCLENBQUMsR0FBQ0QsQ0FBSCxJQUFNLENBQWpCLElBQW9CLENBQXRCOztBQUF3QixZQUFPQSxDQUFDLEdBQUMsQ0FBVDtBQUFZLFdBQUssQ0FBTDtBQUFPQSxTQUFDO0FBQUc7O0FBQU0sV0FBSyxDQUFMO0FBQU9BLFNBQUM7QUFBckM7O0FBQXdDLFdBQU07QUFBQ2dILGVBQVMsRUFBQ2hILENBQVg7QUFBYThILGdCQUFVLEVBQUMzSDtBQUF4QixLQUFOO0FBQWlDOztBQUM5ZixXQUFTNEgsQ0FBVCxDQUFXL0gsQ0FBWCxFQUFhQyxDQUFiLEVBQWVDLENBQWYsRUFBaUJDLENBQWpCLEVBQW1CO0FBQUMsUUFBSVAsQ0FBQyxHQUFDLENBQUM7QUFBQ2lGLE9BQUMsRUFBQ2pELElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsQ0FBQyxDQUFDNkUsQ0FBYixDQUFIO0FBQW1CN0QsT0FBQyxFQUFDWSxJQUFJLENBQUNDLEtBQUwsQ0FBVzdCLENBQUMsQ0FBQ2dCLENBQWI7QUFBckIsS0FBRCxDQUFOO0FBQThDLFFBQUlPLENBQUMsR0FBQ0ssSUFBSSxDQUFDb0csR0FBTCxDQUFTL0gsQ0FBQyxDQUFDZSxDQUFGLEdBQUloQixDQUFDLENBQUNnQixDQUFmLElBQWtCWSxJQUFJLENBQUNvRyxHQUFMLENBQVMvSCxDQUFDLENBQUM0RSxDQUFGLEdBQUk3RSxDQUFDLENBQUM2RSxDQUFmLENBQXhCOztBQUEwQyxRQUFHdEQsQ0FBSCxFQUFLO0FBQUMsVUFBSUMsQ0FBQyxHQUFDSSxJQUFJLENBQUNDLEtBQUwsQ0FBVzdCLENBQUMsQ0FBQ2dCLENBQWIsQ0FBTjtBQUFzQixVQUFJUyxDQUFDLEdBQUNHLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsQ0FBQyxDQUFDNkUsQ0FBYixDQUFOO0FBQXNCN0UsT0FBQyxHQUFDNEIsSUFBSSxDQUFDQyxLQUFMLENBQVc1QixDQUFDLENBQUNlLENBQWIsQ0FBRjtBQUFrQmYsT0FBQyxHQUFDMkIsSUFBSSxDQUFDQyxLQUFMLENBQVc1QixDQUFDLENBQUM0RSxDQUFiLENBQUY7QUFBa0IsS0FBdEYsTUFBMkZyRCxDQUFDLEdBQUNJLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsQ0FBQyxDQUFDNkUsQ0FBYixDQUFGLEVBQWtCcEQsQ0FBQyxHQUFDRyxJQUFJLENBQUNDLEtBQUwsQ0FBVzdCLENBQUMsQ0FBQ2dCLENBQWIsQ0FBcEIsRUFBb0NoQixDQUFDLEdBQUM0QixJQUFJLENBQUNDLEtBQUwsQ0FBVzVCLENBQUMsQ0FBQzRFLENBQWIsQ0FBdEMsRUFBc0Q1RSxDQUFDLEdBQUMyQixJQUFJLENBQUNDLEtBQUwsQ0FBVzVCLENBQUMsQ0FBQ2UsQ0FBYixDQUF4RDs7QUFBd0UsUUFBSVcsQ0FBQyxHQUFDQyxJQUFJLENBQUNvRyxHQUFMLENBQVNoSSxDQUFDLEdBQUN3QixDQUFYLENBQU47QUFBQSxRQUFvQk0sQ0FBQyxHQUFDRixJQUFJLENBQUNvRyxHQUFMLENBQVMvSCxDQUFDLEdBQUN3QixDQUFYLENBQXRCO0FBQUEsUUFBb0NrRCxDQUFDLEdBQUMvQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDRixDQUFELEdBQUcsQ0FBZCxDQUF0QztBQUFBLFFBQXVEMEYsQ0FBQyxHQUFDN0YsQ0FBQyxHQUFDeEIsQ0FBRixHQUFJLENBQUosR0FBTSxDQUFDLENBQWhFO0FBQUEsUUFBa0VzSCxDQUFDLEdBQUM3RixDQUFDLEdBQUN4QixDQUFGLEdBQUksQ0FBSixHQUFNLENBQUMsQ0FBM0U7QUFBQSxRQUE2RWdJLENBQUMsR0FBQyxDQUFDLENBQWhGOztBQUFrRixTQUFJLElBQUlDLENBQUMsR0FBQzFHLENBQU4sRUFBUTJHLENBQUMsR0FBQzFHLENBQWQsRUFBZ0J5RyxDQUFDLEtBQUdsSSxDQUFDLEdBQUNxSCxDQUF0QixFQUF3QmEsQ0FBQyxJQUFFYixDQUEzQixFQUE2QjtBQUFDN0YsT0FBQyxHQUFDRCxDQUFDLEdBQUM0RyxDQUFELEdBQUdELENBQU47QUFBUXpHLE9BQUMsR0FBQ0YsQ0FBQyxHQUFDMkcsQ0FBRCxHQUFHQyxDQUFOO0FBQVEsVUFBR2pJLENBQUMsQ0FBQzBFLEdBQUYsQ0FBTXBELENBQU4sRUFBUUMsQ0FBUixNQUFhd0csQ0FBYixLQUFpQkEsQ0FBQyxHQUFDLENBQUNBLENBQUgsRUFBS3JJLENBQUMsQ0FBQ1MsSUFBRixDQUFPO0FBQUN3RSxTQUFDLEVBQUNyRCxDQUFIO0FBQUtSLFNBQUMsRUFBQ1M7QUFBUCxPQUFQLENBQUwsRUFBdUI3QixDQUFDLENBQUMyRCxNQUFGLEtBQVdwRCxDQUFDLEdBQUMsQ0FBckQsQ0FBSCxFQUEyRDtBQUFNd0UsT0FBQyxJQUFFN0MsQ0FBSDs7QUFBSyxVQUFHLElBQUU2QyxDQUFMLEVBQU87QUFBQyxZQUFHd0QsQ0FBQyxLQUFHbEksQ0FBUCxFQUFTO0FBQU1rSSxTQUFDLElBQUViLENBQUg7QUFBSzNDLFNBQUMsSUFBRWhELENBQUg7QUFBSztBQUFDOztBQUFBekIsS0FBQyxHQUN4ZixFQUR1Zjs7QUFDcGYsU0FBSXFCLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ3BCLENBQVYsRUFBWW9CLENBQUMsRUFBYjtBQUFnQjNCLE9BQUMsQ0FBQzJCLENBQUQsQ0FBRCxJQUFNM0IsQ0FBQyxDQUFDMkIsQ0FBQyxHQUFDLENBQUgsQ0FBUCxHQUFhckIsQ0FBQyxDQUFDRyxJQUFGLENBQU93RSxDQUFDLENBQUNqRixDQUFDLENBQUMyQixDQUFELENBQUYsRUFBTTNCLENBQUMsQ0FBQzJCLENBQUMsR0FBQyxDQUFILENBQVAsQ0FBUixDQUFiLEdBQW9DckIsQ0FBQyxDQUFDRyxJQUFGLENBQU8sQ0FBUCxDQUFwQztBQUFoQjs7QUFBOEQsV0FBT0gsQ0FBUDtBQUFTOztBQUFBLFdBQVMwSCxDQUFULENBQVc1SCxDQUFYLEVBQWFDLENBQWIsRUFBZUMsQ0FBZixFQUFpQkMsQ0FBakIsRUFBbUI7QUFBQTs7QUFBQyxRQUFJUCxDQUFDLEdBQUNLLENBQUMsQ0FBQ2UsQ0FBRixHQUFJaEIsQ0FBQyxDQUFDZ0IsQ0FBWjtBQUFBLFFBQWNPLENBQUMsR0FBQ3RCLENBQUMsQ0FBQzRFLENBQUYsR0FBSTdFLENBQUMsQ0FBQzZFLENBQXRCO0FBQXdCNUUsS0FBQyxHQUFDOEgsQ0FBQyxDQUFDL0gsQ0FBRCxFQUFHQyxDQUFILEVBQUtDLENBQUwsRUFBTzBCLElBQUksQ0FBQ3dHLElBQUwsQ0FBVWpJLENBQUMsR0FBQyxDQUFaLENBQVAsQ0FBSDtBQUEwQkgsS0FBQyxHQUFDK0gsQ0FBQyxDQUFDL0gsQ0FBRCxFQUFHO0FBQUM2RSxPQUFDLEVBQUM3RSxDQUFDLENBQUM2RSxDQUFGLEdBQUl0RCxDQUFQO0FBQVNQLE9BQUMsRUFBQ2hCLENBQUMsQ0FBQ2dCLENBQUYsR0FBSXBCO0FBQWYsS0FBSCxFQUFxQk0sQ0FBckIsRUFBdUIwQixJQUFJLENBQUN3RyxJQUFMLENBQVVqSSxDQUFDLEdBQUMsQ0FBWixDQUF2QixDQUFIO0FBQTBDRCxLQUFDLEdBQUNELENBQUMsQ0FBQytGLEtBQUYsS0FBVWhHLENBQUMsQ0FBQ2dHLEtBQUYsRUFBVixHQUFvQixDQUF0QjtBQUF3QixXQUFPLGFBQUFoRyxDQUFDLENBQUNxSSxNQUFGLENBQVNuSSxDQUFULEdBQVltSSxNQUFaLHFDQUFzQnBJLENBQXRCLEVBQVA7QUFBZ0M7O0FBQUEsV0FBU3FJLENBQVQsQ0FBV3RJLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsUUFBSUMsQ0FBQyxHQUFDdUgsQ0FBQyxDQUFDekgsQ0FBRCxDQUFELEdBQUt5SCxDQUFDLENBQUN4SCxDQUFELENBQVo7QUFBQSxRQUFnQkUsQ0FBQyxHQUFDLENBQWxCO0FBQW9CRixLQUFDLENBQUN3RixPQUFGLENBQVUsVUFBQ3hGLENBQUQsRUFBR3NCLENBQUgsRUFBTztBQUFDcEIsT0FBQyxJQUFFeUIsSUFBSSxDQUFDMkcsR0FBTCxDQUFTdkksQ0FBQyxDQUFDdUIsQ0FBRCxDQUFELEdBQUt0QixDQUFDLEdBQUNDLENBQWhCLEVBQWtCLENBQWxCLENBQUg7QUFBd0IsS0FBMUM7QUFBNEMsV0FBTTtBQUFDc0ksaUJBQVcsRUFBQ3RJLENBQWI7QUFBZXVJLFdBQUssRUFBQ3RJO0FBQXJCLEtBQU47QUFBOEI7O0FBQUEsV0FBU3VJLENBQVQsQ0FBVzFJLENBQVgsRUFBYUMsQ0FBYixFQUFlQyxDQUFmLEVBQWlCO0FBQUMsUUFBRztBQUFDLFVBQUlDLENBQUMsR0FBQ3lILENBQUMsQ0FBQzVILENBQUQsRUFBRztBQUFDNkUsU0FBQyxFQUFDLENBQUMsQ0FBSjtBQUFNN0QsU0FBQyxFQUFDaEIsQ0FBQyxDQUFDZ0I7QUFBVixPQUFILEVBQWdCZCxDQUFoQixFQUFrQkQsQ0FBQyxDQUFDc0QsTUFBcEIsQ0FBUDtBQUFBLFVBQW1DM0QsQ0FBQyxHQUFDZ0ksQ0FBQyxDQUFDNUgsQ0FBRCxFQUFHO0FBQUM2RSxTQUFDLEVBQUM3RSxDQUFDLENBQUM2RSxDQUFMO0FBQU83RCxTQUFDLEVBQUMsQ0FBQztBQUFWLE9BQUgsRUFBZ0JkLENBQWhCLEVBQWtCRCxDQUFDLENBQUNzRCxNQUFwQixDQUF0QztBQUFBLFVBQWtFaEMsQ0FBQyxHQUFDcUcsQ0FBQyxDQUFDNUgsQ0FBRCxFQUFHO0FBQUM2RSxTQUFDLEVBQUNqRCxJQUFJLENBQUMrRyxHQUFMLENBQVMsQ0FBVCxFQUFXM0ksQ0FBQyxDQUFDNkUsQ0FBRixHQUFJN0UsQ0FBQyxDQUFDZ0IsQ0FBakIsSUFBb0IsQ0FBdkI7QUFBeUJBLFNBQUMsRUFBQ1ksSUFBSSxDQUFDK0csR0FBTCxDQUFTLENBQVQsRUFBVzNJLENBQUMsQ0FBQ2dCLENBQUYsR0FBSWhCLENBQUMsQ0FBQzZFLENBQWpCLElBQW9CO0FBQS9DLE9BQUgsRUFBcUQzRSxDQUFyRCxFQUF1REQsQ0FBQyxDQUFDc0QsTUFBekQsQ0FBckU7QUFBQSxVQUN0WC9CLENBQUMsR0FBQ29HLENBQUMsQ0FBQzVILENBQUQsRUFBRztBQUFDNkUsU0FBQyxFQUFDakQsSUFBSSxDQUFDZ0gsR0FBTCxDQUFTMUksQ0FBQyxDQUFDMkksS0FBWCxFQUFpQjdJLENBQUMsQ0FBQzZFLENBQUYsR0FBSTdFLENBQUMsQ0FBQ2dCLENBQXZCLElBQTBCLENBQTdCO0FBQStCQSxTQUFDLEVBQUNZLElBQUksQ0FBQ2dILEdBQUwsQ0FBUzFJLENBQUMsQ0FBQ21FLE1BQVgsRUFBa0JyRSxDQUFDLENBQUNnQixDQUFGLEdBQUloQixDQUFDLENBQUM2RSxDQUF4QixJQUEyQjtBQUE1RCxPQUFILEVBQWtFM0UsQ0FBbEUsRUFBb0VELENBQUMsQ0FBQ3NELE1BQXRFLENBRG1YO0FBQUEsVUFDclM5QixDQUFDLEdBQUM2RyxDQUFDLENBQUNuSSxDQUFELEVBQUdGLENBQUgsQ0FEa1M7QUFBQSxVQUM1UjBCLENBQUMsR0FBQzJHLENBQUMsQ0FBQzFJLENBQUQsRUFBR0ssQ0FBSCxDQUR5UjtBQUFBLFVBQ25SNkIsQ0FBQyxHQUFDd0csQ0FBQyxDQUFDL0csQ0FBRCxFQUFHdEIsQ0FBSCxDQURnUjtBQUFBLFVBQzFRMEUsQ0FBQyxHQUFDMkQsQ0FBQyxDQUFDOUcsQ0FBRCxFQUFHdkIsQ0FBSCxDQUR1UTtBQUFBLFVBQ2pRb0gsQ0FBQyxHQUFDLENBQUM1RixDQUFDLENBQUMrRyxXQUFGLEdBQWM3RyxDQUFDLENBQUM2RyxXQUFoQixHQUE0QjFHLENBQUMsQ0FBQzBHLFdBQTlCLEdBQTBDN0QsQ0FBQyxDQUFDNkQsV0FBN0MsSUFBMEQsQ0FEcU07QUFDbk0sYUFBTzVHLElBQUksQ0FBQ2tILElBQUwsQ0FBVXJILENBQUMsQ0FBQ2dILEtBQUYsR0FBUWhILENBQUMsQ0FBQ2dILEtBQVYsR0FBZ0I5RyxDQUFDLENBQUM4RyxLQUFGLEdBQVE5RyxDQUFDLENBQUM4RyxLQUExQixHQUFnQzNHLENBQUMsQ0FBQzJHLEtBQUYsR0FBUTNHLENBQUMsQ0FBQzJHLEtBQTFDLEdBQWdEOUQsQ0FBQyxDQUFDOEQsS0FBRixHQUFROUQsQ0FBQyxDQUFDOEQsS0FBcEUsSUFBMkUsQ0FBQzdHLElBQUksQ0FBQzJHLEdBQUwsQ0FBUzlHLENBQUMsQ0FBQytHLFdBQUYsR0FBY25CLENBQXZCLEVBQXlCLENBQXpCLElBQTRCekYsSUFBSSxDQUFDMkcsR0FBTCxDQUFTNUcsQ0FBQyxDQUFDNkcsV0FBRixHQUFjbkIsQ0FBdkIsRUFBeUIsQ0FBekIsQ0FBNUIsR0FBd0R6RixJQUFJLENBQUMyRyxHQUFMLENBQVN6RyxDQUFDLENBQUMwRyxXQUFGLEdBQWNuQixDQUF2QixFQUF5QixDQUF6QixDQUF4RCxHQUFvRnpGLElBQUksQ0FBQzJHLEdBQUwsQ0FBUzVELENBQUMsQ0FBQzZELFdBQUYsR0FBY25CLENBQXZCLEVBQXlCLENBQXpCLENBQXJGLElBQWtIQSxDQUFwTTtBQUFzTSxLQURQLENBQ08sT0FBTWxILENBQU4sRUFBUTtBQUFDLGFBQU82RSxRQUFQO0FBQWdCO0FBQUM7O0FBQUEsV0FBUytELEVBQVQsQ0FBWS9JLENBQVosRUFBYztBQUFBOztBQUFDLFFBQUlDLENBQUMsR0FBQyxFQUFOO0FBQUEsUUFBU0MsQ0FBQyxHQUFDLEVBQVg7QUFBQSxRQUFjQyxDQUFDLEdBQUMsRUFBaEI7QUFBQSxRQUFtQlAsQ0FBQyxHQUFDLEVBQXJCOztBQUFELCtCQUFpQ3NJLENBQWpDO0FBQUE7O0FBQXNELFVBQUl2RyxDQUFDLEdBQUMsQ0FBTjtBQUFBLFVBQVFHLENBQUMsR0FBQyxDQUFDLENBQVg7QUFBQSxVQUFhd0YsQ0FBQyxHQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBZjs7QUFBMkIsV0FBSSxJQUFJckgsR0FBQyxHQUMzZixDQUFDLENBRGlmLEVBQy9lQSxHQUFDLElBQUVELENBQUMsQ0FBQzZJLEtBRDBlLEVBQ3BlNUksR0FBQyxFQURtZSxFQUNoZTtBQUFLc0IsU0FBQyxHQUFDdkIsQ0FBQyxDQUFDNEUsR0FBRixDQUFNM0UsR0FBTixFQUFRaUksQ0FBUixDQUFQO0FBQWtCLFlBQUczRyxDQUFDLEtBQUdPLENBQVAsRUFBU0gsQ0FBQyxHQUFWLEtBQWlCO0FBQUMyRixXQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQLEVBQVdBLENBQUMsQ0FBQyxDQUFELENBQVosRUFBZ0JBLENBQUMsQ0FBQyxDQUFELENBQWpCLEVBQXFCM0YsQ0FBckIsQ0FBRjtBQUEwQkEsV0FBQyxHQUFDLENBQUY7QUFBSUcsV0FBQyxHQUFDUCxDQUFGO0FBQVFDLFdBQUMsR0FBQ2lHLENBQUMsQ0FBQ0gsQ0FBRCxDQUFELEdBQUssQ0FBOUM7QUFBZ0Q5RixXQUFDLEdBQUNJLElBQUksQ0FBQ29HLEdBQUwsQ0FBU1YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLOUYsQ0FBZCxJQUFpQkEsQ0FBakIsSUFBb0JJLElBQUksQ0FBQ29HLEdBQUwsQ0FBU1YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLOUYsQ0FBZCxJQUFpQkEsQ0FBckMsSUFBd0NJLElBQUksQ0FBQ29HLEdBQUwsQ0FBU1YsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLElBQUU5RixDQUFoQixJQUFtQixJQUFFQSxDQUE3RCxJQUFnRUksSUFBSSxDQUFDb0csR0FBTCxDQUFTVixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs5RixDQUFkLElBQWlCQSxDQUFqRixJQUFvRkksSUFBSSxDQUFDb0csR0FBTCxDQUFTVixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs5RixDQUFkLElBQWlCQSxDQUFyRyxJQUF3RyxDQUFDRCxDQUEzRztBQUFpSEUsV0FBQyxHQUFDZ0csQ0FBQyxDQUFDSCxDQUFDLENBQUN2QixLQUFGLENBQVEsQ0FBQyxDQUFULENBQUQsQ0FBRCxHQUFlLENBQWxMO0FBQW9MeEUsV0FBQyxHQUFDSyxJQUFJLENBQUNvRyxHQUFMLENBQVNWLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSzdGLENBQWQsSUFBaUJBLENBQWpCLElBQW9CRyxJQUFJLENBQUNvRyxHQUFMLENBQVNWLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSzdGLENBQWQsSUFBaUJBLENBQXJDLElBQXdDRyxJQUFJLENBQUNvRyxHQUFMLENBQVNWLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSzdGLENBQWQsSUFBaUJBLENBQXpELElBQTRERixDQUE5RDs7QUFBZ0UsY0FBR0MsQ0FBSCxFQUFLO0FBQUE7QUFBQyxrQkFBSXhCLENBQUMsR0FBQ0MsR0FBQyxHQUFDcUgsQ0FBQyxDQUFDLENBQUQsQ0FBSCxHQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFkO0FBQUEsa0JBQWtCbkgsQ0FBQyxHQUFDSCxDQUFDLEdBQUNzSCxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUEyQjlGLGVBQUMsR0FBQztBQUFDd0gsc0JBQU0sRUFBQzdJLENBQVI7QUFBVThJLG9CQUFJLEVBQUNqSixDQUFmO0FBQWlCZ0IsaUJBQUMsRUFBQ2tIO0FBQW5CLGVBQUY7QUFBd0J6RyxlQUFDLEdBQUN2QixDQUFDLENBQUNnSixNQUFGLENBQVMsVUFBQ2pKLENBQUQ7QUFBQSx1QkFBS0UsQ0FBQyxJQUFFRixDQUFDLENBQUNrSixNQUFGLENBQVNILE1BQVosSUFBb0I3SSxDQUFDLElBQUVGLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0YsSUFBaEMsSUFBc0NqSixDQUFDLElBQUVDLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBWixJQUFvQjdJLENBQUMsSUFBRUYsQ0FBQyxDQUFDa0osTUFBRixDQUFTRixJQUF0RSxJQUE0RTlJLENBQUMsSUFBRUYsQ0FBQyxDQUFDa0osTUFBRixDQUFTSCxNQUFaLElBQW9CaEosQ0FBQyxJQUFFQyxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQWhDLElBQXNDLE1BQUkzQixDQUFDLENBQUMsQ0FBRCxDQUFELElBQU1ySCxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQVQsR0FDOWVoSixDQUFDLENBQUNrSixNQUFGLENBQVNILE1BRCtkLENBQTFDLElBQzVhLEtBQUcxQixDQUFDLENBQUMsQ0FBRCxDQUFELElBQU1ySCxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQVQsR0FBY2hKLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBN0IsQ0FEd1Y7QUFBQSxlQUFULENBQUY7QUFDdlMsa0JBQUV2SCxDQUFDLENBQUM4QixNQUFKLEdBQVc5QixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUswSCxNQUFMLEdBQVkzSCxDQUF2QixHQUF5QnRCLENBQUMsQ0FBQ0csSUFBRixDQUFPO0FBQUMrSSxtQkFBRyxFQUFDNUgsQ0FBTDtBQUFPMkgsc0JBQU0sRUFBQzNIO0FBQWQsZUFBUCxDQUF6QjtBQURtUDtBQUNqTTs7QUFBQSxjQUFHRCxDQUFILEVBQUs7QUFBQTtBQUFDLGtCQUFJdkIsQ0FBQyxHQUFDQyxHQUFDLEdBQUNxSCxDQUFDLENBQUMsQ0FBRCxDQUFUO0FBQUEsa0JBQWFwSCxDQUFDLEdBQUNGLENBQUMsR0FBQ3NILENBQUMsQ0FBQyxDQUFELENBQWxCO0FBQXNCL0YsZUFBQyxHQUFDO0FBQUN5SCxzQkFBTSxFQUFDOUksQ0FBUjtBQUFVYyxpQkFBQyxFQUFDa0gsQ0FBWjtBQUFjZSxvQkFBSSxFQUFDako7QUFBbkIsZUFBRjtBQUF3QndCLGVBQUMsR0FBQzVCLENBQUMsQ0FBQ3NKLE1BQUYsQ0FBUyxVQUFDakosQ0FBRDtBQUFBLHVCQUFLQyxDQUFDLElBQUVELENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBWixJQUFvQjlJLENBQUMsSUFBRUQsQ0FBQyxDQUFDa0osTUFBRixDQUFTRixJQUFoQyxJQUFzQ2pKLENBQUMsSUFBRUMsQ0FBQyxDQUFDa0osTUFBRixDQUFTSCxNQUFaLElBQW9COUksQ0FBQyxJQUFFRCxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQXRFLElBQTRFL0ksQ0FBQyxJQUFFRCxDQUFDLENBQUNrSixNQUFGLENBQVNILE1BQVosSUFBb0JoSixDQUFDLElBQUVDLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0YsSUFBaEMsSUFBc0MsTUFBSTNCLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTXJILENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0YsSUFBVCxHQUFjaEosQ0FBQyxDQUFDa0osTUFBRixDQUFTSCxNQUE3QixDQUExQyxJQUFnRixLQUFHMUIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNckgsQ0FBQyxDQUFDa0osTUFBRixDQUFTRixJQUFULEdBQWNoSixDQUFDLENBQUNrSixNQUFGLENBQVNILE1BQTdCLENBQXBLO0FBQUEsZUFBVCxDQUFGO0FBQXFOLGtCQUFFeEgsQ0FBQyxDQUFDK0IsTUFBSixHQUFXL0IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLMkgsTUFBTCxHQUFZNUgsQ0FBdkIsR0FBeUIzQixDQUFDLENBQUNTLElBQUYsQ0FBTztBQUFDK0ksbUJBQUcsRUFBQzdILENBQUw7QUFBTzRILHNCQUFNLEVBQUM1SDtBQUFkLGVBQVAsQ0FBekI7QUFBcFE7QUFBc1Q7QUFBQztBQUFDOztBQUFBLGFBQUF0QixDQUFDLEVBQUNJLElBQUYsK0JBQVVILENBQUMsQ0FBQ2dKLE1BQUYsQ0FBUyxVQUFDbEosQ0FBRDtBQUFBLGVBQUtBLENBQUMsQ0FBQ21KLE1BQUYsQ0FBU25JLENBQVQsS0FBYWtILENBQWIsSUFBZ0IsS0FBR2xJLENBQUMsQ0FBQ21KLE1BQUYsQ0FBU25JLENBQVQsR0FBV2hCLENBQUMsQ0FBQ29KLEdBQUYsQ0FBTXBJLENBQXpDO0FBQUEsT0FBVCxDQUFWOztBQUFnRWQsT0FBQyxHQUFDQSxDQUFDLENBQUNnSixNQUFGLENBQVMsVUFBQ2xKLENBQUQ7QUFBQSxlQUNyZkEsQ0FBQyxDQUFDbUosTUFBRixDQUFTbkksQ0FBVCxLQUFha0gsQ0FEd2U7QUFBQSxPQUFULENBQUY7O0FBQzFkLGFBQUEvSCxDQUFDLEVBQUNFLElBQUYsK0JBQVVULENBQUMsQ0FBQ3NKLE1BQUYsQ0FBUyxVQUFDbEosQ0FBRDtBQUFBLGVBQUtBLENBQUMsQ0FBQ21KLE1BQUYsQ0FBU25JLENBQVQsS0FBYWtILENBQWxCO0FBQUEsT0FBVCxDQUFWOztBQUF5Q3RJLE9BQUMsR0FBQ0EsQ0FBQyxDQUFDc0osTUFBRixDQUFTLFVBQUNsSixDQUFEO0FBQUEsZUFBS0EsQ0FBQyxDQUFDbUosTUFBRixDQUFTbkksQ0FBVCxLQUFha0gsQ0FBbEI7QUFBQSxPQUFULENBQUY7QUFId1c7O0FBQXlCLFNBQUksSUFBSUEsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFbEksQ0FBQyxDQUFDcUUsTUFBakIsRUFBd0I2RCxDQUFDLEVBQXpCLEVBQTRCO0FBQUEsVUFDL2IzRyxDQUQrYjtBQUFBLFVBQzFYQyxDQUQwWDtBQUFBLFVBQ2hRQyxDQURnUTs7QUFBQSxZQUFwQnlHLENBQW9CO0FBRzdYOztBQUFBLFdBQUFqSSxDQUFDLEVBQUNJLElBQUYsK0JBQVVILENBQUMsQ0FBQ2dKLE1BQUYsQ0FBUyxVQUFDbEosQ0FBRDtBQUFBLGFBQUssS0FBR0EsQ0FBQyxDQUFDbUosTUFBRixDQUFTbkksQ0FBVCxHQUFXaEIsQ0FBQyxDQUFDb0osR0FBRixDQUFNcEksQ0FBekI7QUFBQSxLQUFULENBQVY7O0FBQWdELFdBQUFiLENBQUMsRUFBQ0UsSUFBRiwrQkFBVVQsQ0FBVjs7QUFBYUssS0FBQyxHQUFDQSxDQUFDLENBQUNpSixNQUFGLENBQVMsVUFBQ2xKLENBQUQ7QUFBQSxhQUFLLEtBQUdBLENBQUMsQ0FBQ21KLE1BQUYsQ0FBU25JLENBQVQsR0FBV2hCLENBQUMsQ0FBQ29KLEdBQUYsQ0FBTXBJLENBQXpCO0FBQUEsS0FBVCxFQUFxQ1QsR0FBckMsQ0FBeUMsVUFBQ04sQ0FBRCxFQUFLO0FBQUMsVUFBTUMsQ0FBQyxHQUFDLENBQUNELENBQUMsQ0FBQ21KLEdBQUYsQ0FBTUosTUFBTixHQUFhL0ksQ0FBQyxDQUFDbUosR0FBRixDQUFNSCxJQUFuQixHQUF3QmhKLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBakMsR0FBd0MvSSxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQWxELElBQXdELENBQWhFO0FBQUEsVUFBa0U5SSxDQUFDLEdBQUMsQ0FBQ0YsQ0FBQyxDQUFDbUosR0FBRixDQUFNcEksQ0FBTixHQUFRZixDQUFDLENBQUNrSixNQUFGLENBQVNuSSxDQUFqQixHQUFtQixDQUFwQixJQUF1QixDQUEzRjtBQUE2RixVQUFHaEIsQ0FBQyxDQUFDNEUsR0FBRixDQUFNaEQsSUFBSSxDQUFDaUcsS0FBTCxDQUFXM0gsQ0FBWCxDQUFOLEVBQW9CMEIsSUFBSSxDQUFDaUcsS0FBTCxDQUFXMUgsQ0FBWCxDQUFwQixDQUFILEVBQXNDLE9BQU9GLENBQUMsR0FBQyxDQUFDQSxDQUFDLENBQUNtSixHQUFGLENBQU1ILElBQU4sR0FBV2hKLENBQUMsQ0FBQ21KLEdBQUYsQ0FBTUosTUFBbEIsRUFBeUIvSSxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQVQsR0FBY2hKLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBaEQsRUFBdUQvSSxDQUFDLENBQUNrSixNQUFGLENBQVNuSSxDQUFULEdBQVdmLENBQUMsQ0FBQ21KLEdBQUYsQ0FBTXBJLENBQWpCLEdBQW1CLENBQTFFLENBQUYsRUFBK0VmLENBQUMsR0FBQ3dILENBQUMsQ0FBQ3hILENBQUQsQ0FBRCxHQUFLQSxDQUFDLENBQUNzRCxNQUF4RixFQUErRjtBQUFDOEYsYUFBSyxFQUFDWCxDQUFDLENBQUM7QUFBQzdELFdBQUMsRUFBQ2pELElBQUksQ0FBQ2lHLEtBQUwsQ0FBVzNILENBQVgsQ0FBSDtBQUFpQmMsV0FBQyxFQUFDWSxJQUFJLENBQUNpRyxLQUFMLENBQVcxSCxDQUFYO0FBQW5CLFNBQUQsRUFBbUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFuQyxFQUErQ0gsQ0FBL0MsQ0FBUjtBQUEwRDZFLFNBQUMsRUFBQzNFLENBQTVEO0FBQThEYyxTQUFDLEVBQUNiLENBQWhFO0FBQWtFNEQsWUFBSSxFQUFDOUQ7QUFBdkUsT0FBdEc7QUFBZ0wsS0FBbFcsRUFBb1dpSixNQUFwVyxDQUEyVyxVQUFDbEosQ0FBRDtBQUFBLGFBQ25nQixDQUFDLENBQUNBLENBRGlnQjtBQUFBLEtBQTNXLEVBQ25Kc0osSUFEbUosQ0FDOUksVUFBQ3RKLENBQUQsRUFBR0MsQ0FBSDtBQUFBLGFBQU9ELENBQUMsQ0FBQ3FKLEtBQUYsR0FBUXBKLENBQUMsQ0FBQ29KLEtBQWpCO0FBQUEsS0FEOEksRUFDdEg5SSxHQURzSCxDQUNsSCxVQUFDUCxDQUFELEVBQUdDLENBQUgsRUFBS0MsQ0FBTCxFQUFTO0FBQUMsVUFBRyxJQUFFRCxDQUFMLEVBQU8sT0FBTyxJQUFQO0FBQVlDLE9BQUMsR0FBQ0EsQ0FBQyxDQUFDZ0osTUFBRixDQUFTLFVBQUNsSixDQUFELEVBQUdFLENBQUg7QUFBQSxlQUFPRCxDQUFDLEtBQUdDLENBQVg7QUFBQSxPQUFULEVBQXVCSyxHQUF2QixDQUEyQixVQUFDTixDQUFEO0FBQUEsZUFBTTtBQUFDNEUsV0FBQyxFQUFDNUUsQ0FBQyxDQUFDNEUsQ0FBTDtBQUFPN0QsV0FBQyxFQUFDZixDQUFDLENBQUNlLENBQVg7QUFBYXFJLGVBQUssRUFBQ3BKLENBQUMsQ0FBQ29KLEtBQUYsR0FBUXpILElBQUksQ0FBQzJHLEdBQUwsQ0FBU3RJLENBQUMsQ0FBQzhELElBQUYsR0FBTy9ELENBQUMsQ0FBQytELElBQWxCLEVBQXVCLENBQXZCLElBQTBCL0QsQ0FBQyxDQUFDK0QsSUFBdkQ7QUFBNERBLGNBQUksRUFBQzlELENBQUMsQ0FBQzhEO0FBQW5FLFNBQU47QUFBQSxPQUEzQixFQUE0R3VGLElBQTVHLENBQWlILFVBQUN0SixDQUFELEVBQUdDLENBQUg7QUFBQSxlQUFPRCxDQUFDLENBQUNxSixLQUFGLEdBQVFwSixDQUFDLENBQUNvSixLQUFqQjtBQUFBLE9BQWpILENBQUY7QUFBMkksVUFBRyxJQUFFbkosQ0FBQyxDQUFDcUQsTUFBUCxFQUFjLE9BQU8sSUFBUDtBQUFZLFVBQU1wRCxDQUFDLEdBQUNILENBQUMsQ0FBQ3FKLEtBQUYsR0FBUW5KLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS21KLEtBQWIsR0FBbUJuSixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUttSixLQUFoQztBQUFzQyxhQUFNO0FBQUNFLGNBQU0sRUFBQyxDQUFDdkosQ0FBRCxFQUFJcUksTUFBSixDQUFXbkksQ0FBQyxDQUFDNkYsS0FBRixDQUFRLENBQVIsRUFBVSxDQUFWLENBQVgsQ0FBUjtBQUFpQ3NELGFBQUssRUFBQ2xKO0FBQXZDLE9BQU47QUFBZ0QsS0FEdEssRUFDd0srSSxNQUR4SyxDQUMrSyxVQUFDbEosQ0FBRDtBQUFBLGFBQUssQ0FBQyxDQUFDQSxDQUFQO0FBQUEsS0FEL0ssRUFDeUxzSixJQUR6TCxDQUM4TCxVQUFDdEosQ0FBRCxFQUFHQyxDQUFIO0FBQUEsYUFBT0QsQ0FBQyxDQUFDcUosS0FBRixHQUFRcEosQ0FBQyxDQUFDb0osS0FBakI7QUFBQSxLQUQ5TCxDQUFGO0FBQ3dOLFFBQUcsTUFBSXBKLENBQUMsQ0FBQ3NELE1BQVQsRUFBZ0IsT0FBTyxJQUFQOztBQUptQyxjQUlpQm1FLEVBQUUsQ0FBQ3pILENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3NKLE1BQUwsQ0FBWSxDQUFaLENBQUQsRUFBZ0J0SixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtzSixNQUFMLENBQVksQ0FBWixDQUFoQixFQUErQnRKLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3NKLE1BQUwsQ0FBWSxDQUFaLENBQS9CLENBSm5CO0FBQUEsUUFJVDVILENBSlMsT0FJbEJ1RixRQUprQjtBQUFBLFFBSUNwRixDQUpELE9BSVBtRixPQUpPO0FBQUEsUUFJY3RDLENBSmQsT0FJR3lDLFVBSkg7O0FBSWtFLFFBQUlDLENBQUo7O0FBQU0sUUFBRztBQUFBLGdCQUM5ZE0sRUFBRSxDQUFDN0YsQ0FBRCxFQUFHSCxDQUFILEVBQUtnRCxDQUFMLEVBQU8zRSxDQUFQLENBRDRkOztBQUFhcUgsT0FBYixPQUFHTCxTQUFIO0FBQ2plTSxPQURpZSxPQUM1ZVEsVUFENGU7QUFDamQsS0FEOGMsQ0FDOWMsT0FBTUksQ0FBTixFQUFRO0FBQUMsYUFBTyxJQUFQO0FBQVk7O0FBQUFqSSxLQUFDLEdBQUMwQixDQUFDLENBQUNrRCxDQUFGLEdBQUkvQyxDQUFDLENBQUMrQyxDQUFOLEdBQVFGLENBQUMsQ0FBQ0UsQ0FBWjtBQUFjM0UsS0FBQyxHQUFDeUIsQ0FBQyxDQUFDWCxDQUFGLEdBQUljLENBQUMsQ0FBQ2QsQ0FBTixHQUFRMkQsQ0FBQyxDQUFDM0QsQ0FBWjtBQUFjLFFBQUlzRyxDQUFDLEdBQUMsQ0FBQ3pDLENBQUMsQ0FBQy9DLENBQUQsRUFBRzZDLENBQUgsQ0FBRCxHQUFPRSxDQUFDLENBQUMvQyxDQUFELEVBQUdILENBQUgsQ0FBVCxJQUFnQixDQUFoQixHQUFrQjJGLENBQXhCO0FBQTBCMUgsS0FBQyxHQUFDLElBQUUsSUFBRTBILENBQU47QUFBUSxRQUFJVyxDQUFDLEdBQUM7QUFBQ3BELE9BQUMsRUFBQy9DLENBQUMsQ0FBQytDLENBQUYsR0FBSWpGLENBQUMsSUFBRUssQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDK0MsQ0FBTixDQUFSO0FBQWlCN0QsT0FBQyxFQUFDYyxDQUFDLENBQUNkLENBQUYsR0FBSXBCLENBQUMsSUFBRU0sQ0FBQyxHQUFDNEIsQ0FBQyxDQUFDZCxDQUFOO0FBQXhCLEtBQU47QUFBd0NiLEtBQUMsR0FBQ0EsQ0FBQyxDQUFDSSxHQUFGLENBQU0sVUFBQ04sQ0FBRCxFQUFLO0FBQUMsVUFBTUMsQ0FBQyxHQUFDLENBQUNELENBQUMsQ0FBQ21KLEdBQUYsQ0FBTUosTUFBTixHQUFhL0ksQ0FBQyxDQUFDbUosR0FBRixDQUFNSCxJQUFuQixHQUF3QmhKLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBakMsR0FBd0MvSSxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQWxELElBQXdELENBQWhFO0FBQUEsVUFBa0U5SSxDQUFDLEdBQUMsQ0FBQ0YsQ0FBQyxDQUFDbUosR0FBRixDQUFNcEksQ0FBTixHQUFRZixDQUFDLENBQUNrSixNQUFGLENBQVNuSSxDQUFqQixHQUFtQixDQUFwQixJQUF1QixDQUEzRjtBQUE2RixVQUFHaEIsQ0FBQyxDQUFDNEUsR0FBRixDQUFNaEQsSUFBSSxDQUFDQyxLQUFMLENBQVczQixDQUFYLENBQU4sRUFBb0IwQixJQUFJLENBQUNDLEtBQUwsQ0FBVzFCLENBQVgsQ0FBcEIsQ0FBSCxFQUFzQyxPQUFPc0gsQ0FBQyxDQUFDLENBQUN4SCxDQUFDLENBQUNtSixHQUFGLENBQU1ILElBQU4sR0FBV2hKLENBQUMsQ0FBQ21KLEdBQUYsQ0FBTUosTUFBbEIsRUFBeUIvSSxDQUFDLENBQUNrSixNQUFGLENBQVNGLElBQVQsR0FBY2hKLENBQUMsQ0FBQ2tKLE1BQUYsQ0FBU0gsTUFBaEQsRUFBdUQvSSxDQUFDLENBQUNrSixNQUFGLENBQVNuSSxDQUFULEdBQVdmLENBQUMsQ0FBQ21KLEdBQUYsQ0FBTXBJLENBQWpCLEdBQW1CLENBQTFFLENBQUQsQ0FBRCxFQUFnRmYsQ0FBQyxHQUFDeUksQ0FBQyxDQUFDO0FBQUM3RCxTQUFDLEVBQUNqRCxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLENBQVgsQ0FBSDtBQUFpQmMsU0FBQyxFQUFDWSxJQUFJLENBQUNDLEtBQUwsQ0FBVzFCLENBQVg7QUFBbkIsT0FBRCxFQUFtQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFuQyxFQUEyQ0gsQ0FBM0MsQ0FBRCxHQUErQzZFLENBQUMsQ0FBQztBQUFDQSxTQUFDLEVBQUMzRSxDQUFIO0FBQUtjLFNBQUMsRUFBQ2I7QUFBUCxPQUFELEVBQVc4SCxDQUFYLENBQWxJLEVBQWdKO0FBQUNwRCxTQUFDLEVBQUMzRSxDQUFIO0FBQUtjLFNBQUMsRUFBQ2IsQ0FBUDtBQUFTa0osYUFBSyxFQUFDcEo7QUFBZixPQUF2SjtBQUF5SyxLQUF4VCxFQUEwVGlKLE1BQTFULENBQWlVLFVBQUNsSixDQUFEO0FBQUEsYUFBSyxDQUFDLENBQUNBLENBQVA7QUFBQSxLQUFqVSxFQUEyVXNKLElBQTNVLENBQWdWLFVBQUN0SixDQUFELEVBQUdDLENBQUg7QUFBQSxhQUFPRCxDQUFDLENBQUNxSixLQUFGLEdBQy9lcEosQ0FBQyxDQUFDb0osS0FEc2U7QUFBQSxLQUFoVixDQUFGO0FBQzdJbEosS0FBQyxHQUFDLE1BQUltSCxDQUFKLElBQU9uSCxDQUFDLENBQUNvRCxNQUFULEdBQWdCcEQsQ0FBQyxDQUFDLENBQUQsQ0FBakIsR0FBcUI4SCxDQUF2QjtBQUF5QixXQUFNO0FBQUNkLHNCQUFnQixFQUFDO0FBQUN0QyxTQUFDLEVBQUMxRSxDQUFDLENBQUMwRSxDQUFMO0FBQU83RCxTQUFDLEVBQUNiLENBQUMsQ0FBQ2E7QUFBWCxPQUFsQjtBQUFnQ29HLGdCQUFVLEVBQUM7QUFBQ3ZDLFNBQUMsRUFBQ0YsQ0FBQyxDQUFDRSxDQUFMO0FBQU83RCxTQUFDLEVBQUMyRCxDQUFDLENBQUMzRDtBQUFYLE9BQTNDO0FBQXlEZ0csZUFBUyxFQUFDSyxDQUFuRTtBQUFxRUosYUFBTyxFQUFDO0FBQUNwQyxTQUFDLEVBQUMvQyxDQUFDLENBQUMrQyxDQUFMO0FBQU83RCxTQUFDLEVBQUNjLENBQUMsQ0FBQ2Q7QUFBWCxPQUE3RTtBQUEyRmtHLGNBQVEsRUFBQztBQUFDckMsU0FBQyxFQUFDbEQsQ0FBQyxDQUFDa0QsQ0FBTDtBQUFPN0QsU0FBQyxFQUFDVyxDQUFDLENBQUNYO0FBQVg7QUFBcEcsS0FBTjtBQUF5SDs7QUFBQSxXQUFTd0ksQ0FBVCxDQUFXeEosQ0FBWCxFQUFhO0FBQUMsUUFBSUMsQ0FBQyxHQUFDOEksRUFBRSxDQUFDL0ksQ0FBRCxDQUFSO0FBQVksUUFBRyxDQUFDQyxDQUFKLEVBQU0sT0FBTyxJQUFQO0FBQVlELEtBQUMsR0FBQytHLEVBQUUsQ0FBQy9HLENBQUQsRUFBR0MsQ0FBSCxDQUFKO0FBQVUsUUFBSUMsQ0FBQyxHQUFDRixDQUFDLENBQUN1SCxNQUFSO0FBQWUsUUFBRyxRQUFNckgsQ0FBVCxFQUFXQSxDQUFDLEdBQUMsSUFBRixDQUFYLEtBQXNCO0FBQUMsVUFBSUMsQ0FBQyxHQUFDOEYsQ0FBQyxDQUFDL0YsQ0FBRCxDQUFQO0FBQVcsVUFBR0MsQ0FBSCxFQUFLRCxDQUFDLEdBQUNDLENBQUYsQ0FBTCxLQUFhO0FBQUMsYUFBSUEsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDRCxDQUFDLENBQUMySSxLQUFaLEVBQWtCMUksQ0FBQyxFQUFuQjtBQUFzQixlQUFJLElBQUlILEVBQUMsR0FBQ0csQ0FBQyxHQUFDLENBQVosRUFBY0gsRUFBQyxHQUFDRSxDQUFDLENBQUNtRSxNQUFsQixFQUF5QnJFLEVBQUMsRUFBMUI7QUFBNkJFLGFBQUMsQ0FBQzBFLEdBQUYsQ0FBTXpFLENBQU4sRUFBUUgsRUFBUixNQUFhRSxDQUFDLENBQUMwRSxHQUFGLENBQU01RSxFQUFOLEVBQVFHLENBQVIsQ0FBYixLQUEwQkQsQ0FBQyxDQUFDc0QsR0FBRixDQUFNckQsQ0FBTixFQUFRSCxFQUFSLEVBQVUsQ0FBQ0UsQ0FBQyxDQUFDMEUsR0FBRixDQUFNekUsQ0FBTixFQUFRSCxFQUFSLENBQVgsR0FBdUJFLENBQUMsQ0FBQ3NELEdBQUYsQ0FBTXhELEVBQU4sRUFBUUcsQ0FBUixFQUFVLENBQUNELENBQUMsQ0FBQzBFLEdBQUYsQ0FBTTVFLEVBQU4sRUFBUUcsQ0FBUixDQUFYLENBQWpEO0FBQTdCO0FBQXRCOztBQUE0SEQsU0FBQyxHQUFDK0YsQ0FBQyxDQUFDL0YsQ0FBRCxDQUFIO0FBQU87QUFBQztBQUFBLFdBQU9BLENBQUMsR0FBQztBQUFDdUosZ0JBQVUsRUFBQ3ZKLENBQUMsQ0FBQ1EsS0FBZDtBQUFvQmdKLFVBQUksRUFBQ3hKLENBQUMsQ0FBQ1MsSUFBM0I7QUFBZ0NHLFlBQU0sRUFBQ1osQ0FBQyxDQUFDWSxNQUF6QztBQUFnRDZJLGNBQVEsRUFBQztBQUFDQyxzQkFBYyxFQUFDNUosQ0FBQyxDQUFDd0gsZUFBRixDQUFrQnZILENBQUMsQ0FBQytHLFNBQXBCLEVBQ3RlLENBRHNlLENBQWhCO0FBQ25kNkMscUJBQWEsRUFBQzdKLENBQUMsQ0FBQ3dILGVBQUYsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FEcWM7QUFDOWFzQyx5QkFBaUIsRUFBQzlKLENBQUMsQ0FBQ3dILGVBQUYsQ0FBa0J2SCxDQUFDLENBQUMrRyxTQUFwQixFQUE4Qi9HLENBQUMsQ0FBQytHLFNBQWhDLENBRDRaO0FBQ2pYK0Msd0JBQWdCLEVBQUMvSixDQUFDLENBQUN3SCxlQUFGLENBQWtCLENBQWxCLEVBQW9CdkgsQ0FBQyxDQUFDK0csU0FBdEIsQ0FEZ1c7QUFDL1RnRCw2QkFBcUIsRUFBQy9KLENBQUMsQ0FBQ2lILFFBRHVTO0FBQzlSK0MsNEJBQW9CLEVBQUNoSyxDQUFDLENBQUNnSCxPQUR1UTtBQUMvUGlELCtCQUF1QixFQUFDakssQ0FBQyxDQUFDbUgsVUFEcU87QUFDMU4rQyxtQ0FBMkIsRUFBQ2xLLENBQUMsQ0FBQ2tIO0FBRDRMO0FBQXpELEtBQUQsR0FDL0csSUFEdUc7QUFDbEc7O0FBQUEsV0FBU2lELENBQVQsQ0FBV3BLLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUNvSyxVQUFNLENBQUNDLElBQVAsQ0FBWXJLLENBQVosRUFBZXdGLE9BQWYsQ0FBdUIsVUFBQ3ZGLENBQUQsRUFBSztBQUFDRixPQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLRCxDQUFDLENBQUNDLENBQUQsQ0FBTjtBQUFVLEtBQXZDO0FBQXlDOztBQUFBLFdBQVNxSyxDQUFULENBQVd2SyxDQUFYLEVBQWFDLENBQWIsRUFBZUMsQ0FBZixFQUFzQjtBQUFBLFFBQUxDLENBQUssdUVBQUgsRUFBRztBQUFDLFFBQUlQLENBQUMsR0FBQ3lLLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLElBQWQsQ0FBTjtBQUEwQkosS0FBQyxDQUFDeEssQ0FBRCxFQUFHNkssRUFBSCxDQUFEO0FBQVFMLEtBQUMsQ0FBQ3hLLENBQUQsRUFBR08sQ0FBSCxDQUFEO0FBQU9BLEtBQUMsR0FBQyxpQkFBZVAsQ0FBQyxDQUFDOEssaUJBQWpCLElBQW9DLGtCQUFnQjlLLENBQUMsQ0FBQzhLLGlCQUF4RDtBQUMzYSxRQUFJbkosQ0FBQyxHQUFDLGtCQUFnQjNCLENBQUMsQ0FBQzhLLGlCQUFsQixJQUFxQyxrQkFBZ0I5SyxDQUFDLENBQUM4SyxpQkFBN0Q7QUFBK0UsUUFBSWxKLENBQUMsR0FBQzVCLENBQUMsQ0FBQytLLGdCQUFSO0FBQUEsUUFBeUJsSixDQUFDLEdBQUM3QixDQUFDLENBQUNnTCxpQkFBN0I7QUFBQSxRQUErQ2pKLENBQUMsR0FBQzFCLENBQUMsR0FBQ0MsQ0FBbkQ7QUFBcUQsUUFBR0YsQ0FBQyxDQUFDdUQsTUFBRixLQUFXLElBQUU1QixDQUFoQixFQUFrQixNQUFNRCxLQUFLLENBQUMscUNBQUQsQ0FBWDtBQUFtRCxRQUFJSSxDQUFDLEdBQUMsQ0FBTjs7QUFBUSxRQUFHTCxDQUFILEVBQUs7QUFBQyxVQUFJa0QsQ0FBQyxHQUFDLElBQUlyQixpQkFBSixDQUFzQnRELENBQUMsQ0FBQzZLLE1BQXhCLEVBQStCL0ksQ0FBL0IsRUFBaUNILENBQWpDLENBQU47QUFBMENHLE9BQUMsSUFBRUgsQ0FBSDtBQUFLOztBQUFBZ0QsS0FBQyxHQUFDLElBQUltRyxDQUFKLENBQU03SyxDQUFOLEVBQVFDLENBQVIsRUFBVXlFLENBQVYsQ0FBRjtBQUFlLFFBQUduRCxDQUFDLENBQUN1Six1QkFBTCxFQUE2QixLQUFJLElBQUkxRCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNuSCxDQUFkLEVBQWdCbUgsQ0FBQyxFQUFqQjtBQUFvQixXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3JILENBQWQsRUFBZ0JxSCxDQUFDLEVBQWpCLEVBQW9CO0FBQUMsWUFBSVcsQ0FBQyxHQUFDLEtBQUdaLENBQUMsR0FBQ3BILENBQUYsR0FBSXFILENBQVAsQ0FBTjtBQUFnQjNDLFNBQUMsQ0FBQ25CLEdBQUYsQ0FBTThELENBQU4sRUFBUUQsQ0FBUixFQUFVN0YsQ0FBQyxDQUFDd0osR0FBRixHQUFNaEwsQ0FBQyxDQUFDaUksQ0FBRCxDQUFQLEdBQVd6RyxDQUFDLENBQUN5SixLQUFGLEdBQVFqTCxDQUFDLENBQUNpSSxDQUFDLEdBQUMsQ0FBSCxDQUFwQixHQUEwQnpHLENBQUMsQ0FBQzBKLElBQUYsR0FBT2xMLENBQUMsQ0FBQ2lJLENBQUMsR0FBQyxDQUFILENBQWxDLEdBQXdDLEdBQXhDLElBQTZDLENBQXZEO0FBQTBEO0FBQW5ILEtBQTdCLE1BQXFKLEtBQUlaLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ25ILENBQVYsRUFBWW1ILENBQUMsRUFBYjtBQUFnQixXQUFJQyxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUNySCxDQUFWLEVBQVlxSCxDQUFDLEVBQWI7QUFBZ0JXLFNBQUMsR0FBQyxLQUFHWixDQUFDLEdBQUNwSCxDQUFGLEdBQUlxSCxDQUFQLENBQUYsRUFBWTNDLENBQUMsQ0FBQ25CLEdBQUYsQ0FBTThELENBQU4sRUFBUUQsQ0FBUixFQUFVN0YsQ0FBQyxDQUFDd0osR0FBRixHQUFNaEwsQ0FBQyxDQUFDaUksQ0FBRCxDQUFQLEdBQVd6RyxDQUFDLENBQUN5SixLQUFGLEdBQVFqTCxDQUFDLENBQUNpSSxDQUFDLEdBQ3RmLENBRG9mLENBQXBCLEdBQzdkekcsQ0FBQyxDQUFDMEosSUFBRixHQUFPbEwsQ0FBQyxDQUFDaUksQ0FBQyxHQUFDLENBQUgsQ0FEMmMsQ0FBWjtBQUFoQjtBQUFoQjtBQUN4WnpHLEtBQUMsR0FBQ0ksSUFBSSxDQUFDd0csSUFBTCxDQUFVbkksQ0FBQyxHQUFDLENBQVosQ0FBRjtBQUFpQm9ILEtBQUMsR0FBQ3pGLElBQUksQ0FBQ3dHLElBQUwsQ0FBVWxJLENBQUMsR0FBQyxDQUFaLENBQUY7QUFBaUJvSCxLQUFDLEdBQUM5RixDQUFDLEdBQUM2RixDQUFKOztBQUFNLFFBQUc1RixDQUFILEVBQUs7QUFBQyxVQUFJeUcsQ0FBQyxHQUFDLElBQUk1RSxpQkFBSixDQUFzQnRELENBQUMsQ0FBQzZLLE1BQXhCLEVBQStCL0ksQ0FBL0IsRUFBaUN3RixDQUFqQyxDQUFOO0FBQTBDeEYsT0FBQyxJQUFFd0YsQ0FBSDtBQUFLOztBQUFBWSxLQUFDLEdBQUMsSUFBSTRDLENBQUosQ0FBTXRKLENBQU4sRUFBUTZGLENBQVIsRUFBVWEsQ0FBVixDQUFGOztBQUFlLFNBQUlaLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ0QsQ0FBVixFQUFZQyxDQUFDLEVBQWI7QUFBZ0IsV0FBSVcsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDekcsQ0FBVixFQUFZeUcsQ0FBQyxFQUFiLEVBQWdCO0FBQUMsWUFBSTdHLENBQUMsR0FBQyxDQUFOO0FBQUEsWUFBUStKLENBQUMsR0FBQ25HLFFBQVY7QUFBQSxZQUFtQnlDLENBQUMsR0FBQyxDQUFyQjs7QUFBdUIsYUFBSSxJQUFJekgsR0FBQyxHQUFDLENBQVYsRUFBWSxJQUFFQSxHQUFkLEVBQWdCQSxHQUFDLEVBQWpCO0FBQW9CLGVBQUksSUFBSUMsSUFBQyxHQUFDLENBQVYsRUFBWSxJQUFFQSxJQUFkLEVBQWdCQSxJQUFDLEVBQWpCLEVBQW9CO0FBQUMsZ0JBQUlDLEdBQUMsR0FBQ3lFLENBQUMsQ0FBQ0MsR0FBRixDQUFNLElBQUVxRCxDQUFGLEdBQUloSSxJQUFWLEVBQVksSUFBRXFILENBQUYsR0FBSXRILEdBQWhCLENBQU47O0FBQXlCb0IsYUFBQyxJQUFFbEIsR0FBSDtBQUFLaUwsYUFBQyxHQUFDdkosSUFBSSxDQUFDZ0gsR0FBTCxDQUFTdUMsQ0FBVCxFQUFXakwsR0FBWCxDQUFGO0FBQWdCdUgsYUFBQyxHQUFDN0YsSUFBSSxDQUFDK0csR0FBTCxDQUFTbEIsQ0FBVCxFQUFXdkgsR0FBWCxDQUFGO0FBQWdCO0FBQXZHOztBQUF1R2tCLFNBQUMsSUFBRVEsSUFBSSxDQUFDMkcsR0FBTCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQUg7QUFBaUIsY0FBSWQsQ0FBQyxHQUFDMEQsQ0FBTixLQUFVL0osQ0FBQyxHQUFDK0osQ0FBQyxHQUFDLENBQUosRUFBTSxJQUFFN0QsQ0FBRixJQUFLLElBQUVXLENBQVAsS0FBV1IsQ0FBQyxHQUFDLENBQUNTLENBQUMsQ0FBQ3RELEdBQUYsQ0FBTXFELENBQU4sRUFBUVgsQ0FBQyxHQUFDLENBQVYsSUFBYSxJQUFFWSxDQUFDLENBQUN0RCxHQUFGLENBQU1xRCxDQUFDLEdBQUMsQ0FBUixFQUFVWCxDQUFWLENBQWYsR0FBNEJZLENBQUMsQ0FBQ3RELEdBQUYsQ0FBTXFELENBQUMsR0FBQyxDQUFSLEVBQVVYLENBQUMsR0FBQyxDQUFaLENBQTdCLElBQTZDLENBQS9DLEVBQWlENkQsQ0FBQyxHQUFDMUQsQ0FBRixLQUFNckcsQ0FBQyxHQUFDcUcsQ0FBUixDQUE1RCxDQUFoQjtBQUF5RlMsU0FBQyxDQUFDMUUsR0FBRixDQUFNeUUsQ0FBTixFQUFRWCxDQUFSLEVBQVVsRyxDQUFWO0FBQWE7QUFBdFI7O0FBQXNSSyxLQUFDLElBQUU2RixDQUFDLEdBQUMsSUFBSWhFLGlCQUFKLENBQXNCdEQsQ0FBQyxDQUFDNkssTUFBeEIsRUFBK0IvSSxDQUEvQixFQUFpQ0gsQ0FBakMsQ0FBRixFQUFzQ0csQ0FBQyxJQUFFSCxDQUF6QyxFQUEyQzJGLENBQUMsR0FBQyxJQUFJL0MsQ0FBSixDQUFNK0MsQ0FBTixFQUFRckgsQ0FBUixDQUEvQyxJQUEyRHFILENBQUMsR0FBQy9DLENBQUMsQ0FBQ0MsV0FBRixDQUFjdkUsQ0FBZCxFQUFnQkMsQ0FBaEIsQ0FBOUQ7QUFBaUYrSCxLQUFDLEdBQUMsSUFBRjtBQUFPMUcsS0FBQyxLQUFHRSxDQUFDLElBQUV6QixDQUFDLEdBQ3BmLElBQUlzRCxpQkFBSixDQUFzQnRELENBQUMsQ0FBQzZLLE1BQXhCLEVBQStCL0ksQ0FBL0IsRUFBaUNILENBQWpDLENBRG1mLEVBQy9jc0csQ0FBQyxHQUFDLElBQUkxRCxDQUFKLENBQU12RSxDQUFOLEVBQVFDLENBQVIsQ0FEMmMsSUFDL2JnSSxDQUFDLEdBQUMxRCxDQUFDLENBQUNDLFdBQUYsQ0FBY3ZFLENBQWQsRUFBZ0JDLENBQWhCLENBRHliLENBQUQ7O0FBQ3BhLFNBQUlELENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQ29ILENBQVYsRUFBWXBILENBQUMsRUFBYjtBQUFnQixXQUFJRCxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUN3QixDQUFWLEVBQVl4QixDQUFDLEVBQWIsRUFBZ0I7QUFBQ0UsU0FBQyxHQUFDc0IsQ0FBQyxHQUFDLENBQUo7QUFBTXRCLFNBQUMsR0FBQyxJQUFFRixDQUFGLEdBQUksQ0FBSixHQUFNQSxDQUFDLEdBQUNFLENBQUYsR0FBSUEsQ0FBSixHQUFNRixDQUFkO0FBQWdCeUIsU0FBQyxHQUFDNEYsQ0FBQyxHQUFDLENBQUo7QUFBTTVGLFNBQUMsR0FBQyxJQUFFeEIsQ0FBRixHQUFJLENBQUosR0FBTUEsQ0FBQyxHQUFDd0IsQ0FBRixHQUFJQSxDQUFKLEdBQU14QixDQUFkO0FBQWdCMEIsU0FBQyxHQUFDLENBQUY7O0FBQUksYUFBSUcsQ0FBQyxHQUFDLENBQUMsQ0FBUCxFQUFTLEtBQUdBLENBQVosRUFBY0EsQ0FBQyxFQUFmO0FBQWtCLGVBQUlxSixDQUFDLEdBQUMsQ0FBQyxDQUFQLEVBQVMsS0FBR0EsQ0FBWixFQUFjQSxDQUFDLEVBQWY7QUFBa0J4SixhQUFDLElBQUV1RyxDQUFDLENBQUN0RCxHQUFGLENBQU0xRSxDQUFDLEdBQUM0QixDQUFSLEVBQVVMLENBQUMsR0FBQzBKLENBQVosQ0FBSDtBQUFsQjtBQUFsQjs7QUFBc0RqTCxTQUFDLEdBQUN5QixDQUFDLEdBQUMsRUFBSjs7QUFBTyxhQUFJRixDQUFDLEdBQUMsQ0FBTixFQUFRLElBQUVBLENBQVYsRUFBWUEsQ0FBQyxFQUFiO0FBQWdCLGVBQUlFLENBQUMsR0FBQyxDQUFOLEVBQVEsSUFBRUEsQ0FBVixFQUFZQSxDQUFDLEVBQWI7QUFBZ0JHLGFBQUMsR0FBQyxJQUFFOUIsQ0FBRixHQUFJeUIsQ0FBTixFQUFRMEosQ0FBQyxHQUFDLElBQUVsTCxDQUFGLEdBQUkwQixDQUFkLEVBQWdCOEYsQ0FBQyxHQUFDOUMsQ0FBQyxDQUFDQyxHQUFGLENBQU05QyxDQUFOLEVBQVFxSixDQUFSLENBQWxCLEVBQTZCN0QsQ0FBQyxDQUFDOUQsR0FBRixDQUFNMUIsQ0FBTixFQUFRcUosQ0FBUixFQUFVMUQsQ0FBQyxJQUFFdkgsQ0FBYixDQUE3QixFQUE2Q3FCLENBQUMsSUFBRTBHLENBQUMsQ0FBQ3pFLEdBQUYsQ0FBTTFCLENBQU4sRUFBUXFKLENBQVIsRUFBVSxFQUFFMUQsQ0FBQyxJQUFFdkgsQ0FBTCxDQUFWLENBQWhEO0FBQWhCO0FBQWhCO0FBQW1HO0FBQWpQOztBQUFpUHFCLEtBQUMsR0FBQ0EsQ0FBQyxHQUFDO0FBQUM2SixlQUFTLEVBQUM5RCxDQUFYO0FBQWErRCxjQUFRLEVBQUNwRDtBQUF0QixLQUFELEdBQTBCO0FBQUNtRCxlQUFTLEVBQUM5RDtBQUFYLEtBQTdCO0FBSHdFLGNBR0EvRixDQUhBO0FBQUEsUUFHZG1DLENBSGMsT0FHeEIwSCxTQUh3QjtBQUFBLFFBR0h2RyxDQUhHLE9BR1p3RyxRQUhZO0FBR0UsS0FBQzlKLENBQUMsR0FBQ2lJLENBQUMsQ0FBQ3JKLENBQUMsR0FBQzBFLENBQUQsR0FBR25CLENBQUwsQ0FBSixLQUFjLGtCQUFnQjlELENBQUMsQ0FBQzhLLGlCQUFsQixJQUFxQyxrQkFBZ0I5SyxDQUFDLENBQUM4SyxpQkFBckUsS0FBeUZuSixDQUFDLEdBQUNpSSxDQUFDLENBQUNySixDQUFDLEdBQUN1RCxDQUFELEdBQUdtQixDQUFMLENBQTVGO0FBQXFHLFdBQU90RCxDQUFQO0FBQVM7O0FBNUJ6ZCxNQTRCK2RnRCxDQTVCL2Q7QUFBQTtBQUFBO0FBQUEsa0NBNEJvZnZFLENBNUJwZixFQTZCeEJDLENBN0J3QixFQTZCdEI7QUFBQyxlQUFPLElBQUlzRSxDQUFKLENBQU0sSUFBSWpCLGlCQUFKLENBQXNCdEQsQ0FBQyxHQUFDQyxDQUF4QixDQUFOLEVBQWlDRCxDQUFqQyxDQUFQO0FBQTJDO0FBN0J0Qjs7QUE2QnNCLGVBQVlBLENBQVosRUFBY0MsQ0FBZCxFQUFnQjtBQUFBOztBQUFDLFdBQUs0SSxLQUFMLEdBQVc1SSxDQUFYO0FBQWEsV0FBS29FLE1BQUwsR0FBWXJFLENBQUMsQ0FBQ3VELE1BQUYsR0FBU3RELENBQXJCO0FBQXVCLFdBQUt5SixJQUFMLEdBQVUxSixDQUFWO0FBQVk7O0FBN0J2RjtBQUFBO0FBQUEsMEJBNkIyRkEsQ0E3QjNGLEVBNkI2RkMsQ0E3QjdGLEVBNkIrRjtBQUFDLGVBQU8sSUFBRUQsQ0FBRixJQUFLQSxDQUFDLElBQUUsS0FBSzZJLEtBQWIsSUFBb0IsSUFBRTVJLENBQXRCLElBQXlCQSxDQUFDLElBQUUsS0FBS29FLE1BQWpDLEdBQXdDLENBQUMsQ0FBekMsR0FBMkMsQ0FBQyxDQUFDLEtBQUtxRixJQUFMLENBQVV6SixDQUFDLEdBQUMsS0FBSzRJLEtBQVAsR0FBYTdJLENBQXZCLENBQXBEO0FBQThFO0FBN0I5SztBQUFBO0FBQUEsMEJBNkJrTEEsQ0E3QmxMLEVBNkJvTEMsQ0E3QnBMLEVBNkJzTEMsQ0E3QnRMLEVBNkJ3TDtBQUFDLGFBQUt3SixJQUFMLENBQVV6SixDQUFDLEdBQUMsS0FBSzRJLEtBQVAsR0FBYTdJLENBQXZCLElBQTBCRSxDQUFDLEdBQUMsQ0FBRCxHQUFHLENBQTlCO0FBQWdDO0FBN0J6TjtBQUFBO0FBQUEsZ0NBNkJtT0YsQ0E3Qm5PLEVBNkJxT0MsQ0E3QnJPLEVBNkJ1T0MsQ0E3QnZPLEVBNkJ5T0MsQ0E3QnpPLEVBNkIyT1AsQ0E3QjNPLEVBNkI2TztBQUFDLGFBQUksSUFBSTJCLENBQUMsR0FBQ3RCLENBQVYsRUFBWXNCLENBQUMsR0FBQ3RCLENBQUMsR0FBQ0UsQ0FBaEIsRUFBa0JvQixDQUFDLEVBQW5CO0FBQXNCLGVBQUksSUFBSXRCLElBQUMsR0FBQ0QsQ0FBVixFQUFZQyxJQUFDLEdBQUNELENBQUMsR0FBQ0UsQ0FBaEIsRUFBa0JELElBQUMsRUFBbkI7QUFBc0IsaUJBQUt1RCxHQUFMLENBQVN2RCxJQUFULEVBQVdzQixDQUFYLEVBQWEsQ0FBQyxDQUFDM0IsQ0FBZjtBQUF0QjtBQUF0QjtBQUE4RDtBQTdCNVM7O0FBQUE7QUFBQTs7QUFBQSxNQTZCbVRrTCxDQTdCblQ7QUE2QnFULGVBQVk5SyxDQUFaLEVBQWNDLENBQWQsRUFBZ0JDLENBQWhCLEVBQWtCO0FBQUE7O0FBQUMsV0FBSzJJLEtBQUwsR0FBVzdJLENBQVg7QUFBYUEsT0FBQyxJQUFFQyxDQUFIO0FBQUssVUFBR0MsQ0FBQyxJQUFFQSxDQUFDLENBQUNxRCxNQUFGLEtBQVd2RCxDQUFqQixFQUFtQixNQUFNMEIsS0FBSyxDQUFDLG1CQUFELENBQVg7QUFBaUMsV0FBS2dJLElBQUwsR0FBVXhKLENBQUMsSUFBRSxJQUFJb0QsaUJBQUosQ0FBc0J0RCxDQUF0QixDQUFiO0FBQXNDOztBQTdCcGI7QUFBQTtBQUFBLDBCQTZCd2JBLENBN0J4YixFQTZCMGJDLENBN0IxYixFQTZCNGI7QUFBQyxlQUFPLEtBQUt5SixJQUFMLENBQVV6SixDQUFDLEdBQUMsS0FBSzRJLEtBQVAsR0FBYTdJLENBQXZCLENBQVA7QUFBaUM7QUE3QjlkO0FBQUE7QUFBQSwwQkE2QmtlQSxDQTdCbGUsRUE4QnhCQyxDQTlCd0IsRUE4QnRCQyxDQTlCc0IsRUE4QnBCO0FBQUMsYUFBS3dKLElBQUwsQ0FBVXpKLENBQUMsR0FBQyxLQUFLNEksS0FBUCxHQUFhN0ksQ0FBdkIsSUFBMEJFLENBQTFCO0FBQTRCO0FBOUJUOztBQUFBO0FBQUE7O0FBQUEsTUE4QmdCVyxDQTlCaEI7QUE4QmtCLGVBQVliLENBQVosRUFBYztBQUFBOztBQUFDLFdBQUtzTCxTQUFMLEdBQWUsS0FBS0MsVUFBTCxHQUFnQixDQUEvQjtBQUFpQyxXQUFLN0ssS0FBTCxHQUFXVixDQUFYO0FBQWE7O0FBOUIvRTtBQUFBO0FBQUEsK0JBOEJ3RkEsQ0E5QnhGLEVBOEIwRjtBQUFDLFlBQUcsSUFBRUEsQ0FBRixJQUFLLEtBQUdBLENBQVIsSUFBV0EsQ0FBQyxHQUFDLEtBQUtlLFNBQUwsRUFBaEIsRUFBaUMsTUFBTVcsS0FBSyxDQUFDLGlCQUFlMUIsQ0FBQyxDQUFDdEIsUUFBRixFQUFmLEdBQTRCLE9BQTdCLENBQVg7QUFBaUQsWUFBSXVCLENBQUMsR0FBQyxDQUFOOztBQUFRLFlBQUcsSUFBRSxLQUFLcUwsU0FBVixFQUFvQjtBQUFDckwsV0FBQyxHQUFDLElBQUUsS0FBS3FMLFNBQVQ7QUFBbUIsY0FBSXBMLENBQUMsR0FBQ0YsQ0FBQyxHQUFDQyxDQUFGLEdBQUlELENBQUosR0FBTUMsQ0FBWjtBQUFjQSxXQUFDLElBQUVDLENBQUg7QUFBS0QsV0FBQyxHQUFDLENBQUMsS0FBS1MsS0FBTCxDQUFXLEtBQUs2SyxVQUFoQixJQUE0QixPQUFLLElBQUVyTCxDQUFQLElBQVVELENBQXZDLEtBQTJDQSxDQUE3QztBQUErQ0QsV0FBQyxJQUFFRSxDQUFIO0FBQUssZUFBS29MLFNBQUwsSUFBZ0JwTCxDQUFoQjtBQUFrQixnQkFBSSxLQUFLb0wsU0FBVCxLQUFxQixLQUFLQSxTQUFMLEdBQWUsQ0FBZixFQUFpQixLQUFLQyxVQUFMLEVBQXRDO0FBQXlEOztBQUFBLFlBQUcsSUFBRXZMLENBQUwsRUFBTztBQUFDLGlCQUFLLEtBQUdBLENBQVI7QUFBV0MsYUFBQyxHQUFDQSxDQUFDLElBQUUsQ0FBSCxHQUFLLEtBQUtTLEtBQUwsQ0FBVyxLQUFLNkssVUFBaEIsSUFBNEIsR0FBbkMsRUFBdUMsS0FBS0EsVUFBTCxFQUF2QyxFQUF5RHZMLENBQUMsSUFBRSxDQUE1RDtBQUFYOztBQUF5RSxjQUFFQSxDQUFGLEtBQU1FLENBQUMsR0FBQyxJQUFFRixDQUFKLEVBQU1DLENBQUMsR0FBQ0EsQ0FBQyxJQUFFRCxDQUFILEdBQUssQ0FBQyxLQUFLVSxLQUFMLENBQVcsS0FBSzZLLFVBQWhCLElBQzVlLE9BQUtyTCxDQUFMLElBQVFBLENBRG1lLEtBQy9kQSxDQURrZCxFQUNoZCxLQUFLb0wsU0FBTCxJQUFnQnRMLENBRDBiO0FBQ3ZiOztBQUFBLGVBQU9DLENBQVA7QUFBUztBQS9CbEI7QUFBQTtBQUFBLGtDQStCNkI7QUFBQyxlQUFPLEtBQUcsS0FBS1MsS0FBTCxDQUFXNkMsTUFBWCxHQUFrQixLQUFLZ0ksVUFBMUIsSUFBc0MsS0FBS0QsU0FBbEQ7QUFBNEQ7QUEvQjFGOztBQUFBO0FBQUE7O0FBK0IyRixNQUFJbEssQ0FBSjs7QUFBTSxHQUFDLFVBQVNwQixDQUFULEVBQVc7QUFBQ0EsS0FBQyxDQUFDc0IsT0FBRixHQUFVLFNBQVY7QUFBb0J0QixLQUFDLENBQUMrQixZQUFGLEdBQWUsY0FBZjtBQUE4Qi9CLEtBQUMsQ0FBQ2tDLElBQUYsR0FBTyxNQUFQO0FBQWNsQyxLQUFDLENBQUNtQyxLQUFGLEdBQVEsT0FBUjtBQUFnQm5DLEtBQUMsQ0FBQ2tCLEdBQUYsR0FBTSxLQUFOO0FBQVksR0FBekcsRUFBMkdFLENBQUMsS0FBR0EsQ0FBQyxHQUFDLEVBQUwsQ0FBNUc7O0FBQXNILE1BQUlKLENBQUo7O0FBQU0sR0FBQyxVQUFTaEIsQ0FBVCxFQUFXO0FBQUNBLEtBQUMsQ0FBQ0EsQ0FBQyxDQUFDaUIsVUFBRixHQUFhLENBQWQsQ0FBRCxHQUFrQixZQUFsQjtBQUErQmpCLEtBQUMsQ0FBQ0EsQ0FBQyxDQUFDc0IsT0FBRixHQUFVLENBQVgsQ0FBRCxHQUFlLFNBQWY7QUFBeUJ0QixLQUFDLENBQUNBLENBQUMsQ0FBQytCLFlBQUYsR0FBZSxDQUFoQixDQUFELEdBQW9CLGNBQXBCO0FBQW1DL0IsS0FBQyxDQUFDQSxDQUFDLENBQUNrQyxJQUFGLEdBQU8sQ0FBUixDQUFELEdBQVksTUFBWjtBQUFtQmxDLEtBQUMsQ0FBQ0EsQ0FBQyxDQUFDbUMsS0FBRixHQUFRLENBQVQsQ0FBRCxHQUFhLE9BQWI7QUFBcUJuQyxLQUFDLENBQUNBLENBQUMsQ0FBQ2tCLEdBQUYsR0FBTSxDQUFQLENBQUQsR0FBVyxLQUFYO0FBQWlCLEdBQWpLLEVBQW1LRixDQUFDLEtBQUdBLENBQUMsR0FBQyxFQUFMLENBQXBLOztBQUE4SyxNQUFJZ0IsQ0FBQyxHQUFDLGdEQUFnRHdKLEtBQWhELENBQXNELEVBQXRELENBQU47O0FBL0IzWSxNQStCaWQ5SCxDQS9CamQ7QUErQm1kLGVBQVkxRCxDQUFaLEVBQzNlQyxDQUQyZSxFQUN6ZTtBQUFBOztBQUFDLFVBQUcsTUFBSUEsQ0FBQyxDQUFDc0QsTUFBVCxFQUFnQixNQUFNN0IsS0FBSyxDQUFDLGtCQUFELENBQVg7QUFBZ0MsV0FBSytKLEtBQUwsR0FBV3pMLENBQVg7QUFBYSxVQUFJRSxDQUFDLEdBQUNELENBQUMsQ0FBQ3NELE1BQVI7O0FBQWUsVUFBRyxJQUFFckQsQ0FBRixJQUFLLE1BQUlELENBQUMsQ0FBQyxDQUFELENBQWIsRUFBaUI7QUFBQyxZQUFJRSxDQUFDLEdBQUMsQ0FBTjs7QUFBUSxlQUFLQSxDQUFDLEdBQUNELENBQUYsSUFBSyxNQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBZjtBQUFvQkEsV0FBQztBQUFyQjs7QUFBd0IsWUFBR0EsQ0FBQyxLQUFHRCxDQUFQLEVBQVMsS0FBS3dMLFlBQUwsR0FBa0IxTCxDQUFDLENBQUMyQyxJQUFGLENBQU8rSSxZQUF6QixDQUFULEtBQW9ELEtBQUksS0FBS0EsWUFBTCxHQUFrQixJQUFJcEksaUJBQUosQ0FBc0JwRCxDQUFDLEdBQUNDLENBQXhCLENBQWxCLEVBQTZDSCxDQUFDLEdBQUMsQ0FBbkQsRUFBcURBLENBQUMsR0FBQyxLQUFLMEwsWUFBTCxDQUFrQm5JLE1BQXpFLEVBQWdGdkQsQ0FBQyxFQUFqRjtBQUFvRixlQUFLMEwsWUFBTCxDQUFrQjFMLENBQWxCLElBQXFCQyxDQUFDLENBQUNFLENBQUMsR0FBQ0gsQ0FBSCxDQUF0QjtBQUFwRjtBQUFnSCxPQUF0TixNQUEyTixLQUFLMEwsWUFBTCxHQUFrQnpMLENBQWxCO0FBQW9COztBQWhDdFM7QUFBQTtBQUFBLCtCQWdDOFM7QUFBQyxlQUFPLEtBQUt5TCxZQUFMLENBQWtCbkksTUFBbEIsR0FBeUIsQ0FBaEM7QUFBa0M7QUFoQ2pWO0FBQUE7QUFBQSwrQkFnQ3lWO0FBQUMsZUFBTyxNQUFJLEtBQUttSSxZQUFMLENBQWtCLENBQWxCLENBQVg7QUFBZ0M7QUFoQzFYO0FBQUE7QUFBQSxxQ0FnQ3lZMUwsQ0FoQ3pZLEVBZ0MyWTtBQUFDLGVBQU8sS0FBSzBMLFlBQUwsQ0FBa0IsS0FBS0EsWUFBTCxDQUFrQm5JLE1BQWxCLEdBQXlCLENBQXpCLEdBQTJCdkQsQ0FBN0MsQ0FBUDtBQUF1RDtBQWhDbmM7QUFBQTtBQUFBLG9DQWdDaWRBLENBaENqZCxFQWdDbWQ7QUFBQTs7QUFBQyxZQUFHLEtBQUs2QyxNQUFMLEVBQUgsRUFBaUIsT0FBTzdDLENBQVA7QUFDN2YsWUFBR0EsQ0FBQyxDQUFDNkMsTUFBRixFQUFILEVBQWMsT0FBTyxJQUFQO0FBQVksWUFBSTVDLENBQUMsR0FBQyxLQUFLeUwsWUFBWDtBQUF3QjFMLFNBQUMsR0FBQ0EsQ0FBQyxDQUFDMEwsWUFBSjtBQUFpQnpMLFNBQUMsQ0FBQ3NELE1BQUYsR0FBU3ZELENBQUMsQ0FBQ3VELE1BQVgsYUFBMEIsQ0FBQ3ZELENBQUQsRUFBR0MsQ0FBSCxDQUExQixFQUFxQkEsQ0FBckIsYUFBdUJELENBQXZCO0FBQWlDLFlBQUlFLENBQUMsR0FBQyxJQUFJb0QsaUJBQUosQ0FBc0J0RCxDQUFDLENBQUN1RCxNQUF4QixDQUFOO0FBQUEsWUFBc0NwRCxDQUFDLEdBQUNILENBQUMsQ0FBQ3VELE1BQUYsR0FBU3RELENBQUMsQ0FBQ3NELE1BQW5EOztBQUEwRCxhQUFJLElBQUkzRCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNPLENBQWQsRUFBZ0JQLENBQUMsRUFBakI7QUFBb0JNLFdBQUMsQ0FBQ04sQ0FBRCxDQUFELEdBQUtJLENBQUMsQ0FBQ0osQ0FBRCxDQUFOO0FBQXBCOztBQUE4QixhQUFJQSxDQUFDLEdBQUNPLENBQU4sRUFBUVAsQ0FBQyxHQUFDSSxDQUFDLENBQUN1RCxNQUFaLEVBQW1CM0QsQ0FBQyxFQUFwQjtBQUF1Qk0sV0FBQyxDQUFDTixDQUFELENBQUQsR0FBS0ssQ0FBQyxDQUFDTCxDQUFDLEdBQUNPLENBQUgsQ0FBRCxHQUFPSCxDQUFDLENBQUNKLENBQUQsQ0FBYjtBQUF2Qjs7QUFBd0MsZUFBTyxJQUFJOEQsQ0FBSixDQUFNLEtBQUsrSCxLQUFYLEVBQWlCdkwsQ0FBakIsQ0FBUDtBQUEyQjtBQWpDdk87QUFBQTtBQUFBLCtCQWlDZ1BGLENBakNoUCxFQWlDa1A7QUFBQyxZQUFHLE1BQUlBLENBQVAsRUFBUyxPQUFPLEtBQUt5TCxLQUFMLENBQVc5SSxJQUFsQjtBQUF1QixZQUFHLE1BQUkzQyxDQUFQLEVBQVMsT0FBTyxJQUFQO0FBQVksWUFBSUMsQ0FBQyxHQUFDLEtBQUt5TCxZQUFMLENBQWtCbkksTUFBeEI7QUFBQSxZQUErQnJELENBQUMsR0FBQyxJQUFJb0QsaUJBQUosQ0FBc0JyRCxDQUF0QixDQUFqQzs7QUFBMEQsYUFBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNGLENBQWQsRUFBZ0JFLENBQUMsRUFBakI7QUFBb0JELFdBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQUssS0FBS3NMLEtBQUwsQ0FBV3pJLFFBQVgsQ0FBb0IsS0FBSzBJLFlBQUwsQ0FBa0J2TCxDQUFsQixDQUFwQixFQUF5Q0gsQ0FBekMsQ0FBTDtBQUFwQjs7QUFBcUUsZUFBTyxJQUFJMEQsQ0FBSixDQUFNLEtBQUsrSCxLQUFYLEVBQWlCdkwsQ0FBakIsQ0FBUDtBQUEyQjtBQWpDbGM7QUFBQTtBQUFBLG1DQWlDK2NGLENBakMvYyxFQWlDaWQ7QUFBQyxZQUFHLEtBQUs2QyxNQUFMLE1BQzdlN0MsQ0FBQyxDQUFDNkMsTUFBRixFQUQwZSxFQUMvZCxPQUFPLEtBQUs0SSxLQUFMLENBQVc5SSxJQUFsQjtBQUF1QixZQUFJMUMsQ0FBQyxHQUFDLEtBQUt5TCxZQUFYO0FBQUEsWUFBd0J4TCxDQUFDLEdBQUNELENBQUMsQ0FBQ3NELE1BQTVCO0FBQW1DdkQsU0FBQyxHQUFDQSxDQUFDLENBQUMwTCxZQUFKO0FBQWlCLFlBQUl2TCxDQUFDLEdBQUNILENBQUMsQ0FBQ3VELE1BQVI7QUFBQSxZQUFlM0QsQ0FBQyxHQUFDLElBQUkwRCxpQkFBSixDQUFzQnBELENBQUMsR0FBQ0MsQ0FBRixHQUFJLENBQTFCLENBQWpCOztBQUE4QyxhQUFJLElBQUlzQixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUN2QixDQUFkLEVBQWdCdUIsQ0FBQyxFQUFqQixFQUFvQjtBQUFDLGNBQUl2QixHQUFDLEdBQUNELENBQUMsQ0FBQ3dCLENBQUQsQ0FBUDs7QUFBVyxlQUFJLElBQUl4QixJQUFDLEdBQUMsQ0FBVixFQUFZQSxJQUFDLEdBQUNFLENBQWQsRUFBZ0JGLElBQUMsRUFBakIsRUFBb0I7QUFBQyxnQkFBSXNCLENBQUMsR0FBQ0UsQ0FBQyxHQUFDeEIsSUFBUjtBQUFBLGdCQUFVdUIsQ0FBQyxHQUFDLEtBQUtpSyxLQUFMLENBQVd6SSxRQUFYLENBQW9COUMsR0FBcEIsRUFBc0JGLENBQUMsQ0FBQ0MsSUFBRCxDQUF2QixDQUFaO0FBQXdDTCxhQUFDLENBQUMyQixDQUFELENBQUQsR0FBSzNCLENBQUMsQ0FBQzZCLENBQUMsR0FBQ3hCLElBQUgsQ0FBRCxHQUFPdUIsQ0FBWjtBQUFjO0FBQUM7O0FBQUEsZUFBTyxJQUFJa0MsQ0FBSixDQUFNLEtBQUsrSCxLQUFYLEVBQWlCN0wsQ0FBakIsQ0FBUDtBQUEyQjtBQWxDblA7QUFBQTtBQUFBLHlDQWtDc1FJLENBbEN0USxFQWtDd1FDLENBbEN4USxFQWtDMFE7QUFBQyxZQUFHLElBQUVELENBQUwsRUFBTyxNQUFNMEIsS0FBSyxDQUFDLDRCQUFELENBQVg7QUFBMEMsWUFBRyxNQUFJekIsQ0FBUCxFQUFTLE9BQU8sS0FBS3dMLEtBQUwsQ0FBVzlJLElBQWxCO0FBQXVCLFlBQUl6QyxDQUFDLEdBQUMsS0FBS3dMLFlBQUwsQ0FBa0JuSSxNQUF4QjtBQUErQnZELFNBQUMsR0FBQyxJQUFJc0QsaUJBQUosQ0FBc0JwRCxDQUFDLEdBQUNGLENBQXhCLENBQUY7O0FBQTZCLGFBQUksSUFBSUcsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDRCxDQUFkLEVBQWdCQyxDQUFDLEVBQWpCO0FBQW9CSCxXQUFDLENBQUNHLENBQUQsQ0FBRCxHQUFLLEtBQUtzTCxLQUFMLENBQVd6SSxRQUFYLENBQW9CLEtBQUswSSxZQUFMLENBQWtCdkwsQ0FBbEIsQ0FBcEIsRUFBeUNGLENBQXpDLENBQUw7QUFBcEI7O0FBQ2hiLGVBQU8sSUFBSXlELENBQUosQ0FBTSxLQUFLK0gsS0FBWCxFQUFpQnpMLENBQWpCLENBQVA7QUFBMkI7QUFuQ0g7QUFBQTtBQUFBLGlDQW1DY0EsQ0FuQ2QsRUFtQ2dCO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLENBQU47QUFBUSxZQUFHLE1BQUlELENBQVAsRUFBUyxPQUFPLEtBQUs4QyxjQUFMLENBQW9CLENBQXBCLENBQVA7QUFBOEIsWUFBSTVDLENBQUMsR0FBQyxLQUFLd0wsWUFBTCxDQUFrQm5JLE1BQXhCO0FBQStCLFlBQUcsTUFBSXZELENBQVAsRUFBUyxPQUFPLEtBQUswTCxZQUFMLENBQWtCakcsT0FBbEIsQ0FBMEIsVUFBQ3pGLENBQUQsRUFBSztBQUFDQyxXQUFDLElBQUVELENBQUg7QUFBSyxTQUFyQyxHQUF1Q0MsQ0FBOUM7QUFBZ0RBLFNBQUMsR0FBQyxLQUFLeUwsWUFBTCxDQUFrQixDQUFsQixDQUFGOztBQUF1QixhQUFJLElBQUl2TCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNELENBQWQsRUFBZ0JDLENBQUMsRUFBakI7QUFBb0JGLFdBQUMsR0FBQ3VDLENBQUMsQ0FBQyxLQUFLaUosS0FBTCxDQUFXekksUUFBWCxDQUFvQmhELENBQXBCLEVBQXNCQyxDQUF0QixDQUFELEVBQTBCLEtBQUt5TCxZQUFMLENBQWtCdkwsQ0FBbEIsQ0FBMUIsQ0FBSDtBQUFwQjs7QUFBdUUsZUFBT0YsQ0FBUDtBQUFTO0FBbkMvUDs7QUFBQTtBQUFBOztBQUFBLE1BbUNzUXdELENBbkN0UTtBQW1Dd1EsZUFBWXpELENBQVosRUFBY0MsQ0FBZCxFQUFnQkMsQ0FBaEIsRUFBa0I7QUFBQTs7QUFBQyxXQUFLeUwsU0FBTCxHQUFlM0wsQ0FBZjtBQUFpQixXQUFLK0QsSUFBTCxHQUFVOUQsQ0FBVjtBQUFZLFdBQUs0RCxhQUFMLEdBQW1CM0QsQ0FBbkI7QUFBcUIsV0FBSzBMLFFBQUwsR0FBYzlILEtBQUssQ0FBQyxLQUFLQyxJQUFOLENBQW5CO0FBQStCLFdBQUs4SCxRQUFMLEdBQWMvSCxLQUFLLENBQUMsS0FBS0MsSUFBTixDQUFuQjtBQUErQi9ELE9BQUMsR0FBQyxDQUFGOztBQUFJLFdBQUlDLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxLQUFLOEQsSUFBZixFQUFvQjlELENBQUMsRUFBckI7QUFBd0IsYUFBSzJMLFFBQUwsQ0FBYzNMLENBQWQsSUFBaUJELENBQWpCLEVBQW1CQSxDQUFDLElBQUUsQ0FBdEIsRUFBd0JBLENBQUMsSUFBRSxLQUFLK0QsSUFBUixLQUFlL0QsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQyxLQUFLMkwsU0FBUixJQUN4ZSxLQUFLNUgsSUFBTCxHQUFVLENBRDZjLENBQXhCO0FBQXhCOztBQUMxWixXQUFJL0QsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDLEtBQUsrRCxJQUFMLEdBQVUsQ0FBcEIsRUFBc0IvRCxDQUFDLEVBQXZCO0FBQTBCLGFBQUs2TCxRQUFMLENBQWMsS0FBS0QsUUFBTCxDQUFjNUwsQ0FBZCxDQUFkLElBQWdDQSxDQUFoQztBQUExQjs7QUFBNEQsV0FBSzJDLElBQUwsR0FBVSxJQUFJZSxDQUFKLENBQU0sSUFBTixFQUFXSixpQkFBaUIsQ0FBQ2YsSUFBbEIsQ0FBdUIsQ0FBQyxDQUFELENBQXZCLENBQVgsQ0FBVjtBQUFrRCxXQUFLSyxHQUFMLEdBQVMsSUFBSWMsQ0FBSixDQUFNLElBQU4sRUFBV0osaUJBQWlCLENBQUNmLElBQWxCLENBQXVCLENBQUMsQ0FBRCxDQUF2QixDQUFYLENBQVQ7QUFBaUQ7O0FBcENwSjtBQUFBO0FBQUEsK0JBb0M2SnZDLENBcEM3SixFQW9DK0pDLENBcEMvSixFQW9DaUs7QUFBQyxlQUFPLE1BQUlELENBQUosSUFBTyxNQUFJQyxDQUFYLEdBQWEsQ0FBYixHQUFlLEtBQUsyTCxRQUFMLENBQWMsQ0FBQyxLQUFLQyxRQUFMLENBQWM3TCxDQUFkLElBQWlCLEtBQUs2TCxRQUFMLENBQWM1TCxDQUFkLENBQWxCLEtBQXFDLEtBQUs4RCxJQUFMLEdBQVUsQ0FBL0MsQ0FBZCxDQUF0QjtBQUF1RjtBQXBDelA7QUFBQTtBQUFBLDhCQW9DaVEvRCxDQXBDalEsRUFvQ21RO0FBQUMsWUFBRyxNQUFJQSxDQUFQLEVBQVMsTUFBTTBCLEtBQUssQ0FBQyxnQkFBRCxDQUFYO0FBQThCLGVBQU8sS0FBS2tLLFFBQUwsQ0FBYyxLQUFLN0gsSUFBTCxHQUFVLEtBQUs4SCxRQUFMLENBQWM3TCxDQUFkLENBQVYsR0FBMkIsQ0FBekMsQ0FBUDtBQUFtRDtBQXBDOVY7QUFBQTtBQUFBLG9DQW9DNFdBLENBcEM1VyxFQW9DOFdDLENBcEM5VyxFQW9DZ1g7QUFBQyxZQUFHLElBQUVELENBQUwsRUFBTyxNQUFNMEIsS0FBSyxDQUFDLHFDQUFELENBQVg7QUFBbUQsWUFBRyxNQUFJekIsQ0FBUCxFQUFTLE9BQU8sS0FBSzBDLElBQVo7QUFBaUIzQyxTQUFDLEdBQUMsSUFBSXNELGlCQUFKLENBQXNCdEQsQ0FBQyxHQUN0ZixDQUQrZCxDQUFGO0FBQzFkQSxTQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtDLENBQUw7QUFBTyxlQUFPLElBQUl5RCxDQUFKLENBQU0sSUFBTixFQUFXMUQsQ0FBWCxDQUFQO0FBQXFCO0FBckNQO0FBQUE7QUFBQSwwQkFxQ1dBLENBckNYLEVBcUNhO0FBQUMsWUFBRyxNQUFJQSxDQUFQLEVBQVMsTUFBTTBCLEtBQUssQ0FBQyxtQkFBRCxDQUFYO0FBQWlDLGVBQU8sS0FBS21LLFFBQUwsQ0FBYzdMLENBQWQsQ0FBUDtBQUF3QjtBQXJDaEY7QUFBQTtBQUFBLDBCQXFDb0ZBLENBckNwRixFQXFDc0Y7QUFBQyxlQUFPLEtBQUs0TCxRQUFMLENBQWM1TCxDQUFkLENBQVA7QUFBd0I7QUFyQy9HOztBQUFBO0FBQUE7O0FBcUNnSCxNQUFJK0UsQ0FBQyxHQUFDLENBQUM7QUFBQ0UsWUFBUSxFQUFDLElBQVY7QUFBZVgsaUJBQWEsRUFBQyxDQUE3QjtBQUErQkksMkJBQXVCLEVBQUMsRUFBdkQ7QUFBMERhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsQ0FBckI7QUFBdUJOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWhDLEtBQUQsRUFBMkU7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQTNFLEVBQXNKO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUF0SixFQUFpTztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBak87QUFBaEYsR0FBRCxFQUM5STtBQUFDWCxZQUFRLEVBQUMsSUFBVjtBQUFlWCxpQkFBYSxFQUFDLENBQTdCO0FBQStCSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILENBQXZEO0FBQThEYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUFELEVBQTRFO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUE1RSxFQUF1SjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBdkosRUFBa087QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQWxPO0FBQXBGLEdBRDhJLEVBQ3FQO0FBQUNYLFlBQVEsRUFBQyxJQUFWO0FBQWVYLGlCQUFhLEVBQUMsQ0FBN0I7QUFBK0JJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBdkQ7QUFBOERhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUMxZkUsNkJBQXFCLEVBQUM7QUFEb2UsT0FBRDtBQUFqQyxLQUFELEVBQzNiO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUQyYixFQUNoWDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FEZ1gsRUFDclM7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBRHFTO0FBQXBGLEdBRHJQLEVBRWlIO0FBQUNYLFlBQVEsRUFBQyxJQUFWO0FBQWVYLGlCQUFhLEVBQUMsQ0FBN0I7QUFBK0JJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FBdkQ7QUFBOERhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQUQsRUFBNEU7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQTVFLEVBQXVKO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQzFlTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQURpZSxLQUF2SixFQUNoUztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FEZ1M7QUFBcEYsR0FGakgsRUFHZjtBQUFDWCxZQUFRLEVBQUMsSUFBVjtBQUFlWCxpQkFBYSxFQUFDLENBQTdCO0FBQStCSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILENBQXZEO0FBQThEYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUFELEVBQTZFO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUE3RSxFQUF3SjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQXhKLEVBQTBRO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQzdkTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFEb2QsS0FBMVE7QUFBcEYsR0FIZSxFQUlsRDtBQUFDWCxZQUFRLEVBQUMsSUFBVjtBQUFlWCxpQkFBYSxFQUFDLENBQTdCO0FBQStCSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILENBQXZEO0FBQThEYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUFELEVBQTRFO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUE1RSxFQUF1SjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBdkosRUFBa087QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQWxPO0FBQXBGLEdBSmtELEVBSWlWO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQWdCWCxpQkFBYSxFQUFDLENBQTlCO0FBQy9kSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUR1YztBQUM3YmEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBRCxFQUE0RTtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBNUUsRUFBdUo7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUF2SixFQUF5UTtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQXpRO0FBRHVhLEdBSmpWLEVBS3VTO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQWdCWCxpQkFBYSxFQUFDLENBQTlCO0FBQWdDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUF4RDtBQUNyYmEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBRCxFQUE0RTtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQTVFLEVBQThMO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBOUwsRUFBZ1Q7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFoVDtBQUQrWixHQUx2UyxFQU00UztBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxDQUE5QjtBQUFnQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQ2xmLEVBRGtmLEVBQy9lLEVBRCtlLENBQXhEO0FBQ25iYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRDtBQUFqQyxLQUFELEVBQTZFO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBN0UsRUFBK0w7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUEvTCxFQUFpVDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQWpUO0FBRDZaLEdBTjVTLEVBT29UO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQWdCWCxpQkFBYSxFQUFDLEVBQTlCO0FBQWlDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFDM2YsRUFEMmYsRUFDeGYsRUFEd2YsQ0FBekQ7QUFDM2JhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFELEVBQW1IO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBbkgsRUFBcU87QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFyTyxFQUF1VjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQXZWO0FBRHFhLEdBUHBULEVBUTBWO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQ3hlWCxpQkFBYSxFQUFDLEVBRDBkO0FBQ3ZkSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixDQUQrYjtBQUNyYmEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQ7QUFBakMsS0FBRCxFQUE0RTtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQTVFLEVBQThMO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBOUwsRUFBZ1Q7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFoVDtBQUQrWixHQVIxVixFQVMrVjtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUM3ZVgsaUJBQWEsRUFBQyxFQUQrZDtBQUM1ZEksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FEb2M7QUFDMWJhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFELEVBQW1IO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBbkgsRUFBcU87QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUFyTyxFQUF1VjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQ3plRSw2QkFBcUIsRUFBQztBQURtZCxPQUF4QztBQUFqQyxLQUF2VjtBQURvYSxHQVQvVixFQVdoSDtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sQ0FBekQ7QUFBbUVhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFEO0FBQWpDLEtBQUQsRUFBNkU7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF4QztBQUFqQyxLQUE3RSxFQUErTDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQS9MLEVBQWlUO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFDbGZFLDZCQUFxQixFQUFDO0FBRDRkLE9BQXpDO0FBQWpDLEtBQWpUO0FBQXpGLEdBWGdILEVBWWhIO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQWdCWCxpQkFBYSxFQUFDLEVBQTlCO0FBQWlDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsQ0FBekQ7QUFBc0VhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQUFELEVBQXFIO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBckgsRUFBdU87QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQUF2TyxFQUEwVjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQ3RmRSw2QkFBcUIsRUFBQztBQURnZSxPQUFELEVBQzNkO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUQyZDtBQUFqQyxLQUExVjtBQUE1RixHQVpnSCxFQWF6RTtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULENBQXpEO0FBQXNFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBRCxFQUFtSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQW5ILEVBQXFPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBck8sRUFDaks7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQURpSztBQUE1RixHQWJ5RSxFQWN6QjtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULENBQXpEO0FBQXNFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBeEM7QUFBakMsS0FBRCxFQUFtSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXhDO0FBQWpDLEtBQW5ILEVBQXFPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUN2ZDtBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FEdWQ7QUFBakMsS0FBck8sRUFDeEs7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUR3SztBQUE1RixHQWR5QixFQWVnQjtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULENBQXpEO0FBQXNFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FBRCxFQUFxSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQXJILEVBQXdPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQ2xlTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBeEM7QUFEeWQsS0FBeE8sRUFDL0o7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUQrSjtBQUE1RixHQWZoQixFQWdCa0U7QUFBQ1gsWUFBUSxFQUFDLEtBQVY7QUFBZ0JYLGlCQUFhLEVBQUMsRUFBOUI7QUFBaUNJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxDQUF6RDtBQUFzRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQUQsRUFBcUg7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUMxZUUsNkJBQXFCLEVBQUM7QUFEb2QsT0FBeEM7QUFBakMsS0FBckgsRUFDaFI7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQURnUixFQUM3SjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXhDO0FBQWpDLEtBRDZKO0FBQTVGLEdBaEJsRSxFQWlCc0g7QUFBQ1gsWUFBUSxFQUFDLEtBQVY7QUFBZ0JYLGlCQUFhLEVBQUMsRUFBOUI7QUFBaUNJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxDQUF6RDtBQUFzRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQUQsRUFBcUg7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUN2ZkUsNkJBQXFCLEVBQUM7QUFEaWUsT0FBRCxFQUM1ZDtBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FENGQ7QUFBakMsS0FBckgsRUFDNVI7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQUQ0UixFQUN6SztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXhDO0FBQWpDLEtBRHlLO0FBQTVGLEdBakJ0SCxFQWtCOEo7QUFBQ1gsWUFBUSxFQUFDLEtBQVY7QUFBZ0JYLGlCQUFhLEVBQUMsRUFBOUI7QUFBaUNJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxDQUF6RDtBQUFzRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQUQsRUFDeFk7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUR3WSxFQUNyUjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBRHFSLEVBQ2xLO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEa0s7QUFBNUYsR0FsQjlKLEVBbUI4TTtBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksRUFBWixDQUF6RDtBQUF5RWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFDN2Q7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BRDZkO0FBQWpDLEtBQUQsRUFDalo7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFEO0FBQWpDLEtBRGlaLEVBQ3JVO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FEcVUsRUFDbE47QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQURrTjtBQUEvRixHQW5COU0sRUFvQmdOO0FBQUNYLFlBQVEsRUFBQyxLQUFWO0FBQWdCWCxpQkFBYSxFQUFDLEVBQTlCO0FBQWlDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxFQUFaLENBQXpEO0FBQXlFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUMvZDtBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FEK2Q7QUFBakMsS0FBRCxFQUNuWjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQ7QUFBakMsS0FEbVosRUFDdlU7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUR1VSxFQUNwTjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQ7QUFBakMsS0FEb047QUFBL0YsR0FwQmhOLEVBcUJ5SztBQUFDWCxZQUFRLEVBQUMsS0FBVjtBQUFnQlgsaUJBQWEsRUFBQyxFQUE5QjtBQUFpQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixDQUF6RDtBQUEwRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQUQsRUFDdlo7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUR1WixFQUNwUztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRG9TLEVBQ2hMO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEZ0w7QUFBaEcsR0FyQnpLLEVBc0IrTTtBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixDQUExRDtBQUEyRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFDaGU7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BRGdlO0FBQWpDLEtBQUQsRUFDcFo7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQURvWixFQUNqUztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRGlTLEVBQzdLO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FENks7QUFBakcsR0F0Qi9NLEVBdUJ3UDtBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixDQUExRDtBQUEyRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUN4ZU4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBRCtkLEtBQUQsRUFDM1k7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUQyWSxFQUN4UjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXhDO0FBQWpDLEtBRHdSLEVBQ3JLO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEcUs7QUFBakcsR0F2QnhQLEVBd0IwUztBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQ2xmLEVBRGtmLEVBQy9lLEVBRCtlLEVBQzVlLEVBRDRlLEVBQ3plLEdBRHllLENBQTFEO0FBQzFhYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUEwQztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBMUM7QUFBakMsS0FBRCxFQUFzSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQXRILEVBQXlPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FBek8sRUFBNFY7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQUE1VjtBQURvWixHQXhCMVMsRUEwQjlJO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLENBQTFEO0FBQTJFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FBRCxFQUFxSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQXJILEVBQXdPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBeEM7QUFBakMsS0FBeE8sRUFBMlY7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQzdkO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUQ2ZDtBQUFqQyxLQUEzVjtBQUFqRyxHQTFCOEksRUEyQmxHO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxFQUFaLEVBQWUsR0FBZixDQUExRDtBQUE4RWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBQUQsRUFBc0g7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXdDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF4QztBQUFqQyxLQUF0SCxFQUF5TztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXhDO0FBQWpDLEtBQXpPLEVBQTRWO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQzVlTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFEbWUsS0FBNVY7QUFBcEcsR0EzQmtHLEVBNEJoRDtBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixDQUExRDtBQUErRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQUQsRUFBcUg7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQUFySCxFQUF3TztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQ3BmRSw2QkFBcUIsRUFBQztBQUQ4ZCxPQUF4QztBQUFqQyxLQUF4TyxFQUN2SztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRHVLO0FBQXJHLEdBNUJnRCxFQTZCSTtBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixDQUExRDtBQUErRWEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBQUQsRUFBc0g7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUF0SCxFQUEwTztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUNqZU4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBRHdkLEtBQTFPLEVBQzNKO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEMko7QUFBckcsR0E3QkosRUE4Qm9FO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQTFEO0FBQStFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUEwQztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBMUM7QUFBakMsS0FBRCxFQUFzSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFDOWM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BRDhjO0FBQWpDLEtBQXRILEVBQzdRO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FENlEsRUFDMUo7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUQwSjtBQUFyRyxHQTlCcEUsRUErQnFJO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQTFEO0FBQStFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRDtBQUFqQyxLQUFELEVBQThFO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFDeGVFLDZCQUFxQixFQUFDO0FBRGtkLE9BQUQsRUFDN2M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BRDZjO0FBQWpDLEtBQTlFLEVBQ3BUO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEb1QsRUFDaE07QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQURnTTtBQUFyRyxHQS9CckksRUFnQ2dLO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQTFEO0FBQStFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUEwQztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBMUM7QUFBakMsS0FBRCxFQUNuWjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRG1aLEVBQy9SO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEK1IsRUFDM0s7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUQySztBQUFyRyxHQWhDaEssRUFpQ2dOO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQTFEO0FBQStFYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUNyZTtBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FEcWU7QUFBakMsS0FBRCxFQUN6WjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRHlaLEVBQ3JTO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBekM7QUFBakMsS0FEcVMsRUFDbEw7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUF6QztBQUFqQyxLQURrTDtBQUFyRyxHQWpDaE4sRUFrQ3dQO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLENBQTFEO0FBQW1GYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQ2hmTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUEwQztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBMUM7QUFEdWUsS0FBRCxFQUNsWjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRGtaLEVBQzlSO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEOFIsRUFDMUs7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUQwSztBQUF6RyxHQWxDeFAsRUFtQzZTO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFDcmYsRUFEcWYsRUFDbGYsRUFEa2YsRUFDL2UsRUFEK2UsRUFDNWUsR0FENGUsRUFDeGUsR0FEd2UsRUFDcGUsR0FEb2UsQ0FBMUQ7QUFDcmFhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUFELEVBQXNIO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF3QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBeEM7QUFBakMsS0FBdEgsRUFBeU87QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUF6TyxFQUE2VjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQUQsRUFBd0M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXhDO0FBQWpDLEtBQTdWO0FBRCtZLEdBbkM3UyxFQXFDOUk7QUFBQ1gsWUFBUSxFQUFDLE1BQVY7QUFBaUJYLGlCQUFhLEVBQUMsRUFBL0I7QUFBa0NJLDJCQUF1QixFQUFDLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLEVBQVMsRUFBVCxFQUFZLEdBQVosRUFBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsQ0FBMUQ7QUFBbUZhLHlCQUFxQixFQUFDLENBQUM7QUFBQ08seUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQTBDO0FBQUNGLGlCQUFTLEVBQUMsQ0FBWDtBQUFhRSw2QkFBcUIsRUFBQztBQUFuQyxPQUExQztBQUFqQyxLQUFELEVBQXNIO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FBdEgsRUFBME87QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUExTyxFQUE4VjtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQ3plRSw2QkFBcUIsRUFBQztBQURtZCxPQUFELEVBQzljO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUQ4YztBQUFqQyxLQUE5VjtBQUF6RyxHQXJDOEksRUFzQ3hFO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLENBQTFEO0FBQW1GYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FBRCxFQUFzSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBQXRILEVBQTBPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FBMU8sRUFDL0s7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUQrSztBQUF6RyxHQXRDd0UsRUF1Q3hCO0FBQUNYLFlBQVEsRUFBQyxNQUFWO0FBQWlCWCxpQkFBYSxFQUFDLEVBQS9CO0FBQWtDSSwyQkFBdUIsRUFBQyxDQUFDLENBQUQsRUFBRyxFQUFILEVBQU0sRUFBTixFQUFTLEVBQVQsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLEVBQW9CLEdBQXBCLENBQTFEO0FBQW1GYSx5QkFBcUIsRUFBQyxDQUFDO0FBQUNPLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUEwQztBQUFDRixpQkFBUyxFQUFDLENBQVg7QUFBYUUsNkJBQXFCLEVBQUM7QUFBbkMsT0FBMUM7QUFBakMsS0FBRCxFQUFzSDtBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQXpDO0FBQWpDLEtBQXRILEVBQXlPO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFDMWVFLDZCQUFxQixFQUFDO0FBRG9kLE9BQUQsRUFDL2M7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BRCtjO0FBQWpDLEtBQXpPLEVBQzNKO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEMko7QUFBekcsR0F2Q3dCLEVBd0M0QztBQUFDWCxZQUFRLEVBQUMsTUFBVjtBQUFpQlgsaUJBQWEsRUFBQyxFQUEvQjtBQUFrQ0ksMkJBQXVCLEVBQUMsQ0FBQyxDQUFELEVBQUcsRUFBSCxFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksR0FBWixFQUFnQixHQUFoQixFQUFvQixHQUFwQixDQUExRDtBQUFtRmEseUJBQXFCLEVBQUMsQ0FBQztBQUFDTyx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBMEM7QUFBQ0YsaUJBQVMsRUFBQyxDQUFYO0FBQWFFLDZCQUFxQixFQUFDO0FBQW5DLE9BQTFDO0FBQWpDLEtBQUQsRUFBc0g7QUFBQ0UseUJBQW1CLEVBQUMsRUFBckI7QUFBd0JOLGNBQVEsRUFBQyxDQUFDO0FBQUNFLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUFELEVBQXlDO0FBQUNGLGlCQUFTLEVBQUMsRUFBWDtBQUFjRSw2QkFBcUIsRUFBQztBQUFwQyxPQUF6QztBQUFqQyxLQUF0SCxFQUNuUztBQUFDRSx5QkFBbUIsRUFBQyxFQUFyQjtBQUF3Qk4sY0FBUSxFQUFDLENBQUM7QUFBQ0UsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQUQsRUFBeUM7QUFBQ0YsaUJBQVMsRUFBQyxFQUFYO0FBQWNFLDZCQUFxQixFQUFDO0FBQXBDLE9BQXpDO0FBQWpDLEtBRG1TLEVBQy9LO0FBQUNFLHlCQUFtQixFQUFDLEVBQXJCO0FBQXdCTixjQUFRLEVBQUMsQ0FBQztBQUFDRSxpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBRCxFQUF5QztBQUFDRixpQkFBUyxFQUFDLEVBQVg7QUFBY0UsNkJBQXFCLEVBQUM7QUFBcEMsT0FBekM7QUFBakMsS0FEK0s7QUFBekcsR0F4QzVDLENBQU47QUFBQSxNQXlDbUdULEVBQUUsR0FBQyxDQUFDO0FBQUNDLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQUFELEVBQTZEO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FBN0QsRUFBeUg7QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQUF6SCxFQUFxTDtBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBQXJMLEVBQWlQO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFDdGY5QixjQUFRLEVBQUM7QUFENmU7QUFBdkIsR0FBalAsRUFDak87QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQURpTyxFQUNySztBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBRHFLLEVBQ3pHO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FEeUcsRUFDN0M7QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQUQ2QyxFQUNlO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FEZixFQUMyRTtBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBRDNFLEVBQ3VJO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FEdkksRUFDbU07QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQURuTSxFQUMrUDtBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFDN2VDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQURrZSxHQUQvUCxFQUU5TDtBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBRjhMLEVBRWxJO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FGa0ksRUFFdEU7QUFBQ2dCLFFBQUksRUFBQyxJQUFOO0FBQVdDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF0QixHQUZzRSxFQUVYO0FBQUNnQixRQUFJLEVBQUMsSUFBTjtBQUFXQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdEIsR0FGVyxFQUVnRDtBQUFDZ0IsUUFBSSxFQUFDLElBQU47QUFBV0MsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXRCLEdBRmhELEVBRTJHO0FBQUNnQixRQUFJLEVBQUMsSUFBTjtBQUFXQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdEIsR0FGM0csRUFFc0s7QUFBQ2dCLFFBQUksRUFBQyxJQUFOO0FBQVdDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF0QixHQUZ0SyxFQUVpTztBQUFDZ0IsUUFBSSxFQUFDLEdBQU47QUFBVUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQ3BlOUIsY0FBUSxFQUFDO0FBRDJkO0FBQXJCLEdBRmpPLEVBR2pPO0FBQUNnQixRQUFJLEVBQUMsSUFBTjtBQUFXQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdEIsR0FIaU8sRUFHdEs7QUFBQ2dCLFFBQUksRUFBQyxJQUFOO0FBQVdDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF0QixHQUhzSyxFQUczRztBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBSDJHLEVBRy9DO0FBQUNnQixRQUFJLEVBQUMsS0FBTjtBQUFZQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdkIsR0FIK0MsRUFHYTtBQUFDZ0IsUUFBSSxFQUFDLEtBQU47QUFBWUMsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXZCLEdBSGIsRUFHeUU7QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQUh6RSxFQUdxSTtBQUFDZ0IsUUFBSSxFQUFDLElBQU47QUFBV0MsY0FBVSxFQUFDO0FBQUNhLDBCQUFvQixFQUFDLENBQXRCO0FBQXdCOUIsY0FBUSxFQUFDO0FBQWpDO0FBQXRCLEdBSHJJLEVBR2dNO0FBQUNnQixRQUFJLEVBQUMsSUFBTjtBQUFXQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFBdEIsR0FIaE0sRUFHMlA7QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQ3plQyxjQUFVLEVBQUM7QUFBQ2EsMEJBQW9CLEVBQUMsQ0FBdEI7QUFBd0I5QixjQUFRLEVBQUM7QUFBakM7QUFEOGQsR0FIM1AsRUFJOUw7QUFBQ2dCLFFBQUksRUFBQyxLQUFOO0FBQVlDLGNBQVUsRUFBQztBQUFDYSwwQkFBb0IsRUFBQyxDQUF0QjtBQUF3QjlCLGNBQVEsRUFBQztBQUFqQztBQUF2QixHQUo4TCxDQXpDdEc7QUFBQSxNQTZDM0JELENBQUMsR0FBQyxDQUFDLFVBQUNuRSxDQUFEO0FBQUEsV0FBSyxNQUFJLENBQUNBLENBQUMsQ0FBQ2dCLENBQUYsR0FBSWhCLENBQUMsQ0FBQzZFLENBQVAsSUFBVSxDQUFuQjtBQUFBLEdBQUQsRUFBc0IsVUFBQzdFLENBQUQ7QUFBQSxXQUFLLE1BQUlBLENBQUMsQ0FBQ2dCLENBQUYsR0FBSSxDQUFiO0FBQUEsR0FBdEIsRUFBcUMsVUFBQ2hCLENBQUQ7QUFBQSxXQUFLLE1BQUlBLENBQUMsQ0FBQzZFLENBQUYsR0FBSSxDQUFiO0FBQUEsR0FBckMsRUFBb0QsVUFBQzdFLENBQUQ7QUFBQSxXQUFLLE1BQUksQ0FBQ0EsQ0FBQyxDQUFDZ0IsQ0FBRixHQUFJaEIsQ0FBQyxDQUFDNkUsQ0FBUCxJQUFVLENBQW5CO0FBQUEsR0FBcEQsRUFBeUUsVUFBQzdFLENBQUQ7QUFBQSxXQUFLLE1BQUksQ0FBQzRCLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsQ0FBQyxDQUFDZ0IsQ0FBRixHQUFJLENBQWYsSUFBa0JZLElBQUksQ0FBQ0MsS0FBTCxDQUFXN0IsQ0FBQyxDQUFDNkUsQ0FBRixHQUFJLENBQWYsQ0FBbkIsSUFBc0MsQ0FBL0M7QUFBQSxHQUF6RSxFQUEwSCxVQUFDN0UsQ0FBRDtBQUFBLFdBQUssTUFBSUEsQ0FBQyxDQUFDNkUsQ0FBRixHQUFJN0UsQ0FBQyxDQUFDZ0IsQ0FBTixHQUFRLENBQVIsR0FBVWhCLENBQUMsQ0FBQzZFLENBQUYsR0FBSTdFLENBQUMsQ0FBQ2dCLENBQU4sR0FBUSxDQUEzQjtBQUFBLEdBQTFILEVBQXVKLFVBQUNoQixDQUFEO0FBQUEsV0FBSyxNQUFJLENBQUNBLENBQUMsQ0FBQ2dCLENBQUYsR0FBSWhCLENBQUMsQ0FBQzZFLENBQU4sR0FBUSxDQUFSLEdBQVU3RSxDQUFDLENBQUNnQixDQUFGLEdBQUloQixDQUFDLENBQUM2RSxDQUFOLEdBQVEsQ0FBbkIsSUFBc0IsQ0FBL0I7QUFBQSxHQUF2SixFQUF3TCxVQUFDN0UsQ0FBRDtBQUFBLFdBQUssTUFBSSxDQUFDLENBQUNBLENBQUMsQ0FBQ2dCLENBQUYsR0FBSWhCLENBQUMsQ0FBQzZFLENBQVAsSUFBVSxDQUFWLEdBQVk3RSxDQUFDLENBQUNnQixDQUFGLEdBQUloQixDQUFDLENBQUM2RSxDQUFOLEdBQVEsQ0FBckIsSUFBd0IsQ0FBakM7QUFBQSxHQUF4TCxDQTdDeUI7QUFBQSxNQTZDbU1BLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQUM3RSxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUFPMkIsSUFBSSxDQUFDa0gsSUFBTCxDQUFVbEgsSUFBSSxDQUFDMkcsR0FBTCxDQUFTdEksQ0FBQyxDQUFDNEUsQ0FBRixHQUFJN0UsQ0FBQyxDQUFDNkUsQ0FBZixFQUFpQixDQUFqQixJQUFvQmpELElBQUksQ0FBQzJHLEdBQUwsQ0FBU3RJLENBQUMsQ0FBQ2UsQ0FBRixHQUFJaEIsQ0FBQyxDQUFDZ0IsQ0FBZixFQUFpQixDQUFqQixDQUE5QixDQUFQO0FBQUEsR0E3Q3JNO0FBQUEsTUE2QytQeUosRUFBRSxHQUFDO0FBQUNDLHFCQUFpQixFQUFDLGFBQW5CO0FBQWlDQyxvQkFBZ0IsRUFBQztBQUFDSyxTQUFHLEVBQUMsS0FBTDtBQUFXQyxXQUFLLEVBQUMsS0FBakI7QUFBdUJDLFVBQUksRUFBQyxLQUE1QjtBQUFrQ0gsNkJBQXVCLEVBQUMsQ0FBQztBQUEzRCxLQUFsRDtBQUMxWUgscUJBQWlCLEVBQUMsQ0FBQztBQUR1WCxHQTdDbFE7O0FBOENsSEwsR0FBQyxXQUFELEdBQVVBLENBQVY7QUFBWSxNQUFJdUIsQ0FBQyxHQUFDLFlBQU47QUFBQSxNQUFtQkMsQ0FBQyxHQUFDO0FBQUNmLE9BQUcsRUFBQyxFQUFMO0FBQVFDLFNBQUssRUFBQyxHQUFkO0FBQWtCQyxRQUFJLEVBQUMsRUFBdkI7QUFBMEJILDJCQUF1QixFQUFDLENBQUM7QUFBbkQsR0FBckI7O0FBQTJFaUIsTUFBSSxDQUFDQyxTQUFMLEdBQWUsVUFBQ2pNLENBQUQsRUFBSztBQUFDLFFBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDMEosSUFBRixDQUFPQSxJQUFiOztBQUFrQixZQUFPMUosQ0FBQyxDQUFDMEosSUFBRixDQUFPdkksSUFBZDtBQUFvQixXQUFLLFFBQUw7QUFBY25CLFNBQUMsR0FBQ3VLLENBQUMsQ0FBQ3RLLENBQUMsQ0FBQ3lKLElBQUgsRUFBUXpKLENBQUMsQ0FBQzRJLEtBQVYsRUFBZ0I1SSxDQUFDLENBQUNvRSxNQUFsQixFQUF5QjtBQUFDcUcsMkJBQWlCLEVBQUNvQixDQUFuQjtBQUFxQm5CLDBCQUFnQixFQUFDb0I7QUFBdEMsU0FBekIsQ0FBSDtBQUFzRUMsWUFBSSxDQUFDRSxXQUFMLENBQWlCO0FBQUMvSyxjQUFJLEVBQUMsVUFBTjtBQUFpQnVJLGNBQUksRUFBQzFKLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMEosSUFBSCxHQUFRO0FBQS9CLFNBQWpCO0FBQXVEOztBQUFNLFdBQUssa0JBQUw7QUFBd0JxQyxTQUFDLENBQUNmLEdBQUYsR0FBTS9LLENBQUMsQ0FBQytLLEdBQVI7QUFBWWUsU0FBQyxDQUFDZCxLQUFGLEdBQVFoTCxDQUFDLENBQUNnTCxLQUFWO0FBQWdCYyxTQUFDLENBQUNiLElBQUYsR0FBT2pMLENBQUMsQ0FBQ2lMLElBQVQ7QUFBY2EsU0FBQyxDQUFDaEIsdUJBQUYsR0FBMEI5SyxDQUFDLENBQUM4Syx1QkFBNUI7QUFBb0Q7O0FBQU0sV0FBSyxlQUFMO0FBQXFCLGdCQUFPOUssQ0FBUDtBQUFVLGVBQUssVUFBTDtBQUFnQjZMLGFBQUMsR0FBQyxZQUFGO0FBQWU7O0FBQ25mLGVBQUssUUFBTDtBQUFjQSxhQUFDLEdBQUMsYUFBRjtBQUFnQjs7QUFBTSxlQUFLLE1BQUw7QUFBWUEsYUFBQyxHQUFDLGFBQUY7QUFBZ0I7O0FBQU07QUFBUSxrQkFBTXBLLEtBQUssQ0FBQyx3QkFBRCxDQUFYO0FBRDRYOztBQUNyVjs7QUFBTSxXQUFLLE9BQUw7QUFBYXNLLFlBQUksQ0FBQ0csS0FBTDtBQURZO0FBQ0UsR0FEekM7QUFDMEMsQ0FwRjFJLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQVB2TSxDOzs7Z0NBQW9CO0FBQUMsYUFBT3dNLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsZ0JBQXZCLEdBQTBDck4sSUFBMUMsQ0FBK0MsVUFBQ2UsQ0FBRDtBQUFBLGVBQUtBLENBQUMsQ0FBQ3VNLElBQUYsQ0FBTyxVQUFDdk0sQ0FBRDtBQUFBLGlCQUFLLGlCQUFlQSxDQUFDLENBQUN3TSxJQUF0QjtBQUFBLFNBQVAsQ0FBTDtBQUFBLE9BQS9DLFdBQThGO0FBQUEsZUFBSSxDQUFDLENBQUw7QUFBQSxPQUE5RixDQUFQO0FBQTZHOzs7QUFBQSxhQUFZeE0sQ0FBWixFQUFjRSxDQUFkLEVBQXdDO0FBQUEsUUFBeEJELENBQXdCLHVFQUF0QkwsQ0FBQyxDQUFDNk0sbUJBQW9COztBQUFBOztBQUFDLFNBQUtDLE1BQUwsR0FBWTFNLENBQVo7QUFBYyxTQUFLMk0sT0FBTCxHQUFhN08sUUFBUSxDQUFDOE8sYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQThDLFNBQUtDLFNBQUwsR0FBZTNNLENBQWY7QUFBaUIsU0FBSzRNLE9BQUwsR0FBYSxLQUFLQyxPQUFMLEdBQWEsQ0FBQyxDQUEzQjtBQUE2QixTQUFLSixPQUFMLENBQWE5RCxLQUFiLEdBQW1CNUksQ0FBbkI7QUFBcUIsU0FBSzBNLE9BQUwsQ0FBYXRJLE1BQWIsR0FBb0JwRSxDQUFwQjtBQUFzQixTQUFLK00sV0FBTCxHQUFpQjtBQUFDbkksT0FBQyxFQUFDLENBQUg7QUFBSzdELE9BQUMsRUFBQyxDQUFQO0FBQVM2SCxXQUFLLEVBQUM1SSxDQUFmO0FBQWlCb0UsWUFBTSxFQUFDcEU7QUFBeEIsS0FBakI7QUFBNEMsU0FBS2dOLFVBQUwsR0FBZ0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBaEI7QUFBMkMsU0FBS0MsT0FBTCxHQUFhLEtBQUtBLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFiO0FBQXFDLFNBQUtFLG1CQUFMLEdBQXlCLEtBQUtBLG1CQUFMLENBQXlCRixJQUF6QixDQUE4QixJQUE5QixDQUF6QjtBQUNsYyxTQUFLUixNQUFMLENBQVl0TixnQkFBWixDQUE2QixTQUE3QixFQUF1QyxLQUFLNk4sVUFBNUM7QUFBd0QsU0FBS1AsTUFBTCxDQUFZdE4sZ0JBQVosQ0FBNkIsTUFBN0IsRUFBb0MsS0FBSytOLE9BQXpDO0FBQWtEclAsWUFBUSxDQUFDc0IsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLEtBQUtnTyxtQkFBbEQ7QUFBdUUsU0FBS0MsU0FBTCxHQUFlLElBQUlDLE1BQUosQ0FBVzFOLENBQUMsQ0FBQ2pDLFdBQWIsQ0FBZjtBQUF5Qzs7Ozs4QkFBUztBQUFDLFdBQUsrTyxNQUFMLENBQVlhLG1CQUFaLENBQWdDLFNBQWhDLEVBQTBDLEtBQUtOLFVBQS9DO0FBQTJELFdBQUtQLE1BQUwsQ0FBWWEsbUJBQVosQ0FBZ0MsTUFBaEMsRUFBdUMsS0FBS0osT0FBNUM7QUFBcURyUCxjQUFRLENBQUN5UCxtQkFBVCxDQUE2QixrQkFBN0IsRUFBZ0QsS0FBS0gsbUJBQXJEO0FBQTBFLFdBQUtJLElBQUw7O0FBQVksV0FBS0gsU0FBTCxDQUFlbkIsV0FBZixDQUEyQjtBQUFDL0ssWUFBSSxFQUFDO0FBQU4sT0FBM0I7QUFBMkM7Ozs0QkFBTztBQUFBOztBQUFDLFVBQUcsS0FBSzRMLE9BQUwsSUFBYyxDQUFDLEtBQUtELE9BQXZCLEVBQStCLE9BQU9XLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQzVmLG1CQUFXQyxNQUFNLENBQUNoRSxRQUFQLENBQWdCaUUsUUFBM0IsSUFBcUMvTixPQUFPLENBQUNnTyxJQUFSLENBQWEsNEVBQWIsQ0FBckM7QUFBZ0ksV0FBS2QsT0FBTCxHQUFhLENBQUMsQ0FBZDtBQUFnQixXQUFLRCxPQUFMLEdBQWEsQ0FBQyxDQUFkO0FBQWdCLFVBQUdoUCxRQUFRLENBQUNnUSxNQUFaLEVBQW1CLE9BQU9MLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQXlCN08sa0JBQVksQ0FBQyxLQUFLa1AsV0FBTixDQUFaO0FBQStCLFdBQUtBLFdBQUwsR0FBaUIsSUFBakI7QUFBc0IsVUFBRyxLQUFLckIsTUFBTCxDQUFZc0IsU0FBZixFQUF5QixPQUFPLEtBQUt0QixNQUFMLENBQVl1QixJQUFaLElBQW1CUixPQUFPLENBQUNDLE9BQVIsRUFBMUI7QUFBNEMsVUFBSTFOLENBQUMsR0FBQyxhQUFOO0FBQW9CLGFBQU8sS0FBS2tPLGdCQUFMLENBQXNCLGFBQXRCLEVBQW9DLENBQUMsQ0FBckMsV0FBOEMsWUFBSTtBQUFDbE8sU0FBQyxHQUFDLE1BQUY7QUFBUyxlQUFPLEtBQUksQ0FBQ2tPLGdCQUFMLEVBQVA7QUFBK0IsT0FBM0YsRUFBNkZqUCxJQUE3RixDQUFrRyxVQUFDaUIsQ0FBRCxFQUFLO0FBQUMsYUFBSSxDQUFDd00sTUFBTCxDQUFZc0IsU0FBWixHQUFzQjlOLENBQXRCOztBQUF3QixhQUFJLENBQUNpTyxlQUFMLENBQXFCbk8sQ0FBckI7QUFBd0IsT0FBeEosV0FBZ0ssVUFBQ0EsQ0FBRCxFQUNqZ0I7QUFBQyxhQUFJLENBQUMrTSxPQUFMLEdBQWEsQ0FBQyxDQUFkO0FBQWdCLGNBQU0vTSxDQUFOO0FBQVMsT0FEdVUsQ0FBUDtBQUM5VDs7OzJCQUFNO0FBQUMsV0FBS29PLEtBQUw7QUFBYSxXQUFLckIsT0FBTCxHQUFhLENBQUMsQ0FBZDtBQUFnQjs7OzRCQUFPO0FBQUE7O0FBQUMsV0FBS0QsT0FBTCxHQUFhLENBQUMsQ0FBZDtBQUFnQixXQUFLQyxPQUFMLEtBQWUsS0FBS0wsTUFBTCxDQUFZMEIsS0FBWixJQUFvQixLQUFLTCxXQUFMLEtBQW1CLEtBQUtBLFdBQUwsR0FBaUJoUCxVQUFVLENBQUMsWUFBSTtBQUFDLFlBQUlpQixDQUFDLEdBQUMsTUFBSSxDQUFDME0sTUFBTCxDQUFZc0IsU0FBWixJQUF1QixNQUFJLENBQUN0QixNQUFMLENBQVlzQixTQUFaLENBQXNCSyxTQUF0QixHQUFrQyxDQUFsQyxDQUE3Qjs7QUFBa0VyTyxTQUFDLEtBQUdBLENBQUMsQ0FBQ3dOLElBQUYsSUFBUyxNQUFJLENBQUNPLFdBQUwsR0FBaUIsTUFBSSxDQUFDckIsTUFBTCxDQUFZc0IsU0FBWixHQUFzQixJQUFuRCxDQUFEO0FBQTBELE9BQWxJLEVBQW1JLEdBQW5JLENBQTlDLENBQW5DO0FBQTJOOzs7d0NBRW5MaE8sQyxFQUFFRSxDLEVBQUVELEMsRUFBTztBQUFBLFVBQUxFLENBQUssdUVBQUgsQ0FBQyxDQUFFOztBQUFDLFdBQUtrTixTQUFMLENBQWVuQixXQUFmLENBQTJCO0FBQUMvSyxZQUFJLEVBQUMsa0JBQU47QUFBeUJ1SSxZQUFJLEVBQUM7QUFBQ3NCLGFBQUcsRUFBQ2hMLENBQUw7QUFBT2lMLGVBQUssRUFBQy9LLENBQWI7QUFBZWdMLGNBQUksRUFBQ2pMLENBQXBCO0FBQXNCOEssaUNBQXVCLEVBQUM1SztBQUE5QztBQUE5QixPQUEzQjtBQUE0Rzs7O3FDQUFpQkgsQyxFQUFFO0FBQUMsV0FBS3FOLFNBQUwsQ0FBZW5CLFdBQWYsQ0FBMkI7QUFBQy9LLFlBQUksRUFBQyxlQUFOO0FBQXNCdUksWUFBSSxFQUFDMUo7QUFBM0IsT0FBM0I7QUFBMEQ7OztpQ0FBWTtBQUFDLFdBQUtzTyxpQkFBTDs7QUFBeUIsV0FBSzVCLE1BQUwsQ0FBWXVCLElBQVo7QUFBbUI7Ozs4QkFBUztBQUFDLFdBQUtLLGlCQUFMOztBQUF5QixXQUFLQyxVQUFMO0FBQWtCOzs7MENBQXFCO0FBQUN6USxjQUFRLENBQUNnUSxNQUFULEdBQWdCLEtBQUtNLEtBQUwsRUFBaEIsR0FBNkIsS0FBS3JCLE9BQUwsSUFDdmUsS0FBSzVOLEtBQUwsRUFEMGM7QUFDN2I7Ozt3Q0FBbUI7QUFBQyxVQUFJYSxDQUFDLEdBQUM0QixJQUFJLENBQUNpRyxLQUFMLENBQVcsSUFBRSxDQUFGLEdBQUlqRyxJQUFJLENBQUNnSCxHQUFMLENBQVMsS0FBSzhELE1BQUwsQ0FBWThCLFVBQXJCLEVBQWdDLEtBQUs5QixNQUFMLENBQVkrQixXQUE1QyxDQUFmLENBQU47QUFBK0UsV0FBS3pCLFdBQUwsQ0FBaUJuRSxLQUFqQixHQUF1QixLQUFLbUUsV0FBTCxDQUFpQjNJLE1BQWpCLEdBQXdCckUsQ0FBL0M7QUFBaUQsV0FBS2dOLFdBQUwsQ0FBaUJuSSxDQUFqQixHQUFtQixDQUFDLEtBQUs2SCxNQUFMLENBQVk4QixVQUFaLEdBQXVCeE8sQ0FBeEIsSUFBMkIsQ0FBOUM7QUFBZ0QsV0FBS2dOLFdBQUwsQ0FBaUJoTSxDQUFqQixHQUFtQixDQUFDLEtBQUswTCxNQUFMLENBQVkrQixXQUFaLEdBQXdCek8sQ0FBekIsSUFBNEIsQ0FBL0M7QUFBaUQ7OztpQ0FBWTtBQUFBOztBQUFDLFVBQUcsQ0FBQyxLQUFLK00sT0FBTixJQUFlLEtBQUtMLE1BQUwsQ0FBWWdDLE1BQTNCLElBQW1DLEtBQUtoQyxNQUFMLENBQVlpQyxLQUFsRCxFQUF3RCxPQUFNLENBQUMsQ0FBUDtBQUFTQywyQkFBcUIsQ0FBQyxZQUFJO0FBQUNoUCxTQUFDLENBQUNELFNBQUYsQ0FBWSxNQUFJLENBQUMrTSxNQUFqQixFQUF3QixNQUFJLENBQUNNLFdBQTdCLEVBQXlDLE1BQUksQ0FBQ0ssU0FBOUMsRUFBd0QsTUFBSSxDQUFDVixPQUE3RCxFQUFxRSxDQUFDLENBQXRFLEVBQXlFMU4sSUFBekUsQ0FBOEUsTUFBSSxDQUFDNE4sU0FBbkYsRUFBNkYsVUFBQzdNLENBQUQsRUFBSztBQUFDLGdCQUFJLENBQUMrTSxPQUFMLElBQWMseUJBQXVCL00sQ0FBckMsSUFDOWNILE9BQU8sQ0FBQzRJLEtBQVIsQ0FBY3pJLENBQWQsQ0FEOGM7QUFDN2IsU0FEMFYsRUFDeFZmLElBRHdWLENBQ25WO0FBQUEsaUJBQUksTUFBSSxDQUFDc1AsVUFBTCxFQUFKO0FBQUEsU0FEbVY7QUFDNVQsT0FEc1QsQ0FBckI7QUFDL1I7OztxQ0FBaUJ2TyxDLEVBQU87QUFBQSxVQUFMRSxDQUFLLHVFQUFILENBQUMsQ0FBRTtBQUFDLFVBQUlELENBQUMsR0FBQyxDQUFDO0FBQUM0SSxhQUFLLEVBQUM7QUFBQ0QsYUFBRyxFQUFDO0FBQUw7QUFBUCxPQUFELEVBQW9CO0FBQUNDLGFBQUssRUFBQztBQUFDRCxhQUFHLEVBQUM7QUFBTDtBQUFQLE9BQXBCLEVBQXNDLEVBQXRDLENBQU47QUFBZ0Q1SSxPQUFDLEtBQUdFLENBQUMsS0FBR0YsQ0FBQyxHQUFDO0FBQUM2TyxhQUFLLEVBQUM3TztBQUFQLE9BQUwsQ0FBRCxFQUFpQkMsQ0FBQyxDQUFDd0YsT0FBRixDQUFVLFVBQUN4RixDQUFEO0FBQUEsZUFBS0EsQ0FBQyxDQUFDNk8sVUFBRixHQUFhOU8sQ0FBbEI7QUFBQSxPQUFWLENBQXBCLENBQUQ7QUFBcUQsYUFBTyxLQUFLK08sd0JBQUwsQ0FBOEI5TyxDQUE5QixDQUFQO0FBQXdDOzs7NkNBQXlCRCxDLEVBQUU7QUFBQTs7QUFBQyxhQUFPLE1BQUlBLENBQUMsQ0FBQ3VELE1BQU4sR0FBYWtLLE9BQU8sQ0FBQ3VCLE1BQVIsQ0FBZSxtQkFBZixDQUFiLEdBQWlENUMsU0FBUyxDQUFDQyxZQUFWLENBQXVCNEMsWUFBdkIsQ0FBb0M7QUFBQ3BSLGFBQUssRUFBQ21DLENBQUMsQ0FBQ2dHLEtBQUY7QUFBUCxPQUFwQyxXQUE2RDtBQUFBLGVBQUksTUFBSSxDQUFDK0ksd0JBQUwsQ0FBOEIvTyxDQUE5QixDQUFKO0FBQUEsT0FBN0QsQ0FBeEQ7QUFBMko7OztvQ0FBZ0JBLEMsRUFBRTtBQUFDLFdBQUswTSxNQUFMLENBQVkvTixLQUFaLENBQWtCdVEsU0FBbEIsR0FBNEIsYUFBVyxXQUFTbFAsQ0FBVCxHQUFXLENBQUMsQ0FBWixHQUFjLENBQXpCLElBQTRCLEdBQXhEO0FBQTREOzs7OEJBSnpKQSxDLEVBQWlDO0FBQUEsVUFBL0JFLENBQStCLHVFQUE3QixJQUE2QjtBQUFBLFVBQXhCRCxDQUF3Qix1RUFBdEIsSUFBc0I7QUFBQSxVQUFqQkUsQ0FBaUIsdUVBQWYsSUFBZTtBQUFBLFVBQVZxQixDQUFVLHVFQUFSLENBQUMsQ0FBTztBQUFBLFVBQUxELENBQUssdUVBQUgsQ0FBQyxDQUFFO0FBQUMsVUFBSUUsQ0FBQyxHQUFDLENBQUMsQ0FBUDtBQUFBLFVBQVM2RixDQUFDLEdBQUMsSUFBSW1HLE9BQUosQ0FBWSxVQUFDbkcsQ0FBRCxFQUFHL0YsQ0FBSCxFQUFPO0FBQUN0QixTQUFDLEtBQUdBLENBQUMsR0FBQyxJQUFJcU4sTUFBSixDQUFXMU4sQ0FBQyxDQUFDakMsV0FBYixDQUFGLEVBQTRCOEQsQ0FBQyxHQUFDLENBQUMsQ0FBL0IsRUFBaUN4QixDQUFDLENBQUNpTSxXQUFGLENBQWM7QUFBQy9LLGNBQUksRUFBQyxlQUFOO0FBQXNCdUksY0FBSSxFQUFDO0FBQTNCLFNBQWQsQ0FBcEMsQ0FBRDs7QUFBd0YsWUFBSXJDLENBQUosRUFBTXZGLEVBQU4sRUFBUUgsRUFBUjs7QUFBVUcsVUFBQyxHQUFDLFdBQUM5QixDQUFELEVBQUs7QUFBQyx5QkFDL2VBLENBQUMsQ0FBQzBKLElBQUYsQ0FBT3ZJLElBRHdlLEtBQ2plbEIsQ0FBQyxDQUFDc04sbUJBQUYsQ0FBc0IsU0FBdEIsRUFBZ0N6TCxFQUFoQyxHQUFtQzdCLENBQUMsQ0FBQ3NOLG1CQUFGLENBQXNCLE9BQXRCLEVBQThCNUwsRUFBOUIsQ0FBbkMsRUFBb0U5QyxZQUFZLENBQUN3SSxDQUFELENBQWhGLEVBQW9GLFNBQU9ySCxDQUFDLENBQUMwSixJQUFGLENBQU9BLElBQWQsR0FBbUJwQyxDQUFDLENBQUN0SCxDQUFDLENBQUMwSixJQUFGLENBQU9BLElBQVIsQ0FBcEIsR0FBa0NuSSxDQUFDLENBQUMsb0JBQUQsQ0FEMFc7QUFDbFYsU0FEMFU7O0FBQ3pVSSxVQUFDLEdBQUMsV0FBQzNCLENBQUQsRUFBSztBQUFDQyxXQUFDLENBQUNzTixtQkFBRixDQUFzQixTQUF0QixFQUFnQ3pMLEVBQWhDO0FBQW1DN0IsV0FBQyxDQUFDc04sbUJBQUYsQ0FBc0IsT0FBdEIsRUFBOEI1TCxFQUE5QjtBQUFpQzlDLHNCQUFZLENBQUN3SSxDQUFELENBQVo7QUFBZ0I5RixXQUFDLENBQUMscUJBQW1CdkIsQ0FBQyxHQUFDQSxDQUFDLENBQUNtUCxPQUFGLElBQVduUCxDQUFaLEdBQWMsZUFBbEMsQ0FBRCxDQUFEO0FBQXNELFNBQWxKOztBQUFtSkMsU0FBQyxDQUFDYixnQkFBRixDQUFtQixTQUFuQixFQUE2QjBDLEVBQTdCO0FBQWdDN0IsU0FBQyxDQUFDYixnQkFBRixDQUFtQixPQUFuQixFQUEyQnVDLEVBQTNCO0FBQThCMEYsU0FBQyxHQUFDdEksVUFBVSxDQUFDO0FBQUEsaUJBQUk0QyxFQUFDLENBQUMsU0FBRCxDQUFMO0FBQUEsU0FBRCxFQUFrQixHQUFsQixDQUFaOztBQUFtQy9CLFNBQUMsQ0FBQ3dQLFVBQUYsQ0FBYXBQLENBQWIsRUFBZ0JmLElBQWhCLENBQXFCLFVBQUNlLENBQUQsRUFBSztBQUFDQSxXQUFDLEdBQUNKLENBQUMsQ0FBQ3lQLGFBQUYsQ0FBZ0JyUCxDQUFoQixFQUFrQkUsQ0FBbEIsRUFBb0JDLENBQXBCLEVBQXNCcUIsQ0FBdEIsQ0FBRjtBQUEyQnZCLFdBQUMsQ0FBQ2lNLFdBQUYsQ0FBYztBQUFDL0ssZ0JBQUksRUFBQyxRQUFOO0FBQWV1SSxnQkFBSSxFQUFDMUo7QUFBcEIsV0FBZCxFQUFxQyxDQUFDQSxDQUFDLENBQUMwSixJQUFGLENBQU9tQixNQUFSLENBQXJDO0FBQXNELFNBQTVHLFdBQW9IbEosRUFBcEg7QUFBdUgsT0FEeEosQ0FBWDtBQUV0V3pCLE9BQUMsSUFBRXFCLENBQUgsS0FBTytGLENBQUMsR0FBQ0EsQ0FBQyxTQUFELENBQVE7QUFBQSxlQUFJMUgsQ0FBQyxDQUFDRCxTQUFGLENBQVlLLENBQVosRUFBYyxJQUFkLEVBQW1CQyxDQUFuQixFQUFxQkUsQ0FBckIsRUFBdUJxQixDQUF2QixDQUFKO0FBQUEsT0FBUixDQUFUO0FBQWlELGFBQU84RixDQUFDLEdBQUNBLENBQUMsV0FBRCxDQUFVLFlBQUk7QUFBQzdGLFNBQUMsSUFBRXhCLENBQUMsQ0FBQ2lNLFdBQUYsQ0FBYztBQUFDL0ssY0FBSSxFQUFDO0FBQU4sU0FBZCxDQUFIO0FBQWlDLE9BQWhELENBQVQ7QUFBMkQ7OztrQ0FFc1luQixDLEVBQ2plO0FBQUEsVUFEbWVFLENBQ25lLHVFQUFqQixJQUFpQjtBQUFBLFVBQVpELENBQVksdUVBQVYsSUFBVTtBQUFBLFVBQUxFLENBQUssdUVBQUgsQ0FBQyxDQUFFO0FBQUNGLE9BQUMsR0FBQ0EsQ0FBQyxJQUFFbkMsUUFBUSxDQUFDOE8sYUFBVCxDQUF1QixRQUF2QixDQUFMO0FBQXNDLFVBQUlwTCxDQUFDLEdBQUN0QixDQUFDLElBQUVBLENBQUMsQ0FBQzJFLENBQUwsR0FBTzNFLENBQUMsQ0FBQzJFLENBQVQsR0FBVyxDQUFqQjtBQUFBLFVBQW1CdEQsQ0FBQyxHQUFDckIsQ0FBQyxJQUFFQSxDQUFDLENBQUNjLENBQUwsR0FBT2QsQ0FBQyxDQUFDYyxDQUFULEdBQVcsQ0FBaEM7QUFBQSxVQUFrQ1MsQ0FBQyxHQUFDdkIsQ0FBQyxJQUFFQSxDQUFDLENBQUMySSxLQUFMLEdBQVczSSxDQUFDLENBQUMySSxLQUFiLEdBQW1CN0ksQ0FBQyxDQUFDNkksS0FBRixJQUFTN0ksQ0FBQyxDQUFDd08sVUFBbEU7QUFBNkV0TyxPQUFDLEdBQUNBLENBQUMsSUFBRUEsQ0FBQyxDQUFDbUUsTUFBTCxHQUFZbkUsQ0FBQyxDQUFDbUUsTUFBZCxHQUFxQnJFLENBQUMsQ0FBQ3FFLE1BQUYsSUFBVXJFLENBQUMsQ0FBQ3lPLFdBQW5DO0FBQStDdE8sT0FBQyxJQUFFRixDQUFDLENBQUM0SSxLQUFGLEtBQVVwSCxDQUFWLElBQWF4QixDQUFDLENBQUNvRSxNQUFGLEtBQVduRSxDQUEzQixLQUErQkQsQ0FBQyxDQUFDNEksS0FBRixHQUFRcEgsQ0FBUixFQUFVeEIsQ0FBQyxDQUFDb0UsTUFBRixHQUFTbkUsQ0FBbEQ7QUFBcURDLE9BQUMsR0FBQ0YsQ0FBQyxDQUFDcVAsVUFBRixDQUFhLElBQWIsRUFBa0I7QUFBQ0MsYUFBSyxFQUFDLENBQUM7QUFBUixPQUFsQixDQUFGO0FBQWdDcFAsT0FBQyxDQUFDcVAscUJBQUYsR0FBd0IsQ0FBQyxDQUF6QjtBQUEyQnJQLE9BQUMsQ0FBQ3NQLFNBQUYsQ0FBWXpQLENBQVosRUFBY3dCLENBQWQsRUFBZ0JELENBQWhCLEVBQWtCRSxDQUFsQixFQUFvQnZCLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCLEVBQTBCRCxDQUFDLENBQUM0SSxLQUE1QixFQUFrQzVJLENBQUMsQ0FBQ29FLE1BQXBDO0FBQTRDLGFBQU9sRSxDQUFDLENBQUN1UCxZQUFGLENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQnpQLENBQUMsQ0FBQzRJLEtBQXJCLEVBQTJCNUksQ0FBQyxDQUFDb0UsTUFBN0IsQ0FBUDtBQUE0Qzs7OytCQUFrQnJFLEMsRUFBRTtBQUFDLFVBQUdBLENBQUMsWUFBWTJQLGlCQUFiLElBQWdDM1AsQ0FBQyxZQUFZNFAsZ0JBQTdDLElBQStEakMsTUFBTSxDQUFDa0MsV0FBUCxJQUFvQjdQLENBQUMsWUFBWTJOLE1BQU0sQ0FBQ2tDLFdBQXZHLElBQ3BabEMsTUFBTSxDQUFDbUMsZUFBUCxJQUF3QjlQLENBQUMsWUFBWTJOLE1BQU0sQ0FBQ21DLGVBRHFXLEVBQ3JWLE9BQU9yQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IxTixDQUFoQixDQUFQO0FBQTBCLFVBQUdBLENBQUMsWUFBWStQLEtBQWhCLEVBQXNCLE9BQU9uUSxDQUFDLENBQUNvUSxlQUFGLENBQWtCaFEsQ0FBbEIsRUFBcUJmLElBQXJCLENBQTBCO0FBQUEsZUFBSWUsQ0FBSjtBQUFBLE9BQTFCLENBQVA7O0FBQXdDLFVBQUdBLENBQUMsWUFBWWlRLElBQWIsSUFBbUJqUSxDQUFDLFlBQVlrUSxHQUFoQyxJQUFxQyxhQUFXLE9BQU9sUSxDQUExRCxFQUE0RDtBQUFDLFlBQUlFLENBQUMsR0FBQyxJQUFJNlAsS0FBSixFQUFOO0FBQWdCN1AsU0FBQyxDQUFDaVEsR0FBRixHQUFNblEsQ0FBQyxZQUFZaVEsSUFBYixHQUFrQkMsR0FBRyxDQUFDRSxlQUFKLENBQW9CcFEsQ0FBcEIsQ0FBbEIsR0FBeUNBLENBQS9DO0FBQWlELGVBQU9KLENBQUMsQ0FBQ29RLGVBQUYsQ0FBa0I5UCxDQUFsQixFQUFxQmpCLElBQXJCLENBQTBCLFlBQUk7QUFBQ2UsV0FBQyxZQUFZaVEsSUFBYixJQUFtQkMsR0FBRyxDQUFDRyxlQUFKLENBQW9CblEsQ0FBQyxDQUFDaVEsR0FBdEIsQ0FBbkI7QUFBOEMsaUJBQU9qUSxDQUFQO0FBQVMsU0FBdEYsQ0FBUDtBQUErRjs7QUFBQSxhQUFPdU4sT0FBTyxDQUFDdUIsTUFBUixDQUFlLHlCQUFmLENBQVA7QUFBaUQ7OztvQ0FBdUJoUCxDLEVBQUU7QUFBQyxhQUFPLElBQUl5TixPQUFKLENBQVksVUFBQ3ZOLENBQUQsRUFBR0QsQ0FBSCxFQUFPO0FBQUMsWUFBR0QsQ0FBQyxDQUFDc1EsUUFBRixJQUFZLE1BQUl0USxDQUFDLENBQUN1USxZQUFyQixFQUFrQ3JRLENBQUMsR0FBbkMsS0FDbmQ7QUFBQyxjQUFJQyxFQUFKLEVBQU1xQixFQUFOOztBQUFRckIsWUFBQyxHQUFDLGFBQUk7QUFBQ0gsYUFBQyxDQUFDdU4sbUJBQUYsQ0FBc0IsTUFBdEIsRUFBNkJwTixFQUE3QjtBQUFnQ0gsYUFBQyxDQUFDdU4sbUJBQUYsQ0FBc0IsT0FBdEIsRUFBOEIvTCxFQUE5QjtBQUFpQ3RCLGFBQUM7QUFBRyxXQUE1RTs7QUFBNkVzQixZQUFDLEdBQUMsYUFBSTtBQUFDeEIsYUFBQyxDQUFDdU4sbUJBQUYsQ0FBc0IsTUFBdEIsRUFBNkJwTixFQUE3QjtBQUFnQ0gsYUFBQyxDQUFDdU4sbUJBQUYsQ0FBc0IsT0FBdEIsRUFBOEIvTCxFQUE5QjtBQUFpQ3ZCLGFBQUMsQ0FBQyxrQkFBRCxDQUFEO0FBQXNCLFdBQTlGOztBQUErRkQsV0FBQyxDQUFDWixnQkFBRixDQUFtQixNQUFuQixFQUEwQmUsRUFBMUI7QUFBNkJILFdBQUMsQ0FBQ1osZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBMkJvQyxFQUEzQjtBQUE4QjtBQUFDLE9BRDhNLENBQVA7QUFDck07Ozs7OztBQUFDNUIsQ0FBQyxDQUFDNk0sbUJBQUYsR0FBc0IsR0FBdEI7QUFBMEI3TSxDQUFDLENBQUNqQyxXQUFGLEdBQWMsMEJBQWQ7QUFBd0RpQyxnRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgUXJTY2FubmVyIGZyb20gXCIuL3FyLXNjYW5uZXIubWluLmpzXCI7XG5pbXBvcnQgUXJTY2FubmVyV29ya2VyIGZyb20gXCIuL3FyLXNjYW5uZXItd29ya2VyLm1pbi5qc1wiO1xuUXJTY2FubmVyLldPUktFUl9QQVRIID0gUXJTY2FubmVyV29ya2VyO1xuXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXItdmlkZW8nKTtcbiAgICBjb25zdCBjYW1IYXNDYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtLWhhcy1jYW1lcmEnKTtcbiAgICBjb25zdCBjYW1RclJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW0tcXItcmVzdWx0Jyk7XG4gICAgY29uc3QgY2FtUXJSZXN1bHRUaW1lc3RhbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtLXFyLXJlc3VsdC10aW1lc3RhbXAnKTtcbiAgICBjb25zdCBmaWxlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1zZWxlY3RvcicpO1xuICAgIGNvbnN0IGZpbGVRclJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlLXFyLXJlc3VsdCcpO1xuXG4gICAgZnVuY3Rpb24gc2V0UmVzdWx0KGxhYmVsLCByZXN1bHQpIHtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgIGNhbVFyUmVzdWx0VGltZXN0YW1wLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xuICAgICAgICBsYWJlbC5zdHlsZS5jb2xvciA9ICd0ZWFsJztcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxhYmVsLmhpZ2hsaWdodFRpbWVvdXQpO1xuICAgICAgICBsYWJlbC5oaWdobGlnaHRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBsYWJlbC5zdHlsZS5jb2xvciA9ICdpbmhlcml0JywgMTAwKTtcbiAgICB9XG5cbiAgICAvLyAjIyMjIyMjIFdlYiBDYW0gU2Nhbm5pbmcgIyMjIyMjI1xuXG4gICAgUXJTY2FubmVyLmhhc0NhbWVyYSgpLnRoZW4oaGFzQ2FtZXJhID0+IGNhbUhhc0NhbWVyYS50ZXh0Q29udGVudCA9IGhhc0NhbWVyYSk7XG5cbiAgICBjb25zdCBzY2FubmVyID0gbmV3IFFyU2Nhbm5lcih2aWRlbywgcmVzdWx0ID0+IHNldFJlc3VsdChjYW1RclJlc3VsdCwgcmVzdWx0KSk7XG4gICAgc2Nhbm5lci5zdGFydCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludmVyc2lvbi1tb2RlLXNlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgc2Nhbm5lci5zZXRJbnZlcnNpb25Nb2RlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyAjIyMjIyMjIEZpbGUgU2Nhbm5pbmcgIyMjIyMjI1xuXG4gICAgZmlsZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVTZWxlY3Rvci5maWxlc1swXTtcbiAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUXJTY2FubmVyLnNjYW5JbWFnZShmaWxlKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHNldFJlc3VsdChmaWxlUXJSZXN1bHQsIHJlc3VsdCkpXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiBzZXRSZXN1bHQoZmlsZVFyUmVzdWx0LCBlIHx8ICdObyBRUiBjb2RlIGZvdW5kLicpKTtcbiAgICB9KTtcblxuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnOyhmdW5jdGlvbigpe2Z1bmN0aW9uIFMoYSxiKXtsZXQgYz1bXSxkPVwiXCI7Yj1hLnJlYWRCaXRzKFs4LDE2LDE2XVtiXSk7Zm9yKGxldCBkPTA7ZDxiO2QrKyl7bGV0IGI9YS5yZWFkQml0cyg4KTtjLnB1c2goYil9dHJ5e2QrPWRlY29kZVVSSUNvbXBvbmVudChjLm1hcCgoYSk9PmAlJHsoXCIwXCIrYS50b1N0cmluZygxNikpLnN1YnN0cigtMil9YCkuam9pbihcIlwiKSl9Y2F0Y2goZSl7fXJldHVybntieXRlczpjLHRleHQ6ZH19ZnVuY3Rpb24gVChhLGIpe2E9bmV3IFUoYSk7Yj05Pj1iPzA6MjY+PWI/MToyO2xldCBjPXt0ZXh0OlwiXCIsYnl0ZXM6W10sY2h1bmtzOltdfTtmb3IoOzQ8PWEuYXZhaWxhYmxlKCk7KXt2YXIgZD1hLnJlYWRCaXRzKDQpO2lmKGQ9PT15LlRlcm1pbmF0b3IpcmV0dXJuIGM7aWYoZD09PXkuRUNJKTA9PT1hLnJlYWRCaXRzKDEpP2MuY2h1bmtzLnB1c2goe3R5cGU6dS5FQ0ksYXNzaWdubWVudE51bWJlcjphLnJlYWRCaXRzKDcpfSk6MD09PWEucmVhZEJpdHMoMSk/XG5jLmNodW5rcy5wdXNoKHt0eXBlOnUuRUNJLGFzc2lnbm1lbnROdW1iZXI6YS5yZWFkQml0cygxNCl9KTowPT09YS5yZWFkQml0cygxKT9jLmNodW5rcy5wdXNoKHt0eXBlOnUuRUNJLGFzc2lnbm1lbnROdW1iZXI6YS5yZWFkQml0cygyMSl9KTpjLmNodW5rcy5wdXNoKHt0eXBlOnUuRUNJLGFzc2lnbm1lbnROdW1iZXI6LTF9KTtlbHNlIGlmKGQ9PT15Lk51bWVyaWMpe3ZhciBlPWE7ZD1bXTtmb3IodmFyIGc9XCJcIixmPWUucmVhZEJpdHMoWzEwLDEyLDE0XVtiXSk7Mzw9Zjspe3ZhciBoPWUucmVhZEJpdHMoMTApO2lmKDFFMzw9aCl0aHJvdyBFcnJvcihcIkludmFsaWQgbnVtZXJpYyB2YWx1ZSBhYm92ZSA5OTlcIik7dmFyIGs9TWF0aC5mbG9vcihoLzEwMCksbT1NYXRoLmZsb29yKGgvMTApJTEwO2glPTEwO2QucHVzaCg0OCtrLDQ4K20sNDgraCk7Zys9ay50b1N0cmluZygpK20udG9TdHJpbmcoKStoLnRvU3RyaW5nKCk7Zi09M31pZigyPT09Zil7Zj1lLnJlYWRCaXRzKDcpO2lmKDEwMDw9XG5mKXRocm93IEVycm9yKFwiSW52YWxpZCBudW1lcmljIHZhbHVlIGFib3ZlIDk5XCIpO2U9TWF0aC5mbG9vcihmLzEwKTtmJT0xMDtkLnB1c2goNDgrZSw0OCtmKTtnKz1lLnRvU3RyaW5nKCkrZi50b1N0cmluZygpfWVsc2UgaWYoMT09PWYpe2U9ZS5yZWFkQml0cyg0KTtpZigxMDw9ZSl0aHJvdyBFcnJvcihcIkludmFsaWQgbnVtZXJpYyB2YWx1ZSBhYm92ZSA5XCIpO2QucHVzaCg0OCtlKTtnKz1lLnRvU3RyaW5nKCl9ZD17Ynl0ZXM6ZCx0ZXh0Omd9O2MudGV4dCs9ZC50ZXh0O2MuYnl0ZXMucHVzaCguLi5kLmJ5dGVzKTtjLmNodW5rcy5wdXNoKHt0eXBlOnUuTnVtZXJpYyx0ZXh0OmQudGV4dH0pfWVsc2UgaWYoZD09PXkuQWxwaGFudW1lcmljKXtlPWE7ZD1bXTtnPVwiXCI7Zm9yKGY9ZS5yZWFkQml0cyhbOSwxMSwxM11bYl0pOzI8PWY7KW09ZS5yZWFkQml0cygxMSksaz1NYXRoLmZsb29yKG0vNDUpLG0lPTQ1LGQucHVzaChCW2tdLmNoYXJDb2RlQXQoMCksQlttXS5jaGFyQ29kZUF0KDApKSxcbmcrPUJba10rQlttXSxmLT0yOzE9PT1mJiYoZT1lLnJlYWRCaXRzKDYpLGQucHVzaChCW2VdLmNoYXJDb2RlQXQoMCkpLGcrPUJbZV0pO2Q9e2J5dGVzOmQsdGV4dDpnfTtjLnRleHQrPWQudGV4dDtjLmJ5dGVzLnB1c2goLi4uZC5ieXRlcyk7Yy5jaHVua3MucHVzaCh7dHlwZTp1LkFscGhhbnVtZXJpYyx0ZXh0OmQudGV4dH0pfWVsc2UgaWYoZD09PXkuQnl0ZSlkPVMoYSxiKSxjLnRleHQrPWQudGV4dCxjLmJ5dGVzLnB1c2goLi4uZC5ieXRlcyksYy5jaHVua3MucHVzaCh7dHlwZTp1LkJ5dGUsYnl0ZXM6ZC5ieXRlcyx0ZXh0OmQudGV4dH0pO2Vsc2UgaWYoZD09PXkuS2Fuamkpe2c9YTtkPVtdO2U9Zy5yZWFkQml0cyhbOCwxMCwxMl1bYl0pO2ZvcihmPTA7ZjxlO2YrKylrPWcucmVhZEJpdHMoMTMpLGs9TWF0aC5mbG9vcihrLzE5Mik8PDh8ayUxOTIsaz03OTM2Pms/ayszMzA4ODprKzQ5NDcyLGQucHVzaChrPj44LGsmMjU1KTtnPShuZXcgVGV4dERlY29kZXIoXCJzaGlmdC1qaXNcIikpLmRlY29kZShVaW50OEFycmF5LmZyb20oZCkpO1xuZD17Ynl0ZXM6ZCx0ZXh0Omd9O2MudGV4dCs9ZC50ZXh0O2MuYnl0ZXMucHVzaCguLi5kLmJ5dGVzKTtjLmNodW5rcy5wdXNoKHt0eXBlOnUuS2FuamksYnl0ZXM6ZC5ieXRlcyx0ZXh0OmQudGV4dH0pfX1pZigwPT09YS5hdmFpbGFibGUoKXx8MD09PWEucmVhZEJpdHMoYS5hdmFpbGFibGUoKSkpcmV0dXJuIGN9ZnVuY3Rpb24gSihhLGIpe3JldHVybiBhXmJ9ZnVuY3Rpb24gVihhLGIsYyxkKXtiLmRlZ3JlZSgpPGMuZGVncmVlKCkmJihbYixjXT1bYyxiXSk7bGV0IGU9YS56ZXJvO2Zvcih2YXIgZz1hLm9uZTtjLmRlZ3JlZSgpPj1kLzI7KXt2YXIgZj1iO2xldCBkPWU7Yj1jO2U9ZztpZihiLmlzWmVybygpKXJldHVybiBudWxsO2M9ZjtnPWEuemVybztmPWIuZ2V0Q29lZmZpY2llbnQoYi5kZWdyZWUoKSk7Zm9yKGY9YS5pbnZlcnNlKGYpO2MuZGVncmVlKCk+PWIuZGVncmVlKCkmJiFjLmlzWmVybygpOyl7bGV0IGQ9Yy5kZWdyZWUoKS1iLmRlZ3JlZSgpLGU9YS5tdWx0aXBseShjLmdldENvZWZmaWNpZW50KGMuZGVncmVlKCkpLFxuZik7Zz1nLmFkZE9yU3VidHJhY3QoYS5idWlsZE1vbm9taWFsKGQsZSkpO2M9Yy5hZGRPclN1YnRyYWN0KGIubXVsdGlwbHlCeU1vbm9taWFsKGQsZSkpfWc9Zy5tdWx0aXBseVBvbHkoZSkuYWRkT3JTdWJ0cmFjdChkKTtpZihjLmRlZ3JlZSgpPj1iLmRlZ3JlZSgpKXJldHVybiBudWxsfWQ9Zy5nZXRDb2VmZmljaWVudCgwKTtpZigwPT09ZClyZXR1cm4gbnVsbDthPWEuaW52ZXJzZShkKTtyZXR1cm5bZy5tdWx0aXBseShhKSxjLm11bHRpcGx5KGEpXX1mdW5jdGlvbiBXKGEsYil7bGV0IGM9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGEubGVuZ3RoKTtjLnNldChhKTthPW5ldyBYKDI4NSwyNTYsMCk7dmFyIGQ9bmV3IHcoYSxjKSxlPW5ldyBVaW50OENsYW1wZWRBcnJheShiKSxnPSExO2Zvcih2YXIgZj0wO2Y8YjtmKyspe3ZhciBoPWQuZXZhbHVhdGVBdChhLmV4cChmK2EuZ2VuZXJhdG9yQmFzZSkpO2VbZS5sZW5ndGgtMS1mXT1oOzAhPT1oJiYoZz0hMCl9aWYoIWcpcmV0dXJuIGM7XG5kPW5ldyB3KGEsZSk7ZD1WKGEsYS5idWlsZE1vbm9taWFsKGIsMSksZCxiKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtiPWRbMF07Zj1iLmRlZ3JlZSgpO2lmKDE9PT1mKWI9W2IuZ2V0Q29lZmZpY2llbnQoMSldO2Vsc2V7ZT1BcnJheShmKTtnPTA7Zm9yKGg9MTtoPGEuc2l6ZSYmZzxmO2grKykwPT09Yi5ldmFsdWF0ZUF0KGgpJiYoZVtnXT1hLmludmVyc2UoaCksZysrKTtiPWchPT1mP251bGw6ZX1pZihudWxsPT1iKXJldHVybiBudWxsO2Q9ZFsxXTtlPWIubGVuZ3RoO2c9QXJyYXkoZSk7Zm9yKGY9MDtmPGU7ZisrKXtoPWEuaW52ZXJzZShiW2ZdKTtsZXQgYz0xO2ZvcihsZXQgZD0wO2Q8ZTtkKyspZiE9PWQmJihjPWEubXVsdGlwbHkoYyxKKDEsYS5tdWx0aXBseShiW2RdLGgpKSkpO2dbZl09YS5tdWx0aXBseShkLmV2YWx1YXRlQXQoaCksYS5pbnZlcnNlKGMpKTswIT09YS5nZW5lcmF0b3JCYXNlJiYoZ1tmXT1hLm11bHRpcGx5KGdbZl0saCkpfWQ9Zztmb3IoZT0wO2U8Yi5sZW5ndGg7ZSsrKXtnPVxuYy5sZW5ndGgtMS1hLmxvZyhiW2VdKTtpZigwPmcpcmV0dXJuIG51bGw7Y1tnXV49ZFtlXX1yZXR1cm4gY31mdW5jdGlvbiBFKGEsYil7YV49Yjtmb3IoYj0wO2E7KWIrKyxhJj1hLTE7cmV0dXJuIGJ9ZnVuY3Rpb24gQyhhLGIpe3JldHVybiBiPDwxfGF9ZnVuY3Rpb24gWShhLGIsYyl7Yz1aW2MuZGF0YU1hc2tdO2xldCBkPWEuaGVpZ2h0O3ZhciBlPTE3KzQqYi52ZXJzaW9uTnVtYmVyLGc9QS5jcmVhdGVFbXB0eShlLGUpO2cuc2V0UmVnaW9uKDAsMCw5LDksITApO2cuc2V0UmVnaW9uKGUtOCwwLDgsOSwhMCk7Zy5zZXRSZWdpb24oMCxlLTgsOSw4LCEwKTtmb3IodmFyIGYgb2YgYi5hbGlnbm1lbnRQYXR0ZXJuQ2VudGVycylmb3IodmFyIGggb2YgYi5hbGlnbm1lbnRQYXR0ZXJuQ2VudGVycyk2PT09ZiYmNj09PWh8fDY9PT1mJiZoPT09ZS03fHxmPT09ZS03JiY2PT09aHx8Zy5zZXRSZWdpb24oZi0yLGgtMiw1LDUsITApO2cuc2V0UmVnaW9uKDYsOSwxLGUtMTcsITApO2cuc2V0UmVnaW9uKDksXG42LGUtMTcsMSwhMCk7NjxiLnZlcnNpb25OdW1iZXImJihnLnNldFJlZ2lvbihlLTExLDAsMyw2LCEwKSxnLnNldFJlZ2lvbigwLGUtMTEsNiwzLCEwKSk7Yj1nO2Y9W107ZT1oPTA7Zz0hMDtmb3IobGV0IGs9ZC0xOzA8aztrLT0yKXs2PT09ayYmay0tO2ZvcihsZXQgbT0wO208ZDttKyspe2xldCBwPWc/ZC0xLW06bTtmb3IobGV0IGQ9MDsyPmQ7ZCsrKXtsZXQgZz1rLWQ7aWYoIWIuZ2V0KGcscCkpe2UrKztsZXQgYj1hLmdldChnLHApO2Moe3k6cCx4Omd9KSYmKGI9IWIpO2g9aDw8MXxiOzg9PT1lJiYoZi5wdXNoKGgpLGg9ZT0wKX19fWc9IWd9cmV0dXJuIGZ9ZnVuY3Rpb24gYWEoYSl7dmFyIGI9YS5oZWlnaHQsYz1NYXRoLmZsb29yKChiLTE3KS80KTtpZig2Pj1jKXJldHVybiBLW2MtMV07Yz0wO2Zvcih2YXIgZD01OzA8PWQ7ZC0tKWZvcih2YXIgZT1iLTk7ZT49Yi0xMTtlLS0pYz1DKGEuZ2V0KGUsZCksYyk7ZD0wO2ZvcihlPTU7MDw9ZTtlLS0pZm9yKGxldCBjPWItOTtjPj1cbmItMTE7Yy0tKWQ9QyhhLmdldChlLGMpLGQpO2E9SW5maW5pdHk7bGV0IGc7Zm9yKGxldCBlIG9mIEspe2lmKGUuaW5mb0JpdHM9PT1jfHxlLmluZm9CaXRzPT09ZClyZXR1cm4gZTtiPUUoYyxlLmluZm9CaXRzKTtiPGEmJihnPWUsYT1iKTtiPUUoZCxlLmluZm9CaXRzKTtiPGEmJihnPWUsYT1iKX1pZigzPj1hKXJldHVybiBnfWZ1bmN0aW9uIGJhKGEpe2xldCBiPTA7Zm9yKHZhciBjPTA7OD49YztjKyspNiE9PWMmJihiPUMoYS5nZXQoYyw4KSxiKSk7Zm9yKGM9NzswPD1jO2MtLSk2IT09YyYmKGI9QyhhLmdldCg4LGMpLGIpKTt2YXIgZD1hLmhlaWdodDtjPTA7Zm9yKHZhciBlPWQtMTtlPj1kLTc7ZS0tKWM9QyhhLmdldCg4LGUpLGMpO2ZvcihlPWQtODtlPGQ7ZSsrKWM9QyhhLmdldChlLDgpLGMpO2E9SW5maW5pdHk7ZD1udWxsO2ZvcihsZXQge2JpdHM6Zyxmb3JtYXRJbmZvOmZ9b2YgY2Epe2lmKGc9PT1ifHxnPT09YylyZXR1cm4gZjtlPUUoYixnKTtlPGEmJihkPWYsYT1lKTtcbmIhPT1jJiYoZT1FKGMsZyksZTxhJiYoZD1mLGE9ZSkpfXJldHVybiAzPj1hP2Q6bnVsbH1mdW5jdGlvbiBkYShhLGIsYyl7bGV0IGQ9Yi5lcnJvckNvcnJlY3Rpb25MZXZlbHNbY10sZT1bXSxnPTA7ZC5lY0Jsb2Nrcy5mb3JFYWNoKChhKT0+e2ZvcihsZXQgYj0wO2I8YS5udW1CbG9ja3M7YisrKWUucHVzaCh7bnVtRGF0YUNvZGV3b3JkczphLmRhdGFDb2Rld29yZHNQZXJCbG9jayxjb2Rld29yZHM6W119KSxnKz1hLmRhdGFDb2Rld29yZHNQZXJCbG9jaytkLmVjQ29kZXdvcmRzUGVyQmxvY2t9KTtpZihhLmxlbmd0aDxnKXJldHVybiBudWxsO2E9YS5zbGljZSgwLGcpO2I9ZC5lY0Jsb2Nrc1swXS5kYXRhQ29kZXdvcmRzUGVyQmxvY2s7Zm9yKGM9MDtjPGI7YysrKWZvcih2YXIgZiBvZiBlKWYuY29kZXdvcmRzLnB1c2goYS5zaGlmdCgpKTtpZigxPGQuZWNCbG9ja3MubGVuZ3RoKWZvcihmPWQuZWNCbG9ja3NbMF0ubnVtQmxvY2tzLGI9ZC5lY0Jsb2Nrc1sxXS5udW1CbG9ja3MsYz1cbjA7YzxiO2MrKyllW2YrY10uY29kZXdvcmRzLnB1c2goYS5zaGlmdCgpKTtmb3IoOzA8YS5sZW5ndGg7KWZvcihsZXQgYiBvZiBlKWIuY29kZXdvcmRzLnB1c2goYS5zaGlmdCgpKTtyZXR1cm4gZX1mdW5jdGlvbiBMKGEpe2xldCBiPWFhKGEpO2lmKCFiKXJldHVybiBudWxsO3ZhciBjPWJhKGEpO2lmKCFjKXJldHVybiBudWxsO2E9WShhLGIsYyk7dmFyIGQ9ZGEoYSxiLGMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO2lmKCFkKXJldHVybiBudWxsO2M9ZC5yZWR1Y2UoKGEsYik9PmErYi5udW1EYXRhQ29kZXdvcmRzLDApO2M9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGMpO2E9MDtmb3IobGV0IGIgb2YgZCl7ZD1XKGIuY29kZXdvcmRzLGIuY29kZXdvcmRzLmxlbmd0aC1iLm51bURhdGFDb2Rld29yZHMpO2lmKCFkKXJldHVybiBudWxsO2ZvcihsZXQgZT0wO2U8Yi5udW1EYXRhQ29kZXdvcmRzO2UrKyljW2ErK109ZFtlXX10cnl7cmV0dXJuIFQoYyxiLnZlcnNpb25OdW1iZXIpfWNhdGNoKGUpe3JldHVybiBudWxsfX1cbmZ1bmN0aW9uIE0oYSxiLGMsZCl7dmFyIGU9YS54LWIueCtjLngtZC54O2xldCBnPWEueS1iLnkrYy55LWQueTtpZigwPT09ZSYmMD09PWcpcmV0dXJue2ExMTpiLngtYS54LGExMjpiLnktYS55LGExMzowLGEyMTpjLngtYi54LGEyMjpjLnktYi55LGEyMzowLGEzMTphLngsYTMyOmEueSxhMzM6MX07e2xldCBoPWIueC1jLng7dmFyIGY9ZC54LWMueDtsZXQgaz1iLnktYy55LG09ZC55LWMueTtjPWgqbS1mKms7Zj0oZSptLWYqZykvYztlPShoKmctZSprKS9jO3JldHVybnthMTE6Yi54LWEueCtmKmIueCxhMTI6Yi55LWEueStmKmIueSxhMTM6ZixhMjE6ZC54LWEueCtlKmQueCxhMjI6ZC55LWEueStlKmQueSxhMjM6ZSxhMzE6YS54LGEzMjphLnksYTMzOjF9fX1mdW5jdGlvbiBlYShhLGIsYyxkKXthPU0oYSxiLGMsZCk7cmV0dXJue2ExMTphLmEyMiphLmEzMy1hLmEyMyphLmEzMixhMTI6YS5hMTMqYS5hMzItYS5hMTIqYS5hMzMsYTEzOmEuYTEyKmEuYTIzLWEuYTEzKmEuYTIyLFxuYTIxOmEuYTIzKmEuYTMxLWEuYTIxKmEuYTMzLGEyMjphLmExMSphLmEzMy1hLmExMyphLmEzMSxhMjM6YS5hMTMqYS5hMjEtYS5hMTEqYS5hMjMsYTMxOmEuYTIxKmEuYTMyLWEuYTIyKmEuYTMxLGEzMjphLmExMiphLmEzMS1hLmExMSphLmEzMixhMzM6YS5hMTEqYS5hMjItYS5hMTIqYS5hMjF9fWZ1bmN0aW9uIGZhKGEsYil7dmFyIGM9ZWEoe3g6My41LHk6My41fSx7eDpiLmRpbWVuc2lvbi0zLjUseTozLjV9LHt4OmIuZGltZW5zaW9uLTYuNSx5OmIuZGltZW5zaW9uLTYuNX0se3g6My41LHk6Yi5kaW1lbnNpb24tMy41fSksZD1NKGIudG9wTGVmdCxiLnRvcFJpZ2h0LGIuYWxpZ25tZW50UGF0dGVybixiLmJvdHRvbUxlZnQpLGU9ZC5hMTEqYy5hMTErZC5hMjEqYy5hMTIrZC5hMzEqYy5hMTMsZz1kLmExMipjLmExMStkLmEyMipjLmExMitkLmEzMipjLmExMyxmPWQuYTEzKmMuYTExK2QuYTIzKmMuYTEyK2QuYTMzKmMuYTEzLGg9ZC5hMTEqYy5hMjErZC5hMjEqYy5hMjIrZC5hMzEqXG5jLmEyMyxrPWQuYTEyKmMuYTIxK2QuYTIyKmMuYTIyK2QuYTMyKmMuYTIzLG09ZC5hMTMqYy5hMjErZC5hMjMqYy5hMjIrZC5hMzMqYy5hMjMscD1kLmExMSpjLmEzMStkLmEyMSpjLmEzMitkLmEzMSpjLmEzMyxuPWQuYTEyKmMuYTMxK2QuYTIyKmMuYTMyK2QuYTMyKmMuYTMzLGw9ZC5hMTMqYy5hMzErZC5hMjMqYy5hMzIrZC5hMzMqYy5hMzM7Yz1BLmNyZWF0ZUVtcHR5KGIuZGltZW5zaW9uLGIuZGltZW5zaW9uKTtkPShhLGIpPT57Y29uc3QgYz1mKmErbSpiK2w7cmV0dXJue3g6KGUqYStoKmIrcCkvYyx5OihnKmEraypiK24pL2N9fTtmb3IobGV0IGU9MDtlPGIuZGltZW5zaW9uO2UrKylmb3IobGV0IGY9MDtmPGIuZGltZW5zaW9uO2YrKyl7bGV0IGI9ZChmKy41LGUrLjUpO2Muc2V0KGYsZSxhLmdldChNYXRoLmZsb29yKGIueCksTWF0aC5mbG9vcihiLnkpKSl9cmV0dXJue21hdHJpeDpjLG1hcHBpbmdGdW5jdGlvbjpkfX1mdW5jdGlvbiB0KGEpe3JldHVybiBhLnJlZHVjZSgoYSxcbmMpPT5hK2MpfWZ1bmN0aW9uIGhhKGEsYixjKXtsZXQgZD14KGEsYiksZT14KGIsYyksZz14KGEsYyksZixoLGs7ZT49ZCYmZT49Zz9bZixoLGtdPVtiLGEsY106Zz49ZSYmZz49ZD9bZixoLGtdPVthLGIsY106W2YsaCxrXT1bYSxjLGJdOzA+KGsueC1oLngpKihmLnktaC55KS0oay55LWgueSkqKGYueC1oLngpJiYoW2Ysa109W2ssZl0pO3JldHVybntib3R0b21MZWZ0OmYsdG9wTGVmdDpoLHRvcFJpZ2h0Omt9fWZ1bmN0aW9uIGlhKGEsYixjLGQpe2Q9KHQoeihhLGMsZCw1KSkvNyt0KHooYSxiLGQsNSkpLzcrdCh6KGMsYSxkLDUpKS83K3QoeihiLGEsZCw1KSkvNykvNDtpZigxPmQpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIG1vZHVsZSBzaXplXCIpO2I9TWF0aC5yb3VuZCh4KGEsYikvZCk7YT1NYXRoLnJvdW5kKHgoYSxjKS9kKTthPU1hdGguZmxvb3IoKGIrYSkvMikrNztzd2l0Y2goYSU0KXtjYXNlIDA6YSsrO2JyZWFrO2Nhc2UgMjphLS19cmV0dXJue2RpbWVuc2lvbjphLG1vZHVsZVNpemU6ZH19XG5mdW5jdGlvbiBOKGEsYixjLGQpe2xldCBlPVt7eDpNYXRoLmZsb29yKGEueCkseTpNYXRoLmZsb29yKGEueSl9XTt2YXIgZz1NYXRoLmFicyhiLnktYS55KT5NYXRoLmFicyhiLngtYS54KTtpZihnKXt2YXIgZj1NYXRoLmZsb29yKGEueSk7dmFyIGg9TWF0aC5mbG9vcihhLngpO2E9TWF0aC5mbG9vcihiLnkpO2I9TWF0aC5mbG9vcihiLngpfWVsc2UgZj1NYXRoLmZsb29yKGEueCksaD1NYXRoLmZsb29yKGEueSksYT1NYXRoLmZsb29yKGIueCksYj1NYXRoLmZsb29yKGIueSk7bGV0IGs9TWF0aC5hYnMoYS1mKSxtPU1hdGguYWJzKGItaCkscD1NYXRoLmZsb29yKC1rLzIpLG49ZjxhPzE6LTEsbD1oPGI/MTotMSxxPSEwO2ZvcihsZXQgcj1mLEY9aDtyIT09YStuO3IrPW4pe2Y9Zz9GOnI7aD1nP3I6RjtpZihjLmdldChmLGgpIT09cSYmKHE9IXEsZS5wdXNoKHt4OmYseTpofSksZS5sZW5ndGg9PT1kKzEpKWJyZWFrO3ArPW07aWYoMDxwKXtpZihGPT09YilicmVhaztGKz1sO3AtPWt9fWM9XG5bXTtmb3IoZz0wO2c8ZDtnKyspZVtnXSYmZVtnKzFdP2MucHVzaCh4KGVbZ10sZVtnKzFdKSk6Yy5wdXNoKDApO3JldHVybiBjfWZ1bmN0aW9uIHooYSxiLGMsZCl7bGV0IGU9Yi55LWEueSxnPWIueC1hLng7Yj1OKGEsYixjLE1hdGguY2VpbChkLzIpKTthPU4oYSx7eDphLngtZyx5OmEueS1lfSxjLE1hdGguY2VpbChkLzIpKTtjPWIuc2hpZnQoKSthLnNoaWZ0KCktMTtyZXR1cm4gYS5jb25jYXQoYykuY29uY2F0KC4uLmIpfWZ1bmN0aW9uIEcoYSxiKXtsZXQgYz10KGEpL3QoYiksZD0wO2IuZm9yRWFjaCgoYixnKT0+e2QrPU1hdGgucG93KGFbZ10tYipjLDIpfSk7cmV0dXJue2F2ZXJhZ2VTaXplOmMsZXJyb3I6ZH19ZnVuY3Rpb24gTyhhLGIsYyl7dHJ5e2xldCBkPXooYSx7eDotMSx5OmEueX0sYyxiLmxlbmd0aCksZT16KGEse3g6YS54LHk6LTF9LGMsYi5sZW5ndGgpLGc9eihhLHt4Ok1hdGgubWF4KDAsYS54LWEueSktMSx5Ok1hdGgubWF4KDAsYS55LWEueCktMX0sYyxiLmxlbmd0aCksXG5mPXooYSx7eDpNYXRoLm1pbihjLndpZHRoLGEueCthLnkpKzEseTpNYXRoLm1pbihjLmhlaWdodCxhLnkrYS54KSsxfSxjLGIubGVuZ3RoKSxoPUcoZCxiKSxrPUcoZSxiKSxtPUcoZyxiKSxwPUcoZixiKSxuPShoLmF2ZXJhZ2VTaXplK2suYXZlcmFnZVNpemUrbS5hdmVyYWdlU2l6ZStwLmF2ZXJhZ2VTaXplKS80O3JldHVybiBNYXRoLnNxcnQoaC5lcnJvcipoLmVycm9yK2suZXJyb3Iqay5lcnJvcittLmVycm9yKm0uZXJyb3IrcC5lcnJvcipwLmVycm9yKSsoTWF0aC5wb3coaC5hdmVyYWdlU2l6ZS1uLDIpK01hdGgucG93KGsuYXZlcmFnZVNpemUtbiwyKStNYXRoLnBvdyhtLmF2ZXJhZ2VTaXplLW4sMikrTWF0aC5wb3cocC5hdmVyYWdlU2l6ZS1uLDIpKS9ufWNhdGNoKGQpe3JldHVybiBJbmZpbml0eX19ZnVuY3Rpb24gamEoYSl7dmFyIGI9W10sYz1bXSxkPVtdLGU9W107Zm9yKGxldCByPTA7cjw9YS5oZWlnaHQ7cisrKXtsZXQgaz0wLG09ITEsbD1bMCwwLDAsMCwwXTtmb3IobGV0IGI9XG4tMTtiPD1hLndpZHRoO2IrKyl7dmFyIGc9YS5nZXQoYixyKTtpZihnPT09bSlrKys7ZWxzZXtsPVtsWzFdLGxbMl0sbFszXSxsWzRdLGtdO2s9MTttPWc7dmFyIGY9dChsKS83O2Y9TWF0aC5hYnMobFswXS1mKTxmJiZNYXRoLmFicyhsWzFdLWYpPGYmJk1hdGguYWJzKGxbMl0tMypmKTwzKmYmJk1hdGguYWJzKGxbM10tZik8ZiYmTWF0aC5hYnMobFs0XS1mKTxmJiYhZzt2YXIgaD10KGwuc2xpY2UoLTMpKS8zO2c9TWF0aC5hYnMobFsyXS1oKTxoJiZNYXRoLmFicyhsWzNdLWgpPGgmJk1hdGguYWJzKGxbNF0taCk8aCYmZztpZihmKXtsZXQgYT1iLWxbM10tbFs0XSxkPWEtbFsyXTtmPXtzdGFydFg6ZCxlbmRYOmEseTpyfTtoPWMuZmlsdGVyKChiKT0+ZD49Yi5ib3R0b20uc3RhcnRYJiZkPD1iLmJvdHRvbS5lbmRYfHxhPj1iLmJvdHRvbS5zdGFydFgmJmQ8PWIuYm90dG9tLmVuZFh8fGQ8PWIuYm90dG9tLnN0YXJ0WCYmYT49Yi5ib3R0b20uZW5kWCYmMS41PmxbMl0vKGIuYm90dG9tLmVuZFgtXG5iLmJvdHRvbS5zdGFydFgpJiYuNTxsWzJdLyhiLmJvdHRvbS5lbmRYLWIuYm90dG9tLnN0YXJ0WCkpOzA8aC5sZW5ndGg/aFswXS5ib3R0b209ZjpjLnB1c2goe3RvcDpmLGJvdHRvbTpmfSl9aWYoZyl7bGV0IGE9Yi1sWzRdLGM9YS1sWzNdO2c9e3N0YXJ0WDpjLHk6cixlbmRYOmF9O2Y9ZS5maWx0ZXIoKGIpPT5jPj1iLmJvdHRvbS5zdGFydFgmJmM8PWIuYm90dG9tLmVuZFh8fGE+PWIuYm90dG9tLnN0YXJ0WCYmYzw9Yi5ib3R0b20uZW5kWHx8Yzw9Yi5ib3R0b20uc3RhcnRYJiZhPj1iLmJvdHRvbS5lbmRYJiYxLjU+bFsyXS8oYi5ib3R0b20uZW5kWC1iLmJvdHRvbS5zdGFydFgpJiYuNTxsWzJdLyhiLmJvdHRvbS5lbmRYLWIuYm90dG9tLnN0YXJ0WCkpOzA8Zi5sZW5ndGg/ZlswXS5ib3R0b209ZzplLnB1c2goe3RvcDpnLGJvdHRvbTpnfSl9fX1iLnB1c2goLi4uYy5maWx0ZXIoKGEpPT5hLmJvdHRvbS55IT09ciYmMjw9YS5ib3R0b20ueS1hLnRvcC55KSk7Yz1jLmZpbHRlcigoYSk9PlxuYS5ib3R0b20ueT09PXIpO2QucHVzaCguLi5lLmZpbHRlcigoYSk9PmEuYm90dG9tLnkhPT1yKSk7ZT1lLmZpbHRlcigoYSk9PmEuYm90dG9tLnk9PT1yKX1iLnB1c2goLi4uYy5maWx0ZXIoKGEpPT4yPD1hLmJvdHRvbS55LWEudG9wLnkpKTtkLnB1c2goLi4uZSk7Yj1iLmZpbHRlcigoYSk9PjI8PWEuYm90dG9tLnktYS50b3AueSkubWFwKChiKT0+e2NvbnN0IGM9KGIudG9wLnN0YXJ0WCtiLnRvcC5lbmRYK2IuYm90dG9tLnN0YXJ0WCtiLmJvdHRvbS5lbmRYKS80LGQ9KGIudG9wLnkrYi5ib3R0b20ueSsxKS8yO2lmKGEuZ2V0KE1hdGgucm91bmQoYyksTWF0aC5yb3VuZChkKSkpcmV0dXJuIGI9W2IudG9wLmVuZFgtYi50b3Auc3RhcnRYLGIuYm90dG9tLmVuZFgtYi5ib3R0b20uc3RhcnRYLGIuYm90dG9tLnktYi50b3AueSsxXSxiPXQoYikvYi5sZW5ndGgse3Njb3JlOk8oe3g6TWF0aC5yb3VuZChjKSx5Ok1hdGgucm91bmQoZCl9LFsxLDEsMywxLDFdLGEpLHg6Yyx5OmQsc2l6ZTpifX0pLmZpbHRlcigoYSk9PlxuISFhKS5zb3J0KChhLGIpPT5hLnNjb3JlLWIuc2NvcmUpLm1hcCgoYSxiLGMpPT57aWYoNDxiKXJldHVybiBudWxsO2M9Yy5maWx0ZXIoKGEsYyk9PmIhPT1jKS5tYXAoKGIpPT4oe3g6Yi54LHk6Yi55LHNjb3JlOmIuc2NvcmUrTWF0aC5wb3coYi5zaXplLWEuc2l6ZSwyKS9hLnNpemUsc2l6ZTpiLnNpemV9KSkuc29ydCgoYSxiKT0+YS5zY29yZS1iLnNjb3JlKTtpZigyPmMubGVuZ3RoKXJldHVybiBudWxsO2NvbnN0IGQ9YS5zY29yZStjWzBdLnNjb3JlK2NbMV0uc2NvcmU7cmV0dXJue3BvaW50czpbYV0uY29uY2F0KGMuc2xpY2UoMCwyKSksc2NvcmU6ZH19KS5maWx0ZXIoKGEpPT4hIWEpLnNvcnQoKGEsYik9PmEuc2NvcmUtYi5zY29yZSk7aWYoMD09PWIubGVuZ3RoKXJldHVybiBudWxsO3ZhciB7dG9wUmlnaHQ6ayx0b3BMZWZ0Om0sYm90dG9tTGVmdDpwfT1oYShiWzBdLnBvaW50c1swXSxiWzBdLnBvaW50c1sxXSxiWzBdLnBvaW50c1syXSk7bGV0IG47dHJ5eyh7ZGltZW5zaW9uOm4sXG5tb2R1bGVTaXplOmx9PWlhKG0sayxwLGEpKX1jYXRjaChyKXtyZXR1cm4gbnVsbH1iPWsueC1tLngrcC54O2M9ay55LW0ueStwLnk7dmFyIGw9KHgobSxwKSt4KG0saykpLzIvbDtlPTEtMy9sO2xldCBxPXt4Om0ueCtlKihiLW0ueCkseTptLnkrZSooYy1tLnkpfTtkPWQubWFwKChiKT0+e2NvbnN0IGM9KGIudG9wLnN0YXJ0WCtiLnRvcC5lbmRYK2IuYm90dG9tLnN0YXJ0WCtiLmJvdHRvbS5lbmRYKS80LGQ9KGIudG9wLnkrYi5ib3R0b20ueSsxKS8yO2lmKGEuZ2V0KE1hdGguZmxvb3IoYyksTWF0aC5mbG9vcihkKSkpcmV0dXJuIHQoW2IudG9wLmVuZFgtYi50b3Auc3RhcnRYLGIuYm90dG9tLmVuZFgtYi5ib3R0b20uc3RhcnRYLGIuYm90dG9tLnktYi50b3AueSsxXSksYj1PKHt4Ok1hdGguZmxvb3IoYykseTpNYXRoLmZsb29yKGQpfSxbMSwxLDFdLGEpK3goe3g6Yyx5OmR9LHEpLHt4OmMseTpkLHNjb3JlOmJ9fSkuZmlsdGVyKChhKT0+ISFhKS5zb3J0KChhLGIpPT5hLnNjb3JlLVxuYi5zY29yZSk7ZD0xNTw9bCYmZC5sZW5ndGg/ZFswXTpxO3JldHVybnthbGlnbm1lbnRQYXR0ZXJuOnt4OmQueCx5OmQueX0sYm90dG9tTGVmdDp7eDpwLngseTpwLnl9LGRpbWVuc2lvbjpuLHRvcExlZnQ6e3g6bS54LHk6bS55fSx0b3BSaWdodDp7eDprLngseTprLnl9fX1mdW5jdGlvbiBQKGEpe2xldCBiPWphKGEpO2lmKCFiKXJldHVybiBudWxsO2E9ZmEoYSxiKTt2YXIgYz1hLm1hdHJpeDtpZihudWxsPT1jKWM9bnVsbDtlbHNle3ZhciBkPUwoYyk7aWYoZCljPWQ7ZWxzZXtmb3IoZD0wO2Q8Yy53aWR0aDtkKyspZm9yKGxldCBhPWQrMTthPGMuaGVpZ2h0O2ErKyljLmdldChkLGEpIT09Yy5nZXQoYSxkKSYmKGMuc2V0KGQsYSwhYy5nZXQoZCxhKSksYy5zZXQoYSxkLCFjLmdldChhLGQpKSk7Yz1MKGMpfX1yZXR1cm4gYz97YmluYXJ5RGF0YTpjLmJ5dGVzLGRhdGE6Yy50ZXh0LGNodW5rczpjLmNodW5rcyxsb2NhdGlvbjp7dG9wUmlnaHRDb3JuZXI6YS5tYXBwaW5nRnVuY3Rpb24oYi5kaW1lbnNpb24sXG4wKSx0b3BMZWZ0Q29ybmVyOmEubWFwcGluZ0Z1bmN0aW9uKDAsMCksYm90dG9tUmlnaHRDb3JuZXI6YS5tYXBwaW5nRnVuY3Rpb24oYi5kaW1lbnNpb24sYi5kaW1lbnNpb24pLGJvdHRvbUxlZnRDb3JuZXI6YS5tYXBwaW5nRnVuY3Rpb24oMCxiLmRpbWVuc2lvbiksdG9wUmlnaHRGaW5kZXJQYXR0ZXJuOmIudG9wUmlnaHQsdG9wTGVmdEZpbmRlclBhdHRlcm46Yi50b3BMZWZ0LGJvdHRvbUxlZnRGaW5kZXJQYXR0ZXJuOmIuYm90dG9tTGVmdCxib3R0b21SaWdodEFsaWdubWVudFBhdHRlcm46Yi5hbGlnbm1lbnRQYXR0ZXJufX06bnVsbH1mdW5jdGlvbiBRKGEsYil7T2JqZWN0LmtleXMoYikuZm9yRWFjaCgoYyk9PnthW2NdPWJbY119KX1mdW5jdGlvbiBJKGEsYixjLGQ9e30pe2xldCBlPU9iamVjdC5jcmVhdGUobnVsbCk7UShlLGthKTtRKGUsZCk7ZD1cIm9ubHlJbnZlcnRcIj09PWUuaW52ZXJzaW9uQXR0ZW1wdHN8fFwiaW52ZXJ0Rmlyc3RcIj09PWUuaW52ZXJzaW9uQXR0ZW1wdHM7XG52YXIgZz1cImF0dGVtcHRCb3RoXCI9PT1lLmludmVyc2lvbkF0dGVtcHRzfHxcImludmVydEZpcnN0XCI9PT1lLmludmVyc2lvbkF0dGVtcHRzO3ZhciBmPWUuZ3JleVNjYWxlV2VpZ2h0cyxoPWUuY2FuT3ZlcndyaXRlSW1hZ2Usaz1iKmM7aWYoYS5sZW5ndGghPT00KmspdGhyb3cgRXJyb3IoXCJNYWxmb3JtZWQgZGF0YSBwYXNzZWQgdG8gYmluYXJpemVyLlwiKTt2YXIgbT0wO2lmKGgpe3ZhciBwPW5ldyBVaW50OENsYW1wZWRBcnJheShhLmJ1ZmZlcixtLGspO20rPWt9cD1uZXcgUihiLGMscCk7aWYoZi51c2VJbnRlZ2VyQXBwcm94aW1hdGlvbilmb3IodmFyIG49MDtuPGM7bisrKWZvcih2YXIgbD0wO2w8YjtsKyspe3ZhciBxPTQqKG4qYitsKTtwLnNldChsLG4sZi5yZWQqYVtxXStmLmdyZWVuKmFbcSsxXStmLmJsdWUqYVtxKzJdKzEyOD4+OCl9ZWxzZSBmb3Iobj0wO248YztuKyspZm9yKGw9MDtsPGI7bCsrKXE9NCoobipiK2wpLHAuc2V0KGwsbixmLnJlZCphW3FdK2YuZ3JlZW4qYVtxK1xuMV0rZi5ibHVlKmFbcSsyXSk7Zj1NYXRoLmNlaWwoYi84KTtuPU1hdGguY2VpbChjLzgpO2w9ZipuO2lmKGgpe3ZhciByPW5ldyBVaW50OENsYW1wZWRBcnJheShhLmJ1ZmZlcixtLGwpO20rPWx9cj1uZXcgUihmLG4scik7Zm9yKGw9MDtsPG47bCsrKWZvcihxPTA7cTxmO3ErKyl7dmFyIHU9MCx2PUluZmluaXR5LHQ9MDtmb3IobGV0IGE9MDs4PmE7YSsrKWZvcihsZXQgYj0wOzg+YjtiKyspe2xldCBjPXAuZ2V0KDgqcStiLDgqbCthKTt1Kz1jO3Y9TWF0aC5taW4odixjKTt0PU1hdGgubWF4KHQsYyl9dS89TWF0aC5wb3coOCwyKTsyND49dC12JiYodT12LzIsMDxsJiYwPHEmJih0PShyLmdldChxLGwtMSkrMipyLmdldChxLTEsbCkrci5nZXQocS0xLGwtMSkpLzQsdjx0JiYodT10KSkpO3Iuc2V0KHEsbCx1KX1oPyhsPW5ldyBVaW50OENsYW1wZWRBcnJheShhLmJ1ZmZlcixtLGspLG0rPWssbD1uZXcgQShsLGIpKTpsPUEuY3JlYXRlRW1wdHkoYixjKTtxPW51bGw7ZyYmKGg/KGE9XG5uZXcgVWludDhDbGFtcGVkQXJyYXkoYS5idWZmZXIsbSxrKSxxPW5ldyBBKGEsYikpOnE9QS5jcmVhdGVFbXB0eShiLGMpKTtmb3IoYj0wO2I8bjtiKyspZm9yKGE9MDthPGY7YSsrKXtjPWYtMztjPTI+YT8yOmE+Yz9jOmE7aD1uLTM7aD0yPmI/MjpiPmg/aDpiO2s9MDtmb3IobT0tMjsyPj1tO20rKylmb3Iodj0tMjsyPj12O3YrKylrKz1yLmdldChjK20saCt2KTtjPWsvMjU7Zm9yKGg9MDs4Pmg7aCsrKWZvcihrPTA7OD5rO2srKyltPTgqYStoLHY9OCpiK2ssdD1wLmdldChtLHYpLGwuc2V0KG0sdix0PD1jKSxnJiZxLnNldChtLHYsISh0PD1jKSl9Zz1nP3tiaW5hcml6ZWQ6bCxpbnZlcnRlZDpxfTp7YmluYXJpemVkOmx9O2xldCB7YmluYXJpemVkOncsaW52ZXJ0ZWQ6eH09ZzsoZz1QKGQ/eDp3KSl8fFwiYXR0ZW1wdEJvdGhcIiE9PWUuaW52ZXJzaW9uQXR0ZW1wdHMmJlwiaW52ZXJ0Rmlyc3RcIiE9PWUuaW52ZXJzaW9uQXR0ZW1wdHN8fChnPVAoZD93OngpKTtyZXR1cm4gZ31jbGFzcyBBe3N0YXRpYyBjcmVhdGVFbXB0eShhLFxuYil7cmV0dXJuIG5ldyBBKG5ldyBVaW50OENsYW1wZWRBcnJheShhKmIpLGEpfWNvbnN0cnVjdG9yKGEsYil7dGhpcy53aWR0aD1iO3RoaXMuaGVpZ2h0PWEubGVuZ3RoL2I7dGhpcy5kYXRhPWF9Z2V0KGEsYil7cmV0dXJuIDA+YXx8YT49dGhpcy53aWR0aHx8MD5ifHxiPj10aGlzLmhlaWdodD8hMTohIXRoaXMuZGF0YVtiKnRoaXMud2lkdGgrYV19c2V0KGEsYixjKXt0aGlzLmRhdGFbYip0aGlzLndpZHRoK2FdPWM/MTowfXNldFJlZ2lvbihhLGIsYyxkLGUpe2ZvcihsZXQgZz1iO2c8YitkO2crKylmb3IobGV0IGI9YTtiPGErYztiKyspdGhpcy5zZXQoYixnLCEhZSl9fWNsYXNzIFJ7Y29uc3RydWN0b3IoYSxiLGMpe3RoaXMud2lkdGg9YTthKj1iO2lmKGMmJmMubGVuZ3RoIT09YSl0aHJvdyBFcnJvcihcIldyb25nIGJ1ZmZlciBzaXplXCIpO3RoaXMuZGF0YT1jfHxuZXcgVWludDhDbGFtcGVkQXJyYXkoYSl9Z2V0KGEsYil7cmV0dXJuIHRoaXMuZGF0YVtiKnRoaXMud2lkdGgrYV19c2V0KGEsXG5iLGMpe3RoaXMuZGF0YVtiKnRoaXMud2lkdGgrYV09Y319Y2xhc3MgVXtjb25zdHJ1Y3RvcihhKXt0aGlzLmJpdE9mZnNldD10aGlzLmJ5dGVPZmZzZXQ9MDt0aGlzLmJ5dGVzPWF9cmVhZEJpdHMoYSl7aWYoMT5hfHwzMjxhfHxhPnRoaXMuYXZhaWxhYmxlKCkpdGhyb3cgRXJyb3IoXCJDYW5ub3QgcmVhZCBcIithLnRvU3RyaW5nKCkrXCIgYml0c1wiKTt2YXIgYj0wO2lmKDA8dGhpcy5iaXRPZmZzZXQpe2I9OC10aGlzLmJpdE9mZnNldDt2YXIgYz1hPGI/YTpiO2ItPWM7Yj0odGhpcy5ieXRlc1t0aGlzLmJ5dGVPZmZzZXRdJjI1NT4+OC1jPDxiKT4+YjthLT1jO3RoaXMuYml0T2Zmc2V0Kz1jOzg9PT10aGlzLmJpdE9mZnNldCYmKHRoaXMuYml0T2Zmc2V0PTAsdGhpcy5ieXRlT2Zmc2V0KyspfWlmKDA8YSl7Zm9yKDs4PD1hOyliPWI8PDh8dGhpcy5ieXRlc1t0aGlzLmJ5dGVPZmZzZXRdJjI1NSx0aGlzLmJ5dGVPZmZzZXQrKyxhLT04OzA8YSYmKGM9OC1hLGI9Yjw8YXwodGhpcy5ieXRlc1t0aGlzLmJ5dGVPZmZzZXRdJlxuMjU1Pj5jPDxjKT4+Yyx0aGlzLmJpdE9mZnNldCs9YSl9cmV0dXJuIGJ9YXZhaWxhYmxlKCl7cmV0dXJuIDgqKHRoaXMuYnl0ZXMubGVuZ3RoLXRoaXMuYnl0ZU9mZnNldCktdGhpcy5iaXRPZmZzZXR9fXZhciB1OyhmdW5jdGlvbihhKXthLk51bWVyaWM9XCJudW1lcmljXCI7YS5BbHBoYW51bWVyaWM9XCJhbHBoYW51bWVyaWNcIjthLkJ5dGU9XCJieXRlXCI7YS5LYW5qaT1cImthbmppXCI7YS5FQ0k9XCJlY2lcIn0pKHV8fCh1PXt9KSk7dmFyIHk7KGZ1bmN0aW9uKGEpe2FbYS5UZXJtaW5hdG9yPTBdPVwiVGVybWluYXRvclwiO2FbYS5OdW1lcmljPTFdPVwiTnVtZXJpY1wiO2FbYS5BbHBoYW51bWVyaWM9Ml09XCJBbHBoYW51bWVyaWNcIjthW2EuQnl0ZT00XT1cIkJ5dGVcIjthW2EuS2Fuamk9OF09XCJLYW5qaVwiO2FbYS5FQ0k9N109XCJFQ0lcIn0pKHl8fCh5PXt9KSk7bGV0IEI9XCIwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogJCUqKy0uLzpcIi5zcGxpdChcIlwiKTtjbGFzcyB3e2NvbnN0cnVjdG9yKGEsXG5iKXtpZigwPT09Yi5sZW5ndGgpdGhyb3cgRXJyb3IoXCJObyBjb2VmZmljaWVudHMuXCIpO3RoaXMuZmllbGQ9YTtsZXQgYz1iLmxlbmd0aDtpZigxPGMmJjA9PT1iWzBdKXtsZXQgZD0xO2Zvcig7ZDxjJiYwPT09YltkXTspZCsrO2lmKGQ9PT1jKXRoaXMuY29lZmZpY2llbnRzPWEuemVyby5jb2VmZmljaWVudHM7ZWxzZSBmb3IodGhpcy5jb2VmZmljaWVudHM9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGMtZCksYT0wO2E8dGhpcy5jb2VmZmljaWVudHMubGVuZ3RoO2ErKyl0aGlzLmNvZWZmaWNpZW50c1thXT1iW2QrYV19ZWxzZSB0aGlzLmNvZWZmaWNpZW50cz1ifWRlZ3JlZSgpe3JldHVybiB0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGgtMX1pc1plcm8oKXtyZXR1cm4gMD09PXRoaXMuY29lZmZpY2llbnRzWzBdfWdldENvZWZmaWNpZW50KGEpe3JldHVybiB0aGlzLmNvZWZmaWNpZW50c1t0aGlzLmNvZWZmaWNpZW50cy5sZW5ndGgtMS1hXX1hZGRPclN1YnRyYWN0KGEpe2lmKHRoaXMuaXNaZXJvKCkpcmV0dXJuIGE7XG5pZihhLmlzWmVybygpKXJldHVybiB0aGlzO2xldCBiPXRoaXMuY29lZmZpY2llbnRzO2E9YS5jb2VmZmljaWVudHM7Yi5sZW5ndGg+YS5sZW5ndGgmJihbYixhXT1bYSxiXSk7bGV0IGM9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGEubGVuZ3RoKSxkPWEubGVuZ3RoLWIubGVuZ3RoO2Zvcih2YXIgZT0wO2U8ZDtlKyspY1tlXT1hW2VdO2ZvcihlPWQ7ZTxhLmxlbmd0aDtlKyspY1tlXT1iW2UtZF1eYVtlXTtyZXR1cm4gbmV3IHcodGhpcy5maWVsZCxjKX1tdWx0aXBseShhKXtpZigwPT09YSlyZXR1cm4gdGhpcy5maWVsZC56ZXJvO2lmKDE9PT1hKXJldHVybiB0aGlzO2xldCBiPXRoaXMuY29lZmZpY2llbnRzLmxlbmd0aCxjPW5ldyBVaW50OENsYW1wZWRBcnJheShiKTtmb3IobGV0IGQ9MDtkPGI7ZCsrKWNbZF09dGhpcy5maWVsZC5tdWx0aXBseSh0aGlzLmNvZWZmaWNpZW50c1tkXSxhKTtyZXR1cm4gbmV3IHcodGhpcy5maWVsZCxjKX1tdWx0aXBseVBvbHkoYSl7aWYodGhpcy5pc1plcm8oKXx8XG5hLmlzWmVybygpKXJldHVybiB0aGlzLmZpZWxkLnplcm87bGV0IGI9dGhpcy5jb2VmZmljaWVudHMsYz1iLmxlbmd0aDthPWEuY29lZmZpY2llbnRzO2xldCBkPWEubGVuZ3RoLGU9bmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGMrZC0xKTtmb3IobGV0IGg9MDtoPGM7aCsrKXtsZXQgYz1iW2hdO2ZvcihsZXQgYj0wO2I8ZDtiKyspe3ZhciBnPWgrYixmPXRoaXMuZmllbGQubXVsdGlwbHkoYyxhW2JdKTtlW2ddPWVbaCtiXV5mfX1yZXR1cm4gbmV3IHcodGhpcy5maWVsZCxlKX1tdWx0aXBseUJ5TW9ub21pYWwoYSxiKXtpZigwPmEpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGRlZ3JlZSBsZXNzIHRoYW4gMFwiKTtpZigwPT09YilyZXR1cm4gdGhpcy5maWVsZC56ZXJvO2xldCBjPXRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDthPW5ldyBVaW50OENsYW1wZWRBcnJheShjK2EpO2ZvcihsZXQgZD0wO2Q8YztkKyspYVtkXT10aGlzLmZpZWxkLm11bHRpcGx5KHRoaXMuY29lZmZpY2llbnRzW2RdLGIpO1xucmV0dXJuIG5ldyB3KHRoaXMuZmllbGQsYSl9ZXZhbHVhdGVBdChhKXtsZXQgYj0wO2lmKDA9PT1hKXJldHVybiB0aGlzLmdldENvZWZmaWNpZW50KDApO2xldCBjPXRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDtpZigxPT09YSlyZXR1cm4gdGhpcy5jb2VmZmljaWVudHMuZm9yRWFjaCgoYSk9PntiXj1hfSksYjtiPXRoaXMuY29lZmZpY2llbnRzWzBdO2ZvcihsZXQgZD0xO2Q8YztkKyspYj1KKHRoaXMuZmllbGQubXVsdGlwbHkoYSxiKSx0aGlzLmNvZWZmaWNpZW50c1tkXSk7cmV0dXJuIGJ9fWNsYXNzIFh7Y29uc3RydWN0b3IoYSxiLGMpe3RoaXMucHJpbWl0aXZlPWE7dGhpcy5zaXplPWI7dGhpcy5nZW5lcmF0b3JCYXNlPWM7dGhpcy5leHBUYWJsZT1BcnJheSh0aGlzLnNpemUpO3RoaXMubG9nVGFibGU9QXJyYXkodGhpcy5zaXplKTthPTE7Zm9yKGI9MDtiPHRoaXMuc2l6ZTtiKyspdGhpcy5leHBUYWJsZVtiXT1hLGEqPTIsYT49dGhpcy5zaXplJiYoYT0oYV50aGlzLnByaW1pdGl2ZSkmXG50aGlzLnNpemUtMSk7Zm9yKGE9MDthPHRoaXMuc2l6ZS0xO2ErKyl0aGlzLmxvZ1RhYmxlW3RoaXMuZXhwVGFibGVbYV1dPWE7dGhpcy56ZXJvPW5ldyB3KHRoaXMsVWludDhDbGFtcGVkQXJyYXkuZnJvbShbMF0pKTt0aGlzLm9uZT1uZXcgdyh0aGlzLFVpbnQ4Q2xhbXBlZEFycmF5LmZyb20oWzFdKSl9bXVsdGlwbHkoYSxiKXtyZXR1cm4gMD09PWF8fDA9PT1iPzA6dGhpcy5leHBUYWJsZVsodGhpcy5sb2dUYWJsZVthXSt0aGlzLmxvZ1RhYmxlW2JdKSUodGhpcy5zaXplLTEpXX1pbnZlcnNlKGEpe2lmKDA9PT1hKXRocm93IEVycm9yKFwiQ2FuJ3QgaW52ZXJ0IDBcIik7cmV0dXJuIHRoaXMuZXhwVGFibGVbdGhpcy5zaXplLXRoaXMubG9nVGFibGVbYV0tMV19YnVpbGRNb25vbWlhbChhLGIpe2lmKDA+YSl0aHJvdyBFcnJvcihcIkludmFsaWQgbW9ub21pYWwgZGVncmVlIGxlc3MgdGhhbiAwXCIpO2lmKDA9PT1iKXJldHVybiB0aGlzLnplcm87YT1uZXcgVWludDhDbGFtcGVkQXJyYXkoYStcbjEpO2FbMF09YjtyZXR1cm4gbmV3IHcodGhpcyxhKX1sb2coYSl7aWYoMD09PWEpdGhyb3cgRXJyb3IoXCJDYW4ndCB0YWtlIGxvZygwKVwiKTtyZXR1cm4gdGhpcy5sb2dUYWJsZVthXX1leHAoYSl7cmV0dXJuIHRoaXMuZXhwVGFibGVbYV19fWxldCBLPVt7aW5mb0JpdHM6bnVsbCx2ZXJzaW9uTnVtYmVyOjEsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6W10sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazo3LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE5fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjEwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjEzLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEzfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjE3LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjl9XX1dfSxcbntpbmZvQml0czpudWxsLHZlcnNpb25OdW1iZXI6MixhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwxOF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoxMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazozNH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoxNixlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyOH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyMixlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMn1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNn1dfV19LHtpbmZvQml0czpudWxsLHZlcnNpb25OdW1iZXI6MyxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyMl0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoxNSxlY0Jsb2Nrczpbe251bUJsb2NrczoxLFxuZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjU1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ0fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjE4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjIyLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEzfV19XX0se2luZm9CaXRzOm51bGwsdmVyc2lvbk51bWJlcjo0LGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDI2XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjIwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjgwfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjE4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjMyfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LFxuZWNCbG9ja3M6W3tudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MTYsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6OX1dfV19LHtpbmZvQml0czpudWxsLHZlcnNpb25OdW1iZXI6NSxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyNixlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMDh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjQsZWNCbG9ja3M6W3tudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDN9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MTgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjIsXG5lY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMX0se251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMn1dfV19LHtpbmZvQml0czpudWxsLHZlcnNpb25OdW1iZXI6NixhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzNF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoxOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazo2OH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoxNixlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyN31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxOX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX1dfV19LHtpbmZvQml0czozMTg5Mix2ZXJzaW9uTnVtYmVyOjcsXG5hbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyMiwzOF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyMCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazo3OH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoxOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazozMX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoxOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNH0se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNixlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxM30se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNH1dfV19LHtpbmZvQml0czozNDIzNix2ZXJzaW9uTnVtYmVyOjgsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMjQsNDJdLFxuZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazo5N31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyMixlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazozOH0se251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazozOX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyMixlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxOH0se251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxOX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNixlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNH0se251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX1dfV19LHtpbmZvQml0czozOTU3Nyx2ZXJzaW9uTnVtYmVyOjksYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsXG4yNiw0Nl0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjIsZWNCbG9ja3M6W3tudW1CbG9ja3M6MyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MzZ9LHtudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6Mzd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9LHtudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjQsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTJ9LHtudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTN9XX1dfSx7aW5mb0JpdHM6NDIxOTUsdmVyc2lvbk51bWJlcjoxMCxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNixcbjI4LDUwXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjE4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjY4fSx7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjY5fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQzfSx7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ0fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI0LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE5fSx7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIwfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE1fSx7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjQ4MTE4LFxudmVyc2lvbk51bWJlcjoxMSxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMCw1NF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyMCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazo4MX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazo1MH0se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazo1MX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMn0se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2NrczozLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMn0se251bUJsb2Nrczo4LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxM31dfV19LHtpbmZvQml0czo1MTA0MixcbnZlcnNpb25OdW1iZXI6MTIsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMzIsNThdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MjQsZWNCbG9ja3M6W3tudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6OTJ9LHtudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6OTN9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjIsZWNCbG9ja3M6W3tudW1CbG9ja3M6NixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MzZ9LHtudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6Mzd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjYsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjB9LHtudW1CbG9ja3M6NixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjF9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTR9LHtudW1CbG9ja3M6NCxcbmRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX1dfV19LHtpbmZvQml0czo1NTM2Nyx2ZXJzaW9uTnVtYmVyOjEzLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDM0LDYyXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEwN31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyMixlY0Jsb2Nrczpbe251bUJsb2Nrczo4LGRhdGFDb2Rld29yZHNQZXJCbG9jazozN30se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazozOH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2Nrczo4LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMH0se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyMixlY0Jsb2Nrczpbe251bUJsb2NrczoxMixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTF9LHtudW1CbG9ja3M6NCxcbmRhdGFDb2Rld29yZHNQZXJCbG9jazoxMn1dfV19LHtpbmZvQml0czo1ODg5Myx2ZXJzaW9uTnVtYmVyOjE0LGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDI2LDQ2LDY2XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjMsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExNX0se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjQsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDB9LHtudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDF9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fSx7bnVtQmxvY2tzOjUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI0LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjExLFxuZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyfSx7bnVtQmxvY2tzOjUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEzfV19XX0se2luZm9CaXRzOjYzNzg0LHZlcnNpb25OdW1iZXI6MTUsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMjYsNDgsNzBdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MjIsZWNCbG9ja3M6W3tudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6ODd9LHtudW1CbG9ja3M6MSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6ODh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjQsZWNCbG9ja3M6W3tudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDF9LHtudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDJ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjV9XX0sXG57ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2NrczoxMSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTJ9LHtudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTN9XX1dfSx7aW5mb0JpdHM6Njg0NzIsdmVyc2lvbk51bWJlcjoxNixhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyNiw1MCw3NF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2Nrczo1LGRhdGFDb2Rld29yZHNQZXJCbG9jazo5OH0se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazo5OX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo3LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0NX0se251bUJsb2NrczozLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0Nn1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2NrczoxNSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTl9LFxue251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczozLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczoxMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6NzA3NDksdmVyc2lvbk51bWJlcjoxNyxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMCw1NCw3OF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMDd9LHtudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTA4fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEwLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0Nn0se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0N31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxcbmVjQmxvY2tzOlt7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIyfSx7bnVtQmxvY2tzOjE1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNH0se251bUJsb2NrczoxNyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9XX1dfSx7aW5mb0JpdHM6NzYzMTEsdmVyc2lvbk51bWJlcjoxOCxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMCw1Niw4Ml0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2Nrczo1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMjB9LHtudW1CbG9ja3M6MSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTIxfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQzfSx7bnVtQmxvY2tzOjQsXG5kYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDR9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIyfSx7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIzfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE0fSx7bnVtQmxvY2tzOjE5LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX1dfV19LHtpbmZvQml0czo3OTE1NCx2ZXJzaW9uTnVtYmVyOjE5LGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDMwLDU4LDg2XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjMsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExM30se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTR9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjYsZWNCbG9ja3M6W3tudW1CbG9ja3M6MyxcbmRhdGFDb2Rld29yZHNQZXJCbG9jazo0NH0se251bUJsb2NrczoxMSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjYsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIxfSx7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjIyfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEzfSx7bnVtQmxvY2tzOjE2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNH1dfV19LHtpbmZvQml0czo4NDM5MCx2ZXJzaW9uTnVtYmVyOjIwLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDM0LDYyLDkwXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjMsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEwN30se251bUJsb2Nrczo1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMDh9XX0sXG57ZWNDb2Rld29yZHNQZXJCbG9jazoyNixlY0Jsb2Nrczpbe251bUJsb2NrczozLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0MX0se251bUJsb2NrczoxMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDJ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjE1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczoxMCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6ODc2ODMsdmVyc2lvbk51bWJlcjoyMSxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyOCw1MCw3Miw5NF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9LFxue251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjYsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQyfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjE3LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMn0se251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9LHtudW1CbG9ja3M6NixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTd9XX1dfSx7aW5mb0JpdHM6OTIzNjEsdmVyc2lvbk51bWJlcjoyMixhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyNiw1MCw3NCw5OF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTF9LFxue251bUJsb2Nrczo3LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTJ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ2fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjE2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyNCxlY0Jsb2Nrczpbe251bUJsb2NrczozNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTN9XX1dfSx7aW5mb0JpdHM6OTYyMzYsdmVyc2lvbk51bWJlcjoyMyxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMCw1NCw3NCwxMDJdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTIxfSx7bnVtQmxvY2tzOjUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyMn1dfSxcbntlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fSx7bnVtQmxvY2tzOjE0LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0OH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxMSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6MTQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjE2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczoxNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6MTAyMDg0LHZlcnNpb25OdW1iZXI6MjQsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMjgsNTQsODAsMTA2XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExN30sXG57bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExOH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0NX0se251bUJsb2NrczoxNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjE2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczozMCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9LHtudW1CbG9ja3M6MixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTd9XX1dfSx7aW5mb0JpdHM6MTAyODgxLHZlcnNpb25OdW1iZXI6MjUsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMzIsNTgsODQsMTEwXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjI2LFxuZWNCbG9ja3M6W3tudW1CbG9ja3M6OCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTA2fSx7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEwN31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo4LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0N30se251bUJsb2NrczoxMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6MjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczoxMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6MTEwNTA3LHZlcnNpb25OdW1iZXI6MjYsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsXG4zMCw1OCw4NiwxMTRdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTAsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExNH0se251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ2fSx7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjI4LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyMn0se251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczozMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9LHtudW1CbG9ja3M6NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTd9XX1dfSxcbntpbmZvQml0czoxMTA3MzQsdmVyc2lvbk51bWJlcjoyNyxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzNCw2Miw5MCwxMThdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6OCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTIyfSx7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyMixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDV9LHtudW1CbG9ja3M6MyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6OCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjN9LHtudW1CbG9ja3M6MjYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0sXG57bnVtQmxvY2tzOjI4LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNn1dfV19LHtpbmZvQml0czoxMTc3ODYsdmVyc2lvbk51bWJlcjoyOCxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyNiw1MCw3NCw5OCwxMjJdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTE3fSx7bnVtQmxvY2tzOjEwLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDV9LHtudW1CbG9ja3M6MjMsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ2fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjMxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxcbmVjQmxvY2tzOlt7bnVtQmxvY2tzOjExLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczozMSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6MTE5NjE1LHZlcnNpb25OdW1iZXI6MjksYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMzAsNTQsNzgsMTAyLDEyNl0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2Nrczo3LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9LHtudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTE3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIxLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0NX0se251bUJsb2Nrczo3LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0Nn1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyM30se251bUJsb2NrczozNyxcbmRhdGFDb2Rld29yZHNQZXJCbG9jazoyNH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6MjYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjEyNjMyNSx2ZXJzaW9uTnVtYmVyOjMwLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDI2LDUyLDc4LDEwNCwxMzBdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTE1fSx7bnVtQmxvY2tzOjEwLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fSx7bnVtQmxvY2tzOjEwLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0OH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxcbmVjQmxvY2tzOlt7bnVtQmxvY2tzOjE1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNH0se251bUJsb2NrczoyNSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MjMsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE1fSx7bnVtQmxvY2tzOjI1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNn1dfV19LHtpbmZvQml0czoxMjc1NjgsdmVyc2lvbk51bWJlcjozMSxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzMCw1Niw4MiwxMDgsMTM0XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEzLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTV9LHtudW1CbG9ja3M6MyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTE2fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ2fSxcbntudW1CbG9ja3M6MjksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNH0se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoyMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6MjgsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjEzMzU4OSx2ZXJzaW9uTnVtYmVyOjMyLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDM0LDYwLDg2LDExMiwxMzhdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoxMCxcbmRhdGFDb2Rld29yZHNQZXJCbG9jazo0Nn0se251bUJsb2NrczoyMyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTAsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjM1LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6MzUsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjEzNjk0NCx2ZXJzaW9uTnVtYmVyOjMzLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDMwLDU4LDg2LDExNCwxNDJdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExNX0se251bUJsb2NrczoxLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9XX0sXG57ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoxNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDZ9LHtudW1CbG9ja3M6MjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjI5LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNH0se251bUJsb2NrczoxOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE1fSx7bnVtQmxvY2tzOjQ2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNn1dfV19LHtpbmZvQml0czoxNDE0OTgsdmVyc2lvbk51bWJlcjozNCxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwzNCw2Miw5MCwxMTgsMTQ2XSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEzLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTV9LFxue251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTZ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ2fSx7bnVtQmxvY2tzOjIzLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0N31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2Nrczo0NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6NyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NTksZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fSx7bnVtQmxvY2tzOjEsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE3fV19XX0se2luZm9CaXRzOjE0NTMxMSx2ZXJzaW9uTnVtYmVyOjM1LGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDMwLDU0LDc4LDEwMiwxMjYsMTUwXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLFxuZWNCbG9ja3M6W3tudW1CbG9ja3M6MTIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyMX0se251bUJsb2Nrczo3LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMjJ9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6MTIsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fSx7bnVtQmxvY2tzOjI2LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0OH1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczozOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6MTQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2Nrczo0MSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6MTUwMjgzLHZlcnNpb25OdW1iZXI6MzYsYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsXG4yNCw1MCw3NiwxMDIsMTI4LDE1NF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMjF9LHtudW1CbG9ja3M6MTQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyMn1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2Nrczo2LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0N30se251bUJsb2NrczozNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NDYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjEwLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2Nrczo2NCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSxcbntpbmZvQml0czoxNTI2MjIsdmVyc2lvbk51bWJlcjozNyxhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczpbNiwyOCw1NCw4MCwxMDYsMTMyLDE1OF0sZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOlt7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxNyxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTIyfSx7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyM31dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazoyOCxlY0Jsb2Nrczpbe251bUJsb2NrczoyOSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDZ9LHtudW1CbG9ja3M6MTQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQ5LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNH0se251bUJsb2NrczoxMCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjV9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MjQsXG5kYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6NDYsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjE1ODMwOCx2ZXJzaW9uTnVtYmVyOjM4LGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDMyLDU4LDg0LDExMCwxMzYsMTYyXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjEyMn0se251bUJsb2NrczoxOCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTIzfV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjEzLGRhdGFDb2Rld29yZHNQZXJCbG9jazo0Nn0se251bUJsb2NrczozMixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDd9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6NDgsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjE0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSxcbntlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2NrczozMixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfSx7aW5mb0JpdHM6MTYxMDg5LHZlcnNpb25OdW1iZXI6MzksYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6WzYsMjYsNTQsODIsMTEwLDEzOCwxNjZdLGVycm9yQ29ycmVjdGlvbkxldmVsczpbe2VjQ29kZXdvcmRzUGVyQmxvY2s6MzAsZWNCbG9ja3M6W3tudW1CbG9ja3M6MjAsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjExN30se251bUJsb2Nrczo0LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTh9XX0se2VjQ29kZXdvcmRzUGVyQmxvY2s6MjgsZWNCbG9ja3M6W3tudW1CbG9ja3M6NDAsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ3fSx7bnVtQmxvY2tzOjcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjQ4fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjQzLFxuZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI0fSx7bnVtQmxvY2tzOjIyLGRhdGFDb2Rld29yZHNQZXJCbG9jazoyNX1dfSx7ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczoxMCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTV9LHtudW1CbG9ja3M6NjcsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjE2fV19XX0se2luZm9CaXRzOjE2NzAxNyx2ZXJzaW9uTnVtYmVyOjQwLGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOls2LDMwLDU4LDg2LDExNCwxNDIsMTcwXSxlcnJvckNvcnJlY3Rpb25MZXZlbHM6W3tlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjE5LGRhdGFDb2Rld29yZHNQZXJCbG9jazoxMTh9LHtudW1CbG9ja3M6NixkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTE5fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjI4LGVjQmxvY2tzOlt7bnVtQmxvY2tzOjE4LGRhdGFDb2Rld29yZHNQZXJCbG9jazo0N30se251bUJsb2NrczozMSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6NDh9XX0sXG57ZWNDb2Rld29yZHNQZXJCbG9jazozMCxlY0Jsb2Nrczpbe251bUJsb2NrczozNCxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MjR9LHtudW1CbG9ja3M6MzQsZGF0YUNvZGV3b3Jkc1BlckJsb2NrOjI1fV19LHtlY0NvZGV3b3Jkc1BlckJsb2NrOjMwLGVjQmxvY2tzOlt7bnVtQmxvY2tzOjIwLGRhdGFDb2Rld29yZHNQZXJCbG9jazoxNX0se251bUJsb2Nrczo2MSxkYXRhQ29kZXdvcmRzUGVyQmxvY2s6MTZ9XX1dfV0sY2E9W3tiaXRzOjIxNTIyLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjEsZGF0YU1hc2s6MH19LHtiaXRzOjIwNzczLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjEsZGF0YU1hc2s6MX19LHtiaXRzOjI0MTg4LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjEsZGF0YU1hc2s6Mn19LHtiaXRzOjIzMzcxLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjEsZGF0YU1hc2s6M319LHtiaXRzOjE3OTEzLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjEsXG5kYXRhTWFzazo0fX0se2JpdHM6MTY1OTAsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MSxkYXRhTWFzazo1fX0se2JpdHM6MjAzNzUsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MSxkYXRhTWFzazo2fX0se2JpdHM6MTkxMDQsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MSxkYXRhTWFzazo3fX0se2JpdHM6MzA2NjAsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MCxkYXRhTWFzazowfX0se2JpdHM6Mjk0MjcsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MCxkYXRhTWFzazoxfX0se2JpdHM6MzIxNzAsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MCxkYXRhTWFzazoyfX0se2JpdHM6MzA4NzcsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MCxkYXRhTWFzazozfX0se2JpdHM6MjYxNTksZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MCxkYXRhTWFzazo0fX0se2JpdHM6MjUzNjgsXG5mb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDowLGRhdGFNYXNrOjV9fSx7Yml0czoyNzcxMyxmb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDowLGRhdGFNYXNrOjZ9fSx7Yml0czoyNjk5OCxmb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDowLGRhdGFNYXNrOjd9fSx7Yml0czo1NzY5LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjMsZGF0YU1hc2s6MH19LHtiaXRzOjUwNTQsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MyxkYXRhTWFzazoxfX0se2JpdHM6NzM5OSxmb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDozLGRhdGFNYXNrOjJ9fSx7Yml0czo2NjA4LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjMsZGF0YU1hc2s6M319LHtiaXRzOjE4OTAsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MyxkYXRhTWFzazo0fX0se2JpdHM6NTk3LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjMsXG5kYXRhTWFzazo1fX0se2JpdHM6MzM0MCxmb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDozLGRhdGFNYXNrOjZ9fSx7Yml0czoyMTA3LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjMsZGF0YU1hc2s6N319LHtiaXRzOjEzNjYzLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6MH19LHtiaXRzOjEyMzkyLGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6MX19LHtiaXRzOjE2MTc3LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6Mn19LHtiaXRzOjE0ODU0LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6M319LHtiaXRzOjkzOTYsZm9ybWF0SW5mbzp7ZXJyb3JDb3JyZWN0aW9uTGV2ZWw6MixkYXRhTWFzazo0fX0se2JpdHM6ODU3OSxmb3JtYXRJbmZvOntlcnJvckNvcnJlY3Rpb25MZXZlbDoyLGRhdGFNYXNrOjV9fSx7Yml0czoxMTk5NCxcbmZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6Nn19LHtiaXRzOjExMjQ1LGZvcm1hdEluZm86e2Vycm9yQ29ycmVjdGlvbkxldmVsOjIsZGF0YU1hc2s6N319XSxaPVsoYSk9PjA9PT0oYS55K2EueCklMiwoYSk9PjA9PT1hLnklMiwoYSk9PjA9PT1hLnglMywoYSk9PjA9PT0oYS55K2EueCklMywoYSk9PjA9PT0oTWF0aC5mbG9vcihhLnkvMikrTWF0aC5mbG9vcihhLngvMykpJTIsKGEpPT4wPT09YS54KmEueSUyK2EueCphLnklMywoYSk9PjA9PT0oYS55KmEueCUyK2EueSphLnglMyklMiwoYSk9PjA9PT0oKGEueSthLngpJTIrYS55KmEueCUzKSUyXSx4PShhLGIpPT5NYXRoLnNxcnQoTWF0aC5wb3coYi54LWEueCwyKStNYXRoLnBvdyhiLnktYS55LDIpKSxrYT17aW52ZXJzaW9uQXR0ZW1wdHM6XCJhdHRlbXB0Qm90aFwiLGdyZXlTY2FsZVdlaWdodHM6e3JlZDouMjEyNixncmVlbjouNzE1MixibHVlOi4wNzIyLHVzZUludGVnZXJBcHByb3hpbWF0aW9uOiExfSxcbmNhbk92ZXJ3cml0ZUltYWdlOiEwfTtJLmRlZmF1bHQ9STtsZXQgSD1cImRvbnRJbnZlcnRcIixEPXtyZWQ6NzcsZ3JlZW46MTUwLGJsdWU6MjksdXNlSW50ZWdlckFwcHJveGltYXRpb246ITB9O3NlbGYub25tZXNzYWdlPShhKT0+e2xldCBiPWEuZGF0YS5kYXRhO3N3aXRjaChhLmRhdGEudHlwZSl7Y2FzZSBcImRlY29kZVwiOmE9SShiLmRhdGEsYi53aWR0aCxiLmhlaWdodCx7aW52ZXJzaW9uQXR0ZW1wdHM6SCxncmV5U2NhbGVXZWlnaHRzOkR9KTtzZWxmLnBvc3RNZXNzYWdlKHt0eXBlOlwicXJSZXN1bHRcIixkYXRhOmE/YS5kYXRhOm51bGx9KTticmVhaztjYXNlIFwiZ3JheXNjYWxlV2VpZ2h0c1wiOkQucmVkPWIucmVkO0QuZ3JlZW49Yi5ncmVlbjtELmJsdWU9Yi5ibHVlO0QudXNlSW50ZWdlckFwcHJveGltYXRpb249Yi51c2VJbnRlZ2VyQXBwcm94aW1hdGlvbjticmVhaztjYXNlIFwiaW52ZXJzaW9uTW9kZVwiOnN3aXRjaChiKXtjYXNlIFwib3JpZ2luYWxcIjpIPVwiZG9udEludmVydFwiO2JyZWFrO1xuY2FzZSBcImludmVydFwiOkg9XCJhdHRlbXB0Qm90aFwiO2JyZWFrO2Nhc2UgXCJib3RoXCI6SD1cImF0dGVtcHRCb3RoXCI7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIkludmFsaWQgaW52ZXJzaW9uIG1vZGVcIik7fWJyZWFrO2Nhc2UgXCJjbG9zZVwiOnNlbGYuY2xvc2UoKX19fSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFyLXNjYW5uZXItd29ya2VyLm1pbi5qcy5tYXAiLCJjbGFzcyBle3N0YXRpYyBoYXNDYW1lcmEoKXtyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbigoYSk9PmEuc29tZSgoYSk9PlwidmlkZW9pbnB1dFwiPT09YS5raW5kKSkuY2F0Y2goKCk9PiExKX1jb25zdHJ1Y3RvcihhLGMsYj1lLkRFRkFVTFRfQ0FOVkFTX1NJWkUpe3RoaXMuJHZpZGVvPWE7dGhpcy4kY2FudmFzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7dGhpcy5fb25EZWNvZGU9Yzt0aGlzLl9wYXVzZWQ9dGhpcy5fYWN0aXZlPSExO3RoaXMuJGNhbnZhcy53aWR0aD1iO3RoaXMuJGNhbnZhcy5oZWlnaHQ9Yjt0aGlzLl9zb3VyY2VSZWN0PXt4OjAseTowLHdpZHRoOmIsaGVpZ2h0OmJ9O3RoaXMuX29uQ2FuUGxheT10aGlzLl9vbkNhblBsYXkuYmluZCh0aGlzKTt0aGlzLl9vblBsYXk9dGhpcy5fb25QbGF5LmJpbmQodGhpcyk7dGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlPXRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpO1xudGhpcy4kdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIix0aGlzLl9vbkNhblBsYXkpO3RoaXMuJHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsdGhpcy5fb25QbGF5KTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSk7dGhpcy5fcXJXb3JrZXI9bmV3IFdvcmtlcihlLldPUktFUl9QQVRIKX1kZXN0cm95KCl7dGhpcy4kdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIix0aGlzLl9vbkNhblBsYXkpO3RoaXMuJHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsdGhpcy5fb25QbGF5KTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSk7dGhpcy5zdG9wKCk7dGhpcy5fcXJXb3JrZXIucG9zdE1lc3NhZ2Uoe3R5cGU6XCJjbG9zZVwifSl9c3RhcnQoKXtpZih0aGlzLl9hY3RpdmUmJiF0aGlzLl9wYXVzZWQpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXCJodHRwczpcIiE9PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCYmY29uc29sZS53YXJuKFwiVGhlIGNhbWVyYSBzdHJlYW0gaXMgb25seSBhY2Nlc3NpYmxlIGlmIHRoZSBwYWdlIGlzIHRyYW5zZmVycmVkIHZpYSBodHRwcy5cIik7dGhpcy5fYWN0aXZlPSEwO3RoaXMuX3BhdXNlZD0hMTtpZihkb2N1bWVudC5oaWRkZW4pcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO2NsZWFyVGltZW91dCh0aGlzLl9vZmZUaW1lb3V0KTt0aGlzLl9vZmZUaW1lb3V0PW51bGw7aWYodGhpcy4kdmlkZW8uc3JjT2JqZWN0KXJldHVybiB0aGlzLiR2aWRlby5wbGF5KCksUHJvbWlzZS5yZXNvbHZlKCk7bGV0IGE9XCJlbnZpcm9ubWVudFwiO3JldHVybiB0aGlzLl9nZXRDYW1lcmFTdHJlYW0oXCJlbnZpcm9ubWVudFwiLCEwKS5jYXRjaCgoKT0+e2E9XCJ1c2VyXCI7cmV0dXJuIHRoaXMuX2dldENhbWVyYVN0cmVhbSgpfSkudGhlbigoYyk9Pnt0aGlzLiR2aWRlby5zcmNPYmplY3Q9Yzt0aGlzLl9zZXRWaWRlb01pcnJvcihhKX0pLmNhdGNoKChhKT0+XG57dGhpcy5fYWN0aXZlPSExO3Rocm93IGE7fSl9c3RvcCgpe3RoaXMucGF1c2UoKTt0aGlzLl9hY3RpdmU9ITF9cGF1c2UoKXt0aGlzLl9wYXVzZWQ9ITA7dGhpcy5fYWN0aXZlJiYodGhpcy4kdmlkZW8ucGF1c2UoKSx0aGlzLl9vZmZUaW1lb3V0fHwodGhpcy5fb2ZmVGltZW91dD1zZXRUaW1lb3V0KCgpPT57bGV0IGE9dGhpcy4kdmlkZW8uc3JjT2JqZWN0JiZ0aGlzLiR2aWRlby5zcmNPYmplY3QuZ2V0VHJhY2tzKClbMF07YSYmKGEuc3RvcCgpLHRoaXMuX29mZlRpbWVvdXQ9dGhpcy4kdmlkZW8uc3JjT2JqZWN0PW51bGwpfSwzMDApKSl9c3RhdGljIHNjYW5JbWFnZShhLGM9bnVsbCxiPW51bGwsZD1udWxsLGY9ITEsZz0hMSl7bGV0IGg9ITEsbD1uZXcgUHJvbWlzZSgobCxnKT0+e2J8fChiPW5ldyBXb3JrZXIoZS5XT1JLRVJfUEFUSCksaD0hMCxiLnBvc3RNZXNzYWdlKHt0eXBlOlwiaW52ZXJzaW9uTW9kZVwiLGRhdGE6XCJib3RoXCJ9KSk7bGV0IG4sbSxrO209KGEpPT57XCJxclJlc3VsdFwiPT09XG5hLmRhdGEudHlwZSYmKGIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixtKSxiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGspLGNsZWFyVGltZW91dChuKSxudWxsIT09YS5kYXRhLmRhdGE/bChhLmRhdGEuZGF0YSk6ZyhcIlFSIGNvZGUgbm90IGZvdW5kLlwiKSl9O2s9KGEpPT57Yi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG0pO2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsayk7Y2xlYXJUaW1lb3V0KG4pO2coXCJTY2FubmVyIGVycm9yOiBcIisoYT9hLm1lc3NhZ2V8fGE6XCJVbmtub3duIEVycm9yXCIpKX07Yi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG0pO2IuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsayk7bj1zZXRUaW1lb3V0KCgpPT5rKFwidGltZW91dFwiKSwzRTMpO2UuX2xvYWRJbWFnZShhKS50aGVuKChhKT0+e2E9ZS5fZ2V0SW1hZ2VEYXRhKGEsYyxkLGYpO2IucG9zdE1lc3NhZ2Uoe3R5cGU6XCJkZWNvZGVcIixkYXRhOmF9LFthLmRhdGEuYnVmZmVyXSl9KS5jYXRjaChrKX0pO1xuYyYmZyYmKGw9bC5jYXRjaCgoKT0+ZS5zY2FuSW1hZ2UoYSxudWxsLGIsZCxmKSkpO3JldHVybiBsPWwuZmluYWxseSgoKT0+e2gmJmIucG9zdE1lc3NhZ2Uoe3R5cGU6XCJjbG9zZVwifSl9KX1zZXRHcmF5c2NhbGVXZWlnaHRzKGEsYyxiLGQ9ITApe3RoaXMuX3FyV29ya2VyLnBvc3RNZXNzYWdlKHt0eXBlOlwiZ3JheXNjYWxlV2VpZ2h0c1wiLGRhdGE6e3JlZDphLGdyZWVuOmMsYmx1ZTpiLHVzZUludGVnZXJBcHByb3hpbWF0aW9uOmR9fSl9c2V0SW52ZXJzaW9uTW9kZShhKXt0aGlzLl9xcldvcmtlci5wb3N0TWVzc2FnZSh7dHlwZTpcImludmVyc2lvbk1vZGVcIixkYXRhOmF9KX1fb25DYW5QbGF5KCl7dGhpcy5fdXBkYXRlU291cmNlUmVjdCgpO3RoaXMuJHZpZGVvLnBsYXkoKX1fb25QbGF5KCl7dGhpcy5fdXBkYXRlU291cmNlUmVjdCgpO3RoaXMuX3NjYW5GcmFtZSgpfV9vblZpc2liaWxpdHlDaGFuZ2UoKXtkb2N1bWVudC5oaWRkZW4/dGhpcy5wYXVzZSgpOnRoaXMuX2FjdGl2ZSYmXG50aGlzLnN0YXJ0KCl9X3VwZGF0ZVNvdXJjZVJlY3QoKXtsZXQgYT1NYXRoLnJvdW5kKDIvMypNYXRoLm1pbih0aGlzLiR2aWRlby52aWRlb1dpZHRoLHRoaXMuJHZpZGVvLnZpZGVvSGVpZ2h0KSk7dGhpcy5fc291cmNlUmVjdC53aWR0aD10aGlzLl9zb3VyY2VSZWN0LmhlaWdodD1hO3RoaXMuX3NvdXJjZVJlY3QueD0odGhpcy4kdmlkZW8udmlkZW9XaWR0aC1hKS8yO3RoaXMuX3NvdXJjZVJlY3QueT0odGhpcy4kdmlkZW8udmlkZW9IZWlnaHQtYSkvMn1fc2NhbkZyYW1lKCl7aWYoIXRoaXMuX2FjdGl2ZXx8dGhpcy4kdmlkZW8ucGF1c2VkfHx0aGlzLiR2aWRlby5lbmRlZClyZXR1cm4hMTtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntlLnNjYW5JbWFnZSh0aGlzLiR2aWRlbyx0aGlzLl9zb3VyY2VSZWN0LHRoaXMuX3FyV29ya2VyLHRoaXMuJGNhbnZhcywhMCkudGhlbih0aGlzLl9vbkRlY29kZSwoYSk9Pnt0aGlzLl9hY3RpdmUmJlwiUVIgY29kZSBub3QgZm91bmQuXCIhPT1hJiZcbmNvbnNvbGUuZXJyb3IoYSl9KS50aGVuKCgpPT50aGlzLl9zY2FuRnJhbWUoKSl9KX1fZ2V0Q2FtZXJhU3RyZWFtKGEsYz0hMSl7bGV0IGI9W3t3aWR0aDp7bWluOjEwMjR9fSx7d2lkdGg6e21pbjo3Njh9fSx7fV07YSYmKGMmJihhPXtleGFjdDphfSksYi5mb3JFYWNoKChiKT0+Yi5mYWNpbmdNb2RlPWEpKTtyZXR1cm4gdGhpcy5fZ2V0TWF0Y2hpbmdDYW1lcmFTdHJlYW0oYil9X2dldE1hdGNoaW5nQ2FtZXJhU3RyZWFtKGEpe3JldHVybiAwPT09YS5sZW5ndGg/UHJvbWlzZS5yZWplY3QoXCJDYW1lcmEgbm90IGZvdW5kLlwiKTpuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7dmlkZW86YS5zaGlmdCgpfSkuY2F0Y2goKCk9PnRoaXMuX2dldE1hdGNoaW5nQ2FtZXJhU3RyZWFtKGEpKX1fc2V0VmlkZW9NaXJyb3IoYSl7dGhpcy4kdmlkZW8uc3R5bGUudHJhbnNmb3JtPVwic2NhbGVYKFwiKyhcInVzZXJcIj09PWE/LTE6MSkrXCIpXCJ9c3RhdGljIF9nZXRJbWFnZURhdGEoYSxjPVxubnVsbCxiPW51bGwsZD0hMSl7Yj1ifHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2xldCBmPWMmJmMueD9jLng6MCxnPWMmJmMueT9jLnk6MCxoPWMmJmMud2lkdGg/Yy53aWR0aDphLndpZHRofHxhLnZpZGVvV2lkdGg7Yz1jJiZjLmhlaWdodD9jLmhlaWdodDphLmhlaWdodHx8YS52aWRlb0hlaWdodDtkfHxiLndpZHRoPT09aCYmYi5oZWlnaHQ9PT1jfHwoYi53aWR0aD1oLGIuaGVpZ2h0PWMpO2Q9Yi5nZXRDb250ZXh0KFwiMmRcIix7YWxwaGE6ITF9KTtkLmltYWdlU21vb3RoaW5nRW5hYmxlZD0hMTtkLmRyYXdJbWFnZShhLGYsZyxoLGMsMCwwLGIud2lkdGgsYi5oZWlnaHQpO3JldHVybiBkLmdldEltYWdlRGF0YSgwLDAsYi53aWR0aCxiLmhlaWdodCl9c3RhdGljIF9sb2FkSW1hZ2UoYSl7aWYoYSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50fHxhIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudHx8d2luZG93LkltYWdlQml0bWFwJiZhIGluc3RhbmNlb2Ygd2luZG93LkltYWdlQml0bWFwfHxcbndpbmRvdy5PZmZzY3JlZW5DYW52YXMmJmEgaW5zdGFuY2VvZiB3aW5kb3cuT2Zmc2NyZWVuQ2FudmFzKXJldHVybiBQcm9taXNlLnJlc29sdmUoYSk7aWYoYSBpbnN0YW5jZW9mIEltYWdlKXJldHVybiBlLl9hd2FpdEltYWdlTG9hZChhKS50aGVuKCgpPT5hKTtpZihhIGluc3RhbmNlb2YgRmlsZXx8YSBpbnN0YW5jZW9mIFVSTHx8XCJzdHJpbmdcIj09PXR5cGVvZiBhKXtsZXQgYz1uZXcgSW1hZ2U7Yy5zcmM9YSBpbnN0YW5jZW9mIEZpbGU/VVJMLmNyZWF0ZU9iamVjdFVSTChhKTphO3JldHVybiBlLl9hd2FpdEltYWdlTG9hZChjKS50aGVuKCgpPT57YSBpbnN0YW5jZW9mIEZpbGUmJlVSTC5yZXZva2VPYmplY3RVUkwoYy5zcmMpO3JldHVybiBjfSl9cmV0dXJuIFByb21pc2UucmVqZWN0KFwiVW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZS5cIil9c3RhdGljIF9hd2FpdEltYWdlTG9hZChhKXtyZXR1cm4gbmV3IFByb21pc2UoKGMsYik9PntpZihhLmNvbXBsZXRlJiYwIT09YS5uYXR1cmFsV2lkdGgpYygpO1xuZWxzZXtsZXQgZCxmO2Q9KCk9PnthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZCk7YS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmKTtjKCl9O2Y9KCk9PnthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZCk7YS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmKTtiKFwiSW1hZ2UgbG9hZCBlcnJvclwiKX07YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGQpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZil9fSl9fWUuREVGQVVMVF9DQU5WQVNfU0laRT00MDA7ZS5XT1JLRVJfUEFUSD1cInFyLXNjYW5uZXItd29ya2VyLm1pbi5qc1wiO2V4cG9ydCBkZWZhdWx0IGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xci1zY2FubmVyLm1pbi5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9