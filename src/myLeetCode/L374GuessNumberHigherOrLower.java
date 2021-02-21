package myLeetCode;

/**
 * Created by WTIFS on 16/7/15.
 */
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */


public class L374GuessNumberHigherOrLower {

    int num;

    public L374GuessNumberHigherOrLower(int n) {
        num = n;
    }

    int guess(int n) {
        if (num<n) return -1;
        if (num>n) return 1;
        else return 0;
    }

    public int guessNumber(int n) {
        int start = 1;
        int end = n;
        int mid = start + (end-start)/2;
        int guessResult = guess(mid);
        while (guessResult!=0) {
            if (guessResult==-1) end = mid - 1;
            else start = mid + 1;
            mid = start + (end-start)/2;
            guessResult = guess(mid);
        }
        return mid;
    }


    public static void main(String[] args){
        /*for (int i=1; i<10; i++) {
            L374GuessNumberHigherOrLower test = new L374GuessNumberHigherOrLower(i);
            System.out.println(test.guessNumber(i * 2));
        }*/

        L374GuessNumberHigherOrLower test = new L374GuessNumberHigherOrLower(6);
        System.out.println(test.guessNumber(10));

    }
}