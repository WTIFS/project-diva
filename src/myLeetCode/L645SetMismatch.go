package main

import (
	"fmt"
	"math"
)

/***
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.



Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Example 3:
Input: nums = [1,2,3,4,2]
Output: [2,5]
*/

func main() {
	fmt.Println(findErrorNums2([]int{1, 2, 2, 4}))
	fmt.Println(findErrorNums2([]int{1, 1}))
	fmt.Println(findErrorNums2([]int{1, 2, 3, 4, 2}))
	fmt.Println(findErrorNums2([]int{3, 2, 2}))
}

func findErrorNums(nums []int) []int {
	res := make([]int, 2)
	m := make(map[int]byte, len(nums))
	cnt := 0
	for _, num := range nums {
		m[num]++
	}
	for i := range nums {
		if m[i+1] == 2 {
			res[0] = i + 1
			cnt++
		} else if m[i+1] == 0 {
			res[1] = i + 1
			cnt++
		}
		if cnt == 2 {
			return res
		}
	}

	return res
}

func findErrorNums2(nums []int) []int {
	var more int
	//用负号和下标来标记次数，已为负数的下标是重复数，未变负的下标是缺少的数
	for _, num := range nums {
		num = int(math.Abs(float64(num)))
		if nums[num-1] < 0 {
			more = num
		} else {
			nums[num-1] *= -1
		}
	}
	for i := range nums {
		if nums[i] > 0 {
			return []int{more, i + 1}
		}
	}

	return []int{}
}
