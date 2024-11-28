// main.js

import { player, updatePlayerState, takeDamage, heal } from './player.js';
import { enemy, moveEnemy } from './enemy.js';
import { drawMap } from './map.js';

// Configuração do canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Outros códigos...

// Dentro do loop principal do jogo:
function gameLoop() {
  updatePlayerState();
  moveEnemy();

  // Desenho do mapa e personagem
  drawMap(ctx, camera, tilesetImage);
  // Desenhar o jogador, inimigos, UI etc.

  requestAnimationFrame(gameLoop); // Mantém o loop do jogo
}

gameLoop();
