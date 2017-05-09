/**
 * Created by Yuanfei on 2017/5/9.
 */
/**
 Implement a basic calculator to evaluate a simple expression string.

 The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

 You may assume that the given expression is always valid.

 Some examples:
 "1 + 1" = 2
 " 2-1 + 2 " = 3
 "(1+(4+5+2)-3)+(6+8)" = 23
 */

/**
 * @param {string} s
 * @return {number}
 */

var calculate2 = function(s) {
    var result = 0;
    var num = "";
    var sign = 1;
    var numbers = [];
    var signs = [];
    for (var i=0; i< s.length; i++) {
        if (!isNaN(s[i])) {
            num += s[i];
        } else if (s[i]=='(') {
            numbers.push(result);
            signs.push(sign);
            result = 0;
            sign = 1;
        } else if (s[i]==')') {
            result += sign * num;
            result = numbers.pop() + signs.pop() * result;
            num = 0;
        } else if (s[i]=='+') {
            result += sign * Number(num);
            sign = 1;
            num = '';
        } else if (s[i]=='-') {
            result += sign * Number(num);
            sign = -1;
            num = '';
        }
    }
    if (num) result += sign * Number(num);
    return result;
};

var calculate = function(s) {
    var s2 = "";
    var i;
    var j;
    for (i=0; i< s.length; i++) if (s[i]!=' ') s2 += s[i];

    var numbers = [];
    var signs = [];
    var num = 0;
    for (i=0; i < s2.length; i++) {
        if (!isNaN(s2[i])) {
            num = s2[i];
            j = i+1;
            while (j < s2.length && !isNaN(s2[j])) {
                num+= s2[j++];
            }
            num = Number(num);
            i = j - 1;
        } else if (s2[i]=="(") {
            numbers.push(0);
            signs.push(1);
        } else if (s2[i] == ")") {
            num = numbers.pop() + signs.pop()* num;
        } else { //s2[i] = + / -
            var sign = s2[i]=='+'? 1: -1;
            if (!isNaN(s2[i+1])) { //s2[i+1] is number
                var num2 = "";
                j = i+1;
                while (j < s2.length && !isNaN(s2[j])) {
                    num2 += s2[j++];
                }
                num2 = Number(num2);
                num += sign * num2;
                i = j - 1;
            } else { //s2[i+1]=='('
                numbers.push(num);
                signs.push(sign);
                i++;
            }
        }
    }
    return num;
};

var s1 = "1 + 1";
var s2 = " 2-1 + 2 ";
var s3 = "(1+(4+5+2)-3)+(6+8)";
console.log(calculate2(s3));
console.log(calculate(s1) == calculate2(s1)); // = 2
console.log(calculate(s2) == calculate2(s2)); // = 3
console.log(calculate(s3) == calculate2(s3)); // = 23