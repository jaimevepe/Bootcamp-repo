/* 
Select the section tag with getElementByID
Select the section tag without using getElementByID
Select all list items with a class of “first”
Select the list item with class of “second” in the unordered list
Select the div with class of “top” and give it the text “I’m going bananas over here!”
Select all li tags on the page using TWO different selector methods

*/

// var food = document.getElementById("middle");
// var food1 = document.querySelectorAll("#middle");
// console.log(food);
// console.log(food1);

// var food2 = document.getElementsByTagName("section");
// var food3 = document.querySelectorAll("section")
// console.log(food2);
// console.log(food3);

// var food4 = document.getElementsByClassName("first");
// var food5 = document.querySelectorAll(".first");
// console.log(food4);
// console.log(food5);

// var food6 = document.getElementsByClassName("second");
// var food7 = document.querySelectorAll(".second");
// console.log(food6);
// console.log(food7);

// var food8 = document.querySelector(".top").innerHTML = "I'm going bananas over here!";

// var food9 = document.getElementsByTagName("li");
// var food10 = document.querySelectorAll("li");
// console.log(food9);
// console.log(food10);


/* Write the code that will do the following:

Make a button. When the user clicks on it, an alert box says 
“How’s it going?”

Create an H1 tag with some text inside of it. 
When a user hovers over the H1, the text changes to say 
“What are you doing?”
*/

var button = document.querySelector("button");
console.log(button);

button.addEventListener("click", function () {
    alert("How's it going, stupid?");
});

var hey = document.querySelector("h1");

hey.addEventListener("mouseover", function() {
  hey.textContent = "You are stupid!";
});

/*Make a page with an image. 
When the user moves their cursor inside the image, 
it switches to a different picture. 
*/

var imageChange = ["images/dog1.jpeg", "images/dog2.jpeg"];
var image = document.querySelector("img");


var index = 1;

image.addEventListener("mouseover", function(){
    document.querySelector("img").setAttribute("src", imageChange[index]);
    index += 1;
    if (index == imageChange.length){
        index = 0;
    }
});


/*Make a paragraph that says “There is something here.” When the user copies the text, 
an alert pops up and says “Don’t you dare copy my text!!”
*/

var para = document.querySelector("p");

para.addEventListener("copy", function(){
    alert("Don't you dare copy my text!");
});

/*Write code so that when a user double clicks on the body of the page, 
it rotates between orange, green, and blue for the background colors.
*/

document.body.style.backgroundColor = "orange";

var colorArr = ["orange", "green", "blue"];

var i = 1;

document.querySelector("body").addEventListener("dblclick", function (){
    document.body.style.backgroundColor = colorArr[i];
    console.log(colorArr[i]);
    i ++;
    if (i == colorArr.length){
    i = 0;
    };
});
