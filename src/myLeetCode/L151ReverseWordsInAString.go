package main

import "strings"

/***
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
Example 4:

Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"
Example 5:

Input: s = "Alice does not even like bob"
Output: "bob like even not does Alice"
*/

func main() {
	tests := []string{
		"the sky is blue",
		"  hello world  ",
		"a good   example",
		"  Bob    Loves  Alice   ",
		"Alice does not even like bob",
		"    ",
		"asdf",
	}

	for _, test := range tests {
		println(reverseWords(test) == reverseWords2(test))
	}
}

//空间O(1)解法：
//1. 反转整个串
//2. 翻转每个单词
//3. 删除空格

func reverseWords(s string) string {
	word := ""
	parts := make([]string, 0)
	for _, char := range s {
		if char == ' ' {
			if word != "" {
				parts = append(parts, word)
				word = ""
			}
		} else {
			word += string(char)
		}
	}
	if word != "" {
		parts = append(parts, word)
	}

	res := ""
	for i := len(parts) - 1; i > 0; i-- {
		res += parts[i] + " "
	}
	if len(parts) > 0 {
		res += parts[0]
	}

	return res
}

func reverseWords2(s string) string {
	s = strings.Trim(s, " ")
	parts := strings.Split(s, " ")
	newParts := make([]string, 0, len(parts))

	for i := len(parts) - 1; i >= 0; i-- {
		if parts[i] != "" {
			newParts = append(newParts, parts[i])
		}
	}
	return strings.Join(newParts, " ")
}
