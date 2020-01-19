//create dynamically and append a canvas
let canvas = document.createElement('canvas');

canvas.id = "myCanvas";
canvas.width = "400";
canvas.height = "600";

let body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

let tetrisBoard = document.getElementById("myCanvas");

const game = new Game();

//Create and initialise game board
const col = 12;
const row = 28;

let board = new Array(row);

board = game.resetGameBoard(board, row, col);

let i = new Block("i", 0, "cyan", [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]]);
let j = new Block("j", 0, "blue", [[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]]);
let l = new Block("l", 0, "orange", [[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]]);
let o = new Block("o", 0, "yellow", [[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]);
let s = new Block("s", 0, "green", [[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]);
let t = new Block("t", 0, "purple", [[1,1,1,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]]);
let z = new Block("z", 0, "red", [[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]);

