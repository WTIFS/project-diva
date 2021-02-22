package main

import "fmt"

func main() {
	var n int
	var s string
	var res int
	fmt.Scanf("%d %s", &n, &s)

	m := make(map[rune]int)
	for _, c := range s {
		m[c]++
	}

	for i:=0;i<n;i++ {
		var s2 string
		var yes = true

		fmt.Scanf("%s", &s2)
		m2 := make(map[rune]int)
		for _, c := range s2 {
			m2[c]++
		}

		for c, cnt := range m2 {
			if m[c]!=cnt {
				yes = false
			}
		}

		if yes {
			res ++
		}
	}

	fmt.Println(res)
}

/*
题目描述
如果组成两个单词的字母是完全一样的，则成两个单词为孪生单词。每个字母的数量必须相同
例如TanTan和anTanT是孪生单词，但TanTan和TanTa不是。
请你给出一组单词中，给定词的所有孪生单词数量。
 */
