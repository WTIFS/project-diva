/**
 * Created by WTIFS-Mac on 15/3/17.
 */

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

var myBinaryTree = require("../myLib/myBinaryTree");
var max;

var findFrequentTreeSum = function(root) {
    max = 0;
    var countMap = {};
    var result = [];
    dfs(root, countMap);
    for (var key in countMap) {
        if (countMap[key]==max) result.push(Number(key));
    }
    return result;
};

var dfs = function(root, countMap) {
    if (!root) return 0;
    var left = dfs(root.left, countMap);
    var right = dfs(root.right, countMap);
    var sum = left + right+ root.val;
    if (countMap[sum]) countMap[sum] ++;
    else countMap[sum] = 1;
    if (countMap[sum] > max) max = countMap[sum];
    return sum;
};

var root = myBinaryTree.deserialize([5, 2, -3]);
console.log(findFrequentTreeSum(root));

root = myBinaryTree.deserialize([5, 2, -5]);
console.log(findFrequentTreeSum(root));



