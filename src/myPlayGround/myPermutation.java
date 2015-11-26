package myPlayGround;


//全排列
public class myPermutation {

	public void fullPermutation(int[] nums){
		fullPermutation(nums, 0);
	}
	
	public void fullPermutation(int[] nums, int start){
		if (start==nums.length-1){
			for (int i=0; i<nums.length; i++)
				System.out.print(nums[i]);
			System.out.println();
		}
		
		for (int j=start; j<nums.length; j++){
			int tmp = nums[start];
			nums[start] = nums[j];
			nums[j] = tmp;
			fullPermutation(nums, start+1);
			nums[j] = nums[start];
			nums[start] = tmp;
		}
	}
	
	public static void main(String[] args){
		int[] nums = new int[] {1,2,3};
		myPermutation test = new myPermutation();
		test.fullPermutation(nums);
	}
}
