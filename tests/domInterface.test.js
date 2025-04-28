import DOMInterface from '../src/modules/domInterface';
import GameController from '../src/modules/gameController';

// Mock implementation for elements
const mockPlayerBoard = document.createElement('div');
mockPlayerBoard.id = 'player-board';
const mockComputerBoard = document.createElement('div');
mockComputerBoard.id = 'computer-board';
const mockGameInfo = document.createElement('div');
mockGameInfo.id = 'game-info';
const mockNewGameBtn = document.createElement('button');
mockNewGameBtn.id = 'new-game-btn';
const mockShipPlacement = document.createElement('div');
mockShipPlacement.id = 'ship-placement';

document.body.appendChild(mockPlayerBoard);
document.body.appendChild(mockComputerBoard);
document.body.appendChild(mockGameInfo);
document.body.appendChild(mockNewGameBtn);
document.body.appendChild(mockShipPlacement);

describe('DOMInterface', () => {
  beforeEach(() => {
    mockPlayerBoard.innerHTML = '';
    mockComputerBoard.innerHTML = '';
    mockGameInfo.innerHTML = '';
    GameController.initGame();
    DOMInterface.initialize();
  });

  test('renders board grids', () => {
    expect(mockPlayerBoard.querySelectorAll('.cell').length).toBe(100);
    expect(mockComputerBoard.querySelectorAll('.cell').length).toBe(100);
  });

  test('handles ship placement', () => {
    const placeSpy = jest.spyOn(GameController, 'placePlayerShip');
    const cell = mockPlayerBoard.querySelector('.cell');
    cell.click();
    expect(placeSpy).toHaveBeenCalled();
  });
});
