import Player from './player';
import Ship from './ship';

const GameController = (() => {
  let player;
  let computer;
  let currentPlayer;
  let gameOver = false;
  let winner = null;
  let gameStarted = false;

  const initGame = () => {
    player = Player('Player');
    computer = Player('Computer', true);
    currentPlayer = player;
    gameOver = false;
    winner = null;
    gameStarted = false;

    // Only place ships on computer's board initially
    placeDefaultShips(computer.gameboard);
  };

  const placeDefaultShips = gameboard => {
    const ships = [
      Ship(5), // Carrier
      Ship(4), // Battleship
      Ship(3), // Cruiser
      Ship(3), // Submarine
      Ship(2), // Destroyer
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

    const ship = Ship(length);
    return player.gameboard.placeShip(ship, x, y, isHorizontal);
  };

  const randomizePlayerShips = () => {
    player.gameboard = Player('Player').gameboard;
    placeDefaultShips(player.gameboard);
    return true;
  };

  const startGame = () => {
    gameStarted = true;
    return gameStarted;
  };

  const playTurn = (x, y) => {
    if (gameOver) return { success: false, message: 'Game is over' };
    if (!gameStarted) return { success: false, message: 'Game not started' };
    if (currentPlayer !== player)
      return { success: false, message: 'Not player turn' };

    // Player attacks computer
    const attackResult = player.attack(computer.gameboard, x, y);
    if (!attackResult) return { success: false, message: 'Invalid attack' };

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
        winner: player.name,
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
        winner: computer.name,
      };
    }

    // Back to player's turn
    currentPlayer = player;

    return {
      success: true,
      result: attackResult,
      computerMove: computerAttackResult,
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
    isGameStarted: () => gameStarted,
  };
})();

export default GameController;
