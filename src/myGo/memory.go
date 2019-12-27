package main

//内存分配

//0byte
type Empty struct {
}

//16 byte
type Cat struct {
	id1 byte  //1byte + 3字节的offset
	id2 int32 //4byte
	id3 int64 //8byte
}

func main() {
	var a, b Empty                   //0 byte
	var c, d Cat                     //16 byte
	var m1, m2, m3 map[byte]byte     //8byte 说明map是引用类型，实际只存了个地址，并没有连续的内存分配
	var m4 = make(map[byte]byte, 16) //8byte
	var m5 = make(map[byte]byte, 16) //8byte
	println(&a, &b)                  //0xc000044768 0xc000044768
	println(&c, &d)                  //0xc000044778 0xc000044768 16进制地址
	println(&m1, &m2, &m3)
	println(&m4, &m5)

	for i := 0; i < 10; i++ {
		s := "asdf" //并没有每次新的内存分配
		println(&s)
	}
}
