/**
 * Created by Yuanfei on 2017/3/2.
 */

var myBinaryTree = require("../myLib/myBinaryTree");
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var prev;
//其实是用右左根的顺序遍历，并用pre记录上一子节点
var flatten2 = function(root) {
    if (!root) return;
    flatten2(root.right);
    flatten2(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
};


var flatten = function(root) {
    var traversal = [];
    dfs(root, traversal);
    for (var i=0; i<traversal.length; i++) {
        traversal[i].left = null;
        traversal[i].right = traversal[i+1];
    }
};

var dfs = function(root, traversal) {
    if (!root) return;
    traversal.push(root);
    dfs(root.left, traversal);
    dfs(root.right, traversal);
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6,7]);
flatten(root);
console.log(JSON.stringify(root));

root = myBinaryTree.arrayToTree([1,2]);
flatten2(root);
console.log(JSON.stringify(root));