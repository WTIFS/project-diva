/**

 Input:
 1
 / \
 2   5
 /
 3
 /
 4
 Output:

 [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
 Note: The height of binary tree is in the range of [1, 10].

 **/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var myBST = require('../myLib/myBinaryTree');

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    if (!root) return [];
    var height = getHeight(root);
    var results = [];
    var columns = Math.pow(2, height)-1;
    for (var rowIndex=0; rowIndex<height; rowIndex++) {
        var row = [];
        for (var columnIndex=0; columnIndex<columns; columnIndex++) row.push("");
        results.push(row);
    }
    dfs(root, results, 0, 0, columns-1);
    return results;
};

var dfs = function(root, results, rowIndex, startIndex, endIndex) {
    if (startIndex > endIndex || !root) return;
    var row = results[rowIndex];
    var middle = parseInt((startIndex + endIndex)/2);
    row[middle] = root.val.toString();
    dfs(root.left, results, rowIndex+1, startIndex, middle-1);
    dfs(root.right, results, rowIndex+1, middle+1, endIndex);
};

var getHeight = function(root) {
    if (!root) return 0;
    else return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};

var a = [1,2,3,4,5,6];
a = myBST.deserialize(a);
console.log(printTree(a));

a = [1, 2, 5, 3, null, null, null, 4];
a = myBST.deserialize(a);
console.log(printTree(a));