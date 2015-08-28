package myLeetCode;

import java.util.Stack;

/*
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 */

public class L100SameTree {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p==null || q==null) return p==q;
        if (p.val!=q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    public boolean isSameTree2(TreeNode p, TreeNode q){
    	if (p==null || q==null) return p==q;
    	if (p.val!=q.val) return false;
    	Stack<TreeNode> stack = new Stack<TreeNode>();
		stack.push(p.left);
		stack.push(q.left);
		stack.push(p.right);
		stack.push(q.right);
    	while (!stack.isEmpty()){
    		q = stack.pop();
    		p = stack.pop();
    		if (p!=null && q!=null){
	    		if (p.val!=q.val) return false;
	    		else{
		    		stack.push(p.left);
		    		stack.push(q.left);
		    		stack.push(p.right);
		    		stack.push(q.right);
	    		}
    		}
    		else if (p==null && q==null) {}
    		else return false;
    	}
    	return true;
    }
    
    public void main(TreeNode p, TreeNode q){
    	System.out.println(isSameTree(p, q));
    }
}
