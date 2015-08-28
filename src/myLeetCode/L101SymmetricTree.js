
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root==null) return true;
	stack = new Array();
    stack.push(root.left);
    stack.push(root.right);
    while (stack.length>0){
    	right = stack.pop();
    	left = stack.pop();
    	if (left!=null && right!=null){
    		if (left.val!==right.val) return false;
    		else {
    			
    			stack.push(left.left);
    			stack.push(right.right);
    			stack.push(left.right);
    			stack.push(right.left);
    		}
    	}
    	else if (left==null && right==null) {}
    	else return false;
    }
    return true;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));