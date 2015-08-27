/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
	if (nums.length===0) return 0;
    var i=0;
    var j=1;
    while (j<nums.length){
    	if (nums[i]<nums[j]) nums[++i]=nums[j++];
    	else j++;
    }
    return i+1;
};

var nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);