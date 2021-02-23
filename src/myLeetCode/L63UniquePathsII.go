package main

import "fmt"

/***
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.


Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

***/

func main() {
	grid := [][]int{
		{0, 0, 0},
		{0, 0, 0},
		{0, 0, 0},
	}
	fmt.Println(L63UniquePathsII(grid))

	grid = [][]int{
		{0, 0, 0},
		{0, 1, 0},
		{0, 0, 0},
	}
	fmt.Println(L63UniquePathsII(grid))
}

func L63UniquePathsII(obstacleGrid [][]int) int {
	rows := len(obstacleGrid)
	if rows < 1 {
		return rows
	}
	columns := len(obstacleGrid[0])
	if columns < 1 {
		return columns
	}
	if obstacleGrid[0][0] == 1 || obstacleGrid[rows-1][columns-1] == 1 {
		return 0
	}

	a := make([][]int, rows)
	for i := 0; i < rows; i++ {
		a[i] = make([]int, columns)
	}
	a[0][0] = 1

	for i := 0; i < rows; i++ {
		for j := 0; j < columns; j++ {
			if obstacleGrid[i][j] == 0 {
				if i > 0 && obstacleGrid[i-1][j] == 0 {
					a[i][j] += a[i-1][j]
				}
				if j > 0 && obstacleGrid[i][j-1] == 0 {
					a[i][j] += a[i][j-1]
				}
			}
		}
	}

	return a[rows-1][columns-1]
}
