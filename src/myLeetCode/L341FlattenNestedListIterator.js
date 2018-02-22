/**
 * Created by WTIFS-Mac on 2017/10/21.
 *
 * Given a nested list of integers, implement an iterator to flatten it.

 Each element is either an integer, or a list -- whose elements may also be integers or other lists.

 Example 1:
 Given the list [[1,1],2,[1,1]],

 By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

 Example 2:
 Given the list [1,[4,[6]]],

 By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
 */


 // This is the interface that allows for creating nested lists.
 // You should not implement it, or speculate about its implementation
 function NestedInteger() {

     //Return true if this NestedInteger holds a single integer, rather than a nested list.
     //@return {boolean}
     this.isInteger = function() {
         return true;
     };

     //Return the single integer that this NestedInteger holds, if it holds a single integer
     //Return null if this NestedInteger holds a nested list
     //@return {integer}
     this.getInteger = function() {
       return 0
    };

     //Return the nested list that this NestedInteger holds, if it holds a nested list
     //Return null if this NestedInteger holds a single integer
     //@return {NestedInteger[]}
     this.getList = function() {
         return [];
     };
 }

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    var nums = [];
    dfs(nestedList, nums);
    this.nums = nums;
    this.idx = 0;
};

var dfs = function(list, results) {
    // console.log(list);
    list.forEach(function(entry) {
        // console.log(entry);
        // console.log(entry.isInteger(entry));
        if (entry.isInteger(entry)) results.push(entry.getInteger(entry));
        else dfs(entry.getList(entry), results);
    });
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.idx<this.nums.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if (this.idx<this.nums.length) return this.nums[this.idx++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

var nums = [1,[2,3],4,[5,6,7,[8,9,[10,11]]]];
var nestedList = new NestedIterator(nums);
for (var i=0; i<13; i++) {
    console.log(nestedList.hasNext());
    console.log(nestedList.next());
}

