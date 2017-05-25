/**
 * Created by Yuanfei on 2017/5/24.
 *
 Given a 2D board and a list of words from the dictionary, find all words in the board.

 Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 For example,
 Given words = ["oath","pea","eat","rain"] and board =

 [
 ['o','a','a','n'],
 ['e','t','a','e'],
 ['i','h','k','r'],
 ['i','f','l','v']
 ]
 Return ["eat","oath"].

 */


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    var trieTree = buildTrie(words);
    var height = board.length;
    if (!height) return [];
    var width = board[0].length;
    var results = [];

    for (var row=0; row<height; row++) {
        for (var col = 0; col<width; col++) {
            recurse(board, height, width, row, col, trieTree[board[row][col]], results);
        }
    }

    return results;
};


var recurse = function(board, height, width, row, col, p, results) {
    if (!p || p.val!=board[row][col]) return;
    if (p.word) {
        results.push(p.word);
        p.word = null; //duplicates
    }
    var c = board[row][col];
    board[row][col] = '#';

    if (row+1<height) recurse(board, height, width, row+1, col, p[board[row+1][col]], results);
    if (row>0) recurse(board, height, width, row-1, col, p[board[row-1][col]], results);
    if (col+1<width) recurse(board, height, width, row, col+1, p[board[row][col+1]], results);
    if (col>0) recurse(board, height, width, row, col-1, p[board[row][col-1]], results);

    board[row][col] = c;
};


var buildTrie = function(words) {
    var root = {};
    words.forEach(function(word) {
        var p = root;
        var c;
        for (var i=0; i<word.length; i++) {
            c = word[i];
            if (!p[c]) p[c] = {val: c};
            p = p[c];
        }
        p.word = word;
    });
    return root;
};

//console.log(JSON.stringify(buildTrie(["oath","pea","eat", "rain", "peak", "rainy", "poi"]), null, 2));

var board =  [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
];

var words = ["o", 'oa', "oath","pea","eat", "rain", "peak", "rainy", "poi"];
console.log(findWords(board, words));

board = ["aa"];
words = ["a"];
console.log(findWords(board, words));

board = ["ab","aa"];
words = ["aba","baa","bab","aaab","aaa","aaaa","aaba"];
console.log(findWords(board, words));