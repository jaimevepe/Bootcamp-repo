const express = require("express");
const app = express();

app.use(express.static('public'));

const $fetch = require('node-fetch');

let url = "https://api.coindesk.com/v1/bpi/currentprice.json"

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render("index.ejs");
});

app.get('/price', (req, res)=> {
    $fetch(url)
    .then(response => {
        if (!response.ok){
            throw Error
        }
        console.log(response.json());
        return response.json();
    })
    .then(data =>{
        let currency = req.query.currency;
        let rate = data.bpi[currency].rate_float;
        console.log(`${rate}`);
        res.render("index.ejs", {rate: rate});
    })
    .catch(error =>{
        console.error("Error from the network");
        res.end();
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})