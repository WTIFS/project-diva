package myPlayGround;

import java.util.Stack;

/**
 * Created by thinkpad on 2015/10/19.
 * Ref：http://www.cnblogs.com/dolphin0520/archive/2011/08/26/2155202.html
 * 1)算法思想：设G=(V,E)是一个带权有向图，把图中顶点集合V分成两组，第一组为已求出最短路径的顶点集合（用S表示，初始时S中只有一个源点，以后每求得一条最短路径 , 就将加入到集合S中，直到全部顶点都加入到S中，算法就结束了）第二组为其余未确定最短路径的顶点集合（用U表示），按最短路径长度的递增次序依次把第二组的顶点加入S中。在加入的过程中，总保持从源点v到S中各顶点的最短路径长度不大于从源点v到U中任何顶点的最短路径长度。此外，每个顶点对应一个距离，S中的顶点的距离就是从v到此顶点的最短路径长度，U中的顶点的距离，是从v到此顶点只包括S中的顶点为中间顶点的当前最短路径长度。

 2)算法步骤：

 a.初始时，S只包含源点，即S＝{v}，v的距离为0。U包含除v外的其他顶点，即:U={其余顶点}，若v与U中顶点u有边，则<u,v>正常有权值，若u不是v的出边邻接点，则<u,v>权值为∞。

 b.从U中选取一个距离v最小的顶点k，把k，加入S中（该选定的距离就是v到k的最短路径长度）。

 c.以k为新考虑的中间点，修改U中各顶点的距离；若从源点v到顶点u的距离（经过顶点k）比原来距离（不经过顶点k）短，则修改顶点u的距离值，修改后的距离值的顶点k的距离加上边上的权。

 d.重复步骤b和c直到所有顶点都包含在S中。
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

    static int[] dist;// dist[i]表示从start到i点的最小长度
    static int[] path;//path[i]储存i的上一个经过点

    void DijkstraPath(myGraph g, int start){
        boolean[] visited = new boolean[g.n];

        dist = new int[g.n];
        path = new int[g.n];

        //初始化dist[i]，相连的点的dist置为直连距离
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

            //从U中选取距离最近的点
            for (int j=0; j<g.n; j++){
                if (!visited[j] && dist[j]<min) {
                    min = dist[j];
                    intervalPoint = j;
                }
            }

            //以上面的intervalPoint为路由点，更新U中点的距离
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
