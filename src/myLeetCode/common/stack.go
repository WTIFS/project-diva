package common

type StringStack struct {
	C []string
}

func (self *StringStack) Push(s string) {
	self.C = append(self.C, s)
}

func (self *StringStack) Pop() {
	if len(self.C) > 0 {
		self.C = self.C[:len(self.C)-1]
	}
}

func (self *StringStack) Top() string {
	return self.C[len(self.C)-1]
}

type IntStack struct {
	C []int
}

func (self *IntStack) Push(s int) {
	self.C = append(self.C, s)
}

func (self *IntStack) Pop() int {
	var res int
	if len(self.C) > 0 {
		res = self.C[len(self.C)-1]
		self.C = self.C[:len(self.C)-1]
	}
	return res
}

func (self *IntStack) Top() int {
	return self.C[len(self.C)-1]
}

func (self *IntStack) IsNotEmpty() bool {
	return len(self.C) > 0
}
