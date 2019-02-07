# TriviaGame
JavaSscript Assignment 2
This assignment started out with good intentions:
To create a fun, interactive, game that was based on the music by the reggae music legend, Robert Nesta 'Bob' Marley. 
I had the good fortune of meeting him in his Kingston, Jamaica home in 1976 while there as an exchange student and thought this would be a fitting tribute.
**However, rather than enter the murky waters of music copyright laws, I chose to avoid those potential complications. 
As a result, we now have a relatively straightforward test that is based on basic cardiopulmonary resuscitation, CPR.  After all, would you know what to do if someone close to you suddenly became unresponsive and pulseless?  
Hopefully we can learn something about the complex, but wonderful you.  
Basic question were chosen to make this humerous rather than a structured pedegogical approach.  It is nonetheless a proof of concept.
The timer gave me the most challenge as I sought to understand how each line, that worked, until I broke it. LOL!
Great learning experiences come from challenges.
/* 
Thanks to Karina I found a good description of modulo/modulus, which is the “%” symbol here 
@ https://en.m.wikipedia.org/wiki/Modulo_operation  What is happening is the timer takes the 
total time (let’s say 100 seconds) and it assigns minutes by dividing 100 by 60.  It finds 
seconds similarly using the modulus. 60 goes into 100 exactly 1 time and leaves a remainder 
of 40 and this would used to calculate the seconds. (edited)

With study and practice, I found out that the timer code could be much simpler and function just as well once
I used parseInt() to rid the pesty NaN error I was getting.  

I also discovered that it is easier to manipulate an array within an array, than trying to retrieve embedded objects
within the array.  Changing the structure of the array made it easier to complete the test.

Instead of using ajax calls to the giphy api, I decide to assign the full file and path name to the variables that would produce the results for correct or incorrect answers.  

Extending the test questions to make it a fun 'pre-test' for anyone considering taking either the American Heart Association
or Red Cross CPR course.  This is NOT for health care practicioners, but could be adapted to accomplish the written
portion of the BLS, ACLS, PALS, etc. with very little effort.