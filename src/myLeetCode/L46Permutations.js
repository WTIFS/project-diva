/**
 * Created by Yuanfei on 2017/4/3.
 */
/**

 Given a collection of distinct numbers, return all possible permutations.

 For example,
 [1,2,3] have the following permutations:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var results = [];
    recurse(nums, 0, results);
    return results;
};



var recurse = function(nums, startIdx, results) {
    if (startIdx==nums.length-1) results.push(nums.slice(0));
    else {
        for (var i = startIdx; i < nums.length; i++) {
            swap(nums, startIdx, i);
            recurse(nums, startIdx+1, results);
            swap(nums, startIdx, i);
        }
    }
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

console.log(permute([]));
console.log(permute([1]));
console.log(permute([1,2]));
console.log(permute([1,2,3]));
console.log(permute([1,2,3,4]));
