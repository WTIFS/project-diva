/**
 * Created by WTIFS-Mac on 2017/12/3.
 *
 *
 Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

 Note that it is the kth smallest element in the sorted order, not the kth distinct element.

 Example:

 matrix = [
 [ 1,  5,  9],
 [10, 11, 13],
 [12, 13, 15]
 ],
 k = 8,

 return 13.
 Note:
 You may assume k is always valid, 1 ≤ k ≤ n2.


 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var minHeap = new MinHeap();
    var n = matrix.length;
    var cnt = 0;
    var result = [];
    var used = new Array(n);
    for (var i=0; i<n; i++) used[i] = new Array(n);

    minHeap.push({val: matrix[0][0], x: 0, y: 0});
    used[0][0] = true;
    while (cnt<k) {
        var num = minHeap.pop();
        var x = num.x;
        var y = num.y;
        if (x+1<n && !used[x+1][y]) {
            minHeap.push({val: matrix[x+1][y], x: x+1, y: y});
            used[x+1][y] = true;
        }
        if (y+1<n && !used[x][y+1]) {
            minHeap.push({val: matrix[x][y+1], x: x, y: y+1});
            used[x][y+1] = true;
        }
        result = num.val;
        cnt++;
    }
    return result;
};

var MinHeap = function() {
    var nums = [];
    this.nums = nums;

    this.push = function(num) {
        nums.push(num);
        var i = nums.length-1;
        var root = parseInt((i-1)/2);
        while (i && nums[i].val<nums[root].val) {
            swap(nums, root, i);
            i = root;
            root = parseInt((i-1)/2);
        }
    };

    this.pop = function() {
        if (!nums.length) return;
        swap(nums, 0, nums.length-1);
        var result = nums.pop();
        var n = nums.length;
        var i = 0;
        while (i<=parseInt(n/2)-1) {
            var left = i * 2 + 1;
            var right = left + 1;
            var smallestIndex = i;
            if (left<n && nums[left].val < nums[smallestIndex].val) smallestIndex = left;
            if (right<n && nums[right].val < nums[smallestIndex].val) smallestIndex = right;
            if (smallestIndex != i) {
                swap(nums, i, smallestIndex);
                i = smallestIndex;
            } else break;
        }
        return result;
    };
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

var  matrix = [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
    ];
for (var k=1; k<=9; k++) {
    var result = kthSmallest(matrix, k);
    console.log(result);
}