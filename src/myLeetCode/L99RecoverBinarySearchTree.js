/**
 * Created by Yuanfei on 2017/3/7.
 */

var myBinaryTree = require("../myLib/myBinaryTree");

var TreeNode=function(val){
    this.val=val;
    this.left=this.right=null;
};

var node1;
var node2;
var prev;

var recoverTree=function(root){
    if (!root) return;
    node1=null;
    node2=null;
    prev=null;
    dfs(root);
    var tmp=node1.val;
    node1.val=node2.val;
    node2.val=tmp;
};

var dfs=function(root){
    if (!root) return;
    dfs(root.left);
    if (prev && prev.val>=root.val){
        if (!node1) node1=prev;
        node2=root;
    }
    prev=root;
    dfs(root.right);
};

var root = myBinaryTree.arrayToTree([4,6,2,1,3,5,7]);
recoverTree(root);
console.log(JSON.stringify(root, null, 2));

root = myBinaryTree.arrayToTree([0,1]);
recoverTree(root);
console.log(JSON.stringify(root, null, 2));

root = myBinaryTree.arrayToTree([1,null, 0]);
recoverTree(root);
console.log(JSON.stringify(root, null, 2));
