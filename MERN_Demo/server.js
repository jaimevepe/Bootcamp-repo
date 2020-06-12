const express = require('express');
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 5000;



app.get("/test", (req, res) => {
    res.json({message: "Hello from the server!!"})
})

//-----------connecting/making Mongo DB----------------//
let url = 'mongodb://localHost:27017/mern_demo'

mongoose.connect(url, {useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log('Mongo connected'))
.catch()

// Schema
let mernSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "first Name is required"]
    }
})

let MernModel = mongoose.model("Mern", mernSchema) // merns



app.post("/new", (req, res) => {

    MernModel.create({
        ...req.body // no matter what we decide to be in the body, it will ALL be passed
         }, function(err, result){    
             let message = err ? err : result;
             res.json(message)
         })
         
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})