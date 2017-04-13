/**
 * Created by Yuanfei on 2017/4/13.
 */
/**
 Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 Each number in C may only be used once in the combination.

 Note:
 All numbers (including target) will be positive integers.
 The solution set must not contain duplicate combinations.
 For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 A solution set is:
 [
 [1, 7],
 [1, 2, 5],
 [2, 6],
 [1, 1, 6]
 ]
 */

//Also see 78 / 90 Subsets, 39 / 40 Combinations,  46 / 47 Permutations, 131 Palindrome Partitioning

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var results = [];
    candidates.sort(cmp);
    recurse(candidates, 0, target, [], results);
    return results;
};

var recurse = function(nums, start, remain, currentPicked, results) {
    if (remain<0) return;
    if (remain == 0 ) {
        results.push(hardCopy(currentPicked));
        return;
    }
    for (var i=start; i<nums.length; i++) {
        if (nums[i]>remain) return;
        if (i==start || nums[i]!=nums[i-1]) {
            currentPicked.push(nums[i]);
            recurse(nums, i+1, remain-nums[i], currentPicked, results);
            currentPicked.pop();
        }
    }
};

var hardCopy = function(nums) {
    var b = [];
    nums.forEach(function(num) {
        b.push(num);
    });
    return b;
};

var cmp = function(a, b) {
    if (a>b) return 1;
    if (a==b) return 0;
    return -1;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));