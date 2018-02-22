package myLeetCode;

/*
Implement a magic directory with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
Note:
You may assume that all the inputs are consist of lowercase letters a-z.
For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.
 */

class MagicDictionary {

    private MagicDictionary[] alphbet;
    private boolean isWord;

    /**
     * Initialize your data structure here.
     */
    public MagicDictionary() {
        alphbet = new MagicDictionary[26];
        isWord = false;
    }

    /**
     * Build a dictionary through a list of words
     */
    public void buildDict(String[] dict) {
        for (String str : dict) {
            MagicDictionary root = this;
            for (int i = 0; i < str.length(); i++) {
                char c = str.charAt(i);
                if (root.alphbet[c - 'a'] == null) root.alphbet[c - 'a'] = new MagicDictionary();
                root = root.alphbet[c - 'a'];
            }
            root.isWord = true;
        }
    }

    /**
     * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
     */
    public boolean search(String word) {
        return search(this, word, 0, 0);
    }

    //O(26 * k^2) (k=word.length())
    public boolean search(MagicDictionary root, String word, int idx, int mismatch) {
        if (root == null) return false;
        if (idx == word.length()) return (mismatch>0 && root.isWord);
        char c = word.charAt(idx);
        if (mismatch>0) {
            return (root.alphbet[c - 'a'] != null) && search(root.alphbet[c-'a'], word, idx+1, mismatch);
        } else {
            boolean result = false;
            for (int i=0; i<26; i++) {
                mismatch = (c-'a'==i) ? 0: 1;
                result |= search(root.alphbet[i], word, idx+1, mismatch);
            }
            return result;
        }
    }

}


/**
 * Your MagicDictionary object will be instantiated and called as such:
 * MagicDictionary obj = new MagicDictionary();
 * obj.buildDict(dict);
 * boolean param_2 = obj.search(word);
 */

public class L676ImplementMagicDictionary {
    public static void main(String[] args) {
        MagicDictionary obj = new MagicDictionary();
        String[] dict = new String[]{"dog", "cat", "pig", "monkey", "monk"};
        obj.buildDict(dict);
        System.out.println(obj.search("cat"));
        System.out.println(obj.search("ca"));
        System.out.println(obj.search("dog"));
        System.out.println(obj.search("deg"));
        System.out.println(obj.search("monkey"));
        System.out.println(obj.search("monkfy"));

        obj.buildDict(new String[]{"hello", "leetcode"});
        System.out.println(obj.search("hello")); //False
        System.out.println(obj.search("hhllo")); //True
        System.out.println(obj.search("hell")); //False
        System.out.println(obj.search("leetcoded")); //False
    }
}



