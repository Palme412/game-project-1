var canvas = document.querySelector("#game");
var ctx = canvas.getContext("2d");
let img = new Image();
img.src = "CharacterFull.png";
img.onload = function() {
    window.requestAnimationFrame(gameLoop)
};
// ======== VARIABLES ========//
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
const frameLimit = 12;

const facingDown = 2;
const facingUp = 0;
const facingLeft = 3;
const facingRight = 1;
let currentDirection = facingDown;
let keyPresses = {};
const movement_Speed = 1;
let positionX = 0;
let positionY = 0;

ctx.moveTo(90, 540);
ctx.lineTo(160 , 540);
// ctx ( x , y )
ctx.moveTo(180, 480);
ctx.lineTo(250, 480);

ctx.moveTo(40, 440);
ctx.lineTo(110, 440);

ctx.moveTo(170, 370);
ctx.lineTo(450, 370);

ctx.moveTo(220, 330);
ctx.lineTo(290, 330);

ctx.moveTo(420, 310);
ctx.lineTo(490, 310);

ctx.moveTo(380, 250);
ctx.lineTo(310, 250);

ctx.moveTo(270, 210);
ctx.lineTo(200, 210);

ctx.moveTo(160, 170);
ctx.lineTo(90, 170);

ctx.moveTo(200, 130);
ctx.lineTo(700, 130);

ctx.moveTo(720, 90);
ctx.lineTo(740, 90);

ctx.moveTo(780, 50);
ctx.lineTo(820, 50);

ctx.moveTo(710, 160);
ctx.lineTo(780, 160);

ctx.moveTo(850, 270);
ctx.lineTo(940, 270);

ctx.moveTo(700, 320);
ctx.lineTo(770, 320);

ctx.moveTo(620, 430);
ctx.lineTo(690, 430);

ctx.moveTo(730, 500);
ctx.lineTo(800, 500);

ctx.moveTo(820, 550);
ctx.lineTo(890, 550);

ctx.stroke();

// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
}

  window.addEventListener('keydown', keyDownListener);
  function keyDownListener(event) {
      keyPresses[event.key] = true;
  }
  
  window.addEventListener('keyup', keyUpListener);
  function keyUpListener(event) {
      keyPresses[event.key] = false;
  }
  
  
  
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;

    if (keyPresses.w) {
      positionY -= movement_Speed;
      currentDirection = facingUp;
      hasMoved = true;
    } else if (keyPresses.s) {
      positionY += movement_Speed;
      currentDirection = facingDown;
      hasMoved = true;
    }
    if (keyPresses.a) {
      positionX -= movement_Speed;
      currentDirection = facingLeft;
      hasMoved = true;
    } else if (keyPresses.d) {
      positionX += movement_Speed;
      currentDirection = facingRight;
      hasMoved = true;
    }
    if (hasMoved) {
        frameCount++;
        if (frameCount >= frameLimit) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
        }
    }

    if (!hasMoved) {
        currentLoopIndex = 0;
    }

    drawFrame(cycleLoop[currentLoopIndex],
        currentDirection, positionX, positionY);

    window.requestAnimationFrame(gameLoop);
  }

  function moveCharacter(deltaX, deltaY, direction) {
      if (positionX + deltaX > 0 && positionX + scaledWidth + deltaX < canvas.width) {
          positionX += deltaX;
      }
      if (positionY + deltaY > 0 && positionY + scaledHeight + deltaY < canvas.height) {
          positionY += deltaY;
      }
      currentDirection = direction;
  }