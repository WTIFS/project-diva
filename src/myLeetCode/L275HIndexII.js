/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var len = citations.length;
    if (len<1) return 0;
    var b = 0, e = len-1, mid;
    var count = 0;
    while (b<=e){
    	mid = parseInt((b+e)/2);
    	count = len - mid;
    	if (citations[mid]>=count) e = mid-1;
    	else b = mid + 1;
    	
    }
    return len-(e+1);
};

var nums = [1,3,5,7,9];
console.log(hIndex(nums));
nums = [0,1];
console.log(hIndex(nums));
nums = [1,2,2,2];
console.log(hIndex(nums));
