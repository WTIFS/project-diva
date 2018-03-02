package myLeetCode;

/*
Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

Example 1:
Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5

 */
class MapSum {

    private MapSum[] alphbets;
    private boolean isWord;
    int val;

    /**
     * Initialize your data structure here.
     */
    MapSum() {
        alphbets = new MapSum[26];
        val = 0;
    }

    private MapSum(int v) {
        alphbets = new MapSum[26];
        val = v;
    }

    //插入
    //O(len key)
    public void insert(String key, int val) {
        MapSum root = this;
        val -= root.getVal(key); //如果之前已经有值, 算出差值, 对tier路径上所有的节点做差值处理
        for (int i=0; i<key.length(); i++) {
            char c = key.charAt(i);
            if (root.alphbets[c-'a'] != null) {
                root.alphbets[c-'a'].val += val;
            } else {
                root.alphbets[c-'a'] = new MapSum(val);
            }
            root = root.alphbets[c-'a'];
        }
        root.isWord = true;
    }

    //查找s的val
    private int getVal(String s) {
        MapSum root = this;
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            MapSum child = root.alphbets[c-'a'];
            if (child != null) {
                root = child;
            } else {
                return 0;
            }
        }
        return root.isWord? root.val: 0;
    }

    //查找prefix开头的val
    public int sum(String prefix) {
        MapSum root = this;
        for (int i=0; i<prefix.length(); i++) {
            char c = prefix.charAt(i);
            MapSum child = root.alphbets[c-'a'];
            if (child != null) {
                root = child;
            } else {
                return 0;
            }
        }
        return root.val;
    }
}

public class L677MapSumPairs {
    public static  void main(String[] args) {
        MapSum m = new MapSum();
        m.insert("apple", 3);
        System.out.println(m.sum("ap"));
        m.insert("app", 2);
        System.out.println(m.sum("ap"));
        System.out.println(m.sum("appl"));
        System.out.println(m.sum("fappl"));
    }
}
