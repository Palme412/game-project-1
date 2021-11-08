const game = document.querySelector("#game")
game.width = 1200;
game.height = 600;
let ctx = game.getContext("2d");




ctx.fillStyle = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

// =======CANVAS RENDERING ======== //
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

//======== ENTITIES ======//

const Player = {
    x: 0,
    y: 0,
    width: 32,
    height: 48,
    moving: false
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

var player = {
    x: 200,
    y: 200,
    x_v: 0,
    y_v: 0,
    jump: true,
    height: 20,
    width: 20
};
// // The number of platforms
// var num = 2;
// // The platforms
// var platforms = [];
// Function to render the canvas
// function rendercanvas() {
//     ctx.fillStyle = "Yellow";
//     ctx.fillRect(0, 0, 800, 500);
// }

// function createplat() {
//     for (i = 0; i < num; i++) {
//         platforms.push(
//             {
//                 x: 200 * i,
//                 y: 200 + (30 * i),
//                 width: 110,
//                 height: 15
//             }
//         );
//     }
// }

// function renderplat() {
    // ctx.fillStyle = "#45597E";
    // ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    // ctx.fillRect(platforms[1].x, platforms[1].y, platforms[1].width, platforms[1].height);




