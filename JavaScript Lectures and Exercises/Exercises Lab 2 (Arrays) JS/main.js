// JavaScript - Lab 2 2-01-20

// Exercise 1

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const pickDay = (i) => {
  day = days[i];
  return day;
} 
document.write(pickDay(5));




// Exercise 2

const numbers = [1, 2, 3, 4];

const remove = (arr) => {
  lastNumber = arr.pop();
  return lastNumber;
};
console.log(remove(numbers));

//  Exersice 3

 const arr = [2, 3, 4];
 const unshift = [0, 1];
 const push = [5, 6, 7];

 const newArray = (num) => {
    num.push(push);
    num.unshift(unshift);
    return num;
 }
  document.write(newArray(arr));

// Exersice 4

const oldArr = [1, 2, 3];

const withOutFirst = (arr) => {
  arr.shift();
  return arr;
}
document.write(withOutFirst(oldArr));


//  Exercise 5

const checkLength = (string1, string2) => {
  if(string1.length > string2.length){
    return "Fist is longer";
  } else if(string1.length < string2.length) {
    return "Second is longer.";
  } else {
    return "They are equal length";
  };
} ;
document.write(checkLength("yes", "yes"));

// Exercise 6

const food =["pizza", "tacos", "burgers", "hot dog", "rice"];

const lastArray = (arr) => {
  foods = arr.slice(0, arr.length-1);
  return foods;
}
document.write(lastArray(food));

// Exercise 7

const oldArray = [1, 2, 3];

const re = (arr) => {
  rearr = arr.reverse();
  return rearr;
}
document.write(re(oldArray));

// Exercise 8

const food = ["burgers ",  "fries ",  "onion rings"];

function foodPrinter(arr) {
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    document.write(arr[i]);
    document.write("<br></br>");
  }
}
 foodPrinter(food);


// Exercise 9

const food = ["onion rings", "fries", "burgers"];

const order = (arr) => {
  foods = arr.sort();
  return foods;
}
document.write(order(food));

// Exercise 10

const food = ["onion rings", " fries", " burgers"];

const checker = (arr) => { 
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5){
      newArr.push(arr[i]);
      
    }
  } return newArr;
}

document.write(checker(food));




