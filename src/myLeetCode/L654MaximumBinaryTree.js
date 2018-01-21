/**
 * Created by WTIFS-Mac on 2018/1/21.
 *
 *
 Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

 The root is the maximum number in the array.
 The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
 The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
 Construct the maximum tree by the given array and output the root node of this tree.

 Example 1:
 Input: [3,2,1,6,0,5]
 Output: return the tree root node representing the following tree:

 6
 /   \
 3     5
 \    /
 2  0
 \
 1
 Note:
 The size of the given array will be in the range [1,1000].

 */


//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 /**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
     return construct(nums, 0, nums.length-1);
};

var construct = function(nums, start, end) {
    if (start == end) return new TreeNode(nums[start]);
    if (start > end) return null;
    var middle = findIndexOfMax(nums, start, end);
    var root = new TreeNode(nums[middle]);
    root.left = construct(nums, start, middle-1);
    root.right = construct(nums, middle+1, end);
    return root;
};

var findIndexOfMax = function(nums, start, end) {
    var indexOfMax = start;
    for (var i=start; i<=end; i++) if (nums[i]>nums[indexOfMax]) indexOfMax = i;
    return indexOfMax;
};

var nums = [3,2,1,6,0,5];
console.log(JSON.stringify(constructMaximumBinaryTree(nums), null, 2));