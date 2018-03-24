package myLeetCode;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by WTIFS-Mac on 2018/3/24.

 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 */
public class L1TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> indexMap = new HashMap<>();
        for (int i=0; i<nums.length; i++) {
            int num = nums[i];
            int remain = target - num;
            if (indexMap.containsKey(remain)) return new int[]{indexMap.get(remain), i};
            indexMap.put(num, i);
        }
        return new int[]{};
    }
}
