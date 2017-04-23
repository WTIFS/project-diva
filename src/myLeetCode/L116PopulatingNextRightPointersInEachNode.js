/**
 * Created by Yuanfei on 2017/4/20.
 */
/**
 Given a binary tree

 struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
 Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

 Initially, all next pointers are set to NULL.

 Note:

 You may only use constant extra space.
 You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
 For example,
 Given the following perfect binary tree,
 1
 /  \
 2    3
 / \  / \
 4  5  6  7
 After calling your function, the tree should look like:
 1 -> NULL
 /  \
 2 -> 3 -> NULL
 / \  / \
 4->5->6->7 -> NULL
 */

var myBinaryTree = require("../myLib/myBinaryTree");

function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = this.next = null;
}

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) return;
    root.next = null;
    var currentLeft = root;
    while (currentLeft) {
        var currentP = currentLeft;
        while (currentP && currentP.left) {
            currentP.left.next = currentP.right;
            currentP.right.next = currentP.next ? currentP.next.left: null;
            currentP = currentP.next;
        }
        currentLeft = currentLeft.left;
    }
};

//var root = myBinaryTree.deserialize([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
var root = myBinaryTree.deserialize([1,2,3,4,5,6,7]);
connect(root);
console.log(JSON.stringify(root, null, 2));