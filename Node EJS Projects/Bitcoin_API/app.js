const express = require("express");
const app = express();

app.use(express.static('public'));

const $fetch = require('node-fetch');

let url = "https://api.coindesk.com/v1/bpi/currentprice.json"

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/price', (req, res)=> {
    $fetch(url)
    .then(response =>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        let rate = data.bpi[req.query.currency].rate_float.toFixed(2);
        let symbol = data.bpi[req.query.currency].symbol;
        console.log(rate);
        res.render("index.ejs", { rate, symbol });
    })
    .catch(error => {
        console.error("Error from network");
        res.render("index.ejs", {error : "There was an Error"});
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})