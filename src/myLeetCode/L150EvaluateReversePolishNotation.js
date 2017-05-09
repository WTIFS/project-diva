/**
 * Created by Yuanfei on 2017/5/9.
 */
/**
 Evaluate the value of an arithmetic expression in Reverse Polish Notation.

 Valid operators are +, -, *, /. Each operand may be an integer or another expression.

 ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (!tokens.length) return 0;
    var numbers = [];
    tokens.forEach(function(token) {
        if (token=="0" || Number(token)) {
            numbers.push(Number(token));
        } else {
            var b = numbers.pop();
            var a = numbers.pop();
            numbers.push(calc(a, b, token));
        }
    });
    return numbers.pop();
};

var calc = function(a, b, op) {
    if (op=="+") return a+b;
    if (op=='-') return a-b;
    if (op=="*") return a*b;
    if (op=="/") {
        if (b) return parseInt(a/b);
        else console.log("ZERO DIVIDEND");
    }
};

console.log(evalRPN( ["0","3","/"] ));
console.log(evalRPN( ["2", "1", "+", "3", "*"] ));
console.log(evalRPN( ["4", "13", "5", "/", "+"] ));
