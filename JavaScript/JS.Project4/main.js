var imageChange = ['url("images/background1.jpg")', 'url("images/background2.jpg")', 'url("images/background3.jpg")'];

var i = 1;
// var img = document.querySelector("img");




setInterval(function() {
    console.log(imageChange[i]);
    document.body.style.backgroundImage=imageChange[i]; 
    
    i ++;
   if (i === imageChange.length){
       i = 0;
   };
}, 3000);

