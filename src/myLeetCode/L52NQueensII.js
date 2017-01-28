/**
 * Created by WTIFS-Mac on 28/1/17.
 */
/*
 Follow up for N-Queens problem.

 Now, instead outputting board configurations, return the total number of distinct solutions.
*/

var column = []; //同列是否有子 -> j
var column45 = []; //右斜上方向是否有子 -> row + j
var column225 = [];//右斜下坐标转换 -> j + n - row
var cnt = 0;

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var a = new Array(n);
    cnt = 0;
    for (var i=0; i<n; i++) a[i] = new Array(n);
    backTrack(a, 0);
    return cnt;
};

var backTrack = function(a, row) {
    var n = a.length;
    if (row==n) {
        cnt ++;
        //console.log(convert(a));
        return;
    }
    for (var j=0; j<n; j++) {
        if (!column[j] && !column45[row + j] && !column225[j + n - row]) {
            a[row][j] = 1;
            column[j] = true;
            column45[row+j] = true;
            column225[j+n-row] = true;
            backTrack(a, row + 1);
            column[j] = false;
            column45[row+j] = false;
            column225[j+n-row] = false;
            a[row][j] = 0;
        }
    }
};

//var convert = function(a) {
//    var n = a.length;
//    var b = new Array(n);
//    for (var row=0; row<n; row++) {
//        b[row] = "";
//        for (var col=0; col<n; col++) {
//            b[row] += a[row][col] ? 'Q': '.';
//        }
//    }
//    return b;
//};

console.log(totalNQueens(4));