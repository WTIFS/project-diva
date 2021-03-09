package main

import "math"

/***
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.



Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99


Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
*/

func main() {
	nums := []int{-2, -2, 3, -2}
	println(singleNumberII(nums) == singleNumberII2(nums))

	nums = []int{0, 1, 0, 1, 0, 1, 99}
	println(singleNumberII(nums) == singleNumberII2(nums))
}

func singleNumberII(nums []int) int {
	var ones, twos, threes int
	for _, num := range nums {
		//如果在ones里出现过（ones & num），放到twos
		twos = twos ^ (ones & num)
		//出现过1次，放入ones里
		ones = ones ^ num
		//同时出现在ones & twos里，放到threes
		threes = twos & ones
		//满3次的，可以从ones和twos清掉了
		ones = ones & (^threes)
		twos = twos & (^threes)
	}
	return ones
}

func singleNumberII2(nums []int) int {
	var res int
	var negative int
	//32位int，遍历每一位
	for i := 0; i < 32; i++ {
		cnt := 0
		//统计i位上1的数量
		for _, num := range nums {
			cnt += (int(math.Abs(float64(num))) >> i) & 1
		}
		//出现3次的，一定是3的倍数，不变；出现1次的，将res的该位设为1
		if cnt%3 == 1 {
			res += 1 << i
		}
	}
	for _, num := range nums {
		if num < 0 {
			negative++
		}
	}
	if negative%3 == 1 {
		return -res
	}

	return res
}
