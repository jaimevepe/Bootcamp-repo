const express = require('express')
const app = express();

const port = process.env.PORT || 3000; // wont work yet


app.get('/', (req, res) => {
    res.send('I am the root route')
});

app.get('/home', (req, res)=>{ 
    res.render('home.ejs')
})
​
app.get('/about', (req, res)=>{ // Need to make an About.ejs file on Views
    res.render('about.ejs')
})
​
app.get('/contact', (req, res)=>{ // Need to make and Contact.ejs file on Views
    res.render('contact.ejs')
})


app.get('/:data', (req, res) => { //need to make a views FOLDER and a home.ejs FILE
    console.log(req.params.data) // will console log DATA/ or what is DATA
    let data = req.params.data
    res.render('home.ejs', { data: data })
})


app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})

// Allways remember to kKILL the server
