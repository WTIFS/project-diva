package high_performace

import "testing"

func Fib(n int) int {
	switch n {
	case 0:
		return 0
	case 1:
		return 1
	case 2:
		return 2
	default:
		return Fib(n-1) + Fib(n-2)
	}
}

func BenchmarkFib20(b *testing.B) {
	for n := 0; n < b.N; n++ {
		Fib(20) // run the Fib function b.N times
	}
}