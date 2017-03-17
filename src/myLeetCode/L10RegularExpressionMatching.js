/**
 * Created by Yuanfei on 2017/3/17.
 */
/**
 Implement regular expression matching with support for '.' and '*'.

 '.' Matches any single character.
 '*' Matches zero or more of the preceding element.

 The matching should cover the entire input string (not partial).

 The function prototype should be:
 bool isMatch(const char *s, const char *p)

 Some examples:
 isMatch("aa","a") → false
 isMatch("aa","aa") → true
 isMatch("aaa","aa") → false
 isMatch("aa", "a*") → true
 isMatch("aa", ".*") → true
 isMatch("ab", ".*") → true
 isMatch("aab", "c*a*b") → true
 */

/**
 a[i][j]: s[0...i-1] matches p[0...j-1] //长度为i的s matches 长度为j的pattern

 if s[i-1]==p[j-1]
    a[i][j] = a[i-1][j-1]
 if p[j-1]=='.'
    a[i][j] = a[i-1][j-1]
 if p[j-1]=='*'
    if s[i-1] !+ p[j-2]
        a[i][j] = a[i][j-2]       //a* as null
    else
        a[i][j] = a[i][j-2]    //a* as null
        or a[i][j-1]    //single a
        or a[i-1][j]      //multiple a
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    var i;
    var j;
    var a=new Array(s.length + 1);
    for (i=0; i< a.length; i++) {
        a[i] = new Array(p.length + 1);
    }
    a[0][0] = true;
    for (i=1; i< p.length; i++) a[0][i+1] = a[0][i-1] && p[i]=='*';

    for (i=0; i<s.length; i++) {
        for (j=0; j< p.length; j++) {
            if (s[i]==p[j] || p[j]=='.') a[i+1][j+1] = a[i][j];
            else if (p[j]=='*') {
                a[i+1][j+1] = a[i+1][j-1] || ((s[i]==p[j-1] || p[j-1]=='.') && (a[i+1][j] || a[i][j+1]));
            }
        }
    }
    return a[s.length][p.length] || false;
};

console.log(isMatch("aa","a")); //→ false
console.log(isMatch("aa","aa")); //→ true
console.log(isMatch("aaa","aa")); //→ false
console.log(isMatch("aa", "a*")); //→ true
console.log(isMatch("aa", ".*")); //→ true
console.log(isMatch("ab", ".*")); //→ true
console.log(isMatch("aab", "c*a*b")); //true