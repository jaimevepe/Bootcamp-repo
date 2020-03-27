const express = require('express');
const app = express();

// we will be passing variables from your app.js file to your rendered template pages. In app.js, create three variables
const pizza = 'I like my pizza with extra pineapple.';
const cappuccino = 'I like my cappuccino sweet.';
const fries = 'I like my fries crispy with extra salt.';


app.set('view engine', 'ejs'); // set view engine
app.set("views", __dirname + "/views"); // Tell Express where we keep our EJS Files


app.get('/', (req, res) => {
    res.send('I am the Root Route');
});

app.get('/home', (req, res) => {
    res.render('home.ejs', {pizza}); // passing pizza variable into EJS home using <%=pizza %>
});

app.get('/about', (req, res) => {
    res.render('about.ejs', {cappuccino}); //passinf capp variable into EJS about <%=capp %>
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {fries}); // passing Fries var into EJS contact <%=fries %>
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});