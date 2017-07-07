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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      customCss:自定义样式  用于控制特殊弹层
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * issues: moveable 没有控制在header中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 使用Set管理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dialog = __webpack_require__(11);

var _dialog2 = _interopRequireDefault(_dialog);

var _cfIdGenerator = __webpack_require__(4);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(6);

var _cfDrag = __webpack_require__(8);

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
    footerBtn: false,
    customCss: ""
};

var Dialog = function () {
    function Dialog(options) {
        _classCallCheck(this, Dialog);

        options = options || {};
        this.size = options.size || DIALOG_DEFAULT_OPTION.size;
        this.width = options.width || DIALOG_DEFAULT_OPTION.width;
        this.height = options.height || DIALOG_DEFAULT_OPTION.height;
        this.title = options.title || DIALOG_DEFAULT_OPTION.title;
        this.showHeader = typeof options.showHeader !== "undefined" ? options.showHeader : DIALOG_DEFAULT_OPTION.showHeader;
        this.icon = options.icon || DIALOG_DEFAULT_OPTION.icon;
        this.position = options.position || DIALOG_DEFAULT_OPTION.position;
        this.backdrop = options.backdrop || DIALOG_DEFAULT_OPTION.backdrop;
        this.modal = options.modal || DIALOG_DEFAULT_OPTION.modal;
        this.keyboard = options.keyboard || DIALOG_DEFAULT_OPTION.keyboard;
        this.moveable = typeof options.moveable !== "undefined" ? options.moveable : DIALOG_DEFAULT_OPTION.moveable;
        this.content = options.content || DIALOG_DEFAULT_OPTION.content;
        this.showFooter = typeof options.showFooter !== "undefined" ? options.showFooter : DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn = options.footerBtn || DIALOG_DEFAULT_OPTION.footerBtn;
        this.customCss = options.customCss || DIALOG_DEFAULT_OPTION.customCss;
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
                customCss: this.customCss,
                id: this.id
            }));
            this._dialog = this._element.filter(".modal");
            this._modal = this._element.filter(".modal-backdrop");
            if (!this.modal) {
                this._dialog.on("click", function (event) {
                    var target = event.srcElement || event.target;
                    if (target.className.search(/modal/gi) >= 0) {
                        //关闭当前dialog
                        _this.close();
                    }
                });
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
            var _h = this._dialog.children().outerHeight();
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
            this._dialog.children().css({
                "margin-top": top + "px"
            });
        }
    }, {
        key: 'initMove',
        value: function initMove() {
            if (this.moveable) {
                this.dragInstance = new _cfDrag2.default(this._dialog.children()[0], {
                    container: this._dialog,
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
            this._dialog.on("click", "[data-operation]", function () {
                var operation = $(this).attr("data-operation");
                if (operation === "cancel") _this.close();
                _this.callback && _this.callback.call(_this, 'operation_' + operation);
            });
            this._dialog.on("click", ".icon-close", function () {
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
            return this._dialog.find(".dialog-content");
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
/* 6 */
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
/* 7 */,
/* 8 */
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
            move: options.move || DRAG_DEFAULT.move,
            handle: options.handle
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"AppType": 4,
	"ApiType": "1",
	"AppVersion": "1.3.5",
	"ApiVersion": "1.3.5",
	"webApiDomainTest": "http://10.40.5.30:8081",
	"webApiDomainLocal": "http://localhost:5007",
	"webApiDomain": "http://localhost:5007",
	"successCode": 0,
	"errorCode": -1,
	"overdueCode": 10040,
	"userLocalKey": "_user",
	"angularWeb": "http://10.40.5.30:8081/BZone/index.html"
};

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, id = $data.id, size = $data.size, customCss = $data.customCss, width = $data.width, height = $data.height, showHeader = $data.showHeader, moveable = $data.moveable, icon = $data.icon, title = $data.title, content = $data.content, showFooter = $data.showFooter, footerBtn = $data.footerBtn, $each = $imports.$each, btn = $data.btn, i = $data.i, backdrop = $data.backdrop;
    $$out += '<div class="modal fade" data-dialog-id="';
    $$out += $escape(id);
    $$out += '">\r\n    <div class="dialog ';
    $$out += $escape(size);
    $$out += ' ';
    $$out += $escape(customCss);
    $$out += '" style="width:';
    $$out += $escape(size == 'normal' ? width ? width + 'px' : '90%' : '');
    $$out += ';height:';
    $$out += $escape(size == 'normal' ? height ? height + 'px' : 'auto' : '');
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
/* 12 */,
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 做angular兼容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _store = __webpack_require__(10);

var _static = __webpack_require__(9);

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
    }, {
        key: 'getPassword',
        value: function getPassword() {
            var user = this.getInfo();
            return user.User.Password;
        }
    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            var user = this.getInfo();
            user.User.Password = password;
            this.setInfo(user);
        }
    }, {
        key: 'getUserID',
        value: function getUserID() {
            var user = this.getInfo();
            return user.User.UserID;
        }
    }]);

    return USER;
}();

exports.default = USER;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var require;

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Promise on 2017/5/22 0022.
 */
!function (t) {
    if (t.Promise) return;
    t.Promise = function () {
        "use strict";

        function t(t) {
            return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
        }

        function e(t) {
            return "function" == typeof t;
        }

        function n(t) {
            I = t;
        }

        function r(t) {
            J = t;
        }

        function o() {
            return function () {
                return process.nextTick(a);
            };
        }

        function i() {
            return "undefined" != typeof H ? function () {
                H(a);
            } : c();
        }

        function s() {
            var t = 0,
                e = new V(a),
                n = document.createTextNode("");
            return e.observe(n, { characterData: !0 }), function () {
                n.data = t = ++t % 2;
            };
        }

        function u() {
            var t = new MessageChannel();
            return t.port1.onmessage = a, function () {
                return t.port2.postMessage(0);
            };
        }

        function c() {
            var t = setTimeout;
            return function () {
                return t(a, 1);
            };
        }

        function a() {
            for (var t = 0; t < G; t += 2) {
                var e = $[t],
                    n = $[t + 1];
                e(n), $[t] = void 0, $[t + 1] = void 0;
            }
            G = 0;
        }

        function f() {
            try {
                var t = require,
                    e = t("vertx");
                return H = e.runOnLoop || e.runOnContext, i();
            } catch (n) {
                return c();
            }
        }

        function l(t, e) {
            var n = arguments,
                r = this,
                o = new this.constructor(p);
            void 0 === o[et] && k(o);
            var i = r._state;
            return i ? !function () {
                var t = n[i - 1];
                J(function () {
                    return x(i, o, t, r._result);
                });
            }() : E(r, o, t, e), o;
        }

        function h(t) {
            var e = this;
            if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.constructor === e) return t;
            var n = new e(p);
            return g(n, t), n;
        }

        function p() {}

        function v() {
            return new TypeError("You cannot resolve a promise with itself");
        }

        function d() {
            return new TypeError("A promises callback cannot return that same promise.");
        }

        function _(t) {
            try {
                return t.then;
            } catch (e) {
                return it.error = e, it;
            }
        }

        function y(t, e, n, r) {
            try {
                t.call(e, n, r);
            } catch (o) {
                return o;
            }
        }

        function m(t, e, n) {
            J(function (t) {
                var r = !1,
                    o = y(n, e, function (n) {
                    r || (r = !0, e !== n ? g(t, n) : S(t, n));
                }, function (e) {
                    r || (r = !0, j(t, e));
                }, "Settle: " + (t._label || " unknown promise"));
                !r && o && (r = !0, j(t, o));
            }, t);
        }

        function b(t, e) {
            e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function (e) {
                return g(t, e);
            }, function (e) {
                return j(t, e);
            });
        }

        function w(t, n, r) {
            n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? (j(t, it.error), it.error = null) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n);
        }

        function g(e, n) {
            e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n);
        }

        function A(t) {
            t._onerror && t._onerror(t._result), T(t);
        }

        function S(t, e) {
            t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(T, t));
        }

        function j(t, e) {
            t._state === nt && (t._state = ot, t._result = e, J(A, t));
        }

        function E(t, e, n, r) {
            var o = t._subscribers,
                i = o.length;
            t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(T, t);
        }

        function T(t) {
            var e = t._subscribers,
                n = t._state;
            if (0 !== e.length) {
                for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) {
                    r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
                }t._subscribers.length = 0;
            }
        }

        function M() {
            this.error = null;
        }

        function P(t, e) {
            try {
                return t(e);
            } catch (n) {
                return st.error = n, st;
            }
        }

        function x(t, n, r, o) {
            var i = e(r),
                s = void 0,
                u = void 0,
                c = void 0,
                a = void 0;
            if (i) {
                if (s = P(r, o), s === st ? (a = !0, u = s.error, s.error = null) : c = !0, n === s) return void j(n, d());
            } else s = o, c = !0;
            n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s));
        }

        function C(t, e) {
            try {
                e(function (e) {
                    g(t, e);
                }, function (e) {
                    j(t, e);
                });
            } catch (n) {
                j(t, n);
            }
        }

        function O() {
            return ut++;
        }

        function k(t) {
            t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = [];
        }

        function Y(t, e) {
            this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q());
        }

        function q() {
            return new Error("Array Methods must be provided an Array");
        }

        function F(t) {
            return new Y(this, t).promise;
        }

        function D(t) {
            var e = this;
            return new e(B(t) ? function (n, r) {
                for (var o = t.length, i = 0; i < o; i++) {
                    e.resolve(t[i]).then(n, r);
                }
            } : function (t, e) {
                return e(new TypeError("You must pass an array to race."));
            });
        }

        function K(t) {
            var e = this,
                n = new e(p);
            return j(n, t), n;
        }

        function L() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }

        function N() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }

        function U(t) {
            this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N());
        }

        function W() {
            var t = void 0;
            if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
                t = Function("return this")();
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var n = t.Promise;
            if (n) {
                var r = null;
                try {
                    r = Object.prototype.toString.call(n.resolve());
                } catch (e) {}
                if ("[object Promise]" === r && !n.cast) return;
            }
            t.Promise = U;
        }

        var z = void 0;
        z = Array.isArray ? Array.isArray : function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        };
        var B = z,
            G = 0,
            H = void 0,
            I = void 0,
            J = function J(t, e) {
            $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt());
        },
            Q = "undefined" != typeof window ? window : void 0,
            R = Q || {},
            V = R.MutationObserver || R.WebKitMutationObserver,
            X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            $ = new Array(1e3),
            tt = void 0;
        tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == "function" ? f() : c();
        var et = Math.random().toString(36).substring(16),
            nt = void 0,
            rt = 1,
            ot = 2,
            it = new M(),
            st = new M(),
            ut = 0;
        return Y.prototype._enumerate = function () {
            for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++) {
                this._eachEntry(e[n], n);
            }
        }, Y.prototype._eachEntry = function (t, e) {
            var n = this._instanceConstructor,
                r = n.resolve;
            if (r === h) {
                var o = _(t);
                if (o === l && t._state !== nt) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === U) {
                    var i = new n(p);
                    w(i, t, o), this._willSettleAt(i, e);
                } else this._willSettleAt(new n(function (e) {
                    return e(t);
                }), e);
            } else this._willSettleAt(r(t), e);
        }, Y.prototype._settledAt = function (t, e, n) {
            var r = this.promise;
            r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result);
        }, Y.prototype._willSettleAt = function (t, e) {
            var n = this;
            E(t, void 0, function (t) {
                return n._settledAt(rt, e, t);
            }, function (t) {
                return n._settledAt(ot, e, t);
            });
        }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = {
            constructor: U,
            then: l,
            "catch": function _catch(t) {
                return this.then(null, t);
            }
        }, U.polyfill = W, U.Promise = U, U;
    }();
}(typeof self !== 'undefined' ? self : window);
var Promise = typeof self !== 'undefined' ? self.Promise : window.Promise;
exports.default = Promise;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/16 0016.
 * 列表操作项
 */
var ListActions = function () {
    function ListActions(grid) {
        _classCallCheck(this, ListActions);

        this.grid = grid;
        var _this = this;
        _this.update();
        $(window).on("resize", function () {
            _this.update();
        });
    }

    _createClass(ListActions, [{
        key: "bindWithGrid",
        value: function bindWithGrid() {
            var grid = this.grid;
            //绑定到grid中
            grid.on("mouseover", ".data-row", function () {
                //获取grid的宽度
                var areWidth = grid.width() + grid.find(".grid-data")[0].scrollLeft;
                var action = $(this).find(".grid-actions");
                var actionWidth = action.outerWidth();
                action.css({
                    left: areWidth + "px"
                });
                action.removeClass("hide").addClass("show").css({
                    marginLeft: -actionWidth + "px"
                });
            });
            grid.on("mouseout", ".data-row", function () {
                var action = $(this).find(".grid-actions");
                action.removeClass("show").addClass("hide").css({
                    marginLeft: "0px"
                });
            });
            return this;
        }
    }, {
        key: "bindWithMobild",
        value: function bindWithMobild() {
            var grid = this.grid;
            var startPoint = void 0,
                movePoint = void 0;
            grid.on("touchstart", ".data-row", function (e) {
                var touch = e.targetTouches[0];
                startPoint = movePoint = {
                    x: touch.screenX,
                    y: touch.screenY
                };
                if (!$(this).hasClass("touchEl")) {
                    grid.find(".touchEl").removeClass("touchEl").attr("data-delX", 0).css({
                        marginLeft: "0px"
                    }).find(".grid-actions").css({
                        marginLeft: "0px"
                    });
                    $(this).find(".grid-actions").css({
                        marginLeft: "0px"
                    });
                    $(this).addClass("touchEl").attr("data-delX", 0);
                } else {
                    $(this).addClass("touchEl");
                }
            });
            grid.on("touchmove", ".data-row", function (e) {
                if (!startPoint) return;
                var touch = e.targetTouches[0];
                var action = $(this).find(".grid-actions"),
                    actWidth = parseInt(action.outerWidth());
                if ($(this).hasClass("touchEl")) {
                    var mPoint = {
                        x: touch.screenX,
                        y: touch.screenY
                    };
                    var curr = parseInt($(this).attr("data-delX")) || 0;
                    var delX = mPoint.x - movePoint.x + curr;
                    delX = Math.max(-actWidth, delX);
                    delX = Math.min(delX, 0);
                    $(this).attr("data-delX", delX);
                    movePoint = mPoint;
                    action.css({
                        marginLeft: delX + "px"
                    });
                    $(this).css({
                        marginLeft: delX + "px"
                    });
                } else {}
            });
            grid.on("touchend touchcancel", ".data-row", function (e) {
                startPoint = null;
                var action = $(this).find(".grid-actions"),
                    actWidth = parseInt(action.outerWidth());
                var curr = parseInt($(this).attr("data-delX")) || 0;
                if (Math.abs(curr) < actWidth / 2) {
                    action.css({
                        marginLeft: "0px"
                    });
                    $(this).css({
                        marginLeft: "0px"
                    });
                } else {
                    action.css({
                        marginLeft: -actWidth + "px"
                    });
                    $(this).css({
                        marginLeft: -actWidth + "px"
                    });
                }
            });
        }
    }, {
        key: "update",
        value: function update() {
            var width = document.body.offsetWidth;
            if (parseInt(width) < 1000) {
                //移动端
                this.grid.off("mouseover");
                this.grid.off("mouseout");
                this.bindWithMobild();
            } else {
                //web端
                this.grid.off("touchstart");
                this.grid.off("touchmove");
                this.grid.off("touchend");
                this.grid.off("touchcancel");
                this.bindWithGrid();
            }
        }
    }]);

    return ListActions;
}();

exports.default = ListActions;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Promise = __webpack_require__(14);

var _Promise2 = _interopRequireDefault(_Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (self) {
    'use strict';

    if (self.fetch) {
        return;
    }

    var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && function () {
            try {
                new Blob();
                return true;
            } catch (e) {
                return false;
            }
        }(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
    };

    if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

        var isDataView = function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        };

        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
    }

    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
    }

    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = String(value);
        }
        return value;
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
        var iterator = {
            next: function next() {
                var value = items.shift();
                return { done: value === undefined, value: value };
            }
        };

        if (support.iterable) {
            iterator[Symbol.iterator] = function () {
                return iterator;
            };
        }

        return iterator;
    }

    function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
                this.append(name, value);
            }, this);
        } else if (Array.isArray(headers)) {
            headers.forEach(function (header) {
                this.append(header[0], header[1]);
            }, this);
        } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name]);
            }, this);
        }
    }

    Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ',' + value : value;
    };

    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
    };

    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
            }
        }
    };

    Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
            items.push(name);
        });
        return iteratorFor(items);
    };

    Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
            items.push(value);
        });
        return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
            items.push([name, value]);
        });
        return iteratorFor(items);
    };

    if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
        if (body.bodyUsed) {
            return _Promise2.default.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
        return new _Promise2.default(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
        });
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
    }

    function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
    }

    function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);

        for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join('');
    }

    function bufferClone(buf) {
        if (buf.slice) {
            return buf.slice(0);
        } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
        }
    }

    function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
            this._bodyInit = body;
            if (!body) {
                this._bodyText = '';
            } else if (typeof body === 'string') {
                this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
            } else {
                throw new Error('unsupported BodyInit type');
            }

            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8');
                } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                }
            }
        };

        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }

                if (this._bodyBlob) {
                    return _Promise2.default.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                    return _Promise2.default.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob');
                } else {
                    return _Promise2.default.resolve(new Blob([this._bodyText]));
                }
            };

            this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                    return consumed(this) || _Promise2.default.resolve(this._bodyArrayBuffer);
                } else {
                    return this.blob().then(readBlobAsArrayBuffer);
                }
            };
        }

        this.text = function () {
            var rejected = consumed(this);
            if (rejected) {
                return rejected;
            }

            if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                return _Promise2.default.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
            } else {
                return _Promise2.default.resolve(this._bodyText);
            }
        };

        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode);
            };
        }

        this.json = function () {
            return this.text().then(JSON.parse);
        };

        return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
        options = options || {};
        var body = options.body;

        if (input instanceof Request) {
            if (input.bodyUsed) {
                throw new TypeError('Already read');
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
                this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
            }
        } else {
            this.url = String(input);
        }

        this.credentials = options.credentials || this.credentials || 'omit';
        if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.referrer = null;

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
    }

    Request.prototype.clone = function () {
        return new Request(this, { body: this._bodyInit });
    };

    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    }

    function parseHeaders(rawHeaders) {
        var headers = new Headers();
        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
            var parts = line.split(':');
            var key = parts.shift().trim();
            if (key) {
                var value = parts.join(':').trim();
                headers.append(key, value);
            }
        });
        return headers;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
        if (!options) {
            options = {};
        }

        this.type = 'default';
        this.status = 'status' in options ? options.status : 200;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        });
    };

    Response.error = function () {
        var response = new Response(null, { status: 0, statusText: '' });
        response.type = 'error';
        return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code');
        }

        return new Response(null, { status: status, headers: { location: url } });
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
        return new _Promise2.default(function (resolve, reject) {
            var request = new Request(input, init);
            var xhr = new XMLHttpRequest();

            xhr.onload = function () {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                };
                options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
            };

            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };

            xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'));
            };

            xhr.open(request.method, request.url, true);

            if (request.credentials === 'include') {
                xhr.withCredentials = true;
            }

            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob';
            }

            request.headers.forEach(function (value, name) {
                xhr.setRequestHeader(name, value);
            });

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
    };
    self.fetch.polyfill = true;
})(window); /**
             * Promise检测
             */

var fetch = window.fetch;
exports.default = fetch;

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _arguments = arguments;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxianliang on 2017/5/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _fetch = __webpack_require__(17);

var _fetch2 = _interopRequireDefault(_fetch);

var _cfDialog = __webpack_require__(5);

var _cfDialog2 = _interopRequireDefault(_cfDialog);

var _static = __webpack_require__(9);

var _static2 = _interopRequireDefault(_static);

var _loading = __webpack_require__(21);

var _loading2 = _interopRequireDefault(_loading);

var _user = __webpack_require__(13);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var THENCLASS = function () {
    function THENCLASS() {
        _classCallCheck(this, THENCLASS);

        return this;
    }

    _createClass(THENCLASS, [{
        key: 'then',
        value: function then() {
            return this;
        }
    }]);

    return THENCLASS;
}();

var fetch = function fetch(url, data, login) {
    if (_arguments.length === 2) {
        login = true; //不设置默认为true,即需要登录
    }
    var token = _user2.default.getToken();
    if (!token) {
        var angularUser = localStorage.getItem("user");
        if (angularUser) {
            angularUser = JSON.parse(angularUser);
            token = angularUser.token;
        }
    }
    if (data) {
        if (login && !token) {
            (0, _cfDialog2.default)({
                title: "未登录提示",
                content: "请先登录后再执行该操作",
                modal: false
            }).then(function () {
                this.close();
            });
            return new THENCLASS();
        }
        _loading2.default.show();
        return _fetch2.default.call(window, _static2.default.webApiDomain + url, {
            method: 'POST',
            headers: {
                Token: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Content: data,
                Head: {
                    "AppType": _static2.default.AppType,
                    "ApiType": _static2.default.ApiType,
                    "AppVersion": _static2.default.AppVersion,
                    "ApiVersion": _static2.default.ApiVersion,
                    "Token": token
                }
            })
        }).then(function (response) {
            _loading2.default.close();
            return response.json();
        }).then(function (json) {
            if (json.Head.Ret === _static2.default.errorCode) {
                var back = {
                    ok: false,
                    msg: json.Head.Msg
                };
                if (json.Head.Code === _static2.default.overdueCode) {
                    back.overdue = true;
                }
                return back;
            }
            if (json.Head.Ret === _static2.default.successCode) {
                return {
                    ok: true,
                    data: json.Content
                };
            }
            return null;
        });
    } else {
        //get 方法
        _loading2.default.show();
        return _fetch2.default.call(window, _static2.default.webApiDomain + url, {
            method: 'GET',
            headers: {
                token: token
            }
        }).then(function (response) {
            _loading2.default.close();
            return response.json();
        }).then(function (json) {
            if (json.Head.Ret === _static2.default.errorCode) {
                var back = {
                    ok: false,
                    msg: json.Head.Msg
                };
                if (json.Head.Code === _static2.default.overdueCode) {
                    back.overdue = true;
                }
                return back;
            }
            if (json.Head.Ret === _static2.default.successCode) {
                return {
                    ok: true,
                    data: json.Content
                };
            }
            return null;
        });
    }
};
exports.default = fetch;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="loading-plugin">\r\n    <div class="modal fade in">\r\n        <div class="loading-container">\r\n            <div class="loading">\r\n                <div class="loading_0"></div>\r\n                <div class="loading_1"></div>\r\n                <div class="loading_2"></div>\r\n                <div class="loading_3"></div>\r\n                <div class="loading_4"></div>\r\n                <div class="loading_5"></div>\r\n                <div class="loading_6"></div>\r\n                <div class="loading_7"></div>\r\n                <div class="loading_8"></div>\r\n                <div class="loading_9"></div>\r\n                <div class="loading_10"></div>\r\n                <div class="loading_11"></div>\r\n                <div class="loading_12"></div>\r\n                <div class="loading_13"></div>\r\n                <div class="loading_14"></div>\r\n                <div class="loading_15"></div>\r\n                <div class="loading_16"></div>\r\n                <div class="loading_17"></div>\r\n                <div class="loading_18"></div>\r\n                <div class="loading_19"></div>\r\n                <div class="loading_20"></div>\r\n                <div class="loading_21"></div>\r\n                <div class="loading_22"></div>\r\n                <div class="loading_23"></div>\r\n                <div class="loading_24"></div>\r\n            </div>\r\n            <div class="loading-package">懂老板<span class="dot-0">.</span><span class="dot-1">.</span><span class="dot-2">.</span></div>\r\n        </div>\r\n    </div>\r\n    <div class="modal-backdrop fade in"></div>\r\n</div>';
    return $$out;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/19 0019.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 获取container的overflow属性，关闭后自动设置回去
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 使用modal进行处理
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _loading = __webpack_require__(20);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
    function Loading() {
        _classCallCheck(this, Loading);

        this.renderEle = $((0, _loading2.default)({}));
        return this;
    }

    _createClass(Loading, [{
        key: "show",
        value: function show() {
            $("body").append(this.renderEle);
            return this;
        }
    }, {
        key: "close",
        value: function close() {
            this.renderEle.remove();
            return this;
        }
    }], [{
        key: "show",
        value: function show() {
            this.close();
            return new Loading().show();
        }
    }, {
        key: "close",
        value: function close() {
            $(".loading-plugin").remove();
        }
    }]);

    return Loading;
}();

exports.default = Loading;

/***/ }),
/* 22 */,
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxianliang on 2017/6/11.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 数据列表控件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Web端使用表格显示  移动端列表显示，列表不会显示全部字段 仅显示3或4个字段，其余字段隐藏 显示规则  过滤字段
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * data-row 控制行
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * data-index 控制列
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fixed 表示固定的列
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 表头固定，内容高度自己控制
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 总会有自适应宽度的列  当存在fix时，fix区域就是自适应列，否则
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * titles:[{title:"",width:100,fixed:false,bindData:""}]  宽度默认值为100   如果没有fixed区域,进度条宽度需要保留  bindData:绑定的字段名
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * then执行actions回调
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * actions 传递按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fixedLeft 大小 30%
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fixedRight 大小 30%
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * center 数据是否居中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 中间grid会对数据进行全部创建，用于在mobile中显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 浏览器滚动条宽度设置为17px
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _datagrid = __webpack_require__(28);

var _datagrid2 = _interopRequireDefault(_datagrid);

var _rows = __webpack_require__(29);

var _rows2 = _interopRequireDefault(_rows);

var _gridActions = __webpack_require__(16);

var _gridActions2 = _interopRequireDefault(_gridActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
    function Grid(container, fixed, width, leftSpace, rightSpace) {
        _classCallCheck(this, Grid);

        this.container = container;
        this.fixed = fixed;
        this.width = width;
        this.leftSpace = leftSpace;
        this.rightSpace = rightSpace;
    }

    _createClass(Grid, [{
        key: 'create',
        value: function create() {
            var gridRender = $((0, _datagrid2.default)({
                titles: this.titles,
                height: this.height + "px",
                fixed: this.fixed,
                width: this.width,
                leftSpace: this.leftSpace,
                rightSpace: this.rightSpace
            }));
            if (this.gridRender) {
                this.gridRender.replaceWith(gridRender);
            } else {
                this.container.append(gridRender);
            }
            this.gridRender = gridRender;
            this.header = this.gridRender.find(".grid-header");
            this.content = this.gridRender.find(".grid-data");
            if (!this.fixed) {
                this.scrollSync();
            }
            return this;
        }
    }, {
        key: 'setTitles',
        value: function setTitles(titles, height) {
            this.titles = titles;
            if (this.fixed) {
                this.height = height + 17;
            } else {
                this.height = height;
            }
            this.create();
            return this;
        }
    }, {
        key: 'setActions',
        value: function setActions(actions) {
            this.actions = actions;
            return this;
        }
    }, {
        key: 'scrollSync',
        value: function scrollSync() {
            var _this = this;
            _this.content.on("scroll", function () {
                console.log(_this.content[0].scrollLeft);
                _this.header[0].scrollLeft = _this.content[0].scrollLeft;
            });
        }
    }, {
        key: 'update',
        value: function update(data) {
            this.rowStart = 0;
            var rows = $((0, _rows2.default)({
                titles: this.titles,
                data: data,
                rowStart: this.rowStart,
                actions: this.actions,
                fixed: this.fixed
            })).filter(".data-row");
            this.gridRender.find(".data-row-group").empty().append(rows);
            this.rowStart += data.length;
            return rows;
        }
    }, {
        key: 'append',
        value: function append(data) {
            var rows = $((0, _rows2.default)({
                titles: this.titles,
                data: data,
                rowStart: this.rowStart,
                actions: this.actions,
                fixed: this.fixed
            })).filter(".data-row");
            this.gridRender.find(".data-row-group").append(rows);
            this.rowStart += data.length;
            return rows;
        }
    }, {
        key: 'updateHeight',
        value: function updateHeight(height) {
            if (this.fixed) {
                this.height = height - 17;
            } else {
                this.height = height;
            }
            this.gridRender.children(".grid-data").css({
                height: this.height + "px"
            });
        }
    }]);

    return Grid;
}();

var DataGrid = function () {
    function DataGrid(container, titles, height, leftFixedWidth, rightFixedWidth) {
        _classCallCheck(this, DataGrid);

        //通过titles来构造表格
        this.container = container;
        //初始化三个Grid实例对象
        this.leftWidth = leftFixedWidth;
        this.rightWidth = rightFixedWidth;
        this.setTitles(titles, height);
        this.initActions();
    }

    _createClass(DataGrid, [{
        key: 'calcH',
        value: function calcH(leftRows, midRows, rightRows) {
            //动态计算高度并且进行修改
            $.each(leftRows, function (i, v) {
                var row0 = $(v);
                var row1 = midRows.eq(i);
                var row2 = rightRows.eq(i);
                var leftH = row0.height();
                var midH = row1.height();
                var rightH = row2.height();
                var max = Math.max(parseInt(leftH), parseInt(midH), parseInt(rightH));
                row0.css({
                    height: max + "px"
                }).removeClass("in-calc");
                row1.css({
                    height: max + "px"
                }).removeClass("in-calc");
                row2.css({
                    height: max + "px"
                }).removeClass("in-calc");
            });
        }
    }, {
        key: 'calcHeader',
        value: function calcHeader() {
            //先计算宽度
            var rightW = this.rightGrid.gridRender.width();
            this.midGrid.gridRender.find(".grid-data > .data-grid").css({
                "padding-right": rightW + "px"
            });
            this.midGrid.gridRender.find(".grid-header > .data-grid").css({
                "padding-right": rightW + 17 + "px"
            });
            var header0 = this.leftGrid.gridRender.find('[data-row="header"]');
            var header1 = this.midGrid.gridRender.find('[data-row="header"]');
            var header2 = this.rightGrid.gridRender.find('[data-row="header"]');
            var content0 = this.leftGrid.gridRender.find('.grid-data');
            var content1 = this.midGrid.gridRender.find('.grid-data');
            var content2 = this.rightGrid.gridRender.find('.grid-data');
            var leftH = header0.height();
            var midH = header1.height();
            var rightH = header2.height();
            var max = Math.max(parseInt(leftH), parseInt(midH), parseInt(rightH));
            header0.css({
                height: max + "px"
            }).removeClass("in-calc");
            header1.css({
                height: max + "px"
            }).removeClass("in-calc");
            header2.css({
                height: max + "px"
            }).removeClass("in-calc");
            content0.css({
                "padding-top": max + "px"
            });
            content1.css({
                "padding-top": max + "px"
            });
            content2.css({
                "padding-top": max + "px"
            });
        }
    }, {
        key: 'create',
        value: function create() {
            this.leftGrid.create();
            this.midGrid.create();
            this.rightGrid.create();
            this.calcHeader();
            this.scrollSync();
            return this;
        }
    }, {
        key: 'update',
        value: function update(data) {
            //更新数据
            var rows0 = this.leftGrid.update(data);
            var rows1 = this.midGrid.update(data);
            var rows2 = this.rightGrid.update(data);
            this.calcH(rows0, rows1, rows2);
            return this;
        }
    }, {
        key: 'append',
        value: function append(data) {
            var rows0 = this.leftGrid.append(data);
            var rows1 = this.midGrid.append(data);
            var rows2 = this.rightGrid.append(data);
            this.calcH(rows0, rows1, rows2);
            return this;
        }
    }, {
        key: 'scrollSync',
        value: function scrollSync() {
            var leftContainer = this.leftGrid.content;
            var midContainer = this.midGrid.content;
            var rightContainer = this.rightGrid.content;
            midContainer.on("scroll", function () {
                leftContainer[0].scrollTop = rightContainer[0].scrollTop = midContainer[0].scrollTop;
            });
        }
    }, {
        key: 'initActions',
        value: function initActions() {
            var _this = this;
            this.container.on("click", ".btn", function () {
                var data = $(this).parents(".data-row").attr("data-data");
                _this.callback && _this.callback.call(_this, $(this).text(), data);
            });
            this.container.on("mouseover", ".data-row", function () {
                var rowIndex = $(this).attr("data-row");
                _this.container.find('[data-row="' + rowIndex + '"]').addClass("hover");
            });
            this.container.on("mouseout", ".data-row", function () {
                var rowIndex = $(this).attr("data-row");
                _this.container.find('[data-row="' + rowIndex + '"]').removeClass("hover");
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }, {
        key: 'setTitles',
        value: function setTitles(titles, height) {
            var leftTitles = [];
            var midTitles = [];
            var rightTitles = [];
            titles.forEach(function (title, i) {
                title.width = title.width || 100;
                if (title.fixed === "left") {
                    leftTitles.push(title);
                } else if (title.fixed === "right") {
                    rightTitles.push(title);
                } else {
                    midTitles.push(title);
                }
            });
            height = height || 300;
            this.leftTitles = leftTitles;
            this.midTitles = titles;
            this.rightTitles = rightTitles;
            leftTitles.length === 0 && (this.leftWidth = 0);
            rightTitles.length === 0 && (this.rightWidth = 0);
            this.leftGrid = new Grid(this.container, "left", this.leftWidth, 0, 0);
            this.midGrid = new Grid(this.container, null, "100%", this.leftWidth, this.rightWidth);
            this.rightGrid = new Grid(this.container, "right", this.rightWidth, 0, 0);
            this.leftGrid.setTitles(leftTitles, height);
            this.midGrid.setTitles(titles, height);
            this.rightGrid.setTitles(rightTitles, height);
            this.titles = titles;
            this.create();
            return this;
        }
    }, {
        key: 'setActions',
        value: function setActions(actions) {
            this.actions = actions;
            this.leftGrid.setActions(actions);
            this.midGrid.setActions(actions);
            this.rightGrid.setActions(actions);
            return this;
        }
        /**
         * @params
         * container: 容器
         * titles:标题数组
         * height:内容高度
         * leftFixedWidth:左侧宽度
         * rightFixedWidth:右侧宽度
         */

    }, {
        key: 'updateHeight',
        value: function updateHeight(height) {
            this.leftGrid.updateHeight(height);
            this.midGrid.updateHeight(height);
            this.rightGrid.updateHeight(height);
            return this;
        }
    }], [{
        key: 'instance',
        value: function instance(params) {
            var container = params.container || $("body");
            var titles = params.titles;
            var height = params.height || 400;
            var leftFixedWidth = params.leftFixedWidth || "30%";
            var rightFixedWidth = params.rightFixedWidth || "30%";
            return new DataGrid(container, titles, height, leftFixedWidth, rightFixedWidth);
        }
    }]);

    return DataGrid;
}();

exports.default = DataGrid;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/7 0007.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 分页器插件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 显示9个
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  * mobile中显示3个 小屏幕中显示三个如果屏幕大小改变则重新实例化对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 添加参数控制是否显示首页 尾页
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _pager = __webpack_require__(30);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MOBILE_COUNT = 3;
var PC_COUNT = 9;

var Pager = function () {
    function Pager(container, count, hideJump) {
        _classCallCheck(this, Pager);

        this.pageIndex = 1;
        this.pageCount = 0;
        this.container = container;
        if (document.documentElement.offsetWidth < 700) {
            this.count = count || MOBILE_COUNT;
        } else {
            this.count = count || PC_COUNT;
        }
        this.hideJump = hideJump || false;
        this.initLife();
    }

    _createClass(Pager, [{
        key: "update",
        value: function update() {
            if (this.element) {
                var newElement = $((0, _pager2.default)({
                    pageCount: this.pageCount,
                    pageIndex: this.pageIndex,
                    count: this.count,
                    hideJump: this.hideJump
                }));
                this.element.replaceWith(newElement);
                this.element = newElement;
            } else {
                this.element = $((0, _pager2.default)({
                    pageCount: this.pageCount,
                    pageIndex: this.pageIndex,
                    count: this.count,
                    hideJump: this.hideJump
                }));
                this.container.append(this.element);
            }
            return this;
        }
    }, {
        key: "setPageIndex",
        value: function setPageIndex(pageIndex) {
            this.pageIndex = pageIndex;
            return this;
        }
    }, {
        key: "setPageCount",
        value: function setPageCount(pageCount) {
            this.pageCount = pageCount;
            return this;
        }
    }, {
        key: "initLife",
        value: function initLife() {
            //生命周期
            var _this = this;
            this.container.on("click", "span", function () {
                var li = $(this).parent();
                if (li.hasClass("disabled") || li.hasClass("active")) return -1; //屏蔽不可点击项
                var pageIndex = void 0;
                if (li.hasClass("prev")) {
                    //当前前一个
                    pageIndex = parseInt($(this).parent().siblings(".active").children("span").attr("data-index")) - 1;
                } else if (li.hasClass("next")) {
                    pageIndex = parseInt($(this).parent().siblings(".active").children("span").attr("data-index")) + 1;
                } else if (li.hasClass("pager-home")) {
                    pageIndex = 1;
                } else if (li.hasClass("pager-last")) {
                    pageIndex = _this.pageCount;
                } else {
                    pageIndex = parseInt($(this).attr("data-index"));
                }
                _this.pageIndex = pageIndex;
                _this.update();
                _this.callback && _this.callback.call(_this, pageIndex);
            });
        }
    }, {
        key: "then",
        value: function then(callback) {
            this.callback = callback;
            return this;
        }
    }]);

    return Pager;
}();

exports.default = Pager;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, fixed = $data.fixed, width = $data.width, leftSpace = $data.leftSpace, rightSpace = $data.rightSpace, $each = $imports.$each, titles = $data.titles, title = $data.title, $index = $data.$index, height = $data.height;
    $$out += '<div class="data-grid-group ';
    $$out += $escape(fixed === 'left' ? 'grid-fix-left' : fixed === 'right' ? 'grid-fix-right' : 'grid-fix-center');
    $$out += '" style="width:';
    $$out += $escape(width);
    $$out += '">\r\n    <div class="data-grid-wrap grid-header" style="padding-left: ';
    $$out += $escape(leftSpace);
    $$out += ';padding-right: ';
    $$out += $escape(rightSpace);
    $$out += ';">\r\n        <div class="data-grid">\r\n            <div class="data-row">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-col ';
        $$out += $escape(fixed != title.fixed ? 'grid-show-in-mobile' : '');
        $$out += '" style="width: ';
        $$out += $escape(title.width);
        $$out += 'px;">\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n            <div class="data-row in-calc" data-row="header">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-grid-title ';
        $$out += $escape(fixed != title.fixed ? 'grid-show-in-mobile' : '');
        $$out += '">\r\n                        ';
        $$out += $escape(title.title);
        $$out += '\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="data-grid-wrap grid-data" style="height: ';
    $$out += $escape(height);
    $$out += ';padding-left: ';
    $$out += $escape(leftSpace);
    $$out += ';padding-right: ';
    $$out += $escape(rightSpace);
    $$out += ';">\r\n        <div class="data-grid">\r\n            <div class="data-row">\r\n                ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                    <div class="data-col ';
        $$out += $escape(fixed != title.fixed ? 'grid-show-in-mobile' : '');
        $$out += '" style="width: ';
        $$out += $escape(title.width);
        $$out += 'px;">\r\n                    </div>\r\n                ';
    });
    $$out += '\r\n            </div>\r\n            <div class="data-row-group">\r\n                <div class="data-row data-row-hidden">\r\n                    ';
    $each(titles, function (title, $index) {
        $$out += '\r\n                        <div class="data-column grid-center ';
        $$out += $escape(fixed !== title.fixed ? 'grid-show-in-mobile' : '');
        $$out += '">\r\n                        </div>\r\n                    ';
    });
    $$out += '\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, data = $data.data, row = $data.row, index = $data.index, $escape = $imports.$escape, rowStart = $data.rowStart, titles = $data.titles, title = $data.title, $index = $data.$index, fixed = $data.fixed, actions = $data.actions, action = $data.action;
    $each(data, function (row, index) {
        $$out += '\r\n    <div class="data-row in-calc" data-data="';
        $$out += $escape(row);
        $$out += '" data-row="';
        $$out += $escape(rowStart + index);
        $$out += '">\r\n        ';
        $each(titles, function (title, $index) {
            $$out += '\r\n            ';
            if (title.bindData === 'actions') {
                $$out += '\r\n                <div class="data-column grid-center ';
                $$out += $escape(fixed != title.fixed ? 'grid-show-in-mobile' : '');
                $$out += '" data-data="';
                $$out += $escape(fixed);
                $$out += '">\r\n                    ';
                $each(actions, function (action, $index) {
                    $$out += '\r\n                        <div class="btn btn-primary ';
                    $$out += $escape(title.filter ? title.filter(row, action) : '');
                    $$out += '">';
                    $$out += $escape(action);
                    $$out += '</div>\r\n                    ';
                });
                $$out += '\r\n                </div>\r\n            ';
            } else if (title.bindData === 'index') {
                $$out += '\r\n                <div class="data-column grid-center grid-show-in-pc">\r\n                    <div class="data-data">';
                $$out += $escape(rowStart + index);
                $$out += '</div>\r\n                </div>\r\n            ';
            } else {
                $$out += '\r\n                <div class="data-column grid-center ';
                $$out += $escape(fixed != title.fixed ? 'grid-show-in-mobile' : '');
                $$out += '">\r\n                    <div class="data-key">';
                $$out += $escape(title.title);
                $$out += '</div>\r\n                    <div class="data-data">';
                $$out += $escape(title.filter ? title.filter(row[title.bindData]) : row[title.bindData]);
                $$out += '</div>\r\n                </div>\r\n            ';
            }
            $$out += '\r\n        ';
        });
        $$out += '\r\n    </div>\r\n';
    });
    return $$out;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', pageCount = $data.pageCount, hideJump = $data.hideJump, $escape = $imports.$escape, pageIndex = $data.pageIndex, count = $data.count, half = $data.half, left = $data.left, right = $data.right, start = $data.start, end = $data.end, i = $data.i;
    $$out += '<ul class="pager pager-round">\r\n    ';
    if (pageCount > 0) {
        $$out += '\r\n        ';
        if (!hideJump) {
            $$out += '\r\n            <li class="pager-home ';
            $$out += $escape(1 == pageIndex ? 'disabled' : '');
            $$out += '"><span>首页</span></li>\r\n        ';
        }
        $$out += '\r\n        <li class="previous ';
        $$out += $escape(1 == pageIndex ? 'disabled' : '');
        $$out += '">\r\n            <span>\xAB</span>\r\n        </li>\r\n        <li class="';
        $$out += $escape(1 == pageIndex ? 'active' : '');
        $$out += '"><span data-index="1">1</span></li>\r\n        ';
        if (pageCount > count) {
            $$out += '\r\n            ';
            var half = count % 2 === 0 ? count / 2 : (count - 1) / 2;
            $$out += '\r\n            ';
            if (pageIndex > half + 1) {
                $$out += '\r\n                <li><span data-index="';
                $$out += $escape(pageIndex - 5);
                $$out += '">...</span></li>\r\n            ';
            }
            $$out += '\r\n            ';
            var left, right, start, end;
            $$out += '\r\n            ';
            if (half + 1 >= pageIndex) {
                $$out += '\r\n                ';
                start = 2;
                $$out += '\r\n                ';
                end = count + start - 4;
                $$out += '\r\n            ';
            } else if (half + pageIndex >= pageCount) {
                $$out += '\r\n                ';
                end = pageCount - 1;
                $$out += '\r\n                ';
                start = end - count + 4;
                $$out += '\r\n            ';
            } else {
                $$out += '\r\n                ';
                start = pageIndex - half + 2;
                $$out += '\r\n                ';
                end = pageIndex + half - 2;
                $$out += '\r\n            ';
            }
            $$out += '\r\n            ';
            for (var i = start; end >= i; i++) {
                $$out += '\r\n                <li class="';
                $$out += $escape(i == pageIndex ? 'active' : '');
                $$out += '"><span data-index="';
                $$out += $escape(i);
                $$out += '">';
                $$out += $escape(i);
                $$out += '</span></li>\r\n            ';
            }
            $$out += '\r\n            ';
            if (pageCount > pageIndex + half + 1) {
                $$out += '\r\n                <li><span data-index="';
                $$out += $escape(start + 10);
                $$out += '">...</span></li>\r\n            ';
            }
            $$out += '\r\n        ';
        } else {
            $$out += '\r\n            ';
            for (var i = 2; pageCount > i; i++) {
                $$out += '\r\n                <li class="';
                $$out += $escape(i == pageIndex ? 'active' : '');
                $$out += '"><span data-index="';
                $$out += $escape(i);
                $$out += '">';
                $$out += $escape(i);
                $$out += '</span></li>\r\n            ';
            }
            $$out += '\r\n        ';
        }
        $$out += '\r\n        ';
        if (pageCount !== 1) {
            $$out += '\r\n            <li class="';
            $$out += $escape(pageCount == pageIndex ? 'active' : '');
            $$out += '"><span data-index="';
            $$out += $escape(pageCount);
            $$out += '">';
            $$out += $escape(pageCount);
            $$out += '</span></li>\r\n        ';
        }
        $$out += '\r\n        <li class="next ';
        $$out += $escape(pageCount == pageIndex ? 'disabled' : '');
        $$out += '">\r\n            <span>\xBB</span>\r\n        </li>\r\n        ';
        if (!hideJump) {
            $$out += '\r\n            <li class="pager-last ';
            $$out += $escape(pageCount == pageIndex ? 'disabled' : '');
            $$out += '"><span>尾页</span></li>\r\n        ';
        }
        $$out += '\r\n    ';
    }
    $$out += '\r\n</ul>';
    return $$out;
};

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
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
 * //存在bug
 *  email url 中e.key不兼容部分浏览器 例如uc等
 */

var Input = function () {
    function Input() {
        _classCallCheck(this, Input);
    }

    _createClass(Input, null, [{
        key: "initialize",
        value: function initialize() {
            //粘贴内容进行判断
            $("body").on("paste", "input", function (e) {
                var txt = "";
                if (window.clipboardData && window.clipboardData.getData) {
                    // IE
                    txt = window.clipboardData.getData('Text');
                } else {
                    txt = e.originalEvent.clipboardData.getData('Text'); //e.clipboardData.getData('text/plain');
                }
                if (this.type === "number" || this.type === "tel") {
                    if (!/\d+/.test(txt)) {
                        return false;
                    }
                }
                return true;
            });
            $("body").on("focus", "input", function () {
                var type = $(this).attr("type");
                if (!(!type || type === "text")) {
                    // $(this).attr("onpaste","window.inputPaste(this);");
                }
            }).on("keydown", "input", function (e) {
                e = e || event;
                var currKey = e.keyCode || e.which || e.charCode;
                var type = $(this).attr("type"),
                    key = e.key || String.fromCharCode(currKey);
                switch (type) {
                    case "email":
                        return (/\d|Backspace|Left|Right|\.|\w|@|Control/.test(key)
                        ); //存在bug
                    case "url":
                        return (/\d|Backspace|Left|Right|\.|\w|@|:|\/|Control/.test(key)
                        );
                    case "tel":
                    case "number":
                        return (/\d|Backspace|Left|Right|Delete|Control/.test(key) || currKey >= 96 && currKey <= 105 || currKey === 37 || currKey === 39 || currKey === 8 || currKey === 17 || e.ctrlKey && currKey === 86
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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/27 0027.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * update 方向  默认向下，可能向上
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _cfIdGenerator = __webpack_require__(4);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectMap = new Map();

var SelectClass = function () {
    function SelectClass(select, direction) {
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
        this.direction = direction || "auto";
        switch (this.direction) {
            case "auto":
                this.$.find(".select-options").removeClass("up");
                break;
            case "up":
                this.$.find(".select-options").addClass("up");
                break;
            case "down":
                this.$.find(".select-options").removeClass("up");
                break;
        }
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
        value: function initWithElement(el, direction) {
            return new SelectClass(el, direction);
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

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"name": "认证状态枚举",
	"version": "1.0.0",
	"private": true,
	"keywords": [
		"authorize"
	],
	"Authenticated": 2,
	"Unauthorized": 1
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {
	"0": "分享页面",
	"1": "后台运营",
	"2": "Android",
	"3": "IOS",
	"name": "注册来源",
	"version": "1.0.0",
	"private": true,
	"keywords": [
		"registerSource"
	]
};

/***/ }),
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
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="scroll-content">\r\n    <div class="block">\r\n        <div class="item-name">\r\n            基本资料\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">姓名\uFF1A<input class="input" type="text"></div>\r\n            <div class="item-info">手机号\uFF1A<input type="tel" class="input"></div>\r\n        </div>\r\n    </div>\r\n    <div class="block">\r\n        <div class="item-name">\r\n            职务信息\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">职务\uFF1A<input class="input" type="text"></div>\r\n            <div class="item-info">公司全称\uFF1A<input type="tel" class="input"></div>\r\n        </div>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(1);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, CustomerName = $data.CustomerName, CustomerTel = $data.CustomerTel, IdentificationState = $data.IdentificationState, CustomerCard = $data.CustomerCard, CustomerPosition = $data.CustomerPosition, CompanyName = $data.CompanyName, Sex = $data.Sex, CustomerIndustry = $data.CustomerIndustry, AttentionIndustry = $data.AttentionIndustry, CustomerLocation = $data.CustomerLocation, CustomerHomeTown = $data.CustomerHomeTown, CreateTime = $data.CreateTime, CustomerIntroduction = $data.CustomerIntroduction, CustomerProvide = $data.CustomerProvide, CustomerDemand = $data.CustomerDemand, $each = $imports.$each, JobExperienceList = $data.JobExperienceList, job = $data.job, $index = $data.$index, EduExperienceList = $data.EduExperienceList, edu = $data.edu, Hobbys = $data.Hobbys;
    $$out += '<div class="scroll-content">\r\n    <div class="block">\r\n        <div class="item-name">\r\n            基本资料\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">姓名\uFF1A';
    $$out += $escape(CustomerName);
    $$out += '</div>\r\n            <div class="item-info">手机号\uFF1A';
    $$out += $escape(CustomerTel);
    $$out += '</div>\r\n            <div class="item-info">状态\uFF1A';
    $$out += $escape(IdentificationState == 2 ? '认证会员' : IdentificationState == 0 ? '注册会员' : '认证失败');
    $$out += '</div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                头像\uFF1A';
    if (CustomerCard) {
        $$out += '<img data-toggle="viewer" src="';
        $$out += $escape(CustomerCard);
        $$out += '" height="60">';
    } else {
        $$out += '未上传';
    }
    $$out += '\r\n            </div>\r\n            <div class="item-info">职务\uFF1A';
    $$out += $escape(CustomerPosition || '未填写');
    $$out += '</div>\r\n            <div class="item-info">公司\uFF1A';
    $$out += $escape(CompanyName || '未填写');
    $$out += '</div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">性别\uFF1A';
    $$out += $escape(Sex === 1 ? '男' : Sex === 2 ? '女' : '未填写');
    $$out += '</div>\r\n            <div class="item-info">所在行业\uFF1A';
    $$out += $escape(CustomerIndustry || '未填写');
    $$out += '</div>\r\n            <div class="item-info">关注行业\uFF1A';
    $$out += $escape(AttentionIndustry || '未填写');
    $$out += '</div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">所在地\uFF1A';
    $$out += $escape(CustomerLocation || '未填写');
    $$out += '</div>\r\n            <div class="item-info">家乡\uFF1A';
    $$out += $escape(CustomerHomeTown || '未填写');
    $$out += '</div>\r\n            <div class="item-info">创建时间\uFF1A';
    $$out += $escape(CreateTime.replace('T', ''));
    $$out += '</div>\r\n        </div>\r\n    </div>\r\n    <div class="block">\r\n        <div class="item-name">\r\n            详细资料\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                个人简介\uFF1A';
    $$out += $escape(CustomerIntroduction || '未填写');
    $$out += '\r\n            </div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                我能提供\uFF1A';
    $$out += $escape(CustomerProvide || '未填写');
    $$out += '\r\n            </div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                我想得到\uFF1A';
    $$out += $escape(CustomerDemand || '未填写');
    $$out += '\r\n            </div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                <div class="flex">\r\n                    当前任职\uFF1A\r\n                </div>\r\n                <div class="flex-1 flex-column">\r\n                    ';
    $each(JobExperienceList, function (job, $index) {
        $$out += '\r\n                        <div>\r\n                            ';
        $$out += $escape(job.CompanyName);
        $$out += ' / ';
        $$out += $escape(job.Position);
        $$out += '\r\n                        </div>\r\n                    ';
    });
    $$out += '\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                <div class="flex">\r\n                    教育经历\uFF1A\r\n                </div>\r\n                <div class="flex-1 flex-column">\r\n                    ';
    $each(EduExperienceList, function (edu, $index) {
        $$out += '\r\n                        <div>\r\n                            ';
        $$out += $escape(edu.School);
        $$out += '/';
        $$out += $escape(edu.Education);
        $$out += '/';
        $$out += $escape(edu.BeginTime.replace('T', ''));
        $$out += '-';
        $$out += $escape(edu.EndTime.replace('T', ''));
        $$out += '\r\n                        </div>\r\n                    ';
    });
    $$out += '\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="item">\r\n            <div class="item-info">\r\n                兴趣爱好\uFF1A';
    $$out += $escape(Hobbys || '未填写');
    $$out += '\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ }),
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
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/27 0027.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 注册会员 脚本
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
//自动初始化，不需要调用


var _input = __webpack_require__(33);

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(34);

var _select2 = _interopRequireDefault(_select);

var _authorize = __webpack_require__(38);

var _authorize2 = _interopRequireDefault(_authorize);

var _datagrid = __webpack_require__(26);

var _datagrid2 = _interopRequireDefault(_datagrid);

var _cfDialog = __webpack_require__(5);

var _cfDialog2 = _interopRequireDefault(_cfDialog);

var _pager = __webpack_require__(27);

var _pager2 = _interopRequireDefault(_pager);

var _registerSource = __webpack_require__(39);

var _registerSource2 = _interopRequireDefault(_registerSource);

var _detail = __webpack_require__(56);

var _detail2 = _interopRequireDefault(_detail);

var _create = __webpack_require__(55);

var _create2 = _interopRequireDefault(_create);

var _fetch = __webpack_require__(19);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Register = function () {
    function Register() {
        _classCallCheck(this, Register);
    }

    _createClass(Register, null, [{
        key: 'initialize',
        value: function initialize() {
            var _this2 = this;

            //初始化下拉选择控件
            this.pageSize = 10;
            this.pageIndex = 1;
            this.select = _select2.default.initWithElement($("#authStatus")).setOptions([{
                key: "已认证会员",
                value: _authorize2.default.Authenticated
            }, {
                key: "待认证会员",
                value: _authorize2.default.Unauthorized
            }]).then(function (val) {
                // alert(val);
            });
            var _this = this;
            $("#search").on("click", function () {
                _this.search();
            });
            var titles = [{
                title: "姓名",
                bindData: "CustomerName"
            }, {
                title: "手机号",
                bindData: "CustomerTel",
                width: 100
            }, {
                title: "职务",
                bindData: "CustomerPosition",
                width: 100
            }, {
                title: "公司",
                bindData: "CompanyName",
                width: 100
            }, {
                title: "注册来源",
                bindData: "RegisterSource",
                width: 100,
                filter: function filter(data) {
                    return _registerSource2.default[data];
                }
            }, {
                title: "创建时间",
                bindData: "CreateTime",
                width: 100,
                filter: function filter(timeString) {
                    return timeString ? timeString.replace(/T/g, " ") : "";
                }
            }, {
                title: "提交认证时间",
                bindData: "LastSubmitIdentificationTime",
                width: 100,
                filter: function filter(timeString) {
                    return timeString ? timeString.replace(/T/g, " ") : "";
                }
            }, {
                title: "认证时间",
                bindData: "LastIdentificationTime",
                width: 100,
                filter: function filter(timeString) {
                    return timeString ? timeString.replace(/T/g, " ") : "";
                }
            }, {
                title: "操作",
                bindData: "actions",
                width: 200,
                fixed: "right"
            }];

            var dataH = document.documentElement.offsetHeight - $(".page-datagrid").offset().top - 140;
            this.datagrid = _datagrid2.default.instance({
                container: $(".page-datagrid"),
                titles: titles,
                height: dataH,
                rightFixedWidth: "200px"
            }).setActions(["查看详情", "编辑", "删除"]).then(function (type, data) {
                data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== undefined && (data = JSON.parse(data));
                switch (type) {
                    case "查看详情":
                        _this2.getDetail(data.CustomerID);
                        break;
                }
            });
            $(window).on("resize", function () {
                var dataH = document.documentElement.offsetHeight - $(".page-datagrid").offset().top - 140;
                _this.datagrid.updateHeight(dataH);
            });

            this.pager = new _pager2.default($(".page-pager"), 0, false).then(function (index) {
                _this.pageIndex = index;
                _this.search();
            });
            _this.search();
        }
    }, {
        key: 'getDetail',
        value: function getDetail(userId) {
            (0, _fetch2.default)("/api/ManageCustomerInfoApi/GetCustomerDetailInfoById?customerId=" + userId).then(function (res) {
                if (res.ok) {
                    //弹出dialog
                    var size = navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/ig) ? "full" : "";
                    (0, _cfDialog2.default)({
                        title: "会员详情",
                        content: (0, _detail2.default)(res.data),
                        modal: false,
                        size: size,
                        footerBtn: [{
                            text: "取消"
                        }]
                    }).then(function (btn) {
                        this.close();
                    });
                } else {
                    alert(res.msg).then(function (btn) {
                        if (btn === "operation_ok") {
                            if (res.overdue) {
                                window.top.location.replace("./login.html");
                            }
                            this.close();
                        }
                    });
                }
            });
        }
    }, {
        key: 'search',
        value: function search() {
            var userName = $("#userName").val(),
                phone = $("#phone").val(),
                status = this.select.value || -1,
                _this = this;
            (0, _fetch2.default)("/api/ManageCustomerInfoApi/GetCustomerInfoList?IdentificationCount=-1&name=" + userName + "&CustomerTel=" + phone + "&IdentificationState=" + status + "&PageSize=" + this.pageSize + "&CurrentPage=" + this.pageIndex).then(function (res) {
                if (res.ok) {
                    console.log(res);
                    _this.datagrid.update(res.data.List);
                    _this.pager.setPageIndex(_this.pageIndex).setPageCount(res.data.TotalPages).update();
                } else {
                    alert(res.msg).then(function (btn) {
                        if (btn === "operation_ok") {
                            if (res.overdue) {
                                window.top.location.replace("./login.html");
                            }
                        }
                    });
                }
            });
        }
    }]);

    return Register;
}();

Register.initialize();

/***/ })
/******/ ]);