var picArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
var i = 0;

var img = document.querySelector("img")
var next = document.getElementById("next")
var previous = document.getElementById("previous")




// For Next button

next.addEventListener("click", function() {
  img.setAttribute("src", picArr[i])
  i ++ ;
  if (i == picArr.length) {
      i = 0;
  } 
  console.log(i)
  console.log(picArr[i])
});


// For Previous button

previous.addEventListener("click", function() {
  img.setAttribute("src", picArr[i]);
  i -- ;
  if (i === -1) {
    i = picArr.length -1;
  } else if (i === 0) {
    i = 0;
  };
  
  console.log(i);
  console.log(picArr[i]);
});







