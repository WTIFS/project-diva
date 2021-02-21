package main

import (
	"fmt"
)

/**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.



Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
*/

func main() {
	fmt.Println(L57InsertInterval([][]int{{1, 3}, {6, 9}}, []int{2, 5}))
	fmt.Println(L57InsertInterval([][]int{{1, 2}, {3, 5}, {6, 7}, {8, 10}, {12, 16}}, []int{4, 8}))
	fmt.Println(L57InsertInterval([][]int{{1, 5}, }, []int{2, 3}))
	fmt.Println(L57InsertInterval([][]int{{1, 5}, }, []int{2, 7}))
	fmt.Println(L57InsertInterval([][]int{{1, 5}}, []int{6, 8}))
	fmt.Println(L57InsertInterval([][]int{{6, 8}}, []int{1, 5}))
	fmt.Println(L57InsertInterval([][]int{{1, 5}}, []int{1, 5}))
}

/*func L57InsertInterval(intervals [][]int, newInterval []int) [][]int {
	l := len(intervals)
	if l == 0 {
		return [][]int{newInterval}
	}

	res := make([][]int, 0, l+1)
	a, b := newInterval[0], newInterval[1]

	nums := make([]int, l*2+2)
	marks := make([]int, l*2+2)
	for i := 0; i < l; i++ {
		nums[2*i] = intervals[i][0]
		nums[2*i+1] = intervals[i][1]
		marks[2*i] = 1
		marks[2*i+1] = 2
	}

	var i, j int
	for i = 0; i <= l*2 && nums[i] <= a; {
		i++
	}
	insert(nums, a, i, l*2)
	insert(marks, 1, i, l*2)

	for j = i; j <= l*2+1 && nums[j] < b; {
		j++
	}
	insert(nums, b, j, l*2+1)
	insert(marks, 2, j, l*2+1)

	for i = 0; i < l*2+2; i += 2 {
		if marks[i] == 1 && marks[i+1] == 2 {
			res = append(res, []int{nums[i], nums[i+1]})
		} else {
			s := nums[i]
			for k := i + 2; k < l*2+2; k+=2 {
				if marks[k] == 2 && marks[k+1] == 2 {
					res = append(res, []int{s, nums[k+1]})
					i = k
				}
			}
		}
	}

	return res
}*/

func L57InsertInterval(intervals [][]int, newInterval []int) [][]int {
	l := len(intervals)

	a, b := newInterval[0], newInterval[1]
	res := make([][]int, 0, l+1)

	//left part
	var i int
	for i = 0; i < l && intervals[i][1] < a; i++ {
		res = append(res, intervals[i])
	}

	//intersect part
	for ; i < l && b >= intervals[i][0]; i++ {
		a = minInt(a, intervals[i][0])
		b = maxInt(b, intervals[i][1])
	}
	res = append(res, []int{a, b})

	//right part
	for ; i < l; i++ {
		res = append(res, intervals[i])
	}

	return res
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func insert(nums []int, a, pos, l int) {
	for j := l; j > pos; j-- {
		nums[j] = nums[j-1]
	}
	nums[pos] = a
}
