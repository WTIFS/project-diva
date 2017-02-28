/**
 * Created by Yuanfei on 2017/2/28.
 */

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
var myBinaryTree = require('../myLib/myBinaryTree');

//前序 根左右
var preorderTraversal = function(root) {
    var traversal = [];
    var queue = [root]; //用队列
    var currentRoot;
    while (queue.length) {
        currentRoot = queue.shift();
        traversal.push(currentRoot.val);
        if (currentRoot.right) queue.unshift(currentRoot.right);
        if (currentRoot.left) queue.unshift(currentRoot.left);
    }
    return traversal;
};

var preorderTraversal2 = function(root) {
    var traversal = [];
    dfsTraverse(root, traversal);
    return traversal;
};

var dfsTraverse = function(root, traversal) {
    if (!root) return;
    traversal.push(root.val);
    if (root.left) dfsTraverse(root.left, traversal);
    if (root.right) dfsTraverse(root.right, traversal);
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6]);
console.log(preorderTraversal(root));