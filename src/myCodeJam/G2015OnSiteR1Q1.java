package myCodeJam;

import java.util.Comparator;
import java.util.PriorityQueue;

/**
 * Created by Yuanfei on 2015/10/24.
 * Before coding:
 * How is synchronized used in Java
 * Concept of FileDescriptor
 * Concept of deadlock
 * Concept of ACID and how these are applied in database
 *
 *
 * Given an input stream (i.e. constantly read),, calculate the median dynamically
 */
public class G2015OnSiteR1Q1 {

    PriorityQueue<Integer> maxHeap;
    PriorityQueue<Integer> minHeap;

    public G2015OnSiteR1Q1(){
        maxHeap = new PriorityQueue<Integer>(10, new Comparator<Integer>(){
            @Override
            public int compare(Integer i1, Integer i2){
                if (i1==i2) return 0;
                else return (i1>i2) ? -1:1;
            }
        });
        minHeap = new PriorityQueue<>();
    }

    public double read(int num){
        if (maxHeap==null || maxHeap.size()==0) { maxHeap.offer(num); return num; }
        int leftRoot = maxHeap.peek();
        if (num<leftRoot) maxHeap.offer(num);
        else {
            if (minHeap==null || minHeap.size()==0) { minHeap.offer(num); return (num+maxHeap.peek()/2.0); }
            else{
                int rightRoot = minHeap.peek();
                if (num>rightRoot) minHeap.offer(num);
                else{
                    if (maxHeap.size()>=minHeap.size()) maxHeap.offer(num);
                    else minHeap.offer(num);
                }
            }
        }

        if (maxHeap.size()-minHeap.size()>1) minHeap.offer(maxHeap.poll());
        else if (minHeap.size() - maxHeap.size()>1) maxHeap.offer(minHeap.poll());
        if (maxHeap.size()>minHeap.size()) return maxHeap.peek();
        else if (minHeap.size()>maxHeap.size()) return minHeap.peek();
        else return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }

    public static void main(String[] args){
        int[] nums = new int[] {10, 9, 8, 7, 6, 1, 2, 3, 4, 5};
        G2015OnSiteR1Q1 test = new G2015OnSiteR1Q1();
        for (int i=0; i<nums.length; i++)
            System.out.println(test.read(nums[i]));
    }
}
