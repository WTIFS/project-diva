/**
 * Created by WTIFS-Mac on 2017/5/7.
 */
/**
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.

 Return all such possible sentences.

 For example, given
 s = "catsanddog",
 dict = ["cat", "cats", "and", "sand", "dog"].

 A solution is ["cats and dog", "cat sand dog"].
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
    
var wordBreak = function(s, wordDict) {
    var wordMap = {};
    wordDict.forEach(function(word) {
        wordMap[word] = true;
    });

    var len = s.length;
    var dp = new Array(len+1);
    var a = new Array(len+1);
    for (var i=0; i<=len; i++) a[i] = [];
    dp[0] = true;

    for (var k=1; k<=len; k++) {
        for (var j=0; j<k; j++) {
            var temp = s.substr(j, k-j);
            if (dp[j] && wordMap[temp]) {
                dp[k] = true;
                a[j].push(temp);
            }
        }
    }

    var results = [];
    if (dp[len]) {
        buildResults(s, a, 0, [], results);
    }
    return results;
};


var buildResults = function(s, a, start, current, results) {
    if (start+1==a.length) results.push(current.join(" "));
    a[start].forEach(function(str) {
        var temp = hardCopy(current);
        temp.push(str);
        buildResults(s, a, start+str.length, temp, results);
    });
};

var hardCopy = function(a) {
    var b = [];
    a.forEach(function(entry){
        b.push(entry);
    });
    return b;
};



//TLE Don't use
var wordBreak2 = function(s, wordDict) {
    var wordMap = {};
    wordDict.forEach(function(word) {
        wordMap[word] = true;
    });

    return dfs(s, wordMap);
};

var dfs = function(s, wordMap) {
    var result = [];
    var len = s.length;

    for (var j=1; j<=len; j++) {
        if (wordMap[s.substr(len-j, j)]) break;
        else if (j==len) return result;
    }

    for (var i=0; i<len-1; i++) {
        var temp = s.substr(0, i+1);
        if (wordMap[temp]) {
            var suffixes = dfs(s.substr(i+1, len - i - 1), wordMap);
            suffixes.forEach(function(suffix) {
                result.push(temp + " " + suffix);
            });
        }
    }
    if (wordMap[s]) result.push(s);
    return result;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));