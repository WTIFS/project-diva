package main

/***
Given two strings s and t, return the number of distinct subsequences of s which equals t.

A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

It is guaranteed the answer fits on a 32-bit signed integer.



Example 1:
Input: s = "rabbbit", t = "rabbit"
Output: 3

Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
rabbbit
rabbbit
rabbbit

Example 2:
Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
babgbag
babgbag
babgbag
babgbag
babgbag


Constraints:

0 <= s.length, t.length <= 1000
s and t consist of English letters.
*/

func main() {
	println(numDistinct("rabbbit", "rabbit"))
	println(numDistinct("babgbag", "bag"))
	println(numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc", "bcddceeeebecbc"))
}

//递归，超时
func numDistinct(s string, t string) int {
	if t == "" {
		return 1
	}
	res := 0
	for i := 0; i < len(s); i++ {
		if s[i] == t[0] {
			res += numDistinct(s[i+1:], t[1:])
		}
	}
	return res
}

//DP
func numDistinct2(s string, t string) int {
	//res[i][j] means t[:i] compare s[:j]
	//i, j represents length
	res := make([][]int, len(t)+1)
	for i := range res {
		res[i] = make([]int, len(s)+1)
	}
	//compare s[j] with empty string, always 1; also avoid boundary
	for j := 0; j <= len(s); j++ {
		res[0][j] = 1
	}

	for i := 0; i < len(t); i++ {
		for j := 0; j < len(s); j++ {
			if t[i] == s[j] {
				res[i+1][j+1] = res[i][j] + res[i+1][j] //pick j: res[i+1][j]; not pick j: res[i][j]
			} else {
				res[i+1][j+1] = res[i+1][j] //not pick j
			}
		}
	}
	return res[len(t)][len(s)]
}
