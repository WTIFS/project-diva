/**
 * Created by WTIFS-Mac on 2017/10/21.
 *
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

 Formally the function should:
 Return true if there exists i, j, k
 such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
 Your algorithm should run in O(n) time complexity and O(1) space complexity.

 Examples:
 Given [1, 2, 3, 4, 5],
 return true.

 Given [5, 4, 3, 2, 1],
 return false.
 */



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var min1 = Number.MAX_VALUE;
    var min2 = Number.MAX_VALUE;
    for (var i=0; i<nums.length; i++) {
        var num = nums[i];
        if (num<min1) min1 = num;
        else if (num>min1 && num<min2) min2 = num;
        else if (num>min2) return true;
    }
    return false;
};

var nums = [1,2,3];
console.log(increasingTriplet(nums));

nums = [3,2,1];
console.log(increasingTriplet(nums));

nums = [2,4,1,2];
console.log(increasingTriplet(nums));

nums = [1,5,4,3,2,3];
console.log(increasingTriplet(nums));