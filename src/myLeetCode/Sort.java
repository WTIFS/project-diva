package myLeetCode;

import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class Sort {
	
	//计数排序
	public int[] countSort(int[] nums){
		int len = nums.length;
		if (len<2) return nums;
		int[] ans = new int[len];
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		for (int i=0; i<len; i++){
			if (map.containsKey(nums[i])) map.put(nums[i], map.get(nums[i]+1));
			else map.put(nums[i], 1);
		}
		Integer[] indexs = map.keySet().toArray(new Integer[map.size()]);
		Arrays.sort(indexs);
		int count = 0;
		for (Integer i:indexs)
			for (int j=0; j<map.get(i); j++)
			ans[count++] = i;
		return ans;
	}
	
	//基数排序
	//先以个位为基准排序，再十位，百位..
	public int[] radixSort(int[] a){
		int[] nums = Arrays.copyOf(a, a.length);
		int len = nums.length;
		if (len<2) return nums;
		int max=0;
		int bitsCount=0; //最大位数
		for (int i=0; i<len; i++) if (nums[i]>max) max = nums[i]; //找最大值
		while (max > 0) {
			bitsCount++;
			max /= 10;
		}
		ArrayListList[] T = new ArrayListList[10];
		for (int i=0; i<10; i++) T[i] = new ArrayListList();
		int tens = 1;
		int bit = 0;
		for (int i=0; i<bitsCount; i++){
			for (int j=0; j<len; j++){
				bit = nums[j]/tens % 10;//获取个位，十位，百位..
				T[bit].add(nums[j]);
			}
			int count = 0;
			for (int i2=0; i2<T.length; i2++)
			{
				for (int j=0; j<T[i2].size(); j++)
					nums[count++] = T[i2].get(j);
				T[i2] = new ArrayListList();
			}
			tens *= 10;
		}
		return nums;

	}
	
	public static void qsort(int[] nums){
		qsort1(nums, 0, nums.length-1);
	}
	
	public static void qsort2(int[] nums){
		qsort2(nums, 0, nums.length-1);
	}
	
	public static void qsort1(int[] nums, int b, int e){
    	int i=b;
    	int j=e;
    	int x = nums[b];
    	while (i<j){
    		while (j>i && nums[j]>=x) j--;
    		if (j>i) { nums[i] = nums[j]; i++;}
    		while (i<j && nums[i]<=x) i++;
    		if (i<j) {nums[j] = nums[i]; j--;}
    	}
    	nums[i] = x;
    	if (i-1>b) qsort1(nums, b, i-1);
    	if (i+1<e) qsort1(nums, i+1, e);
	}
	
	public static void qsort2(int[] nums, int b, int e){
		//for (int i=0; i<nums.length; i++) System.out.print(nums[i]+" ");
		//System.out.println("\n");
    	int i=b;
    	int j=e;
    	int x = nums[e];
    	while (i<j){
    		while (i<j && nums[i]>=x) i++;
    		if (i<j) {nums[j] = nums[i]; j--;}
    		while (j>i && nums[j]<=x) j--;
    		if (j>i) { nums[i] = nums[j]; i++;}
    	}
    	nums[i] = x;
    	if (i-1>b) qsort2(nums, b, i-1);
    	if (i+1<e) qsort2(nums, i+1, e);
	}

	
	public void main(int[] nums){
		qsort(nums);
		for (int i=0; i<nums.length; i++) System.out.print(nums[i]+" ");
		System.out.println("");
		
		qsort2(nums);
		for (int i=0; i<nums.length; i++) System.out.print(nums[i]+" ");
		System.out.println("");
		
		int[] ans = radixSort(nums);
		for (int i=0; i<ans.length; i++) System.out.print(ans[i]+" ");
		System.out.println("");
		
		ans = countSort(nums);
		for (int i=0; i<ans.length; i++) System.out.print(ans[i]+" ");
		System.out.println("");
	}
}
