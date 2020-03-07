// console.log($("h1")[0]); // logs the h1

// console.log($("#burger")[0]); // logs content with ID burger

// console.log($(".sandwich")[0]); // logs content with class of sandwich

// setTimeout(function(){
//     $("#mypara").html('<p id="mypara">MY PARAGRAPH.</p>'); // will change paragraph every 3 to MY PARA...<p> iant really needed.

// }, 3000)

// // changing style css

// $("h1").css("color","red"); // changes h1 color to red

// $("#burger").css("border","2px solid blue"); // add border to or tag content ID burgers

// // change multiple properties 

// var theStyles = {
//     backgroundColor: "orange",
//     fontSize: "48px",
//     border: "solid 4px green"
// };
// $("#burger").css(theStyles); // will style ID burger content to theStyles VARIABLE

// $("div").css("background","blue");
// $(".fun").css("fontSize", "48px");
// $("#food").css("border", "green solid 8px");
// $(".fun:first").css("color", "orange"); // div:first or .fun:first is the first div. so instead of changing all .fun to oragne, we only changed the first one.

// // common jquery methods
// // text method
// $("h1").text("I changed the H1 text"); // changes content in h1 to "hello"
// // $("li").text("Bacon cheese burger"); // replaces all li's with bacon cheese burger

// // attr method

// $("img").attr("src", "https://media.olivegarden.com/images/site/ext/pages/_promotions/home/ogtogo-012819b-6gd.jpg"); // will change page picture to this one


// updates img with whatever img you want

// Exercise

// $("input").attr("type", "color");

// .Val();

$("inpiut").val(); // youll get the value of what you typed in on the console.

$("input").val('Hola Hello'); // will change input field.

$("select").val(); // will grab what the user selects

// .addClass() method

$("img").addClass("indicator");
// addClass() will add a class to html img thats already styled in css
// jquery will add the class indicator because theres an indicator class in the stylesheet with the border

//removeClass()

$("img").removeClass("indicator"); // will remove the class indicator removing the border style

//toggleClass() --- will add Class, but is there is a class, it will take it away

$("img").toggleClass("indicator");
// added indicator since a class didnt exist, if it did, it would of removed it

// $("img").fadeOut(3000); // will remove the img make it FADE for 3 secs

// $("img").fadeIn(3000); // will add the img back in, as a FADE affect for 3 secs

// $("img").fadeToggle(3000); // will fade out if not fade in, and will fade in if already faded out

// EVENTS using jquery

// $("img").click(function(){    // clickevent
//     alert("you clicked the img!");
// }); //window will pop up an alert saying you clicked on img

// $("li").click(function(){;
//     $(this).fadeOut(4000); // change li to THIS to only fadeout the one you clicked on
// }); // list items will fade out when clicked on

// $("li").click(function(){
//     var text = $(this).text();
//     alert(`you clicked on ${text}`);
// });

// Keypress() method

// $("input").keypress(function(){
//     alert("you pressed a key");
// }); // will alert you if you input or pressed a key in the input field

// $("input").keypress(function(event){
//     console.log(event);
// }); // will console log keyboardEVENT

$("input").keypress(function(event){
    if(event.which===13)
    return alert("You hit the Enter Key");
});

// .append();

$("ul").append("<li>Hot dog</li>"); // add bottom of list
$("ul").prepend("<li>hot dog</li>"); // add begigning of list

// .on

$("img").on("dblclick", function(){
    alert("you double clicked on the image!");
});

$("img").on("mouseenter", function(){
    $(this).toggleClass("indicator");
}); // will remove and add indicator CSS style when mouse enters the image

// $("img").on("click", function(){
//     $(this).remove();
// })

$("li").on("click", function(){
    $(this).parent().remove();
}) // parent will be the <ul> so the entire list will be removed

$("img").on("click", function(){
    $(this).fadeOut(6000, function(){
        alert("image is now gone"); // once image is gone the alert will pop up after the 6 secs
    });
});