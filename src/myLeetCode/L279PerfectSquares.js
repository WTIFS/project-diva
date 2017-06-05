/**
 * Created by Yuanfei on 2017/6/5.

 Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

 For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

 tags: DP; BFS; Math
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = [0];
    for (var j=1; j<=n; j++) {
        dp[j] = 99999;
        for (var k=1; k*k<=j; k++) {
            dp[j] = Math.min(dp[j], dp[j-k*k] +1); //e.g dp[13] = 1^2 + dp[12] || 2^2 + dp[9] || 3^3 + dp[4]
        }
    }
    return dp[n];
};


//拉格朗日四平方和定理: 每个正整数均可表示为4个整数的平方和
//所以结果只会是1-4
var numSquares2 = function(n) {
    var sqrtN = parseInt(Math.sqrt(n));
    if (sqrtN * sqrtN == n) return 1;

    // The result is 4 if and only if n can be written in the
    // form of 4^k*(8*m + 7). Please refer to
    // Legendre's three-square theorem.
    while ((n & 3) == 0) { // n%4 == 0
        n >>= 2;
    }
    if ((n & 7) == 0) { // n%8 == 0
        return 4;
    }

    for (var i=1; i<=sqrtN; i++) {
        var leftOver = n - i*i;
        var sqrtLeftOver = parseInt(Math.sqrt(leftOver));
        if (sqrtLeftOver * sqrtLeftOver == leftOver) return 2;
    }

    return 3;
};


console.log(numSquares(1));
console.log(numSquares2(1));
console.log(numSquares(12));
console.log(numSquares2(12));
console.log(numSquares(13));
console.log(numSquares2(13));