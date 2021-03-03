package main

import "fmt"

/***
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.


Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

       1 -> NULL
      /  \
     2 -> 3 -> NULL
    / \  / \
   4-> 5   ->7 -> NULL
  /         / \
 8    ->   14->15


[3,9,20,null,null,15,7]
 3
9 20
 15 7
*/

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

func main() {
	root := &Node{
		Val: 1,
		Left: &Node{
			Val: 2,
		},
		Right: &Node{
			Val: 3,
			Left: &Node{
				Val: 6,
			},
			Right: &Node{
				Val: 7,
			},
		},
	}

	connect2(root)
	fmt.Printf("%+v", *root)
}

func connect(root *Node) *Node {
	for left := root; left != nil; {

		//遍历同行所有.Next节点
		for cur := left; cur != nil; cur = cur.Next {
			if cur.Left == nil && cur.Right == nil {
				continue
			}

			//cur点下最右侧的子节点
			rightChild := cur.Right
			if cur.Left != nil && cur.Right != nil {
				cur.Left.Next = cur.Right
			} else if cur.Left != nil {
				rightChild = cur.Left
			}

			//找cur右侧第一个子节点不为空的点，取其最左侧节点
			next := cur.Next
			for next = cur.Next; next != nil && next.Left == nil && next.Right == nil; next = next.Next {
			}
			if next != nil {
				if next.Left != nil {
					rightChild.Next = next.Left
				} else if next.Right != nil {
					rightChild.Next = next.Right
				}
			}
		}

		//找下一行第一个不为空的点作为left
		for left = left; left != nil && left.Left == nil && left.Right == nil; left = left.Next {
		}
		if left != nil {
			if left.Left != nil {
				left = left.Left
			} else {
				left = left.Right
			}
		}

	}
	return root
}

func connect2(root *Node) *Node {
	var head, prev *Node
	cur := root

	for cur != nil {
		for cur != nil {
			if cur.Left != nil {
				if prev == nil {
					head = cur.Left
				} else {
					prev.Next = cur.Left
				}
				prev = cur.Left
			}
			if cur.Right != nil {
				if prev == nil {
					head = cur.Right
				} else {
					prev.Next = cur.Right
				}
				prev = cur.Right
			}
			cur = cur.Next
		}

		//move to next level
		cur = head
		head = nil
		prev = nil
	}
	return root
}