package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/26.

 Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

 Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

 Example 1:
 [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 Example 2:
 [[0,0,0,0,0,0,0,0]]
 Given the above grid, return 0.
 Note: The length of each dimension in the given grid does not exceed 50.

 */
public class L695MaxAreaOfIsland {
    public int maxAreaOfIsland(int[][] grid) {
        if (grid.length==0) return 0;
        int height = grid.length;
        int width = grid[0].length;
        int[][] visited = new int[height][width];
        int result = 0;
        for (int i=0; i<height; i++) {
            for (int j=0; j<width; j++) {
                result = Math.max(dfs(grid, visited, height, width, i, j), result);
            }
        }
        return result;
    }

    int dfs(int[][] grid, int[][] visited, int height, int width, int x, int y) {
        if (x<0 || y<0 || x>=height || y>=width || grid[x][y]==0 || visited[x][y]==1) return 0;
        visited[x][y] = 1;
        return 1 + dfs(grid, visited, height, width, x+1, y) +
        dfs(grid, visited, height, width, x-1, y) +
        dfs(grid, visited, height, width, x, y+1) +
        dfs(grid, visited, height, width, x, y-1);
    }

    public static void mian(String[] args) {

    }
}
