package main

import (
	"fmt"
	"strconv"
	"strings"
)

/***
Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.

A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "1111"
Output: ["1.1.1.1"]

Example 4:
Input: s = "010010"
Output: ["0.10.0.10","0.100.1.0"]

Example 5:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/

func main() {
	//fmt.Println(restoreIpAddresses("25525511135"))
	fmt.Println(restoreIpAddresses("0000"))
	fmt.Println(restoreIpAddresses("1111"))
	fmt.Println(restoreIpAddresses("010010"))
	fmt.Println(restoreIpAddresses("101023"))
}

func restoreIpAddresses(s string) []string {
	res := make([]string, 0)
	for i := 1; i <= 3; i++ {
		for j := 1; j <= 3; j++ {
			for k := 1; k <= 3; k++ {
				if i+j+k >= len(s) {
					continue
				}

				ok := true
				p1 := s[:i]
				p2 := s[i : i+j]
				p3 := s[i+j : i+j+k]
				p4 := s[i+j+k:]
				parts := []string{p1, p2, p3, p4}

				for _, p := range parts {
					if (len(p) > 1 && p[0] == '0') || len(p) > 3 {
						ok = false
						break
					}
					num, _ := strconv.Atoi(p)
					if num > 255 {
						ok = false
						break
					}
				}
				if ok {
					res = append(res, strings.Join(parts, "."))
				}
			}
		}
	}
	return res
}
