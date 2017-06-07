/**
 * Created by Yuanfei on 2017/6/7.

 According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

 Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

 Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 Any live cell with two or three live neighbors lives on to the next generation.
 Any live cell with more than three live neighbors dies, as if by over-population..
 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 Write a function to compute the next state (after one update) of the board given its current state.

 Follow up:
 Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
 In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

 */



/**
 * 用2位2进制表示状态, 左边1位是变换后的状态，右边是初始状态，左边默认值都是0
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var rowLength = board.length;
    var colLength = board[0].length;
    for (var row = 0; row<rowLength; row++) {
        for (var col = 0; col<colLength; col++) {
            var liveCnt = 0;
            if (row - 1 >= 0) {
                if (col - 1 >= 0 && isLive(board[row - 1][col - 1])) liveCnt++;
                if (isLive(board[row - 1][col])) liveCnt++;
                if (col + 1 < colLength && isLive(board[row - 1][col + 1])) liveCnt++;
            }
            if (col - 1 >= 0 && isLive(board[row][col - 1])) liveCnt++;
            if (col + 1 < colLength && isLive(board[row][col + 1])) liveCnt++;
            if (row + 1 < rowLength) {
                if (col - 1 >= 0 && isLive(board[row + 1][col - 1])) liveCnt++;
                if (isLive(board[row + 1][col])) liveCnt++;
                if (col + 1 < colLength && isLive(board[row + 1][col + 1])) liveCnt++;
            }
            if (board[row][col]==1) {
                if (liveCnt>=2 && liveCnt<=3) board[row][col] |= 2; //1 <- 1
                //else board[row][col] = 3; //0 <- 1        is already 01
            }
            if (!board[row][col]) {
                if (liveCnt==3) board[row][col] |= 2; //1<-0
                //else board[row][col] = 0; //0 <- 0          is already 00
            }
        }
    }

    for (var i=0; i<rowLength; i++) {
        for (var j=0; j<colLength; j++) {
            board[i][j] >>= 1; //移除右边的初始值
        }
    }
};

var isLive = function(val) {
    return val & 1;
};

var gameOfLife2 = function(board) {
    var rowLength = board.length;
    var colLength = board[0].length;
    for (var row = 0; row<rowLength; row++) {
        for (var col = 0; col<colLength; col++) {
            var liveCnt = 0;
            if (row - 1 >= 0) {
                if (col - 1 >= 0 && board[row - 1][col - 1]==1) liveCnt++;
                if (board[row - 1][col]==1) liveCnt++;
                if (col + 1 < colLength && board[row - 1][col + 1]==1) liveCnt++;
            }
            if (col - 1 >= 0 && board[row][col - 1]==1) liveCnt++;
            if (col + 1 < colLength && board[row][col + 1]==1) liveCnt++;
            if (row + 1 < rowLength) {
                if (col - 1 >= 0 && board[row + 1][col - 1]==1) liveCnt++;
                if (board[row + 1][col]==1) liveCnt++;
                if (col + 1 < colLength && board[row + 1][col + 1]==1) liveCnt++;
            }
            if (board[row][col]==1) {
                if (liveCnt>=2 && liveCnt<=3) board[row][col] = 1; //1->1
                else board[row][col] = 3; //1->0
            }
            if (!board[row][col]) {
                if (liveCnt==3) board[row][col] = 4; //0->1
                else board[row][col] = 0; //0->0
            }
        }
    }

    for (var i=0; i<rowLength; i++) {
        for (var j=0; j<colLength; j++) {
            if (board[i][j]==3) board[i][j] = 1;
            else if (board[i][j]==4) board[i][j] = 0;
        }
    }
};

