const express = require('express');
const fetch = require('node-fetch');

const app = express();

var image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`
let url = "https://dog.ceo/api/breeds/image/random"

const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Route Handlers

app.get('/', (req, res) => {
    res.render('home.ejs', {image : image});
});

app.get('/dogSearch', (req, res) => {
    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json() //extract data from Response object then return the next promise
    })
    
    .then(function(data){
        res.render('home.ejs', {image : data.message})
    })

    .catch(function(error){
        console.error('Error from the network: ', error);
    })

})

app.listen(port, ()=>{
    console.log(`App listening on port : ${port}`)
});

