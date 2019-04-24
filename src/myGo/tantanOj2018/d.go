/**
问题 D: 机关锁(15分)
时间限制: 1 Sec  内存限制: 128 MB
提交: 9  解决: 3
[提交][状态][讨论版][命题人:admin]
题目描述
下面的矩阵表示了一个机关锁
R2 D1 D2
GO R1 L2
R1 U2 L2
解释：
此机关锁上每格上的文字代表一个动作，U(up)是向上，D(down)是向下，R(right)是向右，L(left)是向左，旁边的数字代表移动几个格子

假设我们从第一列第一行出发(x,表示列，y表示行)(1,1)出发， 按照下面的描述，分别经过了

(1,1), (3,1), (3,3), (1,3), (2,3), (2,1), (2,2), (3,2)到达(1,2)

每个格子都经过了，且只经过了一次， 那么认为(1,1)是这个机关锁的key

如果从(3,1)出发，那么将无法到达(1,1)的格子，所以(3,1)不是这个机关锁的key

从第1列第1行(1,1)开始，对应的内容是R2，向右移动2位，
到达(3,1), 对应的值是D2，向下移动2位
到达(3,3), 对应的值是L2, 向左移动2位
到达(1,3), 对应的值是R1, 向右移动1位
倒带(2,3), 对应的值是U2, 向上移动2位
到达(2,1), 对应的值是D1, 向下移动1位
到达(2,2), 对应的值是R1,向右移动1位
到达(3,2), 对应的值是L2, 向左移动2位
到达(1,2),对应的值是GO
矩阵中一共有9个节点，从（1，1）出发每个格子都经过，且只经过一次后到达GO节点，此时可以说(1,1)是这个机关锁的一个解
按照上面的文字R2，向右移动2格，看到D2，向下移动2格，到最后到达"GO"停止。
这时机关上的每格格子刚好都到且只到过1次。所以这个机关锁的key是1 1.
如果无解，输出0 0

输入
输入文件中将有多个这种机关锁

首先输入一个n， 表示后续有n个测试用例

接下来对每个用例先输入一个linenum，表示有多少行

步长<=9

每一行是一个字符串，用空格分隔

输出
输出每行一个，用两个数字空格分隔，表示机关锁的key

样例输入
3
3
R2 D1 D2
GO R1 L2
R1 U2 L2
5
R3 D3 L1 D3 D1 GO L2
R2 D3 D2 R2 D1 D2 L5
D1 R2 R3 D2 L4 R1 L5
U3 R3 U2 R3 D1 L3 U2
U3 L1 U2 R2 R2 U4 U4
3
R2 D1 D2
GO R1 L2
U2 U2 L1
样例输出
1 1
0 0
1 3
 */

package main

import (
	"fmt"
	"strconv"
	"os"
	"bufio"
	"strings"
)

func main() {
	var inputReader *bufio.Reader
	inputReader = bufio.NewReader(os.Stdin)

	str, _ := inputReader.ReadString('\n')
	for str == "\n" {
		str, _ = inputReader.ReadString('\n')
	}
	str = strings.Trim(str, "\n")
	testCount, _ := strconv.Atoi(str)

	//var testCount int
	//fmt.Scanf("%d", &testCount)



	for testNum := 0; testNum < testCount; testNum++ {
		str, _ := inputReader.ReadString('\n')
		str = strings.Trim(str, "\n")
		n, _ := strconv.Atoi(str)

		count := 0
		matrix := make([][]string, n)
		found := false
		for i := 0; i < n; i++ {
			row := make([]string, 0)

			str, _ := inputReader.ReadString('\n')
			ss := strings.Split(str, " ")
			for _, s := range ss {
				s = strings.Trim(s, "\n")
				if len(s) == 2 {
					row = append(row, s)
					count++
				}
			}

			matrix[i] = row
		}

		for i := 0; i < n && !found; i++ {
			for j := 0; j < n && !found; j++ {
				if findGo(matrix, i, j, 0, n, count) {
					fmt.Printf("%d %d\n", j+1, i+1)
					found = true
				}
			}
		}
		if !found {
			fmt.Println("0 0")
		}

	}
}

func findGo(matrix [][]string, x, y, step, n, count int) bool {
	step++
	//fmt.Println(x, y, step, matrix[x][y])
	if matrix[x][y] == "GO" {
		return step == count
	}
	if (step == count) {
		return matrix[x][y] == "GO"
	}
	i, j := nextStep(x, y, matrix[x][y])
	if i >= 0 && i < len(matrix) && j >= 0 && j < len(matrix[i]) {
		result := findGo(matrix, i, j, step, n, count)
		return result
	}
	return false
}

func nextStep(x, y int, direction string) (int, int) {
	xDirection := 0
	yDirection := 0
	steps, _ := strconv.Atoi(string(direction[1]))
	switch direction[0] {
	case 'D':
		xDirection = 1
	case 'U':
		xDirection = -1
	case 'L':
		yDirection = -1
	case 'R':
		yDirection = 1
	}
	return x + xDirection*steps, y + yDirection*steps
}
