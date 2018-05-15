package main

import (
	"sync"
	"time"
	"fmt"
)

//sync库提供了Mutex类型及加锁和解锁2个方法实现互斥功能

type Counter struct {
	v map[string]int
	mux sync.Mutex
}

func (c *Counter) Inc(key string) {
	c.mux.Lock()
	c.v[key]++
	c.mux.Unlock()
}

func (c *Counter) Get(key string) int {
	c.mux.Lock()
	defer c.mux.Unlock()
	return c.v[key]
}

func main() {
	c := Counter{v: make(map[string]int)}
	for i:=0; i<1000; i++ {
		go c.Inc("a")
	}
	time.Sleep(time.Second)
	fmt.Println(c.Get("a"))
}