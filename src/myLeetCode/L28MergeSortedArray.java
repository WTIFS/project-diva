package myLeetCode;

public class L28MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m + n - 1;
        m--;
        n--;
        while (n>=0){
        	nums1[i--] = (m>=0 && nums1[m]>nums2[n]) ? nums1[m--]:nums2[n--];
        }
    }
}
