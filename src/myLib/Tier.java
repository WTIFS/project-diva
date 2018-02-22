package myLib;

public class Tier {
    public int count;
    public Tier[] alphbet;

    public Tier() {
        alphbet = new Tier[26];
        count = 1;
    }

    public void add(String s) {
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if (alphbet[c-'a']==null) alphbet[c-'a'].count++;
            else alphbet[c-'a'] = new Tier();
        }
    }

    public boolean search(String s) {
        Tier root = this;
        for (int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if (root.alphbet[c-'a']==null) return false;
            else root = root.alphbet[c-'a']; //向下
        }
        return true;
    }
}
