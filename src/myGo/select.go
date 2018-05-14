package main

import (
	"time"
	"strconv"
	"fmt"
	"log"
)

func main() {

	//golang 的 select 就是监听 IO 操作，当channel被写入或读取时，触发相应的动作。
	//在执行select语句的时候，运行时系统会自上而下地判断每个case中的发送或接收操作是否可以被立即执行(立即执行：意思是当前Goroutine不会因此操作而被阻塞)
	//A "select" statement chooses which of a set of possible send or receive operations will proceed. It looks similar to a "switch" statement but with the cases all referring to communication operations.
	c1 := make(chan string)
	c2 := make(chan string)
	//c1 <- "1"
	go func() {
		for i:=0; i<3; i++ {
			time.Sleep(time.Millisecond * 150)
			c1 <- "msg 1 with index " + strconv.Itoa(i)
		}
	} ()

	go func() {
		for j:=0; j <3; j++ {
			time.Sleep(time.Millisecond * 150)
			c2 <- "msg 2 with index " + strconv.Itoa(j)
		}
	} ()

	//除 default 外，如果只有一个 case 语句评估通过，那么就执行这个case里的语句；
	//除 default 外，如果有多个 case 语句评估通过，那么通过伪随机的方式随机选一个；
	//如果 default 外的 case 语句都没有通过评估，那么执行 default 里的语句；
	//如果没有 default，那么 代码块会被阻塞，直到有一个 case 通过评估；否则一直阻塞
	//对nil channel进行操作会导致永久阻塞
	//可以使用break语句来终止select语句的执行。
	//所有跟在case关键字右边的发送语句或接收语句中的通道表达式和元素表达式都会先被求值。无论它们所在的case是否有可能被选择都会这样。

	for i:=0; i<6; i++ {
		select {
		case msg1 := <-c1:
			fmt.Println(msg1)
		case msg2 := <-c2:
			fmt.Println(msg2)
			//default:
			//	fmt.Println("defalut")
		}
	}

	c3 := make(chan int)
	quit := make(chan int)

	//produce data
	go func(){
		for i:= 0; i < 10; i++ {
			log.Println("channel data item ", <- c3)
		}
		quit <- 0
	}()


	x3, y3 := 0, 1
	for {
		select {
			case c3 <- x3:
				x3, y3 = y3, x3 + y3
			case <- quit:
				fmt.Println("quit")
				return //这里退出for
		}
	}
}