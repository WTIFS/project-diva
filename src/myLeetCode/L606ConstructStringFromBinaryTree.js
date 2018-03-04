/**
 * Created by WTIFS-Mac on 2018/3/4.

 You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

 The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

 Example 1:
 Input: Binary tree: [1,2,3,4]
 1
 /   \
 2     3
 /
 4

 Output: "1(2(4))(3)"

 Explanation: Originallay it needs to be "1(2(4)())(3()())",
 but you need to omit all the unnecessary empty parenthesis pairs.
 And it will be "1(2(4))(3)".
 Example 2:
 Input: Binary tree: [1,2,3,null,4]
 1
 /   \
 2     3
 \
 4

 Output: "1(2()(4))(3)"

 Explanation: Almost the same as the first example,
 except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

 */


var myBinaryTree = require('../myLib/myBinaryTree');

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return '';
    var s = t.val.toString();
    if (t.left && t.right) {
        s += '(' + tree2str(t.left) + ')';
        s += '(' + tree2str(t.right) + ')';
    } else if (t.left) {
        s += '(' + tree2str(t.left) + ')';
    } else if (t.right) {
        s += '()(' + tree2str(t.right) + ')';
    }
    return s;
};


var root = myBinaryTree.deserialize([2, 1, 3, 0, 1.5, 2.5]);
var serializedData = tree2str(root);
console.log(serializedData);