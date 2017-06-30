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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ({

/***/ 29:
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
 * optimize by yanxlg : optimize at firefox
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
            function IsMobile() {
                return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone|iPad)/ig);
            }
            var num = !IsMobile() ? 300 : 100;
            var w = window.innerWidth;
            var h = window.innerHeight;
            var max = 1000;
            var _x = 0;
            var _y = 0;
            var _z = 150;
            var dtr = function dtr(d) {
                return d * Math.PI / 180;
            };
            var rnd = function rnd() {
                return Math.sin(Math.floor(Math.random() * 360) * Math.PI / 180);
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

                var threeD = function () {
                    function threeD(param) {
                        _classCallCheck(this, threeD);

                        this.transIn = {};
                        this.transOut = {};
                        this.transIn.vtx = param.vtx;
                        this.transIn.sz = param.sz;
                        this.transIn.rot = param.rot;
                        this.transIn.pos = param.pos;
                    }

                    _createClass(threeD, [{
                        key: "vupd",
                        value: function vupd() {
                            this.transOut = trans.steps(this.transIn.vtx, this.transIn.sz, this.transIn.rot, this.transIn.pos, cam.disp);
                        }
                    }]);

                    return threeD;
                }();

                var Build = function () {
                    function Build() {
                        _classCallCheck(this, Build);

                        this.vel = 0.04;
                        this.lim = 360;
                        this.diff = 200;
                        this.initPos = 100;
                        this.toX = _x;
                        this.toY = _y;
                        this.go();
                    }

                    _createClass(Build, [{
                        key: "go",
                        value: function go() {
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
                        }
                    }, {
                        key: "add",
                        value: function add() {
                            if (this.letr.length >= max) return;
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
                        }
                    }, {
                        key: "upd",
                        value: function upd() {
                            cam.obj.x += (this.toX - cam.obj.x) * 0.05;
                            cam.obj.y += (this.toY - cam.obj.y) * 0.05;
                        }
                    }, {
                        key: "draw",
                        value: function draw() {
                            this.canvas.width = window.innerWidth;
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
                        }
                    }, {
                        key: "anim",
                        value: function anim() {
                            //火狐兼容性调整
                            window.requestAnimationFrame = function () {
                                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                                    window.setTimeout(callback, 1000 / 60);
                                };
                            }();
                            var anim = function () {
                                this.upd();
                                this.draw();
                                window.requestAnimationFrame(anim);
                            }.bind(this);
                            window.requestAnimationFrame(anim);
                        }
                    }, {
                        key: "run",
                        value: function run() {
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
                        }
                    }]);

                    return Build;
                }();

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

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _starEffect = __webpack_require__(29);

var _starEffect2 = _interopRequireDefault(_starEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_starEffect2.default.instance(); /**
                                  * Created by yanxlg on 2017/6/16 0016.
                                  */

/***/ })

/******/ });