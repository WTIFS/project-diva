package main

import (
	"fmt"
	"strings"
)

var cache = make(map[string]map[string]bool)

func main() {
	var n int
	var maxLen = 0
	_, _ = fmt.Scanf("%d", &n)

	var strs = make([]string, n)
	for i := 0; i < n; i++ {
		_, _ = fmt.Scanf("%s", &strs[i])
	}

	res := f(strs)
	for s := range res {
		if len(s) > maxLen {
			maxLen = len(s)
		}
		//println(s)
	}

	fmt.Println(maxLen)
}

func f(strs []string) map[string]bool {
	var res = make(map[string]bool)
	if len(strs) == 0 {
		return res
	}

	if len(strs) == 1 {
		res[strs[0]] = true
		return res
	}

	cacheKey := strings.Join(strs, ",")
	if cacheRes, has := cache[cacheKey]; has {
		return cacheRes
	}

	combinationMap := make(map[string]bool)

	for i := 0; i < len(strs); i++ {
		selectedWord := strs[i]
		combinationMap[selectedWord] = true
		otherWords := copyExcept(strs, i)
		otherCombs := f(otherWords)
		//fmt.Println(otherCombs)

		for comb := range otherCombs {
			res[comb] = true
			if selectedWord[0] == comb[len(comb)-1] {
				res[comb+selectedWord] = true
			}

			if selectedWord[len(selectedWord)-1] == comb[0] {
				res[selectedWord+comb] = true
			}
		}
	}

	cache[cacheKey] = res
	return res
}

func copyExcept(strs []string, except int) []string {
	res := make([]string, 0, len(strs))
	for i, s := range strs {
		if i != except {
			res = append(res, s)
		}
	}
	return res
}

/*
3
aaaaa
iauoe
eia
*/


/**
一对双胞胎宝宝9个月了，她们已经掌握了一种独特的语言，婴儿语，婴儿语单词全部由a,e,i,o,u五个元音组成。例如ao, ai,iou,ooi。
她们很喜欢玩接龙游戏。接龙规则是先选好一组婴儿单词，然后每个宝宝依次从其中挑选一个单词，另一位就会用单词尾部的最后一个元音做开头的单词接龙。以此类推。
游戏可以从任何一个单词开始。任何单词禁止说两遍。

例如
宝宝A：ai
宝宝B: ioo
宝宝A: ooi
宝宝B:.....（无法接下去）
所有的是单词构成了一条龙（这里是aiiooooi)。
求选好一组单词后，两个宝宝所能接龙的最大长度。




输入
第一行为一个整数n,表示词典里有多少个单词。
后续n行，每行一个单词 1<=n<=16
输出
接龙最大长度
 */