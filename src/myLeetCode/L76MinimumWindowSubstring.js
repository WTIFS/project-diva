/**
 * Created by Yuanfei on 2017/4/10.
 */
/**
 Total Accepted: 95044
 Total Submissions: 387861
 Difficulty: Hard
 Contributor: LeetCode
 Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

 For example,
 S = "ADOBECODEBANC"
 T = "ABC"
 Minimum window is "BANC".

 Note:
 If there is no such window in S that covers all characters in T, return the empty string "".

 If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var leftMatches = {};
    var begin = 0;
    var leftCount = t.length;
    var i;
    var c;
    var head;
    var windowSize = 99999;
    for (i=0; i< t.length; i++) { //统计t中各字母的数量 如1A 1B 1C
        c = t[i];
        if (leftMatches.hasOwnProperty(c)) leftMatches[c]++;
        else leftMatches[c] = 1;
    }
    for (i=0; i< s.length; i++) {
        c = s[i];
        if (leftMatches.hasOwnProperty(c)) {
            if (leftMatches[c]>0) leftCount--;
            leftMatches[c] --;
        }
        while (leftCount==0) { //t中各字母全部匹配  挨个++begin 寻找最小window size
            while (!leftMatches.hasOwnProperty(s[begin])) begin++;
            var d = i - begin + 1;
            if (d<windowSize) {
                windowSize = d;
                head = begin;
            }
            if (leftMatches[s[begin]]==0) leftCount ++;
            leftMatches[s[begin]] ++;
            begin ++;
        }
    }

    return windowSize==99999? "": s.substr(head, windowSize);
};

console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"));
console.log(minWindow("ADOBECODEBANC", "ABC"));
