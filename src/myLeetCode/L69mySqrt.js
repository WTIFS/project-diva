/**
 * Created by WTIFS-Mac on 4/4/17.
 */
/*
 Implement int sqrt(int x).

 Compute and return the square root of x.
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var b = 0;
    var e = x;
    var mid;
    while (true) {
        mid = parseInt((b+e)/2);
        if (mid*mid>x) e = mid-1;
        else {
            if ((mid+1)*(mid+1)>x) return mid;
            b = mid+1;
        }
    }
};

var mySqrt2 = function(x) {
    for (var i=0; i<=x; i++) {
        var square = i*i;
        if (square==x) return i;
        if (square>x) return i-1;
    }
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(9));
console.log(mySqrt(25));