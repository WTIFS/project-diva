package main

import "math"

/***
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.



Example 1:

Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
Example 2:

Input: s = "a"
Output: 0
Example 3:

Input: s = "ab"
Output: 1


Constraints:

1 <= s.length <= 2000
s consists of lower-case English letters only.
*/

func main() {
	println(minCut("aab"))
	println(minCut("aba"))
}

func minCut(s string) int {
	isPalindrome := make([][]bool, len(s)) //isPalindrome表示从s[i(含):j(含)]是否为回文
	for right := range s {
		isPalindrome[right] = make([]bool, len(s))
		for left := 0; left <= right; left++ {
			isPalindrome[left][right] = isPalindrome[left][right] || (s[right] == s[left] && (left >= right-2 || isPalindrome[left+1][right-1]))
		}
	}

	res := make([]int, 1, len(s)+1) //res表示截至i(不含)的最短分法，res[0]=0，用于控制边界
	for right := range s {
		min := math.MaxInt32
		for left := 0; left <= right; left++ {
			if isPalindrome[left][right] {
				min = minInt(min, res[left]+1)
			}
		}
		res = append(res, min)
	}

	return res[len(s)]-1
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
