/**
问题 A: 字符串处理(10分)
时间限制: 10 Sec  内存限制: 256 MB
提交: 228  解决: 28
[提交][状态][讨论版][命题人:admin]
题目描述
s = a ^ p 表示字符串s，可以由字符串a 连续拼接p次后得到

对于任意给定的字符串s，我们想计算出最大的p为多少

比如

"aaaa" = "a" ^ 4   最大的p=4

"abababab" = "ab" ^ 4 = "abab" ^ 2 最大的p=4

"abcd" = "abcd" ^ 1 最大的p=1



输入
每行一个字符串s, 字符串s的长度不会超过150万

如果输入的字符串s只包含一个字符0， 则表示输入结束， 本行不需要输出p

输出
对每一个字符串s，输出最大的p

样例输入
abcd
aaaa
abababab
abaaabaaabaa
0
样例输出
1
4
4
3
 */



package main

import (
	"fmt"
	"io"
)

func main() {

	for {
		var s string
		_, err := fmt.Scanf("%s", &s)
		if s == "0" || err == io.EOF {
			break
		}
		found := false
		l := len(s)
		for templateLength := 1; templateLength <= len(s)/2; templateLength++ {
			if l%templateLength > 0 {
				continue
			}
			segmentCount := l/templateLength
			subStr := s[0:templateLength]
			b := ""
			for j:=0; j< segmentCount; j++ {
				b += subStr
			}
			if b==s {
				found = true
				fmt.Println(segmentCount)
				break
			}
		}
		if !found {
			fmt.Println(1)
		}

	}
}
