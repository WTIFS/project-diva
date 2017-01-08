package myPlayGround;

import myLib.myPrinter;

import java.util.*;
import java.util.Stack;
/**
 * Created by Yuanfei on 2015/11/10.
 */
public class TestReference {

    public static List change(List a){
        Set set = new HashSet(a);
        Object[] o = set.toArray();
        a = Arrays.asList(o); //aָ��ı�  ��ԭʼaֵ��Ӱ��
        return a;
        //a = new ArrayList();
        //a.add(3);
    }

	class Point{
		public int x, y;
		public Point(int x, int y){
			this.x = x;
			this.y = y;
		}
	}
	
	public static void testStack(){
		Stack<Integer> stack = new Stack<>();
		Integer num = 5;
		stack.push(num); //Integer��ջ���޸�����ֵ ջֵ����
		num = 6;
		myPrinter.pr(stack.pop());
		
		Stack<Point> stack2 = new Stack<>();
		TestReference test = new TestReference();
		Point point = test.new Point(1, 1);
		stack2.push(point);
		point.x = 2; //point��ջ���޸�����ֵ��ջ�����ݻ�� ->ջ����������ù�ϵ ����ֵ�ĸ���
		myPrinter.pr(new int[]{stack2.pop().x});
		
	}
	
	public static void main(String[] args){
        ArrayList<Integer> a = new ArrayList();
        a.add(1);
        a.add(2);
        a.add(1);
        List b = change(a);
        myPrinter.pr(b);

		testStack();
	}
}
