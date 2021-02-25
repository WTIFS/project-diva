package main

/***

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4

*/

//total m*n nums
//i = index / n
//j = index % n

func main() {
	a := [][]int{
		{1, 3, 5, 7},
		{10, 11, 16, 20},
		{23, 30, 34, 60},
	}
	//println(searchMatrix(a, 0))
	println(searchMatrix(a, 1))
	println(!searchMatrix(a, 2))
	println(searchMatrix(a, 3))
	println(searchMatrix(a, 10))
	println(!searchMatrix(a, 15))
	println(searchMatrix(a, 60))
	println(!searchMatrix(a, 61))
}

func searchMatrix(matrix [][]int, target int) bool {
	left := 0
	right := len(matrix)*len(matrix[0]) - 1
	return binarySearchMatrix(matrix, left, right, target)
}

func binarySearchMatrix(matrix [][]int, left, right, target int) bool {
	n := len(matrix[0])

	if left >= right {
		return matrix[left/n][left%n] == target
	}

	if right-left <= 5 {
		for i := left; i <= right; i++ {
			if matrix[i/n][i%n] == target {
				return true
			}
		}
		return false
	}

	pivot := (left + right) / 2
	pivotValue := matrix[pivot/n][pivot%n]
	if pivotValue >= target {
		return binarySearchMatrix(matrix, left, pivot, target)
	} else {
		return binarySearchMatrix(matrix, pivot+1, right, target)
	}

}
