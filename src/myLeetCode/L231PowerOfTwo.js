/**
 * Created by Yuanfei on 2017/6/15.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 142 ms
    return n>0? (n&n-1) == 0: false;
};

var isPowerOfTwo2 = function(n) {
    //145 ms
    return n? ((Math.log10(n) / Math.log10(2)) % 1)==0: false;
};

var nums = [-2147483648, 0,1,2,3,4,5,6,7,8,16,32,64,128,256,512,1024,1025];
nums.forEach(num=>{
    console.log(isPowerOfTwo(num) + " " + isPowerOfTwo2(num));
});