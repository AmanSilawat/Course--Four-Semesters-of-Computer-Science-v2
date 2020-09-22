/*
**** Bloom filters ****
Bloom filters are probabilistic space-efficient data structures. They are very similar to hashtables.


A Bloom filter is a data structure designed to tell you, rapidly and memory-efficiently, whether an element is present in a set.

The price paid for this efficiency is that a Bloom filter is a probabilistic data structure: it tells us that the element either definitely is not in the set or may be in the set.





**** Tree Traversals ****

Binary Search Tree (BST)
            8
           / \
         /     \
        3      10
      /  \        \
     1    6        14
         / \      /
        4   7    13

Trees are an essential part of storing data, trees can be traversed in different ways.

Depth First Traversals:
(a) Inorder (Left, Root, Right) : [1, 3, 5, 6, 7, 8, 10, 13, 14]
(b) Preorder (Root, Left, Right) : [8, 3, 1, 6, 4, 7, 10, 14, 13]
(c) Postorder (Left, Right, Root) : [1, 4, 7, 6, 3, 13, 14, 10, 8]


========================
** Tree Queue digram **

Binary Search Tree (BST)
            A
           / \
         /     \
        B       C
      /  \     /  \
     D        E    F
             /
            G

REST A [A]

     A [B, C]    B is dequeue
     B [C, D]    C is dequeue
     C [D, E, F] D is dequeue
     D [E, F]    E is dequeue
     E [F, G]    F is dequeue
     F [G]       G is dequeue
     G []        EMPTY ARRAY









**** Path Finding ****
https://medium.com/@urna.hybesis/pathfinding-algorithms-the-four-pillars-1ebad85d4c6b

What’s the shortest drive from our place to the nearest park?
How do we find a way through a maze?
Can we program a game character to find the exit avoiding enemies?

Pathfinding algorithms address the problem of finding a path from a source to a destination avoiding obstacles and minimizing the costs (time, distance, risks, fuel, price, etc.). This is a common programming challenge. Mainly known from navigation and games, we will find that the core algorithms apply to a huge range of problems.






**** Graph ****
What is a Graph?

A graph is a collection of nodes where each node might point to other nodes. These nodes are connected to each other through a set of edges. Graphs are similar to trees but trees follow certain rules when it comes to its edges:
For a tree with N nodes, it will have (N-1) edges; one edge for each parent-child relationship. All nodes must be reachable from the root and there must be exactly one possible path from root to a node. If you haven’t learnt about trees, have a read here before you dive into graphs.

In graphs, there are no rules dictating the connection among the nodes.


Edges can be of two types:

1. Directed edges in which connections are one-way (Unidirectional). One of the end points is the origin and the other end point is the destination.

2. Undirected edges in which connections are two-way (Bidirectional).








**** Generating a Maze ****
We're going back to working on mazes but with slightly different twist. With pathfinding we were trying to find the shortest path between point A and point B. In this lesson we're going to be trying to generate a random and curvy maze. I find this to be a pretty fun exercise.








**** Tries ****
this data structure makes it easy to retrieve data, so trie is said just like it is there, tree.

  a – [various children]
 /
b – o – s – t – o – n
     \
      i – s – e

      
      OR


| their, there, answer, any, bye

                     < root >
                    /   \    \
                    t   a     b
                    |   |     |
                    h   n     y
                    |   |  \  |
                    e   s  y  e
                 /  |   |
                 i  r   w
                 |  |   |
                 r  e   e
                        |
                        r

Tries is one of the data structure used in string manipulations. It is used in situations where store and retrieve strings based on the prefix. Eg: search engines

In tries, strings are stored as trees of characters. Links are made according to the way they appear in each of the string.

Following tree(trie) is build by storing strings of,










**** Searching for an Element in an Array ****

There are essentially two common ways of doing search: linear search and binary search. The former is the simplest code and really only useful if the list you're searching on is not sorted in any way. You just go through from 0 to the length of the array and ask "is the is the element I'm looking for?" No frills here. Its complexity is O(n).










**** Heap Sort ****

https://medium.com/cracking-the-data-science-interview/heap-sort-merge-sort-and-convex-hull-4cd108ae3ed4

A heap is really nothing more than a binary tree with some additional rules that it has to follow: first, it must always have a heap structure, where all the levels of the binary tree are filled up, from left to right, and second, it must either be ordered as a max heap or a min heap. I’ll use min heap as an example.

A heap sort algorithm is a sorting technique that leans on binary heap data structures. Because we know that heaps must always follow a specific order, we can leverage that property and use that to find the smallest, minimum value element, and sequentially sort elements by selecting the root node of a heap, and adding it to the end of the array.













**** Redix ****
  Implement a radix sort in a function called radixSort.
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.
  
  If you need help understanding radix sort, see https://btholt.github.io/four-semesters-of-cs-part-two/radix-sort
  
  You can visualize each iteration of bucketing and emptying of buckets by calling snapshot(array) at the end of each
  loop. It'll tell you how many iterations you've gone through where it says `Comparisons` at the top.
  
  You can see what happens with bigger numbers if you change the first unit test to be `xit(...)` and the second unit
  test to be `it`.

*/