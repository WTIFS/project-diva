package myLeetCode;
/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
 */
public class L83RemoveDuplicatesfromSortedList {
    public ListNode deleteDuplicates(ListNode head) {
    	if (head==null) return head;
        ListNode p = head;
        ListNode offset;
        while (p!=null && p.next!=null){
        	offset = p.next;
        	while(offset!=null && offset.val == p.val) offset = offset.next;
        	p.next = offset;
        	p = p.next;
        }
        /*
        while (p!=null){
        	while (p.next!=null && p.next.val==p.val) p.next = p.next.next;
        	p = p.next;
        }*/
        return head;
    }
    public void main(ListNode head){
    	head = deleteDuplicates(head);
    	while (head!=null) {
    		System.out.print(head.val+" -> ");
    		head = head.next;
    	}
    }
}
