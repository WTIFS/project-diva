package myLeetCode;

import java.util.HashMap;

/**
 * Created by WTIFS-Mac on 2017/8/6.
 */
public class L13RomanToInteger {

    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();

        if (s.length()==0) return 0;

        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);

        int result = 0;
        char current, last;
        int len = s.length();
        last = s.charAt(len-1);
        for (int i=len-1; i>=0; i--){
            current = s.charAt(i);
            if (map.get(current) >= map.get(last)) result += map.get(current);
            else result -= map.get(current);
            last = current;
        }
        return result;
    }

}
