/**
 * Created by WTIFS-Mac on 8/1/17.
 */


/*
 A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

 Each LED represents a zero or one, with the least significant bit on the right.


 Example:

 Input: n = 1
 Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 Note:
 The order of output does not matter.
 The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
 The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

 */

/**
 * @param {number} num
 * @return {string[]}
 */


//因为只有10位 所以统计0-1023间所有数字的二进制
var a = new Array(1024);
var b = new Array(1024);

var readBinaryWatch1 = function(num) {
    if (!a || (a && !a[1])) init();
    var result = [];
    for (var i=0; i<1024; i++) {
        if (a[i]==num) {
            result.push(b[i]);
            console.log(b[i]);
        }
    }
    return result;
};

var init = function() {

    for (var i=0; i<1024; i++) {
        var s = i.toString(2);
        var cnt = 0;
        for (var j=0; j< s.length; j++) if(s[j]==1) cnt++;
        s = "0000000000" + s;
        var hourStr = s.substr(s.length - 10, 4);
        var minStr = s.substr(s.length - 6, 6);

        var hour = parseInt(hourStr, 2);
        var min = parseInt(minStr, 2);
        if (hour<12 && min<60) {
            a[i] = cnt;
            minStr = '0' + min;
            minStr = minStr.substr(minStr.length - 2, 2);
            b[i] = hour + ':' + minStr;
        }
    }
};






var readBinaryWatch2 = function(num) {
    var result = [];
    var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (num) {
        combination(a, 0, 0, num, result);
    } else {
        result = ['0:00'];
    }
    console.log(result);
    return result;
};

var combination = function(a, start, cnt, k, result) {
    for (var i = start; i < a.length && i + (k - cnt - 1) <= a.length && cnt < k; i++) {
        a[i] = 1;
        if (cnt + 1 == k) {
            var s = '0000000000' + a.join("");
            var hourBinary = s.substr(s.length-10, 4);
            var minBinary = s.substr(s.length-6, 6);
            var hour = parseInt(hourBinary, 2);
            var min = parseInt(minBinary, 2);
            if (hour<12 && min<60) {
                var minStr = '0' + min;
                minStr = minStr.substr(minStr.length - 2, 2);
                result.push(hour + ':' + minStr);
            }
        } else {
            combination(a, i + 1, cnt + 1, k, result);
        }
        a[i] = 0;
    }
};





var readBinaryWatch3 = function(num) {
    var result = [];
    for (var h=0; h<12; h++) {
        for (var m=0; m<60; m++) {
            if (bitCount(h) + bitCount(m)==num) {
                result.push(convert(h, m));
            }
        }
    }
    console.log(result);
    return result;
};

var bitCount = function(i) {
    var s = i.toString(2);
    var cnt = 0;
    for (var j=0; j< s.length; j++) if(s[j]==1) cnt++;
    return cnt;
};

var convert = function(h, m) {
    var minStr = '0' + m;
    minStr = minStr.substr(minStr.length - 2, 2);
    return (h + ':' + minStr);
};


//for (var i=0; i<3; i++)
readBinaryWatch3(2);
