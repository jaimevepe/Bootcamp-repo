// var myFn = function test(){
//     console.log("The first this: ", this);
//     this.myVar = 'HA HA';
//     console.log("The second this: ", this);
// }

// myFn();
// console.log("This is myVar: ", myVar);



// var myObj = {
//     name: 'my object',
//     myMethod: function(){
//         console.log(this.name);
//     }
// };

// myObj.myMethod(); // what will this.name give you?




// var myObj = {
//     name: 'my object',
//     myMethod: function(){
//         console.log("The first this: ", this);
//         function myInnerMethod(){
//             console.log("Second this: ", this);
//         };
//         myInnerMethod();
//     }
// }
// myObj.myMethod();

// 293 kelvin temp saved in kelvin variable


////////////////////////////////////
// Calculating/Converting kelvin to fahrenheit Project
// const kelvin = 293

// //in order to convert kevil to celsius, we must subtract 273 from kelvin
// // difference is that Celsius is 273 degrees less than Kelvin.
// const celsius = kelvin - 273;

// // equation used to calculate fahrenheit
// // celsius * (9/5) + 32
// let fahrenheit = celsius * (9/5) + 32;

// //to not get a decimal number, I used .floor() method to round down the temperature
// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// //////////////////////////////////////////////////

// // saved my age in a variable
// let myAge = 27;

// // saved 2 in early years variable, i assume its the dog's years
// let earlyYears = 2

// earlyYears *= 10.5;

// let laterYears = myAge - 2;
// //Subtracted 2 from 27(myAge) and checked if it worked on the log.
// console.log(laterYears);


// // multiplying 4 to later Years to calculate number of dog years accounted for by my later Years
// laterYears *= 4;
// console.log(laterYears);

// // adding variables and storing in my age in dog years
// let myAgeInDogYears = earlyYears + laterYears;
// console.log(myAgeInDogYears);

// //Saving my name in variable and making it lowercase
// const myName = 'Jaime'.toLowerCase();

// //Console logging using template literals
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `)

