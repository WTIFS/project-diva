/**
 * Created by WTIFS-Mac on 2017/8/13.
 */

module.exports = {

    arrayToLinkedList: function(array) {
        var head = new ListNode(array[0]);
        var p = head;
        for (var i = 1; i < array.length; i++) {
            p.next = new ListNode(array[i]);
            p = p.next;
        }
        return head;
    }
};


var ListNode = function(val) {
    this.val = val;
    this.next = null;
};