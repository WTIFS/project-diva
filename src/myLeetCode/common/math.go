package common

import "math"

func MinInt(a, b int) int {
	return int(math.Min(float64(a), float64(b)))
}

func MinInts(nums ...int) int {
	min := math.MaxInt32
	for _, num := range nums {
		if num < min {
			min = num
		}
	}
	return min
}
