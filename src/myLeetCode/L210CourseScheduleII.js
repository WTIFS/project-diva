/**
 * Created by WTIFS-Mac on 2017/5/20.
 */
/**

 There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

 There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

 4, [[1,0],[2,0],[3,1],[3,2]]
 There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    var matrix = new Array(numCourses);
    var indegrees = new Array(numCourses);
    var zeroIndegress = [];
    var results = [];

    for (var i=0; i<numCourses; i++) matrix[i] = new Array(numCourses);
    prerequisites.forEach(function(prerequisite) {
        var course = prerequisite[0];
        var pre = prerequisite[1];
        if (!matrix[course][pre]) {
            if (!indegrees[pre]) indegrees[pre] = 1;
            else indegrees[pre]++;
        }
        matrix[course][pre] = true;
    });

    for (var j=0; j<numCourses; j++) if (!indegrees[j]) zeroIndegress.push(j);

    while (zeroIndegress.length) {
        var currentNode = zeroIndegress.shift();
        results.unshift(currentNode);

        for (var neighbor=0; neighbor<numCourses; neighbor++) {
            if (matrix[currentNode][neighbor]) {
                indegrees[neighbor]--;
                if (!indegrees[neighbor]) zeroIndegress.push(neighbor);
            }
        }
    }

    return results.length==numCourses? results: [];

};

console.log(findOrder(2, [[1,0]]));
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));