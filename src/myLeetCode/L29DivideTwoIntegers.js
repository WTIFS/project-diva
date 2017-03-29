/**
 * Created by Yuanfei on 2017/3/29.
 */

/*
 Divide two integers without using multiplication, division and mod operator.

 If it is overflow, return MAX_INT.
 */

//js里 2^30 <<1 = -2^31  就成负数了 非常蛋疼  所以改用JAVA
var divide = function(dividend, divisor) {
    var MAX_INT = Math.pow(2, 31)-1;
    var MIN_INT = -MAX_INT-1;
    var result = 0;
    if (!divisor || (dividend==MIN_INT && divisor==-1)) return MAX_INT;
    if (divisor==1) return dividend;
    if (divisor==-1) return -dividend;
    var sign = (dividend>0) ^ (divisor>0) ? -1: 1;
    if (dividend<0) dividend = -dividend;
    if (divisor<0) divisor = - divisor;
    while (dividend >= divisor) {
        var temp = divisor;
        var offset = 0;
        while (dividend >= (temp << 1)) {
            temp <<= 1;
            offset++;
        }
        dividend -= temp;
        result += (1 << offset);
    }
    return sign * result;
};

console.log(divide(2147483647, 1));
console.log(divide(2147483647, 2));
console.log(divide(-2147483648, -1));
console.log(divide(1, -1));
console.log(divide(-1, 1));