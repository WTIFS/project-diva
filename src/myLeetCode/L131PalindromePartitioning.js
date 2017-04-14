/**
 * Created by Yuanfei on 2017/4/14.
 */
/**
 Given a string s, partition s such that every substring of the partition is a palindrome.

 Return all possible palindrome partitioning of s.

 For example, given s = "aab",
 Return

 [
 ["aa","b"],
 ["a","a","b"]
 ]
 */


//DP方法：partition("aab") = [partition("a")+"ab",  partition("aa") + "b"]
//依次求s长度为1的字串、2的字串......n的字串的partition
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var n = s.length;
    var isPalindrome = new Array(n);
    for (var i = 0; i<n; i++) isPalindrome[i] = new Array(n);
    var results = [[[]]]; //results[i]: 长度为i的拆分结果
    for (var right=0; right<n; right++) {
        var currentRow = [];
        for (var left=0; left<=right; left++) {
            if (s[left]==s[right] && (right-left<=2 || isPalindrome[left+1][right-1])) {
                isPalindrome[left][right] = true;
                var sub = s.substr(left, right-left+1);
                results[left].forEach(function(prev) {
                    currentRow.push(prev.concat([sub]));
                });
            }
        }
        results.push(currentRow);
    }
    return results[n];
};

var partition2 = function(s) {
    var results = [];
    recurse(s, 0, [], results);
    return results;
};

var recurse = function(s, start, currentPartition, results) {
    if (start== s.length) {
        results.push(hardCopy(currentPartition));
    }
    for (var i=start; i< s.length; i++) {
        if (isPalindrome(s, start, i)) {
            currentPartition.push(s.substr(start, i-start+1));
            recurse(s, i+1, currentPartition, results);
            currentPartition.pop();
        }
    }
};

var isPalindrome = function(s, start, end) {
    while (start<end && s[start]==s[end]) {
        start++;
        end--;
    }
    return start>=end;
};

var hardCopy = function(a) {
    var b = [];
    for (var i=0; i< a.length; i++) b.push(a[i]);
    return b;
};

console.log(partition("acbbca"));
//console.log(partition("aabb"));