package main

import "fmt"

func main() {


	for n := 1000; n < 10000; n++ {
		for divider := 12; divider < 100; divider++ {
			if n/divider == 809 && n%divider == 1 {

				left1 := n/100 - divider*8
				if left1 == 0 {
					continue
				}

				fmt.Println(divider)
				fmt.Println(n)
				fmt.Println(8 * divider)
				fmt.Println(n - 800*divider)
				fmt.Println(9 * divider)

				break
			}
		}
	}
}

/*
题目描述
设有下列的算式：
    809
  -----
xx|xxxx
   xx
---=-----
    xxx
    xxx
---------
      1

求出□中的数字，并打印出完整的算式来。
*/
