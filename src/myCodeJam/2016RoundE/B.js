/**
 * Created by WTIFS-Mac on 6/11/16.
 */
/**
 * Created by WTIFS-Mac on 6/11/16.
 */
/**
 * Created by WTIFS-Mac on 6/11/16.
 */
var fs = require("fs");
var filePrefix = "B-small";

var buffer1 = fs.readFileSync(filePrefix + '.in').toString();
var list = buffer1.split('\n');
var n = Number(list.shift());
var results = [];


for (var index=0; index<n; index++) {
    var N = Number(list[index]);
    var can = false;

    for (var i = 2; i <= 1000 && !can; i ++) {
        if (canDiv(N, i)) {
            can = true;
            console.log('Case #' + (index+1) + ': ' + i);
            results.push('Case #' + (index+1) + ': ' + i);
        }
    }
}

fs.open(filePrefix + ".out", "w", function(err, fd){
    var buf = new Buffer(results.join('\n'));
    fs.writeSync(fd, buf, 0, buf.length, 0);
});

function canDiv(N, base) {
    var sum = 1;
    while (sum < N) {
        sum += base;
        base *= base;
    }
    return (sum==N);
}

//41555