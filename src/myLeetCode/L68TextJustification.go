package main

import (
	"fmt"
	"strings"
)

/***
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified becase it contains only one word.

Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/

func main() {
	c := []string{"Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"}
	res := fullJustify(c, 20)
	for _, row := range res {
		fmt.Println(row)
	}

	c = []string{"What","must","be","acknowledgment","shall","be"}
	res = fullJustify(c, 16)
	for _, row := range res {
		fmt.Println(row)
	}
}

func fullJustify(words []string, maxWidth int) []string {
	res := make([]string, 0, len(words))

	row := make([]string, 0)
	rowLenWithSpace := 0
	rowLenWthNoSpace := 0
	for _, s := range words {
		sLen := len(s)
		//如果本行已有字符，则后面的字符要算上空格
		if rowLenWithSpace > 0 {
			sLen += 1
		}

		//如果超长，则保存结果，并新起一行
		if rowLenWithSpace+sLen > maxWidth {
			res = append(res, adjustRow(row, rowLenWthNoSpace, maxWidth))
			row = []string{s}
			rowLenWthNoSpace = len(s)
			rowLenWithSpace = len(s)
			continue
		}

		//没有超长，则将字符保存到本行
		row = append(row, s)
		rowLenWithSpace += sLen
		rowLenWthNoSpace += len(s)
	}

	//如果有剩余行
	if len(row) > 0 {
		res = append(res, adjustRow(row, rowLenWthNoSpace, maxWidth))
	}

	//处理最后一行
	newLastRow := ""
	lastRow := res[len(res)-1]
	lastRowSs := strings.Split(lastRow, " ")
	for _, s := range lastRowSs {
		if s == "" {
			continue
		}
		newLastRow += s
		if len(newLastRow) < maxWidth {
			newLastRow += " "
		}
	}
	newLastRow += multiplySpace(maxWidth-len(newLastRow))

	res[len(res)-1] = newLastRow

	return res
}

//返回长度为n的空格
func multiplySpace(n int) string {
	res := ""
	for i := 0; i < n; i++ {
		res += " "
	}
	return res
}

//向字符数组中插入空格
func adjustRow(ss []string, strLen, maxWidth int) string {
	spaceLen := maxWidth - strLen
	wordCnt := len(ss) - 1
	if wordCnt == 0 {
		return ss[0] + multiplySpace(spaceLen)
	}

	tabLen := spaceLen / wordCnt
	tab := multiplySpace(tabLen)
	res := ""

	if spaceLen%wordCnt == 0 {
		res = strings.Join(ss, tab)
	} else {
		extraTabCount := spaceLen % wordCnt
		for i, s := range ss {
			newTab := ""
			if i < len(ss)-1 {
				newTab = tab
				if extraTabCount > 0 {
					newTab += " "
					extraTabCount--
				}
			}
			res += s + newTab
		}
	}
	res += multiplySpace(maxWidth-len(res))
	return res
}
