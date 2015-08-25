package myLeetCode;


/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
 */
public class L264UglyNumberII {
    public int nthUglyNumber(int n) {
    	if (n<1) return 1;
        int factor2=2, factor3=3, factor5=5;
        int min = n;
        int index2=0, index3=0, index5=0;
        int[] uglys = new int[n];
        uglys[0]=1;
        for (int i=1; i<n; i++){
        	min = Math.min(factor2, Math.min(factor3, factor5));
        	uglys[i] = min;
        	if (factor2==min){
        		factor2=2*uglys[++index2];
        	}
        	if (factor3==min){
        		factor3=3*uglys[++index3];
        	}
        	if (factor5==min){
        		factor5=5*uglys[++index5];
        	}
        }
        return uglys[n-1];
    }
    
    public void main(int n){
    	System.out.println(nthUglyNumber(n));
    }
}
