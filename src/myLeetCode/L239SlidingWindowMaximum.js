/**
 * Created by Yuanfei on 2017/6/2.
 *
 Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

 For example,
 Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

 Window position                Max
 ---------------               -----
 [1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 Therefore, return the max sliding window as [3,3,5,5,6,7].

 Note:
 You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

 Follow up:
 Could you solve it in linear time?
 *
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var n = nums.length;
    var candidates = [];
    var result = [];
    for (var i=0; i<n; i++) {
        if (candidates.length && candidates[0]<i-k+1)  //window range: i-k+1 ~ i, len = k; remove indices less than i-k+1
            candidates.shift();

        while (candidates.length && nums[i] >= nums[candidates[candidates.length-1]]) //new num is larger than former nums, delete the former nums as they won't be the max
            candidates.pop();

        candidates.push(i);

        if (i>=k-1) result.push(nums[candidates[0]]);
    }
    return result;
};


var Node = function(val, cnt) {
    this.val = val;
    this.count = cnt;
};

//单调递增数组
var MonoQueue = function() {
    this.queue = [];
};

MonoQueue.prototype.push = function(num) {
    var candidates = this.queue;
    var newCandidate = new Node(num, 1);
    while (candidates.length && num >= candidates[candidates.length-1].val) {
        newCandidate.count += candidates.pop().count;
    }
    candidates.push(newCandidate);
};

MonoQueue.prototype.shift = function() {
    var candidates = this.queue;
    if (candidates.length) {
        if (candidates[0].count>1) candidates[0].count--;
        else candidates.shift();
    }
};

MonoQueue.prototype.getMax = function() {
    return this.queue[0].val;
};

var maxSlidingWindow2 = function(nums, k) {
    var candidates = new MonoQueue();
    var result = [];
    for (var i=0; i<k; i++) candidates.push(nums[i]);
    result.push(candidates.getMax());
    for (var j=k; j<nums.length; j++) {
        candidates.push(nums[j]);
        candidates.shift();
        result.push(candidates.getMax());
    }
    return result;
};


console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1,3,1,2,0,5], 3));
console.log(maxSlidingWindow2([1,3,1,2,0,5], 3));