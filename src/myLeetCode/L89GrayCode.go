package main

import "fmt"

/**
The gray code is a binary numeral system where two successive values differ in only one bit.

Given an integer n representing the total number of bits in the code, return any sequence of gray code.

A gray code sequence must begin with 0.

Example 1:

Input: n = 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

[0,2,3,1] is also a valid gray code sequence.
00 - 0
10 - 2
11 - 3
01 - 1

Example 2:
Input: n = 1
Output: [0,1]

//观察可发现
//f(3)的结果就是将f(2)倒序遍历一遍，最左侧补上1或0

*/

func main() {
	fmt.Println(grayCode(2))
	fmt.Println(grayCode(3))
}

func grayCode2(n int) []int {
	res := make([]int, 1, 1<<n)
	res[0] = 0
	for i := 0; i < n; i++ {
		base := 1 << i

		for j := base - 1; j >= 0; j-- {
			res = append(res, base|res[j])
		}
	}
	return res

}

func grayCode(n int) []int {
	if n == 0 {
		return []int{0}
	}
	if n == 1 {
		return []int{0, 1}
	}

	res := []int{0, 1}
	base := 1
	for i := 2; i <= n; i++ {
		base *= 2
		row := make([]int, len(res))
		copy(row, res)

		for j := len(res) - 1; j >= 0; j-- {
			row = append(row, base+res[j])
		}
		res = row
	}
	return res
}
