const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/submit', (req, res) => {
    res.render("submit.ejs")
})

app.post('/submit', (req, res) => {
    console.log(req.body)
    res.render("submit.ejs", {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        resume: req.body.resume
    })
})

app.listen(port, ()=> {
 console.log("App on port, :", port)
});