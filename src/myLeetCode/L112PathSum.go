package main

/***
112. Path Sum
Easy

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

func hasPathSum(root *TreeNode, targetSum int) bool {
	if root != nil {
		if root.Left == nil && root.Right == nil {
			return root.Val == targetSum
		}
		return hasPathSum(root.Left, targetSum-root.Val) || hasPathSum(root.Right, targetSum-root.Val)
	}
	return false
}
