package myLib;


//全排列
public class myPermutation {

	public void fullPermutation(int[] nums){
		fullPermutation(nums, 0);
	}

	public void swap(int[] nums, int i, int j) {
		if (j==i) return;
		nums[i] += nums[j];
		nums[j] = nums[i] - nums[j];
		nums[i] = nums[i] - nums[j];
	}

	public void revert(int[] nums, int start, int end) {
		for (int i=0; i<(end+1-start)/2; i++) swap(nums, start+i, end-i);
	}


	//P(1, 2, 3, 4, 5) = 1P(2, 3, 4, 5) + 2P(1, 3, 4, 5) + 3P(1, 2, 4, 5) + 4P(1, 2, 3, 5) + 5P(1, 2, 3, 4)
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

	//http://www.cnblogs.com/pmars/archive/2013/12/04/3458289.html
	// 一般而言，设P是[1,n]的一个全排列。
	//		P=P1P2…Pn=P1P2…Pj-1PjPj+1…Pk-1PkPk+1…Pn
	//		find:　 j=max{i | Pi<Pi+1}
	//					k=max{i | Pi>Pj}
	//		1，  对换Pj，Pk，
	//		2，  将Pj+1…Pk-1PjPk+1…Pn翻转
	//		P’= P1P2…Pj-1PkPn…Pk+1PjPk-1…Pj+1即P的下一个

	//	【例】 如何得到346987521的下一个
	//	1，从尾部往前找第一个P(i-1) < P(i)的位置
	//		3 4 6 <- 9 <- 8 <- 7 <- 5 <- 2 <- 1
	//		最终找到6是第一个变小的数字，记录下6的位置i-1
	//	2，从i位置往后找到最后一个大于6的数
	//		3 4 6 -> 9 -> 8 -> 7 5 2 1
	//		最终找到7的位置，记录位置为m
	//	3，交换位置i-1和m的值
	//		3 4 7 9 8 6 5 2 1
	//	4，倒序i位置后的所有数据
	//		3 4 7 1 2 5 6 8 9
	//	则347125689为346987521的下一个排列
	public void fullPermutation2(int[] nums) {
		Sort.qsort(nums);
		do {
			myPrinter.pr(nums);
			int i = nums.length - 1;
			while (i>0 && nums[i-1]>nums[i]) i--;
			if (i==0) return;
			int j = i;
			while (j+1<nums.length && nums[j+1]>nums[i-1]) j++;
			swap(nums, i-1, j);
			revert(nums, i, nums.length-1);
		} while (true);
	}
	
	public static void main(String[] args){
		int[] nums = new int[] {1, 2, 3, 4};
		myPermutation test = new myPermutation();
		test.fullPermutation(nums);
		test.fullPermutation2(nums);
	}
}
