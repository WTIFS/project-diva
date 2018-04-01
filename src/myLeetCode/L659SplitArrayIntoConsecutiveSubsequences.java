package myLeetCode;

import myLib.myPrinter;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by WTIFS-Mac on 2018/4/1.

 You are given an integer array sorted in ascending order (may contain duplicates), you need to split them into several subsequences, where each subsequences consist of at least 3 consecutive integers. Return whether you can make such a split.

 Example 1:
 Input: [1,2,3,3,4,5]
 Output: True
 Explanation:
 You can split them into two consecutive subsequences :
 1, 2, 3
 3, 4, 5
 Example 2:
 Input: [1,2,3,3,4,4,5,5]
 Output: True
 Explanation:
 You can split them into two consecutive subsequences :
 1, 2, 3, 4, 5
 3, 4, 5
 Example 3:
 Input: [1,2,3,4,4,5]
 Output: False
 Note:
 The length of the input is in range of [1, 10000]

 */
public class L659SplitArrayIntoConsecutiveSubsequences {

    public static boolean isPossible(int[] nums) {
        Map<Integer, Integer> numCount = new HashMap<>();
        Map<Integer, Integer> subCount = new HashMap<>();
        for (int num: nums) numCount.put(num, numCount.getOrDefault(num, 0)+1);
        for (int num: nums) {
            if (numCount.getOrDefault(num, 0) == 0) continue;
            if (subCount.getOrDefault(num - 1, 0) > 0) {
                subCount.put(num - 1, subCount.get(num - 1) - 1);
                subCount.put(num, subCount.getOrDefault(num, 0) + 1);
            } else if (numCount.getOrDefault(num + 1, 0) > 0 && numCount.getOrDefault(num + 2, 0) > 0) {
                numCount.put(num + 1, numCount.get(num + 1) - 1);
                numCount.put(num + 2, numCount.get(num + 2) - 1);
                subCount.put(num + 2, subCount.getOrDefault(num + 2, 0) + 1);
            } else return false;
            numCount.put(num, numCount.get(num) - 1);
        }
        return true;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1,2,3,3,4,5};
        myPrinter.pl(isPossible(nums));
    }

}
