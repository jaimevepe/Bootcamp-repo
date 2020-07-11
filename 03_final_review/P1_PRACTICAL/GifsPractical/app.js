const express = require('express');

const app = express();

const $fetch = require('node-fetch');

app.use(express.static('public'))

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render("index.ejs")
})

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=pLT2uNg7qgI2DHqMFP4pTCNQmDDoE4JP&q=search&limit=25&offset=0&rating=r&lang=en"

app.get('/gifs', (req, res) => {

  let user = req.query.search;
  let url = `${endpoint}/${user}`

    $fetch( url )
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // console.log("This is the DATA : ", data)
        res.render('results.ejs', { data: data.data} )
        console.log(data)
      })
      .catch(err => console.error("Error from the server : ", err))
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})