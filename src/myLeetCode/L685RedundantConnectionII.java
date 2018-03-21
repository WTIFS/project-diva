package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/6.

 In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

 The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

 The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.

 Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

 Example 1:
 Input: [[1,2], [1,3], [2,3]]
 Output: [2,3]
 Explanation: The given directed graph will be like this:
 1
 / \
 v   v
 2-->3
 Example 2:
 Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
 Output: [4,1]
 Explanation: The given directed graph will be like this:
 5 <- 1 -> 2
 ^    |
 |    v
 4 <- 3
 Note:
 The size of the input 2D-array will be between 3 and 1000.
 Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.


 */


public class L685RedundantConnectionII {

    static class Solution {
        public int[] findRedundantDirectedConnection(int[][] edges) {
            int[] parents = new int[1001];
            int[] candidateA = null;
            int[] candidateB = null;
            for (int[] edge: edges) {
                int s = edge[0];
                int e = edge[1];
                if (parents[e]==0) parents[e] = s;
                else { //s有多个父节点, 标记本次的edge[1]为0, 下轮并查集里跳过本次的edge, 即disable candidate B
                    candidateA = new int[]{parents[e], e};
                    candidateB = new int[]{s, e};
                    edge[1] = 0;
                }
            }

            // step 2, union find
            for (int i = 1; i <= edges.length; i++) parents[i] = i;
            for (int[] edge: edges) {
                if (edge[1]==0) continue;
                int s = edge[0];
                int e = edge[1]; //parents[e] == s;
                int parentOfS = find(parents, s);
                if (parentOfS == e) { //有环
                    if (candidateA == null) return edge;
                    else return candidateA;
                } else parents[e] = parentOfS;
            }
            return candidateB;
        }

        private int find(int[] parents, int num) {
            int root = num;
            int i = num;
            while (parents[root] != root) root = parents[root];

            while (parents[i] != i) {
                int tmp = parents[i];
                parents[i] = root;
                i = tmp;
            }

            return root;
        }
    }

    public static void main(String[] args) {
        int[][] edges = new int[][] {new int[]{1,2}, new int[]{1,3},  new int[]{2,3} };
        int[] edge = new Solution().findRedundantDirectedConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);

        edges = new int[][] {new int[]{1, 2}, new int[]{2, 3},  new int[]{3, 4}, new int[]{4, 1}, new int[]{1, 5}};
        edge = new Solution().findRedundantDirectedConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);

        edges = new int[][] {new int[]{1, 4}, new int[]{3, 4},  new int[]{1, 3}, new int[]{1, 2}, new int[]{4, 5}};
        edge = new Solution().findRedundantDirectedConnection(edges);
        System.out.println(edge[0]);
        System.out.println(edge[1]);
    }

}
