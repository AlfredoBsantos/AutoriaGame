const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const spriteSheet = new Image();
spriteSheet.src = 'img/character.png'; // Caminho da imagem dos sprites

const SPRITE_WIDTH = 16;  // Largura de um frame
const SPRITE_HEIGHT = 32; // Altura de um frame
const TICKS_PER_FRAME = 10; // Velocidade da animação
let frameIndex = 0;       // Índice do frame atual
let tickCount = 0;        // Contador de ticks

let x = 100; // Posição inicial X do personagem
let y = 100; // Posição inicial Y do personagem

const keys = { // Objeto para armazenar o estado das teclas
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

let currentDirection = 0; // Direção atual (0: baixo, 1: esquerda, 2: direita, 3: cima)

// Adiciona event listeners para as teclas
window.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
});

// Função para desenhar um frame específico
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.drawImage(
        spriteSheet,
        frameX * SPRITE_WIDTH,
        frameY * SPRITE_HEIGHT,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        canvasX,
        canvasY,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
}

// Função de animação
function animate() {
    tickCount++;

    // Atualiza a posição do personagem
    if (keys.ArrowUp) {
        y -= 2;
        currentDirection = 3;
    }
    if (keys.ArrowDown) {
        y += 2;
        currentDirection = 0;
    }
    if (keys.ArrowLeft) {
        x -= 2;
        currentDirection = 1;
    }
    if (keys.ArrowRight) {
        x += 2;
        currentDirection = 2;
    }

    // Anima apenas se houver movimento
    if (keys.ArrowUp || keys.ArrowDown || keys.ArrowLeft || keys.ArrowRight) {
        if (tickCount > TICKS_PER_FRAME) {
            tickCount = 0;
            frameIndex++;
            if (frameIndex >= 4) { // Supondo que a animação tenha 4 frames por direção
                frameIndex = 0;
            }
        }
    } else {
        frameIndex = 0; // Reseta a animação quando parado
    }

    drawFrame(frameIndex, currentDirection, x, y); // Desenha o frame atual na nova posição
    requestAnimationFrame(animate); // Chama a função animate novamente
}

// Quando a imagem dos sprites estiver carregada, inicia a animação
spriteSheet.onload = function() {
    animate();
};
