package main

import "fmt"

/***
slice实际上的结构是：
struct {
	data unsafe.Pointer //指向数组中某一元素的指针
	len  int            //切片长度
	cap  int            //切片容量
}

因此两个引用同一底层数组的切片，其中一个发生元素修改，可能会影响另一个切片
*/

func main() {

	a := [2]int{}
	b := a[:0]  //b指向a的第0个元素，长度为1，容量为2
	c := a[0:0] //同上
	d := a[1:]  //d指向a的第一个元素，长度和容量均为1

	//a虽然长度为2，但是可以从下标2开始截取的
	e := a[2:]
	e = append(e, 3)
	//e: [3]
	fmt.Printf("e: %v\n", e)

	fmt.Println(cap(a), cap(b), cap(c), cap(d), cap(e))
	//abc 的 capacity 均为 2，d的cap为1

	//a: [0 0], b: [], c: [], d: [0]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//append 没有扩容，因此 b 的 append 会连带改变底层a数组的值
	b = append(b, 1)
	//a: [1 0], b: [1], c: [], d: [0]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//这次 b 的 append 连带修改了a、c、d
	c = append(b, 2)
	//可以看到a、b、c的指针都是一样的，d的指针 = a[0] + int占用的长度(8字节)
	//aptr: 0xc000016070, bptr: 0xc000016070, cptr: 0xc000016070, dptr: 0xc000016078
	fmt.Printf("aptr: %v, bptr: %v, cptr: %v, dptr: %v\n", &a[0], &b[0], &c[0], &d[0])
	//a: [1 2], b: [1], c: [1 2], d: [2]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//同上
	_ = append(b, 3)
	//a: [1 3], b: [1], c: [1 3], d: [3]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)

	//因此会有这种线下：x里附加的明明是2，y里附加3，结果却是x里也是2
	x := append(b, 2)
	y := append(b, 3)
	//a: [1 3], b: [1], c: [1 3], d: [3], x: [1 3], y: [1 3]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v, x: %v, y: %v\n", a, b, c, d, x, y)

	//c此时发生了扩容，等号右侧的返回值换了底层数组
	c = append(c, 4)
	//cap(c)=4，容量翻倍
	//fmt.Println(cap(c))
	//a: [1 3], b: [1], c: [1 3 4], d: [3]
	fmt.Printf("a: %v, b: %v, c: %v, d: %v\n", a, b, c, d)
	//现在再操作c不会影响a、b了
	c[0] = 0
	//a: [1 3], b: [1], c: [0 3 4], d: [3]
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
