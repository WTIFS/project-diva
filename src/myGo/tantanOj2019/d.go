package main

import (
	"fmt"
)

var distance [][]int
var matrixMap = make(map[int][]int)

func main() {
	var n, start int
	_, _ = fmt.Scanf("%d %d", &n, &start)

	distance = make([][]int, n+1)
	for i := range distance {
		distance[i] = make([]int, n+1)
	}

	for i := 0; i < n; i++ {
		var x, y int
		_, _ = fmt.Scanf("%d %d", &x, &y)
		matrixMap[x] = append(matrixMap[x], y)
		matrixMap[y] = append(matrixMap[y], x)
		distance[x][y] = 1
		distance[y][x] = 1
	}


			dfsTree(1, n)


	for i:=0; i<n; i++ {
		for j := 1; j <= n; j++ {
			fmt.Print(distance[i][j], " ")
		}
		fmt.Println()
	}
	return

	//小度先走
	//nextLocations := matrixMap[start]
	//nextLocations = append(nextLocations, start) //可以停留
	//for _, nextLoc := range nextLocations {
	//	steps := find(matrixMap, nextLoc, 1, 0)
	//}
	//
	//for {
	//	break
	//}
}

//func find(matrixMap map[int][]int, duLoc, aiLoc, steps int) (int) {
//	if duLoc == aiLoc {
//		return steps
//	}
//	duNextLocations := matrixMap[duLoc]
//	duNextLocations = append(duNextLocations, duLoc) //可以停留
//
//	aiNextLocations := matrixMap[aiLoc]
//
//	for _, duNextLoc := range duNextLocations {
//		for _, aiNextLoc := range aiNextLocations {
//
//		}
//	}
//}

func dfsTree(start int, end int) int {
	if start == end {
		return 0
	}
	if distance[start][end] >= 1 {
		return distance[start][end]
	}
	for _, neighbor := range matrixMap[start] {
		distanceThroughNeighbor := 1 + dfsTree(neighbor, end)
		if distanceThroughNeighbor > distance[start][end] {
			distance[start][end] = distanceThroughNeighbor
			distance[end][start] = distanceThroughNeighbor
		}
	}
	return distance[end][start]
}

/*
题目描述
小爱和小度今天打算玩一个你追我赶的游戏。游戏发生在包含n个节点的一个有根的无向树上。节点 1 是这个树的根节点。
小爱总是从节点1触发， 小度则从节点x出发（x != 1) . 两个人轮换着行动，小度先行动。他们可以选择停留在当前节点，或者移动到相邻的一个节点上去。
当小爱到达了小度所在的节点，游戏就结束了。小爱总是想快一点追到小度， 小度却想着能让小爱多追一会儿。
需要你帮忙判断下，游戏需要多久才能结束



输入
第一行包含两个整数 n 和 x (2≤n≤2·105, 2≤x≤n).
接下来  n - 1 行每一行都包含两个整数 a 和 b (1≤a,b≤n) - 表示树的边。不会有错误的树。
*/
