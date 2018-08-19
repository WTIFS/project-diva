package productServer

//Entry of the program 程序入口
func main() {
	a := App{}
	a.Initialize()
	a.Run(":8080")
}