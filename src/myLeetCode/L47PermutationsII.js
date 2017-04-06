/**
 * Created by Yuanfei on 2017/4/5.
 */
/**
 Given a collection of numbers that might contain duplicates, return all possible unique permutations.

 For example,
 [1,1,2] have the following unique permutations:
 [
 [1,1,2],
 [1,2,1],
 [2,1,1]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var results = [];
    nums.sort();
    recurse(nums, 0, results);
    return results;
};

var recurse = function(nums, startIndex, results) {
    if (startIndex>=nums.length-1) {
        results.push(nums);
        return;
    }
    for (var i=startIndex; i<nums.length; i++) {
        if (i>startIndex && nums[i]==nums[startIndex]) {

        } else {
            swap(nums, startIndex, i);
            recurse(nums.slice(0), startIndex+1, results);
            //swap(nums, startIndex, i);
        }
    }
};

var swap = function(nums, i, j) {
    if (i==j) return;
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

var a = [1,1,2];
var b = [1,2,3];
//var c = [5,5,4,3,2,1];
console.log(permuteUnique([1,1,2,2]));
//console.log(permuteUnique(b));
//console.log(permuteUnique(a));
//console.log(permuteUnique(c));

/**
 Really takes me a lot of time to understand why not swapping back.
 I'll give an example here.

 Take [1,2,2] for example.

 step1: we get [1,2,2].

 step2: [2,1,2]. (swap 1 & 2)

 step3: [2,2,1]. (swap 2 & 1)

 Back to step2: If we recover the numbers back to [1, 2, 2],
 then in the next for loop, we'll get [2, 2, 1], which is a duplicate. (swap 2 & 1)

 While if we do not recover the numbers, then the code if (i != pos&& nums[i] == nums[pos]) will prevent the swap of (2, 2)
 */