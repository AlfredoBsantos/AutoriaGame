// utils.js

// Função para verificar colisões
export function checkCollision(x, y, mapData, tileSize) {
  if (!mapData || !mapData.layers) return false;

  const collisionLayer = mapData.layers.find(layer => layer.name === 'colisao');
  if (!collisionLayer) return false;

  const { data } = collisionLayer;
  const tileX = Math.floor(x / tileSize);
  const tileY = Math.floor(y / tileSize);
  const tileIndex = tileY * mapData.width + tileX;

  const tile = data[tileIndex];
  return tile === 1441; // Verifica se o tile é 1441, que é a colisão
}

// Função para atualizar o estado do jogador (invulnerabilidade)
export function updatePlayerState(player) {
  const currentTime = Date.now();

  if (player.invulnerable && currentTime - player.lastDamageTime > player.invulnerabilityDuration) {
    player.invulnerable = false;
  }
}

// Função para reduzir a vida do jogador ao tomar dano
export function takeDamage(player, amount) {
  const currentTime = Date.now();

  if (!player.invulnerable && player.lives > 0) {
    player.lives -= amount;
    player.lives = Math.max(0, player.lives); // Garante que não fique abaixo de 0
    player.invulnerable = true;
    player.lastDamageTime = currentTime;

    if (player.lives <= 0) {
      return true; // Indica que o jogo acabou
    }
  }
  return false; // Jogo não acabou
}

// Função para curar o jogador
export function heal(player, amount) {
  player.lives = Math.min(player.lives + amount, player.maxLives);
}

// Função para mover o jogador
export function movePlayer(player, keys, mapWidth, mapHeight, tileSize, checkCollision) {
  player.isMoving = false;

  const maxX = mapWidth - player.width;
  const maxY = mapHeight - player.height;

  if (keys['ArrowUp'] && player.y > 0 && !player.isAttacking && !checkCollision(player.x, player.y - player.speed)) {
    player.y -= player.speed;
    player.frameY = 2;
    player.direction = 'up';
    player.isMoving = true;
  }
  if (keys['ArrowDown'] && player.y < maxY && !player.isAttacking && !checkCollision(player.x, player.y + player.height + player.speed)) {
    player.y += player.speed;
    player.frameY = 0;
    player.direction = 'down';
    player.isMoving = true;
  }
  if (keys['ArrowLeft'] && player.x > 0 && !player.isAttacking && !checkCollision(player.x - player.speed, player.y)) {
    player.x -= player.speed;
    player.frameY = 3;
    player.direction = 'left';
    player.isMoving = true;
  }
  if (keys['ArrowRight'] && player.x < maxX && !player.isAttacking && !checkCollision(player.x + player.width + player.speed, player.y)) {
    player.x += player.speed;
    player.frameY = 1;
    player.direction = 'right';
    player.isMoving = true;
  }

  if (keys[' ']) {
    if (!player.isAttacking) {
      player.isAttacking = true;
      player.attackDuration = 0;
      if (player.direction === 'down') player.attackFrameY = 4;
      if (player.direction === 'up') player.attackFrameY = 5;
      if (player.direction === 'right') player.attackFrameY = 6;
      if (player.direction === 'left') player.attackFrameY = 7;
    }
  }
}

// Função para verificar colisão entre o inimigo e o jogador
export function checkEnemyCollision(player, enemy) {
  const playerLeft = player.x;
  const playerRight = player.x + player.width;
  const playerTop = player.y;
  const playerBottom = player.y + player.height;

  const enemyLeft = enemy.x;
  const enemyRight = enemy.x + enemy.width;
  const enemyTop = enemy.y;
  const enemyBottom = enemy.y + enemy.height;

  // Verifica se há colisão
  if (playerRight > enemyLeft && playerLeft < enemyRight && playerBottom > enemyTop && playerTop < enemyBottom) {
    return true; // Colisão detectada
  }
  return false; // Nenhuma colisão
}
