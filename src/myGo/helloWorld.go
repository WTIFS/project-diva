//当前程序的包名// 当前程序的包名
//只有 package 名称为 main 的包可以包含 main 函数。
//一个可执行程序有且仅有一个 main 包。
//通过 import 关键字来导入其他非 main 包。
package main

// 导入其他包
import (
	"fmt"
	"unsafe"
)

// 常量定义
const PI = 3.14

//常量还可以用作枚举：
const (
	Unknown = 0
	Female = 1
	Male = 2
)

//全局变量
var name = "chris"

//全局变量允许声明但不使用
var name2 string

type newType int

const i newType = 2

type Book struct{
	title string
	author string
}

type golang interface{}

// 由main函数作为程序入口点启动
func main() {
	fmt.Println("Hello World")
	setVariables()
	_ = sizeOf()
}

//Go语言中，使用大小写来决定该常量、变量、类型、接口、结构或函数是否可以被外部包所调用。

//函数名首字母小写即为 private :
func setVariables() {

	//第一种，指定变量类型，声明后若不赋值，使用默认值
	var a int         //默认=0
	var available bool  //默认false
	var p *int          //默认地址为0, 值为nil
	var pp **int		//指向指针的指针
	var book Book

	var array1 [] int //默认[]
	var array2 [2] int //默认[0 0]
	var array3 = []int{0, 1}
	var array4 = [...]int{0, 2}
	var array5 = []int{0, 3}
	//array5[2] = 1 index out of range
	var array6 [][] int //[]
	var array7 [][1] int //[]
	var array8 [1][] int //[[]]
	var array9= [2][] int {{1}} //[[1][]]

	//第二种，根据值自行判定变量类型。
	var b int = 2
	var c = a + b

	//如果你想要交换两个变量的值，则可以简单地使用 a, b = b, a
	a, b = b, a

	//第三种，省略var, 注意 :=左侧的变量不应该是已经声明过的，否则会导致编译错误
	//只能被用在函数体内，而不可以用于全局变量的声明与赋值
	valid := 5

	//空白标识符 _ 也被用于抛弃值，如值 5 在：_, b = 5, 7 中被抛弃。
	//_ 实际上是一个只写变量，你不能得到它的值。这样做是因为 Go 语言中你必须使用所有被声明的变量，但有时你并不需要使用从一个函数得到的所有返回值
	_ = valid

	//全局变量与局部变量名称可以相同，但是函数内的局部变量会被优先考虑
	var name2 = "asdf"

	book.title = "title"

	//值类型和引用类型
	//所有像 int、float、bool 和 string 这些基本类型都属于值类型，使用这些类型的变量直接指向存在内存中的值：
	fmt.Println(c, available, name, p)
	fmt.Println(array1, array2, array3, array4, array5)
	fmt.Println(array6, array7, array8, array9)

	fmt.Printf("a=%d %T\n", a, a)

	var ptr *int = &a
	fmt.Println(ptr) //地址
	fmt.Println("*ptr=%d\n", *ptr) //值
	fmt.Println(name2)
	a = 32
	pp = &ptr
	fmt.Printf("*ptr=%d\n", *ptr) //32
	fmt.Printf("&a=%#x, ptr=%x\n", &a, ptr) //ptr = &a
	fmt.Println("pp=", pp)
	fmt.Println("*pp=", *pp)
	fmt.Println("**pp=", **pp)

	fmt.Printf("%+v\n", book) //{title:title author:}
}

func forTest() {
	for i:=0; i<=9; i++ {
		print(i, " ")
	}
}

//函数名首字母大写即为 public :
func Printf() {}

func sizeOf() int {
	const (
		a = "abc"
		b = len(a)
		c uintptr = unsafe.Sizeof(a)
		d = 1
	)
	println(a, b, c)
	fmt.Printf("%T", d)
	return b
	//abc 3 16
	//字符串大小为sizeOf(地址) + sizeOf(长度) = 8B(64bit) + 8B = 16B
}

func max(i1, i2 int) int {
	if (i1 >= i2) {
		return i1
	} else {
		return i2
	}
}

//用传递指针参数传递到函数内，以下是交换函数 swap() 使用了引用传递
func swap(i1, i2 *int) {
	var tmp = *i1
	*i1 = *i2
	*i2 = tmp
}

//iota 用法 自增变量
//iota，特殊常量，可以认为是一个可以被编译器修改的常量。
//在每一个const关键字出现时，被重置为0，然后再下一个const出现之前，每出现一次iota，其所代表的数字会自动增加1。
//iota 可以被用作枚举值：
func iotaTest() {
	const (
		a = iota //0
		b = iota //1
		c = iota //2
	)

	//第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：
	//const (
	//	a = iota
	//	b
	//	c
	//)

	//const (
	//	a = iota   //0
	//	b          //1
	//	c          //2
	//	d = "ha"   //独立值，iota += 1
	//	e          //"ha"   iota += 1
	//	f = 100    //iota +=1
	//	g          //100  iota +=1
	//	h = iota   //7,恢复计数
	//	i          //8
	//)

	const (
		i=1<<iota //1
		j=3<<iota //6
		k //12
		l //34
	)
}