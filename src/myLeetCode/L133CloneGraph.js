/**
 * Created by Yuanfei on 2017/4/24.
 */
/**

 Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.


 OJ's undirected graph serialization:
 Nodes are labeled uniquely.

 We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
 As an example, consider the serialized graph {0,1,2#1,2#2,2}.

 The graph has a total of three nodes, and therefore contains three parts as separated by #.

 First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 Second node is labeled as 1. Connect node 1 to node 2.
 Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
 Visually, the graph looks like the following:

 1
 / \
 /   \
 0 --- 2
 / \
 \_/

 */

function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (!graph) return graph;
    var newHead = new UndirectedGraphNode(graph.label);
    var toVisit = [graph];
    var copiesToVisit = [newHead];
    var map = {};
    map[newHead.label] = newHead;
    while (toVisit.length) {
        var p = toVisit.pop();
        var q = copiesToVisit.pop();
        p.neighbors.forEach(function(neighbor) {
            if (!map[neighbor.label]) {
                var copy = new UndirectedGraphNode(neighbor.label);
                toVisit.push(neighbor);
                copiesToVisit.push(copy);
                map[neighbor.label] = copy;
            } else {
                q.neighbors.push(map[neighbor.label]);
            }
        });
    }
    return newHead;
};

var a = new UndirectedGraphNode(0);
var b = new UndirectedGraphNode(1);
var c = new UndirectedGraphNode(2);
a.neighbors = [b, c];
b.neighbors = [c];
c.neighbors = [c];
console.log(JSON.stringify(cloneGraph(a), null, 2));