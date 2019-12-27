package main

import "fmt"

func main() {
	var rows, columns, guns int
	_, _ = fmt.Scanf("%d %d %d", &rows, &columns, &guns)

	var matrix = make([][]int, rows)
	for i := 0; i < rows; i++ {
		matrix[i] = make([]int, columns)
	}

	for i := 0; i < guns; i++ {
		var x, y int
		_, _ = fmt.Scanf("%d %d", &x, &y)
		//起始为1
		x -= 1
		y -= 1
		matrix[x][y] = 1

		for i := x; i >= 0; i-- {
			matrix[i][y] = 1
		}
		for i := x; i < rows; i++ {
			matrix[i][y] = 1
		}
		for j := y; j >= 0; j-- {
			matrix[x][j] = 1
		}
		for j := y; j < columns; j++ {
			matrix[x][j] = 1
		}

		for i, j := x, y; i >= 0 && j >= 0 && i < rows && j < columns; {
			matrix[i][j] = 1
			i--
			j--
			//println(x, y)
		}

		for i, j := x, y; i >= 0 && j >= 0 && i < rows && j < columns; {
			matrix[i][j] = 1
			i--
			j++
		}

		for i, j := x, y; i >= 0 && j >= 0 && i < rows && j < columns; {
			matrix[i][j] = 1
			i++
			j--
		}

		for i, j := x, y; i >= 0 && j >= 0 && i < rows && j < columns; {
			matrix[i][j] = 1
			i++
			j++
		}
	}

	cnt := 0
	for i := 0; i < rows; i++ {
		for j := 0; j < columns; j++ {
			if matrix[i][j] == 0 {
				cnt++
			}
		}
	}
	fmt.Println(cnt)
}

/*
题目描述
你参加了真实吃鸡游戏，空投即将降落，整个区域是一个n行m列的矩形区域。
很不幸，区域中有k个炮塔，每个炮塔可以向周围8个方向直线发射激光。 如图
* 0 * 0 *
0 * * * 0
* * P * *
0 * * * 0
* 0 * 0 *
P是炮塔，*号为激光可以攻击到的区域。
请问你可以降落的安全的地点数量是多少？ (炮塔所在点和能攻击到的点，落地都会死亡）
1<=n<=30000
1<=m<=30000
1<=k<=600
输入
第一行为区域的行数、列数、炮台的数量即
n m k
后续的行为每个炮台的坐标，如
3 5
4 7
表示3行5列、4行7列分别有两个炮台

输出
可以降落的安全区域数量，整数，如
100
表示有100个可降落的安全区域
*/
