class Game {
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
  occupied(board, block) {
    for (let x = 0; x < block.length; x++) {
      for (let y = 0; y < block[x].length; y++) {
        if (block[x][y] == 1) {
          if ((board[block.x - 1][y] = !0)) {
            return true;
          }
          //in case we get at the bottom of the board
          else if (board[block.x - 1] == -1) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }

  generateNextBlock(blockList) {
    let rand = (Math.random() * (blockList.length - 1)).toPrecision(1);
    if (rand < 1) {
      rand = 0;
    }

    return blockList[rand];
  }

  drawPieceOnBoard(canvas, block, abs, ord, height, width) {
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");

      let initialAbs = abs;

      for (let y = 0; y < block.shape.length; y++) {
        for (let z = 0; z < block.shape.length; z++) {
          if (block.shape[0][y][z] == 1) {
			ctx.fillStyle = block.color;
			console.log(height);
			
            ctx.fillRect(abs, ord, height, width);
          }
          abs += 32;
        }
        abs = initialAbs;
        ord += 32;
      }
    }
  }
}
