/**
 * Created by Yuanfei on 2017/6/5.

 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 Note:
 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.

 Tag: 2 pointers

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    var writeIndex = 0;

    for (var readIndex=0; readIndex<nums.length; readIndex++) {
        if (nums[readIndex]!=0) nums[writeIndex++] = nums[readIndex];
    }
    for (var i=writeIndex; i<nums.length; i++) nums[i] = 0;

};

var nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);