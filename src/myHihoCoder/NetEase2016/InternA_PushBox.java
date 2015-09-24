package myHihoCoder.NetEase2016;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Scanner;

/*
输入
第一行数据包含三个整数，N，M，S。其中，N(0 < N <= 100)代表格子的宽度，M(0 < M <= 100)代表格子的高度，S(0 < S <= 200)代表测试点的个数。

接下来的M行，每行都会有N个字符，描述当前的盘面。

接下来的S行，每行都代表一个测试点。每行都以一个整数T(0 < T <= 10000)开头，接下来是一个空格和T个字符。这T个字符仅由d，u，l，r这四个字母组成，分别代表了敲击向下，向上，向左，向右的方向键。

输出
对于每个测试点，输出最后箱子是否在目标点上。如果是，输出YES，如果不是，则输出NO。

样例输入
5 4 3
00000
13000
00200
00000
4 rurd
6 urdldr
6 rrrurd
样例输出
YES
YES
NO 
 */
public class InternA_PushBox {
	
	public int startX, startY, endX, endY, boxX, boxY;
	public int w, h, n;
	
	HashMap<Character, Integer> mapX = new HashMap<Character, Integer>();
	HashMap<Character, Integer> mapY = new HashMap<Character, Integer>();
	
	public Boolean pushBox(int[][] a, char[] options){
		int x1= startX, y1 = startY, bX = boxX, bY = boxY;
		int x2, y2;
		for (int i=0; i<options.length; i++){
			x2 = x1 + mapX.get(options[i]);
			y2 = y1 + mapY.get(options[i]);
		}
		
		
		
		return true;
	}
	
	public void main(String[] args){
		File input_file = new File("input/NetEase2016InternA.in");
		
		String s;
		Scanner scanner;
		
		mapX.put('u', 0);
		mapX.put('d', 0);
		mapX.put('l', -1);
		mapX.put('r', 1);
		mapY.put('u', -1);
		mapY.put('d', 1);	
		mapY.put('l', 0);
		mapY.put('r', 0);
		try {
			scanner = new Scanner(input_file);
			w = Integer.parseInt(scanner.next());
			h = Integer.parseInt(scanner.next());
			n = Integer.parseInt(scanner.next());
			int[][] a = new int[h][w];
			for (int i = 0; i<h; i++){
				s = scanner.next();
				for (int j=0; j<w; j++)
				{
					a[i][j] = s.charAt(j) - '0';
					if (a[i][j]==1){
						startX = i;
						startY = j;
					}
					else if (a[i][j]==2){
						endX = i;
						endY = j;
					}
					else if (a[i][j]==3){
						boxX = i;
						boxY = j;
					}
				}
				
			}
			for (int i = 0; i<n; i++){
				scanner.next();
				s = scanner.next();
				System.out.println(pushBox(a, s.toCharArray()));
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
