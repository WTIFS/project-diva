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
    var maxHeap = new MaxHeap();
    var result = [];
    for (var i=0; i<k; i++) maxHeap.push(nums[i]);
    result.push(maxHeap.top());
    for (var offset=0; offset<n-k; offset++) {
        maxHeap.pop();
        maxHeap.push(nums[k+offset]);
        result.push(maxHeap.top());
    }
    return result;
};

var MaxHeap = function() {
    this.nums = [];
};

MaxHeap.prototype.push = function(num) {
    var nums = this.nums;
    nums.push(num);
    var i = nums.length - 1;
    while (i>0) {
        var r = parseInt((i-1) / 2);
        if (nums[i]>nums[r]) {
            swap(nums, i, r);
            i = r;
        } else break;
    }
};


MaxHeap.prototype.pop = function() {
    var nums = this.nums;
    var n = nums.length;
    swap(nums, 0, n-1);
    nums.pop();
    n--;
    var i = 0;
    var largestIndex = 0;
    while (i<=parseInt((n-1)/2)) {
        var left = 2*i + 1;
        var right = left + 1;
        if (left<n && nums[left]>nums[largestIndex]) largestIndex = left;
        if (right<n && nums[right]>nums[largestIndex]) largestIndex = right;
        if (largestIndex != i) {
            swap(nums, i, largestIndex);
            i = largestIndex;
        } else break;
    }
};


MaxHeap.prototype.top = function() {
    var nums = this.nums;
    if (nums.length) return nums[0];
    else return null;
};


MaxHeap.prototype.setNums = function(args) {
    this.nums = args;
};

var swap = function(nums, a, b) {
    var tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
};