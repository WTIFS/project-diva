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

//堆排 O(n)
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
//和快排相同的思路 比某个数小的放左边 大的放右边 O(n^2)
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


/**
 * @param nums
 * @param k

 */
var findKthLargest3 = function(nums, k) {
    var indexOfKthLargestNum = BFPRT(nums, 0, nums.length-1, k);
    return nums[indexOfKthLargestNum];
};

/**
 BFPRT算法步骤如下：
 （1）：选取主元；
   （1.1）：将n个元素划分为⌊n/5⌋个组，每组5个元素，若有剩余，舍去；
   （1.2）：使用插入排序找到⌊n/5⌋个组中每一组的中位数； T(n)
   （1.3）：对于（1.2）中找到的所有中位数，调用BFPRT算法求出它们的中位数，作为主元；T(n/5)
 （2）：以（1.3）选取的主元为分界点，把小于主元的放在左边，大于主元的放在右边；O(n)
 （3）：判断主元的位置与k的大小，有选择的对左边或右边递归。T(7n/10)
 总时间复杂度T(n)= T(n/5) + T(7n/10) + O(n) => T(n) = O(10n) 最坏情况下也是O(n)级别
 因为每次用中位数的中位数分割, 最坏情况下也能至少分割3/10的数据出去
 */
    
//返回第k大数字的下标
var BFPRT = function(nums, left, right, k) {
    if (left == right) return left;
    var medianIndex = getMedianIndex(nums, left, right); //中位数
    medianIndex = partition(nums, left, right, medianIndex); //按中位数划分数组, 并返回划分后的中位数下标
    var relativeMedianRank = medianIndex - left + 1; //中位数的排名
    if (k == relativeMedianRank) return medianIndex; //中位数就是第k大的
    else if (k < relativeMedianRank) return BFPRT(nums, left, medianIndex - 1, k); //在left-medianIndex之间找第k大的
    else return BFPRT(nums, medianIndex+1, right, k - relativeMedianRank);
};

//插排并获取中位数下标
var insertSort = function(nums, left, right) {
    for (var i=left+1; i<=right; i++) {
        var j = i-1;
        var tmp = nums[i];
        while (nums[j]<tmp && j>=left) {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = tmp;
    }
    return parseInt((left + (right-left)/2));
};

var getMedianIndex = function(nums, left, right) {
    if (right-left<5) return insertSort(nums, left, right);

    var rightBorderOfMedians = left-1;
    for (var i = left; i+4<=right; i+=5) {//对每5个数取中位数 并放入中位数数组
        var medianIndex = insertSort(nums, i, i+4);
        swap(nums, medianIndex, ++rightBorderOfMedians); //把所有中位交换到nums的头部并记录其长度
    }
    return BFPRT(nums, left, rightBorderOfMedians, parseInt((rightBorderOfMedians-left+1)/2)+1);
};

//小于median的放左边, 大于的放右边, 返回切分后median的index
var partition = function(nums, left, right, medianIndex) {
    var median = nums[medianIndex];
    swap(nums, medianIndex, right); //把中位数和right互换 这样无论左侧怎么换,都不会影响最右median的位置

    var divideIndex = left; //divideIndex
    for (var i=left; i<right; i++) {
        if (nums[i]>median) {
            swap(nums, divideIndex, i);
            divideIndex++;
        }
    }
    swap(nums, divideIndex, right); //中位数换回中间位置 并返回
    return divideIndex;
};

var swap = function(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

var nums = [1,2,3,4,5,6];
console.log(findKthLargest3(nums, 2));

nums = [0,1,2,3,4,5,6,7,8,9];
console.log(findKthLargest3(nums, 4));

for (var i=1; i<=10; i++){
    nums = [0,1,2,3,4,5,6,7,8,9];
    console.log(findKthLargest(nums, i));

    nums = [0,1,2,3,4,5,6,7,8,9];
    console.log(findKthLargest3(nums, i));
}

