package main

import (
	"fmt"
	"math"
)

/***

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words such that:

The first word in the sequence is beginWord.
The last word in the sequence is endWord.
Only one letter is different between each adjacent pair of words in the sequence.
Every word in the sequence is in wordList.
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists.



Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]

Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the strings in wordList are unique.
*/

func main() {
	//res := findLadders("hit", "cog", []string{"hot", "dot", "dog", "lot", "log", "cog"})
	//fmt.Printf("%v\n", res)

	res := findLadders("red", "tax", []string{"ted", "tex", "red", "tax", "tad", "den", "rex", "pee"})
	fmt.Printf("%v\n", res)

}

func findLadders(beginWord string, endWord string, wordList []string) [][]string {
	res := make([][]string, 0)
	toVisit := []string{beginWord}
	steps := []int{0}
	minStep := math.MaxInt32
	wordMap := StringList2BoolMap(wordList)
	paths := [][]string{{beginWord}}
	if !wordMap[endWord] {
		return res
	}

	for visitIndex := 0; visitIndex < len(toVisit); visitIndex++ {
		if steps[visitIndex] > minStep {
			return res
		}
		visitWord := toVisit[visitIndex]
		visitRune := []rune(visitWord)
		for i := range visitRune {
			c := visitRune[i]
			for j := byte(0); j < 26; j++ {
				visitRune[i] = rune('a' + j)
				if string(visitRune) == endWord {
					minStep = steps[visitIndex]
					p := make([]string, len(paths[visitIndex]))
					copy(p, paths[visitIndex])
					p = append(p, endWord)
					paths = append(paths, p)
					res = append(res, p)
				} else if wordMap[string(visitRune)] {
					toVisit = append(toVisit, string(visitRune))
					steps = append(steps, steps[visitIndex]+1)
					p := make([]string, len(paths[visitIndex]))
					copy(p, paths[visitIndex])
					paths = append(paths, append(p, string(visitRune)))
				}
			}
			visitRune[i] = c
		}
	}

	return res
}

func StringList2BoolMap(list []string) map[string]bool {
	var m = make(map[string]bool)
	for _, value := range list {
		m[value] = true
	}
	return m
}
