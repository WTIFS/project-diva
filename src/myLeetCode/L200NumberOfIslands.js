/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	if (grid.length===0) return 0;
	var count = 0;
    for (var i=0; i<grid.length; i++)
    	for (var j=0; j<grid[0].length; j++)
    		if (grid[i][j]==='1') {
    			//BFS(grid, i, j);
    			DFS(grid, i, j);
    			count++;
    		}
    //console.log(grid);
    return count;
};

function DFS(grid, i, j){
	grid[i][j] = '0';
	if (i>0 && grid[i-1][j]==='1') DFS(grid, i-1, j);
	if (i+1<grid.length && grid[i+1][j]==='1') DFS(grid, i+1, j);
	if (j>0 && grid[i][j-1]==='1') DFS(grid, i, j-1);
	if (j+1<grid[0].length && grid[i][j+1]==='1') DFS(grid, i, j+1);
}


//BFS will TLE
/*function BFS(grid, x, y){
	var queue = [];
	queue.unshift([x,y]);
	while (queue.length>0){
		var item = queue.pop();
		var i=item[0];
		var j=item[1];
		grid[i][j] = '0';
		if (i>0 && grid[i-1][j]==='1') queue.unshift([i-1,j]);
		if (i+1<grid.length && grid[i+1][j]==='1') queue.unshift([i+1, j]);
		if (j>0 && grid[i][j-1]==='1') queue.unshift([i,j-1]);
		if (j+1<grid[0].length && grid[i][j+1]==='1') queue.unshift([i,j+1]);
	}
};*/

var grid = ["11110".split(''),
			"11010".split(''),
			"11000".split(''),
			"00000".split('')];
console.log(numIslands(grid));
grid = ["11000".split(''),
"11000".split(''),
"00100".split(''),
"00011".split('')];
console.log(numIslands(grid));