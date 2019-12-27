package main

import "fmt"

func main() {
	var n int
	var heightMap = make(map[int]int)
	var max = 0
	_, _ = fmt.Scanf("%d", &n)

	for i := 0; i < n; i++ {
		var a int
		_, _ = fmt.Scanf("%d", &a)
		heightMap[a]++
	}

	for height, cnt := range heightMap {
		if cnt+heightMap[height+1] > max {
			max = cnt + heightMap[height+1]
		}
	}

	fmt.Println(max)
}


/*
题目描述
女神决定从在探探里右滑过自己的粉丝里选取一支仪仗队，仪仗队嘛，站着整齐才好，要求所有粉丝的身高差不得超过1cm。
求从粉丝中能选出的最多人数
输入
第一行是粉丝数量。n < 100000. (开玩笑，女神的粉丝能少了吗）
第二行以后是每个粉丝的身高。身高嘛，你懂的（我怎么听说擎天柱大哥也用探探呢）。
输出
能选取的仪仗队的最大人数
样例输入 Copy
7
170
172
171
171
172
180
173
 */