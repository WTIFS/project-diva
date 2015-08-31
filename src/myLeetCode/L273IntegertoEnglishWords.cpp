#include <string>
#include <stdio.h>
using std::string;

/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 */

class L273IntegertoEnglishWords {
	
public:
    string numberToWords(int num) {

        if (num==0) return "Zero";
        const string words3[] = {"", "Thousand", "Million", "Billion"};

        string s = "";
        int count = 0;
        while (num>0){
            int chunk = num % 1000;
            if (chunk>0) s = " " + convert(chunk) + (count==0 ? "" : (" " + words3[count])) + s;
            count++;
            num /= 1000;
        }
        return s.substr(1);
    }

    string convert(int num){

        const string words1[] = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
        const string words2[] = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"}; 

    	string s = "";
    	int hundred = num/100;
    	if (hundred>0) 
    	{
    		s += words1[hundred] + " Hundred";
    		num %= 100;
            if (num>0) s+= " ";
    	}
    	if (num<20) s += words1[num];
    	else 
    	{
    		int ten = num/10;
    		s += words2[ten];
    		num %= 10;
    		if (num>0) s+= " " + words1[num];
    	}
    	return s;
    }
};

    int main(){
        int nums[] = {0,1,10,11,20,21, 100,101, 1000, 1001, 1010, 1100, 10000, 100000, 100001, 110000, 1234567891};
        L273IntegertoEnglishWords test273;
        for (int i=0; i<sizeof(nums)/sizeof(nums[0]); i++){
            string s = test273.numberToWords(nums[i]);
        printf("%s\n", s.c_str());
        }
        return 0;
    }
