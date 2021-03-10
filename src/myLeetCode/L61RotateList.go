package main

import "fmt"

/**
 * Definition for singly-linked list.
 */

func main() {
	h := &ListNode{Val: 1}
	fmt.Printf("%+v\n\n", L64RotateList(h, 1))

	h = &ListNode{Val: 1, Next: &ListNode{Val: 2}}
	fmt.Printf("%+v\n\n", L64RotateList(h, 1))

	h = &ListNode{Val: 0, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2}}}
	fmt.Printf("%+v\n", L64RotateList(h, 1))

	h = &ListNode{Val: 0, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2}}}
	fmt.Printf("%+v\n", L64RotateList(h, 2))

	h = &ListNode{Val: 0, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2}}}
	fmt.Printf("%+v\n", L64RotateList(h, 3))

	h = &ListNode{Val: 0, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2}}}
	fmt.Printf("%+v\n\n", L64RotateList(h, 4))
}

func L64RotateList(head *ListNode, k int) *ListNode {
	if head == nil || head.Next == nil || k == 0 {
		return head
	}

	//先循环遍历1次，获取长度
	var tail *ListNode
	var l int
	for i := head; i != nil; i = i.Next {
		tail = i
		l++
	}
	tail.Next = head

	last := head
	k = l - (k % l)
	for i := 0; i < k-1; i++ {
		last = last.Next
	}
	head = last.Next
	last.Next = nil
	return head
}
