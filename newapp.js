const game = document.querySelector("#game")
game.width = 1200;
game.height = 600;
let ctx = game.getContext("2d");




// ctx.fillStyle = "white";
// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;

// =======CANVAS RENDERING ======== //
// game.setAttribute("height", getComputedStyle(game)["height"]);
// game.setAttribute("width", getComputedStyle(game)["width"]);

//======== ENTITIES ======//

const Player = {
    x: 0,
    y: 0,
    width: 32,
    height: 48,
    moving: true
};

const playerSprite = new Image()
playerSprite.src = "kannazukinomiko_chikane.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function animate() {
ctx.clearRect(0,0,game.width, game.height);
drawSprite(playerSprite, 0, 0, Player.width, Player.height, 
200, 200, Player.width, Player.height);
requestAnimationFrame(animate);
}
animate();