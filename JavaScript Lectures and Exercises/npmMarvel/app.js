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