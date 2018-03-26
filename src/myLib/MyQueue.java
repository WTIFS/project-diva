package myLib;

import java.util.LinkedList;
import java.util.Queue;

class ListNode<E> {
    public E val;
    ListNode<E> next;

    ListNode(E x) {
        val = x;
    }
}

public class MyQueue<E> {
    ListNode<E> first;
    ListNode<E> last;
    int size;

    LinkedList<Integer> example = new LinkedList<>();

    public MyQueue() {
        example.offer(1);
        example.poll();
        example.toArray();
        size = 0;
    }

    public boolean offer(E x) {
        ListNode<E> newNode = new ListNode<>(x);
        if (last == null) {
            first = newNode;
            last = newNode;
        } else {
            last.next = newNode;
            last = last.next;
        }
        size++;
        return true;
    }

    public E poll() {
        if (first == null) return null;
        ListNode<E> next = first.next;
        final E result = first.val;
        if (next==null) last = null;
        first.next = null; //help GC
        first = next;
        size--;
        return result;
    }

    public Object[] toArray() {
        Object[] results = new Object[size];
        int i = 0;
        for (ListNode<E> p = first; p != null; p = p.next) {
            results[i++] =  p.val;
        }
        return results;
    }

    public String toString() {
        if (first == null) return "";
        StringBuilder sb = new StringBuilder();
        int i=0;
        for (ListNode<E> p = first; p.next != null; p = p.next) {
            sb.append(p.val).append(", ");
        }
        sb.append(last.val);
        return sb.toString();
    }

    public static void main(String[] args) {
        MyQueue<Integer> myQueue = new MyQueue<>();
        myQueue.offer(1);
        System.out.println(myQueue.toString());
        myQueue.offer(2);
        System.out.println(myQueue.toString());
        myQueue.poll();
        System.out.println(myQueue.toString());
        myQueue.poll();
        System.out.println(myQueue.toString());
    }
}
