package myLeetCode;

/*
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */

public class L27RemoveElement {
    public int removeElement(int[] nums, int val) {
        if (nums.length<1) return 0;
        int i = -1;
        int j = 0;
        while (j<nums.length){
        	if (nums[j]==val) j++;
        	else nums[++i] = nums[j++];
        }
        return i+1;
    }
    
    public void main(int[] nums, int val){
    	int n = removeElement(nums, val);
    	for (int i=0; i<n; i++)
    	System.out.print(nums[i]+", ");
    }
}
