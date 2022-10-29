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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// // const { SyncHook } = require('tapable');\r\n\r\n// class SyncHook {\r\n//   constructor(args) {\r\n//     this.tasks = [];\r\n//     this.args = args;\r\n//   }\r\n//   tap(name, fn) {\r\n//     this.tasks.push(fn);\r\n//   }\r\n//   call(...args) {\r\n//     if (args.length < this.args.length) {\r\n//       console.log('发布个数少了');\r\n//     }\r\n\r\n//     args = args.slice(0, this.args.length + 1);\r\n//     const finalTask = args.pop();\r\n\r\n//     let index = 0;   \r\n//     let next = () => {\r\n//       if(index === this.tasks.length){\r\n//         finalTask();\r\n//         return;\r\n//       }\r\n//       const task = this.tasks[index];\r\n//       index++;\r\n//       task(...args, next);\r\n//     }\r\n\r\n//     next();   \r\n//   }\r\n// }\r\n\r\n// class Lesson {\r\n//   constructor() {\r\n//     this.hooks = {\r\n//       vue: new SyncHook(['desc'])\r\n//     }\r\n//   }\r\n\r\n//   tap() {\r\n//     this.hooks.vue.tap('zhangsan', function (desc, done) {\r\n//       setTimeout(() => {\r\n//         console.log('zhangsan: ', desc);\r\n//         done();\r\n//       }, 2000)\r\n//     });\r\n//     this.hooks.vue.tap('ls', function (desc, done) {\r\n//       setTimeout(() => {\r\n//         console.log('ls: ', desc);\r\n//         done();\r\n//       }, 1000)\r\n//     });\r\n//   }\r\n//   call() {\r\n//     this.hooks.vue.call('vue 上线了', function () {\r\n//       console.log('end');\r\n//     });\r\n//   }\r\n// }\r\n\r\n// const myLesson = new Lesson();\r\n// myLesson.tap();\r\n// myLesson.call();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });