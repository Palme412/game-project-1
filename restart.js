var canvas = document.querySelector("#game");
var ctx = canvas.getContext("2d");
let img = new Image();
img.src = "CharacterFull.png";
// img.onload = function () {
    // window.requestAnimationFrame(gameLoop)
// };
// ======== VARIABLES ========//
width_canvas = document.querySelector("width");
height_canvas = document.querySelector("height");
const scale = 2; //player
const width = 16; //player
const height = 18; //player
const scaledWidth = scale * width; 
const scaledHeight = scale * height;
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
const frameLimit = 12;
const facingDown = 2; //player
const facingUp = 0;
const facingLeft = 3;
const facingRight = 1; //player
let currentDirection = facingDown; //player
let keyPresses = {};
const movement_Speed = 2;
let positionX = 0;
let positionY = 0;

// ========== GAME PROCESSES/CHARACTER MOVEMENT ========//
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
        moveCharacter(0, -movement_Speed, facingUp);
        hasMoved = true;
    } else if (keyPresses.s) {
        moveCharacter(0, movement_Speed, facingDown)
        hasMoved = true;
    }
    if (keyPresses.a) {
        moveCharacter(-movement_Speed, 0, facingLeft);
        hasMoved = true;
    } else if (keyPresses.d) {
        moveCharacter(movement_Speed, 0, facingRight);
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

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
}

// ======= CANVAS OBJECTS======//
// ctx.beginPath();
// ========== Y Axis 600 ==== X Axis 1000 ======= X left-right               // Y top-bottom
    ctx.fillStyle = "brown";
    ctx.fillRect(90, 510, 70, 5);
    ctx.fillRect(190, 460, 70, 5);
    ctx.fillRect(290, 410, 70, 5);
    ctx.fillRect(10, 340, 240, 5);
    ctx.fillRect(20, 270, 30, 5);
    ctx.fillRect(80, 210, 70, 5);
    ctx.fillRect(30, 150, 20, 5);
    ctx.fillRect(90, 100, 20, 5);
    ctx.fillRect(30, 50, 20, 5);
    ctx.fillRect(290, 270, 70, 5);
    ctx.fillRect(370, 200, 70, 5);
    ctx.fillRect(270, 150, 70, 5);
    ctx.fillRect(370, 90, 350, 5);
    ctx.fillRect(790, 180, 70, 5);
    ctx.fillRect(1000, 80, -50, 5);
    ctx.fillRect(880, 120, 10, 5);
    ctx.fillRect(1000, 300, -400, 5);
    ctx.fillRect(570, 410, 70, 5);
    ctx.fillRect(700, 480, 70, 5);
    ctx.fillRect(810, 420, 20, 5);
    ctx.fillRect(1000, 370, -100, 5);
    ctx.fillRect(600, 550, 70, 5);
    ctx.fillRect(400, 600, 5, -100);
    ctx.fillRect(500, 600, 5, -100);
    ctx.fillRect(400, 570, 20, 5);
    ctx.fillRect(500, 540, -20, 5);
    ctx.fillRect(400, 500, 40, 5);


ctx.clearRect(0, 0, width, height);
ctx.beginPath();


//======= COLLISION LOGIC======= //

