/**
 * Created by Yuanfei on 2017/6/6.
 *

 Total Accepted: 112241
 Total Submissions: 361961
 Difficulty: Medium
 Contributor: LeetCode
 Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

 Using 2 pointers

 suppose the 1st meet at step k
 suppose len(Cycle) = r
    => 2k - k = nr
    => k = nr

 suppose dist(head, cycleStart) = s
 suppose dist(cycleStart, meetPoint) = m
    => k - s = m
    => nr - s = m
 suppose n = 1
    => r - s = m
    => l1 starts from head, go for s steps & l2 starts from k, go for r - m steps, they'll meet at cycleStart

 *
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    var fast = head;
    var slow = head.next;
    if (head.next) fast = head.next.next;
    while (fast && fast.next && slow!=fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!slow || !fast || slow!=fast) return null;

    slow = head;
    while (slow!=fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
};

var a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = a;
//a.next.next.next = new ListNode(4);
//a.next.next.next.next = a.next;
console.log(detectCycle(a));