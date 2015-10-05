package myLeetCode;

//Your Trie object will be instantiated and called as such:
//Trie trie = new Trie();
//trie.insert("somestring");
//trie.search("key");

class TrieNode {
    // Initialize your data structure here.
    
    public char c;
    public int count;
    public TrieNode[] sons = new TrieNode[26];
    
    public TrieNode() {
        count = 0;
    }
    
    public TrieNode(char character){
        c = character;
        count = 0;
    }
}

public class L208ImplementTrie {
    private TrieNode root;

    public L208ImplementTrie() {
        root = new TrieNode();
    }

    // Inserts a word into the trie.
    public void insert(String word) {
    	TrieNode r = root;
    	int index;
    	char c;
    	for (int i=0; i<word.length(); i++){
    		c = word.charAt(i);
    		index = c - 'a';
    		if (r.sons[index]==null) r.sons[index] = new TrieNode(c);
    		r = r.sons[index];
    	}
    	r.count++;
    }
    
    public void insert(TrieNode r, String word){
    	if (word.equals("")) {
    		r.count ++;
    		return;
    	}
        char c = word.charAt(0);
        int index = c-'a';
        if (r.sons[index]==null) r.sons[index] = new TrieNode(c);
        insert(r.sons[index], word.substring(1));
    }

    // Returns if the word is in the trie.
    public boolean search(String word) {
    	TrieNode r = root;
    	int index;
    	char c;
    	for (int i=0; i<word.length(); i++){
    		c = word.charAt(i);
    		index = c - 'a';
    		if (r.sons[index]==null) return false;
    		r = r.sons[index];
    	}
    	return (r.count>0);
    }
    
    public boolean search(TrieNode node, String word){
        if (word.equals("")){
        	if (node.count==1) return true;
        	else return false;
        }
        char c = word.charAt(0);
        int index = c-'a';
        if (node.sons[index]!=null) return search(node.sons[index], word.substring(1));
        else return false;
    }

    // Returns if there is any word in the trie
    // that starts with the given prefix.
    public boolean startsWith(String prefix) {
    	char c;
    	int index;
    	TrieNode r = root;
    	while (prefix.length()>0 && r!=null){
    		c = prefix.charAt(0);
    		index = c - 'a';
    		r = r.sons[index];
    		prefix = prefix.substring(1);
    	}
    	if (prefix.equals("") && r!=null) return true;
    	else return false;
    }
}
