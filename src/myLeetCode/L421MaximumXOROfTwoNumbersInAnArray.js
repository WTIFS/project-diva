/**
 * Created by WTIFS-Mac on 19/3/17.
 */

/*
 Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

 Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

 Could you do this in O(n) runtime?

 Example:

 Input: [3, 10, 5, 25, 2, 8]

 Output: 28

 Explanation: The maximum result is 5 ^ 25 = 28.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    var mask = 0;
    var prefixSet;
    var max = 0;
    for (var i=31; i>=0; i--) {
        mask |= (1 << i);
        prefixSet = {};

        for (var j=0; j<nums.length; j++) {
            var num = nums[j];
            prefixSet[num & mask] = true;
        }

        // now find out if there are two prefix with different i-th bit
        // if there is, the new max should be current max with one 1 bit at i-th position, which is candidate
        // and the two prefix, say A and B, satisfies:
        // A ^ B = candidate => A ^ candidate = B
        // so we also have A ^ candidate = B or B ^ candidate = A
        // thus we can use this method to find out if such A and B exists in the set
        var candidate = max | (1<<i);
        for (var a in prefixSet) {
            var b = parseInt(a) ^ candidate;
            if (prefixSet[b]) {
                max = candidate;
                break;
            }
        }
    }
    return max;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));