/**
 * Created by WTIFS-Mac on 30/1/17.
 */
/*
 Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length) return divide(lists, 0, lists.length-1);
    else return null;
};

var divide = function(lists, startIndex, endIndex) {
    var left;
    var right;
    var midIndex = parseInt((startIndex + endIndex) / 2);
    if (endIndex == startIndex) return lists[startIndex];
    if (endIndex - startIndex > 1) {
        left = divide(lists, startIndex, midIndex);
        right = divide(lists, midIndex+1, endIndex);
    } else {
        left = lists[startIndex];
        right = lists[endIndex];
    }
    return merge(left, right);
};

var merge = function(link1, link2) {
    if (!link1) return link2;
    if (!link2) return link1;
    var head1 = link1;
    var head2 = link2;
    var link3 = {val: null, next: null};
    var head3 = link3;
    while (head1 && head2) {
        while(head1 && head2 && head1.val <= head2.val) {
                head3.next = new ListNode(head1.val);
                head3 = head3.next;
                head1 = head1.next;
        }
        while(head1 && head2 && head2.val <= head1.val) {
                head3.next = new ListNode(head2.val);
                head3 = head3.next;
                head2 = head2.next;
        }
    }
    while(head1) {
        head3.next = new ListNode(head1.val);
        head3 = head3.next;
        head1 = head1.next;
    }
    while(head2) {
        head3.next = new ListNode(head2.val);
        head3 = head3.next;
        head2 = head2.next;
    }
    while (link3.val==null && link3.next) link3 = link3.next;
    return link3;
};

var link1 = new ListNode(1);
link1.next = new ListNode(3);
link1.next.next = new ListNode(5);
link1.next.next.next = new ListNode(7);

var link2 = new ListNode(1);
link2.next = new ListNode(4);
link2.next.next = new ListNode(6);
link2.next.next.next = new ListNode(8);

link2.next.next.next.next = new ListNode(13);

var link3 = new ListNode(9);
link3.next = new ListNode(10);
link3.next.next = new ListNode(11);
link3.next.next.next = new ListNode(12);

var link4 = new ListNode(null);

//var link5 = mergeKLists([link1, link2, link3, link4]);
//console.log(JSON.stringify(link5));

var link6 = mergeKLists([]);
console.log(link6);