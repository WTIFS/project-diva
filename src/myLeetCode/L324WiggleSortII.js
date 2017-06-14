/**
 * Created by Yuanfei on 2017/6/13.
 *
 * Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

 Example:
 (1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6].
 (2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].

 Note:
 You may assume all input has valid answer.

 Follow Up:
 Can you do it in O(n) time and/or in-place with O(1) extra space?
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var n = nums.length;
    if (n<=1) return;

    var A = function(i) { //A(0) = 1; A(1) = 3; A(mid) = n; A(mid+1) = 2; A(mid+2) = 4   先奇数13579再偶数2468
        return nums[(1+2*i) % (n|1)]; //n|1 将取余的 变为奇数  consider A(5) = 11%10 = 1; actually 11%11=0
    };

    var B = function(i) {
        return (1+2*i) % (n|1);
    };

    var mid = findKth(nums, nums.length>>1, 0, nums.length-1); //找中位数, 奇数位上放>mid的，然后再放==mid的，偶数位上放剩下的==mid的，然后<mid的
    var i = 0; //1 3 5 7 9 2 4 6 8
    var largerThanMid = 0; //1 3 5 7 9
    var lessThanMid = n-1; //8 6 4 2 0
    while (i<=lessThanMid) {
        var currentVal = A(i);
        if (currentVal>mid) {
            swap(nums, B(i++), B(largerThanMid++));
        } else if (currentVal<mid) {
            swap(nums, B(i), B(lessThanMid--))
        } else i++;
    }
};




var findKth = function(nums, k, start, end) {
    while (start<end) {
        var x = nums[start];
        var i = start;
        var j = end;
        while (i < j) {

            while (i < j && nums[j] <= x) j--;
            if (i < j) {
                swap(nums, i, j);
                i++;
            }

            while (i < j && nums[i] >= x) i++;
            if (i < j) {
                swap(nums, i, j);
                j--;
            }
        }

        if (i == k) return nums[i];
        if (start < i && k < i) end = i - 1;
        else if (i < end) start = i + 1;
        else return nums[i];
    }
    return nums[i];
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

//(1) Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6].
//(2) Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2].
var nums ;

nums = [10,1,7,2,10,5,8,4,9,4,10,8,8,1,5,6,8,9,2,1];
wiggleSort(nums);
console.log(nums);

nums = [1, 1, 1, 2, 2, 2];
wiggleSort(nums);
console.log(nums);

nums = [1, 5, 1, 1, 6, 4];
wiggleSort(nums);
console.log(nums);

nums = [1, 3, 2, 2, 3, 1];
wiggleSort(nums);
console.log(nums);

//1 3 2 2 3 1
//1 3 2 2 1 3
//1 3 2 3 1 2
//2 3 1 3 1 2
//1 3 2 3 1 2


//3 3 2 2 1 1
//3 3 1 2 1 2
//2 3 1 3 1 2
