/***
396. Rotate Function  QuestionEditorial Solution  My Submissions
Total Accepted: 3278
Total Submissions: 11551
Difficulty: Easy
Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

Example:

A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
***/

/**
 * @param {number[]} A
 * @return {number}
 */

var maxRotateFunction = function(A) {
	//F(k+1) - F(k) = F(k) + sum - nBk[n-1]
	var n = (A ? A:[]).length;
	var sum = 0;
	var F = [0];
	if (!n) return 0;
	for (var i=0; i<n; i++) {
		F[0] += A[i] * i;
		sum += A[i];
	};
	var max = F[0];
	for (var j=0; j<n-1; j++) {
		F[j+1] = F[j] + sum - n * A[n-(j+1)];
		if (F[j+1] > max) max = F[j+1];
	};
	console.log(F);
	return max;
};

var maxRotateFunction2 = function(A) {
	var max = 0;
	var n = A.length;
	var F = [];
	for (var i=0; i<n; i++) {
		F[i] = 0;
		for (var j=0; j<n; j++) {
			F[i] += A[j] * j;
		}
		if (F[i]>max) max = F[i];
		var temp = A.pop();
		A.unshift(temp);
	}
	return max;
};

var a = [4,3,2,6];
var b = [1,4,2,4,5,7,8,9,6,4,4,5];
var c = [23,345,3456,345,23,23,234,5,2345];
console.log(maxRotateFunction(a), maxRotateFunction2(a));
console.log(maxRotateFunction(b), maxRotateFunction2(b));
console.log(maxRotateFunction(c), maxRotateFunction2(c));