/**
 * Created by WTIFS-Mac on 15/3/17.
 */

/**
Given a binary tree, find the leftmost value in the last row of the tree.

    Example 1:
Input:

    2
    / \
1   3

Output:
    1
Example 2:
Input:

    1
    / \
2   3
/   / \
4   5   6
/
7

Output:
    7
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
 * @return {number}
 */
//其实就是先右后左的BST的最后一个叶子
var findBottomLeftValue2 = function(root) {
    var queue = [root];
    while (queue.length) {
        root = queue.shift();
        if (root.right) queue.push(root.right);
        if (root.left) queue.push(root.left);
    }
    return root.val;
};

var findBottomLeftValue = function(root) {
    var queue = [root];
    var currentLen = 1;
    var nextLen;
    var start = 0;
    var bottomLeft;
    while (currentLen) {
        nextLen = 0;
        bottomLeft = queue[start];
        for (var i = start; i<start + currentLen; i++) {
            var p = queue[i];
            if (p.left) {
                queue.push(p.left);
                nextLen ++;
            }
            if (p.right) {
                queue.push(p.right);
                nextLen ++;
            }
        }
        start += currentLen;
        currentLen = nextLen;
    }
    return bottomLeft.val;
};

var root = myBinaryTree.deserialize([2,1,3]);
console.log(findBottomLeftValue(root) == findBottomLeftValue2(root));

root = myBinaryTree.deserialize([1,2,3,4,5,6,null,null,7,null]);
console.log(findBottomLeftValue(root) == findBottomLeftValue2(root));