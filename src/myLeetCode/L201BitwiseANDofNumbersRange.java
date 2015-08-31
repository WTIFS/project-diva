package myLeetCode;
/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
 */

public class L201BitwiseANDofNumbersRange {
	//find the common prefix of m & n
    public int rangeBitwiseAnd(int m, int n) {
        while (m<n) n &= n-1;
        return n;
    }
    
    public int rangeBitwiseAnd2(int m, int n) {
    	int count = 0;
        while (m<n) {
        	m = m >> 1;
        	n >>= 1;
        	count++;
        }
        return m<<count;
    }
    
    public void main(int m, int n){
    	System.out.println(rangeBitwiseAnd(m, n));
    	System.out.println(rangeBitwiseAnd2(m, n));
    }
}
