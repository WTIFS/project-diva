/**
 * Created by WTIFS-Mac on 4/4/17.
 */
/*
 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths3 = function(m, n) {
    var a = new Array(m);
    for (var i=0; i<m; i++) {
        a[i] = new Array(n);
        a[i][0] = 1;
    }
    for (var j=0; j<n; j++) {
        a[0][j] = 1;
    }
    for (var k=1; k<m; k++) {
        for (var l=1; l<n; l++) {
            a[k][l] = a[k-1][l] + a[k][l-1];
        }
    }
    return a[m-1][n-1];
};

 var uniquePaths2 = function(m, n) {
    //m-1 right steps
    //n-1 down steps
    return combination(m+n-2, m-1);
};

//C(n, k) = n! / k!(n-k)! = n*(n-1)*...*(n-k+1) / k!
var combination = function(n, k) {
    var result = 1;
    for (var i=0; i<k; i++) {
        result *= (n-i) / (i+1);
    }
    return result;
};


var uniquePaths = function(m, n) {
    count = 0;
    recurse(m, n, 0, 0);
    return count;
};

var count;

var recurse = function(m, n, i, j) {
    if (i==m-1 && j==n-1) {
        count++;
        return;
    }
    if (i<m) recurse(m, n, i+1, j);
    if (j<n) recurse(m, n, i, j+1);
};

console.log(uniquePaths2(23, 12));
console.log(uniquePaths3(23, 12));
;
console.log(uniquePaths3(1, 1));
console.log(uniquePaths2(1, 1));
console.log(uniquePaths(1, 1));

console.log(uniquePaths3(2, 1));
console.log(uniquePaths2(2, 1));
console.log(uniquePaths(2, 1));

console.log(uniquePaths3(2, 2));
console.log(uniquePaths2(2, 2));
console.log(uniquePaths(2, 2));

console.log(uniquePaths3(2, 3));
console.log(uniquePaths2(2, 3));
console.log(uniquePaths(2, 3));

console.log(uniquePaths3(3, 3));
console.log(uniquePaths2(3, 3));
console.log(uniquePaths(3, 3));

