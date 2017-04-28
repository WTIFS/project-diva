/**
 * Created by Yuanfei on 2017/4/28.
 */
/**
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

 For example, given
 s = "leetcode",
 dict = ["leet", "code"].

 Return true because "leetcode" can be segmented as "leet code".
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    var wordMap = {};
    wordDict.forEach(function(word) {
        wordMap[word] = true;
    });

    var len = s.length;
    var dp = new Array(len+1);
    dp[0] = true;
    for (var i=1; i<= s.length; i++) {
        for (var j=0; j<i; j++) {
            var temp = s.substr(j, i-j);
            if (dp[j] && wordMap[temp]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len] || false;
};


console.log(wordBreak("aaaaaaa", ["aaaa", "aa"]));
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("leetcodec", ["leet", "code"]));
console.log(wordBreak("leetcodec", ["leet", "codec"]));
console.log(wordBreak("", ["leet", "codec"]));
console.log(wordBreak("", []));