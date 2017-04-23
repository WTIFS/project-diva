/**
 * Created by Yuanfei on 2017/2/28.
 */
module.exports = {
    arrayToTree: function(array) {
        return arrayToTree(array);
    },

    deserialize: function(a) {
        return deserialize(a);
    }
};

var treeNode = function(val, left, right) {
    return {
        val : val,
        left: left || null,
        right: right || null
    }
};

//完全二叉树
var arrayToTree = function(array) {
    var b = [];
    var mid = parseInt(array.length / 2);
    for (var i=mid; i<array.length; i++) { //叶子节点
        if (array[i]!==null) b[i] = treeNode(array[i]);
    }
    for (var j=mid -1; j>=0; j--) { //根节点
        b[j] = treeNode(array[j], b[j * 2 + 1], b[j*2 + 2]);
    }
    return b[0];
};

var deserialize = function(a) {
    if (!a || !a.length) return null;
    var len = a.length;
    var root = new treeNode(a[0]);
    var parents = [root];

    for (var i=1; i< len; i++) {
        var parent = parents.shift();
        if (a[i] != null) {
            var left = new treeNode(a[i]);
            parent.left = left;
            parents.push(left);
        }
        i++;
        if (i<len && a[i]!=null ) {
            var right = new treeNode(a[i]);
            parent.right = right;
            parents.push(right);
        }
    }
    return root;
};

//var testArray = arrayToTree([1,2,3,4,5,6]);
//console.log(JSON.stringify(testArray, null, 4));