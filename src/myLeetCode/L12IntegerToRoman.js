/**
 * Created by WTIFS-Mac on 2017/7/2.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result = '';

    var thousandMap = {1: 'M'};
    var hundredMap = {1: 'C', 5: 'D', 10: 'M'};
    var tenMap = {1: 'X', 5: 'L', 10: 'C'};
    var oneMap = {1: 'I', 5: 'V', 10: 'X'};

    var thousand = parseInt(num / 1000);
    num -= thousand * 1000;
    var hundred = parseInt(num / 100);
    num -= hundred * 100;
    var ten = parseInt(num / 10);
    num -= ten * 10;
    var one = num;

    result += calc(thousand, thousandMap);
    result += calc(hundred, hundredMap);
    result += calc(ten, tenMap);
    result += calc(one, oneMap);

    return result;

};

var calc = function(num, map) {
    if (num<=3) {
        return repeat(map[1], num);
    } else if (num==4) return map[1] + map[5];
    else if (num==5) return map[5];
    else if (num<=8) return map[5] + repeat(map[1], num-5);
    else if (num==9) return map[1] + map[10];
};

var repeat = function(c, times) {
    var result = '';
    for (var i=0; i<times; i++) result += c;
    return result;
};

for (var i=0; i<=11; i++) console.log(intToRoman(i));
console.log(intToRoman(49));
console.log(intToRoman(50));
console.log(intToRoman(51));
console.log(intToRoman(99));
console.log(intToRoman(100));
console.log(intToRoman(101));
console.log(intToRoman(111));
console.log(intToRoman(999));
console.log(intToRoman(1111));
console.log(intToRoman(3999));

