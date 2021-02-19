package main

import (
	"time"
	"fmt"
	"sync"
)

var (
	m  = make(map[string]string) //wrong，对该map并发读写会导致panic，且无法捕获
	sm = &sync.Map{}             //right
)

func main() {
	sm.Store("x", "aaa")
	m["x"] = "aaa"
	sm.Store("x", m)

	if err1 := recover(); err1 != nil {
		fmt.Printf("panic: %+v\n", err1)
		return
	}

	//并发写
	go func() {
		if err1 := recover(); err1 != nil {
			//这个recover无法捕获panic
			fmt.Printf("panic: %+v\n", err1)
			return
		}
		for {
			m["x"] = "xxxx"
			// sm.Store("x","bbbb")
		}
	}()

	//并发读
	go func() {
		if err1 := recover(); err1 != nil {
			fmt.Printf("panic: %+v\n", err1)
			return
		}
		for {
			_ = m["x"]
			// v,ok := sm.Load("x")
			// sm.Store("x","bbbb")
			fmt.Println("ok")
		}
	}()
	fmt.Println("----")
	time.Sleep(10 * time.Second)
}
