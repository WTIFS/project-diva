package main

import "fmt"

func main() {
	var a = 1
	var b = 2
	var c = float32(a)/float32(b)
	var d = a/b
	//var d = float32(a) * b 报错
	fmt.Println(c)
	fmt.Printf("%.1f\n", c)
	fmt.Printf("%d\n", d) //%!f(int=0)
	fmt.Printf("%.1f\n", d) //%!f(int=0)
}