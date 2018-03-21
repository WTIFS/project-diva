package myLib;

public class Trie {
    public int count;
    public Trie[] alphbet;

    public Trie() {
        alphbet = new Trie[26];
        count = 1;
    }

    public void add(String s) {
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if (alphbet[c-'a']==null) alphbet[c-'a'].count++;
            else alphbet[c-'a'] = new Trie();
        }
    }

    public boolean search(String s) {
        Trie root = this;
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if (root.alphbet[c-'a']==null) return false;
            else root = root.alphbet[c-'a']; //向下
        }
        return true;
    }
}
