/**
 * Created by Yuanfei on 2017/3/15.
 */
/**
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

    Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
    For example:
    Given BST [1,null,2,2],
    1
\
2
/
2
return [2].

 Note: If a tree has more than one mode, you can return them in any order.

 Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var myBinaryTree = require("../myLib/myBinaryTree");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var maxVal;
var maxValCount;
var currentValCount;
var prev;

var findMode = function(root) {
    maxVal = [];
    maxValCount = 0;
    prev = null;
    inorder(root);
    return maxVal;
};

//最坏情况下空间占用为O(N) [1,2,3,4,4]
//要想真的O(1)，遍历2遍，第一遍求出maxCount，第二遍开个a[maxCount]的数组
var inorder = function(root) {
    if (!root) return 0;
    inorder(root.left);

    if (prev) {
        if (root.val == prev.val) { //consecutive node
            currentValCount++;
        } else { //new node
            currentValCount = 1;
        }
        if (currentValCount > maxValCount) {
            maxValCount = currentValCount;
            maxVal = [root.val];
        } else if (currentValCount == maxValCount) {
            maxVal.push(root.val);
        }
    } else {
        currentValCount = 1;
        maxValCount = 1;
        maxVal = [root.val];
    }
    prev = root;

    inorder(root.right);
};

var root = myBinaryTree.deserialize([1, null, 2, 2]);
console.log(findMode(root));

root = myBinaryTree.deserialize([1, null, 2]);
console.log(findMode(root));

root = myBinaryTree.deserialize([6,2,8,0,4,7,9,null,null,2,6]);
console.log(findMode(root));

root = myBinaryTree.deserialize([2147483647]);
console.log(findMode(root));
