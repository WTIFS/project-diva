/**
 * Created by Yuanfei on 2017/4/17.
 */

/**
 Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

 For example,
 Given heights = [2,1,5,6,2,3],
 return 10.


 For every bar ‘x’, we calculate the area with ‘x’ as the smallest bar in the rectangle. If we calculate such area for every bar ‘x’ and find the maximum of all areas, our task is done. How to calculate area with ‘x’ as smallest bar? We need to know index of the first smaller (smaller than ‘x’) bar on left of ‘x’ and index of first smaller bar on right of ‘x’. Let us call these indexes as ‘left index’ and ‘right index’ respectively.
 We traverse all bars from left to right, maintain a stack of bars. Every bar is pushed to stack once. A bar is popped from stack when a bar of smaller height is seen. When a bar is popped, we calculate the area with the popped bar as smallest bar. How do we get left and right indexes of the popped bar – the current index tells us the ‘right index’ and index of previous item in stack is the ‘left index’. Following is the complete algorithm.

 1) Create an empty stack.

 2) Start from first bar, and do following for every bar ‘hist[i]’ where ‘i’ varies from 0 to n-1.
 ……a) If stack is empty or hist[i] is higher than the bar at top of stack, then push ‘i’ to stack.
 ……b) If this bar is smaller than the top of stack, then keep removing the top of stack while top of the stack is greater. Let the removed bar be hist[tp]. Calculate area of rectangle with hist[tp] as smallest bar. For hist[tp], the ‘left index’ is previous (previous to tp) item in stack and ‘right index’ is ‘i’ (current index).

 3) If the stack is not empty, then one by one remove all bars from stack and do step 2.b for every removed bar.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var stack = [];
    var maxArea = 0;
    var i=0;
    var tp;
    var area;
    while (i<heights.length) {
        if (stack.length==0 || heights[stack[stack.length-1]]<=heights[i]) {
            stack.push(i++);
        } else {
            // If this bar is lower than top of stack, then calculate area of rectangle
            // with stack top as the smallest (or minimum height) bar. 'i' is
            // 'right index' for the top and element before top in stack is 'left index'
            tp = stack.pop();
            area = heights[tp] * (stack.length==0? i: i - stack[stack.length-1] - 1);
            if (area>maxArea) maxArea = area;
        }
    }

    while (stack.length) {
        tp = stack.pop();
        area = heights[tp] * (stack.length==0? i: i - stack[stack.length-1] - 1);
        if (area>maxArea) maxArea = area;
    }

    return maxArea;
};

console.log(largestRectangleArea([2, 0, 2]));
console.log(largestRectangleArea([3,2,1]));
//console.log(largestRectangleArea([2, 1, 2]));
//console.log(largestRectangleArea([1, 1]));
//console.log(largestRectangleArea([1, 2, 3, 4, 5]));
//console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));