/**
 Created by WTIFS-Mac on 2018/3/4.

 Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

 Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

 The encoded string should be as compact as possible.

 Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

 和L297二叉树序列化相似, 但BST有个性质: 中序遍历时结果为 根 (小于根的部分) (大于根的部分), 根据这个特性, 可以直接用中序遍历序列化和反序列化

 */

var myBinaryTree = require('../myLib/myBinaryTree');

/**
 * Definition for a binary tree node.
 **/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return '';

    var stack = [root];
    var list = [];

    while (stack.length) {
        var p = stack.pop();
        list.push(p.val);
        if (p.right) stack.push(p.right);
        if (p.left) stack.push(p.left);
    }
    return list.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;
    var list = data.split(',');
    for (var i=0; i<list.length; i++) list[i] = Number(list[i]);
    return dfs(list, 0, list.length);
};

/**
 * @param list
 * @param start inclusive
 * @param end exclusive
 * @returns {TreeNode}
 */
var dfs = function(list, start, end) {
    var root = new TreeNode(list[start]);
    var splitIndex = start+1; //start+1: 左子树的根
    while (splitIndex <end && list[splitIndex]<list[start]) splitIndex++; //splitIndex: 右子树的根
    if (splitIndex > start+1) root.left = dfs(list, start+1, splitIndex);
    if (splitIndex < end) root.right = dfs(list, splitIndex, end);
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var root = myBinaryTree.deserialize([2, 1, 3, 0, 1.5, 2.5]);
var serializedData = serialize(root);
//console.log(serialize(root));

var deserializedData = deserialize(serializedData);
console.log(deserializedData);