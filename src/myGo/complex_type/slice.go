package main

import "fmt"

/***
slice实际上的结构是：
struct {
	data *ptr //指向数组中某一元素的指针
	len  int  //切片长度
	cap  int  //切片容量
}

因此两个引用同一底层数组的切片，其中一个发生元素修改，可能会影响另一个切片
*/

func main() {

	a := [2]int{}
	b := a[:0]  //b指向a的第0个元素，长度为1，容量为2
	c := a[0:0] //同上
	d := a[1:]  //d指向a的第一个元素，长度和容量均为1

	fmt.Println(cap(a), cap(b), cap(c), cap(d))
	//abc 的 capacity 均为 2，d的cap为1

	//a: [0 0], b: [], c: [], d: [0]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//append 没有扩容，因此 b 的 append 会连带改变底层a数组的值
	b = append(b, 1)
	//a: [1 0], b: [1], c: [], d: [0]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//这次 b 的 append 连带修改了a、d
	c = append(b, 2)
	//a: [1 2], b: [1], c: [1 2], d: [2]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//a、c、d的值都被改动了
	_ = append(b, 3)
	//a: [1 3], b: [1], c: [1 3], d: [3]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//c此时发生了扩容，等号右侧的返回值换了底层数组
	c = append(c, 4)
	//a: [1 3], b: [1], c: [1 3 4], d: [3]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)
	//现在再操作c不会影响a、b了
	c[0] = 0
	//a: [1 3], b: [1], c: [0 3 4]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//在函数里也一样，如果未发生扩容，会连带修改a
	appendToIntSlice(b, 5)
	appendToIntSlice(b, 6)
	//a: [1 6], b: [1], c: [0 3 4], d: [6]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)
}

func appendToIntSlice(a []int, num int) {
	a = append(a, num)
}
