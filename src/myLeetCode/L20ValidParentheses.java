package myLeetCode;

import java.util.HashSet;
import java.util.Set;
import java.util.Stack;

/*
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */
public class L20ValidParentheses {
    
	public static Set<Character> set = new HashSet<Character>();

	public L20ValidParentheses(){
		set.add('{');
		set.add('(');
		set.add('[');
	}
    
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (int i=0; i<s.length(); i++){
    		if (set.contains(s.charAt(i))) stack.push(s.charAt(i));
    		else if (!stack.isEmpty()){
    			switch (s.charAt(i)) {
					case ')': if (stack.pop()!='(') return false; break;
					case ']': if (stack.pop()!='[') return false; break; 
					default: if (stack.pop()!='{') return false; break;
				}
    		}
    		else return false;
        }
        if (stack.isEmpty()) return true;
        else return false;
    }
    
    /*public static void main(String[] args){
    	System.out.println(isValid("()[]{}"));
    }*/
}
