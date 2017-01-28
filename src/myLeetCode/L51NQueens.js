/**
 * Created by WTIFS-Mac on 11/1/17.
 */
/*

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

 Given an integer n, return all distinct solutions to the n-queens puzzle.

 Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

 For example,
 There exist two distinct solutions to the 4-queens puzzle:

 [
 [".Q..",  // Solution 1
 "...Q",
 "Q...",
 "..Q."],

 ["..Q.",  // Solution 2
 "Q...",
 "...Q",
 ".Q.."]
 ]

*/


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var a = new Array(n);
    var results = [];
    for (var i=0; i<n; i++) a[i] = new Array(n);
    backTrack(results, a, 0);
    return results;
};

var backTrack = function(results, a, row) {
    var n = a.length;
    if (row == n) {
        results.push(convert(a));
    } else {
        for (var i = 0; i < n; i++) {
            if (check(a, row, i)) {
                a[row][i] = 1;
                backTrack(results, a, row + 1);
                a[row][i] = 0;
            }
        }
    }
};

var check = function(a, row, col) {
    var n = a.length;
    var isValid = true;
    for (var i=1; i<=row && isValid; i++) {
        if (a[(row - i)][col]) isValid = false;
        if (col+i<n && a[row - i][col + i]) isValid = false;
        if (col>=i && a[row - i][col - i]) isValid = false;
    }
    return isValid;
};

var convert = function(a) {
    var n = a.length;
    var b = new Array(n);
    for (var row=0; row<n; row++) {
        b[row] = "";
        for (var col=0; col<n; col++) {
            b[row] += a[row][col] ? 'Q': '.';
        }
    }
    return b;
};

console.log(solveNQueens(4));