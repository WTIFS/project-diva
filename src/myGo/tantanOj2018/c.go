package main

import (
	"fmt"
	"io"
)

func main() {
	table1 := make([]int, 33)
	table1[0] = 1
	for i := 1; i < 33; i++ {
		table1[i] = 2 * table1[i-1]
	}

	var n int
	for {
		_, err := fmt.Scanf("%d", &n)
		if err == io.EOF {
			break
		}
		if n <= 0 {
			fmt.Println("X")
			continue
		}
		if n <= 1 {
			fmt.Println(-1)
			continue
		}
		if n > 1 && n < 2 {
			fmt.Println("X")
			continue
		}

		for i := 1; i < 33; i++ {
			if table1[i] >= n {
				fmt.Println(i - 1)
				break
			}
		}

	}
}
