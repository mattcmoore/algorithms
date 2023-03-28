## All possible permutations

 You have been tasked with solving a backtracking problem in JavaScript. Your goal is to generate all possible permutations of a given set of numbers. For example, if the set is [1, 2, 3], the possible permutations are:

[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]


To accomplish this, you must implement a backtracking algorithm that explores all possible solutions by incrementally building candidates to the solutions and rejecting a candidate if it fails to satisfy the problem's constraints. The constraint, in this case, is that each permutation must use all elements in the set exactly once.

#### Your implementation must include a function that takes the set of numbers as input and returns an array of all possible permutations. You may assume that the input set is of reasonable size (e.g., less than 10 elements) and does not contain duplicates.