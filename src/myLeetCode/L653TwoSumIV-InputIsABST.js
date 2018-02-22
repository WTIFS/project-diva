/**
 * Created by WTIFS-Mac on 2018/1/21.

 Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

 Example 1:
 Input:
 5
 / \
 3   6
 / \   \
 2   4   7

 Target = 9

 Output: True
 Example 2:
 Input:
 5
 / \
 3   6
 / \   \
 2   4   7

 Target = 28

 Output: False

 */


//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var hash = {};
    return dfs(root, hash, k);

};

var dfs = function(root, hash, k) {
    if (!root) return false;
    if (hash[k-root.val]) return true;
    hash[root.val] = true;
    return dfs(root.left, hash, k) || dfs(root.right, hash, k);
};
