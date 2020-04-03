const express = require('express');
const app = express();

const fetch = require('node-fetch');

let endpoint = 'https://api.lyrics.ovh/v1'

const port = process.env.PORT || 3000

app.use(express.static('public')) // for CSS to work on page

app.get('/', (req, res) =>{
    res.render('home.ejs')
})
// submit button on a form will be sent to the URL as a Query

// req.query instead of req.params

app.get('/lyricsResults', (req, res) => {

    // let artist = req.query.artist // on html name="artist"
    // let title = req.query.title  // on html name="title"
    let url = `${endpoint}/${req.query.artist}/${req.query.title}`;
    fetch(url)
    .then(function(response){
        if(!response.ok){
            throw Error(response.statusText);
            
        }
        return response.json()
    })
    .then(function(data){
        let theLyrics = data.lyrics.replace(/\n/gi, "<br>");
        console.log(theLyrics);
        res.render("results.ejs", {words: theLyrics});
    })
    .catch(function(error){
        console.error("Error from network: ", error);
        res.render('error.ejs', {error: "No matches found."});

    });
});

app.listen(port, () =>{
    console.log(`Running port ${port}`)
});

// Research the following
// res.end()
// res.send()
// res.render()
// res.json()