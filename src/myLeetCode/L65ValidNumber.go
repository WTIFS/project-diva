package main

import "unicode"

/***
A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
At least one digit, followed by a dot '.'.
At least one digit, followed by a dot '.', followed by at least one digit.
A dot '.', followed by at least one digit.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
At least one digit.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.
 */

func isNumber(s string) bool {
	r := []rune(s)
	l := len(r)
	if l == 0 {
		return false
	}

	var hasDot, hasE, hasNum bool
	var numAfterE = true

	for i := 0; i < l; i++ {
		switch r[i] {

		case '.':
			if hasDot || hasE {
				return false
			}
			hasDot = true

		case '+', '-':
			if i == 0 || r[i-1] == 'e' || r[i-1] == 'E' {
				continue
			} else {
				return false
			}

		case 'e', 'E':
			if hasE || !hasNum {
				return false
			}
			hasE = true
			numAfterE = false
		default:
			if unicode.IsDigit(r[i]) {
				hasNum = true
				numAfterE = true
			} else {
				return false
			}
		}
	}

	return hasNum && numAfterE
}