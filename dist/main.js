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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing: border-box;\r\n}\r\nheader {\r\n    font-family: \"Yatra One\", system-ui;\r\n    font-weight: 800;\r\n    font-style: normal;\r\n    background-color: lavender;\r\n    text-align: center;\r\n    padding:20px;\r\n    font-size: xx-large;\r\n\r\n  }\r\n  \r\nbody{\r\n    font-family: \"Nunito Sans\", sans-serif;\r\n    background-color: rgb(205, 205, 249);\r\n}\r\nbutton{\r\n    color: silver;\r\n    padding:10px;\r\n    border: none;\r\n    color: black;\r\n    border-radius: 10px;\r\n    margin: 10px;\r\n}\r\n.container{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.content1{\r\n    min-height: 100vh;\r\n    width: 300px;\r\n    background-color: rgb(171, 171, 248);\r\n    border: 1px rgb(116, 68, 84) solid;\r\n    box-shadow: 5px 10px rgb(116, 63, 81);\r\n}\r\n.content2{\r\n    background-color: antiquewhite;\r\n    \r\n    width:fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n    padding:20px;\r\n    gap:10px;\r\n}\r\ninput,textarea,select{\r\n    border: 2px solid #eca2a2;\r\n    /* border: none; */\r\n    border-radius: 10px;\r\n    padding:10px;\r\n\r\n}\r\nlabel{\r\n    font-size: medium;\r\n    color: brown;\r\n}\r\n.btn{\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    margin:10px;\r\n    gap:10px;\r\n}\r\nbutton:hover{\r\n    background-color: rgb(198, 117, 148);\r\n    color: silver;\r\n}\r\n.content3{\r\n    width:1000px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding:10px;\r\n    /* justify-content: space-between; */\r\n}\r\n.headerDiv{\r\n    padding:10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    border:1px solid black;\r\n}\r\n#addTaskBtn{\r\n    color: #250c0c;\r\n}\r\n.contentDiv table,.contentDiv th,.contentDiv td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    padding:10px;\r\n    \r\n}\r\n.contentDiv td{\r\n    gap:10px;\r\n}\r\n.contentDiv table{\r\n    width:100%;\r\n    margin:10px;\r\n}\r\n.headerDiv button{\r\n    background-color: transparent;\r\n    height: 50px;\r\n    width:50px;\r\n    color: #eca2a2;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/content1.js":
/*!*************************!*\
  !*** ./src/content1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProj: () => (/* binding */ addProj),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   content1: () => (/* binding */ content1)\n/* harmony export */ });\n/* harmony import */ var _content2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content2 */ \"./src/content2.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\n\r\n\r\n\r\n const content1= document.querySelector('.content1');\r\n const addProject= document.querySelector('.addProject');\r\n\r\n function addProj(){\r\n     const content3= document.querySelector('.content3');\r\n     const headerDiv= document.createElement('div');\r\n     headerDiv.className='headerDiv';\r\n     content3.appendChild(headerDiv);\r\n     const projArray=[];\r\n//add title for the project with input text\r\naddProject.addEventListener('click',()=>{\r\n    const inputDiv = document.querySelector('#inputDiv');\r\n//if there is no inputDiv then create one.This avoids creating multiple divs in each and every click.\r\n    if(!inputDiv){\r\n    const div= document.createElement('div')\r\n    div.id='inputDiv';\r\n    div.innerHTML=`\r\n    <label for=\"projInput\">Enter project name:</label>\r\n    <div><input type=\"text\" id=\"projInput\">\r\n    <button>Ok</button><div>\r\n    `;\r\n\r\n    div.querySelector('button').addEventListener('click',()=>{\r\n        const value=div.querySelector('input').value;\r\n        div.querySelector('input').value=\"\"; //clear the input field\r\n        const listdiv= document.createElement('div');\r\n        listdiv.innerHTML=`\r\n        <button class=\"projBtn\"></button>\r\n        <button> <span class=\"material-symbols-outlined\" id=\"delete\">delete</span></button>\r\n        `;\r\n\r\n        listdiv.querySelector('.projBtn').textContent=value;\r\n        listdiv.querySelector('.projBtn').id=value;\r\n        // projArray.push(listdiv.querySelector('.projBtn').id);\r\n        // const projObj=new Project(value);\r\n        //console.log(projObj);\r\n       \r\n        content1.appendChild(listdiv);\r\n//handle the delete button\r\n        listdiv.querySelector('#delete').addEventListener('click',()=>{\r\n        content1.removeChild(listdiv);\r\n    })\r\n//handle the project button\r\nlistdiv.querySelector('.projBtn').addEventListener('click',()=>{\r\n            headerDiv.innerHTML=`\r\n            <h2></h2>\r\n            <button id=\"addTaskBtn\"><span class=\"material-symbols-outlined\">\r\n                add_circle\r\n                </span>Add Task</button>\r\n\r\n            `;\r\n            const contentDiv= document.createElement('div');\r\n            contentDiv.className='contentDiv';\r\n            const table=document.createElement('table');\r\n            table.innerHTML=`\r\n                    <tr>\r\n                        <th>Title</th>\r\n                        <th>Description</th>\r\n                        <th>Date</th>\r\n                        <th>Priority</th>\r\n                        <th>Subtasks</th>\r\n                        <th>Action</th>\r\n                    </tr>  \r\n            `;\r\n            contentDiv.appendChild(table);\r\n            content3.appendChild(contentDiv);\r\n            content3.querySelector('h2').textContent=listdiv.querySelector('.projBtn').id;\r\n            const addTaskBtn= headerDiv.querySelector('#addTaskBtn');\r\n            // content2.style.display='none';\r\n            addTaskBtn.addEventListener('click',()=>{\r\n            \r\n                // content2.style.display = content2.style.display === 'none' ? 'flex' : 'none';\r\n                if (_content2__WEBPACK_IMPORTED_MODULE_0__.content2.style.display === 'none') {\r\n                    _content2__WEBPACK_IMPORTED_MODULE_0__.content2.style.display = 'flex';\r\n                }\r\n                \r\n            });\r\n        });\r\n       \r\n        div.style.display = 'none';\r\n       \r\n    \r\n    });\r\n    content1.appendChild(div);\r\n}\r\n//toggle input div\r\nelse{\r\n    // \r\n    inputDiv.style.display = inputDiv.style.display === 'none' ? 'flex' : 'none';\r\n            if (inputDiv.style.display === 'flex') {\r\n                inputDiv.style.flexDirection = 'column';\r\n            }\r\n}\r\n    \r\n})\r\n\r\nreturn content1;\r\n}\n\n//# sourceURL=webpack://todo-list/./src/content1.js?");

/***/ }),

/***/ "./src/content2.js":
/*!*************************!*\
  !*** ./src/content2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content2: () => (/* binding */ content2),\n/* harmony export */   taskArray: () => (/* binding */ taskArray)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _content3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content3 */ \"./src/content3.js\");\n\r\n\r\n\r\nconst content2= document.createElement('div');\r\ncontent2.className='content2';\r\nconst container= document.querySelector('.container');\r\ncontainer.appendChild(content2);\r\n\r\n//create the form here using innerHTML\r\nconst taskArray=[];\r\nconst projArray=[];\r\n\r\ncontent2.innerHTML=`\r\n    <label for=\"title\">Title</label>\r\n    <input type=\"text\" id=\"title\">\r\n    \r\n    <label for=\"desc\">Description</label>\r\n    <textarea id=\"desc\" rows=\"4\" cols=\"50\" placeholder=\"Give some description\"></textarea>\r\n\r\n    <label for=\"duedate\">Duedate:</label>\r\n    <input type=\"date\" id=\"duedate\">\r\n\r\n    <label for=\"priority\">Priority:</label>\r\n    <select id=\"priority\">\r\n    <option value=\"high\">High</option>\r\n    <option value=\"medium\">Medium</option>\r\n    <option value=\"low\">Low</option>\r\n    </select>\r\n\r\n    <label for=\"subTask\">Sub tasks: </label>\r\n    <div><input type=\"text\" id=\"subTask\">\r\n    <button id=\"check\"><span class=\"material-symbols-outlined\">check</span></button><div>\r\n    <div class=\"listDiv\"></div>\r\n\r\n    <div class=\"btn\">\r\n    <button class=\"submit\">Submit</button>\r\n    <button class=\"close\">Close</button></div>    \r\n`;\r\n//add eventlisteners for three buttons check, close and submit\r\n//check button\r\n    let subtasksArray = [];\r\n    const listDiv= document.querySelector('.listDiv');\r\n    const ul=document.createElement('ul');\r\n    listDiv.appendChild(ul);\r\n\r\n\r\n    content2.querySelector('#check').addEventListener('click',()=>{\r\n        let subtaskValue=content2.querySelector('#subtask').value;\r\n        if (subtaskValue.trim()) {\r\n            const listItem= document.createElement('li')\r\n            listItem.textContent=subtaskValue;//display in DOM\r\n            subtasksArray.push(subtaskValue);//assigning data to array\r\n            content2.querySelector('#subtask').value=\"\";\r\n            ul.appendChild(listItem);\r\n           \r\n        }\r\n        })\r\n\r\n//submit button\r\n        content2.querySelector('.submit').addEventListener('click',()=>{\r\n            const valueTitle=document.querySelector('#titleInput').value;\r\n            const valueDesc= document.querySelector('#desc').value;\r\n            const valueDueDate=document.querySelector('#duedate').value;\r\n            const valuePriority=document.querySelector('#priority').value;\r\n            \r\n            \r\n            const obj= new _logic__WEBPACK_IMPORTED_MODULE_0__.Todo(valueTitle,valueDesc,valueDueDate,valuePriority,subtasksArray);\r\n            // Project.addTodo(obj);\r\n            taskArray.push(obj);\r\n            projArray.push(taskArray);\r\n            console.log(taskArray);\r\n            clear();\r\n            closeContent();\r\n            (0,_content3__WEBPACK_IMPORTED_MODULE_1__.renderTask)(taskArray);\r\n        })\r\n//cancel button\r\n        content2.querySelector('.close').addEventListener('click',()=>{\r\n           closeContent();\r\n\r\n        });\r\n        function closeContent(){\r\n            clear();\r\n            subtasksArray = [];\r\n            content2.style.display='none';\r\n        }\r\n\r\n        function clear(){\r\n            document.querySelector('#titleInput').value=\"\";\r\n            document.querySelector('#desc').value=\"\";\r\n            document.querySelector('#duedate').value=\"\";\r\n            subtasksArray = []; \r\n            clearSubTasks();\r\n        }\r\n\r\n        function clearSubTasks(){\r\n            ul.innerHTML = \"\";//Clear all list items inside ul \r\n        }\r\n        \r\ncontent2.style.display='none';\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/content2.js?");

/***/ }),

/***/ "./src/content3.js":
/*!*************************!*\
  !*** ./src/content3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTask: () => (/* binding */ renderTask)\n/* harmony export */ });\n\r\n// //this should be called once you submit the task button\r\nfunction renderTask(taskArray){\r\n   \r\n    const table=document.querySelector('table');\r\n\r\n    if (taskArray.length > 0) {\r\n        const lastTask = taskArray[taskArray.length - 1]; // Get the last task\r\n        const tr = document.createElement('tr');\r\n    \r\n        for (let key in lastTask) {\r\n            const td = document.createElement('td');\r\n            // Check if the key is 'subtaskArray' (assuming the array is stored with this key)\r\n        if (key === 'subtaskArray'&& Array.isArray(lastTask[key])) {\r\n            // Create a div to hold the subtasks checkboxes\r\n            const subtaskDiv = document.createElement('div');\r\n            \r\n            // Loop through each subtask in the array and create a checkbox\r\n            lastTask[key].forEach((subtask) => {\r\n                const checkbox = document.createElement('input');\r\n                checkbox.type = 'checkbox';\r\n                checkbox.id = subtask;\r\n                checkbox.name = subtask;\r\n                // Label for the checkbox\r\n                const label = document.createElement('label');\r\n                // label.htmlFor = subtask;\r\n                label.textContent = subtask;\r\n\r\n                // Append checkbox and label to the div\r\n                subtaskDiv.appendChild(checkbox);\r\n                subtaskDiv.appendChild(label);\r\n                subtaskDiv.appendChild(document.createElement('br')); // Add line break for neatness\r\n            });\r\n            td.appendChild(subtaskDiv); // Append the div to the cell\r\n        } else {\r\n            td.textContent = lastTask[key];  // Handle other properties normally\r\n        } \r\n            tr.append(td);\r\n        }\r\n    \r\n    \r\n//action button\r\n      const actionTd = document.createElement('td');\r\n      const doneButton = document.createElement('button');\r\n      doneButton.textContent = 'Done';\r\n      doneButton.classList.add(\"done\");\r\n      actionTd.append(doneButton);\r\n      tr.append(actionTd);\r\n      table.append(tr);\r\n      doneButton.addEventListener('click',()=>{\r\n          tr.style.border=\"thick solid green\";\r\n        \r\n\r\n      })\r\n}; \r\n    \r\n};\r\n    \r\n    // Function to render projects and tasks\r\nfunction renderProjects() {\r\n    const projectList = document.getElementById('project-list');\r\n    projectList.innerHTML = '';  // Clear previous list\r\n    projArray.forEach((project, index) => {\r\n      const projectItem = document.createElement('div');\r\n      projectItem.innerHTML = `\r\n        <h3>${project.title}</h3>\r\n        <ul>\r\n          ${project.taskArray.map(task => `<li>${task}</li>`).join('')}\r\n        </ul>\r\n        <button onclick=\"deleteProject(${index})\">Delete</button>\r\n      `;\r\n      projectList.appendChild(projectItem);\r\n    });\r\n  }\r\n  \r\n  // Initial rendering of projects\r\n  renderProjects();\r\n  \r\n    \r\n    \n\n//# sourceURL=webpack://todo-list/./src/content3.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _content1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content1 */ \"./src/content1.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_content1__WEBPACK_IMPORTED_MODULE_1__.addProj)();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\n//create an object using class constructor\r\nclass Todo{\r\n    constructor(title,desc,duedate,priority,subTaskArray){\r\n        this.title=title;\r\n        this.desc=desc;\r\n        this.duedate=duedate;\r\n        this.priority=priority;\r\n        this.subTaskArray=subTaskArray;\r\n    }\r\n}\r\nfunction addProject(title, tasks) {\r\n    const newProject = {\r\n      title: title,\r\n      taskArray: tasks\r\n    };\r\n    projArray.push(newProject);\r\n    console.log(projArray);  // Add the new project to projArray\r\n    renderProjects();  // Re-render the list to show the new project\r\n  }\r\n// export class Project{\r\n//     constructor(titleProj){\r\n//         this.titleProj=titleProj;\r\n//         this.todos = []; // Array to hold todo objects\r\n//     }\r\n\r\n//     // Method to add a todo to the project\r\n//     addTodo(todo) {\r\n//         this.todos.push(todo);\r\n//     }\r\n\r\n//     // Method to remove a todo (based on the todo's title for example)\r\n//     removeTodo(todoTitle) {\r\n//         this.todos = this.todos.filter(todo => todo.title !== todoTitle);\r\n//     }\r\n\r\n//     // Method to get all todos\r\n//     getTodos() {\r\n//         return this.todos;\r\n//     }\r\n// }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/logic.js?");

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