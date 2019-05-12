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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/expert.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/expert.js":
/*!**********************************!*\
  !*** ./assets/scripts/expert.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./assets/scripts/layout.js");
var $ajax = window.util.ajax;

var __expert = {
  init: function init() {
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getHeaderContents"])();
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getNavigationContents"])();
    Object(_layout_js__WEBPACK_IMPORTED_MODULE_0__["getFooterContents"])();
    $('._globalNavBar li').eq(4).addClass('active');
    this.tabControlExpert();
    this.expertSearch();
  },
  // 专家库选项卡
  tabControlExpert: function tabControlExpert() {
    $('.column-expert-nav li').on('click', function () {
      if ($(this).index() == 0) {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.expert-list').show();
      } else {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.expert-list').eq($(this).index() - 1).show().siblings('.expert-list').hide();
      }
    });
  },
  // 专家库搜索
  expertSearch: function expertSearch() {
    $('._searchExpert').on('click', function () {
      var searchText = $('._searchKeyword').val();
      var exist = false; // 记录所有列表是否存在关键词

      if (!searchText) {
        $('.expert-list').show();
        $('.expert-list li').show();
        return;
      }

      $('.expert-list').each(function () //遍历
      {
        // 把之前搜索隐藏的都显示
        $(this).show();
        $(this).find('li').show(); // 判断每个列表里是否包含关键字的专家

        if ($(this).text().indexOf(searchText) > -1) {
          exist = true; // 如果列表内存在，继续查找

          $(this).find('li').each(function () {
            if ($(this).text().indexOf(searchText) > -1) {} else {
              $(this).hide();
            }
          });
        } else {
          // 不包含关键字的列表隐藏
          $(this).hide();
          $(this).find('li').hide();
        }
      });
      exist ? $('.u-notfound').hide() : $('.u-notfound').show();
    });
  }
};
$(function () {
  __expert.init();
});

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJ0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2V4cGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvY29tcGlsZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnQtdGVtcGxhdGUvbGliL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbGF5b3V0L2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL2xheW91dC9uYXYuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvcGFnaW5hdGlvbi5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2xheW91dC9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy90ZW1wbGF0ZS9sYXlvdXQvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvdGVtcGxhdGUvbGF5b3V0L25hdi5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2xheW91dC9wYWdpbmF0aW9uLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zY3JpcHRzL2V4cGVydC5qc1wiKTtcbiIsInZhciAkYWpheCA9IHdpbmRvdy51dGlsLmFqYXg7XG5pbXBvcnQgeyBnZXRIZWFkZXJDb250ZW50cywgZ2V0Rm9vdGVyQ29udGVudHMsIGdldE5hdmlnYXRpb25Db250ZW50cyB9IGZyb20gJy4vbGF5b3V0LmpzJztcbnZhciBfX2V4cGVydCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBnZXRIZWFkZXJDb250ZW50cygpO1xuICAgIGdldE5hdmlnYXRpb25Db250ZW50cygpO1xuICAgIGdldEZvb3RlckNvbnRlbnRzKCk7XG4gICAgJCgnLl9nbG9iYWxOYXZCYXIgbGknKS5lcSg0KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgdGhpcy50YWJDb250cm9sRXhwZXJ0KCk7XG4gICAgdGhpcy5leHBlcnRTZWFyY2goKTtcbiAgfSxcbiAgLy8g5LiT5a625bqT6YCJ6aG55Y2hXG4gIHRhYkNvbnRyb2xFeHBlcnQ6IGZ1bmN0aW9uIHRhYkNvbnRyb2xFeHBlcnQoKSB7XG4gICAgJCgnLmNvbHVtbi1leHBlcnQtbmF2IGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcykuaW5kZXgoKSA9PSAwKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmV4cGVydC1saXN0Jykuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcuZXhwZXJ0LWxpc3QnKS5lcSgkKHRoaXMpLmluZGV4KCkgLSAxKS5zaG93KCkuc2libGluZ3MoJy5leHBlcnQtbGlzdCcpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgLy8g5LiT5a625bqT5pCc57SiXG4gIGV4cGVydFNlYXJjaDogZnVuY3Rpb24gZXhwZXJ0U2VhcmNoKCkge1xuICAgICQoJy5fc2VhcmNoRXhwZXJ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlYXJjaFRleHQgPSAkKCcuX3NlYXJjaEtleXdvcmQnKS52YWwoKTtcbiAgICAgIHZhciBleGlzdCA9IGZhbHNlOyAvLyDorrDlvZXmiYDmnInliJfooajmmK/lkKblrZjlnKjlhbPplK7or41cblxuICAgICAgaWYgKCFzZWFyY2hUZXh0KSB7XG4gICAgICAgICQoJy5leHBlcnQtbGlzdCcpLnNob3coKTtcbiAgICAgICAgJCgnLmV4cGVydC1saXN0IGxpJykuc2hvdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICQoJy5leHBlcnQtbGlzdCcpLmVhY2goZnVuY3Rpb24gKCkgLy/pgY3ljoZcbiAgICAgIHtcbiAgICAgICAgLy8g5oqK5LmL5YmN5pCc57Si6ZqQ6JeP55qE6YO95pi+56S6XG4gICAgICAgICQodGhpcykuc2hvdygpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2xpJykuc2hvdygpOyAvLyDliKTmlq3mr4/kuKrliJfooajph4zmmK/lkKbljIXlkKvlhbPplK7lrZfnmoTkuJPlrrZcblxuICAgICAgICBpZiAoJCh0aGlzKS50ZXh0KCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgZXhpc3QgPSB0cnVlOyAvLyDlpoLmnpzliJfooajlhoXlrZjlnKjvvIznu6fnu63mn6Xmib5cblxuICAgICAgICAgICQodGhpcykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnRleHQoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDkuI3ljIXlkKvlhbPplK7lrZfnmoTliJfooajpmpDol49cbiAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2xpJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGV4aXN0ID8gJCgnLnUtbm90Zm91bmQnKS5oaWRlKCkgOiAkKCcudS1ub3Rmb3VuZCcpLnNob3coKTtcbiAgICB9KTtcbiAgfVxufTtcbiQoZnVuY3Rpb24gKCkge1xuICBfX2V4cGVydC5pbml0KCk7XG59KTsiLCJ2YXIgaGVhZGVyID0gcmVxdWlyZShcInRwbC9sYXlvdXQvaGVhZGVyLmh0bWxcIik7XG5cbnZhciBuYXZpZ2F0aW9uID0gcmVxdWlyZShcInRwbC9sYXlvdXQvbmF2Lmh0bWxcIik7XG5cbnZhciBmb290ZXIgPSByZXF1aXJlKFwidHBsL2xheW91dC9mb290ZXIuaHRtbFwiKTtcblxudmFyIHBhZ2luYXRpb24gPSByZXF1aXJlKFwidHBsL2xheW91dC9wYWdpbmF0aW9uLmh0bWxcIik7XG5cbnZhciBfX2hlYWRlckRhdGEgPSB7XG4gIHRpdGxlOiAn5pm65bqT572RJyxcbiAgc3JjOiAnLi4vLi4vdmVuZG9ycy9pbWFnZXMvbG9nby5wbmcnXG59O1xudmFyIF9fZm9vdGVyRGF0YSA9IHtcbiAga3hUaXRsZTogJ+S4reWbveenkeWNj+aKgOacr+WtpuS8micsXG4gIGt4U3JjOiAnLi4vLi4vdmVuZG9ycy9pbWFnZXMvZm9vdGVyLWt4LnBuZycsXG4gIHprVGl0bGU6ICfnp5HljY/mmbrlupPnvZEnLFxuICB6a1NyYzogJy4uLy4uL3ZlbmRvcnMvaW1hZ2VzL2Zvb3Rlci1sb2dvLnBuZycsXG4gIGNvbnRlbnQ6ICfkuK3lm73np5HlrabmioDmnK/ljY/kvJrniYjmnYPmiYDmnIkg5LqsaWNwIOWkhyAxMDIxNjYwNCDlj7ctNCDmtbfmt4DliIblsYDlpIfmoYggMTEwMTA4NDY0Nydcbn07IC8vIOWktOmDqFxuXG52YXIgX19oZWFkZXIgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgJCgnLmwtaGVhZGVyJykuaHRtbChoZWFkZXIoX19oZWFkZXJEYXRhKSk7XG4gIH1cbn07IC8vIOWvvOiIqlxuXG52YXIgX19uYXZpZ2F0aW9uID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICQoJy5sLW5hdicpLmh0bWwobmF2aWdhdGlvbihudWxsKSk7IC8vIOS4i+aLieiPnOWNlVxuXG4gICAgJCgnLm5hdi1wZXJzb25hZ2UnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghJCh0aGlzKS5pcyhcIjphbmltYXRlZFwiKSkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5uYXYtc2Vjb25kJykuc2xpZGVEb3duKDIwMCk7XG4gICAgICB9XG4gICAgfSkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5uYXYtc2Vjb25kJykuc2xpZGVVcCgyMDApO1xuICAgIH0pO1xuICB9XG59OyAvLyDliIbpobVcblxudmFyIF9fcGFnaW5hdGlvbiA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcubS1wYWdpbmF0aW9uJykuaHRtbChwYWdpbmF0aW9uKG51bGwpKTtcbiAgfVxufTsgLy8g6aG16ISaXG5cbnZhciBfX2Zvb3RlciA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAkKCcubC1mb290ZXInKS5odG1sKGZvb3RlcihfX2Zvb3RlckRhdGEpKTtcbiAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXJDb250ZW50cygpIHtcbiAgX19oZWFkZXIuaW5pdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdmlnYXRpb25Db250ZW50cygpIHtcbiAgX19uYXZpZ2F0aW9uLmluaXQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb290ZXJDb250ZW50cygpIHtcbiAgX19mb290ZXIuaW5pdCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhZ2luYXRpb24oKSB7XG4gIF9fcGFnaW5hdGlvbi5pbml0KCk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiEgYXJ0LXRlbXBsYXRlQHJ1bnRpbWUgfCBodHRwczovL2dpdGh1Yi5jb20vYXVpL2FydC10ZW1wbGF0ZSAqL1xuXG52YXIgZ2xvYmFsVGhpcyA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBydW50aW1lID0gT2JqZWN0LmNyZWF0ZShnbG9iYWxUaGlzKTtcbnZhciBFU0NBUEVfUkVHID0gL1tcIiYnPD5dLztcblxuLyoqXG4gKiDnvJbnoIHmqKHmnb/ovpPlh7rnmoTlhoXlrrlcbiAqIEBwYXJhbSAge2FueX0gICAgICAgIGNvbnRlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucnVudGltZS4kZXNjYXBlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICByZXR1cm4geG1sRXNjYXBlKHRvU3RyaW5nKGNvbnRlbnQpKTtcbn07XG5cbi8qKlxuICog6L+t5Luj5Zmo77yM5pSv5oyB5pWw57uE5LiO5a+56LGhXG4gKiBAcGFyYW0ge2FycmF5fE9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbn0gICAgIGNhbGxiYWNrXG4gKi9cbnJ1bnRpbWUuJGVhY2ggPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBfaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW19pXSwgX2kpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8g5bCG55uu5qCH6L2s5oiQ5a2X56ymXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0cmluZyh2YWx1ZS5jYWxsKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8g57yW56CBIEhUTUwg5YaF5a65XG5mdW5jdGlvbiB4bWxFc2NhcGUoY29udGVudCkge1xuICAgIHZhciBodG1sID0gJycgKyBjb250ZW50O1xuICAgIHZhciByZWdleFJlc3VsdCA9IEVTQ0FQRV9SRUcuZXhlYyhodG1sKTtcbiAgICBpZiAoIXJlZ2V4UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgbGFzdEluZGV4ID0gdm9pZCAwLFxuICAgICAgICBjaGFyID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzQ7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM4Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzOTsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjA7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYyOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXI7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBpbGUvcnVudGltZScpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJGVzY2FwZSA9ICRpbXBvcnRzLiRlc2NhcGUsIGt4U3JjID0gJGRhdGEua3hTcmMsIGt4VGl0bGUgPSAkZGF0YS5reFRpdGxlLCB6a1NyYyA9ICRkYXRhLnprU3JjLCB6a1RpdGxlID0gJGRhdGEuemtUaXRsZSwgY29udGVudCA9ICRkYXRhLmNvbnRlbnQ7XG4gICAgJCRvdXQgKz0gJzxkaXYgY2xhc3M9XCJ3XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItbGVmdFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cImltZy1reFwiIHNyYz1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZShreFNyYyk7XG4gICAgJCRvdXQgKz0gJ1wiIGFsdD1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZShreFRpdGxlKTtcbiAgICAkJG91dCArPSAnXCI+XFxyXFxuICAgICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXprXCIgc3JjPVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKHprU3JjKTtcbiAgICAkJG91dCArPSAnXCIgYWx0PVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKHprVGl0bGUpO1xuICAgICQkb3V0ICs9ICdcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmlnaHRcIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj7ogZTns7vmiJHku6w8L2E+XFxyXFxuICAgICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICA8cD4nO1xuICAgICQkb3V0ICs9ICRlc2NhcGUoY29udGVudCk7XG4gICAgJCRvdXQgKz0gJzwvcD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJGVzY2FwZSA9ICRpbXBvcnRzLiRlc2NhcGUsIHNyYyA9ICRkYXRhLnNyYywgdGl0bGUgPSAkZGF0YS50aXRsZTtcbiAgICAkJG91dCArPSAnPGRpdiBjbGFzcz1cIndcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJsb2dvLWltZ1wiPlxcclxcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJztcbiAgICAkJG91dCArPSAkZXNjYXBlKHNyYyk7XG4gICAgJCRvdXQgKz0gJ1wiIGFsdD1cIic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZSh0aXRsZSk7XG4gICAgJCRvdXQgKz0gJ1wiPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cIm0tc2VhcmNoLWJveFwiPlxcclxcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiX2tleXdvcmRzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeimgeaQnOe0oueahOWGheWuuVwiPlxcclxcbiAgICAgICAgPGEgaHJlZj1cIi4uL3NlYXJjaC9pbmRleC5odG1sXCIgY2xhc3M9XCJzZWFyY2gtYnRuIF9zZWFyY2hCdG5cIj48L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwibS1taW4tYWNjb3VudFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3J0Y3V0LWxvZ2luXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPueZu+W9lTwvYT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPuazqOWGjDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4nO1xuICAgIHJldHVybiAkJG91dDtcbn07IiwidmFyICRpbXBvcnRzID0gcmVxdWlyZShcIi4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxhcnQtdGVtcGxhdGVcXFxcbGliXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkZGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAkZGF0YSA9ICRkYXRhIHx8IHt9O1xuICAgIHZhciAkJG91dCA9ICcnO1xuICAgICQkb3V0ICs9ICc8ZGl2IGNsYXNzPVwibC1tYWluLW5hdiBfZ2xvYmFsTmF2QmFyXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJ3XCI+XFxyXFxuICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWluZGV4XCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9pbmRleC9pbmRleC5odG1sXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LW5ld3NcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL25ld3MvaW5kZXguaHRtbFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1hY2hpZXZlbWVudFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vYWNoaWV2ZW1lbnQvaW5kZXguaHRtbFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1keW5hbWljXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9keW5hbWljL2luZGV4Lmh0bWxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtcGVyc29uYWdlXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxpPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2LXNlY29uZFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9leHBlcnQvaW5kZXguaHRtbFwiPuaImOeVpeS4k+WutuW6kzwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPuenkeWtpuWutueyvuelnjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtdmlkZW9cIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1wb2xpY3lcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi4uL3BvbGljeS9pbmRleC5odG1sXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LW9ubGluZVwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLi4vb25saW5lL2luZGV4Lmh0bWxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtb2ZmZXJhZHZpY2VcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJztcbiAgICAkJG91dCArPSAnPHVsPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+6aaW6aG1PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+5LiK5LiA6aG1PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cImFjdGl2ZVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4xPC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+MjwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjM8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj40PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+NTwvYT5cXHJcXG4gICAgPC9saT5cXHJcXG4gICAgPGxpPlxcclxcbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjY8L2E+XFxyXFxuICAgIDwvbGk+XFxyXFxuICAgIDxsaT5cXHJcXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj43PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+5LiL5LiA6aG1PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+5bC+6aG1PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbiAgICA8c3Bhbj7lhbExMDDpobUg6L2s5YiwPC9zcGFuPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cXHJcXG4gICAgPHNwYW4+6aG1PC9zcGFuPlxcclxcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJcIiB2YWx1ZT1cIui3s+i9rFwiPlxcclxcbjwvdWw+XFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJCRibG9ja3MgPSBhcmd1bWVudHNbMV0gfHwge30sIGluY2x1ZGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgJCRvdXQgKz0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkJG91dDtcbiAgICAgICAgfTtcbiAgICBpbmNsdWRlKHJlcXVpcmUoJy4vLi5cXFxcLi5cXFxcbGF5b3V0XFxcXGZvb3Rlci5odG1sJykoJGRhdGEpKTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJCRibG9ja3MgPSBhcmd1bWVudHNbMV0gfHwge30sIGluY2x1ZGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgJCRvdXQgKz0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkJG91dDtcbiAgICAgICAgfTtcbiAgICBpbmNsdWRlKHJlcXVpcmUoJy4vLi5cXFxcLi5cXFxcbGF5b3V0XFxcXGhlYWRlci5odG1sJykoJGRhdGEpKTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJCRibG9ja3MgPSBhcmd1bWVudHNbMV0gfHwge30sIGluY2x1ZGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgJCRvdXQgKz0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkJG91dDtcbiAgICAgICAgfTtcbiAgICBpbmNsdWRlKHJlcXVpcmUoJy4vLi5cXFxcLi5cXFxcbGF5b3V0XFxcXG5hdi5odG1sJykoJGRhdGEpKTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJCRibG9ja3MgPSBhcmd1bWVudHNbMV0gfHwge30sIGluY2x1ZGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgJCRvdXQgKz0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkJG91dDtcbiAgICAgICAgfTtcbiAgICBpbmNsdWRlKHJlcXVpcmUoJy4vLi5cXFxcLi5cXFxcbGF5b3V0XFxcXHBhZ2luYXRpb24uaHRtbCcpKCRkYXRhKSk7XG4gICAgJCRvdXQgKz0gJ1xcclxcbic7XG4gICAgcmV0dXJuICQkb3V0O1xufTsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==