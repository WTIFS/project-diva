package myLeetCode;
/*
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

For example:

Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
 */
public class L214ShortestPalindrome {
    public String shortestPalindrome(String s) {
    	if (s.equals("")) return s;
    	int maxlen = 0;
    	int i,j,next;
    	int len = s.length();
    	for (next=0;next<=len/2;)
    	{
    		i = j = next;
    		while (i<len-1 && s.charAt(i)==s.charAt(i+1)) i++;
    		next = i+1;
    		
    		
    		while (i+1<len && j>0 && s.charAt(i+1)==s.charAt(j-1)) 
    		{
    			j--;
    			i++;
    		}

    		if (j==0 && i>maxlen){
    			maxlen = i;
    		}
    	}
    	if (maxlen+1<len) return new StringBuilder(s.substring(maxlen+1)).reverse().toString() + s;
    	else return s;
    }
    
    //KMP-buildNext
    //next表示该s[i]前面j个字符和前缀前j个字符一样，因此只需再比较s[j]和s[i]
    //also see L28ImplementstrStr
    public String shortestPalindrome2(String s) {
    	if (s.equals("")) return s;
    	String s2 = s + "#" + new StringBuilder(s).reverse();
    	int next[] = buildNext(s2);
    	return new StringBuilder(s.substring(next[next.length-1])).reverse() + s;  	
    }
    
    //KMP2
    public String shortestPalindrome3(String s) {
    	String s2 = new StringBuilder(s).reverse().toString();
    	int next[] = buildNext(s);
    	int i=0, j=0;
    	int len = s.length();
    	while (i<len){
    		if (s2.charAt(i)==s.charAt(j)){
    			i++;
    			j++;
    		}
    		else if(i<len){
    			if (j>0) j=next[j];
    			else i++;
    		}
    	}
    	return s2 + s.substring(j);
    }
    
    public int[] buildNext(String s){
    	int len = s.length();
    	int next[] = new int[len+1];
    	int j = 0;
    	for (int i=1; i<len; i++){
    		while (j>0 && s.charAt(i)!=s.charAt(j)) j = next[j];
    		if (s.charAt(i)==s.charAt(j)) j++;
    		next[i+1] = j;
    	}
    	return next;
    }
    
    public void main(String s){
    	System.out.println(shortestPalindrome(s));
    	System.out.println(shortestPalindrome2(s));
    	System.out.println(shortestPalindrome3(s));
    }
}
