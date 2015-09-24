package myPlayGround;

/*
http://www.cnblogs.com/mandroid/archive/2011/06/15/2081093.html

编译该JAVA类，
命令：javac ./myJNIHelloWorld.java
在该myJNIHelloWorld.java所在目录下生成myJNIHelloWorld.class

然后回上级目录使用javah生成头文件，
命令：javah -jni others.myJNIHelloWorld
在当前目录下生成others_myJNIHelloWorld.h头文件，此文件供C、C++程序来引用并实现其中的函数
*/

//Failed. Shit
public class myJNIHelloWorld {
	static{
		System.loadLibrary("myJNIHelloWorld");
	}
	public native void DisplayHello();
	public static void main(String[] args){
		new myJNIHelloWorld().DisplayHello();
	}
}
