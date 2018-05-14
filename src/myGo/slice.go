package main

import "fmt"

//Go 语言切片(Slice)
//Go 语言切片是对数组的抽象。
//
//Go 数组的长度不可改变，在特定场景中这样的集合就不太适用，Go中提供了一种灵活，功能强悍的内置类型切片("动态数组"),与数组相比切片的长度是不固定的，可以追加元素，在追加时可能使切片的容量增大

//定义切片
//你可以声明一个未指定大小的数组来定义切片, 切片不需要说明长度。
func main() {
	var array1 [5]int //带长度的就是array
	var slice1 []int //不带长度的是slice
	//make([]T, length, capacity) capacity为可选参数。

	fmt.Println(array1)

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

	modifySlice(slice3)
	fmt.Println(slice3)

}

func modifySlice(a []int) {
	a[0] = -1
}


//切片的生长（copy and append 函数）
//要增加切片的容量必须创建一个新的、更大容量的切片，然后将原有切片的内容复制到新的切片。 整个技术是一些支持动态数组语言的常见实现。下面的例子将切片 s 容量翻倍，先创建一个2倍 容量的新切片 t ，复制 s 的元素到 t ，然后将 t 赋值给 s ：
//
//t := make([]byte, len(s), (cap(s)+1)*2) // +1 in case cap(s) == 0
//for i := range s {
//t[i] = s[i]
//}
//s = t
//循环中复制的操作可以由 copy 内置函数替代。copy 函数将源切片的元素复制到目的切片。 它返回复制元素的数目。
//
//func copy(dst, src []T) int
//copy 函数支持不同长度的切片之间的复制（它只复制较短切片的长度个元素）。 此外， copy 函数可以正确处理源和目的切片有重叠的情况。
//
//使用 copy 函数，我们可以简化上面的代码片段：
//
//t := make([]byte, len(s), (cap(s)+1)*2)
//copy(t, s)
//s = t
//一个常见的操作是将数据追加到切片的尾部。下面的函数将元素追加到切片尾部， 必要的话会增加切片的容量，最后返回更新的切片：
//
func AppendByte(slice []byte, data ...byte) []byte {
	m := len(slice)
	n := m + len(data)
	if n > cap(slice) { // if necessary, reallocate
		// allocate double what's needed, for future growth.
		newSlice := make([]byte, (n+1)*2)
		copy(newSlice, slice)
		slice = newSlice
	}
	slice = slice[0:n]
	copy(slice[m:n], data)
	return slice
}
//下面是 AppendByte 的一种用法：
//
//p := []byte{2, 3, 5}
//p = AppendByte(p, 7, 11, 13)
//// p == []byte{2, 3, 5, 7, 11, 13}

//如果是要将一个切片追加到另一个切片尾部，需要使用 ... 语法将第2个参数展开为参数列表。
//a := []string{"John", "Paul"}
//b := []string{"George", "Ringo", "Pete"}
//a = append(a, b...) // equivalent to "append(a, b[0], b[1], b[2])"
//a == []string{"John", "Paul", "George", "Ringo", "Pete"}