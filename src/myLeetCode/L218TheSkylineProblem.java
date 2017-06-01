package myLeetCode;

import myLib.myPrinter;

import java.util.*;

/**
 * Created by Yuanfei on 2017/5/31.
 *
 A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

 Buildings Skyline Contour
 The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

 For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

 The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

 For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

 Notes:

 The number of buildings in any input list is guaranteed to be in the range [0, 10000].
 The input list is already sorted in ascending order by the left x position Li.
 The output list must be sorted by the x position.
 There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]

 explanation: https://briangordon.github.io/2014/08/the-skyline-problem.html

 *
 */
public class L218TheSkylineProblem {

    public  static List<int[]> getSkyline(int[][] buildings) {

        List<int[]> nodes = new ArrayList<>();
        List<int[]> results = new ArrayList<>();
        int prevHeight = 0;
        int highest;

        for (int[] building: buildings) {
            nodes.add(new int[]{building[0], -building[2]}); //(x, -h)  as the left bound
            nodes.add(new int[]{building[1], building[2]}); //(y, h) as the right bound
        }

        //从左到右
        Comparator<int[]> cmpSmall2Big = new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                if (o1[0]!=o2[0])return o1[0]-o2[0];
                else return o1[1]-o2[1]; //保证负数在前
            }
        };

        Comparator<Integer> cmpBig2Small = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2-o1;
            }
        };

        Collections.sort(nodes, cmpSmall2Big);

        PriorityQueue<Integer> queue = new PriorityQueue<>(nodes.size(), cmpBig2Small);
        queue.add(0);
        for (int[] node: nodes) {
            if (node[1]<0) queue.add(-node[1]);
            else queue.remove(node[1]);

            highest = queue.peek();
            if (prevHeight != highest) {
                results.add(new int[]{node[0], highest});
                prevHeight = highest;
            }
        }

        return results;

    }

    public static void main(String[] args) {
        int[][] buildings2 = new int[2][];
        buildings2[0] = new int[] {0,2,3};
        buildings2[1] = new int[] {2,5,3};
        List result = getSkyline(buildings2);
        myPrinter.pr(result);

        int[][] buildings = new int[5][];
        buildings[0] = new int[] {2, 9, 10};
        buildings[1] = new int[]{3, 7, 15};
        buildings[2] = new int[] {5, 12, 12};
        buildings[3] = new int[]{15, 20, 10};
        buildings[4] = new int[]{19, 24, 8};
        result = getSkyline(buildings);
        myPrinter.pr(result);
    }

}
