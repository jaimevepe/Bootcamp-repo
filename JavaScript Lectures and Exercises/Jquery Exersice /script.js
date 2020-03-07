// add a bootstrap navbar to the top of the page.
// paste bootstrap code in variable
const navbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>`; // use variable in jquery function

$("body").prepend(navbar);

// center only the h1 and h2 text.

$("h1 h2").addClass("text-center"); // bootstrap
// CSS
$("h1 h2").css("textAlign", "center");

// use jquery to 
// - change the submit buttonnto have BT btn stylings
// - Hide error message for the room number input
// - when the user clicks on the submit button, if there is anything
// other than numbers in the room number input box, the erros message should
// show and text should be red.

// submit button

$('button:contains("Submit")').addClass("btn btn-success");
// $("button").last().append(submit);

// erros message

// $(".error").remove();
// OR
$(".error").css("display", "none"); 



$("button:contains('Submit')").click(() => {
    if(!$.isNumeric($("input[name='roomnumber']").val())){
        $(".error").css('display', 'initial').addClass("text-danger");
    } // if input has anything OTHER then number, RED error msg shows
    else {
        const data = {
            fname: $("input[name='firstname']").val(),
            lname: $("input[name='lastname']").val(),
            butter: $("input[name='butter']").val(),
            entree: $("select[name='entree']").val(),
            roomnumber: $("input[name='roomnumber']").val(),
            time: $("select[name='time']").val() // - Else when the user clicks "Submit" all the data from the form should
                                                    // be saved to an object called "data"
        };
      
      $(".container").hide("slide");  // everything will "hide" when you submit valid values
    
      const card = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${data.fname} ${data.lname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.roomnumber}</h6>
        <p class="card-text">${data.entree}</p>
        <p>Time: ${data.time} </p>
        <p>Butter: ${data.butter} </p>
      </div>
    </div>`;
     
     $(card).hide().appendTo("body").fadeIn(5000);  // will display BT card with the DATA after you press Submit
                                                    // and will FadeIn for 5 secs
    }
});


// - The original  content of hte page should now slide off to the left 
// of the browser and only the navbar shoulf be visible






