package myLeetCode;

/*
 * 
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.
 */

public class L125ValidPalindrome {
    public boolean isPalindrome(String s) {
        if (s.length()==0) return true;
        char[] chars = s.toCharArray();
        int i=0, j=chars.length-1;
        while (i<j){
            while (i<j && !Character.isLetter(chars[i]) && !Character.isDigit(chars[i])) i++;
            while (i<j && !Character.isLetter(chars[j]) && !Character.isDigit(chars[j])) j--;
            if (i<j && Character.toLowerCase(chars[i])!=Character.toLowerCase(chars[j])){
            	return false;
            }
            else{
            	i++;j--;
            }
        }
        return true;
    }
    public void main(String s){
    	System.out.println(isPalindrome(s));
    }
}
