/**
 * Created by Yuanfei on 2017/3/8.
 */
/**
 Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

 Basically, the deletion can be divided into two stages:

 Search for a node to remove.
 If the node is found, delete the node.
 Note: Time complexity should be O(height of tree).
 */

//TODO: 思路2: 找到右子树的最小值, 另右子树val = 该值，然后去删该叶节点

var myBinaryTree = require("../myLib/myBinaryTree");

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    var target = root;
    var prev = null;
    var p;
    var leftSub = null;
    var sub = null;
    while (target) {
        if (key == target.val) break;
        else {
            prev = target;
            if (key < target.val) target = target.left;
            else target = target.right;
        }
    }
    if (target) {

        leftSub = target.left;
        p = target.right;

        if (target == root) { //删根
            if (p) {
                while (p.left) p = p.left;
                p.left = leftSub;
                root = root.right;
            } else root = leftSub;
        } else {
            if (p) { //找到右子树的最左叶, 并将左子树移到左子叶底下
                while (p.left) p = p.left;
                p.left = leftSub;
                sub = target.right;
            } else sub = leftSub;

            if (prev.left == target) {
                prev.left = sub;
            } else {
                prev.right = sub;
            }
        }
    }
    return root;
};

var root = myBinaryTree.arrayToTree([4,2,6,1,3,5,7]);
var r2 = deleteNode(root, 7);
console.log(JSON.stringify(r2, null, 2));

root = new TreeNode(0);
r2 = deleteNode(root, 0);
console.log(JSON.stringify(r2, null, 2));

root = new myBinaryTree.arrayToTree([3,2,4,1]);
r2 = deleteNode(root, 2);
console.log(JSON.stringify(r2, null, 2));