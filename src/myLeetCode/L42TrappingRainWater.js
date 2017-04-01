/**
 * Created by Yuanfei on 2017/4/1.
 */
/*
 Total Accepted: 105004
 Total Submissions: 292100
 Difficulty: Hard
 Contributor: LeetCode
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

 For example,
 Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum = 0;
    var left = 0;
    var right = height.length - 1;
    var maxLeft = 0;
    var maxRight = 0;
    while (left<right) {
        if (height[left]<=height[right]) {
            if (height[left]>maxLeft) maxLeft = height[left];
            else sum += maxLeft - height[left];
            left ++;
        } else {
            if (height[right]>maxRight) maxRight = height[right];
            else sum += maxRight - height[right];
            right --;
        }
    }
    return sum;
};

console.log(trap([4,2,3]));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
