/**
 * Created by Yuanfei on 2017/6/15.
 *

 Given an integer, write a function to determine if it is a power of three.

 Follow up:
 Could you do it without using any loop / recursion?

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //=> log3(n) is integer
    //=> log10(n) / log10(3) is integer    //ln(n) / ln(3) is not precise when n=243
    //=> (log10(n) / log10(3) % 1) == 0
    return n? ((Math.log10(n) / Math.log10(3)) % 1)==0: false;
};

var num = [1, 3, 9, 27, 81, 243, 244];
num.forEach(n=>{
    console.log(isPowerOfThree(n));
});