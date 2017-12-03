/**
 * Created by WTIFS-Mac on 2017/12/3.
 *

 Design a data structure that supports all following operations in average O(1) time.

 Note: Duplicate elements are allowed.
 insert(val): Inserts an item val to the collection.
 remove(val): Removes an item val from the collection if present.
 getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
 Example:

 // Init an empty collection.
 RandomizedCollection collection = new RandomizedCollection();

 // Inserts 1 to the collection. Returns true as the collection did not contain 1.
 collection.insert(1);

 // Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
 collection.insert(1);

 // Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
 collection.insert(2);

 // getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
 collection.getRandom();

 // Removes 1 from the collection, returns true. Collection now contains [1,2].
 collection.remove(1);

 // getRandom should return 1 and 2 both equally likely.
 collection.getRandom();

 */

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
    this.locations = {};
    this.nums = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    var locations = this.locations;
    var nums = this.nums;
    var isEmptyObj = !locations[val];
    if (isEmptyObj) locations[val] = {};
    locations[val][nums.length] = true;
    nums.push(val);
    return isEmptyObj;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    var locations = this.locations;
    var nums = this.nums;
    if (!locations[val]) return false;
    var targetValLocation = Object.keys(locations[val])[0];
    delete locations[val][targetValLocation];
    if (targetValLocation<nums.length-1) {
        var lastNumber = nums[nums.length - 1];
        nums[targetValLocation] = lastNumber;
        locations[lastNumber][targetValLocation] = true;
        delete locations[lastNumber][nums.length - 1];
    }
    nums.pop();
    if (isEmptyObj(locations[val])) delete locations[val];
    return true;
};

var isEmptyObj = function(obj) {
    return !obj || !Object.keys(obj).length;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    var nums = this.nums;
    var location = parseInt(Math.random() * nums.length);
    return nums[location];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 */
var obj = new RandomizedCollection();
console.log(obj.insert(0));
console.log(obj.insert(1));
console.log(obj.insert(2));
console.log(obj.insert(3));
console.log(obj.insert(3));

console.log(obj.remove(2));
console.log(obj.remove(3));
console.log(obj.remove(0));


console.log(obj.getRandom());
console.log(obj.getRandom());
console.log(obj.getRandom());
