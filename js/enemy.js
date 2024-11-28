// enemy.js

export const enemy = {
  x: 230,
  y: 460,
  width: 32,
  height: 32,
  frameX: 0,
  frameY: 0,
  speed: 0.5,
  isMoving: true,
  animationSpeed: 200,
  lastAnimationUpdate: 0,
};

// Função para mover o inimigo
export function moveEnemy() {
  if (enemy.isMoving) {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 1) {
      const directionX = dx / distance;
      const directionY = dy / distance;

      if (Math.abs(directionX) > Math.abs(directionY)) {
        enemy.x += directionX * enemy.speed;
        enemy.frameY = directionX > 0 ? 2 : 3; // Direção horizontal
      } else {
        enemy.y += directionY * enemy.speed;
        enemy.frameY = directionY > 0 ? 0 : 1; // Direção vertical
      }

      const currentTime = Date.now();
      if (currentTime - enemy.lastAnimationUpdate >= enemy.animationSpeed) {
        enemy.lastAnimationUpdate = currentTime;
        enemy.frameX = (enemy.frameX + 1) % 4;
      }
    }
  }
}
