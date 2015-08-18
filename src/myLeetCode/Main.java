package myLeetCode;

import java.util.List;

public class Main {
	public static void main(String[] args){
		String s;
		int n;
		
		TreeNode[] nodes = new TreeNode[4];
		for (int i=0; i<nodes.length; i++)
			nodes[i] = new TreeNode(i);
		nodes[0].left = nodes[1];
		nodes[1].right = nodes[2];
		nodes[0].right = nodes[3];
		L257BinaryTreePaths test257 = new L257BinaryTreePaths();
		test257.main(nodes[0]);
		
		
		/*L118PascalsTriangle test118 = new L118PascalsTriangle();
		test118.main(6);
		for (int i=0; i<5; i++) test118.main(i);
		*/
		
		//s = "[()[]{}]";
		//L20ValidParentheses test20 = new L20ValidParentheses();
		//System.out.println(test20.isValid(s));
		
		//L22GenerateParentheses test22 = new L22GenerateParentheses();
		/*for (int i=0; i<5; i++)
		{
			System.out.println(test22.generateParenthesis(i));
			System.out.println(test22.generateParenthesis2(i));
		}*/
		
		/*L32LongestValidParentheses test32 = new L32LongestValidParentheses();
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
		}*/
		/*
		L125ValidPalindrome test125 = new L125ValidPalindrome();
		s = "ab2a";
		test125.main(s);
		s = "A man, a plan, a canal: Panama";
		test125.main(s);
		s = "race a car";
		test125.main(s);*/
		

		
		
	}
}
