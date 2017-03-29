/**
 * Created by Yuanfei on 2017/3/29.
 */
/*
 Given a digit string, return all possible letter combinations that the number could represent.

 A mapping of digit to letters (just like on the telephone buttons) is given below.

 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    var result = [];
    recurse(0, digits, "", result);
    return result;
};

var recurse = function(idx, digits, str, result) {
    if (idx<digits.length) {
        var digit = digits[idx];
        var charList = dict[digit];
        charList.forEach(function (ch) {
            recurse(idx + 1, digits, str + ch, result);
        });
    } else {
        result.push(str);
    }
};

var dict = [
    [], //0
    [], //1
    ['a', 'b', 'c'], //2
    ['d', 'e', 'f'], //3
    ['g', 'h', 'i'], //4
    ['j', 'k', 'l'], //5
    ['m', 'n', 'o'], //6
    ['p', 'q', 'r', 's'], //7
    ['t', 'u', 'v'], //8
    ['w', 'x', 'y', 'z'] //9
];

console.log(letterCombinations("23"));