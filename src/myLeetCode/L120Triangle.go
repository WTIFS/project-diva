package main

import "math"

/***
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.



Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3

2
3 4
6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

Example 2:
Input: triangle = [[-10]]
Output: -10
*/
func main() {
	triangle := [][]int{
		{2},
		{3, 4},
		{6, 5, 7},
		{4, 1, 8, 3},
	}
	println(minimumTotal(triangle))

	println(minimumTotal([][]int{{-10}}))
}

func minimumTotal(triangle [][]int) int {
	for i := 1; i < len(triangle); i++ {
		above := triangle[i-1]
		row := triangle[i]

		for j := range row {
			if j == 0 {
				row[j] += above[j]
			} else if j == len(above) {
				row[j] += above[j-1]
			} else {
				row[j] += minInt(above[j-1], above[j])
			}
		}
	}

	min := math.MaxInt32
	for _, num := range triangle[len(triangle)-1] {
		min = minInt(min, num)
	}
	return min

	//写成自底向上可以缩短代码
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
