const express = require('express');
const app = express();

const person = require('./data'); // TODO: Exported Module from data.js

const port = process.env.PORT || 3000;


app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});