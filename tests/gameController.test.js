import GameController from '../src/modules/gameController';
import Ship from '../src/modules/ship';

describe('GameController', () => {
  beforeEach(() => {
    GameController.initGame();
  });

  test('initializes game with player and computer', () => {
    expect(GameController.getPlayer()).toBeDefined();
    expect(GameController.getComputer()).toBeDefined();
    expect(GameController.getCurrentPlayer()).toBe(GameController.getPlayer());
  });

  test('places ships on computer board only initially', () => {
    const player = GameController.getPlayer();
    const computer = GameController.getComputer();

    // Only computer should have ships initially
    const playerBoard = player.gameboard.getBoard();
    const computerBoard = computer.gameboard.getBoard();

    const playerHasShips = playerBoard.some(row =>
      row.some(cell => cell !== null)
    );
    const computerHasShips = computerBoard.some(row =>
      row.some(cell => cell !== null)
    );

    expect(playerHasShips).toBe(false); // Changed to false
    expect(computerHasShips).toBe(true);
  });

  test('allows player ship placement', () => {
    GameController.placePlayerShip(3, 0, 0, true);
    const player = GameController.getPlayer();
    const playerBoard = player.gameboard.getBoard();

    // Should have a ship at 0,0 after placement
    expect(playerBoard[0][0]).not.toBe(null);
  });

  test('handles player turn and returns expected result structure', () => {
    // Setup
    GameController.randomizePlayerShips();
    GameController.startGame();

    // Execute turn with coordinates far from any ships (usually empty)
    const result = GameController.playTurn(9, 9);

    // Check result structure instead of internal state
    expect(result.success).toBe(true);
    expect(result.result).toBeDefined();
    expect(result.computerMove).toBeDefined();
    expect(GameController.getCurrentPlayer()).toBe(GameController.getPlayer());
  });

  test('detects game over condition', () => {
    const player = GameController.getPlayer();
    const computer = GameController.getComputer();

    // Setup for game play
    GameController.randomizePlayerShips();
    GameController.startGame();

    // Mock computer's gameboard to report all ships sunk
    const mockAllShipsSunk = jest
      .spyOn(computer.gameboard, 'allShipsSunk')
      .mockImplementation(() => true);

    // Execute a turn to trigger game over check
    GameController.playTurn(0, 0);

    // Verify game over condition
    expect(GameController.isGameOver()).toBe(true);
    expect(GameController.getWinner()).toBe(player);

    mockAllShipsSunk.mockRestore();
  });
});
