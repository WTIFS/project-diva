package myHihoCoder.NetEase2016;

import java.util.Scanner;
	
public class A {
	
	public static int count9706(String s2, int[] b){
		char[] s = s2.toCharArray();
		int len = s.length;
		int i=0, count=0; 
		while (i<len){
			while (i<len && (s[i]!='9' || b[i]==1)) i++;
			if (i>=len) break;
			else {
				b[i] = 1;
				i++;
				
				while (i<len && (s[i]!='7' || b[i]==1)) i++;
				if (i>=len) break;
				else {
					b[i]=1;
					i++;
					
					while (i<len && (s[i]!='0' || b[i]==1)) i++;
					if (i>=len) break;
					else {
						b[i]=1;
						i++;
						
						while (i<len && (s[i]!='6' || b[i]==1)) i++;
						if (i>=len) break;
						else {
							b[i]=1;
							count++;
							i++;
							
						}
					}
				}
			}
		}
		return count;
	}
	
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int i=0; i<n; i++) {
        	String s = in.next();
        	int total = 0;
        	int[] b = new int[s.length()];
        	int c = count9706(s, b);
        	while (c!=0){
        		total += c;
        		c = count9706(s, b);
        	}
        	System.out.println(total);
        }
    }
}