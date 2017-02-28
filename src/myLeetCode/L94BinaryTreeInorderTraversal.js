/**
 * Created by WTIFS-Mac on 27/2/17.
 */

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
//中序 左根右


var inorderTraversal3 = function(root) {
    if (!root) return [];
    var stack = [root];
    var traversal = [];
    var currentRoot = root;

    while (stack.length) {
        while (currentRoot.left) {
            stack.push(currentRoot.left);
            currentRoot = currentRoot.left;
        }
        traversal.push(currentRoot.val); //会导致没有右子树时重复压栈，所以应该用下面的traversal2
        currentRoot = stack.pop();
        traversal.push(currentRoot.val);
        if (currentRoot.right) stack.push(currentRoot.right);
    }
    return traversal;
};

var inorderTraversal2 = function(root) {
    var queue = [];
    var traversal = [];
    var currentRoot = root;
    while (currentRoot || queue.length) {
        while (currentRoot) {
            queue.push(currentRoot);
            currentRoot = currentRoot.left;
        }
        currentRoot = queue.pop();
        traversal.push(currentRoot.val);
        currentRoot = currentRoot.right;
    }
    return traversal;
};

var inorderTraversal = function(root) {
    var traversal = [];
    traverse(root, traversal);
    return traversal;
};

var traverse = function(root, traversal) {
    if (!root) return;
    if (root.left) traverse(root.left, traversal);
    traversal.push(root.val);
    if (root.right) traverse(root.right, traversal);
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6]);
var traversal = inorderTraversal2(root);
console.log(traversal);

/**

 Given a binary tree, return the inorder traversal of its nodes' values.

 For example:
 Given binary tree [1,null,2,3],
 1
 \
 2
 /
 3
 return [1,3,2].

 Note: Recursive solution is trivial, could you do it iteratively?

 **/