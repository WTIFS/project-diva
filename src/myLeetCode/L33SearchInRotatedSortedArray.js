/**
 * Created by Yuanfei on 2017/3/30.
 */
/*
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

 You are given a target value to search. If found in the array return its index, otherwise return -1.

 You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var b = 0;
    var e = nums.length - 1;
    var mid = parseInt((b+e) / 2);
    while (b<e-1) {
        if (nums[mid]>nums[b]) b = mid;
        else e = mid;
        mid = parseInt((b+e) / 2);
    }
    mid = nums[e]>nums[b] ? e: b;
    if (target>=nums[0]) return binarySearch(nums, 0, mid, target);
    else return binarySearch(nums, mid+1, nums.length-1, target);
};

var binarySearch = function(nums, b, e, target) {
    var mid = parseInt((b+e) / 2);
    while (b<e) {
        if (nums[mid] == target) return mid;
        else if (nums[mid]<target) b = mid+1;
        else e = mid;
        mid = parseInt((b+e) / 2);
    }
    return nums[mid] == target ? mid: -1;
};

console.log(search([1,3], 3));
console.log(search([4,5,6,7,0,1,2], 4));
console.log(search([4,5,6,7,0,1,2], 5));
console.log(search([4,5,6,7,0,1,2], 6));
console.log(search([4,5,6,7,0,1,2], 7));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 1));
console.log(search([4,5,6,7,0,1,2], 2));
console.log(search([4,5,6,7,0,1,2], 8));