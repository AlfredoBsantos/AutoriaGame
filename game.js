const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Carregar o mapa e tileset
const mapData = TileMaps['mapaPrincipal']; // Mapa carregado do arquivo
const tileSize = 16; // Tamanho do tile (16x16)

// Carregar as imagens
const tilesetImage = new Image();
tilesetImage.src = 'Overworld.png'; // O nome correto do tileset

const characterImage = new Image();
characterImage.src = 'charactertads.png'; // O nome do arquivo do personagem

// Ajustar o tamanho do canvas com base no mapa
const mapWidth = mapData ? mapData.width * tileSize : 0;
const mapHeight = mapData ? mapData.height * tileSize : 0;
canvas.width = mapWidth;  // Define a largura do canvas
canvas.height = mapHeight; // Define a altura do canvas

// Configuração do personagem
const player = {
  x: 100,
  y: 100,
  width: 16,  // Tamanho do personagem (16x16)
  height: 32, // Tamanho do personagem (32x32)
  frameX: 0, // Frame da animação (0 a 3 para cada direção)
  frameY: 0, // Linha da animação (0 para baixo, 1 para direita, 2 para cima, 3 para esquerda)
  attackFrameX: 0, // Frame da animação de ataque
  attackFrameY: 0, // Linha da animação de ataque
  speed: 2, // Velocidade do movimento (reduzida pela metade)
  direction: 'down', // Direção inicial
  isMoving: false, // Flag para verificar se o personagem está em movimento
  isAttacking: false, // Flag para verificar se o personagem está atacando
  attackDuration: 0, // Contador de duração do ataque
  animationSpeed: 100, // Atraso maior entre as atualizações da animação (em milissegundos)
  lastAnimationUpdate: 0, // Última atualização da animação (timestamp)
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
  return tile === 0; // Verifica se o tile é 1441, que é a colisão
}

// Função para atualizar a animação
function updateAnimation() {
  const currentTime = Date.now();
  if (currentTime - player.lastAnimationUpdate >= player.animationSpeed) {
    player.lastAnimationUpdate = currentTime;  // Atualizar o timestamp

    if (player.isAttacking) {
      // Animação de ataque (frames de ataque)
      player.attackFrameX = (player.attackFrameX + 1) % 4;  // Passa pelos 4 frames de ataque
      if (player.attackFrameX === 0) {
        player.isAttacking = false; // Finaliza a animação de ataque
      }
    } else if (player.isMoving) {
      // Animação de movimento (frames de andar)
      player.frameX = (player.frameX + 1) % 4;  // Passa pelos 4 frames de cada direção
    } else {
      // Se não estiver se movendo nem atacando, mantém o primeiro frame da direção
      player.frameX = 0;
    }
  }
}
function movePlayer() {
  player.isMoving = false;  // Inicializa a flag como falsa (parado)

  // Definir os limites do mapa para impedir que o jogador saia
  const maxX = mapWidth - player.width; // Limite de X
  const maxY = mapHeight - player.height; // Limite de Y

  // Movimentação para cima
  if (keys['ArrowUp'] && player.y > 0 && !player.isAttacking && !checkCollision(player.x, player.y - player.speed)) {
    player.y -= player.speed;
    player.frameY = 2; // Movimento para cima (linha 3 no sprite sheet)
    player.direction = 'up';
    player.isMoving = true; // O personagem está se movendo
  }
  // Movimentação para baixo
  if (keys['ArrowDown'] && player.y < maxY && !player.isAttacking && !checkCollision(player.x, player.y + player.height + player.speed)) {
    player.y += player.speed;
    player.frameY = 0; // Movimento para baixo (linha 1 no sprite sheet)
    player.direction = 'down';
    player.isMoving = true; // O personagem está se movendo
  }
  // Movimentação para a esquerda
  if (keys['ArrowLeft'] && player.x > 0 && !player.isAttacking && !checkCollision(player.x - player.speed, player.y)) {
    player.x -= player.speed;
    player.frameY = 3; // Movimento para a esquerda (linha 4 no sprite sheet)
    player.direction = 'left';
    player.isMoving = true; // O personagem está se movendo
  }
  // Movimentação para a direita
  if (keys['ArrowRight'] && player.x < maxX && !player.isAttacking && !checkCollision(player.x + player.width + player.speed, player.y)) {
    player.x += player.speed;
    player.frameY = 1; // Movimento para a direita (linha 2 no sprite sheet)
    player.direction = 'right';
    player.isMoving = true; // O personagem está se movendo
  }

  // Verificar se o jogador está atacando
  if (keys[' ']) { // Espaço para atacar
    if (!player.isAttacking) {
      player.isAttacking = true; // Ativar o ataque
      player.attackDuration = 0; // Reiniciar a duração do ataque
      // Definir a linha da animação de ataque com base na direção
      if (player.direction === 'down') player.attackFrameY = 4;
      if (player.direction === 'up') player.attackFrameY = 5;
      if (player.direction === 'right') player.attackFrameY = 6;
      if (player.direction === 'left') player.attackFrameY = 7;
    }
  }
}

// Desenhar o mapa
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
      if (tile !== 0) { // Ignorar tiles vazios
        const sourceX = (tile - 1) % 40 * tileSize;
        const sourceY = Math.floor((tile - 1) / 40) * tileSize;

        const destX = (index % width) * tileSize;
        const destY = Math.floor(index / width) * tileSize;

        ctx.drawImage(tilesetImage, sourceX, sourceY, tileSize, tileSize, destX, destY, tileSize, tileSize);
      }
    });
  });
}

// Desenhar o personagem com o recorte correto
function drawPlayer() {
  let frameX = player.frameX;
  let frameY = player.frameY;

  if (player.isAttacking) {
    // Desenhar a animação de ataque (frames mais largos)
    frameX = player.attackFrameX;
    frameY = player.attackFrameY;
    ctx.drawImage(
      characterImage,
      frameX * player.width * 2, frameY * player.height, // Cada frame de ataque tem o dobro da largura
      player.width * 2, player.height, // Tamanho do frame de ataque (dobro de largura)
      player.x - player.width / 2, player.y, // Posição no canvas
      player.width * 2, player.height
    );
  } else {
    // Desenhar a animação de movimento
    ctx.drawImage(
      characterImage,
      frameX * player.width, frameY * player.height, // Calculando o recorte correto com base nos frames
      player.width, player.height, // Tamanho do frame
      player.x, player.y, // Posição no canvas
      player.width, player.height
    );
  }
}

// Loop principal do jogo
function gameLoop() {
  // Limpar o canvas completamente
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar o mapa
  drawMap();

  // Mover o jogador
  movePlayer();

  // Atualizar a animação
  updateAnimation();

  // Desenhar o jogador (movimento ou ataque)
  drawPlayer();

  // Solicitar a próxima execução do loop
  requestAnimationFrame(gameLoop);
}

// Iniciar o jogo
gameLoop();
