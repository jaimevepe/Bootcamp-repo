console.log($("h1")[0]); // logs the h1

console.log($("#burger")[0]); // logs content with ID burger

console.log($(".sandwich")[0]); // logs content with class of sandwich

setTimeout(function(){
    $("#mypara").html('<p id="mypara">MY PARAGRAPH.</p>'); // will change paragraph every 3 to MY PARA...<p> iant really needed.

}, 3000)

// changing style css

$("h1").css("color","red"); // changes h1 color to red

$("#burger").css("border","2px solid blue"); // add border to or tag content ID burgers

// change multiple properties 

var theStyles = {
    backgroundColor: "orange",
    fontSize: "48px",
    border: "solid 4px green"
};
$("#burger").css(theStyles); // will style ID burger content to theStyles VARIABLE

$("div").css("background","blue");
$(".fun").css("fontSize", "48px");
$("#food").css("border", "green solid 8px");
$(".fun:first").css("color", "orange"); // div:first or .fun:first is the first div. so instead of changing all .fun to oragne, we only changed the first one.

// common jquery methods
// text method
$("h1").text("I changed the H1 text"); // changes content in h1 to "hello"
$("li").text("Bacon cheese burger"); // replaces all li's with bacon cheese burger

// attr method

$("img").attr("src", "https://media.olivegarden.com/images/site/ext/pages/_promotions/home/ogtogo-012819b-6gd.jpg");

// updates img with whatever img you want

// Exercise

$("input").attr("type", "color");