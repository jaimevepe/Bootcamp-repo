// var myName = "jaime";
// function emptyFunction() {
//     var lastName = "Velaz";
//     console.log(myName);
//     console.log(lastName);
// };
// emptyFunction();
// console.log(lastName);
// you cant get the lastName inside function because it is not outside the scope(global)

// var a = 5;
// function mytestFn() {
//      a = 20
   
// };
// mytestFn();
// console.log("var a is :", a);


// ES6

// let is blocked scoped
// visible only within the block

// var a = 1; var b = 2;

// {
//     var a = 10;
//     let b = 20;
// }
// console.log('a is :', a);
// console.log('b is :', b);

// let overrode a in the global scoped

// const a = 10;

// function myFn() {
//     a = 20
// }
// mytestFn();
// a = 0;
// const wont allow a's value to change, so you will get an Error

// var a = { name: 'Univ of Texas', place: 'Austin' }
// var b = { name: 'Univ of Texas', place: 'Austin' }
// if ( a === b) {
//     console.log('equal');
// } else {
//     console.log('not equal');
// };
//They are two sep objects so they arent equal

// ** primatives copy by value, objects copy by reference **

// Const reference cannot be changed
// const contents can be changed, they are mutable
// primatives arent mutable
// objects are mutable

// const a = 10;
// a =11 // fails cannot be changed

// const b = { school: "ACC"}
// b.school = 'UT'  // succeeds, as it changing the contents of the object


// function myFn(argument) {
//     console.log('this is where stuff happend');
// };

// function reference :
const myFn = function(argument) {
    console.log('this is where stuff happend');
}
//invoking or calling a function
myFn();

var name = 'Bob';

var age = 36;

var speak = 'woof';

var text =  `Fred said, "${name}'s real age is ${age} and his dog said '${speak}'!"`
console.log(text);
// back tic `
//Template literals allow you to "literally" biuld your string
// using ${var} to represent your variables.

const double = arg => (  //parentheses not nedded for single arg
    'this is a double: (' + arg*2 + ')' // implied return
);

//Tenary Operators
// to see if someone is over 21
function buyAlcohol(age) {
    let message = age > 21 ? 'you can buy alcohol' : 'you are to young'
    console.log(message);
};
buyAlcohol(25);

// age > 21 is IF, ? is TRUE or FALSE, THEN buy alc, : is ELSE
// ES6 version
const buyAlcohol = age => (
    age > 21 ?
    'you can buy alcochol' :
    'you are to young'
);



