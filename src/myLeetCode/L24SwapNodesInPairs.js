/**
 * Created by WTIFS-Mac on 2017/8/13.

 Given a linked list, swap every two adjacent nodes and return its head.

 For example,
 Given 1->2->3->4, you should return the list as 2->1->4->3.

 Your algorithm should use only constant space. You may not modify the values i

 可以用递归

 */

var listUtils = require('../myLib/listUtils');

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    var one = head;
    var two = one.next;
    head = two;

    while (one && two) {
        var three = two.next;
        two.next = one;
        one.next = three? (three.next || three): null;
        one = three;
        two = three? three.next: null;
    }

    return head;
};


var list = listUtils.arrayToLinkedList([1]);
console.log(JSON.stringify(swapPairs(list)));

list = listUtils.arrayToLinkedList([1,2]);
console.log(JSON.stringify(swapPairs(list)));

list = listUtils.arrayToLinkedList([1,2,3]);
console.log(JSON.stringify(swapPairs(list)));

list = listUtils.arrayToLinkedList([1,2,3,4]);
console.log(JSON.stringify(swapPairs(list)));

list = listUtils.arrayToLinkedList([1,2,3,4,5]);
console.log(JSON.stringify(swapPairs(list)));