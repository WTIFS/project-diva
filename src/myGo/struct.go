package main

import "fmt"

type Student struct {
	id int
	name string
	address string
	age int
}

func (s Student) String() {
	fmt.Printf("id: %d, name: %v, address: %v, age: %d", s.id, s.name, s.address, s.age)
}

//struct作为函数参数时，是实参
func modifyStudent(s Student) {
	s.name += "-modify"
}

//指针作为参数时才是形参
func modifyStudentByPointer(s *Student) {
	s.name += "-modify" //均生效
	(*s).name += "-modify" //均生效
}

func main() {

	var s1 Student = Student{1, "Smith", "Heping Road", 20}
	var s2 *Student = &Student{2, "John", "Nanjing Road", 19}
	var s3 *Student = new(Student) //和s2一样
	s3.id = 3
	var s4 *Student = &s1

	modifyStudent(s1) //not modified
	modifyStudentByPointer(s2) //modified

	fmt.Println(s1)
	fmt.Println(s2)

	modifyStudentByPointer(s4) //both s1 & s3 modified
	fmt.Println(s4)
	fmt.Println(s1)

	var ss1 string = "asdf"
	var ss2 *string = &ss1
	fmt.Println(ss1)
	fmt.Println(*ss2)

	ss1 = "aaaa" //均改变
	fmt.Println(ss1)
	fmt.Println(*ss2)

	*ss2 = "fdsa" //均改变
	fmt.Println(ss1)
	fmt.Println(*ss2)

}