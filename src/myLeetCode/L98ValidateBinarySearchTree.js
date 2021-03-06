/**
 * Created by Yuanfei on 2017/3/3.
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var myBinaryTree = require("../myLib/myBinaryTree");

var prev;
var isValidBST = function(root) {
    prev = null;
    return inorderTraverse(root);
};

var inorderTraverse = function(root) {
    if (!root) return true;
    if (!inorderTraverse(root.left)) return false;
    if (prev!=null && prev.val>=root.val) return false;
    prev = root;
    return (inorderTraverse(root.right));
};

var root = myBinaryTree.arrayToTree([1, 1]);
//var root = myBinaryTree.arrayToTree([10, 5, 15, null, null, 6, 20]);
console.log(isValidBST(root));
