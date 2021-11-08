// VARIABLES
let game = document.querySelector("#game");
let scoreDisplay = document.querySelector("#score");
let leanne;
let sven;
let ctx = game.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;

game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

console.log(game);
console.log(scoreDisplay);
console.log(ctx);
