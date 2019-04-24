package main

import (
	"fmt"
	"io"
)

func main() {
	var n int

	for {
		_, err := fmt.Scanf("%d", &n)
		if n == 0 || err == io.EOF {
			break
		}

		nums := make([][]int, n)
		rowSums := make([]int, n)
		columnSums := make([]int, n)
		rowCount1 := 0
		columnCount1 := 0
		x, y := 0, 0

		for i := 0; i < n; i++ {
			nums[i] = make([]int, n)
			for j := 0; j < n; j++ {
				fmt.Scanf("%d", &nums[i][j])
			}
		}

		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				rowSums[i] += nums[i][j]
				columnSums[j] += nums[i][j]
			}
		}

		for i := 0; i < n; i++ {
			if !is2(rowSums[i]) {
				rowCount1 ++
				x = i
			}
		}
		for j := 0; j < n; j++ {
			if !is2(columnSums[j]) {
				columnCount1 ++
				y = j
			}
		}

		if rowCount1+columnCount1 == 0 {
			fmt.Println("OK")
		} else if rowCount1 == 1 && columnCount1 == 1 {
			fmt.Printf("CHANGE (%d,%d)\n", x+1, y+1)
		} else {
			fmt.Println("ERROR")
		}
	}
}

func is2(i int) bool {
	return i%2 == 0
}
