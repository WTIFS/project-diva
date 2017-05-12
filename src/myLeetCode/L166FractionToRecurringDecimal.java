package myLeetCode;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Yuanfei on 2017/5/12.
 */
public class L166FractionToRecurringDecimal {
    
    public static String fractionToDecimal(int numerator, int denominator) {
        if (numerator==0) return "0";

        String sign = ((numerator>=0) ^ (denominator>=0)) ? "-": "";
    
        long num= Math.abs((long)numerator);
        long den = Math.abs((long)denominator);
    
        StringBuilder res = new StringBuilder(sign + (num / den));
    
        num %= den;
        
        if (num>0) { //有小数部分
            Map<Long, Integer> map = new HashMap<>();
            res.append('.');
            map.put(num, res.length());
        
            while (num>0) {
                num *= 10;
                res.append(num / den);
                num %= den;
            
                if (map.containsKey(num)) {
                    res.insert(map.get(num), "(");
                    res.append(")");
                    return res.toString();
                } else {
                    map.put(num, res.length());
                }
            }
            return res.toString();
        } else return res.toString();
    }

    public static void main (String[] args) {
        System.out.println(fractionToDecimal(-1, -214748364));
        System.out.println(fractionToDecimal(1, 214748364));
        System.out.println(fractionToDecimal(7, -12));
        System.out.println(fractionToDecimal(-1, 3));
        System.out.println(fractionToDecimal(-50, 8));
        System.out.println(fractionToDecimal(-1, -3));
        System.out.println(fractionToDecimal(1, 6));
        System.out.println(fractionToDecimal(1, 99));
        System.out.println(fractionToDecimal(1000, 99));
        System.out.println(fractionToDecimal(1, 2));
        System.out.println(fractionToDecimal(2, 1));
        System.out.println(fractionToDecimal(2, 3));
        System.out.println(fractionToDecimal(10, 3));
        System.out.println(fractionToDecimal(10, 6));
        System.out.println(fractionToDecimal(10, 11));
        System.out.println(fractionToDecimal(10, 12));
    }
}
