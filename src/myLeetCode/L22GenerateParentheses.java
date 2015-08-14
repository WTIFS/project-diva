package myLeetCode;

import java.util.ArrayList;
import java.util.List;

public class L22GenerateParentheses {
	
    public List<String> generateParenthesis(int n) {
    	List<List<String>> N = new ArrayList<List<String>>();
    	List<String> curRow = new ArrayList<String>();
    	List<String> part1 = new ArrayList<String>();
    	List<String> part2 = new ArrayList<String>();
    	curRow.add("");
    	N.add(curRow);
    	for (int i=1; i<=n; i++){
    		curRow = new ArrayList<String>();
    		for (int j=0; j<i; j++){
    			part1 = N.get(j);
    			part2 = N.get(i-1-j);
    			for (int i1=0; i1<part1.size(); i1++)
    				for (int i2=0; i2<part2.size(); i2++){
    					curRow.add("(" + part1.get(i1) + ")" + part2.get(i2));
    				}
    		}
    		N.add(curRow);
    	}
    	return curRow;
    }
   
    public List<String> ans;
    
    public List<String> generateParenthesis2(int n){
    	ans = new ArrayList<String>();
    	if (n<=0) return ans;
    	gen(1, 0, n, "(");
    	return ans;
    }
    
    public void gen(int leftCount, int rightCount, int n, String s){
    	if (leftCount==n && rightCount==n) {ans.add(s); return;}
    	if (leftCount<n) gen(leftCount+1, rightCount, n, s+"(");
    	if (rightCount<leftCount) gen(leftCount, rightCount+1, n, s+")");
    }
}
