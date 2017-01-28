/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var numMap = {};
    var maxFrequency = 0;
    var frequencyPool = [];
    var results = [];
    nums.forEach(function(num) { //{num: frequency}
    	if (!numMap.hasOwnProperty(num)) numMap[num] = 1;
    	else numMap[num] ++;
    });
    for (var num2 in numMap) { //{frequency: [num1, num2]}
        if (numMap.hasOwnProperty(num2)) {
            var frequency = numMap[num2];
            if (!frequencyPool[frequency]) {
                frequencyPool[frequency] = [Number(num2)];
                if (frequency > maxFrequency) maxFrequency = frequency;
            } else frequencyPool[frequency].push(Number(num2));
        }
    }
    for (var frequency2=maxFrequency, cnt=k; cnt && frequency2; frequency2--) {
    	if (frequencyPool[frequency2]) {
    		cnt -= frequencyPool[frequency2].length;
    		results = results.concat(frequencyPool[frequency2]);
    	}
    }
    return results;
};

var nums = [1,1,1,2,2,3];
var nums2 = [4,1,-1,2,-1,2,3];
console.log(topKFrequent(nums2, 2));