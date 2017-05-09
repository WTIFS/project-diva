/**
 * Created by Yuanfei on 2017/5/8.
 */

var MAX_CAPACITY = 16;

var Queue = function(capacity) {
    if (!capacity) capacity = MAX_CAPACITY;
    if (capacity > MAX_CAPACITY) capacity = MAX_CAPACITY;
    this.capacity = capacity;
    this.nums = new Array(capacity);
    this.begin = 0;
    this.end = -1;
    this.cnt = 0;
};

//O(N)
Queue.prototype.push = function(num) {
    if (this.cnt==this.capacity) {
        console.log("OVERFLOW");
        return;
    }
    this.end = (this.end+1) % this.capacity;
    this.nums[this.end] = (num);
    this.cnt++;
    console.log(this);
};

//O(N)
Queue.prototype.pull = function() {
    if (this.cnt==0) {
        console.log("EMPTY QUEUE");
        return;
    }
    var result = this.nums[this.begin];
    this.begin = (this.begin+1) % this.capacity;
    this.cnt--;
    console.log(result);
    return result;
};

var queue = new Queue(2);
queue.push(1);
queue.pull();
queue.push(2);
queue.pull();
queue.push(3);
queue.push(4);
queue.pull();
queue.push(5);