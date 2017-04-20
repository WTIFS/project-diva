/**
 * Created by Yuanfei on 2017/4/20.
 */
/**

 Say you have an array for which the ith element is the price of a given stock on day i.

 Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0;
    var min = prices[0];
    var max = 0;
    prices.forEach(function(price) {
        if (price<min) min = price;
        if (price - min > max) max = price - min;
    });
    return max;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 6, 4, 3, 1, 2]));
console.log(maxProfit([1,2,1,2,1,3,2,3,2,4,4,1]));