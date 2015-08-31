package myLeetCode;

/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 */

public class L273IntegertoEnglishWords {
	
	public String[] words1 = new String[]{"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
	
	public String[] words2 = new String[]{"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
	
	public String[] words3 = new String[]{"", "Thousand", "Million", "Billion"};
	
    public String numberToWords(int num){
    	if (num==0) return "Zero";
        String s = "";
        String snum = String.valueOf(num);
        int len = snum.length();
        int index3 = 0;
        for (int i=len; i>0; i-=3){
        	String chunk = snum.substring(Math.max(0, i-3), i);
        	int chunkNum = Integer.parseInt(chunk);
        	if (chunkNum!=0) s = convert(chunkNum) + " " + words3[index3] + " " + s;
        	index3++;
        }
        return s.trim();
    }
    public String convert(int num){
    	String s = "";
    	int hundred = num/100;
    	if (hundred>0) 
    	{
    		s += words1[hundred] + " Hundred";
    		num -= hundred * 100;
    	}
    	if (num<20) s += " " + words1[num];
    	else 
    	{
    		int ten = num/10;
    		s += " " + words2[ten];
    		num -= ten * 10;
    		if (num>0) s+= " " + words1[num];
    	}
    	//System.out.print(s + " ");
    	return s.trim();
    }
    
    public void main(int num){
    	//System.out.println()
    	System.out.println(numberToWords(num));
    }
    
}
