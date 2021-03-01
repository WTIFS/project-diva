package main

//type ListNode struct {
//	Val  int
//	Next *ListNode
//}

/***
86. Partition List
Medium

1861

375

Add to List

Share
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.



Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]


Constraints:

The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200
*/

func main() {
	head := &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 4,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 2,
					Next: &ListNode{
						Val: 5,
						Next: &ListNode{
							Val: 2,
						},
					},
				},
			},
		},
	}
	head2 := partition(head, 3)
	for i := head2; i != nil; i = i.Next {
		println(i.Val)
	}

}

func partition(head *ListNode, x int) *ListNode {
	//i:  遍历指针
	//j: <x 的数的指针
	head1, head2 := &ListNode{}, &ListNode{}
	p1, p2 := head1, head2

	for cur := head; cur != nil; cur = cur.Next {
		if cur.Val < x {
			p1.Next = &ListNode{Val: cur.Val}
			p1 = p1.Next
		} else {
			p2.Next = &ListNode{Val: cur.Val}
			p2 = p2.Next
		}
	}
	p1.Next = head2.Next
	p2.Next = nil
	return head1.Next
}
