package myPlayGround;

/**
 * Created by thinkpad on 2015/10/13.
 */
public class Main {
    public static void main(String[] args){
        Dijkstra dijkstra = new Dijkstra();
        int n = 5;
        int e = 7;
        Dijkstra.myGraph g = dijkstra.new myGraph(n,e);
        g.set(0,1,100);
        g.set(0,2,30);
        g.set(2,1,60);
        g.set(2,3,60);
        g.set(3,1,10);
        g.set(4,3,50);
        g.set(0,4,10);

        dijkstra.main(g,0);
    }
}
