/**
 * Created by Yuanfei on 2017/3/2.
 */

var myBinaryTree = require("../myLib/myBinaryTree");

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    var currentLevel = [root];
    var nextLevel = [];
    var left2Right = true;

    var result = [];
    var currentTraversal;
    var currentNode;
    while (currentLevel.length) {
        currentTraversal = [];
        while (currentLevel.length) {
            currentNode = currentLevel.pop();
            currentTraversal.push(currentNode.val);
            if (left2Right) {
                if (currentNode.left) nextLevel.push(currentNode.left);
                if (currentNode.right) nextLevel.push(currentNode.right);
            } else { //right -> left
                if (currentNode.right) nextLevel.push(currentNode.right);
                if (currentNode.left) nextLevel.push(currentNode.left);
            }
        }
        result.push(currentTraversal);
        currentLevel = nextLevel;
        nextLevel = [];
        left2Right = !left2Right;
    }
    return result;
};

//var root = myBinaryTree.arrayToTree([1,2,3,4,5,6,7]);
var root = myBinaryTree.arrayToTree([3,9,20,null, null, 15, 7]);
console.log(zigzagLevelOrder(root));