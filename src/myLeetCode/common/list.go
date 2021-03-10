package common

type ListNode struct {
	Val  int
	Next *ListNode
}

func IntArrayToLinkedList(nums []int) *ListNode {
	head := &ListNode{}
	p := head
	for _, num := range nums {
		p.Next = &ListNode{Val: num}
		p = p.Next
	}
	return head.Next
}

func PrintIntLinkedList(head *ListNode) {
	for head != nil {
		print(head.Val, " ")
		head = head.Next
	}
	println()
}