/**
 * Created by WTIFS-Mac on 2017/6/4.
 * Implementation of B-Tree
 */

var BTree = function() {
    this.keyNum = 0;
    this.parent = null;
    this.children = [];
    this.keys = [];
};