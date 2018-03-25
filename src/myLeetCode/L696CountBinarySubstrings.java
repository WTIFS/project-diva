package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/25.

 Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

 Substrings that occur multiple times are counted the number of times they occur.

 Example 1:
 Input: "00110011"
 Output: 6
 Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".

 Notice that some of these substrings repeat and are counted the number of times they occur.

 Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
 Example 2:
 Input: "10101"
 Output: 4
 Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 Note:

 s.length will be between 1 and 50,000.
 s will only consist of "0" or "1" characters.

 */
public class L696CountBinarySubstrings {

    static public int countBinarySubstrings(String s) {
        if (s.length()==0) return 0;
        int result = 0;
        int j = 0;
        while (j+1<s.length() && s.charAt(j+1) == s.charAt(j)) j++;
        if (j==s.length()) return 0;
        int countOfA = 0;
        int countOfB = j + 1;
        for (int i=j+1; i<s.length(); i++) {
            if (s.charAt(i) != s.charAt(i-1)) {
                result += Math.min(countOfA, countOfB);
                countOfA = countOfB;
                countOfB = 1;
            } else countOfB++;
        }
        result += Math.min(countOfA, countOfB);
        return result;
    }

    public static void main(String[] s) {
        String s1 = "00110011";
        System.out.println(countBinarySubstrings(s1));

        String s2 = "10101";
        System.out.println(countBinarySubstrings(s2));
    }
}
