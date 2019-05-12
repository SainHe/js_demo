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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/policy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/layout.js":
/*!**********************************!*\
  !*** ./assets/scripts/layout.js ***!
  \**********************************/
/*! exports provided: getHeaderContents, getNavigationContents, getFooterContents, getPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderContents", function() { return getHeaderContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNavigationContents", function() { return getNavigationContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFooterContents", function() { return getFooterContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagination", function() { return getPagination; });
var header = __webpack_require__(/*! tpl/layout/header.html */ "./views/template/layout/header.html");

var navigation = __webpack_require__(/*! tpl/layout/nav.html */ "./views/template/layout/nav.html");

var footer = __webpack_require__(/*! tpl/layout/footer.html */ "./views/template/layout/footer.html");

var pagination = __webpack_require__(/*! tpl/layout/pagination.html */ "./views/template/layout/pagination.html");

var __headerData = {
  title: '智库网',
  src: '../../vendors/images/logo.png'
};
var __footerData = {
  kxTitle: '中国科协技术学会',
  kxSrc: '../../vendors/images/footer-kx.png',
  zkTitle: '科协智库网',
  zkSrc: '../../vendors/images/footer-logo.png',
  content: '中国科学技术协会版权所有 京icp 备 10216604 号-4 海淀分局备案 1101084647'
}; // 头部

var __header = {
  init: function init() {
    $('.l-header').html(header(__headerData));
  }
}; // 导航

var __navigation = {
  init: function init() {
    $('.l-nav').html(navigation(null)); // 下拉菜单

    $('.nav-personage').on('mouseenter', function () {
      if (!$(this).is(":animated")) {
        $(this).find('.nav-second').slideDown(200);
      }
    }).on('mouseleave', function () {
      $(this).find('.nav-second').slideUp(200);
    });
  }
}; // 分页

var __pagination = {
  init: function init() {
    $('.m-pagination').html(pagination(null));
  }
}; // 页脚

var __footer = {
  init: function init() {
    $('.l-footer').html(footer(__footerData));
  }
};
function getHeaderContents() {
  __header.init();
}
function getNavigationContents() {
  __navigation.init();
}
function getFooterContents() {
  __footer.init();
}
function getPagination() {
  __pagination.init();
}

/***/ }),

/***/ "./assets/scripts/policy.js":
/*!**********************************!*\
  !*** ./assets/scripts/policy.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./assets/scripts/layout.js");
var $ajax = window.util.ajax;

var __policy = {
  init: function init() {
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getHeaderContents"])();
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getNavigationContents"])();
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getFooterContents"])();
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getPagination"])();
    $('._globalNavBar li').eq(8).addClass('active');
  }
};
$(function () {
  __policy.init();
});

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
    $$out += '">\r\n        </a>\r\n    </div>\r\n    <div class="m-search-box">\r\n        <input class="_keywords" type="text" placeholder="请输入要搜索的内容">\r\n        <a href="../search/index.html" class="search-btn _searchBtn"></a>\r\n    </div>\r\n    <div class="m-min-account">\r\n        <div class="shortcut-login">\r\n            <a href="javascript:;">登录</a>\r\n            <span></span>\r\n            <a href="javascript:;">注册</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/layout/nav.html":
/*!*******************************!*\
  !*** ./views/layout/nav.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="l-main-nav _globalNavBar">\r\n    <div class="w">\r\n        <ul>\r\n            <li class="nav-index">\r\n                <a href="../index/index.html"></a>\r\n            </li>\r\n            <li class="nav-news">\r\n                <a href="../news/index.html"></a>\r\n            </li>\r\n            <li class="nav-achievement">\r\n                <a href="../achievement/index.html"></a>\r\n            </li>\r\n            <li class="nav-dynamic">\r\n                <a href="../dynamic/index.html"></a>\r\n            </li>\r\n            <li class="nav-personage">\r\n                <a href="javascript:;"></a>\r\n                <i></i>\r\n                <ul class="nav-second">\r\n                    <li>\r\n                        <a href="../expert/index.html">战略专家库</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href="javascript:;">科学家精神</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class="nav-video">\r\n                <a href="javascript:;"></a>\r\n            </li>\r\n            <li class="nav-policy">\r\n                <a href="../policy/index.html"></a>\r\n            </li>\r\n            <li class="nav-online">\r\n                <a href="../online/index.html"></a>\r\n            </li>\r\n            <li class="nav-offeradvice">\r\n                <a href="javascript:;"></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/layout/pagination.html":
/*!**************************************!*\
  !*** ./views/layout/pagination.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<ul>\r\n    <li>\r\n        <a href="javascript:;">首页</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">上一页</a>\r\n    </li>\r\n    <li>\r\n        <a class="active" href="javascript:;">1</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">2</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">3</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">4</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">5</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">6</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">7</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">下一页</a>\r\n    </li>\r\n    <li>\r\n        <a href="javascript:;">尾页</a>\r\n    </li>\r\n    <span>共100页 转到</span>\r\n    <input type="text">\r\n    <span>页</span>\r\n    <input type="submit" name="" value="跳转">\r\n</ul>\r\n';
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

/***/ }),

/***/ "./views/template/layout/nav.html":
/*!****************************************!*\
  !*** ./views/template/layout/nav.html ***!
  \****************************************/
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
    include(__webpack_require__(/*! ./../../layout/nav.html */ "./views/layout/nav.html")($data));
    $$out += '\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/template/layout/pagination.html":
/*!***********************************************!*\
  !*** ./views/template/layout/pagination.html ***!
  \***********************************************/
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
    include(__webpack_require__(/*! ./../../layout/pagination.html */ "./views/layout/pagination.html")($data));
    $$out += '\r\n';
    return $$out;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWN5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9wb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvY29tcGlsZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnQtdGVtcGxhdGUvbGliL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbGF5b3V0L2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL2xheW91dC9uYXYuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvcGFnaW5hdGlvbi5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2xheW91dC9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy90ZW1wbGF0ZS9sYXlvdXQvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvdGVtcGxhdGUvbGF5b3V0L25hdi5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2xheW91dC9wYWdpbmF0aW9uLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zY3JpcHRzL3BvbGljeS5qc1wiKTtcbiIsInZhciBoZWFkZXIgPSByZXF1aXJlKFwidHBsL2xheW91dC9oZWFkZXIuaHRtbFwiKTtcblxudmFyIG5hdmlnYXRpb24gPSByZXF1aXJlKFwidHBsL2xheW91dC9uYXYuaHRtbFwiKTtcblxudmFyIGZvb3RlciA9IHJlcXVpcmUoXCJ0cGwvbGF5b3V0L2Zvb3Rlci5odG1sXCIpO1xuXG52YXIgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCJ0cGwvbGF5b3V0L3BhZ2luYXRpb24uaHRtbFwiKTtcblxudmFyIF9faGVhZGVyRGF0YSA9IHtcbiAgdGl0bGU6ICfmmbrlupPnvZEnLFxuICBzcmM6ICcuLi8uLi92ZW5kb3JzL2ltYWdlcy9sb2dvLnBuZydcbn07XG52YXIgX19mb290ZXJEYXRhID0ge1xuICBreFRpdGxlOiAn5Lit5Zu956eR5Y2P5oqA5pyv5a2m5LyaJyxcbiAga3hTcmM6ICcuLi8uLi92ZW5kb3JzL2ltYWdlcy9mb290ZXIta3gucG5nJyxcbiAgemtUaXRsZTogJ+enkeWNj+aZuuW6k+e9kScsXG4gIHprU3JjOiAnLi4vLi4vdmVuZG9ycy9pbWFnZXMvZm9vdGVyLWxvZ28ucG5nJyxcbiAgY29udGVudDogJ+S4reWbveenkeWtpuaKgOacr+WNj+S8mueJiOadg+aJgOaciSDkuqxpY3Ag5aSHIDEwMjE2NjA0IOWPty00IOa1t+a3gOWIhuWxgOWkh+ahiCAxMTAxMDg0NjQ3J1xufTsgLy8g5aS06YOoXG5cbnZhciBfX2hlYWRlciA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcubC1oZWFkZXInKS5odG1sKGhlYWRlcihfX2hlYWRlckRhdGEpKTtcbiAgfVxufTsgLy8g5a+86IiqXG5cbnZhciBfX25hdmlnYXRpb24gPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmwtbmF2JykuaHRtbChuYXZpZ2F0aW9uKG51bGwpKTsgLy8g5LiL5ouJ6I+c5Y2VXG5cbiAgICAkKCcubmF2LXBlcnNvbmFnZScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEkKHRoaXMpLmlzKFwiOmFuaW1hdGVkXCIpKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLm5hdi1zZWNvbmQnKS5zbGlkZURvd24oMjAwKTtcbiAgICAgIH1cbiAgICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuZmluZCgnLm5hdi1zZWNvbmQnKS5zbGlkZVVwKDIwMCk7XG4gICAgfSk7XG4gIH1cbn07IC8vIOWIhumhtVxuXG52YXIgX19wYWdpbmF0aW9uID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJy5tLXBhZ2luYXRpb24nKS5odG1sKHBhZ2luYXRpb24obnVsbCkpO1xuICB9XG59OyAvLyDpobXohJpcblxudmFyIF9fZm9vdGVyID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJy5sLWZvb3RlcicpLmh0bWwoZm9vdGVyKF9fZm9vdGVyRGF0YSkpO1xuICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlckNvbnRlbnRzKCkge1xuICBfX2hlYWRlci5pbml0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF2aWdhdGlvbkNvbnRlbnRzKCkge1xuICBfX25hdmlnYXRpb24uaW5pdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvb3RlckNvbnRlbnRzKCkge1xuICBfX2Zvb3Rlci5pbml0KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbigpIHtcbiAgX19wYWdpbmF0aW9uLmluaXQoKTtcbn0iLCJ2YXIgJGFqYXggPSB3aW5kb3cudXRpbC5hamF4O1xuaW1wb3J0IHsgZ2V0SGVhZGVyQ29udGVudHMsIGdldEZvb3RlckNvbnRlbnRzLCBnZXROYXZpZ2F0aW9uQ29udGVudHMsIGdldFBhZ2luYXRpb24gfSBmcm9tICcuL2xheW91dC5qcyc7XG52YXIgX19wb2xpY3kgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZ2V0SGVhZGVyQ29udGVudHMoKTtcbiAgICBnZXROYXZpZ2F0aW9uQ29udGVudHMoKTtcbiAgICBnZXRGb290ZXJDb250ZW50cygpO1xuICAgIGdldFBhZ2luYXRpb24oKTtcbiAgICAkKCcuX2dsb2JhbE5hdkJhciBsaScpLmVxKDgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfVxufTtcbiQoZnVuY3Rpb24gKCkge1xuICBfX3BvbGljeS5pbml0KCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbi8qISBhcnQtdGVtcGxhdGVAcnVudGltZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG5cbnZhciBnbG9iYWxUaGlzID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIHJ1bnRpbWUgPSBPYmplY3QuY3JlYXRlKGdsb2JhbFRoaXMpO1xudmFyIEVTQ0FQRV9SRUcgPSAvW1wiJic8Pl0vO1xuXG4vKipcbiAqIOe8lueggeaooeadv+i+k+WHuueahOWGheWuuVxuICogQHBhcmFtICB7YW55fSAgICAgICAgY29udGVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5ydW50aW1lLiRlc2NhcGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgIHJldHVybiB4bWxFc2NhcGUodG9TdHJpbmcoY29udGVudCkpO1xufTtcblxuLyoqXG4gKiDov63ku6PlmajvvIzmlK/mjIHmlbDnu4TkuI7lr7nosaFcbiAqIEBwYXJhbSB7YXJyYXl8T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgY2FsbGJhY2tcbiAqL1xucnVudGltZS4kZWFjaCA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbX2ldLCBfaSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyDlsIbnm67moIfovazmiJDlrZfnrKZcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhbHVlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyDnvJbnoIEgSFRNTCDlhoXlrrlcbmZ1bmN0aW9uIHhtbEVzY2FwZShjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSAnJyArIGNvbnRlbnQ7XG4gICAgdmFyIHJlZ2V4UmVzdWx0ID0gRVNDQVBFX1JFRy5leGVjKGh0bWwpO1xuICAgIGlmICghcmVnZXhSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBsYXN0SW5kZXggPSB2b2lkIDAsXG4gICAgICAgIGNoYXIgPSB2b2lkIDA7XG4gICAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzNDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzg7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM5Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjI7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcGlsZS9ydW50aW1lJyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkZXNjYXBlID0gJGltcG9ydHMuJGVzY2FwZSwga3hTcmMgPSAkZGF0YS5reFNyYywga3hUaXRsZSA9ICRkYXRhLmt4VGl0bGUsIHprU3JjID0gJGRhdGEuemtTcmMsIHprVGl0bGUgPSAkZGF0YS56a1RpdGxlLCBjb250ZW50ID0gJGRhdGEuY29udGVudDtcbiAgICAkJG91dCArPSAnPGRpdiBjbGFzcz1cIndcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1sZWZ0XCI+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWt4XCIgc3JjPVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKGt4U3JjKTtcbiAgICAkJG91dCArPSAnXCIgYWx0PVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKGt4VGl0bGUpO1xuICAgICQkb3V0ICs9ICdcIj5cXHJcXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWctemtcIiBzcmM9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoemtTcmMpO1xuICAgICQkb3V0ICs9ICdcIiBhbHQ9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoemtUaXRsZSk7XG4gICAgJCRvdXQgKz0gJ1wiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1yaWdodFwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPuiBlOezu+aIkeS7rDwvYT5cXHJcXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgIDxwPic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZShjb250ZW50KTtcbiAgICAkJG91dCArPSAnPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkZXNjYXBlID0gJGltcG9ydHMuJGVzY2FwZSwgc3JjID0gJGRhdGEuc3JjLCB0aXRsZSA9ICRkYXRhLnRpdGxlO1xuICAgICQkb3V0ICs9ICc8ZGl2IGNsYXNzPVwid1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImxvZ28taW1nXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XCInO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoc3JjKTtcbiAgICAkJG91dCArPSAnXCIgYWx0PVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKHRpdGxlKTtcbiAgICAkJG91dCArPSAnXCI+XFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwibS1zZWFyY2gtYm94XCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJfa2V5d29yZHNcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6KaB5pCc57Si55qE5YaF5a65XCI+XFxyXFxuICAgICAgICA8YSBocmVmPVwiLi4vc2VhcmNoL2luZGV4Lmh0bWxcIiBjbGFzcz1cInNlYXJjaC1idG4gX3NlYXJjaEJ0blwiPjwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJtLW1pbi1hY2NvdW50XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcnRjdXQtbG9naW5cIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+55m75b2VPC9hPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+5rOo5YaMPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiLCJ2YXIgJGltcG9ydHMgPSByZXF1aXJlKFwiLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGFydC10ZW1wbGF0ZVxcXFxsaWJcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgICRkYXRhID0gJGRhdGEgfHwge307XG4gICAgdmFyICQkb3V0ID0gJyc7XG4gICAgJCRvdXQgKz0gJzxkaXYgY2xhc3M9XCJsLW1haW4tbmF2IF9nbG9iYWxOYXZCYXJcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cIndcIj5cXHJcXG4gICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaW5kZXhcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2luZGV4L2luZGV4Lmh0bWxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbmV3c1wiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vbmV3cy9pbmRleC5odG1sXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWFjaGlldmVtZW50XCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9hY2hpZXZlbWVudC9pbmRleC5odG1sXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWR5bmFtaWNcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2R5bmFtaWMvaW5kZXguaHRtbFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1wZXJzb25hZ2VcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGk+PC9pPlxcclxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtc2Vjb25kXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2V4cGVydC9pbmRleC5odG1sXCI+5oiY55Wl5LiT5a625bqTPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+56eR5a2m5a6257K+56WePC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi12aWRlb1wiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LXBvbGljeVwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vcG9saWN5L2luZGV4Lmh0bWxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtb25saW5lXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9vbmxpbmUvaW5kZXguaHRtbFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1vZmZlcmFkdmljZVwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnO1xuICAgICQkb3V0ICs9ICc8dWw+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7pppbpobU8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7kuIrkuIDpobU8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVwiYWN0aXZlXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjE8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4yPC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+MzwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjQ8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj41PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+NjwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjc8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7kuIvkuIDpobU8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7lsL7pobU8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxzcGFuPuWFsTEwMOmhtSDovazliLA8L3NwYW4+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxcclxcbiAgICA8c3Bhbj7pobU8L3NwYW4+XFxyXFxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cIlwiIHZhbHVlPVwi6Lez6L2sXCI+XFxyXFxuPC91bD5cXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkJGJsb2NrcyA9IGFyZ3VtZW50c1sxXSB8fCB7fSwgaW5jbHVkZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAkJG91dCArPSBjb250ZW50O1xuICAgICAgICAgICAgcmV0dXJuICQkb3V0O1xuICAgICAgICB9O1xuICAgIGluY2x1ZGUocmVxdWlyZSgnLi8uLlxcXFwuLlxcXFxsYXlvdXRcXFxcZm9vdGVyLmh0bWwnKSgkZGF0YSkpO1xuICAgICQkb3V0ICs9ICdcXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkJGJsb2NrcyA9IGFyZ3VtZW50c1sxXSB8fCB7fSwgaW5jbHVkZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAkJG91dCArPSBjb250ZW50O1xuICAgICAgICAgICAgcmV0dXJuICQkb3V0O1xuICAgICAgICB9O1xuICAgIGluY2x1ZGUocmVxdWlyZSgnLi8uLlxcXFwuLlxcXFxsYXlvdXRcXFxcaGVhZGVyLmh0bWwnKSgkZGF0YSkpO1xuICAgICQkb3V0ICs9ICdcXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkJGJsb2NrcyA9IGFyZ3VtZW50c1sxXSB8fCB7fSwgaW5jbHVkZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAkJG91dCArPSBjb250ZW50O1xuICAgICAgICAgICAgcmV0dXJuICQkb3V0O1xuICAgICAgICB9O1xuICAgIGluY2x1ZGUocmVxdWlyZSgnLi8uLlxcXFwuLlxcXFxsYXlvdXRcXFxcbmF2Lmh0bWwnKSgkZGF0YSkpO1xuICAgICQkb3V0ICs9ICdcXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnLCAkJGJsb2NrcyA9IGFyZ3VtZW50c1sxXSB8fCB7fSwgaW5jbHVkZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAkJG91dCArPSBjb250ZW50O1xuICAgICAgICAgICAgcmV0dXJuICQkb3V0O1xuICAgICAgICB9O1xuICAgIGluY2x1ZGUocmVxdWlyZSgnLi8uLlxcXFwuLlxcXFxsYXlvdXRcXFxccGFnaW5hdGlvbi5odG1sJykoJGRhdGEpKTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=