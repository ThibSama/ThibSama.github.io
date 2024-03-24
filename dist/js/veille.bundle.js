/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/veille.js":
/*!*****************************!*\
  !*** ./public/js/veille.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var veilleTopics = document.querySelectorAll(\".veille-topic\");\n  veilleTopics.forEach(function (topic) {\n    topic.addEventListener(\"click\", function () {\n      var contentId = \"content-\" + this.id.split(\"-\")[1];\n      var contentDiv = document.getElementById(contentId);\n      if (contentDiv.classList.contains(\"opacity-0\")) {\n        contentDiv.classList.remove(\"opacity-0\", \"max-h-0\");\n        contentDiv.classList.add(\"opacity-100\", \"max-h-screen\");\n      } else {\n        contentDiv.classList.remove(\"opacity-100\", \"max-h-screen\");\n        contentDiv.classList.add(\"opacity-0\", \"max-h-0\");\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://myportfolio/./public/js/veille.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/veille.js"]();
/******/ 	
/******/ })()
;