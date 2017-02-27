/**
 * Created by WTIFS-Mac on 27/2/17.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var z = (x ^ y).toString(2);
    var cnt = 0;
    for (var i=0; i<z.length; i++) if (z[i]=="1") cnt ++;
    return cnt;
};

console.log(hammingDistance(1,4));


/**

 461. Hamming Distance Add to List
 Description  Submission  Solutions
 Total Accepted: 35322
 Total Submissions: 49765
 Difficulty: Easy
 Contributors: Samuri
 The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

 Given two integers x and y, calculate the Hamming distance.

 Note:
 0 ≤ x, y < 231.

 Example:

 Input: x = 1, y = 4

 Output: 2

 Explanation:
 1   (0 0 0 1)
 4   (0 1 0 0)
 ↑   ↑

 The above arrows point to positions where the corresponding bits are different.

 **/