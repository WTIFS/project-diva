package myCodeJam;

import java.util.LinkedList;
import java.util.Queue;

/*
 * 2 cups, with capacity of X L and Y L
 * each cup can be cleared or filled with water, or pour from one to the other
 * list all possible water volumes left
 */

public class G2015TelR1Q2 {
	
	private static int X;
	private static int Y;
	//private static int Z;
	
	private static boolean[][] p;
	
	class Status{
		int x;
		int y;
		
		public Status(){
			x = 0;
			y = 0;
		}
		
		public Status(int x1, int y1){
			x = x1;
			y = y1;
		}
	}
	
	public void listAll(){

		p = new boolean[X+1][Y+1];

		for (int i=0; i<X; i++)
			for (int j=0; j<Y; j++) p[i][j] = false;
		
		Queue<Status> queue = new LinkedList<Status>();
		queue.offer(new Status(0, 0));
		Status f;
		while (!queue.isEmpty()){
			f = queue.poll();
			
			//x->0
			if (f.x>=0 && !p[0][f.y]){
				System.out.println(String.format("%d, %d", 0, f.y));
				p[0][f.y] = true;
				queue.offer(new Status(0, f.y));
			}
			
			//y->0
			if (f.y>=0 && !p[f.x][0]){
				System.out.println(String.format("%d, %d", f.x, 0));
				p[f.x][0] = true;
				queue.offer(new Status(f.x, 0));
			}
			
			//x->full
			if (f.x<=X && !p[X][f.y]){
				System.out.println(String.format("%d, %d", X, f.y));
				p[X][f.y] = true;
				queue.offer(new Status(X, f.y));
			}
			
			//y->full
			if (f.y<=Y && !p[f.x][Y]){
				System.out.println(String.format("%d, %d", f.x, Y));
				p[f.x][Y] = true;
				queue.offer(new Status(f.x, Y));
			}
			
			//x->y
			if (f.y<Y && f.x>0){
				if (f.y + f.x < Y  && !p[0][f.x+f.y]){
					System.out.println(String.format("%d, %d", 0, f.x + f.y));
					p[0][f.x+f.y] = true;
					queue.offer(new Status(0, f.x+f.y));
				}
				else if (f.y + f.x > Y && !p[f.x + f.y - Y][Y]){
					Status f_new = new Status(f.x + f.y - Y, Y);
					System.out.println(String.format("%d, %d", f_new.x, f_new.y));
					p[f_new.x][Y] = true;
					queue.offer(f_new);
				}
			}
			
			//y->x
			if (f.x<X && f.y>0){
				if (f.x + f.y < X && !p[f.x+f.y][0]){
					System.out.println(String.format("%d, %d", f.x + f.y, 0));
					p[f.x+f.y][0] = true;
					queue.offer(new Status(f.x + f.y, 0));
				}
				else if (f.x + f.y > X && !p[X][f.x + f.y - X]){
					Status f_new = new Status(X, f.y + f.x - X);
					p[X][f_new.y] = true;
					queue.offer(f_new);
				}
			}
		}
		
	}

	public static void main(String[] args){
		X = 3;
		Y = 5;
		G2015TelR1Q2 test = new G2015TelR1Q2();
		test.listAll();
	}
}
