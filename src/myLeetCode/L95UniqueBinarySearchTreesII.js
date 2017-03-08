/**
 * Created by WTIFS-Mac on 8/3/17.
 */

var myBinaryTree = require("../myLib/myBinaryTree");

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var generateTrees = function(n) {
    if (!n) return [];
    var currentLevel = [new TreeNode(1)];

    for (var i=1; i<n; i++) {
        var nextLevel = [];
        var top = new TreeNode(i+1);
        for (var j=0; j<currentLevel.length; j++) {
            var head = currentLevel[j];
            var root = currentLevel[j];
            while (root) {
                var rightSub = root.right;
                root.right = top; //insert i to root's right sub
                if (rightSub) top.left = rightSub;
                nextLevel.push(hardCopy(head));
                top.left = null;
                root.right = rightSub; //rocover
                root = root.right;
            }
            top.left = head;
            nextLevel.push(hardCopy(top));
            top.left = null;
        }

        currentLevel = nextLevel;
    }

    return currentLevel;
};

var hardCopy = function(root) {
    if (!root) return;
    var root2 = new TreeNode(root.val);
    dfsAndCopy(root, root2);
    return root2;
};

var dfsAndCopy = function(root1, root2) {
    if (root1.left) {
        root2.left = new TreeNode(root1.left.val);
        dfsAndCopy(root1.left, root2.left);
    }
    if (root1.right) {
        root2.right = new TreeNode(root1.right.val);
        dfsAndCopy(root1.right, root2.right);
    }
};

//var t1 = myBinaryTree.arrayToTree([1,2,null,3]);
//console.log(JSON.stringify(hardCopy(t1), null, 2));

console.log(generateTrees(3));