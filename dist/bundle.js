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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.game-info {
  text-align: center;
  margin-bottom: 20px;
  min-height: 24px;
  font-weight: bold;
}

.ship-placement {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.boards-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.board-wrapper {
  flex: 1;
  min-width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 10px;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;
  width: 100%;
  aspect-ratio: 1;
}

.cell {
  background-color: #ddf;
  border: 1px solid #aac;
  cursor: pointer;
  aspect-ratio: 1;
}

.ship {
  background-color: #999;
}

.hit {
  background-color: #f66;
}

.miss {
  background-color: #aaa;
  position: relative;
}

.miss::after {
  content: '•';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #555;
}

.controls {
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #4c7faf;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #3a6a96;
}

.placement-mode .cell:hover {
  background-color: #bbd;
}

.valid-placement {
  background-color: #8f8 !important;
}

.invalid-placement {
  background-color: #f88 !important;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n  padding: 20px;\n}\n\n.container {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.game-info {\n  text-align: center;\n  margin-bottom: 20px;\n  min-height: 24px;\n  font-weight: bold;\n}\n\n.ship-placement {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n\n.board-wrapper {\n  flex: 1;\n  min-width: 300px;\n}\n\nh2 {\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  aspect-ratio: 1;\n}\n\n.cell {\n  background-color: #ddf;\n  border: 1px solid #aac;\n  cursor: pointer;\n  aspect-ratio: 1;\n}\n\n.ship {\n  background-color: #999;\n}\n\n.hit {\n  background-color: #f66;\n}\n\n.miss {\n  background-color: #aaa;\n  position: relative;\n}\n\n.miss::after {\n  content: '•';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #555;\n}\n\n.controls {\n  text-align: center;\n}\n\nbutton {\n  padding: 10px 20px;\n  background-color: #4c7faf;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\nbutton:hover {\n  background-color: #3a6a96;\n}\n\n.placement-mode .cell:hover {\n  background-color: #bbd;\n}\n\n.valid-placement {\n  background-color: #8f8 !important;\n}\n\n.invalid-placement {\n  background-color: #f88 !important;\n}\n\n.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/domInterface.js":
/*!*************************************!*\
  !*** ./src/modules/domInterface.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/modules/gameController.js");

const DOMInterface = (() => {
  // Declare all DOM elements at module level
  let playerBoardElement;
  let computerBoardElement;
  let gameInfoElement;
  let newGameButton;
  let shipPlacementArea;
  const initialize = () => {
    // Get DOM elements
    playerBoardElement = document.getElementById('player-board');
    computerBoardElement = document.getElementById('computer-board');
    gameInfoElement = document.getElementById('game-info');
    newGameButton = document.getElementById('new-game-btn');
    shipPlacementArea = document.getElementById('ship-placement');
    renderBoards();

    // Only setup placement and events if elements exist
    if (playerBoardElement && computerBoardElement) {
      setupEventListeners();
      if (shipPlacementArea) {
        setupShipPlacement();
      }
    }
  };
  const setupShipPlacement = () => {
    const shipSizes = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;
    let isHorizontal = true;
    const shipPlacementArea = document.getElementById('ship-placement');
    if (!shipPlacementArea) return;
    shipPlacementArea.innerHTML = '';

    // Rotation button
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate Ship';
    rotateBtn.addEventListener('click', () => {
      isHorizontal = !isHorizontal;
      updatePlacementPreview();
    });
    shipPlacementArea.appendChild(rotateBtn);

    // Random placement button
    const randomBtn = document.createElement('button');
    randomBtn.textContent = 'Random Placement';
    randomBtn.addEventListener('click', () => {
      _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].randomizePlayerShips();
      currentShipIndex = shipSizes.length;
      updatePlacementControls();
      renderPlayerBoard();
    });
    shipPlacementArea.appendChild(randomBtn);

    // Start game button (initially disabled)
    const startBtn = document.createElement('button');
    startBtn.id = 'start-game';
    startBtn.textContent = 'Start Game';
    startBtn.disabled = true;
    startBtn.addEventListener('click', () => {
      // Start the game in the game controller
      _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].startGame();
      document.getElementById('player-board').classList.remove('placement-mode');
      document.getElementById('computer-board').classList.remove('disabled');
      shipPlacementArea.style.display = 'none';
      updateGameInfo('Game started! Your turn to attack.');
    });
    shipPlacementArea.appendChild(startBtn);

    // Set up player board for placement
    document.getElementById('player-board').classList.add('placement-mode');
    document.getElementById('computer-board').classList.add('disabled');

    // Clear any existing preview classes
    const clearPreviews = () => {
      const cells = playerBoardElement.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.classList.remove('valid-placement');
        cell.classList.remove('invalid-placement');
      });
    };

    // Show placement preview
    const showPlacementPreview = (x, y, length, horizontal) => {
      clearPreviews();
      const isValid = checkValidPlacement(x, y, length, horizontal);
      const previewClass = isValid ? 'valid-placement' : 'invalid-placement';
      if (horizontal) {
        for (let i = 0; i < length; i++) {
          if (x + i < 10) {
            const cell = playerBoardElement.querySelector(`.cell[data-x="${x + i}"][data-y="${y}"]`);
            if (cell) cell.classList.add(previewClass);
          }
        }
      } else {
        for (let i = 0; i < length; i++) {
          if (y + i < 10) {
            const cell = playerBoardElement.querySelector(`.cell[data-x="${x}"][data-y="${y + i}"]`);
            if (cell) cell.classList.add(previewClass);
          }
        }
      }
    };

    // Check if placement is valid
    const checkValidPlacement = (x, y, length, horizontal) => {
      const board = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer().gameboard.getBoard();
      if (horizontal) {
        if (x + length > 10) return false;
        for (let i = 0; i < length; i++) {
          if (board[y][x + i] !== null) return false;
        }
      } else {
        if (y + length > 10) return false;
        for (let i = 0; i < length; i++) {
          if (board[y + i][x] !== null) return false;
        }
      }
      return true;
    };

    // Update placement preview when mouse moves
    const updatePlacementPreview = () => {
      const hoveredCell = playerBoardElement.querySelector('.cell:hover');
      if (hoveredCell && currentShipIndex < shipSizes.length) {
        const x = parseInt(hoveredCell.dataset.x);
        const y = parseInt(hoveredCell.dataset.y);
        showPlacementPreview(x, y, shipSizes[currentShipIndex], isHorizontal);
      }
    };

    // Add hover preview event to player board
    playerBoardElement.addEventListener('mouseover', e => {
      if (currentShipIndex >= shipSizes.length) return;
      if (!e.target.classList.contains('cell')) return;
      const x = parseInt(e.target.dataset.x);
      const y = parseInt(e.target.dataset.y);
      showPlacementPreview(x, y, shipSizes[currentShipIndex], isHorizontal);
    });

    // Add mouseout event to clear previews
    playerBoardElement.addEventListener('mouseout', () => {
      clearPreviews();
    });

    // Add placement click event to player board
    playerBoardElement.addEventListener('click', e => {
      if (currentShipIndex >= shipSizes.length) return;
      if (!e.target.classList.contains('cell')) return;
      const x = parseInt(e.target.dataset.x);
      const y = parseInt(e.target.dataset.y);
      const placed = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].placePlayerShip(shipSizes[currentShipIndex], x, y, isHorizontal);
      if (placed) {
        currentShipIndex++;
        updatePlacementControls();
        renderPlayerBoard();
      }
    });

    // Update controls based on placement progress
    const updatePlacementControls = () => {
      if (currentShipIndex >= shipSizes.length) {
        document.getElementById('start-game').disabled = false;
        updateGameInfo('All ships placed! Click Start Game to begin.');
      } else {
        updateGameInfo(`Place your ${getShipName(shipSizes[currentShipIndex])} (${shipSizes[currentShipIndex]} cells)`);
      }
    };

    // Map ship sizes to names
    const getShipName = size => {
      switch (size) {
        case 5:
          return 'Carrier';
        case 4:
          return 'Battleship';
        case 3:
          return 'Cruiser/Submarine';
        case 2:
          return 'Destroyer';
        default:
          return 'Ship';
      }
    };
    updatePlacementControls();
  };
  const renderBoards = () => {
    renderPlayerBoard();
    renderComputerBoard();
  };
  const renderPlayerBoard = () => {
    if (!playerBoardElement) return;
    playerBoardElement.innerHTML = '';
    const player = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].getPlayer();
    const board = player.gameboard.getBoard();
    renderBoardGrid(playerBoardElement, board, true);
  };
  const renderComputerBoard = () => {
    if (!computerBoardElement) return;
    computerBoardElement.innerHTML = '';
    const computer = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].getComputer();
    const board = computer.gameboard.getBoard();
    renderBoardGrid(computerBoardElement, board, false);
  };
  const renderBoardGrid = (boardElement, board, isPlayerBoard) => {
    boardElement.classList.add('board');
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = x;
        cell.dataset.y = y;
        const boardCell = board[y][x];
        if (boardCell && boardCell.ship && (isPlayerBoard || boardCell.hit)) {
          cell.classList.add('ship');
        }
        if (boardCell && boardCell.hit) {
          cell.classList.add('hit');
        } else if (boardCell === 'miss') {
          cell.classList.add('miss');
        }
        boardElement.appendChild(cell);
      }
    }
  };
  const updateBoards = () => {
    renderPlayerBoard();
    renderComputerBoard();
  };
  const setupEventListeners = () => {
    if (computerBoardElement) {
      computerBoardElement.addEventListener('click', handleComputerBoardClick);
    }
    if (newGameButton) {
      newGameButton.addEventListener('click', handleNewGameClick);
    }
  };
  const handleComputerBoardClick = event => {
    // Check if game is over or not started
    if (_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].isGameOver()) {
      updateGameInfo(`Game Over! ${_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].getWinner().name} wins! Click New Game to play again.`);
      return;
    }
    if (!_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].isGameStarted()) {
      updateGameInfo('You need to place your ships and start the game first!');
      return;
    }
    if (!event.target.classList.contains('cell')) return;
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
    const result = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].playTurn(x, y);
    if (result.success) {
      // Update the game state display
      if (result.result.hit) {
        if (result.result.message) {
          updateGameInfo(result.result.message);
        } else {
          updateGameInfo('Hit! Your turn again.');
        }
      } else {
        updateGameInfo('Miss! Computer is making a move...');
      }

      // Show computer's move result
      if (result.computerMove) {
        setTimeout(() => {
          if (result.computerMove.hit) {
            if (result.computerMove.message) {
              updateGameInfo(result.computerMove.message);
            } else {
              updateGameInfo('Computer hit your ship! Your turn.');
            }
          } else {
            updateGameInfo('Computer missed! Your turn.');
          }
        }, 500);
      }
      updateBoards();
      if (result.gameOver) {
        displayGameOver(result.winner);
      }
    } else if (result.message) {
      updateGameInfo(result.message);
    }
  };
  const handleNewGameClick = () => {
    _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].initGame();
    updateBoards();

    // Reset the ship placement area
    const shipPlacementArea = document.getElementById('ship-placement');
    if (shipPlacementArea) {
      shipPlacementArea.style.display = 'flex';
      setupShipPlacement();
    }

    // Reset board classes
    if (playerBoardElement) {
      playerBoardElement.classList.add('placement-mode');
    }
    if (computerBoardElement) {
      computerBoardElement.classList.add('disabled');
    }
    updateGameInfo('Place your ships to start a new game');
  };
  const updateGameInfo = message => {
    if (gameInfoElement) {
      gameInfoElement.textContent = message;
    }
  };
  const displayGameOver = winner => {
    updateGameInfo(`Game Over! ${winner} wins!`);
  };
  return {
    initialize,
    renderPlayerBoard,
    renderComputerBoard,
    updateBoards,
    setupEventListeners,
    displayGameOver
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMInterface);

/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
// src/modules/gameController.js


const GameController = (() => {
  let player;
  let computer;
  let currentPlayer;
  let gameOver = false;
  let winner = null;
  let gameStarted = false;
  const initGame = () => {
    player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Player');
    computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer', true);
    currentPlayer = player;
    gameOver = false;
    winner = null;
    gameStarted = false;

    // Only place ships on computer's board initially
    placeDefaultShips(computer.gameboard);
  };
  const placeDefaultShips = gameboard => {
    const ships = [(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5),
    // Carrier
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4),
    // Battleship
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3),
    // Cruiser
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3),
    // Submarine
    (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2) // Destroyer
    ];
    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const horizontal = Math.random() > 0.5;
        placed = gameboard.placeShip(ship, x, y, horizontal);
      }
    });
  };
  const placePlayerShip = (length, x, y, isHorizontal) => {
    if (gameStarted) return false;
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(length);
    return player.gameboard.placeShip(ship, x, y, isHorizontal);
  };
  const randomizePlayerShips = () => {
    player.gameboard = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Player').gameboard;
    placeDefaultShips(player.gameboard);
    return true;
  };
  const startGame = () => {
    gameStarted = true;
    return gameStarted;
  };
  const playTurn = (x, y) => {
    if (gameOver) return {
      success: false,
      message: 'Game is over'
    };
    if (!gameStarted) return {
      success: false,
      message: 'Game not started'
    };
    if (currentPlayer !== player) return {
      success: false,
      message: 'Not player turn'
    };

    // Player attacks computer
    const attackResult = player.attack(computer.gameboard, x, y);
    if (!attackResult) return {
      success: false,
      message: 'Invalid attack'
    };

    // Add message if ship was sunk
    if (attackResult.hit && attackResult.sunk) {
      attackResult.message = `You sunk the computer's ${getShipName(attackResult.ship.length)}!`;
    }

    // Check if computer lost
    if (computer.gameboard.allShipsSunk()) {
      gameOver = true;
      winner = player;
      return {
        success: true,
        result: attackResult,
        gameOver: true,
        winner: player.name
      };
    }

    // Computer turn
    currentPlayer = computer;
    const computerAttackResult = computer.randomAttack(player.gameboard);

    // Add message if ship was sunk
    if (computerAttackResult && computerAttackResult.hit && computerAttackResult.sunk) {
      computerAttackResult.message = `Computer sunk your ${getShipName(computerAttackResult.ship.length)}!`;
    }

    // Check if player lost
    if (player.gameboard.allShipsSunk()) {
      gameOver = true;
      winner = computer;
      return {
        success: true,
        result: attackResult,
        computerMove: computerAttackResult,
        gameOver: true,
        winner: computer.name
      };
    }

    // Back to player's turn
    currentPlayer = player;
    return {
      success: true,
      result: attackResult,
      computerMove: computerAttackResult
    };
  };

  // Helper function to get ship name from length
  const getShipName = length => {
    switch (length) {
      case 5:
        return 'Carrier';
      case 4:
        return 'Battleship';
      case 3:
        return 'Cruiser/Submarine';
      case 2:
        return 'Destroyer';
      default:
        return 'Ship';
    }
  };
  const isGameOver = () => gameOver;
  const getWinner = () => winner;
  return {
    initGame,
    playTurn,
    isGameOver,
    getWinner,
    placePlayerShip,
    randomizePlayerShips,
    startGame,
    getCurrentPlayer: () => currentPlayer,
    getPlayer: () => player,
    getComputer: () => computer,
    isGameStarted: () => gameStarted
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
  const board = Array(10).fill().map(() => Array(10).fill(null));
  const ships = [];
  const missedAttacks = [];
  const isValidPlacement = (ship, x, y, isHorizontal) => {
    if (isHorizontal) {
      if (x + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (board[y][x + i] !== null) return false;
      }
    } else {
      if (y + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (board[y + i][x] !== null) return false;
      }
    }
    return true;
  };
  const placeShip = (ship, x, y, isHorizontal) => {
    if (!isValidPlacement(ship, x, y, isHorizontal)) return false;
    ships.push(ship);
    if (isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        board[y][x + i] = {
          ship,
          index: i
        };
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        board[y + i][x] = {
          ship,
          index: i
        };
      }
    }
    return true;
  };
  const receiveAttack = (x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;
    const cell = board[y][x];

    // Already attacked this position
    if (cell === 'miss' || cell !== null && cell.hit === true) {
      return false;
    }
    if (cell === null) {
      board[y][x] = 'miss';
      missedAttacks.push([x, y]);
      return {
        hit: false,
        coordinates: [x, y]
      };
    }

    // Mark the cell as hit
    cell.hit = true;
    // Register a hit on the ship
    cell.ship.hit();

    // Return hit information
    return {
      hit: true,
      coordinates: [x, y],
      ship: cell.ship,
      sunk: cell.ship.isSunk()
    };
  };
  const allShipsSunk = () => ships.every(ship => ship.isSunk());
  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    getMissedAttacks: () => [...missedAttacks],
    getBoard: () => board.map(row => [...row])
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


// Modified Player.js - focused on enhanced randomAttack method
const Player = (name, isComputer = false) => {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const attacksMade = new Set(); // Track as 'x,y' strings

  // AI tracking state
  const successfulHits = []; // Track successful hits
  const pendingTargets = []; // Adjacent cells to try

  const attack = (enemyBoard, x, y) => {
    return enemyBoard.receiveAttack(x, y);
  };
  const getRandomCoordinate = () => Math.floor(Math.random() * 10);
  const randomAttack = enemyBoard => {
    if (attacksMade.size >= 100) return null;

    // Smart targeting logic - check if we have pending targets from previous hits
    if (isComputer && pendingTargets.length > 0) {
      // Try next target from queue
      const [x, y] = pendingTargets.shift();
      const coordKey = `${x},${y}`;

      // Skip if already attacked
      if (attacksMade.has(coordKey) || x < 0 || x > 9 || y < 0 || y > 9) {
        return randomAttack(enemyBoard);
      }
      attacksMade.add(coordKey);
      const result = attack(enemyBoard, x, y);

      // If hit, add adjacent cells to target
      if (result && result.hit) {
        successfulHits.push([x, y]);
        addAdjacentTargets(x, y);
      }
      return result;
    }

    // Hunt mode - random attack
    let x, y, coordKey;
    do {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
      coordKey = `${x},${y}`;
    } while (attacksMade.has(coordKey));
    attacksMade.add(coordKey);
    const result = attack(enemyBoard, x, y);

    // If hit, switch to target mode
    if (result && result.hit) {
      successfulHits.push([x, y]);
      addAdjacentTargets(x, y);
    }
    return result;
  };

  // Add adjacent cells to targeting queue
  const addAdjacentTargets = (x, y) => {
    // Prioritize aligned targets if we have multiple hits
    if (successfulHits.length >= 2) {
      // Check if hits align horizontally or vertically
      const alignedTargets = getAlignedTargets();
      if (alignedTargets.length > 0) {
        pendingTargets.length = 0; // Clear existing targets
        pendingTargets.push(...alignedTargets);
        return;
      }
    }

    // Otherwise add all adjacent cells
    pendingTargets.push([x + 1, y],
    // right
    [x - 1, y],
    // left
    [x, y + 1],
    // down
    [x, y - 1] // up
    );
  };

  // Calculate aligned targets based on hit pattern
  const getAlignedTargets = () => {
    const targets = [];

    // Sort hits to identify patterns
    const sortedHitsX = [...successfulHits].sort((a, b) => a[0] - b[0]);
    const sortedHitsY = [...successfulHits].sort((a, b) => a[1] - b[1]);

    // Check for horizontal alignment
    if (sortedHitsX.length >= 2 && sortedHitsX[0][1] === sortedHitsX[1][1] && Math.abs(sortedHitsX[0][0] - sortedHitsX[1][0]) === 1) {
      const y = sortedHitsX[0][1];
      const minX = sortedHitsX[0][0];
      const maxX = sortedHitsX[sortedHitsX.length - 1][0];

      // Add targets at ends of aligned hits
      targets.push([minX - 1, y], [maxX + 1, y]);
    }

    // Check for vertical alignment
    if (sortedHitsY.length >= 2 && sortedHitsY[0][0] === sortedHitsY[1][0] && Math.abs(sortedHitsY[0][1] - sortedHitsY[1][1]) === 1) {
      const x = sortedHitsY[0][0];
      const minY = sortedHitsY[0][1];
      const maxY = sortedHitsY[sortedHitsY.length - 1][1];

      // Add targets at ends of aligned hits
      targets.push([x, minY - 1], [x, maxY + 1]);
    }
    return targets;
  };
  return {
    name,
    gameboard,
    attack,
    randomAttack,
    isComputer
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = length => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => hits >= length;
  return {
    length,
    hit,
    isSunk,
    get hits() {
      return hits;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameController */ "./src/modules/gameController.js");
/* harmony import */ var _modules_domInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domInterface */ "./src/modules/domInterface.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



document.addEventListener('DOMContentLoaded', () => {
  _modules_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].initGame();
  _modules_domInterface__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDSjtBQUM1QjtBQUV0QnZGLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRHBCLCtEQUFjLENBQUM2RixRQUFRLENBQUMsQ0FBQztFQUN6QjVGLDZEQUFZLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb21JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmdhbWUtaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaGlwLXBsYWNlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcbn1cblxuLmJvYXJkLXdyYXBwZXIge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Njtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5taXNzOjphZnRlciB7XG4gIGNvbnRlbnQ6ICfigKInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmNvbnRyb2xzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzdmYWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E2YTk2O1xufVxuXG4ucGxhY2VtZW50LW1vZGUgLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkO1xufVxuXG4udmFsaWQtcGxhY2VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOCAhaW1wb3J0YW50O1xufVxuXG4uaW52YWxpZC1wbGFjZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjg4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYm9hcmQtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2NjtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1pc3M6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICfigKInO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG4uY29udHJvbHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjN2ZhZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTZhOTY7XFxufVxcblxcbi5wbGFjZW1lbnQtbW9kZSAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkO1xcbn1cXG5cXG4udmFsaWQtcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjggIWltcG9ydGFudDtcXG59XFxuXFxuLmludmFsaWQtcGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODggIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInO1xuXG5jb25zdCBET01JbnRlcmZhY2UgPSAoKCkgPT4ge1xuICAvLyBEZWNsYXJlIGFsbCBET00gZWxlbWVudHMgYXQgbW9kdWxlIGxldmVsXG4gIGxldCBwbGF5ZXJCb2FyZEVsZW1lbnQ7XG4gIGxldCBjb21wdXRlckJvYXJkRWxlbWVudDtcbiAgbGV0IGdhbWVJbmZvRWxlbWVudDtcbiAgbGV0IG5ld0dhbWVCdXR0b247XG4gIGxldCBzaGlwUGxhY2VtZW50QXJlYTtcblxuICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIC8vIEdldCBET00gZWxlbWVudHNcbiAgICBwbGF5ZXJCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gICAgY29tcHV0ZXJCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICBnYW1lSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1pbmZvJyk7XG4gICAgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZS1idG4nKTtcbiAgICBzaGlwUGxhY2VtZW50QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXBsYWNlbWVudCcpO1xuXG4gICAgcmVuZGVyQm9hcmRzKCk7XG5cbiAgICAvLyBPbmx5IHNldHVwIHBsYWNlbWVudCBhbmQgZXZlbnRzIGlmIGVsZW1lbnRzIGV4aXN0XG4gICAgaWYgKHBsYXllckJvYXJkRWxlbWVudCAmJiBjb21wdXRlckJvYXJkRWxlbWVudCkge1xuICAgICAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgaWYgKHNoaXBQbGFjZW1lbnRBcmVhKSB7XG4gICAgICAgIHNldHVwU2hpcFBsYWNlbWVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcFNpemVzID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgIGxldCBjdXJyZW50U2hpcEluZGV4ID0gMDtcbiAgICBsZXQgaXNIb3Jpem9udGFsID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtcGxhY2VtZW50Jyk7XG4gICAgaWYgKCFzaGlwUGxhY2VtZW50QXJlYSkgcmV0dXJuO1xuXG4gICAgc2hpcFBsYWNlbWVudEFyZWEuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvLyBSb3RhdGlvbiBidXR0b25cbiAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlIFNoaXAnO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlzSG9yaXpvbnRhbCA9ICFpc0hvcml6b250YWw7XG4gICAgICB1cGRhdGVQbGFjZW1lbnRQcmV2aWV3KCk7XG4gICAgfSk7XG4gICAgc2hpcFBsYWNlbWVudEFyZWEuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcblxuICAgIC8vIFJhbmRvbSBwbGFjZW1lbnQgYnV0dG9uXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gJ1JhbmRvbSBQbGFjZW1lbnQnO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIEdhbWVDb250cm9sbGVyLnJhbmRvbWl6ZVBsYXllclNoaXBzKCk7XG4gICAgICBjdXJyZW50U2hpcEluZGV4ID0gc2hpcFNpemVzLmxlbmd0aDtcbiAgICAgIHVwZGF0ZVBsYWNlbWVudENvbnRyb2xzKCk7XG4gICAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgIH0pO1xuICAgIHNoaXBQbGFjZW1lbnRBcmVhLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG5cbiAgICAvLyBTdGFydCBnYW1lIGJ1dHRvbiAoaW5pdGlhbGx5IGRpc2FibGVkKVxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRCdG4uaWQgPSAnc3RhcnQtZ2FtZSc7XG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gU3RhcnQgdGhlIGdhbWUgaW4gdGhlIGdhbWUgY29udHJvbGxlclxuICAgICAgR2FtZUNvbnRyb2xsZXIuc3RhcnRHYW1lKCk7XG4gICAgICBcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJylcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudC1tb2RlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgc2hpcFBsYWNlbWVudEFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVwZGF0ZUdhbWVJbmZvKCdHYW1lIHN0YXJ0ZWQhIFlvdXIgdHVybiB0byBhdHRhY2suJyk7XG4gICAgfSk7XG4gICAgc2hpcFBsYWNlbWVudEFyZWEuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgLy8gU2V0IHVwIHBsYXllciBib2FyZCBmb3IgcGxhY2VtZW50XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1tb2RlJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWJvYXJkJykuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgIC8vIENsZWFyIGFueSBleGlzdGluZyBwcmV2aWV3IGNsYXNzZXNcbiAgICBjb25zdCBjbGVhclByZXZpZXdzID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2VsbHMgPSBwbGF5ZXJCb2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtcGxhY2VtZW50Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wbGFjZW1lbnQnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTaG93IHBsYWNlbWVudCBwcmV2aWV3XG4gICAgY29uc3Qgc2hvd1BsYWNlbWVudFByZXZpZXcgPSAoeCwgeSwgbGVuZ3RoLCBob3Jpem9udGFsKSA9PiB7XG4gICAgICBjbGVhclByZXZpZXdzKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja1ZhbGlkUGxhY2VtZW50KHgsIHksIGxlbmd0aCwgaG9yaXpvbnRhbCk7XG4gICAgICBjb25zdCBwcmV2aWV3Q2xhc3MgPSBpc1ZhbGlkID8gJ3ZhbGlkLXBsYWNlbWVudCcgOiAnaW52YWxpZC1wbGFjZW1lbnQnO1xuICAgICAgXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHggKyBpIDwgMTApIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJCb2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5jZWxsW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGNlbGwpIGNlbGwuY2xhc3NMaXN0LmFkZChwcmV2aWV3Q2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh5ICsgaSA8IDEwKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gcGxheWVyQm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY2VsbFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChjZWxsKSBjZWxsLmNsYXNzTGlzdC5hZGQocHJldmlld0NsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgcGxhY2VtZW50IGlzIHZhbGlkXG4gICAgY29uc3QgY2hlY2tWYWxpZFBsYWNlbWVudCA9ICh4LCB5LCBsZW5ndGgsIGhvcml6b250YWwpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyKCkuZ2FtZWJvYXJkLmdldEJvYXJkKCk7XG4gICAgICBcbiAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChib2FyZFt5XVt4ICsgaV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3kgKyBpXVt4XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLy8gVXBkYXRlIHBsYWNlbWVudCBwcmV2aWV3IHdoZW4gbW91c2UgbW92ZXNcbiAgICBjb25zdCB1cGRhdGVQbGFjZW1lbnRQcmV2aWV3ID0gKCkgPT4ge1xuICAgICAgY29uc3QgaG92ZXJlZENlbGwgPSBwbGF5ZXJCb2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNlbGw6aG92ZXInKTtcbiAgICAgIGlmIChob3ZlcmVkQ2VsbCAmJiBjdXJyZW50U2hpcEluZGV4IDwgc2hpcFNpemVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB4ID0gcGFyc2VJbnQoaG92ZXJlZENlbGwuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGhvdmVyZWRDZWxsLmRhdGFzZXQueSk7XG4gICAgICAgIHNob3dQbGFjZW1lbnRQcmV2aWV3KHgsIHksIHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4XSwgaXNIb3Jpem9udGFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQWRkIGhvdmVyIHByZXZpZXcgZXZlbnQgdG8gcGxheWVyIGJvYXJkXG4gICAgcGxheWVyQm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRTaGlwSW5kZXggPj0gc2hpcFNpemVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgICBzaG93UGxhY2VtZW50UHJldmlldyh4LCB5LCBzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleF0sIGlzSG9yaXpvbnRhbCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgbW91c2VvdXQgZXZlbnQgdG8gY2xlYXIgcHJldmlld3NcbiAgICBwbGF5ZXJCb2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICBjbGVhclByZXZpZXdzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgcGxhY2VtZW50IGNsaWNrIGV2ZW50IHRvIHBsYXllciBib2FyZFxuICAgIHBsYXllckJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRTaGlwSW5kZXggPj0gc2hpcFNpemVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB4ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgICBjb25zdCBwbGFjZWQgPSBHYW1lQ29udHJvbGxlci5wbGFjZVBsYXllclNoaXAoXG4gICAgICAgIHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4XSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgaXNIb3Jpem9udGFsXG4gICAgICApO1xuXG4gICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwSW5kZXgrKztcbiAgICAgICAgdXBkYXRlUGxhY2VtZW50Q29udHJvbHMoKTtcbiAgICAgICAgcmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBjb250cm9scyBiYXNlZCBvbiBwbGFjZW1lbnQgcHJvZ3Jlc3NcbiAgICBjb25zdCB1cGRhdGVQbGFjZW1lbnRDb250cm9scyA9ICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50U2hpcEluZGV4ID49IHNoaXBTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVHYW1lSW5mbygnQWxsIHNoaXBzIHBsYWNlZCEgQ2xpY2sgU3RhcnQgR2FtZSB0byBiZWdpbi4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZUdhbWVJbmZvKFxuICAgICAgICAgIGBQbGFjZSB5b3VyICR7Z2V0U2hpcE5hbWUoc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXhdKX0gKCR7XG4gICAgICAgICAgICBzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleF1cbiAgICAgICAgICB9IGNlbGxzKWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTWFwIHNoaXAgc2l6ZXMgdG8gbmFtZXNcbiAgICBjb25zdCBnZXRTaGlwTmFtZSA9IHNpemUgPT4ge1xuICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ0NhcnJpZXInO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuICdCYXR0bGVzaGlwJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnQ3J1aXNlci9TdWJtYXJpbmUnO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdEZXN0cm95ZXInO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnU2hpcCc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVwZGF0ZVBsYWNlbWVudENvbnRyb2xzKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICAgIGlmICghcGxheWVyQm9hcmRFbGVtZW50KSByZXR1cm47XG5cbiAgICBwbGF5ZXJCb2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcGxheWVyID0gR2FtZUNvbnRyb2xsZXIuZ2V0UGxheWVyKCk7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICByZW5kZXJCb2FyZEdyaWQocGxheWVyQm9hcmRFbGVtZW50LCBib2FyZCwgdHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ29tcHV0ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBpZiAoIWNvbXB1dGVyQm9hcmRFbGVtZW50KSByZXR1cm47XG5cbiAgICBjb21wdXRlckJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjb21wdXRlciA9IEdhbWVDb250cm9sbGVyLmdldENvbXB1dGVyKCk7XG4gICAgY29uc3QgYm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgIHJlbmRlckJvYXJkR3JpZChjb21wdXRlckJvYXJkRWxlbWVudCwgYm9hcmQsIGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2FyZEdyaWQgPSAoYm9hcmRFbGVtZW50LCBib2FyZCwgaXNQbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnggPSB4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IHk7XG5cbiAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbeV1beF07XG5cbiAgICAgICAgaWYgKGJvYXJkQ2VsbCAmJiBib2FyZENlbGwuc2hpcCAmJiAoaXNQbGF5ZXJCb2FyZCB8fCBib2FyZENlbGwuaGl0KSkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvYXJkQ2VsbCAmJiBib2FyZENlbGwuaGl0KSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZENlbGwgPT09ICdtaXNzJykge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVCb2FyZHMgPSAoKSA9PiB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICByZW5kZXJDb21wdXRlckJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBpZiAoY29tcHV0ZXJCb2FyZEVsZW1lbnQpIHtcbiAgICAgIGNvbXB1dGVyQm9hcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ29tcHV0ZXJCb2FyZENsaWNrKTtcbiAgICB9XG5cbiAgICBpZiAobmV3R2FtZUJ1dHRvbikge1xuICAgICAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5ld0dhbWVDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbXB1dGVyQm9hcmRDbGljayA9IGV2ZW50ID0+IHtcbiAgICAvLyBDaGVjayBpZiBnYW1lIGlzIG92ZXIgb3Igbm90IHN0YXJ0ZWRcbiAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaXNHYW1lT3ZlcigpKSB7XG4gICAgICB1cGRhdGVHYW1lSW5mbyhgR2FtZSBPdmVyISAke0dhbWVDb250cm9sbGVyLmdldFdpbm5lcigpLm5hbWV9IHdpbnMhIENsaWNrIE5ldyBHYW1lIHRvIHBsYXkgYWdhaW4uYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmICghR2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RhcnRlZCgpKSB7XG4gICAgICB1cGRhdGVHYW1lSW5mbygnWW91IG5lZWQgdG8gcGxhY2UgeW91ciBzaGlwcyBhbmQgc3RhcnQgdGhlIGdhbWUgZmlyc3QhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSByZXR1cm47XG5cbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gR2FtZUNvbnRyb2xsZXIucGxheVR1cm4oeCwgeSk7XG5cbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgZ2FtZSBzdGF0ZSBkaXNwbGF5XG4gICAgICBpZiAocmVzdWx0LnJlc3VsdC5oaXQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQubWVzc2FnZSkge1xuICAgICAgICAgIHVwZGF0ZUdhbWVJbmZvKHJlc3VsdC5yZXN1bHQubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlR2FtZUluZm8oJ0hpdCEgWW91ciB0dXJuIGFnYWluLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVHYW1lSW5mbygnTWlzcyEgQ29tcHV0ZXIgaXMgbWFraW5nIGEgbW92ZS4uLicpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTaG93IGNvbXB1dGVyJ3MgbW92ZSByZXN1bHRcbiAgICAgIGlmIChyZXN1bHQuY29tcHV0ZXJNb3ZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuY29tcHV0ZXJNb3ZlLmhpdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5jb21wdXRlck1vdmUubWVzc2FnZSkge1xuICAgICAgICAgICAgICB1cGRhdGVHYW1lSW5mbyhyZXN1bHQuY29tcHV0ZXJNb3ZlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlR2FtZUluZm8oJ0NvbXB1dGVyIGhpdCB5b3VyIHNoaXAhIFlvdXIgdHVybi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlR2FtZUluZm8oJ0NvbXB1dGVyIG1pc3NlZCEgWW91ciB0dXJuLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdXBkYXRlQm9hcmRzKCk7XG5cbiAgICAgIGlmIChyZXN1bHQuZ2FtZU92ZXIpIHtcbiAgICAgICAgZGlzcGxheUdhbWVPdmVyKHJlc3VsdC53aW5uZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzdWx0Lm1lc3NhZ2UpIHtcbiAgICAgIHVwZGF0ZUdhbWVJbmZvKHJlc3VsdC5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3R2FtZUNsaWNrID0gKCkgPT4ge1xuICAgIEdhbWVDb250cm9sbGVyLmluaXRHYW1lKCk7XG4gICAgdXBkYXRlQm9hcmRzKCk7XG4gICAgXG4gICAgLy8gUmVzZXQgdGhlIHNoaXAgcGxhY2VtZW50IGFyZWFcbiAgICBjb25zdCBzaGlwUGxhY2VtZW50QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXBsYWNlbWVudCcpO1xuICAgIGlmIChzaGlwUGxhY2VtZW50QXJlYSkge1xuICAgICAgc2hpcFBsYWNlbWVudEFyZWEuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIHNldHVwU2hpcFBsYWNlbWVudCgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXNldCBib2FyZCBjbGFzc2VzXG4gICAgaWYgKHBsYXllckJvYXJkRWxlbWVudCkge1xuICAgICAgcGxheWVyQm9hcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1tb2RlJyk7XG4gICAgfVxuICAgIGlmIChjb21wdXRlckJvYXJkRWxlbWVudCkge1xuICAgICAgY29tcHV0ZXJCb2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlR2FtZUluZm8oJ1BsYWNlIHlvdXIgc2hpcHMgdG8gc3RhcnQgYSBuZXcgZ2FtZScpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUdhbWVJbmZvID0gbWVzc2FnZSA9PiB7XG4gICAgaWYgKGdhbWVJbmZvRWxlbWVudCkge1xuICAgICAgZ2FtZUluZm9FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUdhbWVPdmVyID0gd2lubmVyID0+IHtcbiAgICB1cGRhdGVHYW1lSW5mbyhgR2FtZSBPdmVyISAke3dpbm5lcn0gd2lucyFgKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemUsXG4gICAgcmVuZGVyUGxheWVyQm9hcmQsXG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCxcbiAgICB1cGRhdGVCb2FyZHMsXG4gICAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgICBkaXNwbGF5R2FtZU92ZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01JbnRlcmZhY2U7XG4iLCIvLyBzcmMvbW9kdWxlcy9nYW1lQ29udHJvbGxlci5qc1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBHYW1lQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXI7XG4gIGxldCBjb21wdXRlcjtcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICBsZXQgd2lubmVyID0gbnVsbDtcbiAgbGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5cbiAgY29uc3QgaW5pdEdhbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyID0gUGxheWVyKCdQbGF5ZXInKTtcbiAgICBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xuICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgd2lubmVyID0gbnVsbDtcbiAgICBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLy8gT25seSBwbGFjZSBzaGlwcyBvbiBjb21wdXRlcidzIGJvYXJkIGluaXRpYWxseVxuICAgIHBsYWNlRGVmYXVsdFNoaXBzKGNvbXB1dGVyLmdhbWVib2FyZCk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VEZWZhdWx0U2hpcHMgPSBnYW1lYm9hcmQgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgU2hpcCg1KSwgLy8gQ2FycmllclxuICAgICAgU2hpcCg0KSwgLy8gQmF0dGxlc2hpcFxuICAgICAgU2hpcCgzKSwgLy8gQ3J1aXNlclxuICAgICAgU2hpcCgzKSwgLy8gU3VibWFyaW5lXG4gICAgICBTaGlwKDIpLCAvLyBEZXN0cm95ZXJcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xuICAgICAgICBwbGFjZWQgPSBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGhvcml6b250YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyU2hpcCA9IChsZW5ndGgsIHgsIHksIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAgIGlmIChnYW1lU3RhcnRlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgaXNIb3Jpem9udGFsKTtcbiAgfTtcblxuICBjb25zdCByYW5kb21pemVQbGF5ZXJTaGlwcyA9ICgpID0+IHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkID0gUGxheWVyKCdQbGF5ZXInKS5nYW1lYm9hcmQ7XG4gICAgcGxhY2VEZWZhdWx0U2hpcHMocGxheWVyLmdhbWVib2FyZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZ2FtZVN0YXJ0ZWQ7XG4gIH07XG5cbiAgY29uc3QgcGxheVR1cm4gPSAoeCwgeSkgPT4ge1xuICAgIGlmIChnYW1lT3ZlcikgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdHYW1lIGlzIG92ZXInIH07XG4gICAgaWYgKCFnYW1lU3RhcnRlZCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdHYW1lIG5vdCBzdGFydGVkJyB9O1xuICAgIGlmIChjdXJyZW50UGxheWVyICE9PSBwbGF5ZXIpXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05vdCBwbGF5ZXIgdHVybicgfTtcblxuICAgIC8vIFBsYXllciBhdHRhY2tzIGNvbXB1dGVyXG4gICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyLmF0dGFjayhjb21wdXRlci5nYW1lYm9hcmQsIHgsIHkpO1xuICAgIGlmICghYXR0YWNrUmVzdWx0KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgYXR0YWNrJyB9O1xuXG4gICAgLy8gQWRkIG1lc3NhZ2UgaWYgc2hpcCB3YXMgc3Vua1xuICAgIGlmIChhdHRhY2tSZXN1bHQuaGl0ICYmIGF0dGFja1Jlc3VsdC5zdW5rKSB7XG4gICAgICBhdHRhY2tSZXN1bHQubWVzc2FnZSA9IGBZb3Ugc3VuayB0aGUgY29tcHV0ZXIncyAke2dldFNoaXBOYW1lKGF0dGFja1Jlc3VsdC5zaGlwLmxlbmd0aCl9IWA7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY29tcHV0ZXIgbG9zdFxuICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHdpbm5lciA9IHBsYXllcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHJlc3VsdDogYXR0YWNrUmVzdWx0LFxuICAgICAgICBnYW1lT3ZlcjogdHJ1ZSxcbiAgICAgICAgd2lubmVyOiBwbGF5ZXIubmFtZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZXIgdHVyblxuICAgIGN1cnJlbnRQbGF5ZXIgPSBjb21wdXRlcjtcbiAgICBjb25zdCBjb21wdXRlckF0dGFja1Jlc3VsdCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIuZ2FtZWJvYXJkKTtcblxuICAgIC8vIEFkZCBtZXNzYWdlIGlmIHNoaXAgd2FzIHN1bmtcbiAgICBpZiAoY29tcHV0ZXJBdHRhY2tSZXN1bHQgJiYgY29tcHV0ZXJBdHRhY2tSZXN1bHQuaGl0ICYmIGNvbXB1dGVyQXR0YWNrUmVzdWx0LnN1bmspIHtcbiAgICAgIGNvbXB1dGVyQXR0YWNrUmVzdWx0Lm1lc3NhZ2UgPSBgQ29tcHV0ZXIgc3VuayB5b3VyICR7Z2V0U2hpcE5hbWUoY29tcHV0ZXJBdHRhY2tSZXN1bHQuc2hpcC5sZW5ndGgpfSFgO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHBsYXllciBsb3N0XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHdpbm5lciA9IGNvbXB1dGVyO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgcmVzdWx0OiBhdHRhY2tSZXN1bHQsXG4gICAgICAgIGNvbXB1dGVyTW92ZTogY29tcHV0ZXJBdHRhY2tSZXN1bHQsXG4gICAgICAgIGdhbWVPdmVyOiB0cnVlLFxuICAgICAgICB3aW5uZXI6IGNvbXB1dGVyLm5hbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEJhY2sgdG8gcGxheWVyJ3MgdHVyblxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHJlc3VsdDogYXR0YWNrUmVzdWx0LFxuICAgICAgY29tcHV0ZXJNb3ZlOiBjb21wdXRlckF0dGFja1Jlc3VsdCxcbiAgICB9O1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgc2hpcCBuYW1lIGZyb20gbGVuZ3RoXG4gIGNvbnN0IGdldFNoaXBOYW1lID0gbGVuZ3RoID0+IHtcbiAgICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gJ0NhcnJpZXInO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gJ0JhdHRsZXNoaXAnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gJ0NydWlzZXIvU3VibWFyaW5lJztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICdEZXN0cm95ZXInO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdTaGlwJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9ICgpID0+IGdhbWVPdmVyO1xuXG4gIGNvbnN0IGdldFdpbm5lciA9ICgpID0+IHdpbm5lcjtcblxuICByZXR1cm4ge1xuICAgIGluaXRHYW1lLFxuICAgIHBsYXlUdXJuLFxuICAgIGlzR2FtZU92ZXIsXG4gICAgZ2V0V2lubmVyLFxuICAgIHBsYWNlUGxheWVyU2hpcCxcbiAgICByYW5kb21pemVQbGF5ZXJTaGlwcyxcbiAgICBzdGFydEdhbWUsXG4gICAgZ2V0Q3VycmVudFBsYXllcjogKCkgPT4gY3VycmVudFBsYXllcixcbiAgICBnZXRQbGF5ZXI6ICgpID0+IHBsYXllcixcbiAgICBnZXRDb21wdXRlcjogKCkgPT4gY29tcHV0ZXIsXG4gICAgaXNHYW1lU3RhcnRlZDogKCkgPT4gZ2FtZVN0YXJ0ZWQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMClcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICBjb25zdCBpc1ZhbGlkUGxhY2VtZW50ID0gKHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCkgPT4ge1xuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZFt5XVt4ICsgaV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3kgKyBpXVt4XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgaXNIb3Jpem9udGFsKSA9PiB7XG4gICAgaWYgKCFpc1ZhbGlkUGxhY2VtZW50KHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCkpIHJldHVybiBmYWxzZTtcblxuICAgIHNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeV1beCArIGldID0geyBzaGlwLCBpbmRleDogaSB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeSArIGldW3hdID0geyBzaGlwLCBpbmRleDogaSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmICh4IDwgMCB8fCB4ID49IDEwIHx8IHkgPCAwIHx8IHkgPj0gMTApIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNlbGwgPSBib2FyZFt5XVt4XTtcblxuICAgIC8vIEFscmVhZHkgYXR0YWNrZWQgdGhpcyBwb3NpdGlvblxuICAgIGlmIChjZWxsID09PSAnbWlzcycgfHwgKGNlbGwgIT09IG51bGwgJiYgY2VsbC5oaXQgPT09IHRydWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNlbGwgPT09IG51bGwpIHtcbiAgICAgIGJvYXJkW3ldW3hdID0gJ21pc3MnO1xuICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4geyBoaXQ6IGZhbHNlLCBjb29yZGluYXRlczogW3gsIHldIH07XG4gICAgfVxuXG4gICAgLy8gTWFyayB0aGUgY2VsbCBhcyBoaXRcbiAgICBjZWxsLmhpdCA9IHRydWU7XG4gICAgLy8gUmVnaXN0ZXIgYSBoaXQgb24gdGhlIHNoaXBcbiAgICBjZWxsLnNoaXAuaGl0KCk7XG4gICAgXG4gICAgLy8gUmV0dXJuIGhpdCBpbmZvcm1hdGlvblxuICAgIHJldHVybiB7IFxuICAgICAgaGl0OiB0cnVlLCBcbiAgICAgIGNvb3JkaW5hdGVzOiBbeCwgeV0sIFxuICAgICAgc2hpcDogY2VsbC5zaGlwLFxuICAgICAgc3VuazogY2VsbC5zaGlwLmlzU3VuaygpXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldE1pc3NlZEF0dGFja3M6ICgpID0+IFsuLi5taXNzZWRBdHRhY2tzXSxcbiAgICBnZXRCb2FyZDogKCkgPT4gYm9hcmQubWFwKHJvdyA9PiBbLi4ucm93XSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuLy8gTW9kaWZpZWQgUGxheWVyLmpzIC0gZm9jdXNlZCBvbiBlbmhhbmNlZCByYW5kb21BdHRhY2sgbWV0aG9kXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNDb21wdXRlciA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBhdHRhY2tzTWFkZSA9IG5ldyBTZXQoKTsgLy8gVHJhY2sgYXMgJ3gseScgc3RyaW5nc1xuXG4gIC8vIEFJIHRyYWNraW5nIHN0YXRlXG4gIGNvbnN0IHN1Y2Nlc3NmdWxIaXRzID0gW107IC8vIFRyYWNrIHN1Y2Nlc3NmdWwgaGl0c1xuICBjb25zdCBwZW5kaW5nVGFyZ2V0cyA9IFtdOyAvLyBBZGphY2VudCBjZWxscyB0byB0cnlcblxuICBjb25zdCBhdHRhY2sgPSAoZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBjb25zdCByYW5kb21BdHRhY2sgPSBlbmVteUJvYXJkID0+IHtcbiAgICBpZiAoYXR0YWNrc01hZGUuc2l6ZSA+PSAxMDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gU21hcnQgdGFyZ2V0aW5nIGxvZ2ljIC0gY2hlY2sgaWYgd2UgaGF2ZSBwZW5kaW5nIHRhcmdldHMgZnJvbSBwcmV2aW91cyBoaXRzXG4gICAgaWYgKGlzQ29tcHV0ZXIgJiYgcGVuZGluZ1RhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gVHJ5IG5leHQgdGFyZ2V0IGZyb20gcXVldWVcbiAgICAgIGNvbnN0IFt4LCB5XSA9IHBlbmRpbmdUYXJnZXRzLnNoaWZ0KCk7XG4gICAgICBjb25zdCBjb29yZEtleSA9IGAke3h9LCR7eX1gO1xuXG4gICAgICAvLyBTa2lwIGlmIGFscmVhZHkgYXR0YWNrZWRcbiAgICAgIGlmIChhdHRhY2tzTWFkZS5oYXMoY29vcmRLZXkpIHx8IHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XG4gICAgICAgIHJldHVybiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgICB9XG5cbiAgICAgIGF0dGFja3NNYWRlLmFkZChjb29yZEtleSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhdHRhY2soZW5lbXlCb2FyZCwgeCwgeSk7XG5cbiAgICAgIC8vIElmIGhpdCwgYWRkIGFkamFjZW50IGNlbGxzIHRvIHRhcmdldFxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaGl0KSB7XG4gICAgICAgIHN1Y2Nlc3NmdWxIaXRzLnB1c2goW3gsIHldKTtcbiAgICAgICAgYWRkQWRqYWNlbnRUYXJnZXRzKHgsIHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIEh1bnQgbW9kZSAtIHJhbmRvbSBhdHRhY2tcbiAgICBsZXQgeCwgeSwgY29vcmRLZXk7XG4gICAgZG8ge1xuICAgICAgeCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgIHkgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICBjb29yZEtleSA9IGAke3h9LCR7eX1gO1xuICAgIH0gd2hpbGUgKGF0dGFja3NNYWRlLmhhcyhjb29yZEtleSkpO1xuXG4gICAgYXR0YWNrc01hZGUuYWRkKGNvb3JkS2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2soZW5lbXlCb2FyZCwgeCwgeSk7XG5cbiAgICAvLyBJZiBoaXQsIHN3aXRjaCB0byB0YXJnZXQgbW9kZVxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmhpdCkge1xuICAgICAgc3VjY2Vzc2Z1bEhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgYWRkQWRqYWNlbnRUYXJnZXRzKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gQWRkIGFkamFjZW50IGNlbGxzIHRvIHRhcmdldGluZyBxdWV1ZVxuICBjb25zdCBhZGRBZGphY2VudFRhcmdldHMgPSAoeCwgeSkgPT4ge1xuICAgIC8vIFByaW9yaXRpemUgYWxpZ25lZCB0YXJnZXRzIGlmIHdlIGhhdmUgbXVsdGlwbGUgaGl0c1xuICAgIGlmIChzdWNjZXNzZnVsSGl0cy5sZW5ndGggPj0gMikge1xuICAgICAgLy8gQ2hlY2sgaWYgaGl0cyBhbGlnbiBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuICAgICAgY29uc3QgYWxpZ25lZFRhcmdldHMgPSBnZXRBbGlnbmVkVGFyZ2V0cygpO1xuICAgICAgaWYgKGFsaWduZWRUYXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGVuZGluZ1RhcmdldHMubGVuZ3RoID0gMDsgLy8gQ2xlYXIgZXhpc3RpbmcgdGFyZ2V0c1xuICAgICAgICBwZW5kaW5nVGFyZ2V0cy5wdXNoKC4uLmFsaWduZWRUYXJnZXRzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBhZGQgYWxsIGFkamFjZW50IGNlbGxzXG4gICAgcGVuZGluZ1RhcmdldHMucHVzaChcbiAgICAgIFt4ICsgMSwgeV0sIC8vIHJpZ2h0XG4gICAgICBbeCAtIDEsIHldLCAvLyBsZWZ0XG4gICAgICBbeCwgeSArIDFdLCAvLyBkb3duXG4gICAgICBbeCwgeSAtIDFdIC8vIHVwXG4gICAgKTtcbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgYWxpZ25lZCB0YXJnZXRzIGJhc2VkIG9uIGhpdCBwYXR0ZXJuXG4gIGNvbnN0IGdldEFsaWduZWRUYXJnZXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldHMgPSBbXTtcblxuICAgIC8vIFNvcnQgaGl0cyB0byBpZGVudGlmeSBwYXR0ZXJuc1xuICAgIGNvbnN0IHNvcnRlZEhpdHNYID0gWy4uLnN1Y2Nlc3NmdWxIaXRzXS5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgY29uc3Qgc29ydGVkSGl0c1kgPSBbLi4uc3VjY2Vzc2Z1bEhpdHNdLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKTtcblxuICAgIC8vIENoZWNrIGZvciBob3Jpem9udGFsIGFsaWdubWVudFxuICAgIGlmIChcbiAgICAgIHNvcnRlZEhpdHNYLmxlbmd0aCA+PSAyICYmXG4gICAgICBzb3J0ZWRIaXRzWFswXVsxXSA9PT0gc29ydGVkSGl0c1hbMV1bMV0gJiZcbiAgICAgIE1hdGguYWJzKHNvcnRlZEhpdHNYWzBdWzBdIC0gc29ydGVkSGl0c1hbMV1bMF0pID09PSAxXG4gICAgKSB7XG4gICAgICBjb25zdCB5ID0gc29ydGVkSGl0c1hbMF1bMV07XG4gICAgICBjb25zdCBtaW5YID0gc29ydGVkSGl0c1hbMF1bMF07XG4gICAgICBjb25zdCBtYXhYID0gc29ydGVkSGl0c1hbc29ydGVkSGl0c1gubGVuZ3RoIC0gMV1bMF07XG5cbiAgICAgIC8vIEFkZCB0YXJnZXRzIGF0IGVuZHMgb2YgYWxpZ25lZCBoaXRzXG4gICAgICB0YXJnZXRzLnB1c2goW21pblggLSAxLCB5XSwgW21heFggKyAxLCB5XSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHZlcnRpY2FsIGFsaWdubWVudFxuICAgIGlmIChcbiAgICAgIHNvcnRlZEhpdHNZLmxlbmd0aCA+PSAyICYmXG4gICAgICBzb3J0ZWRIaXRzWVswXVswXSA9PT0gc29ydGVkSGl0c1lbMV1bMF0gJiZcbiAgICAgIE1hdGguYWJzKHNvcnRlZEhpdHNZWzBdWzFdIC0gc29ydGVkSGl0c1lbMV1bMV0pID09PSAxXG4gICAgKSB7XG4gICAgICBjb25zdCB4ID0gc29ydGVkSGl0c1lbMF1bMF07XG4gICAgICBjb25zdCBtaW5ZID0gc29ydGVkSGl0c1lbMF1bMV07XG4gICAgICBjb25zdCBtYXhZID0gc29ydGVkSGl0c1lbc29ydGVkSGl0c1kubGVuZ3RoIC0gMV1bMV07XG5cbiAgICAgIC8vIEFkZCB0YXJnZXRzIGF0IGVuZHMgb2YgYWxpZ25lZCBoaXRzXG4gICAgICB0YXJnZXRzLnB1c2goW3gsIG1pblkgLSAxXSwgW3gsIG1heFkgKyAxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldHM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWVib2FyZCxcbiAgICBhdHRhY2ssXG4gICAgcmFuZG9tQXR0YWNrLFxuICAgIGlzQ29tcHV0ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBTaGlwID0gbGVuZ3RoID0+IHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzKys7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA+PSBsZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9nYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy9kb21JbnRlcmZhY2UnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBHYW1lQ29udHJvbGxlci5pbml0R2FtZSgpO1xuICBET01JbnRlcmZhY2UuaW5pdGlhbGl6ZSgpO1xufSk7XG4iXSwibmFtZXMiOlsiR2FtZUNvbnRyb2xsZXIiLCJET01JbnRlcmZhY2UiLCJwbGF5ZXJCb2FyZEVsZW1lbnQiLCJjb21wdXRlckJvYXJkRWxlbWVudCIsImdhbWVJbmZvRWxlbWVudCIsIm5ld0dhbWVCdXR0b24iLCJzaGlwUGxhY2VtZW50QXJlYSIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyQm9hcmRzIiwic2V0dXBFdmVudExpc3RlbmVycyIsInNldHVwU2hpcFBsYWNlbWVudCIsInNoaXBTaXplcyIsImN1cnJlbnRTaGlwSW5kZXgiLCJpc0hvcml6b250YWwiLCJpbm5lckhUTUwiLCJyb3RhdGVCdG4iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlUGxhY2VtZW50UHJldmlldyIsImFwcGVuZENoaWxkIiwicmFuZG9tQnRuIiwicmFuZG9taXplUGxheWVyU2hpcHMiLCJsZW5ndGgiLCJ1cGRhdGVQbGFjZW1lbnRDb250cm9scyIsInJlbmRlclBsYXllckJvYXJkIiwic3RhcnRCdG4iLCJpZCIsImRpc2FibGVkIiwic3RhcnRHYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwidXBkYXRlR2FtZUluZm8iLCJhZGQiLCJjbGVhclByZXZpZXdzIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNlbGwiLCJzaG93UGxhY2VtZW50UHJldmlldyIsIngiLCJ5IiwiaG9yaXpvbnRhbCIsImlzVmFsaWQiLCJjaGVja1ZhbGlkUGxhY2VtZW50IiwicHJldmlld0NsYXNzIiwiaSIsInF1ZXJ5U2VsZWN0b3IiLCJib2FyZCIsImdldFBsYXllciIsImdhbWVib2FyZCIsImdldEJvYXJkIiwiaG92ZXJlZENlbGwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJwbGFjZWQiLCJwbGFjZVBsYXllclNoaXAiLCJnZXRTaGlwTmFtZSIsInNpemUiLCJyZW5kZXJDb21wdXRlckJvYXJkIiwicGxheWVyIiwicmVuZGVyQm9hcmRHcmlkIiwiY29tcHV0ZXIiLCJnZXRDb21wdXRlciIsImJvYXJkRWxlbWVudCIsImlzUGxheWVyQm9hcmQiLCJib2FyZENlbGwiLCJzaGlwIiwiaGl0IiwidXBkYXRlQm9hcmRzIiwiaGFuZGxlQ29tcHV0ZXJCb2FyZENsaWNrIiwiaGFuZGxlTmV3R2FtZUNsaWNrIiwiZXZlbnQiLCJpc0dhbWVPdmVyIiwiZ2V0V2lubmVyIiwibmFtZSIsImlzR2FtZVN0YXJ0ZWQiLCJyZXN1bHQiLCJwbGF5VHVybiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiY29tcHV0ZXJNb3ZlIiwic2V0VGltZW91dCIsImdhbWVPdmVyIiwiZGlzcGxheUdhbWVPdmVyIiwid2lubmVyIiwiaW5pdEdhbWUiLCJQbGF5ZXIiLCJTaGlwIiwiY3VycmVudFBsYXllciIsImdhbWVTdGFydGVkIiwicGxhY2VEZWZhdWx0U2hpcHMiLCJzaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYWNlU2hpcCIsImF0dGFja1Jlc3VsdCIsImF0dGFjayIsInN1bmsiLCJhbGxTaGlwc1N1bmsiLCJjb21wdXRlckF0dGFja1Jlc3VsdCIsInJhbmRvbUF0dGFjayIsImdldEN1cnJlbnRQbGF5ZXIiLCJHYW1lYm9hcmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJtaXNzZWRBdHRhY2tzIiwiaXNWYWxpZFBsYWNlbWVudCIsInB1c2giLCJpbmRleCIsInJlY2VpdmVBdHRhY2siLCJjb29yZGluYXRlcyIsImlzU3VuayIsImV2ZXJ5IiwiZ2V0TWlzc2VkQXR0YWNrcyIsInJvdyIsImlzQ29tcHV0ZXIiLCJhdHRhY2tzTWFkZSIsIlNldCIsInN1Y2Nlc3NmdWxIaXRzIiwicGVuZGluZ1RhcmdldHMiLCJlbmVteUJvYXJkIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZSIsInNoaWZ0IiwiY29vcmRLZXkiLCJoYXMiLCJhZGRBZGphY2VudFRhcmdldHMiLCJhbGlnbmVkVGFyZ2V0cyIsImdldEFsaWduZWRUYXJnZXRzIiwidGFyZ2V0cyIsInNvcnRlZEhpdHNYIiwic29ydCIsImEiLCJiIiwic29ydGVkSGl0c1kiLCJhYnMiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=