/**
 * Created by Yuanfei on 2017/3/1.
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

//画图就懂了
var buildTree = function(preorder, inorder) {
    return split(preorder, inorder, 0, 0, preorder.length);
};

var split = function(preorder, inorder, preorderStart, inorderStart, len) {
    if (!len) return null;
    //if (len==1) return new TreeNode(preorder[preorderStart]);
    var rootVal = preorder[preorderStart];
    var inorderRootIndex;
    for (var i=inorderStart; i<inorderStart + len; i++) if (inorder[i] == rootVal) inorderRootIndex = i;
    var leftLen = inorderRootIndex - inorderStart;
    var rightLen = inorderStart + len -1 - inorderRootIndex;

    // preoder
    // root: preorder[preorderStart]
    // left: preorderStart + 1 to preorderStart + leftLen - 1
    // right: preorderStart + leftLen to preorderStart + len - 1

    // inorder
    // root: inorder[inorderRootIndex]
    // left: inorderStart to inorderRootIndex - 1
    // right: inorderRootIndex +1 to inorderStart + len - 1

    var root = new TreeNode(rootVal);
    root.left = split(preorder, inorder, preorderStart +1, inorderStart, leftLen);
    root.right = split(preorder, inorder, preorderStart + 1 + leftLen, inorderRootIndex +1, rightLen);
    return root;
};

var test = buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]);
//var test = buildTree([1,2,4,6,5,7], [6,4,2,5,7,1]);
console.log(JSON.stringify(test, null, 2));