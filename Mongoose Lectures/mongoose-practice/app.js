const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/jaime_cookie_shop'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(function () {
        console.log(`Connected to database: ${url}`)
    })
    .catch(err => {
        console.error("Error: ", err)
    })

    let bakeSchema = new mongoose.Schema({
        name: String,
        price: Number,
        tasty: Boolean
    })

    let bakeModel = mongoose.model("bake", bakeSchema)


    let chocolatechip = new bakeModel({
        name: 'Chocolate chip',
        price: 1.99,
        tasty: true
    })

//     chocolatechip.save(function (error, result) {
//         error ?
//         console.log(`Error from database with save:  ${error}`)
//         : console.log(`Succesfully saved Document:  ${result}`)
// })

// bakeModel.create({ // Diff actor.save Method
//     name: "Raisen",
//     price: 2.49,
//     tasty: false
// },

// (err, result)=>{
//     err ?
//     console.log('Error from database with find: ', err)
//     : console.log("succesfully found: ", result)

// })

// bakeModel.create({ // Diff actor.save Method
//     name: "sugar",
//     price: 1.99,
//     tasty: false
// }, 
// (err, result)=>{
//     err ?
//     console.log('Error from database with find: ', err)
//     : console.log("succesfully found: ", result)

// })

// bakeModel.find({tasty: true}, (error, results)=>{ // TODO: find products that are tasty in document
//     if (error) {
//         console.log("Error from database with find: ", error)
//     } else {
//         console.log("Document: ", results)
        
//     }
// })

bakeModel.find({tasty: true}) // TODO: Other way to use Find()
.then( result => console.log("Result: ", result))
.catch( error =>{console.log(error)})