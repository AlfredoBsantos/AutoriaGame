const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Carregar o mapa e tileset
const mapData = TileMaps['mapaPrincipal']; // Mapa carregado do arquivo
const tileSize = 16; // Tamanho do tile (16x16)

// Carregar as imagens
const tilesetImage = new Image();
tilesetImage.src = './img/Overworld.png'; // O nome correto do tileset

// Carregar a imagem de game over
const gameOverImage = new Image();
gameOverImage.src = './img/gameover.png'; // Caminho para a imagem de game over

const characterImage = new Image();
characterImage.src = './img/character.png'; // O nome do arquivo do personagem

const heartImage = new Image();
heartImage.src = './img/Heart.png'; // Caminho para a imagem do coração

// Carregar a imagem do inimigo
const enemyImage = new Image();
enemyImage.src = './img/log.png'; // Caminho para a imagem do inimigo (log.png)

const explosionSprite = new Image();
explosionSprite.src = './img/explosion.png';

// Carregar a imagem do NPC
const npcImage = new Image()
npcImage.src = './img/NPC_test.png';

// Ajustar o tamanho do canvas com base no mapa
const mapWidth = mapData ? mapData.width * tileSize : 0;
const mapHeight = mapData ? mapData.height * tileSize : 0;

// Configura o evento para iniciar o jogo
startButton.addEventListener("click", () => {
  // Esconde a tela inicial
  startScreen.style.display = "none";

  // Exibe o canvas do jogo
  gameCanvas.style.display = "block";

  // Inicialize o jogo
  startGame();
});

function startGame() {
  // Aqui entra a lógica principal do seu jogo
  const ctx = gameCanvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Exemplo de texto no canvas
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("O jogo começou!", 150, 175);

  gameLoop();
}


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
  invulnerable: false, // Jogador começa vulnerável
  invulnerabilityDuration: 3000, // Duração de invulnerabilidade (3 segundo)
  lastDamageTime: 0, // Momento do último dano
};

// Definir as propriedades do inimigo
const enemy = {
        x: 200,
        y: 400,
        width: 32,
        height: 32,
        frameX: 0,
        frameY: 0,
        speed: 0.5,
        isMoving: true,
        animationSpeed: 200,
        lastAnimationUpdate: 0,
        life: 100,
        isAlive: true,
        isExploding: false,
        explosionStartTime: null,
};

const enemies = enemy;

// Capturar as teclas pressionadas
const keys = {};

window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

let isGameOver = false;

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

// função para atualizar estado do jogador 
function updatePlayerState() {
  const currentTime = Date.now();

  if (player.invulnerable && currentTime - player.lastDamageTime > player.invulnerabilityDuration) {
    player.invulnerable = false;
  }
}

// Funções de vida
function takeDamage(amount) {
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

function heal(amount) {
  player.lives = Math.min(player.lives + amount, player.maxLives);
}

function gameOver() {
  console.log("Game Over!");
  isGameOver = true; // Define que o jogo terminou
}

// Função para desenhar a imagem de game over
function drawGameOverImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  ctx.drawImage(gameOverImage, 0, 0, canvas.width, canvas.height); // Desenha a imagem de game over em toda a tela
}

function resetGame() {
  isGameOver = false; // Redefine o estado de Game Over
  player.lives = 3; // Reinicia as vidas do jogador
  player.x = 100; // Reinicia a posição do jogador
  player.y = 100;

  // Reinicie o NPC
  npc.x = 350; // Reinicia a posição do NPC
  npc.y = 37;
  npc.visible = false; // Torna o NPC invisível
  npc.dialogueIndex = 0; // Reinicia o índice do diálogo
  npc.dialogueCompleted = false; // Marca o diálogo como não concluído

  // Reinicie a posição dos inimigos e outros elementos do jogo
  enemy.x = 700;
  enemy.y = 150;

  // Reinicie o estado da câmera ou outras variáveis globais, se necessário
  camera.x = 0;
  camera.y = 0;

  // Reinicie o loop do jogo
  gameLoop();
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

// Ajustar função de movimentação do inimigo
function moveEnemy() {
  if (!npc[0].dialogueCompleted && enemy.isAlive) return; // Certifique-se de que o diálogo do NPC foi concluído

  const dx = player.x - enemy.x;
  const dy = player.y - enemy.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 30) { // O inimigo se move até ficar a 50px do jogador
    const directionX = dx / distance;
    const directionY = dy / distance;

    enemy.x += directionX * enemy.speed;
    enemy.y += directionY * enemy.speed;

    // Atualizar animação do inimigo
    const currentTime = Date.now();
    if (currentTime - enemy.lastAnimationUpdate >= enemy.animationSpeed) {
      enemy.lastAnimationUpdate = currentTime;
      enemy.frameX = (enemy.frameX + 1) % 3; // Alterna quadros
    }
  } else{
    // O inimigo ataca se estiver dentro de 50px
    enemyAttack();
  }
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function isWithinAttackRange(player, enemy, range) {
    const distance = calculateDistance(player.x + player.width / 2, player.y + player.height / 2,
                                       enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
    return distance <= range;
}

function attackEnemy(player, enemy) {
    const attackRange = 200;
    const distance = calculateDistance(
        player.x + player.width / 2,
        player.y + player.height / 2,
        enemy.x + enemy.width / 2,
        enemy.y + enemy.height / 2
    );

    if (distance <= attackRange && enemy.isAlive) {
        enemy.life -= 50;
        console.log(`Inimigo atingido! Vida restante: ${enemy.life}`);

        if (enemy.life <= 0) {
            enemy.isAlive = false;
            enemy.isExploding = true;
            enemy.explosionStartTime = performance.now(); // Marca o início da explosão
            console.log('Inimigo derrotado! Iniciando explosão.');
        }
    }
}

function onPlayerAttack(player, enemy) {
    if (player.isAttacking) {
        attackEnemy(player, enemy);
    }
}


function drawEnemy() {
  if (!npc.dialogueCompleted && enemy.isAlive) {
    // Desenha o inimigo normalmente
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
  } else if (enemy.isExploding) {
    // Tempo de explosão (em milissegundos)
    const explosionDuration = 1000;  // Duração total da animação de explosão em milissegundos
    const frameDuration = explosionDuration / 12; // Tempo por frame (12 frames no total)
    const elapsedTime = performance.now() - enemy.explosionStartTime;
    const frameIndex = Math.floor(elapsedTime / frameDuration); // Determina o frame atual com base no tempo

    if (elapsedTime < explosionDuration) {
      const columns = 4; // 4 colunas na sprite sheet
      const rows = 3;    // 3 linhas na sprite sheet
      const frameX = frameIndex % columns;   // Determina a posição X do frame
      const frameY = Math.floor(frameIndex / columns); // Determina a posição Y do frame

      // Cada frame é 180x180 px
      const frameWidth = 180;
      const frameHeight = 180;

      // Desenha a explosão
      ctx.drawImage(
        explosionSprite, 
        frameX * frameWidth, frameY * frameHeight, // Posição do frame na sprite sheet
        frameWidth, frameHeight,                  // Tamanho do frame
        enemy.x - camera.x, enemy.y - camera.y,    // Posição do inimigo na tela
        enemy.width, enemy.height                 // Tamanho do desenho no canvas
      );
    } else {
      // Finaliza a explosão
      enemy.isExploding = false;
      console.log('Explosão concluída.');
    }
  }
}


function updateEnemies(enemies) {
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];

        // Remove inimigos cuja explosão foi concluída
        if (!enemy.isAlive && !enemy.isExploding) {
            enemies.splice(i, 1); // Remove o inimigo da lista
            console.log('Inimigo removido do jogo.');
        }
    }
}



// Função de ataque do inimigo
function enemyAttack() {
  const currentTime = Date.now();
  if (currentTime - enemy.lastAnimationUpdate >= 1000 && enemy.isAlive) { // Intervalo de ataque a cada 1s
    takeDamage(1); // Jogador perde 1 de vida (ajuste conforme necessário)
    console.log("O inimigo atacou!");
    enemy.lastAnimationUpdate = currentTime;
  }
}

// Atualizar detecção de ataque do jogador
function checkPlayerAttack() {
  if (player.isAttacking) {
    const playerCenterX = player.x + player.width / 2;
    const playerCenterY = player.y + player.height / 2;

    const enemyCenterX = enemy.x + enemy.width / 2;
    const enemyCenterY = enemy.y + enemy.height / 2;

    const distance = Math.sqrt(
      Math.pow(playerCenterX - enemyCenterX, 2) +
      Math.pow(playerCenterY - enemyCenterY, 2)
    );

    if (distance < 200) { // Alcance do ataque
      enemy.vidas -= 50; // Reduz vida do inimigo
      console.log("Ataque bem-sucedido no inimigo!");
      if (enemy.vidas <= 0) {
        console.log("Inimigo derrotado!");
      }
    }
  }
}

// Função para verificar diálogos completos
function allDialoguesCompleted() {
  return npc.every((n) => n.dialogueCompleted);
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

 
  if (playerRight > enemyLeft && playerLeft < enemyRight && playerBottom > enemyTop && playerTop < enemyBottom && enemy.isAlive) {
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



const npc = [
  {
    x: 350,
    y: 37,
    width: 16,
    height: 32,
    frameX: 0,
    frameY: 0,
    speed: 0.5,
    lastAnimationUpdate: 0,
    animationSpeed: 200,
    dialogue: [
      { speaker: 'npc', text: "Olá, viajante! Você está perdido?" },
      { speaker: 'player', text: "Não estou perdido, só explorando o local." },
      { speaker: 'npc', text: "Bem, cuidado! Há perigos à frente." },
      { speaker: 'player', text: "Obrigado pelo aviso! Vou me preparar." },
    ],
    dialogueIndex: 0,
    dialogueCompleted: false,
    visible: false,
    activationArea: { x: 350, y: 40, width: 100, height: 100 },
  },
  {
    x: 113,
    y: 242,
    width: 16,
    height: 32,
    frameX: 0,
    frameY: 0,
    speed: 0.5,
    lastAnimationUpdate: 0,
    animationSpeed: 200,
    dialogue: [
      { speaker: 'npc', text: "O sol está forte hoje, não acha?" },
      { speaker: 'player', text: "Sim, vou buscar sombra logo." },
      { speaker: 'npc', text: "Boa ideia, tome cuidado com os inimigos." },
    ],
    dialogueIndex: 0,
    dialogueCompleted: false,
    visible: false,
    activationArea: { x: 200, y: 300, width: 100, height: 100 },
  },
  {
    x: 738,
    y: 325,
    width: 16,
    height: 32,
    frameX: 0,
    frameY: 0,
    speed: 0.5,
    lastAnimationUpdate: 0,
    animationSpeed: 200,
    dialogue: [
      { speaker: 'npc', text: "Você já ouviu as histórias deste lugar?" },
      { speaker: 'player', text: "Ainda não, o que há para saber?" },
      { speaker: 'npc', text: "Dizem que há um tesouro escondido aqui perto." },
      { speaker: 'player', text: "Interessante! Vou procurar por ele." },
    ],
    dialogueIndex: 0,
    dialogueCompleted: false,
    visible: false,
    activationArea: { x: 500, y: 100, width: 100, height: 100 },
  },
];

function moveNPC() {
  const currentTime = Date.now();

  // Movimento simples: Alterna direção a cada 2 segundos
  // if (currentTime % 2000 < 1000) {
  //   npc.x += npc.speed; // Move para baixo
  //   npc.frameX = 0; // Quadro para direção para baixo
  // } else {
  //   npc.x -= npc.speed; // Move para cima
  //   npc.frameX = 2; // Quadro para direção para cima
  // }

  // // Atualizar animação
  if (currentTime - npc.lastAnimationUpdate >= npc.animationSpeed) {
    npc.lastAnimationUpdate = currentTime;
    npc.frameX = (npc.frameX + 1) % 4; // Alterna entre os quadros
  }
}

// Controle da interação com o diálogo
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && npc.isVisible && !npc.dialogueCompleted) {
    npc.dialogueIndex++;

    // Verifica se o diálogo foi concluído
    if (npc.dialogueIndex >= dialogue.length) {
      npc.dialogueCompleted = true; // Marcar como concluído
      npc.isVisible = false; // NPC desaparece
    }
  }
});

function updateNPC() {
  const currentTime = Date.now();

  npc.forEach((n) => {
    // Atualizar animação
    if (currentTime - n.lastAnimationUpdate >= n.animationSpeed) {
      n.lastAnimationUpdate = currentTime;
      n.frameX = (n.frameX + 1) % 4; // Alterna entre os quadros
    }

    // Verificar se o jogador está na área de ativação (circular)
    const dx = player.x - n.x;
    const dy = player.y - n.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= 50) { // 50 é o raio da área de ativação
      n.visible = true;
    } else {
      n.visible = false;
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    npc.forEach((n) => {
      if (n.visible && !n.dialogueCompleted) {
        const dialogue = n.dialogue[n.dialogueIndex];
        console.log(`${dialogue.speaker}: ${dialogue.text}`);
        n.dialogueIndex++;

        if (n.dialogueIndex >= n.dialogue.length) {
          n.dialogueCompleted = true; // Marca como concluído
        }
      }
    });
  }
});


function drawNPC() {
  npc.forEach((n) => {
    ctx.drawImage(
      npcImage,
      n.frameX * n.width,
      n.frameY * n.height,
      n.width,
      n.height,
      n.x - camera.x,
      n.y - camera.y,
      n.width,
      n.height
    );

    // Desenhar área de ativação (opcional, para debug)
    if (n.visible) {
      ctx.beginPath();
      ctx.arc(n.x - camera.x, n.y - camera.y, 50, 0, Math.PI * 2); // Raio 50
      ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
      ctx.stroke();
    }
  });
}

function handleNPCDialogue() {
  npc.forEach((npc) => {
    if (npc.visible && !npc.dialogueCompleted) {
      const dialogueBoxWidth = canvas.width * 0.8;
      const dialogueBoxHeight = 50;
      const dialogueBoxX = (canvas.width - dialogueBoxWidth) / 2;
      const dialogueBoxY = canvas.height - dialogueBoxHeight - 10;

      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(dialogueBoxX, dialogueBoxY, dialogueBoxWidth, dialogueBoxHeight);

      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.textAlign = "center";

      const currentDialogue = npc.dialogue[npc.dialogueIndex];
      const text = currentDialogue.text;
      ctx.fillText(text, dialogueBoxX + dialogueBoxWidth / 2, dialogueBoxY + dialogueBoxHeight / 2 + 5);
    }
  });
}

function checkNPCActivation() {
  npc.forEach((npc) => {
    if (!npc.visible && !npc.dialogueCompleted) {
      const playerInArea =
        player.x + player.width > npc.activationArea.x &&
        player.x < npc.activationArea.x + npc.activationArea.width &&
        player.y + player.height > npc.activationArea.y &&
        player.y < npc.activationArea.y + npc.activationArea.height;

      if (playerInArea) {
        npc.visible = true;
      }
    }
  });
}

function updateNPCAnimation(npc) {
  const currentTime = Date.now();
  if (currentTime - npc.lastAnimationUpdate >= 200) { // Velocidade da animação (200ms por frame)
    npc.lastAnimationUpdate = currentTime;
    npc.frameX = (npc.frameX + 1) % 4; // Cicla pelos frames horizontais (ajuste se tiver mais ou menos frames)
  }
}

function updateAllNPCs() {
  npc.forEach(updateNPCAnimation);
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    npc.forEach((npc) => {
      if (npc.visible && !npc.dialogueCompleted) {
        npc.dialogueIndex++;

        if (npc.dialogueIndex >= npc.dialogue.length) {
          npc.dialogueCompleted = true;
          npc.visible = false;
        }
      }
    });
  }
});

// Diálogo do NPC e do personagem
const dialogue = [
  { speaker: 'npc', text: "Olá, viajante! Você está perdido?" },
  { speaker: 'player', text: "Não estou perdido, só explorando o local." },
  { speaker: 'npc', text: "Bem, cuidado! Há perigos à frente." },
  { speaker: 'player', text: "Obrigado pelo aviso! Vou me preparar." },
];

npc.dialogueIndex = 0; // Índice para controlar o diálogo
npc.dialogueCompleted = false; // Controle de diálogo finalizado

window.addEventListener('keydown', (e) => {
  if ((e.key === 'r' || e.key === 'R') && isGameOver) {
    resetGame(); // Chama a função para reiniciar o jogo
  }
});

// Musica 

const musicaFundo = new Audio('musicas/musica1.mp3'); // bota a tua msc aq
musicaFundo.loop = true;
musicaFundo.volume = 1;

function tocarMusicaFundo() {
    musicaFundo.play().catch((error) => {
        console.error("Erro ao tentar tocar a música:", error);
    });
}

document.body.addEventListener('click', () => {
    tocarMusicaFundo();
});

let lastFrameTime = 0; // Armazena o tempo do último frame
const targetFPS = 75; // Define o FPS alvo
const frameDuration = 1000 / targetFPS; // Duração de cada frame em milissegundos

function gameLoop(currentTime) {
  // Calcula o tempo desde o último frame
  const deltaTime = currentTime - lastFrameTime;

  // Se ainda não passou tempo suficiente, espera
  if (deltaTime < frameDuration) {
    requestAnimationFrame(gameLoop);
    return;
  }

  lastFrameTime = currentTime;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  if (isGameOver) {
    // Exibe a tela de Game Over
    drawGameOverImage();
    return; // Interrompe o loop enquanto está no estado de "Game Over"
  }

  // Atualizações normais do jogo
  updateCamera(deltaTime); // Atualiza a câmera
  drawMap(); // Desenha o mapa
  movePlayer(deltaTime); // Movimenta o jogador proporcional ao tempo
  updateAnimation(deltaTime); // Atualiza a animação do jogador proporcional ao tempo
  drawPlayer(); // Desenha o jogador

  checkNPCActivation(); // Ativa o NPC se o jogador estiver na área
  handleNPCDialogue(); // Gerencia o diálogo com o NPC
  drawNPC(); // Desenha o NPC se estiver visível
  moveEnemy(deltaTime); // Movimenta o inimigo proporcional ao tempo
  drawEnemy(); // Desenha o inimigo (se permitido)
    updateEnemies(enemies);  // Atualiza a lista de inimigos

    

  updatePlayerState(); // Atualiza o estado do jogador (invulnerabilidade)
  checkEnemyCollision(); // Verifica colisão com o inimigo (se permitido)
  drawLives(); // Desenha as vidas
  updateNPC(deltaTime); // Atualiza NPC proporcional ao tempo
  updateAllNPCs(deltaTime); // Atualiza a animação dos NPCs proporcional ao tempo
  drawNPC(); // Desenha NPC

     onPlayerAttack(player, enemy);

    // Atualizações no jogo...
    if (!enemy.isAlive) {
        // Lógica para remover o inimigo ou exibir sua morte
    }

  requestAnimationFrame(gameLoop); // Chama o loop novamente
}

// Listener para o botão "Começar Jogo"
startButton.addEventListener("click", startGame);
// Iniciar o jogo
gameLoop();
