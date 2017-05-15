/**
 * Created by Yuanfei on 2017/5/15.
 */
/**
 Find the contiguous subarray within an array (containing at least one number) which has the largest product.

 For example, given the array [2,3,-2,4],
 the contiguous subarray [2,3] has the largest product = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums.length) return 0;
    var max = nums[0];
    var min = nums[0];
    var result = max;

    for (var i=1; i<nums.length; i++) {
        var maxProduct = max * nums[i];
        var minProduct = min * nums[i];

        max = Math.max(maxProduct, minProduct, nums[i]);
        min = Math.min(maxProduct, minProduct, nums[i]);
        result = Math.max(result, max);
    }

    return result;
};

console.log(maxProduct([2,3,-2,4]));