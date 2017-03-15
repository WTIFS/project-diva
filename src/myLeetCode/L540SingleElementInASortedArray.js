/**
 * Created by Yuanfei on 2017/3/15.
 */
/**
 Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

 Example 1:
 Input: [1,1,2,3,3,4,4,8,8]
 Output: 2
 Example 2:
 Input: [3,3,7,7,10,11,11]
 Output: 10
 Note: Your solution should run in O(log n) time and O(1) space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var n = nums.length;
    //left & right means pair index
    var left = 0;
    var right = parseInt(n/2);
    while (left<right) {
        var mid = parseInt((left+right)/2);
        //nums[2n] == nums[2n+1]说明一定在2n+1右侧
        if (nums[mid*2]!=nums[mid*2+1]) right=mid;
        else left = mid+1;
    }
    return nums[left * 2];
};

//0 1 2 3 4 5 index
//0 0 1 1 2 2 val
//nums[2]==nums[3]

//0 1 2 3 4 5 6 index
//0 0 1 1 2 3 3 val
//nums[2]==nums[3]
//nums[4]!=nums[6]

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
console.log(singleNonDuplicate([1, 1, 2, 2, 4, 4, 5, 5, 9]));
var bigOne = [];
for (var i=0; i<=10000; i++) {
    bigOne.push(i);
    if (i!=2345) bigOne.push(i);
}
console.log(singleNonDuplicate(bigOne));