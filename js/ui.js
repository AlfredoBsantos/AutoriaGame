// ui.js

// Função para desenhar o mapa
export function drawMap(ctx, mapData, camera, tileSize, tilesetImage) {
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
export function drawPlayer(ctx, player, camera, characterImage) {
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

// Função para desenhar os corações de vida
export function drawLives(ctx, player, heartImage) {
  const heartSize = 20;
  const startX = 10;
  const startY = 10;
  const spacing = 5;

  for (let i = 0; i < player.lives; i++) {
    const x = startX + (heartSize + spacing) * i;
    ctx.drawImage(heartImage, x, startY, heartSize, heartSize);
  }
}

// Função para desenhar o inimigo
export function drawEnemy(ctx, enemy, camera, enemyImage) {
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

// Função para desenhar o NPC
export function drawNPC(ctx, npc, camera, npcImage) {
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
