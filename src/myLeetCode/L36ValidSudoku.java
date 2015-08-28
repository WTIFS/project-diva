package myLeetCode;

public class L36ValidSudoku {
	
	public boolean isValidSudoku2(char[][] board){
		boolean[][] row, col, block;
		row = new boolean[9][9];
		col = new boolean[9][9];
		block = new boolean[9][9];
		int num;
		char c;
		for (int i=0; i<9; i++)
			for (int j=0; j<9; j++){
				c = board[i][j];
				if (c!='.'){
					num = c-'1';
					if (row[i][num] || col[j][num] || block[i/3*3+j/3][num]) return false;
					row[i][num] = true;
					col[j][num] = true;
					block[i/3*3+j/3][num] = true;
				}
			}
		return true;
	}
	
    public boolean isValidSudoku(char[][] board) {
        //if (board==null) return false;
        //int len = board[0].length;
        int len = 9;
    	
        for (int i=0; i<len; i++){
        	int[] set = new int[len];
        	char[] row = board[i];
        	for (char c:row){
        		if (c!='.'){
        			int num = c-'1';
        			if (set[num]==0) set[num] = 1;
        			else return false;
        		}
        	}
        }
        
        for (int i=0; i<len; i++){
        	int[] set = new int[len];
        	for (int j=0; j<len; j++){
        		char c = board[j][i];
        		if (c!='.'){
        			int num = c-'1';
        			if (set[num]==0) set[num] = 1;
        			else return false;
        		}
        	}
        }
        
        for (int i=0; i<len; i+=3)
        	for (int j=0; j<len; j+=3)
        	{
        		int[] set = new int[len];
        		for (int i0=0; i0<3; i0++)
        			for (int j0=0; j0<3; j0++){
        				char c = board[i+i0][j+j0];
                		if (c!='.'){
                			int num = c-'1';
                			if (set[num]==0) set[num] = 1;
                			else return false;
        	        	}
        			}
        	}
        
        return true;
    }
    public void main(char[][] board){
    	System.out.println(isValidSudoku(board));
    	System.out.println(isValidSudoku2(board));
    }
}
