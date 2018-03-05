package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/5.

 In this problem, a tree is an undirected graph that is connected and has no cycles.

 The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

 The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.

 Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array. The answer edge [u, v] should be in the same format, with u < v.

 Example 1:
 Input: [[1,2], [1,3], [2,3]]
 Output: [2,3]
 Explanation: The given undirected graph will be like this:
 1
 / \
 2 - 3
 Example 2:
 Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
 Output: [1,4]
 Explanation: The given undirected graph will be like this:
 5 - 1 - 2
 |   |
 4 - 3
 Note:
 The size of the input 2D-array will be between 3 and 1000.
 Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

 */

class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int[] parents = new int[2001];
        for (int i=0; i<2001; i++) parents[i] = i;
        for (int[] edge: edges) {
            int s = edge[0];
            int e = edge[1];
            int rootOfS = find(parents, s);
            int rootOfE = find(parents, e);
            if (rootOfS == rootOfE) return edge;
            else parents[rootOfE] = rootOfS;
        }
        return new int[2];
    }

    //找根节点
    private int find(int[] parents, int num) {
        int root = num;
        while (parents[root] != root) root = parents[root];

        //路径压缩
        //把找根路径上的parent全部更新为root
        int i = num;
        while (parents[i] != root) {
            int tmp = parents[i];
            parents[i] = root;
            i = tmp;
        }
        return root;
    }
}

public class L684RedundantConnection {

    public static void main(String[] args) {
        int[][] edges = new int[][] {new int[]{1,2}, new int[]{1,3},  new int[]{2,3} };
        int[] edge = new Solution().findRedundantConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);

        edges = new int[][] {new int[]{1, 2}, new int[]{2, 3},  new int[]{3, 4}, new int[]{1, 4}, new int[]{1, 5}};
        edge = new Solution().findRedundantConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);

        edges = new int[][] {new int[]{1, 4}, new int[]{3, 4},  new int[]{1, 3}, new int[]{1, 2}, new int[]{4, 5}};
        edge = new Solution().findRedundantConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);


    }



}
