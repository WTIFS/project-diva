/**
 * Created by Yuanfei on 2017/3/13.
 */

    /**
     For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

     Format
     The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

     You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

     Given n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
         |
        1
       / \
     2    3


     拓扑：选度为1的叶节点，从邻居中移除这些叶节点；再选一批新的叶节点，反复筛选直到只剩1/2个叶节点，则此节点为中点
     */

var findMinHeightTrees = function(n, edges) {
        if (n==1) return [0];
    var adj = [];
    for (var i=0; i<n; i++) adj[i] = [];
    edges.forEach(function(edge) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    });
    var leaves = [];
    for (var j=0; j<n; j++) if (adj[j].length==1)  leaves.push(j);

    while (n>2) {
        n -= leaves.length;
        var newLeaves = [];
        for (var k=0; k<leaves.length; k++) {
            var leaf = leaves[k];
            var neighbor = adj[leaf].shift();
            remove(adj[neighbor], leaf);
            if (adj[neighbor].length==1) newLeaves.push(neighbor);
        }
        leaves = newLeaves;
    }
    return leaves;
};

var remove = function(a, k) {
    var idx = a.indexOf(k);
    if (idx>-1) a.splice(idx, 1);
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));