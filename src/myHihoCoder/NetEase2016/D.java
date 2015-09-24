package myHihoCoder.NetEase2016;


import java.util.Arrays;
import java.util.Scanner;

//Sort, select the max 6 nums, dec for 1
public class D {
	
	public static boolean count(int[] nums, int len){		
		Arrays.sort(nums);
		if (len>=3 && nums[len-3]>0){
			for (int i=len-3; i<len; i++) nums[i] -= 1;
		}
		
		Arrays.sort(nums);
		if (len>=3 && nums[len-3]>0){
			for (int i=len-3; i<len; i++) nums[i] -= 1;
			return true;
		}
		return false;
	}
	
	public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n_row = in.nextInt();
        for (int i=0; i<n_row; i++) {
        	int count = 0;
        	int len = in.nextInt();
        	int nums[] = new int[len];
        	for (int j=0; j<len; j++) nums[j] = in.nextInt();
        	while (count(nums, len)) count++;
        	System.out.println(count);
        }
	}
}
