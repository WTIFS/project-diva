package myLeetCode;

import java.util.Arrays;

import javax.xml.stream.events.EndDocument;

import com.sun.org.apache.xpath.internal.operations.And;

public class L275HIndexII {
	public int hIndex(int[] citations) {
        int len = citations.length;
        if (len<1) return 0;
        
        int b = 0, e = len-1, mid = (b+e)/2;
        int count = 0;
        int ans = 0;
        while (b<=e){
        	count = len - mid;
        	if (citations[mid] >= count)
        	{
        		if (citations[mid]==count) return count;
        		else e = mid-1;
        	}
        	else b = mid+1;
        	mid = (b+e)/2;
        }
        return len-(e+1);
        
        /*int i=0;
        for (i=0; i<len; i++){
        	if (citations[i]>=len-i) return len-i;
        }*/
        
        //return 0;
    }
	
	public void main(int[] nums){
		Arrays.sort(nums);
		System.out.println(hIndex(nums));
	}
}
