package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/31.

 Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

 Example 1:
 Input: 2736
 Output: 7236
 Explanation: Swap the number 2 and the number 7.
 Example 2:
 Input: 9973
 Output: 9973
 Explanation: No swap.
 Note:
 The given number is in the range [0, 108]

 */
public class L670MaximumSwap {

    public int maximumSwap(int num) {
        int[] lastPosition = new int[10];
        char[] digits = String.valueOf(num).toCharArray();
        for (int i=0; i<digits.length; i++) {
            lastPosition[digits[i]-'0'] = i; //记录每个数字出现的最后位置
        }
        for (int i=0; i<digits.length; i++) {
            int digit = digits[i] - '0';
            for (int k=9; k>digit; k--) { //如果有比digit大的数字就交换位置
                if (lastPosition[k]>i) {
                    swap(digits, i, lastPosition[k]);
                    return Integer.parseInt(new String(digits));
                }
            }
        }
        return num;
    }

    void swap(char[] digits, int i, int j) {
        char tmp = digits[i];
        digits[i] = digits[j];
        digits[j] = tmp;
    }

}
