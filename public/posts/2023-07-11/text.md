---
title: 'Proof by cases'
date: '2023-07-11'
---
I have always wondered why proof by cases works. Well, if you too are wondering, then you've come to the right place!

In the first image <FigureButton fname = '2023-07-11/images/pg1.png'>, suppose we assume the statement <HighlightedText backgroundColor='yellow' text='A or B or C'> where A, B, C are individual statements that can be either true or false, but not both! Also, assume there are other statements containing the sentences A, B, C, and F.

If you're not familiar with how "or" works in logic, our statement is true if and only if at least one of A, B, or C is true. In other words, <HighlightedText backgroundColor='green' text='the statement is false if and only if ALL of A, B, and C are false!'> 

Anyways, as we can see in the figure, we need to somehow show the statement F. 

Lets take a look at the second image <FigureButton fname='2023-07-11/images/pg2.png'>.

Suppose we were able to come up with a way of showing F is true by assuming A alone first, then B alone, then C alone. This is basically how one would prove by cases, and we would complete the proof. <HighlightedText backgroundColor='red' text='But why exactly does this prove F?'>

Lets take a look at image <FigureButton fname='2023-07-11/images/pg3.png'>. Using our assumption of <HighlightedText backgroundColor='yellow' text='A or B or C'> and the statements we've proven so far, we can prove F. For this, we need to prove by contradiction.

What is proof by contradiction? It involves assuming the opposite of the statement being proven (in our case F) and then deriving a contradiction from that assumption. This contradiction shows that the opposite of the original statement cannot be true, and so the original statement must be true!

In the image, we can see that by assuming the opposite of F (~F), we were able to derive ~A, ~B, and ~C! But this contradicts our statement <HighlightedText backgroundColor='yellow' text='A or B or C'>! So, F must be <HighlightedText backgroundColor='green' text='true'>!

You might be wondering how, let's say, the statements ~F and <HighlightedText backgroundColor='yellow' text='A -> F'> give us ~A? Lets look at the fourth image <FigureButton fname='2023-07-11/images/pg4.png'>.

In logic, statements of the form <HighlightedText backgroundColor='yellow' text='A -> F'> is known as a <HighlightedText backgroundColor='green' text='conditional statement'>. Here are the possibilites of the truth values for <HighlightedText backgroundColor='yellow' text='A -> F'>:

If A is <HighlightedText backgroundColor='green' text='true'> and F is <HighlightedText backgroundColor='green' text='true'>, the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='green' text='true'>.

If A is <HighlightedText backgroundColor='green' text='true'> and F is <HighlightedText backgroundColor='red' text='false'>, the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='red' text='false'>.

If A is <HighlightedText backgroundColor='red' text='false'>, the truth value of F does not affect the truth value of the entire statement <HighlightedText backgroundColor='yellow' text='A -> F'>. So, it is always <HighlightedText backgroundColor='green' text='true'>!

In other words, <HighlightedText text='A -> F is false if and only if A is true and F is false!' backgroundColor='green' >

Back in <FigureButton fname='2023-07-11/images/pg3.png'>, since we know <HighlightedText backgroundColor='yellow' text='A -> F'> is <HighlightedText backgroundColor='green' text='true'> (we showed this), and that F is <HighlightedText backgroundColor='red' text='false'> (we assume this), then we must have that A is <HighlightedText backgroundColor='red' text='false'>!
