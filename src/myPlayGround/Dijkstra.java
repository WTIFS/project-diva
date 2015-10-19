package myPlayGround;

import java.util.Stack;

/**
 * Created by thinkpad on 2015/10/19.
 * Ref��http://www.cnblogs.com/dolphin0520/archive/2011/08/26/2155202.html
 * 1)�㷨˼�룺��G=(V,E)��һ����Ȩ����ͼ����ͼ�ж��㼯��V�ֳ����飬��һ��Ϊ��������·���Ķ��㼯�ϣ���S��ʾ����ʼʱS��ֻ��һ��Դ�㣬�Ժ�ÿ���һ�����·�� , �ͽ����뵽����S�У�ֱ��ȫ�����㶼���뵽S�У��㷨�ͽ����ˣ��ڶ���Ϊ����δȷ�����·���Ķ��㼯�ϣ���U��ʾ���������·�����ȵĵ����������ΰѵڶ���Ķ������S�С��ڼ���Ĺ����У��ܱ��ִ�Դ��v��S�и���������·�����Ȳ����ڴ�Դ��v��U���κζ�������·�����ȡ����⣬ÿ�������Ӧһ�����룬S�еĶ���ľ�����Ǵ�v���˶�������·�����ȣ�U�еĶ���ľ��룬�Ǵ�v���˶���ֻ����S�еĶ���Ϊ�м䶥��ĵ�ǰ���·�����ȡ�

 2)�㷨���裺

 a.��ʼʱ��Sֻ����Դ�㣬��S��{v}��v�ľ���Ϊ0��U������v����������㣬��:U={���ඥ��}����v��U�ж���u�бߣ���<u,v>������Ȩֵ����u����v�ĳ����ڽӵ㣬��<u,v>ȨֵΪ�ޡ�

 b.��U��ѡȡһ������v��С�Ķ���k����k������S�У���ѡ���ľ������v��k�����·�����ȣ���

 c.��kΪ�¿��ǵ��м�㣬�޸�U�и�����ľ��룻����Դ��v������u�ľ��루��������k����ԭ�����루����������k���̣����޸Ķ���u�ľ���ֵ���޸ĺ�ľ���ֵ�Ķ���k�ľ�����ϱ��ϵ�Ȩ��

 d.�ظ�����b��cֱ�����ж��㶼������S�С�
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

    static int[] dist;// dist[i]��ʾ��start��i�����С����
    static int[] path;//path[i]����i����һ��������

    void DijkstraPath(myGraph g, int start){
        boolean[] visited = new boolean[g.n];

        dist = new int[g.n];
        path = new int[g.n];

        //��ʼ��dist[i]�������ĵ��dist��Ϊֱ������
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

            //��U��ѡȡ��������ĵ�
            for (int j=0; j<g.n; j++){
                if (!visited[j] && dist[j]<min) {
                    min = dist[j];
                    intervalPoint = j;
                }
            }

            //�������intervalPointΪ·�ɵ㣬����U�е�ľ���
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
