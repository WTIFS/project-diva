/**
 * Created by Yuanfei on 2017/4/7.
 */
/**
 Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

 If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

 The replacement must be in-place, do not allocate extra memory.

 Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1
 */

/**
 * @param {number[]} nums
 */
var nextPermutation = function(nums) {
    var n = nums.length;
    if (n) {
        var i = n-1;
        while (i-1 >=0 && nums[i-1]>=nums[i]) i--;
        if (i>0) {
            var j = i;
            while (j + 1 < n && nums[i - 1] < nums[j + 1]) j++;
            swap(nums, i - 1, j);
        }
        revert(nums, i, n - 1);
        return nums;
    }
};

var swap = function(nums, i, j) {
    if (i>=j) return;
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

var revert = function(nums, i, j) {
    for (var k=0; k<=parseInt((j-i)/2); k++) {
        swap(nums, i+k, j-k);
    }
};

console.log(nextPermutation([1,5,1]));
console.log(nextPermutation([2,3,1]));
console.log(nextPermutation([1,3,2]));
console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,1,5]));