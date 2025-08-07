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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-left: auto;\r\n  font-family: arial, sans-serif;\r\n  margin-top: 100px;\r\n}\r\n\r\n.telo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 50px;\r\n  height: 25%;\r\n  width: 70%;\r\n  background-color: #009879;\r\n  border: solid #02614e;\r\n  align-items: center;\r\n  color: #ffffff;\r\n}\r\n\r\n.naslov {\r\n  font-family: arial, sans-serif;\r\n  font-size: 50px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n}\r\n\r\nlabel {\r\n  font-family: arial, sans-serif;\r\n  font-size: 25px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\nform button,\r\n.dugmici button {\r\n  height: fit-content;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.dugmici {\r\n  display: flex;\r\n  width: 70%;\r\n  height: 100px;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\ninput {\r\n  height: fit-content;\r\n  font-size: 18px;\r\n}\r\n\r\ntable {\r\n  width: 70%;\r\n  border-collapse: collapse;\r\n  margin: 20px 0;\r\n  font-size: 16px;\r\n  font-family: Arial, sans-serif;\r\n  text-align: left;\r\n}\r\n\r\nthead tr {\r\n  background-color: #009879;\r\n  color: #ffffff;\r\n  text-align: left;\r\n  font-weight: bold;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  border: 1px solid #dddddd;\r\n}\r\n\r\ntbody tr {\r\n  border-bottom: 3px solid #dddddd;\r\n}\r\n\r\ntbody tr:last-of-type {\r\n  border-bottom: 5px solid #009879;\r\n}\r\n\r\ntbody tr:hover {\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.dayRow {\r\n  background-color: #f3f3f3;\r\n  border-bottom: 3px solid #dddddd;\r\n}\r\n\r\n.stranice {\r\n  display: flex;\r\n  width: 70%;\r\n  flex-direction: row;\r\n  padding: 20px 20px;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.stranice button {\r\n  height: fit-content;\r\n  font-size: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.clicked {\r\n  background-color: #dddddd;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  body {\r\n    margin-top: 50px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .telo {\r\n    width: 90%;\r\n    height: auto;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n  }\r\n\r\n  .naslov {\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n\r\n  form {\r\n    gap: 20px;\r\n\r\n    label {\r\n      font-size: 18px;\r\n    }\r\n\r\n    form button,\r\n    .dugmici button {\r\n      font-size: 16px;\r\n    }\r\n\r\n    .dugmici {\r\n      flex-direction: column;\r\n      height: auto;\r\n      gap: 10px;\r\n      width: 100%;\r\n    }\r\n\r\n    table {\r\n      width: 100%;\r\n      font-size: 14px;\r\n    }\r\n\r\n    .stranice {\r\n      flex-direction: column;\r\n      gap: 10px;\r\n      width: 100%;\r\n    }\r\n\r\n    .stranice button {\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.hourRow {\r\n  display: none;\r\n  max-height: 0;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;\r\n  pointer-events: none;\r\n  font-size: 14px;\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.hourRow.expanded {\r\n  max-height: 100px;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  display: table-row;\r\n}\r\n\r\n.weatherIcon {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n#loading {\r\n  font-weight: bold;\r\n  font-size: 26px;\r\n  color: #292929;\r\n  position: fixed;\r\n  text-align: center;\r\n  bottom: 50px;\r\n  width: 100%;\r\n  left: 0;\r\n\r\n}\r\n\r\n.adresa{\r\n  font-size: 20px;\r\n  margin-top: 20px;\r\n  text-align: left;\r\n  color: #ffffff;\r\n  font-family: 'arial', sans-serif;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst input = document.querySelector(\"#lokacija\");\r\nconst adress = document.querySelector(\"form p\");\r\nconst tableHead = document.querySelector(\"thead\");\r\nconst tableBody = document.querySelector(\"tbody\");\r\n \r\n\r\nlet globalData;\r\nconst cache = new Map();\r\n\r\n\r\n\r\nasync function getWeather(location) {\r\n  try {\r\n    const data = await fetch(\r\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&lang=en&key=RBMWSMLNFZEZX6RXBZQXHGAWZ&contentType=json`,\r\n      {\r\n        method: \"GET\",\r\n      }\r\n    );\r\n\r\n    const response = await data.json();\r\n\r\n    let currentConditions = new CurrentConditions(\r\n      response.currentConditions.conditions,\r\n      response.currentConditions.datetimeEpoch,\r\n      response.currentConditions.sunrise,\r\n      response.currentConditions.sunset,\r\n      response.currentConditions.temp\r\n    );\r\n\r\n    const days = response.days.map((el) => {\r\n      const hours = el.hours.map(\r\n        (elH) => new Hours(elH.datetime, elH.conditions, elH.temp, elH.icon)\r\n      );\r\n      return new Day(\r\n        el.datetime,\r\n        el.conditions,\r\n        hours,\r\n        el.sunrise,\r\n        el.sunset,\r\n        el.temp,\r\n        el.tempmax,\r\n        el.tempmin,\r\n        el.icon\r\n      );\r\n    });\r\n\r\n    const result = new Data(\r\n      response.address,\r\n      days,\r\n      response.latitude,\r\n      response.longitude,\r\n      response.resolvedAddress,\r\n      response.timezone,\r\n      currentConditions\r\n    );\r\n    console.log(result);\r\n    console.log(response);\r\n    globalData = result;\r\n    return result;\r\n  } catch (err) {\r\n    alert(\"Losa uneta vrednost!\");\r\n    console.error(err);\r\n    adress.innerText = \"\";\r\n    throw err;\r\n  }\r\n}\r\n\r\n\r\nfunction convertTime(epoch) {\r\n  const time = new Date(epoch * 1000);\r\n  const options = {\r\n    timeZone: \"CET\",\r\n    hour: \"2-digit\",\r\n    minute: \"2-digit\",\r\n    second: \"2-digit\",\r\n    hour12: false,\r\n  };\r\n  const formatter = new Intl.DateTimeFormat(\"sr-RS\", options);\r\n  return formatter.format(time);\r\n}\r\n\r\nfunction createHeader() {\r\n  tableBody.innerHTML = \"\";\r\n  tableHead.innerHTML = \"\";\r\n  const row = document.createElement(\"tr\");\r\n  let columns = Object.keys(globalData.Days[0]);\r\n  columns = columns.filter((hour) => hour != \"Hours\");\r\n  columns.forEach((column) => {\r\n    const th = document.createElement(\"th\");\r\n    th.textContent = column;\r\n    row.appendChild(th);\r\n  });\r\n  tableHead.appendChild(row);\r\n}\r\n\r\nfunction debounce(func, delay) {\r\n  let timeout;\r\n  return function (...args) {\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(() => func.apply(this, args), delay);\r\n  };\r\n}\r\n\r\nconst submitData = async (e) => {\r\n  let location = input.value.trim();\r\n  const capitalizedLocation = location.split(\" \").filter(word => word.trim() !== \"\").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(\" \");\r\n  location = capitalizedLocation;\r\n  if (location.length === 0) {\r\n    alert(\"Potrebno je uneti lokaciju!\");\r\n    return;\r\n  }\r\n  showLoading();\r\n  if (cache.has(location)) {\r\n    globalData = cache.get(location);\r\n  } else {\r\n    try {\r\n      globalData = await getWeather(location);\r\n      cache.set(location, globalData);\r\n    } catch (error) {\r\n      hideLoading();\r\n      console.error(\"Error fetching weather data:\", error);\r\n    }\r\n  }\r\n  adress.innerText = `${globalData.ResolvedAddress}\\nLat: ${globalData.Latitude}, Lon: ${globalData.Longitude}\\nTimezone: ${globalData.Timezone}\\nCurrent Conditions: ${globalData.currentConditions.conditions}, Temp: ${globalData.currentConditions.temp}`;\r\n  renderTable();\r\n  hideLoading();\r\n}\r\n\r\nconst debouncedSubmit = debounce(submitData, 500);\r\n\r\ndocument.querySelector(\"form\").addEventListener(\"submit\", (e) => {e.preventDefault(); debouncedSubmit(e);});\r\n\r\nfunction renderTable() {\r\n  try {\r\n    createHeader();\r\n    let colspan = [1, 3, 3, 1];\r\n    let brojac = 0;\r\n    globalData.Days.forEach((day, index) => {\r\n      const row = document.createElement(\"tr\");\r\n      row.id = index + 1;\r\n      for (const [key, value] of Object.entries(day)) {\r\n        const td = document.createElement(\"td\");\r\n        if (key == \"icon\") {\r\n          const img = document.createElement(\"img\");\r\n          img.src = `./icons/${value}.png`;\r\n          img.alt = value;\r\n          img.classList.add(\"weatherIcon\");\r\n          td.appendChild(img);\r\n          row.appendChild(td);\r\n        } else if (key != \"Hours\") {\r\n          td.textContent = value;\r\n          row.appendChild(td);\r\n        }\r\n      }\r\n      row.classList.add(\"dayRow\");\r\n      row.addEventListener(\"click\", () => {\r\n        const allRows = document.querySelectorAll(\".hourRow\");\r\n        const hourRows = tableBody.querySelectorAll(\r\n          `.hourRow[data-day=\"${index + 1}\"]`\r\n        );\r\n        allRows.forEach((hr) => {\r\n          if (Array.from(hourRows).includes(hr)) return;\r\n          hr.classList.remove(\"expanded\");\r\n        });\r\n        hourRows.forEach((hr) => {\r\n          hr.classList.toggle(\"expanded\");\r\n        });\r\n      });\r\n\r\n      tableBody.appendChild(row);\r\n      day.Hours.forEach((hour) => {\r\n        const row = document.createElement(\"tr\");\r\n        row.setAttribute(\"data-day\", index + 1);\r\n        for (const [key, value] of Object.entries(hour)) {\r\n          const td = document.createElement(\"td\");\r\n          if (key == \"icon\") {\r\n            const img = document.createElement(\"img\");\r\n            img.src = `./icons/${value}.png`;\r\n            img.alt = value;\r\n            img.style.width = \"32px\";\r\n            img.style.height = \"32px\";\r\n            td.appendChild(img);\r\n          } else {\r\n            td.textContent = value;\r\n          }\r\n          td.colSpan = colspan[brojac];\r\n          brojac++;\r\n          row.classList.add(\"hourRow\");\r\n          row.appendChild(td);\r\n        }\r\n        brojac = 0;\r\n        tableBody.appendChild(row);\r\n      });\r\n    });\r\n  } catch (error) {\r\n    alert(\"Greška: Unesite validnu lokaciju.\");\r\n  }\r\n}\r\n\r\nfunction showLoading() {\r\n  document.querySelector(\"#loading\").style.display = \"block\";\r\n}\r\n\r\nfunction hideLoading() {\r\n  document.querySelector(\"#loading\").style.display = \"none\";\r\n}\r\n\r\nclass Data {\r\n  constructor(\r\n    adress,\r\n    days,\r\n    latitude,\r\n    longitude,\r\n    resolvedAddress,\r\n    timezone,\r\n    currentConditions\r\n  ) {\r\n    this.Adress = adress;\r\n    this.Days = days;\r\n    this.Latitude = latitude;\r\n    this.Longitude = longitude;\r\n    this.ResolvedAddress = resolvedAddress;\r\n    this.Timezone = timezone;\r\n    this.currentConditions = currentConditions;\r\n  }\r\n}\r\n\r\nclass Day {\r\n  constructor(\r\n    datetime,\r\n    conditions,\r\n    hours,\r\n    sunrise,\r\n    sunset,\r\n    temp,\r\n    tempMax,\r\n    tempMin,\r\n    icon\r\n  ) {\r\n    this.Datetime = datetime;\r\n    this.Conditions = conditions;\r\n    this.Hours = hours;\r\n    this.Sunrise = sunrise + \"h\";\r\n    this.Sunset = sunset + \"h\";\r\n    this.Temp = temp + \"°C\";\r\n    this.TempMax = tempMax + \"°C\";\r\n    this.TempMin = tempMin + \"°C\";\r\n    this.icon = icon;\r\n  }\r\n}\r\n\r\nclass Hours {\r\n  constructor(datetime, conditions, temp, icon) {\r\n    this.datetime = `- ${datetime}h `;\r\n    this.Conditions = conditions;\r\n    this.Temp = temp + \"°C\";\r\n    this.icon = icon;\r\n  }\r\n}\r\n\r\nclass CurrentConditions {\r\n  constructor(conditions, dateTimeEpoch, sunrise, sunset, temp) {\r\n    this.conditions = conditions;\r\n    this.datetime = convertTime(dateTimeEpoch) + \"h\";\r\n    this.sunrise = sunrise + \"h\";\r\n    this.sunset = sunset + \"h\";\r\n    this.temp = temp + \"°C\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather/./src/logic.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.css?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/logic.js");
/******/ 	
/******/ })()
;