// Read - send data to browser once browser loads
// Create - data when user inputs todo item in the browser
    // send data to server
    // handle errors from backend
    // send successful data to browser
// Delete - data chosen by user
    // verify data has been deleted from server BEFORE deleting data from browser
    // update the todo list with deleted item removed
    // TODO: what is event.stopPropagation?
    // TODO: html data attributes
    // TODO: bubbling and propagation
// Update - data chosen by the user
    // verify item has been updated on backend before updating on front end

    // TODO: AJAX Skeleton framework FOR: POST Method/ But the method can be PORT, GET, PUT, etc...
  //   $.ajax({
  //     data: { // POST only (for now) - simulates the body for server-side
  //         key: value,
  //         key: value 
  //     }, 
  //     url: "", // what is the url (path) we need to trigger server API?
  //     method: "" // What method? GET, POST, PUT, etc...
  // })
  // .done(function(dataObj){
  //     // What do we do with the data object once we get 
  //     // an ok and any data from server-side?
  // })
  // .fail(function(errObj){
  //     // What do we do with the error object if there 
  //     // is an error server-side?
  // })

// TODO: READ - GET
const todoUrl = "http://localhost:4000/todos"
$(document).ready(function(){
  $.ajax({
    url: todoUrl,
    method: "GET"
  })
  .done(function(dataObj){
    // do something with data
    $('ul').empty()
    dataObj.map(function(todo){
       let completed = todo.isComplete ? "completed" : ""
       $("ul").append(                  // class completed will take whatever is toggled on the Todo list
         `<li data-id=${todo.id} class="${completed}">
         ${todo.description}
         <span><i class='far fa-trash-alt'></i></span>
         </li>`
       )
    })
  })
  .fail(function(errObj){
    // do something with the error
    console.log(errObj);

  })
})


// TODO: CREATE - POST
$("input").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
  $.ajax({
    url: todoUrl,
    method: "POST",
    data: {
      item: $(this).val()
    }
  })
  .done(function(newTodo){
    // do something with data
    let completed = newTodo.isComplete ? "completed" : ""
    $("ul").append(                  // class completed will save whatever is toggled on the Todo list
      `<li data-id=${newTodo.id} class="${completed}">
      ${newTodo.description}
      <span><i class='far fa-trash-alt'></i></span>
      </li>`
    );
    $("input").val(""); // Move the "" to within the parentheses
  })
  .fail(function(errObj){
    console.log("Error getting data from delete", errObj);
    })
  }
});



// TODO: Update - PUT
$("ul").on("click", "li", function() {
  let thisTodoId = $(this).data('id');
  let self = this; // Now you can use THIS in other functions
  // console.log(this);
  $.ajax({
    url: `${todoUrl}/${thisTodoId}`,
    method: "PUT"
  })
  .done(function(){
    console.log("this is .done on PUT: ", self)
    $(self).toggleClass("completed");
  })
  .fail(function(error){
    console.error("Issues with trying to update class: ", error.responseText);
  })
});


// TODO: DELETE
$("ul").on("click", "span", function(event) {
  event.stopPropagation()// TODO: What is stopPropagation? -  stops the bubbling of an event to parent elements, 
                                                            //preventing any parent event handlers from being executed.

  let self = this; // this refers to span and is global inside the function
                   // I needs access to it later in another function so I am
                   // setting self var to this so i have access throught the handler

 // handles route based on id of the parent element since user clicks on span element (not id)                                                                     
  let thisTodoId = $(this).parent().data('id');
  const url = `${todoUrl}/${thisTodoId}`
  
  console.log('Delete id: ', thisTodoId);
  
  

  $.ajax({
    url: `${todoUrl}/${thisTodoId}`,
    method: "DELETE"
  })
  .done(function(){
    $(self).parent().remove(); // removes the lis element of the span clicked in browser
  })
  .fail(function(error){
    console.error("There was an Error dealing with DELETE")
  })
});

