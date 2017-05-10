/**
 * Created by Yuanfei on 2017/5/10.
 */
/**
 Given a string that contains only digits 0-9 and a target value, return all startsibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

 "123", 6 -> ["1+2+3", "1*2*3"]
 "232", 8 -> ["2*3+2", "2+3*2"]
 "105", 5 -> ["1*0+5","10-5"]
 "00", 0 -> ["0+0", "0-0", "0*0"]
 "3456237490", 9191 -> []

 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    var results = [];
    return dfs(num, 0, "", target, 0, 0, results);
};

var dfs = function(numStr, start, path, target, val, lastNum, results) {
    if (start == numStr.length && val==target) {
        results.push(path);
        return;
    }
    for(var i = start; i < numStr.length; i++) {
        if (i > start && numStr[start] == '0') break;
        var currentNum = Number(numStr.substr(start, i - start + 1));
        if (start == 0) {
            dfs(numStr, i + 1, path + currentNum, target, currentNum, currentNum, results);
        } else {
            dfs(numStr, i + 1, path + "+" + currentNum, target, val + currentNum , currentNum, results);

            dfs(numStr, i + 1, path + "-" + currentNum, target, val - currentNum, -currentNum, results);

            dfs(numStr, i + 1, path + "*" + currentNum, target, val - lastNum + lastNum * currentNum, lastNum * currentNum, results );
        }
    }
    return results;
};

var num = "123";
console.log(addOperators(num, 6));

