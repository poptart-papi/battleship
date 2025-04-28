/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      document.getElementById('player-board').classList.remove('placement-mode');
      document.getElementById('computer-board').classList.remove('disabled');
      shipPlacementArea.style.display = 'none';
      updateGameInfo('Game started! Your turn to attack.');
    });
    shipPlacementArea.appendChild(startBtn);

    // Set up player board for placement
    document.getElementById('player-board').classList.add('placement-mode');
    document.getElementById('computer-board').classList.add('disabled');

    // Add hover preview event to player board
    playerBoardElement.addEventListener('mouseover', e => {
      if (currentShipIndex >= shipSizes.length) return;
      if (!e.target.classList.contains('cell')) return;
      const x = parseInt(e.target.dataset.x);
      const y = parseInt(e.target.dataset.y);
      showPlacementPreview(x, y, shipSizes[currentShipIndex], isHorizontal);
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
    if (_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].isGameOver()) return;
    if (!event.target.classList.contains('cell')) return;
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
    const result = _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].playTurn(x, y);
    if (result.success) {
      updateBoards();
      if (result.gameOver) {
        displayGameOver(result.winner);
      }
    }
  };
  const handleNewGameClick = () => {
    _gameController__WEBPACK_IMPORTED_MODULE_0__["default"].initGame();
    updateBoards();
    updateGameInfo('New game started');
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

  // src/modules/gameboard.js (updated)
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
    cell.hit = true;
    cell.ship.hit();
    return {
      hit: true,
      coordinates: [x, y],
      ship: cell.ship
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

const Player = (name, isComputer = false) => {
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const attacksMade = new Set(); // Track attacks as 'x,y' strings

  const attack = (enemyBoard, x, y) => {
    return enemyBoard.receiveAttack(x, y);
  };
  const getRandomCoordinate = () => Math.floor(Math.random() * 10);
  const randomAttack = enemyBoard => {
    // If all possible attacks have been made, return null
    if (attacksMade.size >= 100) return null;
    let x, y, coordKey;

    // Find coordinates that haven't been attacked yet
    do {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
      coordKey = `${x},${y}`;
    } while (attacksMade.has(coordKey));

    // Record this attack
    attacksMade.add(coordKey);

    // Execute the attack
    return attack(enemyBoard, x, y);
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
/******/ 			// no module.id needed
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


document.addEventListener('DOMContentLoaded', () => {
  _modules_gameController__WEBPACK_IMPORTED_MODULE_0__["default"].initGame();
  _modules_domInterface__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUU7RUFDUixDQUFDO0VBRUQsTUFBTVYsTUFBTSxHQUFHQSxDQUFBLEtBQU1VLElBQUksSUFBSWpHLE1BQU07RUFFbkMsT0FBTztJQUNMQSxNQUFNO0lBQ05zQyxHQUFHO0lBQ0hpRCxNQUFNO0lBQ04sSUFBSVUsSUFBSUEsQ0FBQSxFQUFHO01BQ1QsT0FBT0EsSUFBSTtJQUNiO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZTVDLElBQUk7Ozs7OztVQ25CbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDSjtBQUVsRHRFLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsRHBCLCtEQUFjLENBQUMyRSxRQUFRLENBQUMsQ0FBQztFQUN6QjFFLDZEQUFZLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL2dhbWVDb250cm9sbGVyJztcblxuY29uc3QgRE9NSW50ZXJmYWNlID0gKCgpID0+IHtcbiAgLy8gRGVjbGFyZSBhbGwgRE9NIGVsZW1lbnRzIGF0IG1vZHVsZSBsZXZlbFxuICBsZXQgcGxheWVyQm9hcmRFbGVtZW50O1xuICBsZXQgY29tcHV0ZXJCb2FyZEVsZW1lbnQ7XG4gIGxldCBnYW1lSW5mb0VsZW1lbnQ7XG4gIGxldCBuZXdHYW1lQnV0dG9uO1xuICBsZXQgc2hpcFBsYWNlbWVudEFyZWE7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICAvLyBHZXQgRE9NIGVsZW1lbnRzXG4gICAgcGxheWVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgIGNvbXB1dGVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWJvYXJkJyk7XG4gICAgZ2FtZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtaW5mbycpO1xuICAgIG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWUtYnRuJyk7XG4gICAgc2hpcFBsYWNlbWVudEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1wbGFjZW1lbnQnKTtcblxuICAgIHJlbmRlckJvYXJkcygpO1xuXG4gICAgLy8gT25seSBzZXR1cCBwbGFjZW1lbnQgYW5kIGV2ZW50cyBpZiBlbGVtZW50cyBleGlzdFxuICAgIGlmIChwbGF5ZXJCb2FyZEVsZW1lbnQgJiYgY29tcHV0ZXJCb2FyZEVsZW1lbnQpIHtcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIGlmIChzaGlwUGxhY2VtZW50QXJlYSkge1xuICAgICAgICBzZXR1cFNoaXBQbGFjZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBTaXplcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBsZXQgY3VycmVudFNoaXBJbmRleCA9IDA7XG4gICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXBsYWNlbWVudCcpO1xuICAgIGlmICghc2hpcFBsYWNlbWVudEFyZWEpIHJldHVybjtcblxuICAgIHNoaXBQbGFjZW1lbnRBcmVhLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy8gUm90YXRpb24gYnV0dG9uXG4gICAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcm90YXRlQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSBTaGlwJztcbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpc0hvcml6b250YWwgPSAhaXNIb3Jpem9udGFsO1xuICAgICAgdXBkYXRlUGxhY2VtZW50UHJldmlldygpO1xuICAgIH0pO1xuICAgIHNoaXBQbGFjZW1lbnRBcmVhLmFwcGVuZENoaWxkKHJvdGF0ZUJ0bik7XG5cbiAgICAvLyBSYW5kb20gcGxhY2VtZW50IGJ1dHRvblxuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJhbmRvbUJ0bi50ZXh0Q29udGVudCA9ICdSYW5kb20gUGxhY2VtZW50JztcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBHYW1lQ29udHJvbGxlci5yYW5kb21pemVQbGF5ZXJTaGlwcygpO1xuICAgICAgY3VycmVudFNoaXBJbmRleCA9IHNoaXBTaXplcy5sZW5ndGg7XG4gICAgICB1cGRhdGVQbGFjZW1lbnRDb250cm9scygpO1xuICAgICAgcmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICB9KTtcbiAgICBzaGlwUGxhY2VtZW50QXJlYS5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuXG4gICAgLy8gU3RhcnQgZ2FtZSBidXR0b24gKGluaXRpYWxseSBkaXNhYmxlZClcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnRuLmlkID0gJ3N0YXJ0LWdhbWUnO1xuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJylcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudC1tb2RlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgc2hpcFBsYWNlbWVudEFyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVwZGF0ZUdhbWVJbmZvKCdHYW1lIHN0YXJ0ZWQhIFlvdXIgdHVybiB0byBhdHRhY2suJyk7XG4gICAgfSk7XG4gICAgc2hpcFBsYWNlbWVudEFyZWEuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuXG4gICAgLy8gU2V0IHVwIHBsYXllciBib2FyZCBmb3IgcGxhY2VtZW50XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1tb2RlJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWJvYXJkJykuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgIC8vIEFkZCBob3ZlciBwcmV2aWV3IGV2ZW50IHRvIHBsYXllciBib2FyZFxuICAgIHBsYXllckJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgIGlmIChjdXJyZW50U2hpcEluZGV4ID49IHNoaXBTaXplcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHJldHVybjtcblxuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KTtcblxuICAgICAgc2hvd1BsYWNlbWVudFByZXZpZXcoeCwgeSwgc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXhdLCBpc0hvcml6b250YWwpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIHBsYWNlbWVudCBjbGljayBldmVudCB0byBwbGF5ZXIgYm9hcmRcbiAgICBwbGF5ZXJCb2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChjdXJyZW50U2hpcEluZGV4ID49IHNoaXBTaXplcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHJldHVybjtcblxuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KTtcblxuICAgICAgY29uc3QgcGxhY2VkID0gR2FtZUNvbnRyb2xsZXIucGxhY2VQbGF5ZXJTaGlwKFxuICAgICAgICBzaGlwU2l6ZXNbY3VycmVudFNoaXBJbmRleF0sXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGlzSG9yaXpvbnRhbFxuICAgICAgKTtcblxuICAgICAgaWYgKHBsYWNlZCkge1xuICAgICAgICBjdXJyZW50U2hpcEluZGV4Kys7XG4gICAgICAgIHVwZGF0ZVBsYWNlbWVudENvbnRyb2xzKCk7XG4gICAgICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgY29udHJvbHMgYmFzZWQgb24gcGxhY2VtZW50IHByb2dyZXNzXG4gICAgY29uc3QgdXBkYXRlUGxhY2VtZW50Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFNoaXBJbmRleCA+PSBzaGlwU2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJykuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlR2FtZUluZm8oJ0FsbCBzaGlwcyBwbGFjZWQhIENsaWNrIFN0YXJ0IEdhbWUgdG8gYmVnaW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVHYW1lSW5mbyhcbiAgICAgICAgICBgUGxhY2UgeW91ciAke2dldFNoaXBOYW1lKHNoaXBTaXplc1tjdXJyZW50U2hpcEluZGV4XSl9ICgke1xuICAgICAgICAgICAgc2hpcFNpemVzW2N1cnJlbnRTaGlwSW5kZXhdXG4gICAgICAgICAgfSBjZWxscylgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIE1hcCBzaGlwIHNpemVzIHRvIG5hbWVzXG4gICAgY29uc3QgZ2V0U2hpcE5hbWUgPSBzaXplID0+IHtcbiAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdDYXJyaWVyJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnQmF0dGxlc2hpcCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ0NydWlzZXIvU3VibWFyaW5lJztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnRGVzdHJveWVyJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1NoaXAnO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVQbGFjZW1lbnRDb250cm9scygpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9ICgpID0+IHtcbiAgICBpZiAoIXBsYXllckJvYXJkRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgcGxheWVyQm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHBsYXllciA9IEdhbWVDb250cm9sbGVyLmdldFBsYXllcigpO1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgcmVuZGVyQm9hcmRHcmlkKHBsYXllckJvYXJkRWxlbWVudCwgYm9hcmQsIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gICAgaWYgKCFjb21wdXRlckJvYXJkRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgY29tcHV0ZXJCb2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBHYW1lQ29udHJvbGxlci5nZXRDb21wdXRlcigpO1xuICAgIGNvbnN0IGJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICByZW5kZXJCb2FyZEdyaWQoY29tcHV0ZXJCb2FyZEVsZW1lbnQsIGJvYXJkLCBmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9hcmRHcmlkID0gKGJvYXJkRWxlbWVudCwgYm9hcmQsIGlzUGxheWVyQm9hcmQpID0+IHtcbiAgICBib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0geDtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSB5O1xuXG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3ldW3hdO1xuXG4gICAgICAgIGlmIChib2FyZENlbGwgJiYgYm9hcmRDZWxsLnNoaXAgJiYgKGlzUGxheWVyQm9hcmQgfHwgYm9hcmRDZWxsLmhpdCkpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2FyZENlbGwgJiYgYm9hcmRDZWxsLmhpdCkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRDZWxsID09PSAnbWlzcycpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmRzID0gKCkgPT4ge1xuICAgIHJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgcmVuZGVyQ29tcHV0ZXJCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgaWYgKGNvbXB1dGVyQm9hcmRFbGVtZW50KSB7XG4gICAgICBjb21wdXRlckJvYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNvbXB1dGVyQm9hcmRDbGljayk7XG4gICAgfVxuXG4gICAgaWYgKG5ld0dhbWVCdXR0b24pIHtcbiAgICAgIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXdHYW1lQ2xpY2spO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb21wdXRlckJvYXJkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKEdhbWVDb250cm9sbGVyLmlzR2FtZU92ZXIoKSkgcmV0dXJuO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSByZXR1cm47XG5cbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gR2FtZUNvbnRyb2xsZXIucGxheVR1cm4oeCwgeSk7XG5cbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHVwZGF0ZUJvYXJkcygpO1xuXG4gICAgICBpZiAocmVzdWx0LmdhbWVPdmVyKSB7XG4gICAgICAgIGRpc3BsYXlHYW1lT3ZlcihyZXN1bHQud2lubmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV3R2FtZUNsaWNrID0gKCkgPT4ge1xuICAgIEdhbWVDb250cm9sbGVyLmluaXRHYW1lKCk7XG4gICAgdXBkYXRlQm9hcmRzKCk7XG4gICAgdXBkYXRlR2FtZUluZm8oJ05ldyBnYW1lIHN0YXJ0ZWQnKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVHYW1lSW5mbyA9IG1lc3NhZ2UgPT4ge1xuICAgIGlmIChnYW1lSW5mb0VsZW1lbnQpIHtcbiAgICAgIGdhbWVJbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlHYW1lT3ZlciA9IHdpbm5lciA9PiB7XG4gICAgdXBkYXRlR2FtZUluZm8oYEdhbWUgT3ZlciEgJHt3aW5uZXJ9IHdpbnMhYCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplLFxuICAgIHJlbmRlclBsYXllckJvYXJkLFxuICAgIHJlbmRlckNvbXB1dGVyQm9hcmQsXG4gICAgdXBkYXRlQm9hcmRzLFxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMsXG4gICAgZGlzcGxheUdhbWVPdmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NSW50ZXJmYWNlO1xuIiwiLy8gc3JjL21vZHVsZXMvZ2FtZUNvbnRyb2xsZXIuanNcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgR2FtZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyO1xuICBsZXQgY29tcHV0ZXI7XG4gIGxldCBjdXJyZW50UGxheWVyO1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgbGV0IHdpbm5lciA9IG51bGw7XG4gIGxldCBnYW1lU3RhcnRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcignUGxheWVyJyk7XG4gICAgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgdHJ1ZSk7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcbiAgICBnYW1lT3ZlciA9IGZhbHNlO1xuICAgIHdpbm5lciA9IG51bGw7XG4gICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIC8vIE9ubHkgcGxhY2Ugc2hpcHMgb24gY29tcHV0ZXIncyBib2FyZCBpbml0aWFsbHlcbiAgICBwbGFjZURlZmF1bHRTaGlwcyhjb21wdXRlci5nYW1lYm9hcmQpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlRGVmYXVsdFNoaXBzID0gZ2FtZWJvYXJkID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgIFNoaXAoNSksIC8vIENhcnJpZXJcbiAgICAgIFNoaXAoNCksIC8vIEJhdHRsZXNoaXBcbiAgICAgIFNoaXAoMyksIC8vIENydWlzZXJcbiAgICAgIFNoaXAoMyksIC8vIFN1Ym1hcmluZVxuICAgICAgU2hpcCgyKSwgLy8gRGVzdHJveWVyXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICAgICAgcGxhY2VkID0gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBob3Jpem9udGFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXAgPSAobGVuZ3RoLCB4LCB5LCBpc0hvcml6b250YWwpID0+IHtcbiAgICBpZiAoZ2FtZVN0YXJ0ZWQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGlzSG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9taXplUGxheWVyU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZCA9IFBsYXllcignUGxheWVyJykuZ2FtZWJvYXJkO1xuICAgIHBsYWNlRGVmYXVsdFNoaXBzKHBsYXllci5nYW1lYm9hcmQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgcmV0dXJuIGdhbWVTdGFydGVkO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlUdXJuID0gKHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZU92ZXIpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnR2FtZSBpcyBvdmVyJyB9O1xuICAgIGlmICghZ2FtZVN0YXJ0ZWQpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnR2FtZSBub3Qgc3RhcnRlZCcgfTtcbiAgICBpZiAoY3VycmVudFBsYXllciAhPT0gcGxheWVyKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdOb3QgcGxheWVyIHR1cm4nIH07XG5cbiAgICAvLyBQbGF5ZXIgYXR0YWNrcyBjb21wdXRlclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29tcHV0ZXIuZ2FtZWJvYXJkLCB4LCB5KTtcbiAgICBpZiAoIWF0dGFja1Jlc3VsdCkgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdJbnZhbGlkIGF0dGFjaycgfTtcblxuICAgIC8vIENoZWNrIGlmIGNvbXB1dGVyIGxvc3RcbiAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB3aW5uZXIgPSBwbGF5ZXI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICByZXN1bHQ6IGF0dGFja1Jlc3VsdCxcbiAgICAgICAgZ2FtZU92ZXI6IHRydWUsXG4gICAgICAgIHdpbm5lcjogcGxheWVyLm5hbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIENvbXB1dGVyIHR1cm5cbiAgICBjdXJyZW50UGxheWVyID0gY29tcHV0ZXI7XG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2tSZXN1bHQgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyLmdhbWVib2FyZCk7XG5cbiAgICAvLyBDaGVjayBpZiBwbGF5ZXIgbG9zdFxuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB3aW5uZXIgPSBjb21wdXRlcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHJlc3VsdDogYXR0YWNrUmVzdWx0LFxuICAgICAgICBjb21wdXRlck1vdmU6IGNvbXB1dGVyQXR0YWNrUmVzdWx0LFxuICAgICAgICBnYW1lT3ZlcjogdHJ1ZSxcbiAgICAgICAgd2lubmVyOiBjb21wdXRlci5uYW1lLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBCYWNrIHRvIHBsYXllcidzIHR1cm5cbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICByZXN1bHQ6IGF0dGFja1Jlc3VsdCxcbiAgICAgIGNvbXB1dGVyTW92ZTogY29tcHV0ZXJBdHRhY2tSZXN1bHQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBpc0dhbWVPdmVyID0gKCkgPT4gZ2FtZU92ZXI7XG5cbiAgY29uc3QgZ2V0V2lubmVyID0gKCkgPT4gd2lubmVyO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdEdhbWUsXG4gICAgcGxheVR1cm4sXG4gICAgaXNHYW1lT3ZlcixcbiAgICBnZXRXaW5uZXIsXG4gICAgcGxhY2VQbGF5ZXJTaGlwLFxuICAgIHJhbmRvbWl6ZVBsYXllclNoaXBzLFxuICAgIHN0YXJ0R2FtZSxcbiAgICBnZXRDdXJyZW50UGxheWVyOiAoKSA9PiBjdXJyZW50UGxheWVyLFxuICAgIGdldFBsYXllcjogKCkgPT4gcGxheWVyLFxuICAgIGdldENvbXB1dGVyOiAoKSA9PiBjb21wdXRlcixcbiAgICBpc0dhbWVTdGFydGVkOiAoKSA9PiBnYW1lU3RhcnRlZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGNvbnN0IGlzVmFsaWRQbGFjZW1lbnQgPSAoc2hpcCwgeCwgeSwgaXNIb3Jpem9udGFsKSA9PiB7XG4gICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3ldW3ggKyBpXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeSArIGldW3hdICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5LCBpc0hvcml6b250YWwpID0+IHtcbiAgICBpZiAoIWlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgeCwgeSwgaXNIb3Jpem9udGFsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2hpcHMucHVzaChzaGlwKTtcblxuICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt5XVt4ICsgaV0gPSB7IHNoaXAsIGluZGV4OiBpIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt5ICsgaV1beF0gPSB7IHNoaXAsIGluZGV4OiBpIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzICh1cGRhdGVkKVxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSAxMCB8fCB5IDwgMCB8fCB5ID49IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBjZWxsID0gYm9hcmRbeV1beF07XG5cbiAgICAvLyBBbHJlYWR5IGF0dGFja2VkIHRoaXMgcG9zaXRpb25cbiAgICBpZiAoY2VsbCA9PT0gJ21pc3MnIHx8IChjZWxsICE9PSBudWxsICYmIGNlbGwuaGl0ID09PSB0cnVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjZWxsID09PSBudWxsKSB7XG4gICAgICBib2FyZFt5XVt4XSA9ICdtaXNzJztcbiAgICAgIG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgICAgcmV0dXJuIHsgaGl0OiBmYWxzZSwgY29vcmRpbmF0ZXM6IFt4LCB5XSB9O1xuICAgIH1cblxuICAgIGNlbGwuaGl0ID0gdHJ1ZTtcbiAgICBjZWxsLnNoaXAuaGl0KCk7XG4gICAgcmV0dXJuIHsgaGl0OiB0cnVlLCBjb29yZGluYXRlczogW3gsIHldLCBzaGlwOiBjZWxsLnNoaXAgfTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldE1pc3NlZEF0dGFja3M6ICgpID0+IFsuLi5taXNzZWRBdHRhY2tzXSxcbiAgICBnZXRCb2FyZDogKCkgPT4gYm9hcmQubWFwKHJvdyA9PiBbLi4ucm93XSksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgYXR0YWNrc01hZGUgPSBuZXcgU2V0KCk7IC8vIFRyYWNrIGF0dGFja3MgYXMgJ3gseScgc3RyaW5nc1xuXG4gIGNvbnN0IGF0dGFjayA9IChlbmVteUJvYXJkLCB4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IGVuZW15Qm9hcmQgPT4ge1xuICAgIC8vIElmIGFsbCBwb3NzaWJsZSBhdHRhY2tzIGhhdmUgYmVlbiBtYWRlLCByZXR1cm4gbnVsbFxuICAgIGlmIChhdHRhY2tzTWFkZS5zaXplID49IDEwMCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgeCwgeSwgY29vcmRLZXk7XG5cbiAgICAvLyBGaW5kIGNvb3JkaW5hdGVzIHRoYXQgaGF2ZW4ndCBiZWVuIGF0dGFja2VkIHlldFxuICAgIGRvIHtcbiAgICAgIHggPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICB5ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgY29vcmRLZXkgPSBgJHt4fSwke3l9YDtcbiAgICB9IHdoaWxlIChhdHRhY2tzTWFkZS5oYXMoY29vcmRLZXkpKTtcblxuICAgIC8vIFJlY29yZCB0aGlzIGF0dGFja1xuICAgIGF0dGFja3NNYWRlLmFkZChjb29yZEtleSk7XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBhdHRhY2tcbiAgICByZXR1cm4gYXR0YWNrKGVuZW15Qm9hcmQsIHgsIHkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBnYW1lYm9hcmQsXG4gICAgYXR0YWNrLFxuICAgIHJhbmRvbUF0dGFjayxcbiAgICBpc0NvbXB1dGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IGxlbmd0aCA9PiB7XG4gIGxldCBoaXRzID0gMDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdHMgPj0gbGVuZ3RoO1xuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0IGhpdHMoKSB7XG4gICAgICByZXR1cm4gaGl0cztcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9nYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy9kb21JbnRlcmZhY2UnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBHYW1lQ29udHJvbGxlci5pbml0R2FtZSgpO1xuICBET01JbnRlcmZhY2UuaW5pdGlhbGl6ZSgpO1xufSk7XG4iXSwibmFtZXMiOlsiR2FtZUNvbnRyb2xsZXIiLCJET01JbnRlcmZhY2UiLCJwbGF5ZXJCb2FyZEVsZW1lbnQiLCJjb21wdXRlckJvYXJkRWxlbWVudCIsImdhbWVJbmZvRWxlbWVudCIsIm5ld0dhbWVCdXR0b24iLCJzaGlwUGxhY2VtZW50QXJlYSIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyQm9hcmRzIiwic2V0dXBFdmVudExpc3RlbmVycyIsInNldHVwU2hpcFBsYWNlbWVudCIsInNoaXBTaXplcyIsImN1cnJlbnRTaGlwSW5kZXgiLCJpc0hvcml6b250YWwiLCJpbm5lckhUTUwiLCJyb3RhdGVCdG4iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlUGxhY2VtZW50UHJldmlldyIsImFwcGVuZENoaWxkIiwicmFuZG9tQnRuIiwicmFuZG9taXplUGxheWVyU2hpcHMiLCJsZW5ndGgiLCJ1cGRhdGVQbGFjZW1lbnRDb250cm9scyIsInJlbmRlclBsYXllckJvYXJkIiwic3RhcnRCdG4iLCJpZCIsImRpc2FibGVkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwidXBkYXRlR2FtZUluZm8iLCJhZGQiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJ4IiwicGFyc2VJbnQiLCJkYXRhc2V0IiwieSIsInNob3dQbGFjZW1lbnRQcmV2aWV3IiwicGxhY2VkIiwicGxhY2VQbGF5ZXJTaGlwIiwiZ2V0U2hpcE5hbWUiLCJzaXplIiwicmVuZGVyQ29tcHV0ZXJCb2FyZCIsInBsYXllciIsImdldFBsYXllciIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiZ2V0Qm9hcmQiLCJyZW5kZXJCb2FyZEdyaWQiLCJjb21wdXRlciIsImdldENvbXB1dGVyIiwiYm9hcmRFbGVtZW50IiwiaXNQbGF5ZXJCb2FyZCIsImNlbGwiLCJib2FyZENlbGwiLCJzaGlwIiwiaGl0IiwidXBkYXRlQm9hcmRzIiwiaGFuZGxlQ29tcHV0ZXJCb2FyZENsaWNrIiwiaGFuZGxlTmV3R2FtZUNsaWNrIiwiZXZlbnQiLCJpc0dhbWVPdmVyIiwicmVzdWx0IiwicGxheVR1cm4iLCJzdWNjZXNzIiwiZ2FtZU92ZXIiLCJkaXNwbGF5R2FtZU92ZXIiLCJ3aW5uZXIiLCJpbml0R2FtZSIsIm1lc3NhZ2UiLCJQbGF5ZXIiLCJTaGlwIiwiY3VycmVudFBsYXllciIsImdhbWVTdGFydGVkIiwicGxhY2VEZWZhdWx0U2hpcHMiLCJzaGlwcyIsImZvckVhY2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJob3Jpem9udGFsIiwicGxhY2VTaGlwIiwic3RhcnRHYW1lIiwiYXR0YWNrUmVzdWx0IiwiYXR0YWNrIiwiYWxsU2hpcHNTdW5rIiwibmFtZSIsImNvbXB1dGVyQXR0YWNrUmVzdWx0IiwicmFuZG9tQXR0YWNrIiwiY29tcHV0ZXJNb3ZlIiwiZ2V0V2lubmVyIiwiZ2V0Q3VycmVudFBsYXllciIsImlzR2FtZVN0YXJ0ZWQiLCJHYW1lYm9hcmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJtaXNzZWRBdHRhY2tzIiwiaXNWYWxpZFBsYWNlbWVudCIsImkiLCJwdXNoIiwiaW5kZXgiLCJyZWNlaXZlQXR0YWNrIiwiY29vcmRpbmF0ZXMiLCJldmVyeSIsImlzU3VuayIsImdldE1pc3NlZEF0dGFja3MiLCJyb3ciLCJpc0NvbXB1dGVyIiwiYXR0YWNrc01hZGUiLCJTZXQiLCJlbmVteUJvYXJkIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZSIsImNvb3JkS2V5IiwiaGFzIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=