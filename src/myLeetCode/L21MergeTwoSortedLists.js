function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var newHead = new ListNode(0);
    var p = newHead;
    if (l1===null) {return l2;}
    if (l2===null) {return l1;}
    while (l1 && l2){
    	if (l1.val<l2.val){
    		p.next = l1;
    		l1 = l1.next;
    		p = p.next;
    		
    	}
    	else{
    		p.next = l2;
    		l2 = l2.next;
    		p = p.next;
    	}
    }
    if (l1!==null) p.next = l1;
    else if (l2!==null) p.next = l2;
    return newHead.next;
};

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l1cur = l1;
var l2cur = l2;
for (var i=3; i<9; i++){
	if (i%2==1){
		l1cur.next = new ListNode(i);
		l1cur = l1cur.next;
	}
	else {
		l2cur.next = new ListNode(i);
		l2cur = l2cur.next;
	}
}

var ans = mergeTwoLists(l1, l2);
var s = "";
while (ans!=null){
	s += ans.val + ", ";
	ans = ans.next;
}
console.log(s);