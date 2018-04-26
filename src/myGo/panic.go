package main

import "fmt"

func a() {
	b()
	c()
}

func b() {
	panic("b error") //throw exception
}

func c() {
	panic("c error")
}

func main() {
	defer func() {
		var r = recover()
		if (r != nil) {
			fmt.Printf("exception caught: %v", r)
		}
	}()
	a()

}
