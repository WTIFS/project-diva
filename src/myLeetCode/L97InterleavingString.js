/**
 * Created by chenyuanfei on 16/9/27.
 */
/**
 Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

 For example,
 Given:
 s1 = "aabcc",
 s2 = "dbbca",

 When s3 = "aadbbcbcac", return true.
 When s3 = "aadbbbaccc", return false.

 Subscribe to see which companies asked this question*/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length!=s3.length) return false;
    s1 = "#" + s1;
    s2 = "#" + s2;
    s3 = "#" + s3;
    var a = [];
    for (var i=0; i<s1.length; i++) {
        a.push([]);
        for (var j=0; j<s2.length; j++) {
            if (i==0 && j==0) a[0][0] = true;
            else if (i==0) a[0][j] = a[0][j-1] && s2[j]==s3[j];
            else if (j==0) a[i][0] = a[i-1][0] && s1[i]==s3[i];
            else a[i][j] = (a[i-1][j] && s1[i]==s3[i+j]) || (a[i][j-1] && s2[j]==s3[i+j]);
        }
    }
    return a[s1.length-1][s2.length-1];
    //console.log(a);
};

isInterleave('abc', 'def', 'abcdef');