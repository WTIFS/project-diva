/**
 * Created by Yuanfei on 2017/3/8.
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
var sortedArrayToBST = function(nums) {
    return devide(nums, 0, nums.length-1);
};

var devide = function(nums, start, end) {
    if (start > end) return null;
    else if (start == end) return new TreeNode(nums[start]);
    var mid = parseInt((start + end) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = devide(nums, start, mid-1);
    root.right = devide(nums, mid+1, end);
    return root;
};

var root = sortedArrayToBST([1,2,3,4,5,6,7]);
console.log(JSON.stringify(root, null, 2));