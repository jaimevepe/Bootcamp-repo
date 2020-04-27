In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  
-push()
-unshift()
-length
- .splice()

<!-- Correct -->

Provide example code showing the use of each of the methods you list. (40% credit)

-var arr = [1, 2, 3, 4];
-arr.push(5); // [1, 2, 3, 4, 5]
-arr.unshift(0); // [0, 1, 2, 3, 4]
-arr[arr.length] = 5 
consolelog(arr) // [1, 2, 3, 4, 5]
-arr.splice(4, 0, 5, 6, 7) // [1, 2, 3, 4, 5, 6, 7]

<!-- Correct -->

How do you remove a particular member from the array?  Provide small sample. (35% credit)

var arr = [1, 2, 3, 4]

arr.pop(); // [1, 2, 3]
arr.shift(); // [2, 3, 4]

<!-- This is not a particular member -->