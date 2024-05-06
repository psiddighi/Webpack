/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// main.js\n\n\nlet page = 1;\nconst size = 30;\n\nfunction fetchCities() {\n    const start = (page - 1) * size;\n    fetch(`https://demo-backendcities.azurewebsites.net/?cuid=hajIUIksk983LLP11112220&size=${size}&start=${start}`)\n        .then(response => response.json())\n        .then(data => {\n            document.getElementById('cityList').innerHTML = data.map(city => `<p>${city.name}</p>`).join('');\n        });\n}\n\ndocument.getElementById('prev').addEventListener('click', (e) => {\n    e.preventDefault();\n    if (page > 1) {\n        page--;\n        fetchCities();\n    }\n});\n\ndocument.getElementById('next').addEventListener('click', (e) => {\n    e.preventDefault();\n    page++;\n    fetchCities();\n});\n\nfetchCities();\n\n//# sourceURL=webpack://webpack/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;