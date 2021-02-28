package main

import "fmt"

/**
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example 1:
Input: matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

Example 2:
Input: matrix = []
Output: 0

Example 3:
Input: matrix = [[0]]
Output: 0

Example 4:
Input: matrix = [[1]]
Output: 1

Example 5:
Input: matrix = [[0,0]]
Output: 0
*/

func main() {
	fmt.Println(maximalRectangle([][]byte{
		{'1', '0', '1', '0', '0'},
		{'1', '0', '1', '1', '1'},
		{'1', '1', '1', '1', '1'},
		{'1', '0', '0', '1', '0'}}))

	//fmt.Println(maximalRectangle([][]byte{}))
	//fmt.Println(maximalRectangle([][]byte{{'0'}}))
	fmt.Println(maximalRectangle([][]byte{{'1'}}))
	//fmt.Println(maximalRectangle([][]byte{{'0', '1'}}))
}

func maximalRectangle(matrix [][]byte) int {
	if len(matrix) == 0 {
		return 0
	}
	max := 0

	//左侧长、上侧方形的长宽
	heights := make([]int, len(matrix[0])+1)

	for _, row := range matrix {
		//left：左侧连续1最长的长度
		stack := IntStack{C: make([]int, 0)}
		//这里放一个-1，后面max里就不用判断stack非空了
		stack.Push(-1)
		for j := 0; j < len(row)+1; j++ {
			if j < len(row) && row[j] == '1' {
				heights[j] += 1
			} else {
				heights[j] = 0
			}

			//本次高度比前面的小时，清除之前所有更高的
			for stack.Top() >= 0 && heights[stack.Top()] >= heights[j] {
				//和左侧 之前的长方形比面积
				max = maxInt(max, heights[stack.Pop()]*(j-1-stack.Top()))
			}

			stack.Push(j)
		}
	}

	return max
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

type IntStack struct {
	C []int
}

func (self *IntStack) Push(s int) {
	self.C = append(self.C, s)
}

func (self *IntStack) Pop() int {
	var res int
	if len(self.C) > 0 {
		res = self.C[len(self.C)-1]
		self.C = self.C[:len(self.C)-1]
	}
	return res
}

func (self *IntStack) Top() int {
	return self.C[len(self.C)-1]
}

func (self *IntStack) IsNotEmpty() bool {
	return len(self.C) > 0
}
