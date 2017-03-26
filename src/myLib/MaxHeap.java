package myLib;

/**
 * Created by WTIFS-Mac on 31/1/17.
 */

//http://blog.csdn.net/genios/article/details/8157031

//最大堆
public class MaxHeap {
    int[] a;

    public MaxHeap() {
        a = new int[] {0};
    }

    public MaxHeap(int[] b) {
        a = new int[b.length + 1];
        a[0] = 0;
        System.arraycopy(b, 0, a, 1, b.length);
        init();
    }

    public int getTop() {
        if (a.length > 1) return a[1];
        else return 0;
    }

    public void deleteMax() {
        if (a.length <=1) return;
        int tmp = a[a.length - 1];
        int[] b = new int[a.length - 1];
        System.arraycopy(a, 0, b, 0, a.length - 1);
        a = b;
        int i = 1;
        int ci = 2;
        while (ci < a.length) {
            if (a[ci + 1] > a[ci]) ci++;
            if (tmp > a[ci]) {
                a[i] = a[ci];
                i = ci;
                ci *= 2;
            } else break;
        }
        a[i] = tmp;
    }

    public void deleteMaxSimple() {
        if (a.length <=1) return;
        a[1] = a[a.length - 1];
        int[] b = new int[a.length - 1];
        System.arraycopy(a, 0, b, 0, a.length - 1);
        a = b;
        init();
    }

    public void init() {
        for (int i=(a.length-1) / 2; i>=1; i--) {
            int rootVal = a[i];

            int childIndex = i * 2;
            while (childIndex < a.length) { //这里应该switch根和子树的值，但老switch太麻烦，所以暂存根的值并直接覆盖，最后再写回根的值
                if ((childIndex+1 < a.length) && (a[childIndex + 1] > a[childIndex])) childIndex ++; //左右子树比较大的那一颗
                if (a[childIndex] > rootVal) {
                    a[childIndex / 2] = a[childIndex];
                    childIndex *= 2;
                } else break;
            }
            a[childIndex / 2] = rootVal;
        }
    }


    public void insert(int x) {
        int[] b = new int[a.length + 1];
        System.arraycopy(a, 0, b, 0, a.length);
        a = b;
        int i = a.length-1;
        while(i>1 && x>a[i/2]) {
            a[i] = a[i/2];
            i /= 2;
        }
        a[i] = x;
    }

    public void insertSimple(int x) {
        int[] b = new int[a.length + 1];
        System.arraycopy(a, 0, b, 0, a.length);
        a = b;
        a[a.length - 1] = x;
        init();
    }

    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap(new int[] {1});
        maxHeap = new MaxHeap(new int[] {1, 2});
        maxHeap = new MaxHeap(new int[] {1, 2, 3});
        maxHeap.insertSimple(4);
        maxHeap.insertSimple(5);
        maxHeap.insertSimple(6);
        maxHeap.deleteMaxSimple();
        maxHeap.deleteMax();
        maxHeap.deleteMax();
    }
}
