/**
 * Created by WTIFS-Mac on 4/4/17.
 */

/**
 Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 For example,
 Given the following matrix:

 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder2 = function(matrix) {
    var m = matrix.length;
    var result = [];
    if (!m) return result;
    var n = matrix[0].length;
    var mn = m * n;
    var rowStart = 0;
    var rowEnd = m-1;
    var colStart = 0;
    var colEnd = n-1;
    while (result.length<mn) {
        for (var i1 = colStart; i1<=colEnd; i1++) {
            result.push(matrix[rowStart][i1]);
        }
        rowStart++;
        for (var i2 = rowStart; i2<=rowEnd; i2++) {
            result.push(matrix[i2][colEnd]);
        }
        colEnd--;
        if (rowStart<=rowEnd) {
            for (var i3 = colEnd; i3 >= colStart; i3--) {
                result.push(matrix[rowEnd][i3]);
            }
        }
        rowEnd--;

        if (colStart <= colEnd) {
            for (var i4 = rowEnd; i4 >= rowStart; i4--) {
                result.push(matrix[i4][colStart]);
            }
        }
        colStart++;
    }
    return result;
};


var spiralOrder = function(matrix) {
    var m = matrix.length;
    var result = [];
    if (!m) return result;
    var n = matrix[0].length;
    var visited = new Array(m);
    for (var row=0; row<m; row++) {
        visited[row] = new Array(n);
    }

    var i = 0;
    var j = 0;
    var mn = m * n;
    while (result.length<mn) {
        while (j<n && !visited[i][j]) {
            result.push(matrix[i][j]);
            visited[i][j] = true;
            j++;
        }
        j--;
        i++;
        while (i<m && !visited[i][j]) {
            result.push(matrix[i][j]);
            visited[i][j] = true;
            i++;
        }
        i--;
        j--;
        while (j>=0 && !visited[i][j]) {
            result.push(matrix[i][j]);
            visited[i][j] = true;
            j--;
        }
        j++;
        i--;
        while (i>=0 && !visited[i][j]) {
            result.push(matrix[i][j]);
            visited[i][j] = true;
            i--;
        }
        i++;
        j++;
    }
    return result;
};

var a = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

console.log(spiralOrder(a));
console.log(spiralOrder2(a));
console.log(spiralOrder2([[2,3]]));
console.log(spiralOrder2([[2,3]]));