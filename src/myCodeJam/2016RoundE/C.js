/**
 * Created by WTIFS-Mac on 6/11/16.
 */
var fs = require("fs");
var filePath1 = "C-small-attempt0.in";

var buffer1 = fs.readFileSync(filePath1).toString();
var list = buffer1.split('\n');
var n = Number(list.shift());
var results = [];



for (var index=0; index<n; index++) {
    var row = list[index].split(' ');
    var N = Number(row[0]);
    var T = Number(row[1]);


    var map = {cnt: 0};

    for (var i=T; i<N; i+=T) {
        var a = [i];
        calc(a, N, map, i, i);
    }
    if (T<N && N%T==0) map.cnt++;

    console.log('Case #' + (index+1) + ': ' + map.cnt);
    results.push('Case #' + (index+1) + ': ' + map.cnt);

}

fs.open("C-small.out", "w", function(err, fd){
    var buf = new Buffer(results.join('\n'));
    fs.writeSync(fd, buf, 0, buf.length, 0);
});

function calc(a, N, map, max, sum) {
    if (a[0] + 2 >= max) {
        if (sum + max < N) {
            if (!map[a.join(',') + ',' + max]) {
                a.push(max);
                calc(a, N, map, max, sum + max);

                a.pop();
            }
        } else if (sum + max == N) {
            map[a.join(',') + ',' + max] = true;
            map.cnt++;
            return;
        }
    }
    if (a[0] + 1 >= max) {
        if (sum + max + 1 < N) {
            if (!map[a.join(',') + ',' + (max + 1)]) {

                a.push(max + 1);
                calc(a, N, map, max + 1, sum + max + 1);

                a.pop();
            }
        } else if (sum + max + 1 == N) {
            map[a.join(',') + ',' + (max + 1)] = true;
            map.cnt++;
            return;
        }
    }
    if (a[0] == max) {
        if (sum + max + 2 < N) {
            if (!map[a.join(',') + ',' + (max + 2)]) {

                a.push(max + 2);
                calc(a, N, map, max + 2, sum + max + 2);

                a.pop();
            }
        } else if (sum + max + 2 == N) {
            map[a.join(',') + ',' + (max + 2)] = true;
            map.cnt++;
        }
    }
}