/**
 * Created by Yuanfei on 2017/3/16.
 */
/**
 You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

 Example 1:
 coins = [1, 2, 5], amount = 11
 return 3 (11 = 5 + 5 + 1)

 Example 2:
 coins = [2], amount = 3
 return -1.

 Note:
 You may assume that you have an infinite number of each kind of coin.
 */

//DP
//f[amount] 价值为amount时的最小硬币数
//f[amount+1] = f[amount - coins[i]] + 1  遍历i

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var f = [0];
    var len = coins.length;
    for (var i=1; i<=amount; i++) {
        var min = -1;

        for (var j=0; j<len; j++) {
            var coin = coins[j];
            if (i-coin>=0 && f[i-coin]>-1) {
                if (min==-1) min = f[i-coin] + 1;
                else min = Math.min(min, f[i-coin] + 1);
            }
        }
        f[i] = min;
    }
    return f[amount];
};