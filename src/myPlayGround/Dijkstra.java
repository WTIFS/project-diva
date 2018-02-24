package myPlayGround;

import java.util.Stack;

/**
 * Created by thinkpad on 2015/10/19.
 * Ref http://www.cnblogs.com/dolphin0520/archive/2011/08/26/2155202.html
 *   单源最短路径问题，即在图中求出给定顶点到其它任一顶点的最短路径。在弄清楚如何求算单源最短路径问题之前，必须弄清楚最短路径的最优子结构性质。

 一.最短路径的最优子结构性质

 该性质描述为：如果P(i,j)={Vi....Vk..Vs...Vj}是从顶点i到j的最短路径，k和s是这条路径上的一个中间顶点，那么P(k,s)必定是从k到s的最短路径。下面证明该性质的正确性。

 假设P(i,j)={Vi....Vk..Vs...Vj}是从顶点i到j的最短路径，则有P(i,j)=P(i,k)+P(k,s)+P(s,j)。而P(k,s)不是从k到s的最短距离，那么必定存在另一条从k到s的最短路径P'(k,s)，那么P'(i,j)=P(i,k)+P'(k,s)+P(s,j)<P(i,j)。则与P(i,j)是从i到j的最短路径相矛盾。因此该性质得证。

 二.Dijkstra算法

 由上述性质可知，如果存在一条从i到j的最短路径(Vi.....Vk,Vj)，Vk是Vj前面的一顶点。那么(Vi...Vk)也必定是从i到k的最短路径。为了求出最短路径，Dijkstra就提出了以最短路径长度递增，逐次生成最短路径的算法。譬如对于源顶点V0，首先选择其直接相邻的顶点中长度最短的顶点Vi，那么当前已知可得从V0到达Vj顶点的最短距离dist[j]=min{dist[j],dist[i]+matrix[i][j]}。根据这种思路，

 假设存在G=<V,E>，源顶点为V0，U={V0},dist[i]记录V0到i的最短距离，path[i]记录从V0到i路径上的i前面的一个顶点。

 1.从V-U中选择使dist[i]值最小的顶点i，将i加入到U中；

 2.更新与i直接相邻顶点的dist值。(dist[j]=min{dist[j],dist[i]+matrix[i][j]})

 3.直到U=V，停止。
 */

public class Dijkstra {
    class myGraph{
        int[][] matrix;
        int n; //number of nodes
        int e; //number of edges

        myGraph(int n1, int e1){
            n = n1;
            e = e1;
            matrix = new int[n][n];
            /* (int i=0; i<n; i++)
                for (int j=0; j<n; j++)
                    matrix[i][j] = Integer.MAX_VALUE;
            */
        }

        void set(int start, int target, int val){
            matrix[start][target] = val;
        }
    }

    static int[] dist;// dist[i]
    static int[] path;//path[i]

    void DijkstraPath(myGraph g, int start){
        boolean[] visited = new boolean[g.n];

        dist = new int[g.n];
        path = new int[g.n];

        for (int i=0; i<g.n; i++){
            if (g.matrix[start][i]>0 && i!=start){
                dist[i] = g.matrix[start][i];
                path[i] = start;
            }
            else {
                dist[i] = Integer.MAX_VALUE;
                path[i] = -1;
            }
            visited[i] = false;

        }

        path[start] = start;
        dist[start] = 0;

        for (int i=0; i<g.n; i++){
            int min = Integer.MAX_VALUE;
            int intervalPoint = start;

            for (int j=0; j<g.n; j++){
                if (!visited[j] && dist[j]<min) {
                    min = dist[j];
                    intervalPoint = j;
                }
            }

            visited[intervalPoint] = true;
            for (int k=0; k<g.n; k++){
                int tmp = g.matrix[intervalPoint][k];
                if (!visited[k] && tmp>0 && tmp<Integer.MAX_VALUE && min+tmp<dist[k]){
                    dist[k] = tmp + min;
                    path[k] = intervalPoint;
                }
            }
        }
    }

    void showPath(int[] path, int start, int target){
        Stack<Integer> stack = new Stack<Integer>();
        while (start!=target){
            stack.add(target);
            target = path[target];
            if (target==-1){
                System.out.println("No Path");
                return;
            }
        }
        while (!stack.isEmpty()){
            System.out.print(start + "->");
            start = stack.pop();
        }
        System.out.print(start+": ");
    }

    public void main(myGraph g, int start){

        start = 0;
        int[] dist = new int[g.n];
        int[] path = new int[g.n];
        DijkstraPath(g,start);
        for (int i=0; i < g.n; i++) {
            if (i!=start){
                showPath(path, start, i);
                System.out.println(dist[i]);
            }
        }
    }
}
