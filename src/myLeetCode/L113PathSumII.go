package main

import (
	"fmt"
)

/***
113. Path Sum II
Medium

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []
*/

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func arrayToTree(nums []int) *TreeNode {
	root := &TreeNode{Val: nums[0]}
	queue := []*TreeNode{root}

	for i := 1; i < len(nums); i += 2 {
		node := queue[0]
		queue = queue[1:]
		if nums[i] != 0 {
			node.Left = &TreeNode{Val: nums[i]}
			queue = append(queue, node.Left)
		}
		if nums[i+1] != 0 {
			node.Right = &TreeNode{Val: nums[i+1]}
			queue = append(queue, node.Right)
		}
	}

	return root
}

func main() {
	root := arrayToTree([]int{1, 2, 3})
	fmt.Println(pathSum(root, 5))

	root = arrayToTree([]int{5, 4, 8, 11, 0, 13, 4, 7, 2, 0, 0, 5, 1})
	fmt.Println(pathSum(root, 22))

	root = arrayToTree([]int{-2, 0, -3})
	fmt.Println(pathSum(root, -5))
}

var res [][]int

func pathSum(root *TreeNode, targetSum int) [][]int {
	res = make([][]int, 0)
	if root != nil {
		pathSum2(root, targetSum-root.Val, []int{root.Val})
	}
	return res
}

func pathSum2(root *TreeNode, targetSum int, path []int) {
	left, right := root.Left, root.Right
	if left == nil && right == nil {
		if targetSum == 0 {
			p := make([]int, len(path))
			copy(p, path)
			res = append(res, p)
		}
	}

	if left != nil {
		pathSum2(left, targetSum-left.Val, append(path, left.Val))
	}
	if right != nil {
		pathSum2(right, targetSum-right.Val, append(path, right.Val))
	}
}
