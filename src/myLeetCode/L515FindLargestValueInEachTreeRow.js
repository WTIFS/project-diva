/**
 * Created by WTIFS-Mac on 15/3/17.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    var queue = [root];
    var result = [];
    while (queue.length) {
        var len = queue.length;
        var max = 0;
        for (var i=0; i<len; i++) {
            var p = queue.shift();
            if (p.val > max) max = p.val;
            if (p.left) queue.push(p.left);
            if (p.right) queue.push(p.right);
        }
        result.push(max);
    }
    return result;
};