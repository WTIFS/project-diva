package main

import "fmt"

func main() {
	var m map[string]string
	//m["a"] = "b" map初始化前不能赋值
	m = make(map[string]string)
	m["France"] = "Paris"
	m["China"] = "Beijing"
	fmt.Println(m)

	capital, ok := m["China"]
	fmt.Println(capital, ok)

	capital, ok = m["Japan"]
	fmt.Println(capital, ok, capital=="") //"", false, true

	delete(m, "China")
	delete(m, "Japan")
	fmt.Println(m)

}
