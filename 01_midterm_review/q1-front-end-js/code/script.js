var firstNum = document.getElementById("first").Value;
var secondNum = document.getElementById("second").value;
var prodcut = parseInt(firstNum) * parseInt(secondNum);
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")

$(".btn").on("click", function(){
   let answer = multiply(firstNum, secondNum)
   msg.innerText = `The answer is ${answer}`
})

// const multiply = function(a, b) {
   
//    console.log(a*b)
// } 
