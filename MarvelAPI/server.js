require('dotenv').config() // TODO: to be able to use dotenv

const express = require("express");
const app = express();
const $fetch = require("node-fetch");
const crypto = require('crypto');

const port = process.env.PORT || 3000
const pubKey = process.env.PUB_KEY
const privKey = process.env.PRIV_KEY

const CharModel = require('./db') // were mongoose scheme is stored in



app.listen(port, () => {
    console.log('App listening on port:', port)
})

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/search', (req, res)=>{
    let characName = req.query.chName // chName is on the input name=""
    
    let ts = Date.now()
    let preHash = ts + privKey + pubKey // make sure ts is first or else you wont get a number
    let hash = crypto.createHash('md5').update(preHash).digest('hex') // md5 one of three thing we need for API
                                             // .update needs ts, pub key and priv key
    console.log(`This is the hash: ${hash}`)
    let url = 'https://gateway.marvel.com/v1/public/characters?limit=10&nameStartsWith=' 
                + characName
                + `&ts=${ts}`
                + '&apikey='
                + pubKey
                + '&hash='
                + hash
                
    $fetch(url)
    .then(response => response.json())
    .then(results => {
        console.log('Results: ', results.data.results)
        res.render('results.ejs', {data: results.data.results}) // on results, you use data for a forEach.....data.forEach()....
    })
    .catch(error => console.log('Error', error))
})

app.get('/showResult', (req, res)=> {
    CharModel.find({}, (err, results)=>{ // {} means show me everything
    if(err){
        console.log(err)
    } else {
        console.log(results)
        res.render('dbResults.ejs', {data: results})
    }
    }) 
})



// app.get('/search', (req, res) => {
//     let characName = req.query.chName // chName is on the input name=""
//     let ts = Date.now()
//     let preHash = ts + pubKey + privKey // make sure ts is first or else you wont get a number
//     console.log(`This is the preHash: ${preHash}`)

//     let hash = crypto.createHash('md5').update(preHash).digest('hex') // md5 one of three thing we need for API
//                                         // .update needs ts, pub key and priv key
//     console.log(`This is the hash: ${hash}`)

//     let url = "https://gateway.marvel.com/v1/public/characters?limit=10&nameStartsWith="
//             + characName
//             + '&apikey='
//             + pubKey
//             + "&hash="
//             + hash
//             + "&ts="
//             + ts 

//     $fetch(url)
//         .then(response => response.json())
//         .then(results => {
//             console.log(results)
//             res.render('results.ejs', { data: results })
//         })
//         .catch(err => console.log('Error from search API', err))
// })

