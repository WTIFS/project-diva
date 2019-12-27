package main

import (
	"fmt"
)

func main() {
	var n int
	var lastA = 0
	var lastB = 0
	_, _ = fmt.Scanf("%d", &n)

	//t := time.Now()

	for i := 0; i < n; i++ {
		var b int
		_, _ = fmt.Scanf("%d", &b)

		if b < 100 {
			if lastB == 1 && b == 1 {
				lastA *= 10
				fmt.Println(lastA)
				continue
			}

			for a := lastA + 1; a < 9999999999999999; a++ {
				if a%10 > b {
					continue
				}
				if calc(a) == b {
					lastA = a
					lastB = b
					fmt.Println(a)
					break
				}
			}
		} else {
			left, right := getBound(b)
			for a := left; a <= right; a++ {
				if calc(a) == b {
					lastA = a
					lastB = b
					fmt.Println(a)
					break
				}
			}
		}

	}

	//fmt.Println(time.Now().Sub(t).Nanoseconds()/1e6, " ms")
}

func calc(a int) int {
	var sum = 0
	for a > 0 {
		sum += (a % 10)
		a = a / 10
	}
	return sum
}

//1000000000000000
//4999999999999999

//返回查询上界
func getBound(b int) (int, int) {
	bits := make([]int, 0)
	sum := 0
	left, right := 0, 0
	for {
		if sum+9 > b {
			break
		}
		bits = append(bits, 9)
		sum += 9
	}
	//fmt.Println(bits)
	//fmt.Println(sum)

	candidates := []int{1, 2, 3, 4, 5, 6, 7, 8}
	for _, candidate := range candidates {
		if sum+candidate <= b {
			left = calcBound(candidate, bits)
		} else {
			right = calcBound(candidate, bits)
		}
	}

	return left, right
}

func calcBound(left int, bits []int) int {
	sum := left
	for _, v := range bits {
		sum = sum*10 + v
	}
	return sum
}

/**
我们有一个严格递增的正整数序列 a1, ..., an. 基于它我们生成了一个新的正整数序列 b1, ..., bn, bi  是 ai's 十进制表示下各位数字之和. 例如 991 对应的是19.
之后ai序列就丢失了
我们希望能够基于bi  序列重新构建出a 序列，在有很多可能的情况下，我们希望每个ai能够保持尽可能的小

*/