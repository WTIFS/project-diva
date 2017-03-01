/**
 * Created by Yuanfei on 2017/3/1.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
    return split(inorder, postorder, 0, 0, inorder.length);
};

var split = function(inorder, postorder, inorderStart, postorderStart, len) {
    if (!len) return null;
    var rootVal = postorder[postorderStart + len - 1];
    var inorderRootIndex;
    for (var i=inorderStart; i<inorderStart + len; i++) if (inorder[i] == rootVal) inorderRootIndex = i;
    var leftLen = inorderRootIndex - inorderStart;
    var rightLen = inorderStart + len -1 - inorderRootIndex;

    var root = new TreeNode(rootVal);
    root.left = split(inorder, postorder, inorderStart, postorderStart, leftLen);
    root.right = split(inorder, postorder, inorderRootIndex +1, postorderStart + leftLen, rightLen);
    return root;
};

var test = buildTree([4,2,5,1,6,3,7], [4,5,2,6,7,3,1]);
//var test = buildTree([6,4,2,5,7,1], [6, 4, 7, 5, 2, 1]);
console.log(JSON.stringify(test, null, 2));