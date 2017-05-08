/**
 * Created by Yuanfei on 2017/5/8.
 */
/**
 Given a linked list, determine if it has a cycle in it.

 Follow up:
 Can you solve it without using extra space?
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    var p = head.next;
    var p2;
    if (head.next) p2 = head.next.next;
    while (p2 && p2.next && p!=p2) {
        p = p.next;
        p2 = p2.next.next;
    }
    return p!=null && p2!=null && p == p2;
};

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = a;
console.log(hasCycle(a));