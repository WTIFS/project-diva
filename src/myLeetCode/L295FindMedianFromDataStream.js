/**
 * Created by Yuanfei on 2017/6/7.

 Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

 Examples:
 [2,3,4] , the median is 3

 [2,3], the median is (2 + 3) / 2 = 2.5

 Design a data structure that supports the following two operations:

 void addNum(int num) - Add a integer number from the data stream to the data structure.
 double findMedian() - Return the median of all elements so far.
 For example:

 addNum(1)
 addNum(2)
 findMedian() -> 1.5
 addNum(3)
 findMedian() -> 2

 */

var PriorityQueue = function(cmp) {
    this.nums = [];
    if (!cmp) this.cmp = defaultCmp;
    else this.cmp = cmp;
};

//默认为最大堆
var defaultCmp = function(a, b) {
    return a>b;
};

var swap = function(nums, a, b) {
    var tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
};

PriorityQueue.prototype.push = function(num) {
    var nums = this.nums;
    var cmp = this.cmp;
    nums.push(num);

    //sift up
    var child = nums.length - 1;
    while (child>0) {
        var parent = (child-1) >> 1;
        if (cmp(nums[child], nums[parent])) {
            swap(nums, child, parent);
            child = parent;
        } else break;
    }
};

PriorityQueue.prototype.pop = function() {
    var cmp = this.cmp;
    var nums = this.nums;
    if (!nums.length) return;
    var n = nums.length;
    var result = nums[0];
    var x = nums.pop();
    if (!nums.length) return x;
    n--;
    nums[0] = x;

    //sift down
    var parent = 0;
    var half = (n-1)>>1;
    while (parent <= half) { //last parent
        var child = parent;
        var left = (parent<<1) + 1;
        var right = left + 1;
        if (left<n && cmp(nums[left], nums[child])) child = left;
        if (right<n && cmp(nums[right], nums[child])) child = right;
        if (child != parent) {
            nums[parent] = nums[child];
            nums[child] = x;
            parent = child;
        } else break;
    }
    return result;

};

PriorityQueue.prototype.size = function() {
    return this.nums.length;
};

PriorityQueue.prototype.top = function() {
    var nums = this.nums;
    if (nums.length) return nums[0];
    else return 0;
};

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new PriorityQueue();
    this.minHeap = new PriorityQueue(function(a, b) {
        return a<b;
    });
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var self = this;
    var maxHeap = self.maxHeap;
    var minHeap = self.minHeap;


    maxHeap.push(num);
    minHeap.push(maxHeap.pop());
    if (maxHeap.size() < minHeap.size()) {
        maxHeap.push(minHeap.pop());
    }

    /*
    if (!maxHeap.size()) {maxHeap.push(num); return;}
    var rightOfLeft = maxHeap.top();
    if (num<=rightOfLeft) maxHeap.push(num);
    else minHeap.push(num);

    if (maxHeap.size() - minHeap.size() >= 2) minHeap.push(maxHeap.pop());
    if (minHeap.size() - maxHeap.size() >= 2) maxHeap.push(minHeap.pop());
    */
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var self = this;
    var maxHeap = self.maxHeap;
    var minHeap = self.minHeap;
    if (maxHeap.size() > minHeap.size()) return maxHeap.top();
    //else if (maxHeap.size() < minHeap.size()) return minHeap.top();
    else return (maxHeap.top() + minHeap.top()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder();
obj.addNum(1);
console.log(obj.findMedian());

obj.addNum(2);
console.log(obj.findMedian());

obj.addNum(5);
console.log(obj.findMedian());

obj.addNum(4);
console.log(obj.findMedian());

obj.addNum(3);
console.log(obj.findMedian());


obj.maxHeap.nums = [];
obj.minHeap.nums = [];

obj.addNum(-1);
console.log(obj.findMedian());
obj.addNum(-2);
console.log(obj.findMedian());
obj.addNum(-3);
console.log(obj.findMedian());
obj.addNum(-4);
console.log(obj.findMedian());
obj.addNum(-5);
console.log(obj.findMedian());