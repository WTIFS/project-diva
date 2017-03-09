/**
 * Created by Yuanfei on 2017/3/9.
 */
/**
 Given a complete binary tree, count the number of nodes.

 Explanation

 The height of a tree can be found by just going left. Let a single node tree have height 0. Find the height h of the whole tree. If the whole tree is empty, i.e., has height -1, there are 0 nodes.

 Otherwise check whether the height of the right subtree is just one less than that of the whole tree, meaning left and right subtree have the same height.

 If yes, then the last node on the last tree row is in the right subtree and the left subtree is a full tree of height h-1. So we take the 2^h-1 nodes of the left subtree plus the 1 root node plus recursively the number of nodes in the right subtree.
 If no, then the last node on the last tree row is in the left subtree and the right subtree is a full tree of height h-2. So we take the 2^(h-1)-1 nodes of the right subtree plus the 1 root node plus recursively the number of nodes in the left subtree.
 Since I halve the tree in every recursive step, I have O(log(n)) steps. Finding a height costs O(log(n)). So overall O(log(n)^2).
 */

var myBinaryTree = require("../myLib/myBinaryTree");

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function getHeight(root) {
    var h = -1;
    while (root) {
        h ++;
        root = root.left;
    }
    return h;
}

var countNodes = function(root) {
    var h = getHeight(root);
    var cnt = 0;
    while (root) {
        if (getHeight(root.right) == h-1) { //height(root) = height(root.right) +1; height(root.left) == height(root.right) == h-1
            //cnt(root.left) = 2^h - 1
            cnt += Math.pow(2, h);
            root = root.right;
        } else { //height(root.right) < height(root.left)
            cnt += 1 << (h-1);
            root = root.left;
        }
        h--;
    }
    return cnt;
};

//var root = myBinaryTree.arrayToTree();
console.log(countNodes(null));