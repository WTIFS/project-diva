package myLib

import "math"

func RadixSort(nums []int) []int {
	max := math.MinInt32
	for _, num := range nums {
		if num > max {
			max = num
		}
	}
	bits := 0
	for max > 0 {
		bits++
		max /= 10
	}

	ten := 1
	buckets := make([][]int, 10)
	for i := 0; i < bits; i++ {
		for i := 0; i < 10; i++ {
			buckets[i] = make([]int, 0)
		}
		for _, num := range nums {
			bucket := num / ten % 10
			buckets[bucket] = append(buckets[bucket], num)
		}
		cnt := 0
		for i := 0; i < 10; i++ {
			for _, num := range buckets[i] {
				nums[cnt] = num
				cnt++
			}
		}
		ten *= 10
	}
	return nums
}