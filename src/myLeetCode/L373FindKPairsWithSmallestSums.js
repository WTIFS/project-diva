/**
 * Created by WTIFS on 16/7/12.
 */
/*You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

 Define a pair (u,v) which consists of one element from the first array and one element from the second array.

 Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

 Example 1:
 Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

 Return: [1,2],[1,4],[1,6]

 The first 3 pairs are returned from the sequence:
 [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
 Example 2:
 Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

 Return: [1,1],[1,1]

 The first 2 pairs are returned from the sequence:
 [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 Example 3:
 Given nums1 = [1,2], nums2 = [3],  k = 3

 Return: [1,3],[2,3]

 All possible pairs are returned from the sequence:
 [1,3],[2,3]*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length) return [];
    var grid = [];
    var result = [];
    var queue = [];
    var width = nums1.length;
    var height = nums2.length;
    for (var i=0; i<nums1.length; i++) grid[i] = [];
    grid[0][0] ={
        val: nums1[0] + nums2[0],
        x: 0,
        y: 0,
        num1: nums1[0],
        num2: nums2[0]
    } ;
    queue.push(grid[0][0]);
    while(k && queue.length) {
        var current = queue.pop();
        var x = current.x;
        var y =current.y;
        result.push([current.num1, current.num2]);
        if ( x+1 < width && !grid[x+1][y]) {
            grid[x+1][y] = {
                val: nums1[x+1] + nums2[y],
                x: x+1,
                y: y,
                num1: nums1[x+1],
                num2: nums2[y]
            };
            insert(queue, grid[x+1][y]);
        }
        if (y+1 < height && !grid[x][y+1]) {
            grid[x][y+1] = {
                val: nums1[x] + nums2[y+1],
                x: x,
                y: y+1,
                num1: nums1[x],
                num2: nums2[y+1]
            };
            insert(queue, grid[x][y+1]);
        }
        k--;
    }
    return result;
};

function insert(queue, num) {
    var i = 0;
    while (queue.length && i<queue.length && num.val < queue[i].val) i++;
    queue.splice(i, 0, num);
}

//console.log(kSmallestPairs([1,7,11], [2,4,6], 3));

console.log(kSmallestPairs([1,1,2], [1,2,3], 10));

//console.log(kSmallestPairs([], [], 5));