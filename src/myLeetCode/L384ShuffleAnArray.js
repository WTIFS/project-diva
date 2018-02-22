/**
 * Created by WTIFS-Mac on 2017/12/3.
 *

 Shuffle a set of numbers without duplicates.

 Example:

 // Init an array with set 1, 2, and 3.
 int[] nums = {1,2,3};
 Solution solution = new Solution(nums);

 // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 solution.shuffle();

 // Resets the array back to its original configuration [1,2,3].
 solution.reset();

 // Returns the random shuffling of array [1,2,3].
 solution.shuffle();

 算法:
 假设[0..i-1]这i个数字, 每个数字都以1/i的概率在任意x位置上
 则对于i, 以1/(i+1)的概率随机替换[0..i]中的任意数字j
 i保留在i位置上的概率P(j==i): 1/(i+1)
 [0..i-1]中某数字j在i位置上的概率 = 1/(i+1)
 [0..i-1]中某数字j留在原位置上的概率: P(j在j位置上 * j未被i替换) = 1/i * i/(i+1) = 1/(i+1)
 此时对于[0..i]这i+1个数字, 每个数字都以1/(i+1)的概率在任意x位置上
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var nums = this.nums;
    var a = nums.slice(0);
    for (var i=1; i<a.length; i++) {
        var j = parseInt(Math.random() * (i+1));
        if (i!=j) swap(a, i, j);
    }
    return a;
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var nums = [1,2,3];
var solution = new Solution(nums);
for (var i=0; i<5; i++) console.log(solution.shuffle());