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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

/***/ 13:
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

/***/ 9:
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

/***/ })

/******/ });