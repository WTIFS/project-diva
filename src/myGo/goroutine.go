package main

import (
	"fmt"
	"time"
	"strconv"
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



func main() {
	go say("r1", 10)
	say("r2", 5)






}