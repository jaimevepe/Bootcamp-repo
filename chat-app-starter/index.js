// Require express and initialize it
const express = require('express');
const app = express();

// Declare a port variable
const port = process.env.PORT || 3000;

// Require socket.io and pass the server object to it
const io = require('socket.io')(
    app.listen( port, () => { 
        console.log("App listening on port: ", port)
    })
)

// Tell our app to use our client folder as static code
app.use(express.static('client'));

// Set up a home route and send the client folder
// app.get('/', (req, res) => {      TODO:
//     res.send('client')    TODO: DONT NEED TODO:
// })                                TODO:


// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', socket => {
    console.log("New user joined!")
    socket.on('New User', data => {
        console.log(`This is the New User: ${data}`)
        io.emit('New User', data)
    })

    socket.on('New Message', data => {
        console.log('this is the New Message:', data)
        io.emit('New Message', data)
    })
})
