package myLeetCode;

import java.util.Stack;

/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
 */

public class L101SymmetricTree {
	
	public boolean isSymmetric(TreeNode root) {
		if (root==null) return true;
		return isSymmetric(root.left, root.right);
	}
	
	public boolean isSymmetric(TreeNode left, TreeNode right) {
		if (left==null && right==null) return true;
		if (left==null || right==null) return false;
		if (left.val!=right.val) return false;
		return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
	}
	
	public boolean isSymmetric3(TreeNode root){
		if (root==null) return true;
		Stack<TreeNode> stack = new Stack<TreeNode>();
		stack.push(root.left);
		stack.push(root.right);
		TreeNode left, right;
		while (!stack.isEmpty()){
			right = stack.pop();
			left = stack.pop();
			if (left!=null && right!=null){
				if (left.val==right.val){
					stack.push(left.left);
					stack.push(right.right);
					stack.push(left.right);
					stack.push(right.left);
				}
				else return false;
			}
			else if (left==null && right==null){}
			else return false;
		}
		return true;
	}
	
    public boolean isSymmetric2(TreeNode root) {
        String s1 = DFS1(root);
        String s2 = DFS2(root);
        if (s1.equals(s2)) return true;
        else return false;
    }
    
    public String DFS1(TreeNode root){
    	String s = "";
    	if (root==null) return " ";
    	s += root.val;
    	s += DFS1(root.left);
    	s += DFS1(root.right);
    	return s;
    }
    
    public String DFS2(TreeNode root){
    	String s = "";
    	if (root==null) return " ";
    	s += root.val;
    	s += DFS2(root.right);
    	s += DFS2(root.left);
    	return s;
    }
    
    public void main(TreeNode root){
    	System.out.println(isSymmetric(root));
    	System.out.println(DFS1(root));
    	System.out.println(DFS2(root));
    	System.out.println(isSymmetric2(root));
    	System.out.println(isSymmetric3(root));
    }
    
}
