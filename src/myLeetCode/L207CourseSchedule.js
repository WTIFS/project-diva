/**
 * Created by Yuanfei on 2017/5/18.
 */
/**
 Total Accepted: 78235
 Total Submissions: 249291
 Difficulty: Medium
 Contributor: LeetCode
 There are a total of n courses you have to take, labeled from 0 to n - 1.

 Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

 Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

 For example:

 2, [[1,0]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

 2, [[1,0],[0,1]]
 There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

 Note:
 The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 You may assume that there are no duplicate edges in the input prerequisites.

 Hints:
 This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
 Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
 Topological sort could also be done via BFS.
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var edges = new Array(numCourses);
    var indegrees = new Array(numCourses);
    var zeroDegrees = [];
    for (var i=0; i<numCourses; i++) edges[i] = new Array(numCourses);
    prerequisites.forEach(function(edge) {
        if (!edges[edge[0]][edge[1]]) { //duplicated cases
            if (!indegrees[edge[1]]) indegrees[edge[1]] = 1;
            else indegrees[edge[1]]++;
        }
        edges[edge[0]][edge[1]] = true;
    });

    for (var j = 0; j<numCourses; j++) if (!indegrees[j]) zeroDegrees.push(j);
    var visitedCount = 0;
    while (zeroDegrees.length) {
        var currentNode = zeroDegrees.shift();
        visitedCount++;
        for (var neighbor=0; neighbor<numCourses; neighbor++) {
            if (edges[currentNode][neighbor]) {
                indegrees[neighbor]--;
                if (indegrees[neighbor]==0) zeroDegrees.push(neighbor);
            }
        }
    }

    return visitedCount == numCourses;
};

console.log(canFinish( 2, [[1,0]]));
console.log(canFinish( 2, [[1,0], [0, 1]]));