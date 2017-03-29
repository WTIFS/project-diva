package myLeetCode;

import myLib.myPrinter;

/**
 * Created by Yuanfei on 2017/3/29.
 */

/*
 Divide two integers without using multiplication, division and mod operator.

 If it is overflow, return MAX_INT.
 */

public class L29DivideTwoIntegers {

    public static int divide(int dividend, int divisor) {
        final int MAX_INT = Integer.MAX_VALUE;
        final int MIN_INT = Integer.MIN_VALUE;
        if (divisor==0 || (dividend==MIN_INT && divisor==-1)) return MAX_INT;
        int sign = (dividend>0) ^ (divisor>0) ? -1: 1;

        long a = dividend; //需要转成long 否则会出现-2^31
        long b = divisor;

        if (a<0) a = -a;
        if (b<0) b = -b;

        int result = 0;
        while (a>=b) {
            long temp = b;
            int offset = 0;
            while (a >= (temp<<1)) {
                temp<<=1;
                offset++;
            }
            a -= temp;
            result += (1<<offset);
        }
        return sign>0 ? result: -result;
    }

    public static void main(String[] args) {
        long asdf = 1;
        System.out.println(asdf << 31);

//        myPrinter.pr(divide(2147483647, 1));
//        myPrinter.pr(divide(2147483647, 2));
//        myPrinter.pr(divide(-2147483648, -1));
        myPrinter.pr(divide(-2147483648, 1));
//        myPrinter.pr(divide(1, -1));
//        myPrinter.pr(divide(-1, 1));
    }

}
