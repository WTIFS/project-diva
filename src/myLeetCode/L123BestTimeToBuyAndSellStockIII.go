package main

import "math"

/***
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).



Example 1:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

Example 4:
Input: prices = [1]
Output: 0


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 105
*/

func main() {
	prices := []int{3, 3, 5, 0, 0, 3, 1, 4}
	println(maxProfit(prices))

	prices = []int{1, 2, 3, 4, 5}
	println(maxProfit(prices))

	prices = []int{7, 6, 4, 3, 1}
	println(maxProfit(prices))

	prices = []int{1}
	println(maxProfit(prices))

	prices = []int{1, 2, 4, 2, 5, 7, 2, 4, 9, 0}
	println(maxProfit(prices))
}

func maxProfit(prices []int) int {
	var price1, price2 = math.MaxInt32, math.MaxInt32
	var profit1, profit2 int
	for i := range prices {
		price1 = minInt(price1, prices[i])
		profit1 = maxInt(profit1, prices[i]-price1)
		price2 = minInt(price2, prices[i]-profit1) //本次买入价格 - 上次获利 本次价格越低越好、上次获利越高越好
		profit2 = maxInt(profit2, prices[i]-price2)
	}
	return profit2
}

//func minInt(a, b int) int {
//	if a < b {
//		return a
//	}
//	return b
//}
//
//func maxInt(a, b int) int {
//	if a > b {
//		return a
//	}
//	return b
//}

//可以用动归 a[i][j] 表示 i次交易，截至到j日的收益
