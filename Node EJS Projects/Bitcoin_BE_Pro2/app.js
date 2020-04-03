const express = require('express');
const app = express();
const $fetch = require('node-fetch');

const port = process.env.PORT || 3000;

let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'

app.use(express.static('public'));

app.get('/', (req, res) => {
    let url = `${endpoint}/${req.query.usd}/${req.query.gbp}/${req.query.eur}`;
    console.log(url);
    $fetch(url)
    .then(response =>{
        if(!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        res.render('index.ejs', {convert: data})
    })
    .catch(error => {
        console.error("Error from network");
        res.render("index.ejs", {error: "There was an Error"});
    })
});


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})


