package main

import "fmt"

func test() {
	var f = func(s string) {
		fmt.Println(s)
	}
	defer f("a")
	f = nil
	defer f("b")
	defer fmt.Println("c")
}

func main() {
	test()
	//c
	//panic
	//a
}
