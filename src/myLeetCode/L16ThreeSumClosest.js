/**
 * Created by WTIFS-Mac on 2017/8/6.
 *
 Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var minDiff = 99999;
    var result;
    var diff;

    nums.sort(cmp);
    for (var i=0; i<nums.length-2; i++) {
        var left = i+1;
        var right = nums.length-1;

        while (left<right) {

            var sum = nums[i] + nums[left] + nums[right];
            if (sum > target) {
                diff = sum - target;
                if (diff < minDiff) {
                    minDiff = diff;
                    result = sum;
                }

                right--;
                //while (right > left && nums[right] == nums[right - 1]) right--;

            } else {
                diff = target - sum;
                if (diff < minDiff) {
                    minDiff = diff;
                    result = sum;
                }

                left++;
                //while (left < right && nums[left + 1] == nums[left]) left++;
            }
        }
    }
    return result;
};

var cmp = function(a, b) {
    if (a==b) return 0;
    if (Number(a)<Number(b)) return -1;
    return 1;
};


var nums = [-1, 2, 1, -4];
console.log(threeSumClosest(nums, 1));

nums = [1, 1, 1, 0];
console.log(threeSumClosest(nums, 100));

nums = [0, 2, 1, -3];
console.log(threeSumClosest(nums, 1));

nums = [-1,0,1,1,55];
console.log(threeSumClosest(nums, 3));