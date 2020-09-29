/*
*Bloom Filter* --------------------<<<

Bloom Filter is A data structure.
element available or not in array. 10 or 1000 or million or billion element's available in array.

find element in array lie (available or not)
but how to find: 

x is element check in bloom fileter and result are positive or nagitive
positive : probably data available in array (might be present)
negaitive : surely not persent in array

*Important*
positive, true, yes : mean, not sure data available or not in array.

*bloom fileter using hash function to find element*
initially looks like: [0, 0, 0, 0, 0, 0, 0, 0]

hash functions are — f1, f2, f3, …, fk.

str = “Bangalore”
f1(str) = 110
f2(str) = 23
f3(str) =54
....
fk(str) = 125


Say m = 8 in our example
Now you take mod m of each result. In our case m = 8. So:

100 mod 8 = 4
23 mod 8 = 7
54 mod 8 = 6
………
125 mod 8 = 5

The indexs: 4, 7, 6, 5 ; the index is available to change 0 to 1
[0, 0, 0, 0, 1, 1, 1, 1]

Using hash fun.
what next, use the internet and find them...
*/

/*
*Tree Traversals--------------------<<<

https://medium.com/@young.scottw/tree-traversals-ea0f3c4ab412

A Tree Traversal is simply an algorithm that allows us to visit each Node in a Tree, once, and only once. This can be done in multiple ways, but all ways have several steps in common. For each Node in the Tree you must:

    -Determine whether a left Subtree or Node exists, if so recursively traverse it.
    -Determine whether a right Subtree or Node exists, if so recursively traverse it.
    -Handle the Node itself.

*Depth First Traversals: ▼ ▼ ▼

*1. Pre-Order Traversal*
-Handle the current Node
-Traverse the left Subtree
-Traverse the right Subtree

*2. In-Order Traversal*
Traverse the left Subtree
Handle the current Node
Traverse the right Subtree

*3. Post-Order Traversal*
Traverse the left Subtree
Traverse the right Subtree
Handle the current Node


*Breadth-First Search or BFS: ▼ ▼ ▼
-each layer top-to-bottom + left-to-right

*/

/*
 *PathFinding--------------------<<<
 https://medium.com/omarelgabrys-blog/path-finding-algorithms-f65a8902eb40

BFS, DFS(Recursive & Iterative), Dijkstra, Greedy, & A* Algorithms. These algorithms are used to search the tree and find the shortest path from starting node to goal node in the tree.

Pathfinding algorithms address the problem of finding a path from a source to a destination avoiding obstacles and minimizing the costs (time, distance, risks, fuel, price, etc.). This is a common programming challenge. Mainly known from navigation and games, we will find that the core algorithms apply to a huge range of problems.
 */


/*

*Graphs--------------------<<<

A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines

   b------d
 / |     | \
a  |     |  f
 \ |     | /
  c------e

g: orderd pair
v: set of vertices (Object)
e: set of edges (Relations)

g = (v, e)

v= {a,b,c,d,e,f}
e= {
    (a, b),
    (a, c),
    (b, c),
    (d, b),
    (c, e),
    (d, e),
    (d, f),
    (e, f)
}


*orderd pair*
    (a, b) != (b, a)    if (a != b)

*unorderd pair*
    (a, b) = (b, a)


each node have some identification (not any specific order)
   b------d
 / |     | \
a  |     |  f
 \ |     | /
  c------e

a = v1
b = v2
c = v3
e ...



*two type of graph*
Directed      a---->b  (link, path, this dircetion is one way) a: origin, b: destination
Undirected    a-----b  (direction not fixed)



*social network graph is undirected graph (Facebook)*
how work in social graph
for ex: friend suggestions


*Interlinked directed graph*
pageA -----> pageB ------> pageC, pageD, pageZ


search engin using web-crawling
is
Graph Traversal




*Weighted vs Unweighed*

*Weighted*
: labeled some values (200km) on edge
: Intercity road network is weighted and directed graph 

*Unweighted*
: unit a weighted graph with all edges having (weight = 1) :all edges is same
: social graph is unweighted graph.
: world wild web is directed or unweighted graph





*/ 
