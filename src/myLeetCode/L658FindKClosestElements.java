package myLeetCode;

/*
Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
 */

import myLib.myPrinter;

import java.util.ArrayList;
import java.util.List;

public class L658FindKClosestElements {

    /**
     * @param arr 数组
     * @param k 数量
     * @param x 目标数字
     * @return 离x最近的k个数字
     */
    public static List<Integer> findClosestElements(int[] arr, int k, int x) {
        List<java.lang.Integer> result = new ArrayList<>();
        int i = 0; //i excluded
        while (i+1<arr.length && arr[i+1] < x) i++;
        int j = i+1; //j excluded

        while (k-- > 0) {
            if (i<0) j++;
            else if (j>=arr.length) i--;
            else if (x - arr[i]<=arr[j] - x) i--;
            else j++;
        }
        for (int m = i+1; m<j; m++) {
            result.add(arr[m]);
        }
        return result;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1,2,3,4,5};
        myPrinter.pl(findClosestElements(nums, 3, 4));
        myPrinter.pl(findClosestElements(nums, 4, 3));
        myPrinter.pl(findClosestElements(nums, 5, 3));
        myPrinter.pl(findClosestElements(nums, 5, 4));

        nums = new int[]{0,0,1,2,3,3,4,7,7,8};
        myPrinter.pl(findClosestElements(nums, 3, 5));
    }

}
