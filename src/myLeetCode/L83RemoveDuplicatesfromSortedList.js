/**
 * 
 */

function ListNode (val){
	this.val = val;
	this.next = null;
};

var deleteDuplicates = function(head){
	var p = head;
	while (p!==null){
		while (p.next!==null && p.next.val===p.val) p.next = p.next.next;
		p = p.next;
	}
	
	var offset;
	while (p!==null && p.next!==null){
		offset = p.next;
		while (offset!==null && offset.val===p.val) offset = offset.next;
		p.next = offset;
		p = p.next;
	}
	
	return head;
};