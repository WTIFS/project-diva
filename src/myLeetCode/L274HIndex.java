package myLeetCode;

import java.util.Arrays;
import java.util.Collections;

import myPlayGround.Sort;


/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.
 */
public class L274HIndex {
    public int hIndex(int[] citations) {
        int len = citations.length;
        if (len==0) return 0;
        int[] count = new int[len+1];
        for (int i=0; i<len; i++){
        	count[citations[i]>len? len:citations[i]]++;
        }
        
        int total = 0;
        for (int i=len; i>=0; i--){
        	total += count[i];
        	if (total>=i) return i;
        }
        return 0;
    }
    
    public int hIndex2(int[] citations){
    	int len = citations.length;
    	if (len==0) return 0;
    	Sort.qsort2(citations, 0, len-1);
    	int count=0;
    	while (count<len && citations[count]>=count+1) count++;
    	if (count>0) {
    		//count--;
    		//return count+1;
    		//or:
    		return count;
    	}
    	return 0;
    	//Arrays.sort(citations, Collections.reverseOrder() );
    }

    
    public void main(int[] nums){
    	System.out.println(hIndex(nums));
    	System.out.println(hIndex2(nums));
    }
}
