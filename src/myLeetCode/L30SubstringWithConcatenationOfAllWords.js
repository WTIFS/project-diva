/**
 * Created by WTIFS-Mac on 2017/10/8.
 */
/**
 * You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

 For example, given:
 s: "barfoothefoobarman"
 words: ["foo", "bar"]
 注意words的特性,长度一样

 You should return the indices: [0,9].
 (order does not matter).


 **/


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var result = [];
    if (!words.length) return result;
    var wordLength = words[0].length;
    var wordMap = {};

    words.forEach(function(word) {
        if (!wordMap[word]) wordMap[word] = 1;
        else wordMap[word]++;
    });

    for (var start=0; start<wordLength; start++) {
        var left = start;
        var usedWordMap = {};
        var usedWordStack = [];

        for (var right=start; right<=s.length-wordLength; right+=wordLength) {
            var subStr = s.substr(right, wordLength);

            if (wordMap[subStr]) {
                if (usedWordMap[subStr]) usedWordMap[subStr]++;
                else usedWordMap[subStr] = 1;

                usedWordStack.push(subStr);

                if (usedWordMap[subStr]>wordMap[subStr]) {
                    while (usedWordMap[subStr] > wordMap[subStr]) {
                        usedWordMap[usedWordStack[0]]--;
                        usedWordStack.shift();
                        left += wordLength;
                    }
                }

                if (usedWordStack.length == words.length) {
                    result.push(left);
                    usedWordMap[usedWordStack[0]]--;
                    usedWordStack.shift();
                    left += wordLength;
                }


            } else {
                usedWordMap = {};
                usedWordStack = [];
                left = right + wordLength;
            }
        }
    }

    return result;
};


var s = "barfoothefoobarman";
var words = ["foo", "bar"];
console.log(findSubstring(s, words));


s = "barfoofoobarthefoobarman";
words = ["bar","foo","the"];
console.log(findSubstring(s, words));
