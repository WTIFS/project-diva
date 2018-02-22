/**
 * Created by WTIFS-Mac on 2018/1/9.
 *
 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

 Examples:

 s = "leetcode"
 return 0.

 s = "loveleetcode",
 return 2.
 Note: You may assume the string contain only lowercase letters.

 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var count = {};
    for (var i=0; i<s.length; i++) {
        if (!count[s[i]]) count[s[i]]=1;
        else count[s[i]] ++;
    }
    for (var j=0; j<s.length; j++) {
        if (count[s[j]]==1) return j;
    }
    return -1;
};

var s = "leetcode";
console.log(firstUniqChar(s));
//return 0.

s = "loveleetcode";
console.log(firstUniqChar(s));
//return 2.