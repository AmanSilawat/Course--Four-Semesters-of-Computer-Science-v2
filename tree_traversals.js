/*
** Tree Traversals **

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

*/