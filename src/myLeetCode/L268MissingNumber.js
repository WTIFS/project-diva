/**
 * Created by Yuanfei on 2017/6/5.

 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

 For example,
 Given nums = [0, 1, 3] return 2.

 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

 //a^a = 0, 所以异或一遍nums，再异或一遍0-n，相同的会被消除，剩下的即为result

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var result = 0;
    for (var i=0; i<nums.length; i++) {
        result ^=  nums[i];
        result ^= i;
    }
    return result ^ nums.length;
};

console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([0, 1, 2, 3]));
console.log(missingNumber([0, 1, 2, 3, 4, 6]));
console.log(missingNumber([1, 2, 3, 4, 5, 6]));