/**
 * Created by Yuanfei on 2016/6/20.
 */
/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

    Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])*/

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n<=0) return 1;
    else if (n===1) return 10;
    else {
        if (n>=10) n=10;
        var result = 10;
        for (var i=2; i<=n; i++) {
            result += calc(i);
        }
        return result;
    }
};

var P = [9];

function calc(n) {
    if (P[n-1]) return P[n-1] * (11-n);
    var result = 9;
    for (var i=9; i>=11-n; i--) {
        result *= i;
    }
    if (!P[n]) P[n] = result;
    return result;
}

for (var i=0; i<=10; i++)
console.log(i + ": " + countNumbersWithUniqueDigits(i));

//console.log(countNumbersWithUniqueDigits(7));