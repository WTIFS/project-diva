/**
 * Created by Yuanfei on 2017/6/7.
 * 自己实现最大最小堆
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
    var result = nums[0];
    var n = nums.length;
    var x = nums.pop();
    if (!nums.length) return;
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
};



module.exports = new PriorityQueue();



var p1 = new PriorityQueue();
var p2 = new PriorityQueue(function(a, b) {
    return a<b;
});

for (var i=0; i<2; i++) {
    var p = [p1, p2][i];
    p.push(1);
    p.push(2);
    p.push(6);
    p.push(5);
    p.push(7);
    p.push(3);
    p.push(4);
    console.log(p.nums);

    p.pop();
    console.log(p.nums);

    p.pop();
    console.log(p.nums);

    p.pop();
    console.log(p.nums);

    p.pop();
    console.log(p.nums);

    console.log('\n');
}