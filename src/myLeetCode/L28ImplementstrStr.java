package myLeetCode;

public class L28ImplementstrStr {
    public int strStr(String haystack, String needle) {
    	char[] s = haystack.toCharArray();
    	char[] target = needle.toCharArray();
    	int len1 = s.length;
    	int len2 = target.length;
    	int j;
        for (int i=0; i<=len1-len2; i++){
        	j = 0;
        	while (j<len2 && s[i+j]==target[j]) j++;
        	if (j==len2) return i;
        }
        return -1;
    }
    
    //KMP
    public int strStr3(String haystack, String needle){
    	char[] s = haystack.toCharArray();
    	char[] target = needle.toCharArray();
    	int len1 = s.length;
    	int len2 = target.length;
    	if (len2==0) return 0;
    	
    	int[] next = buildNext(needle);
    	int j = 0;
        for (int i=0; i<=len1-len2;){
        	while (j<len2 && s[i+j]==target[j]) j++;
        	if (j==len2) return i;
        	else {
        		if (j==0) i++;
        		else {
	        		i = i + j-next[j];
	        		j = next[j];
        		}
        	}
        }
        return -1;
    }
    
    //KMP2
    public int strStr4(String haystack, String needle){
    	char[] s = haystack.toCharArray();
    	char[] target = needle.toCharArray();
    	int len1 = s.length;
    	int len2 = target.length;
    	if (len2==0) return 0;
    	
    	int[] next = buildNext(needle);
    	for (int i=0, j=0; i<len1;){
    		if (s[i]==target[j]){
    			i++;
    			j++;
    		}
    		else if (i<len1){
    			if (j>0) j = next[j];
    			else i++;
    		}
    		if (j==len2) return i-len2;
    	}
    	return -1;
    }
    
    //Ref:http://blog.csdn.net/yutianzuijin/article/details/11954939
    //next表示该字符前面j个字符和needle的前j个字符一样，因此只需再比较s[j]和s[i]
    public int[] buildNext(String needle){
    	char[] s = needle.toCharArray();
    	int len = s.length;
    	int[] next = new int[len+1];
    	if (len==0) return next;
    	/*
    	for (int i = 1, j = 0; i < len; ) {
            if (s[i] == s[j])
                next[i++] = ++len;
            else if (j>0) j = next[j - 1];
            else next[i++] = 0;
        }*/
    	
    	next[0] = next[1] = 0;
    	int j = 0;
    	for (int i=1; i<len; i++){
    		while(s[j]!=s[i] && j>0) j = next[j];
    		if (s[j]==s[i]) next[i+1] = ++j;
    		else next[i+1] = 0;
    		//or:
    		//if (s[j]==s[i]) j++;
    		//next[i+1]=j;
    	}
    	return next;
    }
    
    //Rabin-Karp
    //Use Hash to compare first, if Hash1!=Hash2, drop it
    public int strStr2(String haystack, String needle){
    	char[] s = haystack.toCharArray();
    	char[] target = needle.toCharArray();
    	int len1 = s.length;
    	int len2 = target.length;
    	if (len1<len2) return -1;
        //int base = 256;
        //int prime = 127;
    	int h=1;
    	for (int i=0; i<len2-1; i++)
    		h = (h*256) % 127;
    	int hash1 = 0;
    	int hash2 = 0;
    	for (int i=0; i<len2; i++){
    		hash1 = (hash1 * 256 + s[i]) % 127;
    		hash2 = (hash2 * 256 + target[i]) % 127;
    	}
    	for (int i=0; i<=len1-len2; i++){
    		if (hash1==hash2){
    			int j;
    			for (j=0; j<len2; j++)
    				if (s[i+j]!=target[j]) break;
    			if (j==len2) return i;
    		}
    		else if (i<len1-len2){
    			hash1 = (256* (hash1 - s[i]*h) + s[i+len2]) % 127;
    			if (hash1<0) hash1 += 127;
    		}
    	}
    	return -1;	
    }
    
    public void main(String haystack, String needle){
    	int index0 = haystack.indexOf(needle);
    	int index1 = strStr(haystack, needle);
    	int index2 = strStr2(haystack, needle);
    	int index3 = strStr3(haystack, needle);
    	int index4 = strStr4(haystack, needle);
    	
    	System.out.println(index0+" "+index1+" "+index2+" "+index3+" "+index4);
    }
    
}
