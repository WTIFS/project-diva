package myPlayGround;

import org.apache.commons.lang3.StringUtils;

import java.util.*;

public class TestPlayground {
	public static void main(String[] args){
		List<Integer> list = null;
		//System.out.println(list.size());

        PriorityQueue<Integer> queue = new PriorityQueue<>(10,
                new Comparator<Integer>() {
                    @Override
                    public int compare(Integer o1, Integer o2) {
                        return o1.equals(o2)? 0: o1>o2? -1: 1; //默认为最小堆  这里的compare为最大堆
                    }
                });
        queue.offer(1);
        queue.offer(3);
        queue.offer(2);
        queue.offer(4);
        queue.offer(6);
        queue.offer(5);
        queue.offer(7);
        while (!queue.isEmpty()) System.out.println(queue.poll());

        list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        Integer[] a = list.toArray(new Integer[0]); //a = [1, 2, 3]
        System.out.println(a);
	}
}
