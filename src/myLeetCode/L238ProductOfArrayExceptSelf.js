/**
 * Created by Yuanfei on 2017/6/1.
 *
 Total Accepted: 95677
 Total Submissions: 197659
 Difficulty: Medium
 Contributor: LeetCode
 Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

 Solve it without division and in O(n).

 For example, given [1,2,3,4], return [24,12,8,6].

 Follow up:
 Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var results = new Array(len);
    var right = 1;
    results[0] = 1;
    for (var i=1; i<len; i++) {
        results[i] = results[i-1] * nums[i-1]; //results[1] = results[0] * nums[0] = 1*nums[0]
    }
    for (var j=len-2; j>=0; j--) {
        right *= nums[j+1];
        results[j] *= right;
    }
    return results;
};

console.log(productExceptSelf([1,2,3,4]));