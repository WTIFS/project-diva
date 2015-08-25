package myLeetCode;

public class L21MergeTwoSortedLists {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    	if (l1==null) return l2;
    	else if (l2==null) return l1;
        ListNode newHead = new ListNode(0);
        ListNode cur = newHead;
        while (l1!=null && l2!=null){
        	if (l1.val<l2.val){
        		cur.next = l1;
        		cur = cur.next;
        		l1 = l1.next;
        	}
        	else {
        		cur.next = l2;
        		cur = cur.next;
        		l2 = l2.next;
        	}
        }
        if (l1!=null) cur.next = l1;
        else if (l2!=null) cur.next = l2;
        return newHead.next;
    }
    
    public void main(ListNode l1, ListNode l2){
    	ListNode ans = mergeTwoLists(l1, l2);
    	while (ans!=null){
    		System.out.print(ans.val+", ");
    		ans = ans.next;
    	}
    }
    
}
