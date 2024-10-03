# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

From class lecture slides/video we discussed that the mergesort run time will be $\Theta(nlogn)$. With this knowledge, I continued on from the proof explained in the slides and understood that since there is a nested loop this changes the complexity to $\Theta(n^2 log(n))$. This new complexity would also be the worst case of runtime complexity after combinging the implementation of the outer loop, the inner loop, and the merge function itself. 

I used lecture slides and the videos provided from class. I also used geeksforgeeks: https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/ to help explain the overall time complexity of merge sort. I jumped to this exercise because I had just worked on divide and conquer so I also used some logic and resources previously referrenced in that exercise.

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
