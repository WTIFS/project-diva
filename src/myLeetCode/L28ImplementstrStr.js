/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var s = haystack.split('');
	var target = needle.split('');
	var len1 = s.length;
	var len2 = target.length;
	var j;
    for (var i=0; i<=len1-len2; i++){
    	j = 0;
    	while (j<len2 && s[i+j]==target[j]) j++;
    	if (j==len2) return i;
    }
    return -1;
};

var strStr2 = function(haystack, needle) {
	var s = haystack.split('');
	var target = needle.split('');
	var len1 = s.length;
	var len2 = target.length;
	if (len2==0) return 0;
	
	var i=0, j=0;
	var next = buildNext(needle);
	while (i<len1)
	{
		if (s[i]==target[j]){
			i++;
			j++;
		}
		else if (i<len1){
			if (j>0) j=next[j];
			else i++;
		}
		if (j==len2) return i-len2;
	}
	return -1;
}

var buildNext = function(needle){
	var s = needle.split('');
	var len = s.length;
	var next = new Array(len+1);
	next[0] = next[1] = 0;
	var j=0;
	for (var i=1; i<len; i++){
		while (j>0 && s[i]!=s[j]) j=next[j];
		if (s[i]==s[j]) next[i+1] = ++j;
		else next[i+1] = 0;
	}
	return next;
}


console.log(strStr2("bac","ac"));
console.log(strStr2("abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba", "bbbbbbaa"));