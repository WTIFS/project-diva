package main

import (
	"fmt"
	"time"
)

//goroutine 是由 Go 运行时环境管理的轻量级线程。
//go f(x, y, z) 开启一个新线程执行f()

//cnt会出现竞争
var cnt=0

func say(tag string, ceil int) {
	fmt.Println(tag, cnt)
	for cnt<ceil {
		cnt++
		time.Sleep(100 * time.Millisecond)
		fmt.Println(tag, cnt)
	}
}

var a1 string
var done bool
func setup() {
	done = true
	time.Sleep(time.Millisecond)
	a1 = "hello"
}

func main() {
	go say("r1", 10)
	say("r2", 5)

	go setup()
	for !done {
	}
	fmt.Println(a1) //打印出的是空值

}