// require needed modules after npm installing
var express = require('express');
var app = express();

// To be able to use CSS
app.use(express.static('plublic'));
// const request = require('request');
const $fetch = require('node-fetch');

const port = process.env.PORT || 3000;

// render home page
app.get('/', function(req, res) {
    res.render('home.ejs');
});

let endpoint = 'http://swapi.dev/api/people'; // star wars characters endpoint

// render results
app.get('/results', function(req, res) {
    let id = req.query.userNumber
    // need to manipulate endpoint takes the input id
    
    let url = `${endpoint}/${id}/`
    // url will now be endpoint and id

    //fetch data from the API endpoint

    $fetch(url)
    .then(response => {
        if (!response.ok) {
            // if response is not ok then it will throw error
          throw Error(response.statusText);
        }
        //if ok, return JSON obj then move to the next
        return response.json();
      })
    .then(data => {
        res.render('results.ejs', {data: data})
        console.log(data)
        // use data.name and everything else in results.ejs page
    })
    .catch(error => {    //console log any error msg

        console.error("Error from network: ", error),
        //end cycle process
        res.end()
    })


// used request but didnt work out for me

    // let id = req.query.userName;
    // let url = `${endpoint}/${id}/`;
    // request(url, (error, response, body)=>{
    //     console.log("Response: ", response)
    //     if(!error, response, body){
    //     let charac = JSON.parse(body);
    //     res.render("results.ejs", {data: charac.results})
    //     }
    // })
    // fill out the code here which calls the Star Wars api end point
    // gets the data and then renders the results.ejs page.

    // also remember to handle the errors if any

    // you may have to use request or axios or any of the http modules
    // to make the call to the sw api.

});
 // for localhost 3000 on browser
app.listen(3000, function() {
    console.log("Star Wars backend running on port 3000");
});