package myLeetCode;

import java.util.List;

public class Main {
	public static void main(String[] args){
		String s;
		s = "[()[]{}]";
		
		//L20ValidParentheses test20 = new L20ValidParentheses();
		//System.out.println(test20.isValid(s));
		
		L22GenerateParentheses test22 = new L22GenerateParentheses();
		/*for (int i=0; i<5; i++)
		{
			System.out.println(test22.generateParenthesis(i));
			System.out.println(test22.generateParenthesis2(i));
		}*/
		
		L32LongestValidParentheses test32 = new L32LongestValidParentheses();
		String[] ss={"(()()", "())", "(())", "()()(())(()"};
		for (int i=0; i<4; i++){
			System.out.println(ss[i]);
			System.out.println(test32.main(ss[i]));
		}
		List<String> s3 = test22.generateParenthesis(3);
		for (int i=0; i<s3.size(); i++)
		{
			System.out.println(s3.get(i));
			System.out.println(test32.main(s3.get(i)));
		}
		
		
	}
}
