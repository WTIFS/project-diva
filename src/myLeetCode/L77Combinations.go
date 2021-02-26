package main

import "fmt"

/***

77. Combinations
Medium

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

You may return the answer in any order.


Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Example 2:

Input: n = 1, k = 1
Output: [[1]]


Constraints:

1 <= n <= 20
1 <= k <= n

*/

var res [][]int

func main() {
	fmt.Println(combination(4, 2))
	fmt.Println(combination(4, 3))
	fmt.Println(combination(1, 1))
	fmt.Println(combination(6, 3))
}

func combination(n, k int) [][]int {
	res = make([][]int, 0, n)
	chosen := make([]int, k)
	genCombination(chosen, 1, n, 0, k)
	return res
}

func genCombination(chosen []int, minCandidate, maxCandidate, cnt, k int) {
	if cnt == k {
		row := make([]int, k)
		copy(row, chosen)
		res = append(res, row)
		return
	}
	for i := minCandidate; i <= maxCandidate; i++ {
		chosen[cnt] = i
		genCombination(chosen, i+1, maxCandidate, cnt+1, k)
	}
}
