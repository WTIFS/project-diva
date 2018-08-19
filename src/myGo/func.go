package main

import "fmt"

//返回一个函数func(int)，该函数接受int返回int
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i:=0; i<10; i++ {
		fmt.Println(pos(i), neg(-2*i))
	}
}