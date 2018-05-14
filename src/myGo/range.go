package main

import "fmt"

//for循环的 range格式可以对 slice 或者 map 进行迭代循环。
//当使用 for循环遍历一个 slice 时，每次迭代 range将返回两个值。 第一个是当前下标（序号），第二个是该下标所对应元素的一个拷贝。
func main() {
	var array = []string{"a", "b", "c"}
	var m = map[string]int {"a": 0, "b": 1, "c":2}

	for i:= range array {
		fmt.Print(i, ", ")
	}
	fmt.Println()
	fmt.Println()

	for i, v:= range array {
		fmt.Print(i, ", ")
		fmt.Print(v, ", ")
	}
	fmt.Println()
	fmt.Println()

	for key:= range m {
		fmt.Print(key, ", ")
	}
	fmt.Println()
	fmt.Println()

	for key, val:= range m {
		fmt.Print(key, ", ")
		fmt.Print(val, ", ")
	}
	fmt.Println()
	fmt.Println()
}
