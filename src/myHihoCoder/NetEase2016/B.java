package myHihoCoder.NetEase2016;

import java.util.Scanner;
import java.util.Stack;

public class B {
	
	public static long count(String s2){
		long count = 0;
		char[] s = s2.toCharArray();
		
		Stack<Long> stack = new Stack<Long>();
		
		//int curCount = 0;
		String mult;
		
		int i = 0;
		int len = s.length;
		while (i<len)
		{
			if (s[i]>='A' && s[i]<='Z') {count++; i++;}
			else if (s[i]=='('){ stack.push(count); count = 0; i++;}
			else if (s[i]==')'){
				mult = "";
				i++;
				while (i<len && Character.isDigit(s[i])) {mult += s[i]; i++; }
				count = count * Long.parseLong(mult) + stack.pop();
				//System.out.println("num): "+mult);
			}
			else {
				mult = "";
				while (i<len && Character.isDigit(s[i])) {mult += s[i]; i++;}
				count = count - 1 + Long.parseLong(mult);
				//System.out.println("num: "+mult);
			}
		}
		return count;
	}

	public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int i=0; i<n; i++) {
        	String s = in.next();
        	System.out.println(count(s));
        }
	}
}
