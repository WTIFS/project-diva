/**
 * Created by Yuanfei on 2017/5/9.
 */
/**
 Sort a linked list in O(n log n) time using constant space complexity.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    var slow = head;
    var fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var mid = slow.next;
    slow.next = null;

    return merge(sortList(head), sortList(mid));
};

var merge = function(l1, l2) {
    var dumbHead = new ListNode();
    var p = dumbHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if (l1) p.next = l1;
    if (l2) p.next = l2;
    return dumbHead.next;
};

var h = new ListNode(5);
h.next = new ListNode(4);
h.next.next = new ListNode(3);
h.next.next.next = new ListNode(2);

console.log(JSON.stringify(sortList(h), null, 2));
