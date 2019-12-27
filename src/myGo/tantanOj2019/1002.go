package main

import (
	"fmt"
	"io"
)

const (
	up    = 1
	down  = 2
	left  = 3
	right = 4
)

var nextDirection = map[int]int{
	down:  left,
	left:  up,
	up:    right,
	right: down,
}

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

	giao(res, 0, n*n, 0, n-1, down, 1)
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

func giao(a [][]int, step, totalSteps, x, y, direction, val int) {
	if step == totalSteps {
		return
	}
	step += 1
	a[x][y] = val
	nextX, nextY := getNextXY(x, y, direction)
	if isOutOfRange(a, nextX, nextY) {
		direction = nextDirection[direction]
		nextX, nextY = getNextXY(x, y, direction)
	}
	giao(a, step, totalSteps, nextX, nextY, direction, val+1)
}

func getNextXY(x, y, direction int) (int, int) {
	switch direction {
	case up:
		return x - 1, y
	case down:
		return x + 1, y
	case left:
		return x, y - 1
	case right:
		return x, y + 1
	}
	return 0, 0
}

func isOutOfRange(a [][]int, x, y int) bool {
	return x < 0 || y < 0 || x >= len(a) || y >= len(a) || a[x][y] != 0
}

//13 14 15 16 1
//12 23 24 17 2
//11 22 25 18 3
//10 21 20 19 4
//9 8 7 6 5

//13 14 15 16 1
//12 23 24 17 2
//11 22 25 18 3
//10 21 20 19 4
//9 8 7 6 5


/*
题目描述
在一个N*N的方阵中，填入1，2，……N*N个数，并要求构成如下的格式：

例如：

N=5

13 14 15 16  1

12 23 24 17  2

11 22 25 18  3

10 21 20 19  4

 9  8  7  6  5


N=6

16 17 18 19 20  1

15 30 31 32 21  2

14 29 36 33 22  3

13 28 35 34 23  4

12 27 26 25 24  5

11 10  9  8  7  6

输入
每个测试文件只包含一组测试数据，每组输入一个N。
输出
输出构成的方阵。
样例输入 Copy
5
样例输出 Copy
13 14 15 16 1
12 23 24 17 2
11 22 25 18 3
10 21 20 19 4
9 8 7 6 5
提示
6

-------------------------

16 17 18 19 20 1
15 30 31 32 21 2
14 29 36 33 22 3
13 28 35 34 23 4
12 27 26 25 24 5
11 10 9 8 7 6
*/