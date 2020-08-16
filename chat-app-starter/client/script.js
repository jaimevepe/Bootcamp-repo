// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

// ------------- Nickname Elements We Need ------------------------------
// 1. Create a variable called "nickname" and select the div with the class
//	  "nickname"
const nickname = document.querySelector('.nickname')

// 2. Create a variable called "nicknameSubmit" and select the button with 
//	  the class "nickname__submit"
const nicknameSubmit = document.querySelector('.nickname__submit')


// 3. Create a variable called "nicknameInput" and select the input with the 
// 	  ID "nickname"
const nicknameInput = document.getElementById('nickname')

// -------------- Chat Elements We Need ---------------------------------
// 1. Create a variable called "message" and select the input with the ID
//	  "message"
const message = document.getElementById('message')

// 2. Create a variable called "chatMessages" and select the div with the 
//	  class "chat__messages"
const chatMessages = document.querySelector('.chat__messages')

// 3. Create a variable called "sendNewMessage" and select the button with 
//    the class "chat__submit"
const sendNewMessage = document.querySelector('.chat__submit')



// Create new io instance:
const socket = io()

// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen
if(!sessionStorage.getItem('nickname')) {
    nickname.style.display = 'initial'
    nicknameSubmit.addEventListener('click', () => {
        // This is where invalid inputs are handled 
        sessionStorage.setItem('nickname', nicknameInput.value)
        nickname.style.display = 'none'
        socket.emit('New User', sessionStorage.getItem('nickname'))
    })
}



// ------------------------------------
// Functions to create new messages:  |
// ------------------------------------

// Create a new user joined message
const newUserJoined = user => {
    return `
        <div class="chat__new-user-joined">
            <i>${user} has joined the chat</i>
        </div>
    `;
}

// Create a new message from a user
const newMessageReceived = (user, message) => {
    return `
        <div class="chat__user-message">
            <div class="chat__user-nickname">${user}</div>
            <div class="chat__user-text">
                ${message}
            </div>
        </div>
    `
}




// ------------------------------------
//          Socket Events             |
// ------------------------------------

// When the user clicks to send a new message emit that message and their nickname
sendNewMessage.addEventListener('click', () => {
    socket.emit('New Message', {
        message: message.value,
        nickname: sessionStorage.getItem('nickname')
    })
    return message.value = ''
})


// When the socket receives a new message
socket.on('New Message', data => {
    console.log('This is the New Message: ' , data)
    chatMessages.innerHTML += newMessageReceived(data.nickname, data.message)
})

// When the socket receives a new user
socket.on('New User', data => {
    console.log('This is the New User: ', data)
    chatMessages.innerHTML += newUserJoined(data) //the user name/nickname
})

// Optimizations
// 1. Load all previous messages and users who joined
// 2. Add error handling so that users cannot enter empty nicknames or messages
// 3. Make it so that a user can press enter to send the message
// 4. Show when users disconnect from the chat
// 5. Allow users to pick their own color
// 6. InnerHTML is not a good way to insert new HTML. Try to find the appropriate way to do this
