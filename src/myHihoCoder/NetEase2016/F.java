package myHihoCoder.NetEase2016;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;


/*
 15 chars
 */

public class F {
	

	
	static int[][] count0 = new int[4][16];
	static int[][] count1 = new int[4][16];
	static final int[] binary = new int[]{0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1};
	static HashMap<Character, Integer> map;
	
	public static void init(){
		count0[0][0] = 1;
		count1[0][1] = 1;
		
		count0[1][0] = 2;
		count0[1][1] = 2;
		count0[1][2] = 2;
		count0[1][3] = 2;
		
		
		
		for (int level=0; level<4; level++){
			count0[level][0] = level+1;
			for (int i = 0; i<(int)Math.pow(2, level+1); i++){
				count0[level][i] = level+1;
				int num = i;
				while (num>0){
					if (num%2==1) {
						count0[level][i]--;
						count1[level][i]++;
					}
					num /= 2;
				}
			}
		}
	}
	
	public static int count(String s){
		map = new HashMap<Character, Integer>();
		int count = 0;
		for (int i=0; i<s.length(); i++){
			char c = s.charAt(i);
			if (map.containsKey(c)) map.put(c, map.get(c)+1);
			else {
				map.put(c, 1);
				count++;
			}
		}
		return count;
	}
	
	public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int u, v, count, level=0;
        int sum = 0;
        String s;
        int n_row = in.nextInt();
        init();
        for (int i=0; i<n_row; i++) {
        	u = in.nextInt();
        	v = in.nextInt();
        	s = in.next();
        	count = count(s);
        	level = 0;
        	
        	while(Math.pow(2,level+1) < count) level++;
        	Object[] mapVals = map.values().toArray();
        	int[] counts = new int[count];
        	for (int j=0; j<count; j++)
        		counts[j] = (int)mapVals[j];
        	Arrays.sort(counts);
        	sum = 0;
        	for (int j = 0; j<count; j++){//lowest frequency
        		sum = sum + (count0[level][count-1-j]*u + count1[level][count-1-j]*v) * counts[j];
        	}
        	System.out.println(sum);
        }
	}
}
