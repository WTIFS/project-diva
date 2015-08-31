/**
 * 
 */

var isValidSudoku = function(board) {
	var row, col, block;
	var c, num, blockIndex;
	row = new Array(9);
	col = new Array(9);
	block = new Array(9);
	
	for (var i=0; i<9; i++){
		row[i] = new Array(9);
		col[i] = new Array(9);
		block[i] = new Array(9);
	}
	/*for (var i=0; i<9; i++){
		row[i] = [0,0,0,0,0,0,0,0,0];
		col[i] = [0,0,0,0,0,0,0,0,0];
		block[i] = [0,0,0,0,0,0,0,0,0];
	}*/
	
    for (var i=0; i<9; i++)
    	for (var j=0; j<9; j++){
    		c = board[i][j];
    		if (c!=='.'){
    			num = c -'1';
    			blockIndex = parseInt(i/3)*3 + parseInt(j/3);
    			//console.log("i:" + i + "  j:" + j);
    			//console.log("c:" + c + "  num:" + num);
    			//console.log(blockIndex);
    			//console.log(row[i], col[j], block[blockIndex]);
    			if (row[i][num]!=null || col[j][num]!=null || block[blockIndex][num]!=null) return false;
    			row[i][num] = true;
    			col[j][num] = true;
    			block[blockIndex][num] = true;
    		}
    	}
    return true;
};

var s = [
		"..4...63.".split(''),
		".........".split(''),
		"5......9.".split(''),
		"...56....".split(''),
		"4.3.....1".split(''),
		"...7.....".split(''),
		"...4.....".split(''),
		".........".split(''),
		".........".split('')];
console.log(isValidSudoku(s));