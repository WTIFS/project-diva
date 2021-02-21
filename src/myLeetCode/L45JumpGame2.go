package main

//see L55 Also

/***
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.



Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2


Constraints:

1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105
***/

func main() {
	println(JumpGame22([]int{2, 3, 1, 1, 4}))
	println(JumpGame22([]int{2, 3, 0, 1, 4}))
	println(JumpGame22([]int{4, 3, 0, 1, 4}))
	println(JumpGame22([]int{1, 1, 1, 1, 4}))
}

//f(n) = min(f(1)(if nums[1]>=n-1), f(2)(if nums[2]>=n-2), ... f(n-1)(if nums[n-1]>=1))+1)
func JumpGame2(nums []int) int {
	l := len(nums)
	minSteps := make([]int, l)

	//iterate each point
	for i := 0; i < l; i++ {

		//iterate step
		for step := 1; step <= nums[i] && i+step < l; step++ {
			if minSteps[i+step] == 0 {
				minSteps[i+step] = minSteps[i] + 1
			} else {
				minSteps[i+step] = minInt(minSteps[i+step], minSteps[i]+1)
			}
		}
	}

	return minSteps[len(nums)-1]
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func JumpGame22(nums []int) int {
	l := len(nums)
	if l <= 1 {
		return 0
	}

	left := 1
	right := nums[0]
	step := 1

	for left <= right {
		if right >= l-1 {
			return step
		}

		//find next region
		max := 0
		for i := left; i <= right; i++ {
			if i+nums[i] > max {
				max = i + nums[i]
			}
		}
		if max > l-1 {
			max = l - 1
		}

		//go to next region
		if max >= right {
			left = right
			right = max
			step++
		}
	}

	return step
}
