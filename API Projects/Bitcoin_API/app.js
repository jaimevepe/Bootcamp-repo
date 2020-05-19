const express = require("express");
const app = express();

app.use(express.static('public'));

const $fetch = require('node-fetch');

let url = "https://api.coindesk.com/v1/bpi/currentprice.json" // TODO: API endpoint url

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render("index.ejs", {rate: "", symbol: ""});
});

app.get('/price', (req, res)=> {
    $fetch(url)
    .then(response =>{
        if(!response.ok){ // TODO: if not ok, stop and throw an error
            throw Error(response.statusText);
        }
        return response.json(); //TODO: extract data from response and move to the next
    })
    .then(data => {
        let rate = data.bpi[req.query.currency].rate_float.toFixed(2); // TODO: currency is the name="currency" on inputs
        let symbol = data.bpi[req.query.currency].symbol;    // Always check to have the value attribute on input or else data wont be sent
        console.log(rate);
        res.render("index.ejs", { rate: rate, symbol: symbol }); //TODO: same as {rate: rate} and {symbol: symbol}
    })
    .catch(error => {
        console.error("Error from network");
        res.render("index.ejs", {error : "There was an Error"});
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})