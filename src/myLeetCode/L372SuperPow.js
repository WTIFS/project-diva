/**
 * Created by WTIFS on 16/8/18.
 */
/*
 372. Super Pow  QuestionEditorial Solution  My Submissions
 Total Accepted: 5406
 Total Submissions: 17649
 Difficulty: Medium
 Your task is to calculate a^b mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

 Example1:

 a = 2
 b = [3]

 Result: 8
 Example2:

 a = 2
 b = [1,0]

 Result: 1024
*/

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    a = a % 1337;
    var result = 1;
    b.forEach(function(carrier) {
        result = powMod(result, 10) * powMod(a, carrier) % 1337;
    });
    return result;
};

function powMod(a, b) {
    var result = 1;
    for (var i=0; i< b; i++) {
        result = result * a % 1337;
    }
    return result;
}

//for (var i=0; i<20; i++)
    console.log(superPow(2147483647, [2,0,0]));