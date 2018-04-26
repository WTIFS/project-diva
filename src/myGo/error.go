package main

import "fmt"

type Divide struct{
	dividee int
	divider int
}

func (de Divide) Error() string{
	var strFormat =
`
Cannot proceed, the divider is zero.
dividee: %d,
divider: 0
`
	return fmt.Sprintf(strFormat, de.dividee)
}

func Div(dividee, divider int) (result int, errorMsg string) {
	if (divider == 0) {
		var divide = Divide{dividee: dividee, divider: divider}
		errorMsg = divide.Error()
		return
	} else {
		result = dividee / divider
		return
		//return dividee / divider, ""
	}
}

func main() {
	result, err := Div(100, 10)
	fmt.Println(result, err)

	result, err = Div(1, 0)
	fmt.Println(result, err)


}
