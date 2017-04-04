/**
 * Created by WTIFS-Mac on 4/4/17.
 */
/**
 Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return 0;
    var maxSum = nums[0];
    var currentSum = nums[0];

    for (var i=1; i<nums.length; i++) {
        if (currentSum>=0) currentSum += nums[i];
        else currentSum = nums[i];
        if (currentSum >= maxSum) maxSum = currentSum;
    }
    return maxSum;
};