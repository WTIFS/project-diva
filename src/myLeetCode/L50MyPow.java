package myLeetCode;

import myLib.myPrinter;

/**
 * Created by WTIFS-Mac on 4/4/17.
 */
public class L50MyPow {

    //x^n = x^2 * x^(n/2)
    //n%2==0：x^2 * x^(n/2)
    //n%2!=0:     x^2 * x(n/2) * x

    public static double myPow(double x, int n) {
        long absN = n;
        if (absN<0) absN = -absN;
        double result = 1;
        while (absN>0) {
            if ((absN & 1) == 1) result *= x;
            x *= x;
            absN /= 2;
        }
        if (n<0) result = 1/result;
        return result;
    }

    public static void main(String[] args) {
        myPrinter.pl(myPow(2, -2147483648));
        myPrinter.pl(myPow(0.00001, 2147483647));
        myPrinter.pl(myPow(2,0));
        myPrinter.pl(myPow(2,1));
        myPrinter.pl(myPow(2,2));
        myPrinter.pl(myPow(2,10));
        myPrinter.pl(myPow(2,20));
        myPrinter.pl(myPow(2, 31));
        myPrinter.pl(myPow(2, -1));
        myPrinter.pl(myPow(2, -3));
        myPrinter.pl(myPow(34.00515, -3));
    }

}
