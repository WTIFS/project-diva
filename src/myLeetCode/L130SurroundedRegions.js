/**
 * Created by WTIFS-Mac on 23/4/2017.
 */

/**
 Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

 A region is captured by flipping all 'O's into 'X's in that surrounded region.

 For example,
 X X X X
 X O O X
 X X O X
 X O X X
 After running your function, the board should be:

 X X X X
 X X X X
 X X X X
 X O X X
 */

/**
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    var rowCount = board.length;
    if (!rowCount) return;
    var colCount = board[0].length;
    for (var i=0; i<rowCount; i++) {
        dfs(board, i, 0, rowCount, colCount);
        if (colCount>1) dfs(board, i, colCount-1, rowCount, colCount);
    }

    for (var j=1; j+1<colCount; j++) {
        dfs(board, 0, j, rowCount, colCount);
        if (rowCount>1) dfs(board, rowCount-1, j, rowCount, colCount);
    }

    for (var k=0; k<rowCount; k++) {
        for (var l=0; l<colCount; l++) {
            if (board[k][l]=='O') board[k][l]='X';
        }
    }

    for (var i2=0; i2<rowCount; i2++)
        for (var j2=0; j2<colCount; j2++) {
            if (board[i2][j2]==1) board[i2][j2]='O';
        }
};

//if board[i][j]=='O' find its neighbors
var dfs = function(board, i, j, rowCount, colCount) {
    if (board[i][j]=='O') {
        board[i][j] = 1;
        if (i > 1) dfs(board, i - 1, j, rowCount, colCount);
        if (j > 1) dfs(board, i, j - 1, rowCount, colCount);
        if (i + 1 < rowCount) dfs(board, i + 1, j, rowCount, colCount);
        if (j + 1 < colCount) dfs(board, i, j + 1, rowCount, colCount);
    }
};

var a = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];
solve(a);
console.log(a);