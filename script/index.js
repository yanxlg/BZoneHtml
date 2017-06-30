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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(3);
var runtime = Object.create(detectNode ? global : window);
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yanxlg on 2017/5/26 0026.
 * 立即执行动画
 */
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    setTimeout(function () {
        callback.call(undefined);
    }, 6000 / 100);
};
var transition = function transition(callback) {
    setTimeout(function () {
        requestAnimationFrame(callback);
    }, 0);
};

var transitionEnd = function () {
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };
    for (var name in transEndEventNames) {
        if (typeof document.body.style[name] === "string") {
            return transEndEventNames[name];
        }
    }
}();

exports.requestAnimationFrame = requestAnimationFrame;
exports.transition = transition;
exports.transitionEnd = transitionEnd;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/18 0018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fit 位置   高度调整为最佳高度，不是居中，可以控制为居中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  dialog 叠加显示   需要控制z-index
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * params
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      size  大小 默认为lg  sm  full
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      width  宽度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      height 高度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      title 标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showHeader 通过该字段来控制是否显示标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      icon 对话框标题图标    主题图标
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      position 位置   fit or center                   js控制   参数设置位置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      backdrop  遮罩背景
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      modal  模态非模态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      keyboard esc关闭对话框 默认为true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      moveable  是否可拖动  默认为false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      content 内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showFooter 是否显示底部
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      footerBtn  Array[{text:"",themeCss:""}]  底部按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * issues: moveable 没有控制在header中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 使用Set管理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dialog = __webpack_require__(12);

var _dialog2 = _interopRequireDefault(_dialog);

var _cfIdGenerator = __webpack_require__(4);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(5);

var _cfDrag = __webpack_require__(10);

var _cfDrag2 = _interopRequireDefault(_cfDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dialogMap = new Map();
var DIALOG_DEFAULT_OPTION = {
    size: "normal",
    width: "",
    height: "",
    title: "",
    showHeader: true,
    icon: "",
    position: "fit",
    backdrop: true,
    modal: false,
    keyboard: true,
    moveable: true,
    content: "<p>这是Dialog默认内容，需要使用其他内容来替换</p>",
    showFooter: true,
    footerBtn: false
};

var Dialog = function () {
    function Dialog(options) {
        _classCallCheck(this, Dialog);

        options = options || {};
        this.size = options.size || DIALOG_DEFAULT_OPTION.size;
        this.width = options.width || DIALOG_DEFAULT_OPTION.width;
        this.height = options.height || DIALOG_DEFAULT_OPTION.height;
        this.title = options.title || DIALOG_DEFAULT_OPTION.title;
        this.showHeader = options.showHeader || DIALOG_DEFAULT_OPTION.showHeader;
        this.icon = options.icon || DIALOG_DEFAULT_OPTION.icon;
        this.position = options.position || DIALOG_DEFAULT_OPTION.position;
        this.backdrop = options.backdrop || DIALOG_DEFAULT_OPTION.backdrop;
        this.modal = options.modal || DIALOG_DEFAULT_OPTION.modal;
        this.keyboard = options.keyboard || DIALOG_DEFAULT_OPTION.keyboard;
        this.moveable = typeof options.moveable !== "undefined" ? options.moveable : DIALOG_DEFAULT_OPTION.moveable;
        this.content = options.content || DIALOG_DEFAULT_OPTION.content;
        this.showFooter = options.content || DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn = options.footerBtn || DIALOG_DEFAULT_OPTION.footerBtn;
        this.id = _cfIdGenerator2.default.uuid();
        this.create().show();
        dialogMap.set(this.id, this);
    }

    _createClass(Dialog, [{
        key: 'create',
        value: function create() {
            var _this = this;
            this._element = $((0, _dialog2.default)({
                size: this.size,
                width: this.width,
                height: this.height,
                title: this.title,
                showHeader: this.showHeader,
                icon: this.icon,
                position: this.position,
                backdrop: this.backdrop,
                content: this.content,
                showFooter: this.showFooter,
                footerBtn: this.footerBtn,
                moveable: this.moveable,
                id: this.id
            }));
            if (!this.modal) {
                this._element[0].onclick = function (event) {
                    var target = event.srcElement || event.target;
                    if (target.className.search(/modal/gi) >= 0) {
                        //关闭当前dialog
                        _this.close();
                    }
                };
            }
            if (this.keyboard) {
                //键盘esc按键关闭
                $(window).on("keydown." + this.id, function (e) {
                    var code = e.keyCode || e.which;
                    if (code === 27) {
                        _this.close();
                    }
                });
            }
            this.initMove();
            this.initEvent();
            return this;
        }
    }, {
        key: 'initPos',
        value: function initPos() {
            //position设置
            var _h = $(this._element[0]).find(".dialog").outerHeight();
            var win_h = window.screen.availHeight;
            var half = Math.max(0, (win_h - _h) / 2),
                top = void 0;
            switch (this.position) {
                case "fit":
                    //中间偏上
                    top = half * 2 / 3;
                    break;
                case "center":
                    top = half;
                    break;
                case "top":
                    top = 4;
                    break;
                case "bottom":
                    top = win_h - _h - 4;
                    break;
                case parseInt(this.position):
                    //数字
                    top = parseInt(this.position);
                    break;
                default:
                    top = half * 2 / 3;
                    break;
            }
            //full 则top=0;
            if (this.size === "full") {
                top = 0;
            }
            $(this._element[0]).find(".dialog").css({
                "margin-top": top + "px"
            });
        }
    }, {
        key: 'initMove',
        value: function initMove() {
            if (this.moveable) {
                this.dragInstance = new _cfDrag2.default($(this._element[0]).find(".dialog")[0], {
                    container: $(this._element[0]),
                    handle: '.dialog-header',
                    before: function before() {
                        $(this._element[0]).find(".dialog").css('position', 'absolute');
                    },
                    finish: function finish(e) {}
                });
            }
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this = this;
            $(this._element[0]).on("click", "[data-operation]", function () {
                var operation = $(this).attr("data-operation");
                if (operation === "cancel") _this.close();
                _this.callback && _this.callback.call(_this, 'operation_' + operation);
            });
            $(this._element[0]).on("click", ".icon-close", function () {
                _this.close();
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _this = this;
            $("body").append(this._element);
            this.initPos();
            (0, _cfTransition.transition)(function () {
                _this._element.addClass("in");
            });
            return this;
        }
    }, {
        key: 'close',
        value: function close() {
            var _this = this;
            (0, _cfTransition.transition)(function () {
                _this.callback && _this.callback.call(_this, "closeStart");
                _this._element.removeClass("in").on(_cfTransition.transitionEnd, function () {
                    _this._element.remove();
                    $(window).off("keydown." + _this.id);
                    if (_this.dragInstance) {
                        _this.dragInstance.destroy();
                    }
                    _this.callback && _this.callback.call(_this, "closeEnd");
                    _this.destroy();
                });
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            dialogMap.delete(this.id);
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'getID',
        value: function getID() {
            return this.id;
        }
    }, {
        key: 'getByID',
        value: function getByID( /*Number*/id) {
            return dialogMap.get(id);
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            return this._element.find(".dialog-content");
        }
    }]);

    return Dialog;
}();

var dialog = function dialog(options) {
    return new Dialog(options);
};

window.alert = function (msg, title) {
    title = title || "懂老板";
    return dialog({
        title: title,
        content: msg,
        modal: false
    }).then(function () {
        this.close();
    });
};
exports.default = dialog;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/5 0005.
 * slide插件
 * 需要动态计算展开的大小
 */
var Slide = function () {
    function Slide() {
        _classCallCheck(this, Slide);
    }

    _createClass(Slide, null, [{
        key: "slideDown",
        value: function slideDown(el) {
            var child = el.children(),
                offH = 0;
            $.each(child, function (i, ch) {
                offH += ch.offsetHeight; //可能更新 不及时，需要从css中读取
            });
            el.css({
                height: offH + "px"
            });
            return offH;
        }
    }, {
        key: "slide",
        value: function slide(el, delY) {
            //增量处理
            var offH = el[0].offsetHeight;
            el.css({
                height: offH + delY + "px"
            });
            return offH + delY;
        }
    }, {
        key: "slideUp",
        value: function slideUp(el) {
            var child = el.children(),
                offH = 0;
            $.each(child, function (i, ch) {
                offH += ch.offsetHeight; //可能更新 不及时，需要从css中读取
            });
            el.css({
                height: 0
            });
            return offH;
        }
    }]);

    return Slide;
}();

exports.default = Slide;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Require Promise
 * Created by yanxlg on 2017/5/22 0022.
 * 本地存储，包括持久与临时
 * 不同页面存在不同的空间，接入存储时间控制，在get与set的时候会检查存储时间来清理一次
 * location.href 替换成 location.pathname
 * storage事件在当前页面不会广播，调整为当前页面也能接收到广播
 */
var storage = window.localStorage;
var sessionCache = window.sessionStorage;

var encode = function encode(text) {
    var length = text.length,
        c = String.fromCharCode(text.charCodeAt(0) + length);
    for (var i = 1; i < length; i++) {
        c += String.fromCharCode(text.charCodeAt(i) + text.charCodeAt(i - 1));
    }
    return escape(c);
    // return encodeURI(encodeURIComponent(encodeURI(text)));
};
var decode = function decode(text) {
    text = unescape(text);
    var length = text.length,
        c = String.fromCharCode(text.charCodeAt(0) - length);
    for (var i = 1; i < length; i++) {
        c += String.fromCharCode(text.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
    // return decodeURI(decodeURIComponent(decodeURI(text)));
};
/****
 * 保存体构造器
 */

var Data = function () {
    function Data(val, time) {
        _classCallCheck(this, Data);

        this._data = JSON.stringify({
            _val: val,
            _create: new Date().getTime() / 1000,
            _save: time ? time : -1
        });
    }

    _createClass(Data, [{
        key: "getString",
        value: function getString() {
            return this._data;
        }
    }]);

    return Data;
}();

var Key = function () {
    function Key(key) {
        _classCallCheck(this, Key);

        this._data = JSON.stringify({
            _key: key
        });
    }

    _createClass(Key, [{
        key: "getString",
        value: function getString() {
            return this._data;
        }
    }]);

    return Key;
}();

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);
    }

    _createClass(Store, null, [{
        key: "set",
        value: function set(key, val, time) {
            //检查是否过去，页面单实例处理
            //通过url来区别不容的页面
            //time 保存时间，以s为单位
            var $key = encode(new Key(key).getString());
            var $val = encode(new Data(val, time).getString());
            storage.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this = this;

            //获取当前页面的值
            var $key = encode(new Key(key).getString());
            var $data = storage.getItem($key);
            return !$data ? function () {
                return null;
            }() : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this.isOverduce($data)) {
                    storage.removeItem($key);
                    return null;
                } else {
                    return $data._val;
                }
            }();
        }
    }, {
        key: "isOverduce",
        value: function isOverduce(val) {
            var _save = val._save;
            return _save === -1 ? false : function () {
                var _create = val._create;
                return new Date().getTime() / 1000 - _create >= _save;
            };
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var $key = encode(new Key(key).getString());
            storage.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator().then(function (key, val, $page, $key) {
                if ($page === page) {
                    storage.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            storage.clear();
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return storage.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!storage;
        }
    }, {
        key: "iterator",
        value: function iterator() {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            return new Promise(function (resolve) {
                for (var i = 0, len = storage.length; i < len; i++) {
                    var $key = storage.key(i);
                    var $keyObj = JSON.parse($key);
                    var $value = storage.getItem($key);
                    var $valObj = JSON.parse($value);
                    if ($this.isOverduce($valObj)) {
                        storage.removeItem($key);
                    } else {
                        resolve($this, $keyObj._key, $valObj._val, $keyObj._url, $key);
                        // callback.call($this,$keyObj._key,$valObj._val,$keyObj._url,$key);
                    }
                }
            });
        }
    }]);

    return Store;
}();

var Session = function () {
    function Session() {
        _classCallCheck(this, Session);
    }

    _createClass(Session, null, [{
        key: "set",
        value: function set(key, val, time) {
            //检查是否过去，页面单实例处理
            //通过url来区别不容的页面
            //time 保存时间，以s为单位
            var $key = encode(new Key(key).getString());
            var $val = encode(new Data(val, time).getString());
            sessionCache.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this2 = this;

            //获取当前页面的值
            var $key = encode(new Key(key).getString());
            var $data = sessionCache.getItem($key);
            return !$data ? function () {
                return null;
            }() : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this2.isOverduce($data)) {
                    sessionCache.removeItem($key);
                    return null;
                } else {
                    return $data._val;
                }
            }();
        }
    }, {
        key: "isOverduce",
        value: function isOverduce(val) {
            var _save = val._save;
            return _save === -1 ? false : function () {
                var _create = val._create;
                return new Date().getTime() / 1000 - _create >= _save;
            };
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var $key = encode(new Key(key).getString());
            sessionCache.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator(function (key, val, $page, $key) {
                if ($page === page) {
                    sessionCache.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            sessionCache.clear();
        }
    }, {
        key: "getLength",
        value: function getLength() {
            return sessionCache.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!sessionCache;
        }
    }, {
        key: "iterator",
        value: function iterator(callback) {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            callback && function () {
                for (var i = 0, len = sessionCache.length; i < len; i++) {
                    var $key = sessionCache.key(i);
                    var $keyObj = JSON.parse(decode($key));
                    var $value = sessionCache.getItem($key);
                    var $valObj = JSON.parse(decode($value));
                    if ($this.isOverduce($valObj)) {
                        sessionCache.removeItem($key);
                    } else {
                        callback.call($this, $keyObj._key, $valObj._val, $keyObj._url, $key);
                    }
                }
            }();
        }
    }]);

    return Session;
}();

exports.store = Store;
exports.session = Session;
exports.encode = encode;
exports.decode = decode;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/2 0002.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 导航菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * options 支持参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * left：菜单header的icon显示在左侧
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 菜单循环嵌套,一个菜单项是一个object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * menus:[{pMenu:{},menuList:[{groupName:"",menus:[]},{},{}]},{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 分组信息 group menus:{groupName:"",menus:[]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 一组菜单：[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 支持三层结构
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  data:obj
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  childMenus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      groupName:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      menus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           data:obj,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           childMenus:[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 打开的时候收起其他的
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navPop = __webpack_require__(14);

var _navPop2 = _interopRequireDefault(_navPop);

var _slide = __webpack_require__(7);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopMenu = function () {
    function PopMenu(menus, left) {
        _classCallCheck(this, PopMenu);

        this.menus = menus;
        this.left = left || false;
        this.create();
        this.initLife();
    }

    _createClass(PopMenu, [{
        key: 'getType',
        value: function getType() {
            return "PopMenu";
        }
    }, {
        key: 'create',
        value: function create() {
            this.menusRender = $((0, _navPop2.default)({
                menus: this.menus,
                left: this.left
            }));
            $("body").addClass("width-nav-pop").append(this.menusRender);
        }
    }, {
        key: 'initLife',
        value: function initLife() {
            var _this = this;
            this.menusRender.on("click", ".nav-menu", function () {
                var $this = $(this);
                if ($this.next().hasClass("slide")) {
                    if ($this.next().hasClass("open")) {
                        $this.removeClass("open").next().removeClass("open");
                        var addH = _slide2.default.slideUp($this.next());
                        var parentSlide = $this.parents(".slide");
                        $.each(parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), -addH);
                        });
                    } else {
                        //这样会造成父级元素高度变化
                        //fix it
                        //需要关闭其他父级菜单中已经打开的
                        var others = $this.parent().siblings(); //li元素
                        $.each(others, function (i, li) {
                            var slide = $(li).children(".slide");
                            if (slide.hasClass("open")) {
                                slide.removeClass("open").prev().removeClass("open");
                                _slide2.default.slideUp(slide);
                                //关闭子的
                                var childSlide = slide.find(".slide");
                                $.each(childSlide, function (i, mSlide) {
                                    $(mSlide).removeClass("open").prev().removeClass("open");
                                    _slide2.default.slideUp($(mSlide));
                                });
                            }
                        });
                        $this.addClass("open").next().addClass("open");
                        var _addH = _slide2.default.slideDown($this.next());
                        var _parentSlide = $this.parents(".slide");
                        $.each(_parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), _addH);
                        });
                    }
                } else {
                    $(".nav-active").removeClass("nav-active");
                    $(".nav-menu.active").removeClass("active");
                    //...添加样式
                    $(".nav-icon-menu").addClass("nav-active");
                    $this.addClass("nav-active");
                    var data = $this.attr("data-data");
                    _this.callback && _this.callback.call(_this, data);
                    _this.close();
                }
            });
            this.menusRender.on("click", ".nav-icon-menu", function () {
                _this.show();
            });
            this.menusRender.on("click", ".modal-backdrop", function () {
                _this.close();
            });
            $(window).on("scroll.pop", function () {
                _this.updateBg();
            });
        }
    }, {
        key: 'updateBg',
        value: function updateBg() {
            if (!this.bg) {
                var bgColor = this.menusRender.find(".nav-header").css("background-color");
                //正则解析出三段int值
                this.bg = bgColor.match(/\d+/g);
            }
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var opacity = 1 - Math.round(scrolltop / 100) / 10; //背景调整
            this.menusRender.find(".nav-header").css({
                "background-color": 'rgba(' + this.bg[0] + ',' + this.bg[1] + ',' + this.bg[2] + ',' + opacity + ')'
            });
        }
    }, {
        key: 'show',
        value: function show() {
            this.menusRender.find(".nav-pop").addClass("show");
            this.menusRender.find(".modal-backdrop").addClass("in");
        }
    }, {
        key: 'close',
        value: function close() {
            this.menusRender.find(".nav-pop").removeClass("show");
            this.menusRender.find(".modal-backdrop").removeClass("in");
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.menusRender.remove();
            $("body").removeClass("width-nav-pop");
            $(window).off("scroll.pop");
        }
    }]);

    return PopMenu;
}();

exports.default = PopMenu;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/27 0027.
 * drag 拖动
 */

var DRAG_DEFAULT = {
    container: 'body',
    move: true
};
var idIncrementer = 0;

var Drag = function () {
    function Drag(element, options) {
        _classCallCheck(this, Drag);

        this.options = {
            container: options.container || DRAG_DEFAULT.container,
            move: options.move || DRAG_DEFAULT.move
        };
        this.id = idIncrementer++;
        this.$ = $(element);
        this.init();
    }

    _createClass(Drag, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var that = this,
                $root = that.$,
                BEFORE = 'before',
                DRAG = 'drag',
                FINISH = 'finish',
                eventSuffix = '.' + that.id,
                mouseDownEvent = 'mousedown' + eventSuffix,
                mouseUpEvent = 'mouseup' + eventSuffix,
                mouseMoveEvent = 'mousemove' + eventSuffix,
                setting = that.options,
                selector = setting.selector,
                handle = setting.handle,
                $ele = $root,
                startPos = void 0,
                cPos = void 0,
                startOffset = void 0,
                mousePos = void 0,
                moved = void 0;

            var mouseMove = function mouseMove(event) {
                var mX = event.pageX,
                    mY = event.pageY;
                moved = true;
                var dragPos = {
                    left: mX - startOffset.x,
                    top: mY - startOffset.y,
                    position: "absolute",
                    "margin-top": 0
                };
                $ele.removeClass('drag-ready').addClass('dragging');
                if (setting.move) {
                    $ele.css(dragPos);
                }
                setting[DRAG] && setting[DRAG]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: dragPos,
                    offset: {
                        x: mX - startPos.x,
                        y: mY - startPos.y
                    },
                    smallOffset: {
                        x: mX - mousePos.x,
                        y: mY - mousePos.y
                    }
                });
                mousePos.x = mX;
                mousePos.y = mY;
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseUp = function mouseUp(event) {
                $(document).off(eventSuffix);
                if (!moved) {
                    $ele.removeClass('drag-ready');
                    return;
                }
                var endPos = {
                    left: event.pageX - startOffset.x,
                    top: event.pageY - startOffset.y
                };
                $ele.removeClass('drag-ready dragging');
                if (setting.move) {
                    $ele.css(endPos);
                }
                setting[FINISH] && setting[FINISH]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: endPos,
                    offset: {
                        x: event.pageX - startPos.x,
                        y: event.pageY - startPos.y
                    },
                    smallOffset: {
                        x: event.pageX - mousePos.x,
                        y: event.pageY - mousePos.y
                    }
                });
                event.preventDefault();
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseDown = function mouseDown(event) {
                var $mouseDownEle = $(_this);
                if (selector) {
                    $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
                }
                if (setting[BEFORE]) {
                    var isSure = setting[BEFORE]({
                        event: event,
                        element: $ele
                    });
                    if (isSure === false) return;
                }

                var $container = $(setting.container),
                    pos = $ele.offset();
                cPos = $container.offset();
                startPos = {
                    x: event.pageX,
                    y: event.pageY
                };
                startOffset = {
                    x: event.pageX - pos.left + cPos.left,
                    y: event.pageY - pos.top + cPos.top
                };
                mousePos = $.extend({}, startPos);
                moved = false;

                $ele.addClass('drag-ready');
                event.preventDefault();

                if (setting.stopPropagation) {
                    event.stopPropagation();
                }

                $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
            };

            if (handle) {
                $root.on(mouseDownEvent, handle, mouseDown);
            } else if (selector) {
                $root.on(mouseDownEvent, selector, mouseDown);
            } else {
                $root.on(mouseDownEvent, mouseDown);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var eventSuffix = '.' + this.id;
            this.$.off(eventSuffix);
            $(document).off(eventSuffix);
        }
    }]);

    return Drag;
}();

exports.default = Drag;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"AppType": 4,
	"ApiType": "1",
	"AppVersion": "1.3.5",
	"ApiVersion": "1.3.5",
	"webApiDomain": "http://10.40.5.30:8081",
	"successCode": 0,
	"errorCode": -1,
	"overdueCode": 10040,
	"userLocalKey": "_user",
	"angularWeb": "http://10.40.5.30:8081/BZone/index.html"
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, id = $data.id, size = $data.size, width = $data.width, height = $data.height, showHeader = $data.showHeader, moveable = $data.moveable, icon = $data.icon, title = $data.title, content = $data.content, showFooter = $data.showFooter, footerBtn = $data.footerBtn, $each = $imports.$each, btn = $data.btn, i = $data.i, backdrop = $data.backdrop;
    $$out += '<div class="modal fade" data-dialog-id="';
    $$out += $escape(id);
    $$out += '">\r\n    <div class="dialog ';
    $$out += $escape(size);
    $$out += '" style="width:';
    $$out += $escape(width ? width + 'px' : '90%');
    $$out += ';height:';
    $$out += $escape(height ? height + 'px' : 'auto');
    $$out += ';">\r\n        ';
    if (showHeader) {
        $$out += '\r\n            <div class="dialog-header ';
        $$out += $escape(moveable ? 'dialog-moveable' : '');
        $$out += '">\r\n                ';
        if (icon) {
            $$out += '\r\n                    <div class="dialog-icon ';
            $$out += $escape(icon);
            $$out += '"></div>\r\n                ';
        }
        $$out += '\r\n                <div class="dialog-title">\r\n                    ';
        $$out += $escape(title);
        $$out += '\r\n                </div>\r\n                <div class="dialog-close icon-close"></div>\r\n            </div>\r\n        ';
    }
    $$out += '\r\n        <div class="dialog-content">\r\n            ';
    $$out += content;
    $$out += '\r\n        </div>\r\n        ';
    if (showFooter) {
        $$out += '\r\n            <div class="dialog-footer">\r\n                ';
        if (!footerBtn) {
            $$out += '\r\n                    <button data-operation="cancel" class="btn">取消</button>\r\n                    <button data-operation="ok" class="btn btn-primary">确定</button>\r\n                ';
        } else {
            $$out += '\r\n                    ';
            $each(footerBtn, function (btn, i) {
                $$out += '\r\n                        <button data-operation="cusBtn';
                $$out += $escape(i);
                $$out += '" class="btn ';
                $$out += $escape(btn.themeCss);
                $$out += '">';
                $$out += $escape(btn.text);
                $$out += '</button>\r\n                    ';
            });
            $$out += '\r\n                ';
        }
        $$out += '\r\n            </div>\r\n        ';
    }
    $$out += '\r\n    </div>\r\n</div>\r\n';
    if (backdrop) {
        $$out += '\r\n    <div class="modal-backdrop fade" data-for="dialog_id_';
        $$out += $escape(id);
        $$out += '"></div>\r\n';
    }
    return $$out;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/20 0020.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * user信息管理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * key: _user
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 加入缓存机制，页面不刷新不会重新获取
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _store = __webpack_require__(8);

var _static = __webpack_require__(11);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var USER = function () {
    function USER() {
        _classCallCheck(this, USER);
    }

    _createClass(USER, null, [{
        key: 'setToken',
        value: function setToken(token) {
            var user = this.getInfo();
            user.Token = token;
            this.setInfo(user);
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            var user = this.getInfo();
            return user.Token;
        }
    }, {
        key: 'getInfo',
        value: function getInfo() {
            if (!this._user) {
                var user = _store.store.get(_static2.default.userLocalKey);
                if (user && user !== "undefined" && typeof user !== "undefined") {
                    this._user = user;
                } else {
                    this._user = {};
                }
            }
            return this._user;
        }
    }, {
        key: 'setInfo',
        value: function setInfo(user) {
            //差量更新
            var user_old = this.getInfo();
            var user_new = $.extend(true, user_old, user);
            console.log(user_new);
            _store.store.set(_static2.default.userLocalKey, user_new);
            this._user = user_new;
        }
    }, {
        key: 'cacheLogin',
        value: function cacheLogin() {
            var user = this.getInfo();
            user.cache = true;
            this.setInfo(user);
        }
    }, {
        key: 'removeCache',
        value: function removeCache() {
            var user = this.getInfo();
            user.cache = false;
            this.setInfo(user);
        }
    }, {
        key: 'isCached',
        value: function isCached() {
            var user = this.getInfo();
            return user.cache;
        }
    }]);

    return USER;
}();

exports.default = USER;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, left = $data.left, $each = $imports.$each, menus = $data.menus, menu = $data.menu, $index = $data.$index, childMenu = $data.childMenu, subMenu = $data.subMenu, lastMenu = $data.lastMenu, item = $data.item;
    $$out += '<div class="nav nav-pop">\r\n    <div class="nav-header">\r\n        <i class="nav-icon-menu ';
    $$out += $escape(left ? 'left' : '');
    $$out += '"></i>\r\n    </div>\r\n    <div class="modal-backdrop fade"></div>\r\n    <ul class="nav-pop">\r\n        ';
    $each(menus, function (menu, $index) {
        $$out += '\r\n        <li>\r\n            <div class="nav-menu" data-data="';
        $$out += $escape(menu.data);
        $$out += '">';
        $$out += $escape(menu.name);
        $$out += '</div>\r\n            ';
        if (menu.childMenus && menu.childMenus.length > 0) {
            $$out += '\r\n            <ul class="slide">\r\n                ';
            $each(menu.childMenus, function (childMenu, $index) {
                $$out += '\r\n                ';
                if (childMenu.groupName) {
                    $$out += '\r\n                <div class="nav-group">';
                    $$out += $escape(childMenu.groupName);
                    $$out += '</div>\r\n                ';
                }
                $$out += '\r\n                ';
                $each(childMenu.menus, function (subMenu, $index) {
                    $$out += '\r\n                <li>\r\n                    <div class="nav-menu" data-data="';
                    $$out += $escape(subMenu.data);
                    $$out += '">';
                    $$out += $escape(subMenu.name);
                    $$out += '</div>\r\n                    ';
                    if (subMenu.childMenus && subMenu.childMenus.length > 0) {
                        $$out += '\r\n                    <ul class="slide">\r\n                        ';
                        $each(subMenu.childMenus, function (lastMenu, $index) {
                            $$out += '\r\n                        ';
                            if (lastMenu.groupName) {
                                $$out += '\r\n                        <div class="nav-group">';
                                $$out += $escape(lastMenu.groupName);
                                $$out += '</div>\r\n                        ';
                            }
                            $$out += '\r\n                        ';
                            $each(lastMenu.menus, function (item, $index) {
                                $$out += '\r\n                        <li>\r\n                            <div class="nav-menu" data-data="';
                                $$out += $escape(item.data);
                                $$out += '">';
                                $$out += $escape(item.name);
                                $$out += '</div>\r\n                        </li>\r\n                        ';
                            });
                            $$out += '\r\n                        ';
                        });
                        $$out += '\r\n                    </ul>\r\n                    ';
                    }
                    $$out += '\r\n                </li>\r\n                ';
                });
                $$out += '\r\n                ';
            });
            $$out += '\r\n            </ul>\r\n            ';
        }
        $$out += '\r\n        </li>\r\n        ';
    });
    $$out += '\r\n    </ul>\r\n</div>\r\n';
    return $$out;
};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/2 0002.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 导航菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 默认根据屏幕大小切换显示方式，大屏显示在左侧 中屏显示在顶部 小屏顶部折叠 右侧显示（支持左侧侧滑）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * options 支持参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * force:""  强制以某种方式显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 菜单循环嵌套,一个菜单项是一个object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * menus:[{pMenu:{},menuList:[{groupName:"",menus:[]},{},{}]},{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 分组信息 group menus:{groupName:"",menus:[]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 一组菜单：[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 支持三层结构
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  data:obj
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  childMenus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      groupName:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      menus:[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           name:"",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           data:obj,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *           childMenus:[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 打开的时候收起其他的
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navLeft = __webpack_require__(21);

var _navLeft2 = _interopRequireDefault(_navLeft);

var _slide = __webpack_require__(7);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeftMenu = function () {
    function LeftMenu(menus) {
        _classCallCheck(this, LeftMenu);

        this.menus = menus;
        this.create();
        this.initLife();
    }

    _createClass(LeftMenu, [{
        key: 'getType',
        value: function getType() {
            return "LeftMenu";
        }
    }, {
        key: 'create',
        value: function create() {
            this.menusRender = $((0, _navLeft2.default)({
                menus: this.menus
            }));
            $("body").addClass("width-nav-left").append(this.menusRender);
        }
    }, {
        key: 'initLife',
        value: function initLife() {
            var _this = this;
            this.menusRender.on("click", ".nav-menu", function () {
                var $this = $(this);
                if ($this.next().hasClass("slide")) {
                    if ($this.next().hasClass("open")) {
                        $this.removeClass("open").next().removeClass("open");
                        var addH = _slide2.default.slideUp($this.next());
                        var parentSlide = $this.parents(".slide");
                        $.each(parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), -addH);
                        });
                    } else {
                        //这样会造成父级元素高度变化
                        //fix it
                        //需要关闭其他父级菜单中已经打开的
                        var others = $this.parent().siblings(); //li元素
                        $.each(others, function (i, li) {
                            var slide = $(li).children(".slide");
                            if (slide.hasClass("open")) {
                                slide.removeClass("open").prev().removeClass("open");
                                _slide2.default.slideUp(slide);
                                //关闭子的
                                var childSlide = slide.find(".slide");
                                $.each(childSlide, function (i, mSlide) {
                                    $(mSlide).removeClass("open").prev().removeClass("open");
                                    _slide2.default.slideUp($(mSlide));
                                });
                            }
                        });
                        $this.addClass("open").next().addClass("open");
                        var _addH = _slide2.default.slideDown($this.next());
                        var _parentSlide = $this.parents(".slide");
                        $.each(_parentSlide, function (i, slide) {
                            $(slide).addClass("open").prev().addClass("open");
                            _slide2.default.slide($(slide), _addH);
                        });
                    }
                } else {
                    $(".nav-active").removeClass("nav-active");
                    $(".nav-menu.active").removeClass("active");
                    $this.addClass("nav-active");
                    var data = $this.attr("data-data");
                    _this.callback && _this.callback.call(_this, data);
                }
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.menusRender.remove();
            $("body").removeClass("width-nav-left");
        }
    }]);

    return LeftMenu;
}();

exports.default = LeftMenu;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/5 0005.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 顶部菜单
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 显示4个，其余的使用展开形式显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navTop = __webpack_require__(22);

var _navTop2 = _interopRequireDefault(_navTop);

var _navPop = __webpack_require__(9);

var _navPop2 = _interopRequireDefault(_navPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TopMenu = function () {
    function TopMenu(menus) {
        _classCallCheck(this, TopMenu);

        this.menus = menus;
        this.create();
        this.initLife();
    }

    _createClass(TopMenu, [{
        key: 'getType',
        value: function getType() {
            return "TopMenu";
        }
    }, {
        key: 'create',
        value: function create() {
            this.menusRender = $((0, _navTop2.default)({
                menus: this.menus
            }));
            if (this.menus.length > 4) {
                //创建nav-pop
                var popMenus = this.menus.slice(4);
                this.navPop = new _navPop2.default(popMenus);
            }
            $("body").addClass("width-nav-top").append(this.menusRender);
            this.updateBg();
        }
    }, {
        key: 'initLife',
        value: function initLife() {
            var $this = this;
            this.menusRender.on("mouseover", ".nav-right > li", function () {
                $(this).children(".nav-menu").addClass("hover");
            });
            this.menusRender.on("mouseout", ".nav-right > li", function () {
                $(this).children(".nav-menu").removeClass("hover");
            });
            this.menusRender.on("click", ".nav-menu", function () {
                //如果有子菜单项则不执行
                if ($(this).next().length > 0) {
                    return;
                }
                $this.menusRender.find(".active").removeClass("active");
                $(".nav-active").removeClass("nav-active");
                $(this).addClass("active").parents().prev(".nav-menu").addClass("active");
                var data = $(this).attr("data-data");
                $this.callback && $this.callback.call($this, data);
            });
            this.menusRender.on("click", ".nav-icon-menu", function () {
                $this.navPop && $this.navPop.show();
            });
            //滚动监听，当滚动到一定程度的时候背景设置为透明
            $(window).on("scroll.top", function () {
                //500像素透明
                $this.updateBg();
            });
        }
    }, {
        key: 'updateBg',
        value: function updateBg() {
            if (!this.bg) {
                var bgColor = this.menusRender.css("background-color");
                //正则解析出三段int值
                this.bg = bgColor.match(/\d+/g);
            }
            var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            var opacity = 1 - Math.round(scrolltop / 100) / 10; //背景调整
            this.menusRender.css({
                "background-color": 'rgba(' + this.bg[0] + ',' + this.bg[1] + ',' + this.bg[2] + ',' + opacity + ')'
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.menusRender.remove();
            $("body").removeClass("width-nav-top");
            $(window).off("scroll.top");
            if (this.navPop) {
                this.navPop.destroy();
            }
        }
    }]);

    return TopMenu;
}();

exports.default = TopMenu;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, menus = $data.menus, menu = $data.menu, $index = $data.$index, $escape = $imports.$escape, childMenu = $data.childMenu, subMenu = $data.subMenu, lastMenu = $data.lastMenu, item = $data.item;
    $$out += '<ul class="nav nav-left">\r\n    ';
    $each(menus, function (menu, $index) {
        $$out += '\r\n        <li>\r\n            <div class="nav-menu" data-data="';
        $$out += $escape(menu.data);
        $$out += '">';
        $$out += $escape(menu.name);
        $$out += '</div>\r\n            ';
        if (menu.childMenus && menu.childMenus.length > 0) {
            $$out += '\r\n                <ul class="slide">\r\n                    ';
            $each(menu.childMenus, function (childMenu, $index) {
                $$out += '\r\n                        ';
                if (childMenu.groupName) {
                    $$out += '\r\n                            <div class="nav-group">';
                    $$out += $escape(childMenu.groupName);
                    $$out += '</div>\r\n                        ';
                }
                $$out += '\r\n                        ';
                $each(childMenu.menus, function (subMenu, $index) {
                    $$out += '\r\n                            <li>\r\n                                <div class="nav-menu" data-data="';
                    $$out += $escape(subMenu.data);
                    $$out += '">';
                    $$out += $escape(subMenu.name);
                    $$out += '</div>\r\n                                ';
                    if (subMenu.childMenus && subMenu.childMenus.length > 0) {
                        $$out += '\r\n                                    <ul class="slide">\r\n                                        ';
                        $each(subMenu.childMenus, function (lastMenu, $index) {
                            $$out += '\r\n                                            ';
                            if (lastMenu.groupName) {
                                $$out += '\r\n                                                <div class="nav-group">';
                                $$out += $escape(lastMenu.groupName);
                                $$out += '</div>\r\n                                            ';
                            }
                            $$out += '\r\n                                            ';
                            $each(lastMenu.menus, function (item, $index) {
                                $$out += '\r\n                                                <li>\r\n                                                    <div class="nav-menu" data-data="';
                                $$out += $escape(item.data);
                                $$out += '">';
                                $$out += $escape(item.name);
                                $$out += '</div>\r\n                                                </li>\r\n                                            ';
                            });
                            $$out += '\r\n                                        ';
                        });
                        $$out += '\r\n                                    </ul>\r\n                                ';
                    }
                    $$out += '\r\n                            </li>\r\n                        ';
                });
                $$out += '\r\n                    ';
            });
            $$out += '\r\n                </ul>\r\n            ';
        }
        $$out += '\r\n        </li>\r\n    ';
    });
    $$out += '\r\n</ul>';
    return $$out;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, menus = $data.menus, menu = $data.menu, index = $data.index, $escape = $imports.$escape, childMenu = $data.childMenu, $index = $data.$index, subMenu = $data.subMenu, lastMenu = $data.lastMenu, item = $data.item;
    $$out += '<div class="nav nav-top">\r\n    <ul class="nav-right">\r\n        ';
    $each(menus, function (menu, index) {
        $$out += '\r\n            <!--仅显示4个\uFF0C超出的使用隐藏方式显示-->\r\n            ';
        if (index < 4) {
            $$out += '\r\n                <li>\r\n                    <div class="nav-menu" data-data="';
            $$out += $escape(menu.data);
            $$out += '">';
            $$out += $escape(menu.name);
            $$out += '</div>\r\n                    ';
            if (menu.childMenus && menu.childMenus.length > 0) {
                $$out += '\r\n                    <ul>\r\n                        ';
                $each(menu.childMenus, function (childMenu, $index) {
                    $$out += '\r\n                        ';
                    $each(childMenu.menus, function (subMenu, $index) {
                        $$out += '\r\n                        <li>\r\n                            <div class="nav-menu" data-data="';
                        $$out += $escape(subMenu.data);
                        $$out += '">';
                        $$out += $escape(subMenu.name);
                        $$out += '</div>\r\n                            ';
                        if (subMenu.childMenus && subMenu.childMenus.length > 0) {
                            $$out += '\r\n                            <ul>\r\n                                ';
                            $each(subMenu.childMenus, function (lastMenu, $index) {
                                $$out += '\r\n                                ';
                                $each(lastMenu.menus, function (item, $index) {
                                    $$out += '\r\n                                <li>\r\n                                    <div class="nav-menu" data-data="';
                                    $$out += $escape(item.data);
                                    $$out += '">';
                                    $$out += $escape(item.name);
                                    $$out += '</div>\r\n                                </li>\r\n                                ';
                                });
                                $$out += '\r\n                                ';
                            });
                            $$out += '\r\n                            </ul>\r\n                            ';
                        }
                        $$out += '\r\n                        </li>\r\n                        ';
                    });
                    $$out += '\r\n                        ';
                });
                $$out += '\r\n                    </ul>\r\n                    ';
            }
            $$out += '\r\n                </li>\r\n            ';
        }
        $$out += '\r\n            ';
        if (index === 4) {
            $$out += '\r\n                <i class="nav-icon-menu"></i>\r\n            ';
        }
        $$out += '\r\n        ';
    });
    $$out += '\r\n    </ul>\r\n</div>';
    return $$out;
};

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/7 0007.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 根据屏幕宽度进行调整导航实例
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _navLeft = __webpack_require__(18);

var _navLeft2 = _interopRequireDefault(_navLeft);

var _navTop = __webpack_require__(19);

var _navTop2 = _interopRequireDefault(_navTop);

var _navPop = __webpack_require__(9);

var _navPop2 = _interopRequireDefault(_navPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavMenu = function () {
    function NavMenu(menus) {
        _classCallCheck(this, NavMenu);

        this.menus = menus;
        var width = document.documentElement.offsetWidth;
        if (width < 700) {
            this.instance = new _navPop2.default(menus).then(this.callback);
        } else if (width >= 700 && width < 1080) {
            this.instance = new _navTop2.default(menus).then(this.callback);
        } else {
            this.instance = new _navLeft2.default(menus).then(this.callback);
        }
        this.resize();
    }

    _createClass(NavMenu, [{
        key: 'resize',
        value: function resize() {
            var addEvent = window.addEventListener ? "addEventListener" : "attachEvent",
                $this = this;
            window[addEvent]("resize", function () {
                $this.update();
            });
            return this;
        }
    }, {
        key: 'update',
        value: function update() {
            var width = document.documentElement.offsetWidth;
            var newInstance = void 0;
            if (width < 700) {
                if (this.instance.getType() === "PopMenu") {
                    return;
                }
                this.instance.destroy();
                //销毁instance
                newInstance = new _navPop2.default(this.menus).then(this.callback);
                this.instance = newInstance;
                this.callback && this.callback.call(this, "change");
            } else if (width >= 700 && width <= 1080) {
                if (this.instance.getType() === "TopMenu") {
                    return;
                }
                this.instance.destroy();
                newInstance = new _navTop2.default(this.menus).then(this.callback);
                this.instance = newInstance;
                this.callback && this.callback.call(this, "change");
            } else {
                if (this.instance.getType() === "LeftMenu") {
                    return;
                }
                this.instance.destroy();
                newInstance = new _navLeft2.default(this.menus).then(this.callback);
                this.instance = newInstance;
                this.callback && this.callback.call(this, "change");
            }
            return this;
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            this.instance.then(callback); //初始化
        }
    }]);

    return NavMenu;
}();

exports.default = NavMenu;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
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


var _router = __webpack_require__(32);

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
    }]);

    return Navigator;
}();

exports.default = Navigator;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	"name": "router-manage",
	"version": "1.0.0",
	"index": "index.html",
	"login": "login.html",
	"angularCompute": "angular.html",
	"CustomerManage": "register.html"
};

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, userName = $data.userName;
    $$out += '<!--动态注入到页面中-->\r\n<div class="user-container">\r\n    <div class="user-center">\r\n        <div class="user-icon"></div>\r\n        <div class="user-info">\r\n            <div class="user-name">';
    $$out += $escape(userName);
    $$out += '</div>\r\n            <div class="user-action">\r\n                <a data-user-action="loginOut" href="javascript:void(0);">注销</a>\r\n                <a data-user-action="changePwd" href="javascript:void(0);">修改密码</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
    return $$out;
};

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/21 0021.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 懂老板后台管理主界面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 登入检查
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 菜单配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 如果是移动端则使用iframe嵌套，保留菜单，PC跳转到新页面去
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _user = __webpack_require__(13);

var _user2 = _interopRequireDefault(_user);

var _navmenu = __webpack_require__(26);

var _navmenu2 = _interopRequireDefault(_navmenu);

var _myCenter = __webpack_require__(51);

var _myCenter2 = _interopRequireDefault(_myCenter);

var _cfDialog = __webpack_require__(6);

var _cfDialog2 = _interopRequireDefault(_cfDialog);

var _navigator = __webpack_require__(31);

var _navigator2 = _interopRequireDefault(_navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
    function Index() {
        _classCallCheck(this, Index);
    }

    _createClass(Index, null, [{
        key: 'checkLogin',
        value: function checkLogin() {
            if (!_user2.default.getToken()) {
                location.replace("./login.html");
                return -1;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            this.checkLogin();
            this.initMenu();
            this.importMyCenter();
            this.LoginOut();
        }
    }, {
        key: 'initMenu',
        value: function initMenu() {
            var menus = _user2.default.getInfo().ModuleInfo;
            //参数改造
            var menuList = [];
            menus.forEach(function (module) {
                if (module.ModuleInfo) {
                    var pMenu = {
                        name: module.ModuleInfo.Module.ModuleName,
                        data: ""
                    },
                        childMenus = [],
                        childMenuMap = module.ModuleInfo.Menu;
                    if (childMenuMap && childMenuMap.length > 0) {
                        if (childMenuMap.length === 1 && childMenuMap[0].MenuName === module.ModuleInfo.Module.ModuleName) {
                            pMenu.data = childMenuMap[0];
                        } else {
                            childMenuMap.forEach(function (item) {
                                childMenus.push({
                                    name: item.MenuName,
                                    data: item
                                });
                            });
                        }
                    }
                    if (childMenus.length > 0) {
                        pMenu.childMenus = [{
                            menus: childMenus
                        }];
                    }
                    menuList.push(pMenu);
                }
            });
            var _this = this;
            this.nav = new _navmenu2.default(menuList).then(function (data) {
                if (data === "change") {
                    //Todo 窗口resize处理
                    _this.importMyCenter();
                } else {
                    //Todo 菜单点击事件处理
                    var menuDate = JSON.parse(data);
                    if (_navigator2.default.isExist(menuDate.NavigateUrl)) {
                        _navigator2.default.open(menuDate.NavigateUrl);
                    } else {
                        _navigator2.default.open("angularCompute", menuDate.NavigateUrl);
                    }
                }
            });
            $("body").on("click", ".nav-top .user-name", function () {
                $(this).addClass("hover");
            });
        }
    }, {
        key: 'importMyCenter',
        value: function importMyCenter() {
            //注入个人中心模块 先后顺序进行控制 ==> fix top 存在两种nav的时候
            var userCenter = $((0, _myCenter2.default)({
                userName: _user2.default.getInfo().User.UserName
            }));
            if ($(".nav.nav-left").length > 0) {
                $(".nav.nav-left").prepend(userCenter).addClass("nav-animation");
            } else if ($(".nav.nav-top").length > 0) {
                $(".nav.nav-top").prepend(userCenter).addClass("nav-animation");
            } else if ($(".nav.nav-pop").length > 0) {
                $(".nav.nav-pop").prepend(userCenter).addClass("nav-animation");
            }
        }
    }, {
        key: 'LoginOut',
        value: function LoginOut() {
            $("body").on("click", '[data-user-action="loginOut"]', function () {
                alert("退出当前登录用户？").then(function (option) {
                    if (/\S+ok$/.test(option)) {
                        //退出登录
                    }
                });
            });
        }
    }]);

    return Index;
}();

Index.init();

/***/ })
/******/ ]);