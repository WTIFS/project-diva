package main

import (
	"fmt"
	"github.com/wtifs/project-diva/src/myLib"
)

/***
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

Example 1:
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

Example 2:
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
*/

func main() {
	testCases := [][]int{
		{3, 6, 9, 1},
		{21, 10, 1},
	}
	for _, tt := range testCases {
		sorted := myLib.RadixSort(tt)
		fmt.Println(sorted)
	}
}

func maximumGap(nums []int) int {
	nums = myLib.RadixSort(nums)
	max := 0
	for i := 0; i < len(nums)-1; i++ {
		if nums[i+1]-nums[i] > max {
			max = nums[i+1] - nums[i]
		}
	}
	return max
}
