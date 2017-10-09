package myLeetCode;

/**
 * Created by WTIFS-Mac on 2017/10/9.
 */
public class L329LongestIncreasingPathInAMatrix {

    public int longestIncreasingPath(int[][] matrix) {
        if (matrix.length==0) return 0;
        int m = matrix.length;
        int n = matrix[0].length;

        int[][] cache = new int[m][n]; //缓存由[x][y]出发的最长路径
        int result = 1;

        for (int x=0; x<m; x++) {
            for (int y=0; y<n; y++) {
                int len = dfs(matrix, x, y, m, n, cache);
                if (len>result) result = len;
            }
        }
        return result;
    }


    static final int[][] directions = {{0,1}, {0,-1}, {1,0}, {-1,0}};

    public int dfs(int[][] matrix, int x, int y, int m, int n, int[][] cache) {
        if (cache[x][y]!=0) return cache[x][y];
        else {
            int max = 1;
            for (int[] direction: directions) {
                int i = x + direction[0];
                int j = y + direction[1];
                if (i < m && j < n && i >= 0 && j >= 0 && matrix[i][j] > matrix[x][y]) {
                    int len = 1 + dfs(matrix, i, j, m, n, cache);
                    if (len > max) max = len;
                }
            }
            cache[x][y] = max;
            return max;
        }
    }
}
