package myPlayGround;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.PriorityQueue;

import myLeetCode.ArrayListList;

public class Sort {

	public static void swap(int a, int b){
		a = a + b;
		b = a - b;
		a = a - b;
	}
	
	//冒泡
	/*
	 特点：stable sort、In-place sort
	思想：通过两两交换，像水中的泡泡一样，小的先冒出来，大的后冒出来。
	最坏运行时间：O(n^2)
	最佳运行时间：O(n^2)（当然，也可以进行改进使得最佳运行时间为O(n)）
	 */
	public int[] bubbleSort(int[] nums){
		int len = nums.length;
		int tmp;
		for (int i=0; i<len; i++)
			for (int j=len-1; j>i; j--)
				if (nums[j-1]>nums[j]){
					tmp = nums[j];
					nums[j] = nums[j-1];
					nums[j-1] = tmp;
				}
		return nums;
	}
	
	//插入排序
	/*特点：stable sort、In-place sort
	最优复杂度：当输入数组就是排好序的时候，复杂度为O(n)，而快速排序在这种情况下会产生O(n^2)的复杂度。
	最差复杂度：当输入数组为倒序时，复杂度为O(n^2)
	插入排序比较适合用于“少量元素的数组”。
	 */
	public int[] insertionSort(int[] nums){
		int j;
		int tmp;
		for (int i=1; i<nums.length; i++){
			j = i-1;
			tmp = nums[i];
			while(j>=0 && nums[j]>tmp){
				nums[j+1] = nums[j];
				j--;
			}
			nums[j+1] = tmp;
		}
		return nums;
	}
	
	//选择排序
	/*特性：In-place sort，unstable sort。
	思想：每次找一个最小值
	最好情况时间：O(n^2)
	最坏情况时间：O(n^2)*/
	public int[] selectionSort(int[] nums){
		int len = nums.length;
		int minIndex;
		for (int i=0; i<len-1; i++){
			minIndex = i;
			for (int j=i+1; j<len; j++)
				if (nums[j]<nums[minIndex]) minIndex = j;
			
			if (i==minIndex) continue;
			//swap
			nums[i] += nums[minIndex];
			nums[minIndex] = nums[i] - nums[minIndex];
			nums[i] -= nums[minIndex];
		}
		return nums;
	}
	
	//分治
	/* stable sort、Out-place sort
	 * 最坏情况运行时间：O(nlgn)
	 * 最佳运行时间：O(nlgn)
	 */
	public int[] mergeSort(int[] nums){
		divide(nums, 0, nums.length-1);
		return nums;
	}
	
	public void divide(int[] nums, int b, int e){
		if (b>=e) return;
		int mid = (b+e)/2;
		divide(nums, b, mid);
		divide(nums, mid+1, e);
		merge(nums, b, mid, e);
	}
	
	public void merge(int[] nums, int b, int mid, int e){
		int len1 = mid - b + 1;
		int len2 = e - mid;
		int[] left = new int[len1 + 1];
		int[] right = new int[len2 + 1];
		int i,j;
		for (i=0; i<len1; i++) left[i] = nums[b+i];
		for (j=0; j<len2; j++) right[j] = nums[mid+1+j];
		i=0; 
		j=0;
		left[len1] = Integer.MAX_VALUE;
		right[len2] = Integer.MAX_VALUE;//就不用比较越界了
		for (int k = b; k<=e; k++){
			if (left[i]<=right[j]) { nums[k] = left[i]; i++;}
			else {nums[k] = right[j]; j++;}
		}
	}
	
	//用哈希表的计数排序
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
	
	//用数组的计数排序
	//限制条件：输入为正数
	//特性：stable sort、out-place sort
	//最坏情况运行时间：O(n+MAX)
	//最好情况运行时间：O(n+MAX)
	public int[] countSort2(int[] nums){
		int max = Integer.MIN_VALUE;
		int len = nums.length;
		int[] ans = new int[len];
		for (int i=0; i<len; i++) if (nums[i]>max) max = nums[i];
		int[] count = new int[max+1];
		for (int i=0; i<len; i++) count[nums[i]]++;
		
		//convert count to index
		for (int i=1; i<=max; i++) count[i] += count[i-1];
		
		for (int i=len-1; i>=0; i--) {
			//int index = count[nums[i]];
			ans[count[nums[i]]] = nums[i];
			count[nums[i]]--;
		}
		return ans;
	}
	
	//基数排序
	//先以个位为基准排序，再十位，百位..
	//复杂度:O(n*bitsCount)
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
	
	//堆排序
	/* unstable sort、In-place sort
	 * 最优时间：O(nlgn)
	 * 最差时间：O(nlgn)
	 */
	public int[] heapSort(int[] nums){
		buildMaxHeap(nums);
		for (int i=nums.length-1; i>0; i--){
			int tmp = nums[0];//将最大点换到队尾，然后调整堆
			nums[0] = nums[i];
			nums[i] = tmp;
			adjustHeap(nums, 0, i-1);
			//for (int j=0; j<nums.length; j++) System.out.print(nums[j]+" ");
		}
		return nums;
	}
	
	public void buildMaxHeap(int[] nums){
		for (int i=(nums.length-1)/2; i>=0; i--)
			adjustHeap(nums, i, nums.length-1);
		//for (int i=0; i<nums.length; i++) System.out.print(nums[i]+" ");
	}
	
	public void adjustHeap(int[] nums, int index, int margin){
		int left = 2*index+1;
		int right = left+1;
		int largestIndex = index;
		if (left<=margin && nums[left]>nums[largestIndex]) largestIndex = left;
		if (right<=margin && nums[right]>nums[largestIndex]) largestIndex = right;
		if (index!=largestIndex){
			int tmp = nums[index];
			nums[index] = nums[largestIndex];
			nums[largestIndex] = tmp;
			adjustHeap(nums, largestIndex, margin);
		}
	}
	
	public int[] heapSort2(int[] nums){
		int ans[] = new int[nums.length];
		PriorityQueue<Integer> queue = new PriorityQueue<Integer>(new Comparator<Integer>(){
			@Override
			//默认Comparator就是这样
			public int compare(Integer i1, Integer i2) {
			      if(i1 > i2) return 1;  
	              else if(i1<i2)   return -1;  
	              else  return 0;  
			}
		});
		for (int i=0; i<nums.length; i++) queue.offer(nums[i]);
		for (int i=0; i<nums.length; i++) ans[i] = queue.poll();	
		return ans;
	}
	
	//找第k大的数 也可以用基数排序
	public static int findKth(int[] nums, int k){
	  return findKth(nums, k, 0, nums.length-1);
	}

	public static int findKth(int[] nums, int k, int b, int e){
	  if (b==e) return nums[b];
	  int index = partition(nums, b, e);
	  if (index==k) return nums[index];
	  else if (index<k) return findKth(nums, k, index+1, e);
	  else return findKth(nums, k, b, index-1);
	}

	public static int partition(int[] nums, int b, int e){
	  int x = nums[b];
	  int i = b;
	  int j = e;
	  while (i<j){
		 while (i<j && nums[j]>=x) j--;
		 if (i<j) { nums[i] = nums[j]; i++; }
		 while(i<j && nums[i]<=x) i++;
		 if (i<j) { nums[j] = nums[i]; j--; }
	  }
	  	nums[i] = x;
		return i;
	}
	
	public void main(int[] nums){
		qsort(nums);
		myPrinter.pr(nums);
		
		qsort2(nums);
		myPrinter.pr(nums);
		
		myPrinter.pr(radixSort(nums));
		
		myPrinter.pr(countSort(nums));
	}
	
	public static void main(String[] args){
		int[] nums = new int[]{1,3,7,5,2};
		Sort test = new Sort();
		int[] ans = test.selectionSort(nums);
		myPrinter.pr(ans);
		
		qsort2(nums);
		ans = test.insertionSort(nums);
		myPrinter.pr(ans);
		
		qsort2(nums);
		ans = test.bubbleSort(nums);
		myPrinter.pr(ans);
		
		qsort2(nums);
		ans = test.mergeSort(nums);
		myPrinter.pr(ans);
		
		qsort2(nums);
		ans = test.heapSort(nums);
		myPrinter.pr(ans);
		
		swap(nums[0], nums[1]);
		myPrinter.pr(ans);
		
		qsort2(nums);
		ans = test.heapSort2(nums);
		myPrinter.pr(ans);
		
		for (int i=0; i<ans.length; i++)
		myPrinter.pr(findKth(ans, i));
		//ans = test.HeapSort2(nums);
		for (int i=0; i<ans.length; i++) System.out.print(ans[i]+" ");
		System.out.println("");
	}
}

/*Ref:
 * http://blog.csdn.net/xiazdong/article/details/8462393
 */
