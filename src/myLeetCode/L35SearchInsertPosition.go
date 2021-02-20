package main

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
*/

func main() {
	println(searchInsert([]int{1, 3, 5, 6}, 7))
	println(searchInsert([]int{1, 3, 5, 6}, 5))
	println(searchInsert([]int{1, 3, 5, 6}, 2))
	println(searchInsert([]int{1, 3, 5, 6}, 0))
}

//can use binary search to improve
func searchInsert(nums []int, target int) int {
	for i := range nums {
		if nums[i] >= target {
			return i
		}
		if i+1 < len(nums) && nums[i+1] > target {
			return i + 1
		}
	}
	return len(nums)
}
