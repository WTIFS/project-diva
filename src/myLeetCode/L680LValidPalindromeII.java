package myLeetCode;

public class L680LValidPalindromeII {
    public static boolean validPalindrome(String s) {
        int start =0;
        int end = s.length()-1;
        while (start<end && s.charAt(start) == s.charAt(end)) {
            start++;
            end--;
        }
        if (start>=end) return true;
        else return validPalindrome(s, start+1, end) || validPalindrome(s, start, end-1);
    }

    public static boolean validPalindrome(String s, int start, int end) {
        while (start<end && s.charAt(start) == s.charAt(end)) {
            start++;
            end--;
        }
        return (start>=end);
    }

    public static void main(String[] args) {
        System.out.println(validPalindrome("aba"));
        System.out.println(validPalindrome("abc"));
        System.out.println(validPalindrome("abac"));
        System.out.println(validPalindrome("abacd"));
        System.out.println(validPalindrome("ebcbbececabbacecbbcbe"));
    }
}
