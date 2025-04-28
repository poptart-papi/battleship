import GameController from './modules/gameController';
import DOMInterface from './modules/domInterface';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  GameController.initGame();
  DOMInterface.initialize();
});
