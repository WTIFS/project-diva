package main

import (
	"fmt"
	"reflect"
)

type Nokia struct{
	name string
}
type IPhone struct{
	name string
}

type Phone interface{
	Call()
}

func(nokiaPhone Nokia) Call() {
	fmt.Println("NOKIA")
}

func(iPhone IPhone) Call() {
	fmt.Println("IPHONE")
}

//实现String方法以便支持fmt.Printf
//func(nokia Nokia) String() string {
//	return "NOKIA"
//}
//
//func(iPhone IPhone) String() string {
//	return "IPHONE"
//}

//通过传interface来实现多态
func phoneCall(p Phone) {
	p.Call()
}

func interfaceCall(i interface{}) {
	v := reflect.ValueOf(i) //NOKIA
	k := v.Kind() //ptr
	e := v.Elem() //NOKIA
	k2 := e.Kind() //struct
	fmt.Println("---")
	fmt.Println(v)
	fmt.Println(k)
	fmt.Println(e)
	fmt.Println(k2)

	//查找Call方法，这里首字母必须大写才能被查找到
	callMethod := v.MethodByName("Call")
	callMethod.Call([]reflect.Value{})

	fmt.Println("---")
}

func main() {
	var iphone = new(IPhone)
	var nokia = new(Nokia)
	var phone Phone
	phone = new(Nokia)

	iphone.name = "IPHONE'S NAME"
	nokia.name = "NOKIA'S NAME"

	iphone.Call()
	nokia.Call()
	phone.Call()

	phoneCall(iphone)
	phoneCall(nokia)

	interfaceCall(phone)

	fmt.Println(iphone)
	fmt.Println(nokia)

}