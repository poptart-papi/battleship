import Gameboard from './gameboard';

const Player = (name, isComputer = false) => {
  const gameboard = Gameboard();
  const attacksMade = new Set(); // Track as 'x,y' strings

  // AI tracking state
  const successfulHits = []; // Track successful hits
  const pendingTargets = []; // Adjacent cells to try

  const attack = (enemyBoard, x, y) => {
    return enemyBoard.receiveAttack(x, y);
  };

  const getRandomCoordinate = () => Math.floor(Math.random() * 10);

  const randomAttack = enemyBoard => {
    if (attacksMade.size >= 100) return null;

    // Smart targeting logic - check if we have pending targets from previous hits
    if (isComputer && pendingTargets.length > 0) {
      // Try next target from queue
      const [x, y] = pendingTargets.shift();
      const coordKey = `${x},${y}`;

      // Skip if already attacked
      if (attacksMade.has(coordKey) || x < 0 || x > 9 || y < 0 || y > 9) {
        return randomAttack(enemyBoard);
      }

      attacksMade.add(coordKey);
      const result = attack(enemyBoard, x, y);

      // If hit, add adjacent cells to target
      if (result && result.hit) {
        successfulHits.push([x, y]);
        addAdjacentTargets(x, y);
      }

      return result;
    }

    // Hunt mode - random attack
    let x, y, coordKey;
    do {
      x = getRandomCoordinate();
      y = getRandomCoordinate();
      coordKey = `${x},${y}`;
    } while (attacksMade.has(coordKey));

    attacksMade.add(coordKey);
    const result = attack(enemyBoard, x, y);

    // If hit, switch to target mode
    if (result && result.hit) {
      successfulHits.push([x, y]);
      addAdjacentTargets(x, y);
    }

    return result;
  };

  // Add adjacent cells to targeting queue
  const addAdjacentTargets = (x, y) => {
    // Prioritize aligned targets if we have multiple hits
    if (successfulHits.length >= 2) {
      // Check if hits align horizontally or vertically
      const alignedTargets = getAlignedTargets();
      if (alignedTargets.length > 0) {
        pendingTargets.length = 0; // Clear existing targets
        pendingTargets.push(...alignedTargets);
        return;
      }
    }

    // Otherwise add all adjacent cells
    pendingTargets.push(
      [x + 1, y], // right
      [x - 1, y], // left
      [x, y + 1], // down
      [x, y - 1] // up
    );
  };

  // Calculate aligned targets based on hit pattern
  const getAlignedTargets = () => {
    const targets = [];

    // Sort hits to identify patterns
    const sortedHitsX = [...successfulHits].sort((a, b) => a[0] - b[0]);
    const sortedHitsY = [...successfulHits].sort((a, b) => a[1] - b[1]);

    // Check for horizontal alignment
    if (
      sortedHitsX.length >= 2 &&
      sortedHitsX[0][1] === sortedHitsX[1][1] &&
      Math.abs(sortedHitsX[0][0] - sortedHitsX[1][0]) === 1
    ) {
      const y = sortedHitsX[0][1];
      const minX = sortedHitsX[0][0];
      const maxX = sortedHitsX[sortedHitsX.length - 1][0];

      // Add targets at ends of aligned hits
      targets.push([minX - 1, y], [maxX + 1, y]);
    }

    // Check for vertical alignment
    if (
      sortedHitsY.length >= 2 &&
      sortedHitsY[0][0] === sortedHitsY[1][0] &&
      Math.abs(sortedHitsY[0][1] - sortedHitsY[1][1]) === 1
    ) {
      const x = sortedHitsY[0][0];
      const minY = sortedHitsY[0][1];
      const maxY = sortedHitsY[sortedHitsY.length - 1][1];

      // Add targets at ends of aligned hits
      targets.push([x, minY - 1], [x, maxY + 1]);
    }

    return targets;
  };

  return {
    name,
    gameboard,
    attack,
    randomAttack,
    isComputer,
  };
};

export default Player;
