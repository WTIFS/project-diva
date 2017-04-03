/**
 * Created by Yuanfei on 2017/4/3.
 */
/*

 Implement wildcard pattern matching with support for '?' and '*'.

 '?' Matches any single character.
 '*' Matches any sequence of characters (including the empty sequence).

 The matching should cover the entire input string (not partial).

 The function prototype should be:
 bool isMatch(const char *s, const char *p)

 Some examples:
 isMatch("aa","a") → false
 isMatch("aa","aa") → true
 isMatch("aaa","aa") → false
 isMatch("aa", "*") → true
 isMatch("aa", "a*") → true
 isMatch("ab", "?*") → true
 isMatch("aab", "c*a*b") → false

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var asterisk = -1; //星号的index
    var match = 0; //匹配进度
    var currentP = 0; //p
    var currentS = 0; //s
    while (currentS < s.length) {
        if ((currentP< p.length) && (p[currentP]==s[currentS] || p[currentP]=='?')) {
            currentP++;
            currentS++;
        } else if (currentP< p.length && p[currentP]=='*') { //p[i]==*;
            asterisk = currentP++;
            match = currentS;
        } else if (asterisk>=0) {
            currentS = match++;
            currentP = asterisk + 1;
        } else return false;
    }
    while (currentP < p.length && p[currentP]=='*') currentP++;
    return currentP == p.length;
};

console.log(isMatch("", "*")); // → true
console.log(isMatch("aa","a")); // → false
console.log(isMatch("aa","aa")); // → true
console.log(isMatch("aaa","aa")); // → false
console.log(isMatch("aa", "*")); // → true
console.log(isMatch("aa", "a*")); // → true
console.log(isMatch("ab", "?*")); // → true
console.log(isMatch("aab", "c*a*b")); // → false

