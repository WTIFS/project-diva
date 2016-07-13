/**
 * Created by chenyuanfei on 16/7/13.
 */
/*Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

 You have the following 3 operations permitted on a word:

 a) Insert a character
 b) Delete a character
 c) Replace a character*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var len1 = word1.length;
    var len2 = word2.length;
    var g = [];
    for (var i=0; i<=len1; i++) g.push([]);
    for (var j=0; j<=len1; j++) g[j][0] = j;
    for (var k=0; k<=len2; k++) g[0][k] = k;
    for (var x=1; x<=len1; x++) {
        for (var y=1; y<=len2; y++) {
            if (word1[x-1]==word2[y-1]) g[x][y]=g[x-1][y-1];
            else {
                g[x][y] = min(g[x-1][y-1], g[x][y-1], g[x-1][y]) + 1;
            }
        }
    }
    return g[len1][len2];
};

function min(val1, val2, val3) {
    return Math.min(val1, Math.min(val2, val3));
}

console.log(minDistance("", "ab"));

/*
 Let's say we have 2 words "abcde" and "fghij", and we already know the min distance from "abcd" to "fgh".

 a b c d
 f g h
 Now we would like to go a step further and convert "abcde" to "fghi".

 a b c d e
 f g h i
 There're 3 ways to accomplish it:

 Replace "e" by "i".
 a b c d        a b c d e
 ->                           ->  dp[i-1][j-1] + 1 (for replacement)
 f g h          f g h i

 If we know the min distance from "abcd" to "fghi", then for "abcde", we just need to delete "e".
 a b c d        a b c d e(delete)
 ->                           ->  dp[i-1][j] + 1 (for deletion)
 f g h i        f g h i

 If we know the min distance from "abcde" to "fgh", then we need to add an "i" to "abcde"
 a b c d e      a b c d e (add an "i")
 ->                           ->  dp[i][j-1] + 1 (for insertion)
 f g h          f g h i

 */