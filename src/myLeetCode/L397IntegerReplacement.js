/***
Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1

17
17 16 8 4 2 1
17 18 9 8 4 2 1

23
22 11 10 5 4 2 1
24 12 6 3 2 1

33
32 16 8 4 2 1
34 17 16 8 4 2 1

31
30 15 14 7 6 3 2 1
32 16 8 4 2 1

***/

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    if (n==1) return 0;
	if (n && n%2==0) {
		return integerReplacement(n/2) + 1;
	} else {
		return Math.min(integerReplacement(n+1), integerReplacement(n-1)) + 1;
	}
};

var integerReplacement2 = function(n) {
    var count = 0;
    while (n>1) {
    	if ((n&1)==0) {
    		count ++;
    		console.log(n, n>>1, n/2);
    		n = n >> 1;
    	} else {
    		if (n==3) return count + 2;
    		else {
    			n = (n&2) ? (n+1) : (n-1);
    		}
    		count ++;
    	}
    }
    return count;
};

[8, 7, 17, 23, 33, 31, 2147483647].forEach(n=> {
	console.log(integerReplacement(n), integerReplacement2(n));
})