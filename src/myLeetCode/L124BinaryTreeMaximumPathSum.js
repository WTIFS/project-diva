/**
 * Created by Yuanfei on 2017/3/10.
 */

/**
 Given a binary tree, find the maximum path sum.

 For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

 For example:
 Given the below binary tree,

 1
 / \
 2   3

 Return 6.
 */

var myBinaryTree = require('../myLib/myBinaryTree');

var maxPathSum = function(root) {
    if (!root) return 0;
    else return dfs(root).pathSum;
};

//heightSum: max path sum with root as start
//pathSum: max (path sum of left sub, path sum of right sub, path sum through root)
 var dfs = function(root) {
    if (!root) return {pathSum: -30000, heightSum: -30000};
    //else if (!root.left && !root.right) return {pathSum: root.val, heightSum: root.val};

    var left = dfs(root.left);
    var right = dfs(root.right);
    var leftPathSum = left.pathSum;
    var leftHeightSum = left.heightSum;

    var rightPathSum = right.pathSum;
    var rightHeightSum = right.heightSum;

    var pathThroughRoot = Math.max(leftHeightSum, 0) + Math.max(rightHeightSum, 0) + root.val;
    var heightSum = Math.max(leftHeightSum, rightHeightSum, 0) + root.val;
    var pathSum = Math.max(pathThroughRoot, leftPathSum, rightPathSum);
    return {pathSum: pathSum, heightSum: heightSum};
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6,7]);
console.log(maxPathSum(root));

root = myBinaryTree.arrayToTree([1,2,null, 4,5, null, null,6, null, null, 7]);
console.log(maxPathSum(root));

root = myBinaryTree.arrayToTree([-3]);
console.log(maxPathSum(root));

root = myBinaryTree.arrayToTree([-1, -3]);
console.log(maxPathSum(root));