package myLeetCode;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

/*
 * 
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]

https://leetcode.com/problems/binary-tree-paths/
*/

public class L257BinaryTreePaths {
	
	public List<TreeNode> nodes;
	public List<String> ans;
	
	public List<String> binaryTreePaths2(TreeNode root){
        //nodes = new ArrayList<TreeNode>();
        ans = new ArrayList<String>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        Stack<String> path = new Stack<String>();
        if (root==null) return ans;
        else {
        	TreeNode cur = root;
        	stack.add(cur);
        	path.add(Integer.toString(cur.val));
        	while (!stack.isEmpty()){
        		cur = stack.pop();
        		String s = path.pop();
        		if (cur.left==null && cur.right==null){
        			ans.add(s);
        		}
        		else {
	        		if (cur.right!=null){
	        			path.push(s+"->"+cur.right.val);
	        			stack.add(cur.right);
	        		}
	        		if (cur.left!=null){
	        			path.push(s+"->"+cur.left.val);
	        			stack.add(cur.left);
	        		}

        		}
        	}
        } 
		return ans;
	}
	
	public List<String> binaryTreePaths(TreeNode root) {
        nodes = new ArrayList<TreeNode>();
        ans = new ArrayList<String>();
        if (root==null) return ans;
        else {
        	nodes.add(root);
        	go(root);
        }
        return ans;
    }
	
	public void go(TreeNode root){
		if (root.left==null && root.right==null){
			String s = "";
			for (int i=0; i<nodes.size(); i++){
				s += nodes.get(i).val+"->";
			}
			ans.add(s.substring(0, s.length()-2));
		}
		if (root.left!=null) {nodes.add(root.left); go(root.left);nodes.remove(nodes.size()-1);}
		if (root.right!=null) {nodes.add(root.right); go(root.right);nodes.remove(nodes.size()-1);}
	}
	
	public void main(TreeNode root){
		System.out.println(this.binaryTreePaths2(root));
	}
}
