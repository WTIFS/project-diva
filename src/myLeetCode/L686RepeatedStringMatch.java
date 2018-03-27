package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/28.

 Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

 For example, with A = "abcd" and B = "cdabcdab".

 Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

 Note:
 The length of A and B will be between 1 and 10000.

 */
public class L686RepeatedStringMatch {

    public int repeatedStringMatch(String A, String B) {
        int lenA = A.length();
        int lenB = B.length();
        for (int i=0, j=0; i<lenA; i++) {
            while (j<lenB && A.charAt((i+j)%lenA) == B.charAt(j)) j++;
            if (j==lenB) return (int)Math.ceil((float)(i+lenB)/lenA);
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(Math.ceil(10f/4));
    }

}
