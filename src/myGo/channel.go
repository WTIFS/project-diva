package main

import "fmt"

//channel 是有类型的管道，可以用 channel 操作符 <-对其发送或者接收值。
func sum(a []int, c chan int) {
	sum := 0
	for _, v := range a {
		sum += v
	}
	c <- sum //将和送入 c
}

func main() {
	a := []int{1, 2, 3, -1, -2, -3}
	c := make(chan int) //和 map 与 slice 一样，channel 使用前必须创建：
	go sum(a[:len(a)/2], c)
	go sum(a[len(a)/2:], c)
	x, y := <-c, <-c //-6, 6
	fmt.Println(x, y)

	//向带缓冲的 channel 发送数据的时候，只有在缓冲区满的时候才会阻塞。 而当缓冲区为空的时候接收操作会阻塞
	ch := make(chan int, 2) //第二个参数表示缓冲区
	for i:=0; i<2; i++ {
		go func() {
			ch <- i //这里是非原子的
		}()
	}

	fmt.Println(<-ch)
	fmt.Println(<-ch)

	//close(c)可以用于关闭channel
	//此时v, ok := <-ch里的ok为false
}