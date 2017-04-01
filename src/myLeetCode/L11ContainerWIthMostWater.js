/**
 * Created by Yuanfei on 2017/3/31.
 */
/*
 Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var b = 0;
    var e = height.length-1;
    var max = 0;
    while (b<e) {
        var minHeight = Math.min(height[b], height[e]);
        if ((e-b) * minHeight >= max) max = (e-b) * minHeight;
        while (b<e && height[b] <= minHeight) b++;
        while (b<e && height[e] <= minHeight) e--;
    }
    return max;
};