#include <iostream>
#include <vector>
using std::cout;
using std::vector;

void DFS(vector<vector<char> >& grid, int x, int y){
	if (grid[x][y]=='0') return;
	grid[x][y] = '0';
	if (x>0) DFS(grid, x-1, y);
	if (x+1<grid.size()) DFS(grid, x+1, y);
	if (y>0) DFS(grid, x, y-1);
	if (y+1<grid[0].size()) DFS(grid, x, y+1);
}

int numIsLands(vector<vector<char> >& grid){
	int count = 0;
	for (int i=0; i<grid.size(); i++)
		for (int j=0; j<grid[0].size(); j++)
			if (grid[i][j]=='1'){
				count++;
				DFS(grid, i, j);
			}
	return count;
}



int main()
{
	vector<vector<char> > grid ("11");
	cout << numIsLands(grid);
	return 0;
}
