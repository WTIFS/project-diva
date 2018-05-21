package main

import (
	"fmt"
	"reflect"
)

func main() {
	var m map[string]string
	//m["a"] = "b" map初始化前不能赋值
	m = make(map[string]string)
	m["France"] = "Paris"
	m["China"] = "Beijing"
	fmt.Println(m)

	//当从 map 中读取某个不存在的键时，结果是 map 的元素类型的零值
	capital, ok := m["China"]
	fmt.Println(capital, ok)

	capital, ok = m["Japan"]
	fmt.Println(capital, ok, capital=="") //"", false, true

	delete(m, "China")
	delete(m, "Japan")
	fmt.Println(m)

	m2 := make(map[string]interface{})
	m2["France"] = "Paris"
	m2["China"] = 1
	m2["map"] = m
	v1 := m2["France"]
	v2 := m2["China"]
	v3 := m2["map"]
	fmt.Println(v1)
	fmt.Println(v1 == "Paris") //true
	fmt.Println(reflect.TypeOf(v1)) //string

	fmt.Println(v2)
	fmt.Println(v2 == 1) //true
	fmt.Println(reflect.TypeOf(v2)) //int

	fmt.Println(v3)
	fmt.Println(reflect.TypeOf(v3)) //map[string]string
}
