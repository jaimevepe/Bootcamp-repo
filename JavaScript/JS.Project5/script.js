var picArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
var i = 0;

var img = document.querySelector("img")
var next = document.getElementById("next")
var previous = document.getElementById("previous")




// For Next button

next.addEventListener("click", function() {
   
  if (i !== picArr.length-1) {
      i++;
      document.querySelector("img").setAttribute("src", picArr[i]);
       console.log(picArr[i]);
       console.log(i);
  
  } else {
    i = 0;
  }
} );

// For Previous button

previous.addEventListener("click", function() {
  
  i--
   img.setAttribute("src", picArr[i]);
    console.log(picArr[i]);
    console.log(i);
  if (i == -1){
      i = picArr.length -1;
      
  }
});







