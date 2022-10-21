/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./grill-fire.jpg */ "./src/grill-fire.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n\n}\n\nimg {\n    height: 12rem;\n    width: 16rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 2fr repeat(3, 1fr) 2fr;\n    grid-template-rows: 2rem 4rem repeat(auto-fit, minmax(15rem, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n}\n\n.credits {\n    grid-area: 1 / 1 / 2 / 5;\n}\n\n.navbar {\n    grid-area: 2 / 2 / 3 / 5;\n    display: flex;\n    \n    \n}\n\n.navbar button {\n    flex: 1;\n    padding: 0.5rem 0;\n    font-size: 1.5rem;\n    font-weight: bolder;\n    color: darkred;\n\n}\n\n.main {\n    grid-area: 3 / 2 / auto / 5;\n    margin: 1rem 0;\n    \n    \n}\n\n.main, .navbar button {\n    border: 5px solid darkred;\n    background-color: rgba(40,40,40,1);\n}\n\n/*Classes for home component*/\n.home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    color: white;\n}\n\n.home h1 {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\n.home img {\n    height: 8rem;\n    width: auto;\n}\n\n.home-food {\n    display: flex;\n    gap: 1rem;\n}\n\n/*Classes for Menu component*/\n\n.menu {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    gap: 0.5rem;\n    \n}\n.menu h1 {\n    text-decoration: underline;\n    align-self: center;\n}\n\n.menu-card {\n    font-size: 0.6rem;\n    text-align: center;\n    align-self: center;\n    display: grid;\n    grid-template-rows: 0.2fr 0.2fr 1fr;\n    justify-items: center;\n    align-items: center;\n    height: 20rem;\n    width: 20rem;\n    border: 2px solid darkred;\n    margin: 1rem;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.food-name {\n    grid-row: 1 / 2;\n}\n\n.food-desc, .price {\n    font-style: italic;\n    grid-row: 2 / 3;\n    padding: 0.1rem;\n}\n\n.food-name, .price {\n    color: darkred;\n}\n\n.price {\n    align-self: center;\n    font-size: 0.8rem;\n    position: relative;\n    top: 0.05rem;\n}\n\n.food-img {\n    grid-row: 3 / 4;\n    \n    \n}\n\n/*Classes for Contacts component*/\n\n.contacts {\n    padding: 0.8rem;\n    color: white;\n}\n\n.address h1 {\n    padding: 0;\n    margin: 0;\n}\n\n@media screen and (max-width: 35rem) {\n\n    .content {\n        grid-template-columns: 0.1fr repeat(3, 1fr) 0.1fr;\n    }\n    .home-food {\n        flex-direction: column;\n    }\n\n    .navbar button {\n        font-size: 1rem;\n        padding: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,iFAAiE;IACjE,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,kEAAkE;IAClE,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,aAAa;;;AAGjB;;AAEA;IACI,OAAO;IACP,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;;AAElB;;AAEA;IACI,2BAA2B;IAC3B,cAAc;;;AAGlB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;AACtC;;AAEA,6BAA6B;AAC7B;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA,6BAA6B;;AAE7B;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;IACvB,WAAW;;AAEf;AACA;IACI,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mCAAmC;IACnC,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;;;AAGnB;;AAEA,iCAAiC;;AAEjC;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI;QACI,iDAAiD;IACrD;IACA;QACI,sBAAsB;IAC1B;;IAEA;QACI,eAAe;QACf,UAAU;IACd;AACJ","sourcesContent":["html {\n    background: url('./grill-fire.jpg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n\n}\n\nimg {\n    height: 12rem;\n    width: 16rem;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 2fr repeat(3, 1fr) 2fr;\n    grid-template-rows: 2rem 4rem repeat(auto-fit, minmax(15rem, 1fr));\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n}\n\n.credits {\n    grid-area: 1 / 1 / 2 / 5;\n}\n\n.navbar {\n    grid-area: 2 / 2 / 3 / 5;\n    display: flex;\n    \n    \n}\n\n.navbar button {\n    flex: 1;\n    padding: 0.5rem 0;\n    font-size: 1.5rem;\n    font-weight: bolder;\n    color: darkred;\n\n}\n\n.main {\n    grid-area: 3 / 2 / auto / 5;\n    margin: 1rem 0;\n    \n    \n}\n\n.main, .navbar button {\n    border: 5px solid darkred;\n    background-color: rgba(40,40,40,1);\n}\n\n/*Classes for home component*/\n.home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n    color: white;\n}\n\n.home h1 {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\n.home img {\n    height: 8rem;\n    width: auto;\n}\n\n.home-food {\n    display: flex;\n    gap: 1rem;\n}\n\n/*Classes for Menu component*/\n\n.menu {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    gap: 0.5rem;\n    \n}\n.menu h1 {\n    text-decoration: underline;\n    align-self: center;\n}\n\n.menu-card {\n    font-size: 0.6rem;\n    text-align: center;\n    align-self: center;\n    display: grid;\n    grid-template-rows: 0.2fr 0.2fr 1fr;\n    justify-items: center;\n    align-items: center;\n    height: 20rem;\n    width: 20rem;\n    border: 2px solid darkred;\n    margin: 1rem;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.food-name {\n    grid-row: 1 / 2;\n}\n\n.food-desc, .price {\n    font-style: italic;\n    grid-row: 2 / 3;\n    padding: 0.1rem;\n}\n\n.food-name, .price {\n    color: darkred;\n}\n\n.price {\n    align-self: center;\n    font-size: 0.8rem;\n    position: relative;\n    top: 0.05rem;\n}\n\n.food-img {\n    grid-row: 3 / 4;\n    \n    \n}\n\n/*Classes for Contacts component*/\n\n.contacts {\n    padding: 0.8rem;\n    color: white;\n}\n\n.address h1 {\n    padding: 0;\n    margin: 0;\n}\n\n@media screen and (max-width: 35rem) {\n\n    .content {\n        grid-template-columns: 0.1fr repeat(3, 1fr) 0.1fr;\n    }\n    .home-food {\n        flex-direction: column;\n    }\n\n    .navbar button {\n        font-size: 1rem;\n        padding: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


function contactComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "contacts");
    const phone = document.createElement("h1");
    phone.textContent = "Phone number: (574) 631-2320";
    content.appendChild(phone);

    const email = document.createElement("h1");
    email.textContent = "Email: feedback@smashburger.com";
    content.appendChild(email);

    const address = document.createElement("div");
    address.setAttribute("class", "address");
    const address1 = document.createElement("h1");
    address1.textContent = "Address: University of Notre Dame,";
    address.appendChild(address1);
    const address2 = document.createElement("h1");
    address2.textContent = "Smashburger Huddle Building 43 Notre Dame,";
    address.appendChild(address2);
    const address3 = document.createElement("h1");
    address3.textContent = "IN 46556";
    address.appendChild(address3);
    content.appendChild(address);

    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactComponent);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _burger_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.jpeg */ "./src/burger.jpeg");
/* harmony import */ var _wings_promo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wings-promo.jpg */ "./src/wings-promo.jpg");
/* harmony import */ var _shakes_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shakes.jpg */ "./src/shakes.jpg");





function homeComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "home");
    const greeting = document.createElement("h1");
    greeting.textContent = "Welcome to Smash Burger! Try out our Burgers, Wings, and Shakes!";

    content.appendChild(greeting);

    const food = document.createElement("div");
    food.setAttribute("class", "home-food");

    const burger = new Image();
    burger.src = _burger_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    food.appendChild(burger);

    const wings = new Image();
    wings.src = _wings_promo_jpg__WEBPACK_IMPORTED_MODULE_2__;
    food.appendChild(wings);

    const shakes = new Image();
    shakes.src = _shakes_jpg__WEBPACK_IMPORTED_MODULE_3__;
    food.appendChild(shakes);
    content.appendChild(food);

    const hours = document.createElement("h1");
    hours.textContent = "Hours";
    hours.style.textDecoration = "underline";
    content.appendChild(hours);

    const open = document.createElement("h1");
    open.textContent = "Monday - Saturday: 10am - 3pm";
    content.appendChild(open);

    const closed = document.createElement("h1");
    closed.textContent = "Sunday: closed";
    content.appendChild(closed);
    return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _brisket_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brisket.jpg */ "./src/brisket.jpg");
/* harmony import */ var _breakfast_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakfast-burger.jpg */ "./src/breakfast-burger.jpg");
/* harmony import */ var _classic_smash_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classic-smash.jpeg */ "./src/classic-smash.jpeg");
/* harmony import */ var _bbq_wings_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bbq-wings.jpg */ "./src/bbq-wings.jpg");
/* harmony import */ var _scorchin_wings_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scorchin-wings.jpg */ "./src/scorchin-wings.jpg");
/* harmony import */ var _garlic_wings_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./garlic-wings.jpg */ "./src/garlic-wings.jpg");
/* harmony import */ var _vanilla_shake_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vanilla-shake.jpg */ "./src/vanilla-shake.jpg");
/* harmony import */ var _oreo_shake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oreo-shake.jpg */ "./src/oreo-shake.jpg");
/* harmony import */ var _peanut_butter_shake_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./peanut-butter-shake.jpeg */ "./src/peanut-butter-shake.jpeg");
/* harmony import */ var _sweet_potato_fries_JPG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sweet-potato-fries.JPG */ "./src/sweet-potato-fries.JPG");
/* harmony import */ var _smash_tots_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./smash-tots.jpg */ "./src/smash-tots.jpg");
/* harmony import */ var _sprouts_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sprouts.jpg */ "./src/sprouts.jpg");

















function menuComponent() {
    const content = document.createElement("div");
    content.setAttribute("class", "menu");
    
    const burgers = document.createElement("h1");
    burgers.textContent = "Burgers";
    content.appendChild(burgers);

    //burger items
    content.appendChild(item("Smoked Bacon Brisket Burger", "Certified Angus Beef, smoked aged cheddar cheese, brisket, applewood smoked bacon, pickles, bbq sauce, toasted brioche bun.",
    10, _brisket_jpg__WEBPACK_IMPORTED_MODULE_0__));

    content.appendChild(item("Bacon, Egg, & Cheese Breakfast Burger", "Applewood-smoked bacon, two fried eggs, and cheddar cheese, all on a brioche bun.",
    8, _breakfast_burger_jpg__WEBPACK_IMPORTED_MODULE_1__));

    content.appendChild(item("Classic Smashburger", "Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun.",
    9, _classic_smash_jpeg__WEBPACK_IMPORTED_MODULE_2__));

    //Wings items
    const wings = document.createElement("h1");
    wings.textContent = "Wings";
    content.appendChild(wings);

    content.appendChild(item("BBQ Wings", "6 All Natural traditional bone-in wings, tossed with BBQ and served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    8, _bbq_wings_jpg__WEBPACK_IMPORTED_MODULE_3__));

    content.appendChild(item("Scorchin' Hot Wings", "6 All Natural traditional bone-in wings, tossed with Nashville Hot and served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    10, _scorchin_wings_jpg__WEBPACK_IMPORTED_MODULE_4__));

    content.appendChild(item("Garlic Rosemary Wings", "6 All Natural traditional bone-in wings, tossed with our Signature Smash seasoning: rosemary, garlic salt pepper & thyme, served with a side of ranch dressing. Wings are sourced from USA and are hormone + steroid free.",
    9, _garlic_wings_jpg__WEBPACK_IMPORTED_MODULE_5__));

    //Shakes Items
    const shakes = document.createElement("h1");
    shakes.textContent = "Shakes";
    content.appendChild(shakes);

    content.appendChild(item("Vanilla Shake", "Made with Häagen-Dazs® Ice Cream.",
    5, _vanilla_shake_jpg__WEBPACK_IMPORTED_MODULE_6__));

    content.appendChild(item("Oreo Shake", "Made with Häagen-Dazs® Ice Cream.",
    5, _oreo_shake_jpg__WEBPACK_IMPORTED_MODULE_7__));

    content.appendChild(item("Peanut Butter Shake", "Made with Häagen Dazs® Ice Cream and REESE’S® Peanut Butter Sauce.",
    5, _peanut_butter_shake_jpeg__WEBPACK_IMPORTED_MODULE_8__));

    //Side Items
    const sides = document.createElement("h1");
    sides.textContent = "Sides";
    content.appendChild(sides);

    content.appendChild(item("Sweet Potato Fries", "Sweet potato fries.",
    3.50, _sweet_potato_fries_JPG__WEBPACK_IMPORTED_MODULE_9__));

    content.appendChild(item("Smash Tots®", "Crispy golden brown tots tossed in rosemary, garlic, & olive oil.",
    2.50, _smash_tots_jpg__WEBPACK_IMPORTED_MODULE_10__));

    content.appendChild(item("Crispy Brussels Sprouts", "Crispy brussels tossed with garlic, spices, served with ranch.",
    3, _sprouts_jpg__WEBPACK_IMPORTED_MODULE_11__));

    return content;

}

function item(name, description, price, image) {
    const card = document.createElement("div");
    card.setAttribute("class", "menu-card");

    const foodName = document.createElement("h1");
    foodName.setAttribute("class", "food-name");
    foodName.textContent = name;
    card.appendChild(foodName);

    const descContainer = document.createElement("div");
    descContainer.setAttribute("class", "food-desc");
    descContainer.textContent = description;
    

    const cost = document.createElement("span");
    cost.setAttribute("class", "price");
    cost.textContent = ` $${price}`;
    descContainer.appendChild(cost);
    card.appendChild(descContainer);

    const pic = new Image();
    pic.src = image;
    pic.setAttribute("class", "food-img");
    card.appendChild(pic);

    return card;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);

/***/ }),

/***/ "./src/bbq-wings.jpg":
/*!***************************!*\
  !*** ./src/bbq-wings.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b8b4715a37ab81c0d46.jpg";

/***/ }),

/***/ "./src/breakfast-burger.jpg":
/*!**********************************!*\
  !*** ./src/breakfast-burger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfd96032b3c232d0f3a7.jpg";

/***/ }),

/***/ "./src/brisket.jpg":
/*!*************************!*\
  !*** ./src/brisket.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f9d63f7c58510c9ca9d.jpg";

/***/ }),

/***/ "./src/burger.jpeg":
/*!*************************!*\
  !*** ./src/burger.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8898741434bf843ba6a3.jpeg";

/***/ }),

/***/ "./src/classic-smash.jpeg":
/*!********************************!*\
  !*** ./src/classic-smash.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "335202e2b7e2aefbbdb7.jpeg";

/***/ }),

/***/ "./src/garlic-wings.jpg":
/*!******************************!*\
  !*** ./src/garlic-wings.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ee2a6089c745d9e6986.jpg";

/***/ }),

/***/ "./src/grill-fire.jpg":
/*!****************************!*\
  !*** ./src/grill-fire.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cc504fd8b5faec280ae.jpg";

/***/ }),

/***/ "./src/oreo-shake.jpg":
/*!****************************!*\
  !*** ./src/oreo-shake.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727c34c822d09b6b9466.jpg";

/***/ }),

/***/ "./src/peanut-butter-shake.jpeg":
/*!**************************************!*\
  !*** ./src/peanut-butter-shake.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f983e0c4f2e67e78ded7.jpeg";

/***/ }),

/***/ "./src/scorchin-wings.jpg":
/*!********************************!*\
  !*** ./src/scorchin-wings.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "046e3b011fab40f5ddc1.jpg";

/***/ }),

/***/ "./src/shakes.jpg":
/*!************************!*\
  !*** ./src/shakes.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d87332dc5f1f58d57be.jpg";

/***/ }),

/***/ "./src/smash-tots.jpg":
/*!****************************!*\
  !*** ./src/smash-tots.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "634d63723c4fcd0f7c32.jpg";

/***/ }),

/***/ "./src/sprouts.jpg":
/*!*************************!*\
  !*** ./src/sprouts.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdb64bb2f020b68f5690.jpg";

/***/ }),

/***/ "./src/sweet-potato-fries.JPG":
/*!************************************!*\
  !*** ./src/sweet-potato-fries.JPG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0706740417d4180549dd.JPG";

/***/ }),

/***/ "./src/vanilla-shake.jpg":
/*!*******************************!*\
  !*** ./src/vanilla-shake.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f0e248132aa07a968a5.jpg";

/***/ }),

/***/ "./src/wings-promo.jpg":
/*!*****************************!*\
  !*** ./src/wings-promo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "753e1348f0ae07a88bd9.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






 function component() {
    const content = document.createElement('div');
    content.setAttribute("class", "content");
    
    const credits = document.createElement("div");
    credits.setAttribute("class", "credits");
    credits.textContent = 'Photo by ';

    const aName = document.createElement("a");
    aName.setAttribute("href", "https://unsplash.com/@firedorange717?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    aName.textContent = "Joshua Kantarges ";
    credits.appendChild(aName);
    credits.appendChild(document.createTextNode("on"));


    const usplash = document.createElement("a");
    usplash.setAttribute("href", "https://unsplash.com/s/photos/grill-fire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");
    usplash.textContent = " Usplash";
    credits.appendChild(usplash);
    
    content.appendChild(credits);

    //main content
    const main = document.createElement("div");
    main.setAttribute("class", "main");
    main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

    //navbar
    const nav = document.createElement('div');
    nav.setAttribute("class", "navbar");

    const home = document.createElement("button");
    home.textContent = "Home";

    home.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });

    const menu = document.createElement("button");
    menu.textContent = "Menu";

    menu.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    })

    const contact = document.createElement("button");
    contact.textContent = "Contact";

    contact.addEventListener("click", () => {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      main.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);
    
    content.appendChild(main);
    
    return content;
  }
 
  document.body.appendChild(component());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ3JpbGwtZmlyZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogMTZyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgcmVwZWF0KDMsIDFmcikgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gNHJlbSByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm5hdmJhciBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcblxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyBhdXRvIC8gNTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1haW4sIC5uYXZiYXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZGFya3JlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCw0MCw0MCwxKTtcXG59XFxuXFxuLypDbGFzc2VzIGZvciBob21lIGNvbXBvbmVudCovXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lIGgxIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIGltZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5ob21lLWZvb2Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qQ2xhc3NlcyBmb3IgTWVudSBjb21wb25lbnQqL1xcblxcbi5tZW51IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgXFxufVxcbi5tZW51IGgxIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjJmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrcmVkO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuLmZvb2QtbmFtZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZvb2QtZGVzYywgLnByaWNlIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuLmZvb2QtbmFtZSwgLnByaWNlIHtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5wcmljZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjA1cmVtO1xcbn1cXG5cXG4uZm9vZC1pbWcge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLypDbGFzc2VzIGZvciBDb250YWN0cyBjb21wb25lbnQqL1xcblxcbi5jb250YWN0cyB7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkcmVzcyBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzVyZW0pIHtcXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjFmciByZXBlYXQoMywgMWZyKSAwLjFmcjtcXG4gICAgfVxcbiAgICAuaG9tZS1mb29kIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhciBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlGQUFpRTtJQUNqRSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxrRUFBa0U7SUFDbEUsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYzs7O0FBR2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztBQUN0Qzs7QUFFQSw2QkFBNkI7QUFDN0I7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlOzs7QUFHbkI7O0FBRUEsaUNBQWlDOztBQUVqQztJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7SUFFSTtRQUNJLGlEQUFpRDtJQUNyRDtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vZ3JpbGwtZmlyZS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICB3aWR0aDogMTZyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgcmVwZWF0KDMsIDFmcikgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gNHJlbSByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNXJlbSwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm5hdmJhciBidXR0b24ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcblxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyBhdXRvIC8gNTtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1haW4sIC5uYXZiYXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZGFya3JlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCw0MCw0MCwxKTtcXG59XFxuXFxuLypDbGFzc2VzIGZvciBob21lIGNvbXBvbmVudCovXFxuLmhvbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lIGgxIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIGltZyB7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5ob21lLWZvb2Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi8qQ2xhc3NlcyBmb3IgTWVudSBjb21wb25lbnQqL1xcblxcbi5tZW51IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgXFxufVxcbi5tZW51IGgxIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjJmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrcmVkO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuLmZvb2QtbmFtZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLmZvb2QtZGVzYywgLnByaWNlIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuLmZvb2QtbmFtZSwgLnByaWNlIHtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5wcmljZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjA1cmVtO1xcbn1cXG5cXG4uZm9vZC1pbWcge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLypDbGFzc2VzIGZvciBDb250YWN0cyBjb21wb25lbnQqL1xcblxcbi5jb250YWN0cyB7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkcmVzcyBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzVyZW0pIHtcXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjFmciByZXBlYXQoMywgMWZyKSAwLjFmcjtcXG4gICAgfVxcbiAgICAuaG9tZS1mb29kIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm5hdmJhciBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIGNvbnRhY3RDb21wb25lbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3RzXCIpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6ICg1NzQpIDYzMS0yMzIwXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGZlZWRiYWNrQHNtYXNoYnVyZ2VyLmNvbVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZHJlc3NcIik7XG4gICAgY29uc3QgYWRkcmVzczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgYWRkcmVzczEudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IFVuaXZlcnNpdHkgb2YgTm90cmUgRGFtZSxcIjtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MxKTtcbiAgICBjb25zdCBhZGRyZXNzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBhZGRyZXNzMi50ZXh0Q29udGVudCA9IFwiU21hc2hidXJnZXIgSHVkZGxlIEJ1aWxkaW5nIDQzIE5vdHJlIERhbWUsXCI7XG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMik7XG4gICAgY29uc3QgYWRkcmVzczMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgYWRkcmVzczMudGV4dENvbnRlbnQgPSBcIklOIDQ2NTU2XCI7XG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzMyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29tcG9uZW50OyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGJ1cmdlclBpYyBmcm9tIFwiLi9idXJnZXIuanBlZ1wiO1xuaW1wb3J0IHdpbmdzUGljIGZyb20gXCIuL3dpbmdzLXByb21vLmpwZ1wiO1xuaW1wb3J0IHNoYWtlc1BpYyBmcm9tIFwiLi9zaGFrZXMuanBnXCI7XG5cbmZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWVcIik7XG4gICAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gU21hc2ggQnVyZ2VyISBUcnkgb3V0IG91ciBCdXJnZXJzLCBXaW5ncywgYW5kIFNoYWtlcyFcIjtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuXG4gICAgY29uc3QgZm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWUtZm9vZFwiKTtcblxuICAgIGNvbnN0IGJ1cmdlciA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlci5zcmMgPSBidXJnZXJQaWM7XG4gICAgZm9vZC5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gICAgY29uc3Qgd2luZ3MgPSBuZXcgSW1hZ2UoKTtcbiAgICB3aW5ncy5zcmMgPSB3aW5nc1BpYztcbiAgICBmb29kLmFwcGVuZENoaWxkKHdpbmdzKTtcblxuICAgIGNvbnN0IHNoYWtlcyA9IG5ldyBJbWFnZSgpO1xuICAgIHNoYWtlcy5zcmMgPSBzaGFrZXNQaWM7XG4gICAgZm9vZC5hcHBlbmRDaGlsZChzaGFrZXMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcbiAgICBob3Vycy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICBjb25zdCBvcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG9wZW4udGV4dENvbnRlbnQgPSBcIk1vbmRheSAtIFNhdHVyZGF5OiAxMGFtIC0gM3BtXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvcGVuKTtcblxuICAgIGNvbnN0IGNsb3NlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjbG9zZWQudGV4dENvbnRlbnQgPSBcIlN1bmRheTogY2xvc2VkXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjbG9zZWQpO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lQ29tcG9uZW50OyIsIlxuaW1wb3J0IGJyaXNrZXQgZnJvbSAnLi9icmlza2V0LmpwZyc7XG5pbXBvcnQgYnJlYWtmYXN0QnVyZ2VyIGZyb20gJy4vYnJlYWtmYXN0LWJ1cmdlci5qcGcnO1xuaW1wb3J0IGNsYXNzaWNCdXJnZXIgZnJvbSAnLi9jbGFzc2ljLXNtYXNoLmpwZWcnO1xuXG5pbXBvcnQgYmJxV2luZ3MgZnJvbSAnLi9iYnEtd2luZ3MuanBnJztcbmltcG9ydCBzY29yY2hXaW5ncyBmcm9tICcuL3Njb3JjaGluLXdpbmdzLmpwZyc7XG5pbXBvcnQgZ2FybGljV2luZ3MgZnJvbSAnLi9nYXJsaWMtd2luZ3MuanBnJztcblxuaW1wb3J0IHZhbmlsbGEgZnJvbSAnLi92YW5pbGxhLXNoYWtlLmpwZyc7XG5pbXBvcnQgb3JlbyBmcm9tICcuL29yZW8tc2hha2UuanBnJztcbmltcG9ydCBwYiBmcm9tICcuL3BlYW51dC1idXR0ZXItc2hha2UuanBlZyc7XG5cbmltcG9ydCBzd2VldFBvdGF0b0ZyaWVzIGZyb20gJy4vc3dlZXQtcG90YXRvLWZyaWVzLkpQRyc7XG5pbXBvcnQgdG90cyBmcm9tICcuL3NtYXNoLXRvdHMuanBnJztcbmltcG9ydCBzcHJvdXRzIGZyb20gJy4vc3Byb3V0cy5qcGcnO1xuXG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51XCIpO1xuICAgIFxuICAgIGNvbnN0IGJ1cmdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgYnVyZ2Vycy50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVyZ2Vycyk7XG5cbiAgICAvL2J1cmdlciBpdGVtc1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIlNtb2tlZCBCYWNvbiBCcmlza2V0IEJ1cmdlclwiLCBcIkNlcnRpZmllZCBBbmd1cyBCZWVmLCBzbW9rZWQgYWdlZCBjaGVkZGFyIGNoZWVzZSwgYnJpc2tldCwgYXBwbGV3b29kIHNtb2tlZCBiYWNvbiwgcGlja2xlcywgYmJxIHNhdWNlLCB0b2FzdGVkIGJyaW9jaGUgYnVuLlwiLFxuICAgIDEwLCBicmlza2V0KSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0oXCJCYWNvbiwgRWdnLCAmIENoZWVzZSBCcmVha2Zhc3QgQnVyZ2VyXCIsIFwiQXBwbGV3b29kLXNtb2tlZCBiYWNvbiwgdHdvIGZyaWVkIGVnZ3MsIGFuZCBjaGVkZGFyIGNoZWVzZSwgYWxsIG9uIGEgYnJpb2NoZSBidW4uXCIsXG4gICAgOCwgYnJlYWtmYXN0QnVyZ2VyKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0oXCJDbGFzc2ljIFNtYXNoYnVyZ2VyXCIsIFwiQ2VydGlmaWVkIEFuZ3VzIEJlZWYsIEFtZXJpY2FuIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvZXMsIHJlZCBvbmlvbnMsIHBpY2tsZXMsIFNtYXNoIFNhdWNlwq4sIGtldGNodXAsIHRvYXN0ZWQgYnVuLlwiLFxuICAgIDksIGNsYXNzaWNCdXJnZXIpKTtcblxuICAgIC8vV2luZ3MgaXRlbXNcbiAgICBjb25zdCB3aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB3aW5ncy50ZXh0Q29udGVudCA9IFwiV2luZ3NcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdpbmdzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIkJCUSBXaW5nc1wiLCBcIjYgQWxsIE5hdHVyYWwgdHJhZGl0aW9uYWwgYm9uZS1pbiB3aW5ncywgdG9zc2VkIHdpdGggQkJRIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgcmFuY2ggZHJlc3NpbmcuIFdpbmdzIGFyZSBzb3VyY2VkIGZyb20gVVNBIGFuZCBhcmUgaG9ybW9uZSArIHN0ZXJvaWQgZnJlZS5cIixcbiAgICA4LCBiYnFXaW5ncykpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtKFwiU2NvcmNoaW4nIEhvdCBXaW5nc1wiLCBcIjYgQWxsIE5hdHVyYWwgdHJhZGl0aW9uYWwgYm9uZS1pbiB3aW5ncywgdG9zc2VkIHdpdGggTmFzaHZpbGxlIEhvdCBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHJhbmNoIGRyZXNzaW5nLiBXaW5ncyBhcmUgc291cmNlZCBmcm9tIFVTQSBhbmQgYXJlIGhvcm1vbmUgKyBzdGVyb2lkIGZyZWUuXCIsXG4gICAgMTAsIHNjb3JjaFdpbmdzKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0oXCJHYXJsaWMgUm9zZW1hcnkgV2luZ3NcIiwgXCI2IEFsbCBOYXR1cmFsIHRyYWRpdGlvbmFsIGJvbmUtaW4gd2luZ3MsIHRvc3NlZCB3aXRoIG91ciBTaWduYXR1cmUgU21hc2ggc2Vhc29uaW5nOiByb3NlbWFyeSwgZ2FybGljIHNhbHQgcGVwcGVyICYgdGh5bWUsIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiByYW5jaCBkcmVzc2luZy4gV2luZ3MgYXJlIHNvdXJjZWQgZnJvbSBVU0EgYW5kIGFyZSBob3Jtb25lICsgc3Rlcm9pZCBmcmVlLlwiLFxuICAgIDksIGdhcmxpY1dpbmdzKSk7XG5cbiAgICAvL1NoYWtlcyBJdGVtc1xuICAgIGNvbnN0IHNoYWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBzaGFrZXMudGV4dENvbnRlbnQgPSBcIlNoYWtlc1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hha2VzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIlZhbmlsbGEgU2hha2VcIiwgXCJNYWRlIHdpdGggSMOkYWdlbi1EYXpzwq4gSWNlIENyZWFtLlwiLFxuICAgIDUsIHZhbmlsbGEpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIk9yZW8gU2hha2VcIiwgXCJNYWRlIHdpdGggSMOkYWdlbi1EYXpzwq4gSWNlIENyZWFtLlwiLFxuICAgIDUsIG9yZW8pKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIlBlYW51dCBCdXR0ZXIgU2hha2VcIiwgXCJNYWRlIHdpdGggSMOkYWdlbiBEYXpzwq4gSWNlIENyZWFtIGFuZCBSRUVTReKAmVPCriBQZWFudXQgQnV0dGVyIFNhdWNlLlwiLFxuICAgIDUsIHBiKSk7XG5cbiAgICAvL1NpZGUgSXRlbXNcbiAgICBjb25zdCBzaWRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBzaWRlcy50ZXh0Q29udGVudCA9IFwiU2lkZXNcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVzKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIlN3ZWV0IFBvdGF0byBGcmllc1wiLCBcIlN3ZWV0IHBvdGF0byBmcmllcy5cIixcbiAgICAzLjUwLCBzd2VldFBvdGF0b0ZyaWVzKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0oXCJTbWFzaCBUb3Rzwq5cIiwgXCJDcmlzcHkgZ29sZGVuIGJyb3duIHRvdHMgdG9zc2VkIGluIHJvc2VtYXJ5LCBnYXJsaWMsICYgb2xpdmUgb2lsLlwiLFxuICAgIDIuNTAsIHRvdHMpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbShcIkNyaXNweSBCcnVzc2VscyBTcHJvdXRzXCIsIFwiQ3Jpc3B5IGJydXNzZWxzIHRvc3NlZCB3aXRoIGdhcmxpYywgc3BpY2VzLCBzZXJ2ZWQgd2l0aCByYW5jaC5cIixcbiAgICAzLCBzcHJvdXRzKSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcblxufVxuXG5mdW5jdGlvbiBpdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1jYXJkXCIpO1xuXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgZm9vZE5hbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmb29kLW5hbWVcIik7XG4gICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuXG4gICAgY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvb2QtZGVzY1wiKTtcbiAgICBkZXNjQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgXG5cbiAgICBjb25zdCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29zdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByaWNlXCIpO1xuICAgIGNvc3QudGV4dENvbnRlbnQgPSBgICQke3ByaWNlfWA7XG4gICAgZGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb3N0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NDb250YWluZXIpO1xuXG4gICAgY29uc3QgcGljID0gbmV3IEltYWdlKCk7XG4gICAgcGljLnNyYyA9IGltYWdlO1xuICAgIHBpYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvb2QtaW1nXCIpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGljKTtcblxuICAgIHJldHVybiBjYXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29tcG9uZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgaG9tZVNjcmVlbiBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3RTY3JlZW4gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBtZW51U2NyZWVuIGZyb20gJy4vbWVudS5qcyc7XG5cblxuIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG4gICAgXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3JlZGl0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNyZWRpdHNcIik7XG4gICAgY3JlZGl0cy50ZXh0Q29udGVudCA9ICdQaG90byBieSAnO1xuXG4gICAgY29uc3QgYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhTmFtZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGZpcmVkb3JhbmdlNzE3P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiKTtcbiAgICBhTmFtZS50ZXh0Q29udGVudCA9IFwiSm9zaHVhIEthbnRhcmdlcyBcIjtcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKGFOYW1lKTtcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwib25cIikpO1xuXG5cbiAgICBjb25zdCB1c3BsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdXNwbGFzaC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcy9waG90b3MvZ3JpbGwtZmlyZT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIik7XG4gICAgdXNwbGFzaC50ZXh0Q29udGVudCA9IFwiIFVzcGxhc2hcIjtcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKHVzcGxhc2gpO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG5cbiAgICAvL21haW4gY29udGVudFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVNjcmVlbigpKTtcblxuICAgIC8vbmF2YmFyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2YmFyXCIpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVTY3JlZW4oKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVNjcmVlbigpKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTY3JlZW4oKSk7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==