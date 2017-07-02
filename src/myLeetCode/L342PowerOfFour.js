/**
 * Created by Yuanfei on 2017/6/15.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num<=0) return false;

    // 128ms
    // 4的次方转为2进制，形如100, 10000
    // 100 & 011 == 0 (条件1)
    // 4的次方-1是3的倍数, 2的次方则不一定有这个性质 (条件2)
    return (n&n-1)==0 && (n-1%3)==0;

    //	135 ms
    //return (Math.log10(num) / Math.log10(4)) % 1==0;


    //	139 ms
    // num = num.toString(4);
    // var i=num.length-1;
    // while (i>=0 && num[i]==0) i--;
    // return i==0 && num[0]==1;

    //	189 ms
    //return Math.log10(parseInt(num.toString(4))) % 1==0;
};