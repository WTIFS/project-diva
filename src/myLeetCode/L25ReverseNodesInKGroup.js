/**
 * Created by WTIFS-Mac on 2017/8/13.

 Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

 k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

 You may not alter the values in the nodes, only nodes itself may be changed.

 Only constant memory is allowed.

 For example,
 Given this linked list: 1->2->3->4->5

 For k = 2, you should return: 2->1->4->3->5

 For k = 3, you should return: 3->2->1->4->5

 */


var listUtils = require('../myLib/listUtils');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var p = head;
    for (var i=0; i<k; i++) {
        if (!p) return head;
        p = p.next;
    }
    var last = head;
    p = head.next;
    for (var j=1; j<k; j++) {
        var next = p.next;
        p.next = last;
        last = p;
        p = next;
    }
    head.next = reverseKGroup(p, k);
    return last;
};


var list = listUtils.arrayToLinkedList([1,2,3,4,5,6,7,8,9,10]);
//console.log(JSON.stringify(reverseKGroup(list, 1)));
//console.log(JSON.stringify(reverseKGroup(list, 2)));
//console.log(JSON.stringify(reverseKGroup(list, 3)));
//console.log(JSON.stringify(reverseKGroup(list, 4)));
console.log(JSON.stringify(reverseKGroup(list, 5)));
