package myLeetCode;

public class L276FirstBadVersion {
	/* The isBadVersion API is defined in the parent class VersionControl.
    boolean isBadVersion(int version); */

	public int[] nums;
	
	public int firstBadVersion(int n) {
		if (n<1) return n;
		int b=1, e=n;
		int mid;
		while (b<e){
			mid = b+(e-b)/2;
			//(b+e)/2 is slow
			if (isBadVersion(mid)) e = mid;
			else b = mid + 1;
		}
		return e;
		
		/*
		int count = n;
        int step;

        while (count > 0) {
            step = count / 2;
            mid = first + step;
            if (!isBadVersion(mid)) {
                first = mid + 1;
                count -= (step + 1);
            } else {
                count = step;
            }
        }
		 */
	}
	  
	boolean isBadVersion(int version){
		if (version<1) return false;
		return nums[version-1]==1;
	}
	
	public void main(int[] a, int n){
		nums = a;
		System.out.println(firstBadVersion(n));
	}

}
