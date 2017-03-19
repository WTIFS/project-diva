/**
 * Created by WTIFS-Mac on 19/3/17.
 */

/*
 Implement a basic calculator to evaluate a simple expression string.

 The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

 You may assume that the given expression is always valid.

 Some examples:
 "3+2*2" = 7
 " 3/2 " = 1
 " 3+5 / 2 " = 5
 Note: Do not use the eval built-in library function.
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var nums = [];
    var signs = [1]; //第一个数字标记为正
    var j;
    var num;
    for (var i=0; i<s.length; i++) {
        var c = s[i];
        if (c == ' ') continue;
        else if (!isNaN(c)) {//是数字
            j = i+1;
            num = c;
            while(j<s.length && !isNaN(s[j])) {
                if (s[j]!=' ') num += s[j];
                j ++;
            }
            nums.push(Number(num));
            i = j - 1;
        } else { //是符号
            switch (c) {
                case '+':
                    signs.push(1);
                    break;
                case '-':
                    signs.push(-1);
                    break;
                case '*':
                    j = i+1;
                    while (j<s.length && s[j]==' ') j++;
                    num = '';
                    while(j<s.length && (!isNaN(s[j]))) {
                        if (s[j]!=' ') num += s[j];
                        j ++;
                    }
                    var product = Number(num) * nums.pop();
                    nums.push(product);
                    i = j-1;
                    break;
                case '/':
                    j = i+1;
                    while (j<s.length && s[j]==' ') j++;
                    num = '';
                    while(j<s.length && (!isNaN(s[j]))) {
                        if (s[j]!=' ') num += s[j];
                        j ++;
                    }
                    var division = parseInt(nums.pop() / Number(num));
                    nums.push(division);
                    i = j-1;
                    break;
            }
        }
    }
    var sum = 0;
    while (nums.length) sum += nums.pop() * signs.pop();
    return sum;
};

console.log(calculate("3+2*2"));
console.log(calculate("3/2"));
console.log(calculate("5 /2"));
console.log(calculate(" 3 + 5 / 2 "));
