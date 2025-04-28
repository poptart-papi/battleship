import Ship from '../src/modules/ship';

describe('Ship factory', () => {
  test('creates a ship with the correct length', () => {
    const ship = Ship(3);
    expect(ship.length).toBe(3);
  });

  test('ship hit() increases hit count', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('ship is not sunk when hits < length', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test('ship is sunk when hits >= length', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
