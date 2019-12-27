package main

import (
	"fmt"
	"io"
)

func main() {
	for {
		var a, b int64
		_, err := fmt.Scanf("%d %d", &a, &b)
		if err == io.EOF {
			break
		}
		fmt.Println(a + b)
	}
}
