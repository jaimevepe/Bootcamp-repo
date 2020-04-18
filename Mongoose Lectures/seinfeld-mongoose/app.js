// Connecting 
const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/databases'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(function () {
        console.log(`Connected to database: ${url}`)
    })
    .catch(err => {
        console.error("Error: ", err)
    })

// Blueprints
// Schema - DONE
// Model

let personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

// When building your model
// passing in collection - standard practice Capitalized and singular
// Mongo will convert to lowercase and pluralize - actors
let actorModel = mongoose.model("Actor", personSchema)


// Queries

let actor = new actorModel({
    name: 'Jerry',
    age: 49,
    email: 'jerryseinfeld@gmail.com'
})

// MONGO we have to use db.coolection.insert()......with mongoose .save() is the same

// MONGOOSE
// actor.save(function (error, result) {
//     if (error) {
//         console.log("Error from database with save: ", error)
//     } else {
//         console.log("Succesfully saved")
//         console.log("Document: ", result)
//     }
// })

actorModel.create({ // Diff actor.save Method
    name: "Elaine",
    age: 41,
    email: "Elaine@gmail.com"
}, 
(err, result)=>{
    err ?
    console.log('Error from database with find: ', err)
    : console.log("succesfully found: ", result)

    //TODO: same as above
    // if (err) {
    //     console.log("Error from database with save: ", err)
    //     } else {
    //     console.log("Succesfully saved")
    //     console.log("Document: ", result)
    //         }
})

// MONGO find()

// MONGOOSE find
actorModel.find({}, (error, results)=>{
    if (error) {
        console.log("Error from database with find: ", error)
    } else {
        console.log("Succesfully found")
        console.log("Document: ", results)
        mongoose.disconnect()
    }
})