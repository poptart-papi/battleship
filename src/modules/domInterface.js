import GameController from './gameController';

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
      GameController.randomizePlayerShips();
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
      GameController.startGame();
      
      document
        .getElementById('player-board')
        .classList.remove('placement-mode');
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
            const cell = playerBoardElement.querySelector(
              `.cell[data-x="${x + i}"][data-y="${y}"]`
            );
            if (cell) cell.classList.add(previewClass);
          }
        }
      } else {
        for (let i = 0; i < length; i++) {
          if (y + i < 10) {
            const cell = playerBoardElement.querySelector(
              `.cell[data-x="${x}"][data-y="${y + i}"]`
            );
            if (cell) cell.classList.add(previewClass);
          }
        }
      }
    };

    // Check if placement is valid
    const checkValidPlacement = (x, y, length, horizontal) => {
      const board = GameController.getPlayer().gameboard.getBoard();
      
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

      const placed = GameController.placePlayerShip(
        shipSizes[currentShipIndex],
        x,
        y,
        isHorizontal
      );

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
        updateGameInfo(
          `Place your ${getShipName(shipSizes[currentShipIndex])} (${
            shipSizes[currentShipIndex]
          } cells)`
        );
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
    const player = GameController.getPlayer();
    const board = player.gameboard.getBoard();

    renderBoardGrid(playerBoardElement, board, true);
  };

  const renderComputerBoard = () => {
    if (!computerBoardElement) return;

    computerBoardElement.innerHTML = '';
    const computer = GameController.getComputer();
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
    if (GameController.isGameOver()) {
      updateGameInfo(`Game Over! ${GameController.getWinner().name} wins! Click New Game to play again.`);
      return;
    }
    
    if (!GameController.isGameStarted()) {
      updateGameInfo('You need to place your ships and start the game first!');
      return;
    }
    
    if (!event.target.classList.contains('cell')) return;

    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);

    const result = GameController.playTurn(x, y);

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
    GameController.initGame();
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
    displayGameOver,
  };
})();

export default DOMInterface;
