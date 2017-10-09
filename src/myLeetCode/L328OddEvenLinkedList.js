/**

 Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

 You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

 Example:
 Given 1->2->3->4->5->NULL,
 return 1->3->5->2->4->NULL.

 Note:
 The relative order inside both the even and odd groups should remain as it was in the input.
 The first node is considered odd, the second node even and so on ...

 Credits:
 Special thanks to @DjangoUnchained for adding this problem and creating all test cases.

 **/

/**
 * Definition for singly-linked list.
 *  */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    var odd = head;
    var even = head.next;
    var evenHead = head.next;
    while (odd.next && odd.next.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};


var a = [new ListNode(0)];
for (var i=1; i<=5; i++) {
    a[i] = new ListNode(i);
    a[i-1].next = a[i];
}
var result;
// var result = oddEvenList(a[1]);
// console.log(result);

result = oddEvenList(a[2]);
console.log(result);

result = oddEvenList(a[3]);
console.log(result);

result = oddEvenList(a[4]);
console.log(result);

result = oddEvenList(a[5]);
console.log(result);
