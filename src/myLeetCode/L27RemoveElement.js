/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length<1) return 0;
    var i=-1;
    var j=0;
    while (j<nums.length){
    	if (nums[j]==val) j++;
    	else nums[++i]=nums[j++];
    }
    return i+1;
};