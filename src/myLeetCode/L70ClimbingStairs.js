/**
 * 
 */

var climbStairs = function(n){
	if (n<4) return n;
	var step1=1, step2=2;
	for (var i=3; i<=n; i++){
		step2 += step1;
		step1 = step2 - step1;
	}
	return step2;
};

for (var i=1; i<10; i++)
console.log(climbStairs(i));