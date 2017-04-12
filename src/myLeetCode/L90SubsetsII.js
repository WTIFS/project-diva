/**
 * Created by Yuanfei on 2017/4/12.
 */
/**
 Given a collection of integers that might contain duplicates, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,2], a solution is:

 [
 [2],
 [1],
 [1,2,2],
 [2,2],
 [1,2],
 []
 ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var results = [];
    nums.sort();
    recurse(nums, 0, [], results);
    return results;
};

var recurse = function(nums, startIndex, selectedNums, results) {
    results.push(hardCopy(selectedNums));
    for (var i=startIndex; i<nums.length; i++) {

        //[1, 2(1), 2(2)]中, startIndex==1时, [1, 2(1)]和[1, 2(2)]是一样的，因此只选i==startIndex时的2(1) 后面重复的2跳过
        if (i>startIndex && nums[i]==nums[i-1]) continue;

        selectedNums.push(nums[i]);
        recurse(nums, i + 1, selectedNums, results);
        selectedNums.pop();
    }
};

var hardCopy = function(a) {
    var b = [];
    for (var i=0; i< a.length; i++) b.push(a[i]);
    return b;
};

console.log(subsetsWithDup([1,2,2]));