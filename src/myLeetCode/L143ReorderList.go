package main

/***
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.



Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	head := &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 2,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 4,
				},
			},
		},
	}

	reorderList(head)
	printNodeList(head)

	head = &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 2,
			Next: &ListNode{
				Val: 3,
			},
		},
	}
	reorderList(head)
	printNodeList(head)

	head = &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 2,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 4,
					Next: &ListNode{
						Val: 5,
					},
				},
			},
		},
	}
	reorderList(head)
	printNodeList(head)
}

//有一种O(1)空间的做法，是把后半段反转，然后再间隔插入前半段
func reorderList(head *ListNode) {
	nodes := make([]*ListNode, 0)
	for cur := head; cur != nil; cur = cur.Next {
		nodes = append(nodes, cur)
	}
	if len(nodes) <= 2 {
		return
	}
	for i := 0; i < len(nodes)/2; i++ {
		nodes[i].Next = nodes[len(nodes)-1-i]
		nodes[len(nodes)-1-i].Next = nodes[i+1]
	}
	nodes[len(nodes)/2].Next = nil
}

func printNodeList(head *ListNode) {
	for p := head; p != nil; p = p.Next {
		print(p.Val, " ")
	}
	println()
}
