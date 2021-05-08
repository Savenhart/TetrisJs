/*jshint esversion: 6 */
export class Game {
  resetGameBoard(arr, row, col) {
    for (let x = 0; x < row; x++) {
      arr[x] = new Array(1);
      for (let y = 0; y < col; y++) {
        arr[x][y] = 0;
      }
    }
    return arr;
  }

  //Verify if the cell under the block is already occupied or not
  occupied(board, block, boardX) {
      for (let x = block.length-1; x > 0; x--) {
        for (let y = 0; y < block[x].length; y++) {
          if (block[x][y] == 1) {
            if(boardX != 21){
              if (board[boardX + 1][0] != 0) {
              return true;
              }
            }
            if (boardX + 1 == 22 || board[boardX + x + 1] == undefined) {
              return true;
            }
          }
        }
      }
    return false;
  }

  generateNextBlock(blockList) {
    let rand = (Math.random() * (blockList.length - 1)).toPrecision(1);
    if (rand < 1) {
      rand = 0;
    }

    return blockList[rand];
  }

  drawPiece(canvas, block, abs, ord, height, width) {
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");

      let initialAbs = abs;

      for (let y = 0; y < block.shape.length; y++) {
        for (let z = 0; z < block.shape.length; z++) {
          if (block.shape[0][y][z] == 1) {
            ctx.fillStyle = block.color;
            ctx.fillRect(abs, ord, height, width);
          }
          abs += height;
        }
        abs = initialAbs;
        ord += width;
      }
    }
  }
}
