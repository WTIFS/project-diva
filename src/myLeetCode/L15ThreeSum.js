/**
 * Created by Yuanfei on 2017/3/23.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    var result = [];
    nums.sort(compare);
    for (var i=0; i<nums.length-2; i++) {
        if (i===0 || (i>0 && nums[i]!=nums[i-1])) {
            var left = i+1;
            var right = nums.length-1;
            var sum = -nums[i];
            while (left < right) {
                if (nums[left] + nums[right] == sum) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left<right && nums[left+1] == nums[left]) left ++;
                    while (left<right && nums[right-1] == nums[right]) right --;
                    left++;
                    right--;
                } else if (nums[left] + nums[right] < sum) {
                    while (left<right && (nums[left] + nums[right] < sum)) left ++;
                } else {
                    while (left<right && nums[left] + nums[right] > sum) right --;
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

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));