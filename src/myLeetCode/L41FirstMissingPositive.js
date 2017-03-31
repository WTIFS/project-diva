/**
 * Created by Yuanfei on 2017/3/31.
 */
/*
 Given an unsorted integer array, find the first missing positive integer.

 For example,
 Given [1,2,0] return 3,
 and [3,4,-1,1] return 2.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (!nums.length) return 1;
    var k = partition(nums);
    //idx: 0 - k
    //value: 1 - k+1
    //若value为正，则把index=value-1位置上的数标为负数
    //然后遍历一遍，第一个正数的index+1即为结果
    //这个方法避免了额外的空间开销
    for (var i =0; i<=k; i++) {
        var idx = abs(nums[i]) - 1;
        if (idx>=0 && idx<=k) negative(nums, idx);
    }
    var j=0;
    while (j<=k && nums[j]<=0) j++;
    return j+1;
};

var partition = function(nums) {
    var lastNegativeIndex = 0;
    while (lastNegativeIndex<nums.length && nums[lastNegativeIndex]>0) lastNegativeIndex++;
    for (var i=lastNegativeIndex + 1; i<nums.length; i++) {
        if (nums[i]>0) {
            swap(nums, lastNegativeIndex, i);
            lastNegativeIndex++;
        }
    }
    return lastNegativeIndex - 1;
};

var swap = function(nums, i, j) {
    nums[i] ^= nums[j];
    nums[j] ^= nums[i];
    nums[i] ^= nums[j];
};

var negative = function(nums, idx) {
    if (nums[idx] > 0) nums[idx] = -nums[idx];
};

var abs = function(num) {
    if (num>=0) return num;
    else return -num;
};

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));