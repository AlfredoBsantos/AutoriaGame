const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Carregar o mapa e tileset
const mapData = TileMaps['mapaPrincipal']; // Mapa carregado do arquivo
const tileSize = 16; // Tamanho do tile (16x16)

// Carregar as imagens
const tilesetImage = new Image();
tilesetImage.src = './img/Overworld.png'; // O nome correto do tileset

const characterImage = new Image();
characterImage.src = './img/character.png'; // O nome do arquivo do personagem

const heartImage = new Image();
heartImage.src = './img/Heart.png'; // Caminho para a imagem do coração

// Carregar a imagem do inimigo
const enemyImage = new Image();
enemyImage.src = './img/log.png'; // Caminho para a imagem do inimigo (log.png)

// Ajustar o tamanho do canvas com base no mapa
const mapWidth = mapData ? mapData.width * tileSize : 0;
const mapHeight = mapData ? mapData.height * tileSize : 0;

// Configuração do personagem
const player = {
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
};

// Definir as propriedades do inimigo
const enemy = {
  x: 200, // Posição inicial X
  y: 150, // Posição inicial Y
  width: 32, // Largura do inimigo
  height: 32, // Altura do inimigo
  frameX: 0, // Frame X inicial
  frameY: 0, // Frame Y inicial (direção do inimigo)
  speed: 0.5, // Velocidade do inimigo
  isMoving: true, // Define se o inimigo está se movendo
  animationSpeed: 200, // Velocidade da animação do inimigo
  lastAnimationUpdate: 0, // Marcação de tempo da última atualização da animação
};

// Capturar as teclas pressionadas
const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

// Função para verificar colisões
function checkCollision(x, y) {
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

// Funções de vida
function takeDamage(amount) {
  player.lives -= amount;
  if (player.lives <= 0) {
    gameOver();
  }
}

function heal(amount) {
  player.lives = Math.min(player.lives + amount, player.maxLives);
}

function gameOver() {
  console.log("Game Over!");
  // Reiniciar o jogo ou implementar tela de fim
}

// Função para atualizar a animação
function updateAnimation() {
  const currentTime = Date.now();
  if (currentTime - player.lastAnimationUpdate >= player.animationSpeed) {
    player.lastAnimationUpdate = currentTime;

    if (player.isAttacking) {
      player.attackFrameX = (player.attackFrameX + 1) % 4;
      if (player.attackFrameX === 0) {
        player.isAttacking = false;
      }
    } else if (player.isMoving) {
      player.frameX = (player.frameX + 1) % 4;
    } else {
      player.frameX = 0;
    }
  }
}

// Função para mover o inimigo
function moveEnemy() {
  if (enemy.isMoving) {
    const dx = player.x - enemy.x; // Distância no eixo X
    const dy = player.y - enemy.y; // Distância no eixo Y

    const distance = Math.sqrt(dx * dx + dy * dy); // Distância euclidiana

    if (distance > 1) { // Se o inimigo não estiver no mesmo local que o jogador
      // Normalizar a direção
      const directionX = dx / distance;
      const directionY = dy / distance;

      // Atualiza a direção com base na maior componente de movimento
      if (Math.abs(directionX) > Math.abs(directionY)) {
        // Movendo na direção horizontal (esquerda/direita)
        enemy.x += directionX * enemy.speed;
        if (directionX > 0) {
          enemy.frameY = 2; // Direção direita
        } else {
          enemy.frameY = 3; // Direção esquerda
        }
      } else {
        // Movendo na direção vertical (cima/baixo)
        enemy.y += directionY * enemy.speed;
        if (directionY > 0) {
          enemy.frameY = 0; // Direção para baixo
        } else {
          enemy.frameY = 1; // Direção para cima
        }
      }

      // Atualizar a animação
      const currentTime = Date.now();
      if (currentTime - enemy.lastAnimationUpdate >= enemy.animationSpeed) {
        enemy.lastAnimationUpdate = currentTime;
        enemy.frameX = (enemy.frameX + 1) % 4; // Alterna entre os 4 quadros
      }
    }
  }
}

// Função para desenhar o inimigo com animação
function drawEnemy() {
  const frameX = enemy.frameX;
  const frameY = enemy.frameY;

  ctx.drawImage(
    enemyImage,
    frameX * enemy.width, frameY * enemy.height, // Define o quadro correto da animação
    enemy.width, enemy.height, // Tamanho do inimigo
    enemy.x, enemy.y, // Posição no canvas
    enemy.width, enemy.height // Tamanho no canvas
  );
}

// Função para verificar colisão entre o inimigo e o jogador
function checkEnemyCollision() {
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
    takeDamage(1); // Chama a função de dano (reduz a vida do jogador)
  }
}

// Função para mover o jogador
function movePlayer() {
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

const camera = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

// Atualiza a posição da câmera para centralizar no jogador
function updateCamera() {
  camera.x = Math.max(0, Math.min(player.x - camera.width / 2, mapWidth - camera.width));
  camera.y = Math.max(0, Math.min(player.y - camera.height / 2, mapHeight - camera.height));
}


// Função para desenhar os corações de vida
function drawLives() {
  const heartSize = 20; // Tamanho de cada coração
  const startX = 10; // Posição inicial no eixo X (fixa na tela)
  const startY = 10; // Posição inicial no eixo Y (fixa na tela)
  const spacing = 5; // Espaçamento entre os corações

  for (let i = 0; i < player.lives; i++) {
    const x = startX + (heartSize + spacing) * i;
    ctx.drawImage(heartImage, x, startY, heartSize, heartSize);
  }
}


// Função para desenhar o mapa
function drawMap() {
  if (!mapData || !mapData.layers) {
    console.error("Erro: Mapa ou camadas não carregadas corretamente.");
    return;
  }

  const { layers, width } = mapData;

  layers.forEach((layer, layerIndex) => {
    if (!layer.data) {
      console.error(`Erro: Dados da camada ${layerIndex} ausentes.`);
      return;
    }

    const { data } = layer;

    data.forEach((tile, index) => {
      if (tile !== 0) {
        const sourceX = (tile - 1) % 40 * tileSize;
        const sourceY = Math.floor((tile - 1) / 40) * tileSize;

        const destX = (index % width) * tileSize - camera.x;
        const destY = Math.floor(index / width) * tileSize - camera.y;

        if (
          destX + tileSize > 0 &&
          destX < camera.width &&
          destY + tileSize > 0 &&
          destY < camera.height
        ) {
          ctx.drawImage(tilesetImage, sourceX, sourceY, tileSize, tileSize, destX, destY, tileSize, tileSize);
        }
      }
    });
  });
}


// Função para desenhar o personagem
function drawPlayer() {
  let frameX = player.frameX;
  let frameY = player.frameY;

  const drawX = player.x - camera.x;
  const drawY = player.y - camera.y;

  if (player.isAttacking) {
    frameX = player.attackFrameX;
    frameY = player.attackFrameY;
    ctx.drawImage(
      characterImage,
      frameX * player.width * 2, frameY * player.height,
      player.width * 2, player.height,
      drawX - player.width / 2, drawY,
      player.width * 2, player.height
    );
  } else {
    ctx.drawImage(
      characterImage,
      frameX * player.width, frameY * player.height,
      player.width, player.height,
      drawX, drawY,
      player.width, player.height
    );
  }
}

function drawEnemy() {
  const frameX = enemy.frameX;
  const frameY = enemy.frameY;

  const drawX = enemy.x - camera.x;
  const drawY = enemy.y - camera.y;

  ctx.drawImage(
    enemyImage,
    frameX * enemy.width, frameY * enemy.height,
    enemy.width, enemy.height,
    drawX, drawY,
    enemy.width, enemy.height
  );
}


// Loop principal do jogo
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  updateCamera(); // Atualiza a câmera
  drawMap(); // Desenha o mapa
  movePlayer(); // Movimenta o personagem
  updateAnimation(); // Atualiza a animação do personagem
  drawPlayer(); // Desenha o personagem
  moveEnemy(); // Atualiza o movimento do inimigo
  drawEnemy(); // Desenha o inimigo
  checkEnemyCollision(); // Verifica colisão com o inimigo
  drawLives(); // Desenha as vidas

  requestAnimationFrame(gameLoop); // Chama o loop novamente
}


// Iniciar o jogo
gameLoop();
