/**
 * Created by WTIFS-Mac on 2018/2/10.
 *
 * Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

 Two trees are duplicate if they have the same structure with same node values.

 Example 1:
 1
 / \
 2   3
 /   / \
 4   2   4
     /
   4
 The following are two duplicate subtrees:
 2
 /
 4
 and
 4
 Therefore, you need to return above trees' root in the form of a list.

 */

var myBinaryTree = require('../myLib/myBinaryTree');

//Definition for a binary tree node.
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    var result = [];
    var map = {};
    preorder(root, map, result);
    return result;
};

var preorder = function(root, map, result) {
    if (!root) return "#";
    var serial = root.val + "," + preorder(root.left, map, result) + "," + preorder(root.right, map, result);
    if (!map[serial]) map[serial] = 1;
    else {
        if (map[serial] == 1) result.push(root);
        map[serial] ++;
    }
    return serial;
};

var a1 = new TreeNode(1);
a1.left = new TreeNode(2);
a1.left.left = new TreeNode(4);
a1.right = new TreeNode(3);
a1.right.left = new TreeNode(2);
a1.right.left.left = new TreeNode(4);

var result = findDuplicateSubtrees(a1);
console.log(JSON.stringify(result, null, 2));