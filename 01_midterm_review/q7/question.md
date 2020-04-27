### I'd like to empty the array below. Please provide any 2 methods with examples and explain in brief how to empty it.

var myArray = [1, 2, 3, 4, 5]      // it may have any number of elements

(
    Hints: 
        Method 1: overwrite the array with empty array (shown below, don't use this)
        Method 2: by the length property method
        Method 3: using the splice Array method
        Method 4: by popping each member of the array in a loop.
        Method 5: anything you come up with
)

### Sample answer:

    myArray = []    // will replace the original myArray with an empty array

### Your answers:

var myArray = [1, 2, 3, 4, 5]

const newAr = (arr) => { 
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5){
      newArr.push(arr[i]);
      
    }
  } return newArr;
}
console.log(newAr(myArray));

<!-- This function does not empty myArray it returns a new empty array -->