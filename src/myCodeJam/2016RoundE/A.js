var fs = require("fs");
var filePath1 = "A-large.in";

var buffer1 = fs.readFileSync(filePath1).toString();
var list = buffer1.split('\n');
var n = Number(list.shift());
var results = [];


for (var index=0; index<n; index++) {
    var pattern = list[2*index];
    var row2 = list[2*index+1].split(' ');
    var startNum = Number(row2[0]);
    var endNum = Number(row2[1]);
    console.log('pattern: ' + pattern);
    console.log('startIndex: ' + startNum);
    console.log('endIndex: ' + endNum);

    var cnt = calc(pattern, startNum, endNum);
    console.log('Case #' + (index+1) + ': ' + cnt);
    results.push('Case #' + (index+1) + ': ' + cnt);

    fs.open("AOut.txt", "w", function(err, fd){
        var buf = new Buffer(results.join('\n'));
        fs.writeSync(fd, buf, 0, buf.length, 0);
    });

    //var cnt2 = calc2(pattern, startNum, endNum);
    //fs.open("AOut2.txt", "w", function(err, fd){
    //    var buf = new Buffer(results.join('\n'));
    //    fs.writeSync(fd, buf, 0, buf.length, 0);
    //});

    //console.log((cnt==cnt2) + '\n');
    //if (cnt!=cnt2) console.log(index, cnt, cnt2);
}

function calc(pattern, startNum, endNum) {
    var patternCnt = 0;
    var part1Cnt = 0;
    var part2Cnt = 0;
    var part3Cnt = 0;
    var patternLen = pattern.length;
    for (var i=0; i<pattern.length; i++)
        if (pattern[i]=='B') patternCnt ++;
    if (patternCnt==0) return 0;
    var startIndex = startNum - 1;
    var endIndex = endNum - 1;

    var part1Start = startIndex;
    var part1End = parseInt((startIndex-1)/patternLen + 1) * patternLen - 1;
    if (part1End >= endIndex) return calcSingle(pattern, startIndex, endIndex);
    if (part1End <0 ) part1End += patternLen;

    part1Cnt = calcSingle(pattern, part1Start, part1End);

    //console.log('part1Start: ' + part1Start);
    //console.log('part1End: ' + part1End);


    var part3Start = endIndex - endIndex % patternLen;
    var part3End = endIndex;

    //console.log('part3Start: ' + part3Start);
    //console.log('part3End: ' + part3End);

    if (part3Start>part1End) {
        part2Cnt = parseInt((part3Start - part1End) / patternLen) * patternCnt;
        if (part1End) part3Cnt = calcSingle(pattern, part3Start, part3End);
    }

    return part1Cnt + part2Cnt + part3Cnt;
}


function calcSingle(pattern, startIndex, endIndex) {
    var cnt = 0;
    if (endIndex >= startIndex) {
        if (endIndex > startIndex) {
            for (var i = startIndex; i <= endIndex; i++) {
                if (pattern[i % pattern.length] == 'B') cnt++;
            }
        } else if (endIndex==startIndex) {
            if (pattern[endIndex % pattern.length] == 'B') cnt++;
        }
    }
    return cnt;
}

function calc2(pattern, startNum, endNum) {
    var cnt = 0;
    for (var i=startNum-1; i<endNum; i++) if (pattern[i%pattern.length]=='B') cnt++;
    return cnt;
}
