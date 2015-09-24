package myLeetCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

public class L236LowestCommonAncestorOfABinaryTree {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        
    	if (root==null) return root;
        
        if (root==p || root==q) return root;
        
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        if (left!=null && right!=null) return root;
        else if (left==null) return right;
        	 else return left;
        
        //return null;
    }
    
    //stack overflow
	public TreeNode lowestCommonAncestor2(TreeNode root, TreeNode p, TreeNode q) {
		Stack<TreeNode> path1 = new Stack<TreeNode>();
		DFS(root, p, path1);
		Stack<TreeNode> path2 = new Stack<TreeNode>();
		DFS(root, q, path2);
		Object[] route1 = path1.toArray();
		Object[] route2 = path2.toArray();
		int len = Math.min(route1.length, route2.length);
		int i = 0;
		while (i<len && route1[i]==route2[i]) i++;
		if (i>0) return (TreeNode)route1[i-1];
		else return null;
    }
    
	public Boolean DFS(TreeNode root, TreeNode p, Stack<TreeNode> path){
		if (root==p) {return true;}
		path.push(root);
		if (root.left!=null) 
			if (DFS(root.left, p, path)) return true;
		if (root.right!=null) 
			if (DFS(root.right, p, path)) return true;
		path.pop();
		return false;
	}
    
    
    public void main(TreeNode root, TreeNode p, TreeNode q){
    	System.out.println(lowestCommonAncestor(root, p, q).val);
    	System.out.println(lowestCommonAncestor2(root, p, q).val);
    }
}
