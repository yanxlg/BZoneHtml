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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/27 0027.
 * input 初始化
 * 禁用中文输入法
 */

var Input = function () {
    function Input() {
        _classCallCheck(this, Input);
    }

    _createClass(Input, null, [{
        key: "initialize",
        value: function initialize() {
            $("body").on("focus", "input", function () {
                var type = $(this).attr("type");
                if (!(!type || type === "text")) {
                    $(this).attr("onpaste", "return false;");
                }
            }).on("keydown", "input", function (e) {
                var type = $(this).attr("type"),
                    key = e.key;
                switch (type) {
                    case "number":
                        return (/\d|Backspace|Left|Right/.test(key)
                        );
                    case "email":
                        return (/\d|Backspace|Left|Right|\.|\w|@/.test(key)
                        );
                    case "url":
                        return (/\d|Backspace|Left|Right|\.|\w|@|:|\//.test(key)
                        );
                    case "tel":
                        return (/\d|Backspace|Left|Right/.test(key)
                        );
                    default:
                        return true;
                }
            }).on("compositionstart", "input", function (e) {
                var type = $(this).attr("type");
                switch (type) {
                    case "number":
                        $(this).blur();
                        break;
                    case "email":
                        $(this).blur();
                        break;
                    case "url":
                        $(this).blur();
                        break;
                    case "tel":
                        $(this).blur();
                        break;
                    default:
                        break;
                }
            });
        }
    }]);

    return Input;
}();

Input.initialize();
exports.default = Input;

/***/ })

/******/ });