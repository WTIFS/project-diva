/**
 * Created by Yuanfei on 2017/4/12.
 */
/**
 Given a set of distinct integers, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]
 */

//nums的全组合

//Also see 78 / 90 Subsets, 39 / 40 Combinations,  46 / 47 Permutations, 131 Palindrome Partitioning

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var results = [];
    var totalCount = Math.pow(2, nums.length);
    for (var i=0; i<totalCount; i++) { //i=0 -> 2^n
        var result = [];
        for (var j=0; j<nums.length; j++) {
            if ((i>>j & 1)) result.push(nums[j]); //i的j位为1
        }
        results.push(result);
    }
    return results;
};

console.log(subsets([1,2,3]));