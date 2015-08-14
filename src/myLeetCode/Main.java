package myLeetCode;

public class Main {
	public static void main(String[] args){
		String s;
		s = "[()[]{}]";
		
		//L20ValidParentheses test20 = new L20ValidParentheses();
		//System.out.println(test20.isValid(s));
		
		L22GenerateParentheses test22 = new L22GenerateParentheses();
		for (int i=0; i<5; i++)
		{
			System.out.println(test22.generateParenthesis(i));
			System.out.println(test22.generateParenthesis2(i));
		}
		
	}
}
