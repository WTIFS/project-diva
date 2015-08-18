package myLeetCode;

import java.util.ArrayList;
import java.util.List;

public class L118PascalsTriangle {
    public static List<List<Integer>> generate(int numRows) {
        List<Integer> curLine = new ArrayList<Integer>();
        List<Integer> lastLine = new ArrayList<Integer>();
        List<List<Integer>> ans = new ArrayList<List<Integer>>();
        if (numRows>0){
            curLine.add(1);
            ans.add(curLine);
        }
        if (numRows<=1) return ans;
        for (int i=1; i<numRows; i++){
            curLine = new ArrayList<Integer>();
            lastLine = ans.get(i-1);
            curLine.add(1);
            for (int j=1; j<lastLine.size(); j++){
                curLine.add(lastLine.get(j-1)+lastLine.get(j));
            }
            curLine.add(1);
            ans.add(curLine);
        }
        return ans;
    }
    
    public void main(int n){
    	System.out.println(generate(n));
    }
}
