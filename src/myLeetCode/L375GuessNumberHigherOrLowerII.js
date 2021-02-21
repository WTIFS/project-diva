/**
 * Created by WTIFS on 16/7/19.
 */
/*
 375. Guess Number Higher or Lower II

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

    Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

    Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

    You end up paying $5 + $7 + $9 = $21.
    Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

    Hint:

The best strategy to play the game is to minimize the maximum loss you could possibly face. Another strategy is to minimize the expected loss. Here, we are interested in the first scenario.
    Take a small example (n = 3). What do you end up paying in the worst case?
    Check out this article if you're still stuck.
The purely recursive implementation of minimax would be worthless for even a small n. You MUST use dynamic programming.
    As a follow-up, how would you modify your code to solve the problem of minimizing the expected loss, instead of the worst-case loss?
*/
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    var g = new Array(n+1);
    for (var i=1; i<n; i++) {
        g[i] = [];
        g[i][i+1] = i;
    }
    g[n] = [];
    for (i=n-1; i>=1; i--) {
        for (var j=i+2; j<=n; j++) {
            var min = Number.MAX_VALUE;
            for (var k=i+1; k<=j-1; k++) {
                min = Math.min(min, Math.max(g[i][k-1] ? g[i][k-1] : 0, g[k+1][j] ? g[k+1][j] : 0) + k);
            }
            g[i][j] = min;
        }
    }
    return g[1][n] ? g[1][n] : 0;
};

console.log(getMoneyAmount(5));

//f[i, j] = for (k = i+1 -> j-1)

//min (  max( f[i, k-1] + k, f[k+1, j] + k)  );
// f[i, k-1], f[k+1, j]两个区间都可能猜错，max选最坏情况
// min选最坏情况里的最小代价
