const readlineSync = require('readline-sync');

// Using node and the readline-sync package, create a JavaScript file that asks three questions in the Terminal:

//  “What is your name?”

//  “What is your favorite food?”
 
//  “What is your favorite drink?”

let name = readlineSync.question('What is your name? ')
let food = readlineSync.question('What is your favorite food? ')
let drink = readlineSync.question('What is your favorite drink? ')

// When you run the file, the program should respond with the sentence:
//  “Hi ____, your favorite food is _____ and your favorite drink is ____.”
let result = `
    Hi ${name}, your favorite food is ${food} and your favorite drink is ${drink}.
`
console.log(result);