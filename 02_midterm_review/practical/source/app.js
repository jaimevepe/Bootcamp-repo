// require needed modules
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
    //need to manipulate endpoint so it takes the input as :id
    let id = req.query.userNumber
    let url = `${endpoint}/${id}/`
    //fetch data from the SWAPI endpoint
    $fetch(url)
    //get the JSON obj from API and throw error if there is anything wrong with the connection
    .then(response => {
        if (!response.ok) {
            // if respnse is not ok--> throw error
          throw Error(response.statusText);
        }
        //if ok, return JSON obj
        return response.json();
      })
      //extract the info I need to show on results.ejs- should display the name, height, and hair color of that character.
    .then(data => {
        //changed {data : data.results} to just {data. data} bc reults returns undefined bc I don't need a property if only one obj is being returned
        res.render('results.ejs', {data: data})
    })
    //console log any error messages to help debug
    .catch(error => {
        console.error("Error from network: ", error),
        //end process if err
        res.end()
    })



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

app.listen(3000, function() {
    console.log("Star Wars backend running on port 3000");
});