package myLeetCode;

/*

There is a room with n lights which are turned on initially and 4 buttons on the wall. After performing exactly m unknown operations towards buttons, you need to return how many different kinds of status of the n lights could be.

Suppose n lights are labeled as number [1, 2, 3 ..., n], function of these 4 buttons are given below:

Flip all the lights.
Flip lights with even numbers.
Flip lights with odd numbers.
Flip lights with (3k + 1) numbers, k = 0, 1, 2, ...
Example 1:
Input: n = 1, m = 1.
Output: 2
Explanation: Status can be: [on], [off]
Example 2:
Input: n = 2, m = 1.
Output: 3
Explanation: Status can be: [on, off], [off, on], [off, off]
Example 3:
Input: n = 3, m = 1.
Output: 4
Explanation: Status can be: [off, on, off], [on, off, on], [off, off, off], [off, on, on].
Note: n and m both fit in range [0, 1000].
 */

/*
We only need to consider special cases which n<=2 and m < 3. When n >2 and m >=3, the result is 8.
The four buttons:

Flip all the lights.
Flip lights with even numbers.
Flip lights with odd numbers.
Flip lights with (3k + 1) numbers, k = 0, 1, 2, …
If we use button 1 and 2, it equals to use button 3.
Similarly…

1 + 2 --> 3, 1 + 3 --> 2, 2 + 3 --> 1
So, there are only 8 cases.

1+1: AllOn
1 / 2+3: AllOff
2 / 1+3: EvenOff
3 / 1+2: OddOff
4: 3k+1 Off
1+4: 3k+1 On
2+4: Even & 3k+1 Off
3+4 :Odd & 3k+1 Off
 */

public class L672BulbSwitcherII {
    public int flipLights(int n, int m) {
        if (m==0 || n==0) return 1;
        if (n==1) return 2; //on, off
        if (n==2) { //3k+1 = 1 = Odd
            if (m==1) return 3; //AllOff, EvenOff, OddOff
            if (m>=2) return 4; //AllOn, AllOff, EvenOff, OddOff
        }

        // n>=3
        if (m==1) return 4; //AllOff, EvenOff, OddOff, 3k+1Off
        if (m==2) return 7; //AllOn, AllOff, EvenOff, OddOff, 3k+1On, Even&3k+1Off, Odd & 3k+1Off
        return 8;
    }
}
