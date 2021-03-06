/**
 * Created by WTIFS-Mac on 2017/8/8.
 *
 Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

 To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

 Example:

 Input:
 A = [ 1, 2]
 B = [-2,-1]
 C = [-1, 2]
 D = [ 0, 2]

 Output:
 2

 Explanation:
 The two tuples are:
 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var abSum = {};
    var count = 0;
    A.forEach(function(numA) {
        B.forEach(function(numB) {
            if (!abSum[numA+numB]) abSum[numA+numB] = 1;
            else abSum[numA+numB]++;
        });
    });

    C.forEach(function(numC) {
        D.forEach(function(numD) {
            if (abSum[-numC-numD]) count+=abSum[-numC-numD];
        });
    });

    return count;
};

var A = [1, 2];
var B = [-2,-1];
var C = [-1, 2];
var D = [ 0, 2];
console.log(fourSumCount(A, B, C, D));


A = [-1,-1];
B = [-1,1];
C = [-1,1];
D = [1,-1];
console.log(fourSumCount(A, B, C, D));
