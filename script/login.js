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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/6/16 0016.
 * 星空特效背景
 */
var Star = function () {
    function Star() {
        _classCallCheck(this, Star);

        var isExist = document.querySelector("[data-star-effect]");
        if (isExist) {
            console.info("exists");
        } else {
            var canvas = document.createElement("canvas");
            canvas.setAttribute("data-star-effect", "true");
            canvas.classList.add("star-effect");
            this.canvas = canvas;
            document.body.appendChild(canvas);
            this.init();
        }
        return this;
    }

    _createClass(Star, [{
        key: "init",
        value: function init() {
            var _this = this;
            function IsPC() {
                var userAgentInfo = navigator.userAgent;
                var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            }
            var num = IsPC() ? 300 : 100;
            var w = window.innerWidth;
            var h = window.innerHeight;
            var max = 100;
            var _x = 0;
            var _y = 0;
            var _z = 150;
            var dtr = function dtr(d) {
                return d * Math.PI / 180;
            };
            var rnd = function rnd() {
                return Math.sin(Math.floor(Math.random() * 360) * Math.PI / 180);
            };
            var dist = function dist(p1, p2, p3) {
                return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2));
            };
            var cam = {
                obj: {
                    x: _x,
                    y: _y,
                    z: _z
                },
                dest: {
                    x: 0,
                    y: 0,
                    z: 1
                },
                dist: {
                    x: 0,
                    y: 0,
                    z: 200
                },
                ang: {
                    cplane: 0,
                    splane: 0,
                    ctheta: 0,
                    stheta: 0
                },
                zoom: 1,
                disp: {
                    x: w / 2,
                    y: h / 2,
                    z: 0
                },
                upd: function upd() {
                    cam.dist.x = cam.dest.x - cam.obj.x;
                    cam.dist.y = cam.dest.y - cam.obj.y;
                    cam.dist.z = cam.dest.z - cam.obj.z;
                    cam.ang.cplane = -cam.dist.z / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
                    cam.ang.splane = cam.dist.x / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
                    cam.ang.ctheta = Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);
                    cam.ang.stheta = -cam.dist.y / Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.y * cam.dist.y + cam.dist.z * cam.dist.z);
                }
            };
            var trans = {
                parts: {
                    sz: function sz(p, _sz) {
                        return {
                            x: p.x * _sz.x,
                            y: p.y * _sz.y,
                            z: p.z * _sz.z
                        };
                    },
                    rot: {
                        x: function x(p, rot) {
                            return {
                                x: p.x,
                                y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                                z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
                            };
                        },
                        y: function y(p, rot) {
                            return {
                                x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                                y: p.y,
                                z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
                            };
                        },
                        z: function z(p, rot) {
                            return {
                                x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                                y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                                z: p.z
                            };
                        }
                    },
                    pos: function pos(p, _pos) {
                        return {
                            x: p.x + _pos.x,
                            y: p.y + _pos.y,
                            z: p.z + _pos.z
                        };
                    }
                },
                pov: {
                    plane: function plane(p) {
                        return {
                            x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
                            y: p.y,
                            z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
                        };
                    },
                    theta: function theta(p) {
                        return {
                            x: p.x,
                            y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
                            z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
                        };
                    },
                    set: function set(p) {
                        return {
                            x: p.x - cam.obj.x,
                            y: p.y - cam.obj.y,
                            z: p.z - cam.obj.z
                        };
                    }
                },
                persp: function persp(p) {
                    return {
                        x: p.x * cam.dist.z / p.z * cam.zoom,
                        y: p.y * cam.dist.z / p.z * cam.zoom,
                        z: p.z * cam.zoom,
                        p: cam.dist.z / p.z
                    };
                },
                disp: function disp(p, _disp) {
                    return {
                        x: p.x + _disp.x,
                        y: -p.y + _disp.y,
                        z: p.z + _disp.z,
                        p: p.p
                    };
                },
                steps: function steps(_obj_, sz, rot, pos, disp) {
                    var _args = trans.parts.sz(_obj_, sz);
                    _args = trans.parts.rot.x(_args, rot);
                    _args = trans.parts.rot.y(_args, rot);
                    _args = trans.parts.rot.z(_args, rot);
                    _args = trans.parts.pos(_args, pos);
                    _args = trans.pov.plane(_args);
                    _args = trans.pov.theta(_args);
                    _args = trans.pov.set(_args);
                    _args = trans.persp(_args);
                    _args = trans.disp(_args, disp);
                    return _args;
                }
            };
            (function () {
                "use strict";

                var threeD = function threeD(param) {
                    this.transIn = {};
                    this.transOut = {};
                    this.transIn.vtx = param.vtx;
                    this.transIn.sz = param.sz;
                    this.transIn.rot = param.rot;
                    this.transIn.pos = param.pos;
                };

                threeD.prototype.vupd = function () {
                    this.transOut = trans.steps(this.transIn.vtx, this.transIn.sz, this.transIn.rot, this.transIn.pos, cam.disp);
                };

                var Build = function Build() {
                    this.vel = 0.04;
                    this.lim = 360;
                    this.diff = 200;
                    this.initPos = 100;
                    this.toX = _x;
                    this.toY = _y;
                    this.go();
                };

                Build.prototype.go = function () {
                    this.canvas = _this.canvas;
                    this.canvas.width = window.innerWidth;
                    this.canvas.height = window.innerHeight;
                    this.$ = this.canvas.getContext("2d");
                    this.$.globalCompositeOperation = 'source-over';
                    this.letr = [];
                    this.dist = [];
                    this.calc = [];

                    for (var i = 0, len = num; i < len; i++) {
                        this.add();
                    }

                    this.rotObj = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this.objSz = {
                        x: w / 5,
                        y: h / 5,
                        z: w / 5
                    };
                };

                Build.prototype.add = function () {
                    this.letr.push(new threeD({
                        vtx: {
                            x: rnd(),
                            y: rnd(),
                            z: rnd()
                        },
                        sz: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        rot: {
                            x: 20,
                            y: -20,
                            z: 0
                        },
                        pos: {
                            x: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
                            y: this.diff * Math.sin(360 * Math.random() * Math.PI / 180),
                            z: this.diff * Math.sin(360 * Math.random() * Math.PI / 180)
                        }
                    }));
                    this.calc.push({
                        x: 360 * Math.random(),
                        y: 360 * Math.random(),
                        z: 360 * Math.random()
                    });
                };

                Build.prototype.upd = function () {
                    cam.obj.x += (this.toX - cam.obj.x) * 0.05;
                    cam.obj.y += (this.toY - cam.obj.y) * 0.05;
                };

                Build.prototype.draw = function () {
                    this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    cam.upd();
                    this.rotObj.x += 0.1;
                    this.rotObj.y += 0.1;
                    this.rotObj.z += 0.1;

                    for (var i = 0; i < this.letr.length; i++) {
                        for (var val in this.calc[i]) {
                            if (this.calc[i].hasOwnProperty(val)) {
                                this.calc[i][val] += this.vel;
                                if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;
                            }
                        }

                        this.letr[i].transIn.pos = {
                            x: this.diff * Math.cos(this.calc[i].x * Math.PI / 180),
                            y: this.diff * Math.sin(this.calc[i].y * Math.PI / 180),
                            z: this.diff * Math.sin(this.calc[i].z * Math.PI / 180)
                        };
                        this.letr[i].transIn.rot = this.rotObj;
                        this.letr[i].transIn.sz = this.objSz;
                        this.letr[i].vupd();
                        if (this.letr[i].transOut.p < 0) continue;
                        var g = this.$.createRadialGradient(this.letr[i].transOut.x, this.letr[i].transOut.y, this.letr[i].transOut.p, this.letr[i].transOut.x, this.letr[i].transOut.y, this.letr[i].transOut.p * 2);
                        this.$.globalCompositeOperation = 'lighter';
                        g.addColorStop(0, 'hsla(255, 255%, 255%, 1)');
                        g.addColorStop(.5, 'hsla(' + (i + 2) + ',85%, 40%,1)');
                        g.addColorStop(1, 'hsla(' + i + ',85%, 40%,.5)');
                        this.$.fillStyle = g;
                        this.$.beginPath();
                        this.$.arc(this.letr[i].transOut.x, this.letr[i].transOut.y, this.letr[i].transOut.p * 2, 0, Math.PI * 2, false);
                        this.$.fill();
                        this.$.closePath();
                    }
                };
                Build.prototype.anim = function () {
                    window.requestAnimationFrame = function () {
                        return window.requestAnimationFrame || function (callback, element) {
                            window.setTimeout(callback, 1000 / 60);
                        };
                    }();
                    var anim = function () {
                        this.upd();
                        this.draw();
                        window.requestAnimationFrame(anim);
                    }.bind(this);
                    window.requestAnimationFrame(anim);
                };

                Build.prototype.run = function () {
                    this.anim();

                    window.addEventListener('mousemove', function (e) {
                        this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
                        this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
                    }.bind(this));
                    window.addEventListener('touchmove', function (e) {
                        e.preventDefault();
                        this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;
                        this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;
                    }.bind(this));
                    window.addEventListener('mousedown', function (e) {
                        for (var i = 0; i < 100; i++) {
                            this.add();
                        }
                    }.bind(this));
                    window.addEventListener('touchstart', function (e) {
                        e.preventDefault();
                        for (var i = 0; i < 100; i++) {
                            this.add();
                        }
                    }.bind(this));
                };
                var app = new Build();
                app.run();
            })();
        }
    }], [{
        key: "instance",
        value: function instance() {
            return new Star();
        }
    }]);

    return Star;
}();

exports.default = Star;

/***/ }),

/***/ 2:
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

/***/ 25:
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 32:
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
var store = localStorage;
var session = sessionStorage;

var encode = function encode(text) {
    return encodeURI(encodeURIComponent(encodeURI(text)));
};

var decode = function decode(text) {
    return decodeURI(decodeURIComponent(decodeURI(text)));
};
/****
 * 保存体构造器
 */

var Data = function Data(val, time) {
    _classCallCheck(this, Data);

    return JSON.stringify({
        _val: val,
        _create: new Date().getTime() / 1000,
        _save: time ? time : -1
    });
};

var Key = function Key(key) {
    _classCallCheck(this, Key);

    return JSON.stringify({
        _key: key,
        _url: location.pathname
    });
};

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
            var $key = encode(new Key(key));
            var $val = encode(new Data(val, time));
            store.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this = this;

            //获取当前页面的值
            var $key = encode(new Key(key));
            var $data = store.getItem($key);
            return !$data ? function () {
                return null;
            }() : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this.isOverduce($data)) {
                    store.removeItem($key);
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
            var $key = encode(new Key(key));
            store.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator().then(function (key, val, $page, $key) {
                if ($page === page) {
                    store.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            store.clear();
        }
    }, {
        key: "length",
        value: function length() {
            return store.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!store;
        }
    }, {
        key: "iterator",
        value: function iterator() {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            return new Promise(function (resolve) {
                for (var i = 0, len = store.length; i < len; i++) {
                    var $key = store.key(i);
                    var $keyObj = JSON.parse($key);
                    var $value = store.getItem($key);
                    var $valObj = JSON.parse($value);
                    if ($this.isOverduce($valObj)) {
                        store.removeItem($key);
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
            var $key = encode(new Key(key));
            var $val = encode(new Data(val, time));
            session.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this2 = this;

            //获取当前页面的值
            var $key = encode(new Key(key));
            var $data = session.getItem($key);
            return !$data ? function () {
                return null;
            }() : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this2.isOverduce($data)) {
                    session.removeItem($key);
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
            var $key = encode(new Key(key));
            session.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator(function (key, val, $page, $key) {
                if ($page === page) {
                    session.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            session.clear();
        }
    }, {
        key: "length",
        value: function length() {
            return session.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!session;
        }
    }, {
        key: "iterator",
        value: function iterator(callback) {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            callback && function () {
                for (var i = 0, len = session.length; i < len; i++) {
                    var $key = session.key(i);
                    var $keyObj = JSON.parse(decode($key));
                    var $value = session.getItem($key);
                    var $valObj = JSON.parse(decode($value));
                    if ($this.isOverduce($valObj)) {
                        session.removeItem($key);
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

/***/ 34:
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
    $$out += $escape(width ? width + 'px' : 'auto');
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

/***/ 40:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dialog = __webpack_require__(34);

var _dialog2 = _interopRequireDefault(_dialog);

var _cfIdGenerator = __webpack_require__(7);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(5);

var _cfDrag = __webpack_require__(25);

var _cfDrag2 = _interopRequireDefault(_cfDrag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        this.moveable = options.moveable || DIALOG_DEFAULT_OPTION.moveable;
        this.content = options.content || DIALOG_DEFAULT_OPTION.content;
        this.showFooter = options.content || DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn = options.footerBtn || DIALOG_DEFAULT_OPTION.footerBtn;
        this.id = _cfIdGenerator2.default.uuid();
        this.create().show();
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
                });
            });
        }
    }, {
        key: 'then',
        value: function then(callback) {
            this.callback = callback;
        }
    }]);

    return Dialog;
}();

var dialog = function dialog(options) {
    return new Dialog(options);
};

exports.default = dialog;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/6/16 0016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 登入页面脚本,缓存
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _starEffect = __webpack_require__(14);

var _starEffect2 = _interopRequireDefault(_starEffect);

var _store = __webpack_require__(32);

var _cfDialog = __webpack_require__(40);

var _cfDialog2 = _interopRequireDefault(_cfDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
    function Login() {
        _classCallCheck(this, Login);
    }

    _createClass(Login, null, [{
        key: 'build',
        value: function build() {
            _starEffect2.default.instance(); //for background
            $("body").on("focus", "input", function () {
                $(".login-card").addClass("focus");
                $(this).parent(".input-box").addClass("focus");
            });
            $("body").on("blur", "input", function () {
                $(".login-card").removeClass("focus");
                $(this).parent(".input-box").removeClass("focus");
            });
            $("body").on("click", "#login", function () {
                var userName = $("#userName").val();
                var password = $("#password").val();
                if (!userName) {
                    (0, _cfDialog2.default)({
                        width: "200",
                        title: "输入提示",
                        content: "请输入用户名",
                        modal: false
                    }).then(function () {
                        this.close();
                    });
                } else if (!password) {
                    (0, _cfDialog2.default)({
                        width: "200",
                        title: "输入提示",
                        content: "请输入密码",
                        modal: false
                    }).then(function () {
                        this.close();
                    });
                }
            });
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo() {
            var user = _store.store.get("_user");
            if (user) {
                user = JSON.parse(user);
                $("#userName").val(user.userName);
                $("#password").val(user.password);
            }
        }
    }, {
        key: 'instance',
        value: function instance() {
            this.build();
            this.getUserInfo();
        }
    }]);

    return Login;
}();

Login.instance();

/***/ }),

/***/ 5:
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

/***/ 7:
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

/***/ })

/******/ });