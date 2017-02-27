/**
 * Created by WTIFS-Mac on 18/2/17.
 */

//二叉树的直径 / 相距最远的俩点
var TreeNode = function(val, left, right) {
    return {
        left: left,
        right: right,
        val: val
    }
};

var dfs = function(root) {
    if (!root) return {depth: -1, maxDist: 0};
    var leftSub = dfs(root.left);
    var rightSub = dfs(root.right);
    var selfMax = leftSub.depth + rightSub.depth + 2;
    var depth = Math.max(leftSub.depth, rightSub.depth) + 1;
    var maxDist = Math.max(leftSub.maxDist, rightSub.maxDist, selfMax);
    return {depth: depth, maxDist: maxDist};
};

var dfsv2 = function(root) {
    if (!root) return {depth: -1, maxDist: 0, left: null, right: null};
    if (!root.left && !root.right) return {depth: 0, maxDist: 0, left: root, right: root};
    var leftSub = dfsv2(root.left);
    var rightSub = dfsv2(root.right);
    var depth = Math.max(leftSub.depth, rightSub.depth) + 1;
    var selfMax = leftSub.depth + rightSub.depth + 2;
    var leftNode = root;
    var rightNode = root;
    var maxDist;
    if (leftSub.maxDist > rightSub.maxDist) {
        leftNode = leftSub.left;
        maxDist = leftSub.maxDist;
        if (selfMax.maxDist > leftSub.maxDist) {
            rightNode = rightSub.right;
            maxDist = selfMax.maxDist;
        }
    } else {
        rightNode = rightSub.right;
        maxDist = selfMax.maxDist;
        if (selfMax.maxDist > rightSub.maxDist) {
            leftNode = leftSub.left;
            maxDist = selfMax;
        }
    }
    return {depth: depth, maxDist: maxDist, left: leftNode, right: rightNode};
};

var main = function() {
    var t1 = new TreeNode()
};

main();