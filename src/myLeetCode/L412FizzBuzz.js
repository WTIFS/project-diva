/**
 * Created by WTIFS-Mac on 2018/1/20.
 *
 * Write a program that outputs the string representation of numbers from 1 to n.

 But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

 Example:

 n = 15,

 Return:
 [
 "1",
 "2",
 "Fizz",
 "4",
 "Buzz",
 "Fizz",
 "7",
 "8",
 "Fizz",
 "Buzz",
 "11",
 "Fizz",
 "13",
 "14",
 "FizzBuzz"
 ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = ['0'];
    var countsOfThree = parseInt(n/3);
    var countsOfFive = parseInt(n/5);
    for (var i=1; i<=n; i++) result[i] = i.toString();
    for (var j=1; j<=countsOfThree; j++) result[j*3] = "Fizz";
    for (var k=1; k<=countsOfFive; k++) {
        var targetIndex = k*5;
        if (result[targetIndex]=="Fizz") result[targetIndex] = "FizzBuzz";
        else result[targetIndex] = "Buzz";
    }
    result.shift();
    return result;
};

console.log(fizzBuzz(60));