var catArr = ["images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
var i = 1;

var img = document.querySelector("img")
var but = document.getElementById("next")
var but2 = document.getElementById("previous")




// For Next button

but.addEventListener("click", function() {
    document.querySelector("img").setAttribute("src", catArr[i]);
   i ++;
   console.log(catArr[i]);
   console.log(i);
  if (i === catArr.length){
      i = 0;
  };
} );

// For Previous button

but2.addEventListener("click", function() {
    img.setAttribute("src", catArr[i]);
    i --;
  if (i == -1){
      i = catArr.length -1;
  }
});







