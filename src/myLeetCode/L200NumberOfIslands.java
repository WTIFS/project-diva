package myLeetCode;

/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
11110
11010
11000
00000
Answer: 1

Example 2:
11000
11000
00100
00011
Answer: 3
*/

public class L200NumberOfIslands {
    public int numIslands(char[][] grid) {
    	if (grid.length==0) return 0;
    	int count = 0;
        for (int i=0; i<grid.length; i++)
        	for (int j=0; j<grid[0].length; j++){
        		if (grid[i][j]=='1'){
        			count++;
        			DFS(grid, i, j);
        		}
        	}
        return count;
    }
    
    public void DFS(char[][] grid, int x, int y){
    	if (grid[x][y]=='1'){
    		grid[x][y]='0';
    		if (x>0) DFS(grid, x-1, y);
    		if (x+1<grid.length) DFS(grid, x+1, y);
    		if (y>0) DFS(grid, x, y-1);
    		if (y+1<grid[0].length) DFS(grid, x, y+1);
    	}
    }
    
    public void main(char[][] grid){
    	System.out.println(numIslands(grid));
    }
}
