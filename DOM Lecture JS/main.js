// var food = document.getElementById("fruit");


// var food2 = document.getElementsByClassName("breakfast");
// console.log(food2);


// var food3 = document.getElementsByTagName("li");
// console.log(food3[0]);


// var food4 = document.querySelector(".breakfast");


// var food5 = document.querySelectorAll("h1");


// document.getElementById("fruit").style.color = "green";
// document.getElementById("fruit").style.border = "10px solid orange";
// document.getElementById("fruit").style.fontSize = "36px";
// document.getElementById("fruit").style.background = "blue";
// document.getElementById("fruit").style.marginTop = "150px";

// var color = document.body.style.backgroundColor = "orange";
// var myColors = ['blue', 'orange'];

// var currentColorIndex = 0;

// document.body.style.backgroundColor = myColors[1]

// setInterval(function (){
//     document.body.style.backgroundColor = myColors[currentColorIndex];
//     currentColorIndex += 1;
//     if (currentColorIndex === myColors.length){
//         currentColorIndex = 0;
//     };
// }, 1000);

//another way to change background (that didnt work)


// function colorChange ()  {
//     var doc = document.getElementsByTagName("body"[0]);
//     var color = ['blue', 'orange'];
//     for (let i =0; i < color.length; i++) {
//         doc.style.backgroundColor = color[i];
    
//     }
// }
// colorChange();
// setInterval(colorChange, 2000);

// another way that did work


var colors = ["blue", "orange"]
var colorIndex = 1;
function colorChange(){
document.bgColor = colors[colorIndex]
colorIndex = (colorIndex -1)% colors.length
}
function startColor(){
    setInterval("colorChange()", 1000)
}
window.onload=startColor;

// document.querySelector("li").textContent = "Sold out! Check again tomorrow.";

// document.querySelector("ul").innerHTML;

// document.querySelector("li").innerHTML = "Chocolate <b>Hazelnut</b> croissant";

// this will change the href on the a tag and set a new http address.

// document.querySelector("a").getAttribute("href");
// document.querySelector("a").setAttribute("href", "http://www.amazon.com");

// EVENTS

// document.querySelector("button").addEventListener("click", function() {
//     alert("How's it going?")}
//     );

    // once you hover over h1 one the p will change to whatever the string is

    // document.querySelector("h1").addEventListener("mouseover", function () {
    //     document.querySelector("p").textContent = "Chicken butt";
    // });


var dogArr = ["images/dog1.jpeg", "images/dog2.jpeg", "images/dog3.jpeg"];

var index = 1;

var img = document.querySelector("img");
console.log(img);

img.addEventListener("click", function(){
   document.querySelector("img").setAttribute("src", dogArr[index]);
   index += 1;
  if (index == dogArr.length){
      index = 0;
  }
} );



