const Gameboard = () => {
  const board = Array(10)
    .fill()
    .map(() => Array(10).fill(null));
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
        board[y][x + i] = { ship, index: i };
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        board[y + i][x] = { ship, index: i };
      }
    }

    return true;
  };

  const receiveAttack = (x, y) => {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;

    const cell = board[y][x];

    // Already attacked this position
    if (cell === 'miss' || (cell !== null && cell.hit === true)) {
      return false;
    }

    if (cell === null) {
      board[y][x] = 'miss';
      missedAttacks.push([x, y]);
      return { hit: false, coordinates: [x, y] };
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
    getBoard: () => board.map(row => [...row]),
  };
};

export default Gameboard;
