import Gameboard from '../src/modules/gameboard';
import Ship from '../src/modules/ship';

describe('Gameboard factory', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('creates a 10x10 board', () => {
    const board = gameboard.getBoard();
    expect(board.length).toBe(10);
    expect(board[0].length).toBe(10);
  });

  test('places ship horizontally', () => {
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, true);
    const board = gameboard.getBoard();

    expect(board[0][0]).toEqual({ ship, index: 0 });
    expect(board[0][1]).toEqual({ ship, index: 1 });
    expect(board[0][2]).toEqual({ ship, index: 2 });
  });

  test('places ship vertically', () => {
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, false);
    const board = gameboard.getBoard();

    expect(board[0][0]).toEqual({ ship, index: 0 });
    expect(board[1][0]).toEqual({ ship, index: 1 });
    expect(board[2][0]).toEqual({ ship, index: 2 });
  });

  test('prevents placing ship out of bounds horizontally', () => {
    const ship = Ship(3);
    expect(gameboard.placeShip(ship, 8, 0, true)).toBe(false);
  });

  test('prevents placing ship out of bounds vertically', () => {
    const ship = Ship(3);
    expect(gameboard.placeShip(ship, 0, 8, false)).toBe(false);
  });

  test('receives attack and records hit on ship', () => {
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, true);

    gameboard.receiveAttack(1, 0);
    expect(ship.hits).toBe(1);
  });

  test('receives attack and records miss', () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getMissedAttacks()).toContainEqual([0, 0]);
  });

  test('reports if all ships are sunk', () => {
    const ship1 = Ship(2);
    const ship2 = Ship(1);

    gameboard.placeShip(ship1, 0, 0, true);
    gameboard.placeShip(ship2, 2, 2, true);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 2);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
