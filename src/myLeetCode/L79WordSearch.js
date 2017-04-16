/**
 * Created by Yuanfei on 2017/4/16.
 */
/**
 Given a 2D board and a word, find if the word exists in the grid.

 The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

 For example,
 Given board =

 [
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
 ]
 word = "ABCCED", -> returns true,
 word = "SEE", -> returns true,
 word = "ABCB", -> returns false.

 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var rowCount = board.length;
    var columnCount = board[0].length;
    var used = new Array(rowCount);
    for (var i=0; i<used.length; i++) used[i] = new Array(columnCount);
    for (var row=0; row<rowCount; row++)
        for (var column=0; column<columnCount; column++) {
            if  (recurse(board, used, row, column, word, 0)) return true;
        }
    return false;
};

var recurse = function(board, used, row, column, word, idx) {
    if (idx==word.length) return true;
    if (row<0 || column<0 || row==board.length || column==board[row].length || used[row][column]) return false;
    if (board[row][column]!==word[idx]) return false;
    used[row][column] = true;
    var exists = recurse(board, used, row + 1, column, word, idx + 1);
    if (!exists) exists = recurse(board, used, row-1, column, word, idx+1);
    if (!exists) exists = recurse(board, used, row, column+1, word, idx+1);
    if (!exists) exists = recurse(board, used, row, column-1, word, idx+1);
    used[row][column] = false;
    return exists;
};

var board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
console.log(exist(board, "ABCCED"));
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));
