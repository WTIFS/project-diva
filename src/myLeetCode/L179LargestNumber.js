/**
 * Created by Yuanfei on 2017/5/16.
 */
/**
 Given a list of non negative integers, arrange them such that they form the largest number.

 For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

 Note: The result may be very large, so you need to return a string instead of an integer.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var len = nums.length;
    if (!len) return 0;
    var nums2 = new Array(len);
    for (var i=0; i<len; i++) nums2[i] = nums[i].toString();
    divide(nums2, 0, len-1);
    while (nums2[0]==0) nums2.shift();
    if (!nums2.length) nums2 = ['0'];
    return nums2.join('');
};

var divide = function(nums, start, end) {
    if (start<end) {
        var mid = parseInt((start + end)/2);
        divide(nums, start, mid);
        divide(nums, mid+1, end);
        merge(nums, start, mid, end);
    }
};

var merge = function(nums, start, mid, end) {
    var i = start;
    var j = mid+1;
    var t = 0;
    var tmp = new Array(end - start + 1);
    while (i<=mid && j<=end) {
        if (isLarger(nums[i], nums[j])) tmp[t++] = nums[i++];
        else tmp[t++] = nums[j++];
    }
    while (i<=mid) tmp[t++] = nums[i++];
    while (j<=end) tmp[t++] = nums[j++];
    for (var k=0; k<t; k++) nums[start + k] = tmp[k];
};

var isLarger = function(num1, num2) {
    return num1 + num2 > num2 + num1;
    /*if (num1.length==num2.length) return num1>=num2;
    else {
        var len = Math.min(num1.length, num2.length);
        var i = 0;
        while (i<len && num1[i]==num2[i]) i++;
        if (i<len) return num1[i]>num2[i];
        else if (num1.length>num2.length) return num1[i]>num1[0];
        else return num2[i]<=num1[0];
    }*/
};

//console.log(largestNumber([3, 30, 34, 5, 9]));
//console.log(largestNumber([1, 10, 110, 100, 11, 12, 13, 103, 130]));
//console.log(largestNumber([1, 2, 20, 231, 23, 22, 201, 4, 211]));
console.log(largestNumber([0, 0]));
console.log(largestNumber([12, 121]));

