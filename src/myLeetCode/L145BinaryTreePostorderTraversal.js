/**
 * Created by Yuanfei on 2017/2/28.
 */

/**
 Given a binary tree, return the postorder traversal of its nodes' values.

 For example:
 Given binary tree {1,#,2,3},
 1
 \
 2
 /
 3
 return [3,2,1].
**/

var myBinaryTree = require("../myLib/myBinaryTree");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//其实是先序遍历，但倒着输出
var postorderTraversal2 = function(root) {
    var traversal = [];
    if (!root) return traversal;
    var stack = [];
    var currentRoot = root;
    while (stack.length || currentRoot) {
        if (currentRoot) {
            stack.push(currentRoot);
            traversal.unshift(currentRoot.val);
            currentRoot = currentRoot.right;
        } else {
            currentRoot = stack.pop();
            currentRoot = currentRoot.left;
        }
    }
    return traversal;
};

var postorderTraversal = function(root) {
    var traversal = [];
    dfs(root, traversal);
    return traversal;
};

var dfs = function(root, traversal) {
    if (!root) return;
    if (root.left) dfs(root.left, traversal);
    if (root.right) dfs(root.right, traversal);
    traversal.push(root.val);
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6,7]);
console.log(postorderTraversal(root));
console.log(postorderTraversal2(root));