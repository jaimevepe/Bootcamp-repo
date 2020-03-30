const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.render('home.ejs')
});

app.get('/about', (req, res) => {
    res.render('about.ejs')
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.listen(3000, () => {
    console.log('Listening on Port 3000!!');
});