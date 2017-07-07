/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/22 0022.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 导航跳转
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 规则：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      1. PC端和Pad 打开新浏览器标签
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      2. Mobile iframe中切换
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * detech 功能   设备嗅探
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _router = __webpack_require__(37);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigator = function () {
    function Navigator() {
        _classCallCheck(this, Navigator);
    }

    _createClass(Navigator, null, [{
        key: "detech",
        value: function detech() {
            this.isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig);
            return this.isMobile;
        }
    }, {
        key: "open",
        value: function open(page, hash) {
            var url = _router2.default[page];
            hash && (hash = "#" + hash);
            if (typeof this.isMobile !== "undefined" && this.isMobile || typeof this.isMobile === "undefined" && this.detech()) {
                //Todo mobile
                var iframe = document.querySelector("iframe");
                iframe.src = url + hash || "";
            } else {
                // Todo PC
                window.open(url + (hash || ""), "_blank");
            }
        }
    }, {
        key: "getHtml",
        value: function getHtml(page) {
            return _router2.default[page];
        }
    }, {
        key: "isExist",
        value: function isExist(pageName) {
            return _router2.default[pageName];
        }
    }, {
        key: "toLogin",
        value: function toLogin() {
            location.replace("./" + _router2.default.login);
        }
    }]);

    return Navigator;
}();

exports.default = Navigator;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
	"name": "router-manage",
	"version": "1.0.0",
	"index": "index.html",
	"login": "login.html",
	"angularCompute": "angular.html",
	"CustomerManage": "register.html",
	"TalentCertification.html": "talentRegister.html"
};

/***/ })

/******/ });