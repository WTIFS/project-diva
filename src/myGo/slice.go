package main

import "fmt"

//Go 语言切片(Slice)
//Go 语言切片是对数组的抽象。
//
//Go 数组的长度不可改变，在特定场景中这样的集合就不太适用，Go中提供了一种灵活，功能强悍的内置类型切片("动态数组"),与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大

//定义切片
//你可以声明一个未指定大小的数组来定义切片, 切片不需要说明长度。
func main() {
	var slice1 []int
	//make([]T, length, capacity) capacity为可选参数。
	var slice2 = make([]int, 2, 5)
	fmt.Println(slice1, slice2)

	s := slice2[:]
	fmt.Println(s)

	//start: include end: exclude
	s = slice2[0:1]
	fmt.Println(s)

	fmt.Println(len(slice1))
	fmt.Println(cap(slice1))
	fmt.Println(slice1)

	slice2 = append(slice1, 1)
	fmt.Println(slice1)
	fmt.Println(slice2)

	slice3 := make([]int, 2, 4)
	copy(slice3, slice2)
	fmt.Println(slice3)

}