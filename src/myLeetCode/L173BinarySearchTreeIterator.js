/**
 * Created by Yuanfei on 2017/3/9.
 */

var myBinaryTree = require("../myLib/myBinaryTree");

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var root = null;
    if (this.stack.length) {
        root = this.stack.pop();
        if (root.right) {
            var head = root.right;
            while (head) {
                this.stack.push(head);
                head = head.left;
            }
        }
    }
    return root ? root.val : null;
};

var root = myBinaryTree.arrayToTree([4,2,6,1,3,5,7]);
var i = new BSTIterator(root), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a);