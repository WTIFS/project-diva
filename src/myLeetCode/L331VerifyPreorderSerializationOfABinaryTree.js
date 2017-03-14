/**
 * Created by Yuanfei on 2017/3/14.
 */
/**
 * @param {string} preorder
 * @return {boolean}
 */

/**
 One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as #.

 _9_
 /   \
 3     2
 / \   / \
 4   1  #  6
 / \ / \   / \
 # # # #   # #
 For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where # represents a null node.

 Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

 Each comma separated value in the string must be either an integer or a character '#' representing null pointer.

 You may assume that the input format is always valid, for example it could never contain two consecutive commas such as "1,,3".

 Example 1:
 "9,3,4,#,#,1,#,#,2,#,6,#,#"
 Return true

 Example 2:
 "1,#"
 Return false

 Example 3:
 "9,#,#,1"
 Return false
 */

var isValidSerialization2 = function(preorder) {
    //每个根带来2的叶子位  同时每个根/叶消耗1的叶子位
    var a = preorder.split(",");
    var leaves = 1;
    for (var i=0; i< a.length; i++) {
        var node = a[i];
        leaves--;
        if (leaves<0) return false;
        if (node != "#") leaves += 2;
    }
    return leaves==0;
};

var isValidSerialization = function(preorder) {
    if (!preorder || !preorder.length) return false;
    if (preorder=="#") return true;
    var array = preorder.split(",");
    var stack = [];
    var isValid = true;
    for (var i=0; i<array.length && isValid; i++) {
        var node = array[i];
        if (node != "#") { //是数字
            if (i==0 || stack.length) { //是根(空栈)/ 不是根(栈不为空)
                stack.push({val: node, childs: 0});
            } else isValid =false;
        } else { //node=="#"
            if (stack.length) {
                var top = stack[stack.length - 1];
                top.childs++;

                while (stack.length && top.childs == 2) {
                    stack.pop();
                    if (stack.length) {
                        top = stack[stack.length - 1];
                        top.childs++;
                    }
                }
            } else isValid = false;
        }
    }
    return !stack.length && isValid;
};

var a = [
    "#",
    "9,3,4,#,#,1,#,#,2,#,6,#,#",
    "9,3,4,#,#,1,#,#,#,2,#,6,#,#",
    "1,#",
    "9,#,#,1",
    "1,#,#,#,#"
];

a.forEach(function(preorder) {
    console.log(isValidSerialization(preorder)==isValidSerialization2(preorder));
});