import Player from '../src/modules/player';
import Gameboard from '../src/modules/gameboard';

describe('Player factory', () => {
  test('creates player with name and gameboard', () => {
    const player = Player('Player 1');
    expect(player.name).toBe('Player 1');
    expect(player.gameboard).toBeDefined();
  });

  test('player can attack enemy board', () => {
    const player = Player('Player 1');
    const enemyBoard = Gameboard();
    const attackResult = player.attack(enemyBoard, 0, 0);
    expect(attackResult).toEqual({ hit: false, coordinates: [0, 0] });
    expect(enemyBoard.getMissedAttacks()).toContainEqual([0, 0]);
  });

  test('computer player can make random attack', () => {
    const computer = Player('Computer', true);
    const enemyBoard = Gameboard();
    const attackResult = computer.randomAttack(enemyBoard);
    expect(attackResult).toBeDefined();
    expect(enemyBoard.getMissedAttacks().length).toBe(1);
  });

  test('computer attacks are valid and not repeated', () => {
    const computer = Player('Computer', true);
    const enemyBoard = Gameboard();

    // Fill most of the board with attacks
    for (let i = 0; i < 98; i++) {
      computer.randomAttack(enemyBoard);
    }

    // Should still be able to make a valid attack
    const attackResult = computer.randomAttack(enemyBoard);
    expect(attackResult).toBeDefined();

    // One more attack
    const finalResult = computer.randomAttack(enemyBoard);
    expect(finalResult).toBeDefined();

    // Total missed attacks should be 100 (full board)
    expect(enemyBoard.getMissedAttacks().length).toBe(100);
  });
});
