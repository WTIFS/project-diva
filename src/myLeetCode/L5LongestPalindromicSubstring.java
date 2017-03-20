package myLeetCode;

import java.util.Date;

public class L5LongestPalindromicSubstring {
    public String longestPalindrome(String s) {
        char[] c = s.toCharArray();
        int len = c.length;
        if (len<=1) return s;
        int maxLen = 1;
        int left = 0, right = 0;
        int ansIndex = 0;
        for (int i=0; i<len; i++){//i as the symmetric center
        	left = i;
        	right = i;
        	while (right+1<len && c[right+1]==c[i]) {
        		right++; 
        		i = right;
        	}
        	while (left>0 && right+1<len && c[left-1]==c[right+1]){
        		left--;
        		right++;
        	}
        	if (right-left+1 > maxLen){
        		maxLen = right-left+1;
        		ansIndex = left;
        	}
        }
        return s.substring(ansIndex, ansIndex + maxLen);
    }

    private int lo, maxLen;

    public String longestPalindrome3(String s) {
        int len = s.length();
        if (len < 2)
            return s;

        for (int i = 0; i < len-1; i++) {
            extendPalindrome(s, i, i);  //assume odd length, try to extend Palindrome as possible
            extendPalindrome(s, i, i+1); //assume even length.
        }
        return s.substring(lo, lo + maxLen);
    }

    private void extendPalindrome(String s, int j, int k) {
        while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
            j--;
            k++;
        }
        if (maxLen < k - j - 1) {
            lo = j + 1;
            maxLen = k - j - 1;
        }
    }
    
    //Ref:http://articles.leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
    //关键: 回文右侧的对称性和左侧有一定程度的相似
    //Key point: A palindrome's right part is somehow similar to its left part
    public String longestPalindrome2(String s){
    	char[] c = s.toCharArray();
    	char[] T = preProcess(s);
    	int lenc = c.length;
    	int lenT = T.length;
    	int[] p = new int[lenT];
    	if (lenc<=1) return s;
    	
    	int center = 0;
    	int right = 0;
    	int i_mirror = 0;
    	int offset;
    	for (int i=1; i<lenT; i++){
    		if (right>=lenT) break;
    		i_mirror = center - (i-center);
    		if (right>i){
    			if (p[i_mirror]+i<right) p[i]=p[i_mirror];
    			else p[i] = right - i;
    		}
    		else p[i] = 0;
    		
    		// Attempt to expand palindrome centered at i
    		if (T[i]!='#' && p[i]==0) p[i]=1;
    		offset = 1;
    		while(i-p[i]-offset>=0 && i+p[i]+offset<lenT && T[i-p[i]-offset]==T[i+p[i]+offset]) p[i]+=2;
    		
    		// If palindrome centered at i expand past R,
    	    // adjust center based on expanded palindrome.
    		if (i+p[i]>right){
    			center = i;
    			right = i + p[i];
    		}
    	}//#a#b#a 
    	
    	int maxLen = 0;
    	for (int i=1; i<lenT; i++){
    		if (p[i]>maxLen) {
    			maxLen = p[i];
    			center = i;
    		}
    	}
    	return s.substring( (center-maxLen)/2, (center+maxLen)/2);
    }
    
    public char[] preProcess(String s){
    	char[] c = s.toCharArray();
    	char[] ans = new char[2*c.length+1];
    	for (int i=0; i<c.length; i++){
    		ans[2*i] = '#';
    		ans[2*i+1] = c[i];
    	}
    	//ans[2*c.length] = '#';
    	return ans;
    }
    
    public void main(String s){
        String s2;
        long t1 = new Date().getTime();

        s2 = longestPalindrome(s);
        long t2 = new Date().getTime();
    	System.out.println(s2);
        System.out.println(t2 - t1);

        s2 = longestPalindrome2(s);
        long t3 = new Date().getTime();
    	System.out.println(s2);
        System.out.println(t3 - t1);

        s2 = longestPalindrome3(s);
        long t4 = new Date().getTime();
    	System.out.println(s2);
        System.out.println(t4 - t1);
    }
}
