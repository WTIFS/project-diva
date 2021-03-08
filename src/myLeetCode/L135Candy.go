package main

/***

135. Candy
Hard

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.



Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.


Constraints:

n == ratings.length
1 <= n <= 2 * 104
1 <= ratings[i] <= 2 * 104

***/

func main() {
	println(candy([]int{1, 0, 2}))
	println(candy([]int{1, 3, 2}))
}

func candy(ratings []int) int {
	res := make([]int, len(ratings))
	for i := range res {
		res[i] = 1
	}
	for i := 1; i < len(ratings); i++ {
		if ratings[i-1] < ratings[i] {
			res[i] = res[i-1] + 1
		}
	}
	for i := len(ratings) - 1; i > 0; i-- {
		if ratings[i-1] > ratings[i] {
			res[i-1] = maxInt(res[i-1], res[i]+1)
		}
	}

	sum := 0
	for _, cnt := range res {
		sum += cnt
	}
	return sum
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
