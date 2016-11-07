package myCodeJam;

import java.util.Comparator;
import java.util.PriorityQueue;

import myLib.myPrinter;

/*
 * Given 2 arrays (with same size n), calculate the largest n permutation sums
 */


public class G2015OnSiteR2Q1 {
	
	public class Num{
		int x;
		int y;
		int val;
		boolean isInQueue;
		
		public Num(int x, int y, int val){
			this.x = x;
			this.y = y;
			this.val = val;
			this.isInQueue = false;
		}
	}
	
	//算出所有的和，然后利用快排的partition找前n大的数
	public int[] calc1(int[] a, int[] b){
		int n = a.length;
		if (n==0) return a;
		int[] sums = sum2(a, b);
		partition(sums, 0, n*n-1, n);
		int[] ans = new int[n];
		for (int i=0; i<n; i++)
			ans[i] = sums[i];
		return ans;
	}
	
	//算出所有的和，借住最大堆队列，每次取最大的点，并将其上邻点和左邻点放进队列
	public int[] calc2(int[] a, int[] b){
		int n = a.length;
		if (n==0) return a;
		int[] ans = new int[n];
		Num[][] sums = sum1(a,b);
		
		PriorityQueue<Num> queue = new PriorityQueue<>(10,
				new Comparator<Num>() {
					public int compare(Num i1, Num i2){
						if (i1==i2) return 0;
						else return (i1.val<i2.val) ? 1:-1;
					}
				});
		queue.offer(sums[n-1][n-1]);
		for (int i=0; i<n; i++){
			Num num = queue.poll();
			ans[i] = num.val;
			if (num.x-1>=0 && !sums[num.x-1][num.y].isInQueue) {
				sums[num.x-1][num.y].isInQueue = true;
				queue.offer(sums[num.x-1][num.y]);
			}
			if (num.y-1>=0 && !sums[num.x][num.y-1].isInQueue){
				sums[num.x][num.y-1].isInQueue = true;
				queue.offer(sums[num.x][num.y-1]);
			}
		}
		return ans;
	}
	
	//最大堆算法改进：根本不需要sums数组，现场计算即可
	public int[] calc3(int[] a, int[] b){
		int n = a.length;
		int[][] isInQueue = new int[n][n];
		int[] ans = new int[n];
		
		PriorityQueue<Num> queue = new PriorityQueue<Num>(10,
				new Comparator<Num>() {
					public int compare(Num i1, Num i2){
						if (i1==i2) return 0;
						else return (i1.val<i2.val) ? 1:-1;
					}
				});
		queue.offer(new Num(n-1, n-1, a[n-1]+b[n-1]));
		for (int i=0; i<n; i++){
			Num num = queue.poll();
			
			if (num.x-1>=0 && isInQueue[num.x-1][num.y]==0){
				queue.offer(new Num(num.x-1, num.y, a[num.x-1]+b[num.y]));
				isInQueue[num.x-1][num.y] = 1;
			}
			if (num.y-1>=0 && isInQueue[num.x][num.y-1]==0){
				queue.offer(new Num(num.x, num.y-1, a[num.x]+b[num.y-1]));
				isInQueue[num.x][num.y-1] = 1;
			}
			ans[i] = num.val;
		}
		return ans;
	}
	
	public Num[][] sum1(int[] a, int[] b){
		int n = a.length;
		Num[][] sums = new Num[n][n];
		for (int i=0; i<n; i++)
			for (int j=0; j<n; j++)
				sums[i][j] = new Num(i, j, a[i]+b[j]);
		return sums;
	}
	
	public int[] sum2(int[] a, int[] b){
		int n = a.length;
		int[] sums = new int[n*n];
		for (int i=0; i<n; i++)
			for (int j=0; j<n; j++)
				sums[i*n+j] = a[i]+b[j];
		return sums;
	}
	
	//find Kth number
	public void partition(int[] nums, int b, int e, int k){
		int i=b, j=e;
		//myPrinter.pr(new int[]{i, j});
		if (i==j) return;
		int x = nums[e];
		while(i<j){
			while (i<j && nums[i]>=x) i++;
			if (i<j) {nums[j] = nums[i]; j--; }
			while(i<j && nums[j]<=x) j--;
			if (i<j) {nums[i] = nums[j]; i++; }
		}
		nums[i]=x;
		if (k==i) return;
		if (k<i) partition(nums, b, i-1, k);
		else partition(nums, i+1, e, k); //i<k
	}

	
	public static void main(String[] args){
		int[] a = new int[]{1, 4, 8, 12, 14};
		int[] b = new int[]{5, 9, 10, 15, 16};
		G2015OnSiteR2Q1 test = new G2015OnSiteR2Q1();
		int[] ans = test.calc1(a, b);
		myPrinter.pr(ans);
		
		ans = test.calc2(a, b);
		myPrinter.pr(ans);
		
		ans = test.calc3(a, b);
		myPrinter.pr(ans);
	}
	
	
	
}
