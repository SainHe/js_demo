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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/layout.js":
/*!**********************************!*\
  !*** ./assets/scripts/layout.js ***!
  \**********************************/
/*! exports provided: getHeaderContents, getFooterContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderContents", function() { return getHeaderContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFooterContents", function() { return getFooterContents; });
var header = __webpack_require__(/*! tpl/layout/header.html */ "./views/template/layout/header.html");

var footer = __webpack_require__(/*! tpl/layout/footer.html */ "./views/template/layout/footer.html");

var __headerData = {
  title: '智库网',
  src: '../../vendors/images/logo.png'
};
var __footerData = {
  kxTitle: '中国科协技术学会',
  kxSrc: '../../vendors/images/footer-kx.jpg',
  zkTitle: '科协智库网',
  zkSrc: '../../vendors/images/footer-logo.jpg',
  content: '中国科学技术协会版权所有 京icp 备 10216604 号-4 海淀分局备案 1101084647'
};
var __header = {
  init: function init() {
    $('.l-header').html(header(__headerData));
  }
};
var __footer = {
  init: function init() {
    $('.l-footer').html(footer(__footerData));
  }
};
function getHeaderContents() {
  __header.init();
}
function getFooterContents() {
  __footer.init();
}

/***/ }),

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var runtime = Object.create(globalThis);
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
}

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
}

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./compile/runtime */ "./node_modules/art-template/lib/compile/runtime.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./views/layout/footer.html":
/*!**********************************!*\
  !*** ./views/layout/footer.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, kxSrc = $data.kxSrc, kxTitle = $data.kxTitle, zkSrc = $data.zkSrc, zkTitle = $data.zkTitle, content = $data.content;
    $$out += '<div class="w">\r\n    <div class="footer-left">\r\n        <img class="img-kx" src="';
    $$out += $escape(kxSrc);
    $$out += '" alt="';
    $$out += $escape(kxTitle);
    $$out += '">\r\n        <span></span>\r\n        <img class="img-zk" src="';
    $$out += $escape(zkSrc);
    $$out += '" alt="';
    $$out += $escape(zkTitle);
    $$out += '">\r\n    </div>\r\n    <div class="footer-right">\r\n        <a href="javascript:;">联系我们</a>\r\n        <span></span>\r\n        <p>';
    $$out += $escape(content);
    $$out += '</p>\r\n    </div>\r\n</div>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/layout/header.html":
/*!**********************************!*\
  !*** ./views/layout/header.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, src = $data.src, title = $data.title;
    $$out += '<div class="w">\r\n    <div class="logo">\r\n        <a href="/" class="logo-img">\r\n            <img src="';
    $$out += $escape(src);
    $$out += '" alt="';
    $$out += $escape(title);
    $$out += '">\r\n        </a>\r\n    </div>\r\n    <div class="m-search-box">\r\n        <input class="_keywords" type="text" placeholder="请输入要搜索的内容">\r\n        <a href="javascript:;" class="search-btn _searchBtn"></a>\r\n    </div>\r\n    <div class="m-min-account">\r\n        <div class="shortcut-login">\r\n            <a href="javascript:;">登录</a>\r\n            <span></span>\r\n            <a href="javascript:;">注册</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="l-main-nav" id="_globalNavBar">\r\n    <div class="w">\r\n        <a target="" class="" href="javascript:;">智库首页</a>\r\n        <a target="" class="" href="javascript:;">智库要闻</a>\r\n        <a target="" class="" href="javascript:;">智库成果</a>\r\n        <a target="" class="" href="javascript:;">舆情动态</a>\r\n        <a target="" class="" href="javascript:;">科技人物</a>\r\n        <a target="" class="" href="javascript:;">智库视频</a>\r\n        <a target="" class="" href="javascript:;">科技政策</a>\r\n        <a target="" class="" href="javascript:;">科情在线</a>\r\n        <a target="" class="" href="javascript:;">建言献策</a>\r\n    </div>\r\n</div>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/template/layout/footer.html":
/*!*******************************************!*\
  !*** ./views/template/layout/footer.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        };
    include(__webpack_require__(/*! ./../../layout/footer.html */ "./views/layout/footer.html")($data));
    $$out += '\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/template/layout/header.html":
/*!*******************************************!*\
  !*** ./views/template/layout/header.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $$blocks = arguments[1] || {}, include = function (content) {
            $$out += content;
            return $$out;
        };
    include(__webpack_require__(/*! ./../../layout/header.html */ "./views/layout/header.html")($data));
    $$out += '\r\n';
    return $$out;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xheW91dC9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvdGVtcGxhdGUvbGF5b3V0L2Zvb3Rlci5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2xheW91dC9oZWFkZXIuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL3NjcmlwdHMvbGF5b3V0LmpzXCIpO1xuIiwidmFyIGhlYWRlciA9IHJlcXVpcmUoXCJ0cGwvbGF5b3V0L2hlYWRlci5odG1sXCIpO1xuXG52YXIgZm9vdGVyID0gcmVxdWlyZShcInRwbC9sYXlvdXQvZm9vdGVyLmh0bWxcIik7XG5cbnZhciBfX2hlYWRlckRhdGEgPSB7XG4gIHRpdGxlOiAn5pm65bqT572RJyxcbiAgc3JjOiAnLi4vLi4vdmVuZG9ycy9pbWFnZXMvbG9nby5wbmcnXG59O1xudmFyIF9fZm9vdGVyRGF0YSA9IHtcbiAga3hUaXRsZTogJ+S4reWbveenkeWNj+aKgOacr+WtpuS8micsXG4gIGt4U3JjOiAnLi4vLi4vdmVuZG9ycy9pbWFnZXMvZm9vdGVyLWt4LmpwZycsXG4gIHprVGl0bGU6ICfnp5HljY/mmbrlupPnvZEnLFxuICB6a1NyYzogJy4uLy4uL3ZlbmRvcnMvaW1hZ2VzL2Zvb3Rlci1sb2dvLmpwZycsXG4gIGNvbnRlbnQ6ICfkuK3lm73np5HlrabmioDmnK/ljY/kvJrniYjmnYPmiYDmnIkg5LqsaWNwIOWkhyAxMDIxNjYwNCDlj7ctNCDmtbfmt4DliIblsYDlpIfmoYggMTEwMTA4NDY0Nydcbn07XG52YXIgX19oZWFkZXIgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmwtaGVhZGVyJykuaHRtbChoZWFkZXIoX19oZWFkZXJEYXRhKSk7XG4gIH1cbn07XG52YXIgX19mb290ZXIgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmwtZm9vdGVyJykuaHRtbChmb290ZXIoX19mb290ZXJEYXRhKSk7XG4gIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhZGVyQ29udGVudHMoKSB7XG4gIF9faGVhZGVyLmluaXQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb290ZXJDb250ZW50cygpIHtcbiAgX19mb290ZXIuaW5pdCgpO1xufSIsIid1c2Ugc3RyaWN0JztcblxuLyohIGFydC10ZW1wbGF0ZUBydW50aW1lIHwgaHR0cHM6Ly9naXRodWIuY29tL2F1aS9hcnQtdGVtcGxhdGUgKi9cblxudmFyIGdsb2JhbFRoaXMgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgcnVudGltZSA9IE9iamVjdC5jcmVhdGUoZ2xvYmFsVGhpcyk7XG52YXIgRVNDQVBFX1JFRyA9IC9bXCImJzw+XS87XG5cbi8qKlxuICog57yW56CB5qih5p2/6L6T5Ye655qE5YaF5a65XG4gKiBAcGFyYW0gIHthbnl9ICAgICAgICBjb250ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnJ1bnRpbWUuJGVzY2FwZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgcmV0dXJuIHhtbEVzY2FwZSh0b1N0cmluZyhjb250ZW50KSk7XG59O1xuXG4vKipcbiAqIOi/reS7o+WZqO+8jOaUr+aMgeaVsOe7hOS4juWvueixoVxuICogQHBhcmFtIHthcnJheXxPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICBjYWxsYmFja1xuICovXG5ydW50aW1lLiRlYWNoID0gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgX2kgaW4gZGF0YSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtfaV0sIF9pKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIOWwhuebruagh+i9rOaIkOWtl+esplxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdHJpbmcodmFsdWUuY2FsbCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIOe8lueggSBIVE1MIOWGheWuuVxuZnVuY3Rpb24geG1sRXNjYXBlKGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnICsgY29udGVudDtcbiAgICB2YXIgcmVnZXhSZXN1bHQgPSBFU0NBUEVfUkVHLmV4ZWMoaHRtbCk7XG4gICAgaWYgKCFyZWdleFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgIGxhc3RJbmRleCA9IHZvaWQgMCxcbiAgICAgICAgY2hhciA9IHZvaWQgMDtcbiAgICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM0Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzODsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzk7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYwOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MjsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21waWxlL3J1bnRpbWUnKTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgJGltcG9ydHMgPSByZXF1aXJlKFwiLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGFydC10ZW1wbGF0ZVxcXFxsaWJcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRkYXRhID0gJGRhdGEgfHwge307XG4gICAgdmFyICQkb3V0ID0gJycsICRlc2NhcGUgPSAkaW1wb3J0cy4kZXNjYXBlLCBreFNyYyA9ICRkYXRhLmt4U3JjLCBreFRpdGxlID0gJGRhdGEua3hUaXRsZSwgemtTcmMgPSAkZGF0YS56a1NyYywgemtUaXRsZSA9ICRkYXRhLnprVGl0bGUsIGNvbnRlbnQgPSAkZGF0YS5jb250ZW50O1xuICAgICQkb3V0ICs9ICc8ZGl2IGNsYXNzPVwid1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWxlZnRcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWcta3hcIiBzcmM9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoa3hTcmMpO1xuICAgICQkb3V0ICs9ICdcIiBhbHQ9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoa3hUaXRsZSk7XG4gICAgJCRvdXQgKz0gJ1wiPlxcclxcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cImltZy16a1wiIHNyYz1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZSh6a1NyYyk7XG4gICAgJCRvdXQgKz0gJ1wiIGFsdD1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZSh6a1RpdGxlKTtcbiAgICAkJG91dCArPSAnXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXJpZ2h0XCI+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+6IGU57O75oiR5LusPC9hPlxcclxcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgPHA+JztcbiAgICAkJG91dCArPSAkZXNjYXBlKGNvbnRlbnQpO1xuICAgICQkb3V0ICs9ICc8L3A+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiLCJ2YXIgJGltcG9ydHMgPSByZXF1aXJlKFwiLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGFydC10ZW1wbGF0ZVxcXFxsaWJcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRkYXRhID0gJGRhdGEgfHwge307XG4gICAgdmFyICQkb3V0ID0gJycsICRlc2NhcGUgPSAkaW1wb3J0cy4kZXNjYXBlLCBzcmMgPSAkZGF0YS5zcmMsIHRpdGxlID0gJGRhdGEudGl0bGU7XG4gICAgJCRvdXQgKz0gJzxkaXYgY2xhc3M9XCJ3XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XFxyXFxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwibG9nby1pbWdcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIHNyYz1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZShzcmMpO1xuICAgICQkb3V0ICs9ICdcIiBhbHQ9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUodGl0bGUpO1xuICAgICQkb3V0ICs9ICdcIj5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJtLXNlYXJjaC1ib3hcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cIl9rZXl3b3Jkc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXopoHmkJzntKLnmoTlhoXlrrlcIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cInNlYXJjaC1idG4gX3NlYXJjaEJ0blwiPjwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJtLW1pbi1hY2NvdW50XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcnRjdXQtbG9naW5cIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+55m75b2VPC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+5rOo5YaMPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XCJsLW1haW4tbmF2XCIgaWQ9XCJfZ2xvYmFsTmF2QmFyXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJ3XCI+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7mmbrlupPpppbpobU8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7mmbrlupPopoHpl7s8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7mmbrlupPmiJDmnpw8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7oiIbmg4XliqjmgIE8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7np5HmioDkurrniak8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7mmbrlupPop4bpopE8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7np5HmioDmlL/nrZY8L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7np5Hmg4XlnKjnur88L2E+XFxyXFxuICAgICAgICA8YSB0YXJnZXQ9XCJcIiBjbGFzcz1cIlwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7lu7roqIDnjK7nrZY8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiLCJ2YXIgJGltcG9ydHMgPSByZXF1aXJlKFwiLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGFydC10ZW1wbGF0ZVxcXFxsaWJcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRkYXRhID0gJGRhdGEgfHwge307XG4gICAgdmFyICQkb3V0ID0gJycsICQkYmxvY2tzID0gYXJndW1lbnRzWzFdIHx8IHt9LCBpbmNsdWRlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICQkb3V0ICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICByZXR1cm4gJCRvdXQ7XG4gICAgICAgIH07XG4gICAgaW5jbHVkZShyZXF1aXJlKCcuLy4uXFxcXC4uXFxcXGxheW91dFxcXFxmb290ZXIuaHRtbCcpKCRkYXRhKSk7XG4gICAgJCRvdXQgKz0gJ1xcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiLCJ2YXIgJGltcG9ydHMgPSByZXF1aXJlKFwiLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGFydC10ZW1wbGF0ZVxcXFxsaWJcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRkYXRhID0gJGRhdGEgfHwge307XG4gICAgdmFyICQkb3V0ID0gJycsICQkYmxvY2tzID0gYXJndW1lbnRzWzFdIHx8IHt9LCBpbmNsdWRlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICQkb3V0ICs9IGNvbnRlbnQ7XG4gICAgICAgICAgICByZXR1cm4gJCRvdXQ7XG4gICAgICAgIH07XG4gICAgaW5jbHVkZShyZXF1aXJlKCcuLy4uXFxcXC4uXFxcXGxheW91dFxcXFxoZWFkZXIuaHRtbCcpKCRkYXRhKSk7XG4gICAgJCRvdXQgKz0gJ1xcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9