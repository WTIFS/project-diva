package main

import (
	"fmt"
	"strconv"
)

func main() {
	var s string
	_, _ = fmt.Scanf("%s", &s)
	c := []rune(s)

	var s2 = dfs(c, 0, len(c)-1)
	fmt.Println(string(s2))
}

func dfs(chars []rune, s, e int) []rune {
	if s < 0 || e > len(chars) {
		return nil
	}
	//println(string(chars[s:e+1]))

	//是最深的括号了
	var isDeepest = true
	for i := s; i <= e; i++ {
		if chars[i] == '(' {
			isDeepest = false
		}
	}
	if isDeepest {
		return chars[s : e+1]
	}

	var repeatTimeStr = ""
	var repeatTimes = 1

	//括号计数
	var c1 = 0
	var left, right = 0, 0
	var res = make([]rune, 0)
	var isFirstFloor = true

	for i := s; i <= e; i++ {
		c := chars[i]
		if c >= '0' && c <= '9' {
			if isFirstFloor {
				repeatTimeStr += string(c)
			}
			continue
		}
		if (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') {
			if isFirstFloor {
				res = append(res, c)
			}
			continue
		}
		if c == '(' {
			c1++
			if isFirstFloor {
				left = i
			}
			isFirstFloor = false
			continue
		}
		if c == ')' {
			c1--
			right = i
		}
		if c1 == 0 {
			//println(left, right)
			repeatTimes, _ = strconv.Atoi(repeatTimeStr)
			subChars := dfs(chars, left+1, right-1)
			for i := 0; i < repeatTimes; i++ {
				res = append(res, subChars...)
			}
			repeatTimeStr = ""
			isFirstFloor = true
		}
	}
	return res
}

//2(abc2(2(helo)))
/*
题目描述
给定一个经过编码的字符串，输出它解码后的字符串。
编码规则为: k(encoded_string)，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2(4) 的输入。
输入
一行压缩前的字符串
输出
解压后的字符串
 */