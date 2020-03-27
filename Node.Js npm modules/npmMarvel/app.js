var marvel = require('marvel-characters')
 
// random character
// console.log(marvel.characters);

// Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.
var list = marvel.characters;
var newList = [];
var charCheck = () => {
  for (var i = 0; i < list.length; i++) {
    if (list[i].startsWith("Man")) {
      newList.push(list[i]);
    }
  }
  console.log(newList);
};
charCheck();

// Display “Iron Man” in your terminal, or an error message if does not exist
marvel.characters.forEach(function(name, index){
    if (name == 'Iron Man') {
    console.log('Ironman');
    }
    });



    // Instructors Code

let charLength = marvel.characters.length

console.log('# of characters in the db: ', charLength)

// Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.
let results1 = marvel.characters.filter((data)=>{
    return data.substring(0,3) == 'Man'
})

console.log(results1.length != 0 ? results1 : "No matches found")

// Display “Iron Man” in your terminal, or an error message if does not exist
let results2 = marvel.characters.filter((data)=> {
    return data == "Iron Man";
})

console.log(results2.length != 0 ? results2 : "No matches found")

// Display “Batman” in your terminal, or an error message if does not exist
let results3 = marvel.characters.filter((data)=> {
    return data == "Batman";
})

console.log(results3.length != 0 ? results3 : "No matches found")