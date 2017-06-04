/**
 * Created by WTIFS-Mac on 2017/6/4.
 *
 Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

 Integers in each row are sorted in ascending from left to right.
 Integers in each column are sorted in ascending from top to bottom.
 For example,

 Consider the following matrix:

 [
 [1,   4,  7, 11, 15],
 [2,   5,  8, 12, 19],
 [3,   6,  9, 16, 22],
 [10, 13, 14, 17, 24],
 [18, 21, 23, 26, 30]
 ]
 Given target = 5, return true.

 Given target = 20, return false.

 Subscribe to see which companies asked this question.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    var rows = matrix.length;
    var cols = matrix[0].length;
    var row = 0;
    var col = cols - 1; //keypoint: 初始位置: 右上角
    while (row<rows && col>=0) {
        if (matrix[row][col]>target) col--; //target < matrix[row][col] 抛弃整列: target不可能出现在col列及col之后的列中
        else if (matrix[row][col]<target) row++; //target > matrix[row][col]
        else return true;
    }
    return false;

};
