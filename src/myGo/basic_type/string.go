package main

import (
	"fmt"
	"strconv"
	"unicode/utf8"
)

func main() {
	s := "hello, world"

	//hello和world共用底层字节数组，只是起始指针及len不一样
	hello := s[:5]
	world := s[7:]
	println(hello)
	println(world)

	//字符串不可改变
	//s[0] = 'L' 无法编译

	s = "Hello, 世界"
	//go里的字符串使用UTF8编码，UTF8是变长版的Unicode（原始Unicode需要32位，4字节，UTF8只需1-4字节）
	fmt.Printf("%d: %[1]q\n", s[0])         //72: 'H'，ASCII字符的UTF8码=ASCII码
	fmt.Printf("%d: %[1]q\n", s[7])         //228: 'ä'
	fmt.Printf("%x: %[1]q\n", s[7:10])      //e4b896: "世"，占用3字节，e4b896为UTF8编码
	fmt.Printf("%d: %[1]q\n", []rune(s)[7]) //19990: '世'，rune会返回Unicode码点序列，Unicode码值为19990
	fmt.Println(len(s))                     //13
	fmt.Println(utf8.RuneCountInString(s))  //9
}

//equals to strings.HasPrefix()
func HasPrefix(s, prefix string) bool {
	return len(s) > len(prefix) && s[:len(prefix)] == prefix
}

func HasSuffix(s, suffix string) bool {
	return len(s) > len(suffix) && s[len(s)-len(suffix):] == suffix
}

//Itoa = integer to ASCII
func Itoa(i int) string {
	//return fmt.Sprintf("%d", i)
	return strconv.Itoa(i)
}