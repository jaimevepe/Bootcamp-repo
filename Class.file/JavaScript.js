


    //setInterval(function() {
      //  document.write("Will you be my friend? please? ill give you money!"); }, 2000);

       //function hello(){
          // document.write("Will you be my friend? Please? I'll give you money!")
       // }
//setInterval(hello, 3000);

//function isHighest(x, y, z){
    //container to hold the highest number
  //  var maxvalue = 0;
  //  if (x > y) {
  //      maxvalue = x;
  //  } else{
  //      maxvalue = y;
  //  } 
  //  if(z > maxvalue){
  //      maxvalue = z;
  //  }
 //   return maxvalue;
//}
//function isHigh(x,y,z){
 //   document.write(Math.max(x,y,z));
//}
//isHigh(3, 5, 7);


// function factorialize(num) {

//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }

  /*
  function factorial(number){
      //well acumulate the answers unto result
      var result = 1;
      for(var i = 1; i <= number; i++){
          result = result * i;
          //result *= i
      }
    
  }
  */


var names = ['Reed', 'Susan', 'Ben', 'Johnny', 'Franklin'];

console.log(names[0]);     //outputs 'Reed'

console.log(names[3]);     //outputs 'Johnny'

Different Array

var pets = ['Moxxi', 'Pickle', 'Hootchie', 'Monkeybutt'];
console.log(pets);

// pets.forEach() is a kind of loop for Arrays

pets.forEach(function(element){
  console.log(element);
});

var fruits = ["Apple", "Banana", "Orange", "Apple", "Mango"];

var fruits = ["banana", "oranges", "peaches", "apples", "blueberries"];

fruits.shift();  will remove the first item (banana)
fruits.pop(); will remove the last item
fruits.unshift(); will add an item to the begining of the Array
fruits.push(); will remove the last item from the Array

var numbers = [4, 9, 16, 25];
// Math.sqrt will squareroot the numbers within the Array
var squareRoots = numbers.map(Math.sqrt);
console.log(squareRoots);
// will divide numbers with in Array by 2
numbers.map(function(num){
  return num / 2;
})



for(var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i]*2;
}

console.log(numbers);


// Objects Leture 2-05-2020

var person = {
name: "Walter White",
age: 50,
city: "Albuquerque",
hobbies: "cooking"
}
// This is dot notation
person.name // Walter White
person.hobbies // cooking

// Bracket notation
person["name"] // Walter White
person["age"] // 50

// Way to update Object
person.name = "Heisenberg";
person["hobbies"] = "cooking blue stuff";

// Other way of making an object
// This assigns an empty array to person variable
var person2 = {}
// These assign values to person object names
person2.name = "Walter White";
person2.age = 50;
person2.city = "Albuquerque";
person2.hobbies = "cooking";

// Other Objects

var person3 ={
name: "Walter White",
age: 50,
family: ["skylar", "Flynn", "Holly"],
city: "Albuquerque",
smart: true, // Boolean
associates: {
  friend: "Jesse",
  enemy: "Gus"
},
hobbies: "cooking"
}
 person3.name // Walter
 person3.family[1]; // to access Flynn in Array
 person3.associates.enemy // Gus (object within an object)

 // other Object stuff
 
 var eggs = {
   butter: "sure, lots of it",
   saltNPepper: true,
   cooking: [
     {recipe: "Scrambled"},
     {recipe: "Fried"},
     {recipe: "Soft boiled"}
   ],
   tasty: true
 }

 



