/**
 * Created by Yuanfei on 2017/4/13.
 */
/**
 Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.

 Note:
 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 For example, given candidate set [2, 3, 6, 7] and target 7,
 A solution set is:
 [
 [7],
 [2, 2, 3]
 ]
 */

//Also see 78 / 90 Subsets, 39 / 40 Combinations,  46 / 47 Permutations, 131 Palindrome Partitioning

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var results = [];
    recurse(candidates, 0, target, [], results);
    return results;
};

var recurse = function(nums, start, remain, currentPicked, results) {
    if (remain<0) return;
    if (remain==0) {
        results.push(hardCopy(currentPicked));
        return;
    }
    for (var i=start; i<nums.length; i++) {
        currentPicked.push(nums[i]);
        recurse(nums, i, remain-nums[i], currentPicked, results);
        currentPicked.pop();
    }
};

var hardCopy = function(nums) {
    var b = [];
    nums.forEach(function(num) {
        b.push(num);
    });
    return b;
};

console.log(combinationSum([3,2,5,1], 7));