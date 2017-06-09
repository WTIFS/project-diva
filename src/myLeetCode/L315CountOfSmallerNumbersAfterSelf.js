/**
 * Created by Yuanfei on 2017/6/9.

 You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 Example:

 Given nums = [5, 2, 6, 1]

 To the right of 5 there are 2 smaller elements (2 and 1).
 To the right of 2 there is only 1 smaller element (1).
 To the right of 6 there is 1 smaller element (1).
 To the right of 1 there is 0 smaller element.
 Return the array [2, 1, 1, 0].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    var sortedList = [];
    var results = [];
    var n = nums.length;
    for (var j = n-1; j>=0; j--) {
        var insertPosition = searchInsertPosition(sortedList, nums[j]);
        sortedList.splice(insertPosition, 0, nums[j]);
        results[j] = insertPosition;
    }
    return results;
};

var searchInsertPosition = function(nums, num) {
    var i = 0;
    var j = nums.length;
    while (i != j) {
        var mid = (i + j) >> 1;
        if (nums[mid]==undefined) return mid;
        if (nums[mid] < num) i = mid + 1;
        else j = mid;
    }
    return i;
};

console.log(countSmaller([-1, -1]));
console.log(countSmaller([5, 2, 6, 1]));









/* 这个比较难懂，用indexes映射索引，然后对索引进行排序，也是n logn
var count;
function countSmaller(nums) {
    var res = [];

    count = new Array(nums.length);
    var indexes = new Array(nums.length);
    for(var i = 0; i < nums.length; i++){
        indexes[i] = i;
    }
    mergeSort(nums, indexes, 0, nums.length - 1);
    for(var j = 0; j < count.length; j++){
        res.add(count[j]);
    }
    return res;
}
function mergeSort(nums, indexes, start, end) {
    if(end <= start){
        return;
    }
    var mid = (start + end) >> 1;
    mergeSort(nums, indexes, start, mid);
    mergeSort(nums, indexes, mid + 1, end);

    merge(nums, indexes, start, end);
}
function merge(nums, indexes, start, end) {
    var mid = (start + end) >> 1;
    var left_index = start;
    var right_index = mid+1;
    var rightcount = 0;
    var new_indexes = new Array(end - start + 1);

    var sort_index = 0;
    while(left_index <= mid && right_index <= end){
        if(nums[indexes[right_index]] < nums[indexes[left_index]]){
            new_indexes[sort_index] = indexes[right_index];
            rightcount++;
            right_index++;
        }else{
            new_indexes[sort_index] = indexes[left_index];
            count[indexes[left_index]] += rightcount;
            left_index++;
        }
        sort_index++;
    }
    while(left_index <= mid){
        new_indexes[sort_index] = indexes[left_index];
        count[indexes[left_index]] += rightcount;
        left_index++;
        sort_index++;
    }
    while(right_index <= end){
        new_indexes[sort_index++] = indexes[right_index++];
    }
    for(var i = start; i <= end; i++){
        indexes[i] = new_indexes[i - start];
    }
}*/
