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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/26 0026.
 * id 生成序列
 */
var lastUuidAmend = 0;

var IDGenerator = function () {
    function IDGenerator() {
        _classCallCheck(this, IDGenerator);
    }

    _createClass(IDGenerator, null, [{
        key: "uuid",
        value: function uuid() {
            return new Date().getTime() * 1000 + lastUuidAmend++ % 1000;
        }
    }]);

    return IDGenerator;
}();

exports.default = IDGenerator;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/27 0027.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _cfIdGenerator = __webpack_require__(4);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectMap = new Map();

var SelectClass = function () {
    function SelectClass(select) {
        _classCallCheck(this, SelectClass);

        this.$ = select;
        this.id = _cfIdGenerator2.default.uuid();
        this.value = "";
        this.$.attr("data-init-id", this.id);
        //遍历当前的所有选项，获取选中的值
        var options = [];
        this.$.find(".select-options > li").each(function (i, v) {
            options.push({
                key: $(v).text(),
                value: $(v).attr("value")
            });
        });
        this.options = options;
        this.mounted();
    }

    _createClass(SelectClass, [{
        key: "mounted",
        value: function mounted() {
            var _this = this,
                input = this.$.find(".input-icon > .input");
            var key = input.val();
            if (key) {
                this.options.forEach(function (option) {
                    if (option.key === key) {
                        input.attr("data-select-val", option.value);
                        _this.$.find("li[value='" + option.value + "']").addClass("active");
                        _this.value = option.value;
                    }
                });
            }
            this.$.on("click", ".input-icon", function () {
                _this.show();
            }).on("click", ".select-options > li", function () {
                $(this).addClass("active").siblings().removeClass("active");
                var key = $(this).text(),
                    val = $(this).attr("value");
                input.val(key).attr("data-select-val", val);
                _this.$.trigger("change", val);
                _this.callback && _this.callback.call(_this, val);
                _this.value = val;
                _this.hide();
            });
            $("body").on("click." + _this.id, function (e) {
                var target = e.target || e.srcElement;
                if ($(target).parents(".select").length === 0 || $(target).parents(".select").attr("data-init-id") !== _this.id + "") {
                    _this.hide();
                }
            });
            return this;
        }
    }, {
        key: "show",
        value: function show() {
            this.$.addClass("open");
            return this;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.$.removeClass("open");
            return this;
        }
    }, {
        key: "addOptions",
        value: function addOptions( /*Array*/options) {
            var optionsHtml = [];
            options.forEach(function (option) {
                optionsHtml.push('<li value="' + option.value + '">' + option.key + '</li>');
            });
            this.$.find(".select-options").append(optionsHtml.join(""));
            this.options = this.options.concat(options);
            return this;
        }
    }, {
        key: "setOptions",
        value: function setOptions( /*Array*/options) {
            var optionsHtml = [];
            options.forEach(function (option) {
                optionsHtml.push('<li value="' + option.value + '">' + option.key + '</li>');
            });
            this.$.find(".select-options").html(optionsHtml.join(""));
            this.options = options;
            return this;
        }
    }, {
        key: "then",
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }], [{
        key: "getInstance",
        value: function getInstance(id) {
            return SelectMap.get(id);
        }
    }, {
        key: "initWithElement",
        value: function initWithElement(el) {
            return new SelectClass(el);
        }
    }, {
        key: "initialize",
        value: function initialize() {
            //遍历所有的select元素
            $(".select").each(function (i, v) {
                if (!$(v).attr("data-init-id")) {
                    var instance = new SelectClass($(v));
                    SelectMap.set(instance.id, instance);
                }
            });
        }
    }]);

    return SelectClass;
}();

exports.default = SelectClass;

/***/ })

/******/ });