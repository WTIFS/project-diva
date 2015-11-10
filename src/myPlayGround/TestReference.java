package myPlayGround;

import java.util.Stack;


//引用测试
public class TestReference {
	
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
		stack.push(num);
		num = 6;
		myPrinter.pr(stack.pop());
		
		Stack<Point> stack2 = new Stack<>();
		TestReference test = new TestReference();
		Point point = test.new Point(1, 1);
		stack2.push(point);
		point = test.new Point(2, 2);
		myPrinter.pr(new int[]{stack2.pop().x});
		
		
	}
	
	public static void main(String[] args){
		testStack();
	}
}
