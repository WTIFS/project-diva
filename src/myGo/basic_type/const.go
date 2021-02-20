package main

import "fmt"

const (
	a5 = 5 //无类型整数，推迟确定类型，下面实际用到的时候才会实际确定类型，使之暂时维持更高的精度
	a9 = 9
)

func main() {
	var f float64 = 212
	fmt.Println(a5 / a9 * (f - 32)) //5/9的结果是无类型整数，=0
}
