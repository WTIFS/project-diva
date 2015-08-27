package myLeetCode;

/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 */

public class L26RemoveDuplicatesfromSortedArray {
    public int removeDuplicates(int[] nums) {
    	if (nums.length==0) return 0;
    	int num = nums[0];
    	int count = 1;
        for (int i=1; i<nums.length; i++){
        	if (nums[i]!=num){
        		num = nums[i];
        		nums[count] = num;
        		count++;
        	}
        }
        return count;
    }
    
    public int removeDuplicates2(int[] nums) {
    	if (nums.length==0) return 0;
    	int j = 1;
    	int count = 1;
        for (int i=0; j<nums.length; i++){
        	j = i+1;
        	while (j<nums.length && nums[j]==nums[i]) j++;
        	if (j<nums.length) nums[count++] = nums[j];
        	i = j-1;

        }
        return count;
    }
       
    public int removeDuplicates3(int[] nums) {
        if (nums.length==0) return 0;
        int i = 0;
    	int j = 1;
    	while (j<nums.length){
    	    if (nums[j]>nums[i]){
    	        nums[++i] = nums[j++];
    	    }
    	    else j++;
    	}
    	return i+1;
    }
    
    public void main(int[] nums){
    	int n = removeDuplicates3(nums);
    	System.out.println(n);
    	for (int i=0; i<n; i++)
    	System.out.print(nums[i]+", ");
    }
}
