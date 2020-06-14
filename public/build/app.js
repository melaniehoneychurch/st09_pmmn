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





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


_qr_scanner_min_js__WEBPACK_IMPORTED_MODULE_5__["default"].WORKER_PATH = './qr-scanner-worker.min.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXItc2Nhbm5lci5taW4uanMiXSwibmFtZXMiOlsiUXJTY2FubmVyIiwiV09SS0VSX1BBVEgiLCJ2aWRlbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW1IYXNDYW1lcmEiLCJjYW1RclJlc3VsdCIsImNhbVFyUmVzdWx0VGltZXN0YW1wIiwiZmlsZVNlbGVjdG9yIiwiZmlsZVFyUmVzdWx0Iiwic2V0UmVzdWx0IiwibGFiZWwiLCJyZXN1bHQiLCJ0ZXh0Q29udGVudCIsIkRhdGUiLCJ0b1N0cmluZyIsInN0eWxlIiwiY29sb3IiLCJjbGVhclRpbWVvdXQiLCJoaWdobGlnaHRUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhc0NhbWVyYSIsInRoZW4iLCJzY2FubmVyIiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZXRJbnZlcnNpb25Nb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWxlIiwiZmlsZXMiLCJzY2FuSW1hZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImVudW1lcmF0ZURldmljZXMiLCJhIiwic29tZSIsImtpbmQiLCJjIiwiYiIsIkRFRkFVTFRfQ0FOVkFTX1NJWkUiLCIkdmlkZW8iLCIkY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsIl9vbkRlY29kZSIsIl9wYXVzZWQiLCJfYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJfc291cmNlUmVjdCIsIngiLCJ5IiwiX29uQ2FuUGxheSIsImJpbmQiLCJfb25QbGF5IiwiX29uVmlzaWJpbGl0eUNoYW5nZSIsIl9xcldvcmtlciIsIldvcmtlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wIiwicG9zdE1lc3NhZ2UiLCJ0eXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwid2FybiIsImhpZGRlbiIsIl9vZmZUaW1lb3V0Iiwic3JjT2JqZWN0IiwicGxheSIsIl9nZXRDYW1lcmFTdHJlYW0iLCJfc2V0VmlkZW9NaXJyb3IiLCJwYXVzZSIsImdldFRyYWNrcyIsImQiLCJkYXRhIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwidXNlSW50ZWdlckFwcHJveGltYXRpb24iLCJfdXBkYXRlU291cmNlUmVjdCIsIl9zY2FuRnJhbWUiLCJNYXRoIiwicm91bmQiLCJtaW4iLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJwYXVzZWQiLCJlbmRlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVycm9yIiwiZXhhY3QiLCJmb3JFYWNoIiwiZmFjaW5nTW9kZSIsIl9nZXRNYXRjaGluZ0NhbWVyYVN0cmVhbSIsImxlbmd0aCIsInJlamVjdCIsImdldFVzZXJNZWRpYSIsInNoaWZ0IiwidHJhbnNmb3JtIiwiZiIsImciLCJoIiwibCIsIm4iLCJtIiwiayIsIm1lc3NhZ2UiLCJfbG9hZEltYWdlIiwiX2dldEltYWdlRGF0YSIsImJ1ZmZlciIsImdldENvbnRleHQiLCJhbHBoYSIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImRyYXdJbWFnZSIsImdldEltYWdlRGF0YSIsIkhUTUxDYW52YXNFbGVtZW50IiwiSFRNTFZpZGVvRWxlbWVudCIsIkltYWdlQml0bWFwIiwiT2Zmc2NyZWVuQ2FudmFzIiwiSW1hZ2UiLCJfYXdhaXRJbWFnZUxvYWQiLCJGaWxlIiwiVVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiY29tcGxldGUiLCJuYXR1cmFsV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtDQUdBO0FBQ0E7O0FBRUE7QUFDQUEsMERBQVMsQ0FBQ0MsV0FBVixHQUF3Qiw0QkFBeEI7QUFFSSxJQUFNQyxL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QkFBRixDQUFzQixNQUF0QixFQUE2QmtCLEVBQTdCO0FBQWdDekMsYUFBQyxDQUFDdUIsbUJBQUYsQ0FBc0IsT0FBdEIsRUFBOEI0QyxFQUE5QjtBQUFpQ2hFLGFBQUM7QUFBRyxXQUE1RTs7QUFBNkVnRSxZQUFDLEdBQUMsYUFBSTtBQUFDbkUsYUFBQyxDQUFDdUIsbUJBQUYsQ0FBc0IsTUFBdEIsRUFBNkJrQixFQUE3QjtBQUFnQ3pDLGFBQUMsQ0FBQ3VCLG1CQUFGLENBQXNCLE9BQXRCLEVBQThCNEMsRUFBOUI7QUFBaUMvRCxhQUFDLENBQUMsa0JBQUQsQ0FBRDtBQUFzQixXQUE5Rjs7QUFBK0ZKLFdBQUMsQ0FBQ2QsZ0JBQUYsQ0FBbUIsTUFBbkIsRUFBMEJ1RCxFQUExQjtBQUE2QnpDLFdBQUMsQ0FBQ2QsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBMkJpRixFQUEzQjtBQUE4QjtBQUFDLE9BRDhNLENBQVA7QUFDck07Ozs7OztBQUFDekUsQ0FBQyxDQUFDVyxtQkFBRixHQUFzQixHQUF0QjtBQUEwQlgsQ0FBQyxDQUFDaEMsV0FBRixHQUFjLDBCQUFkO0FBQXdEZ0MsZ0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IFFyU2Nhbm5lciBmcm9tIFwiLi9xci1zY2FubmVyLm1pbi5qc1wiO1xuUXJTY2FubmVyLldPUktFUl9QQVRIID0gJy4vcXItc2Nhbm5lci13b3JrZXIubWluLmpzJztcblxuICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3FyLXZpZGVvJyk7XG4gICAgY29uc3QgY2FtSGFzQ2FtZXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbS1oYXMtY2FtZXJhJyk7XG4gICAgY29uc3QgY2FtUXJSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtLXFyLXJlc3VsdCcpO1xuICAgIGNvbnN0IGNhbVFyUmVzdWx0VGltZXN0YW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbS1xci1yZXN1bHQtdGltZXN0YW1wJyk7XG4gICAgY29uc3QgZmlsZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtc2VsZWN0b3InKTtcbiAgICBjb25zdCBmaWxlUXJSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1xci1yZXN1bHQnKTtcblxuICAgIGZ1bmN0aW9uIHNldFJlc3VsdChsYWJlbCwgcmVzdWx0KSB7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcmVzdWx0O1xuICAgICAgICBjYW1RclJlc3VsdFRpbWVzdGFtcC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGFiZWwuc3R5bGUuY29sb3IgPSAndGVhbCc7XG4gICAgICAgIGNsZWFyVGltZW91dChsYWJlbC5oaWdobGlnaHRUaW1lb3V0KTtcbiAgICAgICAgbGFiZWwuaGlnaGxpZ2h0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gbGFiZWwuc3R5bGUuY29sb3IgPSAnaW5oZXJpdCcsIDEwMCk7XG4gICAgfVxuXG4gICAgLy8gIyMjIyMjIyBXZWIgQ2FtIFNjYW5uaW5nICMjIyMjIyNcblxuICAgIFFyU2Nhbm5lci5oYXNDYW1lcmEoKS50aGVuKGhhc0NhbWVyYSA9PiBjYW1IYXNDYW1lcmEudGV4dENvbnRlbnQgPSBoYXNDYW1lcmEpO1xuXG4gICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBRclNjYW5uZXIodmlkZW8sIHJlc3VsdCA9PiBzZXRSZXN1bHQoY2FtUXJSZXN1bHQsIHJlc3VsdCkpO1xuICAgIHNjYW5uZXIuc3RhcnQoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZlcnNpb24tbW9kZS1zZWxlY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgIHNjYW5uZXIuc2V0SW52ZXJzaW9uTW9kZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gIyMjIyMjIyBGaWxlIFNjYW5uaW5nICMjIyMjIyNcblxuICAgIGZpbGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlU2VsZWN0b3IuZmlsZXNbMF07XG4gICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFFyU2Nhbm5lci5zY2FuSW1hZ2UoZmlsZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBzZXRSZXN1bHQoZmlsZVFyUmVzdWx0LCByZXN1bHQpKVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4gc2V0UmVzdWx0KGZpbGVRclJlc3VsdCwgZSB8fCAnTm8gUVIgY29kZSBmb3VuZC4nKSk7XG4gICAgfSk7XG5cblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiIsImNsYXNzIGV7c3RhdGljIGhhc0NhbWVyYSgpe3JldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChhKT0+YS5zb21lKChhKT0+XCJ2aWRlb2lucHV0XCI9PT1hLmtpbmQpKS5jYXRjaCgoKT0+ITEpfWNvbnN0cnVjdG9yKGEsYyxiPWUuREVGQVVMVF9DQU5WQVNfU0laRSl7dGhpcy4kdmlkZW89YTt0aGlzLiRjYW52YXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTt0aGlzLl9vbkRlY29kZT1jO3RoaXMuX3BhdXNlZD10aGlzLl9hY3RpdmU9ITE7dGhpcy4kY2FudmFzLndpZHRoPWI7dGhpcy4kY2FudmFzLmhlaWdodD1iO3RoaXMuX3NvdXJjZVJlY3Q9e3g6MCx5OjAsd2lkdGg6YixoZWlnaHQ6Yn07dGhpcy5fb25DYW5QbGF5PXRoaXMuX29uQ2FuUGxheS5iaW5kKHRoaXMpO3RoaXMuX29uUGxheT10aGlzLl9vblBsYXkuYmluZCh0aGlzKTt0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2U9dGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG50aGlzLiR2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLHRoaXMuX29uQ2FuUGxheSk7dGhpcy4kdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIix0aGlzLl9vblBsYXkpO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKTt0aGlzLl9xcldvcmtlcj1uZXcgV29ya2VyKGUuV09SS0VSX1BBVEgpfWRlc3Ryb3koKXt0aGlzLiR2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLHRoaXMuX29uQ2FuUGxheSk7dGhpcy4kdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlcIix0aGlzLl9vblBsYXkpO2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKTt0aGlzLnN0b3AoKTt0aGlzLl9xcldvcmtlci5wb3N0TWVzc2FnZSh7dHlwZTpcImNsb3NlXCJ9KX1zdGFydCgpe2lmKHRoaXMuX2FjdGl2ZSYmIXRoaXMuX3BhdXNlZClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cImh0dHBzOlwiIT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sJiZjb25zb2xlLndhcm4oXCJUaGUgY2FtZXJhIHN0cmVhbSBpcyBvbmx5IGFjY2Vzc2libGUgaWYgdGhlIHBhZ2UgaXMgdHJhbnNmZXJyZWQgdmlhIGh0dHBzLlwiKTt0aGlzLl9hY3RpdmU9ITA7dGhpcy5fcGF1c2VkPSExO2lmKGRvY3VtZW50LmhpZGRlbilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7Y2xlYXJUaW1lb3V0KHRoaXMuX29mZlRpbWVvdXQpO3RoaXMuX29mZlRpbWVvdXQ9bnVsbDtpZih0aGlzLiR2aWRlby5zcmNPYmplY3QpcmV0dXJuIHRoaXMuJHZpZGVvLnBsYXkoKSxQcm9taXNlLnJlc29sdmUoKTtsZXQgYT1cImVudmlyb25tZW50XCI7cmV0dXJuIHRoaXMuX2dldENhbWVyYVN0cmVhbShcImVudmlyb25tZW50XCIsITApLmNhdGNoKCgpPT57YT1cInVzZXJcIjtyZXR1cm4gdGhpcy5fZ2V0Q2FtZXJhU3RyZWFtKCl9KS50aGVuKChjKT0+e3RoaXMuJHZpZGVvLnNyY09iamVjdD1jO3RoaXMuX3NldFZpZGVvTWlycm9yKGEpfSkuY2F0Y2goKGEpPT5cbnt0aGlzLl9hY3RpdmU9ITE7dGhyb3cgYTt9KX1zdG9wKCl7dGhpcy5wYXVzZSgpO3RoaXMuX2FjdGl2ZT0hMX1wYXVzZSgpe3RoaXMuX3BhdXNlZD0hMDt0aGlzLl9hY3RpdmUmJih0aGlzLiR2aWRlby5wYXVzZSgpLHRoaXMuX29mZlRpbWVvdXR8fCh0aGlzLl9vZmZUaW1lb3V0PXNldFRpbWVvdXQoKCk9PntsZXQgYT10aGlzLiR2aWRlby5zcmNPYmplY3QmJnRoaXMuJHZpZGVvLnNyY09iamVjdC5nZXRUcmFja3MoKVswXTthJiYoYS5zdG9wKCksdGhpcy5fb2ZmVGltZW91dD10aGlzLiR2aWRlby5zcmNPYmplY3Q9bnVsbCl9LDMwMCkpKX1zdGF0aWMgc2NhbkltYWdlKGEsYz1udWxsLGI9bnVsbCxkPW51bGwsZj0hMSxnPSExKXtsZXQgaD0hMSxsPW5ldyBQcm9taXNlKChsLGcpPT57Ynx8KGI9bmV3IFdvcmtlcihlLldPUktFUl9QQVRIKSxoPSEwLGIucG9zdE1lc3NhZ2Uoe3R5cGU6XCJpbnZlcnNpb25Nb2RlXCIsZGF0YTpcImJvdGhcIn0pKTtsZXQgbixtLGs7bT0oYSk9PntcInFyUmVzdWx0XCI9PT1cbmEuZGF0YS50eXBlJiYoYi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG0pLGIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsayksY2xlYXJUaW1lb3V0KG4pLG51bGwhPT1hLmRhdGEuZGF0YT9sKGEuZGF0YS5kYXRhKTpnKFwiUVIgY29kZSBub3QgZm91bmQuXCIpKX07az0oYSk9PntiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbSk7Yi5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixrKTtjbGVhclRpbWVvdXQobik7ZyhcIlNjYW5uZXIgZXJyb3I6IFwiKyhhP2EubWVzc2FnZXx8YTpcIlVua25vd24gRXJyb3JcIikpfTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbSk7Yi5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixrKTtuPXNldFRpbWVvdXQoKCk9PmsoXCJ0aW1lb3V0XCIpLDNFMyk7ZS5fbG9hZEltYWdlKGEpLnRoZW4oKGEpPT57YT1lLl9nZXRJbWFnZURhdGEoYSxjLGQsZik7Yi5wb3N0TWVzc2FnZSh7dHlwZTpcImRlY29kZVwiLGRhdGE6YX0sW2EuZGF0YS5idWZmZXJdKX0pLmNhdGNoKGspfSk7XG5jJiZnJiYobD1sLmNhdGNoKCgpPT5lLnNjYW5JbWFnZShhLG51bGwsYixkLGYpKSk7cmV0dXJuIGw9bC5maW5hbGx5KCgpPT57aCYmYi5wb3N0TWVzc2FnZSh7dHlwZTpcImNsb3NlXCJ9KX0pfXNldEdyYXlzY2FsZVdlaWdodHMoYSxjLGIsZD0hMCl7dGhpcy5fcXJXb3JrZXIucG9zdE1lc3NhZ2Uoe3R5cGU6XCJncmF5c2NhbGVXZWlnaHRzXCIsZGF0YTp7cmVkOmEsZ3JlZW46YyxibHVlOmIsdXNlSW50ZWdlckFwcHJveGltYXRpb246ZH19KX1zZXRJbnZlcnNpb25Nb2RlKGEpe3RoaXMuX3FyV29ya2VyLnBvc3RNZXNzYWdlKHt0eXBlOlwiaW52ZXJzaW9uTW9kZVwiLGRhdGE6YX0pfV9vbkNhblBsYXkoKXt0aGlzLl91cGRhdGVTb3VyY2VSZWN0KCk7dGhpcy4kdmlkZW8ucGxheSgpfV9vblBsYXkoKXt0aGlzLl91cGRhdGVTb3VyY2VSZWN0KCk7dGhpcy5fc2NhbkZyYW1lKCl9X29uVmlzaWJpbGl0eUNoYW5nZSgpe2RvY3VtZW50LmhpZGRlbj90aGlzLnBhdXNlKCk6dGhpcy5fYWN0aXZlJiZcbnRoaXMuc3RhcnQoKX1fdXBkYXRlU291cmNlUmVjdCgpe2xldCBhPU1hdGgucm91bmQoMi8zKk1hdGgubWluKHRoaXMuJHZpZGVvLnZpZGVvV2lkdGgsdGhpcy4kdmlkZW8udmlkZW9IZWlnaHQpKTt0aGlzLl9zb3VyY2VSZWN0LndpZHRoPXRoaXMuX3NvdXJjZVJlY3QuaGVpZ2h0PWE7dGhpcy5fc291cmNlUmVjdC54PSh0aGlzLiR2aWRlby52aWRlb1dpZHRoLWEpLzI7dGhpcy5fc291cmNlUmVjdC55PSh0aGlzLiR2aWRlby52aWRlb0hlaWdodC1hKS8yfV9zY2FuRnJhbWUoKXtpZighdGhpcy5fYWN0aXZlfHx0aGlzLiR2aWRlby5wYXVzZWR8fHRoaXMuJHZpZGVvLmVuZGVkKXJldHVybiExO3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e2Uuc2NhbkltYWdlKHRoaXMuJHZpZGVvLHRoaXMuX3NvdXJjZVJlY3QsdGhpcy5fcXJXb3JrZXIsdGhpcy4kY2FudmFzLCEwKS50aGVuKHRoaXMuX29uRGVjb2RlLChhKT0+e3RoaXMuX2FjdGl2ZSYmXCJRUiBjb2RlIG5vdCBmb3VuZC5cIiE9PWEmJlxuY29uc29sZS5lcnJvcihhKX0pLnRoZW4oKCk9PnRoaXMuX3NjYW5GcmFtZSgpKX0pfV9nZXRDYW1lcmFTdHJlYW0oYSxjPSExKXtsZXQgYj1be3dpZHRoOnttaW46MTAyNH19LHt3aWR0aDp7bWluOjc2OH19LHt9XTthJiYoYyYmKGE9e2V4YWN0OmF9KSxiLmZvckVhY2goKGIpPT5iLmZhY2luZ01vZGU9YSkpO3JldHVybiB0aGlzLl9nZXRNYXRjaGluZ0NhbWVyYVN0cmVhbShiKX1fZ2V0TWF0Y2hpbmdDYW1lcmFTdHJlYW0oYSl7cmV0dXJuIDA9PT1hLmxlbmd0aD9Qcm9taXNlLnJlamVjdChcIkNhbWVyYSBub3QgZm91bmQuXCIpOm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHt2aWRlbzphLnNoaWZ0KCl9KS5jYXRjaCgoKT0+dGhpcy5fZ2V0TWF0Y2hpbmdDYW1lcmFTdHJlYW0oYSkpfV9zZXRWaWRlb01pcnJvcihhKXt0aGlzLiR2aWRlby5zdHlsZS50cmFuc2Zvcm09XCJzY2FsZVgoXCIrKFwidXNlclwiPT09YT8tMToxKStcIilcIn1zdGF0aWMgX2dldEltYWdlRGF0YShhLGM9XG5udWxsLGI9bnVsbCxkPSExKXtiPWJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7bGV0IGY9YyYmYy54P2MueDowLGc9YyYmYy55P2MueTowLGg9YyYmYy53aWR0aD9jLndpZHRoOmEud2lkdGh8fGEudmlkZW9XaWR0aDtjPWMmJmMuaGVpZ2h0P2MuaGVpZ2h0OmEuaGVpZ2h0fHxhLnZpZGVvSGVpZ2h0O2R8fGIud2lkdGg9PT1oJiZiLmhlaWdodD09PWN8fChiLndpZHRoPWgsYi5oZWlnaHQ9Yyk7ZD1iLmdldENvbnRleHQoXCIyZFwiLHthbHBoYTohMX0pO2QuaW1hZ2VTbW9vdGhpbmdFbmFibGVkPSExO2QuZHJhd0ltYWdlKGEsZixnLGgsYywwLDAsYi53aWR0aCxiLmhlaWdodCk7cmV0dXJuIGQuZ2V0SW1hZ2VEYXRhKDAsMCxiLndpZHRoLGIuaGVpZ2h0KX1zdGF0aWMgX2xvYWRJbWFnZShhKXtpZihhIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnR8fGEgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50fHx3aW5kb3cuSW1hZ2VCaXRtYXAmJmEgaW5zdGFuY2VvZiB3aW5kb3cuSW1hZ2VCaXRtYXB8fFxud2luZG93Lk9mZnNjcmVlbkNhbnZhcyYmYSBpbnN0YW5jZW9mIHdpbmRvdy5PZmZzY3JlZW5DYW52YXMpcmV0dXJuIFByb21pc2UucmVzb2x2ZShhKTtpZihhIGluc3RhbmNlb2YgSW1hZ2UpcmV0dXJuIGUuX2F3YWl0SW1hZ2VMb2FkKGEpLnRoZW4oKCk9PmEpO2lmKGEgaW5zdGFuY2VvZiBGaWxlfHxhIGluc3RhbmNlb2YgVVJMfHxcInN0cmluZ1wiPT09dHlwZW9mIGEpe2xldCBjPW5ldyBJbWFnZTtjLnNyYz1hIGluc3RhbmNlb2YgRmlsZT9VUkwuY3JlYXRlT2JqZWN0VVJMKGEpOmE7cmV0dXJuIGUuX2F3YWl0SW1hZ2VMb2FkKGMpLnRoZW4oKCk9PnthIGluc3RhbmNlb2YgRmlsZSYmVVJMLnJldm9rZU9iamVjdFVSTChjLnNyYyk7cmV0dXJuIGN9KX1yZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJVbnN1cHBvcnRlZCBpbWFnZSB0eXBlLlwiKX1zdGF0aWMgX2F3YWl0SW1hZ2VMb2FkKGEpe3JldHVybiBuZXcgUHJvbWlzZSgoYyxiKT0+e2lmKGEuY29tcGxldGUmJjAhPT1hLm5hdHVyYWxXaWR0aCljKCk7XG5lbHNle2xldCBkLGY7ZD0oKT0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixkKTthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGYpO2MoKX07Zj0oKT0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixkKTthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGYpO2IoXCJJbWFnZSBsb2FkIGVycm9yXCIpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZCk7YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixmKX19KX19ZS5ERUZBVUxUX0NBTlZBU19TSVpFPTQwMDtlLldPUktFUl9QQVRIPVwicXItc2Nhbm5lci13b3JrZXIubWluLmpzXCI7ZXhwb3J0IGRlZmF1bHQgZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFyLXNjYW5uZXIubWluLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=