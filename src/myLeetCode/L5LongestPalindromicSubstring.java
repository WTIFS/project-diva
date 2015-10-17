package myLeetCode;

public class L5LongestPalindromicSubstring {
    public String longestPalindrome(String s) {
        char[] c = s.toCharArray();
        int len = c.length;
        if (len<=1) return s;
        int maxLen = 1;
        int left = 0, right = 0;
        int ansIndex = 0;
        for (int i=1; i<len; i++){//i as the symmetric center
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
        		//System.out.println("maxLen:" + maxLen);
        		//System.out.println(String.format("left: c[%d]: %c", left, c[left]));
        		//System.out.println(String.format("right: c[%d]: %c", right, c[right]));
        	}	
        }
        return s.substring(ansIndex, ansIndex + maxLen);
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
    	s = longestPalindrome(s);
    	System.out.println(s);
    	s = longestPalindrome2(s);
    	System.out.println(s);
    }
}
