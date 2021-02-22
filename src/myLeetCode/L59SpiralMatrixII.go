package main

import "fmt"

/**
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]]
*/

func main() {
	fmt.Println(L59SpiralMatrixII(1))
	fmt.Println(L59SpiralMatrixII(3))
}

func L59SpiralMatrixII(n int) [][]int {
	var directions = [4][2]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	var directionIndex = 0
	var res = make([][]int, n)
	for i := 0; i < n; i++ {
		res[i] = make([]int, n)
	}

	var x, y int
	for i := 1; i <= n*n; i++ {
		res[x][y] = i
		newX := x + directions[directionIndex][0]
		newY := y + directions[directionIndex][1]
		if newX < 0 || newY < 0 || newX == n || newY == n || res[newX][newY] > 0 {
			directionIndex = (directionIndex + 1) % 4
			newX = x + directions[directionIndex][0]
			newY = y + directions[directionIndex][1]
		}
		x = newX
		y = newY
	}
	return res
}
