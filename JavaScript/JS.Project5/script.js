var catArr = ["images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
var i = 1;

// For Next button
var but = document.querySelector("button")
console.log(but);



but.addEventListener("click", function() {
    document.querySelector("img").setAttribute("src", catArr[i]);
   i ++;
  if (i === catArr.length){
      i = 0;
  };
} );

// For Previous button

var but2 = document.querySelector(".pic")
console.log(but2);
var img = document.querySelector("img")

but2.addEventListener("click", function () {
  if  (i < catArr.length && i > 0)  {
       i = i - 1;
       img.setAttribute("src", catArr[i]);
       console.log(i);
       console.log(catArr[i]);
   } else {
       i = 0;
       img.setAttribute("src", catArr[i]);
       console.log(i);
       console.log(catArr[i]);
   }  
});




// but2.addEventListener("click", function() {
//     i --;
//     document.querySelector("img").setAttribute("src", catArr[i]);
  
//   if (i == catArr.length){
//       i = 0;
//   }
// });