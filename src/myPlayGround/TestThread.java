package myPlayGround;

import java.util.concurrent.atomic.AtomicInteger;

/*
在 java 垃圾回收整理一文中，描述了jvm运行时刻内存的分配。其中有一个内存区域是jvm虚拟机栈。(线程自己的栈)

每一个线程运行时都有一个线程栈，线程栈保存了线程运行时候变量值信息。当线程访问某一个对象时候值的时候，首先通过对象的引用找到对应在堆内存的变量的值，然后把堆内存变量的具体值load到线程本地内存中，建立一个变量副本，之后线程就不再和对象在堆内存变量值有任何关系，而是直接修改副本变量的值。

在修改完之后的某一个时刻（线程退出之前），自动把线程变量副本的值回写到对象在堆中变量。这样在堆中的对象的值就产生变化了。

volatile关键字要求线程在使用变量的时候，必须马上从主内存读取最新值(而不是自己栈内的缓存)，在修改完成之后，马上将数据写入主内存(而不是缓存在栈里)。

但volatile无法保证同步，比如：线程1从主内存读取到count的值为2，还没有操作的时候，线程2从主内存也把count读取到线程内部，这个时候依然是2.然后线程1把count自加1设为3，立即刷新到主内存里面。线程2也把counter自加1设置为3，刷新到主内存里面。这样，线程2的操作就丢失了。

此时可以使用加锁或者AtomicInteger关键字来处理
*/

class Counter{
	volatile static int count = 0;
	static int realCount = 0;
	static AtomicInteger atomCount = new AtomicInteger();
	
	public static void inc(){
		try{
			 //延迟100毫秒，使得结果明显
			Thread.sleep(100);
		}
		catch(InterruptedException e){}
		count++;
		atomCount.incrementAndGet();
		synchronized (Counter.class){
			realCount++;
		}
	}
}

public class TestThread {
	public static void main(String[] args){
		
		Thread threads[]=new Thread[1000];
		
		//同时启动1000个线程，去进行i++计算，看看实际结果
		for (int i=0; i<1000; i++){
			threads[i] = new Thread(new Runnable() {
				
				@Override
				public void run() {
					
					Counter.inc();
				}
			});
			threads[i].start();
		}
		
		for (int i=0; i<1000; i++){
			try{
				// join() 方法主要是让调用改方法的thread完成run方法里面的东西后， 再执行join()方法后面的代码
				//等待所有线程执行结束
				threads[i].join();
			}
			catch(InterruptedException e){
				e.printStackTrace();
			}
		}
		
		System.out.println("Counter.count=" + Counter.count);
		System.out.println("Counter.realCount=" + Counter.realCount);
		System.out.println("Counter.atomCount=" + Counter.atomCount);
	}
}
