---
title: 'Proof by cases'
date: '2023-07-11'
---
I have always wondered why proof by cases works. Well, if you too are wondering, then you've come to the right place!

In the first image <FigureButton 2023-07-11/images/pg1.png>, suppose we assume the statement "A or B or C" where A, B, C are individual statements that can be either true or false, but not both! Also, assume there are other statements containing the sentences A, B, C, and F.

If you're not familiar with how "or" works in logic, our statement is true if and only if at least one of A, B, or C are true. In other words, the statement is only false when ALL of A, B, and C are false!

Anyways, as we can see in the figure, we need to somehow show the statement F. 

Lets take a look at the second image <FigureButton 2023-07-11/images/pg2.png>.

Suppose we were able to come up with a way of showing F by assuming A first, then  B, then C last. This is basically how one would prove by cases, and we would complete the proof. But, why exactly does this prove F?

Lets take a look at image <FigureButton 2023-07-11/images/pg3.png>. Using our assumption of "A or B or C" and the statements we've proven so far, we can actually prove F. For this, we need to prove by contradiction.

What is proof by contradiction? It involves assuming the opposite of the statement being proven (in our case F) and then deriving a contradiction from that assumption. This contradiction shows that the opposite of the original statement cannot be true, and so the original statement must be true!

In the image, we can see that by assuming the opposite of F (~F), we were able to derive ~A, ~B, and ~C! But this contradicts our statement "A or B or C"! So, we are able to show F!

You might be wondering how does, lets say, both statements ~F and "A -> F" give us ~A? Good question! Lets look at the fourth image <FigureButton 2023-07-11/images/pg4.png>.

In logic, statements of the form "A -> F" is known as a conditional statement. Here are the possibilites of the truth values for "A -> F":

If A is true and F is true, the entire statement "A -> F" is true.

If A is true and F is false, the entire statement "A -> F" is false.

If A is false, the truth value of F does not affect the truth value of the entire statement "A -> F". So, it is always true!

In other words, "A -> F" is false if and only if A is true and F is false!

Back in <FigureButton 2023-07-11/images/pg3.png>, since we know "A -> F" is true (we showed this), and that F is false (we assume this), then we must have that A is false!
