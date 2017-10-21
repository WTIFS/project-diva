/**
 * Created by WTIFS-Mac on 2017/10/21.
 *
 * Write a function that takes a string as input and returns the string reversed.

 Example:
 Given s = "hello", return "olleh".

 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var len = s.length;
    var r = new Array(len);
    for (var i=0; i<len; i++) r[i] = s[len-i-1];
    return r.join('');
};

console.log(reverseString("asdf"));