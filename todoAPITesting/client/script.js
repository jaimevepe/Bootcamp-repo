
const todoUrl = 'http://localhost:3000/todos'

// Read - GET
$(document).ready(function(){
    $.ajax({
        url: todoUrl,
        method: "GET"
    })
    .done(function(dataObj){
        $('ul').empty();
        dataObj.map(function(todo){
            let completed = todo.isComplete ? "completed" : "";
            $('ul').append(
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span>X</span></li>`
            ); 
        })
    })
    .fail(function(errorObj){
        console.error('Issues getting create data from back end API ', errorObj);
    })
})


// Create - POST
$('input').keypress(function(event){
    if(event.which === 13 && $(this).val() !== '') {
        var newTodoItem = {
            description: $(this).val()
        }
        $.ajax({
            url: todoUrl,
            method: "POST",
            data: newTodoItem
        })
        .done(function(dataObj){
            $('ul').empty();
            dataObj.map(function(todo){
                let completed = todo.isComplete ? "completed" : "";
                $('ul').append(
                    `<li data-id=${todo.id} class=${completed}>${todo.description}<span>X</span></li>`
                ); 
            })
            $('input').val('');
        })
        .fail(function(error){
            console.log('Issue with POST data', error)
        }); 
    }
});

// Delete - DELETE 
$('ul').on('click', 'span', function(event){
    event.stopPropagation(); // TODO: what is stopPropagation?
    var self = this; // this refers to span and is global inside the function
                    // I need access to it later in another function so I am
                    // setting self var to this so I have access throughout the handler
    // handles route based on id of the parent element since user clicks on span element (no id)
    var thisId = $(this).parent().data('id');
    var url = `${todoUrl}/${thisId}`;
    $.ajax({ 
        url: url,
        method: 'DELETE',
    })
    .done(function(){
        $(self).parent().remove(); // removes the li element of the span clicked in browser
    })
    .fail(function(err){
        console.log('Delete failed with error ', err)
    });
});

// Update - PUT
$('ul').on('click', 'li', function(){
    let self = this;
    let thisTodoId = $(this).data('id')
    $.ajax({
        url: `${todoUrl}/${thisTodoId}`,
        method: 'PUT'
    })
    .done(function(){
        $(self).toggleClass('completed');    
    })
    .fail(error => console.log(`Issues with trying to update class: ${error}`))
});

