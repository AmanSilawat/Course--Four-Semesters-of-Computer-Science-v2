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