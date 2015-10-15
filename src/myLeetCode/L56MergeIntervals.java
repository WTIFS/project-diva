package myLeetCode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;


/*
 * Given a collection of intervals, merge all overlapping intervals.
 * For example, Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 */

public class L56MergeIntervals {
	class Interval {
		int start;
		int end;
		Interval() { start = 0; end = 0; }
		Interval(int s, int e) { start = s; end = e; }
	}
	
	public class cmp implements Comparator<Interval>{
		public int compare(Interval i1, Interval i2){
		    if (i1.start<i2.start) return -1;
		    if (i1.start==i2.start && i1.end<=i2.end) return -1;
		    return 1;
		}
	}
	
    public List<Interval> merge(List<Interval> intervals) {
        List<Interval> ans = new ArrayList<Interval>();
        int len = intervals.size();
        if (len<1) return ans;
        
        Interval[] array = new Interval[len];
        intervals.toArray(array);
        Arrays.sort(array, new cmp());
        int start=array[0].start, end = array[0].end;
        
        for (int i=0; i<len; i++){
        	if (array[i].start<=end) end = Math.max(end, array[i].end);
        	else {
        		ans.add(new Interval(start, end));
        		start = array[i].start;
        		end = array[i].end;
        	}
        }
        ans.add(new Interval(start, end));
        return ans;
    }
    
    public void main(List<Interval> intervals){
    	List<Interval> ans = merge(intervals);
    	for (int i=0; i<ans.size(); i++)
    		System.out.println(ans.get(i).start + " " + ans.get(i).end);
    }
}
