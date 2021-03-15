package main

import (
	"github.com/wtifs/project-diva/src/myLib"
	"math"
)

/***
The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Return the knight's minimum initial health so that he can rescue the princess.

Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

Example 1:


Input: dungeon = [
[-2,-3,3],
[-5,-10,1],
[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.

Example 2:
Input: dungeon = [[0]]
Output: 1

*/

func main() {
	testCases := [][][]int{
		{{-2, -3, 3}, {-5, -10, 1}, {10, 30, -5}},
		{{0}},
	}
	for _, tt := range testCases {
		println(calculateMinimumHP(tt))
	}
}

//需要从右下角倒推
func calculateMinimumHP(dungeon [][]int) int {
	rows, cols := len(dungeon), len(dungeon[0])
	//冗余一行一列，作为边界
	res := make([][]int, rows+1)
	for i := range res {
		res[i] = make([]int, cols+1)
		for j := range res[i] {
			res[i][j] = math.MaxInt32
		}
	}
	//到达右下角时至少需要1的体力
	res[rows-1][cols] = 1
	res[rows][cols-1] = 1

	for i := rows - 1; i >= 0; i-- {
		for j := cols - 1; j >= 0; j-- {
			need := myLib.MinInt(res[i][j+1], res[i+1][j]) - dungeon[i][j] //到达该格时需要保存的体力数
			if need <= 0 {
				need = 1
			}
			res[i][j] = need
		}
	}
	return res[0][0]
}

//func calculateMinimumHP(dungeon [][]int) int {
//	min := math.MaxInt32
//	for i, row := range dungeon {
//		for j := range row {
//			if i == 0 && j == 0 {
//				continue
//			}
//			left, top := math.MinInt32, math.MinInt32
//			if i > 0 {
//				top = dungeon[i-1][j]
//			}
//			if j > 0 {
//				left = dungeon[i][j-1]
//			}
//			dungeon[i][j] += myLib.MaxInt(left, top)
//			min = myLib.MinInt(min, dungeon[i][j])
//		}
//	}
//	return 1 - min
//}
