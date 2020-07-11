### Question:

What are iterator functions?  What would be your choice of an iterator
function to loop over the elements of an object?  What would be your 
choice of an iterator for arrays? Provide simple examples with your
brief comments?

### :

iterator functions are new ways to iterate through any collection in JavaScript.
To iterate over object elements, I would use Object.entries() or Object.keys() and chain a .map()
like Object.keys(Objs).map(obj => {
    console.log(obj)
})
For arrays I could use forEach or a regular loop.
myArray.forEach(stuff => {
    console.log(stuff)
})