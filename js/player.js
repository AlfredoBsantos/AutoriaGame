// player.js

export const player = {
  x: 100,
  y: 100,
  width: 16,
  height: 32,
  frameX: 0,
  frameY: 0,
  attackFrameX: 0,
  attackFrameY: 0,
  speed: 1,
  direction: 'down',
  isMoving: false,
  isAttacking: false,
  attackDuration: 0,
  animationSpeed: 100,
  lastAnimationUpdate: 0,
  lives: 3, // Número inicial de vidas
  maxLives: 5, // Vida máxima
  invulnerable: false, // Jogador começa vulnerável
  invulnerabilityDuration: 3000, // Duração de invulnerabilidade (3 segundos)
  lastDamageTime: 0, // Momento do último dano
};

// Função para atualizar o estado do jogador
export function updatePlayerState() {
  const currentTime = Date.now();
  if (player.invulnerable && currentTime - player.lastDamageTime > player.invulnerabilityDuration) {
    player.invulnerable = false;
  }
}

// Função para aplicar dano ao jogador
export function takeDamage(amount) {
  const currentTime = Date.now();

  if (!player.invulnerable && player.lives > 0) {
    player.lives -= amount;
    player.lives = Math.max(0, player.lives); // Garante que não fique abaixo de 0
    player.invulnerable = true;
    player.lastDamageTime = currentTime;

    if (player.lives <= 0) {
      gameOver();
    }
  }
}

// Função para curar o jogador
export function heal(amount) {
  player.lives = Math.min(player.lives + amount, player.maxLives);
}

