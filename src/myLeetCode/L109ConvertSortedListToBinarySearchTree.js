/**
 * Created by Yuanfei on 2017/3/8.
 */


function ListNode(val) {
     this.val = val;
     this.next = null;
}

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var sortedListToBST = function(head) {
    return toBst(head, null);
};

var toBst = function(head, tail) {
    if (!head || head==tail) return null;
    var mid = head;
    var p = head;
    while (p!=tail && p.next!=tail) {
        p = p.next.next; //p以2倍速遍历, p遍历到尾时mid即为中间点
        mid = mid.next;
    }
    var root = new TreeNode(mid.val);
    root.left = toBst(head, mid);
    root.right = toBst(mid.next, tail);
    return root;
};

var head = new ListNode(1);
var prev = head;
for (var i=2; i<8; i++) {
    var q = new ListNode(i);
    prev.next = q;
    prev = q;
}
console.log(JSON.stringify(head, null, 2));

var bst = sortedListToBST(head);
console.log(JSON.stringify(bst, null, 2));