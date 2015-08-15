package myLeetCode;

import java.util.Stack;

/*
 * https://leetcode.com/problems/longest-valid-parentheses/
 
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

 */
public class L32LongestValidParentheses {
	
	//DP
	public int longestValidParentheses4(String s){
		int max = 0;
		
		char[] chars = s.toCharArray();
		int[] lens = new int[chars.length];
		
		for (int i=1; i<chars.length; i++){
			if (chars[i]==')'){
				int start = i-lens[i-1]-1;
				if (start>=0 && chars[start]=='(')
				{
					lens[i] = lens[i-1] + 2;
					if (start>0) lens[i] += lens[start-1];
				}
				max = Math.max(max, lens[i]);
			}
		}
		return max;
	}
	
	public int longestValidParentheses3(String s){
		int max = 0;
		Stack<Integer> stack = new Stack<Integer>();
		char[] chars = s.toCharArray();
		int start = -1;
		for (int i=0; i<s.length(); i++){
			if (chars[i]=='(') stack.push(i);
			else // ')'
			{
				if (stack.isEmpty()) start = i;
				else {
					stack.pop();
					if (stack.isEmpty()) max = Math.max(max, i-start);
					else max = Math.max(max, i-stack.peek());
				}
			}
		}		
		return max;
	}
	
	//Incorrect
	//For ()()(())(()
	public int longestValidParentheses2(String s){
		int max = 0;
		int leftCount = 0, rightCount = 0;
		for (int i=0; i<s.length(); i++){
			if (s.charAt(i)=='(') leftCount++;
			else rightCount++;
			if (rightCount==leftCount){
				max = Math.max(max, leftCount);
			}
			if (rightCount>leftCount){
				leftCount = rightCount = 0;
			}
		}
		max = Math.max(max, Math.min(leftCount, rightCount));
		return max;
	}
	
	//TLE & Incorrect
	public int longestValidParentheses(String s) {
		int max=0;
		int leftCount, rightCount;
        for (int i=0; i<s.length(); i++){
        	leftCount = 0;
        	rightCount = 0;
        	for (int j=i; j<s.length(); j++){
        		if (s.charAt(j)=='(') leftCount++;
        		else rightCount++;
        		if (rightCount>leftCount){
        			max = Math.max(max, leftCount);
        			break;
        		}
        	}
        	max = Math.max(max, Math.min(leftCount, rightCount));
        }
        return max;
    }
	
	public int main(String s){
		return longestValidParentheses4(s);
	}
}
