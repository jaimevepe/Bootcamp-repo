const express = require('express');
const app = express();
const $fetch = require('node-fetch');

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.render('home.ejs');
})

app.get('/movies', (req, res)=>{
    let endpoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=da387bef20fb7cc25d1f59550606e2c4'
    $fetch(endpoint)
    .then(response =>{
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json()
    })
    .then(data =>{
        res.render('results.ejs', {data: data.results})
        console.log(data); //TODO: To see the object and the Value Keys in order to get the info
    })
    .catch(error, ()=> {
        console.error("There was an error in the network")
        
    })

})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})