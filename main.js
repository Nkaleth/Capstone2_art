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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: white;\\r\\n  font-family: \\\"Titillium Web\\\", sans-serif;\\r\\n  min-height: 100vh;\\r\\n  position: relative;\\r\\n  margin: 0 !important;\\r\\n  padding: 0 !important;\\r\\n}\\r\\n\\r\\nbody h1 {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nbody h2 {\\r\\n  font-weight: 400;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.art {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  height: 7em;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader > div {\\r\\n  width: 1550px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 13em;\\r\\n  position: fixed;\\r\\n  background: hsl(240deg 6% 87%);\\r\\n  border-bottom: 1px solid black;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n.fd-number {\\r\\n  font-weight: bold;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.fd-number span {\\r\\n  font-weight: bold;\\r\\n  color: red;\\r\\n  padding: 0 0.5em;\\r\\n}\\r\\n\\r\\n.fd-categories {\\r\\n  font-weight: bolder;\\r\\n  text-transform: uppercase;\\r\\n  color: darkgray;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\n.fd-categories:hover {\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.artworks {\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.artworks h1 {\\r\\n  position: relative;\\r\\n  color: rgb(77, 70, 70);\\r\\n  z-index: 2;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\n.home-logo {\\r\\n  width: 3%;\\r\\n}\\r\\n\\r\\n/* Comments pop up styles */\\r\\n\\r\\n.reservationPopup {\\r\\n  display: none;\\r\\n  overflow-y: auto;\\r\\n  position: fixed;\\r\\n  z-index: 100;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 90vh;\\r\\n  opacity: 98%;\\r\\n  backdrop-filter: blur(80px);\\r\\n  transition: height 1s ease;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.containerCommentsPopUp {\\r\\n  display: none;\\r\\n  overflow-y: auto;\\r\\n  position: fixed;\\r\\n  z-index: 100;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 90vh;\\r\\n  opacity: 98%;\\r\\n  backdrop-filter: blur(80px);\\r\\n  transition: height 1s ease;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.popUpComments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.xclose {\\r\\n  position: relative;\\r\\n  margin-left: 2%;\\r\\n  left: 42%;\\r\\n  width: 40px;\\r\\n  top: 2rem;\\r\\n}\\r\\n\\r\\n.xcloseR {\\r\\n  position: relative;\\r\\n  margin-left: 2%;\\r\\n  left: 88%;\\r\\n  width: 40px;\\r\\n  top: 2rem;\\r\\n}\\r\\n\\r\\n.imageComments {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.imageComments img {\\r\\n  width: 75%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.titleComments {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n.detailsComments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.detailsComments ul {\\r\\n  padding-inline-start: 0;\\r\\n  width: 90%;\\r\\n  height: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.detailsComments li {\\r\\n  display: block;\\r\\n  margin: 1%;\\r\\n}\\r\\n\\r\\n.divComments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.divComments ul {\\r\\n  padding-inline-start: 0;\\r\\n}\\r\\n\\r\\n.divComments li {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.addComment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 30%;\\r\\n  height: auto;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.formComment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.gallery {\\r\\n  display: grid;\\r\\n  grid-template-columns: 33% 33% 33%;\\r\\n  column-gap: 2%;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding-bottom: 5em;\\r\\n}\\r\\n\\r\\nmain .grid-item {\\r\\n  border: none;\\r\\n  padding: 20px;\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.paintings {\\r\\n  font-size: small;\\r\\n}\\r\\n\\r\\n.paintings img {\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.paintings > div {\\r\\n  margin-bottom: 2em;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  padding-top: 4%;\\r\\n  padding-right: 30%;\\r\\n}\\r\\n\\r\\n.heart:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.paint-name .like {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  padding-left: 50%;\\r\\n}\\r\\n\\r\\n.likes-count span {\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.grid-container button {\\r\\n  width: 100%;\\r\\n  border: 1px black solid;\\r\\n  line-height: 1em;\\r\\n  outline: none;\\r\\n  font-size: large;\\r\\n  color: gray;\\r\\n  padding: 0.5em;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.grid-container button:hover {\\r\\n  outline: none;\\r\\n  background: rgb(205, 158, 41);\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n/* Reservations */\\r\\n\\r\\n.divReservations {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.addReservations {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 30%;\\r\\n  height: auto;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.formReservations {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.Reservations {\\r\\n  display: flex;\\r\\n  align-items: flex-start;\\r\\n  height: 50px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone2_arts/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone2_arts/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone2_arts/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_comments_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comments_popup.js */ \"./src/modules/comments_popup.js\");\n/* harmony import */ var _modules_Dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Dom.js */ \"./src/modules/Dom.js\");\n/* harmony import */ var _modules_reserve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reserve.js */ \"./src/modules/reserve.js\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');\r\nconst popupReservationContainer = document.querySelector('.reservationPopup');\r\n\r\nconst gallery = document.querySelector('.gallery');\r\n\r\n(0,_modules_Dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\ngallery.addEventListener('click', (event) => {\r\n  const { target } = event;\r\n  if (target.value === 'Comments') {\r\n    (0,_modules_comments_popup_js__WEBPACK_IMPORTED_MODULE_1__.openComments)(target.id);\r\n  } else if (target.name === 'heart') {\r\n    const idlike = target.id;\r\n    const idlikefiltered = idlike.replace(/^\\D+/g, '');\r\n    (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_4__.likeArts)(idlikefiltered);\r\n    let numlikes = Number(target.alt.replace(/^\\D+/g, ''));\r\n    numlikes += 1;\r\n    const likecontainer = document.getElementById(`spl${idlikefiltered}`);\r\n    likecontainer.innerHTML = `Likes(${numlikes})`;\r\n  }\r\n  if (target.value === 'Reservations') {\r\n    (0,_modules_reserve_js__WEBPACK_IMPORTED_MODULE_3__.openReservations)(target.id);\r\n  }\r\n});\r\n\r\npopUpCommentsContainer.addEventListener('click', (event) => {\r\n  const { target } = event;\r\n  if (target.id === 'xclose') {\r\n    (0,_modules_comments_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopUp)(popUpCommentsContainer);\r\n  }\r\n});\r\n\r\n/* Reservations part */\r\n\r\npopupReservationContainer.addEventListener('click', (event) => {\r\n  const { target } = event;\r\n  if (target.id === 'xclose') {\r\n    (0,_modules_comments_popup_js__WEBPACK_IMPORTED_MODULE_1__.closePopUp)(popupReservationContainer);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://capstone2_arts/./src/index.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_heart2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart2.png */ \"./src/images/heart2.png\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/modules/itemsCounter.js\");\n\r\n\r\n\r\n\r\nlet stringPaintings = '';\r\nlet idKey;\r\n\r\nconst URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true';\r\n\r\nconst loadData = async () => {\r\n  const request = new Request(URL);\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  const IDs = data.objectIDs;\r\n  idKey = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n  IDs.forEach((element) => {\r\n    const readIds = async (element) => {\r\n      const gallery = document.querySelector('.gallery');\r\n      const request = new Request(\r\n        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`,\r\n      );\r\n      const response = await fetch(request);\r\n      const data = await response.json();\r\n      stringPaintings += `<div class=\"grid-item\">  <!-- container for each painting-->\r\n                                    <div class=\"paintings\">\r\n                                      <div>\r\n                                        <img src= '${data.primaryImageSmall}' height=\"200\" alt=\"PAINTING IMAGE\">\r\n                                        </div>\r\n                                        <div class=\"paint-name\">\r\n                                        <p>${data.title}</p>\r\n                                        <span class=\"like\"><img class=\"heart\" id=\"h${data.objectID}\" src=\"${_images_heart2_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Likes(${idKey[data.objectID]}\" width=\"15\" height=\"15\" srcset=\"\" name=\"heart\"  alt=\"Likes(${idKey[data.objectID]})\"></span> \r\n                                        </div>         \r\n                                      \r\n                                      <div class=\"likes\">\r\n                                          <span class=\"likes-count\"><span id=\"spl${data.objectID}\">Likes(${idKey[data.objectID]})</span></span>\r\n                                      </div>\r\n                                      <div>\r\n                                        <button id=\"${data.objectID}\" class=\"bComments\" value=\"Comments\" >Comments</button>                            \r\n                                      </div>\r\n                                      <div>\r\n                                        <button id=\"${data.objectID}\" class=\"bReservations\" value=\"Reservations\">Reservations</button>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>`;\r\n      gallery.innerHTML = stringPaintings;\r\n      (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    };\r\n    readIds(element);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadData);\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"likeArts\": () => (/* binding */ likeArts)\n/* harmony export */ });\nconst invAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/likes';\r\nconst likeArts = async (id) => {\r\n  const API_URL = invAPI;\r\n  fetch(API_URL, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const API_URL = invAPI;\r\n  const res = await fetch(API_URL);\r\n  const data = await res.json();\r\n  const objetc1 = {};\r\n  data.forEach((element) => {\r\n    if (element.likes !== 0) {\r\n      objetc1[element.item_id] = element.likes;\r\n    } else if (element.likes === undefined) {\r\n      objetc1[element.item_id] = 0;\r\n    }\r\n  });\r\n  return objetc1;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/comments_popup.js":
/*!***************************************!*\
  !*** ./src/modules/comments_popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Xclose\": () => (/* reexport default export from named module */ _images_close_svg__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"addNewComment\": () => (/* binding */ addNewComment),\n/* harmony export */   \"closePopUp\": () => (/* binding */ closePopUp),\n/* harmony export */   \"loadComments\": () => (/* binding */ loadComments),\n/* harmony export */   \"openComments\": () => (/* binding */ openComments)\n/* harmony export */ });\n/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close.svg */ \"./src/images/close.svg\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n\r\n\r\n\r\nconst popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');\r\n\r\nconst loadComments = async (container, id) => {\r\n  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments?item_id=${id}`);\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  const count = (0,_countComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  const divCount = document.querySelector('.countComments');\r\n  divCount.innerHTML = count;\r\n  let string = '';\r\n  data.forEach((element) => {\r\n    string += `<li class=\"userComment\">  ${element.creation_date} ${element.username}: ${element.comment}</li>`;\r\n  });\r\n  container.innerHTML = string;\r\n  return count;\r\n};\r\n\r\nconst addNewComment = async (idItem, username, comment) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments';\r\n  const containerComments = document.getElementById(`c${idItem}`);\r\n  const user = username;\r\n  const comment1 = comment;\r\n  const dataToPost = {\r\n    item_id: idItem,\r\n    username: user,\r\n    comment: comment1,\r\n  };\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(dataToPost),\r\n  });\r\n  if (!response.ok) {\r\n    const message = `An error has occured: ${response.status}`;\r\n    throw new Error(message);\r\n  }\r\n  loadComments(containerComments, idItem);\r\n};\r\n\r\nconst openComments = async (id) => {\r\n  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;\r\n  const request = new Request(link);\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  const stringCommentPopup = `<article class=\"popUpComments\" id=${data.objectID}>\r\n                              <img id=\"xclose\" class=\"xclose\" src = \"${_images_close_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n                              <section class=\"imageComments\">\r\n                                  <img src=${data.primaryImage} alt=\"\" srcset=\"\">\r\n                              </section>\r\n                              <section class =\"detailsComments\" >\r\n                                  <p class=\"titleComments\">${data.title}</p>\r\n                                  <ul class=\"dataPaintingComments\">\r\n                                      <li>Year: ${data.accessionYear}</li>\r\n                                      <li>Artist : ${data.artistDisplayName}</li>\r\n                                      <li>Nationality : ${data.artistNationality}</li>\r\n                                      <li>Medium : ${data.medium}</li>\r\n                                  </ul>\r\n                              </section>\r\n                              <section class=\"divComments\">\r\n                                  <p class=\"countComments\">Comments(0)</p>\r\n                                  <ul class=\"listComments\" id=\"c${data.objectID}\">\r\n                                  </ul>\r\n                              </section>\r\n                              <section class=\"addComment\">\r\n                                  <p>Add a comment</p>\r\n                                  <form id=\"fc${data.objectID}\" class=\"formComment\" action=\"\">\r\n                                      <input class=\"username\" type=\"text\" name=\"\" id=\"username\" placeholder=\"Your name\" required>\r\n                                      <input class=\"comment\" type=\"text\" name=\"\" id=\"comment\" placeholder=\"Your insights\" required>\r\n                                      <button class=\"addCommentButton\" type=\"submit\">Comment</button>\r\n                                  </form>\r\n                              </section>\r\n                          </article>`;\r\n  popUpCommentsContainer.innerHTML = stringCommentPopup;\r\n  popUpCommentsContainer.setAttribute('style', 'display: block');\r\n  const containerComments = document.getElementById(`c${data.objectID}`);\r\n  loadComments(containerComments, data.objectID);\r\n  const formComments = document.querySelector(`#fc${data.objectID}`);\r\n  formComments.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const { username, comment } = formComments.elements;\r\n    addNewComment(data.objectID, username.value, comment.value);\r\n    formComments.reset();\r\n  });\r\n};\r\n\r\nconst closePopUp = (container) => {\r\n  container.setAttribute('style', 'display: none');\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/comments_popup.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countData = (data) => {\r\n  let count = 0;\r\n  if (!data) {\r\n    return 'Comments(0)';\r\n  }\r\n  data.forEach(() => {\r\n    count += 1;\r\n  });\r\n  return `Comments(${count})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countData);\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countreservations.js":
/*!******************************************!*\
  !*** ./src/modules/countreservations.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countDataReservation = (data) => {\n  let count = 0;\n  if (!data) {\n    return 'Reservations(0)';\n  }\n  data.forEach(() => {\n    count += 1;\n  });\n  return `Reservations(${count})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countDataReservation);\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/countreservations.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTotalPaintings = () => {\r\n  let numpaintings = 0;\r\n  const paintings = document.querySelectorAll('.paintings');\r\n  numpaintings = paintings.length;\r\n  const countContainer = document.querySelector('.fd-count');\r\n  if (countContainer) {\r\n    countContainer.innerHTML = numpaintings;\r\n  }\r\n  return numpaintings;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalPaintings);\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/reserve.js":
/*!********************************!*\
  !*** ./src/modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Xclose\": () => (/* reexport default export from named module */ _images_close_svg__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"addNewReservation\": () => (/* binding */ addNewReservation),\n/* harmony export */   \"closePopUp\": () => (/* binding */ closePopUp),\n/* harmony export */   \"loadReserve\": () => (/* binding */ loadReserve),\n/* harmony export */   \"openReservations\": () => (/* binding */ openReservations)\n/* harmony export */ });\n/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close.svg */ \"./src/images/close.svg\");\n/* harmony import */ var _countreservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countreservations.js */ \"./src/modules/countreservations.js\");\n\r\n\r\n\r\nconst popupReservation = document.querySelector('.reservationPopup');\r\n\r\nconst loadReserve = async (container, id) => {\r\n  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/reservations?item_id=${id}`);\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  const count = (0,_countreservations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  const divCount = document.querySelector('.countReservations');\r\n  divCount.innerHTML = count;\r\n  let string = '';\r\n  data.forEach((element) => {\r\n    string += `<li class=\"userDetails\">  ${element.username} ${element.date_start}: ${element.date_end}</li>`;\r\n  });\r\n  container.innerHTML = string;\r\n  return count;\r\n};\r\n\r\nconst addNewReservation = async (idItem, startdate, enddate, username) => {\r\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/reservations/';\r\n  const containerReserves = document.getElementById(`cr${idItem}`);\r\n  const user = username;\r\n  const startdate1 = startdate;\r\n  const enddate1 = enddate;\r\n  const dataToPost = {\r\n    item_id: idItem,\r\n    username: user,\r\n    date_start: startdate1,\r\n    date_end: enddate1,\r\n  };\r\n  // console.log(JSON.stringify(dataToPost));\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(dataToPost),\r\n  });\r\n  if (!response.ok) {\r\n    const message = `An error has occured: ${response.status}`;\r\n    throw new Error(message);\r\n  }\r\n  loadReserve(containerReserves, idItem);\r\n};\r\n\r\nconst openReservations = async (id) => {\r\n  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;\r\n  const request = new Request(link);\r\n  const response = await fetch(request);\r\n  const data = await response.json();\r\n  const stringReservePopup = `<article class=\"popUpReservations\" id=${data.objectID}>\r\n                              <img id=\"xclose\" class=\"xcloseR\" src = \"${_images_close_svg__WEBPACK_IMPORTED_MODULE_0__}\">\r\n                              <section class=\"imageComments\">\r\n                                  <img src=${data.primaryImage} alt=\"\" srcset=\"\">\r\n                              </section>\r\n                              <section class =\"detailsComments\" >\r\n                                  <p class=\"titleComments\">${data.title}</p>\r\n                                  <ul class=\"dataPaintingComments\">\r\n                                      <li>Year: ${data.accessionYear}</li>\r\n                                      <li>Artist : ${data.artistDisplayName}</li>\r\n                                      <li>Nationality : ${data.artistNationality}</li>\r\n                                      <li>Medium : ${data.medium}</li>\r\n                                  </ul>\r\n                              </section>\r\n                              <section class=\"divReservations\">\r\n                                  <p class=\"countReservations\">Reservations(0)</p>\r\n                                  <ul class=\"listReservations\" id=\"cr${data.objectID}\">\r\n                                  </ul>\r\n                              </section>\r\n                              <section class=\"addReservation\">\r\n                                  <p>Add a reservation</p>\r\n                                  <form id=\"r${data.objectID}\" class=\"formReserve\" action=\"\">\r\n                                  <label>Enter your name:</label>            \r\n                                  <input type=\"text\" id=\"username\" name=\"user_name\" maxlength=\"30\" placeholder=\"your name\" required>\r\n                              \r\n                                  <label>Start Date:</label>\r\n                                  <input type=\"date\" id=\"startDate\"  placeholder=\"start date\" required>\r\n                              \r\n                                  <label>End Date:</label>\r\n                                  <input type=\"date\" id=\"endDate\" placeholder=\"end date\" required>\r\n                                  <button class=\"reserveButton\" type=\"submit\">Reserve</button>\r\n                                  </form>\r\n                              </section>\r\n                            </article>`;\r\n  popupReservation.innerHTML = stringReservePopup;\r\n  popupReservation.setAttribute('style', 'display: block');\r\n  const containerReservations = document.getElementById(`cr${data.objectID}`);\r\n  loadReserve(containerReservations, data.objectID);\r\n  const formReservations = document.querySelector(`#r${data.objectID}`);\r\n  formReservations.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const { username, startDate, endDate } = formReservations.elements;\r\n    addNewReservation(data.objectID, startDate.value, endDate.value, username.value);\r\n    formReservations.reset();\r\n  });\r\n};\r\n\r\nconst closePopUp = (container) => {\r\n  container.setAttribute('style', 'display: none');\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone2_arts/./src/modules/reserve.js?");

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"957ec3bc355d18fd6525.svg\";\n\n//# sourceURL=webpack://capstone2_arts/./src/images/close.svg?");

/***/ }),

/***/ "./src/images/heart2.png":
/*!*******************************!*\
  !*** ./src/images/heart2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c412cbaead4744166c20.png\";\n\n//# sourceURL=webpack://capstone2_arts/./src/images/heart2.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;