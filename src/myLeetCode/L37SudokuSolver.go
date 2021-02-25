package main

import "fmt"

/***
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

Input: board = {{"5","3",".",".","7",".",".",".","."},{"6",".",".","1","9","5",".",".","."},{".","9","8",".",".",".",".","6","."},{"8",".",".",".","6",".",".",".","3"},{"4",".",".","8",".","3",".",".","1"},{"7",".",".",".","2",".",".",".","6"},{".","6",".",".",".",".","2","8","."},{".",".",".","4","1","9",".",".","5"},{".",".",".",".","8",".",".","7","9"}}
Output: {{"5","3","4","6","7","8","9","1","2"},{"6","7","2","1","9","5","3","4","8"},{"1","9","8","3","4","2","5","6","7"},{"8","5","9","7","6","1","4","2","3"},{"4","2","6","8","5","3","7","9","1"},{"7","1","3","9","2","4","8","5","6"},{"9","6","1","5","3","7","2","8","4"},{"2","8","7","4","1","9","6","3","5"},{"3","4","5","2","8","6","1","7","9"}}

Constraints:

board.length == 9
board{i}.length == 9
board{i}{j} is a digit or '.'.
It is guaranteed that the input board has only one solution.
*/

func main() {
	board := [][]byte{
		{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}

	solveSudoku(board)

	for _, row := range board {
		fmt.Println()
		for _, num := range row {
			fmt.Printf("%c ", num)
		}
	}
	//fmt.Println(board)
}

func solveSudoku(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			if board[i][j] == '.' {
				for num := byte(1); num <= 9; num++ {
					c := num + '0'
					if isValidSudoku(board, i, j, c) {
						board[i][j] = c
						if solveSudoku(board) {
							return true
						} else {
							board[i][j] = '.'
						}
					}
				}
				return false
			}
		}
	}
	return true
}

func isValidSudoku(board [][]byte, row, column int, c byte) bool {
	for i := 0; i < 9; i++ {
		if board[i][column] == c {
			return false
		}
	}

	for i := 0; i < 9; i++ {
		if board[row][i] == c {
			return false
		}
	}

	for i := 0; i < 9; i++ {
		if board[3*(row/3)+i/3][3*(column/3)+i%3] == c {
			return false
		}
	}
	return true
}
