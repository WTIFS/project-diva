package myLeetCode;

import java.util.ArrayList;
import java.util.List;
/*

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

 */

public class L38CountandSay {
	
	public List<String> ans = new ArrayList<String>();
	
	public L38CountandSay(){
		ans.add("1");
	}
	
    public String countAndSay(int n) {
    	if (n==0) return "";
    	String s = "1";
    	String new_s;
    	char c ;
    	int count;
    	
    	int k = ans.size();
    	if (n<=k) return ans.get(n-1);
    	else{
    		s = ans.get(k-1);
	        for (int i=k+1; i<=n; i++){
	        	new_s = "";
	        	for (int j=0; j<s.length(); j++){
	            	count = 1;
	            	c = s.charAt(j);
	        		while (j+count<s.length() && s.charAt(j+count)==s.charAt(j)) count++;
	        		new_s = new_s + count + c;
	        		j += count-1;
	        	}
	        	s = new_s;
	        	ans.add(s);
	        }
    	}
    	
        /*
        for (int i=2; i<=n; i++){
        	count = 1;
        	new_s = "";
        	c = s.charAt(0);
        	for (int j=1; j<s.length(); j++){
        		if (s.charAt(j)==c) count++;
        		else {
        			new_s = new_s + count + c;
        			c = s.charAt(j);
        			count = 1;
        		}
        	}
        	s = new_s + count + c;
        }*/
        return s;
    }
    
    public void main(int n){
    	for (int i=0; i<n; i++)
    	System.out.println(countAndSay(i));
    }
}
