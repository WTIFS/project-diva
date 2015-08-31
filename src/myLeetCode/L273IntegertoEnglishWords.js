/**
 * 
 */

var words1 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
	
var words2 = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
	
var words3 = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    var s = "";
    var count = 0;
    while (num>0){
    	var chunk = num%1000;
    	if (chunk!==0){
    		s = convert(chunk) + " " + words3[count] + " " + s; 
    	}
    	num = Math.floor(num/1000);
    	count++;
    }
    return s.trim();
};

var convert = function(num){
	var s = "";
	var hundred = Math.floor(num/100);
	if (hundred>0) {
		s += words1[hundred] + " Hundred";
		num %= 100;
	}
	if (num>=20){
		var ten = Math.floor(num/10);
		s += " " + words2[ten];
		num %= 10;
		s += " " + words1[num];
	}
	else s += " " + words1[num];
	return s.trim();
}

var nums = [0,1,10,11,20,21, 100,101, 1000, 1001, 1010, 1100, 10000, 100000, 100001, 110000, 1234567891];
for (var i=0; i<nums.length; i++)
console.log(numberToWords(nums[i]));