/**
 * Created by Yuanfei on 2017/6/2.
 * Max Heap
 */

var MaxHeap = function() {
    this.nums = [];
};





MaxHeap.prototype.init = function() {
    var nums = this.nums;
    var n = nums.length;
    for (var r = parseInt((n-1)/2); r>=0; r--) { //root = last parent -> 0
        var i = r;
        var largestIndex = i;
        while (i<n) {
            var left = 2*i + 1;
            var right = left + 1;
            if (left<n && nums[left]>nums[largestIndex]) largestIndex = left;
            if (right<n && nums[right]>nums[largestIndex]) largestIndex = right;
            if (largestIndex != i) {
                swap(nums, i, largestIndex);
                i = largestIndex;
            } else break;
        }
    }
};


MaxHeap.prototype.push = function(num) {
    var nums = this.nums;
    nums.push(num);
    var i = nums.length - 1;
    while (i>0) {
        var r = parseInt((i-1) / 2);
        if (nums[i]>nums[r]) {
            swap(nums, i, r); //上浮不影响原有父子大小关系, 可以放心上浮
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
        if (largestIndex != i) { //必须挑最大的下沉, 才能保证新的父子关系是对的
            swap(nums, i, largestIndex);
            i = largestIndex;
        } else break;
    }

};


MaxHeap.prototype.setNums = function(args) {
    this.nums = args;
};

MaxHeap.prototype.size = function() {
    return this.nums.length;
};


MaxHeap.prototype.top = function() {
    var nums = this.nums;
    if (nums.length) return nums[0];
    else return null;
};



var swap = function(nums, a, b) {
    var tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
};

module.exports = new MaxHeap();


var myMaxHeap = new MaxHeap();
for (var i=0; i<10; i++) {
    myMaxHeap.push(i);
    console.log(myMaxHeap.nums);
}

for (var j=0; j<10; j++) {
    myMaxHeap.pop();
    console.log(myMaxHeap.nums);
}
