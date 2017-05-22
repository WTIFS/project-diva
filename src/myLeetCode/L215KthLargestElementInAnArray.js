/**
 * Created by Yuanfei on 2017/5/19.
 */
/**
 Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

 For example    0,
 Given [3,2,1,5,6,4] and k = 2, return 5.

 Note:
 You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

var findKthLargest = function(nums, k) {
    heapSort(nums);
    return nums[k-1];
};

var heapSort = function(nums) {
    initMinHeap(nums);
    for (var i=nums.length-1; i>0; i--) {
        swap(nums, 0, i);
        swapRoot(nums, i-1);
    }
};

var initMinHeap = function(nums) {
    for (var r = parseInt((nums.length-2)/2); r>=0; r--) {
        var i = r;
        while (i<=parseInt((nums.length-2)/2)) {
            var left = 2*i +1 ;
            var right = 2*i + 2;
            var smallestIndex = i;
            if (left<nums.length && nums[left]<nums[smallestIndex]) smallestIndex = left;
            if (right<nums.length && nums[right]<nums[smallestIndex]) smallestIndex = right;
            if (smallestIndex != i) {
                swap(nums, i, smallestIndex);
                i = smallestIndex;
            } else break;
        }
    }
};

var swapRoot = function(nums, marginIndex) {
    var r = 0;
    while (r<=parseInt((marginIndex-1)/2)) {
        var left = 2 * r + 1;
        var right = 2 * r + 2;
        var smallestIndex = r;
        if (left<=marginIndex && nums[left]<nums[smallestIndex]) smallestIndex = left;
        if (right<=marginIndex && nums[right]<nums[smallestIndex]) smallestIndex = right;
        if (smallestIndex != r) {
            swap(nums, r, smallestIndex);
            r = smallestIndex;
        } else break;

    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest2 = function(nums, k) {
    return findKth(nums, k-1, 0, nums.length-1);
};

var findKth = function(nums, k, start, end) {
    var x = nums[start];
    var i = start;
    var j = end;
    while (i<j) {

        while (i<j && nums[j]<=x) j--;
        if (i<j) {
            swap(nums, i, j);
            i++;
        }

        while (i<j && nums[i]>=x) i++;
        if (i<j) {
            swap(nums, i, j);
            j--;
        }
    }

    if (i==k) return nums[i];
    if (start<i && k<i) return findKth(nums, k, start, i-1);
    else if (i<end) return findKth(nums, k, i+1, end);
    else return -1;

};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

var nums = [0,1,2,3,4,5,6,7,8,9];
for (var i=1; i<=10; i++) console.log(findKthLargest(nums, i));

