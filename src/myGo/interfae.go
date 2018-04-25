package main

import "fmt"

type Nokia struct{}
type IPhone struct{}

type Phone interface{
	call()
}

func(nokiaPhone Nokia) call() {
	fmt.Println("NOKIA")
}

func(iPhone IPhone) call() {
	fmt.Println("IPHONE")
}

func main() {
	var iphone = new(IPhone)
	var nokia = new(Nokia)
	iphone.call()
	nokia.call()

}