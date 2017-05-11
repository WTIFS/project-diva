/**
 * Created by Yuanfei on 2017/5/11.
 */
/**

 A peak element is an element that is greater than its neighbors.

 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

 You may imagine that num[-1] = num[n] = -∞.

 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

 click to show spoilers.

 Note:
 Your solution should be in logarithmic complexity.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums.length) return -1;
    var start = 0;
    var end = nums.length - 1;

    while (start<end) {
        var mid = parseInt( (start + end) / 2);
        if (mid>0 && nums[mid-1]>=nums[mid]) {
            end = mid - 1;
        } else if (nums[mid]<=nums[mid+1]) {
            start  = mid + 1;
        } else return mid;
    }
    return start;
};

var nums1 = [1, 2, 3, 2, 1, 2, 1];
var nums2 = [1];
var nums3 = [1, 1];
var nums4 = [1, 2];
var nums5 = [2, 1];
console.log(findPeakElement(nums1));
console.log(findPeakElement(nums2));
console.log(findPeakElement(nums3));
console.log(findPeakElement(nums4));
console.log(findPeakElement(nums5));

