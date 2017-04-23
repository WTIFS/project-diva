/**
 * Created by Yuanfei on 2017/4/18.
 */
/**
 A message containing letters from A-Z is being encoded to numbers using the following mapping:

 'A' -> 1
 'B' -> 2
 ...
 'Z' -> 26
 Given an encoded message containing digits, determine the total number of ways to decode it.

 For example,
 Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

 The number of ways decoding "12" is 2.
 */

var cnt = 0;

/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    if (!s) return 0;
    var dp = [];
    for (var i=0; i< s.length; i++) {
        dp[i] = 0;
        if (s[i] != '0') {
            if (i>=1) dp[i] += dp[i - 1];
            else dp[i] += 1;
        }
        if (s[i-1] !='0' && s[i-1] + s[i]<=26) {
            if (i>=2) dp[i] += dp[i - 2];
            else dp[i] += 1;
        }
    }
    return dp[s.length-1];
};

//TLE
var numDecodings2 = function(s) {
    if (!s) return 0;
    cnt = 0;
    recurse(s, 0);
    return cnt;
};

var recurse = function(s, i) {
    if (s[i]==0) return;
    if (i== s.length) {
        cnt ++;
        return;
    }
    recurse(s, i+1);
    if (i+1< s.length && s[i]!='0' && s[i] + s[i+1]<=26) recurse(s, i+2);
};

console.log(numDecodings("9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253"));
console.log(numDecodings2("9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253"));
console.log(numDecodings("0"));
console.log(numDecodings2("0"));
console.log(numDecodings("120"));
console.log(numDecodings2("120"));
console.log(numDecodings("1234"));
console.log(numDecodings2("1234"));