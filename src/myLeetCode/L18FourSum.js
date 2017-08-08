/**
 * Created by WTIFS-Mac on 2017/8/8.
 *
 Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

 Note: The solution set must not contain duplicate quadruplets.

 For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

 A solution set is:
 [
 [-1,  0, 0, 1],
 [-2, -1, 1, 2],
 [-2,  0, 0, 2]
 ]
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [];
    nums.sort(compare);
    for (var i=0; i<nums.length-3; i++) {
        if (i===0 || (i>0 && nums[i]!=nums[i-1])) {
            var row = threeSum(nums, i+1, nums[i], target - nums[i]);
            if (row.length) result = result.concat(row);
        }
    }
    return result;
};


var threeSum = function(nums, start, firstNum, sum) {
    var result = [];
    for (var i=start; i<nums.length-2; i++) {
        if (i===start || (i>start && nums[i]!=nums[i-1])) {
            var left = i+1;
            var right = nums.length-1;
            var target = sum - nums[i];
            while (left < right) {
                if (nums[left] + nums[right] == target) {
                    result.push([firstNum, nums[i], nums[left], nums[right]]);
                    while (left<right && nums[left+1] == nums[left]) left ++;
                    while (left<right && nums[right-1] == nums[right]) right --;
                    left++;
                    right--;
                } else if (nums[left] + nums[right] < target) {
                    left++;
                    while (left<right && (nums[left] + nums[right] < target)) left ++;
                } else {
                    right--;
                    while (left<right && nums[left] + nums[right] > target) right --;
                }
            }
        }
    }

    return result;
};

var compare = function(a, b) {
    if (a==b) return 0;
    if (Number(a)<Number(b)) return -1;
    return 1;
};


var nums = [1, 0, -1, 0, -2, 2];
console.log(fourSum(nums, 0));

nums = [2,1,0,-1];
console.log(fourSum(nums, 2));