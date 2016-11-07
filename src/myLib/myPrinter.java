package myLib;

import java.util.List;

public class myPrinter {
	public static void pr(int[] nums){
		for (int i=0; i<nums.length; i++)
			System.out.print(nums[i] + " ");
		System.out.println();
	}
	
	public static void pr(int num){
		System.out.println(num);
	}

	public static void pr(List l){
		for (int i=0; i<l.size(); i++)
			System.out.print(l.get(i) + " ");
		System.out.println();
	}
}


