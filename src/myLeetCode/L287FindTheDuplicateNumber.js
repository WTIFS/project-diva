/**
 * Created by Yuanfei on 2017/6/6.
 *

 Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

 Note:
 You must not modify the array (assume the array is read only).
 You must use only constant, O(1) extra space.
 Your runtime complexity should be less than O(n2).
 There is only one duplicate number in the array, but it could be repeated more than once.

 See 142 Linked List Cycle
 nums长度为1+n，值为1 to n，值可视作指针，则问题变为找到环路的起点

 *
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var slow = nums[0];
    var fast = nums[nums[0]];
    while (slow!=fast) {
        slow = nums[slow]; //slow = slow.next
        fast = nums[nums[fast]]; //fast = fast.next.next
    }
    slow = 0;
    while (slow!=fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

console.log(findDuplicate([1, 2, 3, 4, 5, 1]));
console.log(findDuplicate([1, 2, 3, 4, 5, 2]));
console.log(findDuplicate([1, 1]));