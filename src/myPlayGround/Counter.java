package myPlayGround;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by WTIFS-Mac on 2017/4/26.
 */
 public class Counter{
    volatile static int count = 0;
    static int realCount = 0;
    static AtomicInteger atomCount = new AtomicInteger();

    public static void inc(){//synchronized也可以加在这里
        try{
            //延迟100毫秒，使得结果明显
            Thread.sleep(100);
        }
        catch(InterruptedException e){
            System.out.println(e.getMessage());
        }
        count++;
        atomCount.incrementAndGet();
        synchronized (Counter.class){
            realCount++;
        }
    }

    public synchronized void inc2() {
        count+=2;
        atomCount.incrementAndGet();
        atomCount.incrementAndGet();
    }

    public static synchronized void dec() {
        count--;
        atomCount.decrementAndGet();
    }

    public synchronized void dec2() {
        count--;
        atomCount.decrementAndGet();
    }
}