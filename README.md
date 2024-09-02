# Binary Search

Implement a binary search function that, given a sorted list and an element to
look for, returns the index of the element in the list or -1 if the element is
not there.

Use the template in `code.js`. The tests in `code.test.js` will be run
automatically every time you push to Github; if they pass you are done.


https://www.youtube.com/watch?v=7lGiPItOVCM  - used to explain binary sort 

chatgpt - explained Math.floor utility for middleIndex function 

try 2 
implemented a "answer" variable that would store the target, used this to take care of the duplicate number case which failed me the first time
by having it explore the left side of the array in case there was a first iteration of the number before


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.



set left index to 0 as it starts there 


set right to length of list -1 as index starts at 0 


set answer to -1 automatically if answer not found 


to find middle index divide the left and right index by 2 or exit in case if its a empty array


if target is middle index, returns middle index stored within variable answer


to check for duplicates, it'll look through left side of array incase that number was repeated already before hand


ie  [1,4,4,4,4,8,9,10]  middle is found at 4 but searches through to see that 4 really started at index 1 


if target is above middle index, searches right half of the array 


if target is under middle index, searches left side of the array 


returns "answer" if there was one found being the index of target or -1 if not found 
