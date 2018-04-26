package main

import (
	"fmt"
	"math"
)

/*Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]


Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*/
func shortestToChar(S string, C byte) []int {
	var arr = make([]int, 0)
	var result = make([]int, 0)
	var index = 0
	for i, c := range(S) {
		if (c == int32(C)) {
			arr = append(arr, int(i))
		}
	}
	fmt.Println(arr)
	for i := range(S) {
		if (index+1 < len(arr)) {
			var dist1 = math.Abs(float64(i - arr[index]))
			var dist2 = math.Abs(float64(i - arr[index+1]))
			if (dist1 < dist2) {
				result = append(result, int(dist1))
			} else {
				result = append(result, int(dist2))
				index++
			}
		} else {
			result = append(result, int(math.Abs(float64(i - arr[index]))))
		}

	}
	return result
}

func main() {
	S := "loveleetcode"
	C := byte('e')
	result := shortestToChar(S, C)
	fmt.Println(result)

	S = "aaab"
	C = byte('b')
	result = shortestToChar(S, C)
	fmt.Println(result)
}