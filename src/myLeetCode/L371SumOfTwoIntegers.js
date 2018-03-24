/**
 * Created by chenyuanfei on 16/7/11.
 */
/*
371. Sum of Two Integers  QuestionEditorial
Total Accepted: 10602
Total Submissions: 20444
Difficulty: Easy
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
    Given a = 1 and b = 2, return 3.

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b!=0) {
        var carrier = (a & b) << 1; //左移1位  //相同表示进位
        a ^= b; //异或结果留在原位
        b = carrier;
    }
    return a;
};

console.log(getSum(-10, 2));