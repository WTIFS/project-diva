/**
 * Created by Yuanfei on 2017/4/1.
 */
/*
 You are given an n x n 2D matrix representing an image.

 Rotate the image by 90 degrees (clockwise).

 Follow up:
 Could you do this in-place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for (var i=0; i<len; i++) {
        for (var j=i+1; j<len; j++) {
            swap(matrix, i, j);
        }
    }
    for (var k=0; k<len; k++) {
        for (var l=0; l<parseInt(len/2); l++) {
            swap2(matrix, k, l);
        }
    }
};

var swap = function(matrix, i, j) {
    matrix[i][j] ^= matrix[j][i];
    matrix[j][i] ^= matrix[i][j];
    matrix[i][j] ^= matrix[j][i];
};

var swap2 = function(matrix, row, i) {
    var len = matrix.length - 1;
    matrix[row][i] ^= matrix[row][len - i];
    matrix[row][len - i] ^= matrix[row][i];
    matrix[row][i] ^= matrix[row][len - i];
};

var a = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
rotate(a);
console.log(a);

a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
rotate(a);
console.log(a);