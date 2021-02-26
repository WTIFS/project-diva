package main

import "fmt"

/***
Medium

	Add to List

	Share
	There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

	Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

	Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.


	Example 1:

	Input: nums = [2,5,6,0,0,1,2], target = 0
	Output: true
	Example 2:

	Input: nums = [2,5,6,0,0,1,2], target = 3
	Output: false


	Constraints:

	1 <= nums.length <= 5000
	-104 <= nums[i] <= 104
	nums is guaranteed to be rotated at some pivot.
	-104 <= target <= 104
*/
func main() {
	nums := []int{2, 5, 6, 0, 0, 1, 2}
	fmt.Println(searchRotatedArray2(nums, 0))

	nums = []int{2, 5, 6, 0, 0, 1, 2}
	fmt.Println(searchRotatedArray2(nums, 3))

	nums = []int{1, 0, 1, 1, 1}
	fmt.Println(searchRotatedArray2(nums, 0))
}

func searchRotatedArray(nums []int, target int) bool {
	return searchRotatedArraySub(nums, target, 0, len(nums)-1)
}

func searchRotatedArraySub(nums []int, target, left, right int) bool {
	if left >= right {
		return nums[left] == target
	}
	mid := (left + right) / 2
	leftFound, rightFound := false, false
	if nums[mid] == target {
		return true
	}
	if nums[mid] >= target {
		leftFound = searchRotatedArraySub(nums, target, left, mid)
		if !leftFound && nums[right] >= target {
			rightFound = searchRotatedArraySub(nums, target, mid+1, right)
		}
	} else {
		rightFound = searchRotatedArraySub(nums, target, mid+1, right)
		if !rightFound && nums[left] <= target {
			leftFound = searchRotatedArraySub(nums, target, left, mid)
		}
	}
	return leftFound || rightFound
}

func searchRotatedArray2(nums []int, target int) bool {
	left := 0
	right := len(nums) - 1
	for left < right {
		mid := (left + right) >> 1
		if nums[mid] == target {
			return true
		}
		if (nums[left] == nums[mid]) && (nums[right] == nums[mid]) {
			left++
			right--
		} else if nums[left] <= nums[mid] {
			if nums[left] <= target && nums[mid] > target {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			if nums[mid] < target && nums[right] >= target {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}
	return nums[left] == target
}
