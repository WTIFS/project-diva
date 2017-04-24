/**
 * Created by Yuanfei on 2017/4/24.
 */
/**

 A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

 Return a deep copy of the list.

 */

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head) return head;
    var p1 = head;
    var newHead = new RandomListNode(0);
    var p2 = newHead;
    while (p1) {
        p2.next = new RandomListNode(p1.label);
        p1 = p1.next;
        p2 = p2.next;
    }
    p1 = head;
    p2 = newHead.next;
    while (p1) {
        if (p1.random) {
            var p1Temp = head;
            var p2Temp = newHead.next;
            while (p1Temp!=p1.random) {
                p1Temp = p1Temp.next;
                p2Temp = p2Temp.next;
            }
            p2.random = p2Temp;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return newHead.next;
};

var a = new RandomListNode(1);
var b = new RandomListNode(2);
var c = new RandomListNode(3);
var d = new RandomListNode(4);
var e = new RandomListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
b.random = d;
c.random = e;

var a2 = copyRandomList(a);
console.log(JSON.stringify(a2, null, 2));
