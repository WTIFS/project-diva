package main

import (
	"fmt"
)

func main() {
	var testCount = 0
	fmt.Scanf("%d", &testCount)

	for i := 0; i < testCount; i++ {
		var matrix = make([][]string, 0)
		var matrix2 = make([][]bool, 0)
		var visited [][]bool
		var rowCount int
		var count = 0

		fmt.Scanf("%d", &rowCount)
		for j := 0; j < rowCount; j++ {
			var s string
			fmt.Scanf("%s", &s)
			row := make([]string, 0)
			row2 := make([]bool, 0)
			visitedRow := make([]bool, len(s))
			for i := 0; i < len(s); i++ {
				row = append(row, string(s[i]))

				if string(s[i]) == "A" || string(s[i]) == "S" {
					row2 = append(row2, true)
					count++
				} else {
					row2 = append(row2, false)
				}
			}
			matrix = append(matrix, row)
			matrix2 = append(matrix2, row2)
			visited = append(visited, visitedRow)
		}

		x, y := 0, 0
		for i := 0; i < len(matrix); i++ {
			for j := 0; j < len(matrix[i]); j++ {
				if matrix[i][j] == "S" {
					x = i
					y = j
					visited[i][j] = true
				}
			}
		}

		if find(matrix2, visited, x, y, 0, count) {
			fmt.Println("Y")
		} else {
			fmt.Println("N")
		}


	}
}

func find(matrix [][]bool, visited [][]bool, x, y, step, count int) bool {
	step++
	visited[x][y] = true
	if step == count {
		return true
	}
	if x > 0 && y < len(matrix[x-1]) && matrix[x-1][y] && !visited[x-1][y] && find(matrix, visited, x-1, y, step, count) {
		return true
	}
	if x+1 < len(matrix) && y < len(matrix[x+1]) && matrix[x+1][y] && !visited[x+1][y] && find(matrix, visited, x+1, y, step, count) {
		return true
	}
	if y > 0 && matrix[x][y-1] && !visited[x][y-1] && find(matrix, visited, x, y-1, step, count) {
		return true
	}
	if y+1 < len(matrix[x]) && matrix[x][y+1] && !visited[x][y+1] && find(matrix, visited, x, y+1, step, count) {
		return true
	}
	visited[x][y] = false
	return false
}
