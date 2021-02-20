package main

import (
	"bytes"
	"fmt"
	"strconv"
)

func main() {
	testCases := [][]int{
		{123, 12},
		{123, 123},
		{123, 0},
		{9, 9},
		{9999, 9},
		{99, 99},
	}
	for _, c := range testCases {
		res := multiply(strconv.Itoa(c[0]), strconv.Itoa(c[1]))
		println(res, res == strconv.Itoa(c[0]*c[1]))
	}
}

//123 -> 321
// 56 -> 65
func multiply(num1 string, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}
	if len(num1) < len(num2) {
		num1, num2 = num2, num1
	}

	//convert string to int
	r1, r2 := reverseStringToIntSlice(num1), reverseStringToIntSlice(num2)

	//存放乘数每行的乘法结果
	//也可以乘一次加一次，更省内存
	multResults := make([][]int, 0, len(r2))

	//遍历r2的每个数字
	for i := range r2 {
		rowNumbers := make([]int, 0, len(r1)+len(r2))

		//填充头部0位
		for j := 0; j < i; j++ {
			rowNumbers = append(rowNumbers, 0)
		}

		//遍历r1每个数字，相乘
		multResult := 0
		for j := range r1 {
			multResult += r1[j] * r2[i]
			rowNumbers = append(rowNumbers, multResult%10)
			multResult /= 10
		}

		//如果有进位
		if multResult > 0 {
			rowNumbers = append(rowNumbers, multResult%10)
		}

		multResults = append(multResults, rowNumbers)
	}

	//将所有乘积加和
	res := make([]int, 0, len(r1)+len(r2))
	sum := 0
	//遍历每列
	for i := 0; i < len(r1)+len(r2); i++ {
		//遍历每行
		for j := range multResults {
			if len(multResults[j]) > i {
				sum = sum + multResults[j][i]
			}
		}
		res = append(res, sum%10)
		sum /= 10
	}
	//如果有进位
	if sum > 0 {
		res = append(res, sum)
	}

	//删除尾部的0
	tailZeroIndex := len(res)
	for i := len(res) - 1; i >= 0 && res[i] == 0; i-- {
		tailZeroIndex = i
	}
	res = res[:tailZeroIndex]

	//反转
	for from, to := 0, len(res)-1; from < to; from, to = from+1, to-1 {
		res[from], res[to] = res[to], res[from]
	}

	//转为string返回
	buf := bytes.Buffer{}
	for i := 0; i < len(res); i++ {
		fmt.Fprint(&buf, strconv.Itoa(res[i]))
	}
	return buf.String()
}

// 反转字符串
func reverseStringToIntSlice(s string) []int {
	res := make([]int, len(s))
	for i := range s {
		res[len(s)-1-i] = int(s[i] - '0')
	}
	return res
}

// 反转字符串
func reverseString(s string) string {
	runes := []rune(s)
	for from, to := 0, len(runes)-1; from < to; from, to = from+1, to-1 {
		runes[from], runes[to] = runes[to], runes[from]
	}
	return string(runes)
}
