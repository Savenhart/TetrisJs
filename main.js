//TODO Need to get block position and add it to board when it touch either the end of the board or an already placed block
//TODO Need to add movement of the block with keyboard, Add point, Game over, line clearing, show next block coming

/*jshint esversion: 6 */
//create dynamically and append a canvas
import { Game } from "./Game.js";
import { Block } from "./Block.js";

let canvas = document.createElement("canvas");

canvas.id = "myCanvas";
canvas.width = "400";
canvas.height = "800";

let ctx = canvas.getContext("2d");

let exitButton = document.createElement("button");
let exitB = false;

exitButton.id = "exit";
exitButton.textContent = "exit";

let startButton = document.createElement("button");
let startB = false;

startButton.id = "start";
startButton.textContent = "start";
startButton.addEventListener("click", () => (startB = true));
exitButton.addEventListener("click", () => (startB = false));

let body = document.querySelector("body");
body.appendChild(canvas);
body.appendChild(exitButton);
body.appendChild(startButton);

let tetrisBoard = document.querySelector("#myCanvas");

const game = new Game();

//Create and initialise game board
const col = 12;
const row = 22;

let board = [];

board = game.resetGameBoard(board, row, col);

let i = new Block("i", 0, "cyan", [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
]);
let j = new Block("j", 0, "blue", [
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]);
let l = new Block("l", 0, "orange", [
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]);
let o = new Block("o", 0, "yellow", [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]);
let s = new Block("s", 0, "green", [
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]);
let t = new Block("t", 0, "purple", [
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]);
let z = new Block("z", 0, "red", [
  [0, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]);

const blockList = new Array(i, j, l, o, s, t, z);
let comingBlock = null;
let bX = 0;
let move = true;

let state = {
  /* x: (width / 2),
     y: (height / 2),*/
};

function update(progress, boardX) {
  /*state.x += progress
    if (state.x > width) {
        state.x -= width;
    }*/
   // console.log(boardX);
    comingBlock.y = bX;
    if(game.occupied(board, comingBlock.shape[0], boardX)){
      //console.log(comingBlock);
      move = false;
    }
   // console.log(move);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.drawPiece(
    canvas,
    comingBlock,
    0,
    bX *canvas.height / row,
    canvas.width / col,
    canvas.height / row
  );

  if (bX *canvas.height / row < canvas.height && move) {
    bX++;
  } else {
    bX = 0;
    comingBlock.isActive = false;
  }

  board.forEach(blocks => {});
}

let time = 0;

function loop(timestamp) {
  if (startB === true) {
    //console.log(timestamp);
    if (time % 10 == 0) {
      let progress = timestamp - lastRender;

      if (comingBlock === null || comingBlock.isActive === false) {
        comingBlock = game.generateNextBlock(blockList);
        comingBlock.isActive = true;
      }

      update(progress, bX);
      draw();
      //console.log(comingBlock.y);

      lastRender = timestamp;
      time = 0;
    }
    time++;
  }
  window.requestAnimationFrame(loop);
}

let lastRender = 0;
window.requestAnimationFrame(loop);
