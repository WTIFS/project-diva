/**
 * Created by WTIFS-Mac on 8/4/17.
 */
/*
 Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

 Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

 Note:
 You are not suppose to use the library's sort function for this problem.

 click to show follow up.

 Follow up:
 A rather straight forward solution is a two-pass algorithm using counting sort.
 First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

 Could you come up with an one-pass algorithm using only constant space?

 */

/**
 * @param {number[]} nums
 */
var sortColors = function(nums) {
    var firstOne = -1;
    var firstTwo = -1;
    for (var i=0; i<nums.length; i++) {
        if (nums[i]==1 && firstOne<0) firstOne = i;
        if (nums[i]==2 && firstTwo<0) firstTwo = i;
        if (nums[i]==0 && firstOne>=0) {
            swap(nums, i, firstOne);
            firstOne++;
        }
        if (nums[i]==0 && firstTwo>=0) {
            swap(nums, i, firstTwo);
            firstTwo++;
        }
        if (nums[i]==1 && firstTwo>=0) {
            swap(nums, i, firstTwo);
            if (firstOne==i) firstOne = firstTwo;
            firstTwo++;
        }
    }
    return nums;
};

var swap = function(nums, i, j) {
    if (i <= j) return;
    nums[i] ^= nums[j];
    nums[j] ^= nums[i];
    nums[i] ^= nums[j];
};

console.log(sortColors([2,0]));
console.log(sortColors([1,0]));
console.log(sortColors([2,1]));
console.log(sortColors([1,0,0]));
console.log(sortColors([2,0,0]));
console.log(sortColors([2,1,0]));
console.log(sortColors([2,1,1]));
console.log(sortColors([0,2,1,0]));
console.log(sortColors([0,1,2,1,0]));
console.log(sortColors([0,2,1,2,1,0]));
console.log(sortColors([2,2,1,1,0,0]));

