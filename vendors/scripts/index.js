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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/index.js":
/*!*********************************!*\
  !*** ./assets/scripts/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const header = __webpack_require__(/*! tpl/layout/header.html */ "./views/template/layout/header.html");

const data = __webpack_require__(/*! tpl/index/data.html */ "./views/template/index/data.html");

const list = __webpack_require__(/*! tpl/index/list.html */ "./views/template/index/list.html");

const $ajax = window.util.ajax;
const __data = {
  title: '测试',
  content: '数据1'
};
const __list = [{
  title: '标题111',
  content: '内容111内容111内容111内容111内容111内容111'
}, {
  title: '标题222',
  content: '内容222内容222内容222内容222内容222内容222'
}, {
  title: '标题333',
  content: '内容333内容333内容333内容333内容333内容333'
}];
const __index = {
  init() {
    console.log(__list);
    $('._header').html(header());
    $('._data').html(data(__data));
    $('._list').html(list(__list));
  }

};
$(function () {
  __index.init();
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
    var $$out = '';
    $$out += '<h1>header</h1>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/template/index/data.html":
/*!****************************************!*\
  !*** ./views/template/index/data.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, title = $data.title, content = $data.content;
    $$out += '<h2 class="index-title">';
    $$out += $escape(title);
    $$out += '</h2>\r\n<p>';
    $$out += $escape(content);
    $$out += '</p>\r\n';
    return $$out;
};

/***/ }),

/***/ "./views/template/index/list.html":
/*!****************************************!*\
  !*** ./views/template/index/list.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, $value = $data.$value, $index = $data.$index, $escape = $imports.$escape;
    $each($data, function ($value, $index) {
        $$out += '\r\n    <li>\r\n        <h3>';
        $$out += $escape($index);
        $$out += $escape($value.title);
        $$out += '</h3>\r\n        <p>';
        $$out += $escape($value.content);
        $$out += '</p>\r\n    </li>\r\n';
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvY29tcGlsZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcnQtdGVtcGxhdGUvbGliL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sYXlvdXQvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvdGVtcGxhdGUvaW5kZXgvZGF0YS5odG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3RlbXBsYXRlL2luZGV4L2xpc3QuaHRtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy90ZW1wbGF0ZS9sYXlvdXQvaGVhZGVyLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgaGVhZGVyID0gcmVxdWlyZShcInRwbC9sYXlvdXQvaGVhZGVyLmh0bWxcIik7XG5cbmNvbnN0IGRhdGEgPSByZXF1aXJlKFwidHBsL2luZGV4L2RhdGEuaHRtbFwiKTtcblxuY29uc3QgbGlzdCA9IHJlcXVpcmUoXCJ0cGwvaW5kZXgvbGlzdC5odG1sXCIpO1xuXG5jb25zdCAkYWpheCA9IHdpbmRvdy51dGlsLmFqYXg7XG5jb25zdCBfX2RhdGEgPSB7XG4gIHRpdGxlOiAn5rWL6K+VJyxcbiAgY29udGVudDogJ+aVsOaNrjEnXG59O1xuY29uc3QgX19saXN0ID0gW3tcbiAgdGl0bGU6ICfmoIfpopgxMTEnLFxuICBjb250ZW50OiAn5YaF5a65MTEx5YaF5a65MTEx5YaF5a65MTEx5YaF5a65MTEx5YaF5a65MTEx5YaF5a65MTExJ1xufSwge1xuICB0aXRsZTogJ+agh+mimDIyMicsXG4gIGNvbnRlbnQ6ICflhoXlrrkyMjLlhoXlrrkyMjLlhoXlrrkyMjLlhoXlrrkyMjLlhoXlrrkyMjLlhoXlrrkyMjInXG59LCB7XG4gIHRpdGxlOiAn5qCH6aKYMzMzJyxcbiAgY29udGVudDogJ+WGheWuuTMzM+WGheWuuTMzM+WGheWuuTMzM+WGheWuuTMzM+WGheWuuTMzM+WGheWuuTMzMydcbn1dO1xuY29uc3QgX19pbmRleCA9IHtcbiAgaW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhfX2xpc3QpO1xuICAgICQoJy5faGVhZGVyJykuaHRtbChoZWFkZXIoKSk7XG4gICAgJCgnLl9kYXRhJykuaHRtbChkYXRhKF9fZGF0YSkpO1xuICAgICQoJy5fbGlzdCcpLmh0bWwobGlzdChfX2xpc3QpKTtcbiAgfVxuXG59O1xuJChmdW5jdGlvbiAoKSB7XG4gIF9faW5kZXguaW5pdCgpO1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiEgYXJ0LXRlbXBsYXRlQHJ1bnRpbWUgfCBodHRwczovL2dpdGh1Yi5jb20vYXVpL2FydC10ZW1wbGF0ZSAqL1xuXG52YXIgZ2xvYmFsVGhpcyA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBydW50aW1lID0gT2JqZWN0LmNyZWF0ZShnbG9iYWxUaGlzKTtcbnZhciBFU0NBUEVfUkVHID0gL1tcIiYnPD5dLztcblxuLyoqXG4gKiDnvJbnoIHmqKHmnb/ovpPlh7rnmoTlhoXlrrlcbiAqIEBwYXJhbSAge2FueX0gICAgICAgIGNvbnRlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucnVudGltZS4kZXNjYXBlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICByZXR1cm4geG1sRXNjYXBlKHRvU3RyaW5nKGNvbnRlbnQpKTtcbn07XG5cbi8qKlxuICog6L+t5Luj5Zmo77yM5pSv5oyB5pWw57uE5LiO5a+56LGhXG4gKiBAcGFyYW0ge2FycmF5fE9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbn0gICAgIGNhbGxiYWNrXG4gKi9cbnJ1bnRpbWUuJGVhY2ggPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBfaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW19pXSwgX2kpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8g5bCG55uu5qCH6L2s5oiQ5a2X56ymXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0cmluZyh2YWx1ZS5jYWxsKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8g57yW56CBIEhUTUwg5YaF5a65XG5mdW5jdGlvbiB4bWxFc2NhcGUoY29udGVudCkge1xuICAgIHZhciBodG1sID0gJycgKyBjb250ZW50O1xuICAgIHZhciByZWdleFJlc3VsdCA9IEVTQ0FQRV9SRUcuZXhlYyhodG1sKTtcbiAgICBpZiAoIXJlZ2V4UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgbGFzdEluZGV4ID0gdm9pZCAwLFxuICAgICAgICBjaGFyID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzQ7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM4Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzOTsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjA7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYyOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXI7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBpbGUvcnVudGltZScpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJztcbiAgICAkJG91dCArPSAnPGgxPmhlYWRlcjwvaDE+XFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJGVzY2FwZSA9ICRpbXBvcnRzLiRlc2NhcGUsIHRpdGxlID0gJGRhdGEudGl0bGUsIGNvbnRlbnQgPSAkZGF0YS5jb250ZW50O1xuICAgICQkb3V0ICs9ICc8aDIgY2xhc3M9XCJpbmRleC10aXRsZVwiPic7XG4gICAgJCRvdXQgKz0gJGVzY2FwZSh0aXRsZSk7XG4gICAgJCRvdXQgKz0gJzwvaDI+XFxyXFxuPHA+JztcbiAgICAkJG91dCArPSAkZXNjYXBlKGNvbnRlbnQpO1xuICAgICQkb3V0ICs9ICc8L3A+XFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJGVhY2ggPSAkaW1wb3J0cy4kZWFjaCwgJHZhbHVlID0gJGRhdGEuJHZhbHVlLCAkaW5kZXggPSAkZGF0YS4kaW5kZXgsICRlc2NhcGUgPSAkaW1wb3J0cy4kZXNjYXBlO1xuICAgICRlYWNoKCRkYXRhLCBmdW5jdGlvbiAoJHZhbHVlLCAkaW5kZXgpIHtcbiAgICAgICAgJCRvdXQgKz0gJ1xcclxcbiAgICA8bGk+XFxyXFxuICAgICAgICA8aDM+JztcbiAgICAgICAgJCRvdXQgKz0gJGVzY2FwZSgkaW5kZXgpO1xuICAgICAgICAkJG91dCArPSAkZXNjYXBlKCR2YWx1ZS50aXRsZSk7XG4gICAgICAgICQkb3V0ICs9ICc8L2gzPlxcclxcbiAgICAgICAgPHA+JztcbiAgICAgICAgJCRvdXQgKz0gJGVzY2FwZSgkdmFsdWUuY29udGVudCk7XG4gICAgICAgICQkb3V0ICs9ICc8L3A+XFxyXFxuICAgIDwvbGk+XFxyXFxuJztcbiAgICB9KTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyIsInZhciAkaW1wb3J0cyA9IHJlcXVpcmUoXCIuLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcYXJ0LXRlbXBsYXRlXFxcXGxpYlxcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJGRhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgJGRhdGEgPSAkZGF0YSB8fCB7fTtcbiAgICB2YXIgJCRvdXQgPSAnJywgJCRibG9ja3MgPSBhcmd1bWVudHNbMV0gfHwge30sIGluY2x1ZGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgJCRvdXQgKz0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiAkJG91dDtcbiAgICAgICAgfTtcbiAgICBpbmNsdWRlKHJlcXVpcmUoJy4vLi5cXFxcLi5cXFxcbGF5b3V0XFxcXGhlYWRlci5odG1sJykoJGRhdGEpKTtcbiAgICAkJG91dCArPSAnXFxyXFxuJztcbiAgICByZXR1cm4gJCRvdXQ7XG59OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==