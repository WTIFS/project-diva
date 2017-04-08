/**
 * Created by WTIFS-Mac on 8/4/17.
 */
/*

 Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

 click to show follow up.

 Follow up:
 Did you use extra space?
 A straight forward solution using O(mn) space is probably a bad idea.
 A simple improvement uses O(m + n) space, but still not the best solution.
 Could you devise a constant space solution?

 */

//both matrix[0][x] && matrix[x][0] will result matrix[0][0]=0
//in that case, if matrix[0][0]==0, we don't know whether to modify row0 or column0
//so use matrix[0] to represent matrix[0][x]
//col0 to represent matrix[x][0]

/**
 * @param {number[][]} matrix
 */
var setZeroes = function(matrix) {
    var row;
    var col;
    var col0 = 1;
    var height = matrix.length;
    var width = matrix[0].length;

    for (row=0; row<height; row++) {
        if (matrix[row][0] == 0) col0=0;
        for (col=1; col<width; col++) {
            if (matrix[row][col] == 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for (row=height-1; row>=0; row--) { //注意倒序 否则会导致覆盖读写
        for (col=width-1; col>=1; col--) {
           if (matrix[row][0]==0 || matrix[0][col]==0) matrix[row][col] = 0;
        }
        if (col0==0) matrix[row][0] = 0;
    }

    return matrix;
};

var a;

a = [
    [0,0,0,5],
    [4,3,1,4],
    [0,1,1,4],
    [1,2,1,3],
    [0,0,1,1]
];
console.log(setZeroes(a));

a = [
    [1,0],
    [1,1]
];
console.log(setZeroes(a));

a = [
    [1,1,1],
    [1,0,1],
    [1,0,1]
];
console.log(setZeroes(a));

