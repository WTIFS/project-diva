package myPlayGround;

public class myPrinter {
	public static void pr(int[] nums){
		for (int i=0; i<nums.length; i++)
			System.out.print(nums[i] + " ");
		System.out.println();
	}
	
	public static void pr(int num){
		System.out.println(num);
	}
}
