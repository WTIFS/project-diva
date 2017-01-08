/**
 * Created by WTIFS-Mac on 6/11/16.
 */
/**
 * Created by WTIFS-Mac on 6/11/16.
 */
var fs = require("fs");
var filePrefix = "C-large";

var buffer1 = fs.readFileSync(filePrefix + '.in').toString();
var list = buffer1.split('\n');
var n = Number(list.shift());
var results = [];


for (var index=0; index<n; index++) {
    var row = list[index].split(' ');
    var N = Number(row[0]);
    var T = Number(row[1]);
    var cnt = 0;

    for (var i = T; i <= N; i += T) {
        cnt += calc(N, i, i+1, i+2);
    }

    console.log('Case #' + (index+1) + ': ' + cnt);
    results.push('Case #' + (index+1) + ': ' + cnt);
}

fs.open(filePrefix + ".out", "w", function(err, fd){
    var buf = new Buffer(results.join('\n'));
    fs.writeSync(fd, buf, 0, buf.length, 0);
});

function calc(N, a, b, c) {
    var cnt = 0;
    for (var ai = parseInt(N/a); ai > 0; ai--) {
        var leftNa = N - a * ai;
        if (leftNa == 0) {
            cnt ++;
            //console.log(a, ai);
        }
        else {
            for (var bi = parseInt(leftNa / b); bi >= 0; bi--) {
                var leftNb = leftNa - b * bi;
                if (leftNb % c == 0) {
                    cnt ++;
                    //console.log(a, ai, b, bi, c, leftNb/c);
                }
            }
        }
    }
    return cnt;
}

//41555