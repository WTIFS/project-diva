package main

func main() {
	//短路行为：条件表达式左侧为true时，不会再执行右侧逻辑。下面的表达式是安全的：
	s := ""
	if s != "" && s[0] == 'x' {
		println("yes!!")
	}
}
