---
title: 'Proof by cases'
date: '2023-07-11'
---
I have always wondered why proof by cases works. Well, if you too are wondering, then you've come to the right place!

In the first image <FigureButton fname = '2023-07-11/images/pg1.png'>, suppose we assume the statement <HighlightedText backgroundColor='yellow' text='A or B or C'> where A, B, C are individual statements that can be either true or false, but not both! Also, assume there are other statements containing the sentences A, B, C, and F.

If you're unfamiliar with the logical operation of "or", our statement holds true if and only if at least one of A, B, or C is true. In other words, <HighlightedText backgroundColor='green' text='the statement is false if and only if ALL of A, B, and C are false!'> 

Anyways, as we can see in the figure, we need to somehow show the statement F. 

Lets take a look at the second image <FigureButton fname='2023-07-11/images/pg2.png'>.

Imagine we establish the truth of F by initially assuming A alone, followed by B alone, and then C alone. This approach is basically how proof by cases works, leading to the completion of the proof. <HighlightedText backgroundColor='red' text='But why exactly does this prove F?'>

Lets take a look at image <FigureButton fname='2023-07-11/images/pg3.png'>. Using our assumption of <HighlightedText backgroundColor='yellow' text='A or B or C'> and the statements we've proven so far, we can prove F. For this, we need to prove by contradiction.

What is proof by contradiction? It involves assuming the opposite of the statement being proven (in our case F) and then deriving a contradiction from that assumption. This contradiction shows that the opposite of the original statement cannot be true, and so the original statement must be true!

In the image, we can see that by assuming the opposite of F (~F), we were able to derive ~A, ~B, and ~C! But this contradicts our statement <HighlightedText backgroundColor='yellow' text='A or B or C'>! So, F must be <HighlightedText backgroundColor='green' text='true'>!

You may be curious about how the expressions ~F and <HighlightedText backgroundColor='yellow' text='A -> F'> lead to the conclusion of ~A? Lets look at the fourth image <FigureButton fname='2023-07-11/images/pg4.png'>.

In logic, statements of the form <HighlightedText backgroundColor='yellow' text='A -> F'> is known as a <HighlightedText backgroundColor='green' text='conditional statement'>. Here are the possibilites of the truth values for <HighlightedText backgroundColor='yellow' text='A -> F'>:

If A is <HighlightedText backgroundColor='green' text='true'> and F is <HighlightedText backgroundColor='green' text='true'>, the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='green' text='true'>.

If A is <HighlightedText backgroundColor='green' text='true'> and F is <HighlightedText backgroundColor='red' text='false'>, the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='red' text='false'>.

If A is <HighlightedText backgroundColor='red' text='false'>, the truth value of F does not affect the truth value of the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'>. So, it is always <HighlightedText backgroundColor='green' text='true'>!

In other words, <HighlightedText text='A -> F is false if and only if A is true and F is false!' backgroundColor='green' >

Back in <FigureButton fname='2023-07-11/images/pg3.png'>, since we know <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='green' text='true'> (we showed this), and that F is <HighlightedText backgroundColor='red' text='false'> (we assume this), then we must have that A is <HighlightedText backgroundColor='red' text='false'>!
