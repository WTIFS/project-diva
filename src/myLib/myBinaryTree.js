/**
 * Created by Yuanfei on 2017/2/28.
 */
module.exports = {
    arrayToTree: function(array) {
        return arrayToTree(array);
    }
};

var treeNode = function(val, left, right) {
    return {
        val : val,
        left: left || null,
        right: right || null
    }
};

var arrayToTree = function(array) {
    var b = [];
    var mid = parseInt(array.length / 2);
    for (var i=mid; i<array.length; i++) {
        b[i] = treeNode(array[i]);
    }
    for (var j=mid -1; j>=0; j--) {
        b[j] = treeNode(array[j], b[j * 2 + 1], b[j*2 + 2]);
    }
    return b[0];
};

//var testArray = arrayToTree([1,2,3,4,5,6]);
//console.log(JSON.stringify(testArray, null, 4));