const num1 = prompt("Give a number.");
const num2 = prompt("Give a another number.");
const num3 = prompt("Give a number again.");

const newNum1 = parseInt(num1);
const newNum2 = parseInt(num2);
const newNum3 = parseInt(num3);

const addArray = [];
addArray.push(newNum1, newNum2, newNum3);

console.log(addArray);

const sumArray = () => {
    result = 0;
    for(let i = 0; i < addArray.length; i++) {
        result = result + addArray[i];
        console.log(result);
    };
    return result;
}
document.write(`The sum of all of your numbers is ${sumArray()}`);