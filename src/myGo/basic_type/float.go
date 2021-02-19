package main

import (
	"fmt"
	"math"
)

func main() {
	//float32的有效数字约为6为，float64为15位，绝大多数情况下用float64，float32在多次运算时会迅速累积误差

	//%g可以自动判断打印位数
	fmt.Printf("%g\n", math.Exp(1))

	for x := 0; x < 8; x++ {
		//%8表示 按8字符宽度输出
		fmt.Printf("x = %d e = %8.3f\n", x, math.Exp(float64(x)))
	}

	//与math.NaN的比较总不成立
	fmt.Println(math.NaN() == math.NaN()) //false

	//除以0无法编译通过
	//fmt.Println(1/0 == 1/0)

	//但是换变量除以0可以通过
	var z0 float64
	fmt.Println(1 / z0)       //+Inf
	fmt.Println(z0 / z0)      //NaN
	fmt.Println(1/z0 == 1/z0) //true
}
