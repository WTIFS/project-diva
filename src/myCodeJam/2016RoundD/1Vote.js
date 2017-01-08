/**
 * Created by WTIFS-Mac on 6/11/16.
 */


var fs = require("fs");
var filePath1 = "A-large-practice.in";

var buffer1 = fs.readFileSync(filePath1).toString();
var list = buffer1.split('\n');
var results = [];

var n = list.shift();

var a = [[]];
for (var A=1; A<2001; A++) {
    a.push([1]);
}
for (A=1; A<2001; A++) {
    for (var B=1; B<2001; B++) {
        if (A>B) {
            a[A][B] = a[A-1][B]*A/(A+B) + a[A][B-1]*B/(A+B)
        } else a[A][B] = 0
    }
}

for (var index=0; index<n; index++) {
    var entry = list[index].split(' ');
    //console.log(entry);
    A = entry[0];
    B = entry[1];
    results.push('Case #' + (index+1) + ': ' + a[A][B]);
    console.log('Case #' + (index+1) + ': ' + a[A][B]);
}

fs.open("1Out.txt", "w", function(err,fd){
    var buf = new Buffer(results.join('\n'));
    fs.writeSync(fd, buf, 0, buf.length, 0);
});