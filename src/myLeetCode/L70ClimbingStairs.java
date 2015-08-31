package myLeetCode;
/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/*        _
        _|
      _|
    _|
  _|
 |
a[1]=1;
a[2]=2;
a[3]=3;
a[4]=5;
a[5]=8;
*/
public class L70ClimbingStairs {
	
	public int climbStairs4(int n){
		double z = Math.sqrt(5);
		double x = (1+z)/2;
		double y = (1-z)/2;
		return (int) ((Math.pow(x, n+1) - Math.pow(y, n+1))/z + 0.5);
	}
	
	public int climbStairs3(int n){
		if (n<4) return n;
		int step1=1, step2=2;
		for (int i=3; i<=n; i++){
			int stepi = step1 + step2;
			step1 = step2;
			step2 = stepi;
		}
		return step2;
	}
    
	public int climbStairs2(int n) {
		if (n<4) return n;
        int[] a = new int[n+1];
        for (int i=1; i<4; i++) a[i] = i;
        for (int i=4; i<=n; i++) a[i] = a[i-1] + a[i-2];
        return a[n];
   }
	
	//TLE
	public int climbStairs(int n) {
         if (n<4) return n;
         else return (climbStairs(n-1) + climbStairs(n-2));
    }
    
    public void main(int n){
    	System.out.println(climbStairs(n));
    	System.out.println(climbStairs2(n));
    	System.out.println(climbStairs3(n));
    	System.out.println(climbStairs4(n));
    }
}
