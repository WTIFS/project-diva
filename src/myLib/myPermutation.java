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

	//不适用有重复数字的
	public void fullPermutation2(int[] nums) {
		Sort.qsort(nums);
		do {
			myPrinter.pr(nums);
			int i = nums.length - 1;
			while (i>0 && nums[i-1]>=nums[i]) i--;
			if (i==0) return;
			int j = i;
			while (j+1<nums.length && nums[j+1]>nums[i-1]) j++;
			swap(nums, i-1, j);
			revert(nums, i, nums.length-1);
		} while (true);
	}

	//choose k numbers from n numbers
	//其实就是强制规定排序，必须按index从小到大排
	//C([1, 2, 3, 4], 2) = 1C([2, 3, 4], 1) + 2C([3, 4], 1) + 3C([4], 1) //2在1后面，所以只选2后面的，防重复
	public void combination(int[] nums, int start, int cnt, int k, int[] chosenNums) {
		if (cnt<k) {
			for (int i = start; i < nums.length && i + (k - cnt - 1) <= nums.length; i++) {
				chosenNums[cnt] = nums[i];
				combination(nums, i + 1, cnt + 1, k, chosenNums);
			}
		} else {
			myPrinter.pr(chosenNums);
		}
	}

	//全组合  利用2进制的01表示选不选中
	public void fullCombination(int[] nums) {
		for (int i=1; i<Math.pow(2, nums.length); i++) { //遍历1 ~ 2^n-1
			String s = Integer.toBinaryString(i);
			for (int j=s.length()-1; j>=0; j--) {
				char binaryChar = s.charAt(j);
				int binary = Character.getNumericValue(binaryChar);
				int reflectIndex = (nums.length - s.length()) + j;
				if (binary==1)
					System.out.print(nums[reflectIndex] + " ");
			}
			myPrinter.pl("");
		}
	}

	//	01转换法
	/*本程序的思路是开一个数组，其下标表示1到n个数，数组元素的值为1表示其代表的数被选中，为0则没选中。
	首先初始化，将数组前n个元素置1，表示第一个组合为前n个数。
	然后从左到右扫描数组元素值的“10”组合，找到第一个“10”组合后将其变为“01”组合，同时将其左边的所有“1”全部移动到数组的最左端。
	当第一个“1”移动到数组的n-m的位置，即n个“1”全部移动到最右端时，就得到了最后一个组合。*/
	public void combination2(int[] nums, int k) {
		int[] selected = new int[nums.length];
		for (int i=0; i<k; i++) selected[i] = 1;
		for (int i=0; i<k; i++) {
			System.out.print(nums[i] + " ");
		}
		myPrinter.pl("");
		while (true) {
			for (int i=0; i<nums.length-1; i++) {
				if (selected[i]==1 && selected[i+1]==0) {
					swap(selected, i, i+1);
					int cnt1 = 0;
					for (int j=0; j<i; j++) {
						if (selected[j]==1) cnt1++; //统计1的数量
					}
					for (int j=0; j<cnt1; j++) selected[j] = 1;
					for (int j=cnt1; j<i; j++) selected[j] = 0;

					for (int j=0; j<nums.length; j++) {
						if (selected[j]==1) System.out.print(nums[j] + " ");
					}
					myPrinter.pl("");
					i = -1; //i重置到起始位置
				} else if (i==nums.length-2) return;
			}
		}
	}

	public static void main(String[] args){
		int[] nums = new int[] {3, 2, 1};
		myPermutation test = new myPermutation();
//		test.fullPermutation(nums);
//		test.fullPermutation2(nums);

		for (int k=1; k<=3; k++) {
			test.combination(nums, 0, 0, k, new int[k]);
//			test.combination2(nums, k);k
		}
//		test.fullCombination(nums);
	}
}
