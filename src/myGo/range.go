package main

import "fmt"

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
