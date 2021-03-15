package main

import "github.com/wtifs/project-diva/src/myLib"

/***
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).


Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]

Example 3:
Input: head = [1], k = 1
Output: [1]

Example 4:
Input: head = [1,2], k = 1
Output: [2,1]

Example 5:
Input: head = [1,2,3], k = 2
Output: [1,2,3]

Constraints:
The number of nodes in the list is n.
1 <= k <= n <= 10^5
0 <= Node.val <= 100
***/

func main() {
	type testCase struct {
		nums []int
		k    int
	}
	testCases := []testCase{
		{[]int{1, 2, 3, 4, 5}, 2},
		{[]int{7, 9, 6, 6, 7, 8, 3, 0, 9, 5}, 5},
		{[]int{1}, 1},
		{[]int{1, 2}, 1},
		{[]int{1, 2}, 2},
		{[]int{1, 2, 3}, 2},
	}
	for _, tt := range testCases {
		head := myLib.IntArrayToLinkedList(tt.nums...)
		head = swapNodes2(head, tt.k)
		myLib.PrintIntLinkedList(head)
	}
}

//偷懒的版本 只换值
func swapNodes2(head *myLib.ListNode, k int) *myLib.ListNode {
	p1 := head
	for i := 1; i < k; i++ {
		p1 = p1.Next
	}

	p2 := head
	for tail := p1; tail.Next != nil; tail = tail.Next {
		p2 = p2.Next
	}

	p1.Val, p2.Val = p2.Val, p1.Val
	return head
}

func swapNodes(head *myLib.ListNode, k int) *myLib.ListNode {
	cnt := 0
	for p := head; p != nil; p = p.Next {
		cnt++
	}
	if cnt == 1 || k == cnt-k+1 {
		return head
	}
	if k > cnt-k+1 {
		k = cnt - k + 1
	}

	dummy := &myLib.ListNode{Next: head}
	i := 0

	prev1 := dummy
	for i = 1; i < k; i++ {
		prev1 = prev1.Next
	}

	prev2 := prev1
	for i = i; i <= cnt-k; i++ {
		prev2 = prev2.Next
	}

	p1, p2 := prev1.Next, prev2.Next
	next1, next2 := p1.Next, p2.Next

	if p1.Next == p2 {
		prev1.Next = p2
		p2.Next = p1
		p1.Next = next2
	} else {
		prev1.Next = p2
		p2.Next = next1
		prev2.Next = p1
		p1.Next = next2
	}

	return dummy.Next
}
