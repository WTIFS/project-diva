package main

/***
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

***/

func main() {
	grid := [][]int{
		{1, 3, 1},
		{1, 5, 1},
		{4, 2, 1},
	}
	println(minPathSum(grid))

	grid = [][]int{
		{1, 2, 3},
		{4, 5, 6},
	}
	println(minPathSum(grid))
}

func minPathSum(grid [][]int) int {
	rows, columns := len(grid), len(grid[0])

	res := make([][]int, rows)
	for i := 0; i < rows; i++ {
		res[i] = make([]int, columns)
	}

	//初始化首行数据
	res[0][0] = grid[0][0]
	for j := 1; j < columns; j++ {
		res[0][j] = res[0][j-1] + grid[0][j]
	}

	for i := 1; i < rows; i++ {
		for j := 0; j < columns; j++ {
			res[i][j] = grid[i][j]

			if j == 0 {
				res[i][j] += res[i-1][j]
			} else {
				res[i][j] += minInt(res[i-1][j], res[i][j-1])
			}

		}
	}

	return res[rows-1][columns-1]
}

//没有必要用二位数组，实际上用到的只有左侧1个点和上一行，因此只保存上一行数据就可以了
func minPathSum2(grid [][]int) int {
	rows, columns := len(grid), len(grid[0])

	res := make([]int, columns)

	//初始化首行数据
	res[0] = grid[0][0]
	for j := 1; j < columns; j++ {
		res[j] = res[j-1] + grid[0][j]
	}

	for i := 1; i < rows; i++ {
		//初始化左侧数据
		res[0] += grid[i][0]

		//取左侧和上行数据里最小的
		for j := 1; j < columns; j++ {
			res[j] = minInt(res[j-1], res[j]) + grid[i][j]
		}
	}

	return res[columns-1]
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
