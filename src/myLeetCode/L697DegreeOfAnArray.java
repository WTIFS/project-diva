package myLeetCode;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by WTIFS-Mac on 2018/3/24.

 Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 Example 1:
 Input: [1, 2, 2, 3, 1]
 Output: 2
 Explanation:
 The input array has a degree of 2 because both elements 1 and 2 appear twice.
 Of the subarrays that have the same degree:
 [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 The shortest length is 2. So return 2.
 Example 2:
 Input: [1,2,2,3,1,4,2]
 Output: 6
 Note:

 nums.length will be between 1 and 50,000.
 nums[i] will be an integer between 0 and 49,999.
 */
public class L697DegreeOfAnArray {

    public int findShortestSubArray(int[] nums) {
        if (nums.length <1) return 0;
        Map<Integer, Integer> countMap = new HashMap<>();
        Map<Integer, Integer> startMap = new HashMap<>();
        Map<Integer, Integer> endMap = new HashMap<>();
        int maxCount = 1;
        int minLength = Integer.MAX_VALUE;
        for (int i=0; i<nums.length; i++) {
            int num = nums[i];
            if (!countMap.containsKey(num)) {
                startMap.put(num, i);
            }
            int count = countMap.getOrDefault(num, 0) + 1;
            if (count > maxCount) maxCount = count;
            countMap.put(num, count);
            endMap.put(num, i);
        }
        for (Map.Entry<Integer, Integer> entry: countMap.entrySet()) {
            if (entry.getValue() == maxCount) {
                int gapLength = endMap.get(entry.getKey()) - startMap.get(entry.getKey());
                if (gapLength < minLength) minLength = gapLength;
            }
        }
        return minLength + 1;
    }

    public static void main(String[] main) {

    }

}
