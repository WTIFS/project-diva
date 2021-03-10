package main

import (
	"github.com/wtifs/project-diva/src/myLeetcode/common"
	"math"
)

/***
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
*/

func main() {
	//head := common.IntArrayToLinkedList([]int{4, 2, 1, 3})
	head := common.IntArrayToLinkedList([]int{1, 2, 3, 4})
	//head := common.IntArrayToLinkedList([]int{3, 2, 4})
	//head := common.IntArrayToLinkedList([]int{-1, 5, 3, 4, 0})
	d := insertionSortList(head)
	common.PrintIntLinkedList(d)

	//d := insertionSortList(head)
	//common.PrintIntLinkedList(d)
}

func insertionSortList(head *common.ListNode) *common.ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	dummyHead := &common.ListNode{Val: -math.MaxInt32}
	pre := dummyHead

	//cur: current node
	for cur, next := head, head; cur != nil; cur = next {
		next = cur.Next

		if cur.Val > pre.Val {
			//keeps pre
		} else {
			pre = dummyHead
		}

		//p: position to insert
		for pre.Next != nil && cur.Val > pre.Next.Val {
			pre = pre.Next
		}
		cur.Next = pre.Next
		pre.Next = cur
	}

	return dummyHead.Next
}
