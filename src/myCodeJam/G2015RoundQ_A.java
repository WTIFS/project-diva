package myCodeJam;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class G2015RoundQ_A {
	public static void googleJam1(String inputName, String outputName){
		File file = new File(inputName);
		File file2 = new File(outputName);
	
		BufferedReader reader = null;
		StringBuffer ans = new StringBuffer();
		StringBuffer ans2 = new StringBuffer();
		try{
			FileReader fr = new FileReader(file);
			reader = new BufferedReader(fr);
			String temp = reader.readLine();
			int n = Integer.parseInt(temp);
			for (int i=1;i<=n;i++){
				temp = reader.readLine();
				String[] s1 = temp.split(" ");
				int i1=Integer.parseInt(s1[0]);
				String s2 = s1[1];
				
				int sum=s2.charAt(0)-'0';
				int delta = 0;
				for (int j=1; j<=i1; j++){
					if (s2.charAt(j)>'0'&&sum<j){
						delta+=j-sum;
						sum= j + s2.charAt(j)-'0';
					}
					else sum+=s2.charAt(j)-'0';
				}
				ans.append(String.format("Case #%d: %d\n", i, delta));
				
				int sum2 = s2.charAt(0)-'0';
				int delta2 = 0;
				for (int j=1; j<=i1;j++){
					delta2=Math.max(delta2, j-sum2);
					sum2+=s2.charAt(j)-'0';
					
				}
				ans2.append(String.format("Case #%d: %d\n", i, delta2));
				
				System.out.println(String.format("Case #%d: %s: %d; %d", i, temp, delta, delta2));
				
			}
			reader.close();
			FileWriter writer = new FileWriter(file2);
			writer.write(ans.toString());
			writer.close();
		}
		
		catch (FileNotFoundException ex) {
		    ex.printStackTrace();
		}
		
		catch(IOException e){
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args){
		G2015RoundQ_A.googleJam1("input/A-small-practice.in","output/G2015RoundQ_A-small.out");
		G2015RoundQ_A.googleJam1("input/A-large-practice.in","output/G2015RoundQ_A-large.out");
	}
}
