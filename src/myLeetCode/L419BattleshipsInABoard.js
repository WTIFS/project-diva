/**
 * Created by WTIFS-Mac on 20/3/17.
 */

/*
 Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:

 You receive a valid board, made of only battleships or empty slots.
 Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
 At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
 Example:
 X..X
 ...X
 ...X
 In the above board there are 2 battleships.
 Invalid Example:
 ...X
 XXXX
 ...X
 This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
 */

/**
 * @param {string[]} board
 * @return {number}
 */
var countBattleships = function(board) {
    if (!board || !board.length) return 0;
    var m = board.length;
    var n = board[0].length;
    var cnt = 0;
    for (var i=0; i<m; i++) {
        for (var j=0; j<n; j++) {
            //left-top X as the first X; and ignore the latter X
            if (board[i][j]=='.') continue;
            if (i>0 && board[i-1][j]=='X') continue;
            if (j>0 && board[i][j-1]=='X') continue;
            cnt ++;
        }
    }
    return cnt;
};

console.log(countBattleships(["X..X","...X","...X"]));