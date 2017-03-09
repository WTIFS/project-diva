/**
 * Created by Yuanfei on 2017/3/9.
 */

/**

 Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 For example:
 Given the following binary tree,
 1            <---
 /   \
 2     3         <---
 \     \
 5     4       <---
 You should return [1, 3, 4].
*/

var myBinaryTree = require("../myLib/myBinaryTree");

var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var currentRow = [];
    var nextRow = [root];
    while (nextRow.length) {
        currentRow = nextRow;
        nextRow = [];
        var right = currentRow[currentRow.length-1];
        result.push(right.val);
        for (var i=0; i<currentRow.length; i++) {
            var p = currentRow[i];
            if (p.left) nextRow.push(p.left);
            if (p.right) nextRow.push(p.right);
        }
    }
    return result;
};

var root = myBinaryTree.arrayToTree([1,2,3,4,5,6,7]);
console.log(rightSideView(root));

root = myBinaryTree.arrayToTree([1,2,3,null,5,null,4]);
console.log(rightSideView(root));