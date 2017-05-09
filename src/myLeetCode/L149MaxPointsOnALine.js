/**
 * Created by Yuanfei on 2017/5/9.
 */
/**
 Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    var result = 0;
    for (var i=0; i<points.length; i++) { //i为起点
        var map = {}; //以斜率作为key, count作为value
        var max = 0;
        var maxRatioStr = "";
        for (var j=i+1; j<points.length; j++) { //计算j与i的斜率
            var ratioStr = getRatioStr(points[i], points[j]);
            if (map[ratioStr]) map[ratioStr]++;
            else map[ratioStr] = 1;
            if (map[ratioStr] > max && ratioStr!="0/0") {
                max = map[ratioStr];
                maxRatioStr = ratioStr;
            }
        }
        if (map["0/0"]) max += map["0/0"]; //0/0表示重合的点
        result = Math.max(result, max+1); //+1: 把i这个起点也算进来
    }
    return result;
};

var getRatioStr = function(p1, p2) {
    var h = p2.y - p1.y;
    var w = p2.x - p1.x;
    var gcd = getGcd(w, h); //斜率都除以最大公约数
    if (gcd) w /= gcd;
    if (gcd) h /= gcd;
    return h + "/" + w;
};

//辗转相除法求最大公约数
var getGcd = function(a, b) {
    var tmp;
    while (b) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
};

var points1 = [
    new Point(1, 1),
    new Point(1, 2),
    new Point(3, 3),
    new Point(2, 4),
    new Point(2, 1)
];

var points2 = [
    new Point(0, 0),
    new Point(-1, -1),
    new Point(2, 2)
];

var points3 = [
    new Point(0, 0),
    new Point(1, 1),
    new Point(0, 0)
];

console.log(maxPoints(points1));
console.log(maxPoints(points2));
console.log(maxPoints(points3));