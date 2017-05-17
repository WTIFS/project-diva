/**
 * Created by Yuanfei on 2017/5/17.
 */

var ListNode = function(val) {
    this.val = val;
    this.next = null;
};

var reverseList = function(head) {
    if (!head || !head.next) return head;
    var next = head.next;
    var newHead = reverseList(head.next);
    next.next = head;
    head.next = null;
    return newHead;
};

var reverseList2 = function(head) {
    if (!head) return head;
    var prev = null;
    var next = head.next;
    while (head.next) {
        head.next = prev;
        prev = head;
        head = next;
        next = head.next;
    }
    head.next = prev;
    return head;
};

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);

console.log(reverseList2(a));

