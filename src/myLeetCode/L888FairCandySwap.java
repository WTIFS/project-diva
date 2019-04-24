package myLeetCode;


/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

1 <= A.length <= 10000
1 <= B.length <= 10000
1 <= A[i] <= 100000
1 <= B[i] <= 100000
It is guaranteed that Alice and Bob have different total amounts of candy.
It is guaranteed there exists an answer.

*/

import java.util.HashSet;
import java.util.Set;

public class L888FairCandySwap {
        public int[] fairCandySwap(int[] A, int[] B) {
            Set<Integer> set = new HashSet<>();
            int sumA = 0;
            int sumB = 0;
            int diff = 0;
            for (int i: B) {
                set.add(i);
                sumB += i;
            }
            for (int i: A) {
                sumA += i;
            }
            diff = (sumB - sumA)/2;
            for (int i: A) {
                if (set.contains(i + diff)) {
                    return new int[]{i, i + diff};
                }
            }
            return null;
        }

}
