package main

import (
	"fmt"
	"io"
)

func main() {
	var n int
	_, err := fmt.Scanf("%d", &n)
	if err == io.EOF {
		return
	}

	res := make([][]int, n)
	for i := range res {
		res[i] = make([]int, n)
	}

	totalSteps := n * n
	k := 1
	x, y := 0, n-1
	res[x][y] = 1

	for k < totalSteps {
		for x < n-1 && res[x+1][y] == 0 {
			k++
			x++
			res[x][y] = k
		}
		for y > 0 && res[x][y-1] == 0 {
			k++
			y--
			res[x][y] = k
		}
		for x > 0 && res[x-1][y] == 0 {
			k++
			x--
			res[x][y] = k
		}
		for y < n-1 && res[x][y+1] == 0 {
			k++
			y++
			res[x][y] = k
		}
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n-1; j++ {
			if n == 1 || n == 3 {
				fmt.Printf(" %d ", res[i][j])
			} else {
				fmt.Printf("%d ", res[i][j])
			}
		}
		if n == 1 || n == 3 {
			fmt.Print(" ")
			fmt.Println(res[i][n-1])
		} else {
			fmt.Println(res[i][n-1])
		}
	}
}
