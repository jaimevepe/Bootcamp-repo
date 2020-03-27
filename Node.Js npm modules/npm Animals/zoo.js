const Log = require('log.pets');
const animals = require('animals');

// Get a random animals name to appear in the console using the “animals” package.
// console.log(animals());

// Get a lion ascii art to appear using the “Log.pets” package.
console.log(Log.lion())

// Can you use them both together so that the animal names from the “animals” package 
// appear on the zoo sign from the Log.zoo method in the “Log.pets” package.
let results = Log.zoo(animals(), animals(), animals())

console.log(results)

// Can you display the number of animals available for the generator?
console.log(`# of animals in generator: ${animals.words.length}`)


// Using array methods, how many animals start with the letter 'G', or display an error message if none found?
let results2 = animals.words.filter(data => {
    return data.substring(0,1) == "G"
});
console.log("# of animals starting with G: ", results2.length != 0 ? results3.length : "No matches found")

// Using array methods, and the "G" from above, how can you display number of animals starting with that letter, or display an error message if none found?
let results3 = animals.words.filter(data => {
    return data.substring(0,1).toUpperCase() == "G"
})

console.log("# of animals starting with G: ", results3.length != 0 ? results3.length : "No matches found")
