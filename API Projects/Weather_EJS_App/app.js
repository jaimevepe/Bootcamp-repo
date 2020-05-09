const express = require('express');
const app = express();

const request = require('request');

let port = process.env.PORT || 3000;

let weatherRequest = 'https://www.metaweather.com/api/location/2487956/' 

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.get('/results', (req, res) =>{
    request(weatherRequest, function(error, response, body){
        console.log('response', response);
        if(!error && response.statusCode == 200){
            let parsedData = JSON.parse(body);
            res.render('results.ejs', {data: parsedData});
            console.log(parsedData);
        }
    })
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

