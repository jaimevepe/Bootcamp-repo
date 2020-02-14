const name = prompt("Tell me your name.");
const num1 = prompt("Give me a number.");
const num2 = prompt("Give me another number.");



function greet  (name) {
    return `You are going to have a wonderful day, ${name}.`;
};
function sum  () {
    return `By the way , the sum of your numbers is ${parseInt(num1) + parseInt(num2)}.`;
};
document.write(greet(name) + "<br>" + sum());
